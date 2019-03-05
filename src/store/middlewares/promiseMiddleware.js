// @flow
const warn = error => {
  console.warn(error.message || error); // eslint-disable-line no-console
  throw error; // To let the caller handle the rejection
};

const promiseMiddleware = () => (next: Object => void) => (action: Object) => {
  if (typeof action.then === 'function') {
    Promise.resolve(action).then(next, warn);
  } else {
    next(action);
  }
};

export default promiseMiddleware;
