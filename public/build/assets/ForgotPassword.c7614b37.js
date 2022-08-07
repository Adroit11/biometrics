import{u,o as l,d as m,b as s,f as t,w as o,F as c,H as _,t as f,e as p,a,n as w,m as b,h as g}from"./app.0cb150c9.js";import{J as h}from"./AuthenticationCard.e45814c2.js";import{_ as y}from"./AuthenticationCardLogo.67c78847.js";import{_ as x}from"./Button.3cc8e5b9.js";import{_ as k}from"./Input.68d94fe3.js";import{_ as V}from"./Label.cc9cbfb9.js";import{_ as v}from"./ValidationErrors.e4ec8192.js";import"./_plugin-vue_export-helper.cdc0426e.js";const F=a("div",{class:"mb-4 text-sm text-gray-600"}," Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ",-1),N={key:0,class:"mb-4 font-medium text-sm text-green-600"},$=["onSubmit"],C={class:"flex items-center justify-end mt-4"},S=g(" Email Password Reset Link "),D={__name:"ForgotPassword",props:{status:String},setup(i){const e=u({email:""}),n=()=>{e.post(route("password.email"))};return(B,r)=>(l(),m(c,null,[s(t(_),{title:"Forgot Password"}),s(h,null,{logo:o(()=>[s(y)]),default:o(()=>[F,i.status?(l(),m("div",N,f(i.status),1)):p("",!0),s(v,{class:"mb-4"}),a("form",{onSubmit:b(n,["prevent"])},[a("div",null,[s(V,{for:"email",value:"Email"}),s(k,{id:"email",modelValue:t(e).email,"onUpdate:modelValue":r[0]||(r[0]=d=>t(e).email=d),type:"email",class:"mt-1 block w-full",required:"",autofocus:""},null,8,["modelValue"])]),a("div",C,[s(x,{class:w({"opacity-25":t(e).processing}),disabled:t(e).processing},{default:o(()=>[S]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{D as default};