## form组件

form表单组件 是提交form内的所有选中属性的值<br>
注意每个form表单内的组件都必须有name属性指定否则提交不上去<br>
button中的type两个submit，reset属性分别对应form的两个事件

### 主要属性：

```
属性名	            类型	            说明
report-submit	Boolean	        是否返回formId用于发送模板消息
bindsubmit	    EventHandle	    携带form中的数据触发submit事件，event.detail = { value : {"name":"value"} , formId:"" }
bindreset	    EventHandle	    表单重置时会触发reset事件
```