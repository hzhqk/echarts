var treeData = [];
var myGlobalTreeChart;
var treeNodePadding = 90; //节点间最小间隔
var treeTopPadding = 120; //tree距顶端的距离
$(function() {
    showTreeDetail();
    window.onresize = function(){
    	myGlobalTreeChart.resize();
    };
});

function getGlobalTreeOption() {
    var option = {
        backgroundColor: 'rgba(8,24,42,0.8)',
        title: {
            text: '拓扑图',
            textStyle: {
                color: 'white'
            },
            x: 'center',
            y: 'top'
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                var name = params.data.tooltipName;
                var nodeType = params.data.nodeType;
                var elecCurrent = params.data.elecCurrent;
                var currentInfo = elecCurrent ? elecCurrent.replace(/\n/g, '<br>&emsp;') : "";
                return params.data.nodeTypeName + " : " + (name ? name : "") + (nodeType == 1 ? "" : "<br>电流 : " + currentInfo);
            },
            hideDelay: 0,
            position: function(p) {
                return [p[0], p[1] - 8];
            }
        },
        toolbox: {
            show: false
        },
        calculable: false,
        series: [{
            name: '树图',
            type: 'tree',
            orient: 'vertical', // vertical horizontal
            rootLocation: {
                x:'center',
                y: treeTopPadding
            },
            roam: true, //是否可拖动、缩放
            nodePadding: treeNodePadding,
            symbol: 'circle',
            symbolSize: 40,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'right',
                        textStyle: {
                            color: '#cc9999',
                            fontSize: 15,
                            fontWeight: 'bolder'
                        }
                    },
                    lineStyle: {
                        color: 'white',
                        width: 1,
                        type: 'broken' // 'curve'|'broken'|'solid'|'dotted'|'dashed'
                    }
                },
                emphasis: {
                    label: {
                        show: false
                    }
                }
            },
            data: treeData
        }],
        noDataLoadingOption: {
            text: '暂无数据...',
            effect: 'bubble',
            effectOption: {
                backgroundColor: 'rgba(8,24,42,0.8)',
                effect: {
                    n: 0
                }
            },
            textStyle: {
                color: '#fff'
            }
        },
    };
    return option;
}

function showTreeDetail() {
    require.config({
        paths: {
            echarts: 'http://echarts.baidu.com/build/dist'
        }
    });
    require(['echarts', 'echarts/chart/tree'], function(ec) {
    	myGlobalTreeChart = ec.init($("#globalTree")[0]);
        requestDataAndDoGlobalTree(ec);
    });
}

