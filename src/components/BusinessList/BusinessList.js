// Stimulates a list of single Businesses

import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

// Stimulate what a returned list of businesses would look Unlike
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {
          this.props.handleBusinesses.map(business => {
            return <Business handleBusiness={business} />;
          })
        }
      </div>
    );

  }
}

export default BusinessList;
