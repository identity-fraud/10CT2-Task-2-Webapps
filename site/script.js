function checkDarkLightMode() {
  let theme = sessionStorage.getItem("theme")
  const icon = document.getElementById("darklight");
  const btn = document.querySelector(".darkLightModeBtn");
  const html = document.documentElement;

  if (theme == "light") {
    icon.src = icon.dataset.srcLight;
    html.style.setProperty('color-scheme', 'light');
    btn.style.filter = "invert(0.2)";
  } else {
    icon.src = icon.dataset.srcDark;
    html.style.setProperty('color-scheme', 'dark');
    btn.style.filter = "invert(0.8)";
  }

}

function darkLightMode() {
  const icon = document.getElementById("darklight");
  const btn = document.querySelector(".darkLightModeBtn");
  const html = document.documentElement;

  if (icon.src.includes('moon')) {
    icon.src = icon.dataset.srcLight;
    html.style.setProperty('color-scheme', 'light');
    btn.style.filter = "invert(0.2)";
    sessionStorage.setItem("theme", "light")
  } else {
    icon.src = icon.dataset.srcDark;
    html.style.setProperty('color-scheme', 'dark');
    btn.style.filter = "invert(0.8)";
    sessionStorage.setItem("theme", "dark")
  }
}