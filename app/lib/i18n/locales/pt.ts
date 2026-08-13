import type { Dictionary } from "../types";

const pt: Dictionary = {
  common: {
    brand: "Rendezvous",
    languageLabel: "Idioma",
    themeToLight: "Mudar para o modo claro",
    themeToDark: "Mudar para o modo escuro",
  },
  question: {
    eyebrow: "Uma pergunta tranquila",
    title: "Gostarias de nos encontrarmos?",
    subtitle:
      "Sem pressão, sem conversa de circunstância — só um simples sim, quando estiveres pronto.",
    yes: "Sim",
    no: "Não",
    noAria: "Não (este gosta de fugir)",
    dodgeMessages: [
      "Escapou-se outra vez…",
      "Tão perto, e ainda assim tão longe.",
      "Este tem vergonha da câmara.",
      "Tenta o outro botão — é mais simpático.",
      "Este realmente não quer ser escolhido.",
      "A fazer-te difícil, não é?",
    ],
    acceptedTitle: "Maravilhoso.",
    acceptedSubtitle: "Vamos encontrar a hora e o lugar perfeitos…",
    hint: "o botão do sim está bem aí",
  },
  details: {
    stepLabel: "Segundo passo",
    title: "Vamos preparar o cenário",
    dateLabel: "Data",
    timeLabel: "Hora",
    locationLabel: "Local",
    locationPlaceholder: "Um café tranquilo, um passeio à beira-rio…",
    messageLabel: "Uma pequena nota (opcional)",
    messagePlaceholder: "Algo que queiras acrescentar…",
    preferencesLegend: "O que te apetece?",
    preferenceOptions: {
      coffee: "Café",
      walk: "Um passeio",
      dinner: "Jantar",
      outdoors: "Algo ao ar livre",
      surprise: "Surpreende-me",
    },
    vibeLegend: "Ambiente preferido",
    vibeOptions: {
      casual: "Descontraído",
      romantic: "Romântico",
      adventurous: "Aventureiro",
    },
    errors: {
      date: "Escolhe uma data.",
      dateFuture: "Escolhe hoje ou uma data futura.",
      time: "Escolhe uma hora.",
      location: "Diz-lhes onde ir.",
      locationShort: "Um pouco mais de detalhe, por favor.",
      vibe: "Escolhe um ambiente.",
      preferences: "Escolhe pelo menos uma.",
    },
    submitIdle: "Enviar o convite",
    submitLoading: "A enviar o teu convite…",
    genericError:
      "Algo correu mal ao enviar o teu convite. Por favor, tenta novamente.",
  },
  confirmation: {
    title: "Já está a caminho",
    subtitle: "O teu convite foi enviado. Aqui está o que partilhaste:",
    dateLabel: "Data",
    timeLabel: "Hora",
    locationLabel: "Local",
    vibeLabel: "Ambiente",
    preferencesLabel: "Preferências",
    resendLink: "Enviar outro convite",
  },
};

export default pt;
