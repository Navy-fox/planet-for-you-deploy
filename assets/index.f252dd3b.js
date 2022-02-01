var w=Object.defineProperty;var B=(e,s,u)=>s in e?w(e,s,{enumerable:!0,configurable:!0,writable:!0,value:u}):e[s]=u;var d=(e,s,u)=>(B(e,typeof s!="symbol"?s+"":s,u),u);import{d as E,u as O,r as g,e as T,c as i,a as o,w as b,v as y,b as p,o as n,t as U,f as V,g as f,h as I,i as P,T as F,j as k,F as h,k as C,l as M,m as N,n as q,p as G,q as j}from"./vendor.195162b5.js";const J=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const t of l.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&a(t)}).observe(document,{childList:!0,subtree:!0});function u(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(r){if(r.ep)return;r.ep=!0;const l=u(r);fetch(r.href,l)}};J();var R="/planet-for-you-deploy/assets/mdi_close-circle-outline.fb0be55d.svg";var v=(e,s)=>{const u=e.__vccOpts||e;for(const[a,r]of s)u[a]=r;return u};const H=E({name:"ModalProfile",data(){return{form:{id:-1,first_name:"",last_name:"",email:"",avatar:""},editMode:!1,v$:O()}},validations:()=>({form:{email:{required:g,email:T},first_name:{required:g},last_name:{required:g}}}),methods:{closeModal(){this.$emit("update:modelValue")},copyUser(){this.form=JSON.parse(JSON.stringify(this.user))},onClickCanselBtn(){this.copyUser(),this.editMode=!1},onDeleteUser(){this.$store.commit("DELETE_USER",this.form),this.closeModal()},onEditUser(){this.editMode=!1,this.$store.commit("EDIT_USER",this.form),this.closeModal()}},props:{user:{type:Object,required:!0}},created(){this.copyUser()}}),K={class:"overlay"},z={class:"modal-body modal-profile"},Q={class:"modal-profile__user-info user-info"},W=["src"],X={action:"",class:"user-info__form form"},Y={class:"form__fieldset"},Z=o("label",{class:"form__label"},"Name:",-1),x=["disabled"],ee={class:"form__fieldset"},se=o("label",{class:"form__label"},"Last name:",-1),oe=["disabled"],te={class:"form__fieldset"},ue=o("label",{class:"form__label"},"e-mail:",-1),re=["disabled"],ae={class:"modal-profile__action"},ne=["disabled"];function le(e,s,u,a,r,l){return n(),i("div",K,[o("div",z,[o("img",{src:R,alt:"",class:"modal-body__close",onClick:s[0]||(s[0]=(...t)=>e.closeModal&&e.closeModal(...t))}),o("div",Q,[o("img",{src:e.user.avatar,alt:"",class:"user-info__img"},null,8,W),o("form",X,[o("fieldset",Y,[Z,b(o("input",{class:"form__input","onUpdate:modelValue":s[1]||(s[1]=t=>e.form.first_name=t),disabled:!e.editMode,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F"},null,8,x),[[y,e.form.first_name]])]),o("fieldset",ee,[se,b(o("input",{class:"form__input","onUpdate:modelValue":s[2]||(s[2]=t=>e.form.last_name=t),disabled:!e.editMode,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E"},null,8,oe),[[y,e.form.last_name]])]),o("fieldset",te,[ue,b(o("input",{class:"form__input","onUpdate:modelValue":s[3]||(s[3]=t=>e.form.email=t),disabled:!e.editMode,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"},null,8,re),[[y,e.form.email]])])])]),o("div",ae,[e.editMode?p("",!0):(n(),i("button",{key:0,class:"modal-profile__btn",onClick:s[4]||(s[4]=(...t)=>e.onDeleteUser&&e.onDeleteUser(...t))}," \u0423\u0434\u0430\u043B\u0438\u0442\u044C ")),e.editMode?p("",!0):(n(),i("button",{key:1,class:"modal-profile__btn",onClick:s[5]||(s[5]=t=>e.editMode=!0)}," \u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C ")),e.editMode?(n(),i("button",{key:2,class:"modal-profile__btn",onClick:s[6]||(s[6]=(...t)=>e.onClickCanselBtn&&e.onClickCanselBtn(...t))}," \u041E\u0442\u043C\u0435\u043D\u0430 ")):p("",!0),e.editMode?(n(),i("button",{key:3,class:"modal-profile__btn",onClick:s[7]||(s[7]=(...t)=>e.onEditUser&&e.onEditUser(...t)),disabled:e.v$.$invalid}," \u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C ",8,ne)):p("",!0)])])])}var S=v(H,[["render",le]]);const ie=E({name:"CardUser",components:{ModalProfile:S},props:{user:{type:Object,required:!0}},methods:{openModal(){this.modal.open=!0}},data:()=>({modal:{open:!1}})}),de=["src"],me={class:"card-user__info info"},_e={class:"info__name"},pe={class:"info__email"};function ce(e,s,u,a,r,l){const t=C("ModalProfile");return n(),i(h,null,[o("div",{class:"card-user",onClick:s[0]||(s[0]=V((..._)=>e.openModal&&e.openModal(..._),["stop"]))},[o("img",{src:e.user.avatar,alt:"",class:"card-user__img"},null,8,de),o("div",me,[o("p",_e,U(e.user.first_name),1),o("p",pe,U(e.user.email),1)])]),(n(),f(k,{to:"#app"},[I(F,{name:"modal",appear:""},{default:P(()=>[e.modal.open?(n(),f(t,{key:0,modelValue:e.modal.open,"onUpdate:modelValue":s[1]||(s[1]=_=>e.modal.open=_),user:e.user},null,8,["modelValue","user"])):p("",!0)]),_:1})]))],64)}var fe=v(ie,[["render",ce]]);const he=E({name:"ModalLog",methods:{closeModal(){this.$emit("update:modelValue")}},computed:{logs(){return this.$store.state.logs.reverse()}}}),Ee={class:"overlay"},ve={class:"modal-body"},$e={class:"modal-log"},De=o("tr",null,[o("th",null,"\u0412\u0440\u0435\u043C\u044F"),o("th",null,"Id \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F"),o("th",null,"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"),o("th",null,"\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435")],-1);function ge(e,s,u,a,r,l){return n(),i("div",Ee,[o("div",ve,[o("img",{src:R,alt:"",class:"modal-body__close",onClick:s[0]||(s[0]=(...t)=>e.closeModal&&e.closeModal(...t))}),o("div",$e,[o("table",null,[De,(n(!0),i(h,null,M(e.logs,(t,_)=>(n(),i("tr",{key:_},[(n(!0),i(h,null,M(t,(m,D)=>(n(),i("td",{key:D},U(m),1))),128))]))),128))])])])])}var be=v(he,[["render",ge]]);const ye=E({components:{ModalLog:be,ModalProfile:S,CardUser:fe},data:()=>({modal:{open:!1}}),computed:{users(){return this.$store.state.users}},methods:{updateUsers(){this.$store.dispatch("UPDATE_USERS")}},mounted(){this.$store.dispatch("LOAD_USERS")}}),Ue={id:"app",class:"app"},Ce=o("div",{class:"header"},null,-1),Me={class:"main wrapper"},ke=o("h1",{class:"main__title"},"Hello ReqRes users!",-1),Re={class:"main__actions"};function Se(e,s,u,a,r,l){const t=C("CardUser"),_=C("ModalLog");return n(),i(h,null,[o("div",Ue,[Ce,o("div",Me,[ke,(n(!0),i(h,null,M(e.users,(m,D)=>(n(),f(t,{key:D,user:m},null,8,["user"]))),128)),o("div",Re,[o("button",{class:"main__btn",onClick:s[0]||(s[0]=(...m)=>e.updateUsers&&e.updateUsers(...m))}," \u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439 "),o("button",{class:"main__btn",onClick:s[1]||(s[1]=m=>e.modal.open=!0)}," \u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0441\u043E\u0431\u044B\u0442\u0438\u0439 ")])])]),(n(),f(k,{to:"#app"},[e.modal.open?(n(),f(_,{key:0,modelValue:e.modal.open,"onUpdate:modelValue":s[2]||(s[2]=m=>e.modal.open=m)},null,8,["modelValue"])):p("",!0)]))],64)}var Le=v(ye,[["render",Se]]);class Ae{constructor(s){d(this,"id");d(this,"avatar");d(this,"email");d(this,"first_name");d(this,"last_name");if(!s)throw new Error("\u041C\u043E\u0434\u0435\u043B\u044C \u043D\u0435 \u0431\u044B\u043B\u0430 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u0430!");if(s.id<=0)throw new Error("\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u044B\u0439 User ID");this.avatar=String(s.avatar),this.email=String(s.email),this.first_name=String(s.first_name),this.id=s.id,this.last_name=s.last_name}}const we=N.create({baseURL:"https://reqres.in"}),L=async()=>{try{return(await we.get("/api/users",{params:{page:2}})).data.data||[]}catch{return[]}};class ${constructor(s,u,a){d(this,"time");d(this,"userId");d(this,"work");d(this,"message");this.time=new Date,this.userId=s,this.work=u,this.message=a||""}}var c;(function(e){e.UPDATE="UPDATE",e.DELETE="DELETE",e.CREATE="CREATE",e.ERROR="ERROR"})(c||(c={}));const Be=q({plugins:[G()],state:{users:[],logs:[]},actions:{async LOAD_USERS(e){if(e.state.users.length)return;const s=await L();e.commit("ADD_USERS",s)},async UPDATE_USERS(e){const s=await L();e.commit("ADD_USERS",s)}},mutations:{ADD_USERS(e,s){e.users=s.filter(u=>{try{const a=new Ae(u);return this.commit("ADD_LOG",new $(u.id,c.CREATE)),a}catch(a){return console.error(a),this.commit("ADD_LOG",new $(u.id,c.ERROR,a)),!1}})},EDIT_USER(e,s){let u=e.users.findIndex(a=>a.id===s.id);e.users[u]&&(e.users[u]=s,this.commit("ADD_LOG",new $(s.id,c.UPDATE)))},DELETE_USER(e,s){let u=e.users.findIndex(a=>a.id===s.id);e.users.splice(u,1),this.commit("ADD_LOG",new $(s.id,c.DELETE))},ADD_LOG(e,s){e.logs.push(s)}}}),A=j(Le);A.use(Be);A.mount("#app");
