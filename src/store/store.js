import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    linshi: '',
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
      } else if (day === 0) {
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
      this.commit('getWeekDay')
      state.showDate = state.linshi
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
    },
    getWeekDay (state) {
      // 1970-01-01到今天的毫秒数
      const dateOfToday = Date.now()
      // 1、2、3、4、5、6、0 转换成 0、1、2、3、4、5、6
      const dayOfToday = (new Date().getDay() + 7 - 1) % 7
      let daysOfThisWeek = Array.from(new Array(7))
        .map((val, index) => {
          const date = new Date(dateOfToday + (index - dayOfToday) * 1000 * 60 * 60 * 24)
          return date.getFullYear() + '-' +
            String(date.getMonth() + 1).padStart(2, '0') + '-' +
            String(date.getDate()).padStart(2, '0')
        })
      state.linshi = daysOfThisWeek[0] + '/' + daysOfThisWeek[6]
    }
  },
  actions: {
  }
})
