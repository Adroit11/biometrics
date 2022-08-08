import{r as y,u as V,l as $,p as C,o as n,d,b as e,f as t,w as i,F as N,H as K,t as k,e as f,a,m as _,c as B,L as F,n as L,h as u,z as S}from"./app.c76e41a9.js";import{J as U}from"./AuthenticationCard.bd2b96d0.js";import{_ as R}from"./AuthenticationCardLogo.f10a90bf.js";import{_ as q}from"./Button.68da0ca1.js";import{_ as v}from"./SecondaryButton.b517bdde.js";import{_ as w}from"./Input.7f71aab2.js";import{_ as P}from"./Checkbox.d4d06b65.js";import{_ as h}from"./Label.ed2b297c.js";import{_ as j}from"./ValidationErrors.ea90be03.js";import z from"./WebauthnLogin.5c8272e0.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./InputError.945c0d77.js";import"./WaitForKey.9556d485.js";import"./webauthn.5f5be0a3.js";const H={key:0,class:"mb-4 font-medium text-sm text-green-600"},I={key:1},J={class:"mb-4 text-lg text-gray-900 text-center"},M=a("div",{class:"mb-4 max-w-xl text-gray-600 dark:text-gray-400"}," Connect with your security key ",-1),A=u(" Use your password "),D=["onSubmit"],E={class:"mt-4"},O={class:"block mt-4"},T={class:"flex items-center"},G=a("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),Q={class:"flex items-center justify-end mt-4"},W=u(" Forgot your password? "),X=u(" Log in "),Y={key:0,class:"block mt-4"},Z=u(" Use your security key "),fe={__name:"Login",props:{canResetPassword:Boolean,status:String,publicKey:Object,userName:String},setup(r){const b=r,p=y(!0),m=y(null),s=V({nin:"",password:"",remember:!1});$(()=>b.publicKey,c=>{m.value=c}),C(()=>{m.value=b.publicKey});const g=()=>{s.transform(c=>({...c,remember:s.remember?"on":""})).post(route("login"),{onFinish:()=>s.reset("password")})},x=()=>{m.value=null,p.value=!0,S.Inertia.reload({only:["publicKey"]})};return(c,o)=>(n(),d(N,null,[e(t(K),{title:"Log in"}),e(U,null,{logo:i(()=>[e(R)]),default:i(()=>[e(j,{class:"mb-4"}),r.status?(n(),d("div",H,k(r.status),1)):f("",!0),r.publicKey&&p.value?(n(),d("div",I,[a("div",J,k(r.userName),1),M,e(z,{remember:!0,"public-key":m.value},null,8,["public-key"]),e(v,{class:"mr-2 mt-4",onClick:o[0]||(o[0]=_(l=>p.value=!1,["prevent"]))},{default:i(()=>[A]),_:1})])):(n(),d("form",{key:2,onSubmit:_(g,["prevent"])},[a("div",null,[e(h,{for:"nin",value:"National Iden No."}),e(w,{id:"nin",modelValue:t(s).nin,"onUpdate:modelValue":o[1]||(o[1]=l=>t(s).nin=l),type:"string",class:"mt-1 block w-full",required:""},null,8,["modelValue"])]),a("div",E,[e(h,{for:"password",value:"Password"}),e(w,{id:"password",modelValue:t(s).password,"onUpdate:modelValue":o[2]||(o[2]=l=>t(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),a("div",O,[a("label",T,[e(P,{checked:t(s).remember,"onUpdate:checked":o[3]||(o[3]=l=>t(s).remember=l),name:"remember"},null,8,["checked"]),G])]),a("div",Q,[r.canResetPassword?(n(),B(t(F),{key:0,href:c.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:i(()=>[W]),_:1},8,["href"])):f("",!0),e(q,{class:L(["ml-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:i(()=>[X]),_:1},8,["class","disabled"])]),m.value?(n(),d("div",Y,[e(v,{class:"mr-2",onClick:_(x,["prevent"])},{default:i(()=>[Z]),_:1},8,["onClick"])])):f("",!0)],40,D))]),_:1})],64))}};export{fe as default};
