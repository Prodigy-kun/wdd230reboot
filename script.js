let modified = document.lastModified;
console.log(modified);
document.querySelector(".moddy").textContent = modified;
let currDate = new Date();
const options = {
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "numeric",
};
document.querySelector(".currdate").textContent = currDate.toLocaleString(
  "en",
  options
);