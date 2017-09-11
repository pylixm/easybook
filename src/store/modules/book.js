import * as types from '../types';
import {fetchManyBook, fetchBookById, fetchSearchBook} from '@/api/index';

const state = {
    bookList: {
        total: 0,
        books: {}
    },
    curBook: {},
    tagValue: '',
    activeTab: 'list',
    topTitle: ''
};

const mutations = {
    [types.FETCH_BOOKS](state, list) {
        state.bookList.total = list.total;
        state.bookList.books = list.books;
    },
    [types.FETCH_BOOKS_BY_ID](state, movie) {
        state.curBook = movie;
    },
    [types.SET_TAGVALUE](state, name) {
        state.tagValue = name;
    },
    [types.CLEAR_TAGVALUE](state) {
        state.tagValue = '';
    },
    [types.SET_ACTIVETAB](state, activetab) {
        state.activeTab = activetab;
    },
    [types.CLEAR_TOPTITLE](state) {
        state.topTitle = '';
    },
    [types.SET_TOPTITLE](state, toptitle) {
        state.topTitle = toptitle;
    }
};

const actions = {
    [types.FETCH_BOOKS]({commit}, payload) {
        fetchManyBook(payload.q)
            .then(data => commit(types.FETCH_BOOKS,data));
    },
    [types.FETCH_BOOKS_BY_ID]({commit}, id) {
        fetchBookById(id)
            .then(data => commit(types.FETCH_BOOKS_BY_ID, data));
    },
    [types.SET_TAGVALUE]({commit}, payload) {
        commit(types.SET_TAGVALUE, payload);
    },
    [types.CLEAR_TAGVALUE]({commit}) {
        commit(types.CLEAR_TAGVALUE);
    }
}

export default {
    state,
    mutations,
    actions
}