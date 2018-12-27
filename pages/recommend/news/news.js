// pages/ recommend/news/news.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news_content: '',
    url:'' 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    // console.log(options)
    wx.setNavigationBarTitle({
      title: "详情"
    })
    // wx.request({
    //   // url: 'http://127.0.0.1:8000/news?content='+options.url,
    //   url: 'https://wx.tomwang.club/news?content='+options.url,
    //   method: 'get',
    //   success: function(req) {
    //     var news_data = req.data.news_content[0]
    //     that.setData({
    //       url:options.url,
    //       news_content:news_data
    //     })
    //   },
    //   fail: function (req) {
        
    //   }
    // })
    
  
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
      title: 'MyCIDP ' + that.data.news_content.title,
      path: "pages/recommend/news/news?url="+that.data.url
    }
  },

  imgview: function(e) {
    
    var src = e.currentTarget.dataset.src
    console.log(src)
    var urls = this.data.news_content.pic_list
    wx.previewImage({
      current: src,
      urls:urls
    })
  }



})