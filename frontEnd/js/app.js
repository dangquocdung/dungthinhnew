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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.5.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2020-04-10T15:07Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.5.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( _i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.5
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2020-03-14
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem.namespaceURI,
		docElem = ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = Object.create( null );

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
					dataPriv.get( this, "events" ) || Object.create( null )
				)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();
						return result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px";
				tr.style.height = "1px";
				trChild.style.height = "9px";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = parseInt( trStyle.height ) > 3;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
					jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = (
					dataPriv.get( cur, "events" ) || Object.create( null )
				)[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script
			if ( !isSuccess && jQuery.inArray( "script", s.dataTypes ) > -1 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			if ( typeof props.top === "number" ) {
				props.top += "px";
			}
			if ( typeof props.left === "number" ) {
				props.left += "px";
			}
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./flipbook.js */ "./resources/js/flipbook.js");

$(document).ready(function () {
  $("#xem-pdf").flipBook({
    pdfUrl: "/uploads/topics/{{ $Topic->attach_file }}"
  });
});

/***/ }),

/***/ "./resources/js/flipbook.js":
/*!**********************************!*\
  !*** ./resources/js/flipbook.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* v 3.12.1
author http://codecanyon.net/user/creativeinteractivemedia/portfolio?ref=creativeinteractivemedia
*/
var FLIPBOOK = FLIPBOOK || {};
{
  /* Main */
  (function init(jQuery, window, document, undefined) {
    jQuery.fn.flipBook = function (options) {
      return new FLIPBOOK.Main(options, this);
    };

    jQuery.fn.swipeBook = function (options) {
      options.viewMode = "swipe";
      return new FLIPBOOK.Main(options, this);
    }; // DEFAULT OPTIONS


    jQuery.fn.flipBook.options = {
      name: "",

      /*array of page objects - this must be passed to plugin constructor
      {
          src:"page url",
          thumb:"page thumb url",
          title:"page title",
          htmlContent:"page html content"
      }*/
      pages: [],

      /*array of table_of_content objects
      {
          title:"Cover",
          page:"1",
      }*/
      tableOfContent: [],
      tableOfContentCloseOnClick: true,
      thumbsCloseOnClick: true,
      //set unique prefix to enable deep linking, for example prefix "book1_" will add hash #book1_{page number} to the end of url
      deeplinkingEnabled: false,
      deeplinkingPrefix: '',
      assets: {
        preloader: "images/preloader.jpg",
        overlay: "images/overlay.png",
        flipMp3: "mp3/turnPage.mp3",
        spinner: "images/spinner.gif"
      },
      //pdf source options
      pdfUrl: null,
      pdfBrowserViewerIfMobile: false,
      pdfBrowserViewerIfIE: false,
      pdfBrowserViewerFullscreen: true,
      pdfBrowserViewerFullscreenTarget: "_blank",
      pdfPageScale: 1,
      pdfOutline: true,
      rangeChunkSize: 64,
      htmlLayer: true,
      rightToLeft: false,
      //page that will be displayed when the book starts
      startPage: 0,
      //if the sound is enabled
      sound: true,
      backgroundColor: "rgb(81, 85, 88)",
      backgroundImage: "",
      backgroundPattern: "",
      backgroundTransparent: false,
      //book default settings
      thumbSize: 130,
      loadAllPages: false,
      loadPagesF: 2,
      loadPagesB: 1,
      autoplayOnStart: false,
      autoplayInterval: 3000,
      autoplayLoop: true,
      //UI settings
      skin: "light",
      //"dark", "light", "gradient"
      layout: "1",
      //"1", "2", "3", "4"
      menuOverBook: false,
      menuFloating: false,
      menuBackground: '',
      menuShadow: '',
      menuMargin: 0,
      menuPadding: 0,
      menuTransparent: false,
      menu2OverBook: true,
      menu2Floating: false,
      menu2Background: '',
      menu2Shadow: '',
      menu2Margin: 0,
      menu2Padding: 0,
      menu2Transparent: true,
      skinColor: '',
      skinBackground: '',
      // menu buttons
      btnColor: '',
      btnBackground: 'none',
      btnSize: 14,
      btnRadius: 2,
      btnMargin: 2,
      btnShadow: '',
      btnTextShadow: '',
      btnBorder: '',
      btnColorHover: "",
      btnBackgroundHover: '',
      //side navigation arrows
      sideBtnColor: '#FFF',
      sideBtnBackground: '#00000033',
      sideBtnSize: 30,
      sideBtnRadius: 0,
      sideBtnMargin: 0,
      sideBtnPaddingV: 5,
      sideBtnPaddingH: 0,
      sideBtnShadow: '',
      sideBtnTextShadow: '',
      sideBtnBorder: '',
      sideBtnColorHover: "#FFF",
      sideBtnBackgroundHover: '#00000066',
      // menu buttons on transparent menu
      floatingBtnColor: "#EEE",
      floatingBtnBackground: "#00000044",
      floatingBtnSize: null,
      floatingBtnRadius: null,
      floatingBtnMargin: null,
      floatingBtnShadow: '',
      floatingBtnTextShadow: '',
      floatingBtnBorder: '',
      floatingBtnColorHover: "",
      floatingBtnBackgroundHover: '',
      btnOrder: ['currentPage', 'btnFirst', 'btnPrev', 'btnNext', 'btnLast', 'btnZoomIn', 'btnZoomOut', 'btnRotateLeft', 'btnRotateRight', 'btnAutoplay', 'btnSearch', 'btnSelect', 'btnBookmark', 'btnToc', 'btnThumbs', 'btnShare', 'btnPrint', 'btnDownloadPages', 'btnDownloadPdf', 'btnSound', 'btnExpand', 'btnClose'],
      currentPage: {
        enabled: true,
        title: "Current page",
        vAlign: 'top',
        hAlign: 'left',
        marginH: 0,
        marginV: 0,
        color: '',
        background: ''
      },
      btnFirst: {
        enabled: false,
        title: "First page",
        icon: "fa-angle-double-left",
        icon2: "first_page"
      },
      btnPrev: {
        enabled: true,
        title: "Previous page",
        icon: "fa-angle-left",
        icon2: "chevron_left"
      },
      btnNext: {
        enabled: true,
        title: "Next page",
        icon: "fa-angle-right",
        icon2: "chevron_right"
      },
      btnLast: {
        enabled: false,
        title: "Last page",
        icon: "fa-angle-double-right",
        icon2: "last_page"
      },
      btnZoomIn: {
        enabled: true,
        title: "Zoom in",
        icon: "fa-plus",
        icon2: "zoom_in"
      },
      btnZoomOut: {
        enabled: true,
        title: "Zoom out",
        icon: "fa-minus",
        icon2: "zoom_out"
      },
      btnRotateLeft: {
        enabled: false,
        title: "Rotate left",
        icon: "fas fa-undo"
      },
      btnRotateRight: {
        enabled: false,
        title: "Rotate right",
        icon: "fas fa-redo"
      },
      btnAutoplay: {
        enabled: true,
        title: "Autoplay",
        icon: "fa-play",
        icon2: "play_arrow",
        iconAlt: "fa-pause",
        iconAlt2: "pause"
      },
      btnSearch: {
        enabled: false,
        title: "Search",
        icon: "fas fa-search",
        icon2: "search"
      },
      btnSelect: {
        enabled: true,
        title: "Select tool",
        icon: "fas fa-i-cursor",
        icon2: "text_format"
      },
      btnBookmark: {
        enabled: true,
        title: "Bookmark",
        icon: "fas fa-bookmark",
        icon2: "bookmark"
      },
      btnToc: {
        enabled: true,
        title: "Table of Contents",
        icon: "fa-list-ol",
        icon2: "toc"
      },
      btnThumbs: {
        enabled: true,
        title: "Pages",
        icon: "fa-th-large",
        icon2: "view_module"
      },
      btnShare: {
        enabled: true,
        title: "Share",
        icon: "fa-link",
        icon2: "share",
        hideOnMobile: true
      },
      btnPrint: {
        enabled: true,
        title: "Print",
        icon: "fa-print",
        icon2: "print",
        hideOnMobile: true
      },
      btnDownloadPages: {
        enabled: true,
        title: "Download pages",
        icon: "fa-download",
        icon2: "file_download",
        url: "images/pages.zip",
        name: "allPages.zip"
      },
      btnDownloadPdf: {
        forceDownload: false,
        enabled: true,
        title: "Download PDF",
        icon: "fa-file",
        icon2: "picture_as_pdf",
        url: null,
        openInNewWindow: true,
        name: "allPages.pdf"
      },
      btnSound: {
        enabled: true,
        title: "Volume",
        icon: "fa-volume-up",
        iconAlt: "fa-volume-off",
        icon2: "volume_up",
        iconAlt2: "volume_mute",
        hideOnMobile: true
      },
      btnExpand: {
        enabled: true,
        title: "Toggle fullscreen",
        icon: "fa-expand",
        icon2: "fullscreen",
        iconAlt: "fa-compress",
        iconAlt2: "fullscreen_exit"
      },
      btnClose: {
        title: "Close",
        icon: "fa-times",
        icon2: "close",
        hAlign: 'right',
        vAlign: 'top',
        size: 20
      },
      btnShareIfMobile: false,
      btnSoundIfMobile: false,
      btnPrintIfMobile: false,
      sideNavigationButtons: true,
      hideMenu: false,
      //share
      twitter: {
        enabled: true,
        url: null,
        description: null
      },
      facebook: {
        enabled: true,
        load_sdk: true,
        url: null,
        app_id: null,
        title: null,
        caption: null,
        description: null,
        image: null
      },
      pinterest: {
        enabled: true,
        url: null,
        image: null,
        description: null
      },
      email: {
        enabled: true,
        title: null,
        description: null,
        url: null
      },
      pdf: {
        annotationLayer: false
      },
      pageTextureSize: 2048,
      pageTextureSizeSmall: 1500,
      pageTextureSizeMobile: null,
      pageTextureSizeMobileSmall: 1024,
      //flip animation type; can be "2d", "3d" , "webgl", "swipe"
      viewMode: 'webgl',
      singlePageMode: false,
      singlePageModeIfMobile: false,
      zoomMin: .95,
      zoomMax2: null,
      zoomSize: null,
      zoomStep: 2,
      zoomTime: 300,
      zoomReset: false,
      zoomResetTime: 300,
      wheelDisabledNotFullscreen: false,
      arrowsDisabledNotFullscreen: false,
      arrowsAlwaysEnabledForNavigation: false,
      responsiveView: true,
      responsiveViewTreshold: 768,
      minPixelRatio: 1,
      //between 1 and 2, 1.5 = best ratio performance FPS / image quality
      pageFlipDuration: 1,
      contentOnStart: false,
      thumbnailsOnStart: false,
      searchOnStart: false,
      sideMenuOverBook: true,
      sideMenuOverMenu: false,
      sideMenuOverMenu2: true,
      //lightbox settings
      lightBox: false,
      lightBoxOpened: false,
      lightBoxFullscreen: false,
      lightboxCloseOnClick: false,
      lightboxResetOnOpen: true,
      lightboxBackground: null,
      //CSS of flipbook background, rgba or hexadecimal color or bg image, for example 'rgba(0,0,0,.5)' or '#F0F0F0' or 'url("overlay.png" ) repeat'
      lightboxBackgroundColor: null,
      lightboxBackgroundPattern: null,
      lightboxBackgroundImage: null,
      lightboxStartPage: null,
      lightboxMarginV: '0',
      lightboxMarginH: '0',
      lightboxCSS: '',
      lightboxPreload: false,
      lightboxShowMenu: false,
      // show menu while book is loading so lightbox can be closed
      // WebGL settings
      disableImageResize: true,
      //disable image resize to power of 2 (needed for anisotropic filtering)
      pan: 0,
      panMax: 10,
      panMax2: 2,
      panMin: -10,
      panMin2: -2,
      tilt: 0,
      tiltMax: 0,
      tiltMax2: 0,
      tiltMin: -20,
      tiltMin2: -5,
      rotateCameraOnMouseMove: false,
      rotateCameraOnMouseDrag: true,
      lights: true,
      lightColor: 0xFFFFFF,
      lightPositionX: 0,
      lightPositionZ: 1400,
      lightPositionY: 350,
      lightIntensity: .6,
      shadows: true,
      shadowMapSize: 1024,
      shadowOpacity: .2,
      shadowDistance: 15,
      pageRoughness: 1,
      pageMetalness: 0,
      pageHardness: 2,
      coverHardness: 2,
      pageSegmentsW: 5,
      pageSegmentsH: 1,
      pageMiddleShadowSize: 2,
      pageMiddleShadowColorL: "#999999",
      pageMiddleShadowColorR: "#777777",
      antialias: false,
      // preloader
      preloaderText: '',
      fillPreloader: {
        enabled: false,
        imgEmpty: "images/logo_light.png",
        imgFull: "images/logo_dark.png"
      },
      // logo
      logoImg: '',
      //url of logo image
      logoUrl: '',
      // url target 
      logoCSS: 'position:absolute;',
      logoHideOnMobile: false,
      printMenu: true,
      downloadMenu: true,
      cover: true,
      backCover: true,
      textLayer: false,
      googleAnalyticsTrackingCode: null,
      minimumAndroidVersion: 6,
      linkColor: 'rgba(255, 255, 0, .05)',
      linkColorHover: 'rgba(255, 255, 0, .2)',
      // loadExtraPages:5,
      strings: {
        print: "Print",
        printLeftPage: "Print left page",
        printRightPage: "Print right page",
        printCurrentPage: "Print current page",
        printAllPages: "Print all pages",
        download: "Download",
        downloadLeftPage: "Download left page",
        downloadRightPage: "Download right page",
        downloadCurrentPage: "Download current page",
        downloadAllPages: "Download all pages",
        bookmarks: "Bookmarks",
        bookmarkLeftPage: "Bookmark left page",
        bookmarkRightPage: "Bookmark right page",
        bookmarkCurrentPage: "Bookmark current page",
        search: "Search",
        findInDocument: "Find in document",
        pagesFoundContaining: "pages found containing",
        thumbnails: "Thumbnails",
        tableOfContent: "Table of Contents",
        share: "Share",
        pressEscToClose: "Press ESC to close"
      },
      //mobile devices settings - override any setting for mobile devices
      mobile: {}
    };

    FLIPBOOK.Main = function (options, elem) {
      var self = this;
      this.elem = elem;
      this.$elem = jQuery(elem);
      this.$body = jQuery("body");
      this.body = this.$body[0];
      this.$window = jQuery(window);

      this.bodyHasVerticalScrollbar = function () {
        return self.body.scrollHeight > window.innerHeight;
      };

      this.isZoomed = function () {
        return self.zoom > 1;
      }; // console.log(this.fullscreenFlipbook)


      this.options = {};

      var dummyStyle = document.createElement('div').style,
          vendor = function () {
        var vendors = 't,webkitT,MozT,msT,OT'.split(','),
            t,
            i = 0,
            l = vendors.length;

        for (; i < l; i++) {
          t = vendors[i] + 'ransform';

          if (t in dummyStyle) {
            return vendors[i].substr(0, vendors[i].length - 1);
          }
        }

        return false;
      }(),
          prefixStyle = function prefixStyle(style) {
        if (vendor === '') return style;
        style = style.charAt(0).toUpperCase() + style.substr(1);
        return vendor + style;
      },
          isAndroid = /android/gi.test(navigator.appVersion),
          isIDevice = /iphone|ipad/gi.test(navigator.appVersion),
          has3d = prefixStyle('perspective') in dummyStyle;

      this.msie = window.navigator.userAgent.indexOf("MSIE ");
      this.isAndroid = isAndroid;
      this.has3d = has3d; //detect webgl

      function webgl_detect(return_context) {
        if (!!window.WebGLRenderingContext) {
          var canvas = document.createElement("canvas"),
              names = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"],
              context = false;

          for (var i = 0; i < 4; i++) {
            try {
              context = canvas.getContext(names[i]);

              if (context && typeof context.getParameter == "function") {
                // WebGL is enabled
                if (return_context) {
                  // return WebGL object if the function's argument is present
                  return {
                    name: names[i],
                    gl: context
                  };
                }

                FLIPBOOK.hasWebGl = true; // else, return just true

                return true;
              }
            } catch (e) {}
          } // WebGL is supported, but disabled
          //return true;


          FLIPBOOK.hasWebGl = false;
          return false;
        } // WebGL not supported


        FLIPBOOK.hasWebGl = false;
        return false;
      }

      function getInternetExplorerVersion() {
        var rv = -1;

        if (navigator.appName == 'Microsoft Internet Explorer') {
          var ua = navigator.userAgent;
          var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
          if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
        } else if (navigator.appName == 'Netscape') {
          var ua = navigator.userAgent;
          var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
          if (re.exec(ua) != null) rv = parseFloat(RegExp.$1);
        }

        return rv;
      }

      if (typeof FLIPBOOK.hasWebGl == 'undefined') webgl_detect();
      this.hasWebGl = FLIPBOOK.hasWebGl;
      var IEversion = getInternetExplorerVersion();

      if (IEversion > 0) {
        this.hasWebGl = false;
        this.options.isIE = true;
      }

      this.thumbsShowing = false;
      this.bookmarkShowing = false;
      this.searchingString = false;
      this.tocShowing = false;
      this.menuShowing = true;
      this.fullscreenActive = false; // UI layouts

      var layouts = {
        "2": {
          // bottom 2
          currentPage: {
            vAlign: 'bottom',
            hAlign: 'center'
          },
          btnAutoplay: {
            hAlign: 'left'
          },
          btnSound: {
            hAlign: 'left'
          },
          btnExpand: {
            hAlign: 'right'
          },
          btnZoomIn: {
            hAlign: 'right'
          },
          btnZoomOut: {
            hAlign: 'right'
          },
          btnSearch: {
            hAlign: 'left'
          },
          btnBookmark: {
            hAlign: 'left'
          },
          btnToc: {
            hAlign: 'left'
          },
          btnThumbs: {
            hAlign: 'left'
          },
          btnShare: {
            hAlign: 'right'
          },
          btnPrint: {
            hAlign: 'right'
          },
          btnDownloadPages: {
            hAlign: 'right'
          },
          btnDownloadPdf: {
            hAlign: 'right'
          },
          btnSelect: {
            hAlign: 'right'
          }
        },
        "3": {
          // top 
          menuTransparent: true,
          menu2Transparent: false,
          menu2OverBook: false,
          menu2Padding: 5,
          btnMargin: 5,
          currentPage: {
            vAlign: 'top',
            hAlign: 'center'
          },
          btnPrint: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnDownloadPdf: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnDownloadPages: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnThumbs: {
            vAlign: 'top',
            hAlign: 'left'
          },
          btnToc: {
            vAlign: 'top',
            hAlign: 'left'
          },
          btnBookmark: {
            vAlign: 'top',
            hAlign: 'left'
          },
          btnSearch: {
            vAlign: 'top',
            hAlign: 'left'
          },
          btnSelect: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnShare: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnAutoplay: {
            hAlign: 'right'
          },
          btnExpand: {
            hAlign: 'right'
          },
          btnZoomIn: {
            hAlign: 'right'
          },
          btnZoomOut: {
            hAlign: 'right'
          },
          btnSound: {
            hAlign: 'right'
          },
          menuPadding: 5
        },
        "4": {
          // top 2
          menu2Transparent: false,
          menu2OverBook: false,
          sideMenuOverMenu2: false,
          currentPage: {
            vAlign: 'top',
            hAlign: 'center'
          },
          btnAutoplay: {
            vAlign: 'top',
            hAlign: 'left'
          },
          btnSound: {
            vAlign: 'top',
            hAlign: 'left'
          },
          btnExpand: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnZoomIn: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnZoomOut: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnSearch: {
            vAlign: 'top',
            hAlign: 'left'
          },
          btnBookmark: {
            vAlign: 'top',
            hAlign: 'left'
          },
          btnToc: {
            vAlign: 'top',
            hAlign: 'left'
          },
          btnThumbs: {
            vAlign: 'top',
            hAlign: 'left'
          },
          btnShare: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnPrint: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnDownloadPages: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnDownloadPdf: {
            vAlign: 'top',
            hAlign: 'right'
          },
          btnSelect: {
            vAlign: 'top',
            hAlign: 'right'
          }
        }
      };
      var skins = {
        'dark': {
          skinColor: "#EEE",
          btnColorHover: "#FFF",
          skinBackground: "#313538"
        },
        'light': {
          skinColor: "#222",
          btnColorHover: "#000",
          skinBackground: "#FFF",
          floatingBtnColor: "#FFF",
          floatingBtnBackground: "#00000055"
        },
        'gradient': {
          skinColor: "#EEE",
          btnColor: "#EEE",
          btnColorHover: "#FFF",
          skinBackground: "#313538DD",
          zoomMin: .85,
          menuOverBook: true,
          menu2OverBook: true,
          sideMenuOverMenu: true,
          sideMenuOverMenu2: true,
          menuBackground: 'linear-gradient(to top, rgba(0, 0, 0, 0.65) 0%, transparent 100%)',
          menu2Background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.65) 0%, transparent 100%)'
        }
      };

      for (var key in skins) {
        if (options.skin == key) options = jQuery.extend(true, {}, skins[key], options);
      }

      for (var key in layouts) {
        if (String(options.layout) === key) options = jQuery.extend(true, {}, layouts[key], options);
      } //default options are overridden by options object passed to plugin constructor


      this.options = jQuery.extend(true, {}, jQuery.fn.flipBook.options, options);
      var o = this.options;
      o.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (o.isMobile) {
        for (var key in o.mobile) {
          o[key] = o.mobile[key];
        }
      }

      this.strings = o.strings;
      o.pageShininess = o.pageShininess / 2;
      this.s = 0;

      if (o.googleAnalyticsTrackingCode) {
        this.gaCode = o.googleAnalyticsTrackingCode;

        if (!window.ga) {
          (function (i, s, o, g, r, a, m) {
            i['GoogleAnalyticsObject'] = r;
            i[r] = i[r] || function () {
              (i[r].q = i[r].q || []).push(arguments);
            }, i[r].l = 1 * new Date();
            a = s.createElement(o), m = s.getElementsByTagName(o)[0];
            a.async = 1;
            a.src = g;
            m.parentNode.insertBefore(a, m);
          })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
        }

        ga('create', this.gaCode, 'auto');
      } //// - not needed?
      // jQuery('head').append("<meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />");


      if (o.isMobile) {
        o.singlePageMode = o.singlePageModeIfMobile ? true : o.singlePageMode;
        if (o.viewModeMobile) o.viewMode = o.viewModeMobile;
        if (o.pageTextureSizeMobile) o.pageTextureSize = o.pageTextureSizeMobile;
        if (o.pageTextureSizeMobileSmall) o.pageTextureSizeSmall = o.pageTextureSizeMobileSmall;
      }

      if (o.viewMode == "3dSinglePage") {
        o.singlePageMode = true;
      }

      if (o.viewMode == "2dSinglePage") {
        o.singlePageMode = true;
        o.viewMode = "2d";
      }

      if (o.singlePageMode) {
        if (o.viewMode != '2d' && o.viewMode != 'swipe') o.viewMode = '3d';
        if (o.rightToLeft) o.viewMode = 'swipe';
      }

      if (o.singlePageMode && o.viewMode == "3d") o.rightToLeft = false;

      if (o.viewMode == "simple") {
        o.viewMode = "3d";
        o.instantFlip = true;
      }

      function getAndroidVersion(ua) {
        ua = (ua || navigator.userAgent).toLowerCase();
        var match = ua.match(/android\s([0-9\.]*)/);
        return match ? match[1] : false;
      }

      ;

      if (o.viewMode == 'webgl') {
        if (!this.hasWebGl || parseFloat(getAndroidVersion()) < o.minimumAndroidVersion && this.isAndroid) o.viewMode = '3d';
      }

      if (o.viewMode == '3d' && !self.has3d) o.viewMode = '2d';
      this.webgl = o.viewMode == 'webgl';

      if (o.menuFloating) {
        o.menuOverBook = true;
        o.sideMenuOverMenu = true;
      }

      if (o.menu2Floating) {
        o.menu2OverBook = true;
        o.sideMenuOverMenu2 = true;
      }

      if (o.menuTransparent) {
        o.menuOverBook = true;
        o.sideMenuOverMenu = true;
        o.menuBackground = 'none';
      }

      if (o.menu2Transparent) {
        o.menu2OverBook = true;
        o.sideMenuOverMenu2 = true;
        o.menu2Background = 'none';
      } else {
        o.sideMenuOverMenu2 = false;
      }

      if (o.menuOverBook) o.sideMenuOverMenu = true;
      if (o.menu2OverBook) o.sideMenuOverMenu2 = true;

      if (o.isMobile && o.pdfBrowserViewerIfMobile && o.pdfUrl) {
        // if( options.pdfBrowserViewerIfMobile && options.pdfUrl){  // TEST mobile = true
        if (o.lightBox && !o.lightBoxOpened) {
          this.$elem.on("touched click", function () {
            openPdfBrowserViewer();
          }).css('cursor', 'pointer');
        } else {
          openPdfBrowserViewer();
        }

        return;
      }

      if (o.isIE && o.pdfBrowserViewerIfIE && o.pdfUrl) {
        // if( options.pdfBrowserViewerIfMobile && options.pdfUrl){  // TEST mobile = true
        if (o.lightBox && !o.lightBoxOpened) {
          this.$elem.on("touched click", function () {
            openPdfBrowserViewer();
          }).css('cursor', 'pointer');
        } else {
          openPdfBrowserViewer();
        }

        return;
      }

      function openPdfBrowserViewer() {
        if (o.pdfBrowserViewerFullscreen) {
          window.open(o.pdfUrl, o.pdfBrowserViewerFullscreenTarget);
        } else {
          jQuery('<object type="application/pdf"/>').width("100%").height("100%").attr('data', o.pdfUrl).appendTo(self.$elem); //<div> <object data="test.pdf" type="application/pdf" width="300" height="200"> alt : <a href="test.pdf">test.pdf</a> </object> </div>
        }
      }

      o.pdfMode = Boolean(o.pdfUrl && o.pdfUrl != "");
      if (o.backgroundTransparent) o.backgroundColor = 'none';
      this.wrapper = jQuery(document.createElement('div')).addClass('flipbook-main-wrapper');
      if (o.backgroundColor != "") this.wrapper.css('background', o.backgroundColor);
      if (o.backgroundPattern != "") this.wrapper.css('background', 'url(' + o.backgroundPattern + ') repeat');

      if (o.backgroundImage != "") {
        this.wrapper.css('background', 'url(' + o.backgroundImage + ') no-repeat');
        this.wrapper.css('background-size', 'cover');
        this.wrapper.css('background-position', 'center center');
      }

      this.bookLayer = jQuery(document.createElement('div')).addClass('flipbook-bookLayer').appendTo(self.wrapper);

      if (o.hideMenu) {
        this.bookLayer.css('bottom', '0');
        o.menuOverBook = true;
      }

      this.book = jQuery(document.createElement('div')).addClass('book').appendTo(self.bookLayer);
      if (o.preloader) this.preloader = o.preloader;else if (!jQuery('.flipbook-preloader').length && o.lightBox) this.preloader = jQuery('<div class="flipbook-preloader cssload-container"><div class="cssload-speeding-wheel"/><div class="flipbook-loading-text"></div><div class="flipbook-loading-bg"></div></div>');else if (!o.lightBox) this.preloader = jQuery('<div class="flipbook-preloader-2 cssload-container"><div class="cssload-speeding-wheel"/><div class="flipbook-loading-text"></div><div class="flipbook-loading-bg"></div></div>');else this.preloader = jQuery('.flipbook-preloader');
      jQuery('.flipbook-loading-text').text(o.preloaderText);
      this.setLoadingProgress(0);

      function checkHash() {
        if (self.disposed) return;
        var fullHash = window.location.hash;
        var targetPage = self.getPageFromHash(),
            startPage = targetPage;

        if (targetPage) {
          targetPage = o.rightToLeft ? o.pages.length - targetPage + 1 : targetPage;

          if (!self.started) {
            o.startPage = startPage;

            if (o.lightBox) {
              init();

              if (o.lightBoxFullscreen) {
                setTimeout(function () {
                  self.toggleExpand();
                }, 100);
              }
            }
          } else if (self.Book) {
            if (self.lightbox) {
              self.lightbox.openLightbox();
              self.lightboxStart();
            }

            self.goToPage(targetPage, fullHash.indexOf('flip') == -1);
          }
        }
      }

      if (!o.deeplinkingPrefix && o.deeplinking && o.deeplinking.prefix) o.deeplinkingPrefix = o.deeplinking.prefix;
      o.deeplinkingEnabled = o.deeplinkingPrefix || o.deeplinkingEnabled || o.deeplinking && o.deeplinking.enabled;

      if (o.deeplinkingEnabled) {
        checkHash();
        jQuery(window).bind('hashchange', function (e) {
          checkHash();
        });
      }

      function preload() {
        if (typeof IScroll == 'undefined' && !FLIPBOOK.scriptsAdded[FLIPBOOK.iscrollSrc]) {
          self.loadScript(FLIPBOOK.iscrollSrc, function () {});
        }

        if (typeof FLIPBOOK.PdfService == 'undefined' && !FLIPBOOK.scriptsAdded[FLIPBOOK.pdfServiceSrc]) {
          self.loadScript(FLIPBOOK.pdfServiceSrc, function () {});
        }

        if (o.pdfMode) {
          if (typeof pdfjsLib == 'undefined' && !FLIPBOOK.scriptsAdded[FLIPBOOK.pdfjsSrc]) {
            self.loadScript(FLIPBOOK.pdfjsSrc, function () {});
          } // if (!FLIPBOOK.scriptsAdded[FLIPBOOK.pdfjsworkerSrc]) {
          //     self.loadScript(FLIPBOOK.pdfjsworkerSrc, function() {})
          // }


          if (typeof FLIPBOOK.PdfService == 'undefined' && !FLIPBOOK.scriptsAdded[FLIPBOOK.pdfServiceSrc]) {
            self.loadScript(FLIPBOOK.pdfServiceSrc, function () {});
          }

          if (o.btnSearch.enabled) {
            if (!FLIPBOOK.scriptsAdded[FLIPBOOK.markSrc]) {
              self.loadScript(FLIPBOOK.markSrc, function () {});
            }
          }
        }

        if (o.viewMode == "webgl") {
          if (typeof THREE == 'undefined' && !FLIPBOOK.scriptsAdded[FLIPBOOK.threejsSrc]) {
            self.loadScript(FLIPBOOK.threejsSrc, function () {});
          } // if (!FLIPBOOK.scriptsAdded[FLIPBOOK.flipbookWebGlSrc]) {
          // self.loadScript(FLIPBOOK.flipbookWebGlSrc, function() {})
          // }

        }
      }

      function init() {
        if (o.fillPreloader.enabled) {
          self.$fillPreloader = jQuery("<div>").addClass("flipbook-fillPreloader");
          var empty = new Image();
          empty.src = o.fillPreloader.imgEmpty;

          empty.onload = function () {
            var full = new Image();
            full.src = o.fillPreloader.imgFull;

            full.onload = function () {
              //fill preloder ready
              jQuery(empty).appendTo(self.$fillPreloader);
              self.$fillPreloaderImg = jQuery(full).appendTo(self.$fillPreloader);
              self.$fillPreloader.appendTo(self.wrapper);
              initBook();
            };
          };
        } else {
          initBook();
        }
      }

      function initBook() {
        self.id = Date.now();
        self.addPageItems();
        if (o.pdfMode) self.initPdf();else {
          o.btnSearch.enabled = false;
          self.initJpg();
        }
        self.setLoadingProgress(.1);
        if (self.lightbox && self.options.lightboxShowMenu) self.createMenu();
      }

      this.dispose = function () {
        this.disposed = true;
      };

      o.main = this;
      var model = {
        _events: {},
        on: function on(type, fn) {
          if (!this._events[type]) {
            this._events[type] = [];
          }

          this._events[type].push(fn);
        },
        off: function off(type, fn) {
          if (!this._events[type]) {
            return;
          }

          var index = this._events[type].indexOf(fn);

          if (index > -1) {
            this._events[type].splice(index, 1);
          }
        },
        trigger: function trigger(type) {
          if (!this._events[type]) {
            return;
          }

          var i = 0,
              l = this._events[type].length;

          if (!l) {
            return;
          }

          for (; i < l; i++) {
            this._events[type][i].apply(this, [].slice.call(arguments, 1));
          }
        }
      };
      model.on('pageLoaded', function (e) {
        o.pages[e.index] = o.pages[e.index] || {};
        o.pages[e.index].canvas = o.pages[e.index].canvas || {};
        o.pages[e.index].canvas[e.size] = e.canvas;
        if (self.searchingString) self.mark(self.searchingString);
      });
      model.on('pageUnloaded', function (e) {
        e.unloadedPages.forEach(function (elem) {
          if (self.Book.onPageUnloaded) self.Book.onPageUnloaded(elem.index, elem.size);
        });
      });
      model.on('pdfinit', function () {
        o.tableOfContent = self.pdfService.outline || o.tableOfContent;
        o.doublePage = self.pdfService["double"];
        self.viewportOriginal = self.pdfService.viewports[0];
        o.firstPage = {
          width: self.pdfService.viewports[0].width,
          height: self.pdfService.viewports[0].height,
          ratio: self.pdfService.viewports[0].width / self.pdfService.viewports[0].height
        };
        if (self.pdfService.numPages > 1) o.secondPage = {
          width: self.pdfService.viewports[1].width,
          height: self.pdfService.viewports[1].height,
          ratio: self.pdfService.viewports[1].width / self.pdfService.viewports[1].height
        };
        o.numPages = self.pdfService.numPages;

        if (o.numPages == 1) {
          o.viewMode = "swipe";
          o.singlePageMode = true;
          o.btnNext.enabled = false;
          o.btnPrev.enabled = false;
          o.btnFirst.enabled = false;
          o.btnLast.enabled = false;
          o.sideNavigationButtons = false;
          o.btnAutoplay.enabled = false;
          o.printMenu = false;
          o.downloadMenu = false;
          self.webgl = false;
        }

        var pages = [];

        for (var i = 0; i < o.numPages; i++) {
          var p = {
            canvas: {}
          };

          if (o.pages && o.pages[i]) {
            jQuery.extend(p, o.pages[i]);
          } else {
            p.title = i + 1;
          }

          pages[i] = p;
        }

        o.pages = pages;
        var bh = self.book.height(); //var pageSize = 1000

        var pageSize = o.pageTextureSize;
        o.pageWidth = parseInt(pageSize * self.viewportOriginal.width / self.viewportOriginal.height);
        o.pageHeight = pageSize;
        o.pw = o.pageWidth;
        o.ph = o.pageHeight;
        o.zoomSize = o.zoomSize || o.pageTextureSize;
        self.start();
      });
      model.on("toolSelect", function () {
        self.bookLayer.removeClass("flipbook-move");
        if (self.btnSelect) self.btnSelect.addClass("flipbook-btn-active");
        jQuery('.flipbook-page-htmlContent').css('userSelect', 'auto');
      });
      model.on("toolMove", function () {
        self.bookLayer.addClass("flipbook-move");
        if (self.btnSelect) self.btnSelect.removeClass("flipbook-btn-active");
        jQuery('.flipbook-page-htmlContent').css('userSelect', 'none');
      });
      this.model = model;

      if (o.lightBox) {
        o.btnClose.enabled = true;
        this.lightbox = new FLIPBOOK.Lightbox(this, this.wrapper, o);
        this.lightboxStartedTimes = 0;
        this.wrapper.css('background', 'none');
        this.bookLayer.css('background', 'none');
        this.book.css('background', 'none');
        this.preloader.appendTo(this.$body).css('position', 'fixed');
        this.$elem.css('cursor', 'pointer').bind('tap click', function (e) {
          self.lightboxStartPage = jQuery(this).attr("data-page");

          if (self.started) {
            self.lightboxStart();

            if (o.lightBoxFullscreen) {
              setTimeout(function () {
                self.toggleExpand();
              }, 0);
            }
          } else {
            init();

            if (o.lightBoxFullscreen) {
              setTimeout(function () {
                self.toggleExpand();
              }, 100);
            }
          }
        });

        if (o.lightBoxOpened) {
          init();
          jQuery(this).trigger('lightboxLoadingStarted');
        } else if (o.lightboxPreload) {
          preload();
        }

        this.fullscreenElement = document.documentElement;
      } else {
        o.btnClose.enabled = false;
        this.preloader.appendTo(this.wrapper);
        this.wrapper.appendTo(this.$elem);
        this.fullscreenElement = this.$elem[0];
        init();
      }
    };

    FLIPBOOK.Main.prototype = {
      start: function start() {
        if (this.options.dp) {
          this.options.doublePage = true;
        }

        if (this.started) return;
        this.model.pageW = this.options.pageWidth;
        this.model.bookW = 2 * this.options.pageWidth;
        if (this.options.singlePageMode) this.model.bookW /= 2;
        this.model.pageH = this.options.pageHeight;
        this.model.bookH = this.options.pageHeight; // if (this.options.numPages == 1) {
        //     this.options.viewMode = "3d"
        //     this.webgl = false
        // }

        if (this.options.numPages % 2 == 0) {
          this.options.numSheets = (this.options.numPages + 2) / 2;
        } else {
          this.options.numSheets = (this.options.numPages + 1) / 2;
        } // if(!this.options.backCover)
        //     this.options.numSheets++;


        this.started = true;

        if (this.options.lightBox) {
          this.lightbox.openLightbox();
          this.lightboxStart();
        }

        this.createBook();
        this.updateSkinColors();
      },
      updateSkinColors: function updateSkinColors() {
        var o = this.options;
        if (o.skinColor) this.wrapper.find('.skin-color').css('color', o.skinColor);
        if (o.skinBackground) this.wrapper.find('.skin-color-bg').css('background', o.skinBackground);
      },
      lightboxStart: function lightboxStart() {
        var self = this;
        if (!this.started) this.start();

        if (typeof this.Book == 'undefined') {
          setTimeout(function () {
            self.lightboxStart();
          }, 100);
          return;
        }

        this.Book.enable();
        if (this.lightboxStartPage) this.goToPage(this.lightboxStartPage, true);else if (this.options.lightboxStartPage) this.goToPage(this.options.lightboxStartPage, true);
        this.lightboxStartedTimes++;

        if (this.gaCode) {
          ga('send', {
            hitType: 'event',
            eventCategory: 'Flipbook : ' + this.options.name,
            eventAction: 'lightbox open',
            eventLabel: 'lightbox open',
            eventValue: this.lightboxStartedTimes,
            nonInteraction: true
          });
        }

        this.updateCurrentPage();
        this.initColors();
        this.resize();
        jQuery(this).trigger('lightboxOpened');
      },
      setHash: function setHash(page) {
        if (page < 1) page = 1;
        if (this.options.deeplinkingEnabled && this.Book.enabled) window.location.hash = "#" + this.options.deeplinkingPrefix + String(page);
      },
      clearHash: function clearHash() {
        var scrollV,
            scrollH,
            loc = window.location;
        if ("pushState" in history) history.pushState("", document.title, loc.pathname + loc.search);else {
          // Prevent scrolling by storing the page's current scroll offset
          scrollV = document.body.scrollTop;
          scrollH = document.body.scrollLeft;
          loc.hash = ""; // Restore the scroll offset, should be flicker free

          document.body.scrollTop = scrollV;
          document.body.scrollLeft = scrollH;
        }
      },
      getPageFromHash: function getPageFromHash() {
        var page = null;
        var string = window.location.hash,
            substring = "#" + this.options.deeplinkingPrefix,
            hasPrefix = string.indexOf(substring) !== -1;

        if (hasPrefix) {
          page = parseInt(window.location.hash.replace(/#/g, '').replace(this.options.deeplinkingPrefix, ""));
          if (isNaN(page)) page = 0;
        }

        return page;
      },
      initColors: function initColors() {
        this.wrapper.find(".skin-color-bg").removeClass("flipbook-bg-light").removeClass("flipbook-bg-dark").addClass("flipbook-bg-" + this.options.skin);
        this.wrapper.find(".skin-color").removeClass("flipbook-color-light").removeClass("flipbook-color-dark").addClass("flipbook-color-" + this.options.skin);
        this.updateSkinColors();
      },
      lightboxEnd: function lightboxEnd() {
        if (typeof screenfull != "undefined" && screenfull.isFullscreen) screenfull.exit();

        if (window.location.hash) {
          // var urlWithoutHash = document.location.href.replace(location.hash , "" );
          this.clearHash();
        }

        this.setLoadingProgress(1);
        this.Book.disable();
      },
      turnPageComplete: function turnPageComplete() {
        this.animating = false;
        this.updateCurrentPage(); //autoplay

        var rightIndex = this.Book.rightIndex || 0;
        /* if ((rightIndex > this.options.pages.length - 1) && this.autoplay) {
             this.toggleAutoplay(false)
         }*/

        if (this.options.rightToLeft) rightIndex = this.options.pages.length - rightIndex;
        if (this.pdfService) this.pdfService.setRightIndex(rightIndex);
        if (this.options.zoomReset) this.Book.zoomTo(this.options.zoomMin);
      },
      updateCurrentPage: function updateCurrentPage() {
        var rtl = this.options.rightToLeft,
            total = this.options.numPages,
            rightIndex = this.Book.rightIndex || 0,
            s;
        if (rtl) rightIndex = this.options.pages.length - rightIndex;

        if (this.options.singlePageMode || this.Book.singlePage) {
          if (rtl) rightIndex--;
          s = rightIndex + 1;
          this.currentPageNumber = rightIndex;
          this.setHash(s);
          this.cPage = [rightIndex];
        } else {
          if (rightIndex > total || rightIndex == total && total % 2 == 0) {
            s = total;
            this.cPage = [total - 1];
          } else if (rightIndex < 1) {
            s = 1;
            this.cPage = [0];
          } else {
            s = String(rightIndex) + '-' + String(rightIndex + 1);
            this.cPage = [rightIndex - 1, rightIndex];
          }

          this.setHash(rightIndex);
        }

        if (rtl) {
          this.enableNext(rightIndex > 0);
          this.enablePrev(rightIndex < total - 1);
        } else {
          this.enablePrev(rightIndex > 0);
          this.enableNext(rightIndex < total - 1);
        }

        if (this.cPage.length == 2) {
          this.wrapper.find(".c-l-p").show();
          this.wrapper.find(".c-r-p").show();
          this.wrapper.find(".c-p").hide();
        } else {
          this.wrapper.find(".c-l-p").hide();
          this.wrapper.find(".c-r-p").hide();
          this.wrapper.find(".c-p").show();
        }

        if (typeof this.currentPage === 'undefined') return;
        this.s && this.options.pdfPageScale > 0 && this.goToPage(0);

        if (s != this.currentPageValue) {
          this.currentPageValue = String(s);
          this.currentPage.text(s + ' / ' + String(total));
          this.currentPageInput.width(this.currentPageHolder.width());
          this.resize(); // console.log(this.currentPageValue)

          jQuery(this).trigger({
            type: "pagechange",
            page: this.currentPageValue,
            name: this.options.name
          });
        }
      },
      initJpg: function initJpg() {
        var self = this;

        if (this.options.numPages == 1) {
          this.options.viewMode = "swipe";
          this.options.singlePageMode = true;
          this.webgl = false;
        }

        this.loadPage(0, this.options.pageTextureSize, function () {
          self.setLoadingProgress(.5);

          if (self.options.pages.length == 1) {
            var p1 = self.options.pages[0].img;
            self.options.pw = p1.width;
            self.options.ph = p1.height;
            self.options.pageWidth = p1.width;
            self.options.pageHeight = p1.height;
            self.options.pageMode = 'singlePage';
            self.options.doublePage = false;
            self.options.zoomSize = self.options.zoomSize || p1.height;
            self.setLoadingProgress(.7);
            self.options.btnNext.enabled = false;
            self.options.btnPrev.enabled = false;
            self.options.btnFirst.enabled = false;
            self.options.btnLast.enabled = false;
            self.options.sideNavigationButtons = false;
            self.options.btnAutoplay.enabled = false;
            self.start();
          } else {
            self.loadPage(1, self.options.pageTextureSize, function () {
              var p1 = self.options.pages[0].img;
              var p2 = self.options.pages[1].img;
              var r1 = p1.width / p1.height;
              var r2 = p2.width / p2.height;
              self.options.pw = p1.width;
              self.options.ph = p1.height;
              self.options.pageWidth = p1.width;
              self.options.pageHeight = p1.height;
              self.options.doublePage = r2 / r1 > 1.5;
              self.options.zoomSize = self.options.zoomSize || p1.height;
              self.setLoadingProgress(.7);
              self.start();
            });
          }
        });
      },
      initPdf: function initPdf() {
        if (this.started) return;
        if (this.options.viewMode == "swipe" || this.options.btnSearch && this.options.btnSearch.enabled) this.options.textLayer = true;
        this.options.textLayer = true;
        var self = this;

        if (typeof pdfjsLib == 'undefined') {
          if (!FLIPBOOK.scriptsAdded[FLIPBOOK.pdfjsSrc]) {
            self.loadScript(FLIPBOOK.pdfjsSrc, function () {
              self.initPdf();
            });
            return;
          }

          if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.pdfjsSrc]) {
            setTimeout(function () {
              self.initPdf();
            }, 100);
            return;
          }
        }

        this.setLoadingProgress(.2);

        if (typeof FLIPBOOK.PdfService == 'undefined') {
          if (!FLIPBOOK.scriptsAdded[FLIPBOOK.pdfServiceSrc]) {
            self.loadScript(FLIPBOOK.pdfServiceSrc, function () {
              self.initPdf();
            });
            return;
          }

          if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.pdfServiceSrc]) {
            setTimeout(function () {
              self.initPdf();
            }, 100);
            return;
          }
        }

        this.setLoadingProgress(.3); //fix for IE10

        if (window.CanvasPixelArray) {
          CanvasPixelArray.prototype.set = function (arr) {
            var l = this.length,
                i = 0;

            for (; i < l; i++) {
              this[i] = arr[i];
            }
          };
        }

        PDFJS = pdfjsLib; //PDFJS.disableWorker = this.options.disableWorker || false;

        pdfjsLib.externalLinkTarget = pdfjsLib.LinkTarget.BLANK;
        pdfjsLib.GlobalWorkerOptions.workerSrc = this.options.pdfjsworkerSrc || FLIPBOOK.pdfjsworkerSrc; // PDFJS.disableAutoFetch = true;
        // PDFJS.disableStream = true;
        // PDFJS.cMapUrl = 'cmaps/';
        // PDFJS.cMapPacked = true;
        //match page protocol

        if (location.protocol == "https:") self.options.pdfUrl = self.options.pdfUrl.replace("http://", "https://");else if (location.protocol == "http:") self.options.pdfUrl = self.options.pdfUrl.replace("https://", "http://");
        var params = {
          cMapPacked: true,
          cMapUrl: "cmaps/",
          // disableAutoFetch: false,
          // disableCreateObjectURL: false,
          // disableFontFace: false,
          // disableRange: false,
          disableAutoFetch: true,
          disableStream: true,
          // isEvalSupported: true,
          // maxImageSize: -1,
          // pdfBug: false,
          // postMessageTransfers: true,
          url: self.options.pdfUrl,
          rangeChunkSize: Number(self.options.rangeChunkSize) * 1024 // verbosity: 1

        };
        if (this.pdfinitStarted) return;
        this.pdfinitStarted = true;
        var loadingTask = pdfjsLib.getDocument(params);
        loadingTask.promise.then(function (pdf) {
          self.pdfDocument = pdf;
          self.pdfService = new FLIPBOOK.PdfService(pdf, self.model, self.options);

          self.options.thumbLoaded = function (c) {
            self.options.thumbs = self.options.thumbs || [];
            self.options.thumbs[c.index] = c;
          };

          self.setLoadingProgress(.5);
          self.pdfService.init();
        }, function error(e) {
          alert(e);
        });
      },
      loadPageHTML: function loadPageHTML(index, callback) {
        var self = this,
            index = index,
            options = this.options;

        if (this.options.pdfMode) {
          this.pdfService.loadTextLayer(index, function (page) {
            callback.call(self, self.options.pages[index].htmlContent);
          });
        } else if (options.pages[index].json) {
          this.loadPageJSON(index, function (json) {
            var page = options.pages[index] || {};

            if (!page.htmlContentInitialized) {
              var h = document.createElement('div');
              h.classList.add('flipbook-page-htmlContent');
              h.classList.add('page' + String(index));
              h.innerHTML = decodeURIComponent(json.data);
              if (page.htmlContent) jQuery(h).append(jQuery(page.htmlContent));
              page.htmlContent = h;
              jQuery(page.htmlContent).find(".internalLink").each(function () {
                var main = self;

                this.onclick = function () {
                  var num = Number(this.dataset.page);
                  num = main.options.rightToLeft ? main.options.pages.length - num + 1 : num;
                  main.goToPage(num);
                  return false;
                };
              });
              page.htmlContentInitialized = true;
            }

            callback.call(self, page.htmlContent);
          });
        } else {
          callback.call(this, options.pages[index].htmlContent);
        }
      },
      loadPageJSON: function loadPageJSON(index, callback) {
        var options = this.options,
            page = options.pages[index] || {},
            self = this;

        if (!page.jsonLoading && !page.jsonLoaded) {
          page.jsonLoading = true;
          jQuery.getJSON(page.json, function (json) {
            page.jsonLoaded = true;
            page.jsonLoading = false;
            callback.call(self, json);
          });
          return;
        }

        if (!page.jsonLoaded) {
          setTimeout(function () {
            self.loadPageJSON(index, callback);
          }, 100);
          return;
        }

        callback.call(self);
      },
      loadPage: function loadPage(index, size, callback) {
        var self = this,
            pageSrc = this.options.pages && this.options.pages[index] && this.options.pages[index].src;

        if (this.options.pdfMode && !pageSrc) {
          this.loadPageFromPdf(index, size, callback);
        } else {
          var self = this,
              page = this.options.pages[index];

          if (!page.img) {
            page.img = document.createElement('img');
            page.img.setAttribute("id", index);

            page.img.onload = function () {
              page.imgLoaded = true;

              if (page.htmlContent) {
                page.htmlContentDiv = jQuery(document.createElement('div')).addClass('flipbook-page-htmlContent').append(jQuery(page.htmlContent));
              }

              self.pageLoaded({
                index: index,
                size: size,
                image: page.img,
                htmlContent: page.htmlContentDiv
              }, callback);
            }; // crossOrigin is used only for mode webgl


            if (this.options.viewMode == "webgl") page.img.crossOrigin = 'Anonymous';
            if (location.protocol == "https:") page.src = page.src.replace("http://", "https://");else if (location.protocol == "http:") page.src = page.src.replace("https://", "http://");
            page.img.src = page.src;
          } else if (page.imgLoaded) {
            self.pageLoaded({
              index: index,
              size: size,
              image: page.img,
              htmlContent: page.htmlContentDiv
            }, callback);
          } else {
            setTimeout(function () {
              self.loadPage(index, size, callback);
            }, 300);
          }
        }
      },
      pageLoaded: function pageLoaded(page, callback) {
        callback.call(this, page, callback);

        if (this.options.loadAllPages && page.index < this.options.numPages - 1) {
          this.loadPage(page.index + 1, page.size, function () {});
        }
      },
      loadPageFromPdf: function loadPageFromPdf(pageIndex, size, callback) {
        var self = this;
        size = size || this.options.pageTextureSize;

        if (!self.options.pages[pageIndex]) {
          callback.call(self);
        } else {
          this.pdfService.renderBookPage(pageIndex, size, callback);
        }
      },
      getString: function getString(name) {
        return this.options.strings[name];
      },
      mark: function mark(str) {
        var c = jQuery('.flipbook-page-htmlContent');
        c.unmark({
          done: function done() {
            c.mark(str, {
              acrossElements: true,
              separateWordSearch: false
            });
          }
        });
      },
      unmark: function unmark() {
        this.searchingString = null;
        var c = jQuery('.flipbook-page-htmlContent');
        c.unmark();
      },
      setTool: function setTool(tool) {
        this.tool = tool;
        this.model.trigger(tool);
      },
      toggleTool: function toggleTool() {
        var tool = this.tool == "toolSelect" ? "toolMove" : "toolSelect";
        this.setTool(tool);
      },
      toggleSound: function toggleSound() {
        var o = this.options;

        if (o.sound) {
          o.sound = false;
          this.btnSound.$icon.hide();
          this.btnSound.$iconAlt.show();
        } else {
          o.sound = true;
          this.btnSound.$icon.show();
          this.btnSound.$iconAlt.hide();
        }
      },
      scrollPageIntoView: function scrollPageIntoView(obj) {
        var num = this.options.rightToLeft ? this.options.pages.length - obj.pageNumber + 1 : obj.pageNumber;
        this.goToPage(num);
      },
      loadScript: function loadScript(src, callback) {
        var self = this;
        var script = document.createElement('script');
        var prior = document.getElementsByTagName('script')[0];
        script.async = 1;
        prior.parentNode.insertBefore(script, prior);
        FLIPBOOK.scriptsAdded[src] = true;

        script.onload = script.onreadystatechange = function (_, isAbort) {
          if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = undefined;

            if (!isAbort) {
              if (callback) callback.call(self);
            }

            FLIPBOOK.scriptsLoaded[src] = true;
          }
        };

        script.src = src;
      },
      createBook: function createBook() {
        var self = this,
            model = this.model,
            options = this.options;

        if (options.icons == "material" && !FLIPBOOK.MaterialIconsLoaded) {
          FLIPBOOK.MaterialIconsLoaded = true;
          jQuery('head').append('<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">');
        }

        if (typeof IScroll == 'undefined') {
          if (!FLIPBOOK.scriptsAdded[FLIPBOOK.iscrollSrc]) {
            self.loadScript(FLIPBOOK.iscrollSrc, self.createBook);
            return;
          }

          if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.iscrollSrc]) {
            setTimeout(function () {
              self.createBook();
            }, 100);
            return;
          }
        }

        if (this.options.searchOnStart) this.options.btnSearch.enabled = true;

        if (this.options.pdfUrl && this.options.btnSearch.enabled) {
          if (!FLIPBOOK.scriptsAdded[FLIPBOOK.markSrc]) {
            self.loadScript(FLIPBOOK.markSrc, self.createBook);
            return;
          }

          if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.markSrc]) {
            setTimeout(function () {
              self.createBook();
            }, 100);
            return;
          }
        }

        self.setLoadingProgress(.9);

        if (self.options.viewMode == "webgl") {
          if (typeof THREE == 'undefined') {
            if (!FLIPBOOK.scriptsAdded[FLIPBOOK.threejsSrc]) {
              self.loadScript(FLIPBOOK.threejsSrc, self.createBook);
              return;
            }

            if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.threejsSrc]) {
              setTimeout(function () {
                self.createBook();
              }, 100);
              return;
            }
          }

          if (typeof FLIPBOOK.BookWebGL == 'undefined') {
            if (!FLIPBOOK.scriptsAdded[FLIPBOOK.flipbookWebGlSrc]) {
              self.loadScript(FLIPBOOK.flipbookWebGlSrc, self.createBook);
              return;
            }

            if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipbookWebGlSrc]) {
              setTimeout(function () {
                self.createBook();
              }, 100);
              return;
            }
          }
        } else if (self.options.viewMode == "swipe") {
          if (typeof FLIPBOOK.BookSwipe == 'undefined') {
            if (!FLIPBOOK.scriptsAdded[FLIPBOOK.flipBookSwipeSrc]) {
              self.loadScript(FLIPBOOK.flipBookSwipeSrc, self.createBook);
              return;
            }

            if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipBookSwipeSrc]) {
              setTimeout(function () {
                self.createBook();
              }, 100);
              return;
            }
          }
        } else {
          if (typeof FLIPBOOK.Book3 == 'undefined') {
            if (!FLIPBOOK.scriptsLoaded[FLIPBOOK.flipbookBook3Src]) {
              self.loadScript(FLIPBOOK.flipbookBook3Src, self.createBook);
              return;
            }

            if (!FLIPBOOK.scriptsAdded[FLIPBOOK.flipbookBook3Src]) {
              setTimeout(function () {
                self.createBook();
              }, 100);
              return;
            }
          }
        }

        this.setLoadingProgress(1);
        this.initEasing(); //console.log(self.options.pages)

        if (
        /*!self.options.pdfMode && */
        self.options.doublePage && self.options.pages.length > 2) {
          var newArr = [self.options.pages[0]];

          for (var i = 1; i <= self.options.pages.length - 2; i++) {
            var p = self.options.pages[i];
            var left = {
              src: p.src,
              thumb: p.thumb,
              title: p.title,
              htmlContent: p.htmlContent,
              json: p.json,
              side: 'left'
            };
            var right = {
              src: p.src,
              thumb: p.thumb,
              title: p.title,
              htmlContent: p.htmlContent,
              json: p.json,
              side: 'right'
            };
            newArr.push(left);
            newArr.push(right);
          }

          newArr.push(self.options.pages[self.options.pages.length - 1]);
          self.options.pages = newArr;
        }

        this.options.numPages = this.options.pages.length;

        if (this.options.numPages % 2 != 0 && !this.options.singlePageMode
        /*&& this.options.viewMode != 'swipe' */
        ) {
            this.oddPages = true;
            this.options.oddPages = true; //because of RTL - pages array needs to have even number of pages

            this.options.pages.push({
              src: this.options.assets.preloader,
              empty: true
            });
          }

        if (self.options.pages.length > 0) {
          for (var i = 0; i < self.options.pages.length; i++) {
            if (typeof self.options.pages[i].htmlContent != 'undefined') {
              // self.options.viewMode = '3d'
              self.options.hasHtmlContent = true;
              self.options.pages[i].htmlContent = jQuery(self.options.pages[i].htmlContent);
            }
          }
        }

        function initSound() {
          self.flipsound = document.createElement('audio');
          self.flipsound.setAttribute('src', self.options.assets.flipMp3);
          self.flipsound.setAttribute('type', 'audio/mpeg');
        }

        if (self.options.viewMode == "webgl") {
          var bookOptions = self.options; // bookOptions.pagesArr = self.options.pages;

          bookOptions.scroll = self.scroll;
          bookOptions.parent = self;
          self.Book = new FLIPBOOK.BookWebGL(self.book[0], model, bookOptions);
          self.webglMode = true;
          self.initSwipe();
          initSound();
        } else if (self.options.viewMode == "swipe") {
          self.Book = new FLIPBOOK.BookSwipe(self.book[0], self.bookLayer[0], model, options);
          self.initSwipe();
        } else {
          if (self.options.viewMode != "2d") self.options.viewMode = "3d";
          self.Book = new FLIPBOOK.Book3(self.book[0], model, options);
          self.initSwipe();
          self.webglMode = false;
          initSound();
        }

        self.Book.enable();
        self.book.hide().fadeIn("slow");
        this.tocCreated = false;
        this.createMenu();
        this.onZoom(this.options.zoom); // this.createCurrentPage();
        // if (!this.options.currentPage.enabled) {
        //     this.currentPageHolder.hide()
        // }

        if (this.options.pages.length == 1) {
          this.rightToLeft = false;
        }

        FLIPBOOK.books = FLIPBOOK.books || {};
        FLIPBOOK.books[self.id] = self.Book;
        var $book = jQuery(self.Book);
        $book.bind('loadPagesFromPdf', function (e, arr, size, callback) {
          self.loadPagesFromPdf(arr, size, callback);
        });
        $book.bind('turnPageComplete', function (e) {
          self.turnPageComplete();
        });
        $book.bind('initEasing', function (e) {
          self.initEasing();
        });
        $book.bind('playFlipSound', function (e) {
          self.playFlipSound();
        });
        $book.bind('closeLightbox', function (e) {
          self.closeLightbox();
        });
        $book.bind('updateCurrentPage', function (e) {
          self.updateCurrentPage();
        });
        this.createLogo();
        this.onBookCreated();
      },
      addPageItems: function addPageItems() {
        var pages = this.options.pages;
        var id = this.id;

        for (var key in pages) {
          var page = pages[key];
          page.htmlContent = page.htmlContent || '';
          var el;

          if (page.items) {
            for (var key2 in page.items) {
              var item = page.items[key2];

              switch (item.type) {
                case "iframe":
                  el = '<iframe src="' + item.src + '" width="' + item.width + '" height="' + item.height + '" style="position:absolute;top:' + item.y + 'px;left:' + item.x + 'px;bottom:auto;right:auto;" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
                  page.htmlContent += el;
                  break;

                case "image":
                  el = '<img src="' + item.src + '" style="position:absolute;top:' + item.y + 'px;left:' + item.x + 'px;width:' + item.width + 'px;height:' + item.height + 'px;bottom:auto;right:auto;">';
                  page.htmlContent += el;
                  break;

                case "link":
                  el = jQuery('<a>').addClass('flipbook-page-item').width(item.width).height(item.height).css({
                    'top': item.y + 'px',
                    'left': item.x + 'px',
                    'background': this.options.linkColor
                  }).attr('onmouseover', 'this.style.background="' + this.options.linkColorHover + '"').attr('onmouseout', 'this.style.background="' + this.options.linkColor + '"');

                  if (item.url) {
                    el.attr('href', item.url).attr('target', '_blank');
                  } else if (item.page) {
                    var hash = '#' + this.options.deeplinkingPrefix + item.page;
                    if (item.flip) hash += 'flip';
                    el.attr('href', hash);
                  }

                  page.htmlContent += el[0].outerHTML;
                  break;

                case "video":
                  var el = jQuery('<video>').addClass('flipbook-page-item');
                  if (item.width) el.attr('width', item.width);
                  if (item.height) el.attr('height', item.height);
                  if (item.x) el.css('left', item.x + 'px');
                  if (item.y) el.css('top', item.y + 'px');
                  if (item.controls) el.prop('controls', 'true');
                  if (item.autoplay) el.prop('autoplay', 'true');
                  var src = jQuery('<source type="video/mp4">').attr('src', item.src).appendTo(el);
                  page.htmlContent += el[0].outerHTML;
                  break;
                // case "audio":
                //     el = '<audio src="'+item.src+'" style="position:absolute;top:'+item.y+'px;left:'+item.x+'px;width:'+item.width+'px;height:'+item.height+'px;bottom:auto;right:auto;">'
                //     page.htmlContent  += el
                // break;
                // default:
                //     el = '<div data-bookid="'+id+'" data-page="'+(item.page || '')+'" data-url="'+(item.url || '') +'" style="position:absolute;top:'+item.y+'px;left:'+item.x+'px;width:'+item.width+'px;height:'+item.height+'px;background:#FFFF0033;cursor:pointer;" onclick="FLIPBOOK.onPageLinkClick(this)"></div>'
                //     page.htmlContent  += el
                //     break;
              }
            }
          }
        }
      },
      onBookCreated: function onBookCreated() {
        var o = this.options;
        var self = this;

        if (o.rightToLeft) {
          self.goToPage(Number(o.pages.length - Number(o.startPage) + 1), true);
        } else {
          self.goToPage(Number(o.startPage), true);
        }

        jQuery(window).resize(function () {
          self.resize();
        });
        self.resize();
        self.Book.updateVisiblePages();
        self.Book.zoomTo(o.zoomMin);
        this.updateCurrentPage(); //keyboard evetns

        document.addEventListener("keydown", function (e) {
          if (!self.Book.enabled) return;

          if (self.options.arrowsAlwaysEnabledForNavigation && (e.keyCode == 37 || e.keyCode == 39)) {//force keyboard navigation
          } else {
            if (!self.options.lightBox && !self.fullscreenActive) {
              if (self.options.arrowsDisabledNotFullscreen || self.bodyHasVerticalScrollbar()) return;
            }
          }

          e = e || window.event;

          switch (e.keyCode) {
            //left
            case 37:
              self.prevPage();
              break;
            //up

            case 38:
              self.zoomIn();
              break;
            //right

            case 39:
              self.nextPage();
              break;
            //down

            case 40:
              self.zoomOut();
              break;
          }

          return false;
        });
        document.addEventListener("MSFullscreenChange", function (e) {
          self.handleFsChange();
        });
        document.addEventListener("mozfullscreenchange", function (e) {
          self.handleFsChange();
        });
        document.addEventListener("webkitfullscreenchange", function (e) {
          self.handleFsChange();
        });
        document.addEventListener("fullscreenchange", function (e) {
          self.handleFsChange();
        }); // if (!o.zoomDisabled) {
        //disable page scrolling
        // jQuery(this.wrapper).on('DOMMouseScroll', function(e) {
        //     e.preventDefault();
        // });
        // jQuery(this.wrapper).on('mousewheel', function(e) {
        //     e.preventDefault();
        // });
        // }

        this.zoom = o.zoomMin; //add mouse scroll listeners
        // if (!o.zoomDisabled) {
        //Firefox

        this.bookLayer.bind('DOMMouseScroll', function (e) {
          if (!self.Book.enabled) return;

          if (!self.options.lightBox && !self.fullscreenActive) {
            if (self.options.wheelDisabledNotFullscreen || self.bodyHasVerticalScrollbar()) return;
          }

          e.stopPropagation();
          e.preventDefault();

          if (e.originalEvent.detail > 0) {
            //scroll down
            // console.log('Down');
            self.zoomOut(e.originalEvent);
          } else {
            //scroll up
            // console.log('Up');
            self.zoomIn(e.originalEvent);
          } //prevent page fom scrolling


          return false;
        }); //IE, Opera, Safari

        this.bookLayer.bind('mousewheel', function (e) {
          if (!self.Book.enabled) return;

          if (!self.options.lightBox && !self.fullscreenActive) {
            if (self.options.wheelDisabledNotFullscreen || self.bodyHasVerticalScrollbar()) return;
          }

          e.stopPropagation();
          e.preventDefault(); // alert("mousewheel")

          if (e.originalEvent.wheelDelta < 0
          /*|| e.originalEvent.deltaY < 0  -> zoom in does not work in chrome*/
          ) {
              //scroll down
              // console.log('Down');
              self.zoomOut(e.originalEvent);
            } else {
            //scroll up
            // console.log('Up');
            self.zoomIn(e.originalEvent);
          } //prevent page fom scrolling


          return false;
        });
        this.setTool("toolMove");
        if (self.options.contentOnStart) self.toggleToc(true);else if (self.options.thumbnailsOnStart) self.toggleThumbs(true);else if (self.options.searchOnStart) {
          self.toggleSearch(true);

          if (typeof self.options.searchOnStart == 'string') {
            self.thumbs.$findInput.val(self.options.searchOnStart).trigger('keyup');
          }
        }
        if (o.autoplayOnStart) self.toggleAutoplay(true);
        if (self.options.lightBox) self.Book.disable();
        self.initColors();
        setTimeout(function () {
          self.resize();
          self.Book.updateVisiblePages();
          self.Book.zoomTo(o.zoomMin);
        }, 500);
        if (o.onbookcreated) o.onbookcreated.call(this);
      },
      initSwipe: function initSwipe() {
        if (this.options.numPages == 1) return;
        var self = this;
        window.jQuery(this.bookLayer).swipe({
          swipeStatus: function swipeStatus(e, phase, direction, distance, duration, fingerCount, fingerData) {
            // console.log(e,phase,direction,distance,duration,fingerCount,fingerData)
            // if(fingerCount > 1){
            //     if(self.Book.disablePan)
            //         self.Book.disablePan()
            // }
            // if(phase == 'end' || phase == 'cancel'){
            //     if(self.Book.enablePan)
            //         self.Book.enablePan()
            // }
            if (phase == 'start') {
              try {
                self.currentPageInput.trigger('blur');
              } catch (e) {}
            }

            if (self.options.sideNavigationButtons && (e.target === self.arrowL[0] || e.target === self.arrowR[0])) return; //gesture for fullscreen disabled
            // if (phase == 'cancel' && duration < 200 && distance > 10 && direction == 'up') {
            //     if (!self.fullscreenActive) self.toggleExpand();
            // }
            // if (phase == 'cancel' && duration < 200 && distance > 10 && direction == 'down') {
            //     if (self.fullscreenActive) self.toggleExpand();
            // }

            /*if (e.type == 'touchend' && duration < 200 && distance < 10) {
                // console.log("tap")
                var posX = e.changedTouches[0].pageX
                var w = self.bookLayer.width()
                 if (posX < (w / 3)) {
                    self.Book.prevPage()
                    e.preventDefault()
                    e.stopPropagation()
                } else if (posX > (w * 2 / 3)) {
                    self.Book.nextPage()
                    e.preventDefault()
                    e.stopPropagation()
                } else {
                    //tap in the middle
                    //                                 self.toggleMenu()
                    //                                 e.preventDefault()
                    //                                 e.stopPropagation()
                }
            } else */

            if ((phase == "end" || phase == "cancel") && duration < 200 && distance < 10) {
              // double tap zoom if text layer not active
              // if (!self.options.textLayer && !self.options.doubleClickZoomDisabled) {
              if (self.tool == "toolMove" && !self.options.doubleClickZoomDisabled) {
                if (self.clickTimer == null) {
                  self.clickTimer = setTimeout(function () {
                    self.clickTimer = null; // console.log("single")

                    if (e.type == 'touchend') {
                      var posX = e.changedTouches[0].pageX;
                    } else if (e.type == 'mouseup') {
                      var posX = e.offsetX;
                    } //turn page on click - disabled
                    // var w = self.bookLayer.width()
                    // if (posX < (w * 0.4) && self.zoom <= 1) {
                    //     self.Book.prevPage()
                    //     e.preventDefault()
                    //     e.stopPropagation()
                    // } else if (posX > (w * 0.6) && self.zoom <= 1) {
                    //     self.Book.nextPage()
                    //     e.preventDefault()
                    //     e.stopPropagation()
                    // }

                  }, 300);
                } else {
                  clearTimeout(self.clickTimer);
                  self.clickTimer = null; // console.log("double")

                  var t = self.options.zoomTime;
                  if (self.zoom >= self.options.zoomMax) self.zoomTo(self.options.zoomMin, t, e);else self.zoomTo(self.options.zoomMax, t, e);
                }
              } //start timer, if another click arrives 

            } else {
              if ((direction == "up" || direction == "down") && phase == 'move' || self.zoom > 1 || self.tool == "toolSelect") return; // console.log(phase,direction,distance, fingerCount, fingerData)

              self.Book.onSwipe(e, phase, direction, distance, duration, fingerCount, fingerData);
            }
            /*if (e.type == 'mouseup' && duration < 100 && distance < 10) {
                var posX = e.pageX
                var w = self.bookLayer.width()
                 if (posX < (w / 3)) {
                   e.stopPropagation();
                e.preventDefault();
                self.Book.prevPage();
                } else if (posX > (w * 2 / 3)) {
                    e.stopPropagation();
                e.preventDefault();
                self.Book.nextPage();
                } else {
                            
                }
            }*/

          },
          // pinchIn: function(event, direction, distance, duration, fingerCount, pinchZoom) {
          // console.log("pinch in")
          // jQuery("#trace").text("You pinched " + direction + " by " + distance + "px, zoom scale is " + pinchZoom);
          // },
          // pinchOut: function(event, direction, distance, duration, fingerCount, pinchZoom) {
          // console.log("pinch out")
          // jQuery("#trace").text("You pinched " + direction + " by " + distance + "px, zoom scale is " + pinchZoom);
          // },
          pinchStatus: function pinchStatus(event, phase, direction, distance, duration, fingerCount, pinchZoom) {
            // console.log(event, phase, direction, distance, duration, fingerCount, pinchZoom)
            // console.log(pinchZoom)
            if (phase == "start") self.zoomStart = self.zoom;

            if (fingerCount > 1 && phase == "move") {
              event.preventDefault();
              if (event.scale) pinchZoom = event.scale; // if (self.options.viewMode == "webgl"){

              self.zoomTo(self.zoomStart * pinchZoom, 0, event); // console.log("zoom to ",self.zoomStart * pinchZoom, event)
              // }
            }
          },
          fingers: 2,
          pinchThreshold: 0,
          allowPageScroll: 'vertical',
          preventDefaultEvents: false
        });
        this.swipeEnabled = true;
      },
      toggleMenu: function toggleMenu() {
        if (this.menuShowing) {
          //hide menu 
          this.menuShowing = false;
          this.bookLayer.css('bottom', '0px');
          this.menuBottom.fadeOut();
          this.currentPageHolder.fadeOut();
          jQuery('.flipbook-nav').fadeOut();
          this.Book.onResize();
        } else {
          //show menu 
          this.menuShowing = true;
          this.bookLayer.css('bottom', this.menuBottom.height() + 'px');
          this.menuBottom.fadeIn();
          this.currentPageHolder.fadeIn();
          jQuery('.flipbook-nav').fadeIn();
          this.Book.onResize();
        }
      },
      createIcon: function createIcon(btn, alt, transparent) {
        var o = this.options,
            $icon;

        if (o.icons == "material") {
          $icon = jQuery('<i>').addClass('material-icons flipbook-icon-material flipbook-menu-btn skin-color').attr('title', btn.title).text(alt ? btn.iconAlt2 : btn.icon2);
        } else {
          $icon = jQuery(document.createElement('span')).attr('aria-hidden', 'true').addClass(alt ? btn.iconAlt : btn.icon).addClass('flipbook-icon-fa flipbook-menu-btn skin-color fa');
        }

        if (!transparent) $icon.addClass('skin-color-bg');
        return $icon;
      },
      createButton: function createButton(btn) {
        var o = this.options;
        var floating = btn.vAlign == 'top' && o.menu2Transparent || btn.vAlign != 'top' && o.menuTransparent;
        var bgColor = btn.background || (floating ? o.floatingBtnBackground : o.btnBackground);
        var bgColorHover = btn.backgroundHover || (floating ? o.floatingBtnBackgroundHover : o.btnBackgroundHover);
        var color = btn.color || (floating ? o.floatingBtnColor : o.btnColor);
        var colorHover = btn.colorHover || (floating ? o.floatingBtnColorHover : o.btnColorHover);
        var textShadiw = floating ? o.floatingBtnTextShadow : o.btnTextShadow;
        var radius = btn.radius || (floating ? o.floatingBtnRadius : o.btnRadius);
        var border = btn.border || (floating ? o.floatingBtnBorder : o.btnBorder);
        var margin = floating ? o.floatingBtnMargin : o.btnMargin;
        var $btn = jQuery(document.createElement('span'));
        var material = o.icons == "material";
        var btnSize = material ? (btn.size || o.btnSize) + 8 : btn.size || o.btnSize;
        var btnWidth = (btn.size || o.btnSize) + 24;

        function addCSS($icon) {
          $icon.css(_defineProperty({
            'width': btnWidth + 'px',
            'font-size': btnSize + 'px',
            'margin': margin + 'px',
            'border-radius': radius + 'px',
            'text-shadow': o.btnTextShadow,
            'box-shadow': o.btnShadow,
            'border': border,
            'color': color,
            'background': bgColor
          }, "text-shadow", textShadiw));
          if (color) $icon.removeClass('skin-color');
          if (bgColor) $icon.removeClass('skin-color-bg');
        }

        $btn.$icon = this.createIcon(btn).appendTo($btn);
        addCSS($btn.$icon);

        if (btn.iconAlt2) {
          $btn.$iconAlt = this.createIcon(btn, true).appendTo($btn).hide();
          addCSS($btn.$iconAlt);
        }

        $btn.icon = btn.icon;
        $btn.iconAlt = btn.iconAlt;
        if (btn.onclick) $btn.bind('tap click', function (e) {
          btn.onclick();
        });
        if (colorHover || bgColorHover) $btn.mouseenter(function () {
          $btn.$icon.css({
            'color': colorHover,
            'background': bgColorHover
          });
          if ($btn.$iconAlt) $btn.$iconAlt.css({
            'color': colorHover,
            'background': bgColorHover
          });
        }).mouseleave(function () {
          $btn.$icon.css({
            'color': color,
            'background': bgColor
          });
          if ($btn.$iconAlt) $btn.$iconAlt.css({
            'color': color,
            'background': bgColor
          });
        });
        var menu,
            cssClass = '';

        if (btn.vAlign == 'top') {
          if (o.menu2Floating) {
            menu = this.menuTC;
          } else if (btn.hAlign == 'left') {
            menu = this.menuTL;
          } else if (btn.hAlign == 'right') {
            menu = this.menuTR;
          } else {
            menu = this.menuTC;
          }
        } else {
          if (o.menuFloating) {
            menu = this.menuBC;
          } else if (btn.hAlign == 'left') {
            menu = this.menuBL;
          } else if (btn.hAlign == 'right') {
            menu = this.menuBR;
          } else {
            menu = this.menuBC;
          }
        }

        $btn.attr('data-name', btn.name).appendTo(menu).attr('title', btn.title).addClass(cssClass).css('order', btn.order); //button titles
        // jQuery("<span></span>").css({
        //     'fontSize':'10px',
        //     'display':'block',
        //     'marginTop':'-8px',
        //     'maxWidth':'40px'
        //     }).appendTo($btn).text(btn.title)

        return $btn;
      },
      createMenu: function createMenu() {
        if (this.menuBottom) return;
        var o = this.options;
        var menuBottomClass = o.menuFloating ? 'flipbook-menu-floating' : 'flipbook-menu-fixed';
        var menuTopClass = o.menu2Floating ? 'flipbook-menu-floating' : 'flipbook-menu-fixed';
        var self = this;
        this.menuBottom = jQuery(document.createElement('div')).addClass('flipbook-menuBottom').addClass(menuBottomClass).appendTo(this.wrapper).css({
          'background': o.menuBackground,
          'box-shadow': o.menuShadow,
          'margin': o.menuMargin + 'px',
          'padding': o.menuPadding + 'px'
        });
        if (!o.menuTransparent && !o.menuBackground) this.menuBottom.addClass('skin-color-bg');
        if (o.hideMenu) this.menuBottom.hide();
        this.menuTop = jQuery(document.createElement('div')).addClass('flipbook-menuTop').addClass(menuTopClass).appendTo(this.wrapper).css({
          'background': o.menu2Background,
          'box-shadow': o.menu2Shadow,
          'margin': o.menu2Margin + 'px',
          'padding': o.menu2Padding + 'px'
        });
        if (!o.menu2Transparent && !o.menu2Background) this.menuTop.addClass('skin-color-bg'); // if (o.hideMenu)
        //     this.menuTop.hide();

        if (o.viewMode == "swipe") o.btnSound.enabled = false;
        this.menuBL = jQuery(document.createElement('div')).addClass('flipbook-menu flipbook-menu-left').appendTo(this.menuBottom);
        this.menuBC = jQuery(document.createElement('div')).addClass('flipbook-menu flipbook-menu-center').appendTo(this.menuBottom);
        this.menuBR = jQuery(document.createElement('div')).addClass('flipbook-menu flipbook-menu-right').appendTo(this.menuBottom);
        this.menuTL = jQuery(document.createElement('div')).addClass('flipbook-menu flipbook-menu-left').appendTo(this.menuTop);
        this.menuTC = jQuery(document.createElement('div')).addClass('flipbook-menu flipbook-menu-center').appendTo(this.menuTop);
        this.menuTR = jQuery(document.createElement('div')).addClass('flipbook-menu flipbook-menu-right').appendTo(this.menuTop);

        if (o.isMobile) {
          if (typeof o.btnTocIfMobile != 'undefined') o.btnToc.hideOnMobile = !o.btnTocIfMobile;
          if (typeof o.btnThumbsIfMobile != 'undefined') o.btnThumbs.hideOnMobile = !o.btnThumbsIfMobile;
          if (typeof o.btnShareIfMobile != 'undefined') o.btnShare.hideOnMobile = !o.btnShareIfMobile;
          if (typeof o.btnDownloadPagesIfMobile != 'undefined') o.btnDownloadPages.hideOnMobile = !o.btnDownloadPagesIfMobile;
          if (typeof o.btnDownloadPdfIfMobile != 'undefined') o.btnDownloadPdf.hideOnMobile = !o.btnDownloadPdfIfMobile;
          if (typeof o.btnSoundIfMobile != 'undefined') o.btnSound.hideOnMobile = !o.btnSoundIfMobile;
          if (typeof o.btnExpandIfMobile != 'undefined') o.btnExpand.hideOnMobile = !o.btnExpandIfMobile;
          if (typeof o.btnPrintIfMobile != 'undefined') o.btnPrint.hideOnMobile = !o.btnPrintIfMobile;
        } //arrows


        if (o.sideNavigationButtons) {
          //if (self.options.btnNext.enabled)
          this.btnNext = jQuery('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"></div></div>').appendTo(this.bookLayer).bind('tap click', function (e) {
            if (self.btnNext.disabled) return;
            self.btnNext.disabled = true;
            setTimeout(function () {
              self.btnNext.disabled = false;
            }, 300);
            e.stopPropagation();
            e.preventDefault();
            self.nextPage();
          });
          this.arrowR = this.createIcon(o.btnNext).appendTo(this.btnNext.first()).addClass('flipbook-right-arrow').css({
            'width': o.sideBtnSize + 'px',
            'height': o.sideBtnSize + 'px',
            'font-size': o.sideBtnSize + 'px',
            'border-radius': o.sideBtnRadius + 'px',
            'margin-top': String(-o.sideBtnSize / 2) + 'px',
            'margin-right': o.sideBtnMargin + 'px',
            'padding': o.sideBtnPaddingV + 'px ' + o.sideBtnPaddingH + 'px',
            'text-shadow': o.sideBtnTextShadow,
            'box-shadow': o.sideBtnShadow,
            'border': o.sideBtnBorder,
            'color': o.sideBtnColor,
            'background': o.sideBtnBackground,
            'box-sizing': 'initial'
          });
          if (o.sideBtnColor) this.arrowR.removeClass("skin-color");
          if (o.sideBtnBackground) this.arrowR.removeClass("skin-color-bg"); //if (self.options.btnPrev.enabled)

          this.btnPrev = jQuery('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"></div></div>').appendTo(self.bookLayer).bind('tap click', function (e) {
            if (self.btnPrev.disabled) return;
            self.btnPrev.disabled = true;
            setTimeout(function () {
              self.btnPrev.disabled = false;
            }, 300);
            e.stopPropagation();
            e.preventDefault();
            self.prevPage();
          });
          this.arrowL = this.createIcon(o.btnPrev).appendTo(this.btnPrev.first()).addClass('flipbook-left-arrow').css({
            'width': o.sideBtnSize + 'px',
            'height': o.sideBtnSize + 'px',
            'font-size': o.sideBtnSize + 'px',
            'border-radius': o.sideBtnRadius + 'px',
            'margin-top': String(-o.sideBtnSize / 2) + 'px',
            'margin-left': o.sideBtnMargin + 'px',
            'padding': o.sideBtnPaddingV + 'px ' + o.sideBtnPaddingH + 'px',
            'text-shadow': o.sideBtnTextShadow,
            'box-shadow': o.sideBtnShadow,
            'border': o.sideBtnBorder,
            'color': o.sideBtnColor,
            'background': o.sideBtnBackground,
            'box-sizing': 'initial'
          });
          if (o.sideBtnColor) this.arrowL.removeClass("skin-color");
          if (o.sideBtnBackground) this.arrowL.removeClass("skin-color-bg");

          if (o.btnFirst.enabled) {
            this.btnFirst = jQuery('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"></div></div>').appendTo(this.bookLayer).bind('tap click', function (e) {
              if (self.btnFirst.disabled) return;
              self.btnFirst.disabled = true;
              setTimeout(function () {
                self.btnFirst.disabled = false;
              }, 300);
              e.stopPropagation();
              e.preventDefault();
              self.firstPage();
            });
            this.arrowFirst = this.createIcon(o.btnFirst).appendTo(this.btnFirst.first()).addClass('flipbook-first-arrow').css({
              'width': o.sideBtnSize + 'px',
              'height': o.sideBtnSize * .66 + 'px',
              'font-size': o.sideBtnSize * .66 + 'px',
              'border-radius': o.sideBtnRadius + 'px',
              'margin-top': String(o.sideBtnSize / 2 + o.sideBtnMargin + 2 * o.sideBtnPaddingV) + 'px',
              'margin-left': o.sideBtnMargin + 'px',
              'padding': o.sideBtnPaddingV + 'px ' + o.sideBtnPaddingH + 'px',
              'text-shadow': o.sideBtnTextShadow,
              'box-shadow': o.sideBtnShadow,
              'border': o.sideBtnBorder,
              'color': o.sideBtnColor,
              'background': o.sideBtnBackground,
              'box-sizing': 'initial'
            });
            if (o.sideBtnColor) this.arrowFirst.removeClass("skin-color");
            if (o.sideBtnBackground) this.arrowFirst.removeClass("skin-color-bg");
          }

          if (o.btnLast.enabled) {
            this.btnLast = jQuery('<div class="flipbook-nav"><div class="flipbook-arrow-wrapper"></div></div>').appendTo(self.bookLayer).bind('tap click', function (e) {
              if (self.btnLast.disabled) return;
              self.btnLast.disabled = true;
              setTimeout(function () {
                self.btnLast.disabled = false;
              }, 300);
              e.stopPropagation();
              e.preventDefault();
              self.lastPage();
            });
            this.arrowLast = this.createIcon(o.btnLast).appendTo(this.btnLast.first()).addClass('flipbook-last-arrow').css({
              'width': o.sideBtnSize + 'px',
              'height': o.sideBtnSize * .66 + 'px',
              'font-size': o.sideBtnSize * .66 + 'px',
              'border-radius': o.sideBtnRadius + 'px',
              'margin-top': String(o.sideBtnSize / 2 + o.sideBtnMargin + 2 * o.sideBtnPaddingV) + 'px',
              'margin-right': o.sideBtnMargin + 'px',
              'padding': o.sideBtnPaddingV + 'px ' + o.sideBtnPaddingH + 'px',
              'text-shadow': o.sideBtnTextShadow,
              'box-shadow': o.sideBtnShadow,
              'border': o.sideBtnBorder,
              'color': o.sideBtnColor,
              'background': o.sideBtnBackground,
              'box-sizing': 'initial'
            });
            if (o.sideBtnColor) this.arrowLast.removeClass("skin-color");
            if (o.sideBtnBackground) this.arrowLast.removeClass("skin-color-bg");
          }

          if (o.btnOrder.indexOf('btnFirst') >= 0) o.btnOrder.splice(o.btnOrder.indexOf('btnFirst'), 1);
          if (o.btnOrder.indexOf('btnPrev') >= 0) o.btnOrder.splice(o.btnOrder.indexOf('btnPrev'), 1);
          if (o.btnOrder.indexOf('btnNext') >= 0) o.btnOrder.splice(o.btnOrder.indexOf('btnNext'), 1);
          if (o.btnOrder.indexOf('btnLast') >= 0) o.btnOrder.splice(o.btnOrder.indexOf('btnLast'), 1);
        }

        if (o.pdfMode && !o.btnDownloadPdf.url) o.btnDownloadPdf.url = o.pdfUrl;
        if (!o.textLayer && o.btnSelect) o.btnSelect.enabled = false;

        for (var i = 0; i < o.btnOrder.length; i++) {
          var btnName = o.btnOrder[i];
          var btn = o[btnName];
          if (o.isMobile && btn.hideOnMobile) btn.enabled = false;

          if (btn.enabled) {
            btn.name = btnName;

            if (btn.name == 'currentPage') {
              this.createCurrentPage();
            } else {
              this[btnName] = this.createButton(btn).bind('touchend click', function (e) {
                e.stopPropagation();
                e.preventDefault();
                self.onButtonClick(this, e);
              });
            }
          }
        }

        if (o.buttons) {
          for (var i = 0; i < o.buttons.length; i++) {
            var btn = o.buttons[i];
            self.createButton(btn).index(1);
          }
        }
      },
      onButtonClick: function onButtonClick(btn, e) {
        var name = jQuery(btn).attr('data-name'),
            o = this.options;

        switch (name) {
          case 'btnFirst':
            this.firstPage();
            break;

          case 'btnPrev':
            this.prevPage();
            break;

          case 'btnNext':
            this.nextPage();
            break;

          case 'btnLast':
            this.lastPage();
            break;

          case 'btnZoomIn':
            this.zoomIn();
            break;

          case 'btnZoomOut':
            this.zoomOut();
            break;

          case 'btnAutoplay':
            if (!this.autoplay) this.nextPage();
            this.toggleAutoplay();
            break;

          case 'btnSearch':
            this.toggleSearch();
            break;

          case 'btnBookmark':
            this.toggleBookmark();
            break;

          case 'btnRotateLeft':
            if (this.Book.rotateLeft) this.Book.rotateLeft();
            break;

          case 'btnRotateRight':
            if (this.Book.rotateRight) this.Book.rotateRight();
            break;

          case 'btnToc':
            this.toggleToc();
            break;

          case 'btnThumbs':
            this.toggleThumbs();
            break;

          case 'btnShare':
            this.toggleShareMenu();
            break;

          case 'btnDownloadPages':
            if (o.downloadMenu) {
              this.toggleDownloadMenu();
            } else {
              var link = document.createElement('a');
              link.href = o.btnDownloadPages.url;
              link.download = o.btnDownloadPages.name;
              link.dispatchEvent(new MouseEvent('click'));
            }

            break;

          case 'btnPrint':
            if (o.printMenu) this.togglePrintMenu();else this.togglePrintWindow();
            break;

          case 'btnDownloadPdf':
            if (o.btnDownloadPdf.forceDownload) {
              var path = o.btnDownloadPdf.url;
              var save = document.createElement('a');
              save.href = path;
              var filename = save.href.split('/').pop().split('#')[0].split('?')[0];
              save.download = filename;
              document.body.appendChild(save);
              save.click();
              document.body.removeChild(save);
            } else {
              var target = o.btnDownloadPdf.openInNewWindow || _typeof(o.btnDownloadPdf.openInNewWindow == 'undefined') ? '_blank' : '_self';
              window.open(o.btnDownloadPdf.url, target);
            }

            if (this.gaCode) {
              ga('send', {
                hitType: 'event',
                eventCategory: 'Flipbook : ' + o.name,
                eventAction: 'download PDF',
                eventLabel: o.btnDownloadPdf.url,
                nonInteraction: true
              });
            }

            break;

          case 'btnSound':
            this.toggleSound();
            break;

          case 'btnSelect':
            this.toggleTool();
            break;

          case 'btnExpand':
            this.toggleExpand();
            break;

          case 'btnClose':
            // if(!this.lightbox) return;
            // var $target = jQuery(e.target)
            // if (!$target.parents().hasClass('flipbook-overlay') || $target.hasClass('flipbook-bookLayer'))
            this.lightbox.closeLightbox();
            break;
        }
      },
      handleFsChange: function handleFsChange(e) {
        if (!this.Book || !this.Book.enabled) return; // var $el = this.lightbox ? this.$body : this.$elem

        var $el = jQuery(this.fullscreenElement);
        var currentFullscreenElement = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;

        if (currentFullscreenElement === this.fullscreenElement || this.isFullscreen) {
          this.btnExpand.$icon.hide();
          this.btnExpand.$iconAlt.show();
          $el.addClass('flipbook-browser-fullscreen');
          this.fullscreenActive = true;
          if (this.options.onfullscreenenter) this.options.onfullscreenenter.call(this);
        } else {
          this.btnExpand.$icon.show();
          this.btnExpand.$iconAlt.hide();
          $el.removeClass('flipbook-browser-fullscreen');
          this.fullscreenActive = false;
          if (this.options.onfullscreenexit) this.options.onfullscreenexit.call(this);
        }

        this.triggerResizeOnce();
      },
      createLogo: function createLogo() {
        var o = this.options;
        if (!o.logoImg) return;
        if (o.isMobile && o.logoHideOnMobile) return;
        var $logo = jQuery('<img>').attr('src', o.logoImg).attr('style', o.logoCSS).appendTo(this.wrapper);
        if (o.logoAlignH == 'right') $logo.css('right', '0');
        if (o.logoAlignV == 'bottom') $logo.css('bottom', '0');

        if (o.logoUrl) {
          $logo.bind('touchend click', function () {
            window.open(o.logoUrl, '_blank');
          });
        }
      },
      setLoadingProgress: function setLoadingProgress(percent) {
        if (this.disposed) return;
        if (this.$fillPreloader) this.setFillPreloaderProgress(percent);else {
          if (percent > 0 && percent < 1) {
            jQuery(this.preloader).stop(true, true).show();
          } else {
            jQuery(this.preloader).stop(true, true).hide();
          }
        }
      },
      setFillPreloaderProgress: function setFillPreloaderProgress(percent) {
        if (!this.$fillPreloader) return;

        if (percent > 0 && percent < 1) {
          this.fillPreloaderProgress = this.fillPreloaderProgress || 0;
          if (percent < this.fillPreloaderProgress) return;else this.fillPreloaderProgress = percent; // percent = .5

          var img = this.$fillPreloaderImg[0];
          img.style.clip = "rect(0px," + img.width * percent + "px," + img.height + "px,0px)";
          this.$fillPreloader.show();
        } else {
          this.$fillPreloader.hide();
        }
      },
      createNavigation: function createNavigation() {
        var self = this;
        this.navLeft = jQuery('<div />');
        this.navLeft // .appendTo(this.bookLayer)
        // .css('position','absolute')
        // .css('width','200px')
        // .css('height','200px')
        .css('background', '#f00').css('left', '0').css('top', '200px').attr('aria-hidden', 'true').addClass('skin-color fa fa-chevron-left fa-5x').css('margin-top', this.navLeft.height() + 'px').bind('touchend click', function (e) {
          e.stopPropagation();
          e.preventDefault();
          self.prevPage();
        });
        this.navRight = jQuery('<div />').appendTo(this.bookLayer).css('position', 'absolute').css('width', '200px').css('height', '200px').css('margin-top', '-100px').css('background', '#f00').css('right', '0').css('top', '200px').bind('touchend click', function (e) {
          e.stopPropagation();
          e.preventDefault();
          self.nextPage();
        });
      },
      playFlipSound: function playFlipSound() {
        var self = this;

        if (this.options.sound && this.Book.enabled && typeof this.flipsound.play != 'undefined') {
          this.flipsound.currentTime = 0;
          setTimeout(function () {
            try {
              self.flipsound.play();
            } catch (e) {}
          }, 100);
        }
      },
      onMouseWheel: function onMouseWheel(e) {
        //console.log(e)
        if ('wheelDeltaX' in e) {
          wheelDeltaX = e.wheelDeltaX / 12;
          wheelDeltaY = e.wheelDeltaY / 12;
        } else if ('wheelDelta' in e) {
          wheelDeltaX = wheelDeltaY = e.wheelDelta / 12;
        } else if ('detail' in e) {
          wheelDeltaX = wheelDeltaY = -e.detail * 3;
        } else {
          return;
        }

        if (wheelDeltaX > 0) this.zoomIn(e);else this.zoomOut(e);
      },
      zoomTo: function zoomTo(val, time, e) {
        this.zoom = val;
        var x, y;

        if (typeof e == 'undefined') {
          //zoom to middle
          x = this.model.wrapperW / 2;
          y = this.model.wrapperH / 2;
        } else {
          if (e.touches && e.touches[0]) {
            x = e.touches[0].pageX;
            y = e.touches[0].pageY;
          } else if (e.changedTouches && e.changedTouches[0]) {
            x = e.changedTouches[0].pageX;
            y = e.changedTouches[0].pageY;
          } else {
            x = e.pageX;
            y = e.pageY;
          } //main wrapper offset - works for all modes
          // if(!this.fullscreenActive){


          x = x - this.wrapper.offset().left;
          y = y - this.wrapper.offset().top; // }
        } // console.log(this.zoom, this.options.zoomMin, this.options.zoomMax)


        if (this.zoom < this.options.zoomMin) this.zoom = this.options.zoomMin;
        if (this.zoom > this.options.zoomMax) this.zoom = this.options.zoomMax;
        if (this.options.zoomMax2 && this.zoom > this.options.zoomMax2) this.zoom = this.options.zoomMax2;
        this.model.zoom = this.zoom;
        this.Book.zoomTo(this.zoom, time, x, y);
        this.onZoom(this.zoom);
      },
      zoomOut: function zoomOut(e) {
        var newZoom = this.zoom / this.options.zoomStep;
        if (newZoom < 1 && this.zoom > 1) newZoom = 1;
        newZoom = newZoom < this.options.zoomMin ? this.options.zoomMin : newZoom;
        if (this.zoom == newZoom) return;
        this.zoom = newZoom;
        var t = this.options.zoomTime;
        this.zoomTo(this.zoom, t, e);
      },
      zoomIn: function zoomIn(e) {
        var newZoom = this.zoom * this.options.zoomStep;
        if (newZoom > 1 && this.zoom < 1) newZoom = 1;
        if (this.bookLayer.height() * newZoom > this.options.zoomSize) newZoom = this.options.zoomSize / this.bookLayer.height(); //newZoom = newZoom > this.options.zoomMax ? this.options.zoomMax : newZoom;

        if (this.zoom == newZoom) return;
        this.zoom = newZoom;
        var t = this.options.zoomTime;
        this.zoomTo(this.zoom, t, e);
      },
      nextPage: function nextPage() {
        if (this.Book) this.Book.nextPage();
      },
      prevPage: function prevPage() {
        if (this.Book) this.Book.prevPage();
      },
      firstPage: function firstPage() {
        this.goToPage(1);
      },
      lastPage: function lastPage() {
        this.goToPage(this.options.pages.length);
      },
      goToPage: function goToPage(pageNumber, instant) {
        // if(pageNumber > this.options.numPages) pageNumber = this.options.numPages
        //  if(pageNumber < 1) pageNumber = 1
        if (this.Book) this.Book.goToPage(pageNumber, instant);
      },
      onZoom: function onZoom(newZoom) {
        this.zoom = newZoom;
        this.enableButton(this.btnZoomIn, newZoom < this.options.zoomMax);
        this.enableButton(this.btnZoomOut, newZoom > this.options.zoomMin);
        this.enableSwipe(newZoom <= 1);
        this.model.zoom = newZoom;
      },
      enableSwipe: function enableSwipe(val) {
        this.swipeEnabled = val;
      },
      createCurrentPage: function createCurrentPage() {
        var self = this,
            o = this.options;
        var menu,
            cssClass = 'flipbook-currentPageHolder ';

        if (o.currentPage.vAlign == 'top') {
          if (o.currentPage.hAlign == 'left') {
            menu = this.menuTL;
          } else if (o.currentPage.hAlign == 'right') {
            menu = this.menuTR;
          } else menu = this.menuTC;
        } else {
          if (o.currentPage.hAlign == 'left') {
            menu = this.menuBL;
          } else if (o.currentPage.hAlign == 'right') {
            menu = this.menuBR;
          } else menu = this.menuBC;
        }

        var floating = o.currentPage.vAlign == 'top' && o.menu2Transparent || o.currentPage.vAlign != 'top' && o.menuTransparent;
        var bgColor = floating ? o.floatingBtnBackground : '';
        var color = floating ? o.floatingBtnColor : o.btnColor;
        var textShadiw = floating ? o.floatingBtnTextShadow : '';
        var radius = floating ? o.floatingBtnRadius : o.btnRadius;
        var margin = floating ? o.floatingBtnMargin : o.btnMargin;
        var currentPageHolder = jQuery('<div>').appendTo(menu);
        currentPageHolder.css('margin', o.currentPage.marginV + 'px ' + o.currentPage.marginH + 'px');
        if (!floating) cssClass += "skin-color ";
        currentPageHolder.addClass(cssClass).css({
          'color': color,
          'background': bgColor,
          'text-shadow': textShadiw,
          'border-radius': radius + 'px'
        });
        if (o.currentPage.order) currentPageHolder.css('order', o.currentPage.order);
        this.currentPageHolder = currentPageHolder;
        this.currentPage = jQuery(document.createElement('div')).addClass('flipbook-currentPageNumber').appendTo(currentPageHolder);
        var $form = jQuery('<form>').appendTo(currentPageHolder).submit(function (e) {
          var value = parseInt(self.currentPageInput.val());
          value = value > o.pages.length ? o.pages.length : value;

          if (self.options.rightToLeft) {
            value = o.pages.length - value + 1;
          } //self.updateCurrentPage();
          //if (self.options.singlePageMode) value--;


          self.goToPage(value);
          self.currentPageInput.trigger('blur');
          return false;
        });
        this.currentPageInput = jQuery('<input type="text" maxlength="4">').addClass('flipbook-currentPageInput').css({
          'margin': o.currentPage.marginV + 'px ' + o.currentPage.marginH + 'px',
          'color': color
        }).appendTo($form).val('').focus(function () {
          self.currentPageInput.val('');
          self.currentPage.addClass('flipbook-color-transparent');
        }).blur(function () {
          self.currentPageInput.val('');
          self.currentPage.removeClass('flipbook-color-transparent');
        });
        if (!floating) this.currentPageInput.addClass('skin-color');
      },
      createMenuHeader: function createMenuHeader(elem, title, onClose) {
        var self = this;
        var header = jQuery("<div>").addClass("flipbook-menu-header skin-clor flipbook-font").appendTo(elem);
        var title = jQuery('<span>').text(title).addClass('flipbook-menu-title skin-color').appendTo(header);
        var btnClose = jQuery('<span>').appendTo(header).addClass('flipbook-btn-close').bind('touchend click', function (e) {
          e.stopPropagation();
          e.preventDefault();
          self.closeMenus();
        });
        var $icon = this.createIcon(this.options.btnClose, null, true).appendTo(btnClose); // .attr('aria-hidden', 'true')
        // .addClass('fa fa-times flipbook-btn-close-icon skin-color')
      },
      createToc: function createToc() {
        var self = this,
            tocArray = this.options.tableOfContent;

        if ((!tocArray || !tocArray.length) && this.pdfService && !this.pdfService.outlineLoaded) {
          self.pdfService.loadOutline(function (outline) {
            self.options.tableOfContent = outline;
            self.createToc();
          });
          return;
        }

        this.tocHolder = jQuery('<div>').addClass('flipbook-tocHolder flipbook-side-menu skin-color-bg').appendTo(this.wrapper).hide();
        this.createMenuHeader(this.tocHolder, this.strings.tableOfContent, this.toggleToc); // .css('left', '-1000px')

        this.toc = jQuery('<div>').addClass('flipbook-toc').appendTo(this.tocHolder);
        this.tocScroller = jQuery('<div>').addClass('flipbook-toc-scroller').appendTo(this.toc);
        this.tocScroll = new FLIPBOOK.IScroll(self.toc[0], {
          bounce: false,
          mouseWheel: true,
          scrollbars: true,
          interactiveScrollbars: true
        });

        if (tocArray && tocArray.length > 0) {
          var pages = this.options.pages;

          for (var i = 0; i < tocArray.length; i++) {
            this.createTocItem(tocArray[i]);
          }
        } else {
          var arr = this.options.pages;

          for (var i = 0; i < arr.length; i++) {
            var title = arr[i].title;
            if (title == "" || typeof title == 'undefined') continue;
            var page = String(i + 1);
            var item = {
              title: title,
              page: page
            };
            this.createTocItem(item);
          }
        }

        this.initColors();
        this.tocScroll.refresh();
        this.tocCreated = true;
        this.toggleToc();
      },
      createTocItem: function createTocItem(item, parent, level) {
        var self = this;
        var parent = parent || this.tocScroller;
        var rtl = this.options.rightToLeft;
        var tocItem = jQuery(document.createElement('a')).attr('class', 'flipbook-tocItem').addClass('skin-color').css('direction', rtl ? 'rtl' : 'ltr').appendTo(parent).bind('touchend click', function (e) {
          e.stopPropagation();
          e.preventDefault();
          if (self.tocScroll.moved) return;
          if (self.options.tableOfContentCloseOnClick) self.toggleToc(false);

          if (!item.page && item.dest) {
            self.pdfService.pdfDocument.getPageIndex(item.dest[0]).then(function (index) {
              // item.page = index + 1
              var targetPage = index + 1;
              targetPage = self.options.rightToLeft ? self.options.pages.length - targetPage + 1 : targetPage;
              setTimeout(function () {
                self.goToPage(targetPage);
              }, 200);
            });
          } else {
            var targetPage = Number(item.page);
            targetPage = self.options.rightToLeft ? self.options.pages.length - targetPage + 1 : targetPage;
            setTimeout(function () {
              self.goToPage(targetPage);
            }, 200);
          }
        });
        if (!level) level = 0;
        tocItem.level = level;
        tocItem.css('padding', '8px 0');
        tocItem.css('margin-' + (rtl ? 'right' : 'left'), '10px');

        if (!level) {
          tocItem.css('margin-right', '15px');
          tocItem.css('padding-left', '10px');
        } else {
          tocItem.css('margin-top', '8px');
          tocItem.css('padding-bottom', '0');
        }

        var expandBtn = jQuery(document.createElement('span')).appendTo(tocItem).css('width', '20px').css('display', 'inline-block').css('cursor', 'auto').bind('touchend click', function (e) {
          e.stopPropagation();
          e.preventDefault();

          for (var i = 0; i < tocItem.items.length; i++) {
            tocItem.items[i].toggle();
          }

          $icon.toggle();
          $icon2.toggle();
          self.tocScroll.refresh();
        });
        var $icon = jQuery('<span>').attr('aria-hidden', 'true').appendTo(expandBtn).addClass('fa fa-chevron-' + (rtl ? 'left' : 'right') + ' skin-color').hide();
        var $icon2 = jQuery('<span>').attr('aria-hidden', 'true').appendTo(expandBtn).addClass('fa fa-chevron-down skin-color').hide();
        jQuery(document.createElement('span')).appendTo(tocItem).addClass('title').text(item.title).css('width', String(170 - tocItem.level * 10) + 'px');
        jQuery(document.createElement('span')).appendTo(tocItem).width('25px').css('display', 'inline-block').css('text-align', 'right').text(item.page);

        if (item.items && item.items.length) {
          tocItem.items = [];

          for (var i = 0; i < item.items.length; i++) {
            var subItem = this.createTocItem(item.items[i], tocItem, tocItem.level + 1);
            tocItem.items.push(subItem);
            subItem.hide();
          }

          $icon.show();
        }

        return tocItem;
      },
      enablePrev: function enablePrev(val) {
        this.enableButton(this.btnPrev, val);
        this.enableButton(this.btnFirst, val);
        this.Book.enablePrev(val);
      },
      enableNext: function enableNext(val) {
        this.enableButton(this.btnNext, val);
        this.enableButton(this.btnLast, val);
        this.Book.enableNext(val);
      },

      /* enableAutoplay: function(val) {
            this.enableButton(this.btnAutoplay, val)
           this.enableButton(this.btnAutoplay, val)
        },*/
      enableButton: function enableButton(button, enabled) {
        if (typeof button == 'undefined') return;

        if (enabled) {
          button.css('opacity', '1');
          button.css('pointer-events', 'auto');
        } else {
          button.css('opacity', '0.2');
          button.css('pointer-events', 'none');
        }

        button.enabled = enabled;
      },
      resize: function resize() {
        if (!this.Book || !this.Book.enabled) return;
        var o = this.options;

        if (!o.menuOverBook && this.menuShowing && this.menuBottom) {
          this.bookLayer.css('bottom', this.menuBottom.outerHeight() + 'px');
        } else {
          this.bookLayer.css('bottom', '0px');
        }

        if (!o.menu2OverBook && this.menuShowing && this.menuTop) {
          this.bookLayer.css('top', this.menuTop.outerHeight() + 'px');
        } else {
          this.bookLayer.css('top', '0px');
        } // this.bookLayer.css('top', '0px');
        // this.bookLayer.css('bottom', '0px');


        if (this.tocShowing || this.thumbsShowing || this.searchShowing || this.bookmarkShowing) {
          if (!o.sideMenuOverBook) {
            this.bookLayer.css('left', '250px');
          }

          if (!this.options.sideMenuOverMenu) {
            this.wrapper.find('.flipbook-side-menu').css('bottom', this.menuBottom.outerHeight() + 'px');
          }

          if (!this.options.sideMenuOverMenu2) {
            this.wrapper.find('.flipbook-side-menu').css('top', this.menuTop.outerHeight() + 'px');
          }
        } else {
          this.bookLayer.css('left', '0px');
        }

        var model = this.model;
        model.wrapperW = this.bookLayer.width();
        model.wrapperH = this.bookLayer.height(); // if(o.menuFloating){
        //     this.menuBottom.css('left', model.wrapperW/2 - this.menuBottom.width()/2)
        // }
        // if(o.menu2Floating){
        //     this.menuTop.css('left', model.wrapperW/2 - this.menuTop.width()/2)
        // }

        o.zoomMax = o.zoomSize / model.wrapperH;
        model.zoom = o.zoomMin;
        this.Book.onResize();
        if (this.options.zoomReset) this.Book.zoomTo(this.options.zoomMin);
      },
      pdfResize: function pdfResize() {
        var self = this;
        /*
            //this.pdfDocument.getPage(1).then(function(page) {
            //self.viewportOriginal = page.getViewport(1);
        var bh = self.bookLayer.height()
        scale = bh / self.viewportOriginal.height
        scale *= self.zoom
         function findClosestInArray(num, arr) {
            var minDist = null
            var dist
            for (var i = 0; i < arr.length; i++) {
                dist = Math.abs(num - arr[i])
                if (!minDist || dist < minDist) {
                    minDist = dist
                    min = arr[i]
                }
            }
            return min
        }
         scale = findClosestInArray(scale, self.options.pdf.supportedScales)
          if (self.Book && self.options.pdf.currentScale != scale)*/

        self.Book.onZoom(); //});
      },
      createThumbs: function createThumbs() {
        this.thumbs = new FLIPBOOK.Thumbnails(this);
      },
      toggleThumbs: function toggleThumbs(value) {
        if (!this.thumbs) {
          this.createThumbs();
        }

        if (typeof value != 'undefined') this.thumbsShowing = !value;

        if (!this.thumbsShowing) {
          this.closeMenus();
          this.thumbs.show();
          this.thumbsShowing = true;
        } else {
          this.thumbs.hide();
          this.thumbsShowing = false;
        }

        this.resize();
      },
      toggleToc: function toggleToc(value) {
        if (!this.tocCreated) {
          this.createToc();
          return;
        }

        if (!this.tocShowing || value) {
          this.closeMenus();
          this.tocShowing = true;
          this.tocHolder.show();
          this.tocScroll.refresh();
        } else {
          this.tocHolder.hide();
          this.tocShowing = false;
        }

        this.resize();
      },
      toggleSearch: function toggleSearch(value) {
        if (!this.thumbs) {
          this.createThumbs();
        }

        if (typeof value != 'undefined') this.searchShowing = !value;

        if (!this.searchShowing) {
          this.closeMenus();
          this.thumbs.show();
          this.thumbs.showSearch();
          this.searchShowing = true;
        } else {
          this.thumbs.hide();
          this.searchShowing = false;
          this.unmark();
        }

        this.resize();
      },
      toggleBookmark: function toggleBookmark(value) {
        if (!this.thumbs) {
          this.createThumbs();
        }

        if (typeof value != 'undefined') this.bookmarkShowing = !value;

        if (!this.bookmarkShowing) {
          this.closeMenus();
          this.thumbs.show();
          this.thumbs.showBookmarks();
          this.bookmarkShowing = true;
        } else {
          this.thumbs.hide();
          this.bookmarkShowing = false;
        }

        this.resize();
      },
      closeMenus: function closeMenus() {
        if (this.thumbsShowing) this.toggleThumbs();
        if (this.tocShowing) this.toggleToc();
        if (this.searchShowing) this.toggleSearch();
        if (this.bookmarkShowing) this.toggleBookmark();
        if (this.printMenuShowing) this.togglePrintMenu();
        if (this.dlMenuShowing) this.toggleDownloadMenu();
        if (this.shareMenuShowing) this.toggleShareMenu();
      },
      togglePrintMenu: function togglePrintMenu() {
        var self = this;

        if (!this.printMenu) {
          this.printMenu = jQuery('<div class="flipbook-sub-menu flipbook-font">').appendTo(this.wrapper);
          var center = jQuery('<idv class="flipbook-sub-menu-center">').appendTo(this.printMenu);
          var content = jQuery('<idv class="flipbook-sub-menu-content skin-color-bg">').appendTo(center);
          this.createMenuHeader(content, this.strings.print, this.togglePrintMenu);
          var current = jQuery('<a><div class="c-p skin-color flipbook-btn">' + this.strings.printCurrentPage + '</div></a>').appendTo(content).bind('touchend click', function (e) {
            self.printPage(self.cPage[0], this);
          });
          var left = jQuery('<a><div class="c-l-p skin-color flipbook-btn">' + this.strings.printLeftPage + '</div></a>').appendTo(this.printMenu).appendTo(content).bind('touchend click', function (e) {
            self.printPage(self.cPage[0], this);
          });
          var right = jQuery('<a><div class="c-r-p skin-color flipbook-btn">' + this.strings.printRightPage + '</div></a>').appendTo(this.printMenu).appendTo(content).bind('touchend click', function (e) {
            self.printPage(self.cPage[1], this);
          });
          var all = jQuery('<a><div class="skin-color flipbook-btn">' + this.strings.printAllPages + '</div></a>').appendTo(content).bind('touchend click', function (e) {
            self.togglePrintWindow();
          });
          this.closeMenus();
          this.printMenuShowing = true;
          this.initColors();
          this.updateCurrentPage();
        } else if (!this.printMenuShowing) {
          this.closeMenus(); // this.printMenu.show()

          this.printMenu.show();
          this.printMenuShowing = true;
          this.updateCurrentPage();
        } else {
          this.printMenu.hide();
          this.printMenuShowing = false;
        }
      },
      toggleDownloadMenu: function toggleDownloadMenu() {
        var self = this;

        if (!this.dlMenu) {
          this.dlMenu = jQuery('<div class="flipbook-sub-menu flipbook-font">').appendTo(this.wrapper);
          var center = jQuery('<idv class="flipbook-sub-menu-center">').appendTo(this.dlMenu);
          var content = jQuery('<idv class="flipbook-sub-menu-content skin-color-bg">').appendTo(center);
          this.createMenuHeader(content, this.strings.download, this.toggleDownloadMenu);
          var current = jQuery('<a><div class="c-p skin-color flipbook-btn">' + this.strings.downloadCurrentPage + '</div></a>').appendTo(content).bind('touchend click', function (e) {
            self.downloadPage(self.cPage[0], this);
          });
          var left = jQuery('<a><div class="c-l-p skin-color flipbook-btn">' + this.strings.downloadLeftPage + '</div></a>').appendTo(content).bind('touchend click', function (e) {
            self.downloadPage(self.cPage[0], this);
          });
          var right = jQuery('<a><div class="c-r-p skin-color flipbook-btn">' + this.strings.downloadRightPage + '</div></a>').appendTo(content).bind('touchend click', function (e) {
            self.downloadPage(self.cPage[1], this);
          });
          var all = jQuery('<a><div class="skin-color flipbook-btn">' + this.strings.downloadAllPages + '</div></a>').appendTo(content).bind('touchend click', function (e) {
            var link = document.createElement('a');
            link.href = self.options.btnDownloadPages.url;
            var filename = link.href.split('/').pop().split('#')[0].split('?')[0];
            link.download = filename;
            link.dispatchEvent(new MouseEvent('click')); // window.location = self.options.btnDownloadPages.url;
          });
          this.closeMenus();
          this.dlMenuShowing = true;
          this.initColors();
          this.updateCurrentPage();
        } else if (!this.dlMenuShowing) {
          // this.dlMenu.show()
          this.dlMenu.show();
          this.closeMenus();
          this.dlMenuShowing = true;
          this.updateCurrentPage();
        } else {
          this.dlMenu.hide();
          this.dlMenuShowing = false;
        }
      },
      toggleShareMenu: function toggleShareMenu() {
        var self = this;

        if (!this.shareMenu) {
          this.shareMenu = jQuery('<div class="flipbook-sub-menu flipbook-font">').appendTo(this.wrapper);
          var center = jQuery('<idv class="flipbook-sub-menu-center">').appendTo(this.shareMenu);
          var content = jQuery('<idv class="flipbook-sub-menu-content skin-color-bg">').appendTo(center);
          this.createMenuHeader(content, "Share", this.toggleShareMenu);
          var shareBtn = jQuery('<idv class="flipbook-share">').appendTo(content);
          var o = this.options;
          this.share = new Share(shareBtn[0], {
            networks: {
              twitter: o.twitter,
              facebook: o.facebook,
              pinterest: o.pinterest,
              email: o.email
            }
          });
          this.closeMenus();
          this.shareMenuShowing = true;
          this.initColors();
        } else if (!this.shareMenuShowing) {
          // this.shareMenu.show()
          this.shareMenu.show();
          this.closeMenus();
          this.shareMenuShowing = true;
        } else {
          this.shareMenu.hide();
          this.shareMenuShowing = false;
        }
      },
      bookmarkPage: function bookmarkPage(index) {
        var arr = this.getBookmarkedPages();
        if (arr.indexOf(String(index)) < 0) arr.push(index);
        this.setBookmarkedPages(arr);
        this.thumbs.showBookmarkedThumbs();
        if (!this.bookmarkShowing) this.toggleBookmark();
      },
      removeBookmark: function removeBookmark(index) {
        var arr = this.getBookmarkedPages();
        if (arr.indexOf(String(index)) > -1) arr.splice(arr.indexOf(String(index)), 1);
        this.setBookmarkedPages(arr);
        this.thumbs.showBookmarkedThumbs();
        if (!this.bookmarkShowing) this.toggleBookmark();
      },
      isBookmarked: function isBookmarked(index) {
        var arr = this.getBookmarkedPages();
        return arr.indexOf(String(index)) > 0;
      },
      getBookmarkedPages: function getBookmarkedPages() {
        var str = localStorage.getItem(this.options.name + "_flipbook_bookmarks");
        if (str) return str.split(";");else return [];
      },
      setBookmarkedPages: function setBookmarkedPages(arr) {
        localStorage.setItem(this.options.name + "_flipbook_bookmarks", arr.join(";"));
      },
      printPage: function printPage(index, link) {
        var url;

        if (this.options.pages[index] && this.options.pages[index].print) {
          url = this.options.pages[index].print;
        } else if (this.options.pages[index] && this.options.pages[index].canvas && this.options.pages[index].canvas[this.options.pageTextureSize]) {
          url = this.options.pages[index].canvas[this.options.pageTextureSize].toDataURL();
        } else if (this.options.pages[index] && this.options.pages[index].src) {
          url = this.options.pages[index].src;
        }

        if (url) {
          var windowContent = '<!DOCTYPE html>';
          windowContent += '<html>';
          windowContent += '<head><title>Print canvas</title></head>';
          windowContent += '<body>';
          windowContent += '<img src="' + url + '">';
          windowContent += '</body>';
          windowContent += '</html>';
          var printWin = window.open("", 'Print', 'height=1600,width=800');
          printWin.document.open();
          printWin.document.write(windowContent);
          printWin.document.close();
          printWin.document.addEventListener('load', function () {
            printWin.focus();
            printWin.print();
            printWin.document.close();
            printWin.close();
          }, true);
        } else {
          var self = this;
          this.loadPage(index, this.options.pageTextureSize, function () {
            self.printPage(index);
          });
        }
      },
      downloadPage: function downloadPage(index) {
        var url;

        if (this.options.pages[index] && this.options.pages[index].download) {
          url = this.options.pages[index].download;
        } else if (this.options.pages[index] && this.options.pages[index].src) {
          url = this.options.pages[index].src;
        } else if (this.options.pages[index] && this.options.pages[index].canvas && this.options.pages[index].canvas[this.options.pageTextureSize]) {
          var c = document.createElement("canvas");
          var r = this.options.pageWidth / this.options.pageHeight;
          c.width = this.options.pageTextureSize * r;
          c.height = this.options.pageTextureSize;
          var ctx = c.getContext("2d");
          ctx.drawImage(this.options.pages[index].canvas[this.options.pageTextureSize], 0, 0); // url = this.options.pages[index].canvas[this.options.pageTextureSize].toDataURL('image/jpeg', 0.5);

          url = c.toDataURL('image/jpeg', 0.5); // delete c;
        }

        if (url) {
          var link = document.createElement('a');
          link.href = url;
          link.download = "page" + String(index + 1); // link.dispatchEvent(new MouseEvent('click'));

          document.body.appendChild(link);
          link.click(); // Cleanup the DOM

          document.body.removeChild(link); // delete link;
        } else {
          var self = this;
          this.loadPage(index, this.options.pageTextureSize, function () {
            self.downloadPage(index);
          });
        }
      },
      printPdf: function printPdf(url) {
        if (this.options.isMobile) {
          var w = window.open(url, '_blank', 'directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0');

          w.onload = function () {
            this.document.body.children[0].style.display = 'none';
            this.print();
          };
        } else {
          var iframe = this._printIframe;

          if (!this._printIframe) {
            iframe = this._printIframe = document.createElement('iframe');
            document.body.appendChild(iframe);
            iframe.style.display = 'none';

            iframe.onload = function () {
              setTimeout(function () {
                iframe.focus();
                iframe.contentWindow.print();
              }, 1);
            };
          }

          iframe.src = url;
        }
      },
      togglePrintWindow: function togglePrintWindow(value) {
        var self = this;

        if (self.options.printPdfUrl) {
          self.printPdf(self.options.printPdfUrl);
          return;
        }

        if (self.options.pdfUrl) {
          self.printPdf(self.options.pdfUrl);
          return;
        }

        function printme() {
          link = "about:blank";
          var pw = window.open(link, "_new");
          pw.document.open();
          var images = "";

          for (var i = 0; i < self.options.pages.length; i++) {
            if (self.options.pages[i].src) images += '<img src="' + self.options.pages[i].src.toString() + '"/>\n';
          }

          var printHtml = printWindowHtml(images);
          pw.document.write(printHtml);
          pw.document.close();
        }

        function printWindowHtml(images) {
          // We break the closing script tag in half to prevent
          // the HTML parser from seeing it as a part of
          // the *main* page.
          return "<html>\n" + "<head>\n" + "<title>Temporary Printing Window</title>\n" + "<script>\n" + "function step1() {\n" + "  setTimeout('step2()', 10);\n" + "}\n" + "function step2() {\n" + "  window.print();\n" + "  window.close();\n" + "}\n" + "</scr" + "ipt>\n" + "</head>\n" + "<body onLoad='step1()'>\n" + images + "</body>\n" + "</html>\n";
        }

        printme();
        return;
        var self = this;

        if (!this.printWindowCreated) {
          this.printWindowCreated = true;
          this.printWindow = jQuery('<div>').addClass('flipbook-print-window').appendTo(this.wrapper);
          var html = jQuery('<div class="panel panel-default">' + '<div class="panel-heading">Print</div>' + '<div class="panel-body">' + '<div class="row">' + '<div class="col-lg-12">' + '<form role="form">' + '<div class="form-group">' + '<label></label>' + '<label class="radio-inline"><input type="radio" name="optionsRadiosInline" id="optionsRadiosInline1" value="option1" checked>Left page</label>' + '<label class="radio-inline"><input type="radio" name="optionsRadiosInline" id="optionsRadiosInline2" value="option2">Right page</label>' + '<label class="radio-inline"><input type="radio" name="optionsRadiosInline" id="optionsRadiosInline3" value="option3">All pages</label>' + '</div>' + '<div class="form-group">' + '<label>Or select one or more pages</label>' + '<select multiple class="form-control">' + '<option>Page 1</option>' + '</select>' + '</div>' + '<button type="button" class="btn btn-default btn-close">Close</button>' + '<button type="button" class="btn btn-default pull-right btn-print">Print</button>' + '</form>' + '</div>' + '</div>' + '</div>' + '</div>').appendTo(this.printWindow).hide().fadeIn();
          this.printWindow.find('.btn-print').bind('touchend click', function () {
            printme();
          });
          this.printWindow.find('.btn-close').bind('touchend click', function () {
            self.printWindow.fadeToggle();
          });
        } else {
          this.printWindow.fadeToggle();
        }
      },
      thumbsVertical: function thumbsVertical() {
        if (!this.thumbsCreated) return;
        this.thumbScroll.hScroll = false;
        this.thumbScroll.vScroll = true;
        this.thumbScroll.refresh();
      },
      toggleExpand: function toggleExpand(e) {
        this.browserFullscreen = true;

        if (screenfull.enabled) {
          screenfull.toggle(this.fullscreenElement);
        } else {
          this.isFullscreen = !this.isFullscreen;
          this.handleFsChange();
        }
      },
      expand: function expand() {},
      toggleAutoplay: function toggleAutoplay(value) {
        var self = this;
        this.autoplay = value || !this.autoplay;

        if (this.autoplay) {
          this.btnAutoplay.$icon.hide();
          this.btnAutoplay.$iconAlt.show();
          this.autoplayTimer = setInterval(function () {
            if (self.autoplay) {
              var autoplayStartPage = self.options.autoplayStartPage || 1;

              if (self.options.rightToLeft) {
                if (self.Book.prevEnabled) self.prevPage();else if (self.options.autoplayLoop) self.goToPage(self.options.pages.length - autoplayStartPage + 1);
              } else {
                if (self.Book.nextEnabled) self.nextPage();else if (self.options.autoplayLoop) self.goToPage(autoplayStartPage);
              }
            }
          }, self.options.autoplayInterval);
        } else {
          this.btnAutoplay.$icon.show();
          this.btnAutoplay.$iconAlt.hide();
          clearInterval(self.autoplayTimer);
        }
      },
      triggerResizeOnce: function triggerResizeOnce() {
        setTimeout(function () {
          jQuery(window).trigger('resize');
        }, 100);
        setTimeout(function () {
          jQuery(window).trigger('resize');
        }, 500);
      },
      triggerResize: function triggerResize() {
        // var self = this
        setTimeout(function () {
          jQuery(window).trigger('resize');
        }, 100);
        setTimeout(function () {
          jQuery(window).trigger('resize');
        }, 500);
        setTimeout(function () {
          jQuery(window).trigger('resize');
        }, 2000);
      },
      initEasing: function initEasing() {
        //easign functions
        window.jQuery.extend(window.jQuery.easing, {
          def: 'easeOutQuad',
          swing: function swing(x, t, b, c, d) {
            //alert(jQuery.easing.default);
            return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
          },
          easeInQuad: function easeInQuad(x, t, b, c, d) {
            return c * (t /= d) * t + b;
          },
          easeOutQuad: function easeOutQuad(x, t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
          },
          easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
            return -c / 2 * (--t * (t - 2) - 1) + b;
          },
          easeInCubic: function easeInCubic(x, t, b, c, d) {
            return c * (t /= d) * t * t + b;
          },
          easeOutCubic: function easeOutCubic(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
          },
          easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
          },
          easeInQuart: function easeInQuart(x, t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
          },
          easeOutQuart: function easeOutQuart(x, t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
          },
          easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
          },
          easeInQuint: function easeInQuint(x, t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
          },
          easeOutQuint: function easeOutQuint(x, t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
          },
          easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
          },
          easeInSine: function easeInSine(x, t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
          },
          easeOutSine: function easeOutSine(x, t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
          },
          easeInOutSine: function easeInOutSine(x, t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
          },
          easeInExpo: function easeInExpo(x, t, b, c, d) {
            return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
          },
          easeOutExpo: function easeOutExpo(x, t, b, c, d) {
            return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
          },
          easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
          },
          easeInCirc: function easeInCirc(x, t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
          },
          easeOutCirc: function easeOutCirc(x, t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
          },
          easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
          },
          easeInElastic: function easeInElastic(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;

            if (a < Math.abs(c)) {
              a = c;
              var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);

            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
          },
          easeOutElastic: function easeOutElastic(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (!p) p = d * .3;

            if (a < Math.abs(c)) {
              a = c;
              var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);

            return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
          },
          easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
            var s = 1.70158;
            var p = 0;
            var a = c;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (!p) p = d * (.3 * 1.5);

            if (a < Math.abs(c)) {
              a = c;
              var s = p / 4;
            } else var s = p / (2 * Math.PI) * Math.asin(c / a);

            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
          },
          easeInBack: function easeInBack(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
          },
          easeOutBack: function easeOutBack(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
          },
          easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
            if (s == undefined) s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
          },
          easeInBounce: function easeInBounce(x, t, b, c, d) {
            return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
          },
          easeOutBounce: function easeOutBounce(x, t, b, c, d) {
            if ((t /= d) < 1 / 2.75) {
              return c * (7.5625 * t * t) + b;
            } else if (t < 2 / 2.75) {
              return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
            } else if (t < 2.5 / 2.75) {
              return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
            } else {
              return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
            }
          },
          easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
            if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
            return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
          }
        });
      }
    };
    {
      FLIPBOOK.Book = function () {};

      FLIPBOOK.Book.prototype = {
        rightIndex: 0,
        goToPage: function goToPage() {}
      };
    }
    {
      /* FLIPBOOK.Thumbnails */
      FLIPBOOK.Thumbnails = function (main) {
        var self = this,
            options = main.options,
            wrapper = main.wrapper;
        this.main = main;
        this.options = options;
        this.wrapper = wrapper;
        this.active = null;

        if (!options.btnThumbs.enabled) {
          return;
        }

        jQuery(main).bind('pagechange', function () {
          // console.log(self.bookmark.height())
          self.thumbsWrapper.css("top", self.bookmark.height() + 50 + "px");
        });
        this.thumbHolder = jQuery(document.createElement('div')).addClass('flipbook-thumbHolder flipbook-side-menu skin-color-bg').appendTo(wrapper).hide();
        this.thumbsWrapper = jQuery(document.createElement('div')).appendTo(this.thumbHolder).addClass('flipbook-thumbsWrapper');
        this.thumbsScroller = jQuery(document.createElement('div')).appendTo(this.thumbsWrapper).addClass('flipbook-thumbsScroller');
        main.createMenuHeader(this.thumbHolder, main.strings.thumbnails, main.toggleThumbs); //bookmark

        this.bookmark = jQuery('<div>').addClass('flipbook-font').appendTo(this.thumbHolder).hide();
        var current = jQuery('<a><div class="c-p skin-color flipbook-btn">' + options.strings.bookmarkCurrentPage + '</div></a>').appendTo(this.bookmark).bind('touchend click', function (e) {
          main.bookmarkPage(main.cPage[0], this);
          e.preventDefault();
          e.stopPropagation();
        });
        var left = jQuery('<a><div class="c-l-p skin-color flipbook-btn">' + options.strings.bookmarkLeftPage + '</div></a>').appendTo(this.bookmark).bind('touchend click', function (e) {
          main.bookmarkPage(main.cPage[0], this);
          e.preventDefault();
          e.stopPropagation();
        });
        var right = jQuery('<a><div class="c-r-p skin-color flipbook-btn">' + options.strings.bookmarkRightPage + '</div></a>').appendTo(this.bookmark).bind('touchend click', function (e) {
          main.bookmarkPage(main.cPage[1], this);
          e.preventDefault();
          e.stopPropagation();
        }); //search

        this.search = jQuery('<div>').addClass('flipbook-search').appendTo(this.thumbHolder).hide();
        this.$searchBar = jQuery('<div class="flipbook-findbar" id="findbar" deluminate_imagetype="png">' + '<div id="findbarInputContainer">' + '<input id="findInput" class="toolbarField" title="Find" placeholder="' + options.strings.findInDocument + '...">' + '</div>' + '<div class="flipbook-find-info skin-color"/>' + '</div>').appendTo(this.search);
        this.$findInput = this.$searchBar.find('#findInput').keyup(function () {
          // var str = this.value
          self.searchPDF(this.value); // console.log("searching", this.value)
          // self.hideAllThumbs()
          // self.pagesFound = 0
          // // self.$findInfo.show().text('0 ' + options.strings.pagesFoundContaining + ' "' + str + '"')
          // self.$findInfo.hide()
          // main.unmark()
          // if (str != ''){
          //     main.searchingString = str
          //     if (main.pdfService) {
          //         // for (var i = 0; i < 1; i++) {
          //         for (var i = 0; i < main.pdfService.pdfInfo.numPages; i++) {
          //             self.findInPage(str, i)
          //         }
          //     }
          //     // main.mark(str)
          // }
        });
        this.$findInfo = this.$searchBar.find('.flipbook-find-info');
        this.thumbs = [];
        var arr2 = options.pages;
        var arr = [];

        if (options.doublePage) {
          for (var i = 0; i < arr2.length; i++) {
            if (i == 0 || i % 2 != 0) arr.push(arr2[i]);
          }
        } else {
          arr = arr2;
        }

        if (options.pdfMode) {
          this.loadThumbsFromPdf(arr);
        }

        var h = options.thumbSize;
        var w = options.thumbSize * options.pageWidth / options.pageHeight;

        for (var i = 0; i < arr.length; i++) {
          var th = arr[i].thumb;
          if (arr[i].empty) continue;
          var $thumb = jQuery('<div>').addClass("flipbook-thumb").appendTo(self.thumbsScroller).attr('data-thumb-index', i).width(w).height(h);
          var btnClose = jQuery('<span>').appendTo($thumb).addClass('thumb-btn-close').bind('touchend click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            main.removeBookmark(jQuery(this).parent().attr("data-thumb-index"));
          });
          var $icon = jQuery('<span>').attr('aria-hidden', 'true').appendTo(btnClose).addClass('fa fa-times skin-color');
          this.thumbs.push($thumb);

          if (arr[i].thumbCanvas) {
            var $thumbImg = jQuery(arr[i].thumbCanvas);
          } else if (th) {
            var $thumbImg = jQuery('<img/>').attr('src', th);

            $thumbImg[0].onload = function () {
              self.thumbScroll.refresh();
            };
          } else continue;

          $thumbImg.appendTo($thumb);
          jQuery('<br/>').appendTo($thumb);

          if (options.doublePage && i > 0) {
            $thumb.width(2 * w);
            $thumbImg.height(h).width(2 * w).attr('page-title', 2 * i + 1);
            var $pageNumber = jQuery(document.createElement('soan')).text(String(2 * i) + "-" + String(2 * i + 1)).appendTo($thumb).addClass('skin-color').addClass('flipbook-thumb-num');
          } else {
            $thumbImg.height(h).width(w).attr('page-title', i + 1);
            var $pageNumber = jQuery(document.createElement('span')).text(i + 1).appendTo($thumb).addClass('skin-color').addClass('flipbook-thumb-num'); // .width(self.options.thumbSize);
          }

          $thumbImg.bind('touchend click', function (e) {
            e.stopPropagation();
            e.preventDefault();

            if (!self.thumbScroll.moved) {
              var clickedPage = Number(jQuery(this).attr('page-title'));
              if (options.rightToLeft) clickedPage = options.pages.length - clickedPage + 1; //if (self.options.singlePageMode) clickedPage--;
              // if (self.Book.goingToPage != clickedPage)

              setTimeout(function () {
                main.goToPage(clickedPage);
              }, 200);
              if (self.active != "search" && options.thumbsCloseOnClick) main.toggleThumbs(false);
            }
          });
        }

        this.thumbScroll = new FLIPBOOK.IScroll(this.thumbsWrapper[0], {
          bounce: false,
          mouseWheel: true,
          scrollbars: true,
          interactiveScrollbars: true
        });
        main.initColors();
      };

      FLIPBOOK.Thumbnails.prototype = {
        loadThumbsFromPdf: function loadThumbsFromPdf(arr) {
          // return;
          var self = this,
              pdf = this.main.pdfDocument,
              info = pdf._pdfInfo,
              numPages = info.numPages;

          for (var i = 0; i < numPages; i++) {
            var c = document.createElement('canvas');
            arr[i].thumbCanvas = c;
          }

          this.loadThumbFromPdf(0, arr);
        },
        loadVisibleThumbs: function loadVisibleThumbs() {// this.thumbs.forEach(function(thumb){
          //     console.log(thumb.offset().top)
          // })
        },
        loadThumbFromPdf: function loadThumbFromPdf(i, arr) {
          var self = this;
          this.main.pdfDocument.getPage(i + 1).then(function (page) {
            var v = page.getViewport({
              scale: 1
            });
            var scale = self.options.thumbSize / v.height;
            var viewport = page.getViewport({
              scale: scale
            });
            var c = arr[page.pageIndex].thumbCanvas;
            var context = c.getContext('2d');
            c.height = viewport.height;
            c.width = viewport.width;
            var renderContext = {
              canvasContext: context,
              viewport: viewport
            };
            page.cleanupAfterRender = true;
            var renderTask = page.render(renderContext);
            renderTask.promise.then(function () {
              page.cleanup();
              if (page.pageIndex + 1 < self.main.pdfDocument._pdfInfo.numPages) self.loadThumbFromPdf(page.pageIndex + 1, arr);
            }); // page.render(renderContext).then(function() {
            //     page.cleanup()
            //     if ((page.pageIndex + 1) < self.main.pdfDocument._pdfInfo.numPages)
            //         self.loadThumbFromPdf(page.pageIndex + 1, arr)
            // })

            self.thumbScroll.refresh();
          });
        },
        showAllThumbs: function showAllThumbs() {
          jQuery(".flipbook-thumb").show();
          this.thumbScroll.refresh();
        },
        hideAllThumbs: function hideAllThumbs() {
          jQuery(".flipbook-thumb").hide();
          this.thumbScroll.refresh();
        },
        showThumb: function showThumb(index) {
          if (this.thumbs[index]) this.thumbs[index].show();
          this.thumbScroll.refresh();
        },
        hideThumb: function hideThumb(index) {
          this.thumbs[index].hide();
          this.thumbScroll.refresh();
        },
        showBookmarks: function showBookmarks() {
          jQuery(".thumb-btn-close").show();
          this.showBookmarkedThumbs();
          this.bookmark.show();
          this.setTitle(this.options.strings.bookmarks);
          this.main.updateCurrentPage();
          this.active = "bookmarks";
        },
        showSearch: function showSearch() {
          this.thumbsWrapper.css("top", "120px");
          this.hideAllThumbs();
          this.search.show();
          this.$findInfo.hide();
          jQuery(".thumb-btn-close").hide();
          this.setTitle(this.options.strings.search);
          this.$findInput.val('').focus();
          this.active = "search";
        },
        showBookmarkedThumbs: function showBookmarkedThumbs() {
          var arr = this.main.getBookmarkedPages();
          this.hideAllThumbs();

          for (var i = 0; i < arr.length; i++) {
            var index = arr[i];
            if (index) this.showThumb(index);
          }

          this.thumbsWrapper.css("top", 50 + this.bookmark.height() + 'px');
        },
        show: function show() {
          this.setTitle(this.options.strings.thumbnails);
          this.bookmark.hide();
          this.search.hide();
          this.thumbHolder.show();
          this.main.thumbsVertical();
          this.thumbsWrapper.css("top", "50px");
          this.showAllThumbs();
          jQuery(".thumb-btn-close").hide();
          this.loadVisibleThumbs();
          this.main.resize();
          this.active = "thumbs";
        },
        hide: function hide() {
          this.thumbHolder.hide();
          this.main.resize();
          this.active = null;
        },
        searchPDF: function searchPDF(str) {
          // var str = this.value
          // console.log("searching", this.value)
          // this.showSearch()
          var main = this.main;
          this.hideAllThumbs();
          this.pagesFound = 0; // self.$findInfo.show().text('0 ' + options.strings.pagesFoundContaining + ' "' + str + '"')

          this.$findInfo.hide();
          main.unmark();

          if (str != '') {
            main.searchingString = str;

            if (main.pdfService) {
              // for (var i = 0; i < 1; i++) {
              for (var i = 0; i < main.pdfService.pdfInfo.numPages; i++) {
                this.findInPage(str, i);
              }
            } // main.mark(str)

          }
        },
        setTitle: function setTitle(str) {
          this.thumbHolder.find('.flipbook-menu-title').text(str);
        },
        findInPage: function findInPage(str, index) {
          var self = this;
          this.main.pdfService.findInPage(str, index, function (matches) {
            if (matches > 0) {
              self.showThumb(index);
              self.pagesFound++;
              self.$findInfo.show().text(self.pagesFound + ' ' + self.options.strings.pagesFoundContaining + ' "' + str + '"');
              self.main.mark(str);
            }
          });
        }
      };
    }
    {
      /* FLIPBOOK.Lightbox */
      FLIPBOOK.Lightbox = function (context, content, options) {
        var self = this;
        this.context = context;
        this.options = options;
        context.$elem.bind('tap click', function (e) {
          if (content.disposed) return;
          self.openLightbox();
          e.stopPropagation();
          /*if (self.context.options.lightBoxFullscreen) {
              self.context.toggleExpand()
          }*/
        });
        var img = jQuery(context.elem).find('img');
        self.overlay = jQuery(document.createElement('div')).attr('style', options.lightboxCSS).addClass('flipbook-overlay').css('display', 'none').css('top', self.options.lightboxMarginV).css('bottom', self.options.lightboxMarginV).css('left', self.options.lightboxMarginH).css('right', self.options.lightboxMarginH) // .bind('tap click', function(e) {
        //     if (jQuery(e.target).hasClass('flipbook-bookLayer') && self.options.lightboxCloseOnClick) {
        //         self.closeLightbox();
        //     }
        // })
        .appendTo('body');

        if (self.options.lightboxCloseOnClick) {
          jQuery('body').bind('tap click', function (e) {
            var $target = jQuery(e.target);
            if (!$target.parents().hasClass('flipbook-overlay') || $target.hasClass('flipbook-bookLayer')) self.closeLightbox();
          });
        }

        if (options.lightboxBackground) self.overlay.css('background', options.lightboxBackground);
        if (options.lightboxBackgroundColor) self.overlay.css('background', options.lightboxBackgroundColor);
        if (options.lightboxBackgroundPattern) self.overlay.css('background', 'url(' + options.lightboxBackgroundPattern + ') repeat');

        if (options.lightboxBackgroundImage) {
          self.overlay.css('background', 'url(' + options.lightboxBackgroundImage + ') no-repeat');
          self.overlay.css('background-size', 'cover');
          self.overlay.css('background-position', 'center center');
        }

        jQuery(document).keyup(function (e) {
          if (e.keyCode == 27) {
            self.closeLightbox();
          } // escape key maps to keycode `27`

        });
        self.wrapper = jQuery(document.createElement('div')).css('height', 'auto').appendTo(self.overlay); // .hide()

        self.wrapper.attr('class', 'flipbook-wrapper-transparent').css('margin', '0px auto').css('padding', '0px').css('height', '100%').css('width', '100%');
        content.appendTo(self.wrapper); // close button

        var $toolbar = jQuery('<div/>').appendTo(self.wrapper).addClass('flipbook-lightbox-toolbar');
        var o = options;
      };

      FLIPBOOK.Lightbox.prototype = {
        openLightbox: function openLightbox() {
          if (FLIPBOOK.lightboxOpened) return;
          FLIPBOOK.lightboxOpened = true;
          this.overlay.css('display', 'none');
          this.overlay.fadeIn("slow");
          jQuery('body').addClass('flipbook-overflow-hidden');
          jQuery('html').addClass('flipbook-overflow-hidden');
        },
        closeLightbox: function closeLightbox() {
          var self = this;
          FLIPBOOK.lightboxOpened = false;
          this.overlay.fadeOut("fast");
          jQuery('body').removeClass('flipbook-overflow-hidden');
          jQuery('html').removeClass('flipbook-overflow-hidden');
          jQuery(this.context.fullscreenElement).removeClass('flipbook-browser-fullscreen');
          self.context.lightboxEnd();
        },
        resize: function resize() {
          var self = this;
          var jQuerywindow = jQuery(window),
              ww = jQuerywindow.width(),
              wh = jQuerywindow.height();
        }
      };
    }
    {
      FLIPBOOK.getFlipbookSrc = function () {
        var scripts = document.getElementsByTagName("script");

        for (var i = 0; i < scripts.length; i++) {
          var src = String(scripts[i].src);
          if (src.match("flipbook\\.js") || src.match("flipbook\\.min\\.js")) // if (src.match("flipbook.js") || src.match("flipbook.min.js"))
            return src;else if (src.match("flipbook\\.lite\\.js") || src.match("flipbook\\.lite\\.min\\.js")) // if (src.match("flipbook.js") || src.match("flipbook.min.js"))
            return src.replace(".lite", "");
        }

        return "";
      };

      FLIPBOOK.flipbookSrc = FLIPBOOK.getFlipbookSrc();
      FLIPBOOK.iscrollSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/iscroll.');
      FLIPBOOK.threejsSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/three.');
      FLIPBOOK.flipbookWebGlSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/flipbook.webgl.');
      FLIPBOOK.flipbookBook3Src = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/flipbook.book3.');
      FLIPBOOK.flipBookSwipeSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/flipbook.swipe.');
      FLIPBOOK.pdfjsSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/pdf.');
      FLIPBOOK.pdfServiceSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/flipbook.pdfservice.');
      FLIPBOOK.pdfjsworkerSrc = FLIPBOOK.flipbookSrc.replace("/flipbook.", '/pdf.worker.'); // FLIPBOOK.markSrc = "https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/jquery.mark.min.js"

      FLIPBOOK.markSrc = "https://cdnjs.cloudflare.com/ajax/libs/mark.js/8.11.1/jquery.mark.js";
      FLIPBOOK.scriptsLoaded = {};
      FLIPBOOK.scriptsAdded = {};
    } // {/*image loader object*/
    //     FLIPBOOK.ImageLoader = function(){
    //         console.log("new ImageLoader()")
    //         this.images = {}
    //     }
    //     FLIPBOOK.ImageLoader.prototype = {
    //         loadImage : function(src, onComplete){
    //             console.log('load ',src)
    //             // var onComplete = onComplete || function(){}
    //             var images = this.images
    //             if(!images[src]){
    //                 images[src] = document.createElement('img')
    //             }
    //             var img = images[src]
    //             if(img.loaded){
    //                 console.log("already loaded");
    //                 if(onComplete) onComplete(img);
    //                 return;
    //             }
    //             img.onComplete = img.onComplete || []
    //             img.onComplete.push(onComplete)
    //             if(img.loading){
    //                  console.log("loading...")
    //             }else{
    //                 img.onload = function(){
    //                     img.loading = false
    //                     img.loaded = true
    //                     for (var i = 0; i < img.onComplete.length; i ++) {
    //                         var callback = img.onComplete[i]
    //                         if(callback) callback(img)
    //                         img.onComplete[i] = null
    //                     }
    //                 }
    //                 img.src = src
    //                 img.loading = true
    //             }
    //         }
    //     }            
    // }
  })(jQuery, window, document);
}
{
  FLIPBOOK.onPageLinkClick = function (link) {
    var id = link.dataset.bookid;
    var page = link.dataset.page;
    if (page) FLIPBOOK.books[id].goToPage(Number(page));
    var _url = link.dataset.url;
    if (_url) window.open(_url, '_blank');
  };
}
{
  /* screenfull.js */

  /*!
    * screenfull
    * v4.0.0 - 2018-12-15
    * (c) Sindre Sorhus; MIT License
    */
  !function () {
    "use strict";

    var u = "undefined" != typeof window && void 0 !== window.document ? window.document : {},
        e =  true && module.exports,
        t = "undefined" != typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        c = function () {
      for (var e, n = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], r = 0, l = n.length, t = {}; r < l; r++) {
        if ((e = n[r]) && e[1] in u) {
          for (r = 0; r < e.length; r++) {
            t[n[0][r]] = e[r];
          }

          return t;
        }
      }

      return !1;
    }(),
        l = {
      change: c.fullscreenchange,
      error: c.fullscreenerror
    },
        n = {
      request: function request(l) {
        return new Promise(function (e) {
          var n = c.requestFullscreen,
              r = function () {
            this.off("change", r), e();
          }.bind(this);

          l = l || u.documentElement, / Version\/5\.1(?:\.\d+)? Safari\//.test(navigator.userAgent) ? l[n]() : l[n](t ? Element.ALLOW_KEYBOARD_INPUT : {}), this.on("change", r);
        }.bind(this));
      },
      exit: function exit() {
        return new Promise(function (e) {
          var n = function () {
            this.off("change", n), e();
          }.bind(this);

          u[c.exitFullscreen](), this.on("change", n);
        }.bind(this));
      },
      toggle: function toggle(e) {
        return this.isFullscreen ? this.exit() : this.request(e);
      },
      onchange: function onchange(e) {
        this.on("change", e);
      },
      onerror: function onerror(e) {
        this.on("error", e);
      },
      on: function on(e, n) {
        var r = l[e];
        r && u.addEventListener(r, n, !1);
      },
      off: function off(e, n) {
        var r = l[e];
        r && u.removeEventListener(r, n, !1);
      },
      raw: c
    };

    c ? (Object.defineProperties(n, {
      isFullscreen: {
        get: function get() {
          return Boolean(u[c.fullscreenElement]);
        }
      },
      element: {
        enumerable: !0,
        get: function get() {
          return u[c.fullscreenElement];
        }
      },
      enabled: {
        enumerable: !0,
        get: function get() {
          return Boolean(u[c.fullscreenEnabled]);
        }
      }
    }), e ? module.exports = n : window.screenfull = n) : e ? module.exports = !1 : window.screenfull = !1;
  }();
}
{
  /*!
   * @fileOverview TouchSwipe - jQuery Plugin
   * @version 1.6.18
   *
   * @author Matt Bryson http://www.github.com/mattbryson
   * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
   * @see http://labs.rampinteractive.co.uk/touchSwipe/
   * @see http://plugins.jquery.com/project/touchSwipe
   * @license
   * Copyright (c) 2010-2015 Matt Bryson
   * Dual licensed under the MIT or GPL Version 2 licenses.
   *
   */
  !function (factory) {
     true && __webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").jQuery ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : factory( true && module.exports ? __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js") : jQuery);
  }(function ($) {
    "use strict";

    function init(options) {
      return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE), void 0 !== options.click && void 0 === options.tap && (options.tap = options.click), options || (options = {}), options = $.extend({}, $.fn.swipe.defaults, options), this.each(function () {
        var $this = $(this),
            plugin = $this.data(PLUGIN_NS);
        plugin || (plugin = new TouchSwipe(this, options), $this.data(PLUGIN_NS, plugin));
      });
    }

    function TouchSwipe(element, options) {
      function touchStart(jqEvent) {
        if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) {
          var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

          if (!event.pointerType || "mouse" != event.pointerType || 0 != options.fallbackToMouseEvents) {
            var ret,
                touches = event.touches,
                evt = touches ? touches[0] : event;
            return phase = PHASE_START, touches ? fingerCount = touches.length : options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), distance = 0, direction = null, currentDirection = null, pinchDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, maximumsMap = createMaximumsData(), cancelMultiFingerRelease(), createFingerData(0, evt), !touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (startTime = getTimeStamp(), 2 == fingerCount && (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)), (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1, ret === !1 ? (phase = PHASE_CANCEL, triggerHandler(event, phase), ret) : (options.hold && (holdTimeout = setTimeout($.proxy(function () {
              $element.trigger("hold", [event.target]), options.hold && (ret = options.hold.call($element, event, event.target));
            }, this), options.longTapThreshold)), setTouchInProgress(!0), null);
          }
        }
      }

      function touchMove(jqEvent) {
        var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;

        if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) {
          var ret,
              touches = event.touches,
              evt = touches ? touches[0] : event,
              currentFinger = updateFingerData(evt);

          if (endTime = getTimeStamp(), touches && (fingerCount = touches.length), options.hold && clearTimeout(holdTimeout), phase = PHASE_MOVE, 2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(touches[1]), endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end), pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)), pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance), pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)), fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches()) {
            if (direction = calculateDirection(currentFinger.start, currentFinger.end), currentDirection = calculateDirection(currentFinger.last, currentFinger.end), validateDefaultEvent(jqEvent, currentDirection), distance = calculateDistance(currentFinger.start, currentFinger.end), duration = calculateDuration(), setMaxDistance(direction, distance), ret = triggerHandler(event, phase), !options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
              var inBounds = !0;

              if (options.triggerOnTouchLeave) {
                var bounds = getbounds(this);
                inBounds = isInBounds(currentFinger.end, bounds);
              }

              !options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)), phase != PHASE_CANCEL && phase != PHASE_END || triggerHandler(event, phase);
            }
          } else phase = PHASE_CANCEL, triggerHandler(event, phase);

          ret === !1 && (phase = PHASE_CANCEL, triggerHandler(event, phase));
        }
      }

      function touchEnd(jqEvent) {
        var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
            touches = event.touches;

        if (touches) {
          if (touches.length && !inMultiFingerRelease()) return startMultiFingerRelease(event), !0;
          if (touches.length && inMultiFingerRelease()) return !0;
        }

        return inMultiFingerRelease() && (fingerCount = fingerCountAtRelease), endTime = getTimeStamp(), duration = calculateDuration(), didSwipeBackToCancel() || !validateSwipeDistance() ? (phase = PHASE_CANCEL, triggerHandler(event, phase)) : options.triggerOnTouchEnd || options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE ? (options.preventDefaultEvents !== !1 && jqEvent.cancelable !== !1 && jqEvent.preventDefault(), phase = PHASE_END, triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END, triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL, triggerHandler(event, phase)), setTouchInProgress(!1), null;
      }

      function touchCancel() {
        fingerCount = 0, endTime = 0, startTime = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, cancelMultiFingerRelease(), setTouchInProgress(!1);
      }

      function touchLeave(jqEvent) {
        var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
        options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END), triggerHandler(event, phase));
      }

      function removeListeners() {
        $element.unbind(START_EV, touchStart), $element.unbind(CANCEL_EV, touchCancel), $element.unbind(MOVE_EV, touchMove), $element.unbind(END_EV, touchEnd), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave), setTouchInProgress(!1);
      }

      function getNextPhase(currentPhase) {
        var nextPhase = currentPhase,
            validTime = validateSwipeTime(),
            validDistance = validateSwipeDistance(),
            didCancel = didSwipeBackToCancel();
        return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END, nextPhase;
      }

      function triggerHandler(event, phase) {
        var ret,
            touches = event.touches;
        return (didSwipe() || hasSwipes()) && (ret = triggerHandlerForGesture(event, phase, SWIPE)), (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)), didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)), phase === PHASE_CANCEL && touchCancel(event), phase === PHASE_END && (touches ? touches.length || touchCancel(event) : touchCancel(event)), ret;
      }

      function triggerHandlerForGesture(event, phase, gesture) {
        var ret;

        if (gesture == SWIPE) {
          if ($element.trigger("swipeStatus", [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]), options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection), ret === !1)) return !1;

          if (phase == PHASE_END && validateSwipe()) {
            if (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), $element.trigger("swipe", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection), ret === !1)) return !1;

            switch (direction) {
              case LEFT:
                $element.trigger("swipeLeft", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                break;

              case RIGHT:
                $element.trigger("swipeRight", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                break;

              case UP:
                $element.trigger("swipeUp", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                break;

              case DOWN:
                $element.trigger("swipeDown", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
            }
          }
        }

        if (gesture == PINCH) {
          if ($element.trigger("pinchStatus", [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData), ret === !1)) return !1;
          if (phase == PHASE_END && validatePinch()) switch (pinchDirection) {
            case IN:
              $element.trigger("pinchIn", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
              break;

            case OUT:
              $element.trigger("pinchOut", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
          }
        }

        return gesture == TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(), singleTapTimeout = setTimeout($.proxy(function () {
          doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target));
        }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), doubleTapStartTime = null, $element.trigger("doubletap", [event.target]), options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), doubleTapStartTime = null, $element.trigger("longtap", [event.target]), options.longTap && (ret = options.longTap.call($element, event, event.target)))), ret;
      }

      function validateSwipeDistance() {
        var valid = !0;
        return null !== options.threshold && (valid = distance >= options.threshold), valid;
      }

      function didSwipeBackToCancel() {
        var cancelled = !1;
        return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold), cancelled;
      }

      function validatePinchDistance() {
        return null === options.pinchThreshold || pinchDistance >= options.pinchThreshold;
      }

      function validateSwipeTime() {
        var result;
        return result = !options.maxTimeThreshold || !(duration >= options.maxTimeThreshold);
      }

      function validateDefaultEvent(jqEvent, direction) {
        if (options.preventDefaultEvents !== !1) if (options.allowPageScroll === NONE) jqEvent.preventDefault();else {
          var auto = options.allowPageScroll === AUTO;

          switch (direction) {
            case LEFT:
              (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
              break;

            case RIGHT:
              (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
              break;

            case UP:
              (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
              break;

            case DOWN:
              (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
              break;

            case NONE:
          }
        }
      }

      function validatePinch() {
        var hasCorrectFingerCount = validateFingers(),
            hasEndPoint = validateEndPoint(),
            hasCorrectDistance = validatePinchDistance();
        return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance;
      }

      function hasPinches() {
        return !!(options.pinchStatus || options.pinchIn || options.pinchOut);
      }

      function didPinch() {
        return !(!validatePinch() || !hasPinches());
      }

      function validateSwipe() {
        var hasValidTime = validateSwipeTime(),
            hasValidDistance = validateSwipeDistance(),
            hasCorrectFingerCount = validateFingers(),
            hasEndPoint = validateEndPoint(),
            didCancel = didSwipeBackToCancel(),
            valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
        return valid;
      }

      function hasSwipes() {
        return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown);
      }

      function didSwipe() {
        return !(!validateSwipe() || !hasSwipes());
      }

      function validateFingers() {
        return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH;
      }

      function validateEndPoint() {
        return 0 !== fingerData[0].end.x;
      }

      function hasTap() {
        return !!options.tap;
      }

      function hasDoubleTap() {
        return !!options.doubleTap;
      }

      function hasLongTap() {
        return !!options.longTap;
      }

      function validateDoubleTap() {
        if (null == doubleTapStartTime) return !1;
        var now = getTimeStamp();
        return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold;
      }

      function inDoubleTap() {
        return validateDoubleTap();
      }

      function validateTap() {
        return (1 === fingerCount || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold);
      }

      function validateLongTap() {
        return duration > options.longTapThreshold && distance < DOUBLE_TAP_THRESHOLD;
      }

      function didTap() {
        return !(!validateTap() || !hasTap());
      }

      function didDoubleTap() {
        return !(!validateDoubleTap() || !hasDoubleTap());
      }

      function didLongTap() {
        return !(!validateLongTap() || !hasLongTap());
      }

      function startMultiFingerRelease(event) {
        previousTouchEndTime = getTimeStamp(), fingerCountAtRelease = event.touches.length + 1;
      }

      function cancelMultiFingerRelease() {
        previousTouchEndTime = 0, fingerCountAtRelease = 0;
      }

      function inMultiFingerRelease() {
        var withinThreshold = !1;

        if (previousTouchEndTime) {
          var diff = getTimeStamp() - previousTouchEndTime;
          diff <= options.fingerReleaseThreshold && (withinThreshold = !0);
        }

        return withinThreshold;
      }

      function getTouchInProgress() {
        return !($element.data(PLUGIN_NS + "_intouch") !== !0);
      }

      function setTouchInProgress(val) {
        $element && (val === !0 ? ($element.bind(MOVE_EV, touchMove), $element.bind(END_EV, touchEnd), LEAVE_EV && $element.bind(LEAVE_EV, touchLeave)) : ($element.unbind(MOVE_EV, touchMove, !1), $element.unbind(END_EV, touchEnd, !1), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)), $element.data(PLUGIN_NS + "_intouch", val === !0));
      }

      function createFingerData(id, evt) {
        var f = {
          start: {
            x: 0,
            y: 0
          },
          last: {
            x: 0,
            y: 0
          },
          end: {
            x: 0,
            y: 0
          }
        };
        return f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX, f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY, fingerData[id] = f, f;
      }

      function updateFingerData(evt) {
        var id = void 0 !== evt.identifier ? evt.identifier : 0,
            f = getFingerData(id);
        return null === f && (f = createFingerData(id, evt)), f.last.x = f.end.x, f.last.y = f.end.y, f.end.x = evt.pageX || evt.clientX, f.end.y = evt.pageY || evt.clientY, f;
      }

      function getFingerData(id) {
        return fingerData[id] || null;
      }

      function setMaxDistance(direction, distance) {
        direction != NONE && (distance = Math.max(distance, getMaxDistance(direction)), maximumsMap[direction].distance = distance);
      }

      function getMaxDistance(direction) {
        if (maximumsMap[direction]) return maximumsMap[direction].distance;
      }

      function createMaximumsData() {
        var maxData = {};
        return maxData[LEFT] = createMaximumVO(LEFT), maxData[RIGHT] = createMaximumVO(RIGHT), maxData[UP] = createMaximumVO(UP), maxData[DOWN] = createMaximumVO(DOWN), maxData;
      }

      function createMaximumVO(dir) {
        return {
          direction: dir,
          distance: 0
        };
      }

      function calculateDuration() {
        return endTime - startTime;
      }

      function calculateTouchesDistance(startPoint, endPoint) {
        var diffX = Math.abs(startPoint.x - endPoint.x),
            diffY = Math.abs(startPoint.y - endPoint.y);
        return Math.round(Math.sqrt(diffX * diffX + diffY * diffY));
      }

      function calculatePinchZoom(startDistance, endDistance) {
        var percent = endDistance / startDistance * 1;
        return percent.toFixed(2);
      }

      function calculatePinchDirection() {
        return pinchZoom < 1 ? OUT : IN;
      }

      function calculateDistance(startPoint, endPoint) {
        return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)));
      }

      function calculateAngle(startPoint, endPoint) {
        var x = startPoint.x - endPoint.x,
            y = endPoint.y - startPoint.y,
            r = Math.atan2(y, x),
            angle = Math.round(180 * r / Math.PI);
        return angle < 0 && (angle = 360 - Math.abs(angle)), angle;
      }

      function calculateDirection(startPoint, endPoint) {
        if (comparePoints(startPoint, endPoint)) return NONE;
        var angle = calculateAngle(startPoint, endPoint);
        return angle <= 45 && angle >= 0 ? LEFT : angle <= 360 && angle >= 315 ? LEFT : angle >= 135 && angle <= 225 ? RIGHT : angle > 45 && angle < 135 ? DOWN : UP;
      }

      function getTimeStamp() {
        var now = new Date();
        return now.getTime();
      }

      function getbounds(el) {
        el = $(el);
        var offset = el.offset(),
            bounds = {
          left: offset.left,
          right: offset.left + el.outerWidth(),
          top: offset.top,
          bottom: offset.top + el.outerHeight()
        };
        return bounds;
      }

      function isInBounds(point, bounds) {
        return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom;
      }

      function comparePoints(pointA, pointB) {
        return pointA.x == pointB.x && pointA.y == pointB.y;
      }

      var options = $.extend({}, options),
          useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents,
          START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
          MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
          END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
          LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? "mouseleave" : null : "mouseleave",
          CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel",
          distance = 0,
          direction = null,
          currentDirection = null,
          duration = 0,
          startTouchesDistance = 0,
          endTouchesDistance = 0,
          pinchZoom = 1,
          pinchDistance = 0,
          pinchDirection = 0,
          maximumsMap = null,
          $element = $(element),
          phase = "start",
          fingerCount = 0,
          fingerData = {},
          startTime = 0,
          endTime = 0,
          previousTouchEndTime = 0,
          fingerCountAtRelease = 0,
          doubleTapStartTime = 0,
          singleTapTimeout = null,
          holdTimeout = null;

      try {
        $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel);
      } catch (e) {
        $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe");
      }

      this.enable = function () {
        return this.disable(), $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel), $element;
      }, this.disable = function () {
        return removeListeners(), $element;
      }, this.destroy = function () {
        removeListeners(), $element.data(PLUGIN_NS, null), $element = null;
      }, this.option = function (property, value) {
        if ("object" == _typeof(property)) options = $.extend(options, property);else if (void 0 !== options[property]) {
          if (void 0 === value) return options[property];
          options[property] = value;
        } else {
          if (!property) return options;
          $.error("Option " + property + " does not exist on jQuery.swipe.options");
        }
        return null;
      };
    }

    var VERSION = "1.6.18",
        LEFT = "left",
        RIGHT = "right",
        UP = "up",
        DOWN = "down",
        IN = "in",
        OUT = "out",
        NONE = "none",
        AUTO = "auto",
        SWIPE = "swipe",
        PINCH = "pinch",
        TAP = "tap",
        DOUBLE_TAP = "doubletap",
        LONG_TAP = "longtap",
        HORIZONTAL = "horizontal",
        VERTICAL = "vertical",
        ALL_FINGERS = "all",
        DOUBLE_TAP_THRESHOLD = 10,
        PHASE_START = "start",
        PHASE_MOVE = "move",
        PHASE_END = "end",
        PHASE_CANCEL = "cancel",
        SUPPORTS_TOUCH = "ontouchstart" in window,
        SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH,
        SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,
        PLUGIN_NS = "TouchSwipe",
        defaults = {
      fingers: 1,
      threshold: 75,
      cancelThreshold: null,
      pinchThreshold: 20,
      maxTimeThreshold: null,
      fingerReleaseThreshold: 250,
      longTapThreshold: 500,
      doubleTapThreshold: 200,
      swipe: null,
      swipeLeft: null,
      swipeRight: null,
      swipeUp: null,
      swipeDown: null,
      swipeStatus: null,
      pinchIn: null,
      pinchOut: null,
      pinchStatus: null,
      click: null,
      tap: null,
      doubleTap: null,
      longTap: null,
      hold: null,
      triggerOnTouchEnd: !0,
      triggerOnTouchLeave: !1,
      allowPageScroll: "auto",
      fallbackToMouseEvents: !0,
      excludedElements: ".noSwipe",
      preventDefaultEvents: !0
    };
    $.fn.swipe = function (method) {
      var $this = $(this),
          plugin = $this.data(PLUGIN_NS);

      if (plugin && "string" == typeof method) {
        if (plugin[method]) return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
        $.error("Method " + method + " does not exist on jQuery.swipe");
      } else if (plugin && "object" == _typeof(method)) plugin.option.apply(plugin, arguments);else if (!(plugin || "object" != _typeof(method) && method)) return init.apply(this, arguments);

      return $this;
    }, $.fn.swipe.version = VERSION, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = {
      PHASE_START: PHASE_START,
      PHASE_MOVE: PHASE_MOVE,
      PHASE_END: PHASE_END,
      PHASE_CANCEL: PHASE_CANCEL
    }, $.fn.swipe.directions = {
      LEFT: LEFT,
      RIGHT: RIGHT,
      UP: UP,
      DOWN: DOWN,
      IN: IN,
      OUT: OUT
    }, $.fn.swipe.pageScroll = {
      NONE: NONE,
      HORIZONTAL: HORIZONTAL,
      VERTICAL: VERTICAL,
      AUTO: AUTO
    }, $.fn.swipe.fingers = {
      ONE: 1,
      TWO: 2,
      THREE: 3,
      FOUR: 4,
      FIVE: 5,
      ALL: ALL_FINGERS
    };
  });
} //share

