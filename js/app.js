const rootElement = document.getElementById('root')

class HelloWorld extends React.Component { 
    render() { 
        return (
            <div>
            <h1>Hello, {this.props.name}!</h1>
            </div>
        )
    } 
}

function App(){
    return(
        <div>
        <HelloWorld name="World"/>
        </div>
    )
}


ReactDOM.render(
    <App />,
    rootElement
)