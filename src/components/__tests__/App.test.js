import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../comment/CommentBox';

// it('shows a comment box', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   console.log(div.innerHTML);
//   expect(div.innerHTML).toContain('Comment Box');
//   ReactDOM.unmountComponentAtNode(div);
// });

it('shows a comment box', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
