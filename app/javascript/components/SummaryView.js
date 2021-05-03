import React from 'react';

const SummaryView = (props) => {
  return (
    <div className="summary-grid">
      <div className="ui segment summary-card">
        <h4 className="ui header">Revenue</h4>
        <p>{props.totalRevenue}</p>
      </div>
      <div className="ui segment summary-card">
        <h4 className="ui header">Avg Revenue /Order</h4>
        <p>{props.averageRevenuePerOrder}</p>
      </div>
      <div className="ui segment summary-card">
        <h4 className="ui header">Customers</h4>
        <p>{props.customersNumber}</p>
      </div>
    </div>
  );
}

export default SummaryView;