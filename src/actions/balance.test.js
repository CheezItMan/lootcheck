
import * as constants from './constants';
import * as actions from './balance';

describe('Balance', () => {

  test('it exists', () => {
    const balance = 0;
    const expectedAction = {
      type: constants.SET_BALANCE,
      balance
    };
    expect(actions.setBalance(balance)).toEqual(expectedAction);
  });
});
