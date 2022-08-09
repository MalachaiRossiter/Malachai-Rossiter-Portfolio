
// Changing the cursor to a dot
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: " +(e.pageY-3)+ "px; left: "+(e.pageX-3)+"px;");
})
// Having the trailing Cursor Follow you //Changing the follow cursor on hover by hand
const cursorFollow = document.querySelector(".cursor-follow");
document.addEventListener("mousemove", e => {
    console.log(e.target)
    cursorFollow.setAttribute("style", "top: " +(e.pageY-10.5)+ "px; left: "+(e.pageX-10.5)+"px;");

    if (e.target.classList.contains('linkitem')) {
        cursorFollow.classList.add('red');
        cursorFollow.setAttribute("style", "top: " +(e.pageY-21)+ "px; left: "+(e.pageX-21)+"px;");
    } else {
        cursorFollow.classList.remove('red');
    }
})

//Copy to ClipBoard
function copyClipboard(){
    navigator.clipboard.writeText("malachai.rossiter@gmail.com");
    document.getElementById("copiedEmail").setAttribute("style", "display: inline-block;");
}

//hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".navlink").forEach(n => n.addEventListener("click", () =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))