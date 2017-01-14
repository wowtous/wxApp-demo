## checkbox

### checkbox-group

多选项目组，内部由多个checkbox组成。<br>
checkbox-group内只能包含checkbox

```
属性名	        类型	        默认值	    说明
bindchange	EventHandle	 	        checkbox-group中选中项发生改变是触发change事件，detail = {value:[选中的checkbox的value的数组]}
```


### checkbox

```
属性名	        类型	        默认值	        说明
value	    String	 	                checkbox标识，选中时触发checkbox-group的change事件，并携带checkbox的value
disabled	Boolean	        false	    是否禁用
checked	    Boolean	        false	    当前是否选中，可用来设置默认选中
```