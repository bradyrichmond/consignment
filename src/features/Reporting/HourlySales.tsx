import React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { add, format, isSameHour } from 'date-fns';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const chartData: any[] = [];

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Sales by hour',
    },
  },
};

const sortDataToHours = (chartData: any) => {
  if (chartData.length > 0) {
    const firstTransaction = chartData[0];
    let startTime = new Date(firstTransaction.SALE_TS);
    startTime.setHours(9);
    startTime.setMinutes(0);
    const endTime = add(startTime, { hours: 11 });
    let output: {label: string, amount: number, transactions: number}[] = [];

    for (let i = startTime; i < endTime;) {
      const filteredTransactions = chartData.filter((cd:any) => {
        return isSameHour(new Date(cd.SALE_TS), i);
      });

      const total = filteredTransactions.reduce((a: any[], b: any) => a + b.SALE_COST, 0);
      const key = `${format(i, 'hh:mm')}`;
      output.push({label: key, amount: total, transactions: filteredTransactions.length});
      i = add(i, { hours: 1 });
    }

    return output;
  }

  return [];
}

const filteredData = chartData.length > 0 ? sortDataToHours(chartData) : [];

const labels = filteredData.map((fd) => fd.label);

const HourlySales = () => {
  const getStoreIds = () => {
    const storeIds = chartData.map((a) => {
      return a.LOCATION_ID
    })

    //@ts-ignore
    return [...new Set(storeIds)];
  }

  const generateStoreData = (storeIds: number[]) => {
    // @ts-ignore
    const output = [];

    storeIds.forEach((si: number) => {
      output.push({
        label: si,
        data: sortDataToHours(chartData.filter((cd) => cd.LOCATION_ID === si)).map((fd) => fd.amount)
      })
    })

    // @ts-ignore
    return output;
  }

  const buildData = () => {
    if (chartData.length > 0) {
      const storeIds = getStoreIds();
      const storeDataSets = generateStoreData(storeIds);

      const baseDataSet = {
        label: 'Total Hourly Sales',
        data: sortDataToHours(chartData).map((fd) => fd.amount),
        borderColor: '#434ce6'
      };

      const datasets = storeDataSets.length > 0 ? [baseDataSet, ...storeDataSets] : [baseDataSet];

      return {
        labels,
        datasets
      }
    }
  }

  const data = buildData();

  return (
    <Paper>
      {data && <Line options={options} data={data} height='25%'/>}
    </Paper>
  )
}

export default HourlySales;