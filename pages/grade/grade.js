'use strict';
var sliderWidth = 96;
var app = getApp()

Page({
  data:{
    year_data: '',
    grade_data: '',

    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    hidden: true,

    
  },

  onLoad: function () {

    var list1 = ''
    var grade_data = ''
    var that = this

    if (app.appData.userinfo == null) {
      wx.redirectTo({
        url: '../login/login',
      })

    }else{
      var sid = app.appData.userinfo.sid
      var pwd = app.appData.userinfo.pwd
    }

    console.log('全局', app.appData.req_data)
    var length = app.appData.req_data.length

    this.setData({
      grade_data: app.appData.req_data,
      activeIndex: length - 1
    })
    var year = this.data.grade_data[length - 1].SemesterYear
    this.setTerm(year)

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.grade_data.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.grade_data.length * that.data.activeIndex
        });
      }
    });
  },

  showData: function(req){
    
  },

  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  tabClick: function (e) {
    var year = e.currentTarget.dataset.set
    this.setTerm(year)
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  setTerm: function(year){
    var data = this.data.grade_data
    for(var i = 0, j = data.length; i < j; i ++){
      if (data[i].SemesterYear == year){
        this.setData({
          year_data: data[i]
        })
      }
    }
    // console.log(this.data.year_data)
  }



});