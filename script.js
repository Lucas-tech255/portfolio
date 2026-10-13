"use strict";

// Textos da apresentação. A escolha de idioma é mantida neste navegador.
const traducoes = {
    pt: {
        subtitulo: "Estudante de Ciência da Computação",
        apresentacao: "Sou estudante de Ciência da Computação na PUC Minas e técnico em Informática pelo IFMG — Campus Ribeirão das Neves.",
        interesses: "Tenho interesse em desenvolvimento de software, inteligência artificial, segurança da informação e empreendedorismo. Busco fortalecer minha base em computação e aplicar o que aprendo em projetos que resolvam necessidades reais.",
        formacao: "Formação", curso: "Ciência da Computação", puc: "PUC Minas — desde janeiro de 2026",
        tecnico: "Técnico em Informática", ifmg: "IFMG — Campus Ribeirão das Neves — 2022 a 2024"
    },
    en: {
        subtitulo: "Computer Science Student",
        apresentacao: "I am a Computer Science student at PUC Minas and hold a technical qualification in Information Technology from IFMG — Ribeirão das Neves Campus.",
        interesses: "I am interested in software development, artificial intelligence, information security and entrepreneurship. I aim to strengthen my foundation in computing and apply what I learn to projects that address real needs.",
        formacao: "Education", curso: "Computer Science", puc: "PUC Minas — since January 2026",
        tecnico: "Technical Qualification in Information Technology", ifmg: "IFMG — Ribeirão das Neves Campus — 2022 to 2024"
    }
};

// Altera somente a apresentação; o restante da página permanece em português.
function definirIdioma(idioma) {
    if (!traducoes[idioma]) idioma = "pt";
    document.querySelectorAll("[data-traducao]").forEach(elemento => {
        elemento.textContent = traducoes[idioma][elemento.dataset.traducao];
        elemento.lang = idioma === "pt" ? "pt-BR" : "en";
    });
    document.querySelectorAll("[data-idioma]").forEach(botao => {
        const ativo = botao.dataset.idioma === idioma;
        botao.classList.toggle("active", ativo);
        botao.setAttribute("aria-pressed", String(ativo));
    });
    try { localStorage.setItem("idioma-apresentacao", idioma); } catch (_) { /* Navegação privada pode bloquear armazenamento. */ }
}

// Cria elementos com textContent para evitar interpretar dados como HTML.
function elemento(tag, texto, classe) {
    const no = document.createElement(tag);
    if (texto) no.textContent = texto;
    if (classe) no.className = classe;
    return no;
}
function urlSegura(valor) {
    try { const url = new URL(valor); return url.protocol === "https:" ? url.href : null; }
    catch (_) { return null; }
}
function linkProjeto(texto, url) {
    const link = elemento("a", texto, "me-3");
    link.href = url; link.target = "_blank"; link.rel = "noopener noreferrer";
    return link;
}

// A timeline é reconstruída pelos dados e pode ser filtrada por categoria.
function renderizarProjetos(filtro = "todos") {
    const lista = document.getElementById("lista-projetos");
    lista.replaceChildren();
    const projetos = [...window.PROJETOS].sort((a, b) => a.ordem - b.ordem)
        .filter(projeto => filtro === "todos" || projeto.categoria === filtro);
    projetos.forEach(projeto => {
        const artigo = elemento("article", "", "projeto");
        const linha = elemento("div", "", "row align-items-center g-4");
        const texto = elemento("div", "", "col-md-7");
        texto.append(elemento("h3", projeto.nome), elemento("p", projeto.status, "texto-secundario"));
        const periodo = elemento("p", projeto.periodo, "periodo");
        if (projeto.inicio) {
            const data = elemento("time", projeto.periodo); data.dateTime = projeto.inicio;
            periodo.replaceChildren(data);
        }
        texto.append(periodo, elemento("p", projeto.descricao));
        if (projeto.tecnologias.length) {
            const tecnologias = elemento("ul", "", "tecnologias");
            projeto.tecnologias.forEach(nome => tecnologias.append(elemento("li", nome)));
            texto.append(tecnologias);
        } else texto.append(elemento("p", "Tecnologias: a confirmar", "texto-secundario"));
        const github = urlSegura(projeto.github), demo = urlSegura(projeto.demo);
        if (github) texto.append(linkProjeto("Repositório no GitHub", github));
        else texto.append(elemento("p", "Repositório do projeto: a adicionar", "texto-secundario"));
        if (demo) texto.append(linkProjeto("Ver projeto", demo));
        const midia = elemento("div", "", "col-md-5");
        // Imagens devem ser arquivos locais, dentro de assets/projetos/.
        if (/^assets\/projetos\/[a-zA-Z0-9_.-]+\.(png|jpe?g|webp|gif)$/i.test(projeto.imagem)) {
            const imagem = elemento("img", "", "imagem-projeto");
            imagem.src = projeto.imagem; imagem.alt = projeto.alt; imagem.loading = "lazy";
            midia.append(imagem);
        } else midia.append(elemento("div", "Imagem ou GIF do projeto — a adicionar", "imagem-projeto texto-secundario"));
        linha.append(texto, midia); artigo.append(linha); lista.append(artigo);
    });
    document.querySelectorAll("[data-filtro]").forEach(botao => {
        const ativo = botao.dataset.filtro === filtro;
        botao.classList.toggle("active", ativo); botao.setAttribute("aria-pressed", String(ativo));
    });
}

