const { Component } = React
const {query}=location

const {id, token}=sessionStorage


class App extends Component {

    state = { view: id && token ? 'search': 'landing', error: undefined, query }

    componentWillMount(){
        if (id && token)
            try {
                retrieveUser(id, token, (error, user)=>{

                    if (error) this.setState({error: error.message})
                    else{
                        const {name}=user

                        this.setState({ user:name })

                    }
                })
            } catch (error) {
                this.setState({error:error.message})
            }
        
        const {state: {query}}= this

        query && this.handleSearch(query)
    }
    
    
    handleGoToRegister(){
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
                else this.setState({ view: 'search' })
                    try {
                        const {id, token}=data;

                        sessionStorage.id=id;
                        sessionStorage.token=token

                        registerUser(id, token, (error, user)=>{
                            if (error) this.setState({error:error.message})
                            else{
                                const {name}=user

                                this.setState({view: 'search', user:name})
                            }
                        })

                    }catch (error){
                        this.setState({error: error.message})
                    }
            })
        } catch (error) {
            this.setState({ error: error.message})
        }
    }


    handleBackFromRegister() {
        this.setState({ view: 'landing', error: undefined })
    }

    handleBackToLogin() {
        this.setState({ view: 'landing', error: undefined })
    }

    handleBackToSearch(){
        this.setState({ view: 'serach'})
    }

    handleSearch(){
        try {
            searchDucks(query, (error,ducks) => {
                if (error) this.setState({ error: error.message })
                else{
                    
                    location.query=query
                    this.setState({error: undefined, ducks})
                }
            })
        } catch (error) {
            this.setState({ error: error.message})
        }
    }

    handleFav(id){
        //todo toggleFavDucks (user-id, user-token, id)
    }

    handleDetail (id) {
        try {
            retrieveDuck(id, (error, duck) => {
                if (error) this.setState({ error: error.message })
                else this.setState({ view: 'detail', duck })
            })
        } catch (error) {
            this.setState({ error: error.message })
        }
    }


    render() {
        const { state: { view, error }, handleGoToRegister, handleGoToLogin, handleRegister, handleBackFromRegister, handleLogin,handleBackFromLogin, handleGoToSearch, handleSearch } = this

        return <>
            {view === 'landing' && <Landing onLogin={handleGoToLogin} onRegister={handleGoToRegister} />}
            {view === 'register' && <Register onRegister={handleRegister} onBack={handleBackFromRegister} error={error} />}
            {view === 'login' && <Login onLogin={handleLogin} onBack={handleBackFromLogin} error={error} />}
            {view === 'search' && <>
                <Serach onSubmit ={handleSearch} results={ducks } error={error} onResultsRender={results=> <Results items={results} onItemRender={item => <ResultItem item={item} key={item.id} onClick={handleDetail} onFav={handleFav} />} />} user={user} query={query}/> 
                {error && <Feedback messege={error} /> }
            </>}
            {view === 'detail' && <Detail item={duck} onBack={this.handleBackToSearch} />}
        </>
            
    }
}



ReactDOM.render(<App />, document.getElementById('root'))