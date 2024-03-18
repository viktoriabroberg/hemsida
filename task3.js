var menuItems = document.querySelectorAll('.menu-container > div');

menuItems.forEach(function(menuItem) {
    menuItem.onmouseover = function() {
        this.style.transform= 'scale(1.1)';
    };

    menuItem.onmouseout = function() {
        this.style.transform = 'scale(1)'; 
    };
});

var menuLinks = document.querySelectorAll('.left-menu a');

menuLinks.forEach(function(link) {
    link.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#99C76B'; 
    });

    link.addEventListener('mouseout', function() {
        this.style.backgroundColor = ''; 
    });
});