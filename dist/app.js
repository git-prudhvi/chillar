/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./abi/1.json":
/*!********************!*\
  !*** ./abi/1.json ***!
  \********************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"inputs\":[{\"internalType\":\"address\",\"name\":\"Nft\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"gameAdd\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"Damage\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"betor\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"player\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"gameid\",\"type\":\"uint256\"}],\"name\":\"Bet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"gameid\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"claimer\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"winamount\",\"type\":\"uint256\"}],\"name\":\"ClaimBet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"gameid\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"party0\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenid0\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"locked0\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"resultdec\",\"type\":\"bool\"}],\"name\":\"Participate0\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"gameid\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"party1\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"tokenid1\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"locked1\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"startblock\",\"type\":\"uint256\"}],\"name\":\"Participate1\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"gameid\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"winner\",\"type\":\"bool\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"damage0\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"damage1\",\"type\":\"uint256\"}],\"name\":\"Result\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"gameId\",\"type\":\"uint256\"},{\"internalType\":\"bool\",\"name\":\"bet\",\"type\":\"bool\"}],\"name\":\"PlaceBet\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenid\",\"type\":\"uint256\"}],\"name\":\"Playerpart\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenid\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"gameId\",\"type\":\"uint256\"}],\"name\":\"claimnft\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"gameid\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"games\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nft\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"gameId\",\"type\":\"uint256\"}],\"name\":\"viewdmg\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"gameId\",\"type\":\"uint256\"}],\"name\":\"viewgame\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"gameId\",\"type\":\"uint256\"}],\"name\":\"viewwinner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"gameId\",\"type\":\"uint256\"}],\"name\":\"winclaim\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]");

/***/ }),

/***/ "./node_modules/babylonjs-loaders/babylonjs.loaders.min.js":
/*!*****************************************************************!*\
  !*** ./node_modules/babylonjs-loaders/babylonjs.loaders.min.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?module.exports=t(__webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js")):undefined}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,(function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}([function(t,n){t.exports=e},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(0),o=n(2),a=function(){function e(){}return e.Get=function(e,t,n){if(!t||null==n||!t[n])throw new Error(e+": Failed to find index ("+n+")");return t[n]},e.Assign=function(e){if(e)for(var t=0;t<e.length;t++)e[t].index=t},e}(),i=function(){function e(e){this._completePromises=new Array,this._forAssetContainer=!1,this._babylonLights=[],this._disableInstancedMesh=0,this._disposed=!1,this._state=null,this._extensions=new Array,this._defaultBabylonMaterialData={},this._parent=e}return e.RegisterExtension=function(t,n){e.UnregisterExtension(t)&&r.Logger.Warn("Extension with the name '"+t+"' already exists"),e._RegisteredExtensions[t]={factory:n}},e.UnregisterExtension=function(t){return!!e._RegisteredExtensions[t]&&(delete e._RegisteredExtensions[t],!0)},Object.defineProperty(e.prototype,"state",{get:function(){return this._state},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gltf",{get:function(){return this._gltf},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bin",{get:function(){return this._bin},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"babylonScene",{get:function(){return this._babylonScene},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rootBabylonMesh",{get:function(){return this._rootBabylonMesh},enumerable:!1,configurable:!0}),e.prototype.dispose=function(){if(!this._disposed){for(var e in this._disposed=!0,this._completePromises.length=0,this._extensions){var t=this._extensions[e];t.dispose&&t.dispose(),delete this._extensions[e]}this._gltf=null,this._babylonScene=null,this._rootBabylonMesh=null,this._parent.dispose()}},e.prototype.importMeshAsync=function(e,t,n,r,o,a,i){var s=this;return Promise.resolve().then((function(){s._babylonScene=t,s._rootUrl=o,s._fileName=i||"scene",s._forAssetContainer=n,s._loadData(r);var a=null;if(e){var l={};if(s._gltf.nodes)for(var u=0,c=s._gltf.nodes;u<c.length;u++){var d=c[u];d.name&&(l[d.name]=d.index)}a=(e instanceof Array?e:[e]).map((function(e){var t=l[e];if(void 0===t)throw new Error("Failed to find node '"+e+"'");return t}))}return s._loadAsync(a,(function(){return{meshes:s._getMeshes(),particleSystems:[],skeletons:s._getSkeletons(),animationGroups:s._getAnimationGroups(),lights:s._babylonLights,transformNodes:s._getTransformNodes(),geometries:s._getGeometries()}}))}))},e.prototype.loadAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then((function(){return a._babylonScene=e,a._rootUrl=n,a._fileName=o||"scene",a._loadData(t),a._loadAsync(null,(function(){}))}))},e.prototype._loadAsync=function(e,t){var n=this;return Promise.resolve().then((function(){n._uniqueRootUrl=-1===n._rootUrl.indexOf("file:")&&n._fileName?n._rootUrl:""+n._rootUrl+Date.now()+"/",n._loadExtensions(),n._checkExtensions();var i=o.GLTFLoaderState[o.GLTFLoaderState.LOADING]+" => "+o.GLTFLoaderState[o.GLTFLoaderState.READY],s=o.GLTFLoaderState[o.GLTFLoaderState.LOADING]+" => "+o.GLTFLoaderState[o.GLTFLoaderState.COMPLETE];n._parent._startPerformanceCounter(i),n._parent._startPerformanceCounter(s),n._setState(o.GLTFLoaderState.LOADING),n._extensionsOnLoading();var l=new Array,u=n._babylonScene.blockMaterialDirtyMechanism;if(n._babylonScene.blockMaterialDirtyMechanism=!0,e)l.push(n.loadSceneAsync("/nodes",{nodes:e,index:-1}));else if(null!=n._gltf.scene||n._gltf.scenes&&n._gltf.scenes[0]){var c=a.Get("/scene",n._gltf.scenes,n._gltf.scene||0);l.push(n.loadSceneAsync("/scenes/"+c.index,c))}if(n.parent.loadAllMaterials&&n._gltf.materials)for(var d=0;d<n._gltf.materials.length;++d){var f=n._gltf.materials[d],h="/materials/"+d,p=r.Material.TriangleFillMode;l.push(n._loadMaterialAsync(h,f,null,p,(function(e){})))}n._babylonScene.blockMaterialDirtyMechanism=u,n._parent.compileMaterials&&l.push(n._compileMaterialsAsync()),n._parent.compileShadowGenerators&&l.push(n._compileShadowGeneratorsAsync());var _=Promise.all(l).then((function(){return n._rootBabylonMesh&&n._rootBabylonMesh.setEnabled(!0),n._extensionsOnReady(),n._setState(o.GLTFLoaderState.READY),n._startAnimations(),t()}));return _.then((function(){n._parent._endPerformanceCounter(i),r.Tools.SetImmediate((function(){n._disposed||Promise.all(n._completePromises).then((function(){n._parent._endPerformanceCounter(s),n._setState(o.GLTFLoaderState.COMPLETE),n._parent.onCompleteObservable.notifyObservers(void 0),n._parent.onCompleteObservable.clear(),n.dispose()}),(function(e){n._parent.onErrorObservable.notifyObservers(e),n._parent.onErrorObservable.clear(),n.dispose()}))}))})),_})).catch((function(e){throw n._disposed||(n._parent.onErrorObservable.notifyObservers(e),n._parent.onErrorObservable.clear(),n.dispose()),e}))},e.prototype._loadData=function(e){if(this._gltf=e.json,this._setupData(),e.bin){var t=this._gltf.buffers;if(t&&t[0]&&!t[0].uri){var n=t[0];(n.byteLength<e.bin.byteLength-3||n.byteLength>e.bin.byteLength)&&r.Logger.Warn("Binary buffer length ("+n.byteLength+") from JSON does not match chunk length ("+e.bin.byteLength+")"),this._bin=e.bin}else r.Logger.Warn("Unexpected BIN chunk")}},e.prototype._setupData=function(){if(a.Assign(this._gltf.accessors),a.Assign(this._gltf.animations),a.Assign(this._gltf.buffers),a.Assign(this._gltf.bufferViews),a.Assign(this._gltf.cameras),a.Assign(this._gltf.images),a.Assign(this._gltf.materials),a.Assign(this._gltf.meshes),a.Assign(this._gltf.nodes),a.Assign(this._gltf.samplers),a.Assign(this._gltf.scenes),a.Assign(this._gltf.skins),a.Assign(this._gltf.textures),this._gltf.nodes){for(var e={},t=0,n=this._gltf.nodes;t<n.length;t++){if((u=n[t]).children)for(var r=0,o=u.children;r<o.length;r++){e[o[r]]=u.index}}for(var i=this._createRootNode(),s=0,l=this._gltf.nodes;s<l.length;s++){var u,c=e[(u=l[s]).index];u.parent=void 0===c?i:this._gltf.nodes[c]}}},e.prototype._loadExtensions=function(){for(var t in e._RegisteredExtensions){var n=e._RegisteredExtensions[t].factory(this);n.name!==t&&r.Logger.Warn("The name of the glTF loader extension instance does not match the registered name: "+n.name+" !== "+t),this._extensions.push(n),this._parent.onExtensionLoadedObservable.notifyObservers(n)}this._extensions.sort((function(e,t){return(e.order||Number.MAX_VALUE)-(t.order||Number.MAX_VALUE)})),this._parent.onExtensionLoadedObservable.clear()},e.prototype._checkExtensions=function(){if(this._gltf.extensionsRequired)for(var e=function(e){if(!t._extensions.some((function(t){return t.name===e&&t.enabled})))throw new Error("Require extension "+e+" is not available")},t=this,n=0,r=this._gltf.extensionsRequired;n<r.length;n++){e(r[n])}},e.prototype._setState=function(e){this._state=e,this.log(o.GLTFLoaderState[this._state])},e.prototype._createRootNode=function(){this._babylonScene._blockEntityCollection=this._forAssetContainer,this._rootBabylonMesh=new r.Mesh("__root__",this._babylonScene),this._babylonScene._blockEntityCollection=!1,this._rootBabylonMesh.setEnabled(!1);var t={_babylonTransformNode:this._rootBabylonMesh,index:-1};switch(this._parent.coordinateSystemMode){case o.GLTFLoaderCoordinateSystemMode.AUTO:this._babylonScene.useRightHandedSystem||(t.rotation=[0,1,0,0],t.scale=[1,1,-1],e._LoadTransform(t,this._rootBabylonMesh));break;case o.GLTFLoaderCoordinateSystemMode.FORCE_RIGHT_HANDED:this._babylonScene.useRightHandedSystem=!0;break;default:throw new Error("Invalid coordinate system mode ("+this._parent.coordinateSystemMode+")")}return this._parent.onMeshLoadedObservable.notifyObservers(this._rootBabylonMesh),t},e.prototype.loadSceneAsync=function(e,t){var n=this,r=this._extensionsLoadSceneAsync(e,t);if(r)return r;var o=new Array;if(this.logOpen(e+" "+(t.name||"")),t.nodes)for(var i=0,s=t.nodes;i<s.length;i++){var l=s[i],u=a.Get(e+"/nodes/"+l,this._gltf.nodes,l);o.push(this.loadNodeAsync("/nodes/"+u.index,u,(function(e){e.parent=n._rootBabylonMesh})))}if(this._gltf.nodes)for(var c=0,d=this._gltf.nodes;c<d.length;c++){if((u=d[c])._babylonTransformNode&&u._babylonBones)for(var f=0,h=u._babylonBones;f<h.length;f++){h[f].linkTransformNode(u._babylonTransformNode)}}return o.push(this._loadAnimationsAsync()),this.logClose(),Promise.all(o).then((function(){}))},e.prototype._forEachPrimitive=function(e,t){if(e._primitiveBabylonMeshes)for(var n=0,r=e._primitiveBabylonMeshes;n<r.length;n++){t(r[n])}},e.prototype._getGeometries=function(){var e=new Array,t=this._gltf.nodes;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];this._forEachPrimitive(o,(function(t){var n=t.geometry;n&&-1===e.indexOf(n)&&e.push(n)}))}return e},e.prototype._getMeshes=function(){var e=new Array;e.push(this._rootBabylonMesh);var t=this._gltf.nodes;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];this._forEachPrimitive(o,(function(t){e.push(t)}))}return e},e.prototype._getTransformNodes=function(){var e=new Array,t=this._gltf.nodes;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._babylonTransformNode&&"TransformNode"===o._babylonTransformNode.getClassName()&&e.push(o._babylonTransformNode)}return e},e.prototype._getSkeletons=function(){var e=new Array,t=this._gltf.skins;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._data&&e.push(o._data.babylonSkeleton)}return e},e.prototype._getAnimationGroups=function(){var e=new Array,t=this._gltf.animations;if(t)for(var n=0,r=t;n<r.length;n++){var o=r[n];o._babylonAnimationGroup&&e.push(o._babylonAnimationGroup)}return e},e.prototype._startAnimations=function(){switch(this._parent.animationStartMode){case o.GLTFLoaderAnimationStartMode.NONE:break;case o.GLTFLoaderAnimationStartMode.FIRST:0!==(e=this._getAnimationGroups()).length&&e[0].start(!0);break;case o.GLTFLoaderAnimationStartMode.ALL:for(var e,t=0,n=e=this._getAnimationGroups();t<n.length;t++){n[t].start(!0)}break;default:return void r.Logger.Error("Invalid animation start mode ("+this._parent.animationStartMode+")")}},e.prototype.loadNodeAsync=function(t,n,o){var i=this;void 0===o&&(o=function(){});var s=this._extensionsLoadNodeAsync(t,n,o);if(s)return s;if(n._babylonTransformNode)throw new Error(t+": Invalid recursive node hierarchy");var l=new Array;this.logOpen(t+" "+(n.name||""));var u=function(r){if(e.AddPointerMetadata(r,t),e._LoadTransform(n,r),null!=n.camera){var s=a.Get(t+"/camera",i._gltf.cameras,n.camera);l.push(i.loadCameraAsync("/cameras/"+s.index,s,(function(e){e.parent=r})))}if(n.children)for(var u=0,c=n.children;u<c.length;u++){var d=c[u],f=a.Get(t+"/children/"+d,i._gltf.nodes,d);l.push(i.loadNodeAsync("/nodes/"+f.index,f,(function(e){e.parent=r})))}o(r)};if(null==n.mesh){var c=n.name||"node"+n.index;this._babylonScene._blockEntityCollection=this._forAssetContainer,n._babylonTransformNode=new r.TransformNode(c,this._babylonScene),this._babylonScene._blockEntityCollection=!1,u(n._babylonTransformNode)}else{var d=a.Get(t+"/mesh",this._gltf.meshes,n.mesh);l.push(this._loadMeshAsync("/meshes/"+d.index,n,d,u))}return this.logClose(),Promise.all(l).then((function(){return i._forEachPrimitive(n,(function(e){e.geometry&&e.geometry.useBoundingInfoFromGeometry?e._updateBoundingInfo():e.refreshBoundingInfo(!0)})),n._babylonTransformNode}))},e.prototype._loadMeshAsync=function(e,t,n,o){var i=n.primitives;if(!i||!i.length)throw new Error(e+": Primitives are missing");null==i[0].index&&a.Assign(i);var s=new Array;this.logOpen(e+" "+(n.name||""));var l=t.name||"node"+t.index;if(1===i.length){var u=n.primitives[0];s.push(this._loadMeshPrimitiveAsync(e+"/primitives/"+u.index,l,t,n,u,(function(e){t._babylonTransformNode=e,t._primitiveBabylonMeshes=[e]})))}else{this._babylonScene._blockEntityCollection=this._forAssetContainer,t._babylonTransformNode=new r.TransformNode(l,this._babylonScene),this._babylonScene._blockEntityCollection=!1,t._primitiveBabylonMeshes=[];for(var c=0,d=i;c<d.length;c++){u=d[c];s.push(this._loadMeshPrimitiveAsync(e+"/primitives/"+u.index,l+"_primitive"+u.index,t,n,u,(function(e){e.parent=t._babylonTransformNode,t._primitiveBabylonMeshes.push(e)})))}}if(null!=t.skin){var f=a.Get(e+"/skin",this._gltf.skins,t.skin);s.push(this._loadSkinAsync("/skins/"+f.index,t,f))}return o(t._babylonTransformNode),this.logClose(),Promise.all(s).then((function(){return t._babylonTransformNode}))},e.prototype._loadMeshPrimitiveAsync=function(t,n,o,i,s,l){var u=this,c=this._extensionsLoadMeshPrimitiveAsync(t,n,o,i,s,l);if(c)return c;this.logOpen(""+t);var d,f,h=0===this._disableInstancedMesh&&this._parent.createInstances&&null==o.skin&&!i.primitives[0].targets;if(h&&s._instanceData)d=s._instanceData.babylonSourceMesh.createInstance(n),f=s._instanceData.promise;else{var p=new Array;this._babylonScene._blockEntityCollection=this._forAssetContainer;var _=new r.Mesh(n,this._babylonScene);this._babylonScene._blockEntityCollection=!1,_.overrideMaterialSideOrientation=this._babylonScene.useRightHandedSystem?r.Material.CounterClockWiseSideOrientation:r.Material.ClockWiseSideOrientation,this._createMorphTargets(t,o,i,s,_),p.push(this._loadVertexDataAsync(t,s,_).then((function(e){return u._loadMorphTargetsAsync(t,s,_,e).then((function(){u._babylonScene._blockEntityCollection=u._forAssetContainer,e.applyToMesh(_),u._babylonScene._blockEntityCollection=!1}))})));var m=e._GetDrawMode(t,s.mode);if(null==s.material){var y=this._defaultBabylonMaterialData[m];y||(y=this._createDefaultMaterial("__GLTFLoader._default",m),this._parent.onMaterialLoadedObservable.notifyObservers(y),this._defaultBabylonMaterialData[m]=y),_.material=y}else{var b=a.Get(t+"/material",this._gltf.materials,s.material);p.push(this._loadMaterialAsync("/materials/"+b.index,b,_,m,(function(e){_.material=e})))}f=Promise.all(p),h&&(s._instanceData={babylonSourceMesh:_,promise:f}),d=_}return e.AddPointerMetadata(d,t),this._parent.onMeshLoadedObservable.notifyObservers(d),l(d),this.logClose(),f.then((function(){return d}))},e.prototype._loadVertexDataAsync=function(e,t,n){var o=this,i=this._extensionsLoadVertexDataAsync(e,t,n);if(i)return i;var s=t.attributes;if(!s)throw new Error(e+": Attributes are missing");var l=new Array,u=new r.Geometry(n.name,this._babylonScene);if(null==t.indices)n.isUnIndexed=!0;else{var c=a.Get(e+"/indices",this._gltf.accessors,t.indices);l.push(this._loadIndicesAccessorAsync("/accessors/"+c.index,c).then((function(e){u.setIndices(e)})))}var d=function(t,i,c){if(null!=s[t]){n._delayInfo=n._delayInfo||[],-1===n._delayInfo.indexOf(i)&&n._delayInfo.push(i);var d=a.Get(e+"/attributes/"+t,o._gltf.accessors,s[t]);l.push(o._loadVertexAccessorAsync("/accessors/"+d.index,d,i).then((function(e){if(e.getKind()===r.VertexBuffer.PositionKind&&!o.parent.alwaysComputeBoundingBox&&!n.skeleton){var t=d.min,a=d.max;if(void 0!==t&&void 0!==a){var i=r.TmpVectors.Vector3[0],s=r.TmpVectors.Vector3[1];i.copyFromFloats.apply(i,t),s.copyFromFloats.apply(s,a),u._boundingInfo=new r.BoundingInfo(i,s),u.useBoundingInfoFromGeometry=!0}}u.setVerticesBuffer(e,d.count)}))),i==r.VertexBuffer.MatricesIndicesExtraKind&&(n.numBoneInfluencers=8),c&&c(d)}};return d("POSITION",r.VertexBuffer.PositionKind),d("NORMAL",r.VertexBuffer.NormalKind),d("TANGENT",r.VertexBuffer.TangentKind),d("TEXCOORD_0",r.VertexBuffer.UVKind),d("TEXCOORD_1",r.VertexBuffer.UV2Kind),d("JOINTS_0",r.VertexBuffer.MatricesIndicesKind),d("WEIGHTS_0",r.VertexBuffer.MatricesWeightsKind),d("JOINTS_1",r.VertexBuffer.MatricesIndicesExtraKind),d("WEIGHTS_1",r.VertexBuffer.MatricesWeightsExtraKind),d("COLOR_0",r.VertexBuffer.ColorKind,(function(e){"VEC4"===e.type&&(n.hasVertexAlpha=!0)})),Promise.all(l).then((function(){return u}))},e.prototype._createMorphTargets=function(e,t,n,o,a){if(o.targets){if(null==t._numMorphTargets)t._numMorphTargets=o.targets.length;else if(o.targets.length!==t._numMorphTargets)throw new Error(e+": Primitives do not have the same number of targets");var i=n.extras?n.extras.targetNames:null;a.morphTargetManager=new r.MorphTargetManager(a.getScene());for(var s=0;s<o.targets.length;s++){var l=t.weights?t.weights[s]:n.weights?n.weights[s]:0,u=i?i[s]:"morphTarget"+s;a.morphTargetManager.addTarget(new r.MorphTarget(u,l,a.getScene()))}}},e.prototype._loadMorphTargetsAsync=function(e,t,n,r){if(!t.targets)return Promise.resolve();for(var o=new Array,a=n.morphTargetManager,i=0;i<a.numTargets;i++){var s=a.getTarget(i);o.push(this._loadMorphTargetVertexDataAsync(e+"/targets/"+i,r,t.targets[i],s))}return Promise.all(o).then((function(){}))},e.prototype._loadMorphTargetVertexDataAsync=function(e,t,n,o){var i=this,s=new Array,l=function(r,o,l){if(null!=n[r]){var u=t.getVertexBuffer(o);if(u){var c=a.Get(e+"/"+r,i._gltf.accessors,n[r]);s.push(i._loadFloatAccessorAsync("/accessors/"+c.index,c).then((function(e){l(u,e)})))}}};return l("POSITION",r.VertexBuffer.PositionKind,(function(e,t){var n=new Float32Array(t.length);e.forEach(t.length,(function(e,r){n[r]=t[r]+e})),o.setPositions(n)})),l("NORMAL",r.VertexBuffer.NormalKind,(function(e,t){var n=new Float32Array(t.length);e.forEach(n.length,(function(e,r){n[r]=t[r]+e})),o.setNormals(n)})),l("TANGENT",r.VertexBuffer.TangentKind,(function(e,t){var n=new Float32Array(t.length/3*4),r=0;e.forEach(t.length/3*4,(function(e,o){(o+1)%4!=0&&(n[r]=t[r]+e,r++)})),o.setTangents(n)})),Promise.all(s).then((function(){}))},e._LoadTransform=function(e,t){if(null==e.skin){var n=r.Vector3.Zero(),o=r.Quaternion.Identity(),a=r.Vector3.One();if(e.matrix)r.Matrix.FromArray(e.matrix).decompose(a,o,n);else e.translation&&(n=r.Vector3.FromArray(e.translation)),e.rotation&&(o=r.Quaternion.FromArray(e.rotation)),e.scale&&(a=r.Vector3.FromArray(e.scale));t.position=n,t.rotationQuaternion=o,t.scaling=a}},e.prototype._loadSkinAsync=function(e,t,n){var o=this,a=this._extensionsLoadSkinAsync(e,t,n);if(a)return a;var i=function(e){o._forEachPrimitive(t,(function(t){t.skeleton=e}))};if(n._data)return i(n._data.babylonSkeleton),n._data.promise;var s="skeleton"+n.index;this._babylonScene._blockEntityCollection=this._forAssetContainer;var l=new r.Skeleton(n.name||s,s,this._babylonScene);this._babylonScene._blockEntityCollection=!1,l.overrideMesh=this._rootBabylonMesh,this._loadBones(e,n,l),i(l);var u=this._loadSkinInverseBindMatricesDataAsync(e,n).then((function(e){o._updateBoneMatrices(l,e)}));return n._data={babylonSkeleton:l,promise:u},u},e.prototype._loadBones=function(e,t,n){for(var r={},o=0,i=t.joints;o<i.length;o++){var s=i[o],l=a.Get(e+"/joints/"+s,this._gltf.nodes,s);this._loadBone(l,t,n,r)}},e.prototype._loadBone=function(e,t,n,o){var a=o[e.index];if(a)return a;var i=null;e.parent&&e.parent._babylonTransformNode!==this._rootBabylonMesh&&(i=this._loadBone(e.parent,t,n,o));var s=t.joints.indexOf(e.index);return a=new r.Bone(e.name||"joint"+e.index,n,i,this._getNodeMatrix(e),null,null,s),o[e.index]=a,e._babylonBones=e._babylonBones||[],e._babylonBones.push(a),a},e.prototype._loadSkinInverseBindMatricesDataAsync=function(e,t){if(null==t.inverseBindMatrices)return Promise.resolve(null);var n=a.Get(e+"/inverseBindMatrices",this._gltf.accessors,t.inverseBindMatrices);return this._loadFloatAccessorAsync("/accessors/"+n.index,n)},e.prototype._updateBoneMatrices=function(e,t){for(var n=0,o=e.bones;n<o.length;n++){var a=o[n],i=r.Matrix.Identity(),s=a._index;t&&-1!==s&&(r.Matrix.FromArrayToRef(t,16*s,i),i.invertToRef(i));var l=a.getParent();l&&i.multiplyToRef(l.getInvertedAbsoluteTransform(),i),a.setBindPose(i),a.updateMatrix(i,!1,!1),a._updateDifferenceMatrix(void 0,!1)}},e.prototype._getNodeMatrix=function(e){return e.matrix?r.Matrix.FromArray(e.matrix):r.Matrix.Compose(e.scale?r.Vector3.FromArray(e.scale):r.Vector3.One(),e.rotation?r.Quaternion.FromArray(e.rotation):r.Quaternion.Identity(),e.translation?r.Vector3.FromArray(e.translation):r.Vector3.Zero())},e.prototype.loadCameraAsync=function(t,n,o){void 0===o&&(o=function(){});var a=this._extensionsLoadCameraAsync(t,n,o);if(a)return a;var i=new Array;this.logOpen(t+" "+(n.name||"")),this._babylonScene._blockEntityCollection=this._forAssetContainer;var s=new r.FreeCamera(n.name||"camera"+n.index,r.Vector3.Zero(),this._babylonScene,!1);switch(this._babylonScene._blockEntityCollection=!1,s.ignoreParentScaling=!0,s.rotation=new r.Vector3(0,Math.PI,0),n.type){case"perspective":var l=n.perspective;if(!l)throw new Error(t+": Camera perspective properties are missing");s.fov=l.yfov,s.minZ=l.znear,s.maxZ=l.zfar||Number.MAX_VALUE;break;case"orthographic":if(!n.orthographic)throw new Error(t+": Camera orthographic properties are missing");s.mode=r.Camera.ORTHOGRAPHIC_CAMERA,s.orthoLeft=-n.orthographic.xmag,s.orthoRight=n.orthographic.xmag,s.orthoBottom=-n.orthographic.ymag,s.orthoTop=n.orthographic.ymag,s.minZ=n.orthographic.znear,s.maxZ=n.orthographic.zfar;break;default:throw new Error(t+": Invalid camera type ("+n.type+")")}return e.AddPointerMetadata(s,t),this._parent.onCameraLoadedObservable.notifyObservers(s),o(s),this.logClose(),Promise.all(i).then((function(){return s}))},e.prototype._loadAnimationsAsync=function(){var e=this._gltf.animations;if(!e)return Promise.resolve();for(var t=new Array,n=0;n<e.length;n++){var r=e[n];t.push(this.loadAnimationAsync("/animations/"+r.index,r))}return Promise.all(t).then((function(){}))},e.prototype.loadAnimationAsync=function(e,t){var n=this._extensionsLoadAnimationAsync(e,t);if(n)return n;this._babylonScene._blockEntityCollection=this._forAssetContainer;var o=new r.AnimationGroup(t.name||"animation"+t.index,this._babylonScene);this._babylonScene._blockEntityCollection=!1,t._babylonAnimationGroup=o;var i=new Array;a.Assign(t.channels),a.Assign(t.samplers);for(var s=0,l=t.channels;s<l.length;s++){var u=l[s];i.push(this._loadAnimationChannelAsync(e+"/channels/"+u.index,e,t,u,o))}return Promise.all(i).then((function(){return o.normalize(0),o}))},e.prototype._loadAnimationChannelAsync=function(e,t,n,o,i,s){var l=this;if(void 0===s&&(s=null),null==o.target.node)return Promise.resolve();var u=a.Get(e+"/target/node",this._gltf.nodes,o.target.node);if("weights"===o.target.path&&!u._numMorphTargets||"weights"!==o.target.path&&!u._babylonTransformNode)return Promise.resolve();var c=a.Get(e+"/sampler",n.samplers,o.sampler);return this._loadAnimationSamplerAsync(t+"/samplers/"+o.sampler,c).then((function(t){var n,a;switch(o.target.path){case"translation":n="position",a=r.Animation.ANIMATIONTYPE_VECTOR3;break;case"rotation":n="rotationQuaternion",a=r.Animation.ANIMATIONTYPE_QUATERNION;break;case"scale":n="scaling",a=r.Animation.ANIMATIONTYPE_VECTOR3;break;case"weights":n="influence",a=r.Animation.ANIMATIONTYPE_FLOAT;break;default:throw new Error(e+"/target/path: Invalid value ("+o.target.path+")")}var c,d,f=0;switch(n){case"position":c=function(){var e=r.Vector3.FromArray(t.output,f);return f+=3,e};break;case"rotationQuaternion":c=function(){var e=r.Quaternion.FromArray(t.output,f);return f+=4,e};break;case"scaling":c=function(){var e=r.Vector3.FromArray(t.output,f);return f+=3,e};break;case"influence":c=function(){for(var e=new Array(u._numMorphTargets),n=0;n<u._numMorphTargets;n++)e[n]=t.output[f++];return e}}switch(t.interpolation){case"STEP":d=function(e){return{frame:t.input[e],value:c(),interpolation:r.AnimationKeyInterpolation.STEP}};break;case"LINEAR":d=function(e){return{frame:t.input[e],value:c()}};break;case"CUBICSPLINE":d=function(e){return{frame:t.input[e],inTangent:c(),value:c(),outTangent:c()}}}for(var h=new Array(t.input.length),p=0;p<t.input.length;p++)h[p]=d(p);if("influence"===n)for(var _=function(e){var t=i.name+"_channel"+i.targetedAnimations.length,o=new r.Animation(t,n,1,a);o.setKeys(h.map((function(t){return{frame:t.frame,inTangent:t.inTangent?t.inTangent[e]:void 0,value:t.value[e],outTangent:t.outTangent?t.outTangent[e]:void 0}}))),l._forEachPrimitive(u,(function(t){var n=t.morphTargetManager.getTarget(e),r=o.clone();n.animations.push(r),i.addTargetedAnimation(r,n)}))},m=0;m<u._numMorphTargets;m++)_(m);else{var y=i.name+"_channel"+i.targetedAnimations.length,b=new r.Animation(y,n,1,a);b.setKeys(h),null!=s&&null!=s.animations?(s.animations.push(b),i.addTargetedAnimation(b,s)):(u._babylonTransformNode.animations.push(b),i.addTargetedAnimation(b,u._babylonTransformNode))}}))},e.prototype._loadAnimationSamplerAsync=function(e,t){if(t._data)return t._data;var n=t.interpolation||"LINEAR";switch(n){case"STEP":case"LINEAR":case"CUBICSPLINE":break;default:throw new Error(e+"/interpolation: Invalid value ("+t.interpolation+")")}var r=a.Get(e+"/input",this._gltf.accessors,t.input),o=a.Get(e+"/output",this._gltf.accessors,t.output);return t._data=Promise.all([this._loadFloatAccessorAsync("/accessors/"+r.index,r),this._loadFloatAccessorAsync("/accessors/"+o.index,o)]).then((function(e){var t=e[0],r=e[1];return{input:t,interpolation:n,output:r}})),t._data},e.prototype._loadBufferAsync=function(e,t,n,r){var o=this._extensionsLoadBufferAsync(e,t,n,r);if(o)return o;if(!t._data)if(t.uri)t._data=this.loadUriAsync(e+"/uri",t,t.uri);else{if(!this._bin)throw new Error(e+": Uri is missing or the binary glTF is missing its binary chunk");t._data=this._bin.readAsync(0,t.byteLength)}return t._data.then((function(t){try{return new Uint8Array(t.buffer,t.byteOffset+n,r)}catch(t){throw new Error(e+": "+t.message)}}))},e.prototype.loadBufferViewAsync=function(e,t){var n=this._extensionsLoadBufferViewAsync(e,t);if(n)return n;if(t._data)return t._data;var r=a.Get(e+"/buffer",this._gltf.buffers,t.buffer);return t._data=this._loadBufferAsync("/buffers/"+r.index,r,t.byteOffset||0,t.byteLength),t._data},e.prototype._loadAccessorAsync=function(t,n,o){var i=this;if(n._data)return n._data;var s=e._GetNumComponents(t,n.type),l=s*r.VertexBuffer.GetTypeByteLength(n.componentType),u=s*n.count;if(null==n.bufferView)n._data=Promise.resolve(new o(u));else{var c=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._data=this.loadBufferViewAsync("/bufferViews/"+c.index,c).then((function(a){if(5126!==n.componentType||n.normalized||c.byteStride&&c.byteStride!==l){var i=new o(u);return r.VertexBuffer.ForEach(a,n.byteOffset||0,c.byteStride||l,s,n.componentType,i.length,n.normalized||!1,(function(e,t){i[t]=e})),i}return e._GetTypedArray(t,n.componentType,a,n.byteOffset,u)}))}if(n.sparse){var d=n.sparse;n._data=n._data.then((function(u){var c=u,f=a.Get(t+"/sparse/indices/bufferView",i._gltf.bufferViews,d.indices.bufferView),h=a.Get(t+"/sparse/values/bufferView",i._gltf.bufferViews,d.values.bufferView);return Promise.all([i.loadBufferViewAsync("/bufferViews/"+f.index,f),i.loadBufferViewAsync("/bufferViews/"+h.index,h)]).then((function(a){var i,u=a[0],f=a[1],h=e._GetTypedArray(t+"/sparse/indices",d.indices.componentType,u,d.indices.byteOffset,d.count),p=s*d.count;if(5126!==n.componentType||n.normalized){var _=e._GetTypedArray(t+"/sparse/values",n.componentType,f,d.values.byteOffset,p);i=new o(p),r.VertexBuffer.ForEach(_,0,l,s,n.componentType,i.length,n.normalized||!1,(function(e,t){i[t]=e}))}else i=e._GetTypedArray(t+"/sparse/values",n.componentType,f,d.values.byteOffset,p);for(var m=0,y=0;y<h.length;y++)for(var b=h[y]*s,v=0;v<s;v++)c[b++]=i[m++];return c}))}))}return n._data},e.prototype._loadFloatAccessorAsync=function(e,t){return this._loadAccessorAsync(e,t,Float32Array)},e.prototype._loadIndicesAccessorAsync=function(t,n){if("SCALAR"!==n.type)throw new Error(t+"/type: Invalid value "+n.type);if(5121!==n.componentType&&5123!==n.componentType&&5125!==n.componentType)throw new Error(t+"/componentType: Invalid value "+n.componentType);if(n._data)return n._data;if(n.sparse){var r=e._GetTypedArrayConstructor(t+"/componentType",n.componentType);n._data=this._loadAccessorAsync(t,n,r)}else{var o=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._data=this.loadBufferViewAsync("/bufferViews/"+o.index,o).then((function(r){return e._GetTypedArray(t,n.componentType,r,n.byteOffset,n.count)}))}return n._data},e.prototype._loadVertexBufferViewAsync=function(e,t){var n=this;return e._babylonBuffer||(e._babylonBuffer=this.loadBufferViewAsync("/bufferViews/"+e.index,e).then((function(e){return new r.Buffer(n._babylonScene.getEngine(),e,!1)}))),e._babylonBuffer},e.prototype._loadVertexAccessorAsync=function(t,n,o){var i=this;if(n._babylonVertexBuffer)return n._babylonVertexBuffer;if(n.sparse)n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then((function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)}));else if(n.byteOffset&&n.byteOffset%r.VertexBuffer.GetTypeByteLength(n.componentType)!=0)r.Logger.Warn("Accessor byte offset is not a multiple of component type byte length"),n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then((function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)}));else if(o===r.VertexBuffer.MatricesIndicesKind||o===r.VertexBuffer.MatricesIndicesExtraKind)n._babylonVertexBuffer=this._loadFloatAccessorAsync("/accessors/"+n.index,n).then((function(e){return new r.VertexBuffer(i._babylonScene.getEngine(),e,o,!1)}));else{var s=a.Get(t+"/bufferView",this._gltf.bufferViews,n.bufferView);n._babylonVertexBuffer=this._loadVertexBufferViewAsync(s,o).then((function(a){var l=e._GetNumComponents(t,n.type);return new r.VertexBuffer(i._babylonScene.getEngine(),a,o,!1,!1,s.byteStride,!1,n.byteOffset,l,n.componentType,n.normalized,!0,1,!0)}))}return n._babylonVertexBuffer},e.prototype._loadMaterialMetallicRoughnessPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return t&&(t.baseColorFactor?(n.albedoColor=r.Color3.FromArray(t.baseColorFactor),n.alpha=t.baseColorFactor[3]):n.albedoColor=r.Color3.White(),n.metallic=null==t.metallicFactor?1:t.metallicFactor,n.roughness=null==t.roughnessFactor?1:t.roughnessFactor,t.baseColorTexture&&o.push(this.loadTextureInfoAsync(e+"/baseColorTexture",t.baseColorTexture,(function(e){e.name=n.name+" (Base Color)",n.albedoTexture=e}))),t.metallicRoughnessTexture&&(t.metallicRoughnessTexture.nonColorData=!0,o.push(this.loadTextureInfoAsync(e+"/metallicRoughnessTexture",t.metallicRoughnessTexture,(function(e){e.name=n.name+" (Metallic Roughness)",n.metallicTexture=e}))),n.useMetallnessFromMetallicTextureBlue=!0,n.useRoughnessFromMetallicTextureGreen=!0,n.useRoughnessFromMetallicTextureAlpha=!1)),Promise.all(o).then((function(){}))},e.prototype._loadMaterialAsync=function(t,n,r,o,a){void 0===a&&(a=function(){});var i=this._extensionsLoadMaterialAsync(t,n,r,o,a);if(i)return i;n._data=n._data||{};var s=n._data[o];if(!s){this.logOpen(t+" "+(n.name||""));var l=this.createMaterial(t,n,o);s={babylonMaterial:l,babylonMeshes:[],promise:this.loadMaterialPropertiesAsync(t,n,l)},n._data[o]=s,e.AddPointerMetadata(l,t),this._parent.onMaterialLoadedObservable.notifyObservers(l),this.logClose()}return r&&(s.babylonMeshes.push(r),r.onDisposeObservable.addOnce((function(){var e=s.babylonMeshes.indexOf(r);-1!==e&&s.babylonMeshes.splice(e,1)}))),a(s.babylonMaterial),s.promise.then((function(){return s.babylonMaterial}))},e.prototype._createDefaultMaterial=function(e,t){this._babylonScene._blockEntityCollection=this._forAssetContainer;var n=new r.PBRMaterial(e,this._babylonScene);return this._babylonScene._blockEntityCollection=!1,n.fillMode=t,n.enableSpecularAntiAliasing=!0,n.useRadianceOverAlpha=!this._parent.transparencyAsCoverage,n.useSpecularOverAlpha=!this._parent.transparencyAsCoverage,n.transparencyMode=r.PBRMaterial.PBRMATERIAL_OPAQUE,n.metallic=1,n.roughness=1,n},e.prototype.createMaterial=function(e,t,n){var r=this._extensionsCreateMaterial(e,t,n);if(r)return r;var o=t.name||"material"+t.index;return this._createDefaultMaterial(o,n)},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this._extensionsLoadMaterialPropertiesAsync(e,t,n);if(r)return r;var o=new Array;return o.push(this.loadMaterialBasePropertiesAsync(e,t,n)),t.pbrMetallicRoughness&&o.push(this._loadMaterialMetallicRoughnessPropertiesAsync(e+"/pbrMetallicRoughness",t.pbrMetallicRoughness,n)),this.loadMaterialAlphaProperties(e,t,n),Promise.all(o).then((function(){}))},e.prototype.loadMaterialBasePropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.emissiveColor=t.emissiveFactor?r.Color3.FromArray(t.emissiveFactor):new r.Color3(0,0,0),t.doubleSided&&(n.backFaceCulling=!1,n.twoSidedLighting=!0),t.normalTexture&&(t.normalTexture.nonColorData=!0,o.push(this.loadTextureInfoAsync(e+"/normalTexture",t.normalTexture,(function(e){e.name=n.name+" (Normal)",n.bumpTexture=e}))),n.invertNormalMapX=!this._babylonScene.useRightHandedSystem,n.invertNormalMapY=this._babylonScene.useRightHandedSystem,null!=t.normalTexture.scale&&(n.bumpTexture.level=t.normalTexture.scale),n.forceIrradianceInFragment=!0),t.occlusionTexture&&(t.occlusionTexture.nonColorData=!0,o.push(this.loadTextureInfoAsync(e+"/occlusionTexture",t.occlusionTexture,(function(e){e.name=n.name+" (Occlusion)",n.ambientTexture=e}))),n.useAmbientInGrayScale=!0,null!=t.occlusionTexture.strength&&(n.ambientTextureStrength=t.occlusionTexture.strength)),t.emissiveTexture&&o.push(this.loadTextureInfoAsync(e+"/emissiveTexture",t.emissiveTexture,(function(e){e.name=n.name+" (Emissive)",n.emissiveTexture=e}))),Promise.all(o).then((function(){}))},e.prototype.loadMaterialAlphaProperties=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");switch(t.alphaMode||"OPAQUE"){case"OPAQUE":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_OPAQUE;break;case"MASK":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_ALPHATEST,n.alphaCutOff=null==t.alphaCutoff?.5:t.alphaCutoff,n.albedoTexture&&(n.albedoTexture.hasAlpha=!0);break;case"BLEND":n.transparencyMode=r.PBRMaterial.PBRMATERIAL_ALPHABLEND,n.albedoTexture&&(n.albedoTexture.hasAlpha=!0,n.useAlphaFromAlbedoTexture=!0);break;default:throw new Error(e+"/alphaMode: Invalid value ("+t.alphaMode+")")}},e.prototype.loadTextureInfoAsync=function(t,n,r){var o=this;void 0===r&&(r=function(){});var i=this._extensionsLoadTextureInfoAsync(t,n,r);if(i)return i;if(this.logOpen(""+t),n.texCoord>=2)throw new Error(t+"/texCoord: Invalid value ("+n.texCoord+")");var s=a.Get(t+"/index",this._gltf.textures,n.index);s._textureInfo=n;var l=this._loadTextureAsync("/textures/"+n.index,s,(function(a){a.coordinatesIndex=n.texCoord||0,e.AddPointerMetadata(a,t),o._parent.onTextureLoadedObservable.notifyObservers(a),r(a)}));return this.logClose(),l},e.prototype._loadTextureAsync=function(t,n,r){void 0===r&&(r=function(){});var o=this._extensionsLoadTextureAsync(t,n,r);if(o)return o;this.logOpen(t+" "+(n.name||""));var i=null==n.sampler?e.DefaultSampler:a.Get(t+"/sampler",this._gltf.samplers,n.sampler),s=a.Get(t+"/source",this._gltf.images,n.source),l=this._createTextureAsync(t,i,s,r);return this.logClose(),l},e.prototype._createTextureAsync=function(e,t,n,o,a){var i=this;void 0===o&&(o=function(){});var s=this._loadSampler("/samplers/"+t.index,t),l=new Array,u=new r.Deferred;this._babylonScene._blockEntityCollection=this._forAssetContainer;var c=new r.Texture(null,this._babylonScene,s.noMipMaps,!1,s.samplingMode,(function(){i._disposed||u.resolve()}),(function(t,n){i._disposed||u.reject(new Error(e+": "+(n&&n.message?n.message:t||"Failed to load texture")))}),void 0,void 0,void 0,n.mimeType,a);return this._babylonScene._blockEntityCollection=!1,l.push(u.promise),l.push(this.loadImageAsync("/images/"+n.index,n).then((function(e){var t=n.uri||i._fileName+"#image"+n.index,r="data:"+i._uniqueRootUrl+t;c.updateURL(r,e)}))),c.wrapU=s.wrapU,c.wrapV=s.wrapV,o(c),Promise.all(l).then((function(){return c}))},e.prototype._loadSampler=function(t,n){return n._data||(n._data={noMipMaps:9728===n.minFilter||9729===n.minFilter,samplingMode:e._GetTextureSamplingMode(t,n),wrapU:e._GetTextureWrapMode(t+"/wrapS",n.wrapS),wrapV:e._GetTextureWrapMode(t+"/wrapT",n.wrapT)}),n._data},e.prototype.loadImageAsync=function(e,t){if(!t._data){if(this.logOpen(e+" "+(t.name||"")),t.uri)t._data=this.loadUriAsync(e+"/uri",t,t.uri);else{var n=a.Get(e+"/bufferView",this._gltf.bufferViews,t.bufferView);t._data=this.loadBufferViewAsync("/bufferViews/"+n.index,n)}this.logClose()}return t._data},e.prototype.loadUriAsync=function(t,n,o){var a=this,i=this._extensionsLoadUriAsync(t,n,o);if(i)return i;if(!e._ValidateUri(o))throw new Error(t+": '"+o+"' is invalid");if(r.Tools.IsBase64(o)){var s=new Uint8Array(r.Tools.DecodeBase64(o));return this.log("Decoded "+o.substr(0,64)+"... ("+s.length+" bytes)"),Promise.resolve(s)}return this.log("Loading "+o),this._parent.preprocessUrlAsync(this._rootUrl+o).then((function(e){return new Promise((function(n,i){a._parent._loadFile(e,a._babylonScene,(function(e){a._disposed||(a.log("Loaded "+o+" ("+e.byteLength+" bytes)"),n(new Uint8Array(e)))}),!0,(function(e){i(new r.LoadFileError(t+": Failed to load '"+o+"'"+(e?": "+e.status+" "+e.statusText:""),e))}))}))}))},e.AddPointerMetadata=function(e,t){var n=e.metadata=e.metadata||{},r=n.gltf=n.gltf||{};(r.pointers=r.pointers||[]).push(t)},e._GetTextureWrapMode=function(e,t){switch(t=null==t?10497:t){case 33071:return r.Texture.CLAMP_ADDRESSMODE;case 33648:return r.Texture.MIRROR_ADDRESSMODE;case 10497:return r.Texture.WRAP_ADDRESSMODE;default:return r.Logger.Warn(e+": Invalid value ("+t+")"),r.Texture.WRAP_ADDRESSMODE}},e._GetTextureSamplingMode=function(e,t){var n=null==t.magFilter?9729:t.magFilter,o=null==t.minFilter?9987:t.minFilter;if(9729===n)switch(o){case 9728:return r.Texture.LINEAR_NEAREST;case 9729:return r.Texture.LINEAR_LINEAR;case 9984:return r.Texture.LINEAR_NEAREST_MIPNEAREST;case 9985:return r.Texture.LINEAR_LINEAR_MIPNEAREST;case 9986:return r.Texture.LINEAR_NEAREST_MIPLINEAR;case 9987:return r.Texture.LINEAR_LINEAR_MIPLINEAR;default:return r.Logger.Warn(e+"/minFilter: Invalid value ("+o+")"),r.Texture.LINEAR_LINEAR_MIPLINEAR}else switch(9728!==n&&r.Logger.Warn(e+"/magFilter: Invalid value ("+n+")"),o){case 9728:return r.Texture.NEAREST_NEAREST;case 9729:return r.Texture.NEAREST_LINEAR;case 9984:return r.Texture.NEAREST_NEAREST_MIPNEAREST;case 9985:return r.Texture.NEAREST_LINEAR_MIPNEAREST;case 9986:return r.Texture.NEAREST_NEAREST_MIPLINEAR;case 9987:return r.Texture.NEAREST_LINEAR_MIPLINEAR;default:return r.Logger.Warn(e+"/minFilter: Invalid value ("+o+")"),r.Texture.NEAREST_NEAREST_MIPNEAREST}},e._GetTypedArrayConstructor=function(e,t){switch(t){case 5120:return Int8Array;case 5121:return Uint8Array;case 5122:return Int16Array;case 5123:return Uint16Array;case 5125:return Uint32Array;case 5126:return Float32Array;default:throw new Error(e+": Invalid component type "+t)}},e._GetTypedArray=function(t,n,r,o,a){var i=r.buffer;o=r.byteOffset+(o||0);var s=e._GetTypedArrayConstructor(t+"/componentType",n);try{return new s(i,o,a)}catch(e){throw new Error(t+": "+e)}},e._GetNumComponents=function(e,t){switch(t){case"SCALAR":return 1;case"VEC2":return 2;case"VEC3":return 3;case"VEC4":case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16}throw new Error(e+": Invalid type ("+t+")")},e._ValidateUri=function(e){return r.Tools.IsBase64(e)||-1===e.indexOf("..")},e._GetDrawMode=function(e,t){switch(null==t&&(t=4),t){case 0:return r.Material.PointListDrawMode;case 1:return r.Material.LineListDrawMode;case 2:return r.Material.LineLoopDrawMode;case 3:return r.Material.LineStripDrawMode;case 4:return r.Material.TriangleFillMode;case 5:return r.Material.TriangleStripDrawMode;case 6:return r.Material.TriangleFanDrawMode}throw new Error(e+": Invalid mesh primitive mode ("+t+")")},e.prototype._compileMaterialsAsync=function(){var e=this;this._parent._startPerformanceCounter("Compile materials");var t=new Array;if(this._gltf.materials)for(var n=0,r=this._gltf.materials;n<r.length;n++){var o=r[n];if(o._data)for(var a in o._data)for(var i=o._data[a],s=0,l=i.babylonMeshes;s<l.length;s++){var u=l[s];u.computeWorldMatrix(!0);var c=i.babylonMaterial;t.push(c.forceCompilationAsync(u)),t.push(c.forceCompilationAsync(u,{useInstances:!0})),this._parent.useClipPlane&&(t.push(c.forceCompilationAsync(u,{clipPlane:!0})),t.push(c.forceCompilationAsync(u,{clipPlane:!0,useInstances:!0})))}}return Promise.all(t).then((function(){e._parent._endPerformanceCounter("Compile materials")}))},e.prototype._compileShadowGeneratorsAsync=function(){var e=this;this._parent._startPerformanceCounter("Compile shadow generators");for(var t=new Array,n=0,r=this._babylonScene.lights;n<r.length;n++){var o=r[n].getShadowGenerator();o&&t.push(o.forceCompilationAsync())}return Promise.all(t).then((function(){e._parent._endPerformanceCounter("Compile shadow generators")}))},e.prototype._forEachExtensions=function(e){for(var t=0,n=this._extensions;t<n.length;t++){var r=n[t];r.enabled&&e(r)}},e.prototype._applyExtensions=function(e,t,n){for(var r=0,o=this._extensions;r<o.length;r++){var a=o[r];if(a.enabled){var i=a.name+"."+t,s=e;s._activeLoaderExtensionFunctions=s._activeLoaderExtensionFunctions||{};var l=s._activeLoaderExtensionFunctions;if(!l[i]){l[i]=!0;try{var u=n(a);if(u)return u}finally{delete l[i]}}}}return null},e.prototype._extensionsOnLoading=function(){this._forEachExtensions((function(e){return e.onLoading&&e.onLoading()}))},e.prototype._extensionsOnReady=function(){this._forEachExtensions((function(e){return e.onReady&&e.onReady()}))},e.prototype._extensionsLoadSceneAsync=function(e,t){return this._applyExtensions(t,"loadScene",(function(n){return n.loadSceneAsync&&n.loadSceneAsync(e,t)}))},e.prototype._extensionsLoadNodeAsync=function(e,t,n){return this._applyExtensions(t,"loadNode",(function(r){return r.loadNodeAsync&&r.loadNodeAsync(e,t,n)}))},e.prototype._extensionsLoadCameraAsync=function(e,t,n){return this._applyExtensions(t,"loadCamera",(function(r){return r.loadCameraAsync&&r.loadCameraAsync(e,t,n)}))},e.prototype._extensionsLoadVertexDataAsync=function(e,t,n){return this._applyExtensions(t,"loadVertexData",(function(r){return r._loadVertexDataAsync&&r._loadVertexDataAsync(e,t,n)}))},e.prototype._extensionsLoadMeshPrimitiveAsync=function(e,t,n,r,o,a){return this._applyExtensions(o,"loadMeshPrimitive",(function(i){return i._loadMeshPrimitiveAsync&&i._loadMeshPrimitiveAsync(e,t,n,r,o,a)}))},e.prototype._extensionsLoadMaterialAsync=function(e,t,n,r,o){return this._applyExtensions(t,"loadMaterial",(function(a){return a._loadMaterialAsync&&a._loadMaterialAsync(e,t,n,r,o)}))},e.prototype._extensionsCreateMaterial=function(e,t,n){return this._applyExtensions(t,"createMaterial",(function(r){return r.createMaterial&&r.createMaterial(e,t,n)}))},e.prototype._extensionsLoadMaterialPropertiesAsync=function(e,t,n){return this._applyExtensions(t,"loadMaterialProperties",(function(r){return r.loadMaterialPropertiesAsync&&r.loadMaterialPropertiesAsync(e,t,n)}))},e.prototype._extensionsLoadTextureInfoAsync=function(e,t,n){return this._applyExtensions(t,"loadTextureInfo",(function(r){return r.loadTextureInfoAsync&&r.loadTextureInfoAsync(e,t,n)}))},e.prototype._extensionsLoadTextureAsync=function(e,t,n){return this._applyExtensions(t,"loadTexture",(function(r){return r._loadTextureAsync&&r._loadTextureAsync(e,t,n)}))},e.prototype._extensionsLoadAnimationAsync=function(e,t){return this._applyExtensions(t,"loadAnimation",(function(n){return n.loadAnimationAsync&&n.loadAnimationAsync(e,t)}))},e.prototype._extensionsLoadSkinAsync=function(e,t,n){return this._applyExtensions(n,"loadSkin",(function(r){return r._loadSkinAsync&&r._loadSkinAsync(e,t,n)}))},e.prototype._extensionsLoadUriAsync=function(e,t,n){return this._applyExtensions(t,"loadUri",(function(r){return r._loadUriAsync&&r._loadUriAsync(e,t,n)}))},e.prototype._extensionsLoadBufferViewAsync=function(e,t){return this._applyExtensions(t,"loadBufferView",(function(n){return n.loadBufferViewAsync&&n.loadBufferViewAsync(e,t)}))},e.prototype._extensionsLoadBufferAsync=function(e,t,n,r){return this._applyExtensions(t,"loadBuffer",(function(o){return o.loadBufferAsync&&o.loadBufferAsync(e,t,n,r)}))},e.LoadExtensionAsync=function(e,t,n,r){if(!t.extensions)return null;var o=t.extensions[n];return o?r(e+"/extensions/"+n,o):null},e.LoadExtraAsync=function(e,t,n,r){if(!t.extras)return null;var o=t.extras[n];return o?r(e+"/extras/"+n,o):null},e.prototype.isExtensionUsed=function(e){return!!this._gltf.extensionsUsed&&-1!==this._gltf.extensionsUsed.indexOf(e)},e.prototype.logOpen=function(e){this._parent._logOpen(e)},e.prototype.logClose=function(){this._parent._logClose()},e.prototype.log=function(e){this._parent._log(e)},e.prototype.startPerformanceCounter=function(e){this._parent._startPerformanceCounter(e)},e.prototype.endPerformanceCounter=function(e){this._parent._endPerformanceCounter(e)},e._RegisteredExtensions={},e.DefaultSampler={index:-1},e}();o.GLTFFileLoader._CreateGLTF2Loader=function(e){return new i(e)}},function(e,t,n){"use strict";n.r(t),n.d(t,"GLTFLoaderCoordinateSystemMode",(function(){return r})),n.d(t,"GLTFLoaderAnimationStartMode",(function(){return o})),n.d(t,"GLTFLoaderState",(function(){return a})),n.d(t,"GLTFFileLoader",(function(){return l}));var r,o,a,i=n(0),s=n(3);!function(e){e[e.AUTO=0]="AUTO",e[e.FORCE_RIGHT_HANDED=1]="FORCE_RIGHT_HANDED"}(r||(r={})),function(e){e[e.NONE=0]="NONE",e[e.FIRST=1]="FIRST",e[e.ALL=2]="ALL"}(o||(o={})),function(e){e[e.LOADING=0]="LOADING",e[e.READY=1]="READY",e[e.COMPLETE=2]="COMPLETE"}(a||(a={}));var l=function(){function e(){this.onParsedObservable=new i.Observable,this.coordinateSystemMode=r.AUTO,this.animationStartMode=o.FIRST,this.compileMaterials=!1,this.useClipPlane=!1,this.compileShadowGenerators=!1,this.transparencyAsCoverage=!1,this.useRangeRequests=!1,this.createInstances=!0,this.alwaysComputeBoundingBox=!1,this.loadAllMaterials=!1,this.preprocessUrlAsync=function(e){return Promise.resolve(e)},this.onMeshLoadedObservable=new i.Observable,this.onTextureLoadedObservable=new i.Observable,this.onMaterialLoadedObservable=new i.Observable,this.onCameraLoadedObservable=new i.Observable,this.onCompleteObservable=new i.Observable,this.onErrorObservable=new i.Observable,this.onDisposeObservable=new i.Observable,this.onExtensionLoadedObservable=new i.Observable,this.validate=!1,this.onValidatedObservable=new i.Observable,this._loader=null,this._requests=new Array,this.name="gltf",this.extensions={".gltf":{isBinary:!1},".glb":{isBinary:!0}},this._logIndentLevel=0,this._loggingEnabled=!1,this._log=this._logDisabled,this._capturePerformanceCounters=!1,this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled}return Object.defineProperty(e.prototype,"onParsed",{set:function(e){this._onParsedObserver&&this.onParsedObservable.remove(this._onParsedObserver),this._onParsedObserver=this.onParsedObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onMeshLoaded",{set:function(e){this._onMeshLoadedObserver&&this.onMeshLoadedObservable.remove(this._onMeshLoadedObserver),this._onMeshLoadedObserver=this.onMeshLoadedObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onTextureLoaded",{set:function(e){this._onTextureLoadedObserver&&this.onTextureLoadedObservable.remove(this._onTextureLoadedObserver),this._onTextureLoadedObserver=this.onTextureLoadedObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onMaterialLoaded",{set:function(e){this._onMaterialLoadedObserver&&this.onMaterialLoadedObservable.remove(this._onMaterialLoadedObserver),this._onMaterialLoadedObserver=this.onMaterialLoadedObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onCameraLoaded",{set:function(e){this._onCameraLoadedObserver&&this.onCameraLoadedObservable.remove(this._onCameraLoadedObserver),this._onCameraLoadedObserver=this.onCameraLoadedObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onComplete",{set:function(e){this._onCompleteObserver&&this.onCompleteObservable.remove(this._onCompleteObserver),this._onCompleteObserver=this.onCompleteObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onError",{set:function(e){this._onErrorObserver&&this.onErrorObservable.remove(this._onErrorObserver),this._onErrorObserver=this.onErrorObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onDispose",{set:function(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onExtensionLoaded",{set:function(e){this._onExtensionLoadedObserver&&this.onExtensionLoadedObservable.remove(this._onExtensionLoadedObserver),this._onExtensionLoadedObserver=this.onExtensionLoadedObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"loggingEnabled",{get:function(){return this._loggingEnabled},set:function(e){this._loggingEnabled!==e&&(this._loggingEnabled=e,this._loggingEnabled?this._log=this._logEnabled:this._log=this._logDisabled)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"capturePerformanceCounters",{get:function(){return this._capturePerformanceCounters},set:function(e){this._capturePerformanceCounters!==e&&(this._capturePerformanceCounters=e,this._capturePerformanceCounters?(this._startPerformanceCounter=this._startPerformanceCounterEnabled,this._endPerformanceCounter=this._endPerformanceCounterEnabled):(this._startPerformanceCounter=this._startPerformanceCounterDisabled,this._endPerformanceCounter=this._endPerformanceCounterDisabled))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"onValidated",{set:function(e){this._onValidatedObserver&&this.onValidatedObservable.remove(this._onValidatedObserver),this._onValidatedObserver=this.onValidatedObservable.add(e)},enumerable:!1,configurable:!0}),e.prototype.dispose=function(){this._loader&&(this._loader.dispose(),this._loader=null);for(var e=0,t=this._requests;e<t.length;e++){t[e].abort()}this._requests.length=0,delete this._progressCallback,this.preprocessUrlAsync=function(e){return Promise.resolve(e)},this.onMeshLoadedObservable.clear(),this.onTextureLoadedObservable.clear(),this.onMaterialLoadedObservable.clear(),this.onCameraLoadedObservable.clear(),this.onCompleteObservable.clear(),this.onExtensionLoadedObservable.clear(),this.onDisposeObservable.notifyObservers(void 0),this.onDisposeObservable.clear()},e.prototype.requestFile=function(e,t,n,r,o,a){var s=this;if(this._progressCallback=r,o){if(this.useRangeRequests){this.validate&&i.Logger.Warn("glTF validation is not supported when range requests are enabled");var l={abort:function(){},onCompleteObservable:new i.Observable},u={readAsync:function(n,r){return new Promise((function(o,a){s._requestFile(t,e,(function(e){o(new Uint8Array(e))}),!0,(function(e){a(e)}),(function(e){e.setRequestHeader("Range","bytes="+n+"-"+(n+r-1))}))}))},byteLength:0};return this._unpackBinaryAsync(new i.DataReader(u)).then((function(e){l.onCompleteObservable.notifyObservers(l),n(e)}),a),l}return this._requestFile(t,e,(function(e,t){var r=e;s._unpackBinaryAsync(new i.DataReader({readAsync:function(e,t){return Promise.resolve(new Uint8Array(r,e,t))},byteLength:r.byteLength})).then((function(e){n(e,t)}),a)}),!0,a)}return this._requestFile(t,e,(function(r,o){s._validate(e,r,i.Tools.GetFolderPath(t),i.Tools.GetFilename(t)),n({json:s._parseJson(r)},o)}),o,a)},e.prototype.readFile=function(e,t,n,r,o,a){var s=this;return e._readFile(t,(function(r){if(s._validate(e,r,"file:",t.name),o){var l=r;s._unpackBinaryAsync(new i.DataReader({readAsync:function(e,t){return Promise.resolve(new Uint8Array(l,e,t))},byteLength:l.byteLength})).then(n,a)}else n({json:s._parseJson(r)})}),r,o,a)},e.prototype.importMeshAsync=function(e,t,n,r,o,a){var i=this;return Promise.resolve().then((function(){return i.onParsedObservable.notifyObservers(n),i.onParsedObservable.clear(),i._log("Loading "+(a||"")),i._loader=i._getLoader(n),i._loader.importMeshAsync(e,t,!1,n,r,o,a)}))},e.prototype.loadAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then((function(){return a.onParsedObservable.notifyObservers(t),a.onParsedObservable.clear(),a._log("Loading "+(o||"")),a._loader=a._getLoader(t),a._loader.loadAsync(e,t,n,r,o)}))},e.prototype.loadAssetContainerAsync=function(e,t,n,r,o){var a=this;return Promise.resolve().then((function(){a.onParsedObservable.notifyObservers(t),a.onParsedObservable.clear(),a._log("Loading "+(o||"")),a._loader=a._getLoader(t);var s=new i.AssetContainer(e),l=[];a.onMaterialLoadedObservable.add((function(e){l.push(e),e.onDisposeObservable.addOnce((function(){var t=s.materials.indexOf(e);t>-1&&s.materials.splice(t,1),(t=l.indexOf(e))>-1&&l.splice(t,1)}))}));var u=[];a.onTextureLoadedObservable.add((function(e){u.push(e),e.onDisposeObservable.addOnce((function(){var t=s.textures.indexOf(e);t>-1&&s.textures.splice(t,1),(t=u.indexOf(e))>-1&&u.splice(t,1)}))}));var c=[];return a.onCameraLoadedObservable.add((function(e){c.push(e)})),a._loader.importMeshAsync(null,e,!0,t,n,r,o).then((function(e){return Array.prototype.push.apply(s.geometries,e.geometries),Array.prototype.push.apply(s.meshes,e.meshes),Array.prototype.push.apply(s.particleSystems,e.particleSystems),Array.prototype.push.apply(s.skeletons,e.skeletons),Array.prototype.push.apply(s.animationGroups,e.animationGroups),Array.prototype.push.apply(s.materials,l),Array.prototype.push.apply(s.textures,u),Array.prototype.push.apply(s.lights,e.lights),Array.prototype.push.apply(s.transformNodes,e.transformNodes),Array.prototype.push.apply(s.cameras,c),s}))}))},e.prototype.canDirectLoad=function(t){return-1!==t.indexOf("asset")&&-1!==t.indexOf("version")||i.StringTools.StartsWith(t,"data:base64,"+e.magicBase64Encoded)||i.StringTools.StartsWith(t,"data:application/octet-stream;base64,"+e.magicBase64Encoded)||i.StringTools.StartsWith(t,"data:model/gltf-binary;base64,"+e.magicBase64Encoded)},e.prototype.directLoad=function(t,n){if(i.StringTools.StartsWith(n,"base64,"+e.magicBase64Encoded)||i.StringTools.StartsWith(n,"application/octet-stream;base64,"+e.magicBase64Encoded)||i.StringTools.StartsWith(n,"model/gltf-binary;base64,"+e.magicBase64Encoded)){var r=i.Tools.DecodeBase64(n);return this._validate(t,r),this._unpackBinaryAsync(new i.DataReader({readAsync:function(e,t){return Promise.resolve(new Uint8Array(r,e,t))},byteLength:r.byteLength}))}return this._validate(t,n),Promise.resolve({json:this._parseJson(n)})},e.prototype.createPlugin=function(){return new e},Object.defineProperty(e.prototype,"loaderState",{get:function(){return this._loader?this._loader.state:null},enumerable:!1,configurable:!0}),e.prototype.whenCompleteAsync=function(){var e=this;return new Promise((function(t,n){e.onCompleteObservable.addOnce((function(){t()})),e.onErrorObservable.addOnce((function(e){n(e)}))}))},e.prototype._loadFile=function(e,t,n,r,o){var a=this,i=t._loadFile(e,n,(function(e){a._onProgress(e,i)}),void 0,r,o);return i.onCompleteObservable.add((function(e){a._requests.splice(a._requests.indexOf(e),1)})),this._requests.push(i),i},e.prototype._requestFile=function(e,t,n,r,o,a){var i=this,s=t._requestFile(e,n,(function(e){i._onProgress(e,s)}),void 0,r,o,a);return s.onCompleteObservable.add((function(e){i._requests.splice(i._requests.indexOf(e),1)})),this._requests.push(s),s},e.prototype._onProgress=function(e,t){if(this._progressCallback){t._lengthComputable=e.lengthComputable,t._loaded=e.loaded,t._total=e.total;for(var n=!0,r=0,o=0,a=0,i=this._requests;a<i.length;a++){var s=i[a];if(void 0===s._lengthComputable||void 0===s._loaded||void 0===s._total)return;n=n&&s._lengthComputable,r+=s._loaded,o+=s._total}this._progressCallback({lengthComputable:n,loaded:r,total:n?o:0})}},e.prototype._validate=function(e,t,n,r){var o=this;void 0===n&&(n=""),void 0===r&&(r=""),this.validate&&(this._startPerformanceCounter("Validate JSON"),s.GLTFValidation.ValidateAsync(t,n,r,(function(t){return o.preprocessUrlAsync(n+t).then((function(t){return e._loadFileAsync(t,void 0,!0,!0)}))})).then((function(e){o._endPerformanceCounter("Validate JSON"),o.onValidatedObservable.notifyObservers(e),o.onValidatedObservable.clear()}),(function(e){o._endPerformanceCounter("Validate JSON"),i.Tools.Warn("Failed to validate: "+e.message),o.onValidatedObservable.clear()})))},e.prototype._getLoader=function(t){var n=t.json.asset||{};this._log("Asset version: "+n.version),n.minVersion&&this._log("Asset minimum version: "+n.minVersion),n.generator&&this._log("Asset generator: "+n.generator);var r=e._parseVersion(n.version);if(!r)throw new Error("Invalid version: "+n.version);if(void 0!==n.minVersion){var o=e._parseVersion(n.minVersion);if(!o)throw new Error("Invalid minimum version: "+n.minVersion);if(e._compareVersion(o,{major:2,minor:0})>0)throw new Error("Incompatible minimum version: "+n.minVersion)}var a={1:e._CreateGLTF1Loader,2:e._CreateGLTF2Loader}[r.major];if(!a)throw new Error("Unsupported version: "+n.version);return a(this)},e.prototype._parseJson=function(e){this._startPerformanceCounter("Parse JSON"),this._log("JSON length: "+e.length);var t=JSON.parse(e);return this._endPerformanceCounter("Parse JSON"),t},e.prototype._unpackBinaryAsync=function(e){var t=this;return this._startPerformanceCounter("Unpack Binary"),e.loadAsync(20).then((function(){var n=e.readUint32();if(1179937895!==n)throw new Error("Unexpected magic: "+n);var r=e.readUint32();t.loggingEnabled&&t._log("Binary version: "+r);var o,a=e.readUint32();if(0!==e.buffer.byteLength&&a!==e.buffer.byteLength)throw new Error("Length in header does not match actual data length: "+a+" != "+e.buffer.byteLength);switch(r){case 1:o=t._unpackBinaryV1Async(e,a);break;case 2:o=t._unpackBinaryV2Async(e,a);break;default:throw new Error("Unsupported version: "+r)}return t._endPerformanceCounter("Unpack Binary"),o}))},e.prototype._unpackBinaryV1Async=function(e,t){var n=e.readUint32(),r=e.readUint32();if(0!==r)throw new Error("Unexpected content format: "+r);var o=t-e.byteOffset,a={json:this._parseJson(e.readString(n)),bin:null};if(0!==o){var i=e.byteOffset;a.bin={readAsync:function(t,n){return e.buffer.readAsync(i+t,n)},byteLength:o}}return Promise.resolve(a)},e.prototype._unpackBinaryV2Async=function(e,t){var n=this,r=1313821514,o=5130562,a=e.readUint32();if(e.readUint32()!==r)throw new Error("First chunk format is not JSON");return e.byteOffset+a===t?e.loadAsync(a).then((function(){return{json:n._parseJson(e.readString(a)),bin:null}})):e.loadAsync(a+8).then((function(){var i={json:n._parseJson(e.readString(a)),bin:null},s=function(){var n=e.readUint32();switch(e.readUint32()){case r:throw new Error("Unexpected JSON chunk");case o:var a=e.byteOffset;i.bin={readAsync:function(t,n){return e.buffer.readAsync(a+t,n)},byteLength:n},e.skipBytes(n);break;default:e.skipBytes(n)}return e.byteOffset!==t?e.loadAsync(8).then(s):Promise.resolve(i)};return s()}))},e._parseVersion=function(e){if("1.0"===e||"1.0.1"===e)return{major:1,minor:0};var t=(e+"").match(/^(\d+)\.(\d+)/);return t?{major:parseInt(t[1]),minor:parseInt(t[2])}:null},e._compareVersion=function(e,t){return e.major>t.major?1:e.major<t.major?-1:e.minor>t.minor?1:e.minor<t.minor?-1:0},e.prototype._logOpen=function(e){this._log(e),this._logIndentLevel++},e.prototype._logClose=function(){--this._logIndentLevel},e.prototype._logEnabled=function(t){var n=e._logSpaces.substr(0,2*this._logIndentLevel);i.Logger.Log(""+n+t)},e.prototype._logDisabled=function(e){},e.prototype._startPerformanceCounterEnabled=function(e){i.Tools.StartPerformanceCounter(e)},e.prototype._startPerformanceCounterDisabled=function(e){},e.prototype._endPerformanceCounterEnabled=function(e){i.Tools.EndPerformanceCounter(e)},e.prototype._endPerformanceCounterDisabled=function(e){},e.IncrementalLoading=!0,e.HomogeneousCoordinates=!1,e.magicBase64Encoded="Z2xURg",e._logSpaces="                                ",e}();i.SceneLoader&&i.SceneLoader.RegisterPlugin(new l)},function(e,t,n){"use strict";n.r(t),n.d(t,"GLTFValidation",(function(){return i}));var r=n(0);function o(e,t,n,r){var o={externalResourceFunction:function(e){return r(e).then((function(e){return new Uint8Array(e)}))}};return n&&(o.uri="file:"===t?n:t+n),e instanceof ArrayBuffer?GLTFValidator.validateBytes(new Uint8Array(e),o):GLTFValidator.validateString(e,o)}function a(){var e=[];onmessage=function(t){var n=t.data;switch(n.id){case"init":importScripts(n.url);break;case"validate":o(n.data,n.rootUrl,n.fileName,(function(t){return new Promise((function(n,r){var o=e.length;e.push({resolve:n,reject:r}),postMessage({id:"getExternalResource",index:o,uri:t})}))})).then((function(e){postMessage({id:"validate.resolve",value:e})}),(function(e){postMessage({id:"validate.reject",reason:e})}));break;case"getExternalResource.resolve":e[n.index].resolve(n.value);break;case"getExternalResource.reject":e[n.index].reject(n.reason)}}}var i=function(){function e(){}return e.ValidateAsync=function(e,t,n,i){var s=this;return"function"==typeof Worker?new Promise((function(l,u){var c=o+"("+a+")()",d=URL.createObjectURL(new Blob([c],{type:"application/javascript"})),f=new Worker(d),h=function(e){f.removeEventListener("error",h),f.removeEventListener("message",p),u(e)},p=function(e){var t=e.data;switch(t.id){case"getExternalResource":i(t.uri).then((function(e){f.postMessage({id:"getExternalResource.resolve",index:t.index,value:e},[e])}),(function(e){f.postMessage({id:"getExternalResource.reject",index:t.index,reason:e})}));break;case"validate.resolve":f.removeEventListener("error",h),f.removeEventListener("message",p),l(t.value);break;case"validate.reject":f.removeEventListener("error",h),f.removeEventListener("message",p),u(t.reason)}};f.addEventListener("error",h),f.addEventListener("message",p),f.postMessage({id:"init",url:r.Tools.GetAbsoluteUrl(s.Configuration.url)}),f.postMessage({id:"validate",data:e,rootUrl:t,fileName:n})})):(this._LoadScriptPromise||(this._LoadScriptPromise=r.Tools.LoadScriptAsync(this.Configuration.url)),this._LoadScriptPromise.then((function(){return o(e,t,n,i)})))},e.Configuration={url:"https://preview.babylonjs.com/gltf_validator.js"},e}()},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.create;Object.create},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t)},function(e,t,n){"use strict";n.r(t),n.d(t,"EXT_lights_image_based",(function(){return i})),n.d(t,"EXT_mesh_gpu_instancing",(function(){return s})),n.d(t,"EXT_texture_webp",(function(){return l})),n.d(t,"KHR_draco_mesh_compression",(function(){return u})),n.d(t,"KHR_lights",(function(){return c})),n.d(t,"KHR_materials_pbrSpecularGlossiness",(function(){return d})),n.d(t,"KHR_materials_unlit",(function(){return f})),n.d(t,"KHR_materials_clearcoat",(function(){return h})),n.d(t,"KHR_materials_sheen",(function(){return p})),n.d(t,"KHR_materials_specular",(function(){return _})),n.d(t,"KHR_materials_ior",(function(){return m})),n.d(t,"KHR_materials_variants",(function(){return y})),n.d(t,"KHR_materials_transmission",(function(){return g})),n.d(t,"KHR_materials_translucency",(function(){return A})),n.d(t,"KHR_mesh_quantization",(function(){return T})),n.d(t,"KHR_texture_basisu",(function(){return x})),n.d(t,"KHR_texture_transform",(function(){return E})),n.d(t,"MSFT_audio_emitter",(function(){return L})),n.d(t,"MSFT_lod",(function(){return O})),n.d(t,"MSFT_minecraftMesh",(function(){return M})),n.d(t,"MSFT_sRGBFactors",(function(){return S})),n.d(t,"ExtrasAsMetadata",(function(){return w}));var r=n(0),o=n(1),a="EXT_lights_image_based",i=function(){function e(e){this.name=a,this._loader=e,this.enabled=this._loader.isExtensionUsed(a)}return e.prototype.dispose=function(){this._loader=null,delete this._lights},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._lights=t.lights}},e.prototype.loadSceneAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(r,a){var i=new Array;i.push(n._loader.loadSceneAsync(e,t)),n._loader.logOpen(""+r);var s=o.a.Get(r+"/light",n._lights,a.light);return i.push(n._loadLightAsync("/extensions/"+n.name+"/lights/"+a.light,s).then((function(e){n._loader.babylonScene.environmentTexture=e}))),n._loader.logClose(),Promise.all(i).then((function(){}))}))},e.prototype._loadLightAsync=function(e,t){var n=this;if(!t._loaded){var a=new Array;this._loader.logOpen(""+e);for(var i=new Array(t.specularImages.length),s=function(n){var r=t.specularImages[n];i[n]=new Array(r.length);for(var s=function(t){var s=e+"/specularImages/"+n+"/"+t;l._loader.logOpen(""+s);var u=r[t],c=o.a.Get(s,l._loader.gltf.images,u);a.push(l._loader.loadImageAsync("/images/"+u,c).then((function(e){i[n][t]=e}))),l._loader.logClose()},u=0;u<r.length;u++)s(u)},l=this,u=0;u<t.specularImages.length;u++)s(u);this._loader.logClose(),t._loaded=Promise.all(a).then((function(){var e=new r.RawCubeTexture(n._loader.babylonScene,null,t.specularImageSize);if(e.name=t.name||"environment",t._babylonTexture=e,null!=t.intensity&&(e.level=t.intensity),t.rotation){var o=r.Quaternion.FromArray(t.rotation);n._loader.babylonScene.useRightHandedSystem||(o=r.Quaternion.Inverse(o)),r.Matrix.FromQuaternionToRef(o,e.getReflectionTextureMatrix())}var a=r.SphericalHarmonics.FromArray(t.irradianceCoefficients);a.scaleInPlace(t.intensity),a.convertIrradianceToLambertianRadiance();var s=r.SphericalPolynomial.FromHarmonics(a),l=(i.length-1)/r.Scalar.Log2(t.specularImageSize);return e.updateRGBDAsync(i,s,l)}))}return t._loaded.then((function(){return t._babylonTexture}))},e}();o.b.RegisterExtension(a,(function(e){return new i(e)}));var s=function(){function e(e){this.name="EXT_mesh_gpu_instancing",this._loader=e,this.enabled=this._loader.isExtensionUsed("EXT_mesh_gpu_instancing")}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(e,i){a._loader._disableInstancedMesh++;var s=a._loader.loadNodeAsync("/nodes/"+t.index,t,n);if(a._loader._disableInstancedMesh--,!t._primitiveBabylonMeshes)return s;var l=new Array,u=0,c=function(t){if(null!=i.attributes[t]){var n=o.a.Get(e+"/attributes/"+t,a._loader.gltf.accessors,i.attributes[t]);if(l.push(a._loader._loadFloatAccessorAsync("/accessors/"+n.bufferView,n)),0===u)u=n.count;else if(u!==n.count)throw new Error(e+"/attributes: Instance buffer accessors do not have the same count.")}else l.push(Promise.resolve(null))};return c("TRANSLATION"),c("ROTATION"),c("SCALE"),s.then((function(e){return Promise.all(l).then((function(n){var o=n[0],a=n[1],i=n[2],s=new Float32Array(16*u);r.TmpVectors.Vector3[0].copyFromFloats(0,0,0),r.TmpVectors.Quaternion[0].copyFromFloats(0,0,0,1),r.TmpVectors.Vector3[1].copyFromFloats(1,1,1);for(var l=0;l<u;++l)o&&r.Vector3.FromArrayToRef(o,3*l,r.TmpVectors.Vector3[0]),a&&r.Quaternion.FromArrayToRef(a,4*l,r.TmpVectors.Quaternion[0]),i&&r.Vector3.FromArrayToRef(i,3*l,r.TmpVectors.Vector3[1]),r.Matrix.ComposeToRef(r.TmpVectors.Vector3[1],r.TmpVectors.Quaternion[0],r.TmpVectors.Vector3[0],r.TmpVectors.Matrix[0]),r.TmpVectors.Matrix[0].copyToArray(s,16*l);for(var c=0,d=t._primitiveBabylonMeshes;c<d.length;c++){d[c].thinInstanceSetBuffer("matrix",s,16,!0)}return e}))}))}))},e}();o.b.RegisterExtension("EXT_mesh_gpu_instancing",(function(e){return new s(e)}));var l=function(){function e(e){this.name="EXT_texture_webp",this._loader=e,this.enabled=e.isExtensionUsed("EXT_texture_webp")}return e.prototype.dispose=function(){this._loader=null},e.prototype._loadTextureAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(a,i){var s=null==t.sampler?o.b.DefaultSampler:o.a.Get(e+"/sampler",r._loader.gltf.samplers,t.sampler),l=o.a.Get(a+"/source",r._loader.gltf.images,i.source);return r._loader._createTextureAsync(e,s,l,(function(e){n(e)}))}))},e}();o.b.RegisterExtension("EXT_texture_webp",(function(e){return new l(e)}));var u=function(){function e(e){this.name="KHR_draco_mesh_compression",this._loader=e,this.enabled=r.DracoCompression.DecoderAvailable&&this._loader.isExtensionUsed("KHR_draco_mesh_compression")}return e.prototype.dispose=function(){delete this.dracoCompression,this._loader=null},e.prototype._loadVertexDataAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(i,s){if(null!=t.mode){if(5!==t.mode&&4!==t.mode)throw new Error(e+": Unsupported mode "+t.mode);if(5===t.mode)throw new Error(e+": Mode "+t.mode+" is not currently supported")}var l={},u=function(e,t){var r=s.attributes[e];null!=r&&(n._delayInfo=n._delayInfo||[],-1===n._delayInfo.indexOf(t)&&n._delayInfo.push(t),l[t]=r)};u("POSITION",r.VertexBuffer.PositionKind),u("NORMAL",r.VertexBuffer.NormalKind),u("TANGENT",r.VertexBuffer.TangentKind),u("TEXCOORD_0",r.VertexBuffer.UVKind),u("TEXCOORD_1",r.VertexBuffer.UV2Kind),u("JOINTS_0",r.VertexBuffer.MatricesIndicesKind),u("WEIGHTS_0",r.VertexBuffer.MatricesWeightsKind),u("COLOR_0",r.VertexBuffer.ColorKind);var c=o.a.Get(i,a._loader.gltf.bufferViews,s.bufferView);return c._dracoBabylonGeometry||(c._dracoBabylonGeometry=a._loader.loadBufferViewAsync("/bufferViews/"+c.index,c).then((function(t){return(a.dracoCompression||r.DracoCompression.Default).decodeMeshAsync(t,l).then((function(e){var t=new r.Geometry(n.name,a._loader.babylonScene);return e.applyToGeometry(t),t})).catch((function(t){throw new Error(e+": "+t.message)}))}))),c._dracoBabylonGeometry}))},e}();o.b.RegisterExtension("KHR_draco_mesh_compression",(function(e){return new u(e)}));var c=function(){function e(e){this.name="KHR_lights_punctual",this._loader=e,this.enabled=this._loader.isExtensionUsed("KHR_lights_punctual")}return e.prototype.dispose=function(){this._loader=null,delete this._lights},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._lights=t.lights}},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(i,s){return a._loader.loadNodeAsync(e,t,(function(e){var t,l=o.a.Get(i,a._lights,s.light),u=l.name||e.name;switch(a._loader.babylonScene._blockEntityCollection=a._loader._forAssetContainer,l.type){case"directional":t=new r.DirectionalLight(u,r.Vector3.Backward(),a._loader.babylonScene);break;case"point":t=new r.PointLight(u,r.Vector3.Zero(),a._loader.babylonScene);break;case"spot":var c=new r.SpotLight(u,r.Vector3.Zero(),r.Vector3.Backward(),0,1,a._loader.babylonScene);c.angle=2*(l.spot&&l.spot.outerConeAngle||Math.PI/4),c.innerAngle=2*(l.spot&&l.spot.innerConeAngle||0),t=c;break;default:throw a._loader.babylonScene._blockEntityCollection=!1,new Error(i+": Invalid light type ("+l.type+")")}a._loader.babylonScene._blockEntityCollection=!1,t.falloffType=r.Light.FALLOFF_GLTF,t.diffuse=l.color?r.Color3.FromArray(l.color):r.Color3.White(),t.intensity=null==l.intensity?1:l.intensity,t.range=null==l.range?Number.MAX_VALUE:l.range,t.parent=e,a._loader._babylonLights.push(t),o.b.AddPointerMetadata(t,i),n(e)}))}))},e}();o.b.RegisterExtension("KHR_lights_punctual",(function(e){return new c(e)}));var d=function(){function e(e){this.name="KHR_materials_pbrSpecularGlossiness",this.order=200,this._loader=e,this.enabled=this._loader.isExtensionUsed("KHR_materials_pbrSpecularGlossiness")}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(o,a){var i=new Array;return i.push(r._loader.loadMaterialBasePropertiesAsync(e,t,n)),i.push(r._loadSpecularGlossinessPropertiesAsync(o,t,a,n)),r._loader.loadMaterialAlphaProperties(e,t,n),Promise.all(i).then((function(){}))}))},e.prototype._loadSpecularGlossinessPropertiesAsync=function(e,t,n,o){if(!(o instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var a=new Array;return o.metallic=null,o.roughness=null,n.diffuseFactor?(o.albedoColor=r.Color3.FromArray(n.diffuseFactor),o.alpha=n.diffuseFactor[3]):o.albedoColor=r.Color3.White(),o.reflectivityColor=n.specularFactor?r.Color3.FromArray(n.specularFactor):r.Color3.White(),o.microSurface=null==n.glossinessFactor?1:n.glossinessFactor,n.diffuseTexture&&a.push(this._loader.loadTextureInfoAsync(e+"/diffuseTexture",n.diffuseTexture,(function(e){e.name=o.name+" (Diffuse)",o.albedoTexture=e}))),n.specularGlossinessTexture&&(n.specularGlossinessTexture.nonColorData=!0,a.push(this._loader.loadTextureInfoAsync(e+"/specularGlossinessTexture",n.specularGlossinessTexture,(function(e){e.name=o.name+" (Specular Glossiness)",o.reflectivityTexture=e}))),o.reflectivityTexture.hasAlpha=!0,o.useMicroSurfaceFromReflectivityMapAlpha=!0),Promise.all(a).then((function(){}))},e}();o.b.RegisterExtension("KHR_materials_pbrSpecularGlossiness",(function(e){return new d(e)}));var f=function(){function e(e){this.name="KHR_materials_unlit",this.order=210,this._loader=e,this.enabled=this._loader.isExtensionUsed("KHR_materials_unlit")}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(){return r._loadUnlitPropertiesAsync(e,t,n)}))},e.prototype._loadUnlitPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;n.unlit=!0;var a=t.pbrMetallicRoughness;return a&&(a.baseColorFactor?(n.albedoColor=r.Color3.FromArray(a.baseColorFactor),n.alpha=a.baseColorFactor[3]):n.albedoColor=r.Color3.White(),a.baseColorTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/baseColorTexture",a.baseColorTexture,(function(e){e.name=n.name+" (Base Color)",n.albedoTexture=e})))),t.doubleSided&&(n.backFaceCulling=!1,n.twoSidedLighting=!0),this._loader.loadMaterialAlphaProperties(e,t,n),Promise.all(o).then((function(){}))},e}();o.b.RegisterExtension("KHR_materials_unlit",(function(e){return new f(e)}));var h=function(){function e(e){this.name="KHR_materials_clearcoat",this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed("KHR_materials_clearcoat")}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadClearCoatPropertiesAsync(o,a,n)),Promise.all(i).then((function(){}))}))},e.prototype._loadClearCoatPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.clearCoat.isEnabled=!0,n.clearCoat.useRoughnessFromMainTexture=!1,n.clearCoat.remapF0OnInterfaceChange=!1,null!=t.clearcoatFactor?n.clearCoat.intensity=t.clearcoatFactor:n.clearCoat.intensity=0,t.clearcoatTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatTexture",t.clearcoatTexture,(function(e){e.name=n.name+" (ClearCoat Intensity)",n.clearCoat.texture=e}))),null!=t.clearcoatRoughnessFactor?n.clearCoat.roughness=t.clearcoatRoughnessFactor:n.clearCoat.roughness=0,t.clearcoatRoughnessTexture&&(t.clearcoatRoughnessTexture.nonColorData=!0,o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatRoughnessTexture",t.clearcoatRoughnessTexture,(function(e){e.name=n.name+" (ClearCoat Roughness)",n.clearCoat.textureRoughness=e})))),t.clearcoatNormalTexture&&(t.clearcoatNormalTexture.nonColorData=!0,o.push(this._loader.loadTextureInfoAsync(e+"/clearcoatNormalTexture",t.clearcoatNormalTexture,(function(e){e.name=n.name+" (ClearCoat Normal)",n.clearCoat.bumpTexture=e}))),n.invertNormalMapX=!n.getScene().useRightHandedSystem,n.invertNormalMapY=n.getScene().useRightHandedSystem,null!=t.clearcoatNormalTexture.scale&&(n.clearCoat.bumpTexture.level=t.clearcoatNormalTexture.scale)),Promise.all(o).then((function(){}))},e}();o.b.RegisterExtension("KHR_materials_clearcoat",(function(e){return new h(e)}));var p=function(){function e(e){this.name="KHR_materials_sheen",this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed("KHR_materials_sheen")}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadSheenPropertiesAsync(o,a,n)),Promise.all(i).then((function(){}))}))},e.prototype._loadSheenPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return n.sheen.isEnabled=!0,n.sheen.intensity=1,null!=t.sheenColorFactor?n.sheen.color=r.Color3.FromArray(t.sheenColorFactor):n.sheen.color=r.Color3.Black(),t.sheenColorTexture&&o.push(this._loader.loadTextureInfoAsync(e+"/sheenColorTexture",t.sheenColorTexture,(function(e){e.name=n.name+" (Sheen Color)",n.sheen.texture=e}))),void 0!==t.sheenRoughnessFactor?n.sheen.roughness=t.sheenRoughnessFactor:n.sheen.roughness=0,t.sheenRoughnessTexture&&(t.sheenRoughnessTexture.nonColorData=!0,o.push(this._loader.loadTextureInfoAsync(e+"/sheenRoughnessTexture",t.sheenRoughnessTexture,(function(e){e.name=n.name+" (Sheen Roughness)",n.sheen.textureRoughness=e})))),n.sheen.albedoScaling=!0,n.sheen.useRoughnessFromMainTexture=!1,Promise.all(o).then((function(){}))},e}();o.b.RegisterExtension("KHR_materials_sheen",(function(e){return new p(e)}));var _=function(){function e(e){this.name="KHR_materials_specular",this.order=190,this._loader=e,this.enabled=this._loader.isExtensionUsed("KHR_materials_specular")}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadSpecularPropertiesAsync(o,a,n)),Promise.all(i).then((function(){}))}))},e.prototype._loadSpecularPropertiesAsync=function(e,t,n){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var o=new Array;return void 0!==t.specularFactor&&(n.metallicF0Factor=t.specularFactor),void 0!==t.specularColorFactor&&(n.metallicReflectanceColor=r.Color3.FromArray(t.specularColorFactor)),t.specularTexture&&(t.specularTexture.nonColorData=!0,o.push(this._loader.loadTextureInfoAsync(e+"/specularTexture",t.specularTexture,(function(e){e.name=n.name+" (Specular F0 Color)",n.metallicReflectanceTexture=e})))),Promise.all(o).then((function(){}))},e}();o.b.RegisterExtension("KHR_materials_specular",(function(e){return new _(e)}));var m=function(){function e(e){this.name="KHR_materials_ior",this.order=180,this._loader=e,this.enabled=this._loader.isExtensionUsed("KHR_materials_ior")}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(o,a){var i=new Array;return i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadIorPropertiesAsync(o,a,n)),Promise.all(i).then((function(){}))}))},e.prototype._loadIorPropertiesAsync=function(t,n,o){if(!(o instanceof r.PBRMaterial))throw new Error(t+": Material type not supported");return void 0!==n.ior?o.indexOfRefraction=n.ior:o.indexOfRefraction=e._DEFAULT_IOR,Promise.resolve()},e._DEFAULT_IOR=1.5,e}();o.b.RegisterExtension("KHR_materials_ior",(function(e){return new m(e)}));var y=function(){function e(e){this.name="KHR_materials_variants",this._loader=e,this.enabled=this._loader.isExtensionUsed("KHR_materials_variants")}return e.prototype.dispose=function(){this._loader=null},e.GetAvailableVariants=function(e){var t=this._GetExtensionMetadata(e);return t?Object.keys(t.variants):[]},e.prototype.getAvailableVariants=function(t){return e.GetAvailableVariants(t)},e.SelectVariant=function(e,t){var n=this._GetExtensionMetadata(e);if(!n)throw new Error("Cannot select variant on a glTF mesh that does not have the KHR_materials_variants extension");var r=function(e){var t=n.variants[e];if(t)for(var r=0,o=t;r<o.length;r++){var a=o[r];a.mesh.material=a.material}};if(t instanceof Array)for(var o=0,a=t;o<a.length;o++){r(a[o])}else r(t);n.lastSelected=t},e.prototype.selectVariant=function(t,n){return e.SelectVariant(t,n)},e.Reset=function(e){var t=this._GetExtensionMetadata(e);if(!t)throw new Error("Cannot reset on a glTF mesh that does not have the KHR_materials_variants extension");for(var n=0,r=t.original;n<r.length;n++){var o=r[n];o.mesh.material=o.material}t.lastSelected=null},e.prototype.reset=function(t){return e.Reset(t)},e.GetLastSelectedVariant=function(e){var t=this._GetExtensionMetadata(e);if(!t)throw new Error("Cannot get the last selected variant on a glTF mesh that does not have the KHR_materials_variants extension");return t.lastSelected},e.prototype.getLastSelectedVariant=function(t){return e.GetLastSelectedVariant(t)},e._GetExtensionMetadata=function(e){var t,n;return(null===(n=null===(t=null==e?void 0:e.metadata)||void 0===t?void 0:t.gltf)||void 0===n?void 0:n.KHR_materials_variants)||null},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._variants=t.variants}},e.prototype._loadMeshPrimitiveAsync=function(e,t,n,a,i,s){var l=this;return o.b.LoadExtensionAsync(e,i,this.name,(function(u,c){var d=new Array;return d.push(l._loader._loadMeshPrimitiveAsync(e,t,n,a,i,(function(t){if(s(t),t instanceof r.Mesh){var n=o.b._GetDrawMode(e,i.mode),a=l._loader.rootBabylonMesh,f=a.metadata=a.metadata||{},h=f.gltf=f.gltf||{},p=h.KHR_materials_variants=h.KHR_materials_variants||{lastSelected:null,original:[],variants:{}};p.original.push({mesh:t,material:t.material});for(var _=p.variants,m=0,y=c.mappings;m<y.length;m++)for(var b=y[m],v=function(e){var r=o.a.Get(u+"/mapping/"+e,l._variants,e),a=o.a.Get("#/materials/",l._loader.gltf.materials,b.material);d.push(l._loader._loadMaterialAsync("#/materials/"+b.material,a,t,n,(function(e){_[r.name]=_[r.name]||[],_[r.name].push({mesh:t,material:e})})))},g=0,A=b.variants;g<A.length;g++){v(A[g])}}}))),Promise.all(d).then((function(e){return e[0]}))}))},e}();o.b.RegisterExtension("KHR_materials_variants",(function(e){return new y(e)}));var b=n(4),v=function(){function e(t,n){var o=this;this._opaqueRenderTarget=null,this._opaqueMeshesCache=[],this._transparentMeshesCache=[],this._options=Object(b.a)(Object(b.a)({},e._getDefaultOptions()),t),this._scene=n,this._scene._transmissionHelper=this,this.onErrorObservable=new r.Observable,this._scene.onDisposeObservable.addOnce((function(e){o.dispose()})),this._parseScene(),this._setupRenderTargets()}return e._getDefaultOptions=function(){return{renderSize:512}},e.prototype.updateOptions=function(e){var t=this;if(Object.keys(e).filter((function(n){return t._options[n]!==e[n]})).length){var n=Object(b.a)(Object(b.a)({},this._options),e),r=this._options;this._options=n,n.renderSize!==r.renderSize&&this._setupRenderTargets()}},e.prototype.getOpaqueTarget=function(){return this._opaqueRenderTarget},e.prototype.shouldRenderAsTransmission=function(e){return!!e&&!!(e instanceof r.PBRMaterial&&e.subSurface.isRefractionEnabled)},e.prototype._addMesh=function(e){e instanceof r.Mesh&&(e.onMaterialChangedObservable.add(this.onMeshMaterialChanged.bind(this)),this.shouldRenderAsTransmission(e.material)?this._transparentMeshesCache.push(e):this._opaqueMeshesCache.push(e))},e.prototype._removeMesh=function(e){if(e instanceof r.Mesh){e.onMaterialChangedObservable.remove(this.onMeshMaterialChanged.bind(this));var t=this._transparentMeshesCache.indexOf(e);-1!==t&&this._transparentMeshesCache.splice(t,1),-1!==(t=this._opaqueMeshesCache.indexOf(e))&&this._opaqueMeshesCache.splice(t,1)}},e.prototype._parseScene=function(){this._scene.meshes.forEach(this._addMesh.bind(this)),this._scene.onNewMeshAddedObservable.add(this._addMesh.bind(this)),this._scene.onMeshRemovedObservable.add(this._removeMesh.bind(this))},e.prototype.onMeshMaterialChanged=function(e){if(e instanceof r.Mesh){var t=this._transparentMeshesCache.indexOf(e),n=this._opaqueMeshesCache.indexOf(e);this.shouldRenderAsTransmission(e.material)?(e.material instanceof r.PBRMaterial&&(e.material.subSurface.refractionTexture=this._opaqueRenderTarget),-1!==n?(this._opaqueMeshesCache.splice(n,1),this._transparentMeshesCache.push(e)):-1===t&&this._transparentMeshesCache.push(e)):-1!==t?(this._transparentMeshesCache.splice(t,1),this._opaqueMeshesCache.push(e)):-1===n&&this._opaqueMeshesCache.push(e)}},e.prototype._setupRenderTargets=function(){var e=this,t=-1;if(this._scene.layers&&this._opaqueRenderTarget)for(var n=0,o=this._scene.layers;n<o.length;n++){var a=(l=o[n]).renderTargetTextures.indexOf(this._opaqueRenderTarget);a>=0&&l.renderTargetTextures.splice(a,1)}if(this._opaqueRenderTarget&&(t=this._scene.customRenderTargets.indexOf(this._opaqueRenderTarget),this._opaqueRenderTarget.dispose()),this._opaqueRenderTarget=new r.RenderTargetTexture("opaqueSceneTexture",this._options.renderSize,this._scene,!0),this._opaqueRenderTarget.renderList=this._opaqueMeshesCache,this._opaqueRenderTarget.gammaSpace=!0,this._opaqueRenderTarget.lodGenerationScale=1,this._opaqueRenderTarget.lodGenerationOffset=-4,t>=0?this._scene.customRenderTargets.splice(t,0,this._opaqueRenderTarget):(t=this._scene.customRenderTargets.length,this._scene.customRenderTargets.push(this._opaqueRenderTarget)),this._scene.layers&&this._opaqueRenderTarget)for(var i=0,s=this._scene.layers;i<s.length;i++){var l;(l=s[i]).renderTargetTextures.push(this._opaqueRenderTarget)}this._transparentMeshesCache.forEach((function(t){e.shouldRenderAsTransmission(t.material)&&t.material instanceof r.PBRMaterial&&(t.material.refractionTexture=e._opaqueRenderTarget)}))},e.prototype.dispose=function(){this._scene._transmissionHelper=void 0,this._opaqueRenderTarget&&(this._opaqueRenderTarget.dispose(),this._opaqueRenderTarget=null),this._transparentMeshesCache=[],this._opaqueMeshesCache=[]},e}(),g=function(){function e(e){this.name="KHR_materials_transmission",this.order=175,this._loader=e,this.enabled=this._loader.isExtensionUsed("KHR_materials_transmission"),this.enabled&&(e.parent.transparencyAsCoverage=!0)}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(o,a){var i=new Array;return i.push(r._loader.loadMaterialBasePropertiesAsync(e,t,n)),i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadTransparentPropertiesAsync(o,t,n,a)),Promise.all(i).then((function(){}))}))},e.prototype._loadTransparentPropertiesAsync=function(e,t,n,o){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var a=n;if(a.subSurface.isRefractionEnabled=!0,a.subSurface.volumeIndexOfRefraction=1,a.subSurface.useAlbedoToTintRefraction=!0,void 0===o.transmissionFactor)return a.subSurface.refractionIntensity=0,a.subSurface.isRefractionEnabled=!1,Promise.resolve();a.subSurface.refractionIntensity=o.transmissionFactor;var i=a.getScene();return a.subSurface.refractionIntensity&&!i._transmissionHelper&&new v({},a.getScene()),o.transmissionTexture?(o.transmissionTexture.nonColorData=!0,this._loader.loadTextureInfoAsync(e+"/transmissionTexture",o.transmissionTexture,void 0).then((function(e){a.subSurface.thicknessTexture=e,a.subSurface.useMaskFromThicknessTextureGltf=!0}))):Promise.resolve()},e}();o.b.RegisterExtension("KHR_materials_transmission",(function(e){return new g(e)}));var A=function(){function e(e){this.name="KHR_materials_translucency",this.order=175,this._loader=e,this.enabled=this._loader.isExtensionUsed("KHR_materials_translucency"),this.enabled&&(e.parent.transparencyAsCoverage=!0)}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(o,a){var i=new Array;return i.push(r._loader.loadMaterialBasePropertiesAsync(e,t,n)),i.push(r._loader.loadMaterialPropertiesAsync(e,t,n)),i.push(r._loadTranslucentPropertiesAsync(o,t,n,a)),Promise.all(i).then((function(){}))}))},e.prototype._loadTranslucentPropertiesAsync=function(e,t,n,o){if(!(n instanceof r.PBRMaterial))throw new Error(e+": Material type not supported");var a=n;return a.subSurface.isTranslucencyEnabled=!0,a.subSurface.volumeIndexOfRefraction=1,a.subSurface.minimumThickness=0,a.subSurface.maximumThickness=0,a.subSurface.useAlbedoToTintRefraction=!0,void 0===o.translucencyFactor?(a.subSurface.translucencyIntensity=0,a.subSurface.isTranslucencyEnabled=!1,Promise.resolve()):(a.subSurface.translucencyIntensity=o.translucencyFactor,o.translucencyTexture?this._loader.loadTextureInfoAsync(e+"/translucencyTexture",o.translucencyTexture).then((function(e){a.subSurface.thicknessTexture=e,a.subSurface.useMaskFromThicknessTextureGltf=!0})):Promise.resolve())},e}();o.b.RegisterExtension("KHR_materials_translucency",(function(e){return new A(e)}));var T=function(){function e(e){this.name="KHR_mesh_quantization",this.enabled=e.isExtensionUsed("KHR_mesh_quantization")}return e.prototype.dispose=function(){},e}();o.b.RegisterExtension("KHR_mesh_quantization",(function(e){return new T(e)}));var x=function(){function e(e){this.name="KHR_texture_basisu",this._loader=e,this.enabled=e.isExtensionUsed("KHR_texture_basisu")}return e.prototype.dispose=function(){this._loader=null},e.prototype._loadTextureAsync=function(e,t,n){var r=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(a,i){var s=null==t.sampler?o.b.DefaultSampler:o.a.Get(e+"/sampler",r._loader.gltf.samplers,t.sampler),l=o.a.Get(a+"/source",r._loader.gltf.images,i.source);return r._loader._createTextureAsync(e,s,l,(function(e){n(e)}),t._textureInfo.nonColorData?{useRGBAIfASTCBC7NotAvailableWhenUASTC:!0}:void 0)}))},e}();o.b.RegisterExtension("KHR_texture_basisu",(function(e){return new x(e)}));var E=function(){function e(e){this.name="KHR_texture_transform",this._loader=e,this.enabled=this._loader.isExtensionUsed("KHR_texture_transform")}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadTextureInfoAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(o,i){return a._loader.loadTextureInfoAsync(e,t,(function(e){if(!(e instanceof r.Texture))throw new Error(o+": Texture type not supported");i.offset&&(e.uOffset=i.offset[0],e.vOffset=i.offset[1]),e.uRotationCenter=0,e.vRotationCenter=0,i.rotation&&(e.wAng=-i.rotation),i.scale&&(e.uScale=i.scale[0],e.vScale=i.scale[1]),null!=i.texCoord&&(e.coordinatesIndex=i.texCoord),n(e)}))}))},e}();o.b.RegisterExtension("KHR_texture_transform",(function(e){return new E(e)}));var L=function(){function e(e){this.name="MSFT_audio_emitter",this._loader=e,this.enabled=this._loader.isExtensionUsed("MSFT_audio_emitter")}return e.prototype.dispose=function(){this._loader=null,this._clips=null,this._emitters=null},e.prototype.onLoading=function(){var e=this._loader.gltf.extensions;if(e&&e[this.name]){var t=e[this.name];this._clips=t.clips,this._emitters=t.emitters,o.a.Assign(this._clips),o.a.Assign(this._emitters)}},e.prototype.loadSceneAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(r,a){var i=new Array;i.push(n._loader.loadSceneAsync(e,t));for(var s=0,l=a.emitters;s<l.length;s++){var u=l[s],c=o.a.Get(r+"/emitters",n._emitters,u);if(null!=c.refDistance||null!=c.maxDistance||null!=c.rolloffFactor||null!=c.distanceModel||null!=c.innerAngle||null!=c.outerAngle)throw new Error(r+": Direction or Distance properties are not allowed on emitters attached to a scene");i.push(n._loadEmitterAsync(r+"/emitters/"+c.index,c))}return Promise.all(i).then((function(){}))}))},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(e,i){var s=new Array;return a._loader.loadNodeAsync(e,t,(function(t){for(var l=function(n){var i=o.a.Get(e+"/emitters",a._emitters,n);s.push(a._loadEmitterAsync(e+"/emitters/"+i.index,i).then((function(){for(var e=0,n=i._babylonSounds;e<n.length;e++){var o=n[e];o.attachToMesh(t),null==i.innerAngle&&null==i.outerAngle||(o.setLocalDirectionToMesh(r.Vector3.Forward()),o.setDirectionalCone(2*r.Tools.ToDegrees(null==i.innerAngle?Math.PI:i.innerAngle),2*r.Tools.ToDegrees(null==i.outerAngle?Math.PI:i.outerAngle),0))}})))},u=0,c=i.emitters;u<c.length;u++){l(c[u])}n(t)})).then((function(e){return Promise.all(s).then((function(){return e}))}))}))},e.prototype.loadAnimationAsync=function(e,t){var n=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(r,a){return n._loader.loadAnimationAsync(e,t).then((function(i){var s=new Array;o.a.Assign(a.events);for(var l=0,u=a.events;l<u.length;l++){var c=u[l];s.push(n._loadAnimationEventAsync(r+"/events/"+c.index,e,t,c,i))}return Promise.all(s).then((function(){return i}))}))}))},e.prototype._loadClipAsync=function(e,t){if(t._objectURL)return t._objectURL;var n;if(t.uri)n=this._loader.loadUriAsync(e,t,t.uri);else{var r=o.a.Get(e+"/bufferView",this._loader.gltf.bufferViews,t.bufferView);n=this._loader.loadBufferViewAsync("/bufferViews/"+r.index,r)}return t._objectURL=n.then((function(e){return URL.createObjectURL(new Blob([e],{type:t.mimeType}))})),t._objectURL},e.prototype._loadEmitterAsync=function(e,t){var n=this;if(t._babylonSounds=t._babylonSounds||[],!t._babylonData){for(var a=new Array,i=t.name||"emitter"+t.index,s={loop:!1,autoplay:!1,volume:null==t.volume?1:t.volume},l=function(e){var l="/extensions/"+u.name+"/clips",c=o.a.Get(l,u._clips,t.clips[e].clip);a.push(u._loadClipAsync(l+"/"+t.clips[e].clip,c).then((function(o){var a=t._babylonSounds[e]=new r.Sound(i,o,n._loader.babylonScene,null,s);a.refDistance=t.refDistance||1,a.maxDistance=t.maxDistance||256,a.rolloffFactor=t.rolloffFactor||1,a.distanceModel=t.distanceModel||"exponential",a._positionInEmitterSpace=!0})))},u=this,c=0;c<t.clips.length;c++)l(c);var d=Promise.all(a).then((function(){var e=t.clips.map((function(e){return e.weight||1})),n=new r.WeightedSound(t.loop||!1,t._babylonSounds,e);t.innerAngle&&(n.directionalConeInnerAngle=2*r.Tools.ToDegrees(t.innerAngle)),t.outerAngle&&(n.directionalConeOuterAngle=2*r.Tools.ToDegrees(t.outerAngle)),t.volume&&(n.volume=t.volume),t._babylonData.sound=n}));t._babylonData={loaded:d}}return t._babylonData.loaded},e.prototype._getEventAction=function(e,t,n,r,o){switch(n){case"play":return function(e){var n=(o||0)+(e-r);t.play(n)};case"stop":return function(e){t.stop()};case"pause":return function(e){t.pause()};default:throw new Error(e+": Unsupported action "+n)}},e.prototype._loadAnimationEventAsync=function(e,t,n,a,i){var s=this;if(0==i.targetedAnimations.length)return Promise.resolve();var l=i.targetedAnimations[0],u=a.emitter,c=o.a.Get("/extensions/"+this.name+"/emitters",this._emitters,u);return this._loadEmitterAsync(e,c).then((function(){var t=c._babylonData.sound;if(t){var n=new r.AnimationEvent(a.time,s._getEventAction(e,t,a.action,a.time,a.startOffset));l.animation.addEvent(n),i.onAnimationGroupEndObservable.add((function(){t.stop()})),i.onAnimationGroupPauseObservable.add((function(){t.pause()}))}}))},e}();o.b.RegisterExtension("MSFT_audio_emitter",(function(e){return new L(e)}));var O=function(){function e(e){this.name="MSFT_lod",this.order=100,this.maxLODsToLoad=10,this.onNodeLODsLoadedObservable=new r.Observable,this.onMaterialLODsLoadedObservable=new r.Observable,this._bufferLODs=new Array,this._nodeIndexLOD=null,this._nodeSignalLODs=new Array,this._nodePromiseLODs=new Array,this._nodeBufferLODs=new Array,this._materialIndexLOD=null,this._materialSignalLODs=new Array,this._materialPromiseLODs=new Array,this._materialBufferLODs=new Array,this._loader=e,this.enabled=this._loader.isExtensionUsed("MSFT_lod")}return e.prototype.dispose=function(){this._loader=null,this._nodeIndexLOD=null,this._nodeSignalLODs.length=0,this._nodePromiseLODs.length=0,this._nodeBufferLODs.length=0,this._materialIndexLOD=null,this._materialSignalLODs.length=0,this._materialPromiseLODs.length=0,this._materialBufferLODs.length=0,this.onMaterialLODsLoadedObservable.clear(),this.onNodeLODsLoadedObservable.clear()},e.prototype.onReady=function(){for(var e=this,t=function(t){var r=Promise.all(n._nodePromiseLODs[t]).then((function(){0!==t&&(e._loader.endPerformanceCounter("Node LOD "+t),e._loader.log("Loaded node LOD "+t)),e.onNodeLODsLoadedObservable.notifyObservers(t),t!==e._nodePromiseLODs.length-1&&(e._loader.startPerformanceCounter("Node LOD "+(t+1)),e._loadBufferLOD(e._nodeBufferLODs,t+1),e._nodeSignalLODs[t]&&e._nodeSignalLODs[t].resolve())}));n._loader._completePromises.push(r)},n=this,r=0;r<this._nodePromiseLODs.length;r++)t(r);var o=function(t){var n=Promise.all(a._materialPromiseLODs[t]).then((function(){0!==t&&(e._loader.endPerformanceCounter("Material LOD "+t),e._loader.log("Loaded material LOD "+t)),e.onMaterialLODsLoadedObservable.notifyObservers(t),t!==e._materialPromiseLODs.length-1&&(e._loader.startPerformanceCounter("Material LOD "+(t+1)),e._loadBufferLOD(e._materialBufferLODs,t+1),e._materialSignalLODs[t]&&e._materialSignalLODs[t].resolve())}));a._loader._completePromises.push(n)},a=this;for(r=0;r<this._materialPromiseLODs.length;r++)o(r)},e.prototype.loadSceneAsync=function(e,t){var n=this._loader.loadSceneAsync(e,t);return this._loadBufferLOD(this._bufferLODs,0),n},e.prototype.loadNodeAsync=function(e,t,n){var a=this;return o.b.LoadExtensionAsync(e,t,this.name,(function(e,n){var o,i=a._getLODs(e,t,a._loader.gltf.nodes,n.ids);a._loader.logOpen(""+e);for(var s=function(e){var t=i[e];0!==e&&(a._nodeIndexLOD=e,a._nodeSignalLODs[e]=a._nodeSignalLODs[e]||new r.Deferred);var n=a._loader.loadNodeAsync("/nodes/"+t.index,t,(function(e){e.setEnabled(!1)})).then((function(t){if(0!==e){var n=i[e-1];n._babylonTransformNode&&(a._disposeTransformNode(n._babylonTransformNode),delete n._babylonTransformNode)}return t.setEnabled(!0),t}));a._nodePromiseLODs[e]=a._nodePromiseLODs[e]||[],0===e?o=n:(a._nodeIndexLOD=null,a._nodePromiseLODs[e].push(n))},l=0;l<i.length;l++)s(l);return a._loader.logClose(),o}))},e.prototype._loadMaterialAsync=function(e,t,n,r,a){var i=this;return this._nodeIndexLOD?null:o.b.LoadExtensionAsync(e,t,this.name,(function(e,o){var s,l=i._getLODs(e,t,i._loader.gltf.materials,o.ids);i._loader.logOpen(""+e);for(var u=function(e){var t=l[e];0!==e&&(i._materialIndexLOD=e);var o=i._loader._loadMaterialAsync("/materials/"+t.index,t,n,r,(function(t){0===e&&a(t)})).then((function(t){if(0!==e){a(t);var n=l[e-1]._data;n[r]&&(i._disposeMaterials([n[r].babylonMaterial]),delete n[r])}return t}));i._materialPromiseLODs[e]=i._materialPromiseLODs[e]||[],0===e?s=o:(i._materialIndexLOD=null,i._materialPromiseLODs[e].push(o))},c=0;c<l.length;c++)u(c);return i._loader.logClose(),s}))},e.prototype._loadUriAsync=function(e,t,n){var o=this;if(null!==this._nodeIndexLOD){this._loader.log("deferred");var a=this._nodeIndexLOD-1;return this._nodeSignalLODs[a]=this._nodeSignalLODs[a]||new r.Deferred,this._nodeSignalLODs[this._nodeIndexLOD-1].promise.then((function(){return o._loader.loadUriAsync(e,t,n)}))}if(null!==this._materialIndexLOD){this._loader.log("deferred");a=this._materialIndexLOD-1;return this._materialSignalLODs[a]=this._materialSignalLODs[a]||new r.Deferred,this._materialSignalLODs[a].promise.then((function(){return o._loader.loadUriAsync(e,t,n)}))}return null},e.prototype.loadBufferAsync=function(e,t,n,o){if(this._loader.parent.useRangeRequests&&!t.uri){if(!this._loader.bin)throw new Error(e+": Uri is missing or the binary glTF is missing its binary chunk");var a=function(e,t){var a=n,i=a+o-1,s=e[t];return s?(s.start=Math.min(s.start,a),s.end=Math.max(s.end,i)):(s={start:a,end:i,loaded:new r.Deferred},e[t]=s),s.loaded.promise.then((function(e){return new Uint8Array(e.buffer,e.byteOffset+n-s.start,o)}))};return this._loader.log("deferred"),null!==this._nodeIndexLOD?a(this._nodeBufferLODs,this._nodeIndexLOD):null!==this._materialIndexLOD?a(this._materialBufferLODs,this._materialIndexLOD):a(this._bufferLODs,0)}return null},e.prototype._loadBufferLOD=function(e,t){var n=e[t];n&&(this._loader.log("Loading buffer range ["+n.start+"-"+n.end+"]"),this._loader.bin.readAsync(n.start,n.end-n.start+1).then((function(e){n.loaded.resolve(e)}),(function(e){n.loaded.reject(e)})))},e.prototype._getLODs=function(e,t,n,r){if(this.maxLODsToLoad<=0)throw new Error("maxLODsToLoad must be greater than zero");for(var a=new Array,i=r.length-1;i>=0;i--)if(a.push(o.a.Get(e+"/ids/"+r[i],n,r[i])),a.length===this.maxLODsToLoad)return a;return a.push(t),a},e.prototype._disposeTransformNode=function(e){var t=this,n=new Array,r=e.material;r&&n.push(r);for(var o=0,a=e.getChildMeshes();o<a.length;o++){var i=a[o];i.material&&n.push(i.material)}e.dispose();var s=n.filter((function(e){return t._loader.babylonScene.meshes.every((function(t){return t.material!=e}))}));this._disposeMaterials(s)},e.prototype._disposeMaterials=function(e){for(var t={},n=0,r=e;n<r.length;n++){for(var o=0,a=(c=r[n]).getActiveTextures();o<a.length;o++){var i=a[o];t[i.uniqueId]=i}c.dispose()}for(var s in t)for(var l=0,u=this._loader.babylonScene.materials;l<u.length;l++){var c;(c=u[l]).hasTexture(t[s])&&delete t[s]}for(var s in t)t[s].dispose()},e}();o.b.RegisterExtension("MSFT_lod",(function(e){return new O(e)}));var M=function(){function e(e){this.name="MSFT_minecraftMesh",this._loader=e,this.enabled=this._loader.isExtensionUsed("MSFT_minecraftMesh")}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var a=this;return o.b.LoadExtraAsync(e,t,this.name,(function(o,i){if(i){if(!(n instanceof r.PBRMaterial))throw new Error(o+": Material type not supported");var s=a._loader.loadMaterialPropertiesAsync(e,t,n);return n.needAlphaBlending()&&(n.forceDepthWrite=!0,n.separateCullingPass=!0),n.backFaceCulling=n.forceDepthWrite,n.twoSidedLighting=!0,s}return null}))},e}();o.b.RegisterExtension("MSFT_minecraftMesh",(function(e){return new M(e)}));var S=function(){function e(e){this.name="MSFT_sRGBFactors",this._loader=e,this.enabled=this._loader.isExtensionUsed("MSFT_sRGBFactors")}return e.prototype.dispose=function(){this._loader=null},e.prototype.loadMaterialPropertiesAsync=function(e,t,n){var a=this;return o.b.LoadExtraAsync(e,t,this.name,(function(o,i){if(i){if(!(n instanceof r.PBRMaterial))throw new Error(o+": Material type not supported");var s=a._loader.loadMaterialPropertiesAsync(e,t,n);return n.albedoTexture||n.albedoColor.toLinearSpaceToRef(n.albedoColor),n.reflectivityTexture||n.reflectivityColor.toLinearSpaceToRef(n.reflectivityColor),s}return null}))},e}();o.b.RegisterExtension("MSFT_sRGBFactors",(function(e){return new S(e)}));var w=function(){function e(e){this.name="ExtrasAsMetadata",this.enabled=!0,this._loader=e}return e.prototype._assignExtras=function(e,t){if(t.extras&&Object.keys(t.extras).length>0){var n=e.metadata=e.metadata||{};(n.gltf=n.gltf||{}).extras=t.extras}},e.prototype.dispose=function(){this._loader=null},e.prototype.loadNodeAsync=function(e,t,n){var r=this;return this._loader.loadNodeAsync(e,t,(function(e){r._assignExtras(e,t),n(e)}))},e.prototype.loadCameraAsync=function(e,t,n){var r=this;return this._loader.loadCameraAsync(e,t,(function(e){r._assignExtras(e,t),n(e)}))},e.prototype.createMaterial=function(e,t,n){var r=this._loader.createMaterial(e,t,n);return this._assignExtras(r,t),r},e}();o.b.RegisterExtension("ExtrasAsMetadata",(function(e){return new w(e)}))},function(e,t,n){"use strict";n.r(t),n.d(t,"GLTFBinaryExtension",(function(){return k})),n.d(t,"GLTFLoaderBase",(function(){return D})),n.d(t,"GLTFLoader",(function(){return G})),n.d(t,"GLTFLoaderExtension",(function(){return U})),n.d(t,"EComponentType",(function(){return r})),n.d(t,"EShaderType",(function(){return o})),n.d(t,"EParameterType",(function(){return a})),n.d(t,"ETextureWrapMode",(function(){return i})),n.d(t,"ETextureFilterType",(function(){return s})),n.d(t,"ETextureFormat",(function(){return l})),n.d(t,"ECullingType",(function(){return u})),n.d(t,"EBlendingFunction",(function(){return c})),n.d(t,"GLTFUtils",(function(){return p})),n.d(t,"GLTFMaterialsCommonExtension",(function(){return H}));var r,o,a,i,s,l,u,c,d=n(4);!function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.FLOAT=5126]="FLOAT"}(r||(r={})),function(e){e[e.FRAGMENT=35632]="FRAGMENT",e[e.VERTEX=35633]="VERTEX"}(o||(o={})),function(e){e[e.BYTE=5120]="BYTE",e[e.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",e[e.SHORT=5122]="SHORT",e[e.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",e[e.INT=5124]="INT",e[e.UNSIGNED_INT=5125]="UNSIGNED_INT",e[e.FLOAT=5126]="FLOAT",e[e.FLOAT_VEC2=35664]="FLOAT_VEC2",e[e.FLOAT_VEC3=35665]="FLOAT_VEC3",e[e.FLOAT_VEC4=35666]="FLOAT_VEC4",e[e.INT_VEC2=35667]="INT_VEC2",e[e.INT_VEC3=35668]="INT_VEC3",e[e.INT_VEC4=35669]="INT_VEC4",e[e.BOOL=35670]="BOOL",e[e.BOOL_VEC2=35671]="BOOL_VEC2",e[e.BOOL_VEC3=35672]="BOOL_VEC3",e[e.BOOL_VEC4=35673]="BOOL_VEC4",e[e.FLOAT_MAT2=35674]="FLOAT_MAT2",e[e.FLOAT_MAT3=35675]="FLOAT_MAT3",e[e.FLOAT_MAT4=35676]="FLOAT_MAT4",e[e.SAMPLER_2D=35678]="SAMPLER_2D"}(a||(a={})),function(e){e[e.CLAMP_TO_EDGE=33071]="CLAMP_TO_EDGE",e[e.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",e[e.REPEAT=10497]="REPEAT"}(i||(i={})),function(e){e[e.NEAREST=9728]="NEAREST",e[e.LINEAR=9728]="LINEAR",e[e.NEAREST_MIPMAP_NEAREST=9984]="NEAREST_MIPMAP_NEAREST",e[e.LINEAR_MIPMAP_NEAREST=9985]="LINEAR_MIPMAP_NEAREST",e[e.NEAREST_MIPMAP_LINEAR=9986]="NEAREST_MIPMAP_LINEAR",e[e.LINEAR_MIPMAP_LINEAR=9987]="LINEAR_MIPMAP_LINEAR"}(s||(s={})),function(e){e[e.ALPHA=6406]="ALPHA",e[e.RGB=6407]="RGB",e[e.RGBA=6408]="RGBA",e[e.LUMINANCE=6409]="LUMINANCE",e[e.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA"}(l||(l={})),function(e){e[e.FRONT=1028]="FRONT",e[e.BACK=1029]="BACK",e[e.FRONT_AND_BACK=1032]="FRONT_AND_BACK"}(u||(u={})),function(e){e[e.ZERO=0]="ZERO",e[e.ONE=1]="ONE",e[e.SRC_COLOR=768]="SRC_COLOR",e[e.ONE_MINUS_SRC_COLOR=769]="ONE_MINUS_SRC_COLOR",e[e.DST_COLOR=774]="DST_COLOR",e[e.ONE_MINUS_DST_COLOR=775]="ONE_MINUS_DST_COLOR",e[e.SRC_ALPHA=770]="SRC_ALPHA",e[e.ONE_MINUS_SRC_ALPHA=771]="ONE_MINUS_SRC_ALPHA",e[e.DST_ALPHA=772]="DST_ALPHA",e[e.ONE_MINUS_DST_ALPHA=773]="ONE_MINUS_DST_ALPHA",e[e.CONSTANT_COLOR=32769]="CONSTANT_COLOR",e[e.ONE_MINUS_CONSTANT_COLOR=32770]="ONE_MINUS_CONSTANT_COLOR",e[e.CONSTANT_ALPHA=32771]="CONSTANT_ALPHA",e[e.ONE_MINUS_CONSTANT_ALPHA=32772]="ONE_MINUS_CONSTANT_ALPHA",e[e.SRC_ALPHA_SATURATE=776]="SRC_ALPHA_SATURATE"}(c||(c={}));var f,h=n(0),p=function(){function e(){}return e.SetMatrix=function(e,t,n,r,o){var i=null;if("MODEL"===n.semantic?i=t.getWorldMatrix():"PROJECTION"===n.semantic?i=e.getProjectionMatrix():"VIEW"===n.semantic?i=e.getViewMatrix():"MODELVIEWINVERSETRANSPOSE"===n.semantic?i=h.Matrix.Transpose(t.getWorldMatrix().multiply(e.getViewMatrix()).invert()):"MODELVIEW"===n.semantic?i=t.getWorldMatrix().multiply(e.getViewMatrix()):"MODELVIEWPROJECTION"===n.semantic?i=t.getWorldMatrix().multiply(e.getTransformMatrix()):"MODELINVERSE"===n.semantic?i=t.getWorldMatrix().invert():"VIEWINVERSE"===n.semantic?i=e.getViewMatrix().invert():"PROJECTIONINVERSE"===n.semantic?i=e.getProjectionMatrix().invert():"MODELVIEWINVERSE"===n.semantic?i=t.getWorldMatrix().multiply(e.getViewMatrix()).invert():"MODELVIEWPROJECTIONINVERSE"===n.semantic?i=t.getWorldMatrix().multiply(e.getTransformMatrix()).invert():"MODELINVERSETRANSPOSE"===n.semantic&&(i=h.Matrix.Transpose(t.getWorldMatrix().invert())),i)switch(n.type){case a.FLOAT_MAT2:o.setMatrix2x2(r,h.Matrix.GetAsMatrix2x2(i));break;case a.FLOAT_MAT3:o.setMatrix3x3(r,h.Matrix.GetAsMatrix3x3(i));break;case a.FLOAT_MAT4:o.setMatrix(r,i)}},e.SetUniform=function(e,t,n,r){switch(r){case a.FLOAT:return e.setFloat(t,n),!0;case a.FLOAT_VEC2:return e.setVector2(t,h.Vector2.FromArray(n)),!0;case a.FLOAT_VEC3:return e.setVector3(t,h.Vector3.FromArray(n)),!0;case a.FLOAT_VEC4:return e.setVector4(t,h.Vector4.FromArray(n)),!0;default:return!1}},e.GetWrapMode=function(e){switch(e){case i.CLAMP_TO_EDGE:return h.Texture.CLAMP_ADDRESSMODE;case i.MIRRORED_REPEAT:return h.Texture.MIRROR_ADDRESSMODE;case i.REPEAT:default:return h.Texture.WRAP_ADDRESSMODE}},e.GetByteStrideFromType=function(e){switch(e.type){case"VEC2":return 2;case"VEC3":return 3;case"VEC4":case"MAT2":return 4;case"MAT3":return 9;case"MAT4":return 16;default:return 1}},e.GetTextureFilterMode=function(e){switch(e){case s.LINEAR:case s.LINEAR_MIPMAP_NEAREST:case s.LINEAR_MIPMAP_LINEAR:return h.Texture.TRILINEAR_SAMPLINGMODE;case s.NEAREST:case s.NEAREST_MIPMAP_NEAREST:return h.Texture.NEAREST_SAMPLINGMODE;default:return h.Texture.BILINEAR_SAMPLINGMODE}},e.GetBufferFromBufferView=function(e,t,n,o,a){n=t.byteOffset+n;var i=e.loadedBufferViews[t.buffer];if(n+o>i.byteLength)throw new Error("Buffer access is out of range");var s=i.buffer;switch(n+=i.byteOffset,a){case r.BYTE:return new Int8Array(s,n,o);case r.UNSIGNED_BYTE:return new Uint8Array(s,n,o);case r.SHORT:return new Int16Array(s,n,o);case r.UNSIGNED_SHORT:return new Uint16Array(s,n,o);default:return new Float32Array(s,n,o)}},e.GetBufferFromAccessor=function(t,n){var r=t.bufferViews[n.bufferView],o=n.count*e.GetByteStrideFromType(n);return e.GetBufferFromBufferView(t,r,n.byteOffset,o,n.componentType)},e.DecodeBufferToText=function(e){for(var t="",n=e.byteLength,r=0;r<n;++r)t+=String.fromCharCode(e[r]);return t},e.GetDefaultMaterial=function(t){if(!e._DefaultMaterial){h.Effect.ShadersStore.GLTFDefaultMaterialVertexShader=["precision highp float;","","uniform mat4 worldView;","uniform mat4 projection;","","attribute vec3 position;","","void main(void)","{","    gl_Position = projection * worldView * vec4(position, 1.0);","}"].join("\n"),h.Effect.ShadersStore.GLTFDefaultMaterialPixelShader=["precision highp float;","","uniform vec4 u_emission;","","void main(void)","{","    gl_FragColor = u_emission;","}"].join("\n");var n={attributes:["position"],uniforms:["worldView","projection","u_emission"],samplers:new Array,needAlphaBlending:!1};e._DefaultMaterial=new h.ShaderMaterial("GLTFDefaultMaterial",t,{vertex:"GLTFDefaultMaterial",fragment:"GLTFDefaultMaterial"},n),e._DefaultMaterial.setColor4("u_emission",new h.Color4(.5,.5,.5,1))}return e._DefaultMaterial},e._DefaultMaterial=null,e}(),_=n(2);!function(e){e[e.IDENTIFIER=1]="IDENTIFIER",e[e.UNKNOWN=2]="UNKNOWN",e[e.END_OF_INPUT=3]="END_OF_INPUT"}(f||(f={}));var m=function(){function e(e){this._pos=0,this.currentToken=f.UNKNOWN,this.currentIdentifier="",this.currentString="",this.isLetterOrDigitPattern=/^[a-zA-Z0-9]+$/,this._toParse=e,this._maxPos=e.length}return e.prototype.getNextToken=function(){if(this.isEnd())return f.END_OF_INPUT;if(this.currentString=this.read(),this.currentToken=f.UNKNOWN,"_"===this.currentString||this.isLetterOrDigitPattern.test(this.currentString))for(this.currentToken=f.IDENTIFIER,this.currentIdentifier=this.currentString;!this.isEnd()&&(this.isLetterOrDigitPattern.test(this.currentString=this.peek())||"_"===this.currentString);)this.currentIdentifier+=this.currentString,this.forward();return this.currentToken},e.prototype.peek=function(){return this._toParse[this._pos]},e.prototype.read=function(){return this._toParse[this._pos++]},e.prototype.forward=function(){this._pos++},e.prototype.isEnd=function(){return this._pos>=this._maxPos},e}(),y=["MODEL","VIEW","PROJECTION","MODELVIEW","MODELVIEWPROJECTION","JOINTMATRIX"],b=["world","view","projection","worldView","worldViewProjection","mBones"],v=["translation","rotation","scale"],g=["position","rotationQuaternion","scaling"],A=function(e,t,n){for(var r in e){var o=e[r];n[t][r]=o}},T=function(e){if(e)for(var t=0;t<e.length/2;t++)e[2*t+1]=1-e[2*t+1]},x=function(e){if("NORMAL"===e.semantic)return"normal";if("POSITION"===e.semantic)return"position";if("JOINT"===e.semantic)return"matricesIndices";if("WEIGHT"===e.semantic)return"matricesWeights";if("COLOR"===e.semantic)return"color";if(e.semantic&&-1!==e.semantic.indexOf("TEXCOORD_")){var t=Number(e.semantic.split("_")[1]);return"uv"+(0===t?"":t+1)}return null},E=function(e){var t=null;if(e.translation||e.rotation||e.scale){var n=h.Vector3.FromArray(e.scale||[1,1,1]),r=h.Quaternion.FromArray(e.rotation||[0,0,0,1]),o=h.Vector3.FromArray(e.translation||[0,0,0]);t=h.Matrix.Compose(n,r,o)}else t=h.Matrix.FromArray(e.matrix);return t},L=function(e,t,n,r){for(var o=0;o<r.bones.length;o++)if(r.bones[o].name===n)return r.bones[o];var a=e.nodes;for(var i in a){var s=a[i];if(s.jointName){var l=s.children;for(o=0;o<l.length;o++){var u=e.nodes[l[o]];if(u.jointName&&u.jointName===n){var c=E(s),d=new h.Bone(s.name||"",r,L(e,t,s.jointName,r),c);return d.id=i,d}}}}return null},O=function(e,t){for(var n=0;n<e.length;n++)for(var r=e[n],o=0;o<r.node.children.length;o++){if(r.node.children[o]===t)return r.bone}return null},M=function(e,t){var n=e.nodes,r=n[t];if(r)return{node:r,id:t};for(var o in n)if((r=n[o]).jointName===t)return{node:r,id:o};return null},S=function(e,t){for(var n=0;n<e.jointNames.length;n++)if(e.jointNames[n]===t)return!0;return!1},w=function(e,t,n,r,o){if(r||(r=new h.Skeleton(t.name||"","",e.scene)),!t.babylonSkeleton)return r;var a=[],i=[];!function(e,t,n,r){for(var o in e.nodes){var a=e.nodes[o],i=o;if(a.jointName&&!S(n,a.jointName)){var s=E(a),l=new h.Bone(a.name||"",t,null,s);l.id=i,r.push({bone:l,node:a,id:i})}}for(var u=0;u<r.length;u++)for(var c=r[u],d=c.node.children,f=0;f<d.length;f++){for(var p=null,_=0;_<r.length;_++)if(r[_].id===d[f]){p=r[_];break}p&&(p.bone._parent=c.bone,c.bone.children.push(p.bone))}}(e,r,t,a),r.bones=[];for(var s=0;s<t.jointNames.length;s++){if(g=M(e,t.jointNames[s])){var l=g.node;if(l){o=g.id;var u=e.scene.getBoneByID(o);if(u)r.bones.push(u);else{for(var c=!1,d=null,f=0;f<s;f++){var p=M(e,t.jointNames[f]);if(p){var _=p.node;if(_){var m=_.children;if(m){c=!1;for(var y=0;y<m.length;y++)if(m[y]===o){d=L(e,t,t.jointNames[f],r),c=!0;break}if(c)break}}else h.Tools.Warn("Joint named "+t.jointNames[f]+" does not exist when looking for parent")}}var b=E(l);!d&&a.length>0&&(d=O(a,o))&&-1===i.indexOf(d)&&i.push(d),new h.Bone(l.jointName||"",r,d,b).id=o}}else h.Tools.Warn("Joint named "+t.jointNames[s]+" does not exist")}}var v=r.bones;r.bones=[];for(s=0;s<t.jointNames.length;s++){var g;if(g=M(e,t.jointNames[s]))for(f=0;f<v.length;f++)if(v[f].id===g.id){r.bones.push(v[f]);break}}r.prepare();for(s=0;s<i.length;s++)r.bones.push(i[s]);return r},R=function(e,t,n,r,o){if(o||(e.scene._blockEntityCollection=e.forAssetContainer,o=new h.Mesh(t.name||"",e.scene),e.scene._blockEntityCollection=!1,o.id=r),!t.babylonNode)return o;for(var a,i=[],s=null,l=new Array,u=new Array,c=new Array,d=new Array,f=0;f<n.length;f++){var m=n[f];if(N=e.meshes[m])for(var y=0;y<N.primitives.length;y++){var b=new h.VertexData,v=N.primitives[y];v.mode;var g=v.attributes,A=null,x=null;for(var E in g)if(A=e.accessors[g[E]],x=p.GetBufferFromAccessor(e,A),"NORMAL"===E)b.normals=new Float32Array(x.length),b.normals.set(x);else if("POSITION"===E){if(_.GLTFFileLoader.HomogeneousCoordinates){b.positions=new Float32Array(x.length-x.length/4);for(var L=0;L<x.length;L+=4)b.positions[L]=x[L],b.positions[L+1]=x[L+1],b.positions[L+2]=x[L+2]}else b.positions=new Float32Array(x.length),b.positions.set(x);u.push(b.positions.length)}else if(-1!==E.indexOf("TEXCOORD_")){var O=Number(E.split("_")[1]),M=h.VertexBuffer.UVKind+(0===O?"":O+1),S=new Float32Array(x.length);S.set(x),T(S),b.set(S,M)}else"JOINT"===E?(b.matricesIndices=new Float32Array(x.length),b.matricesIndices.set(x)):"WEIGHT"===E?(b.matricesWeights=new Float32Array(x.length),b.matricesWeights.set(x)):"COLOR"===E&&(b.colors=new Float32Array(x.length),b.colors.set(x));if(A=e.accessors[v.indices])x=p.GetBufferFromAccessor(e,A),b.indices=new Int32Array(x.length),b.indices.set(x),d.push(b.indices.length);else{var w=[];for(L=0;L<b.positions.length/3;L++)w.push(L);b.indices=new Int32Array(w),d.push(b.indices.length)}s?s.merge(b):s=b;var R=e.scene.getMaterialByID(v.material);i.push(null===R?p.GetDefaultMaterial(e.scene):R),l.push(0===l.length?0:l[l.length-1]+u[u.length-2]),c.push(0===c.length?0:c[c.length-1]+d[d.length-2])}}e.scene._blockEntityCollection=e.forAssetContainer,i.length>1?(a=new h.MultiMaterial("multimat"+r,e.scene)).subMaterials=i:a=new h.StandardMaterial("multimat"+r,e.scene),1===i.length&&(a=i[0]),o.material||(o.material=a),new h.Geometry(r,e.scene,s,!1,o),o.computeWorldMatrix(!0),e.scene._blockEntityCollection=!1,o.subMeshes=[];var C=0;for(f=0;f<n.length;f++){var N;m=n[f];if(N=e.meshes[m])for(y=0;y<N.primitives.length;y++)N.primitives[y].mode,h.SubMesh.AddToMesh(C,l[C],u[C],c[C],d[C],o,o,!0),C++}return o},C=function(e,t,n,r){e.position&&(e.position=t),(e.rotationQuaternion||e.rotation)&&(e.rotationQuaternion=n),e.scaling&&(e.scaling=r)},N=function(e,t,n,r){var o=null;if(e.importOnlyMeshes&&(t.skin||t.meshes)&&e.importMeshesNames&&e.importMeshesNames.length>0&&-1===e.importMeshesNames.indexOf(t.name||""))return null;if(t.skin){if(t.meshes){var a=e.skins[t.skin];(i=R(e,t,t.meshes,n,t.babylonNode)).skeleton=e.scene.getLastSkeletonByID(t.skin),null===i.skeleton&&(i.skeleton=w(e,a,0,a.babylonSkeleton,t.skin),a.babylonSkeleton||(a.babylonSkeleton=i.skeleton)),o=i}}else if(t.meshes){var i;o=i=R(e,t,t.mesh?[t.mesh]:t.meshes,n,t.babylonNode)}else if(!t.light||t.babylonNode||e.importOnlyMeshes){if(t.camera&&!t.babylonNode&&!e.importOnlyMeshes){var s=e.cameras[t.camera];if(s){if(e.scene._blockEntityCollection=e.forAssetContainer,"orthographic"===s.type){var l=new h.FreeCamera(t.camera,h.Vector3.Zero(),e.scene,!1);l.name=t.name||"",l.mode=h.Camera.ORTHOGRAPHIC_CAMERA,l.attachControl(),o=l}else if("perspective"===s.type){var u=s[s.type],c=new h.FreeCamera(t.camera,h.Vector3.Zero(),e.scene,!1);c.name=t.name||"",c.attachControl(),u.aspectRatio||(u.aspectRatio=e.scene.getEngine().getRenderWidth()/e.scene.getEngine().getRenderHeight()),u.znear&&u.zfar&&(c.maxZ=u.zfar,c.minZ=u.znear),o=c}e.scene._blockEntityCollection=!1}}}else{var d=e.lights[t.light];if(d)if("ambient"===d.type){var f=d[d.type],p=new h.HemisphericLight(t.light,h.Vector3.Zero(),e.scene);p.name=t.name||"",f.color&&(p.diffuse=h.Color3.FromArray(f.color)),o=p}else if("directional"===d.type){var _=d[d.type],m=new h.DirectionalLight(t.light,h.Vector3.Zero(),e.scene);m.name=t.name||"",_.color&&(m.diffuse=h.Color3.FromArray(_.color)),o=m}else if("point"===d.type){var y=d[d.type],b=new h.PointLight(t.light,h.Vector3.Zero(),e.scene);b.name=t.name||"",y.color&&(b.diffuse=h.Color3.FromArray(y.color)),o=b}else if("spot"===d.type){var v=d[d.type],g=new h.SpotLight(t.light,h.Vector3.Zero(),h.Vector3.Zero(),0,0,e.scene);g.name=t.name||"",v.color&&(g.diffuse=h.Color3.FromArray(v.color)),v.fallOfAngle&&(g.angle=v.fallOfAngle),v.fallOffExponent&&(g.exponent=v.fallOffExponent),o=g}}if(!t.jointName){if(t.babylonNode)return t.babylonNode;if(null===o){e.scene._blockEntityCollection=e.forAssetContainer;var A=new h.Mesh(t.name||"",e.scene);e.scene._blockEntityCollection=!1,t.babylonNode=A,o=A}}if(null!==o){if(t.matrix&&o instanceof h.Mesh)!function(e,t,n){if(t.matrix){var r=new h.Vector3(0,0,0),o=new h.Quaternion,a=new h.Vector3(0,0,0);h.Matrix.FromArray(t.matrix).decompose(a,o,r),C(e,r,o,a)}else t.translation&&t.rotation&&t.scale&&C(e,h.Vector3.FromArray(t.translation),h.Quaternion.FromArray(t.rotation),h.Vector3.FromArray(t.scale));e.computeWorldMatrix(!0)}(o,t);else{var T=t.translation||[0,0,0],x=t.rotation||[0,0,0,1],E=t.scale||[1,1,1];C(o,h.Vector3.FromArray(T),h.Quaternion.FromArray(x),h.Vector3.FromArray(E))}o.updateCache(!0),t.babylonNode=o}return o},P=function(e,t,n,r){void 0===r&&(r=!1);var o=e.nodes[t],a=null;if(r=!(e.importOnlyMeshes&&!r&&e.importMeshesNames)||(-1!==e.importMeshesNames.indexOf(o.name||"")||0===e.importMeshesNames.length),!o.jointName&&r&&null!==(a=N(e,o,t))&&(a.id=t,a.parent=n),o.children)for(var i=0;i<o.children.length;i++)P(e,o.children[i],a,r)},I=function(e){var t=e.currentScene;if(t)for(var n=0;n<t.nodes.length;n++)P(e,t.nodes[n],null);else for(var r in e.scenes){t=e.scenes[r];for(n=0;n<t.nodes.length;n++)P(e,t.nodes[n],null)}!function(e){for(var t in e.animations){var n=e.animations[t];if(n.channels&&n.samplers)for(var r=null,o=0;o<n.channels.length;o++){var a=n.channels[o],i=n.samplers[a.sampler];if(i){var s=null,l=null;n.parameters?(s=n.parameters[i.input],l=n.parameters[i.output]):(s=i.input,l=i.output);var u=p.GetBufferFromAccessor(e,e.accessors[s]),c=p.GetBufferFromAccessor(e,e.accessors[l]),d=a.target.id,f=e.scene.getNodeByID(d);if(null===f&&(f=e.scene.getNodeByName(d)),null!==f){var _=f instanceof h.Bone,m=a.target.path,y=v.indexOf(m);-1!==y&&(m=g[y]);var b=h.Animation.ANIMATIONTYPE_MATRIX;_||("rotationQuaternion"===m?(b=h.Animation.ANIMATIONTYPE_QUATERNION,f.rotationQuaternion=new h.Quaternion):b=h.Animation.ANIMATIONTYPE_VECTOR3);var A=null,T=[],x=0,E=!1;_&&r&&r.getKeys().length===u.length&&(A=r,E=!0),E||(e.scene._blockEntityCollection=e.forAssetContainer,A=new h.Animation(t,_?"_matrix":m,1,b,h.Animation.ANIMATIONLOOPMODE_CYCLE),e.scene._blockEntityCollection=!1);for(var L=0;L<u.length;L++){var O=null;if("rotationQuaternion"===m?(O=h.Quaternion.FromArray([c[x],c[x+1],c[x+2],c[x+3]]),x+=4):(O=h.Vector3.FromArray([c[x],c[x+1],c[x+2]]),x+=3),_){var M=f,S=h.Vector3.Zero(),w=new h.Quaternion,R=h.Vector3.Zero(),C=M.getBaseMatrix();E&&r&&(C=r.getKeys()[L].value),C.decompose(R,w,S),"position"===m?S=O:"rotationQuaternion"===m?w=O:R=O,O=h.Matrix.Compose(R,w,S)}E?r&&(r.getKeys()[L].value=O):T.push({frame:u[L],value:O})}!E&&A&&(A.setKeys(T),f.animations.push(A)),r=A,e.scene.stopAnimation(f),e.scene.beginAnimation(f,0,u[u.length-1],!0,1)}else h.Tools.Warn("Creating animation named "+t+". But cannot find node named "+d+" to attach to")}}}}(e);for(n=0;n<e.scene.skeletons.length;n++){var o=e.scene.skeletons[n];e.scene.beginAnimation(o,0,Number.MAX_VALUE,!0,1)}},F=function(e,t,n,r,o,i){return function(s){!function(e,t,n,r,o){var i=r.values||n.parameters,s=n.uniforms;for(var l in o){var u=o[l],c=u.type,d=i[s[l]];if(void 0===d&&(d=u.value),d){var f=function(e){return function(n){u.value&&e&&(t.setTexture(e,n),delete o[e])}};c===a.SAMPLER_2D?U.LoadTextureAsync(e,r.values?d:u.value,f(l),(function(){return f(null)})):u.value&&p.SetUniform(t,l,r.values?d:u.value,c)&&delete o[l]}}}(e,t,n,r,o),t.onBind=function(s){!function(e,t,n,r,o,i,s){var l=i.values||o.parameters;for(var u in n){var c=n[u],d=c.type;if(d===a.FLOAT_MAT2||d===a.FLOAT_MAT3||d===a.FLOAT_MAT4)if(!c.semantic||c.source||c.node){if(c.semantic&&(c.source||c.node)){var f=t.scene.getNodeByName(c.source||c.node||"");if(null===f&&(f=t.scene.getNodeByID(c.source||c.node||"")),null===f)continue;p.SetMatrix(t.scene,f,c,u,r.getEffect())}}else p.SetMatrix(t.scene,e,c,u,r.getEffect());else{var h=l[o.uniforms[u]];if(!h)continue;if(d===a.SAMPLER_2D){var _=t.textures[i.values?h:c.value].babylonTexture;if(null==_)continue;r.getEffect().setTexture(u,_)}else p.SetUniform(r.getEffect(),u,h,d)}}s(r)}(s,e,o,t,n,r,i)}}},B=function(e,t,n){for(var r in t.uniforms){var o=t.uniforms[r],a=t.parameters[o];if(e.currentIdentifier===r&&a.semantic&&!a.source&&!a.node){var i=y.indexOf(a.semantic);if(-1!==i)return delete n[r],b[i]}}return e.currentIdentifier},V=function(e){for(var t in e.materials)U.LoadMaterialAsync(e,t,(function(e){}),(function(){}))},D=function(){function e(){}return e.CreateRuntime=function(e,t,n){var r={extensions:{},accessors:{},buffers:{},bufferViews:{},meshes:{},lights:{},cameras:{},nodes:{},images:{},textures:{},shaders:{},programs:{},samplers:{},techniques:{},materials:{},animations:{},skins:{},extensionsUsed:[],scenes:{},buffersCount:0,shaderscount:0,scene:t,rootUrl:n,loadedBufferCount:0,loadedBufferViews:{},loadedShaderCount:0,importOnlyMeshes:!1,dummyNodes:[],forAssetContainer:!1};return e.extensions&&A(e.extensions,"extensions",r),e.extensionsUsed&&A(e.extensionsUsed,"extensionsUsed",r),e.buffers&&function(e,t){for(var n in e){var r=e[n];t.buffers[n]=r,t.buffersCount++}}(e.buffers,r),e.bufferViews&&A(e.bufferViews,"bufferViews",r),e.accessors&&A(e.accessors,"accessors",r),e.meshes&&A(e.meshes,"meshes",r),e.lights&&A(e.lights,"lights",r),e.cameras&&A(e.cameras,"cameras",r),e.nodes&&A(e.nodes,"nodes",r),e.images&&A(e.images,"images",r),e.textures&&A(e.textures,"textures",r),e.shaders&&function(e,t){for(var n in e){var r=e[n];t.shaders[n]=r,t.shaderscount++}}(e.shaders,r),e.programs&&A(e.programs,"programs",r),e.samplers&&A(e.samplers,"samplers",r),e.techniques&&A(e.techniques,"techniques",r),e.materials&&A(e.materials,"materials",r),e.animations&&A(e.animations,"animations",r),e.skins&&A(e.skins,"skins",r),e.scenes&&(r.scenes=e.scenes),e.scene&&e.scenes&&(r.currentScene=e.scenes[e.scene]),r},e.LoadBufferAsync=function(e,t,n,r,o){var a=e.buffers[t];h.Tools.IsBase64(a.uri)?setTimeout((function(){return n(new Uint8Array(h.Tools.DecodeBase64(a.uri)))})):h.Tools.LoadFile(e.rootUrl+a.uri,(function(e){return n(new Uint8Array(e))}),o,void 0,!0,(function(e){e&&r(e.status+" "+e.statusText)}))},e.LoadTextureBufferAsync=function(e,t,n,r){var o=e.textures[t];if(o&&o.source)if(o.babylonTexture)n(null);else{var a=e.images[o.source];h.Tools.IsBase64(a.uri)?setTimeout((function(){return n(new Uint8Array(h.Tools.DecodeBase64(a.uri)))})):h.Tools.LoadFile(e.rootUrl+a.uri,(function(e){return n(new Uint8Array(e))}),void 0,void 0,!0,(function(e){e&&r(e.status+" "+e.statusText)}))}else r("")},e.CreateTextureAsync=function(e,t,n,r,o){var a=e.textures[t];if(a.babylonTexture)r(a.babylonTexture);else{var i=e.samplers[a.sampler],l=i.minFilter===s.NEAREST_MIPMAP_NEAREST||i.minFilter===s.NEAREST_MIPMAP_LINEAR||i.minFilter===s.LINEAR_MIPMAP_NEAREST||i.minFilter===s.LINEAR_MIPMAP_LINEAR,u=h.Texture.BILINEAR_SAMPLINGMODE,c=null==n?new Blob:new Blob([n]),d=URL.createObjectURL(c),f=function(){return URL.revokeObjectURL(d)},_=new h.Texture(d,e.scene,!l,!0,u,f,f);void 0!==i.wrapS&&(_.wrapU=p.GetWrapMode(i.wrapS)),void 0!==i.wrapT&&(_.wrapV=p.GetWrapMode(i.wrapT)),_.name=t,a.babylonTexture=_,r(_)}},e.LoadShaderStringAsync=function(e,t,n,r){var o=e.shaders[t];if(h.Tools.IsBase64(o.uri)){var a=atob(o.uri.split(",")[1]);n&&n(a)}else h.Tools.LoadFile(e.rootUrl+o.uri,n,void 0,void 0,!1,(function(e){e&&r&&r(e.status+" "+e.statusText)}))},e.LoadMaterialAsync=function(e,t,n,r){var o=e.materials[t];if(o.technique){var i=e.techniques[o.technique];if(!i){e.scene._blockEntityCollection=e.forAssetContainer;var s=new h.StandardMaterial(t,e.scene);return e.scene._blockEntityCollection=!1,s.diffuseColor=new h.Color3(.5,.5,.5),s.sideOrientation=h.Material.CounterClockWiseSideOrientation,void n(s)}var l=e.programs[i.program],d=i.states,p=h.Effect.ShadersStore[l.vertexShader+"VertexShader"],_=h.Effect.ShadersStore[l.fragmentShader+"PixelShader"],v="",g="",A=new m(p),T=new m(_),E={},L=[],O=[],M=[];for(var S in i.uniforms){var w=i.uniforms[S],R=i.parameters[w];if(E[S]=R,!R.semantic||R.node||R.source)R.type===a.SAMPLER_2D?M.push(S):L.push(S);else{var C=y.indexOf(R.semantic);-1!==C?(L.push(b[C]),delete E[S]):L.push(S)}}for(var N in i.attributes){var P=i.attributes[N];if((D=i.parameters[P]).semantic){var I=x(D);I&&O.push(I)}}for(;!A.isEnd()&&A.getNextToken();){if(A.currentToken===f.IDENTIFIER){var V=!1;for(var N in i.attributes){P=i.attributes[N];var D=i.parameters[P];if(A.currentIdentifier===N&&D.semantic){v+=x(D),V=!0;break}}V||(v+=B(A,i,E))}else v+=A.currentString}for(;!T.isEnd()&&T.getNextToken();){T.currentToken===f.IDENTIFIER?g+=B(T,i,E):g+=T.currentString}var G={vertex:l.vertexShader+t,fragment:l.fragmentShader+t},U={attributes:O,uniforms:L,samplers:M,needAlphaBlending:d&&d.enable&&-1!==d.enable.indexOf(3042)};h.Effect.ShadersStore[l.vertexShader+t+"VertexShader"]=v,h.Effect.ShadersStore[l.fragmentShader+t+"PixelShader"]=g;var k=new h.ShaderMaterial(t,e.scene,G,U);if(k.onError=function(e,t,n){return function(r,o){t.dispose(!0),n("Cannot compile program named "+e.name+". Error: "+o+". Default material will be applied")}}(l,k,r),k.onCompiled=F(e,k,i,o,E,n),k.sideOrientation=h.Material.CounterClockWiseSideOrientation,d&&d.functions){var H=d.functions;H.cullFace&&H.cullFace[0]!==u.BACK&&(k.backFaceCulling=!1);var K=H.blendFuncSeparate;K&&(K[0]===c.SRC_ALPHA&&K[1]===c.ONE_MINUS_SRC_ALPHA&&K[2]===c.ONE&&K[3]===c.ONE?k.alphaMode=h.Constants.ALPHA_COMBINE:K[0]===c.ONE&&K[1]===c.ONE&&K[2]===c.ZERO&&K[3]===c.ONE?k.alphaMode=h.Constants.ALPHA_ONEONE:K[0]===c.SRC_ALPHA&&K[1]===c.ONE&&K[2]===c.ZERO&&K[3]===c.ONE?k.alphaMode=h.Constants.ALPHA_ADD:K[0]===c.ZERO&&K[1]===c.ONE_MINUS_SRC_COLOR&&K[2]===c.ONE&&K[3]===c.ONE?k.alphaMode=h.Constants.ALPHA_SUBTRACT:K[0]===c.DST_COLOR&&K[1]===c.ZERO&&K[2]===c.ONE&&K[3]===c.ONE?k.alphaMode=h.Constants.ALPHA_MULTIPLY:K[0]===c.SRC_ALPHA&&K[1]===c.ONE_MINUS_SRC_COLOR&&K[2]===c.ONE&&K[3]===c.ONE&&(k.alphaMode=h.Constants.ALPHA_MAXIMIZED))}}else r&&r("No technique found.")},e}(),G=function(){function e(){this.state=null}return e.RegisterExtension=function(t){e.Extensions[t.name]?h.Tools.Error('Tool with the same name "'+t.name+'" already exists'):e.Extensions[t.name]=t},e.prototype.dispose=function(){},e.prototype._importMeshAsync=function(e,t,n,r,o,a,i,s){var l=this;return t.useRightHandedSystem=!0,U.LoadRuntimeAsync(t,n,r,(function(t){t.forAssetContainer=o,t.importOnlyMeshes=!0,""===e?t.importMeshesNames=[]:"string"==typeof e?t.importMeshesNames=[e]:!e||e instanceof Array?(t.importMeshesNames=[],h.Tools.Warn("Argument meshesNames must be of type string or string[]")):t.importMeshesNames=[e],l._createNodes(t);var n=new Array,r=new Array;for(var s in t.nodes){var u=t.nodes[s];u.babylonNode instanceof h.AbstractMesh&&n.push(u.babylonNode)}for(var c in t.skins){var d=t.skins[c];d.babylonSkeleton instanceof h.Skeleton&&r.push(d.babylonSkeleton)}l._loadBuffersAsync(t,(function(){l._loadShadersAsync(t,(function(){V(t),I(t),!_.GLTFFileLoader.IncrementalLoading&&a&&a(n,r)}))}),i),_.GLTFFileLoader.IncrementalLoading&&a&&a(n,r)}),s),!0},e.prototype.importMeshAsync=function(e,t,n,r,o,a){var i=this;return new Promise((function(s,l){i._importMeshAsync(e,t,r,o,n,(function(e,t){s({meshes:e,particleSystems:[],skeletons:t,animationGroups:[],lights:[],transformNodes:[],geometries:[]})}),a,(function(e){l(new Error(e))}))}))},e.prototype._loadAsync=function(e,t,n,r,o,a,i){var s=this;e.useRightHandedSystem=!0,U.LoadRuntimeAsync(e,t,n,(function(e){U.LoadRuntimeExtensionsAsync(e,(function(){s._createNodes(e),s._loadBuffersAsync(e,(function(){s._loadShadersAsync(e,(function(){V(e),I(e),_.GLTFFileLoader.IncrementalLoading||o()}))})),_.GLTFFileLoader.IncrementalLoading&&o()}),i)}),i)},e.prototype.loadAsync=function(e,t,n,r){var o=this;return new Promise((function(a,i){o._loadAsync(e,t,n,!1,(function(){a()}),r,(function(e){i(new Error(e))}))}))},e.prototype._loadShadersAsync=function(e,t){var n=!1,r=function(n,r){U.LoadShaderStringAsync(e,n,(function(a){a instanceof ArrayBuffer||(e.loadedShaderCount++,a&&(h.Effect.ShadersStore[n+(r.type===o.VERTEX?"VertexShader":"PixelShader")]=a),e.loadedShaderCount===e.shaderscount&&t())}),(function(){h.Tools.Error("Error when loading shader program named "+n+" located at "+r.uri)}))};for(var a in e.shaders){n=!0;var i=e.shaders[a];i?r.bind(this,a,i)():h.Tools.Error("No shader named: "+a)}n||t()},e.prototype._loadBuffersAsync=function(e,t,n){var r=!1,o=function(n,r){U.LoadBufferAsync(e,n,(function(o){e.loadedBufferCount++,o&&(o.byteLength!=e.buffers[n].byteLength&&h.Tools.Error("Buffer named "+n+" is length "+o.byteLength+". Expected: "+r.byteLength),e.loadedBufferViews[n]=o),e.loadedBufferCount===e.buffersCount&&t()}),(function(){h.Tools.Error("Error when loading buffer named "+n+" located at "+r.uri)}))};for(var a in e.buffers){r=!0;var i=e.buffers[a];i?o.bind(this,a,i)():h.Tools.Error("No buffer named: "+a)}r||t()},e.prototype._createNodes=function(e){var t=e.currentScene;if(t)for(var n=0;n<t.nodes.length;n++)P(e,t.nodes[n],null);else for(var r in e.scenes){t=e.scenes[r];for(n=0;n<t.nodes.length;n++)P(e,t.nodes[n],null)}},e.Extensions={},e}(),U=function(){function e(e){this._name=e}return Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),e.prototype.loadRuntimeAsync=function(e,t,n,r,o){return!1},e.prototype.loadRuntimeExtensionsAsync=function(e,t,n){return!1},e.prototype.loadBufferAsync=function(e,t,n,r,o){return!1},e.prototype.loadTextureBufferAsync=function(e,t,n,r){return!1},e.prototype.createTextureAsync=function(e,t,n,r,o){return!1},e.prototype.loadShaderStringAsync=function(e,t,n,r){return!1},e.prototype.loadMaterialAsync=function(e,t,n,r){return!1},e.LoadRuntimeAsync=function(t,n,r,o,a){e.ApplyExtensions((function(e){return e.loadRuntimeAsync(t,n,r,o,a)}),(function(){setTimeout((function(){o&&o(D.CreateRuntime(n.json,t,r))}))}))},e.LoadRuntimeExtensionsAsync=function(t,n,r){e.ApplyExtensions((function(e){return e.loadRuntimeExtensionsAsync(t,n,r)}),(function(){setTimeout((function(){n()}))}))},e.LoadBufferAsync=function(t,n,r,o,a){e.ApplyExtensions((function(e){return e.loadBufferAsync(t,n,r,o,a)}),(function(){D.LoadBufferAsync(t,n,r,o,a)}))},e.LoadTextureAsync=function(t,n,r,o){e.LoadTextureBufferAsync(t,n,(function(a){a&&e.CreateTextureAsync(t,n,a,r,o)}),o)},e.LoadShaderStringAsync=function(t,n,r,o){e.ApplyExtensions((function(e){return e.loadShaderStringAsync(t,n,r,o)}),(function(){D.LoadShaderStringAsync(t,n,r,o)}))},e.LoadMaterialAsync=function(t,n,r,o){e.ApplyExtensions((function(e){return e.loadMaterialAsync(t,n,r,o)}),(function(){D.LoadMaterialAsync(t,n,r,o)}))},e.LoadTextureBufferAsync=function(t,n,r,o){e.ApplyExtensions((function(e){return e.loadTextureBufferAsync(t,n,r,o)}),(function(){D.LoadTextureBufferAsync(t,n,r,o)}))},e.CreateTextureAsync=function(t,n,r,o,a){e.ApplyExtensions((function(e){return e.createTextureAsync(t,n,r,o,a)}),(function(){D.CreateTextureAsync(t,n,r,o,a)}))},e.ApplyExtensions=function(e,t){for(var n in G.Extensions){if(e(G.Extensions[n]))return}t()},e}();_.GLTFFileLoader._CreateGLTF1Loader=function(){return new G};var k=function(e){function t(){return e.call(this,"KHR_binary_glTF")||this}return Object(d.b)(t,e),t.prototype.loadRuntimeAsync=function(e,t,n,r,o){var a=t.json.extensionsUsed;return!(!a||-1===a.indexOf(this.name)||!t.bin)&&(this._bin=t.bin,r(D.CreateRuntime(t.json,e,n)),!0)},t.prototype.loadBufferAsync=function(e,t,n,r){return-1!==e.extensionsUsed.indexOf(this.name)&&("binary_glTF"===t&&(this._bin.readAsync(0,this._bin.byteLength).then(n,(function(e){return r(e.message)})),!0))},t.prototype.loadTextureBufferAsync=function(e,t,n,o){var a=e.textures[t],i=e.images[a.source];if(!i.extensions||!(this.name in i.extensions))return!1;var s=i.extensions[this.name],l=e.bufferViews[s.bufferView];return n(p.GetBufferFromBufferView(e,l,0,l.byteLength,r.UNSIGNED_BYTE)),!0},t.prototype.loadShaderStringAsync=function(e,t,n,o){var a=e.shaders[t];if(!a.extensions||!(this.name in a.extensions))return!1;var i=a.extensions[this.name],s=e.bufferViews[i.bufferView],l=p.GetBufferFromBufferView(e,s,0,s.byteLength,r.UNSIGNED_BYTE);return setTimeout((function(){var e=p.DecodeBufferToText(l);n(e)})),!0},t}(U);G.RegisterExtension(new k);var H=function(e){function t(){return e.call(this,"KHR_materials_common")||this}return Object(d.b)(t,e),t.prototype.loadRuntimeExtensionsAsync=function(e,t,n){if(!e.extensions)return!1;var r=e.extensions[this.name];if(!r)return!1;var o=r.lights;if(o)for(var a in o){var i=o[a];switch(i.type){case"ambient":var s=new h.HemisphericLight(i.name,new h.Vector3(0,1,0),e.scene),l=i.ambient;l&&(s.diffuse=h.Color3.FromArray(l.color||[1,1,1]));break;case"point":var u=new h.PointLight(i.name,new h.Vector3(10,10,10),e.scene),c=i.point;c&&(u.diffuse=h.Color3.FromArray(c.color||[1,1,1]));break;case"directional":var d=new h.DirectionalLight(i.name,new h.Vector3(0,-1,0),e.scene),f=i.directional;f&&(d.diffuse=h.Color3.FromArray(f.color||[1,1,1]));break;case"spot":var p=i.spot;if(p)new h.SpotLight(i.name,new h.Vector3(0,10,0),new h.Vector3(0,-1,0),p.fallOffAngle||Math.PI,p.fallOffExponent||0,e.scene).diffuse=h.Color3.FromArray(p.color||[1,1,1]);break;default:h.Tools.Warn('GLTF Material Common extension: light type "'+i.type+"” not supported")}}return!1},t.prototype.loadMaterialAsync=function(e,t,n,r){var o=e.materials[t];if(!o||!o.extensions)return!1;var a=o.extensions[this.name];if(!a)return!1;var i=new h.StandardMaterial(t,e.scene);return i.sideOrientation=h.Material.CounterClockWiseSideOrientation,"CONSTANT"===a.technique&&(i.disableLighting=!0),i.backFaceCulling=void 0!==a.doubleSided&&!a.doubleSided,i.alpha=void 0===a.values.transparency?1:a.values.transparency,i.specularPower=void 0===a.values.shininess?0:a.values.shininess,"string"==typeof a.values.ambient?this._loadTexture(e,a.values.ambient,i,"ambientTexture",r):i.ambientColor=h.Color3.FromArray(a.values.ambient||[0,0,0]),"string"==typeof a.values.diffuse?this._loadTexture(e,a.values.diffuse,i,"diffuseTexture",r):i.diffuseColor=h.Color3.FromArray(a.values.diffuse||[0,0,0]),"string"==typeof a.values.emission?this._loadTexture(e,a.values.emission,i,"emissiveTexture",r):i.emissiveColor=h.Color3.FromArray(a.values.emission||[0,0,0]),"string"==typeof a.values.specular?this._loadTexture(e,a.values.specular,i,"specularTexture",r):i.specularColor=h.Color3.FromArray(a.values.specular||[0,0,0]),!0},t.prototype._loadTexture=function(e,t,n,r,o){D.LoadTextureBufferAsync(e,t,(function(a){D.CreateTextureAsync(e,t,a,(function(e){return n[r]=e}),o)}),o)},t}(U);G.RegisterExtension(new H)},function(e,t,n){"use strict";n.r(t),n.d(t,"ArrayItem",(function(){return r.a})),n.d(t,"GLTFLoader",(function(){return r.b})),n.d(t,"EXT_lights_image_based",(function(){return o.EXT_lights_image_based})),n.d(t,"EXT_mesh_gpu_instancing",(function(){return o.EXT_mesh_gpu_instancing})),n.d(t,"EXT_texture_webp",(function(){return o.EXT_texture_webp})),n.d(t,"KHR_draco_mesh_compression",(function(){return o.KHR_draco_mesh_compression})),n.d(t,"KHR_lights",(function(){return o.KHR_lights})),n.d(t,"KHR_materials_pbrSpecularGlossiness",(function(){return o.KHR_materials_pbrSpecularGlossiness})),n.d(t,"KHR_materials_unlit",(function(){return o.KHR_materials_unlit})),n.d(t,"KHR_materials_clearcoat",(function(){return o.KHR_materials_clearcoat})),n.d(t,"KHR_materials_sheen",(function(){return o.KHR_materials_sheen})),n.d(t,"KHR_materials_specular",(function(){return o.KHR_materials_specular})),n.d(t,"KHR_materials_ior",(function(){return o.KHR_materials_ior})),n.d(t,"KHR_materials_variants",(function(){return o.KHR_materials_variants})),n.d(t,"KHR_materials_transmission",(function(){return o.KHR_materials_transmission})),n.d(t,"KHR_materials_translucency",(function(){return o.KHR_materials_translucency})),n.d(t,"KHR_mesh_quantization",(function(){return o.KHR_mesh_quantization})),n.d(t,"KHR_texture_basisu",(function(){return o.KHR_texture_basisu})),n.d(t,"KHR_texture_transform",(function(){return o.KHR_texture_transform})),n.d(t,"MSFT_audio_emitter",(function(){return o.MSFT_audio_emitter})),n.d(t,"MSFT_lod",(function(){return o.MSFT_lod})),n.d(t,"MSFT_minecraftMesh",(function(){return o.MSFT_minecraftMesh})),n.d(t,"MSFT_sRGBFactors",(function(){return o.MSFT_sRGBFactors})),n.d(t,"ExtrasAsMetadata",(function(){return o.ExtrasAsMetadata}));var r=n(1),o=(n(6),n(7))},function(e,t,n){"use strict";n.r(t),n.d(t,"MTLFileLoader",(function(){return o})),n.d(t,"OBJFileLoader",(function(){return a}));var r=n(0),o=function(){function e(){this.materials=[]}return e.prototype.parseMTL=function(t,n,o,a){if(!(n instanceof ArrayBuffer)){for(var i,s=n.split("\n"),l=/\s+/,u=null,c=0;c<s.length;c++){var d=s[c].trim();if(0!==d.length&&"#"!==d.charAt(0)){var f=d.indexOf(" "),h=f>=0?d.substring(0,f):d;h=h.toLowerCase();var p=f>=0?d.substring(f+1).trim():"";"newmtl"===h?(u&&this.materials.push(u),t._blockEntityCollection=a,u=new r.StandardMaterial(p,t),t._blockEntityCollection=!1):"kd"===h&&u?(i=p.split(l,3).map(parseFloat),u.diffuseColor=r.Color3.FromArray(i)):"ka"===h&&u?(i=p.split(l,3).map(parseFloat),u.ambientColor=r.Color3.FromArray(i)):"ks"===h&&u?(i=p.split(l,3).map(parseFloat),u.specularColor=r.Color3.FromArray(i)):"ke"===h&&u?(i=p.split(l,3).map(parseFloat),u.emissiveColor=r.Color3.FromArray(i)):"ns"===h&&u?u.specularPower=parseFloat(p):"d"===h&&u?u.alpha=parseFloat(p):"map_ka"===h&&u?u.ambientTexture=e._getTexture(o,p,t):"map_kd"===h&&u?u.diffuseTexture=e._getTexture(o,p,t):"map_ks"===h&&u?u.specularTexture=e._getTexture(o,p,t):"map_ns"===h||("map_bump"===h&&u?u.bumpTexture=e._getTexture(o,p,t):"map_d"===h&&u&&(u.opacityTexture=e._getTexture(o,p,t)))}}u&&this.materials.push(u)}},e._getTexture=function(t,n,o){if(!n)return null;var a=t;if("file:"===t){var i=n.lastIndexOf("\\");-1===i&&(i=n.lastIndexOf("/")),a+=i>-1?n.substr(i+1):n}else a+=n;return new r.Texture(a,o,!1,e.INVERT_TEXTURE_Y)},e.INVERT_TEXTURE_Y=!0,e}(),a=function(){function e(t){this.name="obj",this.extensions=".obj",this.obj=/^o/,this.group=/^g/,this.mtllib=/^mtllib /,this.usemtl=/^usemtl /,this.smooth=/^s /,this.vertexPattern=/v(\s+[\d|\.|\+|\-|e|E]+){3,7}/,this.normalPattern=/vn(\s+[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,this.uvPattern=/vt(\s+[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,this.facePattern1=/f\s+(([\d]{1,}[\s]?){3,})+/,this.facePattern2=/f\s+((([\d]{1,}\/[\d]{1,}[\s]?){3,})+)/,this.facePattern3=/f\s+((([\d]{1,}\/[\d]{1,}\/[\d]{1,}[\s]?){3,})+)/,this.facePattern4=/f\s+((([\d]{1,}\/\/[\d]{1,}[\s]?){3,})+)/,this.facePattern5=/f\s+(((-[\d]{1,}\/-[\d]{1,}\/-[\d]{1,}[\s]?){3,})+)/,this._forAssetContainer=!1,this._meshLoadOptions=t||e.currentMeshLoadOptions}return Object.defineProperty(e,"INVERT_TEXTURE_Y",{get:function(){return o.INVERT_TEXTURE_Y},set:function(e){o.INVERT_TEXTURE_Y=e},enumerable:!1,configurable:!0}),Object.defineProperty(e,"currentMeshLoadOptions",{get:function(){return{ComputeNormals:e.COMPUTE_NORMALS,ImportVertexColors:e.IMPORT_VERTEX_COLORS,InvertY:e.INVERT_Y,InvertTextureY:e.INVERT_TEXTURE_Y,UVScaling:e.UV_SCALING,MaterialLoadingFailsSilently:e.MATERIAL_LOADING_FAILS_SILENTLY,OptimizeWithUV:e.OPTIMIZE_WITH_UV,SkipMaterials:e.SKIP_MATERIALS}},enumerable:!1,configurable:!0}),e.prototype._loadMTL=function(e,t,n,o){var a=r.Tools.BaseUrl+t+e;r.Tools.LoadFile(a,n,void 0,void 0,!1,(function(e,t){o(a,t)}))},e.prototype.createPlugin=function(){return new e(e.currentMeshLoadOptions)},e.prototype.canDirectLoad=function(e){return!1},e.prototype.importMeshAsync=function(e,t,n,r,o,a){return this._parseSolid(e,t,n,r).then((function(e){return{meshes:e,particleSystems:[],skeletons:[],animationGroups:[],transformNodes:[],geometries:[],lights:[]}}))},e.prototype.loadAsync=function(e,t,n,r,o){return this.importMeshAsync(null,e,t,n,r).then((function(){}))},e.prototype.loadAssetContainerAsync=function(e,t,n,o,a){var i=this;return this._forAssetContainer=!0,this.importMeshAsync(null,e,t,n).then((function(t){var n=new r.AssetContainer(e);return t.meshes.forEach((function(e){return n.meshes.push(e)})),t.meshes.forEach((function(e){var t=e.material;t&&(-1==n.materials.indexOf(t)&&(n.materials.push(t),t.getActiveTextures().forEach((function(e){-1==n.textures.indexOf(e)&&n.textures.push(e)}))))})),i._forAssetContainer=!1,n})).catch((function(e){throw i._forAssetContainer=!1,e}))},e.prototype._parseSolid=function(t,n,a,i){for(var s,l=this,u=[],c=[],d=[],f=[],h=[],p=[],_=[],m=[],y=[],b=[],v=[],g=0,A=!1,T=[],x=[],E=[],L=[],O=[],M="",S="",w=new o,R=1,C=!0,N=new r.Color4(.5,.5,.5,1),P=function(e,t,n,r,o,a,i){var s;-1===(s=l._meshLoadOptions.OptimizeWithUV?function(e,t){e[t[0]]||(e[t[0]]={normals:[],idx:[],uv:[]});var n=e[t[0]].normals.indexOf(t[1]);return 1!=n&&t[2]===e[t[0]].uv[n]?e[t[0]].idx[n]:-1}(v,[e,n,t]):function(e,t){e[t[0]]||(e[t[0]]={normals:[],idx:[]});var n=e[t[0]].normals.indexOf(t[1]);return-1===n?-1:e[t[0]].idx[n]}(v,[e,n]))?(p.push(_.length),_.push(r),m.push(o),b.push(a),void 0!==i&&y.push(i),v[e].normals.push(n),v[e].idx.push(g++),l._meshLoadOptions.OptimizeWithUV&&v[e].uv.push(t)):p.push(s)},I=function(){for(var e=0;e<_.length;e++)T.push(_[e].x,_[e].y,_[e].z),E.push(b[e].x,b[e].y,b[e].z),L.push(m[e].x,m[e].y),!0===l._meshLoadOptions.ImportVertexColors&&x.push(y[e].r,y[e].g,y[e].b,y[e].a);_=[],b=[],m=[],y=[],v=[],g=0},F=function(e,t){for(var n=t;n<e.length-1;n++)O.push(e[0],e[n],e[n+1])},B=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=parseInt(O[n])-1;P(o,0,0,u[o],r.Vector2.Zero(),r.Vector3.Up(),!0===l._meshLoadOptions.ImportVertexColors?f[o]:void 0)}O=[]},V=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=O[n].split("/"),a=parseInt(o[0])-1,i=parseInt(o[1])-1;P(a,i,0,u[a],d[i],r.Vector3.Up(),!0===l._meshLoadOptions.ImportVertexColors?f[a]:void 0)}O=[]},D=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var r=O[n].split("/"),o=parseInt(r[0])-1,a=parseInt(r[1])-1,i=parseInt(r[2])-1;P(o,a,i,u[o],d[a],c[i])}O=[]},G=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var o=O[n].split("//"),a=parseInt(o[0])-1,i=parseInt(o[1])-1;P(a,1,i,u[a],r.Vector2.Zero(),c[i],!0===l._meshLoadOptions.ImportVertexColors?f[a]:void 0)}O=[]},U=function(e,t){F(e,t);for(var n=0;n<O.length;n++){var r=O[n].split("/"),o=u.length+parseInt(r[0]),a=d.length+parseInt(r[1]),i=c.length+parseInt(r[2]);P(o,a,i,u[o],d[a],c[i],!0===l._meshLoadOptions.ImportVertexColors?f[o]:void 0)}O=[]},k=function(){h.length>0&&(s=h[h.length-1],I(),p.reverse(),s.indices=p.slice(),s.positions=T.slice(),s.normals=E.slice(),s.uvs=L.slice(),!0===l._meshLoadOptions.ImportVertexColors&&(s.colors=x.slice()),p=[],T=[],x=[],E=[],L=[])},H=a.split("\n"),K=0;K<H.length;K++){var j,W=H[K].trim().replace(/\s\s/g," ");if(0!==W.length&&"#"!==W.charAt(0))if(this.vertexPattern.test(W))j=W.match(/[^ ]+/g),u.push(new r.Vector3(parseFloat(j[1]),parseFloat(j[2]),parseFloat(j[3]))),!0===this._meshLoadOptions.ImportVertexColors&&(j.length>=7?f.push(new r.Color4(parseFloat(j[4]),parseFloat(j[5]),parseFloat(j[6]),7===j.length||void 0===j[7]?1:parseFloat(j[7]))):f.push(N));else if(null!==(j=this.normalPattern.exec(W)))c.push(new r.Vector3(parseFloat(j[1]),parseFloat(j[2]),parseFloat(j[3])));else if(null!==(j=this.uvPattern.exec(W)))d.push(new r.Vector2(parseFloat(j[1])*e.UV_SCALING.x,parseFloat(j[2])*e.UV_SCALING.y));else if(null!==(j=this.facePattern3.exec(W)))D(j[1].trim().split(" "),1);else if(null!==(j=this.facePattern4.exec(W)))G(j[1].trim().split(" "),1);else if(null!==(j=this.facePattern5.exec(W)))U(j[1].trim().split(" "),1);else if(null!==(j=this.facePattern2.exec(W)))V(j[1].trim().split(" "),1);else if(null!==(j=this.facePattern1.exec(W)))B(j[1].trim().split(" "),1);else if(this.group.test(W)||this.obj.test(W)){var q={name:W.substring(2).trim(),indices:void 0,positions:void 0,normals:void 0,uvs:void 0,colors:void 0,materialName:""};k(),h.push(q),A=!0,C=!0,R=1}else if(this.usemtl.test(W)){if(M=W.substring(7).trim(),!C||!A){k();q={name:"mesh_mm"+R.toString(),indices:void 0,positions:void 0,normals:void 0,uvs:void 0,colors:void 0,materialName:M};R++,h.push(q),A=!0}A&&C&&(h[h.length-1].materialName=M,C=!1)}else this.mtllib.test(W)?S=W.substring(7).trim():this.smooth.test(W)||console.log("Unhandled expression at line : "+W)}A&&(s=h[h.length-1],p.reverse(),I(),s.indices=p,s.positions=T,s.normals=E,s.uvs=L,!0===this._meshLoadOptions.ImportVertexColors&&(s.colors=x)),A||(p.reverse(),I(),h.push({name:r.Geometry.RandomId(),indices:p,positions:T,colors:x,normals:E,uvs:L,materialName:M}));for(var Y=[],X=new Array,J=0;J<h.length;J++){if(t&&h[J].name)if(t instanceof Array){if(-1===t.indexOf(h[J].name))continue}else if(h[J].name!==t)continue;s=h[J],n._blockEntityCollection=this._forAssetContainer;var Q=new r.Mesh(h[J].name,n);n._blockEntityCollection=!1,X.push(h[J].materialName);var z=new r.VertexData;if(z.uvs=s.uvs,z.indices=s.indices,z.positions=s.positions,!0===this._meshLoadOptions.ComputeNormals){var Z=new Array;r.VertexData.ComputeNormals(s.positions,s.indices,Z),z.normals=Z}else z.normals=s.normals;!0===this._meshLoadOptions.ImportVertexColors&&(z.colors=s.colors),z.applyToMesh(Q),this._meshLoadOptions.InvertY&&(Q.scaling.y*=-1),Y.push(Q)}var $=[];return""!==S&&!1===this._meshLoadOptions.SkipMaterials&&$.push(new Promise((function(e,t){l._loadMTL(S,i,(function(o){try{w.parseMTL(n,o,i,l._forAssetContainer);for(var a=0;a<w.materials.length;a++){for(var s,u=0,c=[];(s=X.indexOf(w.materials[a].name,u))>-1;)c.push(s),u=s+1;if(-1===s&&0===c.length)w.materials[a].dispose();else for(var d=0;d<c.length;d++)Y[c[d]].material=w.materials[a]}e()}catch(n){r.Tools.Warn("Error processing MTL file: '"+S+"'"),l._meshLoadOptions.MaterialLoadingFailsSilently?e():t(n)}}),(function(n,o){r.Tools.Warn("Error downloading MTL file: '"+S+"'"),l._meshLoadOptions.MaterialLoadingFailsSilently?e():t(o)}))}))),Promise.all($).then((function(){return Y}))},e.OPTIMIZE_WITH_UV=!0,e.INVERT_Y=!1,e.IMPORT_VERTEX_COLORS=!1,e.COMPUTE_NORMALS=!1,e.UV_SCALING=new r.Vector2(1,1),e.SKIP_MATERIALS=!1,e.MATERIAL_LOADING_FAILS_SILENTLY=!0,e}();r.SceneLoader&&r.SceneLoader.RegisterPlugin(new a)},function(e,t,n){"use strict";n.r(t),n.d(t,"STLFileLoader",(function(){return o}));var r=n(0),o=function(){function e(){this.solidPattern=/solid (\S*)([\S\s]*?)endsolid[ ]*(\S*)/g,this.facetsPattern=/facet([\s\S]*?)endfacet/g,this.normalPattern=/normal[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g,this.vertexPattern=/vertex[\s]+([\-+]?[0-9]+\.?[0-9]*([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+[\s]+([\-+]?[0-9]*\.?[0-9]+([eE][\-+]?[0-9]+)?)+/g,this.name="stl",this.extensions={".stl":{isBinary:!0}}}return e.prototype.importMesh=function(e,t,n,o,a,i,s){var l;if("string"!=typeof n){if(this._isBinary(n)){var u=new r.Mesh("stlmesh",t);return this._parseBinary(u,n),a&&a.push(u),!0}for(var c=new Uint8Array(n),d="",f=0;f<n.byteLength;f++)d+=String.fromCharCode(c[f]);n=d}for(;l=this.solidPattern.exec(n);){var h=l[1];if(h!=l[3])return r.Tools.Error("Error in STL, solid name != endsolid name"),!1;if(e&&h)if(e instanceof Array){if(!e.indexOf(h))continue}else if(h!==e)continue;h=h||"stlmesh";u=new r.Mesh(h,t);this._parseASCII(u,l[2]),a&&a.push(u)}return!0},e.prototype.load=function(e,t,n){return this.importMesh(null,e,t,n,null,null,null)},e.prototype.loadAssetContainer=function(e,t,n,o){var a=new r.AssetContainer(e);return e._blockEntityCollection=!0,this.importMesh(null,e,t,n,a.meshes,null,null),e._blockEntityCollection=!1,a},e.prototype._isBinary=function(e){var t;if(50,84+50*(t=new DataView(e)).getUint32(80,!0)===t.byteLength)return!0;for(var n=t.byteLength,r=0;r<n;r++)if(t.getUint8(r)>127)return!0;return!1},e.prototype._parseBinary=function(e,t){for(var n=new DataView(t),o=n.getUint32(80,!0),a=0,i=new Float32Array(3*o*3),s=new Float32Array(3*o*3),l=new Uint32Array(3*o),u=0,c=0;c<o;c++){for(var d=84+50*c,f=n.getFloat32(d,!0),h=n.getFloat32(d+4,!0),p=n.getFloat32(d+8,!0),_=1;_<=3;_++){var m=d+12*_;i[a]=n.getFloat32(m,!0),i[a+2]=n.getFloat32(m+4,!0),i[a+1]=n.getFloat32(m+8,!0),s[a]=f,s[a+2]=h,s[a+1]=p,a+=3}l[u]=u++,l[u]=u++,l[u]=u++}e.setVerticesData(r.VertexBuffer.PositionKind,i),e.setVerticesData(r.VertexBuffer.NormalKind,s),e.setIndices(l),e.computeWorldMatrix(!0)},e.prototype._parseASCII=function(e,t){for(var n,o=[],a=[],i=[],s=0;n=this.facetsPattern.exec(t);){var l=n[1],u=this.normalPattern.exec(l);if(this.normalPattern.lastIndex=0,u){for(var c,d=[Number(u[1]),Number(u[5]),Number(u[3])];c=this.vertexPattern.exec(l);)o.push(Number(c[1]),Number(c[5]),Number(c[3])),a.push(d[0],d[1],d[2]);i.push(s++,s++,s++),this.vertexPattern.lastIndex=0}}this.facetsPattern.lastIndex=0,e.setVerticesData(r.VertexBuffer.PositionKind,o),e.setVerticesData(r.VertexBuffer.NormalKind,a),e.setIndices(i),e.computeWorldMatrix(!0)},e}();r.SceneLoader&&r.SceneLoader.RegisterPlugin(new o)},function(e,t,n){"use strict";(function(e){var r=n(2),o=n(3);n.d(t,"a",(function(){return r.GLTFFileLoader})),n.d(t,"b",(function(){return r.GLTFLoaderAnimationStartMode})),n.d(t,"c",(function(){return r.GLTFLoaderCoordinateSystemMode})),n.d(t,"d",(function(){return r.GLTFLoaderState})),n.d(t,"e",(function(){return o.GLTFValidation}));var a=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==a){for(var i in a.BABYLON=a.BABYLON||{},r)a.BABYLON[i]=r[i];for(var i in o)a.BABYLON[i]=o[i]}}).call(this,n(5))},function(e,t,n){"use strict";(function(e){var r=n(8);n.d(t,"a",(function(){return r}));var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in o.BABYLON=o.BABYLON||{},o.BABYLON.GLTF1=o.BABYLON.GLTF1||{},r)o.BABYLON.GLTF1[a]=r[a]}).call(this,n(5))},function(e,t,n){"use strict";(function(e){var r=n(7),o=n(6),a=n(9);n.d(t,"a",(function(){return a}));var i=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==i){i.BABYLON=i.BABYLON||{};var s=i.BABYLON;s.GLTF2=s.GLTF2||{},s.GLTF2.Loader=s.GLTF2.Loader||{},s.GLTF2.Loader.Extensions=s.GLTF2.Loader.Extensions||{};var l=[];for(var u in r)s.GLTF2.Loader.Extensions[u]=r[u],l.push(u);for(var u in o)s.GLTF2.Loader[u]=o[u],l.push(u);for(var u in a)l.indexOf(u)>-1||(s.GLTF2[u]=a[u])}}).call(this,n(5))},function(e,t,n){"use strict";n.r(t),function(e){var r=n(10);n.d(t,"MTLFileLoader",(function(){return r.MTLFileLoader})),n.d(t,"OBJFileLoader",(function(){return r.OBJFileLoader}));var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in r)o.BABYLON[a]=r[a]}.call(this,n(5))},function(e,t,n){"use strict";n.r(t),function(e){var r=n(11);n.d(t,"STLFileLoader",(function(){return r.STLFileLoader}));var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;if(void 0!==o)for(var a in r)o.BABYLON[a]=r[a]}.call(this,n(5))},,,,function(e,t,n){"use strict";n.r(t),n.d(t,"GLTFLoaderCoordinateSystemMode",(function(){return r.c})),n.d(t,"GLTFLoaderAnimationStartMode",(function(){return r.b})),n.d(t,"GLTFLoaderState",(function(){return r.d})),n.d(t,"GLTFFileLoader",(function(){return r.a})),n.d(t,"GLTFValidation",(function(){return r.e})),n.d(t,"GLTF1",(function(){return o.a})),n.d(t,"GLTF2",(function(){return a.a})),n.d(t,"MTLFileLoader",(function(){return i.MTLFileLoader})),n.d(t,"OBJFileLoader",(function(){return i.OBJFileLoader})),n.d(t,"STLFileLoader",(function(){return s.STLFileLoader}));n(2),n(3),n(8),n(9),n(10),n(11);var r=n(12),o=n(13),a=n(14),i=n(15),s=n(16)}])}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/babylonjs/babylon.js":
/*!*******************************************!*\
  !*** ./node_modules/babylonjs/babylon.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?module.exports=t():undefined}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,(function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=169)}([function(e,t,i){"use strict";i.d(t,"d",(function(){return c})),i.d(t,"e",(function(){return l})),i.d(t,"f",(function(){return u})),i.d(t,"b",(function(){return h})),i.d(t,"a",(function(){return d})),i.d(t,"c",(function(){return p}));var n=i(14),r=i(28),o=i(44),a=i(11),s=i(74),c=function(){function e(e,t){void 0===e&&(e=0),void 0===t&&(t=0),this.x=e,this.y=t}return e.prototype.toString=function(){return"{X: "+this.x+" Y: "+this.y+"}"},e.prototype.getClassName=function(){return"Vector2"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*e^(0|this.y)},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,this},e.prototype.fromArray=function(t,i){return void 0===i&&(i=0),e.FromArrayToRef(t,i,this),this},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this},e.prototype.copyFromFloats=function(e,t){return this.x=e,this.y=t,this},e.prototype.set=function(e,t){return this.copyFromFloats(e,t)},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this},e.prototype.addVector3=function(t){return new e(this.x+t.x,this.y+t.y)},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,this},e.prototype.multiplyByFloats=function(t,i){return new e(this.x*t,this.y*i)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.negate=function(){return new e(-this.x,-this.y)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this.x,-1*this.y)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this},e.prototype.scale=function(t){var i=new e(0,0);return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y},e.prototype.normalize=function(){var e=this.length();return 0===e||(this.x/=e,this.y/=e),this},e.prototype.clone=function(){return new e(this.x,this.y)},e.Zero=function(){return new e(0,0)},e.One=function(){return new e(1,1)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1]},e.CatmullRom=function(t,i,n,r,o){var a=o*o,s=o*a;return new e(.5*(2*i.x+(-t.x+n.x)*o+(2*t.x-5*i.x+4*n.x-r.x)*a+(-t.x+3*i.x-3*n.x+r.x)*s),.5*(2*i.y+(-t.y+n.y)*o+(2*t.y-5*i.y+4*n.y-r.y)*a+(-t.y+3*i.y-3*n.y+r.y)*s))},e.Clamp=function(t,i,n){var r=t.x;r=(r=r>n.x?n.x:r)<i.x?i.x:r;var o=t.y;return new e(r,o=(o=o>n.y?n.y:o)<i.y?i.y:o)},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t.x*c+n.x*l+i.x*u+r.x*h,t.y*c+n.y*l+i.y*u+r.y*h)},e.Lerp=function(t,i,n){return new e(t.x+(i.x-t.x)*n,t.y+(i.y-t.y)*n)},e.Dot=function(e,t){return e.x*t.x+e.y*t.y},e.Normalize=function(e){var t=e.clone();return t.normalize(),t},e.Minimize=function(t,i){return new e(t.x<i.x?t.x:i.x,t.y<i.y?t.y:i.y)},e.Maximize=function(t,i){return new e(t.x>i.x?t.x:i.x,t.y>i.y?t.y:i.y)},e.Transform=function(t,i){var n=e.Zero();return e.TransformToRef(t,i,n),n},e.TransformToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+n[12],o=e.x*n[1]+e.y*n[5]+n[13];i.x=r,i.y=o},e.PointInTriangle=function(e,t,i,n){var r=.5*(-i.y*n.x+t.y*(-i.x+n.x)+t.x*(i.y-n.y)+i.x*n.y),o=r<0?-1:1,a=(t.y*n.x-t.x*n.y+(n.y-t.y)*e.x+(t.x-n.x)*e.y)*o,s=(t.x*i.y-t.y*i.x+(t.y-i.y)*e.x+(i.x-t.x)*e.y)*o;return a>0&&s>0&&a+s<2*r*o},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y;return i*i+n*n},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.DistanceOfPointFromSegment=function(t,i,n){var r=e.DistanceSquared(i,n);if(0===r)return e.Distance(t,i);var o=n.subtract(i),a=Math.max(0,Math.min(1,e.Dot(t.subtract(i),o)/r)),s=i.add(o.multiplyByFloats(a,a));return e.Distance(t,s)},e}(),l=function(){function e(e,t,i){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),this._isDirty=!0,this._x=e,this._y=t,this._z=i}return Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._isDirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._isDirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"z",{get:function(){return this._z},set:function(e){this._z=e,this._isDirty=!0},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return"{X: "+this._x+" Y:"+this._y+" Z:"+this._z+"}"},e.prototype.getClassName=function(){return"Vector3"},e.prototype.getHashCode=function(){var e=0|this._x;return e=397*(e=397*e^(0|this._y))^(0|this._z)},e.prototype.asArray=function(){var e=[];return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,this},e.prototype.fromArray=function(t,i){return void 0===i&&(i=0),e.FromArrayToRef(t,i,this),this},e.prototype.toQuaternion=function(){return h.RotationYawPitchRoll(this._y,this._x,this._z)},e.prototype.addInPlace=function(e){return this.addInPlaceFromFloats(e._x,e._y,e._z)},e.prototype.addInPlaceFromFloats=function(e,t,i){return this.x+=e,this.y+=t,this.z+=i,this},e.prototype.add=function(t){return new e(this._x+t._x,this._y+t._y,this._z+t._z)},e.prototype.addToRef=function(e,t){return t.copyFromFloats(this._x+e._x,this._y+e._y,this._z+e._z)},e.prototype.subtractInPlace=function(e){return this.x-=e._x,this.y-=e._y,this.z-=e._z,this},e.prototype.subtract=function(t){return new e(this._x-t._x,this._y-t._y,this._z-t._z)},e.prototype.subtractToRef=function(e,t){return this.subtractFromFloatsToRef(e._x,e._y,e._z,t)},e.prototype.subtractFromFloats=function(t,i,n){return new e(this._x-t,this._y-i,this._z-n)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n){return n.copyFromFloats(this._x-e,this._y-t,this._z-i)},e.prototype.negate=function(){return new e(-this._x,-this._y,-this._z)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this._x,-1*this._y,-1*this._z)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this},e.prototype.scale=function(t){return new e(this._x*t,this._y*t,this._z*t)},e.prototype.scaleToRef=function(e,t){return t.copyFromFloats(this._x*e,this._y*e,this._z*e)},e.prototype.scaleAndAddToRef=function(e,t){return t.addInPlaceFromFloats(this._x*e,this._y*e,this._z*e)},e.prototype.projectOnPlane=function(t,i){var n=e.Zero();return this.projectOnPlaneToRef(t,i,n),n},e.prototype.projectOnPlaneToRef=function(t,i,n){var r=t.normal,o=t.d,a=f.Vector3[0];this.subtractToRef(i,a),a.normalize();var s=e.Dot(a,r),c=-(e.Dot(i,r)+o)/s,l=a.scaleInPlace(c);i.addToRef(l,n)},e.prototype.equals=function(e){return e&&this._x===e._x&&this._y===e._y&&this._z===e._z},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this._x,e._x,t)&&n.a.WithinEpsilon(this._y,e._y,t)&&n.a.WithinEpsilon(this._z,e._z,t)},e.prototype.equalsToFloats=function(e,t,i){return this._x===e&&this._y===t&&this._z===i},e.prototype.multiplyInPlace=function(e){return this.x*=e._x,this.y*=e._y,this.z*=e._z,this},e.prototype.multiply=function(e){return this.multiplyByFloats(e._x,e._y,e._z)},e.prototype.multiplyToRef=function(e,t){return t.copyFromFloats(this._x*e._x,this._y*e._y,this._z*e._z)},e.prototype.multiplyByFloats=function(t,i,n){return new e(this._x*t,this._y*i,this._z*n)},e.prototype.divide=function(t){return new e(this._x/t._x,this._y/t._y,this._z/t._z)},e.prototype.divideToRef=function(e,t){return t.copyFromFloats(this._x/e._x,this._y/e._y,this._z/e._z)},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return this.minimizeInPlaceFromFloats(e._x,e._y,e._z)},e.prototype.maximizeInPlace=function(e){return this.maximizeInPlaceFromFloats(e._x,e._y,e._z)},e.prototype.minimizeInPlaceFromFloats=function(e,t,i){return e<this._x&&(this.x=e),t<this._y&&(this.y=t),i<this._z&&(this.z=i),this},e.prototype.maximizeInPlaceFromFloats=function(e,t,i){return e>this._x&&(this.x=e),t>this._y&&(this.y=t),i>this._z&&(this.z=i),this},e.prototype.isNonUniformWithinEpsilon=function(e){var t=Math.abs(this._x),i=Math.abs(this._y);if(!n.a.WithinEpsilon(t,i,e))return!0;var r=Math.abs(this._z);return!n.a.WithinEpsilon(t,r,e)||!n.a.WithinEpsilon(i,r,e)},Object.defineProperty(e.prototype,"isNonUniform",{get:function(){var e=Math.abs(this._x);return e!==Math.abs(this._y)||e!==Math.abs(this._z)},enumerable:!1,configurable:!0}),e.prototype.floor=function(){return new e(Math.floor(this._x),Math.floor(this._y),Math.floor(this._z))},e.prototype.fract=function(){return new e(this._x-Math.floor(this._x),this._y-Math.floor(this._y),this._z-Math.floor(this._z))},e.prototype.length=function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z)},e.prototype.lengthSquared=function(){return this._x*this._x+this._y*this._y+this._z*this._z},e.prototype.normalize=function(){return this.normalizeFromLength(this.length())},e.prototype.reorderInPlace=function(e){var t=this;return"xyz"===(e=e.toLowerCase())||(f.Vector3[0].copyFrom(this),["x","y","z"].forEach((function(i,n){t[i]=f.Vector3[0][e[n]]}))),this},e.prototype.rotateByQuaternionToRef=function(t,i){return t.toRotationMatrix(f.Matrix[0]),e.TransformCoordinatesToRef(this,f.Matrix[0],i),i},e.prototype.rotateByQuaternionAroundPointToRef=function(e,t,i){return this.subtractToRef(t,f.Vector3[0]),f.Vector3[0].rotateByQuaternionToRef(e,f.Vector3[0]),t.addToRef(f.Vector3[0],i),i},e.prototype.cross=function(t){return e.Cross(this,t)},e.prototype.normalizeFromLength=function(e){return 0===e||1===e?this:this.scaleInPlace(1/e)},e.prototype.normalizeToNew=function(){var t=new e(0,0,0);return this.normalizeToRef(t),t},e.prototype.normalizeToRef=function(e){var t=this.length();return 0===t||1===t?e.copyFromFloats(this._x,this._y,this._z):this.scaleToRef(1/t,e)},e.prototype.clone=function(){return new e(this._x,this._y,this._z)},e.prototype.copyFrom=function(e){return this.copyFromFloats(e._x,e._y,e._z)},e.prototype.copyFromFloats=function(e,t,i){return this.x=e,this.y=t,this.z=i,this},e.prototype.set=function(e,t,i){return this.copyFromFloats(e,t,i)},e.prototype.setAll=function(e){return this.x=this.y=this.z=e,this},e.GetClipFactor=function(t,i,n,r){var o=e.Dot(t,n)-r;return o/(o-(e.Dot(i,n)-r))},e.GetAngleBetweenVectors=function(t,i,n){var r=t.normalizeToRef(f.Vector3[1]),o=i.normalizeToRef(f.Vector3[2]),a=e.Dot(r,o),s=f.Vector3[3];return e.CrossToRef(r,o,s),e.Dot(s,n)>0?Math.acos(a):-Math.acos(a)},e.FromArray=function(t,i){return void 0===i&&(i=0),new e(t[i],t[i+1],t[i+2])},e.FromFloatArray=function(t,i){return e.FromArray(t,i)},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2]},e.FromFloatArrayToRef=function(t,i,n){return e.FromArrayToRef(t,i,n)},e.FromFloatsToRef=function(e,t,i,n){n.copyFromFloats(e,t,i)},e.Zero=function(){return new e(0,0,0)},e.One=function(){return new e(1,1,1)},e.Up=function(){return new e(0,1,0)},Object.defineProperty(e,"UpReadOnly",{get:function(){return e._UpReadOnly},enumerable:!1,configurable:!0}),Object.defineProperty(e,"ZeroReadOnly",{get:function(){return e._ZeroReadOnly},enumerable:!1,configurable:!0}),e.Down=function(){return new e(0,-1,0)},e.Forward=function(t){return void 0===t&&(t=!1),new e(0,0,t?-1:1)},e.Backward=function(t){return void 0===t&&(t=!1),new e(0,0,t?1:-1)},e.Right=function(){return new e(1,0,0)},e.Left=function(){return new e(-1,0,0)},e.TransformCoordinates=function(t,i){var n=e.Zero();return e.TransformCoordinatesToRef(t,i,n),n},e.TransformCoordinatesToRef=function(t,i,n){e.TransformCoordinatesFromFloatsToRef(t._x,t._y,t._z,i,n)},e.TransformCoordinatesFromFloatsToRef=function(e,t,i,n,r){var o=n.m,a=e*o[0]+t*o[4]+i*o[8]+o[12],s=e*o[1]+t*o[5]+i*o[9]+o[13],c=e*o[2]+t*o[6]+i*o[10]+o[14],l=1/(e*o[3]+t*o[7]+i*o[11]+o[15]);r.x=a*l,r.y=s*l,r.z=c*l},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){this.TransformNormalFromFloatsToRef(e._x,e._y,e._z,t,i)},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r){var o=n.m;r.x=e*o[0]+t*o[4]+i*o[8],r.y=e*o[1]+t*o[5]+i*o[9],r.z=e*o[2]+t*o[6]+i*o[10]},e.CatmullRom=function(t,i,n,r,o){var a=o*o,s=o*a;return new e(.5*(2*i._x+(-t._x+n._x)*o+(2*t._x-5*i._x+4*n._x-r._x)*a+(-t._x+3*i._x-3*n._x+r._x)*s),.5*(2*i._y+(-t._y+n._y)*o+(2*t._y-5*i._y+4*n._y-r._y)*a+(-t._y+3*i._y-3*n._y+r._y)*s),.5*(2*i._z+(-t._z+n._z)*o+(2*t._z-5*i._z+4*n._z-r._z)*a+(-t._z+3*i._z-3*n._z+r._z)*s))},e.Clamp=function(t,i,n){var r=new e;return e.ClampToRef(t,i,n,r),r},e.ClampToRef=function(e,t,i,n){var r=e._x;r=(r=r>i._x?i._x:r)<t._x?t._x:r;var o=e._y;o=(o=o>i._y?i._y:o)<t._y?t._y:o;var a=e._z;a=(a=a>i._z?i._z:a)<t._z?t._z:a,n.copyFromFloats(r,o,a)},e.CheckExtends=function(e,t,i){t.minimizeInPlace(e),i.maximizeInPlace(e)},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t._x*c+n._x*l+i._x*u+r._x*h,t._y*c+n._y*l+i._y*u+r._y*h,t._z*c+n._z*l+i._z*u+r._z*h)},e.Lerp=function(t,i,n){var r=new e(0,0,0);return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){n.x=e._x+(t._x-e._x)*i,n.y=e._y+(t._y-e._y)*i,n.z=e._z+(t._z-e._z)*i},e.Dot=function(e,t){return e._x*t._x+e._y*t._y+e._z*t._z},e.Cross=function(t,i){var n=e.Zero();return e.CrossToRef(t,i,n),n},e.CrossToRef=function(e,t,i){var n=e._y*t._z-e._z*t._y,r=e._z*t._x-e._x*t._z,o=e._x*t._y-e._y*t._x;i.copyFromFloats(n,r,o)},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){e.normalizeToRef(t)},e.Project=function(t,i,n,r){var o=new e;return e.ProjectToRef(t,i,n,r,o),o},e.ProjectToRef=function(t,i,n,r,o){var a=r.width,s=r.height,c=r.x,l=r.y,u=f.Matrix[1];d.FromValuesToRef(a/2,0,0,0,0,-s/2,0,0,0,0,.5,0,c+a/2,s/2+l,.5,1,u);var h=f.Matrix[0];return i.multiplyToRef(n,h),h.multiplyToRef(u,h),e.TransformCoordinatesToRef(t,h,o),o},e._UnprojectFromInvertedMatrixToRef=function(t,i,r){e.TransformCoordinatesToRef(t,i,r);var o=i.m,a=t._x*o[3]+t._y*o[7]+t._z*o[11]+o[15];n.a.WithinEpsilon(a,1)&&r.scaleInPlace(1/a)},e.UnprojectFromTransform=function(t,i,n,r,o){var a=f.Matrix[0];r.multiplyToRef(o,a),a.invert(),t.x=t._x/i*2-1,t.y=-(t._y/n*2-1);var s=new e;return e._UnprojectFromInvertedMatrixToRef(t,a,s),s},e.Unproject=function(t,i,n,r,o,a){var s=e.Zero();return e.UnprojectToRef(t,i,n,r,o,a,s),s},e.UnprojectToRef=function(t,i,n,r,o,a,s){e.UnprojectFloatsToRef(t._x,t._y,t._z,i,n,r,o,a,s)},e.UnprojectFloatsToRef=function(t,i,n,r,o,a,s,c,l){var u=f.Matrix[0];a.multiplyToRef(s,u),u.multiplyToRef(c,u),u.invert();var h=f.Vector3[0];h.x=t/r*2-1,h.y=-(i/o*2-1),h.z=2*n-1,e._UnprojectFromInvertedMatrixToRef(h,u,l)},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e._x-t._x,n=e._y-t._y,r=e._z-t._z;return i*i+n*n+r*r},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.RotationFromAxis=function(t,i,n){var r=e.Zero();return e.RotationFromAxisToRef(t,i,n,r),r},e.RotationFromAxisToRef=function(e,t,i,n){var r=f.Quaternion[0];h.RotationQuaternionFromAxisToRef(e,t,i,r),r.toEulerAnglesToRef(n)},e._UpReadOnly=e.Up(),e._ZeroReadOnly=e.Zero(),e}(),u=function(){function e(e,t,i,n){this.x=e,this.y=t,this.z=i,this.w=n}return e.prototype.toString=function(){return"{X: "+this.x+" Y:"+this.y+" Z:"+this.z+" W:"+this.w+"}"},e.prototype.getClassName=function(){return"Vector4"},e.prototype.getHashCode=function(){var e=0|this.x;return e=397*(e=397*(e=397*e^(0|this.y))^(0|this.z))^(0|this.w)},e.prototype.asArray=function(){var e=new Array;return this.toArray(e,0),e},e.prototype.toArray=function(e,t){return void 0===t&&(t=0),e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,this},e.prototype.fromArray=function(t,i){return void 0===i&&(i=0),e.FromArrayToRef(t,i,this),this},e.prototype.addInPlace=function(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this},e.prototype.add=function(t){return new e(this.x+t.x,this.y+t.y,this.z+t.z,this.w+t.w)},e.prototype.addToRef=function(e,t){return t.x=this.x+e.x,t.y=this.y+e.y,t.z=this.z+e.z,t.w=this.w+e.w,this},e.prototype.subtractInPlace=function(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this},e.prototype.subtract=function(t){return new e(this.x-t.x,this.y-t.y,this.z-t.z,this.w-t.w)},e.prototype.subtractToRef=function(e,t){return t.x=this.x-e.x,t.y=this.y-e.y,t.z=this.z-e.z,t.w=this.w-e.w,this},e.prototype.subtractFromFloats=function(t,i,n,r){return new e(this.x-t,this.y-i,this.z-n,this.w-r)},e.prototype.subtractFromFloatsToRef=function(e,t,i,n,r){return r.x=this.x-e,r.y=this.y-t,r.z=this.z-i,r.w=this.w-n,this},e.prototype.negate=function(){return new e(-this.x,-this.y,-this.z,-this.w)},e.prototype.negateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this.w*=-1,this},e.prototype.negateToRef=function(e){return e.copyFromFloats(-1*this.x,-1*this.y,-1*this.z,-1*this.w)},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scale=function(t){return new e(this.x*t,this.y*t,this.z*t,this.w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this.x*e,t.y=this.y*e,t.z=this.z*e,t.w=this.w*e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this.x*e,t.y+=this.y*e,t.z+=this.z*e,t.w+=this.w*e,this},e.prototype.equals=function(e){return e&&this.x===e.x&&this.y===e.y&&this.z===e.z&&this.w===e.w},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this.x,e.x,t)&&n.a.WithinEpsilon(this.y,e.y,t)&&n.a.WithinEpsilon(this.z,e.z,t)&&n.a.WithinEpsilon(this.w,e.w,t)},e.prototype.equalsToFloats=function(e,t,i,n){return this.x===e&&this.y===t&&this.z===i&&this.w===n},e.prototype.multiplyInPlace=function(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this},e.prototype.multiply=function(t){return new e(this.x*t.x,this.y*t.y,this.z*t.z,this.w*t.w)},e.prototype.multiplyToRef=function(e,t){return t.x=this.x*e.x,t.y=this.y*e.y,t.z=this.z*e.z,t.w=this.w*e.w,this},e.prototype.multiplyByFloats=function(t,i,n,r){return new e(this.x*t,this.y*i,this.z*n,this.w*r)},e.prototype.divide=function(t){return new e(this.x/t.x,this.y/t.y,this.z/t.z,this.w/t.w)},e.prototype.divideToRef=function(e,t){return t.x=this.x/e.x,t.y=this.y/e.y,t.z=this.z/e.z,t.w=this.w/e.w,this},e.prototype.divideInPlace=function(e){return this.divideToRef(e,this)},e.prototype.minimizeInPlace=function(e){return e.x<this.x&&(this.x=e.x),e.y<this.y&&(this.y=e.y),e.z<this.z&&(this.z=e.z),e.w<this.w&&(this.w=e.w),this},e.prototype.maximizeInPlace=function(e){return e.x>this.x&&(this.x=e.x),e.y>this.y&&(this.y=e.y),e.z>this.z&&(this.z=e.z),e.w>this.w&&(this.w=e.w),this},e.prototype.floor=function(){return new e(Math.floor(this.x),Math.floor(this.y),Math.floor(this.z),Math.floor(this.w))},e.prototype.fract=function(){return new e(this.x-Math.floor(this.x),this.y-Math.floor(this.y),this.z-Math.floor(this.z),this.w-Math.floor(this.w))},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},e.prototype.lengthSquared=function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},e.prototype.normalize=function(){var e=this.length();return 0===e?this:this.scaleInPlace(1/e)},e.prototype.toVector3=function(){return new l(this.x,this.y,this.z)},e.prototype.clone=function(){return new e(this.x,this.y,this.z,this.w)},e.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.setAll=function(e){return this.x=this.y=this.z=this.w=e,this},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2],i.w=e[t+3]},e.FromFloatArrayToRef=function(t,i,n){e.FromArrayToRef(t,i,n)},e.FromFloatsToRef=function(e,t,i,n,r){r.x=e,r.y=t,r.z=i,r.w=n},e.Zero=function(){return new e(0,0,0,0)},e.One=function(){return new e(1,1,1,1)},e.Normalize=function(t){var i=e.Zero();return e.NormalizeToRef(t,i),i},e.NormalizeToRef=function(e,t){t.copyFrom(e),t.normalize()},e.Minimize=function(e,t){var i=e.clone();return i.minimizeInPlace(t),i},e.Maximize=function(e,t){var i=e.clone();return i.maximizeInPlace(t),i},e.Distance=function(t,i){return Math.sqrt(e.DistanceSquared(t,i))},e.DistanceSquared=function(e,t){var i=e.x-t.x,n=e.y-t.y,r=e.z-t.z,o=e.w-t.w;return i*i+n*n+r*r+o*o},e.Center=function(e,t){var i=e.add(t);return i.scaleInPlace(.5),i},e.TransformNormal=function(t,i){var n=e.Zero();return e.TransformNormalToRef(t,i,n),n},e.TransformNormalToRef=function(e,t,i){var n=t.m,r=e.x*n[0]+e.y*n[4]+e.z*n[8],o=e.x*n[1]+e.y*n[5]+e.z*n[9],a=e.x*n[2]+e.y*n[6]+e.z*n[10];i.x=r,i.y=o,i.z=a,i.w=e.w},e.TransformNormalFromFloatsToRef=function(e,t,i,n,r,o){var a=r.m;o.x=e*a[0]+t*a[4]+i*a[8],o.y=e*a[1]+t*a[5]+i*a[9],o.z=e*a[2]+t*a[6]+i*a[10],o.w=n},e.FromVector3=function(t,i){return void 0===i&&(i=0),new e(t._x,t._y,t._z,i)},e}(),h=function(){function e(e,t,i,n){void 0===e&&(e=0),void 0===t&&(t=0),void 0===i&&(i=0),void 0===n&&(n=1),this._isDirty=!0,this._x=e,this._y=t,this._z=i,this._w=n}return Object.defineProperty(e.prototype,"x",{get:function(){return this._x},set:function(e){this._x=e,this._isDirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this._y},set:function(e){this._y=e,this._isDirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"z",{get:function(){return this._z},set:function(e){this._z=e,this._isDirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"w",{get:function(){return this._w},set:function(e){this._w=e,this._isDirty=!0},enumerable:!1,configurable:!0}),e.prototype.toString=function(){return"{X: "+this._x+" Y:"+this._y+" Z:"+this._z+" W:"+this._w+"}"},e.prototype.getClassName=function(){return"Quaternion"},e.prototype.getHashCode=function(){var e=0|this._x;return e=397*(e=397*(e=397*e^(0|this._y))^(0|this._z))^(0|this._w)},e.prototype.asArray=function(){return[this._x,this._y,this._z,this._w]},e.prototype.equals=function(e){return e&&this._x===e._x&&this._y===e._y&&this._z===e._z&&this._w===e._w},e.prototype.equalsWithEpsilon=function(e,t){return void 0===t&&(t=r.a),e&&n.a.WithinEpsilon(this._x,e._x,t)&&n.a.WithinEpsilon(this._y,e._y,t)&&n.a.WithinEpsilon(this._z,e._z,t)&&n.a.WithinEpsilon(this._w,e._w,t)},e.prototype.clone=function(){return new e(this._x,this._y,this._z,this._w)},e.prototype.copyFrom=function(e){return this.x=e._x,this.y=e._y,this.z=e._z,this.w=e._w,this},e.prototype.copyFromFloats=function(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this},e.prototype.set=function(e,t,i,n){return this.copyFromFloats(e,t,i,n)},e.prototype.add=function(t){return new e(this._x+t._x,this._y+t._y,this._z+t._z,this._w+t._w)},e.prototype.addInPlace=function(e){return this._x+=e._x,this._y+=e._y,this._z+=e._z,this._w+=e._w,this},e.prototype.subtract=function(t){return new e(this._x-t._x,this._y-t._y,this._z-t._z,this._w-t._w)},e.prototype.scale=function(t){return new e(this._x*t,this._y*t,this._z*t,this._w*t)},e.prototype.scaleToRef=function(e,t){return t.x=this._x*e,t.y=this._y*e,t.z=this._z*e,t.w=this._w*e,this},e.prototype.scaleInPlace=function(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this},e.prototype.scaleAndAddToRef=function(e,t){return t.x+=this._x*e,t.y+=this._y*e,t.z+=this._z*e,t.w+=this._w*e,this},e.prototype.multiply=function(t){var i=new e(0,0,0,1);return this.multiplyToRef(t,i),i},e.prototype.multiplyToRef=function(e,t){var i=this._x*e._w+this._y*e._z-this._z*e._y+this._w*e._x,n=-this._x*e._z+this._y*e._w+this._z*e._x+this._w*e._y,r=this._x*e._y-this._y*e._x+this._z*e._w+this._w*e._z,o=-this._x*e._x-this._y*e._y-this._z*e._z+this._w*e._w;return t.copyFromFloats(i,n,r,o),this},e.prototype.multiplyInPlace=function(e){return this.multiplyToRef(e,this),this},e.prototype.conjugateToRef=function(e){return e.copyFromFloats(-this._x,-this._y,-this._z,this._w),this},e.prototype.conjugateInPlace=function(){return this.x*=-1,this.y*=-1,this.z*=-1,this},e.prototype.conjugate=function(){return new e(-this._x,-this._y,-this._z,this._w)},e.prototype.length=function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},e.prototype.normalize=function(){var e=this.length();if(0===e)return this;var t=1/e;return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this},e.prototype.toEulerAngles=function(e){void 0===e&&(e="YZX");var t=l.Zero();return this.toEulerAnglesToRef(t),t},e.prototype.toEulerAnglesToRef=function(e){var t=this._z,i=this._x,n=this._y,r=this._w,o=r*r,a=t*t,s=i*i,c=n*n,l=n*t-i*r;return l<-.4999999?(e.y=2*Math.atan2(n,r),e.x=Math.PI/2,e.z=0):l>.4999999?(e.y=2*Math.atan2(n,r),e.x=-Math.PI/2,e.z=0):(e.z=Math.atan2(2*(i*n+t*r),-a-s+c+o),e.x=Math.asin(-2*(t*n-i*r)),e.y=Math.atan2(2*(t*i+n*r),a-s-c+o)),this},e.prototype.toRotationMatrix=function(e){return d.FromQuaternionToRef(this,e),this},e.prototype.fromRotationMatrix=function(t){return e.FromRotationMatrixToRef(t,this),this},e.FromRotationMatrix=function(t){var i=new e;return e.FromRotationMatrixToRef(t,i),i},e.FromRotationMatrixToRef=function(e,t){var i,n=e.m,r=n[0],o=n[4],a=n[8],s=n[1],c=n[5],l=n[9],u=n[2],h=n[6],d=n[10],f=r+c+d;f>0?(i=.5/Math.sqrt(f+1),t.w=.25/i,t.x=(h-l)*i,t.y=(a-u)*i,t.z=(s-o)*i):r>c&&r>d?(i=2*Math.sqrt(1+r-c-d),t.w=(h-l)/i,t.x=.25*i,t.y=(o+s)/i,t.z=(a+u)/i):c>d?(i=2*Math.sqrt(1+c-r-d),t.w=(a-u)/i,t.x=(o+s)/i,t.y=.25*i,t.z=(l+h)/i):(i=2*Math.sqrt(1+d-r-c),t.w=(s-o)/i,t.x=(a+u)/i,t.y=(l+h)/i,t.z=.25*i)},e.Dot=function(e,t){return e._x*t._x+e._y*t._y+e._z*t._z+e._w*t._w},e.AreClose=function(t,i){return e.Dot(t,i)>=0},e.Zero=function(){return new e(0,0,0,0)},e.Inverse=function(t){return new e(-t._x,-t._y,-t._z,t._w)},e.InverseToRef=function(e,t){return t.set(-e._x,-e._y,-e._z,e._w),t},e.Identity=function(){return new e(0,0,0,1)},e.IsIdentity=function(e){return e&&0===e._x&&0===e._y&&0===e._z&&1===e._w},e.RotationAxis=function(t,i){return e.RotationAxisToRef(t,i,new e)},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(t/2);return e.normalize(),i.w=Math.cos(t/2),i.x=e._x*n,i.y=e._y*n,i.z=e._z*n,i},e.FromArray=function(t,i){return i||(i=0),new e(t[i],t[i+1],t[i+2],t[i+3])},e.FromArrayToRef=function(e,t,i){i.x=e[t],i.y=e[t+1],i.z=e[t+2],i.w=e[t+3]},e.FromEulerAngles=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerAnglesToRef=function(t,i,n,r){return e.RotationYawPitchRollToRef(i,t,n,r),r},e.FromEulerVector=function(t){var i=new e;return e.RotationYawPitchRollToRef(t._y,t._x,t._z,i),i},e.FromEulerVectorToRef=function(t,i){return e.RotationYawPitchRollToRef(t._y,t._x,t._z,i),i},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){var r=.5*i,o=.5*t,a=.5*e,s=Math.sin(r),c=Math.cos(r),l=Math.sin(o),u=Math.cos(o),h=Math.sin(a),d=Math.cos(a);n.x=d*l*c+h*u*s,n.y=h*u*c-d*l*s,n.z=d*u*s-h*l*c,n.w=d*u*c+h*l*s},e.RotationAlphaBetaGamma=function(t,i,n){var r=new e;return e.RotationAlphaBetaGammaToRef(t,i,n,r),r},e.RotationAlphaBetaGammaToRef=function(e,t,i,n){var r=.5*(i+e),o=.5*(i-e),a=.5*t;n.x=Math.cos(o)*Math.sin(a),n.y=Math.sin(o)*Math.sin(a),n.z=Math.sin(r)*Math.cos(a),n.w=Math.cos(r)*Math.cos(a)},e.RotationQuaternionFromAxis=function(t,i,n){var r=new e(0,0,0,0);return e.RotationQuaternionFromAxisToRef(t,i,n,r),r},e.RotationQuaternionFromAxisToRef=function(t,i,n,r){var o=f.Matrix[0];d.FromXYZAxesToRef(t.normalize(),i.normalize(),n.normalize(),o),e.FromRotationMatrixToRef(o,r)},e.Slerp=function(t,i,n){var r=e.Identity();return e.SlerpToRef(t,i,n,r),r},e.SlerpToRef=function(e,t,i,n){var r,o,a=e._x*t._x+e._y*t._y+e._z*t._z+e._w*t._w,s=!1;if(a<0&&(s=!0,a=-a),a>.999999)o=1-i,r=s?-i:i;else{var c=Math.acos(a),l=1/Math.sin(c);o=Math.sin((1-i)*c)*l,r=s?-Math.sin(i*c)*l:Math.sin(i*c)*l}n.x=o*e._x+r*t._x,n.y=o*e._y+r*t._y,n.z=o*e._z+r*t._z,n.w=o*e._w+r*t._w},e.Hermite=function(t,i,n,r,o){var a=o*o,s=o*a,c=2*s-3*a+1,l=-2*s+3*a,u=s-2*a+o,h=s-a;return new e(t._x*c+n._x*l+i._x*u+r._x*h,t._y*c+n._y*l+i._y*u+r._y*h,t._z*c+n._z*l+i._z*u+r._z*h,t._w*c+n._w*l+i._w*u+r._w*h)},e}(),d=function(){function e(){this._isIdentity=!1,this._isIdentityDirty=!0,this._isIdentity3x2=!0,this._isIdentity3x2Dirty=!0,this.updateFlag=-1,s.a.MatrixTrackPrecisionChange&&s.a.MatrixTrackedMatrices.push(this),this._m=new s.a.MatrixCurrentType(16),this._updateIdentityStatus(!1)}return Object.defineProperty(e,"Use64Bits",{get:function(){return s.a.MatrixUse64Bits},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"m",{get:function(){return this._m},enumerable:!1,configurable:!0}),e.prototype._markAsUpdated=function(){this.updateFlag=e._updateFlagSeed++,this._isIdentity=!1,this._isIdentity3x2=!1,this._isIdentityDirty=!0,this._isIdentity3x2Dirty=!0},e.prototype._updateIdentityStatus=function(t,i,n,r){void 0===i&&(i=!1),void 0===n&&(n=!1),void 0===r&&(r=!0),this.updateFlag=e._updateFlagSeed++,this._isIdentity=t,this._isIdentity3x2=t||n,this._isIdentityDirty=!this._isIdentity&&i,this._isIdentity3x2Dirty=!this._isIdentity3x2&&r},e.prototype.isIdentity=function(){if(this._isIdentityDirty){this._isIdentityDirty=!1;var e=this._m;this._isIdentity=1===e[0]&&0===e[1]&&0===e[2]&&0===e[3]&&0===e[4]&&1===e[5]&&0===e[6]&&0===e[7]&&0===e[8]&&0===e[9]&&1===e[10]&&0===e[11]&&0===e[12]&&0===e[13]&&0===e[14]&&1===e[15]}return this._isIdentity},e.prototype.isIdentityAs3x2=function(){return this._isIdentity3x2Dirty&&(this._isIdentity3x2Dirty=!1,1!==this._m[0]||1!==this._m[5]||1!==this._m[15]||0!==this._m[1]||0!==this._m[2]||0!==this._m[3]||0!==this._m[4]||0!==this._m[6]||0!==this._m[7]||0!==this._m[8]||0!==this._m[9]||0!==this._m[10]||0!==this._m[11]||0!==this._m[12]||0!==this._m[13]||0!==this._m[14]?this._isIdentity3x2=!1:this._isIdentity3x2=!0),this._isIdentity3x2},e.prototype.determinant=function(){if(!0===this._isIdentity)return 1;var e=this._m,t=e[0],i=e[1],n=e[2],r=e[3],o=e[4],a=e[5],s=e[6],c=e[7],l=e[8],u=e[9],h=e[10],d=e[11],f=e[12],p=e[13],_=e[14],m=e[15],g=h*m-_*d,v=u*m-p*d,b=u*_-p*h,y=l*m-f*d,T=l*_-h*f,E=l*p-f*u;return t*+(a*g-s*v+c*b)+i*-(o*g-s*y+c*T)+n*+(o*v-a*y+c*E)+r*-(o*b-a*T+s*E)},e.prototype.toArray=function(){return this._m},e.prototype.asArray=function(){return this._m},e.prototype.invert=function(){return this.invertToRef(this),this},e.prototype.reset=function(){return e.FromValuesToRef(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,this),this._updateIdentityStatus(!1),this},e.prototype.add=function(t){var i=new e;return this.addToRef(t,i),i},e.prototype.addToRef=function(e,t){for(var i=this._m,n=t._m,r=e.m,o=0;o<16;o++)n[o]=i[o]+r[o];return t._markAsUpdated(),this},e.prototype.addToSelf=function(e){for(var t=this._m,i=e.m,n=0;n<16;n++)t[n]+=i[n];return this._markAsUpdated(),this},e.prototype.invertToRef=function(t){if(!0===this._isIdentity)return e.IdentityToRef(t),this;var i=this._m,n=i[0],r=i[1],o=i[2],a=i[3],s=i[4],c=i[5],l=i[6],u=i[7],h=i[8],d=i[9],f=i[10],p=i[11],_=i[12],m=i[13],g=i[14],v=i[15],b=f*v-g*p,y=d*v-m*p,T=d*g-m*f,E=h*v-_*p,S=h*g-f*_,A=h*m-_*d,P=+(c*b-l*y+u*T),C=-(s*b-l*E+u*S),R=+(s*y-c*E+u*A),x=-(s*T-c*S+l*A),O=n*P+r*C+o*R+a*x;if(0===O)return t.copyFrom(this),this;var M=1/O,I=l*v-g*u,D=c*v-m*u,N=c*g-m*l,L=s*v-_*u,w=s*g-_*l,F=s*m-_*c,B=l*p-f*u,U=c*p-d*u,V=c*f-d*l,k=s*p-h*u,z=s*f-h*l,G=s*d-h*c,j=-(r*b-o*y+a*T),W=+(n*b-o*E+a*S),H=-(n*y-r*E+a*A),X=+(n*T-r*S+o*A),Y=+(r*I-o*D+a*N),K=-(n*I-o*L+a*w),Q=+(n*D-r*L+a*F),q=-(n*N-r*w+o*F),Z=-(r*B-o*U+a*V),J=+(n*B-o*k+a*z),$=-(n*U-r*k+a*G),ee=+(n*V-r*z+o*G);return e.FromValuesToRef(P*M,j*M,Y*M,Z*M,C*M,W*M,K*M,J*M,R*M,H*M,Q*M,$*M,x*M,X*M,q*M,ee*M,t),this},e.prototype.addAtIndex=function(e,t){return this._m[e]+=t,this._markAsUpdated(),this},e.prototype.multiplyAtIndex=function(e,t){return this._m[e]*=t,this._markAsUpdated(),this},e.prototype.setTranslationFromFloats=function(e,t,i){return this._m[12]=e,this._m[13]=t,this._m[14]=i,this._markAsUpdated(),this},e.prototype.addTranslationFromFloats=function(e,t,i){return this._m[12]+=e,this._m[13]+=t,this._m[14]+=i,this._markAsUpdated(),this},e.prototype.setTranslation=function(e){return this.setTranslationFromFloats(e._x,e._y,e._z)},e.prototype.getTranslation=function(){return new l(this._m[12],this._m[13],this._m[14])},e.prototype.getTranslationToRef=function(e){return e.x=this._m[12],e.y=this._m[13],e.z=this._m[14],this},e.prototype.removeRotationAndScaling=function(){var t=this.m;return e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t[12],t[13],t[14],t[15],this),this._updateIdentityStatus(0===t[12]&&0===t[13]&&0===t[14]&&1===t[15]),this},e.prototype.multiply=function(t){var i=new e;return this.multiplyToRef(t,i),i},e.prototype.copyFrom=function(e){e.copyToArray(this._m);var t=e;return this._updateIdentityStatus(t._isIdentity,t._isIdentityDirty,t._isIdentity3x2,t._isIdentity3x2Dirty),this},e.prototype.copyToArray=function(e,t){void 0===t&&(t=0);var i=this._m;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],this},e.prototype.multiplyToRef=function(e,t){return this._isIdentity?(t.copyFrom(e),this):e._isIdentity?(t.copyFrom(this),this):(this.multiplyToArray(e,t._m,0),t._markAsUpdated(),this)},e.prototype.multiplyToArray=function(e,t,i){var n=this._m,r=e.m,o=n[0],a=n[1],s=n[2],c=n[3],l=n[4],u=n[5],h=n[6],d=n[7],f=n[8],p=n[9],_=n[10],m=n[11],g=n[12],v=n[13],b=n[14],y=n[15],T=r[0],E=r[1],S=r[2],A=r[3],P=r[4],C=r[5],R=r[6],x=r[7],O=r[8],M=r[9],I=r[10],D=r[11],N=r[12],L=r[13],w=r[14],F=r[15];return t[i]=o*T+a*P+s*O+c*N,t[i+1]=o*E+a*C+s*M+c*L,t[i+2]=o*S+a*R+s*I+c*w,t[i+3]=o*A+a*x+s*D+c*F,t[i+4]=l*T+u*P+h*O+d*N,t[i+5]=l*E+u*C+h*M+d*L,t[i+6]=l*S+u*R+h*I+d*w,t[i+7]=l*A+u*x+h*D+d*F,t[i+8]=f*T+p*P+_*O+m*N,t[i+9]=f*E+p*C+_*M+m*L,t[i+10]=f*S+p*R+_*I+m*w,t[i+11]=f*A+p*x+_*D+m*F,t[i+12]=g*T+v*P+b*O+y*N,t[i+13]=g*E+v*C+b*M+y*L,t[i+14]=g*S+v*R+b*I+y*w,t[i+15]=g*A+v*x+b*D+y*F,this},e.prototype.equals=function(e){var t=e;if(!t)return!1;if((this._isIdentity||t._isIdentity)&&!this._isIdentityDirty&&!t._isIdentityDirty)return this._isIdentity&&t._isIdentity;var i=this.m,n=t.m;return i[0]===n[0]&&i[1]===n[1]&&i[2]===n[2]&&i[3]===n[3]&&i[4]===n[4]&&i[5]===n[5]&&i[6]===n[6]&&i[7]===n[7]&&i[8]===n[8]&&i[9]===n[9]&&i[10]===n[10]&&i[11]===n[11]&&i[12]===n[12]&&i[13]===n[13]&&i[14]===n[14]&&i[15]===n[15]},e.prototype.clone=function(){var t=new e;return t.copyFrom(this),t},e.prototype.getClassName=function(){return"Matrix"},e.prototype.getHashCode=function(){for(var e=0|this._m[0],t=1;t<16;t++)e=397*e^(0|this._m[t]);return e},e.prototype.decompose=function(t,i,n){if(this._isIdentity)return n&&n.setAll(0),t&&t.setAll(1),i&&i.copyFromFloats(0,0,0,1),!0;var r=this._m;if(n&&n.copyFromFloats(r[12],r[13],r[14]),(t=t||f.Vector3[0]).x=Math.sqrt(r[0]*r[0]+r[1]*r[1]+r[2]*r[2]),t.y=Math.sqrt(r[4]*r[4]+r[5]*r[5]+r[6]*r[6]),t.z=Math.sqrt(r[8]*r[8]+r[9]*r[9]+r[10]*r[10]),this.determinant()<=0&&(t.y*=-1),0===t._x||0===t._y||0===t._z)return i&&i.copyFromFloats(0,0,0,1),!1;if(i){var o=1/t._x,a=1/t._y,s=1/t._z;e.FromValuesToRef(r[0]*o,r[1]*o,r[2]*o,0,r[4]*a,r[5]*a,r[6]*a,0,r[8]*s,r[9]*s,r[10]*s,0,0,0,0,1,f.Matrix[0]),h.FromRotationMatrixToRef(f.Matrix[0],i)}return!0},e.prototype.getRow=function(e){if(e<0||e>3)return null;var t=4*e;return new u(this._m[t+0],this._m[t+1],this._m[t+2],this._m[t+3])},e.prototype.setRow=function(e,t){return this.setRowFromFloats(e,t.x,t.y,t.z,t.w)},e.prototype.transpose=function(){return e.Transpose(this)},e.prototype.transposeToRef=function(t){return e.TransposeToRef(this,t),this},e.prototype.setRowFromFloats=function(e,t,i,n,r){if(e<0||e>3)return this;var o=4*e;return this._m[o+0]=t,this._m[o+1]=i,this._m[o+2]=n,this._m[o+3]=r,this._markAsUpdated(),this},e.prototype.scale=function(t){var i=new e;return this.scaleToRef(t,i),i},e.prototype.scaleToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.scaleAndAddToRef=function(e,t){for(var i=0;i<16;i++)t._m[i]+=this._m[i]*e;return t._markAsUpdated(),this},e.prototype.toNormalMatrix=function(t){var i=f.Matrix[0];this.invertToRef(i),i.transposeToRef(t);var n=t._m;e.FromValuesToRef(n[0],n[1],n[2],0,n[4],n[5],n[6],0,n[8],n[9],n[10],0,0,0,0,1,t)},e.prototype.getRotationMatrix=function(){var t=new e;return this.getRotationMatrixToRef(t),t},e.prototype.getRotationMatrixToRef=function(t){var i=f.Vector3[0];if(!this.decompose(i))return e.IdentityToRef(t),this;var n=this._m,r=1/i._x,o=1/i._y,a=1/i._z;return e.FromValuesToRef(n[0]*r,n[1]*r,n[2]*r,0,n[4]*o,n[5]*o,n[6]*o,0,n[8]*a,n[9]*a,n[10]*a,0,0,0,0,1,t),this},e.prototype.toggleModelMatrixHandInPlace=function(){var e=this._m;e[2]*=-1,e[6]*=-1,e[8]*=-1,e[9]*=-1,e[14]*=-1,this._markAsUpdated()},e.prototype.toggleProjectionMatrixHandInPlace=function(){var e=this._m;e[8]*=-1,e[9]*=-1,e[10]*=-1,e[11]*=-1,this._markAsUpdated()},e.FromArray=function(t,i){void 0===i&&(i=0);var n=new e;return e.FromArrayToRef(t,i,n),n},e.FromArrayToRef=function(e,t,i){for(var n=0;n<16;n++)i._m[n]=e[n+t];i._markAsUpdated()},e.FromFloat32ArrayToRefScaled=function(e,t,i,n){for(var r=0;r<16;r++)n._m[r]=e[r+t]*i;n._markAsUpdated()},Object.defineProperty(e,"IdentityReadOnly",{get:function(){return e._identityReadOnly},enumerable:!1,configurable:!0}),e.FromValuesToRef=function(e,t,i,n,r,o,a,s,c,l,u,h,d,f,p,_,m){var g=m._m;g[0]=e,g[1]=t,g[2]=i,g[3]=n,g[4]=r,g[5]=o,g[6]=a,g[7]=s,g[8]=c,g[9]=l,g[10]=u,g[11]=h,g[12]=d,g[13]=f,g[14]=p,g[15]=_,m._markAsUpdated()},e.FromValues=function(t,i,n,r,o,a,s,c,l,u,h,d,f,p,_,m){var g=new e,v=g._m;return v[0]=t,v[1]=i,v[2]=n,v[3]=r,v[4]=o,v[5]=a,v[6]=s,v[7]=c,v[8]=l,v[9]=u,v[10]=h,v[11]=d,v[12]=f,v[13]=p,v[14]=_,v[15]=m,g._markAsUpdated(),g},e.Compose=function(t,i,n){var r=new e;return e.ComposeToRef(t,i,n,r),r},e.ComposeToRef=function(e,t,i,n){var r=n._m,o=t._x,a=t._y,s=t._z,c=t._w,l=o+o,u=a+a,h=s+s,d=o*l,f=o*u,p=o*h,_=a*u,m=a*h,g=s*h,v=c*l,b=c*u,y=c*h,T=e._x,E=e._y,S=e._z;r[0]=(1-(_+g))*T,r[1]=(f+y)*T,r[2]=(p-b)*T,r[3]=0,r[4]=(f-y)*E,r[5]=(1-(d+g))*E,r[6]=(m+v)*E,r[7]=0,r[8]=(p+b)*S,r[9]=(m-v)*S,r[10]=(1-(d+_))*S,r[11]=0,r[12]=i._x,r[13]=i._y,r[14]=i._z,r[15]=1,n._markAsUpdated()},e.Identity=function(){var t=e.FromValues(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return t._updateIdentityStatus(!0),t},e.IdentityToRef=function(t){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,t),t._updateIdentityStatus(!0)},e.Zero=function(){var t=e.FromValues(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);return t._updateIdentityStatus(!1),t},e.RotationX=function(t){var i=new e;return e.RotationXToRef(t,i),i},e.Invert=function(t){var i=new e;return t.invertToRef(i),i},e.RotationXToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(1,0,0,0,0,r,n,0,0,-n,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationY=function(t){var i=new e;return e.RotationYToRef(t,i),i},e.RotationYToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,0,-n,0,0,1,0,0,n,0,r,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationZ=function(t){var i=new e;return e.RotationZToRef(t,i),i},e.RotationZToRef=function(t,i){var n=Math.sin(t),r=Math.cos(t);e.FromValuesToRef(r,n,0,0,-n,r,0,0,0,0,1,0,0,0,0,1,i),i._updateIdentityStatus(1===r&&0===n)},e.RotationAxis=function(t,i){var n=new e;return e.RotationAxisToRef(t,i,n),n},e.RotationAxisToRef=function(e,t,i){var n=Math.sin(-t),r=Math.cos(-t),o=1-r;e.normalize();var a=i._m;a[0]=e._x*e._x*o+r,a[1]=e._x*e._y*o-e._z*n,a[2]=e._x*e._z*o+e._y*n,a[3]=0,a[4]=e._y*e._x*o+e._z*n,a[5]=e._y*e._y*o+r,a[6]=e._y*e._z*o-e._x*n,a[7]=0,a[8]=e._z*e._x*o-e._y*n,a[9]=e._z*e._y*o+e._x*n,a[10]=e._z*e._z*o+r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,i._markAsUpdated()},e.RotationAlignToRef=function(e,t,i){var n=l.Cross(t,e),r=l.Dot(t,e),o=1/(1+r),a=i._m;a[0]=n._x*n._x*o+r,a[1]=n._y*n._x*o-n._z,a[2]=n._z*n._x*o+n._y,a[3]=0,a[4]=n._x*n._y*o+n._z,a[5]=n._y*n._y*o+r,a[6]=n._z*n._y*o-n._x,a[7]=0,a[8]=n._x*n._z*o-n._y,a[9]=n._y*n._z*o+n._x,a[10]=n._z*n._z*o+r,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,i._markAsUpdated()},e.RotationYawPitchRoll=function(t,i,n){var r=new e;return e.RotationYawPitchRollToRef(t,i,n,r),r},e.RotationYawPitchRollToRef=function(e,t,i,n){h.RotationYawPitchRollToRef(e,t,i,f.Quaternion[0]),f.Quaternion[0].toRotationMatrix(n)},e.Scaling=function(t,i,n){var r=new e;return e.ScalingToRef(t,i,n,r),r},e.ScalingToRef=function(t,i,n,r){e.FromValuesToRef(t,0,0,0,0,i,0,0,0,0,n,0,0,0,0,1,r),r._updateIdentityStatus(1===t&&1===i&&1===n)},e.Translation=function(t,i,n){var r=new e;return e.TranslationToRef(t,i,n,r),r},e.TranslationToRef=function(t,i,n,r){e.FromValuesToRef(1,0,0,0,0,1,0,0,0,0,1,0,t,i,n,1,r),r._updateIdentityStatus(0===t&&0===i&&0===n)},e.Lerp=function(t,i,n){var r=new e;return e.LerpToRef(t,i,n,r),r},e.LerpToRef=function(e,t,i,n){for(var r=n._m,o=e.m,a=t.m,s=0;s<16;s++)r[s]=o[s]*(1-i)+a[s]*i;n._markAsUpdated()},e.DecomposeLerp=function(t,i,n){var r=new e;return e.DecomposeLerpToRef(t,i,n,r),r},e.DecomposeLerpToRef=function(t,i,n,r){var o=f.Vector3[0],a=f.Quaternion[0],s=f.Vector3[1];t.decompose(o,a,s);var c=f.Vector3[2],u=f.Quaternion[1],d=f.Vector3[3];i.decompose(c,u,d);var p=f.Vector3[4];l.LerpToRef(o,c,n,p);var _=f.Quaternion[2];h.SlerpToRef(a,u,n,_);var m=f.Vector3[5];l.LerpToRef(s,d,n,m),e.ComposeToRef(p,_,m,r)},e.LookAtLH=function(t,i,n){var r=new e;return e.LookAtLHToRef(t,i,n,r),r},e.LookAtLHToRef=function(t,i,n,r){var o=f.Vector3[0],a=f.Vector3[1],s=f.Vector3[2];i.subtractToRef(t,s),s.normalize(),l.CrossToRef(n,s,o);var c=o.lengthSquared();0===c?o.x=1:o.normalizeFromLength(Math.sqrt(c)),l.CrossToRef(s,o,a),a.normalize();var u=-l.Dot(o,t),h=-l.Dot(a,t),d=-l.Dot(s,t);e.FromValuesToRef(o._x,a._x,s._x,0,o._y,a._y,s._y,0,o._z,a._z,s._z,0,u,h,d,1,r)},e.LookAtRH=function(t,i,n){var r=new e;return e.LookAtRHToRef(t,i,n,r),r},e.LookAtRHToRef=function(t,i,n,r){var o=f.Vector3[0],a=f.Vector3[1],s=f.Vector3[2];t.subtractToRef(i,s),s.normalize(),l.CrossToRef(n,s,o);var c=o.lengthSquared();0===c?o.x=1:o.normalizeFromLength(Math.sqrt(c)),l.CrossToRef(s,o,a),a.normalize();var u=-l.Dot(o,t),h=-l.Dot(a,t),d=-l.Dot(s,t);e.FromValuesToRef(o._x,a._x,s._x,0,o._y,a._y,s._y,0,o._z,a._z,s._z,0,u,h,d,1,r)},e.OrthoLH=function(t,i,n,r){var o=new e;return e.OrthoLHToRef(t,i,n,r,o),o},e.OrthoLHToRef=function(t,i,n,r,o){var a=2/t,s=2/i,c=2/(r-n),l=-(r+n)/(r-n);e.FromValuesToRef(a,0,0,0,0,s,0,0,0,0,c,0,0,0,l,1,o),o._updateIdentityStatus(1===a&&1===s&&1===c&&0===l)},e.OrthoOffCenterLH=function(t,i,n,r,o,a){var s=new e;return e.OrthoOffCenterLHToRef(t,i,n,r,o,a,s),s},e.OrthoOffCenterLHToRef=function(t,i,n,r,o,a,s){var c=2/(i-t),l=2/(r-n),u=2/(a-o),h=-(a+o)/(a-o),d=(t+i)/(t-i),f=(r+n)/(n-r);e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,u,0,d,f,h,1,s),s._markAsUpdated()},e.OrthoOffCenterRH=function(t,i,n,r,o,a){var s=new e;return e.OrthoOffCenterRHToRef(t,i,n,r,o,a,s),s},e.OrthoOffCenterRHToRef=function(t,i,n,r,o,a,s){e.OrthoOffCenterLHToRef(t,i,n,r,o,a,s),s._m[10]*=-1},e.PerspectiveLH=function(t,i,n,r){var o=new e,a=2*n/t,s=2*n/i,c=(r+n)/(r-n),l=-2*r*n/(r-n);return e.FromValuesToRef(a,0,0,0,0,s,0,0,0,0,c,1,0,0,l,0,o),o._updateIdentityStatus(!1),o},e.PerspectiveFovLH=function(t,i,n,r){var o=new e;return e.PerspectiveFovLHToRef(t,i,n,r,o),o},e.PerspectiveFovLHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=n,c=r,l=1/Math.tan(.5*t),u=a?l/i:l,h=a?l:l*i,d=(c+s)/(c-s),f=-2*c*s/(c-s);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,1,0,0,f,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovReverseLHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=1/Math.tan(.5*t),c=a?s/i:s,l=a?s:s*i;e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,-n,1,0,0,1,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovRH=function(t,i,n,r){var o=new e;return e.PerspectiveFovRHToRef(t,i,n,r,o),o},e.PerspectiveFovRHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=n,c=r,l=1/Math.tan(.5*t),u=a?l/i:l,h=a?l:l*i,d=-(c+s)/(c-s),f=-2*c*s/(c-s);e.FromValuesToRef(u,0,0,0,0,h,0,0,0,0,d,-1,0,0,f,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovReverseRHToRef=function(t,i,n,r,o,a){void 0===a&&(a=!0);var s=1/Math.tan(.5*t),c=a?s/i:s,l=a?s:s*i;e.FromValuesToRef(c,0,0,0,0,l,0,0,0,0,-n,-1,0,0,-1,0,o),o._updateIdentityStatus(!1)},e.PerspectiveFovWebVRToRef=function(e,t,i,n,r){void 0===r&&(r=!1);var o=r?-1:1,a=Math.tan(e.upDegrees*Math.PI/180),s=Math.tan(e.downDegrees*Math.PI/180),c=Math.tan(e.leftDegrees*Math.PI/180),l=Math.tan(e.rightDegrees*Math.PI/180),u=2/(c+l),h=2/(a+s),d=n._m;d[0]=u,d[1]=d[2]=d[3]=d[4]=0,d[5]=h,d[6]=d[7]=0,d[8]=(c-l)*u*.5,d[9]=-(a-s)*h*.5,d[10]=-i/(t-i),d[11]=1*o,d[12]=d[13]=d[15]=0,d[14]=-2*i*t/(i-t),n._markAsUpdated()},e.GetFinalMatrix=function(t,i,n,r,o,a){var s=t.width,c=t.height,l=t.x,u=t.y,h=e.FromValues(s/2,0,0,0,0,-c/2,0,0,0,0,a-o,0,l+s/2,c/2+u,o,1),d=f.Matrix[0];return i.multiplyToRef(n,d),d.multiplyToRef(r,d),d.multiply(h)},e.GetAsMatrix2x2=function(e){var t=e.m,i=[t[0],t[1],t[4],t[5]];return s.a.MatrixUse64Bits?i:new Float32Array(i)},e.GetAsMatrix3x3=function(e){var t=e.m,i=[t[0],t[1],t[2],t[4],t[5],t[6],t[8],t[9],t[10]];return s.a.MatrixUse64Bits?i:new Float32Array(i)},e.Transpose=function(t){var i=new e;return e.TransposeToRef(t,i),i},e.TransposeToRef=function(e,t){var i=t._m,n=e.m;i[0]=n[0],i[1]=n[4],i[2]=n[8],i[3]=n[12],i[4]=n[1],i[5]=n[5],i[6]=n[9],i[7]=n[13],i[8]=n[2],i[9]=n[6],i[10]=n[10],i[11]=n[14],i[12]=n[3],i[13]=n[7],i[14]=n[11],i[15]=n[15],t._updateIdentityStatus(e._isIdentity,e._isIdentityDirty)},e.Reflection=function(t){var i=new e;return e.ReflectionToRef(t,i),i},e.ReflectionToRef=function(t,i){t.normalize();var n=t.normal.x,r=t.normal.y,o=t.normal.z,a=-2*n,s=-2*r,c=-2*o;e.FromValuesToRef(a*n+1,s*n,c*n,0,a*r,s*r+1,c*r,0,a*o,s*o,c*o+1,0,a*t.d,s*t.d,c*t.d,1,i)},e.FromXYZAxesToRef=function(t,i,n,r){e.FromValuesToRef(t._x,t._y,t._z,0,i._x,i._y,i._z,0,n._x,n._y,n._z,0,0,0,0,1,r)},e.FromQuaternionToRef=function(e,t){var i=e._x*e._x,n=e._y*e._y,r=e._z*e._z,o=e._x*e._y,a=e._z*e._w,s=e._z*e._x,c=e._y*e._w,l=e._y*e._z,u=e._x*e._w;t._m[0]=1-2*(n+r),t._m[1]=2*(o+a),t._m[2]=2*(s-c),t._m[3]=0,t._m[4]=2*(o-a),t._m[5]=1-2*(r+i),t._m[6]=2*(l+u),t._m[7]=0,t._m[8]=2*(s+c),t._m[9]=2*(l-u),t._m[10]=1-2*(n+i),t._m[11]=0,t._m[12]=0,t._m[13]=0,t._m[14]=0,t._m[15]=1,t._markAsUpdated()},e._updateFlagSeed=0,e._identityReadOnly=e.Identity(),e}(),f=function(){function e(){}return e.Vector3=o.a.BuildArray(6,l.Zero),e.Matrix=o.a.BuildArray(2,d.Identity),e.Quaternion=o.a.BuildArray(3,h.Zero),e}(),p=function(){function e(){}return e.Vector2=o.a.BuildArray(3,c.Zero),e.Vector3=o.a.BuildArray(13,l.Zero),e.Vector4=o.a.BuildArray(3,u.Zero),e.Quaternion=o.a.BuildArray(2,h.Zero),e.Matrix=o.a.BuildArray(8,d.Identity),e}();a.a.RegisteredTypes["BABYLON.Vector2"]=c,a.a.RegisteredTypes["BABYLON.Vector3"]=l,a.a.RegisteredTypes["BABYLON.Vector4"]=u,a.a.RegisteredTypes["BABYLON.Matrix"]=d},function(e,t,i){"use strict";i.d(t,"d",(function(){return r})),i.d(t,"a",(function(){return o})),i.d(t,"c",(function(){return a})),i.d(t,"b",(function(){return s})),i.d(t,"e",(function(){return c})),i.d(t,"f",(function(){return l}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/backo2/index.js":
/*!**************************************!*\
  !*** ./node_modules/backo2/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * Expose `Backoff`.
 */

module.exports = Backoff;

/**
 * Initialize backoff timer with `opts`.
 *
 * - `min` initial timeout in milliseconds [100]
 * - `max` max timeout [10000]
 * - `jitter` [0]
 * - `factor` [2]
 *
 * @param {Object} opts
 * @api public
 */

function Backoff(opts) {
  opts = opts || {};
  this.ms = opts.min || 100;
  this.max = opts.max || 10000;
  this.factor = opts.factor || 2;
  this.jitter = opts.jitter > 0 && opts.jitter <= 1 ? opts.jitter : 0;
  this.attempts = 0;
}

/**
 * Return the backoff duration.
 *
 * @return {Number}
 * @api public
 */

Backoff.prototype.duration = function(){
  var ms = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var rand =  Math.random();
    var deviation = Math.floor(rand * this.jitter * ms);
    ms = (Math.floor(rand * 10) & 1) == 0  ? ms - deviation : ms + deviation;
  }
  return Math.min(ms, this.max) | 0;
};

/**
 * Reset the number of attempts.
 *
 * @api public
 */

Backoff.prototype.reset = function(){
  this.attempts = 0;
};

/**
 * Set the minimum duration
 *
 * @api public
 */

Backoff.prototype.setMin = function(min){
  this.ms = min;
};

/**
 * Set the maximum duration
 *
 * @api public
 */

Backoff.prototype.setMax = function(max){
  this.max = max;
};

/**
 * Set the jitter
 *
 * @api public
 */

Backoff.prototype.setJitter = function(jitter){
  this.jitter = jitter;
};



/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var global = typeof self !== 'undefined' ? self : this;
var __self__ = (function () {
function F() {
this.fetch = false;
this.DOMException = global.DOMException
}
F.prototype = global;
return new F();
})();
(function(self) {

var irrelevant = (function (exports) {

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

}({}));
})(__self__);
__self__.fetch.ponyfill = true;
// Remove "polyfill" property added by whatwg-fetch
delete __self__.fetch.polyfill;
// Choose between native implementation (global) or custom implementation (__self__)
// var ctx = global.fetch ? global : __self__;
var ctx = __self__; // this line disable service worker support temporarily
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports.default = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),

/***/ "./node_modules/extract-files/public/ReactNativeFile.js":
/*!**************************************************************!*\
  !*** ./node_modules/extract-files/public/ReactNativeFile.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function ReactNativeFile(_ref) {
  var uri = _ref.uri,
    name = _ref.name,
    type = _ref.type;
  this.uri = uri;
  this.name = name;
  this.type = type;
};


/***/ }),

/***/ "./node_modules/extract-files/public/extractFiles.js":
/*!***********************************************************!*\
  !*** ./node_modules/extract-files/public/extractFiles.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaultIsExtractableFile = __webpack_require__(/*! ./isExtractableFile */ "./node_modules/extract-files/public/isExtractableFile.js");

module.exports = function extractFiles(value, path, isExtractableFile) {
  if (path === void 0) {
    path = '';
  }

  if (isExtractableFile === void 0) {
    isExtractableFile = defaultIsExtractableFile;
  }

  var clone;
  var files = new Map();

  function addFile(paths, file) {
    var storedPaths = files.get(file);
    if (storedPaths) storedPaths.push.apply(storedPaths, paths);
    else files.set(file, paths);
  }

  if (isExtractableFile(value)) {
    clone = null;
    addFile([path], value);
  } else {
    var prefix = path ? path + '.' : '';
    if (typeof FileList !== 'undefined' && value instanceof FileList)
      clone = Array.prototype.map.call(value, function (file, i) {
        addFile(['' + prefix + i], file);
        return null;
      });
    else if (Array.isArray(value))
      clone = value.map(function (child, i) {
        var result = extractFiles(child, '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        return result.clone;
      });
    else if (value && value.constructor === Object) {
      clone = {};

      for (var i in value) {
        var result = extractFiles(value[i], '' + prefix + i, isExtractableFile);
        result.files.forEach(addFile);
        clone[i] = result.clone;
      }
    } else clone = value;
  }

  return {
    clone: clone,
    files: files,
  };
};


/***/ }),

/***/ "./node_modules/extract-files/public/index.js":
/*!****************************************************!*\
  !*** ./node_modules/extract-files/public/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.ReactNativeFile = __webpack_require__(/*! ./ReactNativeFile */ "./node_modules/extract-files/public/ReactNativeFile.js");
exports.extractFiles = __webpack_require__(/*! ./extractFiles */ "./node_modules/extract-files/public/extractFiles.js");
exports.isExtractableFile = __webpack_require__(/*! ./isExtractableFile */ "./node_modules/extract-files/public/isExtractableFile.js");


/***/ }),

/***/ "./node_modules/extract-files/public/isExtractableFile.js":
/*!****************************************************************!*\
  !*** ./node_modules/extract-files/public/isExtractableFile.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ReactNativeFile = __webpack_require__(/*! ./ReactNativeFile */ "./node_modules/extract-files/public/ReactNativeFile.js");

module.exports = function isExtractableFile(value) {
  return (
    (typeof File !== 'undefined' && value instanceof File) ||
    (typeof Blob !== 'undefined' && value instanceof Blob) ||
    value instanceof ReactNativeFile
  );
};


/***/ }),

/***/ "./node_modules/fast-unique-numbers/build/es5/bundle.js":
/*!**************************************************************!*\
  !*** ./node_modules/fast-unique-numbers/build/es5/bundle.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? factory(exports) :
    undefined;
})(this, (function (exports) { 'use strict';

    var createAddUniqueNumber = function createAddUniqueNumber(generateUniqueNumber) {
      return function (set) {
        var number = generateUniqueNumber(set);
        set.add(number);
        return number;
      };
    };

    var createCache = function createCache(lastNumberWeakMap) {
      return function (collection, nextNumber) {
        lastNumberWeakMap.set(collection, nextNumber);
        return nextNumber;
      };
    };

    /*
     * The value of the constant Number.MAX_SAFE_INTEGER equals (2 ** 53 - 1) but it
     * is fairly new.
     */
    var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER === undefined ? 9007199254740991 : Number.MAX_SAFE_INTEGER;
    var TWO_TO_THE_POWER_OF_TWENTY_NINE = 536870912;
    var TWO_TO_THE_POWER_OF_THIRTY = TWO_TO_THE_POWER_OF_TWENTY_NINE * 2;
    var createGenerateUniqueNumber = function createGenerateUniqueNumber(cache, lastNumberWeakMap) {
      return function (collection) {
        var lastNumber = lastNumberWeakMap.get(collection);
        /*
         * Let's try the cheapest algorithm first. It might fail to produce a new
         * number, but it is so cheap that it is okay to take the risk. Just
         * increase the last number by one or reset it to 0 if we reached the upper
         * bound of SMIs (which stands for small integers). When the last number is
         * unknown it is assumed that the collection contains zero based consecutive
         * numbers.
         */

        var nextNumber = lastNumber === undefined ? collection.size : lastNumber < TWO_TO_THE_POWER_OF_THIRTY ? lastNumber + 1 : 0;

        if (!collection.has(nextNumber)) {
          return cache(collection, nextNumber);
        }
        /*
         * If there are less than half of 2 ** 30 numbers stored in the collection,
         * the chance to generate a new random number in the range from 0 to 2 ** 30
         * is at least 50%. It's benifitial to use only SMIs because they perform
         * much better in any environment based on V8.
         */


        if (collection.size < TWO_TO_THE_POWER_OF_TWENTY_NINE) {
          while (collection.has(nextNumber)) {
            nextNumber = Math.floor(Math.random() * TWO_TO_THE_POWER_OF_THIRTY);
          }

          return cache(collection, nextNumber);
        } // Quickly check if there is a theoretical chance to generate a new number.


        if (collection.size > MAX_SAFE_INTEGER) {
          throw new Error('Congratulations, you created a collection of unique numbers which uses all available integers!');
        } // Otherwise use the full scale of safely usable integers.


        while (collection.has(nextNumber)) {
          nextNumber = Math.floor(Math.random() * MAX_SAFE_INTEGER);
        }

        return cache(collection, nextNumber);
      };
    };

    var LAST_NUMBER_WEAK_MAP = new WeakMap();
    var cache = createCache(LAST_NUMBER_WEAK_MAP);
    var generateUniqueNumber = createGenerateUniqueNumber(cache, LAST_NUMBER_WEAK_MAP);
    var addUniqueNumber = createAddUniqueNumber(generateUniqueNumber);

    exports.addUniqueNumber = addUniqueNumber;
    exports.generateUniqueNumber = generateUniqueNumber;

    Object.defineProperty(exports, '__esModule', { value: true });

}));


/***/ }),

/***/ "./node_modules/form-data/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/form-data/lib/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


/***/ }),

/***/ "./node_modules/graphql-request/dist/createRequestBody.js":
/*!****************************************************************!*\
  !*** ./node_modules/graphql-request/dist/createRequestBody.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var extract_files_1 = __webpack_require__(/*! extract-files */ "./node_modules/extract-files/public/index.js");
var form_data_1 = __importDefault(__webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js"));
/**
 * Duck type if NodeJS stream
 * https://github.com/sindresorhus/is-stream/blob/3750505b0727f6df54324784fe369365ef78841e/index.js#L3
 */
var isExtractableFileEnhanced = function (value) {
    return extract_files_1.isExtractableFile(value) ||
        (value !== null && typeof value === 'object' && typeof value.pipe === 'function');
};
/**
 * Returns Multipart Form if body contains files
 * (https://github.com/jaydenseric/graphql-multipart-request-spec)
 * Otherwise returns JSON
 */
function createRequestBody(query, variables, operationName) {
    var _a = extract_files_1.extractFiles({ query: query, variables: variables, operationName: operationName }, '', isExtractableFileEnhanced), clone = _a.clone, files = _a.files;
    if (files.size === 0) {
        if (!Array.isArray(query)) {
            return JSON.stringify(clone);
        }
        if (typeof variables !== 'undefined' && !Array.isArray(variables)) {
            throw new Error('Cannot create request body with given variable type, array expected');
        }
        // Batch support
        var payload = query.reduce(function (accu, currentQuery, index) {
            accu.push({ query: currentQuery, variables: variables ? variables[index] : undefined });
            return accu;
        }, []);
        return JSON.stringify(payload);
    }
    var Form = typeof FormData === 'undefined' ? form_data_1.default : FormData;
    var form = new Form();
    form.append('operations', JSON.stringify(clone));
    var map = {};
    var i = 0;
    files.forEach(function (paths) {
        map[++i] = paths;
    });
    form.append('map', JSON.stringify(map));
    i = 0;
    files.forEach(function (paths, file) {
        form.append("" + ++i, file);
    });
    return form;
}
exports.default = createRequestBody;
//# sourceMappingURL=createRequestBody.js.map

/***/ }),

/***/ "./node_modules/graphql-request/dist/index.js":
/*!****************************************************!*\
  !*** ./node_modules/graphql-request/dist/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gql = exports.batchRequests = exports.request = exports.rawRequest = exports.GraphQLClient = exports.ClientError = void 0;
var cross_fetch_1 = __importStar(__webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js")), CrossFetch = cross_fetch_1;
var printer_1 = __webpack_require__(/*! graphql/language/printer */ "./node_modules/graphql/language/printer.js");
var createRequestBody_1 = __importDefault(__webpack_require__(/*! ./createRequestBody */ "./node_modules/graphql-request/dist/createRequestBody.js"));
var types_1 = __webpack_require__(/*! ./types */ "./node_modules/graphql-request/dist/types.js");
var types_2 = __webpack_require__(/*! ./types */ "./node_modules/graphql-request/dist/types.js");
Object.defineProperty(exports, "ClientError", { enumerable: true, get: function () { return types_2.ClientError; } });
/**
 * Convert the given headers configuration into a plain object.
 */
var resolveHeaders = function (headers) {
    var oHeaders = {};
    if (headers) {
        if ((typeof Headers !== 'undefined' && headers instanceof Headers) ||
            headers instanceof CrossFetch.Headers) {
            oHeaders = HeadersInstanceToPlainObject(headers);
        }
        else if (Array.isArray(headers)) {
            headers.forEach(function (_a) {
                var name = _a[0], value = _a[1];
                oHeaders[name] = value;
            });
        }
        else {
            oHeaders = headers;
        }
    }
    return oHeaders;
};
/**
 * Clean a GraphQL document to send it via a GET query
 *
 * @param {string} str GraphQL query
 * @returns {string} Cleaned query
 */
var queryCleanner = function (str) { return str.replace(/([\s,]|#[^\n\r]+)+/g, ' ').trim(); };
/**
 * Create query string for GraphQL request
 *
 * @param {object} param0 -
 *
 * @param {string|string[]} param0.query the GraphQL document or array of document if it's a batch request
 * @param {string|undefined} param0.operationName the GraphQL operation name
 * @param {any|any[]} param0.variables the GraphQL variables to use
 */
var buildGetQueryParams = function (_a) {
    var query = _a.query, variables = _a.variables, operationName = _a.operationName;
    if (!Array.isArray(query)) {
        var search = ["query=" + encodeURIComponent(queryCleanner(query))];
        if (variables) {
            search.push("variables=" + encodeURIComponent(JSON.stringify(variables)));
        }
        if (operationName) {
            search.push("operationName=" + encodeURIComponent(operationName));
        }
        return search.join('&');
    }
    if (typeof variables !== 'undefined' && !Array.isArray(variables)) {
        throw new Error('Cannot create query with given variable type, array expected');
    }
    // Batch support
    var payload = query.reduce(function (accu, currentQuery, index) {
        accu.push({
            query: queryCleanner(currentQuery),
            variables: variables ? JSON.stringify(variables[index]) : undefined,
        });
        return accu;
    }, []);
    return "query=" + encodeURIComponent(JSON.stringify(payload));
};
/**
 * Fetch data using POST method
 */
var post = function (_a) {
    var url = _a.url, query = _a.query, variables = _a.variables, operationName = _a.operationName, headers = _a.headers, fetch = _a.fetch, fetchOptions = _a.fetchOptions;
    return __awaiter(void 0, void 0, void 0, function () {
        var body;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    body = createRequestBody_1.default(query, variables, operationName);
                    return [4 /*yield*/, fetch(url, __assign({ method: 'POST', headers: __assign(__assign({}, (typeof body === 'string' ? { 'Content-Type': 'application/json' } : {})), headers), body: body }, fetchOptions))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
/**
 * Fetch data using GET method
 */
var get = function (_a) {
    var url = _a.url, query = _a.query, variables = _a.variables, operationName = _a.operationName, headers = _a.headers, fetch = _a.fetch, fetchOptions = _a.fetchOptions;
    return __awaiter(void 0, void 0, void 0, function () {
        var queryParams;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    queryParams = buildGetQueryParams({
                        query: query,
                        variables: variables,
                        operationName: operationName,
                    });
                    return [4 /*yield*/, fetch(url + "?" + queryParams, __assign({ method: 'GET', headers: headers }, fetchOptions))];
                case 1: return [2 /*return*/, _b.sent()];
            }
        });
    });
};
/**
 * todo
 */
var GraphQLClient = /** @class */ (function () {
    function GraphQLClient(url, options) {
        this.url = url;
        this.options = options || {};
    }
    GraphQLClient.prototype.rawRequest = function (query, variables, requestHeaders) {
        var _a = this.options, headers = _a.headers, _b = _a.fetch, fetch = _b === void 0 ? cross_fetch_1.default : _b, _c = _a.method, method = _c === void 0 ? 'POST' : _c, fetchOptions = __rest(_a, ["headers", "fetch", "method"]);
        var url = this.url;
        return makeRequest({
            url: url,
            query: query,
            variables: variables,
            headers: __assign(__assign({}, resolveHeaders(headers)), resolveHeaders(requestHeaders)),
            operationName: undefined,
            fetch: fetch,
            method: method,
            fetchOptions: fetchOptions,
        });
    };
    /**
     * Send a GraphQL document to the server.
     */
    GraphQLClient.prototype.request = function (document, variables, requestHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, headers, _b, fetch, _c, method, fetchOptions, url, _d, query, operationName, data;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this.options, headers = _a.headers, _b = _a.fetch, fetch = _b === void 0 ? cross_fetch_1.default : _b, _c = _a.method, method = _c === void 0 ? 'POST' : _c, fetchOptions = __rest(_a, ["headers", "fetch", "method"]);
                        url = this.url;
                        _d = resolveRequestDocument(document), query = _d.query, operationName = _d.operationName;
                        return [4 /*yield*/, makeRequest({
                                url: url,
                                query: query,
                                variables: variables,
                                headers: __assign(__assign({}, resolveHeaders(headers)), resolveHeaders(requestHeaders)),
                                operationName: operationName,
                                fetch: fetch,
                                method: method,
                                fetchOptions: fetchOptions,
                            })];
                    case 1:
                        data = (_e.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * Send a GraphQL document to the server.
     */
    GraphQLClient.prototype.batchRequests = function (documents, requestHeaders) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, headers, _b, fetch, _c, method, fetchOptions, url, queries, variables, data;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.options, headers = _a.headers, _b = _a.fetch, fetch = _b === void 0 ? cross_fetch_1.default : _b, _c = _a.method, method = _c === void 0 ? 'POST' : _c, fetchOptions = __rest(_a, ["headers", "fetch", "method"]);
                        url = this.url;
                        queries = documents.map(function (_a) {
                            var document = _a.document;
                            return resolveRequestDocument(document).query;
                        });
                        variables = documents.map(function (_a) {
                            var variables = _a.variables;
                            return variables;
                        });
                        return [4 /*yield*/, makeRequest({
                                url: url,
                                query: queries,
                                variables: variables,
                                headers: __assign(__assign({}, resolveHeaders(headers)), resolveHeaders(requestHeaders)),
                                operationName: undefined,
                                fetch: fetch,
                                method: method,
                                fetchOptions: fetchOptions,
                            })];
                    case 1:
                        data = (_d.sent()).data;
                        return [2 /*return*/, data];
                }
            });
        });
    };
    GraphQLClient.prototype.setHeaders = function (headers) {
        this.options.headers = headers;
        return this;
    };
    /**
     * Attach a header to the client. All subsequent requests will have this header.
     */
    GraphQLClient.prototype.setHeader = function (key, value) {
        var _a;
        var headers = this.options.headers;
        if (headers) {
            // todo what if headers is in nested array form... ?
            //@ts-ignore
            headers[key] = value;
        }
        else {
            this.options.headers = (_a = {}, _a[key] = value, _a);
        }
        return this;
    };
    /**
     * Change the client endpoint. All subsequent requests will send to this endpoint.
     */
    GraphQLClient.prototype.setEndpoint = function (value) {
        this.url = value;
        return this;
    };
    return GraphQLClient;
}());
exports.GraphQLClient = GraphQLClient;
function makeRequest(_a) {
    var url = _a.url, query = _a.query, variables = _a.variables, headers = _a.headers, operationName = _a.operationName, fetch = _a.fetch, _b = _a.method, method = _b === void 0 ? 'POST' : _b, fetchOptions = _a.fetchOptions;
    return __awaiter(this, void 0, void 0, function () {
        var fetcher, isBathchingQuery, response, result, successfullyReceivedData, headers_1, status_1, errorResult;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    fetcher = method.toUpperCase() === 'POST' ? post : get;
                    isBathchingQuery = Array.isArray(query);
                    return [4 /*yield*/, fetcher({
                            url: url,
                            query: query,
                            variables: variables,
                            operationName: operationName,
                            headers: headers,
                            fetch: fetch,
                            fetchOptions: fetchOptions,
                        })];
                case 1:
                    response = _c.sent();
                    return [4 /*yield*/, getResult(response)];
                case 2:
                    result = _c.sent();
                    successfullyReceivedData = isBathchingQuery && Array.isArray(result) ? !result.some(function (_a) {
                        var data = _a.data;
                        return !data;
                    }) : !!result.data;
                    if (response.ok && !result.errors && successfullyReceivedData) {
                        headers_1 = response.headers, status_1 = response.status;
                        return [2 /*return*/, __assign(__assign({}, (isBathchingQuery ? { data: result } : result)), { headers: headers_1, status: status_1 })];
                    }
                    else {
                        errorResult = typeof result === 'string' ? { error: result } : result;
                        throw new types_1.ClientError(__assign(__assign({}, errorResult), { status: response.status, headers: response.headers }), { query: query, variables: variables });
                    }
                    return [2 /*return*/];
            }
        });
    });
}
/**
 * todo
 */
function rawRequest(url, query, variables, requestHeaders) {
    return __awaiter(this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            client = new GraphQLClient(url);
            return [2 /*return*/, client.rawRequest(query, variables, requestHeaders)];
        });
    });
}
exports.rawRequest = rawRequest;
/**
 * Send a GraphQL Document to the GraphQL server for exectuion.
 *
 * @example
 *
 * ```ts
 * // You can pass a raw string
 *
 * await request('https://foo.bar/graphql', `
 *   {
 *     query {
 *       users
 *     }
 *   }
 * `)
 *
 * // You can also pass a GraphQL DocumentNode. Convenient if you
 * // are using graphql-tag package.
 *
 * import gql from 'graphql-tag'
 *
 * await request('https://foo.bar/graphql', gql`...`)
 *
 * // If you don't actually care about using DocumentNode but just
 * // want the tooling support for gql template tag like IDE syntax
 * // coloring and prettier autoformat then note you can use the
 * // passthrough gql tag shipped with graphql-request to save a bit
 * // of performance and not have to install another dep into your project.
 *
 * import { gql } from 'graphql-request'
 *
 * await request('https://foo.bar/graphql', gql`...`)
 * ```
 */
function request(url, document, variables, requestHeaders) {
    return __awaiter(this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            client = new GraphQLClient(url);
            return [2 /*return*/, client.request(document, variables, requestHeaders)];
        });
    });
}
exports.request = request;
/**
 * Send a batch of GraphQL Document to the GraphQL server for exectuion.
 *
 * @example
 *
 * ```ts
 * // You can pass a raw string
 *
 * await batchRequests('https://foo.bar/graphql', [
 * {
 *  query: `
 *   {
 *     query {
 *       users
 *     }
 *   }`
 * },
 * {
 *   query: `
 *   {
 *     query {
 *       users
 *     }
 *   }`
 * }])
 *
 * // You can also pass a GraphQL DocumentNode as query. Convenient if you
 * // are using graphql-tag package.
 *
 * import gql from 'graphql-tag'
 *
 * await batchRequests('https://foo.bar/graphql', [{ query: gql`...` }])
 * ```
 */
function batchRequests(url, documents, requestHeaders) {
    return __awaiter(this, void 0, void 0, function () {
        var client;
        return __generator(this, function (_a) {
            client = new GraphQLClient(url);
            return [2 /*return*/, client.batchRequests(documents, requestHeaders)];
        });
    });
}
exports.batchRequests = batchRequests;
exports.default = request;
/**
 * todo
 */
function getResult(response) {
    var contentType = response.headers.get('Content-Type');
    if (contentType && contentType.startsWith('application/json')) {
        return response.json();
    }
    else {
        return response.text();
    }
}
/**
 * helpers
 */
function resolveRequestDocument(document) {
    var _a;
    if (typeof document === 'string')
        return { query: document };
    var operationName = undefined;
    var operationDefinitions = document.definitions.filter(function (definition) { return definition.kind === 'OperationDefinition'; });
    if (operationDefinitions.length === 1) {
        operationName = (_a = operationDefinitions[0].name) === null || _a === void 0 ? void 0 : _a.value;
    }
    return { query: printer_1.print(document), operationName: operationName };
}
/**
 * Convenience passthrough template tag to get the benefits of tooling for the gql template tag. This does not actually parse the input into a GraphQL DocumentNode like graphql-tag package does. It just returns the string with any variables given interpolated. Can save you a bit of performance and having to install another package.
 *
 * @example
 *
 * import { gql } from 'graphql-request'
 *
 * await request('https://foo.bar/graphql', gql`...`)
 *
 * @remarks
 *
 * Several tools in the Node GraphQL ecosystem are hardcoded to specially treat any template tag named "gql". For example see this prettier issue: https://github.com/prettier/prettier/issues/4360. Using this template tag has no runtime effect beyond variable interpolation.
 */
function gql(chunks) {
    var variables = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        variables[_i - 1] = arguments[_i];
    }
    return chunks.reduce(function (accumulator, chunk, index) { return "" + accumulator + chunk + (index in variables ? variables[index] : ''); }, '');
}
exports.gql = gql;
/**
 * Convert Headers instance into regular object
 */
function HeadersInstanceToPlainObject(headers) {
    var o = {};
    headers.forEach(function (v, k) {
        o[k] = v;
    });
    return o;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/graphql-request/dist/types.js":
/*!****************************************************!*\
  !*** ./node_modules/graphql-request/dist/types.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientError = void 0;
var ClientError = /** @class */ (function (_super) {
    __extends(ClientError, _super);
    function ClientError(response, request) {
        var _this = this;
        var message = ClientError.extractMessage(response) + ": " + JSON.stringify({
            response: response,
            request: request,
        });
        _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, ClientError.prototype);
        _this.response = response;
        _this.request = request;
        // this is needed as Safari doesn't support .captureStackTrace
        if (typeof Error.captureStackTrace === 'function') {
            Error.captureStackTrace(_this, ClientError);
        }
        return _this;
    }
    ClientError.extractMessage = function (response) {
        try {
            return response.errors[0].message;
        }
        catch (e) {
            return "GraphQL Error (Code: " + response.status + ")";
        }
    };
    return ClientError;
}(Error));
exports.ClientError = ClientError;
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/graphql-subscriptions-client/dist/esm/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/graphql-subscriptions-client/dist/esm/index.js ***!
  \*********************************************************************/
/*! exports provided: SubscriptionClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionClient", function() { return SubscriptionClient; });
/* harmony import */ var backo2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! backo2 */ "./node_modules/backo2/index.js");
/* harmony import */ var backo2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backo2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! eventemitter3 */ "./node_modules/graphql-subscriptions-client/node_modules/eventemitter3/index.js");
/* harmony import */ var eventemitter3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eventemitter3__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
// src/index.ts



var WS_MIN_TIMEOUT = 1e3;
var WS_TIMEOUT = 3e4;
var isString = (value) => typeof value === "string";
var isObject = (value) => value !== null && typeof value === "object";
var SubscriptionClient = class {
  constructor(url, options) {
    const {
      connectionCallback = void 0,
      connectionParams = {},
      minTimeout = WS_MIN_TIMEOUT,
      timeout = WS_TIMEOUT,
      reconnect = false,
      reconnectionAttempts = Infinity,
      lazy = false,
      inactivityTimeout = 0
    } = options || {};
    this.wsImpl = WebSocket;
    this.connectionCallback = connectionCallback;
    this.url = url;
    this.operations = {};
    this.nextOperationId = 0;
    this.wsMinTimeout = minTimeout;
    this.wsTimeout = timeout;
    this.unsentMessagesQueue = [];
    this.reconnect = reconnect;
    this.reconnecting = false;
    this.reconnectionAttempts = reconnectionAttempts;
    this.lazy = !!lazy;
    this.inactivityTimeout = inactivityTimeout;
    this.closedByUser = false;
    this.backoff = new backo2__WEBPACK_IMPORTED_MODULE_0___default.a({jitter: 0.5});
    this.eventEmitter = new eventemitter3__WEBPACK_IMPORTED_MODULE_1___default.a();
    this.client = null;
    this.maxConnectTimeGenerator = this.createMaxConnectTimeGenerator();
    this.connectionParams = this.getConnectionParams(connectionParams);
    if (!this.lazy) {
      this.connect();
    }
  }
  get status() {
    if (this.client === null) {
      return this.wsImpl.CLOSED;
    }
    return this.client.readyState;
  }
  close(isForced = true, closedByUser = true) {
    this.clearInactivityTimeout();
    if (this.client !== null) {
      this.closedByUser = closedByUser;
      if (isForced) {
        this.clearCheckConnectionInterval();
        this.clearMaxConnectTimeout();
        this.clearTryReconnectTimeout();
        this.unsubscribeAll();
        this.sendMessage(void 0, "connection_terminate", null);
      }
      this.client.close();
      this.client = null;
      this.eventEmitter.emit("disconnected");
      if (!isForced) {
        this.tryReconnect();
      }
    }
  }
  request(request) {
    const getObserver = this.getObserver.bind(this);
    const executeOperation = this.executeOperation.bind(this);
    const unsubscribe = this.unsubscribe.bind(this);
    let opId;
    this.clearInactivityTimeout();
    return {
      [symbol_observable__WEBPACK_IMPORTED_MODULE_2__["default"]]() {
        return this;
      },
      subscribe(observerOrNext, onError, onComplete) {
        const observer = getObserver(observerOrNext, onError, onComplete);
        opId = executeOperation(request, (error, result) => {
          if (error === null && result === null) {
            if (observer.complete) {
              observer.complete();
            }
          } else if (error) {
            if (observer.error) {
              observer.error(error[0]);
            }
          } else {
            if (observer.next) {
              observer.next(result);
            }
          }
        });
        return {
          unsubscribe: () => {
            if (opId) {
              unsubscribe(opId);
              opId = null;
            }
          }
        };
      }
    };
  }
  on(eventName, callback, context) {
    const handler = this.eventEmitter.on(eventName, callback, context);
    return () => {
      handler.off(eventName, callback, context);
    };
  }
  onConnected(callback, context) {
    return this.on("connected", callback, context);
  }
  onConnecting(callback, context) {
    return this.on("connecting", callback, context);
  }
  onDisconnected(callback, context) {
    return this.on("disconnected", callback, context);
  }
  onReconnected(callback, context) {
    return this.on("reconnected", callback, context);
  }
  onReconnecting(callback, context) {
    return this.on("reconnecting", callback, context);
  }
  onError(callback, context) {
    return this.on("error", callback, context);
  }
  unsubscribeAll() {
    Object.keys(this.operations).forEach((subId) => {
      this.unsubscribe(subId);
    });
  }
  getConnectionParams(connectionParams) {
    return () => {
      return new Promise((resolve, reject) => {
        if (typeof connectionParams === "function") {
          try {
            return resolve(connectionParams());
          } catch (error) {
            return reject(error);
          }
        }
        resolve(connectionParams);
      });
    };
  }
  executeOperation(options, handler) {
    if (this.client === null) {
      this.connect();
    }
    const opId = this.generateOperationId();
    this.operations[opId] = {options, handler};
    try {
      this.checkOperationOptions(options, handler);
      if (this.operations[opId]) {
        this.operations[opId] = {options, handler};
        this.sendMessage(opId, "start", options);
      }
    } catch (error) {
      this.unsubscribe(opId);
      handler(this.formatErrors(error));
    }
    return opId;
  }
  getObserver(observerOrNext, error, complete) {
    if (typeof observerOrNext === "function") {
      return {
        next: (value) => observerOrNext(value),
        error: (e) => error && error(e),
        complete: () => complete && complete()
      };
    }
    return observerOrNext;
  }
  createMaxConnectTimeGenerator() {
    const minValue = this.wsMinTimeout;
    const maxValue = this.wsTimeout;
    return new backo2__WEBPACK_IMPORTED_MODULE_0___default.a({
      min: minValue,
      max: maxValue,
      factor: 1.2
    });
  }
  clearCheckConnectionInterval() {
    if (this.checkConnectionIntervalId) {
      clearInterval(this.checkConnectionIntervalId);
      this.checkConnectionIntervalId = null;
    }
  }
  clearMaxConnectTimeout() {
    if (this.maxConnectTimeoutId) {
      clearTimeout(this.maxConnectTimeoutId);
      this.maxConnectTimeoutId = null;
    }
  }
  clearTryReconnectTimeout() {
    if (this.tryReconnectTimeoutId) {
      clearTimeout(this.tryReconnectTimeoutId);
      this.tryReconnectTimeoutId = null;
    }
  }
  clearInactivityTimeout() {
    if (this.inactivityTimeoutId) {
      clearTimeout(this.inactivityTimeoutId);
      this.inactivityTimeoutId = null;
    }
  }
  setInactivityTimeout() {
    if (this.inactivityTimeout > 0 && Object.keys(this.operations).length === 0) {
      this.inactivityTimeoutId = setTimeout(() => {
        if (Object.keys(this.operations).length === 0) {
          this.close();
        }
      }, this.inactivityTimeout);
    }
  }
  checkOperationOptions(options, handler) {
    const {query, variables, operationName} = options;
    if (!query) {
      throw new Error("Must provide a query.");
    }
    if (!handler) {
      throw new Error("Must provide an handler.");
    }
    if (!isString(query) || operationName && !isString(operationName) || variables && !isObject(variables)) {
      throw new Error("Incorrect option types. query must be a string,`operationName` must be a string, and `variables` must be an object.");
    }
  }
  buildMessage(id, type, payload) {
    const payloadToReturn = payload && payload.query ? Object.assign({}, payload, {
      query: payload.query
    }) : payload;
    return {
      id,
      type,
      payload: payloadToReturn
    };
  }
  formatErrors(errors) {
    if (Array.isArray(errors)) {
      return errors;
    }
    if (errors && errors.errors) {
      return this.formatErrors(errors.errors);
    }
    if (errors && errors.message) {
      return [errors];
    }
    return [
      {
        name: "FormatedError",
        message: "Unknown error",
        originalError: errors
      }
    ];
  }
  sendMessage(id, type, payload) {
    this.sendMessageRaw(this.buildMessage(id, type, payload));
  }
  sendMessageRaw(message) {
    switch (this.status) {
      case this.wsImpl.OPEN:
        const serializedMessage = JSON.stringify(message);
        try {
          JSON.parse(serializedMessage);
        } catch (error) {
          this.eventEmitter.emit("error", new Error(`Message must be JSON-serializable. Got: ${message}`));
        }
        this.client.send(serializedMessage);
        break;
      case this.wsImpl.CONNECTING:
        this.unsentMessagesQueue.push(message);
        break;
      default:
        if (!this.reconnecting) {
          this.eventEmitter.emit("error", new Error("A message was not sent because socket is not connected, is closing or is already closed. Message was: " + JSON.stringify(message)));
        }
    }
  }
  generateOperationId() {
    return String(++this.nextOperationId);
  }
  tryReconnect() {
    if (!this.reconnect || this.backoff.attempts >= this.reconnectionAttempts) {
      return;
    }
    if (!this.reconnecting) {
      Object.keys(this.operations).forEach((key) => {
        this.unsentMessagesQueue.push(this.buildMessage(key, "start", this.operations[key].options));
      });
      this.reconnecting = true;
    }
    this.clearTryReconnectTimeout();
    const delay = this.backoff.duration();
    this.tryReconnectTimeoutId = setTimeout(() => {
      this.connect();
    }, delay);
  }
  flushUnsentMessagesQueue() {
    this.unsentMessagesQueue.forEach((message) => {
      this.sendMessageRaw(message);
    });
    this.unsentMessagesQueue = [];
  }
  checkConnection() {
    if (this.wasKeepAliveReceived) {
      this.wasKeepAliveReceived = false;
      return;
    }
    if (!this.reconnecting) {
      this.close(false, true);
    }
  }
  checkMaxConnectTimeout() {
    this.clearMaxConnectTimeout();
    this.maxConnectTimeoutId = setTimeout(() => {
      if (this.status !== this.wsImpl.OPEN) {
        this.reconnecting = true;
        this.close(false, true);
      }
    }, this.maxConnectTimeGenerator.duration());
  }
  connect() {
    this.client = new WebSocket(this.url, "graphql-ws");
    this.checkMaxConnectTimeout();
    this.client.addEventListener("open", async () => {
      if (this.status === this.wsImpl.OPEN) {
        this.clearMaxConnectTimeout();
        this.closedByUser = false;
        this.eventEmitter.emit(this.reconnecting ? "reconnecting" : "connecting");
        try {
          const connectionParams = await this.connectionParams();
          this.sendMessage(void 0, "connection_init", connectionParams);
          this.flushUnsentMessagesQueue();
        } catch (error) {
          this.sendMessage(void 0, "connection_error", error);
          this.flushUnsentMessagesQueue();
        }
      }
    });
    this.client.onclose = () => {
      if (!this.closedByUser) {
        this.close(false, false);
      }
    };
    this.client.addEventListener("error", (error) => {
      this.eventEmitter.emit("error", error);
    });
    this.client.addEventListener("message", ({data}) => {
      let parsedMessage;
      try {
        parsedMessage = JSON.parse(data);
      } catch (error) {
        throw new Error(`Message must be JSON-parseable. Got: ${data}`);
      }
      if (Array.isArray(parsedMessage)) {
        for (const message of parsedMessage) {
          this.processReceivedMessage(message);
        }
      } else {
        this.processReceivedMessage(parsedMessage);
      }
    });
  }
  processReceivedMessage(message) {
    const opId = message.id;
    if (["data", "complete", "error"].includes(message.type) && !this.operations[opId]) {
      this.unsubscribe(opId);
      return;
    }
    switch (message.type) {
      case "connection_error":
        if (this.connectionCallback) {
          this.connectionCallback(message.payload);
        }
        break;
      case "connection_ack":
        this.eventEmitter.emit(this.reconnecting ? "reconnected" : "connected");
        this.reconnecting = false;
        this.backoff.reset();
        this.maxConnectTimeGenerator.reset();
        if (this.connectionCallback) {
          this.connectionCallback();
        }
        break;
      case "complete":
        this.operations[opId].handler(null, null);
        delete this.operations[opId];
        break;
      case "error":
        this.operations[opId].handler(this.formatErrors(message.payload), null);
        delete this.operations[opId];
        break;
      case "data":
        const parsedPayload = !message.payload.errors ? message.payload : {
          ...message.payload,
          errors: this.formatErrors(message.payload.errors)
        };
        this.operations[opId].handler(null, parsedPayload);
        break;
      case "ka":
        const firstKA = typeof this.wasKeepAliveReceived === "undefined";
        this.wasKeepAliveReceived = true;
        if (firstKA) {
          this.checkConnection();
        }
        if (this.checkConnectionIntervalId) {
          clearInterval(this.checkConnectionIntervalId);
          this.checkConnection();
        }
        this.checkConnectionIntervalId = setInterval(this.checkConnection.bind(this), this.wsTimeout);
        break;
      default:
        throw new Error("Invalid message type!");
    }
  }
  unsubscribe(opId) {
    if (this.operations[opId]) {
      delete this.operations[opId];
      this.setInactivityTimeout();
      this.sendMessage(opId, "stop", void 0);
    }
  }
};



/***/ }),

/***/ "./node_modules/graphql-subscriptions-client/node_modules/eventemitter3/index.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/graphql-subscriptions-client/node_modules/eventemitter3/index.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */
function addListener(emitter, event, fn, context, once) {
  if (typeof fn !== 'function') {
    throw new TypeError('The listener must be a function');
  }

  var listener = new EE(fn, context || emitter, once)
    , evt = prefix ? prefix + event : event;

  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
  else emitter._events[evt] = [emitter._events[evt], listener];

  return emitter;
}

/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */
function clearEvent(emitter, evt) {
  if (--emitter._eventsCount === 0) emitter._events = new Events();
  else delete emitter._events[evt];
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */
EventEmitter.prototype.listeners = function listeners(event) {
  var evt = prefix ? prefix + event : event
    , handlers = this._events[evt];

  if (!handlers) return [];
  if (handlers.fn) return [handlers.fn];

  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
    ee[i] = handlers[i].fn;
  }

  return ee;
};

/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */
EventEmitter.prototype.listenerCount = function listenerCount(event) {
  var evt = prefix ? prefix + event : event
    , listeners = this._events[evt];

  if (!listeners) return 0;
  if (listeners.fn) return 1;
  return listeners.length;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  return addListener(this, event, fn, context, false);
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  return addListener(this, event, fn, context, true);
};

/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    clearEvent(this, evt);
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
      listeners.fn === fn &&
      (!once || listeners.once) &&
      (!context || listeners.context === context)
    ) {
      clearEvent(this, evt);
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
        listeners[i].fn !== fn ||
        (once && !listeners[i].once) ||
        (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else clearEvent(this, evt);
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) clearEvent(this, evt);
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/devAssert.js":
/*!***************************************************!*\
  !*** ./node_modules/graphql/jsutils/devAssert.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.devAssert = devAssert;

function devAssert(condition, message) {
  const booleanCondition = Boolean(condition); // istanbul ignore else (See transformation done in './resources/inlineInvariant.js')

  if (!booleanCondition) {
    throw new Error(message);
  }
}


/***/ }),

/***/ "./node_modules/graphql/jsutils/inspect.js":
/*!*************************************************!*\
  !*** ./node_modules/graphql/jsutils/inspect.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.inspect = inspect;
const MAX_ARRAY_LENGTH = 10;
const MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (typeof value) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? `[function ${value.name}]` : '[function]';

    case 'object':
      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (value === null) {
    return 'null';
  }

  if (previouslySeenValues.includes(value)) {
    return '[Circular]';
  }

  const seenValues = [...previouslySeenValues, value];

  if (isJSONable(value)) {
    const jsonValue = value.toJSON(); // check for infinite recursion

    if (jsonValue !== value) {
      return typeof jsonValue === 'string'
        ? jsonValue
        : formatValue(jsonValue, seenValues);
    }
  } else if (Array.isArray(value)) {
    return formatArray(value, seenValues);
  }

  return formatObject(value, seenValues);
}

function isJSONable(value) {
  return typeof value.toJSON === 'function';
}

function formatObject(object, seenValues) {
  const entries = Object.entries(object);

  if (entries.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  const properties = entries.map(
    ([key, value]) => key + ': ' + formatValue(value, seenValues),
  );
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  const len = Math.min(MAX_ARRAY_LENGTH, array.length);
  const remaining = array.length - len;
  const items = [];

  for (let i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push(`... ${remaining} more items`);
  }

  return '[' + items.join(', ') + ']';
}

function getObjectTag(object) {
  const tag = Object.prototype.toString
    .call(object)
    .replace(/^\[object /, '')
    .replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    const name = object.constructor.name;

    if (typeof name === 'string' && name !== '') {
      return name;
    }
  }

  return tag;
}


/***/ }),

/***/ "./node_modules/graphql/language/ast.js":
/*!**********************************************!*\
  !*** ./node_modules/graphql/language/ast.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Token =
  exports.QueryDocumentKeys =
  exports.OperationTypeNode =
  exports.Location =
    void 0;
exports.isNode = isNode;

/**
 * Contains a range of UTF-8 character offsets and token references that
 * identify the region of the source from which the AST derived.
 */
class Location {
  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The Token at which this Node begins.
   */

  /**
   * The Token at which this Node ends.
   */

  /**
   * The Source document the AST represents.
   */
  constructor(startToken, endToken, source) {
    this.start = startToken.start;
    this.end = endToken.end;
    this.startToken = startToken;
    this.endToken = endToken;
    this.source = source;
  }

  get [Symbol.toStringTag]() {
    return 'Location';
  }

  toJSON() {
    return {
      start: this.start,
      end: this.end,
    };
  }
}
/**
 * Represents a range of characters represented by a lexical token
 * within a Source.
 */

exports.Location = Location;

class Token {
  /**
   * The kind of Token.
   */

  /**
   * The character offset at which this Node begins.
   */

  /**
   * The character offset at which this Node ends.
   */

  /**
   * The 1-indexed line number on which this Token appears.
   */

  /**
   * The 1-indexed column number at which this Token begins.
   */

  /**
   * For non-punctuation tokens, represents the interpreted value of the token.
   *
   * Note: is undefined for punctuation tokens, but typed as string for
   * convenience in the parser.
   */

  /**
   * Tokens exist as nodes in a double-linked-list amongst all tokens
   * including ignored tokens. <SOF> is always the first node and <EOF>
   * the last.
   */
  constructor(kind, start, end, line, column, value) {
    this.kind = kind;
    this.start = start;
    this.end = end;
    this.line = line;
    this.column = column; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

    this.value = value;
    this.prev = null;
    this.next = null;
  }

  get [Symbol.toStringTag]() {
    return 'Token';
  }

  toJSON() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column,
    };
  }
}
/**
 * The list of all possible AST node types.
 */

exports.Token = Token;

/**
 * @internal
 */
const QueryDocumentKeys = {
  Name: [],
  Document: ['definitions'],
  OperationDefinition: [
    'name',
    'variableDefinitions',
    'directives',
    'selectionSet',
  ],
  VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
  Variable: ['name'],
  SelectionSet: ['selections'],
  Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
  Argument: ['name', 'value'],
  FragmentSpread: ['name', 'directives'],
  InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
  FragmentDefinition: [
    'name', // Note: fragment variable definitions are deprecated and will removed in v17.0.0
    'variableDefinitions',
    'typeCondition',
    'directives',
    'selectionSet',
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ['values'],
  ObjectValue: ['fields'],
  ObjectField: ['name', 'value'],
  Directive: ['name', 'arguments'],
  NamedType: ['name'],
  ListType: ['type'],
  NonNullType: ['type'],
  SchemaDefinition: ['description', 'directives', 'operationTypes'],
  OperationTypeDefinition: ['type'],
  ScalarTypeDefinition: ['description', 'name', 'directives'],
  ObjectTypeDefinition: [
    'description',
    'name',
    'interfaces',
    'directives',
    'fields',
  ],
  FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
  InputValueDefinition: [
    'description',
    'name',
    'type',
    'defaultValue',
    'directives',
  ],
  InterfaceTypeDefinition: [
    'description',
    'name',
    'interfaces',
    'directives',
    'fields',
  ],
  UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
  EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
  EnumValueDefinition: ['description', 'name', 'directives'],
  InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
  DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
  SchemaExtension: ['directives', 'operationTypes'],
  ScalarTypeExtension: ['name', 'directives'],
  ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
  UnionTypeExtension: ['name', 'directives', 'types'],
  EnumTypeExtension: ['name', 'directives', 'values'],
  InputObjectTypeExtension: ['name', 'directives', 'fields'],
};
exports.QueryDocumentKeys = QueryDocumentKeys;
const kindValues = new Set(Object.keys(QueryDocumentKeys));
/**
 * @internal
 */

function isNode(maybeNode) {
  const maybeKind =
    maybeNode === null || maybeNode === void 0 ? void 0 : maybeNode.kind;
  return typeof maybeKind === 'string' && kindValues.has(maybeKind);
}
/** Name */

let OperationTypeNode;
exports.OperationTypeNode = OperationTypeNode;

(function (OperationTypeNode) {
  OperationTypeNode['QUERY'] = 'query';
  OperationTypeNode['MUTATION'] = 'mutation';
  OperationTypeNode['SUBSCRIPTION'] = 'subscription';
})(OperationTypeNode || (exports.OperationTypeNode = OperationTypeNode = {}));


/***/ }),

/***/ "./node_modules/graphql/language/blockString.js":
/*!******************************************************!*\
  !*** ./node_modules/graphql/language/blockString.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.dedentBlockStringValue = dedentBlockStringValue;
exports.getBlockStringIndentation = getBlockStringIndentation;
exports.printBlockString = printBlockString;

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 *
 * @internal
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  const lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  const commonIndent = getBlockStringIndentation(rawString);

  if (commonIndent !== 0) {
    for (let i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.

  let startLine = 0;

  while (startLine < lines.length && isBlank(lines[startLine])) {
    ++startLine;
  }

  let endLine = lines.length;

  while (endLine > startLine && isBlank(lines[endLine - 1])) {
    --endLine;
  } // Return a string of the lines joined with U+000A.

  return lines.slice(startLine, endLine).join('\n');
}

function isBlank(str) {
  for (const char of str) {
    if (char !== ' ' && char !== '\t') {
      return false;
    }
  }

  return true;
}
/**
 * @internal
 */

function getBlockStringIndentation(value) {
  var _commonIndent;

  let isFirstLine = true;
  let isEmptyLine = true;
  let indent = 0;
  let commonIndent = null;

  for (let i = 0; i < value.length; ++i) {
    switch (value.charCodeAt(i)) {
      case 13:
        //  \r
        if (value.charCodeAt(i + 1) === 10) {
          ++i; // skip \r\n as one symbol
        }

      // falls through

      case 10:
        //  \n
        isFirstLine = false;
        isEmptyLine = true;
        indent = 0;
        break;

      case 9: //   \t

      case 32:
        //  <space>
        ++indent;
        break;

      default:
        if (
          isEmptyLine &&
          !isFirstLine &&
          (commonIndent === null || indent < commonIndent)
        ) {
          commonIndent = indent;
        }

        isEmptyLine = false;
    }
  }

  return (_commonIndent = commonIndent) !== null && _commonIndent !== void 0
    ? _commonIndent
    : 0;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 *
 * @internal
 */

function printBlockString(value, preferMultipleLines = false) {
  const isSingleLine = !value.includes('\n');
  const hasLeadingSpace = value.startsWith(' ') || value.startsWith('\t');
  const hasTrailingQuote = value.endsWith('"');
  const hasTrailingSlash = value.endsWith('\\');
  const printAsMultipleLines =
    !isSingleLine ||
    hasTrailingQuote ||
    hasTrailingSlash ||
    preferMultipleLines;
  let result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n';
  }

  result += value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}


/***/ }),

/***/ "./node_modules/graphql/language/kinds.js":
/*!************************************************!*\
  !*** ./node_modules/graphql/language/kinds.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Kind = void 0;

/**
 * The set of allowed kind values for AST nodes.
 */
let Kind;
/**
 * The enum type representing the possible kind values of AST nodes.
 *
 * @deprecated Please use `Kind`. Will be remove in v17.
 */

exports.Kind = Kind;

(function (Kind) {
  Kind['NAME'] = 'Name';
  Kind['DOCUMENT'] = 'Document';
  Kind['OPERATION_DEFINITION'] = 'OperationDefinition';
  Kind['VARIABLE_DEFINITION'] = 'VariableDefinition';
  Kind['SELECTION_SET'] = 'SelectionSet';
  Kind['FIELD'] = 'Field';
  Kind['ARGUMENT'] = 'Argument';
  Kind['FRAGMENT_SPREAD'] = 'FragmentSpread';
  Kind['INLINE_FRAGMENT'] = 'InlineFragment';
  Kind['FRAGMENT_DEFINITION'] = 'FragmentDefinition';
  Kind['VARIABLE'] = 'Variable';
  Kind['INT'] = 'IntValue';
  Kind['FLOAT'] = 'FloatValue';
  Kind['STRING'] = 'StringValue';
  Kind['BOOLEAN'] = 'BooleanValue';
  Kind['NULL'] = 'NullValue';
  Kind['ENUM'] = 'EnumValue';
  Kind['LIST'] = 'ListValue';
  Kind['OBJECT'] = 'ObjectValue';
  Kind['OBJECT_FIELD'] = 'ObjectField';
  Kind['DIRECTIVE'] = 'Directive';
  Kind['NAMED_TYPE'] = 'NamedType';
  Kind['LIST_TYPE'] = 'ListType';
  Kind['NON_NULL_TYPE'] = 'NonNullType';
  Kind['SCHEMA_DEFINITION'] = 'SchemaDefinition';
  Kind['OPERATION_TYPE_DEFINITION'] = 'OperationTypeDefinition';
  Kind['SCALAR_TYPE_DEFINITION'] = 'ScalarTypeDefinition';
  Kind['OBJECT_TYPE_DEFINITION'] = 'ObjectTypeDefinition';
  Kind['FIELD_DEFINITION'] = 'FieldDefinition';
  Kind['INPUT_VALUE_DEFINITION'] = 'InputValueDefinition';
  Kind['INTERFACE_TYPE_DEFINITION'] = 'InterfaceTypeDefinition';
  Kind['UNION_TYPE_DEFINITION'] = 'UnionTypeDefinition';
  Kind['ENUM_TYPE_DEFINITION'] = 'EnumTypeDefinition';
  Kind['ENUM_VALUE_DEFINITION'] = 'EnumValueDefinition';
  Kind['INPUT_OBJECT_TYPE_DEFINITION'] = 'InputObjectTypeDefinition';
  Kind['DIRECTIVE_DEFINITION'] = 'DirectiveDefinition';
  Kind['SCHEMA_EXTENSION'] = 'SchemaExtension';
  Kind['SCALAR_TYPE_EXTENSION'] = 'ScalarTypeExtension';
  Kind['OBJECT_TYPE_EXTENSION'] = 'ObjectTypeExtension';
  Kind['INTERFACE_TYPE_EXTENSION'] = 'InterfaceTypeExtension';
  Kind['UNION_TYPE_EXTENSION'] = 'UnionTypeExtension';
  Kind['ENUM_TYPE_EXTENSION'] = 'EnumTypeExtension';
  Kind['INPUT_OBJECT_TYPE_EXTENSION'] = 'InputObjectTypeExtension';
})(Kind || (exports.Kind = Kind = {}));


/***/ }),

/***/ "./node_modules/graphql/language/printString.js":
/*!******************************************************!*\
  !*** ./node_modules/graphql/language/printString.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.printString = printString;

/**
 * Prints a string as a GraphQL StringValue literal. Replaces control characters
 * and excluded characters (" U+0022 and \\ U+005C) with escape sequences.
 */
function printString(str) {
  return `"${str.replace(escapedRegExp, escapedReplacer)}"`;
} // eslint-disable-next-line no-control-regex

const escapedRegExp = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g;

function escapedReplacer(str) {
  return escapeSequences[str.charCodeAt(0)];
} // prettier-ignore

const escapeSequences = [
  '\\u0000',
  '\\u0001',
  '\\u0002',
  '\\u0003',
  '\\u0004',
  '\\u0005',
  '\\u0006',
  '\\u0007',
  '\\b',
  '\\t',
  '\\n',
  '\\u000B',
  '\\f',
  '\\r',
  '\\u000E',
  '\\u000F',
  '\\u0010',
  '\\u0011',
  '\\u0012',
  '\\u0013',
  '\\u0014',
  '\\u0015',
  '\\u0016',
  '\\u0017',
  '\\u0018',
  '\\u0019',
  '\\u001A',
  '\\u001B',
  '\\u001C',
  '\\u001D',
  '\\u001E',
  '\\u001F',
  '',
  '',
  '\\"',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 2F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 3F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 4F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '\\\\',
  '',
  '',
  '', // 5F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '', // 6F
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '\\u007F',
  '\\u0080',
  '\\u0081',
  '\\u0082',
  '\\u0083',
  '\\u0084',
  '\\u0085',
  '\\u0086',
  '\\u0087',
  '\\u0088',
  '\\u0089',
  '\\u008A',
  '\\u008B',
  '\\u008C',
  '\\u008D',
  '\\u008E',
  '\\u008F',
  '\\u0090',
  '\\u0091',
  '\\u0092',
  '\\u0093',
  '\\u0094',
  '\\u0095',
  '\\u0096',
  '\\u0097',
  '\\u0098',
  '\\u0099',
  '\\u009A',
  '\\u009B',
  '\\u009C',
  '\\u009D',
  '\\u009E',
  '\\u009F',
];


/***/ }),

/***/ "./node_modules/graphql/language/printer.js":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/printer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.print = print;

var _visitor = __webpack_require__(/*! ./visitor.js */ "./node_modules/graphql/language/visitor.js");

var _blockString = __webpack_require__(/*! ./blockString.js */ "./node_modules/graphql/language/blockString.js");

var _printString = __webpack_require__(/*! ./printString.js */ "./node_modules/graphql/language/printString.js");

/**
 * Converts an AST into a string, using one set of reasonable
 * formatting rules.
 */
function print(ast) {
  return (0, _visitor.visit)(ast, printDocASTReducer);
}

const MAX_LINE_LENGTH = 80;
const printDocASTReducer = {
  Name: {
    leave: (node) => node.value,
  },
  Variable: {
    leave: (node) => '$' + node.name,
  },
  // Document
  Document: {
    leave: (node) => join(node.definitions, '\n\n'),
  },
  OperationDefinition: {
    leave(node) {
      const varDefs = wrap('(', join(node.variableDefinitions, ', '), ')');
      const prefix = join(
        [
          node.operation,
          join([node.name, varDefs]),
          join(node.directives, ' '),
        ],
        ' ',
      ); // Anonymous queries with no directives or variable definitions can use
      // the query short form.

      return (prefix === 'query' ? '' : prefix + ' ') + node.selectionSet;
    },
  },
  VariableDefinition: {
    leave: ({ variable, type, defaultValue, directives }) =>
      variable +
      ': ' +
      type +
      wrap(' = ', defaultValue) +
      wrap(' ', join(directives, ' ')),
  },
  SelectionSet: {
    leave: ({ selections }) => block(selections),
  },
  Field: {
    leave({ alias, name, arguments: args, directives, selectionSet }) {
      const prefix = wrap('', alias, ': ') + name;
      let argsLine = prefix + wrap('(', join(args, ', '), ')');

      if (argsLine.length > MAX_LINE_LENGTH) {
        argsLine = prefix + wrap('(\n', indent(join(args, '\n')), '\n)');
      }

      return join([argsLine, join(directives, ' '), selectionSet], ' ');
    },
  },
  Argument: {
    leave: ({ name, value }) => name + ': ' + value,
  },
  // Fragments
  FragmentSpread: {
    leave: ({ name, directives }) =>
      '...' + name + wrap(' ', join(directives, ' ')),
  },
  InlineFragment: {
    leave: ({ typeCondition, directives, selectionSet }) =>
      join(
        [
          '...',
          wrap('on ', typeCondition),
          join(directives, ' '),
          selectionSet,
        ],
        ' ',
      ),
  },
  FragmentDefinition: {
    leave: (
      { name, typeCondition, variableDefinitions, directives, selectionSet }, // Note: fragment variable definitions are experimental and may be changed
    ) =>
      // or removed in the future.
      `fragment ${name}${wrap('(', join(variableDefinitions, ', '), ')')} ` +
      `on ${typeCondition} ${wrap('', join(directives, ' '), ' ')}` +
      selectionSet,
  },
  // Value
  IntValue: {
    leave: ({ value }) => value,
  },
  FloatValue: {
    leave: ({ value }) => value,
  },
  StringValue: {
    leave: ({ value, block: isBlockString }) =>
      isBlockString
        ? (0, _blockString.printBlockString)(value)
        : (0, _printString.printString)(value),
  },
  BooleanValue: {
    leave: ({ value }) => (value ? 'true' : 'false'),
  },
  NullValue: {
    leave: () => 'null',
  },
  EnumValue: {
    leave: ({ value }) => value,
  },
  ListValue: {
    leave: ({ values }) => '[' + join(values, ', ') + ']',
  },
  ObjectValue: {
    leave: ({ fields }) => '{' + join(fields, ', ') + '}',
  },
  ObjectField: {
    leave: ({ name, value }) => name + ': ' + value,
  },
  // Directive
  Directive: {
    leave: ({ name, arguments: args }) =>
      '@' + name + wrap('(', join(args, ', '), ')'),
  },
  // Type
  NamedType: {
    leave: ({ name }) => name,
  },
  ListType: {
    leave: ({ type }) => '[' + type + ']',
  },
  NonNullType: {
    leave: ({ type }) => type + '!',
  },
  // Type System Definitions
  SchemaDefinition: {
    leave: ({ description, directives, operationTypes }) =>
      wrap('', description, '\n') +
      join(['schema', join(directives, ' '), block(operationTypes)], ' '),
  },
  OperationTypeDefinition: {
    leave: ({ operation, type }) => operation + ': ' + type,
  },
  ScalarTypeDefinition: {
    leave: ({ description, name, directives }) =>
      wrap('', description, '\n') +
      join(['scalar', name, join(directives, ' ')], ' '),
  },
  ObjectTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) =>
      wrap('', description, '\n') +
      join(
        [
          'type',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  FieldDefinition: {
    leave: ({ description, name, arguments: args, type, directives }) =>
      wrap('', description, '\n') +
      name +
      (hasMultilineItems(args)
        ? wrap('(\n', indent(join(args, '\n')), '\n)')
        : wrap('(', join(args, ', '), ')')) +
      ': ' +
      type +
      wrap(' ', join(directives, ' ')),
  },
  InputValueDefinition: {
    leave: ({ description, name, type, defaultValue, directives }) =>
      wrap('', description, '\n') +
      join(
        [name + ': ' + type, wrap('= ', defaultValue), join(directives, ' ')],
        ' ',
      ),
  },
  InterfaceTypeDefinition: {
    leave: ({ description, name, interfaces, directives, fields }) =>
      wrap('', description, '\n') +
      join(
        [
          'interface',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  UnionTypeDefinition: {
    leave: ({ description, name, directives, types }) =>
      wrap('', description, '\n') +
      join(
        ['union', name, join(directives, ' '), wrap('= ', join(types, ' | '))],
        ' ',
      ),
  },
  EnumTypeDefinition: {
    leave: ({ description, name, directives, values }) =>
      wrap('', description, '\n') +
      join(['enum', name, join(directives, ' '), block(values)], ' '),
  },
  EnumValueDefinition: {
    leave: ({ description, name, directives }) =>
      wrap('', description, '\n') + join([name, join(directives, ' ')], ' '),
  },
  InputObjectTypeDefinition: {
    leave: ({ description, name, directives, fields }) =>
      wrap('', description, '\n') +
      join(['input', name, join(directives, ' '), block(fields)], ' '),
  },
  DirectiveDefinition: {
    leave: ({ description, name, arguments: args, repeatable, locations }) =>
      wrap('', description, '\n') +
      'directive @' +
      name +
      (hasMultilineItems(args)
        ? wrap('(\n', indent(join(args, '\n')), '\n)')
        : wrap('(', join(args, ', '), ')')) +
      (repeatable ? ' repeatable' : '') +
      ' on ' +
      join(locations, ' | '),
  },
  SchemaExtension: {
    leave: ({ directives, operationTypes }) =>
      join(
        ['extend schema', join(directives, ' '), block(operationTypes)],
        ' ',
      ),
  },
  ScalarTypeExtension: {
    leave: ({ name, directives }) =>
      join(['extend scalar', name, join(directives, ' ')], ' '),
  },
  ObjectTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) =>
      join(
        [
          'extend type',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  InterfaceTypeExtension: {
    leave: ({ name, interfaces, directives, fields }) =>
      join(
        [
          'extend interface',
          name,
          wrap('implements ', join(interfaces, ' & ')),
          join(directives, ' '),
          block(fields),
        ],
        ' ',
      ),
  },
  UnionTypeExtension: {
    leave: ({ name, directives, types }) =>
      join(
        [
          'extend union',
          name,
          join(directives, ' '),
          wrap('= ', join(types, ' | ')),
        ],
        ' ',
      ),
  },
  EnumTypeExtension: {
    leave: ({ name, directives, values }) =>
      join(['extend enum', name, join(directives, ' '), block(values)], ' '),
  },
  InputObjectTypeExtension: {
    leave: ({ name, directives, fields }) =>
      join(['extend input', name, join(directives, ' '), block(fields)], ' '),
  },
};
/**
 * Given maybeArray, print an empty string if it is null or empty, otherwise
 * print all items together separated by separator if provided
 */

function join(maybeArray, separator = '') {
  var _maybeArray$filter$jo;

  return (_maybeArray$filter$jo =
    maybeArray === null || maybeArray === void 0
      ? void 0
      : maybeArray.filter((x) => x).join(separator)) !== null &&
    _maybeArray$filter$jo !== void 0
    ? _maybeArray$filter$jo
    : '';
}
/**
 * Given array, print each item on its own line, wrapped in an indented `{ }` block.
 */

function block(array) {
  return wrap('{\n', indent(join(array, '\n')), '\n}');
}
/**
 * If maybeString is not null or empty, then wrap with start and end, otherwise print an empty string.
 */

function wrap(start, maybeString, end = '') {
  return maybeString != null && maybeString !== ''
    ? start + maybeString + end
    : '';
}

function indent(str) {
  return wrap('  ', str.replace(/\n/g, '\n  '));
}

function hasMultilineItems(maybeArray) {
  var _maybeArray$some;

  // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2203')
  return (_maybeArray$some =
    maybeArray === null || maybeArray === void 0
      ? void 0
      : maybeArray.some((str) => str.includes('\n'))) !== null &&
    _maybeArray$some !== void 0
    ? _maybeArray$some
    : false;
}


/***/ }),

/***/ "./node_modules/graphql/language/visitor.js":
/*!**************************************************!*\
  !*** ./node_modules/graphql/language/visitor.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.BREAK = void 0;
exports.getEnterLeaveForKind = getEnterLeaveForKind;
exports.getVisitFn = getVisitFn;
exports.visit = visit;
exports.visitInParallel = visitInParallel;

var _inspect = __webpack_require__(/*! ../jsutils/inspect.js */ "./node_modules/graphql/jsutils/inspect.js");

var _devAssert = __webpack_require__(/*! ../jsutils/devAssert.js */ "./node_modules/graphql/jsutils/devAssert.js");

var _ast = __webpack_require__(/*! ./ast.js */ "./node_modules/graphql/language/ast.js");

var _kinds = __webpack_require__(/*! ./kinds.js */ "./node_modules/graphql/language/kinds.js");

const BREAK = Object.freeze({});
/**
 * visit() will walk through an AST using a depth-first traversal, calling
 * the visitor's enter function at each node in the traversal, and calling the
 * leave function after visiting that node and all of its child nodes.
 *
 * By returning different values from the enter and leave functions, the
 * behavior of the visitor can be altered, including skipping over a sub-tree of
 * the AST (by returning false), editing the AST by returning a value or null
 * to remove the value, or to stop the whole traversal by returning BREAK.
 *
 * When using visit() to edit an AST, the original AST will not be modified, and
 * a new version of the AST with the changes applied will be returned from the
 * visit function.
 *
 * ```ts
 * const editedAST = visit(ast, {
 *   enter(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: skip visiting this node
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   },
 *   leave(node, key, parent, path, ancestors) {
 *     // @return
 *     //   undefined: no action
 *     //   false: no action
 *     //   visitor.BREAK: stop visiting altogether
 *     //   null: delete this node
 *     //   any value: replace this node with the returned value
 *   }
 * });
 * ```
 *
 * Alternatively to providing enter() and leave() functions, a visitor can
 * instead provide functions named the same as the kinds of AST nodes, or
 * enter/leave visitors at a named key, leading to three permutations of the
 * visitor API:
 *
 * 1) Named visitors triggered when entering a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind(node) {
 *     // enter the "Kind" node
 *   }
 * })
 * ```
 *
 * 2) Named visitors that trigger upon entering and leaving a node of a specific kind.
 *
 * ```ts
 * visit(ast, {
 *   Kind: {
 *     enter(node) {
 *       // enter the "Kind" node
 *     }
 *     leave(node) {
 *       // leave the "Kind" node
 *     }
 *   }
 * })
 * ```
 *
 * 3) Generic visitors that trigger upon entering and leaving any node.
 *
 * ```ts
 * visit(ast, {
 *   enter(node) {
 *     // enter any node
 *   },
 *   leave(node) {
 *     // leave any node
 *   }
 * })
 * ```
 */

exports.BREAK = BREAK;

function visit(root, visitor, visitorKeys = _ast.QueryDocumentKeys) {
  const enterLeaveMap = new Map();

  for (const kind of Object.values(_kinds.Kind)) {
    enterLeaveMap.set(kind, getEnterLeaveForKind(visitor, kind));
  }
  /* eslint-disable no-undef-init */

  let stack = undefined;
  let inArray = Array.isArray(root);
  let keys = [root];
  let index = -1;
  let edits = [];
  let node = undefined;
  let key = undefined;
  let parent = undefined;
  const path = [];
  const ancestors = [];
  let newRoot = root;
  /* eslint-enable no-undef-init */

  do {
    index++;
    const isLeaving = index === keys.length;
    const isEdited = isLeaving && edits.length !== 0;

    if (isLeaving) {
      key = ancestors.length === 0 ? undefined : path[path.length - 1];
      node = parent;
      parent = ancestors.pop();

      if (isEdited) {
        if (inArray) {
          node = node.slice();
          let editOffset = 0;

          for (const [editKey, editValue] of edits) {
            const arrayKey = editKey - editOffset;

            if (editValue === null) {
              node.splice(arrayKey, 1);
              editOffset++;
            } else {
              node[arrayKey] = editValue;
            }
          }
        } else {
          node = Object.defineProperties(
            {},
            Object.getOwnPropertyDescriptors(node),
          );

          for (const [editKey, editValue] of edits) {
            node[editKey] = editValue;
          }
        }
      }

      index = stack.index;
      keys = stack.keys;
      edits = stack.edits;
      inArray = stack.inArray;
      stack = stack.prev;
    } else {
      key = parent ? (inArray ? index : keys[index]) : undefined;
      node = parent ? parent[key] : newRoot;

      if (node === null || node === undefined) {
        continue;
      }

      if (parent) {
        path.push(key);
      }
    }

    let result;

    if (!Array.isArray(node)) {
      var _enterLeaveMap$get, _enterLeaveMap$get2;

      (0, _ast.isNode)(node) ||
        (0, _devAssert.devAssert)(
          false,
          `Invalid AST Node: ${(0, _inspect.inspect)(node)}.`,
        );
      const visitFn = isLeaving
        ? (_enterLeaveMap$get = enterLeaveMap.get(node.kind)) === null ||
          _enterLeaveMap$get === void 0
          ? void 0
          : _enterLeaveMap$get.leave
        : (_enterLeaveMap$get2 = enterLeaveMap.get(node.kind)) === null ||
          _enterLeaveMap$get2 === void 0
        ? void 0
        : _enterLeaveMap$get2.enter;
      result =
        visitFn === null || visitFn === void 0
          ? void 0
          : visitFn.call(visitor, node, key, parent, path, ancestors);

      if (result === BREAK) {
        break;
      }

      if (result === false) {
        if (!isLeaving) {
          path.pop();
          continue;
        }
      } else if (result !== undefined) {
        edits.push([key, result]);

        if (!isLeaving) {
          if ((0, _ast.isNode)(result)) {
            node = result;
          } else {
            path.pop();
            continue;
          }
        }
      }
    }

    if (result === undefined && isEdited) {
      edits.push([key, node]);
    }

    if (isLeaving) {
      path.pop();
    } else {
      var _node$kind;

      stack = {
        inArray,
        index,
        keys,
        edits,
        prev: stack,
      };
      inArray = Array.isArray(node);
      keys = inArray
        ? node
        : (_node$kind = visitorKeys[node.kind]) !== null &&
          _node$kind !== void 0
        ? _node$kind
        : [];
      index = -1;
      edits = [];

      if (parent) {
        ancestors.push(parent);
      }

      parent = node;
    }
  } while (stack !== undefined);

  if (edits.length !== 0) {
    newRoot = edits[edits.length - 1][1];
  }

  return newRoot;
}
/**
 * Creates a new visitor instance which delegates to many visitors to run in
 * parallel. Each visitor will be visited for each node before moving on.
 *
 * If a prior visitor edits a node, no following visitors will see that node.
 */

function visitInParallel(visitors) {
  const skipping = new Array(visitors.length).fill(null);
  const mergedVisitor = Object.create(null);

  for (const kind of Object.values(_kinds.Kind)) {
    let hasVisitor = false;
    const enterList = new Array(visitors.length).fill(undefined);
    const leaveList = new Array(visitors.length).fill(undefined);

    for (let i = 0; i < visitors.length; ++i) {
      const { enter, leave } = getEnterLeaveForKind(visitors[i], kind);
      hasVisitor || (hasVisitor = enter != null || leave != null);
      enterList[i] = enter;
      leaveList[i] = leave;
    }

    if (!hasVisitor) {
      continue;
    }

    const mergedEnterLeave = {
      enter(...args) {
        const node = args[0];

        for (let i = 0; i < visitors.length; i++) {
          if (skipping[i] === null) {
            var _enterList$i;

            const result =
              (_enterList$i = enterList[i]) === null || _enterList$i === void 0
                ? void 0
                : _enterList$i.apply(visitors[i], args);

            if (result === false) {
              skipping[i] = node;
            } else if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined) {
              return result;
            }
          }
        }
      },

      leave(...args) {
        const node = args[0];

        for (let i = 0; i < visitors.length; i++) {
          if (skipping[i] === null) {
            var _leaveList$i;

            const result =
              (_leaveList$i = leaveList[i]) === null || _leaveList$i === void 0
                ? void 0
                : _leaveList$i.apply(visitors[i], args);

            if (result === BREAK) {
              skipping[i] = BREAK;
            } else if (result !== undefined && result !== false) {
              return result;
            }
          } else if (skipping[i] === node) {
            skipping[i] = null;
          }
        }
      },
    };
    mergedVisitor[kind] = mergedEnterLeave;
  }

  return mergedVisitor;
}
/**
 * Given a visitor instance and a node kind, return EnterLeaveVisitor for that kind.
 */

function getEnterLeaveForKind(visitor, kind) {
  const kindVisitor = visitor[kind];

  if (typeof kindVisitor === 'object') {
    // { Kind: { enter() {}, leave() {} } }
    return kindVisitor;
  } else if (typeof kindVisitor === 'function') {
    // { Kind() {} }
    return {
      enter: kindVisitor,
      leave: undefined,
    };
  } // { enter() {}, leave() {} }

  return {
    enter: visitor.enter,
    leave: visitor.leave,
  };
}
/**
 * Given a visitor instance, if it is leaving or not, and a node kind, return
 * the function the visitor runtime should call.
 *
 * @deprecated Please use `getEnterLeaveForKind` instead. Will be removed in v17
 */
// istanbul ignore next (Deprecated code)

function getVisitFn(visitor, kind, isLeaving) {
  const { enter, leave } = getEnterLeaveForKind(visitor, kind);
  return isLeaving ? leave : enter;
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/buffer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/worker-timers-broker/build/es2019/guards/call-notification.js":
/*!************************************************************************************!*\
  !*** ./node_modules/worker-timers-broker/build/es2019/guards/call-notification.js ***!
  \************************************************************************************/
/*! exports provided: isCallNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCallNotification", function() { return isCallNotification; });
const isCallNotification = (message) => {
    return message.method !== undefined && message.method === 'call';
};
//# sourceMappingURL=call-notification.js.map

/***/ }),

/***/ "./node_modules/worker-timers-broker/build/es2019/guards/clear-response.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/worker-timers-broker/build/es2019/guards/clear-response.js ***!
  \*********************************************************************************/
/*! exports provided: isClearResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClearResponse", function() { return isClearResponse; });
const isClearResponse = (message) => {
    return message.error === null && typeof message.id === 'number';
};
//# sourceMappingURL=clear-response.js.map

/***/ }),

/***/ "./node_modules/worker-timers-broker/build/es2019/module.js":
/*!******************************************************************!*\
  !*** ./node_modules/worker-timers-broker/build/es2019/module.js ***!
  \******************************************************************/
/*! exports provided: load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony import */ var fast_unique_numbers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-unique-numbers */ "./node_modules/fast-unique-numbers/build/es5/bundle.js");
/* harmony import */ var fast_unique_numbers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_unique_numbers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _guards_call_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/call-notification */ "./node_modules/worker-timers-broker/build/es2019/guards/call-notification.js");
/* harmony import */ var _guards_clear_response__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/clear-response */ "./node_modules/worker-timers-broker/build/es2019/guards/clear-response.js");



const load = (url) => {
    // Prefilling the Maps with a function indexed by zero is necessary to be compliant with the specification.
    const scheduledIntervalFunctions = new Map([[0, () => { }]]); // tslint:disable-line no-empty
    const scheduledTimeoutFunctions = new Map([[0, () => { }]]); // tslint:disable-line no-empty
    const unrespondedRequests = new Map();
    const worker = new Worker(url);
    worker.addEventListener('message', ({ data }) => {
        if (Object(_guards_call_notification__WEBPACK_IMPORTED_MODULE_1__["isCallNotification"])(data)) {
            const { params: { timerId, timerType } } = data;
            if (timerType === 'interval') {
                const idOrFunc = scheduledIntervalFunctions.get(timerId);
                if (typeof idOrFunc === 'number') {
                    const timerIdAndTimerType = unrespondedRequests.get(idOrFunc);
                    if (timerIdAndTimerType === undefined ||
                        timerIdAndTimerType.timerId !== timerId ||
                        timerIdAndTimerType.timerType !== timerType) {
                        throw new Error('The timer is in an undefined state.');
                    }
                }
                else if (typeof idOrFunc !== 'undefined') {
                    idOrFunc();
                }
                else {
                    throw new Error('The timer is in an undefined state.');
                }
            }
            else if (timerType === 'timeout') {
                const idOrFunc = scheduledTimeoutFunctions.get(timerId);
                if (typeof idOrFunc === 'number') {
                    const timerIdAndTimerType = unrespondedRequests.get(idOrFunc);
                    if (timerIdAndTimerType === undefined ||
                        timerIdAndTimerType.timerId !== timerId ||
                        timerIdAndTimerType.timerType !== timerType) {
                        throw new Error('The timer is in an undefined state.');
                    }
                }
                else if (typeof idOrFunc !== 'undefined') {
                    idOrFunc();
                    // A timeout can be savely deleted because it is only called once.
                    scheduledTimeoutFunctions.delete(timerId);
                }
                else {
                    throw new Error('The timer is in an undefined state.');
                }
            }
        }
        else if (Object(_guards_clear_response__WEBPACK_IMPORTED_MODULE_2__["isClearResponse"])(data)) {
            const { id } = data;
            const timerIdAndTimerType = unrespondedRequests.get(id);
            if (timerIdAndTimerType === undefined) {
                throw new Error('The timer is in an undefined state.');
            }
            const { timerId, timerType } = timerIdAndTimerType;
            unrespondedRequests.delete(id);
            if (timerType === 'interval') {
                scheduledIntervalFunctions.delete(timerId);
            }
            else {
                scheduledTimeoutFunctions.delete(timerId);
            }
        }
        else {
            const { error: { message } } = data;
            throw new Error(message);
        }
    });
    const clearInterval = (timerId) => {
        const id = Object(fast_unique_numbers__WEBPACK_IMPORTED_MODULE_0__["generateUniqueNumber"])(unrespondedRequests);
        unrespondedRequests.set(id, { timerId, timerType: 'interval' });
        scheduledIntervalFunctions.set(timerId, id);
        worker.postMessage({
            id,
            method: 'clear',
            params: { timerId, timerType: 'interval' }
        });
    };
    const clearTimeout = (timerId) => {
        const id = Object(fast_unique_numbers__WEBPACK_IMPORTED_MODULE_0__["generateUniqueNumber"])(unrespondedRequests);
        unrespondedRequests.set(id, { timerId, timerType: 'timeout' });
        scheduledTimeoutFunctions.set(timerId, id);
        worker.postMessage({
            id,
            method: 'clear',
            params: { timerId, timerType: 'timeout' }
        });
    };
    const setInterval = (func, delay) => {
        const timerId = Object(fast_unique_numbers__WEBPACK_IMPORTED_MODULE_0__["generateUniqueNumber"])(scheduledIntervalFunctions);
        scheduledIntervalFunctions.set(timerId, () => {
            func();
            // Doublecheck if the interval should still be rescheduled because it could have been cleared inside of func().
            if (typeof scheduledIntervalFunctions.get(timerId) === 'function') {
                worker.postMessage({
                    id: null,
                    method: 'set',
                    params: {
                        delay,
                        now: performance.now(),
                        timerId,
                        timerType: 'interval'
                    }
                });
            }
        });
        worker.postMessage({
            id: null,
            method: 'set',
            params: {
                delay,
                now: performance.now(),
                timerId,
                timerType: 'interval'
            }
        });
        return timerId;
    };
    const setTimeout = (func, delay) => {
        const timerId = Object(fast_unique_numbers__WEBPACK_IMPORTED_MODULE_0__["generateUniqueNumber"])(scheduledTimeoutFunctions);
        scheduledTimeoutFunctions.set(timerId, func);
        worker.postMessage({
            id: null,
            method: 'set',
            params: {
                delay,
                now: performance.now(),
                timerId,
                timerType: 'timeout'
            }
        });
        return timerId;
    };
    return {
        clearInterval,
        clearTimeout,
        setInterval,
        setTimeout
    };
};
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/worker-timers/build/es2019/factories/load-worker-timers.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/worker-timers/build/es2019/factories/load-worker-timers.js ***!
  \*********************************************************************************/
/*! exports provided: createLoadWorkerTimers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLoadWorkerTimers", function() { return createLoadWorkerTimers; });
let workerTimers = null;
const createLoadWorkerTimers = (load, worker) => {
    return () => {
        if (workerTimers !== null) {
            return workerTimers;
        }
        const blob = new Blob([worker], { type: 'application/javascript; charset=utf-8' });
        const url = URL.createObjectURL(blob);
        workerTimers = load(url);
        // Bug #1: Edge doesn't like the URL to be revoked directly.
        workerTimers.setTimeout(() => URL.revokeObjectURL(url), 0);
        return workerTimers;
    };
};
//# sourceMappingURL=load-worker-timers.js.map

/***/ }),

/***/ "./node_modules/worker-timers/build/es2019/module.js":
/*!***********************************************************!*\
  !*** ./node_modules/worker-timers/build/es2019/module.js ***!
  \***********************************************************/
/*! exports provided: clearInterval, clearTimeout, setInterval, setTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearInterval", function() { return clearInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTimeout", function() { return clearTimeout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInterval", function() { return setInterval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setTimeout", function() { return setTimeout; });
/* harmony import */ var worker_timers_broker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! worker-timers-broker */ "./node_modules/worker-timers-broker/build/es2019/module.js");
/* harmony import */ var _factories_load_worker_timers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/load-worker-timers */ "./node_modules/worker-timers/build/es2019/factories/load-worker-timers.js");
/* harmony import */ var _worker_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worker/worker */ "./node_modules/worker-timers/build/es2019/worker/worker.js");
/* harmony import */ var _types_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/index */ "./node_modules/worker-timers/build/es2019/types/index.js");
/* empty/unused harmony star reexport */


/*
 * @todo Explicitly referencing the barrel file seems to be necessary when enabling the
 * isolatedModules compiler option.
 */

const loadWorkerTimers = Object(_factories_load_worker_timers__WEBPACK_IMPORTED_MODULE_1__["createLoadWorkerTimers"])(worker_timers_broker__WEBPACK_IMPORTED_MODULE_0__["load"], _worker_worker__WEBPACK_IMPORTED_MODULE_2__["worker"]);
const clearInterval = (timerId) => loadWorkerTimers().clearInterval(timerId);
const clearTimeout = (timerId) => loadWorkerTimers().clearTimeout(timerId);
const setInterval = (func, delay) => loadWorkerTimers().setInterval(func, delay);
const setTimeout = (func, delay) => loadWorkerTimers().setTimeout(func, delay);
//# sourceMappingURL=module.js.map

/***/ }),

/***/ "./node_modules/worker-timers/build/es2019/types/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/worker-timers/build/es2019/types/index.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_worker_timers_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load-worker-timers-factory */ "./node_modules/worker-timers/build/es2019/types/load-worker-timers-factory.js");
/* empty/unused harmony star reexport *//* harmony import */ var _load_worker_timers_function__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./load-worker-timers-function */ "./node_modules/worker-timers/build/es2019/types/load-worker-timers-function.js");
/* empty/unused harmony star reexport *//* harmony import */ var _worker_timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./worker-timers */ "./node_modules/worker-timers/build/es2019/types/worker-timers.js");
/* empty/unused harmony star reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/worker-timers/build/es2019/types/load-worker-timers-factory.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/worker-timers/build/es2019/types/load-worker-timers-factory.js ***!
  \*************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=load-worker-timers-factory.js.map

/***/ }),

/***/ "./node_modules/worker-timers/build/es2019/types/load-worker-timers-function.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/worker-timers/build/es2019/types/load-worker-timers-function.js ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=load-worker-timers-function.js.map

/***/ }),

/***/ "./node_modules/worker-timers/build/es2019/types/worker-timers.js":
/*!************************************************************************!*\
  !*** ./node_modules/worker-timers/build/es2019/types/worker-timers.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=worker-timers.js.map

/***/ }),

/***/ "./node_modules/worker-timers/build/es2019/worker/worker.js":
/*!******************************************************************!*\
  !*** ./node_modules/worker-timers/build/es2019/worker/worker.js ***!
  \******************************************************************/
/*! exports provided: worker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "worker", function() { return worker; });
// This is the minified and stringified code of the worker-timers-worker package.
const worker = `(()=>{"use strict";const e=new Map,t=new Map,r=(e,t)=>{let r,o;const i=performance.now();r=i,o=e-Math.max(0,i-t);return{expected:r+o,remainingDelay:o}},o=(e,t,r,i)=>{const s=performance.now();s>r?postMessage({id:null,method:"call",params:{timerId:t,timerType:i}}):e.set(t,setTimeout(o,r-s,e,t,r,i))};addEventListener("message",(i=>{let{data:s}=i;try{if("clear"===s.method){const{id:r,params:{timerId:o,timerType:i}}=s;if("interval"===i)(t=>{const r=e.get(t);if(void 0===r)throw new Error('There is no interval scheduled with the given id "'.concat(t,'".'));clearTimeout(r),e.delete(t)})(o),postMessage({error:null,id:r});else{if("timeout"!==i)throw new Error('The given type "'.concat(i,'" is not supported'));(e=>{const r=t.get(e);if(void 0===r)throw new Error('There is no timeout scheduled with the given id "'.concat(e,'".'));clearTimeout(r),t.delete(e)})(o),postMessage({error:null,id:r})}}else{if("set"!==s.method)throw new Error('The given method "'.concat(s.method,'" is not supported'));{const{params:{delay:i,now:n,timerId:a,timerType:d}}=s;if("interval"===d)((t,i,s)=>{const{expected:n,remainingDelay:a}=r(t,s);e.set(i,setTimeout(o,a,e,i,n,"interval"))})(i,a,n);else{if("timeout"!==d)throw new Error('The given type "'.concat(d,'" is not supported'));((e,i,s)=>{const{expected:n,remainingDelay:a}=r(e,s);t.set(i,setTimeout(o,a,t,i,n,"timeout"))})(i,a,n)}}}}catch(e){postMessage({error:{message:e.message},id:s.id,result:null})}}))})();`; // tslint:disable-line:max-line-length
//# sourceMappingURL=worker.js.map

/***/ }),

/***/ "./src/CharacterController.ts":
/*!************************************!*\
  !*** ./src/CharacterController.ts ***!
  \************************************/
/*! exports provided: CharacterController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterController", function() { return CharacterController; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);

var CharacterController = /** @class */ (function () {
    /**
     *
     * @param avatar
     * @param camera
     * @param scene
     * @param agMap map of animationRange name to animationRange
     * @param faceForward
     */
    function CharacterController(avatar, camera, scene, agMap, faceForward) {
        var _this = this;
        if (faceForward === void 0) { faceForward = false; }
        //avatar speed in meters/second
        this._walkSpeed = 4;
        this._walkFastSpeed = this._walkSpeed * 2;
        this._runSpeed = this._walkSpeed * 2;
        this._backSpeed = this._walkSpeed / 2;
        this._backFastSpeed = this._backSpeed * 2;
        this._jumpSpeed = this._walkSpeed * 2;
        this._leftSpeed = this._walkSpeed / 2;
        this._leftFastSpeed = this._leftSpeed * 2;
        this._rightSpeed = this._walkSpeed / 2;
        this._rightFastSpeed = this._rightSpeed * 2;
        //trun speed in radian per second (equivalent to 180 degree/second by default)
        this._turnSpeed = Math.PI / 8;
        this._turnFastSpeed = this._turnSpeed * 2;
        this._gravity = 9.8;
        //slopeLimit in degrees
        this._minSlopeLimit = 30;
        this._maxSlopeLimit = 45;
        //slopeLimit in radians
        this._sl = Math.PI * this._minSlopeLimit / 180;
        this._sl2 = Math.PI * this._maxSlopeLimit / 180;
        //The av will step up a stair only if it is closer to the ground than the indicated value.
        this._stepOffset = 0.25;
        //toal amount by which the av has moved up
        this._vMoveTot = 0;
        //position of av when it started moving up
        this._vMovStartPos = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero();
        //animations
        this._walk = new _AnimData("walk");
        this._walkBack = new _AnimData("walkBack");
        this._walkBackFast = new _AnimData("walkBackFast");
        this._idle = new _AnimData("idle");
        this._idleJump = new _AnimData("idleJump");
        this._run = new _AnimData("run");
        this._runJump = new _AnimData("runJump");
        this._fall = new _AnimData("fall");
        this._turnLeft = new _AnimData("turnLeft");
        this._turnLeftFast = new _AnimData("turnLeftFast");
        this._turnRight = new _AnimData("turnRight");
        this._turnRightFast = new _AnimData("turnRightFast");
        this._strafeLeft = new _AnimData("strafeLeft");
        this._strafeLeftFast = new _AnimData("strafeLeftFast");
        this._strafeRight = new _AnimData("strafeRight");
        this._strafeRightFast = new _AnimData("strafeRightFast");
        this._slideBack = new _AnimData("slideBack");
        this._anims = [this._walk, this._walkBack, this._walkBackFast, this._idle, this._idleJump, this._run, this._runJump, this._fall, this._turnLeft, this._turnLeftFast, this._turnRight, this._turnRightFast, this._strafeLeft, this._strafeLeftFast, this._strafeRight, this._strafeRightFast, this._slideBack];
        //move keys
        this._walkKey = "w";
        this._walkBackKey = "s";
        this._turnLeftKey = "a";
        this._turnRightKey = "d";
        this._strafeLeftKey = "q";
        this._strafeRightKey = "e";
        this._jumpKey = " ";
        this._elasticCamera = true;
        this._cameraTarget = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero();
        //should we go into first person view when camera is near avatar (radius is lowerradius limit)
        this._noFirstPerson = false;
        /**
         * Use this to make the  character controller suitable for a isometeric/top down games or  fps/third person game.
         * 1 In isometric/top down games the camera direction has no bearing on avatar movement.
         * 0 In fps/third person game rotating the camera around the avatar , rotates the avatr too.
         */
        this.mode = 0;
        this._saveMode = 0;
        /**
            * checks if a have left hand , right hand issue.
            * In other words if a mesh is a LHS mesh in RHS system or
            * a RHS mesh in LHS system
            * The X axis will be reversed in such cases.
            * thus Cross product of X and Y should be inverse of Z.
            * BABYLONJS GLB models are RHS and exhibit this behavior
            *
            */
        this._isRHS = false;
        this._signRHS = -1;
        this._started = false;
        /**
         * use pauseAnim to stop the charactere controller from playing
         * any animation on the character
         * use this when you want to play your animation instead
         * see also resumeAnim()
         */
        this._stopAnim = false;
        this._prevAnim = null;
        this._avStartPos = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero();
        this._grounded = false;
        //distance by which AV would move down if in freefall
        this._freeFallDist = 0;
        //how many minimum contiguos frames should the AV have been in free fall
        //before we assume AV is in big freefall.
        //we will use this to remove animation flicker during move down a slope (fall, move, fall move etc)
        //TODO: base this on slope - large slope large count
        this._fallFrameCountMin = 50;
        this._fallFrameCount = 0;
        this._inFreeFall = false;
        this._wasWalking = false;
        this._wasRunning = false;
        //verical position of AV when it is about to start a jump
        this._jumpStartPosY = 0;
        //for how long the AV has been in the jump
        this._jumpTime = 0;
        //for how long has the av been falling while moving
        this._movFallTime = 0;
        this._sign = 1;
        this._isTurning = false;
        this._noRot = false;
        //for how long has the av been falling while idle (not moving)
        this._idleFallTime = 0;
        this._groundFrameCount = 0;
        this._groundFrameMax = 10;
        this._savedCameraCollision = true;
        this._inFP = false;
        this._ray = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Ray"](babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero(), babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].One(), 1);
        this._rayDir = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero();
        //camera seems to get stuck into things
        //should move camera away from things by a value of cameraSkin
        this._cameraSkin = 0.5;
        this._skip = 0;
        this._move = false;
        this._isAG = false;
        this._hasAnims = false;
        this._avatar = avatar;
        this._setRHS(avatar);
        this.setFaceForward(faceForward);
        this._scene = scene;
        if (agMap != null) {
            this._isAG = true;
            this.setAnimationGroups(agMap);
        }
        if (this._isAG || this._skeleton !== null) {
            this._hasAnims = true;
        }
        if (!this._isAG)
            this._skeleton = avatar.skeleton;
        if (!this._isAG && this._skeleton != null)
            this.checkAnims(this._skeleton);
        this._camera = camera;
        this._savedCameraCollision = this._camera.checkCollisions;
        this._act = new _Action();
        this._renderer = function () { _this._moveAVandCamera(); };
        this._handleKeyUp = function (e) { _this._onKeyUp(e); };
        this._handleKeyDown = function (e) { _this._onKeyDown(e); };
    }
    CharacterController.prototype.setAvatar = function (avatar) {
        this._avatar = avatar;
    };
    CharacterController.prototype.setAvatarSkeleton = function (skeleton) {
        this._skeleton = skeleton;
        this.checkAnims(skeleton);
    };
    CharacterController.prototype.setSlopeLimit = function (minSlopeLimit, maxSlopeLimit) {
        this._minSlopeLimit = minSlopeLimit;
        this._maxSlopeLimit = maxSlopeLimit;
        this._sl = Math.PI * minSlopeLimit / 180;
        this._sl2 = Math.PI * this._maxSlopeLimit / 180;
    };
    /**
     * The av will step up a stair only if it is closer to the ground than the indicated value.
     * Default value is 0.25 m
     */
    CharacterController.prototype.setStepOffset = function (stepOffset) {
        this._stepOffset = stepOffset;
    };
    CharacterController.prototype.setWalkSpeed = function (n) {
        this._walkSpeed = n;
    };
    CharacterController.prototype.setRunSpeed = function (n) {
        this._runSpeed = n;
    };
    CharacterController.prototype.setBackSpeed = function (n) {
        this._backSpeed = n;
    };
    CharacterController.prototype.setBackFastSpeed = function (n) {
        this._backFastSpeed = n;
    };
    CharacterController.prototype.setJumpSpeed = function (n) {
        this._jumpSpeed = n;
    };
    CharacterController.prototype.setLeftSpeed = function (n) {
        this._leftSpeed = n;
    };
    CharacterController.prototype.setLeftFastSpeed = function (n) {
        this._leftFastSpeed = n;
    };
    CharacterController.prototype.setRightSpeed = function (n) {
        this._rightSpeed = n;
    };
    CharacterController.prototype.setRightFastSpeed = function (n) {
        this._rightFastSpeed = n;
    };
    // get turnSpeed in degrees per second.
    // store in radians per second
    CharacterController.prototype.setTurnSpeed = function (n) {
        this._turnSpeed = n * Math.PI / 180;
    };
    CharacterController.prototype.setTurnFastSpeed = function (n) {
        this._turnFastSpeed = n * Math.PI / 180;
    };
    CharacterController.prototype.setGravity = function (n) {
        this._gravity = n;
    };
    /**
     * Use this to provide animationGroups to the character controller.
     * Provide the AnimationGroups using a Map
     * In this Map the key would be the character controller animation name and
     * the key value would be the animationGroup.
     * Example:
     * let myWalkAnimationGroup:AnimationGroup = ...;
     * let agMap:{} = {
     *  "walk":myWalkAnimationGroup,
     *   ....
     * }
     *
     * @param agMap a map of character controller animation name to animationGroup
     */
    CharacterController.prototype.setAnimationGroups = function (agMap) {
        this._isAG = true;
        for (var _i = 0, _a = this._anims; _i < _a.length; _i++) {
            var anim = _a[_i];
            if (agMap[anim._name] != null) {
                anim._ag = agMap[anim._name];
                anim._exist = true;
                anim._ag.name;
            }
        }
        this._checkFastAnims();
    };
    /**
     * Use this to provide AnimationRanges to the character controller.
     * Provide the AnimationRanges using a Map
     * In this Map the key would be the character controller animation name and
     * the key value would be the animation range name or an object with animation range data.
     * example:
     * let arMap = {
     *  "walk":"myWalk",
     *  "run" : {"name":"myRun","rate":1},
     *  "idle" : {"name":"myIdle","loop":true,"rate":1},
     *  ....
     * }
     *
     * @param arMap a map of character controller animation name to animationRange data
     */
    CharacterController.prototype.setAnimationRanges = function (arMap) {
        this._isAG = false;
        var arData;
        for (var _i = 0, _a = this._anims; _i < _a.length; _i++) {
            var anim = _a[_i];
            arData = arMap[anim._name];
            if (arData != null) {
                if (arData instanceof Object) {
                    if (arData["name"])
                        anim._name = arData["name"];
                    if (arData["loop"])
                        anim._loop = arData["loop"];
                    if (arData["rate"])
                        anim._loop = arData["rate"];
                }
                else {
                    anim._name = arData;
                }
                anim._exist = true;
            }
        }
    };
    CharacterController.prototype._setAnim = function (anim, rangeName, rate, loop) {
        if (!this._isAG && this._skeleton == null)
            return;
        if (loop != null)
            anim._loop = loop;
        if (!this._isAG) {
            if (rangeName != null)
                anim._name = rangeName;
            if (rate != null)
                anim._rate = rate;
            if (this._skeleton.getAnimationRange(anim._name) != null) {
                anim._exist = true;
            }
            else {
                anim._exist = false;
            }
        }
        else {
            if (rangeName != null) {
                anim._ag = rangeName;
                anim._exist = true;
            }
            if (rate != null && anim._exist) {
                anim._rate = rate;
                anim._ag.speedRatio = rate;
            }
        }
    };
    CharacterController.prototype.enableBlending = function (n) {
        if (this._isAG) {
            for (var _i = 0, _a = this._anims; _i < _a.length; _i++) {
                var anim = _a[_i];
                if (anim._exist) {
                    var ar = anim._ag;
                    for (var _b = 0, _c = ar.targetedAnimations; _b < _c.length; _b++) {
                        var ta = _c[_b];
                        ta.animation.enableBlending = true;
                        ta.animation.blendingSpeed = n;
                    }
                }
            }
        }
        else {
            this._skeleton.enableBlending(n);
        }
    };
    CharacterController.prototype.disableBlending = function () {
        if (this._isAG) {
            for (var _i = 0, _a = this._anims; _i < _a.length; _i++) {
                var anim = _a[_i];
                if (anim._exist) {
                    var ar = anim._ag;
                    for (var _b = 0, _c = ar.targetedAnimations; _b < _c.length; _b++) {
                        var ta = _c[_b];
                        ta.animation.enableBlending = false;
                    }
                }
            }
        }
    };
    //setters for animations
    CharacterController.prototype.setWalkAnim = function (rangeName, rate, loop) {
        this._setAnim(this._walk, rangeName, rate, loop);
    };
    CharacterController.prototype.setRunAnim = function (rangeName, rate, loop) {
        this._setAnim(this._run, rangeName, rate, loop);
    };
    CharacterController.prototype.setWalkBackAnim = function (rangeName, rate, loop) {
        this._setAnim(this._walkBack, rangeName, rate, loop);
        this._copySlowAnims(this._walkBackFast, this._walkBack);
    };
    CharacterController.prototype.setWalkBackFastAnim = function (rangeName, rate, loop) {
        this._setAnim(this._walkBackFast, rangeName, rate, loop);
    };
    CharacterController.prototype.setSlideBackAnim = function (rangeName, rate, loop) {
        this._setAnim(this._slideBack, rangeName, rate, loop);
    };
    CharacterController.prototype.setIdleAnim = function (rangeName, rate, loop) {
        this._setAnim(this._idle, rangeName, rate, loop);
    };
    CharacterController.prototype.setTurnRightAnim = function (rangeName, rate, loop) {
        this._setAnim(this._turnRight, rangeName, rate, loop);
        this._copySlowAnims(this._turnRightFast, this._turnRight);
    };
    CharacterController.prototype.setTurnRightFastAnim = function (rangeName, rate, loop) {
        this._setAnim(this._turnRightFast, rangeName, rate, loop);
    };
    CharacterController.prototype.setTurnLeftAnim = function (rangeName, rate, loop) {
        this._setAnim(this._turnLeft, rangeName, rate, loop);
        this._copySlowAnims(this._turnLeftFast, this._turnLeft);
    };
    CharacterController.prototype.setTurnLeftFastAnim = function (rangeName, rate, loop) {
        this._setAnim(this._turnLeftFast, rangeName, rate, loop);
    };
    CharacterController.prototype.setStrafeRightAnim = function (rangeName, rate, loop) {
        this._setAnim(this._strafeRight, rangeName, rate, loop);
        this._copySlowAnims(this._strafeRightFast, this._strafeRight);
    };
    CharacterController.prototype.setStrafeRightFastAnim = function (rangeName, rate, loop) {
        this._setAnim(this._strafeRightFast, rangeName, rate, loop);
    };
    CharacterController.prototype.setStrafeLeftAnim = function (rangeName, rate, loop) {
        this._setAnim(this._strafeLeft, rangeName, rate, loop);
        this._copySlowAnims(this._strafeLeftFast, this._strafeLeft);
    };
    CharacterController.prototype.setStrafeLeftFastAnim = function (rangeName, rate, loop) {
        this._setAnim(this._strafeLeftFast, rangeName, rate, loop);
    };
    CharacterController.prototype.setIdleJumpAnim = function (rangeName, rate, loop) {
        this._setAnim(this._idleJump, rangeName, rate, loop);
    };
    CharacterController.prototype.setRunJumpAnim = function (rangeName, rate, loop) {
        this._setAnim(this._runJump, rangeName, rate, loop);
    };
    CharacterController.prototype.setFallAnim = function (rangeName, rate, loop) {
        this._setAnim(this._fall, rangeName, rate, loop);
    };
    // setters for keys
    CharacterController.prototype.setWalkKey = function (key) {
        this._walkKey = key.toLowerCase();
    };
    CharacterController.prototype.setWalkBackKey = function (key) {
        this._walkBackKey = key.toLowerCase();
    };
    CharacterController.prototype.setTurnLeftKey = function (key) {
        this._turnLeftKey = key.toLowerCase();
    };
    CharacterController.prototype.setTurnRightKey = function (key) {
        this._turnRightKey = key.toLowerCase();
    };
    CharacterController.prototype.setStrafeLeftKey = function (key) {
        this._strafeLeftKey = key.toLowerCase();
    };
    CharacterController.prototype.setStrafeRightKey = function (key) {
        this._strafeRightKey = key.toLowerCase();
    };
    CharacterController.prototype.setJumpKey = function (key) {
        this._jumpKey = key.toLowerCase();
    };
    CharacterController.prototype.setCameraElasticity = function (b) {
        this._elasticCamera = b;
    };
    CharacterController.prototype.setCameraTarget = function (v) {
        this._cameraTarget.copyFrom(v);
    };
    /**
     * user should call this whenever the user changes the camera checkCollision
     * property
     *
     */
    CharacterController.prototype.cameraCollisionChanged = function () {
        this._savedCameraCollision = this._camera.checkCollisions;
    };
    CharacterController.prototype.setNoFirstPerson = function (b) {
        this._noFirstPerson = b;
    };
    CharacterController.prototype.checkAnims = function (skel) {
        for (var _i = 0, _a = this._anims; _i < _a.length; _i++) {
            var anim = _a[_i];
            if (skel != null) {
                if (skel.getAnimationRange(anim._name) != null)
                    anim._exist = true;
            }
            else {
                anim._exist = false;
            }
        }
        this._checkFastAnims();
    };
    /**
     * if fast anims do not exist then use their slow counterpart as them but double the rate at which they play
     */
    CharacterController.prototype._checkFastAnims = function () {
        this._copySlowAnims(this._walkBackFast, this._walkBack);
        this._copySlowAnims(this._turnRightFast, this._turnRightFast);
        this._copySlowAnims(this._turnLeftFast, this._turnLeft);
        this._copySlowAnims(this._strafeRightFast, this._strafeRight);
        this._copySlowAnims(this._strafeLeftFast, this._strafeLeft);
    };
    CharacterController.prototype._copySlowAnims = function (f, s) {
        if (f._exist)
            return;
        if (!s._exist)
            return;
        f._exist = true;
        f._ag = s._ag;
        f._name = s._name;
        f._rate = s._rate * 2;
    };
    CharacterController.prototype.setMode = function (n) {
        this.mode = n;
        this._saveMode = n;
    };
    /**
     * Use this to set  turning off.
     * When turining is off
     * a) turn left or turn right keys result in avatar facing and moving left or right with respect to camera.
     * b) walkback/runback key results in avatar facing back and walking/running towards camera.
     *
     * This setting has no effect when mode is 1.
     *
     * @param b
     */
    CharacterController.prototype.setTurningOff = function (b) {
        this._noRot = b;
    };
    CharacterController.prototype._setRHS = function (mesh) {
        var meshMatrix = mesh.getWorldMatrix();
        var _localX = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].FromArray(meshMatrix.m, 0);
        var _localY = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].FromArray(meshMatrix.m, 4);
        var _localZ = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].FromArray(meshMatrix.m, 8);
        var actualZ = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Cross(_localX, _localY);
        //same direction or opposite direction of Z
        if (babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Dot(actualZ, _localZ) < 0) {
            this._isRHS = true;
            this._signRHS = 1;
        }
        else {
            this._isRHS = false;
            this._signRHS = -1;
        }
    };
    CharacterController.prototype.setFaceForward = function (b) {
        if (this._isRHS) {
            this._av2cam = b ? Math.PI / 2 : 3 * Math.PI / 2;
            this._ffSign = b ? 1 : -1;
        }
        else {
            this._av2cam = b ? 3 * Math.PI / 2 : Math.PI / 2;
            this._ffSign = b ? -1 : 1;
        }
    };
    CharacterController.prototype.checkAGs = function (agMap) {
        for (var _i = 0, _a = this._anims; _i < _a.length; _i++) {
            var anim = _a[_i];
            if (agMap[anim._name] != null) {
                anim._ag = agMap[anim._name];
                anim._exist = true;
            }
        }
    };
    CharacterController.prototype.start = function () {
        if (this._started)
            return;
        this._started = true;
        this._act.reset();
        this._movFallTime = 0;
        //first time we enter render loop, delta time is zero
        this._idleFallTime = 0.001;
        this._grounded = false;
        this._updateTargetValue();
        this.enableKeyBoard(true);
        this._scene.registerBeforeRender(this._renderer);
    };
    CharacterController.prototype.stop = function () {
        if (!this._started)
            return;
        this._started = false;
        this._scene.unregisterBeforeRender(this._renderer);
        this.enableKeyBoard(false);
        this._prevAnim = null;
    };
    CharacterController.prototype.pauseAnim = function () {
        this._stopAnim = true;
    };
    /**
     * use resumeAnim to resume the character controller playing
     * animations on the character.
     * see also pauseAnim()
     */
    CharacterController.prototype.resumeAnim = function () {
        this._stopAnim = false;
    };
    //used only in mode 1
    //value 1 or -1 , -1 if avatar is facing camera
    //private _notFacingCamera = 1;
    CharacterController.prototype._isAvFacingCamera = function () {
        if (babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Dot(this._avatar.forward, this._avatar.position.subtract(this._camera.position)) < 0)
            return 1;
        else
            return -1;
    };
    CharacterController.prototype._moveAVandCamera = function () {
        this._avStartPos.copyFrom(this._avatar.position);
        var anim = null;
        var dt = this._scene.getEngine().getDeltaTime() / 1000;
        if (this._act._jump && !this._inFreeFall) {
            this._grounded = false;
            this._idleFallTime = 0;
            anim = this._doJump(dt);
        }
        else if (this.anyMovement() || this._inFreeFall) {
            this._grounded = false;
            this._idleFallTime = 0;
            anim = this._doMove(dt);
        }
        else if (!this._inFreeFall) {
            anim = this._doIdle(dt);
        }
        if (!this._stopAnim && this._hasAnims && anim != null) {
            if (this._prevAnim !== anim) {
                if (anim._exist) {
                    if (this._isAG) {
                        if (this._prevAnim != null && this._prevAnim._exist)
                            this._prevAnim._ag.stop();
                        anim._ag.play(anim._loop);
                        anim._ag.speedRatio = anim._rate;
                    }
                    else {
                        this._skeleton.beginAnimation(anim._name, anim._loop, anim._rate);
                    }
                }
                this._prevAnim = anim;
            }
        }
        this._updateTargetValue();
        return;
    };
    CharacterController.prototype._doJump = function (dt) {
        var anim = null;
        anim = this._runJump;
        if (this._jumpTime === 0) {
            this._jumpStartPosY = this._avatar.position.y;
        }
        //up velocity at the begining of the lastt frame (v=u+at)
        var js = this._jumpSpeed - this._gravity * this._jumpTime;
        //distance travelled up since last frame to this frame (s=ut+1/2*at^2)
        var jumpDist = js * dt - 0.5 * this._gravity * dt * dt;
        this._jumpTime = this._jumpTime + dt;
        var forwardDist = 0;
        var disp;
        if (this.mode != 1 && !this._noRot)
            this._avatar.rotation.y = this._av2cam - this._camera.alpha;
        if (this._wasRunning || this._wasWalking) {
            if (this._wasRunning) {
                forwardDist = this._runSpeed * dt;
            }
            else if (this._wasWalking) {
                forwardDist = this._walkSpeed * dt;
            }
            //find out in which horizontal direction the AV was moving when it started the jump
            disp = this._moveVector.clone();
            disp.y = 0;
            disp = disp.normalize();
            disp.scaleToRef(forwardDist, disp);
            disp.y = jumpDist;
        }
        else {
            disp = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, jumpDist, 0);
            anim = this._idleJump;
            //this.avatar.ellipsoid.y=this._ellipsoid.y/2;
        }
        //moveWithCollision only seems to happen if length of displacment is atleast 0.001
        this._avatar.moveWithCollisions(disp);
        if (jumpDist < 0) {
            //this.avatar.ellipsoid.y=this._ellipsoid.y;
            //check if going up a slope or back on flat ground 
            if ((this._avatar.position.y > this._avStartPos.y) || ((this._avatar.position.y === this._avStartPos.y) && (disp.length() > 0.001))) {
                this._endJump();
            }
            else if (this._avatar.position.y < this._jumpStartPosY) {
                //the avatar is below the point from where it started the jump
                //so it is either in free fall or is sliding along a downward slope
                //
                //if the actual displacemnt is same as the desired displacement then AV is in freefall
                //else it is on a slope
                var actDisp = this._avatar.position.subtract(this._avStartPos);
                if (!(this._areVectorsEqual(actDisp, disp, 0.001))) {
                    //AV is on slope
                    //Should AV continue to slide or stop?
                    //if slope is less steeper than acceptable then stop else slide
                    if (this._verticalSlope(actDisp) <= this._sl) {
                        this._endJump();
                    }
                }
                else {
                    anim = this._fall;
                }
            }
        }
        return anim;
    };
    /**
     * does cleanup at the end of a jump
     */
    CharacterController.prototype._endJump = function () {
        this._act._jump = false;
        this._jumpTime = 0;
        this._wasWalking = false;
        this._wasRunning = false;
    };
    /**
     * checks if two vectors v1 and v2 are equal within a precision of p
     */
    CharacterController.prototype._areVectorsEqual = function (v1, v2, p) {
        return ((Math.abs(v1.x - v2.x) < p) && (Math.abs(v1.y - v2.y) < p) && (Math.abs(v1.z - v2.z) < p));
    };
    /*
     * returns the slope (in radians) of a vector in the vertical plane
     */
    CharacterController.prototype._verticalSlope = function (v) {
        return Math.atan(Math.abs(v.y / Math.sqrt(v.x * v.x + v.z * v.z)));
    };
    CharacterController.prototype._doMove = function (dt) {
        //initial down velocity
        var u = this._movFallTime * this._gravity;
        //calculate the distance by which av should fall down since last frame
        //assuming it is in freefall
        this._freeFallDist = u * dt + this._gravity * dt * dt / 2;
        this._movFallTime = this._movFallTime + dt;
        var moving = false;
        var anim = null;
        if (this._inFreeFall) {
            this._moveVector.y = -this._freeFallDist;
            moving = true;
        }
        else {
            this._wasWalking = false;
            this._wasRunning = false;
            var sign = void 0;
            var horizDist = 0;
            switch (true) {
                case (this._act._stepLeft):
                    sign = this._signRHS * this._isAvFacingCamera();
                    horizDist = this._leftSpeed * dt;
                    if (this._act._speedMod) {
                        horizDist = this._leftFastSpeed * dt;
                        anim = (-this._ffSign * sign > 0) ? this._strafeLeftFast : this._strafeRightFast;
                    }
                    else {
                        anim = (-this._ffSign * sign > 0) ? this._strafeLeft : this._strafeRight;
                    }
                    this._moveVector = this._avatar.calcMovePOV(sign * horizDist, -this._freeFallDist, 0);
                    moving = true;
                    break;
                case (this._act._stepRight):
                    sign = -this._signRHS * this._isAvFacingCamera();
                    horizDist = this._rightSpeed * dt;
                    if (this._act._speedMod) {
                        horizDist = this._rightFastSpeed * dt;
                        anim = (-this._ffSign * sign > 0) ? this._strafeLeftFast : this._strafeRightFast;
                    }
                    else {
                        anim = (-this._ffSign * sign > 0) ? this._strafeLeft : this._strafeRight;
                    }
                    this._moveVector = this._avatar.calcMovePOV(sign * horizDist, -this._freeFallDist, 0);
                    moving = true;
                    break;
                case (this._act._walk || (this._noRot && this.mode == 0)):
                    if (this._act._speedMod) {
                        this._wasRunning = true;
                        horizDist = this._walkFastSpeed * dt;
                        anim = this._run;
                    }
                    else {
                        this._wasWalking = true;
                        horizDist = this._walkSpeed * dt;
                        anim = this._walk;
                    }
                    this._moveVector = this._avatar.calcMovePOV(0, -this._freeFallDist, this._ffSign * horizDist);
                    moving = true;
                    break;
                case (this._act._walkback):
                    horizDist = this._backSpeed * dt;
                    if (this._act._speedMod) {
                        horizDist = this._backFastSpeed * dt;
                        anim = this._walkBackFast;
                    }
                    else {
                        anim = this._walkBack;
                    }
                    this._moveVector = this._avatar.calcMovePOV(0, -this._freeFallDist, -this._ffSign * horizDist);
                    moving = true;
                    break;
            }
        }
        if (!(this._noRot && this.mode == 0) && (!this._act._stepLeft && !this._act._stepRight) && (this._act._turnLeft || this._act._turnRight)) {
            var turnAngle = this._turnSpeed * dt;
            if (this._act._speedMod) {
                turnAngle = 2 * turnAngle;
            }
            if (this.mode == 1) {
                // while turining, the avatar could start facing away from camera and end up facing camera.
                // we should not switch turning direction during this transition
                if (!this._isTurning) {
                    // if (this._act.name != this._act.prevName) {
                    // this._act.prevName = this._act.name;
                    this._sign = -this._ffSign * this._isAvFacingCamera();
                    if (this._isRHS)
                        this._sign = -this._sign;
                    this._isTurning = true;
                }
                var a = this._sign;
                if (this._act._turnLeft) {
                    if (this._act._walk) { }
                    else if (this._act._walkback)
                        a = -this._sign;
                    else {
                        anim = (this._sign > 0) ? this._turnRight : this._turnLeft;
                    }
                }
                else {
                    if (this._act._walk)
                        a = -this._sign;
                    else if (this._act._walkback) { }
                    else {
                        a = -this._sign;
                        anim = (this._sign > 0) ? this._turnLeft : this._turnRight;
                    }
                }
                this._avatar.rotation.y = this._avatar.rotation.y + turnAngle * a;
            }
            else {
                var a = 1;
                if (this._act._turnLeft) {
                    if (this._act._walkback)
                        a = -1;
                    if (!moving)
                        anim = this._turnLeft;
                }
                else {
                    if (this._act._walk)
                        a = -1;
                    if (!moving) {
                        a = -1;
                        anim = this._turnRight;
                    }
                }
                this._camera.alpha = this._camera.alpha + turnAngle * a;
            }
        }
        if (this.mode != 1) {
            if (this._noRot) {
                switch (true) {
                    case (this._act._walk && this._act._turnRight):
                        this._avatar.rotation.y = this._av2cam - this._camera.alpha + Math.PI / 4;
                        break;
                    case (this._act._walk && this._act._turnLeft):
                        this._avatar.rotation.y = this._av2cam - this._camera.alpha - Math.PI / 4;
                        break;
                    case (this._act._walkback && this._act._turnRight):
                        this._avatar.rotation.y = this._av2cam - this._camera.alpha + 3 * Math.PI / 4;
                        break;
                    case (this._act._walkback && this._act._turnLeft):
                        this._avatar.rotation.y = this._av2cam - this._camera.alpha - 3 * Math.PI / 4;
                        break;
                    case (this._act._walk):
                        this._avatar.rotation.y = this._av2cam - this._camera.alpha;
                        break;
                    case (this._act._walkback):
                        this._avatar.rotation.y = this._av2cam - this._camera.alpha + Math.PI;
                        break;
                    case (this._act._turnRight):
                        this._avatar.rotation.y = this._av2cam - this._camera.alpha + Math.PI / 2;
                        break;
                    case (this._act._turnLeft):
                        this._avatar.rotation.y = this._av2cam - this._camera.alpha - Math.PI / 2;
                        break;
                }
            }
            else {
                this._avatar.rotation.y = this._av2cam - this._camera.alpha;
            }
        }
        else {
        }
        if (moving) {
            if (this._moveVector.length() > 0.001) {
                this._avatar.moveWithCollisions(this._moveVector);
                //walking up a slope
                if (this._avatar.position.y > this._avStartPos.y) {
                    var actDisp = this._avatar.position.subtract(this._avStartPos);
                    var _sl = this._verticalSlope(actDisp);
                    if (_sl >= this._sl2) {
                        //this._climbingSteps=true;
                        //is av trying to go up steps
                        if (this._stepOffset > 0) {
                            if (this._vMoveTot == 0) {
                                //if just started climbing note down the position
                                this._vMovStartPos.copyFrom(this._avStartPos);
                            }
                            this._vMoveTot = this._vMoveTot + (this._avatar.position.y - this._avStartPos.y);
                            if (this._vMoveTot > this._stepOffset) {
                                //move av back to its position at begining of steps
                                this._vMoveTot = 0;
                                this._avatar.position.copyFrom(this._vMovStartPos);
                                this._endFreeFall();
                            }
                        }
                        else {
                            //move av back to old position
                            this._avatar.position.copyFrom(this._avStartPos);
                            this._endFreeFall();
                        }
                    }
                    else {
                        this._vMoveTot = 0;
                        if (_sl > this._sl) {
                            //av is on a steep slope , continue increasing the moveFallTIme to deaccelerate it
                            this._fallFrameCount = 0;
                            this._inFreeFall = false;
                        }
                        else {
                            //continue walking
                            this._endFreeFall();
                        }
                    }
                }
                else if ((this._avatar.position.y) < this._avStartPos.y) {
                    var actDisp = this._avatar.position.subtract(this._avStartPos);
                    if (!(this._areVectorsEqual(actDisp, this._moveVector, 0.001))) {
                        //AV is on slope
                        //Should AV continue to slide or walk?
                        //if slope is less steeper than acceptable then walk else slide
                        if (this._verticalSlope(actDisp) <= this._sl) {
                            this._endFreeFall();
                        }
                        else {
                            //av is on a steep slope , continue increasing the moveFallTIme to deaccelerate it
                            this._fallFrameCount = 0;
                            this._inFreeFall = false;
                        }
                    }
                    else {
                        this._inFreeFall = true;
                        this._fallFrameCount++;
                        //AV could be running down a slope which mean freefall,run,frefall run ...
                        //to remove anim flicker, check if AV has been falling down continously for last few consecutive frames
                        //before changing to free fall animation
                        if (this._fallFrameCount > this._fallFrameCountMin) {
                            anim = this._fall;
                        }
                    }
                }
                else {
                    this._endFreeFall();
                }
            }
        }
        return anim;
    };
    CharacterController.prototype._endFreeFall = function () {
        this._movFallTime = 0;
        this._fallFrameCount = 0;
        this._inFreeFall = false;
    };
    CharacterController.prototype._doIdle = function (dt) {
        if (this._grounded) {
            return this._idle;
        }
        this._wasWalking = false;
        this._wasRunning = false;
        this._movFallTime = 0;
        var anim = this._idle;
        this._fallFrameCount = 0;
        if (dt === 0) {
            this._freeFallDist = 5;
        }
        else {
            var u = this._idleFallTime * this._gravity;
            this._freeFallDist = u * dt + this._gravity * dt * dt / 2;
            this._idleFallTime = this._idleFallTime + dt;
        }
        //if displacement is less than 0.01(? need to verify further) then 
        //moveWithDisplacement down against a surface seems to push the AV up by a small amount!!
        if (this._freeFallDist < 0.01)
            return anim;
        var disp = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, -this._freeFallDist, 0);
        if (this.mode != 1 && !this._noRot)
            this._avatar.rotation.y = this._av2cam - this._camera.alpha;
        this._avatar.moveWithCollisions(disp);
        if ((this._avatar.position.y > this._avStartPos.y) || (this._avatar.position.y === this._avStartPos.y)) {
            //                this.grounded = true;
            //                this.idleFallTime = 0;
            this._groundIt();
        }
        else if (this._avatar.position.y < this._avStartPos.y) {
            //AV is going down. 
            //AV is either in free fall or is sliding along a downward slope
            //
            //if the actual displacemnt is same as the desired displacement then AV is in freefall
            //else it is on a slope
            var actDisp = this._avatar.position.subtract(this._avStartPos);
            if (!(this._areVectorsEqual(actDisp, disp, 0.001))) {
                //AV is on slope
                //Should AV continue to slide or stop?
                //if slope is less steeper than accebtable then stop else slide
                if (this._verticalSlope(actDisp) <= this._sl) {
                    //                        this.grounded = true;
                    //                        this.idleFallTime = 0;
                    this._groundIt();
                    this._avatar.position.copyFrom(this._avStartPos);
                }
                else {
                    this._unGroundIt();
                    anim = this._slideBack;
                }
            }
        }
        return anim;
    };
    /**
     * donot ground immediately
     * wait few more frames
     */
    CharacterController.prototype._groundIt = function () {
        this._groundFrameCount++;
        if (this._groundFrameCount > this._groundFrameMax) {
            this._grounded = true;
            this._idleFallTime = 0;
        }
    };
    CharacterController.prototype._unGroundIt = function () {
        this._grounded = false;
        this._groundFrameCount = 0;
    };
    CharacterController.prototype._updateTargetValue = function () {
        //donot move camera if av is trying to clinb steps
        if (this._vMoveTot == 0)
            this._avatar.position.addToRef(this._cameraTarget, this._camera.target);
        if (this._camera.radius > this._camera.lowerRadiusLimit) {
            if (this._elasticCamera)
                this._snapCamera();
        }
        if (this._camera.radius <= this._camera.lowerRadiusLimit) {
            if (!this._noFirstPerson && !this._inFP) {
                this._avatar.visibility = 0;
                this._camera.checkCollisions = false;
                this._saveMode = this.mode;
                this.mode = 0;
                this._inFP = true;
            }
        }
        else {
            this._inFP = false;
            this.mode = this._saveMode;
            this._avatar.visibility = 1;
            this._camera.checkCollisions = this._savedCameraCollision;
        }
    };
    CharacterController.prototype._snapCamera = function () {
        var _this = this;
        //            if(this.skip<120) {
        //                this.skip++;
        //                return;
        //            }
        //            this.skip=0;
        //get vector from av (camera.target) to camera
        this._camera.position.subtractToRef(this._camera.target, this._rayDir);
        //start ray from av to camera
        this._ray.origin = this._camera.target;
        this._ray.length = this._rayDir.length();
        this._ray.direction = this._rayDir.normalize();
        var pi = this._scene.pickWithRay(this._ray, function (mesh) {
            //if(mesh==this.avatar||!mesh.isPickable||!mesh.checkCollisions) return false;
            if (mesh == _this._avatar || !mesh.checkCollisions)
                return false;
            else
                return true;
        }, true);
        if (pi.hit) {
            //postion the camera in front of the mesh that is obstructing camera
            if (this._camera.checkCollisions) {
                var newPos = this._camera.target.subtract(pi.pickedPoint).normalize().scale(this._cameraSkin);
                pi.pickedPoint.addToRef(newPos, this._camera.position);
            }
            else {
                var nr = pi.pickedPoint.subtract(this._camera.target).length();
                this._camera.radius = nr - this._cameraSkin;
            }
        }
    };
    CharacterController.prototype.anyMovement = function () {
        return (this._act._walk || this._act._walkback || this._act._turnLeft || this._act._turnRight || this._act._stepLeft || this._act._stepRight);
    };
    CharacterController.prototype._onKeyDown = function (e) {
        if (!e.key)
            return;
        if (e.repeat)
            return;
        switch (e.key.toLowerCase()) {
            case this._jumpKey:
                //this._act._jump = true;
                break;
            case "capslock":
                this._act._speedMod = !this._act._speedMod;
                break;
            case "shift":
                this._act._speedMod = true;
                break;
            case "up":
            case "arrowup":
            case this._walkKey:
                this._act._walk = true;
                break;
            case "left":
            case "arrowleft":
            case this._turnLeftKey:
                this._act._turnLeft = true;
                break;
            case "right":
            case "arrowright":
            case this._turnRightKey:
                this._act._turnRight = true;
                break;
            case "down":
            case "arrowdown":
            case this._walkBackKey:
                this._act._walkback = true;
                break;
            case this._strafeLeftKey:
                this._act._stepLeft = true;
                break;
            case this._strafeRightKey:
                this._act._stepRight = true;
                break;
        }
        this._move = this.anyMovement();
    };
    CharacterController.prototype._onKeyUp = function (e) {
        if (!e.key)
            return;
        switch (e.key.toLowerCase()) {
            case "shift":
                this._act._speedMod = false;
                break;
            case "up":
            case "arrowup":
            case this._walkKey:
                this._act._walk = false;
                break;
            case "left":
            case "arrowleft":
            case this._turnLeftKey:
                this._act._turnLeft = false;
                this._isTurning = false;
                break;
            case "right":
            case "arrowright":
            case this._turnRightKey:
                this._act._turnRight = false;
                this._isTurning = false;
                break;
            case "down":
            case "arrowdown":
            case this._walkBackKey:
                this._act._walkback = false;
                break;
            case this._strafeLeftKey:
                this._act._stepLeft = false;
                break;
            case this._strafeRightKey:
                this._act._stepRight = false;
                break;
        }
        this._move = this.anyMovement();
    };
    // public disableKeyBoard() {
    //     let canvas: HTMLCanvasElement = this._scene.getEngine().getRenderingCanvas();
    //     canvas.removeEventListener("keyup", this._handleKeyUp, false);
    //     canvas.removeEventListener("keydown", this._handleKeyDown, false);
    // }
    CharacterController.prototype.enableKeyBoard = function (b) {
        var canvas = this._scene.getEngine().getRenderingCanvas();
        if (b) {
            canvas.addEventListener("keyup", this._handleKeyUp, false);
            canvas.addEventListener("keydown", this._handleKeyDown, false);
        }
        else {
            canvas.removeEventListener("keyup", this._handleKeyUp, false);
            canvas.removeEventListener("keydown", this._handleKeyDown, false);
        }
    };
    // control movement by commands rather than keyboard.
    CharacterController.prototype.walk = function (b) {
        this._act._walk = b;
    };
    CharacterController.prototype.walkBack = function (b) {
        this._act._walkback = b;
    };
    CharacterController.prototype.walkBackFast = function (b) {
        this._act._walkback = b;
        this._act._speedMod = b;
    };
    CharacterController.prototype.run = function (b) {
        this._act._walk = b;
        this._act._speedMod = b;
    };
    CharacterController.prototype.turnLeft = function (b) {
        this._act._turnLeft = b;
        if (!b)
            this._isTurning = b;
    };
    CharacterController.prototype.turnLeftFast = function (b) {
        this._act._turnLeft = b;
        if (!b)
            this._isTurning = b;
        this._act._speedMod = b;
    };
    CharacterController.prototype.turnRight = function (b) {
        this._act._turnRight = b;
        if (!b)
            this._isTurning = b;
    };
    CharacterController.prototype.turnRightFast = function (b) {
        this._act._turnRight = b;
        if (!b)
            this._isTurning = b;
        this._act._speedMod = b;
    };
    CharacterController.prototype.strafeLeft = function (b) {
        this._act._stepLeft = b;
    };
    CharacterController.prototype.strafeLeftFast = function (b) {
        this._act._stepLeft = b;
        this._act._speedMod = b;
    };
    CharacterController.prototype.strafeRight = function (b) {
        this._act._stepRight = b;
    };
    CharacterController.prototype.strafeRightFast = function (b) {
        this._act._stepRight = b;
        this._act._speedMod = b;
    };
    CharacterController.prototype.jump = function () {
        this._act._jump = true;
    };
    CharacterController.prototype.idle = function () {
        this._act.reset();
    };
    return CharacterController;
}());

var _AnimData = /** @class */ (function () {
    function _AnimData(name) {
        this._loop = true;
        this._rate = 1;
        this._exist = false;
        this._name = name;
    }
    return _AnimData;
}());
var _Action = /** @class */ (function () {
    function _Action() {
        this._walk = false;
        this._walkback = false;
        // speed modifier - changes speed of movement
        this._speedMod = false;
        this._turnRight = false;
        this._turnLeft = false;
        this._stepRight = false;
        this._stepLeft = false;
        this._jump = false;
        this.reset();
    }
    _Action.prototype.reset = function () {
        this._walk = false;
        this._walkback = false;
        this._turnRight = false;
        this._turnLeft = false;
        this._stepRight = false;
        this._stepLeft = false;
        this._jump = false;
        this._speedMod = false;
    };
    return _Action;
}());


/***/ }),

/***/ "./src/IdleCanvas.ts":
/*!***************************!*\
  !*** ./src/IdleCanvas.ts ***!
  \***************************/
/*! exports provided: start, stop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stop", function() { return stop; });
// @ts-nocheck
var w = 600, h = 400, opts = {
    len: 20,
    count: 50,
    baseTime: 10,
    addedTime: 10,
    dieChance: .05,
    spawnChance: 1,
    sparkChance: .1,
    sparkDist: 10,
    sparkSize: 2,
    color: 'hsl(hue,100%,light%)',
    baseLight: 50,
    addedLight: 10,
    shadowToTimePropMult: 6,
    baseLightInputMultiplier: .01,
    addedLightInputMultiplier: .02,
    cx: w / 2,
    cy: h / 2,
    repaintAlpha: .04,
    hueChange: .1
}, tick = 0, lines = [], dieX = w / 2 / opts.len, dieY = h / 2 / opts.len, baseRad = Math.PI * 2 / 6;
var ctx = null;
var reqid = null;
var cvas = null;
function loop() {
    reqid = window.requestAnimationFrame(loop);
    ++tick;
    ctx.globalCompositeOperation = 'source-over';
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(0,0,0,alp)'.replace('alp', opts.repaintAlpha);
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    if (lines.length < opts.count && Math.random() < opts.spawnChance)
        lines.push(new Line);
    lines.map(function (line) { line.step(); cvas.update(); });
}
function Line() {
    this.reset();
}
Line.prototype.reset = function () {
    this.x = 0;
    this.y = 0;
    this.addedX = 0;
    this.addedY = 0;
    this.rad = 0;
    this.lightInputMultiplier = opts.baseLightInputMultiplier + opts.addedLightInputMultiplier * Math.random();
    this.color = opts.color.replace('hue', tick * opts.hueChange);
    this.cumulativeTime = 0;
    this.beginPhase();
};
Line.prototype.beginPhase = function () {
    this.x += this.addedX;
    this.y += this.addedY;
    this.time = 0;
    this.targetTime = (opts.baseTime + opts.addedTime * Math.random()) | 0;
    this.rad += baseRad * (Math.random() < .5 ? 1 : -1);
    this.addedX = Math.cos(this.rad);
    this.addedY = Math.sin(this.rad);
    if (Math.random() < opts.dieChance || this.x > dieX || this.x < -dieX || this.y > dieY || this.y < -dieY)
        this.reset();
};
Line.prototype.step = function () {
    ++this.time;
    ++this.cumulativeTime;
    if (this.time >= this.targetTime)
        this.beginPhase();
    var prop = this.time / this.targetTime, wave = Math.sin(prop * Math.PI / 2), x = this.addedX * wave, y = this.addedY * wave;
    ctx.shadowBlur = prop * opts.shadowToTimePropMult;
    ctx.fillStyle = ctx.shadowColor = this.color.replace('light', opts.baseLight + opts.addedLight * Math.sin(this.cumulativeTime * this.lightInputMultiplier));
    ctx.fillRect(opts.cx + (this.x + x) * opts.len, opts.cy + (this.y + y) * opts.len, 2, 2);
    if (Math.random() < opts.sparkChance)
        ctx.fillRect(opts.cx + (this.x + x) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.cy + (this.y + y) * opts.len + Math.random() * opts.sparkDist * (Math.random() < .5 ? 1 : -1) - opts.sparkSize / 2, opts.sparkSize, opts.sparkSize);
};
var start = function (cctx, ccvas) {
    ctx = cctx;
    cvas = ccvas;
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, w, h);
    cvas.update();
    loop();
};
var stop = function () {
    if (reqid) {
        window.cancelAnimationFrame(reqid);
    }
};



/***/ }),

/***/ "./src/RemoteCharacterController.ts":
/*!******************************************!*\
  !*** ./src/RemoteCharacterController.ts ***!
  \******************************************/
/*! exports provided: RemoteCharacterController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteCharacterController", function() { return RemoteCharacterController; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _agora_RemoteChannel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agora/RemoteChannel */ "./src/agora/RemoteChannel.ts");
// @ts-nocheck


var RemoteCharacterController = /** @class */ (function () {
    function RemoteCharacterController(avatar, scene, id, roomid) {
        var _this = this;
        this._started = false;
        this.moving = false;
        this._avStartPos = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero();
        this._vMovStartPos = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"].Zero();
        this._stepOffset = 0.25;
        this._vMoveTot = 0;
        this._minSlopeLimit = 30;
        this._maxSlopeLimit = 45;
        this._sl = Math.PI * this._minSlopeLimit / 180;
        this._sl2 = Math.PI * this._maxSlopeLimit / 180;
        this._fallFrameCountMin = 50;
        this._fallFrameCount = 0;
        this._inFreeFall = false;
        this._remoteChannel = null;
        this._id = null;
        this._roomid = null;
        this._avatar = avatar;
        this._id = id;
        this._roomid = roomid;
        this._scene = scene;
        this._renderer = function () { _this._moveAVandCamera(); };
        this._remoteChannel = new _agora_RemoteChannel__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.drawEllipsoid(this._avatar);
    }
    RemoteCharacterController.prototype.drawEllipsoid = function (mesh) {
        var _this = this;
        mesh.computeWorldMatrix(true);
        var ellipsoidMat = mesh.getScene().getMaterialByName("__ellipsoidMat__h");
        if (!ellipsoidMat) {
            ellipsoidMat = new BABYLON.StandardMaterial("__ellipsoidMat__h", mesh.getScene());
            ellipsoidMat.alpha = 0;
        }
        var ellipsoid = BABYLON.Mesh.CreateSphere("__ellipsoid__r", 9, 1, mesh.getScene());
        ellipsoid.scaling = mesh.ellipsoid.clone();
        ellipsoid.scaling.y *= 1;
        ellipsoid.scaling.x *= 8;
        ellipsoid.scaling.z *= 8;
        ellipsoid.material = ellipsoidMat;
        ellipsoid.parent = mesh;
        ellipsoid.computeWorldMatrix(true);
        ellipsoid.actionManager = new BABYLON.ActionManager(this._scene);
        ellipsoid.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionEnterTrigger,
            parameter: this._scene.getMeshByName("__ellipsoid__"),
        }, function () {
            _this._remoteChannel.join(_this._roomid + _this._id);
            console.log("Collison found...");
        }));
        ellipsoid.actionManager.registerAction(new BABYLON.ExecuteCodeAction({
            trigger: BABYLON.ActionManager.OnIntersectionExitTrigger,
            parameter: this._scene.getMeshByName("__ellipsoid__"),
        }, function () {
            _this._remoteChannel.leave(_this._roomid + _this._id);
            console.log("Collison Exited...");
        }));
    };
    RemoteCharacterController.prototype.setColor = function (rgb) {
        var color = new BABYLON.Color3(rgb[0], rgb[1], rgb[2]);
        var a = this._avatar.getChildMeshes()[0].material.clone("body_" + this._id);
        var b = this._avatar.getChildMeshes()[1].material.clone("skin_" + this._id);
        a.albedoColor = color;
        b.albedoColor = color;
        this._avatar.getChildMeshes()[0].material = a;
        this._avatar.getChildMeshes()[1].material = b;
    };
    RemoteCharacterController.prototype._moveAVandCamera = function () {
        this._avStartPos.copyFrom(this._avatar.position);
        if (this.moving) {
            this.moving = false;
            if (this._moveVector.length() > 0.001) {
                this._avatar.moveWithCollisions(this._moveVector);
                //walking up a slope
                if (this._avatar.position.y > this._avStartPos.y) {
                    var actDisp = this._avatar.position.subtract(this._avStartPos);
                    var _sl = this._verticalSlope(actDisp);
                    if (_sl >= this._sl2) {
                        //this._climbingSteps=true;
                        //is av trying to go up steps
                        if (this._stepOffset > 0) {
                            if (this._vMoveTot == 0) {
                                //if just started climbing note down the position
                                this._vMovStartPos.copyFrom(this._avStartPos);
                            }
                            this._vMoveTot = this._vMoveTot + (this._avatar.position.y - this._avStartPos.y);
                            if (this._vMoveTot > this._stepOffset) {
                                //move av back to its position at begining of steps
                                this._vMoveTot = 0;
                                this._avatar.position.copyFrom(this._vMovStartPos);
                                this._endFreeFall();
                            }
                        }
                        else {
                            //move av back to old position
                            this._avatar.position.copyFrom(this._avStartPos);
                            this._endFreeFall();
                        }
                    }
                    else {
                        this._vMoveTot = 0;
                        if (_sl > this._sl) {
                            //av is on a steep slope , continue increasing the moveFallTIme to deaccelerate it
                            this._fallFrameCount = 0;
                            this._inFreeFall = false;
                        }
                        else {
                            //continue walking
                            this._endFreeFall();
                        }
                    }
                }
                else if ((this._avatar.position.y) < this._avStartPos.y) {
                    var actDisp = this._avatar.position.subtract(this._avStartPos);
                    if (!(this._areVectorsEqual(actDisp, this._moveVector, 0.001))) {
                        //AV is on slope
                        //Should AV continue to slide or walk?
                        //if slope is less steeper than acceptable then walk else slide
                        if (this._verticalSlope(actDisp) <= this._sl) {
                            this._endFreeFall();
                        }
                        else {
                            //av is on a steep slope , continue increasing the moveFallTIme to deaccelerate it
                            this._fallFrameCount = 0;
                            this._inFreeFall = false;
                        }
                    }
                    else {
                        this._inFreeFall = true;
                        this._fallFrameCount++;
                    }
                }
                else {
                    this._endFreeFall();
                }
            }
        }
    };
    RemoteCharacterController.prototype.start = function () {
        if (this._started)
            return;
        this._started = true;
        this._scene.registerBeforeRender(this._renderer);
    };
    RemoteCharacterController.prototype.setMoveData = function (moveVector) {
        this._moveVector = moveVector;
        this.moving = true;
    };
    RemoteCharacterController.prototype._areVectorsEqual = function (v1, v2, p) {
        return ((Math.abs(v1.x - v2.x) < p) && (Math.abs(v1.y - v2.y) < p) && (Math.abs(v1.z - v2.z) < p));
    };
    RemoteCharacterController.prototype._verticalSlope = function (v) {
        return Math.atan(Math.abs(v.y / Math.sqrt(v.x * v.x + v.z * v.z)));
    };
    RemoteCharacterController.prototype._endFreeFall = function () {
        this._fallFrameCount = 0;
        this._inFreeFall = false;
    };
    return RemoteCharacterController;
}());



/***/ }),

/***/ "./src/agora/LocalChannel.ts":
/*!***********************************!*\
  !*** ./src/agora/LocalChannel.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// @ts-nocheck
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var LocalChannel = /** @class */ (function () {
    function LocalChannel() {
        this.client = null;
        this.agoraToken = "c868a38007fb4e2e87c7d65ea3177117";
        this.localAudioTrack = null;
        this.is_mute = true;
        this.client = AgoraRTC.createClient({ mode: "live", codec: "vp8" });
    }
    LocalChannel.prototype.create_channel = function (channel_name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.client.join(this.agoraToken, channel_name, null, null)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.client.setClientRole('host')];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LocalChannel.prototype.mute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        if (!!this.is_mute) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.client.unpublish()];
                    case 1:
                        _a.sent();
                        this.is_mute = true;
                        _a.label = 2;
                    case 2: return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log("LocalChannel-mute:" + e_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LocalChannel.prototype.unmute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        if (!this.is_mute) return [3 /*break*/, 3];
                        if (!!this.localAudioTrack) return [3 /*break*/, 2];
                        _a = this;
                        return [4 /*yield*/, AgoraRTC.createMicrophoneAudioTrack()];
                    case 1:
                        _a.localAudioTrack = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (this.localAudioTrack) {
                            this.client.publish([this.localAudioTrack]);
                            this.is_mute = false;
                        }
                        _b.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        e_2 = _b.sent();
                        console.log("LocalChannel-unmute:" + e_2);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return LocalChannel;
}());
/* harmony default export */ __webpack_exports__["default"] = (LocalChannel);


/***/ }),

/***/ "./src/agora/RemoteChannel.ts":
/*!************************************!*\
  !*** ./src/agora/RemoteChannel.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// @ts-nocheck
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var RemoteChannel = /** @class */ (function () {
    function RemoteChannel() {
        this.agoradID = "c868a38007fb4e2e87c7d65ea3177117";
        this.channels = {};
    }
    RemoteChannel.prototype.join = function (channel_name) {
        return __awaiter(this, void 0, void 0, function () {
            var client_1;
            var _this = this;
            return __generator(this, function (_a) {
                if (!this.channels.hasOwnProperty(channel_name)) {
                    client_1 = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
                    this.channels[channel_name] = client_1;
                    client_1.on("user-published", function (user, mediaType) { return __awaiter(_this, void 0, void 0, function () {
                        var remoteAudioTrack;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, client_1.subscribe(user, mediaType)];
                                case 1:
                                    _a.sent();
                                    console.log("subscribe success");
                                    if (mediaType === "audio") {
                                        remoteAudioTrack = user.audioTrack;
                                        remoteAudioTrack.play();
                                    }
                                    client_1.on("user-unpublished", function (user) { return __awaiter(_this, void 0, void 0, function () {
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, client_1.unsubscribe(user)];
                                                case 1:
                                                    _a.sent();
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); });
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                    client_1.join(this.agoradID, channel_name, null, null);
                }
                return [2 /*return*/];
            });
        });
    };
    RemoteChannel.prototype.leave = function (channel_name) {
        return __awaiter(this, void 0, void 0, function () {
            var client;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.channels.hasOwnProperty(channel_name)) return [3 /*break*/, 2];
                        client = this.channels[channel_name];
                        delete this.channels[channel_name];
                        return [4 /*yield*/, client.leave()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    RemoteChannel.prototype.setLevel = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    return RemoteChannel;
}());
/* harmony default export */ __webpack_exports__["default"] = (RemoteChannel);


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _my_scene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-scene */ "./src/my-scene.ts");
// @ts-nocheck
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

window.toast = function (message) {
    Toastify({
        text: message,
        backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
        className: "info",
        duration: 1500
    }).showToast();
};
document.addEventListener('DOMContentLoaded', function () {
    var ele = document.getElementById('avnfts');
    ele.style.cursor = 'grab';
    var pos = { top: 0, left: 0, x: 0, y: 0 };
    var mouseDownHandler = function (e) {
        ele.style.cursor = 'grabbing';
        ele.style.userSelect = 'none';
        pos = {
            left: ele.scrollLeft,
            top: ele.scrollTop,
            // Get the current mouse position
            x: e.clientX,
            y: e.clientY,
        };
        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    };
    var mouseMoveHandler = function (e) {
        // How far the mouse has been moved
        var dx = e.clientX - pos.x;
        var dy = e.clientY - pos.y;
        // Scroll the element
        ele.scrollTop = pos.top - dy;
        ele.scrollLeft = pos.left - dx;
    };
    var mouseUpHandler = function () {
        ele.style.cursor = 'grab';
        ele.style.removeProperty('user-select');
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };
    // Attach the handler
    ele.addEventListener('mousedown', mouseDownHandler);
});
window.addEventListener('DOMContentLoaded', function () { return __awaiter(void 0, void 0, void 0, function () {
    function check_metamask() {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        if (!window.ethereum) return [3 /*break*/, 3];
                        return [4 /*yield*/, window.ethereum.request({ method: 'eth_requestAccounts' })];
                    case 1:
                        _b.sent();
                        _a = window;
                        return [4 /*yield*/, new Web3(window.ethereum)];
                    case 2:
                        _a.web3 = _b.sent();
                        return [2 /*return*/, true];
                    case 3: return [2 /*return*/, false];
                    case 4:
                        e_1 = _b.sent();
                        console.log(e_1);
                        throw ("");
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
    var v;
    return __generator(this, function (_a) {
        $("#wfh").click(function () { return __awaiter(void 0, void 0, void 0, function () {
            var isMetmask, cid, game;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        $("#wfh").hide();
                        $("#list1").hide();
                        $("#loader").show();
                        $("#loadertx").show();
                        $("#loadertx").text("Checking Metamsk...");
                        return [4 /*yield*/, check_metamask()];
                    case 1:
                        isMetmask = _a.sent();
                        if (!isMetmask) {
                            $("#loader").hide();
                            $("#loadertx").hide();
                            $("#wfh").show();
                            toast("Please Install Metamask!");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, web3.eth.net.getId()];
                    case 2:
                        cid = _a.sent();
                        if (cid != 80001) {
                            $("#loader").hide();
                            $("#loadertx").hide();
                            $("#wfh").show();
                            toast("Please Switch To Mumbai Tesnet!");
                            return [2 /*return*/];
                        }
                        game = new _my_scene__WEBPACK_IMPORTED_MODULE_0__["default"]('renderCanvas');
                        game.wsClient(function (isJoin, message) {
                            if (!isJoin) {
                                $("#loadertx").text(message);
                                console.log(message);
                                return;
                            }
                            $("#home").hide();
                            stop_anim();
                            $("#game").show();
                            game.startRenderLoop();
                            game.doRender();
                        });
                        return [2 /*return*/];
                }
            });
        }); });
        $('#menu_page').css('height', window.innerHeight / 1.5);
        $('#menu_page').css('width', window.innerHeight / 3);
        v = false;
        $("#menu").click(function () {
            if (v) {
                $("#menu_page").fadeOut();
                v = false;
            }
            else {
                $("#menu_page").fadeIn();
                v = true;
            }
        });
        return [2 /*return*/];
    });
}); });


/***/ }),

/***/ "./src/my-scene.ts":
/*!*************************!*\
  !*** ./src/my-scene.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs-loaders */ "./node_modules/babylonjs-loaders/babylonjs.loaders.min.js");
/* harmony import */ var babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_loaders__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CharacterController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CharacterController */ "./src/CharacterController.ts");
/* harmony import */ var _RemoteCharacterController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RemoteCharacterController */ "./src/RemoteCharacterController.ts");
/* harmony import */ var _agora_LocalChannel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./agora/LocalChannel */ "./src/agora/LocalChannel.ts");
/* harmony import */ var worker_timers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! worker-timers */ "./node_modules/worker-timers/build/es2019/module.js");
/* harmony import */ var graphql_subscriptions_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-subscriptions-client */ "./node_modules/graphql-subscriptions-client/dist/esm/index.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-request */ "./node_modules/graphql-request/dist/index.js");
/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _IdleCanvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IdleCanvas */ "./src/IdleCanvas.ts");
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// @ts-nocheck









var abi = __webpack_require__(/*! ../abi/1.json */ "./abi/1.json");
var contract_address = "0xE4c925499c44639CB11122986444AC595f34544D";
var Buffer = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer;
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js");
var MyScene = /** @class */ (function () {
    function MyScene(canvasElement) {
        this._playerList = {};
        this._ws = null;
        this._join_status = false;
        this._roomId = "polygonverse";
        this._matches = {};
        this._rcolor = {};
        this._color = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"](0, 0, 0);
        this._matchquee = [];
        this._matchdata = {};
        this._winnerquee = [];
        this._winnerdata = {};
        this.mynfts = [];
        this.curr_nft = 0;
        this._queue = [];
        this._queue_state = true;
        this._currentBlock = 0;
        this.mainCanvas = null;
        this.brdcanvas = null;
        // Create canvas and engine.
        this._canvas = document.getElementById(canvasElement);
        this._engine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Engine"](this._canvas, true);
    }
    MyScene.prototype.preloadImages = function (array) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (myResolve, myReject) {
                        var j = 0;
                        for (var i = 0; i < array.length; i++) {
                            var img = new Image();
                            img.onload = function () {
                                console.log("loaded: " + j);
                                j++;
                                if (j == array.length) {
                                    myResolve();
                                }
                            };
                            img.src = array[i];
                        }
                    })];
            });
        });
    };
    MyScene.prototype.uIkit = function () {
        web3.eth.getAccounts().then(function (data) {
            $("#wallet_address").text(data[0]);
        });
        $("#avnfts").empty();
        this.curr_nft = 0;
        for (var k = 0; k < this.mynfts.length; k++) {
            var bg = "";
            if (k == this.curr_nft) {
                bg = "background-color: black;";
                $("#stkk").text(this.mynfts[this.curr_nft][1][0]);
                $("#stko").text(this.mynfts[this.curr_nft][1][1]);
            }
            var a = "<div id=\"avnft_" + k + "\" style=\"" + bg + "border-radius: 50px;\">";
            a += "<img draggable='false' src=\"" + ("https://" + this.mynfts[k][0] + ".ipfs.infura-ipfs.io/") + "\"  height=\"48\" width=\"48\">";
            a += '</img></div>';
            $("#avnfts").append(a);
        }
    };
    MyScene.prototype.setHandlerV = function () {
        var _this = this;
        $("#nright").click(function () {
            if (_this.mynfts.length <= 0) {
                return;
            }
            $("#avnft_" + _this.curr_nft).attr('style', '');
            _this.curr_nft = (_this.curr_nft + 1) % _this.mynfts.length;
            $("#stkk").text(_this.mynfts[_this.curr_nft][1][0]);
            $("#stko").text(_this.mynfts[_this.curr_nft][1][1]);
            $("#avnft_" + _this.curr_nft).attr('style', 'background-color: black;border-radius: 50px;');
        });
        $("#nleft").click(function () {
            if (_this.mynfts.length <= 0) {
                return;
            }
            $("#avnft_" + _this.curr_nft).attr('style', '');
            _this.curr_nft = _this.curr_nft - 1;
            if (_this.curr_nft < 0) {
                _this.curr_nft = _this.mynfts.length - 1;
            }
            $("#stkk").text(_this.mynfts[_this.curr_nft][1][0]);
            $("#stko").text(_this.mynfts[_this.curr_nft][1][1]);
            $("#avnft_" + _this.curr_nft).attr('style', 'background-color: black;border-radius: 50px;');
        });
        $("#ms").click(function () {
            $("#ws").attr("class", "mbuttons");
            $("#ms").attr("class", "smbuttons");
            $("#list").show();
            $("#list1").hide();
        });
        $("#ws").click(function () {
            $("#ws").attr("class", "smbuttons");
            $("#ms").attr("class", "mbuttons");
            $("#list").hide();
            $("#list1").show();
        });
        $("#matchit").click(function () { return __awaiter(_this, void 0, void 0, function () {
            var contract, a;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.curr_nft != null && this.mynfts.length > 0)) return [3 /*break*/, 4];
                        return [4 /*yield*/, new window.web3.eth.Contract(abi, "0xE4c925499c44639CB11122986444AC595f34544D")];
                    case 1:
                        contract = _a.sent();
                        return [4 /*yield*/, window.web3.eth.getAccounts()];
                    case 2:
                        a = _a.sent();
                        return [4 /*yield*/, contract.methods.Playerpart(this.mynfts[this.curr_nft][2]).send({
                                from: a[0]
                            })];
                    case 3:
                        _a.sent();
                        this.get_my_details();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        }); });
    };
    MyScene.prototype.wsClient = function (callback) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                console.log("Initialsing Websocket Connection...");
                callback(false, "Joining Room...");
                try {
                    this._ws = new WebSocket('wss://oecmeta.herokuapp.com/ws');
                    this._ws.binaryType = "arraybuffer";
                    this._ws.onclose = function () {
                        _this._ws = null;
                        for (var a in _this._playerList) {
                            var p = _this._playerList[a];
                            p._avatar.dispose();
                            delete _this._playerList[a];
                        }
                        console.log("Connection closed!");
                        console.log("Retrying....");
                        setTimeout(function () {
                            console.log("Retrying again after 1s delay...");
                            _this.wsClient(callback);
                        }, 1000);
                    };
                    this._ws.onerror = function (e) {
                        console.log("Webscoket Error: " + e);
                    };
                    this._ws.onmessage = function (event) { return __awaiter(_this, void 0, void 0, function () {
                        var data, lc_1, mat, mat1, buf, a, response, id, p, p, x, y, z, ang, p;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    data = event.data;
                                    if (!(typeof data == "string")) return [3 /*break*/, 6];
                                    data = JSON.parse(data);
                                    if (!(data.response == "room_joined")) return [3 /*break*/, 4];
                                    if (!!this._join_status) return [3 /*break*/, 3];
                                    this._scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Scene"](this._engine);
                                    callback(false, "Loading Character...");
                                    return [4 /*yield*/, this.loadPlayer()];
                                case 1:
                                    _a.sent();
                                    callback(false, "Creating Scene...");
                                    this.preloadImages(["/streetfight/images/arenas/0/arena.png", "/streetfight/images/arenas/1/arena.png", "/streetfight/images/fighters/kano/left/attractive-stand-up/0.png", "/streetfight/images/fighters/kano/left/attractive-stand-up/1.png", "/streetfight/images/fighters/kano/left/attractive-stand-up/2.png", "/streetfight/images/fighters/kano/left/attractive-stand-up/3.png", "/streetfight/images/fighters/kano/left/backward-jump/0.png", "/streetfight/images/fighters/kano/left/backward-jump/1.png", "/streetfight/images/fighters/kano/left/backward-jump/2.png", "/streetfight/images/fighters/kano/left/backward-jump/3.png", "/streetfight/images/fighters/kano/left/backward-jump/4.png", "/streetfight/images/fighters/kano/left/backward-jump/5.png", "/streetfight/images/fighters/kano/left/backward-jump/6.png", "/streetfight/images/fighters/kano/left/backward-jump/7.png", "/streetfight/images/fighters/kano/left/backward-jump-kick/0.png", "/streetfight/images/fighters/kano/left/backward-jump-kick/1.png", "/streetfight/images/fighters/kano/left/backward-jump-kick/2.png", "/streetfight/images/fighters/kano/left/backward-jump-punch/0.png", "/streetfight/images/fighters/kano/left/backward-jump-punch/1.png", "/streetfight/images/fighters/kano/left/backward-jump-punch/2.png", "/streetfight/images/fighters/kano/left/blocking/0.png", "/streetfight/images/fighters/kano/left/blocking/1.png", "/streetfight/images/fighters/kano/left/blocking/2.png", "/streetfight/images/fighters/kano/left/endure/0.png", "/streetfight/images/fighters/kano/left/endure/1.png", "/streetfight/images/fighters/kano/left/endure/2.png", "/streetfight/images/fighters/kano/left/fall/0.png", "/streetfight/images/fighters/kano/left/fall/1.png", "/streetfight/images/fighters/kano/left/fall/2.png", "/streetfight/images/fighters/kano/left/fall/3.png", "/streetfight/images/fighters/kano/left/fall/4.png", "/streetfight/images/fighters/kano/left/fall/5.png", "/streetfight/images/fighters/kano/left/fall/6.png", "/streetfight/images/fighters/kano/left/forward-jump/0.png", "/streetfight/images/fighters/kano/left/forward-jump/1.png", "/streetfight/images/fighters/kano/left/forward-jump/2.png", "/streetfight/images/fighters/kano/left/forward-jump/3.png", "/streetfight/images/fighters/kano/left/forward-jump/4.png", "/streetfight/images/fighters/kano/left/forward-jump/5.png", "/streetfight/images/fighters/kano/left/forward-jump/6.png", "/streetfight/images/fighters/kano/left/forward-jump/7.png", "/streetfight/images/fighters/kano/left/forward-jump-kick/0.png", "/streetfight/images/fighters/kano/left/forward-jump-kick/1.png", "/streetfight/images/fighters/kano/left/forward-jump-kick/2.png", "/streetfight/images/fighters/kano/left/forward-jump-punch/0.png", "/streetfight/images/fighters/kano/left/forward-jump-punch/1.png", "/streetfight/images/fighters/kano/left/forward-jump-punch/2.png", "/streetfight/images/fighters/kano/left/high-kick/0.png", "/streetfight/images/fighters/kano/left/high-kick/1.png", "/streetfight/images/fighters/kano/left/high-kick/2.png", "/streetfight/images/fighters/kano/left/high-kick/3.png", "/streetfight/images/fighters/kano/left/high-kick/4.png", "/streetfight/images/fighters/kano/left/high-kick/5.png", "/streetfight/images/fighters/kano/left/high-kick/6.png", "/streetfight/images/fighters/kano/left/high-punch/0.png", "/streetfight/images/fighters/kano/left/high-punch/1.png", "/streetfight/images/fighters/kano/left/high-punch/2.png", "/streetfight/images/fighters/kano/left/high-punch/3.png", "/streetfight/images/fighters/kano/left/high-punch/4.png", "/streetfight/images/fighters/kano/left/high-punch/5.png", "/streetfight/images/fighters/kano/left/high-punch/6.png", "/streetfight/images/fighters/kano/left/high-punch/7.png", "/streetfight/images/fighters/kano/left/jumping/0.png", "/streetfight/images/fighters/kano/left/jumping/1.png", "/streetfight/images/fighters/kano/left/jumping/2.png", "/streetfight/images/fighters/kano/left/jumping/3.png", "/streetfight/images/fighters/kano/left/jumping/4.png", "/streetfight/images/fighters/kano/left/jumping/5.png", "/streetfight/images/fighters/kano/left/knock-down/0.png", "/streetfight/images/fighters/kano/left/knock-down/1.png", "/streetfight/images/fighters/kano/left/knock-down/2.png", "/streetfight/images/fighters/kano/left/knock-down/3.png", "/streetfight/images/fighters/kano/left/knock-down/4.png", "/streetfight/images/fighters/kano/left/knock-down/5.png", "/streetfight/images/fighters/kano/left/knock-down/6.png", "/streetfight/images/fighters/kano/left/knock-down/7.png", "/streetfight/images/fighters/kano/left/knock-down/8.png", "/streetfight/images/fighters/kano/left/knock-down/9.png", "/streetfight/images/fighters/kano/left/low-kick/0.png", "/streetfight/images/fighters/kano/left/low-kick/1.png", "/streetfight/images/fighters/kano/left/low-kick/2.png", "/streetfight/images/fighters/kano/left/low-kick/3.png", "/streetfight/images/fighters/kano/left/low-kick/4.png", "/streetfight/images/fighters/kano/left/low-kick/5.png", "/streetfight/images/fighters/kano/left/low-punch/0.png", "/streetfight/images/fighters/kano/left/low-punch/1.png", "/streetfight/images/fighters/kano/left/low-punch/2.png", "/streetfight/images/fighters/kano/left/low-punch/3.png", "/streetfight/images/fighters/kano/left/low-punch/4.png", "/streetfight/images/fighters/kano/left/spin-kick/0.png", "/streetfight/images/fighters/kano/left/spin-kick/1.png", "/streetfight/images/fighters/kano/left/spin-kick/2.png", "/streetfight/images/fighters/kano/left/spin-kick/3.png", "/streetfight/images/fighters/kano/left/spin-kick/4.png", "/streetfight/images/fighters/kano/left/spin-kick/5.png", "/streetfight/images/fighters/kano/left/spin-kick/6.png", "/streetfight/images/fighters/kano/left/spin-kick/7.png", "/streetfight/images/fighters/kano/left/squat-endure/0.png", "/streetfight/images/fighters/kano/left/squat-endure/1.png", "/streetfight/images/fighters/kano/left/squat-endure/2.png", "/streetfight/images/fighters/kano/left/squat-high-kick/0.png", "/streetfight/images/fighters/kano/left/squat-high-kick/1.png", "/streetfight/images/fighters/kano/left/squat-high-kick/2.png", "/streetfight/images/fighters/kano/left/squat-high-kick/3.png", "/streetfight/images/fighters/kano/left/squat-low-kick/0.png", "/streetfight/images/fighters/kano/left/squat-low-kick/1.png", "/streetfight/images/fighters/kano/left/squat-low-kick/2.png", "/streetfight/images/fighters/kano/left/squat-low-punch/0.png", "/streetfight/images/fighters/kano/left/squat-low-punch/1.png", "/streetfight/images/fighters/kano/left/squat-low-punch/2.png", "/streetfight/images/fighters/kano/left/squating/0.png", "/streetfight/images/fighters/kano/left/squating/1.png", "/streetfight/images/fighters/kano/left/squating/2.png", "/streetfight/images/fighters/kano/left/stand/0.png", "/streetfight/images/fighters/kano/left/stand/1.png", "/streetfight/images/fighters/kano/left/stand/2.png", "/streetfight/images/fighters/kano/left/stand/3.png", "/streetfight/images/fighters/kano/left/stand/4.png", "/streetfight/images/fighters/kano/left/stand/5.png", "/streetfight/images/fighters/kano/left/stand/6.png", "/streetfight/images/fighters/kano/left/stand/7.png", "/streetfight/images/fighters/kano/left/stand/8.png", "/streetfight/images/fighters/kano/left/stand-up/0.png", "/streetfight/images/fighters/kano/left/stand-up/1.png", "/streetfight/images/fighters/kano/left/stand-up/2.png", "/streetfight/images/fighters/kano/left/uppercut/0.png", "/streetfight/images/fighters/kano/left/uppercut/1.png", "/streetfight/images/fighters/kano/left/uppercut/2.png", "/streetfight/images/fighters/kano/left/uppercut/3.png", "/streetfight/images/fighters/kano/left/uppercut/4.png", "/streetfight/images/fighters/kano/left/uppercut/5.png", "/streetfight/images/fighters/kano/left/walking/0.png", "/streetfight/images/fighters/kano/left/walking/1.png", "/streetfight/images/fighters/kano/left/walking/2.png", "/streetfight/images/fighters/kano/left/walking/3.png", "/streetfight/images/fighters/kano/left/walking/4.png", "/streetfight/images/fighters/kano/left/walking/5.png", "/streetfight/images/fighters/kano/left/walking/6.png", "/streetfight/images/fighters/kano/left/walking/7.png", "/streetfight/images/fighters/kano/left/walking/8.png", "/streetfight/images/fighters/kano/left/walking-backward/0.png", "/streetfight/images/fighters/kano/left/walking-backward/1.png", "/streetfight/images/fighters/kano/left/walking-backward/2.png", "/streetfight/images/fighters/kano/left/walking-backward/3.png", "/streetfight/images/fighters/kano/left/walking-backward/4.png", "/streetfight/images/fighters/kano/left/walking-backward/5.png", "/streetfight/images/fighters/kano/left/walking-backward/6.png", "/streetfight/images/fighters/kano/left/walking-backward/7.png", "/streetfight/images/fighters/kano/left/walking-backward/8.png", "/streetfight/images/fighters/kano/left/win/0.png", "/streetfight/images/fighters/kano/left/win/1.png", "/streetfight/images/fighters/kano/left/win/2.png", "/streetfight/images/fighters/kano/left/win/3.png", "/streetfight/images/fighters/kano/left/win/4.png", "/streetfight/images/fighters/kano/left/win/5.png", "/streetfight/images/fighters/kano/left/win/6.png", "/streetfight/images/fighters/kano/left/win/7.png", "/streetfight/images/fighters/kano/left/win/8.png", "/streetfight/images/fighters/kano/left/win/9.png", "/streetfight/images/fighters/kano/right/attractive-stand-up/0.png", "/streetfight/images/fighters/kano/right/attractive-stand-up/1.png", "/streetfight/images/fighters/kano/right/attractive-stand-up/2.png", "/streetfight/images/fighters/kano/right/attractive-stand-up/3.png", "/streetfight/images/fighters/kano/right/backward-jump/0.png", "/streetfight/images/fighters/kano/right/backward-jump/1.png", "/streetfight/images/fighters/kano/right/backward-jump/2.png", "/streetfight/images/fighters/kano/right/backward-jump/3.png", "/streetfight/images/fighters/kano/right/backward-jump/4.png", "/streetfight/images/fighters/kano/right/backward-jump/5.png", "/streetfight/images/fighters/kano/right/backward-jump/6.png", "/streetfight/images/fighters/kano/right/backward-jump/7.png", "/streetfight/images/fighters/kano/right/backward-jump-kick/0.png", "/streetfight/images/fighters/kano/right/backward-jump-kick/1.png", "/streetfight/images/fighters/kano/right/backward-jump-kick/2.png", "/streetfight/images/fighters/kano/right/backward-jump-punch/0.png", "/streetfight/images/fighters/kano/right/backward-jump-punch/1.png", "/streetfight/images/fighters/kano/right/backward-jump-punch/2.png", "/streetfight/images/fighters/kano/right/blocking/0.png", "/streetfight/images/fighters/kano/right/blocking/1.png", "/streetfight/images/fighters/kano/right/blocking/2.png", "/streetfight/images/fighters/kano/right/endure/0.png", "/streetfight/images/fighters/kano/right/endure/1.png", "/streetfight/images/fighters/kano/right/endure/2.png", "/streetfight/images/fighters/kano/right/fall/0.png", "/streetfight/images/fighters/kano/right/fall/1.png", "/streetfight/images/fighters/kano/right/fall/2.png", "/streetfight/images/fighters/kano/right/fall/3.png", "/streetfight/images/fighters/kano/right/fall/4.png", "/streetfight/images/fighters/kano/right/fall/5.png", "/streetfight/images/fighters/kano/right/fall/6.png", "/streetfight/images/fighters/kano/right/forward-jump/0.png", "/streetfight/images/fighters/kano/right/forward-jump/1.png", "/streetfight/images/fighters/kano/right/forward-jump/2.png", "/streetfight/images/fighters/kano/right/forward-jump/3.png", "/streetfight/images/fighters/kano/right/forward-jump/4.png", "/streetfight/images/fighters/kano/right/forward-jump/5.png", "/streetfight/images/fighters/kano/right/forward-jump/6.png", "/streetfight/images/fighters/kano/right/forward-jump/7.png", "/streetfight/images/fighters/kano/right/forward-jump-kick/0.png", "/streetfight/images/fighters/kano/right/forward-jump-kick/1.png", "/streetfight/images/fighters/kano/right/forward-jump-kick/2.png", "/streetfight/images/fighters/kano/right/forward-jump-punch/0.png", "/streetfight/images/fighters/kano/right/forward-jump-punch/1.png", "/streetfight/images/fighters/kano/right/forward-jump-punch/2.png", "/streetfight/images/fighters/kano/right/high-kick/0.png", "/streetfight/images/fighters/kano/right/high-kick/1.png", "/streetfight/images/fighters/kano/right/high-kick/2.png", "/streetfight/images/fighters/kano/right/high-kick/3.png", "/streetfight/images/fighters/kano/right/high-kick/4.png", "/streetfight/images/fighters/kano/right/high-kick/5.png", "/streetfight/images/fighters/kano/right/high-kick/6.png", "/streetfight/images/fighters/kano/right/high-punch/0.png", "/streetfight/images/fighters/kano/right/high-punch/1.png", "/streetfight/images/fighters/kano/right/high-punch/2.png", "/streetfight/images/fighters/kano/right/high-punch/3.png", "/streetfight/images/fighters/kano/right/high-punch/4.png", "/streetfight/images/fighters/kano/right/high-punch/5.png", "/streetfight/images/fighters/kano/right/high-punch/6.png", "/streetfight/images/fighters/kano/right/high-punch/7.png", "/streetfight/images/fighters/kano/right/jumping/0.png", "/streetfight/images/fighters/kano/right/jumping/1.png", "/streetfight/images/fighters/kano/right/jumping/2.png", "/streetfight/images/fighters/kano/right/jumping/3.png", "/streetfight/images/fighters/kano/right/jumping/4.png", "/streetfight/images/fighters/kano/right/jumping/5.png", "/streetfight/images/fighters/kano/right/knock-down/0.png", "/streetfight/images/fighters/kano/right/knock-down/1.png", "/streetfight/images/fighters/kano/right/knock-down/2.png", "/streetfight/images/fighters/kano/right/knock-down/3.png", "/streetfight/images/fighters/kano/right/knock-down/4.png", "/streetfight/images/fighters/kano/right/knock-down/5.png", "/streetfight/images/fighters/kano/right/knock-down/6.png", "/streetfight/images/fighters/kano/right/knock-down/7.png", "/streetfight/images/fighters/kano/right/knock-down/8.png", "/streetfight/images/fighters/kano/right/knock-down/9.png", "/streetfight/images/fighters/kano/right/low-kick/0.png", "/streetfight/images/fighters/kano/right/low-kick/1.png", "/streetfight/images/fighters/kano/right/low-kick/2.png", "/streetfight/images/fighters/kano/right/low-kick/3.png", "/streetfight/images/fighters/kano/right/low-kick/4.png", "/streetfight/images/fighters/kano/right/low-kick/5.png", "/streetfight/images/fighters/kano/right/low-punch/0.png", "/streetfight/images/fighters/kano/right/low-punch/1.png", "/streetfight/images/fighters/kano/right/low-punch/2.png", "/streetfight/images/fighters/kano/right/low-punch/3.png", "/streetfight/images/fighters/kano/right/low-punch/4.png", "/streetfight/images/fighters/kano/right/spin-kick/0.png", "/streetfight/images/fighters/kano/right/spin-kick/1.png", "/streetfight/images/fighters/kano/right/spin-kick/2.png", "/streetfight/images/fighters/kano/right/spin-kick/3.png", "/streetfight/images/fighters/kano/right/spin-kick/4.png", "/streetfight/images/fighters/kano/right/spin-kick/5.png", "/streetfight/images/fighters/kano/right/spin-kick/6.png", "/streetfight/images/fighters/kano/right/spin-kick/7.png", "/streetfight/images/fighters/kano/right/squat-endure/0.png", "/streetfight/images/fighters/kano/right/squat-endure/1.png", "/streetfight/images/fighters/kano/right/squat-endure/2.png", "/streetfight/images/fighters/kano/right/squat-high-kick/0.png", "/streetfight/images/fighters/kano/right/squat-high-kick/1.png", "/streetfight/images/fighters/kano/right/squat-high-kick/2.png", "/streetfight/images/fighters/kano/right/squat-high-kick/3.png", "/streetfight/images/fighters/kano/right/squat-low-kick/0.png", "/streetfight/images/fighters/kano/right/squat-low-kick/1.png", "/streetfight/images/fighters/kano/right/squat-low-kick/2.png", "/streetfight/images/fighters/kano/right/squat-low-punch/0.png", "/streetfight/images/fighters/kano/right/squat-low-punch/1.png", "/streetfight/images/fighters/kano/right/squat-low-punch/2.png", "/streetfight/images/fighters/kano/right/squating/0.png", "/streetfight/images/fighters/kano/right/squating/1.png", "/streetfight/images/fighters/kano/right/squating/2.png", "/streetfight/images/fighters/kano/right/stand/0.png", "/streetfight/images/fighters/kano/right/stand/1.png", "/streetfight/images/fighters/kano/right/stand/2.png", "/streetfight/images/fighters/kano/right/stand/3.png", "/streetfight/images/fighters/kano/right/stand/4.png", "/streetfight/images/fighters/kano/right/stand/5.png", "/streetfight/images/fighters/kano/right/stand/6.png", "/streetfight/images/fighters/kano/right/stand/7.png", "/streetfight/images/fighters/kano/right/stand/8.png", "/streetfight/images/fighters/kano/right/stand-up/0.png", "/streetfight/images/fighters/kano/right/stand-up/1.png", "/streetfight/images/fighters/kano/right/stand-up/2.png", "/streetfight/images/fighters/kano/right/uppercut/0.png", "/streetfight/images/fighters/kano/right/uppercut/1.png", "/streetfight/images/fighters/kano/right/uppercut/2.png", "/streetfight/images/fighters/kano/right/uppercut/3.png", "/streetfight/images/fighters/kano/right/uppercut/4.png", "/streetfight/images/fighters/kano/right/uppercut/5.png", "/streetfight/images/fighters/kano/right/walking/0.png", "/streetfight/images/fighters/kano/right/walking/1.png", "/streetfight/images/fighters/kano/right/walking/2.png", "/streetfight/images/fighters/kano/right/walking/3.png", "/streetfight/images/fighters/kano/right/walking/4.png", "/streetfight/images/fighters/kano/right/walking/5.png", "/streetfight/images/fighters/kano/right/walking/6.png", "/streetfight/images/fighters/kano/right/walking/7.png", "/streetfight/images/fighters/kano/right/walking/8.png", "/streetfight/images/fighters/kano/right/walking-backward/0.png", "/streetfight/images/fighters/kano/right/walking-backward/1.png", "/streetfight/images/fighters/kano/right/walking-backward/2.png", "/streetfight/images/fighters/kano/right/walking-backward/3.png", "/streetfight/images/fighters/kano/right/walking-backward/4.png", "/streetfight/images/fighters/kano/right/walking-backward/5.png", "/streetfight/images/fighters/kano/right/walking-backward/6.png", "/streetfight/images/fighters/kano/right/walking-backward/7.png", "/streetfight/images/fighters/kano/right/walking-backward/8.png", "/streetfight/images/fighters/kano/right/win/0.png", "/streetfight/images/fighters/kano/right/win/1.png", "/streetfight/images/fighters/kano/right/win/2.png", "/streetfight/images/fighters/kano/right/win/3.png", "/streetfight/images/fighters/kano/right/win/4.png", "/streetfight/images/fighters/kano/right/win/5.png", "/streetfight/images/fighters/kano/right/win/6.png", "/streetfight/images/fighters/kano/right/win/7.png", "/streetfight/images/fighters/kano/right/win/8.png", "/streetfight/images/fighters/kano/right/win/9.png", "/streetfight/images/fighters/subzero/left/attractive-stand-up/0.png", "/streetfight/images/fighters/subzero/left/attractive-stand-up/1.png", "/streetfight/images/fighters/subzero/left/attractive-stand-up/2.png", "/streetfight/images/fighters/subzero/left/attractive-stand-up/3.png", "/streetfight/images/fighters/subzero/left/attractive-stand-up/4.png", "/streetfight/images/fighters/subzero/left/backward-jump/0.png", "/streetfight/images/fighters/subzero/left/backward-jump/1.png", "/streetfight/images/fighters/subzero/left/backward-jump/2.png", "/streetfight/images/fighters/subzero/left/backward-jump/3.png", "/streetfight/images/fighters/subzero/left/backward-jump/4.png", "/streetfight/images/fighters/subzero/left/backward-jump/5.png", "/streetfight/images/fighters/subzero/left/backward-jump/6.png", "/streetfight/images/fighters/subzero/left/backward-jump/7.png", "/streetfight/images/fighters/subzero/left/backward-jump-kick/0.png", "/streetfight/images/fighters/subzero/left/backward-jump-kick/1.png", "/streetfight/images/fighters/subzero/left/backward-jump-kick/2.png", "/streetfight/images/fighters/subzero/left/backward-jump-punch/0.png", "/streetfight/images/fighters/subzero/left/backward-jump-punch/1.png", "/streetfight/images/fighters/subzero/left/backward-jump-punch/2.png", "/streetfight/images/fighters/subzero/left/blocking/0.png", "/streetfight/images/fighters/subzero/left/blocking/1.png", "/streetfight/images/fighters/subzero/left/blocking/2.png", "/streetfight/images/fighters/subzero/left/endure/0.png", "/streetfight/images/fighters/subzero/left/endure/1.png", "/streetfight/images/fighters/subzero/left/endure/2.png", "/streetfight/images/fighters/subzero/left/fall/0.png", "/streetfight/images/fighters/subzero/left/fall/1.png", "/streetfight/images/fighters/subzero/left/fall/2.png", "/streetfight/images/fighters/subzero/left/fall/3.png", "/streetfight/images/fighters/subzero/left/fall/4.png", "/streetfight/images/fighters/subzero/left/fall/5.png", "/streetfight/images/fighters/subzero/left/fall/6.png", "/streetfight/images/fighters/subzero/left/forward-jump/0.png", "/streetfight/images/fighters/subzero/left/forward-jump/1.png", "/streetfight/images/fighters/subzero/left/forward-jump/2.png", "/streetfight/images/fighters/subzero/left/forward-jump/3.png", "/streetfight/images/fighters/subzero/left/forward-jump/4.png", "/streetfight/images/fighters/subzero/left/forward-jump/5.png", "/streetfight/images/fighters/subzero/left/forward-jump/6.png", "/streetfight/images/fighters/subzero/left/forward-jump/7.png", "/streetfight/images/fighters/subzero/left/forward-jump-kick/0.png", "/streetfight/images/fighters/subzero/left/forward-jump-kick/1.png", "/streetfight/images/fighters/subzero/left/forward-jump-kick/2.png", "/streetfight/images/fighters/subzero/left/forward-jump-punch/0.png", "/streetfight/images/fighters/subzero/left/forward-jump-punch/1.png", "/streetfight/images/fighters/subzero/left/forward-jump-punch/2.png", "/streetfight/images/fighters/subzero/left/high-kick/0.png", "/streetfight/images/fighters/subzero/left/high-kick/1.png", "/streetfight/images/fighters/subzero/left/high-kick/2.png", "/streetfight/images/fighters/subzero/left/high-kick/3.png", "/streetfight/images/fighters/subzero/left/high-kick/4.png", "/streetfight/images/fighters/subzero/left/high-kick/5.png", "/streetfight/images/fighters/subzero/left/high-kick/6.png", "/streetfight/images/fighters/subzero/left/high-punch/0.png", "/streetfight/images/fighters/subzero/left/high-punch/1.png", "/streetfight/images/fighters/subzero/left/high-punch/2.png", "/streetfight/images/fighters/subzero/left/high-punch/3.png", "/streetfight/images/fighters/subzero/left/high-punch/4.png", "/streetfight/images/fighters/subzero/left/high-punch/5.png", "/streetfight/images/fighters/subzero/left/high-punch/6.png", "/streetfight/images/fighters/subzero/left/high-punch/7.png", "/streetfight/images/fighters/subzero/left/jumping/0.png", "/streetfight/images/fighters/subzero/left/jumping/1.png", "/streetfight/images/fighters/subzero/left/jumping/2.png", "/streetfight/images/fighters/subzero/left/jumping/3.png", "/streetfight/images/fighters/subzero/left/jumping/4.png", "/streetfight/images/fighters/subzero/left/jumping/5.png", "/streetfight/images/fighters/subzero/left/knock-down/0.png", "/streetfight/images/fighters/subzero/left/knock-down/1.png", "/streetfight/images/fighters/subzero/left/knock-down/2.png", "/streetfight/images/fighters/subzero/left/knock-down/3.png", "/streetfight/images/fighters/subzero/left/knock-down/4.png", "/streetfight/images/fighters/subzero/left/knock-down/5.png", "/streetfight/images/fighters/subzero/left/knock-down/6.png", "/streetfight/images/fighters/subzero/left/knock-down/7.png", "/streetfight/images/fighters/subzero/left/knock-down/8.png", "/streetfight/images/fighters/subzero/left/knock-down/9.png", "/streetfight/images/fighters/subzero/left/low-kick/0.png", "/streetfight/images/fighters/subzero/left/low-kick/1.png", "/streetfight/images/fighters/subzero/left/low-kick/2.png", "/streetfight/images/fighters/subzero/left/low-kick/3.png", "/streetfight/images/fighters/subzero/left/low-kick/4.png", "/streetfight/images/fighters/subzero/left/low-kick/5.png", "/streetfight/images/fighters/subzero/left/low-punch/0.png", "/streetfight/images/fighters/subzero/left/low-punch/1.png", "/streetfight/images/fighters/subzero/left/low-punch/2.png", "/streetfight/images/fighters/subzero/left/low-punch/3.png", "/streetfight/images/fighters/subzero/left/low-punch/4.png", "/streetfight/images/fighters/subzero/left/spin-kick/0.png", "/streetfight/images/fighters/subzero/left/spin-kick/1.png", "/streetfight/images/fighters/subzero/left/spin-kick/2.png", "/streetfight/images/fighters/subzero/left/spin-kick/3.png", "/streetfight/images/fighters/subzero/left/spin-kick/4.png", "/streetfight/images/fighters/subzero/left/spin-kick/5.png", "/streetfight/images/fighters/subzero/left/spin-kick/6.png", "/streetfight/images/fighters/subzero/left/spin-kick/7.png", "/streetfight/images/fighters/subzero/left/squat-endure/0.png", "/streetfight/images/fighters/subzero/left/squat-endure/1.png", "/streetfight/images/fighters/subzero/left/squat-endure/2.png", "/streetfight/images/fighters/subzero/left/squat-high-kick/0.png", "/streetfight/images/fighters/subzero/left/squat-high-kick/1.png", "/streetfight/images/fighters/subzero/left/squat-high-kick/2.png", "/streetfight/images/fighters/subzero/left/squat-high-kick/3.png", "/streetfight/images/fighters/subzero/left/squat-low-kick/0.png", "/streetfight/images/fighters/subzero/left/squat-low-kick/1.png", "/streetfight/images/fighters/subzero/left/squat-low-kick/2.png", "/streetfight/images/fighters/subzero/left/squat-low-punch/0.png", "/streetfight/images/fighters/subzero/left/squat-low-punch/1.png", "/streetfight/images/fighters/subzero/left/squat-low-punch/2.png", "/streetfight/images/fighters/subzero/left/squating/0.png", "/streetfight/images/fighters/subzero/left/squating/1.png", "/streetfight/images/fighters/subzero/left/squating/2.png", "/streetfight/images/fighters/subzero/left/stand/0.png", "/streetfight/images/fighters/subzero/left/stand/1.png", "/streetfight/images/fighters/subzero/left/stand/2.png", "/streetfight/images/fighters/subzero/left/stand/3.png", "/streetfight/images/fighters/subzero/left/stand/4.png", "/streetfight/images/fighters/subzero/left/stand/5.png", "/streetfight/images/fighters/subzero/left/stand/6.png", "/streetfight/images/fighters/subzero/left/stand/7.png", "/streetfight/images/fighters/subzero/left/stand/8.png", "/streetfight/images/fighters/subzero/left/stand/9.png", "/streetfight/images/fighters/subzero/left/stand-up/0.png", "/streetfight/images/fighters/subzero/left/stand-up/1.png", "/streetfight/images/fighters/subzero/left/stand-up/2.png", "/streetfight/images/fighters/subzero/left/uppercut/0.png", "/streetfight/images/fighters/subzero/left/uppercut/1.png", "/streetfight/images/fighters/subzero/left/uppercut/2.png", "/streetfight/images/fighters/subzero/left/uppercut/3.png", "/streetfight/images/fighters/subzero/left/uppercut/4.png", "/streetfight/images/fighters/subzero/left/walking/0.png", "/streetfight/images/fighters/subzero/left/walking/1.png", "/streetfight/images/fighters/subzero/left/walking/2.png", "/streetfight/images/fighters/subzero/left/walking/3.png", "/streetfight/images/fighters/subzero/left/walking/4.png", "/streetfight/images/fighters/subzero/left/walking/5.png", "/streetfight/images/fighters/subzero/left/walking/6.png", "/streetfight/images/fighters/subzero/left/walking/7.png", "/streetfight/images/fighters/subzero/left/walking/8.png", "/streetfight/images/fighters/subzero/left/walking-backward/0.png", "/streetfight/images/fighters/subzero/left/walking-backward/1.png", "/streetfight/images/fighters/subzero/left/walking-backward/2.png", "/streetfight/images/fighters/subzero/left/walking-backward/3.png", "/streetfight/images/fighters/subzero/left/walking-backward/4.png", "/streetfight/images/fighters/subzero/left/walking-backward/5.png", "/streetfight/images/fighters/subzero/left/walking-backward/6.png", "/streetfight/images/fighters/subzero/left/walking-backward/7.png", "/streetfight/images/fighters/subzero/left/walking-backward/8.png", "/streetfight/images/fighters/subzero/left/win/0.png", "/streetfight/images/fighters/subzero/left/win/1.png", "/streetfight/images/fighters/subzero/left/win/2.png", "/streetfight/images/fighters/subzero/left/win/3.png", "/streetfight/images/fighters/subzero/left/win/4.png", "/streetfight/images/fighters/subzero/left/win/5.png", "/streetfight/images/fighters/subzero/left/win/6.png", "/streetfight/images/fighters/subzero/left/win/7.png", "/streetfight/images/fighters/subzero/left/win/8.png", "/streetfight/images/fighters/subzero/left/win/9.png", "/streetfight/images/fighters/subzero/right/attractive-stand-up/0.png", "/streetfight/images/fighters/subzero/right/attractive-stand-up/1.png", "/streetfight/images/fighters/subzero/right/attractive-stand-up/2.png", "/streetfight/images/fighters/subzero/right/attractive-stand-up/3.png", "/streetfight/images/fighters/subzero/right/attractive-stand-up/4.png", "/streetfight/images/fighters/subzero/right/backward-jump/0.png", "/streetfight/images/fighters/subzero/right/backward-jump/1.png", "/streetfight/images/fighters/subzero/right/backward-jump/2.png", "/streetfight/images/fighters/subzero/right/backward-jump/3.png", "/streetfight/images/fighters/subzero/right/backward-jump/4.png", "/streetfight/images/fighters/subzero/right/backward-jump/5.png", "/streetfight/images/fighters/subzero/right/backward-jump/6.png", "/streetfight/images/fighters/subzero/right/backward-jump/7.png", "/streetfight/images/fighters/subzero/right/backward-jump-kick/0.png", "/streetfight/images/fighters/subzero/right/backward-jump-kick/1.png", "/streetfight/images/fighters/subzero/right/backward-jump-kick/2.png", "/streetfight/images/fighters/subzero/right/backward-jump-punch/0.png", "/streetfight/images/fighters/subzero/right/backward-jump-punch/1.png", "/streetfight/images/fighters/subzero/right/backward-jump-punch/2.png", "/streetfight/images/fighters/subzero/right/blocking/0.png", "/streetfight/images/fighters/subzero/right/blocking/1.png", "/streetfight/images/fighters/subzero/right/blocking/2.png", "/streetfight/images/fighters/subzero/right/endure/0.png", "/streetfight/images/fighters/subzero/right/endure/1.png", "/streetfight/images/fighters/subzero/right/endure/2.png", "/streetfight/images/fighters/subzero/right/fall/0.png", "/streetfight/images/fighters/subzero/right/fall/1.png", "/streetfight/images/fighters/subzero/right/fall/2.png", "/streetfight/images/fighters/subzero/right/fall/3.png", "/streetfight/images/fighters/subzero/right/fall/4.png", "/streetfight/images/fighters/subzero/right/fall/5.png", "/streetfight/images/fighters/subzero/right/fall/6.png", "/streetfight/images/fighters/subzero/right/forward-jump/0.png", "/streetfight/images/fighters/subzero/right/forward-jump/1.png", "/streetfight/images/fighters/subzero/right/forward-jump/2.png", "/streetfight/images/fighters/subzero/right/forward-jump/3.png", "/streetfight/images/fighters/subzero/right/forward-jump/4.png", "/streetfight/images/fighters/subzero/right/forward-jump/5.png", "/streetfight/images/fighters/subzero/right/forward-jump/6.png", "/streetfight/images/fighters/subzero/right/forward-jump/7.png", "/streetfight/images/fighters/subzero/right/forward-jump-kick/0.png", "/streetfight/images/fighters/subzero/right/forward-jump-kick/1.png", "/streetfight/images/fighters/subzero/right/forward-jump-kick/2.png", "/streetfight/images/fighters/subzero/right/forward-jump-punch/0.png", "/streetfight/images/fighters/subzero/right/forward-jump-punch/1.png", "/streetfight/images/fighters/subzero/right/forward-jump-punch/2.png", "/streetfight/images/fighters/subzero/right/high-kick/0.png", "/streetfight/images/fighters/subzero/right/high-kick/1.png", "/streetfight/images/fighters/subzero/right/high-kick/2.png", "/streetfight/images/fighters/subzero/right/high-kick/3.png", "/streetfight/images/fighters/subzero/right/high-kick/4.png", "/streetfight/images/fighters/subzero/right/high-kick/5.png", "/streetfight/images/fighters/subzero/right/high-kick/6.png", "/streetfight/images/fighters/subzero/right/high-punch/0.png", "/streetfight/images/fighters/subzero/right/high-punch/1.png", "/streetfight/images/fighters/subzero/right/high-punch/2.png", "/streetfight/images/fighters/subzero/right/high-punch/3.png", "/streetfight/images/fighters/subzero/right/high-punch/4.png", "/streetfight/images/fighters/subzero/right/high-punch/5.png", "/streetfight/images/fighters/subzero/right/high-punch/6.png", "/streetfight/images/fighters/subzero/right/high-punch/7.png", "/streetfight/images/fighters/subzero/right/jumping/0.png", "/streetfight/images/fighters/subzero/right/jumping/1.png", "/streetfight/images/fighters/subzero/right/jumping/2.png", "/streetfight/images/fighters/subzero/right/jumping/3.png", "/streetfight/images/fighters/subzero/right/jumping/4.png", "/streetfight/images/fighters/subzero/right/jumping/5.png", "/streetfight/images/fighters/subzero/right/knock-down/0.png", "/streetfight/images/fighters/subzero/right/knock-down/1.png", "/streetfight/images/fighters/subzero/right/knock-down/2.png", "/streetfight/images/fighters/subzero/right/knock-down/3.png", "/streetfight/images/fighters/subzero/right/knock-down/4.png", "/streetfight/images/fighters/subzero/right/knock-down/5.png", "/streetfight/images/fighters/subzero/right/knock-down/6.png", "/streetfight/images/fighters/subzero/right/knock-down/7.png", "/streetfight/images/fighters/subzero/right/knock-down/8.png", "/streetfight/images/fighters/subzero/right/knock-down/9.png", "/streetfight/images/fighters/subzero/right/low-kick/0.png", "/streetfight/images/fighters/subzero/right/low-kick/1.png", "/streetfight/images/fighters/subzero/right/low-kick/2.png", "/streetfight/images/fighters/subzero/right/low-kick/3.png", "/streetfight/images/fighters/subzero/right/low-kick/4.png", "/streetfight/images/fighters/subzero/right/low-kick/5.png", "/streetfight/images/fighters/subzero/right/low-punch/0.png", "/streetfight/images/fighters/subzero/right/low-punch/1.png", "/streetfight/images/fighters/subzero/right/low-punch/2.png", "/streetfight/images/fighters/subzero/right/low-punch/3.png", "/streetfight/images/fighters/subzero/right/low-punch/4.png", "/streetfight/images/fighters/subzero/right/spin-kick/0.png", "/streetfight/images/fighters/subzero/right/spin-kick/1.png", "/streetfight/images/fighters/subzero/right/spin-kick/2.png", "/streetfight/images/fighters/subzero/right/spin-kick/3.png", "/streetfight/images/fighters/subzero/right/spin-kick/4.png", "/streetfight/images/fighters/subzero/right/spin-kick/5.png", "/streetfight/images/fighters/subzero/right/spin-kick/6.png", "/streetfight/images/fighters/subzero/right/spin-kick/7.png", "/streetfight/images/fighters/subzero/right/squat-endure/0.png", "/streetfight/images/fighters/subzero/right/squat-endure/1.png", "/streetfight/images/fighters/subzero/right/squat-endure/2.png", "/streetfight/images/fighters/subzero/right/squat-high-kick/0.png", "/streetfight/images/fighters/subzero/right/squat-high-kick/1.png", "/streetfight/images/fighters/subzero/right/squat-high-kick/2.png", "/streetfight/images/fighters/subzero/right/squat-high-kick/3.png", "/streetfight/images/fighters/subzero/right/squat-low-kick/0.png", "/streetfight/images/fighters/subzero/right/squat-low-kick/1.png", "/streetfight/images/fighters/subzero/right/squat-low-kick/2.png", "/streetfight/images/fighters/subzero/right/squat-low-punch/0.png", "/streetfight/images/fighters/subzero/right/squat-low-punch/1.png", "/streetfight/images/fighters/subzero/right/squat-low-punch/2.png", "/streetfight/images/fighters/subzero/right/squating/0.png", "/streetfight/images/fighters/subzero/right/squating/1.png", "/streetfight/images/fighters/subzero/right/squating/2.png", "/streetfight/images/fighters/subzero/right/stand/0.png", "/streetfight/images/fighters/subzero/right/stand/1.png", "/streetfight/images/fighters/subzero/right/stand/2.png", "/streetfight/images/fighters/subzero/right/stand/3.png", "/streetfight/images/fighters/subzero/right/stand/4.png", "/streetfight/images/fighters/subzero/right/stand/5.png", "/streetfight/images/fighters/subzero/right/stand/6.png", "/streetfight/images/fighters/subzero/right/stand/7.png", "/streetfight/images/fighters/subzero/right/stand/8.png", "/streetfight/images/fighters/subzero/right/stand-up/0.png", "/streetfight/images/fighters/subzero/right/stand-up/1.png", "/streetfight/images/fighters/subzero/right/stand-up/2.png", "/streetfight/images/fighters/subzero/right/uppercut/0.png", "/streetfight/images/fighters/subzero/right/uppercut/1.png", "/streetfight/images/fighters/subzero/right/uppercut/2.png", "/streetfight/images/fighters/subzero/right/uppercut/3.png", "/streetfight/images/fighters/subzero/right/uppercut/4.png", "/streetfight/images/fighters/subzero/right/walking/0.png", "/streetfight/images/fighters/subzero/right/walking/1.png", "/streetfight/images/fighters/subzero/right/walking/2.png", "/streetfight/images/fighters/subzero/right/walking/3.png", "/streetfight/images/fighters/subzero/right/walking/4.png", "/streetfight/images/fighters/subzero/right/walking/5.png", "/streetfight/images/fighters/subzero/right/walking/6.png", "/streetfight/images/fighters/subzero/right/walking/7.png", "/streetfight/images/fighters/subzero/right/walking/8.png", "/streetfight/images/fighters/subzero/right/walking/subzero-walking-b.gif", "/streetfight/images/fighters/subzero/right/walking-backward/0.png", "/streetfight/images/fighters/subzero/right/walking-backward/1.png", "/streetfight/images/fighters/subzero/right/walking-backward/2.png", "/streetfight/images/fighters/subzero/right/walking-backward/3.png", "/streetfight/images/fighters/subzero/right/walking-backward/4.png", "/streetfight/images/fighters/subzero/right/walking-backward/5.png", "/streetfight/images/fighters/subzero/right/walking-backward/6.png", "/streetfight/images/fighters/subzero/right/walking-backward/7.png", "/streetfight/images/fighters/subzero/right/walking-backward/8.png", "/streetfight/images/fighters/subzero/right/walking-backward/subzero-walking-f.gif", "/streetfight/images/fighters/subzero/right/win/0.png", "/streetfight/images/fighters/subzero/right/win/1.png", "/streetfight/images/fighters/subzero/right/win/2.png", "/streetfight/images/fighters/subzero/right/win/3.png", "/streetfight/images/fighters/subzero/right/win/4.png", "/streetfight/images/fighters/subzero/right/win/5.png", "/streetfight/images/fighters/subzero/right/win/6.png", "/streetfight/images/fighters/subzero/right/win/7.png", "/streetfight/images/fighters/subzero/right/win/8.png", "/streetfight/images/fighters/subzero/right/win/9.png"]);
                                    return [4 /*yield*/, this.createScene()];
                                case 2:
                                    _a.sent();
                                    setInterval(function () {
                                        _this._ws.send(JSON.stringify({
                                            action: "ping",
                                        }));
                                    }, 10000);
                                    callback(true, "");
                                    this._join_status = true;
                                    lc_1 = new _agora_LocalChannel__WEBPACK_IMPORTED_MODULE_4__["default"]();
                                    lc_1.create_channel(this._roomId + data.id);
                                    $("#mic").click(function () {
                                        if ($("#mic").attr("src") == "icons/mmicrophone.png") {
                                            console.log("unmute");
                                            lc_1.unmute();
                                            $("#mic").attr("src", "icons/microphone.png");
                                        }
                                        else {
                                            console.log("mute");
                                            lc_1.mute();
                                            $("#mic").attr("src", "icons/mmicrophone.png");
                                        }
                                    });
                                    _a.label = 3;
                                case 3:
                                    this._color = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"](data.rgb[0], data.rgb[1], data.rgb[2]);
                                    mat = this._scene.getMaterialByName("body");
                                    mat1 = this._scene.getMaterialByName("skin");
                                    mat.albedoColor = this._color;
                                    mat1.albedoColor = this._color;
                                    console.log("Room joined sucessfully...");
                                    return [3 /*break*/, 5];
                                case 4:
                                    if (data.response == "rgb") {
                                        this._rcolor[data.id] = data.rgb;
                                        if (this._playerList.hasOwnProperty(data.id)) {
                                            this._playerList[data.id].setColor(data.rgb);
                                        }
                                    }
                                    _a.label = 5;
                                case 5: return [3 /*break*/, 10];
                                case 6:
                                    buf = Buffer.from(data);
                                    a = buf[0];
                                    response = ((1 << 2) - 1) & a;
                                    id = (a >> 2);
                                    if (!(response == 1)) return [3 /*break*/, 9];
                                    if (!!this._playerList.hasOwnProperty(id)) return [3 /*break*/, 8];
                                    return [4 /*yield*/, this.createRemotePlayer(id)];
                                case 7:
                                    _a.sent();
                                    _a.label = 8;
                                case 8:
                                    p = this._playerList[id];
                                    p._avatar.position.x = this.extractFloatPos(buf.slice(1, 4));
                                    p._avatar.position.z = this.extractFloatPos(buf.slice(4, 7));
                                    return [3 /*break*/, 10];
                                case 9:
                                    if (response == 0) {
                                        if (this._playerList.hasOwnProperty(id)) {
                                            p = this._playerList[id];
                                            x = this.extractFloat(buf.slice(1, 3));
                                            y = this.extractFloat(buf.slice(3, 5));
                                            z = this.extractFloat(buf.slice(5, 7));
                                            ang = this.extractFloatAng(buf.slice(7, 10));
                                            p.setMoveData(new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](x, y, z));
                                            p._avatar.rotation.y = ang;
                                        }
                                    }
                                    else if (response == 3) {
                                        if (this._playerList.hasOwnProperty(id)) {
                                            p = this._playerList[id];
                                            p._avatar.dispose();
                                            delete this._playerList[id];
                                        }
                                    }
                                    _a.label = 10;
                                case 10: return [2 /*return*/];
                            }
                        });
                    }); };
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            _this._ws.onopen = function () {
                                console.log("Websocket Connection Opened!");
                                _this._ws.send(JSON.stringify({
                                    action: "join",
                                    //set it to dynamic
                                    room: _this._roomId
                                }));
                                resolve();
                            };
                        })];
                }
                catch (e) {
                    console.error(e);
                }
                return [2 /*return*/];
            });
        });
    };
    MyScene.prototype.createScene = function () {
        return __awaiter(this, void 0, void 0, function () {
            var skybox, skyboxMaterial, gl, ssr, alpha;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Create a basic BJS Scene object.
                        // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
                        this._camera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["ArcRotateCamera"]("ArcRotateCamera", (Math.PI / 2 + this._player.rotation.y), Math.PI / 2.5, 5, new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](this._player.position.x, this._player.position.y + 1.5, this._player.position.z), this._scene);
                        this._camera.wheelPrecision = 15;
                        this._camera.checkCollisions = false;
                        //make sure the keyboard keys controlling camera are different from those controlling player
                        //here we will not use any keyboard keys to control camera
                        this._camera.keysLeft = [];
                        this._camera.keysRight = [];
                        this._camera.keysUp = [];
                        this._camera.keysDown = [];
                        //how close can the camera come to player
                        this._camera.lowerRadiusLimit = 2;
                        //how far can the camera go from the player
                        this._camera.upperRadiusLimit = 20;
                        this._camera.attachControl(this._canvas, false);
                        this.createCC();
                        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
                        this._light = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["HemisphericLight"]('light1', new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0), this._scene);
                        skybox = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox("skyBox", {
                            size: 1000.0
                        }, this._scene);
                        skyboxMaterial = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("skyBox", this._scene);
                        skyboxMaterial.backFaceCulling = false;
                        skyboxMaterial.reflectionTexture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["CubeTexture"]("gallexy/", this._scene);
                        skyboxMaterial.reflectionTexture.coordinatesMode = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"].SKYBOX_MODE;
                        skyboxMaterial.diffuseColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"](0, 0, 0);
                        skyboxMaterial.specularColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"](0, 0, 0);
                        skybox.material = skyboxMaterial;
                        gl = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["GlowLayer"]("glow", this._scene);
                        gl.intensity = 0.4;
                        ssr = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["ScreenSpaceReflectionPostProcess"]("ssr", this._scene, 1.0, this._camera);
                        alpha = 0;
                        // let beta=Date.now();
                        //let gamma = Date.now()
                        this._scene.registerBeforeRender(function () {
                            skybox.rotation.y = alpha;
                            //  if(Date.now()-beta>=10000){
                            //sync location
                            // beta = Date.now()
                            //let buf_list = [this.compressFloatPos(this._player.position.x), this.compressFloatPos(this._player.position.z) ]
                            //this._ws.send(Buffer.concat(buf_list))        
                            // }
                            if (_this._cc._moveVector && _this._cc.anyMovement() && (_this._cc._act._walk || _this._cc._act._walkback || _this._cc._act._stepLeft || _this._cc._act._stepRight)) {
                                var tmp = _this._cc._moveVector;
                                _this._ws.send(Buffer.concat([_this.compressFloat(tmp.x), _this.compressFloat(tmp.y), _this.compressFloat(tmp.z), _this.compressFloatAng(_this._player.rotation.y % 360)]));
                                var buf_list = [_this.compressFloatPos(_this._player.position.x), _this.compressFloatPos(_this._player.position.z)];
                                _this._ws.send(Buffer.concat(buf_list));
                            }
                            alpha += 0.001;
                        });
                        return [4 /*yield*/, this.loadMeshes()];
                    case 1:
                        _a.sent();
                        this.test();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyScene.prototype.fetchInitiaWins = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bn, query, data, _i, _a, m, d1, d2, img1, img2;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, web3.eth.getBlockNumber()];
                    case 1:
                        bn = _b.sent();
                        console.log("BlockNumber:" + bn);
                        query = Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__["gql"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["{\n            games(where: { startblock_gt: ", "}){\n              id\n              token0\n              token1\n              startblock\n              particiapte0 {\n                  id\n                }\n                participate1 {\n                  id\n                }\n              winner {\n                id\n              }\n            }\n          }\n        "], ["{\n            games(where: { startblock_gt: ", "}){\n              id\n              token0\n              token1\n              startblock\n              particiapte0 {\n                  id\n                }\n                participate1 {\n                  id\n                }\n              winner {\n                id\n              }\n            }\n          }\n        "])), bn - 310);
                        return [4 /*yield*/, Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__["request"])('https://api.thegraph.com/subgraphs/name/harshu4/metabulls', query)];
                    case 2:
                        data = _b.sent();
                        console.log(JSON.stringify(data));
                        _i = 0, _a = data["games"];
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        m = _a[_i];
                        return [4 /*yield*/, this.get_nft(m.token0)];
                    case 4:
                        d1 = _b.sent();
                        return [4 /*yield*/, this.get_nft(m.token1)];
                    case 5:
                        d2 = _b.sent();
                        img1 = new Image();
                        img1.src = "https://" + d1[0] + ".ipfs.infura-ipfs.io/";
                        return [4 /*yield*/, this.loadimage(img1)];
                    case 6:
                        _b.sent();
                        img2 = new Image();
                        img2.src = "https://" + d2[0] + ".ipfs.infura-ipfs.io/";
                        return [4 /*yield*/, this.loadimage(img2)];
                    case 7:
                        _b.sent();
                        this._winnerquee.push(Number(m.startblock));
                        this._winnerdata[Number(m.startblock)] = {
                            "p1": m.token0,
                            "p2": m.token1,
                            "img1": img1,
                            "img2": img2,
                            "uimg1": d1[0],
                            "uimg2": d2[0],
                            "strength1": d1[1][0],
                            "strength2": d2[1][0],
                            "stemina1": d1[1][1],
                            "stemina2": d2[1][1],
                            "id": m.id,
                            "addr1": m['particiapte0']['id'],
                            "addr2": m['participate1']['id'],
                            "winner": m['winner'] ? (m['winner']['id'] ? 0 : 1) : "NC"
                        };
                        this._winnerquee.sort(function (a, b) {
                            return a - b;
                        });
                        this._winnerquee = this._winnerquee.filter(function (item, pos) {
                            return _this._winnerquee.indexOf(item) == pos;
                        });
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 3];
                    case 9:
                        this.relist_winner();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyScene.prototype.fetchInitiaMatches = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bn, query, data, _i, _a, m, d1, d2, img1, img2;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, web3.eth.getBlockNumber()];
                    case 1:
                        bn = _b.sent();
                        console.log("BlockNumber:" + bn);
                        query = Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__["gql"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["{\n            games(where: {startblock_gt:", "}){\n        \n          id\n          token0\n            token1\n            startblock\n            particiapte0 {\n                id\n              }\n              participate1 {\n                id\n              }\n          }\n        }\n        "], ["{\n            games(where: {startblock_gt:", "}){\n        \n          id\n          token0\n            token1\n            startblock\n            particiapte0 {\n                id\n              }\n              participate1 {\n                id\n              }\n          }\n        }\n        "])), bn);
                        return [4 /*yield*/, Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__["request"])('https://api.thegraph.com/subgraphs/name/harshu4/metabulls', query)];
                    case 2:
                        data = _b.sent();
                        console.log(JSON.stringify(data));
                        _i = 0, _a = data["games"];
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 9];
                        m = _a[_i];
                        return [4 /*yield*/, this.get_nft(m.token0)];
                    case 4:
                        d1 = _b.sent();
                        return [4 /*yield*/, this.get_nft(m.token1)];
                    case 5:
                        d2 = _b.sent();
                        img1 = new Image();
                        img1.src = "https://" + d1[0] + ".ipfs.infura-ipfs.io/";
                        return [4 /*yield*/, this.loadimage(img1)];
                    case 6:
                        _b.sent();
                        img2 = new Image();
                        img2.src = "https://" + d2[0] + ".ipfs.infura-ipfs.io/";
                        return [4 /*yield*/, this.loadimage(img2)];
                    case 7:
                        _b.sent();
                        this._matchquee.push(Number(m.startblock));
                        this._matchdata[Number(m.startblock)] = {
                            "p1": m.token0,
                            "p2": m.token1,
                            "img1": img1,
                            "img2": img2,
                            "uimg1": d1[0],
                            "uimg2": d2[0],
                            "strength1": d1[1][0],
                            "strength2": d2[1][0],
                            "stemina1": d1[1][1],
                            "stemina2": d2[1][1],
                            "id": m.id,
                            "addr1": m['particiapte0']['id'],
                            "addr2": m['participate1']['id']
                        };
                        this._matchquee.sort(function (a, b) {
                            return a - b;
                        });
                        this._matchquee = this._matchquee.filter(function (item, pos) {
                            return _this._matchquee.indexOf(item) == pos;
                        });
                        _b.label = 8;
                    case 8:
                        _i++;
                        return [3 /*break*/, 3];
                    case 9:
                        this.relist_match();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyScene.prototype.startRenderLoop = function () {
        var _this = this;
        this.fetchInitiaMatches();
        this.fetchInitiaWins();
        worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () { return __awaiter(_this, void 0, void 0, function () {
            var result, rnum_1, player_1, _loop_1, this_1, _a, _b, _i, m, e_1;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this._queue_state && this._queue.length > 0)) return [3 /*break*/, 10];
                        this._queue_state = false;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 8, , 9]);
                        result = this._queue.shift();
                        this._currentBlock = result.number;
                        console.log(result.number);
                        rnum_1 = parseInt("0x" + result.hash.slice(result.hash.length - 6)) % 8;
                        player_1 = result.number % 2 == 0 ? 0 : 1;
                        if (!(Object.keys(this._matches).length === 0 && this._matchquee.length > 0 && result.number == this._matchquee[0])) return [3 /*break*/, 3];
                        if (this.mainCanvas) {
                            _IdleCanvas__WEBPACK_IMPORTED_MODULE_8__["stop"]();
                            this.mainCanvas = null;
                        }
                        return [4 /*yield*/, this.startStreetFightGame(this._currentBlock)];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _loop_1 = function (m) {
                            var gm, _keydown, _keyup, mypromise, gm_1, winner_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        gm = this_1._matches[m].gm;
                                        if (!(this_1._matchquee.length > 0 && result.number == this_1._matchquee[0])) return [3 /*break*/, 2];
                                        gm.reset();
                                        return [4 /*yield*/, this_1.startStreetFightGame(this_1._currentBlock)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2:
                                        _keydown = gm.controllers.Multiplayer.prototype._keydown.bind(gm.game);
                                        _keyup = gm.controllers.Multiplayer.prototype._keyup.bind(gm.game);
                                        console.log("Move:" + rnum_1 + " Player:" + player_1);
                                        mypromise = null;
                                        if (!this_1._matches[m].finished) {
                                            mypromise = new Promise(function (myResolve, myReject) {
                                                try {
                                                    if (rnum_1 == 0) {
                                                        if (player_1) {
                                                            var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                _keydown(65);
                                                            }, 35);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                _keyup(65);
                                                                _this._matches[m][1].damage += _this._matches[m][0].strength + 100;
                                                                _this._matches[m][0].strength -= 5;
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                        else {
                                                            var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                _keydown(80);
                                                            }, 35);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                _keyup(80);
                                                                _this._matches[m][0].damage += _this._matches[m][1].strength + 100;
                                                                _this._matches[m][1].strength -= 5;
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                    }
                                                    else if (rnum_1 == 1) {
                                                        if (player_1) {
                                                            var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                _keydown(70);
                                                            }, 35);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                _keyup(70);
                                                                _this._matches[m][1].damage += _this._matches[m][0].stemina + 110;
                                                                _this._matches[m][0].stemina -= 7;
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                        else {
                                                            var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                _keydown(220);
                                                            }, 35);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                _keyup(220);
                                                                _this._matches[m][0].damage += _this._matches[m][1].stemina + 110;
                                                                _this._matches[m][1].stemina -= 7;
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                    }
                                                    else if (rnum_1 == 2) {
                                                        if (player_1) {
                                                            var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                _keydown(83);
                                                            }, 35);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                _keyup(83);
                                                                _this._matches[m][1].damage += _this._matches[m][0].strength + 90;
                                                                _this._matches[m][0].strength -= 4;
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                        else {
                                                            var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                _keydown(219);
                                                            }, 35);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                _keyup(219);
                                                                _this._matches[m][0].damage += _this._matches[m][1].strength + 90;
                                                                _this._matches[m][1].strength -= 4;
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                    }
                                                    else if (rnum_1 == 3) {
                                                        if (player_1) {
                                                            var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                _keydown(68);
                                                            }, 35);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                _keyup(68);
                                                                _this._matches[m][1].damage += _this._matches[m][0].stemina + 95;
                                                                _this._matches[m][0].stemina -= 8;
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                        else {
                                                            var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                _keydown(221);
                                                            }, 35);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                _keyup(221);
                                                                _this._matches[m][0].damage += _this._matches[m][1].stemina + 95;
                                                                _this._matches[m][1].stemina -= 8;
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                    }
                                                    else if (rnum_1 == 4) {
                                                        if (player_1) {
                                                            var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                _keydown(65);
                                                            }, 35);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                _keyup(65);
                                                                _this._matches[m][1].damage += _this._matches[m][0].strength + 130;
                                                                _this._matches[m][0].strength -= 15;
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                        else {
                                                            var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                _keydown(80);
                                                            }, 35);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                _keyup(80);
                                                                _this._matches[m][0].damage += _this._matches[m][1].strength + 130;
                                                                _this._matches[m][1].strength -= 15;
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                    }
                                                    else if (rnum_1 == 5) {
                                                        if (player_1) {
                                                            _keydown(72);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                    _keydown(70);
                                                                }, 35);
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                    worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                    _keyup(70);
                                                                    _this._matches[m][1].damage += _this._matches[m][0].stemina + 111;
                                                                    _this._matches[m][0].stemina -= 11;
                                                                }, 1512);
                                                            }, 250);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                _keyup(72);
                                                                myResolve();
                                                            }, 2697);
                                                        }
                                                        else {
                                                            _keydown(40);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                    _keydown(220);
                                                                }, 35);
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                    worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                    _keyup(220);
                                                                    _this._matches[m][0].damage += _this._matches[m][1].stemina + 111;
                                                                    _this._matches[m][1].stemina -= 11;
                                                                }, 1512);
                                                            }, 250);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                _keyup(40);
                                                                myResolve();
                                                            }, 2697);
                                                        }
                                                    }
                                                    else if (rnum_1 == 6) {
                                                        if (player_1) {
                                                            _keydown(72);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                    _keydown(83);
                                                                }, 35);
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                    worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                    _keyup(83);
                                                                    _this._matches[m][1].damage += _this._matches[m][0].strength + 80;
                                                                    _this._matches[m][0].strength -= 3;
                                                                }, 1222);
                                                            }, 294);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                _keyup(72);
                                                                myResolve();
                                                            }, 1831);
                                                        }
                                                        else {
                                                            _keydown(40);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                    _keydown(219);
                                                                }, 35);
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                    worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                    _keyup(219);
                                                                    _this._matches[m][0].damage += _this._matches[m][1].strength + 80;
                                                                    _this._matches[m][1].strength -= 3;
                                                                }, 1222);
                                                            }, 294);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                _keyup(40);
                                                                myResolve();
                                                            }, 1831);
                                                        }
                                                    }
                                                    else if (rnum_1 == 7) {
                                                        if (player_1) {
                                                            _keydown(72);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                    _keydown(68);
                                                                }, 35);
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                    worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                    _keyup(68);
                                                                    _this._matches[m][1].damage += _this._matches[m][0].stemina + 100;
                                                                    _this._matches[m][0].stemina -= 9;
                                                                }, 1405);
                                                            }, 250);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                _keyup(72);
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                        else {
                                                            _keydown(40);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                var intervalId = worker_timers__WEBPACK_IMPORTED_MODULE_5__["setInterval"](function () {
                                                                    _keydown(221);
                                                                }, 35);
                                                                worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                    worker_timers__WEBPACK_IMPORTED_MODULE_5__["clearInterval"](intervalId);
                                                                    _keyup(221);
                                                                    _this._matches[m][0].damage += _this._matches[m][1].stemina + 100;
                                                                    _this._matches[m][1].stemina -= 9;
                                                                }, 1405);
                                                            }, 250);
                                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                                _keyup(40);
                                                                myResolve();
                                                            }, 2000);
                                                        }
                                                    }
                                                    else {
                                                        myResolve();
                                                    }
                                                }
                                                catch (e) {
                                                    myResolve();
                                                }
                                            });
                                        }
                                        if (!(mypromise != null)) return [3 /*break*/, 4];
                                        return [4 /*yield*/, mypromise];
                                    case 3:
                                        _a.sent();
                                        _a.label = 4;
                                    case 4:
                                        if (!this_1._matches[m].finished && result.number >= this_1._matchquee[0] + 20) {
                                            gm_1 = this_1._matches[m].gm;
                                            this_1._matches[m].finished = true;
                                            this_1._winnerquee.push(this_1._matchquee[0]);
                                            winner_1 = 0;
                                            if (this_1._matches[m][0].damage > this_1._matches[m][1].damage) {
                                                winner_1 = 1;
                                            }
                                            this_1._matchdata[this_1._matchquee[0]]['winner'] = winner_1;
                                            this_1._winnerdata[this_1._matchquee[0]] = this_1._matchdata[this_1._matchquee[0]];
                                            delete this_1._matchdata[this_1._matchquee.shift()];
                                            this_1.relist_winner();
                                            this_1.relist_match();
                                            worker_timers__WEBPACK_IMPORTED_MODULE_5__["setTimeout"](function () {
                                                if (winner_1) {
                                                    gm_1.fighters.Fighter.prototype.setMove.bind(gm_1.game.fighters[0])("fall");
                                                    gm_1.fighters.Fighter.prototype.setMove.bind(gm_1.game.fighters[1])("win");
                                                }
                                                else {
                                                    gm_1.fighters.Fighter.prototype.setMove.bind(gm_1.game.fighters[1])("fall");
                                                    gm_1.fighters.Fighter.prototype.setMove.bind(gm_1.game.fighters[0])("win");
                                                }
                                            }, 4000);
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a = [];
                        for (_b in this._matches)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 4;
                    case 4:
                        if (!(_i < _a.length)) return [3 /*break*/, 7];
                        m = _a[_i];
                        return [5 /*yield**/, _loop_1(m)];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        e_1 = _c.sent();
                        console.error("MarkTheLOg:" + e_1);
                        return [3 /*break*/, 9];
                    case 9:
                        this._queue_state = true;
                        _c.label = 10;
                    case 10: return [2 /*return*/];
                }
            });
        }); }, 500);
        web3.eth.subscribe('newBlockHeaders', function (error, result) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!error) {
                    /* mk.controllers.keys.p1 = {
                        RIGHT: 74,
                        LEFT : 71,
                        UP   : 89,
                        DOWN : 72,
                        BLOCK: 16,
                        HP   : 65,
                        LP   : 83,
                        LK   : 68,
                        HK   : 70
                      };
                    
                      mk.controllers.keys.p2 = {
                        RIGHT: 39,
                        LEFT : 37,
                        UP   : 38,
                        DOWN : 40,
                        BLOCK: 17,
                        HP   : 80,
                        LP   : 219,
                        LK   : 221,
                        HK   : 220
                      };*/
                    this._queue.push(result);
                    return [2 /*return*/];
                }
                console.error(error);
                return [2 /*return*/];
            });
        }); });
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
    };
    MyScene.prototype.compressFloat = function (val) {
        var buf = Buffer.alloc(2);
        ieee754.write(buf, val, 0, true, 15, 2);
        return buf;
    };
    MyScene.prototype.extractFloat = function (buf) {
        var num = ieee754.read(buf, 0, true, 15, 2);
        return num;
    };
    MyScene.prototype.compressFloatAng = function (val) {
        var buf = Buffer.alloc(3);
        ieee754.write(buf, val, 0, true, 16, 3);
        return buf;
    };
    MyScene.prototype.extractFloatAng = function (buf) {
        var num = ieee754.read(buf, 0, true, 16, 3);
        return num;
    };
    MyScene.prototype.extractFloatPos = function (buf) {
        var num = ieee754.read(buf, 0, true, 16, 3);
        return num;
    };
    MyScene.prototype.compressFloatPos = function (val) {
        var buf = Buffer.alloc(3);
        ieee754.write(buf, val, 0, true, 16, 3);
        return buf;
    };
    MyScene.prototype.create_screen = function (id, position, rotation) {
        return __awaiter(this, void 0, void 0, function () {
            var videoMat, txt, screen, new_screen, ctx, drawData, ctx1;
            var _this = this;
            return __generator(this, function (_a) {
                videoMat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("textVid_1", this._scene);
                videoMat.backFaceCulling = false;
                videoMat.specularColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"](255, 0, 0);
                videoMat.roughness = 1;
                txt = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["DynamicTexture"]("canvas_sc", {
                    width: 600,
                    height: 400
                }, this._scene);
                screen = this._scene.getMeshByName('canvas_screen');
                new_screen = screen.clone("screen." + id);
                new_screen.checkCollisions = false;
                new_screen.position = position;
                new_screen.rotate(new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0), rotation, 0);
                videoMat.diffuseTexture = txt;
                new_screen.material = videoMat;
                ctx = txt.getContext();
                drawData = function (line, type, data) {
                    try {
                        var w = type * 300;
                        var h = 84;
                        h = line * h + 5;
                        ctx.drawImage(data[0]['img'], 5 + w, 5 + h, 64, 64);
                        ctx.font = '10px niko';
                        ctx.fillStyle = "yellow";
                        ctx.fillText("Strength", 71 + w, 11 + h);
                        ctx.fillStyle = "white";
                        ctx.fillText(data[0]['strength'], 71 + w, 11 + h + 1 + 10);
                        ctx.font = '10px niko';
                        ctx.fillStyle = "green";
                        ctx.fillText("Stemina", 71 + w, 11 + h + 1 + 10 + 2 + 10);
                        ctx.fillStyle = "white";
                        ctx.fillText(data[0]['stemina'], 71 + w, 11 + h + 1 + 10 + 2 + 10 + 1 + 10);
                        ctx.fillStyle = "orange";
                        ctx.font = '8px niko';
                        ctx.fillText("VS", 71 + w + 70, h + 32);
                        ctx.drawImage(data[1]['img'], 160 + w, 5 + h, 64, 64);
                        ctx.font = '10px niko';
                        ctx.fillStyle = "yellow";
                        ctx.fillText("Strength", 160 + 66 + w, 11 + h);
                        ctx.fillStyle = "white";
                        ctx.fillText(data[1]['strength'], 160 + 66 + w, 11 + h + 1 + 10);
                        ctx.font = '10px niko';
                        ctx.fillStyle = "green";
                        ctx.fillText("Stemina", 160 + 66 + w, 11 + h + 1 + 10 + 2 + 10);
                        ctx.fillStyle = "white";
                        ctx.fillText(data[1]['stemina'], 160 + 66 + w, 11 + h + 1 + 10 + 2 + 10 + 1 + 10);
                        ctx.font = '12px niko';
                        ctx.fillStyle = "#00cbeb";
                        var dx = "Block: " + data['blocknum'];
                        ctx.fillText(dx, w + 15, h + 75);
                        if (!type) {
                            ctx.font = '12px niko';
                            ctx.fillStyle = "#ff179a";
                            dx = "Winner: NFT-" + data['winner'];
                            ctx.fillText(dx, w + 150, h + 75);
                        }
                    }
                    catch (e) { }
                };
                ctx1 = this.brdcanvas.getContext();
                this._scene.registerBeforeRender(function () {
                    ctx1.fillStyle = "black";
                    ctx1.fillRect(0, 0, 512, 256);
                    ctx1.font = '60px niko';
                    ctx1.fillStyle = "white";
                    ctx1.fillText("#" + _this._currentBlock, 20, 120);
                    _this.brdcanvas.update();
                    ctx.fillStyle = "black";
                    ctx.fillRect(0, 0, 600, 400);
                    ctx.beginPath();
                    ctx.moveTo(300, 0);
                    ctx.lineTo(300, 400);
                    ctx.strokeStyle = "#1500ff";
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    var i = 0;
                    for (var _i = 0, _a = _this._matchquee; _i < _a.length; _i++) {
                        var b = _a[_i];
                        if (i > 7) {
                            break;
                        }
                        var data = _this._matchdata[b];
                        /*
                        {
                            "p1":m.token0,
                            "p2":m.token1,
                            "img1":d1[0],
                            "img2": d2[0],
                             "strength1":d1[1][0],
                             "strength2":d2[1][0],
                             "stemina1":d1[1][1],
                             "stemina2":d2[1][1]
                        }
                        */
                        drawData(i, 1, {
                            0: {
                                img: data['img1'],
                                stemina: data['stemina1'],
                                strength: data['strength1']
                            },
                            1: {
                                img: data['img2'],
                                stemina: data['stemina2'],
                                strength: data['strength2']
                            },
                            blocknum: b
                        });
                        i++;
                    }
                    i = 0;
                    for (var _b = 0, _c = _this._winnerquee; _b < _c.length; _b++) {
                        var b = _c[_b];
                        if (i > 7) {
                            break;
                        }
                        var data = _this._winnerdata[b];
                        /*
                        {
                            "p1":m.token0,
                            "p2":m.token1,
                            "img1":d1[0],
                            "img2": d2[0],
                             "strength1":d1[1][0],
                             "strength2":d2[1][0],
                             "stemina1":d1[1][1],
                             "stemina2":d2[1][1]
                        }
                        */
                        drawData(i, 0, {
                            0: {
                                img: data['img1'],
                                stemina: data['stemina1'],
                                strength: data['strength1']
                            },
                            1: {
                                img: data['img2'],
                                stemina: data['stemina2'],
                                strength: data['strength2']
                            },
                            blocknum: b,
                            winner: data['winner']
                        });
                        i++;
                    }
                    txt.update();
                });
                return [2 /*return*/];
            });
        });
    };
    MyScene.prototype.getRandomInt = function (max) {
        return Math.floor(Math.random() * max);
    };
    MyScene.prototype.startStreetFightGame = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var myPromise;
            var _this = this;
            return __generator(this, function (_a) {
                myPromise = new Promise(function (myResolve, myReject) {
                    var txt = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["DynamicTexture"]("canvas_" + id, {
                        width: 600,
                        height: 400
                    }, _this._scene);
                    _this._scene.getMaterialByName("textVid").diffuseTexture = txt;
                    var options = {
                        arena: {
                            canvas: txt,
                            arena: 0,
                            width: 600,
                            height: 400
                        },
                        fighters: [{
                                name: 'kano'
                            }, {
                                name: 'subzero'
                            }],
                        callbacks: {
                            attack: function (f, o, l) { }
                        },
                        gameName: 'test',
                        gameType: 'multiplayer'
                    };
                    var gm = fgm();
                    gm.start(options).ready(function () {
                        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _keydown, _keyup, img0, img1;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _keydown = gm.controllers.Multiplayer.prototype._keydown.bind(gm.game);
                                        _keyup = gm.controllers.Multiplayer.prototype._keyup.bind(gm.game);
                                        img0 = new Image();
                                        img0.src = "https://" + this._matchdata[this._matchquee[0]]["uimg1"] + ".ipfs.infura-ipfs.io/";
                                        return [4 /*yield*/, this.loadimage(img0)];
                                    case 1:
                                        _a.sent();
                                        img1 = new Image();
                                        img1.src = "https://" + this._matchdata[this._matchquee[0]]["uimg2"] + ".ipfs.infura-ipfs.io/";
                                        return [4 /*yield*/, this.loadimage(img1)];
                                    case 2:
                                        _a.sent();
                                        setTimeout(function () {
                                            /*{
                                                "p1": m.token0,
                                                "p2": m.token1,
                                                "img1": img1,
                                                "img2": img2,
                                                "uimg1": d1[0],
                                                "uimg2": d2[0],
                                                "strength1": d1[1][0],
                                                "strength2": d2[1][0],
                                                "stemina1": d1[1][1],
                                                "stemina2": d2[1][1]
                                            }*/
                                            _this._matches[id] = {
                                                gm: gm,
                                                canvas: txt,
                                                0: {
                                                    strength: _this._matchdata[_this._matchquee[0]]["strength1"],
                                                    damage: 0,
                                                    stemina: _this._matchdata[_this._matchquee[0]]["stemina1"]
                                                },
                                                1: {
                                                    strength: _this._matchdata[_this._matchquee[0]]["strength2"],
                                                    damage: 0,
                                                    stemina: _this._matchdata[_this._matchquee[0]]["stemina2"]
                                                },
                                                finished: false
                                            };
                                            myResolve();
                                            _this._scene.registerBeforeRender(function () {
                                                var ctx = _this._matches[id].canvas.getContext();
                                                ctx.font = '14px niko';
                                                ctx.fillStyle = "red";
                                                ctx.fillText("Damage:", 376, 50);
                                                ctx.fillText("Damage:", 104, 50);
                                                ctx.fillStyle = "white";
                                                ctx.fillText(_this._matches[id][0].damage, 189, 50);
                                                ctx.fillText(_this._matches[id][1].damage, 461, 50);
                                                ctx.fillStyle = "yellow";
                                                ctx.fillText("Strength:", 376, 70);
                                                ctx.fillText("Strength:", 104, 70);
                                                ctx.fillStyle = "white";
                                                ctx.fillText(_this._matches[id][0].strength, 209, 70);
                                                ctx.fillText(_this._matches[id][1].strength, 481, 70);
                                                ctx.fillStyle = "green";
                                                ctx.fillText("Stemina:", 376, 90);
                                                ctx.fillText("Stemina:", 104, 90);
                                                ctx.fillStyle = "white";
                                                ctx.fillText(_this._matches[id][0].stemina, 199, 90);
                                                ctx.fillText(_this._matches[id][1].stemina, 471, 90);
                                                ctx.drawImage(img0, 0, 20, 96, 96);
                                                ctx.drawImage(img1, 510, 20, 96, 96);
                                                _this._matches[id].canvas.update();
                                            });
                                        }, 1500);
                                        /*  setTimeout(()=>{
                                              gm.fighters.Fighter.prototype.setMove.bind(gm.game.fighters[0])("fall")
                    
                                              gm.fighters.Fighter.prototype.setMove.bind(gm.game.fighters[1])("win")
                                          },1500)*/
                                        _keydown(74);
                                        _keydown(89);
                                        _keyup(89);
                                        _keyup(74);
                                        _keydown(37);
                                        _keydown(38);
                                        _keyup(38);
                                        _keyup(37);
                                        return [2 /*return*/];
                                }
                            });
                        }); }, 1000);
                    });
                });
                return [2 /*return*/, myPromise];
            });
        });
    };
    MyScene.prototype.test = function () {
        return __awaiter(this, void 0, void 0, function () {
            var videoMat, screen, txt;
            return __generator(this, function (_a) {
                this.create_screen(0, new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, -0.3, 16), Math.PI);
                videoMat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("textVid", this._scene);
                videoMat.backFaceCulling = false;
                videoMat.specularColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"](255, 0, 0);
                videoMat.roughness = 1;
                screen = this._scene.getMeshByName("canvas_screen");
                screen.checkCollisions = false;
                screen.material = videoMat;
                txt = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["DynamicTexture"]("canvas_11", {
                    width: 600,
                    height: 400
                }, this._scene);
                videoMat.diffuseTexture = txt;
                this.mainCanvas = txt;
                _IdleCanvas__WEBPACK_IMPORTED_MODULE_8__["start"](this.mainCanvas.getContext(), this.mainCanvas);
                return [2 /*return*/];
            });
        });
    };
    MyScene.prototype.createCC = function () {
        return __awaiter(this, void 0, void 0, function () {
            var agMap, allAGs, i;
            return __generator(this, function (_a) {
                agMap = {};
                allAGs = this._scene.animationGroups;
                for (i = 0; i < allAGs.length; i++) {
                    agMap[allAGs[i].name] = allAGs[i];
                }
                //allAGs[0].stop();
                this._cc = new _CharacterController__WEBPACK_IMPORTED_MODULE_2__["CharacterController"](this._player, this._camera, this._scene);
                this._cc.setFaceForward(true);
                this._cc.setMode(0);
                this._cc.setTurnSpeed(45);
                this._cc.setCameraTarget(new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1.5, 0));
                this._cc.setNoFirstPerson(false);
                this._cc.setStepOffset(0.4);
                this._cc.setSlopeLimit(30, 60);
                this._cc.start();
                return [2 /*return*/];
            });
        });
    };
    MyScene.prototype.get_nft = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var query, nfts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__["gql"])(templateObject_3 || (templateObject_3 = __makeTemplateObject(["{nfts(where: {id:", " }) {\n            uri\n            power\n          }}\n        "], ["{nfts(where: {id:", " }) {\n            uri\n            power\n          }}\n        "])), id);
                        return [4 /*yield*/, Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__["request"])('https://api.thegraph.com/subgraphs/name/harshu4/metabulls', query)];
                    case 1:
                        nfts = _a.sent();
                        try {
                            return [2 /*return*/, [nfts['nfts'][0]['uri'],
                                    [Number(nfts['nfts'][0]['power'][0]), Number(nfts['nfts'][0]['power'][1])], id
                                ]];
                        }
                        catch (e) {
                            return [2 /*return*/, ["/temp/0.svg", [100, 200, 50].slice(0, 2)]];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyScene.prototype.get_my_details = function () {
        return __awaiter(this, void 0, void 0, function () {
            var adrs, query, data, dmg, _i, _a, n, y, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 8, , 9]);
                        return [4 /*yield*/, web3.eth.getAccounts()];
                    case 1:
                        adrs = _b.sent();
                        query = Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__["gql"])(templateObject_4 || (templateObject_4 = __makeTemplateObject(["{\n            users(where: {id: ", "}){\n                    nftlist {\n                        id\n                        uri\n                    }\n                    dmg\n                }\n            }\n        "], ["{\n            users(where: {id: ", "}){\n                    nftlist {\n                        id\n                        uri\n                    }\n                    dmg\n                }\n            }\n        "])), JSON.stringify(adrs[0].toLowerCase()));
                        this.mynfts = [];
                        return [4 /*yield*/, Object(graphql_request__WEBPACK_IMPORTED_MODULE_7__["request"])('https://api.thegraph.com/subgraphs/name/harshu4/metabulls', query)];
                    case 2:
                        data = _b.sent();
                        console.log(JSON.stringify(data));
                        if (!(data['users'].length > 0)) return [3 /*break*/, 7];
                        dmg = data['users'][0]['dmg'];
                        if (dmg) {
                            $("#dmgkt").text((Number(dmg) / (Math.pow(10, 18))).toFixed(0));
                        }
                        _i = 0, _a = data['users'][0]['nftlist'];
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        n = _a[_i];
                        return [4 /*yield*/, this.get_nft(n['id'])
                            //console.log(y)
                        ];
                    case 4:
                        y = _b.sent();
                        //console.log(y)
                        this.mynfts.push(y);
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6:
                        this.uIkit();
                        _b.label = 7;
                    case 7: return [3 /*break*/, 9];
                    case 8:
                        e_2 = _b.sent();
                        console.log("I am in error");
                        return [3 /*break*/, 9];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    MyScene.prototype.relist_match = function () {
        var s = '';
        for (var _i = 0, _a = this._matchquee; _i < _a.length; _i++) {
            var b = _a[_i];
            /*
                  {
                      "p1":m.token0,
                      "p2":m.token1,
                      "img1":d1[0],
                      "img2": d2[0],
                       "strength1":d1[1][0],
                       "strength2":d2[1][0],
                       "stemina1":d1[1][1],
                       "stemina2":d2[1][1]
                  }
                  */
            var mdata = this._matchdata[b];
            var c = "<div style=\"display: flex;flex-direction: column;\">\n                <div style=\"display: flex; justify-content: space-evenly;\">\n                <img draggable='false' src=\"https://" + mdata['uimg1'] + ".ipfs.infura-ipfs.io/\"  height=\"48\" width=\"48\">\n                <span class=\"stext\" style=\"align-self: center;color: red\">vs</span>\n                <img draggable='false' src=\"https://" + mdata['uimg2'] + ".ipfs.infura-ipfs.io/\"  height=\"48\" width=\"48\">\n                </div>\n                <div style=\"display: flex; justify-content: space-around;\">\n                <div style=\"display: flex;flex-direction: column;\">\n                    <span style=\"font-size: 12px;\"  class=\"strength\">Strength: <span style=\"font-size: 12px;color: black\"  class=\"stext\">" + mdata['strength1'] + "</span></span>\n                    <span  style=\"font-size: 12px;\" class=\"stemina\">Stemina: <span  style=\"font-size: 12px;color: black\"  class=\"stext\">" + mdata['stemina1'] + "</span></span>\n                </div>\n                <div style=\"display: flex;flex-direction: column;\">\n                    <span style=\"font-size: 12px;\" class=\"strength\">Strength: <span  style=\"font-size: 12px;color: black\" class=\"stext\">" + mdata['strength2'] + "</span></span>\n                    <span   style=\"font-size: 12px;\" class=\"stemina\">Stemina: <span  style=\"font-size: 12px;color: black\" class=\"stext\">" + mdata['stemina2'] + "</span></span>\n                </div>\n                </div>\n                <div style=\"display: flex;justify-content: space-around;margin-top: 12px;\">\n                <div style=\"display: flex;flex-direction: column;\">\n                    <span style=\"font-size: 12px; color:#00cbeb\" class=\"strength\">Block: <span  style=\"font-size: 12px;color: black\" class=\"stext\">" + b + "</span></span>\n                    <!--<span style=\"font-size: 12px; color:#ff179a\" class=\"strength\">NFT-winner: <span  style=\"font-size: 12px;color: black\" class=\"stext\">0</span></span>-->\n                </div>\n                <div>\n                    <button style=\"font-size: 12px;padding: 5px;padding-left: 10px; padding-right: 10px;border-radius: 30px; align-self: center;\" value=\"" + b + "\"  onclick=\"clickme('" + btoa(JSON.stringify(mdata)) + "')\" id=\"bidit_" + b + "\">Bid</button>\n                </div>\n                </div>\n                <div style=\"background-color: rgba(0,0,0,0.6);height: 1px;width: 100%; margin-top:10px\">\n            \n                </div>\n            </div>";
            s += c;
        }
        $("#list").empty();
        $("#list").append(s);
        if ($("#list").is(":visible")) {
            $("#list").hide();
            $("#list").show();
        }
    };
    MyScene.prototype.relist_winner = function () {
        var s = '';
        for (var _i = 0, _a = this._winnerquee; _i < _a.length; _i++) {
            var b = _a[_i];
            /*
                  {
                      "p1":m.token0,
                      "p2":m.token1,
                      "img1":d1[0],
                      "img2": d2[0],
                       "strength1":d1[1][0],
                       "strength2":d2[1][0],
                       "stemina1":d1[1][1],
                       "stemina2":d2[1][1]
                  }
                  */
            var mdata = this._winnerdata[b];
            var c = "<div style=\"display: flex;flex-direction: column;\">\n                <div style=\"display: flex; justify-content: space-evenly;\">\n                <img draggable='false' src=\"https://" + mdata['uimg1'] + ".ipfs.infura-ipfs.io/\"  height=\"48\" width=\"48\">\n                <span class=\"stext\" style=\"align-self: center;color: red\">vs</span>\n                <img draggable='false' src=\"https://" + mdata['uimg2'] + ".ipfs.infura-ipfs.io/\"  height=\"48\" width=\"48\">\n                </div>\n                <div style=\"display: flex; justify-content: space-around;\">\n                <div style=\"display: flex;flex-direction: column;\">\n                    <span style=\"font-size: 12px;\"  class=\"strength\">Strength: <span style=\"font-size: 12px;color: black\"  class=\"stext\">" + mdata['strength1'] + "</span></span>\n                    <span  style=\"font-size: 12px;\" class=\"stemina\">Stemina: <span  style=\"font-size: 12px;color: black\"  class=\"stext\">" + mdata['strength2'] + "</span></span>\n                </div>\n                <div style=\"display: flex;flex-direction: column;\">\n                    <span style=\"font-size: 12px;\" class=\"strength\">Strength: <span  style=\"font-size: 12px;color: black\" class=\"stext\">" + mdata['stemina1'] + "</span></span>\n                    <span   style=\"font-size: 12px;\" class=\"stemina\">Stemina: <span  style=\"font-size: 12px;color: black\" class=\"stext\">" + mdata['stemina2'] + "</span></span>\n                </div>\n                </div>\n                <div style=\"display: flex;justify-content: space-around;margin-top: 12px;\">\n                <div style=\"display: flex;flex-direction: column;\">\n                    <span style=\"font-size: 12px; color:#00cbeb\" class=\"strength\">Block: <span  style=\"font-size: 12px;color: black\" class=\"stext\">" + b + "</span></span>\n                    <span style=\"font-size: 12px; color:#ff179a\" class=\"strength\">NFT-winner: <span  style=\"font-size: 12px;color: black\" class=\"stext\">" + mdata['winner'] + "</span></span>\n                </div>\n                <div>\n                    <button style=\"font-size: 12px;padding: 5px;padding-left: 10px; padding-right: 10px;border-radius: 30px; align-self: center;\" value=\"" + b + "\"  onclick=\"clickmec('" + btoa(JSON.stringify(mdata)) + "')\"  id=\"bidit_" + b + "\">Claim NFT</button>\n                    <button style=\"font-size: 12px;padding: 5px;padding-left: 10px; padding-right: 10px;border-radius: 30px; align-self: center;\" value=\"" + b + "\"  onclick=\"clickmecx('" + btoa(JSON.stringify(mdata)) + "')\"  id=\"bidit_" + b + "\">Claim Bid</button>\n                </div>\n                </div>\n                <div style=\"background-color: rgba(0,0,0,0.6);height: 1px;width: 100%; margin-top:10px\">\n            \n                </div>\n            </div>";
            s += c;
        }
        $("#list1").empty();
        $("#list1").append(s);
        if ($("#list1").is(":visible")) {
            $("#list1").hide();
            $("#list1").show();
        }
    };
    MyScene.prototype.loadimage = function (img) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                img.crossOrigin = "anonymous";
                new Promise(function (myResolve, myReject) {
                    img.onload = function () {
                        myResolve();
                    };
                });
                return [2 /*return*/];
            });
        });
    };
    MyScene.prototype.loadPlayer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var character, _i, _a, m, buf_list, GRAPHQL_ENDPOINT, query, client, self, subscription;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, babylonjs__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].ImportMeshAsync(null, "", "player.glb", this._scene)];
                    case 1:
                        character = _b.sent();
                        this._player = character.meshes[0];
                        for (_i = 0, _a = character.meshes; _i < _a.length; _i++) {
                            m = _a[_i];
                            console.log(m.name);
                            if (m.material) {
                                console.log(m.material.name);
                            }
                        }
                        this._player.rotation = this._player.rotationQuaternion.toEulerAngles();
                        this._player.rotationQuaternion = null;
                        //this._player.skeleton=skl;
                        //skl.enableBlending(0.1);
                        //this._player.rotate(new BABYLON.Vector3(0,1,0),Math.PI,0);
                        //this._player.position.y=2.1;
                        this._player.position.x = this.randomPosition(-9.0, 9.0);
                        this._player.position.z = this.randomPosition(0.0, 13.0);
                        buf_list = [this.compressFloatPos(this._player.position.x), this.compressFloatPos(this._player.position.z)];
                        this._ws.send(Buffer.concat(buf_list));
                        this.drawEllipsoid(this._player, "__ellipsoid__", 1, 8, 8, true);
                        //this._player.setPivotPoint(new BABYLON.Vector3(0, 2, 0));
                        // const mat = new BABYLON.StandardMaterial("playermat");
                        // mat.diffuseTexture = new BABYLON.Texture("https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg");
                        // this._player.material = mat
                        this._player.checkCollisions = true;
                        this._player.ellipsoid = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0.5, 1, 0.5);
                        this._player.ellipsoidOffset = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0.5, 0);
                        window.clickme = function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var plr, amnt, ad, contract;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = JSON.parse(atob(data));
                                        plr = window.prompt("Select Player (0 or 1):");
                                        amnt = window.prompt("Enter Bid Amount: ");
                                        return [4 /*yield*/, window.web3.eth.getAccounts()];
                                    case 1:
                                        ad = _a.sent();
                                        return [4 /*yield*/, new window.web3.eth.Contract(abi, "0xE4c925499c44639CB11122986444AC595f34544D")];
                                    case 2:
                                        contract = _a.sent();
                                        return [4 /*yield*/, contract.methods.PlaceBet(data['id'], Number(plr) ? true : false).send({
                                                from: ad[0],
                                                value: Web3.utils.toWei(amnt, 'ether')
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        window.clickmecx = function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var ad, contract;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = JSON.parse(atob(data));
                                        return [4 /*yield*/, window.web3.eth.getAccounts()];
                                    case 1:
                                        ad = _a.sent();
                                        return [4 /*yield*/, new window.web3.eth.Contract(abi, "0xE4c925499c44639CB11122986444AC595f34544D")];
                                    case 2:
                                        contract = _a.sent();
                                        return [4 /*yield*/, contract.methods.winclaim(data['id']).send({
                                                from: ad[0]
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        window.clickmec = function (data) { return __awaiter(_this, void 0, void 0, function () {
                            var ad, contract;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        data = JSON.parse(atob(data));
                                        return [4 /*yield*/, window.web3.eth.getAccounts()];
                                    case 1:
                                        ad = _a.sent();
                                        return [4 /*yield*/, new window.web3.eth.Contract(abi, "0xE4c925499c44639CB11122986444AC595f34544D")];
                                    case 2:
                                        contract = _a.sent();
                                        if (!(data['addr1'].toLowerCase() == ad[0].toLowerCase())) return [3 /*break*/, 4];
                                        return [4 /*yield*/, contract.methods.claimnft(data['p1'], data['id']).send({
                                                from: ad[0]
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [3 /*break*/, 6];
                                    case 4:
                                        if (!(data['addr2'].toLowerCase() == ad[0].toLowerCase())) return [3 /*break*/, 6];
                                        return [4 /*yield*/, contract.methods.claimnft(data['p2'], data['id']).send({
                                                from: ad[0]
                                            })];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6:
                                        this.get_my_details();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, this.get_my_details()];
                    case 2:
                        _b.sent();
                        this.setHandlerV();
                        GRAPHQL_ENDPOINT = "wss://api.thegraph.com/subgraphs/name/harshu4/metabulls";
                        query = "subscription   {\n            games{\n              id\n              startblock\n              token0\n              token1\n              particiapte0 {\n                id\n              }\n              participate1 {\n                id\n              }\n            }\n          }\n          ";
                        client = new graphql_subscriptions_client__WEBPACK_IMPORTED_MODULE_6__["SubscriptionClient"](GRAPHQL_ENDPOINT, {
                            reconnect: true,
                            lazy: true,
                            connectionCallback: function (error) {
                                error && console.error(error);
                            },
                        });
                        // make the actual request
                        client.request({
                            query: query
                        });
                        self = this;
                        subscription = client
                            .request({
                            query: query
                        })
                            // so lets actually do something with the response
                            .subscribe({
                            next: function (_a) {
                                var data = _a.data;
                                return __awaiter(this, void 0, void 0, function () {
                                    var cb, _i, _b, m, d1, d2, img1, img2;
                                    return __generator(this, function (_c) {
                                        switch (_c.label) {
                                            case 0:
                                                if (!data) return [3 /*break*/, 9];
                                                return [4 /*yield*/, web3.eth.getBlockNumber()];
                                            case 1:
                                                cb = _c.sent();
                                                console.log("We got something!", data);
                                                _i = 0, _b = data["games"];
                                                _c.label = 2;
                                            case 2:
                                                if (!(_i < _b.length)) return [3 /*break*/, 8];
                                                m = _b[_i];
                                                if (m.startblock <= cb) {
                                                    return [3 /*break*/, 7];
                                                }
                                                return [4 /*yield*/, self.get_nft(m.token0)];
                                            case 3:
                                                d1 = _c.sent();
                                                return [4 /*yield*/, self.get_nft(m.token1)];
                                            case 4:
                                                d2 = _c.sent();
                                                img1 = new Image();
                                                img1.src = "https://" + d1[0] + ".ipfs.infura-ipfs.io/";
                                                return [4 /*yield*/, self.loadimage(img1)];
                                            case 5:
                                                _c.sent();
                                                img2 = new Image();
                                                img2.src = "https://" + d2[0] + ".ipfs.infura-ipfs.io/";
                                                return [4 /*yield*/, self.loadimage(img2)];
                                            case 6:
                                                _c.sent();
                                                self._matchquee.push(Number(m.startblock));
                                                self._matchdata[Number(m.startblock)] = {
                                                    "p1": m.token0,
                                                    "p2": m.token1,
                                                    "img1": img1,
                                                    "img2": img2,
                                                    "uimg1": d1[0],
                                                    "uimg2": d2[0],
                                                    "strength1": d1[1][0],
                                                    "strength2": d2[1][0],
                                                    "stemina1": d1[1][1],
                                                    "stemina2": d2[1][1],
                                                    "id": m.id,
                                                    "addr1": m['particiapte0']['id'],
                                                    "addr2": m['participate1']['id']
                                                };
                                                self._matchquee.sort(function (a, b) {
                                                    return a - b;
                                                });
                                                self._matchquee = self._matchquee.filter(function (item, pos) {
                                                    return self._matchquee.indexOf(item) == pos;
                                                });
                                                _c.label = 7;
                                            case 7:
                                                _i++;
                                                return [3 /*break*/, 2];
                                            case 8:
                                                self.relist_match();
                                                _c.label = 9;
                                            case 9: return [2 /*return*/];
                                        }
                                    });
                                });
                            },
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MyScene.prototype.randomPosition = function (x, y) {
        return Number((Math.random() * (x - y) + y).toFixed(4));
    };
    MyScene.prototype.drawEllipsoid = function (mesh, name, x, y, z, hide) {
        if (hide === void 0) { hide = false; }
        mesh.computeWorldMatrix(true);
        if (hide) {
            var ellipsoidMat = mesh.getScene().getMaterialByName("__ellipsoidMat__h");
            if (!ellipsoidMat) {
                ellipsoidMat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("__ellipsoidMat__h", mesh.getScene());
                ellipsoidMat.alpha = 0;
            }
        }
        else {
            var ellipsoidMat = mesh.getScene().getMaterialByName("__ellipsoidMat__");
            if (!ellipsoidMat) {
                ellipsoidMat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("__ellipsoidMat__", mesh.getScene());
                ellipsoidMat.wireframe = true;
                ellipsoidMat.emissiveColor = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"].Green();
                ellipsoidMat.specularColor = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"].Black();
            }
        }
        var ellipsoid = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Mesh"].CreateSphere(name, 9, 1, mesh.getScene());
        ellipsoid.scaling = mesh.ellipsoid.clone();
        ellipsoid.scaling.y *= x;
        ellipsoid.scaling.x *= y;
        ellipsoid.scaling.z *= z;
        ellipsoid.material = ellipsoidMat;
        ellipsoid.parent = mesh;
        ellipsoid.computeWorldMatrix(true);
        return ellipsoid;
    };
    MyScene.prototype.createRemotePlayer = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var rp;
            return __generator(this, function (_a) {
                rp = this._player.clone("rp_" + id);
                rp.checkCollisions = false;
                this._player.checkCollisions = false;
                rp.position.y = -1.6;
                rp.ellipsoid = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0.5, 1, 0.5);
                rp.ellipsoidOffset = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0.5, 0);
                this._playerList[id] = new _RemoteCharacterController__WEBPACK_IMPORTED_MODULE_3__["RemoteCharacterController"](rp, this._scene, id, this._roomId);
                if (this._rcolor.hasOwnProperty(id)) {
                    this._playerList[id].setColor(this._rcolor[id]);
                }
                this._playerList[id].start();
                return [2 /*return*/];
            });
        });
    };
    MyScene.prototype.loadMeshes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var Icosphere, _i, _a, m, Icosphere, _b, _c, m, Icosphere, _d, _e, m, polygon, anim1, Icosphere, _f, _g, m, groundWidth, groundHeight, ground, txt, bmat, b, pbr_stage0, pbr_stage1, stage_mesh_0, stage_mesh_1, cylinder0, glass, gl;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0: return [4 /*yield*/, babylonjs__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].ImportMeshAsync(null, "", "dome.glb", this._scene)];
                    case 1:
                        Icosphere = _h.sent();
                        for (_i = 0, _a = Icosphere.meshes; _i < _a.length; _i++) {
                            m = _a[_i];
                            if (m.name == "screen") {
                                m.dispose();
                                continue;
                            }
                            m.checkCollisions = true;
                        }
                        return [4 /*yield*/, babylonjs__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].ImportMeshAsync(null, "", "screen.glb", this._scene)];
                    case 2:
                        Icosphere = _h.sent();
                        for (_b = 0, _c = Icosphere.meshes; _b < _c.length; _b++) {
                            m = _c[_b];
                            console.log(m.name);
                        }
                        return [4 /*yield*/, babylonjs__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].ImportMeshAsync(null, "", "clover.glb", this._scene)];
                    case 3:
                        Icosphere = _h.sent();
                        for (_d = 0, _e = Icosphere.meshes; _d < _e.length; _d++) {
                            m = _e[_d];
                            m.checkCollisions = false;
                        }
                        polygon = Icosphere.meshes[0];
                        polygon.scaling = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](3, 3, 3);
                        polygon.position.z = 5;
                        polygon.scaling = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](3, 3, 3);
                        anim1 = Icosphere.animationGroups[1];
                        anim1.start(true, 1.0, anim1.from, anim1.to, false);
                        return [4 /*yield*/, babylonjs__WEBPACK_IMPORTED_MODULE_0__["SceneLoader"].ImportMeshAsync(null, "", "digital_board.glb", this._scene)];
                    case 4:
                        Icosphere = _h.sent();
                        for (_f = 0, _g = Icosphere.meshes; _f < _g.length; _f++) {
                            m = _g[_f];
                            console.log(m.name);
                            if (m.material && m.material.name == "projection") {
                            }
                        }
                        groundWidth = 2;
                        groundHeight = 0.5;
                        ground = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateGround("ground1", {
                            width: groundWidth,
                            height: groundHeight,
                            subdivisions: 25
                        }, this._scene);
                        txt = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["DynamicTexture"]("canvas_brd", {
                            width: 512,
                            height: 256
                        }, this._scene);
                        bmat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]('ww', this._scene);
                        bmat.diffuseTexture = txt;
                        ground.material = bmat;
                        this.brdcanvas = txt;
                        b = Icosphere.meshes[0];
                        console.log(b.getBoundingInfo());
                        b.position = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 2, 16.5);
                        ground.position = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 2, 16.45);
                        ground.rotate(new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](1, 0, 0), Math.PI / 2, 0);
                        ground.rotate(new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 1, 0), -Math.PI, 0);
                        ground.rotate(new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0, 1), -Math.PI, 0);
                        pbr_stage0 = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"]("pbr", this._scene);
                        pbr_stage1 = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"]("pbr", this._scene);
                        stage_mesh_0 = this._scene.getMeshByName("stage_primitive0");
                        stage_mesh_1 = this._scene.getMeshByName("stage_primitive1");
                        cylinder0 = this._scene.getMeshByName("Cylinder_primitive0");
                        stage_mesh_0.material = pbr_stage0;
                        stage_mesh_1.material = pbr_stage1;
                        pbr_stage0.metallic = 1.0;
                        pbr_stage0.roughness = 0.2;
                        pbr_stage1.metallic = 1.0;
                        pbr_stage1.roughness = 0.1;
                        pbr_stage0.subSurface.isRefractionEnabled = true;
                        pbr_stage1.subSurface.isRefractionEnabled = true;
                        glass = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["PBRMaterial"]("glass", this._scene);
                        glass.indexOfRefraction = 0.52;
                        glass.alpha = 0.1;
                        glass.directIntensity = 0.0;
                        glass.environmentIntensity = 0.7;
                        glass.cameraExposure = 0.66;
                        glass.cameraContrast = 1.66;
                        glass.microSurface = 1;
                        glass.subSurface.isRefractionEnabled = true;
                        glass.reflectivityColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"](0.2, 0.2, 0.2);
                        glass.albedoColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"](0.95, 0.95, 0.95);
                        cylinder0.material = glass;
                        gl = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["GlowLayer"]("glow", this._scene);
                        gl.addIncludedOnlyMesh(this._scene.getMeshByName("Cylinder.003"));
                        gl.addIncludedOnlyMesh(this._scene.getMeshByName("Cylinder.007"));
                        gl.addIncludedOnlyMesh(this._scene.getMeshByName("Cylinder.008"));
                        gl.addIncludedOnlyMesh(this._scene.getMeshByName("Cylinder.009"));
                        gl.addIncludedOnlyMesh(this._scene.getMeshByName("Cylinder.010"));
                        gl.intensity = 0.1;
                        return [2 /*return*/];
                }
            });
        });
    };
    MyScene.prototype.doRender = function () {
        var _this = this;
        // The canvas/window resize event handler.
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    return MyScene;
}());
/* harmony default export */ __webpack_exports__["default"] = (MyScene);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;


/***/ })

/******/ });
//# sourceMappingURL=app.js.map