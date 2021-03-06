import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './Countryselect.module.css';
import { fetchCountries } from '../../api';


const Countryselect = () => {

    const[fetchedCountries, setFetchedCountries] = useState([]);

useEffect(() => {
    const fetchAPI = async () => {
         setFetchedCountries(await fetchCountries());
    }

    fetchAPI();
}, [setFetchedCountries]);





    return(
      <FormControl className={styles.formControl}>
          <NativeSelect>
             <option value="global">Global</option> 
             {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
          </NativeSelect>
      </FormControl>  
    )
}

export default Countryselect;