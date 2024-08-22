function fk(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ME(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var FE={exports:{}},qh={},UE={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou=Symbol.for("react.element"),pk=Symbol.for("react.portal"),mk=Symbol.for("react.fragment"),gk=Symbol.for("react.strict_mode"),_k=Symbol.for("react.profiler"),yk=Symbol.for("react.provider"),vk=Symbol.for("react.context"),wk=Symbol.for("react.forward_ref"),Ik=Symbol.for("react.suspense"),Ek=Symbol.for("react.memo"),Tk=Symbol.for("react.lazy"),Tv=Symbol.iterator;function Sk(t){return t===null||typeof t!="object"?null:(t=Tv&&t[Tv]||t["@@iterator"],typeof t=="function"?t:null)}var BE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jE=Object.assign,zE={};function Ko(t,e,n){this.props=t,this.context=e,this.refs=zE,this.updater=n||BE}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function $E(){}$E.prototype=Ko.prototype;function Qm(t,e,n){this.props=t,this.context=e,this.refs=zE,this.updater=n||BE}var Ym=Qm.prototype=new $E;Ym.constructor=Qm;jE(Ym,Ko.prototype);Ym.isPureReactComponent=!0;var Sv=Array.isArray,qE=Object.prototype.hasOwnProperty,Jm={current:null},WE={key:!0,ref:!0,__self:!0,__source:!0};function GE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)qE.call(e,r)&&!WE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ou,type:t,key:s,ref:o,props:i,_owner:Jm.current}}function Rk(t,e){return{$$typeof:ou,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Xm(t){return typeof t=="object"&&t!==null&&t.$$typeof===ou}function Ak(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rv=/\/+/g;function yf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ak(""+t.key):e.toString(36)}function Ec(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ou:case pk:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+yf(o,0):r,Sv(i)?(n="",t!=null&&(n=t.replace(Rv,"$&/")+"/"),Ec(i,e,n,"",function(c){return c})):i!=null&&(Xm(i)&&(i=Rk(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Rv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Sv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+yf(s,a);o+=Ec(s,e,n,l,i)}else if(l=Sk(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+yf(s,a++),o+=Ec(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qu(t,e,n){if(t==null)return t;var r=[],i=0;return Ec(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Pk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Lt={current:null},Tc={transition:null},kk={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:Tc,ReactCurrentOwner:Jm};function HE(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:Qu,forEach:function(t,e,n){Qu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qu(t,function(){e++}),e},toArray:function(t){return Qu(t,function(e){return e})||[]},only:function(t){if(!Xm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ae.Component=Ko;ae.Fragment=mk;ae.Profiler=_k;ae.PureComponent=Qm;ae.StrictMode=gk;ae.Suspense=Ik;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kk;ae.act=HE;ae.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)qE.call(e,l)&&!WE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ou,type:t.type,key:i,ref:s,props:r,_owner:o}};ae.createContext=function(t){return t={$$typeof:vk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yk,_context:t},t.Consumer=t};ae.createElement=GE;ae.createFactory=function(t){var e=GE.bind(null,t);return e.type=t,e};ae.createRef=function(){return{current:null}};ae.forwardRef=function(t){return{$$typeof:wk,render:t}};ae.isValidElement=Xm;ae.lazy=function(t){return{$$typeof:Tk,_payload:{_status:-1,_result:t},_init:Pk}};ae.memo=function(t,e){return{$$typeof:Ek,type:t,compare:e===void 0?null:e}};ae.startTransition=function(t){var e=Tc.transition;Tc.transition={};try{t()}finally{Tc.transition=e}};ae.unstable_act=HE;ae.useCallback=function(t,e){return Lt.current.useCallback(t,e)};ae.useContext=function(t){return Lt.current.useContext(t)};ae.useDebugValue=function(){};ae.useDeferredValue=function(t){return Lt.current.useDeferredValue(t)};ae.useEffect=function(t,e){return Lt.current.useEffect(t,e)};ae.useId=function(){return Lt.current.useId()};ae.useImperativeHandle=function(t,e,n){return Lt.current.useImperativeHandle(t,e,n)};ae.useInsertionEffect=function(t,e){return Lt.current.useInsertionEffect(t,e)};ae.useLayoutEffect=function(t,e){return Lt.current.useLayoutEffect(t,e)};ae.useMemo=function(t,e){return Lt.current.useMemo(t,e)};ae.useReducer=function(t,e,n){return Lt.current.useReducer(t,e,n)};ae.useRef=function(t){return Lt.current.useRef(t)};ae.useState=function(t){return Lt.current.useState(t)};ae.useSyncExternalStore=function(t,e,n){return Lt.current.useSyncExternalStore(t,e,n)};ae.useTransition=function(){return Lt.current.useTransition()};ae.version="18.3.1";UE.exports=ae;var j=UE.exports;const Ck=ME(j),bk=fk({__proto__:null,default:Ck},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xk=j,Nk=Symbol.for("react.element"),Dk=Symbol.for("react.fragment"),Ok=Object.prototype.hasOwnProperty,Vk=xk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Lk={key:!0,ref:!0,__self:!0,__source:!0};function KE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ok.call(e,r)&&!Lk.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Nk,type:t,key:s,ref:o,props:i,_owner:Vk.current}}qh.Fragment=Dk;qh.jsx=KE;qh.jsxs=KE;FE.exports=qh;var F=FE.exports,cp={},QE={exports:{}},sn={},YE={exports:{}},JE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,ee){var K=H.length;H.push(ee);e:for(;0<K;){var ne=K-1>>>1,re=H[ne];if(0<i(re,ee))H[ne]=ee,H[K]=re,K=ne;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ee=H[0],K=H.pop();if(K!==ee){H[0]=K;e:for(var ne=0,re=H.length,se=re>>>1;ne<se;){var vn=2*(ne+1)-1,Xn=H[vn],Zn=vn+1,er=H[Zn];if(0>i(Xn,K))Zn<re&&0>i(er,Xn)?(H[ne]=er,H[Zn]=K,ne=Zn):(H[ne]=Xn,H[vn]=K,ne=vn);else if(Zn<re&&0>i(er,K))H[ne]=er,H[Zn]=K,ne=Zn;else break e}}return ee}function i(H,ee){var K=H.sortIndex-ee.sortIndex;return K!==0?K:H.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,m=3,g=!1,T=!1,R=!1,k=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(H){for(var ee=n(c);ee!==null;){if(ee.callback===null)r(c);else if(ee.startTime<=H)r(c),ee.sortIndex=ee.expirationTime,e(l,ee);else break;ee=n(c)}}function C(H){if(R=!1,w(H),!T)if(n(l)!==null)T=!0,Ci(L);else{var ee=n(c);ee!==null&&yn(C,ee.startTime-H)}}function L(H,ee){T=!1,R&&(R=!1,I(y),y=-1),g=!0;var K=m;try{for(w(ee),f=n(l);f!==null&&(!(f.expirationTime>ee)||H&&!b());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,m=f.priorityLevel;var re=ne(f.expirationTime<=ee);ee=t.unstable_now(),typeof re=="function"?f.callback=re:f===n(l)&&r(l),w(ee)}else r(l);f=n(l)}if(f!==null)var se=!0;else{var vn=n(c);vn!==null&&yn(C,vn.startTime-ee),se=!1}return se}finally{f=null,m=K,g=!1}}var M=!1,E=null,y=-1,S=5,A=-1;function b(){return!(t.unstable_now()-A<S)}function x(){if(E!==null){var H=t.unstable_now();A=H;var ee=!0;try{ee=E(!0,H)}finally{ee?P():(M=!1,E=null)}}else M=!1}var P;if(typeof v=="function")P=function(){v(x)};else if(typeof MessageChannel<"u"){var Ft=new MessageChannel,Jn=Ft.port2;Ft.port1.onmessage=x,P=function(){Jn.postMessage(null)}}else P=function(){k(x,0)};function Ci(H){E=H,M||(M=!0,P())}function yn(H,ee){y=k(function(){H(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){T||g||(T=!0,Ci(L))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var ee=3;break;default:ee=m}var K=m;m=ee;try{return H()}finally{m=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,ee){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var K=m;m=H;try{return ee()}finally{m=K}},t.unstable_scheduleCallback=function(H,ee,K){var ne=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ne+K:ne):K=ne,H){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=K+re,H={id:h++,callback:ee,priorityLevel:H,startTime:K,expirationTime:re,sortIndex:-1},K>ne?(H.sortIndex=K,e(c,H),n(l)===null&&H===n(c)&&(R?(I(y),y=-1):R=!0,yn(C,K-ne))):(H.sortIndex=re,e(l,H),T||g||(T=!0,Ci(L))),H},t.unstable_shouldYield=b,t.unstable_wrapCallback=function(H){var ee=m;return function(){var K=m;m=ee;try{return H.apply(this,arguments)}finally{m=K}}}})(JE);YE.exports=JE;var Mk=YE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fk=j,nn=Mk;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var XE=new Set,El={};function Is(t,e){Io(t,e),Io(t+"Capture",e)}function Io(t,e){for(El[t]=e,t=0;t<e.length;t++)XE.add(e[t])}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hp=Object.prototype.hasOwnProperty,Uk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Av={},Pv={};function Bk(t){return hp.call(Pv,t)?!0:hp.call(Av,t)?!1:Uk.test(t)?Pv[t]=!0:(Av[t]=!0,!1)}function jk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zk(t,e,n,r){if(e===null||typeof e>"u"||jk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new Mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new Mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new Mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new Mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new Mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new Mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new Mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new Mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new Mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zm=/[\-:]([a-z])/g;function eg(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zm,eg);pt[e]=new Mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zm,eg);pt[e]=new Mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zm,eg);pt[e]=new Mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function tg(t,e,n,r){var i=pt.hasOwnProperty(e)?pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zk(e,n,i,r)&&(n=null),r||i===null?Bk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tr=Fk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yu=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),ng=Symbol.for("react.strict_mode"),dp=Symbol.for("react.profiler"),ZE=Symbol.for("react.provider"),eT=Symbol.for("react.context"),rg=Symbol.for("react.forward_ref"),fp=Symbol.for("react.suspense"),pp=Symbol.for("react.suspense_list"),ig=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),tT=Symbol.for("react.offscreen"),kv=Symbol.iterator;function Ca(t){return t===null||typeof t!="object"?null:(t=kv&&t[kv]||t["@@iterator"],typeof t=="function"?t:null)}var De=Object.assign,vf;function Ga(t){if(vf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vf=e&&e[1]||""}return`
`+vf+t}var wf=!1;function If(t,e){if(!t||wf)return"";wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ga(t):""}function $k(t){switch(t.tag){case 5:return Ga(t.type);case 16:return Ga("Lazy");case 13:return Ga("Suspense");case 19:return Ga("SuspenseList");case 0:case 2:case 15:return t=If(t.type,!1),t;case 11:return t=If(t.type.render,!1),t;case 1:return t=If(t.type,!0),t;default:return""}}function mp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qs:return"Fragment";case Ks:return"Portal";case dp:return"Profiler";case ng:return"StrictMode";case fp:return"Suspense";case pp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case eT:return(t.displayName||"Context")+".Consumer";case ZE:return(t._context.displayName||"Context")+".Provider";case rg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ig:return e=t.displayName||null,e!==null?e:mp(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return mp(t(e))}catch{}}return null}function qk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mp(e);case 8:return e===ng?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wk(t){var e=nT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ju(t){t._valueTracker||(t._valueTracker=Wk(t))}function rT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=nT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gp(t,e){var n=e.checked;return De({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iT(t,e){e=e.checked,e!=null&&tg(t,"checked",e,!1)}function _p(t,e){iT(t,e);var n=oi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yp(t,e.type,n):e.hasOwnProperty("defaultValue")&&yp(t,e.type,oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yp(t,e,n){(e!=="number"||Kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ha=Array.isArray;function ao(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+oi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return De({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function xv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Ha(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:oi(n)}}function sT(t,e){var n=oi(e.value),r=oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Nv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function oT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?oT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xu,aT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xu=Xu||document.createElement("div"),Xu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Gk=["Webkit","ms","Moz","O"];Object.keys(nl).forEach(function(t){Gk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),nl[e]=nl[t]})});function lT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||nl.hasOwnProperty(t)&&nl[t]?(""+e).trim():e+"px"}function uT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=lT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Hk=De({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ip(t,e){if(e){if(Hk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Ep(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tp=null;function sg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sp=null,lo=null,uo=null;function Dv(t){if(t=uu(t)){if(typeof Sp!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Qh(e),Sp(t.stateNode,t.type,e))}}function cT(t){lo?uo?uo.push(t):uo=[t]:lo=t}function hT(){if(lo){var t=lo,e=uo;if(uo=lo=null,Dv(t),e)for(t=0;t<e.length;t++)Dv(e[t])}}function dT(t,e){return t(e)}function fT(){}var Ef=!1;function pT(t,e,n){if(Ef)return t(e,n);Ef=!0;try{return dT(t,e,n)}finally{Ef=!1,(lo!==null||uo!==null)&&(fT(),hT())}}function Sl(t,e){var n=t.stateNode;if(n===null)return null;var r=Qh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Rp=!1;if(mr)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Rp=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Rp=!1}function Kk(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var rl=!1,Qc=null,Yc=!1,Ap=null,Qk={onError:function(t){rl=!0,Qc=t}};function Yk(t,e,n,r,i,s,o,a,l){rl=!1,Qc=null,Kk.apply(Qk,arguments)}function Jk(t,e,n,r,i,s,o,a,l){if(Yk.apply(this,arguments),rl){if(rl){var c=Qc;rl=!1,Qc=null}else throw Error(z(198));Yc||(Yc=!0,Ap=c)}}function Es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ov(t){if(Es(t)!==t)throw Error(z(188))}function Xk(t){var e=t.alternate;if(!e){if(e=Es(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ov(i),t;if(s===r)return Ov(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function gT(t){return t=Xk(t),t!==null?_T(t):null}function _T(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_T(t);if(e!==null)return e;t=t.sibling}return null}var yT=nn.unstable_scheduleCallback,Vv=nn.unstable_cancelCallback,Zk=nn.unstable_shouldYield,eC=nn.unstable_requestPaint,qe=nn.unstable_now,tC=nn.unstable_getCurrentPriorityLevel,og=nn.unstable_ImmediatePriority,vT=nn.unstable_UserBlockingPriority,Jc=nn.unstable_NormalPriority,nC=nn.unstable_LowPriority,wT=nn.unstable_IdlePriority,Wh=null,$n=null;function rC(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Wh,t,void 0,(t.current.flags&128)===128)}catch{}}var Pn=Math.clz32?Math.clz32:oC,iC=Math.log,sC=Math.LN2;function oC(t){return t>>>=0,t===0?32:31-(iC(t)/sC|0)|0}var Zu=64,ec=4194304;function Ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ka(a):(s&=o,s!==0&&(r=Ka(s)))}else o=n&~i,o!==0?r=Ka(o):s!==0&&(r=Ka(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Pn(e),i=1<<n,r|=t[n],e&=~i;return r}function aC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function lC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Pn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=aC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Pp(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function IT(){var t=Zu;return Zu<<=1,!(Zu&4194240)&&(Zu=64),t}function Tf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function au(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Pn(e),t[e]=n}function uC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ag(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function ET(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var TT,lg,ST,RT,AT,kp=!1,tc=[],Qr=null,Yr=null,Jr=null,Rl=new Map,Al=new Map,Br=[],cC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lv(t,e){switch(t){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Yr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Al.delete(e.pointerId)}}function xa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=uu(e),e!==null&&lg(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hC(t,e,n,r,i){switch(e){case"focusin":return Qr=xa(Qr,t,e,n,r,i),!0;case"dragenter":return Yr=xa(Yr,t,e,n,r,i),!0;case"mouseover":return Jr=xa(Jr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Rl.set(s,xa(Rl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Al.set(s,xa(Al.get(s)||null,t,e,n,r,i)),!0}return!1}function PT(t){var e=Wi(t.target);if(e!==null){var n=Es(e);if(n!==null){if(e=n.tag,e===13){if(e=mT(n),e!==null){t.blockedOn=e,AT(t.priority,function(){ST(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tp=r,n.target.dispatchEvent(r),Tp=null}else return e=uu(n),e!==null&&lg(e),t.blockedOn=n,!1;e.shift()}return!0}function Mv(t,e,n){Sc(t)&&n.delete(e)}function dC(){kp=!1,Qr!==null&&Sc(Qr)&&(Qr=null),Yr!==null&&Sc(Yr)&&(Yr=null),Jr!==null&&Sc(Jr)&&(Jr=null),Rl.forEach(Mv),Al.forEach(Mv)}function Na(t,e){t.blockedOn===e&&(t.blockedOn=null,kp||(kp=!0,nn.unstable_scheduleCallback(nn.unstable_NormalPriority,dC)))}function Pl(t){function e(i){return Na(i,t)}if(0<tc.length){Na(tc[0],t);for(var n=1;n<tc.length;n++){var r=tc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qr!==null&&Na(Qr,t),Yr!==null&&Na(Yr,t),Jr!==null&&Na(Jr,t),Rl.forEach(e),Al.forEach(e),n=0;n<Br.length;n++)r=Br[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Br.length&&(n=Br[0],n.blockedOn===null);)PT(n),n.blockedOn===null&&Br.shift()}var co=Tr.ReactCurrentBatchConfig,Zc=!0;function fC(t,e,n,r){var i=me,s=co.transition;co.transition=null;try{me=1,ug(t,e,n,r)}finally{me=i,co.transition=s}}function pC(t,e,n,r){var i=me,s=co.transition;co.transition=null;try{me=4,ug(t,e,n,r)}finally{me=i,co.transition=s}}function ug(t,e,n,r){if(Zc){var i=Cp(t,e,n,r);if(i===null)Df(t,e,r,eh,n),Lv(t,r);else if(hC(i,t,e,n,r))r.stopPropagation();else if(Lv(t,r),e&4&&-1<cC.indexOf(t)){for(;i!==null;){var s=uu(i);if(s!==null&&TT(s),s=Cp(t,e,n,r),s===null&&Df(t,e,r,eh,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Df(t,e,r,null,n)}}var eh=null;function Cp(t,e,n,r){if(eh=null,t=sg(r),t=Wi(t),t!==null)if(e=Es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return eh=t,null}function kT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tC()){case og:return 1;case vT:return 4;case Jc:case nC:return 16;case wT:return 536870912;default:return 16}default:return 16}}var qr=null,cg=null,Rc=null;function CT(){if(Rc)return Rc;var t,e=cg,n=e.length,r,i="value"in qr?qr.value:qr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Rc=i.slice(t,1<r?1-r:void 0)}function Ac(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nc(){return!0}function Fv(){return!1}function on(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nc:Fv,this.isPropagationStopped=Fv,this}return De(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nc)},persist:function(){},isPersistent:nc}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hg=on(Qo),lu=De({},Qo,{view:0,detail:0}),mC=on(lu),Sf,Rf,Da,Gh=De({},lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Da&&(Da&&t.type==="mousemove"?(Sf=t.screenX-Da.screenX,Rf=t.screenY-Da.screenY):Rf=Sf=0,Da=t),Sf)},movementY:function(t){return"movementY"in t?t.movementY:Rf}}),Uv=on(Gh),gC=De({},Gh,{dataTransfer:0}),_C=on(gC),yC=De({},lu,{relatedTarget:0}),Af=on(yC),vC=De({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),wC=on(vC),IC=De({},Qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EC=on(IC),TC=De({},Qo,{data:0}),Bv=on(TC),SC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},AC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=AC[t])?!!e[t]:!1}function dg(){return PC}var kC=De({},lu,{key:function(t){if(t.key){var e=SC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ac(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?RC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dg,charCode:function(t){return t.type==="keypress"?Ac(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ac(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CC=on(kC),bC=De({},Gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jv=on(bC),xC=De({},lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dg}),NC=on(xC),DC=De({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),OC=on(DC),VC=De({},Gh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LC=on(VC),MC=[9,13,27,32],fg=mr&&"CompositionEvent"in window,il=null;mr&&"documentMode"in document&&(il=document.documentMode);var FC=mr&&"TextEvent"in window&&!il,bT=mr&&(!fg||il&&8<il&&11>=il),zv=" ",$v=!1;function xT(t,e){switch(t){case"keyup":return MC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function NT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function UC(t,e){switch(t){case"compositionend":return NT(e);case"keypress":return e.which!==32?null:($v=!0,zv);case"textInput":return t=e.data,t===zv&&$v?null:t;default:return null}}function BC(t,e){if(Ys)return t==="compositionend"||!fg&&xT(t,e)?(t=CT(),Rc=cg=qr=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return bT&&e.locale!=="ko"?null:e.data;default:return null}}var jC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jC[t.type]:e==="textarea"}function DT(t,e,n,r){cT(r),e=th(e,"onChange"),0<e.length&&(n=new hg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var sl=null,kl=null;function zC(t){qT(t,0)}function Hh(t){var e=Zs(t);if(rT(e))return t}function $C(t,e){if(t==="change")return e}var OT=!1;if(mr){var Pf;if(mr){var kf="oninput"in document;if(!kf){var Wv=document.createElement("div");Wv.setAttribute("oninput","return;"),kf=typeof Wv.oninput=="function"}Pf=kf}else Pf=!1;OT=Pf&&(!document.documentMode||9<document.documentMode)}function Gv(){sl&&(sl.detachEvent("onpropertychange",VT),kl=sl=null)}function VT(t){if(t.propertyName==="value"&&Hh(kl)){var e=[];DT(e,kl,t,sg(t)),pT(zC,e)}}function qC(t,e,n){t==="focusin"?(Gv(),sl=e,kl=n,sl.attachEvent("onpropertychange",VT)):t==="focusout"&&Gv()}function WC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hh(kl)}function GC(t,e){if(t==="click")return Hh(e)}function HC(t,e){if(t==="input"||t==="change")return Hh(e)}function KC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Cn=typeof Object.is=="function"?Object.is:KC;function Cl(t,e){if(Cn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!hp.call(e,i)||!Cn(t[i],e[i]))return!1}return!0}function Hv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Kv(t,e){var n=Hv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hv(n)}}function LT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?LT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function MT(){for(var t=window,e=Kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Kc(t.document)}return e}function pg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function QC(t){var e=MT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&LT(n.ownerDocument.documentElement,n)){if(r!==null&&pg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Kv(n,s);var o=Kv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var YC=mr&&"documentMode"in document&&11>=document.documentMode,Js=null,bp=null,ol=null,xp=!1;function Qv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xp||Js==null||Js!==Kc(r)||(r=Js,"selectionStart"in r&&pg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ol&&Cl(ol,r)||(ol=r,r=th(bp,"onSelect"),0<r.length&&(e=new hg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Js)))}function rc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xs={animationend:rc("Animation","AnimationEnd"),animationiteration:rc("Animation","AnimationIteration"),animationstart:rc("Animation","AnimationStart"),transitionend:rc("Transition","TransitionEnd")},Cf={},FT={};mr&&(FT=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function Kh(t){if(Cf[t])return Cf[t];if(!Xs[t])return t;var e=Xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in FT)return Cf[t]=e[n];return t}var UT=Kh("animationend"),BT=Kh("animationiteration"),jT=Kh("animationstart"),zT=Kh("transitionend"),$T=new Map,Yv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vi(t,e){$T.set(t,e),Is(e,[t])}for(var bf=0;bf<Yv.length;bf++){var xf=Yv[bf],JC=xf.toLowerCase(),XC=xf[0].toUpperCase()+xf.slice(1);vi(JC,"on"+XC)}vi(UT,"onAnimationEnd");vi(BT,"onAnimationIteration");vi(jT,"onAnimationStart");vi("dblclick","onDoubleClick");vi("focusin","onFocus");vi("focusout","onBlur");vi(zT,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);Is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Is("onBeforeInput",["compositionend","keypress","textInput","paste"]);Is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ZC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function Jv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Jk(r,e,void 0,t),t.currentTarget=null}function qT(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Jv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Jv(i,a,c),s=l}}}if(Yc)throw t=Ap,Yc=!1,Ap=null,t}function Ie(t,e){var n=e[Lp];n===void 0&&(n=e[Lp]=new Set);var r=t+"__bubble";n.has(r)||(WT(e,t,2,!1),n.add(r))}function Nf(t,e,n){var r=0;e&&(r|=4),WT(n,t,r,e)}var ic="_reactListening"+Math.random().toString(36).slice(2);function bl(t){if(!t[ic]){t[ic]=!0,XE.forEach(function(n){n!=="selectionchange"&&(ZC.has(n)||Nf(n,!1,t),Nf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ic]||(e[ic]=!0,Nf("selectionchange",!1,e))}}function WT(t,e,n,r){switch(kT(e)){case 1:var i=fC;break;case 4:i=pC;break;default:i=ug}n=i.bind(null,e,n,t),i=void 0,!Rp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Df(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Wi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}pT(function(){var c=s,h=sg(n),f=[];e:{var m=$T.get(t);if(m!==void 0){var g=hg,T=t;switch(t){case"keypress":if(Ac(n)===0)break e;case"keydown":case"keyup":g=CC;break;case"focusin":T="focus",g=Af;break;case"focusout":T="blur",g=Af;break;case"beforeblur":case"afterblur":g=Af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Uv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=_C;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=NC;break;case UT:case BT:case jT:g=wC;break;case zT:g=OC;break;case"scroll":g=mC;break;case"wheel":g=LC;break;case"copy":case"cut":case"paste":g=EC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=jv}var R=(e&4)!==0,k=!R&&t==="scroll",I=R?m!==null?m+"Capture":null:m;R=[];for(var v=c,w;v!==null;){w=v;var C=w.stateNode;if(w.tag===5&&C!==null&&(w=C,I!==null&&(C=Sl(v,I),C!=null&&R.push(xl(v,C,w)))),k)break;v=v.return}0<R.length&&(m=new g(m,T,null,n,h),f.push({event:m,listeners:R}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",m&&n!==Tp&&(T=n.relatedTarget||n.fromElement)&&(Wi(T)||T[gr]))break e;if((g||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,g?(T=n.relatedTarget||n.toElement,g=c,T=T?Wi(T):null,T!==null&&(k=Es(T),T!==k||T.tag!==5&&T.tag!==6)&&(T=null)):(g=null,T=c),g!==T)){if(R=Uv,C="onMouseLeave",I="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(R=jv,C="onPointerLeave",I="onPointerEnter",v="pointer"),k=g==null?m:Zs(g),w=T==null?m:Zs(T),m=new R(C,v+"leave",g,n,h),m.target=k,m.relatedTarget=w,C=null,Wi(h)===c&&(R=new R(I,v+"enter",T,n,h),R.target=w,R.relatedTarget=k,C=R),k=C,g&&T)t:{for(R=g,I=T,v=0,w=R;w;w=Ls(w))v++;for(w=0,C=I;C;C=Ls(C))w++;for(;0<v-w;)R=Ls(R),v--;for(;0<w-v;)I=Ls(I),w--;for(;v--;){if(R===I||I!==null&&R===I.alternate)break t;R=Ls(R),I=Ls(I)}R=null}else R=null;g!==null&&Xv(f,m,g,R,!1),T!==null&&k!==null&&Xv(f,k,T,R,!0)}}e:{if(m=c?Zs(c):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var L=$C;else if(qv(m))if(OT)L=HC;else{L=WC;var M=qC}else(g=m.nodeName)&&g.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=GC);if(L&&(L=L(t,c))){DT(f,L,n,h);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&yp(m,"number",m.value)}switch(M=c?Zs(c):window,t){case"focusin":(qv(M)||M.contentEditable==="true")&&(Js=M,bp=c,ol=null);break;case"focusout":ol=bp=Js=null;break;case"mousedown":xp=!0;break;case"contextmenu":case"mouseup":case"dragend":xp=!1,Qv(f,n,h);break;case"selectionchange":if(YC)break;case"keydown":case"keyup":Qv(f,n,h)}var E;if(fg)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ys?xT(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(bT&&n.locale!=="ko"&&(Ys||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ys&&(E=CT()):(qr=h,cg="value"in qr?qr.value:qr.textContent,Ys=!0)),M=th(c,y),0<M.length&&(y=new Bv(y,t,null,n,h),f.push({event:y,listeners:M}),E?y.data=E:(E=NT(n),E!==null&&(y.data=E)))),(E=FC?UC(t,n):BC(t,n))&&(c=th(c,"onBeforeInput"),0<c.length&&(h=new Bv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=E))}qT(f,e)})}function xl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function th(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Sl(t,n),s!=null&&r.unshift(xl(t,s,i)),s=Sl(t,e),s!=null&&r.push(xl(t,s,i))),t=t.return}return r}function Ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Sl(n,s),l!=null&&o.unshift(xl(n,l,a))):i||(l=Sl(n,s),l!=null&&o.push(xl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var eb=/\r\n?/g,tb=/\u0000|\uFFFD/g;function Zv(t){return(typeof t=="string"?t:""+t).replace(eb,`
`).replace(tb,"")}function sc(t,e,n){if(e=Zv(e),Zv(t)!==e&&n)throw Error(z(425))}function nh(){}var Np=null,Dp=null;function Op(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vp=typeof setTimeout=="function"?setTimeout:void 0,nb=typeof clearTimeout=="function"?clearTimeout:void 0,ew=typeof Promise=="function"?Promise:void 0,rb=typeof queueMicrotask=="function"?queueMicrotask:typeof ew<"u"?function(t){return ew.resolve(null).then(t).catch(ib)}:Vp;function ib(t){setTimeout(function(){throw t})}function Of(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Pl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pl(e)}function Xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function tw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),On="__reactFiber$"+Yo,Nl="__reactProps$"+Yo,gr="__reactContainer$"+Yo,Lp="__reactEvents$"+Yo,sb="__reactListeners$"+Yo,ob="__reactHandles$"+Yo;function Wi(t){var e=t[On];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gr]||n[On]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=tw(t);t!==null;){if(n=t[On])return n;t=tw(t)}return e}t=n,n=t.parentNode}return null}function uu(t){return t=t[On]||t[gr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Qh(t){return t[Nl]||null}var Mp=[],eo=-1;function wi(t){return{current:t}}function Te(t){0>eo||(t.current=Mp[eo],Mp[eo]=null,eo--)}function ye(t,e){eo++,Mp[eo]=t.current,t.current=e}var ai={},St=wi(ai),Gt=wi(!1),rs=ai;function Eo(t,e){var n=t.type.contextTypes;if(!n)return ai;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ht(t){return t=t.childContextTypes,t!=null}function rh(){Te(Gt),Te(St)}function nw(t,e,n){if(St.current!==ai)throw Error(z(168));ye(St,e),ye(Gt,n)}function GT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,qk(t)||"Unknown",i));return De({},n,r)}function ih(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ai,rs=St.current,ye(St,t),ye(Gt,Gt.current),!0}function rw(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=GT(t,e,rs),r.__reactInternalMemoizedMergedChildContext=t,Te(Gt),Te(St),ye(St,t)):Te(Gt),ye(Gt,n)}var sr=null,Yh=!1,Vf=!1;function HT(t){sr===null?sr=[t]:sr.push(t)}function ab(t){Yh=!0,HT(t)}function Ii(){if(!Vf&&sr!==null){Vf=!0;var t=0,e=me;try{var n=sr;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sr=null,Yh=!1}catch(i){throw sr!==null&&(sr=sr.slice(t+1)),yT(og,Ii),i}finally{me=e,Vf=!1}}return null}var to=[],no=0,sh=null,oh=0,an=[],ln=0,is=null,or=1,ar="";function Li(t,e){to[no++]=oh,to[no++]=sh,sh=t,oh=e}function KT(t,e,n){an[ln++]=or,an[ln++]=ar,an[ln++]=is,is=t;var r=or;t=ar;var i=32-Pn(r)-1;r&=~(1<<i),n+=1;var s=32-Pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,or=1<<32-Pn(e)+i|n<<i|r,ar=s+t}else or=1<<s|n<<i|r,ar=t}function mg(t){t.return!==null&&(Li(t,1),KT(t,1,0))}function gg(t){for(;t===sh;)sh=to[--no],to[no]=null,oh=to[--no],to[no]=null;for(;t===is;)is=an[--ln],an[ln]=null,ar=an[--ln],an[ln]=null,or=an[--ln],an[ln]=null}var en=null,Xt=null,Re=!1,Rn=null;function QT(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function iw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,en=t,Xt=Xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,en=t,Xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:or,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,en=t,Xt=null,!0):!1;default:return!1}}function Fp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Up(t){if(Re){var e=Xt;if(e){var n=e;if(!iw(t,e)){if(Fp(t))throw Error(z(418));e=Xr(n.nextSibling);var r=en;e&&iw(t,e)?QT(r,n):(t.flags=t.flags&-4097|2,Re=!1,en=t)}}else{if(Fp(t))throw Error(z(418));t.flags=t.flags&-4097|2,Re=!1,en=t}}}function sw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;en=t}function oc(t){if(t!==en)return!1;if(!Re)return sw(t),Re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Op(t.type,t.memoizedProps)),e&&(e=Xt)){if(Fp(t))throw YT(),Error(z(418));for(;e;)QT(t,e),e=Xr(e.nextSibling)}if(sw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Xt=Xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Xt=null}}else Xt=en?Xr(t.stateNode.nextSibling):null;return!0}function YT(){for(var t=Xt;t;)t=Xr(t.nextSibling)}function To(){Xt=en=null,Re=!1}function _g(t){Rn===null?Rn=[t]:Rn.push(t)}var lb=Tr.ReactCurrentBatchConfig;function Oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function ac(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ow(t){var e=t._init;return e(t._payload)}function JT(t){function e(I,v){if(t){var w=I.deletions;w===null?(I.deletions=[v],I.flags|=16):w.push(v)}}function n(I,v){if(!t)return null;for(;v!==null;)e(I,v),v=v.sibling;return null}function r(I,v){for(I=new Map;v!==null;)v.key!==null?I.set(v.key,v):I.set(v.index,v),v=v.sibling;return I}function i(I,v){return I=ni(I,v),I.index=0,I.sibling=null,I}function s(I,v,w){return I.index=w,t?(w=I.alternate,w!==null?(w=w.index,w<v?(I.flags|=2,v):w):(I.flags|=2,v)):(I.flags|=1048576,v)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,v,w,C){return v===null||v.tag!==6?(v=zf(w,I.mode,C),v.return=I,v):(v=i(v,w),v.return=I,v)}function l(I,v,w,C){var L=w.type;return L===Qs?h(I,v,w.props.children,C,w.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Fr&&ow(L)===v.type)?(C=i(v,w.props),C.ref=Oa(I,v,w),C.return=I,C):(C=Dc(w.type,w.key,w.props,null,I.mode,C),C.ref=Oa(I,v,w),C.return=I,C)}function c(I,v,w,C){return v===null||v.tag!==4||v.stateNode.containerInfo!==w.containerInfo||v.stateNode.implementation!==w.implementation?(v=$f(w,I.mode,C),v.return=I,v):(v=i(v,w.children||[]),v.return=I,v)}function h(I,v,w,C,L){return v===null||v.tag!==7?(v=Xi(w,I.mode,C,L),v.return=I,v):(v=i(v,w),v.return=I,v)}function f(I,v,w){if(typeof v=="string"&&v!==""||typeof v=="number")return v=zf(""+v,I.mode,w),v.return=I,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Yu:return w=Dc(v.type,v.key,v.props,null,I.mode,w),w.ref=Oa(I,null,v),w.return=I,w;case Ks:return v=$f(v,I.mode,w),v.return=I,v;case Fr:var C=v._init;return f(I,C(v._payload),w)}if(Ha(v)||Ca(v))return v=Xi(v,I.mode,w,null),v.return=I,v;ac(I,v)}return null}function m(I,v,w,C){var L=v!==null?v.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return L!==null?null:a(I,v,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yu:return w.key===L?l(I,v,w,C):null;case Ks:return w.key===L?c(I,v,w,C):null;case Fr:return L=w._init,m(I,v,L(w._payload),C)}if(Ha(w)||Ca(w))return L!==null?null:h(I,v,w,C,null);ac(I,w)}return null}function g(I,v,w,C,L){if(typeof C=="string"&&C!==""||typeof C=="number")return I=I.get(w)||null,a(v,I,""+C,L);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Yu:return I=I.get(C.key===null?w:C.key)||null,l(v,I,C,L);case Ks:return I=I.get(C.key===null?w:C.key)||null,c(v,I,C,L);case Fr:var M=C._init;return g(I,v,w,M(C._payload),L)}if(Ha(C)||Ca(C))return I=I.get(w)||null,h(v,I,C,L,null);ac(v,C)}return null}function T(I,v,w,C){for(var L=null,M=null,E=v,y=v=0,S=null;E!==null&&y<w.length;y++){E.index>y?(S=E,E=null):S=E.sibling;var A=m(I,E,w[y],C);if(A===null){E===null&&(E=S);break}t&&E&&A.alternate===null&&e(I,E),v=s(A,v,y),M===null?L=A:M.sibling=A,M=A,E=S}if(y===w.length)return n(I,E),Re&&Li(I,y),L;if(E===null){for(;y<w.length;y++)E=f(I,w[y],C),E!==null&&(v=s(E,v,y),M===null?L=E:M.sibling=E,M=E);return Re&&Li(I,y),L}for(E=r(I,E);y<w.length;y++)S=g(E,I,y,w[y],C),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?y:S.key),v=s(S,v,y),M===null?L=S:M.sibling=S,M=S);return t&&E.forEach(function(b){return e(I,b)}),Re&&Li(I,y),L}function R(I,v,w,C){var L=Ca(w);if(typeof L!="function")throw Error(z(150));if(w=L.call(w),w==null)throw Error(z(151));for(var M=L=null,E=v,y=v=0,S=null,A=w.next();E!==null&&!A.done;y++,A=w.next()){E.index>y?(S=E,E=null):S=E.sibling;var b=m(I,E,A.value,C);if(b===null){E===null&&(E=S);break}t&&E&&b.alternate===null&&e(I,E),v=s(b,v,y),M===null?L=b:M.sibling=b,M=b,E=S}if(A.done)return n(I,E),Re&&Li(I,y),L;if(E===null){for(;!A.done;y++,A=w.next())A=f(I,A.value,C),A!==null&&(v=s(A,v,y),M===null?L=A:M.sibling=A,M=A);return Re&&Li(I,y),L}for(E=r(I,E);!A.done;y++,A=w.next())A=g(E,I,y,A.value,C),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?y:A.key),v=s(A,v,y),M===null?L=A:M.sibling=A,M=A);return t&&E.forEach(function(x){return e(I,x)}),Re&&Li(I,y),L}function k(I,v,w,C){if(typeof w=="object"&&w!==null&&w.type===Qs&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case Yu:e:{for(var L=w.key,M=v;M!==null;){if(M.key===L){if(L=w.type,L===Qs){if(M.tag===7){n(I,M.sibling),v=i(M,w.props.children),v.return=I,I=v;break e}}else if(M.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Fr&&ow(L)===M.type){n(I,M.sibling),v=i(M,w.props),v.ref=Oa(I,M,w),v.return=I,I=v;break e}n(I,M);break}else e(I,M);M=M.sibling}w.type===Qs?(v=Xi(w.props.children,I.mode,C,w.key),v.return=I,I=v):(C=Dc(w.type,w.key,w.props,null,I.mode,C),C.ref=Oa(I,v,w),C.return=I,I=C)}return o(I);case Ks:e:{for(M=w.key;v!==null;){if(v.key===M)if(v.tag===4&&v.stateNode.containerInfo===w.containerInfo&&v.stateNode.implementation===w.implementation){n(I,v.sibling),v=i(v,w.children||[]),v.return=I,I=v;break e}else{n(I,v);break}else e(I,v);v=v.sibling}v=$f(w,I.mode,C),v.return=I,I=v}return o(I);case Fr:return M=w._init,k(I,v,M(w._payload),C)}if(Ha(w))return T(I,v,w,C);if(Ca(w))return R(I,v,w,C);ac(I,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,v!==null&&v.tag===6?(n(I,v.sibling),v=i(v,w),v.return=I,I=v):(n(I,v),v=zf(w,I.mode,C),v.return=I,I=v),o(I)):n(I,v)}return k}var So=JT(!0),XT=JT(!1),ah=wi(null),lh=null,ro=null,yg=null;function vg(){yg=ro=lh=null}function wg(t){var e=ah.current;Te(ah),t._currentValue=e}function Bp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ho(t,e){lh=t,yg=ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(zt=!0),t.firstContext=null)}function pn(t){var e=t._currentValue;if(yg!==t)if(t={context:t,memoizedValue:e,next:null},ro===null){if(lh===null)throw Error(z(308));ro=t,lh.dependencies={lanes:0,firstContext:t}}else ro=ro.next=t;return e}var Gi=null;function Ig(t){Gi===null?Gi=[t]:Gi.push(t)}function ZT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Ig(e)):(n.next=i.next,i.next=n),e.interleaved=n,_r(t,r)}function _r(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function Eg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_r(t,n)}return i=r.interleaved,i===null?(e.next=e,Ig(r)):(e.next=i.next,i.next=e),r.interleaved=e,_r(t,n)}function Pc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ag(t,n)}}function aw(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function uh(t,e,n,r){var i=t.updateQueue;Ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,g=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var T=t,R=a;switch(m=e,g=n,R.tag){case 1:if(T=R.payload,typeof T=="function"){f=T.call(g,f,m);break e}f=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=R.payload,m=typeof T=="function"?T.call(g,f,m):T,m==null)break e;f=De({},f,m);break e;case 2:Ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else g={eventTime:g,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=g,l=f):h=h.next=g,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);os|=o,t.lanes=o,t.memoizedState=f}}function lw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var cu={},qn=wi(cu),Dl=wi(cu),Ol=wi(cu);function Hi(t){if(t===cu)throw Error(z(174));return t}function Tg(t,e){switch(ye(Ol,e),ye(Dl,t),ye(qn,cu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wp(e,t)}Te(qn),ye(qn,e)}function Ro(){Te(qn),Te(Dl),Te(Ol)}function t0(t){Hi(Ol.current);var e=Hi(qn.current),n=wp(e,t.type);e!==n&&(ye(Dl,t),ye(qn,n))}function Sg(t){Dl.current===t&&(Te(qn),Te(Dl))}var be=wi(0);function ch(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lf=[];function Rg(){for(var t=0;t<Lf.length;t++)Lf[t]._workInProgressVersionPrimary=null;Lf.length=0}var kc=Tr.ReactCurrentDispatcher,Mf=Tr.ReactCurrentBatchConfig,ss=0,xe=null,Ye=null,tt=null,hh=!1,al=!1,Vl=0,ub=0;function yt(){throw Error(z(321))}function Ag(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Cn(t[n],e[n]))return!1;return!0}function Pg(t,e,n,r,i,s){if(ss=s,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kc.current=t===null||t.memoizedState===null?fb:pb,t=n(r,i),al){s=0;do{if(al=!1,Vl=0,25<=s)throw Error(z(301));s+=1,tt=Ye=null,e.updateQueue=null,kc.current=mb,t=n(r,i)}while(al)}if(kc.current=dh,e=Ye!==null&&Ye.next!==null,ss=0,tt=Ye=xe=null,hh=!1,e)throw Error(z(300));return t}function kg(){var t=Vl!==0;return Vl=0,t}function Dn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?xe.memoizedState=tt=t:tt=tt.next=t,tt}function mn(){if(Ye===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=tt===null?xe.memoizedState:tt.next;if(e!==null)tt=e,Ye=t;else{if(t===null)throw Error(z(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},tt===null?xe.memoizedState=tt=t:tt=tt.next=t}return tt}function Ll(t,e){return typeof e=="function"?e(t):e}function Ff(t){var e=mn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((ss&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,xe.lanes|=h,os|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Cn(r,e.memoizedState)||(zt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,xe.lanes|=s,os|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uf(t){var e=mn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Cn(s,e.memoizedState)||(zt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function n0(){}function r0(t,e){var n=xe,r=mn(),i=e(),s=!Cn(r.memoizedState,i);if(s&&(r.memoizedState=i,zt=!0),r=r.queue,Cg(o0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,Ml(9,s0.bind(null,n,r,i,e),void 0,null),rt===null)throw Error(z(349));ss&30||i0(n,e,i)}return i}function i0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s0(t,e,n,r){e.value=n,e.getSnapshot=r,a0(e)&&l0(t)}function o0(t,e,n){return n(function(){a0(e)&&l0(t)})}function a0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Cn(t,n)}catch{return!0}}function l0(t){var e=_r(t,1);e!==null&&kn(e,t,1,-1)}function uw(t){var e=Dn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ll,lastRenderedState:t},e.queue=t,t=t.dispatch=db.bind(null,xe,t),[e.memoizedState,t]}function Ml(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function u0(){return mn().memoizedState}function Cc(t,e,n,r){var i=Dn();xe.flags|=t,i.memoizedState=Ml(1|e,n,void 0,r===void 0?null:r)}function Jh(t,e,n,r){var i=mn();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&Ag(r,o.deps)){i.memoizedState=Ml(e,n,s,r);return}}xe.flags|=t,i.memoizedState=Ml(1|e,n,s,r)}function cw(t,e){return Cc(8390656,8,t,e)}function Cg(t,e){return Jh(2048,8,t,e)}function c0(t,e){return Jh(4,2,t,e)}function h0(t,e){return Jh(4,4,t,e)}function d0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f0(t,e,n){return n=n!=null?n.concat([t]):null,Jh(4,4,d0.bind(null,e,t),n)}function bg(){}function p0(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ag(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function m0(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ag(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function g0(t,e,n){return ss&21?(Cn(n,e)||(n=IT(),xe.lanes|=n,os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,zt=!0),t.memoizedState=n)}function cb(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Mf.transition;Mf.transition={};try{t(!1),e()}finally{me=n,Mf.transition=r}}function _0(){return mn().memoizedState}function hb(t,e,n){var r=ti(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},y0(t))v0(e,n);else if(n=ZT(t,e,n,r),n!==null){var i=Nt();kn(n,t,r,i),w0(n,e,r)}}function db(t,e,n){var r=ti(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(y0(t))v0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Cn(a,o)){var l=e.interleaved;l===null?(i.next=i,Ig(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ZT(t,e,i,r),n!==null&&(i=Nt(),kn(n,t,r,i),w0(n,e,r))}}function y0(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function v0(t,e){al=hh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ag(t,n)}}var dh={readContext:pn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},fb={readContext:pn,useCallback:function(t,e){return Dn().memoizedState=[t,e===void 0?null:e],t},useContext:pn,useEffect:cw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4194308,4,d0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cc(4,2,t,e)},useMemo:function(t,e){var n=Dn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hb.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=Dn();return t={current:t},e.memoizedState=t},useState:uw,useDebugValue:bg,useDeferredValue:function(t){return Dn().memoizedState=t},useTransition:function(){var t=uw(!1),e=t[0];return t=cb.bind(null,t[1]),Dn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,i=Dn();if(Re){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),rt===null)throw Error(z(349));ss&30||i0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cw(o0.bind(null,r,s,t),[t]),r.flags|=2048,Ml(9,s0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Dn(),e=rt.identifierPrefix;if(Re){var n=ar,r=or;n=(r&~(1<<32-Pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ub++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pb={readContext:pn,useCallback:p0,useContext:pn,useEffect:Cg,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:h0,useMemo:m0,useReducer:Ff,useRef:u0,useState:function(){return Ff(Ll)},useDebugValue:bg,useDeferredValue:function(t){var e=mn();return g0(e,Ye.memoizedState,t)},useTransition:function(){var t=Ff(Ll)[0],e=mn().memoizedState;return[t,e]},useMutableSource:n0,useSyncExternalStore:r0,useId:_0,unstable_isNewReconciler:!1},mb={readContext:pn,useCallback:p0,useContext:pn,useEffect:Cg,useImperativeHandle:f0,useInsertionEffect:c0,useLayoutEffect:h0,useMemo:m0,useReducer:Uf,useRef:u0,useState:function(){return Uf(Ll)},useDebugValue:bg,useDeferredValue:function(t){var e=mn();return Ye===null?e.memoizedState=t:g0(e,Ye.memoizedState,t)},useTransition:function(){var t=Uf(Ll)[0],e=mn().memoizedState;return[t,e]},useMutableSource:n0,useSyncExternalStore:r0,useId:_0,unstable_isNewReconciler:!1};function Tn(t,e){if(t&&t.defaultProps){e=De({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:De({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Xh={isMounted:function(t){return(t=t._reactInternals)?Es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ti(t),s=dr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zr(t,s,i),e!==null&&(kn(e,t,i,r),Pc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ti(t),s=dr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zr(t,s,i),e!==null&&(kn(e,t,i,r),Pc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=ti(t),i=dr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zr(t,i,r),e!==null&&(kn(e,t,r,n),Pc(e,t,r))}};function hw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Cl(n,r)||!Cl(i,s):!0}function I0(t,e,n){var r=!1,i=ai,s=e.contextType;return typeof s=="object"&&s!==null?s=pn(s):(i=Ht(e)?rs:St.current,r=e.contextTypes,s=(r=r!=null)?Eo(t,i):ai),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Xh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function dw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Xh.enqueueReplaceState(e,e.state,null)}function zp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Eg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pn(s):(s=Ht(e)?rs:St.current,i.context=Eo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Xh.enqueueReplaceState(i,i.state,null),uh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",r=e;do n+=$k(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Bf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $p(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gb=typeof WeakMap=="function"?WeakMap:Map;function E0(t,e,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ph||(ph=!0,Zp=r),$p(t,e)},n}function T0(t,e,n){n=dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){$p(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$p(t,e),typeof r!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function fw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=bb.bind(null,t,e,n),e.then(t,t))}function pw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function mw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dr(-1,1),e.tag=2,Zr(n,e,1))),n.lanes|=1),t)}var _b=Tr.ReactCurrentOwner,zt=!1;function kt(t,e,n,r){e.child=t===null?XT(e,null,n,r):So(e,t.child,n,r)}function gw(t,e,n,r,i){n=n.render;var s=e.ref;return ho(e,i),r=Pg(t,e,n,r,s,i),n=kg(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yr(t,e,i)):(Re&&n&&mg(e),e.flags|=1,kt(t,e,r,i),e.child)}function _w(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Fg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,S0(t,e,s,r,i)):(t=Dc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Cl,n(o,r)&&t.ref===e.ref)return yr(t,e,i)}return e.flags|=1,t=ni(s,r),t.ref=e.ref,t.return=e,e.child=t}function S0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Cl(s,r)&&t.ref===e.ref)if(zt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(zt=!0);else return e.lanes=t.lanes,yr(t,e,i)}return qp(t,e,n,r,i)}function R0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(so,Yt),Yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(so,Yt),Yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ye(so,Yt),Yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ye(so,Yt),Yt|=r;return kt(t,e,i,n),e.child}function A0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function qp(t,e,n,r,i){var s=Ht(n)?rs:St.current;return s=Eo(e,s),ho(e,i),n=Pg(t,e,n,r,s,i),r=kg(),t!==null&&!zt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yr(t,e,i)):(Re&&r&&mg(e),e.flags|=1,kt(t,e,n,i),e.child)}function yw(t,e,n,r,i){if(Ht(n)){var s=!0;ih(e)}else s=!1;if(ho(e,i),e.stateNode===null)bc(t,e),I0(e,n,r),zp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pn(c):(c=Ht(n)?rs:St.current,c=Eo(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&dw(e,o,r,c),Ur=!1;var m=e.memoizedState;o.state=m,uh(e,r,o,i),l=e.memoizedState,a!==r||m!==l||Gt.current||Ur?(typeof h=="function"&&(jp(e,n,h,r),l=e.memoizedState),(a=Ur||hw(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,e0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Tn(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pn(l):(l=Ht(n)?rs:St.current,l=Eo(e,l));var g=n.getDerivedStateFromProps;(h=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&dw(e,o,r,l),Ur=!1,m=e.memoizedState,o.state=m,uh(e,r,o,i);var T=e.memoizedState;a!==f||m!==T||Gt.current||Ur?(typeof g=="function"&&(jp(e,n,g,r),T=e.memoizedState),(c=Ur||hw(e,n,c,r,m,T,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return Wp(t,e,n,r,s,i)}function Wp(t,e,n,r,i,s){A0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&rw(e,n,!1),yr(t,e,s);r=e.stateNode,_b.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=So(e,t.child,null,s),e.child=So(e,null,a,s)):kt(t,e,a,s),e.memoizedState=r.state,i&&rw(e,n,!0),e.child}function P0(t){var e=t.stateNode;e.pendingContext?nw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&nw(t,e.context,!1),Tg(t,e.containerInfo)}function vw(t,e,n,r,i){return To(),_g(i),e.flags|=256,kt(t,e,n,r),e.child}var Gp={dehydrated:null,treeContext:null,retryLane:0};function Hp(t){return{baseLanes:t,cachePool:null,transitions:null}}function k0(t,e,n){var r=e.pendingProps,i=be.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ye(be,i&1),t===null)return Up(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=td(o,r,0,null),t=Xi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hp(n),e.memoizedState=Gp,t):xg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return yb(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ni(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ni(a,s):(s=Xi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gp,r}return s=t.child,t=s.sibling,r=ni(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function xg(t,e){return e=td({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lc(t,e,n,r){return r!==null&&_g(r),So(e,t.child,null,n),t=xg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yb(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Bf(Error(z(422))),lc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=td({mode:"visible",children:r.children},i,0,null),s=Xi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&So(e,t.child,null,o),e.child.memoizedState=Hp(o),e.memoizedState=Gp,s);if(!(e.mode&1))return lc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=Bf(s,r,void 0),lc(t,e,o,r)}if(a=(o&t.childLanes)!==0,zt||a){if(r=rt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_r(t,i),kn(r,t,i,-1))}return Mg(),r=Bf(Error(z(421))),lc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Xt=Xr(i.nextSibling),en=e,Re=!0,Rn=null,t!==null&&(an[ln++]=or,an[ln++]=ar,an[ln++]=is,or=t.id,ar=t.overflow,is=e),e=xg(e,r.children),e.flags|=4096,e)}function ww(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Bp(t.return,e,n)}function jf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function C0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(kt(t,e,r.children,n),r=be.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ww(t,n,e);else if(t.tag===19)ww(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(be,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ch(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ch(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jf(e,!0,n,null,s);break;case"together":jf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vb(t,e,n){switch(e.tag){case 3:P0(e),To();break;case 5:t0(e);break;case 1:Ht(e.type)&&ih(e);break;case 4:Tg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ye(ah,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(be,be.current&1),e.flags|=128,null):n&e.child.childLanes?k0(t,e,n):(ye(be,be.current&1),t=yr(t,e,n),t!==null?t.sibling:null);ye(be,be.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return C0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ye(be,be.current),r)break;return null;case 22:case 23:return e.lanes=0,R0(t,e,n)}return yr(t,e,n)}var b0,Kp,x0,N0;b0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kp=function(){};x0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hi(qn.current);var s=null;switch(n){case"input":i=gp(t,i),r=gp(t,r),s=[];break;case"select":i=De({},i,{value:void 0}),r=De({},r,{value:void 0}),s=[];break;case"textarea":i=vp(t,i),r=vp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=nh)}Ip(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(El.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(El.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Ie("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};N0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Va(t,e){if(!Re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wb(t,e,n){var r=e.pendingProps;switch(gg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return Ht(e.type)&&rh(),vt(e),null;case 3:return r=e.stateNode,Ro(),Te(Gt),Te(St),Rg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Rn!==null&&(nm(Rn),Rn=null))),Kp(t,e),vt(e),null;case 5:Sg(e);var i=Hi(Ol.current);if(n=e.type,t!==null&&e.stateNode!=null)x0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return vt(e),null}if(t=Hi(qn.current),oc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[On]=e,r[Nl]=s,t=(e.mode&1)!==0,n){case"dialog":Ie("cancel",r),Ie("close",r);break;case"iframe":case"object":case"embed":Ie("load",r);break;case"video":case"audio":for(i=0;i<Qa.length;i++)Ie(Qa[i],r);break;case"source":Ie("error",r);break;case"img":case"image":case"link":Ie("error",r),Ie("load",r);break;case"details":Ie("toggle",r);break;case"input":Cv(r,s),Ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ie("invalid",r);break;case"textarea":xv(r,s),Ie("invalid",r)}Ip(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&sc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sc(r.textContent,a,t),i=["children",""+a]):El.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ie("scroll",r)}switch(n){case"input":Ju(r),bv(r,s,!0);break;case"textarea":Ju(r),Nv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=nh)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=oT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[On]=e,t[Nl]=r,b0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ep(n,r),n){case"dialog":Ie("cancel",t),Ie("close",t),i=r;break;case"iframe":case"object":case"embed":Ie("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qa.length;i++)Ie(Qa[i],t);i=r;break;case"source":Ie("error",t),i=r;break;case"img":case"image":case"link":Ie("error",t),Ie("load",t),i=r;break;case"details":Ie("toggle",t),i=r;break;case"input":Cv(t,r),i=gp(t,r),Ie("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=De({},r,{value:void 0}),Ie("invalid",t);break;case"textarea":xv(t,r),i=vp(t,r),Ie("invalid",t);break;default:i=r}Ip(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?uT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&aT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Tl(t,l):typeof l=="number"&&Tl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(El.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ie("scroll",t):l!=null&&tg(t,s,l,o))}switch(n){case"input":Ju(t),bv(t,r,!1);break;case"textarea":Ju(t),Nv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+oi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ao(t,!!r.multiple,s,!1):r.defaultValue!=null&&ao(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=nh)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)N0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Hi(Ol.current),Hi(qn.current),oc(e)){if(r=e.stateNode,n=e.memoizedProps,r[On]=e,(s=r.nodeValue!==n)&&(t=en,t!==null))switch(t.tag){case 3:sc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[On]=e,e.stateNode=r}return vt(e),null;case 13:if(Te(be),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Re&&Xt!==null&&e.mode&1&&!(e.flags&128))YT(),To(),e.flags|=98560,s=!1;else if(s=oc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[On]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else Rn!==null&&(nm(Rn),Rn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||be.current&1?Je===0&&(Je=3):Mg())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return Ro(),Kp(t,e),t===null&&bl(e.stateNode.containerInfo),vt(e),null;case 10:return wg(e.type._context),vt(e),null;case 17:return Ht(e.type)&&rh(),vt(e),null;case 19:if(Te(be),s=e.memoizedState,s===null)return vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Va(s,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ch(t),o!==null){for(e.flags|=128,Va(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(be,be.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>Po&&(e.flags|=128,r=!0,Va(s,!1),e.lanes=4194304)}else{if(!r)if(t=ch(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Re)return vt(e),null}else 2*qe()-s.renderingStartTime>Po&&n!==1073741824&&(e.flags|=128,r=!0,Va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=be.current,ye(be,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return Lg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Yt&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function Ib(t,e){switch(gg(e),e.tag){case 1:return Ht(e.type)&&rh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ro(),Te(Gt),Te(St),Rg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Sg(e),null;case 13:if(Te(be),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Te(be),null;case 4:return Ro(),null;case 10:return wg(e.type._context),null;case 22:case 23:return Lg(),null;case 24:return null;default:return null}}var uc=!1,It=!1,Eb=typeof WeakSet=="function"?WeakSet:Set,Y=null;function io(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Le(t,e,r)}else n.current=null}function Qp(t,e,n){try{n()}catch(r){Le(t,e,r)}}var Iw=!1;function Tb(t,e){if(Np=Zc,t=MT(),pg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var g;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(g=f.firstChild)!==null;)m=f,f=g;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(g=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Dp={focusedElem:t,selectionRange:n},Zc=!1,Y=e;Y!==null;)if(e=Y,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Y=t;else for(;Y!==null;){e=Y;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var R=T.memoizedProps,k=T.memoizedState,I=e.stateNode,v=I.getSnapshotBeforeUpdate(e.elementType===e.type?R:Tn(e.type,R),k);I.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=e.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(C){Le(e,e.return,C)}if(t=e.sibling,t!==null){t.return=e.return,Y=t;break}Y=e.return}return T=Iw,Iw=!1,T}function ll(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qp(e,n,s)}i=i.next}while(i!==r)}}function Zh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Yp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D0(t){var e=t.alternate;e!==null&&(t.alternate=null,D0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[On],delete e[Nl],delete e[Lp],delete e[sb],delete e[ob])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function O0(t){return t.tag===5||t.tag===3||t.tag===4}function Ew(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=nh));else if(r!==4&&(t=t.child,t!==null))for(Jp(t,e,n),t=t.sibling;t!==null;)Jp(t,e,n),t=t.sibling}function Xp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xp(t,e,n),t=t.sibling;t!==null;)Xp(t,e,n),t=t.sibling}var ct=null,Sn=!1;function Or(t,e,n){for(n=n.child;n!==null;)V0(t,e,n),n=n.sibling}function V0(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Wh,n)}catch{}switch(n.tag){case 5:It||io(n,e);case 6:var r=ct,i=Sn;ct=null,Or(t,e,n),ct=r,Sn=i,ct!==null&&(Sn?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(Sn?(t=ct,n=n.stateNode,t.nodeType===8?Of(t.parentNode,n):t.nodeType===1&&Of(t,n),Pl(t)):Of(ct,n.stateNode));break;case 4:r=ct,i=Sn,ct=n.stateNode.containerInfo,Sn=!0,Or(t,e,n),ct=r,Sn=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qp(n,e,o),i=i.next}while(i!==r)}Or(t,e,n);break;case 1:if(!It&&(io(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Le(n,e,a)}Or(t,e,n);break;case 21:Or(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Or(t,e,n),It=r):Or(t,e,n);break;default:Or(t,e,n)}}function Tw(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Eb),e.forEach(function(r){var i=Nb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function In(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,Sn=!1;break e;case 3:ct=a.stateNode.containerInfo,Sn=!0;break e;case 4:ct=a.stateNode.containerInfo,Sn=!0;break e}a=a.return}if(ct===null)throw Error(z(160));V0(s,o,i),ct=null,Sn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Le(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L0(e,t),e=e.sibling}function L0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(In(e,t),Nn(t),r&4){try{ll(3,t,t.return),Zh(3,t)}catch(R){Le(t,t.return,R)}try{ll(5,t,t.return)}catch(R){Le(t,t.return,R)}}break;case 1:In(e,t),Nn(t),r&512&&n!==null&&io(n,n.return);break;case 5:if(In(e,t),Nn(t),r&512&&n!==null&&io(n,n.return),t.flags&32){var i=t.stateNode;try{Tl(i,"")}catch(R){Le(t,t.return,R)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&iT(i,s),Ep(a,o);var c=Ep(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?uT(i,f):h==="dangerouslySetInnerHTML"?aT(i,f):h==="children"?Tl(i,f):tg(i,h,f,c)}switch(a){case"input":_p(i,s);break;case"textarea":sT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ao(i,!!s.multiple,g,!1):m!==!!s.multiple&&(s.defaultValue!=null?ao(i,!!s.multiple,s.defaultValue,!0):ao(i,!!s.multiple,s.multiple?[]:"",!1))}i[Nl]=s}catch(R){Le(t,t.return,R)}}break;case 6:if(In(e,t),Nn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(R){Le(t,t.return,R)}}break;case 3:if(In(e,t),Nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pl(e.containerInfo)}catch(R){Le(t,t.return,R)}break;case 4:In(e,t),Nn(t);break;case 13:In(e,t),Nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Og=qe())),r&4&&Tw(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(It=(c=It)||h,In(e,t),It=c):In(e,t),Nn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Y=t,h=t.child;h!==null;){for(f=Y=h;Y!==null;){switch(m=Y,g=m.child,m.tag){case 0:case 11:case 14:case 15:ll(4,m,m.return);break;case 1:io(m,m.return);var T=m.stateNode;if(typeof T.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(R){Le(r,n,R)}}break;case 5:io(m,m.return);break;case 22:if(m.memoizedState!==null){Rw(f);continue}}g!==null?(g.return=m,Y=g):Rw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=lT("display",o))}catch(R){Le(t,t.return,R)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(R){Le(t,t.return,R)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:In(e,t),Nn(t),r&4&&Tw(t);break;case 21:break;default:In(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(O0(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tl(i,""),r.flags&=-33);var s=Ew(t);Xp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ew(t);Jp(t,a,o);break;default:throw Error(z(161))}}catch(l){Le(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Sb(t,e,n){Y=t,M0(t)}function M0(t,e,n){for(var r=(t.mode&1)!==0;Y!==null;){var i=Y,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||It;a=uc;var c=It;if(uc=o,(It=l)&&!c)for(Y=i;Y!==null;)o=Y,l=o.child,o.tag===22&&o.memoizedState!==null?Aw(i):l!==null?(l.return=o,Y=l):Aw(i);for(;s!==null;)Y=s,M0(s),s=s.sibling;Y=i,uc=a,It=c}Sw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Y=s):Sw(t)}}function Sw(t){for(;Y!==null;){var e=Y;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Zh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Tn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}lw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Pl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}It||e.flags&512&&Yp(e)}catch(m){Le(e,e.return,m)}}if(e===t){Y=null;break}if(n=e.sibling,n!==null){n.return=e.return,Y=n;break}Y=e.return}}function Rw(t){for(;Y!==null;){var e=Y;if(e===t){Y=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Y=n;break}Y=e.return}}function Aw(t){for(;Y!==null;){var e=Y;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Zh(4,e)}catch(l){Le(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Le(e,i,l)}}var s=e.return;try{Yp(e)}catch(l){Le(e,s,l)}break;case 5:var o=e.return;try{Yp(e)}catch(l){Le(e,o,l)}}}catch(l){Le(e,e.return,l)}if(e===t){Y=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Y=a;break}Y=e.return}}var Rb=Math.ceil,fh=Tr.ReactCurrentDispatcher,Ng=Tr.ReactCurrentOwner,dn=Tr.ReactCurrentBatchConfig,he=0,rt=null,Qe=null,ft=0,Yt=0,so=wi(0),Je=0,Fl=null,os=0,ed=0,Dg=0,ul=null,jt=null,Og=0,Po=1/0,ir=null,ph=!1,Zp=null,ei=null,cc=!1,Wr=null,mh=0,cl=0,em=null,xc=-1,Nc=0;function Nt(){return he&6?qe():xc!==-1?xc:xc=qe()}function ti(t){return t.mode&1?he&2&&ft!==0?ft&-ft:lb.transition!==null?(Nc===0&&(Nc=IT()),Nc):(t=me,t!==0||(t=window.event,t=t===void 0?16:kT(t.type)),t):1}function kn(t,e,n,r){if(50<cl)throw cl=0,em=null,Error(z(185));au(t,n,r),(!(he&2)||t!==rt)&&(t===rt&&(!(he&2)&&(ed|=n),Je===4&&jr(t,ft)),Kt(t,r),n===1&&he===0&&!(e.mode&1)&&(Po=qe()+500,Yh&&Ii()))}function Kt(t,e){var n=t.callbackNode;lC(t,e);var r=Xc(t,t===rt?ft:0);if(r===0)n!==null&&Vv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vv(n),e===1)t.tag===0?ab(Pw.bind(null,t)):HT(Pw.bind(null,t)),rb(function(){!(he&6)&&Ii()}),n=null;else{switch(ET(r)){case 1:n=og;break;case 4:n=vT;break;case 16:n=Jc;break;case 536870912:n=wT;break;default:n=Jc}n=W0(n,F0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function F0(t,e){if(xc=-1,Nc=0,he&6)throw Error(z(327));var n=t.callbackNode;if(fo()&&t.callbackNode!==n)return null;var r=Xc(t,t===rt?ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=gh(t,r);else{e=r;var i=he;he|=2;var s=B0();(rt!==t||ft!==e)&&(ir=null,Po=qe()+500,Ji(t,e));do try{kb();break}catch(a){U0(t,a)}while(!0);vg(),fh.current=s,he=i,Qe!==null?e=0:(rt=null,ft=0,e=Je)}if(e!==0){if(e===2&&(i=Pp(t),i!==0&&(r=i,e=tm(t,i))),e===1)throw n=Fl,Ji(t,0),jr(t,r),Kt(t,qe()),n;if(e===6)jr(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ab(i)&&(e=gh(t,r),e===2&&(s=Pp(t),s!==0&&(r=s,e=tm(t,s))),e===1))throw n=Fl,Ji(t,0),jr(t,r),Kt(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Mi(t,jt,ir);break;case 3:if(jr(t,r),(r&130023424)===r&&(e=Og+500-qe(),10<e)){if(Xc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Vp(Mi.bind(null,t,jt,ir),e);break}Mi(t,jt,ir);break;case 4:if(jr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rb(r/1960))-r,10<r){t.timeoutHandle=Vp(Mi.bind(null,t,jt,ir),r);break}Mi(t,jt,ir);break;case 5:Mi(t,jt,ir);break;default:throw Error(z(329))}}}return Kt(t,qe()),t.callbackNode===n?F0.bind(null,t):null}function tm(t,e){var n=ul;return t.current.memoizedState.isDehydrated&&(Ji(t,e).flags|=256),t=gh(t,e),t!==2&&(e=jt,jt=n,e!==null&&nm(e)),t}function nm(t){jt===null?jt=t:jt.push.apply(jt,t)}function Ab(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Cn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function jr(t,e){for(e&=~Dg,e&=~ed,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Pn(e),r=1<<n;t[n]=-1,e&=~r}}function Pw(t){if(he&6)throw Error(z(327));fo();var e=Xc(t,0);if(!(e&1))return Kt(t,qe()),null;var n=gh(t,e);if(t.tag!==0&&n===2){var r=Pp(t);r!==0&&(e=r,n=tm(t,r))}if(n===1)throw n=Fl,Ji(t,0),jr(t,e),Kt(t,qe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mi(t,jt,ir),Kt(t,qe()),null}function Vg(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Po=qe()+500,Yh&&Ii())}}function as(t){Wr!==null&&Wr.tag===0&&!(he&6)&&fo();var e=he;he|=1;var n=dn.transition,r=me;try{if(dn.transition=null,me=1,t)return t()}finally{me=r,dn.transition=n,he=e,!(he&6)&&Ii()}}function Lg(){Yt=so.current,Te(so)}function Ji(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nb(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(gg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rh();break;case 3:Ro(),Te(Gt),Te(St),Rg();break;case 5:Sg(r);break;case 4:Ro();break;case 13:Te(be);break;case 19:Te(be);break;case 10:wg(r.type._context);break;case 22:case 23:Lg()}n=n.return}if(rt=t,Qe=t=ni(t.current,null),ft=Yt=e,Je=0,Fl=null,Dg=ed=os=0,jt=ul=null,Gi!==null){for(e=0;e<Gi.length;e++)if(n=Gi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gi=null}return t}function U0(t,e){do{var n=Qe;try{if(vg(),kc.current=dh,hh){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}hh=!1}if(ss=0,tt=Ye=xe=null,al=!1,Vl=0,Ng.current=null,n===null||n.return===null){Je=1,Fl=e,Qe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var g=pw(o);if(g!==null){g.flags&=-257,mw(g,o,a,s,e),g.mode&1&&fw(s,c,e),e=g,l=c;var T=e.updateQueue;if(T===null){var R=new Set;R.add(l),e.updateQueue=R}else T.add(l);break e}else{if(!(e&1)){fw(s,c,e),Mg();break e}l=Error(z(426))}}else if(Re&&a.mode&1){var k=pw(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),mw(k,o,a,s,e),_g(Ao(l,a));break e}}s=l=Ao(l,a),Je!==4&&(Je=2),ul===null?ul=[s]:ul.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var I=E0(s,l,e);aw(s,I);break e;case 1:a=l;var v=s.type,w=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(ei===null||!ei.has(w)))){s.flags|=65536,e&=-e,s.lanes|=e;var C=T0(s,a,e);aw(s,C);break e}}s=s.return}while(s!==null)}z0(n)}catch(L){e=L,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function B0(){var t=fh.current;return fh.current=dh,t===null?dh:t}function Mg(){(Je===0||Je===3||Je===2)&&(Je=4),rt===null||!(os&268435455)&&!(ed&268435455)||jr(rt,ft)}function gh(t,e){var n=he;he|=2;var r=B0();(rt!==t||ft!==e)&&(ir=null,Ji(t,e));do try{Pb();break}catch(i){U0(t,i)}while(!0);if(vg(),he=n,fh.current=r,Qe!==null)throw Error(z(261));return rt=null,ft=0,Je}function Pb(){for(;Qe!==null;)j0(Qe)}function kb(){for(;Qe!==null&&!Zk();)j0(Qe)}function j0(t){var e=q0(t.alternate,t,Yt);t.memoizedProps=t.pendingProps,e===null?z0(t):Qe=e,Ng.current=null}function z0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ib(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,Qe=null;return}}else if(n=wb(n,e,Yt),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);Je===0&&(Je=5)}function Mi(t,e,n){var r=me,i=dn.transition;try{dn.transition=null,me=1,Cb(t,e,n,r)}finally{dn.transition=i,me=r}return null}function Cb(t,e,n,r){do fo();while(Wr!==null);if(he&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(uC(t,s),t===rt&&(Qe=rt=null,ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cc||(cc=!0,W0(Jc,function(){return fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dn.transition,dn.transition=null;var o=me;me=1;var a=he;he|=4,Ng.current=null,Tb(t,n),L0(n,t),QC(Dp),Zc=!!Np,Dp=Np=null,t.current=n,Sb(n),eC(),he=a,me=o,dn.transition=s}else t.current=n;if(cc&&(cc=!1,Wr=t,mh=i),s=t.pendingLanes,s===0&&(ei=null),rC(n.stateNode),Kt(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ph)throw ph=!1,t=Zp,Zp=null,t;return mh&1&&t.tag!==0&&fo(),s=t.pendingLanes,s&1?t===em?cl++:(cl=0,em=t):cl=0,Ii(),null}function fo(){if(Wr!==null){var t=ET(mh),e=dn.transition,n=me;try{if(dn.transition=null,me=16>t?16:t,Wr===null)var r=!1;else{if(t=Wr,Wr=null,mh=0,he&6)throw Error(z(331));var i=he;for(he|=4,Y=t.current;Y!==null;){var s=Y,o=s.child;if(Y.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Y=c;Y!==null;){var h=Y;switch(h.tag){case 0:case 11:case 15:ll(8,h,s)}var f=h.child;if(f!==null)f.return=h,Y=f;else for(;Y!==null;){h=Y;var m=h.sibling,g=h.return;if(D0(h),h===c){Y=null;break}if(m!==null){m.return=g,Y=m;break}Y=g}}}var T=s.alternate;if(T!==null){var R=T.child;if(R!==null){T.child=null;do{var k=R.sibling;R.sibling=null,R=k}while(R!==null)}}Y=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Y=o;else e:for(;Y!==null;){if(s=Y,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ll(9,s,s.return)}var I=s.sibling;if(I!==null){I.return=s.return,Y=I;break e}Y=s.return}}var v=t.current;for(Y=v;Y!==null;){o=Y;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,Y=w;else e:for(o=v;Y!==null;){if(a=Y,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Zh(9,a)}}catch(L){Le(a,a.return,L)}if(a===o){Y=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,Y=C;break e}Y=a.return}}if(he=i,Ii(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Wh,t)}catch{}r=!0}return r}finally{me=n,dn.transition=e}}return!1}function kw(t,e,n){e=Ao(n,e),e=E0(t,e,1),t=Zr(t,e,1),e=Nt(),t!==null&&(au(t,1,e),Kt(t,e))}function Le(t,e,n){if(t.tag===3)kw(t,t,n);else for(;e!==null;){if(e.tag===3){kw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ei===null||!ei.has(r))){t=Ao(n,t),t=T0(e,t,1),e=Zr(e,t,1),t=Nt(),e!==null&&(au(e,1,t),Kt(e,t));break}}e=e.return}}function bb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(ft&n)===n&&(Je===4||Je===3&&(ft&130023424)===ft&&500>qe()-Og?Ji(t,0):Dg|=n),Kt(t,e)}function $0(t,e){e===0&&(t.mode&1?(e=ec,ec<<=1,!(ec&130023424)&&(ec=4194304)):e=1);var n=Nt();t=_r(t,e),t!==null&&(au(t,e,n),Kt(t,n))}function xb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),$0(t,n)}function Nb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),$0(t,n)}var q0;q0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)zt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return zt=!1,vb(t,e,n);zt=!!(t.flags&131072)}else zt=!1,Re&&e.flags&1048576&&KT(e,oh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bc(t,e),t=e.pendingProps;var i=Eo(e,St.current);ho(e,n),i=Pg(null,e,r,t,i,n);var s=kg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ht(r)?(s=!0,ih(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Eg(e),i.updater=Xh,e.stateNode=i,i._reactInternals=e,zp(e,r,t,n),e=Wp(null,e,r,!0,s,n)):(e.tag=0,Re&&s&&mg(e),kt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Ob(r),t=Tn(r,t),i){case 0:e=qp(null,e,r,t,n);break e;case 1:e=yw(null,e,r,t,n);break e;case 11:e=gw(null,e,r,t,n);break e;case 14:e=_w(null,e,r,Tn(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),qp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),yw(t,e,r,i,n);case 3:e:{if(P0(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,e0(t,e),uh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ao(Error(z(423)),e),e=vw(t,e,r,n,i);break e}else if(r!==i){i=Ao(Error(z(424)),e),e=vw(t,e,r,n,i);break e}else for(Xt=Xr(e.stateNode.containerInfo.firstChild),en=e,Re=!0,Rn=null,n=XT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),r===i){e=yr(t,e,n);break e}kt(t,e,r,n)}e=e.child}return e;case 5:return t0(e),t===null&&Up(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Op(r,i)?o=null:s!==null&&Op(r,s)&&(e.flags|=32),A0(t,e),kt(t,e,o,n),e.child;case 6:return t===null&&Up(e),null;case 13:return k0(t,e,n);case 4:return Tg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=So(e,null,r,n):kt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),gw(t,e,r,i,n);case 7:return kt(t,e,e.pendingProps,n),e.child;case 8:return kt(t,e,e.pendingProps.children,n),e.child;case 12:return kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ye(ah,r._currentValue),r._currentValue=o,s!==null)if(Cn(s.value,o)){if(s.children===i.children&&!Gt.current){e=yr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=dr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Bp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}kt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ho(e,n),i=pn(i),r=r(i),e.flags|=1,kt(t,e,r,n),e.child;case 14:return r=e.type,i=Tn(r,e.pendingProps),i=Tn(r.type,i),_w(t,e,r,i,n);case 15:return S0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tn(r,i),bc(t,e),e.tag=1,Ht(r)?(t=!0,ih(e)):t=!1,ho(e,n),I0(e,r,i),zp(e,r,i,n),Wp(null,e,r,!0,t,n);case 19:return C0(t,e,n);case 22:return R0(t,e,n)}throw Error(z(156,e.tag))};function W0(t,e){return yT(t,e)}function Db(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,r){return new Db(t,e,n,r)}function Fg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ob(t){if(typeof t=="function")return Fg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rg)return 11;if(t===ig)return 14}return 2}function ni(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Fg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qs:return Xi(n.children,i,s,e);case ng:o=8,i|=8;break;case dp:return t=un(12,n,e,i|2),t.elementType=dp,t.lanes=s,t;case fp:return t=un(13,n,e,i),t.elementType=fp,t.lanes=s,t;case pp:return t=un(19,n,e,i),t.elementType=pp,t.lanes=s,t;case tT:return td(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ZE:o=10;break e;case eT:o=9;break e;case rg:o=11;break e;case ig:o=14;break e;case Fr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xi(t,e,n,r){return t=un(7,t,r,e),t.lanes=n,t}function td(t,e,n,r){return t=un(22,t,r,e),t.elementType=tT,t.lanes=n,t.stateNode={isHidden:!1},t}function zf(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function $f(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vb(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tf(0),this.expirationTimes=Tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tf(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ug(t,e,n,r,i,s,o,a,l){return t=new Vb(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eg(s),t}function Lb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function G0(t){if(!t)return ai;t=t._reactInternals;e:{if(Es(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Ht(n))return GT(t,n,e)}return e}function H0(t,e,n,r,i,s,o,a,l){return t=Ug(n,r,!0,t,i,s,o,a,l),t.context=G0(null),n=t.current,r=Nt(),i=ti(n),s=dr(r,i),s.callback=e??null,Zr(n,s,i),t.current.lanes=i,au(t,i,r),Kt(t,r),t}function nd(t,e,n,r){var i=e.current,s=Nt(),o=ti(i);return n=G0(n),e.context===null?e.context=n:e.pendingContext=n,e=dr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zr(i,e,o),t!==null&&(kn(t,i,o,s),Pc(t,i,o)),o}function _h(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bg(t,e){Cw(t,e),(t=t.alternate)&&Cw(t,e)}function Mb(){return null}var K0=typeof reportError=="function"?reportError:function(t){console.error(t)};function jg(t){this._internalRoot=t}rd.prototype.render=jg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));nd(t,e,null,null)};rd.prototype.unmount=jg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;as(function(){nd(null,t,null,null)}),e[gr]=null}};function rd(t){this._internalRoot=t}rd.prototype.unstable_scheduleHydration=function(t){if(t){var e=RT();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Br.length&&e!==0&&e<Br[n].priority;n++);Br.splice(n,0,t),n===0&&PT(t)}};function zg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bw(){}function Fb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=_h(o);s.call(c)}}var o=H0(e,r,t,0,null,!1,!1,"",bw);return t._reactRootContainer=o,t[gr]=o.current,bl(t.nodeType===8?t.parentNode:t),as(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=_h(l);a.call(c)}}var l=Ug(t,0,!1,null,null,!1,!1,"",bw);return t._reactRootContainer=l,t[gr]=l.current,bl(t.nodeType===8?t.parentNode:t),as(function(){nd(e,l,n,r)}),l}function sd(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=_h(o);a.call(l)}}nd(e,o,t,i)}else o=Fb(n,e,t,i,r);return _h(o)}TT=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ka(e.pendingLanes);n!==0&&(ag(e,n|1),Kt(e,qe()),!(he&6)&&(Po=qe()+500,Ii()))}break;case 13:as(function(){var r=_r(t,1);if(r!==null){var i=Nt();kn(r,t,1,i)}}),Bg(t,1)}};lg=function(t){if(t.tag===13){var e=_r(t,134217728);if(e!==null){var n=Nt();kn(e,t,134217728,n)}Bg(t,134217728)}};ST=function(t){if(t.tag===13){var e=ti(t),n=_r(t,e);if(n!==null){var r=Nt();kn(n,t,e,r)}Bg(t,e)}};RT=function(){return me};AT=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Sp=function(t,e,n){switch(e){case"input":if(_p(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Qh(r);if(!i)throw Error(z(90));rT(r),_p(r,i)}}}break;case"textarea":sT(t,n);break;case"select":e=n.value,e!=null&&ao(t,!!n.multiple,e,!1)}};dT=Vg;fT=as;var Ub={usingClientEntryPoint:!1,Events:[uu,Zs,Qh,cT,hT,Vg]},La={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bb={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gT(t),t===null?null:t.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||Mb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{Wh=hc.inject(Bb),$n=hc}catch{}}sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ub;sn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zg(e))throw Error(z(200));return Lb(t,e,null,n)};sn.createRoot=function(t,e){if(!zg(t))throw Error(z(299));var n=!1,r="",i=K0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Ug(t,1,!1,null,null,n,!1,r,i),t[gr]=e.current,bl(t.nodeType===8?t.parentNode:t),new jg(e)};sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=gT(e),t=t===null?null:t.stateNode,t};sn.flushSync=function(t){return as(t)};sn.hydrate=function(t,e,n){if(!id(e))throw Error(z(200));return sd(null,t,e,!0,n)};sn.hydrateRoot=function(t,e,n){if(!zg(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=K0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=H0(e,null,t,1,n??null,i,!1,s,o),t[gr]=e.current,bl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new rd(e)};sn.render=function(t,e,n){if(!id(e))throw Error(z(200));return sd(null,t,e,!1,n)};sn.unmountComponentAtNode=function(t){if(!id(t))throw Error(z(40));return t._reactRootContainer?(as(function(){sd(null,null,t,!1,function(){t._reactRootContainer=null,t[gr]=null})}),!0):!1};sn.unstable_batchedUpdates=Vg;sn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!id(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return sd(t,e,n,!1,r)};sn.version="18.3.1-next-f1338f8080-20240426";function Q0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Q0)}catch(t){console.error(t)}}Q0(),QE.exports=sn;var jb=QE.exports,xw=jb;cp.createRoot=xw.createRoot,cp.hydrateRoot=xw.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ul.apply(this,arguments)}var Gr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Gr||(Gr={}));const Nw="popstate";function zb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return rm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:yh(i)}return qb(e,n,null,t)}function Ue(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Y0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $b(){return Math.random().toString(36).substr(2,8)}function Dw(t,e){return{usr:t.state,key:t.key,idx:e}}function rm(t,e,n,r){return n===void 0&&(n=null),Ul({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Jo(e):e,{state:n,key:e&&e.key||r||$b()})}function yh(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Jo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function qb(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Gr.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Ul({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Gr.Pop;let k=h(),I=k==null?null:k-c;c=k,l&&l({action:a,location:R.location,delta:I})}function m(k,I){a=Gr.Push;let v=rm(R.location,k,I);c=h()+1;let w=Dw(v,c),C=R.createHref(v);try{o.pushState(w,"",C)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(C)}s&&l&&l({action:a,location:R.location,delta:1})}function g(k,I){a=Gr.Replace;let v=rm(R.location,k,I);c=h();let w=Dw(v,c),C=R.createHref(v);o.replaceState(w,"",C),s&&l&&l({action:a,location:R.location,delta:0})}function T(k){let I=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof k=="string"?k:yh(k);return v=v.replace(/ $/,"%20"),Ue(I,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,I)}let R={get action(){return a},get location(){return t(i,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Nw,f),l=k,()=>{i.removeEventListener(Nw,f),l=null}},createHref(k){return e(i,k)},createURL:T,encodeLocation(k){let I=T(k);return{pathname:I.pathname,search:I.search,hash:I.hash}},push:m,replace:g,go(k){return o.go(k)}};return R}var Ow;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Ow||(Ow={}));function Wb(t,e,n){return n===void 0&&(n="/"),Gb(t,e,n,!1)}function Gb(t,e,n,r){let i=typeof e=="string"?Jo(e):e,s=ko(i.pathname||"/",n);if(s==null)return null;let o=J0(t);Hb(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=ix(s);a=nx(o[l],c,r)}return a}function J0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ue(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=ri([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Ue(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),J0(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:ex(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of X0(s.path))i(s,o,l)}),e}function X0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=X0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Hb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:tx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kb=/^:[\w-]+$/,Qb=3,Yb=2,Jb=1,Xb=10,Zb=-2,Vw=t=>t==="*";function ex(t,e){let n=t.split("/"),r=n.length;return n.some(Vw)&&(r+=Zb),e&&(r+=Yb),n.filter(i=>!Vw(i)).reduce((i,s)=>i+(Kb.test(s)?Qb:s===""?Jb:Xb),r)}function tx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function nx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=vh({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),m=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=vh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:ri([s,f.pathname]),pathnameBase:lx(ri([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=ri([s,f.pathnameBase]))}return o}function vh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:g}=h;if(m==="*"){let R=a[f]||"";o=s.slice(0,s.length-R.length).replace(/(.)\/+$/,"$1")}const T=a[f];return g&&!T?c[m]=void 0:c[m]=(T||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function rx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Y0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function ix(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Y0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ko(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function sx(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Jo(t):t;return{pathname:n?n.startsWith("/")?n:ox(n,e):e,search:ux(r),hash:cx(i)}}function ox(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function qf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ax(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Z0(t,e){let n=ax(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function eS(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Jo(t):(i=Ul({},t),Ue(!i.pathname||!i.pathname.includes("?"),qf("?","pathname","search",i)),Ue(!i.pathname||!i.pathname.includes("#"),qf("#","pathname","hash",i)),Ue(!i.search||!i.search.includes("#"),qf("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=sx(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const ri=t=>t.join("/").replace(/\/\/+/g,"/"),lx=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ux=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cx=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function hx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const tS=["post","put","patch","delete"];new Set(tS);const dx=["get",...tS];new Set(dx);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Bl(){return Bl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Bl.apply(this,arguments)}const od=j.createContext(null),nS=j.createContext(null),Ei=j.createContext(null),ad=j.createContext(null),Ts=j.createContext({outlet:null,matches:[],isDataRoute:!1}),rS=j.createContext(null);function fx(t,e){let{relative:n}=e===void 0?{}:e;hu()||Ue(!1);let{basename:r,navigator:i}=j.useContext(Ei),{hash:s,pathname:o,search:a}=ld(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ri([r,o])),i.createHref({pathname:l,search:a,hash:s})}function hu(){return j.useContext(ad)!=null}function Xo(){return hu()||Ue(!1),j.useContext(ad).location}function iS(t){j.useContext(Ei).static||j.useLayoutEffect(t)}function px(){let{isDataRoute:t}=j.useContext(Ts);return t?Px():mx()}function mx(){hu()||Ue(!1);let t=j.useContext(od),{basename:e,future:n,navigator:r}=j.useContext(Ei),{matches:i}=j.useContext(Ts),{pathname:s}=Xo(),o=JSON.stringify(Z0(i,n.v7_relativeSplatPath)),a=j.useRef(!1);return iS(()=>{a.current=!0}),j.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=eS(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ri([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function ld(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(Ei),{matches:i}=j.useContext(Ts),{pathname:s}=Xo(),o=JSON.stringify(Z0(i,r.v7_relativeSplatPath));return j.useMemo(()=>eS(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function gx(t,e){return _x(t,e)}function _x(t,e,n,r){hu()||Ue(!1);let{navigator:i}=j.useContext(Ei),{matches:s}=j.useContext(Ts),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Xo(),h;if(e){var f;let k=typeof e=="string"?Jo(e):e;l==="/"||(f=k.pathname)!=null&&f.startsWith(l)||Ue(!1),h=k}else h=c;let m=h.pathname||"/",g=m;if(l!=="/"){let k=l.replace(/^\//,"").split("/");g="/"+m.replace(/^\//,"").split("/").slice(k.length).join("/")}let T=Wb(t,{pathname:g}),R=Ex(T&&T.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:ri([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:ri([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),s,n,r);return e&&R?j.createElement(ad.Provider,{value:{location:Bl({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Gr.Pop}},R):R}function yx(){let t=Ax(),e=hx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,null)}const vx=j.createElement(yx,null);class wx extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(Ts.Provider,{value:this.props.routeContext},j.createElement(rS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ix(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(od);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Ts.Provider,{value:e},r)}function Ex(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Ue(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:g}=n,T=f.route.loader&&m[f.route.id]===void 0&&(!g||g[f.route.id]===void 0);if(f.route.lazy||T){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let g,T=!1,R=null,k=null;n&&(g=a&&f.route.id?a[f.route.id]:void 0,R=f.route.errorElement||vx,l&&(c<0&&m===0?(T=!0,k=null):c===m&&(T=!0,k=f.route.hydrateFallbackElement||null)));let I=e.concat(o.slice(0,m+1)),v=()=>{let w;return g?w=R:T?w=k:f.route.Component?w=j.createElement(f.route.Component,null):f.route.element?w=f.route.element:w=h,j.createElement(Ix,{match:f,routeContext:{outlet:h,matches:I,isDataRoute:n!=null},children:w})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?j.createElement(wx,{location:n.location,revalidation:n.revalidation,component:R,error:g,children:v(),routeContext:{outlet:null,matches:I,isDataRoute:!0}}):v()},null)}var sS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(sS||{}),wh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(wh||{});function Tx(t){let e=j.useContext(od);return e||Ue(!1),e}function Sx(t){let e=j.useContext(nS);return e||Ue(!1),e}function Rx(t){let e=j.useContext(Ts);return e||Ue(!1),e}function oS(t){let e=Rx(),n=e.matches[e.matches.length-1];return n.route.id||Ue(!1),n.route.id}function Ax(){var t;let e=j.useContext(rS),n=Sx(wh.UseRouteError),r=oS(wh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Px(){let{router:t}=Tx(sS.UseNavigateStable),e=oS(wh.UseNavigateStable),n=j.useRef(!1);return iS(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Bl({fromRouteId:e},s)))},[t,e])}function Oc(t){Ue(!1)}function kx(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Gr.Pop,navigator:s,static:o=!1,future:a}=t;hu()&&Ue(!1);let l=e.replace(/^\/*/,"/"),c=j.useMemo(()=>({basename:l,navigator:s,static:o,future:Bl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Jo(r));let{pathname:h="/",search:f="",hash:m="",state:g=null,key:T="default"}=r,R=j.useMemo(()=>{let k=ko(h,l);return k==null?null:{location:{pathname:k,search:f,hash:m,state:g,key:T},navigationType:i}},[l,h,f,m,g,T,i]);return R==null?null:j.createElement(Ei.Provider,{value:c},j.createElement(ad.Provider,{children:n,value:R}))}function Cx(t){let{children:e,location:n}=t;return gx(im(e),n)}new Promise(()=>{});function im(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,im(r.props.children,s));return}r.type!==Oc&&Ue(!1),!r.props.index||!r.props.children||Ue(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=im(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ih(){return Ih=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ih.apply(this,arguments)}function aS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function bx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function xx(t,e){return t.button===0&&(!e||e==="_self")&&!bx(t)}const Nx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Dx=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Ox="6";try{window.__reactRouterVersion=Ox}catch{}const Vx=j.createContext({isTransitioning:!1}),Lx="startTransition",Lw=bk[Lx];function Mx(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=zb({window:i,v5Compat:!0}));let o=s.current,[a,l]=j.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=j.useCallback(f=>{c&&Lw?Lw(()=>l(f)):l(f)},[l,c]);return j.useLayoutEffect(()=>o.listen(h),[o,h]),j.createElement(kx,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Fx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ux=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Bx=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,unstable_viewTransition:f}=e,m=aS(e,Nx),{basename:g}=j.useContext(Ei),T,R=!1;if(typeof c=="string"&&Ux.test(c)&&(T=c,Fx))try{let w=new URL(window.location.href),C=c.startsWith("//")?new URL(w.protocol+c):new URL(c),L=ko(C.pathname,g);C.origin===w.origin&&L!=null?c=L+C.search+C.hash:R=!0}catch{}let k=fx(c,{relative:i}),I=zx(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,unstable_viewTransition:f});function v(w){r&&r(w),w.defaultPrevented||I(w)}return j.createElement("a",Ih({},m,{href:T||k,onClick:R||s?r:v,ref:n,target:l}))}),Oi=j.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:c,children:h}=e,f=aS(e,Dx),m=ld(l,{relative:f.relative}),g=Xo(),T=j.useContext(nS),{navigator:R,basename:k}=j.useContext(Ei),I=T!=null&&$x(m)&&c===!0,v=R.encodeLocation?R.encodeLocation(m).pathname:m.pathname,w=g.pathname,C=T&&T.navigation&&T.navigation.location?T.navigation.location.pathname:null;i||(w=w.toLowerCase(),C=C?C.toLowerCase():null,v=v.toLowerCase()),C&&k&&(C=ko(C,k)||C);const L=v!=="/"&&v.endsWith("/")?v.length-1:v.length;let M=w===v||!o&&w.startsWith(v)&&w.charAt(L)==="/",E=C!=null&&(C===v||!o&&C.startsWith(v)&&C.charAt(v.length)==="/"),y={isActive:M,isPending:E,isTransitioning:I},S=M?r:void 0,A;typeof s=="function"?A=s(y):A=[s,M?"active":null,E?"pending":null,I?"transitioning":null].filter(Boolean).join(" ");let b=typeof a=="function"?a(y):a;return j.createElement(Bx,Ih({},f,{"aria-current":S,className:A,ref:n,style:b,to:l,unstable_viewTransition:c}),typeof h=="function"?h(y):h)});var sm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(sm||(sm={}));var Mw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Mw||(Mw={}));function jx(t){let e=j.useContext(od);return e||Ue(!1),e}function zx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=px(),c=Xo(),h=ld(t,{relative:o});return j.useCallback(f=>{if(xx(f,n)){f.preventDefault();let m=r!==void 0?r:yh(c)===yh(h);l(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}function $x(t,e){e===void 0&&(e={});let n=j.useContext(Vx);n==null&&Ue(!1);let{basename:r}=jx(sm.useViewTransitionState),i=ld(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=ko(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=ko(n.nextLocation.pathname,r)||n.nextLocation.pathname;return vh(i.pathname,o)!=null||vh(i.pathname,s)!=null}var Fw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},qx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},uS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(m=64)),r.push(n[h],n[f],n[m],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(lS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):qx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new Wx;const m=s<<2|a>>4;if(r.push(m),c!==64){const g=a<<4&240|c>>2;if(r.push(g),f!==64){const T=c<<6&192|f;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Wx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gx=function(t){const e=lS(t);return uS.encodeByteArray(e,!0)},Eh=function(t){return Gx(t).replace(/\./g,"")},cS=function(t){try{return uS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Th(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hx(n)||(t[n]=Th(t[n],e[n]));return t}function Hx(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=()=>Kx().__FIREBASE_DEFAULTS__,Yx=()=>{if(typeof process>"u"||typeof Fw>"u")return;const t=Fw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&cS(t[1]);return e&&JSON.parse(e)},ud=()=>{try{return Qx()||Yx()||Jx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hS=t=>{var e,n;return(n=(e=ud())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dS=t=>{const e=hS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fS=()=>{var t;return(t=ud())===null||t===void 0?void 0:t.config},pS=t=>{var e;return(e=ud())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Eh(JSON.stringify(n)),Eh(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Zx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ce())}function $g(){var t;const e=(t=ud())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function gS(){return typeof self=="object"&&self.self===self}function _S(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function qg(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yS(){const t=Ce();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function vS(){return!$g()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jl(){try{return typeof indexedDB=="object"}catch{return!1}}function eN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tN="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=tN,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ss.prototype.create)}}class Ss{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?nN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,a,r)}}function nN(t,e){return t.replace(rN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const rN=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function iN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Co(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Bw(s)&&Bw(o)){if(!Co(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Bw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wS(t,e){const n=new sN(t,e);return n.subscribe.bind(n)}class sN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");oN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Wf),i.error===void 0&&(i.error=Wf),i.complete===void 0&&(i.complete=Wf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function oN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wf(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Xx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uN(e))try{this.getOrInitializeService({instanceIdentifier:Fi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fi){return this.instances.has(e)}getOptions(e=Fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fi){return this.component?this.component.multipleInstances?e:Fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lN(t){return t===Fi?void 0:t}function uN(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new aN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg=[];var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const ES={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},cN=oe.INFO,hN={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},dN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=hN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cd{constructor(e){this.name=e,this._logLevel=cN,this._logHandler=dN,this._userLogHandler=null,Wg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ES[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}function fN(t){Wg.forEach(e=>{e.setLogLevel(t)})}function pN(t,e){for(const n of Wg){let r=null;e&&e.level&&(r=ES[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:oe[s].toLowerCase(),message:a,args:o,type:i.name})}}}const mN=(t,e)=>e.some(n=>t instanceof n);let jw,zw;function gN(){return jw||(jw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _N(){return zw||(zw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const TS=new WeakMap,om=new WeakMap,SS=new WeakMap,Gf=new WeakMap,Gg=new WeakMap;function yN(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ii(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&TS.set(n,t)}).catch(()=>{}),Gg.set(e,t),e}function vN(t){if(om.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});om.set(t,e)}let am={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return om.get(t);if(e==="objectStoreNames")return t.objectStoreNames||SS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wN(t){am=t(am)}function IN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hf(this),e,...n);return SS.set(r,e.sort?e.sort():[e]),ii(r)}:_N().includes(t)?function(...e){return t.apply(Hf(this),e),ii(TS.get(this))}:function(...e){return ii(t.apply(Hf(this),e))}}function EN(t){return typeof t=="function"?IN(t):(t instanceof IDBTransaction&&vN(t),mN(t,gN())?new Proxy(t,am):t)}function ii(t){if(t instanceof IDBRequest)return yN(t);if(Gf.has(t))return Gf.get(t);const e=EN(t);return e!==t&&(Gf.set(t,e),Gg.set(e,t)),e}const Hf=t=>Gg.get(t);function TN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ii(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ii(o.result),l.oldVersion,l.newVersion,ii(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const SN=["get","getKey","getAll","getAllKeys","count"],RN=["put","add","delete","clear"],Kf=new Map;function $w(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kf.get(e))return Kf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=RN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||SN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Kf.set(e,s),s}wN(t=>({...t,get:(e,n,r)=>$w(e,n)||t.get(e,n,r),has:(e,n)=>!!$w(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(PN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function PN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Sh="@firebase/app",lm="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new cd("@firebase/app"),kN="@firebase/app-compat",CN="@firebase/analytics-compat",bN="@firebase/analytics",xN="@firebase/app-check-compat",NN="@firebase/app-check",DN="@firebase/auth",ON="@firebase/auth-compat",VN="@firebase/database",LN="@firebase/database-compat",MN="@firebase/functions",FN="@firebase/functions-compat",UN="@firebase/installations",BN="@firebase/installations-compat",jN="@firebase/messaging",zN="@firebase/messaging-compat",$N="@firebase/performance",qN="@firebase/performance-compat",WN="@firebase/remote-config",GN="@firebase/remote-config-compat",HN="@firebase/storage",KN="@firebase/storage-compat",QN="@firebase/firestore",YN="@firebase/vertexai-preview",JN="@firebase/firestore-compat",XN="firebase",ZN="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li="[DEFAULT]",eD={[Sh]:"fire-core",[kN]:"fire-core-compat",[bN]:"fire-analytics",[CN]:"fire-analytics-compat",[NN]:"fire-app-check",[xN]:"fire-app-check-compat",[DN]:"fire-auth",[ON]:"fire-auth-compat",[VN]:"fire-rtdb",[LN]:"fire-rtdb-compat",[MN]:"fire-fn",[FN]:"fire-fn-compat",[UN]:"fire-iid",[BN]:"fire-iid-compat",[jN]:"fire-fcm",[zN]:"fire-fcm-compat",[$N]:"fire-perf",[qN]:"fire-perf-compat",[WN]:"fire-rc",[GN]:"fire-rc-compat",[HN]:"fire-gcs",[KN]:"fire-gcs-compat",[QN]:"fire-fst",[JN]:"fire-fst-compat",[YN]:"fire-vertex","fire-js":"fire-js",[XN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new Map,bo=new Map,xo=new Map;function zl(t,e){try{t.container.addComponent(e)}catch(n){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function RS(t,e){t.container.addOrOverwriteComponent(e)}function vr(t){const e=t.name;if(xo.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;xo.set(e,t);for(const n of ui.values())zl(n,t);for(const n of bo.values())zl(n,t);return!0}function ea(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tD(t,e,n=li){ea(t,e).clearInstance(n)}function AS(t){return t.options!==void 0}function Fe(t){return t.settings!==void 0}function nD(){xo.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fn=new Ss("app","Firebase",rD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PS=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD extends PS{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,tn(Sh,lm,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Kg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw fn.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=ZN;function Hg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:li,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(n||(n=fS()),!n)throw fn.create("no-options");const s=ui.get(i);if(s){if(Co(n,s.options)&&Co(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const o=new IS(i);for(const l of xo.values())o.addComponent(l);const a=new PS(n,r,o);return ui.set(i,a),a}function sD(t,e){if(gS())throw fn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;AS(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,f)=>Math.imul(31,h)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw fn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=bo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new IS(s);for(const c of xo.values())a.addComponent(c);const l=new iD(n,e,s,a);return bo.set(s,l),l}function hd(t=li){const e=ui.get(t);if(!e&&t===li&&fS())return Hg();if(!e)throw fn.create("no-app",{appName:t});return e}function oD(){return Array.from(ui.values())}async function Kg(t){let e=!1;const n=t.name;ui.has(n)?(e=!0,ui.delete(n)):bo.has(n)&&t.decRefCount()<=0&&(bo.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function tn(t,e,n){var r;let i=(r=eD[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(a.join(" "));return}vr(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function kS(t,e){if(t!==null&&typeof t!="function")throw fn.create("invalid-log-argument");pN(t,e)}function CS(t){fN(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aD="firebase-heartbeat-database",lD=1,$l="firebase-heartbeat-store";let Qf=null;function bS(){return Qf||(Qf=TN(aD,lD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($l)}catch(n){console.warn(n)}}}}).catch(t=>{throw fn.create("idb-open",{originalErrorMessage:t.message})})),Qf}async function uD(t){try{const n=(await bS()).transaction($l),r=await n.objectStore($l).get(xS(t));return await n.done,r}catch(e){if(e instanceof Tt)ls.warn(e.message);else{const n=fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ls.warn(n.message)}}}async function qw(t,e){try{const r=(await bS()).transaction($l,"readwrite");await r.objectStore($l).put(e,xS(t)),await r.done}catch(n){if(n instanceof Tt)ls.warn(n.message);else{const r=fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ls.warn(r.message)}}}function xS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD=1024,hD=30*24*60*60*1e3;class dD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ww();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=hD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ww(),{heartbeatsToSend:r,unsentEntries:i}=fD(this._heartbeatsCache.heartbeats),s=Eh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ww(){return new Date().toISOString().substring(0,10)}function fD(t,e=cD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jl()?eN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return qw(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gw(t){return Eh(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(t){vr(new gn("platform-logger",e=>new AN(e),"PRIVATE")),vr(new gn("heartbeat",e=>new dD(e),"PRIVATE")),tn(Sh,lm,t),tn(Sh,lm,"esm2017"),tn("fire-js","")}mD("");const gD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Tt,SDK_VERSION:Sr,_DEFAULT_ENTRY_NAME:li,_addComponent:zl,_addOrOverwriteComponent:RS,_apps:ui,_clearComponents:nD,_components:xo,_getProvider:ea,_isFirebaseApp:AS,_isFirebaseServerApp:Fe,_registerComponent:vr,_removeServiceInstance:tD,_serverApps:bo,deleteApp:Kg,getApp:hd,getApps:oD,initializeApp:Hg,initializeServerApp:sD,onLog:kS,registerVersion:tn,setLogLevel:CS},Symbol.toStringTag,{value:"Module"}));var Hw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zi,NS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function S(){}S.prototype=y.prototype,E.D=y.prototype,E.prototype=new S,E.prototype.constructor=E,E.C=function(A,b,x){for(var P=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)P[Ft-2]=arguments[Ft];return y.prototype[b].apply(A,P)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,y,S){S||(S=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(S++)|y.charCodeAt(S++)<<8|y.charCodeAt(S++)<<16|y.charCodeAt(S++)<<24;else for(b=0;16>b;++b)A[b]=y[S++]|y[S++]<<8|y[S++]<<16|y[S++]<<24;y=E.g[0],S=E.g[1],b=E.g[2];var x=E.g[3],P=y+(x^S&(b^x))+A[0]+3614090360&4294967295;y=S+(P<<7&4294967295|P>>>25),P=x+(b^y&(S^b))+A[1]+3905402710&4294967295,x=y+(P<<12&4294967295|P>>>20),P=b+(S^x&(y^S))+A[2]+606105819&4294967295,b=x+(P<<17&4294967295|P>>>15),P=S+(y^b&(x^y))+A[3]+3250441966&4294967295,S=b+(P<<22&4294967295|P>>>10),P=y+(x^S&(b^x))+A[4]+4118548399&4294967295,y=S+(P<<7&4294967295|P>>>25),P=x+(b^y&(S^b))+A[5]+1200080426&4294967295,x=y+(P<<12&4294967295|P>>>20),P=b+(S^x&(y^S))+A[6]+2821735955&4294967295,b=x+(P<<17&4294967295|P>>>15),P=S+(y^b&(x^y))+A[7]+4249261313&4294967295,S=b+(P<<22&4294967295|P>>>10),P=y+(x^S&(b^x))+A[8]+1770035416&4294967295,y=S+(P<<7&4294967295|P>>>25),P=x+(b^y&(S^b))+A[9]+2336552879&4294967295,x=y+(P<<12&4294967295|P>>>20),P=b+(S^x&(y^S))+A[10]+4294925233&4294967295,b=x+(P<<17&4294967295|P>>>15),P=S+(y^b&(x^y))+A[11]+2304563134&4294967295,S=b+(P<<22&4294967295|P>>>10),P=y+(x^S&(b^x))+A[12]+1804603682&4294967295,y=S+(P<<7&4294967295|P>>>25),P=x+(b^y&(S^b))+A[13]+4254626195&4294967295,x=y+(P<<12&4294967295|P>>>20),P=b+(S^x&(y^S))+A[14]+2792965006&4294967295,b=x+(P<<17&4294967295|P>>>15),P=S+(y^b&(x^y))+A[15]+1236535329&4294967295,S=b+(P<<22&4294967295|P>>>10),P=y+(b^x&(S^b))+A[1]+4129170786&4294967295,y=S+(P<<5&4294967295|P>>>27),P=x+(S^b&(y^S))+A[6]+3225465664&4294967295,x=y+(P<<9&4294967295|P>>>23),P=b+(y^S&(x^y))+A[11]+643717713&4294967295,b=x+(P<<14&4294967295|P>>>18),P=S+(x^y&(b^x))+A[0]+3921069994&4294967295,S=b+(P<<20&4294967295|P>>>12),P=y+(b^x&(S^b))+A[5]+3593408605&4294967295,y=S+(P<<5&4294967295|P>>>27),P=x+(S^b&(y^S))+A[10]+38016083&4294967295,x=y+(P<<9&4294967295|P>>>23),P=b+(y^S&(x^y))+A[15]+3634488961&4294967295,b=x+(P<<14&4294967295|P>>>18),P=S+(x^y&(b^x))+A[4]+3889429448&4294967295,S=b+(P<<20&4294967295|P>>>12),P=y+(b^x&(S^b))+A[9]+568446438&4294967295,y=S+(P<<5&4294967295|P>>>27),P=x+(S^b&(y^S))+A[14]+3275163606&4294967295,x=y+(P<<9&4294967295|P>>>23),P=b+(y^S&(x^y))+A[3]+4107603335&4294967295,b=x+(P<<14&4294967295|P>>>18),P=S+(x^y&(b^x))+A[8]+1163531501&4294967295,S=b+(P<<20&4294967295|P>>>12),P=y+(b^x&(S^b))+A[13]+2850285829&4294967295,y=S+(P<<5&4294967295|P>>>27),P=x+(S^b&(y^S))+A[2]+4243563512&4294967295,x=y+(P<<9&4294967295|P>>>23),P=b+(y^S&(x^y))+A[7]+1735328473&4294967295,b=x+(P<<14&4294967295|P>>>18),P=S+(x^y&(b^x))+A[12]+2368359562&4294967295,S=b+(P<<20&4294967295|P>>>12),P=y+(S^b^x)+A[5]+4294588738&4294967295,y=S+(P<<4&4294967295|P>>>28),P=x+(y^S^b)+A[8]+2272392833&4294967295,x=y+(P<<11&4294967295|P>>>21),P=b+(x^y^S)+A[11]+1839030562&4294967295,b=x+(P<<16&4294967295|P>>>16),P=S+(b^x^y)+A[14]+4259657740&4294967295,S=b+(P<<23&4294967295|P>>>9),P=y+(S^b^x)+A[1]+2763975236&4294967295,y=S+(P<<4&4294967295|P>>>28),P=x+(y^S^b)+A[4]+1272893353&4294967295,x=y+(P<<11&4294967295|P>>>21),P=b+(x^y^S)+A[7]+4139469664&4294967295,b=x+(P<<16&4294967295|P>>>16),P=S+(b^x^y)+A[10]+3200236656&4294967295,S=b+(P<<23&4294967295|P>>>9),P=y+(S^b^x)+A[13]+681279174&4294967295,y=S+(P<<4&4294967295|P>>>28),P=x+(y^S^b)+A[0]+3936430074&4294967295,x=y+(P<<11&4294967295|P>>>21),P=b+(x^y^S)+A[3]+3572445317&4294967295,b=x+(P<<16&4294967295|P>>>16),P=S+(b^x^y)+A[6]+76029189&4294967295,S=b+(P<<23&4294967295|P>>>9),P=y+(S^b^x)+A[9]+3654602809&4294967295,y=S+(P<<4&4294967295|P>>>28),P=x+(y^S^b)+A[12]+3873151461&4294967295,x=y+(P<<11&4294967295|P>>>21),P=b+(x^y^S)+A[15]+530742520&4294967295,b=x+(P<<16&4294967295|P>>>16),P=S+(b^x^y)+A[2]+3299628645&4294967295,S=b+(P<<23&4294967295|P>>>9),P=y+(b^(S|~x))+A[0]+4096336452&4294967295,y=S+(P<<6&4294967295|P>>>26),P=x+(S^(y|~b))+A[7]+1126891415&4294967295,x=y+(P<<10&4294967295|P>>>22),P=b+(y^(x|~S))+A[14]+2878612391&4294967295,b=x+(P<<15&4294967295|P>>>17),P=S+(x^(b|~y))+A[5]+4237533241&4294967295,S=b+(P<<21&4294967295|P>>>11),P=y+(b^(S|~x))+A[12]+1700485571&4294967295,y=S+(P<<6&4294967295|P>>>26),P=x+(S^(y|~b))+A[3]+2399980690&4294967295,x=y+(P<<10&4294967295|P>>>22),P=b+(y^(x|~S))+A[10]+4293915773&4294967295,b=x+(P<<15&4294967295|P>>>17),P=S+(x^(b|~y))+A[1]+2240044497&4294967295,S=b+(P<<21&4294967295|P>>>11),P=y+(b^(S|~x))+A[8]+1873313359&4294967295,y=S+(P<<6&4294967295|P>>>26),P=x+(S^(y|~b))+A[15]+4264355552&4294967295,x=y+(P<<10&4294967295|P>>>22),P=b+(y^(x|~S))+A[6]+2734768916&4294967295,b=x+(P<<15&4294967295|P>>>17),P=S+(x^(b|~y))+A[13]+1309151649&4294967295,S=b+(P<<21&4294967295|P>>>11),P=y+(b^(S|~x))+A[4]+4149444226&4294967295,y=S+(P<<6&4294967295|P>>>26),P=x+(S^(y|~b))+A[11]+3174756917&4294967295,x=y+(P<<10&4294967295|P>>>22),P=b+(y^(x|~S))+A[2]+718787259&4294967295,b=x+(P<<15&4294967295|P>>>17),P=S+(x^(b|~y))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(b+(P<<21&4294967295|P>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var S=y-this.blockSize,A=this.B,b=this.h,x=0;x<y;){if(b==0)for(;x<=S;)i(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<y;)if(A[b++]=E.charCodeAt(x++),b==this.blockSize){i(this,A),b=0;break}}else for(;x<y;)if(A[b++]=E[x++],b==this.blockSize){i(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var S=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=S&255,S/=256;for(this.u(E),E=Array(16),y=S=0;4>y;++y)for(var A=0;32>A;A+=8)E[S++]=this.g[y]>>>A&255;return E};function s(E,y){var S=a;return Object.prototype.hasOwnProperty.call(S,E)?S[E]:S[E]=y(E)}function o(E,y){this.h=y;for(var S=[],A=!0,b=E.length-1;0<=b;b--){var x=E[b]|0;A&&x==y||(S[b]=x,A=!1)}this.g=S}var a={};function l(E){return-128<=E&&128>E?s(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function c(E){if(isNaN(E)||!isFinite(E))return f;if(0>E)return k(c(-E));for(var y=[],S=1,A=0;E>=S;A++)y[A]=E/S|0,S*=4294967296;return new o(y,0)}function h(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return k(h(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(y,8)),A=f,b=0;b<E.length;b+=8){var x=Math.min(8,E.length-b),P=parseInt(E.substring(b,b+x),y);8>x?(x=c(Math.pow(y,x)),A=A.j(x).add(c(P))):(A=A.j(S),A=A.add(c(P)))}return A}var f=l(0),m=l(1),g=l(16777216);t=o.prototype,t.m=function(){if(R(this))return-k(this).m();for(var E=0,y=1,S=0;S<this.g.length;S++){var A=this.i(S);E+=(0<=A?A:4294967296+A)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(T(this))return"0";if(R(this))return"-"+k(this).toString(E);for(var y=c(Math.pow(E,6)),S=this,A="";;){var b=C(S,y).g;S=I(S,b.j(y));var x=((0<S.g.length?S.g[0]:S.h)>>>0).toString(E);if(S=b,T(S))return x+A;for(;6>x.length;)x="0"+x;A=x+A}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function T(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function R(E){return E.h==-1}t.l=function(E){return E=I(this,E),R(E)?-1:T(E)?0:1};function k(E){for(var y=E.g.length,S=[],A=0;A<y;A++)S[A]=~E.g[A];return new o(S,~E.h).add(m)}t.abs=function(){return R(this)?k(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),S=[],A=0,b=0;b<=y;b++){var x=A+(this.i(b)&65535)+(E.i(b)&65535),P=(x>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);A=P>>>16,x&=65535,P&=65535,S[b]=P<<16|x}return new o(S,S[S.length-1]&-2147483648?-1:0)};function I(E,y){return E.add(k(y))}t.j=function(E){if(T(this)||T(E))return f;if(R(this))return R(E)?k(this).j(k(E)):k(k(this).j(E));if(R(E))return k(this.j(k(E)));if(0>this.l(g)&&0>E.l(g))return c(this.m()*E.m());for(var y=this.g.length+E.g.length,S=[],A=0;A<2*y;A++)S[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<E.g.length;b++){var x=this.i(A)>>>16,P=this.i(A)&65535,Ft=E.i(b)>>>16,Jn=E.i(b)&65535;S[2*A+2*b]+=P*Jn,v(S,2*A+2*b),S[2*A+2*b+1]+=x*Jn,v(S,2*A+2*b+1),S[2*A+2*b+1]+=P*Ft,v(S,2*A+2*b+1),S[2*A+2*b+2]+=x*Ft,v(S,2*A+2*b+2)}for(A=0;A<y;A++)S[A]=S[2*A+1]<<16|S[2*A];for(A=y;A<2*y;A++)S[A]=0;return new o(S,0)};function v(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function w(E,y){this.g=E,this.h=y}function C(E,y){if(T(y))throw Error("division by zero");if(T(E))return new w(f,f);if(R(E))return y=C(k(E),y),new w(k(y.g),k(y.h));if(R(y))return y=C(E,k(y)),new w(k(y.g),y.h);if(30<E.g.length){if(R(E)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var S=m,A=y;0>=A.l(E);)S=L(S),A=L(A);var b=M(S,1),x=M(A,1);for(A=M(A,2),S=M(S,2);!T(A);){var P=x.add(A);0>=P.l(E)&&(b=b.add(S),x=P),A=M(A,1),S=M(S,1)}return y=I(E,b.j(y)),new w(b,y)}for(b=f;0<=E.l(y);){for(S=Math.max(1,Math.floor(E.m()/y.m())),A=Math.ceil(Math.log(S)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),x=c(S),P=x.j(y);R(P)||0<P.l(E);)S-=A,x=c(S),P=x.j(y);T(x)&&(x=m),b=b.add(x),E=I(E,P)}return new w(b,E)}t.A=function(E){return C(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),S=[],A=0;A<y;A++)S[A]=this.i(A)&E.i(A);return new o(S,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),S=[],A=0;A<y;A++)S[A]=this.i(A)|E.i(A);return new o(S,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),S=[],A=0;A<y;A++)S[A]=this.i(A)^E.i(A);return new o(S,this.h^E.h)};function L(E){for(var y=E.g.length+1,S=[],A=0;A<y;A++)S[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(S,E.h)}function M(E,y){var S=y>>5;y%=32;for(var A=E.g.length-S,b=[],x=0;x<A;x++)b[x]=0<y?E.i(x+S)>>>y|E.i(x+S+1)<<32-y:E.i(x+S);return new o(b,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,NS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Zi=o}).apply(typeof Hw<"u"?Hw:typeof self<"u"?self:typeof window<"u"?window:{});var dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var DS,OS,Ja,VS,Vc,um,LS,MS,FS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,p){return u==Array.prototype||u==Object.prototype||(u[d]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof dc=="object"&&dc];for(var d=0;d<u.length;++d){var p=u[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var p=r;u=u.split(".");for(var _=0;_<u.length-1;_++){var N=u[_];if(!(N in p))break e;p=p[N]}u=u[u.length-1],_=p[u],d=d(_),d!=_&&d!=null&&e(p,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var p=0,_=!1,N={next:function(){if(!_&&p<u.length){var V=p++;return{value:d(V,u[V]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,p){return u.call.apply(u.bind,arguments)}function f(u,d,p){if(!u)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),u.apply(d,N)}}return function(){return u.apply(d,arguments)}}function m(u,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function g(u,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),u.apply(this,_)}}function T(u,d){function p(){}p.prototype=d.prototype,u.aa=d.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(_,N,V){for(var q=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)q[_e-2]=arguments[_e];return d.prototype[N].apply(_,q)}}function R(u){const d=u.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=u[_];return p}return[]}function k(u,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(l(_)){const N=u.length||0,V=_.length||0;u.length=N+V;for(let q=0;q<V;q++)u[N+q]=_[q]}else u.push(_)}}class I{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function v(u){return/^[\s\xa0]*$/.test(u)}function w(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function C(u){return C[" "](u),u}C[" "]=function(){};var L=w().indexOf("Gecko")!=-1&&!(w().toLowerCase().indexOf("webkit")!=-1&&w().indexOf("Edge")==-1)&&!(w().indexOf("Trident")!=-1||w().indexOf("MSIE")!=-1)&&w().indexOf("Edge")==-1;function M(u,d,p){for(const _ in u)d.call(p,u[_],_,u)}function E(u,d){for(const p in u)d.call(void 0,u[p],p,u)}function y(u){const d={};for(const p in u)d[p]=u[p];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(u,d){let p,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(p in _)u[p]=_[p];for(let V=0;V<S.length;V++)p=S[V],Object.prototype.hasOwnProperty.call(_,p)&&(u[p]=_[p])}}function b(u){var d=1;u=u.split(":");const p=[];for(;0<d&&u.length;)p.push(u.shift()),d--;return u.length&&p.push(u.join(":")),p}function x(u){a.setTimeout(()=>{throw u},0)}function P(){var u=ee;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class Ft{constructor(){this.h=this.g=null}add(d,p){const _=Jn.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var Jn=new I(()=>new Ci,u=>u.reset());class Ci{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let yn,H=!1,ee=new Ft,K=()=>{const u=a.Promise.resolve(void 0);yn=()=>{u.then(ne)}};var ne=()=>{for(var u;u=P();){try{u.h.call(u.g)}catch(p){x(p)}var d=Jn;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}H=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function se(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}se.prototype.h=function(){this.defaultPrevented=!0};var vn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return u}();function Xn(u,d){if(se.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,_=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(L){e:{try{C(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else p=="mouseover"?d=u.fromElement:p=="mouseout"&&(d=u.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Zn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Xn.aa.h.call(this)}}T(Xn,se);var Zn={2:"touch",3:"pen",4:"mouse"};Xn.prototype.h=function(){Xn.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var er="closure_listenable_"+(1e6*Math.random()|0),L1=0;function M1(u,d,p,_,N){this.listener=u,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=N,this.key=++L1,this.da=this.fa=!1}function Nu(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Du(u){this.src=u,this.g={},this.h=0}Du.prototype.add=function(u,d,p,_,N){var V=u.toString();u=this.g[V],u||(u=this.g[V]=[],this.h++);var q=Qd(u,d,_,N);return-1<q?(d=u[q],p||(d.fa=!1)):(d=new M1(d,this.src,V,!!_,N),d.fa=p,u.push(d)),d};function Kd(u,d){var p=d.type;if(p in u.g){var _=u.g[p],N=Array.prototype.indexOf.call(_,d,void 0),V;(V=0<=N)&&Array.prototype.splice.call(_,N,1),V&&(Nu(d),u.g[p].length==0&&(delete u.g[p],u.h--))}}function Qd(u,d,p,_){for(var N=0;N<u.length;++N){var V=u[N];if(!V.da&&V.listener==d&&V.capture==!!p&&V.ha==_)return N}return-1}var Yd="closure_lm_"+(1e6*Math.random()|0),Jd={};function Sy(u,d,p,_,N){if(Array.isArray(d)){for(var V=0;V<d.length;V++)Sy(u,d[V],p,_,N);return null}return p=Py(p),u&&u[er]?u.K(d,p,c(_)?!!_.capture:!!_,N):F1(u,d,p,!1,_,N)}function F1(u,d,p,_,N,V){if(!d)throw Error("Invalid event type");var q=c(N)?!!N.capture:!!N,_e=Zd(u);if(_e||(u[Yd]=_e=new Du(u)),p=_e.add(d,p,_,q,V),p.proxy)return p;if(_=U1(),p.proxy=_,_.src=u,_.listener=p,u.addEventListener)vn||(N=q),N===void 0&&(N=!1),u.addEventListener(d.toString(),_,N);else if(u.attachEvent)u.attachEvent(Ay(d.toString()),_);else if(u.addListener&&u.removeListener)u.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function U1(){function u(p){return d.call(u.src,u.listener,p)}const d=B1;return u}function Ry(u,d,p,_,N){if(Array.isArray(d))for(var V=0;V<d.length;V++)Ry(u,d[V],p,_,N);else _=c(_)?!!_.capture:!!_,p=Py(p),u&&u[er]?(u=u.i,d=String(d).toString(),d in u.g&&(V=u.g[d],p=Qd(V,p,_,N),-1<p&&(Nu(V[p]),Array.prototype.splice.call(V,p,1),V.length==0&&(delete u.g[d],u.h--)))):u&&(u=Zd(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Qd(d,p,_,N)),(p=-1<u?d[u]:null)&&Xd(p))}function Xd(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[er])Kd(d.i,u);else{var p=u.type,_=u.proxy;d.removeEventListener?d.removeEventListener(p,_,u.capture):d.detachEvent?d.detachEvent(Ay(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=Zd(d))?(Kd(p,u),p.h==0&&(p.src=null,d[Yd]=null)):Nu(u)}}}function Ay(u){return u in Jd?Jd[u]:Jd[u]="on"+u}function B1(u,d){if(u.da)u=!0;else{d=new Xn(d,this);var p=u.listener,_=u.ha||u.src;u.fa&&Xd(u),u=p.call(_,d)}return u}function Zd(u){return u=u[Yd],u instanceof Du?u:null}var ef="__closure_events_fn_"+(1e9*Math.random()>>>0);function Py(u){return typeof u=="function"?u:(u[ef]||(u[ef]=function(d){return u.handleEvent(d)}),u[ef])}function mt(){re.call(this),this.i=new Du(this),this.M=this,this.F=null}T(mt,re),mt.prototype[er]=!0,mt.prototype.removeEventListener=function(u,d,p,_){Ry(this,u,d,p,_)};function Rt(u,d){var p,_=u.F;if(_)for(p=[];_;_=_.F)p.push(_);if(u=u.M,_=d.type||d,typeof d=="string")d=new se(d,u);else if(d instanceof se)d.target=d.target||u;else{var N=d;d=new se(_,u),A(d,N)}if(N=!0,p)for(var V=p.length-1;0<=V;V--){var q=d.g=p[V];N=Ou(q,_,!0,d)&&N}if(q=d.g=u,N=Ou(q,_,!0,d)&&N,N=Ou(q,_,!1,d)&&N,p)for(V=0;V<p.length;V++)q=d.g=p[V],N=Ou(q,_,!1,d)&&N}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var p=u.g[d],_=0;_<p.length;_++)Nu(p[_]);delete u.g[d],u.h--}}this.F=null},mt.prototype.K=function(u,d,p,_){return this.i.add(String(u),d,!1,p,_)},mt.prototype.L=function(u,d,p,_){return this.i.add(String(u),d,!0,p,_)};function Ou(u,d,p,_){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,V=0;V<d.length;++V){var q=d[V];if(q&&!q.da&&q.capture==p){var _e=q.listener,ut=q.ha||q.src;q.fa&&Kd(u.i,q),N=_e.call(ut,_)!==!1&&N}}return N&&!_.defaultPrevented}function ky(u,d,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function Cy(u){u.g=ky(()=>{u.g=null,u.i&&(u.i=!1,Cy(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class j1 extends re{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Cy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pa(u){re.call(this),this.h=u,this.g={}}T(pa,re);var by=[];function xy(u){M(u.g,function(d,p){this.g.hasOwnProperty(p)&&Xd(d)},u),u.g={}}pa.prototype.N=function(){pa.aa.N.call(this),xy(this)},pa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tf=a.JSON.stringify,z1=a.JSON.parse,$1=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function nf(){}nf.prototype.h=null;function Ny(u){return u.h||(u.h=u.i())}function Dy(){}var ma={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function rf(){se.call(this,"d")}T(rf,se);function sf(){se.call(this,"c")}T(sf,se);var bi={},Oy=null;function Vu(){return Oy=Oy||new mt}bi.La="serverreachability";function Vy(u){se.call(this,bi.La,u)}T(Vy,se);function ga(u){const d=Vu();Rt(d,new Vy(d))}bi.STAT_EVENT="statevent";function Ly(u,d){se.call(this,bi.STAT_EVENT,u),this.stat=d}T(Ly,se);function At(u){const d=Vu();Rt(d,new Ly(d,u))}bi.Ma="timingevent";function My(u,d){se.call(this,bi.Ma,u),this.size=d}T(My,se);function _a(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function ya(){this.g=!0}ya.prototype.xa=function(){this.g=!1};function q1(u,d,p,_,N,V){u.info(function(){if(u.g)if(V)for(var q="",_e=V.split("&"),ut=0;ut<_e.length;ut++){var fe=_e[ut].split("=");if(1<fe.length){var gt=fe[0];fe=fe[1];var _t=gt.split("_");q=2<=_t.length&&_t[1]=="type"?q+(gt+"="+fe+"&"):q+(gt+"=redacted&")}}else q=null;else q=V;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+d+`
`+p+`
`+q})}function W1(u,d,p,_,N,V,q){u.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+d+`
`+p+`
`+V+" "+q})}function Ns(u,d,p,_){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+H1(u,p)+(_?" "+_:"")})}function G1(u,d){u.info(function(){return"TIMEOUT: "+d})}ya.prototype.info=function(){};function H1(u,d){if(!u.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var _=p[u];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var V=N[0];if(V!="noop"&&V!="stop"&&V!="close")for(var q=1;q<N.length;q++)N[q]=""}}}}return tf(p)}catch{return d}}var Lu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fy={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},of;function Mu(){}T(Mu,nf),Mu.prototype.g=function(){return new XMLHttpRequest},Mu.prototype.i=function(){return{}},of=new Mu;function xr(u,d,p,_){this.j=u,this.i=d,this.l=p,this.R=_||1,this.U=new pa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Uy}function Uy(){this.i=null,this.g="",this.h=!1}var By={},af={};function lf(u,d,p){u.L=1,u.v=ju(tr(d)),u.m=p,u.P=!0,jy(u,null)}function jy(u,d){u.F=Date.now(),Fu(u),u.A=tr(u.v);var p=u.A,_=u.R;Array.isArray(_)||(_=[String(_)]),tv(p.i,"t",_),u.C=0,p=u.j.J,u.h=new Uy,u.g=vv(u.j,p?d:null,!u.m),0<u.O&&(u.M=new j1(m(u.Y,u,u.g),u.O)),d=u.U,p=u.g,_=u.ca;var N="readystatechange";Array.isArray(N)||(N&&(by[0]=N.toString()),N=by);for(var V=0;V<N.length;V++){var q=Sy(p,N[V],_||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=u.H?y(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),ga(),q1(u.i,u.u,u.A,u.l,u.R,u.m)}xr.prototype.ca=function(u){u=u.target;const d=this.M;d&&nr(u)==3?d.j():this.Y(u)},xr.prototype.Y=function(u){try{if(u==this.g)e:{const _t=nr(this.g);var d=this.g.Ba();const Vs=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||lv(this.g)))){this.J||_t!=4||d==7||(d==8||0>=Vs?ga(3):ga(2)),uf(this);var p=this.g.Z();this.X=p;t:if(zy(this)){var _=lv(this.g);u="";var N=_.length,V=nr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xi(this),va(this);var q="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,u+=this.h.i.decode(_[d],{stream:!(V&&d==N-1)});_.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,W1(this.i,this.u,this.A,this.l,this.R,_t,p),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,ut=this.g;if((_e=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(_e)){var fe=_e;break t}}fe=null}if(p=fe)Ns(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,cf(this,p);else{this.o=!1,this.s=3,At(12),xi(this),va(this);break e}}if(this.P){p=!0;let wn;for(;!this.J&&this.C<q.length;)if(wn=K1(this,q),wn==af){_t==4&&(this.s=4,At(14),p=!1),Ns(this.i,this.l,null,"[Incomplete Response]");break}else if(wn==By){this.s=4,At(15),Ns(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else Ns(this.i,this.l,wn,null),cf(this,wn);if(zy(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||q.length!=0||this.h.h||(this.s=1,At(16),p=!1),this.o=this.o&&p,!p)Ns(this.i,this.l,q,"[Invalid Chunked Response]"),xi(this),va(this);else if(0<q.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),gf(gt),gt.M=!0,At(11))}}else Ns(this.i,this.l,q,null),cf(this,q);_t==4&&xi(this),this.o&&!this.J&&(_t==4?mv(this.j,this):(this.o=!1,Fu(this)))}else hk(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),xi(this),va(this)}}}catch{}finally{}};function zy(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function K1(u,d){var p=u.C,_=d.indexOf(`
`,p);return _==-1?af:(p=Number(d.substring(p,_)),isNaN(p)?By:(_+=1,_+p>d.length?af:(d=d.slice(_,_+p),u.C=_+p,d)))}xr.prototype.cancel=function(){this.J=!0,xi(this)};function Fu(u){u.S=Date.now()+u.I,$y(u,u.I)}function $y(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=_a(m(u.ba,u),d)}function uf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}xr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(G1(this.i,this.A),this.L!=2&&(ga(),At(17)),xi(this),this.s=2,va(this)):$y(this,this.S-u)};function va(u){u.j.G==0||u.J||mv(u.j,u)}function xi(u){uf(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,xy(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function cf(u,d){try{var p=u.j;if(p.G!=0&&(p.g==u||hf(p.h,u))){if(!u.K&&hf(p.h,u)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)Gu(p),qu(p);else break e;mf(p),At(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=_a(m(p.Za,p),6e3));if(1>=Gy(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Di(p,11)}else if((u.K||p.g==u)&&Gu(p),!v(d))for(N=p.Da.g.parse(d),d=0;d<N.length;d++){let fe=N[d];if(p.T=fe[0],fe=fe[1],p.G==2)if(fe[0]=="c"){p.K=fe[1],p.ia=fe[2];const gt=fe[3];gt!=null&&(p.la=gt,p.j.info("VER="+p.la));const _t=fe[4];_t!=null&&(p.Aa=_t,p.j.info("SVER="+p.Aa));const Vs=fe[5];Vs!=null&&typeof Vs=="number"&&0<Vs&&(_=1.5*Vs,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const wn=u.g;if(wn){const Ku=wn.g?wn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ku){var V=_.h;V.g||Ku.indexOf("spdy")==-1&&Ku.indexOf("quic")==-1&&Ku.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(df(V,V.h),V.h=null))}if(_.D){const _f=wn.g?wn.g.getResponseHeader("X-HTTP-Session-Id"):null;_f&&(_.ya=_f,we(_.I,_.D,_f))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var q=u;if(_.qa=yv(_,_.J?_.ia:null,_.W),q.K){Hy(_.h,q);var _e=q,ut=_.L;ut&&(_e.I=ut),_e.B&&(uf(_e),Fu(_e)),_.g=q}else fv(_);0<p.i.length&&Wu(p)}else fe[0]!="stop"&&fe[0]!="close"||Di(p,7);else p.G==3&&(fe[0]=="stop"||fe[0]=="close"?fe[0]=="stop"?Di(p,7):pf(p):fe[0]!="noop"&&p.l&&p.l.ta(fe),p.v=0)}}ga(4)}catch{}}var Q1=class{constructor(u,d){this.g=u,this.map=d}};function qy(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wy(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Gy(u){return u.h?1:u.g?u.g.size:0}function hf(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function df(u,d){u.g?u.g.add(d):u.h=d}function Hy(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}qy.prototype.cancel=function(){if(this.i=Ky(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Ky(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const p of u.g.values())d=d.concat(p.D);return d}return R(u.i)}function Y1(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],p=u.length,_=0;_<p;_++)d.push(u[_]);return d}d=[],p=0;for(_ in u)d[p++]=u[_];return d}function J1(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var p=0;p<u;p++)d.push(p);return d}d=[],p=0;for(const _ in u)d[p++]=_;return d}}}function Qy(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var p=J1(u),_=Y1(u),N=_.length,V=0;V<N;V++)d.call(void 0,_[V],p&&p[V],u)}var Yy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function X1(u,d){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var _=u[p].indexOf("="),N=null;if(0<=_){var V=u[p].substring(0,_);N=u[p].substring(_+1)}else V=u[p];d(V,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Ni(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ni){this.h=u.h,Uu(this,u.j),this.o=u.o,this.g=u.g,Bu(this,u.s),this.l=u.l;var d=u.i,p=new Ea;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Jy(this,p),this.m=u.m}else u&&(d=String(u).match(Yy))?(this.h=!1,Uu(this,d[1]||"",!0),this.o=wa(d[2]||""),this.g=wa(d[3]||"",!0),Bu(this,d[4]),this.l=wa(d[5]||"",!0),Jy(this,d[6]||"",!0),this.m=wa(d[7]||"")):(this.h=!1,this.i=new Ea(null,this.h))}Ni.prototype.toString=function(){var u=[],d=this.j;d&&u.push(Ia(d,Xy,!0),":");var p=this.g;return(p||d=="file")&&(u.push("//"),(d=this.o)&&u.push(Ia(d,Xy,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(Ia(p,p.charAt(0)=="/"?tk:ek,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",Ia(p,rk)),u.join("")};function tr(u){return new Ni(u)}function Uu(u,d,p){u.j=p?wa(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function Bu(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function Jy(u,d,p){d instanceof Ea?(u.i=d,ik(u.i,u.h)):(p||(d=Ia(d,nk)),u.i=new Ea(d,u.h))}function we(u,d,p){u.i.set(d,p)}function ju(u){return we(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function wa(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ia(u,d,p){return typeof u=="string"?(u=encodeURI(u).replace(d,Z1),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Z1(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Xy=/[#\/\?@]/g,ek=/[#\?:]/g,tk=/[#\?]/g,nk=/[#\?@]/g,rk=/#/g;function Ea(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Nr(u){u.g||(u.g=new Map,u.h=0,u.i&&X1(u.i,function(d,p){u.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Ea.prototype,t.add=function(u,d){Nr(this),this.i=null,u=Ds(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(d),this.h+=1,this};function Zy(u,d){Nr(u),d=Ds(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function ev(u,d){return Nr(u),d=Ds(u,d),u.g.has(d)}t.forEach=function(u,d){Nr(this),this.g.forEach(function(p,_){p.forEach(function(N){u.call(d,N,_,this)},this)},this)},t.na=function(){Nr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const N=u[_];for(let V=0;V<N.length;V++)p.push(d[_])}return p},t.V=function(u){Nr(this);let d=[];if(typeof u=="string")ev(this,u)&&(d=d.concat(this.g.get(Ds(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)d=d.concat(u[p])}return d},t.set=function(u,d){return Nr(this),this.i=null,u=Ds(this,u),ev(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function tv(u,d,p){Zy(u,d),0<p.length&&(u.i=null,u.g.set(Ds(u,d),R(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const V=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var N=V;q[_]!==""&&(N+="="+encodeURIComponent(String(q[_]))),u.push(N)}}return this.i=u.join("&")};function Ds(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function ik(u,d){d&&!u.j&&(Nr(u),u.i=null,u.g.forEach(function(p,_){var N=_.toLowerCase();_!=N&&(Zy(this,_),tv(this,N,p))},u)),u.j=d}function sk(u,d){const p=new ya;if(a.Image){const _=new Image;_.onload=g(Dr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=g(Dr,p,"TestLoadImage: error",!1,d,_),_.onabort=g(Dr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=g(Dr,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=u}else d(!1)}function ok(u,d){const p=new ya,_=new AbortController,N=setTimeout(()=>{_.abort(),Dr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:_.signal}).then(V=>{clearTimeout(N),V.ok?Dr(p,"TestPingServer: ok",!0,d):Dr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),Dr(p,"TestPingServer: error",!1,d)})}function Dr(u,d,p,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(p)}catch{}}function ak(){this.g=new $1}function lk(u,d,p){const _=p||"";try{Qy(u,function(N,V){let q=N;c(N)&&(q=tf(N)),d.push(_+V+"="+encodeURIComponent(q))})}catch(N){throw d.push(_+"type="+encodeURIComponent("_badmap")),N}}function Ta(u){this.l=u.Ub||null,this.j=u.eb||!1}T(Ta,nf),Ta.prototype.g=function(){return new zu(this.l,this.j)},Ta.prototype.i=function(u){return function(){return u}}({});function zu(u,d){mt.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(zu,mt),t=zu.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Ra(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sa(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Ra(this)),this.g&&(this.readyState=3,Ra(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;nv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function nv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?Sa(this):Ra(this),this.readyState==3&&nv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Sa(this))},t.Qa=function(u){this.g&&(this.response=u,Sa(this))},t.ga=function(){this.g&&Sa(this)};function Sa(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Ra(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=d.next();return u.join(`\r
`)};function Ra(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(zu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function rv(u){let d="";return M(u,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function ff(u,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=rv(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):we(u,d,p))}function Ve(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(Ve,mt);var uk=/^https?$/i,ck=["POST","PUT"];t=Ve.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():of.g(),this.v=this.o?Ny(this.o):Ny(of),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(V){iv(this,V);return}if(u=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)p.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const V of _.keys())p.set(V,_.get(V));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(V=>V.toLowerCase()=="content-type"),N=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(ck,d,void 0))||_||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,q]of p)this.g.setRequestHeader(V,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{av(this),this.u=!0,this.g.send(u),this.u=!1}catch(V){iv(this,V)}};function iv(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,sv(u),$u(u)}function sv(u){u.A||(u.A=!0,Rt(u,"complete"),Rt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Rt(this,"complete"),Rt(this,"abort"),$u(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$u(this,!0)),Ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ov(this):this.bb())},t.bb=function(){ov(this)};function ov(u){if(u.h&&typeof o<"u"&&(!u.v[1]||nr(u)!=4||u.Z()!=2)){if(u.u&&nr(u)==4)ky(u.Ea,0,u);else if(Rt(u,"readystatechange"),nr(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=q===0){var N=String(u.D).match(Yy)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),_=!uk.test(N?N.toLowerCase():"")}p=_}if(p)Rt(u,"complete"),Rt(u,"success");else{u.m=6;try{var V=2<nr(u)?u.g.statusText:""}catch{V=""}u.l=V+" ["+u.Z()+"]",sv(u)}}finally{$u(u)}}}}function $u(u,d){if(u.g){av(u);const p=u.g,_=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||Rt(u,"ready");try{p.onreadystatechange=_}catch{}}}function av(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function nr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<nr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),z1(d)}};function lv(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function hk(u){const d={};u=(u.g&&2<=nr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<u.length;_++){if(v(u[_]))continue;var p=b(u[_]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const V=d[N]||[];d[N]=V,V.push(p)}E(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Aa(u,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||d}function uv(u){this.Aa=0,this.i=[],this.j=new ya,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Aa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Aa("baseRetryDelayMs",5e3,u),this.cb=Aa("retryDelaySeedMs",1e4,u),this.Wa=Aa("forwardChannelMaxRetries",2,u),this.wa=Aa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new qy(u&&u.concurrentRequestLimit),this.Da=new ak,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=uv.prototype,t.la=8,t.G=1,t.connect=function(u,d,p,_){At(0),this.W=u,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=yv(this,null,this.W),Wu(this)};function pf(u){if(cv(u),u.G==3){var d=u.U++,p=tr(u.I);if(we(p,"SID",u.K),we(p,"RID",d),we(p,"TYPE","terminate"),Pa(u,p),d=new xr(u,u.j,d),d.L=2,d.v=ju(tr(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=vv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Fu(d)}_v(u)}function qu(u){u.g&&(gf(u),u.g.cancel(),u.g=null)}function cv(u){qu(u),u.u&&(a.clearTimeout(u.u),u.u=null),Gu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Wu(u){if(!Wy(u.h)&&!u.s){u.s=!0;var d=u.Ga;yn||K(),H||(yn(),H=!0),ee.add(d,u),u.B=0}}function dk(u,d){return Gy(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=_a(m(u.Ga,u,d),gv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const N=new xr(this,this.j,u);let V=this.o;if(this.S&&(V?(V=y(V),A(V,this.S)):V=this.S),this.m!==null||this.O||(N.H=V,V=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=dv(this,N,d),p=tr(this.I),we(p,"RID",u),we(p,"CVER",22),this.D&&we(p,"X-HTTP-Session-Id",this.D),Pa(this,p),V&&(this.O?d="headers="+encodeURIComponent(String(rv(V)))+"&"+d:this.m&&ff(p,this.m,V)),df(this.h,N),this.Ua&&we(p,"TYPE","init"),this.P?(we(p,"$req",d),we(p,"SID","null"),N.T=!0,lf(N,p,null)):lf(N,p,d),this.G=2}}else this.G==3&&(u?hv(this,u):this.i.length==0||Wy(this.h)||hv(this))};function hv(u,d){var p;d?p=d.l:p=u.U++;const _=tr(u.I);we(_,"SID",u.K),we(_,"RID",p),we(_,"AID",u.T),Pa(u,_),u.m&&u.o&&ff(_,u.m,u.o),p=new xr(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),d&&(u.i=d.D.concat(u.i)),d=dv(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),df(u.h,p),lf(p,_,d)}function Pa(u,d){u.H&&M(u.H,function(p,_){we(d,_,p)}),u.l&&Qy({},function(p,_){we(d,_,p)})}function dv(u,d,p){p=Math.min(u.i.length,p);var _=u.l?m(u.l.Na,u.l,u):null;e:{var N=u.i;let V=-1;for(;;){const q=["count="+p];V==-1?0<p?(V=N[0].g,q.push("ofs="+V)):V=0:q.push("ofs="+V);let _e=!0;for(let ut=0;ut<p;ut++){let fe=N[ut].g;const gt=N[ut].map;if(fe-=V,0>fe)V=Math.max(0,N[ut].g-100),_e=!1;else try{lk(gt,q,"req"+fe+"_")}catch{_&&_(gt)}}if(_e){_=q.join("&");break e}}}return u=u.i.splice(0,p),d.D=u,_}function fv(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;yn||K(),H||(yn(),H=!0),ee.add(d,u),u.v=0}}function mf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=_a(m(u.Fa,u),gv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,pv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=_a(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),qu(this),pv(this))};function gf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function pv(u){u.g=new xr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=tr(u.qa);we(d,"RID","rpc"),we(d,"SID",u.K),we(d,"AID",u.T),we(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&we(d,"TO",u.ja),we(d,"TYPE","xmlhttp"),Pa(u,d),u.m&&u.o&&ff(d,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=ju(tr(d)),p.m=null,p.P=!0,jy(p,u)}t.Za=function(){this.C!=null&&(this.C=null,qu(this),mf(this),At(19))};function Gu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function mv(u,d){var p=null;if(u.g==d){Gu(u),gf(u),u.g=null;var _=2}else if(hf(u.h,d))p=d.D,Hy(u.h,d),_=1;else return;if(u.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var N=u.B;_=Vu(),Rt(_,new My(_,p)),Wu(u)}else fv(u);else if(N=d.s,N==3||N==0&&0<d.X||!(_==1&&dk(u,d)||_==2&&mf(u)))switch(p&&0<p.length&&(d=u.h,d.i=d.i.concat(p)),N){case 1:Di(u,5);break;case 4:Di(u,10);break;case 3:Di(u,6);break;default:Di(u,2)}}}function gv(u,d){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*d}function Di(u,d){if(u.j.info("Error code "+d),d==2){var p=m(u.fb,u),_=u.Xa;const N=!_;_=new Ni(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Uu(_,"https"),ju(_),N?sk(_.toString(),p):ok(_.toString(),p)}else At(2);u.G=0,u.l&&u.l.sa(d),_v(u),cv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function _v(u){if(u.G=0,u.ka=[],u.l){const d=Ky(u.h);(d.length!=0||u.i.length!=0)&&(k(u.ka,d),k(u.ka,u.i),u.h.i.length=0,R(u.i),u.i.length=0),u.l.ra()}}function yv(u,d,p){var _=p instanceof Ni?tr(p):new Ni(p);if(_.g!="")d&&(_.g=d+"."+_.g),Bu(_,_.s);else{var N=a.location;_=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var V=new Ni(null);_&&Uu(V,_),d&&(V.g=d),N&&Bu(V,N),p&&(V.l=p),_=V}return p=u.D,d=u.ya,p&&d&&we(_,p,d),we(_,"VER",u.la),Pa(u,_),_}function vv(u,d,p){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Ve(new Ta({eb:p})):new Ve(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wv(){}t=wv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Hu(){}Hu.prototype.g=function(u,d){return new Qt(u,d)};function Qt(u,d){mt.call(this),this.g=new uv(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!v(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!v(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Os(this)}T(Qt,mt),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){pf(this.g)},Qt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=tf(u),u=p);d.i.push(new Q1(d.Ya++,u)),d.G==3&&Wu(d)},Qt.prototype.N=function(){this.g.l=null,delete this.j,pf(this.g),delete this.g,Qt.aa.N.call(this)};function Iv(u){rf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const p in d){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}T(Iv,rf);function Ev(){sf.call(this),this.status=1}T(Ev,sf);function Os(u){this.g=u}T(Os,wv),Os.prototype.ua=function(){Rt(this.g,"a")},Os.prototype.ta=function(u){Rt(this.g,new Iv(u))},Os.prototype.sa=function(u){Rt(this.g,new Ev)},Os.prototype.ra=function(){Rt(this.g,"b")},Hu.prototype.createWebChannel=Hu.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,FS=function(){return new Hu},MS=function(){return Vu()},LS=bi,um={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Lu.NO_ERROR=0,Lu.TIMEOUT=8,Lu.HTTP_ERROR=6,Vc=Lu,Fy.COMPLETE="complete",VS=Fy,Dy.EventType=ma,ma.OPEN="a",ma.CLOSE="b",ma.ERROR="c",ma.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Ja=Dy,OS=Ta,Ve.prototype.listenOnce=Ve.prototype.L,Ve.prototype.getLastError=Ve.prototype.Ka,Ve.prototype.getLastErrorCode=Ve.prototype.Ba,Ve.prototype.getStatus=Ve.prototype.Z,Ve.prototype.getResponseJson=Ve.prototype.Oa,Ve.prototype.getResponseText=Ve.prototype.oa,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Ha,DS=Ve}).apply(typeof dc<"u"?dc:typeof self<"u"?self:typeof window<"u"?window:{});const Kw="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nt=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};nt.UNAUTHENTICATED=new nt(null),nt.GOOGLE_CREDENTIALS=new nt("google-credentials-uid"),nt.FIRST_PARTY=new nt("first-party-uid"),nt.MOCK_USER=new nt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci=new cd("@firebase/firestore");function $s(){return ci.logLevel}function _D(t){ci.setLogLevel(t)}function B(t,...e){if(ci.logLevel<=oe.DEBUG){const n=e.map(Qg);ci.debug(`Firestore (${ta}): ${t}`,...n)}}function We(t,...e){if(ci.logLevel<=oe.ERROR){const n=e.map(Qg);ci.error(`Firestore (${ta}): ${t}`,...n)}}function bn(t,...e){if(ci.logLevel<=oe.WARN){const n=e.map(Qg);ci.warn(`Firestore (${ta}): ${t}`,...n)}}function Qg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${ta}) INTERNAL ASSERTION FAILED: `+t;throw We(e),new Error(e)}function X(t,e){t||Q()}function yD(t,e){t||Q()}function G(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Tt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class wD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ID{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new it;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new it,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new it)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(X(typeof r.accessToken=="string"),new US(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return X(e===null||typeof e=="string"),new nt(e)}}class ED{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class TD{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ED(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(X(typeof n.token=="string"),this.R=n.token,new SD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function te(t,e){return t<e?-1:t>e?1:0}function No(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function jS(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ke.fromMillis(Date.now())}static fromDate(e){return ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ke(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new ke(0,0))}static max(){return new Z(new ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(),r===void 0?r=e.length-n:r>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ql.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ql?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends ql{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new le(n)}static emptyPath(){return new le([])}}const PD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ae extends ql{construct(e,n,r){return new Ae(e,n,r)}static isValidIdentifier(e){return PD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ae(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new U(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new U(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ae(n)}static emptyPath(){return new Ae([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(le.fromString(e))}static fromName(e){return new W(le.fromString(e).popFirst(5))}static empty(){return new W(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new le(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function cm(t){return t.fields.find(e=>e.kind===2)}function Ui(t){return t.fields.filter(e=>e.kind!==2)}Rh.UNKNOWN_ID=-1;class Lc{constructor(e,n){this.fieldPath=e,this.kind=n}}class Wl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Wl(0,rn.min())}}function zS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new ke(n+1,0):new ke(n,r));return new rn(i,W.empty(),e)}function $S(t){return new rn(t.readTime,t.key,-1)}class rn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new rn(Z.min(),W.empty(),-1)}static max(){return new rn(Z.max(),W.empty(),-1)}}function Yg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=W.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==qS)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new it,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new hl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Jg(r.target.error);this.V.reject(new hl(e,i))}}static open(e,n,r,i){try{return new dd(n,e.transaction(i,r))}catch(s){throw new hl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(B("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new CD(n)}}class Wn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Wn.S(Ce())===12.2&&We("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return B("SimpleDb","Removing database:",e),Bi(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!jl())return!1;if(Wn.C())return!0;const e=Ce(),n=Wn.S(e),r=0<n&&n<10,i=GS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(B("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new hl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new U(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new hl(e,o))},i.onupgradeneeded=s=>{B("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{B("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=dd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),D.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(B("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function GS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class kD{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Bi(this.B.delete())}}class hl extends U{constructor(e,n){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Si(t){return t.name==="IndexedDbTransactionError"}class CD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(B("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(B("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Bi(r)}add(e){return B("SimpleDb","ADD",this.store.name,e,e),Bi(this.store.add(e))}get(e){return Bi(this.store.get(e)).next(n=>(n===void 0&&(n=null),B("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return B("SimpleDb","DELETE",this.store.name,e),Bi(this.store.delete(e))}count(){return B("SimpleDb","COUNT",this.store.name),Bi(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new D((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new D((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){B("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new D((r,i)=>{n.onerror=s=>{const o=Jg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new D((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new kD(a),c=n(a.primaryKey,a.value,l);if(c instanceof D){const h=c.catch(f=>(l.done(),D.reject(f)));r.push(h)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>D.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Bi(t){return new D((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Jg(r.target.error);n(i)}})}let Qw=!1;function Jg(t){const e=Wn.S(Ce());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Qw||(Qw=!0,setTimeout(()=>{throw r},0)),r}}return t}class bD{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){B("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{B("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Si(n)?B("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Ti(n)}await this.X(6e4)})}}class xD{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return D.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return B("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(B("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=$S(s);Yg(o,r)>0&&(r=o)}),new rn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}$t.oe=-1;function du(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function HS(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Yw(e)),e=ND(t.get(n),e);return Yw(e)}function ND(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Yw(t){return t+""}function Bn(t){const e=t.length;if(X(e>=2),e===2)return X(t.charAt(0)===""&&t.charAt(1)===""),le.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&Q(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:Q()}s=o+2}return new le(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mc(t,e){return[t,Dt(e)]}function KS(t,e,n){return[t,Dt(e),n]}const DD={},OD=["prefixPath","collectionGroup","readTime","documentId"],VD=["prefixPath","collectionGroup","documentId"],LD=["collectionGroup","readTime","prefixPath","documentId"],MD=["canonicalId","targetId"],FD=["targetId","path"],UD=["path","targetId"],BD=["collectionId","parent"],jD=["indexId","uid"],zD=["uid","sequenceNumber"],$D=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],qD=["indexId","uid","orderedDocumentKey"],WD=["userId","collectionPath","documentId"],GD=["userId","collectionPath","largestBatchId"],HD=["userId","collectionGroup","largestBatchId"],QS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],KD=[...QS,"documentOverlays"],YS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],JS=YS,XS=[...JS,"indexConfiguration","indexState","indexEntries"],QD=XS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm extends WS{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function at(t,e){const n=G(t);return Wn.F(n._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ZS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fc(this.root,e,this.comparator,!0)}}class fc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.comparator=e,this.data=new ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Zw(this.data.getIterator())}getIteratorFrom(e){return new Zw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ge)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ge(this.comparator);return n.data=e,n}}class Zw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ms(t){return t.hasNext()?t.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.fields=e,e.sort(Ae.comparator)}static empty(){return new qt([])}unionWith(e){let n=new ge(Ae.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new qt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return No(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YD(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new eR("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const JD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(X(!!t),typeof t=="string"){let e=0;const n=JD.exec(t);if(X(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Me(t.seconds),nanos:Me(t.nanos)}}function Me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hi(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xg(t){const e=t.mapValue.fields.__previous_value__;return fd(e)?Xg(e):e}function Hl(t){const e=wr(t.mapValue.fields.__local_write_time__.timestampValue);return new ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Fc={nullValue:"NULL_VALUE"};function us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fd(t)?4:tR(t)?9007199254740991:10:Q()}function Kn(t,e){if(t===e)return!0;const n=us(t);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hl(t).isEqual(Hl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=wr(i.timestampValue),a=wr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return hi(i.bytesValue).isEqual(hi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Me(i.geoPointValue.latitude)===Me(s.geoPointValue.latitude)&&Me(i.geoPointValue.longitude)===Me(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Me(i.integerValue)===Me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Me(i.doubleValue),a=Me(s.doubleValue);return o===a?Gl(o)===Gl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return No(t.arrayValue.values||[],e.arrayValue.values||[],Kn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Xw(o)!==Xw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Kn(o[l],a[l])))return!1;return!0}(t,e);default:return Q()}}function Kl(t,e){return(t.values||[]).find(n=>Kn(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=us(t),r=us(e);if(n!==r)return te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Me(s.integerValue||s.doubleValue),l=Me(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return eI(t.timestampValue,e.timestampValue);case 4:return eI(Hl(t),Hl(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(s,o){const a=hi(s),l=hi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=te(a[c],l[c]);if(h!==0)return h}return te(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=te(Me(s.latitude),Me(o.latitude));return a!==0?a:te(Me(s.longitude),Me(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=fi(a[c],l[c]);if(h)return h}return te(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Hr.mapValue&&o===Hr.mapValue)return 0;if(s===Hr.mapValue)return 1;if(o===Hr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=te(l[f],h[f]);if(m!==0)return m;const g=fi(a[l[f]],c[h[f]]);if(g!==0)return g}return te(l.length,h.length)}(t.mapValue,e.mapValue);default:throw Q()}}function eI(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=wr(t),r=wr(e),i=te(n.seconds,r.seconds);return i!==0?i:te(n.nanos,r.nanos)}function Do(t){return dm(t)}function dm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return hi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return W.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dm(n.fields[o])}`;return i+"}"}(t.mapValue):Q()}function cs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function fm(t){return!!t&&"integerValue"in t}function Ql(t){return!!t&&"arrayValue"in t}function tI(t){return!!t&&"nullValue"in t}function nI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Uc(t){return!!t&&"mapValue"in t}function dl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=dl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function ZD(t){return"nullValue"in t?Fc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?cs(di.empty(),W.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Q()}function eO(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?cs(di.empty(),W.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Hr:Q()}function rI(t,e){const n=fi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function iI(t,e){const n=fi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Uc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dl(n)}setAll(e){let n=Ae.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=dl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Uc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Uc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(dl(this.value))}}function nR(t){const e=[];return Rs(t.fields,(n,r)=>{const i=new Ae([n]);if(Uc(r)){const s=nR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new qt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ee(e,0,Z.min(),Z.min(),Z.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ee(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new Ee(e,2,n,Z.min(),Z.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new Ee(e,3,n,Z.min(),Z.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ee&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ee(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e,n){this.position=e,this.inclusive=n}}function sI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function oI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Kn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n="asc"){this.field=e,this.dir=n}}function tO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{}class ue extends rR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new nO(e,n,r):n==="array-contains"?new sO(e,r):n==="in"?new uR(e,r):n==="not-in"?new oO(e,r):n==="array-contains-any"?new aO(e,r):new ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new rO(e,r):new iO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fi(n,this.value)):n!==null&&us(this.value)===us(n)&&this.matchesComparison(fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pe extends rR{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new pe(e,n)}matches(e){return Oo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Oo(t){return t.op==="and"}function pm(t){return t.op==="or"}function Zg(t){return iR(t)&&Oo(t)}function iR(t){for(const e of t.filters)if(e instanceof pe)return!1;return!0}function mm(t){if(t instanceof ue)return t.field.canonicalString()+t.op.toString()+Do(t.value);if(Zg(t))return t.filters.map(e=>mm(e)).join(",");{const e=t.filters.map(n=>mm(n)).join(",");return`${t.op}(${e})`}}function sR(t,e){return t instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.field.isEqual(i.field)&&Kn(r.value,i.value)}(t,e):t instanceof pe?function(r,i){return i instanceof pe&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&sR(o,i.filters[a]),!0):!1}(t,e):void Q()}function oR(t,e){const n=t.filters.concat(e);return pe.create(n,t.op)}function aR(t){return t instanceof ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Do(n.value)}`}(t):t instanceof pe?function(n){return n.op.toString()+" {"+n.getFilters().map(aR).join(" ,")+"}"}(t):"Filter"}class nO extends ue{constructor(e,n,r){super(e,n,r),this.key=W.fromName(r.referenceValue)}matches(e){const n=W.comparator(e.key,this.key);return this.matchesComparison(n)}}class rO extends ue{constructor(e,n){super(e,"in",n),this.keys=lR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class iO extends ue{constructor(e,n){super(e,"not-in",n),this.keys=lR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function lR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>W.fromName(r.referenceValue))}class sO extends ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ql(n)&&Kl(n.arrayValue,this.value)}}class uR extends ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Kl(this.value.arrayValue,n)}}class oO extends ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Kl(this.value.arrayValue,n)}}class aO extends ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ql(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Kl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function gm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new lO(t,e,n,r,i,s,o)}function hs(t){const e=G(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>mm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Do(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Do(r)).join(",")),e.ue=n}return e.ue}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!tO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!sR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!oI(t.startAt,e.startAt)&&oI(t.endAt,e.endAt)}function Ah(t){return W.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Ph(t,e){return t.filters.filter(n=>n instanceof ue&&n.field.isEqual(e))}function aI(t,e,n){let r=Fc,i=!0;for(const s of Ph(t,e)){let o=Fc,a=!0;switch(s.op){case"<":case"<=":o=ZD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Fc}rI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];rI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function lI(t,e,n){let r=Hr,i=!0;for(const s of Ph(t,e)){let o=Hr,a=!0;switch(s.op){case">=":case">":o=eO(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Hr}iI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];iI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function cR(t,e,n,r,i,s,o,a){return new Rr(t,e,n,r,i,s,o,a)}function na(t){return new Rr(t)}function uI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function e_(t){return t.collectionGroup!==null}function po(t){const e=G(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ge(Ae.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Yl(s,r))}),n.has(Ae.keyField().canonicalString())||e.ce.push(new Yl(Ae.keyField(),r))}return e.ce}function Ot(t){const e=G(t);return e.le||(e.le=uO(e,po(t))),e.le}function uO(t,e){if(t.limitType==="F")return gm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yl(i.field,s)});const n=t.endAt?new pi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pi(t.startAt.position,t.startAt.inclusive):null;return gm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function _m(t,e){const n=t.filters.concat([e]);return new Rr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kh(t,e,n){return new Rr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pu(t,e){return fu(Ot(t),Ot(e))&&t.limitType===e.limitType}function hR(t){return`${hs(Ot(t))}|lt:${t.limitType}`}function qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>aR(i)).join(", ")}]`),du(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Do(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Do(i)).join(",")),`Target(${r})`}(Ot(t))}; limitType=${t.limitType})`}function mu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of po(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=sI(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,po(r),i)||r.endAt&&!function(o,a,l){const c=sI(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,po(r),i))}(t,e)}function dR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fR(t){return(e,n)=>{let r=!1;for(const i of po(t)){const s=cO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function cO(t,e,n){const r=t.field.isKeyField()?W.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?fi(l,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return ZS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hO=new ve(W.comparator);function Wt(){return hO}const pR=new ve(W.comparator);function Xa(...t){let e=pR;for(const n of t)e=e.insert(n.key,n);return e}function mR(t){let e=pR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jn(){return fl()}function gR(){return fl()}function fl(){return new Ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const dO=new ve(W.comparator),fO=new ge(W.comparator);function ie(...t){let e=fO;for(const n of t)e=e.add(n);return e}const pO=new ge(te);function t_(){return pO}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _R(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function yR(t){return{integerValue:""+t}}function vR(t,e){return HS(e)?yR(e):_R(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(){this._=void 0}}function mO(t,e,n){return t instanceof Vo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fd(s)&&(s=Xg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ds?IR(t,e):t instanceof fs?ER(t,e):function(i,s){const o=wR(i,s),a=cI(o)+cI(i.Pe);return fm(o)&&fm(i.Pe)?yR(a):_R(i.serializer,a)}(t,e)}function gO(t,e,n){return t instanceof ds?IR(t,e):t instanceof fs?ER(t,e):n}function wR(t,e){return t instanceof Lo?function(r){return fm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vo extends pd{}class ds extends pd{constructor(e){super(),this.elements=e}}function IR(t,e){const n=TR(e);for(const r of t.elements)n.some(i=>Kn(i,r))||n.push(r);return{arrayValue:{values:n}}}class fs extends pd{constructor(e){super(),this.elements=e}}function ER(t,e){let n=TR(e);for(const r of t.elements)n=n.filter(i=>!Kn(i,r));return{arrayValue:{values:n}}}class Lo extends pd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function cI(t){return Me(t.integerValue||t.doubleValue)}function TR(t){return Ql(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n){this.field=e,this.transform=n}}function _O(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ds&&i instanceof ds||r instanceof fs&&i instanceof fs?No(r.elements,i.elements,Kn):r instanceof Lo&&i instanceof Lo?Kn(r.Pe,i.Pe):r instanceof Vo&&i instanceof Vo}(t.transform,e.transform)}class yO{constructor(e,n){this.version=e,this.transformResults=n}}class Pe{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Pe}static exists(e){return new Pe(void 0,e)}static updateTime(e){return new Pe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class md{}function SR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ia(t.key,Pe.none()):new ra(t.key,t.data,Pe.none());{const n=t.data,r=dt.empty();let i=new ge(Ae.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ar(t.key,r,new qt(i.toArray()),Pe.none())}}function vO(t,e,n){t instanceof ra?function(i,s,o){const a=i.value.clone(),l=dI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(i,s,o){if(!Bc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=dI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(RR(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pl(t,e,n,r){return t instanceof ra?function(s,o,a,l){if(!Bc(s.precondition,o))return a;const c=s.value.clone(),h=fI(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(s,o,a,l){if(!Bc(s.precondition,o))return a;const c=fI(s.fieldTransforms,l,o),h=o.data;return h.setAll(RR(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Bc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function wO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=wR(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function hI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&No(r,i,(s,o)=>_O(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends md{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ar extends md{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function RR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dI(t,e,n){const r=new Map;X(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,gO(o,a,n[i]))}return r}function fI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mO(s,o,e))}return r}class ia extends md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class n_ extends md{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&vO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=SR(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&No(this.mutations,e.mutations,(n,r)=>hI(n,r))&&No(this.baseMutations,e.baseMutations,(n,r)=>hI(n,r))}}class i_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){X(e.mutations.length===r.length);let i=function(){return dO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new i_(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var He,ce;function AR(t){switch(t){default:return Q();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function PR(t){if(t===void 0)return We("GRPC error has no .code"),O.UNKNOWN;switch(t){case He.OK:return O.OK;case He.CANCELLED:return O.CANCELLED;case He.UNKNOWN:return O.UNKNOWN;case He.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case He.INTERNAL:return O.INTERNAL;case He.UNAVAILABLE:return O.UNAVAILABLE;case He.UNAUTHENTICATED:return O.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case He.NOT_FOUND:return O.NOT_FOUND;case He.ALREADY_EXISTS:return O.ALREADY_EXISTS;case He.PERMISSION_DENIED:return O.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case He.ABORTED:return O.ABORTED;case He.OUT_OF_RANGE:return O.OUT_OF_RANGE;case He.UNIMPLEMENTED:return O.UNIMPLEMENTED;case He.DATA_LOSS:return O.DATA_LOSS;default:return Q()}}(ce=He||(He={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EO=new Zi([4294967295,4294967295],0);function pI(t){const e=kR().encode(t),n=new NS;return n.update(e),new Uint8Array(n.digest())}function mI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zi([n,r],0),new Zi([i,s],0)]}class o_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Za(`Invalid padding: ${n}`);if(r<0)throw new Za(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Za(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Za(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Zi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Zi.fromNumber(r)));return i.compare(EO)===1&&(i=new Zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=pI(e),[r,i]=mI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new o_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=pI(e),[r,i]=mI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,yu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _u(Z.min(),i,new ve(te),Wt(),ie())}}class yu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yu(r,n,ie(),ie(),ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class CR{constructor(e,n){this.targetId=e,this.me=n}}class bR{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class gI{constructor(){this.fe=0,this.ge=yI(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new yu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=yI()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,X(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class TO{constructor(e){this.Le=e,this.Be=new Map,this.ke=Wt(),this.qe=_I(),this.Qe=new ve(te)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Ah(s))if(r===0){const o=new W(s.path);this.Ue(n,o,Ee.newNoDocument(o,Z.min()))}else X(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=hi(r).toUint8Array()}catch(l){if(l instanceof eR)return bn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new o_(o,i,s)}catch(l){return bn(l instanceof Za?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Ah(a.target)){const l=new W(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,Ee.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=ie();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new _u(e,n,this.Qe,this.ke,r);return this.ke=Wt(),this.qe=_I(),this.Qe=new ve(te),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new gI,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ge(te),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function _I(){return new ve(W.comparator)}function yI(){return new ve(W.comparator)}const SO={asc:"ASCENDING",desc:"DESCENDING"},RO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},AO={and:"AND",or:"OR"};class PO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ym(t,e){return t.useProto3Json||du(e)?e:{value:e}}function Mo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function xR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kO(t,e){return Mo(t,e.toTimestamp())}function Ge(t){return X(!!t),Z.fromTimestamp(function(n){const r=wr(n);return new ke(r.seconds,r.nanos)}(t))}function a_(t,e){return vm(t,e).canonicalString()}function vm(t,e){const n=function(i){return new le(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function NR(t){const e=le.fromString(t);return X(zR(e)),e}function Jl(t,e){return a_(t.databaseId,e.path)}function Gn(t,e){const n=NR(e);if(n.get(1)!==t.databaseId.projectId)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new W(VR(n))}function DR(t,e){return a_(t.databaseId,e)}function OR(t){const e=NR(t);return e.length===4?le.emptyPath():VR(e)}function wm(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function VR(t){return X(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function vI(t,e,n){return{name:Jl(t,e),fields:n.value.mapValue.fields}}function LR(t,e,n){const r=Gn(t,e.name),i=Ge(e.updateTime),s=e.createTime?Ge(e.createTime):Z.min(),o=new dt({mapValue:{fields:e.fields}}),a=Ee.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function CO(t,e){return"found"in e?function(r,i){X(!!i.found),i.found.name,i.found.updateTime;const s=Gn(r,i.found.name),o=Ge(i.found.updateTime),a=i.found.createTime?Ge(i.found.createTime):Z.min(),l=new dt({mapValue:{fields:i.found.fields}});return Ee.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){X(!!i.missing),X(!!i.readTime);const s=Gn(r,i.missing),o=Ge(i.readTime);return Ee.newNoDocument(s,o)}(t,e):Q()}function bO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(X(h===void 0||typeof h=="string"),Ze.fromBase64String(h||"")):(X(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ze.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?O.UNKNOWN:PR(c.code);return new U(h,c.message||"")}(o);n=new bR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Gn(t,r.document.name),s=Ge(r.document.updateTime),o=r.document.createTime?Ge(r.document.createTime):Z.min(),a=new dt({mapValue:{fields:r.document.fields}}),l=Ee.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new jc(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Gn(t,r.document),s=r.readTime?Ge(r.readTime):Z.min(),o=Ee.newNoDocument(i,s),a=r.removedTargetIds||[];n=new jc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Gn(t,r.document),s=r.removedTargetIds||[];n=new jc([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new IO(i,s),a=r.targetId;n=new CR(a,o)}}return n}function Xl(t,e){let n;if(e instanceof ra)n={update:vI(t,e.key,e.value)};else if(e instanceof ia)n={delete:Jl(t,e.key)};else if(e instanceof Ar)n={update:vI(t,e.key,e.data),updateMask:LO(e.fieldMask)};else{if(!(e instanceof n_))return Q();n={verify:Jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Vo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ds)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw Q()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:kO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function Im(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Pe.updateTime(Ge(s.updateTime)):s.exists!==void 0?Pe.exists(s.exists):Pe.none()}(e.currentDocument):Pe.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)X(a.setToServerValue==="REQUEST_TIME"),l=new Vo;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new ds(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new fs(h)}else"increment"in a?l=new Lo(o,a.increment):Q();const c=Ae.fromServerFormat(a.fieldPath);return new gu(c,l)}(t,i)):[];if(e.update){e.update.name;const i=Gn(t,e.update.name),s=new dt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new qt(c.map(h=>Ae.fromServerFormat(h)))}(e.updateMask);return new Ar(i,s,o,n,r)}return new ra(i,s,n,r)}if(e.delete){const i=Gn(t,e.delete);return new ia(i,n)}if(e.verify){const i=Gn(t,e.verify);return new n_(i,n)}return Q()}function xO(t,e){return t&&t.length>0?(X(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Ge(i.updateTime):Ge(s);return o.isEqual(Z.min())&&(o=Ge(s)),new yO(o,i.transformResults||[])}(n,e))):[]}function MR(t,e){return{documents:[DR(t,e.path)]}}function FR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=DR(t,i);const s=function(c){if(c.length!==0)return jR(pe.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Ws(m.field),direction:DO(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=ym(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function UR(t){let e=OR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){X(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=BR(f);return m instanceof pe&&Zg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(T){return new Yl(Gs(T.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,du(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,g=f.values||[];return new pi(g,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,g=f.values||[];return new pi(g,m)}(n.endAt)),cR(e,i,o,s,a,"F",l,c)}function NO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function BR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gs(n.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Gs(n.unaryFilter.field);return ue.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gs(n.unaryFilter.field);return ue.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gs(n.unaryFilter.field);return ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return ue.create(Gs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pe.create(n.compositeFilter.filters.map(r=>BR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function DO(t){return SO[t]}function OO(t){return RO[t]}function VO(t){return AO[t]}function Ws(t){return{fieldPath:t.canonicalString()}}function Gs(t){return Ae.fromServerFormat(t.fieldPath)}function jR(t){return t instanceof ue?function(n){if(n.op==="=="){if(nI(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NAN"}};if(tI(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(nI(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NOT_NAN"}};if(tI(n.value))return{unaryFilter:{field:Ws(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ws(n.field),op:OO(n.op),value:n.value}}}(t):t instanceof pe?function(n){const r=n.getFilters().map(i=>jR(i));return r.length===1?r[0]:{compositeFilter:{op:VO(n.op),filters:r}}}(t):Q()}function LO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function zR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.ct=e}}function MO(t,e){let n;if(e.document)n=LR(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=W.fromSegments(e.noDocument.path),i=ms(e.noDocument.readTime);n=Ee.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Q();{const r=W.fromSegments(e.unknownDocument.path),i=ms(e.unknownDocument.version);n=Ee.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new ke(i[0],i[1]);return Z.fromTimestamp(s)}(e.readTime)),n}function wI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ch(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Jl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Mo(s,o.version.toTimestamp()),createTime:Mo(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ps(e.version)};else{if(!e.isUnknownDocument())return Q();r.unknownDocument={path:n.path.toArray(),version:ps(e.version)}}return r}function Ch(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ps(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ms(t){const e=new ke(t.seconds,t.nanoseconds);return Z.fromTimestamp(e)}function ji(t,e){const n=(e.baseMutations||[]).map(s=>Im(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>Im(t.ct,s)),i=ke.fromMillis(e.localWriteTimeMs);return new r_(e.batchId,i,n,r)}function el(t){const e=ms(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ms(t.lastLimboFreeSnapshotVersion):Z.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return X(s.documents.length===1),Ot(na(OR(s.documents[0])))}(t.query):function(s){return Ot(UR(s))}(t.query),new lr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Ze.fromBase64String(t.resumeToken))}function qR(t,e){const n=ps(e.snapshotVersion),r=ps(e.lastLimboFreeSnapshotVersion);let i;i=Ah(e.target)?MR(t.ct,e.target):FR(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:hs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function l_(t){const e=UR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kh(e,e.limit,"L"):e}function Yf(t,e){return new s_(e.largestBatchId,Im(t.ct,e.overlayMutation))}function II(t,e){const n=e.path.lastSegment();return[t,Dt(e.path.popLast()),n]}function EI(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ps(r.readTime),documentKey:Dt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{getBundleMetadata(e,n){return TI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ms(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return TI(e).put(function(i){return{bundleId:i.id,createTime:ps(Ge(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return SI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:l_(s.bundledQuery),readTime:ms(s.readTime)}}(r)})}saveNamedQuery(e,n){return SI(e).put(function(i){return{name:i.name,readTime:ps(Ge(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function TI(t){return at(t,"bundles")}function SI(t){return at(t,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new gd(e,r)}getOverlay(e,n){return Ma(e).get(II(this.userId,n)).next(r=>r?Yf(this.serializer,r):null)}getOverlays(e,n){const r=jn();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new s_(n,o);i.push(this.ht(e,a))}),D.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Dt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ma(e).j("collectionPathOverlayIndex",a))}),D.waitFor(s)}getOverlaysForCollection(e,n,r){const i=jn(),s=Dt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ma(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=Yf(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=jn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ma(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,h)=>{const f=Yf(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return Ma(e).put(function(i,s,o){const[a,l,c]=II(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Xl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Ma(t){return at(t,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Me(e.integerValue));else if("doubleValue"in e){const r=Me(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Gl(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=wr(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(hi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?tR(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):Q()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),W.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}zi.bt=new zi;function UO(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function RI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=UO(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class BO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=RI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=RI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class jO{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class zO{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Fa{constructor(){this.Gt=new BO,this.zt=new jO(this.Gt),this.jt=new zO(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new $i(this.indexId,this.documentKey,this.arrayValue,r)}}function Vr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=AI(t.arrayValue,e.arrayValue),n!==0?n:(n=AI(t.directionalValue,e.directionalValue),n!==0?n:W.comparator(t.documentKey,e.documentKey)))}function AI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{constructor(e){this.Yt=new ge((n,r)=>Ae.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(X(e.collectionGroup===this.collectionId),this.en)return!1;const n=cm(e);if(n!==void 0&&!this.nn(n))return!1;const r=Ui(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new ge(Ae.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Lc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Lc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Lc(r.field,r.dir==="asc"?0:1)));return new Rh(Rh.UNKNOWN_ID,this.collectionId,n,Wl.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){var e,n;if(X(t instanceof ue||t instanceof pe),t instanceof ue){if(t instanceof uR){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ue.create(t.field,"==",s)))||[];return pe.create(i,"or")}return t}const r=t.filters.map(i=>WR(i));return pe.create(r,t.op)}function $O(t){if(t.getFilters().length===0)return[];const e=Sm(WR(t));return X(GR(e)),Em(e)||Tm(e)?[e]:e.getFilters()}function Em(t){return t instanceof ue}function Tm(t){return t instanceof pe&&Zg(t)}function GR(t){return Em(t)||Tm(t)||function(n){if(n instanceof pe&&pm(n)){for(const r of n.getFilters())if(!Em(r)&&!Tm(r))return!1;return!0}return!1}(t)}function Sm(t){if(X(t instanceof ue||t instanceof pe),t instanceof ue)return t;if(t.filters.length===1)return Sm(t.filters[0]);const e=t.filters.map(r=>Sm(r));let n=pe.create(e,t.op);return n=bh(n),GR(n)?n:(X(n instanceof pe),X(Oo(n)),X(n.filters.length>1),n.filters.reduce((r,i)=>u_(r,i)))}function u_(t,e){let n;return X(t instanceof ue||t instanceof pe),X(e instanceof ue||e instanceof pe),n=t instanceof ue?e instanceof ue?function(i,s){return pe.create([i,s],"and")}(t,e):kI(t,e):e instanceof ue?kI(e,t):function(i,s){if(X(i.filters.length>0&&s.filters.length>0),Oo(i)&&Oo(s))return oR(i,s.getFilters());const o=pm(i)?i:s,a=pm(i)?s:i,l=o.filters.map(c=>u_(c,a));return pe.create(l,"or")}(t,e),bh(n)}function kI(t,e){if(Oo(e))return oR(e,t.getFilters());{const n=e.filters.map(r=>u_(t,r));return pe.create(n,"or")}}function bh(t){if(X(t instanceof ue||t instanceof pe),t instanceof ue)return t;const e=t.getFilters();if(e.length===1)return bh(e[0]);if(iR(t))return t;const n=e.map(i=>bh(i)),r=[];return n.forEach(i=>{i instanceof ue?r.push(i):i instanceof pe&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:pe.create(r,t.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(){this._n=new c_}addToCollectionParentIndex(e,n){return this._n.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(rn.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(rn.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class c_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ge(le.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ge(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=new Uint8Array(0);class WO{constructor(e,n){this.databaseId=n,this.an=new c_,this.un=new Ri(r=>hs(r),(r,i)=>fu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Dt(i)};return CI(e).put(s)}return D.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[jS(n),""],!1,!0);return CI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Bn(o.parent))}return r})}addFieldIndex(e,n){const r=Ua(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Us(e);return s.next(a=>{o.put(EI(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ua(e),i=Us(e),s=Fs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Ua(e),r=Fs(e),i=Us(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return D.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new PI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Fs(e);let i=!0;const s=new Map;return D.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=ie();const a=[];return D.forEach(s,(l,c)=>{B("IndexedDbIndexManager",`Using index ${function(w){return`id=${w.indexId}|cg=${w.collectionGroup}|f=${w.fields.map(C=>`${C.fieldPath}:${C.kind}`).join(",")}`}(l)} to execute ${hs(n)}`);const h=function(w,C){const L=cm(C);if(L===void 0)return null;for(const M of Ph(w,L.fieldPath))switch(M.op){case"array-contains-any":return M.value.arrayValue.values||[];case"array-contains":return[M.value]}return null}(c,l),f=function(w,C){const L=new Map;for(const M of Ui(C))for(const E of Ph(w,M.fieldPath))switch(E.op){case"==":case"in":L.set(M.fieldPath.canonicalString(),E.value);break;case"not-in":case"!=":return L.set(M.fieldPath.canonicalString(),E.value),Array.from(L.values())}return null}(c,l),m=function(w,C){const L=[];let M=!0;for(const E of Ui(C)){const y=E.kind===0?aI(w,E.fieldPath,w.startAt):lI(w,E.fieldPath,w.startAt);L.push(y.value),M&&(M=y.inclusive)}return new pi(L,M)}(c,l),g=function(w,C){const L=[];let M=!0;for(const E of Ui(C)){const y=E.kind===0?lI(w,E.fieldPath,w.endAt):aI(w,E.fieldPath,w.endAt);L.push(y.value),M&&(M=y.inclusive)}return new pi(L,M)}(c,l),T=this.hn(l,c,m),R=this.hn(l,c,g),k=this.Pn(l,c,f),I=this.In(l.indexId,h,T,m.inclusive,R,g.inclusive,k);return D.forEach(I,v=>r.G(v,n.limit).next(w=>{w.forEach(C=>{const L=W.fromSegments(C.documentKey);o.has(L)||(o=o.add(L),a.push(L))})}))}).next(()=>a)}return D.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=$O(pe.create(e.filters,"and")).map(r=>gm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let f=0;f<l;++f){const m=n?this.Tn(n[f/c]):pc,g=this.En(e,m,r[f%c],i),T=this.dn(e,m,s[f%c],o),R=a.map(k=>this.En(e,m,k,!0));h.push(...this.createRange(g,T,R))}return h}En(e,n,r,i){const s=new $i(e,W.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new $i(e,W.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new PI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return D.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new ge(Ae.comparator),h=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:c=c.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Fa;for(const i of Ui(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);zi.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Fa;return zi.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Fa;return zi.bt.Pt(cs(this.databaseId,n),r.Ht(function(s){const o=Ui(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Fa);let s=0;for(const o of Ui(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&Ql(a))i=this.mn(i,o,a);else{const c=l.Ht(o.kind);zi.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Fa;l.seed(a.Wt()),zi.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof ue&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ua(e),i=Us(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return D.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,f){const m=f?new Wl(f.sequenceNumber,new rn(ms(f.readTime),new W(Bn(f.documentKey)),f.largestBatchId)):Wl.empty(),g=h.fields.map(([T,R])=>new Lc(Ae.fromServerFormat(T),R));return new Rh(h.indexId,h.collectionGroup,g,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:te(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ua(e),s=Us(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>D.forEach(a,l=>s.put(EI(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return D.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?D.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),D.forEach(a,l=>this.pn(e,i,l).next(c=>{const h=this.yn(s,l);return c.isEqual(h)?D.resolve():this.wn(e,s,l,c,h)}))))})}Sn(e,n,r,i){return Fs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Fs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Fs(e);let s=new ge(Vr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new $i(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new ge(Vr);const i=this.An(n,e);if(i==null)return r;const s=cm(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ql(o))for(const a of o.arrayValue.values||[])r=r.add(new $i(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new $i(n.indexId,e.key,pc,i));return r}wn(e,n,r,i,s){B("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,h,f,m){const g=l.getIterator(),T=c.getIterator();let R=Ms(g),k=Ms(T);for(;R||k;){let I=!1,v=!1;if(R&&k){const w=h(R,k);w<0?v=!0:w>0&&(I=!0)}else R!=null?v=!0:I=!0;I?(f(k),k=Ms(T)):v?(m(R),R=Ms(g)):(R=Ms(g),k=Ms(T))}}(i,s,Vr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),D.waitFor(o)}gn(e){let n=1;return Us(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Vr(o,a)).filter((o,a,l)=>!a||Vr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Vr(o,e),l=Vr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,pc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,pc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Vr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(bI)}getMinOffset(e,n){return D.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||Q())).next(bI)}}function CI(t){return at(t,"collectionParents")}function Fs(t){return at(t,"indexEntries")}function Ua(t){return at(t,"indexConfiguration")}function Us(t){return at(t,"indexState")}function bI(t){X(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Yg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new rn(e.readTime,e.documentKey,n)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ut{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(h,f,m)=>(a++,m.delete()));s.push(l.next(()=>{X(a===1)}));const c=[];for(const h of n.mutations){const f=KS(e,h.key.path,n.batchId);s.push(i.delete(f)),c.push(h.key)}return D.waitFor(s).next(()=>c)}function xh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Q();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(41943040,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);class _d{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){X(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new _d(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Lr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Hs(e),o=Lr(e);return o.add({}).next(a=>{X(typeof a=="number");const l=new r_(a,n,r,i),c=function(g,T,R){const k=R.baseMutations.map(v=>Xl(g.ct,v)),I=R.mutations.map(v=>Xl(g.ct,v));return{userId:T,batchId:R.batchId,localWriteTimeMs:R.localWriteTime.toMillis(),baseMutations:k,mutations:I}}(this.serializer,this.userId,l),h=[];let f=new ge((m,g)=>te(m.canonicalString(),g.canonicalString()));for(const m of i){const g=KS(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),h.push(o.put(c)),h.push(s.put(g,DD))}return f.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),D.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return Lr(e).get(n).next(r=>r?(X(r.userId===this.userId),ji(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?D.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Lr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(X(a.batchId>=r),s=ji(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Lr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Lr(e).U("userMutationsIndex",n).next(r=>r.map(i=>ji(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Mc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Hs(e).J({range:i},(o,a,l)=>{const[c,h,f]=o,m=Bn(h);if(c===this.userId&&n.path.isEqual(m))return Lr(e).get(f).next(g=>{if(!g)throw Q();X(g.userId===this.userId),s.push(ji(this.serializer,g))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(te);const i=[];return n.forEach(s=>{const o=Mc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Hs(e).J({range:a},(c,h,f)=>{const[m,g,T]=c,R=Bn(g);m===this.userId&&s.path.isEqual(R)?r=r.add(T):f.done()});i.push(l)}),D.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Mc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ge(te);return Hs(e).J({range:o},(l,c,h)=>{const[f,m,g]=l,T=Bn(m);f===this.userId&&r.isPrefixOf(T)?T.length===i&&(a=a.add(g)):h.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Lr(e).get(s).next(o=>{if(o===null)throw Q();X(o.userId===this.userId),r.push(ji(this.serializer,o))}))}),D.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return HR(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),D.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return D.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Hs(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Bn(s[1]);i.push(l)}else a.done()}).next(()=>{X(i.length===0)})})}containsKey(e,n){return KR(e,this.userId,n)}xn(e){return QR(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function KR(t,e,n){const r=Mc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Hs(t).J({range:s,H:!0},(a,l,c)=>{const[h,f,m]=a;h===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Lr(t){return at(t,"mutations")}function Hs(t){return at(t,"documentMutations")}function QR(t){return at(t,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new gs(0)}static Ln(){return new gs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new gs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>Z.fromTimestamp(new ke(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>Bs(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(X(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return Bs(e).J((o,a)=>{const l=el(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>D.waitFor(s)).next(()=>i)}forEachTarget(e,n){return Bs(e).J((r,i)=>{const s=el(i);n(s)})}Bn(e){return NI(e).get("targetGlobalKey").next(n=>(X(n!==null),n))}kn(e,n){return NI(e).put("targetGlobalKey",n)}qn(e,n){return Bs(e).put(qR(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=hs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return Bs(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=el(a);fu(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=zr(e);return n.forEach(o=>{const a=Dt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),D.waitFor(i)}removeMatchingKeys(e,n,r){const i=zr(e);return D.forEach(n,s=>{const o=Dt(s.path);return D.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=zr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=zr(e);let s=ie();return i.J({range:r,H:!0},(o,a,l)=>{const c=Bn(o[1]),h=new W(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=Dt(n.path),i=IDBKeyRange.bound([r],[jS(r)],!1,!0);let s=0;return zr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return Bs(e).get(n).next(r=>r?el(r):null)}}function Bs(t){return at(t,"targets")}function NI(t){return at(t,"targetGlobal")}function zr(t){return at(t,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI([t,e],[n,r]){const i=te(t,n);return i===0?te(e,r):i}class HO{constructor(e){this.Kn=e,this.buffer=new ge(DI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();DI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class KO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){B("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Si(n)?B("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ti(n)}await this.zn(3e5)})}}class QO{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return D.resolve($t.oe);const r=new HO(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(xI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),xI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),$s()<=oe.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function YO(t,e){return new QO(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e,n){this.db=e,this.garbageCollector=YO(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return mc(e,r)}removeReference(e,n,r){return mc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return mc(e,n)}er(e,n){return function(i,s){let o=!1;return QR(i).Y(a=>KR(i,a,s).next(l=>(l&&(o=!0),D.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,Z.min()),zr(e).delete(function(f){return[0,Dt(f.path)]}(o))))});i.push(l)}}).next(()=>D.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return mc(e,n)}Xn(e,n){const r=zr(e);let i,s=$t.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==$t.oe&&n(new W(Bn(i)),s),s=c,i=l):s=$t.oe}).next(()=>{s!==$t.oe&&n(new W(Bn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function mc(t,e){return zr(t).put(function(r,i){return{targetId:0,path:Dt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.changes=new Ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ee.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Vi(e).put(r)}removeEntry(e,n,r){return Vi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Ch(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=Ee.newInvalidDocument(n);return Vi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ba(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:Ee.newInvalidDocument(n)};return Vi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Ba(n))},(i,s)=>{r={document:this.nr(n,s),size:xh(s)}}).next(()=>r)}getEntries(e,n){let r=Wt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=Wt(),i=new ve(W.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,xh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return D.resolve();let i=new ge(LI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(Ba(i.first()),Ba(i.last())),o=i.getIterator();let a=o.getNext();return Vi(e).J({index:"documentKeyIndex",range:s},(l,c,h)=>{const f=W.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&LI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(Ba(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Ch(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Vi(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=Wt();for(const f of c){const m=this.nr(W.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(mu(n,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=Wt();const o=VI(n,r),a=VI(n,rn.max());return Vi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,h)=>{const f=this.nr(W.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new ZO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return OI(e).get("remoteDocumentGlobalKey").next(n=>(X(!!n),n))}tr(e,n){return OI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=MO(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(Z.min())))return r}return Ee.newInvalidDocument(e)}}function JR(t){return new XO(t)}class ZO extends YR{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ri(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ge((s,o)=>te(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=wI(this.ar.serializer,o);i=i.add(s.path.popLast());const c=xh(l);r+=c-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=wI(this.ar.serializer,o.convertToNoDocument(Z.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),D.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function OI(t){return at(t,"remoteDocumentGlobal")}function Vi(t){return at(t,"remoteDocumentsV14")}function Ba(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function VI(t,e){const n=e.documentKey.path.toArray();return[t,Ch(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function LI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=te(n[s],r[s]),i)return i;return i=te(n.length,r.length),i||(i=te(n[n.length-2],r[r.length-2]),i||te(n[n.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&pl(r.mutation,i,qt.empty(),ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const i=jn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Wt();const o=fl(),a=function(){return fl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ar)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),pl(h.mutation,c,h.mutation.getFieldMask(),ke.now())):o.set(c.key,qt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new eV(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fl();let i=new ve((o,a)=>o-a),s=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||qt.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||ie()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=gR();h.forEach(m=>{if(!s.has(m)){const g=SR(n.get(m),r.get(m));g!==null&&f.set(m,g),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return W.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):e_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(jn());let a=-1,l=s;return o.next(c=>D.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?D.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,ie())).next(h=>({batchId:a,changes:mR(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new W(n)).next(r=>{let i=Xa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xa();return this.indexManager.getCollectionParents(e,s).next(a=>D.forEach(a,l=>{const c=function(f,m){return new Rr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,Ee.newInvalidDocument(h)))});let a=Xa();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&pl(h.mutation,c,qt.empty(),ke.now()),mu(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return D.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Ge(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:l_(i.bundledQuery),readTime:Ge(i.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(){this.overlays=new ve(W.comparator),this.hr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jn();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=jn(),s=n.length+1,o=new W(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ve((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=jn(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=jn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new s_(n,r));let s=this.hr.get(n);s===void 0&&(s=ie(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.Pr=new ge(et.Ir),this.Tr=new ge(et.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new et(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new W(new le([])),r=new et(n,e),i=new et(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new W(new le([])),r=new et(n,e),i=new et(n,e+1);let s=ie();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new et(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return W.comparator(e.key,n.key)||te(e.pr,n.pr)}static Er(e,n){return te(e.pr,n.pr)||W.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ge(et.Ir)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new r_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ge(te);return n.forEach(i=>{const s=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),D.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const o=new et(new W(s),0);let a=new ge(te);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),D.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){X(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return D.forEach(n.mutations,i=>{const s=new et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new et(n,0),i=this.wr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.vr=e,this.docs=function(){return new ve(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():Ee.newInvalidDocument(n))}getEntries(e,n){let r=Wt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ee.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Wt();const o=n.path,a=new W(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Yg($S(h),r)<=0||(i.has(h.key)||mu(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q()}Fr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new sV(this)}getSize(e){return D.resolve(this.size)}}class sV extends YR{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e){this.persistence=e,this.Mr=new Ri(n=>hs(n),fu),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Or=0,this.Nr=new h_,this.targetCount=0,this.Lr=gs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),D.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.qn(n),D.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e,n){this.Br={},this.overlays={},this.kr=new $t(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new oV(this),this.indexManager=new qO,this.remoteDocumentCache=function(i){return new iV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new $R(n),this.$r=new tV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new nV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new rV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new aV(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return D.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class aV extends WS{constructor(e){super(),this.currentSequenceNumber=e}}class yd{constructor(e){this.persistence=e,this.zr=new h_,this.jr=null}static Hr(e){return new yd(e)}get Jr(){if(this.jr)return this.jr;throw Q()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Jr,r=>{const i=W.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return D.or([()=>D.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lV{constructor(e){this.serializer=e}O(e,n,r,i){const s=new dd("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Jw,{unique:!0}),l.createObjectStore("documentMutations")}(e),MI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=D.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),MI(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Z.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Jw,{unique:!0});const f=c.store("mutations"),m=h.map(g=>f.put(g));return D.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:WD});c.createIndex("collectionPathOverlayIndex",GD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",HD,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:OD});c.createIndex("documentKeyIndex",VD),c.createIndex("collectionGroupIndex",LD)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:jD}).createIndex("sequenceNumberIndex",zD,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:$D}).createIndex("documentKeyIndex",qD,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=xh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>D.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>D.forEach(a,l=>{X(l.userId===s.userId);const c=ji(this.serializer,l);return HR(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new le(o),c=function(f){return[0,Dt(f)]}(l);s.push(n.get(c).next(h=>h?D.resolve():(f=>n.put({targetId:0,path:Dt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>D.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:BD});const r=n.store("collectionParents"),i=new c_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Dt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new le(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const h=Bn(a);return s(h.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=el(i),o=qR(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new W(le.fromString(f.document.name).popFirst(5)):f.noDocument?W.fromSegments(f.noDocument.path):f.unknownDocument?W.fromSegments(f.unknownDocument.path):Q()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>D.waitFor(i))}si(e,n){const r=n.store("mutations"),i=JR(this.serializer),s=new ZR(yd.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let h=(c=a.get(l.userId))!==null&&c!==void 0?c:ie();ji(this.serializer,l).keys().forEach(f=>h=h.add(f)),a.set(l.userId,h)}),D.forEach(a,(l,c)=>{const h=new nt(c),f=gd.lt(this.serializer,h),m=s.getIndexManager(h),g=_d.lt(h,this.serializer,m,s.referenceDelegate);return new XR(i,g,f,m).recalculateAndSaveOverlaysForDocumentKeys(new hm(n,$t.oe),l).next()})})}}function MI(t){t.createObjectStore("targetDocuments",{keyPath:FD}).createIndex("documentTargetsIndex",UD,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",MD,{unique:!0}),t.createObjectStore("targetGlobal")}const Jf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class d_{constructor(e,n,r,i,s,o,a,l,c,h,f=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=h,this.ui=f,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=m=>Promise.resolve(),!d_.D())throw new U(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new JO(this,i),this.Ti=n+"main",this.serializer=new $R(l),this.Ei=new Wn(this.Ti,this.ui,new lV(this.serializer)),this.Qr=new GO(this.referenceDelegate,this.serializer),this.remoteDocumentCache=JR(this.serializer),this.$r=new FO,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,h===!1&&We("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new U(O.FAILED_PRECONDITION,Jf);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new $t(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>gc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Si(e))return B("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return B("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return ja(e).get("owner").next(n=>D.resolve(this.Si(n)))}bi(e){return gc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=at(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return D.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?D.resolve(!0):ja(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new U(O.FAILED_PRECONDITION,Jf);return!1}}return!(!this.networkEnabled||!this.inForeground)||gc(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&B("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new hm(e,$t.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>gc(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return _d.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new WO(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return gd.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){B("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===16?QD:l===15?XS:l===14?JS:l===13?YS:l===12?KD:l===11?QS:void Q()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new hm(a,this.kr?this.kr.next():$t.oe),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw We(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new U(O.FAILED_PRECONDITION,qS);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return ja(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new U(O.FAILED_PRECONDITION,Jf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return ja(e).put("owner",n)}static D(){return Wn.D()}yi(e){const n=ja(e);return n.get("owner").next(r=>this.Si(r)?(B("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):D.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(We(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;vS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return B("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return We("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){We("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function ja(t){return at(t,"owner")}function gc(t){return at(t,"clientMetadata")}function f_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ie(),i=ie();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new p_(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return vS()?8:GS(Ce())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new uV;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?($s()<=oe.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),D.resolve()):($s()<=oe.DEBUG&&B("QueryEngine","Query:",qs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?($s()<=oe.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ot(n))):D.resolve())}ji(e,n){if(uI(n))return D.resolve(null);let r=Ot(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kh(n,null,"F"),r=Ot(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=ie(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,kh(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return uI(n)||i.isEqual(Z.min())?D.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?D.resolve(null):($s()<=oe.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qs(n)),this.es(e,o,n,zS(i,-1)).next(a=>a))})}Zi(e,n){let r=new ge(fR(e));return n.forEach((i,s)=>{mu(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return $s()<=oe.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",qs(n)),this.zi.getDocumentsMatchingQuery(e,n,rn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ve(te),this.rs=new Ri(s=>hs(s),fu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new XR(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function tA(t,e,n,r){return new cV(t,e,n,r)}async function nA(t,e){const n=G(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=ie();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function hV(t,e){const n=G(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,m=f.keys();let g=D.resolve();return m.forEach(T=>{g=g.next(()=>h.getEntry(l,T)).next(R=>{const k=c.docVersions.get(T);X(k!==null),R.version.compareTo(k)<0&&(f.applyToRemoteDocument(R,c),R.isValidDocument()&&(R.setReadTime(c.commitVersion),h.addEntry(R)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ie();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function rA(t){const e=G(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function dV(t,e){const n=G(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,f)));let g=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(Ze.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,r)),i=i.insert(f,g),function(R,k,I){return R.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,g,h)&&a.push(n.Qr.updateTargetData(s,g))});let l=Wt(),c=ie();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(iA(s,o,e.documentUpdates).next(h=>{l=h.cs,c=h.ls})),!r.isEqual(Z.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function iA(t,e,n){let r=ie(),i=ie();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Wt();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function fV(t,e){const n=G(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Fo(t,e){const n=G(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Uo(t,e,n){const r=G(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Si(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Nh(t,e,n){const r=G(t);let i=Z.min(),s=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=G(l),m=f.rs.get(h);return m!==void 0?D.resolve(f.ns.get(m)):f.Qr.getTargetData(c,h)}(r,o,Ot(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:ie())).next(a=>(aA(r,dR(e),a),{documents:a,hs:s})))}function sA(t,e){const n=G(t),r=G(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function oA(t,e){const n=G(t),r=n.ss.get(e)||Z.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,zS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(aA(n,e,i),i))}function aA(t,e,n){let r=t.ss.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function pV(t,e,n,r){const i=G(t);let s=ie(),o=Wt();for(const c of n){const h=e.Ps(c.metadata.name);c.document&&(s=s.add(h));const f=e.Is(c);f.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(h,f)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await Fo(i,function(h){return Ot(na(le.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>iA(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Qr.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Qr.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.cs,h.ls)).next(()=>h.cs)))}async function mV(t,e,n=ie()){const r=await Fo(t,Ot(l_(e.bundledQuery))),i=G(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Ge(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Ze.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function FI(t,e){return`firestore_clients_${t}_${e}`}function UI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Xf(t,e){return`firestore_targets_${t}_${e}`}class Dh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new U(i.error.code,i.error.message))),o?new Dh(e,n,i.state,s):(We("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ml{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new U(r.error.code,r.error.message))),s?new ml(e,r.state,i):(We("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Oh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=t_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=HS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Oh(e,s):(We("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class m_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new m_(n.clientId,n.onlineState):(We("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Rm{constructor(){this.activeTargetIds=t_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zf{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new ve(te),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=FI(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Rm),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(FI(this.persistenceKey,r));if(i){const s=Oh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Xf(this.persistenceKey,e));if(r){const i=ml.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Xf(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return B("SharedClientState","READ",e,n),n}setItem(e,n){B("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){B("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(B("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void We("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=$t.oe;if(s!=null)try{const a=JSON.parse(s);X(typeof a=="number"),o=a}catch(a){We("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==$t.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new Dh(this.currentUser,e,n,r),s=UI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=UI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Xf(this.persistenceKey,e),s=new ml(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return Oh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Dh.Es(new nt(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return ml.Es(i,n)}xs(e){return m_.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);B("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=t_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class lA{constructor(){this.no=new Rm,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Rm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gV{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _c=null;function ep(){return _c===null?_c=function(){return 268435456+Math.round(2147483648*Math.random())}():_c++,"0x"+_c.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _V={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class vV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=ep(),l=this.vo(n,r.toUriEncodedString());B("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(h=>(B("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw bn("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ta}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=_V[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=ep();return new Promise((o,a)=>{const l=new DS;l.setWithCredentials(!0),l.listenOnce(VS.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Vc.NO_ERROR:const h=l.getResponseJson();B(wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Vc.TIMEOUT:B(wt,`RPC '${e}' ${s} timed out`),a(new U(O.DEADLINE_EXCEEDED,"Request time out"));break;case Vc.HTTP_ERROR:const f=l.getStatus();if(B(wt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const g=m==null?void 0:m.error;if(g&&g.status&&g.message){const T=function(k){const I=k.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(I)>=0?I:O.UNKNOWN}(g.status);a(new U(T,g.message))}else a(new U(O.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(O.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{B(wt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);B(wt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=ep(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=FS(),a=MS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new OS({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");B(wt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,g=!1;const T=new yV({lo:k=>{g?B(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(m||(B(wt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),B(wt,`RPC '${e}' stream ${i} sending:`,k),f.send(k))},ho:()=>f.close()}),R=(k,I,v)=>{k.listen(I,w=>{try{v(w)}catch(C){setTimeout(()=>{throw C},0)}})};return R(f,Ja.EventType.OPEN,()=>{g||(B(wt,`RPC '${e}' stream ${i} transport opened.`),T.mo())}),R(f,Ja.EventType.CLOSE,()=>{g||(g=!0,B(wt,`RPC '${e}' stream ${i} transport closed`),T.po())}),R(f,Ja.EventType.ERROR,k=>{g||(g=!0,bn(wt,`RPC '${e}' stream ${i} transport errored:`,k),T.po(new U(O.UNAVAILABLE,"The operation could not be completed")))}),R(f,Ja.EventType.MESSAGE,k=>{var I;if(!g){const v=k.data[0];X(!!v);const w=v,C=w.error||((I=w[0])===null||I===void 0?void 0:I.error);if(C){B(wt,`RPC '${e}' stream ${i} received error:`,C);const L=C.status;let M=function(S){const A=He[S];if(A!==void 0)return PR(A)}(L),E=C.message;M===void 0&&(M=O.INTERNAL,E="Unknown error status: "+L+" with message "+C.message),g=!0,T.po(new U(M,E)),f.close()}else B(wt,`RPC '${e}' stream ${i} received:`,v),T.yo(v)}}),R(a,LS.STAT_EVENT,k=>{k.stat===um.PROXY?B(wt,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===um.NOPROXY&&B(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{T.fo()},0),T}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(){return typeof window<"u"?window:null}function zc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(t){return new PO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new g_(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new U(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class wV extends cA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=bO(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Ge(o.readTime):Z.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=wm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Ah(l)?{documents:MR(s,l)}:{query:FR(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=xR(s,o.resumeToken);const c=ym(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=Mo(s,o.snapshotVersion.toTimestamp());const c=ym(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=NO(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=wm(this.serializer),n.removeTarget=e,this.i_(n)}}class IV extends cA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(X(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=xO(e.writeResults,e.commitTime),r=Ge(e.commitTime);return this.listener.A_(r,n)}return X(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=wm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Xl(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,vm(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(O.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,vm(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(O.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class TV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(We(n),this.y_=!1):B("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ai(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=G(l);c.M_.add(4),await sa(c),c.N_.set("Unknown"),c.M_.delete(4),await wu(c)}(this))})}),this.N_=new TV(r,i)}}async function wu(t){if(Ai(t))for(const e of t.x_)await e(!0)}async function sa(t){for(const e of t.x_)await e(!1)}function vd(t,e){const n=G(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),v_(n)?y_(n):aa(n).Xo()&&__(n,e))}function Bo(t,e){const n=G(t),r=aa(n);n.F_.delete(e),r.Xo()&&hA(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ai(n)&&n.N_.set("Unknown"))}function __(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}aa(t).P_(e)}function hA(t,e){t.L_.xe(e),aa(t).I_(e)}function y_(t){t.L_=new TO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),aa(t).start(),t.N_.w_()}function v_(t){return Ai(t)&&!aa(t).Zo()&&t.F_.size>0}function Ai(t){return G(t).M_.size===0}function dA(t){t.L_=void 0}async function RV(t){t.N_.set("Online")}async function AV(t){t.F_.forEach((e,n)=>{__(t,e)})}async function PV(t,e){dA(t),v_(t)?(t.N_.D_(e),y_(t)):t.N_.set("Unknown")}async function kV(t,e,n){if(t.N_.set("Online"),e instanceof bR&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vh(t,r)}else if(e instanceof jc?t.L_.Ke(e):e instanceof CR?t.L_.He(e):t.L_.We(e),!n.isEqual(Z.min()))try{const r=await rA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.F_.get(l);if(!h)return;s.F_.set(l,h.withResumeToken(Ze.EMPTY_BYTE_STRING,h.snapshotVersion)),hA(s,l);const f=new lr(h.target,l,c,h.sequenceNumber);__(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Vh(t,r)}}async function Vh(t,e,n){if(!Si(e))throw e;t.M_.add(1),await sa(t),t.N_.set("Offline"),n||(n=()=>rA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await wu(t)})}function fA(t,e){return e().catch(n=>Vh(t,n,e))}async function oa(t){const e=G(t),n=mi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;CV(e);)try{const i=await fV(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,bV(e,i)}catch(i){await Vh(e,i)}pA(e)&&mA(e)}function CV(t){return Ai(t)&&t.v_.length<10}function bV(t,e){t.v_.push(e);const n=mi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function pA(t){return Ai(t)&&!mi(t).Zo()&&t.v_.length>0}function mA(t){mi(t).start()}async function xV(t){mi(t).V_()}async function NV(t){const e=mi(t);for(const n of t.v_)e.d_(n.mutations)}async function DV(t,e,n){const r=t.v_.shift(),i=i_.from(r,e,n);await fA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await oa(t)}async function OV(t,e){e&&mi(t).E_&&await async function(r,i){if(function(o){return AR(o)&&o!==O.ABORTED}(i.code)){const s=r.v_.shift();mi(r).t_(),await fA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await oa(r)}}(t,e),pA(t)&&mA(t)}async function jI(t,e){const n=G(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Ai(n);n.M_.add(3),await sa(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await wu(n)}async function Am(t,e){const n=G(t);e?(n.M_.delete(2),await wu(n)):e||(n.M_.add(2),await sa(n),n.N_.set("Unknown"))}function aa(t){return t.B_||(t.B_=function(n,r,i){const s=G(n);return s.f_(),new wV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:RV.bind(null,t),To:AV.bind(null,t),Ao:PV.bind(null,t),h_:kV.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),v_(t)?y_(t):t.N_.set("Unknown")):(await t.B_.stop(),dA(t))})),t.B_}function mi(t){return t.k_||(t.k_=function(n,r,i){const s=G(n);return s.f_(),new IV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:xV.bind(null,t),Ao:OV.bind(null,t),R_:NV.bind(null,t),A_:DV.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await oa(t)):(await t.k_.stop(),t.v_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new w_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function la(t,e){if(We("AsyncQueue",`${e}: ${t}`),Si(t))return new U(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||W.comparator(n.key,r.key):(n,r)=>W.comparator(n.key,r.key),this.keyedMap=Xa(),this.sortedSet=new ve(this.comparator)}static emptySet(e){return new mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new mo;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.q_=new ve(W.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Q():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class jo{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new jo(e,n,mo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VV{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class LV{constructor(){this.queries=new Ri(e=>hR(e),pu),this.onlineState="Unknown",this.z_=new Set}}async function I_(t,e){const n=G(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new VV,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=la(o,`Initialization of query '${qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&T_(n)}async function E_(t,e){const n=G(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MV(t,e){const n=G(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&T_(n)}function FV(t,e,n){const r=G(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function T_(t){t.z_.forEach(e=>{e.next()})}var Pm,$I;($I=Pm||(Pm={})).J_="default",$I.Cache="cache";class S_{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new jo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=jo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Pm.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UV{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e){this.serializer=e}Ps(e){return Gn(this.serializer,e)}Is(e){return e.metadata.exists?LR(this.serializer,e.document,!1):Ee.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Ge(e)}}class BV{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=gA(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=le.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new qI(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ie()).add(s);n.set(o,a)}}return n}async complete(){const e=await pV(this.localStore,new qI(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await mV(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function gA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.key=e}}class yA{constructor(e){this.key=e}}class vA{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=ie(),this.mutatedKeys=ie(),this.Ia=fR(e),this.Ta=new mo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new zI,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),g=mu(this.query,f)?f:null,T=!!m&&this.mutatedKeys.has(m.key),R=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let k=!1;m&&g?m.data.isEqual(g.data)?T!==R&&(r.track({type:3,doc:g}),k=!0):this.Ra(m,g)||(r.track({type:2,doc:g}),k=!0,(l&&this.Ia(g,l)>0||c&&this.Ia(g,c)<0)&&(a=!0)):!m&&g?(r.track({type:0,doc:g}),k=!0):m&&!g&&(r.track({type:1,doc:m}),k=!0,(l||c)&&(a=!0)),k&&(g?(o=o.add(g),s=R?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,f)=>function(g,T){const R=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return R(g)-R(T)}(h.type,f.type)||this.Ia(h.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new jo(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new zI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=ie(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new yA(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new _A(r))}),n}pa(e){this.la=e.hs,this.Pa=ie();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return jo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class jV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class zV{constructor(e){this.key=e,this.wa=!1}}class $V{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ri(a=>hR(a),pu),this.Da=new Map,this.Ca=new Set,this.va=new ve(W.comparator),this.Fa=new Map,this.Ma=new h_,this.xa={},this.Oa=new Map,this.Na=gs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function qV(t,e,n=!0){const r=wd(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await wA(r,e,n,!0),i}async function WV(t,e){const n=wd(t);await wA(n,e,!0,!1)}async function wA(t,e,n,r){const i=await Fo(t.localStore,Ot(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await R_(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&vd(t.remoteStore,i),a}async function R_(t,e,n,r,i){t.Ba=(f,m,g)=>async function(R,k,I,v){let w=k.view.da(I);w.Xi&&(w=await Nh(R.localStore,k.query,!1).then(({documents:E})=>k.view.da(E,w)));const C=v&&v.targetChanges.get(k.targetId),L=v&&v.targetMismatches.get(k.targetId)!=null,M=k.view.applyChanges(w,R.isPrimaryClient,C,L);return km(R,k.targetId,M.fa),M.snapshot}(t,f,m,g);const s=await Nh(t.localStore,e,!0),o=new vA(e,s.hs),a=o.da(s.documents),l=yu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);km(t,n,c.fa);const h=new jV(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function GV(t,e,n){const r=G(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!pu(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Uo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Bo(r.remoteStore,i.targetId),zo(r,i.targetId)}).catch(Ti)):(zo(r,i.targetId),await Uo(r.localStore,i.targetId,!0))}async function HV(t,e){const n=G(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bo(n.remoteStore,r.targetId))}async function KV(t,e,n){const r=C_(t);try{const i=await function(o,a){const l=G(o),c=ke.now(),h=a.reduce((g,T)=>g.add(T.key),ie());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let T=Wt(),R=ie();return l.os.getEntries(g,h).next(k=>{T=k,T.forEach((I,v)=>{v.isValidDocument()||(R=R.add(I))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,T)).next(k=>{f=k;const I=[];for(const v of a){const w=wO(v,f.get(v.key).overlayedDocument);w!=null&&I.push(new Ar(v.key,w,nR(w.value.mapValue),Pe.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,I,a)}).next(k=>{m=k;const I=k.applyToLocalDocumentSet(f,R);return l.documentOverlayCache.saveOverlays(g,k.batchId,I)})}).then(()=>({batchId:m.batchId,changes:mR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new ve(te)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Pr(r,i.changes),await oa(r.remoteStore)}catch(i){const s=la(i,"Failed to persist write");n.reject(s)}}async function IA(t,e){const n=G(t);try{const r=await dV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(X(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?X(o.wa):i.removedDocuments.size>0&&(X(o.wa),o.wa=!1))}),await Pr(n,r,e)}catch(r){await Ti(r)}}function WI(t,e,n){const r=G(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=G(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&T_(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function QV(t,e,n){const r=G(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new ve(W.comparator);o=o.insert(s,Ee.newNoDocument(s,Z.min()));const a=ie().add(s),l=new _u(Z.min(),new Map,new ve(te),o,a);await IA(r,l),r.va=r.va.remove(s),r.Fa.delete(e),k_(r)}else await Uo(r.localStore,e,!1).then(()=>zo(r,e,n)).catch(Ti)}async function YV(t,e){const n=G(t),r=e.batch.batchId;try{const i=await hV(n.localStore,e);P_(n,r,null),A_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pr(n,i)}catch(i){await Ti(i)}}async function JV(t,e,n){const r=G(t);try{const i=await function(o,a){const l=G(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(X(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);P_(r,e,n),A_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pr(r,i)}catch(i){await Ti(i)}}async function XV(t,e){const n=G(t);Ai(n.remoteStore)||B("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=G(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=la(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function A_(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function P_(t,e,n){const r=G(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function zo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||EA(t,r)})}function EA(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Bo(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),k_(t))}function km(t,e,n){for(const r of n)r instanceof _A?(t.Ma.addReference(r.key,e),ZV(t,r)):r instanceof yA?(B("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||EA(t,r.key)):Q()}function ZV(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(B("SyncEngine","New document in limbo: "+n),t.Ca.add(r),k_(t))}function k_(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new W(le.fromString(e)),r=t.Na.next();t.Fa.set(r,new zV(n)),t.va=t.va.insert(n,r),vd(t.remoteStore,new lr(Ot(na(n.path)),r,"TargetPurposeLimboResolution",$t.oe))}}async function Pr(t,e,n){const r=G(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(c){i.push(c);const h=p_.Ki(l.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const h=G(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>D.forEach(c,m=>D.forEach(m.qi,g=>h.persistence.referenceDelegate.addReference(f,m.targetId,g)).next(()=>D.forEach(m.Qi,g=>h.persistence.referenceDelegate.removeReference(f,m.targetId,g)))))}catch(f){if(!Si(f))throw f;B("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const g=h.ns.get(m),T=g.snapshotVersion,R=g.withLastLimboFreeSnapshotVersion(T);h.ns=h.ns.insert(m,R)}}}(r.localStore,s))}async function eL(t,e){const n=G(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await nA(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new U(O.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pr(n,r.us)}}function tL(t,e){const n=G(t),r=n.Fa.get(e);if(r&&r.wa)return ie().add(r.key);{let i=ie();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function nL(t,e){const n=G(t),r=await Nh(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&km(n,e.targetId,i.fa),i}async function rL(t,e){const n=G(t);return oA(n.localStore,e).then(r=>Pr(n,r))}async function iL(t,e,n,r){const i=G(t),s=await function(a,l){const c=G(a),h=G(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>h.vn(f,l).next(m=>m?c.localDocuments.getDocuments(f,m):D.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await oa(i.remoteStore):n==="acknowledged"||n==="rejected"?(P_(i,e,r||null),A_(i,e),function(a,l){G(G(a).mutationQueue).Mn(l)}(i.localStore,e)):Q(),await Pr(i,s)):B("SyncEngine","Cannot apply mutation batch with id: "+e)}async function sL(t,e){const n=G(t);if(wd(n),C_(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await GI(n,r.toArray());n.La=!0,await Am(n.remoteStore,!0);for(const s of i)vd(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(zo(n,o),Uo(n.localStore,o,!0))),Bo(n.remoteStore,o)}),await i,await GI(n,r),function(o){const a=G(o);a.Fa.forEach((l,c)=>{Bo(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new ve(W.comparator)}(n),n.La=!1,await Am(n.remoteStore,!1)}}async function GI(t,e,n){const r=G(t),i=[],s=[];for(const o of e){let a;const l=r.Da.get(o);if(l&&l.length!==0){a=await Fo(r.localStore,Ot(l[0]));for(const c of l){const h=r.ba.get(c),f=await nL(r,h);f.snapshot&&s.push(f.snapshot)}}else{const c=await sA(r.localStore,o);a=await Fo(r.localStore,c),await R_(r,TA(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function TA(t){return cR(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function oL(t){return function(n){return G(G(n).persistence).Bi()}(G(t).localStore)}async function aL(t,e,n,r){const i=G(t);if(i.La)return void B("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await oA(i.localStore,dR(s[0])),a=_u.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ze.EMPTY_BYTE_STRING);await Pr(i,o,a);break}case"rejected":await Uo(i.localStore,e,!0),zo(i,e,r);break;default:Q()}}async function lL(t,e,n){const r=wd(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){B("SyncEngine","Adding an already active target "+i);continue}const s=await sA(r.localStore,i),o=await Fo(r.localStore,s);await R_(r,TA(s),o.targetId,!1,o.resumeToken),vd(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await Uo(r.localStore,i,!1).then(()=>{Bo(r.remoteStore,i),zo(r,i)}).catch(Ti)}}function wd(t){const e=G(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=IA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=tL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=QV.bind(null,e),e.Sa.h_=MV.bind(null,e.eventManager),e.Sa.ka=FV.bind(null,e.eventManager),e}function C_(t){const e=G(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=YV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=JV.bind(null,e),e}function uL(t,e,n){const r=G(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(g,T){const R=G(g),k=Ge(T.createTime);return R.persistence.runTransaction("hasNewerBundle","readonly",I=>R.$r.getBundleMetadata(I,T.id)).then(I=>!!I&&I.createTime.compareTo(k)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(g){return{taskState:"Success",documentsLoaded:g.totalDocuments,bytesLoaded:g.totalBytes,totalDocuments:g.totalDocuments,totalBytes:g.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(gA(l));const c=new BV(l,s.localStore,o.serializer);let h=await o.qa();for(;h;){const m=await c._a(h);m&&a._updateProgress(m),h=await o.qa()}const f=await c.complete();return await Pr(s,f.ca,void 0),await function(g,T){const R=G(g);return R.persistence.runTransaction("Save bundle","readwrite",k=>R.$r.saveBundleMetadata(k,T))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.ua)}catch(l){return bn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Cm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return tA(this.persistence,new eA,e.initialUser,this.serializer)}createPersistence(e){return new ZR(yd.Hr,this.serializer)}createSharedClientState(e){return new lA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class SA extends Cm{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await C_(this.Qa.syncEngine),await oa(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return tA(this.persistence,new eA,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new KO(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new xD(n,this.persistence);return new bD(e.asyncQueue,r)}createPersistence(e){const n=f_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new d_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,uA(),zc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new lA}}class cL extends SA{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Zf&&(this.sharedClientState.syncEngine={Zs:iL.bind(null,n),Xs:aL.bind(null,n),eo:lL.bind(null,n),Bi:oL.bind(null,n),Ys:rL.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await sL(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=uA();if(!Zf.D(n))throw new U(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=f_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Zf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class b_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>WI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=eL.bind(null,this.syncEngine),await Am(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LV}()}createDatastore(e){const n=vu(e.databaseInfo.databaseId),r=function(s){return new vV(s)}(e.databaseInfo);return function(s,o,a,l){return new EV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new SV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>WI(this.syncEngine,n,0),function(){return BI.D()?new BI:new gV}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new $V(i,s,o,a,l,c);return h&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=G(r);B("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await sa(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):We("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new it,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new UV(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new U(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=G(i),a={documents:s.map(f=>Jl(o.serializer,f))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,le.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const m=CO(o.serializer,f);c.set(m.key.toString(),m)});const h=[];return s.forEach(f=>{const m=c.get(f.toString());X(!!m),h.push(m)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ia(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=W.fromPath(r);this.mutations.push(new n_(i,this.precondition(i)))}),await async function(r,i){const s=G(r),o={writes:i.map(a=>Xl(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,le.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Q();n=Z.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new U(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Z.min())?Pe.exists(!1):Pe.updateTime(n):Pe.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Z.min()))throw new U(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Pe.updateTime(n)}return Pe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new g_(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new dL(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!du(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!AR(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=BS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(O.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=la(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $c(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x_(t);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>jI(e.remoteStore,i)),t._onlineComponents=e}function RA(t){return t.name==="FirebaseError"?t.code===O.FAILED_PRECONDITION||t.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function x_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await $c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!RA(n))throw n;bn("Error using user provided cache. Falling back to memory cache: "+n),await $c(t,new Cm)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await $c(t,new Cm);return t._offlineComponents}async function Ed(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await bm(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await bm(t,new b_))),t._onlineComponents}function AA(t){return x_(t).then(e=>e.persistence)}function N_(t){return x_(t).then(e=>e.localStore)}function PA(t){return Ed(t).then(e=>e.remoteStore)}function D_(t){return Ed(t).then(e=>e.syncEngine)}function mL(t){return Ed(t).then(e=>e.datastore)}async function $o(t){const e=await Ed(t),n=e.eventManager;return n.onListen=qV.bind(null,e.syncEngine),n.onUnlisten=GV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=HV.bind(null,e.syncEngine),n}function gL(t){return t.asyncQueue.enqueue(async()=>{const e=await AA(t),n=await PA(t);return e.setNetworkEnabled(!0),function(i){const s=G(i);return s.M_.delete(0),wu(s)}(n)})}function _L(t){return t.asyncQueue.enqueue(async()=>{const e=await AA(t),n=await PA(t);return e.setNetworkEnabled(!1),async function(i){const s=G(i);s.M_.add(0),await sa(s),s.N_.set("Offline")}(n)})}function yL(t,e){const n=new it;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const f=G(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new U(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=la(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await N_(t),e,n)),n.promise}function kA(t,e,n={}){const r=new it;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new Id({next:m=>{o.enqueueAndForget(()=>E_(s,f));const g=m.docs.has(a);!g&&m.fromCache?c.reject(new U(O.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&m.fromCache&&l&&l.source==="server"?c.reject(new U(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new S_(na(a.path),h,{includeMetadataChanges:!0,ra:!0});return I_(s,f)}(await $o(t),t.asyncQueue,e,n,r)),r.promise}function vL(t,e){const n=new it;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await Nh(i,s,!0),l=new vA(s,a.hs),c=l.da(a.documents),h=l.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const l=la(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await N_(t),e,n)),n.promise}function CA(t,e,n={}){const r=new it;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new Id({next:m=>{o.enqueueAndForget(()=>E_(s,f)),m.fromCache&&l.source==="server"?c.reject(new U(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new S_(a,h,{includeMetadataChanges:!0,ra:!0});return I_(s,f)}(await $o(t),t.asyncQueue,e,n,r)),r.promise}function wL(t,e){const n=new Id(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).z_.add(s),s.next()}(await $o(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){G(i).z_.delete(s)}(await $o(t),n))}}function IL(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?kR().encode(o):o,function(h,f){return new hL(h,f)}(function(h,f){if(h instanceof Uint8Array)return HI(h,f);if(h instanceof ArrayBuffer)return HI(new Uint8Array(h),f);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,vu(e));t.asyncQueue.enqueueAndForget(async()=>{uL(await D_(t),i,r)})}function EL(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=G(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await N_(t),e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O_(t,e,n){if(!n)throw new U(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function xA(t,e,n,r){if(e===!0&&r===!0)throw new U(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function QI(t){if(!W.isDocumentKey(t))throw new U(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function YI(t){if(W.isDocumentKey(t))throw new U(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Td(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function de(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Td(t);throw new U(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function NA(t,e){if(e<=0)throw new U(O.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}xA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new U(O.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new JI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new JI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vD;switch(r.type){case"firstParty":return new TD(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=KI.get(n);r&&(B("ComponentProvider","Removing Datastore"),KI.delete(n),r.terminate())}(this),Promise.resolve()}}function DA(t,e,n,r={}){var i;const s=(t=de(t,Iu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=nt.MOCK_USER;else{a=mS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new nt(c)}t._authCredentials=new wD(new US(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt=class OA{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new OA(this.firestore,e,this._query)}},Ne=class VA{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new VA(this.firestore,e,this._key)}},si=class LA extends Vt{constructor(e,n,r){super(e,n,na(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new W(e))}withConverter(e){return new LA(this.firestore,e,this._path)}};function gl(t,e,...n){if(t=J(t),O_("collection","path",e),t instanceof Iu){const r=le.fromString(e,...n);return YI(r),new si(t,null,r)}{if(!(t instanceof Ne||t instanceof si))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return YI(r),new si(t.firestore,null,r)}}function TL(t,e){if(t=de(t,Iu),O_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new U(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Vt(t,null,function(r){return new Rr(le.emptyPath(),r)}(e))}function Lh(t,e,...n){if(t=J(t),arguments.length===1&&(e=BS.newId()),O_("doc","path",e),t instanceof Iu){const r=le.fromString(e,...n);return QI(r),new Ne(t,null,new W(r))}{if(!(t instanceof Ne||t instanceof si))throw new U(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return QI(r),new Ne(t.firestore,t instanceof si?t.converter:null,new W(r))}}function MA(t,e){return t=J(t),e=J(e),(t instanceof Ne||t instanceof si)&&(e instanceof Ne||e instanceof si)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function FA(t,e){return t=J(t),e=J(e),t instanceof Vt&&e instanceof Vt&&t.firestore===e.firestore&&pu(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SL{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new g_(this,"async_queue_retry"),this.hu=()=>{const n=zc();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=zc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new it;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Si(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw We("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=w_.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Q()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function xm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class RL{constructor(){this._progressObserver={},this._taskCompletionResolver=new it,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AL=-1;let Be=class extends Iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new SL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||UA(this),this._firestoreClient.terminate()}};function PL(t,e){const n=typeof t=="object"?t:hd(),r=typeof t=="string"?t:"(default)",i=ea(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dS("firestore");s&&DA(i,...s)}return i}function lt(t){return t._firestoreClient||UA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function UA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new XD(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,bA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new pL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function kL(t,e){jA(t=de(t,Be));const n=lt(t);if(n._uninitializedComponentsProvider)throw new U(O.FAILED_PRECONDITION,"SDK cache is already specified.");bn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new b_;return BA(n,i,new SA(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function CL(t){jA(t=de(t,Be));const e=lt(t);if(e._uninitializedComponentsProvider)throw new U(O.FAILED_PRECONDITION,"SDK cache is already specified.");bn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new b_;return BA(e,r,new cL(r,n.cacheSizeBytes))}function BA(t,e,n){const r=new it;return t.asyncQueue.enqueue(async()=>{try{await $c(t,n),await bm(t,e),r.resolve()}catch(i){const s=i;if(!RA(s))throw s;bn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function bL(t){if(t._initialized&&!t._terminated)throw new U(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new it;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Wn.D())return Promise.resolve();const i=r+"main";await Wn.delete(i)}(f_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function xL(t){return function(n){const r=new it;return n.asyncQueue.enqueueAndForget(async()=>XV(await D_(n),r)),r.promise}(lt(t=de(t,Be)))}function NL(t){return gL(lt(t=de(t,Be)))}function DL(t){return _L(lt(t=de(t,Be)))}function OL(t,e){const n=lt(t=de(t,Be)),r=new RL;return IL(n,t._databaseId,e,r),r}function VL(t,e){return EL(lt(t=de(t,Be)),e).then(n=>n?new Vt(t,null,n.query):null)}function jA(t){if(t._initialized||t._terminated)throw new U(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qn(Ze.fromBase64String(e))}catch(n){throw new U(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qn(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LL=/^__.*__$/;class ML{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}class zA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $A(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Rd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Rd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Mh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if($A(this.fu)&&LL.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class FL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vu(e)}Fu(e,n,r,i=!1){return new Rd({fu:e,methodName:n,vu:r,path:Ae.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ps(t){const e=t._freezeSettings(),n=vu(t._databaseId);return new FL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ad(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);j_("Data must be an object, but it was:",o,r);const a=GA(r,o);let l,c;if(s.merge)l=new qt(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=Nm(e,f,n);if(!o.contains(m))throw new U(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);KA(h,m)||h.push(m)}l=new qt(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new ML(new dt(a),l,c)}class Eu extends As{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eu}}function qA(t,e,n){return new Rd({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class V_ extends As{_toFieldTransform(e){return new gu(e.path,new Vo)}isEqual(e){return e instanceof V_}}class L_ extends As{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=qA(this,e,!0),r=this.Mu.map(s=>ks(s,n)),i=new ds(r);return new gu(e.path,i)}isEqual(e){return e instanceof L_&&Co(this.Mu,e.Mu)}}class M_ extends As{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=qA(this,e,!0),r=this.Mu.map(s=>ks(s,n)),i=new fs(r);return new gu(e.path,i)}isEqual(e){return e instanceof M_&&Co(this.Mu,e.Mu)}}class F_ extends As{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Lo(e.serializer,vR(e.serializer,this.xu));return new gu(e.path,n)}isEqual(e){return e instanceof F_&&this.xu===e.xu}}function U_(t,e,n,r){const i=t.Fu(1,e,n);j_("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();Rs(r,(l,c)=>{const h=z_(e,l,n);c=J(c);const f=i.Su(h);if(c instanceof Eu)s.push(h);else{const m=ks(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new qt(s);return new zA(o,a,i.fieldTransforms)}function B_(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[Nm(e,r,n)],l=[i];if(s.length%2!=0)throw new U(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(Nm(e,s[m])),l.push(s[m+1]);const c=[],h=dt.empty();for(let m=a.length-1;m>=0;--m)if(!KA(c,a[m])){const g=a[m];let T=l[m];T=J(T);const R=o.Su(g);if(T instanceof Eu)c.push(g);else{const k=ks(T,R);k!=null&&(c.push(g),h.set(g,k))}}const f=new qt(c);return new zA(h,f,o.fieldTransforms)}function WA(t,e,n,r=!1){return ks(n,t.Fu(r?4:3,e))}function ks(t,e){if(HA(t=J(t)))return j_("Unsupported field value:",e,t),GA(t,e);if(t instanceof As)return function(r,i){if(!$A(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=ks(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=J(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ke.fromDate(r);return{timestampValue:Mo(i.serializer,s)}}if(r instanceof ke){const s=new ke(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mo(i.serializer,s)}}if(r instanceof Sd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qn)return{bytesValue:xR(i.serializer,r._byteString)};if(r instanceof Ne){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:a_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Td(r)}`)}(t,e)}function GA(t,e){const n={};return ZS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(r,i)=>{const s=ks(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function HA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ke||t instanceof Sd||t instanceof Qn||t instanceof Ne||t instanceof As)}function j_(t,e,n){if(!HA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Td(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function Nm(t,e,n){if((e=J(e))instanceof gi)return e._internalPath;if(typeof e=="string")return z_(t,e);throw Mh("Field path arguments must be of type string or ",t,!1,void 0,n)}const UL=new RegExp("[~\\*/\\[\\]]");function z_(t,e,n){if(e.search(UL)>=0)throw Mh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gi(...e.split("."))._internalPath}catch{throw Mh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new U(O.INVALID_ARGUMENT,a+t+l)}function KA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new BL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Pd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class BL extends Zl{data(){return super.data()}}function Pd(t,e){return typeof e=="string"?z_(t,e):e instanceof gi?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $_{}class Tu extends $_{}function rr(t,e,...n){let r=[];e instanceof $_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof q_).length,a=s.filter(l=>l instanceof kd).length;if(o>1||o>0&&a>0)throw new U(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class kd extends Tu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new kd(e,n,r)}_apply(e){const n=this._parse(e);return JA(e._query,n),new Vt(e.firestore,e.converter,_m(e._query,n))}_parse(e){const n=Ps(e.firestore);return function(s,o,a,l,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new U(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){ZI(f,h);const g=[];for(const T of f)g.push(XI(l,s,T));m={arrayValue:{values:g}}}else m=XI(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||ZI(f,h),m=WA(a,o,f,h==="in"||h==="not-in");return ue.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Dm(t,e,n){const r=e,i=Pd("where",t);return kd._create(i,r,n)}class q_ extends $_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new q_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pe.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)JA(o,l),o=_m(o,l)}(e._query,n),new Vt(e.firestore,e.converter,_m(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class W_ extends Tu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new W_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new U(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yl(s,o)}(e._query,this._field,this._direction);return new Vt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Rr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function jL(t,e="asc"){const n=e,r=Pd("orderBy",t);return W_._create(r,n)}class Cd extends Tu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Cd(e,n,r)}_apply(e){return new Vt(e.firestore,e.converter,kh(e._query,this._limit,this._limitType))}}function zL(t){return NA("limit",t),Cd._create("limit",t,"F")}function $L(t){return NA("limitToLast",t),Cd._create("limitToLast",t,"L")}class bd extends Tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new bd(e,n,r)}_apply(e){const n=YA(e,this.type,this._docOrFields,this._inclusive);return new Vt(e.firestore,e.converter,function(i,s){return new Rr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function qL(...t){return bd._create("startAt",t,!0)}function WL(...t){return bd._create("startAfter",t,!1)}class xd extends Tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new xd(e,n,r)}_apply(e){const n=YA(e,this.type,this._docOrFields,this._inclusive);return new Vt(e.firestore,e.converter,function(i,s){return new Rr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function GL(...t){return xd._create("endBefore",t,!1)}function HL(...t){return xd._create("endAt",t,!0)}function YA(t,e,n,r){if(n[0]=J(n[0]),n[0]instanceof Zl)return function(s,o,a,l,c){if(!l)throw new U(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of po(s))if(f.field.isKeyField())h.push(cs(o,l.key));else{const m=l.data.field(f.field);if(fd(m))throw new U(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const g=f.field.canonicalString();throw new U(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}h.push(m)}return new pi(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ps(t.firestore);return function(o,a,l,c,h,f){const m=o.explicitOrderBy;if(h.length>m.length)throw new U(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let T=0;T<h.length;T++){const R=h[T];if(m[T].field.isKeyField()){if(typeof R!="string")throw new U(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof R}`);if(!e_(o)&&R.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${R}' contains a slash.`);const k=o.path.child(le.fromString(R));if(!W.isDocumentKey(k))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${k}' is not because it contains an odd number of segments.`);const I=new W(k);g.push(cs(a,I))}else{const k=WA(l,c,R);g.push(k)}}return new pi(g,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function XI(t,e,n){if(typeof(n=J(n))=="string"){if(n==="")throw new U(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!e_(e)&&n.indexOf("/")!==-1)throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!W.isDocumentKey(r))throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cs(t,new W(r))}if(n instanceof Ne)return cs(t,n._key);throw new U(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Td(n)}.`)}function ZI(t,e){if(!Array.isArray(t)||t.length===0)throw new U(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function JA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class G_{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Sd(Me(e.latitude),Me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hl(e));default:return null}}convertTimestamp(e){const n=wr(e);return new ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);X(zR(r));const i=new di(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(n)||We(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class KL extends G_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Ir=class extends Zl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Pd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},_l=class extends Ir{data(e={}){return super.data(e)}},_i=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ki(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _l(this._firestore,this._userDataWriter,r.key,r,new Ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new _l(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ki(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new _l(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ki(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:QL(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function QL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}function XA(t,e){return t instanceof Ir&&e instanceof Ir?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof _i&&e instanceof _i&&t._firestore===e._firestore&&FA(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(t){t=de(t,Ne);const e=de(t.firestore,Be);return kA(lt(e),t._key).then(n=>H_(e,t,n))}class Cs extends G_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,n)}}function JL(t){t=de(t,Ne);const e=de(t.firestore,Be),n=lt(e),r=new Cs(e);return yL(n,t._key).then(i=>new Ir(e,r,t._key,i,new Ki(i!==null&&i.hasLocalMutations,!0),t.converter))}function XL(t){t=de(t,Ne);const e=de(t.firestore,Be);return kA(lt(e),t._key,{source:"server"}).then(n=>H_(e,t,n))}function ZA(t){t=de(t,Vt);const e=de(t.firestore,Be),n=lt(e),r=new Cs(e);return QA(t._query),CA(n,t._query).then(i=>new _i(e,r,t,i))}function ZL(t){t=de(t,Vt);const e=de(t.firestore,Be),n=lt(e),r=new Cs(e);return vL(n,t._query).then(i=>new _i(e,r,t,i))}function eM(t){t=de(t,Vt);const e=de(t.firestore,Be),n=lt(e),r=new Cs(e);return CA(n,t._query,{source:"server"}).then(i=>new _i(e,r,t,i))}function eE(t,e,n){t=de(t,Ne);const r=de(t.firestore,Be),i=Nd(t.converter,e,n);return Su(r,[Ad(Ps(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Pe.none())])}function tE(t,e,n,...r){t=de(t,Ne);const i=de(t.firestore,Be),s=Ps(i);let o;return o=typeof(e=J(e))=="string"||e instanceof gi?B_(s,"updateDoc",t._key,e,n,r):U_(s,"updateDoc",t._key,e),Su(i,[o.toMutation(t._key,Pe.exists(!0))])}function tM(t){return Su(de(t.firestore,Be),[new ia(t._key,Pe.none())])}function Om(t,e){const n=de(t.firestore,Be),r=Lh(t),i=Nd(t.converter,e);return Su(n,[Ad(Ps(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Pe.exists(!1))]).then(()=>r)}function eP(t,...e){var n,r,i;t=J(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||xm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(xm(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof Ne)c=de(t.firestore,Be),h=na(t._key.path),l={next:f=>{e[o]&&e[o](H_(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=de(t,Vt);c=de(f.firestore,Be),h=f._query;const m=new Cs(c);l={next:g=>{e[o]&&e[o](new _i(c,m,f,g))},error:e[o+1],complete:e[o+2]},QA(t._query)}return function(m,g,T,R){const k=new Id(R),I=new S_(g,k,T);return m.asyncQueue.enqueueAndForget(async()=>I_(await $o(m),I)),()=>{k.$a(),m.asyncQueue.enqueueAndForget(async()=>E_(await $o(m),I))}}(lt(c),h,a,l)}function nM(t,e){return wL(lt(t=de(t,Be)),xm(e)?e:{next:e})}function Su(t,e){return function(r,i){const s=new it;return r.asyncQueue.enqueueAndForget(async()=>KV(await D_(r),i,s)),s.promise}(lt(t),e)}function H_(t,e,n){const r=n.docs.get(e._key),i=new Cs(t);return new Ir(t,i,e._key,r,new Ki(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rM={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iM=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ps(e)}set(e,n,r){this._verifyNotCommitted();const i=$r(e,this._firestore),s=Nd(i.converter,n,r),o=Ad(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Pe.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=$r(e,this._firestore);let o;return o=typeof(n=J(n))=="string"||n instanceof gi?B_(this._dataReader,"WriteBatch.update",s._key,n,r,i):U_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Pe.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=$r(e,this._firestore);return this._mutations=this._mutations.concat(new ia(n._key,Pe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new U(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function $r(t,e){if((t=J(t)).firestore!==e)throw new U(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let sM=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Ps(n)}get(n){const r=$r(n,this._firestore),i=new KL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return Q();const o=s[0];if(o.isFoundDocument())return new Zl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Zl(this._firestore,i,r._key,null,r.converter);throw Q()})}set(n,r,i){const s=$r(n,this._firestore),o=Nd(s.converter,r,i),a=Ad(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=$r(n,this._firestore);let a;return a=typeof(r=J(r))=="string"||r instanceof gi?B_(this._dataReader,"Transaction.update",o._key,r,i,s):U_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=$r(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=$r(e,this._firestore),r=new Cs(this._firestore);return super.get(e).then(i=>new Ir(this._firestore,r,n._key,i._document,new Ki(!1,!1),n.converter))}};function oM(t,e,n){t=de(t,Be);const r=Object.assign(Object.assign({},rM),n);return function(s){if(s.maxAttempts<1)throw new U(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new it;return s.asyncQueue.enqueueAndForget(async()=>{const c=await mL(s);new fL(s.asyncQueue,c,a,o,l).Xa()}),l.promise}(lt(t),i=>e(new sM(t,i)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aM(){return new Eu("deleteField")}function lM(){return new V_("serverTimestamp")}function uM(...t){return new L_("arrayUnion",t)}function cM(...t){return new M_("arrayRemove",t)}function hM(t){return new F_("increment",t)}(function(e,n=!0){(function(i){ta=i})(Sr),vr(new gn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Be(new ID(r.getProvider("auth-internal")),new RD(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),tn(Kw,"4.6.3",e),tn(Kw,"4.6.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tP="firebasestorage.googleapis.com",nP="storageBucket",dM=2*60*1e3,fM=10*60*1e3,pM=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Tt{constructor(e,n,r=0){super(tp(e),`Firebase Storage: ${n} (${tp(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return tp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Se||(Se={}));function tp(t){return"storage/"+t}function K_(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe(Se.UNKNOWN,t)}function mM(t){return new Oe(Se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function gM(t){return new Oe(Se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _M(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(Se.UNAUTHENTICATED,t)}function yM(){return new Oe(Se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vM(t){return new Oe(Se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function rP(){return new Oe(Se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iP(){return new Oe(Se.CANCELED,"User canceled the upload/download.")}function wM(t){return new Oe(Se.INVALID_URL,"Invalid URL '"+t+"'.")}function IM(t){return new Oe(Se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function EM(){return new Oe(Se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nP+"' property when initializing the app?")}function sP(){return new Oe(Se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function TM(){return new Oe(Se.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function SM(){return new Oe(Se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function RM(t){return new Oe(Se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function go(t){return new Oe(Se.INVALID_ARGUMENT,t)}function oP(){return new Oe(Se.APP_DELETED,"The Firebase app was deleted.")}function aP(t){return new Oe(Se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function yl(t,e){return new Oe(Se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function za(t){throw new Oe(Se.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Et.makeFromUrl(e,n)}catch{return new Et(e,"")}if(r.path==="")return r;throw IM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(C){C.path_=decodeURIComponent(C.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",g=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),T={bucket:1,path:3},R=n===tP?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",I=new RegExp(`^https?://${R}/${i}/${k}`,"i"),w=[{regex:a,indices:l,postModify:s},{regex:g,indices:T,postModify:c},{regex:I,indices:{bucket:1,path:2},postModify:c}];for(let C=0;C<w.length;C++){const L=w[C],M=L.regex.exec(e);if(M){const E=M[L.indices.bucket];let y=M[L.indices.path];y||(y=""),r=new Et(E,y),L.postModify(r);break}}if(r==null)throw wM(e);return r}}class AM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...k){c||(c=!0,e.apply(null,k))}function f(k){i=setTimeout(()=>{i=null,t(g,l())},k)}function m(){s&&clearTimeout(s)}function g(k,...I){if(c){m();return}if(k){m(),h.call(null,k,...I);return}if(l()||o){m(),h.call(null,k,...I);return}r<64&&(r*=2);let w;a===1?(a=2,w=0):w=(r+Math.random())*1e3,f(w)}let T=!1;function R(k){T||(T=!0,m(),!c&&(i!==null?(k||(a=2),clearTimeout(i),f(0)):k||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,R(!0)},n),R}function kM(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t){return t!==void 0}function bM(t){return typeof t=="function"}function xM(t){return typeof t=="object"&&!Array.isArray(t)}function Dd(t){return typeof t=="string"||t instanceof String}function nE(t){return Q_()&&t instanceof Blob}function Q_(){return typeof Blob<"u"}function Vm(t,e,n,r){if(r<e)throw go(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw go(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function lP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var es;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(es||(es={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NM{constructor(e,n,r,i,s,o,a,l,c,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,T)=>{this.resolve_=g,this.reject_=T,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===es.NO_ERROR,l=s.getStatus();if(!a||uP(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===es.ABORT;r(!1,new yc(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new yc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());CM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=K_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?oP():iP();o(l)}else{const l=rP();o(l)}};this.canceled_?n(!1,new yc(!1,null,!0)):this.backoffId_=PM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function DM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function OM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function VM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function LM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function MM(t,e,n,r,i,s,o=!0){const a=lP(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return VM(c,e),DM(c,n),OM(c,s),LM(c,r),new NM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function UM(...t){const e=FM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Q_())return new Blob(t);throw new Oe(Se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function BM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(t){if(typeof atob>"u")throw RM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class np{constructor(e,n){this.data=e,this.contentType=n||null}}function cP(t,e){switch(t){case cn.RAW:return new np(hP(e));case cn.BASE64:case cn.BASE64URL:return new np(dP(t,e));case cn.DATA_URL:return new np($M(e),qM(e))}throw K_()}function hP(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function zM(t){let e;try{e=decodeURIComponent(t)}catch{throw yl(cn.DATA_URL,"Malformed data URL.")}return hP(e)}function dP(t,e){switch(t){case cn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw yl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw yl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jM(e)}catch(i){throw i.message.includes("polyfill")?i:yl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class fP{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw yl(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=WM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function $M(t){const e=new fP(t);return e.base64?dP(cn.BASE64,e.rest):zM(e.rest)}function qM(t){return new fP(t).contentType}function WM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(e,n){let r=0,i="";nE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(nE(this.data_)){const r=this.data_,i=BM(r,e,n);return i===null?null:new Vn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Vn(r,!0)}}static getBlob(...e){if(Q_()){const n=e.map(r=>r instanceof Vn?r.data_:r);return new Vn(UM.apply(null,n))}else{const n=e.map(o=>Dd(o)?cP(cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Vn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y_(t){let e;try{e=JSON.parse(t)}catch{return null}return xM(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function HM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function pP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KM(t,e){return e}class Pt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||KM}}let vc=null;function QM(t){return!Dd(t)||t.length<2?t:pP(t)}function Ru(){if(vc)return vc;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(s,o){return QM(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Pt("size");return i.xform=r,t.push(i),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),vc=t,vc}function YM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Et(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function JM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return YM(r,t),r}function mP(t,e,n){const r=Y_(e);return r===null?null:JM(t,r,n)}function XM(t,e,n,r){const i=Y_(e);if(i===null||!Dd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),g=Pi(m,n,r),T=lP({alt:"media",token:c});return g+T})[0]}function J_(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="prefixes",iE="items";function ZM(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[rE])for(const i of n[rE]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Et(e,s));r.prefixes.push(o)}if(n[iE])for(const i of n[iE]){const s=t._makeStorageReference(new Et(e,i.name));r.items.push(s)}return r}function eF(t,e,n){const r=Y_(n);return r===null?null:ZM(t,e,r)}class kr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t){if(!t)throw K_()}function Od(t,e){function n(r,i){const s=mP(t,i,e);return Hn(s!==null),s}return n}function tF(t,e){function n(r,i){const s=eF(t,e,i);return Hn(s!==null),s}return n}function nF(t,e){function n(r,i){const s=mP(t,i,e);return Hn(s!==null),XM(s,i,t.host,t._protocol)}return n}function ua(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=yM():i=_M():n.getStatus()===402?i=gM(t.bucket):n.getStatus()===403?i=vM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Vd(t){const e=ua(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=mM(t.path)),s.serverResponse=i.serverResponse,s}return n}function gP(t,e,n){const r=e.fullServerUrl(),i=Pi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new kr(i,s,Od(t,n),o);return a.errorHandler=Vd(e),a}function rF(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Pi(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,h=new kr(a,l,tF(t,e.bucket),c);return h.urlParams=s,h.errorHandler=ua(e),h}function iF(t,e,n){const r=e.fullServerUrl(),i=Pi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new kr(i,s,nF(t,n),o);return a.errorHandler=Vd(e),a}function sF(t,e,n,r){const i=e.fullServerUrl(),s=Pi(i,t.host,t._protocol),o="PATCH",a=J_(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,h=new kr(s,o,Od(t,r),c);return h.headers=l,h.body=a,h.errorHandler=Vd(e),h}function oF(t,e){const n=e.fullServerUrl(),r=Pi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new kr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Vd(e),a}function aF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function _P(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=aF(null,e)),r}function yP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let w="";for(let C=0;C<2;C++)w=w+Math.random().toString().slice(2);return w}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=_P(e,r,i),h=J_(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+l+"--",g=Vn.getBlob(f,r,m);if(g===null)throw sP();const T={name:c.fullPath},R=Pi(s,t.host,t._protocol),k="POST",I=t.maxUploadRetryTime,v=new kr(R,k,Od(t,n),I);return v.urlParams=T,v.headers=o,v.body=g.uploadData(),v.errorHandler=ua(e),v}class Fh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function X_(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Hn(!1)}return Hn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function lF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=_P(e,r,i),a={name:o.fullPath},l=Pi(s,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=J_(o,n),m=t.maxUploadRetryTime;function g(R){X_(R);let k;try{k=R.getResponseHeader("X-Goog-Upload-URL")}catch{Hn(!1)}return Hn(Dd(k)),k}const T=new kr(l,c,g,m);return T.urlParams=a,T.headers=h,T.body=f,T.errorHandler=ua(e),T}function uF(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const h=X_(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Hn(!1)}f||Hn(!1);const m=Number(f);return Hn(!isNaN(m)),new Fh(m,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,l=new kr(n,o,s,a);return l.headers=i,l.errorHandler=ua(e),l}const sE=256*1024;function cF(t,e,n,r,i,s,o,a){const l=new Fh(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw TM();const c=l.total-l.current;let h=c;i>0&&(h=Math.min(h,i));const f=l.current,m=f+h;let g="";h===0?g="finalize":c===h?g="upload, finalize":g="upload";const T={"X-Goog-Upload-Command":g,"X-Goog-Upload-Offset":`${l.current}`},R=r.slice(f,m);if(R===null)throw sP();function k(C,L){const M=X_(C,["active","final"]),E=l.current+h,y=r.size();let S;return M==="final"?S=Od(e,s)(C,L):S=null,new Fh(E,y,M==="final",S)}const I="POST",v=e.maxUploadRetryTime,w=new kr(n,I,k,v);return w.headers=T,w.body=R.uploadData(),w.progressCallback=a||null,w.errorHandler=ua(t),w}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hF={STATE_CHANGED:"state_changed"},bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function rp(t){switch(t){case"running":case"pausing":case"canceling":return bt.RUNNING;case"paused":return bt.PAUSED;case"success":return bt.SUCCESS;case"canceled":return bt.CANCELED;case"error":return bt.ERROR;default:return bt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dF{constructor(e,n,r){if(bM(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function js(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class fF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=es.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=es.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=es.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw za("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw za("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw za("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw za("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw za("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class pF extends fF{initXhr(){this.xhr_.responseType="text"}}function An(){return new pF}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Ru(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Se.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(uP(i.status,[]))if(s)i=rP();else{this.sleepTime=Math.max(this.sleepTime*2,pM),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Se.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=lF(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,An,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=uF(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,An,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=sE*this._chunkMultiplier,n=new Fh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=cF(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,An,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){sE*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=gP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,An,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=yP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,An,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=iP(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=rp(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new dF(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(rp(this._state)){case bt.SUCCESS:js(this._resolve.bind(null,this.snapshot))();break;case bt.CANCELED:case bt.ERROR:const n=this._reject;js(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(rp(this._state)){case bt.RUNNING:case bt.PAUSED:e.next&&js(e.next.bind(e,this.snapshot))();break;case bt.SUCCESS:e.complete&&js(e.complete.bind(e))();break;case bt.CANCELED:case bt.ERROR:e.error&&js(e.error.bind(e,this._error))();break;default:e.error&&js(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(e,n){this._service=e,n instanceof Et?this._location=n:this._location=Et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _s(e,n)}get root(){const e=new Et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pP(this._location.path)}get storage(){return this._service}get parent(){const e=GM(this._location.path);if(e===null)return null;const n=new Et(this._location.bucket,e);return new _s(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw aP(e)}}function mF(t,e,n){t._throwIfRoot("uploadBytes");const r=yP(t.storage,t._location,Ru(),new Vn(e,!0),n);return t.storage.makeRequestWithTokens(r,An).then(i=>({metadata:i,ref:t}))}function gF(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new vP(t,new Vn(e),n)}function _F(t){const e={prefixes:[],items:[]};return wP(t,e).then(()=>e)}async function wP(t,e,n){const i=await IP(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await wP(t,e,i.nextPageToken)}function IP(t,e){e!=null&&typeof e.maxResults=="number"&&Vm("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=rF(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,An)}function yF(t){t._throwIfRoot("getMetadata");const e=gP(t.storage,t._location,Ru());return t.storage.makeRequestWithTokens(e,An)}function vF(t,e){t._throwIfRoot("updateMetadata");const n=sF(t.storage,t._location,e,Ru());return t.storage.makeRequestWithTokens(n,An)}function wF(t){t._throwIfRoot("getDownloadURL");const e=iF(t.storage,t._location,Ru());return t.storage.makeRequestWithTokens(e,An).then(n=>{if(n===null)throw SM();return n})}function IF(t){t._throwIfRoot("deleteObject");const e=oF(t.storage,t._location);return t.storage.makeRequestWithTokens(e,An)}function EP(t,e){const n=HM(t._location.path,e),r=new Et(t._location.bucket,n);return new _s(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EF(t){return/^[A-Za-z]+:\/\//.test(t)}function TF(t,e){return new _s(t,e)}function TP(t,e){if(t instanceof Z_){const n=t;if(n._bucket==null)throw EM();const r=new _s(n,n._bucket);return e!=null?TP(r,e):r}else return e!==void 0?EP(t,e):t}function SF(t,e){if(e&&EF(e)){if(t instanceof Z_)return TF(t,e);throw go("To use ref(service, url), the first argument must be a Storage instance.")}else return TP(t,e)}function oE(t,e){const n=e==null?void 0:e[nP];return n==null?null:Et.makeFromBucketSpec(n,t)}function RF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:mS(i,t.app.options.projectId))}class Z_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=tP,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dM,this._maxUploadRetryTime=fM,this._requests=new Set,i!=null?this._bucket=Et.makeFromBucketSpec(i,this._host):this._bucket=oE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Et.makeFromBucketSpec(this._url,e):this._bucket=oE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _s(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new AM(oP());{const o=MM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const aE="@firebase/storage",lE="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SP="storage";function AF(t,e,n){return t=J(t),mF(t,e,n)}function PF(t,e,n){return t=J(t),gF(t,e,n)}function kF(t){return t=J(t),yF(t)}function CF(t,e){return t=J(t),vF(t,e)}function bF(t,e){return t=J(t),IP(t,e)}function xF(t){return t=J(t),_F(t)}function RP(t){return t=J(t),wF(t)}function NF(t){return t=J(t),IF(t)}function Lm(t,e){return t=J(t),SF(t,e)}function DF(t,e){return EP(t,e)}function OF(t=hd(),e){t=J(t);const r=ea(t,SP).getImmediate({identifier:e}),i=dS("storage");return i&&AP(r,...i),r}function AP(t,e,n,r={}){RF(t,e,n,r)}function VF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Z_(n,r,i,e,Sr)}function LF(){vr(new gn(SP,VF,"PUBLIC").setMultipleInstances(!0)),tn(aE,lE,""),tn(aE,lE,"esm2017")}LF();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MF{constructor(e,n){this._delegate=e,this.firebase=n,zl(e,new gn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Kg(this._delegate)))}_getService(e,n=li){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=li){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){zl(this._delegate,e)}_addOrOverwriteComponent(e){RS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FF={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},uE=new Ss("app-compat","Firebase",FF);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UF(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:tn,setLogLevel:CS,onLog:kS,apps:null,SDK_VERSION:Sr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:gD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||li,!Uw(e,c))throw uE.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,h={}){const f=Hg(c,h);if(Uw(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,f=h.replace("-compat","");if(vr(c)&&c.type==="PUBLIC"){const m=(g=i())=>{if(typeof g[f]!="function")throw uE.create("invalid-app-argument",{appName:h});return g[f]()};c.serviceProps!==void 0&&Th(m,c.serviceProps),n[f]=m,t.prototype[f]=function(...g){return this._getService.bind(this,h).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[f]:null}function l(c,h){return h==="serverAuth"?null:h}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PP(){const t=UF(MF);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:PP,extendNamespace:e,createSubscribe:wS,ErrorFactory:Ss,deepExtend:Th});function e(n){Th(t,n)}return t}const BF=PP();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=new cd("@firebase/app-compat"),jF="@firebase/app-compat",zF="0.2.35";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $F(t){tn(jF,zF,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(gS()&&self.firebase!==void 0){cE.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&cE.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const bs=BF;$F();var qF="firebase",WF="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bs.registerVersion(qF,WF,"app-compat");function ey(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const $a={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},zs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GF(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function kP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HF=GF,KF=kP,CP=new Ss("auth","Firebase",kP());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uh=new cd("@firebase/auth");function QF(t,...e){Uh.logLevel<=oe.WARN&&Uh.warn(`Auth (${Sr}): ${t}`,...e)}function qc(t,...e){Uh.logLevel<=oe.ERROR&&Uh.error(`Auth (${Sr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(t,...e){throw ny(t,...e)}function Xe(t,...e){return ny(t,...e)}function ty(t,e,n){const r=Object.assign(Object.assign({},KF()),{[e]:n});return new Ss("auth","Firebase",r).create(e,{appName:t.name})}function st(t){return ty(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ca(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ot(t,"argument-error"),ty(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ny(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return CP.create(t,...e)}function $(t,e,...n){if(!t)throw ny(e,...n)}function zn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw qc(e),new Error(e)}function xn(t,e){t||zn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ry(){return hE()==="http:"||hE()==="https:"}function hE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ry()||_S()||"connection"in navigator)?navigator.onLine:!0}function JF(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,n){this.shortDelay=e,this.longDelay=n,xn(n>e,"Short delay should be less than long delay!"),this.isMobile=Zx()||qg()}get(){return YF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t,e){xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;zn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;zn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;zn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZF=new Au(3e4,6e4);function ze(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $e(t,e,n,r,i={}){return xP(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Zo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),bP.fetch()(NP(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function xP(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},XF),e);try{const i=new t2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw tl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw tl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw tl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw tl(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ty(t,h,c);ot(t,h)}}catch(i){if(i instanceof Tt)throw i;ot(t,"network-request-failed",{message:String(i)})}}async function Cr(t,e,n,r,i={}){const s=await $e(t,e,n,r,i);return"mfaPendingCredential"in s&&ot(t,"multi-factor-auth-required",{_serverResponse:s}),s}function NP(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?iy(t.config,i):`${t.config.apiScheme}://${i}`}function e2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class t2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),ZF.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xe(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(t){return t!==void 0&&t.getResponse!==void 0}function fE(t){return t!==void 0&&t.enterprise!==void 0}class n2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return e2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r2(t){return(await $e(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function i2(t,e){return $e(t,"GET","/v2/recaptchaConfig",ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s2(t,e){return $e(t,"POST","/v1/accounts:delete",e)}async function o2(t,e){return $e(t,"POST","/v1/accounts:update",e)}async function DP(t,e){return $e(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a2(t,e=!1){const n=J(t),r=await n.getIdToken(e),i=Ld(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vl(ip(i.auth_time)),issuedAtTime:vl(ip(i.iat)),expirationTime:vl(ip(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ip(t){return Number(t)*1e3}function Ld(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return qc("JWT malformed, contained fewer than 3 sections"),null;try{const i=cS(n);return i?JSON.parse(i):(qc("Failed to decode base64 JWT payload"),null)}catch(i){return qc("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function pE(t){const e=Ld(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&l2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function l2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vl(this.lastLoginAt),this.creationTime=vl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Er(t,DP(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?OP(s.providerUserInfo):[],a=h2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Mm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function c2(t){const e=J(t);await tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function h2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function OP(t){return t.map(e=>{var{providerId:n}=e,r=ey(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t,e){const n=await xP(t,{},async()=>{const r=Zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=NP(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",bP.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function f2(t,e){return $e(t,"POST","/v2/accounts:revokeToken",ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):pE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=pE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await d2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _o;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ey(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Mm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Er(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a2(this,e)}reload(){return c2(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Fe(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await Er(this,s2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,R=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,v=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:w,emailVerified:C,isAnonymous:L,providerData:M,stsTokenManager:E}=n;$(w&&E,e,"internal-error");const y=_o.fromJSON(this.name,E);$(typeof w=="string",e,"internal-error"),Mr(f,e.name),Mr(m,e.name),$(typeof C=="boolean",e,"internal-error"),$(typeof L=="boolean",e,"internal-error"),Mr(g,e.name),Mr(T,e.name),Mr(R,e.name),Mr(k,e.name),Mr(I,e.name),Mr(v,e.name);const S=new ur({uid:w,auth:e,email:m,emailVerified:C,displayName:f,isAnonymous:L,photoURL:T,phoneNumber:g,tenantId:R,stsTokenManager:y,createdAt:I,lastLoginAt:v});return M&&Array.isArray(M)&&(S.providerData=M.map(A=>Object.assign({},A))),k&&(S._redirectEventId=k),S}static async _fromIdTokenResponse(e,n,r=!1){const i=new _o;i.updateFromServerResponse(n);const s=new ur({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?OP(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new _o;a.updateFromIdToken(r);const l=new ur({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Mm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=new Map;function Zt(t){xn(t instanceof Function,"Expected a class definition");let e=mE.get(t);return e?(xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,mE.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}VP.type="NONE";const qo=VP;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t,e,n){return`firebase:${t}:${e}:${n}`}class yo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ts(this.userKey,i.apiKey,s),this.fullPersistenceKey=ts("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yo(Zt(qo),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Zt(qo);const o=ts(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=ur._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new yo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new yo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(FP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(LP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(UP(e))return"Blackberry";if(BP(e))return"Webos";if(sy(e))return"Safari";if((e.includes("chrome/")||MP(e))&&!e.includes("edge/"))return"Chrome";if(Pu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function LP(t=Ce()){return/firefox\//i.test(t)}function sy(t=Ce()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function MP(t=Ce()){return/crios\//i.test(t)}function FP(t=Ce()){return/iemobile/i.test(t)}function Pu(t=Ce()){return/android/i.test(t)}function UP(t=Ce()){return/blackberry/i.test(t)}function BP(t=Ce()){return/webos/i.test(t)}function ha(t=Ce()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function p2(t=Ce()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function m2(t=Ce()){var e;return ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function g2(){return yS()&&document.documentMode===10}function jP(t=Ce()){return ha(t)||Pu(t)||BP(t)||UP(t)||/windows phone/i.test(t)||FP(t)}function _2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zP(t,e=[]){let n;switch(t){case"Browser":n=gE(Ce());break;case"Worker":n=`${gE(Ce())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v2(t,e={}){return $e(t,"GET","/v2/passwordPolicy",ze(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w2=6;class I2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:w2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _E(this),this.idTokenSubscription=new _E(this),this.beforeStateQueue=new y2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await DP(this,{idToken:e}),r=await ur._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Fe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JF()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Fe(this.app))return Promise.reject(st(this));const n=e?J(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Fe(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Fe(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await v2(this),n=new I2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ss("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await f2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=zP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function je(t){return J(t)}class _E{constructor(e){this.auth=e,this.observer=null,this.addObserver=wS(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ku={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function T2(t){ku=t}function oy(t){return ku.loadJS(t)}function S2(){return ku.recaptchaV2Script}function R2(){return ku.recaptchaEnterpriseScript}function A2(){return ku.gapiScript}function $P(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const P2="recaptcha-enterprise",k2="NO_RECAPTCHA";class C2{constructor(e){this.type=P2,this.auth=je(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{i2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new n2(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;fE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(k2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&fE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=R2();l.length!==0&&(l+=a),oy(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function yE(t,e,n,r=!1){const i=new C2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function nu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await yE(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await yE(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b2(t,e){const n=ea(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Co(s,e??{}))return i;ot(i,"already-initialized")}return n.initialize({options:e})}function x2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qP(t,e,n){const r=je(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=WP(e),{host:o,port:a}=N2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||D2()}function WP(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function N2(t){const e=WP(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vE(o)}}}function vE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function D2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return zn("not implemented")}_getIdTokenResponse(e){return zn("not implemented")}_linkToIdToken(e,n){return zn("not implemented")}_getReauthenticationResolver(e){return zn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function GP(t,e){return $e(t,"POST","/v1/accounts:resetPassword",ze(t,e))}async function O2(t,e){return $e(t,"POST","/v1/accounts:update",e)}async function V2(t,e){return $e(t,"POST","/v1/accounts:signUp",e)}async function L2(t,e){return $e(t,"POST","/v1/accounts:update",ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M2(t,e){return Cr(t,"POST","/v1/accounts:signInWithPassword",ze(t,e))}async function Md(t,e){return $e(t,"POST","/v1/accounts:sendOobCode",ze(t,e))}async function F2(t,e){return Md(t,e)}async function U2(t,e){return Md(t,e)}async function B2(t,e){return Md(t,e)}async function j2(t,e){return Md(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z2(t,e){return Cr(t,"POST","/v1/accounts:signInWithEmailLink",ze(t,e))}async function $2(t,e){return Cr(t,"POST","/v1/accounts:signInWithEmailLink",ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru extends da{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ru(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ru(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nu(e,n,"signInWithPassword",M2);case"emailLink":return z2(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nu(e,r,"signUpPassword",V2);case"emailLink":return $2(e,{idToken:n,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e){return Cr(t,"POST","/v1/accounts:signInWithIdp",ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q2="http://localhost";class Yn extends da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ey(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Yn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fr(e,n)}buildRequest(){const e={requestUri:q2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W2(t,e){return $e(t,"POST","/v1/accounts:sendVerificationCode",ze(t,e))}async function G2(t,e){return Cr(t,"POST","/v1/accounts:signInWithPhoneNumber",ze(t,e))}async function H2(t,e){const n=await Cr(t,"POST","/v1/accounts:signInWithPhoneNumber",ze(t,e));if(n.temporaryProof)throw tl(t,"account-exists-with-different-credential",n);return n}const K2={USER_NOT_FOUND:"user-not-found"};async function Q2(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Cr(t,"POST","/v1/accounts:signInWithPhoneNumber",ze(t,n),K2)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends da{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ns({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ns({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return G2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return H2(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Q2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ns({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function J2(t){const e=oo(Ya(t)).link,n=e?oo(Ya(e)).deep_link_id:null,r=oo(Ya(t)).deep_link_id;return(r?oo(Ya(r)).link:null)||r||n||e||t}class Fd{constructor(e){var n,r,i,s,o,a;const l=oo(Ya(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Y2((i=l.mode)!==null&&i!==void 0?i:null);$(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=J2(e);try{return new Fd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(){this.providerId=ki.PROVIDER_ID}static credential(e,n){return ru._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fd.parseLink(n);return $(r,"argument-error"),ru._fromEmailAndCode(e,r.code,r.tenantId)}}ki.PROVIDER_ID="password";ki.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ki.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends br{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class vo extends fa{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return $("providerId"in n&&"signInMethod"in n,"argument-error"),Yn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return $(e.idToken||e.accessToken,"argument-error"),Yn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return vo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return vo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new vo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends fa{constructor(){super("facebook.com")}static credential(e){return Yn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends fa{constructor(){super("github.com")}static credential(e){return Yn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X2="http://localhost";class Wo extends da{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Wo(r,s)}static _create(e,n){return new Wo(e,n)}buildRequest(){return{requestUri:X2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="saml.";class Bh extends br{constructor(e){$(e.startsWith(Z2),"argument-error"),super(e)}static credentialFromResult(e){return Bh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Bh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Wo.fromJSON(e);return $(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Wo._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends fa{constructor(){super("twitter.com")}static credential(e,n){return Yn._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HP(t,e){return Cr(t,"POST","/v1/accounts:signUp",ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ur._fromIdTokenResponse(e,r,i),o=wE(r);return new _n({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wE(r);return new _n({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eU(t){var e;if(Fe(t.app))return Promise.reject(st(t));const n=je(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new _n({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await HP(n,{returnSecureToken:!0}),i=await _n._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jh extends Tt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,jh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new jh(e,n,r,i)}}function KP(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jh._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QP(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tU(t,e){const n=J(t);await Ud(!0,n,e);const{providerUserInfo:r}=await o2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=QP(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function ay(t,e,n=!1){const r=await Er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _n._forOperation(t,"link",r)}async function Ud(t,e,n){await tu(e);const r=QP(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";$(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(t,e,n=!1){const{auth:r}=t;if(Fe(r.app))return Promise.reject(st(r));const i="reauthenticate";try{const s=await Er(t,KP(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=Ld(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),_n._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JP(t,e,n=!1){if(Fe(t.app))return Promise.reject(st(t));const r="signIn",i=await KP(t,r,e),s=await _n._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Bd(t,e){return JP(je(t),e)}async function XP(t,e){const n=J(t);return await Ud(!1,n,e.providerId),ay(n,e)}async function ZP(t,e){return YP(J(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nU(t,e){return Cr(t,"POST","/v1/accounts:signInWithCustomToken",ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rU(t,e){if(Fe(t.app))return Promise.reject(st(t));const n=je(t),r=await nU(n,{token:e,returnSecureToken:!0}),i=await _n._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?ly._fromServerResponse(e,n):"totpInfo"in n?uy._fromServerResponse(e,n):ot(e,"internal-error")}}class ly extends Cu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new ly(n)}}class uy extends Cu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new uy(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t,e,n){var r;$(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),$(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&($(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&($(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(t){const e=je(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function iU(t,e,n){const r=je(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&jd(r,i,n),await nu(r,i,"getOobCode",U2)}async function sU(t,e,n){await GP(J(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cy(t),r})}async function oU(t,e){await L2(J(t),{oobCode:e})}async function e1(t,e){const n=J(t),r=await GP(n,{oobCode:e}),i=r.requestType;switch($(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":$(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":$(r.mfaInfo,n,"internal-error");default:$(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Cu._fromServerResponse(je(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function aU(t,e){const{data:n}=await e1(J(t),e);return n.email}async function t1(t,e,n){if(Fe(t.app))return Promise.reject(st(t));const r=je(t),o=await nu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",HP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&cy(t),l}),a=await _n._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function n1(t,e,n){return Fe(t.app)?Promise.reject(st(t)):Bd(J(t),ki.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&cy(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lU(t,e,n){const r=je(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){$(a.handleCodeInApp,r,"argument-error"),a&&jd(r,o,a)}s(i,n),await nu(r,i,"getOobCode",B2)}function uU(t,e){const n=Fd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function cU(t,e,n){if(Fe(t.app))return Promise.reject(st(t));const r=J(t),i=ki.credentialWithLink(e,n||eu());return $(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Bd(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hU(t,e){return $e(t,"POST","/v1/accounts:createAuthUri",ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dU(t,e){const n=ry()?eu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await hU(J(t),r);return i||[]}async function fU(t,e){const n=J(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&jd(n.auth,i,e);const{email:s}=await F2(n.auth,i);s!==t.email&&await t.reload()}async function pU(t,e,n){const r=J(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&jd(r.auth,s,n);const{email:o}=await j2(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mU(t,e){return $e(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gU(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=J(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Er(r,mU(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function _U(t,e){const n=J(t);return Fe(n.auth.app)?Promise.reject(st(n.auth)):r1(n,e,null)}function yU(t,e){return r1(J(t),null,e)}async function r1(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Er(t,O2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vU(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Ld(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new wo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new wU(s,i);case"github.com":return new IU(s,i);case"google.com":return new EU(s,i);case"twitter.com":return new TU(s,i,t.screenName||null);case"custom":case"anonymous":return new wo(s,null);default:return new wo(s,r,i)}}class wo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class i1 extends wo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class wU extends wo{constructor(e,n){super(e,"facebook.com",n)}}class IU extends i1{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class EU extends wo{constructor(e,n){super(e,"google.com",n)}}class TU extends i1{constructor(e,n,r){super(e,"twitter.com",n,r)}}function SU(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:vU(n)}function RU(t,e,n,r){return J(t).onIdTokenChanged(e,n,r)}function AU(t,e,n){return J(t).beforeAuthStateChanged(e,n)}function PU(t){return J(t).signOut()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new Qi("enroll",e,n)}static _fromMfaPendingCredential(e){return new Qi("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return Qi._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Qi._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=je(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Cu._fromServerResponse(r,a));$(i.mfaPendingCredential,r,"internal-error");const o=Qi._fromMfaPendingCredential(i.mfaPendingCredential);return new hy(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const h=await _n._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return $(n.user,r,"internal-error"),_n._forOperation(n.user,n.operationType,c);default:ot(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function kU(t,e){var n;const r=J(t),i=e;return $(e.customData.operationType,r,"argument-error"),$((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),hy._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CU(t,e){return $e(t,"POST","/v2/accounts/mfaEnrollment:start",ze(t,e))}function bU(t,e){return $e(t,"POST","/v2/accounts/mfaEnrollment:finalize",ze(t,e))}function xU(t,e){return $e(t,"POST","/v2/accounts/mfaEnrollment:withdraw",ze(t,e))}class dy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Cu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new dy(e)}async getSession(){return Qi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Er(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Er(this.user,xU(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const sp=new WeakMap;function NU(t){const e=J(t);return sp.has(e)||sp.set(e,dy._fromUser(e)),sp.get(e)}const zh="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zh,"1"),this.storage.removeItem(zh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DU(){const t=Ce();return sy(t)||ha(t)}const OU=1e3,VU=10;class o1 extends s1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DU()&&_2(),this.fallbackToPolling=jP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);g2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,VU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}o1.type="LOCAL";const zd=o1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1 extends s1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}a1.type="SESSION";const yi=a1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LU(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $d(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await LU(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$d.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=bu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return window}function FU(t){Ke().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fy(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function UU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function BU(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jU(){return fy()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="firebaseLocalStorageDb",zU=1,$h="firebaseLocalStorage",u1="fbase_key";class xu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qd(t,e){return t.transaction([$h],e?"readwrite":"readonly").objectStore($h)}function $U(){const t=indexedDB.deleteDatabase(l1);return new xu(t).toPromise()}function Fm(){const t=indexedDB.open(l1,zU);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($h,{keyPath:u1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($h)?e(r):(r.close(),await $U(),e(await Fm()))})})}async function IE(t,e,n){const r=qd(t,!0).put({[u1]:e,value:n});return new xu(r).toPromise()}async function qU(t,e){const n=qd(t,!1).get(e),r=await new xu(n).toPromise();return r===void 0?null:r.value}function EE(t,e){const n=qd(t,!0).delete(e);return new xu(n).toPromise()}const WU=800,GU=3;class c1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Fm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GU)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$d._getInstance(jU()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UU(),!this.activeServiceWorker)return;this.sender=new MU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||BU()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Fm();return await IE(e,zh,"1"),await EE(e,zh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>IE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qU(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>EE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qd(i,!1).getAll();return new xu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}c1.type="LOCAL";const Go=c1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(t,e){return $e(t,"POST","/v2/accounts/mfaSignIn:start",ze(t,e))}function KU(t,e){return $e(t,"POST","/v2/accounts/mfaSignIn:finalize",ze(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QU=500,YU=6e4,wc=1e12;class JU{constructor(e){this.auth=e,this.counter=wc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new XU(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||wc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||wc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||wc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class XU{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;$(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=ZU(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},YU)},QU))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function ZU(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=$P("rcb"),eB=new Au(3e4,6e4);class tB{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ke().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return $(nB(n),e,"argument-error"),this.shouldResolveImmediately(n)&&dE(Ke().grecaptcha)?Promise.resolve(Ke().grecaptcha):new Promise((r,i)=>{const s=Ke().setTimeout(()=>{i(Xe(e,"network-request-failed"))},eB.get());Ke()[op]=()=>{Ke().clearTimeout(s),delete Ke()[op];const a=Ke().grecaptcha;if(!a||!dE(a)){i(Xe(e,"internal-error"));return}const l=a.render;a.render=(c,h)=>{const f=l(c,h);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${S2()}?${Zo({onload:op,render:"explicit",hl:n})}`;oy(o).catch(()=>{clearTimeout(s),i(Xe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ke().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function nB(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class rB{async load(e){return new JU(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h1="recaptcha",iB={theme:"light",type:"image"};let sB=class{constructor(e,n,r=Object.assign({},iB)){this.parameters=r,this.type=h1,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=je(e),this.isInvisible=this.parameters.size==="invisible",$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;$(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new rB:new tB,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){$(!this.parameters.sitekey,this.auth,"argument-error"),$(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ke()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){$(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){$(ry()&&!fy(),this.auth,"internal-error"),await oB(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await r2(this.auth);$(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return $(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function oB(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ns._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function aB(t,e,n){if(Fe(t.app))return Promise.reject(st(t));const r=je(t),i=await Wd(r,e,J(n));return new py(i,s=>Bd(r,s))}async function lB(t,e,n){const r=J(t);await Ud(!1,r,"phone");const i=await Wd(r.auth,e,J(n));return new py(i,s=>XP(r,s))}async function uB(t,e,n){const r=J(t);if(Fe(r.auth.app))return Promise.reject(st(r.auth));const i=await Wd(r.auth,e,J(n));return new py(i,s=>ZP(r,s))}async function Wd(t,e,n){var r;const i=await n.verify();try{$(typeof i=="string",t,"argument-error"),$(n.type===h1,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return $(o.type==="enroll",t,"internal-error"),(await CU(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{$(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return $(a,t,"missing-multi-factor-info"),(await HU(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await W2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function cB(t,e){const n=J(t);if(Fe(n.auth.app))return Promise.reject(st(n.auth));await ay(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ys=class Wc{constructor(e){this.providerId=Wc.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,n){return Wd(this.auth,e,J(n))}static credential(e,n){return ns._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Wc.credentialFromTaggedObject(n)}static credentialFromError(e){return Wc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ns._fromTokenResponse(n,r):null}};ys.PROVIDER_ID="phone";ys.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(t,e){return e?Zt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hB(t){return JP(t.auth,new my(t),t.bypassAuthState)}function dB(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),YP(n,new my(t),t.bypassAuthState)}async function fB(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),ay(n,new my(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hB;case"linkViaPopup":case"linkViaRedirect":return fB;case"reauthViaPopup":case"reauthViaRedirect":return dB;default:ot(this.auth,"internal-error")}}resolve(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pB=new Au(2e3,1e4);async function mB(t,e,n){if(Fe(t.app))return Promise.reject(Xe(t,"operation-not-supported-in-this-environment"));const r=je(t);ca(t,e,br);const i=xs(r,n);return new cr(r,"signInViaPopup",e,i).executeNotNull()}async function gB(t,e,n){const r=J(t);if(Fe(r.auth.app))return Promise.reject(Xe(r.auth,"operation-not-supported-in-this-environment"));ca(r.auth,e,br);const i=xs(r.auth,n);return new cr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function _B(t,e,n){const r=J(t);ca(r.auth,e,br);const i=xs(r.auth,n);return new cr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class cr extends d1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){xn(this.filter.length===1,"Popup operations only handle one event");const e=bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,pB.get())};e()}}cr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yB="pendingRedirect",wl=new Map;class vB extends d1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const r=await wB(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wB(t,e){const n=p1(e),r=f1(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function gy(t,e){return f1(t)._set(p1(e),"true")}function IB(){wl.clear()}function _y(t,e){wl.set(t._key(),e)}function f1(t){return Zt(t._redirectPersistence)}function p1(t){return ts(yB,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EB(t,e,n){return TB(t,e,n)}async function TB(t,e,n){if(Fe(t.app))return Promise.reject(st(t));const r=je(t);ca(t,e,br),await r._initializationPromise;const i=xs(r,n);return await gy(i,r),i._openRedirect(r,e,"signInViaRedirect")}function SB(t,e,n){return RB(t,e,n)}async function RB(t,e,n){const r=J(t);if(ca(r.auth,e,br),Fe(r.auth.app))return Promise.reject(st(r.auth));await r.auth._initializationPromise;const i=xs(r.auth,n);await gy(i,r.auth);const s=await m1(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function AB(t,e,n){return PB(t,e,n)}async function PB(t,e,n){const r=J(t);ca(r.auth,e,br),await r.auth._initializationPromise;const i=xs(r.auth,n);await Ud(!1,r,e.providerId),await gy(i,r.auth);const s=await m1(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function kB(t,e){return await je(t)._initializationPromise,Gd(t,e,!1)}async function Gd(t,e,n=!1){if(Fe(t.app))return Promise.reject(st(t));const r=je(t),i=xs(r,e),o=await new vB(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function m1(t){const e=bu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CB=10*60*1e3;class g1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!bB(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!_1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CB&&this.cachedEventUids.clear(),this.cachedEventUids.has(TE(e))}saveEventToCache(e){this.cachedEventUids.add(TE(e)),this.lastProcessedEventTime=Date.now()}}function TE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function _1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function bB(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function y1(t,e={}){return $e(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xB=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NB=/^https?/;async function DB(t){if(t.config.emulator)return;const{authorizedDomains:e}=await y1(t);for(const n of e)try{if(OB(n))return}catch{}ot(t,"unauthorized-domain")}function OB(t){const e=eu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NB.test(n))return!1;if(xB.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VB=new Au(3e4,6e4);function SE(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LB(t){return new Promise((e,n)=>{var r,i,s;function o(){SE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{SE(),n(Xe(t,"network-request-failed"))},timeout:VB.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)o();else{const a=$P("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(Xe(t,"network-request-failed"))},oy(`${A2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gc=null,e})}let Gc=null;function MB(t){return Gc=Gc||LB(t),Gc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FB=new Au(5e3,15e3),UB="__/auth/iframe",BB="emulator/auth/iframe",jB={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zB=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $B(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?iy(e,BB):`https://${t.config.authDomain}/${UB}`,r={apiKey:e.apiKey,appName:t.name,v:Sr},i=zB.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zo(r).slice(1)}`}async function qB(t){const e=await MB(t),n=Ke().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:$B(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jB,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(t,"network-request-failed"),a=Ke().setTimeout(()=>{s(o)},FB.get());function l(){Ke().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WB={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GB=500,HB=600,KB="_blank",QB="http://localhost";class RE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YB(t,e,n,r=GB,i=HB){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},WB),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ce().toLowerCase();n&&(a=MP(c)?KB:n),LP(c)&&(e=e||QB,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[g,T])=>`${m}${g}=${T},`,"");if(m2(c)&&a!=="_self")return JB(e||"",a),new RE(null);const f=window.open(e||"",a,h);$(f,t,"popup-blocked");try{f.focus()}catch{}return new RE(f)}function JB(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XB="__/auth/handler",ZB="emulator/auth/handler",e4=encodeURIComponent("fac");async function Um(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sr,eventId:i};if(e instanceof br){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",iN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof fa){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${e4}=${encodeURIComponent(l)}`:"";return`${t4(t)}?${Zo(a).slice(1)}${c}`}function t4({config:t}){return t.emulator?iy(t,ZB):`https://${t.authDomain}/${XB}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="webStorageSupport";class n4{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yi,this._completeRedirectFn=Gd,this._overrideRedirectResult=_y}async _openPopup(e,n,r,i){var s;xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Um(e,n,r,eu(),i);return YB(e,o,bu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Um(e,n,r,eu(),i);return FU(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qB(e),r=new g1(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ap,{type:ap},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ap];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DB(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jP()||sy()||ha()}}const v1=n4;class r4{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return zn("unexpected MultiFactorSessionType")}}}class yy extends r4{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new yy(e)}_finalizeEnroll(e,n,r){return bU(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return KU(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class w1{constructor(){}static assertion(e){return yy._fromCredential(e)}}w1.FACTOR_ID="phone";var AE="@firebase/auth",PE="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s4(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function o4(t){vr(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:zP(t)},c=new E2(r,i,s,l);return x2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vr(new gn("auth-internal",e=>{const n=je(e.getProvider("auth").getImmediate());return(r=>new i4(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(AE,PE,s4(t)),tn(AE,PE,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a4=5*60,l4=pS("authIdTokenMaxAge")||a4;let kE=null;const u4=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>l4)return;const i=n==null?void 0:n.token;kE!==i&&(kE=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function c4(t=hd()){const e=ea(t,"auth");if(e.isInitialized())return e.getImmediate();const n=b2(t,{popupRedirectResolver:v1,persistence:[Go,zd,yi]}),r=pS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=u4(s.toString());AU(n,o,()=>o(n.currentUser)),RU(n,a=>o(a))}}const i=hS("auth");return i&&qP(n,`http://${i}`),n}function h4(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}T2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",h4().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});o4("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d4=2e3;async function f4(t,e,n){var r;const{BuildInfo:i}=vs();xn(e.sessionId,"AuthEvent did not contain a session ID");const s=await y4(e.sessionId),o={};return ha()?o.ibi=i.packageName:Pu()?o.apn=i.packageName:ot(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Um(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function p4(t){const{BuildInfo:e}=vs(),n={};ha()?n.iosBundleId=e.packageName:Pu()?n.androidPackageName=e.packageName:ot(t,"operation-not-supported-in-this-environment"),await y1(t,n)}function m4(t){const{cordova:e}=vs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,p2()?"_blank":"_system","location=yes"),n(i)})})}async function g4(t,e,n){const{cordova:r}=vs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Xe(t,"redirect-cancelled-by-user"))},d4))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Pu()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function _4(t){var e,n,r,i,s,o,a,l,c,h;const f=vs();$(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),$(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),$(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),$(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),$(typeof((h=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function y4(t){const e=v4(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function v4(t){if(xn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w4=20;class I4 extends g1{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function E4(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:R4(),postBody:null,tenantId:t.tenantId,error:Xe(t,"no-auth-event")}}function T4(t,e){return Bm()._set(jm(t),e)}async function CE(t){const e=await Bm()._get(jm(t));return e&&await Bm()._remove(jm(t)),e}function S4(t,e){var n,r;const i=P4(e);if(i.includes("/__/auth/callback")){const s=Hc(i),o=s.firebaseError?A4(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Xe(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function R4(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<w4;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Bm(){return Zt(zd)}function jm(t){return ts("authEvent",t.config.apiKey,t.name)}function A4(t){try{return JSON.parse(t)}catch{return null}}function P4(t){const e=Hc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Hc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Hc(i).link||i||r||n||t}function Hc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return oo(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k4=500;class C4{constructor(){this._redirectPersistence=yi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Gd,this._overrideRedirectResult=_y}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new I4(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ot(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){_4(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),IB(),await this._originValidation(e);const o=E4(e,r,i);await T4(e,o);const a=await f4(e,o,n),l=await m4(a);return g4(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=p4(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=vs(),o=setTimeout(async()=>{await CE(e),n.onEvent(bE())},k4),a=async h=>{clearTimeout(o);const f=await CE(e);let m=null;f&&(h!=null&&h.url)&&(m=S4(f,h.url)),n.onEvent(m||bE())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;vs().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&a({url:h}),typeof l=="function")try{l(h)}catch(f){console.error(f)}}}}const b4=C4;function bE(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xe("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x4(t,e){je(t)._logFramework(e)}var N4="@firebase/auth-compat",D4="0.5.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O4=1e3;function Il(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function V4(){return Il()==="http:"||Il()==="https:"}function I1(t=Ce()){return!!((Il()==="file:"||Il()==="ionic:"||Il()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function L4(){return qg()||$g()}function M4(){return yS()&&(document==null?void 0:document.documentMode)===11}function F4(t=Ce()){return/Edge\/\d+/.test(t)}function U4(t=Ce()){return M4()||F4(t)}function E1(){try{const t=self.localStorage,e=bu();if(t)return t.setItem(e,"1"),t.removeItem(e),U4()?jl():!0}catch{return vy()&&jl()}return!1}function vy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function lp(){return(V4()||_S()||I1())&&!L4()&&E1()&&!vy()}function T1(){return I1()&&typeof document<"u"}async function B4(){return T1()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},O4);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function j4(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt={LOCAL:"local",NONE:"none",SESSION:"session"},qa=$,S1="persistence";function z4(t,e){if(qa(Object.values(Jt).includes(e),t,"invalid-persistence-type"),qg()){qa(e!==Jt.SESSION,t,"unsupported-persistence-type");return}if($g()){qa(e===Jt.NONE,t,"unsupported-persistence-type");return}if(vy()){qa(e===Jt.NONE||e===Jt.LOCAL&&jl(),t,"unsupported-persistence-type");return}qa(e===Jt.NONE||E1(),t,"unsupported-persistence-type")}async function zm(t){await t._initializationPromise;const e=R1(),n=ts(S1,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function $4(t,e){const n=R1();if(!n)return[];const r=ts(S1,t,e);switch(n.getItem(r)){case Jt.NONE:return[qo];case Jt.LOCAL:return[Go,yi];case Jt.SESSION:return[yi];default:return[]}}function R1(){var t;try{return((t=j4())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q4=$;class Kr{constructor(){this.browserResolver=Zt(v1),this.cordovaResolver=Zt(b4),this.underlyingResolver=null,this._redirectPersistence=yi,this._completeRedirectFn=Gd,this._overrideRedirectResult=_y}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return T1()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return q4(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await B4();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A1(t){return t.unwrap()}function W4(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G4(t){return P1(t)}function H4(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new K4(t,kU(t,e))}else if(r){const i=P1(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function P1(t){const{_tokenResponse:e}=t instanceof Tt?t.customData:t;if(!e)return null;if(!(t instanceof Tt)&&"temporaryProof"in e&&"phoneNumber"in e)return ys.credentialFromResult(t);const n=e.providerId;if(!n||n===$a.PASSWORD)return null;let r;switch(n){case $a.GOOGLE:r=Mn;break;case $a.FACEBOOK:r=Ln;break;case $a.GITHUB:r=Fn;break;case $a.TWITTER:r=Un;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Wo._create(n,a):Yn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new vo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Tt?r.credentialFromError(t):r.credentialFromResult(t)}function Bt(t,e){return e.catch(n=>{throw n instanceof Tt&&H4(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:G4(n),additionalUserInfo:SU(n),user:hr.getOrCreate(i)}})}async function $m(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Bt(t,n.confirm(r))}}class K4{constructor(e,n){this.resolver=n,this.auth=W4(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Bt(A1(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e){this._delegate=e,this.multiFactor=NU(e)}static getOrCreate(e){return hr.USER_MAP.has(e)||hr.USER_MAP.set(e,new hr(e)),hr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Bt(this.auth,XP(this._delegate,e))}async linkWithPhoneNumber(e,n){return $m(this.auth,lB(this._delegate,e,n))}async linkWithPopup(e){return Bt(this.auth,_B(this._delegate,e,Kr))}async linkWithRedirect(e){return await zm(je(this.auth)),AB(this._delegate,e,Kr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Bt(this.auth,ZP(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return $m(this.auth,uB(this._delegate,e,n))}reauthenticateWithPopup(e){return Bt(this.auth,gB(this._delegate,e,Kr))}async reauthenticateWithRedirect(e){return await zm(je(this.auth)),SB(this._delegate,e,Kr)}sendEmailVerification(e){return fU(this._delegate,e)}async unlink(e){return await tU(this._delegate,e),this}updateEmail(e){return _U(this._delegate,e)}updatePassword(e){return yU(this._delegate,e)}updatePhoneNumber(e){return cB(this._delegate,e)}updateProfile(e){return gU(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return pU(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}hr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=$;class qm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Wa(r,"invalid-api-key",{appName:e.name}),Wa(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Kr:void 0;this._delegate=n.initialize({options:{persistence:Q4(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(HF),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?hr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){qP(this._delegate,e,n)}applyActionCode(e){return oU(this._delegate,e)}checkActionCode(e){return e1(this._delegate,e)}confirmPasswordReset(e,n){return sU(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Bt(this._delegate,t1(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return dU(this._delegate,e)}isSignInWithEmailLink(e){return uU(this._delegate,e)}async getRedirectResult(){Wa(lp(),this._delegate,"operation-not-supported-in-this-environment");const e=await kB(this._delegate,Kr);return e?Bt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){x4(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=xE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=xE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return lU(this._delegate,e,n)}sendPasswordResetEmail(e,n){return iU(this._delegate,e,n||void 0)}async setPersistence(e){z4(this._delegate,e);let n;switch(e){case Jt.SESSION:n=yi;break;case Jt.LOCAL:n=await Zt(Go)._isAvailable()?Go:zd;break;case Jt.NONE:n=qo;break;default:return ot("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Bt(this._delegate,eU(this._delegate))}signInWithCredential(e){return Bt(this._delegate,Bd(this._delegate,e))}signInWithCustomToken(e){return Bt(this._delegate,rU(this._delegate,e))}signInWithEmailAndPassword(e,n){return Bt(this._delegate,n1(this._delegate,e,n))}signInWithEmailLink(e,n){return Bt(this._delegate,cU(this._delegate,e,n))}signInWithPhoneNumber(e,n){return $m(this._delegate,aB(this._delegate,e,n))}async signInWithPopup(e){return Wa(lp(),this._delegate,"operation-not-supported-in-this-environment"),Bt(this._delegate,mB(this._delegate,e,Kr))}async signInWithRedirect(e){return Wa(lp(),this._delegate,"operation-not-supported-in-this-environment"),await zm(this._delegate),EB(this._delegate,e,Kr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return aU(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}qm.Persistence=Jt;function xE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&hr.getOrCreate(o)),error:e,complete:n}}function Q4(t,e){const n=$4(t,e);if(typeof self<"u"&&!n.includes(Go)&&n.push(Go),typeof window<"u")for(const r of[zd,yi])n.includes(r)||n.push(r);return n.includes(qo)||n.push(qo),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(){this.providerId="phone",this._delegate=new ys(A1(bs.auth()))}static credential(e,n){return ys.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}wy.PHONE_SIGN_IN_METHOD=ys.PHONE_SIGN_IN_METHOD;wy.PROVIDER_ID=ys.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y4=$;class J4{constructor(e,n,r=bs.app()){var i;Y4((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new sB(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X4="auth-compat";function Z4(t){t.INTERNAL.registerComponent(new gn(X4,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new qm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:zs.EMAIL_SIGNIN,PASSWORD_RESET:zs.PASSWORD_RESET,RECOVER_EMAIL:zs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:zs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:zs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:zs.VERIFY_EMAIL}},EmailAuthProvider:ki,FacebookAuthProvider:Ln,GithubAuthProvider:Fn,GoogleAuthProvider:Mn,OAuthProvider:vo,SAMLAuthProvider:Bh,PhoneAuthProvider:wy,PhoneMultiFactorGenerator:w1,RecaptchaVerifier:J4,TwitterAuthProvider:Un,Auth:qm,AuthCredential:da,Error:Tt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(N4,D4)}Z4(bs);const ej="@firebase/firestore-compat",tj="0.3.32";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new U("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NE(){if(typeof Uint8Array>"u")throw new U("unimplemented","Uint8Arrays are not available in this environment.")}function DE(){if(!YD())throw new U("unimplemented","Blobs are unavailable in Firestore in this environment.")}let k1=class Wm{constructor(e){this._delegate=e}static fromBase64String(e){return DE(),new Wm(Qn.fromBase64String(e))}static fromUint8Array(e){return NE(),new Wm(Qn.fromUint8Array(e))}toBase64(){return DE(),this._delegate.toBase64()}toUint8Array(){return NE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(t){return nj(t,["next","error","complete"])}function nj(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rj{enableIndexedDbPersistence(e,n){return kL(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return CL(e._delegate)}clearIndexedDbPersistence(e){return bL(e._delegate)}}class C1{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof di||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&bn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){DA(this._delegate,e,n,r)}enableNetwork(){return NL(this._delegate)}disableNetwork(){return DL(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,xA("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return xL(this._delegate)}onSnapshotsInSync(e){return nM(this._delegate,e)}get app(){if(!this._appCompat)throw new U("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ho(this,gl(this._delegate,e))}catch(n){throw xt(n,"collection()","Firestore.collection()")}}doc(e){try{return new hn(this,Lh(this._delegate,e))}catch(n){throw xt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ct(this,TL(this._delegate,e))}catch(n){throw xt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return oM(this._delegate,n=>e(new b1(this,n)))}batch(){return lt(this._delegate),new x1(new iM(this._delegate,e=>Su(this._delegate,e)))}loadBundle(e){return OL(this._delegate,e)}namedQuery(e){return VL(this._delegate,e).then(n=>n?new Ct(this,n):null)}}class Hd extends G_{constructor(e){super(),this.firestore=e}convertBytes(e){return new k1(new Qn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return hn.forKey(n,this.firestore,null)}}function ij(t){_D(t)}class b1{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Hd(e)}get(e){const n=Yi(e);return this._delegate.get(n).then(r=>new iu(this._firestore,new Ir(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Yi(e);return r?(Iy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Yi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Yi(e);return this._delegate.delete(n),this}}class x1{constructor(e){this._delegate=e}set(e,n,r){const i=Yi(e);return r?(Iy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Yi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Yi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ws{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new _l(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new su(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ws.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ws(e,new Hd(e),n),i.set(n,s)),s}}ws.INSTANCES=new WeakMap;class hn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Hd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new U("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new hn(n,new Ne(n._delegate,r,new W(e)))}static forKey(e,n,r){return new hn(n,new Ne(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ho(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ho(this.firestore,gl(this._delegate,e))}catch(n){throw xt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=J(e),e instanceof Ne?MA(this._delegate,e):!1}set(e,n){n=Iy("DocumentReference.set",n);try{return n?eE(this._delegate,e,n):eE(this._delegate,e)}catch(r){throw xt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?tE(this._delegate,e):tE(this._delegate,e,n,...r)}catch(i){throw xt(i,"updateDoc()","DocumentReference.update()")}}delete(){return tM(this._delegate)}onSnapshot(...e){const n=N1(e),r=D1(e,i=>new iu(this.firestore,new Ir(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return eP(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=JL(this._delegate):(e==null?void 0:e.source)==="server"?n=XL(this._delegate):n=YL(this._delegate),n.then(r=>new iu(this.firestore,new Ir(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new hn(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function xt(t,e,n){return t.message=t.message.replace(e,n),t}function N1(t){for(const e of t)if(typeof e=="object"&&!Gm(e))return e;return{}}function D1(t,e){var n,r;let i;return Gm(t[0])?i=t[0]:Gm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class iu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new hn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return XA(this._delegate,e._delegate)}}class su extends iu{data(e){const n=this._delegate.data(e);return this._delegate._converter||yD(n!==void 0),n}}class Ct{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Hd(e)}where(e,n,r){try{return new Ct(this.firestore,rr(this._delegate,Dm(e,n,r)))}catch(i){throw xt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ct(this.firestore,rr(this._delegate,jL(e,n)))}catch(r){throw xt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ct(this.firestore,rr(this._delegate,zL(e)))}catch(n){throw xt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ct(this.firestore,rr(this._delegate,$L(e)))}catch(n){throw xt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ct(this.firestore,rr(this._delegate,qL(...e)))}catch(n){throw xt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ct(this.firestore,rr(this._delegate,WL(...e)))}catch(n){throw xt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ct(this.firestore,rr(this._delegate,GL(...e)))}catch(n){throw xt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ct(this.firestore,rr(this._delegate,HL(...e)))}catch(n){throw xt(n,"endAt()","Query.endAt()")}}isEqual(e){return FA(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=ZL(this._delegate):(e==null?void 0:e.source)==="server"?n=eM(this._delegate):n=ZA(this._delegate),n.then(r=>new Hm(this.firestore,new _i(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=N1(e),r=D1(e,i=>new Hm(this.firestore,new _i(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return eP(this._delegate,n,r)}withConverter(e){return new Ct(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class sj{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new su(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Hm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ct(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new su(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new sj(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new su(this._firestore,r))})}isEqual(e){return XA(this._delegate,e._delegate)}}class Ho extends Ct{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new hn(this.firestore,e):null}doc(e){try{return e===void 0?new hn(this.firestore,Lh(this._delegate)):new hn(this.firestore,Lh(this._delegate,e))}catch(n){throw xt(n,"doc()","CollectionReference.doc()")}}add(e){return Om(this._delegate,e).then(n=>new hn(this.firestore,n))}isEqual(e){return MA(this._delegate,e._delegate)}withConverter(e){return new Ho(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Yi(t){return de(t,Ne)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{constructor(...e){this._delegate=new gi(...e)}static documentId(){return new Ey(Ae.keyField().canonicalString())}isEqual(e){return e=J(e),e instanceof gi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e){this._delegate=e}static serverTimestamp(){const e=lM();return e._methodName="FieldValue.serverTimestamp",new qi(e)}static delete(){const e=aM();return e._methodName="FieldValue.delete",new qi(e)}static arrayUnion(...e){const n=uM(...e);return n._methodName="FieldValue.arrayUnion",new qi(n)}static arrayRemove(...e){const n=cM(...e);return n._methodName="FieldValue.arrayRemove",new qi(n)}static increment(e){const n=hM(e);return n._methodName="FieldValue.increment",new qi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oj={Firestore:C1,GeoPoint:Sd,Timestamp:ke,Blob:k1,Transaction:b1,WriteBatch:x1,DocumentReference:hn,DocumentSnapshot:iu,Query:Ct,QueryDocumentSnapshot:su,QuerySnapshot:Hm,CollectionReference:Ho,FieldPath:Ey,FieldValue:qi,setLogLevel:ij,CACHE_SIZE_UNLIMITED:AL};function aj(t,e){t.INTERNAL.registerComponent(new gn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},oj)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lj(t){aj(t,(e,n)=>new C1(e,n,new rj)),t.registerVersion(ej,tj)}lj(bs);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(e,n,r){this._delegate=e,this.task=n,this.ref=r}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ic(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Ic(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Ic(o,this,this._ref)):s={next:n.next?o=>n.next(new Ic(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class VE{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new pr(e,this._service))}get items(){return this._delegate.items.map(e=>new pr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=DF(this._delegate,e);return new pr(n,this.storage)}get root(){return new pr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new pr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new OE(PF(this._delegate,e,n),this)}putString(e,n=cn.RAW,r){this._throwIfRoot("putString");const i=cP(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new OE(new vP(this._delegate,new Vn(i.data,!0),s),this)}listAll(){return xF(this._delegate).then(e=>new VE(e,this.storage))}list(e){return bF(this._delegate,e||void 0).then(n=>new VE(n,this.storage))}getMetadata(){return kF(this._delegate)}updateMetadata(e){return CF(this._delegate,e)}getDownloadURL(){return RP(this._delegate)}delete(){return this._throwIfRoot("delete"),NF(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw aP(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(LE(e))throw go("ref() expected a child path but got a URL, use refFromURL instead.");return new pr(Lm(this._delegate,e),this)}refFromURL(e){if(!LE(e))throw go("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Et.makeFromUrl(e,this._delegate.host)}catch{throw go("refFromUrl() expected a valid full URL but got an invalid one.")}return new pr(Lm(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){AP(this._delegate,e,n,r)}}function LE(t){return/^[A-Za-z]+:\/\//.test(t)}const uj="@firebase/storage-compat",cj="0.3.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hj="storage-compat";function dj(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new O1(n,r)}function fj(t){const e={TaskState:bt,TaskEvent:hF,StringFormat:cn,Storage:O1,Reference:pr};t.INTERNAL.registerComponent(new gn(hj,dj,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(uj,cj)}fj(bs);const Ty=bs.initializeApp({apiKey:"AIzaSyBHgG4mwWSEUBLPS1p2XFtaC8GwPIv2xN8",authDomain:"arquidiocesishermosillo-776dd.firebaseapp.com",projectId:"arquidiocesishermosillo-776dd",storageBucket:"arquidiocesishermosillo-776dd.appspot.com",messagingSenderId:"767127814821",appId:"1:767127814821:web:6c159d62075bcd1271c34c"}),Km=c4(Ty),up=PL(Ty),pj=OF(Ty);var V1={exports:{}};(()=>{var t={d:(s,o)=>{for(var a in o)t.o(o,a)&&!t.o(s,a)&&Object.defineProperty(s,a,{enumerable:!0,get:o[a]})},o:(s,o)=>Object.prototype.hasOwnProperty.call(s,o),r:s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})}},e={};function n(s,o){for(var a=0;a<o.length;a++){var l=o[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(s,l.key,l)}}t.r(e),t.d(e,{default:()=>i});var r=function(){function s(){(function(l,c){if(!(l instanceof c))throw new TypeError("Cannot call a class as a function")})(this,s)}var o,a;return o=s,a=[{key:"changeHeightWidth",value:function(l,c,h,f,m,g){return h>f&&(l=Math.round(l*f/h),h=f),l>c&&(h=Math.round(h*c/l),l=c),m&&h<m&&(l=Math.round(l*m/h),h=m),g&&l<g&&(h=Math.round(h*g/l),l=g),{height:l,width:h}}},{key:"resizeAndRotateImage",value:function(l,c,h,f,m){var g=arguments.length>5&&arguments[5]!==void 0?arguments[5]:"jpeg",T=arguments.length>6&&arguments[6]!==void 0?arguments[6]:100,R=arguments.length>7&&arguments[7]!==void 0?arguments[7]:0,k=T/100,I=document.createElement("canvas"),v=l.width,w=l.height,C=this.changeHeightWidth(w,h,v,c,f,m);!R||R!==90&&R!==270?(I.width=C.width,I.height=C.height):(I.width=C.height,I.height=C.width),v=C.width,w=C.height;var L=I.getContext("2d");return L.fillStyle="rgba(0, 0, 0, 0)",L.fillRect(0,0,v,w),L.imageSmoothingEnabled&&L.imageSmoothingQuality&&(L.imageSmoothingQuality="high"),R&&(L.rotate(R*Math.PI/180),R===90?L.translate(0,-I.width):R===180?L.translate(-I.width,-I.height):R===270?L.translate(-I.height,0):R!==0&&R!==360||L.translate(0,0)),L.drawImage(l,0,0,v,w),I.toDataURL("image/".concat(g),k)}},{key:"b64toByteArrays",value:function(l,c){for(var h=atob(l.toString().replace(/^data:image\/(png|jpeg|jpg|webp);base64,/,"")),f=[],m=0;m<h.length;m+=512){for(var g=h.slice(m,m+512),T=new Array(g.length),R=0;R<g.length;R++)T[R]=g.charCodeAt(R);var k=new Uint8Array(T);f.push(k)}return f}},{key:"b64toBlob",value:function(l,c){var h=this.b64toByteArrays(l,c);return new Blob(h,{type:c,lastModified:new Date})}},{key:"b64toFile",value:function(l,c,h){var f=this.b64toByteArrays(l,h);return new File(f,c,{type:h,lastModified:new Date})}},{key:"createResizedImage",value:function(l,c,h,f,m,g,T){var R=arguments.length>7&&arguments[7]!==void 0?arguments[7]:"base64",k=arguments.length>8&&arguments[8]!==void 0?arguments[8]:null,I=arguments.length>9&&arguments[9]!==void 0?arguments[9]:null,v=new FileReader;if(!l)throw Error("File Not Found!");if(l.type&&!l.type.includes("image"))throw Error("File Is NOT Image!");v.readAsDataURL(l),v.onload=function(){var w=new Image;w.src=v.result,w.onload=function(){var C=s.resizeAndRotateImage(w,c,h,k,I,f,m,g),L="image/".concat(f);switch(R){case"blob":var M=s.b64toBlob(C,L);T(M);break;case"base64":T(C);break;case"file":var E=l.name.toString().replace(/(png|jpeg|jpg|webp)$/i,"").concat(f.toString()),y=s.b64toFile(C,E,L);T(y);break;default:T(C)}}},v.onerror=function(w){throw Error(w)}}}],a&&n(o,a),s}();const i={imageFileResizer:function(s,o,a,l,c,h,f,m,g,T){return r.createResizedImage(s,o,a,l,c,h,f,m,g,T)}};V1.exports=e})();var mj=V1.exports;const gj=ME(mj);var _j={exports:{}};(function(t,e){(function(n,r){r()})(ka,function(){function n(c,h){return typeof h>"u"?h={autoBom:!1}:typeof h!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),h={autoBom:!h}),h.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(c.type)?new Blob(["\uFEFF",c],{type:c.type}):c}function r(c,h,f){var m=new XMLHttpRequest;m.open("GET",c),m.responseType="blob",m.onload=function(){l(m.response,h,f)},m.onerror=function(){console.error("could not download file")},m.send()}function i(c){var h=new XMLHttpRequest;h.open("HEAD",c,!1);try{h.send()}catch{}return 200<=h.status&&299>=h.status}function s(c){try{c.dispatchEvent(new MouseEvent("click"))}catch{var h=document.createEvent("MouseEvents");h.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),c.dispatchEvent(h)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof ka=="object"&&ka.global===ka?ka:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),l=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(c,h,f){var m=o.URL||o.webkitURL,g=document.createElement("a");h=h||c.name||"download",g.download=h,g.rel="noopener",typeof c=="string"?(g.href=c,g.origin===location.origin?s(g):i(g.href)?r(c,h,f):s(g,g.target="_blank")):(g.href=m.createObjectURL(c),setTimeout(function(){m.revokeObjectURL(g.href)},4e4),setTimeout(function(){s(g)},0))}:"msSaveOrOpenBlob"in navigator?function(c,h,f){if(h=h||c.name||"download",typeof c!="string")navigator.msSaveOrOpenBlob(n(c,f),h);else if(i(c))r(c,h,f);else{var m=document.createElement("a");m.href=c,m.target="_blank",setTimeout(function(){s(m)})}}:function(c,h,f,m){if(m=m||open("","_blank"),m&&(m.document.title=m.document.body.innerText="downloading..."),typeof c=="string")return r(c,h,f);var g=c.type==="application/octet-stream",T=/constructor/i.test(o.HTMLElement)||o.safari,R=/CriOS\/[\d]+/.test(navigator.userAgent);if((R||g&&T||a)&&typeof FileReader<"u"){var k=new FileReader;k.onloadend=function(){var w=k.result;w=R?w:w.replace(/^data:[^;]*;/,"data:attachment/file;"),m?m.location.href=w:location=w,m=null},k.readAsDataURL(c)}else{var I=o.URL||o.webkitURL,v=I.createObjectURL(c);m?m.location=v:location.href=v,m=null,setTimeout(function(){I.revokeObjectURL(v)},4e4)}});o.saveAs=l.saveAs=l,t.exports=l})})(_j);function yj({finderCollection:t,postFile:e,arrParroquiaState:n,setGetArr:r,getArr:i,finderFireBase:s}){const[o,a]=j.useState({nombre:"",fecha:""}),{nombre:l,fecha:c}=o,h=({target:K})=>{C(!0),M(!0);const{name:ne,value:re}=K;a({...o,[ne]:re.replace(/\b[a-z]/g,se=>se.toUpperCase())})},[f,m]=j.useState(void 0),g=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB,T=()=>{if(!g){console.log("This browser doesn't support IndexedDB");return}const K=g.open(t);K.onerror=function(ne){console.error("An error occurred with IndexedDB"),console.error(ne)},K.onupgradeneeded=function(ne){const re=K.result;re.objectStoreNames.contains("userData")||re.createObjectStore("userData",{keyPath:"id"}).createIndex("nombreBuscar","nombre",{unique:!1})},K.onsuccess=function(){let re=K.result.transaction("userData","readwrite"),se=re.objectStore("userData");return f!==void 0&&(se.add({id:Date.now(),nombre:l,fecha:c,img64:f}),localStorage.setItem("64",f),m(void 0)),re.complete}};j.useEffect(()=>{a({nombre:"",fecha:""}),I("")},[t]);const R=K=>new Promise(ne=>{gj.imageFileResizer(K,612,791,"JPEG",80,0,re=>{ne(re),m(re)},"base64")}).catch(ne=>{console.log(ne),console.log("SE MAMARON!!"),alert("El Archivo Cargado No es una Imagen")}),[k,I]=j.useState();console.log(k);const v=async K=>{y(!0);const ne=K.target.files[0],re=await R(ne);fetch(re).then(se=>se.blob()).then(se=>{const vn=new File([se],K.target.files[0].name.split(".")[0]+".jpeg",{type:"image/jpeg"});I(vn)}).catch(se=>{console.log(se),console.log("SE MAMARON onResize!!")});try{let se=!!new Blob}catch(se){alert(se),console.log(se)}},[w,C]=j.useState(!0),[L,M]=j.useState(!0),[E,y]=j.useState(!0),S=()=>{if(l.length<=0){C("El Nombre esta Vacio");return}if(c.length<=0){M("La Fecha esta Vacia");return}if(k===""){y("No Hay Archivo Seleccionado");return}T(),confirm(`Quiere Guardar este Documento de ${t}?`)&&(o.email=localStorage.userEmailLS,o.nombre=l.trim(),e(k,o),setTimeout(()=>{alert("Documento Guardado")},2e3)),a({nombre:"",fecha:""}),I("")},[A,b]=j.useState(!0),[x,P]=j.useState(""),Ft=()=>{if(x.length<=0){b("Campo de Busqueda Vacio  ✘ ");return}s(x),r(!i),setTimeout(()=>{b(!1)},300),n.length>=1?b(!1):b("Buscando...")},Jn=({target:K})=>{const{name:ne,value:re}=K;P(re.replace(/\b[a-z]/g,se=>se.toUpperCase()))},Ci=()=>new Date().toLocaleString().slice(3,9),yn=()=>{const K=`data:text/txt;chatset=utf-8,${encodeURIComponent(JSON.stringify(allUsers))}`,ne=document.createElement("a");ne.href=K,ne.download=`${Ci()}-${t}-Respaldo.txt`,ne.click()},[H,ee]=j.useState(!0);return F.jsx(F.Fragment,{children:localStorage.getItem("userEmailLS")!==null&&F.jsxs(F.Fragment,{children:[F.jsxs("div",{className:"ButtonsNuevoBuscar",children:[F.jsxs("button",{onClick:()=>ee(!0),children:["  Nuevo ",t," "]}),F.jsxs("button",{onClick:()=>ee(!1),children:[" Buscar  "," "]})]}),H?F.jsxs("div",{className:"formInfoToSave",children:[F.jsxs("p",{children:["Respaldar Acta de ",t]}),F.jsx("div",{className:"empty",children:w}),F.jsx("input",{type:"text",name:"nombre",placeholder:"Nombre...",value:l,onChange:K=>h(K)}),F.jsx("div",{className:"empty",children:L}),F.jsx("input",{type:"date",name:"fecha",value:c,onChange:K=>h(K)}),F.jsx("div",{className:"empty",children:E}),F.jsx("input",{className:"fileImg",type:"file",onChange:K=>v(K)}),F.jsx("button",{className:"button-primary",onClick:S,children:"GUARDAR"}),F.jsx("button",{onClick:yn,children:"Guardar Respaldo Mensual"})]}):F.jsxs("div",{className:"formInfoToFind",children:[F.jsxs("div",{children:[F.jsxs("label",{htmlFor:"avatar1",children:["Buscar ",t," con Nombre:"]}),F.jsx("input",{type:"search",id:"avatar1",className:"w-80",value:x,onChange:K=>Jn(K),placeholder:"Nombre Completo..."}),F.jsxs("button",{className:"btn-buscar button-primary",onClick:Ft,children:[" ",F.jsx("span",{className:"lupita",children:"⌕"})]})]}),F.jsx("p",{className:A?"d-none":"cerrar",onClick:()=>b(!A),children:"Cerrar Busqueda ✘"}),F.jsx("p",{className:A?"no-encontrado":"d-none",onClick:()=>b(!0),children:A}),F.jsx("div",{className:A?"d-none":"w-100",children:n.map((K,ne)=>F.jsxs("div",{children:[F.jsx("hr",{}),F.jsxs("p",{children:[F.jsx("span",{children:"Nombre:"})," ",K.nombre]}),F.jsxs("p",{children:[F.jsx("span",{children:"Fecha:"})," ",K.fecha]}),F.jsxs("p",{children:[F.jsx("span",{children:"Documento:"})," ",K.fileName]}),F.jsx("a",{className:"doc",href:K.fileUrl,target:"_blanck",children:" Abrir Documento"}),F.jsx("hr",{})]},ne))})]})]})})}const vj="https://xipeRafa.github.io/Respalder/assets/abc-EqxUIFmM.jpeg",wj="_loginContainer_1jqwq_1",Ij="_borderB_1jqwq_63",Ej="_borderBgray_1jqwq_71",Tj="_inputBG_1jqwq_81",Sj="_colorRed_1jqwq_103",Rj="_hello_1jqwq_107",Aj="_alabado_1jqwq_117",En={loginContainer:wj,borderB:Ij,borderBgray:Ej,inputBG:Tj,colorRed:Sj,hello:Rj,alabado:Aj},Pj=()=>{const t=async(r,i,s)=>{try{await t1(r,i,s),e(r,i,s),localStorage.setItem("userEmailLS",i)}catch(o){console.error("code.error",o.code),console.log(o.message);const a={"auth/email-already-in-use":()=>alert("El Correo ya esta en Uso."),"auth/operation-not-allowed":()=>alert("Operacion No Permitida."),"auth/weak-password":()=>alert("La Contraseña es muy débil."),"auth/invalid-email":()=>alert("El Correo No es Valido.")};(c=>{a[c]()})(o.code),location.reload()}},e=(r,i,s)=>{n1(r,i,s).then(o=>{const a=o.user;localStorage.setItem("userEmailLS",a.email),location.reload()}).catch(o=>{console.log(o.code),console.log(o.message);const a={"auth/operation-not-allowed":()=>alert("Operacion No Permitida."),"auth/invalid-credential":()=>alert("Contraseña o Correo son Incorrrectos."),"auth/invalid-email":()=>alert("El Correo No es Valido")};(c=>{a[c]()})(o.code),location.reload()})};return[t,e,()=>{PU(Km),localStorage.removeItem("userEmailLS"),localStorage.removeItem("userName"),location.reload()}]};function kj({saveCat:t}){const[e,n,r]=Pj(),[i,s]=j.useState(""),[o,a]=j.useState({name:"",email:"",password:"",password2:""}),{name:l,email:c,password:h,password2:f}=o,m=I=>{s("");const{name:v,value:w}=I.target;a({...o,[v]:w})},g=()=>{if(s(""),l.length<1){s("Nombre No Escrito");return}if(c.length<1){s("Correo No Escrito");return}if(h!==f){s("Passwords No son Iguales");return}if(h.length<6){s("La Clave es muy Corta Use 6 Caracteres Minimo");return}e(Km,c,h),t(o),localStorage.setItem("userName",l)},T=()=>{if(s(""),c.length<1){s("Correo No Escrito");return}if(h.length<6){s("Claves es muy corta Use 6 caracteres Minimo");return}n(Km,c,h)},[R,k]=j.useState(!0);return F.jsx(F.Fragment,{children:localStorage.getItem("userEmailLS")===null?F.jsxs("div",{className:En.loginContainer,children:[F.jsx("div",{children:F.jsx("img",{src:vj})}),F.jsxs("div",{children:[F.jsxs("div",{children:[F.jsx("div",{className:R?En.borderB:En.borderBgray,onClick:()=>{k(!0),s(""),a({name:"",email:"",password:"",password2:""})},children:"REGISTRO"}),F.jsx("div",{className:R?En.borderBgray:En.borderB,onClick:()=>{k(!1),s(""),a({name:"",email:"",password:"",password2:""})},children:"ENTRAR"})]}),F.jsx("div",{children:R?F.jsxs("div",{className:En.inputBG,children:[F.jsx("div",{children:F.jsx("input",{type:"text",name:"name",value:l,onChange:I=>m(I),placeholder:"Nombre"})}),F.jsx("div",{children:F.jsx("input",{type:"email",name:"email",value:c,onChange:I=>m(I),placeholder:"Correo"})}),F.jsx("div",{children:F.jsx("input",{type:"password",name:"password",value:h,onChange:I=>m(I),placeholder:"Password"})}),F.jsx("div",{children:F.jsx("input",{type:"password",name:"password2",value:f,onChange:I=>m(I),placeholder:"Confirmar Password"})}),F.jsx("div",{children:F.jsx("button",{onClick:()=>g(),children:"ENVIAR"})}),F.jsx("span",{className:En.colorRed,children:i})]}):F.jsxs("div",{className:En.inputBG,children:[F.jsx("div",{children:F.jsx("input",{type:"email",name:"email",value:c,onChange:I=>m(I),placeholder:"Correo"})}),F.jsx("div",{children:F.jsx("input",{type:"password",name:"password",value:h,onChange:I=>m(I),placeholder:"Password"})}),F.jsx("div",{children:F.jsx("button",{onClick:()=>T(),children:"ENTRAR"})}),F.jsx("span",{className:En.colorRed,children:i})]})})]})]}):F.jsxs("div",{children:[F.jsxs("div",{className:En.hello,children:[F.jsx("span",{children:localStorage.userEmailLS.split("@")[0]}),F.jsx("button",{onClick:()=>r(),children:"SALIR"})]}),F.jsx("h1",{className:En.alabado,children:"¡ALABADO SEA JESUCRISTO!"}),F.jsxs("h4",{children:[F.jsx("b",{children:"¡Hola!"})," Bienvenido ",localStorage.userName," Seleccioná una Opción en el Menú"]})]})})}function Cj(){const t=()=>{const T={weekday:"long",year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return new Date().toLocaleString("es-ES",T)},[e,n]=j.useState([]),[r,i]=j.useState([]),[s,o]=j.useState([]),[a,l]=j.useState([]),[c,h]=j.useState([]),f=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB||window.shimIndexedDB,m=()=>{const T=f.open("Bautismo");T.onsuccess=()=>{const w=T.result;let C=w.transaction("userData","readonly");const M=C.objectStore("userData").getAll();M.onsuccess=E=>{n(E.srcElement.result)},C.oncomplete=function(){w.close()}};const R=f.open("Comunion");R.onsuccess=()=>{const w=R.result;let C=w.transaction("userData","readonly");const M=C.objectStore("userData").getAll();M.onsuccess=E=>{i(E.srcElement.result)},C.oncomplete=function(){w.close()}};const k=f.open("Confirmacion");k.onsuccess=()=>{const w=k.result;let C=w.transaction("userData","readonly");const M=C.objectStore("userData").getAll();M.onsuccess=E=>{o(E.srcElement.result)},C.oncomplete=function(){w.close()}};const I=f.open("Matrimonio");I.onsuccess=()=>{const w=I.result;let C=w.transaction("userData","readonly");const M=C.objectStore("userData").getAll();M.onsuccess=E=>{l(E.srcElement.result)},C.oncomplete=function(){w.close()}};const v=f.open("Defuncion");v.onsuccess=()=>{const w=v.result;let C=w.transaction("userData","readonly");const M=C.objectStore("userData").getAll();M.onsuccess=E=>{h(E.srcElement.result)},C.oncomplete=function(){w.close()}}},g=()=>{const T=()=>new Date().toLocaleString().slice(3,9),R=`data:text/txt;chatset=utf-8,
                ${encodeURIComponent(JSON.stringify([e,r,s,a,c].flat()))}`,k=document.createElement("a");k.href=R,k.download=`${T()}-Respaldo.txt`,k.click()};return F.jsxs(F.Fragment,{children:[F.jsx("p",{className:"red",children:t()}),F.jsx("button",{onClick:()=>m(),children:" Guardar Respaldo Mensual "}),F.jsx("button",{className:c.length===0?"d-none":"ml-2",onClick:()=>g(),children:" Descargar "})]})}function bj(){const[t,e]=j.useState(!0),n=window.innerWidth,r=()=>{n<999&&e(!0)},i=()=>{const s={weekday:"long",year:"numeric",month:"long",day:"numeric"};return new Date().toLocaleString("es-ES",s)};return F.jsx("div",{className:"navBar3",children:localStorage.getItem("userEmailLS")!==null&&F.jsxs(F.Fragment,{children:[F.jsxs("div",{onClick:()=>e(!t),className:"hamburger",children:[F.jsxs("div",{className:"menu-bar",children:[F.jsx("div",{className:"uno"}),F.jsx("div",{className:"dos"}),F.jsx("div",{className:"tres"})]}),F.jsx("p",{className:"menuIcons",children:t?F.jsx("b",{className:"menuIcon",children:"MENU"}):F.jsx("b",{className:"menuIconX",children:"✘"})})]}),F.jsxs("div",{className:t?"menu3 ":"menu3 display",onClick:r,children:[F.jsx(Oi,{to:"/Respalder/",className:"no-bg",children:"Mi Parroquia"}),F.jsx(Oi,{to:"/Respalder/bautismos",children:"Bautismos"}),F.jsx(Oi,{to:"/Respalder/comuniones",children:" Comuniones"}),F.jsx(Oi,{to:"/Respalder/confirmaciones",className:"ls",children:" Confirmaciones "}),F.jsx(Oi,{to:"/Respalder/matrimonios",children:" Matrimonios"}),F.jsx(Oi,{to:"/Respalder/defunciones",children:" Defunciones"}),F.jsx(Oi,{to:"/Respalder/Publicidad",className:"red",children:i()})]}),"   "]})})}function xj(){function t(g){let T=g.charAt(0).toUpperCase()+g.slice(1);return g.slice(-2,-1)==="e"?T.slice(0,-2):T.slice(0,-1)}const e=Xo();let n=e.pathname.split("/")[2],r=t(n||"a");const[i,s]=j.useState(""),[o,a]=j.useState([]),[l,c]=j.useState(!1);console.log(o),j.useEffect(()=>{const g=rr(gl(up,n||"bautismos"),Dm("email","==",localStorage.getItem("userEmailLS")),Dm("nombre","==",i.trim()));ZA(g).then(T=>{a(T.docs.map(R=>({...R.data(),id:R.id})))}).catch(T=>{console.error(T)})},[l]);const h=g=>{s(g)},f=(g,T)=>{console.log(g);const R=gl(up,n||"bautismos"),k=Lm(pj,`${n}-Files/${Date.now()}/${g==null?void 0:g.name}`);AF(k,g).then(()=>{RP(k).then(I=>{T.fileName=g.name,T.fileUrl=I,Om(R,T)})}).catch(I=>{console.log("postFile Error, App,jsx"),console.log(I)})},m=g=>{delete g.password,delete g.name;const T=gl(up,"cat");Om(T,g).then(R=>{console.log(R)}).catch(R=>{console.log("saveCat Error, App.jsx"),console.log(R)})};return F.jsxs("div",{className:localStorage.getItem("userEmailLS")!==null?"containerApp":"containerApp2",children:[F.jsx(bj,{}),e.pathname=="/Respalder/"&&localStorage.getItem("userEmailLS")!==null?"":F.jsx("h3",{className:localStorage.getItem("userEmailLS")!==null?"registroParroquial-h3":"registroParroquial-h3-2",children:"RESPALDER PARROQUIAL"}),F.jsxs(Cx,{children:[F.jsx(Oc,{path:"/Respalder/",element:F.jsx(kj,{saveCat:m})}),F.jsx(Oc,{path:"/Respalder/publicidad",element:F.jsx(Cj,{})}),F.jsx(Oc,{path:"*",element:e.pathname!=="/Respalder/"&&localStorage.getItem("userEmailLS")!==null&&F.jsx(yj,{finderCollection:r,finderFireBase:h,postFile:f,arrParroquiaState:o,setGetArr:c,getArr:l})})]})]})}cp.createRoot(document.getElementById("root")).render(F.jsx(Mx,{children:F.jsx(xj,{})}));
