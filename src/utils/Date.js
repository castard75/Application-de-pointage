export const timestamp = (num) => {
    let options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    let date = new Date(num).toLocaleDateString("fr-FR", options);
    return date.toString();
  };



  // Date classique
let dates = new Date();




// IsoString
export const  iso = dates.toISOString();


export const dateDestructurings = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
// console.log(dateDestructurings(iso));