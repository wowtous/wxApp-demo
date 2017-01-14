## input 输入框

### 主要属性

```
属性名	                    类型	        默认值	                说明
value	                String	 	                        输入框的内容
type	                String	        text	            input的类型，有效值：text,number,idcard,digit,time,date
password	            Boolean	        false	            是否是密码类型
placeholder	            String	 	                        输入框为空时占位符
placeholder-style	    String	 	                        指定placeholder的样式
placeholder-class	    String	        input-placeholder	指定placeholder的样式类
disabled	            Boolean	        false	            是否禁用
maxlength	            Number	        140	                最大输入长度，设置为0的时候不限制最大长度
auto-focus	            Boolean	        false	            自动聚焦，拉起键盘。页面中只能有一个input设置auto-focus属性
focus	                Boolean	        false	            使得input获取焦点
bindchange	            EventHandle	 	                    输入框失去焦点时，触发bindchange事件，event.detail={value:value}
bindinput	            EventHandle	 	                    除了date/time类型外的输入框，当键盘输入时，触发input事件，event.detail={value:value}，处理函数可以直接return一个字符串，将替换输入框的内容。
bindfocus	            EventHandle	 	                    输入框聚焦时触发，event.detail = {value:value}
bindblur	            EventHandle	 	                    输入框失去焦点时触发，event.detail = {value:value}
```