// @flow
export type Action = {
  error?: any,
  meta?: any,
  payload: any,
  type: string,
};

export type GraphqlQueryAction = Action & {
  payload: {
    graphql: {
      query: any,
      variables?: any,
    },
  },
};

export type GraphqlMutationAction = Action & {
  payload: {
    graphql: {
      mutation: any,
      variables?: any,
    },
  },
};
