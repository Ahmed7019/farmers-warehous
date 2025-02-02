import{u as b,r as s,g as N,j as e,S as y,h as v,i as w,b as S,k as C}from"./index-Bc31RcYh.js";import{u as E,g as U}from"./firestore-DzTI5yD6.js";import{e as P}from"./index-Ba8OinSd.js";import{c as k}from"./index-Ci84oroX.js";import{I,C as A}from"./index-DUEyjrPu.js";import{a as D,A as F}from"./api-BFyl0Vxo.js";import"./iconBase-CeNU6m4C.js";function L(){const{currentUser:i}=b(),[d,t]=s.useState(i.email),[n,c]=s.useState(i.displayName),[u,m]=s.useState(),[x,p]=s.useState(),[f,g]=s.useState(!1),r=N().currentUser,l=()=>{u!==x?y.fire("Error!","Passwords doesn't match","error"):v(r,u),u!==""&&x!==""&&g(!0)};function o(){d!==r.email&&w(r,d),n!==r.displayName&&n!==""&&E(r,n)}function h(a){a.preventDefault(),l(),o()}return e.jsx(e.Fragment,{children:e.jsx("div",{className:"max-w-screen-md",children:e.jsxs("form",{className:"flex flex-col gap-2 bg-transparent p-4 rounded-md border border-neutral-200 my-2",onSubmit:h,children:[e.jsx("input",{type:"text",placeholder:"userName",className:"border border-neutral-700 p-2 outline-none rounded-md",value:n,onChange:a=>c(a.target.value)}),e.jsx("input",{type:"email",placeholder:"Enter your email",className:"border border-neutral-700 p-2 outline-none rounded-md",value:d,onChange:a=>t(a.target.value)}),e.jsx("input",{type:"password",placeholder:"Enter your New password",className:"border border-neutral-700 p-2 outline-none rounded-md",onChange:a=>m(a.target.value),name:"password",required:f}),e.jsx("input",{type:"password",placeholder:"Confirm password",className:"border border-neutral-700 p-2 outline-none rounded-md",onChange:a=>p(a.target.value),name:"password",required:f}),e.jsx("button",{type:"submit",className:"text-neutral-200 p-2 border border-neutral-200 rounded hover:text-black hover:bg-neutral-200 transition-colors",children:"Confirm"})]})})})}function $(){const[i,d]=s.useState(),{currentUser:t,isLoading:n}=b(),[c,u]=s.useState(null),[m,x]=s.useState(!1),[p,f]=s.useState(""),g=()=>{x(!m)},j=async()=>{try{await fetch("https://ipapi.co/json/").then(l=>{l.json().then(o=>{console.log(o),d(o)})})}catch{}},r=()=>{D.get(F).then(l=>{l.data.filter(h=>{h.email===p.email&&u(h)})})};return s.useEffect(()=>{const o=N().currentUser;f(o),r()},[r]),s.useEffect(()=>{j()},[]),s.useEffect(()=>{n&&U(t)},[t,n]),e.jsxs(e.Fragment,{children:[!t&&e.jsx(S,{}),e.jsxs("div",{className:"relative mt-24 mx-8 border border-neutral-700 bg-slate-800 p-3 rounded-md flex flex-col ",children:[e.jsx("div",{className:"absolute right-4",children:e.jsx("button",{className:"text-lg sm:text-3xl   bg-zinc-600 rounded-xl p-2 text-center",onClick:g,children:m?e.jsx(I,{className:"bg-red-600 rounded text-neutral-100"}):e.jsx(k,{className:"text-neutral-100"})})}),e.jsxs("div",{className:`flex items-center text-neutral-200 gap-3 mb-4\r
        `,children:[e.jsx(A,{className:"text-6xl sm:text-8xl text-neutral-200"}),e.jsxs("div",{children:[e.jsx("p",{className:"capitalize text-lg sm:text-3xl font-semibold",children:t==null?"":t.displayName}),e.jsxs("div",{className:"font-semibold flex gap-x-2 items-center",children:[e.jsx(P,{className:"text-xl text-orange-500"}),e.jsx("p",{children:i?i.country_capital:"N/A"})]})]})]}),m==!0?e.jsx(L,{}):e.jsxs("div",{className:"flex flex-col gap-2 text-neutral-300 text-xs",children:[e.jsxs("div",{className:"flex gap-2 items-center",children:[e.jsxs("p",{children:["Email : ",t?t.email:"..."]}),e.jsx("p",{className:`${t&&t.emailVerified?"text-green-400":"text-red-600"}  sm:text-md uppercase font-bold`,children:`Email is ${t&&t.emailVerified?"":"not"}
              verified !`}),t&&t.emailVerified?"":e.jsx("button",{className:"text-xs text-neutral-600 hover:underline underline-offset-2",onClick:()=>C(p),children:"verify now"})]}),e.jsx("p",{children:"Farm Size: [Size in Acres/Hectares]"}),e.jsx("p",{children:"Storage Capacity: [Current Storage Details]"}),c&&e.jsxs("p",{children:["Primary Crops: ",c.crop]},c.id),e.jsxs("p",{className:" self-end italic",children:["#Member since",t==null?"":Date(t.validSince).slice(3,15)]})]})]}),e.jsxs("div",{className:"mx-8 mt-8",children:[e.jsx("h3",{className:"font-bold text-lg sm:text-2xl",children:"Why Your Profile Matters ?"}),e.jsx("p",{className:"text-sm sm:text-md",children:"Your profile is more than just a dashboard—it’s a reflection of your hard work and dedication. By keeping it updated and engaging with our tools, you’re not just protecting your crops; you’re building a sustainable future for your farm and community."})]})]})}export{$ as default};
