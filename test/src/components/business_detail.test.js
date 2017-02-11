import React from 'react';
import { shallow, mount, render } from 'enzyme';

import BusinessDetail from '../../../src/components/business_detail'

describe('A suite', function() {
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
  it('should render without throwing an error', function() {
    expect(shallow(<BusinessDetail returnToList={() => {}}
      business={business} />).contains(<div className="bus-name">Dibbert-O'Keefe</div>)).toBe(true);
  });

  it('should be selectable by class "bus-detail"', function() {
    expect(shallow(<BusinessDetail returnToList={() => {}}
      business={business} />).is('.bus-detail')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<BusinessDetail returnToList={() => {}}
      business={business} />).find('.bus-detail').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<BusinessDetail returnToList={() => {}}
      business={business} />).text()).toEqual(
`Return To ListDibbert-O'Keefe43496 Elenora Plaza Apt. 007 Suite 296
Lindgrenfort, NM 11365

Country: US

Phone #: 5166144151
http://hackett-dare.net/
Created At: 2014-09-27T10:36:09.000Z
Id: 828
Uuid: 52ea24ef-6984-4b2e-a2bd-b58eace5495b`);
  });
});