{
  !function (t) {
    if ("object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module) module.exports = t();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var e; }
  }(function () {
    var t;
    "classList" in document.documentElement || !Object.defineProperty || "undefined" == typeof HTMLElement || Object.defineProperty(HTMLElement.prototype, "classList", {
      get: function get() {
        var t, e, o;
        return o = function o(t) {
          return function (o) {
            var n, i;
            n = e.className.split(/\s+/), i = n.indexOf(o), t(n, i, o), e.className = n.join(" ");
          };
        }, e = this, t = {
          add: o(function (t, e, o) {
            ~e || t.push(o);
          }),
          remove: o(function (t, e) {
            ~e && t.splice(e, 1);
          }),
          toggle: o(function (t, e, o) {
            ~e ? t.splice(e, 1) : t.push(o);
          }),
          contains: function contains(t) {
            return !!~e.className.split(/\s+/).indexOf(t);
          },
          item: function item(t) {
            return e.className.split(/\s+/)[t] || null;
          }
        }, Object.defineProperty(t, "length", {
          get: function get() {
            return e.className.split(/\s+/).length;
          }
        }), t;
      }
    }), String.prototype.to_rfc3986 = function () {
      var t;
      return t = encodeURIComponent(this), t.replace(/[!'()*]/g, function (t) {
        return "%" + t.charCodeAt(0).toString(16);
      });
    }, t = function () {
      function t() {}

      return t.prototype.extend = function (t, e, o) {
        var n, i;

        for (i in e) {
          n = void 0 !== t[i], n && "object" == _typeof(e[i]) ? this.extend(t[i], e[i], o) : (o || !n) && (t[i] = e[i]);
        }
      }, t.prototype.hide = function (t) {
        return t.style.display = "none";
      }, t.prototype.show = function (t) {
        return t.style.display = "block";
      }, t.prototype.has_class = function (t, e) {
        return t.classList.contains(e);
      }, t.prototype.add_class = function (t, e) {
        return t.classList.add(e);
      }, t.prototype.remove_class = function (t, e) {
        return t.classList.remove(e);
      }, t.prototype.is_encoded = function (t) {
        return t = t.to_rfc3986(), decodeURIComponent(t) !== t;
      }, t.prototype.encode = function (t) {
        return "undefined" == typeof t || this.is_encoded(t) ? t : t.to_rfc3986();
      }, t.prototype.popup = function (t, e) {
        var o, n, i, r;
        return null == e && (e = {}), n = {
          width: 500,
          height: 350
        }, n.top = screen.height / 2 - n.height / 2, n.left = screen.width / 2 - n.width / 2, i = function () {
          var t;
          t = [];

          for (o in e) {
            r = e[o], t.push(o + "=" + this.encode(r));
          }

          return t;
        }.call(this).join("&"), i && (i = "?" + i), window.open(t + i, "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=" + n.left + ",top=" + n.top + ",width=" + n.width + ",height=" + n.height);
      }, t;
    }();

    var e,
        o = function o(t, e) {
      function o() {
        this.constructor = t;
      }

      for (var i in e) {
        n.call(e, i) && (t[i] = e[i]);
      }

      return o.prototype = e.prototype, t.prototype = new o(), t.__super__ = e.prototype, t;
    },
        n = {}.hasOwnProperty;

    return e = function (t) {
      function e(t, e) {
        return this.element = t, this.el = {
          head: document.getElementsByTagName("head")[0],
          body: document.getElementsByTagName("body")[0]
        }, this.config = {
          enabled_networks: 0,
          protocol: -1 === ["http", "https"].indexOf(window.location.href.split(":")[0]) ? "https://" : "//",
          url: window.location.href,
          caption: null,
          title: this.default_title(),
          image: this.default_image(),
          description: this.default_description(),
          ui: {
            flyout: "top center",
            button_text: "Share",
            button_font: !0,
            icon_font: !0
          },
          networks: {
            twitter: {
              enabled: !0,
              url: null,
              description: null
            },
            facebook: {
              enabled: !0,
              load_sdk: !0,
              url: null,
              app_id: null,
              title: null,
              caption: null,
              description: null,
              image: null
            },
            pinterest: {
              enabled: !0,
              url: null,
              image: null,
              description: null
            },
            email: {
              enabled: !0,
              title: null,
              description: null,
              url: null
            }
          }
        }, this.setup(this.element, e), this;
      }

      return o(e, t), e.prototype.setup = function (t, e) {
        var o, n, i, r, s;

        for (r = [t], this.extend(this.config, e, !0), this.set_global_configuration(), this.normalize_network_configuration(), this.config.networks.facebook.enabled && this.config.networks.facebook.load_sdk && this.inject_facebook_sdk(), n = o = 0, s = r.length; s > o; n = ++o) {
          i = r[n], this.setup_instance(t, n);
        }
      }, e.prototype.setup_instance = function (t, e) {
        var o, n, i, r, s, l, c, a, p;

        for (r = t, this.add_class(r, "sharer-" + e), this.inject_html(r), document.getElementById("flipbook-share-facebook").style.display = this.config.networks.facebook.display, document.getElementById("flipbook-share-twitter").style.display = this.config.networks.twitter.display, document.getElementById("flipbook-share-pinterest").style.display = this.config.networks.pinterest.display, document.getElementById("flipbook-share-email").style.display = this.config.networks.email.display, s = r.getElementsByTagName("label")[0], n = r.getElementsByClassName("social")[0], a = r.getElementsByTagName("li"), this.add_class(n, "networks-" + this.config.enabled_networks), r.addEventListener("click", function (t) {
          return function () {
            return t.event_toggle(n);
          };
        }(this)), o = this, p = [], e = i = 0, l = a.length; l > i; e = ++i) {
          c = a[e], p.push(c.addEventListener("click", function () {
            return o.event_network(r, this), o.event_close(n);
          }));
        }

        return p;
      }, e.prototype.event_toggle = function (t) {
        return this.has_class(t, "active") ? this.event_close(t) : this.event_open(t);
      }, e.prototype.event_open = function (t) {
        return this.has_class(t, "load") && this.remove_class(t, "load"), this.add_class(t, "active");
      }, e.prototype.event_close = function (t) {
        return this.remove_class(t, "active");
      }, e.prototype.event_network = function (t, e) {
        var o;
        return o = e.getAttribute("data-network"), this.hook("before", o, t), this["network_" + o](), this.hook("after", o, t);
      }, e.prototype.open = function () {
        return this["public"]("open");
      }, e.prototype.close = function () {
        return this["public"]("close");
      }, e.prototype.toggle = function () {
        return this["public"]("toggle");
      }, e.prototype["public"] = function (t) {
        var e, o, n, i, r, s, l;

        for (s = document.querySelectorAll(this.element), l = [], n = o = 0, r = s.length; r > o; n = ++o) {
          i = s[n], e = i.getElementsByClassName("social")[0], l.push(this["event_" + t](e));
        }

        return l;
      }, e.prototype.network_facebook = function () {
        return this.config.networks.facebook.load_sdk ? window.FB ? FB.ui({
          method: "feed",
          name: this.config.networks.facebook.title,
          link: this.config.networks.facebook.url,
          picture: this.config.networks.facebook.image,
          caption: this.config.networks.facebook.caption,
          description: this.config.networks.facebook.description
        }) : console.error("The Facebook JS SDK hasn't loaded yet.") : this.popup("https://www.facebook.com/sharer/sharer.php", {
          u: this.config.networks.facebook.url
        });
      }, e.prototype.network_twitter = function () {
        return this.popup("https://twitter.com/intent/tweet", {
          text: this.config.networks.twitter.description,
          url: this.config.networks.twitter.url
        });
      }, e.prototype.network_google_plus = function () {
        return this.popup("https://plus.google.com/share", {
          url: this.config.networks.google_plus.url
        });
      }, e.prototype.network_pinterest = function () {
        return this.popup("https://www.pinterest.com/pin/create/button", {
          url: this.config.networks.pinterest.url,
          media: this.config.networks.pinterest.image,
          description: this.config.networks.pinterest.description
        });
      }, e.prototype.network_email = function () {
        return this.popup("mailto:", {
          subject: this.config.networks.email.title,
          body: this.config.networks.email.description + '%0D%0A' + this.config.networks.email.url || this.config.url
        });
      }, e.prototype.inject_stylesheet = function (t) {
        var e;
        return this.el.head.querySelector('link[href="' + t + '"]') ? void 0 : (e = document.createElement("link"), e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), this.el.head.appendChild(e));
      }, e.prototype.inject_html = function (t) {
        return t.innerHTML = "<div class='social load " + this.config.ui.flyout + "'><ul><li id='flipbook-share-pinterest' data-network='pinterest'><i class='fab fa-pinterest-p skin-color'></i></li><li id='flipbook-share-twitter' data-network='twitter'><i class='fab fa-twitter skin-color'></i></li><li id='flipbook-share-facebook' data-network='facebook'><i class='fab fa-facebook-f skin-color'></i></li><li id='flipbook-share-email' data-network='email'><i class='fas fa-at skin-color'></i></li></ul></div>";
      }, e.prototype.inject_facebook_sdk = function () {
        var t, e;
        return window.FB || !this.config.networks.facebook.app_id || this.el.body.querySelector("#fb-root") ? void 0 : (e = document.createElement("script"), e.text = "window.fbAsyncInit=function(){FB.init({appId:'" + this.config.networks.facebook.app_id + "',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='" + this.config.protocol + "connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')", t = document.createElement("div"), t.id = "fb-root", this.el.body.appendChild(t), this.el.body.appendChild(e));
      }, e.prototype.hook = function (t, e, o) {
        var n, i;
        n = this.config.networks[e][t], "function" == typeof n && (i = n.call(this.config.networks[e], o), void 0 !== i && (i = this.normalize_filter_config_updates(i), this.extend(this.config.networks[e], i, !0), this.normalize_network_configuration()));
      }, e.prototype.default_title = function () {
        var t;
        return (t = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) ? t.getAttribute("content") : (t = document.querySelector("title")) ? t.innerText : void 0;
      }, e.prototype.default_image = function () {
        var t;
        return (t = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) ? t.getAttribute("content") : void 0;
      }, e.prototype.default_description = function () {
        var t;
        return (t = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) ? t.getAttribute("content") : "";
      }, e.prototype.set_global_configuration = function () {
        var t, e, o, n, i, r;
        i = this.config.networks, r = [];

        for (e in i) {
          n = i[e];

          for (o in n) {
            null == this.config.networks[e][o] && (this.config.networks[e][o] = this.config[o]);
          }

          this.config.networks[e].enabled ? (t = "block", this.config.enabled_networks += 1) : t = "none", r.push(this.config.networks[e].display = t);
        }

        return r;
      }, e.prototype.normalize_network_configuration = function () {
        return this.config.networks.facebook.app_id || (this.config.networks.facebook.load_sdk = !1), this.is_encoded(this.config.networks.twitter.description) || (this.config.networks.twitter.description = encodeURIComponent(this.config.networks.twitter.description)), "number" == typeof this.config.networks.facebook.app_id ? this.config.networks.facebook.app_id = this.config.networks.facebook.app_id.toString() : void 0;
      }, e.prototype.normalize_filter_config_updates = function (t) {
        return this.config.networks.facebook.app_id !== t.app_id && (console.warn("You are unable to change the Facebook app_id after the button has been initialized. Please update your Facebook filters accordingly."), delete t.app_id), this.config.networks.facebook.load_sdk !== t.load_sdk && (console.warn("You are unable to change the Facebook load_sdk option after the button has been initialized. Please update your Facebook filters accordingly."), delete t.app_id), t;
      }, e;
    }(t);
  });
}

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/quocdungdang/Project/dungthinhnew/core/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/quocdungdang/Project/dungthinhnew/core/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });