(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-619876d1","chunk-2d0dd11c"],{3408:function(t,e,a){},"808f":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{attrs:{to:"/"+t.user.name,custom:""},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.navigate,s=e.href;e.isActive;return[a("a",{staticStyle:{"text-decoration":"none",color:"black"},attrs:{href:s,disabled:""}},[a("v-avatar",{staticClass:"grey lighten-3",attrs:{size:t.large?80:40},on:{click:function(t){return t.stopPropagation(),r(t)},mousedown:function(t){t.stopPropagation()},touchstart:function(t){t.stopPropagation()}}},[t.user.pro_pic&&!t.error?a("img",{attrs:{src:t.baseURL+t.user.pro_pic},on:{error:function(e){t.error=!0}}}):a("span",{style:"font-size:"+(t.large?2:1.5)+"rem"},[t._v(t._s(t.user.name.charAt(0)))])])],1)]}}])})},s=[],n=a("a1bc"),i=a.n(n),o={name:"UserAvatar",props:{user:{type:Object,required:!0},large:{type:Boolean,default:!1}},data:function(){return{baseURL:i.a.imageUrl,error:!1}},created:function(){},beforeUpdate:function(){this.init()},methods:{init:function(){this.error=!1}}},c=o,u=a("2877"),l=a("6544"),f=a.n(l),d=a("8212"),h=Object(u["a"])(c,r,s,!1,null,"9ef51b4a",null);e["default"]=h.exports;f()(h,{VAvatar:d["a"]})},8212:function(t,e,a){"use strict";var r=a("5530"),s=(a("a9e3"),a("3408"),a("a9ad")),n=a("24b2"),i=a("a236"),o=a("80d2"),c=a("58df");e["a"]=Object(c["a"])(s["a"],n["a"],i["a"]).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes:function(){return Object(r["a"])({"v-avatar--left":this.left,"v-avatar--right":this.right},this.roundedClasses)},styles:function(){return Object(r["a"])({height:Object(o["f"])(this.size),minWidth:Object(o["f"])(this.size),width:Object(o["f"])(this.size)},this.measurableStyles)}},render:function(t){var e={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return t("div",this.setBackgroundColor(this.color,e),this.$slots.default)}})}}]);