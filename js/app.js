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

class Divider extends React.Component { 
    render() { 
        return (
            <hr>
        )
    } 
}

class Projects extends React.Component { 
    render() { 
        return (
            <div>
                {/*<Filters/>*/}
                <Divider/>
                Hello World
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