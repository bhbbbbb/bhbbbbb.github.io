(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ebd8f30"],{9306:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-content",{attrs:{id:"home"}},[e("router-view")],1)},a=[],i={name:"CoreView"},r=i,s=e("2877"),c=e("6544"),d=e.n(c),u=(e("daaf"),e("d10f")),f=u["a"].extend({name:"v-content",props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,e=t.top,o=t.right,a=t.footer,i=t.insetFooter,r=t.bottom,s=t.left;return{paddingTop:"".concat(e+n,"px"),paddingRight:"".concat(o,"px"),paddingBottom:"".concat(a+i+r,"px"),paddingLeft:"".concat(s,"px")}}},render:function(t){var n={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,n,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}}),p=Object(s["a"])(r,o,a,!1,null,null,null);n["default"]=p.exports;d()(p,{VContent:f})},d10f:function(t,n,e){"use strict";var o=e("2b0e");n["a"]=o["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},daaf:function(t,n,e){}}]);