## 选择器 picker

滚动选择器，现支持三种选择器，通过mode来区分，分别是普通选择器，时间选择器，日期选择器，默认是普通选择器

### 普通选择器：mode=selector

```
属性名	            类型	        默认值	        说明
range	          Array	        []	        mode为selector时，range有效
value	          Number	    0	        mode为selector时，是数字，表示选择了range中的第几个，从0开始。
bindchange	      EventHandle	 	        value改变时触发change事件，event.detail= { value:value}
```

### 时间选择器：mode=time

```
属性名	            类型	        默认值	        说明
value	        String	 	                表示选中的时间，格式为"hh:mm"
start 	        String	 	                表示有效时间范围的开始，字符串格式为"hh:mm"
end 	        String	 	                表示有效时间范围的结束，字符串格式为"hh:mm"
bindchange 	    EventHandle	 	            value改变时触发change事件，event.detail= { value:value}
```

### 日期选择器：mode=date

```
属性名	            类型	        默认值	        说明
value	        String	        0	        表示选中的日期，格式为"yyyy-MM-dd"
start	        String	 	                表示有效日期范围的开始，字符串格式为"yyyy-MM-dd"
end	            String	 	                表示有效日期范围的结束，字符串格式为"yyyy-MM-dd"
fields	        String	        day	        有效值year,month,day，表示选择器的粒度
bindchange	    EventHandle	 	            value改变时触发change事件，event.detail= { value:value}
```
