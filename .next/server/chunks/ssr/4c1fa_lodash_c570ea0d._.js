module.exports = {

"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseSlice.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) {
        start = -start > length ? 0 : length + start;
    }
    end = end > length ? length : end;
    if (end < 0) {
        end += length;
    }
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while(++index < length){
        result[index] = array[index + start];
    }
    return result;
}
module.exports = baseSlice;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/eq.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
module.exports = eq;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_freeGlobal.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
module.exports = freeGlobal;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_root.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var freeGlobal = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_freeGlobal.js [app-ssr] (ecmascript)");
/** Detect free variable `self`. */ var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function('return this')();
module.exports = root;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_Symbol.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var root = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_root.js [app-ssr] (ecmascript)");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_getRawTag.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var Symbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Symbol.js [app-ssr] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if ("TURBOPACK compile-time truthy", 1) {
        if (isOwn) {
            value[symToStringTag] = tag;
        } else {
            delete value[symToStringTag];
        }
    }
    return result;
}
module.exports = getRawTag;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_objectToString.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGetTag.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var Symbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Symbol.js [app-ssr] (ecmascript)"), getRawTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getRawTag.js [app-ssr] (ecmascript)"), objectToString = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_objectToString.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var nullTag = '[object Null]', undefinedTag = '[object Undefined]';
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isObject.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
}
module.exports = isObject;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isFunction.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseGetTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGetTag.js [app-ssr] (ecmascript)"), isObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObject.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var asyncTag = '[object AsyncFunction]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', proxyTag = '[object Proxy]';
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isLength.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isArrayLike.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isFunction = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isFunction.js [app-ssr] (ecmascript)"), isLength = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isLength.js [app-ssr] (ecmascript)");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_isIndex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_isIterateeCall.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var eq = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/eq.js [app-ssr] (ecmascript)"), isArrayLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArrayLike.js [app-ssr] (ecmascript)"), isIndex = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isIndex.js [app-ssr] (ecmascript)"), isObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObject.js [app-ssr] (ecmascript)");
/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */ function isIterateeCall(value, index, object) {
    if (!isObject(object)) {
        return false;
    }
    var type = typeof index;
    if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
        return eq(object[index], value);
    }
    return false;
}
module.exports = isIterateeCall;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_trimmedEndIndex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** Used to match a single whitespace character. */ var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index))){}
    return index;
}
module.exports = trimmedEndIndex;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseTrim.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var trimmedEndIndex = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_trimmedEndIndex.js [app-ssr] (ecmascript)");
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '') : string;
}
module.exports = baseTrim;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == 'object';
}
module.exports = isObjectLike;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isSymbol.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseGetTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGetTag.js [app-ssr] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var symbolTag = '[object Symbol]';
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/toNumber.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseTrim = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseTrim.js [app-ssr] (ecmascript)"), isObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObject.js [app-ssr] (ecmascript)"), isSymbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isSymbol.js [app-ssr] (ecmascript)");
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == 'number') {
        return value;
    }
    if (isSymbol(value)) {
        return NAN;
    }
    if (isObject(value)) {
        var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
        value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
        return value === 0 ? value : +value;
    }
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = toNumber;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/toFinite.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var toNumber = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/toNumber.js [app-ssr] (ecmascript)");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) {
        return value === 0 ? value : 0;
    }
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
module.exports = toFinite;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/toInteger.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var toFinite = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/toFinite.js [app-ssr] (ecmascript)");
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
module.exports = toInteger;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/chunk.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseSlice = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseSlice.js [app-ssr] (ecmascript)"), isIterateeCall = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isIterateeCall.js [app-ssr] (ecmascript)"), toInteger = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/toInteger.js [app-ssr] (ecmascript)");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeCeil = Math.ceil, nativeMax = Math.max;
/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * _.chunk(['a', 'b', 'c', 'd'], 2);
 * // => [['a', 'b'], ['c', 'd']]
 *
 * _.chunk(['a', 'b', 'c', 'd'], 3);
 * // => [['a', 'b', 'c'], ['d']]
 */ function chunk(array, size, guard) {
    if (guard ? isIterateeCall(array, size, guard) : size === undefined) {
        size = 1;
    } else {
        size = nativeMax(toInteger(size), 0);
    }
    var length = array == null ? 0 : array.length;
    if (!length || size < 1) {
        return [];
    }
    var index = 0, resIndex = 0, result = Array(nativeCeil(length / size));
    while(index < length){
        result[resIndex++] = baseSlice(array, index, index += size);
    }
    return result;
}
module.exports = chunk;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_listCacheClear.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
module.exports = listCacheClear;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_assocIndexOf.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var eq = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/eq.js [app-ssr] (ecmascript)");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) {
            return length;
        }
    }
    return -1;
}
module.exports = assocIndexOf;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_listCacheDelete.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var assocIndexOf = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_assocIndexOf.js [app-ssr] (ecmascript)");
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
        data.pop();
    } else {
        splice.call(data, index, 1);
    }
    --this.size;
    return true;
}
module.exports = listCacheDelete;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_listCacheGet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var assocIndexOf = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_assocIndexOf.js [app-ssr] (ecmascript)");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_listCacheHas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var assocIndexOf = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_assocIndexOf.js [app-ssr] (ecmascript)");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_listCacheSet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var assocIndexOf = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_assocIndexOf.js [app-ssr] (ecmascript)");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else {
        data[index][1] = value;
    }
    return this;
}
module.exports = listCacheSet;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_ListCache.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var listCacheClear = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_listCacheClear.js [app-ssr] (ecmascript)"), listCacheDelete = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_listCacheDelete.js [app-ssr] (ecmascript)"), listCacheGet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_listCacheGet.js [app-ssr] (ecmascript)"), listCacheHas = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_listCacheHas.js [app-ssr] (ecmascript)"), listCacheSet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_listCacheSet.js [app-ssr] (ecmascript)");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_stackClear.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var ListCache = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_ListCache.js [app-ssr] (ecmascript)");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
module.exports = stackClear;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_stackDelete.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data['delete'](key);
    this.size = data.size;
    return result;
}
module.exports = stackDelete;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_stackGet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
module.exports = stackGet;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_stackHas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
module.exports = stackHas;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_coreJsData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var root = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_root.js [app-ssr] (ecmascript)");
/** Used to detect overreaching core-js shims. */ var coreJsData = root['__core-js_shared__'];
module.exports = coreJsData;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_isMasked.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var coreJsData = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_coreJsData.js [app-ssr] (ecmascript)");
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_toSource.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** Used for built-in method references. */ var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + '';
        } catch (e) {}
    }
    return '';
}
module.exports = toSource;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsNative.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isFunction = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isFunction.js [app-ssr] (ecmascript)"), isMasked = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isMasked.js [app-ssr] (ecmascript)"), isObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObject.js [app-ssr] (ecmascript)"), toSource = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_toSource.js [app-ssr] (ecmascript)");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
        return false;
    }
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
module.exports = baseIsNative;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_getValue.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
module.exports = getValue;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_getNative.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseIsNative = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsNative.js [app-ssr] (ecmascript)"), getValue = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getValue.js [app-ssr] (ecmascript)");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_Map.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getNative = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getNative.js [app-ssr] (ecmascript)"), root = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_root.js [app-ssr] (ecmascript)");
/* Built-in method references that are verified to be native. */ var Map = getNative(root, 'Map');
module.exports = Map;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_nativeCreate.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getNative = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getNative.js [app-ssr] (ecmascript)");
/* Built-in method references that are verified to be native. */ var nativeCreate = getNative(Object, 'create');
module.exports = nativeCreate;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_hashClear.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var nativeCreate = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_nativeCreate.js [app-ssr] (ecmascript)");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
module.exports = hashClear;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_hashDelete.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = hashDelete;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_hashGet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var nativeCreate = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_nativeCreate.js [app-ssr] (ecmascript)");
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_hashHas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var nativeCreate = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_nativeCreate.js [app-ssr] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_hashSet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var nativeCreate = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_nativeCreate.js [app-ssr] (ecmascript)");
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
module.exports = hashSet;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_Hash.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var hashClear = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_hashClear.js [app-ssr] (ecmascript)"), hashDelete = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_hashDelete.js [app-ssr] (ecmascript)"), hashGet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_hashGet.js [app-ssr] (ecmascript)"), hashHas = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_hashHas.js [app-ssr] (ecmascript)"), hashSet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_hashSet.js [app-ssr] (ecmascript)");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_mapCacheClear.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var Hash = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Hash.js [app-ssr] (ecmascript)"), ListCache = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_ListCache.js [app-ssr] (ecmascript)"), Map = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Map.js [app-ssr] (ecmascript)");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        'hash': new Hash,
        'map': new (Map || ListCache),
        'string': new Hash
    };
}
module.exports = mapCacheClear;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_isKeyable.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
module.exports = isKeyable;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_getMapData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isKeyable = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isKeyable.js [app-ssr] (ecmascript)");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}
module.exports = getMapData;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_mapCacheDelete.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getMapData = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getMapData.js [app-ssr] (ecmascript)");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = mapCacheDelete;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_mapCacheGet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getMapData = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getMapData.js [app-ssr] (ecmascript)");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_mapCacheHas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getMapData = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getMapData.js [app-ssr] (ecmascript)");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_mapCacheSet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getMapData = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getMapData.js [app-ssr] (ecmascript)");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
module.exports = mapCacheSet;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_MapCache.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var mapCacheClear = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_mapCacheClear.js [app-ssr] (ecmascript)"), mapCacheDelete = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_mapCacheDelete.js [app-ssr] (ecmascript)"), mapCacheGet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_mapCacheGet.js [app-ssr] (ecmascript)"), mapCacheHas = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_mapCacheHas.js [app-ssr] (ecmascript)"), mapCacheSet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_mapCacheSet.js [app-ssr] (ecmascript)");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_stackSet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var ListCache = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_ListCache.js [app-ssr] (ecmascript)"), Map = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Map.js [app-ssr] (ecmascript)"), MapCache = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_MapCache.js [app-ssr] (ecmascript)");
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
module.exports = stackSet;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_Stack.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var ListCache = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_ListCache.js [app-ssr] (ecmascript)"), stackClear = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_stackClear.js [app-ssr] (ecmascript)"), stackDelete = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_stackDelete.js [app-ssr] (ecmascript)"), stackGet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_stackGet.js [app-ssr] (ecmascript)"), stackHas = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_stackHas.js [app-ssr] (ecmascript)"), stackSet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_stackSet.js [app-ssr] (ecmascript)");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_setCacheAdd.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = '__lodash_hash_undefined__';
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
module.exports = setCacheAdd;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_setCacheHas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
module.exports = setCacheHas;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_SetCache.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var MapCache = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_MapCache.js [app-ssr] (ecmascript)"), setCacheAdd = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_setCacheAdd.js [app-ssr] (ecmascript)"), setCacheHas = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_setCacheHas.js [app-ssr] (ecmascript)");
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while(++index < length){
        this.add(values[index]);
    }
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_arraySome.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) {
            return true;
        }
    }
    return false;
}
module.exports = arraySome;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_cacheHas.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
module.exports = cacheHas;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_equalArrays.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var SetCache = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_SetCache.js [app-ssr] (ecmascript)"), arraySome = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arraySome.js [app-ssr] (ecmascript)"), cacheHas = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_cacheHas.js [app-ssr] (ecmascript)");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
        return false;
    }
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) {
        return arrStacked == other && othStacked == array;
    }
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue = other[index];
        if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
        }
        if (compared !== undefined) {
            if (compared) {
                continue;
            }
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
                    return seen.push(othIndex);
                }
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack['delete'](array);
    stack['delete'](other);
    return result;
}
module.exports = equalArrays;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_Uint8Array.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var root = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_root.js [app-ssr] (ecmascript)");
/** Built-in value references. */ var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_mapToArray.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
module.exports = mapToArray;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_setToArray.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
module.exports = setToArray;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_equalByTag.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var Symbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Symbol.js [app-ssr] (ecmascript)"), Uint8Array = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Uint8Array.js [app-ssr] (ecmascript)"), eq = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/eq.js [app-ssr] (ecmascript)"), equalArrays = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_equalArrays.js [app-ssr] (ecmascript)"), mapToArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_mapToArray.js [app-ssr] (ecmascript)"), setToArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_setToArray.js [app-ssr] (ecmascript)");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', mapTag = '[object Map]', numberTag = '[object Number]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]';
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
            }
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
                return false;
            }
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + '';
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
                return false;
            }
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) {
                return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack['delete'](object);
            return result;
        case symbolTag:
            if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
    }
    return false;
}
module.exports = equalByTag;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayPush.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length){
        array[offset + index] = values[index];
    }
    return array;
}
module.exports = arrayPush;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGetAllKeys.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var arrayPush = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayPush.js [app-ssr] (ecmascript)"), isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
module.exports = baseGetAllKeys;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayFilter.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}
module.exports = arrayFilter;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/stubArray.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
module.exports = stubArray;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_getSymbols.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var arrayFilter = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayFilter.js [app-ssr] (ecmascript)"), stubArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/stubArray.js [app-ssr] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) {
        return [];
    }
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
module.exports = getSymbols;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseTimes.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n){
        result[index] = iteratee(index);
    }
    return result;
}
module.exports = baseTimes;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsArguments.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseGetTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGetTag.js [app-ssr] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var argsTag = '[object Arguments]';
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isArguments.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseIsArguments = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsArguments.js [app-ssr] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};
module.exports = isArguments;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/stubFalse.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = stubFalse;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isBuffer.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var root = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_root.js [app-ssr] (ecmascript)"), stubFalse = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/stubFalse.js [app-ssr] (ecmascript)");
/** Detect free variable `exports`. */ var freeExports = ("TURBOPACK compile-time value", "object") == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && ("TURBOPACK compile-time value", "object") == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsTypedArray.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseGetTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGetTag.js [app-ssr] (ecmascript)"), isLength = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isLength.js [app-ssr] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseUnary.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
module.exports = baseUnary;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_nodeUtil.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var freeGlobal = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_freeGlobal.js [app-ssr] (ecmascript)");
/** Detect free variable `exports`. */ var freeExports = ("TURBOPACK compile-time value", "object") == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && ("TURBOPACK compile-time value", "object") == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require('util').types;
        if (types) {
            return types;
        }
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
}();
module.exports = nodeUtil;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isTypedArray.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseIsTypedArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsTypedArray.js [app-ssr] (ecmascript)"), baseUnary = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseUnary.js [app-ssr] (ecmascript)"), nodeUtil = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_nodeUtil.js [app-ssr] (ecmascript)");
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayLikeKeys.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseTimes = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseTimes.js [app-ssr] (ecmascript)"), isArguments = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArguments.js [app-ssr] (ecmascript)"), isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)"), isBuffer = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isBuffer.js [app-ssr] (ecmascript)"), isIndex = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isIndex.js [app-ssr] (ecmascript)"), isTypedArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isTypedArray.js [app-ssr] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value){
        if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (// Safari 9 has enumerable `arguments.length` in strict mode.
        key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || // Skip index properties.
        isIndex(key, length)))) {
            result.push(key);
        }
    }
    return result;
}
module.exports = arrayLikeKeys;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_isPrototype.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
    return value === proto;
}
module.exports = isPrototype;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_overArg.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_nativeKeys.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var overArg = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_overArg.js [app-ssr] (ecmascript)");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseKeys.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isPrototype = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isPrototype.js [app-ssr] (ecmascript)"), nativeKeys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_nativeKeys.js [app-ssr] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) {
        return nativeKeys(object);
    }
    var result = [];
    for(var key in Object(object)){
        if (hasOwnProperty.call(object, key) && key != 'constructor') {
            result.push(key);
        }
    }
    return result;
}
module.exports = baseKeys;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/keys.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var arrayLikeKeys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayLikeKeys.js [app-ssr] (ecmascript)"), baseKeys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseKeys.js [app-ssr] (ecmascript)"), isArrayLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArrayLike.js [app-ssr] (ecmascript)");
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_getAllKeys.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseGetAllKeys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGetAllKeys.js [app-ssr] (ecmascript)"), getSymbols = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getSymbols.js [app-ssr] (ecmascript)"), keys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/keys.js [app-ssr] (ecmascript)");
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
module.exports = getAllKeys;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_equalObjects.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getAllKeys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getAllKeys.js [app-ssr] (ecmascript)");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) {
        return false;
    }
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
        }
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) {
        return objStacked == other && othStacked == object;
    }
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        }
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == 'constructor');
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
            result = false;
        }
    }
    stack['delete'](object);
    stack['delete'](other);
    return result;
}
module.exports = equalObjects;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_DataView.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getNative = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getNative.js [app-ssr] (ecmascript)"), root = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_root.js [app-ssr] (ecmascript)");
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, 'DataView');
module.exports = DataView;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_Promise.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getNative = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getNative.js [app-ssr] (ecmascript)"), root = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_root.js [app-ssr] (ecmascript)");
/* Built-in method references that are verified to be native. */ var Promise = getNative(root, 'Promise');
module.exports = Promise;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_Set.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getNative = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getNative.js [app-ssr] (ecmascript)"), root = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_root.js [app-ssr] (ecmascript)");
/* Built-in method references that are verified to be native. */ var Set = getNative(root, 'Set');
module.exports = Set;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_WeakMap.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getNative = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getNative.js [app-ssr] (ecmascript)"), root = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_root.js [app-ssr] (ecmascript)");
/* Built-in method references that are verified to be native. */ var WeakMap = getNative(root, 'WeakMap');
module.exports = WeakMap;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_getTag.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var DataView = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_DataView.js [app-ssr] (ecmascript)"), Map = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Map.js [app-ssr] (ecmascript)"), Promise = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Promise.js [app-ssr] (ecmascript)"), Set = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Set.js [app-ssr] (ecmascript)"), WeakMap = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_WeakMap.js [app-ssr] (ecmascript)"), baseGetTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGetTag.js [app-ssr] (ecmascript)"), toSource = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_toSource.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var mapTag = '[object Map]', objectTag = '[object Object]', promiseTag = '[object Promise]', setTag = '[object Set]', weakMapTag = '[object WeakMap]';
var dataViewTag = '[object DataView]';
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) {
    getTag = function(value) {
        var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : '';
        if (ctorString) {
            switch(ctorString){
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}
module.exports = getTag;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsEqualDeep.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var Stack = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Stack.js [app-ssr] (ecmascript)"), equalArrays = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_equalArrays.js [app-ssr] (ecmascript)"), equalByTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_equalByTag.js [app-ssr] (ecmascript)"), equalObjects = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_equalObjects.js [app-ssr] (ecmascript)"), getTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getTag.js [app-ssr] (ecmascript)"), isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)"), isBuffer = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isBuffer.js [app-ssr] (ecmascript)"), isTypedArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isTypedArray.js [app-ssr] (ecmascript)");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', objectTag = '[object Object]';
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) {
            return false;
        }
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'), othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) {
        return false;
    }
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
module.exports = baseIsEqualDeep;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsEqual.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseIsEqualDeep = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsEqualDeep.js [app-ssr] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
        return true;
    }
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
        return value !== value && other !== other;
    }
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
module.exports = baseIsEqual;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isEqual.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseIsEqual = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsEqual.js [app-ssr] (ecmascript)");
/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */ function isEqual(value, other) {
    return baseIsEqual(value, other);
}
module.exports = isEqual;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseFindIndex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while(fromRight ? index-- : ++index < length){
        if (predicate(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}
module.exports = baseFindIndex;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsMatch.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var Stack = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Stack.js [app-ssr] (ecmascript)"), baseIsEqual = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsEqual.js [app-ssr] (ecmascript)");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */ function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) {
        return !length;
    }
    object = Object(object);
    while(index--){
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
        }
    }
    while(++index < length){
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
            if (objValue === undefined && !(key in object)) {
                return false;
            }
        } else {
            var stack = new Stack;
            if (customizer) {
                var result = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
                return false;
            }
        }
    }
    return true;
}
module.exports = baseIsMatch;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_isStrictComparable.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObject.js [app-ssr] (ecmascript)");
/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */ function isStrictComparable(value) {
    return value === value && !isObject(value);
}
module.exports = isStrictComparable;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_getMatchData.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isStrictComparable = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isStrictComparable.js [app-ssr] (ecmascript)"), keys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/keys.js [app-ssr] (ecmascript)");
/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */ function getMatchData(object) {
    var result = keys(object), length = result.length;
    while(length--){
        var key = result[length], value = object[key];
        result[length] = [
            key,
            value,
            isStrictComparable(value)
        ];
    }
    return result;
}
module.exports = getMatchData;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_matchesStrictComparable.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function matchesStrictComparable(key, srcValue) {
    return function(object) {
        if (object == null) {
            return false;
        }
        return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
}
module.exports = matchesStrictComparable;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseMatches.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseIsMatch = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsMatch.js [app-ssr] (ecmascript)"), getMatchData = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getMatchData.js [app-ssr] (ecmascript)"), matchesStrictComparable = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_matchesStrictComparable.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) {
        return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    }
    return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
    };
}
module.exports = baseMatches;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_isKey.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)"), isSymbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isSymbol.js [app-ssr] (ecmascript)");
/** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey(value, object) {
    if (isArray(value)) {
        return false;
    }
    var type = typeof value;
    if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
        return true;
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
module.exports = isKey;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/memoize.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var MapCache = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_MapCache.js [app-ssr] (ecmascript)");
/** Error message constants. */ var FUNC_ERROR_TEXT = 'Expected a function';
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
    }
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) {
            return cache.get(key);
        }
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = MapCache;
module.exports = memoize;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_memoizeCapped.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var memoize = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/memoize.js [app-ssr] (ecmascript)");
/** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */ function memoizeCapped(func) {
    var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) {
            cache.clear();
        }
        return key;
    });
    var cache = result.cache;
    return result;
}
module.exports = memoizeCapped;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_stringToPath.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var memoizeCapped = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_memoizeCapped.js [app-ssr] (ecmascript)");
/** Used to match property names within property paths. */ var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */ ) {
        result.push('');
    }
    string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
    });
    return result;
});
module.exports = stringToPath;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayMap.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length){
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
module.exports = arrayMap;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseToString.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var Symbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Symbol.js [app-ssr] (ecmascript)"), arrayMap = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayMap.js [app-ssr] (ecmascript)"), isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)"), isSymbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isSymbol.js [app-ssr] (ecmascript)");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == 'string') {
        return value;
    }
    if (isArray(value)) {
        // Recursively convert values (susceptible to call stack limits).
        return arrayMap(value, baseToString) + '';
    }
    if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : '';
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = baseToString;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/toString.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseToString = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseToString.js [app-ssr] (ecmascript)");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? '' : baseToString(value);
}
module.exports = toString;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_castPath.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)"), isKey = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isKey.js [app-ssr] (ecmascript)"), stringToPath = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_stringToPath.js [app-ssr] (ecmascript)"), toString = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/toString.js [app-ssr] (ecmascript)");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */ function castPath(value, object) {
    if (isArray(value)) {
        return value;
    }
    return isKey(value, object) ? [
        value
    ] : stringToPath(toString(value));
}
module.exports = castPath;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_toKey.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isSymbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isSymbol.js [app-ssr] (ecmascript)");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == 'string' || isSymbol(value)) {
        return value;
    }
    var result = value + '';
    return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
