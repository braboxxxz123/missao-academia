const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você decidiu começar a treinar na academia. No primeiro dia, vê várias máquinas e pessoas experientes. Qual é sua reação inicial?",
        alternativas: [
            {
                texto: "Fico intimidado, mas tento fazer o meu melhor.",
                afirmacao: "No início sentiu insegurança, mas enfrentou o desafio com coragem. "
            },
            {
                texto: "Fico empolgado e já quero testar todos os aparelhos!",
                afirmacao: "Estava cheio de energia e motivação para explorar o novo ambiente. "
            }
        ]
    },
    {
        enunciado: "Nos primeiros dias de treino, você sente dores musculares e percebe que alguns exercícios são mais difíceis do que pensava. O que faz?",
        alternativas: [
            {
                texto: "Procura um professor da academia para ajustar o treino e evitar lesões.",
                afirmacao: "Mostrou responsabilidade ao buscar orientação profissional. "
            },
            {
                texto: "Ignora a dor e continua treinando do mesmo jeito.",
                afirmacao: "Acreditou que a superação vinha apenas pela insistência, mesmo com o risco de se machucar. "
            }
        ]
    },
    {
        enunciado: "Com o tempo, você começa a perceber resultados. Seus amigos notam e te perguntam o que mudou. Como você responde?",
        alternativas: [
            {
                texto: "Explica que passou a treinar com regularidade e cuidar da alimentação.",
                afirmacao: "Inspirou outras pessoas a também começarem a treinar de forma consciente. "
            },
            {
                texto: "Diz que foi só sorte ou genética.",
                afirmacao: "Mesmo com resultados visíveis, teve dificuldade em reconhecer seu próprio esforço. "
            }
        ]
    },
    {
        enunciado: "Chega um momento em que você precisa criar um plano de treino personalizado. Como faz isso?",
        alternativas: [
            {
                texto: "Conversa com um treinador e monta um plano baseado em seus objetivos e limitações.",
                afirmacao: "Passou a treinar com mais eficiência e entendeu melhor as necessidades do seu corpo. "
            },
            {
                texto: "Assiste vídeos aleatórios na internet e tenta montar algo sozinho.",
                afirmacao: "Tentou ser autodidata, mas percebeu depois que cada corpo reage de uma forma. "
            }
        ]
    },
    {
        enunciado: "Você está em um grupo de treino e percebe que um colega está fazendo os exercícios com a postura errada, correndo risco de se machucar. O que você faz?",
        alternativas: [
            {
                texto: "Chama alguém da equipe da academia para orientar a pessoa com segurança.",
                afirmacao: "Mostrou empatia e cuidado com a segurança dos outros. "
            },
            {
                texto: "Decide não se envolver, afinal, cada um cuida de si.",
                afirmacao: "Preferiu manter distância, mesmo percebendo um possível problema. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada fitness até agora:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();