// pages/user/public/myPublic.js
var util = require('../../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circle:null,
    lowhidden:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '我发布的',
    })
    var uid = app.appData.uid
    var e = {
      "method": "GET",
      "url": "circle/user",
      "data": {
        "user": uid,
        "uid": uid
      }
    }
    util.request(e).then((data)=>{
        console.log("e",data)
        this.setData({
          circle: data.data,
          lowhidden: true
        })
      })

  },

  bindDetialTap: function (e) {
    console.log('detail')
    // console.log(e)
    var id = e.currentTarget.dataset.id
    var circle_detail = this.data.circle
    console.log(this.data.circle[id])
    wx.navigateTo({
      url: '/pages/circle/detail/detail?circle_id=' + JSON.stringify(circle_detail[id])
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})