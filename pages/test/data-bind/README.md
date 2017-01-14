## 数据绑定

### data model => data-bind.js
```js
{
    message: 'Hello WxApp', //内容绑定
    id: 0, //组件属性绑定 
    condition: true, //控制属性绑定
    flag:false,//三元运算
    length: 6, //逻辑判断
    name: 'I‘m a string', //字符串运算
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
  }
```

### wxml data bind template => data-bind.wxml
```wxml
<!--数据绑定使用对象---内容-->
  <view>{{message}}</view>
  
  <!--数据绑定使用对象---组件属性---需要在双引号之内-->
  <view id="item-{{id}}">组件属性</view>

  <!--数据绑定使用对象---控制属性---需要在双引号之内-->
  <view wx:if="{{condition}}">控制属性</view>

  <!--数据绑定使用对象---三元运算-->
  <view hindden="{{flag ? true : false}}">三元运算符</view>

  <!--数据绑定使用对象---算数运算-->
  <view>运算结果 => {{a + b}} + {{c}} + d</view>

  <!--数据绑定使用对象---逻辑判断-->
  <view wx:if="{{length > 5}}">if gt</view>

  <!--数据绑定使用对象---字符串运算-->
  <view>{{"Hello  " + name}}</view>

  <!--数据绑定使用对象---数组组合-->
  <view wx:for="{{[zero, 1, 2, 3, 4, 5, 6]}}">
    <text>{{item}}+1 = {{item+1}}</text>
  </view>

  <!--数据绑定使用对象---对象-->
  <template is="objectCombine" data="{{for: x, bar: y}}"></template>

  <!--数据绑定使用对象---扩展运算符对象 ...  将一个对象展开-->
  <template is="objectCombine" data="{{...obj1, ...obj2, p: 5}}"></template>

  <!--数据绑定使用对象---对象的key和value相同时-->
  <template is="objectCombine" data="{{foo, bar}}"></template>
```