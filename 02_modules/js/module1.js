let module1_click = (event) => {
  console.log(event.currentTarget);

  event.currentTarget.textContent = "clicked";
  event.currentTarget.style.backgroundColor = "red";
};
document.querySelector("#module1").addEventListener("click", module1_click);
