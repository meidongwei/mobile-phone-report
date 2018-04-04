import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weekNum: '',
    showDate: '',
    selectedTitle: 1,
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
    // 格式化星期几
    changeWeek (state, day) {
      if (day === 1) {
        state.weekNum = '一'
      } else if (day === 2) {
        state.weekNum = '二'
      } else if (day === 3) {
        state.weekNum = '三'
      } else if (day === 4) {
        state.weekNum = '四'
      } else if (day === 5) {
        state.weekNum = '五'
      } else if (day === 6) {
        state.weekNum = '六'
      } else if (day === 7) {
        state.weekNum = '日'
      }
    },

    // 切换：日汇总/周汇总/月汇总/年汇总
    changeDateTitle (state, obj) {
      for (let i=0;i<state.dateList.length;i++) {
        if (state.dateList[i].id === Number(obj.num) + 1) {
          state.selectedTitle = state.dateList[i].id
        }
      }
    },

    // 切换日期显示
    changeDate (state, obj) {
      if (Number(obj.num) + 1 === 1) {
        state.selectedTitle = 1
        this.commit('showDate111')
      } else if (Number(obj.num) + 1 === 2) {
        state.selectedTitle = 2
        this.commit('showWeek111')
      } else if (Number(obj.num) + 1 === 3) {
        state.selectedTitle = 3
        this.commit('showMonth111')
      } else if (Number(obj.num) + 1 === 4) {
        state.selectedTitle = 4
        this.commit('showYear111')
      }
    },
    showDate111 (state) {
      let date = new Date()
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? ('0' + d) : d
      let day = date.getDay()
      this.commit('changeWeek', day)
      let _day = state.weekNum
      state.showDate =  y + '-' + m + '-' + d + ' 星期' + _day
    },
    showWeek111 (state) {
      let date = new Date()
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      let d = date.getDate()
      let dd = date.getDay()
      let start, end, m1, m2, y1, y2

      if (d - dd < 0) {
        if (m === 1) {
          y1 = y - 1
          y2 = y
          m1 = 12
          m2 = 1
          start = 31 - Math.abs(d - dd + 1)
          end = d - dd + 7
        } else {
          y1 = y
          y2 = y
          m1 = m - 1
          m2 = m
          let num = new Date(y, m1, 0).getDate()
          start = num - Math.abs(d - dd + 1)
          end = d - dd + 7
        }
      } else {
        y1 = y
        start = d - dd + 1
        if (d - dd + 7 > 31) {
          if (m === 12) {
            y2 = y + 1
            m1 = 12
            m2 = 1
            end = d - dd + 7 - 31
          } else {
            y2 = y
            m1 = m
            m2 = m + 1
            let num = new Date(y, m, 0).getDate()
            end = d - dd + 7 - num
          }
        } else {
          y2 = y
          m1 = m
          m2 = m
          end = d - dd + 7
        }
      }

      start = start < 10 ? '0' + start : start
      end = end < 10 ? '0' + end : end
      m1 = m1 < 10 ? '0' + m1 : m1
      m2 = m2 < 10 ? '0' + m2 : m2

      let showWeek = y1+ '-' + m1 + '-' + start + '/' + y2 + '-' + m2 + '-' + end
      state.showDate = showWeek
    },
    showMonth111 (state) {
      let date = new Date()
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      state.showDate = y + '-' + m
    },
    showYear111 (state) {
      let date = new Date()
      let y = date.getFullYear()
      state.showDate = y
    }
  },
  actions: {
  }
})
