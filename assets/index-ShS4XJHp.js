function h1(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function d1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ME={exports:{}},$h={},FE={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou=Symbol.for("react.element"),f1=Symbol.for("react.portal"),p1=Symbol.for("react.fragment"),m1=Symbol.for("react.strict_mode"),g1=Symbol.for("react.profiler"),_1=Symbol.for("react.provider"),y1=Symbol.for("react.context"),v1=Symbol.for("react.forward_ref"),w1=Symbol.for("react.suspense"),I1=Symbol.for("react.memo"),E1=Symbol.for("react.lazy"),Ev=Symbol.iterator;function T1(t){return t===null||typeof t!="object"?null:(t=Ev&&t[Ev]||t["@@iterator"],typeof t=="function"?t:null)}var UE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},jE=Object.assign,BE={};function Ko(t,e,n){this.props=t,this.context=e,this.refs=BE,this.updater=n||UE}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zE(){}zE.prototype=Ko.prototype;function Km(t,e,n){this.props=t,this.context=e,this.refs=BE,this.updater=n||UE}var Qm=Km.prototype=new zE;Qm.constructor=Km;jE(Qm,Ko.prototype);Qm.isPureReactComponent=!0;var Tv=Array.isArray,$E=Object.prototype.hasOwnProperty,Ym={current:null},qE={key:!0,ref:!0,__self:!0,__source:!0};function GE(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$E.call(e,r)&&!qE.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:ou,type:t,key:s,ref:o,props:i,_owner:Ym.current}}function S1(t,e){return{$$typeof:ou,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jm(t){return typeof t=="object"&&t!==null&&t.$$typeof===ou}function R1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sv=/\/+/g;function _f(t,e){return typeof t=="object"&&t!==null&&t.key!=null?R1(""+t.key):e.toString(36)}function Ec(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ou:case f1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+_f(o,0):r,Tv(i)?(n="",t!=null&&(n=t.replace(Sv,"$&/")+"/"),Ec(i,e,n,"",function(c){return c})):i!=null&&(Jm(i)&&(i=S1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Sv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Tv(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+_f(s,a);o+=Ec(s,e,n,l,i)}else if(l=T1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+_f(s,a++),o+=Ec(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qu(t,e,n){if(t==null)return t;var r=[],i=0;return Ec(t,r,"","",function(s){return e.call(n,s,i++)}),r}function A1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Lt={current:null},Tc={transition:null},P1={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:Tc,ReactCurrentOwner:Ym};function WE(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Qu,forEach:function(t,e,n){Qu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Qu(t,function(){e++}),e},toArray:function(t){return Qu(t,function(e){return e})||[]},only:function(t){if(!Jm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Ko;ie.Fragment=p1;ie.Profiler=g1;ie.PureComponent=Km;ie.StrictMode=m1;ie.Suspense=w1;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P1;ie.act=WE;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=jE({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ym.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$E.call(e,l)&&!qE.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ou,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:y1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_1,_context:t},t.Consumer=t};ie.createElement=GE;ie.createFactory=function(t){var e=GE.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:v1,render:t}};ie.isValidElement=Jm;ie.lazy=function(t){return{$$typeof:E1,_payload:{_status:-1,_result:t},_init:A1}};ie.memo=function(t,e){return{$$typeof:I1,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=Tc.transition;Tc.transition={};try{t()}finally{Tc.transition=e}};ie.unstable_act=WE;ie.useCallback=function(t,e){return Lt.current.useCallback(t,e)};ie.useContext=function(t){return Lt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Lt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Lt.current.useEffect(t,e)};ie.useId=function(){return Lt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Lt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Lt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Lt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Lt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Lt.current.useReducer(t,e,n)};ie.useRef=function(t){return Lt.current.useRef(t)};ie.useState=function(t){return Lt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Lt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Lt.current.useTransition()};ie.version="18.3.1";FE.exports=ie;var U=FE.exports;const C1=d1(U),k1=h1({__proto__:null,default:C1},[U]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b1=U,x1=Symbol.for("react.element"),N1=Symbol.for("react.fragment"),D1=Object.prototype.hasOwnProperty,O1=b1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V1={key:!0,ref:!0,__self:!0,__source:!0};function HE(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)D1.call(e,r)&&!V1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:x1,type:t,key:s,ref:o,props:i,_owner:O1.current}}$h.Fragment=N1;$h.jsx=HE;$h.jsxs=HE;ME.exports=$h;var I=ME.exports,up={},KE={exports:{}},rn={},QE={exports:{}},YE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(H,Z){var ne=H.length;H.push(Z);e:for(;0<ne;){var Ce=ne-1>>>1,pe=H[Ce];if(0<i(pe,Z))H[Ce]=Z,H[ne]=pe,ne=Ce;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var Z=H[0],ne=H.pop();if(ne!==Z){H[0]=ne;e:for(var Ce=0,pe=H.length,$e=pe>>>1;Ce<$e;){var Yn=2*(Ce+1)-1,Jn=H[Yn],Xn=Yn+1,Zn=H[Xn];if(0>i(Jn,ne))Xn<pe&&0>i(Zn,Jn)?(H[Ce]=Zn,H[Xn]=ne,Ce=Xn):(H[Ce]=Jn,H[Yn]=ne,Ce=Yn);else if(Xn<pe&&0>i(Zn,ne))H[Ce]=Zn,H[Xn]=ne,Ce=Xn;else break e}}return Z}function i(H,Z){var ne=H.sortIndex-Z.sortIndex;return ne!==0?ne:H.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],h=1,f=null,m=3,v=!1,R=!1,P=!1,b=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(H){for(var Z=n(c);Z!==null;){if(Z.callback===null)r(c);else if(Z.startTime<=H)r(c),Z.sortIndex=Z.expirationTime,e(l,Z);else break;Z=n(c)}}function x(H){if(P=!1,T(H),!R)if(n(l)!==null)R=!0,pa(F);else{var Z=n(c);Z!==null&&Qn(x,Z.startTime-H)}}function F(H,Z){R=!1,P&&(P=!1,E(_),_=-1),v=!0;var ne=m;try{for(T(Z),f=n(l);f!==null&&(!(f.expirationTime>Z)||H&&!k());){var Ce=f.callback;if(typeof Ce=="function"){f.callback=null,m=f.priorityLevel;var pe=Ce(f.expirationTime<=Z);Z=t.unstable_now(),typeof pe=="function"?f.callback=pe:f===n(l)&&r(l),T(Z)}else r(l);f=n(l)}if(f!==null)var $e=!0;else{var Yn=n(c);Yn!==null&&Qn(x,Yn.startTime-Z),$e=!1}return $e}finally{f=null,m=ne,v=!1}}var M=!1,A=null,_=-1,g=5,S=-1;function k(){return!(t.unstable_now()-S<g)}function N(){if(A!==null){var H=t.unstable_now();S=H;var Z=!0;try{Z=A(!0,H)}finally{Z?C():(M=!1,A=null)}}else M=!1}var C;if(typeof w=="function")C=function(){w(N)};else if(typeof MessageChannel<"u"){var on=new MessageChannel,ki=on.port2;on.port1.onmessage=N,C=function(){ki.postMessage(null)}}else C=function(){b(N,0)};function pa(H){A=H,M||(M=!0,C())}function Qn(H,Z){_=b(function(){H(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(H){H.callback=null},t.unstable_continueExecution=function(){R||v||(R=!0,pa(F))},t.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<H?Math.floor(1e3/H):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(H){switch(m){case 1:case 2:case 3:var Z=3;break;default:Z=m}var ne=m;m=Z;try{return H()}finally{m=ne}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(H,Z){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var ne=m;m=H;try{return Z()}finally{m=ne}},t.unstable_scheduleCallback=function(H,Z,ne){var Ce=t.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?Ce+ne:Ce):ne=Ce,H){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=ne+pe,H={id:h++,callback:Z,priorityLevel:H,startTime:ne,expirationTime:pe,sortIndex:-1},ne>Ce?(H.sortIndex=ne,e(c,H),n(l)===null&&H===n(c)&&(P?(E(_),_=-1):P=!0,Qn(x,ne-Ce))):(H.sortIndex=pe,e(l,H),R||v||(R=!0,pa(F))),H},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(H){var Z=m;return function(){var ne=m;m=Z;try{return H.apply(this,arguments)}finally{m=ne}}}})(YE);QE.exports=YE;var L1=QE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M1=U,tn=L1;function z(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var JE=new Set,El={};function Is(t,e){Io(t,e),Io(t+"Capture",e)}function Io(t,e){for(El[t]=e,t=0;t<e.length;t++)JE.add(e[t])}var mr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cp=Object.prototype.hasOwnProperty,F1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rv={},Av={};function U1(t){return cp.call(Av,t)?!0:cp.call(Rv,t)?!1:F1.test(t)?Av[t]=!0:(Rv[t]=!0,!1)}function j1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function B1(t,e,n,r){if(e===null||typeof e>"u"||j1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new Mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new Mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new Mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new Mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new Mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new Mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new Mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new Mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new Mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Xm=/[\-:]([a-z])/g;function Zm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Xm,Zm);pt[e]=new Mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Xm,Zm);pt[e]=new Mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Xm,Zm);pt[e]=new Mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new Mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function eg(t,e,n,r){var i=pt.hasOwnProperty(e)?pt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(B1(e,n,i,r)&&(n=null),r||i===null?U1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Tr=M1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yu=Symbol.for("react.element"),Ks=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),tg=Symbol.for("react.strict_mode"),hp=Symbol.for("react.profiler"),XE=Symbol.for("react.provider"),ZE=Symbol.for("react.context"),ng=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),fp=Symbol.for("react.suspense_list"),rg=Symbol.for("react.memo"),Fr=Symbol.for("react.lazy"),eT=Symbol.for("react.offscreen"),Pv=Symbol.iterator;function ka(t){return t===null||typeof t!="object"?null:(t=Pv&&t[Pv]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,yf;function Wa(t){if(yf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yf=e&&e[1]||""}return`
`+yf+t}var vf=!1;function wf(t,e){if(!t||vf)return"";vf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{vf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Wa(t):""}function z1(t){switch(t.tag){case 5:return Wa(t.type);case 16:return Wa("Lazy");case 13:return Wa("Suspense");case 19:return Wa("SuspenseList");case 0:case 2:case 15:return t=wf(t.type,!1),t;case 11:return t=wf(t.type.render,!1),t;case 1:return t=wf(t.type,!0),t;default:return""}}function pp(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qs:return"Fragment";case Ks:return"Portal";case hp:return"Profiler";case tg:return"StrictMode";case dp:return"Suspense";case fp:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ZE:return(t.displayName||"Context")+".Consumer";case XE:return(t._context.displayName||"Context")+".Provider";case ng:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rg:return e=t.displayName||null,e!==null?e:pp(t.type)||"Memo";case Fr:e=t._payload,t=t._init;try{return pp(t(e))}catch{}}return null}function $1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pp(e);case 8:return e===tg?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function oi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function tT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function q1(t){var e=tT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ju(t){t._valueTracker||(t._valueTracker=q1(t))}function nT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=tT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Hc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function mp(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=oi(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rT(t,e){e=e.checked,e!=null&&eg(t,"checked",e,!1)}function gp(t,e){rT(t,e);var n=oi(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?_p(t,e.type,n):e.hasOwnProperty("defaultValue")&&_p(t,e.type,oi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function _p(t,e,n){(e!=="number"||Hc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ha=Array.isArray;function ao(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+oi(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yp(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(z(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(z(92));if(Ha(n)){if(1<n.length)throw Error(z(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:oi(n)}}function iT(t,e){var n=oi(e.value),r=oi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vp(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xu,oT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xu=Xu||document.createElement("div"),Xu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Tl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var nl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G1=["Webkit","ms","Moz","O"];Object.keys(nl).forEach(function(t){G1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),nl[e]=nl[t]})});function aT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||nl.hasOwnProperty(t)&&nl[t]?(""+e).trim():e+"px"}function lT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=aT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var W1=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wp(t,e){if(e){if(W1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(z(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(z(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(z(61))}if(e.style!=null&&typeof e.style!="object")throw Error(z(62))}}function Ip(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ep=null;function ig(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tp=null,lo=null,uo=null;function Nv(t){if(t=uu(t)){if(typeof Tp!="function")throw Error(z(280));var e=t.stateNode;e&&(e=Kh(e),Tp(t.stateNode,t.type,e))}}function uT(t){lo?uo?uo.push(t):uo=[t]:lo=t}function cT(){if(lo){var t=lo,e=uo;if(uo=lo=null,Nv(t),e)for(t=0;t<e.length;t++)Nv(e[t])}}function hT(t,e){return t(e)}function dT(){}var If=!1;function fT(t,e,n){if(If)return t(e,n);If=!0;try{return hT(t,e,n)}finally{If=!1,(lo!==null||uo!==null)&&(dT(),cT())}}function Sl(t,e){var n=t.stateNode;if(n===null)return null;var r=Kh(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(z(231,e,typeof n));return n}var Sp=!1;if(mr)try{var ba={};Object.defineProperty(ba,"passive",{get:function(){Sp=!0}}),window.addEventListener("test",ba,ba),window.removeEventListener("test",ba,ba)}catch{Sp=!1}function H1(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var rl=!1,Kc=null,Qc=!1,Rp=null,K1={onError:function(t){rl=!0,Kc=t}};function Q1(t,e,n,r,i,s,o,a,l){rl=!1,Kc=null,H1.apply(K1,arguments)}function Y1(t,e,n,r,i,s,o,a,l){if(Q1.apply(this,arguments),rl){if(rl){var c=Kc;rl=!1,Kc=null}else throw Error(z(198));Qc||(Qc=!0,Rp=c)}}function Es(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function pT(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dv(t){if(Es(t)!==t)throw Error(z(188))}function J1(t){var e=t.alternate;if(!e){if(e=Es(t),e===null)throw Error(z(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dv(i),t;if(s===r)return Dv(i),e;s=s.sibling}throw Error(z(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(z(189))}}if(n.alternate!==r)throw Error(z(190))}if(n.tag!==3)throw Error(z(188));return n.stateNode.current===n?t:e}function mT(t){return t=J1(t),t!==null?gT(t):null}function gT(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=gT(t);if(e!==null)return e;t=t.sibling}return null}var _T=tn.unstable_scheduleCallback,Ov=tn.unstable_cancelCallback,X1=tn.unstable_shouldYield,Z1=tn.unstable_requestPaint,qe=tn.unstable_now,ek=tn.unstable_getCurrentPriorityLevel,sg=tn.unstable_ImmediatePriority,yT=tn.unstable_UserBlockingPriority,Yc=tn.unstable_NormalPriority,tk=tn.unstable_LowPriority,vT=tn.unstable_IdlePriority,qh=null,Bn=null;function nk(t){if(Bn&&typeof Bn.onCommitFiberRoot=="function")try{Bn.onCommitFiberRoot(qh,t,void 0,(t.current.flags&128)===128)}catch{}}var Rn=Math.clz32?Math.clz32:sk,rk=Math.log,ik=Math.LN2;function sk(t){return t>>>=0,t===0?32:31-(rk(t)/ik|0)|0}var Zu=64,ec=4194304;function Ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jc(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ka(a):(s&=o,s!==0&&(r=Ka(s)))}else o=n&~i,o!==0?r=Ka(o):s!==0&&(r=Ka(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Rn(e),i=1<<n,r|=t[n],e&=~i;return r}function ok(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ak(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Rn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=ok(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ap(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wT(){var t=Zu;return Zu<<=1,!(Zu&4194240)&&(Zu=64),t}function Ef(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function au(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Rn(e),t[e]=n}function lk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Rn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function og(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Rn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var de=0;function IT(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ET,ag,TT,ST,RT,Pp=!1,tc=[],Qr=null,Yr=null,Jr=null,Rl=new Map,Al=new Map,jr=[],uk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vv(t,e){switch(t){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":Yr=null;break;case"mouseover":case"mouseout":Jr=null;break;case"pointerover":case"pointerout":Rl.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Al.delete(e.pointerId)}}function xa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=uu(e),e!==null&&ag(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ck(t,e,n,r,i){switch(e){case"focusin":return Qr=xa(Qr,t,e,n,r,i),!0;case"dragenter":return Yr=xa(Yr,t,e,n,r,i),!0;case"mouseover":return Jr=xa(Jr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Rl.set(s,xa(Rl.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Al.set(s,xa(Al.get(s)||null,t,e,n,r,i)),!0}return!1}function AT(t){var e=Gi(t.target);if(e!==null){var n=Es(e);if(n!==null){if(e=n.tag,e===13){if(e=pT(n),e!==null){t.blockedOn=e,RT(t.priority,function(){TT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Cp(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ep=r,n.target.dispatchEvent(r),Ep=null}else return e=uu(n),e!==null&&ag(e),t.blockedOn=n,!1;e.shift()}return!0}function Lv(t,e,n){Sc(t)&&n.delete(e)}function hk(){Pp=!1,Qr!==null&&Sc(Qr)&&(Qr=null),Yr!==null&&Sc(Yr)&&(Yr=null),Jr!==null&&Sc(Jr)&&(Jr=null),Rl.forEach(Lv),Al.forEach(Lv)}function Na(t,e){t.blockedOn===e&&(t.blockedOn=null,Pp||(Pp=!0,tn.unstable_scheduleCallback(tn.unstable_NormalPriority,hk)))}function Pl(t){function e(i){return Na(i,t)}if(0<tc.length){Na(tc[0],t);for(var n=1;n<tc.length;n++){var r=tc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Qr!==null&&Na(Qr,t),Yr!==null&&Na(Yr,t),Jr!==null&&Na(Jr,t),Rl.forEach(e),Al.forEach(e),n=0;n<jr.length;n++)r=jr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<jr.length&&(n=jr[0],n.blockedOn===null);)AT(n),n.blockedOn===null&&jr.shift()}var co=Tr.ReactCurrentBatchConfig,Xc=!0;function dk(t,e,n,r){var i=de,s=co.transition;co.transition=null;try{de=1,lg(t,e,n,r)}finally{de=i,co.transition=s}}function fk(t,e,n,r){var i=de,s=co.transition;co.transition=null;try{de=4,lg(t,e,n,r)}finally{de=i,co.transition=s}}function lg(t,e,n,r){if(Xc){var i=Cp(t,e,n,r);if(i===null)Nf(t,e,r,Zc,n),Vv(t,r);else if(ck(i,t,e,n,r))r.stopPropagation();else if(Vv(t,r),e&4&&-1<uk.indexOf(t)){for(;i!==null;){var s=uu(i);if(s!==null&&ET(s),s=Cp(t,e,n,r),s===null&&Nf(t,e,r,Zc,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Nf(t,e,r,null,n)}}var Zc=null;function Cp(t,e,n,r){if(Zc=null,t=ig(r),t=Gi(t),t!==null)if(e=Es(t),e===null)t=null;else if(n=e.tag,n===13){if(t=pT(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zc=t,null}function PT(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ek()){case sg:return 1;case yT:return 4;case Yc:case tk:return 16;case vT:return 536870912;default:return 16}default:return 16}}var qr=null,ug=null,Rc=null;function CT(){if(Rc)return Rc;var t,e=ug,n=e.length,r,i="value"in qr?qr.value:qr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Rc=i.slice(t,1<r?1-r:void 0)}function Ac(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nc(){return!0}function Mv(){return!1}function sn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?nc:Mv,this.isPropagationStopped=Mv,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nc)},persist:function(){},isPersistent:nc}),e}var Qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cg=sn(Qo),lu=Ne({},Qo,{view:0,detail:0}),pk=sn(lu),Tf,Sf,Da,Gh=Ne({},lu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Da&&(Da&&t.type==="mousemove"?(Tf=t.screenX-Da.screenX,Sf=t.screenY-Da.screenY):Sf=Tf=0,Da=t),Tf)},movementY:function(t){return"movementY"in t?t.movementY:Sf}}),Fv=sn(Gh),mk=Ne({},Gh,{dataTransfer:0}),gk=sn(mk),_k=Ne({},lu,{relatedTarget:0}),Rf=sn(_k),yk=Ne({},Qo,{animationName:0,elapsedTime:0,pseudoElement:0}),vk=sn(yk),wk=Ne({},Qo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ik=sn(wk),Ek=Ne({},Qo,{data:0}),Uv=sn(Ek),Tk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Rk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ak(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Rk[t])?!!e[t]:!1}function hg(){return Ak}var Pk=Ne({},lu,{key:function(t){if(t.key){var e=Tk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ac(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Sk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hg,charCode:function(t){return t.type==="keypress"?Ac(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ac(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ck=sn(Pk),kk=Ne({},Gh,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jv=sn(kk),bk=Ne({},lu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hg}),xk=sn(bk),Nk=Ne({},Qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),Dk=sn(Nk),Ok=Ne({},Gh,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vk=sn(Ok),Lk=[9,13,27,32],dg=mr&&"CompositionEvent"in window,il=null;mr&&"documentMode"in document&&(il=document.documentMode);var Mk=mr&&"TextEvent"in window&&!il,kT=mr&&(!dg||il&&8<il&&11>=il),Bv=" ",zv=!1;function bT(t,e){switch(t){case"keyup":return Lk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xT(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function Fk(t,e){switch(t){case"compositionend":return xT(e);case"keypress":return e.which!==32?null:(zv=!0,Bv);case"textInput":return t=e.data,t===Bv&&zv?null:t;default:return null}}function Uk(t,e){if(Ys)return t==="compositionend"||!dg&&bT(t,e)?(t=CT(),Rc=ug=qr=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kT&&e.locale!=="ko"?null:e.data;default:return null}}var jk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $v(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jk[t.type]:e==="textarea"}function NT(t,e,n,r){uT(r),e=eh(e,"onChange"),0<e.length&&(n=new cg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var sl=null,Cl=null;function Bk(t){$T(t,0)}function Wh(t){var e=Zs(t);if(nT(e))return t}function zk(t,e){if(t==="change")return e}var DT=!1;if(mr){var Af;if(mr){var Pf="oninput"in document;if(!Pf){var qv=document.createElement("div");qv.setAttribute("oninput","return;"),Pf=typeof qv.oninput=="function"}Af=Pf}else Af=!1;DT=Af&&(!document.documentMode||9<document.documentMode)}function Gv(){sl&&(sl.detachEvent("onpropertychange",OT),Cl=sl=null)}function OT(t){if(t.propertyName==="value"&&Wh(Cl)){var e=[];NT(e,Cl,t,ig(t)),fT(Bk,e)}}function $k(t,e,n){t==="focusin"?(Gv(),sl=e,Cl=n,sl.attachEvent("onpropertychange",OT)):t==="focusout"&&Gv()}function qk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Wh(Cl)}function Gk(t,e){if(t==="click")return Wh(e)}function Wk(t,e){if(t==="input"||t==="change")return Wh(e)}function Hk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pn=typeof Object.is=="function"?Object.is:Hk;function kl(t,e){if(Pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cp.call(e,i)||!Pn(t[i],e[i]))return!1}return!0}function Wv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hv(t,e){var n=Wv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Wv(n)}}function VT(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?VT(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function LT(){for(var t=window,e=Hc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hc(t.document)}return e}function fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Kk(t){var e=LT(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&VT(n.ownerDocument.documentElement,n)){if(r!==null&&fg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Hv(n,s);var o=Hv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Qk=mr&&"documentMode"in document&&11>=document.documentMode,Js=null,kp=null,ol=null,bp=!1;function Kv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bp||Js==null||Js!==Hc(r)||(r=Js,"selectionStart"in r&&fg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ol&&kl(ol,r)||(ol=r,r=eh(kp,"onSelect"),0<r.length&&(e=new cg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Js)))}function rc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xs={animationend:rc("Animation","AnimationEnd"),animationiteration:rc("Animation","AnimationIteration"),animationstart:rc("Animation","AnimationStart"),transitionend:rc("Transition","TransitionEnd")},Cf={},MT={};mr&&(MT=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function Hh(t){if(Cf[t])return Cf[t];if(!Xs[t])return t;var e=Xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in MT)return Cf[t]=e[n];return t}var FT=Hh("animationend"),UT=Hh("animationiteration"),jT=Hh("animationstart"),BT=Hh("transitionend"),zT=new Map,Qv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vi(t,e){zT.set(t,e),Is(e,[t])}for(var kf=0;kf<Qv.length;kf++){var bf=Qv[kf],Yk=bf.toLowerCase(),Jk=bf[0].toUpperCase()+bf.slice(1);vi(Yk,"on"+Jk)}vi(FT,"onAnimationEnd");vi(UT,"onAnimationIteration");vi(jT,"onAnimationStart");vi("dblclick","onDoubleClick");vi("focusin","onFocus");vi("focusout","onBlur");vi(BT,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);Is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Is("onBeforeInput",["compositionend","keypress","textInput","paste"]);Is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xk=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qa));function Yv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Y1(r,e,void 0,t),t.currentTarget=null}function $T(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Yv(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Yv(i,a,c),s=l}}}if(Qc)throw t=Rp,Qc=!1,Rp=null,t}function ve(t,e){var n=e[Vp];n===void 0&&(n=e[Vp]=new Set);var r=t+"__bubble";n.has(r)||(qT(e,t,2,!1),n.add(r))}function xf(t,e,n){var r=0;e&&(r|=4),qT(n,t,r,e)}var ic="_reactListening"+Math.random().toString(36).slice(2);function bl(t){if(!t[ic]){t[ic]=!0,JE.forEach(function(n){n!=="selectionchange"&&(Xk.has(n)||xf(n,!1,t),xf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ic]||(e[ic]=!0,xf("selectionchange",!1,e))}}function qT(t,e,n,r){switch(PT(e)){case 1:var i=dk;break;case 4:i=fk;break;default:i=lg}n=i.bind(null,e,n,t),i=void 0,!Sp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Nf(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}fT(function(){var c=s,h=ig(n),f=[];e:{var m=zT.get(t);if(m!==void 0){var v=cg,R=t;switch(t){case"keypress":if(Ac(n)===0)break e;case"keydown":case"keyup":v=Ck;break;case"focusin":R="focus",v=Rf;break;case"focusout":R="blur",v=Rf;break;case"beforeblur":case"afterblur":v=Rf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Fv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=gk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=xk;break;case FT:case UT:case jT:v=vk;break;case BT:v=Dk;break;case"scroll":v=pk;break;case"wheel":v=Vk;break;case"copy":case"cut":case"paste":v=Ik;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=jv}var P=(e&4)!==0,b=!P&&t==="scroll",E=P?m!==null?m+"Capture":null:m;P=[];for(var w=c,T;w!==null;){T=w;var x=T.stateNode;if(T.tag===5&&x!==null&&(T=x,E!==null&&(x=Sl(w,E),x!=null&&P.push(xl(w,x,T)))),b)break;w=w.return}0<P.length&&(m=new v(m,R,null,n,h),f.push({event:m,listeners:P}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Ep&&(R=n.relatedTarget||n.fromElement)&&(Gi(R)||R[gr]))break e;if((v||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,v?(R=n.relatedTarget||n.toElement,v=c,R=R?Gi(R):null,R!==null&&(b=Es(R),R!==b||R.tag!==5&&R.tag!==6)&&(R=null)):(v=null,R=c),v!==R)){if(P=Fv,x="onMouseLeave",E="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(P=jv,x="onPointerLeave",E="onPointerEnter",w="pointer"),b=v==null?m:Zs(v),T=R==null?m:Zs(R),m=new P(x,w+"leave",v,n,h),m.target=b,m.relatedTarget=T,x=null,Gi(h)===c&&(P=new P(E,w+"enter",R,n,h),P.target=T,P.relatedTarget=b,x=P),b=x,v&&R)t:{for(P=v,E=R,w=0,T=P;T;T=Ls(T))w++;for(T=0,x=E;x;x=Ls(x))T++;for(;0<w-T;)P=Ls(P),w--;for(;0<T-w;)E=Ls(E),T--;for(;w--;){if(P===E||E!==null&&P===E.alternate)break t;P=Ls(P),E=Ls(E)}P=null}else P=null;v!==null&&Jv(f,m,v,P,!1),R!==null&&b!==null&&Jv(f,b,R,P,!0)}}e:{if(m=c?Zs(c):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var F=zk;else if($v(m))if(DT)F=Wk;else{F=qk;var M=$k}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(F=Gk);if(F&&(F=F(t,c))){NT(f,F,n,h);break e}M&&M(t,m,c),t==="focusout"&&(M=m._wrapperState)&&M.controlled&&m.type==="number"&&_p(m,"number",m.value)}switch(M=c?Zs(c):window,t){case"focusin":($v(M)||M.contentEditable==="true")&&(Js=M,kp=c,ol=null);break;case"focusout":ol=kp=Js=null;break;case"mousedown":bp=!0;break;case"contextmenu":case"mouseup":case"dragend":bp=!1,Kv(f,n,h);break;case"selectionchange":if(Qk)break;case"keydown":case"keyup":Kv(f,n,h)}var A;if(dg)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Ys?bT(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(kT&&n.locale!=="ko"&&(Ys||_!=="onCompositionStart"?_==="onCompositionEnd"&&Ys&&(A=CT()):(qr=h,ug="value"in qr?qr.value:qr.textContent,Ys=!0)),M=eh(c,_),0<M.length&&(_=new Uv(_,t,null,n,h),f.push({event:_,listeners:M}),A?_.data=A:(A=xT(n),A!==null&&(_.data=A)))),(A=Mk?Fk(t,n):Uk(t,n))&&(c=eh(c,"onBeforeInput"),0<c.length&&(h=new Uv("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=A))}$T(f,e)})}function xl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eh(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Sl(t,n),s!=null&&r.unshift(xl(t,s,i)),s=Sl(t,e),s!=null&&r.push(xl(t,s,i))),t=t.return}return r}function Ls(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=Sl(n,s),l!=null&&o.unshift(xl(n,l,a))):i||(l=Sl(n,s),l!=null&&o.push(xl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Zk=/\r\n?/g,eb=/\u0000|\uFFFD/g;function Xv(t){return(typeof t=="string"?t:""+t).replace(Zk,`
`).replace(eb,"")}function sc(t,e,n){if(e=Xv(e),Xv(t)!==e&&n)throw Error(z(425))}function th(){}var xp=null,Np=null;function Dp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Op=typeof setTimeout=="function"?setTimeout:void 0,tb=typeof clearTimeout=="function"?clearTimeout:void 0,Zv=typeof Promise=="function"?Promise:void 0,nb=typeof queueMicrotask=="function"?queueMicrotask:typeof Zv<"u"?function(t){return Zv.resolve(null).then(t).catch(rb)}:Op;function rb(t){setTimeout(function(){throw t})}function Df(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Pl(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Pl(e)}function Xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ew(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),Nn="__reactFiber$"+Yo,Nl="__reactProps$"+Yo,gr="__reactContainer$"+Yo,Vp="__reactEvents$"+Yo,ib="__reactListeners$"+Yo,sb="__reactHandles$"+Yo;function Gi(t){var e=t[Nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[gr]||n[Nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ew(t);t!==null;){if(n=t[Nn])return n;t=ew(t)}return e}t=n,n=t.parentNode}return null}function uu(t){return t=t[Nn]||t[gr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(z(33))}function Kh(t){return t[Nl]||null}var Lp=[],eo=-1;function wi(t){return{current:t}}function Ie(t){0>eo||(t.current=Lp[eo],Lp[eo]=null,eo--)}function ge(t,e){eo++,Lp[eo]=t.current,t.current=e}var ai={},St=wi(ai),Gt=wi(!1),rs=ai;function Eo(t,e){var n=t.type.contextTypes;if(!n)return ai;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Wt(t){return t=t.childContextTypes,t!=null}function nh(){Ie(Gt),Ie(St)}function tw(t,e,n){if(St.current!==ai)throw Error(z(168));ge(St,e),ge(Gt,n)}function GT(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(z(108,$1(t)||"Unknown",i));return Ne({},n,r)}function rh(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ai,rs=St.current,ge(St,t),ge(Gt,Gt.current),!0}function nw(t,e,n){var r=t.stateNode;if(!r)throw Error(z(169));n?(t=GT(t,e,rs),r.__reactInternalMemoizedMergedChildContext=t,Ie(Gt),Ie(St),ge(St,t)):Ie(Gt),ge(Gt,n)}var sr=null,Qh=!1,Of=!1;function WT(t){sr===null?sr=[t]:sr.push(t)}function ob(t){Qh=!0,WT(t)}function Ii(){if(!Of&&sr!==null){Of=!0;var t=0,e=de;try{var n=sr;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}sr=null,Qh=!1}catch(i){throw sr!==null&&(sr=sr.slice(t+1)),_T(sg,Ii),i}finally{de=e,Of=!1}}return null}var to=[],no=0,ih=null,sh=0,an=[],ln=0,is=null,or=1,ar="";function Li(t,e){to[no++]=sh,to[no++]=ih,ih=t,sh=e}function HT(t,e,n){an[ln++]=or,an[ln++]=ar,an[ln++]=is,is=t;var r=or;t=ar;var i=32-Rn(r)-1;r&=~(1<<i),n+=1;var s=32-Rn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,or=1<<32-Rn(e)+i|n<<i|r,ar=s+t}else or=1<<s|n<<i|r,ar=t}function pg(t){t.return!==null&&(Li(t,1),HT(t,1,0))}function mg(t){for(;t===ih;)ih=to[--no],to[no]=null,sh=to[--no],to[no]=null;for(;t===is;)is=an[--ln],an[ln]=null,ar=an[--ln],an[ln]=null,or=an[--ln],an[ln]=null}var Zt=null,Jt=null,Te=!1,Tn=null;function KT(t,e){var n=un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function rw(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Zt=t,Jt=Xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Zt=t,Jt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=is!==null?{id:or,overflow:ar}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Zt=t,Jt=null,!0):!1;default:return!1}}function Mp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fp(t){if(Te){var e=Jt;if(e){var n=e;if(!rw(t,e)){if(Mp(t))throw Error(z(418));e=Xr(n.nextSibling);var r=Zt;e&&rw(t,e)?KT(r,n):(t.flags=t.flags&-4097|2,Te=!1,Zt=t)}}else{if(Mp(t))throw Error(z(418));t.flags=t.flags&-4097|2,Te=!1,Zt=t}}}function iw(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Zt=t}function oc(t){if(t!==Zt)return!1;if(!Te)return iw(t),Te=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dp(t.type,t.memoizedProps)),e&&(e=Jt)){if(Mp(t))throw QT(),Error(z(418));for(;e;)KT(t,e),e=Xr(e.nextSibling)}if(iw(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(z(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Jt=Xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Jt=null}}else Jt=Zt?Xr(t.stateNode.nextSibling):null;return!0}function QT(){for(var t=Jt;t;)t=Xr(t.nextSibling)}function To(){Jt=Zt=null,Te=!1}function gg(t){Tn===null?Tn=[t]:Tn.push(t)}var ab=Tr.ReactCurrentBatchConfig;function Oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(z(309));var r=n.stateNode}if(!r)throw Error(z(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(z(284));if(!n._owner)throw Error(z(290,t))}return t}function ac(t,e){throw t=Object.prototype.toString.call(e),Error(z(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sw(t){var e=t._init;return e(t._payload)}function YT(t){function e(E,w){if(t){var T=E.deletions;T===null?(E.deletions=[w],E.flags|=16):T.push(w)}}function n(E,w){if(!t)return null;for(;w!==null;)e(E,w),w=w.sibling;return null}function r(E,w){for(E=new Map;w!==null;)w.key!==null?E.set(w.key,w):E.set(w.index,w),w=w.sibling;return E}function i(E,w){return E=ni(E,w),E.index=0,E.sibling=null,E}function s(E,w,T){return E.index=T,t?(T=E.alternate,T!==null?(T=T.index,T<w?(E.flags|=2,w):T):(E.flags|=2,w)):(E.flags|=1048576,w)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function a(E,w,T,x){return w===null||w.tag!==6?(w=Bf(T,E.mode,x),w.return=E,w):(w=i(w,T),w.return=E,w)}function l(E,w,T,x){var F=T.type;return F===Qs?h(E,w,T.props.children,x,T.key):w!==null&&(w.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Fr&&sw(F)===w.type)?(x=i(w,T.props),x.ref=Oa(E,w,T),x.return=E,x):(x=Dc(T.type,T.key,T.props,null,E.mode,x),x.ref=Oa(E,w,T),x.return=E,x)}function c(E,w,T,x){return w===null||w.tag!==4||w.stateNode.containerInfo!==T.containerInfo||w.stateNode.implementation!==T.implementation?(w=zf(T,E.mode,x),w.return=E,w):(w=i(w,T.children||[]),w.return=E,w)}function h(E,w,T,x,F){return w===null||w.tag!==7?(w=Xi(T,E.mode,x,F),w.return=E,w):(w=i(w,T),w.return=E,w)}function f(E,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Bf(""+w,E.mode,T),w.return=E,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yu:return T=Dc(w.type,w.key,w.props,null,E.mode,T),T.ref=Oa(E,null,w),T.return=E,T;case Ks:return w=zf(w,E.mode,T),w.return=E,w;case Fr:var x=w._init;return f(E,x(w._payload),T)}if(Ha(w)||ka(w))return w=Xi(w,E.mode,T,null),w.return=E,w;ac(E,w)}return null}function m(E,w,T,x){var F=w!==null?w.key:null;if(typeof T=="string"&&T!==""||typeof T=="number")return F!==null?null:a(E,w,""+T,x);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case Yu:return T.key===F?l(E,w,T,x):null;case Ks:return T.key===F?c(E,w,T,x):null;case Fr:return F=T._init,m(E,w,F(T._payload),x)}if(Ha(T)||ka(T))return F!==null?null:h(E,w,T,x,null);ac(E,T)}return null}function v(E,w,T,x,F){if(typeof x=="string"&&x!==""||typeof x=="number")return E=E.get(T)||null,a(w,E,""+x,F);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yu:return E=E.get(x.key===null?T:x.key)||null,l(w,E,x,F);case Ks:return E=E.get(x.key===null?T:x.key)||null,c(w,E,x,F);case Fr:var M=x._init;return v(E,w,T,M(x._payload),F)}if(Ha(x)||ka(x))return E=E.get(T)||null,h(w,E,x,F,null);ac(w,x)}return null}function R(E,w,T,x){for(var F=null,M=null,A=w,_=w=0,g=null;A!==null&&_<T.length;_++){A.index>_?(g=A,A=null):g=A.sibling;var S=m(E,A,T[_],x);if(S===null){A===null&&(A=g);break}t&&A&&S.alternate===null&&e(E,A),w=s(S,w,_),M===null?F=S:M.sibling=S,M=S,A=g}if(_===T.length)return n(E,A),Te&&Li(E,_),F;if(A===null){for(;_<T.length;_++)A=f(E,T[_],x),A!==null&&(w=s(A,w,_),M===null?F=A:M.sibling=A,M=A);return Te&&Li(E,_),F}for(A=r(E,A);_<T.length;_++)g=v(A,E,_,T[_],x),g!==null&&(t&&g.alternate!==null&&A.delete(g.key===null?_:g.key),w=s(g,w,_),M===null?F=g:M.sibling=g,M=g);return t&&A.forEach(function(k){return e(E,k)}),Te&&Li(E,_),F}function P(E,w,T,x){var F=ka(T);if(typeof F!="function")throw Error(z(150));if(T=F.call(T),T==null)throw Error(z(151));for(var M=F=null,A=w,_=w=0,g=null,S=T.next();A!==null&&!S.done;_++,S=T.next()){A.index>_?(g=A,A=null):g=A.sibling;var k=m(E,A,S.value,x);if(k===null){A===null&&(A=g);break}t&&A&&k.alternate===null&&e(E,A),w=s(k,w,_),M===null?F=k:M.sibling=k,M=k,A=g}if(S.done)return n(E,A),Te&&Li(E,_),F;if(A===null){for(;!S.done;_++,S=T.next())S=f(E,S.value,x),S!==null&&(w=s(S,w,_),M===null?F=S:M.sibling=S,M=S);return Te&&Li(E,_),F}for(A=r(E,A);!S.done;_++,S=T.next())S=v(A,E,_,S.value,x),S!==null&&(t&&S.alternate!==null&&A.delete(S.key===null?_:S.key),w=s(S,w,_),M===null?F=S:M.sibling=S,M=S);return t&&A.forEach(function(N){return e(E,N)}),Te&&Li(E,_),F}function b(E,w,T,x){if(typeof T=="object"&&T!==null&&T.type===Qs&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case Yu:e:{for(var F=T.key,M=w;M!==null;){if(M.key===F){if(F=T.type,F===Qs){if(M.tag===7){n(E,M.sibling),w=i(M,T.props.children),w.return=E,E=w;break e}}else if(M.elementType===F||typeof F=="object"&&F!==null&&F.$$typeof===Fr&&sw(F)===M.type){n(E,M.sibling),w=i(M,T.props),w.ref=Oa(E,M,T),w.return=E,E=w;break e}n(E,M);break}else e(E,M);M=M.sibling}T.type===Qs?(w=Xi(T.props.children,E.mode,x,T.key),w.return=E,E=w):(x=Dc(T.type,T.key,T.props,null,E.mode,x),x.ref=Oa(E,w,T),x.return=E,E=x)}return o(E);case Ks:e:{for(M=T.key;w!==null;){if(w.key===M)if(w.tag===4&&w.stateNode.containerInfo===T.containerInfo&&w.stateNode.implementation===T.implementation){n(E,w.sibling),w=i(w,T.children||[]),w.return=E,E=w;break e}else{n(E,w);break}else e(E,w);w=w.sibling}w=zf(T,E.mode,x),w.return=E,E=w}return o(E);case Fr:return M=T._init,b(E,w,M(T._payload),x)}if(Ha(T))return R(E,w,T,x);if(ka(T))return P(E,w,T,x);ac(E,T)}return typeof T=="string"&&T!==""||typeof T=="number"?(T=""+T,w!==null&&w.tag===6?(n(E,w.sibling),w=i(w,T),w.return=E,E=w):(n(E,w),w=Bf(T,E.mode,x),w.return=E,E=w),o(E)):n(E,w)}return b}var So=YT(!0),JT=YT(!1),oh=wi(null),ah=null,ro=null,_g=null;function yg(){_g=ro=ah=null}function vg(t){var e=oh.current;Ie(oh),t._currentValue=e}function Up(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ho(t,e){ah=t,_g=ro=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Bt=!0),t.firstContext=null)}function pn(t){var e=t._currentValue;if(_g!==t)if(t={context:t,memoizedValue:e,next:null},ro===null){if(ah===null)throw Error(z(308));ro=t,ah.dependencies={lanes:0,firstContext:t}}else ro=ro.next=t;return e}var Wi=null;function wg(t){Wi===null?Wi=[t]:Wi.push(t)}function XT(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,wg(e)):(n.next=i.next,i.next=n),e.interleaved=n,_r(t,r)}function _r(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ur=!1;function Ig(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ZT(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Zr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,_r(t,n)}return i=r.interleaved,i===null?(e.next=e,wg(r)):(e.next=i.next,i.next=e),r.interleaved=e,_r(t,n)}function Pc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,og(t,n)}}function ow(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lh(t,e,n,r){var i=t.updateQueue;Ur=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,h=c=l=null,a=s;do{var m=a.lane,v=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var R=t,P=a;switch(m=e,v=n,P.tag){case 1:if(R=P.payload,typeof R=="function"){f=R.call(v,f,m);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=P.payload,m=typeof R=="function"?R.call(v,f,m):R,m==null)break e;f=Ne({},f,m);break e;case 2:Ur=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=v,l=f):h=h.next=v,o|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(h===null&&(l=f),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);os|=o,t.lanes=o,t.memoizedState=f}}function aw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(z(191,i));i.call(r)}}}var cu={},zn=wi(cu),Dl=wi(cu),Ol=wi(cu);function Hi(t){if(t===cu)throw Error(z(174));return t}function Eg(t,e){switch(ge(Ol,e),ge(Dl,t),ge(zn,cu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vp(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vp(e,t)}Ie(zn),ge(zn,e)}function Ro(){Ie(zn),Ie(Dl),Ie(Ol)}function e0(t){Hi(Ol.current);var e=Hi(zn.current),n=vp(e,t.type);e!==n&&(ge(Dl,t),ge(zn,n))}function Tg(t){Dl.current===t&&(Ie(zn),Ie(Dl))}var ke=wi(0);function uh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vf=[];function Sg(){for(var t=0;t<Vf.length;t++)Vf[t]._workInProgressVersionPrimary=null;Vf.length=0}var Cc=Tr.ReactCurrentDispatcher,Lf=Tr.ReactCurrentBatchConfig,ss=0,be=null,Ye=null,tt=null,ch=!1,al=!1,Vl=0,lb=0;function yt(){throw Error(z(321))}function Rg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pn(t[n],e[n]))return!1;return!0}function Ag(t,e,n,r,i,s){if(ss=s,be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cc.current=t===null||t.memoizedState===null?db:fb,t=n(r,i),al){s=0;do{if(al=!1,Vl=0,25<=s)throw Error(z(301));s+=1,tt=Ye=null,e.updateQueue=null,Cc.current=pb,t=n(r,i)}while(al)}if(Cc.current=hh,e=Ye!==null&&Ye.next!==null,ss=0,tt=Ye=be=null,ch=!1,e)throw Error(z(300));return t}function Pg(){var t=Vl!==0;return Vl=0,t}function xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?be.memoizedState=tt=t:tt=tt.next=t,tt}function mn(){if(Ye===null){var t=be.alternate;t=t!==null?t.memoizedState:null}else t=Ye.next;var e=tt===null?be.memoizedState:tt.next;if(e!==null)tt=e,Ye=t;else{if(t===null)throw Error(z(310));Ye=t,t={memoizedState:Ye.memoizedState,baseState:Ye.baseState,baseQueue:Ye.baseQueue,queue:Ye.queue,next:null},tt===null?be.memoizedState=tt=t:tt=tt.next=t}return tt}function Ll(t,e){return typeof e=="function"?e(t):e}function Mf(t){var e=mn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=Ye,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var h=c.lane;if((ss&h)===h)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,be.lanes|=h,os|=h}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Pn(r,e.memoizedState)||(Bt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,be.lanes|=s,os|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ff(t){var e=mn(),n=e.queue;if(n===null)throw Error(z(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pn(s,e.memoizedState)||(Bt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function t0(){}function n0(t,e){var n=be,r=mn(),i=e(),s=!Pn(r.memoizedState,i);if(s&&(r.memoizedState=i,Bt=!0),r=r.queue,Cg(s0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,Ml(9,i0.bind(null,n,r,i,e),void 0,null),rt===null)throw Error(z(349));ss&30||r0(n,e,i)}return i}function r0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i0(t,e,n,r){e.value=n,e.getSnapshot=r,o0(e)&&a0(t)}function s0(t,e,n){return n(function(){o0(e)&&a0(t)})}function o0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pn(t,n)}catch{return!0}}function a0(t){var e=_r(t,1);e!==null&&An(e,t,1,-1)}function lw(t){var e=xn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ll,lastRenderedState:t},e.queue=t,t=t.dispatch=hb.bind(null,be,t),[e.memoizedState,t]}function Ml(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=be.updateQueue,e===null?(e={lastEffect:null,stores:null},be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function l0(){return mn().memoizedState}function kc(t,e,n,r){var i=xn();be.flags|=t,i.memoizedState=Ml(1|e,n,void 0,r===void 0?null:r)}function Yh(t,e,n,r){var i=mn();r=r===void 0?null:r;var s=void 0;if(Ye!==null){var o=Ye.memoizedState;if(s=o.destroy,r!==null&&Rg(r,o.deps)){i.memoizedState=Ml(e,n,s,r);return}}be.flags|=t,i.memoizedState=Ml(1|e,n,s,r)}function uw(t,e){return kc(8390656,8,t,e)}function Cg(t,e){return Yh(2048,8,t,e)}function u0(t,e){return Yh(4,2,t,e)}function c0(t,e){return Yh(4,4,t,e)}function h0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d0(t,e,n){return n=n!=null?n.concat([t]):null,Yh(4,4,h0.bind(null,e,t),n)}function kg(){}function f0(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function p0(t,e){var n=mn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function m0(t,e,n){return ss&21?(Pn(n,e)||(n=wT(),be.lanes|=n,os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Bt=!0),t.memoizedState=n)}function ub(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Lf.transition;Lf.transition={};try{t(!1),e()}finally{de=n,Lf.transition=r}}function g0(){return mn().memoizedState}function cb(t,e,n){var r=ti(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_0(t))y0(e,n);else if(n=XT(t,e,n,r),n!==null){var i=Nt();An(n,t,r,i),v0(n,e,r)}}function hb(t,e,n){var r=ti(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_0(t))y0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Pn(a,o)){var l=e.interleaved;l===null?(i.next=i,wg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=XT(t,e,i,r),n!==null&&(i=Nt(),An(n,t,r,i),v0(n,e,r))}}function _0(t){var e=t.alternate;return t===be||e!==null&&e===be}function y0(t,e){al=ch=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,og(t,n)}}var hh={readContext:pn,useCallback:yt,useContext:yt,useEffect:yt,useImperativeHandle:yt,useInsertionEffect:yt,useLayoutEffect:yt,useMemo:yt,useReducer:yt,useRef:yt,useState:yt,useDebugValue:yt,useDeferredValue:yt,useTransition:yt,useMutableSource:yt,useSyncExternalStore:yt,useId:yt,unstable_isNewReconciler:!1},db={readContext:pn,useCallback:function(t,e){return xn().memoizedState=[t,e===void 0?null:e],t},useContext:pn,useEffect:uw,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,kc(4194308,4,h0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return kc(4194308,4,t,e)},useInsertionEffect:function(t,e){return kc(4,2,t,e)},useMemo:function(t,e){var n=xn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cb.bind(null,be,t),[r.memoizedState,t]},useRef:function(t){var e=xn();return t={current:t},e.memoizedState=t},useState:lw,useDebugValue:kg,useDeferredValue:function(t){return xn().memoizedState=t},useTransition:function(){var t=lw(!1),e=t[0];return t=ub.bind(null,t[1]),xn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=be,i=xn();if(Te){if(n===void 0)throw Error(z(407));n=n()}else{if(n=e(),rt===null)throw Error(z(349));ss&30||r0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,uw(s0.bind(null,r,s,t),[t]),r.flags|=2048,Ml(9,i0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xn(),e=rt.identifierPrefix;if(Te){var n=ar,r=or;n=(r&~(1<<32-Rn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vl++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fb={readContext:pn,useCallback:f0,useContext:pn,useEffect:Cg,useImperativeHandle:d0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:p0,useReducer:Mf,useRef:l0,useState:function(){return Mf(Ll)},useDebugValue:kg,useDeferredValue:function(t){var e=mn();return m0(e,Ye.memoizedState,t)},useTransition:function(){var t=Mf(Ll)[0],e=mn().memoizedState;return[t,e]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1},pb={readContext:pn,useCallback:f0,useContext:pn,useEffect:Cg,useImperativeHandle:d0,useInsertionEffect:u0,useLayoutEffect:c0,useMemo:p0,useReducer:Ff,useRef:l0,useState:function(){return Ff(Ll)},useDebugValue:kg,useDeferredValue:function(t){var e=mn();return Ye===null?e.memoizedState=t:m0(e,Ye.memoizedState,t)},useTransition:function(){var t=Ff(Ll)[0],e=mn().memoizedState;return[t,e]},useMutableSource:t0,useSyncExternalStore:n0,useId:g0,unstable_isNewReconciler:!1};function In(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function jp(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jh={isMounted:function(t){return(t=t._reactInternals)?Es(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ti(t),s=dr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Zr(t,s,i),e!==null&&(An(e,t,i,r),Pc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Nt(),i=ti(t),s=dr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Zr(t,s,i),e!==null&&(An(e,t,i,r),Pc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Nt(),r=ti(t),i=dr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Zr(t,i,r),e!==null&&(An(e,t,r,n),Pc(e,t,r))}};function cw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!kl(n,r)||!kl(i,s):!0}function w0(t,e,n){var r=!1,i=ai,s=e.contextType;return typeof s=="object"&&s!==null?s=pn(s):(i=Wt(e)?rs:St.current,r=e.contextTypes,s=(r=r!=null)?Eo(t,i):ai),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jh,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Jh.enqueueReplaceState(e,e.state,null)}function Bp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Ig(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pn(s):(s=Wt(e)?rs:St.current,i.context=Eo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jp(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Jh.enqueueReplaceState(i,i.state,null),lh(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ao(t,e){try{var n="",r=e;do n+=z1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Uf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mb=typeof WeakMap=="function"?WeakMap:Map;function I0(t,e,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fh||(fh=!0,Xp=r),zp(t,e)},n}function E0(t,e,n){n=dr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zp(t,e),typeof r!="function"&&(ei===null?ei=new Set([this]):ei.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dw(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new mb;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kb.bind(null,t,e,n),e.then(t,t))}function fw(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pw(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dr(-1,1),e.tag=2,Zr(n,e,1))),n.lanes|=1),t)}var gb=Tr.ReactCurrentOwner,Bt=!1;function Ct(t,e,n,r){e.child=t===null?JT(e,null,n,r):So(e,t.child,n,r)}function mw(t,e,n,r,i){n=n.render;var s=e.ref;return ho(e,i),r=Ag(t,e,n,r,s,i),n=Pg(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yr(t,e,i)):(Te&&n&&pg(e),e.flags|=1,Ct(t,e,r,i),e.child)}function gw(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Mg(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,T0(t,e,s,r,i)):(t=Dc(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:kl,n(o,r)&&t.ref===e.ref)return yr(t,e,i)}return e.flags|=1,t=ni(s,r),t.ref=e.ref,t.return=e,e.child=t}function T0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(kl(s,r)&&t.ref===e.ref)if(Bt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Bt=!0);else return e.lanes=t.lanes,yr(t,e,i)}return $p(t,e,n,r,i)}function S0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(so,Qt),Qt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(so,Qt),Qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ge(so,Qt),Qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ge(so,Qt),Qt|=r;return Ct(t,e,i,n),e.child}function R0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function $p(t,e,n,r,i){var s=Wt(n)?rs:St.current;return s=Eo(e,s),ho(e,i),n=Ag(t,e,n,r,s,i),r=Pg(),t!==null&&!Bt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yr(t,e,i)):(Te&&r&&pg(e),e.flags|=1,Ct(t,e,n,i),e.child)}function _w(t,e,n,r,i){if(Wt(n)){var s=!0;rh(e)}else s=!1;if(ho(e,i),e.stateNode===null)bc(t,e),w0(e,n,r),Bp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pn(c):(c=Wt(n)?rs:St.current,c=Eo(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&hw(e,o,r,c),Ur=!1;var m=e.memoizedState;o.state=m,lh(e,r,o,i),l=e.memoizedState,a!==r||m!==l||Gt.current||Ur?(typeof h=="function"&&(jp(e,n,h,r),l=e.memoizedState),(a=Ur||cw(e,n,a,r,m,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ZT(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:In(e.type,a),o.props=c,f=e.pendingProps,m=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pn(l):(l=Wt(n)?rs:St.current,l=Eo(e,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==l)&&hw(e,o,r,l),Ur=!1,m=e.memoizedState,o.state=m,lh(e,r,o,i);var R=e.memoizedState;a!==f||m!==R||Gt.current||Ur?(typeof v=="function"&&(jp(e,n,v,r),R=e.memoizedState),(c=Ur||cw(e,n,c,r,m,R,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,R,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,R,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=R),o.props=r,o.state=R,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return qp(t,e,n,r,s,i)}function qp(t,e,n,r,i,s){R0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&nw(e,n,!1),yr(t,e,s);r=e.stateNode,gb.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=So(e,t.child,null,s),e.child=So(e,null,a,s)):Ct(t,e,a,s),e.memoizedState=r.state,i&&nw(e,n,!0),e.child}function A0(t){var e=t.stateNode;e.pendingContext?tw(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tw(t,e.context,!1),Eg(t,e.containerInfo)}function yw(t,e,n,r,i){return To(),gg(i),e.flags|=256,Ct(t,e,n,r),e.child}var Gp={dehydrated:null,treeContext:null,retryLane:0};function Wp(t){return{baseLanes:t,cachePool:null,transitions:null}}function P0(t,e,n){var r=e.pendingProps,i=ke.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ge(ke,i&1),t===null)return Fp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ed(o,r,0,null),t=Xi(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wp(n),e.memoizedState=Gp,t):bg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return _b(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=ni(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=ni(a,s):(s=Xi(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Wp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Gp,r}return s=t.child,t=s.sibling,r=ni(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bg(t,e){return e=ed({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lc(t,e,n,r){return r!==null&&gg(r),So(e,t.child,null,n),t=bg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function _b(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Uf(Error(z(422))),lc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ed({mode:"visible",children:r.children},i,0,null),s=Xi(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&So(e,t.child,null,o),e.child.memoizedState=Wp(o),e.memoizedState=Gp,s);if(!(e.mode&1))return lc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(z(419)),r=Uf(s,r,void 0),lc(t,e,o,r)}if(a=(o&t.childLanes)!==0,Bt||a){if(r=rt,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,_r(t,i),An(r,t,i,-1))}return Lg(),r=Uf(Error(z(421))),lc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=bb.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Jt=Xr(i.nextSibling),Zt=e,Te=!0,Tn=null,t!==null&&(an[ln++]=or,an[ln++]=ar,an[ln++]=is,or=t.id,ar=t.overflow,is=e),e=bg(e,r.children),e.flags|=4096,e)}function vw(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Up(t.return,e,n)}function jf(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function C0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Ct(t,e,r.children,n),r=ke.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vw(t,n,e);else if(t.tag===19)vw(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(ke,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&uh(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),jf(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&uh(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}jf(e,!0,n,null,s);break;case"together":jf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function bc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(z(153));if(e.child!==null){for(t=e.child,n=ni(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ni(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function yb(t,e,n){switch(e.tag){case 3:A0(e),To();break;case 5:e0(e);break;case 1:Wt(e.type)&&rh(e);break;case 4:Eg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ge(oh,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(ke,ke.current&1),e.flags|=128,null):n&e.child.childLanes?P0(t,e,n):(ge(ke,ke.current&1),t=yr(t,e,n),t!==null?t.sibling:null);ge(ke,ke.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return C0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),r)break;return null;case 22:case 23:return e.lanes=0,S0(t,e,n)}return yr(t,e,n)}var k0,Hp,b0,x0;k0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Hp=function(){};b0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Hi(zn.current);var s=null;switch(n){case"input":i=mp(t,i),r=mp(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=yp(t,i),r=yp(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=th)}wp(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(El.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(El.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ve("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};x0=function(t,e,n,r){n!==r&&(e.flags|=4)};function Va(t,e){if(!Te)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vb(t,e,n){var r=e.pendingProps;switch(mg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return Wt(e.type)&&nh(),vt(e),null;case 3:return r=e.stateNode,Ro(),Ie(Gt),Ie(St),Sg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(oc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Tn!==null&&(tm(Tn),Tn=null))),Hp(t,e),vt(e),null;case 5:Tg(e);var i=Hi(Ol.current);if(n=e.type,t!==null&&e.stateNode!=null)b0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(z(166));return vt(e),null}if(t=Hi(zn.current),oc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Nn]=e,r[Nl]=s,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<Qa.length;i++)ve(Qa[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":Cv(r,s),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ve("invalid",r);break;case"textarea":bv(r,s),ve("invalid",r)}wp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&sc(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sc(r.textContent,a,t),i=["children",""+a]):El.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":Ju(r),kv(r,s,!0);break;case"textarea":Ju(r),xv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=th)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Nn]=e,t[Nl]=r,k0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ip(n,r),n){case"dialog":ve("cancel",t),ve("close",t),i=r;break;case"iframe":case"object":case"embed":ve("load",t),i=r;break;case"video":case"audio":for(i=0;i<Qa.length;i++)ve(Qa[i],t);i=r;break;case"source":ve("error",t),i=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),i=r;break;case"details":ve("toggle",t),i=r;break;case"input":Cv(t,r),i=mp(t,r),ve("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),ve("invalid",t);break;case"textarea":bv(t,r),i=yp(t,r),ve("invalid",t);break;default:i=r}wp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?lT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&oT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Tl(t,l):typeof l=="number"&&Tl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(El.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ve("scroll",t):l!=null&&eg(t,s,l,o))}switch(n){case"input":Ju(t),kv(t,r,!1);break;case"textarea":Ju(t),xv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+oi(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ao(t,!!r.multiple,s,!1):r.defaultValue!=null&&ao(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=th)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)x0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(z(166));if(n=Hi(Ol.current),Hi(zn.current),oc(e)){if(r=e.stateNode,n=e.memoizedProps,r[Nn]=e,(s=r.nodeValue!==n)&&(t=Zt,t!==null))switch(t.tag){case 3:sc(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sc(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Nn]=e,e.stateNode=r}return vt(e),null;case 13:if(Ie(ke),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Te&&Jt!==null&&e.mode&1&&!(e.flags&128))QT(),To(),e.flags|=98560,s=!1;else if(s=oc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(z(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(z(317));s[Nn]=e}else To(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),s=!1}else Tn!==null&&(tm(Tn),Tn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ke.current&1?Je===0&&(Je=3):Lg())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return Ro(),Hp(t,e),t===null&&bl(e.stateNode.containerInfo),vt(e),null;case 10:return vg(e.type._context),vt(e),null;case 17:return Wt(e.type)&&nh(),vt(e),null;case 19:if(Ie(ke),s=e.memoizedState,s===null)return vt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Va(s,!1);else{if(Je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uh(t),o!==null){for(e.flags|=128,Va(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(ke,ke.current&1|2),e.child}t=t.sibling}s.tail!==null&&qe()>Po&&(e.flags|=128,r=!0,Va(s,!1),e.lanes=4194304)}else{if(!r)if(t=uh(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Va(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Te)return vt(e),null}else 2*qe()-s.renderingStartTime>Po&&n!==1073741824&&(e.flags|=128,r=!0,Va(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=qe(),e.sibling=null,n=ke.current,ge(ke,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return Vg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Qt&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(z(156,e.tag))}function wb(t,e){switch(mg(e),e.tag){case 1:return Wt(e.type)&&nh(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ro(),Ie(Gt),Ie(St),Sg(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Tg(e),null;case 13:if(Ie(ke),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(z(340));To()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ie(ke),null;case 4:return Ro(),null;case 10:return vg(e.type._context),null;case 22:case 23:return Vg(),null;case 24:return null;default:return null}}var uc=!1,It=!1,Ib=typeof WeakSet=="function"?WeakSet:Set,Q=null;function io(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ve(t,e,r)}else n.current=null}function Kp(t,e,n){try{n()}catch(r){Ve(t,e,r)}}var ww=!1;function Eb(t,e){if(xp=Xc,t=LT(),fg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++c===i&&(a=o),m===s&&++h===r&&(l=o),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Np={focusedElem:t,selectionRange:n},Xc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var R=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var P=R.memoizedProps,b=R.memoizedState,E=e.stateNode,w=E.getSnapshotBeforeUpdate(e.elementType===e.type?P:In(e.type,P),b);E.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var T=e.stateNode.containerInfo;T.nodeType===1?T.textContent="":T.nodeType===9&&T.documentElement&&T.removeChild(T.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(z(163))}}catch(x){Ve(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return R=ww,ww=!1,R}function ll(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kp(e,n,s)}i=i.next}while(i!==r)}}function Xh(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N0(t){var e=t.alternate;e!==null&&(t.alternate=null,N0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Nn],delete e[Nl],delete e[Vp],delete e[ib],delete e[sb])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function D0(t){return t.tag===5||t.tag===3||t.tag===4}function Iw(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||D0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=th));else if(r!==4&&(t=t.child,t!==null))for(Yp(t,e,n),t=t.sibling;t!==null;)Yp(t,e,n),t=t.sibling}function Jp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Jp(t,e,n),t=t.sibling;t!==null;)Jp(t,e,n),t=t.sibling}var ct=null,En=!1;function Or(t,e,n){for(n=n.child;n!==null;)O0(t,e,n),n=n.sibling}function O0(t,e,n){if(Bn&&typeof Bn.onCommitFiberUnmount=="function")try{Bn.onCommitFiberUnmount(qh,n)}catch{}switch(n.tag){case 5:It||io(n,e);case 6:var r=ct,i=En;ct=null,Or(t,e,n),ct=r,En=i,ct!==null&&(En?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(En?(t=ct,n=n.stateNode,t.nodeType===8?Df(t.parentNode,n):t.nodeType===1&&Df(t,n),Pl(t)):Df(ct,n.stateNode));break;case 4:r=ct,i=En,ct=n.stateNode.containerInfo,En=!0,Or(t,e,n),ct=r,En=i;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kp(n,e,o),i=i.next}while(i!==r)}Or(t,e,n);break;case 1:if(!It&&(io(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ve(n,e,a)}Or(t,e,n);break;case 21:Or(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,Or(t,e,n),It=r):Or(t,e,n);break;default:Or(t,e,n)}}function Ew(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ib),e.forEach(function(r){var i=xb.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,En=!1;break e;case 3:ct=a.stateNode.containerInfo,En=!0;break e;case 4:ct=a.stateNode.containerInfo,En=!0;break e}a=a.return}if(ct===null)throw Error(z(160));O0(s,o,i),ct=null,En=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){Ve(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)V0(e,t),e=e.sibling}function V0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(vn(e,t),bn(t),r&4){try{ll(3,t,t.return),Xh(3,t)}catch(P){Ve(t,t.return,P)}try{ll(5,t,t.return)}catch(P){Ve(t,t.return,P)}}break;case 1:vn(e,t),bn(t),r&512&&n!==null&&io(n,n.return);break;case 5:if(vn(e,t),bn(t),r&512&&n!==null&&io(n,n.return),t.flags&32){var i=t.stateNode;try{Tl(i,"")}catch(P){Ve(t,t.return,P)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&rT(i,s),Ip(a,o);var c=Ip(a,s);for(o=0;o<l.length;o+=2){var h=l[o],f=l[o+1];h==="style"?lT(i,f):h==="dangerouslySetInnerHTML"?oT(i,f):h==="children"?Tl(i,f):eg(i,h,f,c)}switch(a){case"input":gp(i,s);break;case"textarea":iT(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ao(i,!!s.multiple,v,!1):m!==!!s.multiple&&(s.defaultValue!=null?ao(i,!!s.multiple,s.defaultValue,!0):ao(i,!!s.multiple,s.multiple?[]:"",!1))}i[Nl]=s}catch(P){Ve(t,t.return,P)}}break;case 6:if(vn(e,t),bn(t),r&4){if(t.stateNode===null)throw Error(z(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(P){Ve(t,t.return,P)}}break;case 3:if(vn(e,t),bn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Pl(e.containerInfo)}catch(P){Ve(t,t.return,P)}break;case 4:vn(e,t),bn(t);break;case 13:vn(e,t),bn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Dg=qe())),r&4&&Ew(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(It=(c=It)||h,vn(e,t),It=c):vn(e,t),bn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Q=t,h=t.child;h!==null;){for(f=Q=h;Q!==null;){switch(m=Q,v=m.child,m.tag){case 0:case 11:case 14:case 15:ll(4,m,m.return);break;case 1:io(m,m.return);var R=m.stateNode;if(typeof R.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,R.props=e.memoizedProps,R.state=e.memoizedState,R.componentWillUnmount()}catch(P){Ve(r,n,P)}}break;case 5:io(m,m.return);break;case 22:if(m.memoizedState!==null){Sw(f);continue}}v!==null?(v.return=m,Q=v):Sw(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{i=f.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=aT("display",o))}catch(P){Ve(t,t.return,P)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(P){Ve(t,t.return,P)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:vn(e,t),bn(t),r&4&&Ew(t);break;case 21:break;default:vn(e,t),bn(t)}}function bn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(D0(n)){var r=n;break e}n=n.return}throw Error(z(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Tl(i,""),r.flags&=-33);var s=Iw(t);Jp(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Iw(t);Yp(t,a,o);break;default:throw Error(z(161))}}catch(l){Ve(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Tb(t,e,n){Q=t,L0(t)}function L0(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var i=Q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||uc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||It;a=uc;var c=It;if(uc=o,(It=l)&&!c)for(Q=i;Q!==null;)o=Q,l=o.child,o.tag===22&&o.memoizedState!==null?Rw(i):l!==null?(l.return=o,Q=l):Rw(i);for(;s!==null;)Q=s,L0(s),s=s.sibling;Q=i,uc=a,It=c}Tw(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,Q=s):Tw(t)}}function Tw(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Xh(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:In(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&aw(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}aw(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Pl(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(z(163))}It||e.flags&512&&Qp(e)}catch(m){Ve(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Sw(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function Rw(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xh(4,e)}catch(l){Ve(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ve(e,i,l)}}var s=e.return;try{Qp(e)}catch(l){Ve(e,s,l)}break;case 5:var o=e.return;try{Qp(e)}catch(l){Ve(e,o,l)}}}catch(l){Ve(e,e.return,l)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var Sb=Math.ceil,dh=Tr.ReactCurrentDispatcher,xg=Tr.ReactCurrentOwner,dn=Tr.ReactCurrentBatchConfig,le=0,rt=null,Qe=null,ft=0,Qt=0,so=wi(0),Je=0,Fl=null,os=0,Zh=0,Ng=0,ul=null,jt=null,Dg=0,Po=1/0,ir=null,fh=!1,Xp=null,ei=null,cc=!1,Gr=null,ph=0,cl=0,Zp=null,xc=-1,Nc=0;function Nt(){return le&6?qe():xc!==-1?xc:xc=qe()}function ti(t){return t.mode&1?le&2&&ft!==0?ft&-ft:ab.transition!==null?(Nc===0&&(Nc=wT()),Nc):(t=de,t!==0||(t=window.event,t=t===void 0?16:PT(t.type)),t):1}function An(t,e,n,r){if(50<cl)throw cl=0,Zp=null,Error(z(185));au(t,n,r),(!(le&2)||t!==rt)&&(t===rt&&(!(le&2)&&(Zh|=n),Je===4&&Br(t,ft)),Ht(t,r),n===1&&le===0&&!(e.mode&1)&&(Po=qe()+500,Qh&&Ii()))}function Ht(t,e){var n=t.callbackNode;ak(t,e);var r=Jc(t,t===rt?ft:0);if(r===0)n!==null&&Ov(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Ov(n),e===1)t.tag===0?ob(Aw.bind(null,t)):WT(Aw.bind(null,t)),nb(function(){!(le&6)&&Ii()}),n=null;else{switch(IT(r)){case 1:n=sg;break;case 4:n=yT;break;case 16:n=Yc;break;case 536870912:n=vT;break;default:n=Yc}n=q0(n,M0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function M0(t,e){if(xc=-1,Nc=0,le&6)throw Error(z(327));var n=t.callbackNode;if(fo()&&t.callbackNode!==n)return null;var r=Jc(t,t===rt?ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=mh(t,r);else{e=r;var i=le;le|=2;var s=U0();(rt!==t||ft!==e)&&(ir=null,Po=qe()+500,Ji(t,e));do try{Pb();break}catch(a){F0(t,a)}while(!0);yg(),dh.current=s,le=i,Qe!==null?e=0:(rt=null,ft=0,e=Je)}if(e!==0){if(e===2&&(i=Ap(t),i!==0&&(r=i,e=em(t,i))),e===1)throw n=Fl,Ji(t,0),Br(t,r),Ht(t,qe()),n;if(e===6)Br(t,r);else{if(i=t.current.alternate,!(r&30)&&!Rb(i)&&(e=mh(t,r),e===2&&(s=Ap(t),s!==0&&(r=s,e=em(t,s))),e===1))throw n=Fl,Ji(t,0),Br(t,r),Ht(t,qe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(z(345));case 2:Mi(t,jt,ir);break;case 3:if(Br(t,r),(r&130023424)===r&&(e=Dg+500-qe(),10<e)){if(Jc(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Nt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Op(Mi.bind(null,t,jt,ir),e);break}Mi(t,jt,ir);break;case 4:if(Br(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Rn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sb(r/1960))-r,10<r){t.timeoutHandle=Op(Mi.bind(null,t,jt,ir),r);break}Mi(t,jt,ir);break;case 5:Mi(t,jt,ir);break;default:throw Error(z(329))}}}return Ht(t,qe()),t.callbackNode===n?M0.bind(null,t):null}function em(t,e){var n=ul;return t.current.memoizedState.isDehydrated&&(Ji(t,e).flags|=256),t=mh(t,e),t!==2&&(e=jt,jt=n,e!==null&&tm(e)),t}function tm(t){jt===null?jt=t:jt.push.apply(jt,t)}function Rb(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Br(t,e){for(e&=~Ng,e&=~Zh,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Rn(e),r=1<<n;t[n]=-1,e&=~r}}function Aw(t){if(le&6)throw Error(z(327));fo();var e=Jc(t,0);if(!(e&1))return Ht(t,qe()),null;var n=mh(t,e);if(t.tag!==0&&n===2){var r=Ap(t);r!==0&&(e=r,n=em(t,r))}if(n===1)throw n=Fl,Ji(t,0),Br(t,e),Ht(t,qe()),n;if(n===6)throw Error(z(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mi(t,jt,ir),Ht(t,qe()),null}function Og(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Po=qe()+500,Qh&&Ii())}}function as(t){Gr!==null&&Gr.tag===0&&!(le&6)&&fo();var e=le;le|=1;var n=dn.transition,r=de;try{if(dn.transition=null,de=1,t)return t()}finally{de=r,dn.transition=n,le=e,!(le&6)&&Ii()}}function Vg(){Qt=so.current,Ie(so)}function Ji(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tb(n)),Qe!==null)for(n=Qe.return;n!==null;){var r=n;switch(mg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nh();break;case 3:Ro(),Ie(Gt),Ie(St),Sg();break;case 5:Tg(r);break;case 4:Ro();break;case 13:Ie(ke);break;case 19:Ie(ke);break;case 10:vg(r.type._context);break;case 22:case 23:Vg()}n=n.return}if(rt=t,Qe=t=ni(t.current,null),ft=Qt=e,Je=0,Fl=null,Ng=Zh=os=0,jt=ul=null,Wi!==null){for(e=0;e<Wi.length;e++)if(n=Wi[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Wi=null}return t}function F0(t,e){do{var n=Qe;try{if(yg(),Cc.current=hh,ch){for(var r=be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ch=!1}if(ss=0,tt=Ye=be=null,al=!1,Vl=0,xg.current=null,n===null||n.return===null){Je=1,Fl=e,Qe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ft,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=fw(o);if(v!==null){v.flags&=-257,pw(v,o,a,s,e),v.mode&1&&dw(s,c,e),e=v,l=c;var R=e.updateQueue;if(R===null){var P=new Set;P.add(l),e.updateQueue=P}else R.add(l);break e}else{if(!(e&1)){dw(s,c,e),Lg();break e}l=Error(z(426))}}else if(Te&&a.mode&1){var b=fw(o);if(b!==null){!(b.flags&65536)&&(b.flags|=256),pw(b,o,a,s,e),gg(Ao(l,a));break e}}s=l=Ao(l,a),Je!==4&&(Je=2),ul===null?ul=[s]:ul.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=I0(s,l,e);ow(s,E);break e;case 1:a=l;var w=s.type,T=s.stateNode;if(!(s.flags&128)&&(typeof w.getDerivedStateFromError=="function"||T!==null&&typeof T.componentDidCatch=="function"&&(ei===null||!ei.has(T)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=E0(s,a,e);ow(s,x);break e}}s=s.return}while(s!==null)}B0(n)}catch(F){e=F,Qe===n&&n!==null&&(Qe=n=n.return);continue}break}while(!0)}function U0(){var t=dh.current;return dh.current=hh,t===null?hh:t}function Lg(){(Je===0||Je===3||Je===2)&&(Je=4),rt===null||!(os&268435455)&&!(Zh&268435455)||Br(rt,ft)}function mh(t,e){var n=le;le|=2;var r=U0();(rt!==t||ft!==e)&&(ir=null,Ji(t,e));do try{Ab();break}catch(i){F0(t,i)}while(!0);if(yg(),le=n,dh.current=r,Qe!==null)throw Error(z(261));return rt=null,ft=0,Je}function Ab(){for(;Qe!==null;)j0(Qe)}function Pb(){for(;Qe!==null&&!X1();)j0(Qe)}function j0(t){var e=$0(t.alternate,t,Qt);t.memoizedProps=t.pendingProps,e===null?B0(t):Qe=e,xg.current=null}function B0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wb(n,e),n!==null){n.flags&=32767,Qe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Je=6,Qe=null;return}}else if(n=vb(n,e,Qt),n!==null){Qe=n;return}if(e=e.sibling,e!==null){Qe=e;return}Qe=e=t}while(e!==null);Je===0&&(Je=5)}function Mi(t,e,n){var r=de,i=dn.transition;try{dn.transition=null,de=1,Cb(t,e,n,r)}finally{dn.transition=i,de=r}return null}function Cb(t,e,n,r){do fo();while(Gr!==null);if(le&6)throw Error(z(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(z(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lk(t,s),t===rt&&(Qe=rt=null,ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cc||(cc=!0,q0(Yc,function(){return fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=dn.transition,dn.transition=null;var o=de;de=1;var a=le;le|=4,xg.current=null,Eb(t,n),V0(n,t),Kk(Np),Xc=!!xp,Np=xp=null,t.current=n,Tb(n),Z1(),le=a,de=o,dn.transition=s}else t.current=n;if(cc&&(cc=!1,Gr=t,ph=i),s=t.pendingLanes,s===0&&(ei=null),nk(n.stateNode),Ht(t,qe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fh)throw fh=!1,t=Xp,Xp=null,t;return ph&1&&t.tag!==0&&fo(),s=t.pendingLanes,s&1?t===Zp?cl++:(cl=0,Zp=t):cl=0,Ii(),null}function fo(){if(Gr!==null){var t=IT(ph),e=dn.transition,n=de;try{if(dn.transition=null,de=16>t?16:t,Gr===null)var r=!1;else{if(t=Gr,Gr=null,ph=0,le&6)throw Error(z(331));var i=le;for(le|=4,Q=t.current;Q!==null;){var s=Q,o=s.child;if(Q.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Q=c;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:ll(8,h,s)}var f=h.child;if(f!==null)f.return=h,Q=f;else for(;Q!==null;){h=Q;var m=h.sibling,v=h.return;if(N0(h),h===c){Q=null;break}if(m!==null){m.return=v,Q=m;break}Q=v}}}var R=s.alternate;if(R!==null){var P=R.child;if(P!==null){R.child=null;do{var b=P.sibling;P.sibling=null,P=b}while(P!==null)}}Q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Q=o;else e:for(;Q!==null;){if(s=Q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ll(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,Q=E;break e}Q=s.return}}var w=t.current;for(Q=w;Q!==null;){o=Q;var T=o.child;if(o.subtreeFlags&2064&&T!==null)T.return=o,Q=T;else e:for(o=w;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xh(9,a)}}catch(F){Ve(a,a.return,F)}if(a===o){Q=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Q=x;break e}Q=a.return}}if(le=i,Ii(),Bn&&typeof Bn.onPostCommitFiberRoot=="function")try{Bn.onPostCommitFiberRoot(qh,t)}catch{}r=!0}return r}finally{de=n,dn.transition=e}}return!1}function Pw(t,e,n){e=Ao(n,e),e=I0(t,e,1),t=Zr(t,e,1),e=Nt(),t!==null&&(au(t,1,e),Ht(t,e))}function Ve(t,e,n){if(t.tag===3)Pw(t,t,n);else for(;e!==null;){if(e.tag===3){Pw(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ei===null||!ei.has(r))){t=Ao(n,t),t=E0(e,t,1),e=Zr(e,t,1),t=Nt(),e!==null&&(au(e,1,t),Ht(e,t));break}}e=e.return}}function kb(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Nt(),t.pingedLanes|=t.suspendedLanes&n,rt===t&&(ft&n)===n&&(Je===4||Je===3&&(ft&130023424)===ft&&500>qe()-Dg?Ji(t,0):Ng|=n),Ht(t,e)}function z0(t,e){e===0&&(t.mode&1?(e=ec,ec<<=1,!(ec&130023424)&&(ec=4194304)):e=1);var n=Nt();t=_r(t,e),t!==null&&(au(t,e,n),Ht(t,n))}function bb(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),z0(t,n)}function xb(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(z(314))}r!==null&&r.delete(e),z0(t,n)}var $0;$0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Gt.current)Bt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Bt=!1,yb(t,e,n);Bt=!!(t.flags&131072)}else Bt=!1,Te&&e.flags&1048576&&HT(e,sh,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;bc(t,e),t=e.pendingProps;var i=Eo(e,St.current);ho(e,n),i=Ag(null,e,r,t,i,n);var s=Pg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Wt(r)?(s=!0,rh(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ig(e),i.updater=Jh,e.stateNode=i,i._reactInternals=e,Bp(e,r,t,n),e=qp(null,e,r,!0,s,n)):(e.tag=0,Te&&s&&pg(e),Ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(bc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Db(r),t=In(r,t),i){case 0:e=$p(null,e,r,t,n);break e;case 1:e=_w(null,e,r,t,n);break e;case 11:e=mw(null,e,r,t,n);break e;case 14:e=gw(null,e,r,In(r.type,t),n);break e}throw Error(z(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),$p(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),_w(t,e,r,i,n);case 3:e:{if(A0(e),t===null)throw Error(z(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ZT(t,e),lh(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Ao(Error(z(423)),e),e=yw(t,e,r,n,i);break e}else if(r!==i){i=Ao(Error(z(424)),e),e=yw(t,e,r,n,i);break e}else for(Jt=Xr(e.stateNode.containerInfo.firstChild),Zt=e,Te=!0,Tn=null,n=JT(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(To(),r===i){e=yr(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return e0(e),t===null&&Fp(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Dp(r,i)?o=null:s!==null&&Dp(r,s)&&(e.flags|=32),R0(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&Fp(e),null;case 13:return P0(t,e,n);case 4:return Eg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=So(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),mw(t,e,r,i,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ge(oh,r._currentValue),r._currentValue=o,s!==null)if(Pn(s.value,o)){if(s.children===i.children&&!Gt.current){e=yr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=dr(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?l.next=l:(l.next=h.next,h.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Up(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(z(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Up(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ho(e,n),i=pn(i),r=r(i),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,i=In(r,e.pendingProps),i=In(r.type,i),gw(t,e,r,i,n);case 15:return T0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:In(r,i),bc(t,e),e.tag=1,Wt(r)?(t=!0,rh(e)):t=!1,ho(e,n),w0(e,r,i),Bp(e,r,i,n),qp(null,e,r,!0,t,n);case 19:return C0(t,e,n);case 22:return S0(t,e,n)}throw Error(z(156,e.tag))};function q0(t,e){return _T(t,e)}function Nb(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(t,e,n,r){return new Nb(t,e,n,r)}function Mg(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Db(t){if(typeof t=="function")return Mg(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ng)return 11;if(t===rg)return 14}return 2}function ni(t,e){var n=t.alternate;return n===null?(n=un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Mg(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qs:return Xi(n.children,i,s,e);case tg:o=8,i|=8;break;case hp:return t=un(12,n,e,i|2),t.elementType=hp,t.lanes=s,t;case dp:return t=un(13,n,e,i),t.elementType=dp,t.lanes=s,t;case fp:return t=un(19,n,e,i),t.elementType=fp,t.lanes=s,t;case eT:return ed(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case XE:o=10;break e;case ZE:o=9;break e;case ng:o=11;break e;case rg:o=14;break e;case Fr:o=16,r=null;break e}throw Error(z(130,t==null?t:typeof t,""))}return e=un(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Xi(t,e,n,r){return t=un(7,t,r,e),t.lanes=n,t}function ed(t,e,n,r){return t=un(22,t,r,e),t.elementType=eT,t.lanes=n,t.stateNode={isHidden:!1},t}function Bf(t,e,n){return t=un(6,t,null,e),t.lanes=n,t}function zf(t,e,n){return e=un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ob(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ef(0),this.expirationTimes=Ef(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ef(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fg(t,e,n,r,i,s,o,a,l){return t=new Ob(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ig(s),t}function Vb(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ks,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function G0(t){if(!t)return ai;t=t._reactInternals;e:{if(Es(t)!==t||t.tag!==1)throw Error(z(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Wt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(z(171))}if(t.tag===1){var n=t.type;if(Wt(n))return GT(t,n,e)}return e}function W0(t,e,n,r,i,s,o,a,l){return t=Fg(n,r,!0,t,i,s,o,a,l),t.context=G0(null),n=t.current,r=Nt(),i=ti(n),s=dr(r,i),s.callback=e??null,Zr(n,s,i),t.current.lanes=i,au(t,i,r),Ht(t,r),t}function td(t,e,n,r){var i=e.current,s=Nt(),o=ti(i);return n=G0(n),e.context===null?e.context=n:e.pendingContext=n,e=dr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Zr(i,e,o),t!==null&&(An(t,i,o,s),Pc(t,i,o)),o}function gh(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Cw(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ug(t,e){Cw(t,e),(t=t.alternate)&&Cw(t,e)}function Lb(){return null}var H0=typeof reportError=="function"?reportError:function(t){console.error(t)};function jg(t){this._internalRoot=t}nd.prototype.render=jg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(z(409));td(t,e,null,null)};nd.prototype.unmount=jg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;as(function(){td(null,t,null,null)}),e[gr]=null}};function nd(t){this._internalRoot=t}nd.prototype.unstable_scheduleHydration=function(t){if(t){var e=ST();t={blockedOn:null,target:t,priority:e};for(var n=0;n<jr.length&&e!==0&&e<jr[n].priority;n++);jr.splice(n,0,t),n===0&&AT(t)}};function Bg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function rd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function kw(){}function Mb(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=gh(o);s.call(c)}}var o=W0(e,r,t,0,null,!1,!1,"",kw);return t._reactRootContainer=o,t[gr]=o.current,bl(t.nodeType===8?t.parentNode:t),as(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=gh(l);a.call(c)}}var l=Fg(t,0,!1,null,null,!1,!1,"",kw);return t._reactRootContainer=l,t[gr]=l.current,bl(t.nodeType===8?t.parentNode:t),as(function(){td(e,l,n,r)}),l}function id(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=gh(o);a.call(l)}}td(e,o,t,i)}else o=Mb(n,e,t,i,r);return gh(o)}ET=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ka(e.pendingLanes);n!==0&&(og(e,n|1),Ht(e,qe()),!(le&6)&&(Po=qe()+500,Ii()))}break;case 13:as(function(){var r=_r(t,1);if(r!==null){var i=Nt();An(r,t,1,i)}}),Ug(t,1)}};ag=function(t){if(t.tag===13){var e=_r(t,134217728);if(e!==null){var n=Nt();An(e,t,134217728,n)}Ug(t,134217728)}};TT=function(t){if(t.tag===13){var e=ti(t),n=_r(t,e);if(n!==null){var r=Nt();An(n,t,e,r)}Ug(t,e)}};ST=function(){return de};RT=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};Tp=function(t,e,n){switch(e){case"input":if(gp(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Kh(r);if(!i)throw Error(z(90));nT(r),gp(r,i)}}}break;case"textarea":iT(t,n);break;case"select":e=n.value,e!=null&&ao(t,!!n.multiple,e,!1)}};hT=Og;dT=as;var Fb={usingClientEntryPoint:!1,Events:[uu,Zs,Kh,uT,cT,Og]},La={findFiberByHostInstance:Gi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ub={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=mT(t),t===null?null:t.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||Lb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{qh=hc.inject(Ub),Bn=hc}catch{}}rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fb;rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bg(e))throw Error(z(200));return Vb(t,e,null,n)};rn.createRoot=function(t,e){if(!Bg(t))throw Error(z(299));var n=!1,r="",i=H0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Fg(t,1,!1,null,null,n,!1,r,i),t[gr]=e.current,bl(t.nodeType===8?t.parentNode:t),new jg(e)};rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(z(188)):(t=Object.keys(t).join(","),Error(z(268,t)));return t=mT(e),t=t===null?null:t.stateNode,t};rn.flushSync=function(t){return as(t)};rn.hydrate=function(t,e,n){if(!rd(e))throw Error(z(200));return id(null,t,e,!0,n)};rn.hydrateRoot=function(t,e,n){if(!Bg(t))throw Error(z(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=H0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=W0(e,null,t,1,n??null,i,!1,s,o),t[gr]=e.current,bl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new nd(e)};rn.render=function(t,e,n){if(!rd(e))throw Error(z(200));return id(null,t,e,!1,n)};rn.unmountComponentAtNode=function(t){if(!rd(t))throw Error(z(40));return t._reactRootContainer?(as(function(){id(null,null,t,!1,function(){t._reactRootContainer=null,t[gr]=null})}),!0):!1};rn.unstable_batchedUpdates=Og;rn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!rd(n))throw Error(z(200));if(t==null||t._reactInternals===void 0)throw Error(z(38));return id(t,e,n,!1,r)};rn.version="18.3.1-next-f1338f8080-20240426";function K0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K0)}catch(t){console.error(t)}}K0(),KE.exports=rn;var jb=KE.exports,bw=jb;up.createRoot=bw.createRoot,up.hydrateRoot=bw.hydrateRoot;/**
 * @remix-run/router v1.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ul(){return Ul=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ul.apply(this,arguments)}var Wr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Wr||(Wr={}));const xw="popstate";function Bb(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return nm("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:_h(i)}return $b(e,n,null,t)}function Fe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Q0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zb(){return Math.random().toString(36).substr(2,8)}function Nw(t,e){return{usr:t.state,key:t.key,idx:e}}function nm(t,e,n,r){return n===void 0&&(n=null),Ul({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Jo(e):e,{state:n,key:e&&e.key||r||zb()})}function _h(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Jo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function $b(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Wr.Pop,l=null,c=h();c==null&&(c=0,o.replaceState(Ul({},o.state,{idx:c}),""));function h(){return(o.state||{idx:null}).idx}function f(){a=Wr.Pop;let b=h(),E=b==null?null:b-c;c=b,l&&l({action:a,location:P.location,delta:E})}function m(b,E){a=Wr.Push;let w=nm(P.location,b,E);c=h()+1;let T=Nw(w,c),x=P.createHref(w);try{o.pushState(T,"",x)}catch(F){if(F instanceof DOMException&&F.name==="DataCloneError")throw F;i.location.assign(x)}s&&l&&l({action:a,location:P.location,delta:1})}function v(b,E){a=Wr.Replace;let w=nm(P.location,b,E);c=h();let T=Nw(w,c),x=P.createHref(w);o.replaceState(T,"",x),s&&l&&l({action:a,location:P.location,delta:0})}function R(b){let E=i.location.origin!=="null"?i.location.origin:i.location.href,w=typeof b=="string"?b:_h(b);return w=w.replace(/ $/,"%20"),Fe(E,"No window.location.(origin|href) available to create URL for href: "+w),new URL(w,E)}let P={get action(){return a},get location(){return t(i,o)},listen(b){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(xw,f),l=b,()=>{i.removeEventListener(xw,f),l=null}},createHref(b){return e(i,b)},createURL:R,encodeLocation(b){let E=R(b);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:m,replace:v,go(b){return o.go(b)}};return P}var Dw;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Dw||(Dw={}));function qb(t,e,n){return n===void 0&&(n="/"),Gb(t,e,n,!1)}function Gb(t,e,n,r){let i=typeof e=="string"?Jo(e):e,s=Co(i.pathname||"/",n);if(s==null)return null;let o=Y0(t);Wb(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=rx(s);a=tx(o[l],c,r)}return a}function Y0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Fe(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=ri([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(Fe(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Y0(s.children,e,h,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:Zb(c,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of J0(s.path))i(s,o,l)}),e}function J0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=J0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Wb(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:ex(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Hb=/^:[\w-]+$/,Kb=3,Qb=2,Yb=1,Jb=10,Xb=-2,Ow=t=>t==="*";function Zb(t,e){let n=t.split("/"),r=n.length;return n.some(Ow)&&(r+=Xb),e&&(r+=Qb),n.filter(i=>!Ow(i)).reduce((i,s)=>i+(Hb.test(s)?Kb:s===""?Yb:Jb),r)}function ex(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,h=s==="/"?e:e.slice(s.length)||"/",f=yh({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},h),m=l.route;if(!f&&c&&n&&!r[r.length-1].route.index&&(f=yh({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:ri([s,f.pathname]),pathnameBase:ax(ri([s,f.pathnameBase])),route:m}),f.pathnameBase!=="/"&&(s=ri([s,f.pathnameBase]))}return o}function yh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=nx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,h,f)=>{let{paramName:m,isOptional:v}=h;if(m==="*"){let P=a[f]||"";o=s.slice(0,s.length-P.length).replace(/(.)\/+$/,"$1")}const R=a[f];return v&&!R?c[m]=void 0:c[m]=(R||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function nx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Q0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function rx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Q0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Co(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ix(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Jo(t):t;return{pathname:n?n.startsWith("/")?n:sx(n,e):e,search:lx(r),hash:ux(i)}}function sx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function $f(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ox(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function X0(t,e){let n=ox(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Z0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Jo(t):(i=Ul({},t),Fe(!i.pathname||!i.pathname.includes("?"),$f("?","pathname","search",i)),Fe(!i.pathname||!i.pathname.includes("#"),$f("#","pathname","hash",i)),Fe(!i.search||!i.search.includes("#"),$f("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let m=o.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=ix(i,a),c=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||h)&&(l.pathname+="/"),l}const ri=t=>t.join("/").replace(/\/\/+/g,"/"),ax=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),lx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ux=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function cx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const eS=["post","put","patch","delete"];new Set(eS);const hx=["get",...eS];new Set(hx);/**
 * React Router v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jl(){return jl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jl.apply(this,arguments)}const sd=U.createContext(null),tS=U.createContext(null),Ei=U.createContext(null),od=U.createContext(null),Ts=U.createContext({outlet:null,matches:[],isDataRoute:!1}),nS=U.createContext(null);function dx(t,e){let{relative:n}=e===void 0?{}:e;hu()||Fe(!1);let{basename:r,navigator:i}=U.useContext(Ei),{hash:s,pathname:o,search:a}=ad(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ri([r,o])),i.createHref({pathname:l,search:a,hash:s})}function hu(){return U.useContext(od)!=null}function Xo(){return hu()||Fe(!1),U.useContext(od).location}function rS(t){U.useContext(Ei).static||U.useLayoutEffect(t)}function fx(){let{isDataRoute:t}=U.useContext(Ts);return t?Ax():px()}function px(){hu()||Fe(!1);let t=U.useContext(sd),{basename:e,future:n,navigator:r}=U.useContext(Ei),{matches:i}=U.useContext(Ts),{pathname:s}=Xo(),o=JSON.stringify(X0(i,n.v7_relativeSplatPath)),a=U.useRef(!1);return rS(()=>{a.current=!0}),U.useCallback(function(c,h){if(h===void 0&&(h={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let f=Z0(c,JSON.parse(o),s,h.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ri([e,f.pathname])),(h.replace?r.replace:r.push)(f,h.state,h)},[e,r,o,s,t])}function ad(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=U.useContext(Ei),{matches:i}=U.useContext(Ts),{pathname:s}=Xo(),o=JSON.stringify(X0(i,r.v7_relativeSplatPath));return U.useMemo(()=>Z0(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function mx(t,e){return gx(t,e)}function gx(t,e,n,r){hu()||Fe(!1);let{navigator:i}=U.useContext(Ei),{matches:s}=U.useContext(Ts),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Xo(),h;if(e){var f;let b=typeof e=="string"?Jo(e):e;l==="/"||(f=b.pathname)!=null&&f.startsWith(l)||Fe(!1),h=b}else h=c;let m=h.pathname||"/",v=m;if(l!=="/"){let b=l.replace(/^\//,"").split("/");v="/"+m.replace(/^\//,"").split("/").slice(b.length).join("/")}let R=qb(t,{pathname:v}),P=Ix(R&&R.map(b=>Object.assign({},b,{params:Object.assign({},a,b.params),pathname:ri([l,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?l:ri([l,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),s,n,r);return e&&P?U.createElement(od.Provider,{value:{location:jl({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:Wr.Pop}},P):P}function _x(){let t=Rx(),e=cx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return U.createElement(U.Fragment,null,U.createElement("h2",null,"Unexpected Application Error!"),U.createElement("h3",{style:{fontStyle:"italic"}},e),n?U.createElement("pre",{style:i},n):null,null)}const yx=U.createElement(_x,null);class vx extends U.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?U.createElement(Ts.Provider,{value:this.props.routeContext},U.createElement(nS.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wx(t){let{routeContext:e,match:n,children:r}=t,i=U.useContext(sd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),U.createElement(Ts.Provider,{value:e},r)}function Ix(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let h=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);h>=0||Fe(!1),o=o.slice(0,Math.min(o.length,h+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<o.length;h++){let f=o[h];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(c=h),f.route.id){let{loaderData:m,errors:v}=n,R=f.route.loader&&m[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||R){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((h,f,m)=>{let v,R=!1,P=null,b=null;n&&(v=a&&f.route.id?a[f.route.id]:void 0,P=f.route.errorElement||yx,l&&(c<0&&m===0?(R=!0,b=null):c===m&&(R=!0,b=f.route.hydrateFallbackElement||null)));let E=e.concat(o.slice(0,m+1)),w=()=>{let T;return v?T=P:R?T=b:f.route.Component?T=U.createElement(f.route.Component,null):f.route.element?T=f.route.element:T=h,U.createElement(wx,{match:f,routeContext:{outlet:h,matches:E,isDataRoute:n!=null},children:T})};return n&&(f.route.ErrorBoundary||f.route.errorElement||m===0)?U.createElement(vx,{location:n.location,revalidation:n.revalidation,component:P,error:v,children:w(),routeContext:{outlet:null,matches:E,isDataRoute:!0}}):w()},null)}var iS=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(iS||{}),vh=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(vh||{});function Ex(t){let e=U.useContext(sd);return e||Fe(!1),e}function Tx(t){let e=U.useContext(tS);return e||Fe(!1),e}function Sx(t){let e=U.useContext(Ts);return e||Fe(!1),e}function sS(t){let e=Sx(),n=e.matches[e.matches.length-1];return n.route.id||Fe(!1),n.route.id}function Rx(){var t;let e=U.useContext(nS),n=Tx(vh.UseRouteError),r=sS(vh.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function Ax(){let{router:t}=Ex(iS.UseNavigateStable),e=sS(vh.UseNavigateStable),n=U.useRef(!1);return rS(()=>{n.current=!0}),U.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,jl({fromRouteId:e},s)))},[t,e])}function nr(t){Fe(!1)}function Px(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Wr.Pop,navigator:s,static:o=!1,future:a}=t;hu()&&Fe(!1);let l=e.replace(/^\/*/,"/"),c=U.useMemo(()=>({basename:l,navigator:s,static:o,future:jl({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Jo(r));let{pathname:h="/",search:f="",hash:m="",state:v=null,key:R="default"}=r,P=U.useMemo(()=>{let b=Co(h,l);return b==null?null:{location:{pathname:b,search:f,hash:m,state:v,key:R},navigationType:i}},[l,h,f,m,v,R,i]);return P==null?null:U.createElement(Ei.Provider,{value:c},U.createElement(od.Provider,{children:n,value:P}))}function Cx(t){let{children:e,location:n}=t;return mx(rm(e),n)}new Promise(()=>{});function rm(t,e){e===void 0&&(e=[]);let n=[];return U.Children.forEach(t,(r,i)=>{if(!U.isValidElement(r))return;let s=[...e,i];if(r.type===U.Fragment){n.push.apply(n,rm(r.props.children,s));return}r.type!==nr&&Fe(!1),!r.props.index||!r.props.children||Fe(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=rm(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.24.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wh(){return wh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wh.apply(this,arguments)}function oS(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function kx(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function bx(t,e){return t.button===0&&(!e||e==="_self")&&!kx(t)}const xx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Nx=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Dx="6";try{window.__reactRouterVersion=Dx}catch{}const Ox=U.createContext({isTransitioning:!1}),Vx="startTransition",Vw=k1[Vx];function Lx(t){let{basename:e,children:n,future:r,window:i}=t,s=U.useRef();s.current==null&&(s.current=Bb({window:i,v5Compat:!0}));let o=s.current,[a,l]=U.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},h=U.useCallback(f=>{c&&Vw?Vw(()=>l(f)):l(f)},[l,c]);return U.useLayoutEffect(()=>o.listen(h),[o,h]),U.createElement(Px,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const Mx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ux=U.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:c,preventScrollReset:h,unstable_viewTransition:f}=e,m=oS(e,xx),{basename:v}=U.useContext(Ei),R,P=!1;if(typeof c=="string"&&Fx.test(c)&&(R=c,Mx))try{let T=new URL(window.location.href),x=c.startsWith("//")?new URL(T.protocol+c):new URL(c),F=Co(x.pathname,v);x.origin===T.origin&&F!=null?c=F+x.search+x.hash:P=!0}catch{}let b=dx(c,{relative:i}),E=Bx(c,{replace:o,state:a,target:l,preventScrollReset:h,relative:i,unstable_viewTransition:f});function w(T){r&&r(T),T.defaultPrevented||E(T)}return U.createElement("a",wh({},m,{href:R||b,onClick:P||s?r:w,ref:n,target:l}))}),Oi=U.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:c,children:h}=e,f=oS(e,Nx),m=ad(l,{relative:f.relative}),v=Xo(),R=U.useContext(tS),{navigator:P,basename:b}=U.useContext(Ei),E=R!=null&&zx(m)&&c===!0,w=P.encodeLocation?P.encodeLocation(m).pathname:m.pathname,T=v.pathname,x=R&&R.navigation&&R.navigation.location?R.navigation.location.pathname:null;i||(T=T.toLowerCase(),x=x?x.toLowerCase():null,w=w.toLowerCase()),x&&b&&(x=Co(x,b)||x);const F=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let M=T===w||!o&&T.startsWith(w)&&T.charAt(F)==="/",A=x!=null&&(x===w||!o&&x.startsWith(w)&&x.charAt(w.length)==="/"),_={isActive:M,isPending:A,isTransitioning:E},g=M?r:void 0,S;typeof s=="function"?S=s(_):S=[s,M?"active":null,A?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let k=typeof a=="function"?a(_):a;return U.createElement(Ux,wh({},f,{"aria-current":g,className:S,ref:n,style:k,to:l,unstable_viewTransition:c}),typeof h=="function"?h(_):h)});var im;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(im||(im={}));var Lw;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Lw||(Lw={}));function jx(t){let e=U.useContext(sd);return e||Fe(!1),e}function Bx(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=fx(),c=Xo(),h=ad(t,{relative:o});return U.useCallback(f=>{if(bx(f,n)){f.preventDefault();let m=r!==void 0?r:_h(c)===_h(h);l(t,{replace:m,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[c,l,h,r,i,n,t,s,o,a])}function zx(t,e){e===void 0&&(e={});let n=U.useContext(Ox);n==null&&Fe(!1);let{basename:r}=jx(im.useViewTransitionState),i=ad(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=Co(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Co(n.nextLocation.pathname,r)||n.nextLocation.pathname;return yh(i.pathname,o)!=null||yh(i.pathname,s)!=null}var Mw={};/**
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
 */const aS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},$x=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},lS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,h=s>>2,f=(s&3)<<4|a>>4;let m=(a&15)<<2|c>>6,v=c&63;l||(v=64,o||(m=64)),r.push(n[h],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(aS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$x(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||f==null)throw new qx;const m=s<<2|a>>4;if(r.push(m),c!==64){const v=a<<4&240|c>>2;if(r.push(v),f!==64){const R=c<<6&192|f;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Gx=function(t){const e=aS(t);return lS.encodeByteArray(e,!0)},Ih=function(t){return Gx(t).replace(/\./g,"")},uS=function(t){try{return lS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Eh(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Wx(n)||(t[n]=Eh(t[n],e[n]));return t}function Wx(t){return t!=="__proto__"}/**
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
 */function Hx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kx=()=>Hx().__FIREBASE_DEFAULTS__,Qx=()=>{if(typeof process>"u"||typeof Mw>"u")return;const t=Mw.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Yx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uS(t[1]);return e&&JSON.parse(e)},ld=()=>{try{return Kx()||Qx()||Yx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cS=t=>{var e,n;return(n=(e=ld())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},hS=t=>{const e=cS(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},dS=()=>{var t;return(t=ld())===null||t===void 0?void 0:t.config},fS=t=>{var e;return(e=ld())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Jx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function pS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ih(JSON.stringify(n)),Ih(JSON.stringify(o)),""].join(".")}/**
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
 */function Pe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Pe())}function zg(){var t;const e=(t=ld())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mS(){return typeof self=="object"&&self.self===self}function gS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $g(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _S(){const t=Pe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yS(){return!zg()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Bl(){try{return typeof indexedDB=="object"}catch{return!1}}function Zx(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const eN="FirebaseError";class Tt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eN,Object.setPrototypeOf(this,Tt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ss.prototype.create)}}class Ss{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?tN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Tt(i,a,r)}}function tN(t,e){return t.replace(nN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const nN=/\{\$([^}]+)}/g;/**
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
 */function Fw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function rN(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ko(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Uw(s)&&Uw(o)){if(!ko(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Uw(t){return t!==null&&typeof t=="object"}/**
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
 */function Zo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ya(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vS(t,e){const n=new iN(t,e);return n.subscribe.bind(n)}class iN{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sN(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=qf),i.error===void 0&&(i.error=qf),i.complete===void 0&&(i.complete=qf);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sN(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function qf(){}/**
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
 */function Y(t){return t&&t._delegate?t._delegate:t}class gn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class oN{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lN(e))try{this.getOrInitializeService({instanceIdentifier:Fi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Fi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fi){return this.instances.has(e)}getOptions(e=Fi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aN(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Fi){return this.component?this.component.multipleInstances?e:Fi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aN(t){return t===Fi?void 0:t}function lN(t){return t.instantiationMode==="EAGER"}/**
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
 */class wS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oN(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const qg=[];var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const IS={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},uN=re.INFO,cN={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},hN=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=cN[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ud{constructor(e){this.name=e,this._logLevel=uN,this._logHandler=hN,this._userLogHandler=null,qg.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?IS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}function dN(t){qg.forEach(e=>{e.setLogLevel(t)})}function fN(t,e){for(const n of qg){let r=null;e&&e.level&&(r=IS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r??i.logLevel)&&t({level:re[s].toLowerCase(),message:a,args:o,type:i.name})}}}const pN=(t,e)=>e.some(n=>t instanceof n);let jw,Bw;function mN(){return jw||(jw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gN(){return Bw||(Bw=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ES=new WeakMap,sm=new WeakMap,TS=new WeakMap,Gf=new WeakMap,Gg=new WeakMap;function _N(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ii(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ES.set(n,t)}).catch(()=>{}),Gg.set(e,t),e}function yN(t){if(sm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sm.set(t,e)}let om={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||TS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ii(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vN(t){om=t(om)}function wN(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wf(this),e,...n);return TS.set(r,e.sort?e.sort():[e]),ii(r)}:gN().includes(t)?function(...e){return t.apply(Wf(this),e),ii(ES.get(this))}:function(...e){return ii(t.apply(Wf(this),e))}}function IN(t){return typeof t=="function"?wN(t):(t instanceof IDBTransaction&&yN(t),pN(t,mN())?new Proxy(t,om):t)}function ii(t){if(t instanceof IDBRequest)return _N(t);if(Gf.has(t))return Gf.get(t);const e=IN(t);return e!==t&&(Gf.set(t,e),Gg.set(e,t)),e}const Wf=t=>Gg.get(t);function EN(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ii(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ii(o.result),l.oldVersion,l.newVersion,ii(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const TN=["get","getKey","getAll","getAllKeys","count"],SN=["put","add","delete","clear"],Hf=new Map;function zw(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hf.get(e))return Hf.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=SN.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TN.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Hf.set(e,s),s}vN(t=>({...t,get:(e,n,r)=>zw(e,n)||t.get(e,n,r),has:(e,n)=>!!zw(e,n)||t.has(e,n)}));/**
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
 */class RN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AN(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AN(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Th="@firebase/app",am="0.10.5";/**
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
 */const ls=new ud("@firebase/app"),PN="@firebase/app-compat",CN="@firebase/analytics-compat",kN="@firebase/analytics",bN="@firebase/app-check-compat",xN="@firebase/app-check",NN="@firebase/auth",DN="@firebase/auth-compat",ON="@firebase/database",VN="@firebase/database-compat",LN="@firebase/functions",MN="@firebase/functions-compat",FN="@firebase/installations",UN="@firebase/installations-compat",jN="@firebase/messaging",BN="@firebase/messaging-compat",zN="@firebase/performance",$N="@firebase/performance-compat",qN="@firebase/remote-config",GN="@firebase/remote-config-compat",WN="@firebase/storage",HN="@firebase/storage-compat",KN="@firebase/firestore",QN="@firebase/vertexai-preview",YN="@firebase/firestore-compat",JN="firebase",XN="10.12.2";/**
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
 */const li="[DEFAULT]",ZN={[Th]:"fire-core",[PN]:"fire-core-compat",[kN]:"fire-analytics",[CN]:"fire-analytics-compat",[xN]:"fire-app-check",[bN]:"fire-app-check-compat",[NN]:"fire-auth",[DN]:"fire-auth-compat",[ON]:"fire-rtdb",[VN]:"fire-rtdb-compat",[LN]:"fire-fn",[MN]:"fire-fn-compat",[FN]:"fire-iid",[UN]:"fire-iid-compat",[jN]:"fire-fcm",[BN]:"fire-fcm-compat",[zN]:"fire-perf",[$N]:"fire-perf-compat",[qN]:"fire-rc",[GN]:"fire-rc-compat",[WN]:"fire-gcs",[HN]:"fire-gcs-compat",[KN]:"fire-fst",[YN]:"fire-fst-compat",[QN]:"fire-vertex","fire-js":"fire-js",[JN]:"fire-js-all"};/**
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
 */const ui=new Map,bo=new Map,xo=new Map;function zl(t,e){try{t.container.addComponent(e)}catch(n){ls.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function SS(t,e){t.container.addOrOverwriteComponent(e)}function vr(t){const e=t.name;if(xo.has(e))return ls.debug(`There were multiple attempts to register component ${e}.`),!1;xo.set(e,t);for(const n of ui.values())zl(n,t);for(const n of bo.values())zl(n,t);return!0}function ea(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function eD(t,e,n=li){ea(t,e).clearInstance(n)}function RS(t){return t.options!==void 0}function Me(t){return t.settings!==void 0}function tD(){xo.clear()}/**
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
 */const nD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fn=new Ss("app","Firebase",nD);/**
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
 */let AS=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fn.create("app-deleted",{appName:this._name})}};/**
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
 */class rD extends AS{constructor(e,n,r,i){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,o={name:r,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,o,i);else{const a=e;super(a.options,o,i)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,en(Th,am,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){Hg(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw fn.create("server-app-deleted")}}/**
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
 */const Sr=XN;function Wg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:li,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw fn.create("bad-app-name",{appName:String(i)});if(n||(n=dS()),!n)throw fn.create("no-options");const s=ui.get(i);if(s){if(ko(n,s.options)&&ko(r,s.config))return s;throw fn.create("duplicate-app",{appName:i})}const o=new wS(i);for(const l of xo.values())o.addComponent(l);const a=new AS(n,r,o);return ui.set(i,a),a}function iD(t,e){if(mS())throw fn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;RS(t)?n=t.options:n=t;const r=Object.assign(Object.assign({},e),n);r.releaseOnDeref!==void 0&&delete r.releaseOnDeref;const i=c=>[...c].reduce((h,f)=>Math.imul(31,h)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw fn.create("finalization-registry-not-supported",{});const s=""+i(JSON.stringify(r)),o=bo.get(s);if(o)return o.incRefCount(e.releaseOnDeref),o;const a=new wS(s);for(const c of xo.values())a.addComponent(c);const l=new rD(n,e,s,a);return bo.set(s,l),l}function cd(t=li){const e=ui.get(t);if(!e&&t===li&&dS())return Wg();if(!e)throw fn.create("no-app",{appName:t});return e}function sD(){return Array.from(ui.values())}async function Hg(t){let e=!1;const n=t.name;ui.has(n)?(e=!0,ui.delete(n)):bo.has(n)&&t.decRefCount()<=0&&(bo.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(r=>r.delete())),t.isDeleted=!0)}function en(t,e,n){var r;let i=(r=ZN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ls.warn(a.join(" "));return}vr(new gn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function PS(t,e){if(t!==null&&typeof t!="function")throw fn.create("invalid-log-argument");fN(t,e)}function CS(t){dN(t)}/**
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
 */const oD="firebase-heartbeat-database",aD=1,$l="firebase-heartbeat-store";let Kf=null;function kS(){return Kf||(Kf=EN(oD,aD,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore($l)}catch(n){console.warn(n)}}}}).catch(t=>{throw fn.create("idb-open",{originalErrorMessage:t.message})})),Kf}async function lD(t){try{const n=(await kS()).transaction($l),r=await n.objectStore($l).get(bS(t));return await n.done,r}catch(e){if(e instanceof Tt)ls.warn(e.message);else{const n=fn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ls.warn(n.message)}}}async function $w(t,e){try{const r=(await kS()).transaction($l,"readwrite");await r.objectStore($l).put(e,bS(t)),await r.done}catch(n){if(n instanceof Tt)ls.warn(n.message);else{const r=fn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ls.warn(r.message)}}}function bS(t){return`${t.name}!${t.options.appId}`}/**
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
 */const uD=1024,cD=30*24*60*60*1e3;class hD{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fD(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=cD}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qw(),{heartbeatsToSend:r,unsentEntries:i}=dD(this._heartbeatsCache.heartbeats),s=Ih(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function qw(){return new Date().toISOString().substring(0,10)}function dD(t,e=uD){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Gw(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Gw(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Bl()?Zx().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lD(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $w(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return $w(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Gw(t){return Ih(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function pD(t){vr(new gn("platform-logger",e=>new RN(e),"PRIVATE")),vr(new gn("heartbeat",e=>new hD(e),"PRIVATE")),en(Th,am,t),en(Th,am,"esm2017"),en("fire-js","")}pD("");const mD=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Tt,SDK_VERSION:Sr,_DEFAULT_ENTRY_NAME:li,_addComponent:zl,_addOrOverwriteComponent:SS,_apps:ui,_clearComponents:tD,_components:xo,_getProvider:ea,_isFirebaseApp:RS,_isFirebaseServerApp:Me,_registerComponent:vr,_removeServiceInstance:eD,_serverApps:bo,deleteApp:Hg,getApp:cd,getApps:sD,initializeApp:Wg,initializeServerApp:iD,onLog:PS,registerVersion:en,setLogLevel:CS},Symbol.toStringTag,{value:"Module"}));var Ww=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zi,xS;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function g(){}g.prototype=_.prototype,A.D=_.prototype,A.prototype=new g,A.prototype.constructor=A,A.C=function(S,k,N){for(var C=Array(arguments.length-2),on=2;on<arguments.length;on++)C[on-2]=arguments[on];return _.prototype[k].apply(S,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,_,g){g||(g=0);var S=Array(16);if(typeof _=="string")for(var k=0;16>k;++k)S[k]=_.charCodeAt(g++)|_.charCodeAt(g++)<<8|_.charCodeAt(g++)<<16|_.charCodeAt(g++)<<24;else for(k=0;16>k;++k)S[k]=_[g++]|_[g++]<<8|_[g++]<<16|_[g++]<<24;_=A.g[0],g=A.g[1],k=A.g[2];var N=A.g[3],C=_+(N^g&(k^N))+S[0]+3614090360&4294967295;_=g+(C<<7&4294967295|C>>>25),C=N+(k^_&(g^k))+S[1]+3905402710&4294967295,N=_+(C<<12&4294967295|C>>>20),C=k+(g^N&(_^g))+S[2]+606105819&4294967295,k=N+(C<<17&4294967295|C>>>15),C=g+(_^k&(N^_))+S[3]+3250441966&4294967295,g=k+(C<<22&4294967295|C>>>10),C=_+(N^g&(k^N))+S[4]+4118548399&4294967295,_=g+(C<<7&4294967295|C>>>25),C=N+(k^_&(g^k))+S[5]+1200080426&4294967295,N=_+(C<<12&4294967295|C>>>20),C=k+(g^N&(_^g))+S[6]+2821735955&4294967295,k=N+(C<<17&4294967295|C>>>15),C=g+(_^k&(N^_))+S[7]+4249261313&4294967295,g=k+(C<<22&4294967295|C>>>10),C=_+(N^g&(k^N))+S[8]+1770035416&4294967295,_=g+(C<<7&4294967295|C>>>25),C=N+(k^_&(g^k))+S[9]+2336552879&4294967295,N=_+(C<<12&4294967295|C>>>20),C=k+(g^N&(_^g))+S[10]+4294925233&4294967295,k=N+(C<<17&4294967295|C>>>15),C=g+(_^k&(N^_))+S[11]+2304563134&4294967295,g=k+(C<<22&4294967295|C>>>10),C=_+(N^g&(k^N))+S[12]+1804603682&4294967295,_=g+(C<<7&4294967295|C>>>25),C=N+(k^_&(g^k))+S[13]+4254626195&4294967295,N=_+(C<<12&4294967295|C>>>20),C=k+(g^N&(_^g))+S[14]+2792965006&4294967295,k=N+(C<<17&4294967295|C>>>15),C=g+(_^k&(N^_))+S[15]+1236535329&4294967295,g=k+(C<<22&4294967295|C>>>10),C=_+(k^N&(g^k))+S[1]+4129170786&4294967295,_=g+(C<<5&4294967295|C>>>27),C=N+(g^k&(_^g))+S[6]+3225465664&4294967295,N=_+(C<<9&4294967295|C>>>23),C=k+(_^g&(N^_))+S[11]+643717713&4294967295,k=N+(C<<14&4294967295|C>>>18),C=g+(N^_&(k^N))+S[0]+3921069994&4294967295,g=k+(C<<20&4294967295|C>>>12),C=_+(k^N&(g^k))+S[5]+3593408605&4294967295,_=g+(C<<5&4294967295|C>>>27),C=N+(g^k&(_^g))+S[10]+38016083&4294967295,N=_+(C<<9&4294967295|C>>>23),C=k+(_^g&(N^_))+S[15]+3634488961&4294967295,k=N+(C<<14&4294967295|C>>>18),C=g+(N^_&(k^N))+S[4]+3889429448&4294967295,g=k+(C<<20&4294967295|C>>>12),C=_+(k^N&(g^k))+S[9]+568446438&4294967295,_=g+(C<<5&4294967295|C>>>27),C=N+(g^k&(_^g))+S[14]+3275163606&4294967295,N=_+(C<<9&4294967295|C>>>23),C=k+(_^g&(N^_))+S[3]+4107603335&4294967295,k=N+(C<<14&4294967295|C>>>18),C=g+(N^_&(k^N))+S[8]+1163531501&4294967295,g=k+(C<<20&4294967295|C>>>12),C=_+(k^N&(g^k))+S[13]+2850285829&4294967295,_=g+(C<<5&4294967295|C>>>27),C=N+(g^k&(_^g))+S[2]+4243563512&4294967295,N=_+(C<<9&4294967295|C>>>23),C=k+(_^g&(N^_))+S[7]+1735328473&4294967295,k=N+(C<<14&4294967295|C>>>18),C=g+(N^_&(k^N))+S[12]+2368359562&4294967295,g=k+(C<<20&4294967295|C>>>12),C=_+(g^k^N)+S[5]+4294588738&4294967295,_=g+(C<<4&4294967295|C>>>28),C=N+(_^g^k)+S[8]+2272392833&4294967295,N=_+(C<<11&4294967295|C>>>21),C=k+(N^_^g)+S[11]+1839030562&4294967295,k=N+(C<<16&4294967295|C>>>16),C=g+(k^N^_)+S[14]+4259657740&4294967295,g=k+(C<<23&4294967295|C>>>9),C=_+(g^k^N)+S[1]+2763975236&4294967295,_=g+(C<<4&4294967295|C>>>28),C=N+(_^g^k)+S[4]+1272893353&4294967295,N=_+(C<<11&4294967295|C>>>21),C=k+(N^_^g)+S[7]+4139469664&4294967295,k=N+(C<<16&4294967295|C>>>16),C=g+(k^N^_)+S[10]+3200236656&4294967295,g=k+(C<<23&4294967295|C>>>9),C=_+(g^k^N)+S[13]+681279174&4294967295,_=g+(C<<4&4294967295|C>>>28),C=N+(_^g^k)+S[0]+3936430074&4294967295,N=_+(C<<11&4294967295|C>>>21),C=k+(N^_^g)+S[3]+3572445317&4294967295,k=N+(C<<16&4294967295|C>>>16),C=g+(k^N^_)+S[6]+76029189&4294967295,g=k+(C<<23&4294967295|C>>>9),C=_+(g^k^N)+S[9]+3654602809&4294967295,_=g+(C<<4&4294967295|C>>>28),C=N+(_^g^k)+S[12]+3873151461&4294967295,N=_+(C<<11&4294967295|C>>>21),C=k+(N^_^g)+S[15]+530742520&4294967295,k=N+(C<<16&4294967295|C>>>16),C=g+(k^N^_)+S[2]+3299628645&4294967295,g=k+(C<<23&4294967295|C>>>9),C=_+(k^(g|~N))+S[0]+4096336452&4294967295,_=g+(C<<6&4294967295|C>>>26),C=N+(g^(_|~k))+S[7]+1126891415&4294967295,N=_+(C<<10&4294967295|C>>>22),C=k+(_^(N|~g))+S[14]+2878612391&4294967295,k=N+(C<<15&4294967295|C>>>17),C=g+(N^(k|~_))+S[5]+4237533241&4294967295,g=k+(C<<21&4294967295|C>>>11),C=_+(k^(g|~N))+S[12]+1700485571&4294967295,_=g+(C<<6&4294967295|C>>>26),C=N+(g^(_|~k))+S[3]+2399980690&4294967295,N=_+(C<<10&4294967295|C>>>22),C=k+(_^(N|~g))+S[10]+4293915773&4294967295,k=N+(C<<15&4294967295|C>>>17),C=g+(N^(k|~_))+S[1]+2240044497&4294967295,g=k+(C<<21&4294967295|C>>>11),C=_+(k^(g|~N))+S[8]+1873313359&4294967295,_=g+(C<<6&4294967295|C>>>26),C=N+(g^(_|~k))+S[15]+4264355552&4294967295,N=_+(C<<10&4294967295|C>>>22),C=k+(_^(N|~g))+S[6]+2734768916&4294967295,k=N+(C<<15&4294967295|C>>>17),C=g+(N^(k|~_))+S[13]+1309151649&4294967295,g=k+(C<<21&4294967295|C>>>11),C=_+(k^(g|~N))+S[4]+4149444226&4294967295,_=g+(C<<6&4294967295|C>>>26),C=N+(g^(_|~k))+S[11]+3174756917&4294967295,N=_+(C<<10&4294967295|C>>>22),C=k+(_^(N|~g))+S[2]+718787259&4294967295,k=N+(C<<15&4294967295|C>>>17),C=g+(N^(k|~_))+S[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(k+(C<<21&4294967295|C>>>11))&4294967295,A.g[2]=A.g[2]+k&4294967295,A.g[3]=A.g[3]+N&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var g=_-this.blockSize,S=this.B,k=this.h,N=0;N<_;){if(k==0)for(;N<=g;)i(this,A,N),N+=this.blockSize;if(typeof A=="string"){for(;N<_;)if(S[k++]=A.charCodeAt(N++),k==this.blockSize){i(this,S),k=0;break}}else for(;N<_;)if(S[k++]=A[N++],k==this.blockSize){i(this,S),k=0;break}}this.h=k,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var g=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=g&255,g/=256;for(this.u(A),A=Array(16),_=g=0;4>_;++_)for(var S=0;32>S;S+=8)A[g++]=this.g[_]>>>S&255;return A};function s(A,_){var g=a;return Object.prototype.hasOwnProperty.call(g,A)?g[A]:g[A]=_(A)}function o(A,_){this.h=_;for(var g=[],S=!0,k=A.length-1;0<=k;k--){var N=A[k]|0;S&&N==_||(g[k]=N,S=!1)}this.g=g}var a={};function l(A){return-128<=A&&128>A?s(A,function(_){return new o([_|0],0>_?-1:0)}):new o([A|0],0>A?-1:0)}function c(A){if(isNaN(A)||!isFinite(A))return f;if(0>A)return b(c(-A));for(var _=[],g=1,S=0;A>=g;S++)_[S]=A/g|0,g*=4294967296;return new o(_,0)}function h(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return b(h(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=c(Math.pow(_,8)),S=f,k=0;k<A.length;k+=8){var N=Math.min(8,A.length-k),C=parseInt(A.substring(k,k+N),_);8>N?(N=c(Math.pow(_,N)),S=S.j(N).add(c(C))):(S=S.j(g),S=S.add(c(C)))}return S}var f=l(0),m=l(1),v=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-b(this).m();for(var A=0,_=1,g=0;g<this.g.length;g++){var S=this.i(g);A+=(0<=S?S:4294967296+S)*_,_*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(P(this))return"-"+b(this).toString(A);for(var _=c(Math.pow(A,6)),g=this,S="";;){var k=x(g,_).g;g=E(g,k.j(_));var N=((0<g.g.length?g.g[0]:g.h)>>>0).toString(A);if(g=k,R(g))return N+S;for(;6>N.length;)N="0"+N;S=N+S}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function P(A){return A.h==-1}t.l=function(A){return A=E(this,A),P(A)?-1:R(A)?0:1};function b(A){for(var _=A.g.length,g=[],S=0;S<_;S++)g[S]=~A.g[S];return new o(g,~A.h).add(m)}t.abs=function(){return P(this)?b(this):this},t.add=function(A){for(var _=Math.max(this.g.length,A.g.length),g=[],S=0,k=0;k<=_;k++){var N=S+(this.i(k)&65535)+(A.i(k)&65535),C=(N>>>16)+(this.i(k)>>>16)+(A.i(k)>>>16);S=C>>>16,N&=65535,C&=65535,g[k]=C<<16|N}return new o(g,g[g.length-1]&-2147483648?-1:0)};function E(A,_){return A.add(b(_))}t.j=function(A){if(R(this)||R(A))return f;if(P(this))return P(A)?b(this).j(b(A)):b(b(this).j(A));if(P(A))return b(this.j(b(A)));if(0>this.l(v)&&0>A.l(v))return c(this.m()*A.m());for(var _=this.g.length+A.g.length,g=[],S=0;S<2*_;S++)g[S]=0;for(S=0;S<this.g.length;S++)for(var k=0;k<A.g.length;k++){var N=this.i(S)>>>16,C=this.i(S)&65535,on=A.i(k)>>>16,ki=A.i(k)&65535;g[2*S+2*k]+=C*ki,w(g,2*S+2*k),g[2*S+2*k+1]+=N*ki,w(g,2*S+2*k+1),g[2*S+2*k+1]+=C*on,w(g,2*S+2*k+1),g[2*S+2*k+2]+=N*on,w(g,2*S+2*k+2)}for(S=0;S<_;S++)g[S]=g[2*S+1]<<16|g[2*S];for(S=_;S<2*_;S++)g[S]=0;return new o(g,0)};function w(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function T(A,_){this.g=A,this.h=_}function x(A,_){if(R(_))throw Error("division by zero");if(R(A))return new T(f,f);if(P(A))return _=x(b(A),_),new T(b(_.g),b(_.h));if(P(_))return _=x(A,b(_)),new T(b(_.g),_.h);if(30<A.g.length){if(P(A)||P(_))throw Error("slowDivide_ only works with positive integers.");for(var g=m,S=_;0>=S.l(A);)g=F(g),S=F(S);var k=M(g,1),N=M(S,1);for(S=M(S,2),g=M(g,2);!R(S);){var C=N.add(S);0>=C.l(A)&&(k=k.add(g),N=C),S=M(S,1),g=M(g,1)}return _=E(A,k.j(_)),new T(k,_)}for(k=f;0<=A.l(_);){for(g=Math.max(1,Math.floor(A.m()/_.m())),S=Math.ceil(Math.log(g)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),N=c(g),C=N.j(_);P(C)||0<C.l(A);)g-=S,N=c(g),C=N.j(_);R(N)&&(N=m),k=k.add(N),A=E(A,C)}return new T(k,A)}t.A=function(A){return x(this,A).h},t.and=function(A){for(var _=Math.max(this.g.length,A.g.length),g=[],S=0;S<_;S++)g[S]=this.i(S)&A.i(S);return new o(g,this.h&A.h)},t.or=function(A){for(var _=Math.max(this.g.length,A.g.length),g=[],S=0;S<_;S++)g[S]=this.i(S)|A.i(S);return new o(g,this.h|A.h)},t.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),g=[],S=0;S<_;S++)g[S]=this.i(S)^A.i(S);return new o(g,this.h^A.h)};function F(A){for(var _=A.g.length+1,g=[],S=0;S<_;S++)g[S]=A.i(S)<<1|A.i(S-1)>>>31;return new o(g,A.h)}function M(A,_){var g=_>>5;_%=32;for(var S=A.g.length-g,k=[],N=0;N<S;N++)k[N]=0<_?A.i(N+g)>>>_|A.i(N+g+1)<<32-_:A.i(N+g);return new o(k,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,xS=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Zi=o}).apply(typeof Ww<"u"?Ww:typeof self<"u"?self:typeof window<"u"?window:{});var dc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var NS,DS,Ja,OS,Oc,lm,VS,LS,MS;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,d,p){return u==Array.prototype||u==Object.prototype||(u[d]=p.value),u};function n(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof dc=="object"&&dc];for(var d=0;d<u.length;++d){var p=u[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(u,d){if(d)e:{var p=r;u=u.split(".");for(var y=0;y<u.length-1;y++){var D=u[y];if(!(D in p))break e;p=p[D]}u=u[u.length-1],y=p[u],d=d(y),d!=y&&d!=null&&e(p,u,{configurable:!0,writable:!0,value:d})}}function s(u,d){u instanceof String&&(u+="");var p=0,y=!1,D={next:function(){if(!y&&p<u.length){var L=p++;return{value:d(L,u[L]),done:!1}}return y=!0,{done:!0,value:void 0}}};return D[Symbol.iterator]=function(){return D},D}i("Array.prototype.values",function(u){return u||function(){return s(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(u){var d=typeof u;return d=d!="object"?d:u?Array.isArray(u)?"array":d:"null",d=="array"||d=="object"&&typeof u.length=="number"}function c(u){var d=typeof u;return d=="object"&&u!=null||d=="function"}function h(u,d,p){return u.call.apply(u.bind,arguments)}function f(u,d,p){if(!u)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var D=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(D,y),u.apply(d,D)}}return function(){return u.apply(d,arguments)}}function m(u,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function v(u,d){var p=Array.prototype.slice.call(arguments,1);return function(){var y=p.slice();return y.push.apply(y,arguments),u.apply(this,y)}}function R(u,d){function p(){}p.prototype=d.prototype,u.aa=d.prototype,u.prototype=new p,u.prototype.constructor=u,u.Qb=function(y,D,L){for(var q=Array(arguments.length-2),me=2;me<arguments.length;me++)q[me-2]=arguments[me];return d.prototype[D].apply(y,q)}}function P(u){const d=u.length;if(0<d){const p=Array(d);for(let y=0;y<d;y++)p[y]=u[y];return p}return[]}function b(u,d){for(let p=1;p<arguments.length;p++){const y=arguments[p];if(l(y)){const D=u.length||0,L=y.length||0;u.length=D+L;for(let q=0;q<L;q++)u[D+q]=y[q]}else u.push(y)}}class E{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(u){return/^[\s\xa0]*$/.test(u)}function T(){var u=a.navigator;return u&&(u=u.userAgent)?u:""}function x(u){return x[" "](u),u}x[" "]=function(){};var F=T().indexOf("Gecko")!=-1&&!(T().toLowerCase().indexOf("webkit")!=-1&&T().indexOf("Edge")==-1)&&!(T().indexOf("Trident")!=-1||T().indexOf("MSIE")!=-1)&&T().indexOf("Edge")==-1;function M(u,d,p){for(const y in u)d.call(p,u[y],y,u)}function A(u,d){for(const p in u)d.call(void 0,u[p],p,u)}function _(u){const d={};for(const p in u)d[p]=u[p];return d}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(u,d){let p,y;for(let D=1;D<arguments.length;D++){y=arguments[D];for(p in y)u[p]=y[p];for(let L=0;L<g.length;L++)p=g[L],Object.prototype.hasOwnProperty.call(y,p)&&(u[p]=y[p])}}function k(u){var d=1;u=u.split(":");const p=[];for(;0<d&&u.length;)p.push(u.shift()),d--;return u.length&&p.push(u.join(":")),p}function N(u){a.setTimeout(()=>{throw u},0)}function C(){var u=Z;let d=null;return u.g&&(d=u.g,u.g=u.g.next,u.g||(u.h=null),d.next=null),d}class on{constructor(){this.h=this.g=null}add(d,p){const y=ki.get();y.set(d,p),this.h?this.h.next=y:this.g=y,this.h=y}}var ki=new E(()=>new pa,u=>u.reset());class pa{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Qn,H=!1,Z=new on,ne=()=>{const u=a.Promise.resolve(void 0);Qn=()=>{u.then(Ce)}};var Ce=()=>{for(var u;u=C();){try{u.h.call(u.g)}catch(p){N(p)}var d=ki;d.j(u),100>d.h&&(d.h++,u.next=d.g,d.g=u)}H=!1};function pe(){this.s=this.s,this.C=this.C}pe.prototype.s=!1,pe.prototype.ma=function(){this.s||(this.s=!0,this.N())},pe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(u,d){this.type=u,this.g=this.target=d,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var Yn=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var u=!1,d=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return u}();function Jn(u,d){if($e.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var p=this.type=u.type,y=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=d,d=u.relatedTarget){if(F){e:{try{x(d.nodeName);var D=!0;break e}catch{}D=!1}D||(d=null)}}else p=="mouseover"?d=u.fromElement:p=="mouseout"&&(d=u.toElement);this.relatedTarget=d,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Xn[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&Jn.aa.h.call(this)}}R(Jn,$e);var Xn={2:"touch",3:"pen",4:"mouse"};Jn.prototype.h=function(){Jn.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var Zn="closure_listenable_"+(1e6*Math.random()|0),OC=0;function VC(u,d,p,y,D){this.listener=u,this.proxy=null,this.src=d,this.type=p,this.capture=!!y,this.ha=D,this.key=++OC,this.da=this.fa=!1}function Nu(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Du(u){this.src=u,this.g={},this.h=0}Du.prototype.add=function(u,d,p,y,D){var L=u.toString();u=this.g[L],u||(u=this.g[L]=[],this.h++);var q=Kd(u,d,y,D);return-1<q?(d=u[q],p||(d.fa=!1)):(d=new VC(d,this.src,L,!!y,D),d.fa=p,u.push(d)),d};function Hd(u,d){var p=d.type;if(p in u.g){var y=u.g[p],D=Array.prototype.indexOf.call(y,d,void 0),L;(L=0<=D)&&Array.prototype.splice.call(y,D,1),L&&(Nu(d),u.g[p].length==0&&(delete u.g[p],u.h--))}}function Kd(u,d,p,y){for(var D=0;D<u.length;++D){var L=u[D];if(!L.da&&L.listener==d&&L.capture==!!p&&L.ha==y)return D}return-1}var Qd="closure_lm_"+(1e6*Math.random()|0),Yd={};function Ty(u,d,p,y,D){if(Array.isArray(d)){for(var L=0;L<d.length;L++)Ty(u,d[L],p,y,D);return null}return p=Ay(p),u&&u[Zn]?u.K(d,p,c(y)?!!y.capture:!!y,D):LC(u,d,p,!1,y,D)}function LC(u,d,p,y,D,L){if(!d)throw Error("Invalid event type");var q=c(D)?!!D.capture:!!D,me=Xd(u);if(me||(u[Qd]=me=new Du(u)),p=me.add(d,p,y,q,L),p.proxy)return p;if(y=MC(),p.proxy=y,y.src=u,y.listener=p,u.addEventListener)Yn||(D=q),D===void 0&&(D=!1),u.addEventListener(d.toString(),y,D);else if(u.attachEvent)u.attachEvent(Ry(d.toString()),y);else if(u.addListener&&u.removeListener)u.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return p}function MC(){function u(p){return d.call(u.src,u.listener,p)}const d=FC;return u}function Sy(u,d,p,y,D){if(Array.isArray(d))for(var L=0;L<d.length;L++)Sy(u,d[L],p,y,D);else y=c(y)?!!y.capture:!!y,p=Ay(p),u&&u[Zn]?(u=u.i,d=String(d).toString(),d in u.g&&(L=u.g[d],p=Kd(L,p,y,D),-1<p&&(Nu(L[p]),Array.prototype.splice.call(L,p,1),L.length==0&&(delete u.g[d],u.h--)))):u&&(u=Xd(u))&&(d=u.g[d.toString()],u=-1,d&&(u=Kd(d,p,y,D)),(p=-1<u?d[u]:null)&&Jd(p))}function Jd(u){if(typeof u!="number"&&u&&!u.da){var d=u.src;if(d&&d[Zn])Hd(d.i,u);else{var p=u.type,y=u.proxy;d.removeEventListener?d.removeEventListener(p,y,u.capture):d.detachEvent?d.detachEvent(Ry(p),y):d.addListener&&d.removeListener&&d.removeListener(y),(p=Xd(d))?(Hd(p,u),p.h==0&&(p.src=null,d[Qd]=null)):Nu(u)}}}function Ry(u){return u in Yd?Yd[u]:Yd[u]="on"+u}function FC(u,d){if(u.da)u=!0;else{d=new Jn(d,this);var p=u.listener,y=u.ha||u.src;u.fa&&Jd(u),u=p.call(y,d)}return u}function Xd(u){return u=u[Qd],u instanceof Du?u:null}var Zd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ay(u){return typeof u=="function"?u:(u[Zd]||(u[Zd]=function(d){return u.handleEvent(d)}),u[Zd])}function mt(){pe.call(this),this.i=new Du(this),this.M=this,this.F=null}R(mt,pe),mt.prototype[Zn]=!0,mt.prototype.removeEventListener=function(u,d,p,y){Sy(this,u,d,p,y)};function Rt(u,d){var p,y=u.F;if(y)for(p=[];y;y=y.F)p.push(y);if(u=u.M,y=d.type||d,typeof d=="string")d=new $e(d,u);else if(d instanceof $e)d.target=d.target||u;else{var D=d;d=new $e(y,u),S(d,D)}if(D=!0,p)for(var L=p.length-1;0<=L;L--){var q=d.g=p[L];D=Ou(q,y,!0,d)&&D}if(q=d.g=u,D=Ou(q,y,!0,d)&&D,D=Ou(q,y,!1,d)&&D,p)for(L=0;L<p.length;L++)q=d.g=p[L],D=Ou(q,y,!1,d)&&D}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var u=this.i,d;for(d in u.g){for(var p=u.g[d],y=0;y<p.length;y++)Nu(p[y]);delete u.g[d],u.h--}}this.F=null},mt.prototype.K=function(u,d,p,y){return this.i.add(String(u),d,!1,p,y)},mt.prototype.L=function(u,d,p,y){return this.i.add(String(u),d,!0,p,y)};function Ou(u,d,p,y){if(d=u.i.g[String(d)],!d)return!0;d=d.concat();for(var D=!0,L=0;L<d.length;++L){var q=d[L];if(q&&!q.da&&q.capture==p){var me=q.listener,ut=q.ha||q.src;q.fa&&Hd(u.i,q),D=me.call(ut,y)!==!1&&D}}return D&&!y.defaultPrevented}function Py(u,d,p){if(typeof u=="function")p&&(u=m(u,p));else if(u&&typeof u.handleEvent=="function")u=m(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(u,d||0)}function Cy(u){u.g=Py(()=>{u.g=null,u.i&&(u.i=!1,Cy(u))},u.l);const d=u.h;u.h=null,u.m.apply(null,d)}class UC extends pe{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Cy(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ma(u){pe.call(this),this.h=u,this.g={}}R(ma,pe);var ky=[];function by(u){M(u.g,function(d,p){this.g.hasOwnProperty(p)&&Jd(d)},u),u.g={}}ma.prototype.N=function(){ma.aa.N.call(this),by(this)},ma.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ef=a.JSON.stringify,jC=a.JSON.parse,BC=class{stringify(u){return a.JSON.stringify(u,void 0)}parse(u){return a.JSON.parse(u,void 0)}};function tf(){}tf.prototype.h=null;function xy(u){return u.h||(u.h=u.i())}function Ny(){}var ga={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function nf(){$e.call(this,"d")}R(nf,$e);function rf(){$e.call(this,"c")}R(rf,$e);var bi={},Dy=null;function Vu(){return Dy=Dy||new mt}bi.La="serverreachability";function Oy(u){$e.call(this,bi.La,u)}R(Oy,$e);function _a(u){const d=Vu();Rt(d,new Oy(d))}bi.STAT_EVENT="statevent";function Vy(u,d){$e.call(this,bi.STAT_EVENT,u),this.stat=d}R(Vy,$e);function At(u){const d=Vu();Rt(d,new Vy(d,u))}bi.Ma="timingevent";function Ly(u,d){$e.call(this,bi.Ma,u),this.size=d}R(Ly,$e);function ya(u,d){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){u()},d)}function va(){this.g=!0}va.prototype.xa=function(){this.g=!1};function zC(u,d,p,y,D,L){u.info(function(){if(u.g)if(L)for(var q="",me=L.split("&"),ut=0;ut<me.length;ut++){var ce=me[ut].split("=");if(1<ce.length){var gt=ce[0];ce=ce[1];var _t=gt.split("_");q=2<=_t.length&&_t[1]=="type"?q+(gt+"="+ce+"&"):q+(gt+"=redacted&")}}else q=null;else q=L;return"XMLHTTP REQ ("+y+") [attempt "+D+"]: "+d+`
`+p+`
`+q})}function $C(u,d,p,y,D,L,q){u.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+D+"]: "+d+`
`+p+`
`+L+" "+q})}function Ns(u,d,p,y){u.info(function(){return"XMLHTTP TEXT ("+d+"): "+GC(u,p)+(y?" "+y:"")})}function qC(u,d){u.info(function(){return"TIMEOUT: "+d})}va.prototype.info=function(){};function GC(u,d){if(!u.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(u=0;u<p.length;u++)if(Array.isArray(p[u])){var y=p[u];if(!(2>y.length)){var D=y[1];if(Array.isArray(D)&&!(1>D.length)){var L=D[0];if(L!="noop"&&L!="stop"&&L!="close")for(var q=1;q<D.length;q++)D[q]=""}}}}return ef(p)}catch{return d}}var Lu={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},My={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},sf;function Mu(){}R(Mu,tf),Mu.prototype.g=function(){return new XMLHttpRequest},Mu.prototype.i=function(){return{}},sf=new Mu;function xr(u,d,p,y){this.j=u,this.i=d,this.l=p,this.R=y||1,this.U=new ma(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fy}function Fy(){this.i=null,this.g="",this.h=!1}var Uy={},of={};function af(u,d,p){u.L=1,u.v=Bu(er(d)),u.m=p,u.P=!0,jy(u,null)}function jy(u,d){u.F=Date.now(),Fu(u),u.A=er(u.v);var p=u.A,y=u.R;Array.isArray(y)||(y=[String(y)]),ev(p.i,"t",y),u.C=0,p=u.j.J,u.h=new Fy,u.g=yv(u.j,p?d:null,!u.m),0<u.O&&(u.M=new UC(m(u.Y,u,u.g),u.O)),d=u.U,p=u.g,y=u.ca;var D="readystatechange";Array.isArray(D)||(D&&(ky[0]=D.toString()),D=ky);for(var L=0;L<D.length;L++){var q=Ty(p,D[L],y||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=u.H?_(u.H):{},u.m?(u.u||(u.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,d)):(u.u="GET",u.g.ea(u.A,u.u,null,d)),_a(),zC(u.i,u.u,u.A,u.l,u.R,u.m)}xr.prototype.ca=function(u){u=u.target;const d=this.M;d&&tr(u)==3?d.j():this.Y(u)},xr.prototype.Y=function(u){try{if(u==this.g)e:{const _t=tr(this.g);var d=this.g.Ba();const Vs=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||av(this.g)))){this.J||_t!=4||d==7||(d==8||0>=Vs?_a(3):_a(2)),lf(this);var p=this.g.Z();this.X=p;t:if(By(this)){var y=av(this.g);u="";var D=y.length,L=tr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){xi(this),wa(this);var q="";break t}this.h.i=new a.TextDecoder}for(d=0;d<D;d++)this.h.h=!0,u+=this.h.i.decode(y[d],{stream:!(L&&d==D-1)});y.length=0,this.h.g+=u,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,$C(this.i,this.u,this.A,this.l,this.R,_t,p),this.o){if(this.T&&!this.K){t:{if(this.g){var me,ut=this.g;if((me=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(me)){var ce=me;break t}}ce=null}if(p=ce)Ns(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,uf(this,p);else{this.o=!1,this.s=3,At(12),xi(this),wa(this);break e}}if(this.P){p=!0;let yn;for(;!this.J&&this.C<q.length;)if(yn=WC(this,q),yn==of){_t==4&&(this.s=4,At(14),p=!1),Ns(this.i,this.l,null,"[Incomplete Response]");break}else if(yn==Uy){this.s=4,At(15),Ns(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else Ns(this.i,this.l,yn,null),uf(this,yn);if(By(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||q.length!=0||this.h.h||(this.s=1,At(16),p=!1),this.o=this.o&&p,!p)Ns(this.i,this.l,q,"[Invalid Chunked Response]"),xi(this),wa(this);else if(0<q.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),mf(gt),gt.M=!0,At(11))}}else Ns(this.i,this.l,q,null),uf(this,q);_t==4&&xi(this),this.o&&!this.J&&(_t==4?pv(this.j,this):(this.o=!1,Fu(this)))}else u1(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),xi(this),wa(this)}}}catch{}finally{}};function By(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function WC(u,d){var p=u.C,y=d.indexOf(`
`,p);return y==-1?of:(p=Number(d.substring(p,y)),isNaN(p)?Uy:(y+=1,y+p>d.length?of:(d=d.slice(y,y+p),u.C=y+p,d)))}xr.prototype.cancel=function(){this.J=!0,xi(this)};function Fu(u){u.S=Date.now()+u.I,zy(u,u.I)}function zy(u,d){if(u.B!=null)throw Error("WatchDog timer not null");u.B=ya(m(u.ba,u),d)}function lf(u){u.B&&(a.clearTimeout(u.B),u.B=null)}xr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(qC(this.i,this.A),this.L!=2&&(_a(),At(17)),xi(this),this.s=2,wa(this)):zy(this,this.S-u)};function wa(u){u.j.G==0||u.J||pv(u.j,u)}function xi(u){lf(u);var d=u.M;d&&typeof d.ma=="function"&&d.ma(),u.M=null,by(u.U),u.g&&(d=u.g,u.g=null,d.abort(),d.ma())}function uf(u,d){try{var p=u.j;if(p.G!=0&&(p.g==u||cf(p.h,u))){if(!u.K&&cf(p.h,u)&&p.G==3){try{var y=p.Da.g.parse(d)}catch{y=null}if(Array.isArray(y)&&y.length==3){var D=y;if(D[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<u.F)Wu(p),qu(p);else break e;pf(p),At(18)}}else p.za=D[1],0<p.za-p.T&&37500>D[2]&&p.F&&p.v==0&&!p.C&&(p.C=ya(m(p.Za,p),6e3));if(1>=Gy(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Di(p,11)}else if((u.K||p.g==u)&&Wu(p),!w(d))for(D=p.Da.g.parse(d),d=0;d<D.length;d++){let ce=D[d];if(p.T=ce[0],ce=ce[1],p.G==2)if(ce[0]=="c"){p.K=ce[1],p.ia=ce[2];const gt=ce[3];gt!=null&&(p.la=gt,p.j.info("VER="+p.la));const _t=ce[4];_t!=null&&(p.Aa=_t,p.j.info("SVER="+p.Aa));const Vs=ce[5];Vs!=null&&typeof Vs=="number"&&0<Vs&&(y=1.5*Vs,p.L=y,p.j.info("backChannelRequestTimeoutMs_="+y)),y=p;const yn=u.g;if(yn){const Ku=yn.g?yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ku){var L=y.h;L.g||Ku.indexOf("spdy")==-1&&Ku.indexOf("quic")==-1&&Ku.indexOf("h2")==-1||(L.j=L.l,L.g=new Set,L.h&&(hf(L,L.h),L.h=null))}if(y.D){const gf=yn.g?yn.g.getResponseHeader("X-HTTP-Session-Id"):null;gf&&(y.ya=gf,ye(y.I,y.D,gf))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-u.F,p.j.info("Handshake RTT: "+p.R+"ms")),y=p;var q=u;if(y.qa=_v(y,y.J?y.ia:null,y.W),q.K){Wy(y.h,q);var me=q,ut=y.L;ut&&(me.I=ut),me.B&&(lf(me),Fu(me)),y.g=q}else dv(y);0<p.i.length&&Gu(p)}else ce[0]!="stop"&&ce[0]!="close"||Di(p,7);else p.G==3&&(ce[0]=="stop"||ce[0]=="close"?ce[0]=="stop"?Di(p,7):ff(p):ce[0]!="noop"&&p.l&&p.l.ta(ce),p.v=0)}}_a(4)}catch{}}var HC=class{constructor(u,d){this.g=u,this.map=d}};function $y(u){this.l=u||10,a.PerformanceNavigationTiming?(u=a.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qy(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function Gy(u){return u.h?1:u.g?u.g.size:0}function cf(u,d){return u.h?u.h==d:u.g?u.g.has(d):!1}function hf(u,d){u.g?u.g.add(d):u.h=d}function Wy(u,d){u.h&&u.h==d?u.h=null:u.g&&u.g.has(d)&&u.g.delete(d)}$y.prototype.cancel=function(){if(this.i=Hy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function Hy(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let d=u.i;for(const p of u.g.values())d=d.concat(p.D);return d}return P(u.i)}function KC(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(l(u)){for(var d=[],p=u.length,y=0;y<p;y++)d.push(u[y]);return d}d=[],p=0;for(y in u)d[p++]=u[y];return d}function QC(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(l(u)||typeof u=="string"){var d=[];u=u.length;for(var p=0;p<u;p++)d.push(p);return d}d=[],p=0;for(const y in u)d[p++]=y;return d}}}function Ky(u,d){if(u.forEach&&typeof u.forEach=="function")u.forEach(d,void 0);else if(l(u)||typeof u=="string")Array.prototype.forEach.call(u,d,void 0);else for(var p=QC(u),y=KC(u),D=y.length,L=0;L<D;L++)d.call(void 0,y[L],p&&p[L],u)}var Qy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function YC(u,d){if(u){u=u.split("&");for(var p=0;p<u.length;p++){var y=u[p].indexOf("="),D=null;if(0<=y){var L=u[p].substring(0,y);D=u[p].substring(y+1)}else L=u[p];d(L,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Ni(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Ni){this.h=u.h,Uu(this,u.j),this.o=u.o,this.g=u.g,ju(this,u.s),this.l=u.l;var d=u.i,p=new Ta;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Yy(this,p),this.m=u.m}else u&&(d=String(u).match(Qy))?(this.h=!1,Uu(this,d[1]||"",!0),this.o=Ia(d[2]||""),this.g=Ia(d[3]||"",!0),ju(this,d[4]),this.l=Ia(d[5]||"",!0),Yy(this,d[6]||"",!0),this.m=Ia(d[7]||"")):(this.h=!1,this.i=new Ta(null,this.h))}Ni.prototype.toString=function(){var u=[],d=this.j;d&&u.push(Ea(d,Jy,!0),":");var p=this.g;return(p||d=="file")&&(u.push("//"),(d=this.o)&&u.push(Ea(d,Jy,!0),"@"),u.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&u.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&u.push("/"),u.push(Ea(p,p.charAt(0)=="/"?ZC:XC,!0))),(p=this.i.toString())&&u.push("?",p),(p=this.m)&&u.push("#",Ea(p,t1)),u.join("")};function er(u){return new Ni(u)}function Uu(u,d,p){u.j=p?Ia(d,!0):d,u.j&&(u.j=u.j.replace(/:$/,""))}function ju(u,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);u.s=d}else u.s=null}function Yy(u,d,p){d instanceof Ta?(u.i=d,n1(u.i,u.h)):(p||(d=Ea(d,e1)),u.i=new Ta(d,u.h))}function ye(u,d,p){u.i.set(d,p)}function Bu(u){return ye(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function Ia(u,d){return u?d?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Ea(u,d,p){return typeof u=="string"?(u=encodeURI(u).replace(d,JC),p&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function JC(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Jy=/[#\/\?@]/g,XC=/[#\?:]/g,ZC=/[#\?]/g,e1=/[#\?@]/g,t1=/#/g;function Ta(u,d){this.h=this.g=null,this.i=u||null,this.j=!!d}function Nr(u){u.g||(u.g=new Map,u.h=0,u.i&&YC(u.i,function(d,p){u.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Ta.prototype,t.add=function(u,d){Nr(this),this.i=null,u=Ds(this,u);var p=this.g.get(u);return p||this.g.set(u,p=[]),p.push(d),this.h+=1,this};function Xy(u,d){Nr(u),d=Ds(u,d),u.g.has(d)&&(u.i=null,u.h-=u.g.get(d).length,u.g.delete(d))}function Zy(u,d){return Nr(u),d=Ds(u,d),u.g.has(d)}t.forEach=function(u,d){Nr(this),this.g.forEach(function(p,y){p.forEach(function(D){u.call(d,D,y,this)},this)},this)},t.na=function(){Nr(this);const u=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let y=0;y<d.length;y++){const D=u[y];for(let L=0;L<D.length;L++)p.push(d[y])}return p},t.V=function(u){Nr(this);let d=[];if(typeof u=="string")Zy(this,u)&&(d=d.concat(this.g.get(Ds(this,u))));else{u=Array.from(this.g.values());for(let p=0;p<u.length;p++)d=d.concat(u[p])}return d},t.set=function(u,d){return Nr(this),this.i=null,u=Ds(this,u),Zy(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[d]),this.h+=1,this},t.get=function(u,d){return u?(u=this.V(u),0<u.length?String(u[0]):d):d};function ev(u,d,p){Xy(u,d),0<p.length&&(u.i=null,u.g.set(Ds(u,d),P(p)),u.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var y=d[p];const L=encodeURIComponent(String(y)),q=this.V(y);for(y=0;y<q.length;y++){var D=L;q[y]!==""&&(D+="="+encodeURIComponent(String(q[y]))),u.push(D)}}return this.i=u.join("&")};function Ds(u,d){return d=String(d),u.j&&(d=d.toLowerCase()),d}function n1(u,d){d&&!u.j&&(Nr(u),u.i=null,u.g.forEach(function(p,y){var D=y.toLowerCase();y!=D&&(Xy(this,y),ev(this,D,p))},u)),u.j=d}function r1(u,d){const p=new va;if(a.Image){const y=new Image;y.onload=v(Dr,p,"TestLoadImage: loaded",!0,d,y),y.onerror=v(Dr,p,"TestLoadImage: error",!1,d,y),y.onabort=v(Dr,p,"TestLoadImage: abort",!1,d,y),y.ontimeout=v(Dr,p,"TestLoadImage: timeout",!1,d,y),a.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=u}else d(!1)}function i1(u,d){const p=new va,y=new AbortController,D=setTimeout(()=>{y.abort(),Dr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(u,{signal:y.signal}).then(L=>{clearTimeout(D),L.ok?Dr(p,"TestPingServer: ok",!0,d):Dr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(D),Dr(p,"TestPingServer: error",!1,d)})}function Dr(u,d,p,y,D){try{D&&(D.onload=null,D.onerror=null,D.onabort=null,D.ontimeout=null),y(p)}catch{}}function s1(){this.g=new BC}function o1(u,d,p){const y=p||"";try{Ky(u,function(D,L){let q=D;c(D)&&(q=ef(D)),d.push(y+L+"="+encodeURIComponent(q))})}catch(D){throw d.push(y+"type="+encodeURIComponent("_badmap")),D}}function Sa(u){this.l=u.Ub||null,this.j=u.eb||!1}R(Sa,tf),Sa.prototype.g=function(){return new zu(this.l,this.j)},Sa.prototype.i=function(u){return function(){return u}}({});function zu(u,d){mt.call(this),this.D=u,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(zu,mt),t=zu.prototype,t.open=function(u,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=d,this.readyState=1,Aa(this)},t.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(d.body=u),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ra(this)),this.readyState=0},t.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,Aa(this)),this.g&&(this.readyState=3,Aa(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;tv(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function tv(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}t.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var d=u.value?u.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!u.done}))&&(this.response=this.responseText+=d)}u.done?Ra(this):Aa(this),this.readyState==3&&tv(this)}},t.Ra=function(u){this.g&&(this.response=this.responseText=u,Ra(this))},t.Qa=function(u){this.g&&(this.response=u,Ra(this))},t.ga=function(){this.g&&Ra(this)};function Ra(u){u.readyState=4,u.l=null,u.j=null,u.v=null,Aa(u)}t.setRequestHeader=function(u,d){this.u.append(u,d)},t.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,u.push(p[0]+": "+p[1]),p=d.next();return u.join(`\r
`)};function Aa(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(zu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function nv(u){let d="";return M(u,function(p,y){d+=y,d+=":",d+=p,d+=`\r
`}),d}function df(u,d,p){e:{for(y in p){var y=!1;break e}y=!0}y||(p=nv(p),typeof u=="string"?p!=null&&encodeURIComponent(String(p)):ye(u,d,p))}function Oe(u){mt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Oe,mt);var a1=/^https?$/i,l1=["POST","PUT"];t=Oe.prototype,t.Ha=function(u){this.J=u},t.ea=function(u,d,p,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);d=d?d.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():sf.g(),this.v=this.o?xy(this.o):xy(sf),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(u),!0),this.B=!1}catch(L){rv(this,L);return}if(u=p||"",p=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var D in y)p.set(D,y[D]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const L of y.keys())p.set(L,y.get(L));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(p.keys()).find(L=>L.toLowerCase()=="content-type"),D=a.FormData&&u instanceof a.FormData,!(0<=Array.prototype.indexOf.call(l1,d,void 0))||y||D||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[L,q]of p)this.g.setRequestHeader(L,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ov(this),this.u=!0,this.g.send(u),this.u=!1}catch(L){rv(this,L)}};function rv(u,d){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=d,u.m=5,iv(u),$u(u)}function iv(u){u.A||(u.A=!0,Rt(u,"complete"),Rt(u,"error"))}t.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Rt(this,"complete"),Rt(this,"abort"),$u(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$u(this,!0)),Oe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?sv(this):this.bb())},t.bb=function(){sv(this)};function sv(u){if(u.h&&typeof o<"u"&&(!u.v[1]||tr(u)!=4||u.Z()!=2)){if(u.u&&tr(u)==4)Py(u.Ea,0,u);else if(Rt(u,"readystatechange"),tr(u)==4){u.h=!1;try{const q=u.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var y;if(y=q===0){var D=String(u.D).match(Qy)[1]||null;!D&&a.self&&a.self.location&&(D=a.self.location.protocol.slice(0,-1)),y=!a1.test(D?D.toLowerCase():"")}p=y}if(p)Rt(u,"complete"),Rt(u,"success");else{u.m=6;try{var L=2<tr(u)?u.g.statusText:""}catch{L=""}u.l=L+" ["+u.Z()+"]",iv(u)}}finally{$u(u)}}}}function $u(u,d){if(u.g){ov(u);const p=u.g,y=u.v[0]?()=>{}:null;u.g=null,u.v=null,d||Rt(u,"ready");try{p.onreadystatechange=y}catch{}}}function ov(u){u.I&&(a.clearTimeout(u.I),u.I=null)}t.isActive=function(){return!!this.g};function tr(u){return u.g?u.g.readyState:0}t.Z=function(){try{return 2<tr(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(u){if(this.g){var d=this.g.responseText;return u&&d.indexOf(u)==0&&(d=d.substring(u.length)),jC(d)}};function av(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function u1(u){const d={};u=(u.g&&2<=tr(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<u.length;y++){if(w(u[y]))continue;var p=k(u[y]);const D=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const L=d[D]||[];d[D]=L,L.push(p)}A(d,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Pa(u,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[u]||d}function lv(u){this.Aa=0,this.i=[],this.j=new va,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Pa("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Pa("baseRetryDelayMs",5e3,u),this.cb=Pa("retryDelaySeedMs",1e4,u),this.Wa=Pa("forwardChannelMaxRetries",2,u),this.wa=Pa("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new $y(u&&u.concurrentRequestLimit),this.Da=new s1,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=lv.prototype,t.la=8,t.G=1,t.connect=function(u,d,p,y){At(0),this.W=u,this.H=d||{},p&&y!==void 0&&(this.H.OSID=p,this.H.OAID=y),this.F=this.X,this.I=_v(this,null,this.W),Gu(this)};function ff(u){if(uv(u),u.G==3){var d=u.U++,p=er(u.I);if(ye(p,"SID",u.K),ye(p,"RID",d),ye(p,"TYPE","terminate"),Ca(u,p),d=new xr(u,u.j,d),d.L=2,d.v=Bu(er(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=yv(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Fu(d)}gv(u)}function qu(u){u.g&&(mf(u),u.g.cancel(),u.g=null)}function uv(u){qu(u),u.u&&(a.clearTimeout(u.u),u.u=null),Wu(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&a.clearTimeout(u.s),u.s=null)}function Gu(u){if(!qy(u.h)&&!u.s){u.s=!0;var d=u.Ga;Qn||ne(),H||(Qn(),H=!0),Z.add(d,u),u.B=0}}function c1(u,d){return Gy(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=d.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=ya(m(u.Ga,u,d),mv(u,u.B)),u.B++,!0)}t.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const D=new xr(this,this.j,u);let L=this.o;if(this.S&&(L?(L=_(L),S(L,this.S)):L=this.S),this.m!==null||this.O||(D.H=L,L=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var y=this.i[p];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(d+=y,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=hv(this,D,d),p=er(this.I),ye(p,"RID",u),ye(p,"CVER",22),this.D&&ye(p,"X-HTTP-Session-Id",this.D),Ca(this,p),L&&(this.O?d="headers="+encodeURIComponent(String(nv(L)))+"&"+d:this.m&&df(p,this.m,L)),hf(this.h,D),this.Ua&&ye(p,"TYPE","init"),this.P?(ye(p,"$req",d),ye(p,"SID","null"),D.T=!0,af(D,p,null)):af(D,p,d),this.G=2}}else this.G==3&&(u?cv(this,u):this.i.length==0||qy(this.h)||cv(this))};function cv(u,d){var p;d?p=d.l:p=u.U++;const y=er(u.I);ye(y,"SID",u.K),ye(y,"RID",p),ye(y,"AID",u.T),Ca(u,y),u.m&&u.o&&df(y,u.m,u.o),p=new xr(u,u.j,p,u.B+1),u.m===null&&(p.H=u.o),d&&(u.i=d.D.concat(u.i)),d=hv(u,p,1e3),p.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),hf(u.h,p),af(p,y,d)}function Ca(u,d){u.H&&M(u.H,function(p,y){ye(d,y,p)}),u.l&&Ky({},function(p,y){ye(d,y,p)})}function hv(u,d,p){p=Math.min(u.i.length,p);var y=u.l?m(u.l.Na,u.l,u):null;e:{var D=u.i;let L=-1;for(;;){const q=["count="+p];L==-1?0<p?(L=D[0].g,q.push("ofs="+L)):L=0:q.push("ofs="+L);let me=!0;for(let ut=0;ut<p;ut++){let ce=D[ut].g;const gt=D[ut].map;if(ce-=L,0>ce)L=Math.max(0,D[ut].g-100),me=!1;else try{o1(gt,q,"req"+ce+"_")}catch{y&&y(gt)}}if(me){y=q.join("&");break e}}}return u=u.i.splice(0,p),d.D=u,y}function dv(u){if(!u.g&&!u.u){u.Y=1;var d=u.Fa;Qn||ne(),H||(Qn(),H=!0),Z.add(d,u),u.v=0}}function pf(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=ya(m(u.Fa,u),mv(u,u.v)),u.v++,!0)}t.Fa=function(){if(this.u=null,fv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=ya(m(this.ab,this),u)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),qu(this),fv(this))};function mf(u){u.A!=null&&(a.clearTimeout(u.A),u.A=null)}function fv(u){u.g=new xr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var d=er(u.qa);ye(d,"RID","rpc"),ye(d,"SID",u.K),ye(d,"AID",u.T),ye(d,"CI",u.F?"0":"1"),!u.F&&u.ja&&ye(d,"TO",u.ja),ye(d,"TYPE","xmlhttp"),Ca(u,d),u.m&&u.o&&df(d,u.m,u.o),u.L&&(u.g.I=u.L);var p=u.g;u=u.ia,p.L=1,p.v=Bu(er(d)),p.m=null,p.P=!0,jy(p,u)}t.Za=function(){this.C!=null&&(this.C=null,qu(this),pf(this),At(19))};function Wu(u){u.C!=null&&(a.clearTimeout(u.C),u.C=null)}function pv(u,d){var p=null;if(u.g==d){Wu(u),mf(u),u.g=null;var y=2}else if(cf(u.h,d))p=d.D,Wy(u.h,d),y=1;else return;if(u.G!=0){if(d.o)if(y==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var D=u.B;y=Vu(),Rt(y,new Ly(y,p)),Gu(u)}else dv(u);else if(D=d.s,D==3||D==0&&0<d.X||!(y==1&&c1(u,d)||y==2&&pf(u)))switch(p&&0<p.length&&(d=u.h,d.i=d.i.concat(p)),D){case 1:Di(u,5);break;case 4:Di(u,10);break;case 3:Di(u,6);break;default:Di(u,2)}}}function mv(u,d){let p=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(p*=2),p*d}function Di(u,d){if(u.j.info("Error code "+d),d==2){var p=m(u.fb,u),y=u.Xa;const D=!y;y=new Ni(y||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Uu(y,"https"),Bu(y),D?r1(y.toString(),p):i1(y.toString(),p)}else At(2);u.G=0,u.l&&u.l.sa(d),gv(u),uv(u)}t.fb=function(u){u?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function gv(u){if(u.G=0,u.ka=[],u.l){const d=Hy(u.h);(d.length!=0||u.i.length!=0)&&(b(u.ka,d),b(u.ka,u.i),u.h.i.length=0,P(u.i),u.i.length=0),u.l.ra()}}function _v(u,d,p){var y=p instanceof Ni?er(p):new Ni(p);if(y.g!="")d&&(y.g=d+"."+y.g),ju(y,y.s);else{var D=a.location;y=D.protocol,d=d?d+"."+D.hostname:D.hostname,D=+D.port;var L=new Ni(null);y&&Uu(L,y),d&&(L.g=d),D&&ju(L,D),p&&(L.l=p),y=L}return p=u.D,d=u.ya,p&&d&&ye(y,p,d),ye(y,"VER",u.la),Ca(u,y),y}function yv(u,d,p){if(d&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=u.Ca&&!u.pa?new Oe(new Sa({eb:p})):new Oe(u.pa),d.Ha(u.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function vv(){}t=vv.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Hu(){}Hu.prototype.g=function(u,d){return new Kt(u,d)};function Kt(u,d){mt.call(this),this.g=new lv(d),this.l=u,this.h=d&&d.messageUrlParams||null,u=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(u?u["X-WebChannel-Content-Type"]=d.messageContentType:u={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(u?u["X-WebChannel-Client-Profile"]=d.va:u={"X-WebChannel-Client-Profile":d.va}),this.g.S=u,(u=d&&d.Sb)&&!w(u)&&(this.g.m=u),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,u=this.h,u!==null&&d in u&&(u=this.h,d in u&&delete u[d])),this.j=new Os(this)}R(Kt,mt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){ff(this.g)},Kt.prototype.o=function(u){var d=this.g;if(typeof u=="string"){var p={};p.__data__=u,u=p}else this.u&&(p={},p.__data__=ef(u),u=p);d.i.push(new HC(d.Ya++,u)),d.G==3&&Gu(d)},Kt.prototype.N=function(){this.g.l=null,delete this.j,ff(this.g),delete this.g,Kt.aa.N.call(this)};function wv(u){nf.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var d=u.__sm__;if(d){e:{for(const p in d){u=p;break e}u=void 0}(this.i=u)&&(u=this.i,d=d!==null&&u in d?d[u]:void 0),this.data=d}else this.data=u}R(wv,nf);function Iv(){rf.call(this),this.status=1}R(Iv,rf);function Os(u){this.g=u}R(Os,vv),Os.prototype.ua=function(){Rt(this.g,"a")},Os.prototype.ta=function(u){Rt(this.g,new wv(u))},Os.prototype.sa=function(u){Rt(this.g,new Iv)},Os.prototype.ra=function(){Rt(this.g,"b")},Hu.prototype.createWebChannel=Hu.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,MS=function(){return new Hu},LS=function(){return Vu()},VS=bi,lm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Lu.NO_ERROR=0,Lu.TIMEOUT=8,Lu.HTTP_ERROR=6,Oc=Lu,My.COMPLETE="complete",OS=My,Ny.EventType=ga,ga.OPEN="a",ga.CLOSE="b",ga.ERROR="c",ga.MESSAGE="d",mt.prototype.listen=mt.prototype.K,Ja=Ny,DS=Sa,Oe.prototype.listenOnce=Oe.prototype.L,Oe.prototype.getLastError=Oe.prototype.Ka,Oe.prototype.getLastErrorCode=Oe.prototype.Ba,Oe.prototype.getStatus=Oe.prototype.Z,Oe.prototype.getResponseJson=Oe.prototype.Oa,Oe.prototype.getResponseText=Oe.prototype.oa,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Ha,NS=Oe}).apply(typeof dc<"u"?dc:typeof self<"u"?self:typeof window<"u"?window:{});const Hw="@firebase/firestore";/**
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
 */const ci=new ud("@firebase/firestore");function $s(){return ci.logLevel}function gD(t){ci.setLogLevel(t)}function B(t,...e){if(ci.logLevel<=re.DEBUG){const n=e.map(Kg);ci.debug(`Firestore (${ta}): ${t}`,...n)}}function Ge(t,...e){if(ci.logLevel<=re.ERROR){const n=e.map(Kg);ci.error(`Firestore (${ta}): ${t}`,...n)}}function Cn(t,...e){if(ci.logLevel<=re.WARN){const n=e.map(Kg);ci.warn(`Firestore (${ta}): ${t}`,...n)}}function Kg(t){if(typeof t=="string")return t;try{/**
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
 */function K(t="Unexpected state"){const e=`FIRESTORE (${ta}) INTERNAL ASSERTION FAILED: `+t;throw Ge(e),new Error(e)}function J(t,e){t||K()}function _D(t,e){t||K()}function W(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Tt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class FS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(nt.UNAUTHENTICATED))}shutdown(){}}class vD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wD{constructor(e){this.t=e,this.currentUser=nt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new it;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new it,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new it)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new FS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new nt(e)}}class ID{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=nt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ED{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ID(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(nt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SD{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.R=n.token,new TD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function RD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class US{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=RD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function No(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function jS(t){return t+"\0"}/**
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
 */class Ae{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new j(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ae(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ae(0,0))}static max(){return new X(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ql{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ql.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ql?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends ql{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const AD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends ql{construct(e,n,r){return new Se(e,n,r)}static isValidIdentifier(e){return AD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new j(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new j(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new j(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(n)}static emptyPath(){return new Se([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(se.fromString(e))}static fromName(e){return new G(se.fromString(e).popFirst(5))}static empty(){return new G(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new se(e.slice()))}}/**
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
 */class Sh{constructor(e,n,r,i){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=i}}function um(t){return t.fields.find(e=>e.kind===2)}function Ui(t){return t.fields.filter(e=>e.kind!==2)}Sh.UNKNOWN_ID=-1;class Vc{constructor(e,n){this.fieldPath=e,this.kind=n}}class Gl{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Gl(0,nn.min())}}function BS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new Ae(n+1,0):new Ae(n,r));return new nn(i,G.empty(),e)}function zS(t){return new nn(t.readTime,t.key,-1)}class nn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nn(X.min(),G.empty(),-1)}static max(){return new nn(X.max(),G.empty(),-1)}}function Qg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
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
 */const $S="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class qS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ti(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==$S)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const c=l;n(e[c]).next(h=>{o[c]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}/**
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
 */class hd{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new it,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new hl(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=Yg(r.target.error);this.V.reject(new hl(e,i))}}static open(e,n,r,i){try{return new hd(n,e.transaction(i,r))}catch(s){throw new hl(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(B("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new CD(n)}}class $n{constructor(e,n,r){this.name=e,this.version=n,this.p=r,$n.S(Pe())===12.2&&Ge("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return B("SimpleDb","Removing database:",e),ji(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Bl())return!1;if($n.C())return!0;const e=Pe(),n=$n.S(e),r=0<n&&n<10,i=GS(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(B("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new hl(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new j(V.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new j(V.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new hl(e,o))},i.onupgradeneeded=s=>{B("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.p.O(o,i.transaction,s.oldVersion,this.version).next(()=>{B("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=hd.open(this.db,e,s?"readonly":"readwrite",r),l=i(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),O.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(B("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function GS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class PD{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return ji(this.B.delete())}}class hl extends j{constructor(e,n){super(V.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Si(t){return t.name==="IndexedDbTransactionError"}class CD{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(B("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(B("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ji(r)}add(e){return B("SimpleDb","ADD",this.store.name,e,e),ji(this.store.add(e))}get(e){return ji(this.store.get(e)).next(n=>(n===void 0&&(n=null),B("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return B("SimpleDb","DELETE",this.store.name,e),ji(this.store.delete(e))}count(){return B("SimpleDb","COUNT",this.store.name),ji(this.store.count())}U(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const s=i.getAll(r.range);return new O((o,a)=>{s.onerror=l=>{a(l.target.error)},s.onsuccess=l=>{o(l.target.result)}})}{const s=this.cursor(r),o=[];return this.W(s,(a,l)=>{o.push(l)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new O((i,s)=>{r.onerror=o=>{s(o.target.error)},r.onsuccess=o=>{i(o.target.result)}})}j(e,n){B("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const i=this.cursor(r);return this.W(i,(s,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.W(i,n)}Y(e){const n=this.cursor({});return new O((r,i)=>{n.onerror=s=>{const o=Yg(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new O((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const l=new PD(a),c=n(a.primaryKey,a.value,l);if(c instanceof O){const h=c.catch(f=>(l.done(),O.reject(f)));r.push(h)}l.isDone?i():l.K===null?a.continue():a.continue(l.K)}}).next(()=>O.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ji(t){return new O((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Yg(r.target.error);n(i)}})}let Kw=!1;function Yg(t){const e=$n.S(Pe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new j("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Kw||(Kw=!0,setTimeout(()=>{throw r},0)),r}}return t}class kD{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){B("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{B("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){Si(n)?B("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await Ti(n)}await this.X(6e4)})}}class bD{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let i=n,s=!0;return O.doWhile(()=>s===!0&&i>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return B("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,i).next(a=>{i-=a,r.add(o)});s=!1})).next(()=>n-i)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(i=>this.localStore.localDocuments.getNextDocuments(e,n,i,r).next(s=>{const o=s.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(i,s)).next(a=>(B("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((i,s)=>{const o=zS(s);Qg(o,r)>0&&(r=o)}),new nn(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class zt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}zt.oe=-1;function du(t){return t==null}function Wl(t){return t===0&&1/t==-1/0}function WS(t){return typeof t=="number"&&Number.isInteger(t)&&!Wl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Dt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Qw(e)),e=xD(t.get(n),e);return Qw(e)}function xD(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function Qw(t){return t+""}function Fn(t){const e=t.length;if(J(e>=2),e===2)return J(t.charAt(0)===""&&t.charAt(1)===""),se.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&K(),t.charAt(o+1)){case"":const a=t.substring(s,o);let l;i.length===0?l=a:(i+=a,l=i,i=""),r.push(l);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:K()}s=o+2}return new se(r)}/**
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
 */const Yw=["userId","batchId"];/**
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
 */function Lc(t,e){return[t,Dt(e)]}function HS(t,e,n){return[t,Dt(e),n]}const ND={},DD=["prefixPath","collectionGroup","readTime","documentId"],OD=["prefixPath","collectionGroup","documentId"],VD=["collectionGroup","readTime","prefixPath","documentId"],LD=["canonicalId","targetId"],MD=["targetId","path"],FD=["path","targetId"],UD=["collectionId","parent"],jD=["indexId","uid"],BD=["uid","sequenceNumber"],zD=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],$D=["indexId","uid","orderedDocumentKey"],qD=["userId","collectionPath","documentId"],GD=["userId","collectionPath","largestBatchId"],WD=["userId","collectionGroup","largestBatchId"],KS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],HD=[...KS,"documentOverlays"],QS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],YS=QS,JS=[...YS,"indexConfiguration","indexState","indexEntries"],KD=JS;/**
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
 */class cm extends qS{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function at(t,e){const n=W(t);return $n.F(n._e,e)}/**
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
 */function Jw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function XS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class _e{constructor(e,n){this.comparator=e,this.root=n||ht.EMPTY}insert(e,n){return new _e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new _e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new fc(this.root,e,this.comparator,!0)}}class fc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ht.RED,this.left=i??ht.EMPTY,this.right=s??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ht(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ht.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ht(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class fe{constructor(e){this.comparator=e,this.data=new _e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xw(this.data.getIterator())}getIteratorFrom(e){return new Xw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof fe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new fe(this.comparator);return n.data=e,n}}class Xw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Ms(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new $t([])}unionWith(e){let n=new fe(Se.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return No(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ZS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function QD(){return typeof atob<"u"}/**
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
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ZS("Invalid base64 string: "+s):s}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const YD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(J(!!t),typeof t=="string"){let e=0;const n=YD.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function hi(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
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
 */function dd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Jg(t){const e=t.mapValue.fields.__previous_value__;return dd(e)?Jg(e):e}function Hl(t){const e=wr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
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
 */class JD{constructor(e,n,r,i,s,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class di{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new di("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof di&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Hr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Mc={nullValue:"NULL_VALUE"};function us(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?dd(t)?4:eR(t)?9007199254740991:10:K()}function Wn(t,e){if(t===e)return!0;const n=us(t);if(n!==us(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hl(t).isEqual(Hl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=wr(i.timestampValue),a=wr(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return hi(i.bytesValue).isEqual(hi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),a=Le(s.doubleValue);return o===a?Wl(o)===Wl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return No(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Jw(o)!==Jw(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Wn(o[l],a[l])))return!1;return!0}(t,e);default:return K()}}function Kl(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function fi(t,e){if(t===e)return 0;const n=us(t),r=us(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Le(s.integerValue||s.doubleValue),l=Le(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Zw(t.timestampValue,e.timestampValue);case 4:return Zw(Hl(t),Hl(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(s,o){const a=hi(s),l=hi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const h=ee(a[c],l[c]);if(h!==0)return h}return ee(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=ee(Le(s.latitude),Le(o.latitude));return a!==0?a:ee(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const h=fi(a[c],l[c]);if(h)return h}return ee(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Hr.mapValue&&o===Hr.mapValue)return 0;if(s===Hr.mapValue)return 1;if(o===Hr.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),c=o.fields||{},h=Object.keys(c);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const m=ee(l[f],h[f]);if(m!==0)return m;const v=fi(a[l[f]],c[h[f]]);if(v!==0)return v}return ee(l.length,h.length)}(t.mapValue,e.mapValue);default:throw K()}}function Zw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=wr(t),r=wr(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Do(t){return hm(t)}function hm(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return hi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=hm(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${hm(n.fields[o])}`;return i+"}"}(t.mapValue):K()}function cs(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function dm(t){return!!t&&"integerValue"in t}function Ql(t){return!!t&&"arrayValue"in t}function eI(t){return!!t&&"nullValue"in t}function tI(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fc(t){return!!t&&"mapValue"in t}function dl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=dl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=dl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function eR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function XD(t){return"nullValue"in t?Mc:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?cs(di.empty(),G.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:K()}function ZD(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?cs(di.empty(),G.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?Hr:K()}function nI(t,e){const n=fi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function rI(t,e){const n=fi(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=dl(n)}setAll(e){let n=Se.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=dl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Fc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Fc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Rs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new dt(dl(this.value))}}function tR(t){const e=[];return Rs(t.fields,(n,r)=>{const i=new Se([n]);if(Fc(r)){const s=tR(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new $t(e)}/**
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
 */class we{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new we(e,0,X.min(),X.min(),X.min(),dt.empty(),0)}static newFoundDocument(e,n,r,i){return new we(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new we(e,2,n,X.min(),X.min(),dt.empty(),0)}static newUnknownDocument(e,n){return new we(e,3,n,X.min(),X.min(),dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof we&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new we(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class pi{constructor(e,n){this.position=e,this.inclusive=n}}function iI(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function sI(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yl{constructor(e,n="asc"){this.field=e,this.dir=n}}function eO(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class nR{}class oe extends nR{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new tO(e,n,r):n==="array-contains"?new iO(e,r):n==="in"?new lR(e,r):n==="not-in"?new sO(e,r):n==="array-contains-any"?new oO(e,r):new oe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new nO(e,r):new rO(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(fi(n,this.value)):n!==null&&us(this.value)===us(n)&&this.matchesComparison(fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class he extends nR{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new he(e,n)}matches(e){return Oo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Oo(t){return t.op==="and"}function fm(t){return t.op==="or"}function Xg(t){return rR(t)&&Oo(t)}function rR(t){for(const e of t.filters)if(e instanceof he)return!1;return!0}function pm(t){if(t instanceof oe)return t.field.canonicalString()+t.op.toString()+Do(t.value);if(Xg(t))return t.filters.map(e=>pm(e)).join(",");{const e=t.filters.map(n=>pm(n)).join(",");return`${t.op}(${e})`}}function iR(t,e){return t instanceof oe?function(r,i){return i instanceof oe&&r.op===i.op&&r.field.isEqual(i.field)&&Wn(r.value,i.value)}(t,e):t instanceof he?function(r,i){return i instanceof he&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&iR(o,i.filters[a]),!0):!1}(t,e):void K()}function sR(t,e){const n=t.filters.concat(e);return he.create(n,t.op)}function oR(t){return t instanceof oe?function(n){return`${n.field.canonicalString()} ${n.op} ${Do(n.value)}`}(t):t instanceof he?function(n){return n.op.toString()+" {"+n.getFilters().map(oR).join(" ,")+"}"}(t):"Filter"}class tO extends oe{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class nO extends oe{constructor(e,n){super(e,"in",n),this.keys=aR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class rO extends oe{constructor(e,n){super(e,"not-in",n),this.keys=aR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function aR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class iO extends oe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ql(n)&&Kl(n.arrayValue,this.value)}}class lR extends oe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Kl(this.value.arrayValue,n)}}class sO extends oe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Kl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Kl(this.value.arrayValue,n)}}class oO extends oe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ql(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Kl(this.value.arrayValue,r))}}/**
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
 */class aO{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ue=null}}function mm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new aO(t,e,n,r,i,s,o)}function hs(t){const e=W(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>pm(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),du(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Do(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Do(r)).join(",")),e.ue=n}return e.ue}function fu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!eO(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!iR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!sI(t.startAt,e.startAt)&&sI(t.endAt,e.endAt)}function Rh(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Ah(t,e){return t.filters.filter(n=>n instanceof oe&&n.field.isEqual(e))}function oI(t,e,n){let r=Mc,i=!0;for(const s of Ah(t,e)){let o=Mc,a=!0;switch(s.op){case"<":case"<=":o=XD(s.value);break;case"==":case"in":case">=":o=s.value;break;case">":o=s.value,a=!1;break;case"!=":case"not-in":o=Mc}nI({value:r,inclusive:i},{value:o,inclusive:a})<0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];nI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})<0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}function aI(t,e,n){let r=Hr,i=!0;for(const s of Ah(t,e)){let o=Hr,a=!0;switch(s.op){case">=":case">":o=ZD(s.value),a=!1;break;case"==":case"in":case"<=":o=s.value;break;case"<":o=s.value,a=!1;break;case"!=":case"not-in":o=Hr}rI({value:r,inclusive:i},{value:o,inclusive:a})>0&&(r=o,i=a)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const o=n.position[s];rI({value:r,inclusive:i},{value:o,inclusive:n.inclusive})>0&&(r=o,i=n.inclusive);break}}return{value:r,inclusive:i}}/**
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
 */class Rr{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function uR(t,e,n,r,i,s,o,a){return new Rr(t,e,n,r,i,s,o,a)}function na(t){return new Rr(t)}function lI(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Zg(t){return t.collectionGroup!==null}function po(t){const e=W(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new fe(Se.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Yl(s,r))}),n.has(Se.keyField().canonicalString())||e.ce.push(new Yl(Se.keyField(),r))}return e.ce}function Ot(t){const e=W(t);return e.le||(e.le=lO(e,po(t))),e.le}function lO(t,e){if(t.limitType==="F")return mm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Yl(i.field,s)});const n=t.endAt?new pi(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new pi(t.startAt.position,t.startAt.inclusive):null;return mm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gm(t,e){const n=t.filters.concat([e]);return new Rr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ph(t,e,n){return new Rr(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pu(t,e){return fu(Ot(t),Ot(e))&&t.limitType===e.limitType}function cR(t){return`${hs(Ot(t))}|lt:${t.limitType}`}function qs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>oR(i)).join(", ")}]`),du(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Do(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Do(i)).join(",")),`Target(${r})`}(Ot(t))}; limitType=${t.limitType})`}function mu(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):G.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of po(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const c=iI(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,po(r),i)||r.endAt&&!function(o,a,l){const c=iI(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,po(r),i))}(t,e)}function hR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function dR(t){return(e,n)=>{let r=!1;for(const i of po(t)){const s=uO(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function uO(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),c=a.data.field(s);return l!==null&&c!==null?fi(l,c):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
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
 */class Ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Rs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return XS(this.inner)}size(){return this.innerSize}}/**
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
 */const cO=new _e(G.comparator);function qt(){return cO}const fR=new _e(G.comparator);function Xa(...t){let e=fR;for(const n of t)e=e.insert(n.key,n);return e}function pR(t){let e=fR;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Un(){return fl()}function mR(){return fl()}function fl(){return new Ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const hO=new _e(G.comparator),dO=new fe(G.comparator);function te(...t){let e=dO;for(const n of t)e=e.add(n);return e}const fO=new fe(ee);function e_(){return fO}/**
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
 */function gR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wl(e)?"-0":e}}function _R(t){return{integerValue:""+t}}function yR(t,e){return WS(e)?_R(e):gR(t,e)}/**
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
 */class fd{constructor(){this._=void 0}}function pO(t,e,n){return t instanceof Vo?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&dd(s)&&(s=Jg(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof ds?wR(t,e):t instanceof fs?IR(t,e):function(i,s){const o=vR(i,s),a=uI(o)+uI(i.Pe);return dm(o)&&dm(i.Pe)?_R(a):gR(i.serializer,a)}(t,e)}function mO(t,e,n){return t instanceof ds?wR(t,e):t instanceof fs?IR(t,e):n}function vR(t,e){return t instanceof Lo?function(r){return dm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Vo extends fd{}class ds extends fd{constructor(e){super(),this.elements=e}}function wR(t,e){const n=ER(e);for(const r of t.elements)n.some(i=>Wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class fs extends fd{constructor(e){super(),this.elements=e}}function IR(t,e){let n=ER(e);for(const r of t.elements)n=n.filter(i=>!Wn(i,r));return{arrayValue:{values:n}}}class Lo extends fd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function uI(t){return Le(t.integerValue||t.doubleValue)}function ER(t){return Ql(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class gu{constructor(e,n){this.field=e,this.transform=n}}function gO(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ds&&i instanceof ds||r instanceof fs&&i instanceof fs?No(r.elements,i.elements,Wn):r instanceof Lo&&i instanceof Lo?Wn(r.Pe,i.Pe):r instanceof Vo&&i instanceof Vo}(t.transform,e.transform)}class _O{constructor(e,n){this.version=e,this.transformResults=n}}class Re{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Re}static exists(e){return new Re(void 0,e)}static updateTime(e){return new Re(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pd{}function TR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new ia(t.key,Re.none()):new ra(t.key,t.data,Re.none());{const n=t.data,r=dt.empty();let i=new fe(Se.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ar(t.key,r,new $t(i.toArray()),Re.none())}}function yO(t,e,n){t instanceof ra?function(i,s,o){const a=i.value.clone(),l=hI(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ar?function(i,s,o){if(!Uc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=hI(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(SR(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function pl(t,e,n,r){return t instanceof ra?function(s,o,a,l){if(!Uc(s.precondition,o))return a;const c=s.value.clone(),h=dI(s.fieldTransforms,l,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ar?function(s,o,a,l){if(!Uc(s.precondition,o))return a;const c=dI(s.fieldTransforms,l,o),h=o.data;return h.setAll(SR(s)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return Uc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function vO(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=vR(r.transform,i||null);s!=null&&(n===null&&(n=dt.empty()),n.set(r.field,s))}return n||null}function cI(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&No(r,i,(s,o)=>gO(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ra extends pd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ar extends pd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function SR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hI(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,mO(o,a,n[i]))}return r}function dI(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,pO(s,o,e))}return r}class ia extends pd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class t_ extends pd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class n_{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&yO(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=pl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=mR();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=TR(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),te())}isEqual(e){return this.batchId===e.batchId&&No(this.mutations,e.mutations,(n,r)=>cI(n,r))&&No(this.baseMutations,e.baseMutations,(n,r)=>cI(n,r))}}class r_{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=function(){return hO}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new r_(e,n,r,i)}}/**
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
 */class i_{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,ae;function RR(t){switch(t){default:return K();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function AR(t){if(t===void 0)return Ge("GRPC error has no .code"),V.UNKNOWN;switch(t){case He.OK:return V.OK;case He.CANCELLED:return V.CANCELLED;case He.UNKNOWN:return V.UNKNOWN;case He.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case He.INTERNAL:return V.INTERNAL;case He.UNAVAILABLE:return V.UNAVAILABLE;case He.UNAUTHENTICATED:return V.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case He.NOT_FOUND:return V.NOT_FOUND;case He.ALREADY_EXISTS:return V.ALREADY_EXISTS;case He.PERMISSION_DENIED:return V.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case He.ABORTED:return V.ABORTED;case He.OUT_OF_RANGE:return V.OUT_OF_RANGE;case He.UNIMPLEMENTED:return V.UNIMPLEMENTED;case He.DATA_LOSS:return V.DATA_LOSS;default:return K()}}(ae=He||(He={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function PR(){return new TextEncoder}/**
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
 */const IO=new Zi([4294967295,4294967295],0);function fI(t){const e=PR().encode(t),n=new xS;return n.update(e),new Uint8Array(n.digest())}function pI(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Zi([n,r],0),new Zi([i,s],0)]}class s_{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Za(`Invalid padding: ${n}`);if(r<0)throw new Za(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Za(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Za(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Zi.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Zi.fromNumber(r)));return i.compare(IO)===1&&(i=new Zi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=fI(e),[r,i]=pI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new s_(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=fI(e),[r,i]=pI(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Za extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _u{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,yu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _u(X.min(),i,new _e(ee),qt(),te())}}class yu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new yu(r,n,te(),te(),te())}}/**
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
 */class jc{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class CR{constructor(e,n){this.targetId=e,this.me=n}}class kR{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class mI{constructor(){this.fe=0,this.ge=_I(),this.pe=Ze.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=te(),n=te(),r=te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:K()}}),new yu(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=_I()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,J(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class EO{constructor(e){this.Le=e,this.Be=new Map,this.ke=qt(),this.qe=gI(),this.Qe=new _e(ee)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(Rh(s))if(r===0){const o=new G(s.path);this.Ue(n,o,we.newNoDocument(o,X.min()))}else J(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),l=a?this.Xe(a,e,o):1;if(l!==0){this.je(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=hi(r).toUint8Array()}catch(l){if(l instanceof ZS)return Cn("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new s_(o,i,s)}catch(l){return Cn(l instanceof Za?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const a=this.Je(o);if(a){if(s.current&&Rh(a.target)){const l=new G(a.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,we.newNoDocument(l,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=te();this.qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Je(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new _u(e,n,this.Qe,this.ke,r);return this.ke=qt(),this.qe=gI(),this.Qe=new _e(ee),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new mI,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new fe(ee),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mI),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gI(){return new _e(G.comparator)}function _I(){return new _e(G.comparator)}const TO={asc:"ASCENDING",desc:"DESCENDING"},SO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},RO={and:"AND",or:"OR"};class AO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _m(t,e){return t.useProto3Json||du(e)?e:{value:e}}function Mo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function PO(t,e){return Mo(t,e.toTimestamp())}function We(t){return J(!!t),X.fromTimestamp(function(n){const r=wr(n);return new Ae(r.seconds,r.nanos)}(t))}function o_(t,e){return ym(t,e).canonicalString()}function ym(t,e){const n=function(i){return new se(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function xR(t){const e=se.fromString(t);return J(BR(e)),e}function Jl(t,e){return o_(t.databaseId,e.path)}function qn(t,e){const n=xR(e);if(n.get(1)!==t.databaseId.projectId)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new j(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(OR(n))}function NR(t,e){return o_(t.databaseId,e)}function DR(t){const e=xR(t);return e.length===4?se.emptyPath():OR(e)}function vm(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function OR(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yI(t,e,n){return{name:Jl(t,e),fields:n.value.mapValue.fields}}function VR(t,e,n){const r=qn(t,e.name),i=We(e.updateTime),s=e.createTime?We(e.createTime):X.min(),o=new dt({mapValue:{fields:e.fields}}),a=we.newFoundDocument(r,i,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function CO(t,e){return"found"in e?function(r,i){J(!!i.found),i.found.name,i.found.updateTime;const s=qn(r,i.found.name),o=We(i.found.updateTime),a=i.found.createTime?We(i.found.createTime):X.min(),l=new dt({mapValue:{fields:i.found.fields}});return we.newFoundDocument(s,o,a,l)}(t,e):"missing"in e?function(r,i){J(!!i.missing),J(!!i.readTime);const s=qn(r,i.missing),o=We(i.readTime);return we.newNoDocument(s,o)}(t,e):K()}function kO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(c,h){return c.useProto3Json?(J(h===void 0||typeof h=="string"),Ze.fromBase64String(h||"")):(J(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Ze.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?V.UNKNOWN:AR(c.code);return new j(h,c.message||"")}(o);n=new kR(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qn(t,r.document.name),s=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):X.min(),a=new dt({mapValue:{fields:r.document.fields}}),l=we.newFoundDocument(i,s,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new jc(c,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qn(t,r.document),s=r.readTime?We(r.readTime):X.min(),o=we.newNoDocument(i,s),a=r.removedTargetIds||[];n=new jc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qn(t,r.document),s=r.removedTargetIds||[];n=new jc([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new wO(i,s),a=r.targetId;n=new CR(a,o)}}return n}function Xl(t,e){let n;if(e instanceof ra)n={update:yI(t,e.key,e.value)};else if(e instanceof ia)n={delete:Jl(t,e.key)};else if(e instanceof Ar)n={update:yI(t,e.key,e.data),updateMask:VO(e.fieldMask)};else{if(!(e instanceof t_))return K();n={verify:Jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Vo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ds)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof fs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Lo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:PO(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(t,e.precondition)),n}function wm(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?Re.updateTime(We(s.updateTime)):s.exists!==void 0?Re.exists(s.exists):Re.none()}(e.currentDocument):Re.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(o,a){let l=null;if("setToServerValue"in a)J(a.setToServerValue==="REQUEST_TIME"),l=new Vo;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];l=new ds(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];l=new fs(h)}else"increment"in a?l=new Lo(o,a.increment):K();const c=Se.fromServerFormat(a.fieldPath);return new gu(c,l)}(t,i)):[];if(e.update){e.update.name;const i=qn(t,e.update.name),s=new dt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(l){const c=l.fieldPaths||[];return new $t(c.map(h=>Se.fromServerFormat(h)))}(e.updateMask);return new Ar(i,s,o,n,r)}return new ra(i,s,n,r)}if(e.delete){const i=qn(t,e.delete);return new ia(i,n)}if(e.verify){const i=qn(t,e.verify);return new t_(i,n)}return K()}function bO(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?We(i.updateTime):We(s);return o.isEqual(X.min())&&(o=We(s)),new _O(o,i.transformResults||[])}(n,e))):[]}function LR(t,e){return{documents:[NR(t,e.path)]}}function MR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=NR(t,i);const s=function(c){if(c.length!==0)return jR(he.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:Gs(m.field),direction:NO(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=_m(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:i}}function FR(t){let e=DR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(f){const m=UR(f);return m instanceof he&&Xg(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(R){return new Yl(Ws(R.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,du(m)?null:m}(n.limit));let l=null;n.startAt&&(l=function(f){const m=!!f.before,v=f.values||[];return new pi(v,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,v=f.values||[];return new pi(v,m)}(n.endAt)),uR(e,i,o,s,a,"F",l,c)}function xO(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function UR(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ws(n.unaryFilter.field);return oe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ws(n.unaryFilter.field);return oe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ws(n.unaryFilter.field);return oe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ws(n.unaryFilter.field);return oe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return oe.create(Ws(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return he.create(n.compositeFilter.filters.map(r=>UR(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function NO(t){return TO[t]}function DO(t){return SO[t]}function OO(t){return RO[t]}function Gs(t){return{fieldPath:t.canonicalString()}}function Ws(t){return Se.fromServerFormat(t.fieldPath)}function jR(t){return t instanceof oe?function(n){if(n.op==="=="){if(tI(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NAN"}};if(eI(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(tI(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NAN"}};if(eI(n.value))return{unaryFilter:{field:Gs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gs(n.field),op:DO(n.op),value:n.value}}}(t):t instanceof he?function(n){const r=n.getFilters().map(i=>jR(i));return r.length===1?r[0]:{compositeFilter:{op:OO(n.op),filters:r}}}(t):K()}function VO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function BR(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class lr{constructor(e,n,r,i,s=X.min(),o=X.min(),a=Ze.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new lr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new lr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class zR{constructor(e){this.ct=e}}function LO(t,e){let n;if(e.document)n=VR(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),i=ms(e.noDocument.readTime);n=we.newNoDocument(r,i),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return K();{const r=G.fromSegments(e.unknownDocument.path),i=ms(e.unknownDocument.version);n=we.newUnknownDocument(r,i)}}return e.readTime&&n.setReadTime(function(i){const s=new Ae(i[0],i[1]);return X.fromTimestamp(s)}(e.readTime)),n}function vI(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Ch(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,o){return{name:Jl(s,o.key),fields:o.data.value.mapValue.fields,updateTime:Mo(s,o.version.toTimestamp()),createTime:Mo(s,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:ps(e.version)};else{if(!e.isUnknownDocument())return K();r.unknownDocument={path:n.path.toArray(),version:ps(e.version)}}return r}function Ch(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ps(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ms(t){const e=new Ae(t.seconds,t.nanoseconds);return X.fromTimestamp(e)}function Bi(t,e){const n=(e.baseMutations||[]).map(s=>wm(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>wm(t.ct,s)),i=Ae.fromMillis(e.localWriteTimeMs);return new n_(e.batchId,i,n,r)}function el(t){const e=ms(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?ms(t.lastLimboFreeSnapshotVersion):X.min();let r;return r=function(s){return s.documents!==void 0}(t.query)?function(s){return J(s.documents.length===1),Ot(na(DR(s.documents[0])))}(t.query):function(s){return Ot(FR(s))}(t.query),new lr(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Ze.fromBase64String(t.resumeToken))}function $R(t,e){const n=ps(e.snapshotVersion),r=ps(e.lastLimboFreeSnapshotVersion);let i;i=Rh(e.target)?LR(t.ct,e.target):MR(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:hs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:i}}function a_(t){const e=FR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ph(e,e.limit,"L"):e}function Qf(t,e){return new i_(e.largestBatchId,wm(t.ct,e.overlayMutation))}function wI(t,e){const n=e.path.lastSegment();return[t,Dt(e.path.popLast()),n]}function II(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:ps(r.readTime),documentKey:Dt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class MO{getBundleMetadata(e,n){return EI(e).get(n).next(r=>{if(r)return function(s){return{id:s.bundleId,createTime:ms(s.createTime),version:s.version}}(r)})}saveBundleMetadata(e,n){return EI(e).put(function(i){return{bundleId:i.id,createTime:ps(We(i.createTime)),version:i.version}}(n))}getNamedQuery(e,n){return TI(e).get(n).next(r=>{if(r)return function(s){return{name:s.name,query:a_(s.bundledQuery),readTime:ms(s.readTime)}}(r)})}saveNamedQuery(e,n){return TI(e).put(function(i){return{name:i.name,readTime:ps(We(i.readTime)),bundledQuery:i.bundledQuery}}(n))}}function EI(t){return at(t,"bundles")}function TI(t){return at(t,"namedQueries")}/**
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
 */class md{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new md(e,r)}getOverlay(e,n){return Ma(e).get(wI(this.userId,n)).next(r=>r?Qf(this.serializer,r):null)}getOverlays(e,n){const r=Un();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){const i=[];return r.forEach((s,o)=>{const a=new i_(n,o);i.push(this.ht(e,a))}),O.waitFor(i)}removeOverlaysForBatchId(e,n,r){const i=new Set;n.forEach(o=>i.add(Dt(o.getCollectionPath())));const s=[];return i.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);s.push(Ma(e).j("collectionPathOverlayIndex",a))}),O.waitFor(s)}getOverlaysForCollection(e,n,r){const i=Un(),s=Dt(n),o=IDBKeyRange.bound([this.userId,s,r],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Ma(e).U("collectionPathOverlayIndex",o).next(a=>{for(const l of a){const c=Qf(this.serializer,l);i.set(c.getKey(),c)}return i})}getOverlaysForCollectionGroup(e,n,r,i){const s=Un();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Ma(e).J({index:"collectionGroupOverlayIndex",range:a},(l,c,h)=>{const f=Qf(this.serializer,c);s.size()<i||f.largestBatchId===o?(s.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>s)}ht(e,n){return Ma(e).put(function(i,s,o){const[a,l,c]=wI(s,o.mutation.key);return{userId:s,collectionPath:l,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Xl(i.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Ma(t){return at(t,"documentOverlays")}/**
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
 */class zi{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(Le(e.integerValue));else if("doubleValue"in e){const r=Le(e.doubleValue);isNaN(r)?this.Et(n,13):(this.Et(n,15),Wl(r)?n.dt(0):n.dt(r))}else if("timestampValue"in e){let r=e.timestampValue;this.Et(n,20),typeof r=="string"&&(r=wr(r)),n.At(`${r.seconds||""}`),n.dt(r.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(hi(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.Et(n,45),n.dt(r.latitude||0),n.dt(r.longitude||0)}else"mapValue"in e?eR(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):K()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const r=e.fields||{};this.Et(n,55);for(const i of Object.keys(r))this.Rt(i,n),this.It(r[i],n)}wt(e,n){const r=e.values||[];this.Et(n,50);for(const i of r)this.It(i,n)}gt(e,n){this.Et(n,37),G.fromName(e).path.forEach(r=>{this.Et(n,60),this.St(r,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}zi.bt=new zi;function FO(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function SI(t){const e=64-function(r){let i=0;for(let s=0;s<8;++s){const o=FO(255&r[s]);if(i+=o,o!==8)break}return i}(t);return Math.ceil(e/8)}class UO{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ct(r.value),r=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Mt(r.value),r=n.next();this.xt()}Ot(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ct(r);else if(r<2048)this.Ct(960|r>>>6),this.Ct(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r);else{const i=n.codePointAt(0);this.Ct(240|i>>>18),this.Ct(128|63&i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i)}}this.vt()}Nt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Mt(r);else if(r<2048)this.Mt(960|r>>>6),this.Mt(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r);else{const i=n.codePointAt(0);this.Mt(240|i>>>18),this.Mt(128|63&i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i)}}this.xt()}Lt(e){const n=this.Bt(e),r=SI(n);this.kt(1+r),this.buffer[this.position++]=255&r;for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=255&n[i]}qt(e){const n=this.Bt(e),r=SI(n);this.kt(1+r),this.buffer[this.position++]=~(255&r);for(let i=n.length-r;i<n.length;++i)this.buffer[this.position++]=~(255&n[i])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,s,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let i=1;i<n.length;++i)n[i]^=r?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const i=new Uint8Array(r);i.set(this.buffer),this.buffer=i}}class jO{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class BO{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class Fa{constructor(){this.Gt=new UO,this.zt=new jO(this.Gt),this.jt=new BO(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class $i{constructor(e,n,r,i){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=i}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new $i(this.indexId,this.documentKey,this.arrayValue,r)}}function Vr(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=RI(t.arrayValue,e.arrayValue),n!==0?n:(n=RI(t.directionalValue,e.directionalValue),n!==0?n:G.comparator(t.documentKey,e.documentKey)))}function RI(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class AI{constructor(e){this.Yt=new fe((n,r)=>Se.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const r=n;r.isInequality()?this.Yt=this.Yt.add(r):this.Xt.push(r)}}get en(){return this.Yt.size>1}tn(e){if(J(e.collectionGroup===this.collectionId),this.en)return!1;const n=um(e);if(n!==void 0&&!this.nn(n))return!1;const r=Ui(e);let i=new Set,s=0,o=0;for(;s<r.length&&this.nn(r[s]);++s)i=i.add(r[s].fieldPath.canonicalString());if(s===r.length)return!0;if(this.Yt.size>0){const a=this.Yt.getIterator().getNext();if(!i.has(a.field.canonicalString())){const l=r[s];if(!this.rn(a,l)||!this.sn(this.Zt[o++],l))return!1}++s}for(;s<r.length;++s){const a=r[s];if(o>=this.Zt.length||!this.sn(this.Zt[o++],a))return!1}return!0}on(){if(this.en)return null;let e=new fe(Se.comparator);const n=[];for(const r of this.Xt)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new Vc(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new Vc(r.field,0))}for(const r of this.Zt)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new Vc(r.field,r.dir==="asc"?0:1)));return new Sh(Sh.UNKNOWN_ID,this.collectionId,n,Gl.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function qR(t){var e,n;if(J(t instanceof oe||t instanceof he),t instanceof oe){if(t instanceof lR){const i=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>oe.create(t.field,"==",s)))||[];return he.create(i,"or")}return t}const r=t.filters.map(i=>qR(i));return he.create(r,t.op)}function zO(t){if(t.getFilters().length===0)return[];const e=Tm(qR(t));return J(GR(e)),Im(e)||Em(e)?[e]:e.getFilters()}function Im(t){return t instanceof oe}function Em(t){return t instanceof he&&Xg(t)}function GR(t){return Im(t)||Em(t)||function(n){if(n instanceof he&&fm(n)){for(const r of n.getFilters())if(!Im(r)&&!Em(r))return!1;return!0}return!1}(t)}function Tm(t){if(J(t instanceof oe||t instanceof he),t instanceof oe)return t;if(t.filters.length===1)return Tm(t.filters[0]);const e=t.filters.map(r=>Tm(r));let n=he.create(e,t.op);return n=kh(n),GR(n)?n:(J(n instanceof he),J(Oo(n)),J(n.filters.length>1),n.filters.reduce((r,i)=>l_(r,i)))}function l_(t,e){let n;return J(t instanceof oe||t instanceof he),J(e instanceof oe||e instanceof he),n=t instanceof oe?e instanceof oe?function(i,s){return he.create([i,s],"and")}(t,e):PI(t,e):e instanceof oe?PI(e,t):function(i,s){if(J(i.filters.length>0&&s.filters.length>0),Oo(i)&&Oo(s))return sR(i,s.getFilters());const o=fm(i)?i:s,a=fm(i)?s:i,l=o.filters.map(c=>l_(c,a));return he.create(l,"or")}(t,e),kh(n)}function PI(t,e){if(Oo(e))return sR(e,t.getFilters());{const n=e.filters.map(r=>l_(t,r));return he.create(n,"or")}}function kh(t){if(J(t instanceof oe||t instanceof he),t instanceof oe)return t;const e=t.getFilters();if(e.length===1)return kh(e[0]);if(rR(t))return t;const n=e.map(i=>kh(i)),r=[];return n.forEach(i=>{i instanceof oe?r.push(i):i instanceof he&&(i.op===t.op?r.push(...i.filters):r.push(i))}),r.length===1?r[0]:he.create(r,t.op)}/**
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
 */class $O{constructor(){this._n=new u_}addToCollectionParentIndex(e,n){return this._n.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(nn.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(nn.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class u_{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new fe(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new fe(se.comparator)).toArray()}}/**
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
 */const pc=new Uint8Array(0);class qO{constructor(e,n){this.databaseId=n,this.an=new u_,this.un=new Ri(r=>hs(r),(r,i)=>fu(r,i)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:r,parent:Dt(i)};return CI(e).put(s)}return O.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[jS(n),""],!1,!0);return CI(e).U(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(Fn(o.parent))}return r})}addFieldIndex(e,n){const r=Ua(e),i=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(n);delete i.indexId;const s=r.add(i);if(n.indexState){const o=Us(e);return s.next(a=>{o.put(II(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const r=Ua(e),i=Us(e),s=Fs(e);return r.delete(n.indexId).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Ua(e),r=Fs(e),i=Us(e);return n.j().next(()=>r.j()).next(()=>i.j())}createTargetIndexes(e,n){return O.forEach(this.cn(n),r=>this.getIndexType(e,r).next(i=>{if(i===0||i===1){const s=new AI(r).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const r=Fs(e);let i=!0;const s=new Map;return O.forEach(this.cn(n),o=>this.ln(e,o).next(a=>{i&&(i=!!a),s.set(o,a)})).next(()=>{if(i){let o=te();const a=[];return O.forEach(s,(l,c)=>{B("IndexedDbIndexManager",`Using index ${function(T){return`id=${T.indexId}|cg=${T.collectionGroup}|f=${T.fields.map(x=>`${x.fieldPath}:${x.kind}`).join(",")}`}(l)} to execute ${hs(n)}`);const h=function(T,x){const F=um(x);if(F===void 0)return null;for(const M of Ah(T,F.fieldPath))switch(M.op){case"array-contains-any":return M.value.arrayValue.values||[];case"array-contains":return[M.value]}return null}(c,l),f=function(T,x){const F=new Map;for(const M of Ui(x))for(const A of Ah(T,M.fieldPath))switch(A.op){case"==":case"in":F.set(M.fieldPath.canonicalString(),A.value);break;case"not-in":case"!=":return F.set(M.fieldPath.canonicalString(),A.value),Array.from(F.values())}return null}(c,l),m=function(T,x){const F=[];let M=!0;for(const A of Ui(x)){const _=A.kind===0?oI(T,A.fieldPath,T.startAt):aI(T,A.fieldPath,T.startAt);F.push(_.value),M&&(M=_.inclusive)}return new pi(F,M)}(c,l),v=function(T,x){const F=[];let M=!0;for(const A of Ui(x)){const _=A.kind===0?aI(T,A.fieldPath,T.endAt):oI(T,A.fieldPath,T.endAt);F.push(_.value),M&&(M=_.inclusive)}return new pi(F,M)}(c,l),R=this.hn(l,c,m),P=this.hn(l,c,v),b=this.Pn(l,c,f),E=this.In(l.indexId,h,R,m.inclusive,P,v.inclusive,b);return O.forEach(E,w=>r.G(w,n.limit).next(T=>{T.forEach(x=>{const F=G.fromSegments(x.documentKey);o.has(F)||(o=o.add(F),a.push(F))})}))}).next(()=>a)}return O.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=zO(he.create(e.filters,"and")).map(r=>mm(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,r,i,s,o,a){const l=(n!=null?n.length:1)*Math.max(r.length,s.length),c=l/(n!=null?n.length:1),h=[];for(let f=0;f<l;++f){const m=n?this.Tn(n[f/c]):pc,v=this.En(e,m,r[f%c],i),R=this.dn(e,m,s[f%c],o),P=a.map(b=>this.En(e,m,b,!0));h.push(...this.createRange(v,R,P))}return h}En(e,n,r,i){const s=new $i(e,G.empty(),n,r);return i?s:s.Jt()}dn(e,n,r,i){const s=new $i(e,G.empty(),n,r);return i?s.Jt():s}ln(e,n){const r=new AI(n),i=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,i).next(s=>{let o=null;for(const a of s)r.tn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const i=this.cn(n);return O.forEach(i,s=>this.ln(e,s).next(o=>{o?r!==0&&o.fields.length<function(l){let c=new fe(Se.comparator),h=!1;for(const f of l.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:c=c.add(m.field));for(const f of l.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(s)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&i.length>1&&r===2?1:r)}An(e,n){const r=new Fa;for(const i of Ui(e)){const s=n.data.field(i.fieldPath);if(s==null)return null;const o=r.Ht(i.kind);zi.bt.Pt(s,o)}return r.Wt()}Tn(e){const n=new Fa;return zi.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const r=new Fa;return zi.bt.Pt(cs(this.databaseId,n),r.Ht(function(s){const o=Ui(s);return o.length===0?0:o[o.length-1].kind}(e))),r.Wt()}Pn(e,n,r){if(r===null)return[];let i=[];i.push(new Fa);let s=0;for(const o of Ui(e)){const a=r[s++];for(const l of i)if(this.Vn(n,o.fieldPath)&&Ql(a))i=this.mn(i,o,a);else{const c=l.Ht(o.kind);zi.bt.Pt(a,c)}}return this.fn(i)}hn(e,n,r){return this.Pn(e,n,r.position)}fn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].Wt();return n}mn(e,n,r){const i=[...e],s=[];for(const o of r.arrayValue.values||[])for(const a of i){const l=new Fa;l.seed(a.Wt()),zi.bt.Pt(o,l.Ht(n.kind)),s.push(l)}return s}Vn(e,n){return!!e.filters.find(r=>r instanceof oe&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Ua(e),i=Us(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(s=>{const o=[];return O.forEach(s,a=>i.get([a.indexId,this.uid]).next(l=>{o.push(function(h,f){const m=f?new Gl(f.sequenceNumber,new nn(ms(f.readTime),new G(Fn(f.documentKey)),f.largestBatchId)):Gl.empty(),v=h.fields.map(([R,P])=>new Vc(Se.fromServerFormat(R),P));return new Sh(h.indexId,h.collectionGroup,v,m)}(a,l))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,i)=>{const s=r.indexState.sequenceNumber-i.indexState.sequenceNumber;return s!==0?s:ee(r.collectionGroup,i.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const i=Ua(e),s=Us(e);return this.gn(e).next(o=>i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>O.forEach(a,l=>s.put(II(l.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return O.forEach(n,(i,s)=>{const o=r.get(i.collectionGroup);return(o?O.resolve(o):this.getFieldIndexes(e,i.collectionGroup)).next(a=>(r.set(i.collectionGroup,a),O.forEach(a,l=>this.pn(e,i,l).next(c=>{const h=this.yn(s,l);return c.isEqual(h)?O.resolve():this.wn(e,s,l,c,h)}))))})}Sn(e,n,r,i){return Fs(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.Rn(r,n.key),documentKey:n.key.path.toArray()})}bn(e,n,r,i){return Fs(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.Rn(r,n.key),n.key.path.toArray()])}pn(e,n,r){const i=Fs(e);let s=new fe(Vr);return i.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.Rn(r,n)])},(o,a)=>{s=s.add(new $i(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>s)}yn(e,n){let r=new fe(Vr);const i=this.An(n,e);if(i==null)return r;const s=um(n);if(s!=null){const o=e.data.field(s.fieldPath);if(Ql(o))for(const a of o.arrayValue.values||[])r=r.add(new $i(n.indexId,e.key,this.Tn(a),i))}else r=r.add(new $i(n.indexId,e.key,pc,i));return r}wn(e,n,r,i,s){B("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(l,c,h,f,m){const v=l.getIterator(),R=c.getIterator();let P=Ms(v),b=Ms(R);for(;P||b;){let E=!1,w=!1;if(P&&b){const T=h(P,b);T<0?w=!0:T>0&&(E=!0)}else P!=null?w=!0:E=!0;E?(f(b),b=Ms(R)):w?(m(P),P=Ms(v)):(P=Ms(v),b=Ms(R))}}(i,s,Vr,a=>{o.push(this.Sn(e,n,r,a))},a=>{o.push(this.bn(e,n,r,a))}),O.waitFor(o)}gn(e){let n=1;return Us(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,i,s)=>{s.done(),n=i.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>Vr(o,a)).filter((o,a,l)=>!a||Vr(o,l[a-1])!==0);const i=[];i.push(e);for(const o of r){const a=Vr(o,e),l=Vr(o,n);if(a===0)i[0]=e.Jt();else if(a>0&&l<0)i.push(o),i.push(o.Jt());else if(l>0)break}i.push(n);const s=[];for(let o=0;o<i.length;o+=2){if(this.Dn(i[o],i[o+1]))return[];const a=[i[o].indexId,this.uid,i[o].arrayValue,i[o].directionalValue,pc,[]],l=[i[o+1].indexId,this.uid,i[o+1].arrayValue,i[o+1].directionalValue,pc,[]];s.push(IDBKeyRange.bound(a,l))}return s}Dn(e,n){return Vr(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next(kI)}getMinOffset(e,n){return O.mapArray(this.cn(n),r=>this.ln(e,r).next(i=>i||K())).next(kI)}}function CI(t){return at(t,"collectionParents")}function Fs(t){return at(t,"indexEntries")}function Ua(t){return at(t,"indexConfiguration")}function Us(t){return at(t,"indexState")}function kI(t){J(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const i=t[r].indexState.offset;Qg(i,e)<0&&(e=i),n<i.largestBatchId&&(n=i.largestBatchId)}return new nn(e.readTime,e.documentKey,n)}/**
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
 */const bI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ft{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ft(e,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function WR(t,e,n){const r=t.store("mutations"),i=t.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const l=r.J({range:o},(h,f,m)=>(a++,m.delete()));s.push(l.next(()=>{J(a===1)}));const c=[];for(const h of n.mutations){const f=HS(e,h.key.path,n.batchId);s.push(i.delete(f)),c.push(h.key)}return O.waitFor(s).next(()=>c)}function bh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw K();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Ft.DEFAULT_COLLECTION_PERCENTILE=10,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ft.DEFAULT=new Ft(41943040,Ft.DEFAULT_COLLECTION_PERCENTILE,Ft.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ft.DISABLED=new Ft(-1,0,0);class gd{constructor(e,n,r,i){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=i,this.Cn={}}static lt(e,n,r,i){J(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new gd(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Lr(e).J({index:"userMutationsIndex",range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=Hs(e),o=Lr(e);return o.add({}).next(a=>{J(typeof a=="number");const l=new n_(a,n,r,i),c=function(v,R,P){const b=P.baseMutations.map(w=>Xl(v.ct,w)),E=P.mutations.map(w=>Xl(v.ct,w));return{userId:R,batchId:P.batchId,localWriteTimeMs:P.localWriteTime.toMillis(),baseMutations:b,mutations:E}}(this.serializer,this.userId,l),h=[];let f=new fe((m,v)=>ee(m.canonicalString(),v.canonicalString()));for(const m of i){const v=HS(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),h.push(o.put(c)),h.push(s.put(v,ND))}return f.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Cn[a]=l.keys()}),O.waitFor(h).next(()=>l)})}lookupMutationBatch(e,n){return Lr(e).get(n).next(r=>r?(J(r.userId===this.userId),Bi(this.serializer,r)):null)}vn(e,n){return this.Cn[n]?O.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Cn[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Lr(e).J({index:"userMutationsIndex",range:i},(o,a,l)=>{a.userId===this.userId&&(J(a.batchId>=r),s=Bi(this.serializer,a)),l.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Lr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Lr(e).U("userMutationsIndex",n).next(r=>r.map(i=>Bi(this.serializer,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=Lc(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return Hs(e).J({range:i},(o,a,l)=>{const[c,h,f]=o,m=Fn(h);if(c===this.userId&&n.path.isEqual(m))return Lr(e).get(f).next(v=>{if(!v)throw K();J(v.userId===this.userId),s.push(Bi(this.serializer,v))});l.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fe(ee);const i=[];return n.forEach(s=>{const o=Lc(this.userId,s.path),a=IDBKeyRange.lowerBound(o),l=Hs(e).J({range:a},(c,h,f)=>{const[m,v,R]=c,P=Fn(v);m===this.userId&&s.path.isEqual(P)?r=r.add(R):f.done()});i.push(l)}),O.waitFor(i).next(()=>this.Fn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=Lc(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new fe(ee);return Hs(e).J({range:o},(l,c,h)=>{const[f,m,v]=l,R=Fn(m);f===this.userId&&r.isPrefixOf(R)?R.length===i&&(a=a.add(v)):h.done()}).next(()=>this.Fn(e,a))}Fn(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Lr(e).get(s).next(o=>{if(o===null)throw K();J(o.userId===this.userId),r.push(Bi(this.serializer,o))}))}),O.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return WR(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),O.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return O.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),i=[];return Hs(e).J({range:r},(s,o,a)=>{if(s[0]===this.userId){const l=Fn(s[1]);i.push(l)}else a.done()}).next(()=>{J(i.length===0)})})}containsKey(e,n){return HR(e,this.userId,n)}xn(e){return KR(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function HR(t,e,n){const r=Lc(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return Hs(t).J({range:s,H:!0},(a,l,c)=>{const[h,f,m]=a;h===e&&f===i&&(o=!0),c.done()}).next(()=>o)}function Lr(t){return at(t,"mutations")}function Hs(t){return at(t,"documentMutations")}function KR(t){return at(t,"mutationQueues")}/**
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
 */class GO{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const r=new gs(n.highestTargetId);return n.highestTargetId=r.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>X.fromTimestamp(new Ae(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.Bn(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.kn(e,i)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(r=>(r.targetCount+=1,this.Qn(n,r),this.kn(e,r))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>js(e).delete(n.targetId)).next(()=>this.Bn(e)).next(r=>(J(r.targetCount>0),r.targetCount-=1,this.kn(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return js(e).J((o,a)=>{const l=el(a);l.sequenceNumber<=n&&r.get(l.targetId)===null&&(i++,s.push(this.removeTargetData(e,l)))}).next(()=>O.waitFor(s)).next(()=>i)}forEachTarget(e,n){return js(e).J((r,i)=>{const s=el(i);n(s)})}Bn(e){return xI(e).get("targetGlobalKey").next(n=>(J(n!==null),n))}kn(e,n){return xI(e).put("targetGlobalKey",n)}qn(e,n){return js(e).put($R(this.serializer,n))}Qn(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=hs(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return js(e).J({range:i,index:"queryTargetsIndex"},(o,a,l)=>{const c=el(a);fu(n,c.target)&&(s=c,l.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=zr(e);return n.forEach(o=>{const a=Dt(o.path);i.push(s.put({targetId:r,path:a})),i.push(this.referenceDelegate.addReference(e,r,o))}),O.waitFor(i)}removeMatchingKeys(e,n,r){const i=zr(e);return O.forEach(n,s=>{const o=Dt(s.path);return O.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=zr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=zr(e);let s=te();return i.J({range:r,H:!0},(o,a,l)=>{const c=Fn(o[1]),h=new G(c);s=s.add(h)}).next(()=>s)}containsKey(e,n){const r=Dt(n.path),i=IDBKeyRange.bound([r],[jS(r)],!1,!0);let s=0;return zr(e).J({index:"documentTargetsIndex",H:!0,range:i},([o,a],l,c)=>{o!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return js(e).get(n).next(r=>r?el(r):null)}}function js(t){return at(t,"targets")}function xI(t){return at(t,"targetGlobal")}function zr(t){return at(t,"targetDocuments")}/**
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
 */function NI([t,e],[n,r]){const i=ee(t,n);return i===0?ee(e,r):i}class WO{constructor(e){this.Kn=e,this.buffer=new fe(NI),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();NI(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class HO{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){B("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Si(n)?B("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await Ti(n)}await this.zn(3e5)})}}class KO{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(zt.oe);const r=new WO(n);return this.jn.forEachTarget(e,i=>r.Wn(i.sequenceNumber)).next(()=>this.jn.Jn(e,i=>r.Wn(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(bI)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),bI):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let r,i,s,o,a,l,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),i=this.params.maximumSequenceNumbersToCollect):i=f,o=Date.now(),this.nthSequenceNumber(e,i))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),$s()<=re.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(c-l)+`ms
Total Duration: ${c-h}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:f})))}}function QO(t,e){return new KO(t,e)}/**
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
 */class YO{constructor(e,n){this.db=e,this.garbageCollector=QO(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Zn(e){let n=0;return this.Jn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(r,i)=>n(i))}addReference(e,n,r){return mc(e,r)}removeReference(e,n,r){return mc(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return mc(e,n)}er(e,n){return function(i,s){let o=!1;return KR(i).Y(a=>HR(i,a,s).next(l=>(l&&(o=!0),O.resolve(!l)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Xn(e,(o,a)=>{if(a<=n){const l=this.er(e,o).next(c=>{if(!c)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o,X.min()),zr(e).delete(function(f){return[0,Dt(f.path)]}(o))))});i.push(l)}}).next(()=>O.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return mc(e,n)}Xn(e,n){const r=zr(e);let i,s=zt.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:l,sequenceNumber:c})=>{o===0?(s!==zt.oe&&n(new G(Fn(i)),s),s=c,i=l):s=zt.oe}).next(()=>{s!==zt.oe&&n(new G(Fn(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function mc(t,e){return zr(t).put(function(r,i){return{targetId:0,path:Dt(r.path),sequenceNumber:i}}(e,t.currentSequenceNumber))}/**
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
 */class QR{constructor(){this.changes=new Ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,we.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JO{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return Vi(e).put(r)}removeEntry(e,n,r){return Vi(e).delete(function(s,o){const a=s.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Ch(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.tr(e,r)))}getEntry(e,n){let r=we.newInvalidDocument(n);return Vi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ja(n))},(i,s)=>{r=this.nr(n,s)}).next(()=>r)}rr(e,n){let r={size:0,document:we.newInvalidDocument(n)};return Vi(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(ja(n))},(i,s)=>{r={document:this.nr(n,s),size:bh(s)}}).next(()=>r)}getEntries(e,n){let r=qt();return this.ir(e,n,(i,s)=>{const o=this.nr(i,s);r=r.insert(i,o)}).next(()=>r)}sr(e,n){let r=qt(),i=new _e(G.comparator);return this.ir(e,n,(s,o)=>{const a=this.nr(s,o);r=r.insert(s,a),i=i.insert(s,bh(o))}).next(()=>({documents:r,_r:i}))}ir(e,n,r){if(n.isEmpty())return O.resolve();let i=new fe(VI);n.forEach(l=>i=i.add(l));const s=IDBKeyRange.bound(ja(i.first()),ja(i.last())),o=i.getIterator();let a=o.getNext();return Vi(e).J({index:"documentKeyIndex",range:s},(l,c,h)=>{const f=G.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&VI(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(ja(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,i,s){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Ch(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],l=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Vi(e).U(IDBKeyRange.bound(a,l,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let h=qt();for(const f of c){const m=this.nr(G.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(mu(n,m)||i.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,n,r,i){let s=qt();const o=OI(n,r),a=OI(n,nn.max());return Vi(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(l,c,h)=>{const f=this.nr(G.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===i&&h.done()}).next(()=>s)}newChangeBuffer(e){return new XO(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return DI(e).get("remoteDocumentGlobalKey").next(n=>(J(!!n),n))}tr(e,n){return DI(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const r=LO(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(X.min())))return r}return we.newInvalidDocument(e)}}function YR(t){return new JO(t)}class XO extends QR{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Ri(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new fe((s,o)=>ee(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,a.readTime)),o.isValidDocument()){const l=vI(this.ar.serializer,o);i=i.add(s.path.popLast());const c=bh(l);r+=c-a.size,n.push(this.ar.addEntry(e,s,l))}else if(r-=a.size,this.trackRemovals){const l=vI(this.ar.serializer,o.convertToNoDocument(X.min()));n.push(this.ar.addEntry(e,s,l))}}),i.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,r)),O.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(r=>(this.ur.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:r,_r:i})=>(i.forEach((s,o)=>{this.ur.set(s,{size:o,readTime:r.get(s).readTime})}),r))}}function DI(t){return at(t,"remoteDocumentGlobal")}function Vi(t){return at(t,"remoteDocumentsV14")}function ja(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function OI(t,e){const n=e.documentKey.path.toArray();return[t,Ch(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function VI(t,e){const n=t.path.toArray(),r=e.path.toArray();let i=0;for(let s=0;s<n.length-2&&s<r.length-2;++s)if(i=ee(n[s],r[s]),i)return i;return i=ee(n.length,r.length),i||(i=ee(n[n.length-2],r[r.length-2]),i||ee(n[n.length-1],r[r.length-1]))}/**
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
 */class ZO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&pl(r.mutation,i,$t.empty(),Ae.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=te()){const i=Un();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Un();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=qt();const o=fl(),a=function(){return fl()}();return n.forEach((l,c)=>{const h=r.get(c.key);i.has(c.key)&&(h===void 0||h.mutation instanceof Ar)?s=s.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),pl(h.mutation,c,h.mutation.getFieldMask(),Ae.now())):o.set(c.key,$t.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new ZO(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fl();let i=new _e((o,a)=>o-a),s=te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let h=r.get(l)||$t.empty();h=a.applyToLocalView(c,h),r.set(l,h);const f=(i.get(a.batchId)||te()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,h=l.value,f=mR();h.forEach(m=>{if(!s.has(m)){const v=TR(n.get(m),r.get(m));v!==null&&f.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Zg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Un());let a=-1,l=s;return o.next(c=>O.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(h)?O.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{l=l.insert(h,m)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,l,c,te())).next(h=>({batchId:a,changes:pR(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let i=Xa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Xa();return this.indexManager.getCollectionParents(e,s).next(a=>O.forEach(a,l=>{const c=function(f,m){return new Rr(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r,i).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,we.newInvalidDocument(h)))});let a=Xa();return o.forEach((l,c)=>{const h=s.get(l);h!==void 0&&pl(h.mutation,c,$t.empty(),Ae.now()),mu(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class eV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return O.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:We(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:a_(i.bundledQuery),readTime:We(i.readTime)}}(n)),O.resolve()}}/**
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
 */class tV{constructor(){this.overlays=new _e(G.comparator),this.hr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Un();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Un(),s=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new _e((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=s.get(c.largestBatchId);h===null&&(h=Un(),s=s.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=Un(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=i)););return O.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new i_(n,r));let s=this.hr.get(n);s===void 0&&(s=te(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
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
 */class c_{constructor(){this.Pr=new fe(et.Ir),this.Tr=new fe(et.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new et(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new G(new se([])),r=new et(n,e),i=new et(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new se([])),r=new et(n,e),i=new et(n,e+1);let s=te();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new et(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||ee(e.pr,n.pr)}static Er(e,n){return ee(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
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
 */class nV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new fe(et.Ir)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new n_(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new fe(ee);return n.forEach(i=>{const s=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),O.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;G.isDocumentKey(s)||(s=s.child(""));const o=new et(new G(s),0);let a=new fe(ee);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.pr)),!0)},o),O.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return O.forEach(n.mutations,i=>{const s=new et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new et(n,0),i=this.wr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rV{constructor(e){this.vr=e,this.docs=function(){return new _e(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():we.newInvalidDocument(n))}getEntries(e,n){let r=qt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():we.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=qt();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:h}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Qg(zS(h),r)<=0||(i.has(h.key)||mu(n,h))&&(s=s.insert(h.key,h.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){K()}Fr(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new iV(this)}getSize(e){return O.resolve(this.size)}}class iV extends QR{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class sV{constructor(e){this.persistence=e,this.Mr=new Ri(n=>hs(n),fu),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Or=0,this.Nr=new c_,this.targetCount=0,this.Lr=gs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),O.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new gs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.qn(n),O.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.Nr.containsKey(n))}}/**
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
 */class XR{constructor(e,n){this.Br={},this.overlays={},this.kr=new zt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new sV(this),this.indexManager=new $O,this.remoteDocumentCache=function(i){return new rV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new zR(n),this.$r=new eV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new tV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new nV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){B("MemoryPersistence","Starting transaction:",e);const i=new oV(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return O.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class oV extends qS{constructor(e){super(),this.currentSequenceNumber=e}}class _d{constructor(e){this.persistence=e,this.zr=new c_,this.jr=null}static Hr(e){return new _d(e)}get Jr(){if(this.jr)return this.jr;throw K()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),O.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Jr,r=>{const i=G.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return O.or([()=>O.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class aV{constructor(e){this.serializer=e}O(e,n,r,i){const s=new hd("createOrUpgrade",n);r<1&&i>=1&&(function(l){l.createObjectStore("owner")}(e),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yw,{unique:!0}),l.createObjectStore("documentMutations")}(e),LI(e),function(l){l.createObjectStore("remoteDocuments")}(e));let o=O.resolve();return r<3&&i>=3&&(r!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(e),LI(e)),o=o.next(()=>function(l){const c=l.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:X.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(l,c){return c.store("mutations").U().next(h=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Yw,{unique:!0});const f=c.store("mutations"),m=h.map(v=>f.put(v));return O.waitFor(m)})}(e,s))),o=o.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Xr(s))),r<6&&i>=6&&(o=o.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),r<7&&i>=7&&(o=o.next(()=>this.ti(s))),r<8&&i>=8&&(o=o.next(()=>this.ni(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&i>=10&&(o=o.next(()=>this.ri(s))),r<11&&i>=11&&(o=o.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&i>=12&&(o=o.next(()=>{(function(l){const c=l.createObjectStore("documentOverlays",{keyPath:qD});c.createIndex("collectionPathOverlayIndex",GD,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",WD,{unique:!1})})(e)})),r<13&&i>=13&&(o=o.next(()=>function(l){const c=l.createObjectStore("remoteDocumentsV14",{keyPath:DD});c.createIndex("documentKeyIndex",OD),c.createIndex("collectionGroupIndex",VD)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&i>=14&&(o=o.next(()=>this.si(e,s))),r<15&&i>=15&&(o=o.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:jD}).createIndex("sequenceNumberIndex",BD,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:zD}).createIndex("documentKeyIndex",$D,{unique:!1})}(e))),r<16&&i>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),o}ei(e){let n=0;return e.store("remoteDocuments").J((r,i)=>{n+=bh(i)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Xr(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(i=>O.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>O.forEach(a,l=>{J(l.userId===s.userId);const c=Bi(this.serializer,l);return WR(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(i=>{const s=[];return r.J((o,a)=>{const l=new se(o),c=function(f){return[0,Dt(f)]}(l);s.push(n.get(c).next(h=>h?O.resolve():(f=>n.put({targetId:0,path:Dt(f),sequenceNumber:i.highestListenSequenceNumber}))(l)))}).next(()=>O.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:UD});const r=n.store("collectionParents"),i=new u_,s=o=>{if(i.add(o)){const a=o.lastSegment(),l=o.popLast();return r.put({collectionId:a,parent:Dt(l)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const l=new se(o);return s(l.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,l],c)=>{const h=Fn(a);return s(h.popLast())}))}ri(e){const n=e.store("targets");return n.J((r,i)=>{const s=el(i),o=$R(this.serializer,s);return n.put(o)})}ii(e,n){const r=n.store("remoteDocuments"),i=[];return r.J((s,o)=>{const a=n.store("remoteDocumentsV14"),l=function(f){return f.document?new G(se.fromString(f.document.name).popFirst(5)):f.noDocument?G.fromSegments(f.noDocument.path):f.unknownDocument?G.fromSegments(f.unknownDocument.path):K()}(o).path.toArray(),c={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};i.push(a.put(c))}).next(()=>O.waitFor(i))}si(e,n){const r=n.store("mutations"),i=YR(this.serializer),s=new XR(_d.Hr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(l=>{var c;let h=(c=a.get(l.userId))!==null&&c!==void 0?c:te();Bi(this.serializer,l).keys().forEach(f=>h=h.add(f)),a.set(l.userId,h)}),O.forEach(a,(l,c)=>{const h=new nt(c),f=md.lt(this.serializer,h),m=s.getIndexManager(h),v=gd.lt(h,this.serializer,m,s.referenceDelegate);return new JR(i,v,f,m).recalculateAndSaveOverlaysForDocumentKeys(new cm(n,zt.oe),l).next()})})}}function LI(t){t.createObjectStore("targetDocuments",{keyPath:MD}).createIndex("documentTargetsIndex",FD,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",LD,{unique:!0}),t.createObjectStore("targetGlobal")}const Yf="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class h_{constructor(e,n,r,i,s,o,a,l,c,h,f=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.oi=s,this.window=o,this.document=a,this._i=c,this.ai=h,this.ui=f,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=m=>Promise.resolve(),!h_.D())throw new j(V.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new YO(this,i),this.Ti=n+"main",this.serializer=new zR(l),this.Ei=new $n(this.Ti,this.ui,new aV(this.serializer)),this.Qr=new GO(this.referenceDelegate,this.serializer),this.remoteDocumentCache=YR(this.serializer),this.$r=new MO,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,h===!1&&Ge("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new j(V.FAILED_PRECONDITION,Yf);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new zt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>gc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(Si(e))return B("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return B("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return Ba(e).get("owner").next(n=>O.resolve(this.Si(n)))}bi(e){return gc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=at(n,"clientMetadata");return r.U().next(i=>{const s=this.vi(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return O.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?O.resolve(!0):Ba(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new j(V.FAILED_PRECONDITION,Yf);return!1}}return!(!this.networkEnabled||!this.inForeground)||gc(e).U().next(r=>this.vi(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&B("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new cm(e,zt.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(r=>this.Ci(r.updateTimeMs,n)&&!this.Mi(r.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>gc(e).U().next(n=>this.vi(n,18e5).map(r=>r.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return gd.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new qO(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return md.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,r){B("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite",s=function(l){return l===16?KD:l===15?JS:l===14?YS:l===13?QS:l===12?HD:l===11?KS:void K()}(this.ui);let o;return this.Ei.runTransaction(e,i,s,a=>(o=new cm(a,this.kr?this.kr.next():zt.oe),n==="readwrite-primary"?this.gi(o).next(l=>!!l||this.pi(o)).next(l=>{if(!l)throw Ge(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new j(V.FAILED_PRECONDITION,$S);return r(o)}).next(l=>this.wi(o).next(()=>l)):this.ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}ki(e){return Ba(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new j(V.FAILED_PRECONDITION,Yf)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ba(e).put("owner",n)}static D(){return $n.D()}yi(e){const n=Ba(e);return n.get("owner").next(r=>this.Si(r)?(B("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):O.resolve())}Ci(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Ge(`Detected an update time that is in the future: ${e} > ${r}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;yS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const r=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return B("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Ge("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){Ge("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ba(t){return at(t,"owner")}function gc(t){return at(t,"clientMetadata")}function d_(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class f_{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=te(),i=te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new f_(e,n.fromCache,r,i)}}/**
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
 */class lV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ZR{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return yS()?8:GS(Pe())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new lV;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?($s()<=re.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",qs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),O.resolve()):($s()<=re.DEBUG&&B("QueryEngine","Query:",qs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?($s()<=re.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",qs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ot(n))):O.resolve())}ji(e,n){if(lI(n))return O.resolve(null);let r=Ot(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Ph(n,null,"F"),r=Ot(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=te(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,Ph(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,i){return lI(n)||i.isEqual(X.min())?O.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?O.resolve(null):($s()<=re.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),qs(n)),this.es(e,o,n,BS(i,-1)).next(a=>a))})}Zi(e,n){let r=new fe(dR(e));return n.forEach((i,s)=>{mu(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return $s()<=re.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",qs(n)),this.zi.getDocumentsMatchingQuery(e,n,nn.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class uV{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new _e(ee),this.rs=new Ri(s=>hs(s),fu),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JR(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function eA(t,e,n,r){return new uV(t,e,n,r)}async function tA(t,e){const n=W(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=te();for(const c of i){o.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}for(const c of s){a.push(c.batchId);for(const h of c.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function cV(t,e){const n=W(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,h){const f=c.batch,m=f.keys();let v=O.resolve();return m.forEach(R=>{v=v.next(()=>h.getEntry(l,R)).next(P=>{const b=c.docVersions.get(R);J(b!==null),P.version.compareTo(b)<0&&(f.applyToRemoteDocument(P,c),P.isValidDocument()&&(P.setReadTime(c.commitVersion),h.addEntry(P)))})}),v.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=te();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function nA(t){const e=W(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function hV(t,e){const n=W(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((h,f)=>{const m=i.get(f);if(!m)return;a.push(n.Qr.removeMatchingKeys(s,h.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,h.addedDocuments,f)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?v=v.withResumeToken(Ze.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):h.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(h.resumeToken,r)),i=i.insert(f,v),function(P,b,E){return P.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,v,h)&&a.push(n.Qr.updateTargetData(s,v))});let l=qt(),c=te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(rA(s,o,e.documentUpdates).next(h=>{l=h.cs,c=h.ls})),!r.isEqual(X.min())){const h=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return O.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,c)).next(()=>l)}).then(s=>(n.ns=i,s))}function rA(t,e,n){let r=te(),i=te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=qt();return n.forEach((a,l)=>{const c=s.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(X.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):B("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:i}})}function dV(t,e){const n=W(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Fo(t,e){const n=W(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new lr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Uo(t,e,n){const r=W(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Si(o))throw o;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function xh(t,e,n){const r=W(t);let i=X.min(),s=te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,h){const f=W(l),m=f.rs.get(h);return m!==void 0?O.resolve(f.ns.get(m)):f.Qr.getTargetData(c,h)}(r,o,Ot(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:te())).next(a=>(oA(r,hR(e),a),{documents:a,hs:s})))}function iA(t,e){const n=W(t),r=W(n.Qr),i=n.ns.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.ot(s,e).next(o=>o?o.target:null))}function sA(t,e){const n=W(t),r=n.ss.get(e)||X.min();return n.persistence.runTransaction("Get new document changes","readonly",i=>n.os.getAllFromCollectionGroup(i,e,BS(r,-1),Number.MAX_SAFE_INTEGER)).then(i=>(oA(n,e,i),i))}function oA(t,e,n){let r=t.ss.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}async function fV(t,e,n,r){const i=W(t);let s=te(),o=qt();for(const c of n){const h=e.Ps(c.metadata.name);c.document&&(s=s.add(h));const f=e.Is(c);f.setReadTime(e.Ts(c.metadata.readTime)),o=o.insert(h,f)}const a=i.os.newChangeBuffer({trackRemovals:!0}),l=await Fo(i,function(h){return Ot(na(se.fromString(`__bundle__/docs/${h}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>rA(c,a,o).next(h=>(a.apply(c),h)).next(h=>i.Qr.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.Qr.addMatchingKeys(c,s,l.targetId)).next(()=>i.localDocuments.getLocalViewOfDocuments(c,h.cs,h.ls)).next(()=>h.cs)))}async function pV(t,e,n=te()){const r=await Fo(t,Ot(a_(e.bundledQuery))),i=W(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=We(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.$r.saveNamedQuery(s,e);const a=r.withResumeToken(Ze.EMPTY_BYTE_STRING,o);return i.ns=i.ns.insert(a.targetId,a),i.Qr.updateTargetData(s,a).next(()=>i.Qr.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.Qr.addMatchingKeys(s,n,r.targetId)).next(()=>i.$r.saveNamedQuery(s,e))})}function MI(t,e){return`firestore_clients_${t}_${e}`}function FI(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Jf(t,e){return`firestore_targets_${t}_${e}`}class Nh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Es(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new j(i.error.code,i.error.message))),o?new Nh(e,n,i.state,s):(Ge("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ml{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Es(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new j(r.error.code,r.error.message))),s?new ml(e,r.state,i):(Ge("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Dh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=e_();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=WS(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Dh(e,s):(Ge("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class p_{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new p_(n.clientId,n.onlineState):(Ge("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Sm{constructor(){this.activeTargetIds=e_()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xf{constructor(e,n,r,i,s){this.window=e,this.oi=n,this.persistenceKey=r,this.Vs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new _e(ee),this.started=!1,this.ys=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=MI(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Sm),this.bs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const r of e){if(r===this.Vs)continue;const i=this.getItem(MI(this.persistenceKey,r));if(i){const s=Dh.Es(r,i);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const r=this.xs(n);r&&this.Os(r)}for(const r of this.ys)this.gs(r);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,r){this.Ls(e,n,r),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Jf(this.persistenceKey,e));if(r){const i=ml.Es(e,r);i&&(n=i.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Jf(this.persistenceKey,e))}updateQueryState(e,n,r){this.qs(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.Bs(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return B("SharedClientState","READ",e,n),n}setItem(e,n){B("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){B("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(B("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void Ge("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const r=this.$s(n.key);return this.Us(r,null)}{const r=this.Ws(n.key,n.newValue);if(r)return this.Us(r.clientId,r)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const r=this.Gs(n.key,n.newValue);if(r)return this.zs(r)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const r=this.js(n.key,n.newValue);if(r)return this.Hs(r)}}else if(n.key===this.vs){if(n.newValue!==null){const r=this.xs(n.newValue);if(r)return this.Os(r)}}else if(n.key===this.Ss){const r=function(s){let o=zt.oe;if(s!=null)try{const a=JSON.parse(s);J(typeof a=="number"),o=a}catch(a){Ge("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==zt.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Fs){const r=this.Js(n.newValue);await Promise.all(r.map(i=>this.syncEngine.Ys(i)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,r){const i=new Nh(this.currentUser,e,n,r),s=FI(this.persistenceKey,this.currentUser,e);this.setItem(s,i.ds())}Bs(e){const n=FI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,r){const i=Jf(this.persistenceKey,e),s=new ml(e,n,r);this.setItem(i,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const r=this.$s(e);return Dh.Es(r,n)}Gs(e,n){const r=this.Ds.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return Nh.Es(new nt(s),i,n)}js(e,n){const r=this.Cs.exec(e),i=Number(r[1]);return ml.Es(i,n)}xs(e){return p_.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);B("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const r=n?this.ps.insert(e,n):this.ps.remove(e),i=this.Ns(this.ps),s=this.Ns(r),o=[],a=[];return s.forEach(l=>{i.has(l)||o.push(l)}),i.forEach(l=>{s.has(l)||a.push(l)}),this.syncEngine.eo(o,a).then(()=>{this.ps=r})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=e_();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class aA{constructor(){this.no=new Sm,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Sm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class mV{io(e){}shutdown(){}}/**
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
 */class UI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _c=null;function Zf(){return _c===null?_c=function(){return 268435456+Math.round(2147483648*Math.random())}():_c++,"0x"+_c.toString(16)}/**
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
 */const gV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class _V{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const wt="WebChannelConnection";class yV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const a=Zf(),l=this.vo(n,r.toUriEncodedString());B("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,o),this.Mo(n,l,c,i).then(h=>(B("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Cn("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",l,"request:",i),h})}xo(n,r,i,s,o,a){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ta}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=gV[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Zf();return new Promise((o,a)=>{const l=new NS;l.setWithCredentials(!0),l.listenOnce(OS.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Oc.NO_ERROR:const h=l.getResponseJson();B(wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(h)),o(h);break;case Oc.TIMEOUT:B(wt,`RPC '${e}' ${s} timed out`),a(new j(V.DEADLINE_EXCEEDED,"Request time out"));break;case Oc.HTTP_ERROR:const f=l.getStatus();if(B(wt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let m=l.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const R=function(b){const E=b.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(E)>=0?E:V.UNKNOWN}(v.status);a(new j(R,v.message))}else a(new j(V.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new j(V.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{B(wt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(i);B(wt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",c,r,15)})}Oo(e,n,r){const i=Zf(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=MS(),a=LS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new DS({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");B(wt,`Creating RPC '${e}' stream ${i}: ${h}`,l);const f=o.createWebChannel(h,l);let m=!1,v=!1;const R=new _V({lo:b=>{v?B(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,b):(m||(B(wt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),B(wt,`RPC '${e}' stream ${i} sending:`,b),f.send(b))},ho:()=>f.close()}),P=(b,E,w)=>{b.listen(E,T=>{try{w(T)}catch(x){setTimeout(()=>{throw x},0)}})};return P(f,Ja.EventType.OPEN,()=>{v||(B(wt,`RPC '${e}' stream ${i} transport opened.`),R.mo())}),P(f,Ja.EventType.CLOSE,()=>{v||(v=!0,B(wt,`RPC '${e}' stream ${i} transport closed`),R.po())}),P(f,Ja.EventType.ERROR,b=>{v||(v=!0,Cn(wt,`RPC '${e}' stream ${i} transport errored:`,b),R.po(new j(V.UNAVAILABLE,"The operation could not be completed")))}),P(f,Ja.EventType.MESSAGE,b=>{var E;if(!v){const w=b.data[0];J(!!w);const T=w,x=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(x){B(wt,`RPC '${e}' stream ${i} received error:`,x);const F=x.status;let M=function(g){const S=He[g];if(S!==void 0)return AR(S)}(F),A=x.message;M===void 0&&(M=V.INTERNAL,A="Unknown error status: "+F+" with message "+x.message),v=!0,R.po(new j(M,A)),f.close()}else B(wt,`RPC '${e}' stream ${i} received:`,w),R.yo(w)}}),P(a,VS.STAT_EVENT,b=>{b.stat===lm.PROXY?B(wt,`RPC '${e}' stream ${i} detected buffering proxy`):b.stat===lm.NOPROXY&&B(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}/**
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
 */function lA(){return typeof window<"u"?window:null}function Bc(){return typeof document<"u"?document:null}/**
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
 */function vu(t){return new AO(t,!0)}/**
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
 */class m_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class uA{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new m_(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Ge(n.toString()),Ge("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new j(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vV extends uA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=kO(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?We(o.readTime):X.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=vm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Rh(l)?{documents:LR(s,l)}:{query:MR(s,l)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=bR(s,o.resumeToken);const c=_m(s,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=Mo(s,o.snapshotVersion.toTimestamp());const c=_m(s,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=xO(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=vm(this.serializer),n.removeTarget=e,this.i_(n)}}class wV extends uA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=bO(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.A_(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=vm(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Xl(this.serializer,r))};this.i_(n)}}/**
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
 */class IV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,ym(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(V.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.xo(e,ym(n,r),i,o,a,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new j(V.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class EV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Ge(n),this.y_=!1):B("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class TV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{Ai(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=W(l);c.M_.add(4),await sa(c),c.N_.set("Unknown"),c.M_.delete(4),await wu(c)}(this))})}),this.N_=new EV(r,i)}}async function wu(t){if(Ai(t))for(const e of t.x_)await e(!0)}async function sa(t){for(const e of t.x_)await e(!1)}function yd(t,e){const n=W(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),y_(n)?__(n):aa(n).Xo()&&g_(n,e))}function jo(t,e){const n=W(t),r=aa(n);n.F_.delete(e),r.Xo()&&cA(n,e),n.F_.size===0&&(r.Xo()?r.n_():Ai(n)&&n.N_.set("Unknown"))}function g_(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}aa(t).P_(e)}function cA(t,e){t.L_.xe(e),aa(t).I_(e)}function __(t){t.L_=new EO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),aa(t).start(),t.N_.w_()}function y_(t){return Ai(t)&&!aa(t).Zo()&&t.F_.size>0}function Ai(t){return W(t).M_.size===0}function hA(t){t.L_=void 0}async function SV(t){t.N_.set("Online")}async function RV(t){t.F_.forEach((e,n)=>{g_(t,e)})}async function AV(t,e){hA(t),y_(t)?(t.N_.D_(e),__(t)):t.N_.set("Unknown")}async function PV(t,e,n){if(t.N_.set("Online"),e instanceof kR&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.F_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.F_.delete(a),i.L_.removeTarget(a))}(t,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Oh(t,r)}else if(e instanceof jc?t.L_.Ke(e):e instanceof CR?t.L_.He(e):t.L_.We(e),!n.isEqual(X.min()))try{const r=await nA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.L_.rt(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.F_.get(c);h&&s.F_.set(c,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const h=s.F_.get(l);if(!h)return;s.F_.set(l,h.withResumeToken(Ze.EMPTY_BYTE_STRING,h.snapshotVersion)),cA(s,l);const f=new lr(h.target,l,c,h.sequenceNumber);g_(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Oh(t,r)}}async function Oh(t,e,n){if(!Si(e))throw e;t.M_.add(1),await sa(t),t.N_.set("Offline"),n||(n=()=>nA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await wu(t)})}function dA(t,e){return e().catch(n=>Oh(t,n,e))}async function oa(t){const e=W(t),n=mi(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;CV(e);)try{const i=await dV(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,kV(e,i)}catch(i){await Oh(e,i)}fA(e)&&pA(e)}function CV(t){return Ai(t)&&t.v_.length<10}function kV(t,e){t.v_.push(e);const n=mi(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function fA(t){return Ai(t)&&!mi(t).Zo()&&t.v_.length>0}function pA(t){mi(t).start()}async function bV(t){mi(t).V_()}async function xV(t){const e=mi(t);for(const n of t.v_)e.d_(n.mutations)}async function NV(t,e,n){const r=t.v_.shift(),i=r_.from(r,e,n);await dA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await oa(t)}async function DV(t,e){e&&mi(t).E_&&await async function(r,i){if(function(o){return RR(o)&&o!==V.ABORTED}(i.code)){const s=r.v_.shift();mi(r).t_(),await dA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await oa(r)}}(t,e),fA(t)&&pA(t)}async function jI(t,e){const n=W(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=Ai(n);n.M_.add(3),await sa(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await wu(n)}async function Rm(t,e){const n=W(t);e?(n.M_.delete(2),await wu(n)):e||(n.M_.add(2),await sa(n),n.N_.set("Unknown"))}function aa(t){return t.B_||(t.B_=function(n,r,i){const s=W(n);return s.f_(),new vV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:SV.bind(null,t),To:RV.bind(null,t),Ao:AV.bind(null,t),h_:PV.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),y_(t)?__(t):t.N_.set("Unknown")):(await t.B_.stop(),hA(t))})),t.B_}function mi(t){return t.k_||(t.k_=function(n,r,i){const s=W(n);return s.f_(),new wV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:bV.bind(null,t),Ao:DV.bind(null,t),R_:xV.bind(null,t),A_:NV.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await oa(t)):(await t.k_.stop(),t.v_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class v_{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new it,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new v_(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function la(t,e){if(Ge("AsyncQueue",`${e}: ${t}`),Si(t))return new j(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class mo{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=Xa(),this.sortedSet=new _e(this.comparator)}static emptySet(e){return new mo(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof mo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class BI{constructor(){this.q_=new _e(G.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):K():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Bo{constructor(e,n,r,i,s,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Bo(e,n,mo.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class OV{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class VV{constructor(){this.queries=new Ri(e=>cR(e),pu),this.onlineState="Unknown",this.z_=new Set}}async function w_(t,e){const n=W(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new OV,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const a=la(o,`Initialization of query '${qs(e.query)}' failed`);return void e.onError(a)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&E_(n)}async function I_(t,e){const n=W(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function LV(t,e){const n=W(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.U_)a.H_(i)&&(r=!0);o.K_=i}}r&&E_(n)}function MV(t,e,n){const r=W(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function E_(t){t.z_.forEach(e=>{e.next()})}var Am,zI;(zI=Am||(Am={})).J_="default",zI.Cache="cache";class T_{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Bo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=Bo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Am.Cache}}/**
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
 */class FV{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
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
 */class $I{constructor(e){this.serializer=e}Ps(e){return qn(this.serializer,e)}Is(e){return e.metadata.exists?VR(this.serializer,e.document,!1):we.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return We(e)}}class UV{constructor(e,n,r){this.oa=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=mA(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const r=se.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,r=new $I(this.serializer);for(const i of e)if(i.metadata.queries){const s=r.Ps(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||te()).add(s);n.set(o,a)}}return n}async complete(){const e=await fV(this.localStore,new $I(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const r of this.queries)await pV(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function mA(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class gA{constructor(e){this.key=e}}class _A{constructor(e){this.key=e}}class yA{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=te(),this.mutatedKeys=te(),this.Ia=dR(e),this.Ta=new mo(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new BI,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,f)=>{const m=i.get(h),v=mu(this.query,f)?f:null,R=!!m&&this.mutatedKeys.has(m.key),P=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let b=!1;m&&v?m.data.isEqual(v.data)?R!==P&&(r.track({type:3,doc:v}),b=!0):this.Ra(m,v)||(r.track({type:2,doc:v}),b=!0,(l&&this.Ia(v,l)>0||c&&this.Ia(v,c)<0)&&(a=!0)):!m&&v?(r.track({type:0,doc:v}),b=!0):m&&!v&&(r.track({type:1,doc:m}),b=!0,(l||c)&&(a=!0)),b&&(v?(o=o.add(v),s=P?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Ta:o,Aa:r,Xi:a,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((h,f)=>function(v,R){const P=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return P(v)-P(R)}(h.type,f.type)||this.Ia(h.doc,f.doc)),this.Va(r),i=i!=null&&i;const a=n&&!i?this.ma():[],l=this.Pa.size===0&&this.current&&!i?1:0,c=l!==this.ha;return this.ha=l,o.length!==0||c?{snapshot:new Bo(this.query,e.Ta,s,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:a}:{fa:a}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new BI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=te(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new _A(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new gA(r))}),n}pa(e){this.la=e.hs,this.Pa=te();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return Bo.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class jV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BV{constructor(e){this.key=e,this.wa=!1}}class zV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new Ri(a=>cR(a),pu),this.Da=new Map,this.Ca=new Set,this.va=new _e(G.comparator),this.Fa=new Map,this.Ma=new c_,this.xa={},this.Oa=new Map,this.Na=gs.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function $V(t,e,n=!0){const r=vd(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await vA(r,e,n,!0),i}async function qV(t,e){const n=vd(t);await vA(n,e,!0,!1)}async function vA(t,e,n,r){const i=await Fo(t.localStore,Ot(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let a;return r&&(a=await S_(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&yd(t.remoteStore,i),a}async function S_(t,e,n,r,i){t.Ba=(f,m,v)=>async function(P,b,E,w){let T=b.view.da(E);T.Xi&&(T=await xh(P.localStore,b.query,!1).then(({documents:A})=>b.view.da(A,T)));const x=w&&w.targetChanges.get(b.targetId),F=w&&w.targetMismatches.get(b.targetId)!=null,M=b.view.applyChanges(T,P.isPrimaryClient,x,F);return Pm(P,b.targetId,M.fa),M.snapshot}(t,f,m,v);const s=await xh(t.localStore,e,!0),o=new yA(e,s.hs),a=o.da(s.documents),l=yu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);Pm(t,n,c.fa);const h=new jV(e,n,o);return t.ba.set(e,h),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function GV(t,e,n){const r=W(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!pu(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Uo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&jo(r.remoteStore,i.targetId),zo(r,i.targetId)}).catch(Ti)):(zo(r,i.targetId),await Uo(r.localStore,i.targetId,!0))}async function WV(t,e){const n=W(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),jo(n.remoteStore,r.targetId))}async function HV(t,e,n){const r=C_(t);try{const i=await function(o,a){const l=W(o),c=Ae.now(),h=a.reduce((v,R)=>v.add(R.key),te());let f,m;return l.persistence.runTransaction("Locally write mutations","readwrite",v=>{let R=qt(),P=te();return l.os.getEntries(v,h).next(b=>{R=b,R.forEach((E,w)=>{w.isValidDocument()||(P=P.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(v,R)).next(b=>{f=b;const E=[];for(const w of a){const T=vO(w,f.get(w.key).overlayedDocument);T!=null&&E.push(new Ar(w.key,T,tR(T.value.mapValue),Re.exists(!0)))}return l.mutationQueue.addMutationBatch(v,c,E,a)}).next(b=>{m=b;const E=b.applyToLocalDocumentSet(f,P);return l.documentOverlayCache.saveOverlays(v,b.batchId,E)})}).then(()=>({batchId:m.batchId,changes:pR(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.xa[o.currentUser.toKey()];c||(c=new _e(ee)),c=c.insert(a,l),o.xa[o.currentUser.toKey()]=c}(r,i.batchId,n),await Pr(r,i.changes),await oa(r.remoteStore)}catch(i){const s=la(i,"Failed to persist write");n.reject(s)}}async function wA(t,e){const n=W(t);try{const r=await hV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?J(o.wa):i.removedDocuments.size>0&&(J(o.wa),o.wa=!1))}),await Pr(n,r,e)}catch(r){await Ti(r)}}function qI(t,e,n){const r=W(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const a=o.view.j_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=W(o);l.onlineState=a;let c=!1;l.queries.forEach((h,f)=>{for(const m of f.U_)m.j_(a)&&(c=!0)}),c&&E_(l)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KV(t,e,n){const r=W(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new _e(G.comparator);o=o.insert(s,we.newNoDocument(s,X.min()));const a=te().add(s),l=new _u(X.min(),new Map,new _e(ee),o,a);await wA(r,l),r.va=r.va.remove(s),r.Fa.delete(e),P_(r)}else await Uo(r.localStore,e,!1).then(()=>zo(r,e,n)).catch(Ti)}async function QV(t,e){const n=W(t),r=e.batch.batchId;try{const i=await cV(n.localStore,e);A_(n,r,null),R_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pr(n,i)}catch(i){await Ti(i)}}async function YV(t,e,n){const r=W(t);try{const i=await function(o,a){const l=W(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return l.mutationQueue.lookupMutationBatch(c,a).next(f=>(J(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(c,f))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>l.localDocuments.getDocuments(c,h))})}(r.localStore,e);A_(r,e,n),R_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pr(r,i)}catch(i){await Ti(i)}}async function JV(t,e){const n=W(t);Ai(n.remoteStore)||B("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=W(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>a.mutationQueue.getHighestUnacknowledgedBatchId(l))}(n.localStore);if(r===-1)return void e.resolve();const i=n.Oa.get(r)||[];i.push(e),n.Oa.set(r,i)}catch(r){const i=la(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function R_(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function A_(t,e,n){const r=W(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function zo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||IA(t,r)})}function IA(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(jo(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),P_(t))}function Pm(t,e,n){for(const r of n)r instanceof gA?(t.Ma.addReference(r.key,e),XV(t,r)):r instanceof _A?(B("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||IA(t,r.key)):K()}function XV(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(B("SyncEngine","New document in limbo: "+n),t.Ca.add(r),P_(t))}function P_(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new G(se.fromString(e)),r=t.Na.next();t.Fa.set(r,new BV(n)),t.va=t.va.insert(n,r),yd(t.remoteStore,new lr(Ot(na(n.path)),r,"TargetPurposeLimboResolution",zt.oe))}}async function Pr(t,e,n){const r=W(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((a,l)=>{o.push(r.Ba(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient){const h=c&&!c.fromCache;r.sharedClientState.updateQueryState(l.targetId,h?"current":"not-current")}if(c){i.push(c);const h=f_.Ki(l.targetId,c);s.push(h)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(l,c){const h=W(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>O.forEach(c,m=>O.forEach(m.qi,v=>h.persistence.referenceDelegate.addReference(f,m.targetId,v)).next(()=>O.forEach(m.Qi,v=>h.persistence.referenceDelegate.removeReference(f,m.targetId,v)))))}catch(f){if(!Si(f))throw f;B("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const v=h.ns.get(m),R=v.snapshotVersion,P=v.withLastLimboFreeSnapshotVersion(R);h.ns=h.ns.insert(m,P)}}}(r.localStore,s))}async function ZV(t,e){const n=W(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await tA(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(a=>{a.forEach(l=>{l.reject(new j(V.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pr(n,r.us)}}function eL(t,e){const n=W(t),r=n.Fa.get(e);if(r&&r.wa)return te().add(r.key);{let i=te();const s=n.Da.get(e);if(!s)return i;for(const o of s){const a=n.ba.get(o);i=i.unionWith(a.view.Ea)}return i}}async function tL(t,e){const n=W(t),r=await xh(n.localStore,e.query,!0),i=e.view.pa(r);return n.isPrimaryClient&&Pm(n,e.targetId,i.fa),i}async function nL(t,e){const n=W(t);return sA(n.localStore,e).then(r=>Pr(n,r))}async function rL(t,e,n,r){const i=W(t),s=await function(a,l){const c=W(a),h=W(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>h.vn(f,l).next(m=>m?c.localDocuments.getDocuments(f,m):O.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await oa(i.remoteStore):n==="acknowledged"||n==="rejected"?(A_(i,e,r||null),R_(i,e),function(a,l){W(W(a).mutationQueue).Mn(l)}(i.localStore,e)):K(),await Pr(i,s)):B("SyncEngine","Cannot apply mutation batch with id: "+e)}async function iL(t,e){const n=W(t);if(vd(n),C_(n),e===!0&&n.La!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await GI(n,r.toArray());n.La=!0,await Rm(n.remoteStore,!0);for(const s of i)yd(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const r=[];let i=Promise.resolve();n.Da.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(zo(n,o),Uo(n.localStore,o,!0))),jo(n.remoteStore,o)}),await i,await GI(n,r),function(o){const a=W(o);a.Fa.forEach((l,c)=>{jo(a.remoteStore,c)}),a.Ma.mr(),a.Fa=new Map,a.va=new _e(G.comparator)}(n),n.La=!1,await Rm(n.remoteStore,!1)}}async function GI(t,e,n){const r=W(t),i=[],s=[];for(const o of e){let a;const l=r.Da.get(o);if(l&&l.length!==0){a=await Fo(r.localStore,Ot(l[0]));for(const c of l){const h=r.ba.get(c),f=await tL(r,h);f.snapshot&&s.push(f.snapshot)}}else{const c=await iA(r.localStore,o);a=await Fo(r.localStore,c),await S_(r,EA(c),o,!1,a.resumeToken)}i.push(a)}return r.Sa.h_(s),i}function EA(t){return uR(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function sL(t){return function(n){return W(W(n).persistence).Bi()}(W(t).localStore)}async function oL(t,e,n,r){const i=W(t);if(i.La)return void B("SyncEngine","Ignoring unexpected query state notification.");const s=i.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const o=await sA(i.localStore,hR(s[0])),a=_u.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Ze.EMPTY_BYTE_STRING);await Pr(i,o,a);break}case"rejected":await Uo(i.localStore,e,!0),zo(i,e,r);break;default:K()}}async function aL(t,e,n){const r=vd(t);if(r.La){for(const i of e){if(r.Da.has(i)&&r.sharedClientState.isActiveQueryTarget(i)){B("SyncEngine","Adding an already active target "+i);continue}const s=await iA(r.localStore,i),o=await Fo(r.localStore,s);await S_(r,EA(s),o.targetId,!1,o.resumeToken),yd(r.remoteStore,o)}for(const i of n)r.Da.has(i)&&await Uo(r.localStore,i,!1).then(()=>{jo(r.remoteStore,i),zo(r,i)}).catch(Ti)}}function vd(t){const e=W(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=wA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KV.bind(null,e),e.Sa.h_=LV.bind(null,e.eventManager),e.Sa.ka=MV.bind(null,e.eventManager),e}function C_(t){const e=W(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YV.bind(null,e),e}function lL(t,e,n){const r=W(t);(async function(s,o,a){try{const l=await o.getMetadata();if(await function(v,R){const P=W(v),b=We(R.createTime);return P.persistence.runTransaction("hasNewerBundle","readonly",E=>P.$r.getBundleMetadata(E,R.id)).then(E=>!!E&&E.createTime.compareTo(b)>=0)}(s.localStore,l))return await o.close(),a._completeWith(function(v){return{taskState:"Success",documentsLoaded:v.totalDocuments,bytesLoaded:v.totalBytes,totalDocuments:v.totalDocuments,totalBytes:v.totalBytes}}(l)),Promise.resolve(new Set);a._updateProgress(mA(l));const c=new UV(l,s.localStore,o.serializer);let h=await o.qa();for(;h;){const m=await c._a(h);m&&a._updateProgress(m),h=await o.qa()}const f=await c.complete();return await Pr(s,f.ca,void 0),await function(v,R){const P=W(v);return P.persistence.runTransaction("Save bundle","readwrite",b=>P.$r.saveBundleMetadata(b,R))}(s.localStore,l),a._completeWith(f.progress),Promise.resolve(f.ua)}catch(l){return Cn("SyncEngine",`Loading bundle failed with ${l}`),a._failWith(l),Promise.resolve(new Set)}})(r,e,n).then(i=>{r.sharedClientState.notifyBundleLoaded(i)})}class Cm{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return eA(this.persistence,new ZR,e.initialUser,this.serializer)}createPersistence(e){return new XR(_d.Hr,this.serializer)}createSharedClientState(e){return new aA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class TA extends Cm{constructor(e,n,r){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await C_(this.Qa.syncEngine),await oa(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return eA(this.persistence,new ZR,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new HO(r,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const r=new bD(n,this.persistence);return new kD(e.asyncQueue,r)}createPersistence(e){const n=d_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ft.withCacheSize(this.cacheSizeBytes):Ft.DEFAULT;return new h_(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,lA(),Bc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new aA}}class uL extends TA{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Xf&&(this.sharedClientState.syncEngine={Zs:rL.bind(null,n),Xs:oL.bind(null,n),eo:aL.bind(null,n),Bi:sL.bind(null,n),Ys:nL.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async r=>{await iL(this.Qa.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=lA();if(!Xf.D(n))throw new j(V.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=d_(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Xf(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class k_{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>qI(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZV.bind(null,this.syncEngine),await Rm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VV}()}createDatastore(e){const n=vu(e.databaseInfo.databaseId),r=function(s){return new yV(s)}(e.databaseInfo);return function(s,o,a,l){return new IV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new TV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>qI(this.syncEngine,n,0),function(){return UI.D()?new UI:new mV}())}createSyncEngine(e,n){return function(i,s,o,a,l,c,h){const f=new zV(i,s,o,a,l,c);return h&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=W(r);B("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await sa(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function WI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class wd{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Ge("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class cL{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new it,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(r=>{r&&r.sa()?this.metadata.resolve(r.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.ia)}`))},r=>this.metadata.reject(r))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),r=Number(n);isNaN(r)&&this.ja(`length string (${n}) is not valid number`);const i=await this.Ha(r);return new FV(JSON.parse(i),e.length+r)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class hL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new j(V.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(i,s){const o=W(i),a={documents:s.map(f=>Jl(o.serializer,f))},l=await o.xo("BatchGetDocuments",o.serializer.databaseId,se.emptyPath(),a,s.length),c=new Map;l.forEach(f=>{const m=CO(o.serializer,f);c.set(m.key.toString(),m)});const h=[];return s.forEach(f=>{const m=c.get(f.toString());J(!!m),h.push(m)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new ia(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=G.fromPath(r);this.mutations.push(new t_(i,this.precondition(i)))}),await async function(r,i){const s=W(r),o={writes:i.map(a=>Xl(s.serializer,a))};await s.Co("Commit",s.serializer.databaseId,se.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw K();n=X.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new j(V.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(X.min())?Re.exists(!1):Re.updateTime(n):Re.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(X.min()))throw new j(V.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Re.updateTime(n)}return Re.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class dL{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Za=r.maxAttempts,this.Yo=new m_(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new hL(this.datastore),n=this.tu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.nu(i)}))}).catch(r=>{this.nu(r)})})}tu(e){try{const n=this.updateFunction(e);return!du(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!RR(n)}return!1}}/**
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
 */class fL{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=nt.UNAUTHENTICATED,this.clientId=US.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(V.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new it;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=la(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function zc(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await tA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function km(t,e){t.asyncQueue.verifyOperationInProgress();const n=await b_(t);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>jI(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>jI(e.remoteStore,i)),t._onlineComponents=e}function SA(t){return t.name==="FirebaseError"?t.code===V.FAILED_PRECONDITION||t.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function b_(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await zc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!SA(n))throw n;Cn("Error using user provided cache. Falling back to memory cache: "+n),await zc(t,new Cm)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await zc(t,new Cm);return t._offlineComponents}async function Id(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await km(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await km(t,new k_))),t._onlineComponents}function RA(t){return b_(t).then(e=>e.persistence)}function x_(t){return b_(t).then(e=>e.localStore)}function AA(t){return Id(t).then(e=>e.remoteStore)}function N_(t){return Id(t).then(e=>e.syncEngine)}function pL(t){return Id(t).then(e=>e.datastore)}async function $o(t){const e=await Id(t),n=e.eventManager;return n.onListen=$V.bind(null,e.syncEngine),n.onUnlisten=GV.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qV.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WV.bind(null,e.syncEngine),n}function mL(t){return t.asyncQueue.enqueue(async()=>{const e=await RA(t),n=await AA(t);return e.setNetworkEnabled(!0),function(i){const s=W(i);return s.M_.delete(0),wu(s)}(n)})}function gL(t){return t.asyncQueue.enqueue(async()=>{const e=await RA(t),n=await AA(t);return e.setNetworkEnabled(!1),async function(i){const s=W(i);s.M_.add(0),await sa(s),s.N_.set("Offline")}(n)})}function _L(t,e){const n=new it;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await function(c,h){const f=W(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,h))}(i,s);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new j(V.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const l=la(a,`Failed to get document '${s} from cache`);o.reject(l)}}(await x_(t),e,n)),n.promise}function PA(t,e,n={}){const r=new it;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new wd({next:m=>{o.enqueueAndForget(()=>I_(s,f));const v=m.docs.has(a);!v&&m.fromCache?c.reject(new j(V.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&l&&l.source==="server"?c.reject(new j(V.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new T_(na(a.path),h,{includeMetadataChanges:!0,ra:!0});return w_(s,f)}(await $o(t),t.asyncQueue,e,n,r)),r.promise}function yL(t,e){const n=new it;return t.asyncQueue.enqueueAndForget(async()=>async function(i,s,o){try{const a=await xh(i,s,!0),l=new yA(s,a.hs),c=l.da(a.documents),h=l.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const l=la(a,`Failed to execute query '${s} against cache`);o.reject(l)}}(await x_(t),e,n)),n.promise}function CA(t,e,n={}){const r=new it;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,c){const h=new wd({next:m=>{o.enqueueAndForget(()=>I_(s,f)),m.fromCache&&l.source==="server"?c.reject(new j(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new T_(a,h,{includeMetadataChanges:!0,ra:!0});return w_(s,f)}(await $o(t),t.asyncQueue,e,n,r)),r.promise}function vL(t,e){const n=new wd(e);return t.asyncQueue.enqueueAndForget(async()=>function(i,s){W(i).z_.add(s),s.next()}(await $o(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(i,s){W(i).z_.delete(s)}(await $o(t),n))}}function wL(t,e,n,r){const i=function(o,a){let l;return l=typeof o=="string"?PR().encode(o):o,function(h,f){return new cL(h,f)}(function(h,f){if(h instanceof Uint8Array)return WI(h,f);if(h instanceof ArrayBuffer)return WI(new Uint8Array(h),f);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),a)}(n,vu(e));t.asyncQueue.enqueueAndForget(async()=>{lL(await N_(t),i,r)})}function IL(t,e){return t.asyncQueue.enqueue(async()=>function(r,i){const s=W(r);return s.persistence.runTransaction("Get named query","readonly",o=>s.$r.getNamedQuery(o,i))}(await x_(t),e))}/**
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
 */function kA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const HI=new Map;/**
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
 */function D_(t,e,n){if(!n)throw new j(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bA(t,e,n,r){if(e===!0&&r===!0)throw new j(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function KI(t){if(!G.isDocumentKey(t))throw new j(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function QI(t){if(G.isDocumentKey(t))throw new j(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ed(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function ue(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new j(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ed(t);throw new j(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function xA(t,e){if(e<=0)throw new j(V.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class YI{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(V.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new YI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new YI(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new yD;switch(r.type){case"firstParty":return new ED(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=HI.get(n);r&&(B("ComponentProvider","Removing Datastore"),HI.delete(n),r.terminate())}(this),Promise.resolve()}}function NA(t,e,n,r={}){var i;const s=(t=ue(t,Iu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Cn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=nt.MOCK_USER;else{a=pS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new j(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new nt(c)}t._authCredentials=new vD(new FS(a,l))}}/**
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
 */let Vt=class DA{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new DA(this.firestore,e,this._query)}},xe=class OA{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new OA(this.firestore,e,this._key)}},si=class VA extends Vt{constructor(e,n,r){super(e,n,na(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xe(this.firestore,null,new G(e))}withConverter(e){return new VA(this.firestore,e,this._path)}};function gl(t,e,...n){if(t=Y(t),D_("collection","path",e),t instanceof Iu){const r=se.fromString(e,...n);return QI(r),new si(t,null,r)}{if(!(t instanceof xe||t instanceof si))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return QI(r),new si(t.firestore,null,r)}}function EL(t,e){if(t=ue(t,Iu),D_("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new j(V.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Vt(t,null,function(r){return new Rr(se.emptyPath(),r)}(e))}function Vh(t,e,...n){if(t=Y(t),arguments.length===1&&(e=US.newId()),D_("doc","path",e),t instanceof Iu){const r=se.fromString(e,...n);return KI(r),new xe(t,null,new G(r))}{if(!(t instanceof xe||t instanceof si))throw new j(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return KI(r),new xe(t.firestore,t instanceof si?t.converter:null,new G(r))}}function LA(t,e){return t=Y(t),e=Y(e),(t instanceof xe||t instanceof si)&&(e instanceof xe||e instanceof si)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function MA(t,e){return t=Y(t),e=Y(e),t instanceof Vt&&e instanceof Vt&&t.firestore===e.firestore&&pu(t._query,e._query)&&t.converter===e.converter}/**
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
 */class TL{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new m_(this,"async_queue_retry"),this.hu=()=>{const n=Bc();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Bc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new it;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Si(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Ge("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=v_.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&K()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function bm(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class SL{constructor(){this._progressObserver={},this._taskCompletionResolver=new it,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const RL=-1;let Ue=class extends Iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new TL}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||FA(this),this._firestoreClient.terminate()}};function AL(t,e){const n=typeof t=="object"?t:cd(),r=typeof t=="string"?t:"(default)",i=ea(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hS("firestore");s&&NA(i,...s)}return i}function lt(t){return t._firestoreClient||FA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function FA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,c,h){return new JD(a,l,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,kA(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new fL(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}function PL(t,e){jA(t=ue(t,Ue));const n=lt(t);if(n._uninitializedComponentsProvider)throw new j(V.FAILED_PRECONDITION,"SDK cache is already specified.");Cn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=t._freezeSettings(),i=new k_;return UA(n,i,new TA(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function CL(t){jA(t=ue(t,Ue));const e=lt(t);if(e._uninitializedComponentsProvider)throw new j(V.FAILED_PRECONDITION,"SDK cache is already specified.");Cn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),r=new k_;return UA(e,r,new uL(r,n.cacheSizeBytes))}function UA(t,e,n){const r=new it;return t.asyncQueue.enqueue(async()=>{try{await zc(t,n),await km(t,e),r.resolve()}catch(i){const s=i;if(!SA(s))throw s;Cn("Error enabling indexeddb cache. Falling back to memory cache: "+s),r.reject(s)}}).then(()=>r.promise)}function kL(t){if(t._initialized&&!t._terminated)throw new j(V.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new it;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!$n.D())return Promise.resolve();const i=r+"main";await $n.delete(i)}(d_(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function bL(t){return function(n){const r=new it;return n.asyncQueue.enqueueAndForget(async()=>JV(await N_(n),r)),r.promise}(lt(t=ue(t,Ue)))}function xL(t){return mL(lt(t=ue(t,Ue)))}function NL(t){return gL(lt(t=ue(t,Ue)))}function DL(t,e){const n=lt(t=ue(t,Ue)),r=new SL;return wL(n,t._databaseId,e,r),r}function OL(t,e){return IL(lt(t=ue(t,Ue)),e).then(n=>n?new Vt(t,null,n.query):null)}function jA(t){if(t._initialized||t._terminated)throw new j(V.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Ze.fromBase64String(e))}catch(n){throw new j(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hn(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let gi=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new j(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */class Td{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new j(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new j(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
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
 */const VL=/^__.*__$/;class LL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new ra(e,this.data,n,this.fieldTransforms)}}class BA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Sd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Sd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Lh(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(zA(this.fu)&&VL.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class ML{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||vu(e)}Fu(e,n,r,i=!1){return new Sd({fu:e,methodName:n,vu:r,path:Se.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ps(t){const e=t._freezeSettings(),n=vu(t._databaseId);return new ML(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Rd(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);j_("Data must be an object, but it was:",o,r);const a=GA(r,o);let l,c;if(s.merge)l=new $t(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const m=xm(e,f,n);if(!o.contains(m))throw new j(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);HA(h,m)||h.push(m)}l=new $t(h),c=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,c=o.fieldTransforms;return new LL(new dt(a),l,c)}class Eu extends As{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Eu}}function $A(t,e,n){return new Sd({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class O_ extends As{_toFieldTransform(e){return new gu(e.path,new Vo)}isEqual(e){return e instanceof O_}}class V_ extends As{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=$A(this,e,!0),r=this.Mu.map(s=>Cs(s,n)),i=new ds(r);return new gu(e.path,i)}isEqual(e){return e instanceof V_&&ko(this.Mu,e.Mu)}}class L_ extends As{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=$A(this,e,!0),r=this.Mu.map(s=>Cs(s,n)),i=new fs(r);return new gu(e.path,i)}isEqual(e){return e instanceof L_&&ko(this.Mu,e.Mu)}}class M_ extends As{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new Lo(e.serializer,yR(e.serializer,this.xu));return new gu(e.path,n)}isEqual(e){return e instanceof M_&&this.xu===e.xu}}function F_(t,e,n,r){const i=t.Fu(1,e,n);j_("Data must be an object, but it was:",i,r);const s=[],o=dt.empty();Rs(r,(l,c)=>{const h=B_(e,l,n);c=Y(c);const f=i.Su(h);if(c instanceof Eu)s.push(h);else{const m=Cs(c,f);m!=null&&(s.push(h),o.set(h,m))}});const a=new $t(s);return new BA(o,a,i.fieldTransforms)}function U_(t,e,n,r,i,s){const o=t.Fu(1,e,n),a=[xm(e,r,n)],l=[i];if(s.length%2!=0)throw new j(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)a.push(xm(e,s[m])),l.push(s[m+1]);const c=[],h=dt.empty();for(let m=a.length-1;m>=0;--m)if(!HA(c,a[m])){const v=a[m];let R=l[m];R=Y(R);const P=o.Su(v);if(R instanceof Eu)c.push(v);else{const b=Cs(R,P);b!=null&&(c.push(v),h.set(v,b))}}const f=new $t(c);return new BA(h,f,o.fieldTransforms)}function qA(t,e,n,r=!1){return Cs(n,t.Fu(r?4:3,e))}function Cs(t,e){if(WA(t=Y(t)))return j_("Unsupported field value:",e,t),GA(t,e);if(t instanceof As)return function(r,i){if(!zA(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Cs(a,i.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Y(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yR(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Ae.fromDate(r);return{timestampValue:Mo(i.serializer,s)}}if(r instanceof Ae){const s=new Ae(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Mo(i.serializer,s)}}if(r instanceof Td)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hn)return{bytesValue:bR(i.serializer,r._byteString)};if(r instanceof xe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:o_(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${Ed(r)}`)}(t,e)}function GA(t,e){const n={};return XS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Rs(t,(r,i)=>{const s=Cs(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function WA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ae||t instanceof Td||t instanceof Hn||t instanceof xe||t instanceof As)}function j_(t,e,n){if(!WA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ed(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function xm(t,e,n){if((e=Y(e))instanceof gi)return e._internalPath;if(typeof e=="string")return B_(t,e);throw Lh("Field path arguments must be of type string or ",t,!1,void 0,n)}const FL=new RegExp("[~\\*/\\[\\]]");function B_(t,e,n){if(e.search(FL)>=0)throw Lh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new gi(...e.split("."))._internalPath}catch{throw Lh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Lh(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new j(V.INVALID_ARGUMENT,a+t+l)}function HA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Zl{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new UL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ad("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class UL extends Zl{data(){return super.data()}}function Ad(t,e){return typeof e=="string"?B_(t,e):e instanceof gi?e._internalPath:e._delegate._internalPath}/**
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
 */function KA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new j(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class z_{}class Tu extends z_{}function rr(t,e,...n){let r=[];e instanceof z_&&r.push(e),r=r.concat(n),function(s){const o=s.filter(l=>l instanceof $_).length,a=s.filter(l=>l instanceof Pd).length;if(o>1||o>0&&a>0)throw new j(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Pd extends Tu{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pd(e,n,r)}_apply(e){const n=this._parse(e);return YA(e._query,n),new Vt(e.firestore,e.converter,gm(e._query,n))}_parse(e){const n=Ps(e.firestore);return function(s,o,a,l,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new j(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){XI(f,h);const v=[];for(const R of f)v.push(JI(l,s,R));m={arrayValue:{values:v}}}else m=JI(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||XI(f,h),m=qA(a,o,f,h==="in"||h==="not-in");return oe.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Nm(t,e,n){const r=e,i=Ad("where",t);return Pd._create(i,r,n)}class $_ extends z_{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new $_(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:he.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const l of a)YA(o,l),o=gm(o,l)}(e._query,n),new Vt(e.firestore,e.converter,gm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class q_ extends Tu{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new q_(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new j(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new j(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yl(s,o)}(e._query,this._field,this._direction);return new Vt(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Rr(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function jL(t,e="asc"){const n=e,r=Ad("orderBy",t);return q_._create(r,n)}class Cd extends Tu{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Cd(e,n,r)}_apply(e){return new Vt(e.firestore,e.converter,Ph(e._query,this._limit,this._limitType))}}function BL(t){return xA("limit",t),Cd._create("limit",t,"F")}function zL(t){return xA("limitToLast",t),Cd._create("limitToLast",t,"L")}class kd extends Tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new kd(e,n,r)}_apply(e){const n=QA(e,this.type,this._docOrFields,this._inclusive);return new Vt(e.firestore,e.converter,function(i,s){return new Rr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,s,i.endAt)}(e._query,n))}}function $L(...t){return kd._create("startAt",t,!0)}function qL(...t){return kd._create("startAfter",t,!1)}class bd extends Tu{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new bd(e,n,r)}_apply(e){const n=QA(e,this.type,this._docOrFields,this._inclusive);return new Vt(e.firestore,e.converter,function(i,s){return new Rr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),i.limit,i.limitType,i.startAt,s)}(e._query,n))}}function GL(...t){return bd._create("endBefore",t,!1)}function WL(...t){return bd._create("endAt",t,!0)}function QA(t,e,n,r){if(n[0]=Y(n[0]),n[0]instanceof Zl)return function(s,o,a,l,c){if(!l)throw new j(V.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of po(s))if(f.field.isKeyField())h.push(cs(o,l.key));else{const m=l.data.field(f.field);if(dd(m))throw new j(V.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const v=f.field.canonicalString();throw new j(V.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${v}' (used as the orderBy) does not exist.`)}h.push(m)}return new pi(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Ps(t.firestore);return function(o,a,l,c,h,f){const m=o.explicitOrderBy;if(h.length>m.length)throw new j(V.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const v=[];for(let R=0;R<h.length;R++){const P=h[R];if(m[R].field.isKeyField()){if(typeof P!="string")throw new j(V.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof P}`);if(!Zg(o)&&P.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${P}' contains a slash.`);const b=o.path.child(se.fromString(P));if(!G.isDocumentKey(b))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const E=new G(b);v.push(cs(a,E))}else{const b=qA(l,c,P);v.push(b)}}return new pi(v,f)}(t._query,t.firestore._databaseId,i,e,n,r)}}function JI(t,e,n){if(typeof(n=Y(n))=="string"){if(n==="")throw new j(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zg(e)&&n.indexOf("/")!==-1)throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(se.fromString(n));if(!G.isDocumentKey(r))throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return cs(t,new G(r))}if(n instanceof xe)return cs(t,n._key);throw new j(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ed(n)}.`)}function XI(t,e){if(!Array.isArray(t)||t.length===0)throw new j(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function YA(t,e){const n=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new j(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class G_{convertValue(e,n="none"){switch(us(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(hi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Rs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Td(Le(e.latitude),Le(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Jg(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Hl(e));default:return null}}convertTimestamp(e){const n=wr(e);return new Ae(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);J(BR(r));const i=new di(r.get(1),r.get(3)),s=new G(r.popFirst(5));return i.isEqual(n)||Ge(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function xd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class HL extends G_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}/**
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
 */class Ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Ir=class extends Zl{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new _l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ad("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}},_l=class extends Ir{data(e={}){return super.data(e)}},_i=class{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ki(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new _l(this._firestore,this._userDataWriter,r.key,r,new Ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new j(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new _l(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ki(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new _l(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Ki(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:KL(a.type),doc:l,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function KL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}function JA(t,e){return t instanceof Ir&&e instanceof Ir?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof _i&&e instanceof _i&&t._firestore===e._firestore&&MA(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function QL(t){t=ue(t,xe);const e=ue(t.firestore,Ue);return PA(lt(e),t._key).then(n=>W_(e,t,n))}class ks extends G_{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function YL(t){t=ue(t,xe);const e=ue(t.firestore,Ue),n=lt(e),r=new ks(e);return _L(n,t._key).then(i=>new Ir(e,r,t._key,i,new Ki(i!==null&&i.hasLocalMutations,!0),t.converter))}function JL(t){t=ue(t,xe);const e=ue(t.firestore,Ue);return PA(lt(e),t._key,{source:"server"}).then(n=>W_(e,t,n))}function XA(t){t=ue(t,Vt);const e=ue(t.firestore,Ue),n=lt(e),r=new ks(e);return KA(t._query),CA(n,t._query).then(i=>new _i(e,r,t,i))}function XL(t){t=ue(t,Vt);const e=ue(t.firestore,Ue),n=lt(e),r=new ks(e);return yL(n,t._query).then(i=>new _i(e,r,t,i))}function ZL(t){t=ue(t,Vt);const e=ue(t.firestore,Ue),n=lt(e),r=new ks(e);return CA(n,t._query,{source:"server"}).then(i=>new _i(e,r,t,i))}function ZI(t,e,n){t=ue(t,xe);const r=ue(t.firestore,Ue),i=xd(t.converter,e,n);return Su(r,[Rd(Ps(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Re.none())])}function eE(t,e,n,...r){t=ue(t,xe);const i=ue(t.firestore,Ue),s=Ps(i);let o;return o=typeof(e=Y(e))=="string"||e instanceof gi?U_(s,"updateDoc",t._key,e,n,r):F_(s,"updateDoc",t._key,e),Su(i,[o.toMutation(t._key,Re.exists(!0))])}function eM(t){return Su(ue(t.firestore,Ue),[new ia(t._key,Re.none())])}function Dm(t,e){const n=ue(t.firestore,Ue),r=Vh(t),i=xd(t.converter,e);return Su(n,[Rd(Ps(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Re.exists(!1))]).then(()=>r)}function ZA(t,...e){var n,r,i;t=Y(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||bm(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(bm(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(i=f.complete)===null||i===void 0?void 0:i.bind(f)}let l,c,h;if(t instanceof xe)c=ue(t.firestore,Ue),h=na(t._key.path),l={next:f=>{e[o]&&e[o](W_(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ue(t,Vt);c=ue(f.firestore,Ue),h=f._query;const m=new ks(c);l={next:v=>{e[o]&&e[o](new _i(c,m,f,v))},error:e[o+1],complete:e[o+2]},KA(t._query)}return function(m,v,R,P){const b=new wd(P),E=new T_(v,b,R);return m.asyncQueue.enqueueAndForget(async()=>w_(await $o(m),E)),()=>{b.$a(),m.asyncQueue.enqueueAndForget(async()=>I_(await $o(m),E))}}(lt(c),h,a,l)}function tM(t,e){return vL(lt(t=ue(t,Ue)),bm(e)?e:{next:e})}function Su(t,e){return function(r,i){const s=new it;return r.asyncQueue.enqueueAndForget(async()=>HV(await N_(r),i,s)),s.promise}(lt(t),e)}function W_(t,e,n){const r=n.docs.get(e._key),i=new ks(t);return new Ir(t,i,e._key,r,new Ki(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const nM={maxAttempts:5};/**
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
 */let rM=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ps(e)}set(e,n,r){this._verifyNotCommitted();const i=$r(e,this._firestore),s=xd(i.converter,n,r),o=Rd(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,Re.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=$r(e,this._firestore);let o;return o=typeof(n=Y(n))=="string"||n instanceof gi?U_(this._dataReader,"WriteBatch.update",s._key,n,r,i):F_(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,Re.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=$r(e,this._firestore);return this._mutations=this._mutations.concat(new ia(n._key,Re.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new j(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function $r(t,e){if((t=Y(t)).firestore!==e)throw new j(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let iM=class extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Ps(n)}get(n){const r=$r(n,this._firestore),i=new HL(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return K();const o=s[0];if(o.isFoundDocument())return new Zl(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Zl(this._firestore,i,r._key,null,r.converter);throw K()})}set(n,r,i){const s=$r(n,this._firestore),o=xd(s.converter,r,i),a=Rd(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(n,r,i,...s){const o=$r(n,this._firestore);let a;return a=typeof(r=Y(r))=="string"||r instanceof gi?U_(this._dataReader,"Transaction.update",o._key,r,i,s):F_(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=$r(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=$r(e,this._firestore),r=new ks(this._firestore);return super.get(e).then(i=>new Ir(this._firestore,r,n._key,i._document,new Ki(!1,!1),n.converter))}};function sM(t,e,n){t=ue(t,Ue);const r=Object.assign(Object.assign({},nM),n);return function(s){if(s.maxAttempts<1)throw new j(V.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const l=new it;return s.asyncQueue.enqueueAndForget(async()=>{const c=await pL(s);new dL(s.asyncQueue,c,a,o,l).Xa()}),l.promise}(lt(t),i=>e(new iM(t,i)),r)}/**
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
 */function oM(){return new Eu("deleteField")}function aM(){return new O_("serverTimestamp")}function lM(...t){return new V_("arrayUnion",t)}function uM(...t){return new L_("arrayRemove",t)}function cM(t){return new M_("increment",t)}(function(e,n=!0){(function(i){ta=i})(Sr),vr(new gn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Ue(new wD(r.getProvider("auth-internal")),new SD(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new j(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new di(c.options.projectId,h)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),en(Hw,"4.6.3",e),en(Hw,"4.6.3","esm2017")})();/**
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
 */const eP="firebasestorage.googleapis.com",tP="storageBucket",hM=2*60*1e3,dM=10*60*1e3,fM=1e3;/**
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
 */class De extends Tt{constructor(e,n,r=0){super(ep(e),`Firebase Storage: ${n} (${ep(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return ep(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ee;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ee||(Ee={}));function ep(t){return"storage/"+t}function H_(){const t="An unknown error occurred, please check the error payload for server response.";return new De(Ee.UNKNOWN,t)}function pM(t){return new De(Ee.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function mM(t){return new De(Ee.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function gM(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(Ee.UNAUTHENTICATED,t)}function _M(){return new De(Ee.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yM(t){return new De(Ee.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function nP(){return new De(Ee.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function rP(){return new De(Ee.CANCELED,"User canceled the upload/download.")}function vM(t){return new De(Ee.INVALID_URL,"Invalid URL '"+t+"'.")}function wM(t){return new De(Ee.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function IM(){return new De(Ee.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+tP+"' property when initializing the app?")}function iP(){return new De(Ee.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function EM(){return new De(Ee.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function TM(){return new De(Ee.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function SM(t){return new De(Ee.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function go(t){return new De(Ee.INVALID_ARGUMENT,t)}function sP(){return new De(Ee.APP_DELETED,"The Firebase app was deleted.")}function oP(t){return new De(Ee.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function yl(t,e){return new De(Ee.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function za(t){throw new De(Ee.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Et.makeFromUrl(e,n)}catch{return new Et(e,"")}if(r.path==="")return r;throw wM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${f}/${h}/b/${i}/o${m}`,"i"),R={bucket:1,path:3},P=n===eP?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",E=new RegExp(`^https?://${P}/${i}/${b}`,"i"),T=[{regex:a,indices:l,postModify:s},{regex:v,indices:R,postModify:c},{regex:E,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<T.length;x++){const F=T[x],M=F.regex.exec(e);if(M){const A=M[F.indices.bucket];let _=M[F.indices.path];_||(_=""),r=new Et(A,_),F.postModify(r);break}}if(r==null)throw vM(e);return r}}class RM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function AM(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function h(...b){c||(c=!0,e.apply(null,b))}function f(b){i=setTimeout(()=>{i=null,t(v,l())},b)}function m(){s&&clearTimeout(s)}function v(b,...E){if(c){m();return}if(b){m(),h.call(null,b,...E);return}if(l()||o){m(),h.call(null,b,...E);return}r<64&&(r*=2);let T;a===1?(a=2,T=0):T=(r+Math.random())*1e3,f(T)}let R=!1;function P(b){R||(R=!0,m(),!c&&(i!==null?(b||(a=2),clearTimeout(i),f(0)):b||(a=1)))}return f(0),s=setTimeout(()=>{o=!0,P(!0)},n),P}function PM(t){t(!1)}/**
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
 */function CM(t){return t!==void 0}function kM(t){return typeof t=="function"}function bM(t){return typeof t=="object"&&!Array.isArray(t)}function Nd(t){return typeof t=="string"||t instanceof String}function tE(t){return K_()&&t instanceof Blob}function K_(){return typeof Blob<"u"}function Om(t,e,n,r){if(r<e)throw go(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw go(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Pi(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function aP(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
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
 */function lP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class xM{constructor(e,n,r,i,s,o,a,l,c,h,f,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=h,this.connectionFactory_=f,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,R)=>{this.resolve_=v,this.reject_=R,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new yc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===es.NO_ERROR,l=s.getStatus();if(!a||lP(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===es.ABORT;r(!1,new yc(!1,null,h));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new yc(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());CM(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=H_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?sP():rP();o(l)}else{const l=nP();o(l)}};this.canceled_?n(!1,new yc(!1,null,!0)):this.backoffId_=AM(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PM(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class yc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function NM(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function DM(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function OM(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VM(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function LM(t,e,n,r,i,s,o=!0){const a=aP(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return OM(c,e),NM(c,n),DM(c,s),VM(c,r),new xM(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function MM(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function FM(...t){const e=MM();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(K_())return new Blob(t);throw new De(Ee.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function UM(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function jM(t){if(typeof atob>"u")throw SM("base-64");return atob(t)}/**
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
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class tp{constructor(e,n){this.data=e,this.contentType=n||null}}function uP(t,e){switch(t){case cn.RAW:return new tp(cP(e));case cn.BASE64:case cn.BASE64URL:return new tp(hP(t,e));case cn.DATA_URL:return new tp(zM(e),$M(e))}throw H_()}function cP(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function BM(t){let e;try{e=decodeURIComponent(t)}catch{throw yl(cn.DATA_URL,"Malformed data URL.")}return cP(e)}function hP(t,e){switch(t){case cn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw yl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw yl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=jM(e)}catch(i){throw i.message.includes("polyfill")?i:yl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class dP{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw yl(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=qM(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function zM(t){const e=new dP(t);return e.base64?hP(cn.BASE64,e.rest):BM(e.rest)}function $M(t){return new dP(t).contentType}function qM(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Dn{constructor(e,n){let r=0,i="";tE(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(tE(this.data_)){const r=this.data_,i=UM(r,e,n);return i===null?null:new Dn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Dn(r,!0)}}static getBlob(...e){if(K_()){const n=e.map(r=>r instanceof Dn?r.data_:r);return new Dn(FM.apply(null,n))}else{const n=e.map(o=>Nd(o)?uP(cn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Dn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Q_(t){let e;try{e=JSON.parse(t)}catch{return null}return bM(e)?e:null}/**
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
 */function GM(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function WM(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function fP(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function HM(t,e){return e}class Pt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||HM}}let vc=null;function KM(t){return!Nd(t)||t.length<2?t:fP(t)}function Ru(){if(vc)return vc;const t=[];t.push(new Pt("bucket")),t.push(new Pt("generation")),t.push(new Pt("metageneration")),t.push(new Pt("name","fullPath",!0));function e(s,o){return KM(o)}const n=new Pt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Pt("size");return i.xform=r,t.push(i),t.push(new Pt("timeCreated")),t.push(new Pt("updated")),t.push(new Pt("md5Hash",null,!0)),t.push(new Pt("cacheControl",null,!0)),t.push(new Pt("contentDisposition",null,!0)),t.push(new Pt("contentEncoding",null,!0)),t.push(new Pt("contentLanguage",null,!0)),t.push(new Pt("contentType",null,!0)),t.push(new Pt("metadata","customMetadata",!0)),vc=t,vc}function QM(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Et(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function YM(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return QM(r,t),r}function pP(t,e,n){const r=Q_(e);return r===null?null:YM(t,r,n)}function JM(t,e,n,r){const i=Q_(e);if(i===null||!Nd(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const h=t.bucket,f=t.fullPath,m="/b/"+o(h)+"/o/"+o(f),v=Pi(m,n,r),R=aP({alt:"media",token:c});return v+R})[0]}function Y_(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}/**
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
 */const nE="prefixes",rE="items";function XM(t,e,n){const r={prefixes:[],items:[],nextPageToken:n.nextPageToken};if(n[nE])for(const i of n[nE]){const s=i.replace(/\/$/,""),o=t._makeStorageReference(new Et(e,s));r.prefixes.push(o)}if(n[rE])for(const i of n[rE]){const s=t._makeStorageReference(new Et(e,i.name));r.items.push(s)}return r}function ZM(t,e,n){const r=Q_(n);return r===null?null:XM(t,e,r)}class Cr{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Gn(t){if(!t)throw H_()}function Dd(t,e){function n(r,i){const s=pP(t,i,e);return Gn(s!==null),s}return n}function eF(t,e){function n(r,i){const s=ZM(t,e,i);return Gn(s!==null),s}return n}function tF(t,e){function n(r,i){const s=pP(t,i,e);return Gn(s!==null),JM(s,i,t.host,t._protocol)}return n}function ua(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=_M():i=gM():n.getStatus()===402?i=mM(t.bucket):n.getStatus()===403?i=yM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Od(t){const e=ua(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=pM(t.path)),s.serverResponse=i.serverResponse,s}return n}function mP(t,e,n){const r=e.fullServerUrl(),i=Pi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Cr(i,s,Dd(t,n),o);return a.errorHandler=Od(e),a}function nF(t,e,n,r,i){const s={};e.isRoot?s.prefix="":s.prefix=e.path+"/",n.length>0&&(s.delimiter=n),r&&(s.pageToken=r),i&&(s.maxResults=i);const o=e.bucketOnlyServerUrl(),a=Pi(o,t.host,t._protocol),l="GET",c=t.maxOperationRetryTime,h=new Cr(a,l,eF(t,e.bucket),c);return h.urlParams=s,h.errorHandler=ua(e),h}function rF(t,e,n){const r=e.fullServerUrl(),i=Pi(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Cr(i,s,tF(t,n),o);return a.errorHandler=Od(e),a}function iF(t,e,n,r){const i=e.fullServerUrl(),s=Pi(i,t.host,t._protocol),o="PATCH",a=Y_(n,r),l={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime,h=new Cr(s,o,Dd(t,r),c);return h.headers=l,h.body=a,h.errorHandler=Od(e),h}function sF(t,e){const n=e.fullServerUrl(),r=Pi(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,c){}const a=new Cr(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=Od(e),a}function oF(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function gP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=oF(null,e)),r}function _P(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let T="";for(let x=0;x<2;x++)T=T+Math.random().toString().slice(2);return T}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=gP(e,r,i),h=Y_(c,n),f="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,m=`\r
--`+l+"--",v=Dn.getBlob(f,r,m);if(v===null)throw iP();const R={name:c.fullPath},P=Pi(s,t.host,t._protocol),b="POST",E=t.maxUploadRetryTime,w=new Cr(P,b,Dd(t,n),E);return w.urlParams=R,w.headers=o,w.body=v.uploadData(),w.errorHandler=ua(e),w}class Mh{constructor(e,n,r,i){this.current=e,this.total=n,this.finalized=!!r,this.metadata=i||null}}function J_(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Gn(!1)}return Gn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function aF(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o=gP(e,r,i),a={name:o.fullPath},l=Pi(s,t.host,t._protocol),c="POST",h={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},f=Y_(o,n),m=t.maxUploadRetryTime;function v(P){J_(P);let b;try{b=P.getResponseHeader("X-Goog-Upload-URL")}catch{Gn(!1)}return Gn(Nd(b)),b}const R=new Cr(l,c,v,m);return R.urlParams=a,R.headers=h,R.body=f,R.errorHandler=ua(e),R}function lF(t,e,n,r){const i={"X-Goog-Upload-Command":"query"};function s(c){const h=J_(c,["active","final"]);let f=null;try{f=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Gn(!1)}f||Gn(!1);const m=Number(f);return Gn(!isNaN(m)),new Mh(m,r.size(),h==="final")}const o="POST",a=t.maxUploadRetryTime,l=new Cr(n,o,s,a);return l.headers=i,l.errorHandler=ua(e),l}const iE=256*1024;function uF(t,e,n,r,i,s,o,a){const l=new Mh(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw EM();const c=l.total-l.current;let h=c;i>0&&(h=Math.min(h,i));const f=l.current,m=f+h;let v="";h===0?v="finalize":c===h?v="upload, finalize":v="upload";const R={"X-Goog-Upload-Command":v,"X-Goog-Upload-Offset":`${l.current}`},P=r.slice(f,m);if(P===null)throw iP();function b(x,F){const M=J_(x,["active","final"]),A=l.current+h,_=r.size();let g;return M==="final"?g=Dd(e,s)(x,F):g=null,new Mh(A,_,M==="final",g)}const E="POST",w=e.maxUploadRetryTime,T=new Cr(n,E,b,w);return T.headers=R,T.body=P.uploadData(),T.progressCallback=a||null,T.errorHandler=ua(t),T}/**
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
 */const cF={STATE_CHANGED:"state_changed"},bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function np(t){switch(t){case"running":case"pausing":case"canceling":return bt.RUNNING;case"paused":return bt.PAUSED;case"success":return bt.SUCCESS;case"canceled":return bt.CANCELED;case"error":return bt.ERROR;default:return bt.ERROR}}/**
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
 */class hF{constructor(e,n,r){if(kM(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const s=e;this.next=s.next,this.error=s.error,this.complete=s.complete}}}/**
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
 */function Bs(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class dF{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=es.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=es.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=es.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw za("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw za("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw za("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw za("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw za("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class fF extends dF{initXhr(){this.xhr_.responseType="text"}}function Sn(){return new fF}/**
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
 */class yP{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=Ru(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=i=>{if(this._request=void 0,this._chunkMultiplier=1,i._codeEquals(Ee.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const s=this.isExponentialBackoffExpired();if(lP(i.status,[]))if(s)i=nP();else{this.sleepTime=Math.max(this.sleepTime*2,fM),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=i,this._transition("error")}},this._metadataErrorHandler=i=>{this._request=void 0,i._codeEquals(Ee.CANCELED)?this.completeTransitions_():(this._error=i,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((i,s)=>{this._resolve=i,this._reject=s,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=aF(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Sn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._uploadUrl=s,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const i=lF(this._ref.storage,this._ref._location,e,this._blob),s=this._ref.storage._makeRequest(i,Sn,n,r);this._request=s,s.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=iE*this._chunkMultiplier,n=new Mh(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((i,s)=>{let o;try{o=uF(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Sn,i,s,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){iE*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=mP(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(r,Sn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=_P(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(r,Sn,e,n);this._request=i,i.getPromise().then(s=>{this._request=void 0,this._metadata=s,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=rP(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=np(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,i){const s=new hF(n||void 0,r||void 0,i||void 0);return this._addObserver(s),()=>{this._removeObserver(s)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(np(this._state)){case bt.SUCCESS:Bs(this._resolve.bind(null,this.snapshot))();break;case bt.CANCELED:case bt.ERROR:const n=this._reject;Bs(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(np(this._state)){case bt.RUNNING:case bt.PAUSED:e.next&&Bs(e.next.bind(e,this.snapshot))();break;case bt.SUCCESS:e.complete&&Bs(e.complete.bind(e))();break;case bt.CANCELED:case bt.ERROR:e.error&&Bs(e.error.bind(e,this._error))();break;default:e.error&&Bs(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class _s{constructor(e,n){this._service=e,n instanceof Et?this._location=n:this._location=Et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new _s(e,n)}get root(){const e=new Et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return fP(this._location.path)}get storage(){return this._service}get parent(){const e=GM(this._location.path);if(e===null)return null;const n=new Et(this._location.bucket,e);return new _s(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw oP(e)}}function pF(t,e,n){t._throwIfRoot("uploadBytes");const r=_P(t.storage,t._location,Ru(),new Dn(e,!0),n);return t.storage.makeRequestWithTokens(r,Sn).then(i=>({metadata:i,ref:t}))}function mF(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new yP(t,new Dn(e),n)}function gF(t){const e={prefixes:[],items:[]};return vP(t,e).then(()=>e)}async function vP(t,e,n){const i=await wP(t,{pageToken:n});e.prefixes.push(...i.prefixes),e.items.push(...i.items),i.nextPageToken!=null&&await vP(t,e,i.nextPageToken)}function wP(t,e){e!=null&&typeof e.maxResults=="number"&&Om("options.maxResults",1,1e3,e.maxResults);const n=e||{},r=nF(t.storage,t._location,"/",n.pageToken,n.maxResults);return t.storage.makeRequestWithTokens(r,Sn)}function _F(t){t._throwIfRoot("getMetadata");const e=mP(t.storage,t._location,Ru());return t.storage.makeRequestWithTokens(e,Sn)}function yF(t,e){t._throwIfRoot("updateMetadata");const n=iF(t.storage,t._location,e,Ru());return t.storage.makeRequestWithTokens(n,Sn)}function vF(t){t._throwIfRoot("getDownloadURL");const e=rF(t.storage,t._location,Ru());return t.storage.makeRequestWithTokens(e,Sn).then(n=>{if(n===null)throw TM();return n})}function wF(t){t._throwIfRoot("deleteObject");const e=sF(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Sn)}function IP(t,e){const n=WM(t._location.path,e),r=new Et(t._location.bucket,n);return new _s(t.storage,r)}/**
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
 */function IF(t){return/^[A-Za-z]+:\/\//.test(t)}function EF(t,e){return new _s(t,e)}function EP(t,e){if(t instanceof X_){const n=t;if(n._bucket==null)throw IM();const r=new _s(n,n._bucket);return e!=null?EP(r,e):r}else return e!==void 0?IP(t,e):t}function TF(t,e){if(e&&IF(e)){if(t instanceof X_)return EF(t,e);throw go("To use ref(service, url), the first argument must be a Storage instance.")}else return EP(t,e)}function sE(t,e){const n=e==null?void 0:e[tP];return n==null?null:Et.makeFromBucketSpec(n,t)}function SF(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:pS(i,t.app.options.projectId))}class X_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=eP,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hM,this._maxUploadRetryTime=dM,this._requests=new Set,i!=null?this._bucket=Et.makeFromBucketSpec(i,this._host):this._bucket=sE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Et.makeFromBucketSpec(this._url,e):this._bucket=sE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Om("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Om("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new _s(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new RM(sP());{const o=LM(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const oE="@firebase/storage",aE="0.12.5";/**
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
 */const TP="storage";function RF(t,e,n){return t=Y(t),pF(t,e,n)}function AF(t,e,n){return t=Y(t),mF(t,e,n)}function PF(t){return t=Y(t),_F(t)}function CF(t,e){return t=Y(t),yF(t,e)}function kF(t,e){return t=Y(t),wP(t,e)}function bF(t){return t=Y(t),gF(t)}function SP(t){return t=Y(t),vF(t)}function xF(t){return t=Y(t),wF(t)}function Vm(t,e){return t=Y(t),TF(t,e)}function NF(t,e){return IP(t,e)}function DF(t=cd(),e){t=Y(t);const r=ea(t,TP).getImmediate({identifier:e}),i=hS("storage");return i&&RP(r,...i),r}function RP(t,e,n,r={}){SF(t,e,n,r)}function OF(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new X_(n,r,i,e,Sr)}function VF(){vr(new gn(TP,OF,"PUBLIC").setMultipleInstances(!0)),en(oE,aE,""),en(oE,aE,"esm2017")}VF();/**
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
 */class LF{constructor(e,n){this._delegate=e,this.firebase=n,zl(e,new gn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Hg(this._delegate)))}_getService(e,n=li){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=li){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){zl(this._delegate,e)}_addOrOverwriteComponent(e){SS(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const MF={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},lE=new Ss("app-compat","Firebase",MF);/**
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
 */function FF(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:en,setLogLevel:CS,onLog:PS,apps:null,SDK_VERSION:Sr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:mD}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(c){delete e[c]}function i(c){if(c=c||li,!Fw(e,c))throw lE.create("no-app",{appName:c});return e[c]}i.App=t;function s(c,h={}){const f=Wg(c,h);if(Fw(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function o(){return Object.keys(e).map(c=>e[c])}function a(c){const h=c.name,f=h.replace("-compat","");if(vr(c)&&c.type==="PUBLIC"){const m=(v=i())=>{if(typeof v[f]!="function")throw lE.create("invalid-app-argument",{appName:h});return v[f]()};c.serviceProps!==void 0&&Eh(m,c.serviceProps),n[f]=m,t.prototype[f]=function(...v){return this._getService.bind(this,h).apply(this,c.multipleInstances?v:[])}}return c.type==="PUBLIC"?n[f]:null}function l(c,h){return h==="serverAuth"?null:h}return n}/**
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
 */function AP(){const t=FF(LF);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:AP,extendNamespace:e,createSubscribe:vS,ErrorFactory:Ss,deepExtend:Eh});function e(n){Eh(t,n)}return t}const UF=AP();/**
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
 */const uE=new ud("@firebase/app-compat"),jF="@firebase/app-compat",BF="0.2.35";/**
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
 */function zF(t){en(jF,BF,t)}/**
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
 */if(mS()&&self.firebase!==void 0){uE.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&uE.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const bs=UF;zF();var $F="firebase",qF="10.12.2";/**
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
 */bs.registerVersion($F,qF,"app-compat");function Z_(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const $a={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},zs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function GF(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function PP(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WF=GF,HF=PP,CP=new Ss("auth","Firebase",PP());/**
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
 */const Fh=new ud("@firebase/auth");function KF(t,...e){Fh.logLevel<=re.WARN&&Fh.warn(`Auth (${Sr}): ${t}`,...e)}function $c(t,...e){Fh.logLevel<=re.ERROR&&Fh.error(`Auth (${Sr}): ${t}`,...e)}/**
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
 */function ot(t,...e){throw ty(t,...e)}function Xe(t,...e){return ty(t,...e)}function ey(t,e,n){const r=Object.assign(Object.assign({},HF()),{[e]:n});return new Ss("auth","Firebase",r).create(e,{appName:t.name})}function st(t){return ey(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ca(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ot(t,"argument-error"),ey(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ty(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return CP.create(t,...e)}function $(t,e,...n){if(!t)throw ty(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $c(e),new Error(e)}function kn(t,e){t||jn(e)}/**
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
 */function eu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ny(){return cE()==="http:"||cE()==="https:"}function cE(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function QF(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ny()||gS()||"connection"in navigator)?navigator.onLine:!0}function YF(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Au{constructor(e,n){this.shortDelay=e,this.longDelay=n,kn(n>e,"Short delay should be less than long delay!"),this.isMobile=Xx()||$g()}get(){return QF()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ry(t,e){kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class kP{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const JF={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const XF=new Au(3e4,6e4);function Be(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ze(t,e,n,r,i={}){return bP(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Zo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),kP.fetch()(xP(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function bP(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},JF),e);try{const i=new e2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw tl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw tl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw tl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw tl(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw ey(t,h,c);ot(t,h)}}catch(i){if(i instanceof Tt)throw i;ot(t,"network-request-failed",{message:String(i)})}}async function kr(t,e,n,r,i={}){const s=await ze(t,e,n,r,i);return"mfaPendingCredential"in s&&ot(t,"multi-factor-auth-required",{_serverResponse:s}),s}function xP(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?ry(t.config,i):`${t.config.apiScheme}://${i}`}function ZF(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class e2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Xe(this.auth,"network-request-failed")),XF.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Xe(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */function hE(t){return t!==void 0&&t.getResponse!==void 0}function dE(t){return t!==void 0&&t.enterprise!==void 0}class t2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return ZF(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function n2(t){return(await ze(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function r2(t,e){return ze(t,"GET","/v2/recaptchaConfig",Be(t,e))}/**
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
 */async function i2(t,e){return ze(t,"POST","/v1/accounts:delete",e)}async function s2(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function NP(t,e){return ze(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function vl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function o2(t,e=!1){const n=Y(t),r=await n.getIdToken(e),i=Vd(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vl(rp(i.auth_time)),issuedAtTime:vl(rp(i.iat)),expirationTime:vl(rp(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function rp(t){return Number(t)*1e3}function Vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $c("JWT malformed, contained fewer than 3 sections"),null;try{const i=uS(n);return i?JSON.parse(i):($c("Failed to decode base64 JWT payload"),null)}catch(i){return $c("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function fE(t){const e=Vd(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Er(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Tt&&a2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function a2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class l2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Lm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vl(this.lastLoginAt),this.creationTime=vl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function tu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Er(t,NP(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?DP(s.providerUserInfo):[],a=c2(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lm(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function u2(t){const e=Y(t);await tu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function c2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function DP(t){return t.map(e=>{var{providerId:n}=e,r=Z_(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function h2(t,e){const n=await bP(t,{},async()=>{const r=Zo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=xP(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",kP.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function d2(t,e){return ze(t,"POST","/v2/accounts:revokeToken",Be(t,e))}/**
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
 */class _o{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fE(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){$(e.length!==0,"internal-error");const n=fE(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await h2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new _o;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _o,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
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
 */function Mr(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ur{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Z_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new l2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lm(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Er(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return o2(this,e)}reload(){return u2(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ur(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await tu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Me(this.auth.app))return Promise.reject(st(this.auth));const e=await this.getIdToken();return await Er(this,i2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:T,emailVerified:x,isAnonymous:F,providerData:M,stsTokenManager:A}=n;$(T&&A,e,"internal-error");const _=_o.fromJSON(this.name,A);$(typeof T=="string",e,"internal-error"),Mr(f,e.name),Mr(m,e.name),$(typeof x=="boolean",e,"internal-error"),$(typeof F=="boolean",e,"internal-error"),Mr(v,e.name),Mr(R,e.name),Mr(P,e.name),Mr(b,e.name),Mr(E,e.name),Mr(w,e.name);const g=new ur({uid:T,auth:e,email:m,emailVerified:x,displayName:f,isAnonymous:F,photoURL:R,phoneNumber:v,tenantId:P,stsTokenManager:_,createdAt:E,lastLoginAt:w});return M&&Array.isArray(M)&&(g.providerData=M.map(S=>Object.assign({},S))),b&&(g._redirectEventId=b),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new _o;i.updateFromServerResponse(n);const s=new ur({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await tu(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?DP(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new _o;a.updateFromIdToken(r);const l=new ur({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lm(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const pE=new Map;function Xt(t){kn(t instanceof Function,"Expected a class definition");let e=pE.get(t);return e?(kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,pE.set(t,e),e)}/**
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
 */class OP{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OP.type="NONE";const qo=OP;/**
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
 */function ts(t,e,n){return`firebase:${t}:${e}:${n}`}class yo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ts(this.userKey,i.apiKey,s),this.fullPersistenceKey=ts("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ur._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new yo(Xt(qo),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Xt(qo);const o=ts(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=ur._fromJSON(e,h);c!==s&&(a=f),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new yo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new yo(s,e,r))}}/**
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
 */function mE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(MP(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(VP(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(FP(e))return"Blackberry";if(UP(e))return"Webos";if(iy(e))return"Safari";if((e.includes("chrome/")||LP(e))&&!e.includes("edge/"))return"Chrome";if(Pu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function VP(t=Pe()){return/firefox\//i.test(t)}function iy(t=Pe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LP(t=Pe()){return/crios\//i.test(t)}function MP(t=Pe()){return/iemobile/i.test(t)}function Pu(t=Pe()){return/android/i.test(t)}function FP(t=Pe()){return/blackberry/i.test(t)}function UP(t=Pe()){return/webos/i.test(t)}function ha(t=Pe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function f2(t=Pe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function p2(t=Pe()){var e;return ha(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m2(){return _S()&&document.documentMode===10}function jP(t=Pe()){return ha(t)||Pu(t)||UP(t)||FP(t)||/windows phone/i.test(t)||MP(t)}function g2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function BP(t,e=[]){let n;switch(t){case"Browser":n=mE(Pe());break;case"Worker":n=`${mE(Pe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sr}/${r}`}/**
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
 */class _2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function y2(t,e={}){return ze(t,"GET","/v2/passwordPolicy",Be(t,e))}/**
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
 */const v2=6;class w2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:v2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class I2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gE(this),this.idTokenSubscription=new gE(this),this.beforeStateQueue=new _2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CP,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Xt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await yo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await NP(this,{idToken:e}),r=await ur._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Me(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await tu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YF()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Me(this.app))return Promise.reject(st(this));const n=e?Y(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Me(this.app)?Promise.reject(st(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Me(this.app)?Promise.reject(st(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Xt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await y2(this),n=new w2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ss("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await d2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Xt(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await yo.create(this,[Xt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if($(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=BP(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&KF(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function je(t){return Y(t)}class gE{constructor(e){this.auth=e,this.observer=null,this.addObserver=vS(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Cu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function E2(t){Cu=t}function sy(t){return Cu.loadJS(t)}function T2(){return Cu.recaptchaV2Script}function S2(){return Cu.recaptchaEnterpriseScript}function R2(){return Cu.gapiScript}function zP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const A2="recaptcha-enterprise",P2="NO_RECAPTCHA";class C2{constructor(e){this.type=A2,this.auth=je(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{r2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new t2(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;dE(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(P2)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&dE(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=S2();l.length!==0&&(l+=a),sy(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function _E(t,e,n,r=!1){const i=new C2(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function nu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await _E(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await _E(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function k2(t,e){const n=ea(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ko(s,e??{}))return i;ot(i,"already-initialized")}return n.initialize({options:e})}function b2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $P(t,e,n){const r=je(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=qP(e),{host:o,port:a}=x2(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||N2()}function qP(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function x2(t){const e=qP(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yE(o)}}}function yE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function N2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class da{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}/**
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
 */async function GP(t,e){return ze(t,"POST","/v1/accounts:resetPassword",Be(t,e))}async function D2(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function O2(t,e){return ze(t,"POST","/v1/accounts:signUp",e)}async function V2(t,e){return ze(t,"POST","/v1/accounts:update",Be(t,e))}/**
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
 */async function L2(t,e){return kr(t,"POST","/v1/accounts:signInWithPassword",Be(t,e))}async function Ld(t,e){return ze(t,"POST","/v1/accounts:sendOobCode",Be(t,e))}async function M2(t,e){return Ld(t,e)}async function F2(t,e){return Ld(t,e)}async function U2(t,e){return Ld(t,e)}async function j2(t,e){return Ld(t,e)}/**
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
 */async function B2(t,e){return kr(t,"POST","/v1/accounts:signInWithEmailLink",Be(t,e))}async function z2(t,e){return kr(t,"POST","/v1/accounts:signInWithEmailLink",Be(t,e))}/**
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
 */class ru extends da{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ru(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ru(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nu(e,n,"signInWithPassword",L2);case"emailLink":return B2(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nu(e,r,"signUpPassword",O2);case"emailLink":return z2(e,{idToken:n,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function fr(t,e){return kr(t,"POST","/v1/accounts:signInWithIdp",Be(t,e))}/**
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
 */const $2="http://localhost";class Kn extends da{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ot("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Z_(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Kn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fr(e,n)}buildRequest(){const e={requestUri:$2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zo(n)}return e}}/**
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
 */async function q2(t,e){return ze(t,"POST","/v1/accounts:sendVerificationCode",Be(t,e))}async function G2(t,e){return kr(t,"POST","/v1/accounts:signInWithPhoneNumber",Be(t,e))}async function W2(t,e){const n=await kr(t,"POST","/v1/accounts:signInWithPhoneNumber",Be(t,e));if(n.temporaryProof)throw tl(t,"account-exists-with-different-credential",n);return n}const H2={USER_NOT_FOUND:"user-not-found"};async function K2(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return kr(t,"POST","/v1/accounts:signInWithPhoneNumber",Be(t,n),H2)}/**
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
 */class ns extends da{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new ns({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new ns({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return G2(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return W2(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return K2(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new ns({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
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
 */function Q2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Y2(t){const e=oo(Ya(t)).link,n=e?oo(Ya(e)).deep_link_id:null,r=oo(Ya(t)).deep_link_id;return(r?oo(Ya(r)).link:null)||r||n||e||t}class Md{constructor(e){var n,r,i,s,o,a;const l=oo(Ya(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Q2((i=l.mode)!==null&&i!==void 0?i:null);$(c&&h&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Y2(e);try{return new Md(n)}catch{return null}}}/**
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
 */class Ci{constructor(){this.providerId=Ci.PROVIDER_ID}static credential(e,n){return ru._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Md.parseLink(n);return $(r,"argument-error"),ru._fromEmailAndCode(e,r.code,r.tenantId)}}Ci.PROVIDER_ID="password";Ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class fa extends br{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class vo extends fa{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return $("providerId"in n&&"signInMethod"in n,"argument-error"),Kn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return $(e.idToken||e.accessToken,"argument-error"),Kn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return vo.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return vo.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new vo(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
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
 */class On extends fa{constructor(){super("facebook.com")}static credential(e){return Kn._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.FACEBOOK_SIGN_IN_METHOD="facebook.com";On.PROVIDER_ID="facebook.com";/**
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
 */class Vn extends fa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kn._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.GOOGLE_SIGN_IN_METHOD="google.com";Vn.PROVIDER_ID="google.com";/**
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
 */class Ln extends fa{constructor(){super("github.com")}static credential(e){return Kn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.GITHUB_SIGN_IN_METHOD="github.com";Ln.PROVIDER_ID="github.com";/**
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
 */const J2="http://localhost";class Go extends da{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return fr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,fr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,fr(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Go(r,s)}static _create(e,n){return new Go(e,n)}buildRequest(){return{requestUri:J2,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const X2="saml.";class Uh extends br{constructor(e){$(e.startsWith(X2),"argument-error"),super(e)}static credentialFromResult(e){return Uh.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Uh.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Go.fromJSON(e);return $(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Go._create(r,n)}catch{return null}}}/**
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
 */class Mn extends fa{constructor(){super("twitter.com")}static credential(e,n){return Kn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */async function WP(t,e){return kr(t,"POST","/v1/accounts:signUp",Be(t,e))}/**
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
 */class _n{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ur._fromIdTokenResponse(e,r,i),o=vE(r);return new _n({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vE(r);return new _n({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Z2(t){var e;if(Me(t.app))return Promise.reject(st(t));const n=je(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new _n({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await WP(n,{returnSecureToken:!0}),i=await _n._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
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
 */class jh extends Tt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,jh.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new jh(e,n,r,i)}}function HP(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?jh._fromErrorAndOperation(t,s,e,r):s})}/**
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
 */function KP(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function eU(t,e){const n=Y(t);await Fd(!0,n,e);const{providerUserInfo:r}=await s2(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=KP(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function oy(t,e,n=!1){const r=await Er(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _n._forOperation(t,"link",r)}async function Fd(t,e,n){await tu(e);const r=KP(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";$(r.has(n)===t,e.auth,i)}/**
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
 */async function QP(t,e,n=!1){const{auth:r}=t;if(Me(r.app))return Promise.reject(st(r));const i="reauthenticate";try{const s=await Er(t,HP(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=Vd(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),_n._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),s}}/**
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
 */async function YP(t,e,n=!1){if(Me(t.app))return Promise.reject(st(t));const r="signIn",i=await HP(t,r,e),s=await _n._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ud(t,e){return YP(je(t),e)}async function JP(t,e){const n=Y(t);return await Fd(!1,n,e.providerId),oy(n,e)}async function XP(t,e){return QP(Y(t),e)}/**
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
 */async function tU(t,e){return kr(t,"POST","/v1/accounts:signInWithCustomToken",Be(t,e))}/**
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
 */async function nU(t,e){if(Me(t.app))return Promise.reject(st(t));const n=je(t),r=await tU(n,{token:e,returnSecureToken:!0}),i=await _n._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
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
 */class ku{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?ay._fromServerResponse(e,n):"totpInfo"in n?ly._fromServerResponse(e,n):ot(e,"internal-error")}}class ay extends ku{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new ay(n)}}class ly extends ku{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new ly(n)}}/**
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
 */async function uy(t){const e=je(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rU(t,e,n){const r=je(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&jd(r,i,n),await nu(r,i,"getOobCode",F2)}async function iU(t,e,n){await GP(Y(t),{oobCode:e,newPassword:n}).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uy(t),r})}async function sU(t,e){await V2(Y(t),{oobCode:e})}async function ZP(t,e){const n=Y(t),r=await GP(n,{oobCode:e}),i=r.requestType;switch($(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":$(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":$(r.mfaInfo,n,"internal-error");default:$(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=ku._fromServerResponse(je(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function oU(t,e){const{data:n}=await ZP(Y(t),e);return n.email}async function eC(t,e,n){if(Me(t.app))return Promise.reject(st(t));const r=je(t),o=await nu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WP).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&uy(t),l}),a=await _n._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function tC(t,e,n){return Me(t.app)?Promise.reject(st(t)):Ud(Y(t),Ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uy(t),r})}/**
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
 */async function aU(t,e,n){const r=je(t),i={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(o,a){$(a.handleCodeInApp,r,"argument-error"),a&&jd(r,o,a)}s(i,n),await nu(r,i,"getOobCode",U2)}function lU(t,e){const n=Md.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function uU(t,e,n){if(Me(t.app))return Promise.reject(st(t));const r=Y(t),i=Ci.credentialWithLink(e,n||eu());return $(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Ud(r,i)}/**
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
 */async function cU(t,e){return ze(t,"POST","/v1/accounts:createAuthUri",Be(t,e))}/**
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
 */async function hU(t,e){const n=ny()?eu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await cU(Y(t),r);return i||[]}async function dU(t,e){const n=Y(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&jd(n.auth,i,e);const{email:s}=await M2(n.auth,i);s!==t.email&&await t.reload()}async function fU(t,e,n){const r=Y(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&jd(r.auth,s,n);const{email:o}=await j2(r.auth,s);o!==t.email&&await t.reload()}/**
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
 */async function pU(t,e){return ze(t,"POST","/v1/accounts:update",e)}/**
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
 */async function mU(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Y(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Er(r,pU(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function gU(t,e){const n=Y(t);return Me(n.auth.app)?Promise.reject(st(n.auth)):nC(n,e,null)}function _U(t,e){return nC(Y(t),null,e)}async function nC(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Er(t,D2(r,s));await t._updateTokensIfNecessary(o,!0)}/**
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
 */function yU(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const o=(n=(e=Vd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new wo(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new vU(s,i);case"github.com":return new wU(s,i);case"google.com":return new IU(s,i);case"twitter.com":return new EU(s,i,t.screenName||null);case"custom":case"anonymous":return new wo(s,null);default:return new wo(s,r,i)}}class wo{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class rC extends wo{constructor(e,n,r,i){super(e,n,r),this.username=i}}class vU extends wo{constructor(e,n){super(e,"facebook.com",n)}}class wU extends rC{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class IU extends wo{constructor(e,n){super(e,"google.com",n)}}class EU extends rC{constructor(e,n,r){super(e,"twitter.com",n,r)}}function TU(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:yU(n)}function SU(t,e,n,r){return Y(t).onIdTokenChanged(e,n,r)}function RU(t,e,n){return Y(t).beforeAuthStateChanged(e,n)}function AU(t){return Y(t).signOut()}/**
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
 */class cy{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=je(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>ku._fromServerResponse(r,a));$(i.mfaPendingCredential,r,"internal-error");const o=Qi._fromMfaPendingCredential(i.mfaPendingCredential);return new cy(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const c=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const h=await _n._fromIdTokenResponse(r,n.operationType,c);return await r._updateCurrentUser(h.user),h;case"reauthenticate":return $(n.user,r,"internal-error"),_n._forOperation(n.user,n.operationType,c);default:ot(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function PU(t,e){var n;const r=Y(t),i=e;return $(e.customData.operationType,r,"argument-error"),$((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),cy._fromError(r,i)}/**
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
 */function CU(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:start",Be(t,e))}function kU(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:finalize",Be(t,e))}function bU(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Be(t,e))}class hy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>ku._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new hy(e)}async getSession(){return Qi._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Er(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Er(this.user,bU(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const ip=new WeakMap;function xU(t){const e=Y(t);return ip.has(e)||ip.set(e,hy._fromUser(e)),ip.get(e)}const Bh="__sak";/**
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
 */class iC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Bh,"1"),this.storage.removeItem(Bh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function NU(){const t=Pe();return iy(t)||ha(t)}const DU=1e3,OU=10;class sC extends iC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=NU()&&g2(),this.fallbackToPolling=jP(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);m2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,OU):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},DU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sC.type="LOCAL";const Bd=sC;/**
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
 */class oC extends iC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}oC.type="SESSION";const yi=oC;/**
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
 */function VU(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zd(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await VU(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zd.receivers=[];/**
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
 */class LU{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=bu("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(m.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ke(){return window}function MU(t){Ke().location.href=t}/**
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
 */function dy(){return typeof Ke().WorkerGlobalScope<"u"&&typeof Ke().importScripts=="function"}async function FU(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UU(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function jU(){return dy()?self:null}/**
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
 */const aC="firebaseLocalStorageDb",BU=1,zh="firebaseLocalStorage",lC="fbase_key";class xu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $d(t,e){return t.transaction([zh],e?"readwrite":"readonly").objectStore(zh)}function zU(){const t=indexedDB.deleteDatabase(aC);return new xu(t).toPromise()}function Mm(){const t=indexedDB.open(aC,BU);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zh,{keyPath:lC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zh)?e(r):(r.close(),await zU(),e(await Mm()))})})}async function wE(t,e,n){const r=$d(t,!0).put({[lC]:e,value:n});return new xu(r).toPromise()}async function $U(t,e){const n=$d(t,!1).get(e),r=await new xu(n).toPromise();return r===void 0?null:r.value}function IE(t,e){const n=$d(t,!0).delete(e);return new xu(n).toPromise()}const qU=800,GU=3;class uC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Mm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GU)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return dy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zd._getInstance(jU()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await FU(),!this.activeServiceWorker)return;this.sender=new LU(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UU()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Mm();return await wE(e,Bh,"1"),await IE(e,Bh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>$U(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>IE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$d(i,!1).getAll();return new xu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),qU)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uC.type="LOCAL";const Wo=uC;/**
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
 */function WU(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:start",Be(t,e))}function HU(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:finalize",Be(t,e))}/**
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
 */const KU=500,QU=6e4,wc=1e12;class YU{constructor(e){this.auth=e,this.counter=wc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new JU(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||wc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||wc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||wc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class JU{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;$(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=XU(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},QU)},KU))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function XU(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const sp=zP("rcb"),ZU=new Au(3e4,6e4);class ej{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ke().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return $(tj(n),e,"argument-error"),this.shouldResolveImmediately(n)&&hE(Ke().grecaptcha)?Promise.resolve(Ke().grecaptcha):new Promise((r,i)=>{const s=Ke().setTimeout(()=>{i(Xe(e,"network-request-failed"))},ZU.get());Ke()[sp]=()=>{Ke().clearTimeout(s),delete Ke()[sp];const a=Ke().grecaptcha;if(!a||!hE(a)){i(Xe(e,"internal-error"));return}const l=a.render;a.render=(c,h)=>{const f=l(c,h);return this.counter++,f},this.hostLanguage=n,r(a)};const o=`${T2()}?${Zo({onload:sp,render:"explicit",hl:n})}`;sy(o).catch(()=>{clearTimeout(s),i(Xe(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=Ke().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function tj(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class nj{async load(e){return new YU(e)}clearedOneInstance(){}}/**
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
 */const cC="recaptcha",rj={theme:"light",type:"image"};let ij=class{constructor(e,n,r=Object.assign({},rj)){this.parameters=r,this.type=cC,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=je(e),this.isInvisible=this.parameters.size==="invisible",$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;$(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new nj:new ej,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{o&&(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){$(!this.parameters.sitekey,this.auth,"argument-error"),$(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),$(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=Ke()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){$(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){$(ny()&&!dy(),this.auth,"internal-error"),await sj(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await n2(this.auth);$(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return $(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function sj(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class fy{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=ns._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function oj(t,e,n){if(Me(t.app))return Promise.reject(st(t));const r=je(t),i=await qd(r,e,Y(n));return new fy(i,s=>Ud(r,s))}async function aj(t,e,n){const r=Y(t);await Fd(!1,r,"phone");const i=await qd(r.auth,e,Y(n));return new fy(i,s=>JP(r,s))}async function lj(t,e,n){const r=Y(t);if(Me(r.auth.app))return Promise.reject(st(r.auth));const i=await qd(r.auth,e,Y(n));return new fy(i,s=>XP(r,s))}async function qd(t,e,n){var r;const i=await n.verify();try{$(typeof i=="string",t,"argument-error"),$(n.type===cC,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return $(o.type==="enroll",t,"internal-error"),(await CU(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{$(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return $(a,t,"missing-multi-factor-info"),(await WU(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await q2(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function uj(t,e){const n=Y(t);if(Me(n.auth.app))return Promise.reject(st(n.auth));await oy(n,e)}/**
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
 */let ys=class qc{constructor(e){this.providerId=qc.PROVIDER_ID,this.auth=je(e)}verifyPhoneNumber(e,n){return qd(this.auth,e,Y(n))}static credential(e,n){return ns._fromVerification(e,n)}static credentialFromResult(e){const n=e;return qc.credentialFromTaggedObject(n)}static credentialFromError(e){return qc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?ns._fromTokenResponse(n,r):null}};ys.PROVIDER_ID="phone";ys.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function xs(t,e){return e?Xt(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class py extends da{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return fr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return fr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function cj(t){return YP(t.auth,new py(t),t.bypassAuthState)}function hj(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),QP(n,new py(t),t.bypassAuthState)}async function dj(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),oy(n,new py(t),t.bypassAuthState)}/**
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
 */class hC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return cj;case"linkViaPopup":case"linkViaRedirect":return dj;case"reauthViaPopup":case"reauthViaRedirect":return hj;default:ot(this.auth,"internal-error")}}resolve(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fj=new Au(2e3,1e4);async function pj(t,e,n){if(Me(t.app))return Promise.reject(Xe(t,"operation-not-supported-in-this-environment"));const r=je(t);ca(t,e,br);const i=xs(r,n);return new cr(r,"signInViaPopup",e,i).executeNotNull()}async function mj(t,e,n){const r=Y(t);if(Me(r.auth.app))return Promise.reject(Xe(r.auth,"operation-not-supported-in-this-environment"));ca(r.auth,e,br);const i=xs(r.auth,n);return new cr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function gj(t,e,n){const r=Y(t);ca(r.auth,e,br);const i=xs(r.auth,n);return new cr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class cr extends hC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){kn(this.filter.length===1,"Popup operations only handle one event");const e=bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Xe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Xe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Xe(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,fj.get())};e()}}cr.currentPopupAction=null;/**
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
 */const _j="pendingRedirect",wl=new Map;class yj extends hC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wl.get(this.auth._key());if(!e){try{const r=await vj(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wl.set(this.auth._key(),e)}return this.bypassAuthState||wl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vj(t,e){const n=fC(e),r=dC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function my(t,e){return dC(t)._set(fC(e),"true")}function wj(){wl.clear()}function gy(t,e){wl.set(t._key(),e)}function dC(t){return Xt(t._redirectPersistence)}function fC(t){return ts(_j,t.config.apiKey,t.name)}/**
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
 */function Ij(t,e,n){return Ej(t,e,n)}async function Ej(t,e,n){if(Me(t.app))return Promise.reject(st(t));const r=je(t);ca(t,e,br),await r._initializationPromise;const i=xs(r,n);return await my(i,r),i._openRedirect(r,e,"signInViaRedirect")}function Tj(t,e,n){return Sj(t,e,n)}async function Sj(t,e,n){const r=Y(t);if(ca(r.auth,e,br),Me(r.auth.app))return Promise.reject(st(r.auth));await r.auth._initializationPromise;const i=xs(r.auth,n);await my(i,r.auth);const s=await pC(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function Rj(t,e,n){return Aj(t,e,n)}async function Aj(t,e,n){const r=Y(t);ca(r.auth,e,br),await r.auth._initializationPromise;const i=xs(r.auth,n);await Fd(!1,r,e.providerId),await my(i,r.auth);const s=await pC(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function Pj(t,e){return await je(t)._initializationPromise,Gd(t,e,!1)}async function Gd(t,e,n=!1){if(Me(t.app))return Promise.reject(st(t));const r=je(t),i=xs(r,e),o=await new yj(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function pC(t){const e=bu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const Cj=10*60*1e3;class mC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kj(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Xe(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cj&&this.cachedEventUids.clear(),this.cachedEventUids.has(EE(e))}saveEventToCache(e){this.cachedEventUids.add(EE(e)),this.lastProcessedEventTime=Date.now()}}function EE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kj(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gC(t);default:return!1}}/**
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
 */async function _C(t,e={}){return ze(t,"GET","/v1/projects",e)}/**
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
 */const bj=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xj=/^https?/;async function Nj(t){if(t.config.emulator)return;const{authorizedDomains:e}=await _C(t);for(const n of e)try{if(Dj(n))return}catch{}ot(t,"unauthorized-domain")}function Dj(t){const e=eu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!xj.test(n))return!1;if(bj.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Oj=new Au(3e4,6e4);function TE(){const t=Ke().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vj(t){return new Promise((e,n)=>{var r,i,s;function o(){TE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{TE(),n(Xe(t,"network-request-failed"))},timeout:Oj.get()})}if(!((i=(r=Ke().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Ke().gapi)===null||s===void 0)&&s.load)o();else{const a=zP("iframefcb");return Ke()[a]=()=>{gapi.load?o():n(Xe(t,"network-request-failed"))},sy(`${R2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Gc=null,e})}let Gc=null;function Lj(t){return Gc=Gc||Vj(t),Gc}/**
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
 */const Mj=new Au(5e3,15e3),Fj="__/auth/iframe",Uj="emulator/auth/iframe",jj={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bj=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zj(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ry(e,Uj):`https://${t.config.authDomain}/${Fj}`,r={apiKey:e.apiKey,appName:t.name,v:Sr},i=Bj.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zo(r).slice(1)}`}async function $j(t){const e=await Lj(t),n=Ke().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:zj(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jj,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Xe(t,"network-request-failed"),a=Ke().setTimeout(()=>{s(o)},Mj.get());function l(){Ke().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const qj={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Gj=500,Wj=600,Hj="_blank",Kj="http://localhost";class SE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qj(t,e,n,r=Gj,i=Wj){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},qj),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Pe().toLowerCase();n&&(a=LP(c)?Hj:n),VP(c)&&(e=e||Kj,l.scrollbars="yes");const h=Object.entries(l).reduce((m,[v,R])=>`${m}${v}=${R},`,"");if(p2(c)&&a!=="_self")return Yj(e||"",a),new SE(null);const f=window.open(e||"",a,h);$(f,t,"popup-blocked");try{f.focus()}catch{}return new SE(f)}function Yj(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Jj="__/auth/handler",Xj="emulator/auth/handler",Zj=encodeURIComponent("fac");async function Fm(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sr,eventId:i};if(e instanceof br){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",rN(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries(s||{}))o[h]=f}if(e instanceof fa){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),c=l?`#${Zj}=${encodeURIComponent(l)}`:"";return`${eB(t)}?${Zo(a).slice(1)}${c}`}function eB({config:t}){return t.emulator?ry(t,Xj):`https://${t.authDomain}/${Jj}`}/**
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
 */const op="webStorageSupport";class tB{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yi,this._completeRedirectFn=Gd,this._overrideRedirectResult=gy}async _openPopup(e,n,r,i){var s;kn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Fm(e,n,r,eu(),i);return Qj(e,o,bu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Fm(e,n,r,eu(),i);return MU(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(kn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $j(e),r=new mC(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(op,{type:op},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[op];o!==void 0&&n(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Nj(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jP()||iy()||ha()}}const yC=tB;class nB{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return jn("unexpected MultiFactorSessionType")}}}class _y extends nB{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new _y(e)}_finalizeEnroll(e,n,r){return kU(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return HU(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class vC{constructor(){}static assertion(e){return _y._fromCredential(e)}}vC.FACTOR_ID="phone";var RE="@firebase/auth",AE="1.7.4";/**
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
 */class rB{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function iB(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sB(t){vr(new gn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:BP(t)},c=new I2(r,i,s,l);return b2(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vr(new gn("auth-internal",e=>{const n=je(e.getProvider("auth").getImmediate());return(r=>new rB(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(RE,AE,iB(t)),en(RE,AE,"esm2017")}/**
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
 */const oB=5*60,aB=fS("authIdTokenMaxAge")||oB;let PE=null;const lB=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aB)return;const i=n==null?void 0:n.token;PE!==i&&(PE=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uB(t=cd()){const e=ea(t,"auth");if(e.isInitialized())return e.getImmediate();const n=k2(t,{popupRedirectResolver:yC,persistence:[Wo,Bd,yi]}),r=fS("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=lB(s.toString());RU(n,o,()=>o(n.currentUser)),SU(n,a=>o(a))}}const i=cS("auth");return i&&$P(n,`http://${i}`),n}function cB(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}E2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Xe("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",cB().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sB("Browser");/**
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
 */const hB=2e3;async function dB(t,e,n){var r;const{BuildInfo:i}=vs();kn(e.sessionId,"AuthEvent did not contain a session ID");const s=await _B(e.sessionId),o={};return ha()?o.ibi=i.packageName:Pu()?o.apn=i.packageName:ot(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,Fm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function fB(t){const{BuildInfo:e}=vs(),n={};ha()?n.iosBundleId=e.packageName:Pu()?n.androidPackageName=e.packageName:ot(t,"operation-not-supported-in-this-environment"),await _C(t,n)}function pB(t){const{cordova:e}=vs();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,f2()?"_blank":"_system","location=yes"),n(i)})})}async function mB(t,e,n){const{cordova:r}=vs();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var f;s();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){a||(a=window.setTimeout(()=>{o(Xe(t,"redirect-cancelled-by-user"))},hB))}function h(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(l),document.addEventListener("resume",c,!1),Pu()&&document.addEventListener("visibilitychange",h,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",h,!1),a&&window.clearTimeout(a)}})}finally{i()}}function gB(t){var e,n,r,i,s,o,a,l,c,h;const f=vs();$(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),$(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),$(typeof((s=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),$(typeof((l=(a=(o=f==null?void 0:f.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),$(typeof((h=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||h===void 0?void 0:h.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function _B(t){const e=yB(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function yB(t){if(kn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
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
 */const vB=20;class wB extends mC{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function IB(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:SB(),postBody:null,tenantId:t.tenantId,error:Xe(t,"no-auth-event")}}function EB(t,e){return Um()._set(jm(t),e)}async function CE(t){const e=await Um()._get(jm(t));return e&&await Um()._remove(jm(t)),e}function TB(t,e){var n,r;const i=AB(e);if(i.includes("/__/auth/callback")){const s=Wc(i),o=s.firebaseError?RB(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?Xe(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function SB(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<vB;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Um(){return Xt(Bd)}function jm(t){return ts("authEvent",t.config.apiKey,t.name)}function RB(t){try{return JSON.parse(t)}catch{return null}}function AB(t){const e=Wc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Wc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Wc(i).link||i||r||n||t}function Wc(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return oo(n.join("?"))}/**
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
 */const PB=500;class CB{constructor(){this._redirectPersistence=yi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Gd,this._overrideRedirectResult=gy}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new wB(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ot(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){gB(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),wj(),await this._originValidation(e);const o=IB(e,r,i);await EB(e,o);const a=await dB(e,o,n),l=await pB(a);return mB(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fB(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=vs(),o=setTimeout(async()=>{await CE(e),n.onEvent(kE())},PB),a=async h=>{clearTimeout(o);const f=await CE(e);let m=null;f&&(h!=null&&h.url)&&(m=TB(f,h.url)),n.onEvent(m||kE())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,c=`${s.packageName.toLowerCase()}://`;vs().handleOpenURL=async h=>{if(h.toLowerCase().startsWith(c)&&a({url:h}),typeof l=="function")try{l(h)}catch(f){console.error(f)}}}}const kB=CB;function kE(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:Xe("no-auth-event")}}/**
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
 */function bB(t,e){je(t)._logFramework(e)}var xB="@firebase/auth-compat",NB="0.5.9";/**
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
 */const DB=1e3;function Il(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function OB(){return Il()==="http:"||Il()==="https:"}function wC(t=Pe()){return!!((Il()==="file:"||Il()==="ionic:"||Il()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function VB(){return $g()||zg()}function LB(){return _S()&&(document==null?void 0:document.documentMode)===11}function MB(t=Pe()){return/Edge\/\d+/.test(t)}function FB(t=Pe()){return LB()||MB(t)}function IC(){try{const t=self.localStorage,e=bu();if(t)return t.setItem(e,"1"),t.removeItem(e),FB()?Bl():!0}catch{return yy()&&Bl()}return!1}function yy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function ap(){return(OB()||gS()||wC())&&!VB()&&IC()&&!yy()}function EC(){return wC()&&typeof document<"u"}async function UB(){return EC()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},DB);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function jB(){return typeof window<"u"?window:null}/**
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
 */const Yt={LOCAL:"local",NONE:"none",SESSION:"session"},qa=$,TC="persistence";function BB(t,e){if(qa(Object.values(Yt).includes(e),t,"invalid-persistence-type"),$g()){qa(e!==Yt.SESSION,t,"unsupported-persistence-type");return}if(zg()){qa(e===Yt.NONE,t,"unsupported-persistence-type");return}if(yy()){qa(e===Yt.NONE||e===Yt.LOCAL&&Bl(),t,"unsupported-persistence-type");return}qa(e===Yt.NONE||IC(),t,"unsupported-persistence-type")}async function Bm(t){await t._initializationPromise;const e=SC(),n=ts(TC,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function zB(t,e){const n=SC();if(!n)return[];const r=ts(TC,t,e);switch(n.getItem(r)){case Yt.NONE:return[qo];case Yt.LOCAL:return[Wo,yi];case Yt.SESSION:return[yi];default:return[]}}function SC(){var t;try{return((t=jB())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const $B=$;class Kr{constructor(){this.browserResolver=Xt(yC),this.cordovaResolver=Xt(kB),this.underlyingResolver=null,this._redirectPersistence=yi,this._completeRedirectFn=Gd,this._overrideRedirectResult=gy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return EC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return $B(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await UB();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function RC(t){return t.unwrap()}function qB(t){return t.wrapped()}/**
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
 */function GB(t){return AC(t)}function WB(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new HB(t,PU(t,e))}else if(r){const i=AC(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function AC(t){const{_tokenResponse:e}=t instanceof Tt?t.customData:t;if(!e)return null;if(!(t instanceof Tt)&&"temporaryProof"in e&&"phoneNumber"in e)return ys.credentialFromResult(t);const n=e.providerId;if(!n||n===$a.PASSWORD)return null;let r;switch(n){case $a.GOOGLE:r=Vn;break;case $a.FACEBOOK:r=On;break;case $a.GITHUB:r=Ln;break;case $a.TWITTER:r=Mn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Go._create(n,a):Kn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new vo(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof Tt?r.credentialFromError(t):r.credentialFromResult(t)}function Ut(t,e){return e.catch(n=>{throw n instanceof Tt&&WB(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:GB(n),additionalUserInfo:TU(n),user:hr.getOrCreate(i)}})}async function zm(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ut(t,n.confirm(r))}}class HB{constructor(e,n){this.resolver=n,this.auth=qB(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ut(RC(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class hr{constructor(e){this._delegate=e,this.multiFactor=xU(e)}static getOrCreate(e){return hr.USER_MAP.has(e)||hr.USER_MAP.set(e,new hr(e)),hr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ut(this.auth,JP(this._delegate,e))}async linkWithPhoneNumber(e,n){return zm(this.auth,aj(this._delegate,e,n))}async linkWithPopup(e){return Ut(this.auth,gj(this._delegate,e,Kr))}async linkWithRedirect(e){return await Bm(je(this.auth)),Rj(this._delegate,e,Kr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ut(this.auth,XP(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return zm(this.auth,lj(this._delegate,e,n))}reauthenticateWithPopup(e){return Ut(this.auth,mj(this._delegate,e,Kr))}async reauthenticateWithRedirect(e){return await Bm(je(this.auth)),Tj(this._delegate,e,Kr)}sendEmailVerification(e){return dU(this._delegate,e)}async unlink(e){return await eU(this._delegate,e),this}updateEmail(e){return gU(this._delegate,e)}updatePassword(e){return _U(this._delegate,e)}updatePhoneNumber(e){return uj(this._delegate,e)}updateProfile(e){return mU(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return fU(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}hr.USER_MAP=new WeakMap;/**
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
 */const Ga=$;class $m{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ga(r,"invalid-api-key",{appName:e.name}),Ga(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Kr:void 0;this._delegate=n.initialize({options:{persistence:KB(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(WF),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?hr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){$P(this._delegate,e,n)}applyActionCode(e){return sU(this._delegate,e)}checkActionCode(e){return ZP(this._delegate,e)}confirmPasswordReset(e,n){return iU(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ut(this._delegate,eC(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return hU(this._delegate,e)}isSignInWithEmailLink(e){return lU(this._delegate,e)}async getRedirectResult(){Ga(ap(),this._delegate,"operation-not-supported-in-this-environment");const e=await Pj(this._delegate,Kr);return e?Ut(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){bB(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=bE(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=bE(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return aU(this._delegate,e,n)}sendPasswordResetEmail(e,n){return rU(this._delegate,e,n||void 0)}async setPersistence(e){BB(this._delegate,e);let n;switch(e){case Yt.SESSION:n=yi;break;case Yt.LOCAL:n=await Xt(Wo)._isAvailable()?Wo:Bd;break;case Yt.NONE:n=qo;break;default:return ot("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ut(this._delegate,Z2(this._delegate))}signInWithCredential(e){return Ut(this._delegate,Ud(this._delegate,e))}signInWithCustomToken(e){return Ut(this._delegate,nU(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ut(this._delegate,tC(this._delegate,e,n))}signInWithEmailLink(e,n){return Ut(this._delegate,uU(this._delegate,e,n))}signInWithPhoneNumber(e,n){return zm(this._delegate,oj(this._delegate,e,n))}async signInWithPopup(e){return Ga(ap(),this._delegate,"operation-not-supported-in-this-environment"),Ut(this._delegate,pj(this._delegate,e,Kr))}async signInWithRedirect(e){return Ga(ap(),this._delegate,"operation-not-supported-in-this-environment"),await Bm(this._delegate),Ij(this._delegate,e,Kr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return oU(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}$m.Persistence=Yt;function bE(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&hr.getOrCreate(o)),error:e,complete:n}}function KB(t,e){const n=zB(t,e);if(typeof self<"u"&&!n.includes(Wo)&&n.push(Wo),typeof window<"u")for(const r of[Bd,yi])n.includes(r)||n.push(r);return n.includes(qo)||n.push(qo),n}/**
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
 */class vy{constructor(){this.providerId="phone",this._delegate=new ys(RC(bs.auth()))}static credential(e,n){return ys.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}vy.PHONE_SIGN_IN_METHOD=ys.PHONE_SIGN_IN_METHOD;vy.PROVIDER_ID=ys.PROVIDER_ID;/**
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
 */const QB=$;class YB{constructor(e,n,r=bs.app()){var i;QB((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new ij(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const JB="auth-compat";function XB(t){t.INTERNAL.registerComponent(new gn(JB,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new $m(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:zs.EMAIL_SIGNIN,PASSWORD_RESET:zs.PASSWORD_RESET,RECOVER_EMAIL:zs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:zs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:zs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:zs.VERIFY_EMAIL}},EmailAuthProvider:Ci,FacebookAuthProvider:On,GithubAuthProvider:Ln,GoogleAuthProvider:Vn,OAuthProvider:vo,SAMLAuthProvider:Uh,PhoneAuthProvider:vy,PhoneMultiFactorGenerator:vC,RecaptchaVerifier:YB,TwitterAuthProvider:Mn,Auth:$m,AuthCredential:da,Error:Tt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(xB,NB)}XB(bs);const ZB="@firebase/firestore-compat",e4="0.3.32";/**
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
 */function wy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new j("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function xE(){if(typeof Uint8Array>"u")throw new j("unimplemented","Uint8Arrays are not available in this environment.")}function NE(){if(!QD())throw new j("unimplemented","Blobs are unavailable in Firestore in this environment.")}let PC=class qm{constructor(e){this._delegate=e}static fromBase64String(e){return NE(),new qm(Hn.fromBase64String(e))}static fromUint8Array(e){return xE(),new qm(Hn.fromUint8Array(e))}toBase64(){return NE(),this._delegate.toBase64()}toUint8Array(){return xE(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}};/**
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
 */function Gm(t){return t4(t,["next","error","complete"])}function t4(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
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
 */class n4{enableIndexedDbPersistence(e,n){return PL(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return CL(e._delegate)}clearIndexedDbPersistence(e){return kL(e._delegate)}}class CC{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof di||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Cn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){NA(this._delegate,e,n,r)}enableNetwork(){return xL(this._delegate)}disableNetwork(){return NL(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,bA("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return bL(this._delegate)}onSnapshotsInSync(e){return tM(this._delegate,e)}get app(){if(!this._appCompat)throw new j("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ho(this,gl(this._delegate,e))}catch(n){throw xt(n,"collection()","Firestore.collection()")}}doc(e){try{return new hn(this,Vh(this._delegate,e))}catch(n){throw xt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new kt(this,EL(this._delegate,e))}catch(n){throw xt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return sM(this._delegate,n=>e(new kC(this,n)))}batch(){return lt(this._delegate),new bC(new rM(this._delegate,e=>Su(this._delegate,e)))}loadBundle(e){return DL(this._delegate,e)}namedQuery(e){return OL(this._delegate,e).then(n=>n?new kt(this,n):null)}}class Wd extends G_{constructor(e){super(),this.firestore=e}convertBytes(e){return new PC(new Hn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return hn.forKey(n,this.firestore,null)}}function r4(t){gD(t)}class kC{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Wd(e)}get(e){const n=Yi(e);return this._delegate.get(n).then(r=>new iu(this._firestore,new Ir(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Yi(e);return r?(wy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Yi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Yi(e);return this._delegate.delete(n),this}}class bC{constructor(e){this._delegate=e}set(e,n,r){const i=Yi(e);return r?(wy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Yi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Yi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class ws{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new _l(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new su(this._firestore,r),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=ws.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new ws(e,new Wd(e),n),i.set(n,s)),s}}ws.INSTANCES=new WeakMap;class hn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Wd(e)}static forPath(e,n,r){if(e.length%2!==0)throw new j("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new hn(n,new xe(n._delegate,r,new G(e)))}static forKey(e,n,r){return new hn(n,new xe(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ho(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ho(this.firestore,gl(this._delegate,e))}catch(n){throw xt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Y(e),e instanceof xe?LA(this._delegate,e):!1}set(e,n){n=wy("DocumentReference.set",n);try{return n?ZI(this._delegate,e,n):ZI(this._delegate,e)}catch(r){throw xt(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?eE(this._delegate,e):eE(this._delegate,e,n,...r)}catch(i){throw xt(i,"updateDoc()","DocumentReference.update()")}}delete(){return eM(this._delegate)}onSnapshot(...e){const n=xC(e),r=NC(e,i=>new iu(this.firestore,new Ir(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return ZA(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=YL(this._delegate):(e==null?void 0:e.source)==="server"?n=JL(this._delegate):n=QL(this._delegate),n.then(r=>new iu(this.firestore,new Ir(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new hn(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function xt(t,e,n){return t.message=t.message.replace(e,n),t}function xC(t){for(const e of t)if(typeof e=="object"&&!Gm(e))return e;return{}}function NC(t,e){var n,r;let i;return Gm(t[0])?i=t[0]:Gm(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class iu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new hn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return JA(this._delegate,e._delegate)}}class su extends iu{data(e){const n=this._delegate.data(e);return this._delegate._converter||_D(n!==void 0),n}}class kt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Wd(e)}where(e,n,r){try{return new kt(this.firestore,rr(this._delegate,Nm(e,n,r)))}catch(i){throw xt(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new kt(this.firestore,rr(this._delegate,jL(e,n)))}catch(r){throw xt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new kt(this.firestore,rr(this._delegate,BL(e)))}catch(n){throw xt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new kt(this.firestore,rr(this._delegate,zL(e)))}catch(n){throw xt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new kt(this.firestore,rr(this._delegate,$L(...e)))}catch(n){throw xt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new kt(this.firestore,rr(this._delegate,qL(...e)))}catch(n){throw xt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new kt(this.firestore,rr(this._delegate,GL(...e)))}catch(n){throw xt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new kt(this.firestore,rr(this._delegate,WL(...e)))}catch(n){throw xt(n,"endAt()","Query.endAt()")}}isEqual(e){return MA(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=XL(this._delegate):(e==null?void 0:e.source)==="server"?n=ZL(this._delegate):n=XA(this._delegate),n.then(r=>new Wm(this.firestore,new _i(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=xC(e),r=NC(e,i=>new Wm(this.firestore,new _i(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return ZA(this._delegate,n,r)}withConverter(e){return new kt(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class i4{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new su(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Wm{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new kt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new su(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new i4(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new su(this._firestore,r))})}isEqual(e){return JA(this._delegate,e._delegate)}}class Ho extends kt{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new hn(this.firestore,e):null}doc(e){try{return e===void 0?new hn(this.firestore,Vh(this._delegate)):new hn(this.firestore,Vh(this._delegate,e))}catch(n){throw xt(n,"doc()","CollectionReference.doc()")}}add(e){return Dm(this._delegate,e).then(n=>new hn(this.firestore,n))}isEqual(e){return LA(this._delegate,e._delegate)}withConverter(e){return new Ho(this.firestore,e?this._delegate.withConverter(ws.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Yi(t){return ue(t,xe)}/**
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
 */class Iy{constructor(...e){this._delegate=new gi(...e)}static documentId(){return new Iy(Se.keyField().canonicalString())}isEqual(e){return e=Y(e),e instanceof gi?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class qi{constructor(e){this._delegate=e}static serverTimestamp(){const e=aM();return e._methodName="FieldValue.serverTimestamp",new qi(e)}static delete(){const e=oM();return e._methodName="FieldValue.delete",new qi(e)}static arrayUnion(...e){const n=lM(...e);return n._methodName="FieldValue.arrayUnion",new qi(n)}static arrayRemove(...e){const n=uM(...e);return n._methodName="FieldValue.arrayRemove",new qi(n)}static increment(e){const n=cM(e);return n._methodName="FieldValue.increment",new qi(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const s4={Firestore:CC,GeoPoint:Td,Timestamp:Ae,Blob:PC,Transaction:kC,WriteBatch:bC,DocumentReference:hn,DocumentSnapshot:iu,Query:kt,QueryDocumentSnapshot:su,QuerySnapshot:Wm,CollectionReference:Ho,FieldPath:Iy,FieldValue:qi,setLogLevel:r4,CACHE_SIZE_UNLIMITED:RL};function o4(t,e){t.INTERNAL.registerComponent(new gn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},s4)))}/**
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
 */function a4(t){o4(t,(e,n)=>new CC(e,n,new n4)),t.registerVersion(ZB,e4)}a4(bs);/**
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
 */class DE{constructor(e,n){this._delegate=e,this._ref=n,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ic(this._delegate.snapshot,this,this._ref)}then(e,n){return this._delegate.then(r=>{if(e)return e(new Ic(r,this,this._ref))},n)}on(e,n,r,i){let s;return n&&(typeof n=="function"?s=o=>n(new Ic(o,this,this._ref)):s={next:n.next?o=>n.next(new Ic(o,this,this._ref)):void 0,complete:n.complete||void 0,error:n.error||void 0}),this._delegate.on(e,s,r||void 0,i||void 0)}}class OE{constructor(e,n){this._delegate=e,this._service=n}get prefixes(){return this._delegate.prefixes.map(e=>new pr(e,this._service))}get items(){return this._delegate.items.map(e=>new pr(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}/**
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
 */class pr{constructor(e,n){this._delegate=e,this.storage=n}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const n=NF(this._delegate,e);return new pr(n,this.storage)}get root(){return new pr(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return e==null?null:new pr(e,this.storage)}put(e,n){return this._throwIfRoot("put"),new DE(AF(this._delegate,e,n),this)}putString(e,n=cn.RAW,r){this._throwIfRoot("putString");const i=uP(n,e),s=Object.assign({},r);return s.contentType==null&&i.contentType!=null&&(s.contentType=i.contentType),new DE(new yP(this._delegate,new Dn(i.data,!0),s),this)}listAll(){return bF(this._delegate).then(e=>new OE(e,this.storage))}list(e){return kF(this._delegate,e||void 0).then(n=>new OE(n,this.storage))}getMetadata(){return PF(this._delegate)}updateMetadata(e){return CF(this._delegate,e)}getDownloadURL(){return SP(this._delegate)}delete(){return this._throwIfRoot("delete"),xF(this._delegate)}_throwIfRoot(e){if(this._delegate._location.path==="")throw oP(e)}}/**
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
 */class DC{constructor(e,n){this.app=e,this._delegate=n}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(VE(e))throw go("ref() expected a child path but got a URL, use refFromURL instead.");return new pr(Vm(this._delegate,e),this)}refFromURL(e){if(!VE(e))throw go("refFromURL() expected a full URL but got a child path, use ref() instead.");try{Et.makeFromUrl(e,this._delegate.host)}catch{throw go("refFromUrl() expected a valid full URL but got an invalid one.")}return new pr(Vm(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,n,r={}){RP(this._delegate,e,n,r)}}function VE(t){return/^[A-Za-z]+:\/\//.test(t)}const l4="@firebase/storage-compat",u4="0.3.8";/**
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
 */const c4="storage-compat";function h4(t,{instanceIdentifier:e}){const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("storage").getImmediate({identifier:e});return new DC(n,r)}function d4(t){const e={TaskState:bt,TaskEvent:cF,StringFormat:cn,Storage:DC,Reference:pr};t.INTERNAL.registerComponent(new gn(c4,h4,"PUBLIC").setServiceProps(e).setMultipleInstances(!0)),t.registerVersion(l4,u4)}d4(bs);const Ey=bs.initializeApp({apiKey:"AIzaSyBHgG4mwWSEUBLPS1p2XFtaC8GwPIv2xN8",authDomain:"arquidiocesishermosillo-776dd.firebaseapp.com",projectId:"arquidiocesishermosillo-776dd",storageBucket:"arquidiocesishermosillo-776dd.appspot.com",messagingSenderId:"767127814821",appId:"1:767127814821:web:6c159d62075bcd1271c34c"}),Hm=uB(Ey),lp=AL(Ey),f4=DF(Ey);function LE({postFile:t,arrParroquiaState:e,setGetArr:n,getArr:r,finderFireBase:i}){const[s,o]=U.useState({nombreBautismo:"",fechaBautismo:""});console.log(s.nombreBautismo);const{nombreBautismo:a,fechaBautismo:l}=s,c=({target:M})=>{const{name:A,value:_}=M;o({...s,[A]:_.replace(/\b[a-z]/g,g=>g.toUpperCase())})},[h,f]=U.useState(""),m=M=>{f(M.target.files[0])},v=()=>{if(a.length<=0){alert("El Nombre esta Vacio");return}confirm("Quiere Guardar este Documento?")&&setTimeout(()=>{alert("Documento Guardado")},2e3),s.email=localStorage.userEmailLS,s.nombreBautismo=a.trim(),t(h,s),o({nombreBautismo:"",fechaBautismo:""})},[R,P]=U.useState(!0),[b,E]=U.useState(""),w=()=>{if(b.length<=0){P("Campo de Busqueda Vacio  ✘ ");return}i(b),n(!r),setTimeout(()=>{P(!1)},300),e.length>=1?P(!1):P("Buscando...")},T=({target:M})=>{const{name:A,value:_}=M;E(_.replace(/\b[a-z]/g,g=>g.toUpperCase()))},[x,F]=U.useState(!0);return I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"ButtonsNuevoBuscar",children:[I.jsx("button",{onClick:()=>F(!0),children:"  Nuevo Bautismo "}),I.jsxs("button",{onClick:()=>F(!1),children:[" Buscar "," "]})]}),x?I.jsxs("div",{className:"formInfoToSave",children:[I.jsx("p",{children:"Respaldar FE de Bautismo"}),I.jsx("input",{type:"text",name:"nombreBautismo",placeholder:"Nombre...",value:a,onChange:M=>c(M)}),I.jsx("input",{type:"date",name:"fechaBautismo",value:l,placeholder:"Fecha de Bautismo",onChange:M=>c(M)}),I.jsx("input",{type:"file",accept:".pdf",name:"fileBautismo",onChange:M=>m(M)}),I.jsx("button",{className:"button-primary",onClick:v,children:"GUARDAR"})]}):I.jsxs("div",{className:"formInfoToFind",children:[I.jsxs("div",{children:[I.jsx("label",{htmlFor:"avatar1",children:"Buscar Bautismo con Nombre:"}),I.jsx("input",{type:"search",id:"avatar1",name:"nombreBautismo",className:"w-80",value:b,onChange:M=>T(M),placeholder:"Nombre Completo..."}),I.jsxs("button",{className:"btn-buscar button-primary",onClick:w,children:[" ",I.jsx("span",{className:"lupita",children:"⌕"})]})]}),I.jsx("p",{className:R?"d-none":"cerrar",onClick:()=>P(!R),children:"Cerrar Busqueda ✘"}),I.jsx("p",{className:R?"no-encontrado":"d-none",onClick:()=>P(!0),children:R}),I.jsx("div",{className:R?"d-none":"w-100",children:e.map((M,A)=>I.jsxs("div",{children:[I.jsx("hr",{}),I.jsxs("p",{children:[I.jsx("span",{children:"Nombre:"})," ",M.nombreBautismo]}),I.jsxs("p",{children:[I.jsx("span",{children:"Fecha:"})," ",M.fechaBautismo]}),I.jsxs("p",{children:[I.jsx("span",{children:"Documento:"})," ",M.fileName]}),I.jsx("a",{className:"doc",href:M.fileUrl,target:"_blanck",children:" Abrir Documento"}),I.jsx("hr",{})]},A))})]})]})}function p4({arrParroquiaState:t,setGetArr:e,getArr:n}){return I.jsx(I.Fragment,{children:I.jsx("p",{children:"Usuarios"})})}function m4({postFile:t,arrParroquiaState:e,setGetArr:n,getArr:r}){const[i,s]=U.useState({nombreConfirmacion:"",fechaConfirmacion:""}),{nombreConfirmacion:o,fechaConfirmacion:a}=i,l=({target:g})=>{const{name:S,value:k}=g;s({...i,[S]:k})},[c,h]=U.useState(""),f=g=>{h(g.target.files[0])},m=()=>{if(o.length<=0){alert("El Nombre esta Vacio");return}confirm("Quiere Guardar este Documento?")&&setTimeout(()=>{alert("Documento Guardado")},2e3),i.email=localStorage.userEmailLS,i.nombreConfirmacion=o.trim(),t(c,i),s({nombreConfirmacion:"",fechaConfirmacion:""})},[v,R]=U.useState(!1),[P,b]=U.useState(null),[E,w]=U.useState(""),T=({target:g})=>{F(null);const{name:S,value:k}=g;if(w(k),k.length>4){n(!r);let N=e.filter(C=>C[S].indexOf(k)>-1);N.length>=1?(b(N[0][S]),R(!1)):R(!0)}},[x,F]=U.useState(null),M=({target:g})=>{b(null);const{name:S,value:k}=g;e.filter(C=>C[S]==k).length>=1?(n(!r),F(k),R(!1)):R(!0)},[A,_]=U.useState(!0);return I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"ButtonsNuevoBuscar",children:[I.jsx("button",{onClick:()=>_(!0),children:"Nueva Confirmación"}),I.jsx("button",{onClick:()=>_(!1),children:"Buscar"})]}),A?I.jsxs("div",{className:"formInfoToSave",children:[I.jsx("p",{children:"Respaldar Acta de Confirmacion"}),I.jsx("input",{type:"text",name:"nombreConfirmacion",placeholder:"Nombre...",value:o,onChange:g=>l(g)}),I.jsx("input",{type:"date",name:"fechaConfirmacion",value:a,onChange:g=>l(g)}),I.jsx("input",{type:"file",name:"fileConfirmacion",onChange:g=>f(g)}),I.jsx("button",{className:"button-primary",onClick:m,children:"GUARDAR"})]}):I.jsxs("div",{className:"formInfoToFind",children:[I.jsxs("div",{children:[I.jsx("label",{htmlFor:"avatar1",children:"Buscar Confirmación con Nombre:"}),I.jsx("input",{type:"search",id:"avatar1",name:"nombreConfirmacion",value:E,onChange:g=>T(g),placeholder:"Nombre Completo..."})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"avatar2",children:"Buscar Confirmación con Fecha:"}),I.jsx("input",{type:"date",id:"avatar2",value:x,name:"fechaConfirmacion",onChange:g=>M(g)})]}),I.jsx("p",{className:P===null?"d-none":"cerrar",onClick:()=>b(null),children:"Cerrar Busquedas ✘"}),I.jsx("p",{className:x===null?"d-none":"cerrar",onClick:()=>F(null),children:"Cerrar Busquedas ✘"}),I.jsx("p",{className:v?"no-encontrado":"d-none",onClick:()=>R(!1),children:"No Encontrado ✘"}),P!==null?I.jsx("div",{className:"w-100",children:e.filter(g=>g.nombreConfirmacion===P).map((g,S)=>I.jsxs("div",{children:[I.jsx("hr",{}),I.jsxs("p",{children:[I.jsx("span",{children:"Nombre:"})," ",g.nombreConfirmacion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Fecha:"})," ",g.fechaConfirmacion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Documento:"})," ",g.fileName]}),I.jsx("a",{className:"doc",href:g.fileUrl,target:"_blanck",children:" Abrir Documento"}),I.jsx("hr",{})]},S))}):I.jsx("div",{className:"w-100",children:e.filter(g=>g.fechaConfirmacion===x).map((g,S)=>I.jsxs("div",{children:[I.jsx("hr",{}),I.jsxs("p",{className:"textMarc",children:[I.jsx("span",{children:"Nombre:"})," ",g.nombreConfirmacion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Fecha:"})," ",g.fechaConfirmacion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Documento:"})," ",g.fileName]}),I.jsx("a",{className:"doc",href:g.fileUrl,target:"_blanck",children:" Abrir Documento"}),I.jsx("hr",{})]},S))})]})]})}function g4({postFile:t,arrParroquiaState:e,setGetArr:n,getArr:r}){const[i,s]=U.useState({nombreComunion:"",fechaComunion:""}),{nombreComunion:o,fechaComunion:a}=i,l=({target:g})=>{const{name:S,value:k}=g;s({...i,[S]:k})},[c,h]=U.useState(""),f=g=>{h(g.target.files[0])},m=()=>{if(o.length<=0){alert("El Nombre esta Vacio");return}confirm("Quiere Guardar este Documento?")&&setTimeout(()=>{alert("Documento Guardado")},2e3),i.email=localStorage.userEmailLS,i.nombreComunion=o.trim(),t(c,i),s({nombreComunion:"",fechaComunion:""})},[v,R]=U.useState(!1),[P,b]=U.useState(null),[E,w]=U.useState(""),T=({target:g})=>{F(null);const{name:S,value:k}=g;if(w(k),k.length>4){n(!r);let N=e.filter(C=>C[S].indexOf(k)>-1);N.length>=1?(b(N[0][S]),R(!1)):R(!0)}},[x,F]=U.useState(null),M=({target:g})=>{b(null);const{name:S,value:k}=g;e.filter(C=>C[S]==k).length>=1?(n(!r),F(k),R(!1)):R(!0)},[A,_]=U.useState(!0);return I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"ButtonsNuevoBuscar",children:[I.jsx("button",{onClick:()=>_(!0),children:"Nueva Comunion"}),I.jsx("button",{onClick:()=>_(!1),children:"Buscar"})]}),A?I.jsxs("div",{className:"formInfoToSave",children:[I.jsx("p",{children:"Respaldar Acta de Comunion"}),I.jsx("input",{type:"text",name:"nombreComunion",placeholder:"Nombre...",value:o,onChange:g=>l(g)}),I.jsx("input",{type:"date",name:"fechaComunion",value:a,onChange:g=>l(g)}),I.jsx("input",{type:"file",name:"fileComunion",onChange:g=>f(g)}),I.jsx("button",{className:"button-primary",onClick:m,children:"GUARDAR"})]}):I.jsxs("div",{className:"formInfoToFind",children:[I.jsxs("div",{children:[I.jsx("label",{htmlFor:"avatar1",children:"Buscar Comunion con Nombre:"}),I.jsx("input",{type:"search",id:"avatar1",name:"nombreComunion",value:E,onChange:g=>T(g),placeholder:"Nombre Completo..."})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"avatar2",children:"Buscar Comunion con Fecha:"}),I.jsx("input",{type:"date",id:"avatar2",value:x,name:"fechaComunion",onChange:g=>M(g)})]}),I.jsx("p",{className:P===null?"d-none":"cerrar",onClick:()=>b(null),children:"Cerrar Busquedas ✘"}),I.jsx("p",{className:x===null?"d-none":"cerrar",onClick:()=>F(null),children:"Cerrar Busquedas ✘"}),I.jsx("p",{className:v?"no-encontrado":"d-none",onClick:()=>R(!1),children:"No Encontrado ✘"}),P!==null?I.jsx("div",{className:"w-100",children:e.filter(g=>g.nombreComunion===P).map((g,S)=>I.jsxs("div",{children:[I.jsx("hr",{}),I.jsxs("p",{children:[I.jsx("span",{children:"Nombre:"})," ",g.nombreComunion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Fecha:"})," ",g.fechaComunion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Documento:"})," ",g.fileName]}),I.jsx("a",{className:"doc",href:g.fileUrl,target:"_blanck",children:" Abrir Documento"}),I.jsx("hr",{})]},S))}):I.jsx("div",{className:"w-100",children:e.filter(g=>g.fechaComunion===x).map((g,S)=>I.jsxs("div",{children:[I.jsx("hr",{}),I.jsxs("p",{className:"textMarc",children:[I.jsx("span",{children:"Nombre:"})," ",g.nombreComunion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Fecha:"})," ",g.fechaComunion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Documento:"})," ",g.fileName]}),I.jsx("a",{className:"doc",href:g.fileUrl,target:"_blanck",children:" Abrir Documento"}),I.jsx("hr",{})]},S))})]})]})}function _4({postFile:t,arrParroquiaState:e,setGetArr:n,getArr:r}){const[i,s]=U.useState({nombreMatrimonio:"",fechaMatrimonio:""}),{nombreMatrimonio:o,fechaMatrimonio:a}=i,l=({target:g})=>{const{name:S,value:k}=g;s({...i,[S]:k})},[c,h]=U.useState(""),f=g=>{h(g.target.files[0])},m=()=>{if(o.length<=0){alert("El Nombre esta Vacio");return}confirm("Quiere Guardar este Documento?")&&setTimeout(()=>{alert("Documento Guardado")},2e3),i.email=localStorage.userEmailLS,i.nombreMatrimonio=o.trim(),t(c,i),s({nombreMatrimonio:"",fechaMatrimonio:""})},[v,R]=U.useState(!1),[P,b]=U.useState(null),[E,w]=U.useState(""),T=({target:g})=>{F(null);const{name:S,value:k}=g;if(w(k),k.length>4){n(!r);let N=e.filter(C=>C[S].indexOf(k)>-1);N.length>=1?(b(N[0][S]),R(!1)):R(!0)}},[x,F]=U.useState(null),M=({target:g})=>{b(null);const{name:S,value:k}=g;e.filter(C=>C[S]==k).length>=1?(n(!r),F(k),R(!1)):R(!0)},[A,_]=U.useState(!0);return I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"ButtonsNuevoBuscar",children:[I.jsx("button",{onClick:()=>_(!0),children:"Nuevo Matrimonio"}),I.jsx("button",{onClick:()=>_(!1),children:"Buscar"})]}),A?I.jsxs("div",{className:"formInfoToSave",children:[I.jsx("p",{children:"Respaldar Acta de Matrimonio"}),I.jsx("input",{type:"text",name:"nombreMatrimonio",placeholder:"Nombre de Esposo...",value:o,onChange:g=>l(g)}),I.jsx("input",{type:"date",name:"fechaMatrimonio",value:a,onChange:g=>l(g)}),I.jsx("input",{type:"file",name:"fileMatrimonio",onChange:g=>f(g)}),I.jsx("button",{className:"button-primary",onClick:m,children:"GUARDAR"})]}):I.jsxs("div",{className:"formInfoToFind",children:[I.jsxs("div",{children:[I.jsx("label",{htmlFor:"avatar1",children:"Buscar Matrimonio con Nombre:"}),I.jsx("input",{type:"search",id:"avatar1",name:"nombreMatrimonio",value:E,onChange:g=>T(g),placeholder:"Nombre Completo de Esposo..."})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"avatar2",children:"Buscar Matrimonio con Fecha:"}),I.jsx("input",{type:"date",id:"avatar2",value:x,name:"fechaMatrimonio",onChange:g=>M(g)})]}),I.jsx("p",{className:P===null?"d-none":"cerrar",onClick:()=>b(null),children:"Cerrar Busquedas ✘"}),I.jsx("p",{className:x===null?"d-none":"cerrar",onClick:()=>F(null),children:"Cerrar Busquedas ✘"}),I.jsx("p",{className:v?"no-encontrado":"d-none",onClick:()=>R(!1),children:"No Encontrado ✘"}),P!==null?I.jsx("div",{className:"w-100",children:e.filter(g=>g.nombreMatrimonio===P).map((g,S)=>I.jsxs("div",{children:[I.jsx("hr",{}),I.jsxs("p",{children:[I.jsx("span",{children:"Nombre:"})," ",g.nombreMatrimonio]}),I.jsxs("p",{children:[I.jsx("span",{children:"Fecha:"})," ",g.fechaMatrimonio]}),I.jsxs("p",{children:[I.jsx("span",{children:"Documento:"})," ",g.fileName]}),I.jsx("a",{className:"doc",href:g.fileUrl,target:"_blanck",children:" Abrir Documento"}),I.jsx("hr",{})]},S))}):I.jsx("div",{className:"w-100",children:e.filter(g=>g.fechaMatrimonio===x).map((g,S)=>I.jsxs("div",{children:[I.jsx("hr",{}),I.jsxs("p",{className:"textMarc",children:[I.jsx("span",{children:"Nombre:"})," ",g.nombreMatrimonio]}),I.jsxs("p",{children:[I.jsx("span",{children:"Fecha:"})," ",g.fechaMatrimonio]}),I.jsxs("p",{children:[I.jsx("span",{children:"Documento:"})," ",g.fileName]}),I.jsx("a",{className:"doc",href:g.fileUrl,target:"_blanck",children:" Abrir Documento"}),I.jsx("hr",{})]},S))})]})]})}function y4({postFile:t,arrParroquiaState:e,setGetArr:n,getArr:r}){const[i,s]=U.useState({nombreDefuncion:"",fechaDefuncion:""}),{nombreDefuncion:o,fechaDefuncion:a}=i,l=({target:g})=>{const{name:S,value:k}=g;s({...i,[S]:k})},[c,h]=U.useState(""),f=g=>{h(g.target.files[0])},m=()=>{if(o.length<=0){alert("El Nombre esta Vacio");return}confirm("Quiere Guardar este Documento?")&&setTimeout(()=>{alert("Documento Guardado")},2e3),i.email=localStorage.userEmailLS,i.nombreDefuncion=o.trim(),t(c,i),s({nombreDefuncion:"",fechaDefuncion:""})},[v,R]=U.useState(!1),[P,b]=U.useState(null),[E,w]=U.useState(""),T=({target:g})=>{F(null);const{name:S,value:k}=g;if(w(k),k.length>4){n(!r);let N=e.filter(C=>C[S].indexOf(k)>-1);N.length>=1?(b(N[0][S]),R(!1)):R(!0)}},[x,F]=U.useState(null),M=({target:g})=>{b(null);const{name:S,value:k}=g;e.filter(C=>C[S]==k).length>=1?(n(!r),F(k),R(!1)):R(!0)},[A,_]=U.useState(!0);return I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"ButtonsNuevoBuscar",children:[I.jsx("button",{onClick:()=>_(!0),children:"Nueva Defunción"}),I.jsx("button",{onClick:()=>_(!1),children:"Buscar"})]}),A?I.jsxs("div",{className:"formInfoToSave",children:[I.jsx("p",{children:"Respaldar Acta de Defunción"}),I.jsx("input",{type:"text",name:"nombreDefuncion",placeholder:"Nombre de Esposo...",value:o,onChange:g=>l(g)}),I.jsx("input",{type:"date",name:"fechaDefuncion",value:a,onChange:g=>l(g)}),I.jsx("input",{type:"file",name:"fileDefuncion",onChange:g=>f(g)}),I.jsx("button",{className:"button-primary",onClick:m,children:"GUARDAR"})]}):I.jsxs("div",{className:"formInfoToFind",children:[I.jsxs("div",{children:[I.jsx("label",{htmlFor:"avatar1",children:"Buscar Defunción con Nombre:"}),I.jsx("input",{type:"search",id:"avatar1",name:"nombreDefuncion",value:E,onChange:g=>T(g),placeholder:"Nombre Completo de Esposo..."})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"avatar2",children:"Buscar Defunción con Fecha:"}),I.jsx("input",{type:"date",id:"avatar2",value:x,name:"fechaDefuncion",onChange:g=>M(g)})]}),I.jsx("p",{className:P===null?"d-none":"cerrar",onClick:()=>b(null),children:"Cerrar Busquedas ✘"}),I.jsx("p",{className:x===null?"d-none":"cerrar",onClick:()=>F(null),children:"Cerrar Busquedas ✘"}),I.jsx("p",{className:v?"no-encontrado":"d-none",onClick:()=>R(!1),children:"No Encontrado ✘"}),P!==null?I.jsx("div",{className:"w-100",children:e.filter(g=>g.nombreDefuncion===P).map((g,S)=>I.jsxs("div",{children:[I.jsx("hr",{}),I.jsxs("p",{children:[I.jsx("span",{children:"Nombre:"})," ",g.nombreDefuncion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Fecha:"})," ",g.fechaDefuncion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Documento:"})," ",g.fileName]}),I.jsx("a",{className:"doc",href:g.fileUrl,target:"_blanck",children:" Abrir Documento"}),I.jsx("hr",{})]},S))}):I.jsx("div",{className:"w-100",children:e.filter(g=>g.fechaDefuncion===x).map((g,S)=>I.jsxs("div",{children:[I.jsx("hr",{}),I.jsxs("p",{className:"textMarc",children:[I.jsx("span",{children:"Nombre:"})," ",g.nombreDefuncion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Fecha:"})," ",g.fechaDefuncion]}),I.jsxs("p",{children:[I.jsx("span",{children:"Documento:"})," ",g.fileName]}),I.jsx("a",{className:"doc",href:g.fileUrl,target:"_blanck",children:" Abrir Documento"}),I.jsx("hr",{})]},S))})]})]})}const v4="https://xipeRafa.github.io/Respalder/assets/abc-EqxUIFmM.jpeg",w4="_loginContainer_1xd2r_1",I4="_borderB_1xd2r_71",E4="_borderBgray_1xd2r_79",T4="_inputBG_1xd2r_89",S4="_colorRed_1xd2r_118",R4="_hello_1xd2r_122",A4="_alabado_1xd2r_129",wn={loginContainer:w4,borderB:I4,borderBgray:E4,inputBG:T4,colorRed:S4,hello:R4,alabado:A4},P4=()=>{const t=async(r,i,s)=>{try{await eC(r,i,s),e(r,i,s),localStorage.setItem("userEmailLS",i)}catch(o){console.error("code.error",o.code);const a={"auth/email-already-in-use":()=>alert("El Correo ya esta en Uso."),"auth/operation-not-allowed":()=>alert("Operacion No Permitida."),"auth/weak-password":()=>alert("La Contraseña es muy débil."),"auth/invalid-email":()=>alert("El Correo No es Valido.")};(c=>{a[c]()})(o.code)}},e=(r,i,s)=>{tC(r,i,s).then(o=>{const a=o.user;localStorage.setItem("userEmailLS",a.email),location.reload()}).catch(o=>{console.log(o.code),console.log(o.message);const a={"auth/operation-not-allowed":()=>alert("Operacion No Permitida."),"auth/invalid-credential":()=>alert("Contraseña o Correo son Incorrrectos."),"auth/invalid-email":()=>alert("El Correo No es Valido")};(c=>{a[c]()})(o.code)})};return[t,e,()=>{AU(Hm),localStorage.removeItem("userEmailLS"),location.reload()}]};function C4({saveCat:t}){const[e,n,r]=P4(),[i,s]=U.useState(""),[o,a]=U.useState({name:"",email:"",password:"",password2:""}),{name:l,email:c,password:h,password2:f}=o,m=E=>{s("");const{name:w,value:T}=E.target;a({...o,[w]:T})};console.log(l);const v=()=>{if(s(""),l.length<1){s("Nombre No Escrito");return}if(c.length<1){s("Correo No Escrito");return}if(h!==f){s("Passwords No son Iguales");return}if(h.length<6){s("La Clave es muy Corta Use 6 Caracteres Minimo");return}e(Hm,c,h),t(o),localStorage.setItem("userName",l)},R=()=>{if(s(""),c.length<1){s("Correo No Escrito");return}if(h.length<6){s("Claves es muy corta Use 6 caracteres Minimo");return}n(Hm,c,h),localStorage.setItem("userEmailLS",c)},[P,b]=U.useState(!0);return I.jsx(I.Fragment,{children:localStorage.getItem("userEmailLS")===null?I.jsxs("div",{className:wn.loginContainer,children:[I.jsx("div",{children:I.jsx("img",{src:v4})}),I.jsxs("div",{children:[I.jsxs("div",{children:[I.jsx("div",{className:P?wn.borderB:wn.borderBgray,onClick:()=>{b(!0),s("")},children:"REGISTRO"}),I.jsx("div",{className:P?wn.borderBgray:wn.borderB,onClick:()=>{b(!1),s("")},children:"ENTRAR"})]}),I.jsx("div",{children:P?I.jsxs("div",{className:wn.inputBG,children:[I.jsx("div",{children:I.jsx("input",{type:"text",name:"name",value:l,onChange:E=>m(E),placeholder:"Nombre"})}),I.jsx("div",{children:I.jsx("input",{type:"email",name:"email",value:c,onChange:E=>m(E),placeholder:"Correo"})}),I.jsx("div",{children:I.jsx("input",{type:"password",name:"password",value:h,onChange:E=>m(E),placeholder:"Password"})}),I.jsx("div",{children:I.jsx("input",{type:"password",name:"password2",value:f,onChange:E=>m(E),placeholder:"Confirmar Password"})}),I.jsx("div",{children:I.jsx("button",{onClick:()=>v(),children:"ENVIAR"})}),I.jsx("span",{className:wn.colorRed,children:i})]}):I.jsxs("div",{className:wn.inputBG,children:[I.jsx("div",{children:I.jsx("input",{type:"email",name:"email",onChange:E=>m(E),placeholder:"Correo"})}),I.jsx("div",{children:I.jsx("input",{type:"password",name:"password",onChange:E=>m(E),placeholder:"Password"})}),I.jsx("div",{children:I.jsx("button",{onClick:()=>R(),children:"ENTRAR"})}),I.jsx("span",{className:wn.colorRed,children:i})]})})]})]}):I.jsxs("div",{children:[I.jsxs("div",{className:wn.hello,children:[I.jsx("span",{children:localStorage.userEmailLS.split("@")[0]}),I.jsx("button",{onClick:()=>r(),children:"SALIR"})]}),I.jsx("h1",{className:wn.alabado,children:"¡ALABADO SEA JESUCRISTO!"}),I.jsxs("h4",{children:[I.jsx("b",{children:"¡Hola!"})," Bienvenido ",localStorage.userName," Seleccioná una Opción en el Menú"]})]})})}function k4(){const[t,e]=U.useState(!0),n=window.innerWidth,r=()=>{n<999&&e(!0)};return I.jsx("div",{className:"navBar3",children:localStorage.getItem("userEmailLS")!==null&&I.jsxs(I.Fragment,{children:[I.jsxs("div",{onClick:()=>e(!t),className:"hamburger",children:[I.jsxs("div",{className:"menu-bar",children:[I.jsx("div",{className:"uno"}),I.jsx("div",{className:"dos"}),I.jsx("div",{className:"tres"})]}),I.jsx("p",{className:"menuIcons",children:t?I.jsx("b",{className:"menuIcon",children:"MENU"}):I.jsx("b",{className:"menuIconX",children:"✘"})})]}),I.jsxs("div",{className:t?"menu3 ":"menu3 display",onClick:r,children:[I.jsx(Oi,{to:"/Respalder",children:"Mi Parroquia"}),I.jsx(Oi,{to:"/Respalder/bautismos",children:"Bautismos"}),I.jsx(Oi,{to:"/Respalder/comuniones",children:" Comuniones"}),I.jsx(Oi,{to:"/Respalder/confirmaciones",children:" Confirmaciones "}),I.jsx(Oi,{to:"/Respalder/matrimonios",children:" Matrimonios"}),I.jsx(Oi,{to:"/Respalder/defunciones",children:" Defunciones"}),I.jsx(Oi,{to:"/Respalder/usuarios",children:" Usuarios"})]}),"   "]})})}function b4(){function t(v){let R=v.charAt(0).toUpperCase()+v.slice(1);return v.slice(-2,-1)==="e"?"nombre"+R.slice(0,-2):"nombre"+R.slice(0,-1)}const e=Xo();let n;n=e.pathname.split("/")[2];let r=t(n||"a");const[i,s]=U.useState(""),[o,a]=U.useState([]),[l,c]=U.useState(!1);console.log(o),U.useEffect(()=>{const v=rr(gl(lp,n||"bautismos"),Nm("email","==",localStorage.getItem("userEmailLS")),Nm(r,"==",i.trim()));XA(v).then(R=>{a(R.docs.map(P=>({...P.data(),id:P.id})))}).catch(R=>{console.error(R)})},[l]);const h=v=>{s(v)},f=(v,R)=>{const P=gl(lp,n||"bautismos"),b=Vm(f4,`${n}-Files/${Date.now()}/${v==null?void 0:v.name}`);RF(b,v).then(()=>{SP(b).then(E=>{R.fileName=v.name,R.fileUrl=E,Dm(P,R)})}).catch(E=>{console.log("postFile Error, App,jsx, linea 82"),console.log(E)})},m=v=>{delete v.password,delete v.name;const R=gl(lp,"cat");Dm(R,v).then(P=>{console.log(P)}).catch(P=>{console.log("saveCat Error, App.jsx, linea 113"),console.log(P)})};return I.jsxs("div",{className:localStorage.getItem("userEmailLS")!==null?"containerApp":"containerApp2",children:[I.jsx(k4,{}),e.pathname=="/Respalder/"&&localStorage.getItem("userEmailLS")!==null?"":I.jsx("h3",{className:localStorage.getItem("userEmailLS")!==null?"registroParroquial-h3":"registroParroquial-h3-2",children:"RESPALDER PARROQUIAL"}),I.jsxs(Cx,{children:[I.jsx(nr,{path:"/Respalder",element:I.jsx(C4,{saveCat:m})}),I.jsx(nr,{path:"/Respalder/confirmaciones",element:I.jsx(m4,{postFile:f,arrParroquiaState:o,setGetArr:c,getArr:l})}),I.jsx(nr,{path:"/Respalder/comuniones",element:I.jsx(g4,{postFile:f,arrParroquiaState:o,setGetArr:c,getArr:l})}),I.jsx(nr,{path:"/Respalder/matrimonios",element:I.jsx(_4,{postFile:f,arrParroquiaState:o,setGetArr:c,getArr:l})}),I.jsx(nr,{path:"/Respalder/defunciones",element:I.jsx(y4,{postFile:f,arrParroquiaState:o,setGetArr:c,getArr:l})}),I.jsx(nr,{path:"/Respalder/bautismos",element:I.jsx(LE,{finderFireBase:h,postFile:f,arrParroquiaState:o,setGetArr:c,getArr:l})}),I.jsx(nr,{path:"/Respalder/usuarios",element:I.jsx(p4,{postFile:f,arrParroquiaState:o,setGetArr:c,getArr:l})}),I.jsx(nr,{path:"*",element:I.jsx(LE,{postFile:f,arrParroquiaState:o,setGetArr:c,getArr:l})})]})]})}up.createRoot(document.getElementById("root")).render(I.jsx(Lx,{children:I.jsx(b4,{})}));
