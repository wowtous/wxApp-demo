## 微信小程序

### 注册程序 App()函数
App()函数用来注册一个小程序。接受一个object参数，其指定小程序的生命周期函数等。

```
属性	        类型	        描述	                                                触发时机
onLaunch	Function	生命周期函数--监听小程序初始化	                           当小程序初始化完成时，会触发onLaunch（全局只触发一次）
onShow	    Function	生命周期函数--监听小程序显示	                                当小程序启动，或从后台进入前台显示，会触发onShow
onHide	    Function	生命周期函数--监听小程序隐藏	                                当小程序从前台进入后台，会触发onHide
其他	       Any	       开发者可以添加任意的函数或数据到Object参数中，用this可以访问
```

#### 前台、后台定义： 

+ 当用户点击左上角关闭，或者按了设备Home键离开微信，小程序并没有正在的销毁，而是进入了后台；
+ 当再次启动微信或再次打开小程序，又会从后台进入前台。
+ 只有当小程序进入后台一定时间，或者系统资源占用过高，才会被真正的销毁。

#### 函数
+ getCurrentPage()  函数用户获取当前页面 App.prototype.getCurrentPage()
+ getApp()          全局函数，可以获取到小程序实例

```js
// other.js
var appInstance = getApp()
console.log(appInstance.globalData) // I am global data
```


### 注册页面 Page()函数
Page()函数用来注册一个页面。接受一个object参数，其指定页面的初始数据、生命周期函数、事件处理函数等。

```
属性	                类型	            描述
data	            Object	        页面的初始数据
onLoad	            Function	    生命周期函数--监听页面加载
onReady	            Function	    生命周期函数--监听页面初次渲染完成
onShow	            Function	    生命周期函数--监听页面显示
onHide	            Function	    生命周期函数--监听页面隐藏
onUnload	        Function	    生命周期函数--监听页面卸载
onPullDownRefresh	Function	    页面相关事件处理函数--监听用户下拉动作
onReachBottom	    Function	    页面上拉触底事件的处理函数
其他	               Any	           开发者可以添加任意的函数或数据到 object 参数中，在页面的函数中用 this 可以访问
```

#### 初始化数据
```js
Page({
  data: {
    text: 'init data',
    array: [{msg: '1'}, {msg: '2'}]
  }
})
```

#### 生命周期函数

+ onLoad: 页面加载

    一个页面只会调用一次。
    接收页面参数可以获取wx.navigateTo和wx.redirectTo及<navigator/>中的 query。

+ onShow: 页面显示

    每次打开页面都会调用一次。

+ onReady: 页面初次渲染完成

    一个页面只会调用一次，代表页面已经准备妥当，可以和视图层进行交互。
    对界面的设置如wx.setNavigationBarTitle请在onReady之后设置。详见生命周期

+ onHide: 页面隐藏

    当navigateTo或底部tab切换时调用。

+ onUnload: 页面卸载

    当redirectTo或navigateBack的时候调用。

#### 页面相关事件处理函数

+ onPullDownRefresh: 下拉刷新

    监听用户下拉刷新事件。
    需要在config的window选项中开启enablePullDownRefresh。
    当处理完数据刷新后，wx.stopPullDownRefresh可以停止当前页面的下拉刷新。

#### 事件处理函数
在渲染层可以在组件中加入事件绑定，当达到触发事件时，就会执行Page中定义的事件处理函数。

+ Page.prototype.setData()

    setData函数用于将数据从逻辑层发送到视图层，同时改变对应的this.data的值。
    接受一个对象，以key，value的形式表示将this.data中的key对应的值改变成value。
    其中key可以非常灵活，以数据路径的形式给出，如array[2].message，a.b.c.d，并且不需要在this.data中预先定义。

```js
function(){
    this.setData({
      'newField.text': 'new data'
    })
}
```

### 页面的路由
在小程序中所有页面的路由全部由框架进行管理，对于路由的触发方式以及页面生命周期函数如下:

+ 初始化	        
    触发时机: 小程序打开的第一个页面
    路由后页面: onLoad，onShow

+ 打开新页面	   
    触发时机: 调用 API wx.navigateTo 或使用组件 <navigator />	    
    路由后页面: onLoad，onShow	                
    路由前页面: onHide

+ 页面重定向	   
    触发时机: 调用 API wx.redirectTo 或使用组件 <navigator />	    
    路由后页面: onLoad，onShow	                
    路由前页面: onUnload

+ 页面返回	    
    触发时机:调用 API wx.navigateBack或用户按左上角返回按钮	     
    路由后页面: onShow	                         
    路由前页面: onUnload（多层页面返回每个页面都会按顺序触发onUnload）

+ Tab切换	     
    触发时机:调用 API wx.switchTab 或使用组件 <navigator open-type="switchTab"/> 或用户切换 Tab	
    路由后页面: 第一次打开 onLoad，onshow；否则 onShow	
    路由前页面: [各种情况请参考](http://www.w3cschool.cn/weixinapp/weixinapp-page.html)
