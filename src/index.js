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
  getBusinessInfo(busId) {
    BusinessInfo(busId, (busDetails) => {
      console.log('business details are: ', busDetails);
      this.setState({
        selectedBusiness: busDetails
      })
    })
  }

  render() {
    return (
      <div>
        <h2>OL Business Details</h2>
        <BusinessDetail
          business={this.state.selectedBusiness}
        />
        <BusinessList
          businessList={this.state.businessList}
          onBusinessSelect={selectedBusiness => this.getBusinessInfo(selectedBusiness.id)}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />
  , document.querySelector('.entry')
);