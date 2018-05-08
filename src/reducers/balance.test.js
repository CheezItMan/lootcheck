import balanceReducer from './balance';
import * as constants from '../actions/constants';



describe('balance reducer', () => {

  test('it sets a balance', () => {
    const balance = 10;

    expect(balanceReducer(undefined, {
        type: constants.SET_BALANCE,
        balance
    })).toEqual(balance);
  });

  test('it creates an action to deposit into the balance', () => {
    const deposit = 10;

    const expectedAction = { type: constants.Deposit, deposit };

    expect(actions.deposit(deposit)).toEqual(expectedAction);
  });
});
