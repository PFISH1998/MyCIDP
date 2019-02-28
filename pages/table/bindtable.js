// pages/table/table.js
var app = getApp()
var table_data = ''
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekTitle: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    courseTop: ['', 210, 425, 635, 850, 1060],
    palette: ['#09bb07', '#576b95', '#2ecc71', '#3498db', '#ff9999', '#34495e', '#1abc9c', '#f1c40f', '#e67e22', '#e74c3c', '#d35400', '#f39c12', '#9999ff', '#8e44ad'],
    weeks: 0,
    table_set: null

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this

    console.log(options)
    // wx.removeStorageSync('table_set')
    wx.setNavigationBarTitle({
      title: '我的课表',
    })

    // if (options.page == 'login') {

    //   if (app.appData.req_data.data.length == 0) {
    //     wx.showToast({
    //       title: '查询出错，重新试试？',
    //       icon: 'none'
    //     })
    //   } else {
    //     this.setData({
    //       weeks: app.appData.weeks,
    //       table_set: app.appData.req_data.data
    //     })
        // wx.setStorage({
        //   key: 'table_set',
        //   data: app.appData.req_data.data,
        // })
      // }

    // } else {
      table_data = wx.getStorageSync('table_set')
      console.log('课表缓存：', table_data)

      if (table_data == null) {
        wx.showModal({
          title: '空空如也',
          content: '你还没有导入课表，是否现在登录教务处绑定？',
          success: function (e) {
            if (e.cancel) {
              // console.log(e)
            } else if (e.confirm) {
              wx.redirectTo({
                url: '../login/login?page=table',
              })
            }
          }
        })
      } else {
        // wx.showToast({
        //   title: wx.getStorageSync('term'),
        //   icon: 'none'
        // })
        that.setData({
          weeks: app.appData.weeks,
          table_set: table_data
        })
      }
    // }
    wx.showModal({
      title: '删除课表',
      content: '这会删除你目前在小程序上缓存的课表，你可以重新获取',
      showCancel: true,
      cancelColor: '#000000',
      cancelText: '取消',
      confirmText: '删除',
      confirmColor: '#3cc51f',
      success: function (e) {
        if(e.confirm){
          wx.removeStorageSync('table_set')
          that.setData({
            table_set: '1234567'
          })
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 1000
          })
        }
        if(e.cancel){
          return
        }
      }
     

    })


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('全局数据', app.appData)
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

  },

  getWeek: function () {
    var day = Date()
    console.log(day)
  }

})