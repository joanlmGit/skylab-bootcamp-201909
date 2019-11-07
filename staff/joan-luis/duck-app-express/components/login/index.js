function Login(){
    return '<form method="POST" action ="/Login">
        <input type="email" name="email" placeholders="your email">
        <input type="password" name="password" placeholders="your password">
    </form>'
}
module.exports=Login