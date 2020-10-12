import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header test', () => {
  it('render ok', () => {
    const comp = shallow(<Header />);
    
    expect(
      comp.find('img').length + comp.find('a').length
    ).toBe(2);
  });
});
