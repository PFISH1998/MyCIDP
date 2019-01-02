var util = require('/utils/util.js')
var app = getApp()
var code = null
App({

  appData: {
    userinfo: null,
    userInfo: {},
    uid:null,
    req_data: null,
    weeks: null,
    cicle_detail:null,
    userType: null,
  },
  onLaunch: function onLaunch() {
    var that = this
    // wx.getUpdateManager 在 1.9.90 才可用，请注意兼容
    const updateManager = wx.getUpdateManager()

    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      console.log(res.hasUpdate)
    })
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否马上重启小程序？',
        success: function (res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })


    // 登录
    console.log("wx.login")
    var uid = wx.getStorageSync("openid")
    // console.log('uid', uid)
    if(uid == ''){
      this.login()
    }else{
      this.appData.uid = uid
    }
    var userinfo = wx.getStorageSync("userInfo")
    if (userinfo == '' && null) {
      console.log(null)
      wx.navigateTo({
        url: '/pages/login/auth/auth?code=' + code,
      })
    } else {
      this.appData.userInfo = userinfo
    }


    updateManager.onUpdateFailed(function () {
      // 新的版本下载失败
    })

    var start_time = new Date('2018/9/3').getTime()
    var date = new Date().getTime()
    this.appData.weeks =  parseInt(((date - start_time) / 1000 / 3600 / 24 / 7)+1)

  },
  
  onShow: function onShow() {},
  onHide: function onHide() {},

  back:function(data){
    console.log(data)
    console.log("data_uid", data.data.openid)
    var status = data.code
    var uid = data.data
    if (status == 201) {
      wx.setStorage({
        key: 'openid',
        data: uid.openid,
      })
      this.appData.uid = uid.openid
      this.appData.userType = data.data.type
    }
    if (status == 202) {
      this.appData.uid = uid
      wx.setStorage({
        key: 'openid',
        data: uid
      })
      wx.setStorageSync("userInfo", " ")
      wx.navigateTo({
        url: '/pages/login/auth/auth?code=' + code,
      })
    }
    var userinfo = wx.getStorageSync("userInfo")
    if (userinfo == '' && null) {
      console.log(null)
      wx.navigateTo({
        url: '/pages/login/auth/auth?code=' + code,
      })
    } else {
      this.appData.userInfo = userinfo
    }
  },

  login: function () {
  var that = this
    wx.login({
      success(res) {
        if (res.code) {
          code = res.code
          // console.log(res)
          //发起网络请求
          var e = {
            'url': 'circle/uid/',
            'data': {
              code: res.code
            },
            'method': 'POST'
          }
          util.request(e).then(function (data) {
            that.back(data.data)
          })
        } else {
          console.log('登录失败！' + res.errMsg)
          // wx.setStorageSync("userInfo", " ")
        }
      }
    })
  }
});