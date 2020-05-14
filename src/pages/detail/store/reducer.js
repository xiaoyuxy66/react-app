import { fromJS } from 'immutable';
import * as constans from './contansts';
const defaultStatus = fromJS({
  detailContent: {},
});
export default (state = defaultStatus, action) => {
  switch (action.type) {
    case constans.CHANGE_DETAIL:
      return state.merge({
        "detailContent": action.detailContent
      });
    default:
      return state;
  }
}