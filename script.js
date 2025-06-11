 // Array de perguntas do quiz
  const perguntas = [
    {
      pergunta: "O que você mais gosta de fazer?", // Pergunta
      opcoes: ["💻 Mexer no computador", "🩺 Cuidar das pessoas", "📊 Organizar tarefas"], // Opções de resposta
      perfis: ["tecnologia", "saude", "gestao"] // Perfis correspondentes
    },
    {
      pergunta: "Qual dessas matérias você prefere?", // Pergunta
      opcoes: ["Informática", "Biologia", "Matemática"], // Opções de resposta
      perfis: ["tecnologia", "saude", "gestao"] // Perfis correspondentes
    },
    {
      pergunta: "Com qual dessas frases você mais se identifica?", // Pergunta
      opcoes: ["Adoro programar", "Quero salvar vidas", "Gosto de liderar equipes"], // Opções de resposta
      perfis: ["tecnologia", "saude", "gestao"] // Perfis correspondentes
    },
    {
      pergunta: "Qual ambiente te agrada mais?", // Pergunta
      opcoes: ["Frente ao computador", "Hospital ou clínica", "Escritório organizado"], // Opções de resposta
      perfis: ["tecnologia", "saude", "gestao"] // Perfis correspondentes
    }
  ];


  // Cursos recomendados por perfil
  const cursosPorPerfil = {
    tecnologia: [
      "Análise e Desenvolvimento de Sistemas",
      "Desenvolvimento de Aplicações Multiplataforma",
      "Redes de Computadores",
      "Segurança da Informação",
      "Gestão em Tecnologia da Informação"
    ],
    saude: [
      "Enfermagem",
      "Farmácia",
      "Biomedicina",
      "Nutrição",
      "Fisioterapia"
    ],
    gestao: [
      "Administração",
      "Gestão Empresarial",
      "Marketing",
      "Gestão de Recursos Humanos",
      "Logística"
    ]
  };


  let indice = 0; // Índice da pergunta atual
  let pontos = { tecnologia: 0, saude: 0, gestao: 0 }; // Contador de pontos por perfil
  let resultado = null; // Resultado final do quiz


  // Função para iniciar o quiz
  function startQuiz() {
    pontos = { tecnologia: 0, saude: 0, gestao: 0 }; // Reinicia os pontos
    indice = 0; // Reinicia o índice
    mostrarPergunta(); // Exibe a primeira pergunta
  }


  // Função para responder a pergunta
  function responder(perfil) {
    pontos[perfil]++; // Incrementa o ponto do perfil correspondente
    indice++; // Avança para a próxima pergunta


    if (indice < perguntas.length) {
      mostrarPergunta(); // Mostra a próxima pergunta
    } else {
      mostrarResultado(); // Mostra o resultado final
    }
  }


  // Função para mostrar a pergunta atual
  function mostrarPergunta() {
    const container = document.getElementById("quiz-container");
    const perguntaAtual = perguntas[indice]; // Obtém a pergunta atual


    container.innerHTML = `
      <h2>Pergunta ${indice + 1} de ${perguntas.length}</h2>
      <p>${perguntaAtual.pergunta}</p>
      ${perguntaAtual.opcoes.map((opcao, i) => `
        <button class="btn" onclick="responder('${perguntaAtual.perfis[i]}')">${opcao}</button>
      `).join('')}
    `; // Exibe a pergunta e as opções
  }


  // Função para mostrar o resultado final
  function mostrarResultado() {
    const perfilFinal = Object.keys(pontos).reduce((a, b) => pontos[a] > pontos[b] ? a : b); // Determina o perfil com mais pontos
    const profissao = {
      tecnologia: "Desenvolvedor(a) Full Stack",
      saude: "Enfermeiro(a)",
      gestao: "Administrador(a)"
    }[perfilFinal]; // Obtém a profissão correspondente ao perfil


    const cursoRecomendado = cursosPorPerfil[perfilFinal][Math.floor(Math.random() * cursosPorPerfil[perfilFinal].length)]; // Seleciona um curso aleatório


    resultado = {
      perfil: perfilFinal,
      profissao,
      curso: cursoRecomendado
    }; // Armazena o resultado


    const container = document.getElementById("quiz-container");


    // Define o vídeo com base no perfil
    let videoUrl;
    if (perfilFinal === "tecnologia") {
      videoUrl = "https://www.youtube.com/embed/Sn-B98JH_XM";
    } else if (perfilFinal === "saude") {
      videoUrl = "https://www.youtube.com/embed/SC2h_J1sAK0";
    } else if (perfilFinal === "gestao") {
      videoUrl = "https://www.youtube.com/embed/1uMlDodlj78";
    }


    container.innerHTML = `
      <i class="fas fa-star icon"></i>
      <h2>Resultado do Quiz</h2>
      <p><strong>Seu perfil é:</strong> ${resultado.perfil.toUpperCase()}</p>
      <p><strong>Profissão do Futuro:</strong> ${resultado.profissao}</p>
      <p><strong>Curso Recomendado:</strong> ${resultado.curso}</p>
      <p style="margin-top: 1rem;">🎓 Pronto para começar seu futuro? Matricule-se no curso ideal para você!</p>
      <button class="btn" onclick="gerarPDF()">Baixar PDF</button> <!-- Botão para baixar o resultado em PDF -->
      <button class="btn" onclick="startQuiz()">Refazer Quiz</button> <!-- Botão para refazer o quiz -->
     
      <!-- Adicionando o vídeo explicativo -->
      <iframe width="100%" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
    `;
  }


  // Função para gerar o PDF com o resultado
  function gerarPDF() {
    const { jsPDF } = window.jspdf; // Importa a biblioteca jsPDF
    const doc = new jsPDF(); // Cria uma nova instância do jsPDF


    const texto = `
RESULTADO DO QUIZ




Seu perfil é: ${resultado.perfil.toUpperCase()}
Profissão do Futuro: ${resultado.profissao}
Curso Recomendado: ${resultado.curso}
`; // Texto a ser incluído no PDF


    doc.setFontSize(12); // Define o tamanho da fonte
    doc.text(texto, 10, 10); // Adiciona o texto ao PDF
    doc.save('resultado_quiz.pdf'); // Salva o PDF com o nome especificado
  }