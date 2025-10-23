// Select elements
const toggleBtn = document.getElementById('themeToggle');
const body = document.body;
const icon = document.querySelector('.icon');

// Listen for button click
toggleBtn.addEventListener('click', () => {
  // Toggle the 'dark' class on the body
  body.classList.toggle('dark');

  // Change the icon depending on theme
  if (body.classList.contains('dark')) {
    icon.textContent = '🌙'; // moon emoji for dark mode
  } else {
    icon.textContent = '🌞'; // sun emoji for light mode
  }
});
