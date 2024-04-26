// Decoding Gebäudekategorie (GKAT): see https://www.housing-stat.ch/de/help/42.html

export const getPropertyCategory = (code: number) => {
  switch (code) {
    case 1010:
      return "Provisorische Unterkünfte";
    case 1020:
      return "Gebäude mit ausschliesslicher Wohnnutzung";
    case 1030:
      return "Andere Wohngebäude (Wohngebäude mit Nebennutzung)";
    case 1040:
      return "Gebäude mit teilweiser Wohnnutzung";
    case 1060:
      return "Gebäude ohne Wohnnutzung";
    case 1080:
      return "Sonderbauten";
    default:
      break;
  }
};
