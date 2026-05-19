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

const candidato = cadastrarCandidato();
console.log("Candidato cadastrado:", candidato);


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
    return `${this.cargo} na empresa ${this.empresa}`;
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
        ["JavaScript", "Arrays", "Objetos"], 
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
        ["Html", "CSS", "JavaScript"], 
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
  console.log('Requisitos atendidos:', requisitosAtendidos);
    
  const totalRequisitosCandidato = requisitosAtendidos.length;
  console.log('Total:', totalRequisitosCandidato);

  const compatibilidade = (totalRequisitosCandidato / totalRequisitosVaga) * 100;

  return compatibilidade.toFixed(2);
}

// teste
console.log("Calculando compatibilidade do candidato com a primeira vaga...");
console.log("Vaga:", vagas[0].exibirResumo());
const compatibilidade = calcularCompatibilidade(candidato, vagas[0]);
console.log("Compatibilidade:", compatibilidade);