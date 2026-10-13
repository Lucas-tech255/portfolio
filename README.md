# Portfólio — Lucas Barbosa

## Sobre o Projeto

Portfólio pessoal desenvolvido para o Laboratório 01 da disciplina de Desenvolvimento de Interfaces Web da PUC Minas, ministrada pelo professor João Paulo Aramuni.

O site apresenta minha formação, interesses, projetos, experiências de desenvolvimento e canais de contato.

## Status do Projeto

Site publicado no GitHub Pages, com apresentação bilíngue, timeline dinâmica, filtros de projetos e formulário integrado ao EmailJS.

O envio de mensagens foi testado na versão pública, com confirmação de envio e recebimento do e-mail.

## Links Úteis

- [Portfólio publicado](https://lucas-tech255.github.io/portfolio/)
- [Repositório](https://github.com/Lucas-tech255/portfolio)
- [LinkedIn](https://www.linkedin.com/in/lucasnogueirabarbosa)

## Funcionalidades Principais

- Navegação entre Sobre Mim, Projetos, Experiências e Contato.
- Apresentação e formação em português e inglês.
- Preferência de idioma salva no navegador.
- Timeline gerada por JavaScript, do projeto mais antigo ao mais recente.
- Filtros para projetos pessoais e para cliente.
- Projetos com descrição, período, tecnologias e captura de tela.
- Experiências com atividade, período e descrição.
- Foto de perfil.
- Links com ícones para GitHub e LinkedIn.
- Formulário com nome, e-mail e mensagem.
- Validação de campos obrigatórios, formato de e-mail e tamanho da mensagem.
- Envio por e-mail com retorno de sucesso ou erro.
- Layout responsivo.
- Navegação por teclado e indicação visual de foco.

## Projetos Apresentados

### Alex Justino Concept

Website institucional desenvolvido para um cliente.

- Início: maio de 2026.
- Status: em desenvolvimento.
- Tecnologias: HTML5, CSS3 e JavaScript.
- [Versão de teste](https://alexjustinoconceptteste.netlify.app/)
- Código não disponibilizado publicamente.

### Caderno do Leite

Sistema para gestão de uma propriedade leiteira, desenvolvido a partir das necessidades da minha família.

- Início: julho de 2026.
- Status: em desenvolvimento.
- Tecnologias: React, TypeScript, Tailwind CSS, Supabase, Vite e Vinext.
- Captura do painel incluída no portfólio.
- Acesso ao sistema protegido por login.
- Link do repositório ainda não disponibilizado no portfólio.

## Tecnologias Utilizadas

As tecnologias abaixo são utilizadas no portfólio. As tecnologias dos projetos apresentados estão listadas na seção anterior.

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura e conteúdo |
| CSS3 | Tema visual e ajustes responsivos |
| JavaScript | Idiomas, timeline, filtros e formulário |
| Bootstrap 5.3.8 | Grid, espaçamentos e componentes |
| EmailJS REST API | Envio de mensagens por e-mail |
| Git e GitHub | Versionamento |
| Figma | Wireframes |
| GitHub Pages | Hospedagem |

### Dependências

O Bootstrap 5.3.8 é carregado por CDN. Os ícones são SVG incorporados ao HTML.

A integração com EmailJS utiliza a API `fetch` do navegador, sem SDK adicional. O portfólio não exige instalação de pacotes npm nem processo de compilação.

## Arquitetura

O portfólio é uma aplicação estática executada no navegador.

- `index.html` define as seções e o formulário.
- `style.css` personaliza o visual.
- `projetos.js` armazena os dados dos projetos.
- `script.js` controla idiomas, filtros, timeline e envio.
- `config.js` contém os identificadores públicos do EmailJS.

O formulário envia uma requisição HTTPS ao EmailJS, que realiza o envio pelo serviço de e-mail conectado. O destinatário é definido no template da conta.

Não há servidor próprio ou banco de dados no portfólio.

## Estrutura de Pastas

| Caminho | Finalidade |
| --- | --- |
| index.html | Página principal |
| style.css | Estilos personalizados |
| script.js | Funcionalidades interativas |
| projetos.js | Dados dos projetos |
| config.js | Configuração pública do EmailJS |
| assets/imagens/fotoperfil.png | Foto de perfil |
| assets/projetos/alex.png | Captura do Alex Justino Concept |
| assets/projetos/caderno-do-leite.png | Captura do Caderno do Leite |
| docs/wireframes/desktop.png | Wireframe desktop |
| docs/wireframes/mobile.png | Wireframe celular |
| docs/EXPLICACAO.md | Explicação do código |
| docs/CONFIGURACAO.md | Instruções de configuração |
| README.md | Documentação |

## Instalação e Execução

### Pré-requisitos

- Navegador atualizado.
- Git para clonar o repositório.
- Internet para carregar Bootstrap e enviar mensagens.
- Python 3 ou Live Server para execução local.

### Execução com Python

```bash
git clone https://github.com/Lucas-tech255/portfolio.git
cd portfolio
python3 -m http.server 8000
```

Abra http://localhost:8000 no navegador.

Para encerrar o servidor, pressione Ctrl+C no terminal.

Também é possível abrir o projeto com a extensão Live Server do VS Code.

### Configuração do formulário

Para utilizar uma conta EmailJS própria, preencha os identificadores em `config.js`:

```javascript
window.CONFIG_CONTATO = {
    publicKey: "SUA_PUBLIC_KEY",
    serviceId: "SEU_SERVICE_ID",
    templateId: "SEU_TEMPLATE_ID"
};
```

O template deve utilizar as variáveis:

- `from_name`: nome do visitante.
- `reply_to`: e-mail para resposta.
- `message`: mensagem enviada.

O destinatário é configurado no campo To Email do template.

Não coloque senhas ou chaves privadas no código. Consulte [as instruções de configuração](docs/CONFIGURACAO.md).

## Deploy

O site está hospedado no GitHub Pages:

https://lucas-tech255.github.io/portfolio/

A publicação utiliza a branch `main` e a pasta raiz do repositório. Alterações enviadas à branch são processadas pelo GitHub Pages para atualizar o site.

## Demonstração — Wireframes

Wireframes de média fidelidade criados no Figma.

Durante a implementação, a foto foi posicionada à direita e os projetos foram organizados na ordem cronológica confirmada: Alex Justino Concept antes do Caderno do Leite.

### Desktop

![Wireframe desktop](docs/wireframes/desktop.png)

### Celular

![Wireframe mobile](docs/wireframes/mobile.png)

## Verificações

- Layout inicial conferido em janela larga e estreita.
- Troca entre português e inglês testada.
- Filtros da timeline testados.
- Links de contato conferidos.
- Publicação acessada pelo endereço público.
- Formulário testado na versão pública, com recebimento real do e-mail.
- Sintaxe JavaScript e referências locais verificadas durante o desenvolvimento.
- Lógica de renderização e envio também verificada com DOM e API simulados.

## Limitações Atuais

Os repositórios dos projetos apresentados ainda não estão vinculados ao portfólio. O Alex Justino Concept possui uma demonstração pública; o Caderno do Leite exige autenticação.

## Documentações Utilizadas

- [Bootstrap](https://getbootstrap.com/docs/5.3/)
- [EmailJS — API REST](https://www.emailjs.com/docs/rest-api/send/)
- [GitHub Pages](https://docs.github.com/en/pages)
- [Template de README do professor](https://github.com/joaopauloaramuni/desenvolvimento-de-interfaces-web/blob/main/TEMPLATES/template_README.md)

## Autor

Lucas Samuel Nogueira Barbosa

- [GitHub](https://github.com/Lucas-tech255)
- [LinkedIn](https://www.linkedin.com/in/lucasnogueirabarbosa)

## Agradecimentos

Professor João Paulo Aramuni pelas orientações do laboratório.