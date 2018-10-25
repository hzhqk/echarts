感谢网友对于我的echarts示例很喜欢！但我好久没更新博客什么的了，原因就是换了家公司，专注后台更多点，好久没写前台了。
不知怎么最近好多简书网友私信求助，挑了一些需求讲的比较清楚的求助回复，希望get到你们的需求，仅是提示怎么做没有考虑性能、编码优美方面哈，以下问题仅贴出关键点，详情请见源码。
**有些例子Google不允许加载本地json文件等，建议用其他浏览器打开**

1、map上的scatter点击换图标 （见change_map_scatter文件夹）

贴出**关键点**：

```javascript
var series = [];
// 有几个点放几个type: 'scatter'的数据
series.push(
  {
    name: '',
    type: 'lines',
    zlevel: 2,
    symbol: 'none',
    silent: true, //不响应鼠标点击或事件
    effect: {
      show: false //关闭特效
    },
    tooltip: {
      show: false
    },
    polyline: true, //支持多点连线
    lineStyle: {
      normal: {
        color: 'white',
        width: 1.5,
        opacity: 0.9,
        curveness: 0
      }
    },
    data: convertLineData(data)
  },
  {
    name: '',
    type: 'scatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    hoverAnimation: false, //hover时不高亮点
    cursor: 'default', //鼠标设置为箭头
    itemStyle: {
      normal: {
        color: 'orange'
      }
    },
    tooltip: {
      show: false
    },
    symbol: 'image://http://www.iconpng.com/png/ecommerce-business/iphone.png',
    symbolSize: [50, 50],
    label: {
      normal: {
        show: true,
        position: 'right',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#f5a623',
        formatter: function (param) {
          return param.value[2];
        }
      }
    },
    data: [{
      name: '94', value: [135.4648, 43.2891, 95],

    }]
  },
  {
    name: '',
    type: 'scatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    hoverAnimation: false, //hover时不高亮点
    cursor: 'default', //鼠标设置为箭头
    itemStyle: {
      normal: {
        color: 'orange'
      }
    },
    tooltip: {
      show: false
    },
    symbol: 'image://http://www.viastreaming.com/images/apple_logo2.png',
    symbolSize: [50, 50],
    label: {
      normal: {
        show: true,
        position: 'right',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#f5a623',
        formatter: function (param) {
          return param.value[2];
        }
      }
    },
    data: [{
      name: '88', value: [127.4648,36.289, 88]
    }]
  }
);

myChart.on('CLICK', function(param){
     if (param.componentType == "series" && param.seriesType == "scatter") {
	 // 换图标            		
     option.series[param.seriesIndex].symbol = 'image://http://pic.58pic.com/58pic/12/36/51/66d58PICMUV.jpg';
     myChart.setOption(option);
     }
 })
            
         
```

