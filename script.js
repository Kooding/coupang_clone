const inputEl = document.querySelector("#password");
const btnEl = document.querySelector("#button");

let temp = "";

inputEl.addEventListener("input", (e) => {
  // console.dir(e);
  if (e.inputType === "deleteContentBackward") {
    if (inputEl.value.length === 1) {
      temp = "";
    }
    return;
  }
  temp += e.data;

  inputEl.value = "#".repeat(temp.length);
});

btnEl.addEventListener("click", () => {
  console.log(temp);
});
