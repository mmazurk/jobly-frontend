import logo from './logo.svg';
import './App.css';
import JoblyApi from './api';

function App() {

  async function getData() {
    let company = await JoblyApi.getCompany("scott-smith");
    let companies = await JoblyApi.getCompanies();
    let jobs = await JoblyApi.getJobs();
    let job = await JoblyApi.getJob("2");
    console.log(job);
  }

  console.log("Here is your data ...");
  getData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
