import React from 'react';
import { shallow } from 'enzyme';
import Wallet from './wallet';

describe('Wallet', () => {
    let wallet;
    const props = {balance: 20,}
    beforeEach(() => {
      wallet = shallow(<Wallet  {...props} />);
    });


    test('it renders properly', () => {
      expect(wallet).toMatchSnapshot();
    });

    test('it displays the balance from props', () => {
      expect(wallet.find('.balance').text()).toEqual("Wallet balance: 20");
    });
});
