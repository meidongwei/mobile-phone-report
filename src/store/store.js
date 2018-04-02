import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showDate: '1',
    showDateTitle: 1,
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
  getters: {
  },
  mutations: {
    changeDateTitle (state, obj) {
      for (let i=0;i<state.dateList.length;i++) {
        if (state.dateList[i].id === Number(obj.num) + 1) {
          state.showDateTitle = state.dateList[i].id
        }
      }
    },
    changeDate (state, obj) {
      if (Number(obj.num) + 1 === 1) {
        // 日汇总
        state.showDate = '1'
      } else if (Number(obj.num) + 1 === 2) {
        // 周汇总
        state.showDate = '2'
      } else if (Number(obj.num) + 1 === 3) {
        // 月汇总
        state.showDate = '3'
      } else if (Number(obj.num) + 1 === 4) {
        // 年汇总
        state.showDate = '4'
      }
    }
  },
  actions: {
  }
})
