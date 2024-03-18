function showRandomItem() {
    //Vektor med items
    var items = [
        {
            image:'pizza2.jpeg',
            description: 'Alla pizzor 70kr!'
        },
        {
            image:'rulle2.jpeg',
            description: 'Alla rullar 70kr!'
        },
        {
            image:'sallad2.jpeg',
            description: 'Alla sallader 2 för 1!'
        },
    ];
    //Slumpa nummer
    var randomNum = Math.random();
    //Multiplicera
    var index = Math.floor(randomNum * items.length);
    var container = document.getElementById("rea");
    var itemHTML = '<img src="' + items[index].image + '" alt="Promotional Item">';
    itemHTML += '<p>' + items[index].description + '</p>';
    container.innerHTML = itemHTML;
}
window.onload = showRandomItem;