module.exports = toKey;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var castPath = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_castPath.js [app-ssr] (ecmascript)"), toKey = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_toKey.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */ function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while(object != null && index < length){
        object = object[toKey(path[index++])];
    }
    return index && index == length ? object : undefined;
}
module.exports = baseGet;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/get.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseGet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGet.js [app-ssr] (ecmascript)");
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */ function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
module.exports = get;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseHasIn.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */ function baseHasIn(object, key) {
    return object != null && key in Object(object);
}
module.exports = baseHasIn;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_hasPath.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var castPath = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_castPath.js [app-ssr] (ecmascript)"), isArguments = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArguments.js [app-ssr] (ecmascript)"), isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)"), isIndex = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isIndex.js [app-ssr] (ecmascript)"), isLength = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isLength.js [app-ssr] (ecmascript)"), toKey = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_toKey.js [app-ssr] (ecmascript)");
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */ function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while(++index < length){
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) {
            break;
        }
        object = object[key];
    }
    if (result || ++index != length) {
        return result;
    }
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
module.exports = hasPath;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/hasIn.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseHasIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseHasIn.js [app-ssr] (ecmascript)"), hasPath = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_hasPath.js [app-ssr] (ecmascript)");
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */ function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
}
module.exports = hasIn;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseMatchesProperty.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseIsEqual = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsEqual.js [app-ssr] (ecmascript)"), get = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/get.js [app-ssr] (ecmascript)"), hasIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/hasIn.js [app-ssr] (ecmascript)"), isKey = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isKey.js [app-ssr] (ecmascript)"), isStrictComparable = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isStrictComparable.js [app-ssr] (ecmascript)"), matchesStrictComparable = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_matchesStrictComparable.js [app-ssr] (ecmascript)"), toKey = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_toKey.js [app-ssr] (ecmascript)");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) {
        return matchesStrictComparable(toKey(path), srcValue);
    }
    return function(object) {
        var objValue = get(object, path);
        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
}
module.exports = baseMatchesProperty;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/identity.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ function identity(value) {
    return value;
}
module.exports = identity;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseProperty.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function baseProperty(key) {
    return function(object) {
        return object == null ? undefined : object[key];
    };
}
module.exports = baseProperty;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_basePropertyDeep.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseGet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGet.js [app-ssr] (ecmascript)");
/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function basePropertyDeep(path) {
    return function(object) {
        return baseGet(object, path);
    };
}
module.exports = basePropertyDeep;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/property.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseProperty = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseProperty.js [app-ssr] (ecmascript)"), basePropertyDeep = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_basePropertyDeep.js [app-ssr] (ecmascript)"), isKey = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isKey.js [app-ssr] (ecmascript)"), toKey = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_toKey.js [app-ssr] (ecmascript)");
/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */ function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
module.exports = property;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIteratee.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseMatches = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseMatches.js [app-ssr] (ecmascript)"), baseMatchesProperty = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseMatchesProperty.js [app-ssr] (ecmascript)"), identity = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/identity.js [app-ssr] (ecmascript)"), isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)"), property = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/property.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */ function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == 'function') {
        return value;
    }
    if (value == null) {
        return identity;
    }
    if (typeof value == 'object') {
        return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    }
    return property(value);
}
module.exports = baseIteratee;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/findIndex.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseFindIndex = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseFindIndex.js [app-ssr] (ecmascript)"), baseIteratee = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIteratee.js [app-ssr] (ecmascript)"), toInteger = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/toInteger.js [app-ssr] (ecmascript)");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */ function findIndex(array, predicate, fromIndex) {
    var length = array == null ? 0 : array.length;
    if (!length) {
        return -1;
    }
    var index = fromIndex == null ? 0 : toInteger(fromIndex);
    if (index < 0) {
        index = nativeMax(length + index, 0);
    }
    return baseFindIndex(array, baseIteratee(predicate, 3), index);
}
module.exports = findIndex;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseRange.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeCeil = Math.ceil, nativeMax = Math.max;
/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */ function baseRange(start, end, step, fromRight) {
    var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result = Array(length);
    while(length--){
        result[fromRight ? length : ++index] = start;
        start += step;
    }
    return result;
}
module.exports = baseRange;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_createRange.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseRange = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseRange.js [app-ssr] (ecmascript)"), isIterateeCall = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isIterateeCall.js [app-ssr] (ecmascript)"), toFinite = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/toFinite.js [app-ssr] (ecmascript)");
/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */ function createRange(fromRight) {
    return function(start, end, step) {
        if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
            end = step = undefined;
        }
        // Ensure the sign of `-0` is preserved.
        start = toFinite(start);
        if (end === undefined) {
            end = start;
            start = 0;
        } else {
            end = toFinite(end);
        }
        step = step === undefined ? start < end ? 1 : -1 : toFinite(step);
        return baseRange(start, end, step, fromRight);
    };
}
module.exports = createRange;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/range.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var createRange = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_createRange.js [app-ssr] (ecmascript)");
/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */ var range = createRange();
module.exports = range;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_isFlattenable.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var Symbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Symbol.js [app-ssr] (ecmascript)"), isArguments = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArguments.js [app-ssr] (ecmascript)"), isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)");
/** Built-in value references. */ var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */ function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
module.exports = isFlattenable;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseFlatten.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var arrayPush = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayPush.js [app-ssr] (ecmascript)"), isFlattenable = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isFlattenable.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */ function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while(++index < length){
        var value = array[index];
        if (depth > 0 && predicate(value)) {
            if (depth > 1) {
                // Recursively flatten arrays (susceptible to call stack limits).
                baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
                arrayPush(result, value);
            }
        } else if (!isStrict) {
            result[result.length] = value;
        }
    }
    return result;
}
module.exports = baseFlatten;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_createBaseFor.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
        var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
        while(length--){
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
                break;
            }
        }
        return object;
    };
}
module.exports = createBaseFor;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseFor.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var createBaseFor = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_createBaseFor.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */ var baseFor = createBaseFor();
module.exports = baseFor;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseForOwn.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseFor = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseFor.js [app-ssr] (ecmascript)"), keys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/keys.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */ function baseForOwn(object, iteratee) {
    return object && baseFor(object, iteratee, keys);
}
module.exports = baseForOwn;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_createBaseEach.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isArrayLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArrayLike.js [app-ssr] (ecmascript)");
/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */ function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
        if (collection == null) {
            return collection;
        }
        if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee);
        }
        var length = collection.length, index = fromRight ? length : -1, iterable = Object(collection);
        while(fromRight ? index-- : ++index < length){
            if (iteratee(iterable[index], index, iterable) === false) {
                break;
            }
        }
        return collection;
    };
}
module.exports = createBaseEach;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseEach.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseForOwn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseForOwn.js [app-ssr] (ecmascript)"), createBaseEach = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_createBaseEach.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */ var baseEach = createBaseEach(baseForOwn);
module.exports = baseEach;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseMap.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseEach = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseEach.js [app-ssr] (ecmascript)"), isArrayLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArrayLike.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function baseMap(collection, iteratee) {
    var index = -1, result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function(value, key, collection) {
        result[++index] = iteratee(value, key, collection);
    });
    return result;
}
module.exports = baseMap;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseSortBy.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */ function baseSortBy(array, comparer) {
    var length = array.length;
    array.sort(comparer);
    while(length--){
        array[length] = array[length].value;
    }
    return array;
}
module.exports = baseSortBy;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_compareAscending.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isSymbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isSymbol.js [app-ssr] (ecmascript)");
/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */ function compareAscending(value, other) {
    if (value !== other) {
        var valIsDefined = value !== undefined, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
        var othIsDefined = other !== undefined, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
        if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
        }
        if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
        }
    }
    return 0;
}
module.exports = compareAscending;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_compareMultiple.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var compareAscending = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_compareAscending.js [app-ssr] (ecmascript)");
/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */ function compareMultiple(object, other, orders) {
    var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
    while(++index < length){
        var result = compareAscending(objCriteria[index], othCriteria[index]);
        if (result) {
            if (index >= ordersLength) {
                return result;
            }
            var order = orders[index];
            return result * (order == 'desc' ? -1 : 1);
        }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to provide the same value for
    // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
    // for more details.
    //
    // This also ensures a stable sort in V8 and other engines.
    // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
    return object.index - other.index;
}
module.exports = compareMultiple;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseOrderBy.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var arrayMap = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayMap.js [app-ssr] (ecmascript)"), baseGet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGet.js [app-ssr] (ecmascript)"), baseIteratee = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIteratee.js [app-ssr] (ecmascript)"), baseMap = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseMap.js [app-ssr] (ecmascript)"), baseSortBy = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseSortBy.js [app-ssr] (ecmascript)"), baseUnary = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseUnary.js [app-ssr] (ecmascript)"), compareMultiple = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_compareMultiple.js [app-ssr] (ecmascript)"), identity = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/identity.js [app-ssr] (ecmascript)"), isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */ function baseOrderBy(collection, iteratees, orders) {
    if (iteratees.length) {
        iteratees = arrayMap(iteratees, function(iteratee) {
            if (isArray(iteratee)) {
                return function(value) {
                    return baseGet(value, iteratee.length === 1 ? iteratee[0] : iteratee);
                };
            }
            return iteratee;
        });
    } else {
        iteratees = [
            identity
        ];
    }
    var index = -1;
    iteratees = arrayMap(iteratees, baseUnary(baseIteratee));
    var result = baseMap(collection, function(value, key, collection) {
        var criteria = arrayMap(iteratees, function(iteratee) {
            return iteratee(value);
        });
        return {
            'criteria': criteria,
            'index': ++index,
            'value': value
        };
    });
    return baseSortBy(result, function(object, other) {
        return compareMultiple(object, other, orders);
    });
}
module.exports = baseOrderBy;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_apply.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */ function apply(func, thisArg, args) {
    switch(args.length){
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
module.exports = apply;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_overRest.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var apply = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_apply.js [app-ssr] (ecmascript)");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */ function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while(++index < length){
            array[index] = args[start + index];
        }
        index = -1;
        var otherArgs = Array(start + 1);
        while(++index < start){
            otherArgs[index] = args[index];
        }
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
    };
}
module.exports = overRest;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/constant.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */ function constant(value) {
    return function() {
        return value;
    };
}
module.exports = constant;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_defineProperty.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getNative = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getNative.js [app-ssr] (ecmascript)");
var defineProperty = function() {
    try {
        var func = getNative(Object, 'defineProperty');
        func({}, '', {});
        return func;
    } catch (e) {}
}();
module.exports = defineProperty;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseSetToString.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var constant = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/constant.js [app-ssr] (ecmascript)"), defineProperty = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_defineProperty.js [app-ssr] (ecmascript)"), identity = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/identity.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, 'toString', {
        'configurable': true,
        'enumerable': false,
        'value': constant(string),
        'writable': true
    });
};
module.exports = baseSetToString;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_shortOut.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** Used to detect hot functions by number of calls within a span of milliseconds. */ var HOT_COUNT = 800, HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */ function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
            if (++count >= HOT_COUNT) {
                return arguments[0];
            }
        } else {
            count = 0;
        }
        return func.apply(undefined, arguments);
    };
}
module.exports = shortOut;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_setToString.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseSetToString = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseSetToString.js [app-ssr] (ecmascript)"), shortOut = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_shortOut.js [app-ssr] (ecmascript)");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var setToString = shortOut(baseSetToString);
module.exports = setToString;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseRest.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var identity = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/identity.js [app-ssr] (ecmascript)"), overRest = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_overRest.js [app-ssr] (ecmascript)"), setToString = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_setToString.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */ function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + '');
}
module.exports = baseRest;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/sortBy.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseFlatten = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseFlatten.js [app-ssr] (ecmascript)"), baseOrderBy = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseOrderBy.js [app-ssr] (ecmascript)"), baseRest = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseRest.js [app-ssr] (ecmascript)"), isIterateeCall = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isIterateeCall.js [app-ssr] (ecmascript)");
/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 30 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 30]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 30], ['fred', 48]]
 */ var sortBy = baseRest(function(collection, iteratees) {
    if (collection == null) {
        return [];
    }
    var length = iteratees.length;
    if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
        iteratees = [];
    } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
        iteratees = [
            iteratees[0]
        ];
    }
    return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});
