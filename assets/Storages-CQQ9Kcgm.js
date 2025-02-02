import{c as u,u as x,r as h,j as e,L as i,S as l}from"./index-Bc31RcYh.js";import{g as p}from"./firestore-DzTI5yD6.js";import{d as m}from"./index-Ba8OinSd.js";import{G as j}from"./iconBase-CeNU6m4C.js";import{u as g}from"./index.esm-D99XgAJr.js";import{a as v,A as b}from"./api-BFyl0Vxo.js";function f(o){return j({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"},child:[]}]})(o)}function w(){const o=u(),{register:r,handleSubmit:n}=g(),{currentUser:s,userLoggedIn:t}=x();h.useEffect(()=>{t&&p(s)},[t,s]);async function c(a){console.log(a),await v.post(b,{email:s.email,...a}).then(()=>l.fire({title:"Success",text:"Data sent successfully",icon:"success"})).then(()=>{o("../")}).catch(d=>{console.error("Error:",d.message),l.fire({title:"Error",text:"Failed to submit form. Please try again.",icon:"error"})})}return e.jsx(e.Fragment,{children:e.jsxs("div",{className:" mt-20 mx-4 grid items-center justify-center h-[80vh] ",children:[e.jsx(i,{to:"../",className:"my-2",children:e.jsx(f,{})}),e.jsx("form",{onSubmit:n(c),className:"border border-green-500 bg-neutral-100/50 backdrop-blur-md p-4 rounded sm:w-[50rem]",children:e.jsxs("div",{className:"flex flex-col p-3 sm:flex-row justify-between text-xs",children:[e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsxs("div",{className:"flex gap-x-4",children:[e.jsx("label",{htmlFor:"crop",children:"Crop Type: "}),e.jsxs("select",{...r("crop"),name:"crop",id:"crop",className:"border border-black p-1 rounded",required:!0,children:[e.jsxs("optgroup",{label:"Grains",children:[e.jsx("option",{value:"Wheat",children:"Wheat"}),e.jsx("option",{value:"Rice",children:"Rice"}),e.jsx("option",{value:"Corn",children:"Corn"}),e.jsx("option",{value:"Barely",children:"Barely"}),e.jsx("option",{value:"Oats",children:"Oats"})]}),e.jsxs("optgroup",{label:"Fruits",children:[e.jsx("option",{value:"Apple",children:"Apple"}),e.jsx("option",{value:"Oranges",children:"Oranges"}),e.jsx("option",{value:"Bananas",children:"Bananas"}),e.jsx("option",{value:"Grapes",children:"Grapes"}),e.jsx("option",{value:"Strawberries",children:"Strawberries"})]}),e.jsxs("optgroup",{label:"Vegetables",children:[e.jsx("option",{value:"Tomatoes",children:"Tomatoes"}),e.jsx("option",{value:"Carrots",children:"Carrots"}),e.jsx("option",{value:"Potatoes",children:"Potatoes"}),e.jsx("option",{value:"Okra",children:"Okra"}),e.jsx("option",{value:"Onions",children:"Onions"})]})]})]}),e.jsxs("div",{className:"flex gap-x-4",children:[e.jsx("label",{htmlFor:"quantity",children:"Quantity: "}),e.jsx("input",{type:"number",...r("quantity"),required:!0,name:"quantity",id:"quantity",className:"border border-black p-1 rounded"})]}),e.jsxs("div",{className:"flex gap-x-4",children:[e.jsx("label",{htmlFor:"storage_location",children:"Storage Location"}),e.jsxs("select",{...r("storage_location"),name:"storage_location",id:"storage_location",className:"border border-black p-1 rounded",required:!0,children:[e.jsxs("optgroup",{label:"A",children:[e.jsx("option",{value:"A1",children:"A1"}),e.jsx("option",{value:"A2",children:"A2"}),e.jsx("option",{value:"A3",children:"A3"}),e.jsx("option",{value:"A4",children:"A4"}),e.jsx("option",{value:"A5",children:"A5"})]}),e.jsxs("optgroup",{label:"B",children:[e.jsx("option",{value:"B1",children:"B1"}),e.jsx("option",{value:"B2",children:"B2"}),e.jsx("option",{value:"B3",children:"B3"}),e.jsx("option",{value:"B4",children:"B4"}),e.jsx("option",{value:"B5",children:"B5"})]}),e.jsxs("optgroup",{label:"C",children:[e.jsx("option",{value:"C1",children:"C1"}),e.jsx("option",{value:"C2",children:"C2"}),e.jsx("option",{value:"C3",children:"C3"}),e.jsx("option",{value:"C4",children:"C4"}),e.jsx("option",{value:"C5",children:"C5"})]})]})]}),e.jsxs("div",{className:"flex gap-x-4",children:[e.jsx("label",{htmlFor:"storage_condition",children:"Storage Condition"}),e.jsxs("select",{...r("storage_condition"),name:"storage_condition",id:"storage_condition",className:"border border-black p-1 rounded",required:!0,children:[e.jsx("option",{value:"Standard",children:"Standard Storage Plan"}),e.jsx("option",{value:"Premium",children:"Premium Storage Plan"}),e.jsx("option",{value:"Climate",children:"Climate-Controlled Storage Plan"})]}),e.jsx(i,{to:"learnMore",title:"Learn More",children:e.jsx(m,{})})]}),e.jsxs("div",{className:"flex gap-x-4",children:[e.jsx("label",{htmlFor:"date",children:"Expiration Date: "}),e.jsx("input",{type:"date",...r("date"),name:"date",id:"date",className:"border border-black p-1 rounded",required:!0})]}),e.jsx("div",{children:e.jsxs("ul",{className:"list-disc list-inside text-sm p-2 flex flex-col gap-2 text-neutral-700",children:[e.jsx("li",{children:"This form allows you to easily add information about the crops you intend to store in our facilities. By providing these details, we can ensure optimal storage conditions for your crops, maximizing their quality and lifespan."}),e.jsx("li",{children:"Double-check all entered information before submitting the form to ensure accuracy."}),e.jsx("li",{children:"If you have any questions or require assistance while filling out the form, don't hesitate to contact our customer support team. They're happy to guide you through the process."}),e.jsx("li",{className:"text-bold sm:text-lg",children:"Note that you can't add the same crops twice with the same storage conditioning plan"})]})})]}),e.jsx("div",{className:" flex flex-col justify-end ",children:e.jsx("button",{type:"submit",className:" mt-4 bg-green-700 sm:w-40 p-2 rounded-md text-neutral-200 hover:bg-green-500",children:"Save changes"})})]})})]})})}export{w as default};
