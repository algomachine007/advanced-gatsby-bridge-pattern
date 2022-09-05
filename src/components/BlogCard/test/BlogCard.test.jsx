import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';

import BlogCard from '../BlogCard';


describe('BlogCard', () => {
  const mockPage = {
    path: '/page',
  };

  it('renders correctly with appropriate props', () => {
    const card = shallow(
      <BlogCard
        mainImage="image.jpg"
        date="Aug 1, 2022"
        title="B2B payments a reality with Real-Time..."
        page={mockPage}
      />,
    );

    expect(toJson(card)).toMatchSnapshot();
  });
});
