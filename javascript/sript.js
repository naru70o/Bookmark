"use-strict";

const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

tabs.forEach((tab) => tab.addEventListener("click", panelDisplay));

// tabs.addEventListener("click", )

function panelDisplay(e) {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove("border-b-4", "border-softRed");

    panels.forEach((panel) => {
      panel.classList.add("hidden");
    });
  });
  e.target.classList.add("border-b-4", "border-softRed");
  const click = e.target.getAttribute("data-target");
  document
    .getElementById("panels")
    .getElementsByClassName(click)[0]
    .classList.remove("hidden");
  console.log(click);
}

// panelDisplay();
// panel.classList.remove("border-b-4");