module.exports = sortBy;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_nativeKeysIn.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
        for(var key in Object(object)){
            result.push(key);
        }
    }
    return result;
}
module.exports = nativeKeysIn;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseKeysIn.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObject.js [app-ssr] (ecmascript)"), isPrototype = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isPrototype.js [app-ssr] (ecmascript)"), nativeKeysIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_nativeKeysIn.js [app-ssr] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeysIn(object) {
    if (!isObject(object)) {
        return nativeKeysIn(object);
    }
    var isProto = isPrototype(object), result = [];
    for(var key in object){
        if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
        }
    }
    return result;
}
module.exports = baseKeysIn;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/keysIn.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var arrayLikeKeys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayLikeKeys.js [app-ssr] (ecmascript)"), baseKeysIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseKeysIn.js [app-ssr] (ecmascript)"), isArrayLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArrayLike.js [app-ssr] (ecmascript)");
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */ function keysIn(object) {
    return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}
module.exports = keysIn;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/defaults.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseRest = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseRest.js [app-ssr] (ecmascript)"), eq = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/eq.js [app-ssr] (ecmascript)"), isIterateeCall = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isIterateeCall.js [app-ssr] (ecmascript)"), keysIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/keysIn.js [app-ssr] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */ var defaults = baseRest(function(object, sources) {
    object = Object(object);
    var index = -1;
    var length = sources.length;
    var guard = length > 2 ? sources[2] : undefined;
    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
        length = 1;
    }
    while(++index < length){
        var source = sources[index];
        var props = keysIn(source);
        var propsIndex = -1;
        var propsLength = props.length;
        while(++propsIndex < propsLength){
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
            }
        }
    }
    return object;
});
module.exports = defaults;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseAssignValue.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var defineProperty = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_defineProperty.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function baseAssignValue(object, key, value) {
    if (key == '__proto__' && defineProperty) {
        defineProperty(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
        });
    } else {
        object[key] = value;
    }
}
module.exports = baseAssignValue;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/mapValues.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseAssignValue = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseAssignValue.js [app-ssr] (ecmascript)"), baseForOwn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseForOwn.js [app-ssr] (ecmascript)"), baseIteratee = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIteratee.js [app-ssr] (ecmascript)");
/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */ function mapValues(object, iteratee) {
    var result = {};
    iteratee = baseIteratee(iteratee, 3);
    baseForOwn(object, function(value, key, object) {
        baseAssignValue(result, key, iteratee(value, key, object));
    });
    return result;
}
module.exports = mapValues;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayEach.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */ function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}
module.exports = arrayEach;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_assignValue.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseAssignValue = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseAssignValue.js [app-ssr] (ecmascript)"), eq = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/eq.js [app-ssr] (ecmascript)");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */ function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
        baseAssignValue(object, key, value);
    }
}
module.exports = assignValue;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_copyObject.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var assignValue = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_assignValue.js [app-ssr] (ecmascript)"), baseAssignValue = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseAssignValue.js [app-ssr] (ecmascript)");
/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */ function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});
    var index = -1, length = props.length;
    while(++index < length){
        var key = props[index];
        var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;
        if (newValue === undefined) {
            newValue = source[key];
        }
        if (isNew) {
            baseAssignValue(object, key, newValue);
        } else {
            assignValue(object, key, newValue);
        }
    }
    return object;
}
module.exports = copyObject;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseAssign.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var copyObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_copyObject.js [app-ssr] (ecmascript)"), keys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/keys.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssign(object, source) {
    return object && copyObject(source, keys(source), object);
}
module.exports = baseAssign;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseAssignIn.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var copyObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_copyObject.js [app-ssr] (ecmascript)"), keysIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/keysIn.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */ function baseAssignIn(object, source) {
    return object && copyObject(source, keysIn(source), object);
}
module.exports = baseAssignIn;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneBuffer.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var root = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_root.js [app-ssr] (ecmascript)");
/** Detect free variable `exports`. */ var freeExports = ("TURBOPACK compile-time value", "object") == 'object' && exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && ("TURBOPACK compile-time value", "object") == 'object' && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined, allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */ function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
        return buffer.slice();
    }
    var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
    buffer.copy(result);
    return result;
}
module.exports = cloneBuffer;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_copyArray.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while(++index < length){
        array[index] = source[index];
    }
    return array;
}
module.exports = copyArray;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_copySymbols.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var copyObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_copyObject.js [app-ssr] (ecmascript)"), getSymbols = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getSymbols.js [app-ssr] (ecmascript)");
/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbols(source, object) {
    return copyObject(source, getSymbols(source), object);
}
module.exports = copySymbols;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_getPrototype.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var overArg = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_overArg.js [app-ssr] (ecmascript)");
/** Built-in value references. */ var getPrototype = overArg(Object.getPrototypeOf, Object);
module.exports = getPrototype;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_getSymbolsIn.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var arrayPush = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayPush.js [app-ssr] (ecmascript)"), getPrototype = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getPrototype.js [app-ssr] (ecmascript)"), getSymbols = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getSymbols.js [app-ssr] (ecmascript)"), stubArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/stubArray.js [app-ssr] (ecmascript)");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
    var result = [];
    while(object){
        arrayPush(result, getSymbols(object));
        object = getPrototype(object);
    }
    return result;
};
module.exports = getSymbolsIn;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_copySymbolsIn.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var copyObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_copyObject.js [app-ssr] (ecmascript)"), getSymbolsIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getSymbolsIn.js [app-ssr] (ecmascript)");
/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */ function copySymbolsIn(source, object) {
    return copyObject(source, getSymbolsIn(source), object);
}
module.exports = copySymbolsIn;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_getAllKeysIn.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseGetAllKeys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGetAllKeys.js [app-ssr] (ecmascript)"), getSymbolsIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getSymbolsIn.js [app-ssr] (ecmascript)"), keysIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/keysIn.js [app-ssr] (ecmascript)");
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeysIn(object) {
    return baseGetAllKeys(object, keysIn, getSymbolsIn);
}
module.exports = getAllKeysIn;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_initCloneArray.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */ function initCloneArray(array) {
    var length = array.length, result = new array.constructor(length);
    // Add properties assigned by `RegExp#exec`.
    if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
        result.index = array.index;
        result.input = array.input;
    }
    return result;
}
module.exports = initCloneArray;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneArrayBuffer.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var Uint8Array = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Uint8Array.js [app-ssr] (ecmascript)");
/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */ function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new Uint8Array(result).set(new Uint8Array(arrayBuffer));
    return result;
}
module.exports = cloneArrayBuffer;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneDataView.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var cloneArrayBuffer = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneArrayBuffer.js [app-ssr] (ecmascript)");
/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */ function cloneDataView(dataView, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
    return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}
