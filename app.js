let accItemNames = document.querySelectorAll(".top-menu_accordion_item__name");

    accItemNames.forEach(accItemName => {
    accItemName.addEventListener("click", event => {
        accItemName.classList.toggle("active");
    });
});
    /*let i;
    for (i=0; i<accItem.length; i++) {
    accItem[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}*/
