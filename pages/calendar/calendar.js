var data  = require('data.js')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    notes: [],
    holidays: [],
    arr: [],
    date: null,
    sysW: null,
    lastDay: null,
    firstDay: null,
    weekArr: ['日', '一', '二', '三', '四', '五', '六'],
    getDate: null,
    year: null,
    month: null,
  },

  //获取日历相关参数
  dataTime: function (e) {
    console.log(this.data)

    if (e != null) {
      this.data.arr = []
      var year = e.year;
      var month = e.month - 1;
      var months = e.month;
    } else {
      var date = new Date()
      console.log('date', date)
      var year = date.getFullYear();
      var month = date.getMonth();
      var months = date.getMonth() + 1;
      this.data.getDate = date.getDay();
    }



    //获取现今年份
    this.data.year = year;

    //获取现今月份
    this.data.month = months;

    //获取今日日期


    //最后一天是几号
    var d = new Date(year, months, 0);
    this.data.lastDay = d.getDate();

    //第一天星期几
    let firstDay = new Date(year, month, 1);
    this.data.firstDay = firstDay.getDay();

    //根据得到今月的最后一天日期遍历 得到所有日期
    for (var i = 1; i < this.data.lastDay + 1; i++) {
      // console.log(this.data.year, this.data.month,i)
      this.data.arr.push(this.isHoliday(i))
    }

    var res = wx.getSystemInfoSync();
    this.setData({
      sysW: res.windowHeight / 12, //更具屏幕宽度变化自动设置宽度
      marLet: this.data.firstDay,
      arr: this.data.arr,
      year: this.data.year,
      getDate: this.data.getDate,
      month: this.data.month

    });
  },

  isHoliday: function (i) {
    // console.log(i)
    for (var day in this.data.holidays) {
      // console.log(this.data.holidays[day])

      if (this.data.holidays[day].date == this.data.year + '-' + this.data.month + '-' + i) {
        return {
          display: true,
          d: this.data.holidays[day].name
        }
      }
    }
    return {
      display: false,
      d: i
    }

  },

  onLoad: function (options) {
    this.setData({
      notes: data.notes,
      holidays: data.holidays
    })
    this.dataTime();

  },


  chooseNextMonth: function (e) {
    var month = e.currentTarget.dataset.month
    var year = e.currentTarget.dataset.year
    if (month == 12) {
      month = 1
      year = year + 1
    } else {
      month += 1
    }

    this.dataTime({
      'month': month,
      'year': year
    })

  },

  choosePrevMonth: function (e) {
    var month = e.currentTarget.dataset.month
    var year = e.currentTarget.dataset.year
    if (month == 1) {
      month = 12
      year = year - 1
    } else {
      month -= 1
    }

    this.dataTime({
      'month': month,
      'year': year
    })
  },

  onShareAppMessage: function () {
    var that = this
    return {
      title: 'MyCIDP 查看' + that.data.month + '月校历',
      path: "pages/calendar/calendar"
    }
  },




})