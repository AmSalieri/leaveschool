(function(){"use strict";var t={1031:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var s=n(8935),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("FirstPage")],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},i=[],o={name:"FirstPage"},d=o,c=n(1001),l=(0,c.Z)(d,u,i,!1,null,null,null),v=l.exports,m={name:"App",components:{FirstPage:v}},p=m,g=(0,c.Z)(p,r,a,!1,null,null,null),h=g.exports,_=n(2809),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 个人照片："),n("PhotoStu"),n("form",[n("br"),t._v("学号："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.number,expression:"student.number"}],attrs:{type:"text",name:"学号"},domProps:{value:t.student.number},on:{input:function(e){e.target.composing||t.$set(t.student,"number",e.target.value)}}}),t._v(" "),n("br"),n("br"),t._v(" 姓名："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.name,expression:"student.name"}],attrs:{type:"text",name:"姓名"},domProps:{value:t.student.name},on:{input:function(e){e.target.composing||t.$set(t.student,"name",e.target.value)}}}),t._v(" "),n("br"),n("br"),t._v(" 院系："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.yuanxi,expression:"student.yuanxi"}],attrs:{type:"text",name:"院系"},domProps:{value:t.student.yuanxi},on:{input:function(e){e.target.composing||t.$set(t.student,"yuanxi",e.target.value)}}}),t._v(" "),n("br"),n("br"),t._v(" 专业："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.zhuangye,expression:"student.zhuangye"}],attrs:{type:"text",name:"专业"},domProps:{value:t.student.zhuangye},on:{input:function(e){e.target.composing||t.$set(t.student,"zhuangye",e.target.value)}}}),t._v(" "),n("br"),n("br"),t._v(" 班级："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.class_,expression:"student.class_"}],attrs:{type:"text",name:"班级"},domProps:{value:t.student.class_},on:{input:function(e){e.target.composing||t.$set(t.student,"class_",e.target.value)}}}),t._v(" "),n("br"),n("br"),t._v(" 请假事由(选一个）： "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.because,expression:"student.because"}],attrs:{type:"radio",name:"because",value:"眼睛黑朦，去看眼科"},domProps:{checked:t._q(t.student.because,"眼睛黑朦，去看眼科")},on:{change:function(e){return t.$set(t.student,"because","眼睛黑朦，去看眼科")}}}),t._v("眼睛黑朦，去看眼科 "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.because,expression:"student.because"}],attrs:{type:"radio",name:"because",value:"胃病反复，去医院检查开药"},domProps:{checked:t._q(t.student.because,"胃病反复，去医院检查开药")},on:{change:function(e){return t.$set(t.student,"because","胃病反复，去医院检查开药")}}}),t._v("胃病反复，去医院检查开药 "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.because,expression:"student.because"}],attrs:{type:"radio",name:"because",value:"去医院拔智齿"},domProps:{checked:t._q(t.student.because,"去医院拔智齿")},on:{change:function(e){return t.$set(t.student,"because","去医院拔智齿")}}}),t._v("去医院拔智齿 "),n("br"),n("br"),t._v(" 手机号："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.phone,expression:"student.phone"}],attrs:{type:"text",name:"手机号"},domProps:{value:t.student.phone},on:{input:function(e){e.target.composing||t.$set(t.student,"phone",e.target.value)}}}),t._v(" "),n("br"),n("br"),t._v(" 请假去向地点(选一个）： "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.address,expression:"student.address"}],attrs:{type:"radio",name:"address",value:"武汉大学人民医院"},domProps:{checked:t._q(t.student.address,"武汉大学人民医院")},on:{change:function(e){return t.$set(t.student,"address","武汉大学人民医院")}}}),t._v("武汉大学人民医院 "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.address,expression:"student.address"}],attrs:{type:"radio",name:"address",value:"江夏区第一人民医院"},domProps:{checked:t._q(t.student.address,"江夏区第一人民医院")},on:{change:function(e){return t.$set(t.student,"address","江夏区第一人民医院")}}}),t._v("江夏区第一人民医院 "),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.address,expression:"student.address"}],attrs:{type:"radio",name:"address",value:"大众口腔（徐东店）"},domProps:{checked:t._q(t.student.address,"大众口腔（徐东店）")},on:{change:function(e){return t.$set(t.student,"address","大众口腔（徐东店）")}}}),t._v("大众口腔（徐东店） "),n("br"),n("br"),t._v(" 辅导员："),n("input",{directives:[{name:"model",rawName:"v-model",value:t.student.teacher,expression:"student.teacher"}],attrs:{type:"text",name:"辅导员"},domProps:{value:t.student.teacher},on:{input:function(e){e.target.composing||t.$set(t.student,"teacher",e.target.value)}}}),t._v(" "),n("br"),n("br"),t._v(" "),n("br"),n("button",{on:{click:function(e){return t.goqingjia()}}},[t._v("---- 点击生成假条 ----")])])],1)},b=[],y=(n(2222),n(8309),n(6166)),w=n.n(y),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"hello"},[n("div",{staticClass:"user-header"},[n("input",{staticClass:"header-upload-btn user-header-com",attrs:{type:"file",name:"image",accept:"image/*"},on:{change:t.onchangeImgFun}}),n("img",{staticClass:"user-header-img user-header-com",attrs:{alt:"",src:t.imgStr}}),n("p",{staticClass:"tip"},[t._v(" 图片限制5M（使用蓝底照） "),n("span",{staticClass:"error"},[t._v(t._s(t.errorStr))])])])])])},C=[],q=(n(1539),n(8783),n(3948),n(285),n(1637),{name:"PhotoStu",data:function(){return{imgStr:n(9938),errorStr:""}},methods:{onchangeImgFun:function(t){var e=t.target.files[0];console.log(e);var n=e.size;console.log(n);var s=this;n<=512e4?(s.errorStr="",console.log("大小合适"),this.imgStr=window.URL.createObjectURL(t.target.files[0]),this.$bus.$emit("imgStr",this.imgStr)):(console.log("大小不合适"),s.errorStr="图片大小超出范围")}}}),E=q,A=(0,c.Z)(E,x,C,!1,null,"44967fca",null),$=A.exports;function S(t){var e=new Date(t),n=e.getFullYear(),s=e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,r=e.getDate()<10?"0"+e.getDate():e.getDate(),a=e.getHours()<10?"0"+e.getHours():e.getHours(),u=e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes(),i=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds();return n+"-"+s+"-"+r+" "+a+":"+u+":"+i}var j={name:"MessageStu",data:function(){return{student:{timeToday:"",number:"",name:"",yuanxi:"",zhuangye:"",class_:"",because:"",phone:"",address:"",teacher:"",imgStr:"../assets/upload.png"}}},methods:{goqingjia:function(){this.student.timeToday=(new Date).getTime(),this.student.timeToday=S(this.student.timeToday);var t="【 时间：".concat(this.student.timeToday,"，\n                    学号：").concat(this.student.number,"，\n                    姓名：").concat(this.student.name,"，\n                    班级：").concat(this.student.class_,"（").concat(this.student.zhuangye,"），\n                    电话：").concat(this.student.phone,"，\n                    辅导员：").concat(this.student.teacher," 】");w().get("http://139.196.209.237/getdata?da=".concat(t)).then((function(t){console.log("成功",t.data)}),(function(t){console.log("失败",t.message)})),this.$router.push({path:"/QingJia",query:{student:this.student}})}},mounted:function(){var t=this;this.$bus.$on("imgStr",(function(e){t.student.imgStr=e}))},beforeDestroy:function(){this.$bus.$off("imgStr")},components:{PhotoStu:$}},z=j,O=(0,c.Z)(z,f,b,!1,null,null,null),M=O.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"body"},[n("div",{staticClass:"space"}),n("div",{staticClass:"head"},[n("img",{attrs:{src:t.$route.query.student.imgStr,alt:""}})]),n("div",{staticClass:"message"},[n("table",[n("tr",[n("td",[t._v("学生编号")]),n("td",[t._v(t._s(t.$route.query.student.number))])]),n("tr",[n("td",[t._v("姓名")]),n("td",[t._v(t._s(t.$route.query.student.name))])]),n("tr",[n("td",[t._v("院系")]),n("td",[t._v(t._s(t.$route.query.student.yuanxi))])]),n("tr",[n("td",[t._v("专业")]),n("td",[t._v(t._s(t.$route.query.student.zhuangye))])]),n("tr",[n("td",[t._v("班级")]),n("td",[t._v(t._s(t.$route.query.student.class_))])])]),n("hr"),n("table",[t._m(0),t._m(1),t._m(2),t._m(3),n("tr",[n("td",[t._v("请假开始日期")]),n("td",[t._v(t._s(t.time))])]),n("tr",[n("td",[t._v("请假结束日期")]),n("td",[t._v(t._s(t.time))])]),t._m(4),t._m(5),n("tr",[n("td",[t._v("请假事由")]),n("td",[t._v(t._s(t.$route.query.student.because))])]),t._m(6),t._m(7),n("tr",[n("td",[t._v("手机号")]),n("td",[t._v(t._s(t.$route.query.student.phone))])]),n("tr",[n("td",[t._v("请假去向地点")]),n("td",[t._v(t._s(t.$route.query.student.address))])]),t._m(8)])]),t._m(9),n("div",{staticClass:"check"},[n("h3",[t._v("审核流程")]),n("hr"),n("div",[n("table",{attrs:{rules:"cols"}},[n("tr",[n("td",{staticClass:"time",attrs:{valign:"top"}},[n("span",[t._v(t._s(t.time1))])]),t._m(10)]),n("tr",[n("td",{staticClass:"time",attrs:{valign:"top"}},[n("span",[t._v(t._s(t.time1))]),n("span",[t._v("19:33:31")])]),n("td",{attrs:{valign:"top"}},[n("span",[t._v("辅导员审核")]),n("span",[t._v("通过")]),n("span",[t._v("审核人："+t._s(t.$route.query.student.teacher))]),n("span",[t._v("审核意见：同意")])])]),t._m(11)]),n("span",{staticClass:"biao1"},[n("svg",{staticClass:"icon",attrs:{t:"1639842528703",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6018",width:"32",height:"32"}},[n("path",{attrs:{d:"M510.8 129.2c-211.9 0-383.7 171.8-383.7 383.7 0 211.9 171.8 383.7 383.7 383.7 211.9 0 383.7-171.8 383.7-383.7 0-211.9-171.8-383.7-383.7-383.7z m153.3 250.2S494.8 674.2 491.9 676.9c-9.7 9.1-24.8 8.6-33.9-1.1l-109.6-101c-9.1-9.7-8.6-24.8 1.1-33.9 9.7-9.1 24.8-8.6 33.9 1.1l85.8 79.1 153.4-265.7c6.6-11.5 21.3-15.4 32.8-8.8 11.4 6.7 15.3 21.4 8.7 32.8z","p-id":"6019",fill:"#52C7CA"}})])]),n("span",{staticClass:"biao2"},[n("svg",{staticClass:"icon",attrs:{t:"1639842528703",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6018",width:"32",height:"32"}},[n("path",{attrs:{d:"M510.8 129.2c-211.9 0-383.7 171.8-383.7 383.7 0 211.9 171.8 383.7 383.7 383.7 211.9 0 383.7-171.8 383.7-383.7 0-211.9-171.8-383.7-383.7-383.7z m153.3 250.2S494.8 674.2 491.9 676.9c-9.7 9.1-24.8 8.6-33.9-1.1l-109.6-101c-9.1-9.7-8.6-24.8 1.1-33.9 9.7-9.1 24.8-8.6 33.9 1.1l85.8 79.1 153.4-265.7c6.6-11.5 21.3-15.4 32.8-8.8 11.4 6.7 15.3 21.4 8.7 32.8z","p-id":"6019",fill:"#52C7CA"}})])]),n("span",{staticClass:"biao3"},[n("svg",{staticClass:"icon",attrs:{t:"1639842528703",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"6018",width:"32",height:"32"}},[n("path",{attrs:{d:"M510.8 129.2c-211.9 0-383.7 171.8-383.7 383.7 0 211.9 171.8 383.7 383.7 383.7 211.9 0 383.7-171.8 383.7-383.7 0-211.9-171.8-383.7-383.7-383.7z m153.3 250.2S494.8 674.2 491.9 676.9c-9.7 9.1-24.8 8.6-33.9-1.1l-109.6-101c-9.1-9.7-8.6-24.8 1.1-33.9 9.7-9.1 24.8-8.6 33.9 1.1l85.8 79.1 153.4-265.7c6.6-11.5 21.3-15.4 32.8-8.8 11.4 6.7 15.3 21.4 8.7 32.8z","p-id":"6019",fill:"#52C7CA"}})])])])]),t._m(12)])},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("学年")]),n("td",[t._v("2021-2022学年")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("学期")]),n("td",[t._v("不分学期")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("请假类型")]),n("td",[t._v("病假")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("请假性质")]),n("td",[t._v("因私请假")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("请假天数")]),n("td",[t._v("1")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("来源类型")]),n("td",[t._v("学生申请")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("证明材料")]),n("td")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("tr",{staticClass:"prove"},[s("td",{attrs:{colspan:"2"}},[s("img",{attrs:{src:n(1184),alt:""}}),t._v("   qFujedlYMXSiuEWk... ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("出行方式")]),n("td",[t._v("公共交通")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"again"},[n("table",[n("tr",[n("td",{attrs:{colspan:"2"}},[t._v("续假开始时间")])]),n("tr",[n("td",{attrs:{colspan:"2"}},[t._v("续假结束时间")])]),n("tr",[n("td",{attrs:{colspan:"2"}},[t._v("续假天数")])]),n("tr",[n("td",{attrs:{colspan:"2"}},[t._v("续假事由")])]),n("tr",[n("td",[t._v("审核状态")]),n("td",[n("a",[t._v("详细流程")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("td",{attrs:{valign:"top"}},[n("span",[t._v("提交申请")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",{staticClass:"last",attrs:{valign:"top"}}),n("td",{staticClass:"last",attrs:{valign:"top"}},[n("span",[t._v("结束")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"twojia"},[n("div",{staticClass:"left"},[t._v(" 定位销假 ")]),n("div",{staticClass:"right"},[t._v(" 续假申请 ")])])}],N={name:"QingJia",data:function(){return{time:"",time1:""}},created:function(){var t=new Date;this.time=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),this.time1=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+(t.getDate()-1)}},B=N,D=(0,c.Z)(B,P,Z,!1,null,null,null),k=D.exports,F=new _.Z({routes:[{path:"/",redirect:"/MessageStu"},{path:"/MessageStu",component:M},{path:"/QingJia",component:k}]});s.Z.config.productionTip=!1,s.Z.use(_.Z),new s.Z({render:function(t){return t(h)},router:F,beforeCreate:function(){s.Z.prototype.$bus=this}}).$mount("#app")},1184:function(t,e,n){t.exports=n.p+"img/qingjiazhengming.6efc40fa.jpg"},9938:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAMAAAAL34HQAAAAAXNSR0IArs4c6QAAAIRQTFRFp6enycnJvr6+4uLir6+vs7Oz5uXlq6urqampt7e3ra2tsbGxwcHB8O/wtbW1/v3/rain7fn9/Pnu+vv369rN3+v1urq6qKnExMzkxcXFp6ivr7bCvsze9uzfy6enxMPDwbWv3+Dg08S1u6+q3c/D6+rr5dTEytjorLC8t7CptKmnt8HRt3ymDAAAA2BJREFUeNrtXGt3ojAQHXmGR6OIT9CtaLV29///v00IWm27bCFDDTr5kjM5MOceJrncIWFg73meXRS2997b9pV5OWx/HvaKovjq6uKjE7vGyQdzD4MgCBwAn/OA+wCOGwQRAz8SZsgglKYPTAzzsg8CV14tTDcUVwdimAETJhfDoXTCAMTNgSOcuNIJvDsRphyOLpwon2cn8moBKIZB5PvCE/iiiY4xZTJlwoVZ9Yx9OXzlxL9ywr7vBEonkYDlgHEtNBZWzMyDBRxmBqKCCCwzYT375qHyZ2ZOeYsIohGsZWjk3DJyJbqmEoShLG/k3LKIt0jYdNNYQLzVe2HDZsRbJGw6EzaGvqqJt5o8LUrISNh0BcvQd6KhK5ESsibq1NB3IhFE74WNBTHxVt+FjUu8RcKGEjIjpryhwoYSMhI2DwXLoh2ymwibLF8+b0amCZtsvpquX3ZIuLB2yLL5Ypqm6wMOLixhk+WraTIcjtcvKHFEIggZwXQoWooTRxxhoyKYpiUujDiKIOpPeRnBdOztk/Rpn6DEUQgb7aM/2VGiWi9fk7G3mCYocdQXNmUEx5NtvkjGk80KZz1q75CpCE62u7mE9UuuSP04Ml1hU0VwuwMFayRs/TjqEsQpgm+jEyx2RIijJqxzBAWGChbAsYrj7Xgr+yOWn4wgXMBSuCZbHWFj6a3EfOWVEbyCJeJYVFjbK4iZ3jpcWgrVBSzxvOKl3lrES8guYSHoLSzRjAkLcQsdExZi5vMYsLCSfUxYiF+aUVdihHbUWsI64MHC+uyW5YPB5jeOL/rSfB8fktoHMQtdXtfeRhpBbD/lhQZ8qmn7Q3slqLOFnr8mw5qWaihBVwuWV/u0tGAtW798mBPVNqe1Zzr6cx+8ZeguBh39uYWwwWx09OdOhI2ZLE9b6D8jbDqFFdO/GN/mLRI2P5WQdfryId5qImzo6E8T3iKC6D0sixKy/idkLv0cTwnZYwkbi/4hu4uEzEx1SgRBvNUVb9HP8b1PyHR2yEjYECxKyPAIwtAqi4ayPK3ERrCif1ZyBXiv4Mo0qsP+v8Qs+1wdVpXB9eVhnbKWLueqli5XtXS5qqF76jlXZXC5qqXLuSqDy0+1dLmspesoU16laumeb1a1dNXNpZNq+OQkVAV5478FI1GCI1aJdgAAAABJRU5ErkJggg=="}},e={};function n(s){var r=e[s];if(void 0!==r)return r.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,s,r,a){if(!s){var u=1/0;for(c=0;c<t.length;c++){s=t[c][0],r=t[c][1],a=t[c][2];for(var i=!0,o=0;o<s.length;o++)(!1&a||u>=a)&&Object.keys(n.O).every((function(t){return n.O[t](s[o])}))?s.splice(o--,1):(i=!1,a<u&&(u=a));if(i){t.splice(c--,1);var d=r();void 0!==d&&(e=d)}}return e}a=a||0;for(var c=t.length;c>0&&t[c-1][2]>a;c--)t[c]=t[c-1];t[c]=[s,r,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.p="/"}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,s){var r,a,u=s[0],i=s[1],o=s[2],d=0;if(u.some((function(e){return 0!==t[e]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(o)var c=o(n)}for(e&&e(s);d<u.length;d++)a=u[d],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(c)},s=self["webpackChunkqing"]=self["webpackChunkqing"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=n.O(void 0,[998],(function(){return n(1031)}));s=n.O(s)})();
//# sourceMappingURL=app-legacy.721280c7.js.map