(function(t){function r(r){for(var a,i,o=r[0],l=r[1],c=r[2],u=0,m=[];u<o.length;u++)i=o[u],n[i]&&m.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(r);while(m.length)m.shift()();return s.push.apply(s,c||[]),e()}function e(){for(var t,r=0;r<s.length;r++){for(var e=s[r],a=!0,o=1;o<e.length;o++){var l=e[o];0!==n[l]&&(a=!1)}a&&(s.splice(r--,1),t=i(i.s=e[0]))}return t}var a={},n={app:0},s=[];function i(r){if(a[r])return a[r].exports;var e=a[r]={i:r,l:!1,exports:{}};return t[r].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=a,i.d=function(t,r,e){i.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,r){if(1&r&&(t=i(t)),8&r)return t;if(4&r&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var a in t)i.d(e,a,function(r){return t[r]}.bind(null,a));return e},i.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(r,"a",r),r},i.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=r,o=o.slice();for(var c=0;c<o.length;c++)r(o[c]);var p=l;s.push([0,"chunk-vendors"]),e()})({0:function(t,r,e){t.exports=e("56d7")},1:function(t,r){},"10cd":function(t,r,e){"use strict";var a=e("1814"),n=e.n(a);n.a},1814:function(t,r,e){},"56d7":function(t,r,e){"use strict";e.r(r);e("cadf"),e("551c"),e("f751"),e("097d");var a=e("2b0e"),n=e("bb71");e("da64");a["a"].use(n["a"],{iconfont:"md",theme:{primary:"#3F51B5",secondary:"#CE93D8",success:"#3cd1c2",info:"#ffaa2c",error:"#f83e70",black:"#000000"}});var s=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-app",{staticStyle:{"background-image":"linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}},[e("Navbar"),e("v-content",[e("router-view")],1)],1)},i=[],o=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("nav",[a("v-toolbar",{staticClass:"cyan",attrs:{flat:"",app:""}},[a("v-toolbar-side-icon",{staticClass:"red--text hidden-md-and-up",on:{click:function(r){t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"text-uppercase white--text"},[a("v-avatar",{staticClass:"grey lighten-2",attrs:{size:"40"}},[a("img",{attrs:{src:e("57cb"),alt:""}})]),a("span",{staticClass:"font-weight-bold mx-2 white--text white--text hidden-xs-only"},[t._v("Fire Elephant CMU - ช้างไฟ")])],1),t._l(t.links,function(r){return a("v-btn",{key:r.text,staticClass:"hidden-sm-and-down",attrs:{fluid:"",flat:"",router:"",to:r.route}},[a("v-list-tile-action",[a("v-icon",{staticClass:"white--text",attrs:{right:""}},[t._v(t._s(r.icon))])],1),a("v-list-tile-contant",[a("v-list-tile-title",{staticClass:"white--text",attrs:{left:""}},[t._v("\r\n                    "+t._s(r.text)+"\r\n                ")])],1)],1)}),a("v-spacer"),a("span",[a("h3",{staticClass:"white--text hidden-xs-only"},[t._v("Contact Us")])]),a("v-btn",{attrs:{fab:"",small:"",flat:"",color:"gray",href:"https://www.facebook.com/Fire-Elephant-CMU-%E0%B8%8A%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%84%E0%B8%9F-406828930104568/"}},[a("img",{attrs:{src:e("5e4f")}})])],2),a("v-navigation-drawer",{staticClass:"gray-lighten",attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(r){t.drawer=r},expression:"drawer"}},[a("v-layout",{attrs:{column:"","align-center":""}}),a("v-list",t._l(t.links,function(r){return a("v-list-tile",{key:r.text,attrs:{router:"",to:r.route}},[a("v-list-tile-action",[a("v-icon",{staticClass:"grey--text"},[t._v(t._s(r.icon))])],1),a("v-list-tile-contant",[a("v-list-tile-title",{staticClass:"grey--text"},[t._v("\r\n                        "+t._s(r.text)+"\r\n                    ")])],1)],1)}),1)],1)],1)},l=[],c={data:function(){return{drawer:!1,links:[{icon:"place",text:"Map",route:"/"},{icon:"people",text:"ผู้จัดทำ",route:"/team"}]}}},p=c,u=e("0c7c"),m=e("6544"),d=e.n(m),v=e("8212"),g=e("8336"),h=e("132d"),f=e("a722"),b=e("8860"),_=e("ba95"),A=e("40fe"),y=e("5d23"),w=e("f774"),x=e("9910"),k=e("71d9"),C=e("706c"),O=e("2a7f"),E=Object(u["a"])(p,o,l,!1,null,null,null),M=E.exports;d()(E,{VAvatar:v["a"],VBtn:g["a"],VIcon:h["a"],VLayout:f["a"],VList:b["a"],VListTile:_["a"],VListTileAction:A["a"],VListTileTitle:y["a"],VNavigationDrawer:w["a"],VSpacer:x["a"],VToolbar:k["a"],VToolbarSideIcon:C["a"],VToolbarTitle:O["a"]});var j={name:"App",components:{Navbar:M},data:function(){return{}},created:function(){var t=document.createElement("script");t.setAttribute("src","http://api.longdo.com/map/?key=f2bddf86de431afd35f6f7db32664ea1"),document.head.appendChild(t)},mounted:function(){},methods:{}},V=j,T=e("7496"),F=e("549c"),I=Object(u["a"])(V,s,i,!1,null,null,null),S=I.exports;d()(I,{VApp:T["a"],VContent:F["a"]});var L=e("8c4f"),U=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("v-flex",[a("div",{staticStyle:{position:"absolute",width:"100%",height:"100%",top:"0",bottom:"0"},attrs:{id:"map"}}),a("v-flex",[a("v-card",{staticClass:"ma-3 bottom-left cyan",attrs:{xs2:"",sm2:"",lg2:""}},[a("h4",{staticClass:"heading"},[t._v("\n                คำอธิบายความหมายของหมุด\n            ")]),a("img",{attrs:{src:e("bca2")}})])],1)],1)},B=[],R=e("bc3a"),D=e.n(R),N=D.a,P={install:function(t,r){t.prototype.$axios=D.a}},G=e("6c39"),W=e.n(G),X=e("28dd"),Y=e("5118");a["a"].component("vue-friendly-iframe",W.a);var Z={data:function(){return{data_get:{},test:"text",map:{},markers:new Array,long:new Array,lati:new Array,fire_stat:new Array,lati_trans:new Array,long_trans:new Array,trans:new Array,enable:new Array,status_v:new Array,detectors_id:new Array,smoke_v:new Array,Leng:{},temp:{}}},methods:{axiosTest:function(){return N.get("http://202.28.247.52/api/v1/details/devices").then(function(t){return t.data})},myFunctionOnLoad:function(){console.log("call on load...")},getMap:function(){var t=document.createElement("script");t.setAttribute("src","http://api.longdo.com/map/?key=3024cbe278e024cf2503cd2e87002a2d"),document.head.appendChild(t)},createMarker:function(t,r,e,a){this.temp=this.lati_trans[t],this.tooltips_msg="last lat : "+this.temp+" <br>",this.temp=this.long_trans[t],this.tooltips_msg=this.tooltips_msg+"last long : "+this.temp+" <br>",this.temp=this.status_v[t],this.tooltips_msg=this.tooltips_msg+"last status trans : "+this.temp+" <br>",this.temp=this.detectors_id[t],this.tooltips_msg=this.tooltips_msg+" Detector id : "+this.temp+" <br>",this.temp=0!=this.fire_stat[t],this.tooltips_msg=this.tooltips_msg+" fire status : "+this.temp+" <br>",this.temp=0!=this.enable[t],this.tooltips_msg=this.tooltips_msg+" Detector available : "+this.temp+" <br>",this.temp=this.smoke_v[t],this.tooltips_msg=this.tooltips_msg+" Smoke value : "+this.temp+" <br>";var n=new longdo.Marker({lon:r,lat:e},{icon:{url:a},popup:{html:"<div id='tooltips-div' >"+this.tooltips_msg+"</div>"}});this.map.Overlays.add(n)},init:function(){this.map=new longdo.Map({placeholder:document.getElementById("map")}),this.myTimer()},myTimer:function(){var t=this;new Array,new Array,new Array,new Array,new Array,new Array,new Array,new Array,new Array,new Array,new Array,this.data_get.then(function(r){console.log(r),t.map.Overlays.clear();for(var e=0;e<r.data.length;e++)t.status_v.push(r.data[e].status),t.enable.push(r.data[e].available_status),t.long.push(r.data[e].longitude),t.lati.push(r.data[e].latitude),t.fire_stat.push(r.data[e].fire_status),t.lati_trans.push(r.data[e].latitude_trans),t.long_trans.push(r.data[e].longitude_trans),t.detectors_id.push(r.data[e].detector_id),t.smoke_v.push(r.data[e].smoke_v);for(var a=0;a<r.data.length;a++)9==t.status_v[a]?t.createMarker(a,t.long[a],t.lati[a],"http://maps.google.com/mapfiles/ms/micons/green-dot.png"):null!=t.status_v[a]&&(t.fire_stat[a]>0?1==t.fire_stat[a]?t.createMarker(a,t.long[a],t.lati[a],"http://maps.google.com/mapfiles/ms/micons/yellow-dot.png"):2==t.fire_stat[a]?t.createMarker(a,t.long[a],t.lati[a],"http://maps.google.com/mapfiles/ms/micons/red-dot.png"):t.createMarker(a,t.long[a],t.lati[a],"http://maps.google.com/mapfiles/ms/micons/pink-dot.png"):0==t.enable[a]?t.createMarker(a,t.long_trans[a],t.lati_trans[a],"http://maps.google.com/mapfiles/kml/pal3/icon51.png","Test5"):parseFloat(parseInt(1e3*t.lati[a])/1e3,10)!=parseFloat(parseInt(1e3*t.lati_trans[a])/1e3,10)?t.createMarker(a,t.long[a],t.lati[a],"http://maps.google.com/mapfiles/ms/micons/bus.png"):t.createMarker(a,t.long[a],t.lati[a],"http://maps.google.com/mapfiles/ms/micons/green-dot.png"))})}},created:function(){var t=this;setTimeout(function(){t.data_get=Promise.resolve(t.axiosTest()),t.init()},2e3),Object(Y["setInterval"])(function(){t.data_get=Promise.resolve(t.axiosTest()),t.map.Overlays.clear(),t.myTimer()},1e4)},mounted:function(){}},H=Z,K=(e("10cd"),e("b0af")),q=e("0e8f"),z=Object(u["a"])(H,U,B,!1,null,null,null),J=z.exports;d()(z,{VCard:K["a"],VFlex:q["a"]});var Q=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{staticClass:"team",attrs:{xs6:""}},[e("h4",{staticClass:"font-weight-light display-1 black--text mt-3 my-3",attrs:{right:""}},[t._v("ผู้จัดทำ")]),e("v-layout",{attrs:{row:"","justify-start":"",wrap:"","offset-xs1":""}},[e("v-flex",{attrs:{xs12:"",sm5:"",md3:""}},[e("h2",{staticClass:"black--text"},[t._v("\r\n                ที่ปรึกษาโครงการ\r\n            ")]),t._v("\r\n            1. อาจารย์ รศ.ดร.ศันสนีย์ เอื้อพันธ์วิริยะกุล\r\n            "),e("br"),t._v("\r\n2. อาจารย์ รศ.ดร.นิพนธ์ ธีรอำพน\r\n            "),e("br"),e("h2",{staticClass:"black--text"},[t._v("\r\n                ฝ่ายประสานงานและประชาสัมพันธ์\r\n            ")]),t._v("\r\n            1. พนาสนฑ์ มโนรส\r\n            "),e("br"),t._v("\r\n2. พรวิชชา​ สมทรัพย์\r\n            "),e("br"),t._v("\r\n3. รวีวรรณ ชัยสุพัฒนากุล\r\n            "),e("br"),t._v("\r\n4. สุภชาญา ประธาน\r\n            "),e("br"),t._v("\r\n5. กานต์ชนา ปัญญา\r\n            "),e("br"),t._v("\r\n6. ว่าที่ ร.ต.หญิงพรสวรรค์ อัศววุฒิไกร\r\n            "),e("br"),e("h2",[t._v("\r\n                อาสาสมัครติดตั้งเครื่องตรวจจับควันไฟ\r\n            ")]),t._v("\r\n            1. ปกรณ์ แสงงาม\r\n            "),e("br"),t._v("\r\n2. ณัฐพงษ์ ปัญญา\r\n            "),e("br"),t._v("\r\n3. ปิยะณัฐ บุหรัน\r\n            "),e("br"),t._v("\r\n4. สุภชาญา ประธาน\r\n            "),e("br"),t._v("\r\n5. ธนาคม หัสแดง\r\n            "),e("br"),t._v("\r\n6. วิธวินท์ อัจฉริยวิริยะ\r\n            "),e("br"),t._v("\r\n7. พนาสนฑ์ มโนรส\r\n            "),e("br"),t._v("\r\n8. ณัฐภัทร การะเกษ\r\n            "),e("br"),t._v("\r\n9. Wassim TENACHI\r\n            "),e("br"),t._v("\r\n10. Méline KIEFFER\r\n            "),e("br"),t._v("\r\n11. Lucas LO GIUDICE\r\n            "),e("br"),t._v("\r\n12. Nathn MANISCALCO\r\n            "),e("br"),t._v("\r\n13. Zegui FOKY\r\n            "),e("br"),t._v("\r\n14. Mourad EL OUALKADI\r\n            "),e("br"),t._v("\r\n15. ภาณุวิทย์ ผลเกิด\r\n            "),e("br"),t._v("\r\n16. พรวิชชา​ สมทรัพย์\r\n            "),e("br")]),e("v-flex",{attrs:{xs12:"",sm5:"",md3:""}},[e("h2",[t._v("\r\n                    ผู้พัฒนาอุปกรณ์ Smoke Detectors\r\n                ")]),t._v("\r\n                1. สมนึก สุระธง\r\n                "),e("br"),t._v("\r\n2. นายจักรภพ ใหม่เสน\r\n                "),e("br"),t._v("\r\n3. ฤทธิพงศ์ วงค์เขื่อนแก้ว\r\n                "),e("br"),t._v("\r\n4. กิตติยา ทุ่นศิริ\r\n                "),e("br"),t._v("\r\n5. สุรักษ์ อุดมสม\r\n                "),e("br"),t._v("\r\n6. พนาสนฑ์ มโนรส\r\n                "),e("br"),t._v("\r\n7. ณัฐภัทร การะเกษ\r\n                "),e("br"),t._v("\r\n8. พรวิชชา​ สมทรัพย์\r\n                "),e("br"),t._v("\r\n9. สุภชาญา ประธาน\r\n                "),e("br"),t._v("\r\n10. ธนาคม หัสแดง\r\n                "),e("br"),t._v("\r\n11. ปกรณ์ แสงงาม\r\n                "),e("br"),t._v("\r\n12. อภิวัฒน์ บุตรวงค์\r\n                "),e("br"),e("h2",[t._v("\r\n                    ผู้พัฒนาซอฟต์แวร์เว็บไซต์และอัลกอริทึมเบื้องหลัง\r\n                ")]),t._v("\r\n                1. ภาณุวิทย์ ผลเกิด\r\n                "),e("br"),t._v("\r\n2. ณัฐภัทร การะเกษ\r\n                "),e("br"),t._v("\r\n3. พรวิชชา​ สมทรัพย์\r\n                "),e("br"),t._v("\r\n4. รัชชานนท์ สมทา\r\n                "),e("br"),t._v("\r\n5. นันทวัฒน์  วิเศษทรัพย์\r\n                "),e("br")]),e("v-flex",{attrs:{xs12:"",sm6:"",md6:""}},[e("img",{attrs:{height:"3%",src:"/img/CILab_logo.png",alt:""}}),e("img",{attrs:{height:"2%",src:"/img/AIS-logo-1.png",alt:""}}),e("img",{attrs:{height:"3%",src:"/img/Chiang_Mai_University_Logo.png",alt:""}}),e("img",{attrs:{height:"3%",src:"/img/logo-th.png",alt:""}})])],1)],1)},$=[],tt={data:function(){return{team:[{name:"Non",role:"Web developer",avatar:"/img/avatar-2.png"},{name:"Ryu",role:"Graphic designer",avatar:"/img/avatar-2.png"},{name:"Chun Li",role:"Web developer",avatar:"/img/avatar-3.png"},{name:"Gouken",role:"Social media maverick",avatar:"/img/avatar-4.png"},{name:"Yoshi",role:"Sales guru",avatar:"/img/avatar-5.png"}]}}},rt=tt,et=Object(u["a"])(rt,Q,$,!1,null,null,null),at=et.exports;d()(et,{VFlex:q["a"],VLayout:f["a"]}),a["a"].use(L["a"]);var nt=new L["a"]({mode:"history",base:"/",routes:[{path:"/",name:"project",component:J},{path:"/team",name:"team",component:at}]});a["a"].config.productionTip=!1,a["a"].use(X["a"]),a["a"].use(P),new a["a"]({router:nt,render:function(t){return t(S)}}).$mount("#app")},"57cb":function(t,r,e){t.exports=e.p+"img/logo.46fc0842.jpg"},"5e4f":function(t,r){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAL2AAAC9gH/U2/cAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAIFQTFRF////M2aZOl2XOlqaOliZPFmYOliZPFqXO1mYO1mYO1mYO1mYO1mYPVuZQF2aRWGdS2egUGujUm2kVG6laH+waoGxbYOycYe0coi1eI24fpK7f5K8f5O8hZe/jJ7Djp/El6fIp7XRvsjd5+vy7fD27vH28PL38/X5+fr8/f7+////Jc+68wAAAAx0Uk5TAAUWMEtqf4Cy0Ob69Vq7RgAAAL9JREFUKM91klkWgyAMRVExItDBDlZrBzu32f8CazEg9Oj7glzICwmM9Yo5CCkF8Jj5ijKlSQqiIZ7k2lOe2HiqdCCV0nkbX5RNUxhi7kQ2z+GNiHWf7eeTUXz2RAc0dHXaRFvEz2lfkE3MuLU8It6GAjgDWpUXxEdVLbXNJWh1R6MNbQWTIVjTVjpwviK+2nbugBg3F878D8B0ue6BAege6FoSAPCa6APTRNt2D6jEH9SqrnfhoKZHO/0Zxr7PF9/hHMce6zj3AAAAAElFTkSuQmCC"},bca2:function(t,r,e){t.exports=e.p+"img/pin.d2c6a180.png"}});
//# sourceMappingURL=app.34f0ffa1.js.map