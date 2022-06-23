export function modalReducer(state, action) {
  switch (action.type) {
    case 'OPEN':
      return { open: true, ...action.payload };
    case 'CLOSE':
      return {
        ...state,
        open: false,
      };
    default:
      throw new Error('This type is not registered in modalReducer.');
  }
}
