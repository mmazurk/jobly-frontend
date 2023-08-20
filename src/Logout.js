function Logout({logout}) {

    return (
        <div>
        <h1 className="mb-3">This is the Logout page.</h1>
        <button onClick={() => logout()}>Log Out</button>
        </div>
    )
}

export default Logout;