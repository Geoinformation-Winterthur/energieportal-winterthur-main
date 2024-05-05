// Decoding Energie-/Wärmequelle Heizung (GENH1, GENH2): see https://www.housing-stat.ch/de/help/42.html

export const getPropertyHeatSource = (code: number) => {
  switch (code) {
    case 7500:
      return "Keine";
    case 7501:
      return "Luft";
    case 7511:
      return "Erdwärmesonde";
    case 7512:
      return "Erdregister";
    case 7513:
      return "Wasser (Grundwasser, Oberflächenwasser, Abwasser)";
    case 7520:
      return "Gas";
    case 7530:
      return "Heizöl";
    case 7540:
      return "Holz (generisch)";
    case 7541:
      return "Holz (Stückholz)";
    case 7542:
      return "Holz (Pellets)";
    case 7543:
      return "Holz (Schnitzel)";
    case 7550:
      return "Abwärme (innerhalb des Gebäudes)";
    case 7560:
      return "Elektrizität";
    case 7570:
      return "Sonne (thermisch)";
    case 7580:
      return "Fernwärme (generisch)";
    case 7581:
      return "Fernwärme (Hochtemperatur)"
    case 7582:
      return "Fernwärme (Niedertemperatur)";
    case 7598:
      return "Unbestimmt";
    case 7599:
      return "Andere";
    default:
      break;
  }
};