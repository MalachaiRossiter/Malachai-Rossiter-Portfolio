const Contact = (props) => {

    // Copy to ClipBoard
    function copyClipboard(){
    navigator.clipboard.writeText("malachai.rossiter@gmail.com");
    document.getElementById("copiedEmail").setAttribute("style", "display: inline-block;");
    }

    return (
    <div class="contact" id="contact">
    <div class="contactcontainer">
        <h1>Hit me up!</h1>
        <div class="worksrow">
            <div class="workscolumn">
                <h2 class="h2contactpage">A little about me</h2>
                <p>Hi, I'm Malachai. I've always had a passion for coding and computers in general.
                    I enjoy learning new things and being able to create programs and get the computer to behave
                    how I want it to. <br/>
                    But that's not all I do. I also happen to love games, and making videos and content on video games
                    I have a small channel on Youtube where I edit and create videos for others to laugh at. It's one of my favorite
                    side projects and has taught me a lot about how to be creative!
                </p>
            </div>
            <div class="workscolumn">
                <h2 class="h2contactpage">Contact me</h2>
                <div class="linkcollection">
                    <a><img class="imglink linkitem" onClick={copyClipboard} src="./Assets/Images/gmailicon.png" alt="gmail"/></a>
                    <a href="https://github.com/MalachaiRossiter"><img class="imglink linkitem" src="./Assets/Images/githubicon.png" alt="github"/></a>
                    <a href="https://www.linkedin.com/in/malachai-rossiter-46639923a/"><img class="imglink linkitem" src="./Assets/Images/linkedinicon.png" alt="linkedin"/></a>
                    <a href="https://www.youtube.com/channel/UCkKLrp8d_z2HkoORbEK1mvQ"><img class="imglink linkitem" src="./Assets/Images/youtubeicon.png" alt="youtube"/></a>
                </div>
                <p id="copiedEmail">Copied email to clipboard!</p>
            </div>
        </div>
    </div>

    </div>
    )
}
export default Contact;