Page({
  data:{
    message: 'Hello WxApp', //内容绑定
    id: 0, //组件属性绑定 
    condition: true, //控制属性绑定
    flag:false,//三元运算
    length: 6, //逻辑判断
    name: "I'm a string.", //字符串运算
    a: 1, //算数运算
    b: 2, //算数运算
    c: 3, //算数运算
    zero: 0, //数组组合
    x: 0, //对象
    y: 1, //对象
    obj1: { //对象展开
        a: 1,
        b: 2
    },
    obj2: {
        c: 3,
        d: 4
    },
    p: 5,
    foo: 'foo value', //对象key和value形同时
    bar: 'bar value'  //对象key和value形同时
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