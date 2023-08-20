function HomePage({login, logout}) {

    console.log(login)

    return (
        <div>
        <h1 className="mb-3">This is the HomePage.</h1>
        <button onClick={() => login({username: 'testuser', password: 'password'})}>Log In</button>
        <button onClick={() => logout()}>Log Out</button>

        </div>
    )
}

export default HomePage;