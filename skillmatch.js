const vagas = [
    {
        id: 1,
        empresa: "LetSystens",
        cargo: "Desenvolvedor Front-End Júnior",
        requisitos: ["JavaScript", "GitHub", "Lógica de Programação"],
        salario: 3200,
        modalidade: "Remoto"
    },
    { id: 2,
        empresa: "GreSystens",
        cargo: "Programador JavaScript Júnior",
        requisitos: ["JavaScript", "Arrays", "Objetos"],
        salario: 3500,
        modalidade: "Híbrido"

    },
    { id: 3,
        empresa: "NjvSistemas",
        cargo: "Estágio Front-End React",
        requisitos: ["JavaScript", "Arrays", "React"],
        salario: 1900,
        modalidade: "Presencial"
    },
    { id: 4,
        empresa: "CodeSystems",
        cargo: "Desenvolvedor web",
        requisitos: ["Html", "CSS", "JavaScript"],
        salario: 2700,
        modalidade: "Híbrido"
    }
];

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