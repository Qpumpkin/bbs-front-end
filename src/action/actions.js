import AppDispatcher from './actionDispatch';
import * as ActionType from './actionType';

export const increment = counterCaption => {
  AppDispatcher.dispatch({
    type: ActionType.INCREMENT,
    counterCaption,
  })
}

export const decrement = counterCaption => {
  AppDispatcher.dispatch({
    type: ActionType.DECREMENT,
    counterCaption,
  })
}
