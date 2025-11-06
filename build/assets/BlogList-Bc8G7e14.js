import{c as a,u as c,j as e,B as l,m as o}from"./index-Ck86rggi.js";import{C as p,b as d,c as u,d as m,a as x}from"./card-DJuS-zcW.js";import{B as n}from"./badge-DokKIv3_.js";/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],y=a("calendar",g);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],v=a("clock",b),f=[{id:1,title:"Les bases de l'accessibilité web",excerpt:"Découvrez pourquoi l'accessibilité web est essentielle et comment la mettre en œuvre dans vos projets.",content:`# Les bases de l'accessibilité web

L'accessibilité web n'est pas seulement une bonne pratique, c'est une nécessité. Elle garantit que votre site peut être utilisé par tous, y compris les personnes en situation de handicap.

## Pourquoi l'accessibilité est importante

1. **Inclusion** : Permet à tous d'accéder à l'information
2. **Légal** : Souvent requis par la loi
3. **SEO** : Améliore le référencement
4. **UX** : Bénéficie à tous les utilisateurs

## Principes WCAG

Les Web Content Accessibility Guidelines définissent 4 principes :

- **Perceptible** : L'information doit être présentée de façon perceptible
- **Utilisable** : L'interface doit être utilisable
- **Compréhensible** : L'information doit être compréhensible
- **Robuste** : Le contenu doit être compatible avec les technologies d'assistance

## Conseils pratiques

- Utilisez des balises sémantiques HTML
- Fournissez des alternatives textuelles pour les images
- Assurez un contraste suffisant
- Rendez tout navigable au clavier
- Testez avec des lecteurs d'écran

L'accessibilité est un voyage continu, pas une destination !`,date:"2025-10-15",readTime:"5 min",category:"Accessibilité",tags:["a11y","WCAG","Best Practices"]},{id:2,title:"React Server Components : Le guide complet",excerpt:"Comprendre les React Server Components et comment ils transforment le développement web moderne.",content:`# React Server Components : Le guide complet

Les React Server Components (RSC) représentent une évolution majeure dans l'écosystème React.

## Qu'est-ce qu'un Server Component ?

Les Server Components sont des composants React qui s'exécutent uniquement côté serveur. Contrairement aux composants classiques, ils ne sont jamais envoyés au client.

## Avantages principaux

### 1. Performance
- Réduction de la taille du bundle JavaScript
- Chargement plus rapide
- Meilleure expérience utilisateur

### 2. Accès direct aux données
- Pas besoin d'API endpoints
- Requêtes de base de données directes
- Moins de code boilerplate

### 3. Sécurité
- Le code sensible reste sur le serveur
- Pas d'exposition des secrets

## Cas d'usage

Les Server Components sont parfaits pour :
- Affichage de contenu statique
- Récupération de données
- Composants qui ne nécessitent pas d'interactivité

Pour l'interactivité, utilisez des Client Components avec la directive 'use client'.

## Conclusion

Les RSC ouvrent de nouvelles possibilités pour créer des applications plus performantes et sécurisées.`,date:"2025-10-28",readTime:"8 min",category:"React",tags:["React","Server Components","Next.js"]},{id:3,title:"TypeScript : Au-delà des bases",excerpt:"Explorez les fonctionnalités avancées de TypeScript pour écrire du code plus sûr et maintenable.",content:`# TypeScript : Au-delà des bases

TypeScript offre bien plus que de simples annotations de types. Explorons des fonctionnalités avancées.

## Types utilitaires

TypeScript inclut des types utilitaires puissants :

\`\`\`typescript
// Partial - rend toutes les propriétés optionnelles
type User = { name: string; email: string; age: number };
type PartialUser = Partial<User>;

// Pick - sélectionne des propriétés
type UserPreview = Pick<User, 'name' | 'email'>;

// Omit - exclut des propriétés
type UserWithoutAge = Omit<User, 'age'>;
\`\`\`

## Types conditionnels

Les types conditionnels permettent une logique de typage avancée :

\`\`\`typescript
type IsString<T> = T extends string ? true : false;
type Result1 = IsString<string>; // true
type Result2 = IsString<number>; // false
\`\`\`

## Inférence de types

Laissez TypeScript faire le travail :

\`\`\`typescript
const user = { name: 'Alice', age: 30 } as const;
type User = typeof user;
\`\`\`

## Bonnes pratiques

1. Utilisez \`unknown\` plutôt que \`any\`
2. Activez le mode strict
3. Exploitez l'inférence
4. Créez des types réutilisables

TypeScript est un outil puissant qui, utilisé correctement, améliore considérablement la qualité du code.`,date:"2025-11-01",readTime:"6 min",category:"TypeScript",tags:["TypeScript","Advanced","Types"]}],j=()=>{const{t,language:r}=c();return e.jsxs("section",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-20",children:[e.jsx("h1",{className:"mb-4",children:t("blog.title")}),e.jsx("p",{className:"text-muted-foreground mb-12 max-w-2xl",children:t("blog.description")}),e.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:f.map(s=>e.jsxs(p,{className:"flex flex-col",children:[e.jsxs(d,{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx(n,{children:s.category}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-muted-foreground",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(y,{className:"w-4 h-4","aria-hidden":"true"}),new Date(s.date).toLocaleDateString(r==="fr"?"fr-FR":"en-US",{year:"numeric",month:"long",day:"numeric"})]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(v,{className:"w-4 h-4","aria-hidden":"true"}),s.readTime]})]})]}),e.jsx(u,{children:s.title}),e.jsx(m,{children:s.excerpt})]}),e.jsxs(x,{className:"flex-1 flex flex-col",children:[e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:s.tags.map(i=>e.jsx(n,{variant:"outline",children:i},i))}),e.jsx(l,{asChild:!0,variant:"link",className:"mt-auto self-start p-0",children:e.jsx(o,{to:`/blog/${s.id}`,children:t("blog.readArticle")})})]})]},s.id))})]})};export{j as B,y as C,v as a,f as b};