// Envia ao EmailJS somente após validação e configuração, sem simular sucesso.
async function enviarMensagem(evento) {
    evento.preventDefault();
    const form = evento.currentTarget;
    if (!form.reportValidity()) return;
    const retorno = document.getElementById("retorno-formulario");
    const botao = document.getElementById("enviar");
    retorno.className = "mt-3";
    const config = window.CONFIG_CONTATO || {};
    if (!config.publicKey || !config.serviceId || !config.templateId) {
        retorno.textContent = "O envio de mensagens ainda não foi configurado. Entre em contato pelo LinkedIn.";
        retorno.classList.add("retorno-erro"); return;
    }
    if (form.elements.website.value) return;
    const nome = form.elements.nome.value.trim();
    const mensagem = form.elements.mensagem.value.trim();
    if (!nome || mensagem.length < 10) {
        retorno.textContent = "Informe seu nome e uma mensagem com pelo menos 10 caracteres.";
        retorno.classList.add("retorno-erro"); return;
    }
    const ultimoEnvio = Number(form.dataset.ultimoEnvio || 0);
    if (Date.now() - ultimoEnvio < 30000) {
        retorno.textContent = "Aguarde alguns segundos antes de enviar outra mensagem."; return;
    }
    botao.disabled = true; botao.textContent = "Enviando…"; retorno.textContent = "Enviando sua mensagem…";
    const controle = new AbortController();
    const timeout = setTimeout(() => controle.abort(), 15000);
    try {
        const resposta = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
            method: "POST", headers: { "Content-Type": "application/json" }, signal: controle.signal,
            body: JSON.stringify({ service_id: config.serviceId, template_id: config.templateId, user_id: config.publicKey,
                template_params: { from_name: nome, reply_to: form.elements.email.value.trim(), message: mensagem } })
        });
        if (!resposta.ok) throw new Error("Falha no serviço");
        retorno.textContent = "Mensagem enviada com sucesso! Obrigado pelo contato.";
        retorno.classList.add("retorno-sucesso"); form.reset(); form.dataset.ultimoEnvio = String(Date.now());
    } catch (_) {
        retorno.textContent = "Não foi possível enviar. Verifique sua conexão e tente novamente, ou fale comigo pelo LinkedIn.";
        retorno.classList.add("retorno-erro");
    } finally { clearTimeout(timeout); botao.disabled = false; botao.textContent = "Enviar mensagem"; }
}

document.querySelectorAll("[data-idioma]").forEach(botao => botao.addEventListener("click", () => definirIdioma(botao.dataset.idioma)));
document.querySelectorAll("[data-filtro]").forEach(botao => botao.addEventListener("click", () => renderizarProjetos(botao.dataset.filtro)));
document.getElementById("form-contato").addEventListener("submit", enviarMensagem);
let idiomaInicial = "pt";
try { idiomaInicial = localStorage.getItem("idioma-apresentacao") || "pt"; } catch (_) { }
definirIdioma(idiomaInicial);
renderizarProjetos();
