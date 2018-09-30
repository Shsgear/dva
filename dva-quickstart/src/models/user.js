import * as userService from "../services/user";
import qs from 'querystring';

export default {
  namespace: 'user',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
    remove(state, { payload: { id } }) {
      console.log(id);
      return [...state.list].filter((item) => item.id !== id);
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, headers } = yield call(userService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
    *remove({ payload: id }, {put, call, select}) {
      const { data } = yield call(userService.remove, { id });
      if (!data) return;
      yield put({
        type: 'remove',
        payload: id
      })
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen((location) => {
        if (location.pathname === '/user') {
          dispatch({ type: 'fetch', payload: qs.parse(location.search.replace(/^[?]*(.*)$/, '$1')) });
        }
      })
    },
  }
}
