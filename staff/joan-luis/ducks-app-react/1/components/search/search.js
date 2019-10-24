function Serach({  }) {
   return <section className="view search_hide">
       <form onSubmit={function (event) {
           event.preventDefault()

           const { search: {value: search} } = event.target

           //onRegister(name, surname, email, password)
       }}>
           <h1 className="search__title">Search</h1>
           
           <input className="search__field" type="text" name="search" placeholder="search" />
           <button className="search__submit">📨</button>

       </form>

       {error && <Feedback message={error} />}
   </section>
}