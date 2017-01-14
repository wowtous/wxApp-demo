## radio 组件

### radio-group

单选群组，内部由多个radio组成
```
属性名	        类型	        默认值	    说明
bindchange	EventHandle	 	        radio-group中的选中项发生变化时触发change事件，event.detai = {value : 选中项radio的value
```

### radio

​单选项目
```
属性名	        类型	        默认值	    说明
value	    String	 	            radio标识。当该radio选中时，radio-group的change事件会携带radio的value
checked	    Boolean	       false	当前是否选中
disabled	Boolean	       false	是否禁用
```