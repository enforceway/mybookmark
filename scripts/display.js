// 在页面加载完成时执行
window.addEventListener('load', function() {
    document.getElementById('bookmarkForm').style.display = 'none';
    document.getElementById('bookmarkList').style.display = 'block';
    displayBookmarks();
});

// 显示添加表单的按钮点击事件
document.getElementById('showAddFormBtn').addEventListener('click', function() {
    document.getElementById('bookmarkList').style.display = 'none';
    document.getElementById('bookmarkForm').style.display = 'block';
});

// 关闭按钮的点击事件
document.getElementById('closeBtn').addEventListener('click', function() {
    document.getElementById('bookmarkForm').style.display = 'none';
    document.getElementById('bookmarkList').style.display = 'block';
});

// 保存按钮的点击事件
document.getElementById('saveBtn').addEventListener('click', function() {
    var bookmarkName = document.getElementById('bookmarkName').value;
    var bookmarkUrl = document.getElementById('bookmarkUrl').value;

    if (bookmarkName && bookmarkUrl) {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks.push({ name: bookmarkName, url: bookmarkUrl });
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        displayBookmarks();
        alert('书签保存成功！');
    } else {
        alert('请输入书签名称和 URL ！');
    }
});

function displayBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    var ul = document.getElementById('bookmarkUl');
    ul.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = bookmarks[i].name + ' - ' + bookmarks[i].url;
        ul.appendChild(li);
    }
}