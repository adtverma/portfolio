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
            <div>
            <div id='title'>Aditi Verma</div>
            <div id='subtitle'>is a communications designer excited by all things 'text & image'.</div>
            <div id='subtitle'>She enjoys building design systems with multidisciplinary teams.</div>

            <div id='awards'>
                <div id='award'>AIGA NY Grad 2019</div>
                <div id='award'>GDUSA American Graphic Design Award 2019</div>
            </div>

            <div id='contact'>CONTACT</div>
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
            <div class="project">
                <img src={this.props.project.thumbnail} width="588"/>
                {this.props.project.name}, {this.props.project.descriptor}
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
                        return <Project project={project}/>
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