import Vuex from 'vuex'

const store = () =>
  new Vuex.Store({
    state: {
      isMobileNav: false,
      windowWidth: 0,
    },
    mutations: {
      globalData(state, value) {
        state.globalData = value
      },
      toggleMobileNav(state) {
        state.isMobileNav = !state.isMobileNav
      },
      closeMobileNav(state) {
        state.isMobileNav = false
      },
      changeWindow(state, value) {
        state.windowWidth = value
      },
    },
    actions: {},
    getters: {
      windowWidth: state => state.windowWidth,
    },
  })

export default store
