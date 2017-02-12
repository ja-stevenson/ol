import React from 'react';
import BusinessListItem from './business_list_item';
import Pagination from 'react-js-pagination';

const BusinessList = (props) => {

  const businesses = props.businessList.map((business) => {
    return <BusinessListItem
      onBusinessSelect={props.onBusinessSelect}
      key={business.uuid}
      business={business} />
  })

  return (
    <div className="bus-list">
      <ul className="list-group">
        {businesses}
      </ul>
      <br />
      <Pagination
        prevPageText='prev'
        nextPageText='next'
        firstPageText='first'
        lastPageText='last'
        activePage={Number(props.activePage)}
        itemsCountPerPage={50}
        totalItemsCount={props.pages * 50}
        pageRangeDisplayed={9}
        onChange={props.updateCurrentPage} />
      <a className="ol-img" href="http://www.ownlocal.com/"><img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTJAtzGDIuAddcpYED5NIhIcKu10erWD74zYdoGHE-lWGDOvvf-" /></a>
    </div>
  )
}

export default BusinessList;

