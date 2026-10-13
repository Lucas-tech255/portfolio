# Finalizar configuração e entrega

## Aplicar os arquivos

1. Extraia o ZIP em uma pasta temporária.
2. Copie o conteúdo da pasta `portfolio-final` para a pasta do seu projeto, onde já estão `index.html` e `.git`. Substitua os arquivos correspondentes. Não substitua nem apague `.git`.
3. Abra a pasta do projeto no VS Code e revise as alterações.

## Ativar envio real pelo EmailJS

1. Acesse https://www.emailjs.com/ e crie ou entre na sua conta.
2. Em Email Services, conecte um serviço de e-mail e copie o Service ID. A conexão da conta é feita por você.
3. Em Email Templates, crie um template e copie o Template ID.
4. Defina o destinatário (To Email) como o seu e-mail fixo. Use `{{reply_to}}` no Reply-To, `{{from_name}}` como nome de remetente e `{{message}}` no corpo. O endereço real de remetente deve ser o permitido pelo serviço conectado.
5. Corpo sugerido:

   Nome: {{from_name}}
   E-mail para resposta: {{reply_to}}
   Mensagem: {{message}}

6. Em Account, copie a Public Key.
7. Preencha os três campos em `config.js`. Não use senha, chave privada ou token de acesso.
8. Confira a allowlist de origens da sua conta, caso habilitada; inclua a origem local de teste e a origem pública final.
9. Inicie um servidor local e envie uma mensagem de teste. Confira a caixa de entrada e spam. Só considere concluído quando o e-mail chegar e a confirmação aparecer.

O script utiliza a API REST oficial. O site tem um campo honeypot e intervalo entre envios para reduzir envios acidentais; controles no navegador não substituem as proteções do provedor.

## Completar projetos

Edite `projetos.js`, sem mudar os nomes das propriedades:

- `inicio`: data ISO confirmada, como `2026-07`, ou `null` enquanto desconhecida.
- `periodo`: período real para exibir.
- `tecnologias`: lista de nomes reais entre aspas.
- `github`: URL HTTPS do repositório específico do projeto.
- `demo`: URL HTTPS do projeto publicado, quando disponível.
- `imagem`: caminho local, por exemplo `assets/projetos/alex.png`.
- `alt`: descrição breve da tela.
- `ordem`: Alex = 1, Caderno = 2, conforme ordem confirmada.

Crie capturas reais dos sites e copie para `assets/projetos/`. Não use wireframe como se fosse uma tela real em funcionamento. Atualize também os períodos na seção Experiências do HTML. A menção a julho no Caderno do Leite indica apenas que já estava em desenvolvimento nessa época; não é uma data de início confirmada.

## Publicar no GitHub Pages

1. Salve os arquivos e execute na pasta do repositório:

```bash
git add .
git commit -m "Implementa idiomas timeline e integracao de contato"
git push
```

2. Abra seu repositório no GitHub → Settings → Pages.
3. Em Source, selecione Deploy from a branch.
4. Selecione `main` e `/(root)` e salve.
5. Aguarde a publicação e abra a URL exibida pelo GitHub. A URL esperada é https://lucas-tech255.github.io/portfolio/.
6. Teste menu, idiomas, filtros, imagens, layout mobile e envio real na URL pública.
7. Atualize o README: coloque o link ativo, retire pendências resolvidas e registre o teste real de envio.
8. Faça novo commit/push do README e das configurações concluídas.

## Checklist da entrega

- [ ] Apresentação em português e inglês funcionando.
- [ ] Projetos na ordem correta, com tecnologias, repositórios e imagens/GIFs reais.
- [ ] Experiências com períodos verdadeiros.
- [ ] Links e ícones funcionando.
- [ ] Mensagem enviada e recebida de verdade.
- [ ] Desktop e celular conferidos, sem rolagem horizontal.
- [ ] Site público abre em outra máquina.
- [ ] README final reflete o estado real do projeto.

A implementação disponível não elimina essas pendências. O laboratório completo ainda não está pronto enquanto os itens exigidos estiverem em aberto.
