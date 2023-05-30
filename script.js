const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

// Show Modal, Focus on Input
function showModal() {
    modal.classList.add('show-modal'); // show the modal container
    websiteNameEl.focus(); // cursor on first line
}

// Modal Event Listeners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => modal.classList.remove('show-modal')); // hide modal container when 'X' is clicked
window.addEventListener('click', (e) => (e.target === modal ? modal.classList.remove('show-modal') : false));