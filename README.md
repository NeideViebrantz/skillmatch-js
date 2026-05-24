# skillmatch-js
SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior. Simulador simples de compatibilidade entre um perfil de candidato e vagas de front-end júnior que analisa requisitos de vagas, compara habilidades, calcula aderência e identifica pontos de melhoria do candidato.

## Descrição

Este projeto é um simulador que ajuda candidatos a encontrar vagas de emprego na área de desenvolvimento Front-End, avaliando a compatibilidade entre as habilidades do candidato e os requisitos das vagas disponíveis.

## Funcionalidades

- **Cadastro de Candidatos:** Permite que candidatos se cadastrem informando seu nome, área de atuação, habilidades e meses de experiência.
- **Cadastro de Vagas:** Inclui a definição de vagas de emprego com detalhes como empresa, cargo, requisitos, salário e modalidade.
- **Cálculo de Compatibilidade:** Compara as habilidades do candidato com os requisitos da vaga e calcula a porcentagem de compatibilidade.
- **Classificação de Compatibilidade:** Classifica a compatibilidade em alta, média ou baixa com base na porcentagem calculada.
- **Identificação de Habilidades Faltantes:** Identifica quais habilidades o candidato precisa desenvolver para se adequar melhor à vaga.
- **Recomendações de Estudo:** Sugere áreas de estudo com base nas habilidades que faltam para a vaga.
- **Análise de Vagas Mais Compatíveis:** Retorna a vaga mais compatível com o perfil do candidato.
- **Simulação de Busca de Vagas:** Simula a busca de vagas com atraso, como se os dados viessem de um servidor.
  
## Estrutura do Código

### Classes

- **Candidato**: Representa um candidato com propriedades como nome, área, habilidades e experiência.
- **Vaga**: Representa uma vaga de emprego com propriedades como empresa, cargo, requisitos, salário e modalidade.
- **VagaFrontEnd**: Extensão da classe Vaga, adiciona a propriedade de nível da vaga.

### Funções

- `cadastrarCandidato()`: Coleta dados do candidato através de prompts e retorna uma instância da classe `Candidato`.
- `calcularCompatibilidade(candidato, vaga)`: Calcula a compatibilidade entre as habilidades do candidato e os requisitos da vaga.
- `classificarCompatibilidade(porcentagem)`: Classifica a compatibilidade com base na porcentagem calculada.
- `obterHabilidadesFaltantes(candidato, vaga)`: Retorna as habilidades que o candidato não possui para a vaga.
- `obterVagaMaisCompativel(candidato, vagas)`: Retorna a vaga mais compatível com as habilidades do candidato.
- `recomendarEstudo(candidato, vaga)`: Sugere áreas para estudo com base nas habilidades faltantes.
- `iniciarSistema()`: Inicia o sistema, carregando as vagas e finalizando a análise.

## Como Usar

1. **Clone o repositório:**
   ```bash
   git clone <(https://github.com/NeideViebrantz/skillmatch-js.git)>
   cd <skillmatch.js>
   ```

2. **Abra o arquivo HTML em um navegador:**
   O código JavaScript pode ser executado em um ambiente de navegador que suporte prompts e console.

3. **Siga as instruções na tela:**
   O usuário será solicitado a inserir dados e receberá informações sobre compatibilidade e recomendações.

## Exemplo de Uso

- Ao iniciar o sistema, o usuário será solicitado a se cadastrar.
- Após o cadastro, o sistema calculará a compatibilidade do candidato com a primeira vaga e exibirá as informações no console.

---

Se você tiver alguma dúvida ou precisar de ajuda, sinta-se à vontade para perguntar! 😊

# Autoras
Greici Brandt e Neide Viebrantz
