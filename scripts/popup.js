document.getElementById('saveBtn').addEventListener('click', function () {
    var bookmarkName = document.getElementById('bookmarkName').value;
    var bookmarkUrl = document.getElementById('bookmarkUrl').value;

    if (bookmarkName && bookmarkUrl) {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.push({ name: bookmarkName, url: bookmarkUrl });
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        alert('Bookmark saved!');
    } else {
        alert('Please enter both name and URL.');
    }
});
window.error = function(err) {
    console.log(err);
};