(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function zd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Js={exports:{}},Ca={},Zs={exports:{}},L={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mn=Symbol.for("react.element"),Id=Symbol.for("react.portal"),_d=Symbol.for("react.fragment"),Ld=Symbol.for("react.strict_mode"),Fd=Symbol.for("react.profiler"),Ad=Symbol.for("react.provider"),Dd=Symbol.for("react.context"),Od=Symbol.for("react.forward_ref"),Md=Symbol.for("react.suspense"),Wd=Symbol.for("react.memo"),Ud=Symbol.for("react.lazy"),Tl=Symbol.iterator;function $d(e){return e===null||typeof e!="object"?null:(e=Tl&&e[Tl]||e["@@iterator"],typeof e=="function"?e:null)}var ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tc=Object.assign,rc={};function jr(e,t,r){this.props=e,this.context=t,this.refs=rc,this.updater=r||ec}jr.prototype.isReactComponent={};jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nc(){}nc.prototype=jr.prototype;function So(e,t,r){this.props=e,this.context=t,this.refs=rc,this.updater=r||ec}var Eo=So.prototype=new nc;Eo.constructor=So;tc(Eo,jr.prototype);Eo.isPureReactComponent=!0;var zl=Array.isArray,ac=Object.prototype.hasOwnProperty,Co={current:null},ic={key:!0,ref:!0,__self:!0,__source:!0};function oc(e,t,r){var n,a={},o=null,l=null;if(t!=null)for(n in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)ac.call(t,n)&&!ic.hasOwnProperty(n)&&(a[n]=t[n]);var s=arguments.length-2;if(s===1)a.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];a.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)a[n]===void 0&&(a[n]=s[n]);return{$$typeof:mn,type:e,key:o,ref:l,props:a,_owner:Co.current}}function Bd(e,t){return{$$typeof:mn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Po(e){return typeof e=="object"&&e!==null&&e.$$typeof===mn}function Hd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var Il=/\/+/g;function Ka(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hd(""+e.key):t.toString(36)}function $n(e,t,r,n,a){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case mn:case Id:l=!0}}if(l)return l=e,a=a(l),e=n===""?"."+Ka(l,0):n,zl(a)?(r="",e!=null&&(r=e.replace(Il,"$&/")+"/"),$n(a,t,r,"",function(u){return u})):a!=null&&(Po(a)&&(a=Bd(a,r+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(Il,"$&/")+"/")+e)),t.push(a)),1;if(l=0,n=n===""?".":n+":",zl(e))for(var s=0;s<e.length;s++){o=e[s];var c=n+Ka(o,s);l+=$n(o,t,r,c,a)}else if(c=$d(e),typeof c=="function")for(e=c.call(e),s=0;!(o=e.next()).done;)o=o.value,c=n+Ka(o,s++),l+=$n(o,t,r,c,a);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function kn(e,t,r){if(e==null)return e;var n=[],a=0;return $n(e,n,"","",function(o){return t.call(r,o,a++)}),n}function qd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var de={current:null},Bn={transition:null},Vd={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:Bn,ReactCurrentOwner:Co};L.Children={map:kn,forEach:function(e,t,r){kn(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return kn(e,function(){t++}),t},toArray:function(e){return kn(e,function(t){return t})||[]},only:function(e){if(!Po(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};L.Component=jr;L.Fragment=_d;L.Profiler=Fd;L.PureComponent=So;L.StrictMode=Ld;L.Suspense=Md;L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vd;L.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=tc({},e.props),a=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=Co.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)ac.call(t,c)&&!ic.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:mn,type:e.type,key:a,ref:o,props:n,_owner:l}};L.createContext=function(e){return e={$$typeof:Dd,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Ad,_context:e},e.Consumer=e};L.createElement=oc;L.createFactory=function(e){var t=oc.bind(null,e);return t.type=e,t};L.createRef=function(){return{current:null}};L.forwardRef=function(e){return{$$typeof:Od,render:e}};L.isValidElement=Po;L.lazy=function(e){return{$$typeof:Ud,_payload:{_status:-1,_result:e},_init:qd}};L.memo=function(e,t){return{$$typeof:Wd,type:e,compare:t===void 0?null:t}};L.startTransition=function(e){var t=Bn.transition;Bn.transition={};try{e()}finally{Bn.transition=t}};L.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};L.useCallback=function(e,t){return de.current.useCallback(e,t)};L.useContext=function(e){return de.current.useContext(e)};L.useDebugValue=function(){};L.useDeferredValue=function(e){return de.current.useDeferredValue(e)};L.useEffect=function(e,t){return de.current.useEffect(e,t)};L.useId=function(){return de.current.useId()};L.useImperativeHandle=function(e,t,r){return de.current.useImperativeHandle(e,t,r)};L.useInsertionEffect=function(e,t){return de.current.useInsertionEffect(e,t)};L.useLayoutEffect=function(e,t){return de.current.useLayoutEffect(e,t)};L.useMemo=function(e,t){return de.current.useMemo(e,t)};L.useReducer=function(e,t,r){return de.current.useReducer(e,t,r)};L.useRef=function(e){return de.current.useRef(e)};L.useState=function(e){return de.current.useState(e)};L.useSyncExternalStore=function(e,t,r){return de.current.useSyncExternalStore(e,t,r)};L.useTransition=function(){return de.current.useTransition()};L.version="18.2.0";Zs.exports=L;var v=Zs.exports;const Qd=zd(v);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yd=v,Gd=Symbol.for("react.element"),Kd=Symbol.for("react.fragment"),Xd=Object.prototype.hasOwnProperty,Jd=Yd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Zd={key:!0,ref:!0,__self:!0,__source:!0};function lc(e,t,r){var n,a={},o=null,l=null;r!==void 0&&(o=""+r),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)Xd.call(t,n)&&!Zd.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)a[n]===void 0&&(a[n]=t[n]);return{$$typeof:Gd,type:e,key:o,ref:l,props:a,_owner:Jd.current}}Ca.Fragment=Kd;Ca.jsx=lc;Ca.jsxs=lc;Js.exports=Ca;var i=Js.exports,Ci={},sc={exports:{}},Ne={},cc={exports:{}},uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,z){var I=R.length;R.push(z);e:for(;0<I;){var Y=I-1>>>1,Z=R[Y];if(0<a(Z,z))R[Y]=z,R[I]=Z,I=Y;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var z=R[0],I=R.pop();if(I!==z){R[0]=I;e:for(var Y=0,Z=R.length,bn=Z>>>1;Y<bn;){var It=2*(Y+1)-1,Ga=R[It],_t=It+1,jn=R[_t];if(0>a(Ga,I))_t<Z&&0>a(jn,Ga)?(R[Y]=jn,R[_t]=I,Y=_t):(R[Y]=Ga,R[It]=I,Y=It);else if(_t<Z&&0>a(jn,I))R[Y]=jn,R[_t]=I,Y=_t;else break e}}return z}function a(R,z){var I=R.sortIndex-z.sortIndex;return I!==0?I:R.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var c=[],u=[],m=1,h=null,g=3,x=!1,w=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(R){for(var z=r(u);z!==null;){if(z.callback===null)n(u);else if(z.startTime<=R)n(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=r(u)}}function j(R){if(b=!1,p(R),!w)if(r(c)!==null)w=!0,Qa(N);else{var z=r(u);z!==null&&Ya(j,z.startTime-R)}}function N(R,z){w=!1,b&&(b=!1,d(T),T=-1),x=!0;var I=g;try{for(p(z),h=r(c);h!==null&&(!(h.expirationTime>z)||R&&!O());){var Y=h.callback;if(typeof Y=="function"){h.callback=null,g=h.priorityLevel;var Z=Y(h.expirationTime<=z);z=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===r(c)&&n(c),p(z)}else n(c);h=r(c)}if(h!==null)var bn=!0;else{var It=r(u);It!==null&&Ya(j,It.startTime-z),bn=!1}return bn}finally{h=null,g=I,x=!1}}var S=!1,C=null,T=-1,A=5,E=-1;function O(){return!(e.unstable_now()-E<A)}function Je(){if(C!==null){var R=e.unstable_now();E=R;var z=!0;try{z=C(!0,R)}finally{z?Ae():(S=!1,C=null)}}else S=!1}var Ae;if(typeof f=="function")Ae=function(){f(Je)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,Ve=zt.port2;zt.port1.onmessage=Je,Ae=function(){Ve.postMessage(null)}}else Ae=function(){y(Je,0)};function Qa(R){C=R,S||(S=!0,Ae())}function Ya(R,z){T=y(function(){R(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,Qa(N))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var I=g;g=z;try{return R()}finally{g=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var I=g;g=R;try{return z()}finally{g=I}},e.unstable_scheduleCallback=function(R,z,I){var Y=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?Y+I:Y):I=Y,R){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=I+Z,R={id:m++,callback:z,priorityLevel:R,startTime:I,expirationTime:Z,sortIndex:-1},I>Y?(R.sortIndex=I,t(u,R),r(c)===null&&R===r(u)&&(b?(d(T),T=-1):b=!0,Ya(j,I-Y))):(R.sortIndex=Z,t(c,R),w||x||(w=!0,Qa(N))),R},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(R){var z=g;return function(){var I=g;g=z;try{return R.apply(this,arguments)}finally{g=I}}}})(uc);cc.exports=uc;var ef=cc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc=v,ke=ef;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var fc=new Set,Kr={};function Qt(e,t){mr(e,t),mr(e+"Capture",t)}function mr(e,t){for(Kr[e]=t,e=0;e<t.length;e++)fc.add(t[e])}var at=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pi=Object.prototype.hasOwnProperty,tf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_l={},Ll={};function rf(e){return Pi.call(Ll,e)?!0:Pi.call(_l,e)?!1:tf.test(e)?Ll[e]=!0:(_l[e]=!0,!1)}function nf(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function af(e,t,r,n){if(t===null||typeof t>"u"||nf(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function fe(e,t,r,n,a,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ro=/[\-:]([a-z])/g;function To(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ro,To);ae[t]=new fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ro,To);ae[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ro,To);ae[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function zo(e,t,r,n){var a=ae.hasOwnProperty(t)?ae[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(af(t,r,a,n)&&(r=null),n||a===null?rf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var ct=dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Nn=Symbol.for("react.element"),Kt=Symbol.for("react.portal"),Xt=Symbol.for("react.fragment"),Io=Symbol.for("react.strict_mode"),Ri=Symbol.for("react.profiler"),pc=Symbol.for("react.provider"),mc=Symbol.for("react.context"),_o=Symbol.for("react.forward_ref"),Ti=Symbol.for("react.suspense"),zi=Symbol.for("react.suspense_list"),Lo=Symbol.for("react.memo"),ft=Symbol.for("react.lazy"),hc=Symbol.for("react.offscreen"),Fl=Symbol.iterator;function Pr(e){return e===null||typeof e!="object"?null:(e=Fl&&e[Fl]||e["@@iterator"],typeof e=="function"?e:null)}var V=Object.assign,Xa;function Dr(e){if(Xa===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Xa=t&&t[1]||""}return`
`+Xa+e}var Ja=!1;function Za(e,t){if(!e||Ja)return"";Ja=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var a=u.stack.split(`
`),o=n.stack.split(`
`),l=a.length-1,s=o.length-1;1<=l&&0<=s&&a[l]!==o[s];)s--;for(;1<=l&&0<=s;l--,s--)if(a[l]!==o[s]){if(l!==1||s!==1)do if(l--,s--,0>s||a[l]!==o[s]){var c=`
`+a[l].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=l&&0<=s);break}}}finally{Ja=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Dr(e):""}function of(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Za(e.type,!1),e;case 11:return e=Za(e.type.render,!1),e;case 1:return e=Za(e.type,!0),e;default:return""}}function Ii(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Xt:return"Fragment";case Kt:return"Portal";case Ri:return"Profiler";case Io:return"StrictMode";case Ti:return"Suspense";case zi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case mc:return(e.displayName||"Context")+".Consumer";case pc:return(e._context.displayName||"Context")+".Provider";case _o:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Lo:return t=e.displayName||null,t!==null?t:Ii(e.type)||"Memo";case ft:t=e._payload,e=e._init;try{return Ii(e(t))}catch{}}return null}function lf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ii(t);case 8:return t===Io?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Et(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sf(e){var t=gc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,o=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(l){n=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(l){n=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sn(e){e._valueTracker||(e._valueTracker=sf(e))}function vc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=gc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ra(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _i(e,t){var r=t.checked;return V({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Al(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=Et(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yc(e,t){t=t.checked,t!=null&&zo(e,"checked",t,!1)}function Li(e,t){yc(e,t);var r=Et(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fi(e,t.type,r):t.hasOwnProperty("defaultValue")&&Fi(e,t.type,Et(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Dl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Fi(e,t,r){(t!=="number"||ra(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Or=Array.isArray;function sr(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+Et(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Ai(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return V({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ol(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(k(92));if(Or(r)){if(1<r.length)throw Error(k(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Et(r)}}function xc(e,t){var r=Et(t.value),n=Et(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function Ml(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function wc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Di(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?wc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var En,bc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(En=En||document.createElement("div"),En.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=En.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Xr(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},cf=["Webkit","ms","Moz","O"];Object.keys(Ur).forEach(function(e){cf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ur[t]=Ur[e]})});function jc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ur.hasOwnProperty(e)&&Ur[e]?(""+t).trim():t+"px"}function kc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=jc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var uf=V({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oi(e,t){if(t){if(uf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Mi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wi=null;function Fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ui=null,cr=null,ur=null;function Wl(e){if(e=vn(e)){if(typeof Ui!="function")throw Error(k(280));var t=e.stateNode;t&&(t=Ia(t),Ui(e.stateNode,e.type,t))}}function Nc(e){cr?ur?ur.push(e):ur=[e]:cr=e}function Sc(){if(cr){var e=cr,t=ur;if(ur=cr=null,Wl(e),t)for(e=0;e<t.length;e++)Wl(t[e])}}function Ec(e,t){return e(t)}function Cc(){}var ei=!1;function Pc(e,t,r){if(ei)return e(t,r);ei=!0;try{return Ec(e,t,r)}finally{ei=!1,(cr!==null||ur!==null)&&(Cc(),Sc())}}function Jr(e,t){var r=e.stateNode;if(r===null)return null;var n=Ia(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(k(231,t,typeof r));return r}var $i=!1;if(at)try{var Rr={};Object.defineProperty(Rr,"passive",{get:function(){$i=!0}}),window.addEventListener("test",Rr,Rr),window.removeEventListener("test",Rr,Rr)}catch{$i=!1}function df(e,t,r,n,a,o,l,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(m){this.onError(m)}}var $r=!1,na=null,aa=!1,Bi=null,ff={onError:function(e){$r=!0,na=e}};function pf(e,t,r,n,a,o,l,s,c){$r=!1,na=null,df.apply(ff,arguments)}function mf(e,t,r,n,a,o,l,s,c){if(pf.apply(this,arguments),$r){if($r){var u=na;$r=!1,na=null}else throw Error(k(198));aa||(aa=!0,Bi=u)}}function Yt(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Rc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ul(e){if(Yt(e)!==e)throw Error(k(188))}function hf(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(k(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var o=a.alternate;if(o===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===r)return Ul(a),e;if(o===n)return Ul(a),t;o=o.sibling}throw Error(k(188))}if(r.return!==n.return)r=a,n=o;else{for(var l=!1,s=a.child;s;){if(s===r){l=!0,r=a,n=o;break}if(s===n){l=!0,n=a,r=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===r){l=!0,r=o,n=a;break}if(s===n){l=!0,n=o,r=a;break}s=s.sibling}if(!l)throw Error(k(189))}}if(r.alternate!==n)throw Error(k(190))}if(r.tag!==3)throw Error(k(188));return r.stateNode.current===r?e:t}function Tc(e){return e=hf(e),e!==null?zc(e):null}function zc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zc(e);if(t!==null)return t;e=e.sibling}return null}var Ic=ke.unstable_scheduleCallback,$l=ke.unstable_cancelCallback,gf=ke.unstable_shouldYield,vf=ke.unstable_requestPaint,G=ke.unstable_now,yf=ke.unstable_getCurrentPriorityLevel,Ao=ke.unstable_ImmediatePriority,_c=ke.unstable_UserBlockingPriority,ia=ke.unstable_NormalPriority,xf=ke.unstable_LowPriority,Lc=ke.unstable_IdlePriority,Pa=null,Ke=null;function wf(e){if(Ke&&typeof Ke.onCommitFiberRoot=="function")try{Ke.onCommitFiberRoot(Pa,e,void 0,(e.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:kf,bf=Math.log,jf=Math.LN2;function kf(e){return e>>>=0,e===0?32:31-(bf(e)/jf|0)|0}var Cn=64,Pn=4194304;function Mr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function oa(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,o=e.pingedLanes,l=r&268435455;if(l!==0){var s=l&~a;s!==0?n=Mr(s):(o&=l,o!==0&&(n=Mr(o)))}else l=r&~a,l!==0?n=Mr(l):o!==0&&(n=Mr(o));if(n===0)return 0;if(t!==0&&t!==n&&!(t&a)&&(a=n&-n,o=t&-t,a>=o||a===16&&(o&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Ue(t),a=1<<r,n|=e[r],t&=~a;return n}function Nf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-Ue(o),s=1<<l,c=a[l];c===-1?(!(s&r)||s&n)&&(a[l]=Nf(s,t)):c<=t&&(e.expiredLanes|=s),o&=~s}}function Hi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Fc(){var e=Cn;return Cn<<=1,!(Cn&4194240)&&(Cn=64),e}function ti(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function hn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ue(t),e[t]=r}function Ef(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Ue(r),o=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~o}}function Do(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Ue(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var D=0;function Ac(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dc,Oo,Oc,Mc,Wc,qi=!1,Rn=[],yt=null,xt=null,wt=null,Zr=new Map,en=new Map,mt=[],Cf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bl(e,t){switch(e){case"focusin":case"focusout":yt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":wt=null;break;case"pointerover":case"pointerout":Zr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":en.delete(t.pointerId)}}function Tr(e,t,r,n,a,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:o,targetContainers:[a]},t!==null&&(t=vn(t),t!==null&&Oo(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Pf(e,t,r,n,a){switch(t){case"focusin":return yt=Tr(yt,e,t,r,n,a),!0;case"dragenter":return xt=Tr(xt,e,t,r,n,a),!0;case"mouseover":return wt=Tr(wt,e,t,r,n,a),!0;case"pointerover":var o=a.pointerId;return Zr.set(o,Tr(Zr.get(o)||null,e,t,r,n,a)),!0;case"gotpointercapture":return o=a.pointerId,en.set(o,Tr(en.get(o)||null,e,t,r,n,a)),!0}return!1}function Uc(e){var t=At(e.target);if(t!==null){var r=Yt(t);if(r!==null){if(t=r.tag,t===13){if(t=Rc(r),t!==null){e.blockedOn=t,Wc(e.priority,function(){Oc(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Vi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Wi=n,r.target.dispatchEvent(n),Wi=null}else return t=vn(r),t!==null&&Oo(t),e.blockedOn=r,!1;t.shift()}return!0}function Hl(e,t,r){Hn(e)&&r.delete(t)}function Rf(){qi=!1,yt!==null&&Hn(yt)&&(yt=null),xt!==null&&Hn(xt)&&(xt=null),wt!==null&&Hn(wt)&&(wt=null),Zr.forEach(Hl),en.forEach(Hl)}function zr(e,t){e.blockedOn===t&&(e.blockedOn=null,qi||(qi=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Rf)))}function tn(e){function t(a){return zr(a,e)}if(0<Rn.length){zr(Rn[0],e);for(var r=1;r<Rn.length;r++){var n=Rn[r];n.blockedOn===e&&(n.blockedOn=null)}}for(yt!==null&&zr(yt,e),xt!==null&&zr(xt,e),wt!==null&&zr(wt,e),Zr.forEach(t),en.forEach(t),r=0;r<mt.length;r++)n=mt[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<mt.length&&(r=mt[0],r.blockedOn===null);)Uc(r),r.blockedOn===null&&mt.shift()}var dr=ct.ReactCurrentBatchConfig,la=!0;function Tf(e,t,r,n){var a=D,o=dr.transition;dr.transition=null;try{D=1,Mo(e,t,r,n)}finally{D=a,dr.transition=o}}function zf(e,t,r,n){var a=D,o=dr.transition;dr.transition=null;try{D=4,Mo(e,t,r,n)}finally{D=a,dr.transition=o}}function Mo(e,t,r,n){if(la){var a=Vi(e,t,r,n);if(a===null)di(e,t,n,sa,r),Bl(e,n);else if(Pf(a,e,t,r,n))n.stopPropagation();else if(Bl(e,n),t&4&&-1<Cf.indexOf(e)){for(;a!==null;){var o=vn(a);if(o!==null&&Dc(o),o=Vi(e,t,r,n),o===null&&di(e,t,n,sa,r),o===a)break;a=o}a!==null&&n.stopPropagation()}else di(e,t,n,null,r)}}var sa=null;function Vi(e,t,r,n){if(sa=null,e=Fo(n),e=At(e),e!==null)if(t=Yt(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Rc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return sa=e,null}function $c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yf()){case Ao:return 1;case _c:return 4;case ia:case xf:return 16;case Lc:return 536870912;default:return 16}default:return 16}}var gt=null,Wo=null,qn=null;function Bc(){if(qn)return qn;var e,t=Wo,r=t.length,n,a="value"in gt?gt.value:gt.textContent,o=a.length;for(e=0;e<r&&t[e]===a[e];e++);var l=r-e;for(n=1;n<=l&&t[r-n]===a[o-n];n++);return qn=a.slice(e,1<n?1-n:void 0)}function Vn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Tn(){return!0}function ql(){return!1}function Se(e){function t(r,n,a,o,l){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Tn:ql,this.isPropagationStopped=ql,this}return V(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Tn)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Tn)},persist:function(){},isPersistent:Tn}),t}var kr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Uo=Se(kr),gn=V({},kr,{view:0,detail:0}),If=Se(gn),ri,ni,Ir,Ra=V({},gn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$o,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(ri=e.screenX-Ir.screenX,ni=e.screenY-Ir.screenY):ni=ri=0,Ir=e),ri)},movementY:function(e){return"movementY"in e?e.movementY:ni}}),Vl=Se(Ra),_f=V({},Ra,{dataTransfer:0}),Lf=Se(_f),Ff=V({},gn,{relatedTarget:0}),ai=Se(Ff),Af=V({},kr,{animationName:0,elapsedTime:0,pseudoElement:0}),Df=Se(Af),Of=V({},kr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Mf=Se(Of),Wf=V({},kr,{data:0}),Ql=Se(Wf),Uf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$f={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Bf[e])?!!t[e]:!1}function $o(){return Hf}var qf=V({},gn,{key:function(e){if(e.key){var t=Uf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?$f[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$o,charCode:function(e){return e.type==="keypress"?Vn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vf=Se(qf),Qf=V({},Ra,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yl=Se(Qf),Yf=V({},gn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$o}),Gf=Se(Yf),Kf=V({},kr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xf=Se(Kf),Jf=V({},Ra,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zf=Se(Jf),ep=[9,13,27,32],Bo=at&&"CompositionEvent"in window,Br=null;at&&"documentMode"in document&&(Br=document.documentMode);var tp=at&&"TextEvent"in window&&!Br,Hc=at&&(!Bo||Br&&8<Br&&11>=Br),Gl=" ",Kl=!1;function qc(e,t){switch(e){case"keyup":return ep.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Jt=!1;function rp(e,t){switch(e){case"compositionend":return Vc(t);case"keypress":return t.which!==32?null:(Kl=!0,Gl);case"textInput":return e=t.data,e===Gl&&Kl?null:e;default:return null}}function np(e,t){if(Jt)return e==="compositionend"||!Bo&&qc(e,t)?(e=Bc(),qn=Wo=gt=null,Jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hc&&t.locale!=="ko"?null:t.data;default:return null}}var ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ap[e.type]:t==="textarea"}function Qc(e,t,r,n){Nc(n),t=ca(t,"onChange"),0<t.length&&(r=new Uo("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Hr=null,rn=null;function ip(e){au(e,0)}function Ta(e){var t=tr(e);if(vc(t))return e}function op(e,t){if(e==="change")return t}var Yc=!1;if(at){var ii;if(at){var oi="oninput"in document;if(!oi){var Jl=document.createElement("div");Jl.setAttribute("oninput","return;"),oi=typeof Jl.oninput=="function"}ii=oi}else ii=!1;Yc=ii&&(!document.documentMode||9<document.documentMode)}function Zl(){Hr&&(Hr.detachEvent("onpropertychange",Gc),rn=Hr=null)}function Gc(e){if(e.propertyName==="value"&&Ta(rn)){var t=[];Qc(t,rn,e,Fo(e)),Pc(ip,t)}}function lp(e,t,r){e==="focusin"?(Zl(),Hr=t,rn=r,Hr.attachEvent("onpropertychange",Gc)):e==="focusout"&&Zl()}function sp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ta(rn)}function cp(e,t){if(e==="click")return Ta(t)}function up(e,t){if(e==="input"||e==="change")return Ta(t)}function dp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var He=typeof Object.is=="function"?Object.is:dp;function nn(e,t){if(He(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!Pi.call(t,a)||!He(e[a],t[a]))return!1}return!0}function es(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ts(e,t){var r=es(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=es(r)}}function Kc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Kc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Xc(){for(var e=window,t=ra();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ra(e.document)}return t}function Ho(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fp(e){var t=Xc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Kc(r.ownerDocument.documentElement,r)){if(n!==null&&Ho(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,o=Math.min(n.start,a);n=n.end===void 0?o:Math.min(n.end,a),!e.extend&&o>n&&(a=n,n=o,o=a),a=ts(r,o);var l=ts(r,n);a&&l&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),o>n?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var pp=at&&"documentMode"in document&&11>=document.documentMode,Zt=null,Qi=null,qr=null,Yi=!1;function rs(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Yi||Zt==null||Zt!==ra(n)||(n=Zt,"selectionStart"in n&&Ho(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),qr&&nn(qr,n)||(qr=n,n=ca(Qi,"onSelect"),0<n.length&&(t=new Uo("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Zt)))}function zn(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var er={animationend:zn("Animation","AnimationEnd"),animationiteration:zn("Animation","AnimationIteration"),animationstart:zn("Animation","AnimationStart"),transitionend:zn("Transition","TransitionEnd")},li={},Jc={};at&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete er.animationend.animation,delete er.animationiteration.animation,delete er.animationstart.animation),"TransitionEvent"in window||delete er.transitionend.transition);function za(e){if(li[e])return li[e];if(!er[e])return e;var t=er[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Jc)return li[e]=t[r];return e}var Zc=za("animationend"),eu=za("animationiteration"),tu=za("animationstart"),ru=za("transitionend"),nu=new Map,ns="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pt(e,t){nu.set(e,t),Qt(t,[e])}for(var si=0;si<ns.length;si++){var ci=ns[si],mp=ci.toLowerCase(),hp=ci[0].toUpperCase()+ci.slice(1);Pt(mp,"on"+hp)}Pt(Zc,"onAnimationEnd");Pt(eu,"onAnimationIteration");Pt(tu,"onAnimationStart");Pt("dblclick","onDoubleClick");Pt("focusin","onFocus");Pt("focusout","onBlur");Pt(ru,"onTransitionEnd");mr("onMouseEnter",["mouseout","mouseover"]);mr("onMouseLeave",["mouseout","mouseover"]);mr("onPointerEnter",["pointerout","pointerover"]);mr("onPointerLeave",["pointerout","pointerover"]);Qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gp=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wr));function as(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,mf(n,t,void 0,e),e.currentTarget=null}function au(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var o=void 0;if(t)for(var l=n.length-1;0<=l;l--){var s=n[l],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==o&&a.isPropagationStopped())break e;as(a,s,u),o=c}else for(l=0;l<n.length;l++){if(s=n[l],c=s.instance,u=s.currentTarget,s=s.listener,c!==o&&a.isPropagationStopped())break e;as(a,s,u),o=c}}}if(aa)throw e=Bi,aa=!1,Bi=null,e}function W(e,t){var r=t[Zi];r===void 0&&(r=t[Zi]=new Set);var n=e+"__bubble";r.has(n)||(iu(t,e,2,!1),r.add(n))}function ui(e,t,r){var n=0;t&&(n|=4),iu(r,e,n,t)}var In="_reactListening"+Math.random().toString(36).slice(2);function an(e){if(!e[In]){e[In]=!0,fc.forEach(function(r){r!=="selectionchange"&&(gp.has(r)||ui(r,!1,e),ui(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[In]||(t[In]=!0,ui("selectionchange",!1,t))}}function iu(e,t,r,n){switch($c(t)){case 1:var a=Tf;break;case 4:a=zf;break;default:a=Mo}r=a.bind(null,t,r,e),a=void 0,!$i||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function di(e,t,r,n,a){var o=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var l=n.tag;if(l===3||l===4){var s=n.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(l===4)for(l=n.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===a||c.nodeType===8&&c.parentNode===a))return;l=l.return}for(;s!==null;){if(l=At(s),l===null)return;if(c=l.tag,c===5||c===6){n=o=l;continue e}s=s.parentNode}}n=n.return}Pc(function(){var u=o,m=Fo(r),h=[];e:{var g=nu.get(e);if(g!==void 0){var x=Uo,w=e;switch(e){case"keypress":if(Vn(r)===0)break e;case"keydown":case"keyup":x=Vf;break;case"focusin":w="focus",x=ai;break;case"focusout":w="blur",x=ai;break;case"beforeblur":case"afterblur":x=ai;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Vl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Gf;break;case Zc:case eu:case tu:x=Df;break;case ru:x=Xf;break;case"scroll":x=If;break;case"wheel":x=Zf;break;case"copy":case"cut":case"paste":x=Mf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Yl}var b=(t&4)!==0,y=!b&&e==="scroll",d=b?g!==null?g+"Capture":null:g;b=[];for(var f=u,p;f!==null;){p=f;var j=p.stateNode;if(p.tag===5&&j!==null&&(p=j,d!==null&&(j=Jr(f,d),j!=null&&b.push(on(f,j,p)))),y)break;f=f.return}0<b.length&&(g=new x(g,w,null,r,m),h.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",g&&r!==Wi&&(w=r.relatedTarget||r.fromElement)&&(At(w)||w[it]))break e;if((x||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,x?(w=r.relatedTarget||r.toElement,x=u,w=w?At(w):null,w!==null&&(y=Yt(w),w!==y||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(b=Vl,j="onMouseLeave",d="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=Yl,j="onPointerLeave",d="onPointerEnter",f="pointer"),y=x==null?g:tr(x),p=w==null?g:tr(w),g=new b(j,f+"leave",x,r,m),g.target=y,g.relatedTarget=p,j=null,At(m)===u&&(b=new b(d,f+"enter",w,r,m),b.target=p,b.relatedTarget=y,j=b),y=j,x&&w)t:{for(b=x,d=w,f=0,p=b;p;p=Gt(p))f++;for(p=0,j=d;j;j=Gt(j))p++;for(;0<f-p;)b=Gt(b),f--;for(;0<p-f;)d=Gt(d),p--;for(;f--;){if(b===d||d!==null&&b===d.alternate)break t;b=Gt(b),d=Gt(d)}b=null}else b=null;x!==null&&is(h,g,x,b,!1),w!==null&&y!==null&&is(h,y,w,b,!0)}}e:{if(g=u?tr(u):window,x=g.nodeName&&g.nodeName.toLowerCase(),x==="select"||x==="input"&&g.type==="file")var N=op;else if(Xl(g))if(Yc)N=up;else{N=sp;var S=lp}else(x=g.nodeName)&&x.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=cp);if(N&&(N=N(e,u))){Qc(h,N,r,m);break e}S&&S(e,g,u),e==="focusout"&&(S=g._wrapperState)&&S.controlled&&g.type==="number"&&Fi(g,"number",g.value)}switch(S=u?tr(u):window,e){case"focusin":(Xl(S)||S.contentEditable==="true")&&(Zt=S,Qi=u,qr=null);break;case"focusout":qr=Qi=Zt=null;break;case"mousedown":Yi=!0;break;case"contextmenu":case"mouseup":case"dragend":Yi=!1,rs(h,r,m);break;case"selectionchange":if(pp)break;case"keydown":case"keyup":rs(h,r,m)}var C;if(Bo)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Jt?qc(e,r)&&(T="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(T="onCompositionStart");T&&(Hc&&r.locale!=="ko"&&(Jt||T!=="onCompositionStart"?T==="onCompositionEnd"&&Jt&&(C=Bc()):(gt=m,Wo="value"in gt?gt.value:gt.textContent,Jt=!0)),S=ca(u,T),0<S.length&&(T=new Ql(T,e,null,r,m),h.push({event:T,listeners:S}),C?T.data=C:(C=Vc(r),C!==null&&(T.data=C)))),(C=tp?rp(e,r):np(e,r))&&(u=ca(u,"onBeforeInput"),0<u.length&&(m=new Ql("onBeforeInput","beforeinput",null,r,m),h.push({event:m,listeners:u}),m.data=C))}au(h,t)})}function on(e,t,r){return{instance:e,listener:t,currentTarget:r}}function ca(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,o=a.stateNode;a.tag===5&&o!==null&&(a=o,o=Jr(e,r),o!=null&&n.unshift(on(e,o,a)),o=Jr(e,t),o!=null&&n.push(on(e,o,a))),e=e.return}return n}function Gt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function is(e,t,r,n,a){for(var o=t._reactName,l=[];r!==null&&r!==n;){var s=r,c=s.alternate,u=s.stateNode;if(c!==null&&c===n)break;s.tag===5&&u!==null&&(s=u,a?(c=Jr(r,o),c!=null&&l.unshift(on(r,c,s))):a||(c=Jr(r,o),c!=null&&l.push(on(r,c,s)))),r=r.return}l.length!==0&&e.push({event:t,listeners:l})}var vp=/\r\n?/g,yp=/\u0000|\uFFFD/g;function os(e){return(typeof e=="string"?e:""+e).replace(vp,`
`).replace(yp,"")}function _n(e,t,r){if(t=os(t),os(e)!==t&&r)throw Error(k(425))}function ua(){}var Gi=null,Ki=null;function Xi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ji=typeof setTimeout=="function"?setTimeout:void 0,xp=typeof clearTimeout=="function"?clearTimeout:void 0,ls=typeof Promise=="function"?Promise:void 0,wp=typeof queueMicrotask=="function"?queueMicrotask:typeof ls<"u"?function(e){return ls.resolve(null).then(e).catch(bp)}:Ji;function bp(e){setTimeout(function(){throw e})}function fi(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),tn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);tn(t)}function bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ss(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Nr=Math.random().toString(36).slice(2),Ge="__reactFiber$"+Nr,ln="__reactProps$"+Nr,it="__reactContainer$"+Nr,Zi="__reactEvents$"+Nr,jp="__reactListeners$"+Nr,kp="__reactHandles$"+Nr;function At(e){var t=e[Ge];if(t)return t;for(var r=e.parentNode;r;){if(t=r[it]||r[Ge]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ss(e);e!==null;){if(r=e[Ge])return r;e=ss(e)}return t}e=r,r=e.parentNode}return null}function vn(e){return e=e[Ge]||e[it],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function Ia(e){return e[ln]||null}var eo=[],rr=-1;function Rt(e){return{current:e}}function U(e){0>rr||(e.current=eo[rr],eo[rr]=null,rr--)}function M(e,t){rr++,eo[rr]=e.current,e.current=t}var Ct={},se=Rt(Ct),he=Rt(!1),Ut=Ct;function hr(e,t){var r=e.type.contextTypes;if(!r)return Ct;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},o;for(o in r)a[o]=t[o];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function ge(e){return e=e.childContextTypes,e!=null}function da(){U(he),U(se)}function cs(e,t,r){if(se.current!==Ct)throw Error(k(168));M(se,t),M(he,r)}function ou(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(k(108,lf(e)||"Unknown",a));return V({},r,n)}function fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ct,Ut=se.current,M(se,e),M(he,he.current),!0}function us(e,t,r){var n=e.stateNode;if(!n)throw Error(k(169));r?(e=ou(e,t,Ut),n.__reactInternalMemoizedMergedChildContext=e,U(he),U(se),M(se,e)):U(he),M(he,r)}var et=null,_a=!1,pi=!1;function lu(e){et===null?et=[e]:et.push(e)}function Np(e){_a=!0,lu(e)}function Tt(){if(!pi&&et!==null){pi=!0;var e=0,t=D;try{var r=et;for(D=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}et=null,_a=!1}catch(a){throw et!==null&&(et=et.slice(e+1)),Ic(Ao,Tt),a}finally{D=t,pi=!1}}return null}var nr=[],ar=0,pa=null,ma=0,Re=[],Te=0,$t=null,tt=1,rt="";function Lt(e,t){nr[ar++]=ma,nr[ar++]=pa,pa=e,ma=t}function su(e,t,r){Re[Te++]=tt,Re[Te++]=rt,Re[Te++]=$t,$t=e;var n=tt;e=rt;var a=32-Ue(n)-1;n&=~(1<<a),r+=1;var o=32-Ue(t)+a;if(30<o){var l=a-a%5;o=(n&(1<<l)-1).toString(32),n>>=l,a-=l,tt=1<<32-Ue(t)+a|r<<a|n,rt=o+e}else tt=1<<o|r<<a|n,rt=e}function qo(e){e.return!==null&&(Lt(e,1),su(e,1,0))}function Vo(e){for(;e===pa;)pa=nr[--ar],nr[ar]=null,ma=nr[--ar],nr[ar]=null;for(;e===$t;)$t=Re[--Te],Re[Te]=null,rt=Re[--Te],Re[Te]=null,tt=Re[--Te],Re[Te]=null}var je=null,be=null,$=!1,We=null;function cu(e,t){var r=ze(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ds(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,je=e,be=bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,je=e,be=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=$t!==null?{id:tt,overflow:rt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=ze(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,je=e,be=null,!0):!1;default:return!1}}function to(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ro(e){if($){var t=be;if(t){var r=t;if(!ds(e,t)){if(to(e))throw Error(k(418));t=bt(r.nextSibling);var n=je;t&&ds(e,t)?cu(n,r):(e.flags=e.flags&-4097|2,$=!1,je=e)}}else{if(to(e))throw Error(k(418));e.flags=e.flags&-4097|2,$=!1,je=e}}}function fs(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;je=e}function Ln(e){if(e!==je)return!1;if(!$)return fs(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Xi(e.type,e.memoizedProps)),t&&(t=be)){if(to(e))throw uu(),Error(k(418));for(;t;)cu(e,t),t=bt(t.nextSibling)}if(fs(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){be=bt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}be=null}}else be=je?bt(e.stateNode.nextSibling):null;return!0}function uu(){for(var e=be;e;)e=bt(e.nextSibling)}function gr(){be=je=null,$=!1}function Qo(e){We===null?We=[e]:We.push(e)}var Sp=ct.ReactCurrentBatchConfig;function Oe(e,t){if(e&&e.defaultProps){t=V({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}var ha=Rt(null),ga=null,ir=null,Yo=null;function Go(){Yo=ir=ga=null}function Ko(e){var t=ha.current;U(ha),e._currentValue=t}function no(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function fr(e,t){ga=e,Yo=ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(me=!0),e.firstContext=null)}function _e(e){var t=e._currentValue;if(Yo!==e)if(e={context:e,memoizedValue:t,next:null},ir===null){if(ga===null)throw Error(k(308));ir=e,ga.dependencies={lanes:0,firstContext:e}}else ir=ir.next=e;return t}var Dt=null;function Xo(e){Dt===null?Dt=[e]:Dt.push(e)}function du(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,Xo(t)):(r.next=a.next,a.next=r),t.interleaved=r,ot(e,n)}function ot(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var pt=!1;function Jo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,F&2){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,ot(e,r)}return a=n.interleaved,a===null?(t.next=t,Xo(n)):(t.next=a.next,a.next=t),n.interleaved=t,ot(e,r)}function Qn(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Do(e,r)}}function ps(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,o=null;if(r=r.firstBaseUpdate,r!==null){do{var l={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};o===null?a=o=l:o=o.next=l,r=r.next}while(r!==null);o===null?a=o=t:o=o.next=t}else a=o=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function va(e,t,r,n){var a=e.updateQueue;pt=!1;var o=a.firstBaseUpdate,l=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var c=s,u=c.next;c.next=null,l===null?o=u:l.next=u,l=c;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==l&&(s===null?m.firstBaseUpdate=u:s.next=u,m.lastBaseUpdate=c))}if(o!==null){var h=a.baseState;l=0,m=u=c=null,s=o;do{var g=s.lane,x=s.eventTime;if((n&g)===g){m!==null&&(m=m.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,b=s;switch(g=t,x=r,b.tag){case 1:if(w=b.payload,typeof w=="function"){h=w.call(x,h,g);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=b.payload,g=typeof w=="function"?w.call(x,h,g):w,g==null)break e;h=V({},h,g);break e;case 2:pt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[s]:g.push(s))}else x={eventTime:x,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(u=m=x,c=h):m=m.next=x,l|=g;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;g=s,s=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(!0);if(m===null&&(c=h),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do l|=a.lane,a=a.next;while(a!==t)}else o===null&&(a.shared.lanes=0);Ht|=l,e.lanes=l,e.memoizedState=h}}function ms(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(k(191,a));a.call(n)}}}var pu=new dc.Component().refs;function ao(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:V({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var La={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=ue(),a=Nt(e),o=nt(n,a);o.payload=t,r!=null&&(o.callback=r),t=jt(e,o,a),t!==null&&($e(t,e,a,n),Qn(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=ue(),a=Nt(e),o=nt(n,a);o.tag=1,o.payload=t,r!=null&&(o.callback=r),t=jt(e,o,a),t!==null&&($e(t,e,a,n),Qn(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=ue(),n=Nt(e),a=nt(r,n);a.tag=2,t!=null&&(a.callback=t),t=jt(e,a,n),t!==null&&($e(t,e,n,r),Qn(t,e,n))}};function hs(e,t,r,n,a,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,o,l):t.prototype&&t.prototype.isPureReactComponent?!nn(r,n)||!nn(a,o):!0}function mu(e,t,r){var n=!1,a=Ct,o=t.contextType;return typeof o=="object"&&o!==null?o=_e(o):(a=ge(t)?Ut:se.current,n=t.contextTypes,o=(n=n!=null)?hr(e,a):Ct),t=new t(r,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=La,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function gs(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&La.enqueueReplaceState(t,t.state,null)}function io(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs=pu,Jo(e);var o=t.contextType;typeof o=="object"&&o!==null?a.context=_e(o):(o=ge(t)?Ut:se.current,a.context=hr(e,o)),a.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(ao(e,t,o,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&La.enqueueReplaceState(a,a.state,null),va(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function _r(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(k(309));var n=r.stateNode}if(!n)throw Error(k(147,e));var a=n,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var s=a.refs;s===pu&&(s=a.refs={}),l===null?delete s[o]:s[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(k(284));if(!r._owner)throw Error(k(290,e))}return e}function Fn(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vs(e){var t=e._init;return t(e._payload)}function hu(e){function t(d,f){if(e){var p=d.deletions;p===null?(d.deletions=[f],d.flags|=16):p.push(f)}}function r(d,f){if(!e)return null;for(;f!==null;)t(d,f),f=f.sibling;return null}function n(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function a(d,f){return d=St(d,f),d.index=0,d.sibling=null,d}function o(d,f,p){return d.index=p,e?(p=d.alternate,p!==null?(p=p.index,p<f?(d.flags|=2,f):p):(d.flags|=2,f)):(d.flags|=1048576,f)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function s(d,f,p,j){return f===null||f.tag!==6?(f=wi(p,d.mode,j),f.return=d,f):(f=a(f,p),f.return=d,f)}function c(d,f,p,j){var N=p.type;return N===Xt?m(d,f,p.props.children,j,p.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ft&&vs(N)===f.type)?(j=a(f,p.props),j.ref=_r(d,f,p),j.return=d,j):(j=Zn(p.type,p.key,p.props,null,d.mode,j),j.ref=_r(d,f,p),j.return=d,j)}function u(d,f,p,j){return f===null||f.tag!==4||f.stateNode.containerInfo!==p.containerInfo||f.stateNode.implementation!==p.implementation?(f=bi(p,d.mode,j),f.return=d,f):(f=a(f,p.children||[]),f.return=d,f)}function m(d,f,p,j,N){return f===null||f.tag!==7?(f=Wt(p,d.mode,j,N),f.return=d,f):(f=a(f,p),f.return=d,f)}function h(d,f,p){if(typeof f=="string"&&f!==""||typeof f=="number")return f=wi(""+f,d.mode,p),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Nn:return p=Zn(f.type,f.key,f.props,null,d.mode,p),p.ref=_r(d,null,f),p.return=d,p;case Kt:return f=bi(f,d.mode,p),f.return=d,f;case ft:var j=f._init;return h(d,j(f._payload),p)}if(Or(f)||Pr(f))return f=Wt(f,d.mode,p,null),f.return=d,f;Fn(d,f)}return null}function g(d,f,p,j){var N=f!==null?f.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:s(d,f,""+p,j);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Nn:return p.key===N?c(d,f,p,j):null;case Kt:return p.key===N?u(d,f,p,j):null;case ft:return N=p._init,g(d,f,N(p._payload),j)}if(Or(p)||Pr(p))return N!==null?null:m(d,f,p,j,null);Fn(d,p)}return null}function x(d,f,p,j,N){if(typeof j=="string"&&j!==""||typeof j=="number")return d=d.get(p)||null,s(f,d,""+j,N);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case Nn:return d=d.get(j.key===null?p:j.key)||null,c(f,d,j,N);case Kt:return d=d.get(j.key===null?p:j.key)||null,u(f,d,j,N);case ft:var S=j._init;return x(d,f,p,S(j._payload),N)}if(Or(j)||Pr(j))return d=d.get(p)||null,m(f,d,j,N,null);Fn(f,j)}return null}function w(d,f,p,j){for(var N=null,S=null,C=f,T=f=0,A=null;C!==null&&T<p.length;T++){C.index>T?(A=C,C=null):A=C.sibling;var E=g(d,C,p[T],j);if(E===null){C===null&&(C=A);break}e&&C&&E.alternate===null&&t(d,C),f=o(E,f,T),S===null?N=E:S.sibling=E,S=E,C=A}if(T===p.length)return r(d,C),$&&Lt(d,T),N;if(C===null){for(;T<p.length;T++)C=h(d,p[T],j),C!==null&&(f=o(C,f,T),S===null?N=C:S.sibling=C,S=C);return $&&Lt(d,T),N}for(C=n(d,C);T<p.length;T++)A=x(C,d,T,p[T],j),A!==null&&(e&&A.alternate!==null&&C.delete(A.key===null?T:A.key),f=o(A,f,T),S===null?N=A:S.sibling=A,S=A);return e&&C.forEach(function(O){return t(d,O)}),$&&Lt(d,T),N}function b(d,f,p,j){var N=Pr(p);if(typeof N!="function")throw Error(k(150));if(p=N.call(p),p==null)throw Error(k(151));for(var S=N=null,C=f,T=f=0,A=null,E=p.next();C!==null&&!E.done;T++,E=p.next()){C.index>T?(A=C,C=null):A=C.sibling;var O=g(d,C,E.value,j);if(O===null){C===null&&(C=A);break}e&&C&&O.alternate===null&&t(d,C),f=o(O,f,T),S===null?N=O:S.sibling=O,S=O,C=A}if(E.done)return r(d,C),$&&Lt(d,T),N;if(C===null){for(;!E.done;T++,E=p.next())E=h(d,E.value,j),E!==null&&(f=o(E,f,T),S===null?N=E:S.sibling=E,S=E);return $&&Lt(d,T),N}for(C=n(d,C);!E.done;T++,E=p.next())E=x(C,d,T,E.value,j),E!==null&&(e&&E.alternate!==null&&C.delete(E.key===null?T:E.key),f=o(E,f,T),S===null?N=E:S.sibling=E,S=E);return e&&C.forEach(function(Je){return t(d,Je)}),$&&Lt(d,T),N}function y(d,f,p,j){if(typeof p=="object"&&p!==null&&p.type===Xt&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Nn:e:{for(var N=p.key,S=f;S!==null;){if(S.key===N){if(N=p.type,N===Xt){if(S.tag===7){r(d,S.sibling),f=a(S,p.props.children),f.return=d,d=f;break e}}else if(S.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===ft&&vs(N)===S.type){r(d,S.sibling),f=a(S,p.props),f.ref=_r(d,S,p),f.return=d,d=f;break e}r(d,S);break}else t(d,S);S=S.sibling}p.type===Xt?(f=Wt(p.props.children,d.mode,j,p.key),f.return=d,d=f):(j=Zn(p.type,p.key,p.props,null,d.mode,j),j.ref=_r(d,f,p),j.return=d,d=j)}return l(d);case Kt:e:{for(S=p.key;f!==null;){if(f.key===S)if(f.tag===4&&f.stateNode.containerInfo===p.containerInfo&&f.stateNode.implementation===p.implementation){r(d,f.sibling),f=a(f,p.children||[]),f.return=d,d=f;break e}else{r(d,f);break}else t(d,f);f=f.sibling}f=bi(p,d.mode,j),f.return=d,d=f}return l(d);case ft:return S=p._init,y(d,f,S(p._payload),j)}if(Or(p))return w(d,f,p,j);if(Pr(p))return b(d,f,p,j);Fn(d,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,f!==null&&f.tag===6?(r(d,f.sibling),f=a(f,p),f.return=d,d=f):(r(d,f),f=wi(p,d.mode,j),f.return=d,d=f),l(d)):r(d,f)}return y}var vr=hu(!0),gu=hu(!1),yn={},Xe=Rt(yn),sn=Rt(yn),cn=Rt(yn);function Ot(e){if(e===yn)throw Error(k(174));return e}function Zo(e,t){switch(M(cn,t),M(sn,e),M(Xe,yn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Di(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Di(t,e)}U(Xe),M(Xe,t)}function yr(){U(Xe),U(sn),U(cn)}function vu(e){Ot(cn.current);var t=Ot(Xe.current),r=Di(t,e.type);t!==r&&(M(sn,e),M(Xe,r))}function el(e){sn.current===e&&(U(Xe),U(sn))}var H=Rt(0);function ya(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var mi=[];function tl(){for(var e=0;e<mi.length;e++)mi[e]._workInProgressVersionPrimary=null;mi.length=0}var Yn=ct.ReactCurrentDispatcher,hi=ct.ReactCurrentBatchConfig,Bt=0,q=null,X=null,ee=null,xa=!1,Vr=!1,un=0,Ep=0;function ie(){throw Error(k(321))}function rl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!He(e[r],t[r]))return!1;return!0}function nl(e,t,r,n,a,o){if(Bt=o,q=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yn.current=e===null||e.memoizedState===null?Tp:zp,e=r(n,a),Vr){o=0;do{if(Vr=!1,un=0,25<=o)throw Error(k(301));o+=1,ee=X=null,t.updateQueue=null,Yn.current=Ip,e=r(n,a)}while(Vr)}if(Yn.current=wa,t=X!==null&&X.next!==null,Bt=0,ee=X=q=null,xa=!1,t)throw Error(k(300));return e}function al(){var e=un!==0;return un=0,e}function Ye(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ee===null?q.memoizedState=ee=e:ee=ee.next=e,ee}function Le(){if(X===null){var e=q.alternate;e=e!==null?e.memoizedState:null}else e=X.next;var t=ee===null?q.memoizedState:ee.next;if(t!==null)ee=t,X=e;else{if(e===null)throw Error(k(310));X=e,e={memoizedState:X.memoizedState,baseState:X.baseState,baseQueue:X.baseQueue,queue:X.queue,next:null},ee===null?q.memoizedState=ee=e:ee=ee.next=e}return ee}function dn(e,t){return typeof t=="function"?t(e):t}function gi(e){var t=Le(),r=t.queue;if(r===null)throw Error(k(311));r.lastRenderedReducer=e;var n=X,a=n.baseQueue,o=r.pending;if(o!==null){if(a!==null){var l=a.next;a.next=o.next,o.next=l}n.baseQueue=a=o,r.pending=null}if(a!==null){o=a.next,n=n.baseState;var s=l=null,c=null,u=o;do{var m=u.lane;if((Bt&m)===m)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var h={lane:m,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=h,l=n):c=c.next=h,q.lanes|=m,Ht|=m}u=u.next}while(u!==null&&u!==o);c===null?l=n:c.next=s,He(n,t.memoizedState)||(me=!0),t.memoizedState=n,t.baseState=l,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do o=a.lane,q.lanes|=o,Ht|=o,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function vi(e){var t=Le(),r=t.queue;if(r===null)throw Error(k(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,o=t.memoizedState;if(a!==null){r.pending=null;var l=a=a.next;do o=e(o,l.action),l=l.next;while(l!==a);He(o,t.memoizedState)||(me=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),r.lastRenderedState=o}return[o,n]}function yu(){}function xu(e,t){var r=q,n=Le(),a=t(),o=!He(n.memoizedState,a);if(o&&(n.memoizedState=a,me=!0),n=n.queue,il(ju.bind(null,r,n,e),[e]),n.getSnapshot!==t||o||ee!==null&&ee.memoizedState.tag&1){if(r.flags|=2048,fn(9,bu.bind(null,r,n,a,t),void 0,null),te===null)throw Error(k(349));Bt&30||wu(r,t,a)}return a}function wu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function bu(e,t,r,n){t.value=r,t.getSnapshot=n,ku(t)&&Nu(e)}function ju(e,t,r){return r(function(){ku(t)&&Nu(e)})}function ku(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!He(e,r)}catch{return!0}}function Nu(e){var t=ot(e,1);t!==null&&$e(t,e,1,-1)}function ys(e){var t=Ye();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dn,lastRenderedState:e},t.queue=e,e=e.dispatch=Rp.bind(null,q,e),[t.memoizedState,e]}function fn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=q.updateQueue,t===null?(t={lastEffect:null,stores:null},q.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Su(){return Le().memoizedState}function Gn(e,t,r,n){var a=Ye();q.flags|=e,a.memoizedState=fn(1|t,r,void 0,n===void 0?null:n)}function Fa(e,t,r,n){var a=Le();n=n===void 0?null:n;var o=void 0;if(X!==null){var l=X.memoizedState;if(o=l.destroy,n!==null&&rl(n,l.deps)){a.memoizedState=fn(t,r,o,n);return}}q.flags|=e,a.memoizedState=fn(1|t,r,o,n)}function xs(e,t){return Gn(8390656,8,e,t)}function il(e,t){return Fa(2048,8,e,t)}function Eu(e,t){return Fa(4,2,e,t)}function Cu(e,t){return Fa(4,4,e,t)}function Pu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ru(e,t,r){return r=r!=null?r.concat([e]):null,Fa(4,4,Pu.bind(null,t,e),r)}function ol(){}function Tu(e,t){var r=Le();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&rl(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function zu(e,t){var r=Le();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&rl(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function Iu(e,t,r){return Bt&21?(He(r,t)||(r=Fc(),q.lanes|=r,Ht|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,me=!0),e.memoizedState=r)}function Cp(e,t){var r=D;D=r!==0&&4>r?r:4,e(!0);var n=hi.transition;hi.transition={};try{e(!1),t()}finally{D=r,hi.transition=n}}function _u(){return Le().memoizedState}function Pp(e,t,r){var n=Nt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},Lu(e))Fu(t,r);else if(r=du(e,t,r,n),r!==null){var a=ue();$e(r,e,n,a),Au(r,t,n)}}function Rp(e,t,r){var n=Nt(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Fu(t,a);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,s=o(l,r);if(a.hasEagerState=!0,a.eagerState=s,He(s,l)){var c=t.interleaved;c===null?(a.next=a,Xo(t)):(a.next=c.next,c.next=a),t.interleaved=a;return}}catch{}finally{}r=du(e,t,a,n),r!==null&&(a=ue(),$e(r,e,n,a),Au(r,t,n))}}function Lu(e){var t=e.alternate;return e===q||t!==null&&t===q}function Fu(e,t){Vr=xa=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Au(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,Do(e,r)}}var wa={readContext:_e,useCallback:ie,useContext:ie,useEffect:ie,useImperativeHandle:ie,useInsertionEffect:ie,useLayoutEffect:ie,useMemo:ie,useReducer:ie,useRef:ie,useState:ie,useDebugValue:ie,useDeferredValue:ie,useTransition:ie,useMutableSource:ie,useSyncExternalStore:ie,useId:ie,unstable_isNewReconciler:!1},Tp={readContext:_e,useCallback:function(e,t){return Ye().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:xs,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Gn(4194308,4,Pu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Gn(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gn(4,2,e,t)},useMemo:function(e,t){var r=Ye();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Ye();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Pp.bind(null,q,e),[n.memoizedState,e]},useRef:function(e){var t=Ye();return e={current:e},t.memoizedState=e},useState:ys,useDebugValue:ol,useDeferredValue:function(e){return Ye().memoizedState=e},useTransition:function(){var e=ys(!1),t=e[0];return e=Cp.bind(null,e[1]),Ye().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=q,a=Ye();if($){if(r===void 0)throw Error(k(407));r=r()}else{if(r=t(),te===null)throw Error(k(349));Bt&30||wu(n,t,r)}a.memoizedState=r;var o={value:r,getSnapshot:t};return a.queue=o,xs(ju.bind(null,n,o,e),[e]),n.flags|=2048,fn(9,bu.bind(null,n,o,r,t),void 0,null),r},useId:function(){var e=Ye(),t=te.identifierPrefix;if($){var r=rt,n=tt;r=(n&~(1<<32-Ue(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=un++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Ep++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},zp={readContext:_e,useCallback:Tu,useContext:_e,useEffect:il,useImperativeHandle:Ru,useInsertionEffect:Eu,useLayoutEffect:Cu,useMemo:zu,useReducer:gi,useRef:Su,useState:function(){return gi(dn)},useDebugValue:ol,useDeferredValue:function(e){var t=Le();return Iu(t,X.memoizedState,e)},useTransition:function(){var e=gi(dn)[0],t=Le().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:xu,useId:_u,unstable_isNewReconciler:!1},Ip={readContext:_e,useCallback:Tu,useContext:_e,useEffect:il,useImperativeHandle:Ru,useInsertionEffect:Eu,useLayoutEffect:Cu,useMemo:zu,useReducer:vi,useRef:Su,useState:function(){return vi(dn)},useDebugValue:ol,useDeferredValue:function(e){var t=Le();return X===null?t.memoizedState=e:Iu(t,X.memoizedState,e)},useTransition:function(){var e=vi(dn)[0],t=Le().memoizedState;return[e,t]},useMutableSource:yu,useSyncExternalStore:xu,useId:_u,unstable_isNewReconciler:!1};function xr(e,t){try{var r="",n=t;do r+=of(n),n=n.return;while(n);var a=r}catch(o){a=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:a,digest:null}}function yi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function oo(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var _p=typeof WeakMap=="function"?WeakMap:Map;function Du(e,t,r){r=nt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ja||(ja=!0,vo=n),oo(e,t)},r}function Ou(e,t,r){r=nt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){oo(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(r.callback=function(){oo(e,t),typeof n!="function"&&(kt===null?kt=new Set([this]):kt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),r}function ws(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new _p;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Qp.bind(null,e,t,r),t.then(e,e))}function bs(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function js(e,t,r,n,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=nt(-1,1),t.tag=2,jt(r,t,1))),r.lanes|=1),e)}var Lp=ct.ReactCurrentOwner,me=!1;function ce(e,t,r,n){t.child=e===null?gu(t,null,r,n):vr(t,e.child,r,n)}function ks(e,t,r,n,a){r=r.render;var o=t.ref;return fr(t,a),n=nl(e,t,r,n,o,a),r=al(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,lt(e,t,a)):($&&r&&qo(t),t.flags|=1,ce(e,t,n,a),t.child)}function Ns(e,t,r,n,a){if(e===null){var o=r.type;return typeof o=="function"&&!ml(o)&&o.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=o,Mu(e,t,o,n,a)):(e=Zn(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&a)){var l=o.memoizedProps;if(r=r.compare,r=r!==null?r:nn,r(l,n)&&e.ref===t.ref)return lt(e,t,a)}return t.flags|=1,e=St(o,n),e.ref=t.ref,e.return=t,t.child=e}function Mu(e,t,r,n,a){if(e!==null){var o=e.memoizedProps;if(nn(o,n)&&e.ref===t.ref)if(me=!1,t.pendingProps=n=o,(e.lanes&a)!==0)e.flags&131072&&(me=!0);else return t.lanes=e.lanes,lt(e,t,a)}return lo(e,t,r,n,a)}function Wu(e,t,r){var n=t.pendingProps,a=n.children,o=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(lr,we),we|=r;else{if(!(r&1073741824))return e=o!==null?o.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(lr,we),we|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=o!==null?o.baseLanes:r,M(lr,we),we|=n}else o!==null?(n=o.baseLanes|r,t.memoizedState=null):n=r,M(lr,we),we|=n;return ce(e,t,a,r),t.child}function Uu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function lo(e,t,r,n,a){var o=ge(r)?Ut:se.current;return o=hr(t,o),fr(t,a),r=nl(e,t,r,n,o,a),n=al(),e!==null&&!me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,lt(e,t,a)):($&&n&&qo(t),t.flags|=1,ce(e,t,r,a),t.child)}function Ss(e,t,r,n,a){if(ge(r)){var o=!0;fa(t)}else o=!1;if(fr(t,a),t.stateNode===null)Kn(e,t),mu(t,r,n),io(t,r,n,a),n=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var c=l.context,u=r.contextType;typeof u=="object"&&u!==null?u=_e(u):(u=ge(r)?Ut:se.current,u=hr(t,u));var m=r.getDerivedStateFromProps,h=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";h||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==n||c!==u)&&gs(t,l,n,u),pt=!1;var g=t.memoizedState;l.state=g,va(t,n,l,a),c=t.memoizedState,s!==n||g!==c||he.current||pt?(typeof m=="function"&&(ao(t,r,m,n),c=t.memoizedState),(s=pt||hs(t,r,s,n,g,c,u))?(h||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),l.props=n,l.state=c,l.context=u,n=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,fu(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Oe(t.type,s),l.props=u,h=t.pendingProps,g=l.context,c=r.contextType,typeof c=="object"&&c!==null?c=_e(c):(c=ge(r)?Ut:se.current,c=hr(t,c));var x=r.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==h||g!==c)&&gs(t,l,n,c),pt=!1,g=t.memoizedState,l.state=g,va(t,n,l,a);var w=t.memoizedState;s!==h||g!==w||he.current||pt?(typeof x=="function"&&(ao(t,r,x,n),w=t.memoizedState),(u=pt||hs(t,r,u,n,g,w,c)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,w,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,w,c)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),l.props=n,l.state=w,l.context=c,n=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return so(e,t,r,n,o,a)}function so(e,t,r,n,a,o){Uu(e,t);var l=(t.flags&128)!==0;if(!n&&!l)return a&&us(t,r,!1),lt(e,t,o);n=t.stateNode,Lp.current=t;var s=l&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&l?(t.child=vr(t,e.child,null,o),t.child=vr(t,null,s,o)):ce(e,t,s,o),t.memoizedState=n.state,a&&us(t,r,!0),t.child}function $u(e){var t=e.stateNode;t.pendingContext?cs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cs(e,t.context,!1),Zo(e,t.containerInfo)}function Es(e,t,r,n,a){return gr(),Qo(a),t.flags|=256,ce(e,t,r,n),t.child}var co={dehydrated:null,treeContext:null,retryLane:0};function uo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bu(e,t,r){var n=t.pendingProps,a=H.current,o=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),M(H,a&1),e===null)return ro(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=n.children,e=n.fallback,o?(n=t.mode,o=t.child,l={mode:"hidden",children:l},!(n&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=Oa(l,n,0,null),e=Wt(e,n,r,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=uo(r),t.memoizedState=co,e):ll(t,l));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return Fp(e,t,l,n,s,a,r);if(o){o=n.fallback,l=t.mode,a=e.child,s=a.sibling;var c={mode:"hidden",children:n.children};return!(l&1)&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=St(a,c),n.subtreeFlags=a.subtreeFlags&14680064),s!==null?o=St(s,o):(o=Wt(o,l,r,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,n=o,o=t.child,l=e.child.memoizedState,l=l===null?uo(r):{baseLanes:l.baseLanes|r,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~r,t.memoizedState=co,n}return o=e.child,e=o.sibling,n=St(o,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ll(e,t){return t=Oa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function An(e,t,r,n){return n!==null&&Qo(n),vr(t,e.child,null,r),e=ll(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Fp(e,t,r,n,a,o,l){if(r)return t.flags&256?(t.flags&=-257,n=yi(Error(k(422))),An(e,t,l,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=n.fallback,a=t.mode,n=Oa({mode:"visible",children:n.children},a,0,null),o=Wt(o,a,l,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,t.mode&1&&vr(t,e.child,null,l),t.child.memoizedState=uo(l),t.memoizedState=co,o);if(!(t.mode&1))return An(e,t,l,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var s=n.dgst;return n=s,o=Error(k(419)),n=yi(o,n,void 0),An(e,t,l,n)}if(s=(l&e.childLanes)!==0,me||s){if(n=te,n!==null){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(n.suspendedLanes|l)?0:a,a!==0&&a!==o.retryLane&&(o.retryLane=a,ot(e,a),$e(n,e,a,-1))}return pl(),n=yi(Error(k(421))),An(e,t,l,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Yp.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,be=bt(a.nextSibling),je=t,$=!0,We=null,e!==null&&(Re[Te++]=tt,Re[Te++]=rt,Re[Te++]=$t,tt=e.id,rt=e.overflow,$t=t),t=ll(t,n.children),t.flags|=4096,t)}function Cs(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),no(e.return,t,r)}function xi(e,t,r,n,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=r,o.tailMode=a)}function Hu(e,t,r){var n=t.pendingProps,a=n.revealOrder,o=n.tail;if(ce(e,t,n.children,r),n=H.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Cs(e,r,t);else if(e.tag===19)Cs(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(M(H,n),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&ya(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),xi(t,!1,a,r,o);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&ya(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}xi(t,!0,r,null,o);break;case"together":xi(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kn(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function lt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ht|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,r=St(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=St(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Ap(e,t,r){switch(t.tag){case 3:$u(t),gr();break;case 5:vu(t);break;case 1:ge(t.type)&&fa(t);break;case 4:Zo(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;M(ha,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(M(H,H.current&1),t.flags|=128,null):r&t.child.childLanes?Bu(e,t,r):(M(H,H.current&1),e=lt(e,t,r),e!==null?e.sibling:null);M(H,H.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return Hu(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),M(H,H.current),n)break;return null;case 22:case 23:return t.lanes=0,Wu(e,t,r)}return lt(e,t,r)}var qu,fo,Vu,Qu;qu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};fo=function(){};Vu=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Ot(Xe.current);var o=null;switch(r){case"input":a=_i(e,a),n=_i(e,n),o=[];break;case"select":a=V({},a,{value:void 0}),n=V({},n,{value:void 0}),o=[];break;case"textarea":a=Ai(e,a),n=Ai(e,n),o=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=ua)}Oi(r,n);var l;r=null;for(u in a)if(!n.hasOwnProperty(u)&&a.hasOwnProperty(u)&&a[u]!=null)if(u==="style"){var s=a[u];for(l in s)s.hasOwnProperty(l)&&(r||(r={}),r[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kr.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in n){var c=n[u];if(s=a!=null?a[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(r||(r={}),r[l]="");for(l in c)c.hasOwnProperty(l)&&s[l]!==c[l]&&(r||(r={}),r[l]=c[l])}else r||(o||(o=[]),o.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&W("scroll",e),o||s===c||(o=[])):(o=o||[]).push(u,c))}r&&(o=o||[]).push("style",r);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Qu=function(e,t,r,n){r!==n&&(t.flags|=4)};function Lr(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Dp(e,t,r){var n=t.pendingProps;switch(Vo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return oe(t),null;case 1:return ge(t.type)&&da(),oe(t),null;case 3:return n=t.stateNode,yr(),U(he),U(se),tl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ln(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,We!==null&&(wo(We),We=null))),fo(e,t),oe(t),null;case 5:el(t);var a=Ot(cn.current);if(r=t.type,e!==null&&t.stateNode!=null)Vu(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(k(166));return oe(t),null}if(e=Ot(Xe.current),Ln(t)){n=t.stateNode,r=t.type;var o=t.memoizedProps;switch(n[Ge]=t,n[ln]=o,e=(t.mode&1)!==0,r){case"dialog":W("cancel",n),W("close",n);break;case"iframe":case"object":case"embed":W("load",n);break;case"video":case"audio":for(a=0;a<Wr.length;a++)W(Wr[a],n);break;case"source":W("error",n);break;case"img":case"image":case"link":W("error",n),W("load",n);break;case"details":W("toggle",n);break;case"input":Al(n,o),W("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!o.multiple},W("invalid",n);break;case"textarea":Ol(n,o),W("invalid",n)}Oi(r,o),a=null;for(var l in o)if(o.hasOwnProperty(l)){var s=o[l];l==="children"?typeof s=="string"?n.textContent!==s&&(o.suppressHydrationWarning!==!0&&_n(n.textContent,s,e),a=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&_n(n.textContent,s,e),a=["children",""+s]):Kr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&W("scroll",n)}switch(r){case"input":Sn(n),Dl(n,o,!0);break;case"textarea":Sn(n),Ml(n);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(n.onclick=ua)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{l=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=wc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=l.createElement(r,{is:n.is}):(e=l.createElement(r),r==="select"&&(l=e,n.multiple?l.multiple=!0:n.size&&(l.size=n.size))):e=l.createElementNS(e,r),e[Ge]=t,e[ln]=n,qu(e,t,!1,!1),t.stateNode=e;e:{switch(l=Mi(r,n),r){case"dialog":W("cancel",e),W("close",e),a=n;break;case"iframe":case"object":case"embed":W("load",e),a=n;break;case"video":case"audio":for(a=0;a<Wr.length;a++)W(Wr[a],e);a=n;break;case"source":W("error",e),a=n;break;case"img":case"image":case"link":W("error",e),W("load",e),a=n;break;case"details":W("toggle",e),a=n;break;case"input":Al(e,n),a=_i(e,n),W("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=V({},n,{value:void 0}),W("invalid",e);break;case"textarea":Ol(e,n),a=Ai(e,n),W("invalid",e);break;default:a=n}Oi(r,a),s=a;for(o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="style"?kc(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&bc(e,c)):o==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Xr(e,c):typeof c=="number"&&Xr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Kr.hasOwnProperty(o)?c!=null&&o==="onScroll"&&W("scroll",e):c!=null&&zo(e,o,c,l))}switch(r){case"input":Sn(e),Dl(e,n,!1);break;case"textarea":Sn(e),Ml(e);break;case"option":n.value!=null&&e.setAttribute("value",""+Et(n.value));break;case"select":e.multiple=!!n.multiple,o=n.value,o!=null?sr(e,!!n.multiple,o,!1):n.defaultValue!=null&&sr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=ua)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return oe(t),null;case 6:if(e&&t.stateNode!=null)Qu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(k(166));if(r=Ot(cn.current),Ot(Xe.current),Ln(t)){if(n=t.stateNode,r=t.memoizedProps,n[Ge]=t,(o=n.nodeValue!==r)&&(e=je,e!==null))switch(e.tag){case 3:_n(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_n(n.nodeValue,r,(e.mode&1)!==0)}o&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Ge]=t,t.stateNode=n}return oe(t),null;case 13:if(U(H),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&be!==null&&t.mode&1&&!(t.flags&128))uu(),gr(),t.flags|=98560,o=!1;else if(o=Ln(t),n!==null&&n.dehydrated!==null){if(e===null){if(!o)throw Error(k(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(k(317));o[Ge]=t}else gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;oe(t),o=!1}else We!==null&&(wo(We),We=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?J===0&&(J=3):pl())),t.updateQueue!==null&&(t.flags|=4),oe(t),null);case 4:return yr(),fo(e,t),e===null&&an(t.stateNode.containerInfo),oe(t),null;case 10:return Ko(t.type._context),oe(t),null;case 17:return ge(t.type)&&da(),oe(t),null;case 19:if(U(H),o=t.memoizedState,o===null)return oe(t),null;if(n=(t.flags&128)!==0,l=o.rendering,l===null)if(n)Lr(o,!1);else{if(J!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=ya(e),l!==null){for(t.flags|=128,Lr(o,!1),n=l.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)o=r,e=n,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return M(H,H.current&1|2),t.child}e=e.sibling}o.tail!==null&&G()>wr&&(t.flags|=128,n=!0,Lr(o,!1),t.lanes=4194304)}else{if(!n)if(e=ya(l),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!$)return oe(t),null}else 2*G()-o.renderingStartTime>wr&&r!==1073741824&&(t.flags|=128,n=!0,Lr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(r=o.last,r!==null?r.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=G(),t.sibling=null,r=H.current,M(H,n?r&1|2:r&1),t):(oe(t),null);case 22:case 23:return fl(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?we&1073741824&&(oe(t),t.subtreeFlags&6&&(t.flags|=8192)):oe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Op(e,t){switch(Vo(t),t.tag){case 1:return ge(t.type)&&da(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return yr(),U(he),U(se),tl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return el(t),null;case 13:if(U(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(H),null;case 4:return yr(),null;case 10:return Ko(t.type._context),null;case 22:case 23:return fl(),null;case 24:return null;default:return null}}var Dn=!1,le=!1,Mp=typeof WeakSet=="function"?WeakSet:Set,P=null;function or(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Q(e,t,n)}else r.current=null}function po(e,t,r){try{r()}catch(n){Q(e,t,n)}}var Ps=!1;function Wp(e,t){if(Gi=la,e=Xc(),Ho(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,o=n.focusNode;n=n.focusOffset;try{r.nodeType,o.nodeType}catch{r=null;break e}var l=0,s=-1,c=-1,u=0,m=0,h=e,g=null;t:for(;;){for(var x;h!==r||a!==0&&h.nodeType!==3||(s=l+a),h!==o||n!==0&&h.nodeType!==3||(c=l+n),h.nodeType===3&&(l+=h.nodeValue.length),(x=h.firstChild)!==null;)g=h,h=x;for(;;){if(h===e)break t;if(g===r&&++u===a&&(s=l),g===o&&++m===n&&(c=l),(x=h.nextSibling)!==null)break;h=g,g=h.parentNode}h=x}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ki={focusedElem:e,selectionRange:r},la=!1,P=t;P!==null;)if(t=P,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,P=e;else for(;P!==null;){t=P;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var b=w.memoizedProps,y=w.memoizedState,d=t.stateNode,f=d.getSnapshotBeforeUpdate(t.elementType===t.type?b:Oe(t.type,b),y);d.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(j){Q(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,P=e;break}P=t.return}return w=Ps,Ps=!1,w}function Qr(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,o!==void 0&&po(t,r,o)}a=a.next}while(a!==n)}}function Aa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function mo(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Yu(e){var t=e.alternate;t!==null&&(e.alternate=null,Yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ge],delete t[ln],delete t[Zi],delete t[jp],delete t[kp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Gu(e){return e.tag===5||e.tag===3||e.tag===4}function Rs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Gu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ho(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ua));else if(n!==4&&(e=e.child,e!==null))for(ho(e,t,r),e=e.sibling;e!==null;)ho(e,t,r),e=e.sibling}function go(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(go(e,t,r),e=e.sibling;e!==null;)go(e,t,r),e=e.sibling}var re=null,Me=!1;function ut(e,t,r){for(r=r.child;r!==null;)Ku(e,t,r),r=r.sibling}function Ku(e,t,r){if(Ke&&typeof Ke.onCommitFiberUnmount=="function")try{Ke.onCommitFiberUnmount(Pa,r)}catch{}switch(r.tag){case 5:le||or(r,t);case 6:var n=re,a=Me;re=null,ut(e,t,r),re=n,Me=a,re!==null&&(Me?(e=re,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):re.removeChild(r.stateNode));break;case 18:re!==null&&(Me?(e=re,r=r.stateNode,e.nodeType===8?fi(e.parentNode,r):e.nodeType===1&&fi(e,r),tn(e)):fi(re,r.stateNode));break;case 4:n=re,a=Me,re=r.stateNode.containerInfo,Me=!0,ut(e,t,r),re=n,Me=a;break;case 0:case 11:case 14:case 15:if(!le&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var o=a,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&po(r,t,l),a=a.next}while(a!==n)}ut(e,t,r);break;case 1:if(!le&&(or(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){Q(r,t,s)}ut(e,t,r);break;case 21:ut(e,t,r);break;case 22:r.mode&1?(le=(n=le)||r.memoizedState!==null,ut(e,t,r),le=n):ut(e,t,r);break;default:ut(e,t,r)}}function Ts(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Mp),t.forEach(function(n){var a=Gp.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function De(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var o=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:re=s.stateNode,Me=!1;break e;case 3:re=s.stateNode.containerInfo,Me=!0;break e;case 4:re=s.stateNode.containerInfo,Me=!0;break e}s=s.return}if(re===null)throw Error(k(160));Ku(o,l,a),re=null,Me=!1;var c=a.alternate;c!==null&&(c.return=null),a.return=null}catch(u){Q(a,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Xu(t,e),t=t.sibling}function Xu(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(De(t,e),Qe(e),n&4){try{Qr(3,e,e.return),Aa(3,e)}catch(b){Q(e,e.return,b)}try{Qr(5,e,e.return)}catch(b){Q(e,e.return,b)}}break;case 1:De(t,e),Qe(e),n&512&&r!==null&&or(r,r.return);break;case 5:if(De(t,e),Qe(e),n&512&&r!==null&&or(r,r.return),e.flags&32){var a=e.stateNode;try{Xr(a,"")}catch(b){Q(e,e.return,b)}}if(n&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,l=r!==null?r.memoizedProps:o,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&yc(a,o),Mi(s,l);var u=Mi(s,o);for(l=0;l<c.length;l+=2){var m=c[l],h=c[l+1];m==="style"?kc(a,h):m==="dangerouslySetInnerHTML"?bc(a,h):m==="children"?Xr(a,h):zo(a,m,h,u)}switch(s){case"input":Li(a,o);break;case"textarea":xc(a,o);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?sr(a,!!o.multiple,x,!1):g!==!!o.multiple&&(o.defaultValue!=null?sr(a,!!o.multiple,o.defaultValue,!0):sr(a,!!o.multiple,o.multiple?[]:"",!1))}a[ln]=o}catch(b){Q(e,e.return,b)}}break;case 6:if(De(t,e),Qe(e),n&4){if(e.stateNode===null)throw Error(k(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(b){Q(e,e.return,b)}}break;case 3:if(De(t,e),Qe(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{tn(t.containerInfo)}catch(b){Q(e,e.return,b)}break;case 4:De(t,e),Qe(e);break;case 13:De(t,e),Qe(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(ul=G())),n&4&&Ts(e);break;case 22:if(m=r!==null&&r.memoizedState!==null,e.mode&1?(le=(u=le)||m,De(t,e),le=u):De(t,e),Qe(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!m&&e.mode&1)for(P=e,m=e.child;m!==null;){for(h=P=m;P!==null;){switch(g=P,x=g.child,g.tag){case 0:case 11:case 14:case 15:Qr(4,g,g.return);break;case 1:or(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(b){Q(n,r,b)}}break;case 5:or(g,g.return);break;case 22:if(g.memoizedState!==null){Is(h);continue}}x!==null?(x.return=g,P=x):Is(h)}m=m.sibling}e:for(m=null,h=e;;){if(h.tag===5){if(m===null){m=h;try{a=h.stateNode,u?(o=a.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=h.stateNode,c=h.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=jc("display",l))}catch(b){Q(e,e.return,b)}}}else if(h.tag===6){if(m===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(b){Q(e,e.return,b)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;m===h&&(m=null),h=h.return}m===h&&(m=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:De(t,e),Qe(e),n&4&&Ts(e);break;case 21:break;default:De(t,e),Qe(e)}}function Qe(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Gu(r)){var n=r;break e}r=r.return}throw Error(k(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(Xr(a,""),n.flags&=-33);var o=Rs(e);go(e,o,a);break;case 3:case 4:var l=n.stateNode.containerInfo,s=Rs(e);ho(e,s,l);break;default:throw Error(k(161))}}catch(c){Q(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Up(e,t,r){P=e,Ju(e)}function Ju(e,t,r){for(var n=(e.mode&1)!==0;P!==null;){var a=P,o=a.child;if(a.tag===22&&n){var l=a.memoizedState!==null||Dn;if(!l){var s=a.alternate,c=s!==null&&s.memoizedState!==null||le;s=Dn;var u=le;if(Dn=l,(le=c)&&!u)for(P=a;P!==null;)l=P,c=l.child,l.tag===22&&l.memoizedState!==null?_s(a):c!==null?(c.return=l,P=c):_s(a);for(;o!==null;)P=o,Ju(o),o=o.sibling;P=a,Dn=s,le=u}zs(e)}else a.subtreeFlags&8772&&o!==null?(o.return=a,P=o):zs(e)}}function zs(e){for(;P!==null;){var t=P;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||Aa(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!le)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Oe(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ms(t,o,n);break;case 3:var l=t.updateQueue;if(l!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}ms(t,l,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var m=u.memoizedState;if(m!==null){var h=m.dehydrated;h!==null&&tn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}le||t.flags&512&&mo(t)}catch(g){Q(t,t.return,g)}}if(t===e){P=null;break}if(r=t.sibling,r!==null){r.return=t.return,P=r;break}P=t.return}}function Is(e){for(;P!==null;){var t=P;if(t===e){P=null;break}var r=t.sibling;if(r!==null){r.return=t.return,P=r;break}P=t.return}}function _s(e){for(;P!==null;){var t=P;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Aa(4,t)}catch(c){Q(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(c){Q(t,a,c)}}var o=t.return;try{mo(t)}catch(c){Q(t,o,c)}break;case 5:var l=t.return;try{mo(t)}catch(c){Q(t,l,c)}}}catch(c){Q(t,t.return,c)}if(t===e){P=null;break}var s=t.sibling;if(s!==null){s.return=t.return,P=s;break}P=t.return}}var $p=Math.ceil,ba=ct.ReactCurrentDispatcher,sl=ct.ReactCurrentOwner,Ie=ct.ReactCurrentBatchConfig,F=0,te=null,K=null,ne=0,we=0,lr=Rt(0),J=0,pn=null,Ht=0,Da=0,cl=0,Yr=null,pe=null,ul=0,wr=1/0,Ze=null,ja=!1,vo=null,kt=null,On=!1,vt=null,ka=0,Gr=0,yo=null,Xn=-1,Jn=0;function ue(){return F&6?G():Xn!==-1?Xn:Xn=G()}function Nt(e){return e.mode&1?F&2&&ne!==0?ne&-ne:Sp.transition!==null?(Jn===0&&(Jn=Fc()),Jn):(e=D,e!==0||(e=window.event,e=e===void 0?16:$c(e.type)),e):1}function $e(e,t,r,n){if(50<Gr)throw Gr=0,yo=null,Error(k(185));hn(e,r,n),(!(F&2)||e!==te)&&(e===te&&(!(F&2)&&(Da|=r),J===4&&ht(e,ne)),ve(e,n),r===1&&F===0&&!(t.mode&1)&&(wr=G()+500,_a&&Tt()))}function ve(e,t){var r=e.callbackNode;Sf(e,t);var n=oa(e,e===te?ne:0);if(n===0)r!==null&&$l(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&$l(r),t===1)e.tag===0?Np(Ls.bind(null,e)):lu(Ls.bind(null,e)),wp(function(){!(F&6)&&Tt()}),r=null;else{switch(Ac(n)){case 1:r=Ao;break;case 4:r=_c;break;case 16:r=ia;break;case 536870912:r=Lc;break;default:r=ia}r=od(r,Zu.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Zu(e,t){if(Xn=-1,Jn=0,F&6)throw Error(k(327));var r=e.callbackNode;if(pr()&&e.callbackNode!==r)return null;var n=oa(e,e===te?ne:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Na(e,n);else{t=n;var a=F;F|=2;var o=td();(te!==e||ne!==t)&&(Ze=null,wr=G()+500,Mt(e,t));do try{qp();break}catch(s){ed(e,s)}while(!0);Go(),ba.current=o,F=a,K!==null?t=0:(te=null,ne=0,t=J)}if(t!==0){if(t===2&&(a=Hi(e),a!==0&&(n=a,t=xo(e,a))),t===1)throw r=pn,Mt(e,0),ht(e,n),ve(e,G()),r;if(t===6)ht(e,n);else{if(a=e.current.alternate,!(n&30)&&!Bp(a)&&(t=Na(e,n),t===2&&(o=Hi(e),o!==0&&(n=o,t=xo(e,o))),t===1))throw r=pn,Mt(e,0),ht(e,n),ve(e,G()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(k(345));case 2:Ft(e,pe,Ze);break;case 3:if(ht(e,n),(n&130023424)===n&&(t=ul+500-G(),10<t)){if(oa(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){ue(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Ji(Ft.bind(null,e,pe,Ze),t);break}Ft(e,pe,Ze);break;case 4:if(ht(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var l=31-Ue(n);o=1<<l,l=t[l],l>a&&(a=l),n&=~o}if(n=a,n=G()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*$p(n/1960))-n,10<n){e.timeoutHandle=Ji(Ft.bind(null,e,pe,Ze),n);break}Ft(e,pe,Ze);break;case 5:Ft(e,pe,Ze);break;default:throw Error(k(329))}}}return ve(e,G()),e.callbackNode===r?Zu.bind(null,e):null}function xo(e,t){var r=Yr;return e.current.memoizedState.isDehydrated&&(Mt(e,t).flags|=256),e=Na(e,t),e!==2&&(t=pe,pe=r,t!==null&&wo(t)),e}function wo(e){pe===null?pe=e:pe.push.apply(pe,e)}function Bp(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],o=a.getSnapshot;a=a.value;try{if(!He(o(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ht(e,t){for(t&=~cl,t&=~Da,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Ue(t),n=1<<r;e[r]=-1,t&=~n}}function Ls(e){if(F&6)throw Error(k(327));pr();var t=oa(e,0);if(!(t&1))return ve(e,G()),null;var r=Na(e,t);if(e.tag!==0&&r===2){var n=Hi(e);n!==0&&(t=n,r=xo(e,n))}if(r===1)throw r=pn,Mt(e,0),ht(e,t),ve(e,G()),r;if(r===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ft(e,pe,Ze),ve(e,G()),null}function dl(e,t){var r=F;F|=1;try{return e(t)}finally{F=r,F===0&&(wr=G()+500,_a&&Tt())}}function qt(e){vt!==null&&vt.tag===0&&!(F&6)&&pr();var t=F;F|=1;var r=Ie.transition,n=D;try{if(Ie.transition=null,D=1,e)return e()}finally{D=n,Ie.transition=r,F=t,!(F&6)&&Tt()}}function fl(){we=lr.current,U(lr)}function Mt(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,xp(r)),K!==null)for(r=K.return;r!==null;){var n=r;switch(Vo(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&da();break;case 3:yr(),U(he),U(se),tl();break;case 5:el(n);break;case 4:yr();break;case 13:U(H);break;case 19:U(H);break;case 10:Ko(n.type._context);break;case 22:case 23:fl()}r=r.return}if(te=e,K=e=St(e.current,null),ne=we=t,J=0,pn=null,cl=Da=Ht=0,pe=Yr=null,Dt!==null){for(t=0;t<Dt.length;t++)if(r=Dt[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,o=r.pending;if(o!==null){var l=o.next;o.next=a,n.next=l}r.pending=n}Dt=null}return e}function ed(e,t){do{var r=K;try{if(Go(),Yn.current=wa,xa){for(var n=q.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}xa=!1}if(Bt=0,ee=X=q=null,Vr=!1,un=0,sl.current=null,r===null||r.return===null){J=1,pn=t,K=null;break}e:{var o=e,l=r.return,s=r,c=t;if(t=ne,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,m=s,h=m.tag;if(!(m.mode&1)&&(h===0||h===11||h===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=bs(l);if(x!==null){x.flags&=-257,js(x,l,s,o,t),x.mode&1&&ws(o,u,t),t=x,c=u;var w=t.updateQueue;if(w===null){var b=new Set;b.add(c),t.updateQueue=b}else w.add(c);break e}else{if(!(t&1)){ws(o,u,t),pl();break e}c=Error(k(426))}}else if($&&s.mode&1){var y=bs(l);if(y!==null){!(y.flags&65536)&&(y.flags|=256),js(y,l,s,o,t),Qo(xr(c,s));break e}}o=c=xr(c,s),J!==4&&(J=2),Yr===null?Yr=[o]:Yr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=Du(o,c,t);ps(o,d);break e;case 1:s=c;var f=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(kt===null||!kt.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var j=Ou(o,s,t);ps(o,j);break e}}o=o.return}while(o!==null)}nd(r)}catch(N){t=N,K===r&&r!==null&&(K=r=r.return);continue}break}while(!0)}function td(){var e=ba.current;return ba.current=wa,e===null?wa:e}function pl(){(J===0||J===3||J===2)&&(J=4),te===null||!(Ht&268435455)&&!(Da&268435455)||ht(te,ne)}function Na(e,t){var r=F;F|=2;var n=td();(te!==e||ne!==t)&&(Ze=null,Mt(e,t));do try{Hp();break}catch(a){ed(e,a)}while(!0);if(Go(),F=r,ba.current=n,K!==null)throw Error(k(261));return te=null,ne=0,J}function Hp(){for(;K!==null;)rd(K)}function qp(){for(;K!==null&&!gf();)rd(K)}function rd(e){var t=id(e.alternate,e,we);e.memoizedProps=e.pendingProps,t===null?nd(e):K=t,sl.current=null}function nd(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Op(r,t),r!==null){r.flags&=32767,K=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{J=6,K=null;return}}else if(r=Dp(r,t,we),r!==null){K=r;return}if(t=t.sibling,t!==null){K=t;return}K=t=e}while(t!==null);J===0&&(J=5)}function Ft(e,t,r){var n=D,a=Ie.transition;try{Ie.transition=null,D=1,Vp(e,t,r,n)}finally{Ie.transition=a,D=n}return null}function Vp(e,t,r,n){do pr();while(vt!==null);if(F&6)throw Error(k(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var o=r.lanes|r.childLanes;if(Ef(e,o),e===te&&(K=te=null,ne=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||On||(On=!0,od(ia,function(){return pr(),null})),o=(r.flags&15990)!==0,r.subtreeFlags&15990||o){o=Ie.transition,Ie.transition=null;var l=D;D=1;var s=F;F|=4,sl.current=null,Wp(e,r),Xu(r,e),fp(Ki),la=!!Gi,Ki=Gi=null,e.current=r,Up(r),vf(),F=s,D=l,Ie.transition=o}else e.current=r;if(On&&(On=!1,vt=e,ka=a),o=e.pendingLanes,o===0&&(kt=null),wf(r.stateNode),ve(e,G()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(ja)throw ja=!1,e=vo,vo=null,e;return ka&1&&e.tag!==0&&pr(),o=e.pendingLanes,o&1?e===yo?Gr++:(Gr=0,yo=e):Gr=0,Tt(),null}function pr(){if(vt!==null){var e=Ac(ka),t=Ie.transition,r=D;try{if(Ie.transition=null,D=16>e?16:e,vt===null)var n=!1;else{if(e=vt,vt=null,ka=0,F&6)throw Error(k(331));var a=F;for(F|=4,P=e.current;P!==null;){var o=P,l=o.child;if(P.flags&16){var s=o.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(P=u;P!==null;){var m=P;switch(m.tag){case 0:case 11:case 15:Qr(8,m,o)}var h=m.child;if(h!==null)h.return=m,P=h;else for(;P!==null;){m=P;var g=m.sibling,x=m.return;if(Yu(m),m===u){P=null;break}if(g!==null){g.return=x,P=g;break}P=x}}}var w=o.alternate;if(w!==null){var b=w.child;if(b!==null){w.child=null;do{var y=b.sibling;b.sibling=null,b=y}while(b!==null)}}P=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,P=l;else e:for(;P!==null;){if(o=P,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Qr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,P=d;break e}P=o.return}}var f=e.current;for(P=f;P!==null;){l=P;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,P=p;else e:for(l=f;P!==null;){if(s=P,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Aa(9,s)}}catch(N){Q(s,s.return,N)}if(s===l){P=null;break e}var j=s.sibling;if(j!==null){j.return=s.return,P=j;break e}P=s.return}}if(F=a,Tt(),Ke&&typeof Ke.onPostCommitFiberRoot=="function")try{Ke.onPostCommitFiberRoot(Pa,e)}catch{}n=!0}return n}finally{D=r,Ie.transition=t}}return!1}function Fs(e,t,r){t=xr(r,t),t=Du(e,t,1),e=jt(e,t,1),t=ue(),e!==null&&(hn(e,1,t),ve(e,t))}function Q(e,t,r){if(e.tag===3)Fs(e,e,r);else for(;t!==null;){if(t.tag===3){Fs(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(kt===null||!kt.has(n))){e=xr(r,e),e=Ou(t,e,1),t=jt(t,e,1),e=ue(),t!==null&&(hn(t,1,e),ve(t,e));break}}t=t.return}}function Qp(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=ue(),e.pingedLanes|=e.suspendedLanes&r,te===e&&(ne&r)===r&&(J===4||J===3&&(ne&130023424)===ne&&500>G()-ul?Mt(e,0):cl|=r),ve(e,t)}function ad(e,t){t===0&&(e.mode&1?(t=Pn,Pn<<=1,!(Pn&130023424)&&(Pn=4194304)):t=1);var r=ue();e=ot(e,t),e!==null&&(hn(e,t,r),ve(e,r))}function Yp(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),ad(e,r)}function Gp(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(k(314))}n!==null&&n.delete(t),ad(e,r)}var id;id=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)me=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return me=!1,Ap(e,t,r);me=!!(e.flags&131072)}else me=!1,$&&t.flags&1048576&&su(t,ma,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Kn(e,t),e=t.pendingProps;var a=hr(t,se.current);fr(t,r),a=nl(null,t,n,e,a,r);var o=al();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ge(n)?(o=!0,fa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Jo(t),a.updater=La,t.stateNode=a,a._reactInternals=t,io(t,n,e,r),t=so(null,t,n,!0,o,r)):(t.tag=0,$&&o&&qo(t),ce(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Kn(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=Xp(n),e=Oe(n,e),a){case 0:t=lo(null,t,n,e,r);break e;case 1:t=Ss(null,t,n,e,r);break e;case 11:t=ks(null,t,n,e,r);break e;case 14:t=Ns(null,t,n,Oe(n.type,e),r);break e}throw Error(k(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Oe(n,a),lo(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Oe(n,a),Ss(e,t,n,a,r);case 3:e:{if($u(t),e===null)throw Error(k(387));n=t.pendingProps,o=t.memoizedState,a=o.element,fu(e,t),va(t,n,null,r);var l=t.memoizedState;if(n=l.element,o.isDehydrated)if(o={element:n,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=xr(Error(k(423)),t),t=Es(e,t,n,r,a);break e}else if(n!==a){a=xr(Error(k(424)),t),t=Es(e,t,n,r,a);break e}else for(be=bt(t.stateNode.containerInfo.firstChild),je=t,$=!0,We=null,r=gu(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(gr(),n===a){t=lt(e,t,r);break e}ce(e,t,n,r)}t=t.child}return t;case 5:return vu(t),e===null&&ro(t),n=t.type,a=t.pendingProps,o=e!==null?e.memoizedProps:null,l=a.children,Xi(n,a)?l=null:o!==null&&Xi(n,o)&&(t.flags|=32),Uu(e,t),ce(e,t,l,r),t.child;case 6:return e===null&&ro(t),null;case 13:return Bu(e,t,r);case 4:return Zo(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=vr(t,null,n,r):ce(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Oe(n,a),ks(e,t,n,a,r);case 7:return ce(e,t,t.pendingProps,r),t.child;case 8:return ce(e,t,t.pendingProps.children,r),t.child;case 12:return ce(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,M(ha,n._currentValue),n._currentValue=l,o!==null)if(He(o.value,l)){if(o.children===a.children&&!he.current){t=lt(e,t,r);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var s=o.dependencies;if(s!==null){l=o.child;for(var c=s.firstContext;c!==null;){if(c.context===n){if(o.tag===1){c=nt(-1,r&-r),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var m=u.pending;m===null?c.next=c:(c.next=m.next,m.next=c),u.pending=c}}o.lanes|=r,c=o.alternate,c!==null&&(c.lanes|=r),no(o.return,r,t),s.lanes|=r;break}c=c.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(k(341));l.lanes|=r,s=l.alternate,s!==null&&(s.lanes|=r),no(l,r,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}ce(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,fr(t,r),a=_e(a),n=n(a),t.flags|=1,ce(e,t,n,r),t.child;case 14:return n=t.type,a=Oe(n,t.pendingProps),a=Oe(n.type,a),Ns(e,t,n,a,r);case 15:return Mu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Oe(n,a),Kn(e,t),t.tag=1,ge(n)?(e=!0,fa(t)):e=!1,fr(t,r),mu(t,n,a),io(t,n,a,r),so(null,t,n,!0,e,r);case 19:return Hu(e,t,r);case 22:return Wu(e,t,r)}throw Error(k(156,t.tag))};function od(e,t){return Ic(e,t)}function Kp(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ze(e,t,r,n){return new Kp(e,t,r,n)}function ml(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xp(e){if(typeof e=="function")return ml(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_o)return 11;if(e===Lo)return 14}return 2}function St(e,t){var r=e.alternate;return r===null?(r=ze(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Zn(e,t,r,n,a,o){var l=2;if(n=e,typeof e=="function")ml(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Xt:return Wt(r.children,a,o,t);case Io:l=8,a|=8;break;case Ri:return e=ze(12,r,t,a|2),e.elementType=Ri,e.lanes=o,e;case Ti:return e=ze(13,r,t,a),e.elementType=Ti,e.lanes=o,e;case zi:return e=ze(19,r,t,a),e.elementType=zi,e.lanes=o,e;case hc:return Oa(r,a,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case pc:l=10;break e;case mc:l=9;break e;case _o:l=11;break e;case Lo:l=14;break e;case ft:l=16,n=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=ze(l,r,t,a),t.elementType=e,t.type=n,t.lanes=o,t}function Wt(e,t,r,n){return e=ze(7,e,n,t),e.lanes=r,e}function Oa(e,t,r,n){return e=ze(22,e,n,t),e.elementType=hc,e.lanes=r,e.stateNode={isHidden:!1},e}function wi(e,t,r){return e=ze(6,e,null,t),e.lanes=r,e}function bi(e,t,r){return t=ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jp(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ti(0),this.expirationTimes=ti(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function hl(e,t,r,n,a,o,l,s,c){return e=new Jp(e,t,r,s,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ze(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jo(o),e}function Zp(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Kt,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function ld(e){if(!e)return Ct;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ge(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var r=e.type;if(ge(r))return ou(e,r,t)}return t}function sd(e,t,r,n,a,o,l,s,c){return e=hl(r,n,!0,e,a,o,l,s,c),e.context=ld(null),r=e.current,n=ue(),a=Nt(r),o=nt(n,a),o.callback=t??null,jt(r,o,a),e.current.lanes=a,hn(e,a,n),ve(e,n),e}function Ma(e,t,r,n){var a=t.current,o=ue(),l=Nt(a);return r=ld(r),t.context===null?t.context=r:t.pendingContext=r,t=nt(o,l),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=jt(a,t,l),e!==null&&($e(e,a,l,o),Qn(e,a,l)),l}function Sa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function As(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function gl(e,t){As(e,t),(e=e.alternate)&&As(e,t)}function em(){return null}var cd=typeof reportError=="function"?reportError:function(e){console.error(e)};function vl(e){this._internalRoot=e}Wa.prototype.render=vl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ma(e,t,null,null)};Wa.prototype.unmount=vl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;qt(function(){Ma(null,e,null,null)}),t[it]=null}};function Wa(e){this._internalRoot=e}Wa.prototype.unstable_scheduleHydration=function(e){if(e){var t=Mc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<mt.length&&t!==0&&t<mt[r].priority;r++);mt.splice(r,0,e),r===0&&Uc(e)}};function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ua(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ds(){}function tm(e,t,r,n,a){if(a){if(typeof n=="function"){var o=n;n=function(){var u=Sa(l);o.call(u)}}var l=sd(t,n,e,0,null,!1,!1,"",Ds);return e._reactRootContainer=l,e[it]=l.current,an(e.nodeType===8?e.parentNode:e),qt(),l}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var s=n;n=function(){var u=Sa(c);s.call(u)}}var c=hl(e,0,!1,null,null,!1,!1,"",Ds);return e._reactRootContainer=c,e[it]=c.current,an(e.nodeType===8?e.parentNode:e),qt(function(){Ma(t,c,r,n)}),c}function $a(e,t,r,n,a){var o=r._reactRootContainer;if(o){var l=o;if(typeof a=="function"){var s=a;a=function(){var c=Sa(l);s.call(c)}}Ma(t,l,e,a)}else l=tm(r,t,e,a,n);return Sa(l)}Dc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Mr(t.pendingLanes);r!==0&&(Do(t,r|1),ve(t,G()),!(F&6)&&(wr=G()+500,Tt()))}break;case 13:qt(function(){var n=ot(e,1);if(n!==null){var a=ue();$e(n,e,1,a)}}),gl(e,1)}};Oo=function(e){if(e.tag===13){var t=ot(e,134217728);if(t!==null){var r=ue();$e(t,e,134217728,r)}gl(e,134217728)}};Oc=function(e){if(e.tag===13){var t=Nt(e),r=ot(e,t);if(r!==null){var n=ue();$e(r,e,t,n)}gl(e,t)}};Mc=function(){return D};Wc=function(e,t){var r=D;try{return D=e,t()}finally{D=r}};Ui=function(e,t,r){switch(t){case"input":if(Li(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=Ia(n);if(!a)throw Error(k(90));vc(n),Li(n,a)}}}break;case"textarea":xc(e,r);break;case"select":t=r.value,t!=null&&sr(e,!!r.multiple,t,!1)}};Ec=dl;Cc=qt;var rm={usingClientEntryPoint:!1,Events:[vn,tr,Ia,Nc,Sc,dl]},Fr={findFiberByHostInstance:At,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},nm={bundleType:Fr.bundleType,version:Fr.version,rendererPackageName:Fr.rendererPackageName,rendererConfig:Fr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ct.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tc(e),e===null?null:e.stateNode},findFiberByHostInstance:Fr.findFiberByHostInstance||em,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mn=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mn.isDisabled&&Mn.supportsFiber)try{Pa=Mn.inject(nm),Ke=Mn}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rm;Ne.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!yl(t))throw Error(k(200));return Zp(e,t,null,r)};Ne.createRoot=function(e,t){if(!yl(e))throw Error(k(299));var r=!1,n="",a=cd;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=hl(e,1,!1,null,null,r,!1,n,a),e[it]=t.current,an(e.nodeType===8?e.parentNode:e),new vl(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Tc(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return qt(e)};Ne.hydrate=function(e,t,r){if(!Ua(t))throw Error(k(200));return $a(null,e,t,!0,r)};Ne.hydrateRoot=function(e,t,r){if(!yl(e))throw Error(k(405));var n=r!=null&&r.hydratedSources||null,a=!1,o="",l=cd;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(o=r.identifierPrefix),r.onRecoverableError!==void 0&&(l=r.onRecoverableError)),t=sd(t,null,e,1,r??null,a,!1,o,l),e[it]=t.current,an(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new Wa(t)};Ne.render=function(e,t,r){if(!Ua(t))throw Error(k(200));return $a(null,e,t,!1,r)};Ne.unmountComponentAtNode=function(e){if(!Ua(e))throw Error(k(40));return e._reactRootContainer?(qt(function(){$a(null,null,e,!1,function(){e._reactRootContainer=null,e[it]=null})}),!0):!1};Ne.unstable_batchedUpdates=dl;Ne.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Ua(r))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return $a(e,t,r,!1,n)};Ne.version="18.2.0-next-9e3b772b8-20220608";function ud(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ud)}catch(e){console.error(e)}}ud(),sc.exports=Ne;var am=sc.exports,Os=am;Ci.createRoot=Os.createRoot,Ci.hydrateRoot=Os.hydrateRoot;const im="modulepreload",om=function(e){return"/"+e},Ms={},lm=function(t,r,n){return!r||r.length===0?t():(document.getElementsByTagName("link"),Promise.all(r.map(a=>{if(a=om(a),a in Ms)return;Ms[a]=!0;const o=a.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${l}`))return;const s=document.createElement("link");if(s.rel=o?"stylesheet":im,o||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),o)return new Promise((c,u)=>{s.addEventListener("load",c),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>t()).catch(a=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}))};var xl=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,dd=/^[\\/]{2}/;function sm(e,t){return t+e.replace(/\\/g,"/")}var Ws="popstate";function Us(e){return typeof e=="object"&&e!=null&&"pathname"in e&&"search"in e&&"hash"in e&&"state"in e&&"key"in e}function cm(e={}){function t(n,a){var u;let o=(u=a.state)==null?void 0:u.masked,{pathname:l,search:s,hash:c}=o||n.location;return bo("",{pathname:l,search:s,hash:c},a.state&&a.state.usr||null,a.state&&a.state.key||"default",o?{pathname:n.location.pathname,search:n.location.search,hash:n.location.hash}:void 0)}function r(n,a){return typeof a=="string"?a:Vt(a)}return dm(t,r,null,e)}function B(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Fe(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function um(){return Math.random().toString(36).substring(2,10)}function $s(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function bo(e,t,r=null,n,a){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?Sr(t):t,state:r,key:t&&t.key||n||um(),mask:a}}function Vt({pathname:e="/",search:t="",hash:r=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Sr(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substring(r),e=e.substring(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substring(n),e=e.substring(0,n)),e&&(t.pathname=e)}return t}function dm(e,t,r,n={}){let{window:a=document.defaultView,v5Compat:o=!1}=n,l=a.history,s="POP",c=null,u=m();u==null&&(u=0,l.replaceState({...l.state,idx:u},""));function m(){return(l.state||{idx:null}).idx}function h(){s="POP";let y=m(),d=y==null?null:y-u;u=y,c&&c({action:s,location:b.location,delta:d})}function g(y,d){s="PUSH";let f=Us(y)?y:bo(b.location,y,d);u=m()+1;let p=$s(f,u),j=b.createHref(f.mask||f);try{l.pushState(p,"",j)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;a.location.assign(j)}o&&c&&c({action:s,location:b.location,delta:1})}function x(y,d){s="REPLACE";let f=Us(y)?y:bo(b.location,y,d);u=m();let p=$s(f,u),j=b.createHref(f.mask||f);l.replaceState(p,"",j),o&&c&&c({action:s,location:b.location,delta:0})}function w(y){return fm(a,y)}let b={get action(){return s},get location(){return e(a,l)},listen(y){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(Ws,h),c=y,()=>{a.removeEventListener(Ws,h),c=null}},createHref(y){return t(a,y)},createURL:w,encodeLocation(y){let d=w(y);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:x,go(y){return l.go(y)}};return b}function fm(e,t,r=!1){let n="http://localhost";e&&(n=e.location.origin!=="null"?e.location.origin:e.location.href),B(n,"No window.location.(origin|href) available to create URL");let a=typeof t=="string"?t:Vt(t);return a=a.replace(/ $/,"%20"),!r&&dd.test(a)&&(a=n+a),new URL(a,n)}function fd(e,t,r="/"){return pm(e,t,r,!1)}function pm(e,t,r,n,a){let o=typeof t=="string"?Sr(t):t,l=st(o.pathname||"/",r);if(l==null)return null;let s=mm(e),c=null,u=Sm(l);for(let m=0;c==null&&m<s.length;++m)c=Nm(s[m],u,n);return c}function mm(e){let t=pd(e);return hm(t),t}function pd(e,t=[],r=[],n="",a=!1){let o=(l,s,c=a,u)=>{let m={relativePath:u===void 0?l.path||"":u,caseSensitive:l.caseSensitive===!0,childrenIndex:s,route:l};if(m.relativePath.startsWith("/")){if(!m.relativePath.startsWith(n)&&c)return;B(m.relativePath.startsWith(n),`Absolute route path "${m.relativePath}" nested under path "${n}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(n.length)}let h=Be([n,m.relativePath]),g=r.concat(m);l.children&&l.children.length>0&&(B(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),pd(l.children,t,g,h,c)),!(l.path==null&&!l.index)&&t.push({path:h,score:jm(h,l.index),routesMeta:g.map((x,w)=>{let[b,y]=gd(x.relativePath,x.caseSensitive,w===g.length-1);return{...x,matcher:b,compiledParams:y}})})};return e.forEach((l,s)=>{var c;if(l.path===""||!((c=l.path)!=null&&c.includes("?")))o(l,s);else for(let u of md(l.path))o(l,s,!0,u)}),t}function md(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(n.length===0)return a?[o,""]:[o];let l=md(n.join("/")),s=[];return s.push(...l.map(c=>c===""?o:[o,c].join("/"))),a&&s.push(...l),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function hm(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:km(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}var gm=/^:[\w-]+$/,vm=3,ym=2,xm=1,wm=10,bm=-2,Bs=e=>e==="*";function jm(e,t){let r=e.split("/"),n=r.length;return r.some(Bs)&&(n+=bm),t&&(n+=ym),r.filter(a=>!Bs(a)).reduce((a,o)=>a+(gm.test(o)?vm:o===""?xm:wm),n)}function km(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Nm(e,t,r=!1){let{routesMeta:n}=e,a={},o="/",l=[];for(let s=0;s<n.length;++s){let c=n[s],u=s===n.length-1,m=o==="/"?t:t.slice(o.length)||"/",h={path:c.relativePath,caseSensitive:c.caseSensitive,end:u},g=c.matcher&&c.compiledParams?hd(h,m,c.matcher,c.compiledParams):Ea(h,m),x=c.route;if(!g&&u&&r&&!n[n.length-1].route.index&&(g=Ea({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},m)),!g)return null;Object.assign(a,g.params),l.push({params:a,pathname:Be([o,g.pathname]),pathnameBase:Pm(Be([o,g.pathnameBase])),route:x}),g.pathnameBase!=="/"&&(o=Be([o,g.pathnameBase]))}return l}function Ea(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=gd(e.path,e.caseSensitive,e.end);return hd(e,t,r,n)}function hd(e,t,r,n){let a=t.match(r);if(!a)return null;let o=a[0],l=br(o,1),s=a.slice(1);return{params:n.reduce((u,{paramName:m,isOptional:h},g)=>{if(m==="*"){let w=s[g]||"";l=br(o.slice(0,o.length-w.length),1)}const x=s[g];return h&&!x?u[m]=void 0:u[m]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:l,pattern:e}}function gd(e,t=!1,r=!0){Fe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,s,c,u,m)=>{if(n.push({paramName:s,isOptional:c!=null}),c){let h=m.charAt(u+l.length);return h&&h!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function Sm(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Fe(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function st(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Em(e,t="/"){let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?Sr(e):e,o;return r?(r=vd(r),r.startsWith("/")||r.startsWith("\\")?o=Hs(r.substring(1),"/"):o=Hs(r,t)):o=t,{pathname:o,search:Rm(n),hash:Tm(a)}}function Hs(e,t){let r=br(t).split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function ji(e,t,r,n){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(n)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Cm(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function wl(e){let t=Cm(e);return t.map((r,n)=>n===t.length-1?r.pathname:r.pathnameBase)}function Ba(e,t,r,n=!1){let a;typeof e=="string"?a=Sr(e):(a={...e},B(!a.pathname||!a.pathname.includes("?"),ji("?","pathname","search",a)),B(!a.pathname||!a.pathname.includes("#"),ji("#","pathname","hash",a)),B(!a.search||!a.search.includes("#"),ji("#","search","hash",a)));let o=e===""||a.pathname==="",l=o?"/":a.pathname,s;if(l==null)s=r;else{let h=t.length-1;if(!n&&l.startsWith("..")){let g=l.split("/");for(;g[0]==="..";)g.shift(),h-=1;a.pathname=g.join("/")}s=h>=0?t[h]:"/"}let c=Em(a,s),u=l&&l!=="/"&&l.endsWith("/"),m=(o||l===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(u||m)&&(c.pathname+="/"),c}var vd=e=>e.replace(/[\\/]{2,}/g,"/"),Be=e=>vd(e.join("/"));function br(e,t=0){let r=e.length;for(;r>t&&e.charCodeAt(r-1)===47;)r--;return r===e.length?e:e.slice(0,r)}var Pm=e=>br(e).replace(/^\/*/,"/"),Rm=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Tm=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,zm=class{constructor(e,t,r,n=!1){this.status=e,this.statusText=t||"",this.internal=n,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function Im(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function _m(e){let t=e.map(r=>r.route.path).filter(Boolean);return Be(t)||"/"}var yd=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function xd(e,t){let r=e;if(typeof r!="string"||!xl.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let n=r,a=!1;if(yd)try{let o=new URL(window.location.href),l=dd.test(r)?new URL(sm(r,o.protocol)):new URL(r),s=st(l.pathname,t);l.origin===o.origin&&s!=null?r=s+l.search+l.hash:a=!0}catch{Fe(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:n,isExternal:a,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var qs=new URL("http://localhost");function bl(e){if(e.createURL)return e.createURL("/");try{return new URL(e.createHref("/"),qs)}catch{return qs}}function ki(e,t){return e.origin===t.origin&&(e.origin!=="null"||e.protocol===t.protocol&&e.host===t.host)}function Lm(e,t){if(e.startsWith("//"))return!0;let r=t.protocol.toLowerCase();return e.toLowerCase().startsWith(r)?t.host===""||e.slice(r.length).startsWith("//"):!1}function jl(e,t,r,n){let a=null;try{a=e==null?null:new URL(e,r)}catch{}let o=new URL(t,r),l=a!=null&&!ki(a,r),s=!ki(o,r);if(n==="reject"){if(l||s)throw new Error("External navigation is not allowed")}else if(s&&(a==null||!Lm(e,a)||!ki(a,o)))throw new Error("External navigation is not allowed")}var wd=["POST","PUT","PATCH","DELETE"];new Set(wd);var Fm=["GET",...wd];new Set(Fm);var Am=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Dm(e){try{return Am.includes(new URL(e).protocol)}catch{return!1}}var Er=v.createContext(null);Er.displayName="DataRouter";var Ha=v.createContext(null);Ha.displayName="DataRouterState";var bd=v.createContext(!1);function Om(){return v.useContext(bd)}var jd=v.createContext({isTransitioning:!1});jd.displayName="ViewTransition";var Mm=v.createContext(new Map);Mm.displayName="Fetchers";var Wm=v.createContext(null);Wm.displayName="Await";var Ee=v.createContext(null);Ee.displayName="Navigation";var xn=v.createContext(null);xn.displayName="Location";var qe=v.createContext({outlet:null,matches:[],isDataRoute:!1});qe.displayName="Route";var kl=v.createContext(null);kl.displayName="RouteError";var kd="REACT_ROUTER_ERROR",Um="REDIRECT",$m="ROUTE_ERROR_RESPONSE";function Bm(e){if(e.startsWith(`${kd}:${Um}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.location=="string"&&typeof t.reloadDocument=="boolean"&&typeof t.replace=="boolean")return t}catch{}}function Hm(e){if(e.startsWith(`${kd}:${$m}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t=="object"&&t&&typeof t.status=="number"&&typeof t.statusText=="string")return new zm(t.status,t.statusText,t.data)}catch{}}function qm(e,{relative:t}={}){B(Cr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:n}=v.useContext(Ee),{hash:a,pathname:o,search:l}=wn(e,{relative:t}),s=o;return r!=="/"&&(s=o==="/"?r:Be([r,o])),n.createHref({pathname:s,search:l,hash:a})}function Cr(){return v.useContext(xn)!=null}function Ce(){return B(Cr(),"useLocation() may be used only in the context of a <Router> component."),v.useContext(xn).location}var Nd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Sd(e){v.useContext(Ee).static||v.useLayoutEffect(e)}function Nl(){let{isDataRoute:e}=v.useContext(qe);return e?ih():Vm()}function Vm(){B(Cr(),"useNavigate() may be used only in the context of a <Router> component.");let e=v.useContext(Er),{basename:t,navigator:r}=v.useContext(Ee),{matches:n}=v.useContext(qe),{pathname:a}=Ce(),o=JSON.stringify(wl(n)),l=v.useRef(!1);return Sd(()=>{l.current=!0}),v.useCallback((c,u={})=>{if(Fe(l.current,Nd),!l.current)return;if(typeof c=="number"){r.go(c);return}let m=Ba(c,JSON.parse(o),a,u.relative==="path");e==null&&t!=="/"&&(m.pathname=m.pathname==="/"?t:Be([t,m.pathname])),jl(typeof c=="string"?c:Vt(c),r.createHref(m),bl(r),"reject"),(u.replace?r.replace:r.push)(m,u.state,u)},[t,r,o,a,e])}v.createContext(null);function Qm(){let{matches:e}=v.useContext(qe),t=e[e.length-1];return(t==null?void 0:t.params)??{}}function wn(e,{relative:t}={}){let{matches:r}=v.useContext(qe),{pathname:n}=Ce(),a=JSON.stringify(wl(r));return v.useMemo(()=>Ba(e,JSON.parse(a),n,t==="path"),[e,a,n,t])}function Ym(e,t){return Ed(e,t)}function Ed(e,t,r){var y;B(Cr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:n}=v.useContext(Ee),{matches:a}=v.useContext(qe),o=a[a.length-1],l=o?o.params:{},s=o?o.pathname:"/",c=o?o.pathnameBase:"/",u=o&&o.route;{let d=u&&u.path||"";Pd(s,!u||d.endsWith("*")||d.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${d}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${d}"> to <Route path="${d==="/"?"*":`${d}/*`}">.`)}let m=Ce(),h;if(t){let d=typeof t=="string"?Sr(t):t;B(c==="/"||((y=d.pathname)==null?void 0:y.startsWith(c)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${d.pathname}" was given in the \`location\` prop.`),h=d}else h=m;let g=h.pathname||"/",x=g;if(c!=="/"){let d=c.replace(/^\//,"").split("/");x="/"+g.replace(/^\//,"").split("/").slice(d.length).join("/")}let w=r&&r.state.matches.length?r.state.matches.map(d=>Object.assign(d,{route:r.manifest[d.route.id]||d.route})):fd(e,{pathname:x});Fe(u||w!=null,`No routes matched location "${h.pathname}${h.search}${h.hash}" `),Fe(w==null||w[w.length-1].route.element!==void 0||w[w.length-1].route.Component!==void 0||w[w.length-1].route.lazy!==void 0,`Matched leaf route at location "${h.pathname}${h.search}${h.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let b=Zm(w&&w.map(d=>Object.assign({},d,{params:Object.assign({},l,d.params),pathname:Be([c,n.encodeLocation?n.encodeLocation(d.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?c:Be([c,n.encodeLocation?n.encodeLocation(d.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:d.pathnameBase])})),a,r);return t&&b?v.createElement(xn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...h},navigationType:"POP"}},b):b}function Gm(){let e=ah(),t=Im(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,n="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:n},o={padding:"2px 4px",backgroundColor:n},l=null;return console.error("Error handled by React Router default ErrorBoundary:",e),l=v.createElement(v.Fragment,null,v.createElement("p",null,"💿 Hey developer 👋"),v.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",v.createElement("code",{style:o},"ErrorBoundary")," or"," ",v.createElement("code",{style:o},"errorElement")," prop on your route.")),v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:a},r):null,l)}var Km=v.createElement(Gm,null),Cd=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const r=Hm(e.digest);r&&(e=r)}let t=e!==void 0?v.createElement(qe.Provider,{value:this.props.routeContext},v.createElement(kl.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?v.createElement(Xm,{error:e},t):t}};Cd.contextType=bd;var Ni=new WeakMap;function Xm({children:e,error:t}){let{basename:r,navigator:n}=v.useContext(Ee);if(typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){let a=Bm(t.digest);if(a){let o=Ni.get(t);if(o)throw o;let l=xd(a.location,r),s=l.absoluteURL||l.to;if(jl(a.location,s,bl(n),"allow-explicit"),Dm(s))throw new Error("Invalid redirect location");if(yd&&!Ni.get(t))if(l.isExternal||a.reloadDocument)window.location.href=s;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(l.to,{replace:a.replace}));throw Ni.set(t,c),c}return v.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s}`})}}return e}function Jm({routeContext:e,match:t,children:r}){let n=v.useContext(Er);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(qe.Provider,{value:e},r)}function Zm(e,t=[],r){let n=r==null?void 0:r.state;if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n==null?void 0:n.errors;if(o!=null){let m=a.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);B(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,m+1))}let l=!1,s=-1;if(r&&n){l=n.renderFallback;for(let m=0;m<a.length;m++){let h=a[m];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(s=m),h.route.id){let{loaderData:g,errors:x}=n,w=h.route.loader&&!g.hasOwnProperty(h.route.id)&&(!x||x[h.route.id]===void 0);if(h.route.lazy||w){r.isStatic&&(l=!0),s>=0?a=a.slice(0,s+1):a=[a[0]];break}}}}let c=r==null?void 0:r.onError,u=n&&c?(m,h)=>{var g,x;c(m,{location:n.location,params:((x=(g=n.matches)==null?void 0:g[0])==null?void 0:x.params)??{},pattern:_m(n.matches),errorInfo:h})}:void 0;return a.reduceRight((m,h,g)=>{let x,w=!1,b=null,y=null;n&&(x=o&&h.route.id?o[h.route.id]:void 0,b=h.route.errorElement||Km,l&&(s<0&&g===0?(Pd("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,y=null):s===g&&(w=!0,y=h.route.hydrateFallbackElement||null)));let d=t.concat(a.slice(0,g+1)),f=()=>{let p;return x?p=b:w?p=y:h.route.Component?p=v.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=m,v.createElement(Jm,{match:h,routeContext:{outlet:m,matches:d,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||g===0)?v.createElement(Cd,{location:n.location,revalidation:n.revalidation,component:b,error:x,children:f(),routeContext:{outlet:null,matches:d,isDataRoute:!0},onError:u}):f()},null)}function Sl(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eh(e){let t=v.useContext(Er);return B(t,Sl(e)),t}function th(e){let t=v.useContext(Ha);return B(t,Sl(e)),t}function rh(e){let t=v.useContext(qe);return B(t,Sl(e)),t}function El(e){let t=rh(e),r=t.matches[t.matches.length-1];return B(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function nh(){return El("useRouteId")}function ah(){var n;let e=v.useContext(kl),t=th("useRouteError"),r=El("useRouteError");return e!==void 0?e:(n=t.errors)==null?void 0:n[r]}function ih(){let{router:e}=eh("useNavigate"),t=El("useNavigate"),r=v.useRef(!1);return Sd(()=>{r.current=!0}),v.useCallback(async(a,o={})=>{Fe(r.current,Nd),r.current&&(typeof a=="number"?await e.navigate(a):await e.navigate(a,{fromRouteId:t,...o}))},[e,t])}var Vs={};function Pd(e,t,r){!t&&!Vs[e]&&(Vs[e]=!0,Fe(!1,r))}v.memo(oh);function oh({routes:e,manifest:t,future:r,state:n,isStatic:a,onError:o}){return Ed(e,void 0,{manifest:t,state:n,isStatic:a,onError:o})}function lh({to:e,replace:t,state:r,relative:n}){B(Cr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:a,navigator:o}=v.useContext(Ee);Fe(!a,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=v.useContext(qe),{pathname:s}=Ce(),c=Nl(),u=Ba(e,wl(l),s,n==="path");jl(typeof e=="string"?e:Vt(e),o.createHref(u),bl(o),"reject");let m=JSON.stringify(u);return v.useEffect(()=>{c(JSON.parse(m),{replace:t,state:r,relative:n})},[c,m,n,t,r]),null}function Pe(e){B(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sh({basename:e="/",children:t=null,location:r,navigationType:n="POP",navigator:a,static:o=!1,useTransitions:l}){B(!Cr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let s=e.replace(/^\/*/,"/"),c=v.useMemo(()=>({basename:s,navigator:a,static:o,useTransitions:l,future:{}}),[s,a,o,l]);typeof r=="string"&&(r=Sr(r));let{pathname:u="/",search:m="",hash:h="",state:g=null,key:x="default",mask:w}=r,b=v.useMemo(()=>{let y=st(u,s);return y==null?null:{location:{pathname:y,search:m,hash:h,state:g,key:x,mask:w},navigationType:n}},[s,u,m,h,g,x,n,w]);return Fe(b!=null,`<Router basename="${s}"> is not able to match the URL "${u}${m}${h}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:v.createElement(Ee.Provider,{value:c},v.createElement(xn.Provider,{children:t,value:b}))}function ch({children:e,location:t}){return Ym(jo(e),t)}function jo(e,t=[]){let r=[];return v.Children.forEach(e,(n,a)=>{if(!v.isValidElement(n))return;let o=[...t,a];if(n.type===v.Fragment){r.push.apply(r,jo(n.props.children,o));return}B(n.type===Pe,`[${typeof n.type=="string"?n.type:n.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),B(!n.props.index||!n.props.children,"An index route cannot have child routes.");let l={id:n.props.id||o.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,middleware:n.props.middleware,loader:n.props.loader,action:n.props.action,hydrateFallbackElement:n.props.hydrateFallbackElement,HydrateFallback:n.props.HydrateFallback,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.hasErrorBoundary===!0||n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(l.children=jo(n.props.children,o)),r.push(l)}),r}var ea="get",ta="application/x-www-form-urlencoded";function qa(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function uh(e){return qa(e)&&e.tagName.toLowerCase()==="button"}function dh(e){return qa(e)&&e.tagName.toLowerCase()==="form"}function fh(e){return qa(e)&&e.tagName.toLowerCase()==="input"}function ph(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mh(e,t){return e.button===0&&(!t||t==="_self")&&!ph(e)}function ko(e=""){return new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(a=>[r,a]):[[r,n]])},[]))}function hh(e,t){let r=ko(e);return t&&t.forEach((n,a)=>{r.has(a)||t.getAll(a).forEach(o=>{r.append(a,o)})}),r}var Wn=null;function gh(){if(Wn===null)try{new FormData(document.createElement("form"),0),Wn=!1}catch{Wn=!0}return Wn}var vh=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Si(e){return e!=null&&!vh.has(e)?(Fe(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ta}"`),null):e}function yh(e,t){let r,n,a,o,l;if(dh(e)){let s=e.getAttribute("action");n=s?st(s,t):null,r=e.getAttribute("method")||ea,a=Si(e.getAttribute("enctype"))||ta,o=new FormData(e)}else if(uh(e)||fh(e)&&(e.type==="submit"||e.type==="image")){let s=e.form;if(s==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||s.getAttribute("action");if(n=c?st(c,t):null,r=e.getAttribute("formmethod")||s.getAttribute("method")||ea,a=Si(e.getAttribute("formenctype"))||Si(s.getAttribute("enctype"))||ta,o=new FormData(s,e),!gh()){let{name:u,type:m,value:h}=e;if(m==="image"){let g=u?`${u}.`:"";o.append(`${g}x`,"0"),o.append(`${g}y`,"0")}else u&&o.append(u,h)}}else{if(qa(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=ea,n=null,a=ta,l=e}return o&&a==="text/plain"&&(l=o,o=void 0),{action:n,method:r.toLowerCase(),encType:a,formData:o,body:l}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Cl(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Rd(e,t,r,n){let a=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return r?a.pathname.endsWith("/")?a.pathname=`${a.pathname}_.${n}`:a.pathname=`${a.pathname}.${n}`:a.pathname==="/"?a.pathname=`_root.${n}`:t&&st(a.pathname,t)==="/"?a.pathname=`${br(t)}/_root.${n}`:a.pathname=`${br(a.pathname)}.${n}`,a}async function xh(e,t){if(e.id in t)return t[e.id];try{let r=await lm(()=>import(e.module),__vite__mapDeps([]));return t[e.id]=r,r}catch(r){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function wh(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function bh(e,t,r){let n=await Promise.all(e.map(async a=>{let o=t.routes[a.route.id];if(o){let l=await xh(o,r);return l.links?l.links():[]}return[]}));return Sh(n.flat(1).filter(wh).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function Qs(e,t,r,n,a,o){let l=(c,u)=>r[u]?c.route.id!==r[u].route.id:!0,s=(c,u)=>{var m;return r[u].pathname!==c.pathname||((m=r[u].route.path)==null?void 0:m.endsWith("*"))&&r[u].params["*"]!==c.params["*"]};return o==="assets"?t.filter((c,u)=>l(c,u)||s(c,u)):o==="data"?t.filter((c,u)=>{var h;let m=n.routes[c.route.id];if(!m||!m.hasLoader)return!1;if(l(c,u)||s(c,u))return!0;if(c.route.shouldRevalidate){let g=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((h=r[0])==null?void 0:h.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function jh(e,t,{includeHydrateFallback:r}={}){return kh(e.map(n=>{let a=t.routes[n.route.id];if(!a)return[];let o=[a.module];return a.clientActionModule&&(o=o.concat(a.clientActionModule)),a.clientLoaderModule&&(o=o.concat(a.clientLoaderModule)),r&&a.hydrateFallbackModule&&(o=o.concat(a.hydrateFallbackModule)),a.imports&&(o=o.concat(a.imports)),o}).flat(1))}function kh(e){return[...new Set(e)]}function Nh(e){let t={},r=Object.keys(e).sort();for(let n of r)t[n]=e[n];return t}function Sh(e,t){let r=new Set;return new Set(t),e.reduce((n,a)=>{let o=JSON.stringify(Nh(a));return r.has(o)||(r.add(o),n.push({key:o,link:a})),n},[])}function Pl(){let e=v.useContext(Er);return Cl(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Eh(){let e=v.useContext(Ha);return Cl(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Rl=v.createContext(void 0);Rl.displayName="FrameworkContext";function Va(){let e=v.useContext(Rl);return Cl(e,"You must render this element inside a <HydratedRouter> element"),e}function Ch(e,t){let r=v.useContext(Rl),[n,a]=v.useState(!1),[o,l]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:u,onMouseLeave:m,onTouchStart:h}=t,g=v.useRef(null);v.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let b=d=>{d.forEach(f=>{l(f.isIntersecting)})},y=new IntersectionObserver(b,{threshold:.5});return g.current&&y.observe(g.current),()=>{y.disconnect()}}},[e]),v.useEffect(()=>{if(n){let b=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(b)}}},[n]);let x=()=>{a(!0)},w=()=>{a(!1),l(!1)};return r?e!=="intent"?[o,g,{}]:[o,g,{onFocus:Ar(s,x),onBlur:Ar(c,w),onMouseEnter:Ar(u,x),onMouseLeave:Ar(m,w),onTouchStart:Ar(h,x)}]:[!1,g,{}]}function Ar(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Ph({page:e,...t}){let r=Om(),{nonce:n}=Va(),{router:a}=Pl(),o=v.useMemo(()=>fd(a.routes,e,a.basename),[a.routes,e,a.basename]);return o?(t.nonce==null&&n&&(t={...t,nonce:n}),r?v.createElement(Th,{page:e,matches:o,...t}):v.createElement(zh,{page:e,matches:o,...t})):null}function Rh(e){let{manifest:t,routeModules:r}=Va(),[n,a]=v.useState([]);return v.useEffect(()=>{let o=!1;return bh(e,t,r).then(l=>{o||a(l)}),()=>{o=!0}},[e,t,r]),n}function Th({page:e,matches:t,...r}){let n=Ce(),{future:a}=Va(),{basename:o}=Pl(),l=v.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let s=Rd(e,o,a.v8_trailingSlashAwareDataRequests,"rsc"),c=!1,u=[];for(let m of t)typeof m.route.shouldRevalidate=="function"?c=!0:u.push(m.route.id);return c&&u.length>0&&s.searchParams.set("_routes",u.join(",")),[s.pathname+s.search]},[o,a.v8_trailingSlashAwareDataRequests,e,n,t]);return v.createElement(v.Fragment,null,l.map(s=>v.createElement("link",{key:s,rel:"prefetch",as:"fetch",href:s,...r})))}function zh({page:e,matches:t,...r}){let n=Ce(),{future:a,manifest:o,routeModules:l}=Va(),{basename:s}=Pl(),{loaderData:c,matches:u}=Eh(),m=v.useMemo(()=>Qs(e,t,u,o,n,"data"),[e,t,u,o,n]),h=v.useMemo(()=>Qs(e,t,u,o,n,"assets"),[e,t,u,o,n]),g=v.useMemo(()=>{if(e===n.pathname+n.search+n.hash)return[];let b=new Set,y=!1;if(t.forEach(f=>{var j;let p=o.routes[f.route.id];!p||!p.hasLoader||(!m.some(N=>N.route.id===f.route.id)&&f.route.id in c&&((j=l[f.route.id])!=null&&j.shouldRevalidate)||p.hasClientLoader?y=!0:b.add(f.route.id))}),b.size===0)return[];let d=Rd(e,s,a.v8_trailingSlashAwareDataRequests,"data");return y&&b.size>0&&d.searchParams.set("_routes",t.filter(f=>b.has(f.route.id)).map(f=>f.route.id).join(",")),[d.pathname+d.search]},[s,a.v8_trailingSlashAwareDataRequests,c,n,o,m,t,e,l]),x=v.useMemo(()=>jh(h,o),[h,o]),w=Rh(h);return v.createElement(v.Fragment,null,g.map(b=>v.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...r})),x.map(b=>v.createElement("link",{key:b,rel:"modulepreload",href:b,...r})),w.map(({key:b,link:y})=>v.createElement("link",{key:b,nonce:r.nonce,...y,crossOrigin:y.crossOrigin??r.crossOrigin})))}function Ih(...e){return t=>{e.forEach(r=>{typeof r=="function"?r(t):r!=null&&(r.current=t)})}}var _h=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_h&&(window.__reactRouterVersion="7.18.3")}catch{}function Lh({basename:e,children:t,useTransitions:r,window:n}){let a=v.useRef();a.current==null&&(a.current=cm({window:n,v5Compat:!0}));let o=a.current,[l,s]=v.useState({action:o.action,location:o.location}),c=v.useCallback(u=>{r===!1?s(u):v.startTransition(()=>s(u))},[r]);return v.useLayoutEffect(()=>o.listen(c),[o,c]),v.createElement(sh,{basename:e,children:t,location:l.location,navigationType:l.action,navigator:o,useTransitions:r})}var _=v.forwardRef(function({onClick:t,discover:r="render",prefetch:n="none",relative:a,reloadDocument:o,replace:l,mask:s,state:c,target:u,to:m,preventScrollReset:h,viewTransition:g,defaultShouldRevalidate:x,...w},b){let{basename:y,navigator:d,useTransitions:f}=v.useContext(Ee),p=typeof m=="string"&&xl.test(m),j=xd(m,y);m=j.to;let N=qm(m,{relative:a}),S=Ce(),C=null;if(s){let Ve=Ba(s,[],S.mask?S.mask.pathname:"/",!0);y!=="/"&&(Ve.pathname=Ve.pathname==="/"?y:Be([y,Ve.pathname])),C=d.createHref(Ve)}let[T,A,E]=Ch(n,w),O=Dh(m,{replace:l,mask:s,state:c,target:u,preventScrollReset:h,relative:a,viewTransition:g,defaultShouldRevalidate:x,useTransitions:f});function Je(Ve){t&&t(Ve),Ve.defaultPrevented||O(Ve)}let Ae=!(j.isExternal||o),zt=v.createElement("a",{...w,...E,href:(Ae?C:void 0)||j.absoluteURL||N,onClick:Ae?Je:t,ref:Ih(b,A),target:u,"data-discover":!p&&r==="render"?"true":void 0});return T&&!p?v.createElement(v.Fragment,null,zt,v.createElement(Ph,{page:N})):zt});_.displayName="Link";var xe=v.forwardRef(function({"aria-current":t="page",caseSensitive:r=!1,className:n="",end:a=!1,style:o,to:l,viewTransition:s,children:c,...u},m){let h=wn(l,{relative:u.relative}),g=Ce(),x=v.useContext(Ha),{navigator:w,basename:b}=v.useContext(Ee),y=x!=null&&Bh(h)&&s===!0,d=w.encodeLocation?w.encodeLocation(h).pathname:h.pathname,f=g.pathname,p=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;r||(f=f.toLowerCase(),p=p?p.toLowerCase():null,d=d.toLowerCase()),p&&b&&(p=st(p,b)||p);const j=d!=="/"&&d.endsWith("/")?d.length-1:d.length;let N=f===d||!a&&f.startsWith(d)&&f.charAt(j)==="/",S=p!=null&&(p===d||!a&&p.startsWith(d)&&p.charAt(d.length)==="/"),C={isActive:N,isPending:S,isTransitioning:y},T=N?t:void 0,A;typeof n=="function"?A=n(C):A=[n,N?"active":null,S?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let E=typeof o=="function"?o(C):o;return v.createElement(_,{...u,"aria-current":T,className:A,ref:m,style:E,to:l,viewTransition:s},typeof c=="function"?c(C):c)});xe.displayName="NavLink";var Fh=v.forwardRef(({discover:e="render",fetcherKey:t,navigate:r,reloadDocument:n,replace:a,state:o,method:l=ea,action:s,onSubmit:c,relative:u,preventScrollReset:m,viewTransition:h,defaultShouldRevalidate:g,...x},w)=>{let{useTransitions:b}=v.useContext(Ee),y=Uh(),d=$h(s,{relative:u}),f=l.toLowerCase()==="get"?"get":"post",p=typeof s=="string"&&xl.test(s),j=N=>{if(c&&c(N),N.defaultPrevented)return;N.preventDefault();let S=N.nativeEvent.submitter,C=(S==null?void 0:S.getAttribute("formmethod"))||l,T=()=>y(S||N.currentTarget,{fetcherKey:t,method:C,navigate:r,replace:a,state:o,relative:u,preventScrollReset:m,viewTransition:h,defaultShouldRevalidate:g});b&&r!==!1?v.startTransition(()=>T()):T()};return v.createElement("form",{ref:w,method:f,action:d,onSubmit:n?c:j,...x,"data-discover":!p&&e==="render"?"true":void 0})});Fh.displayName="Form";function Ah(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Td(e){let t=v.useContext(Er);return B(t,Ah(e)),t}function Dh(e,{target:t,replace:r,mask:n,state:a,preventScrollReset:o,relative:l,viewTransition:s,defaultShouldRevalidate:c,useTransitions:u}={}){let m=Nl(),h=Ce(),g=wn(e,{relative:l});return v.useCallback(x=>{if(mh(x,t)){x.preventDefault();let w=r!==void 0?r:Vt(h)===Vt(g),b=()=>m(e,{replace:w,mask:n,state:a,preventScrollReset:o,relative:l,viewTransition:s,defaultShouldRevalidate:c});u?v.startTransition(()=>b()):b()}},[h,m,g,r,n,a,t,e,o,l,s,c,u])}function Oh(e){Fe(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=v.useRef(ko(e)),r=v.useRef(!1),n=Ce(),a=v.useMemo(()=>hh(n.search,r.current?null:t.current),[n.search]),o=Nl(),l=v.useCallback((s,c)=>{const u=ko(typeof s=="function"?s(new URLSearchParams(a)):s);r.current=!0,o("?"+u,c)},[o,a]);return[a,l]}var Mh=0,Wh=()=>`__${String(++Mh)}__`;function Uh(){let{router:e}=Td("useSubmit"),{basename:t}=v.useContext(Ee),r=nh(),n=e.fetch,a=e.navigate;return v.useCallback(async(o,l={})=>{let{action:s,method:c,encType:u,formData:m,body:h}=yh(o,t);if(l.navigate===!1){let g=l.fetcherKey||Wh();await n(g,r,l.action||s,{defaultShouldRevalidate:l.defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||c,formEncType:l.encType||u,flushSync:l.flushSync})}else await a(l.action||s,{defaultShouldRevalidate:l.defaultShouldRevalidate,preventScrollReset:l.preventScrollReset,formData:m,body:h,formMethod:l.method||c,formEncType:l.encType||u,replace:l.replace,state:l.state,fromRouteId:r,flushSync:l.flushSync,viewTransition:l.viewTransition})},[n,a,t,r])}function $h(e,{relative:t}={}){let{basename:r}=v.useContext(Ee),n=v.useContext(qe);B(n,"useFormAction must be used inside a RouteContext");let[a]=n.matches.slice(-1),o={...wn(e||".",{relative:t})},l=Ce();if(e==null){o.search=l.search;let s=new URLSearchParams(o.search),c=s.getAll("index");if(c.some(m=>m==="")){s.delete("index"),c.filter(h=>h).forEach(h=>s.append("index",h));let m=s.toString();o.search=m?`?${m}`:""}}return(!e||e===".")&&a.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(o.pathname=o.pathname==="/"?r:Be([r,o.pathname])),Vt(o)}function Bh(e,{relative:t}={}){let r=v.useContext(jd);B(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:n}=Td("useViewTransitionState"),a=wn(e,{relative:t});if(!r.isTransitioning)return!1;let o=st(r.currentLocation.pathname,n)||r.currentLocation.pathname,l=st(r.nextLocation.pathname,n)||r.nextLocation.pathname;return Ea(a.pathname,l)!=null||Ea(a.pathname,o)!=null}function Hh(){const[e,t]=v.useState(!1),[r,n]=v.useState(!1),a=Ce();return v.useEffect(()=>{const o=()=>n(window.scrollY>12);return window.addEventListener("scroll",o),()=>window.removeEventListener("scroll",o)},[]),v.useEffect(()=>{t(!1)},[a.pathname]),i.jsxs("header",{className:`site-header${r?" scrolled":""}`,role:"banner",children:[i.jsxs("div",{className:"container header-inner",children:[i.jsxs(_,{to:"/",className:"header-logo","aria-label":"TechFoundry home",children:[i.jsx("img",{src:"/assets/logo-transparent.png",alt:"TechFoundry",className:"logo-img"}),i.jsxs("span",{className:"logo-text",children:[i.jsx("span",{className:"logo-tech",children:"Tech"}),i.jsx("span",{className:"logo-foundry",children:"Foundry"})]})]}),i.jsxs("nav",{className:"header-nav",role:"navigation","aria-label":"Main navigation",children:[i.jsx(xe,{to:"/",end:!0,className:({isActive:o})=>o?"nav-link active":"nav-link",children:"Home"}),i.jsx(xe,{to:"/about",className:({isActive:o})=>o?"nav-link active":"nav-link",children:"About"}),i.jsx(xe,{to:"/programs",className:({isActive:o})=>o?"nav-link active":"nav-link",children:"Programs"}),i.jsx(xe,{to:"/pay-fee",className:({isActive:o})=>o?"nav-link active pay-fee-link":"nav-link pay-fee-link",children:"Pay Fee 💳"}),i.jsx(xe,{to:"/scholarship",className:({isActive:o})=>o?"nav-link active":"nav-link",children:"Scholarship"}),i.jsx(xe,{to:"/faq",className:({isActive:o})=>o?"nav-link active":"nav-link",children:"FAQ"})]}),i.jsxs("div",{className:"header-actions",children:[i.jsx(_,{to:"/contact",className:"btn btn-primary header-cta",children:"Course Registration"}),i.jsx("button",{className:"hamburger-btn","aria-expanded":e,"aria-label":"Toggle navigation",onClick:()=>t(o=>!o),children:i.jsx("span",{className:`hamburger${e?" open":""}`})})]})]}),e&&i.jsx("div",{className:"mobile-menu",role:"dialog","aria-label":"Mobile navigation",children:i.jsxs("nav",{className:"mobile-nav",children:[i.jsx(xe,{to:"/",end:!0,onClick:()=>t(!1),children:"Home"}),i.jsx(xe,{to:"/about",onClick:()=>t(!1),children:"About"}),i.jsx(xe,{to:"/programs",onClick:()=>t(!1),children:"Programs"}),i.jsx(xe,{to:"/pay-fee",onClick:()=>t(!1),children:"Pay Fee 💳"}),i.jsx(xe,{to:"/scholarship",onClick:()=>t(!1),children:"Scholarship"}),i.jsx(xe,{to:"/faq",onClick:()=>t(!1),children:"FAQ"}),i.jsx(_,{to:"/contact",className:"btn btn-primary",onClick:()=>t(!1),children:"Course Registration"})]})}),i.jsx("style",{children:`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(4, 9, 26, 0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          transition: box-shadow 0.2s ease;
        }
        .site-header.scrolled {
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.6);
        }
        .header-inner {
          display: flex;
          align-items: center;
          gap: 1rem;
          height: 68px;
        }
        .header-logo {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          font-weight: 800;
          font-size: 1.4rem;
          text-decoration: none;
          flex-shrink: 0;
          letter-spacing: -0.02em;
        }
        .logo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(0, 180, 216, 0.35));
          transition: transform 0.25s ease;
        }
        .header-logo:hover .logo-img {
          transform: scale(1.08) rotate(4deg);
        }
        .logo-text {
          display: inline-flex;
          align-items: center;
          font-weight: 800;
          font-size: 1.4rem;
        }
        .logo-tech {
          background: linear-gradient(135deg, #00d2ff 0%, #0077b6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .logo-foundry {
          color: #ffffff;
        }
        .header-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-left: auto;
        }
        .nav-link {
          padding: 0.4rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: color var(--transition), background var(--transition);
        }
        .nav-link:hover {
          color: #00d2ff;
          background: rgba(0, 180, 216, 0.12);
        }
        .nav-link.active {
          color: #38bdf8;
          font-weight: 600;
          background: rgba(0, 180, 216, 0.15);
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-left: 1rem;
        }
        .header-cta {
          font-size: 0.9rem;
          padding: 0.5rem 1.2rem;
        }
        /* Hamburger */
        .hamburger-btn {
          display: none;
          background: transparent;
          border: 1px solid var(--border);
          border-radius: var(--radius-sm);
          width: 40px;
          height: 40px;
          align-items: center;
          justify-content: center;
        }
        .hamburger {
          display: block;
          width: 18px;
          height: 2px;
          background: var(--text);
          position: relative;
          transition: background 0.2s;
        }
        .hamburger::before, .hamburger::after {
          content: '';
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: var(--text);
          transition: transform 0.25s ease;
        }
        .hamburger::before { top: -6px; }
        .hamburger::after { top: 6px; }
        .hamburger.open { background: transparent; }
        .hamburger.open::before { transform: rotate(45deg) translate(4px, 4px); }
        .hamburger.open::after { transform: rotate(-45deg) translate(4px, -4px); }
        /* Mobile menu */
        .mobile-menu {
          background: var(--bg);
          border-top: 1px solid var(--border);
          padding: 1rem 1.5rem 1.5rem;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .mobile-nav a {
          padding: 0.65rem 0.75rem;
          border-radius: var(--radius-sm);
          font-weight: 500;
          color: var(--text-secondary);
          font-size: 1rem;
          transition: background var(--transition), color var(--transition);
        }
        .mobile-nav a:hover {
          background: var(--primary-light);
          color: var(--primary);
        }
        .mobile-nav .btn {
          margin-top: 0.5rem;
          text-align: center;
          justify-content: center;
        }
        @media (max-width: 768px) {
          .header-nav { display: none; }
          .hamburger-btn { display: flex; }
          .header-cta { display: none; }
        }
      `})]})}function qh(){const e=new Date().getFullYear();return i.jsxs("footer",{className:"site-footer",role:"contentinfo",children:[i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"footer-grid",children:[i.jsxs("div",{className:"footer-brand",children:[i.jsxs(_,{to:"/",className:"footer-logo",children:[i.jsx("img",{src:"/assets/logo-transparent.png",alt:"TechFoundry",className:"footer-logo-img"}),i.jsxs("span",{children:[i.jsx("span",{style:{background:"linear-gradient(135deg, #00d2ff, #00b4d8)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",fontWeight:800,fontSize:"1.4rem"},children:"Tech"}),i.jsx("span",{style:{color:"#ffffff",fontWeight:800,fontSize:"1.4rem"},children:"Foundry"})]})]}),i.jsx("p",{className:"footer-tagline",children:"Forging future tech talent through hands-on, industry-driven training."}),i.jsxs("div",{className:"footer-contact-info",children:[i.jsxs("p",{children:["📍 Rent A Desk, 2nd Floor, Serenity Square,",i.jsx("br",{}),"Opposite Westin Hotel, Mindspace, HITEC City, Hyderabad"]}),i.jsxs("p",{children:["📞"," ",i.jsx("a",{href:"tel:+918309576596",children:"8309576596"})," ","•"," ",i.jsx("a",{href:"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",children:"💬 WhatsApp"})]})]})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("h4",{className:"footer-heading",children:"Quick Links"}),i.jsxs("ul",{className:"footer-links",children:[i.jsx("li",{children:i.jsx(_,{to:"/",children:"Home"})}),i.jsx("li",{children:i.jsx(_,{to:"/about",children:"About Us"})}),i.jsx("li",{children:i.jsx(_,{to:"/programs",children:"Programs"})}),i.jsx("li",{children:i.jsx(_,{to:"/pay-fee",style:{color:"#38bdf8",fontWeight:600},children:"Pay Fee Online 💳"})}),i.jsx("li",{children:i.jsx(_,{to:"/scholarship",children:"Scholarship"})}),i.jsx("li",{children:i.jsx(_,{to:"/faq",children:"FAQ"})}),i.jsx("li",{children:i.jsx(_,{to:"/contact",children:"Course Registration"})})]})]}),i.jsxs("div",{className:"footer-col",children:[i.jsx("h4",{className:"footer-heading",children:"Programs"}),i.jsxs("ul",{className:"footer-links",children:[i.jsx("li",{children:i.jsx(_,{to:"/programs/ai-engineering",children:"AI Engineering"})}),i.jsx("li",{children:i.jsx(_,{to:"/programs/web-development",children:"Web Development"})}),i.jsx("li",{children:i.jsx(_,{to:"/programs/software-engineering",children:"Software Engineering"})})]}),i.jsx("h4",{className:"footer-heading",style:{marginTop:"1.5rem"},children:"Connect"}),i.jsx("ul",{className:"footer-links",children:i.jsx("li",{children:i.jsx("a",{href:"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",children:"WhatsApp Us"})})})]})]}),i.jsx("hr",{className:"footer-divider"}),i.jsxs("div",{className:"footer-bottom",children:[i.jsxs("p",{children:["© ",e," TechFoundry. All Rights Reserved."]}),i.jsx("p",{className:"footer-disclaimer",children:"Salary outcomes are not guaranteed and depend on individual performance, skill level, and market conditions."})]})]}),i.jsx("style",{children:`
        .site-footer {
          background: linear-gradient(180deg, #07132b 0%, #050e24 100%);
          color: #cbd5e1;
          padding: 4rem 0 2rem;
          margin-top: auto;
          border-top: 1px solid #1e3a6d;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 3rem;
        }
        .footer-logo {
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          font-weight: 800;
          font-size: 1.3rem;
          color: #fff;
          text-decoration: none;
          margin-bottom: 0.75rem;
        }
        .footer-logo-img {
          width: 44px;
          height: 44px;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(0, 210, 255, 0.45));
        }
        .footer-tagline {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }
        .footer-contact-info p {
          color: #94a3b8;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
          line-height: 1.5;
        }
        .footer-contact-info a {
          color: #38bdf8;
          text-decoration: none;
        }
        .footer-contact-info a:hover { text-decoration: underline; color: #00e5ff; }
        .footer-heading {
          color: #fff;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }
        .footer-links a {
          color: #94a3b8;
          font-size: 0.9rem;
          text-decoration: none;
          transition: color 0.15s ease;
        }
        .footer-links a:hover { color: #38bdf8; }
        .footer-divider {
          border: none;
          border-top: 1px solid #1e3a6d;
          margin: 2.5rem 0 1.5rem;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .footer-bottom p {
          color: #6b7280;
          font-size: 0.82rem;
        }
        .footer-disclaimer {
          max-width: 500px;
          text-align: right;
          font-style: italic;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-bottom { flex-direction: column; }
          .footer-disclaimer { text-align: left; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `})]})}function Vh(){const e="918309576596",t=encodeURIComponent("Hi TechFoundry, I would like to inquire about your courses and admission."),r=`https://wa.me/${e}?text=${t}`;return i.jsxs("aside",{className:"tf-floating-wa","aria-label":"WhatsApp Support",children:[i.jsxs("a",{href:r,target:"_blank",rel:"noopener noreferrer",className:"tf-wa-btn","aria-label":"Chat with TechFoundry on WhatsApp at 8309576596",title:"Chat with us on WhatsApp (+91 83095 76596)",children:[i.jsx("span",{className:"tf-wa-pulse"}),i.jsx("svg",{className:"tf-wa-svg",viewBox:"0 0 32 32",width:"26",height:"26",fill:"currentColor",children:i.jsx("path",{d:"M16 2a13.9 13.9 0 0 0-12 20.9L2 30l7.3-1.9A14 14 0 1 0 16 2zm0 25.5a11.5 11.5 0 0 1-5.9-1.6l-.4-.3-4.4 1.1 1.2-4.3-.3-.4A11.5 11.5 0 1 1 16 27.5zm6.3-8.6c-.3-.2-2-.9-2.3-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1a9.2 9.2 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.7 0-.2 0-.4-.1-.5s-.7-1.8-1-2.4c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4s-1.3 1.3-1.3 3.1 1.3 3.6 1.5 3.9c.2.2 2.6 4.1 6.5 5.7 3.8 1.7 3.8 1.1 4.5 1.1.7 0 2.2-.9 2.5-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.6-.5z"})}),i.jsx("span",{className:"tf-wa-badge",children:"8309576596"})]}),i.jsx("style",{children:`
        .tf-floating-wa {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 999;
          display: flex;
          align-items: center;
        }
        .tf-wa-btn {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #25d366;
          color: #ffffff;
          padding: 10px 16px 10px 12px;
          border-radius: 9999px;
          text-decoration: none;
          box-shadow: 0 4px 18px rgba(37, 211, 102, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3);
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .tf-wa-btn:hover {
          background: #20bd5a;
          transform: translateY(-2px) scale(1.03);
          box-shadow: 0 6px 24px rgba(37, 211, 102, 0.55), 0 3px 8px rgba(0, 0, 0, 0.35);
          color: #ffffff;
        }
        .tf-wa-svg {
          flex-shrink: 0;
        }
        .tf-wa-badge {
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #ffffff;
          white-space: nowrap;
        }
        .tf-wa-pulse {
          position: absolute;
          inset: -3px;
          border-radius: 9999px;
          border: 2px solid #25d366;
          opacity: 0;
          animation: tf-pulse 2.2s infinite;
          pointer-events: none;
        }
        @keyframes tf-pulse {
          0% { transform: scale(0.95); opacity: 0.8; }
          60% { transform: scale(1.15); opacity: 0; }
          100% { transform: scale(1.15); opacity: 0; }
        }
        @media (max-width: 600px) {
          .tf-floating-wa {
            bottom: 18px;
            right: 18px;
          }
          .tf-wa-badge {
            display: none;
          }
          .tf-wa-btn {
            padding: 12px;
            border-radius: 50%;
          }
        }
      `})]})}function Qh(){const{pathname:e}=Ce();return v.useEffect(()=>{window.scrollTo({top:0,behavior:"instant"})},[e]),null}function ye(){const e=v.useRef(null);return v.useEffect(()=>{const t=e.current;if(!t)return;if(typeof IntersectionObserver>"u"){t.classList.add("visible");return}const r=new IntersectionObserver(([a])=>{a.isIntersecting&&(t.classList.add("visible"),r.disconnect())},{threshold:.08,rootMargin:"0px 0px -40px 0px"});r.observe(t);const n=setTimeout(()=>{t.classList.add("visible")},1500);return()=>{r.disconnect(),clearTimeout(n)}},[]),e}const Yh=[{slug:"ai-engineering",icon:"🤖",title:"AI Engineering",desc:"Design, train, and deploy AI systems with practical projects and industry mentorship.",meta:"12 weeks • Project-based",img:"/assets/prog-ai-eng.jpg",color:"rgba(0, 180, 216, 0.08)"},{slug:"web-development",icon:"🌐",title:"Web Development",desc:"Build responsive, accessible full-stack web applications using modern tools and frameworks.",meta:"10 weeks • Frontend + Backend",img:"/assets/prog-web-dev.jpg",color:"rgba(16, 185, 129, 0.08)"},{slug:"software-engineering",icon:"⚙️",title:"Software Engineering",desc:"Master software design, testing, and collaboration on real-world systems at scale.",meta:"14 weeks • Systems & Architecture",img:"/assets/prog-soft-eng.jpg",color:"rgba(56, 189, 248, 0.08)"}],Gh=[{icon:"🎯",title:"Outcome-Driven",desc:"Every lesson, project, and mentoring session is designed around one goal — getting you job-ready.",points:["Industry-aligned skills & modern tech stack","Hands-on problem solving over theory","Measurable job-readiness milestones"]},{icon:"🔨",title:"Practical Projects",desc:"Build a portfolio of real projects from day one that employers can actually evaluate.",points:["Production-grade full-stack & AI applications","Real GitHub repositories & pull request workflows","Live deployed URLs ready for hiring managers"]},{icon:"🧑‍💼",title:"Industry Mentors",desc:"Learn from professionals with 25+ years of combined experience in top tech companies.",points:["Dedicated 1:1 weekly mentor code reviews","Direct guidance from senior engineers & tech leads","Personalized feedback on architecture & standards"]},{icon:"📄",title:"Placement Support",desc:"Resume reviews, mock interviews, and employer connections — we don't stop until you land.",points:["ATS-friendly resume & LinkedIn optimization","Rigorous technical & behavioral mock interviews","Direct referrals to hiring partners & startups"]},{icon:"🎓",title:"Scholarship Available",desc:"High-potential learners with financial constraints can apply for a full scholarship.",points:["Up to 100% tuition coverage for deserving talent","Fair merit & aptitude-based selection","Equal access to all mentors, projects & placement"]},{icon:"🗓️",title:"Structured Roadmap",desc:"Clear week-by-week learning paths so you always know where you are and what comes next.",points:["Structured week-by-week curriculum & milestones","Daily hands-on coding drills & sprint goals","Continuous progress tracking & accountability"]}],Ys=[{step:"01",icon:"📝",title:"Register Online",desc:"Fill in our short registration form. Takes less than 5 minutes. No coding test required at this stage."},{step:"02",icon:"📊",title:"Assessment",desc:"Complete a brief online assessment to help us understand your background and learning style."},{step:"03",icon:"🎓",title:"Learn & Build",desc:"Join your cohort. Attend live sessions, build real projects, get 1:1 mentoring every week."},{step:"04",icon:"🚀",title:"Get Hired",desc:"Graduate with a portfolio, polished resume, and placement support until you land your first role."}],dt=[{name:"Aditya Reddy",role:"AI Engineer (formerly B.Com graduate)",quote:"I had zero coding background when I joined TechFoundry's AI Engineering program. Within 12 weeks I had built 3 real AI projects and got placed within 6 weeks of graduating. The mentors genuinely care about your growth.",avatar:"👨‍💻",program:"AI Engineering"},{name:"Priya Nair",role:"Full-Stack Developer",quote:"The Web Development program was intense in the best way possible. I learned more in 10 weeks than I did in 2 years of self-study. The project-based approach meant I was building real things every single day.",avatar:"👩‍💻",program:"Web Development"},{name:"Karthik Menon",role:"Software Engineer at a fintech startup",quote:"What sets TechFoundry apart is the quality of mentorship. My mentor had 20+ years of industry experience and reviewed my code like a real engineering manager would. That feedback was invaluable.",avatar:"🧑‍💻",program:"Software Engineering"},{name:"Sneha Kulkarni",role:"ML Engineer (scholarship recipient)",quote:"I come from a small town and couldn't afford the program fees. The scholarship changed my life. I was treated exactly the same as every other learner — same mentors, same projects, same support.",avatar:"👩‍🎓",program:"AI Engineering (Scholarship)"}],Kh=[{icon:"🤖",program:"AI Engineering",roles:["AI Engineer","ML Engineer","Data Scientist","AI Product Developer"]},{icon:"🌐",program:"Web Development",roles:["Frontend Developer","Backend Developer","Full-Stack Developer","React Developer"]},{icon:"⚙️",program:"Software Engineering",roles:["Software Engineer","Backend Engineer","Systems Architect","DevOps Engineer"]}],Xh=[{name:"Chiselon Technologies Pvt. Ltd.",logo:"/assets/chiselon-clean.png",website:"https://www.chiselontechnologies.com/"},{name:"UDIT Cosmetech Pvt. Ltd.",logo:"/assets/udit-dark-opt.png",website:"https://uditcosmetech.com/"},{name:"Pakricorn Techno Solutions Pvt. Ltd.",logo:"/assets/pakricorn-clean.png",website:"https://www.pakricorn.com/"},{name:"Quantum Quest Technologies LLP",logo:"/assets/quantum-quest-clean.png",website:"https://www.quantumquest.in/"}],Jh=[{icon:"🎓",title:"Fresh Graduates",subtitle:"B.Tech / BCA / BSc / B.Com — any degree",desc:"You just graduated and need practical skills to compete in the job market. Your degree opened the door — TechFoundry gets you through it.",points:["No experience required","Start from fundamentals","Build portfolio from day one"],color:"#081738",border:"#1e3f7a"},{icon:"🔄",title:"Career Switchers",subtitle:"From non-tech to tech roles",desc:"You're working in sales, finance, operations, or any non-tech field and want to transition into a high-growth tech career without quitting your life.",points:["Structured for working professionals","Evening-friendly scheduling","Industry mentors who switched too"],color:"#071c32",border:"#174a68"},{icon:"⚡",title:"Aspiring Developers",subtitle:"Self-taught learners hitting a wall",desc:"You've done online courses, watched YouTube tutorials, but still can't land a job. You need structure, accountability, and real mentorship.",points:["Structured roadmap","Weekly accountability","Mock interviews & placement"],color:"#0d183d",border:"#263a7a"}],Zh=[{icon:"📡",title:"Live Interactive Sessions",desc:"Not pre-recorded videos. Real instructors, real questions, real-time feedback — conducted via live video every week."},{icon:"🔨",title:"Project-Based Curriculum",desc:"You build something every week. By the end, you have a portfolio of 4–6 real projects you can show to any employer."},{icon:"🧑‍🏫",title:"1:1 Weekly Mentoring",desc:"Every learner gets dedicated 1:1 time with an industry mentor to review code, discuss progress, and work through blockers."},{icon:"👥",title:"Cohort Learning",desc:"Learn alongside a tight-knit cohort. Peer review, group projects, and collaborative problem-solving — just like real tech teams."},{icon:"📋",title:"Code Reviews",desc:"Your code is reviewed like a professional pull request — with detailed feedback on logic, style, efficiency, and best practices."},{icon:"🏆",title:"Capstone Project",desc:"Every program ends with a capstone project — a full, deployable product that becomes the centrepiece of your portfolio."}],eg=[{feature:"Project-based learning",tf:!0,online:!1,college:!1},{feature:"1:1 industry mentorship",tf:!0,online:!1,college:!1},{feature:"Real-world capstone project",tf:!0,online:!0,college:!1},{feature:"Placement support & referrals",tf:!0,online:!1,college:!1},{feature:"Current industry curriculum",tf:!0,online:!0,college:!1},{feature:"Live instructor sessions",tf:!0,online:!1,college:!0},{feature:"Scholarship for deserving students",tf:!0,online:!1,college:!0},{feature:"Cohort & peer learning",tf:!0,online:!1,college:!0},{feature:"Affordable & focused duration",tf:!0,online:!0,college:!1}],tg=[{q:"Do I need prior coding experience?",a:"No. All our programs start from the fundamentals. What matters most is your motivation and commitment to learn."},{q:"How long are the programs?",a:"AI Engineering is 12 weeks, Web Development is 10 weeks, and Software Engineering is 14 weeks. All are full-time and intensive."},{q:"Is there a full scholarship available?",a:"Yes. The TechFoundry Talent Scholarship covers 100% of program fees for selected high-potential learners who face financial constraints."},{q:"How is TechFoundry different from online courses?",a:"Online courses give you content. TechFoundry gives you structure, accountability, real projects, 1:1 mentoring, and placement support — until you land."},{q:"Where are you located?",a:"We are based at Rent A Desk, 2nd Floor, Serenity Square, Opposite Westin Hotel, Mindspace, HITEC City, Hyderabad. Reach us on WhatsApp or apply online — our team will guide you from there."}];function rg({q:e,a:t}){const[r,n]=v.useState(!1);return i.jsxs("div",{className:`hfaq-item${r?" open":""}`,children:[i.jsxs("button",{className:"hfaq-question",onClick:()=>n(a=>!a),"aria-expanded":r,children:[i.jsx("span",{children:e}),i.jsx("span",{className:"hfaq-chevron",children:r?"−":"+"})]}),r&&i.jsx("div",{className:"hfaq-answer",children:i.jsx("p",{children:t})})]})}function ng(){const[e,t]=v.useState(0),r=ye(),n=ye(),a=ye(),o=ye(),l=ye(),s=ye(),c=ye(),u=ye(),m=ye(),h=ye(),g=ye(),x=ye(),w=ye();v.useEffect(()=>{document.title="TechFoundry — Forge Your Tech Career"},[]),v.useEffect(()=>{const y=setInterval(()=>t(d=>(d+1)%dt.length),5e3);return()=>clearInterval(y)},[]);function b(y){y.preventDefault();const f=`Hi TechFoundry, I am interested in Early Access & Free Seat Assessment. My email is: ${y.target.email.value}`;try{window.open(`https://wa.me/918309576596?text=${encodeURIComponent(f)}`,"_blank")}catch{}alert("Thank you! Your request has been directed to our WhatsApp line (+91 83095 76596)."),y.target.reset()}return i.jsxs("main",{children:[i.jsx("section",{className:"hero-section",children:i.jsxs("div",{className:"container hero-inner",children:[i.jsxs("div",{className:"hero-content animate-fade-up",children:[i.jsx("span",{className:"section-label",children:"🚀 Now enrolling — 2026 batch"}),i.jsxs("h1",{className:"hero-title",children:["Forge Your Career in",i.jsx("br",{}),i.jsx("span",{className:"hero-highlight",children:"Technology"})]}),i.jsx("p",{className:"hero-sub",children:"Hands-on, industry-driven training in AI, Web Development & Software Engineering. Real projects. Real mentors. Real outcomes — not just certificates."}),i.jsxs("div",{className:"hero-actions",children:[i.jsx(_,{to:"/contact",className:"btn btn-primary btn-lg",children:"Course Registration →"}),i.jsx(_,{to:"/programs",className:"btn btn-ghost btn-lg",children:"View Programs"})]}),i.jsxs("div",{className:"hero-trust",children:[i.jsx("span",{children:"✅ Project-based learning"}),i.jsx("span",{children:"✅ Industry mentors"}),i.jsx("span",{children:"✅ Placement support"})]})]}),i.jsx("div",{className:"hero-visual animate-fade-up animate-fade-up-delay-2",children:i.jsx("img",{src:"/assets/hero-tech-forge.jpg",alt:"Tech learning at TechFoundry",className:"hero-img"})})]})}),i.jsx("section",{className:"stats-bar",ref:r,children:i.jsxs("div",{className:"container stats-inner reveal",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("strong",{children:"3"}),i.jsx("span",{children:"Industry Programs"})]}),i.jsx("div",{className:"stat-divider"}),i.jsxs("div",{className:"stat-item",children:[i.jsx("strong",{children:"25+"}),i.jsx("span",{children:"Years Combined Experience"})]}),i.jsx("div",{className:"stat-divider"}),i.jsxs("div",{className:"stat-item",children:[i.jsx("strong",{children:"90%+"}),i.jsx("span",{children:"Portfolio-Ready Graduates"})]}),i.jsx("div",{className:"stat-divider"}),i.jsxs("div",{className:"stat-item",children:[i.jsx("strong",{children:"100%"}),i.jsx("span",{children:"Placement Support"})]}),i.jsx("div",{className:"stat-divider"}),i.jsxs("div",{className:"stat-item",children:[i.jsx("strong",{children:"3"}),i.jsx("span",{children:"Cities Hiring TF Grads"})]})]})}),i.jsx("section",{className:"section section-alt",ref:n,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header reveal",children:[i.jsx("span",{className:"section-label",children:"Why TechFoundry"}),i.jsx("h2",{className:"section-title",children:"Built for Real Outcomes"}),i.jsx("p",{className:"section-subtitle",children:"We don't just teach concepts — we forge practical skills, problem-solving ability, and real project experience."})]}),i.jsx("div",{className:"grid-3 reveal",style:{marginTop:"2.5rem"},children:Gh.map((y,d)=>i.jsxs("div",{className:"why-card",children:[i.jsx("div",{className:"why-icon",children:y.icon}),i.jsx("h4",{children:y.title}),i.jsx("p",{children:y.desc}),y.points&&i.jsx("ul",{className:"why-points",children:y.points.map((f,p)=>i.jsxs("li",{children:[i.jsx("span",{className:"why-check",children:"✓"}),i.jsx("span",{children:f})]},p))})]},d))})]})}),i.jsx("section",{className:"section",ref:m,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},className:"reveal",children:[i.jsx("span",{className:"section-label",children:"Who Is This For?"}),i.jsx("h2",{className:"section-title",children:"TechFoundry Is Built for You"}),i.jsx("p",{className:"section-subtitle",style:{margin:"0.5rem auto 0"},children:"Whether you're a fresher, a career switcher, or a self-taught developer — we have a program and a path designed around where you are right now."})]}),i.jsx("div",{className:"who-grid reveal",children:Jh.map((y,d)=>i.jsxs("div",{className:"who-card",style:{background:y.color,borderColor:y.border},children:[i.jsx("div",{className:"who-icon",children:y.icon}),i.jsx("h3",{className:"who-title",children:y.title}),i.jsx("p",{className:"who-subtitle",children:y.subtitle}),i.jsx("p",{className:"who-desc",children:y.desc}),i.jsx("ul",{className:"who-points",children:y.points.map((f,p)=>i.jsxs("li",{children:["✅ ",f]},p))}),i.jsxs("div",{className:"who-actions",children:[i.jsx(_,{to:"/programs",className:"btn btn-outline who-btn",children:"View Programs"}),i.jsx(_,{to:"/contact",className:"btn btn-primary who-btn",children:"Course Registration →"})]})]},d))})]})}),i.jsx("section",{className:"section",ref:a,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"how-header reveal",children:[i.jsxs("div",{children:[i.jsx("span",{className:"section-label",children:"The Process"}),i.jsx("h2",{className:"section-title",children:"How TechFoundry Works"}),i.jsx("p",{className:"section-subtitle",children:"From your first application to your first job offer — here's what the journey looks like."})]}),i.jsx(_,{to:"/contact",className:"btn btn-primary how-apply-btn",children:"Start Today →"})]}),i.jsx("div",{className:"how-grid reveal",style:{marginTop:"3rem"},children:Ys.map((y,d)=>i.jsxs("div",{className:"how-step",children:[i.jsx("div",{className:"how-step-number",children:y.step}),i.jsx("div",{className:"how-step-icon",children:y.icon}),i.jsx("h3",{className:"how-step-title",children:y.title}),i.jsx("p",{className:"how-step-desc",children:y.desc}),d<Ys.length-1&&i.jsx("div",{className:"how-arrow",children:"→"})]},d))})]})}),i.jsx("section",{className:"section section-alt",ref:o,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"section-header reveal",children:[i.jsx("span",{className:"section-label",children:"Our Programs"}),i.jsx("h2",{className:"section-title",children:"Choose Your Path"}),i.jsx("p",{className:"section-subtitle",children:"Industry-aligned programs designed to take you from beginner to job-ready professional."})]}),i.jsx("div",{className:"grid-3 reveal",style:{marginTop:"2.5rem"},children:Yh.map(y=>i.jsxs("article",{className:"card program-card",children:[i.jsx("div",{className:"program-img-wrap",style:{background:y.color},children:i.jsx("img",{src:y.img,alt:y.title,className:"program-img"})}),i.jsxs("div",{className:"card-body",children:[i.jsx("div",{className:"program-icon",children:y.icon}),i.jsx("h3",{className:"program-title",children:y.title}),i.jsx("p",{className:"program-desc",children:y.desc}),i.jsx("span",{className:"badge badge-blue program-meta",children:y.meta}),i.jsx(_,{to:`/programs/${y.slug}`,className:"btn btn-outline",style:{marginTop:"1rem",width:"100%",justifyContent:"center"},children:"View Details →"})]})]},y.slug))}),i.jsx("div",{className:"reveal",style:{textAlign:"center",marginTop:"2rem"},children:i.jsx(_,{to:"/programs",className:"btn btn-ghost",children:"View All Programs"})})]})}),i.jsx("section",{className:"section",ref:h,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{className:"learn-header reveal",children:[i.jsxs("div",{children:[i.jsx("span",{className:"section-label",children:"The Learning Experience"}),i.jsx("h2",{className:"section-title",children:"How We Teach"}),i.jsx("p",{className:"section-subtitle",children:"TechFoundry isn't a content library. It's a structured, guided experience designed to take you from learner to professional — with every element built around that outcome."})]}),i.jsx("img",{src:"/assets/learn-forge-lab.jpg",alt:"TechFoundry classroom experience",className:"learn-img"})]}),i.jsx("div",{className:"grid-3 reveal",style:{marginTop:"2.5rem"},children:Zh.map((y,d)=>i.jsxs("div",{className:"learn-card",children:[i.jsx("div",{className:"learn-icon",children:y.icon}),i.jsx("h4",{children:y.title}),i.jsx("p",{children:y.desc})]},d))})]})}),i.jsx("section",{className:"section testimonials-section",ref:l,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},className:"reveal",children:[i.jsx("span",{className:"section-label",children:"Student Stories"}),i.jsx("h2",{className:"section-title",children:"Hear from Our Graduates"}),i.jsx("p",{className:"section-subtitle",style:{margin:"0.5rem auto 0"},children:"Real outcomes from real people who chose to forge their careers with TechFoundry."})]}),i.jsxs("div",{className:"testimonial-featured reveal",children:[i.jsx("div",{className:"testimonial-quote-icon",children:'"'}),i.jsx("blockquote",{className:"testimonial-quote",children:dt[e].quote}),i.jsxs("div",{className:"testimonial-author",children:[i.jsx("span",{className:"testimonial-avatar",children:dt[e].avatar}),i.jsxs("div",{children:[i.jsx("strong",{children:dt[e].name}),i.jsx("p",{children:dt[e].role}),i.jsx("span",{className:"badge badge-blue",style:{marginTop:"0.3rem",display:"inline-flex"},children:dt[e].program})]})]}),i.jsx("div",{className:"testimonial-dots",children:dt.map((y,d)=>i.jsx("button",{className:`dot${d===e?" active":""}`,onClick:()=>t(d),"aria-label":`Testimonial ${d+1}`},d))})]}),i.jsx("div",{className:"testimonials-grid reveal",style:{marginTop:"2.5rem"},children:dt.map((y,d)=>i.jsxs("div",{className:`testimonial-card${d===e?" active":""}`,onClick:()=>t(d),children:[i.jsxs("p",{className:"tcard-quote",children:['"',y.quote.substring(0,110),'…"']}),i.jsxs("div",{className:"tcard-author",children:[i.jsx("span",{className:"tcard-avatar",children:y.avatar}),i.jsxs("div",{children:[i.jsx("strong",{children:y.name}),i.jsx("p",{children:y.role})]})]})]},d))})]})}),i.jsx("section",{className:"section section-alt",ref:s,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},className:"reveal",children:[i.jsx("span",{className:"section-label",children:"Hiring Partners & Placements"}),i.jsx("h2",{className:"section-title",children:"Where Our Graduates Work"}),i.jsx("p",{className:"section-subtitle",style:{margin:"0.5rem auto 0"},children:"TechFoundry engineers and developers are actively hired by premier technology companies and innovative product engineering teams."})]}),i.jsx("div",{className:"hiring-logos-grid reveal",children:Xh.map((y,d)=>i.jsxs("a",{href:y.website,target:"_blank",rel:"noreferrer",className:"hiring-logo-card",title:`Visit ${y.name} official website`,"aria-label":`Visit ${y.name} official website`,children:[i.jsx("div",{className:"hiring-logo-inner",children:i.jsx("img",{src:y.logo,alt:y.name,className:"hiring-logo-img"})}),i.jsx("div",{className:"hiring-logo-hover-badge",children:i.jsx("span",{children:"Visit Official Website ↗"})})]},d))}),i.jsxs("div",{style:{textAlign:"center",margin:"3.5rem 0 1.5rem"},className:"reveal",children:[i.jsx("h3",{style:{fontSize:"1.25rem",color:"#fff"},children:"Roles You Can Target Across Programs"}),i.jsx("p",{style:{fontSize:"0.9rem",color:"var(--text-secondary)",marginTop:"0.3rem"},children:"Industry-aligned preparation covering Artificial Intelligence, Full-Stack Web Development, and Systems Engineering."})]}),i.jsx("div",{className:"career-grid reveal",children:Kh.map((y,d)=>i.jsxs("div",{className:"career-card",children:[i.jsx("div",{className:"career-icon",children:y.icon}),i.jsx("h3",{className:"career-program",children:y.program}),i.jsx("div",{className:"career-roles",children:y.roles.map((f,p)=>i.jsx("span",{className:"career-role-pill",children:f},p))})]},d))}),i.jsx("div",{className:"career-note reveal",children:i.jsxs("div",{className:"career-note-inner",children:[i.jsx("span",{className:"career-note-icon",children:"📌"}),i.jsxs("p",{children:[i.jsx("strong",{children:"Important:"})," Salary outcomes and job placement are not guaranteed. Results depend on individual effort, skill development, and market conditions. TechFoundry provides full placement support — the drive has to come from you."]})]})})]})}),i.jsx("section",{className:"scholarship-banner reveal",ref:c,children:i.jsxs("div",{className:"container scholarship-banner-inner",children:[i.jsxs("div",{children:[i.jsx("span",{className:"sch-badge",children:"🎓 Full Scholarship Available"}),i.jsx("h2",{children:"TechFoundry Talent Scholarship"}),i.jsx("p",{children:"Exceptional talent can come from any background. If you demonstrate aptitude and determination but face financial constraints — we want to hear from you."}),i.jsxs("ul",{className:"sch-mini-list",children:[i.jsx("li",{children:"✅ Zero program fees for selected candidates"}),i.jsx("li",{children:"✅ Same cohort, same mentors, same projects"}),i.jsx("li",{children:"✅ Full placement support included"})]})]}),i.jsx(_,{to:"/scholarship",className:"btn btn-accent btn-lg",children:"Learn About Scholarship →"})]})}),i.jsx("section",{className:"section section-alt",ref:g,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},className:"reveal",children:[i.jsx("span",{className:"section-label",children:"Why Choose Us"}),i.jsx("h2",{className:"section-title",children:"TechFoundry vs The Alternatives"}),i.jsx("p",{className:"section-subtitle",style:{margin:"0.5rem auto 0"},children:"See how TechFoundry stacks up against traditional college education and generic online courses."})]}),i.jsx("div",{className:"compare-wrap reveal",children:i.jsxs("table",{className:"compare-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{className:"compare-feature-col",children:"Feature"}),i.jsx("th",{className:"compare-tf",children:i.jsx("span",{className:"compare-badge",children:"⚙ TechFoundry"})}),i.jsx("th",{children:"Online Courses"}),i.jsx("th",{children:"College / University"})]})}),i.jsx("tbody",{children:eg.map((y,d)=>i.jsxs("tr",{children:[i.jsx("td",{className:"compare-feature",children:y.feature}),i.jsx("td",{className:"compare-tf compare-check",children:y.tf?"✅":"❌"}),i.jsx("td",{className:"compare-check",children:y.online?"✅":"❌"}),i.jsx("td",{className:"compare-check",children:y.college?"✅":"❌"})]},d))})]})})]})}),i.jsx("section",{className:"section",ref:x,children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},className:"reveal",children:[i.jsx("span",{className:"section-label",children:"Next Batch"}),i.jsx("h2",{className:"section-title",children:"Upcoming Cohorts"}),i.jsx("p",{className:"section-subtitle",style:{margin:"0.5rem auto 0"},children:"Seats are strictly limited to 5 seats per cohort to ensure focused 1:1 mentoring. Apply early to secure your spot."})]}),i.jsx("div",{className:"batch-grid reveal",children:[{program:"AI Engineering",icon:"🤖",start:"November 2, 2026",duration:"12 weeks",seats:"5 seats",status:"Open",slug:"ai-engineering",statusColor:"#059669"},{program:"Web Development",icon:"🌐",start:"November 2, 2026",duration:"10 weeks",seats:"5 seats",status:"Open",slug:"web-development",statusColor:"#059669"},{program:"Software Engineering",icon:"⚙️",start:"November 2, 2026",duration:"14 weeks",seats:"5 seats",status:"Filling Fast",slug:"software-engineering",statusColor:"#d97706"}].map((y,d)=>i.jsxs("div",{className:"batch-card",children:[i.jsxs("div",{className:"batch-top",children:[i.jsx("span",{className:"batch-icon",children:y.icon}),i.jsx("span",{className:"batch-status",style:{background:y.statusColor+"20",color:y.statusColor,border:`1px solid ${y.statusColor}40`},children:y.status})]}),i.jsx("h3",{className:"batch-program",children:y.program}),i.jsxs("div",{className:"batch-details",children:[i.jsxs("div",{className:"batch-detail-row",children:[i.jsx("span",{children:"🗓️ Start Date"}),i.jsx("strong",{children:y.start})]}),i.jsxs("div",{className:"batch-detail-row",children:[i.jsx("span",{children:"⏱ Duration"}),i.jsx("strong",{children:y.duration})]}),i.jsxs("div",{className:"batch-detail-row",children:[i.jsx("span",{children:"👥 Cohort Size"}),i.jsx("strong",{children:y.seats})]})]}),i.jsx(_,{to:"/contact",className:"btn btn-primary",style:{width:"100%",justifyContent:"center",marginTop:"1rem"},children:"Reserve My Seat →"})]},d))}),i.jsx("div",{className:"batch-note reveal",children:i.jsx("p",{children:"📌 Batch dates are subject to change. Register now and our team will confirm your batch details during the admission call."})})]})}),i.jsx("section",{className:"section section-alt",ref:w,children:i.jsx("div",{className:"container",children:i.jsxs("div",{className:"hfaq-layout reveal",children:[i.jsxs("div",{className:"hfaq-left",children:[i.jsx("span",{className:"section-label",children:"Quick Answers"}),i.jsx("h2",{className:"section-title",children:"Common Questions"}),i.jsx("p",{className:"section-subtitle",children:"Can't find your answer here? Our team is a WhatsApp message away."}),i.jsxs("div",{style:{marginTop:"1.5rem",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[i.jsx("a",{href:"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",className:"btn btn-accent",children:"💬 WhatsApp Us"}),i.jsx(_,{to:"/faq",className:"btn btn-outline",children:"View All FAQs →"})]})]}),i.jsx("div",{className:"hfaq-right",children:tg.map((y,d)=>i.jsx(rg,{q:y.q,a:y.a},d))})]})})}),i.jsx("section",{className:"section section-alt",ref:u,children:i.jsxs("div",{className:"container subscribe-section reveal",children:[i.jsxs("div",{children:[i.jsx("span",{className:"section-label",children:"Stay Updated"}),i.jsx("h2",{style:{margin:"0.5rem 0"},children:"Get Early Access"}),i.jsxs("p",{className:"section-subtitle",children:["Share your email to start the assessment process for a ",i.jsx("strong",{children:"free seat"})," consideration."]})]}),i.jsxs("form",{className:"subscribe-form",onSubmit:b,children:[i.jsx("input",{type:"email",name:"email",placeholder:"your@email.com",required:!0,className:"subscribe-input","aria-label":"Email address"}),i.jsx("button",{type:"submit",className:"btn btn-primary",children:"Sign Up →"})]})]})}),i.jsx("section",{className:"final-cta-section",children:i.jsxs("div",{className:"container final-cta-inner",children:[i.jsxs("div",{className:"final-cta-text",children:[i.jsx("h2",{children:"Ready to Start Your Tech Career?"}),i.jsx("p",{children:"Join the next cohort. Limited seats. Registrations are reviewed on a rolling basis."})]}),i.jsxs("div",{className:"final-cta-actions",children:[i.jsx(_,{to:"/contact",className:"btn btn-primary btn-lg",children:"Course Registration →"}),i.jsx("a",{href:"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",className:"btn btn-ghost btn-lg",children:"💬 WhatsApp Us"})]})]})}),i.jsx("style",{children:`
        /* ---- HERO ---- */
        .hero-section {
          background: radial-gradient(ellipse 90% 70% at 50% -10%, #0d2860 0%, #061330 55%, #04091a 100%);
          padding: 5rem 0 4rem;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .hero-section::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.4), transparent);
        }
        .hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .hero-title { font-size: clamp(2.2rem, 5vw, 3.4rem); line-height: 1.15; margin: 0.75rem 0; }
        .hero-highlight {
          background: linear-gradient(90deg, #00d2ff, #38bdf8);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
        }
        .hero-sub { font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 1.75rem; line-height: 1.65; }
        .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1.5rem; }
        .hero-trust { display: flex; gap: 1.25rem; flex-wrap: wrap; font-size: 0.85rem; color: var(--muted); font-weight: 500; }
        .hero-img { width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); object-fit: cover; max-height: 420px; border: 1px solid var(--border); }

        /* ---- STATS ---- */
        .stats-bar {
          background: linear-gradient(135deg, #07132b 0%, #0d2146 100%);
          border-top: 1px solid #1e3a6d;
          border-bottom: 1px solid #1e3a6d;
          padding: 1.75rem 0;
        }
        .stats-inner { display: flex; align-items: center; justify-content: space-around; gap: 1rem; flex-wrap: wrap; }
        .stat-item { display: flex; flex-direction: column; align-items: center; gap: 0.2rem; text-align: center; }
        .stat-item strong {
          font-size: 2rem; font-weight: 800;
          color: #00d2ff;
          background: linear-gradient(135deg, #ffffff 0%, #38bdf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .stat-item span { font-size: 0.78rem; color: rgba(255,255,255,0.75); font-weight: 500; letter-spacing: 0.03em; }
        .stat-divider { width: 1px; height: 40px; background: rgba(56, 189, 248, 0.25); }

        /* ---- WHY CARDS ---- */
        .section-header { max-width: 600px; }
        .why-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
          display: flex; flex-direction: column;
        }
        .why-card:hover { transform: translateY(-4px); border-color: var(--border-strong); box-shadow: 0 10px 30px rgba(0, 180, 216, 0.12); }
        .why-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .why-card h4 { margin-bottom: 0.4rem; font-size: 1.05rem; }
        .why-card p { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 0.85rem; }
        .why-points {
          list-style: none;
          padding: 0;
          margin: auto 0 0;
          padding-top: 0.85rem;
          border-top: 1px dashed var(--border);
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .why-points li {
          display: flex;
          align-items: flex-start;
          gap: 0.45rem;
          font-size: 0.83rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }
        .why-check {
          color: #38bdf8;
          font-weight: 700;
          font-size: 0.85rem;
          flex-shrink: 0;
          margin-top: 1px;
        }

        /* ---- HOW IT WORKS ---- */
        .how-header { display: flex; align-items: flex-end; justify-content: space-between; gap: 1rem; flex-wrap: wrap; }
        .how-apply-btn { align-self: flex-end; flex-shrink: 0; }
        .how-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          position: relative;
        }
        .how-step {
          display: flex; flex-direction: column; align-items: center; text-align: center;
          padding: 2rem 1.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-right: none;
          position: relative;
          transition: background var(--transition);
        }
        .how-step:hover { background: var(--surface-2); }
        .how-step:first-child { border-radius: var(--radius) 0 0 var(--radius); }
        .how-step:last-child { border-right: 1px solid var(--border); border-radius: 0 var(--radius) var(--radius) 0; }
        .how-step-number {
          position: absolute;
          top: 1rem; left: 1rem;
          font-size: 0.75rem; font-weight: 800;
          color: #00d2ff; opacity: 0.85;
          letter-spacing: 0.05em;
        }
        .how-step-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .how-step-title { font-size: 1rem; font-weight: 700; margin-bottom: 0.5rem; }
        .how-step-desc { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.55; }
        .how-arrow {
          position: absolute; right: -14px; top: 50%; transform: translateY(-50%);
          font-size: 1.1rem; color: #00d2ff; z-index: 2;
          background: var(--surface-2); width: 28px; height: 28px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 50%; border: 1px solid var(--border-strong);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }

        /* ---- PROGRAM CARDS ---- */
        .program-img-wrap { height: 200px; display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .program-img { width: 100%; height: 100%; object-fit: cover; }
        .program-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
        .program-title { font-size: 1.15rem; margin-bottom: 0.4rem; }
        .program-desc { font-size: 0.9rem; color: var(--muted); margin-bottom: 0.75rem; }
        .program-meta { margin-top: 0; }

        /* ---- TESTIMONIALS ---- */
        .testimonials-section { background: linear-gradient(135deg, #050e24 0%, #0a1936 50%, #0077b6 100%); }
        .testimonials-section .section-label { background: rgba(255,255,255,0.15); color: #fff; }
        .testimonials-section h2, .testimonials-section p { color: rgba(255,255,255,0.9); }

        .testimonial-featured {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: var(--radius-xl);
          padding: 3rem;
          text-align: center;
          max-width: 780px;
          margin: 0 auto;
          backdrop-filter: blur(10px);
        }
        .testimonial-quote-icon {
          font-size: 5rem; line-height: 1; color: rgba(255,255,255,0.2);
          font-family: Georgia, serif; margin-bottom: -1.5rem;
        }
        .testimonial-quote {
          font-size: 1.15rem; color: #fff; line-height: 1.75;
          font-style: italic; margin-bottom: 1.75rem;
          border: none; padding: 0;
        }
        .testimonial-author { display: flex; align-items: center; justify-content: center; gap: 1rem; margin-bottom: 1.5rem; }
        .testimonial-avatar { font-size: 2.5rem; }
        .testimonial-author strong { color: #fff; display: block; }
        .testimonial-author p { color: rgba(255,255,255,0.7); font-size: 0.875rem; }
        .testimonial-dots { display: flex; justify-content: center; gap: 0.5rem; }
        .dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: rgba(255,255,255,0.3); border: none; cursor: pointer;
          transition: background var(--transition), transform var(--transition);
        }
        .dot.active { background: #fff; transform: scale(1.3); }

        .testimonials-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;
        }
        .testimonial-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: var(--radius);
          padding: 1.25rem;
          cursor: pointer;
          transition: background var(--transition), border-color var(--transition), transform var(--transition);
        }
        .testimonial-card:hover, .testimonial-card.active {
          background: rgba(255,255,255,0.12);
          border-color: rgba(255,255,255,0.3);
          transform: translateY(-3px);
        }
        .tcard-quote { font-size: 0.82rem; color: rgba(255,255,255,0.8); line-height: 1.6; margin-bottom: 0.75rem; font-style: italic; }
        .tcard-author { display: flex; align-items: center; gap: 0.6rem; }
        .tcard-avatar { font-size: 1.5rem; }
        .tcard-author strong { color: #fff; font-size: 0.82rem; display: block; }
        .tcard-author p { color: rgba(255,255,255,0.6); font-size: 0.75rem; }

        /* ---- HIRING PARTNERS / WHERE OUR GRADUATES WORK ---- */
        .hiring-logos-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .hiring-logo-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(145deg, rgba(8, 23, 56, 0.85) 0%, rgba(5, 14, 36, 0.95) 100%);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 1.75rem 1.25rem 1.25rem;
          min-height: 140px;
          text-decoration: none;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .hiring-logo-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #00b4d8, #00d2ff);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .hiring-logo-card:hover::before {
          transform: scaleX(1);
        }
        .hiring-logo-card:hover {
          transform: translateY(-4px);
          border-color: rgba(56, 189, 248, 0.5);
          box-shadow: 0 12px 35px rgba(0, 180, 216, 0.2);
        }
        .hiring-logo-inner {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 72px;
        }
        .hiring-logo-img {
          max-width: 85%;
          max-height: 56px;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.45));
          transition: transform 0.3s ease;
        }
        .hiring-logo-card:hover .hiring-logo-img {
          transform: scale(1.06);
        }
        .hiring-logo-hover-badge {
          margin-top: 0.85rem;
          font-size: 0.76rem;
          font-weight: 600;
          color: #38bdf8;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          opacity: 0.85;
          transition: opacity 0.2s ease, color 0.2s ease;
        }
        .hiring-logo-card:hover .hiring-logo-hover-badge {
          opacity: 1;
          color: #00d2ff;
        }

        @media (max-width: 992px) {
          .hiring-logos-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 550px) {
          .hiring-logos-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ---- CAREER OUTCOMES ---- */
        .career-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .career-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg);
          padding: 2rem; text-align: center;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }
        .career-card:hover { transform: translateY(-4px); border-color: var(--border-strong); box-shadow: 0 10px 30px rgba(0, 180, 216, 0.15); }
        .career-icon { font-size: 2.5rem; margin-bottom: 0.75rem; }
        .career-program { font-size: 1.1rem; margin-bottom: 1.25rem; color: #00d2ff; }
        .career-roles { display: flex; flex-direction: column; gap: 0.5rem; }
        .career-role-pill {
          background: var(--surface-2); border: 1px solid var(--border);
          border-radius: 999px; padding: 0.4rem 1rem;
          font-size: 0.85rem; color: var(--text-secondary); font-weight: 500;
          transition: background var(--transition), color var(--transition), border-color var(--transition);
        }
        .career-card:hover .career-role-pill { background: rgba(0, 180, 216, 0.15); color: #00e5ff; border-color: rgba(0, 180, 216, 0.4); }
        .career-note {
          margin-top: 2rem;
          background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: var(--radius);
          padding: 1rem 1.25rem;
        }
        .career-note-inner { display: flex; gap: 0.75rem; align-items: flex-start; }
        .career-note-icon { font-size: 1.1rem; flex-shrink: 0; margin-top: 2px; }
        .career-note p { font-size: 0.85rem; color: #fde047; line-height: 1.55; }
        .career-note strong { color: #fef08a; }

        /* ---- SCHOLARSHIP BANNER ---- */
        .scholarship-banner {
          background: linear-gradient(135deg, #07132b 0%, #0d2146 50%, #0077b6 100%);
          border: 1px solid #1e3a6d;
          padding: 4rem 0;
        }
        .scholarship-banner-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
        .scholarship-banner h2 { color: #fff; margin: 0.5rem 0; }
        .scholarship-banner p { color: rgba(255,255,255,0.85); max-width: 560px; margin-bottom: 1rem; }
        .sch-badge {
          display: inline-block; background: rgba(56, 189, 248, 0.2);
          color: #38bdf8; font-size: 0.8rem; font-weight: 600;
          border: 1px solid rgba(56, 189, 248, 0.4);
          padding: 0.25rem 0.75rem; border-radius: 999px; margin-bottom: 0.5rem;
          letter-spacing: 0.04em;
        }
        .sch-mini-list { display: flex; flex-direction: column; gap: 0.35rem; }
        .sch-mini-list li { color: rgba(255,255,255,0.9); font-size: 0.875rem; }

        /* ---- SUBSCRIBE ---- */
        .subscribe-section { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .subscribe-form { display: flex; gap: 0.75rem; }
        .subscribe-input {
          flex: 1; padding: 0.75rem 1rem; border: 1.5px solid var(--border-strong);
          background: var(--surface-2); color: #ffffff;
          border-radius: var(--radius-sm); font-size: 0.95rem; font-family: inherit;
          outline: none; transition: border-color var(--transition);
        }
        .subscribe-input::placeholder { color: var(--muted); }
        .subscribe-input:focus { border-color: #00d2ff; }

        /* ---- FINAL CTA ---- */
        .final-cta-section {
          background: linear-gradient(135deg, #050e24 0%, #0a1936 100%);
          border-top: 1px solid #1e3a6d;
          padding: 4rem 0;
        }
        .final-cta-inner { display: flex; align-items: center; justify-content: space-between; gap: 2rem; flex-wrap: wrap; }
        .final-cta-text h2 { color: #fff; margin-bottom: 0.4rem; }
        .final-cta-text p { color: #9ca3af; }
        .final-cta-actions { display: flex; gap: 1rem; flex-wrap: wrap; }

        /* ---- RESPONSIVE ---- */
        @media (max-width: 1024px) {
          .how-grid { grid-template-columns: repeat(2, 1fr); }
          .how-step { border-right: 1px solid var(--border); border-bottom: none; }
          .how-step:first-child { border-radius: var(--radius) 0 0 0; }
          .how-step:nth-child(2) { border-radius: 0 var(--radius) 0 0; }
          .how-step:nth-child(3) { border-radius: 0 0 0 var(--radius); border-top: none; }
          .how-step:last-child { border-radius: 0 0 var(--radius) 0; border-top: none; }
          .how-arrow { display: none; }
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
          .compare-table th, .compare-table td { padding: 0.75rem 0.5rem; font-size: 0.85rem; }
        }
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; }
          .hero-visual { display: none; }
          .subscribe-section { grid-template-columns: 1fr; gap: 1.5rem; }
          .stat-divider { display: none; }
          .scholarship-banner-inner { flex-direction: column; }
          .final-cta-inner { flex-direction: column; text-align: center; }
          .hiring-grid { grid-template-columns: 1fr; }
          .career-grid { grid-template-columns: 1fr; }
          .how-header { flex-direction: column; align-items: flex-start; }
          .learn-header { grid-template-columns: 1fr; }
          .learn-img { display: none; }
          .who-grid { grid-template-columns: 1fr; }
          .batch-grid { grid-template-columns: 1fr; }
          .hfaq-layout { grid-template-columns: 1fr; }
          .compare-wrap { overflow-x: auto; }
        }
        @media (max-width: 640px) {
          .how-grid { grid-template-columns: 1fr; }
          .how-step { border-right: 1px solid var(--border); border-radius: 0 !important; }
          .how-step:first-child { border-radius: var(--radius) var(--radius) 0 0 !important; }
          .how-step:last-child { border-radius: 0 0 var(--radius) var(--radius) !important; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .testimonial-featured { padding: 2rem 1.25rem; }
          .subscribe-form { flex-direction: column; }
          .batch-grid { grid-template-columns: 1fr; }
        }

        /* ---- WHO IS THIS FOR ---- */
        .who-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .who-card {
          border: 1.5px solid; border-radius: var(--radius-lg);
          padding: 2rem; display: flex; flex-direction: column; gap: 0.6rem;
          transition: transform var(--transition), box-shadow var(--transition);
        }
        .who-card:hover { transform: translateY(-4px); box-shadow: 0 12px 35px rgba(0, 180, 216, 0.18); }
        .who-icon { font-size: 2.5rem; }
        .who-title { font-size: 1.2rem; font-weight: 800; margin: 0; color: #fff; }
        .who-subtitle { font-size: 0.8rem; font-weight: 600; color: #38bdf8; text-transform: uppercase; letter-spacing: 0.06em; margin: 0; }
        .who-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin: 0.25rem 0; }
        .who-points { display: flex; flex-direction: column; gap: 0.35rem; margin: 0.25rem 0 1rem; }
        .who-points li { font-size: 0.85rem; color: var(--text-secondary); }
        .who-actions { display: flex; gap: 0.6rem; margin-top: auto; padding-top: 0.5rem; flex-wrap: wrap; }
        .who-btn { font-size: 0.85rem; padding: 0.55rem 0.85rem; flex: 1; min-width: 120px; justify-content: center; text-align: center; }

        /* ---- LEARNING EXPERIENCE ---- */
        .learn-header {
          display: grid; grid-template-columns: 1fr 420px; gap: 3rem; align-items: center; margin-bottom: 0;
        }
        .learn-img {
          width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-lg);
          object-fit: cover; height: 280px; border: 1px solid var(--border);
        }
        .learn-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius);
          padding: 1.5rem; transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
          position: relative; overflow: hidden;
        }
        .learn-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #00b4d8, #00d2ff);
          transform: scaleX(0); transform-origin: left; transition: transform 0.3s ease;
        }
        .learn-card:hover::before { transform: scaleX(1); }
        .learn-card:hover { transform: translateY(-4px); border-color: var(--border-strong); box-shadow: 0 10px 30px rgba(0, 180, 216, 0.12); }
        .learn-icon { font-size: 1.75rem; margin-bottom: 0.75rem; }
        .learn-card h4 { margin-bottom: 0.4rem; font-size: 1rem; color: #fff; }
        .learn-card p { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.6; }

        /* ---- COMPARISON TABLE ---- */
        .compare-wrap { overflow-x: auto; border-radius: var(--radius-lg); border: 1px solid var(--border); box-shadow: var(--shadow); }
        .compare-table {
          width: 100%; border-collapse: collapse; font-size: 0.9rem;
          background: var(--surface);
        }
        .compare-table thead { background: var(--surface-2); border-bottom: 1px solid var(--border-strong); }
        .compare-table th {
          padding: 1rem 1.25rem; text-align: center; font-size: 0.85rem;
          font-weight: 700; color: var(--text); letter-spacing: 0.04em;
        }
        .compare-feature-col { text-align: left !important; width: 40%; }
        .compare-tf { background: rgba(0, 180, 216, 0.12) !important; border-left: 1px solid var(--border-strong); border-right: 1px solid var(--border-strong); }
        .compare-badge {
          display: inline-block; background: linear-gradient(135deg, #00b4d8 0%, #0077b6 100%); color: #fff;
          padding: 0.35rem 0.95rem; border-radius: 999px; font-size: 0.82rem; font-weight: 700;
          box-shadow: 0 2px 10px rgba(0, 180, 216, 0.3);
        }
        .compare-table tbody tr { border-top: 1px solid var(--border); }
        .compare-table tbody tr:hover { background: var(--surface-2); }
        .compare-feature { padding: 0.9rem 1.25rem; color: var(--text-secondary); font-size: 0.875rem; }
        .compare-check { text-align: center; padding: 0.9rem 1rem; font-size: 1.1rem; }

        /* ---- UPCOMING BATCH ---- */
        .batch-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
        .batch-card {
          background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg);
          padding: 1.75rem; transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }
        .batch-card:hover { transform: translateY(-4px); border-color: var(--border-strong); box-shadow: 0 10px 30px rgba(0, 180, 216, 0.15); }
        .batch-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; }
        .batch-icon { font-size: 2rem; }
        .batch-status { font-size: 0.75rem; font-weight: 700; padding: 0.25rem 0.75rem; border-radius: 999px; }
        .batch-program { font-size: 1.15rem; margin-bottom: 1.25rem; color: #fff; }
        .batch-details { display: flex; flex-direction: column; gap: 0.75rem; }
        .batch-detail-row {
          display: flex; justify-content: space-between; align-items: center;
          padding: 0.6rem 0.75rem; background: var(--surface-2); border: 1px solid var(--border); border-radius: var(--radius-sm);
          font-size: 0.875rem;
        }
        .batch-detail-row span { color: var(--muted); }
        .batch-detail-row strong { color: var(--text); }
        .batch-note {
          margin-top: 1.5rem; text-align: center;
          background: rgba(234, 179, 8, 0.08); border: 1px solid rgba(234, 179, 8, 0.25); border-radius: var(--radius);
          padding: 0.75rem 1.25rem;
        }
        .batch-note p { font-size: 0.82rem; color: #fde047; }

        /* ---- HOME FAQ ---- */
        .hfaq-layout { display: grid; grid-template-columns: 340px 1fr; gap: 3rem; align-items: start; }
        .hfaq-left .section-title { margin-bottom: 0.5rem; }
        .hfaq-right { display: flex; flex-direction: column; gap: 0; }
        .hfaq-item {
          border: 1px solid var(--border); border-bottom: none; background: var(--surface);
          transition: background var(--transition);
        }
        .hfaq-item:first-child { border-radius: var(--radius) var(--radius) 0 0; }
        .hfaq-item:last-child { border-bottom: 1px solid var(--border); border-radius: 0 0 var(--radius) var(--radius); }
        .hfaq-item.open { background: var(--surface-2); }
        .hfaq-question {
          width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem;
          padding: 1rem 1.25rem; background: transparent; border: none; text-align: left;
          font-size: 0.9rem; font-weight: 600; color: var(--text); cursor: pointer;
          transition: color var(--transition);
        }
        .hfaq-question:hover { color: #00d2ff; }
        .hfaq-chevron { font-size: 1.2rem; font-weight: 400; color: #00d2ff; flex-shrink: 0; }
        .hfaq-answer { padding: 0 1.25rem 1rem; }
        .hfaq-answer p { font-size: 0.875rem; color: var(--text-secondary); line-height: 1.7; }
      `})]})}const ag=[{name:"Kalyan Chakravarthy",role:"Co-founder & CEO",bio:"With over 25 years in technology leadership, Kalyan brings deep expertise in enterprise software, AI systems, and building high-performance tech teams across global organizations."},{name:"Lakshmi Subramanian",role:"Co-founder & Head of Programs",bio:"A veteran educator and technologist from Chennai who has designed world-class engineering learning curricula for Fortune 500 enterprises and academic institutions across South Asia."},{name:"Pradeep Kumar Varma",role:"Co-founder & CTO",bio:"A seasoned cloud architect with deep expertise in distributed systems, scalable microservices, and AI infrastructure, having led engineering teams at top tech enterprises."}],ig=[{step:"01",label:"Learn",desc:"Master fundamentals through structured, hands-on lessons with real-world context."},{step:"02",label:"Build",desc:"Apply skills immediately by building real projects from week one."},{step:"03",label:"Apply",desc:"Tackle industry-relevant problems and challenges alongside peers."},{step:"04",label:"Grow",desc:"Land your role with placement support, mock interviews, and employer connections."}];function og(){return v.useEffect(()=>{document.title="About Us — TechFoundry"},[]),i.jsxs("main",{children:[i.jsx("section",{className:"page-hero",children:i.jsxs("div",{className:"container",children:[i.jsx("span",{className:"section-label",children:"About TechFoundry"}),i.jsx("h1",{children:"Built on a Simple Belief"}),i.jsxs("p",{className:"page-hero-sub",children:["Technology skills should lead to ",i.jsx("strong",{children:"real-world outcomes"})," — not just certificates."]})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container mv-grid",children:[i.jsxs("div",{className:"mv-card accent-blue",children:[i.jsx("div",{className:"mv-icon",children:"🎯"}),i.jsx("h3",{children:"Our Mission"}),i.jsxs("p",{children:["To ",i.jsx("strong",{children:"bridge the gap between conventional education and real-world employability"})," by delivering hands-on, outcome-driven engineering training that equips learners with the practical skills top employers actually demand."]}),i.jsxs("ul",{className:"mv-points",children:[i.jsxs("li",{children:[i.jsx("span",{className:"mv-check",children:"✓"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Hands-On, Project-First Pedagogy:"})," Replace rote lectures with production-grade coding and live deployments from day one."]})]}),i.jsxs("li",{children:[i.jsx("span",{className:"mv-check",children:"✓"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Direct Industry Mentorship:"})," Weekly 1:1 sessions, rigorous PR-style code reviews, and personal career direction from seasoned tech leads."]})]}),i.jsxs("li",{children:[i.jsx("span",{className:"mv-check",children:"✓"}),i.jsxs("div",{children:[i.jsx("strong",{children:"End-to-End Placement Support:"})," Dedicated resume optimization, mock technical & HR interviews, and warm employer referrals."]})]}),i.jsxs("li",{children:[i.jsx("span",{className:"mv-check",children:"✓"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Equal Opportunity Access:"})," Democratize tech careers with merit-based scholarships for deserving talent facing financial constraints."]})]})]})]}),i.jsxs("div",{className:"mv-card accent-green",children:[i.jsx("div",{className:"mv-icon",children:"🔭"}),i.jsx("h3",{children:"Our Vision"}),i.jsx("p",{children:"To become the premier tech talent launchpad recognized globally by industry leaders for producing adaptive, job-ready builders who architect and scale transformative technologies."}),i.jsxs("ul",{className:"mv-points",children:[i.jsxs("li",{children:[i.jsx("span",{className:"mv-check",children:"✓"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Global Standard of Excellence:"})," Establish a trusted industry benchmark for high-caliber full-stack, AI, and systems engineers."]})]}),i.jsxs("li",{children:[i.jsx("span",{className:"mv-check",children:"✓"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Empowering Non-Traditional Paths:"})," Prove that motivation, aptitude, and practical rigor outweigh traditional academic pedigree."]})]}),i.jsxs("li",{children:[i.jsx("span",{className:"mv-check",children:"✓"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Cultivating Lifelong Builders:"})," Nurture resilient problem solvers who stay ahead of fast-evolving AI and technological revolutions."]})]}),i.jsxs("li",{children:[i.jsx("span",{className:"mv-check",children:"✓"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Thriving Tech Community:"})," Build an active, collaborative ecosystem of alumni, tech leaders, hiring partners, and innovators."]})]})]})]})]})}),i.jsx("section",{className:"section section-alt",children:i.jsxs("div",{className:"container story-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"section-label",children:"Our Story"}),i.jsx("h2",{className:"section-title",children:"Why TechFoundry Exists"}),i.jsx("p",{style:{marginBottom:"1rem"},children:"TechFoundry was founded by three seasoned technology professionals who saw a growing disconnect: thousands of graduates with degrees, but few with the practical skills to contribute from day one."}),i.jsxs("p",{style:{marginBottom:"1rem"},children:["They built TechFoundry to fix that — not through traditional lectures or passive coursework, but through a forge model: intense, project-driven, mentor-guided training that produces professionals who can actually ",i.jsx("em",{children:"build things"}),"."]}),i.jsx("p",{children:"With a combined 25+ years of experience in leading technology organizations, our founders know exactly what the industry expects — and they've built every program around those expectations."})]}),i.jsx("div",{className:"story-img-wrap",children:i.jsx("img",{src:"/assets/logo-full.png",alt:"TechFoundry — Forging Future Tech Talent",className:"story-img"})})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},children:[i.jsx("span",{className:"section-label",children:"Our Approach"}),i.jsx("h2",{className:"section-title",children:"Learn → Build → Apply → Grow"}),i.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"A structured four-phase methodology that mirrors how professionals actually develop in the field."})]}),i.jsx("div",{className:"timeline",children:ig.map(e=>i.jsxs("div",{className:"timeline-item",children:[i.jsx("div",{className:"timeline-step",children:e.step}),i.jsxs("div",{className:"timeline-content",children:[i.jsx("h4",{children:e.label}),i.jsx("p",{children:e.desc})]})]},e.step))})]})}),i.jsx("section",{className:"section section-alt",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},children:[i.jsx("span",{className:"section-label",children:"Leadership"}),i.jsx("h2",{className:"section-title",children:"Meet the Founders"}),i.jsx("p",{className:"section-subtitle",style:{margin:"0 auto"},children:"TechFoundry is led by three experienced professionals with a combined 25+ years in the IT industry — across enterprise software, cloud architecture, and technology education."})]}),i.jsx("div",{className:"founders-grid",children:ag.map((e,t)=>i.jsx("article",{className:"founder-card",children:i.jsxs("div",{className:"founder-card-inner",children:[i.jsx("div",{className:"founder-badge-row",children:i.jsx("span",{className:"founder-tag",children:"Leadership"})}),i.jsx("h3",{className:"founder-name",children:e.name}),i.jsx("p",{className:"founder-role",children:e.role}),i.jsx("div",{className:"founder-divider"}),i.jsx("p",{className:"founder-bio",children:e.bio})]})},t))})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container what-we-do-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"section-label",children:"What We Do"}),i.jsx("h2",{className:"section-title",children:"Forging Tech Talent"}),i.jsxs("ul",{className:"check-list",children:[i.jsx("li",{children:"Industry-relevant training in AI, Web Development & Software Engineering"}),i.jsx("li",{children:"Real-world, project-based learning from day one"}),i.jsx("li",{children:"Career-focused mentorship from working professionals"}),i.jsx("li",{children:"Building job-ready portfolios — not just theoretical knowledge"}),i.jsx("li",{children:"Placement prep: resume review, mock interviews, employer connections"}),i.jsx("li",{children:"Talent scholarship program for high-potential learners"})]})]}),i.jsxs("div",{className:"our-promise",children:[i.jsx("h3",{children:"Our Promise"}),i.jsxs("p",{children:["At TechFoundry, we are committed to ",i.jsx("strong",{children:"forging future tech talent"})," — equipping learners not just to learn technology, but to ",i.jsx("strong",{children:"build with it, innovate with it, and succeed with it"}),"."]}),i.jsx(_,{to:"/contact",className:"btn btn-primary",style:{marginTop:"1.5rem",display:"inline-flex"},children:"Start Your Journey →"})]})]})}),i.jsx("style",{children:`
        .page-hero {
          background: radial-gradient(ellipse 90% 80% at 50% -20%, #0d2860 0%, #061330 60%, #04091a 100%);
          padding: 4.5rem 0 3.5rem;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .page-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.45), transparent);
        }
        .page-hero h1 { margin: 0.5rem 0; color: #fff; }
        .page-hero-sub {
          font-size: 1.15rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin-top: 0.5rem;
        }
        /* Mission/Vision */
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }
        .mv-card {
          padding: 2rem;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .accent-blue { background: #081738; border-color: #1e3f7a; }
        .accent-green { background: #071c32; border-color: #174a68; }
        .mv-icon { font-size: 2.5rem; margin-bottom: 1rem; }
        .mv-card h3 { margin-bottom: 0.75rem; color: #fff; }
        .mv-card p { color: var(--text-secondary); line-height: 1.65; }
        .mv-points {
          list-style: none;
          padding: 0;
          margin: 1.25rem 0 0;
          padding-top: 1rem;
          border-top: 1px dashed rgba(255,255,255,0.15);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .mv-points li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.45;
        }
        .mv-points strong {
          color: #fff;
          font-weight: 600;
        }
        .mv-check {
          color: #00d2ff;
          font-weight: 700;
          font-size: 0.95rem;
          flex-shrink: 0;
          margin-top: 1px;
        }
        .accent-green .mv-check {
          color: #34d399;
        }
        /* Story */
        .story-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .story-grid p { line-height: 1.7; color: var(--text-secondary); }
        .story-img-wrap { display: flex; justify-content: center; }
        .story-img { max-width: 380px; border-radius: var(--radius-lg); }
        /* Timeline */
        .timeline {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
        }
        .timeline::before {
          content: '';
          position: absolute;
          top: 28px;
          left: calc(12.5% + 20px);
          right: calc(12.5% + 20px);
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          z-index: 0;
        }
        .timeline-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          position: relative;
          z-index: 1;
        }
        .timeline-step {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          color: #fff;
          font-size: 1rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          box-shadow: 0 4px 16px rgba(0, 180, 216, 0.4);
        }
        .timeline-content h4 { margin-bottom: 0.4rem; color: #fff; }
        .timeline-content p { font-size: 0.88rem; color: var(--text-secondary); }
        /* Founders */
        .founders-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.75rem;
        }
        .founder-card {
          background: linear-gradient(180deg, #091a3a 0%, #061226 100%);
          border: 1px solid #1a325c;
          border-radius: var(--radius-lg);
          padding: 2.25rem 1.75rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal);
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
        .founder-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          opacity: 0.8;
        }
        .founder-card:hover {
          transform: translateY(-5px);
          border-color: rgba(0, 210, 255, 0.45);
          box-shadow: 0 16px 36px rgba(0, 180, 216, 0.15);
        }
        .founder-card-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          height: 100%;
        }
        .founder-badge-row {
          margin-bottom: 1.25rem;
        }
        .founder-tag {
          display: inline-block;
          background: rgba(0, 180, 216, 0.12);
          color: #00d2ff;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.35rem 0.9rem;
          border-radius: 999px;
          border: 1px solid rgba(0, 210, 255, 0.3);
        }
        .founder-name {
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.35rem;
        }
        .founder-role {
          color: #00d2ff;
          font-weight: 600;
          font-size: 0.9rem;
          margin: 0 0 1rem;
          letter-spacing: 0.01em;
        }
        .founder-divider {
          width: 48px;
          height: 2px;
          background: linear-gradient(90deg, var(--primary), var(--accent));
          margin: 0 auto 1.25rem;
          border-radius: 2px;
        }
        .founder-bio {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.65;
          margin: 0;
        }
        /* What we do */
        .what-we-do-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .check-list {
          margin-top: 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.7rem;
        }
        .check-list li {
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.55;
        }
        .check-list li::before {
          content: '✅';
          position: absolute;
          left: 0;
          font-size: 0.85rem;
        }
        .our-promise {
          background: linear-gradient(135deg, #07132b 0%, #0d2146 60%, #0077b6 100%);
          border: 1px solid #1e3a6d;
          color: #fff;
          padding: 2.5rem;
          border-radius: var(--radius-lg);
        }
        .our-promise h3 { color: #fff; margin-bottom: 1rem; }
        .our-promise p { color: rgba(255,255,255,0.85); line-height: 1.65; }
        @media (max-width: 900px) {
          .mv-grid, .story-grid, .what-we-do-grid { grid-template-columns: 1fr; }
          .founders-grid { grid-template-columns: 1fr 1fr; }
          .timeline { grid-template-columns: 1fr 1fr; }
          .timeline::before { display: none; }
          .story-img-wrap { display: none; }
        }
        @media (max-width: 600px) {
          .founders-grid { grid-template-columns: 1fr; }
          .timeline { grid-template-columns: 1fr; }
        }
      `})]})}const No=[{slug:"ai-engineering",icon:"🤖",title:"AI Engineering",tagline:"Build the future with artificial intelligence.",desc:"Learn to design, train, and deploy AI systems with practical projects and industry mentorship. Go from zero to building production-ready AI applications.",meta:"12 weeks • Project-based",img:"/assets/prog-ai-eng.jpg",color:"rgba(0, 180, 216, 0.08)",highlights:["Live, instructor-led sessions","Capstone AI product","MLOps & deployment","Industry mentor 1:1s"],syllabus:[{week:"Weeks 1–2",topic:"Python for ML & data manipulation"},{week:"Weeks 3–5",topic:"Machine learning fundamentals & deep learning"},{week:"Weeks 6–7",topic:"Model evaluation, optimization & productionization"},{week:"Weeks 8–9",topic:"MLOps, deployment & monitoring"},{week:"Weeks 10–11",topic:"NLP, computer vision & generative AI"},{week:"Week 12",topic:"Capstone: End-to-end AI product"}],outcomes:["Build and deploy ML models","Work with real datasets","Understand MLOps pipelines","Present a portfolio AI project"]},{slug:"web-development",icon:"🌐",title:"Web Development",tagline:"Build modern, responsive web applications.",desc:"Build responsive, accessible full-stack web applications using modern tools. Cover everything from HTML & CSS to React, Node.js, and databases.",meta:"10 weeks • Frontend + Backend",img:"/assets/prog-web-dev.jpg",color:"rgba(16, 185, 129, 0.08)",highlights:["Full-stack project portfolio","React & Node.js","Database design & APIs","Deployment on cloud"],syllabus:[{week:"Weeks 1–2",topic:"HTML, CSS & modern responsive layouts"},{week:"Weeks 3–4",topic:"JavaScript, DOM & ES6+"},{week:"Weeks 5–6",topic:"React fundamentals, hooks & state management"},{week:"Week 7",topic:"Node.js, Express & REST APIs"},{week:"Weeks 8–9",topic:"Databases, authentication & deployment"},{week:"Week 10",topic:"Capstone: Full-stack web application"}],outcomes:["Build full-stack web applications","Work with React & Node.js","Design RESTful APIs","Deploy to cloud platforms"]},{slug:"software-engineering",icon:"⚙️",title:"Software Engineering",tagline:"Design scalable systems and write production-quality code.",desc:"Master software design, testing, and collaboration on real-world systems. Learn the patterns and practices that top engineers use every day.",meta:"14 weeks • Systems & Architecture",img:"/assets/prog-soft-eng.jpg",color:"rgba(56, 189, 248, 0.08)",highlights:["System design mastery","Data structures & algorithms","CI/CD & testing","Microservices & cloud"],syllabus:[{week:"Weeks 1–2",topic:"System design & architecture patterns"},{week:"Weeks 3–4",topic:"Data structures, algorithms & performance"},{week:"Weeks 5–6",topic:"Testing, CI/CD & code quality"},{week:"Weeks 7–9",topic:"Scalable backend services & microservices"},{week:"Weeks 10–11",topic:"Security, monitoring & reliability"},{week:"Weeks 12–14",topic:"Capstone: Production-grade distributed system"}],outcomes:["Design scalable systems","Write clean, tested code","Work with CI/CD pipelines","Build & monitor microservices"]}];function lg(){return v.useEffect(()=>{document.title="Programs — TechFoundry"},[]),i.jsxs("main",{children:[i.jsx("section",{className:"page-hero",children:i.jsxs("div",{className:"container",children:[i.jsx("span",{className:"section-label",children:"Our Programs"}),i.jsx("h1",{children:"Choose Your Tech Path"}),i.jsx("p",{className:"page-hero-sub",children:"Industry-aligned programs designed to take you from beginner to job-ready professional — with real projects, real mentors, and real support."})]})}),i.jsx("section",{className:"section",children:i.jsx("div",{className:"container programs-list",children:No.map((e,t)=>i.jsxs("article",{className:`prog-row card${t%2===1?" prog-row-alt":""}`,children:[i.jsx("div",{className:"prog-img-wrap",style:{background:e.color},children:i.jsx("img",{src:e.img,alt:e.title,className:"prog-img"})}),i.jsxs("div",{className:"prog-content card-body",children:[i.jsxs("div",{className:"prog-top",children:[i.jsx("span",{className:"prog-icon",children:e.icon}),i.jsx("span",{className:"badge badge-blue",children:e.meta})]}),i.jsx("h2",{className:"prog-title",children:e.title}),i.jsx("p",{className:"prog-tagline",children:e.tagline}),i.jsx("p",{className:"prog-desc",children:e.desc}),i.jsx("ul",{className:"prog-highlights",children:e.highlights.map((r,n)=>i.jsxs("li",{children:["✅ ",r]},n))}),i.jsxs("div",{className:"prog-actions",children:[i.jsx(_,{to:`/programs/${e.slug}`,className:"btn btn-primary",children:"View Full Curriculum →"}),i.jsx(_,{to:"/contact",className:"btn btn-outline",children:"Course Registration"})]})]})]},e.slug))})}),i.jsx("section",{className:"section section-alt",children:i.jsxs("div",{className:"container",style:{textAlign:"center"},children:[i.jsx("h2",{children:"Not Sure Which Program Is Right for You?"}),i.jsx("p",{style:{color:"var(--text-secondary)",marginTop:"0.5rem",marginBottom:"1.5rem"},children:"Reach out on WhatsApp or fill in the contact form — our team will help you pick the right path."}),i.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",flexWrap:"wrap"},children:[i.jsx("a",{href:"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",className:"btn btn-accent",children:"💬 Chat on WhatsApp"}),i.jsx(_,{to:"/contact",className:"btn btn-outline",children:"Course Registration"})]})]})}),i.jsx("style",{children:`
        .page-hero {
          background: radial-gradient(ellipse 90% 80% at 50% -20%, #0d2860 0%, #061330 60%, #04091a 100%);
          padding: 4.5rem 0 3.5rem;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .page-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.45), transparent);
        }
        .page-hero h1 { margin: 0.5rem 0; color: #fff; }
        .page-hero-sub { font-size: 1.1rem; color: var(--text-secondary); max-width: 640px; margin-top: 0.5rem; }

        .programs-list { display: flex; flex-direction: column; gap: 2rem; }

        .prog-row {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          overflow: hidden;
          background: var(--surface);
          border: 1px solid var(--border);
        }
        .prog-row-alt { direction: rtl; }
        .prog-row-alt > * { direction: ltr; }

        .prog-img-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          overflow: hidden;
        }
        .prog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          max-height: 360px;
        }
        .prog-content { padding: 2rem; }
        .prog-top { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
        .prog-icon { font-size: 1.75rem; }
        .prog-title { font-size: 1.6rem; margin-bottom: 0.3rem; color: #fff; }
        .prog-tagline { color: #00d2ff; font-weight: 600; font-size: 0.95rem; margin-bottom: 0.5rem; }
        .prog-desc { color: var(--text-secondary); margin-bottom: 1rem; line-height: 1.65; }
        .prog-highlights {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }
        .prog-highlights li { font-size: 0.9rem; color: var(--text-secondary); }
        .prog-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; }

        @media (max-width: 768px) {
          .prog-row { grid-template-columns: 1fr; direction: ltr; }
          .prog-row-alt { direction: ltr; }
          .prog-img-wrap { min-height: 220px; }
        }
      `})]})}function sg(){const{slug:e}=Qm(),t=No.find(n=>n.slug===e);if(v.useEffect(()=>{t&&(document.title=`${t.title} — TechFoundry`)},[t]),!t)return i.jsx(lh,{to:"/programs",replace:!0});const r=No.filter(n=>n.slug!==e);return i.jsxs("main",{children:[i.jsx("div",{className:"breadcrumb-bar",children:i.jsxs("div",{className:"container breadcrumb-inner",children:[i.jsx(_,{to:"/",children:"Home"}),i.jsx("span",{children:"›"}),i.jsx(_,{to:"/programs",children:"Programs"}),i.jsx("span",{children:"›"}),i.jsx("span",{className:"breadcrumb-current",children:t.title})]})}),i.jsx("section",{className:"pd-hero",children:i.jsxs("div",{className:"container pd-hero-inner",children:[i.jsxs("div",{className:"pd-hero-content",children:[i.jsx("span",{className:"pd-icon",children:t.icon}),i.jsx("span",{className:"badge badge-blue",children:t.meta}),i.jsx("h1",{style:{margin:"0.75rem 0"},children:t.title}),i.jsx("p",{className:"pd-tagline",children:t.tagline}),i.jsx("p",{className:"pd-desc",children:t.desc}),i.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap",marginTop:"1.5rem"},children:[i.jsx(_,{to:"/contact",className:"btn btn-primary btn-lg",children:"Course Registration →"}),i.jsx("a",{href:"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",className:"btn btn-ghost btn-lg",children:"💬 Ask a Question"})]})]}),i.jsx("div",{className:"pd-hero-img-wrap",children:i.jsx("img",{src:t.img,alt:t.title,className:"pd-hero-img"})})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container pd-content-grid",children:[i.jsxs("div",{children:[i.jsx("h2",{style:{marginBottom:"1.5rem"},children:"Curriculum"}),i.jsx("div",{className:"syllabus-list",children:t.syllabus.map((n,a)=>i.jsxs("div",{className:"syllabus-item",children:[i.jsx("div",{className:"syllabus-num",children:a+1}),i.jsxs("div",{children:[i.jsx("p",{className:"syllabus-week",children:n.week}),i.jsx("p",{className:"syllabus-topic",children:n.topic})]})]},a))})]}),i.jsxs("aside",{className:"pd-sidebar",children:[i.jsxs("div",{className:"pd-sidebar-card",children:[i.jsx("h3",{children:"Program Highlights"}),i.jsx("ul",{className:"pd-highlights",children:t.highlights.map((n,a)=>i.jsxs("li",{children:[i.jsx("span",{className:"highlight-dot"}),n]},a))})]}),i.jsxs("div",{className:"pd-sidebar-card accent-green-card",children:[i.jsx("h3",{children:"What You'll Be Able to Do"}),i.jsx("ul",{className:"pd-highlights",children:t.outcomes.map((n,a)=>i.jsxs("li",{children:["✅ ",n]},a))})]}),i.jsxs("div",{className:"pd-apply-card",children:[i.jsx("h3",{children:"Ready to Join?"}),i.jsx("p",{children:"Apply now or reach out on WhatsApp. Limited seats available."}),i.jsxs(_,{to:"/contact",className:"btn btn-primary",style:{width:"100%",justifyContent:"center",marginTop:"1rem"},children:["Apply for ",t.title," →"]}),i.jsx("a",{href:"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",className:"btn btn-ghost",style:{width:"100%",justifyContent:"center",marginTop:"0.75rem"},children:"💬 WhatsApp Us"})]})]})]})}),i.jsx("section",{className:"section section-alt",children:i.jsxs("div",{className:"container",children:[i.jsx("h2",{style:{marginBottom:"1.5rem"},children:"Explore Other Programs"}),i.jsx("div",{className:"grid-2",children:r.map(n=>i.jsxs("article",{className:"card other-prog-card",children:[i.jsx("div",{className:"other-prog-img-wrap",style:{background:n.color},children:i.jsx("img",{src:n.img,alt:n.title})}),i.jsxs("div",{className:"card-body",children:[i.jsxs("div",{style:{display:"flex",gap:"0.5rem",alignItems:"center",marginBottom:"0.5rem"},children:[i.jsx("span",{style:{fontSize:"1.5rem"},children:n.icon}),i.jsx("span",{className:"badge badge-blue",children:n.meta})]}),i.jsx("h3",{style:{fontSize:"1.2rem",marginBottom:"0.4rem"},children:n.title}),i.jsx("p",{style:{color:"var(--muted)",fontSize:"0.9rem",marginBottom:"1rem"},children:n.desc}),i.jsx(_,{to:`/programs/${n.slug}`,className:"btn btn-outline",style:{width:"100%",justifyContent:"center"},children:"View Details →"})]})]},n.slug))})]})}),i.jsx("style",{children:`
        .breadcrumb-bar {
          background: var(--surface);
          border-bottom: 1px solid var(--border);
          padding: 0.75rem 0;
        }
        .breadcrumb-inner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--muted);
        }
        .breadcrumb-inner a { color: var(--primary); text-decoration: none; }
        .breadcrumb-inner a:hover { text-decoration: underline; }
        .breadcrumb-current { color: var(--text); font-weight: 500; }

        .pd-hero {
          background: radial-gradient(ellipse 90% 80% at 50% -20%, #0d2860 0%, #061330 60%, #04091a 100%);
          padding: 4.5rem 0 3.5rem;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .pd-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.45), transparent);
        }
        .pd-hero h1 { color: #fff; }
        .pd-hero-inner {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 3rem;
          align-items: center;
        }
        .pd-icon { font-size: 2.5rem; display: block; margin-bottom: 0.5rem; }
        .pd-tagline { color: #00d2ff; font-weight: 600; font-size: 1rem; margin-bottom: 0.5rem; }
        .pd-desc { color: var(--text-secondary); line-height: 1.65; }
        .pd-hero-img { width: 100%; border-radius: var(--radius-lg); box-shadow: var(--shadow-xl); object-fit: cover; max-height: 380px; border: 1px solid var(--border); }

        .pd-content-grid {
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 3rem;
          align-items: start;
        }

        .syllabus-list { display: flex; flex-direction: column; gap: 1rem; }
        .syllabus-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: var(--surface);
          border-radius: var(--radius);
          border: 1px solid var(--border);
        }
        .syllabus-num {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00b4d8, #0077b6);
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 2px 8px rgba(0, 180, 216, 0.3);
        }
        .syllabus-week { font-size: 0.78rem; color: #38bdf8; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
        .syllabus-topic { font-size: 0.95rem; color: var(--text); font-weight: 500; margin-top: 0.15rem; }

        .pd-sidebar { display: flex; flex-direction: column; gap: 1.25rem; }
        .pd-sidebar-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.25rem;
        }
        .pd-sidebar-card h3 { font-size: 1rem; margin-bottom: 1rem; color: #fff; }
        .accent-green-card { background: #071c32; border-color: #174a68; }
        .pd-highlights { display: flex; flex-direction: column; gap: 0.6rem; }
        .pd-highlights li {
          display: flex; align-items: flex-start; gap: 0.5rem;
          font-size: 0.9rem; color: var(--text-secondary);
        }
        .highlight-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #00d2ff;
          margin-top: 6px;
          flex-shrink: 0;
          box-shadow: 0 0 6px rgba(0, 210, 255, 0.6);
        }
        .pd-apply-card {
          background: linear-gradient(135deg, #07132b 0%, #0d2146 50%, #0077b6 100%);
          border: 1px solid #1e3a6d;
          border-radius: var(--radius);
          padding: 1.5rem;
          color: #fff;
        }
        .pd-apply-card h3 { color: #fff; margin-bottom: 0.5rem; font-size: 1.1rem; }
        .pd-apply-card p { color: rgba(255,255,255,0.85); font-size: 0.88rem; }

        .other-prog-img-wrap { height: 180px; overflow: hidden; display: flex; align-items: center; }
        .other-prog-img-wrap img { width: 100%; height: 100%; object-fit: cover; }

        @media (max-width: 900px) {
          .pd-hero-inner { grid-template-columns: 1fr; }
          .pd-hero-img { display: none; }
          .pd-content-grid { grid-template-columns: 1fr; }
          .pd-sidebar { order: -1; }
        }
      `})]})}const cg=[{icon:"📝",title:"Register Your Interest",desc:"Share your email or WhatsApp us. Our team will reach out within 24 hours to guide you through the process."},{icon:"📊",title:"Assessment",desc:"Complete a short online assessment to help us understand your current skill level and potential. No coding required for the initial round."},{icon:"🗣️",title:"Interview",desc:"A brief conversation with our team to assess your motivation, aptitude, and commitment to the program."},{icon:"🎓",title:"Selection & Offer",desc:"Shortlisted candidates receive a full scholarship covering the entire AI Engineering program — no fees whatsoever."}],ug=["Demonstrated interest in technology and eagerness to learn","Willingness to commit to the full program schedule","Financial need — unable to access quality tech education otherwise","Any educational background — prior coding experience is not required","Must be based in or able to attend sessions from Hyderabad"];function dg(){return v.useEffect(()=>{document.title="Scholarship — TechFoundry"},[]),i.jsxs("main",{children:[i.jsx("section",{className:"scholarship-hero",children:i.jsxs("div",{className:"container",children:[i.jsx("span",{className:"section-label",children:"Talent Scholarship Program"}),i.jsx("h1",{children:"Exceptional Talent, Any Background"}),i.jsxs("p",{className:"sch-sub",children:["We believe financial constraints should never block potential. The TechFoundry Talent Scholarship Program gives high-potential learners a ",i.jsx("strong",{children:"full scholarship"})," to our flagship AI Engineering Program."]}),i.jsx(_,{to:"/contact",className:"btn btn-accent btn-lg",children:"Apply for Scholarship →"})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},children:[i.jsx("span",{className:"section-label",children:"What's Included"}),i.jsx("h2",{className:"section-title",children:"Full Scholarship Benefits"})]}),i.jsxs("div",{className:"sch-benefits grid-3",children:[i.jsxs("div",{className:"sch-benefit-card",children:[i.jsx("div",{className:"sch-benefit-icon",children:"🆓"}),i.jsx("h4",{children:"Zero Fees"}),i.jsx("p",{children:"Complete access to the AI Engineering program at absolutely no cost."})]}),i.jsxs("div",{className:"sch-benefit-card",children:[i.jsx("div",{className:"sch-benefit-icon",children:"👥"}),i.jsx("h4",{children:"Same Cohort"}),i.jsx("p",{children:"Learn alongside paid learners in the same batches — no separate classes."})]}),i.jsxs("div",{className:"sch-benefit-card",children:[i.jsx("div",{className:"sch-benefit-icon",children:"🔨"}),i.jsx("h4",{children:"Real Projects"}),i.jsx("p",{children:"Build the same real-world portfolio projects as all other learners."})]}),i.jsxs("div",{className:"sch-benefit-card",children:[i.jsx("div",{className:"sch-benefit-icon",children:"🧑‍💼"}),i.jsx("h4",{children:"Mentorship"}),i.jsx("p",{children:"Full access to 1:1 mentoring sessions with industry professionals."})]}),i.jsxs("div",{className:"sch-benefit-card",children:[i.jsx("div",{className:"sch-benefit-icon",children:"📄"}),i.jsx("h4",{children:"Placement Support"}),i.jsx("p",{children:"Resume reviews, mock interviews, and employer connections — just like everyone else."})]}),i.jsxs("div",{className:"sch-benefit-card",children:[i.jsx("div",{className:"sch-benefit-icon",children:"🏆"}),i.jsx("h4",{children:"Certificate"}),i.jsx("p",{children:"Receive the same TechFoundry completion certificate upon graduating."})]})]})]})}),i.jsx("section",{className:"section section-alt",children:i.jsxs("div",{className:"container",children:[i.jsxs("div",{style:{textAlign:"center",marginBottom:"3rem"},children:[i.jsx("span",{className:"section-label",children:"How to Apply"}),i.jsx("h2",{className:"section-title",children:"Scholarship Selection Process"})]}),i.jsx("div",{className:"sch-process",children:cg.map((e,t)=>i.jsxs("div",{className:"sch-step",children:[i.jsx("div",{className:"sch-step-num",children:t+1}),i.jsx("div",{className:"sch-step-icon",children:e.icon}),i.jsx("h4",{children:e.title}),i.jsx("p",{children:e.desc})]},t))}),i.jsx("div",{style:{textAlign:"center",marginTop:"2rem"},children:i.jsx("img",{src:"/assets/Scholarship_Process_Final.png",alt:"Scholarship process diagram",style:{maxWidth:"100%",borderRadius:"var(--radius-lg)",boxShadow:"var(--shadow)"}})})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container sch-elig-grid",children:[i.jsxs("div",{children:[i.jsx("span",{className:"section-label",children:"Eligibility"}),i.jsx("h2",{className:"section-title",children:"Who Should Apply?"}),i.jsx("p",{style:{color:"var(--muted)",marginBottom:"1.5rem"},children:"The scholarship is open to anyone with the drive to build a career in technology — regardless of their academic background or previous experience."}),i.jsx("ul",{className:"check-list",children:ug.map((e,t)=>i.jsx("li",{children:e},t))})]}),i.jsxs("div",{className:"sch-cta-box",children:[i.jsx("h3",{children:"Ready to Apply?"}),i.jsx("p",{children:'Use the contact/application form below. Select "Scholarship" as your program preference and our team will get in touch to guide you through the assessment.'}),i.jsx(_,{to:"/contact",className:"btn btn-accent btn-lg",style:{marginTop:"1.25rem",display:"inline-flex"},children:"Apply Now →"}),i.jsx("div",{style:{marginTop:"1.25rem"},children:i.jsx("a",{href:"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",className:"btn btn-ghost",style:{width:"100%",justifyContent:"center"},children:"💬 Questions? WhatsApp Us"})}),i.jsx("p",{className:"disclaimer",children:"* Salary outcomes are not guaranteed and depend on individual performance, skill level, and market conditions."})]})]})}),i.jsx("style",{children:`
        .scholarship-hero {
          background: radial-gradient(ellipse 90% 80% at 50% -20%, #0d2860 0%, #061330 60%, #04091a 100%);
          padding: 5rem 0 4rem;
          color: #fff;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .scholarship-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.45), transparent);
        }
        .scholarship-hero h1 { color: #fff; margin: 0.75rem 0; max-width: 700px; }
        .sch-sub {
          color: var(--text-secondary);
          font-size: 1.1rem;
          max-width: 620px;
          margin-bottom: 2rem;
          line-height: 1.65;
        }
        .sch-sub strong { color: #fff; }

        .sch-benefits { gap: 1.25rem; }
        .sch-benefit-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          padding: 1.5rem;
          text-align: center;
          transition: transform var(--transition), box-shadow var(--transition), border-color var(--transition);
        }
        .sch-benefit-card:hover { transform: translateY(-4px); border-color: var(--border-strong); box-shadow: 0 10px 30px rgba(0, 180, 216, 0.12); }
        .sch-benefit-icon { font-size: 2.25rem; margin-bottom: 0.75rem; }
        .sch-benefit-card h4 { margin-bottom: 0.4rem; color: #fff; }
        .sch-benefit-card p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55; }

        .sch-process {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .sch-step {
          text-align: center;
          padding: 1.5rem 1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          position: relative;
        }
        .sch-step-num {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          width: 28px; height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #00b4d8, #0077b6);
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 2px 8px rgba(0, 180, 216, 0.4);
        }
        .sch-step-icon { font-size: 2rem; margin-bottom: 0.75rem; }
        .sch-step h4 { font-size: 0.95rem; margin-bottom: 0.4rem; color: #fff; }
        .sch-step p { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; }

        .sch-elig-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }
        .check-list {
          display: flex; flex-direction: column; gap: 0.75rem;
        }
        .check-list li {
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-secondary);
          font-size: 0.95rem;
          line-height: 1.55;
        }
        .check-list li::before {
          content: '✅';
          position: absolute;
          left: 0;
          font-size: 0.85rem;
        }
        .sch-cta-box {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2rem;
        }
        .sch-cta-box h3 { margin-bottom: 0.75rem; }
        .sch-cta-box p { color: var(--text-secondary); line-height: 1.65; }
        .disclaimer {
          font-size: 0.78rem !important;
          color: var(--muted-light) !important;
          font-style: italic;
          margin-top: 1rem !important;
        }

        @media (max-width: 900px) {
          .sch-process { grid-template-columns: repeat(2, 1fr); }
          .sch-elig-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 600px) {
          .sch-process { grid-template-columns: 1fr; }
        }
      `})]})}const fg="http://localhost:4000/api/apply",Un={name:"",phone:"",email:"",program:"",qualification:"",college:"",gradYear:"",parentName:"",parentPhone:"",parentEmail:"",linkedin:"",message:""};function pg(e){const t={};return e.name.trim()||(t.name="Full name is required"),e.phone.trim()||(t.phone="Phone number is required"),e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)||(t.email="Please enter a valid email"):t.email="Email is required",e.program||(t.program="Please select a program"),e.qualification.trim()||(t.qualification="Qualification is required"),e.college.trim()||(t.college="College / institution name is required"),e.gradYear.trim()||(t.gradYear="Graduation year is required"),e.parentName.trim()||(t.parentName="Parent / guardian name is required"),e.parentPhone.trim()||(t.parentPhone="Parent / guardian mobile is required"),e.parentEmail.trim()||(t.parentEmail="Parent / guardian email is required"),t}function Gs(){const[e,t]=v.useState(Un),[r,n]=v.useState(null),[a,o]=v.useState({}),[l,s]=v.useState("idle"),[c,u]=v.useState("osm"),[m,h]=v.useState(!1);function g(){navigator.clipboard&&(navigator.clipboard.writeText("Rent A Desk, 2nd Floor, Serenity Square, Opposite Westin Hotel, Mindspace, HITEC City, Hyderabad, Telangana 500081"),h(!0),setTimeout(()=>h(!1),2e3))}v.useEffect(()=>{document.title="Course Registration — TechFoundry"},[]);function x(b){const{name:y,value:d}=b.target;t(f=>({...f,[y]:d})),a[y]&&o(f=>({...f,[y]:void 0}))}async function w(b){b.preventDefault();const y=pg(e);if(Object.keys(y).length>0){o(y);const S=document.querySelector(".field-error");S&&S.scrollIntoView({behavior:"smooth",block:"center"});return}s("submitting");const f={"ai-engineering":"AI Engineering (12 weeks)","web-development":"Web Development (10 weeks)","software-engineering":"Software Engineering (14 weeks)",scholarship:"Scholarship Program (AI Engineering)"}[e.program]||e.program,p=["🎓 *New Course Registration - TechFoundry*","━━━━━━━━━━━━━━━━━━━━━━━━━━━━",`👤 *Candidate:* ${e.name.trim()}`,`📱 *Mobile / WhatsApp:* ${e.phone.trim()}`,`✉️ *Email:* ${e.email.trim()}`,`🎯 *Selected Program:* ${f}`,`📚 *Highest Qualification:* ${e.qualification.trim()}`,`🏛️ *College / Institute:* ${e.college.trim()}`,`📅 *Graduation Year:* ${e.gradYear.trim()}`,`👨‍👩‍👧 *Parent / Guardian:* ${e.parentName.trim()}`,`📞 *Parent Contact:* ${e.parentPhone.trim()}`,`✉️ *Parent Email:* ${e.parentEmail.trim()}`];e.linkedin&&e.linkedin.trim()&&p.push(`🔗 *LinkedIn:* ${e.linkedin.trim()}`),e.message&&e.message.trim()&&p.push(`💬 *Message:* ${e.message.trim()}`),p.push("━━━━━━━━━━━━━━━━━━━━━━━━━━━━"),p.push("📍 *Submitted via TechFoundry Web Portal*");const j=p.join(`
`),N=`https://wa.me/918309576596?text=${encodeURIComponent(j)}`;try{window.open(N,"_blank")}catch{}n({...e,progTitle:f,waUrl:N});try{(await fetch(fg,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok?(s("success"),t(Un)):s("error")}catch{s("success"),t(Un)}}return l==="success"?i.jsxs("main",{children:[i.jsx("section",{className:"section",children:i.jsx("div",{className:"container success-container",children:i.jsxs("div",{className:"success-card",children:[i.jsx("div",{className:"success-icon",children:"🎉"}),i.jsx("h2",{children:"Registration Submitted!"}),i.jsxs("p",{children:["Thank you ",i.jsx("strong",{children:(r==null?void 0:r.name)||""})," for registering with TechFoundry. Our team will review your registration and reach out to you within ",i.jsx("strong",{children:"24–48 hours"}),"."]}),i.jsxs("div",{className:"wa-notif-box",children:[i.jsxs("div",{className:"wa-notif-header",children:[i.jsx("span",{className:"wa-bubble-icon",children:"💬"}),i.jsxs("div",{children:[i.jsx("strong",{children:"WhatsApp Notification to +91 83095 76596"}),i.jsx("p",{children:"Your registration details have been prepared for instant submission to TechFoundry admissions on WhatsApp."})]})]}),i.jsx("a",{href:(r==null?void 0:r.waUrl)||"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",className:"btn btn-whatsapp-direct",children:"💬 Send / Open on WhatsApp (+91 83095 76596)"})]}),i.jsx("button",{className:"btn btn-primary",style:{marginTop:"1.5rem"},onClick:()=>{s("idle"),t(Un)},children:"Submit Another Registration"})]})})}),i.jsx("style",{children:`
          .success-container { display: flex; justify-content: center; padding: 3rem 0; }
          .success-card { max-width: 540px; text-align: center; background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 3rem 2rem; box-shadow: var(--shadow); }
          .success-icon { font-size: 3.5rem; margin-bottom: 1rem; }
          .success-card h2 { margin-bottom: 1rem; }
          .success-card p { color: var(--text-secondary); line-height: 1.65; }
          .success-card a { color: var(--primary); }
          .wa-notif-box {
            margin: 1.5rem 0 1rem;
            padding: 1.25rem;
            background: rgba(37, 211, 102, 0.08);
            border: 1px solid rgba(37, 211, 102, 0.35);
            border-radius: var(--radius);
            text-align: left;
          }
          .wa-notif-header {
            display: flex;
            align-items: flex-start;
            gap: 0.75rem;
            margin-bottom: 1rem;
          }
          .wa-notif-header strong {
            display: block;
            color: #25d366;
            font-size: 0.95rem;
          }
          .wa-notif-header p {
            color: var(--text-secondary);
            font-size: 0.82rem;
            margin: 0.2rem 0 0;
            line-height: 1.4;
          }
          .wa-bubble-icon {
            font-size: 1.5rem;
            line-height: 1;
            flex-shrink: 0;
          }
          .btn-whatsapp-direct {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            width: 100%;
            background: #25d366;
            color: #04091a !important;
            font-weight: 700;
            font-size: 0.95rem;
            padding: 0.75rem 1.25rem;
            border-radius: var(--radius-sm);
            text-decoration: none;
            transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
            box-shadow: 0 4px 14px rgba(37, 211, 102, 0.35);
          }
          .btn-whatsapp-direct:hover {
            background: #20bd5a;
            transform: translateY(-1px);
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45);
          }
        `})]}):i.jsxs("main",{children:[i.jsx("section",{className:"page-hero",children:i.jsxs("div",{className:"container",children:[i.jsx("span",{className:"section-label",children:"Course Registration"}),i.jsx("h1",{children:"Register for a Course"}),i.jsx("p",{className:"page-hero-sub",children:"Fill in the form below to register for any of our courses — or reach out with questions. We typically respond within 24 hours."})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container contact-grid",children:[i.jsxs("aside",{className:"contact-info",children:[i.jsx("h3",{children:"Get in Touch"}),i.jsxs("div",{className:"contact-item",children:[i.jsx("span",{className:"contact-item-icon",children:"📍"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Address"}),i.jsx("p",{children:"Rent A Desk, 2nd Floor, Serenity Square, Opposite Westin Hotel, Mindspace, HITEC City, Hyderabad, Telangana 500081"})]})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("span",{className:"contact-item-icon",children:"📞"}),i.jsxs("div",{children:[i.jsx("strong",{children:"Phone"}),i.jsx("p",{children:i.jsx("a",{href:"tel:+918309576596",children:"8309576596"})})]})]}),i.jsxs("div",{className:"contact-item",children:[i.jsx("span",{className:"contact-item-icon",children:"💬"}),i.jsxs("div",{children:[i.jsx("strong",{children:"WhatsApp"}),i.jsx("p",{children:i.jsx("a",{href:"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",children:"Chat with us on WhatsApp →"})})]})]}),i.jsxs("div",{className:"office-hours",children:[i.jsx("h4",{children:"Office Hours"}),i.jsx("p",{children:"Mon–Sat: 9:00 AM – 6:00 PM IST"}),i.jsx("p",{children:"Sunday: Closed"})]}),i.jsxs("div",{className:"map-embed-wrapper",children:[i.jsxs("div",{className:"map-embed-header",children:[i.jsxs("div",{className:"map-tab-group",children:[i.jsx("button",{type:"button",className:`map-tab-btn ${c==="osm"?"active":""}`,onClick:()=>u("osm"),children:"🗺️ Map View"}),i.jsx("button",{type:"button",className:`map-tab-btn ${c==="google"?"active":""}`,onClick:()=>u("google"),children:"Google Map"})]}),i.jsx("button",{type:"button",className:"map-copy-btn",onClick:g,title:"Copy full address",children:m?"✓ Copied":"📋 Copy Address"})]}),i.jsx("div",{className:"map-frame-container",children:c==="osm"?i.jsx("iframe",{title:"TechFoundry location map - OpenStreetMap",src:"https://www.openstreetmap.org/export/embed.html?bbox=78.3730%2C17.4410%2C78.3870%2C17.4495&layer=mapnik&marker=17.4452%2C78.3800",width:"100%",height:"240",style:{border:0,display:"block",width:"100%"},loading:"lazy"}):i.jsx("iframe",{title:"TechFoundry location map - Google Maps",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.284705030438!2d78.37989397516597!3d17.445214883451566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e4334360e9%3A0x6b44783321526487!2sThe%20Westin%20Hyderabad%20Mindspace!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin",width:"100%",height:"240",style:{border:0,display:"block",width:"100%"},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})}),i.jsxs("div",{className:"map-action-bar",children:[i.jsx("a",{href:"https://www.google.com/maps/search/?api=1&query=Rent+A+Desk+Serenity+Square+Mindspace+HITEC+City+Hyderabad",target:"_blank",rel:"noopener noreferrer",className:"map-nav-btn",children:"📍 Open Google Maps ↗"}),i.jsx("a",{href:"https://www.google.com/maps/dir/?api=1&destination=Rent+A+Desk+Serenity+Square+Mindspace+HITEC+City+Hyderabad",target:"_blank",rel:"noopener noreferrer",className:"map-nav-btn secondary",children:"🧭 Get Directions ↗"})]})]})]}),i.jsxs("div",{className:"form-wrap",children:[i.jsx("h3",{children:"Course Registration Form"}),i.jsxs("p",{style:{color:"var(--muted)",marginBottom:"1.5rem",fontSize:"0.9rem"},children:["Fields marked with ",i.jsx("span",{style:{color:"var(--error)"},children:"*"})," are required."]}),i.jsxs("form",{onSubmit:w,className:"apply-form","aria-label":"Program application form",noValidate:!0,children:[i.jsx("div",{className:"form-section-label",children:"Program Selection"}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"program",children:["Program of Interest ",i.jsx("span",{className:"req",children:"*"})]}),i.jsxs("select",{id:"program",name:"program",value:e.program,onChange:x,className:a.program?"has-error":"",children:[i.jsx("option",{value:"",children:"— Select a program —"}),i.jsx("option",{value:"ai-engineering",children:"AI Engineering (12 weeks)"}),i.jsx("option",{value:"web-development",children:"Web Development (10 weeks)"}),i.jsx("option",{value:"software-engineering",children:"Software Engineering (14 weeks)"}),i.jsx("option",{value:"scholarship",children:"Scholarship Program (AI Engineering)"})]}),a.program&&i.jsx("span",{className:"field-error",children:a.program})]}),i.jsx("div",{className:"form-section-label",children:"Personal Details"}),i.jsxs("div",{className:"field-row",children:[i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"name",children:["Full Name ",i.jsx("span",{className:"req",children:"*"})]}),i.jsx("input",{id:"name",name:"name",value:e.name,onChange:x,placeholder:"Your full name",className:a.name?"has-error":""}),a.name&&i.jsx("span",{className:"field-error",children:a.name})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"phone",children:["Phone Number ",i.jsx("span",{className:"req",children:"*"})]}),i.jsx("input",{id:"phone",name:"phone",value:e.phone,onChange:x,placeholder:"+91 98765 43210",className:a.phone?"has-error":""}),a.phone&&i.jsx("span",{className:"field-error",children:a.phone})]})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"email",children:["Email Address ",i.jsx("span",{className:"req",children:"*"})]}),i.jsx("input",{id:"email",type:"email",name:"email",value:e.email,onChange:x,placeholder:"you@example.com",className:a.email?"has-error":""}),a.email&&i.jsx("span",{className:"field-error",children:a.email})]}),i.jsx("div",{className:"form-section-label",children:"Academic Details"}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"qualification",children:["Highest Qualification ",i.jsx("span",{className:"req",children:"*"})]}),i.jsx("input",{id:"qualification",name:"qualification",value:e.qualification,onChange:x,placeholder:"e.g. B.Tech Computer Science",className:a.qualification?"has-error":""}),a.qualification&&i.jsx("span",{className:"field-error",children:a.qualification})]}),i.jsxs("div",{className:"field-row",children:[i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"college",children:["College / Institution ",i.jsx("span",{className:"req",children:"*"})]}),i.jsx("input",{id:"college",name:"college",value:e.college,onChange:x,placeholder:"College or university name",className:a.college?"has-error":""}),a.college&&i.jsx("span",{className:"field-error",children:a.college})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"gradYear",children:["Graduation Year ",i.jsx("span",{className:"req",children:"*"})]}),i.jsx("input",{id:"gradYear",name:"gradYear",value:e.gradYear,onChange:x,placeholder:"e.g. 2024",className:a.gradYear?"has-error":""}),a.gradYear&&i.jsx("span",{className:"field-error",children:a.gradYear})]})]}),i.jsx("div",{className:"form-section-label",children:"Parent / Guardian Details"}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"parentName",children:["Parent / Guardian Name ",i.jsx("span",{className:"req",children:"*"})]}),i.jsx("input",{id:"parentName",name:"parentName",value:e.parentName,onChange:x,placeholder:"Full name",className:a.parentName?"has-error":""}),a.parentName&&i.jsx("span",{className:"field-error",children:a.parentName})]}),i.jsxs("div",{className:"field-row",children:[i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"parentPhone",children:["Parent / Guardian Mobile ",i.jsx("span",{className:"req",children:"*"})]}),i.jsx("input",{id:"parentPhone",name:"parentPhone",value:e.parentPhone,onChange:x,placeholder:"+91 98765 43210",className:a.parentPhone?"has-error":""}),a.parentPhone&&i.jsx("span",{className:"field-error",children:a.parentPhone})]}),i.jsxs("div",{className:"field",children:[i.jsxs("label",{htmlFor:"parentEmail",children:["Parent / Guardian Email ",i.jsx("span",{className:"req",children:"*"})]}),i.jsx("input",{id:"parentEmail",type:"email",name:"parentEmail",value:e.parentEmail,onChange:x,placeholder:"parent@email.com",className:a.parentEmail?"has-error":""}),a.parentEmail&&i.jsx("span",{className:"field-error",children:a.parentEmail})]})]}),i.jsx("div",{className:"form-section-label",children:"Additional (Optional)"}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"linkedin",children:"LinkedIn Profile URL"}),i.jsx("input",{id:"linkedin",name:"linkedin",value:e.linkedin,onChange:x,placeholder:"https://linkedin.com/in/yourname"})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{htmlFor:"message",children:"Message / Any Questions"}),i.jsx("textarea",{id:"message",name:"message",value:e.message,onChange:x,placeholder:"Anything you'd like us to know...",rows:4})]}),i.jsxs("div",{className:"field",children:[i.jsx("label",{children:"Attach Resume (optional)"}),i.jsx("input",{type:"file",name:"resume",accept:".pdf,.doc,.docx"})]}),l==="error"&&i.jsx("div",{className:"form-error-banner",children:"Something went wrong. Please try again or reach out on WhatsApp."}),i.jsx("button",{type:"submit",className:"btn btn-primary btn-lg",disabled:l==="submitting",style:{width:"100%",justifyContent:"center"},children:l==="submitting"?"Submitting…":"Complete Registration →"}),i.jsx("p",{className:"form-disclaimer",children:"By submitting, you agree to be contacted by TechFoundry regarding your registration. We do not share your information with third parties."})]})]})]})}),i.jsx("style",{children:`
        .page-hero {
          background: radial-gradient(ellipse 90% 80% at 50% -20%, #0d2860 0%, #061330 60%, #04091a 100%);
          padding: 4.5rem 0 3.5rem;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .page-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.45), transparent);
        }
        .page-hero h1 { margin: 0.5rem 0; color: #fff; }
        .page-hero-sub { font-size: 1.1rem; color: var(--text-secondary); max-width: 640px; margin-top: 0.5rem; }

        .contact-grid {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 3rem;
          align-items: start;
        }
        .contact-info h3 { margin-bottom: 1.5rem; color: #fff; }
        .contact-item {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 1.25rem;
        }
        .contact-item-icon { font-size: 1.25rem; flex-shrink: 0; margin-top: 2px; }
        .contact-item strong { display: block; font-size: 0.85rem; margin-bottom: 0.2rem; color: #fff; }
        .contact-item p, .contact-item a { font-size: 0.9rem; color: var(--text-secondary); }
        .contact-item a { color: #00d2ff; }
        .office-hours {
          margin-top: 1.5rem;
          padding: 1rem;
          background: var(--surface);
          border-radius: var(--radius);
          border: 1px solid var(--border);
        }
        .office-hours h4 { margin-bottom: 0.5rem; font-size: 0.9rem; color: #fff; }
        .office-hours p { font-size: 0.85rem; color: var(--muted); margin-bottom: 0.2rem; }

        .form-wrap {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          box-shadow: var(--shadow);
        }
        .form-wrap h3 { margin-bottom: 0.4rem; color: #fff; }
        .apply-form { display: flex; flex-direction: column; gap: 1rem; }
        .form-section-label {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #00d2ff;
          padding: 0.5rem 0 0.25rem;
          border-bottom: 1px solid rgba(0, 180, 216, 0.25);
          margin-top: 0.5rem;
        }
        .field { display: flex; flex-direction: column; gap: 0.3rem; }
        .field label { font-size: 0.875rem; font-weight: 500; color: var(--text-secondary); }
        .req { color: var(--error); }
        .field input, .field select, .field textarea {
          padding: 0.625rem 0.875rem;
          border: 1.5px solid var(--border);
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          font-family: inherit;
          color: #ffffff;
          background: var(--surface-2);
          outline: none;
          transition: border-color var(--transition), box-shadow var(--transition);
        }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: #00d2ff;
          box-shadow: 0 0 0 3px rgba(0, 180, 216, 0.2);
        }
        .field input.has-error, .field select.has-error { border-color: var(--error); }
        .field textarea { resize: vertical; }
        .field-error { font-size: 0.8rem; color: #fca5a5; font-weight: 500; }
        .field-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        .form-error-banner {
          background: rgba(239, 68, 68, 0.15);
          border: 1px solid rgba(239, 68, 68, 0.4);
          color: #fca5a5;
          border-radius: var(--radius-sm);
          padding: 0.75rem 1rem;
          font-size: 0.875rem;
        }
        .form-disclaimer {
          font-size: 0.78rem;
          color: var(--muted);
          text-align: center;
          line-height: 1.55;
        }
        /* Map Embed Component */
        .map-embed-wrapper {
          margin-top: 1.25rem;
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: var(--radius);
          background: var(--surface-2);
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
        }
        .map-embed-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.5rem 0.75rem;
          background: rgba(15, 23, 42, 0.9);
          border-bottom: 1px solid rgba(56, 189, 248, 0.15);
        }
        .map-tab-group {
          display: flex;
          gap: 0.35rem;
        }
        .map-tab-btn {
          background: transparent;
          border: 1px solid transparent;
          color: var(--muted);
          font-size: 0.75rem;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.2s ease;
        }
        .map-tab-btn:hover {
          color: #fff;
        }
        .map-tab-btn.active {
          background: rgba(56, 189, 248, 0.15);
          border-color: rgba(56, 189, 248, 0.4);
          color: #38bdf8;
        }
        .map-copy-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          font-size: 0.72rem;
          padding: 0.25rem 0.55rem;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .map-copy-btn:hover {
          background: rgba(56, 189, 248, 0.2);
          color: #38bdf8;
        }
        .map-frame-container {
          position: relative;
          background: #0f172a;
          min-height: 240px;
        }
        .map-action-bar {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          padding: 0.65rem 0.75rem;
          background: rgba(15, 23, 42, 0.95);
          border-top: 1px solid rgba(56, 189, 248, 0.15);
        }
        .map-nav-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 0.76rem;
          font-weight: 600;
          padding: 0.45rem 0.6rem;
          border-radius: 6px;
          text-decoration: none;
          text-align: center;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.08);
          border: 1px solid rgba(56, 189, 248, 0.25);
          transition: all 0.2s ease;
        }
        .map-nav-btn:hover {
          background: rgba(56, 189, 248, 0.18);
          border-color: #38bdf8;
        }
        .map-nav-btn.secondary {
          color: #94a3b8;
          border-color: rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.04);
        }
        .map-nav-btn.secondary:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }

        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr; }
          .contact-info { order: 2; }
        }
        @media (max-width: 600px) {
          .field-row { grid-template-columns: 1fr; }
        }
      `})]})}const Ei=[{id:"ai-engineering",title:"AI Engineering Program",duration:"16 Weeks • Full-Time Immersive",icon:"🤖"},{id:"web-development",title:"Full-Stack Web Development",duration:"14 Weeks • Hands-on Project Driven",icon:"🌐"},{id:"software-engineering",title:"Software Systems Engineering",duration:"12 Weeks • Production Systems",icon:"⚙️"}];function Ks(){const[e]=Oh(),t=e.get("program")||"ai-engineering",[r,n]=v.useState(t),[a,o]=v.useState(""),[l,s]=v.useState(""),[c,u]=v.useState(""),[m,h]=v.useState(""),[g,x]=v.useState(""),[w,b]=v.useState({}),[y,d]=v.useState(!1),[f,p]=v.useState(null),[j,N]=v.useState(!1);v.useEffect(()=>{document.title="Pay Fee Online - TechFoundry",window.scrollTo(0,0)},[]);const S=Ei.find(E=>E.id===r)||Ei[0],C=()=>{const E={};return r||(E.program="Please select a program"),a.trim()||(E.name="Full Name is required"),l.trim()?/^[0-9]{10}$/.test(l.trim().replace(/\D/g,""))||(E.number="Enter a valid 10-digit mobile number"):E.number="Mobile number is required",c&&!/^\S+@\S+\.\S+$/.test(c.trim())&&(E.email="Enter a valid email address"),g.trim()?g.trim().length<6&&(E.transactionId="Enter a valid UPI Reference / UTR Number"):E.transactionId="UPI Transaction ID / UTR is compulsory after scanning QR",b(E),Object.keys(E).length===0},T=async E=>{if(E.preventDefault(),!C())return;d(!0);const O={receiptNo:"TF-"+Math.floor(1e5+Math.random()*9e5),date:new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),name:a.trim(),number:l.trim(),email:c.trim()||"Not Provided",programTitle:S.title,referredBy:m.trim()||"None",paymentMethod:"UPI QR Code Scanner (PhonePe)",payeeName:"TechFoundry",transactionId:g.trim().toUpperCase(),status:"Submitted & Under Verification"},Je=["💳 *New Fee Payment Submission - TechFoundry*","━━━━━━━━━━━━━━━━━━━━━━━━━━━━",`🧾 *Receipt No:* ${O.receiptNo}`,`👤 *Candidate:* ${O.name}`,`📱 *Mobile / WhatsApp:* ${O.number}`,`✉️ *Email:* ${O.email}`,`🎓 *Enrolled Program:* ${O.programTitle}`,`💳 *Payment Method:* ${O.paymentMethod}`,`🏷️ *Transaction ID / UTR:* ${O.transactionId}`,`🏢 *Merchant / Payee:* ${O.payeeName}`,`🤝 *Referred By:* ${O.referredBy}`,`📅 *Date & Time:* ${O.date}`,"━━━━━━━━━━━━━━━━━━━━━━━━━━━━","Please verify my payment and confirm batch enrollment."].join(`
`),Ae=`https://wa.me/918309576596?text=${encodeURIComponent(Je)}`;O.waUrl=Ae;try{window.open(Ae,"_blank")}catch{}try{await fetch("/api/pay-fee",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}).catch(()=>{})}catch{}setTimeout(()=>{d(!1),p(O),window.scrollTo({top:150,behavior:"smooth"})},700)},A=()=>{window.print()};return i.jsxs("main",{className:"pay-fee-page",children:[i.jsx("section",{className:"pay-hero",children:i.jsxs("div",{className:"container",children:[i.jsx("div",{className:"pay-hero-badge",children:"💳 Official Fee Payment Portal"}),i.jsx("h1",{className:"pay-hero-title",children:"TechFoundry Fee Payment"}),i.jsx("p",{className:"pay-hero-desc",children:"Complete your admission and secure your batch enrollment. Scan the official PhonePe UPI QR Code and enter your Transaction ID below."})]})}),i.jsx("section",{className:"pay-content-section",children:i.jsx("div",{className:"container",children:f?i.jsxs("div",{className:"receipt-wrapper reveal-in",children:[i.jsxs("div",{className:"receipt-card",id:"printable-receipt",children:[i.jsxs("div",{className:"receipt-header",children:[i.jsxs("div",{className:"receipt-logo",children:[i.jsx("img",{src:"/assets/logo-transparent.png",alt:"TechFoundry",className:"receipt-logo-img"}),i.jsxs("div",{children:[i.jsx("h2",{className:"receipt-org",children:"TechFoundry"}),i.jsx("p",{className:"receipt-sub",children:"Forging Future Tech Talent"})]})]}),i.jsxs("div",{className:"receipt-tag",children:[i.jsx("span",{className:"receipt-status-badge",children:"✓ PAYMENT RECORDED"}),i.jsxs("span",{className:"receipt-number",children:["Receipt #",f.receiptNo]})]})]}),i.jsx("div",{className:"receipt-divider"}),i.jsxs("div",{className:"receipt-grid",children:[i.jsxs("div",{className:"receipt-item",children:[i.jsx("span",{className:"label",children:"Candidate Name:"}),i.jsx("strong",{className:"value",children:f.name})]}),i.jsxs("div",{className:"receipt-item",children:[i.jsx("span",{className:"label",children:"Mobile Number:"}),i.jsx("span",{className:"value",children:f.number})]}),i.jsxs("div",{className:"receipt-item",children:[i.jsx("span",{className:"label",children:"Enrolled Program:"}),i.jsx("strong",{className:"value text-cyan",children:f.programTitle})]}),i.jsxs("div",{className:"receipt-item",children:[i.jsx("span",{className:"label",children:"Payment Mode:"}),i.jsx("span",{className:"value",children:f.paymentMethod})]}),i.jsxs("div",{className:"receipt-item",children:[i.jsx("span",{className:"label",children:"Transaction Reference / UTR:"}),i.jsx("strong",{className:"value font-mono",children:f.transactionId})]}),i.jsxs("div",{className:"receipt-item",children:[i.jsx("span",{className:"label",children:"Beneficiary / Payee:"}),i.jsx("span",{className:"value",children:f.payeeName})]}),i.jsxs("div",{className:"receipt-item",children:[i.jsx("span",{className:"label",children:"Date & Timestamp:"}),i.jsx("span",{className:"value",children:f.date})]}),i.jsxs("div",{className:"receipt-item",children:[i.jsx("span",{className:"label",children:"Referred By:"}),i.jsx("span",{className:"value",children:f.referredBy})]})]}),i.jsx("div",{className:"receipt-status-box",children:i.jsxs("div",{className:"status-indicator",children:[i.jsx("span",{className:"status-dot",children:"●"}),i.jsxs("div",{children:[i.jsxs("strong",{children:["Status: ",f.status]}),i.jsx("p",{children:"Your enrollment details and transaction reference have been recorded in the admissions ledger."})]})]})}),i.jsxs("div",{className:"receipt-footer-notes",children:[i.jsxs("p",{children:["📍 ",i.jsx("strong",{children:"Official Address:"})," Rent A Desk, 2nd Floor, Serenity Square, Opposite Westin Hotel, Mindspace, HITEC City, Hyderabad, Telangana 500081"]}),i.jsxs("p",{children:["✉️ ",i.jsx("strong",{children:"Accounts Support:"})," support@techfoundry.info | 📞 +91 83095 76596"]}),i.jsx("p",{className:"receipt-legal",children:"This is a system-generated official payment acknowledgement receipt issued by TechFoundry."})]})]}),i.jsxs("div",{className:"receipt-actions",children:[i.jsx("button",{onClick:A,className:"btn btn-primary",children:"🖨️ Print / Download Receipt"}),i.jsx("a",{href:f.waUrl||`https://wa.me/918309576596?text=${encodeURIComponent(`Hi TechFoundry, I have submitted fee payment for ${f.programTitle}. Transaction ID: ${f.transactionId}. Receipt #${f.receiptNo}`)}`,target:"_blank",rel:"noreferrer",className:"btn btn-whatsapp",children:"💬 Send Notification on WhatsApp (+91 83095 76596)"}),i.jsx("button",{onClick:()=>p(null),className:"btn btn-outline",children:"Make Another Payment"})]})]}):i.jsxs("form",{onSubmit:T,className:"pay-layout-grid",noValidate:!0,children:[i.jsxs("div",{className:"pay-form-column",children:[i.jsxs("div",{className:"pay-step-card",children:[i.jsxs("div",{className:"pay-step-header",children:[i.jsx("span",{className:"pay-step-num",children:"1"}),i.jsxs("div",{children:[i.jsx("h2",{className:"pay-step-title",children:"Candidate Details"}),i.jsx("p",{className:"pay-step-subtitle",children:"Select your program and enter your contact details"})]})]}),i.jsxs("div",{className:"form-fields-grid",children:[i.jsxs("div",{className:"form-field full-width",children:[i.jsxs("label",{className:"field-label",children:["Select Program ",i.jsx("span",{className:"req",children:"*"})]}),i.jsxs("div",{className:"select-wrapper",children:[i.jsxs("select",{className:`form-input form-select${w.program?" input-err":""}`,value:r,onChange:E=>n(E.target.value),children:[i.jsx("option",{value:"",disabled:!0,children:"-- Choose a Program --"}),Ei.map(E=>i.jsxs("option",{value:E.id,children:[E.icon," ",E.title," (",E.duration,")"]},E.id))]}),i.jsx("span",{className:"select-arrow",children:"▼"})]}),w.program&&i.jsx("span",{className:"err-msg",children:w.program})]}),i.jsxs("div",{className:"form-field",children:[i.jsxs("label",{className:"field-label",children:["Full Name ",i.jsx("span",{className:"req",children:"*"})]}),i.jsx("input",{type:"text",placeholder:"e.g. Rahul Sharma",className:`form-input${w.name?" input-err":""}`,value:a,onChange:E=>o(E.target.value)}),w.name&&i.jsx("span",{className:"err-msg",children:w.name})]}),i.jsxs("div",{className:"form-field",children:[i.jsxs("label",{className:"field-label",children:["Mobile Number / WhatsApp ",i.jsx("span",{className:"req",children:"*"})]}),i.jsxs("div",{className:"input-with-prefix",children:[i.jsx("span",{className:"input-prefix",children:"+91"}),i.jsx("input",{type:"tel",maxLength:"10",placeholder:"98765 43210",className:`form-input prefixed${w.number?" input-err":""}`,value:l,onChange:E=>s(E.target.value.replace(/\D/g,""))})]}),w.number&&i.jsx("span",{className:"err-msg",children:w.number})]}),i.jsxs("div",{className:"form-field",children:[i.jsx("label",{className:"field-label",children:"Email Address (Optional)"}),i.jsx("input",{type:"email",placeholder:"rahul.sharma@example.com",className:`form-input${w.email?" input-err":""}`,value:c,onChange:E=>u(E.target.value)}),w.email&&i.jsx("span",{className:"err-msg",children:w.email})]}),i.jsxs("div",{className:"form-field",children:[i.jsxs("div",{className:"field-label-row",children:[i.jsx("label",{className:"field-label",children:"Referred By"}),i.jsx("span",{className:"badge-optional",children:"Optional"})]}),i.jsx("input",{type:"text",placeholder:"Friend, Mentor, College, or Code",className:"form-input",value:m,onChange:E=>h(E.target.value)})]})]})]}),i.jsxs("div",{className:"pay-step-card",children:[i.jsxs("div",{className:"pay-step-header",children:[i.jsx("span",{className:"pay-step-num",children:"2"}),i.jsxs("div",{children:[i.jsx("h2",{className:"pay-step-title",children:"UPI Payment Confirmation"}),i.jsx("p",{className:"pay-step-subtitle",children:"Scan the QR scanner on the right and enter the Transaction Reference"})]})]}),i.jsxs("div",{className:"qr-instructions-banner",children:[i.jsx("span",{className:"icon",children:"ℹ️"}),i.jsxs("span",{children:["Scan the official PhonePe QR code with any UPI app (PhonePe, Google Pay, Paytm, etc.). After payment, enter your ",i.jsx("strong",{children:"Transaction ID / 12-Digit UTR"})," below to confirm."]})]}),i.jsxs("div",{className:"transaction-id-section",children:[i.jsxs("div",{className:"field-label-row",children:[i.jsxs("label",{className:"field-label",children:["UPI Transaction ID / 12-Digit UTR ",i.jsx("span",{className:"req",children:"* Compulsory"})]}),i.jsx("button",{type:"button",className:"utr-help-link",onClick:()=>N(E=>!E),children:"❓ Where to find UTR?"})]}),i.jsxs("div",{className:"utr-input-wrapper",children:[i.jsx("input",{type:"text",placeholder:"e.g. 426189034512 or T240919123456",className:`form-input utr-input${w.transactionId?" input-err":""}`,value:g,onChange:E=>x(E.target.value)}),i.jsx("span",{className:"utr-tag",children:"Compulsory from UPI"})]}),w.transactionId&&i.jsx("span",{className:"err-msg",children:w.transactionId}),j&&i.jsxs("div",{className:"utr-help-card",children:[i.jsx("strong",{children:"Where is my UPI Transaction ID?"}),i.jsxs("ul",{children:[i.jsxs("li",{children:[i.jsx("strong",{children:"PhonePe:"})," Open the payment receipt → copy the 12-digit ",i.jsx("em",{children:"UTR / Transaction ID"})," (e.g., `T2409...` or `4261...`)."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Google Pay:"})," Tap the transaction → find the 12-digit ",i.jsx("em",{children:"UPI Transaction ID"}),"."]}),i.jsxs("li",{children:[i.jsx("strong",{children:"Paytm:"})," In payment details, look for ",i.jsx("em",{children:"UPI Ref No. / UTR"}),"."]})]})]})]}),i.jsx("div",{className:"submit-btn-wrap",children:i.jsx("button",{type:"submit",disabled:y,className:"btn btn-primary btn-submit-pay",children:y?"Verifying...":"Submit & Confirm Payment"})})]})]}),i.jsxs("div",{className:"pay-summary-column",children:[i.jsxs("div",{className:"qr-scanner-card",children:[i.jsxs("div",{className:"qr-card-header",children:[i.jsx("span",{className:"badge badge-success",children:"Official Scanner"}),i.jsx("h3",{className:"qr-card-title",children:"PhonePe UPI Scanner"}),i.jsx("p",{className:"qr-card-sub",children:"Scan using any UPI App"})]}),i.jsx("div",{className:"qr-image-frame",children:i.jsx("img",{src:"/assets/techfoundry-qr-scanner.png",alt:"TechFoundry Official Payment Scanner",className:"qr-scanner-img"})}),i.jsxs("div",{className:"qr-beneficiary-info",children:[i.jsxs("div",{className:"beneficiary-row",children:[i.jsx("span",{className:"b-label",children:"Merchant / Institute:"}),i.jsx("strong",{className:"b-val",children:"TechFoundry"})]}),i.jsxs("div",{className:"beneficiary-row",children:[i.jsx("span",{className:"b-label",children:"Payment Purpose:"}),i.jsx("span",{className:"b-val text-cyan",children:"Course Admission Fee"})]})]}),i.jsxs("div",{className:"qr-apps-supported",children:[i.jsx("span",{children:"Accepted via:"}),i.jsxs("div",{className:"upi-app-badges",children:[i.jsx("span",{className:"upi-badge",children:"PhonePe"}),i.jsx("span",{className:"upi-badge",children:"Google Pay"}),i.jsx("span",{className:"upi-badge",children:"Paytm"}),i.jsx("span",{className:"upi-badge",children:"BHIM UPI"})]})]})]}),i.jsxs("div",{className:"fee-summary-card",children:[i.jsx("h4",{className:"summary-title",children:"Selected Program"}),i.jsxs("div",{className:"summary-line",children:[i.jsx("span",{children:"Program:"}),i.jsx("strong",{children:S.title})]}),i.jsxs("div",{className:"summary-line",children:[i.jsx("span",{children:"Duration:"}),i.jsx("span",{children:S.duration.split("•")[0]})]}),i.jsxs("div",{className:"summary-line",children:[i.jsx("span",{children:"Format:"}),i.jsx("span",{className:"text-cyan",children:"Full-Time Immersive"})]}),i.jsx("div",{className:"summary-divider"}),i.jsx("div",{className:"summary-note-line",children:i.jsx("span",{children:"📌 Scan the PhonePe QR code above with any UPI app, then submit your Transaction ID to complete enrollment."})})]})]})]})})}),i.jsx("style",{children:`
        .pay-fee-page {
          background: var(--bg);
          color: var(--text);
          min-height: 100vh;
          padding-bottom: 5rem;
        }
        .pay-hero {
          background: linear-gradient(180deg, rgba(2, 16, 39, 0.95) 0%, rgba(4, 18, 44, 0.75) 100%);
          border-bottom: 1px solid var(--border);
          padding: 3.5rem 0 2.5rem;
          text-align: center;
        }
        .pay-hero-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 20px;
          padding: 0.3rem 0.9rem;
          margin-bottom: 1rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .pay-hero-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.75rem;
          letter-spacing: -0.02em;
        }
        .pay-hero-desc {
          max-width: 650px;
          margin: 0 auto;
          font-size: 1rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .pay-content-section {
          padding: 2.5rem 0;
        }
        .pay-layout-grid {
          display: grid;
          grid-template-columns: 1.45fr 1fr;
          gap: 2rem;
          align-items: start;
        }
        @media (max-width: 992px) {
          .pay-layout-grid { grid-template-columns: 1fr; }
        }

        /* Step Card */
        .pay-step-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem;
          margin-bottom: 1.75rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .pay-step-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border);
        }
        .pay-step-num {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0284c7, #00b4d8);
          color: #fff;
          font-weight: 800;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 10px rgba(2, 132, 199, 0.4);
          flex-shrink: 0;
        }
        .pay-step-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 0.15rem;
        }
        .pay-step-subtitle {
          font-size: 0.85rem;
          color: var(--muted);
        }

        /* Form Fields */
        .form-fields-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }
        @media (max-width: 640px) {
          .form-fields-grid { grid-template-columns: 1fr; }
        }
        .form-field.full-width {
          grid-column: 1 / -1;
        }
        .field-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #e2e8f0;
          margin-bottom: 0.4rem;
        }
        .field-label .req {
          color: #f43f5e;
        }
        .field-label-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 0.4rem;
        }
        .badge-optional {
          font-size: 0.72rem;
          color: var(--muted);
          background: rgba(255, 255, 255, 0.06);
          padding: 0.15rem 0.45rem;
          border-radius: 4px;
        }
        .form-input {
          width: 100%;
          background: rgba(4, 15, 38, 0.9);
          border: 1px solid var(--border);
          border-radius: 8px;
          padding: 0.75rem 1rem;
          font-size: 0.92rem;
          color: #ffffff;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
          box-sizing: border-box;
        }
        .form-input:focus {
          border-color: #00d2ff;
          box-shadow: 0 0 0 3px rgba(0, 210, 255, 0.18);
        }
        .form-input.input-err {
          border-color: #f43f5e;
          box-shadow: 0 0 0 2px rgba(244, 63, 94, 0.2);
        }
        
        /* Select styling */
        .select-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .form-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 600;
          color: #38bdf8;
          padding-right: 2.5rem;
        }
        .form-select option {
          background: #07132b;
          color: #ffffff;
          padding: 0.5rem;
        }
        .select-arrow {
          position: absolute;
          right: 14px;
          color: #38bdf8;
          font-size: 0.75rem;
          pointer-events: none;
        }

        .input-with-prefix {
          display: flex;
          align-items: center;
        }
        .input-prefix {
          background: rgba(15, 32, 67, 0.9);
          border: 1px solid var(--border);
          border-right: none;
          padding: 0.75rem 0.85rem;
          color: #38bdf8;
          font-weight: 600;
          font-size: 0.92rem;
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
        .form-input.prefixed {
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
        }
        .err-msg {
          display: block;
          font-size: 0.78rem;
          color: #fb7185;
          margin-top: 0.35rem;
        }

        /* QR Instructions & UTR */
        .qr-instructions-banner {
          background: rgba(2, 132, 199, 0.12);
          border: 1px solid rgba(56, 189, 248, 0.25);
          border-radius: 8px;
          padding: 0.85rem 1rem;
          display: flex;
          gap: 0.65rem;
          font-size: 0.84rem;
          color: #e0f2fe;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }
        .transaction-id-section {
          background: rgba(4, 15, 38, 0.75);
          border: 1px solid rgba(56, 189, 248, 0.3);
          border-radius: 12px;
          padding: 1.25rem;
          margin-bottom: 1.5rem;
        }
        .utr-help-link {
          background: none;
          border: none;
          color: #38bdf8;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          text-decoration: underline;
        }
        .utr-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .utr-input {
          font-family: monospace;
          font-size: 1.05rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .utr-tag {
          position: absolute;
          right: 12px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #f43f5e;
          background: rgba(244, 63, 94, 0.12);
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
        }
        .utr-help-card {
          margin-top: 0.85rem;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(56, 189, 248, 0.2);
          border-radius: 8px;
          padding: 0.85rem 1rem;
          font-size: 0.8rem;
          color: #cbd5e1;
        }
        .utr-help-card ul {
          margin: 0.4rem 0 0 1.2rem;
          padding: 0;
        }
        .utr-help-card li {
          margin-bottom: 0.35rem;
        }

        .submit-btn-wrap {
          display: flex;
          justify-content: flex-start;
          margin-top: 0.5rem;
        }

        .btn-submit-pay {
          width: auto;
          min-width: 190px;
          padding: 0.55rem 1.25rem;
          font-size: 0.88rem;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        @media (max-width: 640px) {
          .btn-submit-pay {
            width: 100%;
          }
        }

        /* Right Column: QR Scanner Card */
        .qr-scanner-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.75rem;
          box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
          text-align: center;
          margin-bottom: 1.5rem;
        }
        .qr-card-header {
          margin-bottom: 1.25rem;
        }
        .qr-card-title {
          font-size: 1.3rem;
          color: #ffffff;
          margin-top: 0.5rem;
          margin-bottom: 0.15rem;
        }
        .qr-card-sub {
          font-size: 0.82rem;
          color: var(--muted);
          margin: 0;
        }
        .qr-image-frame {
          background: #ffffff;
          border-radius: 14px;
          padding: 1.25rem;
          display: inline-block;
          margin: 0 auto 1.25rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
          max-width: 260px;
        }
        .qr-scanner-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 6px;
        }
        .qr-beneficiary-info {
          background: rgba(6, 18, 42, 0.8);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.85rem 1rem;
          margin-bottom: 1rem;
          text-align: left;
        }
        .beneficiary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.82rem;
          padding: 0.35rem 0;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
        }
        .beneficiary-row:last-child {
          border-bottom: none;
        }
        .b-label { color: var(--muted); }
        .b-val { color: #ffffff; }
        .qr-apps-supported {
          font-size: 0.78rem;
          color: var(--muted);
        }
        .upi-app-badges {
          display: flex;
          justify-content: center;
          gap: 0.4rem;
          margin-top: 0.4rem;
          flex-wrap: wrap;
        }
        .upi-badge {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          padding: 0.15rem 0.5rem;
          font-size: 0.72rem;
          color: #cbd5e1;
        }

        /* Summary Card */
        .fee-summary-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
        }
        .summary-title {
          font-size: 1.1rem;
          color: #fff;
          margin-bottom: 1rem;
        }
        .summary-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.86rem;
          color: var(--text-secondary);
          margin-bottom: 0.65rem;
        }
        .summary-line strong { color: #fff; }
        .summary-divider {
          height: 1px;
          background: var(--border);
          margin: 1rem 0;
        }
        .summary-note-line {
          font-size: 0.82rem;
          color: #38bdf8;
          line-height: 1.5;
        }

        /* Success Receipt */
        .receipt-wrapper {
          max-width: 720px;
          margin: 0 auto;
        }
        .receipt-card {
          background: #ffffff;
          color: #0f172a;
          border-radius: 16px;
          padding: 2.5rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        .receipt-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .receipt-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .receipt-logo-img {
          height: 48px;
          width: auto;
        }
        .receipt-org {
          font-size: 1.4rem;
          font-weight: 800;
          color: #07132b;
          margin: 0;
        }
        .receipt-sub {
          font-size: 0.78rem;
          color: #64748b;
          margin: 0;
        }
        .receipt-tag {
          text-align: right;
        }
        .receipt-status-badge {
          display: inline-block;
          background: #dcfce7;
          color: #15803d;
          font-weight: 800;
          font-size: 0.75rem;
          padding: 0.25rem 0.65rem;
          border-radius: 4px;
          letter-spacing: 0.04em;
        }
        .receipt-number {
          display: block;
          font-size: 0.8rem;
          color: #64748b;
          margin-top: 0.3rem;
          font-family: monospace;
        }
        .receipt-divider {
          height: 2px;
          background: #e2e8f0;
          margin: 1.5rem 0;
        }
        .receipt-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem 1.5rem;
          margin-bottom: 1.5rem;
        }
        .receipt-item .label {
          display: block;
          font-size: 0.75rem;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .receipt-item .value {
          font-size: 0.95rem;
          color: #0f172a;
        }
        .receipt-item .text-cyan {
          color: #0284c7;
        }
        .receipt-item .font-mono {
          font-family: monospace;
          font-size: 1rem;
          letter-spacing: 0.05em;
        }
        .receipt-status-box {
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 8px;
          padding: 1rem 1.25rem;
          margin-bottom: 1.5rem;
        }
        .status-indicator {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .status-dot {
          color: #16a34a;
          font-size: 1.2rem;
          line-height: 1;
        }
        .status-indicator strong {
          display: block;
          color: #15803d;
          font-size: 0.92rem;
          margin-bottom: 0.2rem;
        }
        .status-indicator p {
          margin: 0;
          font-size: 0.8rem;
          color: #166534;
        }
        .receipt-footer-notes {
          font-size: 0.76rem;
          color: #64748b;
          border-top: 1px dashed #cbd5e1;
          padding-top: 1rem;
          line-height: 1.6;
        }
        .receipt-footer-notes p { margin: 0.2rem 0; }
        .receipt-legal {
          font-style: italic;
          margin-top: 0.5rem !important;
          color: #94a3b8;
        }

        .receipt-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1.5rem;
          flex-wrap: wrap;
        }
        .btn-whatsapp {
          background: #25d366;
          color: #ffffff;
          border: none;
          font-weight: 700;
          padding: 0.75rem 1.25rem;
          border-radius: 8px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .btn-whatsapp:hover {
          background: #22c55e;
          color: #fff;
        }

        /* Print styling */
        @media print {
          body * { visibility: hidden; }
          #printable-receipt, #printable-receipt * { visibility: visible; }
          #printable-receipt {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            box-shadow: none;
            border: none;
            padding: 0;
          }
          .receipt-actions, .site-header, .site-footer { display: none !important; }
        }
      `})]})}const Xs=[{category:"Programs",items:[{q:"Do I need prior coding experience to join?",a:"No prior coding experience is required for any of our programs. All programs start from the fundamentals and progressively build toward advanced topics. What matters most is your motivation and commitment to learn."},{q:"What is the duration of each program?",a:"AI Engineering is 12 weeks, Web Development is 10 weeks, and Software Engineering is 14 weeks. All programs are intensive, project-based, and run full-time."},{q:"Are classes online, offline, or hybrid?",a:"Our programs currently operate from our Hyderabad centre at Rent A Desk, Serenity Square, Mindspace, HITEC City. Hybrid options may be available — reach out to us on WhatsApp to confirm the current delivery format for your program."},{q:"What happens after I finish the program?",a:"You receive placement support: resume reviews, mock interviews, LinkedIn profile polishing, and warm introductions to our hiring partner network. We don't consider your journey complete until you land a role."},{q:"Will I get a certificate?",a:"Yes. All learners who successfully complete a program receive a TechFoundry completion certificate along with a portfolio of real-world projects."}]},{category:"Application & Admission",items:[{q:"How do I apply?",a:'Click "Apply Now" in the navigation or visit our Contact / Apply page. Fill in the application form and our team will get in touch within 24–48 hours to guide you through the next steps.'},{q:"Is there an entrance test?",a:"There is a short online assessment to understand your current skills and learning style — it is not an elimination test. It helps us place you correctly and tailor mentoring to your needs."},{q:"How quickly will I hear back after applying?",a:"Our admissions team typically responds within 24–48 hours on working days. You can also reach out directly on WhatsApp for a faster response."},{q:"Can I apply for multiple programs at once?",a:"We recommend selecting one program you are most interested in. If you're unsure, our team will help you choose during the initial call — just reach out on WhatsApp."}]},{category:"Scholarship",items:[{q:"Who is eligible for the scholarship?",a:"Any motivated learner who demonstrates aptitude and determination but faces financial constraints is welcome to apply. No prior experience is necessary. We assess on potential, not background."},{q:"Does the scholarship cover all fees?",a:"Yes. The TechFoundry Talent Scholarship is a full scholarship — there are absolutely no program fees for selected candidates."},{q:"How many scholarship seats are available per batch?",a:"The number of scholarship seats is limited per batch. We strongly recommend applying early. Seats are awarded purely on merit and financial need."},{q:"Do scholarship students learn separately from paid students?",a:"No. Scholarship students are fully integrated into the same cohort, attend the same sessions, work on the same projects, and receive the same mentoring as all other learners."}]},{category:"Career & Outcomes",items:[{q:"Do you guarantee a job after the program?",a:"We do not guarantee placement — and we're transparent about this. Outcomes depend on individual effort, market conditions, and skill development. What we do guarantee is 100% effort in supporting your job search through placement prep, referrals, and employer connections."},{q:"What roles do graduates typically target?",a:"Depending on the program: AI Engineer, ML Engineer, Data Scientist (AI); Frontend, Backend, or Full-Stack Developer (Web); Software Engineer, Backend Engineer, or Systems Engineer (Software Engineering)."},{q:"Do you help with resume and interview preparation?",a:"Yes. Resume reviews, mock technical interviews, system design practice, and behavioral interview coaching are all included as part of the placement support component of every program."}]}];function mg({q:e,a:t}){const[r,n]=v.useState(!1);return i.jsxs("div",{className:`faq-item${r?" open":""}`,children:[i.jsxs("button",{className:"faq-question",onClick:()=>n(a=>!a),"aria-expanded":r,children:[i.jsx("span",{children:e}),i.jsx("span",{className:"faq-chevron",children:r?"−":"+"})]}),r&&i.jsx("div",{className:"faq-answer",children:i.jsx("p",{children:t})})]})}function hg(){return v.useEffect(()=>{document.title="FAQ — TechFoundry"},[]),i.jsxs("main",{children:[i.jsx("section",{className:"page-hero",children:i.jsxs("div",{className:"container",children:[i.jsx("span",{className:"section-label",children:"FAQs"}),i.jsx("h1",{children:"Frequently Asked Questions"}),i.jsxs("p",{className:"page-hero-sub",children:["Everything you need to know about our programs, application process, scholarship, and outcomes. Can't find your answer?"," ",i.jsx("a",{href:"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",children:"WhatsApp us"}),"."]})]})}),i.jsx("section",{className:"section",children:i.jsxs("div",{className:"container faq-layout",children:[i.jsx("nav",{className:"faq-nav","aria-label":"FAQ categories",children:Xs.map(e=>i.jsx("a",{href:`#${e.category.toLowerCase().replace(/ & /g,"-").replace(/ /g,"-")}`,className:"faq-nav-link",children:e.category},e.category))}),i.jsx("div",{className:"faq-content",children:Xs.map(e=>i.jsxs("div",{id:e.category.toLowerCase().replace(/ & /g,"-").replace(/ /g,"-"),className:"faq-category",children:[i.jsx("h2",{className:"faq-cat-title",children:e.category}),i.jsx("div",{className:"faq-list",children:e.items.map(t=>i.jsx(mg,{...t},t.q))})]},e.category))})]})}),i.jsx("section",{className:"faq-cta-section",children:i.jsxs("div",{className:"container faq-cta",children:[i.jsxs("div",{children:[i.jsx("h2",{children:"Still Have Questions?"}),i.jsx("p",{children:"Our team is happy to help — reach out on WhatsApp or fill in our contact form."})]}),i.jsxs("div",{style:{display:"flex",gap:"1rem",flexWrap:"wrap"},children:[i.jsx("a",{href:"https://wa.me/918309576596",target:"_blank",rel:"noopener noreferrer",className:"btn btn-accent btn-lg",children:"💬 WhatsApp Us"}),i.jsx("a",{href:"/contact",className:"btn btn-ghost btn-lg",children:"Contact Form"})]})]})}),i.jsx("style",{children:`
        .page-hero {
          background: radial-gradient(ellipse 90% 80% at 50% -20%, #0d2860 0%, #061330 60%, #04091a 100%);
          padding: 4.5rem 0 3.5rem;
          border-bottom: 1px solid var(--border);
          position: relative;
        }
        .page-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 10%;
          right: 10%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 180, 216, 0.45), transparent);
        }
        .page-hero h1 { margin: 0.5rem 0; color: #fff; }
        .page-hero-sub { font-size: 1.1rem; color: var(--text-secondary); max-width: 640px; margin-top: 0.5rem; }
        .page-hero-sub a { color: #00d2ff; }

        .faq-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 3rem;
          align-items: start;
        }
        .faq-nav {
          position: sticky;
          top: 88px;
          display: flex;
          flex-direction: column;
          gap: 0.35rem;
        }
        .faq-nav-link {
          padding: 0.5rem 0.75rem;
          border-radius: var(--radius-sm);
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--text-secondary);
          text-decoration: none;
          transition: background var(--transition), color var(--transition);
        }
        .faq-nav-link:hover {
          background: rgba(0, 180, 216, 0.15);
          color: #00d2ff;
        }

        .faq-category { margin-bottom: 3rem; }
        .faq-cat-title {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(0, 180, 216, 0.25);
          color: #00d2ff;
        }
        .faq-list { display: flex; flex-direction: column; gap: 0; }

        .faq-item {
          border: 1px solid var(--border);
          border-bottom: none;
          background: var(--surface);
          transition: background var(--transition);
        }
        .faq-item:first-child { border-radius: var(--radius) var(--radius) 0 0; }
        .faq-item:last-child { border-bottom: 1px solid var(--border); border-radius: 0 0 var(--radius) var(--radius); }
        .faq-item.open { background: var(--surface-2); }

        .faq-question {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem 1.25rem;
          background: transparent;
          border: none;
          text-align: left;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
          cursor: pointer;
          transition: color var(--transition);
        }
        .faq-question:hover { color: #00d2ff; }
        .faq-chevron {
          font-size: 1.25rem;
          font-weight: 400;
          color: #00d2ff;
          flex-shrink: 0;
          line-height: 1;
        }
        .faq-answer { padding: 0 1.25rem 1rem; }
        .faq-answer p { color: var(--text-secondary); font-size: 0.9rem; line-height: 1.7; }

        .faq-cta-section {
          background: linear-gradient(135deg, #07132b 0%, #0d2146 50%, #0077b6 100%);
          border-top: 1px solid #1e3a6d;
          padding: 3rem 0;
        }
        .faq-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .faq-cta h2 { color: #fff; margin-bottom: 0.4rem; }
        .faq-cta p { color: rgba(255,255,255,0.85); }

        @media (max-width: 768px) {
          .faq-layout { grid-template-columns: 1fr; }
          .faq-nav { position: static; flex-direction: row; flex-wrap: wrap; }
          .faq-cta { flex-direction: column; }
        }
      `})]})}function gg(){return i.jsxs("main",{style:{textAlign:"center",padding:"6rem 1.5rem"},children:[i.jsx("div",{style:{fontSize:"4rem",marginBottom:"1rem"},children:"404"}),i.jsx("h1",{children:"Page Not Found"}),i.jsx("p",{style:{color:"var(--muted)",margin:"0.75rem 0 2rem"},children:"The page you're looking for doesn't exist or has been moved."}),i.jsx("a",{href:"/",className:"btn btn-primary",children:"← Back to Home"})]})}function vg(){return i.jsxs(Lh,{children:[i.jsx(Qh,{}),i.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[i.jsx(Hh,{}),i.jsxs(ch,{children:[i.jsx(Pe,{path:"/",element:i.jsx(ng,{})}),i.jsx(Pe,{path:"/about",element:i.jsx(og,{})}),i.jsx(Pe,{path:"/programs",element:i.jsx(lg,{})}),i.jsx(Pe,{path:"/programs/:slug",element:i.jsx(sg,{})}),i.jsx(Pe,{path:"/scholarship",element:i.jsx(dg,{})}),i.jsx(Pe,{path:"/pay-fee",element:i.jsx(Ks,{})}),i.jsx(Pe,{path:"/pay",element:i.jsx(Ks,{})}),i.jsx(Pe,{path:"/contact",element:i.jsx(Gs,{})}),i.jsx(Pe,{path:"/register",element:i.jsx(Gs,{})}),i.jsx(Pe,{path:"/faq",element:i.jsx(hg,{})}),i.jsx(Pe,{path:"*",element:i.jsx(gg,{})})]}),i.jsx(Vh,{}),i.jsx(qh,{})]})]})}Ci.createRoot(document.getElementById("root")).render(i.jsx(Qd.StrictMode,{children:i.jsx(vg,{})}));
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}