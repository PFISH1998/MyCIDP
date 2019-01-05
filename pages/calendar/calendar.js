Page({

  /**
   * 页面的初始数据
   */
  data: {
    notes: [
      {month: 2, content: ['2月23日、24日返校报到，2月25日开始上课。']},
      {month: 3, content:[]},

      { month: 4, content: ['4月5日-7日放假，共三天。']},

      { month: 5, content: ['1、5月1日放假，共一天。', '2、运动会：5月9日、10日。']},
      { month: 6, content: ['1、6月7日-9日放假，共三天。','2、6月28日本学期结束'] },
      { month: 7, content: ['7月1日-8月20日夏季学期。'] }
      
      
      
      ],

    holidays: [ 

      //九月
      { date: '2018-9-3', name: '开学' }, { date: '2018-9-8', name: 8 }, { date: '2018-9-8', name: 9 }, { date: '2018-9-9', name: 9 }, { date: '2018-9-15', name: '15' }, { date: '2018-9-16', name: '16' }, { date: '2018-9-22', name: '22' }, { date: '2018-9-23', name: '23' }, { date: '2018-9-24', name: '中秋' },
    

    // 十月
      { date: '2018-10-1', name: '国庆' }, { date: '2018-10-2', name: '2' }, { date: '2018-10-3', name: '3' }, { date: '2018-10-4', name: '4' }, { date: '2018-10-5', name: '5' }, { date: '2018-10-6', name: '6' }, { date: '2018-10-7', name: '7' }, { date: '2018-10-13', name: '13' }, { date: '2018-10-14', name: '14' }, { date: '2018-10-20', name: '20' }, { date: '2018-10-21', name: '21' }, { date: '2018-10-27', name: '27' }, { date: '2018-10-28', name: '28' },
      
      
      //十一月
      { date: '2018-11-3', name: '3' }, { date: '2018-11-4', name: '4' }, { date: '2018-11-10', name: '10' }, { date: '2018-11-11', name: '11' }, { date: '2018-11-17', name: '17' }, { date: '2018-11-18', name: '18' }, { date: '2018-11-24', name: '24' }, { date: '2018-11-25', name: '25' },
      
      
      //十二月
      { date: '2018-12-1', name: '1' }, { date: '2018-12-2', name: '2' }, { date: '2018-12-8', name: '8' }, { date: '2018-12-9', name: '9' }, { date: '2018-12-15', name: '15' }, { date: '2018-12-16', name: '16' }, { date: '2018-12-22', name: '22' }, { date: '2018-12-23', name: '23' }, { date: '2018-12-30', name: '30' }, { date: '2018-12-31', name: '31' }, 
      
      //一月
      { date: '2019-1-1', name: '元旦' }, { date: '2019-1-5', name: '寒假' }, { date: '2019-1-6', name: '6' }, { date: '2019-1-12', name: '12' }, { date: '2019-1-13', name: '13' }, { date: '2019-1-19', name: '19' }, { date: '2019-1-20', name: '20' }, { date: '2019-1-26', name: '26' }, { date: '2019-1-26', name: '27' },
      
      //二月
      { date: '2019-2-25', name: '开学' },

      //三月
      { date: '2019-3-2', name: '2' }, { date: '2019-3-3', name: '3' }, { date: '2019-3-9', name: '9' }, { date: '2019-3-10', name: '10' }, { date: '2019-3-16', name: '16' }, { date: '2019-3-17', name: '17' }, { date: '2019-3-23', name: '23' }, { date: '2019-3-24', name: '24' }, { date: '2019-3-30', name: '30' }, { date: '2019-3-31', name: '31' },
      
      //四月
      { date: '2019-4-5', name: '清明' }, { date: '2019-4-6', name: '6' }, { date: '2019-4-7', name: '7' }, { date: '2019-4-13', name: '13' }, { date: '2019-4-14', name: '14' }, { date: '2019-4-20', name: '20' }, { date: '2019-4-21', name: '21' }, { date: '2019-4-27', name: '27' }, { date: '2019-4-28', name: '28' },

      //五月
      { date: '2019-5-1', name: '劳动' }, { date: '2019-5-4', name: '4' }, { date: '2019-5-5', name: '5' }, { date: '2019-5-11', name: '11' }, { date: '2019-5-12', name: '12' }, { date: '2019-5-18', name: '18' }, { date: '2019-5-19', name: '19' }, { date: '2019-5-25', name: '25' }, { date: '2019-5-26', name: '26' },

      //六月

      { date: '2019-6-1', name: '1' }, { date: '2019-6-2', name: '2' }, { date: '2019-6-7', name: '端午' }, { date: '2019-6-8', name: '8' }, { date: '2019-6-9', name: '9' }, { date: '2019-6-15', name: '15' }, { date: '2019-6-16', name: '16' }, { date: '2019-6-22', name: '22' }, { date: '2019-6-23', name: '23' }, { date: '2019-6-28', name: '放假' },

      { date: '2019-7-1', name: '夏季'},
      ],

    arr: [],
    date: null,
    sysW: null,
    lastDay: null,
    firstDay: null,
    weekArr: ['日', '一', '二', '三', '四', '五', '六'],
    getDate:null,
    year: null,
    month:null,
  },

  //获取日历相关参数
  dataTime: function (e) {
    console.log(this.data)

    if (e != null){
      this.data.arr = []
      var year = e.year;
      var month = e.month - 1;
      var months = e.month;
    }else{
      var date = new Date()
      console.log('date',date)
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
      sysW: res.windowHeight / 12,//更具屏幕宽度变化自动设置宽度
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
        return {display:true, d:this.data.holidays[day].name}
      }
    }
    return { display: false, d: i}

  },

  onLoad: function (options) {

    this.dataTime();

  },


  chooseNextMonth: function(e){
    var month = e.currentTarget.dataset.month
    var year = e.currentTarget.dataset.year
    if(month == 12){
      month = 1
      year = year + 1
    }else{
      month += 1
    }

    this.dataTime({'month':month, 'year': year})
 
  },

  choosePrevMonth: function(e){
    var month = e.currentTarget.dataset.month
    var year = e.currentTarget.dataset.year
    if (month == 1) {
      month = 12
      year = year - 1
    } else {
      month -= 1
    }

    this.dataTime({ 'month': month, 'year': year })
  },

  onShareAppMessage: function () {
    var that = this
    return {
      title: 'MyCIDP 查看'+ that.data.month +'月校历',
      path: "pages/calendar/calendar"
    }
  },

 


})