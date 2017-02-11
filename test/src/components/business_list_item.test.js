import React from 'react';
import { shallow, mount, render } from 'enzyme';

import BusinessListItem from '../../../src/components/business_list_item'

describe('BusinessListItem', function() {
  const business = {
    data: {
      address: "43496 Elenora Plaza Apt. 007",
      address2: "Suite 296",
      city: "Lindgrenfort",
      country: "US",
      created_at: "2014-09-27T10:36:09.000Z",
      id: 828,
      name: "Dibbert-O'Keefe",
      phone: "5166144151",
      state: "NM",
      uuid: "52ea24ef-6984-4b2e-a2bd-b58eace5495b",
      website: "http://hackett-dare.net/",
      zip: "11365"
    }
  }

  it('should be selectable by class "list-group-item"', function() {
    expect(shallow(<BusinessListItem
      onBusinessSelect={() => {}}
      key={business.data.uuid}
      business={business} />).is('.list-group-item')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<BusinessListItem
      onBusinessSelect={() => {}}
      key={business.data.uuid}
      business={business} />).find('.list-group-item').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<BusinessListItem
      onBusinessSelect={() => {}}
      key={business.data.uuid}
      business={business} />).text()).toEqual('');
  });
});