module.exports = cloneDataView;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneRegExp.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/** Used to match `RegExp` flags from their coerced string values. */ var reFlags = /\w*$/;
/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */ function cloneRegExp(regexp) {
    var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}
module.exports = cloneRegExp;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneSymbol.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var Symbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Symbol.js [app-ssr] (ecmascript)");
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */ function cloneSymbol(symbol) {
    return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}
module.exports = cloneSymbol;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneTypedArray.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var cloneArrayBuffer = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneArrayBuffer.js [app-ssr] (ecmascript)");
/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */ function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}
module.exports = cloneTypedArray;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_initCloneByTag.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var cloneArrayBuffer = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneArrayBuffer.js [app-ssr] (ecmascript)"), cloneDataView = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneDataView.js [app-ssr] (ecmascript)"), cloneRegExp = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneRegExp.js [app-ssr] (ecmascript)"), cloneSymbol = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneSymbol.js [app-ssr] (ecmascript)"), cloneTypedArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneTypedArray.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var boolTag = '[object Boolean]', dateTag = '[object Date]', mapTag = '[object Map]', numberTag = '[object Number]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneByTag(object, tag, isDeep) {
    var Ctor = object.constructor;
    switch(tag){
        case arrayBufferTag:
            return cloneArrayBuffer(object);
        case boolTag:
        case dateTag:
            return new Ctor(+object);
        case dataViewTag:
            return cloneDataView(object, isDeep);
        case float32Tag:
        case float64Tag:
        case int8Tag:
        case int16Tag:
        case int32Tag:
        case uint8Tag:
        case uint8ClampedTag:
        case uint16Tag:
        case uint32Tag:
            return cloneTypedArray(object, isDeep);
        case mapTag:
            return new Ctor;
        case numberTag:
        case stringTag:
            return new Ctor(object);
        case regexpTag:
            return cloneRegExp(object);
        case setTag:
            return new Ctor;
        case symbolTag:
            return cloneSymbol(object);
    }
}
module.exports = initCloneByTag;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseCreate.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObject.js [app-ssr] (ecmascript)");
/** Built-in value references. */ var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */ var baseCreate = function() {
    function object() {}
    return function(proto) {
        if (!isObject(proto)) {
            return {};
        }
        if (objectCreate) {
            return objectCreate(proto);
        }
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
    };
}();
module.exports = baseCreate;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_initCloneObject.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseCreate = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseCreate.js [app-ssr] (ecmascript)"), getPrototype = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getPrototype.js [app-ssr] (ecmascript)"), isPrototype = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_isPrototype.js [app-ssr] (ecmascript)");
/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */ function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}
module.exports = initCloneObject;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsMap.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getTag.js [app-ssr] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var mapTag = '[object Map]';
/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */ function baseIsMap(value) {
    return isObjectLike(value) && getTag(value) == mapTag;
}
module.exports = baseIsMap;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isMap.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseIsMap = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsMap.js [app-ssr] (ecmascript)"), baseUnary = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseUnary.js [app-ssr] (ecmascript)"), nodeUtil = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_nodeUtil.js [app-ssr] (ecmascript)");
/* Node.js helper references. */ var nodeIsMap = nodeUtil && nodeUtil.isMap;
/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */ var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
module.exports = isMap;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsSet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var getTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getTag.js [app-ssr] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var setTag = '[object Set]';
/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */ function baseIsSet(value) {
    return isObjectLike(value) && getTag(value) == setTag;
}
module.exports = baseIsSet;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isSet.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseIsSet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIsSet.js [app-ssr] (ecmascript)"), baseUnary = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseUnary.js [app-ssr] (ecmascript)"), nodeUtil = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_nodeUtil.js [app-ssr] (ecmascript)");
/* Node.js helper references. */ var nodeIsSet = nodeUtil && nodeUtil.isSet;
/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */ var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
module.exports = isSet;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseClone.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var Stack = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_Stack.js [app-ssr] (ecmascript)"), arrayEach = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayEach.js [app-ssr] (ecmascript)"), assignValue = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_assignValue.js [app-ssr] (ecmascript)"), baseAssign = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseAssign.js [app-ssr] (ecmascript)"), baseAssignIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseAssignIn.js [app-ssr] (ecmascript)"), cloneBuffer = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_cloneBuffer.js [app-ssr] (ecmascript)"), copyArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_copyArray.js [app-ssr] (ecmascript)"), copySymbols = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_copySymbols.js [app-ssr] (ecmascript)"), copySymbolsIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_copySymbolsIn.js [app-ssr] (ecmascript)"), getAllKeys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getAllKeys.js [app-ssr] (ecmascript)"), getAllKeysIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getAllKeysIn.js [app-ssr] (ecmascript)"), getTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getTag.js [app-ssr] (ecmascript)"), initCloneArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_initCloneArray.js [app-ssr] (ecmascript)"), initCloneByTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_initCloneByTag.js [app-ssr] (ecmascript)"), initCloneObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_initCloneObject.js [app-ssr] (ecmascript)"), isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)"), isBuffer = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isBuffer.js [app-ssr] (ecmascript)"), isMap = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isMap.js [app-ssr] (ecmascript)"), isObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObject.js [app-ssr] (ecmascript)"), isSet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isSet.js [app-ssr] (ecmascript)"), keys = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/keys.js [app-ssr] (ecmascript)"), keysIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/keysIn.js [app-ssr] (ecmascript)");
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
/** `Object#toString` result references. */ var argsTag = '[object Arguments]', arrayTag = '[object Array]', boolTag = '[object Boolean]', dateTag = '[object Date]', errorTag = '[object Error]', funcTag = '[object Function]', genTag = '[object GeneratorFunction]', mapTag = '[object Map]', numberTag = '[object Number]', objectTag = '[object Object]', regexpTag = '[object RegExp]', setTag = '[object Set]', stringTag = '[object String]', symbolTag = '[object Symbol]', weakMapTag = '[object WeakMap]';
var arrayBufferTag = '[object ArrayBuffer]', dataViewTag = '[object DataView]', float32Tag = '[object Float32Array]', float64Tag = '[object Float64Array]', int8Tag = '[object Int8Array]', int16Tag = '[object Int16Array]', int32Tag = '[object Int32Array]', uint8Tag = '[object Uint8Array]', uint8ClampedTag = '[object Uint8ClampedArray]', uint16Tag = '[object Uint16Array]', uint32Tag = '[object Uint32Array]';
/** Used to identify `toStringTag` values supported by `_.clone`. */ var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */ function baseClone(value, bitmask, customizer, key, object, stack) {
    var result, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
    if (customizer) {
        result = object ? customizer(value, key, object, stack) : customizer(value);
    }
    if (result !== undefined) {
        return result;
    }
    if (!isObject(value)) {
        return value;
    }
    var isArr = isArray(value);
    if (isArr) {
        result = initCloneArray(value);
        if (!isDeep) {
            return copyArray(value, result);
        }
    } else {
        var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
        if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
        }
        if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
            }
        } else {
            if (!cloneableTags[tag]) {
                return object ? value : {};
            }
            result = initCloneByTag(value, tag, isDeep);
        }
    }
    // Check for circular references and return its corresponding clone.
    stack || (stack = new Stack);
    var stacked = stack.get(value);
    if (stacked) {
        return stacked;
    }
    stack.set(value, result);
    if (isSet(value)) {
        value.forEach(function(subValue) {
            result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
        });
    } else if (isMap(value)) {
        value.forEach(function(subValue, key) {
            result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
        });
    }
    var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
    var props = isArr ? undefined : keysFunc(value);
    arrayEach(props || value, function(subValue, key) {
        if (props) {
            key = subValue;
            subValue = value[key];
        }
        // Recursively populate clone (susceptible to call stack limits).
        assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
    return result;
}
module.exports = baseClone;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/last.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */ function last(array) {
    var length = array == null ? 0 : array.length;
    return length ? array[length - 1] : undefined;
}
module.exports = last;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_parent.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseGet = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGet.js [app-ssr] (ecmascript)"), baseSlice = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseSlice.js [app-ssr] (ecmascript)");
/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */ function parent(object, path) {
    return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}
