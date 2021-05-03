import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const MonthlyView = (props) => {
  // useEffect(() => {
  //   props.revenuePerMonth.map((revenue) => {
  //     console.log(revenue);
  //   })
  // }, [])

  const labels = props.revenuePerMonth.map((month) => {
    return (
      console.log(month)
    );
    // new Date(month[1], month[0]);
  })

  return (
    <div>
      Monthly View
      <Bar 
        data={props.revenuePerMonth}
      />
    </div>
  );
}

export default MonthlyView;
