(self.webpackChunkmhudlark_github=self.webpackChunkmhudlark_github||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,i){if(e===i)return!0;if(e&&i&&"object"==typeof e&&"object"==typeof i){if(e.constructor!==i.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(!a(e[s],i[s]))return!1;return!0}if(n&&e instanceof Map&&i instanceof Map){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!a(s.value[1],i.get(s.value[0])))return!1;return!0}if(r&&e instanceof Set&&i instanceof Set){if(e.size!==i.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!i.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(i)){if((c=e.length)!=i.length)return!1;for(s=c;0!=s--;)if(e[s]!==i[s])return!1;return!0}if(e.constructor===RegExp)return e.source===i.source&&e.flags===i.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===i.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===i.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(i).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(i,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!a(e[l[s]],i[l[s]]))return!1;return!0}return e!=e&&i!=i}e.exports=function(e,t){try{return a(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),a=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),p.canUseDOM?t(s):n&&(s=n(s))}var p=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var i=o.prototype;return i.UNSAFE_componentWillMount=function(){l.push(this),u()},i.componentDidUpdate=function(){u()},i.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},i.render=function(){return a.createElement(r,this.props)},o}(o.PureComponent);return i(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),i(p,"canUseDOM",c),p}}},4469:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ce}});var r,o,a,i,c=n(7294),s=n(5697),l=n.n(s),u=n(4839),p=n.n(u),d=n(2993),f=n.n(d),m=n(6494),h=n.n(m),g="bodyAttributes",A="htmlAttributes",y="titleAttributes",b={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(b).map((function(e){return b[e]})),"charset"),w="cssText",E="href",C="http-equiv",T="innerHTML",k="itemprop",O="name",S="property",N="rel",B="src",M="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},j="defaultTitle",I="defer",L="encodeSpecialCharacters",x="onChangeClientState",R="titleTemplate",F=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),D=[b.NOSCRIPT,b.SCRIPT,b.STYLE],U="data-react-helmet",Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},J=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Q=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),W=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},H=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},G=function(e){var t=_(e,b.TITLE),n=_(e,R);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,j);return t||r||void 0},V=function(e){return _(e,x)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return W({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[b.BASE]})).map((function(e){return e[b.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var a=r[o].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+Y(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),i=0;i<a.length;i++){var c=a[i],s=c.toLowerCase();-1===t.indexOf(s)||n===N&&"canonical"===e[n].toLowerCase()||s===N&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==T&&c!==w&&c!==k||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(o),i=0;i<a.length;i++){var c=a[i],s=h()({},r[c],o[c]);r[c]=s}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,p=e.title,d=e.titleAttributes;se(b.BODY,r),se(b.HTML,o),ce(p,d);var f={baseTag:le(b.BASE,n),linkTags:le(b.LINK,a),metaTags:le(b.META,i),noscriptTags:le(b.NOSCRIPT,c),scriptTags:le(b.SCRIPT,l),styleTags:le(b.STYLE,u)},m={},h={};Object.keys(f).forEach((function(e){var t=f[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=f[e].oldTags)})),t&&t(),s(e,m,h)},ie=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),se(b.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(U),o=r?r.split(","):[],a=[].concat(o),i=Object.keys(t),c=0;c<i.length;c++){var s=i[c],l=t[s]||"";n.getAttribute(s)!==l&&n.setAttribute(s,l),-1===o.indexOf(s)&&o.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var p=a.length-1;p>=0;p--)n.removeAttribute(a[p]);o.length===a.length?n.removeAttribute(U):n.getAttribute(U)!==i.join(",")&&n.setAttribute(U,i.join(","))}},le=function(e,t){var n=document.head||document.querySelector(b.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),a=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===T)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(U,"true"),o.some((function(e,t){return i=t,n.isEqualNode(e)}))?o.splice(i,1):a.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},pe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case b.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[U]=!0,o=pe(n,r),[c.createElement(b.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),a=ie(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+q(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case A:return{toComponent:function(){return pe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[U]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===T||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===T||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+o:o}),""),a=r.innerHTML||r.cssText||"",i=-1===D.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(i?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,a=e.linkTags,i=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,p=void 0===u?"":u,d=e.titleAttributes;return{base:de(b.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(A,o,r),link:de(b.LINK,a,r),meta:de(b.META,i,r),noscript:de(b.NOSCRIPT,c,r),script:de(b.SCRIPT,s,r),style:de(b.STYLE,l,r),title:de(b.TITLE,{title:p,titleAttributes:d},r)}},me=p()((function(e){return{baseTag:K([E,M],e),bodyAttributes:Z(g,e),defer:_(e,I),encode:_(e,L),htmlAttributes:Z(A,e),linkTags:X(b.LINK,[N,E],e),metaTags:X(b.META,[O,v,C,S,k],e),noscriptTags:X(b.NOSCRIPT,[T],e),onChangeClientState:V(e),scriptTags:X(b.SCRIPT,[B,T],e),styleTags:X(b.STYLE,[w],e),title:G(e),titleAttributes:Z(y,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ae(e,(function(){oe=null}))})):(ae(e),oe=null)}),fe)((function(){return null})),he=(o=me,i=a=function(e){function t(){return J(this,t),H(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!f()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case b.SCRIPT:case b.NOSCRIPT:return{innerHTML:t};case b.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,a=e.nestedChildren;return W({},r,((t={})[n.type]=[].concat(r[n.type]||[],[W({},o,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,a=e.newChildProps,i=e.nestedChildren;switch(r.type){case b.TITLE:return W({},o,((t={})[r.type]=i,t.titleAttributes=W({},a),t));case b.BODY:return W({},o,{bodyAttributes:W({},a)});case b.HTML:return W({},o,{htmlAttributes:W({},a)})}return W({},o,((n={})[r.type]=W({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=W({},t);return Object.keys(e).forEach((function(t){var r;n=W({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,a=o.children,i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[F[n]||n]=e[n],t}),t)}(z(o,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case b.LINK:case b.META:case b.NOSCRIPT:case b.SCRIPT:case b.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:i,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:i,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=z(e,["children"]),r=W({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},Q(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=o.peek,a.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},i);he.renderStatic=he.rewind;var ge={pages:{home:"Home",about:"About Me",projects:"Projects"}},Ae=function(e){var t=e.title,n=e.onClick,r=e.disabled,o=void 0!==r&&r;return c.createElement("button",{type:"button",className:"navbar-item "+(o?"disabled":""),onClick:n,"aria-label":t,disabled:o},t)},ye=function(e){var t=e.onHomeClick,n=e.onAboutClick,r=e.onProjectsClick;return c.createElement("nav",{className:"navbar"},c.createElement("ul",null,c.createElement("li",null,c.createElement(Ae,{title:ge.pages.home,onClick:t})),c.createElement("li",null,c.createElement(Ae,{title:ge.pages.about,onClick:n})),c.createElement("li",null,c.createElement(Ae,{title:ge.pages.projects,onClick:r,disabled:!0}))))},be={title:"Hugh Henry",email:"hughcthenry@gmail.com",links:{github:{name:"Github"},linkedIn:{name:"LinkedIn"},spotify:{name:"Spotify"},resume:{name:"Download CV"}}},ve={aboutMe:{subtitle:"About Me",text:"I am currently undertaking a Bachelor’s degree in Software Engineering (Honours) and a Bachelor’s degree in Commerce (majoring in Business Analytics) at Monash University. I enjoy physical activities such as walking my dogs, sports, yoga and bouldering. I spend a lot of time on personal projects. These include building mobile games and developing web applications, with the occasional backend application to support them."},previousExperience:{subtitle:"Previous Working Experience",experiences:[{roles:[{dates:"Feb 2022 - Present",organisationAndRole:"Melbourne eResearch Group – Casual Research Assistant",dotPoints:[]},{dates:"Jan 2022 - Feb 2022",organisationAndRole:"Melbourne eResearch Group – Intern",dotPoints:["Worked as a data analyst writing R scripts to perform spatial analysis as part of an ongoing client project","Integrated R scripts as plugins into web-based digital twin tool","Created markdown reports visualising analysis results in order to form spatial models"]}]},{roles:[{dates:"July 2021 - Dec 2021",organisationAndRole:"Deloitte Digital – Monash IBL Intern",dotPoints:["Worked as a junior front-end web developer on the first release of an ongoing client project","Built reusable components and dynamic pages and page flows using React JS, Next.js and SCSS","Worked in a large development team, regularly reviewing and testing other developers’ work","Participated in daily standups, high-level project meetings, sprint planning and sprint retrospectives"]}]},{roles:[{dates:"July 2020 - Aug 2020",organisationAndRole:"Melbourne eResearch Group – Intern",dotPoints:["Worked independently to complete a proof-of-project iOS application to be used to collect data through surveys from people diagnosed with Polycystic Ovarian Syndrome","Linked the application with a local database and implemented RSA security to protect the privacy of respondents"]}]},{roles:[{dates:"Jan 2018 – June 2021",organisationAndRole:"Officeworks Mentone - Casual Team Member",dotPoints:["Worked mainly in a sales and customer service role","Provided customers with creative solutions for their technological problems, including: Helping them with mobile phones, computers, networking products, cables and iOS devices","Worked closely with a large and diverse team, constantly communicating with one another in person and via radio headsets"]}]},{roles:[{dates:"Oct 2016 - Mar 2020",organisationAndRole:"Squash (sports) Coach at The Bentleigh Club - Volunteer",dotPoints:["Coaching players ranging from young children to adults (ages 4 - 60)","Co-manager of The Bentleigh Club Squash Group Facebook page","Member of The Bentleigh Club Squash committee"]}]}]},education:{subtitle:"Education and Training",experiences:[{dates:"2018 - Present",title:"Studying a Bachelor of Software Engineering (Honours) and Bachelor of Commerce (majoring in Business Analytics) at Monash University"},{dates:"2012 - 2017",title:"Student at McKinnon Secondary College (Completed)"}]}},we=function(){return c.createElement("div",{className:"about-container"},c.createElement("div",{className:"about-me-container"},c.createElement("h3",{className:"h-400 subtitle"},ve.aboutMe.subtitle),c.createElement("p",{className:"p"},ve.aboutMe.text)),c.createElement("span",{className:"horizontal-line-break"}),c.createElement("div",{className:"previous-experience-container"},c.createElement("h3",{className:"h-400 subtitle"},ve.previousExperience.subtitle),c.createElement("ul",{className:"experiences-container"},ve.previousExperience.experiences.map((function(e,t){return c.createElement("li",{className:"experience",key:t},c.createElement("ul",{className:"roles-container"},e.roles.map((function(e,t){return c.createElement("li",{className:"role",key:t},c.createElement("div",{className:"date-title-container"},c.createElement("div",{className:"p role-date"},e.dates),c.createElement("div",{className:"p role-title"},e.organisationAndRole)),Array.isArray(e.dotPoints)&&e.dotPoints.length>0&&c.createElement("ul",{className:"description-points-container"},e.dotPoints.map((function(e,t){return c.createElement("li",{className:"p description-point",key:t},e)}))))}))))})))),c.createElement("span",{className:"horizontal-line-break"}),c.createElement("div",{className:"education-container"},c.createElement("h3",{className:"h-400 subtitle"},ve.education.subtitle),c.createElement("ul",{className:"experiences-container"},ve.education.experiences.map((function(e,t){return c.createElement("li",{className:"experience",key:t},c.createElement("div",{className:"p role-date"},e.dates),c.createElement("div",{className:"p"},e.title))})))))},Ee=n(396),Ce=function(){return c.createElement(c.Fragment,null,c.createElement(he,{link:[{rel:"shortcut icon",type:"image/png",href:"data:image/png;base64,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"}]},c.createElement("title",null,"Hugh Henry"),c.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0;"}),c.createElement("meta",{name:"referrer",content:"origin"})),c.createElement("main",{className:"main"},c.createElement(ye,{onHomeClick:function(){return console.log("Home clicked")},onAboutClick:function(){return console.log("About Me clicked")},onProjectsClick:function(){return console.log("Projects clicked")}}),c.createElement("section",{className:"section logo-section"},c.createElement("div",{className:"logo-title-container"},c.createElement("div",{className:"logo-img","aria-label":"Logo"}),c.createElement("h1",{className:"h-100 title"},be.title),c.createElement("h3",{className:"h-600 email"},be.email),c.createElement("ul",{className:"links-container"},c.createElement("li",{className:"link github"},c.createElement("a",{href:"https://github.com/Mhudlark",target:"_blank",rel:"noopener"})),c.createElement("li",{className:"link linkedIn"},c.createElement("a",{href:"https://www.linkedin.com/in/hugh-henry-0ab6b31b5/",target:"_blank",rel:"noopener"})),c.createElement("li",{className:"link spotify"},c.createElement("a",{href:"https://open.spotify.com/user/truncusrumpus?si=wabDsx5pRFWq-sXKC0jVPw",target:"_blank",rel:"noopener"})),c.createElement("li",{className:"link resume"},c.createElement("button",{type:"button",className:"",onClick:function(){console.log("Download PDF!")}}))))),c.createElement("section",{className:"section about-section"},c.createElement(we,null)),"hello",c.createElement(Ee.S,{src:"../images/favicon.png",alt:"hello",width:100,height:100,__imageData:n(6579)})))}},6579:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282828","images":{"fallback":{"src":"/static/89efdfea9d64edc7a335461f36f9cab0/15e42/favicon.png","srcSet":"/static/89efdfea9d64edc7a335461f36f9cab0/88208/favicon.png 25w,\\n/static/89efdfea9d64edc7a335461f36f9cab0/e9fba/favicon.png 50w,\\n/static/89efdfea9d64edc7a335461f36f9cab0/15e42/favicon.png 100w","sizes":"(min-width: 100px) 100px, 100vw"},"sources":[{"srcSet":"/static/89efdfea9d64edc7a335461f36f9cab0/2fa99/favicon.webp 25w,\\n/static/89efdfea9d64edc7a335461f36f9cab0/dbc4a/favicon.webp 50w,\\n/static/89efdfea9d64edc7a335461f36f9cab0/d8057/favicon.webp 100w","type":"image/webp","sizes":"(min-width: 100px) 100px, 100vw"}]},"width":100,"height":100}')}}]);
//# sourceMappingURL=component---src-pages-index-js-e1d70ed3b8a569eb2a5c.js.map