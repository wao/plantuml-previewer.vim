webpackJsonp([1],[function(t,e,i){t.exports=i(1)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(2),h=i(4),r=i(16);i.n(r);new n.a({el:"#app",render:function(t){return t(h.a)}})},,,function(t,e,i){"use strict";function n(t){i(5)}var h=i(7),r=i(15),s=i(6),a=n,l=s(h.a,r.a,a,"data-v-6d03f02e",null);e.a=l.exports},function(t,e){},,function(t,e,i){"use strict";var n=i(8),h=(i.n(n),i(9)),r=(i.n(h),i(10)),s=i.n(r);e.a={data:function(){return{img:{realWidth:null,realHeight:null,width:null,height:null,whRate:null},center:{left:null,top:null},baseUrl:"../tmp.svg",url:null}},methods:{boxReset:function(){var t=this.$refs.wrapper;t.clientWidth/t.clientHeight>this.img.whRate?this.boxResize({height:t.clientHeight}):this.boxResize({width:t.clientWidth}),this.boxCenter()},boxResize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.width,i=void 0===e?null:e,n=t.height,h=void 0===n?null:n,r=this.$refs.box,s=this.$refs.img;i?(this.img.width=i,this.img.height=i/this.img.whRate):h&&(this.img.height=h,this.img.width=h*this.img.whRate),s.width=r.width=this.img.width,s.height=r.height=this.img.height},boxCenter:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.top,i=void 0===e?.5:e,n=t.left,h=void 0===n?.5:n;i<0&&(i=0),i>1&&(i=1),h<0&&(h=0),h>1&&(h=1);var r=this.$refs.wrapper,s=this.$refs.box;this.center.left=h,this.center.top=i,s.style.top=r.clientHeight/2-i*this.img.height+"px",s.style.left=r.clientWidth/2-h*this.img.width+"px"},bindEvent:function(){var t=this,e=this.$refs.wrapper,i=this.$refs.box;new s.a(i).on("dragEnd",function(n){var h=i.style,r=h.top,s=h.left;r=parseFloat(r),s=parseFloat(s),t.center.top=(e.clientHeight/2-r)/t.img.height,t.center.left=(e.clientWidth/2-s)/t.img.width}),Object(n.addWheelListener)(e,function(e){e.preventDefault();var i=t.center,n=i.top,h=i.left;e.wheelDelta>0?(t.boxResize({width:1.1*t.img.width}),t.boxCenter({top:n,left:h})):(t.boxResize({width:.9*t.img.width}),t.boxCenter({top:n,left:h}))})},reloadImage:function(){var t=this,e=this.baseUrl+"?"+Date.now(),i=new Image;i.src=e,i.addEventListener("load",function(){t.url=e,t.img.realWidth=i.width,t.img.realHeight=i.height;var n=i.width/i.height;t.img.whRate!==n&&(t.$refs.img.height=t.$refs.img.width/n,t.img.whRate=n)})}},mounted:function(){var t=this;this.$once("loadedImage",this.boxReset.bind(this)),this.$refs.img.complete&&this.$emit("loadedImage"),this.bindEvent(),this.reloadImage(),setInterval(function(){t.reloadImage()},1e3)}}},,function(t,e,i){t.exports=i.p+"4ac906a043fa858bb7707982409fbe07.svg"},,,,,,function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"wrapper",on:{dblclick:t.boxReset}},[i("div",{ref:"box",staticClass:"box"},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],ref:"img",style:{width:t.img.width,height:t.img.height},attrs:{src:t.url},on:{load:function(){return t.$emit("loadedImage")}}})])])},h=[],r={render:n,staticRenderFns:h};e.a=r},function(t,e){}],[0]);
//# sourceMappingURL=client.39729753.js.map