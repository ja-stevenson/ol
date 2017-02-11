import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// requests
import BusinessSearch from './requests/business_list';
import BusinessInfo from './requests/business_info';
// components
import BusinessList from './components/business_list';
import BusinessDetail from './components/business_detail';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      businessList: [],
      selectedBusiness: null
    };

    this.getBusinessList();
  }

  // requests the list of businesses from API
  getBusinessList() {
    BusinessSearch((busObj) => {
      let busList = busObj.data.businesses;
      this.setState({
        businessList: busList
      }, () => {console.log('list of businesses in state is: ', this.state.businessList);})
    })
  }

  // requests the selected business's info from API
  // passed as props through BusinessList to BusinessListItem
  getBusinessInfo(busId) {
    BusinessInfo(busId, (busDetails) => {
      console.log('business details are: ', busDetails);
      this.setState({
        selectedBusiness: busDetails
      })
    })
  }

  // resets selectedBusiness to null
  // passed as props to BusinessDetail
  returnToList() {
    this.setState({
      selectedBusiness: null
    })
  }

  // renders either business list or details based on state
  renderBusinessListOrDetails() {
    if(this.state.selectedBusiness === null) {
      return (
        <BusinessList
          businessList={this.state.businessList}
          onBusinessSelect={selectedBusiness => this.getBusinessInfo(selectedBusiness.id)}
        />
      )
    } else {
      return (
        <BusinessDetail
          returnToList={() => this.returnToList()}
          business={this.state.selectedBusiness}
        />
      )
    }
  }

  render() {
    return (
      <div>
        <h2>OL Business Details</h2>
        {this.renderBusinessListOrDetails()}
      </div>
    );
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.entry')
);