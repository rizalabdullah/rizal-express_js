(this["webpackJsonpreact-express"]=this["webpackJsonpreact-express"]||[]).push([[0],{37:function(e,t,c){},48:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(30),s=c.n(r),i=c(6),j=c(2),l=(c(37),c(0)),b=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)("div",{className:"navbar",children:[Object(l.jsx)("h4",{className:"navbar-brand",children:"React x Express"}),Object(l.jsxs)("ul",{className:"link-wrapper",children:[Object(l.jsx)("li",{className:"link",children:Object(l.jsx)(i.c,{exact:!0,to:"/",children:"Home"})}),Object(l.jsx)("li",{className:"link",children:Object(l.jsx)(i.c,{to:"/tambah",children:"Tambah"})})]})]})})},o=c(11),d=c(3),u=c(5),h=c.n(u),O=(c(48),c(12)),p=c.n(O),x=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(d.a)(r,2),b=s[0],u=s[1],O=Object(a.useState)(""),x=Object(d.a)(O,2),m=x[0],f=x[1],v=Object(a.useState)(""),g=Object(d.a)(v,2),k=g[0],N=g[1],y=Object(a.useState)(""),S=Object(d.a)(y,2),w=S[0],C=S[1],P=Object(j.g)().id;Object(a.useEffect)((function(){D()}),[]);var D=function(){var e=Object(o.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:5000/api/v3/product/".concat(P));case 2:t=e.sent,n(t.data._id),u(t.data.name),f(t.data.price),N(t.data.stock),C(t.data.image_url),console.log(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)(i.b,{to:"/",className:"btn btn-primary",children:"Kembali"}),Object(l.jsx)("table",{className:"table",children:Object(l.jsxs)("tbody",{children:[Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"ID"}),Object(l.jsx)("td",{children:c})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Name"}),Object(l.jsx)("td",{children:b})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Price"}),Object(l.jsx)("td",{children:m})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Stock"}),Object(l.jsx)("td",{children:k})]}),Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:"Image"}),Object(l.jsx)("td",{children:Object(l.jsx)("img",{src:w,style:{width:"90px",height:"90px"},alt:""})})]})]})})]})},m=c(20),f=function(e){return"checkbox"===e.type?Object(l.jsxs)("div",{children:[Object(l.jsx)("input",Object(m.a)({className:e.error&&"is-invalid"},e)),Object(l.jsx)("label",{children:e.label}),e.error&&e.error.map((function(e){return Object(l.jsxs)("p",{className:"invalid",children:["* ",e]},e)}))]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:e.label}),Object(l.jsx)("input",Object(m.a)({className:"form-control ".concat(e.error&&"is-invalid")},e)),e.error&&e.error.map((function(e){return Object(l.jsxs)("p",{className:"invalid",children:["* ",e]},e)}))]})},v=function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(d.a)(r,2),i=s[0],b=s[1],u=Object(a.useState)(""),O=Object(d.a)(u,2),x=O[0],m=O[1],v=Object(a.useState)(""),g=Object(d.a)(v,2),k=g[0],N=g[1],y=Object(j.g)().id,S=Object(j.f)(),w=function(){var e=Object(o.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("name",c),a.append("price",i),a.append("stock",x),a.append("image",k),e.next=8,p.a.put("http://localhost:5000/api/v3/product/".concat(y),a).then((function(){S.push("/")})).catch((function(e){console.log(e)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){C()}),[]);var C=function(){var e=Object(o.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:5000/api/v3/product/".concat(y));case 2:t=e.sent,n(t.data.name),b(t.data.price),m(t.data.stock),console.log(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"main",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h2",{children:"Edit Produk"}),Object(l.jsx)("br",{}),Object(l.jsxs)("form",{onSubmit:w,autoComplete:"off",children:[Object(l.jsx)(f,{name:"name",type:"text",placeholder:"Nama Produk...",label:"Nama",value:c,onChange:function(e){return n(e.target.value)}}),Object(l.jsx)(f,{name:"price",type:"number",placeholder:"Harga Produk...",label:"Harga",value:i,onChange:function(e){var t=e.target.value;b(t)}}),Object(l.jsx)(f,{name:"stock",type:"number",placeholder:"Stock Produk...",label:"Stock",value:x,onChange:function(e){var t=e.target.value;m(t)}}),Object(l.jsx)(f,{name:"image",type:"file",placeholder:"Gambar Produk...",label:"Image",onChange:function(e){var t=e.target.files[0];N(t)}}),Object(l.jsx)(f,{name:"status",type:"checkbox",label:"Active",defaultChecked:!0}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Simpan"})]})]})})},g=(c(67),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(d.a)(r,2),j=s[0],b=s[1];Object(a.useEffect)((function(){u()}),[]);var u=function(){var e=Object(o.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("http://localhost:5000/api/v3/product");case 2:t=e.sent,n(t.data),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(){var e=Object(o.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.delete("http://localhost:5000/api/v3/product/".concat(t));case 2:u();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=c.filter((function(e){return e.name.toLowerCase().includes(j.toLowerCase())}));return Object(l.jsxs)("div",{className:"main",children:[Object(l.jsx)(i.b,{to:"/tambah",className:"btn btn-primary",children:"Tambah Produk"}),Object(l.jsx)("div",{className:"search",onChange:function(e){return b(e.target.value)},children:Object(l.jsx)("input",{type:"text",placeholder:"Masukan kata kunci..."})}),Object(l.jsxs)("table",{className:"table",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"ID"}),Object(l.jsx)("th",{children:"Name"}),Object(l.jsx)("th",{className:"text-right",children:"Price"}),Object(l.jsx)("th",{className:"text-right",children:"Stock"}),Object(l.jsx)("th",{className:"text-right",children:"Image"}),Object(l.jsx)("th",{className:"text-center",children:"Action"})]})}),Object(l.jsx)("tbody",{children:x.map((function(e,t){return Object(l.jsxs)("tr",{children:[Object(l.jsx)("td",{children:t+1}),Object(l.jsx)("td",{children:e.name}),Object(l.jsx)("td",{className:"text-right",children:e.price}),Object(l.jsx)("td",{className:"text-right",children:e.stock}),Object(l.jsx)("td",{className:"text-right",children:Object(l.jsx)("img",{src:e.image_url,alt:"",style:{width:"80px",height:"80px"}})}),Object(l.jsxs)("td",{className:"text-center",children:[Object(l.jsx)(i.b,{to:"/detail/".concat(e._id),className:"btn btn-sm btn-info",children:"Detail"}),Object(l.jsx)(i.b,{to:"/edit/".concat(e._id),className:"btn btn-sm btn-warning",children:"Edit"}),Object(l.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){!0===window.confirm("Apakah anda ingin menghapus?")&&O(e._id)},children:"Delete"})]})]},t)}))})]})]})}),k=(c(68),function(){var e=Object(a.useState)(""),t=Object(d.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(""),s=Object(d.a)(r,2),i=s[0],b=s[1],u=Object(a.useState)(""),O=Object(d.a)(u,2),x=O[0],m=O[1],v=Object(a.useState)(""),g=Object(d.a)(v,2),k=g[0],N=g[1],y=Object(j.f)(),S=function(){var e=Object(o.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("name",c),a.append("price",i),a.append("stock",x),a.append("image",k),e.next=8,p.a.post("http://localhost:5000/api/v3/product/",a).then((function(){y.push("/")})).catch((function(e){console.log(e)}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsx)("div",{className:"main",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("h2",{children:"Tambah Produk"}),Object(l.jsx)("br",{}),Object(l.jsxs)("form",{onSubmit:S,autoComplete:"off",children:[Object(l.jsx)(f,{name:"name",type:"text",placeholder:"Nama Produk...",label:"Nama",onChange:function(e){var t=e.target.value;n(t)}}),Object(l.jsx)(f,{name:"price",type:"number",placeholder:"Harga Produk...",label:"Harga",onChange:function(e){var t=e.target.value;b(t)}}),Object(l.jsx)(f,{name:"stock",type:"number",placeholder:"Stock Produk...",label:"Stock",onChange:function(e){var t=e.target.value;m(t)}}),Object(l.jsx)(f,{name:"image",type:"file",placeholder:"Gambar Produk...",label:"Image",onChange:function(e){var t=e.target.files[0];N(t)}}),Object(l.jsx)(f,{name:"status",type:"checkbox",label:"Active",defaultChecked:!0}),Object(l.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Simpan"})]})]})})}),N=function(){return Object(l.jsx)("div",{children:Object(l.jsxs)(i.a,{children:[Object(l.jsx)(b,{}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,children:function(){return Object(l.jsx)(g,{})}}),Object(l.jsx)(j.a,{path:"/detail/:id",children:function(){return Object(l.jsx)(x,{})}}),Object(l.jsxs)(j.a,{path:"/edit/:id",children:[" ",Object(l.jsx)(v,{})]}),Object(l.jsx)(j.a,{path:"/tambah",children:function(){return Object(l.jsx)(k,{})}})]})]})})},y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};c(69);s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),y()}},[[70,1,2]]]);
//# sourceMappingURL=main.1c3cf4d5.chunk.js.map