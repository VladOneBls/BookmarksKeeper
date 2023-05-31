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

// Validate Form
function validate(nameValue, urlValue) {
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g; // Regular Expression for ensuring URL starts with HTTP/HTTPS
    const regex = new RegExp(expression);
    // Check if user filled in both fields
    if (!nameValue || !urlValue) {
        alert('Please submit values for both fields!');
        return false;
    }
    // Check if web address is valid
    if (!urlValue.match(regex)) {
        alert('Please provide a valid web address');
        return false;
    }
    // Valid
    return true;
}

// Handle Data from Form
function storeBookmark(e) {
    e.preventDefault(); // prevent it from submitting the form to a webserver as we need to chatch the values within the JavaScript
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if (!urlValue.includes('https://') && !urlValue.includes('http://')) {
        urlValue = `https://${urlValue}`;
    }
    console.log(nameValue, urlValue);
    if (!validate(nameValue, urlValue)) {
        return false;
    }
}

// Event Listener
bookmarkForm.addEventListener('submit', storeBookmark);