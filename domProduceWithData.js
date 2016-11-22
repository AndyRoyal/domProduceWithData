<!DOCTYPE html>
<html>
<head>


<script>
var data = {
    verticalDimension: {
        description: "纵向维度",
        dimensionNameArray: ["页面", "模块", "方案", "CSS", "JS"]
    },
    horizontalDimension: {
        descritpion: "水平维度",
        pageArray: [{
            pageName: "基础",
            rowspan: 3,
            colspan: 1,
            moduleArray: [{
                moduleName: "",
                schemeArray: [{
                    schemeName: "",
                    cssStr: "gmlib/reset/1.1.0/reset.css",
                    jsStr: "gmlib/jq/1.7.1/jquery.js"
                }]
            }]
        }, {
            pageName: "head.html",
            colspan: 16,
            moduleArray: [{
                moduleName: "顶通区",
                colspan: 4,
                schemeArray: [{
                    schemeName: "默认",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/top.min.css",
                    jsStr: "gmlib/cookie/1.0.0/cookie.js,gmpro/1.0.0/public/1.0.0/js/signtop.min.js,gmlib/unit/bigcode/1.0.0/bigcode.min.js"
                }, {
                    schemeName: "带小LOGO",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/top.min.css",
                    jsStr: "gmlib/cookie/1.0.0/cookie.js,gmpro/1.0.0/public/1.0.0/js/signtop.min.js,gmlib/unit/bigcode/1.0.0/bigcode.min.js"
                }, {
                    schemeName: "左侧留空",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/top.min.css",
                    jsStr: "gmlib/cookie/1.0.0/cookie.js,gmpro/1.0.0/public/1.0.0/js/signtop.min.js,gmlib/unit/bigcode/1.0.0/bigcode.min.js"
                }, {
                    schemeName: "无网站导航",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/top.min.css",
                    jsStr: "gmlib/cookie/1.0.0/cookie.js,gmpro/1.0.0/public/1.0.0/js/signtop.min.js,gmlib/unit/bigcode/1.0.0/bigcode.min.js"
                }]
            }, {
                moduleName: "超A区",
                schemeArray: [{
                    schemeName: "默认",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/topad.min.css",
                    jsStr: "gmpro/1.0.0/public/1.0.0/js/topad.min.js"
                }]
            }, {
                moduleName: "广告区",
                schemeArray: [{
                    schemeName: "默认",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/topad.min.css",
                    jsStr: "gmpro/1.0.0/public/1.0.0/js/topad.min.js"
                }]
            }, {
                moduleName: "头部区",
                colspan: 8,
                schemeArray: [{
                    schemeName: "LOGO+GIF+搜索+购物车",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/head.min.css,gmpro/1.0.0/cart/1.0.0/css/headCart.min.css",
                    jsStr: "gmlib/ui/json3/3.3.2/json3.js,gmlib/cookie/1.0.0/cookie.js,gmlib/ui/arttemplate/2.0.4/template.min.js,gmlib/ui/arttemplate/2.0.4/template-simple.min.js,gmpro/1.0.0/public/1.0.0/js/autopoint.min.js,gmpro/1.0.0/public/1.0.0/js/search.min.js,gmpro/1.0.0/cart/1.0.0/js/head-cart/mCart.min.js,gmpro/1.0.0/public/1.0.0/js/signtop.min.js,gmpro/1.0.0/cart/1.0.0/js/head-cart/cart.min.js"
                }, {
                    schemeName: "LOGO+搜索+购物车",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/head.min.css,gmpro/1.0.0/cart/1.0.0/css/headCart.min.css",
                    jsStr: "gmlib/ui/json3/3.3.2/json3.js,gmlib/cookie/1.0.0/cookie.js,gmlib/ui/arttemplate/2.0.4/template.min.js,gmlib/ui/arttemplate/2.0.4/template-simple.min.js,gmpro/1.0.0/public/1.0.0/js/autopoint.min.js,gmpro/1.0.0/public/1.0.0/js/search.min.js,gmpro/1.0.0/cart/1.0.0/js/head-cart/mCart.min.js,gmpro/1.0.0/public/1.0.0/js/signtop.min.js,gmpro/1.0.0/cart/1.0.0/js/head-cart/cart.min.js"
                }, {
                    schemeName: "LOGO+频道名称+自定义",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/head.min.css",
                    jsStr: "gmlib/ui/json3/3.3.2/json3.js"
                }, {
                    schemeName: "海外购",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/head.min.css,gmpro/1.0.0/cart/1.0.0/css/headCart.min.css,gmpro/1.0.0/public/1.0.0/css/hwghead.min.css,gmpro/1.0.0/public/1.0.0/css/topad.min.css",
                    jsStr: "gmlib/ui/json3/3.3.2/json3.js,gmlib/cookie/1.0.0/cookie.js,gmlib/ui/arttemplate/2.0.4/template.min.js,gmlib/ui/arttemplate/2.0.4/template-simple.min.js,gmpro/1.0.0/public/1.0.0/js/hwgautopoint.min.js,gmpro/1.0.0/public/1.0.0/js/search.min.js,gmpro/1.0.0/cart/1.0.0/js/head-cart/mCart.min.js,gmpro/1.0.0/public/1.0.0/js/signtop.min.js,gmpro/1.0.0/cart/1.0.0/js/head-cart/cart.min.js"
                }, {
                    schemeName: "国美家",
                    cssStr: "",
                    jsStr: ""
                }, {
                    schemeName: "服务中心",
                    cssStr: "",
                    jsStr: ""
                }, {
                    schemeName: "会员中心",
                    cssStr: "",
                    jsStr: ""
                }, {
                    schemeName: "C2M",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/head.min.css,gmpro/1.0.0/cart/1.0.0/css/headCart.min.css,gmpro/1.0.0/public/1.0.0/css/headc2m.min.css",
                    jsStr: "gmlib/ui/json3/3.3.2/json3.js,gmlib/cookie/1.0.0/cookie.js,gmlib/ui/arttemplate/2.0.4/template.min.js,gmlib/ui/arttemplate/2.0.4/template-simple.min.js,gmpro/1.0.0/public/1.0.0/js/autopoint.min.js,gmpro/1.0.0/public/1.0.0/js/search.min.js,gmpro/1.0.0/cart/1.0.0/js/head-cart/mCart.min.js,gmpro/1.0.0/public/1.0.0/js/signtop.min.js,gmpro/1.0.0/cart/1.0.0/js/head-cart/cart.min.js,gmpro/1.0.0/public/1.0.0/js/hwghead.min.js"
                }]
            }, {
                moduleName: "导航区",
                colspan: 2,
                schemeArray: [{
                    schemeName: "导航+广告",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/category.min.css",
                    jsStr: "gmlib/ui/json3/3.3.2/json3.js,gmlib/ui/arttemplate/2.0.4/template.min.js,gmlib/ui/arttemplate/2.0.4/template-simple.min.js,gmpro/1.0.0/public/1.0.0/js/category.min.js,gmlib/ui/gscroll/1.0.0/gscroll.min.js,gmlib/ui/dropdown/1.0.0/dropdown.min.js"
                }, {
                    schemeName: "导航",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/category.min.css",
                    jsStr: "gmlib/ui/json3/3.3.2/json3.js,gmlib/ui/arttemplate/2.0.4/template.min.js,gmlib/ui/arttemplate/2.0.4/template-simple.min.js,gmpro/1.0.0/public/1.0.0/js/category.min.js,gmlib/ui/gscroll/1.0.0/gscroll.min.js,gmlib/ui/dropdown/1.0.0/dropdown.min.js"
                }]
            }]
        }, {
            pageName: "foot.html",
            colspan: 4,
            moduleArray: [{
                moduleName: "功能区",
                colspan: 1,
                schemeArray: [{
                    schemeName: "默认",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/foot.min.css",
                    jsStr: ""
                }]
            }, {
                moduleName: "帮助区",
                colspan: 1,
                schemeArray: [{
                    schemeName: "默认",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/foot.min.css",
                    jsStr: ""
                }]
            }, {
                moduleName: "自定义",
                colspan: 1,
                schemeArray: [{
                    schemeName: "默认",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/foot.min.css",
                    jsStr: "gmpro/1.0.0/public/1.0.0/js/foot.min.js"
                }]
            }, {
                moduleName: "链接区",
                colspan: 1,
                schemeArray: [{
                    schemeName: "默认",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/foot.min.css",
                    jsStr: ""
                }]
            }]
        }, {
            pageName: "foot-new.html",
            colspan: 1,
            moduleArray: [{
                moduleName: "尾部区",
                colspan: 1,
                schemeArray: [{
                    schemeName: "默认",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/foot-new.min.css",
                    jsStr: ""
                }]
            }]
        }, {
            pageName: "aside.html",
            colspan: 3,
            moduleArray: [{
                moduleName: "侧边区",
                colspan: 3,
                schemeArray: [{
                    schemeName: "默认",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/aside.min.css,gmpro/1.0.0/cart/1.0.0/css/headCart.min.css",
                    jsStr: "gmlib/ui/arttemplate/2.0.4/template.min.js,gmlib/ui/arttemplate/2.0.4/template-simple.min.js,gmpro/1.0.0/cart/1.0.0/js/head-cart/mCart.min.js,gmpro/1.0.0/public/1.0.0/js/signtop.min.js,gmpro/1.0.0/public/1.0.0/js/cart.min.js,gmpro/1.0.0/public/1.0.0/js/aside.min.js"
                }, {
                    schemeName: "无广告",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/aside.min.css,gmpro/1.0.0/cart/1.0.0/css/headCart.min.css",
                    jsStr: "gmlib/ui/arttemplate/2.0.4/template.min.js,gmlib/ui/arttemplate/2.0.4/template-simple.min.js,gmpro/1.0.0/public/1.0.0/js/signtop.min.js,gmpro/1.0.0/public/1.0.0/js/cart.min.js,gmpro/1.0.0/public/1.0.0/js/aside.min.js"
                }, {
                    schemeName: "无广告二维码",
                    cssStr: "gmpro/1.0.0/public/1.0.0/css/aside.min.css",
                    jsStr: "gmpro/1.0.0/public/1.0.0/js/aside.min.js"
                }]
            }]
        }]
    }
};

