// pages/ recommend/newslist.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page_num: 1,
    list_type: '',
    hidden: true,
    headhidden:false,
    news_list: [],
    return_news: [],
    page_type:null,
    list_type:'',
    request_status:false,

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var page_type = options.type
    var name = options.name
    var that = this;
    console.log(name, page_type)
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          list_type:name,
          page_type: page_type,
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth
        })
      }
    });
    
    // 新闻功能
    that.getNewsList(page_type,1)
  
  },
  getNewsList: function (page_type, num) {
    var that = this
    // 临时
    console.log('page_num', num)    
    if (that.data.request_status){
      console.log('busy')
      return
    }
    if (num == 1){
      num = 1        
    }
    that.setData({
      request_status:true
    })
    wx.request({
      // url: 'http://127.0.0.1:8000/list?page_num=' + num + '&type=' + page_type,
      url: 'https://wx.tomwang.club/list?page_num=' + num + '&type=' + page_type,
      method: 'GET',
      success: function (req) {
        // console.log('backdata', req.data.page_num)
        var news = req.data.news_list
        var news_data = that.data.news_list
        var return_news = news_data.concat(news)

        that.setData({
          page_num:num + 21,
          headhidden: true,
          hidden: true,
          news_list: return_news
        })
      },
      fail: function (req) {
        console.log(req)
        that.setData({
          fail: true
        })
      },
      complete: function() {
        that.setData({
          request_status: false,
          headhidden: true,
          hidden: true
        })
      }

    })
    
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
    return {
      title: 'MyCIDP '+that.data.list_type,
      path: "pages/recommend/newslist?type=" + that.data.page_type +"&name=" + that.data.list_type
    }
  },
  pullUpLoad: function () {

    var that = this;
    // 成功再加一，停止刷新
    that.setData({
      hidden: false,
    })
    console.log("pullup")
    that.getNewsList(that.data.page_type, that.data.page_num);
  },
  
  // pullDownRefresh: function () {
  //   console.log('pulldown')
  //   var that = this;
  //   num = 1
  //   that.setData({
  //     hidden: false,
      
  //   });
  // },


})