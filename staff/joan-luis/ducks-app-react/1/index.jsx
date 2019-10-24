const { Component } = React

class App extends Component {
    constructor() {
        super()

        this.state = { view: 'landing', error: undefined }

        this.handleGoToRegister = this.handleGoToRegister.bind(this)
        this.handleGoToLogin = this.handleGoToLogin.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleBackFromRegister = this.handleBackFromRegister.bind(this)
        this.handleLogin=this.handleLogin.bind(this)
        this.handleBackFromLogin=this.handleBackFromLogin.bind(this)
        this.handleGoToSearch = this.handleGoToSearch.bind(this) 
        this.handleSearch =this.handleSearch.bind(this)
      
    }

    handleGoToRegister() {
        this.setState({ view: 'register' })
    }

    handleGoToLogin() {
        this.setState({view: 'login'})    
    }

    handleRegister(name, surname, email, password) {
        try {
            registerUser(name, surname, email, password, error => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'landing' })
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }

    handleLogin( email, password) {
        try {
            authenticateUser(email, password, (error,data) => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'landing' })
            })
        } catch (error) {
            this.setState({ error: error.message,data })
        }
    }


    handleBackFromRegister() {
        this.setState({ view: 'landing', error: undefined })
    }

    handleBackFromLogin() {
        this.setState({ view: 'landing', error: undefined })
    }

    handleGoToSearch(){
        this.setState({ view: 'serach', error: undefined })
    }

    handleSearch(){
        try {
            searchDucks(query, callback => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'search' })
            })
        } catch (error) {
            this.setState({ error: error.message,data })
        }
    }


    render() {
        const { state: { view, error }, handleGoToRegister, handleGoToLogin, handleRegister, handleBackFromRegister, handleLogin,handleBackFromLogin, handleGoToSearch, handleSearch } = this

        return <>
            {view === 'landing' && <Landing onLogin={handleGoToLogin} onRegister={handleGoToRegister} />}
            {view === 'register' && <Register onRegister={handleRegister} onBack={handleBackFromRegister} error={error} />}
            {view === 'login' && <Login onLogin={handleLogin} onBack={handleBackFromLogin} error={error} />}
            {view === 'search' && <Serach onClick ={this.handleGoToSearch} error={error}/>  }
        </>
            
    }
}

// TODO login and search

ReactDOM.render(<App />, document.getElementById('root'))