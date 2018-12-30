// pages/circle/detail/detail.js
var util = require('../../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circle: null,
    detail:null,
    uid:'',
    del:true

  },

  bindItemTap: function (e) {
    // console.log('tap', e.currentTarget.dataset.id)
    // var id = e.currentTarget.dataset.id
    var like_circle = this.data.circle
    var uid = app.appData.uid
    like_circle.is_like = !like_circle.is_like

    if (!like_circle.is_like) {
      like_circle.like_count -= 1
    } else {
      like_circle.like_count += 1
    }

    this.setData({
      circle: like_circle,
    })

    var e = {
      "method": "post",
      "url": "circle/like/" + like_circle.id + "/",
      "data": {
        "post": like_circle.id,
        "type": 1,
        "uid": uid,
        "status": like_circle.is_like
      }
    }
    util.request(e)
  },

  bindDetialTap: function (e) {
    console.log('detail')
    // console.log(e)
    wx.showToast({
      title: '评论功能暂未开放',
      icon:'none'
    })
    // var id = e.currentTarget.dataset.id
    // var circle_detail = this.data.circle
    // console.log(this.data.circle[id])
    // wx.navigateTo({
    //   url: '../detail/detail?circle_id=' + JSON.stringify(circle_detail[id])
    // })
  },
  del:function(){
    console.log(this.data.circle)
    var circle = this.data.circle
    var uid = app.appData.uid
    console.log("uid", uid)
    wx.showModal({
      title: '确定删除？',
      content: '',
      cancelText:'取消',
      success:function(){
        var e = {
          "method": "DELETE",
          "url": "circle/posts/" + circle.id + "/",
          "data": {
            "uid": uid,
          }
        }
        util.request(e).then((data)=>{
          wx.showToast({
            title: '删除成功',
          })
          wx.navigateBack({})
        })
        
      }
    })

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload",JSON.parse(options.circle_id))
    // JSON.stringify(options)
    var id = JSON.parse(options.circle_id)
    var uid = app.appData.uid
    console.log(uid)
    var userType = app.appData.userType
    console.log(userType)
    if(uid == id.uid || userType == 'admin'){
      this.setData({
        del:false
      })
    }
    this.setData({
      circle: id,
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