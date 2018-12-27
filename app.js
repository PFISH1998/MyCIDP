
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
  },
  onLaunch: function onLaunch() {


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
    console.log("login")
    wx.login({
      success(res) {
        if (res.code) {
          code = res.code
          console.log(res)
          //发起网络请求
          wx.request({
            url: 'https://wx.tomwang.club/circle/uid/',
            // url: 'http://127.0.0.1:8000/circle/uid/',
            method: 'POST',
            data: {
              code: res.code
            },
            success: function(e){
              console.log("login", e.data.code)
              var status = e.data.code
              if (status == 201){
                wx.setStorageSync("openid", e.data.data)
                
              }

              if (status == 202){
                wx.setStorageSync("openid", e.data.data)
                wx.setStorageSync("userInfo", " ")
                wx.navigateTo({
                  url: '/pages/login/auth/auth?code=' + code,
                })
              }
              
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
          // wx.setStorageSync("userInfo", " ")
        }
      }
    })

    var userinfo = wx.getStorageSync("userInfo")
    console.log(userinfo)
    // console.log(userinfo.nick_name)
    if(userinfo == ''){
      console.log(null)
      wx.navigateTo({
        url: '/pages/login/auth/auth?code='+ code,
      })
    }else{
      this.appData.userInfo = userinfo
    }
    

    updateManager.onUpdateFailed(function () {
      // 新的版本下载失败
    })

    var start_time = new Date('2018/9/3').getTime()
    var date = new Date().getTime()
    this.appData.weeks =  parseInt(((date - start_time) / 1000 / 3600 / 24 / 7)+1)
    this.appData.uid = wx.getStorageSync("openid")
  },
  onShow: function onShow() {},
  onHide: function onHide() {}
});