import React from 'react';
import CommentBox from '../comment/CommentBox';
import { mount } from 'enzyme';

it('has a text area', () => {
  const wrapped = mount(<CommentBox />);
});
