javascript
// Search functionality
function search() {
  const query = document.getElementById('searchInput').value;
  if (query) {
    window.location.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  }
}

// Sidebar toggle
document.getElementById('sidebarToggle').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('-translate-x-full');
});

// Enter key for search
document.getElementById('searchInput').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') search();
});

// Draggable scrolling
const videoGrid = document.getElementById('videoGrid');
let isDragging = false;
let startY;
let scrollTop;

videoGrid.addEventListener('mousedown', (e) => {
  isDragging = true;
  startY = e.pageY - videoGrid.offsetTop;
  scrollTop = videoGrid.scrollTop;
  videoGrid.classList.add('grabbing');
});

videoGrid.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const y = e.pageY - videoGrid.offsetTop;
  const walk = (y - startY) * 2; // Adjust scroll speed
  videoGrid.scrollTop = scrollTop - walk;
});

videoGrid.addEventListener('mouseup', () => {
  isDragging = false;
  videoGrid.classList.remove('grabbing');
});

videoGrid.addEventListener('mouseleave', () => {
  isDragging = false;
  videoGrid.classList.remove('grabbing');
});

// Touch support for mobile
videoGrid.addEventListener('touchstart', (e) => {
  isDragging = true;
  startY = e.touches[0].pageY - videoGrid.offsetTop;
  scrollTop = videoGrid.scrollTop;
});

videoGrid.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const y = e.touches[0].pageY - videoGrid.offsetTop;
  const walk = (y - startY) * 2;
  videoGrid.scrollTop = scrollTop - walk;
});

videoGrid.addEventListener('touchend', () => {
  isDragging = false;
});
