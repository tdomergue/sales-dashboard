import React, { useEffect, useState } from 'react';
import SummaryView from './SummaryView';
import MonthlyView from './MonthlyView';

const DataVisualization = (props) => {

  return (
    <div>
      <SummaryView totalRevenue={props.totalRevenue} averageRevenuePerOrder={props.averageRevenuePerOrder} customersNumber={props.customersNumber} />
      {/* <MonthlyView revenuePerMonth={revenuePerMonth} /> */}
    </div>
  );
}

export default DataVisualization;