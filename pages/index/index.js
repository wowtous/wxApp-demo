//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'click portrait to forward ...',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
  	//调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      that.update()
    })
  },
  /**
   *  监听页面显示，
   *    当从当前页面调转到另一个页面
   *    另一个页面销毁时会再次执行
   */
  onShow: function() {
    console.log('index---------onShow()')
  },
  /**
   * 监听页面渲染完成
   *    完成之后不会在执行
   */
  onReady: function() {
    console.log('index---------onReaday()');
  },
  /**
   * 监听页面隐藏
   *    当前页面调到另一个页面时会执行
   */
  onHide: function() {
    console.log('index---------onHide()')
  },
  /**
   * 当页面销毁时调用
   */
  onUnload: function() {
    console.log('index---------onUnload')
  }
})
