import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    changeDate: '日汇总',
    dateList: [
      {
        id: 1,
        name: '日汇总'
      },
      {
        id: 2,
        name: '周汇总'
      },
      {
        id: 3,
        name: '月汇总'
      },
      {
        id: 4,
        name: '年汇总'
      }
    ]
  },
  mutations: {
    changeDate (state, obj) {
      for (let i=0;i<state.dateList.length;i++) {
        if (state.dateList[i].id === Number(obj.num) + 1) {
          state.changeDate = state.dateList[i].name
        }
      }
    }
  },
  actions: {
  }
})
