const searchForm = document.getElementById('blog-search');
const searchBar = document.getElementById('searchForm');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const query = searchBar.value.trim();
  console.log("Submitted form - Query:", query);
});

function darkLightMode() {
  const icon = document.getElementById("darklight");
  const btn = document.querySelector(".darkLightModeBtn");
  const html = document.documentElement;

  if (icon.src.includes('moon')) {
    icon.src = icon.dataset.srcLight;
    html.style.setProperty('color-scheme', 'light');
    btn.style.filter = "invert(0.2)";
  } else {
    icon.src = icon.dataset.srcDark;
    html.style.setProperty('color-scheme', 'dark');
    btn.style.filter = "invert(0.8)";
  }
}