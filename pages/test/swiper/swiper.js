Page({
  data:{
    text:"Page swiper",
    test:"test"
  },
  /**
   * 这里处理滚动事件处理
   */
  listenSwiper:function(e) {
      //打印信息
      this.setData({
        text: "Current Time: "+Date.now()/1000
      }) 
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})