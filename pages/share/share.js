// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notes:[
      '你可以回到主页，或点击右上方按钮分享到你的微信聊天中;',
      '也可以分享下方小程序二维码，让他人扫描使用;',
      '有任何疑问可联系邮箱：perry1998@outlook.com;',
      '或联系微信：PENGPENGYU1998'    ],
    QR:'/pages/icon/QR.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  onLoad: function (options) {

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
      title: '试试 MyCIDP 小程序！更方便的查看课表，成绩，学校新闻和通知',
      path: 'pages/index/index'
    }
  }
})