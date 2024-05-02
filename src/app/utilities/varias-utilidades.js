// Format date depending on the language on Draft listing page
export const formatDate = (dateString, language) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const dateParts = dateString.split("-").map((part) => parseInt(part, 10));
  const date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);

  if (language === "en") {
    return date.toLocaleDateString("en-UK", options);
  } else if (language === "es") {
    return date.toLocaleDateString("es-ES", options);
  } else if (language === "ba") {
    return date.toLocaleDateString("bs-BA", options);
  } else {
    return date.toLocaleDateString("en-UK", options);
  }
};
// Take DD-MM-YYYY and return a Date object in getPostList in node-helpers
export function parseDate(dateString) {
  const [day, month, year] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}
