import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe('Header test', () => {
  let comp;
  beforeEach(() => {
    comp = shallow(<Header />);
  });

  it('render ok', () => {
    expect(
      comp.find('img').length + comp.find('a').length
    ).toBe(2);
  });
});
