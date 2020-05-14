import React from 'react';

import { Cards, CountryPicker } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';

import image from './images/logo.png';
/*<Chart data={data} country={country} /> to see the chart*/
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
         
        <img className={styles.image} src={image} alt="COVID-19" />
        
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        
        
      </div>
    );
  }
}

export default App;