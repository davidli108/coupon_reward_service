// @flow
export const namespace = 'APP';
export const BOOTSTRAP = `${namespace}/BOOTSTRAP`;
export const AUTHENTICATED = `${namespace}/AUTHENTICATED`;
export const GET_STORES_LIST = `${namespace}/GET_STORES_LIST`;
export const SET_STORES_LIST = `${namespace}/SET_STORES_LIST`;
export const SET_EXTENSION_INSTALLED = `${namespace}/SET_EXTENSION_INSTALLED`;

export const appBootstrap = () => ({
  type: BOOTSTRAP,
});

export const appAuthenticated = () => ({
  type: AUTHENTICATED,
});

export const getStoresList = () => ({
  type: GET_STORES_LIST,
  payload: {
    request: {
      url: `/jsonstores?keywords=`,
    },
  },
});

export const setStoresList = (data: any) => ({
  type: SET_STORES_LIST,
  data: data,
});

export const setExtensionInstalled = (status: boolean) => ({
  type: SET_EXTENSION_INSTALLED,
  status: status,
});
