import{_ as m}from"./AppLayout.70c8b736.js";import{o as r,d as c,a as t,c as _,w as o,b as s}from"./app.f822e1b8.js";import d from"./WebauthnKeys.512df951.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./SecondaryButton.64858eb3.js";import"./Button.125d796b.js";import"./RegisterKey.e568321a.js";import"./Label.ad063015.js";import"./Input.ccfab536.js";import"./InputError.ce451d5f.js";import"./WaitForKey.6d5f218d.js";import"./DeleteKeyModal.d84eb7ad.js";import"./ConfirmationModal.67452160.js";import"./Modal.326df562.js";import"./DangerButton.cbdbb7c1.js";import"./UpdateKey.2613ab9b.js";import"./webauthn.5f5be0a3.js";const n=t("div",{class:"p-6 sm:px-20 bg-white border-b border-gray-200"},[t("div",{class:"mt-8 text-2xl"}," Voter's Identity. ")],-1),p=[n],l={__name:"Welcome",setup(e){return(a,i)=>(r(),c("div",null,p))}},h=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard ",-1),u={class:"py-12"},x={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},b={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},j={__name:"Dashboard",props:{webauthnKeys:Array},setup(e){return(a,i)=>(r(),_(m,{title:"Dashboard"},{header:o(()=>[h]),default:o(()=>[t("div",u,[t("div",x,[t("div",b,[s(l),s(d,{webauthnKeys:e.webauthnKeys},null,8,["webauthnKeys"])])])])]),_:1}))}};export{j as default};