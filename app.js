if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", "bright");
}

const curTheme = localStorage.getItem("theme");

if (curTheme == "dark") {
  document.querySelector("body").setAttribute("id", "dark");
} else {
  document.querySelector("body").setAttribute("id", "bright");
}

function showSideBar() {
  document.querySelector(".sidebar").style.right = "0";
}
function closeSideBar() {
  document.querySelector(".sidebar").style.right = "-150%";
}

function themeChange() {
  if (localStorage.getItem("theme") == "dark") {
    localStorage.setItem("theme", "bright");
  } else {
    localStorage.setItem("theme", "dark");
  }

  const curTheme = localStorage.getItem("theme");

  if (curTheme == "dark") {
    document.querySelector("body").setAttribute("id", "dark");
  } else {
    document.querySelector("body").setAttribute("id", "bright");
  }
}
