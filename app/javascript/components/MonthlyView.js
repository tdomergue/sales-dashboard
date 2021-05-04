import React from 'react';
import { Bar } from 'react-chartjs-2';

const MonthlyView = (props) => {

  const data = {
    labels: Object.keys(props.revenuePerMonth).sort((a, b) => a - b),
    datasets: [
      {
        label: 'Sales',
        data: Object.values(props.revenuePerMonth)
      }
    ]
  };

  return (
    <div className="ui header">
      Monthly View
      <Bar data={data}/>
    </div>
  );
}

export default MonthlyView;
