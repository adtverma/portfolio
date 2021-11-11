const rootElement = document.getElementById('root')

class Header extends React.Component { 
    render() { 
        return (
            <div>
            <div id='title'>Aditi Verma</div>
            <div id='subtitle'>is a communications designer excited by all things 'text & image'.</div>
            <div id='subtitle'>She enjoys building design systems with multidisciplinary teams.</div>
            <div id='contact'>CONTACT</div>
            </div>
        )
    } 
}

function App(){
    return(
        <div>
        <Header/>
        </div>
    )
}


ReactDOM.render(
    <App />,
    rootElement
)