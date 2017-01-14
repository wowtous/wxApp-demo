## 选择器 slider

滑动选择器
```
属性名	        类型	        默认值	        说明
min	        Number	        0	        最小值
max	        Number	        100	        最大值
step	    Number	        1	        步长，取值必须大于 0，并且可被 (max - min) 整除
disabled	Boolean	        false	    是否禁用
value	    Number	        0	        当前取值
show-value	Boolean	        false	    是否显示当前value
bindchange	EventHandle	 	            完成一次拖动后触发的事件，event.detail = {value:value}
```