function requestDataAndDoGlobalTree(ec) {
	var str = '{"meterBoxNum":37,"meterBoxSymbolSize":25,"data":{"name":"小区","value":"1","symbol":"circle","symbolSize":[40,40],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"配电室1号公变A：59(A)B：30(A)C：23(A)","value":"17748856786","symbol":"circle","symbolSize":[35,35],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"AAH080/F1101103(A)","value":"1","symbol":"circle","symbolSize":[30,30],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"小区\\n3#10.185(A)","value":"1","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"10.185(A)","tooltipName":"小区3#"},{"name":"小区1号31.242(A)","value":"2","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"31.242(A)","tooltipName":"小区1号"},{"name":"小区3号10.272(A)","value":"3","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"10.272(A)","tooltipName":"小区3号"},{"name":"小区7号22.55(A)","value":"4","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"22.55(A)","tooltipName":"小区7号"},{"name":"小区5号28.815(A)","value":"5","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"28.815(A)","tooltipName":"小区5号"}],"nodeType":"3","nodeTypeName":"分支箱","elecCurrent":"103(A)","tooltipName":"AAH080/F1101"},{"name":"AAH080/F11025(A)","value":"2","symbol":"circle","symbolSize":[30,30],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"小区3号商铺4.872(A)","value":"6","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"4.872(A)","tooltipName":"小区3号商铺"},{"name":"小区7号商铺4.918(A)","value":"7","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"4.918(A)","tooltipName":"小区7号商铺"}],"nodeType":"3","nodeTypeName":"分支箱","elecCurrent":"5(A)","tooltipName":"AAH080/F1102"},{"name":"AAH080/F110588(A)","value":"3","symbol":"circle","symbolSize":[30,30],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"小区9号37.767(A)","value":"8","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"37.767(A)","tooltipName":"小区9号"},{"name":"小区11号25.742(A)","value":"9","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"25.742(A)","tooltipName":"小区11号"},{"name":"小区13号50.14(A)","value":"10","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"50.14(A)","tooltipName":"小区13号"}],"nodeType":"3","nodeTypeName":"分支箱","elecCurrent":"88(A)","tooltipName":"AAH080/F1105"},{"name":"AAH080/F1106","value":"7","symbol":"circle","symbolSize":[30,30],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[],"nodeType":"3","nodeTypeName":"分支箱","elecCurrent":"","tooltipName":"AAH080/F1106"}],"nodeType":"2","nodeTypeName":"变压器","elecCurrent":"A：59(A)B：30(A)C：23(A)","tooltipName":"配电室1号公变"},{"name":"配电室2号公变 A：76(A)B：45(A)C：43(A)","value":"17748874288","symbol":"circle","symbolSize":[35,35],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"AAH080/F120840(A)","value":"4","symbol":"circle","symbolSize":[30,30],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"小区2号10.832(A)","value":"15","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"10.832(A)","tooltipName":"小区2号"},{"name":"小区4号23.84(A)","value":"16","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"23.84(A)","tooltipName":"小区4号"},{"name":"小区6号43.338(A)","value":"17","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"43.338(A)","tooltipName":"小区6号"},{"name":"中国电信机房5.592(A)","value":"18","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"5.592(A)","tooltipName":"中国电信机房"},{"name":"","value":"19","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"","tooltipName":null}],"nodeType":"3","nodeTypeName":"分支箱","elecCurrent":"40(A)","tooltipName":"AAH080/F1208"},{"name":"AAH080/F120390(A)","value":"5","symbol":"circle","symbolSize":[30,30],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"小区14#（二）9.862(A)","value":"20","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"9.862(A)","tooltipName":"小区14#（二）"},{"name":"小区14#（一）34.895(A)","value":"21","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"34.895(A)","tooltipName":"小区14#（一）"},{"name":"小区16#（一）6.289(A)","value":"22","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"6.289(A)","tooltipName":"小区16#（一）"},{"name":"小区18#6.196(A)","value":"23","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"6.196(A)","tooltipName":"小区18#"},{"name":"小区31#20.045(A)","value":"24","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"20.045(A)","tooltipName":"小区31#"},{"name":"路灯26.941(A)","value":"25","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"26.941(A)","tooltipName":"路灯"},{"name":"小区16#（二）13.186(A)","value":"26","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"13.186(A)","tooltipName":"小区16#（二）"}],"nodeType":"3","nodeTypeName":"分支箱","elecCurrent":"90(A)","tooltipName":"AAH080/F1203"},{"name":"AAH080/F120696(A)","value":"6","symbol":"circle","symbolSize":[30,30],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"小区15号14.836(A)","value":"11","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"14.836(A)","tooltipName":"小区15号"},{"name":"小区17号29.236(A)","value":"12","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"29.236(A)","tooltipName":"小区17号"},{"name":"小区19号19.314(A)","value":"13","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"19.314(A)","tooltipName":"小区19号"},{"name":"小区21号37.833(A)","value":"14","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"37.833(A)","tooltipName":"小区21号"},{"name":"小区23#6.266(A)","value":"27","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"6.266(A)","tooltipName":"小区23#"},{"name":"小区25#10.504(A)","value":"28","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"10.504(A)","tooltipName":"小区25#"},{"name":"","value":"29","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"","tooltipName":null},{"name":"小区27#10.327(A)","value":"30","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"10.327(A)","tooltipName":"小区27#"},{"name":"","value":"31","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"","tooltipName":null},{"name":"小区29#11.752(A)","value":"32","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"11.752(A)","tooltipName":"小区29#"}],"nodeType":"3","nodeTypeName":"分支箱","elecCurrent":"96(A)","tooltipName":"AAH080/F1206"},{"name":"AAH080/F12071(A)","value":"8","symbol":"circle","symbolSize":[30,30],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"小区2#B商铺0.539(A)","value":"33","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"0.539(A)","tooltipName":"小区2#B商铺"},{"name":"小区6#B商铺5.45(A)","value":"34","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"5.45(A)","tooltipName":"小区6#B商铺"}],"nodeType":"3","nodeTypeName":"分支箱","elecCurrent":"1(A)","tooltipName":"AAH080/F1207"},{"name":"AAH080/F1204","value":"9","symbol":"circle","symbolSize":[30,30],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"","value":"35","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"","tooltipName":null},{"name":"","value":"36","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"","tooltipName":null}],"nodeType":"3","nodeTypeName":"分支箱","elecCurrent":"","tooltipName":"AAH080/F1204"},{"name":"AAH080/F12028(A)","value":"10","symbol":"circle","symbolSize":[30,30],"itemStyle":{"normal":{"label":{"show":true,"position":"right","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":[{"name":"水泵房7.896(A)","value":"37","symbol":"circle","symbolSize":[25,25],"itemStyle":{"normal":{"label":{"show":true,"position":"bottom","formatter":"{b}","textStyle":{"color":"#ffcc33","fontSize":10,"fontWeight":""}}}},"children":null,"nodeType":"4","nodeTypeName":"表箱","elecCurrent":"7.896(A)","tooltipName":"水泵房"}],"nodeType":"3","nodeTypeName":"分支箱","elecCurrent":"8(A)","tooltipName":"AAH080/F1202"}],"nodeType":"2","nodeTypeName":"变压器","elecCurrent":"A：76(A)B：45(A)C：43(A)","tooltipName":"配电室2号公变 "}],"nodeType":"1","nodeTypeName":"小区","elecCurrent":null,"tooltipName":"小区"}}';
	var data = JSON.parse(str);
    treeData.push(data.data);
    doGlobalTreeChart(ec,data);
}

