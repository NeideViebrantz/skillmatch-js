// Classe Candidato ---------------------------------------------

class Candidato {
    constructor(nome, area, habilidades, experienciaMeses){
        this.nome = nome;
        this.area = area;
        this.habilidades = habilidades;
        this.experienciaMeses = experienciaMeses;
    }
}

function cadastrarCandidato(){
    const nome = prompt("Qual é o seu nome?");
    const area = prompt("Qual é a sua área de atuação?");
    const habilidades = prompt("Quais são as suas habilidades? (separe por vírgula)").split(",").map(habilidade => habilidade.trim());
    const experienciaMeses = parseInt(prompt("Quantos meses de experiência você tem?"));

    return new Candidato(nome, area, habilidades, experienciaMeses);
}

// Classe Vaga ---------------------------------------------

class Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
    this.salario = salario;
    this.modalidade = modalidade;
  }

  exibirResumo() {
    return `
      ${this.cargo} na empresa ${this.empresa}\n
      Requisitos: ${this.requisitos.join(", ")}\n
      Salário: R$${this.salario}\n
      Modalidade: ${this.modalidade}
    `;
  }
}

// herança
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, salario, modalidade, nivel) {
    super(empresa, cargo, requisitos, salario, modalidade);
    this.nivel = nivel;
  }

  exibirNivel() {
    return `Nível da vaga: ${this.nivel}`;
  }
}

const vagas = [
    new VagaFrontEnd(
        "LetSystens", 
        "Desenvolvedor Front-End", 
        ["JavaScript", "GitHub", "Lógica de Programação"], 
        3200, 
        "Remoto", 
        "Júnior"
    ),
    new VagaFrontEnd(
        "GreSystens", 
        "Programador JavaScript Júnior", 
        ["JavaScript", "Arrays", "Objetos", "Herança"], 
        3500, 
        "Híbrido", 
        "Júnior"
    ),
    new VagaFrontEnd(
        "NjvSistemas", 
        "Estágio Front-End React", 
        ["JavaScript", "Arrays", "React"], 
        1900, 
        "Presencial", 
        "Estágio"
    ),
    new VagaFrontEnd(
        "CodeSystems", 
        "Desenvolvedor web", 
        ["HTML", "CSS", "JavaScript", "GitHub", "Angular"], 
        2700, 
        "Híbrido", 
        "Pleno"
    )
];

// Compatibilidade das vagas ---------------------------------------------

// exemplo: compatibilidade = quantidade de requisitos atendidos / total de requisitos da vaga * 100
// 1 - comparar os requisitos da vaga com as habilidades do candidato
// 2 - tendo o total de requisitos atendidos, calcular a porcentagem de compatibilidade
function calcularCompatibilidade(candidato, vaga) {
  const totalRequisitosVaga = vaga.requisitos.length;
  const requisitosAtendidos = vaga.requisitos.filter(requisito => candidato.habilidades.includes(requisito));
    
  const totalRequisitosCandidato = requisitosAtendidos.length;

  const compatibilidade = (totalRequisitosCandidato / totalRequisitosVaga) * 100;

  return compatibilidade.toFixed(2);
}

// Classificar a compatibilidade ----------------------------------------------

/**
 * Essa função classifica a compatibilidade com base na porcentagem calculada:
 * 80% a 100% = Alta compatibilidade
 * 50% a 79% = Média compatibilidade
 * 0% a 49% = Baixa compatibilidade
 */
function classificarCompatibilidade(porcentagem) {
    if (porcentagem >= 80) {
        return "Alta compatibilidade";
    } else if (porcentagem >= 50) {
        return "Média compatibilidade";
    } else {
        return "Baixa compatibilidade";
    }
}

// Obter habilidades faltantes ----------------------------------------------
function obterHabilidadesFaltantes(candidato, vaga) {
    const habilidadesFaltantes = vaga.requisitos.filter(requisito => !candidato.habilidades.includes(requisito));
    return habilidadesFaltantes;
}

// Obter vagas mais compatíveis ----------------------------------------------
function obterVagaMaisCompativel(candidato, vagas) {
    return vagas.reduce((vagaMaisCompativel, vaga) => {
        const compatibilidade = calcularCompatibilidade(candidato, vaga);
        const compatibilidadeMaisAlta = calcularCompatibilidade(candidato, vagaMaisCompativel);
        return compatibilidade > compatibilidadeMaisAlta ? vaga : vagaMaisCompativel;
    });
}

//recomendacao de estudo
function recomendarEstudo(candidato, vaga) {
    const habilidadesFaltantes = obterHabilidadesFaltantes(candidato, vaga);    
    if (habilidadesFaltantes.length > 0) {
        console.log("Priorize estudar " + habilidadesFaltantes.join(", ") + ", pois esses conteúdos aparecem na vaga analisada.");
    }
}

//usar callback  
function finalizarAnalise(nomeCandidato, callback) {
  console.log("Análise finalizada.");
  callback(nomeCandidato);
}

function exibirMensagemFinal(nome) {
  console.log(`${nome}, revise suas habilidades faltantes e atualize seu perfil para encontrar mais vagas.`);
}

//closure  

function criarContadorDeAnalises() {
  let total = 0;

  return function () {
    total++;
    return total;
  };
}
 
// Criar uma instância do contador
const contador = criarContadorDeAnalises();
 
// Exemplo de uso
console.log(contador()); // Saída: 1
console.log(contador()); // Saída: 2
console.log(contador()); // Saída: 3

// usar promisse await
// Função que simula a busca de vagas como se os dados viessem de um servidor ou banco de dados,
// usando uma Promise para simular o atraso da resposta.

function buscarVagasSimuladas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(vagas);
    }, 1000); // Simulando um atraso de 1 segundo
  });
}

async function iniciarSistema() {
  const vagasCarregadas = await buscarVagasSimuladas();
  console.log("Vagas disponíveis:", vagasCarregadas);

  alert("Bem-vindo ao SkillMatch! Vamos começar cadastrando seu perfil para as vagas disponíveis.");
  const candidato = cadastrarCandidato();
  console.log("Candidato cadastrado:", candidato);

  console.log("Calculando compatibilidade do candidato com a primeira vaga...");
  console.log("Vaga:", vagas[0].exibirResumo());

  const compatibilidade = calcularCompatibilidade(candidato, vagas[0]);
  console.log("Compatibilidade em %:", compatibilidade);
  console.log("A compatibilidade da vaga é:", classificarCompatibilidade(compatibilidade));

  const habilidadesFaltantes = obterHabilidadesFaltantes(candidato, vagas[0]);
  console.log("Habilidades faltantes para a vaga:", habilidadesFaltantes);
  console.log("Recomendação de estudo:");
  recomendarEstudo(candidato, vagas[0]);

  const vagaMaisCompativel = obterVagaMaisCompativel(candidato, vagas);
  console.log("Encontramos uma vaga mais compatível:", vagaMaisCompativel.exibirResumo());
  console.log("Classificação:", classificarCompatibilidade(calcularCompatibilidade(candidato, vagaMaisCompativel)));
  
  finalizarAnalise(candidato.nome, exibirMensagemFinal);
}

// Execução do sistema
iniciarSistema();