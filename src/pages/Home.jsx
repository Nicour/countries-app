import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
       countries: []
    }
  }

  componentDidMount() {
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => {
      console.log(response.data)
      this.setState({countries: response.data})
    })
    .catch(error => {
      console.log(error);
    })
  }


  render() {
    const {countries} = this.state;
    return (
      <div>
        <h1>Countries</h1>
        <section>
          {countries.map(country => 
            <>
              <p>{country.name}</p> 
              <img src={country.flag} alt={country.name}/>
            </>
          )}
        </section>
      </div>
    )
  }
}
