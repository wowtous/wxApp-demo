## picker-view

嵌入页面的滚动选择器

### 主要属性

```
属性名	            类型	        默认值	            说明
value	          Number       Array	 	数组中的数字依次表示 picker-view 内的 picker-view-colume 选择的第几项（下标从 0 开始），数字大于 picker-view-column 可选项长度时，选择最后一项。
indicator-style	  String	 	            设置选择器中间选中框的样式
bindchange	      EventHandle	 	        当滚动选择，value 改变时触发 change 事件，event.detail = {value: value}；value为数组，表示 picker-view 内的 picker-view-column 当前选择的是第几项（下标从 0 开始）
```

注意：其中只可放置`<picker-view-column/>`组件，其他节点不会显示;其高度会自动设置成与`picker-view`的选中框的高度一致
