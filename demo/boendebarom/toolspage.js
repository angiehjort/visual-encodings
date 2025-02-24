// undefined v1.0.0 Copyright 2025 Gapminder Foundation
(function () {
'use strict';




var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global$p =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

var objectGetOwnPropertyDescriptor = {};

var fails$p = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

var fails$o = fails$p;

// Detect IE8's incomplete defineProperty implementation
var descriptors = !fails$o(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});

var fails$n = fails$p;

var functionBindNative = !fails$n(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});

var NATIVE_BIND$2 = functionBindNative;

var call$G = Function.prototype.call;

var functionCall = NATIVE_BIND$2 ? call$G.bind(call$G) : function () {
  return call$G.apply(call$G, arguments);
};

var objectPropertyIsEnumerable = {};

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$2(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;

var createPropertyDescriptor$7 = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var NATIVE_BIND$1 = functionBindNative;

var FunctionPrototype$1 = Function.prototype;
var call$F = FunctionPrototype$1.call;
var uncurryThisWithBind = NATIVE_BIND$1 && FunctionPrototype$1.bind.bind(call$F, call$F);

var functionUncurryThis = NATIVE_BIND$1 ? uncurryThisWithBind : function (fn) {
  return function () {
    return call$F.apply(fn, arguments);
  };
};

var uncurryThis$B = functionUncurryThis;

var toString$d = uncurryThis$B({}.toString);
var stringSlice$5 = uncurryThis$B(''.slice);

var classofRaw$2 = function (it) {
  return stringSlice$5(toString$d(it), 8, -1);
};

var uncurryThis$A = functionUncurryThis;
var fails$m = fails$p;
var classof$d = classofRaw$2;

var $Object$4 = Object;
var split = uncurryThis$A(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails$m(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object$4('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof$d(it) == 'String' ? split(it, '') : $Object$4(it);
} : $Object$4;

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
var isNullOrUndefined$7 = function (it) {
  return it === null || it === undefined;
};

var isNullOrUndefined$6 = isNullOrUndefined$7;

var $TypeError$k = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible$8 = function (it) {
  if (isNullOrUndefined$6(it)) throw $TypeError$k("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings
var IndexedObject$3 = indexedObject;
var requireObjectCoercible$7 = requireObjectCoercible$8;

var toIndexedObject$9 = function (it) {
  return IndexedObject$3(requireObjectCoercible$7(it));
};

var documentAll$2 = typeof document == 'object' && document.all;

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
var IS_HTMLDDA = typeof documentAll$2 == 'undefined' && documentAll$2 !== undefined;

var documentAll_1 = {
  all: documentAll$2,
  IS_HTMLDDA: IS_HTMLDDA
};

var $documentAll$1 = documentAll_1;

var documentAll$1 = $documentAll$1.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
var isCallable$r = $documentAll$1.IS_HTMLDDA ? function (argument) {
  return typeof argument == 'function' || argument === documentAll$1;
} : function (argument) {
  return typeof argument == 'function';
};

var isCallable$q = isCallable$r;
var $documentAll = documentAll_1;

var documentAll = $documentAll.all;

var isObject$h = $documentAll.IS_HTMLDDA ? function (it) {
  return typeof it == 'object' ? it !== null : isCallable$q(it) || it === documentAll;
} : function (it) {
  return typeof it == 'object' ? it !== null : isCallable$q(it);
};

var global$o = global$p;
var isCallable$p = isCallable$r;

var aFunction = function (argument) {
  return isCallable$p(argument) ? argument : undefined;
};

var getBuiltIn$f = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global$o[namespace]) : global$o[namespace] && global$o[namespace][method];
};

var uncurryThis$z = functionUncurryThis;

var objectIsPrototypeOf = uncurryThis$z({}.isPrototypeOf);

var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

var global$n = global$p;
var userAgent = engineUserAgent;

var process$1 = global$n.process;
var Deno$1 = global$n.Deno;
var versions = process$1 && process$1.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

var engineV8Version = version;

/* eslint-disable es/no-symbol -- required for testing */

var V8_VERSION$1 = engineV8Version;
var fails$l = fails$p;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails$l(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});

/* eslint-disable es/no-symbol -- required for testing */

var NATIVE_SYMBOL$2 = symbolConstructorDetection;

var useSymbolAsUid = NATIVE_SYMBOL$2
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';

var getBuiltIn$e = getBuiltIn$f;
var isCallable$o = isCallable$r;
var isPrototypeOf$8 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;

var $Object$3 = Object;

var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn$e('Symbol');
  return isCallable$o($Symbol) && isPrototypeOf$8($Symbol.prototype, $Object$3(it));
};

var $String$5 = String;

var tryToString$5 = function (argument) {
  try {
    return $String$5(argument);
  } catch (error) {
    return 'Object';
  }
};

var isCallable$n = isCallable$r;
var tryToString$4 = tryToString$5;

var $TypeError$j = TypeError;

// `Assert: IsCallable(argument) is true`
var aCallable$q = function (argument) {
  if (isCallable$n(argument)) return argument;
  throw $TypeError$j(tryToString$4(argument) + ' is not a function');
};

var aCallable$p = aCallable$q;
var isNullOrUndefined$5 = isNullOrUndefined$7;

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
var getMethod$e = function (V, P) {
  var func = V[P];
  return isNullOrUndefined$5(func) ? undefined : aCallable$p(func);
};

var call$E = functionCall;
var isCallable$m = isCallable$r;
var isObject$g = isObject$h;

var $TypeError$i = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
var ordinaryToPrimitive$1 = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable$m(fn = input.toString) && !isObject$g(val = call$E(fn, input))) return val;
  if (isCallable$m(fn = input.valueOf) && !isObject$g(val = call$E(fn, input))) return val;
  if (pref !== 'string' && isCallable$m(fn = input.toString) && !isObject$g(val = call$E(fn, input))) return val;
  throw $TypeError$i("Can't convert object to primitive value");
};

var sharedExports = {};
var shared$5 = {
  get exports(){ return sharedExports; },
  set exports(v){ sharedExports = v; },
};

var isPure = false;

var global$m = global$p;

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$6 = Object.defineProperty;

var defineGlobalProperty$3 = function (key, value) {
  try {
    defineProperty$6(global$m, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global$m[key] = value;
  } return value;
};

var global$l = global$p;
var defineGlobalProperty$2 = defineGlobalProperty$3;

var SHARED = '__core-js_shared__';
var store$3 = global$l[SHARED] || defineGlobalProperty$2(SHARED, {});

var sharedStore = store$3;

var store$2 = sharedStore;

(shared$5.exports = function (key, value) {
  return store$2[key] || (store$2[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.28.0',
  mode: 'global',
  copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.28.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});

var requireObjectCoercible$6 = requireObjectCoercible$8;

var $Object$2 = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
var toObject$c = function (argument) {
  return $Object$2(requireObjectCoercible$6(argument));
};

var uncurryThis$y = functionUncurryThis;
var toObject$b = toObject$c;

var hasOwnProperty = uncurryThis$y({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$b(it), key);
};

var uncurryThis$x = functionUncurryThis;

var id = 0;
var postfix = Math.random();
var toString$c = uncurryThis$x(1.0.toString);

var uid$4 = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$c(++id + postfix, 36);
};

var global$k = global$p;
var shared$4 = sharedExports;
var hasOwn$h = hasOwnProperty_1;
var uid$3 = uid$4;
var NATIVE_SYMBOL$1 = symbolConstructorDetection;
var USE_SYMBOL_AS_UID = useSymbolAsUid;

var Symbol$1 = global$k.Symbol;
var WellKnownSymbolsStore = shared$4('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$3;

var wellKnownSymbol$v = function (name) {
  if (!hasOwn$h(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL$1 && hasOwn$h(Symbol$1, name)
      ? Symbol$1[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};

var call$D = functionCall;
var isObject$f = isObject$h;
var isSymbol$1 = isSymbol$2;
var getMethod$d = getMethod$e;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$u = wellKnownSymbol$v;

var $TypeError$h = TypeError;
var TO_PRIMITIVE = wellKnownSymbol$u('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
var toPrimitive$2 = function (input, pref) {
  if (!isObject$f(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$d(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call$D(exoticToPrim, input, pref);
    if (!isObject$f(result) || isSymbol$1(result)) return result;
    throw $TypeError$h("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};

var toPrimitive$1 = toPrimitive$2;
var isSymbol = isSymbol$2;

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
var toPropertyKey$4 = function (argument) {
  var key = toPrimitive$1(argument, 'string');
  return isSymbol(key) ? key : key + '';
};

var global$j = global$p;
var isObject$e = isObject$h;

var document$1 = global$j.document;
// typeof document.createElement is 'object' in old IE
var EXISTS$1 = isObject$e(document$1) && isObject$e(document$1.createElement);

var documentCreateElement$1 = function (it) {
  return EXISTS$1 ? document$1.createElement(it) : {};
};

var DESCRIPTORS$c = descriptors;
var fails$k = fails$p;
var createElement = documentCreateElement$1;

// Thanks to IE8 for its funny defineProperty
var ie8DomDefine = !DESCRIPTORS$c && !fails$k(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var DESCRIPTORS$b = descriptors;
var call$C = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$6 = createPropertyDescriptor$7;
var toIndexedObject$8 = toIndexedObject$9;
var toPropertyKey$3 = toPropertyKey$4;
var hasOwn$g = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$b ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$8(O);
  P = toPropertyKey$3(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn$g(O, P)) return createPropertyDescriptor$6(!call$C(propertyIsEnumerableModule.f, O, P), O[P]);
};

var objectDefineProperty = {};

var DESCRIPTORS$a = descriptors;
var fails$j = fails$p;

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
var v8PrototypeDefineBug = DESCRIPTORS$a && fails$j(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});

var isObject$d = isObject$h;

var $String$4 = String;
var $TypeError$g = TypeError;

// `Assert: Type(argument) is Object`
var anObject$x = function (argument) {
  if (isObject$d(argument)) return argument;
  throw $TypeError$g($String$4(argument) + ' is not an object');
};

var DESCRIPTORS$9 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$w = anObject$x;
var toPropertyKey$2 = toPropertyKey$4;

var $TypeError$f = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE$1 = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
objectDefineProperty.f = DESCRIPTORS$9 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$w(O);
  P = toPropertyKey$2(P);
  anObject$w(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject$w(O);
  P = toPropertyKey$2(P);
  anObject$w(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError$f('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var DESCRIPTORS$8 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor$5 = createPropertyDescriptor$7;

var createNonEnumerableProperty$c = DESCRIPTORS$8 ? function (object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor$5(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var makeBuiltInExports = {};
var makeBuiltIn$3 = {
  get exports(){ return makeBuiltInExports; },
  set exports(v){ makeBuiltInExports = v; },
};

var DESCRIPTORS$7 = descriptors;
var hasOwn$f = hasOwnProperty_1;

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS$7 && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn$f(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$7 || (DESCRIPTORS$7 && getDescriptor(FunctionPrototype, 'name').configurable));

var functionName = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};

var uncurryThis$w = functionUncurryThis;
var isCallable$l = isCallable$r;
var store$1 = sharedStore;

var functionToString = uncurryThis$w(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable$l(store$1.inspectSource)) {
  store$1.inspectSource = function (it) {
    return functionToString(it);
  };
}

var inspectSource$3 = store$1.inspectSource;

var global$i = global$p;
var isCallable$k = isCallable$r;

var WeakMap$1 = global$i.WeakMap;

var weakMapBasicDetection = isCallable$k(WeakMap$1) && /native code/.test(String(WeakMap$1));

var shared$3 = sharedExports;
var uid$2 = uid$4;

var keys$1 = shared$3('keys');

var sharedKey$3 = function (key) {
  return keys$1[key] || (keys$1[key] = uid$2(key));
};

var hiddenKeys$4 = {};

var NATIVE_WEAK_MAP = weakMapBasicDetection;
var global$h = global$p;
var isObject$c = isObject$h;
var createNonEnumerableProperty$b = createNonEnumerableProperty$c;
var hasOwn$e = hasOwnProperty_1;
var shared$2 = sharedStore;
var sharedKey$2 = sharedKey$3;
var hiddenKeys$3 = hiddenKeys$4;

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError$3 = global$h.TypeError;
var WeakMap = global$h.WeakMap;
var set, get, has$6;

var enforce = function (it) {
  return has$6(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject$c(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$3('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared$2.state) {
  var store = shared$2.state || (shared$2.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has$6 = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey$2('state');
  hiddenKeys$3[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn$e(it, STATE)) throw TypeError$3(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$b(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn$e(it, STATE) ? it[STATE] : {};
  };
  has$6 = function (it) {
    return hasOwn$e(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$6,
  enforce: enforce,
  getterFor: getterFor
};

var uncurryThis$v = functionUncurryThis;
var fails$i = fails$p;
var isCallable$j = isCallable$r;
var hasOwn$d = hasOwnProperty_1;
var DESCRIPTORS$6 = descriptors;
var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
var inspectSource$2 = inspectSource$3;
var InternalStateModule$7 = internalState;

var enforceInternalState$1 = InternalStateModule$7.enforce;
var getInternalState$6 = InternalStateModule$7.get;
var $String$3 = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty$5 = Object.defineProperty;
var stringSlice$4 = uncurryThis$v(''.slice);
var replace$3 = uncurryThis$v(''.replace);
var join$1 = uncurryThis$v([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS$6 && !fails$i(function () {
  return defineProperty$5(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn$2 = makeBuiltIn$3.exports = function (value, name, options) {
  if (stringSlice$4($String$3(name), 0, 7) === 'Symbol(') {
    name = '[' + replace$3($String$3(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn$d(value, 'name') || (CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name)) {
    if (DESCRIPTORS$6) defineProperty$5(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn$d(options, 'arity') && value.length !== options.arity) {
    defineProperty$5(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn$d(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS$6) defineProperty$5(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState$1(value);
  if (!hasOwn$d(state, 'source')) {
    state.source = join$1(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn$2(function toString() {
  return isCallable$j(this) && getInternalState$6(this).source || inspectSource$2(this);
}, 'toString');

var isCallable$i = isCallable$r;
var definePropertyModule$3 = objectDefineProperty;
var makeBuiltIn$1 = makeBuiltInExports;
var defineGlobalProperty$1 = defineGlobalProperty$3;

var defineBuiltIn$9 = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable$i(value)) makeBuiltIn$1(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty$1(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule$3.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};

var objectGetOwnPropertyNames = {};

var ceil = Math.ceil;
var floor$1 = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
var mathTrunc = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor$1 : ceil)(n);
};

var trunc = mathTrunc;

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
var toIntegerOrInfinity$e = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};

var toIntegerOrInfinity$d = toIntegerOrInfinity$e;

var max$4 = Math.max;
var min$4 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex$3 = function (index, length) {
  var integer = toIntegerOrInfinity$d(index);
  return integer < 0 ? max$4(integer + length, 0) : min$4(integer, length);
};

var toIntegerOrInfinity$c = toIntegerOrInfinity$e;

var min$3 = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
var toLength$3 = function (argument) {
  return argument > 0 ? min$3(toIntegerOrInfinity$c(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var toLength$2 = toLength$3;

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
var lengthOfArrayLike$g = function (obj) {
  return toLength$2(obj.length);
};

var toIndexedObject$7 = toIndexedObject$9;
var toAbsoluteIndex$2 = toAbsoluteIndex$3;
var lengthOfArrayLike$f = lengthOfArrayLike$g;

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod$3 = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject$7($this);
    var length = lengthOfArrayLike$f(O);
    var index = toAbsoluteIndex$2(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$3(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$3(false)
};

var uncurryThis$u = functionUncurryThis;
var hasOwn$c = hasOwnProperty_1;
var toIndexedObject$6 = toIndexedObject$9;
var indexOf$2 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;

var push$8 = uncurryThis$u([].push);

var objectKeysInternal = function (object, names) {
  var O = toIndexedObject$6(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$c(hiddenKeys$2, key) && hasOwn$c(O, key) && push$8(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn$c(O, key = names[i++])) {
    ~indexOf$2(result, key) || push$8(result, key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys$3 = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;

var hiddenKeys$1 = enumBugKeys$2.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};

var objectGetOwnPropertySymbols = {};

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;

var getBuiltIn$d = getBuiltIn$f;
var uncurryThis$t = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$v = anObject$x;

var concat = uncurryThis$t([].concat);

// all object keys, includes non-enumerable and symbols
var ownKeys$1 = getBuiltIn$d('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject$v(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};

var hasOwn$b = hasOwnProperty_1;
var ownKeys = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$2 = objectDefineProperty;

var copyConstructorProperties$3 = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule$2.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn$b(target, key) && !(exceptions && hasOwn$b(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};

var fails$h = fails$p;
var isCallable$h = isCallable$r;

var replacement = /#|\.prototype\./;

var isForced$2 = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable$h(detection) ? fails$h(detection)
    : !!detection;
};

var normalize = isForced$2.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = 'N';
var POLYFILL = isForced$2.POLYFILL = 'P';

var isForced_1 = isForced$2;

var global$g = global$p;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$a = createNonEnumerableProperty$c;
var defineBuiltIn$8 = defineBuiltIn$9;
var defineGlobalProperty = defineGlobalProperty$3;
var copyConstructorProperties$2 = copyConstructorProperties$3;
var isForced$1 = isForced_1;

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$g;
  } else if (STATIC) {
    target = global$g[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global$g[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties$2(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty$a(sourceProperty, 'sham', true);
    }
    defineBuiltIn$8(target, key, sourceProperty, options);
  }
};

var $$12 = _export;
var hasOwn$a = hasOwnProperty_1;

// `Object.hasOwn` method
// https://github.com/tc39/proposal-accessible-object-hasownproperty
$$12({ target: 'Object', stat: true }, {
  hasOwn: hasOwn$a
});

var classofRaw$1 = classofRaw$2;
var uncurryThis$s = functionUncurryThis;

var functionUncurryThisClause = function (fn) {
  // Nashorn bug:
  //   https://github.com/zloirock/core-js/issues/1128
  //   https://github.com/zloirock/core-js/issues/1130
  if (classofRaw$1(fn) === 'Function') return uncurryThis$s(fn);
};

var uncurryThis$r = functionUncurryThisClause;
var aCallable$o = aCallable$q;
var NATIVE_BIND = functionBindNative;

var bind$7 = uncurryThis$r(uncurryThis$r.bind);

// optional / simple context binding
var functionBindContext = function (fn, that) {
  aCallable$o(fn);
  return that === undefined ? fn : NATIVE_BIND ? bind$7(fn, that) : function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var bind$6 = functionBindContext;
var IndexedObject$2 = indexedObject;
var toObject$a = toObject$c;
var lengthOfArrayLike$e = lengthOfArrayLike$g;

// `Array.prototype.{ findLast, findLastIndex }` methods implementation
var createMethod$2 = function (TYPE) {
  var IS_FIND_LAST_INDEX = TYPE == 1;
  return function ($this, callbackfn, that) {
    var O = toObject$a($this);
    var self = IndexedObject$2(O);
    var boundFunction = bind$6(callbackfn, that);
    var index = lengthOfArrayLike$e(self);
    var value, result;
    while (index-- > 0) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (result) switch (TYPE) {
        case 0: return value; // findLast
        case 1: return index; // findLastIndex
      }
    }
    return IS_FIND_LAST_INDEX ? -1 : undefined;
  };
};

var arrayIterationFromLast = {
  // `Array.prototype.findLast` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLast: createMethod$2(0),
  // `Array.prototype.findLastIndex` method
  // https://github.com/tc39/proposal-array-find-from-last
  findLastIndex: createMethod$2(1)
};

var objectDefineProperties = {};

var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es/no-object-keys -- safe
var objectKeys$1 = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};

var DESCRIPTORS$5 = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$u = anObject$x;
var toIndexedObject$5 = toIndexedObject$9;
var objectKeys = objectKeys$1;

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es/no-object-defineproperties -- safe
objectDefineProperties.f = DESCRIPTORS$5 && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$u(O);
  var props = toIndexedObject$5(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys[index++], props[key]);
  return O;
};

var getBuiltIn$c = getBuiltIn$f;

var html$1 = getBuiltIn$c('document', 'documentElement');

/* global ActiveXObject -- old IE, WSH */

var anObject$t = anObject$x;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$1;
var documentCreateElement = documentCreateElement$1;
var sharedKey$1 = sharedKey$3;

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO$1 = sharedKey$1('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO$1] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es/no-object-create -- safe
var objectCreate$1 = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$t(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};

var wellKnownSymbol$t = wellKnownSymbol$v;
var create$8 = objectCreate$1;
var defineProperty$4 = objectDefineProperty.f;

var UNSCOPABLES = wellKnownSymbol$t('unscopables');
var ArrayPrototype$1 = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
  defineProperty$4(ArrayPrototype$1, UNSCOPABLES, {
    configurable: true,
    value: create$8(null)
  });
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables$d = function (key) {
  ArrayPrototype$1[UNSCOPABLES][key] = true;
};

var $$11 = _export;
var $findLast$1 = arrayIterationFromLast.findLast;
var addToUnscopables$c = addToUnscopables$d;

// `Array.prototype.findLast` method
// https://github.com/tc39/proposal-array-find-from-last
$$11({ target: 'Array', proto: true }, {
  findLast: function findLast(callbackfn /* , that = undefined */) {
    return $findLast$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables$c('findLast');

var $$10 = _export;
var $findLastIndex$1 = arrayIterationFromLast.findLastIndex;
var addToUnscopables$b = addToUnscopables$d;

// `Array.prototype.findLastIndex` method
// https://github.com/tc39/proposal-array-find-from-last
$$10({ target: 'Array', proto: true }, {
  findLastIndex: function findLastIndex(callbackfn /* , that = undefined */) {
    return $findLastIndex$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

addToUnscopables$b('findLastIndex');

// eslint-disable-next-line es/no-typed-arrays -- safe
var arrayBufferBasicDetection = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

var wellKnownSymbol$s = wellKnownSymbol$v;

var TO_STRING_TAG$a = wellKnownSymbol$s('toStringTag');
var test = {};

test[TO_STRING_TAG$a] = 'z';

var toStringTagSupport = String(test) === '[object z]';

var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$g = isCallable$r;
var classofRaw = classofRaw$2;
var wellKnownSymbol$r = wellKnownSymbol$v;

var TO_STRING_TAG$9 = wellKnownSymbol$r('toStringTag');
var $Object$1 = Object;

// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof$c = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = $Object$1(it), TO_STRING_TAG$9)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$g(O.callee) ? 'Arguments' : result;
};

var makeBuiltIn = makeBuiltInExports;
var defineProperty$3 = objectDefineProperty;

var defineBuiltInAccessor$3 = function (target, name, descriptor) {
  if (descriptor.get) makeBuiltIn(descriptor.get, name, { getter: true });
  if (descriptor.set) makeBuiltIn(descriptor.set, name, { setter: true });
  return defineProperty$3.f(target, name, descriptor);
};

var fails$g = fails$p;

var correctPrototypeGetter = !fails$g(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var hasOwn$9 = hasOwnProperty_1;
var isCallable$f = isCallable$r;
var toObject$9 = toObject$c;
var sharedKey = sharedKey$3;
var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;

var IE_PROTO = sharedKey('IE_PROTO');
var $Object = Object;
var ObjectPrototype$1 = $Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function (O) {
  var object = toObject$9(O);
  if (hasOwn$9(object, IE_PROTO)) return object[IE_PROTO];
  var constructor = object.constructor;
  if (isCallable$f(constructor) && object instanceof constructor) {
    return constructor.prototype;
  } return object instanceof $Object ? ObjectPrototype$1 : null;
};

var uncurryThis$q = functionUncurryThis;
var aCallable$n = aCallable$q;

var functionUncurryThisAccessor = function (object, key, method) {
  try {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return uncurryThis$q(aCallable$n(Object.getOwnPropertyDescriptor(object, key)[method]));
  } catch (error) { /* empty */ }
};

var isCallable$e = isCallable$r;

var $String$2 = String;
var $TypeError$e = TypeError;

var aPossiblePrototype$1 = function (argument) {
  if (typeof argument == 'object' || isCallable$e(argument)) return argument;
  throw $TypeError$e("Can't set " + $String$2(argument) + ' as a prototype');
};

/* eslint-disable no-proto -- safe */

var uncurryThisAccessor$3 = functionUncurryThisAccessor;
var anObject$s = anObject$x;
var aPossiblePrototype = aPossiblePrototype$1;

// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = uncurryThisAccessor$3(Object.prototype, '__proto__', 'set');
    setter(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject$s(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var NATIVE_ARRAY_BUFFER = arrayBufferBasicDetection;
var DESCRIPTORS$4 = descriptors;
var global$f = global$p;
var isCallable$d = isCallable$r;
var isObject$b = isObject$h;
var hasOwn$8 = hasOwnProperty_1;
var classof$b = classof$c;
var tryToString$3 = tryToString$5;
var createNonEnumerableProperty$9 = createNonEnumerableProperty$c;
var defineBuiltIn$7 = defineBuiltIn$9;
var defineBuiltInAccessor$2 = defineBuiltInAccessor$3;
var isPrototypeOf$7 = objectIsPrototypeOf;
var getPrototypeOf$5 = objectGetPrototypeOf;
var setPrototypeOf$3 = objectSetPrototypeOf;
var wellKnownSymbol$q = wellKnownSymbol$v;
var uid$1 = uid$4;
var InternalStateModule$6 = internalState;

var enforceInternalState = InternalStateModule$6.enforce;
var getInternalState$5 = InternalStateModule$6.get;
var Int8Array$1 = global$f.Int8Array;
var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
var Uint8ClampedArray = global$f.Uint8ClampedArray;
var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
var TypedArray = Int8Array$1 && getPrototypeOf$5(Int8Array$1);
var TypedArrayPrototype = Int8ArrayPrototype && getPrototypeOf$5(Int8ArrayPrototype);
var ObjectPrototype = Object.prototype;
var TypeError$2 = global$f.TypeError;

var TO_STRING_TAG$8 = wellKnownSymbol$q('toStringTag');
var TYPED_ARRAY_TAG = uid$1('TYPED_ARRAY_TAG');
var TYPED_ARRAY_CONSTRUCTOR = 'TypedArrayConstructor';
// Fixing native typed arrays in Opera Presto crashes the browser, see #595
var NATIVE_ARRAY_BUFFER_VIEWS = NATIVE_ARRAY_BUFFER && !!setPrototypeOf$3 && classof$b(global$f.opera) !== 'Opera';
var TYPED_ARRAY_TAG_REQUIRED = false;
var NAME, Constructor, Prototype;

var TypedArrayConstructorsList = {
  Int8Array: 1,
  Uint8Array: 1,
  Uint8ClampedArray: 1,
  Int16Array: 2,
  Uint16Array: 2,
  Int32Array: 4,
  Uint32Array: 4,
  Float32Array: 4,
  Float64Array: 8
};

var BigIntArrayConstructorsList = {
  BigInt64Array: 8,
  BigUint64Array: 8
};

var isView = function isView(it) {
  if (!isObject$b(it)) return false;
  var klass = classof$b(it);
  return klass === 'DataView'
    || hasOwn$8(TypedArrayConstructorsList, klass)
    || hasOwn$8(BigIntArrayConstructorsList, klass);
};

var getTypedArrayConstructor$4 = function (it) {
  var proto = getPrototypeOf$5(it);
  if (!isObject$b(proto)) return;
  var state = getInternalState$5(proto);
  return (state && hasOwn$8(state, TYPED_ARRAY_CONSTRUCTOR)) ? state[TYPED_ARRAY_CONSTRUCTOR] : getTypedArrayConstructor$4(proto);
};

var isTypedArray = function (it) {
  if (!isObject$b(it)) return false;
  var klass = classof$b(it);
  return hasOwn$8(TypedArrayConstructorsList, klass)
    || hasOwn$8(BigIntArrayConstructorsList, klass);
};

var aTypedArray$7 = function (it) {
  if (isTypedArray(it)) return it;
  throw TypeError$2('Target is not a typed array');
};

var aTypedArrayConstructor = function (C) {
  if (isCallable$d(C) && (!setPrototypeOf$3 || isPrototypeOf$7(TypedArray, C))) return C;
  throw TypeError$2(tryToString$3(C) + ' is not a typed array constructor');
};

var exportTypedArrayMethod$7 = function (KEY, property, forced, options) {
  if (!DESCRIPTORS$4) return;
  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
    var TypedArrayConstructor = global$f[ARRAY];
    if (TypedArrayConstructor && hasOwn$8(TypedArrayConstructor.prototype, KEY)) try {
      delete TypedArrayConstructor.prototype[KEY];
    } catch (error) {
      // old WebKit bug - some methods are non-configurable
      try {
        TypedArrayConstructor.prototype[KEY] = property;
      } catch (error2) { /* empty */ }
    }
  }
  if (!TypedArrayPrototype[KEY] || forced) {
    defineBuiltIn$7(TypedArrayPrototype, KEY, forced ? property
      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property, options);
  }
};

var exportTypedArrayStaticMethod = function (KEY, property, forced) {
  var ARRAY, TypedArrayConstructor;
  if (!DESCRIPTORS$4) return;
  if (setPrototypeOf$3) {
    if (forced) for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global$f[ARRAY];
      if (TypedArrayConstructor && hasOwn$8(TypedArrayConstructor, KEY)) try {
        delete TypedArrayConstructor[KEY];
      } catch (error) { /* empty */ }
    }
    if (!TypedArray[KEY] || forced) {
      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
      try {
        return defineBuiltIn$7(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
      } catch (error) { /* empty */ }
    } else return;
  }
  for (ARRAY in TypedArrayConstructorsList) {
    TypedArrayConstructor = global$f[ARRAY];
    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
      defineBuiltIn$7(TypedArrayConstructor, KEY, property);
    }
  }
};

for (NAME in TypedArrayConstructorsList) {
  Constructor = global$f[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
  else NATIVE_ARRAY_BUFFER_VIEWS = false;
}

for (NAME in BigIntArrayConstructorsList) {
  Constructor = global$f[NAME];
  Prototype = Constructor && Constructor.prototype;
  if (Prototype) enforceInternalState(Prototype)[TYPED_ARRAY_CONSTRUCTOR] = Constructor;
}

// WebKit bug - typed arrays constructors prototype is Object.prototype
if (!NATIVE_ARRAY_BUFFER_VIEWS || !isCallable$d(TypedArray) || TypedArray === Function.prototype) {
  // eslint-disable-next-line no-shadow -- safe
  TypedArray = function TypedArray() {
    throw TypeError$2('Incorrect invocation');
  };
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global$f[NAME]) setPrototypeOf$3(global$f[NAME], TypedArray);
  }
}

if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype) {
  TypedArrayPrototype = TypedArray.prototype;
  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
    if (global$f[NAME]) setPrototypeOf$3(global$f[NAME].prototype, TypedArrayPrototype);
  }
}

// WebKit bug - one more object in Uint8ClampedArray prototype chain
if (NATIVE_ARRAY_BUFFER_VIEWS && getPrototypeOf$5(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
  setPrototypeOf$3(Uint8ClampedArrayPrototype, TypedArrayPrototype);
}

if (DESCRIPTORS$4 && !hasOwn$8(TypedArrayPrototype, TO_STRING_TAG$8)) {
  TYPED_ARRAY_TAG_REQUIRED = true;
  defineBuiltInAccessor$2(TypedArrayPrototype, TO_STRING_TAG$8, {
    configurable: true,
    get: function () {
      return isObject$b(this) ? this[TYPED_ARRAY_TAG] : undefined;
    }
  });
  for (NAME in TypedArrayConstructorsList) if (global$f[NAME]) {
    createNonEnumerableProperty$9(global$f[NAME], TYPED_ARRAY_TAG, NAME);
  }
}

var arrayBufferViewCore = {
  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
  aTypedArray: aTypedArray$7,
  aTypedArrayConstructor: aTypedArrayConstructor,
  exportTypedArrayMethod: exportTypedArrayMethod$7,
  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
  getTypedArrayConstructor: getTypedArrayConstructor$4,
  isView: isView,
  isTypedArray: isTypedArray,
  TypedArray: TypedArray,
  TypedArrayPrototype: TypedArrayPrototype
};

var ArrayBufferViewCore$6 = arrayBufferViewCore;
var $findLast = arrayIterationFromLast.findLast;

var aTypedArray$6 = ArrayBufferViewCore$6.aTypedArray;
var exportTypedArrayMethod$6 = ArrayBufferViewCore$6.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLast` method
// https://github.com/tc39/proposal-array-find-from-last
exportTypedArrayMethod$6('findLast', function findLast(predicate /* , thisArg */) {
  return $findLast(aTypedArray$6(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var ArrayBufferViewCore$5 = arrayBufferViewCore;
var $findLastIndex = arrayIterationFromLast.findLastIndex;

var aTypedArray$5 = ArrayBufferViewCore$5.aTypedArray;
var exportTypedArrayMethod$5 = ArrayBufferViewCore$5.exportTypedArrayMethod;

// `%TypedArray%.prototype.findLastIndex` method
// https://github.com/tc39/proposal-array-find-from-last
exportTypedArrayMethod$5('findLastIndex', function findLastIndex(predicate /* , thisArg */) {
  return $findLastIndex(aTypedArray$5(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
});

var lengthOfArrayLike$d = lengthOfArrayLike$g;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
var arrayToReversed$2 = function (O, C) {
  var len = lengthOfArrayLike$d(O);
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = O[len - k - 1];
  return A;
};

var $$$ = _export;
var arrayToReversed$1 = arrayToReversed$2;
var toIndexedObject$4 = toIndexedObject$9;
var addToUnscopables$a = addToUnscopables$d;

var $Array$6 = Array;

// `Array.prototype.toReversed` method
// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toReversed
$$$({ target: 'Array', proto: true }, {
  toReversed: function toReversed() {
    return arrayToReversed$1(toIndexedObject$4(this), $Array$6);
  }
});

addToUnscopables$a('toReversed');

var lengthOfArrayLike$c = lengthOfArrayLike$g;

var arrayFromConstructorAndList$3 = function (Constructor, list) {
  var index = 0;
  var length = lengthOfArrayLike$c(list);
  var result = new Constructor(length);
  while (length > index) result[index] = list[index++];
  return result;
};

var global$e = global$p;

var entryVirtual = function (CONSTRUCTOR) {
  return global$e[CONSTRUCTOR].prototype;
};

var $$_ = _export;
var uncurryThis$p = functionUncurryThis;
var aCallable$m = aCallable$q;
var toIndexedObject$3 = toIndexedObject$9;
var arrayFromConstructorAndList$2 = arrayFromConstructorAndList$3;
var getVirtual$1 = entryVirtual;
var addToUnscopables$9 = addToUnscopables$d;

var $Array$5 = Array;
var sort$1 = uncurryThis$p(getVirtual$1('Array').sort);

// `Array.prototype.toSorted` method
// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toSorted
$$_({ target: 'Array', proto: true }, {
  toSorted: function toSorted(compareFn) {
    if (compareFn !== undefined) aCallable$m(compareFn);
    var O = toIndexedObject$3(this);
    var A = arrayFromConstructorAndList$2($Array$5, O);
    return sort$1(A, compareFn);
  }
});

addToUnscopables$9('toSorted');

var $TypeError$d = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

var doesNotExceedSafeInteger$3 = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError$d('Maximum allowed index exceeded');
  return it;
};

var $$Z = _export;
var addToUnscopables$8 = addToUnscopables$d;
var doesNotExceedSafeInteger$2 = doesNotExceedSafeInteger$3;
var lengthOfArrayLike$b = lengthOfArrayLike$g;
var toAbsoluteIndex$1 = toAbsoluteIndex$3;
var toIndexedObject$2 = toIndexedObject$9;
var toIntegerOrInfinity$b = toIntegerOrInfinity$e;

var $Array$4 = Array;
var max$3 = Math.max;
var min$2 = Math.min;

// `Array.prototype.toSpliced` method
// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.toSpliced
$$Z({ target: 'Array', proto: true }, {
  toSpliced: function toSpliced(start, deleteCount /* , ...items */) {
    var O = toIndexedObject$2(this);
    var len = lengthOfArrayLike$b(O);
    var actualStart = toAbsoluteIndex$1(start, len);
    var argumentsLength = arguments.length;
    var k = 0;
    var insertCount, actualDeleteCount, newLen, A;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min$2(max$3(toIntegerOrInfinity$b(deleteCount), 0), len - actualStart);
    }
    newLen = doesNotExceedSafeInteger$2(len + insertCount - actualDeleteCount);
    A = $Array$4(newLen);

    for (; k < actualStart; k++) A[k] = O[k];
    for (; k < actualStart + insertCount; k++) A[k] = arguments[k - actualStart + 2];
    for (; k < newLen; k++) A[k] = O[k + actualDeleteCount - insertCount];

    return A;
  }
});

addToUnscopables$8('toSpliced');

var lengthOfArrayLike$a = lengthOfArrayLike$g;
var toIntegerOrInfinity$a = toIntegerOrInfinity$e;

var $RangeError$3 = RangeError;

// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
var arrayWith$2 = function (O, C, index, value) {
  var len = lengthOfArrayLike$a(O);
  var relativeIndex = toIntegerOrInfinity$a(index);
  var actualIndex = relativeIndex < 0 ? len + relativeIndex : relativeIndex;
  if (actualIndex >= len || actualIndex < 0) throw $RangeError$3('Incorrect index');
  var A = new C(len);
  var k = 0;
  for (; k < len; k++) A[k] = k === actualIndex ? value : O[k];
  return A;
};

var $$Y = _export;
var arrayWith$1 = arrayWith$2;
var toIndexedObject$1 = toIndexedObject$9;

var $Array$3 = Array;

// `Array.prototype.with` method
// https://tc39.es/proposal-change-array-by-copy/#sec-array.prototype.with
$$Y({ target: 'Array', proto: true }, {
  'with': function (index, value) {
    return arrayWith$1(toIndexedObject$1(this), $Array$3, index, value);
  }
});

var arrayToReversed = arrayToReversed$2;
var ArrayBufferViewCore$4 = arrayBufferViewCore;

var aTypedArray$4 = ArrayBufferViewCore$4.aTypedArray;
var exportTypedArrayMethod$4 = ArrayBufferViewCore$4.exportTypedArrayMethod;
var getTypedArrayConstructor$3 = ArrayBufferViewCore$4.getTypedArrayConstructor;

// `%TypedArray%.prototype.toReversed` method
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toReversed
exportTypedArrayMethod$4('toReversed', function toReversed() {
  return arrayToReversed(aTypedArray$4(this), getTypedArrayConstructor$3(this));
});

var ArrayBufferViewCore$3 = arrayBufferViewCore;
var uncurryThis$o = functionUncurryThis;
var aCallable$l = aCallable$q;
var arrayFromConstructorAndList$1 = arrayFromConstructorAndList$3;

var aTypedArray$3 = ArrayBufferViewCore$3.aTypedArray;
var getTypedArrayConstructor$2 = ArrayBufferViewCore$3.getTypedArrayConstructor;
var exportTypedArrayMethod$3 = ArrayBufferViewCore$3.exportTypedArrayMethod;
var sort = uncurryThis$o(ArrayBufferViewCore$3.TypedArrayPrototype.sort);

// `%TypedArray%.prototype.toSorted` method
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toSorted
exportTypedArrayMethod$3('toSorted', function toSorted(compareFn) {
  if (compareFn !== undefined) aCallable$l(compareFn);
  var O = aTypedArray$3(this);
  var A = arrayFromConstructorAndList$1(getTypedArrayConstructor$2(O), O);
  return sort(A, compareFn);
});

var classof$a = classof$c;

var isBigIntArray$2 = function (it) {
  var klass = classof$a(it);
  return klass == 'BigInt64Array' || klass == 'BigUint64Array';
};

var toPrimitive = toPrimitive$2;

var $TypeError$c = TypeError;

// `ToBigInt` abstract operation
// https://tc39.es/ecma262/#sec-tobigint
var toBigInt$2 = function (argument) {
  var prim = toPrimitive(argument, 'number');
  if (typeof prim == 'number') throw $TypeError$c("Can't convert number to bigint");
  // eslint-disable-next-line es/no-bigint -- safe
  return BigInt(prim);
};

var arrayWith = arrayWith$2;
var ArrayBufferViewCore$2 = arrayBufferViewCore;
var isBigIntArray$1 = isBigIntArray$2;
var toIntegerOrInfinity$9 = toIntegerOrInfinity$e;
var toBigInt$1 = toBigInt$2;

var aTypedArray$2 = ArrayBufferViewCore$2.aTypedArray;
var getTypedArrayConstructor$1 = ArrayBufferViewCore$2.getTypedArrayConstructor;
var exportTypedArrayMethod$2 = ArrayBufferViewCore$2.exportTypedArrayMethod;

var PROPER_ORDER$1 = !!function () {
  try {
    // eslint-disable-next-line no-throw-literal, es/no-typed-arrays, es/no-array-prototype-with -- required for testing
    new Int8Array(1)['with'](2, { valueOf: function () { throw 8; } });
  } catch (error) {
    // some early implementations, like WebKit, does not follow the final semantic
    // https://github.com/tc39/proposal-change-array-by-copy/pull/86
    return error === 8;
  }
}();

// `%TypedArray%.prototype.with` method
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.with
exportTypedArrayMethod$2('with', { 'with': function (index, value) {
  var O = aTypedArray$2(this);
  var relativeIndex = toIntegerOrInfinity$9(index);
  var actualValue = isBigIntArray$1(O) ? toBigInt$1(value) : +value;
  return arrayWith(O, getTypedArrayConstructor$1(O), relativeIndex, actualValue);
} }['with'], !PROPER_ORDER$1);

var $$X = _export;
var global$d = global$p;

// `globalThis` object
// https://tc39.es/ecma262/#sec-globalthis
$$X({ global: true, forced: global$d.globalThis !== global$d }, {
  globalThis: global$d
});

var newPromiseCapability = {};

var aCallable$k = aCallable$q;

var $TypeError$b = TypeError;

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw $TypeError$b('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aCallable$k(resolve);
  this.reject = aCallable$k(reject);
};

// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
newPromiseCapability.f = function (C) {
  return new PromiseCapability(C);
};

var perform$3 = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};

var iterators = {};

var wellKnownSymbol$p = wellKnownSymbol$v;
var Iterators$4 = iterators;

var ITERATOR$4 = wellKnownSymbol$p('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod$1 = function (it) {
  return it !== undefined && (Iterators$4.Array === it || ArrayPrototype[ITERATOR$4] === it);
};

var classof$9 = classof$c;
var getMethod$c = getMethod$e;
var isNullOrUndefined$4 = isNullOrUndefined$7;
var Iterators$3 = iterators;
var wellKnownSymbol$o = wellKnownSymbol$v;

var ITERATOR$3 = wellKnownSymbol$o('iterator');

var getIteratorMethod$5 = function (it) {
  if (!isNullOrUndefined$4(it)) return getMethod$c(it, ITERATOR$3)
    || getMethod$c(it, '@@iterator')
    || Iterators$3[classof$9(it)];
};

var call$B = functionCall;
var aCallable$j = aCallable$q;
var anObject$r = anObject$x;
var tryToString$2 = tryToString$5;
var getIteratorMethod$4 = getIteratorMethod$5;

var $TypeError$a = TypeError;

var getIterator$3 = function (argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$4(argument) : usingIterator;
  if (aCallable$j(iteratorMethod)) return anObject$r(call$B(iteratorMethod, argument));
  throw $TypeError$a(tryToString$2(argument) + ' is not iterable');
};

var call$A = functionCall;
var anObject$q = anObject$x;
var getMethod$b = getMethod$e;

var iteratorClose$8 = function (iterator, kind, value) {
  var innerResult, innerError;
  anObject$q(iterator);
  try {
    innerResult = getMethod$b(iterator, 'return');
    if (!innerResult) {
      if (kind === 'throw') throw value;
      return value;
    }
    innerResult = call$A(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === 'throw') throw value;
  if (innerError) throw innerResult;
  anObject$q(innerResult);
  return value;
};

var bind$5 = functionBindContext;
var call$z = functionCall;
var anObject$p = anObject$x;
var tryToString$1 = tryToString$5;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike$9 = lengthOfArrayLike$g;
var isPrototypeOf$6 = objectIsPrototypeOf;
var getIterator$2 = getIterator$3;
var getIteratorMethod$3 = getIteratorMethod$5;
var iteratorClose$7 = iteratorClose$8;

var $TypeError$9 = TypeError;

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var ResultPrototype = Result.prototype;

var iterate$c = function (iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_RECORD = !!(options && options.IS_RECORD);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind$5(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;

  var stop = function (condition) {
    if (iterator) iteratorClose$7(iterator, 'normal', condition);
    return new Result(true, condition);
  };

  var callFn = function (value) {
    if (AS_ENTRIES) {
      anObject$p(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    } return INTERRUPTED ? fn(value, stop) : fn(value);
  };

  if (IS_RECORD) {
    iterator = iterable.iterator;
  } else if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod$3(iterable);
    if (!iterFn) throw $TypeError$9(tryToString$1(iterable) + ' is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike$9(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf$6(ResultPrototype, result)) return result;
      } return new Result(false);
    }
    iterator = getIterator$2(iterable, iterFn);
  }

  next = IS_RECORD ? iterable.next : iterator.next;
  while (!(step = call$z(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose$7(iterator, 'throw', error);
    }
    if (typeof result == 'object' && result && isPrototypeOf$6(ResultPrototype, result)) return result;
  } return new Result(false);
};

var global$c = global$p;

var promiseNativeConstructor = global$c.Promise;

var wellKnownSymbol$n = wellKnownSymbol$v;

var ITERATOR$2 = wellKnownSymbol$n('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$2] = function () {
    return this;
  };
  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$2] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

/* global Deno -- Deno case */

var engineIsDeno = typeof Deno == 'object' && Deno && typeof Deno.version == 'object';

var classof$8 = classofRaw$2;

var engineIsNode = typeof process != 'undefined' && classof$8(process) == 'process';

var IS_DENO$2 = engineIsDeno;
var IS_NODE$1 = engineIsNode;

var engineIsBrowser = !IS_DENO$2 && !IS_NODE$1
  && typeof window == 'object'
  && typeof document == 'object';

var global$b = global$p;
var NativePromiseConstructor$1 = promiseNativeConstructor;
var isCallable$c = isCallable$r;
var isForced = isForced_1;
var inspectSource$1 = inspectSource$3;
var wellKnownSymbol$m = wellKnownSymbol$v;
var IS_BROWSER$1 = engineIsBrowser;
var IS_DENO$1 = engineIsDeno;
var V8_VERSION = engineV8Version;

NativePromiseConstructor$1 && NativePromiseConstructor$1.prototype;
var SPECIES$2 = wellKnownSymbol$m('species');
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT = isCallable$c(global$b.PromiseRejectionEvent);

var FORCED_PROMISE_CONSTRUCTOR$1 = isForced('Promise', function () {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource$1(NativePromiseConstructor$1);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$1);
  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
  // We can't detect it synchronously, so just check versions
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (!V8_VERSION || V8_VERSION < 51 || !/native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) {
    // Detect correctness of subclassing with @@species support
    var promise = new NativePromiseConstructor$1(function (resolve) { resolve(1); });
    var FakePromise = function (exec) {
      exec(function () { /* empty */ }, function () { /* empty */ });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES$2] = FakePromise;
    SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
    if (!SUBCLASSING) return true;
  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
  } return !GLOBAL_CORE_JS_PROMISE && (IS_BROWSER$1 || IS_DENO$1) && !NATIVE_PROMISE_REJECTION_EVENT;
});

var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$1,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT,
  SUBCLASSING: SUBCLASSING
};

var NativePromiseConstructor = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;

var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR || !checkCorrectnessOfIteration(function (iterable) {
  NativePromiseConstructor.all(iterable).then(undefined, function () { /* empty */ });
});

var $$W = _export;
var call$y = functionCall;
var aCallable$i = aCallable$q;
var newPromiseCapabilityModule$1 = newPromiseCapability;
var perform$2 = perform$3;
var iterate$b = iterate$c;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;

// `Promise.allSettled` method
// https://tc39.es/ecma262/#sec-promise.allsettled
$$W({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION$1 }, {
  allSettled: function allSettled(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$2(function () {
      var promiseResolve = aCallable$i(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate$b(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        remaining++;
        call$y(promiseResolve, C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'fulfilled', value: value };
          --remaining || resolve(values);
        }, function (error) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = { status: 'rejected', reason: error };
          --remaining || resolve(values);
        });
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var isObject$a = isObject$h;
var createNonEnumerableProperty$8 = createNonEnumerableProperty$c;

// `InstallErrorCause` abstract operation
// https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause
var installErrorCause$1 = function (O, options) {
  if (isObject$a(options) && 'cause' in options) {
    createNonEnumerableProperty$8(O, 'cause', options.cause);
  }
};

var uncurryThis$n = functionUncurryThis;

var $Error$2 = Error;
var replace$2 = uncurryThis$n(''.replace);

var TEST = (function (arg) { return String($Error$2(arg).stack); })('zxcasd');
// eslint-disable-next-line redos/no-vulnerable -- safe
var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

var errorStackClear = function (stack, dropEntries) {
  if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string' && !$Error$2.prepareStackTrace) {
    while (dropEntries--) stack = replace$2(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
  } return stack;
};

var fails$f = fails$p;
var createPropertyDescriptor$4 = createPropertyDescriptor$7;

var errorStackInstallable = !fails$f(function () {
  var error = Error('a');
  if (!('stack' in error)) return true;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  Object.defineProperty(error, 'stack', createPropertyDescriptor$4(1, 7));
  return error.stack !== 7;
});

var createNonEnumerableProperty$7 = createNonEnumerableProperty$c;
var clearErrorStack = errorStackClear;
var ERROR_STACK_INSTALLABLE = errorStackInstallable;

// non-standard V8
var captureStackTrace = Error.captureStackTrace;

var errorStackInstall = function (error, C, stack, dropEntries) {
  if (ERROR_STACK_INSTALLABLE) {
    if (captureStackTrace) captureStackTrace(error, C);
    else createNonEnumerableProperty$7(error, 'stack', clearErrorStack(stack, dropEntries));
  }
};

var classof$7 = classof$c;

var $String$1 = String;

var toString$b = function (argument) {
  if (classof$7(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
  return $String$1(argument);
};

var toString$a = toString$b;

var normalizeStringArgument$2 = function (argument, $default) {
  return argument === undefined ? arguments.length < 2 ? '' : $default : toString$a(argument);
};

var $$V = _export;
var isPrototypeOf$5 = objectIsPrototypeOf;
var getPrototypeOf$4 = objectGetPrototypeOf;
var setPrototypeOf$2 = objectSetPrototypeOf;
var copyConstructorProperties$1 = copyConstructorProperties$3;
var create$7 = objectCreate$1;
var createNonEnumerableProperty$6 = createNonEnumerableProperty$c;
var createPropertyDescriptor$3 = createPropertyDescriptor$7;
var installErrorCause = installErrorCause$1;
var installErrorStack$1 = errorStackInstall;
var iterate$a = iterate$c;
var normalizeStringArgument$1 = normalizeStringArgument$2;
var wellKnownSymbol$l = wellKnownSymbol$v;

var TO_STRING_TAG$7 = wellKnownSymbol$l('toStringTag');
var $Error$1 = Error;
var push$7 = [].push;

var $AggregateError = function AggregateError(errors, message /* , options */) {
  var isInstance = isPrototypeOf$5(AggregateErrorPrototype, this);
  var that;
  if (setPrototypeOf$2) {
    that = setPrototypeOf$2($Error$1(), isInstance ? getPrototypeOf$4(this) : AggregateErrorPrototype);
  } else {
    that = isInstance ? this : create$7(AggregateErrorPrototype);
    createNonEnumerableProperty$6(that, TO_STRING_TAG$7, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty$6(that, 'message', normalizeStringArgument$1(message));
  installErrorStack$1(that, $AggregateError, that.stack, 1);
  if (arguments.length > 2) installErrorCause(that, arguments[2]);
  var errorsArray = [];
  iterate$a(errors, push$7, { that: errorsArray });
  createNonEnumerableProperty$6(that, 'errors', errorsArray);
  return that;
};

if (setPrototypeOf$2) setPrototypeOf$2($AggregateError, $Error$1);
else copyConstructorProperties$1($AggregateError, $Error$1, { name: true });

var AggregateErrorPrototype = $AggregateError.prototype = create$7($Error$1.prototype, {
  constructor: createPropertyDescriptor$3(1, $AggregateError),
  message: createPropertyDescriptor$3(1, ''),
  name: createPropertyDescriptor$3(1, 'AggregateError')
});

// `AggregateError` constructor
// https://tc39.es/ecma262/#sec-aggregate-error-constructor
$$V({ global: true, constructor: true, arity: 2 }, {
  AggregateError: $AggregateError
});

var $$U = _export;
var call$x = functionCall;
var aCallable$h = aCallable$q;
var getBuiltIn$b = getBuiltIn$f;
var newPromiseCapabilityModule = newPromiseCapability;
var perform$1 = perform$3;
var iterate$9 = iterate$c;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;

var PROMISE_ANY_ERROR = 'No one promise resolved';

// `Promise.any` method
// https://tc39.es/ecma262/#sec-promise.any
$$U({ target: 'Promise', stat: true, forced: PROMISE_STATICS_INCORRECT_ITERATION }, {
  any: function any(iterable) {
    var C = this;
    var AggregateError = getBuiltIn$b('AggregateError');
    var capability = newPromiseCapabilityModule.f(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform$1(function () {
      var promiseResolve = aCallable$h(C.resolve);
      var errors = [];
      var counter = 0;
      var remaining = 1;
      var alreadyResolved = false;
      iterate$9(iterable, function (promise) {
        var index = counter++;
        var alreadyRejected = false;
        remaining++;
        call$x(promiseResolve, C, promise).then(function (value) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyResolved = true;
          resolve(value);
        }, function (error) {
          if (alreadyRejected || alreadyResolved) return;
          alreadyRejected = true;
          errors[index] = error;
          --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
        });
      });
      --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});

var $$T = _export;
var uncurryThis$m = functionUncurryThis;
var requireObjectCoercible$5 = requireObjectCoercible$8;
var toIntegerOrInfinity$8 = toIntegerOrInfinity$e;
var toString$9 = toString$b;
var fails$e = fails$p;

var charAt$5 = uncurryThis$m(''.charAt);

var FORCED$1 = fails$e(function () {
  // eslint-disable-next-line es/no-array-string-prototype-at -- safe
  return '𠮷'.at(-2) !== '\uD842';
});

// `String.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
$$T({ target: 'String', proto: true, forced: FORCED$1 }, {
  at: function at(index) {
    var S = toString$9(requireObjectCoercible$5(this));
    var len = S.length;
    var relativeIndex = toIntegerOrInfinity$8(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : charAt$5(S, k);
  }
});

var $$S = _export;
var toObject$8 = toObject$c;
var lengthOfArrayLike$8 = lengthOfArrayLike$g;
var toIntegerOrInfinity$7 = toIntegerOrInfinity$e;
var addToUnscopables$7 = addToUnscopables$d;

// `Array.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
$$S({ target: 'Array', proto: true }, {
  at: function at(index) {
    var O = toObject$8(this);
    var len = lengthOfArrayLike$8(O);
    var relativeIndex = toIntegerOrInfinity$7(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return (k < 0 || k >= len) ? undefined : O[k];
  }
});

addToUnscopables$7('at');

var ArrayBufferViewCore$1 = arrayBufferViewCore;
var lengthOfArrayLike$7 = lengthOfArrayLike$g;
var toIntegerOrInfinity$6 = toIntegerOrInfinity$e;

var aTypedArray$1 = ArrayBufferViewCore$1.aTypedArray;
var exportTypedArrayMethod$1 = ArrayBufferViewCore$1.exportTypedArrayMethod;

// `%TypedArray%.prototype.at` method
// https://github.com/tc39/proposal-relative-indexing-method
exportTypedArrayMethod$1('at', function at(index) {
  var O = aTypedArray$1(this);
  var len = lengthOfArrayLike$7(O);
  var relativeIndex = toIntegerOrInfinity$6(index);
  var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
  return (k < 0 || k >= len) ? undefined : O[k];
});

var fails$d = fails$p;
var isCallable$b = isCallable$r;
var isObject$9 = isObject$h;
var getPrototypeOf$3 = objectGetPrototypeOf;
var defineBuiltIn$6 = defineBuiltIn$9;
var wellKnownSymbol$k = wellKnownSymbol$v;

var ITERATOR$1 = wellKnownSymbol$k('iterator');
var BUGGY_SAFARI_ITERATORS$1 = false;

// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype$6, PrototypeOfArrayIteratorPrototype, arrayIterator$1;

/* eslint-disable es/no-array-prototype-keys -- safe */
if ([].keys) {
  arrayIterator$1 = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator$1)) BUGGY_SAFARI_ITERATORS$1 = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf$3(getPrototypeOf$3(arrayIterator$1));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$6 = PrototypeOfArrayIteratorPrototype;
  }
}

var NEW_ITERATOR_PROTOTYPE = !isObject$9(IteratorPrototype$6) || fails$d(function () {
  var test = {};
  // FF44- legacy iterators case
  return IteratorPrototype$6[ITERATOR$1].call(test) !== test;
});

if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$6 = {};

// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!isCallable$b(IteratorPrototype$6[ITERATOR$1])) {
  defineBuiltIn$6(IteratorPrototype$6, ITERATOR$1, function () {
    return this;
  });
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype$6,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
};

var defineProperty$2 = objectDefineProperty.f;
var hasOwn$7 = hasOwnProperty_1;
var wellKnownSymbol$j = wellKnownSymbol$v;

var TO_STRING_TAG$6 = wellKnownSymbol$j('toStringTag');

var setToStringTag$2 = function (target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$7(target, TO_STRING_TAG$6)) {
    defineProperty$2(target, TO_STRING_TAG$6, { configurable: true, value: TAG });
  }
};

var IteratorPrototype$5 = iteratorsCore.IteratorPrototype;
var create$6 = objectCreate$1;
var createPropertyDescriptor$2 = createPropertyDescriptor$7;
var setToStringTag$1 = setToStringTag$2;
var Iterators$2 = iterators;

var returnThis$1 = function () { return this; };

var iteratorCreateConstructor = function (IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create$6(IteratorPrototype$5, { next: createPropertyDescriptor$2(+!ENUMERABLE_NEXT, next) });
  setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
  Iterators$2[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

// `CreateIterResultObject` abstract operation
// https://tc39.es/ecma262/#sec-createiterresultobject
var createIterResultObject$a = function (value, done) {
  return { value: value, done: done };
};

var isObject$8 = isObject$h;
var classof$6 = classofRaw$2;
var wellKnownSymbol$i = wellKnownSymbol$v;

var MATCH = wellKnownSymbol$i('match');

// `IsRegExp` abstract operation
// https://tc39.es/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject$8(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof$6(it) == 'RegExp');
};

var anObject$o = anObject$x;

// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags$1 = function () {
  var that = anObject$o(this);
  var result = '';
  if (that.hasIndices) result += 'd';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.unicodeSets) result += 'v';
  if (that.sticky) result += 'y';
  return result;
};

var call$w = functionCall;
var hasOwn$6 = hasOwnProperty_1;
var isPrototypeOf$4 = objectIsPrototypeOf;
var regExpFlags = regexpFlags$1;

var RegExpPrototype$1 = RegExp.prototype;

var regexpGetFlags = function (R) {
  var flags = R.flags;
  return flags === undefined && !('flags' in RegExpPrototype$1) && !hasOwn$6(R, 'flags') && isPrototypeOf$4(RegExpPrototype$1, R)
    ? call$w(regExpFlags, R) : flags;
};

var uncurryThis$l = functionUncurryThis;
var fails$c = fails$p;
var isCallable$a = isCallable$r;
var classof$5 = classof$c;
var getBuiltIn$a = getBuiltIn$f;
var inspectSource = inspectSource$3;

var noop = function () { /* empty */ };
var empty = [];
var construct = getBuiltIn$a('Reflect', 'construct');
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$3 = uncurryThis$l(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$a(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};

var isConstructorLegacy = function isConstructor(argument) {
  if (!isCallable$a(argument)) return false;
  switch (classof$5(argument)) {
    case 'AsyncFunction':
    case 'GeneratorFunction':
    case 'AsyncGeneratorFunction': return false;
  }
  try {
    // we can't check .prototype since constructors produced by .bind haven't it
    // `Function#toString` throws on some built-it function in some legacy engines
    // (for example, `DOMQuad` and similar in FF41-)
    return INCORRECT_TO_STRING || !!exec$3(constructorRegExp, inspectSource(argument));
  } catch (error) {
    return true;
  }
};

isConstructorLegacy.sham = true;

// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
var isConstructor$3 = !construct || fails$c(function () {
  var called;
  return isConstructorModern(isConstructorModern.call)
    || !isConstructorModern(Object)
    || !isConstructorModern(function () { called = true; })
    || called;
}) ? isConstructorLegacy : isConstructorModern;

var isConstructor$2 = isConstructor$3;
var tryToString = tryToString$5;

var $TypeError$8 = TypeError;

// `Assert: IsConstructor(argument) is true`
var aConstructor$1 = function (argument) {
  if (isConstructor$2(argument)) return argument;
  throw $TypeError$8(tryToString(argument) + ' is not a constructor');
};

var anObject$n = anObject$x;
var aConstructor = aConstructor$1;
var isNullOrUndefined$3 = isNullOrUndefined$7;
var wellKnownSymbol$h = wellKnownSymbol$v;

var SPECIES$1 = wellKnownSymbol$h('species');

// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
var speciesConstructor$1 = function (O, defaultConstructor) {
  var C = anObject$n(O).constructor;
  var S;
  return C === undefined || isNullOrUndefined$3(S = anObject$n(C)[SPECIES$1]) ? defaultConstructor : aConstructor(S);
};

var uncurryThis$k = functionUncurryThis;
var toIntegerOrInfinity$5 = toIntegerOrInfinity$e;
var toString$8 = toString$b;
var requireObjectCoercible$4 = requireObjectCoercible$8;

var charAt$4 = uncurryThis$k(''.charAt);
var charCodeAt$2 = uncurryThis$k(''.charCodeAt);
var stringSlice$3 = uncurryThis$k(''.slice);

var createMethod$1 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = toString$8(requireObjectCoercible$4($this));
    var position = toIntegerOrInfinity$5(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = charCodeAt$2(S, position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = charCodeAt$2(S, position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING
          ? charAt$4(S, position)
          : first
        : CONVERT_TO_STRING
          ? stringSlice$3(S, position, position + 2)
          : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$1(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$1(true)
};

var charAt$3 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.es/ecma262/#sec-advancestringindex
var advanceStringIndex$1 = function (S, index, unicode) {
  return index + (unicode ? charAt$3(S, index).length : 1);
};

var fails$b = fails$p;
var global$a = global$p;

// babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
var $RegExp$2 = global$a.RegExp;

var UNSUPPORTED_Y$1 = fails$b(function () {
  var re = $RegExp$2('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

// UC Browser bug
// https://github.com/zloirock/core-js/issues/1008
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$b(function () {
  return !$RegExp$2('a', 'y').sticky;
});

var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$b(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = $RegExp$2('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});

var regexpStickyHelpers = {
  BROKEN_CARET: BROKEN_CARET,
  MISSED_STICKY: MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$1
};

var fails$a = fails$p;
var global$9 = global$p;

// babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
var $RegExp$1 = global$9.RegExp;

var regexpUnsupportedDotAll = fails$a(function () {
  var re = $RegExp$1('.', 's');
  return !(re.dotAll && re.exec('\n') && re.flags === 's');
});

var fails$9 = fails$p;
var global$8 = global$p;

// babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
var $RegExp = global$8.RegExp;

var regexpUnsupportedNcg = fails$9(function () {
  var re = $RegExp('(?<a>b)', 'g');
  return re.exec('b').groups.a !== 'b' ||
    'b'.replace(re, '$<a>c') !== 'bc';
});

/* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
/* eslint-disable regexp/no-useless-quantifier -- testing */
var call$v = functionCall;
var uncurryThis$j = functionUncurryThis;
var toString$7 = toString$b;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared$1 = sharedExports;
var create$5 = objectCreate$1;
var getInternalState$4 = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;

var nativeReplace = shared$1('native-string-replace', String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$2 = uncurryThis$j(''.charAt);
var indexOf$1 = uncurryThis$j(''.indexOf);
var replace$1 = uncurryThis$j(''.replace);
var stringSlice$2 = uncurryThis$j(''.slice);

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  call$v(nativeExec, re1, 'a');
  call$v(nativeExec, re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;

if (PATCH) {
  patchedExec = function exec(string) {
    var re = this;
    var state = getInternalState$4(re);
    var str = toString$7(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match, i, object, group;

    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$v(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }

    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$v(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = replace$1(flags, 'y', '');
      if (indexOf$1(flags, 'g') === -1) {
        flags += 'g';
      }

      strCopy = stringSlice$2(str, re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$2(str, re.lastIndex - 1) !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = call$v(nativeExec, sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = stringSlice$2(match.input, charsAdded);
        match[0] = stringSlice$2(match[0], charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn't work for /(.?)?/
      call$v(nativeReplace, match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    if (match && groups) {
      match.groups = object = create$5(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match[group[1]];
      }
    }

    return match;
  };
}

var regexpExec$1 = patchedExec;

var call$u = functionCall;
var anObject$m = anObject$x;
var isCallable$9 = isCallable$r;
var classof$4 = classofRaw$2;
var regexpExec = regexpExec$1;

var $TypeError$7 = TypeError;

// `RegExpExec` abstract operation
// https://tc39.es/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (isCallable$9(exec)) {
    var result = call$u(exec, R, S);
    if (result !== null) anObject$m(result);
    return result;
  }
  if (classof$4(R) === 'RegExp') return call$u(regexpExec, R, S);
  throw $TypeError$7('RegExp#exec called on incompatible receiver');
};

/* eslint-disable es/no-string-prototype-matchall -- safe */
var $$R = _export;
var call$t = functionCall;
var uncurryThis$i = functionUncurryThisClause;
var createIteratorConstructor$1 = iteratorCreateConstructor;
var createIterResultObject$9 = createIterResultObject$a;
var requireObjectCoercible$3 = requireObjectCoercible$8;
var toLength$1 = toLength$3;
var toString$6 = toString$b;
var anObject$l = anObject$x;
var isNullOrUndefined$2 = isNullOrUndefined$7;
var classof$3 = classofRaw$2;
var isRegExp$1 = isRegexp;
var getRegExpFlags$1 = regexpGetFlags;
var getMethod$a = getMethod$e;
var defineBuiltIn$5 = defineBuiltIn$9;
var fails$8 = fails$p;
var wellKnownSymbol$g = wellKnownSymbol$v;
var speciesConstructor = speciesConstructor$1;
var advanceStringIndex = advanceStringIndex$1;
var regExpExec = regexpExecAbstract;
var InternalStateModule$5 = internalState;
var IS_PURE$2 = isPure;

var MATCH_ALL = wellKnownSymbol$g('matchAll');
var REGEXP_STRING = 'RegExp String';
var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
var setInternalState$6 = InternalStateModule$5.set;
var getInternalState$3 = InternalStateModule$5.getterFor(REGEXP_STRING_ITERATOR);
var RegExpPrototype = RegExp.prototype;
var $TypeError$6 = TypeError;
var stringIndexOf$1 = uncurryThis$i(''.indexOf);
var nativeMatchAll = uncurryThis$i(''.matchAll);

var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails$8(function () {
  nativeMatchAll('a', /./);
});

var $RegExpStringIterator = createIteratorConstructor$1(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
  setInternalState$6(this, {
    type: REGEXP_STRING_ITERATOR,
    regexp: regexp,
    string: string,
    global: $global,
    unicode: fullUnicode,
    done: false
  });
}, REGEXP_STRING, function next() {
  var state = getInternalState$3(this);
  if (state.done) return createIterResultObject$9(undefined, true);
  var R = state.regexp;
  var S = state.string;
  var match = regExpExec(R, S);
  if (match === null) {
    state.done = true;
    return createIterResultObject$9(undefined, true);
  }
  if (state.global) {
    if (toString$6(match[0]) === '') R.lastIndex = advanceStringIndex(S, toLength$1(R.lastIndex), state.unicode);
    return createIterResultObject$9(match, false);
  }
  state.done = true;
  return createIterResultObject$9(match, false);
});

var $matchAll = function (string) {
  var R = anObject$l(this);
  var S = toString$6(string);
  var C = speciesConstructor(R, RegExp);
  var flags = toString$6(getRegExpFlags$1(R));
  var matcher, $global, fullUnicode;
  matcher = new C(C === RegExp ? R.source : R, flags);
  $global = !!~stringIndexOf$1(flags, 'g');
  fullUnicode = !!~stringIndexOf$1(flags, 'u');
  matcher.lastIndex = toLength$1(R.lastIndex);
  return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
};

// `String.prototype.matchAll` method
// https://tc39.es/ecma262/#sec-string.prototype.matchall
$$R({ target: 'String', proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {
  matchAll: function matchAll(regexp) {
    var O = requireObjectCoercible$3(this);
    var flags, S, matcher, rx;
    if (!isNullOrUndefined$2(regexp)) {
      if (isRegExp$1(regexp)) {
        flags = toString$6(requireObjectCoercible$3(getRegExpFlags$1(regexp)));
        if (!~stringIndexOf$1(flags, 'g')) throw $TypeError$6('`.matchAll` does not allow non-global regexes');
      }
      if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
      matcher = getMethod$a(regexp, MATCH_ALL);
      if (matcher === undefined && IS_PURE$2 && classof$3(regexp) == 'RegExp') matcher = $matchAll;
      if (matcher) return call$t(matcher, regexp, O);
    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll(O, regexp);
    S = toString$6(O);
    rx = new RegExp(regexp, 'g');
    return rx[MATCH_ALL](S);
  }
});

MATCH_ALL in RegExpPrototype || defineBuiltIn$5(RegExpPrototype, MATCH_ALL, $matchAll);

var uncurryThis$h = functionUncurryThis;
var toObject$7 = toObject$c;

var floor = Math.floor;
var charAt$1 = uncurryThis$h(''.charAt);
var replace = uncurryThis$h(''.replace);
var stringSlice$1 = uncurryThis$h(''.slice);
// eslint-disable-next-line redos/no-vulnerable -- safe
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

// `GetSubstitution` abstract operation
// https://tc39.es/ecma262/#sec-getsubstitution
var getSubstitution$1 = function (matched, str, position, captures, namedCaptures, replacement) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== undefined) {
    namedCaptures = toObject$7(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement, symbols, function (match, ch) {
    var capture;
    switch (charAt$1(ch, 0)) {
      case '$': return '$';
      case '&': return matched;
      case '`': return stringSlice$1(str, 0, position);
      case "'": return stringSlice$1(str, tailPos);
      case '<':
        capture = namedCaptures[stringSlice$1(ch, 1, -1)];
        break;
      default: // \d\d?
        var n = +ch;
        if (n === 0) return match;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match;
          if (f <= m) return captures[f - 1] === undefined ? charAt$1(ch, 1) : captures[f - 1] + charAt$1(ch, 1);
          return match;
        }
        capture = captures[n - 1];
    }
    return capture === undefined ? '' : capture;
  });
};

var $$Q = _export;
var call$s = functionCall;
var uncurryThis$g = functionUncurryThis;
var requireObjectCoercible$2 = requireObjectCoercible$8;
var isCallable$8 = isCallable$r;
var isNullOrUndefined$1 = isNullOrUndefined$7;
var isRegExp = isRegexp;
var toString$5 = toString$b;
var getMethod$9 = getMethod$e;
var getRegExpFlags = regexpGetFlags;
var getSubstitution = getSubstitution$1;
var wellKnownSymbol$f = wellKnownSymbol$v;

var REPLACE = wellKnownSymbol$f('replace');
var $TypeError$5 = TypeError;
var indexOf = uncurryThis$g(''.indexOf);
uncurryThis$g(''.replace);
var stringSlice = uncurryThis$g(''.slice);
var max$2 = Math.max;

var stringIndexOf = function (string, searchValue, fromIndex) {
  if (fromIndex > string.length) return -1;
  if (searchValue === '') return fromIndex;
  return indexOf(string, searchValue, fromIndex);
};

// `String.prototype.replaceAll` method
// https://tc39.es/ecma262/#sec-string.prototype.replaceall
$$Q({ target: 'String', proto: true }, {
  replaceAll: function replaceAll(searchValue, replaceValue) {
    var O = requireObjectCoercible$2(this);
    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
    var position = 0;
    var endOfLastMatch = 0;
    var result = '';
    if (!isNullOrUndefined$1(searchValue)) {
      IS_REG_EXP = isRegExp(searchValue);
      if (IS_REG_EXP) {
        flags = toString$5(requireObjectCoercible$2(getRegExpFlags(searchValue)));
        if (!~indexOf(flags, 'g')) throw $TypeError$5('`.replaceAll` does not allow non-global regexes');
      }
      replacer = getMethod$9(searchValue, REPLACE);
      if (replacer) {
        return call$s(replacer, searchValue, O, replaceValue);
      }
    }
    string = toString$5(O);
    searchString = toString$5(searchValue);
    functionalReplace = isCallable$8(replaceValue);
    if (!functionalReplace) replaceValue = toString$5(replaceValue);
    searchLength = searchString.length;
    advanceBy = max$2(1, searchLength);
    position = stringIndexOf(string, searchString, 0);
    while (position !== -1) {
      replacement = functionalReplace
        ? toString$5(replaceValue(searchString, position, string))
        : getSubstitution(searchString, string, position, [], undefined, replaceValue);
      result += stringSlice(string, endOfLastMatch, position) + replacement;
      endOfLastMatch = position + searchLength;
      position = stringIndexOf(string, searchString, position + advanceBy);
    }
    if (endOfLastMatch < string.length) {
      result += stringSlice(string, endOfLastMatch);
    }
    return result;
  }
});

var global$7 = global$p;

var path$2 = global$7;

var defineBuiltIn$4 = defineBuiltIn$9;

var defineBuiltIns$4 = function (target, src, options) {
  for (var key in src) defineBuiltIn$4(target, key, src[key], options);
  return target;
};

var global$6 = global$p;
var shared = sharedStore;
var isCallable$7 = isCallable$r;
var getPrototypeOf$2 = objectGetPrototypeOf;
var defineBuiltIn$3 = defineBuiltIn$9;
var wellKnownSymbol$e = wellKnownSymbol$v;

var USE_FUNCTION_CONSTRUCTOR = 'USE_FUNCTION_CONSTRUCTOR';
var ASYNC_ITERATOR$3 = wellKnownSymbol$e('asyncIterator');
var AsyncIterator = global$6.AsyncIterator;
var PassedAsyncIteratorPrototype = shared.AsyncIteratorPrototype;
var AsyncIteratorPrototype$4, prototype;

if (PassedAsyncIteratorPrototype) {
  AsyncIteratorPrototype$4 = PassedAsyncIteratorPrototype;
} else if (isCallable$7(AsyncIterator)) {
  AsyncIteratorPrototype$4 = AsyncIterator.prototype;
} else if (shared[USE_FUNCTION_CONSTRUCTOR] || global$6[USE_FUNCTION_CONSTRUCTOR]) {
  try {
    // eslint-disable-next-line no-new-func -- we have no alternatives without usage of modern syntax
    prototype = getPrototypeOf$2(getPrototypeOf$2(getPrototypeOf$2(Function('return async function*(){}()')())));
    if (getPrototypeOf$2(prototype) === Object.prototype) AsyncIteratorPrototype$4 = prototype;
  } catch (error) { /* empty */ }
}

if (!AsyncIteratorPrototype$4) AsyncIteratorPrototype$4 = {};

if (!isCallable$7(AsyncIteratorPrototype$4[ASYNC_ITERATOR$3])) {
  defineBuiltIn$3(AsyncIteratorPrototype$4, ASYNC_ITERATOR$3, function () {
    return this;
  });
}

var asyncIteratorPrototype = AsyncIteratorPrototype$4;

var call$r = functionCall;
var anObject$k = anObject$x;
var create$4 = objectCreate$1;
var getMethod$8 = getMethod$e;
var defineBuiltIns$3 = defineBuiltIns$4;
var InternalStateModule$4 = internalState;
var getBuiltIn$9 = getBuiltIn$f;
var AsyncIteratorPrototype$3 = asyncIteratorPrototype;
var createIterResultObject$8 = createIterResultObject$a;

var Promise$3 = getBuiltIn$9('Promise');

var ASYNC_FROM_SYNC_ITERATOR = 'AsyncFromSyncIterator';
var setInternalState$5 = InternalStateModule$4.set;
var getInternalState$2 = InternalStateModule$4.getterFor(ASYNC_FROM_SYNC_ITERATOR);

var asyncFromSyncIteratorContinuation = function (result, resolve, reject) {
  var done = result.done;
  Promise$3.resolve(result.value).then(function (value) {
    resolve(createIterResultObject$8(value, done));
  }, reject);
};

var AsyncFromSyncIterator$4 = function AsyncIterator(iteratorRecord) {
  iteratorRecord.type = ASYNC_FROM_SYNC_ITERATOR;
  setInternalState$5(this, iteratorRecord);
};

AsyncFromSyncIterator$4.prototype = defineBuiltIns$3(create$4(AsyncIteratorPrototype$3), {
  next: function next() {
    var state = getInternalState$2(this);
    return new Promise$3(function (resolve, reject) {
      var result = anObject$k(call$r(state.next, state.iterator));
      asyncFromSyncIteratorContinuation(result, resolve, reject);
    });
  },
  'return': function () {
    var iterator = getInternalState$2(this).iterator;
    return new Promise$3(function (resolve, reject) {
      var $return = getMethod$8(iterator, 'return');
      if ($return === undefined) return resolve(createIterResultObject$8(undefined, true));
      var result = anObject$k(call$r($return, iterator));
      asyncFromSyncIteratorContinuation(result, resolve, reject);
    });
  }
});

var asyncFromSyncIterator = AsyncFromSyncIterator$4;

var aCallable$g = aCallable$q;
var anObject$j = anObject$x;

var getIteratorDirect$n = function (obj) {
  return {
    iterator: obj,
    next: aCallable$g(anObject$j(obj).next)
  };
};

var call$q = functionCall;
var AsyncFromSyncIterator$3 = asyncFromSyncIterator;
var anObject$i = anObject$x;
var getIterator$1 = getIterator$3;
var getIteratorDirect$m = getIteratorDirect$n;
var getMethod$7 = getMethod$e;
var wellKnownSymbol$d = wellKnownSymbol$v;

var ASYNC_ITERATOR$2 = wellKnownSymbol$d('asyncIterator');

var getAsyncIterator$1 = function (it, usingIterator) {
  var method = arguments.length < 2 ? getMethod$7(it, ASYNC_ITERATOR$2) : usingIterator;
  return method ? anObject$i(call$q(method, it)) : new AsyncFromSyncIterator$3(getIteratorDirect$m(getIterator$1(it)));
};

var call$p = functionCall;
var getBuiltIn$8 = getBuiltIn$f;
var getMethod$6 = getMethod$e;

var asyncIteratorClose = function (iterator, method, argument, reject) {
  try {
    var returnMethod = getMethod$6(iterator, 'return');
    if (returnMethod) {
      return getBuiltIn$8('Promise').resolve(call$p(returnMethod, iterator)).then(function () {
        method(argument);
      }, function (error) {
        reject(error);
      });
    }
  } catch (error2) {
    return reject(error2);
  } method(argument);
};

// https://github.com/tc39/proposal-iterator-helpers
// https://github.com/tc39/proposal-array-from-async
var call$o = functionCall;
var aCallable$f = aCallable$q;
var anObject$h = anObject$x;
var isObject$7 = isObject$h;
var doesNotExceedSafeInteger$1 = doesNotExceedSafeInteger$3;
var getBuiltIn$7 = getBuiltIn$f;
var getIteratorDirect$l = getIteratorDirect$n;
var closeAsyncIteration$4 = asyncIteratorClose;

var createMethod = function (TYPE) {
  var IS_TO_ARRAY = TYPE == 0;
  var IS_FOR_EACH = TYPE == 1;
  var IS_EVERY = TYPE == 2;
  var IS_SOME = TYPE == 3;
  return function (object, fn, target) {
    var record = getIteratorDirect$l(object);
    var Promise = getBuiltIn$7('Promise');
    var iterator = record.iterator;
    var next = record.next;
    var counter = 0;
    var MAPPING = fn !== undefined;
    if (MAPPING || !IS_TO_ARRAY) aCallable$f(fn);

    return new Promise(function (resolve, reject) {
      var ifAbruptCloseAsyncIterator = function (error) {
        closeAsyncIteration$4(iterator, reject, error, reject);
      };

      var loop = function () {
        try {
          if (MAPPING) try {
            doesNotExceedSafeInteger$1(counter);
          } catch (error5) { ifAbruptCloseAsyncIterator(error5); }
          Promise.resolve(anObject$h(call$o(next, iterator))).then(function (step) {
            try {
              if (anObject$h(step).done) {
                if (IS_TO_ARRAY) {
                  target.length = counter;
                  resolve(target);
                } else resolve(IS_SOME ? false : IS_EVERY || undefined);
              } else {
                var value = step.value;
                try {
                  if (MAPPING) {
                    var result = fn(value, counter);

                    var handler = function ($result) {
                      if (IS_FOR_EACH) {
                        loop();
                      } else if (IS_EVERY) {
                        $result ? loop() : closeAsyncIteration$4(iterator, resolve, false, reject);
                      } else if (IS_TO_ARRAY) {
                        try {
                          target[counter++] = $result;
                          loop();
                        } catch (error4) { ifAbruptCloseAsyncIterator(error4); }
                      } else {
                        $result ? closeAsyncIteration$4(iterator, resolve, IS_SOME || value, reject) : loop();
                      }
                    };

                    if (isObject$7(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                    else handler(result);
                  } else {
                    target[counter++] = value;
                    loop();
                  }
                } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
              }
            } catch (error2) { reject(error2); }
          }, reject);
        } catch (error) { reject(error); }
      };

      loop();
    });
  };
};

var asyncIteratorIteration = {
  toArray: createMethod(0),
  forEach: createMethod(1),
  every: createMethod(2),
  some: createMethod(3),
  find: createMethod(4)
};

var bind$4 = functionBindContext;
var uncurryThis$f = functionUncurryThis;
var toObject$6 = toObject$c;
var isConstructor$1 = isConstructor$3;
var getAsyncIterator = getAsyncIterator$1;
var getIterator = getIterator$3;
var getIteratorDirect$k = getIteratorDirect$n;
var getIteratorMethod$2 = getIteratorMethod$5;
var getMethod$5 = getMethod$e;
var getVirtual = entryVirtual;
var getBuiltIn$6 = getBuiltIn$f;
var wellKnownSymbol$c = wellKnownSymbol$v;
var AsyncFromSyncIterator$2 = asyncFromSyncIterator;
var toArray = asyncIteratorIteration.toArray;

var ASYNC_ITERATOR$1 = wellKnownSymbol$c('asyncIterator');
var arrayIterator = uncurryThis$f(getVirtual('Array').values);
var arrayIteratorNext = uncurryThis$f(arrayIterator([]).next);

var safeArrayIterator = function () {
  return new SafeArrayIterator(this);
};

var SafeArrayIterator = function (O) {
  this.iterator = arrayIterator(O);
};

SafeArrayIterator.prototype.next = function () {
  return arrayIteratorNext(this.iterator);
};

// `Array.fromAsync` method implementation
// https://github.com/tc39/proposal-array-from-async
var arrayFromAsync = function fromAsync(asyncItems /* , mapfn = undefined, thisArg = undefined */) {
  var C = this;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var thisArg = argumentsLength > 2 ? arguments[2] : undefined;
  return new (getBuiltIn$6('Promise'))(function (resolve) {
    var O = toObject$6(asyncItems);
    if (mapfn !== undefined) mapfn = bind$4(mapfn, thisArg);
    var usingAsyncIterator = getMethod$5(O, ASYNC_ITERATOR$1);
    var usingSyncIterator = usingAsyncIterator ? undefined : getIteratorMethod$2(O) || safeArrayIterator;
    var A = isConstructor$1(C) ? new C() : [];
    var iterator = usingAsyncIterator
      ? getAsyncIterator(O, usingAsyncIterator)
      : new AsyncFromSyncIterator$2(getIteratorDirect$k(getIterator(O, usingSyncIterator)));
    resolve(toArray(iterator, mapfn, A));
  });
};

var $$P = _export;
var fromAsync = arrayFromAsync;

// `Array.fromAsync` method
// https://github.com/tc39/proposal-array-from-async
$$P({ target: 'Array', stat: true }, {
  fromAsync: fromAsync
});

var bind$3 = functionBindContext;
var uncurryThis$e = functionUncurryThis;
var IndexedObject$1 = indexedObject;
var toObject$5 = toObject$c;
var toPropertyKey$1 = toPropertyKey$4;
var lengthOfArrayLike$6 = lengthOfArrayLike$g;
var objectCreate = objectCreate$1;
var arrayFromConstructorAndList = arrayFromConstructorAndList$3;

var $Array$2 = Array;
var push$6 = uncurryThis$e([].push);

var arrayGroup = function ($this, callbackfn, that, specificConstructor) {
  var O = toObject$5($this);
  var self = IndexedObject$1(O);
  var boundFunction = bind$3(callbackfn, that);
  var target = objectCreate(null);
  var length = lengthOfArrayLike$6(self);
  var index = 0;
  var Constructor, key, value;
  for (;length > index; index++) {
    value = self[index];
    key = toPropertyKey$1(boundFunction(value, index, O));
    // in some IE10 builds, `hasOwnProperty` returns incorrect result on integer keys
    // but since it's a `null` prototype object, we can safely use `in`
    if (key in target) push$6(target[key], value);
    else target[key] = [value];
  }
  // TODO: Remove this block from `core-js@4`
  if (specificConstructor) {
    Constructor = specificConstructor(O);
    if (Constructor !== $Array$2) {
      for (key in target) target[key] = arrayFromConstructorAndList(Constructor, target[key]);
    }
  } return target;
};

var $$O = _export;
var $group$1 = arrayGroup;
var addToUnscopables$6 = addToUnscopables$d;

// `Array.prototype.group` method
// https://github.com/tc39/proposal-array-grouping
$$O({ target: 'Array', proto: true }, {
  group: function group(callbackfn /* , thisArg */) {
    var thisArg = arguments.length > 1 ? arguments[1] : undefined;
    return $group$1(this, callbackfn, thisArg);
  }
});

addToUnscopables$6('group');

var uncurryThis$d = functionUncurryThis;

// eslint-disable-next-line es/no-map -- safe
var MapPrototype = Map.prototype;

var mapHelpers = {
  // eslint-disable-next-line es/no-map -- safe
  Map: Map,
  set: uncurryThis$d(MapPrototype.set),
  get: uncurryThis$d(MapPrototype.get),
  has: uncurryThis$d(MapPrototype.has),
  remove: uncurryThis$d(MapPrototype['delete']),
  proto: MapPrototype
};

var bind$2 = functionBindContext;
var uncurryThis$c = functionUncurryThis;
var IndexedObject = indexedObject;
var toObject$4 = toObject$c;
var lengthOfArrayLike$5 = lengthOfArrayLike$g;
var MapHelpers = mapHelpers;

var Map$1 = MapHelpers.Map;
var mapGet = MapHelpers.get;
var mapHas = MapHelpers.has;
var mapSet = MapHelpers.set;
var push$5 = uncurryThis$c([].push);

// `Array.prototype.groupToMap` method
// https://github.com/tc39/proposal-array-grouping
var arrayGroupToMap = function groupToMap(callbackfn /* , thisArg */) {
  var O = toObject$4(this);
  var self = IndexedObject(O);
  var boundFunction = bind$2(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  var map = new Map$1();
  var length = lengthOfArrayLike$5(self);
  var index = 0;
  var key, value;
  for (;length > index; index++) {
    value = self[index];
    key = boundFunction(value, index, O);
    if (mapHas(map, key)) push$5(mapGet(map, key), value);
    else mapSet(map, key, [value]);
  } return map;
};

var $$N = _export;
var addToUnscopables$5 = addToUnscopables$d;
var $groupToMap$1 = arrayGroupToMap;
var IS_PURE$1 = isPure;

// `Array.prototype.groupToMap` method
// https://github.com/tc39/proposal-array-grouping
$$N({ target: 'Array', proto: true, forced: IS_PURE$1 }, {
  groupToMap: $groupToMap$1
});

addToUnscopables$5('groupToMap');

var uncurryThisAccessor$2 = functionUncurryThisAccessor;
var classof$2 = classofRaw$2;

var $TypeError$4 = TypeError;

// Includes
// - Perform ? RequireInternalSlot(O, [[ArrayBufferData]]).
// - If IsSharedArrayBuffer(O) is true, throw a TypeError exception.
var arrayBufferByteLength$2 = uncurryThisAccessor$2(ArrayBuffer.prototype, 'byteLength', 'get') || function (O) {
  if (classof$2(O) != 'ArrayBuffer') throw $TypeError$4('ArrayBuffer expected');
  return O.byteLength;
};

var uncurryThis$b = functionUncurryThis;
var arrayBufferByteLength$1 = arrayBufferByteLength$2;

var slice$4 = uncurryThis$b(ArrayBuffer.prototype.slice);

var arrayBufferIsDetached = function (O) {
  if (arrayBufferByteLength$1(O) !== 0) return false;
  try {
    slice$4(O, 0, 0);
    return false;
  } catch (error) {
    return true;
  }
};

var DESCRIPTORS$3 = descriptors;
var defineBuiltInAccessor$1 = defineBuiltInAccessor$3;
var isDetached$1 = arrayBufferIsDetached;

var ArrayBufferPrototype$1 = ArrayBuffer.prototype;

if (DESCRIPTORS$3 && !('detached' in ArrayBufferPrototype$1)) {
  defineBuiltInAccessor$1(ArrayBufferPrototype$1, 'detached', {
    configurable: true,
    get: function detached() {
      return isDetached$1(this);
    }
  });
}

var toIntegerOrInfinity$4 = toIntegerOrInfinity$e;
var toLength = toLength$3;

var $RangeError$2 = RangeError;

// `ToIndex` abstract operation
// https://tc39.es/ecma262/#sec-toindex
var toIndex$1 = function (it) {
  if (it === undefined) return 0;
  var number = toIntegerOrInfinity$4(it);
  var length = toLength(number);
  if (number !== length) throw $RangeError$2('Wrong length or index');
  return length;
};

var global$5 = global$p;
var fails$7 = fails$p;
var V8 = engineV8Version;
var IS_BROWSER = engineIsBrowser;
var IS_DENO = engineIsDeno;
var IS_NODE = engineIsNode;

var structuredClone$1 = global$5.structuredClone;

var structuredCloneProperTransfer = !!structuredClone$1 && !fails$7(function () {
  // prevent V8 ArrayBufferDetaching protector cell invalidation and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if ((IS_DENO && V8 > 92) || (IS_NODE && V8 > 94) || (IS_BROWSER && V8 > 97)) return false;
  var buffer = new ArrayBuffer(8);
  var clone = structuredClone$1(buffer, { transfer: [buffer] });
  return buffer.byteLength != 0 || clone.byteLength != 8;
});

var global$4 = global$p;
var uncurryThis$a = functionUncurryThis;
var uncurryThisAccessor$1 = functionUncurryThisAccessor;
var toIndex = toIndex$1;
var isDetached = arrayBufferIsDetached;
var arrayBufferByteLength = arrayBufferByteLength$2;
var PROPER_TRANSFER = structuredCloneProperTransfer;

var TypeError$1 = global$4.TypeError;
var structuredClone = global$4.structuredClone;
var ArrayBuffer$1 = global$4.ArrayBuffer;
var DataView$1 = global$4.DataView;
var min$1 = Math.min;
var ArrayBufferPrototype = ArrayBuffer$1.prototype;
var DataViewPrototype = DataView$1.prototype;
var slice$3 = uncurryThis$a(ArrayBufferPrototype.slice);
var isResizable = uncurryThisAccessor$1(ArrayBufferPrototype, 'resizable', 'get');
var maxByteLength = uncurryThisAccessor$1(ArrayBufferPrototype, 'maxByteLength', 'get');
var getInt8 = uncurryThis$a(DataViewPrototype.getInt8);
var setInt8 = uncurryThis$a(DataViewPrototype.setInt8);

var arrayBufferTransfer = PROPER_TRANSFER && function (arrayBuffer, newLength, preserveResizability) {
  var byteLength = arrayBufferByteLength(arrayBuffer);
  var newByteLength = newLength === undefined ? byteLength : min$1(toIndex(newLength), byteLength);
  var fixedLength = !isResizable || !isResizable(arrayBuffer);
  if (isDetached(arrayBuffer)) throw TypeError$1('ArrayBuffer is detached');
  var newBuffer = structuredClone(arrayBuffer, { transfer: [arrayBuffer] });
  if (byteLength == newByteLength && (preserveResizability || fixedLength)) return newBuffer;
  if (!preserveResizability || fixedLength) return slice$3(newBuffer, 0, newByteLength);
  var newNewBuffer = new ArrayBuffer$1(newByteLength, maxByteLength && { maxByteLength: maxByteLength(newBuffer) });
  var a = new DataView$1(newBuffer);
  var b = new DataView$1(newNewBuffer);
  for (var i = 0; i < newByteLength; i++) setInt8(b, i, getInt8(a, i));
  return newNewBuffer;
};

var $$M = _export;
var $transfer$1 = arrayBufferTransfer;

// `ArrayBuffer.prototype.transfer` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfer
if ($transfer$1) $$M({ target: 'ArrayBuffer', proto: true }, {
  transfer: function transfer() {
    return $transfer$1(this, arguments.length ? arguments[0] : undefined, true);
  }
});

var $$L = _export;
var $transfer = arrayBufferTransfer;

// `ArrayBuffer.prototype.transferToFixedLength` method
// https://tc39.es/proposal-arraybuffer-transfer/#sec-arraybuffer.prototype.transfertofixedlength
if ($transfer) $$L({ target: 'ArrayBuffer', proto: true }, {
  transferToFixedLength: function transferToFixedLength() {
    return $transfer(this, arguments.length ? arguments[0] : undefined, false);
  }
});

var $$K = _export;
var isPrototypeOf$3 = objectIsPrototypeOf;
var getPrototypeOf$1 = objectGetPrototypeOf;
var setPrototypeOf$1 = objectSetPrototypeOf;
var copyConstructorProperties = copyConstructorProperties$3;
var create$3 = objectCreate$1;
var createNonEnumerableProperty$5 = createNonEnumerableProperty$c;
var createPropertyDescriptor$1 = createPropertyDescriptor$7;
var installErrorStack = errorStackInstall;
var normalizeStringArgument = normalizeStringArgument$2;
var wellKnownSymbol$b = wellKnownSymbol$v;

var TO_STRING_TAG$5 = wellKnownSymbol$b('toStringTag');
var $Error = Error;

var $SuppressedError = function SuppressedError(error, suppressed, message) {
  var isInstance = isPrototypeOf$3(SuppressedErrorPrototype, this);
  var that;
  if (setPrototypeOf$1) {
    that = setPrototypeOf$1($Error(), isInstance ? getPrototypeOf$1(this) : SuppressedErrorPrototype);
  } else {
    that = isInstance ? this : create$3(SuppressedErrorPrototype);
    createNonEnumerableProperty$5(that, TO_STRING_TAG$5, 'Error');
  }
  if (message !== undefined) createNonEnumerableProperty$5(that, 'message', normalizeStringArgument(message));
  installErrorStack(that, $SuppressedError, that.stack, 1);
  createNonEnumerableProperty$5(that, 'error', error);
  createNonEnumerableProperty$5(that, 'suppressed', suppressed);
  return that;
};

if (setPrototypeOf$1) setPrototypeOf$1($SuppressedError, $Error);
else copyConstructorProperties($SuppressedError, $Error, { name: true });

var SuppressedErrorPrototype = $SuppressedError.prototype = create$3($Error.prototype, {
  constructor: createPropertyDescriptor$1(1, $SuppressedError),
  message: createPropertyDescriptor$1(1, ''),
  name: createPropertyDescriptor$1(1, 'SuppressedError')
});

// `SuppressedError` constructor
// https://github.com/tc39/proposal-explicit-resource-management
$$K({ global: true, constructor: true, arity: 3 }, {
  SuppressedError: $SuppressedError
});

var isPrototypeOf$2 = objectIsPrototypeOf;

var $TypeError$3 = TypeError;

var anInstance$3 = function (it, Prototype) {
  if (isPrototypeOf$2(Prototype, it)) return it;
  throw $TypeError$3('Incorrect invocation');
};

var uncurryThis$9 = functionUncurryThis;
var bind$1 = functionBindContext;
var anObject$g = anObject$x;
var isNullOrUndefined = isNullOrUndefined$7;
var getMethod$4 = getMethod$e;
var wellKnownSymbol$a = wellKnownSymbol$v;

var ASYNC_DISPOSE = wellKnownSymbol$a('asyncDispose');
var DISPOSE$2 = wellKnownSymbol$a('dispose');

var push$4 = uncurryThis$9([].push);

var getDisposeMethod = function (V, hint) {
  if (hint == 'async-dispose') {
    return getMethod$4(V, ASYNC_DISPOSE) || getMethod$4(V, DISPOSE$2);
  } return getMethod$4(V, DISPOSE$2);
};

// `CreateDisposableResource` abstract operation
// https://tc39.es/proposal-explicit-resource-management/#sec-createdisposableresource
var createDisposableResource = function (V, hint, method) {
  return bind$1(method || getDisposeMethod(V, hint), V);
};

// `AddDisposableResource` abstract operation
// https://tc39.es/proposal-explicit-resource-management/#sec-adddisposableresource-disposable-v-hint-disposemethod
var addDisposableResource$1 = function (disposable, V, hint, method) {
  var resource;
  if (!method) {
    if (isNullOrUndefined(V)) return;
    resource = createDisposableResource(V, hint);
  } else if (isNullOrUndefined(V)) {
    resource = createDisposableResource(undefined, hint, method);
  } else {
    resource = createDisposableResource(anObject$g(V), hint, method);
  }

  push$4(disposable.stack, resource);
};

// https://github.com/tc39/proposal-explicit-resource-management
var $$J = _export;
var DESCRIPTORS$2 = descriptors;
var getBuiltIn$5 = getBuiltIn$f;
var aCallable$e = aCallable$q;
var anInstance$2 = anInstance$3;
var defineBuiltIn$2 = defineBuiltIn$9;
var defineBuiltIns$2 = defineBuiltIns$4;
var defineBuiltInAccessor = defineBuiltInAccessor$3;
var wellKnownSymbol$9 = wellKnownSymbol$v;
var InternalStateModule$3 = internalState;
var addDisposableResource = addDisposableResource$1;

var SuppressedError = getBuiltIn$5('SuppressedError');
var $ReferenceError = ReferenceError;

var DISPOSE$1 = wellKnownSymbol$9('dispose');
var TO_STRING_TAG$4 = wellKnownSymbol$9('toStringTag');

var DISPOSABLE_STACK = 'DisposableStack';
var setInternalState$4 = InternalStateModule$3.set;
var getDisposableStackInternalState = InternalStateModule$3.getterFor(DISPOSABLE_STACK);

var HINT = 'sync-dispose';
var DISPOSED = 'disposed';
var PENDING = 'pending';

var ALREADY_DISPOSED = DISPOSABLE_STACK + ' already disposed';

var $DisposableStack = function DisposableStack() {
  setInternalState$4(anInstance$2(this, DisposableStackPrototype), {
    type: DISPOSABLE_STACK,
    state: PENDING,
    stack: []
  });

  if (!DESCRIPTORS$2) this.disposed = false;
};

var DisposableStackPrototype = $DisposableStack.prototype;

defineBuiltIns$2(DisposableStackPrototype, {
  dispose: function dispose() {
    var internalState = getDisposableStackInternalState(this);
    if (internalState.state == DISPOSED) return;
    internalState.state = DISPOSED;
    if (!DESCRIPTORS$2) this.disposed = true;
    var stack = internalState.stack;
    var i = stack.length;
    var thrown = false;
    var suppressed;
    while (i) {
      var disposeMethod = stack[--i];
      stack[i] = null;
      try {
        disposeMethod();
      } catch (errorResult) {
        if (thrown) {
          suppressed = new SuppressedError(errorResult, suppressed);
        } else {
          thrown = true;
          suppressed = errorResult;
        }
      }
    }
    internalState.stack = null;
    if (thrown) throw suppressed;
  },
  use: function use(value) {
    var internalState = getDisposableStackInternalState(this);
    if (internalState.state == DISPOSED) throw $ReferenceError(ALREADY_DISPOSED);
    addDisposableResource(internalState, value, HINT);
    return value;
  },
  adopt: function adopt(value, onDispose) {
    var internalState = getDisposableStackInternalState(this);
    if (internalState.state == DISPOSED) throw $ReferenceError(ALREADY_DISPOSED);
    aCallable$e(onDispose);
    addDisposableResource(internalState, undefined, HINT, function () {
      onDispose(value);
    });
    return value;
  },
  defer: function defer(onDispose) {
    var internalState = getDisposableStackInternalState(this);
    if (internalState.state == DISPOSED) throw $ReferenceError(ALREADY_DISPOSED);
    aCallable$e(onDispose);
    addDisposableResource(internalState, undefined, HINT, onDispose);
  },
  move: function move() {
    var internalState = getDisposableStackInternalState(this);
    if (internalState.state == DISPOSED) throw $ReferenceError(ALREADY_DISPOSED);
    var newDisposableStack = new $DisposableStack();
    getDisposableStackInternalState(newDisposableStack).stack = internalState.stack;
    internalState.stack = [];
    return newDisposableStack;
  }
});

if (DESCRIPTORS$2) defineBuiltInAccessor(DisposableStackPrototype, 'disposed', {
  configurable: true,
  get: function disposed() {
    return getDisposableStackInternalState(this).state == DISPOSED;
  }
});

defineBuiltIn$2(DisposableStackPrototype, DISPOSE$1, DisposableStackPrototype.dispose, { name: 'dispose' });
defineBuiltIn$2(DisposableStackPrototype, TO_STRING_TAG$4, DISPOSABLE_STACK, { nonWritable: true });

$$J({ global: true, constructor: true }, {
  DisposableStack: $DisposableStack
});

// https://github.com/tc39/proposal-explicit-resource-management
var call$n = functionCall;
var defineBuiltIn$1 = defineBuiltIn$9;
var getMethod$3 = getMethod$e;
var hasOwn$5 = hasOwnProperty_1;
var wellKnownSymbol$8 = wellKnownSymbol$v;
var IteratorPrototype$4 = iteratorsCore.IteratorPrototype;

var DISPOSE = wellKnownSymbol$8('dispose');

if (!hasOwn$5(IteratorPrototype$4, DISPOSE)) {
  defineBuiltIn$1(IteratorPrototype$4, DISPOSE, function () {
    var $return = getMethod$3(this, 'return');
    if ($return) call$n($return, this);
  });
}

var wellKnownSymbolWrapped = {};

var wellKnownSymbol$7 = wellKnownSymbol$v;

wellKnownSymbolWrapped.f = wellKnownSymbol$7;

var path$1 = path$2;
var hasOwn$4 = hasOwnProperty_1;
var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
var defineProperty$1 = objectDefineProperty.f;

var wellKnownSymbolDefine = function (NAME) {
  var Symbol = path$1.Symbol || (path$1.Symbol = {});
  if (!hasOwn$4(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};

var defineWellKnownSymbol = wellKnownSymbolDefine;

// `Symbol.dispose` well-known symbol
// https://github.com/tc39/proposal-explicit-resource-management
defineWellKnownSymbol('dispose');

var $$I = _export;
var global$3 = global$p;
var anInstance$1 = anInstance$3;
var isCallable$6 = isCallable$r;
var createNonEnumerableProperty$4 = createNonEnumerableProperty$c;
var fails$6 = fails$p;
var hasOwn$3 = hasOwnProperty_1;
var wellKnownSymbol$6 = wellKnownSymbol$v;
var IteratorPrototype$3 = iteratorsCore.IteratorPrototype;

var TO_STRING_TAG$3 = wellKnownSymbol$6('toStringTag');

var NativeIterator = global$3.Iterator;

// FF56- have non-standard global helper `Iterator`
var FORCED = !isCallable$6(NativeIterator)
  || NativeIterator.prototype !== IteratorPrototype$3
  // FF44- non-standard `Iterator` passes previous tests
  || !fails$6(function () { NativeIterator({}); });

var IteratorConstructor = function Iterator() {
  anInstance$1(this, IteratorPrototype$3);
};

if (!hasOwn$3(IteratorPrototype$3, TO_STRING_TAG$3)) {
  createNonEnumerableProperty$4(IteratorPrototype$3, TO_STRING_TAG$3, 'Iterator');
}

if (FORCED || !hasOwn$3(IteratorPrototype$3, 'constructor') || IteratorPrototype$3.constructor === Object) {
  createNonEnumerableProperty$4(IteratorPrototype$3, 'constructor', IteratorConstructor);
}

IteratorConstructor.prototype = IteratorPrototype$3;

// `Iterator` constructor
// https://github.com/tc39/proposal-iterator-helpers
$$I({ global: true, constructor: true, forced: FORCED }, {
  Iterator: IteratorConstructor
});

var $RangeError$1 = RangeError;

var notANan = function (it) {
  // eslint-disable-next-line no-self-compare -- NaN check
  if (it === it) return it;
  throw $RangeError$1('NaN is not allowed');
};

var toIntegerOrInfinity$3 = toIntegerOrInfinity$e;

var $RangeError = RangeError;

var toPositiveInteger$4 = function (it) {
  var result = toIntegerOrInfinity$3(it);
  if (result < 0) throw $RangeError("The argument can't be less than 0");
  return result;
};

var call$m = functionCall;
var create$2 = objectCreate$1;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$c;
var defineBuiltIns$1 = defineBuiltIns$4;
var wellKnownSymbol$5 = wellKnownSymbol$v;
var InternalStateModule$2 = internalState;
var getMethod$2 = getMethod$e;
var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
var createIterResultObject$7 = createIterResultObject$a;
var iteratorClose$6 = iteratorClose$8;

var TO_STRING_TAG$2 = wellKnownSymbol$5('toStringTag');
var ITERATOR_HELPER = 'IteratorHelper';
var WRAP_FOR_VALID_ITERATOR = 'WrapForValidIterator';
var setInternalState$3 = InternalStateModule$2.set;

var createIteratorProxyPrototype = function (IS_ITERATOR) {
  var getInternalState = InternalStateModule$2.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER);

  return defineBuiltIns$1(create$2(IteratorPrototype$2), {
    next: function next() {
      var state = getInternalState(this);
      // for simplification:
      //   for `%WrapForValidIteratorPrototype%.next` our `nextHandler` returns `IterResultObject`
      //   for `%IteratorHelperPrototype%.next` - just a value
      if (IS_ITERATOR) return state.nextHandler();
      try {
        var result = state.done ? undefined : state.nextHandler();
        return createIterResultObject$7(result, state.done);
      } catch (error) {
        state.done = true;
        throw error;
      }
    },
    'return': function () {
      var state = getInternalState(this);
      var iterator = state.iterator;
      state.done = true;
      if (IS_ITERATOR) {
        var returnMethod = getMethod$2(iterator, 'return');
        return returnMethod ? call$m(returnMethod, iterator) : createIterResultObject$7(undefined, true);
      }
      if (state.inner) try {
        iteratorClose$6(state.inner.iterator, 'normal');
      } catch (error) {
        return iteratorClose$6(iterator, 'throw', error);
      }
      iteratorClose$6(iterator, 'normal');
      return createIterResultObject$7(undefined, true);
    }
  });
};

var WrapForValidIteratorPrototype = createIteratorProxyPrototype(true);
var IteratorHelperPrototype = createIteratorProxyPrototype(false);

createNonEnumerableProperty$3(IteratorHelperPrototype, TO_STRING_TAG$2, 'Iterator Helper');

var iteratorCreateProxy = function (nextHandler, IS_ITERATOR) {
  var IteratorProxy = function Iterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ITERATOR : ITERATOR_HELPER;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState$3(this, state);
  };

  IteratorProxy.prototype = IS_ITERATOR ? WrapForValidIteratorPrototype : IteratorHelperPrototype;

  return IteratorProxy;
};

var $$H = _export;
var call$l = functionCall;
var anObject$f = anObject$x;
var getIteratorDirect$j = getIteratorDirect$n;
var notANaN$3 = notANan;
var toPositiveInteger$3 = toPositiveInteger$4;
var createIteratorProxy$5 = iteratorCreateProxy;

var IteratorProxy$5 = createIteratorProxy$5(function () {
  var iterator = this.iterator;
  var next = this.next;
  var result, done;
  while (this.remaining) {
    this.remaining--;
    result = anObject$f(call$l(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
  }
  result = anObject$f(call$l(next, iterator));
  done = this.done = !!result.done;
  if (!done) return result.value;
});

// `Iterator.prototype.drop` method
// https://github.com/tc39/proposal-iterator-helpers
$$H({ target: 'Iterator', proto: true, real: true }, {
  drop: function drop(limit) {
    return new IteratorProxy$5(getIteratorDirect$j(this), {
      remaining: toPositiveInteger$3(notANaN$3(+limit))
    });
  }
});

var $$G = _export;
var iterate$8 = iterate$c;
var aCallable$d = aCallable$q;
var getIteratorDirect$i = getIteratorDirect$n;

// `Iterator.prototype.every` method
// https://github.com/tc39/proposal-iterator-helpers
$$G({ target: 'Iterator', proto: true, real: true }, {
  every: function every(predicate) {
    var record = getIteratorDirect$i(this);
    var counter = 0;
    aCallable$d(predicate);
    return !iterate$8(record, function (value, stop) {
      if (!predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});

var anObject$e = anObject$x;
var iteratorClose$5 = iteratorClose$8;

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing$2 = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject$e(value)[0], value[1]) : fn(value);
  } catch (error) {
    iteratorClose$5(iterator, 'throw', error);
  }
};

var $$F = _export;
var call$k = functionCall;
var aCallable$c = aCallable$q;
var anObject$d = anObject$x;
var getIteratorDirect$h = getIteratorDirect$n;
var createIteratorProxy$4 = iteratorCreateProxy;
var callWithSafeIterationClosing$1 = callWithSafeIterationClosing$2;

var IteratorProxy$4 = createIteratorProxy$4(function () {
  var iterator = this.iterator;
  var predicate = this.predicate;
  var next = this.next;
  var result, done, value;
  while (true) {
    result = anObject$d(call$k(next, iterator));
    done = this.done = !!result.done;
    if (done) return;
    value = result.value;
    if (callWithSafeIterationClosing$1(iterator, predicate, [value, this.counter++], true)) return value;
  }
});

// `Iterator.prototype.filter` method
// https://github.com/tc39/proposal-iterator-helpers
$$F({ target: 'Iterator', proto: true, real: true }, {
  filter: function filter(predicate) {
    return new IteratorProxy$4(getIteratorDirect$h(this), {
      predicate: aCallable$c(predicate)
    });
  }
});

var $$E = _export;
var iterate$7 = iterate$c;
var aCallable$b = aCallable$q;
var getIteratorDirect$g = getIteratorDirect$n;

// `Iterator.prototype.find` method
// https://github.com/tc39/proposal-iterator-helpers
$$E({ target: 'Iterator', proto: true, real: true }, {
  find: function find(predicate) {
    var record = getIteratorDirect$g(this);
    var counter = 0;
    aCallable$b(predicate);
    return iterate$7(record, function (value, stop) {
      if (predicate(value, counter++)) return stop(value);
    }, { IS_RECORD: true, INTERRUPTED: true }).result;
  }
});

var call$j = functionCall;
var isCallable$5 = isCallable$r;
var anObject$c = anObject$x;
var getIteratorDirect$f = getIteratorDirect$n;
var getIteratorMethod$1 = getIteratorMethod$5;

var getIteratorFlattenable$2 = function (obj) {
  var object = anObject$c(obj);
  var method = getIteratorMethod$1(object);
  return getIteratorDirect$f(anObject$c(isCallable$5(method) ? call$j(method, object) : object));
};

var $$D = _export;
var call$i = functionCall;
var aCallable$a = aCallable$q;
var anObject$b = anObject$x;
var getIteratorDirect$e = getIteratorDirect$n;
var getIteratorFlattenable$1 = getIteratorFlattenable$2;
var createIteratorProxy$3 = iteratorCreateProxy;
var iteratorClose$4 = iteratorClose$8;

var IteratorProxy$3 = createIteratorProxy$3(function () {
  var iterator = this.iterator;
  var mapper = this.mapper;
  var result, inner;

  while (true) {
    if (inner = this.inner) try {
      result = anObject$b(call$i(inner.next, inner.iterator));
      if (!result.done) return result.value;
      this.inner = null;
    } catch (error) { iteratorClose$4(iterator, 'throw', error); }

    result = anObject$b(call$i(this.next, iterator));

    if (this.done = !!result.done) return;

    try {
      this.inner = getIteratorFlattenable$1(mapper(result.value, this.counter++));
    } catch (error) { iteratorClose$4(iterator, 'throw', error); }
  }
});

// `Iterator.prototype.flatMap` method
// https://github.com/tc39/proposal-iterator-helpers
$$D({ target: 'Iterator', proto: true, real: true }, {
  flatMap: function flatMap(mapper) {
    return new IteratorProxy$3(getIteratorDirect$e(this), {
      mapper: aCallable$a(mapper),
      inner: null
    });
  }
});

var $$C = _export;
var iterate$6 = iterate$c;
var aCallable$9 = aCallable$q;
var getIteratorDirect$d = getIteratorDirect$n;

// `Iterator.prototype.forEach` method
// https://github.com/tc39/proposal-iterator-helpers
$$C({ target: 'Iterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    var record = getIteratorDirect$d(this);
    var counter = 0;
    aCallable$9(fn);
    iterate$6(record, function (value) {
      fn(value, counter++);
    }, { IS_RECORD: true });
  }
});

var $$B = _export;
var call$h = functionCall;
var toObject$3 = toObject$c;
var isPrototypeOf$1 = objectIsPrototypeOf;
var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
var createIteratorProxy$2 = iteratorCreateProxy;
var getIteratorFlattenable = getIteratorFlattenable$2;

var IteratorProxy$2 = createIteratorProxy$2(function () {
  return call$h(this.next, this.iterator);
}, true);

// `Iterator.from` method
// https://github.com/tc39/proposal-iterator-helpers
$$B({ target: 'Iterator', stat: true }, {
  from: function from(O) {
    var iteratorRecord = getIteratorFlattenable(typeof O == 'string' ? toObject$3(O) : O);
    return isPrototypeOf$1(IteratorPrototype$1, iteratorRecord.iterator)
      ? iteratorRecord.iterator
      : new IteratorProxy$2(iteratorRecord);
  }
});

var call$g = functionCall;
var aCallable$8 = aCallable$q;
var anObject$a = anObject$x;
var getIteratorDirect$c = getIteratorDirect$n;
var createIteratorProxy$1 = iteratorCreateProxy;
var callWithSafeIterationClosing = callWithSafeIterationClosing$2;

var IteratorProxy$1 = createIteratorProxy$1(function () {
  var iterator = this.iterator;
  var result = anObject$a(call$g(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return callWithSafeIterationClosing(iterator, this.mapper, [result.value, this.counter++], true);
});

// `Iterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
var iteratorMap = function map(mapper) {
  return new IteratorProxy$1(getIteratorDirect$c(this), {
    mapper: aCallable$8(mapper)
  });
};

var $$A = _export;
var map$1 = iteratorMap;

// `Iterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
$$A({ target: 'Iterator', proto: true, real: true }, {
  map: map$1
});

var $$z = _export;
var iterate$5 = iterate$c;
var aCallable$7 = aCallable$q;
var getIteratorDirect$b = getIteratorDirect$n;

var $TypeError$2 = TypeError;

// `Iterator.prototype.reduce` method
// https://github.com/tc39/proposal-iterator-helpers
$$z({ target: 'Iterator', proto: true, real: true }, {
  reduce: function reduce(reducer /* , initialValue */) {
    var record = getIteratorDirect$b(this);
    aCallable$7(reducer);
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    var counter = 0;
    iterate$5(record, function (value) {
      if (noInitial) {
        noInitial = false;
        accumulator = value;
      } else {
        accumulator = reducer(accumulator, value, counter);
      }
      counter++;
    }, { IS_RECORD: true });
    if (noInitial) throw $TypeError$2('Reduce of empty iterator with no initial value');
    return accumulator;
  }
});

var $$y = _export;
var iterate$4 = iterate$c;
var aCallable$6 = aCallable$q;
var getIteratorDirect$a = getIteratorDirect$n;

// `Iterator.prototype.some` method
// https://github.com/tc39/proposal-iterator-helpers
$$y({ target: 'Iterator', proto: true, real: true }, {
  some: function some(predicate) {
    var record = getIteratorDirect$a(this);
    var counter = 0;
    aCallable$6(predicate);
    return iterate$4(record, function (value, stop) {
      if (predicate(value, counter++)) return stop();
    }, { IS_RECORD: true, INTERRUPTED: true }).stopped;
  }
});

var $$x = _export;
var call$f = functionCall;
var anObject$9 = anObject$x;
var getIteratorDirect$9 = getIteratorDirect$n;
var notANaN$2 = notANan;
var toPositiveInteger$2 = toPositiveInteger$4;
var createIteratorProxy = iteratorCreateProxy;
var iteratorClose$3 = iteratorClose$8;

var IteratorProxy = createIteratorProxy(function () {
  var iterator = this.iterator;
  if (!this.remaining--) {
    this.done = true;
    return iteratorClose$3(iterator, 'normal', undefined);
  }
  var result = anObject$9(call$f(this.next, iterator));
  var done = this.done = !!result.done;
  if (!done) return result.value;
});

// `Iterator.prototype.take` method
// https://github.com/tc39/proposal-iterator-helpers
$$x({ target: 'Iterator', proto: true, real: true }, {
  take: function take(limit) {
    return new IteratorProxy(getIteratorDirect$9(this), {
      remaining: toPositiveInteger$2(notANaN$2(+limit))
    });
  }
});

var $$w = _export;
var iterate$3 = iterate$c;
var getIteratorDirect$8 = getIteratorDirect$n;

var push$3 = [].push;

// `Iterator.prototype.toArray` method
// https://github.com/tc39/proposal-iterator-helpers
$$w({ target: 'Iterator', proto: true, real: true }, {
  toArray: function toArray() {
    var result = [];
    iterate$3(getIteratorDirect$8(this), push$3, { that: result, IS_RECORD: true });
    return result;
  }
});

/* eslint-disable es/no-json -- safe */

var fails$5 = fails$p;

var nativeRawJson = !fails$5(function () {
  var unsafeInt = '9007199254740993';
  var raw = JSON.rawJSON(unsafeInt);
  return !JSON.isRawJSON(raw) || JSON.stringify(raw) !== unsafeInt;
});

var isObject$6 = isObject$h;
var getInternalState$1 = internalState.get;

var isRawJson = function isRawJSON(O) {
  if (!isObject$6(O)) return false;
  var state = getInternalState$1(O);
  return !!state && state.type === 'RawJSON';
};

var $$v = _export;
var NATIVE_RAW_JSON$1 = nativeRawJson;
var isRawJSON$1 = isRawJson;

// `JSON.parse` method
// https://tc39.es/proposal-json-parse-with-source/#sec-json.israwjson
// https://github.com/tc39/proposal-json-parse-with-source
$$v({ target: 'JSON', stat: true, forced: !NATIVE_RAW_JSON$1 }, {
  isRawJSON: isRawJSON$1
});

var classof$1 = classofRaw$2;

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
var isArray$5 = Array.isArray || function isArray(argument) {
  return classof$1(argument) == 'Array';
};

var toPropertyKey = toPropertyKey$4;
var definePropertyModule = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$7;

var createProperty$3 = function (object, key, value) {
  var propertyKey = toPropertyKey(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var uncurryThis$8 = functionUncurryThis;
var hasOwn$2 = hasOwnProperty_1;

var $SyntaxError$1 = SyntaxError;
var $parseInt = parseInt;
var fromCharCode = String.fromCharCode;
var at$2 = uncurryThis$8(''.charAt);
var slice$2 = uncurryThis$8(''.slice);
var exec$2 = uncurryThis$8(/./.exec);

var codePoints = {
  '\\"': '"',
  '\\\\': '\\',
  '\\/': '/',
  '\\b': '\b',
  '\\f': '\f',
  '\\n': '\n',
  '\\r': '\r',
  '\\t': '\t'
};

var IS_4_HEX_DIGITS = /^[\da-f]{4}$/i;
// eslint-disable-next-line regexp/no-control-character -- safe
var IS_C0_CONTROL_CODE = /^[\u0000-\u001F]$/;

var parseJsonString = function (source, i) {
  var unterminated = true;
  var value = '';
  while (i < source.length) {
    var chr = at$2(source, i);
    if (chr == '\\') {
      var twoChars = slice$2(source, i, i + 2);
      if (hasOwn$2(codePoints, twoChars)) {
        value += codePoints[twoChars];
        i += 2;
      } else if (twoChars == '\\u') {
        i += 2;
        var fourHexDigits = slice$2(source, i, i + 4);
        if (!exec$2(IS_4_HEX_DIGITS, fourHexDigits)) throw $SyntaxError$1('Bad Unicode escape at: ' + i);
        value += fromCharCode($parseInt(fourHexDigits, 16));
        i += 4;
      } else throw $SyntaxError$1('Unknown escape sequence: "' + twoChars + '"');
    } else if (chr == '"') {
      unterminated = false;
      i++;
      break;
    } else {
      if (exec$2(IS_C0_CONTROL_CODE, chr)) throw $SyntaxError$1('Bad control character in string literal at: ' + i);
      value += chr;
      i++;
    }
  }
  if (unterminated) throw $SyntaxError$1('Unterminated string at: ' + i);
  return { value: value, end: i };
};

var $$u = _export;
var DESCRIPTORS$1 = descriptors;
var global$2 = global$p;
var getBuiltIn$4 = getBuiltIn$f;
var uncurryThis$7 = functionUncurryThis;
var call$e = functionCall;
var isCallable$4 = isCallable$r;
var isObject$5 = isObject$h;
var isArray$4 = isArray$5;
var hasOwn$1 = hasOwnProperty_1;
var toString$4 = toString$b;
var lengthOfArrayLike$4 = lengthOfArrayLike$g;
var createProperty$2 = createProperty$3;
var fails$4 = fails$p;
var parseJSONString$1 = parseJsonString;
var NATIVE_SYMBOL = symbolConstructorDetection;

var JSON$1 = global$2.JSON;
var Number = global$2.Number;
var SyntaxError$1 = global$2.SyntaxError;
var nativeParse = JSON$1 && JSON$1.parse;
var enumerableOwnProperties = getBuiltIn$4('Object', 'keys');
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var at$1 = uncurryThis$7(''.charAt);
var slice$1 = uncurryThis$7(''.slice);
var exec$1 = uncurryThis$7(/./.exec);
var push$2 = uncurryThis$7([].push);

var IS_DIGIT = /^\d$/;
var IS_NON_ZERO_DIGIT = /^[1-9]$/;
var IS_NUMBER_START = /^(-|\d)$/;
var IS_WHITESPACE$1 = /^[\t\n\r ]$/;

var PRIMITIVE = 0;
var OBJECT = 1;

var $parse = function (source, reviver) {
  source = toString$4(source);
  var context = new Context(source, 0);
  var root = context.parse();
  var value = root.value;
  var endIndex = context.skip(IS_WHITESPACE$1, root.end);
  if (endIndex < source.length) {
    throw SyntaxError$1('Unexpected extra character: "' + at$1(source, endIndex) + '" after the parsed data at: ' + endIndex);
  }
  return isCallable$4(reviver) ? internalize({ '': value }, '', reviver, root) : value;
};

var internalize = function (holder, name, reviver, node) {
  var val = holder[name];
  var unmodified = node && val === node.value;
  var context = unmodified && typeof node.source == 'string' ? { source: node.source } : {};
  var elementRecordsLen, keys, len, i, P;
  if (isObject$5(val)) {
    var nodeIsArray = isArray$4(val);
    var nodes = unmodified ? node.nodes : nodeIsArray ? [] : {};
    if (nodeIsArray) {
      elementRecordsLen = nodes.length;
      len = lengthOfArrayLike$4(val);
      for (i = 0; i < len; i++) {
        internalizeProperty(val, i, internalize(val, '' + i, reviver, i < elementRecordsLen ? nodes[i] : undefined));
      }
    } else {
      keys = enumerableOwnProperties(val);
      len = lengthOfArrayLike$4(keys);
      for (i = 0; i < len; i++) {
        P = keys[i];
        internalizeProperty(val, P, internalize(val, P, reviver, hasOwn$1(nodes, P) ? nodes[P] : undefined));
      }
    }
  }
  return call$e(reviver, holder, name, val, context);
};

var internalizeProperty = function (object, key, value) {
  if (DESCRIPTORS$1) {
    var descriptor = getOwnPropertyDescriptor(object, key);
    if (descriptor && !descriptor.configurable) return;
  }
  if (value === undefined) delete object[key];
  else createProperty$2(object, key, value);
};

var Node = function (value, end, source, nodes) {
  this.value = value;
  this.end = end;
  this.source = source;
  this.nodes = nodes;
};

var Context = function (source, index) {
  this.source = source;
  this.index = index;
};

// https://www.json.org/json-en.html
Context.prototype = {
  fork: function (nextIndex) {
    return new Context(this.source, nextIndex);
  },
  parse: function () {
    var source = this.source;
    var i = this.skip(IS_WHITESPACE$1, this.index);
    var fork = this.fork(i);
    var chr = at$1(source, i);
    var result;
    if (exec$1(IS_NUMBER_START, chr)) result = fork.number();
    else switch (chr) {
      case '{':
        result = fork.object();
        break;
      case '[':
        result = fork.array();
        break;
      case '"':
        result = fork.string();
        break;
      case 't':
        result = fork.keyword(true);
        break;
      case 'f':
        result = fork.keyword(false);
        break;
      case 'n':
        result = fork.keyword(null);
        break;
      default:
        throw SyntaxError$1('Unexpected character: "' + chr + '" at: ' + i);
    }
    return result;
  },
  node: function (type, value, start, end, nodes) {
    return new Node(value, end, type ? null : slice$1(this.source, start, end), nodes);
  },
  object: function () {
    var source = this.source;
    var i = this.index + 1;
    var expectKeypair = false;
    var object = {};
    var nodes = {};
    while (i < source.length) {
      i = this.until(['"', '}'], i);
      if (at$1(source, i) == '}' && !expectKeypair) {
        i++;
        break;
      }
      // Parsing the key
      var result = this.fork(i).string();
      var key = result.value;
      i = result.end;
      i = this.until([':'], i) + 1;
      // Parsing value
      i = this.skip(IS_WHITESPACE$1, i);
      result = this.fork(i).parse();
      createProperty$2(nodes, key, result);
      createProperty$2(object, key, result.value);
      i = this.until([',', '}'], result.end);
      var chr = at$1(source, i);
      if (chr == ',') {
        expectKeypair = true;
        i++;
      } else if (chr == '}') {
        i++;
        break;
      }
    }
    return this.node(OBJECT, object, this.index, i, nodes);
  },
  array: function () {
    var source = this.source;
    var i = this.index + 1;
    var expectElement = false;
    var array = [];
    var nodes = [];
    while (i < source.length) {
      i = this.skip(IS_WHITESPACE$1, i);
      if (at$1(source, i) == ']' && !expectElement) {
        i++;
        break;
      }
      var result = this.fork(i).parse();
      push$2(nodes, result);
      push$2(array, result.value);
      i = this.until([',', ']'], result.end);
      if (at$1(source, i) == ',') {
        expectElement = true;
        i++;
      } else if (at$1(source, i) == ']') {
        i++;
        break;
      }
    }
    return this.node(OBJECT, array, this.index, i, nodes);
  },
  string: function () {
    var index = this.index;
    var parsed = parseJSONString$1(this.source, this.index + 1);
    return this.node(PRIMITIVE, parsed.value, index, parsed.end);
  },
  number: function () {
    var source = this.source;
    var startIndex = this.index;
    var i = startIndex;
    if (at$1(source, i) == '-') i++;
    if (at$1(source, i) == '0') i++;
    else if (exec$1(IS_NON_ZERO_DIGIT, at$1(source, i))) i = this.skip(IS_DIGIT, ++i);
    else throw SyntaxError$1('Failed to parse number at: ' + i);
    if (at$1(source, i) == '.') i = this.skip(IS_DIGIT, ++i);
    if (at$1(source, i) == 'e' || at$1(source, i) == 'E') {
      i++;
      if (at$1(source, i) == '+' || at$1(source, i) == '-') i++;
      var exponentStartIndex = i;
      i = this.skip(IS_DIGIT, i);
      if (exponentStartIndex == i) throw SyntaxError$1("Failed to parse number's exponent value at: " + i);
    }
    return this.node(PRIMITIVE, Number(slice$1(source, startIndex, i)), startIndex, i);
  },
  keyword: function (value) {
    var keyword = '' + value;
    var index = this.index;
    var endIndex = index + keyword.length;
    if (slice$1(this.source, index, endIndex) != keyword) throw SyntaxError$1('Failed to parse value at: ' + index);
    return this.node(PRIMITIVE, value, index, endIndex);
  },
  skip: function (regex, i) {
    var source = this.source;
    for (; i < source.length; i++) if (!exec$1(regex, at$1(source, i))) break;
    return i;
  },
  until: function (array, i) {
    i = this.skip(IS_WHITESPACE$1, i);
    var chr = at$1(this.source, i);
    for (var j = 0; j < array.length; j++) if (array[j] == chr) return i;
    throw SyntaxError$1('Unexpected character: "' + chr + '" at: ' + i);
  }
};

var NO_SOURCE_SUPPORT = fails$4(function () {
  var unsafeInt = '9007199254740993';
  var source;
  nativeParse(unsafeInt, function (key, value, context) {
    source = context.source;
  });
  return source !== unsafeInt;
});

var PROPER_BASE_PARSE = NATIVE_SYMBOL && !fails$4(function () {
  // Safari 9 bug
  return 1 / nativeParse('-0 \t') !== -Infinity;
});

// `JSON.parse` method
// https://tc39.es/ecma262/#sec-json.parse
// https://github.com/tc39/proposal-json-parse-with-source
$$u({ target: 'JSON', stat: true, forced: NO_SOURCE_SUPPORT }, {
  parse: function parse(text, reviver) {
    return PROPER_BASE_PARSE && !isCallable$4(reviver) ? nativeParse(text) : $parse(text, reviver);
  }
});

var fails$3 = fails$p;

var freezing = !fails$3(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});

var uncurryThis$6 = functionUncurryThis;
var isArray$3 = isArray$5;
var isCallable$3 = isCallable$r;
var classof = classofRaw$2;
var toString$3 = toString$b;

var push$1 = uncurryThis$6([].push);

var getJsonReplacerFunction = function (replacer) {
  if (isCallable$3(replacer)) return replacer;
  if (!isArray$3(replacer)) return;
  var rawLength = replacer.length;
  var keys = [];
  for (var i = 0; i < rawLength; i++) {
    var element = replacer[i];
    if (typeof element == 'string') push$1(keys, element);
    else if (typeof element == 'number' || classof(element) == 'Number' || classof(element) == 'String') push$1(keys, toString$3(element));
  }
  var keysLength = keys.length;
  var root = true;
  return function (key, value) {
    if (root) {
      root = false;
      return value;
    }
    if (isArray$3(this)) return value;
    for (var j = 0; j < keysLength; j++) if (keys[j] === key) return value;
  };
};

var $$t = _export;
var FREEZING = freezing;
var NATIVE_RAW_JSON = nativeRawJson;
var getBuiltIn$3 = getBuiltIn$f;
var call$d = functionCall;
var uncurryThis$5 = functionUncurryThis;
var isCallable$2 = isCallable$r;
var isRawJSON = isRawJson;
var toString$2 = toString$b;
var createProperty$1 = createProperty$3;
var parseJSONString = parseJsonString;
var getReplacerFunction = getJsonReplacerFunction;
var uid = uid$4;
var setInternalState$2 = internalState.set;

var $String = String;
var $SyntaxError = SyntaxError;
var parse = getBuiltIn$3('JSON', 'parse');
var $stringify = getBuiltIn$3('JSON', 'stringify');
var create$1 = getBuiltIn$3('Object', 'create');
var freeze = getBuiltIn$3('Object', 'freeze');
var at = uncurryThis$5(''.charAt);
var slice = uncurryThis$5(''.slice);
var exec = uncurryThis$5(/./.exec);
var push = uncurryThis$5([].push);

var MARK = uid();
var MARK_LENGTH = MARK.length;
var ERROR_MESSAGE = 'Unacceptable as raw JSON';
var IS_WHITESPACE = /^[\t\n\r ]$/;

// `JSON.parse` method
// https://tc39.es/proposal-json-parse-with-source/#sec-json.israwjson
// https://github.com/tc39/proposal-json-parse-with-source
$$t({ target: 'JSON', stat: true, forced: !NATIVE_RAW_JSON }, {
  rawJSON: function rawJSON(text) {
    var jsonString = toString$2(text);
    if (jsonString == '' || exec(IS_WHITESPACE, at(jsonString, 0)) || exec(IS_WHITESPACE, at(jsonString, jsonString.length - 1))) {
      throw $SyntaxError(ERROR_MESSAGE);
    }
    var parsed = parse(jsonString);
    if (typeof parsed == 'object' && parsed !== null) throw $SyntaxError(ERROR_MESSAGE);
    var obj = create$1(null);
    setInternalState$2(obj, { type: 'RawJSON' });
    createProperty$1(obj, 'rawJSON', jsonString);
    return FREEZING ? freeze(obj) : obj;
  }
});

// `JSON.stringify` method
// https://tc39.es/ecma262/#sec-json.stringify
// https://github.com/tc39/proposal-json-parse-with-source
if ($stringify) $$t({ target: 'JSON', stat: true, arity: 3, forced: !NATIVE_RAW_JSON }, {
  stringify: function stringify(text, replacer, space) {
    var replacerFunction = getReplacerFunction(replacer);
    var rawStrings = [];

    var json = $stringify(text, function (key, value) {
      // some old implementations (like WebKit) could pass numbers as keys
      var v = isCallable$2(replacerFunction) ? call$d(replacerFunction, this, $String(key), value) : value;
      return isRawJSON(v) ? MARK + (push(rawStrings, v.rawJSON) - 1) : v;
    }, space);

    if (typeof json != 'string') return json;

    var result = '';
    var length = json.length;

    for (var i = 0; i < length; i++) {
      var chr = at(json, i);
      if (chr == '"') {
        var end = parseJSONString(json, ++i).end - 1;
        var string = slice(json, i, end);
        result += slice(string, 0, MARK_LENGTH) == MARK
          ? rawStrings[slice(string, MARK_LENGTH)]
          : '"' + string + '"';
        i = end;
      } else result += chr;
    }

    return result;
  }
});

var uncurryThis$4 = functionUncurryThis;

// eslint-disable-next-line es/no-set -- safe
var SetPrototype$1 = Set.prototype;

var setHelpers = {
  // eslint-disable-next-line es/no-set -- safe
  Set: Set,
  add: uncurryThis$4(SetPrototype$1.add),
  has: uncurryThis$4(SetPrototype$1.has),
  remove: uncurryThis$4(SetPrototype$1['delete']),
  proto: SetPrototype$1,
  $has: SetPrototype$1.has,
  $keys: SetPrototype$1.keys
};

var has$5 = setHelpers.has;

// Perform ? RequireInternalSlot(M, [[SetData]])
var aSet$7 = function (it) {
  has$5(it);
  return it;
};

var call$c = functionCall;

var iterateSimple$7 = function (iterator, fn, $next) {
  var next = $next || iterator.next;
  var step, result;
  while (!(step = call$c(next, iterator)).done) {
    result = fn(step.value);
    if (result !== undefined) return result;
  }
};

var uncurryThis$3 = functionUncurryThis;
var iterateSimple$6 = iterateSimple$7;
var SetHelpers$5 = setHelpers;

var Set$3 = SetHelpers$5.Set;
var SetPrototype = SetHelpers$5.proto;
var forEach$1 = uncurryThis$3(SetPrototype.forEach);
var keys = uncurryThis$3(SetPrototype.keys);
var next = keys(new Set$3()).next;

var setIterate = function (set, fn, interruptible) {
  return interruptible ? iterateSimple$6(keys(set), fn, next) : forEach$1(set, fn);
};

var SetHelpers$4 = setHelpers;
var iterate$2 = setIterate;

var Set$2 = SetHelpers$4.Set;
var add$3 = SetHelpers$4.add;

var setClone = function (set) {
  var result = new Set$2();
  iterate$2(set, function (it) {
    add$3(result, it);
  });
  return result;
};

var uncurryThisAccessor = functionUncurryThisAccessor;
var SetHelpers$3 = setHelpers;

var setSize = uncurryThisAccessor(SetHelpers$3.proto, 'size', 'get') || function (set) {
  return set.size;
};

var aCallable$5 = aCallable$q;
var anObject$8 = anObject$x;
var call$b = functionCall;
var toIntegerOrInfinity$2 = toIntegerOrInfinity$e;

var $TypeError$1 = TypeError;
var max$1 = Math.max;

var SetRecord = function (set, size, has, keys) {
  this.set = set;
  this.size = size;
  this.has = has;
  this.keys = keys;
};

SetRecord.prototype = {
  getIterator: function () {
    return anObject$8(call$b(this.keys, this.set));
  },
  includes: function (it) {
    return call$b(this.has, this.set, it);
  }
};

// `GetSetRecord` abstract operation
// https://tc39.es/proposal-set-methods/#sec-getsetrecord
var getSetRecord$7 = function (obj) {
  anObject$8(obj);
  var numSize = +obj.size;
  // NOTE: If size is undefined, then numSize will be NaN
  // eslint-disable-next-line no-self-compare -- NaN check
  if (numSize != numSize) throw $TypeError$1('Invalid size');
  return new SetRecord(
    obj,
    max$1(toIntegerOrInfinity$2(numSize), 0),
    aCallable$5(obj.has),
    aCallable$5(obj.keys)
  );
};

var aSet$6 = aSet$7;
var SetHelpers$2 = setHelpers;
var clone$2 = setClone;
var size$4 = setSize;
var getSetRecord$6 = getSetRecord$7;
var iterateSet$2 = setIterate;
var iterateSimple$5 = iterateSimple$7;

var has$4 = SetHelpers$2.has;
var remove$1 = SetHelpers$2.remove;

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
var setDifference = function difference(other) {
  var O = aSet$6(this);
  var otherRec = getSetRecord$6(other);
  var result = clone$2(O);
  if (size$4(O) <= otherRec.size) iterateSet$2(O, function (e) {
    if (otherRec.includes(e)) remove$1(result, e);
  });
  else iterateSimple$5(otherRec.getIterator(), function (e) {
    if (has$4(O, e)) remove$1(result, e);
  });
  return result;
};

var getBuiltIn$2 = getBuiltIn$f;

var createEmptySetLike = function () {
  return {
    size: 0,
    has: function () {
      return false;
    },
    keys: function () {
      return {
        next: function () {
          return { done: true };
        }
      };
    }
  };
};

var setMethodAcceptSetLike$7 = function (name) {
  try {
    var Set = getBuiltIn$2('Set');
    new Set()[name](createEmptySetLike());
    return true;
  } catch (error) {
    return false;
  }
};

var $$s = _export;
var difference = setDifference;
var setMethodAcceptSetLike$6 = setMethodAcceptSetLike$7;

// `Set.prototype.difference` method
// https://github.com/tc39/proposal-set-methods
$$s({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike$6('difference') }, {
  difference: difference
});

var aSet$5 = aSet$7;
var SetHelpers$1 = setHelpers;
var size$3 = setSize;
var getSetRecord$5 = getSetRecord$7;
var iterateSet$1 = setIterate;
var iterateSimple$4 = iterateSimple$7;

var Set$1 = SetHelpers$1.Set;
var add$2 = SetHelpers$1.add;
var has$3 = SetHelpers$1.has;
var nativeHas = SetHelpers$1.$has;
var nativeKeys = SetHelpers$1.$keys;

var isNativeSetRecord = function (record) {
  return record.has === nativeHas && record.keys === nativeKeys;
};

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
var setIntersection = function intersection(other) {
  var O = aSet$5(this);
  var otherRec = getSetRecord$5(other);
  var result = new Set$1();

  // observable side effects
  if (!isNativeSetRecord(otherRec) && size$3(O) > otherRec.size) {
    iterateSimple$4(otherRec.getIterator(), function (e) {
      if (has$3(O, e)) add$2(result, e);
    });

    if (size$3(result) < 2) return result;

    var disordered = result;
    result = new Set$1();
    iterateSet$1(O, function (e) {
      if (has$3(disordered, e)) add$2(result, e);
    });
  } else {
    iterateSet$1(O, function (e) {
      if (otherRec.includes(e)) add$2(result, e);
    });
  }

  return result;
};

var $$r = _export;
var intersection = setIntersection;
var setMethodAcceptSetLike$5 = setMethodAcceptSetLike$7;

// `Set.prototype.intersection` method
// https://github.com/tc39/proposal-set-methods
$$r({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike$5('intersection') }, {
  intersection: intersection
});

var aSet$4 = aSet$7;
var has$2 = setHelpers.has;
var size$2 = setSize;
var getSetRecord$4 = getSetRecord$7;
var iterateSet = setIterate;
var iterateSimple$3 = iterateSimple$7;
var iteratorClose$2 = iteratorClose$8;

// `Set.prototype.isDisjointFrom` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isDisjointFrom
var setIsDisjointFrom = function isDisjointFrom(other) {
  var O = aSet$4(this);
  var otherRec = getSetRecord$4(other);
  if (size$2(O) <= otherRec.size) return iterateSet(O, function (e) {
    if (otherRec.includes(e)) return false;
  }, true) !== false;
  var iterator = otherRec.getIterator();
  return iterateSimple$3(iterator, function (e) {
    if (has$2(O, e)) return iteratorClose$2(iterator, 'normal', false);
  }) !== false;
};

var $$q = _export;
var isDisjointFrom = setIsDisjointFrom;
var setMethodAcceptSetLike$4 = setMethodAcceptSetLike$7;

// `Set.prototype.isDisjointFrom` method
// https://github.com/tc39/proposal-set-methods
$$q({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike$4('isDisjointFrom') }, {
  isDisjointFrom: isDisjointFrom
});

var aSet$3 = aSet$7;
var size$1 = setSize;
var iterate$1 = setIterate;
var getSetRecord$3 = getSetRecord$7;

// `Set.prototype.isSubsetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSubsetOf
var setIsSubsetOf = function isSubsetOf(other) {
  var O = aSet$3(this);
  var otherRec = getSetRecord$3(other);
  if (size$1(O) > otherRec.size) return false;
  return iterate$1(O, function (e) {
    if (!otherRec.includes(e)) return false;
  }, true) !== false;
};

var $$p = _export;
var isSubsetOf = setIsSubsetOf;
var setMethodAcceptSetLike$3 = setMethodAcceptSetLike$7;

// `Set.prototype.isSubsetOf` method
// https://github.com/tc39/proposal-set-methods
$$p({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike$3('isSubsetOf') }, {
  isSubsetOf: isSubsetOf
});

var aSet$2 = aSet$7;
var has$1 = setHelpers.has;
var size = setSize;
var getSetRecord$2 = getSetRecord$7;
var iterateSimple$2 = iterateSimple$7;
var iteratorClose$1 = iteratorClose$8;

// `Set.prototype.isSupersetOf` method
// https://tc39.github.io/proposal-set-methods/#Set.prototype.isSupersetOf
var setIsSupersetOf = function isSupersetOf(other) {
  var O = aSet$2(this);
  var otherRec = getSetRecord$2(other);
  if (size(O) < otherRec.size) return false;
  var iterator = otherRec.getIterator();
  return iterateSimple$2(iterator, function (e) {
    if (!has$1(O, e)) return iteratorClose$1(iterator, 'normal', false);
  }) !== false;
};

var $$o = _export;
var isSupersetOf = setIsSupersetOf;
var setMethodAcceptSetLike$2 = setMethodAcceptSetLike$7;

// `Set.prototype.isSupersetOf` method
// https://github.com/tc39/proposal-set-methods
$$o({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike$2('isSupersetOf') }, {
  isSupersetOf: isSupersetOf
});

var aSet$1 = aSet$7;
var add$1 = setHelpers.add;
var clone$1 = setClone;
var getSetRecord$1 = getSetRecord$7;
var iterateSimple$1 = iterateSimple$7;

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
var setUnion = function union(other) {
  var O = aSet$1(this);
  var keysIter = getSetRecord$1(other).getIterator();
  var result = clone$1(O);
  iterateSimple$1(keysIter, function (it) {
    add$1(result, it);
  });
  return result;
};

var $$n = _export;
var union = setUnion;
var setMethodAcceptSetLike$1 = setMethodAcceptSetLike$7;

// `Set.prototype.union` method
// https://github.com/tc39/proposal-set-methods
$$n({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike$1('union') }, {
  union: union
});

var aSet = aSet$7;
var SetHelpers = setHelpers;
var clone = setClone;
var getSetRecord = getSetRecord$7;
var iterateSimple = iterateSimple$7;

var add = SetHelpers.add;
var has = SetHelpers.has;
var remove = SetHelpers.remove;

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
var setSymmetricDifference = function symmetricDifference(other) {
  var O = aSet(this);
  var keysIter = getSetRecord(other).getIterator();
  var result = clone(O);
  iterateSimple(keysIter, function (e) {
    if (has(O, e)) remove(result, e);
    else add(result, e);
  });
  return result;
};

var $$m = _export;
var symmetricDifference = setSymmetricDifference;
var setMethodAcceptSetLike = setMethodAcceptSetLike$7;

// `Set.prototype.symmetricDifference` method
// https://github.com/tc39/proposal-set-methods
$$m({ target: 'Set', proto: true, real: true, forced: !setMethodAcceptSetLike('symmetricDifference') }, {
  symmetricDifference: symmetricDifference
});

var $$l = _export;
var uncurryThis$2 = functionUncurryThis;
var requireObjectCoercible$1 = requireObjectCoercible$8;
var toString$1 = toString$b;

var charCodeAt$1 = uncurryThis$2(''.charCodeAt);

// `String.prototype.isWellFormed` method
// https://github.com/tc39/proposal-is-usv-string
$$l({ target: 'String', proto: true }, {
  isWellFormed: function isWellFormed() {
    var S = toString$1(requireObjectCoercible$1(this));
    var length = S.length;
    for (var i = 0; i < length; i++) {
      var charCode = charCodeAt$1(S, i);
      // single UTF-16 code unit
      if ((charCode & 0xF800) != 0xD800) continue;
      // unpaired surrogate
      if (charCode >= 0xDC00 || ++i >= length || (charCodeAt$1(S, i) & 0xFC00) != 0xDC00) return false;
    } return true;
  }
});

var $$k = _export;
var call$a = functionCall;
var uncurryThis$1 = functionUncurryThis;
var requireObjectCoercible = requireObjectCoercible$8;
var toString = toString$b;
var fails$2 = fails$p;

var $Array$1 = Array;
var charAt = uncurryThis$1(''.charAt);
var charCodeAt = uncurryThis$1(''.charCodeAt);
var join = uncurryThis$1([].join);
var $toWellFormed = ''.toWellFormed;
var REPLACEMENT_CHARACTER = '\uFFFD';

// Safari bug
var TO_STRING_CONVERSION_BUG = $toWellFormed && fails$2(function () {
  return call$a($toWellFormed, 1) !== '1';
});

// `String.prototype.toWellFormed` method
// https://github.com/tc39/proposal-is-usv-string
$$k({ target: 'String', proto: true, forced: TO_STRING_CONVERSION_BUG }, {
  toWellFormed: function toWellFormed() {
    var S = toString(requireObjectCoercible(this));
    if (TO_STRING_CONVERSION_BUG) return call$a($toWellFormed, S);
    var length = S.length;
    var result = $Array$1(length);
    for (var i = 0; i < length; i++) {
      var charCode = charCodeAt(S, i);
      // single UTF-16 code unit
      if ((charCode & 0xF800) != 0xD800) result[i] = charAt(S, i);
      // unpaired surrogate
      else if (charCode >= 0xDC00 || i + 1 >= length || (charCodeAt(S, i + 1) & 0xFC00) != 0xDC00) result[i] = REPLACEMENT_CHARACTER;
      // surrogate pair
      else {
        result[i] = charAt(S, i);
        result[++i] = charAt(S, i);
      }
    } return join(result, '');
  }
});

var fails$1 = fails$p;

var arrayMethodIsStrict$2 = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails$1(function () {
    // eslint-disable-next-line no-useless-call -- required for testing
    method.call(null, argument || function () { return 1; }, 1);
  });
};

// TODO: Remove from `core-js@4`
var $$j = _export;
var $group = arrayGroup;
var arrayMethodIsStrict$1 = arrayMethodIsStrict$2;
var addToUnscopables$4 = addToUnscopables$d;

// `Array.prototype.groupBy` method
// https://github.com/tc39/proposal-array-grouping
// https://bugs.webkit.org/show_bug.cgi?id=236541
$$j({ target: 'Array', proto: true, forced: !arrayMethodIsStrict$1('groupBy') }, {
  groupBy: function groupBy(callbackfn /* , thisArg */) {
    var thisArg = arguments.length > 1 ? arguments[1] : undefined;
    return $group(this, callbackfn, thisArg);
  }
});

addToUnscopables$4('groupBy');

// TODO: Remove from `core-js@4`
var $$i = _export;
var arrayMethodIsStrict = arrayMethodIsStrict$2;
var addToUnscopables$3 = addToUnscopables$d;
var $groupToMap = arrayGroupToMap;

// `Array.prototype.groupByToMap` method
// https://github.com/tc39/proposal-array-grouping
// https://bugs.webkit.org/show_bug.cgi?id=236541
$$i({ target: 'Array', proto: true, name: 'groupToMap', forced: !arrayMethodIsStrict('groupByToMap') }, {
  groupByToMap: $groupToMap
});

addToUnscopables$3('groupByToMap');

// TODO: Remove from `core-js@4`
var ArrayBufferViewCore = arrayBufferViewCore;
var lengthOfArrayLike$3 = lengthOfArrayLike$g;
var isBigIntArray = isBigIntArray$2;
var toAbsoluteIndex = toAbsoluteIndex$3;
var toBigInt = toBigInt$2;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$e;
var fails = fails$p;

var aTypedArray = ArrayBufferViewCore.aTypedArray;
var getTypedArrayConstructor = ArrayBufferViewCore.getTypedArrayConstructor;
var exportTypedArrayMethod = ArrayBufferViewCore.exportTypedArrayMethod;
var max = Math.max;
var min = Math.min;

// some early implementations, like WebKit, does not follow the final semantic
var PROPER_ORDER = !fails(function () {
  // eslint-disable-next-line es/no-typed-arrays -- required for testing
  var array = new Int8Array([1]);

  var spliced = array.toSpliced(1, 0, {
    valueOf: function () {
      array[0] = 2;
      return 3;
    }
  });

  return spliced[0] !== 2 || spliced[1] !== 3;
});

// `%TypedArray%.prototype.toSpliced` method
// https://tc39.es/proposal-change-array-by-copy/#sec-%typedarray%.prototype.toSpliced
exportTypedArrayMethod('toSpliced', function toSpliced(start, deleteCount /* , ...items */) {
  var O = aTypedArray(this);
  var C = getTypedArrayConstructor(O);
  var len = lengthOfArrayLike$3(O);
  var actualStart = toAbsoluteIndex(start, len);
  var argumentsLength = arguments.length;
  var k = 0;
  var insertCount, actualDeleteCount, thisIsBigIntArray, convertedItems, value, newLen, A;
  if (argumentsLength === 0) {
    insertCount = actualDeleteCount = 0;
  } else if (argumentsLength === 1) {
    insertCount = 0;
    actualDeleteCount = len - actualStart;
  } else {
    actualDeleteCount = min(max(toIntegerOrInfinity$1(deleteCount), 0), len - actualStart);
    insertCount = argumentsLength - 2;
    if (insertCount) {
      convertedItems = new C(insertCount);
      thisIsBigIntArray = isBigIntArray(convertedItems);
      for (var i = 2; i < argumentsLength; i++) {
        value = arguments[i];
        // FF30- typed arrays doesn't properly convert objects to typed array values
        convertedItems[i - 2] = thisIsBigIntArray ? toBigInt(value) : +value;
      }
    }
  }
  newLen = len + insertCount - actualDeleteCount;
  A = new C(newLen);

  for (; k < actualStart; k++) A[k] = O[k];
  for (; k < actualStart + insertCount; k++) A[k] = convertedItems[k - actualStart];
  for (; k < newLen; k++) A[k] = O[k + actualDeleteCount - insertCount];

  return A;
}, !PROPER_ORDER);

var $$h = _export;
var anInstance = anInstance$3;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$c;
var hasOwn = hasOwnProperty_1;
var wellKnownSymbol$4 = wellKnownSymbol$v;
var AsyncIteratorPrototype$2 = asyncIteratorPrototype;
var IS_PURE = isPure;

var TO_STRING_TAG$1 = wellKnownSymbol$4('toStringTag');

var AsyncIteratorConstructor = function AsyncIterator() {
  anInstance(this, AsyncIteratorPrototype$2);
};

AsyncIteratorConstructor.prototype = AsyncIteratorPrototype$2;

if (!hasOwn(AsyncIteratorPrototype$2, TO_STRING_TAG$1)) {
  createNonEnumerableProperty$2(AsyncIteratorPrototype$2, TO_STRING_TAG$1, 'AsyncIterator');
}

if (!hasOwn(AsyncIteratorPrototype$2, 'constructor') || AsyncIteratorPrototype$2.constructor === Object) {
  createNonEnumerableProperty$2(AsyncIteratorPrototype$2, 'constructor', AsyncIteratorConstructor);
}

// `AsyncIterator` constructor
// https://github.com/tc39/proposal-async-iterator-helpers
$$h({ global: true, constructor: true, forced: IS_PURE }, {
  AsyncIterator: AsyncIteratorConstructor
});

var call$9 = functionCall;
var perform = perform$3;
var anObject$7 = anObject$x;
var create = objectCreate$1;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$c;
var defineBuiltIns = defineBuiltIns$4;
var wellKnownSymbol$3 = wellKnownSymbol$v;
var InternalStateModule$1 = internalState;
var getBuiltIn$1 = getBuiltIn$f;
var getMethod$1 = getMethod$e;
var AsyncIteratorPrototype$1 = asyncIteratorPrototype;
var createIterResultObject$6 = createIterResultObject$a;
var iteratorClose = iteratorClose$8;

var Promise$2 = getBuiltIn$1('Promise');

var TO_STRING_TAG = wellKnownSymbol$3('toStringTag');
var ASYNC_ITERATOR_HELPER = 'AsyncIteratorHelper';
var WRAP_FOR_VALID_ASYNC_ITERATOR = 'WrapForValidAsyncIterator';
var setInternalState$1 = InternalStateModule$1.set;

var createAsyncIteratorProxyPrototype = function (IS_ITERATOR) {
  var IS_GENERATOR = !IS_ITERATOR;
  var getInternalState = InternalStateModule$1.getterFor(IS_ITERATOR ? WRAP_FOR_VALID_ASYNC_ITERATOR : ASYNC_ITERATOR_HELPER);

  var getStateOrEarlyExit = function (that) {
    var stateCompletion = perform(function () {
      return getInternalState(that);
    });

    var stateError = stateCompletion.error;
    var state = stateCompletion.value;

    if (stateError || (IS_GENERATOR && state.done)) {
      return { exit: true, value: stateError ? Promise$2.reject(state) : Promise$2.resolve(createIterResultObject$6(undefined, true)) };
    } return { exit: false, value: state };
  };

  return defineBuiltIns(create(AsyncIteratorPrototype$1), {
    next: function next() {
      var stateCompletion = getStateOrEarlyExit(this);
      var state = stateCompletion.value;
      if (stateCompletion.exit) return state;
      var handlerCompletion = perform(function () {
        return anObject$7(state.nextHandler(Promise$2));
      });
      var handlerError = handlerCompletion.error;
      var value = handlerCompletion.value;
      if (handlerError) state.done = true;
      return handlerError ? Promise$2.reject(value) : Promise$2.resolve(value);
    },
    'return': function () {
      var stateCompletion = getStateOrEarlyExit(this);
      var state = stateCompletion.value;
      if (stateCompletion.exit) return state;
      state.done = true;
      var iterator = state.iterator;
      var returnMethod, result;
      var completion = perform(function () {
        if (state.inner) try {
          iteratorClose(state.inner.iterator, 'normal');
        } catch (error) {
          return iteratorClose(iterator, 'throw', error);
        }
        return getMethod$1(iterator, 'return');
      });
      returnMethod = result = completion.value;
      if (completion.error) return Promise$2.reject(result);
      if (returnMethod === undefined) return Promise$2.resolve(createIterResultObject$6(undefined, true));
      completion = perform(function () {
        return call$9(returnMethod, iterator);
      });
      result = completion.value;
      if (completion.error) return Promise$2.reject(result);
      return IS_ITERATOR ? Promise$2.resolve(result) : Promise$2.resolve(result).then(function (resolved) {
        anObject$7(resolved);
        return createIterResultObject$6(undefined, true);
      });
    }
  });
};

var WrapForValidAsyncIteratorPrototype = createAsyncIteratorProxyPrototype(true);
var AsyncIteratorHelperPrototype = createAsyncIteratorProxyPrototype(false);

createNonEnumerableProperty$1(AsyncIteratorHelperPrototype, TO_STRING_TAG, 'Async Iterator Helper');

var asyncIteratorCreateProxy = function (nextHandler, IS_ITERATOR) {
  var AsyncIteratorProxy = function AsyncIterator(record, state) {
    if (state) {
      state.iterator = record.iterator;
      state.next = record.next;
    } else state = record;
    state.type = IS_ITERATOR ? WRAP_FOR_VALID_ASYNC_ITERATOR : ASYNC_ITERATOR_HELPER;
    state.nextHandler = nextHandler;
    state.counter = 0;
    state.done = false;
    setInternalState$1(this, state);
  };

  AsyncIteratorProxy.prototype = IS_ITERATOR ? WrapForValidAsyncIteratorPrototype : AsyncIteratorHelperPrototype;

  return AsyncIteratorProxy;
};

var $$g = _export;
var call$8 = functionCall;
var anObject$6 = anObject$x;
var getIteratorDirect$7 = getIteratorDirect$n;
var notANaN$1 = notANan;
var toPositiveInteger$1 = toPositiveInteger$4;
var createAsyncIteratorProxy$5 = asyncIteratorCreateProxy;
var createIterResultObject$5 = createIterResultObject$a;

var AsyncIteratorProxy$4 = createAsyncIteratorProxy$5(function (Promise) {
  var state = this;

  return new Promise(function (resolve, reject) {
    var doneAndReject = function (error) {
      state.done = true;
      reject(error);
    };

    var loop = function () {
      try {
        Promise.resolve(anObject$6(call$8(state.next, state.iterator))).then(function (step) {
          try {
            if (anObject$6(step).done) {
              state.done = true;
              resolve(createIterResultObject$5(undefined, true));
            } else if (state.remaining) {
              state.remaining--;
              loop();
            } else resolve(createIterResultObject$5(step.value, false));
          } catch (err) { doneAndReject(err); }
        }, doneAndReject);
      } catch (error) { doneAndReject(error); }
    };

    loop();
  });
});

// `AsyncIterator.prototype.drop` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$g({ target: 'AsyncIterator', proto: true, real: true }, {
  drop: function drop(limit) {
    return new AsyncIteratorProxy$4(getIteratorDirect$7(this), {
      remaining: toPositiveInteger$1(notANaN$1(+limit))
    });
  }
});

var $$f = _export;
var $every = asyncIteratorIteration.every;

// `AsyncIterator.prototype.every` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$f({ target: 'AsyncIterator', proto: true, real: true }, {
  every: function every(predicate) {
    return $every(this, predicate);
  }
});

var $$e = _export;
var call$7 = functionCall;
var aCallable$4 = aCallable$q;
var anObject$5 = anObject$x;
var isObject$4 = isObject$h;
var getIteratorDirect$6 = getIteratorDirect$n;
var createAsyncIteratorProxy$4 = asyncIteratorCreateProxy;
var createIterResultObject$4 = createIterResultObject$a;
var closeAsyncIteration$3 = asyncIteratorClose;

var AsyncIteratorProxy$3 = createAsyncIteratorProxy$4(function (Promise) {
  var state = this;
  var iterator = state.iterator;
  var predicate = state.predicate;

  return new Promise(function (resolve, reject) {
    var doneAndReject = function (error) {
      state.done = true;
      reject(error);
    };

    var ifAbruptCloseAsyncIterator = function (error) {
      closeAsyncIteration$3(iterator, doneAndReject, error, doneAndReject);
    };

    var loop = function () {
      try {
        Promise.resolve(anObject$5(call$7(state.next, iterator))).then(function (step) {
          try {
            if (anObject$5(step).done) {
              state.done = true;
              resolve(createIterResultObject$4(undefined, true));
            } else {
              var value = step.value;
              try {
                var result = predicate(value, state.counter++);

                var handler = function (selected) {
                  selected ? resolve(createIterResultObject$4(value, false)) : loop();
                };

                if (isObject$4(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                else handler(result);
              } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
            }
          } catch (error2) { doneAndReject(error2); }
        }, doneAndReject);
      } catch (error) { doneAndReject(error); }
    };

    loop();
  });
});

// `AsyncIterator.prototype.filter` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$e({ target: 'AsyncIterator', proto: true, real: true }, {
  filter: function filter(predicate) {
    return new AsyncIteratorProxy$3(getIteratorDirect$6(this), {
      predicate: aCallable$4(predicate)
    });
  }
});

var $$d = _export;
var $find = asyncIteratorIteration.find;

// `AsyncIterator.prototype.find` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$d({ target: 'AsyncIterator', proto: true, real: true }, {
  find: function find(predicate) {
    return $find(this, predicate);
  }
});

var call$6 = functionCall;
var isCallable$1 = isCallable$r;
var anObject$4 = anObject$x;
var getIteratorDirect$5 = getIteratorDirect$n;
var getIteratorMethod = getIteratorMethod$5;
var getMethod = getMethod$e;
var wellKnownSymbol$2 = wellKnownSymbol$v;
var AsyncFromSyncIterator$1 = asyncFromSyncIterator;

var ASYNC_ITERATOR = wellKnownSymbol$2('asyncIterator');

var getAsyncIteratorFlattenable$2 = function from(obj) {
  var object = anObject$4(obj);
  var alreadyAsync = true;
  var method = getMethod(object, ASYNC_ITERATOR);
  var iterator;
  if (!isCallable$1(method)) {
    method = getIteratorMethod(object);
    alreadyAsync = false;
  }
  if (isCallable$1(method)) {
    iterator = call$6(method, object);
  } else {
    iterator = object;
    alreadyAsync = true;
  }
  anObject$4(iterator);
  return getIteratorDirect$5(alreadyAsync ? iterator : new AsyncFromSyncIterator$1(getIteratorDirect$5(iterator)));
};

var $$c = _export;
var call$5 = functionCall;
var aCallable$3 = aCallable$q;
var anObject$3 = anObject$x;
var isObject$3 = isObject$h;
var getIteratorDirect$4 = getIteratorDirect$n;
var createAsyncIteratorProxy$3 = asyncIteratorCreateProxy;
var createIterResultObject$3 = createIterResultObject$a;
var getAsyncIteratorFlattenable$1 = getAsyncIteratorFlattenable$2;
var closeAsyncIteration$2 = asyncIteratorClose;

var AsyncIteratorProxy$2 = createAsyncIteratorProxy$3(function (Promise) {
  var state = this;
  var iterator = state.iterator;
  var mapper = state.mapper;

  return new Promise(function (resolve, reject) {
    var doneAndReject = function (error) {
      state.done = true;
      reject(error);
    };

    var ifAbruptCloseAsyncIterator = function (error) {
      closeAsyncIteration$2(iterator, doneAndReject, error, doneAndReject);
    };

    var outerLoop = function () {
      try {
        Promise.resolve(anObject$3(call$5(state.next, iterator))).then(function (step) {
          try {
            if (anObject$3(step).done) {
              state.done = true;
              resolve(createIterResultObject$3(undefined, true));
            } else {
              var value = step.value;
              try {
                var result = mapper(value, state.counter++);

                var handler = function (mapped) {
                  try {
                    state.inner = getAsyncIteratorFlattenable$1(mapped);
                    innerLoop();
                  } catch (error4) { ifAbruptCloseAsyncIterator(error4); }
                };

                if (isObject$3(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                else handler(result);
              } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
            }
          } catch (error2) { doneAndReject(error2); }
        }, doneAndReject);
      } catch (error) { doneAndReject(error); }
    };

    var innerLoop = function () {
      var inner = state.inner;
      if (inner) {
        try {
          Promise.resolve(anObject$3(call$5(inner.next, inner.iterator))).then(function (result) {
            try {
              if (anObject$3(result).done) {
                state.inner = null;
                outerLoop();
              } else resolve(createIterResultObject$3(result.value, false));
            } catch (error1) { ifAbruptCloseAsyncIterator(error1); }
          }, ifAbruptCloseAsyncIterator);
        } catch (error) { ifAbruptCloseAsyncIterator(error); }
      } else outerLoop();
    };

    innerLoop();
  });
});

// `AsyncIterator.prototype.flaMap` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$c({ target: 'AsyncIterator', proto: true, real: true }, {
  flatMap: function flatMap(mapper) {
    return new AsyncIteratorProxy$2(getIteratorDirect$4(this), {
      mapper: aCallable$3(mapper),
      inner: null
    });
  }
});

var $$b = _export;
var $forEach = asyncIteratorIteration.forEach;

// `AsyncIterator.prototype.forEach` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$b({ target: 'AsyncIterator', proto: true, real: true }, {
  forEach: function forEach(fn) {
    return $forEach(this, fn);
  }
});

var call$4 = functionCall;
var createAsyncIteratorProxy$2 = asyncIteratorCreateProxy;

var asyncIteratorWrap = createAsyncIteratorProxy$2(function () {
  return call$4(this.next, this.iterator);
}, true);

var $$a = _export;
var toObject$2 = toObject$c;
var isPrototypeOf = objectIsPrototypeOf;
var getAsyncIteratorFlattenable = getAsyncIteratorFlattenable$2;
var AsyncIteratorPrototype = asyncIteratorPrototype;
var WrapAsyncIterator$1 = asyncIteratorWrap;

// `AsyncIterator.from` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$a({ target: 'AsyncIterator', stat: true }, {
  from: function from(O) {
    var iteratorRecord = getAsyncIteratorFlattenable(typeof O == 'string' ? toObject$2(O) : O);
    return isPrototypeOf(AsyncIteratorPrototype, iteratorRecord.iterator)
      ? iteratorRecord.iterator
      : new WrapAsyncIterator$1(iteratorRecord);
  }
});

var call$3 = functionCall;
var aCallable$2 = aCallable$q;
var anObject$2 = anObject$x;
var isObject$2 = isObject$h;
var getIteratorDirect$3 = getIteratorDirect$n;
var createAsyncIteratorProxy$1 = asyncIteratorCreateProxy;
var createIterResultObject$2 = createIterResultObject$a;
var closeAsyncIteration$1 = asyncIteratorClose;

var AsyncIteratorProxy$1 = createAsyncIteratorProxy$1(function (Promise) {
  var state = this;
  var iterator = state.iterator;
  var mapper = state.mapper;

  return new Promise(function (resolve, reject) {
    var doneAndReject = function (error) {
      state.done = true;
      reject(error);
    };

    var ifAbruptCloseAsyncIterator = function (error) {
      closeAsyncIteration$1(iterator, doneAndReject, error, doneAndReject);
    };

    Promise.resolve(anObject$2(call$3(state.next, iterator))).then(function (step) {
      try {
        if (anObject$2(step).done) {
          state.done = true;
          resolve(createIterResultObject$2(undefined, true));
        } else {
          var value = step.value;
          try {
            var result = mapper(value, state.counter++);

            var handler = function (mapped) {
              resolve(createIterResultObject$2(mapped, false));
            };

            if (isObject$2(result)) Promise.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
            else handler(result);
          } catch (error2) { ifAbruptCloseAsyncIterator(error2); }
        }
      } catch (error) { doneAndReject(error); }
    }, doneAndReject);
  });
});

// `AsyncIterator.prototype.map` method
// https://github.com/tc39/proposal-iterator-helpers
var asyncIteratorMap = function map(mapper) {
  return new AsyncIteratorProxy$1(getIteratorDirect$3(this), {
    mapper: aCallable$2(mapper)
  });
};

var $$9 = _export;
var map = asyncIteratorMap;

// `AsyncIterator.prototype.map` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$9({ target: 'AsyncIterator', proto: true, real: true }, {
  map: map
});

var $$8 = _export;
var call$2 = functionCall;
var aCallable$1 = aCallable$q;
var anObject$1 = anObject$x;
var isObject$1 = isObject$h;
var getBuiltIn = getBuiltIn$f;
var getIteratorDirect$2 = getIteratorDirect$n;
var closeAsyncIteration = asyncIteratorClose;

var Promise$1 = getBuiltIn('Promise');
var $TypeError = TypeError;

// `AsyncIterator.prototype.reduce` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$8({ target: 'AsyncIterator', proto: true, real: true }, {
  reduce: function reduce(reducer /* , initialValue */) {
    var record = getIteratorDirect$2(this);
    var iterator = record.iterator;
    var next = record.next;
    var noInitial = arguments.length < 2;
    var accumulator = noInitial ? undefined : arguments[1];
    var counter = 0;
    aCallable$1(reducer);

    return new Promise$1(function (resolve, reject) {
      var ifAbruptCloseAsyncIterator = function (error) {
        closeAsyncIteration(iterator, reject, error, reject);
      };

      var loop = function () {
        try {
          Promise$1.resolve(anObject$1(call$2(next, iterator))).then(function (step) {
            try {
              if (anObject$1(step).done) {
                noInitial ? reject($TypeError('Reduce of empty iterator with no initial value')) : resolve(accumulator);
              } else {
                var value = step.value;
                if (noInitial) {
                  noInitial = false;
                  accumulator = value;
                  loop();
                } else try {
                  var result = reducer(accumulator, value, counter);

                  var handler = function ($result) {
                    accumulator = $result;
                    loop();
                  };

                  if (isObject$1(result)) Promise$1.resolve(result).then(handler, ifAbruptCloseAsyncIterator);
                  else handler(result);
                } catch (error3) { ifAbruptCloseAsyncIterator(error3); }
              }
              counter++;
            } catch (error2) { reject(error2); }
          }, reject);
        } catch (error) { reject(error); }
      };

      loop();
    });
  }
});

var $$7 = _export;
var $some = asyncIteratorIteration.some;

// `AsyncIterator.prototype.some` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$7({ target: 'AsyncIterator', proto: true, real: true }, {
  some: function some(predicate) {
    return $some(this, predicate);
  }
});

var $$6 = _export;
var call$1 = functionCall;
var anObject = anObject$x;
var getIteratorDirect$1 = getIteratorDirect$n;
var notANaN = notANan;
var toPositiveInteger = toPositiveInteger$4;
var createAsyncIteratorProxy = asyncIteratorCreateProxy;
var createIterResultObject$1 = createIterResultObject$a;

var AsyncIteratorProxy = createAsyncIteratorProxy(function (Promise) {
  var state = this;
  var iterator = state.iterator;
  var returnMethod;

  if (!state.remaining--) {
    var resultDone = createIterResultObject$1(undefined, true);
    state.done = true;
    returnMethod = iterator['return'];
    if (returnMethod !== undefined) {
      return Promise.resolve(call$1(returnMethod, iterator, undefined)).then(function () {
        return resultDone;
      });
    }
    return resultDone;
  } return Promise.resolve(call$1(state.next, iterator)).then(function (step) {
    if (anObject(step).done) {
      state.done = true;
      return createIterResultObject$1(undefined, true);
    } return createIterResultObject$1(step.value, false);
  }).then(null, function (error) {
    state.done = true;
    throw error;
  });
});

// `AsyncIterator.prototype.take` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$6({ target: 'AsyncIterator', proto: true, real: true }, {
  take: function take(limit) {
    return new AsyncIteratorProxy(getIteratorDirect$1(this), {
      remaining: toPositiveInteger(notANaN(+limit))
    });
  }
});

var $$5 = _export;
var $toArray = asyncIteratorIteration.toArray;

// `AsyncIterator.prototype.toArray` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$5({ target: 'AsyncIterator', proto: true, real: true }, {
  toArray: function toArray() {
    return $toArray(this, undefined, []);
  }
});

var $$4 = _export;
var AsyncFromSyncIterator = asyncFromSyncIterator;
var WrapAsyncIterator = asyncIteratorWrap;
var getIteratorDirect = getIteratorDirect$n;

// `Iterator.prototype.toAsync` method
// https://github.com/tc39/proposal-async-iterator-helpers
$$4({ target: 'Iterator', proto: true, real: true }, {
  toAsync: function toAsync() {
    return new WrapAsyncIterator(getIteratorDirect(new AsyncFromSyncIterator(getIteratorDirect(this))));
  }
});

var isArray$2 = isArray$5;
var lengthOfArrayLike$2 = lengthOfArrayLike$g;
var doesNotExceedSafeInteger = doesNotExceedSafeInteger$3;
var bind = functionBindContext;

// `FlattenIntoArray` abstract operation
// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var flattenIntoArray$2 = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? bind(mapper, thisArg) : false;
  var element, elementLen;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      if (depth > 0 && isArray$2(element)) {
        elementLen = lengthOfArrayLike$2(element);
        targetIndex = flattenIntoArray$2(target, original, element, elementLen, targetIndex, depth - 1) - 1;
      } else {
        doesNotExceedSafeInteger(targetIndex + 1);
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
};

var flattenIntoArray_1 = flattenIntoArray$2;

var isArray$1 = isArray$5;
var isConstructor = isConstructor$3;
var isObject = isObject$h;
var wellKnownSymbol$1 = wellKnownSymbol$v;

var SPECIES = wellKnownSymbol$1('species');
var $Array = Array;

// a part of `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesConstructor$1 = function (originalArray) {
  var C;
  if (isArray$1(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (isConstructor(C) && (C === $Array || isArray$1(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? $Array : C;
};

var arraySpeciesConstructor = arraySpeciesConstructor$1;

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate$2 = function (originalArray, length) {
  return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
};

var $$3 = _export;
var flattenIntoArray$1 = flattenIntoArray_1;
var toObject$1 = toObject$c;
var lengthOfArrayLike$1 = lengthOfArrayLike$g;
var toIntegerOrInfinity = toIntegerOrInfinity$e;
var arraySpeciesCreate$1 = arraySpeciesCreate$2;

// `Array.prototype.flat` method
// https://tc39.es/ecma262/#sec-array.prototype.flat
$$3({ target: 'Array', proto: true }, {
  flat: function flat(/* depthArg = 1 */) {
    var depthArg = arguments.length ? arguments[0] : undefined;
    var O = toObject$1(this);
    var sourceLen = lengthOfArrayLike$1(O);
    var A = arraySpeciesCreate$1(O, 0);
    A.length = flattenIntoArray$1(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
    return A;
  }
});

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables$2 = addToUnscopables$d;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$2('flat');

var global$1 = global$p;
var uncurryThis = functionUncurryThis;

var entryUnbind$2 = function (CONSTRUCTOR, METHOD) {
  return uncurryThis(global$1[CONSTRUCTOR].prototype[METHOD]);
};

var entryUnbind$1 = entryUnbind$2;

entryUnbind$1('Array', 'flat');

var $$2 = _export;
var flattenIntoArray = flattenIntoArray_1;
var aCallable = aCallable$q;
var toObject = toObject$c;
var lengthOfArrayLike = lengthOfArrayLike$g;
var arraySpeciesCreate = arraySpeciesCreate$2;

// `Array.prototype.flatMap` method
// https://tc39.es/ecma262/#sec-array.prototype.flatmap
$$2({ target: 'Array', proto: true }, {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen = lengthOfArrayLike(O);
    var A;
    aCallable(callbackfn);
    A = arraySpeciesCreate(O, 0);
    A.length = flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return A;
  }
});

// this method was added to unscopables after implementation
// in popular engines, so it's moved to a separate module
var addToUnscopables$1 = addToUnscopables$d;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables$1('flatMap');

var entryUnbind = entryUnbind$2;

entryUnbind('Array', 'flatMap');

var $$1 = _export;
var call = functionCall;
var FunctionName = functionName;
var isCallable = isCallable$r;
var createIteratorConstructor = iteratorCreateConstructor;
var getPrototypeOf = objectGetPrototypeOf;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$2;
var createNonEnumerableProperty = createNonEnumerableProperty$c;
var defineBuiltIn = defineBuiltIn$9;
var wellKnownSymbol = wellKnownSymbol$v;
var Iterators$1 = iterators;
var IteratorsCore = iteratorsCore;

var PROPER_FUNCTION_NAME = FunctionName.PROPER;
var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

var iteratorDefine = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
          defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
  if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    if (CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
    } else {
      INCORRECT_VALUES_NAME = true;
      defaultIterator = function values() { return call(nativeIterator, this); };
    }
  }

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
      }
    } else $$1({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  // define iterator
  if (IterablePrototype[ITERATOR] !== defaultIterator) {
    defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
  }
  Iterators$1[NAME] = defaultIterator;

  return methods;
};

var toIndexedObject = toIndexedObject$9;
var addToUnscopables = addToUnscopables$d;
var Iterators = iterators;
var InternalStateModule = internalState;
var defineProperty = objectDefineProperty.f;
var defineIterator = iteratorDefine;
var createIterResultObject = createIterResultObject$a;
var DESCRIPTORS = descriptors;

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return createIterResultObject(undefined, true);
  }
  if (kind == 'keys') return createIterResultObject(index, false);
  if (kind == 'values') return createIterResultObject(target[index], false);
  return createIterResultObject([index, target[index]], false);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var values = Iterators.Arguments = Iterators.Array;

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

// V8 ~ Chrome 45- bug
if (DESCRIPTORS && values.name !== 'values') try {
  defineProperty(values, 'name', { value: 'values' });
} catch (error) { /* empty */ }

var $ = _export;
var iterate = iterate$c;
var createProperty = createProperty$3;

// `Object.fromEntries` method
// https://github.com/tc39/proposal-object-from-entries
$({ target: 'Object', stat: true }, {
  fromEntries: function fromEntries(iterable) {
    var obj = {};
    iterate(iterable, function (k, v) {
      createProperty(obj, k, v);
    }, { AS_ENTRIES: true });
    return obj;
  }
});

var path = path$2;

path.Object.fromEntries;

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; };
  var undefined$1; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) });

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: true });
  defineProperty(
    GeneratorFunctionPrototype,
    "constructor",
    { value: GeneratorFunction, configurable: true }
  );
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    defineProperty(this, "_invoke", { value: enqueue });
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method;
    var method = delegate.iterator[methodName];
    if (method === undefined$1) {
      // A .throw or .return when the delegate iterator has no .throw
      // method, or a missing .next mehtod, always terminate the
      // yield* loop.
      context.delegate = null;

      // Note: ["return"] must be used for ES3 parsing compatibility.
      if (methodName === "throw" && delegate.iterator["return"]) {
        // If the delegate iterator has a return method, give it a
        // chance to clean up.
        context.method = "return";
        context.arg = undefined$1;
        maybeInvokeDelegate(delegate, context);

        if (context.method === "throw") {
          // If maybeInvokeDelegate(context) changed context.method from
          // "return" to "throw", let that override the TypeError below.
          return ContinueSentinel;
        }
      }
      if (methodName !== "return") {
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a '" + methodName + "' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(val) {
    var object = Object(val);
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined$1;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined$1, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined$1;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined$1;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined$1;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

const appState = {};
const dispatch = d3.dispatch("translate", "toolChanged", "languageChanged", "menuOpen", "menuClose");

/* eslint no-prototype-builtins: "off" */

function scrollTo({ durationLeft = 200, element, complete }) {
  const positionFrom = element.scrollTop;
  const positionTo = 0 - positionFrom;

  if (positionTo < 0) {
    const positionDiff = positionTo / durationLeft * 10;
    element.scrollTop += positionDiff;
    setTimeout(() => {
      scrollTo({ durationLeft: durationLeft - 25, element, complete });
    }, 25);
  } else {
    complete();
  }
}

function translateNode(translator) {
  return function() {
    const el = d3.select(this);
    const text = el.attr("data-text");
    if (!text) return;
    const textChildNode = Array.from(el.node().childNodes)
      .filter(({ nodeName }) => nodeName === "#text")[0];
    if (textChildNode) {
      textChildNode.textContent = translator(text);
    } else {
      el.text(translator(text));
    }
  };
}

function loadJS(url, location, className) {
  //url is URL of external file, implementationCode is the code
  //to be called from the file, location is the location to
  //insert the <script> element
  return new Promise((resolve, reject) => {
    const scriptTag = document.createElement("script");
    if (className) scriptTag.classList.add(className);
    scriptTag.src = url;
    scriptTag.onerror = reject;
    scriptTag.onload = resolve;
    scriptTag.onreadystatechange = resolve;
    location.appendChild(scriptTag);
  });
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}


/**
 * Extening object that entered in first argument.
 *
 * Returns extended object or false if have no target object or incorrect type.
 *
 * If you wish to clone source object (without modify it), just use empty new
 * object as first argument, like this:
 *   deepExtend({}, yourObj_1, [yourObj_N]);
 */
function deepExtend(/*obj_1, [obj_2], [obj_N]*/) {
  if (arguments.length < 1 || typeof arguments[0] !== "object") {
    return false;
  }

  if (arguments.length < 2) {
    return arguments[0];
  }

  const target = arguments[0];

  const lastArgIsBool = typeof arguments[arguments.length - 1] === "boolean";
  const overwriteByEmpty = lastArgIsBool && arguments[arguments.length - 1];
  // convert arguments to array and cut off target object
  const args = Array.prototype.slice.call(arguments, 1, (lastArgIsBool ? -1 : arguments.length));

  let val, src;

  forEach(args, obj => {
    // skip argument if it is array or isn't object
    if (typeof obj !== "object" || isArray(obj)) {
      return;
    }

    forEach(Object.keys(obj), key => {
      src = target[key]; // source value
      val = obj[key]; // new value

      // recursion prevention
      if (val === target) ; else if (typeof val !== "object" || val === null || val._data) {
        target[key] = val;

        // just clone arrays (and recursive clone objects inside)
      } else if (isArray(val)) {
        target[key] = deepCloneArray(val);

        // custom cloning and overwrite for specific objects
      } else if (isSpecificValue(val)) {
        target[key] = cloneSpecificValue(val);

        // overwrite by new value if source isn't object or array
      } else if (typeof src !== "object" || src === null || isArray(src)) {
        target[key] = deepExtend({}, val);

        // new value is empty object
      } else if (overwriteByEmpty && isEmpty(val)) {
        target[key] = {};

        // source value and new value is objects both, extending...
      } else {
        target[key] = deepExtend(src, val, overwriteByEmpty);
      }
    });
  });

  return target;
}

function d3json(path, callback) {
  d3.json(path)
    .then(response => callback(null, response))
    .catch(error => callback(error));
}

/**
 * Object Comparison
 *
 * http://stamat.wordpress.com/2013/06/22/javascript-object-comparison/
 *
 * No version
 *
 * @param a
 * @param b
 * @returns {boolean} if objects are equal
 */
function comparePlainObjects(a, b) {


  //Returns the object's class, Array, Date, RegExp, Object are of interest to us
  const getClass = function(val) {
    return Object.prototype.toString.call(val)
      .match(/^\[object\s(.*)\]$/)[1];
  };

  //Defines the type of the value, extended typeof
  const whatis = function(val) {

    if (val === undefined) {
      return "undefined";
    }
    if (val === null) {
      return "null";
    }

    let type = typeof val;

    if (type === "object") {
      type = getClass(val).toLowerCase();
    }

    if (type === "number") {
      return val.toString().indexOf(".") > 0 ?
        "float" :
        "integer";
    }

    return type;
  };

  const compare = function(a, b) {
    if (a === b) {
      return true;
    }
    for (const i in a) {
      if (b.hasOwnProperty(i)) {
        if (!equal(a[i], b[i])) {
          return false;
        }
      } else {
        return false;
      }
    }

    for (const i in b) {
      if (!a.hasOwnProperty(i)) {
        return false;
      }
    }
    return true;
  };

  const compareArrays = function(a, b) {
    if (a === b) {
      return true;
    }
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!equal(a[i], b[i])) {
        return false;
      }
    }
    return true;
  };

  const _equal = {};
  _equal.array = compareArrays;
  _equal.object = compare;
  _equal.date = function(a, b) {
    return a.getTime() === b.getTime();
  };
  _equal.regexp = function(a, b) {
    return a.toString() === b.toString();
  };

  /**
   * Are two values equal, deep compare for objects and arrays.
   * @param a {any}
   * @param b {any}
   * @return {boolean} Are equal?
   */
  const equal = function(a, b) {
    if (a !== b) {
      const atype = whatis(a);
      const btype = whatis(b);

      if (atype === btype) {
        return _equal.hasOwnProperty(atype) ? _equal[atype](a, b) : a == b;
      }

      return false;
    }

    return true;
  };

  return compare(a, b);
}

/*
 * Returns the resulting object of the difference between two objects
 * @param {Object} obj2
 * @param {Object} obj1
 * @returns {Object}
 */
function diffObject(obj2, obj1) {
  const diff = {};
  forEach(obj1, (value, key) => {
    if (!obj2.hasOwnProperty(key) && isPlainObject(value)) {
      diff[key] = diffObject({}, value);
    }
  });
  forEach(obj2, (value, key) => {
    if (!obj1.hasOwnProperty(key)) {
      diff[key] = value;
    } else if (value !== obj1[key]) {
      if (isPlainObject(value) && isPlainObject(obj1[key])) {
        if (isEmpty(value)) {
          if (!isEmpty(obj1[key])) {
            diff[key] = {};
          }
        } else {
          const d = diffObject(value, obj1[key]);
          if (Object.keys(d).length > 0) {
            diff[key] = d;
          }
        }
      } else if (!isArray(value) || !isArray(obj1[key]) || !deepArrayEquals(value, obj1[key])) {
        diff[key] = value;
      }
    }
  });
  return diff;
}


/*
 * loops through an object or array
 * @param {Object|Array} obj object or array
 * @param {Function} callback callback function
 * @param {Object} ctx context object
 */
function forEach(obj, callback, ctx) {
  if (!obj) {
    return;
  }
  let i, size;
  if (isArray(obj)) {
    size = obj.length;
    for (i = 0; i < size; i += 1) {
      const result = callback.apply(ctx, [obj[i], i]);
      if (result === false) {
        break;
      }
    }
  } else {
    const keys = Object.keys(obj);
    size = keys.length;
    for (i = 0; i < size; i += 1) {
      const result = callback.apply(ctx, [obj[keys[i]], keys[i]]);
      if (result === false) {
        break;
      }
    }
  }
}

/*
 * checks whether obj is an Array
 * @param {Object} target
 * @returns {Boolean}
 * from underscore: https://github.com/jashkenas/underscore/blob/master/underscore.js
 */
const isArray = Array.isArray || (target => Object.prototype.toString.call(target) === "[object Array]");


// Deep extend and helper functions
// https://github.com/unclechu/node-deep-extend/blob/master/lib/deep-extend.js

function isSpecificValue(val) {
  return Boolean((
    val instanceof Date
    || val instanceof RegExp
  ));
}

function cloneSpecificValue(val) {
  if (val instanceof Date) {
    return new Date(val.getTime());
  } else if (val instanceof RegExp) {
    return new RegExp(val);
  }
  throw new Error("Unexpected situation");
}

/**
 * Recursive cloning array.
 */
function deepCloneArray(arr) {
  const clone = [];
  forEach(arr, (item, index) => {
    if (typeof item === "object" && item !== null) {
      if (isArray(item)) {
        clone[index] = deepCloneArray(item);
      } else if (isSpecificValue(item)) {
        clone[index] = cloneSpecificValue(item);
      } else {
        clone[index] = deepExtend({}, item);
      }
    } else {
      clone[index] = item;
    }
  });
  return clone;
}


function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}


/*
 * checks whether obj is a plain object {}
 * @param {Object} obj
 * @returns {Boolean}
 */
function isPlainObject(obj) {
  return obj !== null && Object.prototype.toString.call(obj) === "[object Object]";
}

function deepArrayEquals(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length != b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (isPlainObject(a[i]) && isPlainObject(b[i])) {
      if (!comparePlainObjects(a[i], b[i])) return false;
    } else if (a[i] !== b[i]) return false;
  }
  return true;
}

const DEFAULT_LANGUAGE = { key: "sv-SE", text: "Svenska" };
const AVAILABLE_LANGUAGES = [
  DEFAULT_LANGUAGE,
  { key: "ar-SA", text: "العربية", isRtl: true },
  { key: "he-IL", text: "עִבְרִית", isRtl: true },
  { key: "es-ES", text: "Español", isRtl: false },
  { key: "en", text: "English", isRtl: false },
  { key: "vi-VN", text: "Tiếng Việt", isRtl: false, fontFamily: "Helvetica, Arial, Sans-Serif" },
  { key: "ru-RU", text: "Русский", isRtl: false, fontFamily: "Helvetica, Arial, Sans-Serif" },
  { key: "th-TH", text: "ภาษาไทย", isRtl: false, fontFamily: "Helvetica, Arial, Sans-Serif" }
].filter(({ key }) => toolsPage_properties["LANGUAGES"].includes(key));

const TRANSLATION_DICTIONARY = {};

function setLocale(arg) {
  if (!arg) arg = appState.language;

  const langId = /(\w+)-*/.exec(arg)[1];
  d3.select("html")
    .attr("lang", langId)
    .attr("class", langId);

  appState.language = arg;

  if (!viz || !viz.services) return;
  viz.services.locale.id = arg;
}

function loadTranslation(language) {
  return new Promise((resolve, reject) => {
    d3json("assets/i18n/" + language + ".json", (error, translation) => {
      if (error) {
        reject(error);
      } else {
        resolve(translation);
      }
    });
  });
}

function changeLanguage(language) {
  if (TRANSLATION_DICTIONARY[language]) {
    translateNow();
  } else {
    const promises = [];
    if (!TRANSLATION_DICTIONARY[DEFAULT_LANGUAGE.key] && language !== DEFAULT_LANGUAGE.key) {
      promises.push(loadTranslation(DEFAULT_LANGUAGE.key).then(translation => {
        TRANSLATION_DICTIONARY[DEFAULT_LANGUAGE.key] = translation;
      }));
    }
    promises.push(loadTranslation(language).then(translation => {
      TRANSLATION_DICTIONARY[language] = translation;
    }));
    Promise.all(promises).then(() => {
      translateNow();
    });
  }
}

function translateNow() {
  const languageConfig = AVAILABLE_LANGUAGES.filter(({ key }) => key === appState.language)[0];
  d3.select(".wrapper").classed("page-lang-rtl", languageConfig.isRtl);
  dispatch.call("translate");
}

function translator(key) {
  return TRANSLATION_DICTIONARY[appState.language]
    && TRANSLATION_DICTIONARY[appState.language][key] ? TRANSLATION_DICTIONARY[appState.language][key]
    :
    TRANSLATION_DICTIONARY[DEFAULT_LANGUAGE.key]
    && TRANSLATION_DICTIONARY[DEFAULT_LANGUAGE.key][key] ? TRANSLATION_DICTIONARY[DEFAULT_LANGUAGE.key][key] : key;
}

function setLanguage(language) {
  setLocale(language);
  changeLanguage(appState.language);
}

function getLanguages() {
  return AVAILABLE_LANGUAGES;
}

//ADAPTED CODE FROM: http://blog.vjeux.com/2011/javascript/urlon-url-object-notation.html

const URL_VERSION = "v2";

let poppedModel = {};
let URLI = {};
const resetPopStateLoopFlag = debounce(() => {
}, 500);

window.addEventListener("popstate", e => {
  //console.log(e, diffObject());
  if (!e.state) {
    parseURL();
    window.history.replaceState({
      tool: URLI["chart-type"],
      model: deepExtend({}, URLI.model, true)
    }, "Title");
    poppedModel = {};
    return;
  }

  //console.log("model diff", diffObject(e.state.model, viz.getModel()));
  poppedModel = e.state.model;
  if (e.state.tool !== appState.tool) {
    parseURL();
    setTool(e.state.tool, true);
    dispatch.call("toolChanged", null, e.state.tool);
  } else {
    //viz.setModel(poppedModel);
    mobx.runInAction(() => {
      VizabiSharedComponents.Utils.replaceProps(VIZABI_UI_CONFIG, e.state.model.ui || {});
      VizabiSharedComponents.Utils.mergeInTarget(viz.model.config, e.state.model.model || {});
    });
  }

  const localeId = ((poppedModel || {}).locale || {}).id;
  if (localeId && localeId !== appState.language) {
    setLanguage(localeId);
    dispatch.call("languageChanged", null, localeId);
  }

  const projector = (poppedModel || {}).projector;
  if (projector && projector !== appState.projector) {
    dispatch.call("projectorChanged", null, projector);
  }
});

//grabs width, height, tabs open, and updates the url
function updateURL(model, event, replaceInsteadPush) {
  resetPopStateLoopFlag();
  // if (popStateLoopFlag || (poppedModel && comparePlainObjects(viz.getModel(), poppedModel))) {
  //   //popStateLoopFlag = false;
  //   return;
  // }

  // poppedModel = viz.getModel();
  poppedModel = model;

  // if (typeof viz !== "undefined") {
  //   minModel = viz.getPersistentMinimalModel(VIZABI_PAGE_MODEL);
  // }

  const url = {};
  if (poppedModel.ui && Object.keys(poppedModel.ui).length > 0) {
    Object.assign(url, { ui: poppedModel.ui });
  }
  if (poppedModel.model && Object.keys(poppedModel.model).length > 0) {
    Object.assign(url, { model: poppedModel.model });
  }
  // if (minModel && Object.keys(minModel).length > 0) {
  //   Object.assign(url, minModel);
  // }
  url["chart-type"] = appState.tool;
  url["url"] = URL_VERSION;

  //console.log("pushing state", poppedModel, event);
  window.history[replaceInsteadPush ? "replaceState" : "pushState"]({
    tool: url["chart-type"],
    model: deepExtend({}, poppedModel, true)
  //need to encode symbols like # in color codes because urlon can't handle them properly
  }, "Title", "#" + encodeUrlHash(urlon.stringify(url)));
}

const debouncedUpdateUrl = debounce(updateURL, 310);

function parseURL() {
  const loc = window.location.toString();
  let hash = null;
  URLI = {
  };
  if (loc.indexOf("#") >= 0) {
    hash = loc.substring(loc.indexOf("#") + 1);

    if (hash) {

      let parsedUrl = {};
      try {
        parsedUrl = urlon.parse(decodeUrlHash(hash) || "$;");
      }
      catch {
        console.warn("Failed to decode and parse this hash:", hash);
      }

      URLI.model = parsedUrl;
      URLI["chart-type"] = parsedUrl["chart-type"];
      delete parsedUrl["chart-type"];

    }
  }
}

function encodeUrlHash(hash) {
  return hash.replace(/=#/g, "=%23");
}

function decodeUrlHash(hash) {
  //replacing %2523 with %23 needed when manual encoding operation of encodeUrlHash()
  //plus the enforced encoding in some browsers resulted in double encoding
  return decodeURIComponent(hash.replace(/%2523/g, "%23"));
}

const transition = {
  SELECT: "select",
  SHOW: "show",
  TIME: "time",
  NONE: "none"
};

const transitions = {
  select: {
    allow: [transition.SELECT, transition.SHOW],
    from: (state, dim) => {
      const markerSelect = (state.marker || {}).select;
      return markerSelect ? markerSelect.map(selection => selection[dim]) : null;
    },
    to: (values, dim) => ({
      marker: {
        select: values.map(value => ({ [dim]: value }))
      }
    })
  },

  show: {
    allow: [transition.SELECT, transition.SHOW],
    from: (state, dim) => {
      const values = (((state.entities || {}).show || {})[dim] || {}).$in;
      return values ? values.slice(0) : null;
    },
    to: (values, dim) => {
      if (values.length == 0) return {};
      return {
        entities: {
          show: {
            [dim]: {
              $in: values
            }
          }
        }
      };
    }
  },

  time: {
    allow: [transition.TIME],
    from: state => (state.time || {}).value,
    to: value => ({ time: { value } })
  }
};

function getTransitionModel(oldModel, oldTransition, newTransition) {
  const result = { state: {} };
  if (!oldTransition || !newTransition ||
    oldTransition.includes(transition.NONE) ||
    newTransition.includes(transition.NONE)) return {};

  const dim = "country";

  newTransition.forEach(transitionTo => {
    const transitionFrom = oldTransition.filter(transition => transitions[transitionTo].allow.includes(transition))[0];
    const values = transitions[transitionFrom].from(oldModel.state || {}, dim);
    if (!values) return;
    Object.assign(result.state, transitions[transitionTo].to(values, dim));
  });

  if (!Object.keys(result.state).length) {
    delete result.state;
  }
  return result;
}

var timeLogger = {
  _values: {},

  add(key) {
    if (!this._values[key]) {
      this._values[key] = {
        time: this._now(),
        isSnapped: false
      };
    }

  },

  update(key) {
    const value = this._values[key];
    if (value) {
      value.time = this._now();
    }
  },

  reset(key) {
    const value = this._values[key];
    if (value) {
      value.isSnapped = false;
    }
  },

  snapOnce(key) {
    const value = this._values[key];
    if (value && !value.isSnapped) {
      value.isSnapped = true;
      return this._diff(key);
    }
    return 0;
  },

  snap(key) {
    return this._values[key] ? this._diff(key) : 0;
  },

  remove(key) {
    delete this._values[key];
  },

  removeAll() {
    this._values = {};
  },

  _now() {
    return performance.now();
  },

  _diff(key) {
    return Math.round(this._now() - this._values[key].time);
  },
};

let viz;
let urlUpdateDisposer;
const disposers = [];
const MAIN_MARKERS = ["bubble", "line", "bar", "mountain", "pyramid", "spreadsheet"];

//cleanup the existing tool
function removeTool() {
  if (viz) {
    viz.deconstruct();
    viz = void 0;
    let dispose;
    while (dispose = disposers.pop()) {
      dispose();
    }
    Vizabi.stores.markers.disposeAll();
  }
  d3.selectAll(".vzb-tool-config")
    .remove();
  d3.select(".vzb-placeholder")
    .remove();
}


function googleAnalyticsLoadEvents(viz) {
  const markers = viz.model.markers;
  const markerId = MAIN_MARKERS.find(id => markers[id]);
  const marker = markers[markerId];
  const splashMarker = viz.splashMarker;

  registerLoadFinish(marker, "FULL", !!splashMarker);

  function registerLoadFinish(loadMarker, id, splashed) {
    let splashReady = false;
    if (splashed) console.time("SPLASH");
    console.time(id);
    const dispose = mobx.reaction(
      () => {
        if (loadMarker.state != "fulfilled") return;
        return loadMarker.id;
      },
      () => {
        const logById = id => {
          console.timeEnd(id);
          const time = timeLogger.snapOnce(id);
          if (gtag && time) gtag("event", "timing_complete", {
            "name": time < 30000 ? `${id} load` : `${id} load above 30s`,
            "value": time,
            "event_category": "Page load",
            "event_label": appState.tool
          });  
        };
        
        if (splashed && loadMarker.id.split("-").pop() == "splash") {
          splashReady = true;
          logById("SPLASH");
        } else {
          dispose();
          if (splashed && !splashReady) logById("SPLASH");
          logById(id);
        }
      },
      { name: id + " google load registration",
        onError: err => {
          console.log(err);
          window.Rollbar && Rollbar.critical(err);
        }
      }
    );
    disposers.push(dispose);
  }
}

function setTool(tool, skipTransition) {
  const toolset = toolsPage_toolset;
  const datasources = toolsPage_datasources;

  if (tool === appState.tool) return;
  if (!tool) tool = appState.tool;

  //configure google analytics with the active tool, which would be counted as a "page view" of our single-page-application
  if (gtag) gtag("config", poduction ? GAPMINDER_TOOLS_GA_ID_PROD : GAPMINDER_TOOLS_GA_ID_DEV, { "page_title": tool, "page_path": "/" + tool });

  const toolsetEntry = toolset.find(f => f.id === tool);
  const toolsetEntryPrevious = toolset.find(f => f.id === appState.tool);
  const toolModelPrevious = {}; //TODO: viz ? viz.getPersistentMinimalModel(VIZABI_PAGE_MODEL_PREVIOUS) : {};
  appState.tool = tool;

  //kill old autorun listener
  if (urlUpdateDisposer) urlUpdateDisposer();
  removeTool();

  timeLogger.removeAll();
  timeLogger.add("SPLASH");
  timeLogger.add("FULL");

  const tools = [toolsetEntry.tool];
  if (toolsetEntry.toolComponents) tools.push(...toolsetEntry.toolComponents);

  Promise.all(tools.map(tool => window[tool] ? Promise.resolve() : loadJS(tool.toLowerCase() + (".js"), document.body))).then(() => {

    const pathToConfig = "config/toolconfigs/" + (toolsetEntry.config || toolsetEntry.tool) + ".js";
    loadJS(pathToConfig, document.body, "vzb-tool-config")
      .then(() => {
        d3.select(".vizabi-placeholder")
          .append("div")
          .attr("class", "vzb-placeholder")
          .attr("style", "width: 100%; height: 100%;");

        // apply data models from configuration to pageConfig
        function applyDataConfigs(pageConfig) {
          if (!pageConfig.model.dataSources) pageConfig.model.dataSources = {};
          const urlDataConfig = URLI.model?.model?.dataSources;

          if (urlDataConfig) {
            pageConfig.model.dataSources = urlDataConfig;
          } else {
            //bring data configs from a separate config file to the page config (those mentioned in toolset)

            const dataSourcesId = toolsetEntry.dataSources || Object.keys(datasources);
            dataSourcesId.forEach(ds => {
              if (!datasources[ds])
                console.warn(`Could not find data config with key ${ds} in datasources file`);
              else
                pageConfig.model.dataSources[ds] = datasources[ds];
              pageConfig.model.dataSources[ds].locale = URLI.model?.ui?.locale || pageConfig.ui.locale;
            });
          }

          //check if marker datasource is no longer among the configured datasources and kill marker config in that case
          //TODO: go deeper in encoding config and make it more granular
          const markers = pageConfig.model.markers;
          const markerId = MAIN_MARKERS.find(id => markers[id]);
          const datasourceIDs = Object.keys(pageConfig.model.dataSources);
          if (!datasourceIDs.includes(pageConfig.model.markers[markerId].data.source))
            pageConfig.model.markers = { [markerId]: { data: { source: datasourceIDs[0] } } };

          return pageConfig;
        }

        function applyTransitionConfigs(pageConfig) {
          if (skipTransition || !viz) return pageConfig;
          const transitionModel = getTransitionModel(toolModelPrevious, toolsetEntryPrevious.transition, toolsetEntry.transition);
          return deepExtend({}, pageConfig, transitionModel, true); //true --> overwrite by empty
        }

        const PLACEHOLDER = ".vzb-placeholder";

        window.VIZABI_PAGE_MODEL = deepExtend({
          ui: {
            layout: deepExtend({}, VizabiSharedComponents.LayoutService.DEFAULTS, {
              placeholder: PLACEHOLDER
            }),
            locale: deepExtend({}, VizabiSharedComponents.LocaleService.DEFAULTS, {
              placeholder: PLACEHOLDER,
              path: "assets/translation/"
            })
          }
        }, VIZABI_MODEL);
        let pageConfig = VIZABI_MODEL;
        pageConfig = applyDataConfigs(pageConfig);
        pageConfig = applyTransitionConfigs(pageConfig);
        if (URLI.model && URLI.model.model) {
          VizabiSharedComponents.Utils.mergeInTarget(pageConfig.model, deepExtend(URLI.model.model), /*treat as blocks:*/ ["data.filter"]);
        }
        window.VIZABI_UI_CONFIG = mobx.observable((URLI.model && URLI.model.ui) ? deepExtend({}, URLI.model.ui) : {});

        window.VIZABI_LOCALE = mobx.observable(VIZABI_PAGE_MODEL.ui.locale);
        if (VIZABI_UI_CONFIG.locale !== undefined) VIZABI_LOCALE.id = VIZABI_UI_CONFIG.locale;
        window.VIZABI_LAYOUT = mobx.observable(VIZABI_PAGE_MODEL.ui.layout);
        if (VIZABI_UI_CONFIG.projector !== undefined) VIZABI_LAYOUT.projector = VIZABI_UI_CONFIG.projector;

        setLanguage(VIZABI_LOCALE.id);
        dispatch.call("languageChanged", null, VIZABI_LOCALE.id);
        appState.projector = VIZABI_LAYOUT.projector;

        const toolPrototype = toolsetEntry.toolVariation ? window[toolsetEntry.tool][toolsetEntry.toolVariation] : window[toolsetEntry.tool];
        const model = Vizabi(pageConfig.model);

        const toolOptions = {
          showLoading: true
        };

        if (toolsetEntry.toolComponents) {
          toolOptions.toolComponents = toolsetEntry.toolComponents.map(toolComponent => window[toolComponent].Base);
        }

        viz = new toolPrototype({
          Vizabi,
          placeholder: PLACEHOLDER,
          model,
          locale: VIZABI_LOCALE,
          layout: VIZABI_LAYOUT,
          ui: VIZABI_UI_CONFIG,
          default_ui: VIZABI_PAGE_MODEL.ui,
          options: toolOptions
        });

        const switchDataSourceIfConceptNotFound = mobx.autorun(() => {
          //needed for the old URLs to work when switching to a different default data source
          if (viz.status === "fulfilled") {
            for (const marker in viz.model.markers) {
              if (!MAIN_MARKERS.includes(marker)) continue;
              for (const enc in viz.model.markers[marker].encoding) {
                const dataconfig = viz.model.markers[marker].encoding[enc].data;

                const hasConcept = (ds, c) => ds.getConcept(c).concept;

                const concept = dataconfig.config.concept;
                if (concept && typeof concept === "string" && !hasConcept(dataconfig.source, concept)) {
                  const dataSource = Vizabi.stores.dataSources.getAll().find(ds => hasConcept(ds, concept));
                  if (dataSource?.id) dataconfig.config.source = dataSource.id;
                }
              }
            }
          }
        });
        disposers.push(switchDataSourceIfConceptNotFound);

        googleAnalyticsLoadEvents(viz);

        window.viz = viz;

/*
CUSTOM EVENT ANALYTICS CODE
see https://github.com/Gapminder/tools-page-analytics-server

        const searchInput =  viz.element.select("input.vzb-treemenu-search");
        viz.element.select(".vzb-treemenu-wrap").on("click.tm", function(e) {
          const sourceData = d3.select(e.srcElement).datum();
          if (sourceData.concept_type !== "measure" && sourceData.concept_type !== "string") return;

          // if (gtag) gtag("event", "concept_request", {
          //   "name": searchInput.node().value ? "search" : "menu",
          //   "value": sourceData.id,
          //   "event_category": sourceData?.byDataSources?.[0]?.dataSource?.id,
          //   "event_label": appState.tool
          // });

          const options = `\
concept=${sourceData.id}\
&space=${sourceData?.byDataSources?.[0]?.spaces?.[0]}\
&tool=${appState.tool}\
&dataset=${sourceData?.byDataSources?.[0]?.dataSource?.id}\
&type=${searchInput.node().value ? "search" : "menu"}\
&referer=${window.location.host}\
`;
        
          fetch(`https://tools-page-analytics-server.gapminder.org/record?${options}`);
        }, { capture: true });
*/

        // const mainMarkerName = Object.keys(VIZABI_MODEL.model.markers).filter(m => MAIN_MARKERS.includes(m))?.[0];
        // if (mainMarkerName) {
        //   const ignoredConcepts = [
        //     'time',
        //     'name',
        //     'geo',
        //     'country', 
        //     'world_4region',
        //     'world_6region',
        //     'is--', 
        //     'un_sdg_region',
        //     'g77_and_oecd_countries', 
        //     'global', 
        //     'income_3groups', 
        //     'income_groups', 
        //     'landlocked', 
        //     'main_religion_2008', 
        //     'un_sdg_ldc', 
        //     'unhcr_region', 
        //     'unicef_region', 
        //     'west_and_rest', 
        //     'age', 
        //     'gender',
        //     'latitude',
        //     'longitude'
        //   ];
        //   const defaultSource = VIZABI_MODEL.model.markers[mainMarkerName].data.source;
        //   const encodings = VIZABI_MODEL.model.markers[mainMarkerName].encoding;
        //   const passedConcepts = [];
        //   Object.keys(encodings).filter(enc => enc !== "frame").forEach(encKey => {
        //     const encData = encodings[encKey]?.data;
        //     const concept = encData?.concept;
        //     if (!concept || passedConcepts.includes(concept) || encData.constant || ignoredConcepts.includes(concept)) return;
        //     passedConcepts.push(concept);
            
        //     if (gtag) gtag("event", "concept_request", {
        //       "name": "url",
        //       "value": concept,
        //       "event_category": encData.source || defaultSource,
        //       "event_label": appState.tool
        //     });
        //   });
        // } 

        window.VIZABI_DEFAULT_MODEL = diffObject(
          mobx.toJS(viz.model.config, { recurseEverything: true }),
          (URLI.model && URLI.model.model) ? deepExtend({}, URLI.model.model) : {}
        );

        const removeProperties = (obj, array, keyStack = "") => {
          Object.keys(obj).forEach(key => {
            if (array.some(s => (keyStack + "." + key).endsWith(s)))
              delete obj[key];
            else
              (obj[key] && typeof obj[key] === "object") && removeProperties(obj[key], array, keyStack + "." + key);
          });
          return obj;
        };

        urlUpdateDisposer = mobx.autorun(() => {
          const Utils = VizabiSharedComponents.Utils;
          const UI_CONFIG = VIZABI_UI_CONFIG;
          const DEFAULT_MODEL = VIZABI_DEFAULT_MODEL;
          const MODEL = VIZABI_MODEL;
          const LOCALE = VIZABI_LOCALE;
          const LAYOUT = VIZABI_LAYOUT;
          const PAGE_MODEL = VIZABI_PAGE_MODEL;

          let jsmodel = mobx.toJS(viz.model.config, { recurseEverything: true });
          let jsui = mobx.toJS(UI_CONFIG, { recurseEverything: true });

          jsmodel = diffObject(jsmodel, DEFAULT_MODEL || {});
          jsui = diffObject(jsui, MODEL.ui);

          const model = {
            model: Utils.clearEmpties(removeProperties(jsmodel, ["highlighted", "superhighlighted", "locale", "range", "frame.scale.domain", "presets"])),
            ui: Utils.clearEmpties(removeProperties(jsui, ["dragging", "opened"]))
          };

          if (PAGE_MODEL.ui.locale.id !== LOCALE.id)
            model.ui.locale = LOCALE.id;
          else
            delete model.ui.locale;
          if (PAGE_MODEL.ui.layout.projector !== LAYOUT.projector)
            model.ui.projector = LAYOUT.projector;
          else
            delete model.ui.projector;

          DEFAULT_MODEL && debouncedUpdateUrl(model, undefined, true);
        }, { name: "tool.js: update url" });
      })
      .catch(err => console.error(`Failed to set up tool id = ${tool} with config from ${pathToConfig}
        Message: ${err.message}
        Stack: ${err.stack}`
      ));

  });
}


//   'change_hook_which': function(evt, arg) {
//     if (gtag) gtag('event', 'indicator selected', {
//       'event_label': arg.which,
//       'event_category': arg.hook
//     });
//   },
//   'load_error': function(evt, error) {
//     if (gtag) gtag('event', 'error', {
//       'event_label': JSON.stringify(error).substring(0, 500), //500 characters is the limit of GA field
//       'event_category': this._name
//     });
//     if (gtag) gtag('event', 'exception', {
//       'description': JSON.stringify(error).substr(0,150), //150 characters is the limit of GA field
//       'fatal': true
//     });

const rule$5 = {
  test(url) {
    return /#_/.test(url);
  },

  use(url) {
    const hashIndex = url.indexOf("#");
    const hashPrefix = url.substr(0, hashIndex);
    const hash = url.substr(hashIndex);

    return hashPrefix + hash.replace("$", "/$").replace(/([^\/])_/g, "$1$");
  }
};

const rule$4 = {
  test(url) {
    //https://www.gapminder.org/tools/#$state$time$value=2019;&marker$select@$country=fra&trailStartTime=1800&labelOffset@:0.094&:-0.182;;;&opacitySelectDim:0&axis_x$domainMin:null&domainMax:null&zoomedMin:null&zoomedMax:null&scaleType=genericLog&spaceRef:null;&axis_y$domainMin:null&domainMax:null&zoomedMin:null&zoomedMax:null&spaceRef:null;;;&chart-type=bubbles
    return url.includes("$state$") && !url.includes("url=v");
  },

  use(url) {
    console.log("OLD URL DETECTED", url);


    function parseURL(loc) {
      //const loc = window.location.toString();
      let hash = null;
      const URLI = {};
      if (loc.indexOf("#") >= 0) {
        hash = loc.substring(loc.indexOf("#") + 1);

        if (hash) {

          let parsedUrl = {};
          try {
            parsedUrl = urlon.parse(decodeUrlHash(hash) || "$;");
          }
          catch {
            console.warn("Failed to decode and parse this hash:", hash);
          }

          URLI.model = parsedUrl;
          URLI["chart-type"] = parsedUrl["chart-type"];
          delete parsedUrl["chart-type"];

        }
      }
      return URLI;
    }

    function decodeUrlHash(hash) {
      //replacing %2523 with %23 needed when manual encoding operation of encodeUrlHash()
      //plus the enforced encoding in some browsers resulted in double encoding
      return decodeURIComponent(hash.replace(/%2523/g, "%23"));
    }

    const oldState = parseURL(url);
    const oldSelect = oldState?.model?.state?.marker?.select;
    if (oldSelect) {
      console.log("ATTEMPTING TO MODERNIZE OLD SELECT", oldSelect);
      const newSelect = oldSelect.reduce((acc, m) => { acc[m.country] = m.trailStartTime; return acc; }, {});
      const newState = { model: { markers: { bubble: { encoding: { trail: { data: { filter: { markers: newSelect } } } } }  } } };
      return url.split("$state$")[0] + urlon.stringify(newState);
    }


    return url;
  }
};

const geoproperties = {
  "CATID0": "world_6region",
  "CATID1": "income_groups",
  "CATID2": "landlocked",
  "CATID3": "g77_and_oecd_countries",
  "CATID4": "world_4region",
  "CATID5": "main_religion_2008"
};

const countries = {
  "i0": "abkh",
  "i1": "afg",
  "i2": "akr_a_dhe",
  "i3": "alb",
  "i4": "dza",
  "i5": "asm",
  "i6": "and",
  "i7": "ago",
  "i8": "aia",
  "i9": "atg",
  "i10": "arg",
  "i11": "arm",
  "i12": "abw",
  "i13": "aus",
  "i14": "aut",
  "i15": "aze",
  "i16": "bhs",
  "i17": "bhr",
  "i18": "bgd",
  "i19": "brb",
  "i20": "blr",
  "i21": "bel",
  "i22": "blz",
  "i23": "ben",
  "i24": "bmu",
  "i25": "btn",
  "i26": "bol",
  "i27": "bih",
  "i28": "bwa",
  "i29": "bra",
  "i30": "vgb",
  "i31": "brn",
  "i32": "bgr",
  "i33": "bfa",
  "i34": "bdi",
  "i35": "khm",
  "i36": "cmr",
  "i37": "can",
  "i38": "cpv",
  "i39": "cym",
  "i40": "caf",
  "i41": "tcd",
  "i42": "chanisl",
  "i43": "chl",
  "i44": "chn",
  "i45": "cxr",
  "i46": "cck",
  "i47": "col",
  "i48": "com",
  "i49": "cod",
  "i50": "cog",
  "i51": "cok",
  "i52": "cri",
  "i53": "civ",
  "i54": "hrv",
  "i55": "cub",
  "i280": "nld_curacao",
  "i56": "cyp",
  "i57": "cze",
  "i58": "cheslo",
  "i59": "dnk",
  "i60": "dji",
  "i61": "dma",
  "i62": "dom",
  "i63": "deu_east",
  "i64": "ecu",
  "i65": "egy",
  "i66": "slv",
  "i67": "gnq",
  "i68": "eri",
  "i69": "eri_a_eth",
  "i70": "est",
  "i71": "eth",
  "i72": "fro",
  "i73": "flk",
  "i74": "fji",
  "i75": "fin",
  "i76": "fra",
  "i77": "guf",
  "i78": "pyf",
  "i79": "gab",
  "i80": "gmb",
  "i81": "geo",
  "i82": "deu",
  "i83": "gha",
  "i84": "gib",
  "i85": "grc",
  "i86": "grl",
  "i87": "grd",
  "i88": "glp",
  "i89": "gum",
  "i90": "gtm",
  "i91": "gbg",
  "i92": "gin",
  "i93": "gnb",
  "i94": "guy",
  "i95": "hti",
  "i96": "hos",
  "i97": "hnd",
  "i98": "hkg",
  "i99": "hun",
  "i100": "isl",
  "i101": "ind",
  "i102": "idn",
  "i103": "irn",
  "i104": "irq",
  "i105": "irl",
  "i106": "gbm",
  "i107": "isr",
  "i108": "ita",
  "i109": "jam",
  "i110": "jpn",
  "i111": "jey",
  "i112": "jor",
  "i113": "kaz",
  "i114": "ken",
  "i115": "kir",
  "i118": "kos",
  "i119": "kwt",
  "i120": "kgz",
  "i121": "lao",
  "i122": "lva",
  "i123": "lbn",
  "i124": "lso",
  "i125": "lbr",
  "i126": "lby",
  "i127": "lie",
  "i128": "ltu",
  "i129": "lux",
  "i130": "mac",
  "i131": "mkd",
  "i132": "mdg",
  "i133": "mwi",
  "i134": "mys",
  "i135": "mdv",
  "i136": "mli",
  "i137": "mlt",
  "i138": "mhl",
  "i139": "mtq",
  "i140": "mrt",
  "i141": "mus",
  "i142": "myt",
  "i143": "mex",
  "i144": "fsm",
  "i145": "mda",
  "i146": "mco",
  "i147": "mng",
  "i148": "mne",
  "i149": "msr",
  "i150": "mar",
  "i151": "moz",
  "i152": "mmr",
  "i153": "nam",
  "i154": "nru",
  "i155": "npl",
  "i156": "nld",
  "i157": "ant",
  "i158": "ncl",
  "i159": "nzl",
  "i160": "ngokar",
  "i161": "nic",
  "i162": "ner",
  "i163": "nga",
  "i164": "niu",
  "i165": "nfk",
  "i116": "prk",
  "i252": "yem_north",
  "i166": "cyp_nor",
  "i167": "mnp",
  "i168": "nor",
  "i169": "omn",
  "i170": "pak",
  "i171": "plw",
  "i172": "pan",
  "i173": "png",
  "i174": "pry",
  "i175": "per",
  "i176": "phl",
  "i177": "pcn",
  "i178": "pol",
  "i179": "prt",
  "i180": "pri",
  "i181": "qat",
  "i182": "reu",
  "i183": "rou",
  "i184": "rus",
  "i185": "rwa",
  "i193": "wsm",
  "i194": "smr",
  "i195": "stp",
  "i196": "sau",
  "i197": "sen",
  "i198": "srb",
  "i199": "scg",
  "i200": "scg_ex_kos",
  "i201": "syc",
  "i202": "sle",
  "i203": "sgp",
  "i271": "sxm",
  "i204": "svk",
  "i205": "svn",
  "i206": "slb",
  "i207": "som",
  "i208": "som_somland",
  "i209": "zaf",
  "i117": "kor",
  "i210": "sosset",
  "i211": "ssd",
  "i253": "yem_south",
  "i212": "esp",
  "i213": "lka",
  "i186": "stbar",
  "i187": "shn",
  "i188": "kna",
  "i189": "lca",
  "i190": "stmar",
  "i191": "vct",
  "i192": "spm",
  "i214": "sdn",
  "i215": "sur",
  "i216": "sjm",
  "i217": "swz",
  "i218": "swe",
  "i219": "che",
  "i220": "syr",
  "i221": "twn",
  "i222": "tjk",
  "i223": "tza",
  "i224": "tha",
  "i225": "tls",
  "i226": "tgo",
  "i227": "tkl",
  "i228": "ton",
  "i229": "transn",
  "i230": "tto",
  "i231": "tun",
  "i232": "tur",
  "i233": "tkm",
  "i234": "tca",
  "i235": "tuv",
  "i242": "ussr",
  "i236": "uga",
  "i237": "ukr",
  "i238": "are",
  "i239": "gbr",
  "i240": "usa",
  "i241": "ury",
  "i243": "uzb",
  "i245": "vut",
  "i246": "ven",
  "i250": "vnm",
  "i251": "vir",
  "i244": "wlf",
  "i247": "pse",
  "i248": "deu_west",
  "i249": "esh",
  "i254": "yem",
  "i255": "yug",
  "i256": "zmb",
  "i257": "zwe",
  "i258": "ala"
};

const scaletypes = {
  "lin": "linear"
};

const indicators = {
  "ti": "time",
  "phAwcNAVuyj0TAlJeCEzcGQ": "children_per_woman_total_fertility",
  "phAwcNAVuyj1gkNuUEXOGag": "co2_emissions_tonnes_per_person",
  "phAwcNAVuyj1jiMAkmq1iMg": "income_per_person_gdppercapita_ppp_inflation_adjusted",
  "0ArfEDsV3bBwCcGhBd2NOQVZ1eWowNVpSNjl1c3lRSWc": "child_mortality_0_5_year_olds_dying_per_1000_born",
  "phAwcNAVuyj2tPLxKvvnNPA": "life_expectancy_years",
  "tFOn62dEO9QCyIKK6kgSYRQ": "aid_given_2007_us",
  "tGTst0WEm8V8zI9LOYvGmTg": "aid_given_per_person_2007_us",
  "tQR7RhlZdPjBkVCDPPF4zUg": "aid_given_percent_of_gni",
  "tXn3DSfvsYujaBP9bvH6acg": "water_and_sanitation_aid_given_percent_of_aid",
  "tMxqFNS7BC5QyLrhBO8DXqQ": "economical_infrastructure_aid_given_percent_of_aid",
  "tMjW0fdVf9VJaxVk_VFSUhg": "production_sector_aid_given_percent_of_aid",
  "tBJ1rYQ-nA6fqI6_Gn3mBNg": "multisector_cross_cutting_aid_given_percent_of_aid",
  "tQQaILpdu-vGtSkJLr2VQCw": "education_aid_given_percent_of_aid",
  "tRybjVoG5Ah9yhKcEx16u5Q": "health_aid_given_percent_of_aid",
  "tjFf_YqwB6tgSG9L0r0Ywdg": "population_policies_aid_given_percent_of_aid",
  "t3IAEOsfHK-z6rvGLCDR74g": "government_and_society_aid_given_percent_of_aid",
  "tqjUijP4mi_dHKkCZjOn0oA": "other_social_services_aid_given_percent_of_aid",
  "0AkBd6lyS3EmpdHVuNVpKdnNCa08yV3NOd0Zsal9JaWc": "aid_received_total_us_inflation_adjusted",
  "t9GL1nIZdtxszJbjKErN2Hg": "aid_received_per_person_current_us",
  "tzK6dx2JltRfVXFI1ADh84w": "aid_received_percent_of_gni",
  "tAQpQeQkuyA1-ZovdDJ7JAw": "dollar_billionaires_per_million_people",
  "t_KhYe1qTGh4c90N61AUDSg": "average_age_of_dollar_billionaires_years",
  "tNWhbu-1UIPPxtmRHtnINOQ": "total_number_of_dollar_billionaires",
  "0AkBd6lyS3EmpdDlSTTVWUkU3Z254aEhERmVuQWZaeWc": "debt_to_foreigners_by_public_and_private_percent_of_gni",
  "0AkBd6lyS3EmpdC1iMVRuVUFUd08tVDM0ZDF0cnFtekE": "total_reserves_percent_of_debt_to_foreigners",
  "pyj6tScZqmEfI4sLVvEQtHw": "total_gdp_us_inflation_adjusted",
  "0AkBd6lyS3EmpdHo5S0J6ekhVOF9QaVhod05QSGV4T3c": "gdppercapita_us_inflation_adjusted",
  "rcTO3doih5lvJCjgLSvlajA": "gdpperemployee_us_inflation_adjusted",
  "r6kTHMinnVedj8gPsUtfZ0g": "gdpperworking_hour_us_inflation_adjusted",
  "tvllZwGIbhwxLD7EXFhPeXQ": "gdppercapita_growth_over_next_10_years",
  "0AkBd6lyS3EmpdEdDWHhBcFpjMUo4MGE2X2Q4WXFQRGc": "gdppercapita_growth_percent_per_year",
  "0ArfEDsV3bBwCdFl6cDkxcmZxM0pVNXBUYjE1ZmNqVUE": "total_gni_ppp_current_international",
  "0ArfEDsV3bBwCdFdqZ0NOdjluMmoyUTBTWTRjWWQzQVE": "gnipercapita_constant_2000_us",
  "0ArfEDsV3bBwCdFVrVDZQUnRwZ2lqT2lPMXcySXZwRmc": "gnipercapita_atlasmethod_current_us",
  "0ArfEDsV3bBwCdGhJcHAwanc2aFdZeXl1WTVZQnJjb1E": "gnipercapita_ppp_current_international",
  "pyj6tScZqmEcjeKHnZq6RIg": "inequality_index_gini",
  "tmKvydPl_roGIQBrMYA6C4g": "income_share_of_richest_10percent",
  "tLnCxItXzRSu9gH-5PyEFDw": "income_share_of_richest_20percent",
  "twSOUYrIFh2W2snDUt7VaQg": "income_share_of_2nd_richest_20percent",
  "t_-14NtXH6xZX48xHG75z5w": "income_share_of_middle_20percent",
  "tXRyZGCfHsWMmr53VFxrqTw": "income_share_of_2nd_poorest_20percent",
  "pyj6tScZqmEdIyrBS31XAaw": "income_share_of_poorest_20percent",
  "trzLWJQU4SZMDpeVg3XnL5A": "income_share_of_poorest_10percent",
  "0AkBd6lyS3EmpdGJoOUJXalk3STFYUG85MkxlbnQxMmc": "inflation_annual_percent",
  "pyj6tScZqmEejn8qHNmm4LQ": "central_bank_discount_rate_annual_percent",
  "0AkBd6lyS3EmpdG9sVVF6dHpGdnhQU3BkMlAtNHFwVkE": "investments_percent_of_gdp",
  "0AkBd6lyS3EmpdFgzT1ZJWW4tdDB4Q2NETTVoTG1ZYlE": "tax_revenue_percent_of_gdp",
  "0AkBd6lyS3EmpdE03VFhRMnBpMGZhQ19Vbk9pMGU5VUE": "foreign_direct_investment_net_inflows_percent_of_gdp",
  "0AkBd6lyS3EmpdHQtSzBhVXA2WTNrVDFleUZvZ0doTUE": "foreign_direct_investment_net_outflows_percent_of_gdp",
  "pyj6tScZqmEd5FA9xlfO9eA": "patent_applications_total",
  "pyj6tScZqmEdMioz5VJKXHw": "patents_granted_total",
  "pyj6tScZqmEe371ZVZl73eA": "patents_in_force_total",
  "tBrbR3BlR_12WlTIlSTpu6g": "poverty_percent_people_below_2_a_day",
  "trbzCrl1eb6QJG5D8j1-qQw": "rural_poverty_percent_rural_people_below_national_rural",
  "tublssyj-uqIY25OoRupbCw": "urban_poverty_percent_urban_people_below_national_urban",
  "t1YAVXUoD3iJKy2mSq2Padw": "extreme_poverty_percent_people_below_125_a_day",
  "0AkBd6lyS3EmpdFhPbDdCTTYxM1dGc21UdE9sSkp1WEE": "agriculture_percent_of_gdp",
  "0AkBd6lyS3EmpdHA2UEFOYTlUTWtzV29xbHFuMU00SFE": "industry_percent_of_gdp",
  "0AkBd6lyS3EmpdHk4eXd4RG5Rb1gtUTB0cUJ3M21qdGc": "services_percent_of_gdp",
  "0AkBd6lyS3EmpdHZSTVMxaVdxQlFLR3NMbnBEWnVuTXc": "exports_percent_of_gdp",
  "0AkBd6lyS3EmpdEhLMVdnUjZ0d05WWkhjT0FjSDIwQmc": "imports_percent_of_gdp",
  "0AkBd6lyS3EmpdGpkU3BSVmw5UXhTMWd6UFc1eXI3Rnc": "arms_exports_us_inflation_adjusted",
  "0AkBd6lyS3EmpdEljeENrOXlFXzR3Rm8xT0drTV9YclE": "arms_imports_us_inflation_adjusted",
  "0Asm_G8nr4TCSdDh2NWQtVDJhYlVsTElFRjJIYkNlSnc": "total_gdp_ppp_inflation_adjusted",
  "0AkBd6lyS3EmpdEZkTFJZR2RNMVFuRmUzbktyTkoxREE": "high_technology_exports_percent_of_manufactured_exports",
  "0AkBd6lyS3EmpdDJFSzRHa3g1Q29BOWlla0tTOEFyVGc": "merchandise_trade_percent_of_gdp",
  "0AkBd6lyS3EmpdEF6VzlKTzNCNjRnT0ZzMDg5a1d1Z3c": "trade_balance_us_not_inflation_adjusted",
  "0AkBd6lyS3EmpdFpGU185SkpmZ2V4ajNPZHFaaEwtU1E": "trade_balance_percent_of_gdp",
  "rEF20Sw6Sy7tn4DKsKSDDMQ": "hourly_compensation_us",
  "rdCufG2vozTpKw7TBGbyoWw": "working_hours_per_week",
  "pyj6tScZqmEfMkeuokDLVIQ": "market_value_of_listed_companies_percent_of_gdp",
  "0AkBd6lyS3EmpdDNPQjFBT2s5Zko3U2V0NFQzS3owRnc": "military_expenditure_percent_of_gdp",
  "phAwcNAVuyj3Iw3kqbjJTZQ": "math_achievement_4th_grade",
  "phAwcNAVuyj3fwfA8XA25Eg": "math_achievement_8th_grade",
  "pyj6tScZqmEcWM3hb0x-BZA": "ratio_of_girls_to_boys_in_primary_and_secondary_education_perc",
  "0AkBd6lyS3EmpdE8xR0dUWDI4ME02SjQ5bi1NYnFHN0E": "ratio_of_young_literate_females_to_males_percent_ages_15_24",
  "pyj6tScZqmEc96gAEE60-Zg": "literacy_rate_adult_female_percent_of_females_ages_15_above",
  "pyj6tScZqmEd4fn4YYOvuOg": "literacy_rate_adult_male_percent_of_males_ages_15_and_above",
  "pyj6tScZqmEdrsBnj2ROXAg": "literacy_rate_adult_total_percent_of_people_ages_15_and_above",
  "pyj6tScZqmEf96wv_abR0OA": "literacy_rate_youth_female_percent_of_females_ages_15_24",
  "pyj6tScZqmEe7OxrqKcSWfw": "literacy_rate_youth_male_percent_of_males_ages_15_24",
  "pyj6tScZqmEepmgV0TLjBag": "literacy_rate_youth_total_percent_of_people_ages_15_24",
  "0AkBd6lyS3EmpdGVSdkZnZWhfMDYybzd6U2p3NkxsZ3c": "children_out_of_school_primary",
  "0AkBd6lyS3EmpdFNPaEhiUDJ0QWZYOEwwQlBSTmtza1E": "children_out_of_school_primary_female",
  "0AkBd6lyS3EmpdFd5cnQzNU5IYm1vTWtrTWRIX3UxbHc": "children_out_of_school_primary_male",
  "0AkBd6lyS3EmpdEhTN2hlZ05ZczVwZDdVZlF5cUxJb2c": "primary_completion_rate_total_percent_of_relevant_age_group",
  "0AkBd6lyS3EmpdGhCWnZrTGMwaTl5ek9QS0szMTIwcEE": "primary_school_completion_percent_of_boys",
  "0AkBd6lyS3EmpdFVxSEVZVWE1b0l6NWo5NzNTZ2IzWVE": "primary_school_completion_percent_of_girls",
  "0AkBd6lyS3EmpdFJTUEVleTM0cE5jTnlTMk41ajBGclE": "expenditure_per_student_primary_percent_of_gdp_per_person",
  "0AkBd6lyS3EmpdDBuUVIzbWwtaU5helpJVG5BMmxyX1E": "expenditure_per_student_secondary_percent_of_gdp_per_person",
  "0AkBd6lyS3EmpdDJxdlN6cEtYMjMxdC1XdGdKOXR2bkE": "expenditure_per_student_tertiary_percent_of_gdp_per_person",
  "0ArfEDsV3bBwCdHFEVVhHZElzb0VRWE9pc3JmZHg2dWc": "mean_years_in_school_women_25_years_and_older",
  "0ArfEDsV3bBwCdC03X1ZWNGJHR3FBb0Q3VjJIdV9OSmc": "mean_years_in_school_men_25_years_and_older",
  "0ArfEDsV3bBwCdC1MYzAtY2xPQ2xOR1lMeGhYSWlpR0E": "mean_years_in_school_women_25_to_34_years",
  "0ArfEDsV3bBwCdHlYZHNWN1YtWVNudU9UbWJOd19nUVE": "mean_years_in_school_men_25_to_34_years",
  "0ArfEDsV3bBwCdEttYjNNUTlkUTdrMUQ0c3BTR0dINlE": "mean_years_in_school_women_of_reproductive_age_15_to_44",
  "0ArfEDsV3bBwCdG5JUDZjTHR5SzZFZjBqa2JYYUxBclE": "mean_years_in_school_women_percent_men_25_to_34_years",
  "0AkBd6lyS3EmpdHd2Nld0NEVFOGRiSTc0V3ZoekNuS1E": "energy_use_total",
  "0AkBd6lyS3EmpdHRmYjJWLVF0SjlQY1N5Vm9yU0xxaGc": "energy_use_per_person",
  "0AkBd6lyS3EmpdFNZMXZwcjNPY2c3MWwxbWIwVFgyd0E": "energy_production_total",
  "0AkBd6lyS3EmpdHJ6UTV4MkEyN0NYdnJJOG1oYUxmTWc": "energy_production_per_person",
  "pyj6tScZqmEdz8B4njtoHPA": "pump_price_for_gasoline_us_per_liter",
  "0Auk0ddvGIrGqcHlqNnRTY1pxbUVjMVRtTWlGZG1PVmc": "coal_consumption_total",
  "0Auk0ddvGIrGqcHlqNnRTY1pxbUVka1hObHlPbTlmUUE": "coal_consumption_per_cap",
  "tiVeyAJd7iRWorOwl_ARWEQ": "electricity_use_per_person",
  "tEu78F4acf0u6MRyhg5-9qQ": "electricity_use_total",
  "t7SFNscT9Ex0s9i3av7PxRQ": "residential_electricity_use_per_person",
  "teUZEfKw52HewO3D0YrQ5HA": "residential_electricity_use_total",
  "pyj6tScZqmEehRG-9mMHYdg": "electricity_generation_total",
  "pyj6tScZqmEeMtYNdMyLKOw": "electricity_generation_per_person",
  "t1MShlv870O6LmFNEHazdEg": "hydro_power_generation_total",
  "tSjVrGemv30eCh3jPZkXYCQ": "hydro_power_generation_per_person",
  "trRb8ZIaBOD4KzikShshZ2g": "nuclear_power_generation_total",
  "t28UhT9IaWINamciSiJIS7w": "nuclear_power_generation_per_person",
  "pyj6tScZqmEfv2K6dZmskWg": "natural_gas_production_total",
  "pyj6tScZqmEf0IBo_AGrgKA": "natural_gas_production_per_person",
  "pyj6tScZqmEfZd6DbNF1MKA": "natural_gas_proven_reserves_per_person",
  "pyj6tScZqmEc5qiv87tr3NA": "natural_gas_proved_reserves_total",
  "pyj6tScZqmEeUgUuvuJTONQ": "oil_production_per_person",
  "pyj6tScZqmEdNIa3ckVXaCQ": "oil_production_total",
  "pyj6tScZqmEfrI4YlDJDUag": "oil_proven_reserves_per_person",
  "pyj6tScZqmEfJfS1WYrLeBA": "oil_proved_reserves_total",
  "pyj6tScZqmEcm0fIa0IVtKw": "oil_consumption_total",
  "0ArfEDsV3bBwCdERNZmlfUGM5YVE3bmEwODdlRDFqSkE": "oil_consumption_per_cap",
  "rvRwTPi0n_94EScVA3YjLeg": "drought_deaths_annual_number",
  "rvbbs7uxQc7swJ4RR2BcQfA": "earthquake_deaths_annual_number",
  "rvtZF_JC0OI27tL66o6hiMQ": "epidemic_deaths_annual_number",
  "r4WUTsck3NfccM6UsKlGF7g": "extreme_temperature_deaths_annual_number",
  "rtESPUlrTyLEoHpURqE8RAg": "flood_deaths_annual_number",
  "r0JePjBgBQqtuh5wh1Wz9CA": "storm_deaths_annual_number",
  "rdBew79hTeXcIXhB1VCTPfg": "tsunami_deaths_annual_number",
  "rSv5aMDwESiKg-yA__-tRFg": "plane_crash_deaths_annual_number",
  "rAYA0bjnfYwzXnir0cigijQ": "drought_affected_annual_number",
  "rG_BjsDwyS2n7DANNH3i5vQ": "earthquake_affected_annual_number",
  "r6H8dfVPu2CJ2nzI8X0jurw": "epidemic_affected_annual_number",
  "ryPd-H6Kn3wcHC50zyImqUg": "extreme_temperature_affected_annual_number",
  "rsCDusOObseaoBUdarzw7Kw": "flood_affected_annual_number",
  "rAxnmm4ZL2HrYjIqJX0Ch-w": "storm_affected_annual_number",
  "rskN46tpbe6Iy3K_ULk1_cQ": "tsunami_affected_annual_number",
  "rhbS3kWOfMzvY4ofUFoeFJg": "plane_crash_affected_annual_number",
  "0AkBd6lyS3EmpdEVUcEJVRzlFWWRRcjhveGlrQzdwdUE": "co2_intensity_of_economic_output_kg_co2_per_2005_ppp_of_gdp",
  "pyj6tScZqmEed4UamoiNCFA": "cumulative_co2_emissions_tonnes",
  "phAwcNAVuyj0uBndTxZAXNQ": "sulfur_emissions_per_person_kg",
  "phAwcNAVuyj1NHPC9MyZ9SQ": "yearly_co2_emissions_1000_tonnes",
  "t9SYWh7siLJDzyZYN1R4HfQ": "total_sulfur_emission_kilotonnes",
  "pp59adS3CHWeB1N1HlpFQVQ": "forest_land_total_area_ha",
  "pp59adS3CHWeECA6Gf__BNQ": "primary_forest_area_ha",
  "pp59adS3CHWc4aJd9fV8zZg": "planted_forest_area_ha",
  "pp59adS3CHWe8O-N9RgxzDw": "wood_removal_cubic_meters",
  "pp59adS3CHWfRGgfhjf8FBQ": "forest_coverage_percent",
  "pp59adS3CHWcsSl830EklJA": "biomass_stock_in_forest_tons",
  "pp59adS3CHWdFemmS_iN5fw": "privately_owned_forest_land_percent",
  "pp59adS3CHWdtCylhQOQiXw": "privately_owned_other_wooded_land_percent",
  "pp59adS3CHWf66stZ2oNUAA": "forest_products_removal_total_dollar",
  "pp59adS3CHWd9CVdfFx1dEw": "forest_products_removal_per_ha_dollar",
  "0AkBd6lyS3EmpdEF3alRGS0JQZVgwSW1FWUxUQmZoWXc": "agricultural_land_percent_of_land_area",
  "0AkBd6lyS3EmpdFRuaV91Mm9JeUhwR1hHRXJhV3ZBQkE": "forest_area_sq_km",
  "0AkBd6lyS3EmpdFFWcWdEM0RXT1lRZ0wwRVNsakZCaWc": "surface_area_sq_km",
  "rPN9VekxwpUzwowMaxg9Ybw": "renewable_water_cu_meters_per_person",
  "riLRFECHMsTq7OTa2KYZCWA": "internal_renewable_water_cu_meters_per_person",
  "rezAT4nYhKc2Loe6CxWSPWw": "water_withdrawal_cu_meters_per_person",
  "ruUmTRBZ5xYjpOAhOT9VQbw": "municipal_water_withdrawal_cu_meters_per_person",
  "rab3jHe_JZrU1pqlX0xnQEw": "agricultural_water_withdrawal_percent_of_total",
  "rGKP-BBylLOM11iGahW1lxA": "industrial_water_withdrawal_percent_of_total",
  "r58mA3XNUvBov6M_1T_FiUg": "municipal_water_withdrawal_percent_of_total",
  "rt3BaikcRwJBNC0CvQsjDCA": "desalinated_water_produced_billion_cu_meters",
  "rIG3ZWxv381t2bIL2BNaIVw": "total_water_withdrawal_billion_cu_meters",
  "phAwcNAVuyj0NpF2PTov2Cw": "infant_mortality_rate_per_1000_births",
  "0ArfEDsV3bBwCdDdTQUtvNEJhb0RjRjU0WUtET1R0Vnc": "underweight_children",
  "tbpc_fYEqPzaE7pDWBG84Rw": "all_causes_deaths_in_newborn_per_1000_births",
  "t_0WcTuc94YT9cJVvy1tmUg": "birth_asphyxia_deaths_in_newborn_per_1000_births",
  "tneegXfZGHA0-nLG25ypnyg": "congenital_deaths_in_newborn_per_1000_births",
  "tX7NQAP_5H4TOS1OEnxdxYw": "diarrhoeal_deaths_in_newborn_per_1000_births",
  "tOXHWd6PcUGK3Dg-k2N8Clw": "pneumonia_deaths_in_newborn_per_1000_births",
  "tVMPnbOfGdvTRrtbuIbRw5w": "prematurity_deaths_in_newborn_per_1000_births",
  "tGVRSoAJtdwQ30CqCSexKJA": "sepsis_deaths_in_newborn_per_1000_births",
  "t1E7e32tlIxtJU9UhnR9nJg": "tetanus_deaths_in_newborn_per_1000_births",
  "tiYIen5OQP0fKiQbg6g8VyA": "other_deaths_in_newborn_per_1000_births",
  "tBVcAKWEbc2s687q6D9yuYg": "all_causes_deaths_in_newborn_total_deaths",
  "twrll6eL8GeIU4P71aTakmg": "birth_asphyxia_deaths_in_newborn_total_deaths",
  "tUvFsKz2lGL-GtPmw47VLdg": "congenital_deaths_in_newborn_total_deaths",
  "tKZcnGP_XImMXRZ4tZqtjMg": "diarrhoeal_deaths_in_newborn_total_deaths",
  "tjvbVGhVx7YCk1uguLrkaag": "pneumonia_deaths_in_newborn_total_deaths",
  "tVyFL3CyRTuGEnRQErDeSLQ": "prematurity_deaths_in_newborn_total_deaths",
  "tRA1VmW2ZQ7sCsoD7AHIilg": "sepsis_deaths_in_newborn_total_deaths",
  "tB6Gkh4rLC9yB2TXfHSApIA": "tetanus_deaths_in_newborn_total_deaths",
  "tyPO4OLCIZtK5zcdkafcHMA": "other_deaths_in_newborn_total_deaths",
  "t9FP3_OPrE2ug_I_iNsbePg": "all_causes_deaths_in_children_1_59_months_per_1000_births",
  "tADSStUzP0ADEPYqsIfVHMQ": "diarrhoeal_deaths_in_children_1_59_months_per_1000_births",
  "t4C4M_ynK9Ho8tGRj6a5U5w": "hiv_deaths_in_children_1_59_months_per_1000_births",
  "tfOi0Ji7pJDJbxJVqwJXj9g": "injury_deaths_in_children_1_59_months_per_1000_births",
  "tunqKEwokfnJMDA1g7W8KwA": "malaria_deaths_in_children_1_59_months_per_1000_births",
  "tfyKUbGu10P_WOgHSOHhCJg": "measles_deaths_in_children_1_59_months_per_1000_births",
  "tZhYsw0sliDInwowT0iWTLQ": "meningitis_deaths_in_children_1_59_months_per_1000_births",
  "tqAEpy6pMtN7ULlF6uIzEog": "ncd_deaths_in_children_1_59_months_per_1000_births",
  "t4RbfeK6Dtt2srxw4REoXxQ": "pertussis_deaths_in_children_1_59_months_per_1000_births",
  "tCe8N5KXAYCJteQokAqVM_A": "pneumonia_deaths_in_children_1_59_months_per_1000_births",
  "tVAqgYwCDZfcq9jSCI87SAw": "other_infections_deaths_in_children_1_59_months_per_1000_birt",
  "taYeez4Mkk8OvdH-q4QAxxQ": "all_causes_deaths_in_children_1_59_months_total_deaths",
  "tDzIq4iIDwNtYthN_QYZwZg": "diarrhoeal_deaths_in_children_1_59_months_total_deaths",
  "tQe6yinBBauXLvBFroZEL3Q": "hiv_deaths_in_children_1_59_months_total_deaths",
  "tnRIpcH0InZUFz7f2ziXKog": "injury_deaths_in_children_1_59_months_total_deaths",
  "t1Vf-4rkGlG20pYzuGib3hw": "malaria_deaths_in_children_1_59_months_total_deaths",
  "tYZAce4wGXEp5Jve3AI7yWQ": "measles_deaths_in_children_1_59_months_total_deaths",
  "tX-vHLzEZ7mqfk1vf6SbUXA": "meningitis_deaths_in_children_1_59_months_total_deaths",
  "tfmFGk3PIvTgimegQiHOtSQ": "ncd_deaths_in_children_1_59_months_total_deaths",
  "tdOlzqGxVdDnnCpfWyyGX1A": "pertussis_deaths_in_children_1_59_months_total_deaths",
  "tcYkTk6KMHsrXzcM9WyUxbw": "pneumonia_deaths_in_children_1_59_months_total_deaths",
  "tiehFos6jB-lekEAH028deA": "other_infections_deaths_in_children_1_59_months_total_deaths",
  "phAwcNAVuyj0Zbn8wVYsEHQ": "breast_cancer_new_cases_per_100000_women",
  "phAwcNAVuyj3XpKHFksEPcA": "cervical_cancer_new_cases_per_100000_women",
  "phAwcNAVuyj2P7lqZXLeZAw": "colonandrectum_cancer_new_cases_per_100000_women",
  "phAwcNAVuyj2xhaKENmyRKw": "liver_cancer_new_cases_per_100000_women",
  "phAwcNAVuyj0UaQ2DNjK9Lg": "lung_cancer_new_cases_per_100000_women",
  "phAwcNAVuyj0je8zzeM4WXQ": "stomach_cancer_new_cases_per_100000_women",
  "phAwcNAVuyj2fGuJ1VdTpOw": "breast_cancer_number_of_new_female_cases",
  "phAwcNAVuyj0g-SgNTI23GQ": "cervical_cancer_number_of_new_female_cases",
  "phAwcNAVuyj2L5YHqVxRTLA": "colonandrectum_cancer_number_of_new_female_cases",
  "phAwcNAVuyj1_IYQtrqQCKQ": "liver_cancer_number_of_new_female_cases",
  "phAwcNAVuyj2oQAW8_53cVQ": "lung_cancer_number_of_new_female_cases",
  "phAwcNAVuyj1aXfw3aV83TA": "stomach_cancer_number_of_new_female_cases",
  "phAwcNAVuyj3wJUwXXDdiGg": "breast_cancer_deaths_per_100000_women",
  "phAwcNAVuyj0jPl21g3mqfQ": "cervical_cancer_deaths_per_100000_women",
  "phAwcNAVuyj3bdzmKAvdUSw": "colonandrectum_cancer_deaths_per_100000_women",
  "phAwcNAVuyj2ItBsVpK9VBA": "liver_cancer_deaths_per_100000_women",
  "phAwcNAVuyj2hZorcv6aVLA": "lung_cancer_deaths_per_100000_women",
  "phAwcNAVuyj0RpUEQPgGcZQ": "stomach_cancer_deaths_per_100000_women",
  "phAwcNAVuyj07QB-Apx8RfQ": "breast_cancer_number_of_female_deaths",
  "phAwcNAVuyj2KBU_veE9AQg": "cervical_cancer_number_of_female_deaths",
  "phAwcNAVuyj0ndPkFlozzXQ": "colonandrectum_cancer_number_of_female_deaths",
  "phAwcNAVuyj2LwNOwMSnJQA": "liver_cancer_number_of_female_deaths",
  "phAwcNAVuyj0RMyUI1QFfaA": "lung_cancer_number_of_female_deaths",
  "phAwcNAVuyj1o1rJNFHpQZw": "stomach_cancer_number_of_female_deaths",
  "phAwcNAVuyj2UBFFaFy3Ebg": "colonandrectum_cancer_new_cases_per_100000_men",
  "phAwcNAVuyj1u0KpZbsopCA": "liver_cancer_new_cases_per_100000_men",
  "phAwcNAVuyj1kCRbsnNcTVg": "lung_cancer_new_cases_per_100000_men",
  "phAwcNAVuyj3qX39HWaQjEg": "prostate_cancer_new_cases_per_100000_men",
  "phAwcNAVuyj1XKvT6zwrMPw": "stomach_cancer_new_cases_per_100000_men",
  "phAwcNAVuyj3nBOvEwrkMTA": "colonandrectum_cancer_number_of_new_male_cases",
  "phAwcNAVuyj2LIYJXVW9EVw": "liver_cancer_number_of_new_male_cases",
  "phAwcNAVuyj0sd0z2MGpeeA": "lung_cancer_number_of_new_male_cases",
  "phAwcNAVuyj2vXUZJKI0XHA": "prostate_cancer_number_of_new_male_cases",
  "phAwcNAVuyj3XF3cD2lbecA": "stomach_cancer_number_of_new_male_cases",
  "phAwcNAVuyj0VhkB8-rRHQg": "colonandrectum_cancer_deaths_per_100000_men",
  "phAwcNAVuyj3rojF8TmZtOw": "liver_cancer_deaths_per_100000_men",
  "phAwcNAVuyj2_ibAjsuNgYA": "lung_cancer_deaths_per_100000_men",
  "phAwcNAVuyj2S9phBhTP3dw": "prostate_cancer_deaths_per_100000_men",
  "phAwcNAVuyj3ky4_oAkatBw": "stomach_cancer_deaths_per_100000_men",
  "phAwcNAVuyj0-sqkfnD4rGA": "colonandrectum_cancer_number_of_male_deaths",
  "phAwcNAVuyj1RD88c3w1vNg": "liver_cancer_number_of_male_deaths",
  "phAwcNAVuyj2Az43qu-dQJQ": "lung_cancer_number_of_male_deaths",
  "phAwcNAVuyj1ImYURLRHPRA": "prostate_cancer_number_of_male_deaths",
  "phAwcNAVuyj2NmCvOcsjpag": "stomach_cancer_number_of_male_deaths",
  "phAwcNAVuyj3XYThRy0yJMA": "total_health_spending_percent_of_gdp",
  "pyj6tScZqmEcJI3KBJnrlDQ": "government_share_of_total_health_spending_percent",
  "pyj6tScZqmEcXBFxQw8cFaw": "private_share_of_total_health_spending_percent",
  "tXf6_OUYVmyEMZo0g4DQw6w": "out_of_pocket_share_of_total_health_spending_percent",
  "pyj6tScZqmEd7K-YgYOkGFQ": "government_health_spending_of_total_gov_spending_percent",
  "tR3MM-UTZ0B44BKxxWeAZaQ": "total_health_spending_per_person_international_dollar",
  "tZ3uHUdw0H__Siyj78GXsGg": "government_health_spending_per_person_international_dollar",
  "pyj6tScZqmEeL79qOoKtofQ": "total_health_spending_per_person_us",
  "tBwBBkViOJoycBhLnWHqwSQ": "government_health_spending_per_person_us",
  "phAwcNAVuyj2yo1IzJQmbZg": "medical_doctors_per_1000_people",
  "pyj6tScZqmEe1GaiYJX2qGA": "people_living_with_hiv_number_all_ages",
  "pyj6tScZqmEfbZyl0qjbiRQ": "adults_with_hiv_percent_age_15_49",
  "0ArfEDsV3bBwCdFk2WGhwakxTQkt4NUtTdFJDSlFHQ3c": "newly_hiv_infected_number_all_ages",
  "0ArfEDsV3bBwCdDREUkRSRDJtQmFNTE1TYmRYX1pFNEE": "newly_hiv_infected_percent_age_15_49",
  "0ArfEDsV3bBwCdHZJdFBhYVlvck43d1R6ZFYzUWpiLWc": "annual_hiv_deaths_number_all_ages",
  "0ArfEDsV3bBwCdHMzRDA5Z1RjWkJIWkNfdWNBVFR6b1E": "art_coverage_percent_cd4_l_350",
  "pp59adS3CHWcGnFB9pe14OA": "malaria_cases_per_100000_reported",
  "pp59adS3CHWfGZUVJ2L-dCw": "malaria_deaths_per_100000_reported",
  "pp59adS3CHWczfPHQMiqxCg": "malaria_number_of_cases_reported",
  "pp59adS3CHWfZGL9qouvTbQ": "malaria_number_of_deaths_reported",
  "0AkBd6lyS3EmpdF9OQ2dSSG5nNFhpS3RnRVZHUzZMb3c": "births_attended_by_skilled_health_staff_percent_of_total",
  "0AkBd6lyS3EmpdFp2OENYMUVKWnY1dkJLRXAtYnI3UVE": "contraceptive_use_percent_of_women_ages_15_49",
  "pyj6tScZqmEcVezxiMlWaRw": "maternal_mortality_ratio_per_100000_live_births",
  "tOJs331rbt36sNBXE8g5AUg": "maternal_deaths_total_number",
  "t2ha4jg1M70Le8CH3wHcPIQ": "maternal_deaths_lifetime_risk_per_1000",
  "tgJHpDEY4S7hxJpELGJueWA": "stillbirths_per_1000_births",
  "troMumuI0Y6Phpwnj6qXa_A": "suicide_per_100000_people",
  "0AkBd6lyS3EmpdGhpWDY5QVlOdUxpVGhaMVlUOE9iX0E": "malnutrition_weight_for_age_percent_of_children_under_5",
  "phAwcNAVuyj2sdmdhX9zuKg": "sugar_per_person_g_per_day",
  "0ArfEDsV3bBwCdGlYVVpXX20tbU13STZyVG0yNkRrZnc": "food_supply_kilocalories_per_person_and_day",
  "0AgogXXPMARyldGJqTDRfNHBWODJMRWlZaVhNclhNZXc": "alcohol_consumption_per_adult_15plus_litres",
  "tRccVp7QMaCXMv19CcxERaA": "smoking_adults_percent_of_population_over_age_15",
  "thortPEzDn2xc_5bU255mPA": "smoking_women_percent_of_women_over_age_15",
  "t60tpjxpWq3Bm-nBOvSm3og": "smoking_men_percent_of_men_over_age_15",
  "0ArfEDsV3bBwCdF9saE1pWUNYVkVsNU1FdW1Yem81Nmc": "body_mass_index_bmi_men_kgperm2",
  "0ArfEDsV3bBwCdGt0elo2dzJMVVQ3WmFGSmdhc09LRlE": "body_mass_index_bmi_women_kgperm2",
  "0ArfEDsV3bBwCdHNwRm9DN1FnT3hXWWZVSncxMkZyS2c": "blood_pressure_sbp_men_mmhg",
  "0ArfEDsV3bBwCdHBzUVVSMDlTX1ZCUnNJQ3ZFdkFXVFE": "blood_pressure_sbp_women_mmhg",
  "0ArfEDsV3bBwCdDU5SnRoQ0xlZWhwRUZ6RFNQV042enc": "cholesterol_fat_in_blood_men_mmolperl",
  "0ArfEDsV3bBwCdGJHcHZkSUdBcU56aS1OT3lLeU4tRHc": "cholesterol_fat_in_blood_women_mmolperl",
  "rVyfxaPK4dJ9B6ZdgG34F-g": "infectious_tb_new_cases_per_100000_estimated",
  "r0pD5wznwEUJ0ipdxAWQjiA": "infectious_tb_new_cases_per_100000_reported",
  "rOPfJcbTTIyS-vxDWbkfNLA": "infectious_tb_number_of_new_cases_estimated",
  "rcbx0R-TXbkqRCyvKzn08fg": "infectious_tb_number_of_new_cases_reported",
  "rDb6EYc4YUTBRfXlBvjHYlg": "infectious_tb_detection_rate_percent",
  "rjGHot8B6YSt3kPYEG8nANA": "infectious_tb_detection_rate_percent_dots_only",
  "rewICFMTvBuer8UoJIK0yUg": "infectious_tb_treatment_dots_completed_percent",
  "rKfjGaPxqirPDe8gnTVKuIw": "tb_programme_dots_population_coverage_percent",
  "rMsQHawTObBb6_U2ESjKXYw": "all_forms_of_tb_new_cases_per_100000_estimated",
  "rZNoyaocUmUGuFyRgjJUpig": "all_forms_of_tb_existing_cases_per_100000_estimated",
  "rWM9yEzjpGJvcJlUAIm35tA": "all_forms_of_tb_deaths_per_100000_estimated",
  "rYICvtvVz28fVyQuG_ote2w": "all_forms_of_tb_new_cases_per_100000_reported",
  "rhZayTbvH3ZLlSN64OuRYFg": "all_forms_of_tb_number_of_new_cases_estimated",
  "rOCGMcGcrZs-dfeTEC792ZQ": "all_forms_of_tb_number_of_existing_cases_estimated",
  "rrQ_y5fqQPlznp5mJGXWr-A": "all_forms_of_tb_number_of_deaths_estimated",
  "r5UikGjnZlemlelKY0NX9Pg": "all_forms_of_tb_number_of_new_cases_reported",
  "ru195-zJ0rsx5axPIvm_bRA": "all_forms_of_tb_detection_rate_percent",
  "rutVwqgB14uRV_f2dRbqhUA": "all_forms_of_tb_detection_rate_percent_dots_only",
  "rRCxDI3hB9E9zvc8qSe11qg": "tb_with_hivplus_new_cases_per_100000_estimated",
  "rQV47xgPGa3qOPHoLiVon-w": "tb_with_hivplus_existing_cases_per_100000_estimated",
  "rUBCConMMLm9CxPXUGm325A": "tb_with_hivplus_deaths_per_100000_estimated",
  "rERPF4iYruK0DhAw_0tb5nA": "tb_with_hivplus_number_of_new_cases_estimated",
  "reiGJwoabnMOrPeFima_9ng": "tb_with_hivplus_number_of_existing_cases_estimated",
  "rFAkC0Ae7oXxrVqosJ4NWUA": "tb_with_hivplus_number_of_deaths_estimated",
  "phAwcNAVuyj3Os9LVO_pRDA": "bad_teeth_per_child_12_yr",
  "txVTyScWObTBNuMmkNtLh1w": "dtp3_immunized_percent_of_one_year_olds",
  "t7pU8fR9_ZzRFIMF3FX47YQ": "hepb3_immunized_percent_of_one_year_olds",
  "thClNiXoQqfJDzTv0SYIHZg": "hib3_immunized_percent_of_one_year_olds",
  "pyj6tScZqmEenS18Yjl_SOQ": "mcv_immunized_percent_of_one_year_olds",
  "tnvxVX8aOAl0dwDNujbELPQ": "pab_immunized_percent_of_newborns",
  "0AkBd6lyS3EmpdEpMTHBoMmNzcDVCNVRHWE5zSVJVRHc": "broadband_subscribers",
  "0AkBd6lyS3EmpdHdmMGVNNnV1SHBONDRTdTJzTVBKQXc": "broadband_subscribers_per_100_people",
  "0AkBd6lyS3EmpdEhWLWtqNzljbWg4ZXV6M09JQXNGaUE": "cell_phones_total",
  "0AkBd6lyS3EmpdG1MSjEyS0h2QjRQZ3FXRVR2dVQyeFE": "cell_phones_per_100_people",
  "pyj6tScZqmEcfLoOcU6GAfg": "fixed_line_and_mobile_phone_subscribers_per_100_people",
  "0AkBd6lyS3EmpdC1PcWJUZldDelFyQXdaOEtDUG9HSUE": "internet_users_total_number",
  "0AkBd6lyS3EmpdGwzSGV5OE9FOGhURlhTdEQtMW1TNkE": "internet_users_per_100_people",
  "pyj6tScZqmEfUXdC83YSzfw": "personal_computers_total",
  "pyj6tScZqmEdFW4nUY4gQdA": "personal_computers_per_100_people",
  "0ArfEDsV3bBwCdE4tekJPYkR4WmJqYTRPWjc3OTl4WUE": "improved_sanitation_overall_access_percent",
  "pyj6tScZqmEfLbPu48DrKfQ": "improved_sanitation_urban_access_percent",
  "0ArfEDsV3bBwCdFNPMTE3d3FHTHdYaGFMXzJyNDBGd3c": "improved_sanitation_rural_access_percent",
  "0AkBd6lyS3EmpdDBKd2V5VmxkYlJuUHAtOURzUkZzNEE": "roads_paved_percent_of_total_roads",
  "pyj6tScZqmEd98lRwrU3gIg": "improved_water_source_overall_access_percent",
  "0ArfEDsV3bBwCdDlJNzNjcVc5Sm9memNuVHRzY1FsOXc": "improved_water_source_urban_access_percent",
  "0ArfEDsV3bBwCdFhhVzhXUEh0U0hlQ3M3TTZIQTFySUE": "improved_water_source_rural_access_percent",
  "rsOONWhmGBtzb4j__0MJv7Q": "population_aged_0_4_years_both_sexes_percent",
  "rC5UskPU6PRVlmN7eXoridw": "population_aged_5_9_years_both_sexes_percent",
  "rmViJSkPd4xZneV2Q6gzFwQ": "population_aged_10_14_years_both_sexes_percent",
  "r4VUu4a4AaWqXXoAsFz-z-Q": "population_aged_15_19_years_both_sexes_percent",
  "rTU20DXn0Bi7bTwW5T6J3gg": "population_aged_20_39_years_both_sexes_percent",
  "rLwpdKbW2OykBbvVxhYKrhA": "population_aged_40_59_years_both_sexes_percent",
  "rH6TEe8f_WNq_8x9pWZ3W0A": "population_aged_60plus_years_both_sexes_percent",
  "rovrK0Uj9JPN95P9adob0tw": "population_aged_0_4_years_total_number",
  "r83X3yfjC6ENYWoo41yDehg": "population_aged_5_9_years_total_number",
  "r9ztOSMb5WNHUBLwlgJqPSw": "population_aged_10_14_years_total_number",
  "rFmJvuotJYE30q4nWEvpGJA": "population_aged_15_19_years_total_number",
  "rHrin819tHgZudARnpsN0Mg": "population_aged_20_39_years_total_number",
  "ri9SXMNc7TpebHucmAYepGQ": "population_aged_40_59_years_total_number",
  "rVD6A2uAmeIE0BQNW1KSg3A": "population_aged_60plus_years_total_number",
  "roLpNPQkooNCFzpTWXQ48Dw": "population_aged_0_4_years_female_percent",
  "re3efChATTYAT5bRqoaChXA": "population_aged_5_9_years_female_percent",
  "rJwVmwTFzheqVUzYWwSqXlA": "population_aged_10_14_years_female_percent",
  "rYEHWlJHaLjHtcsSpRRJeig": "population_aged_15_19_years_female_percent",
  "rWpQHQIQdntj6BEK8OIuWYw": "population_aged_20_39_years_female_percent",
  "rElErbmOnSM6om03a1uinKQ": "population_aged_40_59_years_female_percent",
  "rjhBvpeRgCxBq0EnQVN6b0w": "population_aged_60plus_years_female_percent",
  "rIpDsoI9lVTCh_PRqm66Tcw": "population_aged_0_4_years_male_percent",
  "rgyZrNmSfXcPJQxJK7IxnEw": "population_aged_5_9_years_male_percent",
  "rmQZ_H88rIhF3315QBZpcIQ": "population_aged_10_14_years_male_percent",
  "rYfw4UJZSizLRtgDs73d5jA": "population_aged_15_19_years_male_percent",
  "rab1GmqpzJkWd4MF0hieVgA": "population_aged_20_39_years_male_percent",
  "rcQkob1yAm-to1scz51flgw": "population_aged_40_59_years_male_percent",
  "rSkhGgUVN74knEhSAhBSSKA": "population_aged_60plus_years_male_percent",
  "0AkBd6lyS3EmpdFY5Z0QzTzRRbzJ1VXdqdGVyNE0tcFE": "population_growth_annual_percent",
  "tUSeGJOQhafugwUvHvY-wLA": "crude_birth_rate_births_per_1000_population",
  "tHyj-2jRvK3CCNJOc5Vm-HQ": "crude_death_rate_deaths_per_1000_population",
  "pyj6tScZqmEdIphYUHxcdLg": "teen_fertility_rate_births_per_1000_women_ages_15_19",
  "0ArfEDsV3bBwCdERQeFplM2VWczVrMTFfMXVrQkJpVXc": "new_births_total_number_estimated",
  "tAQ31_cAELrHqNc2qa13uHw": "sex_ratio_all_age_groups",
  "tfWSVJPJHn3u7e_7MUaCbnw": "sex_ratio_0_14_years",
  "ta-Da73B_Z7lKOZo8o-Ykvw": "sex_ratio_15_24_years",
  "tF_P_4G0g5bR3lYmQT9Tv4w": "sex_ratio_15_49_years",
  "tQP1KnoWcjjtz3wmq0bnGNA": "sex_ratio_above_50_years",
  "pyj6tScZqmEdwXv1tqzV4Xg": "population_in_urban_agglomerations_m_1_million_percent_of_total",
  "pyj6tScZqmEfH89V6UQhpZA": "urban_population",
  "phAwcNAVuyj0-LE4StzCsEw": "urban_population_percent_of_total",
  "pyj6tScZqmEcRJEN8MyV3PQ": "urban_population_growth_annual_percent",
  "phAwcNAVuyj2biT80zgTsYQ": "children_and_elderly_per_100_adults",
  "tH113JLeGr5DhWgtqN2FxWg": "median_age_years",
  "tVY51lNaCL9m9xPqf29oFAA": "population_density_per_square_km",
  "phAwcNAVuyj0XOoBL_n5tAQ": "population_total",
  "t4eF8H_jq_xyKCUHAX6VT1g": "age_at_1st_marriage_women",
  "tZgPgT_sx3VdAuyDxEzenYA": "murder_per_100000_people",
  "tKOphM3UPRd94T6C6pmsuXw": "corruption_perception_index_cpi",
  "0ArfEDsV3bBwCdGQ2YlhDSWVIdXdpMmhLY2ZZRHdNNnc": "democracy_score_use_as_color",
  "tyadrylIpQ1K_iHP407374Q": "hdi_human_development_index",
  "rzFD5mOuB5mR7-vLoP04LAQ": "agriculture_workers_percent_of_labour_force",
  "rqcJTExcUqNdolB-7flqebQ": "industry_workers_percent_of_labour_force",
  "r4orIwujZpT-z3Exd_9ARpQ": "service_workers_percent_of_labour_force",
  "rraOr_PTB0jcQ60TagEH_WQ": "female_agriculture_workers_percent_of_female_labour_force",
  "rA5BvUGX_Es43DaKb3FidUg": "female_industry_workers_percent_of_female_labour_force",
  "r1B3mjfpBItUmvrhqaRgTWQ": "female_service_workers_percent_of_female_labour_force",
  "rtt_ihBgyYafmDJpThQecoA": "male_agriculture_workers_percent_of_male_labour_force",
  "rmLnlLnnm2kjBbNsBZYxqow": "male_industry_workers_percent_of_male_labour_force",
  "ravxsZdBslM5zF5HwDsX30g": "male_service_workers_percent_of_male_labour_force",
  "rW7k_DdDKlGgJhzYRuNvguw": "family_workers_percent_of_labour_force",
  "rcO6CXqmEjV-wS-29qejCpw": "salaried_workers_percent_of_labour_force",
  "rSrvaPPzWvOyTMb9_dfJDtQ": "self_employed_percent_of_labour_force",
  "rjFKVVoWIVbTgdtJK2xOZqQ": "female_family_workers_percent_of_female_labour_force",
  "rhuyv42EAyApMwy4tDYm3XQ": "female_salaried_workers_percent_of_female_labour_force",
  "rIe2Y4f4Ehde4I4BGPN2VBg": "female_self_employed_percent_of_female_labour_force",
  "rJMlhr2YOvL2EE5NhpbfYAg": "male_family_workers_percent_of_male_labour_force",
  "riwXFQrsUhb96BT2yFC9rFw": "male_salaried_workers_percent_of_male_labour_force",
  "raAOA9AFRPzq5ilAm5Qa65Q": "male_self_employed_percent_of_male_labour_force",
  "rfHz_nx27dDQo4dUoIeVT3A": "aged_15_24_employment_rate_percent",
  "rV0ksExNqh6V_h40f0_nFjg": "aged_15plus_employment_rate_percent",
  "rRS0FbArN8jYsY25X-ZiU9A": "females_aged_15_24_employment_rate_percent",
  "rOXvRa2ZC2oXqBn7gz62IMg": "females_aged_15plus_employment_rate_percent",
  "rCyfwvThkbHVlNVw48vHybg": "males_aged_15_24_employment_rate_percent",
  "rTRt7Z5m9i9D9-vvipvdx2w": "males_aged_15plus_employment_rate_percent",
  "rx1TECfEnGlnomonxCCO-Aw": "aged_15_64_labour_force_participation_rate_percent",
  "rTrB-PY0sfM_gdAQ20XovfA": "aged_25_54_labour_force_participation_rate_percent",
  "ryyQX_1TXlohXWOSUswhIKg": "aged_15plus_labour_force_participation_rate_percent",
  "r1hlZB_n1rpXTij11Kw7lTQ": "aged_65plus_labour_force_participation_rate_percent",
  "rLRScmH2JZmjxsCGW2LB1cA": "females_aged_15_64_labour_force_participation_rate_percent",
  "rgdYcit5cC0wxcLAQf9kJ_Q": "females_aged_25_54_labour_force_participation_rate_percent",
  "rZyHDNFsPBn7cqZCIzDQtIg": "females_aged_15plus_labour_force_participation_rate_percent",
  "rEZ0xOSmU7UuX7iOyL0Xp3g": "females_aged_65plus_labour_force_participation_rate_percent",
  "rB4P-M5oVWuv9CyQ5s1mvOA": "males_aged_15_64_labour_force_participation_rate_percent",
  "rj102tw9R1O_d56Uw_eqBzg": "males_aged_25_54_labour_force_participation_rate_percent",
  "rImcpLhokI0fXWNA-2nSWFw": "males_aged_15plus_labour_force_participation_rate_percent",
  "r_hbrX2qsjHphzAAlwsxhRA": "males_aged_65plus_labour_force_participation_rate_percent",
  "rb0oP4d1BREXa8xMIUf4NZg": "aged_15_24_unemployment_rate_percent",
  "rEMA-cbNPaOtpDyxTcwugnw": "aged_25_54_unemployment_rate_percent",
  "rlD36wGmkwFt3ED558waCTQ": "aged_15plus_unemployment_rate_percent",
  "rNn0y3e0bCpaqTM_8BVZBdg": "aged_55plus_unemployment_rate_percent",
  "rCRqVXC95LeKm_EvLrFNXKw": "long_term_unemployment_rate_percent",
  "rMf--YMvuEKf2LVppT63Xvw": "females_aged_15_24_unemployment_rate_percent",
  "r9StWVETzyX9Lv-r4-2sh6w": "females_aged_25_54_unemployment_rate_percent",
  "rcHjAQAzF2e1yR1R-hywCEw": "females_aged_15plus_unemployment_rate_percent",
  "rz8kJ7CIyckuQAWgHUHe4sA": "females_aged_55plus_unemployment_rate_percent",
  "rT5EpK40a19zVodp1HV1xGw": "female_long_term_unemployment_rate_percent",
  "rGS7_GpdXrYyjhKkAFcLHGA": "males_aged_15_24_unemployment_rate_percent",
  "rjkDFSPV2pw9Pbnz2kpiqPQ": "males_aged_25_54_unemployment_rate_percent",
  "r5_68IYi0bC1bRjGMFYFk8g": "males_aged_15plus_unemployment_rate_percent",
  "rSMPg9BmVRsqE8_k1ARUudA": "males_aged_55plus_unemployment_rate_percent",
  "rezDaYxOOBEFgR4TiPN9qtw": "male_long_term_unemployment_rate_percent",
  "p8SIY47PNEw6pJRPAS1tXPQ": "under_five_mortality_from_cme_per_1000_born",
  "p8SIY47PNEw4TgTkrmIVIXA": "under_five_mortality_from_ihme_per_1000_born",
  "phAwcNAVuyj0npaJxInyYDg": "old_version_of_income_per_person_version_3",
  "0ArfEDsV3bBwCdE5xWmcyYVZJQzJvOFpZUklqX3lkSkE": "old_version_of_income_per_person_version_8",
  "tSUr_yZVbM6a3AGJEq_Z2Pw": "alternative_gdppercapita_ppp_inflation_adjusted_from_pwt",
  "0ArfEDsV3bBwCdGlGLVd4OGVfcVdScVBSS0JLVHpiMlE": "subsistence_incomes_per_person",
  "pyj6tScZqmEd1R9UmohEIaA": "alternative_poverty_percent_below_nationally_defined_poverty",
  "phAwcNAVuyj0atjJIuxy-KQ": "data_quality_income_per_person",
  "p8SIY47PNEw6vGCNzlYJ5eA": "data_quality_life_expectancy",
  "phAwcNAVuyj1ONZlWMf9KQA": "data_quality_population",
  "p8SIY47PNEw4vx1GOsJM7bA": "estimate_or_projection_of_under_five_mortality_rate_from_ihme",
  "thlR4hyNMEnaVyV_uxRzjfQ": "data_quality_children_per_woman",
  "thDxsgSWvLGW4M1qUBby7OQ": "data_method_maternal_mortality",
  "tkdAnkbHJxPAlRX6P1mAh8w": "economic_growth_over_the_past_10_years",
  "rAIffGKCmiCdzTl1C0AR2nw": "how_far_to_the_north",
  "rX3Jfop_ebuY-chuMpCgmRg": "income_per_person_with_projections",
  "tiAiXcrneZrUnnJ9dBU-PAw": "life_expectancy_at_birth_with_projections",
  "tGdhNYGTGtunwzkKJ9aRhsA": "children_per_woman_total_fertility_with_projections",
  "tL0jLxFBF9TbXIN_39b1qcQ": "total_population_with_projections",
  "t6nZVbvqsF-BbyheqUxerZQ": "female_population_with_projections",
  "tZMsbTkrY0k4OkkkXEfp6pA": "male_population_with_projections",
  "rZrHzR__kZfmw6L_xUx7cwg": "population_growth_annual_percent_with_projections",
  "phAwcNAVuyj2t4ep52YXjSg": "year_categorization_1820_2010",
  "phAwcNAVuyj02SA7cGjnRbA": "year_categorization_1950",
  "tK87SOy-oZlfW99UDD7L3hw": "traffic_deaths_per_100000_people",
  "0AgogXXPMARyldGloTm9wekpDcUdMUjhlYWFKaHdnVWc": "burns_deaths_per_100000_people",
  "0AgogXXPMARyldF9ZRnhuWWljUXJHRDRpb0cyaHNLSUE": "drownings_per_100000_people",
  "0AgogXXPMARyldEJZajRXMWZPTE9nUXFBNUdPcG5yT2c": "falls_deaths_per_100000_people",
  "0AgogXXPMARyldGhVLXVsSTB0aDY2eXdLaEt1T0psdXc": "poisonings_deaths_per_100000_people",
  "tu0H0unnUriNvMXwH_qOqzw": "cars_trucks_and_buses_per_1000_persons",
  "t4pYrpNzP-JeR7zSjOyDofQ": "traffic_deaths_women_per_100000_people",
  "tUaaG6Pu9zT_BVIsLvGLQdA": "traffic_deaths_men_per_100000_people",
  "tUD6kmYmB_Bp85SRdEn1Krg": "suicide_women_per_100000_people",
  "tB8ge4cxd8TL7yIV4ALm5NA": "suicide_men_per_100000_people",
  "tyeSLo9Zpmw_e05IR3EoReg": "murdered_women_per_100000_people",
  "tHgVOu-6TYQ6Kig0Ur3Y-kw": "murdered_men_per_100000_people",
  "tLf-4GD5z0QxqsDoUz4vOlg": "car_deaths_per_100000_people",
  "t7-m0musxnWbugcQ9ECH4KA": "motorcycle_deaths_per_100000_people",
  "0AgogXXPMARyldC1rcTI5OU50Mnc1djdkNXpnWUFrZmc": "murdered_children_0_14_per_100000_people",
  "0AgogXXPMARyldDFGSGhtOWt0cS1JbEIzS29EZzlQRXc": "murdered_15_29_per_100000_people",
  "0AgogXXPMARyldG51d0o2T0JQWXFTMUlydWFsSTZMeFE": "murdered_30_44_per_100000_people",
  "0AgogXXPMARyldElCSWl6TkpaZ1JpcXVxa2tmUGhxbFE": "murdered_45_59_per_100000_people",
  "0AgogXXPMARyldGF1WHhpZFVQTWswclJHdjE3MkZ4c3c": "murdered_60plus_per_100000_people",
  "0AgogXXPMARyldGhJdkhTSHNEYTFKQjRrMlBwZXk1TkE": "suicide_age_0_14_per_100000_people",
  "0AgogXXPMARyldHNWNkNVR2Zwalc2U04zTjE5MDZlUkE": "suicide_age_15_29_per_100000_people",
  "0AgogXXPMARyldG9MeHpzRkNHQmZ4MmtxSnd2Y0o2UFE": "suicide_age_30_44_per_100000_people",
  "0AgogXXPMARyldGh2OWd2eVJiUnhScW9tOEtNTFkyQUE": "suicide_age_45_59_per_100000_people",
  "0AgogXXPMARyldEVRNFBZS2wzRmtZOWZEZDVZVG05dHc": "suicide_age_60plus_per_100000_people",
  "0AgogXXPMARyldHB2MkhmVDcyMG1Oa3Y5eEhRQ0VlUWc": "traffic_mortality_children_0_14_per_100000_people",
  "0AgogXXPMARyldEVPSG5qYzBfS0llQ1RnTl9wWXZodkE": "traffic_mortality_15_29_per_100000_people",
  "0AgogXXPMARyldGRqbENsQm5VMWFLdnRXV0w1S0tVSEE": "traffic_mortality_30_44_per_100000_people",
  "0AgogXXPMARyldFJrcW9wdlJITlBDYU9IbnRKdVllVGc": "traffic_mortality_45_59_per_100000_people",
  "0AgogXXPMARyldEw5RXhuckZuU1V2aVAzNDFZaDUxa2c": "traffic_mortality_60plus_per_100000_people",
  "0ArfEDsV3bBwCdHFkZlc5WkhVQmVmeU0tR0RsSUdTU0E": "ifpri_underweight_children",
  "0ArfEDsV3bBwCdE5UaXVKa2hWbUFzcUJJbVdHOE1VcFE": "maternal_mortality_ratio_who",
  "0AgogXXPMARyldElMWEl4RFVTemlMbzJqRU50ZDJ3SHc": "battle_deaths_per_100_000",
  "0Asm_G8nr4TCSdG1nNjk5RzItcUp6N2dSdHUwOENXa0E": "armed_forces_personnel_total",
  "0Asm_G8nr4TCSdFFoVWRjcUdKZDFydGdGNXkzS2ZRbHc": "armed_forces_personnel_percent_of_labor_force",
  "tIgjxaAg3M6kuHRcQTjEgsQ": "murder_total_deaths",
  "tOS388dWYzO1_FANUaiwKuA": "suicide_total_deaths",
  "tW9t1f9EQpvS4U04kWnk-og": "traffic_total_deaths",
  "pyj6tScZqmEd-30XcArAJHA": "debt_servicing_costs_percent_of_exports_and_net_income_from_abroad",
  "pyj6tScZqmEdQY2PxSsxxJQ": "external_debt_total_us_not_inflation_adjusted",
  "pyj6tScZqmEeUceHo3wTOaQ": "present_value_of_debt_percent_of_gni",
  "pyj6tScZqmEddLKU1fnfSSA": "exports_unit_value_index_2000100",
  "pyj6tScZqmEcL6zpB3Sj1Wg": "imports_unit_value_index_2000100",
  "pyj6tScZqmEe5SueBIj6eSw": "net_barter_terms_of_trade_2000_100",
  "0ArtujvvFrPjVdDRQTUhzNmVySlp6djRtLWh4eS1sNHc": "dead_kids_per_woman",
  "0ArtujvvFrPjVdGdFWmhqOEVXcUZha1hJWXAtWHlDSFE": "surviving_kids_per_woman",
  "0ArfEDsV3bBwCdDhjcXdjbURLMFFVcVFPYThhYmtvZXc": "20120905_extreme_poverty_percent_people_below_125_a_day",
  "0ArtujvvFrPjVdERlTHZFQ2ZaUkpySHpQMF82UmdlcUE": "alternative_gdp_per_capita_ppp_wb",
  "0ArtujvvFrPjVdEhhbV90QlJ3RFM0TW83dHd6RXBiX3c": "alternative_gdp_per_capita_ppp_pwt_7_1",
  "0ArfEDsV3bBwCdGhSY2trbEVpYnNsMENqendaVm5ucnc": "number_of_child_deaths",
  "0ArfEDsV3bBwCdFFjMFlMeS02N1NGNjJabl8wamVtdHc": "energy_supply_per_person_toe",
  "0ArfEDsV3bBwCdFdaNHA3R1BzcG9GSlkwMXdnMHpScVE": "energy_from_solid_biofuels_percent",
  "0ArfEDsV3bBwCdEV1RkJqTEItQnJYVXJlZzVuc3Y3Mmc": "residential_energy_use_percent",
  "0ArfEDsV3bBwCdG9jSHA0WklHU0dqUnBCVUpVOXFzQUE": "life_expectancy_at_birth_data_from_ihme",
  "0ArfEDsV3bBwCdFJCTm43NGc0SzdYeHBpZWZGb1V0ckE": "children_per_woman_temporary_update",
  "0ArfEDsV3bBwCdGhmWXFMY0hNcDFiTEt3ZVE4b21wRlE": "alternative_gdp_per_capita_ppp_pwt_8_0",
  "1iHsRp1TARpgh2CbuZGP5fj6jeY3Iz5cBLKTDlukVSHI": "life_expectancy_male",
  "12VhzicKNQCt8I4gmtBmulpfzDfnGjvFPr38g2wDcEGU": "life_expectancy_female",
  "1LklNUuBgFLNcGyG63kqjyze7N8_fDlNLAWZG4YKwJXc": "gdp_total_yearly_growth",
  "1tAnT0EeP67_DoOJCXb3Wd0hqjVMe0KWHPwUH22-BNmQ": "gdp_per_capita_yearly_growth",
  "16USvgw1H-rXCK0ZMmDkyMPd1FXQNpjCj6HCMIn-fmFQ": "yearly_co2_emissions_1000_tonnes",
  "1qOyLQJxO8zBHvldD1tS1s9dYIHuCe8u72JZQ_LjI9qI": "child_mortality_0_5_year_olds_more_years_version_7",
  "1edXplIOkF3Y5OuEWp_aVapd92-OD5aVFAPECZLgP8cA": "number_of_people_in_poverty",
  "1SKMoV61HUNwWfYNCZs2M9zgMWqVrs9YrbJxs5HQbJSQ": "income_per_person_long_series",
  "1S3Kcw96vp5-fZbaM7Lck_06IbJ8DagThGI5KHnzeSps": "newborn_mortality_rate_per_1000",
  "1iTvolhgIMta3MmsoPkGnewJiaybev3MvR9e_7mxZ48o": "newborn_deaths"
};

const rule$3 = {
  test(url) {
    return /#\$majorMode/.test(url);
  },

  use(url) {
    const hashIndex = url.indexOf("#");
    const hashPrefix = url.substr(0, hashIndex);
    const hash = url.substr(hashIndex);

    const gwHash = parseHash(hash);
    const gtHash = createToolsHash(gwHash);

    return hashPrefix + "#" + urlon.stringify(gtHash);
  }
};

function parseHash(hashString) {

  const obj = {};
  hashString = hashString.slice(hashString.lastIndexOf("#") + 1);
  const parts = hashString.split("$");
  parts.forEach(part => {

    if (part == "") return; // ignore empty
    const subparts = part.split(";");
    const firstSubpart = subparts.shift().split("=");
    if (firstSubpart[1]) subparts.unshift(firstSubpart[1]);


    subparts.forEach(subpart => {
      let values = subpart.split("=");
      if (values[1] || firstSubpart[0] == "inds") {
        if (!obj[firstSubpart[0]]) {
          obj[firstSubpart[0]] = {};
        }
        if (firstSubpart[0] == "inds" && !values[1]) {
          values = values[0].split("_");
        }
        obj[firstSubpart[0]][values[0]] = values[1];
      }
      else {
        if (!obj[firstSubpart[0]]) {
          obj[firstSubpart[0]] = [];
        }
        obj[firstSubpart[0]].push(values[0]);
      }
    });

    if (!obj[firstSubpart[0]]) obj[firstSubpart[0]] = {};

  });
  return obj;
}

function createToolsHash(gwHash) {

  const use = {
    "ind": "indicator",
    "grp": "property",
    "const": "constant"
  };
  const which = {
    "ind": indicators,
    "grp": geoproperties,
    "const": "_default"
  };

  const hooks = ["x", "y", "c", "s"];
  const gt_hooks = {};
  // set generic id instead of iid and gid
  hooks.forEach(hook => {
    const inc = "inc_" + hook;
    const map = "map_" + hook;
    gt_hooks[hook] = {};

    if (gwHash[inc] && gwHash[inc].by) {
      gt_hooks[hook].use = use[gwHash[inc].by];
      gt_hooks[hook].which = (gwHash[inc].by == "ind") ? which[gwHash[inc].by][gwHash[inc].iid] : which[gwHash[inc].by][gwHash[inc].gid];
    }

    if (gt_hooks[hook].which == "time") {
      gt_hooks[hook].allow = {
        scales: ["linear", "log", "time"]
      };
      gt_hooks[hook].scaleType = "time";
    }

    if (gwHash[map]) {
      if (hook == "s") {
        gt_hooks[hook].extent = [(gwHash[map].smi / 120), (gwHash[map].sma / 120)];
        gt_hooks[hook].domainMin = null;
        gt_hooks[hook].domainMax = null;
      } else {
        gt_hooks[hook].scaleType = scaletypes[gwHash[map].scale] || gt_hooks[hook].scaleType || gwHash[map].scale; // if time it's already set
        gt_hooks[hook].zoomedMin = gwHash[map].dataMin || null;
        gt_hooks[hook].zoomedMax = gwHash[map].dataMax || null;
        gt_hooks[hook].domainMin = null;
        gt_hooks[hook].domainMax = null;
      }
    }
  });

  const geo_ids = Object.keys(gwHash.inds || {});
  const select = [];
  let trails = false;
  geo_ids.forEach(geo_id => {
    if (countries[geo_id]) {
      const trailStartTime = gwHash.inds[geo_id].substring(3, 7);
      if (/^\d+$/.test(trailStartTime)) {
        select.push({
          country: countries[geo_id],
          trailStartTime
        });
        trails = true;
      }
      else
        select.push({
          country: countries[geo_id]
        });
    }

  });

  let obj;
  if (gwHash.majorMode == "chart") {
    obj = {
      "chart-type": "bubbles",
      state: {
        time: {
          value: gwHash.ts.ti || null,
          delay: 300 - gwHash.ts.sp * 20 || 100
        },
        entities: {
        },
        marker: {
          select,
          opacitySelectDim: (gwHash.is.al / 100),
          axis_x: gt_hooks.x,
          axis_y: gt_hooks.y,
          size: gt_hooks.s,
          color: gt_hooks.c
        }
      },
      ui: {
        chart: {
          trails
        }
      }
    };
  } else {
    obj = {
      "chart-type": "map",
      state: {
        time: {
          value: gwHash.ts.ti || null,
          delay: 500 - gwHash.ts.sp * 40 || 100
        },
        marker: {
          select,
          opacitySelectDim: (gwHash.is.al / 100),
          hook_lat: {
            use: "property",
            which: "latitude"
          },
          hook_lng: {
            use: "property",
            which: "longitude"
          },
          size: gt_hooks.s,
          color: gt_hooks.c
        }
      }
    };
  }
  return obj;
}

const rule$2 = {
  test(url) {
    const hashIndex = url.indexOf("#");
    if (hashIndex == -1) return false;

    const hash = url.substr(hashIndex + 1);
    let state = {};
    try {
      state = urlon.parse(decodeUrlHash(hash) || "$;");
    }
    catch {
      console.warn("Unable to decode and parse the hash:", hash);
      return false;
    }

    return findInState(state, toolsPage_conceptMapping);
  },

  use(url) {
    const hashIndex = url.indexOf("#");
    const hashPrefix = url.substr(0, hashIndex);
    const hash = url.substr(hashIndex + 1);

    const state = urlon.parse(decodeUrlHash(hash) || "$;");
    const newState = replaceInState(state, toolsPage_conceptMapping);

    return hashPrefix + "#" + encodeUrlHash(urlon.stringify(newState));
  }
};

function findInState(state, conceptMapping) {
  return Object.entries(state).some(([key, value]) => {
    if (key === "concept" && conceptMapping[state.concept]) {
      return true;
    }
    if (typeof value == "object" && value != null) {
      return findInState(value, conceptMapping);
    }
    return false;
  });
}

function replaceInState(state, conceptMapping) {
  const newState = {};
  Object.entries(state).forEach(([key, value]) => {
    if (key === "concept" && conceptMapping[value]) {
      Object.assign(newState, conceptMapping[value]);
      console.log("Replaced concept:" + value + " by " + JSON.stringify(conceptMapping[value]));
    } else if (typeof value == "object" && value != null && !Array.isArray(value)) {
      newState[key] = replaceInState(value, conceptMapping);
    } else {
      newState[key] = value;
    }
  });
  return newState;
}

const rule$1 = {
  test(url) {
    const hashIndex = url.indexOf("#");
    if (hashIndex == -1) return false;

    const hash = url.substr(hashIndex + 1);

    return toolsPage_entitysetMapping.chartTypes.some(m =>
      hash.includes("chart-type=" + m)
    ) && Object.keys(toolsPage_entitysetMapping.entitySets).some(m =>
      hash.includes("$" + m + "$/$in") || hash.includes("$" + m + "=")
    );
  },

  use(url) {
    const hashIndex = url.indexOf("#");
    const hashPrefix = url.substr(0, hashIndex);
    let hash = url.substr(hashIndex);
    const entitySets = toolsPage_entitysetMapping.entitySets;

    Object.keys(entitySets).forEach(m => {
      hash = hash.split("$" + m + "$/$in").join("$" + entitySets[m] + "$/$in");
      hash = hash.split("$" + m + "=").join("$" + entitySets[m] + "=");
    });

    return hashPrefix + hash;
  }
};

/* 
  the transition from v1 to v2 contains two breaking changes
    - CHANGE 1
    "geo" is now preferred instead of "country" in filters. some URLS break because they set "country" in enc filters and spaces
    here space@=country&=time should be space@=geo&=time
    before
    https://www.gapminder.org/tools/#$ui$buttons$sidebarCollapse:true;&chart$opacityRegular:1&opacitySelectDim:0.27&showForecast:true;&projector:true;&model$markers$bubble$encoding$size$scale$extent@:0.08&:0.87;;;&y$data$concept=hapiscore_whr&source=fasttrack&space@=country&=time;;&scale$domain:null&zoomed:null&type:null;;&color$data$concept=flag_svg&source=country_flags;&scale$type:null&domain:null&zoomed:null;;&frame$speed:841&value=2007;;;;;&chart-type=bubbles&url=v1
    after
    https://www.gapminder.org/tools/#$ui$buttons$sidebarCollapse:true;&chart$opacityRegular:1&opacitySelectDim:0.27&showForecast:true;&projector:true;&model$markers$bubble$encoding$size$scale$extent@:0.08&:0.87;;;&y$data$concept=hapiscore_whr&source=fasttrack&space@=geo&=time;;&scale$domain:null&zoomed:null&type:null;;&color$data$concept=flag_svg&source=country_flags;&scale$type:null&domain:null&zoomed:null;;&frame$speed:841&value=2007;;;;;&chart-type=bubbles&url=v1

    - CHANGE 2
    the new markercontrols dialog expects a layer of "or" in marker filter
    before
    https://www.gapminder.org/tools/#$ui$chart$endBeforeForecast=2023;;&model$markers$pyramid$data$filter$dimensions$geo$geo$/$in@=americas&=europe&=africa&=asia;;;;;;&encoding$aggregate$grouping$age$grouping:5;;;&frame$value=1950&playbackSteps:5;;;;;&chart-type=popbyage&url=v1
    after
    https://www.gapminder.org/tools/#$ui$chart$endBeforeForecast=2023;;&model$markers$pyramid$data$filter$dimensions$geo$/$or@$geo$/$in@=americas&=europe&=africa&=asia;;;;;;;;&encoding$aggregate$grouping$age$grouping:5;;;&frame$value=1950&playbackSteps:5;;;;;&chart-type=popbyage&url=v1

*/ 

const rule = {
    test(url) {
      return url.includes("#") && url.includes("url=v1");
    },
  
    use(url) {
      
      // CHANGE 1
      url = url
        .replaceAll("$country$/in", "$geo$/in")
        .replaceAll("$country=", "$geo=");

        
      // Replace "country" with "geo" and return the modified string
      // this regex tests if url has a substring in the form of "space@ ... =country ... ;"
      var spaceRegex = /(space@[^;]*)(=country)([^;]*;)/;
      while (spaceRegex.test(url))
        url = url.replace(spaceRegex, "$1=geo$3");
        
    
      // CHANGE 2
      // this regex tests if url has a substring in the form of "$filter$dimensions$geo$geo$/$in@ ... ;;;;;;"
      const filterRegex = /(\$filter\$dimensions\$geo\$geo\$\/\$in@)([^;]*)(;;;;;;)/;
      while (filterRegex.test(url))
        url = url.replace(filterRegex, "$filter$dimensions$geo$/$or@$geo$/$in@$2;;;;;;;;");

      return url;
    }
  };

const rules = [];

//addRule(worldReferrerRule);
addRule(rule$3);
addRule(rule$5);
addRule(rule$4);
addRule(rule$2);
addRule(rule$1);
addRule(rule);

function upgradeUrl(url) {
  return rules.reduce((resultUrl, { test, use }) => test(resultUrl) ? use(resultUrl) : resultUrl, url);
}

function addRule(rule) {
  rules.push(rule);
}

const ChartSwitcher = function(placeHolder, translator, dispatch, { tools, appState, onClick }) {
  const templateHtml = `
    <div class="chart-switcher">
      <a class="chart-switcher-button"></a>
    </div>
    <div class="chart-switcher-options" hidden>
        <div><a rel="noopener"></a></div>
    </div>
  `;
  //require("./chart-switcher.html");

  const template = d3.create("div");
  template.html(templateHtml);

  //TODO why is it not passed via arguments?
  tools = toolsPage_toolset;

  const itemTemplate = template.select(".chart-switcher-options div");
  const onlyChartTools = tools.filter(({ tool }) => tool);
  for (const tool of onlyChartTools) {
    itemTemplate.clone(true)
      .datum(tool)
      .classed("selected", tool.id === appState.tool)
      .raise()
      .call(fillToolItem, this);
  }
  itemTemplate.remove();

  this.areToolsOpen = false;
  const switcher = template.select(".chart-switcher-button");
  switcher.on("click", () => switchTools.call(this));

  for (const elem of Array.from(template.node().children)) {
    placeHolder.append(() => elem);
  }

  translate();
  dispatch.on("translate.chartSwitcher", () => {
    translate();
  });

  dispatch.on("toolChanged.chartSwitcher", d => {
    const tool = tools.filter(({ id }) => id === d)[0];
    toolChanged(tool);
  });

  d3.select(window).on("resize.chartSwitcher", () => switchTools.call(this, false));
  d3.select(window).on("click.chartSwitcher", event => {
    if (this.areToolsOpen && event.target && (event.target !== switcher.node())) {
      switchTools.call(this, false);
    }
  });

  function translate() {
    const selectedToolConfig = tools.filter(({ id }) => id === appState.tool)[0];
    placeHolder.select(".chart-switcher-button")
      .text(translator(selectedToolConfig.title || selectedToolConfig.id));
    placeHolder.selectAll(".chart-switcher-options div")
      .select("a").text(d => translator(d.title || d.id));
  }

  function toolChanged(tool) {
    placeHolder.select(".chart-switcher-button")
      .text(translator(tool.title || tool.id));
    placeHolder.selectAll(".chart-switcher-options div")
      .classed("selected", _d => _d.id === tool.id);
  }

  function switchTools(force) {
    this.areToolsOpen = force || force === false ? force : !this.areToolsOpen;
    placeHolder.select(".chart-switcher-options").attr("hidden", this.areToolsOpen ? null : true);
  }

  function getLink(tool) {
    return `${window.location.pathname}#$chart-type=${tool}`;
  }

  function fillToolItem(item, _this) {
    const tool = item.datum();
    const a = item.select("a");
    if (tool.url) {
      a.attr("href", tool.url);
    } else {
      a.attr("href", getLink(tool.id))
        .on("click", (event, d) => {
          switchTools.call(_this);
          onClick(d);
        });
    }
  }

};

const LanguageSwitcher = function(placeHolder, translator, dispatch, { languages, selectedLanguage, onClick }) {
  const templateHtml = `
    <div class="lang-current"></div>

    <ul>
      <li></li>
    </ul>
  `;
  //require("./language-switcher.html");

  const template = d3.create("div");
  template.html(templateHtml);

  const itemTemplate = template.select("ul li");
  for (const language of languages) {
    itemTemplate.clone(true)
      .datum(language)
      .raise()
      .on("click", (event, d) => {
        switcher.text(d.text);
        switchLanguage.call(this);
        onClick(d);
      })
      .style("font-family", d => d.fontFamily ? d.fontFamily : null)
      .text(d => d.text);
  }
  itemTemplate.remove();

  dispatch.on("languageChanged.languageSwitcher", d => {
    const selectedLanguageConfig = languages.filter(({ key }) => key === d)[0];
    placeHolder.select(".lang-current")
      .text(selectedLanguageConfig.text);
  });

  this.isLanguageSwitcherVisible = false;
  const selectedLanguageConfig = languages.filter(({ key }) => key === selectedLanguage)[0];
  const switcher = template.select(".lang-current");
  switcher.on("click", () => switchLanguage.call(this));
  switcher.text(selectedLanguageConfig.text);

  for (const elem of Array.from(template.node().children)) {
    placeHolder.append(() => elem);
  }

  d3.select(window).on("resize.languageSwitcher", () => switchLanguage.call(this, false));
  d3.select(window).on("click.languageSwitcher", event => {
    if (this.isLanguageSwitcherVisible && event.target && (event.target !== switcher.node())) {
      switchLanguage.call(this, false);
    }
  });

  function switchLanguage(force) {
    this.isLanguageSwitcherVisible = force || force === false ? force : !this.isLanguageSwitcherVisible;
    placeHolder.select("ul").attr("class", this.isLanguageSwitcherVisible ? "selected" : null);
  }

};

function saveSvg(view, name) {

  const ContainerElements = ["svg", "g", "defs", "marker", "text"];
  const RelevantStyles = {
    "rect": ["fill", "stroke", "stroke-width", "opacity"],
    "path": ["fill", "stroke", "stroke-width", "stroke-opacity", "stroke-dasharray", "opacity"],
    "marker": ["fill", "stroke", "stroke-width", "opacity"],
    "circle": ["fill", "stroke", "stroke-width", "opacity"],
    "line": ["stroke", "stroke-width", "stroke-dasharray", "stroke-opacity", "opacity"],
    "text": ["fill", "font-size", "text-anchor", "visibility", "font-family", "opacity", "dominant-baseline", "font-variant", "letter-spacing"],
    "polygon": ["stroke", "fill", "opacity"] };

  function read_Element(ParentNode, OrigData) {
    const Children = ParentNode.childNodes;
    const OrigChildDat = OrigData.childNodes;

    for (let cd = 0; cd < Children.length; cd++) {
      const Child = Children[cd];

      const TagName = Child.tagName;
      if (TagName in RelevantStyles) {
        const StyleDef = window.getComputedStyle(OrigChildDat[cd]);

        let StyleString = "";
        for (let st = 0; st < RelevantStyles[TagName].length; st++) {
          StyleString += RelevantStyles[TagName][st] + ":" + StyleDef.getPropertyValue(RelevantStyles[TagName][st]) + "; ";
        }

        Child.setAttribute("style", StyleString);
      }

      if (ContainerElements.indexOf(TagName) != -1)
        read_Element(Child, OrigChildDat[cd]);
    }

  }

  function removeHiddenNodes(ParentNode) {
    const Children = ParentNode.childNodes;
    for (let cd = 0; cd < Children.length; cd++) {
      const Child = Children[cd];

      if (Child.classList && (Child.style.opacity === "0" || Child.classList.contains("vzb-noexport") || Child.classList.contains("vzb-transparent") || Child.classList.contains("vzb-invisible") || Child.classList.contains("vzb-hidden"))) {
        Child.remove();
        cd--;
      } else
      if (ContainerElements.indexOf(Child.tagName) != -1) removeHiddenNodes(Child);
    }
  }

  function export_StyledSVG(SVGElem, name) {
    const oDOM = SVGElem.cloneNode(true);
    read_Element(oDOM, SVGElem);
    removeHiddenNodes(oDOM);

    oDOM.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    const data = new XMLSerializer().serializeToString(oDOM);
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const svg = new Blob([preface, data], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svg);

    const link = document.createElement("a");
    link.setAttribute("target", "_blank");
    const Text = document.createTextNode("Export");
    link.appendChild(Text);
    link.download = name;
    link.href = url;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  export_StyledSVG(view.node(), name);
  return Promise.resolve();

}

const SocialButtons = function(placeHolder, translator, appState, dispatch, { bitlyService, locationService }) {
  const templateHtml = `
    <li>
      <div class="share-text-box" data-text="share"></div>
    </li>
    <li>
      <a class="mail button">
        <i class="fa fa-envelope-o"></i>
      </a>
    </li>
    <li>
      <a class="twitter button">
        <i class="fa fa-twitter"></i>
      </a>
    </li>
    <li>
      <a class="facebook button">
        <i class="fa fa-facebook"></i>
      </a>
    </li>
    <li>
      <a class="link button">
        <i class="fa fa-link"></i>
      </a>
    </li>
    <li>
      <a class="download button">
        <i class="fa fa-download"></i>
      </a>
    </li>
    <li>
      <a class="button code">
        <i class="fa fa-code"></i>
      </a>
    </li>
    <a class="mailLink" href="#"></a>
  `;
  //require("./social-buttons.html");

  const template = d3.create("div");
  template.html(templateHtml);

  template.select(".share-text-box")
    .on("click", setMainLink);
  template.select(".mail.button")
    .on("click", mail);
  template.select(".twitter.button")
    .on("click", twitter);
  template.select(".facebook.button")
    .on("click", facebook);
  template.select(".link.button")
    .on("click", shareLink);
  template.select(".download.button")
    .on("click", download);
  template.select(".code.button")
    .on("click", getEmbeddedUrl);

  for (const elem of Array.from(template.node().children)) {
    placeHolder.append(() => elem);
  }

  translate();
  dispatch.on("translate.socialButtons", () => {
    translate();
  });

  function translate() {
    placeHolder.select(".share-text-box")
      .each(translateNode(translator));
  }

  function twitter() {
    openWindow(`https://twitter.com/intent/tweet?url=#{url}`);
  }

  function facebook() {
    openWindow(`http://www.addtoany.com/add_to/facebook?linkurl=#{url}`);
  }

  function mail() {
    setMainLink();
    placeHolder.select(".mailLink").node().click();
  }

  function setMainLink() {
    const mailUrl = encodeURIComponent(window.location.href);
    placeHolder.select(".mailLink").attr("href", `mailto:?subject=Gapminder&body=${mailUrl}`);
  }

  function openWindow(urlTemplate) {
    const half = 2;
    const windowWidth = 490;
    const left = (window.innerWidth - windowWidth) / half;
    const newWindow = window.open("", "_blank", `width=${windowWidth}, height=368, top=100, left=${left}`);

    bitlyService.shortenUrl(undefined, url => {
      newWindow.location.href = urlTemplate.replace(/#{url}/g, url);
      newWindow.focus();
    });
  }

  function shareLink() {
    bitlyService.shortenUrl(undefined, shortened => prompt("Copy the following link: ", shortened));
  }

  function download() {
    d3.selectAll(".vzb-export").each(function(_, i) {
      const filename = d3.timeFormat("%Y-%m-%d at %H.%M.%S")(new Date())
        + " - " + toolsPage_toolset.find(f => f.id == appState.tool).title
        + " - " + (i + 1);

      saveSvg(d3.select(this), filename + ".svg");
    });
  }

  function getEmbeddedUrl() {
    const message = "Copy this fragment and paste it in your website or blog:\n(more instructions on vizabi.org/tutorials)";

    prompt(message, wrapInIFrame(locationService.getUrlReadyForEmbedding()));
  }

  function wrapInIFrame(content) {
    return `<iframe src="${content}" style="width: 100%; height: 500px; margin: 0 0 0 0; border: 1px solid grey;" allowfullscreen></iframe>`;
  }

};

const Menu = function(placeHolder, translator, dispatch, { menuItems }) {
  const _this = this;
  const templateHtml = `
    <li class="nav-expandable menu-items">
      <div class="nav-expandable-item">

        <a class="menu-item nav-toggle-expanded"></a>

        <div class="nav-expanded">
          <div class="nav-expanded-columns nav-expanded-columns-2 nav-expanded-columns-icons">
            <div class="nav-expanded-columns-inner">
              <ul>
                <li class="expanded-column-item">
                  <a class="menu-item" href="">
                    <div class="column-item-icon">
                      <img>
                    </div>
                    <div class="column-item-info">
                      <div class="column-item-heading"></div>
                      <div class="column-item-description"></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>

    <li class="nav-expandable">
      <div class="nav-expandable-item">

        <a class="menu-item how-to-button how-to-use-video" data-text="how_to_use"><span>►</span>_</a>

        <div class="nav-expanded">
          <div class="how-to-outer">
            <div class="how-to-content">
              <span class="how-to-close button-close">&times;</span>
              <div class="howToContent"></div>
                <p class="nav-faq-help-links">
                  <a target="_blank" href="//static.gapminder.org/GapminderMedia/wp-uploads/Gapminder-Tools-Guide.pdf" data-text="pdf_guide"></a>
                  <a target="_blank" href="//www.gapminder.org/tools-offline/" data-text="can_i_download_Gapminder_Tools"></a>
                  <a target="_blank" href="//vizabi.org/tutorials/2017/04/03/show-your-data/" data-text="can_i_show_my_own_data"></a>
                  <a target="_blank" href="//www.gapminder.org/faq_frequently_asked_questions/" data-text="more_help_and_faq"></a>
                </p>
            </div>
          </div>
        </div>
      </div>

    </li>

    <li class="nav-expandable">
      <div class="nav-expandable-item">

        <a class="menu-item data-editor-button how-to-use-video" style="padding: 13px 2px 12px 2px" data-text=""></a>

        <div class="nav-expanded">
          <div class="how-to-outer">
            <div class="data-editor">
              <span class="data-editor-close button-close">&times;</span>
              <div class="data-editor-instructions">
                Congrats! You've discovered the hidden button for editing data sources
                <br/>
                <a target="_blank" href="https://docs.google.com/document/d/1Ibcuzp5eaQQus515OROzkQxpcvFf3wDU03mFQmrtmV4/preview">How to show data from a generic google spreadsheet ⧉</a>
              </div>
              <div class="table"></div>
              <p class="data-editor-buttons nav-faq-help-links">
                <a class="add-row">+</a>
                <a class="de-reload">Discard changes</a>
                <a class="de-reset">Reset everything and reload</a>
                <a class="de-apply">Apply and reload</a>
              </p>
            </div>    
          </div>
        </div>
      </div>

    </li>
  `;
  //require("./menu.html");
  const path = "./assets";

  const template = d3.create("div");
  template.html(templateHtml);

  const itemTemplate = template.select(".menu-items .nav-expandable-item");
  for (const item of menuItems) {
    itemTemplate.clone(true)
      .datum(item)
      .raise()
      .call(fillMenuItem);
  }
  itemTemplate.remove();

  this.selectedMenuItem = null;

  this.howToContent = template.select(".howToContent");
  this.howToMobileContent = template.select(".howToMobileContent");
  template.select(".how-to-button")
    .datum({ menu_label: "how_to_use" })
    .on("click", (event, d) => {
      selectMenuItem(d);
      switchHowTo.call(this);
    });
  template.select(".how-to-close").on("click", () => {
    this.selectedMenuItem = null;
    selectMenuItem({});
    switchHowTo.call(this);
  });

  template.select(".data-editor-button")
    .datum({ menu_label: "data_editor" })
    .on("click", (evemt, d) => {
      selectMenuItem(d);
      switchHowTo.call(this);
    });
  template.select(".data-editor-close").on("click", () => {
    this.selectedMenuItem = null;
    selectMenuItem({});
    switchHowTo.call(this);
  });

  dispatch.on("menuClose", () => {
    this.selectedMenuItem = null;
    selectMenuItem({});
    switchHowTo.call(this);
  });

  for (const elem of Array.from(template.node().children)) {
    placeHolder.append(() => elem);
  }

  translate();
  dispatch.on("translate.menu", () => {
    translate();
  });

  d3.select(window).on("resize.menu", () => {
    //skip menu resize in fullscreen
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement || document.mozFullScreenElement) return;
    if (this.selectedMenuItem === "data_editor") return;

    this.selectedMenuItem = null;
    selectMenuItem({});
    switchHowTo.call(this);
  });

  function translate() {
    placeHolder
      .selectAll(".menu-items .nav-expandable-item")
      .call(selection => selection
        .select("a.menu-item")
        .text(d => translator(d.menu_label)))
      .selectAll(".expanded-column-item")
      .call(selection => {
        selection.select(".column-item-heading").text(d => translator(d.menu_label));
        selection.select(".column-item-description").text(d => translator(d.caption));
      });

    placeHolder.select(".menu-item.how-to-use-video")
      .each(translateNode(translator));
    placeHolder.select(".menu-item.data-editor-button")
      .each(translateNode(translator));
    placeHolder.selectAll("p.nav-faq-help-links a")
      .each(translateNode(translator));
  }

  function switchHowTo() {
    const howToContentEmpty = this.howToContent.node().children.length <= 0;

    if (howToContentEmpty) {
      const content = document.createElement("div");
      const contentMobile = document.createElement("div");
      const vimeoContent = `<iframe src="https://player.vimeo.com/video/231885967"
                                    class="how-to-frame"
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                    allowfullscreen></iframe>`;

      content.innerHTML = vimeoContent;
      contentMobile.innerHTML = vimeoContent;
      this.howToContent.node().appendChild(content);
    }

  }

  function selectMenuItem(d) {
    _this.selectedMenuItem = d.menu_label === _this.selectedMenuItem ? null : d.menu_label;
    if (_this.selectedMenuItem) dispatch.call("menuOpen", null, d);
    placeHolder.selectAll(".nav-expandable-item a.menu-item")
      .classed("active", d => _this.selectedMenuItem === d?.menu_label);
  }

  function fillMenuItem(item) {
    const menuItem = item.datum();
    const a = item.select("a.menu-item");
    a.on("click", (event, d) => selectMenuItem(d));
    const itemTemplate = item.select(".expanded-column-item");
    for (const item of menuItem.children) {
      itemTemplate.clone(true)
        .datum(item)
        .raise()
        .call(fillColumnItem);
    }
    itemTemplate.remove();
  }

  function fillColumnItem(item) {
    const columnItem = item.datum();
    const a = item.select("a.menu-item");
    a.attr("href", columnItem.url);
    const img = a.select(".column-item-icon img");
    if (columnItem.icon_url) {
      img.attr("src", path + columnItem.icon_url);
    } else {
      img.remove();
    }
  }
};

const MobileMenu = function(placeHolder, translator, dispatch, { menu }) {

  this.isMobileMenuOpen = false;
  placeHolder.on("click", () => switchMobileMenu.call(this));

  d3.select(window).on("resize.mobileMenu", () => switchMobileMenu.call(this, false));

  function switchMobileMenu(force) {
    this.isMobileMenuOpen = force || force === false ? force : !this.isMobileMenuOpen;
    menu.classed("open", this.isMobileMenuOpen);
    placeHolder.classed("open", this.isMobileMenuOpen);
  }

};

const Message = function() {

  let placeHolder;

  function init(placeHolderArg, translator, dispatch) {
    placeHolder = placeHolderArg;
    const templateHtml = `
      <div id="message">
        <span id="message-text"></span>
        <a id="message-close">
          <svg style="height: 20px;" class="vzb-icon vzb-icon-pin" viewBox="-150 -250 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1149 414q0 26 -19 45l-181 181l181 181q19 19 19 45q0 27 -19 46l-90 90q-19 19 -46 19q-26 0 -45 -19l-181 -181l-181 181q-19 19 -45 19q-27 0 -46 -19l-90 -90q-19 -19 -19 -46q0 -26 19 -45l181 -181l-181 -181q-19 -19 -19 -45q0 -27 19 -46l90 -90q19 -19 46 -19 q26 0 45 19l181 181l181 -181q19 -19 45 -19q27 0 46 19l90 90q19 19 19 46z"/></svg>
        </a>
      </div>
    `;
    //require("./message.html");

    const template = d3.create("div");
    template.html(templateHtml);
    template.select("#message-close")
      .on("click", closeMessage);

    for (const elem of Array.from(template.node().children)) {
      placeHolder.append(() => elem);
    }
    dispatch.on("translate.message", () => {
    });
  }

  function closeMessage() {
    placeHolder.style("display", "none");
  }

  function showMessage(string) {
    placeHolder.style("display", "block");
    placeHolder.select("#message-text").html(string);
  }

  return {
    closeMessage,
    showMessage,
    init
  };

};

var Message$1 = Message();

const SeeAlso = function(placeHolder, translator, dispatch, { tools, selectedTool, onClick }) {
  const templateHtml = `
    <div class="see-also-block">
      <h2 class="heading-2 see-also-heading" data-text="other_tools"></h2>

      <div class="other-tools-container">
        <div class="other-tools-item">
          <a rel="noopener">
            <img class="image"/>
            <span class="title"></span>
          </a>
        </div>
      </div>
    </div>
  `;
  //require("./see-also.html");

  //TODO why is it not passed via arguments?
  tools = toolsPage_toolset;

  const template = d3.create("div");
  template.html(templateHtml);

  const itemTemplate = template.select(".other-tools-item");
  for (const tool of tools) {
    itemTemplate.clone(true)
      .datum(tool)
      .attr("hidden", (tool.id === selectedTool || tool.hideThumbnail) ? true : null)
      .raise()
      .call(fillToolItem);
  }
  itemTemplate.remove();

  for (const elem of Array.from(template.node().children)) {
    placeHolder.append(() => elem);
  }

  translate();
  dispatch.on("translate.seeAlso", () => {
    translate();
  });

  dispatch.on("toolChanged.seeAlso", d => {
    const tool = tools.filter(({ id }) => id === d)[0];
    toolChanged(tool);
  });

  function translate() {
    placeHolder.select(".see-also-heading").each(translateNode(translator));
    placeHolder.selectAll(".other-tools-item").select(".title")
      .text(d => translator(d.title || d.id));
  }

  function toolChanged(tool) {
    placeHolder.selectAll(".other-tools-item")
      .attr("hidden", _d => (_d.id === tool.id || _d.hideThumbnail) ? true : null);
  }

  function getLink(tool) {
    return `${window.location.pathname}#$chart-type=${tool}`;
  }

  function fillToolItem(item) {
    const tool = item.datum();
    const a = item.select("a");
    if (tool.url) {
      a.attr("href", tool.url);
    } else {
      a.attr("href", getLink(tool.id))
        .on("click", (event, d) => {
          onClick(d);
        });
    }
    a.select(".image").attr("src", "." + tool.image);
  }

};

function Table() {
  const dispatch = d3.dispatch("edit", "remove", "prop_change");

  function exports(_selection) {
    _selection.each(function({ rowdata, propTypes }) {

      /*
        example
        rowdata = {id: "sg", reader: "ddfbw", service: "https://bw.gapminder.org", dataset: "sg-master"}
      */

      const view = d3.select(this);
      const table = view.select("table").node() ? view.select("table") : view.append("table");

      let subtables = table.selectAll("tr.row").data(rowdata, d => d.id);
      subtables.exit().remove();
      subtables = subtables.enter()
        .append("tr")
        .attr("class", "row")
        .each(function() {
          d3.select(this)
            .append("th")
            .attr("class", "edit")
            .append("a")
            .text("×");
        })
        .merge(subtables);

      let rows = subtables.selectAll("tr.row-data").data(ds => Object.keys(ds).map(key => ({ ds, key, value: ds[key] })), d => d.key);
      rows.exit().remove();
      rows = rows.enter().append("tr")
        .attr("class", "row-data")
        .each(function(d) {
          d3.select(this)
            .append("th")
            .attr("class", "header .no-select")
            .text(d.key);
        })
        .merge(rows);

      rows.each(function(d) {
        const row = d3.select(this);
        row.select(".cell").remove();

        if (propTypes[d.key]) {

          if (propTypes[d.key].type === "checkbox") {
            row.append("td")
              .attr("class", "cell checkbox")
              .append("div")
              .attr("data-checked", d.value)
              .on("click", function() {
                d.ds[d.key] = d.value = !d.value;
                d3.select(this).attr("data-checked", d.value);
                dispatch.call("prop_change");
              });
          }

          if (propTypes[d.key].type === "dropdown") {
            const dropDownEl = row.append("td")
              .attr("class", "cell dropdown");
            dropDownEl.append("div")
              .text(d.value)
              .on("click", () => {
                const listEl = dropDownEl.select("ul");
                listEl.style("display", listEl.style("display") === "none" ? null : "none");
              });
            dropDownEl.append("ul")
              .style("display", "none")
              .selectAll("li").data(propTypes[d.key].options)
              .enter()
              .append("li")
              .style("display", option => option === d.value ? "none" : null)
              .text(option => option)
              .on("click", (event, option) => {
                event.stopPropagation();
                dropDownEl.select("div")
                  .text(option);
                d.ds[d.key] = d.value = option;
                dropDownEl.selectAll("li")
                  .style("display", option => option === d.value ? "none" : null);
                dropDownEl.select("ul")
                  .style("display", "none");
                dispatch.call("prop_change");
              });
          }

        } else {

          row.append("td")
            .attr("class", "cell")
            .attr("contenteditable", true)
            .text(d.value)
            .on("keyup", function() {
              d.ds[d.key] = d.value = d3.select(this).text();
            })
            .on("paste", function(event) {
              event.preventDefault();
              event.stopPropagation();

              const selection = window.getSelection();
              if (!selection.rangeCount) return false;

              const paste = (event.clipboardData || window.clipboardData).getData("text").trim();
              const range = selection.getRangeAt(0);
              range.deleteContents();
              range.insertNode(document.createTextNode(paste));
              selection.collapseToEnd();
              selection.focusNode.normalize();

              d.ds[d.key] = d.value = d3.select(this).text();
            });

        }
      });

      table
        .selectAll(".edit")
        .on("click", (event, d) => {
          const i = rowdata.indexOf(d);
          dispatch.call("remove", null, d, i);
        });
    });
  }

  d3.rebind(exports, dispatch, "on");

  return exports;
}

const readersSchema = {
  "ddfcsv": ["path"],
  "csv": ["path", "timeInColumns", "hasNameColumn", "nameColumnIndex"],
  "google_csv": ["path", "sheet", "timeInColumns", "hasNameColumn", "nameColumnIndex"],
  "ddfbw": ["service", "name", "version", "translateContributionLink"]
};

const defaultValues = {
  "reader": "ddfbw",
  "nameColumnIndex": 1,
  "service": "https://small-waffle.gapminder.org"
};
const propDependency = {
  "nameColumnIndex": {
    "hasNameColumn": true
  }
};
const propTypes = {
  "reader": {
    "type": "dropdown",
    "options": Object.keys(readersSchema)
  },
  "timeInColumns": {
    "type": "checkbox"
  },
  "hasNameColumn": {
    "type": "checkbox"
  }
};

const DataEditor = function(placeHolder, translator, dispatch, { languages, selectedLanguage, onClick }) {
  let data;

  dispatch.on("menuOpen.dataEditor", d => {
    if (d.menu_label !== "data_editor") return;
    makeData();
    updateTable();
  });

  function makeData() {
    const datasources = viz.model.dataSources;
    data = Object.keys(datasources).map(id => {
      const reader = datasources[id].config.modelType;
      return {
        id,
        reader,
        ...readersSchema[reader].reduce((obj, prop) => {
          obj[prop] = datasources[id].config[prop] || "";
          return obj;
        }, {})
      };
    });
  }

  const table = Table()
    .on("remove", (d, i) => {
      data.splice(i, 1);
      updateTable();
    })
    .on("prop_change", () => {
      updateDataWhenReaderChanges();
      updateTable();
    });

  function updateTable(rowdata = data) {
    placeHolder.select(".table")
      .datum({ rowdata, propTypes })
      .call(table);
    showhideTableRows();
  }

  function updateDataWhenReaderChanges() {
    data = data.map(ds => {
      //delete properties that are not applicable for the selected reader
      Object.keys(ds).forEach(f => {
        if (f !== "id" && f !== "reader" && !readersSchema[ds.reader].includes(f)) delete ds[f];
      });
      //add properties that are missing for the selected reader
      readersSchema[ds.reader].forEach(f => {
        if (!ds[f]) ds[f] = defaultValues[f] || "";
      });
      return ds;
    });
  }

  function showhideTableRows() {
    placeHolder.select(".table")
      .selectAll(".row")
      .each(function(props) {
        const allowedProps = getCurrentAllowProp(props);
        d3.select(this)
          .selectAll(".row-data")
          .style("display", d => allowedProps.includes(d.key) ? null : "none");
      });
  }

  function getCurrentAllowProp(ds) {
    return Object.keys(ds).filter(key =>
      !propDependency[key] ? true :
        Object.keys(propDependency[key]).every(
          depProp => propDependency[key][depProp] === ds[depProp]
        )
    );
  }

  placeHolder.select(".add-row")
    .on("click", () => {
      data.push({
        id: "data" + (data.length + 1),
        reader: defaultValues.reader,
        ...readersSchema[defaultValues.reader].reduce((obj, prop) => {
          obj[prop] = defaultValues[prop] || "";
          return obj;
        }, {})
      });
      updateTable();
    });

  placeHolder.select(".de-reload")
    .on("click", () => {
      makeData();
      updateTable();
    });

  placeHolder.select(".de-reset")
    .on("click", () => {
      URLI.model = {};
      setTool(null, true);
      dispatch.call("menuClose");
    });

  placeHolder.select(".de-apply")
    .on("click", () => {
      const dataModel = data.reduce((result, ds) => {
        const dataObj = {};
        const allowedProps = getCurrentAllowProp(ds).filter(f => f !== "id" && f !== "reader");
        allowedProps.forEach(prop => {
          dataObj[prop] = ds[prop];
        });
        dataObj["modelType"] = ds.reader;
        dataObj["locale"] = viz.ui.locale.id;
        result[ds.id] = dataObj;
        return result;
      }, {});

      URLI.model = { model: { dataSources: dataModel } };
      setTool(null, true);
      dispatch.call("menuClose");
    });
};

/* tslint:disable */

var menuItems = {
  "_id": "56002c460faa9de708f37c33",
  "node_id": null,
  "menu_label": "Home",
  "caption": null,
  "url": null,
  "children": []
};

var relatedItems = [];

function BitlyService() {

  const bitlyUrl = "https://api-ssl.bitly.com/v4/shorten";

  return {
    shortenUrl(url = document.URL, callback) {

      return d3.json(bitlyUrl, {
        method: "POST",
        body: JSON.stringify({
          long_url: url
        }),
        headers: {
          "Content-type": "application/json",
          "Authorization": "Bearer da63d03dbdcd9d18de75a7a1340dc0aaf3fa3c7f"
        }
      })
        .then(response => {
          callback(response.link);
        })
        .catch(error => {
          console.error(error);
          callback(window.location);
        });
    }
  };
}

function LocationService() {

  return {
    getUrlHash(hash = window.location.hash) {
      const hashPosition = hash.indexOf("#");
      if (hashPosition === -1) {
        return "";
      }
      return hash.slice(hashPosition + 1);
    },

    getUrlReadyForEmbedding() {
      const location = window.location;
      const protocolAgnosticOrigin = location.origin.replace(/http:|https:/, "");
      const pathWithQueryParamsAndHash = location.pathname + "?embedded=true" + location.hash;

      return protocolAgnosticOrigin + pathWithQueryParamsAndHash;
    }
  };
}

const RelatedItems = function(placeHolder, translator, dispatch, { relatedItems }) {
  const templateHtml = `  
    <div class="related-block">
      <h2 class="heading-2 related-heading" data-text="popular"></h2>

      <div class="related-container">
        <ul class="related-items">

          <li class="related-item">
            <a rel="noopener">
              <div class="related-item-thumbnail">
                <img>
              </div>
              <div class="related-item-info">
                <span class="title"></span>
                <span class="subtitle"></span>
              </div>
            </a>
          </li>

        </ul>
      </div>
    </div>
  `;
  //require("./related-items.html");

  const template = d3.create("div");
  template.html(templateHtml);

  const itemTemplate = template.select(".related-item");
  for (const relatedItem of relatedItems) {
    itemTemplate.clone(true)
      .datum(relatedItem)
      .raise()
      .call(fillRelatedItem);
  }
  itemTemplate.remove();

  for (const elem of Array.from(template.node().children)) {
    placeHolder.append(() => elem);
  }

  translate();
  dispatch.on("translate.relatedItems", () => {
    translate();
  });

  function translate() {
    placeHolder.select(".related-heading").each(translateNode(translator));
    placeHolder.selectAll(".related-item .related-item-info .title").each(translateNode(translator));
    placeHolder.selectAll(".related-item .related-item-info .subtitle").each(translateNode(translator));
  }

  function fillRelatedItem(item) {
    const relatedItem = item.datum();
    const a = item.select("a");
    a.attr("href", relatedItem.link);
    a.select(".related-item-thumbnail img").attr("src", relatedItem.image);
    a.select(".related-item-info .title")
      .attr("data-text", "related-" + relatedItem._id + "-title");
    a.select(".related-item-info .subtitle")
      .attr("data-text", "related-" + relatedItem._id + "-subtitle");
  }

};

const Footer = function(placeHolder, translator, dispatch) {
  const templateHtml = `
    <div class="footer-container">
        <div class="footer-container menu-holder">
            <div class="logo-gray">
                <img src="assets/images/logo-gray.png">
            </div>
            <div class="general-menu">
                <ul class="nav">
                    <li><a href="https://visual-encodings.com/" data-text="madeby"></a></li>
                </ul>
            </div>
            
        </div>
        <div class="footer-container service-container">
            <div class="service-content">
            </div>
        </div>
    </div>
  `;
  //require("./footer.html");

  const template = d3.create("div");
  template.html(templateHtml);

  for (const elem of Array.from(template.node().children)) {
    placeHolder.append(() => elem);
  }

  translate();
  dispatch.on("translate.footer", () => {
    translate();
  });

  function translate() {
    placeHolder.selectAll("ul.nav li a")
      .each(translateNode(translator));
  }

};

const App = function() {

  Message$1.init(
    d3.select(".app-message"),
    translator,
    dispatch
  );

  const url = location.href;
  const upgradedUrl = upgradeUrl(url);
  if (upgradedUrl !== url) {
    location.replace(upgradedUrl);
  }

  const embeddedMatch = /embedded=(true|false)/.exec(window.location.search);
  d3.select(".wrapper").classed("embedded-view", (embeddedMatch || [])[1] === "true");

  const tools = toolsPage_toolset.filter(f => !!f.tool).map(m => m.id);
  parseURL();
  Object.assign(appState, {
    tool: (URLI["chart-type"] && tools.includes(URLI["chart-type"])) ? URLI["chart-type"] : tools[0],
    language: URLI.model?.ui?.locale || "en",
    projector: (URLI.model?.ui?.projector === "true") || false
  });

  window.history.replaceState({
    tool: appState.tool,
    model: deepExtend({}, URLI.model, true)
  }, "Title");
  setTool();

  new LanguageSwitcher(
    d3.select(".header .app-language-switcher"),
    translator,
    dispatch,
    {
      languages: getLanguages(),
      selectedLanguage: appState.language,
      onClick: d => setLanguage(d.key)
    });

  new ChartSwitcher(
    d3.select(".header .app-chart-switcher"),
    translator,
    dispatch,
    {
      tools: toolsPage_toolset,
      appState,
      onClick: d => {
        dispatch.call("toolChanged", null, d.id);
        if (appState.tool == d.id) {
          //switch to same tool: reset state, discard chart transition
          URLI.model = {};
          setTool(null, true);
        } else {
          setTool(d.id);
        }
      }
    });

  new Menu(
    d3.select(".header .app-menu"),
    translator,
    dispatch,
    {
      menuItems: menuItems.children
    });

  new MobileMenu(
    d3.select(".header .menu-mobile"),
    translator,
    dispatch,
    {
      menu: d3.select(".header")
    });

  new SeeAlso(
    d3.select(".app-see-also"),
    translator,
    dispatch,
    {
      tools: toolsPage_toolset,
      selectedTool: appState.tool,
      onClick: d => {
        scrollTo({
          element: d3.select(".wrapper").node(),
          complete: () => {
            dispatch.call("toolChanged", null, d.id);
            setTool(d.id);
          }
        });
      }
    });

  new SocialButtons(
    d3.select(".social-list .app-social-buttons"),
    translator,
    appState,
    dispatch,
    {
      bitlyService: BitlyService(),
      locationService: LocationService(),
    });

  new RelatedItems(
    d3.select(".app-related-items"),
    translator,
    dispatch,
    {
      relatedItems
    });

  new Footer(
    d3.select(".app-footer"),
    translator,
    dispatch);

  new DataEditor(
    d3.select(".header .data-editor"),
    translator,
    dispatch,
    {});

  setLanguage(appState.language);
};

// window.Vizabi = window.Vizabi || Vizabi;
// window.d3 = window.d3 || d3;
// window.urlon = window.urlon || urlon;

//DDFCSV reader integration
const ddfReader = new DDFCsvReader.getDDFCsvReaderObject();
Vizabi.stores.dataSources.createAndAddType("ddfcsv", ddfReader);

//Excel reader integration
//Vizabi.stores.dataSources.createAndAddType("excel", ExcelReader.excelReaderObject);

// BW reader integration
Vizabi.stores.dataSources.createAndAddType("ddfbw", DDFServiceReader.getReader());


window.js = mobx.toJS;
window.VIZABI_PAGE_MODEL = null;
App();
})();
//# sourceMappingURL=toolspage.js.map
