const toggleBtn = document.getElementById('theme-toggle');
const root = document.documentElement;

toggleBtn.addEventListener('click', () => {
  const currentScheme = getComputedStyle(root).colorScheme;
  const nextScheme = currentScheme.includes('dark') ? 'light' : 'dark';

  root.style.colorScheme = nextScheme;
  
  localStorage.setItem('color-scheme', nextScheme);
}); // listen to onclick theme toggle button to switch themes