/**
 *插件：数据转换成Dom插件
 *问题：由于"公共头尾文件依赖表格"的数据特别多，如有更新，修改Dom很繁琐，所以写了此插件解决DOM生成问题。
 *用法：如有依赖文件变更，请先修改json文件，然后将此js文件代码粘贴到控制台，copy输出的DOM即可。
 */

//根据json数据转换成DOM，然后粘贴到gui中生成文档
(function lzf(data) {
     var jsServer = 'http://js.atguat.com.cn/', //jsServer域名
        cssServer = 'http://css.atguat.com.cn/', //cssServer域名
        tableColumnCount = 0, //表格列数
        tableRowCount = 0, //表格行数
        cssDimensionMaxRowCount, //css维度的最大行数
        jsDimensionMaxRowCount, //js维度的最大行数
        matrixArray = []; //矩阵数组

    var TransferDom = function() {
        this.init();
    };

    //初始化插件，获取tableColumnCount、tableRowCount、cssDimensionMaxRowCount、jsDimensionMaxRowCount、matrixArray的值
    TransferDom.prototype.init = function() {
        var pageArray = data.horizontalDimension.pageArray,
            pageElement,
            moduleArray,
            moudleElement,
            schemeArray,
            schemeElement,
            cssCountArray = [],
            jsCountArray = [];

        for (var j = 0; j < pageArray.length; j++) {
            pageElement = pageArray[j];
            moduleArray = pageElement.moduleArray;

            //获取表格的行数
            if (pageElement.colspan) {
                tableColumnCount += pageElement.colspan;
            } else {
                tableColumnCount++;
            }

            for (var k = 0; k < moduleArray.length; k++) {
                moudleElement = moduleArray[k];
                schemeArray = moudleElement.schemeArray;
                for (var l = 0; l < schemeArray.length; l++) {
                    schemeElement = schemeArray[l];
                    cssCountArray.push(schemeElement.cssStr.split(',').length);
                    jsCountArray.push(schemeElement.jsStr.split(',').length);
                }
            }
        }

        cssDimensionMaxRowCount = Math.max.apply(null, cssCountArray);
        jsDimensionMaxRowCount = Math.max.apply(null, jsCountArray);
        tableColumnCount += 1; //1=第一列
        tableRowCount = cssDimensionMaxRowCount + jsDimensionMaxRowCount + 3; //3=页面row+模块row+方案row

        this.transferMatrixArrayByData();
    };

    //将data转换成矩阵数组
    TransferDom.prototype.transferMatrixArrayByData = function() {
        var pageArray = data.horizontalDimension.pageArray,
            dimensionNameArray = data.verticalDimension.dimensionNameArray,
            dimensionName,
            pageElement,
            moduleArray,
            moudleElement,
            schemeArray,
            schemeElement,
            firstRowCellIndex = 0, //第一行的单元格索引唯一
            secondRowCellIndex = 0, //第二行的单元格索引唯一
            thirdRowCellIndex = 0, //第三行的单元格索引唯一
            cssRowStartIndex = 3, //CSS行起始索引
            jsRowStartIndex = 3 + cssDimensionMaxRowCount; //JS行起始索引

        for (var m = 0; m < tableRowCount; m++) {
            matrixArray[m] = [];
            for (var n = 0; n < tableColumnCount; n++) {
                matrixArray[m][n] = {
                    text: "&nbsp;"
                };
            }
        }

        //填充第一列
        for (var i = 0; i < dimensionNameArray.length; i++) {
            dimensionName = dimensionNameArray[i];
            if (i !== dimensionNameArray.length - 1) {
                matrixArray[i][0].text = dimensionName;
            } else {
                matrixArray[tableRowCount - jsDimensionMaxRowCount][0].text = dimensionName;
            }
        }

        for (var j = 0; j < pageArray.length; j++) {
            pageElement = pageArray[j];
            moduleArray = pageElement.moduleArray;

            //填充第一行
            firstRowCellIndex++;
            matrixArray[0][firstRowCellIndex].text = pageElement.pageName;
            if (pageElement.rowspan && pageElement.rowspan !== 1) {
                matrixArray[0][firstRowCellIndex].rowspan = pageElement.rowspan;
            }
            if (pageElement.colspan && pageElement.colspan !== 1) {
                matrixArray[0][firstRowCellIndex].colspan = pageElement.colspan;
                for (var a = 1; a < pageElement.colspan; a++) {
                    firstRowCellIndex++;
                    matrixArray[0][firstRowCellIndex].text = "";
                }
            }

            for (var k = 0; k < moduleArray.length; k++) {
                moudleElement = moduleArray[k];
                schemeArray = moudleElement.schemeArray;

                //填充第二行
                secondRowCellIndex++;
                matrixArray[1][secondRowCellIndex].text = moudleElement.moduleName;
                if (moudleElement.colspan && moudleElement.colspan !== 1) {
                    matrixArray[1][secondRowCellIndex].colspan = moudleElement.colspan;
                    for (var w = 1; w < moudleElement.colspan; w++) {
                        secondRowCellIndex++;
                        matrixArray[1][secondRowCellIndex].text = "";
                    }
                }

                for (var l = 0; l < schemeArray.length; l++) {
                    schemeElement = schemeArray[l];
                    //填充第三行
                    thirdRowCellIndex++;
                    matrixArray[2][thirdRowCellIndex].text = schemeElement.schemeName;


                    var cssArray = schemeElement.cssStr.split(',');
                    var jsArray = schemeElement.jsStr.split(',');
                    //填充CSS列
                    for (var b = 0; b < cssArray.length; b++) {
                        matrixArray[b + cssRowStartIndex][thirdRowCellIndex].text = cssServer + cssArray[b];
                    }
                    //填充JS列
                    for (var c = 0; c < jsArray.length; c++) {
                        matrixArray[c + jsRowStartIndex][thirdRowCellIndex].text = jsServer + jsArray[c];
                    }
                }
            }
        }
    };

    //输出HTML
    TransferDom.prototype.outputHtml = function() {
        var result = '',
            element,
            rowspan,
            colspan;

        for (var i = 0; i < matrixArray.length; i++) {
            result += '<tr>';
            for (var j = 0; j < matrixArray[i].length; j++) {
                element = matrixArray[i][j];
                if (element.text !== '') {
                    colspan = element.colspan ? ' colspan=' + element.colspan : '';
                    rowspan = element.rowspan ? ' rowspan=' + element.rowspan : '';
                    if (i < 3 || j === 0) {
                        result += '<th' + colspan + rowspan + '>' + element.text + '</th>';
                    } else {
                        result += '<td' + colspan + rowspan + '>' + element.text + '</td>';
                    }

                }
            }
            result += '</tr>';
        }
        result = '<div style="width:100%;overflow-x:scroll;"><table style="width:3000px;">' + result + '</table></div>';
        var dataStr = JSON.stringify(data);
        var fnStr = lzf.toString();
        var jsAllStr = "<script text/hello>var data = "+dataStr+fnStr+'})(data);</script>';
       
        document.write('<h2>效果预览：</h2>' + result);
        document.write('<h2>请copy如下DOM：</h2>' + '<textarea style="width:500px;height:500px;border:3px solid red;">'+jsAllStr.replace(/</g, "&lt;").replace(/>/g,"&gt;")+result.replace(/</g, "&lt;").replace(/>/g,"&gt;")+'</textarea>');
        console.log('=====================dom生成如下：====================');
        console.log(jsAllStr);
    };

    var transformDom = new TransferDom();
    transformDom.outputHtml(); //输出html
})(data);
</script>


</body>
</html>