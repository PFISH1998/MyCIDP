var util = require('../../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        id: 'sreach',
        name: '查询',
        open: true,
        pages: [{ url: '../../table/table', name: '课表' }, { url: '../../login/login?page=grade', name: '成绩' }, { url: '../../calendar/calendar', name: '校历' }]}
    ],

    // 触摸开始时间
    touchStartTime: 0,
    // 触摸结束时间
    touchEndTime: 0,
    // 最后一次单击事件点击发生时间
    lastTapTime: 0, 

    daily:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //加载首页图
  onLoad: function (options) {

    var e = {
      'url':'home',
      'method':'get'
    }
    util.request(e).then((data)=>{
      // console.log("index",data)
      this.setData({
        daily:data.data.data
      })
    }).catch((fail)=>{
      this.setData({
        daily:{
          'pic_url': '/pages/icon/index.jpg',
          'content': '网络有点问题...'
        }
      })
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
    return {
      title: '用 MyCIDP 查询课表、成绩，你甚至可以交流学习！',
    }
  },

// 
  longTap: function(e){
    var that = this
    console.log(that.data)
    wx.showModal({
      title: '下载图片',
      content: '是否下载首页图？',
      success:function(){
        wx.downloadFile({
          url: that.data.daily.pic_url,
          success: function(res){
            wx.saveImageToPhotosAlbum({
              filePath: res.tempFilePath,
              success(result) {
                console.log(result)
              }
            })
        wx.showToast({
          title: '下载成功！',
        })
          }  
        })  
      }
    })

  },

  /// 按钮触摸开始触发的事件
  touchStart: function (e) {
    this.touchStartTime = e.timeStamp
  },

  /// 按钮触摸结束触发的事件
  touchEnd: function (e) {
    this.touchEndTime = e.timeStamp
  },


})