export const baseReducer = (customState: any) => {
  return function (state = customState, action: any): any {
    if (action.type in customState) {
      return { ...state, [action.type]: action.value };
    }
    return state
  }
};