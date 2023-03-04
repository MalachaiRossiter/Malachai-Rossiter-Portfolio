const NavBar = (props) => {

    //hamburger menu
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navmenu");

    // add event listeners if elements exist
    hamburger?.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    })

    document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

    return (
        <div class="navcontainer">
        <div class="navbar">
            <a class="branding" href="#"><img class="logo linkitem2" src="./Assets/Images/Logo.png" alt="Logo"/></a>
    
            <ul class="navmenu">
                <li class="navitem">
                    <a href="#skills" class="navlink linkitem">skills</a>
                </li>
                <li class="navitem">
                    <a href="#works" class="navlink linkitem">work</a>
                </li>
                <li class="navitem"id="skills">
                    <a href="#contact" class="navlink linkitem" >contact</a>
                </li>
            </ul>
            <div class="hamburger linkitem">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </div>
    )
}
export default NavBar;