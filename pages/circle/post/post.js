// pages/circle/post/post.js
var util = require('../../../utils/util.js')

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    notes: [''],
    post_content: '...',
    img_url: [],
    content: '',
    content_length: 120,
    userInfo: {},
    hasUserInfo: false,
    circle_id: null,

  },

  onLoad: function (options) {
    var title = 'Circle'
    console.log("post", options)
    var userInfo = wx.getStorageSync("userInfo")
    if (userInfo == '') {
      wx.redirectTo({
        url: '../../../pages/login/auth/auth',
      })
    }

    var type = options.type
    if (type == 'comment') {
      title = '评论'
      this.setData({
        circle_id: options.circle_id,
        post_content: ' 发表评论 @ ' + options.user + ':'
      })
    }
    wx.setNavigationBarTitle({
      title: title,
    })

    this.setData({
      userInfo: userInfo,
      hasUserInfo: true

    })
  },

  input: function (e) {
    console.log(e)
    this.setData({
      content: e.detail.value,
      content_length: 120 - e.detail.cursor
    })
  },


  chooseimage: function () {
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9 
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有 
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有 
      success: function (res) {
        if (res.tempFilePaths.length > 0) {
          //图如果满了9张，不显示加图
          if (res.tempFilePaths.length == 9) {
            that.setData({
              hideAdd: 1
            })
          } else {
            that.setData({
              hideAdd: 0
            })
          }
          //把每次选择的图push进数组
          let img_url = that.data.img_url;
          for (let i = 0; i < res.tempFilePaths.length; i++) {
            img_url.push(res.tempFilePaths[i])
          }
          that.setData({
            img_url: img_url
          })
        }
      }
    })
  },


  //发布按钮事件
  send: function () {
    var that = this;
    var content = that.data.content
    var userInfo = that.data.userInfo
    var circle_id = that.data.circle_id
    if (that.data.content_length < 0) {
      wx.showToast({
        title: '废话太多！',
        icon: 'none'
      })
      return
    }
    if (that.data.content_length == 120) {
      wx.showToast({
        title: '无声胜有声？',
        icon: 'none'
      })
      return
    }
    var uid = app.appData.uid
    console.log(uid)

    if (circle_id != null) {
      var postData = {
        "url": "circle/comments/" + circle_id + '/',
        "data": {
          "circle": circle_id,
          "comment_content": content,
          "from_user": uid,
        },
        "method": "POST"
      }
    } else {
      var postData = {
        "url": "circle/posts",
        "data": {
          "post_user": userInfo.nickName,
          "uid": uid,
          "content": content
        },
        "method": "POST"
      }
    }

    wx.showLoading({
      title: '拼命传送中',
    })

    util.getData(postData).then((data) => {
      // console.log("data", data)
      wx.hideLoading()
      // console.log("status", status)
      if (true) {
        console.log("success")
        wx.showToast({
          title: '发布成功',
          icon: 'success',
        })
      }
      wx.navigateBack({})
      // return getTime(data)
    })














    // wx.showLoading({
    //   title: '上传中',
    // })
    // that.img_upload()
  },


  //图片上传
  img_upload: function () {
    let that = this;
    let img_url = that.data.img_url;
    let img_url_ok = [];
    //由于图片只能一张一张地上传，所以用循环
    for (let i = 0; i < img_url.length; i++) {
      wx.uploadFile({
        //路径填你上传图片方法的地址
        url: 'http://wechat.homedoctor.com/Moments/upload_do',
        filePath: img_url[i],
        name: 'file',
        formData: {
          'user': 'test'
        },
        success: function (res) {
          console.log('上传成功');
          //把上传成功的图片的地址放入数组中
          img_url_ok.push(res.data)
          //如果全部传完，则可以将图片路径保存到数据库
          if (img_url_ok.length == img_url.length) {
            var userid = wx.getStorageSync('userid');
            var content = that.data.content;
            wx.request({
              url: 'http://wechat.homedoctor.com/Moments/adds',
              data: {
                user_id: userid,
                images: img_url_ok,
                content: content,
              },
              success: function (res) {
                if (res.data.status == 1) {
                  wx.hideLoading()
                  wx.showModal({
                    title: '提交成功',
                    showCancel: false,
                    success: function (res) {
                      if (res.confirm) {
                        wx.navigateTo({
                          url: '/pages/my_moments/my_moments',
                        })
                      }
                    }
                  })
                }
              }
            })
          }
        },
        fail: function (res) {
          console.log('上传失败')
        }
      })
    }
  }

})