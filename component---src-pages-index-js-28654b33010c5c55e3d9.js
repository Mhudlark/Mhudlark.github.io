(self.webpackChunkmhudlark_github=self.webpackChunkmhudlark_github||[]).push([[678],{2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,s,u;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;for(u=e.entries();!(l=u.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(u=e.entries();!(l=u.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(s=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,s[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==s[l]&&"__v"!==s[l]&&"__o"!==s[l]||!e.$$typeof)&&!i(e[s[l]],a[s[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,s=[];function u(){l=e(s.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,s=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){s.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),u()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},1228:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ze}});var r,o,i,a,c=n(7294),l=n(5697),s=n.n(l),u=n(4839),f=n.n(u),d=n(2993),p=n.n(d),m=n(6494),h=n.n(m),g="bodyAttributes",y="htmlAttributes",b="titleAttributes",A={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(A).map((function(e){return A[e]})),"charset"),w="cssText",E="href",T="http-equiv",C="innerHTML",k="itemprop",O="name",S="property",L="rel",N="src",M="target",B={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",j="encodeSpecialCharacters",R="onChangeClientState",x="titleTemplate",D=Object.keys(B).reduce((function(e,t){return e[B[t]]=t,e}),{}),F=[A.NOSCRIPT,A.SCRIPT,A.STYLE],Y="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},H=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},z=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=_(e,A.TITLE),n=_(e,x);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,P);return t||r||void 0},G=function(e){return _(e,R)||function(){}},Z=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[A.BASE]})).map((function(e){return e[A.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===L&&"canonical"===e[n].toLowerCase()||l===L&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==w&&c!==k||(n=c)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][s]&&(o[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,f=e.title,d=e.titleAttributes;le(A.BODY,r),le(A.HTML,o),ce(f,d);var p={baseTag:se(A.BASE,n),linkTags:se(A.LINK,i),metaTags:se(A.META,a),noscriptTags:se(A.NOSCRIPT,c),scriptTags:se(A.SCRIPT,s),styleTags:se(A.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(A.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Y),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===o.indexOf(l)&&o.push(l);var u=i.indexOf(l);-1!==u&&i.splice(u,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Y):n.getAttribute(Y)!==a.join(",")&&n.setAttribute(Y,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(A.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===w)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Y,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},ue=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case A.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Y]=!0,o=fe(n,r),[c.createElement(A.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=ue(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+q(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case g:case y:return{toComponent:function(){return fe(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Y]=!0,r);return Object.keys(t).forEach((function(e){var n=B[e]||e;if(n===C||n===w){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+q(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,s=e.styleTags,u=e.title,f=void 0===u?"":u,d=e.titleAttributes;return{base:de(A.BASE,t,r),bodyAttributes:de(g,n,r),htmlAttributes:de(y,o,r),link:de(A.LINK,i,r),meta:de(A.META,a,r),noscript:de(A.NOSCRIPT,c,r),script:de(A.SCRIPT,l,r),style:de(A.STYLE,s,r),title:de(A.TITLE,{title:f,titleAttributes:d},r)}},me=f()((function(e){return{baseTag:K([E,M],e),bodyAttributes:Z(g,e),defer:_(e,I),encode:_(e,j),htmlAttributes:Z(y,e),linkTags:X(A.LINK,[L,E],e),metaTags:X(A.META,[O,v,T,S,k],e),noscriptTags:X(A.NOSCRIPT,[C],e),onChangeClientState:G(e),scriptTags:X(A.SCRIPT,[N,C],e),styleTags:X(A.STYLE,[w],e),title:V(e),titleAttributes:Z(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),he=(o=me,a=i=function(e){function t(){return U(this,t),z(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case A.SCRIPT:case A.NOSCRIPT:return{innerHTML:t};case A.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case A.TITLE:return J({},o,((t={})[r.type]=a,t.titleAttributes=J({},i),t));case A.BODY:return J({},o,{bodyAttributes:J({},i)});case A.HTML:return J({},o,{htmlAttributes:J({},i)})}return J({},o,((n={})[r.type]=J({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[D[n]||n]=e[n],t}),t)}(Q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case A.LINK:case A.META:case A.NOSCRIPT:case A.SCRIPT:case A.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Q(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ge={pages:{home:"Home",about:"About Me",projects:"Projects"}},ye=function(e){var t=e.title,n=e.onClick,r=e.disabled,o=void 0!==r&&r;return c.createElement("button",{type:"button",className:"navbar-item "+(o?"disabled":""),onClick:n,"aria-label":t,disabled:o},t)},be=function(e){var t=e.onHomeClick,n=e.onAboutClick,r=e.onProjectsClick;return c.createElement("nav",{className:"navbar"},c.createElement("ul",null,c.createElement("li",null,c.createElement(ye,{title:ge.pages.home,onClick:t})),c.createElement("li",null,c.createElement(ye,{title:ge.pages.about,onClick:n})),c.createElement("li",null,c.createElement(ye,{title:ge.pages.projects,onClick:r,disabled:!0}))))},Ae={title:"Hugh Henry",email:"hughcthenry@gmail.com",links:{github:{name:"Github"},linkedIn:{name:"LinkedIn"},spotify:{name:"Spotify"},resume:{name:"Download CV"}}},ve={aboutMe:{subtitle:"About Me",text:"I am currently undertaking a Bachelor’s degree in Software Engineering (Honours) and a Bachelor’s degree in Commerce (majoring in Business Analytics) at Monash University. I enjoy physical activities such as walking my dogs, sports, yoga and bouldering. I spend a lot of time on personal projects. These include building mobile games and developing web applications, with the occasional backend application to support them."},previousExperience:{subtitle:"Previous Working Experience",experiences:[{roles:[{dates:"Feb 2022 - Present",organisationAndRole:"Melbourne eResearch Group – Casual Research Assistant",dotPoints:[]},{dates:"Jan 2022 - Feb 2022",organisationAndRole:"Melbourne eResearch Group – Intern",dotPoints:["Worked as a data analyst writing R scripts to perform spatial analysis as part of an ongoing client project","Integrated R scripts as plugins into web-based digital twin tool","Created markdown reports visualising analysis results in order to form spatial models"]}]},{roles:[{dates:"July 2021 - Dec 2021",organisationAndRole:"Deloitte Digital – Monash IBL Intern",dotPoints:["Worked as a junior front-end web developer on the first release of an ongoing client project","Built reusable components and dynamic pages and page flows using React JS, Next.js and SCSS","Worked in a large development team, regularly reviewing and testing other developers’ work","Participated in daily standups, high-level project meetings, sprint planning and sprint retrospectives"]}]},{roles:[{dates:"July 2020 - Aug 2020",organisationAndRole:"Melbourne eResearch Group – Intern",dotPoints:["Worked independently to complete a proof-of-project iOS application to be used to collect data through surveys from people diagnosed with Polycystic Ovarian Syndrome","Linked the application with a local database and implemented RSA security to protect the privacy of respondents"]}]},{roles:[{dates:"Jan 2018 – June 2021",organisationAndRole:"Officeworks Mentone - Casual Team Member",dotPoints:["Worked mainly in a sales and customer service role","Provided customers with creative solutions for their technological problems, including: Helping them with mobile phones, computers, networking products, cables and iOS devices","Worked closely with a large and diverse team, constantly communicating with one another in person and via radio headsets"]}]},{roles:[{dates:"Oct 2016 - Mar 2020",organisationAndRole:"Squash (sports) Coach at The Bentleigh Club - Volunteer",dotPoints:["Coaching players ranging from young children to adults (ages 4 - 60)","Co-manager of The Bentleigh Club Squash Group Facebook page","Member of The Bentleigh Club Squash committee"]}]}]},education:{subtitle:"Education and Training",experiences:[{dates:"2018 - Present",title:"Studying a Bachelor of Software Engineering (Honours) and Bachelor of Commerce (majoring in Business Analytics) at Monash University"},{dates:"2012 - 2017",title:"Student at McKinnon Secondary College (Completed)"}]}},we=function(){return c.createElement("div",{className:"about-container"},c.createElement("div",{className:"about-me-container"},c.createElement("h3",{className:"h-400 subtitle"},ve.aboutMe.subtitle),c.createElement("p",{className:"p"},ve.aboutMe.text)),c.createElement("span",{className:"horizontal-line-break"}),c.createElement("div",{className:"previous-experience-container"},c.createElement("h3",{className:"h-400 subtitle"},ve.previousExperience.subtitle),c.createElement("ul",{className:"experiences-container"},ve.previousExperience.experiences.map((function(e,t){return c.createElement("li",{className:"experience",key:t},c.createElement("ul",{className:"roles-container"},e.roles.map((function(e,t){return c.createElement("li",{className:"role",key:t},c.createElement("div",{className:"date-title-container"},c.createElement("div",{className:"p role-date"},e.dates),c.createElement("div",{className:"p role-title"},e.organisationAndRole)),Array.isArray(e.dotPoints)&&e.dotPoints.length>0&&c.createElement("ul",{className:"description-points-container"},e.dotPoints.map((function(e,t){return c.createElement("li",{className:"p description-point",key:t},e)}))))}))))})))),c.createElement("span",{className:"horizontal-line-break"}),c.createElement("div",{className:"education-container"},c.createElement("h3",{className:"h-400 subtitle"},ve.education.subtitle),c.createElement("ul",{className:"experiences-container"},ve.education.experiences.map((function(e,t){return c.createElement("li",{className:"experience",key:t},c.createElement("div",{className:"p role-date"},e.dates),c.createElement("div",{className:"p"},e.title))})))))};var Ee=n(181);function Te(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||(0,Ee.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var Ce=function(e){return void 0===e||"auto"===e||"instant"===e||"smooth"===e};function ke(e,t){this.scrollLeft=e,this.scrollTop=t}var Oe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"cannot convert to dictionary.";return"Failed to execute '".concat(e,"' on '").concat(t,"': ").concat(n)},Se=function(e,t,n){return Oe(e,t,"The provided value '".concat(n,"' is not a valid enum value of type ScrollBehavior."))},Le=function(e,t,n){var r,o="__SEAMLESS.BACKUP$".concat(t);return e[o]||!e[t]||(null===(r=e[t])||void 0===r?void 0:r.__isPolyfill)||(e[o]=e[t]),e[o]||n},Ne=function(e){return e.ownerDocument.scrollingElement||e.ownerDocument.documentElement},Me=function(e){return.5*(1-Math.cos(Math.PI*e))};function Be(){var e,t;return Be=t=(null===(e=window.performance)||void 0===e?void 0:e.now)?function(){return window.performance.now()}:function(){return window.Date.now()},t()}var Pe=function e(t){var n=(Be()-t.timeStamp)/(t.duration||500);if(n>1)return t.method(t.targetX,t.targetY),void t.callback();var r=(t.timingFunc||Me)(n),o=t.startX+(t.targetX-t.startX)*r,i=t.startY+(t.targetY-t.startY)*r;t.method(o,i),t.rafId=window.requestAnimationFrame((function(){e(t)}))},Ie=function(e){return isFinite(e)?Number(e):0},je=function(e){return function(t,n,r){var o,i,a,c=Te((o=t).window===o?[Ne(t.document.documentElement),"Window"]:[t,"Element"],2),l=c[0],s=c[1],u=null!=n?n:{};if(a=typeof(i=u),null===i||"object"!==a&&"function"!==a)throw new TypeError(Oe(e,s));if(!Ce(u.behavior))throw new TypeError(Se(e,s,u.behavior));"scrollBy"===e&&(u.left=Ie(u.left)+l.scrollLeft,u.top=Ie(u.top)+l.scrollTop),function(e,t,n){var r,o;if(function(e){var t;return null!==(t=e.isConnected)&&void 0!==t?t:!(e.ownerDocument&&1&e.ownerDocument.compareDocumentPosition(e))}(e)){var i=e.scrollLeft,a=e.scrollTop,c=Ie(null!==(r=t.left)&&void 0!==r?r:i),l=Ie(null!==(o=t.top)&&void 0!==o?o:a);if(c!==i||l!==a){var s=Le(HTMLElement.prototype,"scroll",ke),u=Le(Object.getPrototypeOf(e),"scroll",s).bind(e);if("smooth"===t.behavior){var f=function(){window.removeEventListener("wheel",p),window.removeEventListener("touchmove",p)},d=Object.assign(Object.assign({},n),{timeStamp:Be(),startX:i,startY:a,targetX:c,targetY:l,rafId:0,method:u,callback:f}),p=function(){window.cancelAnimationFrame(d.rafId),f()};window.addEventListener("wheel",p,{passive:!0,once:!0}),window.addEventListener("touchmove",p,{passive:!0,once:!0}),Pe(d)}else u(c,l)}}}(l,u,r)}},Re=je("scroll"),xe=Re,De=function(e){switch(e){case"horizontal-tb":case"lr":case"lr-tb":case"rl":case"rl-tb":return 0;case"vertical-rl":case"tb":case"tb-rl":return 1;case"vertical-lr":case"tb-lr":return 2;case"sideways-rl":return 3;case"sideways-lr":return 4}return 0},Fe=function(e,t,n,r){var o=0;switch(t||(o^=2),e){case 0:o=o>>1|(1&o)<<1;var i=[r,n];n=i[0],r=i[1];break;case 1:case 3:o^=1;break;case 4:o^=2}return[o,n,r]},Ye=function(e){return 1==(1&Fe(De(e.writingMode),"rtl"!==e.direction,void 0,void 0)[0])},We=function(e,t,n,r,o,i,a){return 0!==e?e:o<t&&i>n||o>t&&i<n?null:o<=t&&a<=r||i>=n&&a>=r?2:i>n&&a<r||o<t&&a>r?3:null},Ue=function(e){return"visible"!==e&&"clip"!==e},He=function(e,t){return(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth)&&(Ue(t.overflowY)||Ue(t.overflowX)||e===Ne(e))},Je=function(e){var t=e.parentNode,n=e.parentElement;if(null===n&&null!==t){if(11===t.nodeType)return t.host;if(9===t.nodeType)return function(e){var t;try{return(null===(t=e.ownerDocument.defaultView)||void 0===t?void 0:t.frameElement)||null}catch(n){return null}}(e)}return n},Qe=function(e,t,n){return e<t?t:e>n?n:e},ze=function(e,t,n){switch(e){case 1:return(t+n)/2;case 3:return n;case 2:case 0:return t}},qe=function(e,t){var n,r,o,i=null===(n=e.ownerDocument.defaultView)||void 0===n?void 0:n.visualViewport,a=Te(e===Ne(e)?[0,0,null!==(r=null==i?void 0:i.width)&&void 0!==r?r:e.clientWidth,null!==(o=null==i?void 0:i.height)&&void 0!==o?o:e.clientHeight]:[t.left,t.top,e.clientWidth,e.clientHeight],4),c=a[0],l=a[1],s=a[2],u=a[3],f=c+e.clientLeft,d=l+e.clientTop;return[d,f+s,d+u,f]},Ve=function(e,t){var n=[],r=e.ownerDocument,o=r.defaultView;if(!o)return n;for(var i=window.getComputedStyle(e),a="rtl"!==i.direction,c=function(e,t,n){var r=Te(Fe(t,n,e.block||"start",e.inline||"nearest"),3),o=r[0];return[r[1],r[2]].map((function(e,t){switch(e){case"center":return 1;case"nearest":return 0;default:return"start"===e==!(o>>t&1)?2:3}}))}(t,De(i.writingMode||i.getPropertyValue("-webkit-writing-mode")||i.getPropertyValue("-ms-writing-mode")),a),l=Te(c,2),s=l[0],u=l[1],f=function(e,t,n){var r,o=t.top,i=t.right,a=t.bottom,c=t.left,l=(r=e.ownerDocument,["scroll-margin","scroll-snap-margin"].filter((function(e){return e in r.documentElement.style}))[0]);if(!l)return[o,i,a,c];var s=function(e){var t=n.getPropertyValue("".concat(l,"-").concat(e));return parseInt(t,10)||0};return[o-s("top"),i+s("right"),a+s("bottom"),c-s("left")]}(e,e.getBoundingClientRect(),i),d=Te(f,4),p=d[0],m=d[1],h=d[2],g=d[3],y=Je(e);null!==y;y=Je(y)){if(r!==y.ownerDocument){if(!(o=(r=y.ownerDocument).defaultView))break;var b=y.getBoundingClientRect(),A=b.left,v=b.top;p+=v,m+=A,h+=v,g+=A}var w=o.getComputedStyle(y);if("fixed"===w.position)break;if(He(y,w)){var E=y.getBoundingClientRect(),T=Te(qe(y,E),4),C=T[0],k=T[1],O=T[2],S=T[3],L=We(s,S,k,y.clientWidth,g,m,m-g),N=We(u,C,O,y.clientHeight,p,h,h-p),M=null===L?0:ze(L,g,m)-ze(L,S,k),B=null===N?0:ze(N,p,h)-ze(N,C,O),P=Ye(w)?Qe(M,-y.scrollWidth+y.clientWidth-y.scrollLeft,-y.scrollLeft):Qe(M,-y.scrollLeft,y.scrollWidth-y.clientWidth-y.scrollLeft),I=Qe(B,-y.scrollTop,y.scrollHeight-y.clientHeight-y.scrollTop);n.push([y,{left:y.scrollLeft+P,top:y.scrollTop+I,behavior:t.behavior}]),p=Math.max(p-I,C),m=Math.min(m-P,k),h=Math.min(h-I,O),g=Math.max(g-P,S)}}return n},Ge=function(e,t,n){var r=t||{};if(!Ce(r.behavior))throw new TypeError(Se("scrollIntoView","Element",r.behavior));Ve(e,r).forEach((function(e){var t=Te(e,2),r=t[0],o=t[1];xe(r,o,n)}))},Ze=function(){var e=(0,c.useRef)(null),t=(0,c.useRef)(null);return c.createElement(c.Fragment,null,c.createElement(he,null,c.createElement("title",null,"Hugh Henry"),c.createElement("link",{rel:"shortcut icon",type:"image/png",href:"data:image/png;base64,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"}),c.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0;"}),c.createElement("meta",{name:"referrer",content:"origin"})),c.createElement("main",{className:"main"},c.createElement(be,{onHomeClick:function(){Ge(e.current,{behavior:"smooth",block:"start"})},onAboutClick:function(){Ge(t.current,{behavior:"smooth",block:"start"})},onProjectsClick:function(){return console.log("Projects clicked")}}),c.createElement("section",{className:"section logo-section",ref:e},c.createElement("div",{className:"logo-title-container"},c.createElement("div",{className:"logo-img","aria-label":"Logo"}),c.createElement("h1",{className:"h-100 title"},Ae.title),c.createElement("h3",{className:"h-600 email"},Ae.email),c.createElement("ul",{className:"links-container"},c.createElement("li",{className:"link github"},c.createElement("a",{href:"https://github.com/Mhudlark",target:"_blank",rel:"noopener"})),c.createElement("li",{className:"link linkedIn"},c.createElement("a",{href:"https://www.linkedin.com/in/hugh-henry-0ab6b31b5/",target:"_blank",rel:"noopener"})),c.createElement("li",{className:"link spotify"},c.createElement("a",{href:"https://open.spotify.com/user/truncusrumpus?si=wabDsx5pRFWq-sXKC0jVPw",target:"_blank",rel:"noopener"})),c.createElement("li",{className:"link resume"},c.createElement("button",{type:"button",className:"",onClick:function(){console.log("Download PDF!")}}))))),c.createElement("section",{className:"section about-section",ref:t},c.createElement(we,null))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-28654b33010c5c55e3d9.js.map