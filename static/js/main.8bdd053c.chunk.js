(this.webpackJsonpmultistepform=this.webpackJsonpmultistepform||[]).push([[0],{100:function(e,t,a){},237:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(21),i=a.n(l),c=(a(99),a(100),a(93)),o=a(13),s=a(14),u=a(16),m=a(15),p=a(22),h=a.n(p),f=a(23),b=a.n(f),v=a(25),d=a.n(v),E=a(24),k=a.n(E),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Masukan Identitas Anda"}),r.a.createElement(d.a,{hintText:"Masukkan nama depan",floatingLabelText:"Nama depan",onChange:a("firstName"),defaultValue:t.firstName}),r.a.createElement(d.a,{hintText:"Masukkan nama belakang",floatingLabelText:"Nama belakang",onChange:a("lastName"),defaultValue:t.lastName}),r.a.createElement(d.a,{hintText:"Masukkan Email",floatingLabelText:"Alamat email",onChange:a("email"),defaultValue:t.email}),r.a.createElement(k.a,{label:"Continue",primary:!0,style:g.button,onClick:this.continue})))}}]),a}(r.a.Component),g={button:{margin:15}},x=y,C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.values,a=e.handleChange;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Masukan Identitas Personal Anda"}),r.a.createElement(d.a,{hintText:"Masukkan status okupasi",floatingLabelText:"Status okupasi",onChange:a("occupation"),defaultValue:t.occupation}),r.a.createElement(d.a,{hintText:"Masukkan Kota",floatingLabelText:"Kota",onChange:a("city"),defaultValue:t.city}),r.a.createElement(d.a,{hintText:"Masukkan Deskripsi",floatingLabelText:"Deskripsikan diri Anda",onChange:a("bio"),defaultValue:t.bio}),r.a.createElement(k.a,{label:"Continue",primary:!0,style:T.button,onClick:this.continue}),r.a.createElement(k.a,{label:"Back",primary:!1,style:T.button,onClick:this.back})))}}]),a}(r.a.Component),T={button:{margin:15}},S=C,j=a(26),O=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).continue=function(t){t.preventDefault(),e.props.nextStep()},e.back=function(t){t.preventDefault(),e.props.prevStep()},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.values,t=(e=void 0===e?this.props:e).firstName,a=e.lastName,n=e.email,l=e.occupation,i=e.city,c=e.bio;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Konfirmasi Identitas Anda"}),r.a.createElement(j.List,null,r.a.createElement(j.ListItem,{primaryText:"Nama Awal",secondaryText:t}),r.a.createElement(j.ListItem,{primaryText:"Nama Belakang",secondaryText:a}),r.a.createElement(j.ListItem,{primaryText:"Email",secondaryText:n}),r.a.createElement(j.ListItem,{primaryText:"Status Pendidikan",secondaryText:l}),r.a.createElement(j.ListItem,{primaryText:"Kota",secondaryText:i}),r.a.createElement(j.ListItem,{primaryText:"Keterangan",secondaryText:c})),r.a.createElement(k.a,{label:"Konfirmasi dan Lanjut",primary:!0,style:N.button,onClick:this.continue}),r.a.createElement(k.a,{label:"Back",primary:!1,style:N.button,onClick:this.back})))}}]),a}(r.a.Component),N={button:{margin:15}},w=O,L=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.values;return r.a.createElement(h.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{title:"Berhasil"}),r.a.createElement("h1",null,"Terima kasih telah mengisi formulir"),r.a.createElement("p",null,e.firstName)))}}]),a}(r.a.Component),A=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={step:1,firstName:"",lastName:"",email:"",occupation:"",city:"",bio:""},e.nextStep=function(){var t=e.state.step;e.setState({step:t+1})},e.prevStep=function(){var t=e.state.step;e.setState({step:t-1})},e.handleChange=function(t){return function(a){e.setState(Object(c.a)({},t,a.target.value))}},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state.step,t=this.state,a={firstName:t.firstName,lastName:t.lastName,email:t.email,occupation:t.occupation,city:t.city,bio:t.bio};switch(e){case 1:return r.a.createElement(x,{nextStep:this.nextStep,handleChange:this.handleChange,values:a});case 2:return r.a.createElement(S,{nextStep:this.nextStep,prevStep:this.prevStep,handleChange:this.handleChange,values:a});case 3:return r.a.createElement(w,{nextStep:this.nextStep,prevStep:this.prevStep,values:a});case 4:return r.a.createElement(L,{values:a});default:return r.a.createElement("h1",null,"Error Page")}}}]),a}(r.a.Component);var I=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(237)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.8bdd053c.chunk.js.map