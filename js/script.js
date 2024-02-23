function toggleMenu() {
    var items = document.getElementsByClassName('nav-menu')[0].getElementsByTagName('li');
    for (var i = 0; i < items.length; i++) {
        if (items[i].style.display == 'none') {
            items[i].style.display = 'block';
        } else {
            items[i].style.display = 'none';
        }
    }
}