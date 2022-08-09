import{r as y,u as V,l as $,p as C,o as i,d,b as e,f as t,w as m,F as N,H as K,t as k,e as f,a,m as _,c as B,L as F,n as L,h as u,z as R}from"./app.02ea9b38.js";import{J as S}from"./AuthenticationCard.ec7eee3e.js";import{_ as U}from"./AuthenticationCardLogo.9b4d8daf.js";import{_ as q}from"./Button.8c8e27e4.js";import{_ as v}from"./SecondaryButton.a3be76e0.js";import{_ as h}from"./Input.bdc38695.js";import{_ as P}from"./Checkbox.6771da7a.js";import{_ as w}from"./Label.cf1ad7d1.js";import{_ as j}from"./ValidationErrors.a4fcb80a.js";import z from"./WebauthnLogin.681f161e.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./InputError.f76200df.js";import"./WaitForKey.5179fabc.js";import"./webauthn.5f5be0a3.js";const E={key:0,class:"mb-4 font-medium text-sm text-green-600"},H={key:1},I={class:"mb-4 text-lg text-gray-900 text-center"},J=a("div",{class:"mb-4 max-w-xl text-gray-600 dark:text-gray-400"}," Connect with your security key ",-1),M=u(" Use your password "),A=["onSubmit"],D={class:"mt-4"},O={class:"block mt-4"},T={class:"flex items-center"},W=a("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),Y={class:"flex items-center justify-end mt-4"},G=u(" Forgot your password? "),Q=u(" Log in "),X={key:0,class:"block mt-4"},Z=u(" Use your security key "),fe={__name:"Login",props:{canResetPassword:Boolean,status:String,publicKey:Object,userName:String},setup(r){const b=r,p=y(!0),n=y(null),s=V({nin:"",password:"",remember:!1});$(()=>b.publicKey,c=>{n.value=c}),C(()=>{n.value=b.publicKey});const g=()=>{s.transform(c=>({...c,remember:s.remember?"on":""})).post(route("login"),{onFinish:()=>s.reset("password")})},x=()=>{n.value=null,p.value=!0,R.Inertia.reload({only:["publicKey"]})};return(c,o)=>(i(),d(N,null,[e(t(K),{title:"Log in"}),e(S,null,{logo:m(()=>[e(U)]),default:m(()=>[e(j,{class:"mb-4"}),r.status?(i(),d("div",E,k(r.status),1)):f("",!0),r.publicKey&&p.value?(i(),d("div",H,[a("div",I,k(r.userName),1),J,e(z,{remember:!0,"public-key":n.value},null,8,["public-key"]),e(v,{class:"mr-2 mt-4",onClick:o[0]||(o[0]=_(l=>p.value=!1,["prevent"]))},{default:m(()=>[M]),_:1})])):(i(),d("form",{key:2,onSubmit:_(g,["prevent"])},[a("div",null,[e(w,{for:"email",value:"Email Registered With Your NIN"}),e(h,{id:"email",modelValue:t(s).email,"onUpdate:modelValue":o[1]||(o[1]=l=>t(s).email=l),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"])]),a("div",D,[e(w,{for:"password",value:"Password"}),e(h,{id:"password",modelValue:t(s).password,"onUpdate:modelValue":o[2]||(o[2]=l=>t(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password"},null,8,["modelValue"])]),a("div",O,[a("label",T,[e(P,{checked:t(s).remember,"onUpdate:checked":o[3]||(o[3]=l=>t(s).remember=l),name:"remember"},null,8,["checked"]),W])]),a("div",Y,[r.canResetPassword?(i(),B(t(F),{key:0,href:c.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:m(()=>[G]),_:1},8,["href"])):f("",!0),e(q,{class:L(["ml-4",{"opacity-25":t(s).processing}]),disabled:t(s).processing},{default:m(()=>[Q]),_:1},8,["class","disabled"])]),n.value?(i(),d("div",X,[e(v,{class:"mr-2",onClick:_(x,["prevent"])},{default:m(()=>[Z]),_:1},8,["onClick"])])):f("",!0)],40,A))]),_:1})],64))}};export{fe as default};
