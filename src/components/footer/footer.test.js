import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

describe('footer tests', () => {
  let comp;
  beforeEach(() => {
    comp = shallow(<Footer />);
  });

  it('render', () => {
    expect(comp.find("footer").length).toBe(1);
  });

  it('validate year of copyright' , () => {
    const year = comp.find("[data-test='year']");
    const currentYear = new Date().getFullYear();
    expect(year.contains(currentYear)).toEqual(true);
  });
});
