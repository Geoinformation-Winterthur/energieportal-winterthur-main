// Decoding Wärmeerzeuger Heizung (GWAERZH1, GWAERZH2): see https://www.housing-stat.ch/de/help/42.html

export const getPropertyHeatingType = (code: number) => {
  switch (code) {
    case 7400:
      return "Kein Wärmeerzeuger";
    case 7410:
      return "Wärmepumpe für ein Gebäude";
    case 7411:
      return "Wärmepumpe für mehrere Gebäude";
    case 7420:
      return "Thermische Solaranlage für ein Gebäude";
    case 7421:
      return "Thermische Solaranlage für mehrere Gebäude";
    case 7430:
      return "Heizkessel (generisch) für ein Gebäude";
    case 7431:
      return "Heizkessel (generisch) für mehrere Gebäude";
    case 7432:
      return "Heizkessel nicht kondensierend für ein Gebäude";
    case 7433:
      return "Heizkessel nicht kondensierend für mehrere Gebäude";
    case 7434:
      return "Heizkessel kondensierend für ein Gebäude";
    case 7435:
      return "Heizkessel kondensierend für mehrere Gebäude";
    case 7436:
      return "Ofen";
    case 7440:
      return "Wärmekraftkopplungsanlage für ein Gebäude";
    case 7441:
      return "Wärmekraftkopplungsanlage für mehrere Gebäude";
    case 7450:
      return "Elektrospeicher-Zentralheizung für ein Gebäude";
    case 7451:
      return "Elektrospeicher-Zentralheizung für mehrere Gebäude";
    case 7452:
      return "Elektro direkt";
    case 7460:
      return "Wärmetauscher (einschliesslich für Fernwärme) für ein Gebäude";
    case 7461:
      return "Wärmetauscher (einschliesslich für Fernwärme) für mehrere Gebäude";
    case 7499:
      return "Andere";
    default:
      break;
  }
};
