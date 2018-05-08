import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';

describe('App', () => {
  let app;
  beforeEach(() => {
    app = shallow(<App />);
  });

  test('it renders properly', () => {
    expect(app).toMatchSnapshot();
  });

  test('it contains a connected wallet component', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });
});
