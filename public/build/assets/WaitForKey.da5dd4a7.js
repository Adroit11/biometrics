import{_ as n}from"./Button.3cc8e5b9.js";import{o as e,d as t,a as s,t as l,b as d,w as c,F as g,e as m,h as x,E as i}from"./app.0cb150c9.js";const y={key:0,class:"form-error-message mb3"},p={class:"bg-red-100 border border-red-400 px-4 py-3 rounded relative",role:"alert"},h={class:"font-bold text-red-700"},_=x(" Retry "),f={key:0,class:"bg-teal-100 border-t-4 border-teal-500 rounded-b mb-4 px-4 py-8 shadow-md dark:shadow-gray-700 flex",role:"alert"},w=i('<div class="text-teal-800 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" class="w-8 h-8" viewBox="-50 0 700 600"><g transform="matrix(42.857142857142854,0,0,42.857142857142854,0,0)"><g><polyline points="5.62 7.38 11.5 1.5 13.5 3.5"></polyline><line x1="9.25" y1="3.75" x2="11" y2="5.5"></line><circle cx="3.5" cy="9.5" r="3"></circle></g></g></svg></div><p class="font-bold text-2xl text-teal-900"> Validating key\u2026 </p>',2),b=[w],k={key:1,class:"bg-indigo-100 border-t-4 border-indigo-500 rounded-b mb-4 px-4 py-8 shadow-md dark:shadow-gray-700 flex"},v=i('<div class="text-indigo-800 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" class="w-8 h-8" viewBox="-50 0 700 600"><g transform="matrix(42.857142857142854,0,0,42.857142857142854,0,0)"><g><polyline points="5.62 7.38 11.5 1.5 13.5 3.5"></polyline><line x1="9.25" y1="3.75" x2="11" y2="5.5"></line><circle cx="3.5" cy="9.5" r="3"></circle></g></g></svg></div><p class="font-bold text-2xl text-indigo-900"> Waiting for key\u2026 </p>',2),u=[v],N={__name:"WaitForKey",props:{errorMessage:String,form:Object},emits:["retry"],setup(o){return(a,r)=>(e(),t("div",null,[o.errorMessage!==""?(e(),t("div",y,[s("div",p,[s("p",h,l(o.errorMessage),1),d(n,{class:"mt-4",onClick:r[0]||(r[0]=V=>a.$emit("retry"))},{default:c(()=>[_]),_:1})])])):(e(),t(g,{key:1},[o.form.processing?(e(),t("div",f,b)):o.form.hasErrors?m("",!0):(e(),t("div",k,u))],64))]))}};export{N as default};
