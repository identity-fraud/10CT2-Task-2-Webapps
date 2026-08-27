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

  }
  else {
    alert('dark')
  }
}