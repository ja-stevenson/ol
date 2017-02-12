import React from 'react';
import { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

import BusinessList from '../../../src/components/business_list'

describe('BusinessList', function() {
  it('should render without throwing an error', function() {
    expect(shallow(<BusinessList
          activePage={1}
          updateCurrentPage={() => {}}
          pages={1000}
          businessList={[]}
          onBusinessSelect={() => {}}
        />).contains(<br />)).toBe(true);
  });

  it('should be selectable by class "bus-list"', function() {
    expect(shallow(<BusinessList
          activePage={1}
          updateCurrentPage={() => {}}
          pages={1000}
          businessList={[]}
          onBusinessSelect={() => {}}
        />).is('.bus-list')).toBe(true);
  });

  it('should mount in a full DOM', function() {
    expect(mount(<BusinessList
          activePage={1}
          updateCurrentPage={() => {}}
          pages={1000}
          businessList={[]}
          onBusinessSelect={() => {}}
        />).find('.bus-list').length).toBe(1);
  });

  it('should render to static HTML', function() {
    expect(render(<BusinessList
          activePage={1}
          updateCurrentPage={() => {}}
          pages={1000}
          businessList={[]}
          onBusinessSelect={() => {}}
        />).text()).toEqual('firstprev123456789nextlast');
  });

  it('renders details', () => {
    const component = renderer.create(<BusinessList
          activePage={1}
          updateCurrentPage={() => {}}
          pages={1000}
          businessList={[]}
          onBusinessSelect={() => {}}
        />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});