export const getEfficiencyCode = (buildingType: string, resultValue: number) => {
  switch (buildingType) {
    case "Einfamilienhaus":
      if (resultValue < 70) {
        return "very_good"
      }
      if (resultValue < 95) {
        return "good"
      }
      if (resultValue < 145) {
        return "moderate"
      }
      return "bad"

    case "Reiheneinfamilienhaus":
      if (resultValue < 55) {
        return "very_good"
      }
      if (resultValue < 75) {
        return "good"
      }
      if (resultValue < 115) {
        return "moderate"
      }
      return "bad"

    case "Mehrfamilienhaus":
      if (resultValue < 60) {
        return "very_good"
      }
      if (resultValue < 80) {
        return "good"
      }
      if (resultValue < 115) {
        return "moderate"
      }
      return "bad"
    case "Reihenmehrfamilienhaus":
      if (resultValue < 55) {
        return "very_good"
      }
      if (resultValue < 70) {
        return "good"
      }
      if (resultValue < 100) {
        return "moderate"
      }
      return "bad"
    default:
      break;
  }
}