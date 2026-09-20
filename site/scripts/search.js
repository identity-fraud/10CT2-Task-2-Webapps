document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchForm');
  const searchForm = document.getElementById('blog-search');
  const postItems = document.querySelectorAll('.post-item');
  const noResults = document.getElementById('no-results');

  function filterPosts() {
    
    const query = searchInput.value.toLowerCase().trim();
    let visible = 0;

    postItems.forEach(item => {
      const title = (item.getAttribute('data-title') || '').toLowerCase();
      const categories = (item.getAttribute('data-categories') || '').toLowerCase();
      const content = (item.getAttribute('data-content') || '').toLowerCase();

      const isMatch = title.includes(query) || categories.includes(query) || content.includes(query);

      if (isMatch) {
        item.style.display = '';
        visible++;
    } else {
        item.style.display = 'none';
    }
    });

    if (noResults) {
        noResults.style.display = (visible === 0 && query !== '') ? 'block' : 'none';
    } // when no results from input then show the hidden no results text
}
  searchInput.addEventListener('input', filterPosts);

  if (searchForm) {
    searchForm.addEventListener('submit', (e) => { // e for event
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        const queryParam = urlParams.get('q');
        if (queryParam) {
            searchInput.value = queryParam;
            filterPosts();
}
    });
}
}); // pull data from blog.html which gives information on every posts metadata, showing only posts that have that query