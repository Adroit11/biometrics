import{_ as m}from"./AppLayout.b3bb823c.js";import{o as a,d as c,a as t,c as _,w as o,b as s}from"./app.0cb150c9.js";import n from"./WebauthnKeys.5d85aff3.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./SecondaryButton.5296454e.js";import"./Button.3cc8e5b9.js";import"./RegisterKey.ae921652.js";import"./Label.cc9cbfb9.js";import"./Input.68d94fe3.js";import"./InputError.17ac20df.js";import"./WaitForKey.da5dd4a7.js";import"./DeleteKeyModal.2d76d711.js";import"./ConfirmationModal.6a7faedc.js";import"./Modal.e8c88244.js";import"./DangerButton.ddc5aa1c.js";import"./UpdateKey.176cbdaf.js";import"./webauthn.5f5be0a3.js";const d=t("div",{class:"p-6 sm:px-20 bg-white border-b border-gray-200"},[t("div",{class:"mt-8 text-2xl"}," Laravel-webauthn ")],-1),p=[d],l={__name:"Welcome",setup(e){return(r,i)=>(a(),c("div",null,p))}},h=t("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"}," Dashboard ",-1),u={class:"py-12"},x={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},b={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},j={__name:"Dashboard",props:{webauthnKeys:Array},setup(e){return(r,i)=>(a(),_(m,{title:"Dashboard"},{header:o(()=>[h]),default:o(()=>[t("div",u,[t("div",x,[t("div",b,[s(l),s(n,{webauthnKeys:e.webauthnKeys},null,8,["webauthnKeys"])])])])]),_:1}))}};export{j as default};