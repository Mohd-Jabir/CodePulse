import {
  __commonJS,
  __toESM,
  require_react
} from "./chunk-WYQRYOQT.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    (function() {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return "Fragment";
          case REACT_PROFILER_TYPE:
            return "Profiler";
          case REACT_STRICT_MODE_TYPE:
            return "StrictMode";
          case REACT_SUSPENSE_TYPE:
            return "Suspense";
          case REACT_SUSPENSE_LIST_TYPE:
            return "SuspenseList";
          case REACT_ACTIVITY_TYPE:
            return "Activity";
        }
        if ("object" === typeof type)
          switch ("number" === typeof type.tag && console.error(
            "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
          ), type.$$typeof) {
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_CONTEXT_TYPE:
              return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
              return type;
            case REACT_MEMO_TYPE:
              return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x2) {
              }
          }
        return null;
      }
      function testStringCoercion(value) {
        return "" + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = false;
        } catch (e2) {
          JSCompiler_inline_result = true;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
            JSCompiler_inline_result$jscomp$0
          );
          return testStringCoercion(value);
        }
      }
      function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE)
          return "<...>";
        try {
          var name = getComponentNameFromType(type);
          return name ? "<" + name + ">" : "<...>";
        } catch (x2) {
          return "<...>";
        }
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function UnknownOwner() {
        return Error("react-stack-top-frame");
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
          var getter = Object.getOwnPropertyDescriptor(config, "key").get;
          if (getter && getter.isReactWarning) return false;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown || (specialPropKeyWarningShown = true, console.error(
            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
            displayName
          ));
        }
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = true, console.error(
          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
        ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type,
          key,
          props,
          _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
          enumerable: false,
          get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", { enumerable: false, value: null });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: null
        });
        Object.defineProperty(type, "_debugStack", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
          configurable: false,
          enumerable: false,
          writable: true,
          value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children)
          if (isStaticChildren)
            if (isArrayImpl(children)) {
              for (isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)
                validateChildKeys(children[isStaticChildren]);
              Object.freeze && Object.freeze(children);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function(k2) {
            return "key" !== k2;
          });
          isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
          didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error(
            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
            isStaticChildren,
            children,
            keys,
            children
          ), didWarnAboutKeySpread[children + isStaticChildren] = true);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
          maybeKey = {};
          for (var propName in config)
            "key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(
          maybeKey,
          "function" === typeof type ? type.displayName || type.name || "Unknown" : type
        );
        return ReactElement(
          type,
          children,
          self,
          source,
          getOwner(),
          maybeKey,
          debugStack,
          debugTask
        );
      }
      function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
      }
      var React = require_react(), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
      };
      React = {
        react_stack_bottom_frame: function(callStackForError) {
          return callStackForError();
        }
      };
      var specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(
        React,
        UnknownOwner
      )();
      var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
      var didWarnAboutKeySpread = {};
      exports.Fragment = REACT_FRAGMENT_TYPE;
      exports.jsx = function(type, config, maybeKey, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          false,
          source,
          self,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
      exports.jsxs = function(type, config, maybeKey, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(
          type,
          config,
          maybeKey,
          true,
          source,
          self,
          trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack,
          trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
        );
      };
    })();
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/react-loaderkit/dist/index.esm.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var s = function() {
  return s = Object.assign || function(t2) {
    for (var i2, n2 = 1, e2 = arguments.length; n2 < e2; n2++) for (var o2 in i2 = arguments[n2]) Object.prototype.hasOwnProperty.call(i2, o2) && (t2[o2] = i2[o2]);
    return t2;
  }, s.apply(this, arguments);
};
function d(t2, i2, n2) {
  if (n2 || 2 === arguments.length) for (var e2, o2 = 0, a2 = i2.length; o2 < a2; o2++) !e2 && o2 in i2 || (e2 || (e2 = Array.prototype.slice.call(i2, 0, o2)), e2[o2] = i2[o2]);
  return t2.concat(e2 || Array.prototype.slice.call(i2));
}
var l = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = e2 / 5;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { display: "flex", alignItems: "flex-end", height: e2, gap: d2 / 2 } }, { children: [0, 1, 2, 3, 4].map(function(i3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { width: d2, height: d2, borderRadius: "50%", backgroundColor: a2, animation: "bounce ".concat(0.5 / c2, "s ease infinite alternate"), animationDelay: "".concat(0.1 * i3, "s") } }, i3);
  }) }));
};
var h = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#22C55E" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = e2 / 8;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: e2, height: e2, position: "relative", overflow: "hidden" } }, { children: Array.from({ length: 8 }).map(function(i3, n3) {
    return (0, import_jsx_runtime.jsx)("div", s({ style: { position: "absolute", left: "".concat(n3 / 8 * 100, "%"), width: d2, height: "100%", color: a2, fontSize: d2, lineHeight: "".concat(d2, "px"), animation: "matrixRain ".concat(2 / c2, "s infinite linear"), animationDelay: "".concat(0.1 * n3, "s"), textAlign: "center", fontFamily: "monospace" } }, { children: Array.from({ length: Math.ceil(e2 / d2) }).map(function(i4, n4) {
      return (0, import_jsx_runtime.jsx)("div", s({ style: { opacity: Math.random(), transform: "translateY(".concat(100 * n4 - 100, "%)") } }, { children: String.fromCharCode(12448 + 96 * Math.random()) }), n4);
    }) }), n3);
  }) }));
};
var p = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#3B82F6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 20;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: 2 * o2, height: o2, position: "relative" } }, { children: (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "absolute", width: "100%", height: "100%", background: "linear-gradient(90deg, transparent 50%, ".concat(r2, "20 50%)"), backgroundSize: "".concat(o2 / 4, "px ").concat(o2 / 4, "px") } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: l2, height: "100%", backgroundColor: r2, left: "25%", animation: "circuitPulse ".concat(2 / d2, "s infinite") } }), (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: l2, height: "100%", backgroundColor: r2, left: "75%", animation: "circuitPulse ".concat(2 / d2, "s infinite"), animationDelay: "1s" } })] })) }));
};
var u = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#6366F1" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = e2 / 4;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { display: "grid", gridTemplateColumns: "repeat(".concat(4, ", 1fr)"), gap: 2, width: e2, height: e2 } }, { children: Array.from({ length: 16 }).map(function(i3, n3) {
    return (0, import_jsx_runtime.jsx)("div", s({ style: { width: d2, height: d2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 0.6 * d2, color: a2, fontFamily: "monospace", animation: "binaryFlip ".concat(1.5 / c2, "s infinite"), animationDelay: "".concat(0.1 * n3, "s") } }, { children: Math.round(Math.random()) }), n3);
  }) }));
};
var v = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = e2 / 5;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: 3 * e2, height: e2 } }, { children: Array.from({ length: 5 }).map(function(i3, n3) {
    return (0, import_jsx_runtime.jsx)("div", s({ style: { height: d2, marginBottom: d2 / 2, position: "relative", overflow: "hidden" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", backgroundColor: "".concat(a2, "20"), animation: "dataStream ".concat(2 / c2, "s infinite linear"), animationDelay: "".concat(0.2 * n3, "s"), backgroundImage: "repeating-linear-gradient(\n                90deg,\n                ".concat(a2, " 0%,\n                ").concat(a2, " 10%,\n                transparent 10%,\n                transparent 20%\n              )") } }) }), n3);
  }) }));
};
var f = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#EF4444" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = 2 * o2, h2 = o2 / 8;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { width: l2, height: o2, position: "relative" } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "100%", height: h2, backgroundColor: r2, top: "50%", transform: "translateY(-50%)", borderRadius: h2, opacity: 0.2 } }), (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: o2 / 3, height: h2, backgroundColor: r2, top: "50%", transform: "translateY(-50%)", borderRadius: h2, animation: "archeryShoot ".concat(1.5 / d2, "s infinite") } }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes archeryShoot {\n            0% { transform: translateY(-50%) translateX(0); opacity: 1; }\n            50% { transform: translateY(-50%) translateX(".concat(0.8 * l2, "px); opacity: 1; }\n            51% { transform: translateY(-50%) translateX(").concat(0.8 * l2, "px); opacity: 0; }\n            52% { transform: translateY(-50%) translateX(0); opacity: 0; }\n            53% { transform: translateY(-50%) translateX(0); opacity: 1; }\n          }\n        ") })] }));
};
var m = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#F59E0B" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { width: 2 * o2, height: o2, position: "relative", overflow: "hidden" } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", bottom: 0, left: "10%", width: 0, height: 0, borderLeft: "".concat(0.4 * o2, "px solid transparent"), borderRight: "".concat(0.4 * o2, "px solid transparent"), borderBottom: "".concat(0.6 * o2, "px solid #4B5563") } }), (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", bottom: 0, right: "10%", width: 0, height: 0, borderLeft: "".concat(0.5 * o2, "px solid transparent"), borderRight: "".concat(0.5 * o2, "px solid transparent"), borderBottom: "".concat(0.8 * o2, "px solid #374151") } }), (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: o2 / 2, height: o2 / 2, backgroundColor: r2, borderRadius: "50%", left: "50%", transform: "translateX(-50%)", animation: "sunrise ".concat(3 / d2, "s infinite") } }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes sunrise {\n            0% { bottom: -".concat(o2 / 2, "px; opacity: 0; }\n            20% { opacity: 1; }\n            50% { bottom: ").concat(0.6 * o2, "px; opacity: 1; }\n            80% { opacity: 1; }\n            100% { bottom: -").concat(o2 / 2, "px; opacity: 0; }\n          }\n        ") })] }));
};
var y = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#0EA5E9" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { width: 3 * o2, height: o2, position: "relative", overflow: "hidden" } }, { children: [Array.from({ length: 3 }).map(function(i2, n3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: 0, right: 0, height: o2 / 3, background: "linear-gradient(90deg, transparent, ".concat(r2).concat(80 - 20 * n3, ")"), animation: "wave ".concat(2 / d2, "s infinite ease-in-out"), animationDelay: "".concat(0.4 * n3, "s"), bottom: "".concat(n3 * (o2 / 4), "px"), opacity: 0.8 - 0.2 * n3 } }, n3);
  }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes wave {\n            0% { transform: translateX(-100%); }\n            50% { transform: translateX(0); }\n            100% { transform: translateX(100%); }\n          }\n        " })] }));
};
var g = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { width: 3 * o2, height: o2, position: "relative", overflow: "hidden" } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { width: o2 / 2, height: o2 / 2, backgroundColor: r2, borderRadius: "20%", position: "absolute", top: "50%", animation: "roll ".concat(2 / (void 0 === c2 ? 1 : c2), "s infinite linear") } }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes roll {\n            0% { left: -".concat(o2 / 2, "px; transform: translateY(-50%) rotate(0deg); }\n            100% { left: ").concat(3 * o2, "px; transform: translateY(-50%) rotate(720deg); }\n          }\n        ") })] }));
};
var b = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#6366F1" : a2, c2 = n2.speed, d2 = o2 / 5;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { width: o2, height: o2, position: "relative" } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { width: d2, height: d2, backgroundColor: r2, position: "absolute", borderRadius: 4, animation: "climb ".concat(2 / (void 0 === c2 ? 1 : c2), "s infinite") } }), Array.from({ length: 5 }).map(function(i2, n3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", left: "".concat(n3 * d2, "px"), bottom: "".concat(n3 * d2, "px"), width: "".concat((5 - n3) * d2, "px"), height: d2 / 4, backgroundColor: "".concat(r2, "40"), borderRadius: 2 } }, n3);
  }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes climb {\n            0% { transform: translate(0, 0); }\n            20% { transform: translate(".concat(d2, "px, -").concat(d2, "px); }\n            40% { transform: translate(").concat(2 * d2, "px, -").concat(2 * d2, "px); }\n            60% { transform: translate(").concat(3 * d2, "px, -").concat(3 * d2, "px); }\n            80% { transform: translate(").concat(4 * d2, "px, -").concat(4 * d2, "px); }\n            90% { transform: translate(").concat(4 * d2, "px, -").concat(4 * d2, "px); opacity: 1; }\n            100% { transform: translate(").concat(4 * d2, "px, -").concat(4 * d2, "px); opacity: 0; }\n          }\n        ") })] }));
};
var w = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: e2, height: e2, position: "relative", transformStyle: "preserve-3d", transform: "rotateZ(45deg)", animation: "rotate ".concat(3 / c2, "s infinite linear") } }, { children: [1, 2, 3, 4].map(function(i3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "50%", height: "50%", backgroundColor: a2, top: 3 === i3 || 4 === i3 ? "50%" : "0", left: 2 === i3 || 4 === i3 ? "50%" : "0", opacity: 0.7, animation: "foldCube ".concat(2.5 / c2, "s infinite linear both"), animationDelay: "".concat(0.3 * (i3 - 1), "s"), transformOrigin: 1 === i3 ? "100% 100%" : 2 === i3 ? "0% 100%" : 3 === i3 ? "100% 0%" : "0% 0%" } }, i3);
  }) }));
};
var x = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#EF4444" : o2, r2 = i2.speed, c2 = e2 / 2;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: e2, height: e2, position: "relative", animation: "galaxy-rotate ".concat(2 / (void 0 === r2 ? 1 : r2), "s linear infinite") } }, { children: Array.from({ length: 12 }).map(function(i3, n3) {
    var o3 = n3 / 12 * c2;
    return (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: e2 / 10, height: e2 / 10, backgroundColor: a2, borderRadius: "50%", top: "50%", left: "50%", transform: "rotate(".concat(30 * n3, "deg) translate(").concat(o3, "px)"), transformOrigin: "center" } }, n3);
  }) }));
};
var k = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 100 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#1F2937" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 5;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "relative", width: o2, height: o2 + 40 } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: o2 / 2 - l2 / 2, width: l2, height: l2, borderRadius: "50%", animation: "fall ".concat(1.2 / d2, "s ease-in-out infinite") } }), (0, import_jsx_runtime.jsx)("div", s({ style: { display: "grid", gridTemplateColumns: "repeat(5, ".concat(l2, "px)"), gridTemplateRows: "repeat(5, ".concat(l2, "px)"), gap: 2, position: "absolute", bottom: 0, left: 0, animation: "shake ".concat(1.2 / d2, "s ease-in-out infinite") } }, { children: Array.from({ length: 25 }).map(function(i2, n3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { width: l2, height: l2, background: r2, borderRadius: 2, animation: "damage ".concat(1.2 / d2, "s ease-in-out infinite"), animationDelay: "".concat(n3 % 5 * 0.05, "s") } }, n3);
  }) })), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes fall {\n            0% { transform: translateY(-30px); opacity: 0; }\n            50% { transform: translateY(".concat(o2 - l2, "px); opacity: 1; }\n            100% { transform: translateY(").concat(o2 - l2, "px); opacity: 0; }\n          }\n\n          @keyframes shake {\n            0%, 100% { transform: translate(0, 0); }\n            50% { transform: translate(-3px, 2px); }\n          }\n\n          @keyframes damage {\n            0%, 40%, 100% { transform: scale(1); opacity: 1; }\n            50% { transform: scale(0.8); opacity: 0.5; }\n          }\n        ") })] }));
};
var C = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#EC4899" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 3;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { display: "flex", gap: o2 / 10 } }, { children: [[0, 1, 2].map(function(i2) {
    return (0, import_jsx_runtime.jsx)("div", { style: { width: l2, height: l2, backgroundColor: r2, transformStyle: "preserve-3d", animation: "flipY ".concat(1.5 / d2, "s ease-in-out infinite"), animationDelay: "".concat(0.2 * i2, "s") } }, i2);
  }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes flipY {\n            0% { transform: rotateY(0deg); }\n            50% { transform: rotateY(180deg); }\n            100% { transform: rotateY(360deg); }\n          }\n        " })] }));
};
var z = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#F59E0B" : a2, c2 = n2.speed, l2 = void 0 === c2 ? 1 : c2, h2 = o2 / 4;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: h2 / 6 } }, { children: [d([], Array(9), true).map(function(i2, n3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { width: h2, height: h2, backgroundColor: r2, opacity: 0.6, animation: "pulseBox ".concat(1.2 / l2, "s ease-in-out infinite"), animationDelay: "".concat(0.1 * (n3 % 3 + Math.floor(n3 / 3)), "s") } }, n3);
  }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes pulseBox {\n            0%, 100% { transform: scale(1); opacity: 0.6; }\n            50% { transform: scale(1.4); opacity: 1; }\n          }\n        " })] }));
};
var B = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, s2 = e2 / 3;
  return (0, import_jsx_runtime.jsx)("svg", { width: 2 * e2, height: e2, viewBox: "0 0 ".concat(2 * e2, " ").concat(e2), dangerouslySetInnerHTML: { __html: "\n        ".concat('\n    <defs>\n      <filter id="gooey">\n        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />\n        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="gooey" />\n      </filter>\n    </defs>\n  ', '\n        <g filter="url(#gooey)">\n          <circle cx="').concat(e2, '" cy="').concat(e2 / 2, '" r="').concat(s2 / 2, '" fill="').concat(a2, '">\n            <animate \n              attributeName="cx" \n              values="').concat(e2 - s2, ";").concat(e2 + s2 / 2, ";").concat(e2 - s2, '" \n              dur="').concat(1.5 / c2, 's" \n              repeatCount="indefinite"\n            />\n          </circle>\n          <circle cx="').concat(e2, '" cy="').concat(e2 / 2, '" r="').concat(s2 / 2, '" fill="').concat(a2, '">\n            <animate \n              attributeName="cx" \n              values="').concat(e2 + s2, ";").concat(e2 - s2 / 2, ";").concat(e2 + s2, '" \n              dur="').concat(1.5 / c2, 's" \n              repeatCount="indefinite"\n            />\n          </circle>\n          <circle cx="').concat(e2, '" cy="').concat(e2 / 2, '" r="').concat(s2 / 3, '" fill="').concat(a2, '">\n            <animate \n              attributeName="cx" \n              values="').concat(e2, ";").concat(e2, ";").concat(e2, '" \n              dur="').concat(1.5 / c2, 's" \n              repeatCount="indefinite"\n            />\n            <animate \n              attributeName="r" \n              values="').concat(s2 / 3, ";").concat(s2 / 2, ";").concat(s2 / 3, '" \n              dur="').concat(1.5 / c2, 's" \n              repeatCount="indefinite"\n            />\n          </circle>\n        </g>\n      ') } });
};
var F = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { width: o2, height: o2, position: "relative", perspective: "500px" } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: "50%", left: "50%", width: 0, height: 0, borderLeft: "".concat(l2, "px solid transparent"), borderRight: "".concat(l2, "px solid transparent"), borderBottom: "".concat(1.7 * l2, "px solid ").concat(r2), transformOrigin: "50% 100%", animation: "rotateTriangle ".concat(3 / d2, "s infinite linear") } }), (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: "50%", left: "50%", width: 0, height: 0, borderLeft: "".concat(l2, "px solid transparent"), borderRight: "".concat(l2, "px solid transparent"), borderBottom: "".concat(1.7 * l2, "px solid ").concat(r2), transformOrigin: "50% 100%", animation: "rotateTriangleInvert ".concat(3 / d2, "s infinite linear"), opacity: 0.5 } })] }));
};
var R = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 2, h2 = o2 / 5;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { width: o2, height: o2, position: "relative" } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: h2, height: h2, backgroundColor: r2, borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%, -50%)", boxShadow: "0 0 ".concat(h2 / 2, "px ").concat(r2, "60") } }), Array.from({ length: 3 }).map(function(i2, n3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", borderRadius: "50%", border: "1px solid ".concat(r2), top: "0", left: "0", animation: "rotate3D-".concat(n3, " ").concat((2.5 - 0.3 * n3) / d2, "s infinite linear"), transform: "rotateX(".concat(60 + 40 * n3, "deg) rotateY(").concat(40 * n3, "deg)"), opacity: 0.6 } }, n3);
  }), Array.from({ length: 3 }).map(function(i2, n3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: h2 / 2, height: h2 / 2, backgroundColor: r2, borderRadius: "50%", top: "50%", left: "50%", boxShadow: "0 0 ".concat(h2 / 4, "px ").concat(r2, "60"), animation: "rotate3D-particle-".concat(n3, " ").concat((2.5 - 0.3 * n3) / d2, "s infinite linear"), transform: "rotateX(".concat(60 + 40 * n3, "deg) rotateY(").concat(40 * n3, "deg) translateX(").concat(l2 - h2 / 4, "px)"), transformOrigin: "".concat(h2 / 4 - l2, "px center") } }, "p".concat(n3));
  })] }));
};
var D = (t2) => {
  const i2 = ((t3) => t3.replace(/^([A-Z])|[\s-_]+(\w)/g, (t4, i3, n2) => n2 ? n2.toUpperCase() : i3.toLowerCase()))(t2);
  return i2.charAt(0).toUpperCase() + i2.slice(1);
};
var A = (...t2) => t2.filter((t3, i2, n2) => Boolean(t3) && "" !== t3.trim() && n2.indexOf(t3) === i2).join(" ").trim();
var I = (t2) => {
  for (const i2 in t2) if (i2.startsWith("aria-") || "role" === i2 || "title" === i2) return true;
};
var M = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };
var Y = (0, import_react.forwardRef)(({ color: t2 = "currentColor", size: i2 = 24, strokeWidth: n2 = 2, absoluteStrokeWidth: e2, className: a2 = "", children: r2, iconNode: c2, ...s2 }, d2) => (0, import_react.createElement)("svg", { ref: d2, ...M, width: i2, height: i2, stroke: t2, strokeWidth: e2 ? 24 * Number(n2) / Number(i2) : n2, className: A("lucide", a2), ...!r2 && !I(s2) && { "aria-hidden": "true" }, ...s2 }, [...c2.map(([t3, i3]) => (0, import_react.createElement)(t3, i3)), ...Array.isArray(r2) ? r2 : [r2]]));
var L = (t2, i2) => {
  const n2 = (0, import_react.forwardRef)(({ className: n3, ...e2 }, a2) => {
    return (0, import_react.createElement)(Y, { ref: a2, iconNode: i2, className: A(`lucide-${r2 = D(t2), r2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${t2}`, n3), ...e2 });
    var r2;
  });
  return n2.displayName = D(t2), n2;
};
var S = L("activity", [["path", { d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2", key: "169zse" }]]);
var X = L("circle-arrow-down", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }], ["path", { d: "M12 8v8", key: "napkw2" }], ["path", { d: "m8 12 4 4 4-4", key: "k98ssh" }]]);
var O = L("cloud-rain", [["path", { d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242", key: "1pljnt" }], ["path", { d: "M16 14v6", key: "1j4efv" }], ["path", { d: "M8 14v6", key: "17c4r9" }], ["path", { d: "M12 16v6", key: "c8a4gj" }]]);
var P = L("cog", [["path", { d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", key: "sobvz5" }], ["path", { d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z", key: "11i496" }], ["path", { d: "M12 2v2", key: "tus03m" }], ["path", { d: "M12 22v-2", key: "1osdcq" }], ["path", { d: "m17 20.66-1-1.73", key: "eq3orb" }], ["path", { d: "M11 10.27 7 3.34", key: "16pf9h" }], ["path", { d: "m20.66 17-1.73-1", key: "sg0v6f" }], ["path", { d: "m3.34 7 1.73 1", key: "1ulond" }], ["path", { d: "M14 12h8", key: "4f43i9" }], ["path", { d: "M2 12h2", key: "1t8f8n" }], ["path", { d: "m20.66 7-1.73 1", key: "1ow05n" }], ["path", { d: "m3.34 17 1.73-1", key: "nuk764" }], ["path", { d: "m17 3.34-1 1.73", key: "2wel8s" }], ["path", { d: "m11 13.73-4 6.93", key: "794ttg" }]]);
var T = L("loader-circle", [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]]);
var W = L("refresh-cw", [["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }], ["path", { d: "M21 3v5h-5", key: "1q7to0" }], ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }], ["path", { d: "M8 16H3v5", key: "1cv678" }]]);
var j = L("zap", [["path", { d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z", key: "1xq2db" }]]);
var E = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { animation: "spin ".concat(1 / (void 0 === r2 ? 1 : r2), "s linear infinite"), color: a2, width: e2, height: e2 } }, { children: (0, import_jsx_runtime.jsx)(W, { size: e2 }) }));
};
var N = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { animation: "pulse ".concat(1.5 / (void 0 === r2 ? 1 : r2), "s ease-in-out infinite"), color: a2, width: e2, height: e2 } }, { children: (0, import_jsx_runtime.jsx)(T, { size: e2 }) }));
};
var q = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "relative", width: o2, height: o2 } }, { children: [(0, import_jsx_runtime.jsx)("div", s({ style: { position: "absolute", animation: "spin ".concat(2 / d2, "s linear infinite"), color: r2, width: o2, height: o2 } }, { children: (0, import_jsx_runtime.jsx)(P, { size: o2 }) })), (0, import_jsx_runtime.jsx)("div", s({ style: { position: "absolute", animation: "spinReverse ".concat(2 / d2, "s linear infinite"), color: "".concat(r2, "80"), width: 0.6 * o2, height: 0.6 * o2, top: "50%", left: "50%", transform: "translate(-50%, -50%)" } }, { children: (0, import_jsx_runtime.jsx)(P, { size: 0.6 * o2 }) }))] }));
};
var G = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { animation: "bounce ".concat(1 / (void 0 === r2 ? 1 : r2), "s ease-in-out infinite alternate"), color: a2, width: e2, height: e2 } }, { children: (0, import_jsx_runtime.jsx)(X, { size: e2 }) }));
};
var Z = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "relative", width: o2, height: o2 } }, { children: [(0, import_jsx_runtime.jsx)("div", s({ style: { position: "absolute", top: 0, left: 0, color: r2, opacity: 0.3, animation: "fadeInOut ".concat(1.5 / d2, "s ease-in-out 0s infinite") } }, { children: (0, import_jsx_runtime.jsx)(O, { size: o2 }) })), (0, import_jsx_runtime.jsx)("div", s({ style: { position: "absolute", top: 0, left: 0, color: r2, opacity: 0.6, animation: "fadeInOut ".concat(1.5 / d2, "s ease-in-out 0.5s infinite") } }, { children: (0, import_jsx_runtime.jsx)(O, { size: o2 }) })), (0, import_jsx_runtime.jsx)("div", s({ style: { position: "absolute", top: 0, left: 0, color: r2, animation: "fadeInOut ".concat(1.5 / d2, "s ease-in-out 1s infinite") } }, { children: (0, import_jsx_runtime.jsx)(O, { size: o2 }) }))] }));
};
var H = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "relative", width: o2, height: o2 } }, { children: [(0, import_jsx_runtime.jsx)("div", s({ style: { position: "absolute", top: 0, left: 0, color: "".concat(r2, "40"), animation: "fadeInOut ".concat(1 / d2, "s ease-in-out infinite alternate") } }, { children: (0, import_jsx_runtime.jsx)(j, { size: o2 }) })), (0, import_jsx_runtime.jsx)("div", s({ style: { position: "absolute", top: 0, left: 0, color: r2, transform: "scale(0.85)", animation: "pulse ".concat(1 / d2, "s ease-in-out infinite alternate") } }, { children: (0, import_jsx_runtime.jsx)(j, { size: o2 }) }))] }));
};
var $ = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { animation: "pulse ".concat(1 / (void 0 === r2 ? 1 : r2), "s ease-in-out infinite"), color: a2, width: e2, height: e2 } }, { children: (0, import_jsx_runtime.jsx)(S, { size: e2 }) }));
};
var _ = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = e2 / 4;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: 4 * e2, height: d2, backgroundColor: "".concat(a2, "20"), borderRadius: d2 / 2, overflow: "hidden" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { width: "30%", height: "100%", backgroundColor: a2, borderRadius: d2 / 2, animation: "progressBar ".concat(2 / c2, "s ease-in-out infinite") } }) }));
};
var U = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 10, h2 = (o2 - l2) / 2, p2 = 2 * Math.PI * h2;
  return (0, import_jsx_runtime.jsxs)("svg", s({ width: o2, height: o2, viewBox: "0 0 ".concat(o2, " ").concat(o2), fill: "none" }, { children: [(0, import_jsx_runtime.jsx)("circle", { cx: o2 / 2, cy: o2 / 2, r: h2, stroke: "".concat(r2, "20"), strokeWidth: l2 }), (0, import_jsx_runtime.jsx)("circle", { cx: o2 / 2, cy: o2 / 2, r: h2, stroke: r2, strokeWidth: l2, strokeDasharray: p2, strokeDashoffset: 0.75 * p2, transform: "rotate(-90 ".concat(o2 / 2, " ").concat(o2 / 2, ")"), style: { animation: "circularProgress ".concat(2 / d2, "s ease-in-out infinite") } })] }));
};
var J = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = e2 / 5;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: 3 * e2, display: "flex", justifyContent: "space-between" } }, { children: [0, 1, 2, 3, 4].map(function(i3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { width: d2, height: d2, backgroundColor: "".concat(a2).concat(Math.floor(25 * (i3 + 1))), borderRadius: "50%", animation: "progressDotPulse ".concat(2 / c2, "s ease-in-out ").concat(0.2 * i3, "s infinite alternate") } }, i3);
  }) }));
};
var K = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = 3 * e2;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: d2, height: e2, position: "relative", display: "flex", alignItems: "flex-end" } }, { children: [0, 1, 2, 3, 4, 5].map(function(i3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { width: d2 / 8, height: "30%", backgroundColor: a2, margin: "0 2px", borderRadius: "2px", animation: "wave ".concat(1.2 / c2, "s ease-in-out ").concat(0.1 * i3, "s infinite alternate") } }, i3);
  }) }));
};
var Q = function(e2) {
  var o2 = e2.size, a2 = void 0 === o2 ? 40 : o2, r2 = e2.color, c2 = void 0 === r2 ? "#8B5CF6" : r2, d2 = e2.speed, l2 = void 0 === d2 ? 1 : d2, h2 = a2 / 3;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: 4 * a2, display: "flex", alignItems: "center", justifyContent: "space-between" } }, { children: Array.from({ length: 5 }).map(function(e3, o3) {
    return (0, import_jsx_runtime.jsxs)(import_react.default.Fragment, { children: [(0, import_jsx_runtime.jsx)("div", { style: { width: h2, height: h2, borderRadius: "50%", backgroundColor: c2, opacity: 0 === o3 ? 1 : 0.3, animation: "stepDot ".concat(5 / l2, "s linear infinite"), animationDelay: "".concat(0.2 * o3 * 5, "s") } }), o3 < 4 && (0, import_jsx_runtime.jsx)("div", s({ style: { height: 2, flex: 1, backgroundColor: "".concat(c2, "40"), position: "relative", overflow: "hidden" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: 0, height: "100%", width: "100%", backgroundColor: c2, transform: "translateX(-101%)", animation: "stepLine ".concat(5 / l2, "s linear infinite"), animationDelay: "".concat(0.2 * o3 * 5, "s") } }) }))] }, o3);
  }) }));
};
var V = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = e2 / 12, l2 = (e2 - d2) / 2;
  return (0, import_jsx_runtime.jsx)("svg", s({ width: e2, height: e2, viewBox: "0 0 ".concat(e2, " ").concat(e2) }, { children: Array.from({ length: 8 }).map(function(i3, n3) {
    var o3 = 360 * n3 / 8, r3 = n3 * (1 / 8);
    return (0, import_jsx_runtime.jsx)("circle", { cx: e2 / 2, cy: e2 / 2, r: l2, fill: "none", stroke: a2, strokeWidth: d2, strokeDasharray: "".concat(2 * Math.PI * l2 / 8 * 0.6, " ").concat(2 * Math.PI * l2 / 8 * 0.4), transform: "rotate(".concat(o3, " ").concat(e2 / 2, " ").concat(e2 / 2, ")"), style: { opacity: 0.2, animation: "fadeInOut ".concat(1.5 / c2, "s ease-in-out ").concat(r3, "s infinite") } }, n3);
  }) }));
};
var tt = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = e2 / 6;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: 4 * e2, display: "flex", flexDirection: "column", gap: d2 / 2 } }, { children: Array.from({ length: 5 }).map(function(i3, n3) {
    return (0, import_jsx_runtime.jsx)("div", s({ style: { height: d2, backgroundColor: "".concat(a2, "20"), borderRadius: d2 / 2, overflow: "hidden" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { height: "100%", width: "40%", backgroundColor: a2, borderRadius: d2 / 2, animation: "progressBar ".concat(2 / c2, "s ease-in-out infinite"), animationDelay: "".concat(0.2 * n3, "s") } }) }), n3);
  }) }));
};
var it = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 15, h2 = (o2 - l2) / 2;
  return (0, import_jsx_runtime.jsxs)("svg", s({ width: o2, height: o2, viewBox: "0 0 ".concat(o2, " ").concat(o2) }, { children: [(0, import_jsx_runtime.jsx)("defs", { children: (0, import_jsx_runtime.jsxs)("linearGradient", s({ id: "gradient", x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, { children: [(0, import_jsx_runtime.jsx)("stop", { offset: "0%", stopColor: "".concat(r2, "40") }), (0, import_jsx_runtime.jsx)("stop", { offset: "100%", stopColor: r2 })] })) }), (0, import_jsx_runtime.jsx)("circle", { cx: o2 / 2, cy: o2 / 2, r: h2, fill: "none", stroke: "".concat(r2, "20"), strokeWidth: l2 }), (0, import_jsx_runtime.jsx)("circle", { cx: o2 / 2, cy: o2 / 2, r: h2, fill: "none", stroke: "url(#gradient)", strokeWidth: l2, strokeDasharray: 2 * Math.PI * h2, transform: "rotate(-90 ".concat(o2 / 2, " ").concat(o2 / 2, ")"), style: { animation: "radialProgress ".concat(2 / d2, "s ease-in-out infinite") } })] }));
};
var nt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 60 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#6366F1" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 10, h2 = o2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { display: "flex", alignItems: "end", gap: l2 } }, { children: [Array.from({ length: 5 }).map(function(i2, n3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { width: l2, height: h2, background: r2, borderRadius: 4, animation: "stairAnim ".concat(1.5 / d2, "s ease-in-out infinite"), animationDelay: "".concat(0.15 * n3, "s"), transformOrigin: "bottom" } }, n3);
  }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes stairAnim {\n            0%, 100% { transform: scaleY(0.4); opacity: 0.6; }\n            50% { transform: scaleY(1); opacity: 1; }\n          }\n        " })] }));
};
var et = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 60 : e2, a2 = n2.speed;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { width: o2, height: o2, borderRadius: "50%", background: "rgba(255, 255, 255, 0.15)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)", position: "relative", overflow: "hidden" } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: "-100%", width: "100%", height: "100%", background: "linear-gradient(120deg, transparent, rgba(255,255,255,0.5), transparent)", animation: "shimmerGlass ".concat(1.5 / (void 0 === a2 ? 1 : a2), "s infinite linear") } }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes shimmerGlass {\n            0% { left: -100%; }\n            100% { left: 100%; }\n          }\n        " })] }));
};
var ot = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 12 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#10B981" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { display: "flex", gap: o2 / 2, alignItems: "center" } }, { children: [[0, 1, 2].map(function(i2) {
    return (0, import_jsx_runtime.jsx)("span", { style: { width: o2, height: o2, backgroundColor: r2, borderRadius: "50%", display: "inline-block", animation: "ellipsisPulse ".concat(1.2 / d2, "s ease-in-out infinite"), animationDelay: "".concat(0.2 * i2, "s") } }, i2);
  }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes ellipsisPulse {\n            0%, 100% { transform: scale(1); opacity: 0.5; }\n            50% { transform: scale(1.4); opacity: 1; }\n          }\n        " })] }));
};
var at = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 60 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#06B6D4" : a2, c2 = n2.speed, d2 = o2 / 2.5;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "relative", width: d2, height: d2 } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: d2, height: d2, borderRadius: "50%", backgroundColor: r2, animation: "liquidPulse ".concat(2 / (void 0 === c2 ? 1 : c2), "s infinite ease-in-out") } }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes liquidPulse {\n            0% { transform: scale(1); opacity: 1; }\n            50% { transform: scale(1.4); opacity: 0.5; }\n            100% { transform: scale(1); opacity: 1; }\n          }\n        " })] }));
};
var rt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#6366F1" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 6;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { display: "flex", alignItems: "center", gap: l2 / 2 } }, { children: [[0, 1, 2].map(function(i2) {
    return (0, import_jsx_runtime.jsx)("div", { style: { width: l2, height: l2, backgroundColor: r2, borderRadius: "50%", animation: "typingBounce ".concat(1 / d2, "s ease-in-out infinite"), animationDelay: "".concat(0.2 * i2, "s") } }, i2);
  }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes typingBounce {\n            0%, 80%, 100% { transform: translateY(0); }\n            40% { transform: translateY(-8px); }\n          }\n        " })] }));
};
var ct = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#EF4444" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 6;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { display: "flex", alignItems: "center", gap: l2 / 2 } }, { children: [[0, 1, 2, 3].map(function(i2) {
    return (0, import_jsx_runtime.jsx)("div", { style: { width: l2, height: l2, borderRadius: "50%", backgroundColor: r2, animation: "wormPulse ".concat(1 / d2, "s infinite"), animationDelay: "".concat(0.1 * i2, "s") } }, i2);
  }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes wormPulse {\n            0%, 100% { transform: scale(1); opacity: 0.7; }\n            50% { transform: scale(1.5); opacity: 1; }\n          }\n        " })] }));
};
var st = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#3B82F6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "relative", width: o2, height: o2 } }, { children: [[0, 1, 2].map(function(i2) {
    return (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", border: "2px solid ".concat(r2), borderRadius: "50%", width: "100%", height: "100%", top: 0, left: 0, animation: "ripple ".concat(2 / d2, "s infinite"), animationDelay: "".concat(0.3 * i2, "s"), opacity: 0.6 } }, i2);
  }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes ripple {\n            0% { transform: scale(0.2); opacity: 1; }\n            100% { transform: scale(1.5); opacity: 0; }\n          }\n        " })] }));
};
var dt = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = 5 * e2, l2 = e2, h2 = "".concat(a2, "20");
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: d2, height: l2, backgroundColor: h2, borderRadius: "4px", overflow: "hidden", position: "relative" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transform: "translateX(-100%)", backgroundImage: "linear-gradient(90deg, transparent, ".concat(a2, "30, transparent)"), animation: "pulse ".concat(2 / c2, "s infinite") } }) }));
};
var lt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = 5 * o2, h2 = 3 * o2, p2 = "".concat(r2, "20");
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { width: l2, height: h2, borderRadius: "8px", overflow: "hidden", position: "relative", backgroundColor: "#f5f5f5", padding: "16px" } }, { children: [(0, import_jsx_runtime.jsx)("div", s({ style: { width: "100%", height: "60%", backgroundColor: p2, borderRadius: "4px", marginBottom: "12px", position: "relative", overflow: "hidden" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transform: "translateX(-100%)", backgroundImage: "linear-gradient(90deg, transparent, ".concat(r2, "30, transparent)"), animation: "pulse ".concat(2 / d2, "s infinite") } }) })), (0, import_jsx_runtime.jsx)("div", s({ style: { width: "80%", height: "10%", backgroundColor: p2, borderRadius: "4px", marginBottom: "8px", position: "relative", overflow: "hidden" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transform: "translateX(-100%)", backgroundImage: "linear-gradient(90deg, transparent, ".concat(r2, "30, transparent)"), animation: "pulse ".concat(2 / d2, "s infinite"), animationDelay: "0.1s" } }) })), [0, 1].map(function(i2) {
    return (0, import_jsx_runtime.jsx)("div", s({ style: { width: "100%", height: "8%", backgroundColor: p2, borderRadius: "4px", marginBottom: "6px", position: "relative", overflow: "hidden" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transform: "translateX(-100%)", backgroundImage: "linear-gradient(90deg, transparent, ".concat(r2, "30, transparent)"), animation: "pulse ".concat(2 / d2, "s infinite"), animationDelay: "".concat(0.2 + 0.1 * i2, "s") } }) }), i2);
  })] }));
};
var ht = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = "".concat(a2, "20");
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: e2, height: e2, borderRadius: "50%", backgroundColor: d2, position: "relative", overflow: "hidden" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transform: "translateX(-100%)", backgroundImage: "linear-gradient(90deg, transparent, ".concat(a2, "30, transparent)"), animation: "pulse ".concat(2 / c2, "s infinite") } }) }));
};
var pt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = 5 * o2, h2 = 4 * o2, p2 = o2 / 2, u2 = "".concat(r2, "20");
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: l2, height: h2, borderRadius: "8px", padding: "12px", backgroundColor: "#f5f5f5" } }, { children: Array.from({ length: 5 }).map(function(n3, e3) {
    return (0, import_jsx_runtime.jsxs)("div", s({ style: { display: "flex", alignItems: "center", marginBottom: "8px", position: "relative" } }, { children: [(0, import_jsx_runtime.jsx)("div", s({ style: { width: p2, height: p2, borderRadius: "50%", backgroundColor: u2, marginRight: "12px", position: "relative", overflow: "hidden" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transform: "translateX(-100%)", backgroundImage: "linear-gradient(90deg, transparent, ".concat(r2, "30, transparent)"), animation: "pulse ".concat(2 / d2, "s infinite"), animationDelay: "".concat(0.1 * e3, "s") } }) })), (0, import_jsx_runtime.jsxs)("div", s({ style: { flex: 1 } }, { children: [(0, import_jsx_runtime.jsx)("div", s({ style: { width: "60%", height: p2 / 2.5, backgroundColor: u2, borderRadius: "4px", marginBottom: "4px", position: "relative", overflow: "hidden" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transform: "translateX(-100%)", backgroundImage: "linear-gradient(90deg, transparent, ".concat(r2, "30, transparent)"), animation: "pulse ".concat(2 / d2, "s infinite"), animationDelay: "".concat(0.1 * e3 + 0.1, "s") } }) })), (0, import_jsx_runtime.jsx)("div", s({ style: { width: "80%", height: p2 / 3, backgroundColor: u2, borderRadius: "4px", position: "relative", overflow: "hidden" } }, { children: (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, transform: "translateX(-100%)", backgroundImage: "linear-gradient(90deg, transparent, ".concat(r2, "30, transparent)"), animation: "pulse ".concat(2 / d2, "s infinite"), animationDelay: "".concat(0.1 * e3 + 0.2, "s") } }) }))] }))] }), e3);
  }) }));
};
var ut = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2;
  return (0, import_jsx_runtime.jsx)("div", { style: { width: e2, height: e2, borderRadius: "50%", border: "".concat(e2 / 10, "px solid rgba(0, 0, 0, 0.1)"), borderTopColor: a2, animation: "spin ".concat(1 / c2, "s linear infinite") } });
};
var vt = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#3B82F6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = e2 / 6, l2 = 1.5 * e2;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { width: l2, height: l2 / 2, position: "relative" } }, { children: [0, 1].map(function(i3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: d2, height: d2, borderRadius: "50%", backgroundColor: a2, top: "50%", left: "50%", transform: "translate(-50%, -50%)", animation: "infinity-loop-".concat(i3, " ").concat(2 / c2, "s linear infinite") } }, i3);
  }) }));
};
var ft = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = e2 / 5;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { display: "flex", justifyContent: "center", alignItems: "center", gap: d2 / 2 } }, { children: [0, 1, 2].map(function(i3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { width: d2, height: d2, borderRadius: "50%", backgroundColor: a2, animation: "dotPulse ".concat(1.5 / c2, "s ease-in-out ").concat(0.2 * i3, "s infinite") } }, i3);
  }) }));
};
var mt = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2;
  return (0, import_jsx_runtime.jsx)("div", { style: { width: e2, height: e2, border: "".concat(e2 / 10, "px solid ").concat(a2), borderRadius: "50%", borderTopColor: "transparent", animation: "spin ".concat(1 / c2, "s linear infinite") } });
};
var yt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 10;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "relative", width: o2, height: o2 } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", border: "".concat(l2, "px solid ").concat(r2), borderRadius: "50%", borderRightColor: "transparent", animation: "spin ".concat(1 / d2, "s linear infinite") } }), (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "70%", height: "70%", top: "15%", left: "15%", border: "".concat(l2, "px solid ").concat(r2), borderRadius: "50%", borderLeftColor: "transparent", animation: "spinReverse ".concat(1 / d2, "s linear infinite") } })] }));
};
var gt = function(i2) {
  var n2 = i2.size, e2 = void 0 === n2 ? 40 : n2, o2 = i2.color, a2 = void 0 === o2 ? "#8B5CF6" : o2, r2 = i2.speed, c2 = void 0 === r2 ? 1 : r2, d2 = e2 / 15, l2 = e2 / 3;
  return (0, import_jsx_runtime.jsx)("div", s({ style: { position: "relative", width: e2, height: e2 } }, { children: Array.from({ length: 12 }).map(function(i3, n3) {
    return (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: d2, height: l2, backgroundColor: a2, left: "50%", top: "0%", marginLeft: -d2 / 2, transformOrigin: "center ".concat(e2 / 2, "px"), transform: "rotate(".concat(30 * n3, "deg) translateY(").concat(e2 / 6, "px)"), opacity: 1 - n3 / 12, animation: "fade ".concat(1.2 / c2, "s linear infinite") } }, n3);
  }) }));
};
var bt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "relative", width: o2, height: o2 } }, { children: [[0, 1, 2].map(function(i2) {
    return (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", border: "".concat(o2 / 20, "px solid ").concat(r2), borderRadius: "50%", opacity: 0, animation: "pulse ".concat(2 / d2, "s ease-out ").concat(0.5 * i2, "s infinite") } }, i2);
  }), (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "30%", height: "30%", top: "35%", left: "35%", backgroundColor: r2, borderRadius: "50%" } })] }));
};
var wt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 4;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "relative", width: o2, height: o2 } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", border: "".concat(o2 / 20, "px solid ").concat(r2, "40"), borderRadius: "50%" } }), (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: l2, height: l2, backgroundColor: r2, borderRadius: "50%", top: "50%", left: "50%", marginTop: -l2 / 2, marginLeft: -l2 / 2, transformOrigin: "".concat(o2 / 2 - l2 / 2, "px ").concat(l2 / 2, "px"), animation: "spin ".concat(2 / d2, "s linear infinite") } })] }));
};
var xt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = o2 / 15;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "relative", width: o2, height: o2 } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", border: "".concat(l2, "px solid ").concat(r2, "40"), borderRadius: "50%" } }), (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: l2, height: "45%", backgroundColor: r2, top: "5%", left: "50%", marginLeft: -l2 / 2, transformOrigin: "bottom", animation: "spin ".concat(6 / d2, "s linear infinite") } }), (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: l2, height: "30%", backgroundColor: r2, top: "20%", left: "50%", marginLeft: -l2 / 2, transformOrigin: "bottom", animation: "spin ".concat(1 / d2, "s linear infinite") } })] }));
};
var kt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { position: "relative", width: o2, height: o2 } }, { children: [(0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", backgroundColor: r2, animation: "flipY ".concat(2 / d2, "s cubic-bezier(0.45, 0, 0.55, 1) infinite") } }), (0, import_jsx_runtime.jsx)("div", { style: { position: "absolute", width: "100%", height: "100%", backgroundColor: "".concat(r2, "80"), animation: "flipX ".concat(2 / d2, "s cubic-bezier(0.45, 0, 0.55, 1) infinite"), animationDelay: "".concat(1 / d2, "s") } })] }));
};
var Ct = function(n2) {
  var e2 = n2.text, o2 = void 0 === e2 ? "Compiling code" : e2, a2 = n2.color, r2 = void 0 === a2 ? "#22D3EE" : a2, c2 = n2.speed;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { fontFamily: "monospace", fontSize: "1rem", color: r2 } }, { children: [o2, (0, import_jsx_runtime.jsx)("span", s({ style: { display: "inline-block", width: 10, marginLeft: 2, animation: "blinkCursor ".concat(1 / (void 0 === c2 ? 1 : c2), "s step-start infinite") } }, { children: "|" })), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes blinkCursor {\n            0%, 100% { opacity: 1; }\n            50% { opacity: 0; }\n          }\n        " })] }));
};
var zt = function(n2) {
  var e2 = n2.text, o2 = void 0 === e2 ? "Loading..." : e2, a2 = n2.speed, r2 = void 0 === a2 ? 1 : a2, c2 = n2.color, d2 = void 0 === c2 ? "#1F2937" : c2, l2 = o2.split("");
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { display: "flex", gap: 2, fontWeight: 600, color: d2, fontSize: "1.1rem" } }, { children: [l2.map(function(i2, n3) {
    return (0, import_jsx_runtime.jsx)("span", s({ style: { opacity: 0, animation: "revealText ".concat(l2.length / r2, "s steps(").concat(l2.length, ") infinite"), animationDelay: "".concat(0.1 * n3, "s") } }, { children: i2 }), n3);
  }), (0, import_jsx_runtime.jsx)("style", { children: "\n          @keyframes revealText {\n            0% { opacity: 0; }\n            50% { opacity: 1; }\n            100% { opacity: 0; }\n          }\n        " })] }));
};
var Bt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = n2.text, h2 = o2 / 2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { display: "flex", alignItems: "center", color: r2, fontSize: h2 } }, { children: [void 0 === l2 ? "Loading" : l2, (0, import_jsx_runtime.jsx)("div", s({ style: { display: "inline-flex", overflow: "hidden", height: h2 } }, { children: (0, import_jsx_runtime.jsx)("span", s({ style: { animation: "textDots ".concat(1.5 / d2, "s infinite") } }, { children: "..." })) }))] }));
};
var Ft = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, d2 = n2.color, l2 = void 0 === d2 ? "#8B5CF6" : d2, h2 = n2.speed, p2 = void 0 === h2 ? 1 : h2, u2 = n2.text, v2 = void 0 === u2 ? "Loading.." : u2, f2 = (0, import_react.useState)(""), m2 = f2[0], y2 = f2[1], g2 = (0, import_react.useRef)(0), b2 = o2 / 2;
  return (0, import_react.useEffect)(function() {
    var t2 = setInterval(function() {
      g2.current < v2.length ? (y2(function(t3) {
        return t3 + v2[g2.current];
      }), g2.current += 1) : (clearInterval(t2), setTimeout(function() {
        y2(""), g2.current = 0;
      }, 1e3 / p2));
    }, 100 / p2);
    return function() {
      return clearInterval(t2);
    };
  }, [v2, p2]), (0, import_jsx_runtime.jsxs)("div", s({ style: { color: l2, fontSize: b2, fontFamily: "monospace", position: "relative", minWidth: "".concat(v2.length * (b2 / 2), "px") } }, { children: [m2, (0, import_jsx_runtime.jsx)("span", { style: { width: b2 / 4, height: b2, backgroundColor: l2, display: "inline-block", marginLeft: "2px", verticalAlign: "middle", animation: "blink 1s step-end infinite" } })] }));
};
var Rt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, a2 = n2.color, r2 = void 0 === a2 ? "#8B5CF6" : a2, c2 = n2.speed, d2 = void 0 === c2 ? 1 : c2, l2 = n2.text, h2 = void 0 === l2 ? "Loading" : l2;
  return (0, import_jsx_runtime.jsxs)("div", s({ style: { color: r2, fontSize: o2 / 2, fontFamily: "monospace", position: "relative" } }, { children: [(0, import_jsx_runtime.jsx)("span", s({ style: { position: "absolute", top: 0, left: 0, clipPath: "rect(0, 900px, 0, 0)", animation: "glitch-anim-1 ".concat(3 / d2, "s infinite linear alternate-reverse") } }, { children: h2 })), (0, import_jsx_runtime.jsx)("span", s({ style: { position: "absolute", top: 0, left: 0, clipPath: "rect(0, 900px, 0, 0)", animation: "glitch-anim-2 ".concat(4 / d2, "s infinite linear alternate-reverse") } }, { children: h2 })), h2] }));
};
var Dt = function(n2) {
  var e2 = n2.size, o2 = void 0 === e2 ? 40 : e2, r2 = n2.color, d2 = void 0 === r2 ? "#8B5CF6" : r2, l2 = n2.speed, h2 = void 0 === l2 ? 1 : l2, p2 = n2.max, u2 = void 0 === p2 ? 100 : p2, v2 = (0, import_react.useState)(0), f2 = v2[0], m2 = v2[1], y2 = o2 / 1.5;
  return (0, import_react.useEffect)(function() {
    var t2 = Date.now(), i2 = 5e3 / h2, n3 = function() {
      var e3 = Date.now() - t2;
      if (e3 < i2) {
        var o3 = e3 / i2;
        m2(Math.floor(o3 * u2)), requestAnimationFrame(n3);
      } else m2(u2), setTimeout(function() {
        m2(0), t2 = Date.now(), requestAnimationFrame(n3);
      }, 1e3);
    };
    return requestAnimationFrame(n3), function() {
    };
  }, [u2, h2]), (0, import_jsx_runtime.jsxs)("div", s({ style: { color: d2, fontSize: y2, fontFamily: "monospace", display: "flex", alignItems: "center", justifyContent: "center" } }, { children: [(0, import_jsx_runtime.jsx)("div", s({ style: { minWidth: "".concat(String(u2).length + 1, "ch"), textAlign: "right" } }, { children: f2 })), (0, import_jsx_runtime.jsxs)("div", { children: ["/", u2] })] }));
};
export {
  f as ArcheryLoader,
  R as AtomLoader,
  ht as AvatarSkeleton,
  _ as BarLoader,
  u as BinaryLoader,
  k as BombImpactLoader,
  l as BouncingBalls,
  lt as CardSkeleton,
  ut as CircleLoader,
  p as CircuitBoard,
  U as CircularProgress,
  V as CircularSegments,
  xt as ClockLoader,
  Dt as CounterLoader,
  v as DataStream,
  ft as DotLoader,
  Bt as DotText,
  G as DownloadLoader,
  yt as DualRingLoader,
  ot as EllipsisPulseLoader,
  kt as FlipLoader,
  C as FlippingCardsLoader,
  w as FoldingCube,
  q as GearLoader,
  et as GlassMorphLoader,
  Rt as GlitchText,
  B as GooeyLoader,
  $ as HeartbeatLoader,
  N as IconPulse,
  E as IconSpin,
  vt as InfinityLoop,
  at as LiquidDropLoader,
  pt as ListSkeleton,
  h as MatrixRain,
  wt as OrbitLoader,
  H as PowerLoader,
  J as ProgressDots,
  dt as PulseLoader,
  bt as PulseRingLoader,
  z as PulsingGridLoader,
  it as RadialProgress,
  Z as RainLoader,
  mt as RingLoader,
  st as RippleRingLoader,
  g as RollingLoader,
  gt as SpinnerLoader,
  x as SpiralGalaxy,
  tt as StackedBars,
  nt as StairStepLoader,
  b as StairsLoader,
  Q as StepProgress,
  m as SunriseMountainLoader,
  Ct as TerminalBarLoader,
  zt as TextRevealLoader,
  F as TriangleMaze,
  Ft as TypeWriter,
  rt as TypingDotsLoader,
  K as WaveLoader,
  y as WavesLoader,
  ct as WormTrailLoader
};
/*! Bundled license information:

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-loaderkit/dist/index.esm.js:
  (**
   * @license lucide-react v0.511.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react-loaderkit.js.map
