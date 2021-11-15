const projects = [
    {
        "name": "LILT",
        "descriptor": "Branding & Identity",
        "filters": ["visual", "client"],
        "thumbnail": "img/cover/LILT.jpg",
        "banner": "img/cover/LILT.jpg",
        "halfLeft0": "img/cover/LILT.jpg",
        "halfRight0": "img/cover/LILT.jpg",
        "full0": "img/cover/LILT.jpg",
        "halfLeft1": "img/cover/LILT.jpg",
        "halfRight1": "img/cover/LILT.jpg",
        "bio": "Hello! My name is Aditi and I like to party."
    },
    {
        "name": "LILT",
        "descriptor": "Branding & Identity",
        "filters": ["visual", "client"],
        "thumbnail": "img/cover/LILT.jpg",
        "banner": "img/cover/LILT.jpg",
        "halfLeft0": "img/cover/LILT.jpg",
        "halfRight0": "img/cover/LILT.jpg",
        "full0": "img/cover/LILT.jpg",
        "halfLeft1": "img/cover/LILT.jpg",
        "halfRight1": "img/cover/LILT.jpg",
        "bio": "Hello! My name is Aditi and I like to party."
    },
    {
        "name": "LILT",
        "descriptor": "Branding & Identity",
        "filters": ["visual", "client"],
        "thumbnail": "img/cover/LILT.jpg",
        "banner": "img/cover/LILT.jpg",
        "halfLeft0": "img/cover/LILT.jpg",
        "halfRight0": "img/cover/LILT.jpg",
        "full0": "img/cover/LILT.jpg",
        "halfLeft1": "img/cover/LILT.jpg",
        "halfRight1": "img/cover/LILT.jpg",
        "bio": "Hello! My name is Aditi and I like to party."
    },
]

const rootElement = document.getElementById('root')

class Header extends React.Component { 
    render() { 
        return (
            <div id="header">
            <div class="left">
                <div id='title'>Aditi Verma</div>
                <div id='subtitle'>is a communications designer excited by all things 'text & image'.</div>
                <div id='subtitle'>She enjoys building design systems with multidisciplinary teams.</div>

                <div id='awards'>
                    <div id='award'>AIGA NY Grad 2019</div>
                    <div id='award'>GDUSA American Graphic Design Award 2019</div>
                </div>
            </div>
            <div class="right">
                <div id='contact'>CONTACT</div>
            </div>
            </div>
        )
    } 
}

class Filters extends React.Component { 
    render() { 
        return (
            <div>
                Hello World
            </div>
        )
    } 
}

class Project extends React.Component {
    render() {
        return (
            <div class="projectRow">
                <div class="projectLeft">
                    <img src={this.props.projectLeft.thumbnail} width="588"/>
                    {this.props.projectLeft.name}, {this.props.projectLeft.descriptor}
                </div>
                <div class="projectRight">
                    <img src={this.props.projectRight.thumbnail} width="588"/>
                    {this.props.projectRight.name}, {this.props.projectRight.descriptor}
                </div>
            </div>
        )
    }
}

class Projects extends React.Component { 
    render() { 
        return (
            <div>
                {/*<Filters/>*/}
                <hr/>
                <div id='projects'>
                    {projects.map((project)=>{
                        return <Project projectLeft={project} projectRight={project}/>
                    })}
                </div>
            </div>
        )
    } 
}

function App(){
    return(
        <div>
        <Header/>
        <Projects/>
        </div>
    )
}


ReactDOM.render(
    <App />,
    rootElement
)