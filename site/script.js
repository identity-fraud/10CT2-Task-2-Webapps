const searchForm = document.getElementById('blog-search');
const searchBar = document.getElementById('searchForm');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const query = searchBar.value.trim();
  console.log("Submitted form - Query:", query);
});
