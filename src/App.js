import JoblyApi from './api';
import {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './Navigation';
import CompanyDetails from './CompanyDetails';
import Login from './Login';
import SignUp from './SignUp';
import EditProfile from './EditProfile';
import HomePage from './HomePage';
import './App.css'
import Items from './Items';
import Logout from './Logout';
import UserContext from "./UserContext";

function App() {
  const [data, setData] = useState({ companies: [], jobs: []})
  const [isLoading, setIsLoading] = useState(true)
  const [token, setToken] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // Test function for new api methods
  // async function getUser() {
  //   let token = await JoblyApi.authUser({username: 'testuser', password: 'password'});
  //   return token;
  // }
  // getUser().then((token)=> console.log(token))


  async function login(userData) {
    let token = await JoblyApi.authUser(userData);
    if(token) { 
      setToken(token)
      setIsLoggedIn(true) 
    }
  }

  function logout() {
    setToken(null)
    setIsLoggedIn(false)
  }

  // username, password, firstName, lastName, email, isAdmin
  async function signUp(formData) {
    let token = await JoblyApi.signUpUser(formData);
    if(token) {
      setToken(token)
      setIsLoggedIn(true)
    }
  }

  // I can speed up the loading by using Promise.all()
  // I also need to add error handling to this
  async function getAllData() {
    let companies = await JoblyApi.getCompanies();
    let jobs = await JoblyApi.getJobs();
    return {companies: companies, jobs: jobs}
  }

  useEffect(() => {
    getAllData().then((result) => {
      setData(result);
      setIsLoading(false)
    })
  }, [token]);

  if(isLoading) {
    return (<h1>LOADING ... </h1>)
  } else {
  return (
    <UserContext.Provider value={{token: token}}>
    <BrowserRouter>
    <Navigation isLoggedIn={isLoggedIn}/>
    <main>
      <Routes>
        <Route path="/" element={<HomePage login={login} logout={logout} />} />
        <Route path="/companies" element={<Items itemList={data.companies} cardType="companies" />} />
        <Route path="/companies/:handle" element={<CompanyDetails />} />
        <Route path="/jobs" element={<Items itemList={data.jobs} cardType="jobs" />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/logout" element={<Logout logout={logout} />} />
        <Route path="/signup" element={<SignUp signUp={signUp}/>} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="*" element={<p>Hmmm. I can't seem to find what you want.</p>} />
      </Routes>
    </main>
  </BrowserRouter>
  </UserContext.Provider>
  ); }

}

export default App;
