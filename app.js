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
          util.request(e).then(function(data){
            that.back(data)
          })

        }else {
          console.log('登录失败！' + res.errMsg)
          // wx.setStorageSync("userInfo", " ")
        }
      }
    })

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
    var status = data.code
    if (status == 201) {
      wx.setStorage({
        key: 'openid',
        data: data.data.openid,
      })
      this.appData.uid = data.data.openid
      this.appData.userType = data.data.type
    }
    if (status == 202) {
      this.appData.uid = data.data.openid
      wx.setStorage({
        key: 'openid',
        data: data.data.openid,
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
      this.appData.uid = data.data.openid
      this.appData.userInfo = userinfo
    }
  }
});