module.exports = parent;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_baseUnset.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var castPath = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_castPath.js [app-ssr] (ecmascript)"), last = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/last.js [app-ssr] (ecmascript)"), parent = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_parent.js [app-ssr] (ecmascript)"), toKey = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_toKey.js [app-ssr] (ecmascript)");
/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */ function baseUnset(object, path) {
    path = castPath(path, object);
    object = parent(object, path);
    return object == null || delete object[toKey(last(path))];
}
module.exports = baseUnset;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/isPlainObject.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseGetTag = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseGetTag.js [app-ssr] (ecmascript)"), getPrototype = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getPrototype.js [app-ssr] (ecmascript)"), isObjectLike = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObjectLike.js [app-ssr] (ecmascript)");
/** `Object#toString` result references. */ var objectTag = '[object Object]';
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to infer the `Object` constructor. */ var objectCtorString = funcToString.call(Object);
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
        return false;
    }
    var proto = getPrototype(value);
    if (proto === null) {
        return true;
    }
    var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}
module.exports = isPlainObject;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_customOmitClone.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var isPlainObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isPlainObject.js [app-ssr] (ecmascript)");
/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */ function customOmitClone(value) {
    return isPlainObject(value) ? undefined : value;
}
module.exports = customOmitClone;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/flatten.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var baseFlatten = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseFlatten.js [app-ssr] (ecmascript)");
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */ function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
}
module.exports = flatten;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/_flatRest.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var flatten = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/flatten.js [app-ssr] (ecmascript)"), overRest = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_overRest.js [app-ssr] (ecmascript)"), setToString = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_setToString.js [app-ssr] (ecmascript)");
/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */ function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + '');
}
module.exports = flatRest;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/omit.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var arrayMap = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayMap.js [app-ssr] (ecmascript)"), baseClone = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseClone.js [app-ssr] (ecmascript)"), baseUnset = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseUnset.js [app-ssr] (ecmascript)"), castPath = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_castPath.js [app-ssr] (ecmascript)"), copyObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_copyObject.js [app-ssr] (ecmascript)"), customOmitClone = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_customOmitClone.js [app-ssr] (ecmascript)"), flatRest = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_flatRest.js [app-ssr] (ecmascript)"), getAllKeysIn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getAllKeysIn.js [app-ssr] (ecmascript)");
/** Used to compose bitmasks for cloning. */ var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */ var omit = flatRest(function(object, paths) {
    var result = {};
    if (object == null) {
        return result;
    }
    var isDeep = false;
    paths = arrayMap(paths, function(path) {
        path = castPath(path, object);
        isDeep || (isDeep = path.length > 1);
        return path;
    });
    copyObject(object, getAllKeysIn(object), result);
    if (isDeep) {
        result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
    }
    var length = paths.length;
    while(length--){
        baseUnset(result, paths[length]);
    }
    return result;
});
module.exports = omit;
}}),
"[project]/node_modules/react-big-calendar/node_modules/lodash/transform.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
var arrayEach = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_arrayEach.js [app-ssr] (ecmascript)"), baseCreate = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseCreate.js [app-ssr] (ecmascript)"), baseForOwn = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseForOwn.js [app-ssr] (ecmascript)"), baseIteratee = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_baseIteratee.js [app-ssr] (ecmascript)"), getPrototype = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/_getPrototype.js [app-ssr] (ecmascript)"), isArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isArray.js [app-ssr] (ecmascript)"), isBuffer = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isBuffer.js [app-ssr] (ecmascript)"), isFunction = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isFunction.js [app-ssr] (ecmascript)"), isObject = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isObject.js [app-ssr] (ecmascript)"), isTypedArray = __turbopack_context__.r("[project]/node_modules/react-big-calendar/node_modules/lodash/isTypedArray.js [app-ssr] (ecmascript)");
/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */ function transform(object, iteratee, accumulator) {
    var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
    iteratee = baseIteratee(iteratee, 4);
    if (accumulator == null) {
        var Ctor = object && object.constructor;
        if (isArrLike) {
            accumulator = isArr ? new Ctor : [];
        } else if (isObject(object)) {
            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
        } else {
            accumulator = {};
        }
    }
    (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
        return iteratee(accumulator, value, index, object);
    });
    return accumulator;
}
module.exports = transform;
}}),

};

//# sourceMappingURL=4c1fa_lodash_c570ea0d._.js.map