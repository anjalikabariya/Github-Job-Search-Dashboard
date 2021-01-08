import './App.css';
import React from 'react';
import Axios from 'axios';
import Header from './Components/Header/Header';
import SearchForm from './Components/SearchForm/SearchForm';
import JobCard from './Components/JobCard/JobCard';

const API_URL = 'https://jobs.github.com/positions.json';

class App extends React.Component {

  state = {
    jobs: []
  }

  componentDidMount() {
    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();
    Axios.get(API_URL,
      {cancelToken: source.token})
      .then((response) => {
        this.setState({jobs : response.data})
        console.log('Axios call:');
        console.log(this.state.jobs);
      })
      .catch((error) => {
        console.error(error);
      })

  }
  
getJobs = (query) => {
  Axios.get(API_URL +`?search=${query}`)
  .then((response) => {
    console.log(response.data);
    console.log(this);
    this.setState({jobs : response.data})
    
  })
  .catch((error) => {
    console.error(error);
  })
}
  render() {

    return (
      <>
      <Header />

      <SearchForm submitHandler={this.getJobs} />
      
      {!!this.state.jobs && this.state.jobs.map((job) => {

                return (
                    <JobCard key={job.id} title={job.title} location={job.location} url={job.url} />
                )
            })}

      </>
    )

  }
  
}

export default App;
