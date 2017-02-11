import React from 'react';
import BusinessListItem from './business_list_item';
import Pagination from 'react-js-pagination';

const BusinessList = (props) => {
  console.log('list from parent is: ', props.businessList);
  const businesses = props.businessList.map((business) => {
    return <BusinessListItem
      onBusinessSelect={props.onBusinessSelect}
      key={business.uuid}
      business={business} />
  })

  return (
    <div>
      <ul className="list-group">
        {businesses}
      </ul>
      <br />
      <Pagination
        prevPageText='prev'
        nextPageText='next'
        firstPageText='first'
        lastPageText='last'
        activePage={props.activePage}
        itemsCountPerPage={50}
        totalItemsCount={props.pages * 50}
        pageRangeDisplayed={9}
        onChange={props.updateCurrentPage} />
    </div>
  )
}

export default BusinessList;

