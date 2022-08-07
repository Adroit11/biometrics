import{r as c,u as W,j as B,p as E,D as F,o as r,d as a,t as v,b as i,f as p,w as g,e as K,a as t,F as T,g as D,h as u,L}from"./app.0cb150c9.js";import{_ as S}from"./SecondaryButton.5296454e.js";import{_ as R}from"./Button.3cc8e5b9.js";import U from"./RegisterKey.ae921652.js";import V from"./DeleteKeyModal.2d76d711.js";import j from"./UpdateKey.176cbdaf.js";import{W as I}from"./webauthn.5f5be0a3.js";import"./Label.cc9cbfb9.js";import"./Input.68d94fe3.js";import"./InputError.17ac20df.js";import"./WaitForKey.da5dd4a7.js";import"./ConfirmationModal.6a7faedc.js";import"./Modal.e8c88244.js";import"./DangerButton.ddc5aa1c.js";const O={key:0},P={key:1,class:"p-6 sm:px-20 bg-white border-b border-gray-200"},Y={key:2,class:"p-6 sm:px-20 bg-white border-b border-gray-200"},q={key:3,class:"p-6 sm:px-20 bg-white border-b border-gray-200"},z=t("h1",{class:"font-semibold text-xl text-gray-900 leading-tight mb-8"}," Manage your Webauthn Keys ",-1),G={key:0,class:"text-lg bg-teal-50 border-t-2 border-teal-200 rounded-b mb-4 px-4 py-8 shadow-md"},H=u(" Try "),J=u("logging out"),Q=u(" and logging back in without password, just using your registered key! "),X={class:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"},Z={class:"min-w-full divide-y divide-gray-200"},ee=t("thead",{class:"bg-gray-50"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"}," Name "),t("th",{scope:"col",class:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:block"}," Last use "),t("th",{scope:"col",class:"relative px-6 py-3"},[t("span",{class:"sr-only"},"Actions")])])],-1),te={class:"bg-white divide-y divide-gray-200"},se={key:0},oe=t("td",{colspan:"3",class:"px-6 py-4 whitespace-nowrap text-center"},[t("em",null,"No keys registered yet")],-1),re=[oe],ae={class:"px-6 py-4 whitespace-nowrap"},ne={class:"text-sm font-medium text-gray-900"},ie={class:"px-6 py-4 whitespace-nowrap time hidden md:block"},le={class:"text-sm text-gray-500"},de={class:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium"},ue=u(" Update "),ce=u(" Delete "),pe={class:"mt-8 text-2xl"},me=u(" Register a new key "),Me={__name:"WebauthnKeys",props:{webauthnKeys:Array,publicKey:Object},setup(m){const _=m,f=c(!0),n=c(""),h=c(!1),l=W({name:""}),y=c(null),d=c(null),C=B(()=>d.value>0?_.webauthnKeys.find(s=>s.id===d.value).name:"");E(()=>{n.value="",b.webAuthnSupport()||(f.value=!1,n.value=w()),_.publicKey&&(x(),k(_.publicKey))});const b=new I((s,e)=>{n.value=$(s,e)}),$=(s,e)=>{switch(s){case"InvalidStateError":return"This key is already registered. It\u2019s not necessary to register it again.";case"NotAllowedError":return"The operation either timed out or was not allowed.";default:return e}},w=()=>{switch(b.notSupportedMessage()){case"not_supported":return"Your browser doesn\u2019t currently support WebAuthn.";case"not_secured":return"WebAuthn only supports secure connections. Please load this page with https scheme.";default:return""}},x=()=>{n.value="",h.value=!0},M=()=>{n.value="",l.clearErrors()},k=s=>{F().then(()=>b.register(s,e=>{A(e)}))},A=s=>{l.transform(e=>({...e,...s})).post(route("webauthn.store"),{preserveScroll:!0,preserveState:!0,onSuccess:()=>{h.value=!1,l.reset()},onError:e=>{n.value=e.email?e.email:e.data.errors.webauthn}})};return(s,e)=>(r(),a("div",null,[f.value?h.value?(r(),a("div",P,[i(U,{errorMessage:n.value,form:p(l),name:p(l).name,"onUpdate:name":e[0]||(e[0]=o=>p(l).name=o),onStart:M,onStop:e[1]||(e[1]=o=>h.value=!1),onRegister:k},null,8,["errorMessage","form","name"])])):d.value>0?(r(),a("div",Y,[i(j,{keyid:d.value,"name-update":p(C),onClose:e[2]||(e[2]=o=>d.value=null)},null,8,["keyid","name-update"])])):(r(),a("div",q,[z,m.webauthnKeys.length>0?(r(),a("p",G,[H,i(p(L),{href:s.route("logout"),method:"post",class:"underline"},{default:g(()=>[J]),_:1},8,["href"]),Q])):K("",!0),t("div",X,[t("table",Z,[ee,t("tbody",te,[m.webauthnKeys.length===0?(r(),a("tr",se,re)):K("",!0),(r(!0),a(T,null,D(m.webauthnKeys,o=>(r(),a("tr",{key:o.id},[t("td",ae,[t("strong",ne,v(o.name),1)]),t("td",ie,[t("span",le,v(o.last_active),1)]),t("td",de,[i(S,{class:"pointer text-indigo-400 hover:text-indigo-600",href:"",onClick:N=>d.value=o.id},{default:g(()=>[ue]),_:2},1032,["onClick"]),i(S,{class:"ml-2 pointer text-indigo-400 hover:text-indigo-600",onClick:N=>y.value=o.id},{default:g(()=>[ce]),_:2},1032,["onClick"])])]))),128))])])]),t("div",pe,[i(R,{type:"button",onClick:x},{default:g(()=>[me]),_:1})])])):(r(),a("div",O,v(w()),1)),i(V,{keyid:y.value,onClose:e[3]||(e[3]=o=>y.value=null)},null,8,["keyid"])]))}};export{Me as default};