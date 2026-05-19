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