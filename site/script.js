const searchForm = document.getElementById('blog-search');
const searchBar = document.getElementById('searchForm');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const query = searchBar.value.trim();
  console.log("Submitted form - Query:", query);
});

function darkLightMode() {
  const darklight = document.getElementById("darklight").src
  if (darklight.includes('moon')) {
    document.getElementById("darklight").src = "assets/brightness-high-fill.svg"
    document.documentElement.style.setProperty('color-scheme', 'light');
    document.querySelector(".darkLightModeBtn").style.filter = "invert(0.2)";


  }
  else {
    document.getElementById("darklight").src = "assets/moon-stars-fill.svg"
    document.documentElement.style.setProperty('color-scheme', 'dark');
    document.querySelector(".darkLightModeBtn").style.filter = "invert(0.8)";
  }
}