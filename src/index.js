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
      selectedBusiness: null,
      pages: null,
      nextPage: null,
      currentPage: 1
    };

    this.getBusinessList(this.state.currentPage);
  }

  // requests the list of businesses from API and sets values for Pagination in BusinessList
  getBusinessList(pageNum) {
    BusinessSearch(pageNum, (busObj) => {
      let busList = busObj.data.businesses;
      let lastPage = busObj.data.pages.last;
      let numPages = lastPage ? Number(lastPage.substring(lastPage.indexOf('page=') + 5)) : 1000;
      this.setState({
        businessList: busList,
        pages: numPages
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

  // updates the current Page
  // passed as props to BusinessList for Pagination
  updateCurrentPage(pageNum) {
    this.setState({
      currentPage: pageNum
    }, () => {
      this.getBusinessList(this.state.currentPage);
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
          activePage={this.state.currentPage}
          updateCurrentPage={currentPage => this.updateCurrentPage(currentPage)}
          pages={this.state.pages}
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