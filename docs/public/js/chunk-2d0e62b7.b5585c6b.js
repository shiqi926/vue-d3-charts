(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e62b7"],{9835:function(t,a,o){"use strict";o.r(a);var e=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("div",{staticClass:"page"},[o("ChartTitleComponent",{attrs:{name:t.chartname,desc:t.chartdesc}}),o("section",{staticClass:"chart"},[o("D3WordsCloud",{attrs:{config:t.chartconfig,datum:t.chartdata,title:"Lorem ipsum dolor sit amet"}})],1),t._m(0),o("ChartImportComponent",{attrs:{code:t.chartname,link:"https://github.com/Saigesp/vue-d3-charts/blob/master/src/wordscloud/d3.wordscloud.js"}}),o("ChartTemplateComponent",{attrs:{template:t.chartcode}}),o("ChartDataComponent",{attrs:{desc:t.chartdatadesc,code:t.chartdatacode,config:t.chartdataconfig}}),o("ChartConfigComponent",{attrs:{options:t.chartoptions}}),o("ChartColorComponent"),o("ChartStylesComponent",{attrs:{classname:"sunburst"}})],1)},r=[function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("section",{staticClass:"text text--center"},[o("br"),t._v("This chart uses "),o("a",{attrs:{href:"https://github.com/jasondavies/d3-cloud"}},[t._v("d3-clouds")]),t._v(", developed by "),o("a",{attrs:{href:"https://www.jasondavies.com/"}},[t._v("Jason Davies")]),t._v(". ")])}],s=(o("2dd5"),{name:"WordsCloud",data:function(){return{chartname:"D3WordsCloud",chartdesc:"A words cloud is a visual representation of text data, typically used to depict keyword metadata.",chartcode:'<D3WordsCloud :config="chart_config" :datum="chart_data"></D3WordsCloud>',chartoptions:["margin","color","transition"],chartconfig:{key:"word",value:"size"},chartdata:[{word:"Lorem",size:60},{word:"Ipsum",size:10},{word:"Dolor",size:20},{word:"Sit",size:50},{word:"Amet",size:30},{word:"Consectetur",size:20},{word:"Adipiscing",size:30},{word:"Elit",size:10}],chartdatadesc:"An <strong>objects array</strong> is expected, with each object as a words",chartdatacode:"chart_data = []",chartdataconfig:"<code>?</code>"}},mounted:function(){}}),c=s,d=o("2877"),n=Object(d["a"])(c,e,r,!1,null,null,null);a["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0e62b7.b5585c6b.js.map