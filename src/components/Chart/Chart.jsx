import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
       const fetchAPI =  async () => {
           setDailyData(await fetchDailyData());
       }
console.log(dailyData);

       fetchAPI();
    });

const lineChart = (
    dailyData.length
    ?(
    <Line data={{
        labels: dailyData.map(({date})=> date),
        datasets: [{
            data: dailyData.map(({ confirmed }) => confirmed),
            label: 'Infected',
            borderColor:'#779cdb',
            fill: true, 
        }, {
            data: dailyData.map(({ deaths }) => deaths),
            label: 'Deaths',
            borderColor:'#ff7bac',
            fill: true, 
            backgroundColor:'rgba(255, 0, 0, 0.5)'
        }],

    }}/>): null

);

    return(
       <div className={styles.contain}>
           {lineChart}
       </div>
    )
}

export default Chart;