Page({

  /**
   * 页面的初始数据
   */
  data: {
    notes: [
      {month: 8, content: ['1、7月9日 - 9月2日夏季学期，学生8月30日、31日两天返校注册，9月3日开始课堂教学。','2、教职工8月28日开始上班。',  '3、8月30日2018级新生报到。']},

      { month: 9, content: ['1、8月31日 - 9月2日新生入学教育；9月3日 - 15日军训；9月17日开始新生课堂教学。',
         '2、9月24日中秋节放假；9月29、30日正常上班，9月29日补星期一的课，9月30日补星期二的课。']},

      { month: 10, content: ['1、10月1日-7日国庆节放假。']},
      { month: 11, content: [] },
      { month: 12, content: ['1、2019年元旦根据国务院规定放假。'] },
      { month: 1, content: ['1、2019年元旦根据国务院规定放假。','2、本学期共安排20个教学周，新生2019年1月19日放寒假，其他年级学生2019年1月5日放寒假。教职员工2019年1月22日开始安排轮休。']},
      { month: 2, content: ['1、2019年2月23、24日两天学生返校，25日开始课堂教学；教职员工2月21日开始上班。'] }
      
      
      
      
      
      
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
      {date:'2019-2-25', name:'开学'}],

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