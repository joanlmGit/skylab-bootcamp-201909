const Feedback = require('../feedbach')

module.exports=function ({ path }) {
    return `<section class="view search">
        
        <form method="post" action="${path}">
            <h1 class="search__title">Search</h1>
            <h2 class="search__user">user</h2>         
            <span class="search__icon">🐣</span>
            <input class="search__criteria" type="text" name="query" placeholder="criteria" defaultValue={query} />
            <button class="search__submit">🔍</button>
        </form>

        ${Feedback()}
    </section>`
}