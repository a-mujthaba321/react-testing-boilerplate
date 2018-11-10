import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../comment/CommentBox';
import CommentList from '../comment/CommentList';

// it('shows a comment box', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   console.log(div.innerHTML);
//   expect(div.innerHTML).toContain('Comment Box');
//   ReactDOM.unmountComponentAtNode(div);
// });

let wrapped = null;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a comment box', () => {
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment List', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
