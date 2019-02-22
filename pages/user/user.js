// pages/user/userinfo.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageinfo:[
      {
        "page": "设置", "list": [
          { "name": "课表重置", "url": "../table/bindtable" }
          ]
      },
      // {
      //   "page": "cicle", "list": [
      //     { "name": "我发布的", "url": "public/myPublic" },
      //     // { "name": "circle设置", "url": "" },
      //     // { "name": "其他", "url": "" }
      //   ]
      // },
      {
        "page": "", "list": [
          { "name": "关于", "url": "/pages/notes/notes" },
          // { "name": "circle设置", "url": "" },
          // { "name": "其他", "url": "" }
        ]
      },
    ],
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.appData.userInfo
    })
    // var userInfo = wx.getStorageSync("userInfo")
    // console.log("u",userInfo)
    // console.log()
    // if(userInfo == ' '){
    //   wx.navigateTo({
    //     url: '../login/auth/auth',
    //   })
    // }

  
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