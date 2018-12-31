var app = getApp()
var util = require('../../../utils/util.js')
var code = null
Page({
  data: {
    pagefrom: "pages/index/index",
    userInfo: {},
  },


  onLoad: function (e) {
    code = e.code
  },


  getUserInfo: function (e) {
    var that = this
    var userInfo = e.detail.userInfo
    // JSON.stringify(userInfo)
    console.log("e", userInfo)
    console.log("storage",wx.getStorageSync("userInfo"))
    var openid = app.appData.uid
    console.log(openid)
    app.appData.userInfo = userInfo
    var req = {
      "url":"circle/user/",
      "method":"POST",
      "data": {
        "uid": openid,
        "nick_name": userInfo.nickName,
        "we_name": userInfo.nickName,
        "head_pic": userInfo.avatarUrl,
        "gender": userInfo.gender
      }
    }
    util.request(req)
    wx.setStorageSync("userInfo", userInfo)
    wx.navigateBack({})
  }
})
