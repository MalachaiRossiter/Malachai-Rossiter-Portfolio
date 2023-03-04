const Work = (props) => {
    return (
    <div class="works" id="works">
        <h1>My works</h1>
        <div class="workscontainer">
            <a href="https://github.com/MalachaiRossiter/DevBlog" className="linkitem2">
                <div class="card">
                    <div class="cardimage img1 linkitem2"></div>
                    <div class="cardtext linkitem2">
                        <h2 id="color1">Dev Blog</h2>
                        <p className="linkitem2">This full stack mern project was a final project for the Coding Dojo Bootcamp.
                            It has full CRUD capabilities along with user authentication
                        </p>
                    </div>
                </div>
            </a>
            <a href="https://github.com/MalachaiRossiter/GroupDocs" className="linkitem2">
                <div class="card linkitem2">
                    <div class="cardimage img2 linkitem2"></div>
                    <div class="cardtext linkitem2">
                        <h2 id="color2">Group Documents</h2>
                        <p className="linkitem2">Group Docs was a group project that I was the team lead for. We wanted to learn Socket.IO
                            and thought a great way to learn it would be to create a group documentation project
                        </p>
                    </div>
                </div>
            </a>
            <a href="https://github.com/MalachaiRossiter/LukjanMetal" className="linkitem2">
                <div class="card linkitem2">
                    <div class="cardimage img3 linkitem2"></div>
                    <div class="cardtext linkitem2">
                        <h2 id="color3">LukeJan Metals</h2>
                        <p className="linkitem2">This project is an ecommerce website for a factory. It features full CRUD capabilities and 
                            is an example of how to store images with a database
                        </p>
                    </div>
                </div>
            </a>
        </div>
    </div>
    )
}
export default Work;