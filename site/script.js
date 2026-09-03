function checkDarkLightMode() {
  let theme = sessionStorage.getItem("theme")
  const icon = document.getElementById("darklight");
  const btn = document.querySelector(".darkLightModeBtn");
  const html = document.documentElement;
  const goback = document.querySelector(".goback");

  if (theme == "light") {
    icon.src = icon.dataset.srcLight;
    html.style.setProperty('color-scheme', 'light');
    btn.style.filter = "invert(0.2)";
    goback.style.filter("invert(0)");
  } else {
    icon.src = icon.dataset.srcDark;
    html.style.setProperty('color-scheme', 'dark');
    btn.style.filter = "invert(0.8)";
    goback.style.filter("invert(1)");
  }

}

function darkLightMode() {
  const icon = document.getElementById("darklight");
  const btn = document.querySelector(".darkLightModeBtn");
  const html = document.documentElement;
  const goback = document.querySelector(".goback");

  if (icon.src.includes('moon')) {
    icon.src = icon.dataset.srcLight;
    html.style.setProperty('color-scheme', 'light');
    btn.style.filter = "invert(0.2)";
    sessionStorage.setItem("theme", "light")
    goback.style.filter("invert(0)");
  } else {
    icon.src = icon.dataset.srcDark;
    html.style.setProperty('color-scheme', 'dark');
    btn.style.filter = "invert(0.8)";
    sessionStorage.setItem("theme", "dark")
    goback.style.filter("invert(1)");
  }
}

window.addEventListener('DOMContentLoaded', checkDarkLightMode);