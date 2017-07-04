!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],t):"object"==typeof exports?exports.reduxwork=t(require("lodash")):e.reduxwork=t(e._)}(this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,t),u.l=!0,u.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,u,a,o){if(t=t.toUpperCase(),e||(e={}),e.fetchFunction)return new Promise(function(o,s){e.fetchFunction((0,c.default)(e,t,n,u),(0,i.default)(e,t,u)).then(function(e){return e.json()}).then(function(e){return e.err?(r({type:t+"_"+n.toUpperCase()+"_FAILED",error:e.err}),s(e.err)):(r({type:t+"_"+n.toUpperCase()+"_COMPLETED",data:e}),o(e)),a&&a(e.err,e),a})})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=n(10),i=r(a),o=n(11),c=r(o)},function(t,n){t.exports=e},function(e,t,n){"use strict";function r(e,t,n,r,a,o,c){if(r&&"object"!==(void 0===r?"undefined":u(r))){var s=r;r={},r[e.idName]=s}return"function"==typeof a&&(o=a,a=null),function(u){var s={type:t+"_"+n.toUpperCase()};return a&&(s.query=a),r&&(s.params=r),u(s),(0,i.default)(e,t,n.toUpperCase(),u,{params:r,query:a},o,c)}}Object.defineProperty(t,"__esModule",{value:!0});var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=r;var a=n(0),i=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n,r,u,a){return function(o){return o({type:t+"_"+n.toUpperCase(),data:r}),"socket"==a.type?(0,i.default)(e,t,n.toUpperCase(),o,r,u,a):"fetch"==a.type?(0,c.default)(e,t,n.toUpperCase(),o,r,u,a):void 0}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=n(4),i=r(a),o=n(0),c=r(o)},function(e,t,n){"use strict";function r(e,t,n,r,u,a,i){if(t=t.toUpperCase(),e||(e={}),e.eventName||(e.eventName="redux_action_event"),e.socketIoFunction){var o={type:t+"_"+n};return u&&(o.data=u),new Promise(function(u,i){e.socketIoFunction(e.eventName,o,function(e,o){return e?(r({type:t+"_"+n+"_FAILED",error:e}),i(e)):(r({type:t+"_"+n+"_COMPLETED",data:o}),u(o)),a&&a(e,o),a})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){e.exports=n(6)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var u=n(7),a=r(u),i=n(8),o=r(i),c=n(9),s=n(12),f=n(13),d=n(14),l=r(d),p=n(15),y=r(p),m=n(16),E=r(m),_={createAction:a.default,createLocalActions:o.default,createSocketActions:c.createSocketActions,createFetchActions:c.createFetchActions,createIoActions:c.createIoActions,createSocketGetAction:s.createSocketGetAction,createFetchGetAction:s.createFetchGetAction,createGetAction:s.createGetAction,createSocketPostAction:f.createSocketPostAction,createFetchPostAction:f.createFetchPostAction,createPostAction:f.createPostAction,createReducer:l.default,createIoReducers:y.default,createLocalReducers:E.default};t.default=_,t.createAction=a.default,t.createLocalActions=o.default,t.createSocketActions=c.createSocketActions,t.createFetchActions=c.createFetchActions,t.createIoActions=c.createIoActions,t.createSocketGetAction=s.createSocketGetAction,t.createFetchGetAction=s.createFetchGetAction,t.createGetAction=s.createGetAction,t.createSocketPostAction=f.createSocketPostAction,t.createFetchPostAction=f.createFetchPostAction,t.createPostAction=f.createPostAction,t.createReducer=l.default,t.createIoReducers=y.default,t.createLocalReducers=E.default},function(e,t,n){"use strict";function r(e,t){return function(n){var r={type:e};return t&&(r[t]=n),r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n){var u;return u={},r(u,"find"+t,function(e,n){return{type:"FIND_"+t.toUpperCase(),data:e}}),r(u,"sync"+t,function(e,n){return{type:"SYNC_"+t.toUpperCase(),data:e}}),r(u,"clear"+t,function(){return{type:"CLEAR_"+t.toUpperCase()}}),r(u,"reset"+t,function(){return{type:"RESET_"+t.toUpperCase()}}),r(u,"select"+t,function(e){return{type:"SELECT_"+t.toUpperCase(),selected:e}}),r(u,"create"+t,function(e){return{type:"CREATE_"+t.toUpperCase(),data:e}}),r(u,"update"+t,function(e){return{type:"UPDATE_"+t.toUpperCase(),data:e}}),r(u,"destroy"+t,function(e){return{type:"DESTROY_"+t.toUpperCase(),data:e}}),u}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t,n){var r;return n||(n={}),n.type="socket",r={},u(r,"clear"+t,function(){return{type:"CLEAR_"+t.toUpperCase()}}),u(r,"reset"+t,function(){return{type:"RESET_"+t.toUpperCase()}}),u(r,"select"+t,function(e){return{type:"SELECT_"+t.toUpperCase(),selected:e}}),u(r,"find"+t,function(r,u){return(0,d.default)(e,"FIND",t,r,u,n)}),u(r,"sync"+t,function(r,u){return(0,d.default)(e,"SYNC",t,r,u,n)}),u(r,"create"+t,function(r,u){return(0,d.default)(e,"CREATE",t,r,u,n)}),u(r,"update"+t,function(r,u,a){return(0,d.default)(e,"UPDATE",t,r,u,n)}),u(r,"destroy"+t,function(r,u){return(0,d.default)(e,"DESTROY",t,r,u,n)}),r}function i(e,t,n){var r;return n||(n={}),n.type="fetch",r={},u(r,"clear"+t,function(){return{type:"CLEAR_"+t.toUpperCase()}}),u(r,"reset"+t,function(){return{type:"RESET_"+t.toUpperCase()}}),u(r,"select"+t,function(e){return{type:"SELECT_"+t.toUpperCase(),selected:e}}),u(r,"find"+t,function(r,u,a){return(0,s.default)(e,"FIND",t,r,u,a,n)}),u(r,"sync"+t,function(r,u,a){return(0,s.default)(e,"SYNC",t,r,u,a,n)}),u(r,"create"+t,function(r,u){return(0,d.default)(e,"CREATE",t,r,u,n)}),u(r,"update"+t,function(r,u,a){return(0,d.default)(e,"UPDATE",t,r,u,n)}),u(r,"destroy"+t,function(r,u){return(0,d.default)(e,"DESTROY",t,r,u,n)}),r}function o(e,t,n){return"socket"==n.type?a(e,t,n):"fetch"==n.type?i(e,t,n):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.createSocketActions=a,t.createFetchActions=i,t.createIoActions=o;var c=n(2),s=r(c),f=n(3),d=r(f)},function(e,t,n){"use strict";function r(e,t,n){var r=e.fetchOptions||u;return r.method="GET"==t||"FIND"==t||"SYNC"==t?"GET":"POST"==t||"CREATE"==t?"POST":"UPDATE"==t?"PUT":"DESTROY"==t?"DELETE":"POST","GET"!=r.method&&(r.body=JSON.stringify(n)),r}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var u={credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}}},function(e,t,n){"use strict";function r(e,t,n,r){var u=null,a=e.baseURL;if(r.params&&r.params[e.idName]&&(u=r.params[e.idName]),e.customUrl){a+=e.customUrl;for(var i in r.params)a=a.replace("%"+i,r.params[i]);if(r.query){var o=!0;a+="/";for(var c in r.query)o?(a+="?"+c+"="+r.query[c],o=!1):a+="&"+c+"="+r.query[c]}}else if(a+=u?"/"+n.toLowerCase()+"/"+t.toLowerCase()+"/"+u:"/"+n.toLowerCase()+"/"+t.toLowerCase(),r.query){var s=!0;a+="/";for(var c in r.query)s?(a+="?"+c+"="+r.query[c],s=!1):a+="&"+c+"="+r.query[c]}return a}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n){return n||(n={}),n.type="socket",function(r,u){return(0,d.default)(e,"GET",t,params,query,u,n)}}function a(e,t,n){return n||(n={}),n.type="fetch",function(r,u,a){return(0,s.default)(e,"GET",t,params,u,a,n)}}function i(e,t,n){return"socket"==n.type?u(e,t,n):"fetch"==n.type?a(e,t,n):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.createSocketGetAction=u,t.createFetchGetAction=a,t.createGetAction=i;var o=n(1),c=(r(o),n(2)),s=r(c),f=n(3),d=r(f),l=n(4),p=(r(l),n(0));r(p)},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t,n){return n||(n={}),n.type="socket",function(r,u){return(0,s.default)(e,"POST",t,r,u,n)}}function a(e,t,n){return n||(n={}),n.type="fetch",function(r,u){return(0,s.default)(e,"POST",t,r,u,n)}}function i(e,t,n){return"socket"==n.type?u(e,t,n):"fetch"==n.type?a(e,t,n):void 0}Object.defineProperty(t,"__esModule",{value:!0}),t.createSocketPostAction=u,t.createFetchPostAction=a,t.createPostAction=i;var o=n(2),c=(r(o),n(3)),s=r(c),f=n(4),d=(r(f),n(0));r(d)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t,n,u,a){n||(n={}),u||(u={});var o=Object.assign({},n);return t=i.default.toUpper(i.default.snakeCase(t)),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments[1],a=Object.assign(r({},"RESET_"+t,function(e,t){return Object.assign({},o)}));return u[n.type]?u[n.type](e,n):a[n.type]?a[n.type](e,n):e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=n(1),i=function(e){return e&&e.__esModule?e:{default:e}}(a)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t,n,a,i){i=Object.assign({keyName:"id"},i),n||(n={}),a||(a={});var c=Object.assign({},{init:!1,selected:null,query:null,params:null,isFinding:!1,isSyncing:!1,isWritting:!1,syncError:null,findError:null,writeError:null,updateError:null,destroyError:null,error:null,updatedItem:null,destroyedItem:null,destroyedItemIndex:null,items:[]},n);return t=o.default.toUpper(o.default.snakeCase(t)),function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,s=arguments[1],f=Object.assign((e={},r(e,"FIND_"+t,function(e,t){var n={isFinding:!0,findError:null};return n.query=t.query||null,n.params=t.params||null,o.default.isEqual(n.query,e.query)&&o.default.isEqual(n.params,e.params)||(n.items=[]),Object.assign({},e,n)}),r(e,"FIND_"+t+"_FAILED",function(e,t){return Object.assign({},e,{findError:t.error,isFinding:!1})}),r(e,"FIND_"+t+"_COMPLETED",function(e,t){return Object.assign({},e,{init:!0,isFinding:!1,findError:null,items:t.data})}),r(e,"SYNC_"+t,function(e,t){return Object.assign({},e,{isSyncing:!0,syncError:null})}),r(e,"SYNC_"+t+"_FAILED",function(e,t){return Object.assign({},e,{syncError:t.error,isSyncing:!1})}),r(e,"SYNC_"+t+"_COMPLETED",function(e,t){var n=t.data;o.default.isArray(n)||(n=[n]);var r=o.default.unionBy(n,[].concat(u(e.items)),i.keyName);return Object.assign({},e,{isSyncing:!1,syncError:null,init:!0,items:r})}),r(e,"RECEIVE_"+t,function(e,t){var n=t.data;o.default.isArray(n)||(n=[n]);var r=o.default.unionBy(n,[].concat(u(e.items)),i.keyName);return Object.assign({},e,{items:r})}),r(e,"CREATE_"+t,function(e,t){var n=Object.assign({},t.data,{_temp:!0});return Object.assign({},e,{isWritting:!0,items:[].concat(u(e.items),[n])})}),r(e,"CREATE_"+t+"_FAILED",function(e,t){var n=e.items.filter(function(e){return e[i.keyName]!==t.tempId});return Object.assign({},e,{isWritting:!1,items:n,writeError:t.error})}),r(e,"CREATE_"+t+"_COMPLETED",function(e,t){var n=e.items.filter(function(e){return e[i.keyName]!==t.tempId});return Object.assign({},e,{isWritting:!1,writeError:null,items:[].concat(u(n),[t.data])})}),r(e,"UPDATE_"+t,function(e,t){var n={isWritting:!0};if(o.default.isObject(t.data)&&t.data[i.keyName]){var r=[].concat(u(e.items)),a=o.default.find(r,function(e){return e[i.keyName]==t.data[i.keyName]});r.splice(o.default.findIndex(r,function(e){return e[i.keyName]==t.data[i.keyName]}),1,Object.assign({},a,t.data)),n.updatedItem=a,n.items=r}return Object.assign({},e,n)}),r(e,"UPDATE_"+t+"_FAILED",function(e,t){var n={isWritting:!1,updateError:t.error,updatedItem:null};if(e.updatedItem&&e.updatedItem[i.keyName]){var r=[].concat(u(e.items));r.splice(o.default.findIndex(r,function(t){return t[i.keyName]==e.updatedItem[i.keyName]}),1,e.updatedItem),n.items=r}return Object.assign({},e,n)}),r(e,"UPDATE_"+t+"_COMPLETED",function(e,t){var n={isWritting:!1,updateError:null,updatedItem:null};if(t.rewrite||i.rewriteOnUpdate){var r=[].concat(u(e.items)),a=t.data;o.default.isArray(a)||(a=[a]),n.items=o.default.unionBy(a,r,i.keyName)}return Object.assign({},e,n)}),r(e,"DESTROY_"+t,function(e,t){var n={isWritting:!0};if(t.data[i.keyName]){var r=[].concat(u(e.items));n.destroyedItem=o.default.find(r,function(e){return e[i.keyName]==t.data[i.keyName]}),n.destroyedItemIndex=o.default.findIndex(r,function(e){return e[i.keyName]==t.data[i.keyName]}),r.splice(n.destroyedItemIndex,1),n.items=r}return Object.assign({},e,n)}),r(e,"DESTROY_"+t+"_FAILED",function(e,t){var n={isWritting:!1,destroyError:t.error,destroyedItem:null,destroyedItemIndex:null};if(e.destroyedItem&&null!=e.destroyedItemIndex){var r=[].concat(u(e.items));r.splice(e.destroyedItemIndex,0,e.destroyedItem),n.items=r}return Object.assign({},e,n)}),r(e,"DESTROY_"+t+"_COMPLETED",function(e,t){return Object.assign({},e,{isWritting:!1,destroyError:null,destroyedItem:null,destroyedItemIndex:null})}),r(e,"CLEAR_"+t,function(e,t){return Object.assign({},e,{items:[]})}),r(e,"SELECT_"+t,function(e,t){return Object.assign({},e,{selected:t.data})}),r(e,"RESET_"+t,function(e,t){return Object.assign({},c)}),e));return a[s.type]?a[s.type](n,s):f[s.type]?f[s.type](n,s):n}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var i=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(i)},function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t,n,a,i){i=Object.assign({keyName:"id"},i),n||(n={}),a||(a={});var c=Object.assign({},{init:!1,selected:null,query:null,params:null,isFinding:!1,isSyncing:!1,isWritting:!1,syncError:null,findError:null,writeError:null,updateError:null,destroyError:null,error:null,updatedItem:null,destroyedItem:null,destroyedItemIndex:null,items:[]},n);return t=o.default.toUpper(o.default.snakeCase(t)),function(){var n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,s=arguments[1],f=Object.assign((n={},r(n,"FIND_"+t,function(e,t){var n=t.data;return o.default.isArray(n)||(n=[n]),Object.assign({},e,{init:!0,items:n})}),r(n,"SYNC_"+t,function(t,n){var r=n.data;o.default.isArray(r)||(r=[r]);var a=o.default.unionBy(r,[].concat(u(t.items)),e.keyName);return Object.assign({},t,{init:!0,items:a})}),r(n,"RECEIVE_"+t,function(t,n){var r=n.data;o.default.isArray(r)||(r=[r]);var a=o.default.unionBy(r,[].concat(u(t.items)),e.keyName);return Object.assign({},t,{items:a})}),r(n,"CREATE_"+t,function(e,t){return Object.assign({},e,{items:[].concat(u(e.items),[t.data])})}),r(n,"UPDATE_"+t,function(t,n){var r={};if(o.default.isObject(n.data)&&n.data[e.keyName]){var a=[].concat(u(t.items)),i=o.default.find(a,function(t){return t[e.keyName]==n.data[e.keyName]});a.splice(o.default.findIndex(a,function(t){return t[e.keyName]==n.data[e.keyName]}),1,Object.assign({},i,n.data)),r.items=a}return Object.assign({},t,r)}),r(n,"DESTROY_"+t,function(t,n){var r={};if(n.data[e.keyName]){var a=[].concat(u(t.items));o.default.find(a,function(t){return t[e.keyName]==n.data[e.keyName]});a.splice(destroyedItemIndex,1),r.items=a}return Object.assign({},t,r)}),r(n,"CLEAR_"+t,function(e,t){return Object.assign({},e,{items:[]})}),r(n,"SELECT_"+t,function(e,t){return Object.assign({},e,{selected:t.data})}),r(n,"RESET_"+t,function(e,t){return Object.assign({},c)}),n));return a[s.type]?a[s.type](i,s):f[s.type]?f[s.type](i,s):i}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var i=n(1),o=function(e){return e&&e.__esModule?e:{default:e}}(i)}])});