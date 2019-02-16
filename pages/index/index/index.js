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
      var index_data = wx.getStorageSync("index_data")
      console.log("index", index_data)
    if (index_data == '' || util.is_diff_day(new Date().getTime(), index_data.set_date)){
      console.log("123")
    }
    else{
      this.setData({
        daily: index_data.img_data.data
      })
    }

      // this.setData({
      //   daily:{
      //     'pic_url': '/pages/icon/index.jpg',
      //     'content': '网络有点问题...'
      //   }
      // })

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
    wx.showActionSheet({
      itemList: ["分享MyCIDP","下载壁纸"],
      success(res){
        console.log(res)
        var index = res.tapIndex
        if(index == 0){
          console.log("share")
          wx.showModal({
            title: '分享 MyCIDP',
            content: '你可以点击右上角左边的按钮将小程序转发分享，感谢你的支持！',
          })
        }
        if(index == 1){
          that.downLoadPic()
        }
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

  downLoadPic: function(){
    var that = this
    var pic_url = that.data.daily.pic_url
    var e = pic_url
    util.saveIndexImg(e)
  }


})