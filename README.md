#🎯 Prompt de Projeto: Quiz Interativo - Profissão do Futuro
##🧠 Resumo da Atividade
Você será o(a) desenvolvedor(a) de um teste vocacional interativo, que será disponibilizado no site oficial do Colégio. Esse quiz ajudará os alunos a descobrirem uma profissão do futuro que combina com seu perfil, além de indicar um curso técnico ideal disponível na instituição.

##🎓 Objetivo Pedagógico
Este projeto tem como finalidade aplicar os seguintes conhecimentos:


*Uso de lógica condicional (if/else, switch)
*Manipulação do DOM com JavaScript
*Criação de interfaces interativas e responsivas
*Estruturação de dados com arrays e objetos
*Contagem e análise de respostas para determinar resultados



##🧩 Requisitos do Projeto
1. Tela Inicial
*Mensagem de boas-vindas (ex: “Descubra sua Profissão do Futuro!”)
*Botão central “Iniciar Quiz”


2. Perguntas
*Entre 4 a 6 perguntas, exibidas uma por vez


*Cada pergunta deve conter 3 alternativas:


A → Perfil Tecnologia


B → Perfil Saúde


C → Perfil Gestão


*Ao clicar em uma alternativa, o sistema deve salvar a pontuação para o perfil correspondente e avançar para a próxima pergunta.


3. Resultado Final
*Após a última pergunta, calcular o perfil com mais pontos.


*Exibir:


Uma mensagem personalizada com a profissão ideal (baseada no perfil).


O curso técnico ideal oferecido pelo colégio.


*Exemplo de resultado:


 "Seu perfil é TECNOLOGIA!
 Profissão do Futuro: Desenvolvedor de Software
 Curso Ideal: Técnico em Informática"



*Incluir uma mensagem de encerramento motivadora, como:


 “Pronto para começar seu futuro? Matricule-se no curso ideal para você!”



4. Design e Layout
*Interface moderna e atrativa para jovens
*Deve ser responsiva, funcionando bem em celulares e desktops
*Utilize cores, ícones, fontes e elementos visuais compatíveis com o público adolescente



🛠️ Dicas Técnicas
*Armazene as perguntas e alternativas em um array de objetos
*Use variáveis contadoras para acompanhar os pontos de cada perfil


*Exemplo:


let pontosTecnologia = 0;
let pontosSaude = 0;
let pontosGestao = 0;

*Utilize addEventListener para capturar cliques nas respostas
*Utilize innerHTML para alterar o conteúdo da página dinamicamente



##📱 Extras 

*Adicione transições suaves entre perguntas
*Permita que o aluno reinicie o quiz
*Inclua ícones ou imagens relacionadas a cada perfil profissional
*Acrescentar pdf
*Adicionar vídeo cada término de quiz 
