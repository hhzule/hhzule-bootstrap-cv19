import React from 'react';
import { Cards, Chart, Countryselect} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
  state = {
    data : {},
  }

   async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData});
    
  }
  render() {
    const { data } = this.state;
  return (
    <div className={styles.container}>
      <Chart/>
      <Cards  data={data}/>
      
      <Countryselect />
          <h1>App</h1>
        </div>
  );
}
}

export default App;
