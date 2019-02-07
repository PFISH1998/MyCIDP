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
    table_set: '',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    console.log(options)
    // wx.removeStorageSync('table_set')
    wx.setNavigationBarTitle({
      title: '我的课表',
    })
    if (options.page == 'share'){
      // var data = JSON.parse(options.data)
      var data = options.data
      
      console.log(data)
      this.setData({
        weeks: app.appData.weeks,
        table_set: data
      })
      return
    }
    if (options.page == 'login'){

      if (app.appData.req_data.length == 0){
        wx.showToast({
          title: '查询出错，重新试试？',
          icon: 'none'
        })
      } else {
      this.setData({
        weeks: app.appData.weeks,
        table_set: app.appData.req_data
      })
      wx.setStorage({
        key: 'table_set',
        data: app.appData.req_data,
        })
      }  
    }else{
      table_data = wx.getStorageSync('table_set')
      // console.log('课表缓存：',table_data)

      if (table_data == '') {
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
        this.setData({
          weeks: app.appData.weeks,
          table_set: table_data
        })
      }
    }
    
    
  
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
    var that = this
    
    var data = JSON.stringify(that.data.table_set)
    console.log(data)
    return {
      title: 'MyCIDP 本学期我的课表',
      path: "pages/table/table?page=share?data=" + data
    }
  },


  showDetail: function(e){
    var data = e.currentTarget.dataset
    if (data.type == null ){
      data.details = ''
      data.names = ''
    }
    if(data.name == data.names){
      data.names = ''
    }
    wx.showModal({
      showCancel: false,
      title: data.name+data.names ,
      content: data.detail + '\r' + data.details,
    })
  },

  getWeek: function(){
      var day = Date()
      // console.log(day)
  }

})