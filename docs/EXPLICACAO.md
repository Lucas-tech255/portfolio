# Entender e apresentar as alterações

## O que foi preservado

Sua página única, quatro seções, Bootstrap, grid 8/4 no Sobre Mim, grid 7/5 nos projetos, duas colunas de experiências e tema grafite/azul. O CSS anterior foi mantido com ajustes ao final.

## HTML

O seletor PT/EN contém botões com `data-idioma`. Elementos da apresentação têm `data-traducao`, que informa qual texto usar. O contêiner da timeline fica vazio no HTML porque o JavaScript o preenche. Os links de contato têm ícones SVG incorporados, sem biblioteca adicional. O formulário ganhou um ID, limites de tamanho, retorno acessível e campo antispam oculto. Os scripts são carregados no fim do body, depois de os elementos existirem.

`data-bs-theme="dark"` aplica o tema escuro aos componentes Bootstrap. A língua da página continua português; apenas os elementos traduzidos recebem `lang="en"` quando exibidos em inglês.

## projetos.js

Uma lista de objetos representa os projetos. Cada objeto reúne nome, descrição, ordem, categoria, tecnologias, links e imagem. Adicionar outro projeto significa adicionar outro objeto. A ordem foi confirmada pelo autor; datas não são inventadas. Os filtros escolhem todos, cliente ou pessoal.

## script.js

- `definirIdioma`: encontra elementos com `data-traducao`, troca seu `textContent` e atualiza os botões. `localStorage` conserva a preferência. Se o armazenamento falhar, o seletor continua funcionando.
- `renderizarProjetos`: copia e ordena os dados, filtra a categoria, cria artigos e colunas e substitui o conteúdo da timeline. `textContent` evita interpretar dados como código HTML.
- `urlSegura`: aceita links externos HTTPS; campos vazios não viram links falsos.
- `enviarMensagem`: impede o recarregamento do formulário, valida campos, verifica configuração, desabilita o botão durante o envio e faz `fetch` ao EmailJS. Só mostra sucesso quando o serviço retorna resposta positiva. Timeout e falhas retornam orientação visível.

## config.js

Contém apenas identificadores públicos do serviço EmailJS. O destinatário fica no template da sua conta. A chave pública não é uma senha. Sem configuração, a interface informa que o envio está indisponível.

## CSS

Foram adicionados estilos para seletor, filtros, ícones, estados de foco e mensagens. Media queries continuam deixando as seções com altura automática no celular. O seletor de redução de movimento desativa rolagem suave quando solicitado pelo usuário.

## Roteiro curto para explicar ao professor

“Usei uma página única com âncoras para as quatro áreas. O Bootstrap organiza as colunas e meu CSS define o tema escuro. A apresentação tem versões PT e EN, trocadas por JavaScript. Os projetos ficam em uma lista de objetos e a timeline é gerada e filtrada dinamicamente. O formulário valida os dados e usa o EmailJS para o envio, com retorno de sucesso ou erro. O código e os wireframes estão documentados no GitHub.”

Só diga que o envio e a hospedagem estão funcionando depois de configurar e testar de verdade.
