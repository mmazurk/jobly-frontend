import JoblyApi from './api';
import {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes, createPath} from 'react-router-dom';
import Companies from "./Companies"
import Navigation from './Navigation';
import CompanyDetails from './CompanyDetails';
import Jobs from './Jobs';
import Login from './Login';
import SignUp from './SignUp';
import EditProfile from './EditProfile';
import HomePage from './HomePage';
import './App.css'

function App() {
  const [data, setData] = useState({ companies: [], jobs: []})
  const [isLoading, setIsLoading] = useState(true)

  // async function getData() {
  //   let company = await JoblyApi.getCompany("scott-smith");
  //   let companies = await JoblyApi.getCompanies();
  //   let jobs = await JoblyApi.getJobs();
  //   let job = await JoblyApi.getJob("2");
  // }

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
  }, []);

  if(isLoading) {
    return (<h1>LOADING ... </h1>)
  } else {
  return (
    <div>
    <BrowserRouter>
    <Navigation />
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/companies" element={<Companies companyList={data.companies}/>} />
        <Route path="/companies/:handle" element={<CompanyDetails />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<EditProfile />} />
        <Route path="*" element={<p>Hmmm. I can't seem to find what you want.</p>} />
      </Routes>
    </main>
  </BrowserRouter>
  </div>
  ); }

}

export default App;
