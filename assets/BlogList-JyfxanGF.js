import{c as n,u as l,j as e,B as r,m as o}from"./index-CVsW1iBa.js";import{C as d,b as m,c as h,d as u,a as p}from"./card-BROgM0_N.js";import{B as i}from"./badge-DTfklrKI.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],x=n("calendar",g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],f=n("clock",b),y=[{id:4,title:"Digital Accessibility in France: A Wake‑Up Call for 2025",excerpt:"France is raising the bar on digital accessibility. Here’s why 2025 is a turning point and how teams can get ready.",content:`# Digital Accessibility in France: A Wake‑Up Call for 2025

France is stepping up enforcement of digital accessibility. For public services this has long been mandatory under the RGAA. Now the pressure expands to the private sector through EU directives (European Accessibility Act) and growing legal and user expectations.

## What changes in 2025
- Stronger focus on measurable conformance (WCAG 2.1/2.2)
- Increased exposure and reputational risk for non‑compliance
- Procurement requirements: accessibility by default

## What teams should do now
1. Embed accessibility in design and product processes
2. Adopt semantic HTML and keyboard‑first thinking
3. Ensure color contrast, focus states, and clear error handling
4. Automate checks in CI and run expert audits regularly

Accessibility is not a one‑off task—it’s a continuous quality practice that benefits everyone.

Read the full article on Medium for concrete steps, examples, and a practical roadmap.`,date:"2024-12-15",readTime:"7 min",category:"Accessibility",tags:["a11y","France","RGAA","WCAG"],externalUrl:"https://medium.com/@florianfanor/digital-accessibility-in-france-a-wake-up-call-for-2025-0dade1ce8112"},{id:5,title:"The Observer APIs in React: Intersection, Mutation, Resize",excerpt:"How and when to use the browser’s Observer APIs in React: Patterns, pitfalls, and production tips.",content:`# The Observer APIs in React: Intersection, Mutation, Resize

IntersectionObserver, MutationObserver, and ResizeObserver unlock powerful UI patterns without heavy event listeners. In this article, we explore:

- When each Observer fits best
- Clean React patterns that avoid memory leaks
- Performance considerations and batching
- Testing strategies and SSR gotchas

Includes code samples and a checklist to help you ship reliable observers in production.`,date:"2025-01-10",readTime:"9 min",category:"React",tags:["React","IntersectionObserver","MutationObserver","ResizeObserver"],externalUrl:"https://medium.com/@florianfanor/the-observer-apis-in-react-intersection-mutation-resize-e3a6a823c234"}],A=()=>{const{t,language:c}=l();return e.jsxs("section",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[e.jsx("h1",{className:"mb-4",children:t("blog.title")}),e.jsx("p",{className:"text-muted-foreground mb-12 max-w-2xl",children:t("blog.description")}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:y.map(a=>e.jsxs(d,{className:"flex flex-col",children:[e.jsxs(m,{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(i,{children:a.category}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(x,{className:"w-4 h-4","aria-hidden":"true"}),new Date(a.date).toLocaleDateString(c==="fr"?"fr-FR":"en-US",{year:"numeric",month:"long",day:"numeric"})]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(f,{className:"w-4 h-4","aria-hidden":"true"}),a.readTime]})]})]}),e.jsx(h,{children:a.title}),e.jsx(u,{children:a.excerpt})]}),e.jsxs(p,{className:"flex-1 flex flex-col",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:a.tags.map(s=>e.jsx(i,{variant:"outline",children:s},s))}),a.externalUrl?e.jsx(r,{asChild:!0,variant:"link",className:"mt-auto self-start p-0",children:e.jsx("a",{href:a.externalUrl,target:"_blank",rel:"noopener noreferrer nofollow","aria-label":`${t("blog.readArticle")} (Medium)`,children:t("blog.readArticle")})}):e.jsx(r,{asChild:!0,variant:"link",className:"mt-auto self-start p-0",children:e.jsx(o,{to:`/blog/${a.id}`,children:t("blog.readArticle")})})]})]},a.id))})]})};export{A as B,x as C,f as a,y as b};
