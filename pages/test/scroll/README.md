## scroll-view组件

scroll-view为滚动视图，分为水平滚动和垂直滚动。<br>
注意滚动视图垂直滚动时一定要`设置高度`,否则的话scroll-view不会生效

### 主要属性
```
属性名                 类型          默认值         描述
scroll-x            Boolean        false        是否横向滚动
scroll-y            Boolean        false        是否纵向滚动
upper-threshold     Number          50          距顶部/左边多远时(px),触发scrolltoupper事件
lower-threshold     Number          50          距顶部/右边多远时(px),触发scrolltolower事件
scroll-top          Number                      设置竖向滚动条位置
scroll-left         Number                      设置横向滚动条位置
scroll-into-view    String                      值应为某子元素id，则滚动该元素，元素顶部对齐滚动区域顶部
bindscrolltoupper   EventHandle                 滚动到顶部/左边，会触发scrolltoupper事件
bindscrolltolower   EventHandle                 滚动到顶部/右边，会触发scrolltolower事件
bindscroll          EventHandle                 滚动时触发，event.detail总携带{scrollLeft,scrollTop,scrollHeight,scrollWidth,deltaX,deltaY}
```