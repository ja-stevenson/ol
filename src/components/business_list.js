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
        activePage={1}
        itemsCountPerPage={50}
        totalItemsCount={5000}
        pageRangeDisplayed={9}
        onChange={console.log('hi')} />
    </div>
  )
}

export default BusinessList;

