## 多行输入框 textarea

```
多行输入框。
属性名	                类型	        默认值	            说明
value	            String	 	                    输入框的内容
placeholder	        String	 	                    输入框为空时占位符
placeholder-style	String	 	                    指定 placeholder 的样式
placeholder-class	String	textarea-placeholder	指定 placeholder 的样式类
disabled	        Boolean	        false	        是否禁用
maxlength	        Number	        140	            最大输入长度，设置为0的时候不限制最大长度
auto-focus	        Boolean	        false	        自动聚焦，拉起键盘。页面中只能有一个 <textarea/> 或<input/> 设置 auto-focus 属性
focus	            Boolean	        false	        获取焦点（开发工具暂不支持）
auto-height	        Boolean	        false	        是否自动增高，设置auto-height时，style.height不生效
bindfocus	        EventHandle	 	                输入框聚焦时触发，event.detail = {value: value}
bindblur	        EventHandle	 	                输入框失去焦点时触发，event.detail = {value: value}
bindlinechange	    EventHandle	 	                输入框行数变化时调用，event.detail = {height: 0, heightRpx: 0, lineCount: 0}
```