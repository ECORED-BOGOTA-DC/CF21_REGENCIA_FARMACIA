(function(e){function a(a){for(var n,i,r=a[0],s=a[1],l=a[2],d=0,u=[];d<r.length;d++)i=r[d],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&u.push(c[i][0]),c[i]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,l||[]),o()}function o(){for(var e,a=0;a<t.length;a++){for(var o=t[a],n=!0,i=1;i<o.length;i++){var r=o[i];0!==c[r]&&(n=!1)}n&&(t.splice(a--,1),e=s(s.s=o[0]))}return e}var n={},i={app:0},c={app:0},t=[];function r(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"c33b1d53","chunk-0206bfa0":"d7b4751c","chunk-039c07ee":"ffb66bfe","chunk-13a6037e":"435b3ec3","chunk-16215048":"1c93b03e","chunk-18f95272":"cdca5189","chunk-2c06842c":"4cbfd52d","chunk-2d0c5615":"8dc965cc","chunk-2d0e96ec":"c80ee561","chunk-2d208d90":"a53d7dd9","chunk-2d21d0e2":"d5ce5b28","chunk-2d22c123":"be379721","chunk-2e80bb9a":"dc900dfe","chunk-2fdc87ee":"2c491792","chunk-30d2f332":"a16c79e2","chunk-36769079":"796a0022","chunk-398c63f0":"a9cf8002","chunk-44daca35":"13028ab4","chunk-4adb6690":"b81acff6","chunk-5309f94e":"905445dc","chunk-53ccb27e":"b738c8c6","chunk-55d286b8":"927147ac","chunk-681f37d3":"fdb289f3","chunk-6928a14a":"fdc83dc9","chunk-69444b4c":"388d2669","chunk-6e45141e":"e34e25dc","chunk-863a1ee8":"d0b08ffb","chunk-923527cc":"771f5056","chunk-a48a3e88":"ea1f7071","chunk-c796899c":"ec31fdcf","chunk-e8a7823a":"afbc5bf1","chunk-eaa1fac2":"022e58ad","chunk-f2a44bde":"d91f8068",comple:"aa755cd3",creditos:"8b88364d",glosario:"58b75d0d",intro:"9c27f2f0",referencias:"dbcc7b36",sintesis:"7ee5dcae",tema1:"ea27e72f",tema2:"bf410111",tema3:"2af832fb",tema4:"0e78fe6e"}[e]+".js"}function s(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(e){var a=[],o={"chunk-039c07ee":1,"chunk-16215048":1,"chunk-30d2f332":1,"chunk-398c63f0":1,"chunk-44daca35":1,"chunk-4adb6690":1,"chunk-681f37d3":1,"chunk-6928a14a":1,"chunk-6e45141e":1,"chunk-863a1ee8":1,"chunk-923527cc":1,"chunk-a48a3e88":1,"chunk-f2a44bde":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&o[e]&&a.push(i[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-039c07ee":"c02cabcb","chunk-13a6037e":"31d6cfe0","chunk-16215048":"c02cabcb","chunk-18f95272":"31d6cfe0","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-2fdc87ee":"31d6cfe0","chunk-30d2f332":"c02cabcb","chunk-36769079":"31d6cfe0","chunk-398c63f0":"83f7e217","chunk-44daca35":"c02cabcb","chunk-4adb6690":"c02cabcb","chunk-5309f94e":"31d6cfe0","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-681f37d3":"c02cabcb","chunk-6928a14a":"836e2e3e","chunk-69444b4c":"31d6cfe0","chunk-6e45141e":"c0e85eea","chunk-863a1ee8":"8f9cd922","chunk-923527cc":"a3f011df","chunk-a48a3e88":"c02cabcb","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-eaa1fac2":"31d6cfe0","chunk-f2a44bde":"c02cabcb",comple:"e766caee",creditos:"9ca98631",glosario:"a8263125",intro:"31d6cfe0",referencias:"47f89f89",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",c=s.p+n,t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var l=t[r],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===c))return a()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){l=u[r],d=l.getAttribute("data-href");if(d===n||d===c)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||c,t=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=n,delete i[e],m.parentNode.removeChild(m),o(t)},m.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var n=c[e];if(0!==n)if(n)a.push(n[2]);else{var t=new Promise((function(a,o){n=c[e]=[a,o]}));a.push(n[2]=t);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=r(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(m);var o=c[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}c[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=n,s.d=function(e,a,o){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)s.d(o,n,function(a){return e[a]}.bind(null,n));return o},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var m=d;t.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);var n=o("68f3"),i=function(){var e=this,a=e._self._c;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance"),a("Accesibilidad")],1)},c=[],t={name:"App",data:()=>({menuOpen:!1}),computed:{menuState(){return this.$store.getters.isMenuOpen}},mounted(){this.$aos.init({offset:100})}},r=t,s=o("2877"),l=Object(s["a"])(r,i,c,!1,null,null,null),d=l.exports,u=o("2b0e"),m=o("8c4f"),p=o("ae58"),f=o("7e58");u["a"].use(m["a"]);const g=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:()=>o.e("intro").then(o.bind(null,"5167"))},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:()=>o.e("tema1").then(o.bind(null,"02c8"))},{path:"tema2",name:"tema2",component:()=>o.e("tema2").then(o.bind(null,"fd11"))},{path:"tema3",name:"tema3",component:()=>o.e("tema3").then(o.bind(null,"eb46"))},{path:"tema4",name:"tema4",component:()=>o.e("tema4").then(o.bind(null,"3eb5"))}]},{path:"/actividad",name:"actividad",component:()=>o.e("actividad").then(o.bind(null,"4298"))},{path:"/glosario",name:"glosario",component:()=>o.e("glosario").then(o.bind(null,"69a7"))},{path:"/complementario",name:"complementario",component:()=>o.e("comple").then(o.bind(null,"dd8c"))},{path:"/referencias",name:"referencias",component:()=>o.e("referencias").then(o.bind(null,"64ef"))},{path:"/sintesis",name:"sintesis",component:()=>o.e("sintesis").then(o.bind(null,"15a3"))},{path:"/creditos",name:"creditos",component:()=>o.e("creditos").then(o.bind(null,"2e81"))}],scrollBehavior(e,a){if(e.hash){const o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise(e=>{setTimeout(()=>{e(o)},500)})}setTimeout(()=>{window.scrollTo({left:0,top:0,behavior:"auto"})},100)}});var b=g,h=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Farmacognosia y fitoquímica",descripcionCurso:"En este componente formativo se abordarán los temas relacionados con la farmacognosia y la fitoquímica, partiendo de su concepto, historia, evolución, las ramas que la componen, la relación con otras ciencias, sus aplicaciones, procesamiento de las plantas, conservación y métodos de extracción de estas.",imagenBannerPrincipal:o("74b5"),fondoBannerPrincipal:o("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:o("71f8")},{clases:["banner-principal-decorativo-2"],imagen:o("8f04")},{clases:["banner-principal-decorativo-3"],imagen:o("7d72")},{clases:["banner-principal-decorativo-4"],imagen:o("f53d")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Farmacognosia",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Aplicaciones y relaciones con otras ciencias",desarrolloContenidos:!0},{nombreRuta:"tema3",numero:"3",titulo:"Fitoquímica",desarrolloContenidos:!0},{nombreRuta:"tema4",numero:"4",titulo:"Métodos de extracción",desarrolloContenidos:!0,subMenu:[{numero:"4.1",titulo:"Método de extracción mecánica",hash:"t_4_1"},{numero:"4.2",titulo:"Método de extracción por destilación",hash:"t_4_2"},{numero:"4.3",titulo:"Método de extracción con solventes",hash:"t_4_3"},{numero:"4.4",titulo:"Proceso de extracción con solventes",hash:"t_4_4"}]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/331502_CF21_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Farmacognosia",referencia:"Palacios, M. (2013). Texto digital de farmacognosia y fitoquímica.",tipo:"Texto digital",link:"https://issuu.com/leono/docs/farmacognosia_y_fitoqu__mica_tf"}],glosario:[{termino:"Disolventes",significado:"son conocidos como sustancias que se usan para disolver, extraer o suspender otras sustancias con el objetivo de poder formar una disolución."},{termino:"Droga",significado:"toda sustancia farmacológicamente activa, cualquiera que sea su origen y características, que se utilice para la prevención, alivio, diagnóstico, tratamiento, curación o rehabilitación de las enfermedades del hombre o de los animales."},{termino:"Droga vegetal",significado:"parte de la planta que contiene los principios activos que se utiliza en terapéutica."},{termino:"Extracto vegetal",significado:"son compuestos que se producen por la obtención de sustancias activas a nivel biológico y que se encuentran en los tejidos de las plantas y que son extraídas por medio de solventes y otros procesos de extracción."},{termino:"Farmacognosia",significado:"ciencia enfocada particularmente al estudio de los principios activos de origen vegetal, animal y mineral, así como de los derivados que pudieran tener una aplicación terapéutica, comercial o industrial. En un sentido más amplio la farmacognosia abarca el estudio de la historia, el cultivo, la recolección, preparación, preservación, comercialización, distribución, identificación y evaluación de los componentes químicos de origen natural, la farmacología y el uso tradicional de esos compuestos o sus derivados para mejorar la salud y el bienestar del ser humano."},{termino:"Fitoquímica",significado:"estudia las estructuras y propiedades químicas de los productos naturales de las plantas."},{termino:"Medicamento",significado:"toda droga o mezcla de drogas, con o sin adición de sustancias auxiliares, preparada para ser presentada como formas farmacéuticas que se utilizan para la prevención, alivio, diagnóstico, tratamiento, curación o rehabilitación de las enfermedades del hombre y de los animales."},{termino:"Planta medicinal",significado:"cualquier especie vegetal que contenga en uno de sus órganos los principios activos con actividad farmacológica, que se puedan utilizar con fines terapéuticos."},{termino:"Principio activo",significado:"sustancia químicamente pura responsable de la actividad farmacológica y del uso terapéutico que se atribuye a esa droga."},{termino:"Productos fitoterapéuticos",significado:"según el Decreto 2266 de 2004 es el producto medicinal empacado y etiquetado, cuyas sustancias activas provienen del material de una planta medicinal o asociaciones de esta, presentado en estado bruto o en forma farmacéutica que se utiliza con fines terapéuticos. También puede provenir de extractos, tinturas y aceites."}],referencias:[{referencia:"Bruneton, J. (1993). Farmacognosia. Fitoquímica plantas medicinales. Editorial Acribia."},{referencia:"Cruz, J.  (2007). Más de 100 plantas medicinales. Obra social de la caja de Canarias."},{referencia:"Kuklinski, C. (2000). Farmacognosia. Estudio de las drogas y sustancias medicamentosas de origen natural. Editorial Omega."}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizábal Gutiérrez",cargo:"Responsable del equipo",centro:"Dirección General"},{nombre:"Liliana Victoria Morales Gualdrón",cargo:"Responsable de línea de producción",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información "}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Edwin Amir Moreno Moreno",cargo:"Experto temático",centro:"Regional Antioquia - Centro de Servicios de Salud"},{nombre:"Gustavo Santis Mancipe",cargo:"Diseñador instruccional",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Ana Catalina Córdoba Sus",cargo:"Revisora metodológica y pedagógica",centro:"Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable Equipo desarrollo curricular",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Julia Isabel Roberto",cargo:"Correctora de estilo",centro:"Regional Distrito Capital - Centro de Diseño y Metrología"},{nombre:"Gloria Amparo López Escudero",cargo:"Adecuación instruccional - 2023",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información "},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Metodología para la formación virtual",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información "}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Eulises Orduz Amezquita",cargo:"Diseño web",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información "},{nombre:"Diego Fernando Velasco Güiza",cargo:"Desarrollo fullstack",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información "},{nombre:"Lady Adriana Ariza Luque",cargo:"Animación y producción audiovisual",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información "},{nombre:"Laura Gisselle Murcia Pardo",cargo:"Animación y producción audiovisual",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información "},{nombre:"Ernesto Navarro Jaimes",cargo:"Animación y producción audiovisual",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información "}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Carolina Coca Salazar",cargo:"Evaluación de contenidos inclusivos y accesibles",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información "},{nombre:"Lina Marcela Pérez Manchego",cargo:"Validación de recursos educativos digitales y vinculación al LMS",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información "},{nombre:"Leyson Fabian Castaño Pérez",cargo:"Validación de recursos educativos digitales",centro:"Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información "}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});n["a"].prototype.$config=v;const k=o("9224");n["a"].prototype.$package=k,new n["a"]({router:b,store:h["a"],render:e=>e(d)}).$mount("#app")},"71f8":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-1.4816dc75.svg"},"74b5":function(e,a,o){e.exports=o.p+"img/banner-princiapal.df77c0ee.png"},"7d72":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-3.b9597134.svg"},"8f04":function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-2.5d6d324c.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.7.14","vue-router":"^3.6.5","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.19","@vue/cli-plugin-eslint":"^4.5.19","@vue/cli-plugin-router":"^4.5.19","@vue/cli-plugin-vuex":"^4.5.19","@vue/cli-service":"^4.5.19","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.7.14"}}')},a00a:function(e,a,o){e.exports=o.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,o){},ce7c:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.c1514a79.png"},f53d:function(e,a,o){e.exports=o.p+"img/banner-principal-decorativo-4.ee36a9f8.svg"}});
//# sourceMappingURL=app.445388f6.js.map