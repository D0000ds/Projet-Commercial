// une fois le document chargÃ© le code js entre en fonction.
window.addEventListener('load', function () {


    const navbar = document.querySelector(".navBar")
    const navbarItems = document.querySelectorAll(".navBar_item")

    for (let i = 0; i < navbarItems.length; i++) {
        navbarItems[i].addEventListener("click", e => {
            navbar.classList.toggle('show-nav')
        })

    }

    //******************************* Activation du menu burger *************************
    function toggleMenu() {
        const burger = document.querySelector(".burger")
        burger.addEventListener('click', () => {
            navbar.classList.toggle('show-nav')
        })
    }
    toggleMenu();

});