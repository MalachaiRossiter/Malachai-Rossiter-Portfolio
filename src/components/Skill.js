const Skill = (props) => {
    return (
        <div class="skillscontainer">
        <h1>I specialize in creating wonderful experiences</h1>
            <div class="row">
                <div class="column">
                    <img src="./Assets/Images/GearsIcon.png" alt="Gears"/>
                    <h3 id="software">Programming Languages</h3>
                    <p>Experienced in functional and OOP: JavaScript, TypeScript, Python, Java, C#, CSS, HTML</p>
                </div>
                <div class="column">
                    <img src="./Assets/Images/ReactIcon.png" alt="React"/>
                    <h3 id="frontend">FullStack Developement</h3>
                    <p>Deep understanding of: React, Ajax, RESTful APIs, Tailwind, Node.js, Socket.io, MongoDB, MySQL</p>
                </div>
                <div class="column">
                    <img src="./Assets/Images/ControllerIcon.png" alt="Controller"/>
                    <h3 id="game">Game Developement</h3>
                    <p>I have a love of creating games and making others laugh: Unity, C#, Blender, Photoshop</p>
                </div>
            </div>
    </div>
    )
}
export default Skill;