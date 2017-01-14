## view组件主要属性：

1. flex-direction： 
主要两个特性”row”横向排列”column”纵向排列
```wxss
flex-direction:row;
height: 300px;flex-direction:column;
```

2. justify-content 
主轴的对齐方式（如果flex-direction为row则主轴就是水平方向）<br>
可选属性 (‘flex-start’, ‘flex-end’, ‘center’, ‘space-between’, ‘space-around’)
```wxss
flex-direction:row;justify-content: flex-start;
flex-direction:row;justify-content: flex-end;
flex-direction:row;justify-content: center;
flex-direction:row;justify-content: space-between;
flex-direction:row;justify-content: space-around;
```

3. align-items 
侧轴对齐方式如果flex-direction为row则侧轴就是垂直方向）<br>
可选属性 (‘flex-start’, ‘flex-end’, ‘center’）
```wxss
height: 200px;flex-direction:row;justify-content: center;align-items: flex-end;
height: 200px;flex-direction:row;justify-content: center;align-items: center;
height: 200px;flex-direction:row;justify-content: center;align-items: flex-start;
```