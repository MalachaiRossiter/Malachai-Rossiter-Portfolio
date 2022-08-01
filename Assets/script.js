
// Changing the cursor to a dot
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: " +(e.pageY-3)+ "px; left: "+(e.pageX-3)+"px;");
})
// Having the trailing Cursor Follow you
const cursorFollow = document.querySelector(".cursor-follow");
document.addEventListener("mousemove", e => {
    cursorFollow.setAttribute("style", "top: " +(e.pageY-10.5)+ "px; left: "+(e.pageX-10.5)+"px;");
})
//Changing the follow cursor on hover





//Copy to ClipBoard
function copyClipboard(){
    navigator.clipboard.writeText("malachai.rossiter@gmail.com");
    document.getElementById("copiedEmail").setAttribute("style", "display: inline-block;");
}