function doGlobalTreeChart(ec,data) {
    myGlobalTreeChart.setOption(getGlobalTreeOption());
    //生成图表后做调整
   	adjustTreeView(data);
}

function adjustTreeView(data) {
	var meterBoxNum = data.meterBoxNum;
    var meterBoxSymbolSize = data.meterBoxSymbolSize;

	var zr = myGlobalTreeChart.getZrender();
	// console.log(zr);
	var domWidth = zr.painter.getWidth();
	var treeWidth = getTreeWidth(zr);
	var adjustSize = domWidth / treeWidth * 0.9; //缩放到dom宽度的0.9倍
	var lastNodeX = zr.storage._roots[zr.storage._shapeListOffset - 1].style.x * adjustSize; //预算调整后最后一个节点距root节点的x方向偏移量
	var rightOffset = domWidth - lastNodeX - (domWidth - treeWidth * adjustSize)/2; //计算需要右移多少，并且尽量保持整体居中
	// console.log(adjustSize);
	// console.log('lastNodeX: ' + lastNodeX + '      off2R: ' + rightOffset);
	zr.painter._layers[1].scale = [ adjustSize, adjustSize, 0, 0 ]; //前两个值为x、y方向缩放比例，后两个为缩放原点，详情见zrender API
	zr.painter._layers[1].position = [rightOffset, treeTopPadding ]; //偏移量

	myGlobalTreeChart.refresh();
}

function getTreeWidth(zr) {
	var nodes = zr.storage._roots;
	var max = zr.storage._roots[nodes.length - 1].style.x;
	var min = 0;
	for(var i=0; i < nodes.length; i++){
		if(nodes[i].type = 'icon'){
			if(nodes[i].style.x < min)
				min = nodes[i].style.x;
		}
	}
	return  max - min;
}