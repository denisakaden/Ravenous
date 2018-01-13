// Stimulates a single Business
import React from 'react';
import './Business.css';
// import ReactDOM from 'react-dom';


class Business extends React.Component {

  render() {
    return (
      <div className="Business">
        <div className="image-container">
          <img src={this.props.handleBusiness.imageSrc} alt=''/>
        </div>
        <h2>{this.props.handleBusiness.name}</h2>
        <div className="Business-information">
          <div className="Business-address">
            <p>{this.props.handleBusiness.address}</p>
              <p>{this.props.handleBusiness.city}</p>
              <p>{this.props.handleBusiness.state} {this.props.handleBusiness.zipCode}</p>
          </div>
          <div className="Business-reviews">
            <h3>{this.props.handleBusiness.category}</h3>
            <h3 className="rating">{this.props.handleBusiness.rating} stars</h3>
            <p>{this.props.handleBusiness.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Business;
