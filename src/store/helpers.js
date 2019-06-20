// @flow
import * as R from 'ramda';

export const getGraphqlPayload = (
  action: Object,
  defaultPayload: any = null,
): any => {
  const queryKey = R.pathOr(
    '',
    ['meta', 'previousAction', 'payload', 'key'],
    action,
  );
  return R.pathOr(defaultPayload, ['payload', 'data', queryKey], action);
};

export const buildFakeGraphqlPayloadAction: (string, any) => Object = (
  type,
  payload,
) => ({
  type,
  meta: {
    previousAction: {
      payload: { key: 'action' },
    },
  },
  payload: {
    data: { action: payload },
  },
});
