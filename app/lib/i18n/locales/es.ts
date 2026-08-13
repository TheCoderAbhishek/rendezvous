import type { Dictionary } from "../types";

const es: Dictionary = {
  common: {
    brand: "Rendezvous",
    languageLabel: "Idioma",
    themeToLight: "Cambiar a modo claro",
    themeToDark: "Cambiar a modo oscuro",
  },
  question: {
    eyebrow: "Una pregunta tranquila",
    title: "¿Te gustaría vernos?",
    subtitle:
      "Sin presión, sin charlas incómodas — solo un simple sí, cuando estés listo.",
    yes: "Sí",
    no: "No",
    noAria: "No (a este le gusta escaparse)",
    dodgeMessages: [
      "Se escapó otra vez…",
      "Tan cerca, y sin embargo tan lejos.",
      "A ese le da vergüenza que lo toquen.",
      "Prueba el otro botón — es más amable.",
      "De verdad no quiere que lo elijan.",
      "¿Haciéndote el difícil, eh?",
    ],
    acceptedTitle: "Maravilloso.",
    acceptedSubtitle: "Busquemos el momento y el lugar perfectos…",
    hint: "el botón del sí está justo ahí",
  },
  details: {
    stepLabel: "Paso dos",
    title: "Preparemos el ambiente",
    dateLabel: "Fecha",
    timeLabel: "Hora",
    locationLabel: "Lugar",
    locationPlaceholder: "Un café tranquilo, un paseo junto al río…",
    messageLabel: "Una pequeña nota (opcional)",
    messagePlaceholder: "Algo que quieras añadir…",
    preferencesLegend: "¿Qué te apetece?",
    preferenceOptions: {
      coffee: "Un café",
      walk: "Un paseo",
      dinner: "Cena",
      outdoors: "Algo al aire libre",
      surprise: "Sorpréndeme",
    },
    vibeLegend: "Ambiente preferido",
    vibeOptions: {
      casual: "Informal",
      romantic: "Romántico",
      adventurous: "Aventurero",
    },
    errors: {
      date: "Elige una fecha.",
      dateFuture: "Elige hoy o una fecha futura.",
      time: "Elige una hora.",
      location: "Cuéntales adónde ir.",
      locationShort: "Un poco más de detalle, por favor.",
      vibe: "Elige un ambiente.",
      preferences: "Elige al menos una.",
    },
    submitIdle: "Enviar la invitación",
    submitLoading: "Enviando tu invitación…",
    genericError:
      "Algo salió mal al enviar tu invitación. Inténtalo de nuevo.",
  },
  confirmation: {
    title: "Ya está en camino",
    subtitle: "Tu invitación ha sido enviada. Esto es lo que compartiste:",
    dateLabel: "Fecha",
    timeLabel: "Hora",
    locationLabel: "Lugar",
    vibeLabel: "Ambiente",
    preferencesLabel: "Preferencias",
    resendLink: "Enviar otra invitación",
  },
};

export default es;
