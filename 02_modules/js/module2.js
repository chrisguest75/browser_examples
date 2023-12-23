let module2_click = (event) => {
  console.log(event.currentTarget);
  event.currentTarget.textContent = "clicked";
  event.currentTarget.style.backgroundColor = "red";
};
document.querySelector("#module2").addEventListener("click", module2_click);
