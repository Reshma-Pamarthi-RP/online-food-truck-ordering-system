var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest,
  handleDataRequest: () => handleDataRequest
});
var import_server = require("react-dom/server"), import_react = require("@remix-run/react"), import_remix = require("@mantine/remix"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), handleDataRequest = async (response, { request }) => {
  let isGet = request.method.toLowerCase() === "get", isPrefetch = (request.headers.get("Purpose") || request.headers.get("X-Purpose") || request.headers.get("Sec-Purpose") || request.headers.get("Sec-Fetch-Purpose") || request.headers.get("Moz-Purpose")) === "prefetch";
  return isGet && isPrefetch && !response.headers.has("Cache-Control") && response.headers.set("Cache-Control", "private, max-age=5"), response;
}, server = (0, import_remix.createStylesServer)();
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, {
      context: remixContext,
      url: request.url
    }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 37,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${(0, import_remix.injectStyles)(markup, server)}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  Document: () => Document,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_core2 = require("@mantine/core"), import_modals = require("@mantine/modals"), import_notifications2 = require("@mantine/notifications"), import_remix2 = require("@mantine/remix"), import_node2 = require("@remix-run/node"), import_react5 = require("@remix-run/react");

// app/components/404.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function FourOhFour() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "page_404_body",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "page_404_div",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
            src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png",
            alt: "404"
          }, void 0, !1, {
            fileName: "app/components/404.tsx",
            lineNumber: 8,
            columnNumber: 11
          }, this)
        }, void 0, !1, {
          fileName: "app/components/404.tsx",
          lineNumber: 7,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
              children: "Sorry!"
            }, void 0, !1, {
              fileName: "app/components/404.tsx",
              lineNumber: 14,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
              children: [
                "Either you aren't cool enough to visit this page or it doesn't exist",
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("em", {
                  children: ". . . like your social life."
                }, void 0, !1, {
                  fileName: "app/components/404.tsx",
                  lineNumber: 17,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/components/404.tsx",
              lineNumber: 15,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.Link, {
              to: "/",
              prefetch: "intent",
              children: "You can go now!"
            }, void 0, !1, {
              fileName: "app/components/404.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/components/404.tsx",
          lineNumber: 13,
          columnNumber: 9
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/components/404.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, !1, {
    fileName: "app/components/404.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/context/CartContext.tsx
var import_solid = require("@heroicons/react/24/solid"), import_core = require("@mantine/core"), import_notifications = require("@mantine/notifications"), import_react4 = require("@remix-run/react"), React2 = __toESM(require("react"));

// app/utils/hooks.ts
var import_react3 = require("@remix-run/react"), React = __toESM(require("react"));
function useMatchesData(routeId) {
  let matchingRoutes = (0, import_react3.useMatches)(), route = React.useMemo(
    () => matchingRoutes.find((route2) => route2.id === routeId),
    [matchingRoutes, routeId]
  );
  return route == null ? void 0 : route.data;
}
function useOptionalUser() {
  return useMatchesData("root");
}
function useUser() {
  let { user } = useOptionalUser();
  if (!user)
    throw new Error("No user found");
  return { user };
}
function useAppData() {
  return useMatchesData("routes/__app");
}
function useFoodTruck(slug) {
  let { foodTrucks } = useAppData();
  return foodTrucks.find((foodTruck2) => foodTruck2.slug === slug);
}
function useItem(slug) {
  let { items } = useAppData();
  return items.find((item2) => item2.slug === slug);
}
function useLocalStorageState({
  key,
  defaultValue
}) {
  let [value, setValue] = React.useState(defaultValue);
  return React.useEffect(() => {
    let localStorageValue = window.localStorage.getItem(key);
    if (!localStorageValue) {
      setValue(defaultValue);
      return;
    }
    setValue(JSON.parse(localStorageValue));
  }, []), React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]), [value, setValue];
}

// app/context/CartContext.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), LocalStorageKey = "food-truck-cart", CartContext = React2.createContext(void 0);
function CartProvider({ children }) {
  let [items, setItems] = useLocalStorageState({
    key: LocalStorageKey,
    defaultValue: []
  }), totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  ), clearCart = React2.useCallback(() => {
    (0, import_notifications.cleanNotifications)(), setItems([]), (0, import_notifications.showNotification)({
      title: "Successfully cleared",
      message: "All items in the cart are cleared",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.CheckCircleIcon, {
        className: "h-7 w-7"
      }, void 0, !1, {
        fileName: "app/context/CartContext.tsx",
        lineNumber: 49,
        columnNumber: 10
      }, this),
      color: "green"
    });
  }, [setItems]), addItemToCart = React2.useCallback(
    (item) => {
      let isOrderFromDifferentRestaurant = items.some(
        (cartItem) => cartItem.restaurantId !== item.restaurantId
      ), isAlreadyInCart = items.some((i) => i.id === item.id);
      if ((0, import_notifications.cleanNotifications)(), isOrderFromDifferentRestaurant) {
        (0, import_notifications.showNotification)({
          id: "different-restaurant",
          title: "Order from different restaurant",
          message: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "space-y-2",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                children: "You can only order from one restaurant at a time"
              }, void 0, !1, {
                fileName: "app/context/CartContext.tsx",
                lineNumber: 69,
                columnNumber: 8
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.Button, {
                    variant: "subtle",
                    color: "red",
                    onClick: async () => {
                      clearCart(), (0, import_notifications.hideNotification)("different-restaurant");
                    },
                    children: "Clear previous order"
                  }, void 0, !1, {
                    fileName: "app/context/CartContext.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core.Button, {
                    component: import_react4.Link,
                    color: "blue",
                    to: "/cart",
                    size: "sm",
                    onClick: () => (0, import_notifications.hideNotification)("different-restaurant"),
                    children: "View cart"
                  }, void 0, !1, {
                    fileName: "app/context/CartContext.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/context/CartContext.tsx",
                lineNumber: 70,
                columnNumber: 8
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/context/CartContext.tsx",
            lineNumber: 68,
            columnNumber: 7
          }, this),
          color: "blue",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.InformationCircleIcon, {
            className: "h-9 w-9"
          }, void 0, !1, {
            fileName: "app/context/CartContext.tsx",
            lineNumber: 95,
            columnNumber: 12
          }, this),
          autoClose: !1
        });
        return;
      }
      if (!isAlreadyInCart) {
        setItems((prev) => [...prev, item]), (0, import_notifications.showNotification)({
          title: "Successfully added",
          message: `Added ${item.name} to cart`,
          color: "green",
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.CheckCircleIcon, {
            className: "h-9 w-9"
          }, void 0, !1, {
            fileName: "app/context/CartContext.tsx",
            lineNumber: 107,
            columnNumber: 12
          }, this)
        });
        return;
      }
      setItems((prevItems) => {
        let newItems = [...prevItems], index = newItems.findIndex((i) => i.id === item.id);
        return index > -1 && (newItems[index].quantity = newItems[index].quantity + item.quantity), newItems;
      }), (0, import_notifications.showNotification)({
        title: "Item already present in cart",
        message: `Quantity increased by ${item.quantity}`,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.CheckCircleIcon, {
          className: "h-7 w-7"
        }, void 0, !1, {
          fileName: "app/context/CartContext.tsx",
          lineNumber: 126,
          columnNumber: 11
        }, this),
        color: "green"
      });
    },
    [clearCart, items, setItems]
  ), removeItemFromCart = (itemId) => {
    setItems((prev) => prev.filter((item) => item.id !== itemId)), (0, import_notifications.showNotification)({
      title: "Successfully removed",
      message: "Item removed from cart",
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid.MinusCircleIcon, {
        className: "h-7 w-7"
      }, void 0, !1, {
        fileName: "app/context/CartContext.tsx",
        lineNumber: 138,
        columnNumber: 10
      }, this),
      color: "red"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartContext.Provider, {
    value: {
      itemsInCart: items,
      totalPrice,
      addItemToCart,
      removeItemFromCart,
      clearCart
    },
    children
  }, void 0, !1, {
    fileName: "app/context/CartContext.tsx",
    lineNumber: 144,
    columnNumber: 3
  }, this);
}
function useCart() {
  let context = React2.useContext(CartContext);
  if (!context)
    throw new Error("`useCart()` must be used within a <CartProvider />");
  return context;
}

// app/session.server.ts
var import_client3 = require("@prisma/client"), import_node = require("@remix-run/node"), import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/lib/user.server.ts
var import_client2 = require("@prisma/client"), bcrypt2 = __toESM(require("bcryptjs"));

// app/db.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db__ || (global.__db__ = new import_client.PrismaClient()), prisma = global.__db__, prisma.$connect();

// app/utils/misc.ts
var bcrypt = __toESM(require("bcryptjs"));
function titleCase(string) {
  string = string.toLowerCase();
  let wordsArray = string.split(" ");
  for (var i = 0; i < wordsArray.length; i++)
    wordsArray[i] = wordsArray[i].charAt(0).toUpperCase() + wordsArray[i].slice(1);
  return wordsArray.join(" ");
}
function createPasswordHash(password2) {
  return bcrypt.hash(password2, 10);
}
function formatTime(date) {
  let _time = new Date(date);
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: !0
  }).format(_time);
}
var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

// app/lib/user.server.ts
async function getUserById(id) {
  return prisma.user.findUnique({
    where: { id },
    select: {
      id: !0,
      firstName: !0,
      lastName: !0,
      email: !0,
      foodTruckId: !0,
      hasResetPassword: !0
    }
  });
}
async function getUserByEmail(email2) {
  return prisma.user.findUnique({
    where: { email: email2 },
    select: {
      firstName: !0,
      lastName: !0,
      email: !0
    }
  });
}
async function createUser({
  email: email2,
  password: password2,
  firstName,
  lastName,
  role = import_client2.Role.CUSTOMER
}) {
  return prisma.user.create({
    data: {
      firstName,
      lastName,
      email: email2,
      passwordHash: await createPasswordHash(password2),
      role
    }
  });
}
async function verifyLogin(email2, password2) {
  let userWithPassword = await prisma.user.findUnique({
    where: { email: email2 }
  });
  if (!userWithPassword || !userWithPassword.passwordHash || !await bcrypt2.compare(password2, userWithPassword.passwordHash))
    return null;
  let { passwordHash: _password, ...userWithoutPassword } = userWithPassword;
  return userWithoutPassword;
}

// app/session.server.ts
(0, import_tiny_invariant.default)(process.env.SESSION_SECRET, "SESSION_SECRET must be set");
var sessionStorage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 0,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: !1
  }
}), USER_SESSION_KEY = "userId", USER_ROLE_KEY = "userRole", fourteenDaysInSeconds = 60 * 60 * 24 * 14, thirtyDaysInSeconds = 60 * 60 * 24 * 30;
async function getSession(request) {
  let cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
}
async function getUserId(request) {
  return (await getSession(request)).get(USER_SESSION_KEY);
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (userId === void 0)
    return null;
  let user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = await getUserId(request);
  if (!userId) {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node.redirect)(`/login?${searchParams}`);
  }
  return userId;
}
async function requireUser(request, redirectTo = new URL(request.url).pathname) {
  let userId = await requireUserId(request, redirectTo), user = await getUserById(userId);
  if (user)
    return user;
  throw await logout(request);
}
async function createUserSession({
  request,
  userId,
  role,
  remember = !1,
  redirectTo
}) {
  let session = await getSession(request);
  return session.set(USER_SESSION_KEY, userId), session.set(USER_ROLE_KEY, role), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await sessionStorage.commitSession(session, {
        maxAge: remember ? fourteenDaysInSeconds : thirtyDaysInSeconds
      })
    }
  });
}
async function logout(request) {
  let session = await getSession(request);
  return session.unset(USER_SESSION_KEY), session.unset(USER_ROLE_KEY), (0, import_node.redirect)("/login", {
    headers: {
      "Set-Cookie": await sessionStorage.destroySession(session)
    }
  });
}
async function isCustomer(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === import_client3.Role.CUSTOMER;
}
async function isAdmin(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === import_client3.Role.ADMIN;
}
async function isStaff(request) {
  return (await getSession(request)).get(USER_ROLE_KEY) === import_client3.Role.STAFF;
}

// app/styles/app.css
var app_default = "/build/_assets/app-SEVNTL7M.css";

// appConfig.ts
var appConfig = {
  name: "Online Food Truck System",
  cardsLimit: 4,
  logo: "https://img.freepik.com/premium-vector/vintage-food-truck-logo-design_139869-127.jpg?w=1480"
}, appConfig_default = appConfig;

// app/root.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), appendCache = (0, import_core2.createEmotionCache)({ key: "mantine", prepend: !1 }), links = () => [{ rel: "stylesheet", href: app_default }], loader = async ({ request }) => {
  let user = await getUser(request);
  return (0, import_node2.json)({ user });
}, meta = () => ({
  charset: "utf-8",
  title: appConfig_default.name,
  viewport: "width=device-width,initial-scale=1"
});
function Document({
  title,
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core2.MantineProvider, {
    withNormalizeCSS: !0,
    emotionCache: appendCache,
    theme: {
      primaryColor: "indigo"
    },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
      lang: "en",
      className: "h-full",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
          children: [
            title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", {
              children: title
            }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 62,
              columnNumber: 15
            }, this) : null,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Meta, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 63,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Links, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 64,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_remix2.StylesPlaceholder, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 65,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 61,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
          className: "h-full",
          children: [
            children,
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.ScrollRestoration, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 69,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Scripts, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 70,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.LiveReload, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 71,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 67,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 60,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 53,
    columnNumber: 3
  }, this);
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_modals.ModalsProvider, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_notifications2.NotificationsProvider, {
        autoClose: 2e3,
        limit: 3,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartProvider, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react5.Outlet, {}, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 84,
            columnNumber: 7
          }, this)
        }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 83,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 81,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 80,
    columnNumber: 3
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react5.useCatch)();
  switch (caught.status) {
    case 404:
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, {
        title: "Oh no...",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FourOhFour, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 99,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 5
      }, this);
    default:
      throw new Error(`Unhandled error: ${caught.status}`);
  }
}

// app/routes/api/food-trucks/schedule.ts
var schedule_exports = {};
__export(schedule_exports, {
  action: () => action
});
var import_node4 = require("@remix-run/node");

// app/utils/misc.server.ts
var import_node3 = require("@remix-run/node");
var DEFAULT_REDIRECT = "/", badRequest = (data) => (0, import_node3.json)(data, { status: 400 }), unauthorized = (data) => (0, import_node3.json)(data, { status: 401 });
function validateEmail(email2) {
  return typeof email2 == "string" && email2.length > 3 && email2.includes("@");
}
function validateName(name2) {
  return typeof name2 == "string" && name2.length > 1;
}
function safeRedirect(to, defaultRedirect = DEFAULT_REDIRECT) {
  return !to || typeof to != "string" || !to.startsWith("/") || to.startsWith("//") ? defaultRedirect : to;
}

// app/routes/api/food-trucks/schedule.ts
var action = async ({ request }) => {
  var _a, _b;
  let formData = await request.formData(), foodTruckId = (_a = formData.get("foodTruckId")) == null ? void 0 : _a.toString(), _schedules = (_b = formData.get("schedules")) == null ? void 0 : _b.toString();
  if (!foodTruckId || !_schedules)
    return badRequest({ success: !1, message: "Invalid request" });
  let schedules = JSON.parse(_schedules);
  return await prisma.foodTruck.update({
    where: { id: foodTruckId },
    data: {
      schedule: {
        deleteMany: {},
        createMany: {
          data: schedules.map((schedule) => ({
            day: schedule.day,
            startTime: schedule.startTime,
            endTime: schedule.endTime
          }))
        }
      }
    }
  }), (0, import_node4.json)({ success: !0 });
};

// app/routes/api/reset-password.ts
var reset_password_exports = {};
__export(reset_password_exports, {
  action: () => action2
});
var import_node5 = require("@remix-run/node");
var action2 = async ({ request }) => {
  var _a, _b;
  let formData = await request.formData(), userId = (_a = formData.get("userId")) == null ? void 0 : _a.toString(), password2 = (_b = formData.get("password")) == null ? void 0 : _b.toString();
  return !userId || !password2 ? (0, import_node5.json)(
    { success: !1, error: "Missing userId or password" },
    { status: 400 }
  ) : (await prisma.user.update({
    where: { id: userId },
    data: {
      passwordHash: await createPasswordHash(password2),
      hasResetPassword: !0
    }
  }), (0, import_node5.json)({ success: !0 }));
};

// app/routes/api/auth/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action3,
  loader: () => loader2
});
var import_node6 = require("@remix-run/node");
var action3 = async ({ request }) => logout(request), loader2 = async () => (0, import_node6.redirect)("/");

// app/routes/__auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout,
  loader: () => loader3
});
var import_node7 = require("@remix-run/node"), import_react6 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => await getUser(request) ? (0, import_node7.redirect)("/") : null;
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "grid min-h-full place-items-center bg-gray-200",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col justify-center rounded-lg border bg-white py-12 px-4 sm:px-6 lg:px-12",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mx-auto w-full max-w-sm lg:w-96",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
            fileName: "app/routes/__auth.tsx",
            lineNumber: 19,
            columnNumber: 7
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__auth.tsx",
          lineNumber: 18,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth.tsx",
        lineNumber: 17,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__auth.tsx",
      lineNumber: 16,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__auth.tsx",
    lineNumber: 15,
    columnNumber: 3
  }, this);
}

// app/routes/__auth/register.tsx
var register_exports = {};
__export(register_exports, {
  action: () => action4,
  default: () => Register
});
var import_core3 = require("@mantine/core"), import_client4 = require("@prisma/client"), import_react7 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action4 = async ({ request }) => {
  let formData = await request.formData(), email2 = formData.get("email"), password2 = formData.get("password"), confirmPassword = formData.get("confirmPassword"), firstName = formData.get("firstName"), lastName = formData.get("lastName");
  if (!validateName(firstName))
    return badRequest({
      fieldErrors: {
        firstName: "First name is required"
      }
    });
  if (!validateName(lastName))
    return badRequest({
      fieldErrors: {
        lastName: "Last name is required"
      }
    });
  if (!validateEmail(email2))
    return badRequest({
      fieldErrors: { email: "Email is invalid" }
    });
  if (typeof password2 != "string" || typeof confirmPassword != "string")
    return badRequest({
      fieldErrors: { password: "Password is required" }
    });
  if (password2.length < 8 || confirmPassword.length < 8)
    return badRequest({
      fieldErrors: { password: "Password is too short" }
    });
  if (password2 !== confirmPassword)
    return badRequest({
      fieldErrors: { password: "Passwords do not match" }
    });
  if (await getUserByEmail(email2))
    return badRequest({
      fieldErrors: { email: "A user already exists with this email" }
    });
  let user = await createUser({ email: email2, password: password2, firstName, lastName });
  return createUserSession({
    request,
    userId: user.id,
    role: import_client4.Role.CUSTOMER,
    redirectTo: "/"
  });
};
function Register() {
  var _a, _b, _c, _d, _e;
  let transition = (0, import_react7.useTransition)(), actionData = (0, import_react7.useActionData)(), isSubmitting = transition.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "mt-6 text-3xl font-extrabold text-gray-900",
            children: "Register"
          }, void 0, !1, {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 90,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "mt-2 text-sm text-gray-600",
            children: [
              "Have an account already?",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.Anchor, {
                component: import_react7.Link,
                to: "/login",
                size: "sm",
                prefetch: "intent",
                children: "Sign in"
              }, void 0, !1, {
                fileName: "app/routes/__auth/register.tsx",
                lineNumber: 93,
                columnNumber: 6
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/register.tsx",
            lineNumber: 91,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 89,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react7.Form, {
        replace: !0,
        method: "post",
        className: "mt-8",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
          disabled: isSubmitting,
          className: "flex flex-col gap-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.TextInput, {
              name: "firstName",
              autoComplete: "given-name",
              label: "Given name",
              error: (_a = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _a.firstName,
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 101,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.TextInput, {
              name: "lastName",
              label: "Family name",
              error: (_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.lastName,
              autoComplete: "family-name",
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 109,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.TextInput, {
              name: "email",
              type: "email",
              autoComplete: "email",
              label: "Email address",
              error: (_c = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _c.email,
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 117,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.PasswordInput, {
              name: "password",
              label: "Password",
              error: (_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.password,
              autoComplete: "current-password",
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 126,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.PasswordInput, {
              name: "confirmPassword",
              label: "Confirm password",
              error: (_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.password,
              autoComplete: "current-password",
              required: !0
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 134,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core3.Button, {
              type: "submit",
              loading: isSubmitting,
              fullWidth: !0,
              loaderPosition: "right",
              mt: "1rem",
              children: "Register"
            }, void 0, !1, {
              fileName: "app/routes/__auth/register.tsx",
              lineNumber: 142,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__auth/register.tsx",
          lineNumber: 100,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__auth/register.tsx",
        lineNumber: 99,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/register.tsx",
    lineNumber: 88,
    columnNumber: 3
  }, this);
}

// app/routes/__auth/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action5,
  default: () => Login
});
var import_core4 = require("@mantine/core"), import_react8 = require("@remix-run/react");

// app/lib/zod.schema.ts
var import_zod = require("zod"), name = import_zod.z.string().min(1, "Name is required"), email = import_zod.z.string().email("Invalid email"), password = import_zod.z.string().min(8, "Password must be at least 8 characters"), LoginSchema = import_zod.z.object({
  email,
  password,
  remember: import_zod.z.enum(["on"]).optional(),
  redirectTo: import_zod.z.string().default("/")
});

// app/utils/validation.ts
async function validateAction(request, schema) {
  let formData = await request.formData(), fields = Object.fromEntries(formData), result = schema.safeParse(fields);
  if (!result.success) {
    let fieldErrors = result.error.issues.reduce(
      (acc, issue) => {
        let key = issue.path[0] ?? issue.code;
        return acc[key] = issue.message, acc;
      },
      {}
    );
    return {
      fields: null,
      fieldErrors
    };
  }
  return {
    fields: result.data,
    fieldErrors: null
  };
}

// app/routes/__auth/login.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), action5 = async ({ request }) => {
  let { fieldErrors, fields } = await validateAction(request, LoginSchema);
  if (fieldErrors)
    return badRequest({ fieldErrors });
  let { email: email2, password: password2, redirectTo, remember } = fields, user = await verifyLogin(email2, password2);
  return user ? createUserSession({
    request,
    userId: user.id,
    role: user.role,
    remember: remember === "on",
    redirectTo: safeRedirect(redirectTo)
  }) : badRequest({
    fieldErrors: {
      password: "Invalid username or password"
    }
  });
};
function Login() {
  var _a, _b;
  let [searchParams] = (0, import_react8.useSearchParams)(), fetcher = (0, import_react8.useFetcher)(), actionData = fetcher.data, redirectTo = searchParams.get("redirectTo") || "/", isSubmitting = fetcher.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
            className: "mt-6 text-3xl font-extrabold text-gray-900",
            children: "Sign in"
          }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 61,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "mt-2 text-sm text-gray-600",
            children: [
              "Do not have an account yet?",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Anchor, {
                component: import_react8.Link,
                to: "/register",
                size: "sm",
                prefetch: "intent",
                children: "Create account"
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 64,
                columnNumber: 6
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 62,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 60,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
        method: "post",
        replace: !0,
        className: "mt-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
            type: "hidden",
            name: "redirectTo",
            value: redirectTo
          }, void 0, !1, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 71,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
            disabled: isSubmitting,
            className: "flex flex-col gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.TextInput, {
                name: "email",
                type: "email",
                autoComplete: "email",
                label: "Email address",
                error: (_a = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _a.email,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 74,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.PasswordInput, {
                name: "password",
                label: "Password",
                error: (_b = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _b.password,
                autoComplete: "current-password",
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 83,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Group, {
                position: "apart",
                mt: "1rem",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Switch, {
                  id: "remember-me",
                  name: "rememberMe",
                  label: "Remember me"
                }, void 0, !1, {
                  fileName: "app/routes/__auth/login.tsx",
                  lineNumber: 92,
                  columnNumber: 7
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 91,
                columnNumber: 6
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core4.Button, {
                type: "submit",
                loading: isSubmitting,
                fullWidth: !0,
                loaderPosition: "right",
                mt: "1rem",
                children: "Sign in"
              }, void 0, !1, {
                fileName: "app/routes/__auth/login.tsx",
                lineNumber: 104,
                columnNumber: 6
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__auth/login.tsx",
            lineNumber: 73,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__auth/login.tsx",
        lineNumber: 70,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__auth/login.tsx",
    lineNumber: 59,
    columnNumber: 3
  }, this);
}

// app/routes/__app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => AppLayout,
  loader: () => loader4
});
var import_core6 = require("@mantine/core"), import_node8 = require("@remix-run/node"), import_react9 = require("@remix-run/react");

// app/components/TailwindContainer.tsx
var import_core5 = require("@mantine/core"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function TailwindContainer({
  children,
  className
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: (0, import_core5.clsx)("mx-auto max-w-2xl lg:max-w-7xl", className),
    children
  }, void 0, !1, {
    fileName: "app/components/TailwindContainer.tsx",
    lineNumber: 11,
    columnNumber: 3
  }, this);
}

// app/lib/restaurant.server.ts
function getAllRestaurants() {
  return prisma.foodTruck.findMany({
    orderBy: {
      name: "asc"
    },
    include: {
      items: !0,
      schedule: !0
    }
  });
}

// app/routes/__app.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => {
  if (await requireUserId(request), await isAdmin(request))
    return (0, import_node8.redirect)("/admin");
  if (await isStaff(request))
    return (0, import_node8.redirect)("/staff");
  let foodTrucks = await getAllRestaurants(), items = foodTrucks.reduce((acc, restaurant) => (restaurant.items.forEach((item) => acc.push(item)), acc), []);
  return (0, import_node8.json)({ foodTrucks, items });
};
function AppLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex h-full flex-col",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderComponent, {}, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 34,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core6.ScrollArea, {
          classNames: { root: "flex-1 bg-gray-100" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content, {}, void 0, !1, {
            fileName: "app/routes/__app.tsx",
            lineNumber: 36,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 35,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterComponent, {}, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 39,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app.tsx",
      lineNumber: 33,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 32,
    columnNumber: 3
  }, this);
}
function HeaderComponent() {
  let location = (0, import_react9.useLocation)(), { user } = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Form, {
        replace: !0,
        action: "/api/auth/logout",
        method: "post",
        id: "logout-form"
      }, void 0, !1, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 51,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: "max-h-16 ",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-full w-full items-center justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-shrink-0 items-center gap-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core6.Anchor, {
                  component: import_react9.Link,
                  to: "/",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "h-16 bg-black object-cover object-center",
                    src: appConfig_default.logo,
                    alt: "Logo"
                  }, void 0, !1, {
                    fileName: "app/routes/__app.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app.tsx",
                  lineNumber: 56,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 55,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core6.Button, {
                    px: 8,
                    component: import_react9.Link,
                    to: "/cart",
                    title: "Cart",
                    compact: !0,
                    children: "Cart"
                  }, void 0, !1, {
                    fileName: "app/routes/__app.tsx",
                    lineNumber: 66,
                    columnNumber: 8
                  }, this),
                  user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core6.Button, {
                        component: import_react9.Link,
                        to: "/order-history",
                        compact: !0,
                        children: "Your orders"
                      }, void 0, !1, {
                        fileName: "app/routes/__app.tsx",
                        lineNumber: 72,
                        columnNumber: 10
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core6.Button, {
                        type: "submit",
                        form: "logout-form",
                        compact: !0,
                        children: "Logout"
                      }, void 0, !1, {
                        fileName: "app/routes/__app.tsx",
                        lineNumber: 76,
                        columnNumber: 10
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core6.Button, {
                      compact: !0,
                      component: import_react9.Link,
                      to: `/login?redirectTo=${encodeURIComponent(
                        location.pathname
                      )}`,
                      children: "Login"
                    }, void 0, !1, {
                      fileName: "app/routes/__app.tsx",
                      lineNumber: 82,
                      columnNumber: 10
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app.tsx",
                lineNumber: 65,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app.tsx",
            lineNumber: 54,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app.tsx",
          lineNumber: 53,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app.tsx",
        lineNumber: 52,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 50,
    columnNumber: 3
  }, this);
}
function Content() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react9.Outlet, {}, void 0, !1, {
      fileName: "app/routes/__app.tsx",
      lineNumber: 104,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 103,
    columnNumber: 3
  }, this);
}
function FooterComponent() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-gray-400"
    }, void 0, !1, {
      fileName: "app/routes/__app.tsx",
      lineNumber: 112,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app.tsx",
    lineNumber: 111,
    columnNumber: 3
  }, this);
}

// app/routes/__app/restaurants.$slug.tsx
var restaurants_slug_exports = {};
__export(restaurants_slug_exports, {
  default: () => Restaurant,
  loader: () => loader5
});
var import_core7 = require("@mantine/core"), import_node9 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader5 = async ({ params }) => {
  let { slug } = params;
  if (!slug)
    throw new Response("No slug provided", { status: 404 });
  let feedbackOfRestaurant = (await prisma.order.findMany({
    where: {
      feedback: {
        isSet: !0
      }
    },
    include: {
      user: !0,
      items: {
        include: {
          item: {
            include: {
              restaurant: !0
            }
          }
        }
      }
    }
  })).filter(
    (feedback) => feedback.items[0].item.restaurant.slug === slug
  );
  return (0, import_node9.json)({
    slug,
    feedbackOfRestaurant
  });
};
function Restaurant() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col gap-4 p-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemsGrid, {}, void 0, !1, {
        fileName: "app/routes/__app/restaurants.$slug.tsx",
        lineNumber: 50,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/restaurants.$slug.tsx",
      lineNumber: 49,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/restaurants.$slug.tsx",
    lineNumber: 48,
    columnNumber: 3
  }, this);
}
function ItemsGrid() {
  let { slug, feedbackOfRestaurant } = (0, import_react10.useLoaderData)(), restaurant = useFoodTruck(slug), { addItemToCart } = useCart();
  return restaurant ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-white",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "mb-6 py-6 text-center text-2xl font-extrabold tracking-tight text-gray-900",
              children: restaurant.name
            }, void 0, !1, {
              fileName: "app/routes/__app/restaurants.$slug.tsx",
              lineNumber: 70,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:grid-cols-4 lg:gap-x-8",
              children: restaurant == null ? void 0 : restaurant.items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "group relative mx-auto sm:mx-[unset]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "overflow-hidden rounded-md bg-gray-200 shadow group-hover:opacity-75",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react10.Link, {
                      to: `/items/${item.slug}`,
                      prefetch: "intent",
                      className: "overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: item.image,
                        alt: item.name,
                        className: "aspect-square w-full object-cover object-center"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/restaurants.$slug.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/restaurants.$slug.tsx",
                      lineNumber: 81,
                      columnNumber: 10
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/restaurants.$slug.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                    className: "mt-4 text-sm text-gray-700",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Anchor, {
                      to: `/items/${item.slug}`,
                      prefetch: "intent",
                      component: import_react10.Link,
                      children: item.name
                    }, void 0, !1, {
                      fileName: "app/routes/__app/restaurants.$slug.tsx",
                      lineNumber: 95,
                      columnNumber: 10
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/restaurants.$slug.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "mt-1 text-sm font-medium text-gray-900",
                    children: [
                      "$",
                      item.price
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/restaurants.$slug.tsx",
                    lineNumber: 104,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Button, {
                    variant: "light",
                    fullWidth: !0,
                    type: "submit",
                    mt: "md",
                    onClick: () => addItemToCart({
                      ...item,
                      quantity: 1
                    }),
                    children: "Add to cart"
                  }, void 0, !1, {
                    fileName: "app/routes/__app/restaurants.$slug.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                  }, this)
                ]
              }, item.id, !0, {
                fileName: "app/routes/__app/restaurants.$slug.tsx",
                lineNumber: 76,
                columnNumber: 8
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/__app/restaurants.$slug.tsx",
              lineNumber: 74,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/restaurants.$slug.tsx",
          lineNumber: 69,
          columnNumber: 5
        }, this),
        feedbackOfRestaurant.length > 0 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core7.Divider, {
              my: 48
            }, void 0, !1, {
              fileName: "app/routes/__app/restaurants.$slug.tsx",
              lineNumber: 128,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                  className: "mb-6 py-6 text-center text-2xl font-extrabold tracking-tight text-gray-900",
                  children: "Feedbacks"
                }, void 0, !1, {
                  fileName: "app/routes/__app/restaurants.$slug.tsx",
                  lineNumber: 130,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-10 border p-2 sm:grid-cols-1 sm:gap-x-6 md:grid-cols-3 md:gap-y-0 lg:grid-cols-4 lg:gap-x-8",
                  children: feedbackOfRestaurant.map((f) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "group relative mx-auto sm:mx-[unset]",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "mt-1 text-lg font-medium text-gray-900",
                        children: [
                          '"',
                          f.feedback,
                          '" -'
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/__app/restaurants.$slug.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "ml-3 text-sm font-medium text-gray-900",
                        children: [
                          f.user.firstName,
                          " ",
                          f.user.lastName,
                          " (",
                          f.user.email,
                          ")"
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/__app/restaurants.$slug.tsx",
                        lineNumber: 142,
                        columnNumber: 11
                      }, this)
                    ]
                  }, f.id, !0, {
                    fileName: "app/routes/__app/restaurants.$slug.tsx",
                    lineNumber: 135,
                    columnNumber: 10
                  }, this))
                }, void 0, !1, {
                  fileName: "app/routes/__app/restaurants.$slug.tsx",
                  lineNumber: 133,
                  columnNumber: 8
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/restaurants.$slug.tsx",
              lineNumber: 129,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/restaurants.$slug.tsx",
          lineNumber: 127,
          columnNumber: 6
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/restaurants.$slug.tsx",
      lineNumber: 68,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/restaurants.$slug.tsx",
    lineNumber: 67,
    columnNumber: 3
  }, this) : null;
}

// app/routes/__app/order-history.tsx
var order_history_exports = {};
__export(order_history_exports, {
  action: () => action6,
  default: () => OrderHistory,
  loader: () => loader6
});
var import_outline = require("@heroicons/react/24/outline"), import_solid2 = require("@heroicons/react/24/solid"), import_core8 = require("@mantine/core"), import_hooks4 = require("@mantine/hooks"), import_client6 = require("@prisma/client"), import_node10 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), React3 = __toESM(require("react"));

// app/lib/order.server.ts
var import_client5 = require("@prisma/client");
function getOrders(userId) {
  return prisma.order.findMany({
    where: {
      userId
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      invoice: !0,
      items: {
        include: {
          item: !0
        }
      }
    }
  });
}
function createOrder({
  userId,
  items,
  amount,
  orderType,
  paymentMethod,
  pickupDateTime
}) {
  return prisma.order.create({
    data: {
      userId,
      type: orderType,
      status: import_client5.OrderStatus.PENDING,
      pickupDateTime,
      items: {
        createMany: {
          data: items.map((item) => ({
            itemId: item.id,
            quantity: item.quantity
          }))
        }
      },
      invoice: {
        create: {
          amount,
          totalAmount: amount,
          paymentMethod
        }
      }
    }
  });
}
async function cancelOrder(orderId) {
  if (!await prisma.order.findUnique({
    where: {
      id: orderId
    },
    include: {
      items: {
        include: {
          item: !0
        }
      }
    }
  }))
    throw new Error("Order not found");
  return prisma.order.update({
    where: {
      id: orderId
    },
    data: {
      status: import_client5.OrderStatus.CANCELLED
    }
  });
}

// app/routes/__app/order-history.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), dateFormatter = new Intl.DateTimeFormat("en-US"), loader6 = async ({ request }) => {
  let userId = await requireUserId(request), orders = await getOrders(userId);
  return (0, import_node10.json)({ orders });
}, action6 = async ({ request }) => {
  var _a, _b, _c, _d;
  let userId = await requireUserId(request), formData = await request.formData(), intent = (_a = formData.get("intent")) == null ? void 0 : _a.toString();
  if (!userId || !intent)
    return unauthorized({ success: !1, message: "Unauthorized" });
  switch (intent) {
    case "cancel-order": {
      let orderId = (_b = formData.get("orderId")) == null ? void 0 : _b.toString();
      return orderId ? cancelOrder(orderId).then(() => (0, import_node10.json)({ success: !0 })).catch((e) => (0, import_node10.json)({ success: !1, message: e.message }, { status: 500 })) : badRequest({ success: !1, message: "Invalid order id" });
    }
    case "publish-feedback": {
      let orderId = (_c = formData.get("orderId")) == null ? void 0 : _c.toString(), feedback = (_d = formData.get("feedback")) == null ? void 0 : _d.toString();
      return !orderId || !feedback ? badRequest({ success: !1, message: "Invalid order id" }) : (await prisma.order.update({
        where: { id: orderId },
        data: { feedback }
      }), (0, import_node10.json)({ success: !0 }));
    }
    default:
      return badRequest({ success: !1, message: "Invalid intent" });
  }
};
function OrderHistory() {
  let { orders } = (0, import_react11.useLoaderData)(), [searchParams, setSearchParams] = (0, import_react11.useSearchParams)(), { clearCart } = useCart();
  return React3.useEffect(() => {
    if (searchParams.get("success")) {
      clearCart(), setSearchParams({}, { replace: !0 });
      return;
    }
  }, [clearCart, searchParams, setSearchParams]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col gap-4 p-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "bg-white",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "bg-white",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "py-16 sm:py-24",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mx-auto max-w-7xl sm:px-2 lg:px-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "mx-auto max-w-2xl px-4 lg:max-w-4xl lg:px-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                        className: "text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl",
                        children: "Order history"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                        className: "mt-2 text-sm text-gray-500",
                        children: "Check the status of recent orders, manage returns, and discover similar products."
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 98,
                        columnNumber: 11
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 94,
                    columnNumber: 10
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/order-history.tsx",
                  lineNumber: 93,
                  columnNumber: 9
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-16",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                      className: "sr-only",
                      children: "Recent orders"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/order-history.tsx",
                      lineNumber: 106,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mx-auto max-w-7xl sm:px-2 lg:px-8",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "mx-auto max-w-2xl space-y-8 sm:px-4 lg:max-w-4xl lg:px-0",
                        children: orders.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                          children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Order, {
                            order
                          }, order.id, !1, {
                            fileName: "app/routes/__app/order-history.tsx",
                            lineNumber: 112,
                            columnNumber: 15
                          }, this))
                        }, void 0, !1, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 110,
                          columnNumber: 13
                        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState, {}, void 0, !1, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 116,
                          columnNumber: 13
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/order-history.tsx",
                      lineNumber: 107,
                      columnNumber: 10
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/order-history.tsx",
                  lineNumber: 105,
                  columnNumber: 9
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/order-history.tsx",
              lineNumber: 92,
              columnNumber: 8
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/order-history.tsx",
            lineNumber: 91,
            columnNumber: 7
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/order-history.tsx",
          lineNumber: 90,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/order-history.tsx",
        lineNumber: 89,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/order-history.tsx",
      lineNumber: 88,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/order-history.tsx",
    lineNumber: 87,
    columnNumber: 3
  }, this);
}
function EmptyState() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_outline.ShoppingBagIcon, {
        className: "mx-auto h-9 w-9 text-gray-500"
      }, void 0, !1, {
        fileName: "app/routes/__app/order-history.tsx",
        lineNumber: 133,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "mt-4 block text-sm font-medium text-gray-500",
        children: "No previous orders"
      }, void 0, !1, {
        fileName: "app/routes/__app/order-history.tsx",
        lineNumber: 134,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/order-history.tsx",
    lineNumber: 132,
    columnNumber: 3
  }, this);
}
function Order({
  order
}) {
  var _a, _b, _c, _d;
  let cancelOrder2 = (0, import_react11.useFetcher)(), feedbackFetcher = (0, import_react11.useFetcher)(), [isFeedbackModalOpen, handleFeedbackModal] = (0, import_hooks4.useDisclosure)(!1, {
    onClose: () => setFeedback("")
  }), [feedback, setFeedback] = React3.useState(""), isCancellingOrder = cancelOrder2.state !== "idle", isSubmittingFeedback = feedbackFetcher.state !== "idle", isOrderPending = order.status === import_client6.OrderStatus.PENDING, isOrderCancelled = order.status === import_client6.OrderStatus.CANCELLED, isOrderRejected = order.status === import_client6.OrderStatus.REJECTED, isOrderFulfilled = order.status === import_client6.OrderStatus.READY || order.status === import_client6.OrderStatus.DELIVERED, isOrderInProgress = !isOrderPending && !isOrderCancelled && !isOrderRejected && !isOrderFulfilled;
  return React3.useEffect(() => {
    var _a2;
    !((_a2 = feedbackFetcher.data) != null && _a2.success) || feedbackFetcher.state !== "idle" || handleFeedbackModal.close();
  }, [
    (_a = feedbackFetcher.data) == null ? void 0 : _a.success,
    feedbackFetcher.state,
    handleFeedbackModal
  ]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "border-t border-b border-gray-200 bg-white shadow-sm sm:rounded-lg sm:border",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            className: "sr-only",
            children: [
              "Order placed on",
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", {
                dateTime: order.createdAt,
                children: dateFormatter.format(new Date(order.createdAt))
              }, void 0, !1, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 184,
                columnNumber: 6
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/order-history.tsx",
            lineNumber: 182,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex items-center justify-between py-6 px-4 sm:gap-6 sm:px-6 lg:gap-8",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dl", {
                className: "flex items-center gap-8",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                        className: "font-medium text-gray-900",
                        children: "Transaction Id"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 192,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                        className: "mt-1 text-gray-500",
                        children: (_b = order.invoice) == null ? void 0 : _b.id.slice(-6).toUpperCase()
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 193,
                        columnNumber: 8
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 191,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                        className: "font-medium text-gray-900",
                        children: "Order number"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 199,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                        className: "mt-1 text-gray-500",
                        children: order.id.slice(-6).toUpperCase()
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 200,
                        columnNumber: 8
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 198,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "hidden sm:block",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                        className: "font-medium text-gray-900",
                        children: "Date placed"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 206,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                        className: "mt-1 text-gray-500",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", {
                          dateTime: order.createdAt,
                          children: dateFormatter.format(new Date(order.createdAt))
                        }, void 0, !1, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 208,
                          columnNumber: 9
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 207,
                        columnNumber: 8
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 205,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                        className: "font-medium text-gray-900",
                        children: "Total amount"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 215,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                        className: "mt-1 font-medium text-gray-900",
                        children: order.status === import_client6.OrderStatus.CANCELLED ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("s", {
                              children: [
                                "$",
                                (_c = order.invoice) == null ? void 0 : _c.amount.toFixed(2)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/__app/order-history.tsx",
                              lineNumber: 219,
                              columnNumber: 11
                            }, this),
                            " $0"
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 218,
                          columnNumber: 10
                        }, this) : `${(_d = order.invoice) == null ? void 0 : _d.amount.toFixed(2)}`
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 216,
                        columnNumber: 8
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 214,
                    columnNumber: 7
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex justify-between pt-6 text-gray-900 sm:block sm:pt-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dt", {
                        className: "font-medium text-gray-900",
                        children: "Status"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 228,
                        columnNumber: 8
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("dd", {
                        className: "mt-1 font-medium text-gray-900",
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core8.Badge, {
                          color: isOrderPending ? "blue" : isOrderCancelled ? "indigo" : isOrderRejected ? "red" : "green",
                          children: titleCase(order.status)
                        }, void 0, !1, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 230,
                          columnNumber: 9
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 229,
                        columnNumber: 8
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/order-history.tsx",
                    lineNumber: 227,
                    columnNumber: 7
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 190,
                columnNumber: 6
              }, this),
              isOrderPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core8.Button, {
                color: "red",
                variant: "outline",
                loaderPosition: "right",
                loading: isCancellingOrder,
                onClick: () => cancelOrder2.submit(
                  {
                    intent: "cancel-order",
                    orderId: order.id
                  },
                  { method: "post", replace: !0 }
                ),
                children: "Cancel Order"
              }, void 0, !1, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 248,
                columnNumber: 7
              }, this) : null
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/order-history.tsx",
            lineNumber: 189,
            columnNumber: 5
          }, this),
          order.feedback ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-2 flex items-center gap-4 pt-6 text-sm text-gray-900 sm:block sm:pt-0",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "pl-6 font-semibold",
                children: "Your feedback: "
              }, void 0, !1, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 270,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                className: "ml-1 font-normal",
                children: [
                  '"',
                  order.feedback,
                  '"'
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 271,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/order-history.tsx",
            lineNumber: 269,
            columnNumber: 6
          }, this) : null,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
            className: "divide-y divide-gray-200",
            children: order.items.map(({ item, quantity }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", {
              className: "p-4 sm:p-6",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex items-center sm:items-start",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-200 sm:h-40 sm:w-40",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                        src: item.image,
                        alt: item.name,
                        className: "h-full w-full object-cover object-center"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 281,
                        columnNumber: 10
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/order-history.tsx",
                      lineNumber: 280,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "ml-6 flex-1 text-sm",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "font-medium text-gray-900 sm:flex sm:justify-between",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h5", {
                              children: [
                                item.name,
                                " ",
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("i", {
                                  children: [
                                    "(x",
                                    quantity,
                                    ")"
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/__app/order-history.tsx",
                                  lineNumber: 290,
                                  columnNumber: 24
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/__app/order-history.tsx",
                              lineNumber: 289,
                              columnNumber: 11
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                              className: "mt-2 sm:mt-0",
                              children: [
                                "$",
                                (item.price * quantity).toFixed(2)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/__app/order-history.tsx",
                              lineNumber: 292,
                              columnNumber: 11
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 288,
                          columnNumber: 10
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "hidden text-gray-500 sm:mt-2 sm:block",
                          children: item.description
                        }, void 0, !1, {
                          fileName: "app/routes/__app/order-history.tsx",
                          lineNumber: 296,
                          columnNumber: 10
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__app/order-history.tsx",
                      lineNumber: 287,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/order-history.tsx",
                  lineNumber: 279,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-6 sm:flex sm:justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex items-center",
                      children: isOrderFulfilled ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid2.CheckCircleIcon, {
                            className: "h-5 w-5 text-green-500",
                            "aria-hidden": "true"
                          }, void 0, !1, {
                            fileName: "app/routes/__app/order-history.tsx",
                            lineNumber: 306,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                            className: "ml-2 text-sm font-medium text-gray-500",
                            children: [
                              "Delivered on",
                              " ",
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("time", {
                                dateTime: order.createdAt,
                                children: dateFormatter.format(new Date(order.createdAt))
                              }, void 0, !1, {
                                fileName: "app/routes/__app/order-history.tsx",
                                lineNumber: 313,
                                columnNumber: 13
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/__app/order-history.tsx",
                            lineNumber: 311,
                            columnNumber: 12
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                      }, this) : isOrderInProgress ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {}, void 0, !1, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 319,
                        columnNumber: 11
                      }, this) : null
                    }, void 0, !1, {
                      fileName: "app/routes/__app/order-history.tsx",
                      lineNumber: 303,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "mt-6 flex items-center space-x-4 divide-x divide-gray-200 border-t border-gray-200 pt-4 text-sm font-medium sm:mt-0 sm:ml-4 sm:border-none sm:pt-0",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex flex-1 items-center justify-center gap-4",
                        children: [
                          isOrderFulfilled && !order.feedback ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core8.Button, {
                            variant: "gradient",
                            compact: !0,
                            onClick: () => handleFeedbackModal.open(),
                            children: "Feedback"
                          }, void 0, !1, {
                            fileName: "app/routes/__app/order-history.tsx",
                            lineNumber: 338,
                            columnNumber: 12
                          }, this) : null,
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core8.Anchor, {
                            component: import_react11.Link,
                            to: `/items/${item.slug}`,
                            size: "sm",
                            children: "View Cuisine"
                          }, void 0, !1, {
                            fileName: "app/routes/__app/order-history.tsx",
                            lineNumber: 347,
                            columnNumber: 11
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/__app/order-history.tsx",
                        lineNumber: 336,
                        columnNumber: 10
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/order-history.tsx",
                      lineNumber: 335,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/order-history.tsx",
                  lineNumber: 302,
                  columnNumber: 8
                }, this)
              ]
            }, item.id, !0, {
              fileName: "app/routes/__app/order-history.tsx",
              lineNumber: 278,
              columnNumber: 7
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/__app/order-history.tsx",
            lineNumber: 276,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/order-history.tsx",
        lineNumber: 181,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core8.Modal, {
        opened: isFeedbackModalOpen,
        onClose: () => handleFeedbackModal.close(),
        centered: !0,
        overlayBlur: 0.8,
        overlayOpacity: 0.2,
        title: "Provide your feedback",
        closeOnClickOutside: !1,
        closeOnEscape: !1,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-2 space-y-4",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core8.Textarea, {
              minRows: 4,
              name: "feedback",
              defaultValue: "",
              value: feedback,
              onChange: (e) => setFeedback(e.target.value),
              placeholder: "Your feedback ...",
              disabled: isSubmittingFeedback
            }, void 0, !1, {
              fileName: "app/routes/__app/order-history.tsx",
              lineNumber: 373,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex items-center justify-end",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core8.Button, {
                variant: "filled",
                loaderPosition: "right",
                loading: isSubmittingFeedback,
                disabled: !feedback,
                onClick: () => feedbackFetcher.submit(
                  {
                    intent: "publish-feedback",
                    orderId: order.id,
                    feedback
                  },
                  {
                    replace: !0,
                    method: "post"
                  }
                ),
                children: "Publish"
              }, void 0, !1, {
                fileName: "app/routes/__app/order-history.tsx",
                lineNumber: 384,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/order-history.tsx",
              lineNumber: 383,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/order-history.tsx",
          lineNumber: 372,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/order-history.tsx",
        lineNumber: 362,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/order-history.tsx",
    lineNumber: 180,
    columnNumber: 3
  }, this);
}

// app/routes/__app/items.$slug.tsx
var items_slug_exports = {};
__export(items_slug_exports, {
  default: () => Item,
  loader: () => loader7
});
var import_core9 = require("@mantine/core"), import_node11 = require("@remix-run/node"), import_react12 = require("@remix-run/react");
var React4 = __toESM(require("react")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader7 = async ({ params }) => {
  let { slug } = params;
  if (!slug)
    throw new Response("No slug provided", { status: 404 });
  return (0, import_node11.json)({ slug });
};
function Item() {
  let { slug } = (0, import_react12.useLoaderData)();
  return useItem(slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex flex-col gap-4 p-4",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ItemOverview, {}, void 0, !1, {
        fileName: "app/routes/__app/items.$slug.tsx",
        lineNumber: 32,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/items.$slug.tsx",
      lineNumber: 31,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/items.$slug.tsx",
    lineNumber: 30,
    columnNumber: 3
  }, this) : null;
}
function ItemOverview() {
  let { slug } = (0, import_react12.useLoaderData)(), item = useItem(slug), { addItemToCart } = useCart(), [quantity, setQuantity] = React4.useState(1);
  return console.log({ quantity }), item ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-white",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-12 lg:px-8",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "sm:mt-10 lg:row-span-2 lg:mt-0 lg:self-center",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "overflow-hidden rounded-lg shadow",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
              src: item.image,
              alt: item.name,
              className: "aspect-square w-full object-cover"
            }, void 0, !1, {
              fileName: "app/routes/__app/items.$slug.tsx",
              lineNumber: 58,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/items.$slug.tsx",
            lineNumber: 57,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/items.$slug.tsx",
          lineNumber: 56,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "lg:col-start-2 lg:max-w-lg lg:self-end",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-4",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                className: "text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",
                children: item.name
              }, void 0, !1, {
                fileName: "app/routes/__app/items.$slug.tsx",
                lineNumber: 69,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/items.$slug.tsx",
              lineNumber: 68,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
              "aria-labelledby": "information-heading",
              className: "mt-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                  id: "information-heading",
                  className: "sr-only",
                  children: "Cuisine information"
                }, void 0, !1, {
                  fileName: "app/routes/__app/items.$slug.tsx",
                  lineNumber: 75,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                  className: "text-lg text-gray-900 sm:text-xl",
                  children: [
                    "$",
                    item.price
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/items.$slug.tsx",
                  lineNumber: 79,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-4 space-y-6",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "text-base text-gray-500",
                    children: item.description
                  }, void 0, !1, {
                    fileName: "app/routes/__app/items.$slug.tsx",
                    lineNumber: 82,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/items.$slug.tsx",
                  lineNumber: 81,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/items.$slug.tsx",
              lineNumber: 74,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.NumberInput, {
              label: "Quantity",
              className: "mt-8",
              placeholder: "Choose quantity.",
              description: "Default quantity is 1",
              value: quantity,
              onChange: (qty) => {
                !qty || qty < 1 ? setQuantity(1) : setQuantity(qty);
              },
              error: quantity === void 0 || quantity < 1 ? !0 : void 0,
              min: 1
            }, void 0, !1, {
              fileName: "app/routes/__app/items.$slug.tsx",
              lineNumber: 86,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/items.$slug.tsx",
          lineNumber: 67,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-10 lg:col-start-2 lg:row-start-2 lg:max-w-lg lg:self-start",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core9.Button, {
            fullWidth: !0,
            mt: "2.5rem",
            onClick: () => addItemToCart({
              ...item,
              quantity
            }),
            children: "Add to cart"
          }, void 0, !1, {
            fileName: "app/routes/__app/items.$slug.tsx",
            lineNumber: 106,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/items.$slug.tsx",
          lineNumber: 105,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/items.$slug.tsx",
      lineNumber: 54,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/items.$slug.tsx",
    lineNumber: 53,
    columnNumber: 3
  }, this) : null;
}

// app/routes/__app/restaurants.tsx
var restaurants_exports = {};
__export(restaurants_exports, {
  default: () => Restaurants
});
var import_core10 = require("@mantine/core"), import_react13 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Restaurants() {
  let { foodTrucks: restaurants } = useAppData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-4 p-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "bg-white",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-16 px-4 sm:py-20 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-2xl font-extrabold tracking-tight text-gray-900",
              children: "Food Trucks"
            }, void 0, !1, {
              fileName: "app/routes/__app/restaurants.tsx",
              lineNumber: 14,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8",
              children: restaurants.map((restaurant) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mx-auto sm:mx-[unset]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "aspect-square h-48 overflow-hidden rounded-md bg-gray-200 shadow lg:h-64",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: restaurant.image,
                      alt: restaurant.name,
                      className: "h-full w-full object-cover object-center"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/restaurants.tsx",
                      lineNumber: 23,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/restaurants.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                    className: "mt-4 text-sm text-gray-700",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core10.Anchor, {
                      to: restaurant.slug,
                      prefetch: "intent",
                      component: import_react13.Link,
                      children: restaurant.name
                    }, void 0, !1, {
                      fileName: "app/routes/__app/restaurants.tsx",
                      lineNumber: 31,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/restaurants.tsx",
                    lineNumber: 30,
                    columnNumber: 11
                  }, this)
                ]
              }, restaurant.id, !0, {
                fileName: "app/routes/__app/restaurants.tsx",
                lineNumber: 21,
                columnNumber: 10
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/__app/restaurants.tsx",
              lineNumber: 18,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/restaurants.tsx",
          lineNumber: 13,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/restaurants.tsx",
        lineNumber: 12,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/restaurants.tsx",
      lineNumber: 11,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/restaurants.tsx",
    lineNumber: 10,
    columnNumber: 3
  }, this);
}

// app/routes/__app/index.tsx
var app_exports2 = {};
__export(app_exports2, {
  default: () => Dashboard
});
var import_core11 = require("@mantine/core"), import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Dashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-4 p-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RestaurantList, {}, void 0, !1, {
      fileName: "app/routes/__app/index.tsx",
      lineNumber: 10,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/index.tsx",
    lineNumber: 9,
    columnNumber: 3
  }, this);
}
function RestaurantList() {
  let { foodTrucks } = useAppData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "bg-white",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "py-16 px-4 sm:py-20 sm:px-6 lg:px-8",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "md:flex md:items-center md:justify-between",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "mb-8 text-2xl font-extrabold tracking-tight text-gray-900",
              children: "Food trucks"
            }, void 0, !1, {
              fileName: "app/routes/__app/index.tsx",
              lineNumber: 23,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/index.tsx",
            lineNumber: 22,
            columnNumber: 6
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-6 md:gap-y-0",
            children: foodTrucks.map((ft) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "group relative mx-auto sm:mx-[unset]",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "overflow-hidden rounded-md group-hover:opacity-75",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react14.Link, {
                    to: `/restaurants/${ft.slug}`,
                    prefetch: "intent",
                    className: "overflow-hidden rounded-lg group-hover:opacity-75",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: ft.image,
                      alt: ft.name,
                      className: "aspect-square h-28 w-28  rounded-md object-cover object-center"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/index.tsx",
                      lineNumber: 41,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/index.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/index.tsx",
                  lineNumber: 35,
                  columnNumber: 10
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                  className: "mt-4 mb-2 text-base text-gray-700",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core11.Anchor, {
                    to: `/restaurants/${ft.slug}`,
                    prefetch: "intent",
                    component: import_react14.Link,
                    children: ft.name
                  }, void 0, !1, {
                    fileName: "app/routes/__app/index.tsx",
                    lineNumber: 50,
                    columnNumber: 11
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/index.tsx",
                  lineNumber: 49,
                  columnNumber: 10
                }, this),
                ft.schedule.map((schedule, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-sm",
                      children: schedule.day
                    }, void 0, !1, {
                      fileName: "app/routes/__app/index.tsx",
                      lineNumber: 61,
                      columnNumber: 12
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-sm text-gray-500",
                      children: [
                        formatTime(schedule.startTime),
                        " -",
                        " ",
                        formatTime(schedule.endTime)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__app/index.tsx",
                      lineNumber: 62,
                      columnNumber: 12
                    }, this)
                  ]
                }, index, !0, {
                  fileName: "app/routes/__app/index.tsx",
                  lineNumber: 60,
                  columnNumber: 11
                }, this))
              ]
            }, ft.id, !0, {
              fileName: "app/routes/__app/index.tsx",
              lineNumber: 31,
              columnNumber: 9
            }, this))
          }, void 0, !1, {
            fileName: "app/routes/__app/index.tsx",
            lineNumber: 28,
            columnNumber: 6
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/__app/index.tsx",
        lineNumber: 21,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/index.tsx",
      lineNumber: 20,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/index.tsx",
    lineNumber: 19,
    columnNumber: 3
  }, this);
}

// app/routes/__app/items.tsx
var items_exports = {};
__export(items_exports, {
  default: () => Restaurants2
});
var import_core12 = require("@mantine/core"), import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function Restaurants2() {
  let { items } = useAppData(), { addItemToCart } = useCart();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-4 p-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "bg-white",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-16 px-4 sm:py-20 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-2xl font-extrabold tracking-tight text-gray-900",
              children: "Cuisines"
            }, void 0, !1, {
              fileName: "app/routes/__app/items.tsx",
              lineNumber: 16,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-8",
              children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mx-auto sm:mx-[unset]",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "h-48 overflow-hidden rounded-md bg-gray-200 shadow lg:h-64",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                      src: item.image,
                      alt: item.name,
                      className: "h-full w-full object-cover object-center"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/items.tsx",
                      lineNumber: 25,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/items.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
                    className: "mt-4 text-sm text-gray-700",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core12.Anchor, {
                      to: item.slug,
                      prefetch: "intent",
                      component: import_react15.Link,
                      children: item.name
                    }, void 0, !1, {
                      fileName: "app/routes/__app/items.tsx",
                      lineNumber: 33,
                      columnNumber: 12
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/items.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "mt-1 text-sm font-medium text-gray-900",
                    children: [
                      "$",
                      item.price
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/items.tsx",
                    lineNumber: 38,
                    columnNumber: 11
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core12.Button, {
                    variant: "light",
                    fullWidth: !0,
                    type: "submit",
                    mt: "md",
                    onClick: () => addItemToCart({
                      ...item,
                      quantity: 1
                    }),
                    children: "Add to cart"
                  }, void 0, !1, {
                    fileName: "app/routes/__app/items.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                  }, this)
                ]
              }, item.id, !0, {
                fileName: "app/routes/__app/items.tsx",
                lineNumber: 23,
                columnNumber: 10
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/__app/items.tsx",
              lineNumber: 20,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/items.tsx",
          lineNumber: 15,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/items.tsx",
        lineNumber: 14,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/__app/items.tsx",
      lineNumber: 13,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/items.tsx",
    lineNumber: 12,
    columnNumber: 3
  }, this);
}

// app/routes/__app/cart.tsx
var cart_exports = {};
__export(cart_exports, {
  action: () => action7,
  default: () => Cart
});
var import_solid3 = require("@heroicons/react/24/solid"), import_core13 = require("@mantine/core"), import_dates = require("@mantine/dates"), import_notifications3 = require("@mantine/notifications"), import_client7 = require("@prisma/client"), import_node12 = require("@remix-run/node"), import_react16 = require("@remix-run/react"), React5 = __toESM(require("react")), import_react_input_mask = __toESM(require("react-input-mask"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
async function action7({ request }) {
  var _a, _b, _c, _d, _e, _f;
  let formData = await request.formData(), userId = await requireUserId(request), intent = (_a = formData.get("intent")) == null ? void 0 : _a.toString();
  if (!userId || !intent)
    return (0, import_node12.json)({ success: !1, message: "Unauthorized" }, { status: 401 });
  switch (intent) {
    case "place-order": {
      let stringifiedProducts = (_b = formData.get("products[]")) == null ? void 0 : _b.toString(), amount = (_c = formData.get("amount")) == null ? void 0 : _c.toString(), orderType = (_d = formData.get("orderType")) == null ? void 0 : _d.toString(), paymentMethod = (_e = formData.get("paymentMethod")) == null ? void 0 : _e.toString(), pickupDateTime = (_f = formData.get("pickupTime")) == null ? void 0 : _f.toString();
      if (!stringifiedProducts || !amount || !paymentMethod || !orderType)
        return badRequest({
          success: !1,
          message: "Invalid request body"
        });
      if (orderType === import_client7.OrderType.PICKUP && !pickupDateTime)
        return badRequest({
          success: !1,
          message: "Pickup time is required for pickup"
        });
      let products = JSON.parse(stringifiedProducts);
      return await createOrder({
        userId,
        items: products,
        amount: Number(amount),
        paymentMethod,
        orderType,
        pickupDateTime: pickupDateTime ? new Date(pickupDateTime) : null
      }), (0, import_node12.redirect)("/order-history/?success=true");
    }
  }
}
function Cart() {
  let id = React5.useId(), { foodTrucks } = useAppData(), fetcher = (0, import_react16.useFetcher)(), { clearCart, itemsInCart, totalPrice } = useCart(), { user } = useUser(), [orderType, setOrderType] = React5.useState(import_client7.OrderType.PICKUP), [paymentMethod, setPaymentMethod] = React5.useState(
    import_client7.PaymentMethod.CREDIT_CARD
  ), [pickupDate, setPickupDate] = React5.useState(
    new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1e3)
  ), [pickupTime, setPickupTime] = React5.useState(
    new Date(new Date().setHours(16, 0, 0, 0))
  ), [isPaymentModalOpen, setIsPaymentModalOpen] = React5.useState(!1), [cardNumber, setCardNumber] = React5.useState("1234567891234567"), [cardExpiry, setCardExpiry] = React5.useState(
    new Date("2026-12-31")
  ), [cardCvv, setCardCvv] = React5.useState("123"), [errors, setErrors] = React5.useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvv: ""
  }), closePaymentModal = () => setIsPaymentModalOpen(!1), showPaymentModal = () => setIsPaymentModalOpen(!0), placeOrder = () => {
    if (isCashPayment && (setErrors({
      cardNumber: "",
      cardExpiry: "",
      cardCvv: ""
    }), cardNumber.replace(/[_ ]/g, "").length !== 16 && setErrors((prevError) => ({
      ...prevError,
      cardNumber: "Card number must be 16 digits"
    })), cardExpiry || setErrors((prevError) => ({
      ...prevError,
      cardExpiry: "Card expiry is required"
    })), (!cardCvv || cardCvv.length !== 3) && setErrors((prevError) => ({
      ...prevError,
      cardCvv: "Card CVV must be 3 digits"
    })), Object.values(errors).some((error) => error !== "")))
      return;
    let pickupDateTime = pickupDate && pickupTime ? new Date(
      pickupDate.setHours(
        pickupTime.getHours(),
        pickupTime.getMinutes(),
        0,
        0
      )
    ) : null;
    fetcher.submit(
      {
        "products[]": JSON.stringify(itemsInCart),
        amount: totalPrice.toString(),
        intent: "place-order",
        orderType,
        paymentMethod,
        pickupDate: (pickupDate == null ? void 0 : pickupDate.toISOString()) ?? "",
        pickupTime: (pickupDateTime == null ? void 0 : pickupDateTime.toISOString()) ?? ""
      },
      {
        method: "post",
        replace: !0
      }
    );
  }, isSubmitting = fetcher.state !== "idle";
  React5.useEffect(() => {
    if (fetcher.type === "done" && ((0, import_notifications3.cleanNotifications)(), !fetcher.data.success)) {
      (0, import_notifications3.showNotification)({
        title: "Error",
        message: fetcher.data.message,
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid3.MinusCircleIcon, {
          className: "h-7 w-7"
        }, void 0, !1, {
          fileName: "app/routes/__app/cart.tsx",
          lineNumber: 189,
          columnNumber: 11
        }, this),
        color: "red"
      });
      return;
    }
  }, [fetcher.data, fetcher.type]);
  let isFoodTruckOpen = React5.useMemo(() => {
    let currentFoodTruck = foodTrucks.find(
      (foodTruck) => {
        var _a;
        return foodTruck.id === ((_a = itemsInCart[0]) == null ? void 0 : _a.restaurantId);
      }
    );
    if (!currentFoodTruck)
      return !1;
    let selectedPickupDate = pickupDate ?? new Date(), selectedPickupTime = pickupTime ?? new Date(), pickupDay = selectedPickupDate.getDay(), pickupDateTime = new Date(
      selectedPickupDate.getFullYear(),
      selectedPickupDate.getMonth(),
      selectedPickupDate.getDate(),
      selectedPickupTime.getHours(),
      selectedPickupTime.getMinutes()
    );
    return currentFoodTruck.schedule.some(({ day, startTime, endTime }) => {
      let foodTruckDayNumber = daysOfWeek.indexOf(day), foodTruckOpenTime = new Date(
        selectedPickupDate.getFullYear(),
        selectedPickupDate.getMonth(),
        selectedPickupDate.getDate(),
        new Date(startTime).getHours(),
        new Date(startTime).getMinutes()
      ), foodTruckCloseTime = new Date(
        selectedPickupDate.getFullYear(),
        selectedPickupDate.getMonth(),
        selectedPickupDate.getDate(),
        new Date(endTime).getHours(),
        new Date(endTime).getMinutes()
      );
      return pickupDay === foodTruckDayNumber && pickupDateTime.getTime() >= foodTruckOpenTime.getTime() && pickupDateTime.getTime() <= foodTruckCloseTime.getTime();
    });
  }, [foodTrucks, itemsInCart, pickupDate, pickupTime]), isCashPayment = paymentMethod === import_client7.PaymentMethod.CASH;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex flex-col gap-4 p-4",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "bg-white",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "sm:px-4py-16 px-4 py-16 sm:py-20",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex items-center justify-between",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                          className: "text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl",
                          children: "Your cart"
                        }, void 0, !1, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 252,
                          columnNumber: 10
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                          className: "mt-2 text-sm text-gray-500",
                          children: "Products in your cart"
                        }, void 0, !1, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 255,
                          columnNumber: 10
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 251,
                      columnNumber: 9
                    }, this),
                    itemsInCart.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "space-x-2",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Button, {
                          variant: "subtle",
                          color: "red",
                          onClick: () => clearCart(),
                          disabled: isSubmitting,
                          children: "Clear cart"
                        }, void 0, !1, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 262,
                          columnNumber: 11
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Button, {
                          variant: "light",
                          loading: isSubmitting,
                          onClick: () => showPaymentModal(),
                          children: "Make payment"
                        }, void 0, !1, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 271,
                          columnNumber: 11
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 261,
                      columnNumber: 10
                    }, this) : null
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 250,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "mt-16",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                      className: "sr-only",
                      children: "Current ice-creams in cart"
                    }, void 0, !1, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 283,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex flex-col gap-12",
                      children: itemsInCart.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CartItems, {}, void 0, !1, {
                        fileName: "app/routes/__app/cart.tsx",
                        lineNumber: 286,
                        columnNumber: 36
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EmptyState2, {}, void 0, !1, {
                        fileName: "app/routes/__app/cart.tsx",
                        lineNumber: 286,
                        columnNumber: 52
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 285,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 282,
                  columnNumber: 8
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 249,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/__app/cart.tsx",
            lineNumber: 248,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/cart.tsx",
          lineNumber: 247,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/cart.tsx",
        lineNumber: 246,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Drawer, {
        opened: !!user && isPaymentModalOpen,
        onClose: closePaymentModal,
        title: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
          className: "mt-4 px-10",
          children: "Payment"
        }, void 0, !1, {
          fileName: "app/routes/__app/cart.tsx",
          lineNumber: 297,
          columnNumber: 12
        }, this),
        position: "right",
        overlayBlur: 1,
        size: "auto",
        overlayOpacity: 0.7,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "flex flex-col gap-4 px-6",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "flex flex-col gap-2",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
                className: "text-sm text-gray-600",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    className: "font-semibold",
                    children: "Amount: "
                  }, void 0, !1, {
                    fileName: "app/routes/__app/cart.tsx",
                    lineNumber: 306,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    children: [
                      "$",
                      totalPrice
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/cart.tsx",
                    lineNumber: 307,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/__app/cart.tsx",
                lineNumber: 305,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 304,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Select, {
              label: "Order type",
              value: orderType,
              clearable: !1,
              onChange: (e) => setOrderType(e),
              data: Object.values(import_client7.OrderType).map((type) => ({
                label: titleCase(type.replace(/_/g, " ")),
                value: type
              }))
            }, void 0, !1, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 311,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Select, {
              label: "Payment method",
              value: paymentMethod,
              clearable: !1,
              onChange: (e) => setPaymentMethod(e),
              data: Object.values(import_client7.PaymentMethod).map((method) => ({
                label: titleCase(method.replace(/_/g, " ")),
                value: method
              }))
            }, void 0, !1, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 322,
              columnNumber: 6
            }, this),
            !isCashPayment && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Input.Wrapper, {
                  id,
                  label: "Credit card number",
                  required: !0,
                  error: errors.cardNumber,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Input, {
                    id,
                    component: import_react_input_mask.default,
                    mask: "9999 9999 9999 9999",
                    placeholder: "XXXX XXXX XXXX XXXX",
                    alwaysShowMask: !1,
                    value: cardNumber,
                    onChange: (e) => setCardNumber(e.target.value)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/cart.tsx",
                    lineNumber: 341,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 335,
                  columnNumber: 8
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "flex items-center gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Input.Wrapper, {
                      id: id + "cvv",
                      label: "CVV",
                      required: !0,
                      error: errors.cardCvv,
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Input, {
                        id: id + "cvv",
                        name: "cvv",
                        component: import_react_input_mask.default,
                        mask: "999",
                        placeholder: "XXX",
                        alwaysShowMask: !1,
                        value: cardCvv,
                        onChange: (e) => setCardCvv(e.target.value)
                      }, void 0, !1, {
                        fileName: "app/routes/__app/cart.tsx",
                        lineNumber: 358,
                        columnNumber: 10
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 352,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_dates.DatePicker, {
                      name: "expiryDate",
                      label: "Expiry",
                      inputFormat: "MM/YYYY",
                      clearable: !1,
                      placeholder: "MM/YYYY",
                      labelFormat: "MM/YYYY",
                      required: !0,
                      value: cardExpiry,
                      minDate: new Date(),
                      onChange: (e) => setCardExpiry(e),
                      error: errors.cardExpiry,
                      initialLevel: "year",
                      hideOutsideDates: !0
                    }, void 0, !1, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 369,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 351,
                  columnNumber: 8
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 334,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "grid grid-cols-2 gap-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_dates.DatePicker, {
                  label: "Pickup date",
                  clearable: !1,
                  minDate: new Date(),
                  value: pickupDate,
                  onChange: setPickupDate,
                  hideOutsideDates: !0,
                  required: !0
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 389,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_dates.TimeInput, {
                  label: "Pickup time",
                  clearable: !1,
                  format: "12",
                  value: pickupTime,
                  onChange: setPickupTime,
                  required: !0
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 398,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 388,
              columnNumber: 6
            }, this),
            isFoodTruckOpen ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                className: "text-sm text-red-500",
                children: "Food truck is currently closed for the pickup date time you've selected."
              }, void 0, !1, {
                fileName: "app/routes/__app/cart.tsx",
                lineNumber: 410,
                columnNumber: 8
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 409,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-6 flex items-center gap-4 sm:justify-end",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Button, {
                  variant: "subtle",
                  color: "red",
                  onClick: () => closePaymentModal(),
                  children: "Cancel"
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 418,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Button, {
                  variant: "filled",
                  onClick: () => placeOrder(),
                  loading: isSubmitting,
                  loaderPosition: "right",
                  disabled: !isFoodTruckOpen,
                  children: "Place order"
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 426,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 417,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/cart.tsx",
          lineNumber: 303,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/__app/cart.tsx",
        lineNumber: 294,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/cart.tsx",
    lineNumber: 245,
    columnNumber: 3
  }, this);
}
function CartItems() {
  let { itemsInCart, removeItemFromCart, totalPrice } = useCart();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
      className: "mt-4 w-full text-gray-500 sm:mt-6",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
          className: "sr-only text-left text-sm text-gray-500 sm:not-sr-only",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                scope: "col",
                className: "py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3",
                children: "Products"
              }, void 0, !1, {
                fileName: "app/routes/__app/cart.tsx",
                lineNumber: 450,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                scope: "col",
                className: "hidden py-3 pr-8 font-normal sm:table-cell",
                children: "Quantity"
              }, void 0, !1, {
                fileName: "app/routes/__app/cart.tsx",
                lineNumber: 453,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                scope: "col",
                className: "hidden py-3 pr-8 font-normal sm:table-cell",
                children: "Price"
              }, void 0, !1, {
                fileName: "app/routes/__app/cart.tsx",
                lineNumber: 459,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                scope: "col",
                className: "w-0 py-3 text-right font-normal"
              }, void 0, !1, {
                fileName: "app/routes/__app/cart.tsx",
                lineNumber: 466,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/__app/cart.tsx",
            lineNumber: 449,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/__app/cart.tsx",
          lineNumber: 448,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
          className: "divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t",
          children: [
            itemsInCart.map((item) => {
              let itemTotalPrice = item.price * item.quantity;
              return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                    className: "py-6 pr-8",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "flex items-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                          src: item.image,
                          alt: item.name,
                          className: "mr-6 h-16 w-16 rounded object-cover object-center"
                        }, void 0, !1, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 478,
                          columnNumber: 11
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "flex flex-col font-medium text-gray-900",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.Anchor, {
                              component: import_react16.Link,
                              to: `/product/${item.slug}`,
                              size: "sm",
                              children: item.name
                            }, void 0, !1, {
                              fileName: "app/routes/__app/cart.tsx",
                              lineNumber: 485,
                              columnNumber: 13
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/__app/cart.tsx",
                            lineNumber: 484,
                            columnNumber: 12
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 483,
                          columnNumber: 11
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 477,
                      columnNumber: 10
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/cart.tsx",
                    lineNumber: 476,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                    className: "hidden py-6 pr-8 sm:table-cell",
                    children: item.quantity
                  }, void 0, !1, {
                    fileName: "app/routes/__app/cart.tsx",
                    lineNumber: 497,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                    className: "hidden py-6 pr-8 font-semibold sm:table-cell",
                    children: [
                      "$",
                      itemTotalPrice.toFixed(2)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/cart.tsx",
                    lineNumber: 500,
                    columnNumber: 9
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                    className: "whitespace-nowrap py-6 text-right font-medium",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core13.ActionIcon, {
                      onClick: () => removeItemFromCart(item.id),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid3.TrashIcon, {
                        className: "h-4 w-4 text-red-500"
                      }, void 0, !1, {
                        fileName: "app/routes/__app/cart.tsx",
                        lineNumber: 505,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 504,
                      columnNumber: 10
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/cart.tsx",
                    lineNumber: 503,
                    columnNumber: 9
                  }, this)
                ]
              }, item.id, !0, {
                fileName: "app/routes/__app/cart.tsx",
                lineNumber: 475,
                columnNumber: 8
              }, this);
            }),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                  className: "py-6 pr-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "flex items-center",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "font-medium text-gray-900"
                        }, void 0, !1, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 516,
                          columnNumber: 10
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                          className: "mt-1 sm:hidden"
                        }, void 0, !1, {
                          fileName: "app/routes/__app/cart.tsx",
                          lineNumber: 517,
                          columnNumber: 10
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/__app/cart.tsx",
                      lineNumber: 515,
                      columnNumber: 9
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/__app/cart.tsx",
                    lineNumber: 514,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 513,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                  className: "hidden py-6 pr-8 sm:table-cell"
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 522,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                  className: "hidden py-6 pr-8 font-semibold sm:table-cell",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                    children: [
                      "$",
                      totalPrice.toFixed(2)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/__app/cart.tsx",
                    lineNumber: 524,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/__app/cart.tsx",
                  lineNumber: 523,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/__app/cart.tsx",
              lineNumber: 512,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/__app/cart.tsx",
          lineNumber: 470,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/__app/cart.tsx",
      lineNumber: 447,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/__app/cart.tsx",
    lineNumber: 446,
    columnNumber: 3
  }, this);
}
function EmptyState2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid3.ShoppingCartIcon, {
        className: "mx-auto h-9 w-9 text-gray-500"
      }, void 0, !1, {
        fileName: "app/routes/__app/cart.tsx",
        lineNumber: 536,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "mt-4 block text-sm font-medium text-gray-500",
        children: "Your cart is empty"
      }, void 0, !1, {
        fileName: "app/routes/__app/cart.tsx",
        lineNumber: 537,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/__app/cart.tsx",
    lineNumber: 535,
    columnNumber: 3
  }, this);
}

// app/routes/admin.tsx
var admin_exports = {};
__export(admin_exports, {
  default: () => AppLayout2,
  loader: () => loader8
});
var import_solid4 = require("@heroicons/react/24/solid"), import_core14 = require("@mantine/core"), import_node13 = require("@remix-run/node"), import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader8 = async ({ request }) => (await requireUser(request), await isCustomer(request) ? (0, import_node13.redirect)("/") : await isStaff(request) ? (0, import_node13.redirect)("/staff") : (0, import_node13.json)({}));
function AppLayout2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      className: "flex h-full flex-col",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderComponent2, {}, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 33,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.ScrollArea, {
          classNames: { root: "flex-1 bg-gray-100" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Outlet, {}, void 0, !1, {
              fileName: "app/routes/admin.tsx",
              lineNumber: 36,
              columnNumber: 7
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 35,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 34,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterComponent2, {}, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 40,
          columnNumber: 5
        }, this)
      ]
    }, void 0, !0, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 32,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 31,
    columnNumber: 3
  }, this);
}
function HeaderComponent2() {
  let location = (0, import_react17.useLocation)(), { user } = useOptionalUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react17.Form, {
        replace: !0,
        action: "/api/auth/logout",
        method: "post",
        id: "logout-form"
      }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 52,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: "max-h-16 bg-gray-900",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-full w-full items-center justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-shrink-0 items-center gap-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Anchor, {
                  component: import_react17.Link,
                  to: "/",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "h-16 object-cover object-center",
                    src: appConfig_default.logo,
                    alt: "Logo"
                  }, void 0, !1, {
                    fileName: "app/routes/admin.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/admin.tsx",
                  lineNumber: 57,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 56,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Menu, {
                  position: "bottom-start",
                  withArrow: !0,
                  transition: "pop-top-right",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Menu.Target, {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Avatar, {
                          color: "blue",
                          size: "md",
                          children: [
                            user.firstName.charAt(0),
                            user.lastName.charAt(0)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/admin.tsx",
                          lineNumber: 75,
                          columnNumber: 12
                        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Avatar, {}, void 0, !1, {
                          fileName: "app/routes/admin.tsx",
                          lineNumber: 80,
                          columnNumber: 12
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/admin.tsx",
                        lineNumber: 73,
                        columnNumber: 10
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/admin.tsx",
                      lineNumber: 72,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Menu.Dropdown, {
                      children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Menu.Item, {
                            disabled: !0,
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "flex flex-col",
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                  children: [
                                    user.firstName,
                                    user.lastName
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/admin.tsx",
                                  lineNumber: 90,
                                  columnNumber: 14
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                  className: "mt-0.5 text-sm",
                                  children: user.email
                                }, void 0, !1, {
                                  fileName: "app/routes/admin.tsx",
                                  lineNumber: 94,
                                  columnNumber: 14
                                }, this)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/admin.tsx",
                              lineNumber: 89,
                              columnNumber: 13
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/admin.tsx",
                            lineNumber: 88,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Divider, {}, void 0, !1, {
                            fileName: "app/routes/admin.tsx",
                            lineNumber: 97,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid4.ArrowLeftOnRectangleIcon, {
                              className: "h-4 w-4"
                            }, void 0, !1, {
                              fileName: "app/routes/admin.tsx",
                              lineNumber: 100,
                              columnNumber: 19
                            }, this),
                            type: "submit",
                            form: "logout-form",
                            children: "Logout"
                          }, void 0, !1, {
                            fileName: "app/routes/admin.tsx",
                            lineNumber: 99,
                            columnNumber: 12
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/admin.tsx",
                        lineNumber: 87,
                        columnNumber: 11
                      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid4.ArrowRightOnRectangleIcon, {
                              className: "h-4 w-4"
                            }, void 0, !1, {
                              fileName: "app/routes/admin.tsx",
                              lineNumber: 110,
                              columnNumber: 19
                            }, this),
                            component: import_react17.Link,
                            to: `/login?redirectTo=${encodeURIComponent(
                              location.pathname
                            )}`,
                            children: "Login"
                          }, void 0, !1, {
                            fileName: "app/routes/admin.tsx",
                            lineNumber: 109,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core14.Menu.Item, {
                            icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid4.UserPlusIcon, {
                              className: "h-4 w-4"
                            }, void 0, !1, {
                              fileName: "app/routes/admin.tsx",
                              lineNumber: 119,
                              columnNumber: 19
                            }, this),
                            component: import_react17.Link,
                            to: `/register?redirectTo=${encodeURIComponent(
                              location.pathname
                            )}`,
                            children: "Create account"
                          }, void 0, !1, {
                            fileName: "app/routes/admin.tsx",
                            lineNumber: 118,
                            columnNumber: 12
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/admin.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/admin.tsx",
                      lineNumber: 85,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/admin.tsx",
                  lineNumber: 67,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/admin.tsx",
                lineNumber: 66,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin.tsx",
            lineNumber: 55,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin.tsx",
          lineNumber: 54,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin.tsx",
        lineNumber: 53,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 51,
    columnNumber: 3
  }, this);
}
function FooterComponent2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-gray-400"
    }, void 0, !1, {
      fileName: "app/routes/admin.tsx",
      lineNumber: 142,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/admin.tsx",
    lineNumber: 141,
    columnNumber: 3
  }, this);
}

// app/routes/admin/index.tsx
var admin_exports2 = {};
__export(admin_exports2, {
  action: () => action8,
  default: () => ManageFoodTrucks,
  loader: () => loader9
});
var import_solid5 = require("@heroicons/react/24/solid"), import_core15 = require("@mantine/core"), import_dates2 = require("@mantine/dates"), import_hooks11 = require("@mantine/hooks"), import_node14 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), import_bson = require("bson"), React6 = __toESM(require("react")), import_slugify = __toESM(require("slugify")), import_zod3 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AddFoodTruckSchema = import_zod3.z.object({
  name: import_zod3.z.string().min(1, "Name is required"),
  image: import_zod3.z.string().min(1, "Image is required"),
  description: import_zod3.z.string().min(1, "Description is required"),
  email: import_zod3.z.string().email("Please enter a valid email address"),
  password: import_zod3.z.string().min(8, "Password must be at least 8 characters")
}), loader9 = async () => {
  let foodTrucks = await prisma.foodTruck.findMany({
    include: {
      schedule: !0
    }
  });
  return (0, import_node14.json)({ foodTrucks });
}, action8 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(
    request,
    AddFoodTruckSchema
  );
  return fieldErrors ? badRequest({ success: !1, fieldErrors }) : (await prisma.foodTruck.create({
    data: {
      name: fields.name,
      image: fields.image,
      slug: (0, import_slugify.default)(fields.name, { lower: !0, strict: !0 }),
      description: fields.description,
      staff: {
        create: {
          email: fields.email,
          passwordHash: await createPasswordHash(fields.password),
          role: "STAFF",
          firstName: fields.name,
          lastName: "Owner"
        }
      }
    }
  }), (0, import_node14.json)({ success: !0 }));
};
function ManageFoodTrucks() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let fetcher = (0, import_react18.useFetcher)(), { foodTrucks } = (0, import_react18.useLoaderData)(), [isModalOpen, handleModal] = (0, import_hooks11.useDisclosure)(!1), [selectedFoodTruck, setSelectedFoodTruck] = React6.useState(null), [isScheduleModalOpen, handleScheduleModal] = (0, import_hooks11.useDisclosure)(!1, {
    onClose: () => {
      setSelectedFoodTruck(null);
    }
  }), isSubmitting = fetcher.state !== "idle";
  React6.useEffect(() => {
    var _a2;
    fetcher.state !== "idle" && fetcher.submission === void 0 || (_a2 = fetcher.data) != null && _a2.success && (handleModal.close(), handleScheduleModal.close());
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, fetcher.submission]);
  let [schedules, setSchedules] = React6.useState([]);
  React6.useEffect(() => {
    setSchedules(selectedFoodTruck ? selectedFoodTruck.schedule : []);
  }, [selectedFoodTruck]);
  let validateTimes = (startTime, endTime) => isNaN(startTime.getTime()) || isNaN(endTime.getTime()) ? !1 : startTime < endTime, updateSchedule = (day, field, value) => {
    let scheduleForDay = schedules.find((s) => s.day === day), updatedSchedule = {
      ...scheduleForDay || {
        id: new import_bson.ObjectId().toString(),
        foodTruckId: (selectedFoodTruck == null ? void 0 : selectedFoodTruck.id) || "",
        day,
        startTime: "",
        endTime: ""
      }
    };
    if (value)
      updatedSchedule[field] = value.toISOString();
    else {
      setSchedules((prev) => prev.filter((s) => s.day !== day));
      return;
    }
    if (!scheduleForDay && field === "startTime" && value) {
      let endTime = new Date(value);
      endTime.setHours(value.getHours() + 1), updatedSchedule.endTime = endTime.toISOString();
    }
    if (updatedSchedule.startTime && updatedSchedule.endTime) {
      let startTime = new Date(updatedSchedule.startTime), endTime = new Date(updatedSchedule.endTime);
      if (!validateTimes(startTime, endTime)) {
        alert("Start time should be before end time.");
        return;
      }
    }
    setSchedules((prev) => [...prev.filter((s) => s.day !== day), updatedSchedule]);
  }, validateAndSave = () => {
    if (!schedules.every((schedule) => {
      let startTime = new Date(schedule.startTime), endTime = new Date(schedule.endTime);
      return validateTimes(startTime, endTime);
    })) {
      alert(
        "Please ensure that all start and end times are valid and that start times are before their respective end times."
      );
      return;
    }
    let formData = new FormData();
    formData.append("foodTruckId", selectedFoodTruck.id), formData.append("schedules", JSON.stringify(schedules)), fetcher.submit(formData, {
      method: "post",
      replace: !0,
      action: "/api/food-trucks/schedule"
    });
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        className: "rounded-md",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-8 px-4 py-10 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "sm:flex sm:flex-auto sm:items-center sm:justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "text-lg font-semibold text-gray-900",
                    children: "Food Trucks"
                  }, void 0, !1, {
                    fileName: "app/routes/admin/index.tsx",
                    lineNumber: 198,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/admin/index.tsx",
                  lineNumber: 197,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Button, {
                    loading: isSubmitting,
                    loaderPosition: "left",
                    onClick: () => handleModal.open(),
                    variant: "filled",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid5.PlusIcon, {
                        className: "h-4 w-4"
                      }, void 0, !1, {
                        fileName: "app/routes/admin/index.tsx",
                        lineNumber: 209,
                        columnNumber: 9
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "ml-2",
                        children: "Add"
                      }, void 0, !1, {
                        fileName: "app/routes/admin/index.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/admin/index.tsx",
                    lineNumber: 203,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/admin/index.tsx",
                  lineNumber: 202,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 196,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-8 flex flex-col",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                    className: "min-w-full divide-y divide-gray-300",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
                              children: "Name"
                            }, void 0, !1, {
                              fileName: "app/routes/admin/index.tsx",
                              lineNumber: 220,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:table-cell",
                              children: "Schedule"
                            }, void 0, !1, {
                              fileName: "app/routes/admin/index.tsx",
                              lineNumber: 227,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                            }, void 0, !1, {
                              fileName: "app/routes/admin/index.tsx",
                              lineNumber: 233,
                              columnNumber: 12
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/admin/index.tsx",
                          lineNumber: 219,
                          columnNumber: 11
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/admin/index.tsx",
                        lineNumber: 218,
                        columnNumber: 10
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                        className: "divide-y divide-gray-200",
                        children: foodTrucks.map((ft) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                                    src: ft.image,
                                    alt: ft.image,
                                    className: "h-8 w-8 rounded-full border object-cover shadow-md"
                                  }, void 0, !1, {
                                    fileName: "app/routes/admin/index.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                    children: ft.name
                                  }, void 0, !1, {
                                    fileName: "app/routes/admin/index.tsx",
                                    lineNumber: 249,
                                    columnNumber: 15
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/admin/index.tsx",
                                lineNumber: 243,
                                columnNumber: 14
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/admin/index.tsx",
                              lineNumber: 242,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: ft.schedule.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "flex flex-col gap-1",
                                children: ft.schedule.map((s) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                  className: "flex items-center gap-2",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                      className: "text-sm font-semibold text-gray-900",
                                      children: [
                                        s.day,
                                        ":",
                                        " "
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/admin/index.tsx",
                                      lineNumber: 260,
                                      columnNumber: 18
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                      className: "text-sm font-medium text-gray-900",
                                      children: [
                                        formatTime(s.startTime),
                                        " -",
                                        " ",
                                        formatTime(s.endTime)
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/admin/index.tsx",
                                      lineNumber: 263,
                                      columnNumber: 18
                                    }, this)
                                  ]
                                }, s.id, !0, {
                                  fileName: "app/routes/admin/index.tsx",
                                  lineNumber: 256,
                                  columnNumber: 17
                                }, this))
                              }, void 0, !1, {
                                fileName: "app/routes/admin/index.tsx",
                                lineNumber: 254,
                                columnNumber: 15
                              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                                className: "text-sm font-medium text-gray-900",
                                children: "No schedule"
                              }, void 0, !1, {
                                fileName: "app/routes/admin/index.tsx",
                                lineNumber: 271,
                                columnNumber: 15
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/admin/index.tsx",
                              lineNumber: 252,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Button, {
                                variant: "subtle",
                                onClick: () => {
                                  setSelectedFoodTruck(ft), handleScheduleModal.open();
                                },
                                children: "Edit Schedule"
                              }, void 0, !1, {
                                fileName: "app/routes/admin/index.tsx",
                                lineNumber: 277,
                                columnNumber: 14
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/admin/index.tsx",
                              lineNumber: 276,
                              columnNumber: 13
                            }, this)
                          ]
                        }, ft.id, !0, {
                          fileName: "app/routes/admin/index.tsx",
                          lineNumber: 241,
                          columnNumber: 12
                        }, this))
                      }, void 0, !1, {
                        fileName: "app/routes/admin/index.tsx",
                        lineNumber: 239,
                        columnNumber: 10
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/admin/index.tsx",
                    lineNumber: 217,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/admin/index.tsx",
                  lineNumber: 216,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 215,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/admin/index.tsx",
              lineNumber: 214,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 195,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 194,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Modal, {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: "Add Food Truck",
        centered: !0,
        overlayBlur: 1.2,
        overlayOpacity: 0.6,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
            disabled: isSubmitting,
            className: "flex flex-col gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.TextInput, {
                name: "name",
                label: "Name",
                error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.name,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 307,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.TextInput, {
                name: "image",
                type: "url",
                label: "Image",
                error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.image,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 314,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Textarea, {
                name: "description",
                label: "Description",
                error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.description,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 322,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.TextInput, {
                name: "email",
                label: "Email",
                type: "email",
                error: (_i = (_h = fetcher.data) == null ? void 0 : _h.fieldErrors) == null ? void 0 : _i.email,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 329,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.PasswordInput, {
                name: "password",
                label: "Password",
                error: (_k = (_j = fetcher.data) == null ? void 0 : _j.fieldErrors) == null ? void 0 : _k.password,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 337,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-1 flex items-center justify-end gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Button, {
                    variant: "subtle",
                    disabled: isSubmitting,
                    onClick: () => handleModal.close(),
                    color: "red",
                    children: "Cancel"
                  }, void 0, !1, {
                    fileName: "app/routes/admin/index.tsx",
                    lineNumber: 345,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Button, {
                    type: "submit",
                    loading: isSubmitting,
                    loaderPosition: "right",
                    children: "Create"
                  }, void 0, !1, {
                    fileName: "app/routes/admin/index.tsx",
                    lineNumber: 353,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 344,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 306,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 305,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 297,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Modal, {
        opened: isScheduleModalOpen,
        onClose: () => handleScheduleModal.close(),
        title: "Edit Schedule",
        centered: !0,
        overlayBlur: 1.2,
        overlayOpacity: 0.6,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex flex-col gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                hidden: !0
              }, void 0, !1, {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 375,
                columnNumber: 7
              }, this),
              daysOfWeek.map((day) => {
                let scheduleForDay = schedules.find((s) => s.day === day);
                return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "grid grid-cols-3 items-center gap-4",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "text-sm text-gray-900",
                      children: day
                    }, void 0, !1, {
                      fileName: "app/routes/admin/index.tsx",
                      lineNumber: 381,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_dates2.TimeInput, {
                      format: "12",
                      name: `schedule.${day}.startTime`,
                      label: "Start Time",
                      size: "xs",
                      clearable: !0,
                      required: !0,
                      value: scheduleForDay && new Date(scheduleForDay == null ? void 0 : scheduleForDay.startTime),
                      onChange: (value) => {
                        scheduleForDay || value.setHours(value.getHours() + 1), updateSchedule(day, "startTime", value);
                      }
                    }, void 0, !1, {
                      fileName: "app/routes/admin/index.tsx",
                      lineNumber: 382,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_dates2.TimeInput, {
                      name: `schedule.${day}.endTime`,
                      label: "End Time",
                      size: "xs",
                      clearable: !0,
                      required: !0,
                      value: scheduleForDay && new Date(scheduleForDay == null ? void 0 : scheduleForDay.endTime),
                      onChange: (value) => {
                        if (!scheduleForDay) {
                          alert(
                            "Please set a start time before setting the end time."
                          );
                          return;
                        }
                        updateSchedule(day, "endTime", value);
                      }
                    }, void 0, !1, {
                      fileName: "app/routes/admin/index.tsx",
                      lineNumber: 399,
                      columnNumber: 10
                    }, this)
                  ]
                }, day, !0, {
                  fileName: "app/routes/admin/index.tsx",
                  lineNumber: 380,
                  columnNumber: 9
                }, this);
              }),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-1 flex items-center justify-end gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Button, {
                    variant: "subtle",
                    disabled: isSubmitting,
                    onClick: () => handleScheduleModal.close(),
                    color: "red",
                    children: "Cancel"
                  }, void 0, !1, {
                    fileName: "app/routes/admin/index.tsx",
                    lineNumber: 422,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core15.Button, {
                    loading: isSubmitting,
                    loaderPosition: "right",
                    onClick: validateAndSave,
                    children: "Save"
                  }, void 0, !1, {
                    fileName: "app/routes/admin/index.tsx",
                    lineNumber: 430,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/admin/index.tsx",
                lineNumber: 421,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/admin/index.tsx",
            lineNumber: 374,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/admin/index.tsx",
          lineNumber: 373,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/admin/index.tsx",
        lineNumber: 365,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/admin/index.tsx",
    lineNumber: 193,
    columnNumber: 3
  }, this);
}

// app/routes/staff.tsx
var staff_exports = {};
__export(staff_exports, {
  default: () => AppLayout3,
  loader: () => loader10
});
var import_solid6 = require("@heroicons/react/24/solid"), import_core16 = require("@mantine/core"), import_hooks12 = require("@mantine/hooks"), import_node15 = require("@remix-run/node"), import_react19 = require("@remix-run/react");
var React7 = __toESM(require("react")), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader10 = async ({ request }) => {
  let user = await requireUser(request);
  if (await isCustomer(request))
    return (0, import_node15.redirect)("/");
  if (await isAdmin(request))
    return (0, import_node15.redirect)("/admin");
  let hasResetPassword = user.hasResetPassword;
  return (0, import_node15.json)({ hasResetPassword });
};
function AppLayout3() {
  let { user } = useUser(), fetcher = (0, import_react19.useFetcher)(), { hasResetPassword } = (0, import_react19.useLoaderData)(), [isModalOpen, handleModal] = (0, import_hooks12.useDisclosure)(!hasResetPassword), isSubmitting = fetcher.state !== "idle";
  return React7.useEffect(() => {
    fetcher.type === "done" && (!fetcher.data.success || handleModal.close());
  }, [fetcher.data, fetcher.type, handleModal]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        className: "flex h-full flex-col",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeaderComponent3, {}, void 0, !1, {
            fileName: "app/routes/staff.tsx",
            lineNumber: 60,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.ScrollArea, {
            classNames: { root: "flex-1 bg-gray-100" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react19.Outlet, {}, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 63,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/staff.tsx",
              lineNumber: 62,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/staff.tsx",
            lineNumber: 61,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FooterComponent3, {}, void 0, !1, {
            fileName: "app/routes/staff.tsx",
            lineNumber: 67,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/staff.tsx",
        lineNumber: 59,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Drawer, {
        opened: isModalOpen,
        onClose: handleModal.close,
        title: "Rest Password",
        padding: "md",
        size: "lg",
        overlayBlur: 1,
        overlayOpacity: 0.5,
        withCloseButton: !hasResetPassword,
        closeOnEscape: !hasResetPassword,
        closeOnClickOutside: !hasResetPassword,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          className: "flex flex-col gap-4",
          action: "/api/reset-password",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "mt-6 grid grid-cols-2 gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                hidden: !0,
                name: "userId",
                defaultValue: user.id
              }, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 89,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.TextInput, {
                required: !0,
                name: "password",
                type: "password",
                placeholder: "Password"
              }, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 90,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Button, {
                variant: "filled",
                type: "submit",
                fullWidth: !0,
                loading: isSubmitting,
                loaderPosition: "right",
                children: "Update"
              }, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 97,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/staff.tsx",
            lineNumber: 88,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff.tsx",
          lineNumber: 82,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff.tsx",
        lineNumber: 70,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/staff.tsx",
    lineNumber: 58,
    columnNumber: 3
  }, this);
}
function HeaderComponent3() {
  let { user } = useUser();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react19.Form, {
        replace: !0,
        action: "/api/auth/logout",
        method: "post",
        id: "logout-form"
      }, void 0, !1, {
        fileName: "app/routes/staff.tsx",
        lineNumber: 118,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
        className: "max-h-16 bg-gray-900",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
            className: "flex h-full w-full items-center justify-between",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex flex-shrink-0 items-center gap-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Anchor, {
                  component: import_react19.Link,
                  to: "/",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                    className: "h-16 object-cover object-center",
                    src: appConfig_default.logo,
                    alt: "Logo"
                  }, void 0, !1, {
                    fileName: "app/routes/staff.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/staff.tsx",
                  lineNumber: 123,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 122,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "flex items-center gap-4",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Menu, {
                  position: "bottom-start",
                  withArrow: !0,
                  transition: "pop-top-right",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Menu.Target, {
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
                        children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Avatar, {
                          color: "blue",
                          size: "md",
                          children: [
                            user.firstName.charAt(0),
                            user.lastName.charAt(0)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/staff.tsx",
                          lineNumber: 141,
                          columnNumber: 12
                        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Avatar, {}, void 0, !1, {
                          fileName: "app/routes/staff.tsx",
                          lineNumber: 146,
                          columnNumber: 12
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/staff.tsx",
                        lineNumber: 139,
                        columnNumber: 10
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/staff.tsx",
                      lineNumber: 138,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Menu.Dropdown, {
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Menu.Item, {
                          disabled: !0,
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "flex flex-col",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                children: [
                                  user.firstName,
                                  user.lastName
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/staff.tsx",
                                lineNumber: 154,
                                columnNumber: 12
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                className: "mt-0.5 text-sm",
                                children: user.email
                              }, void 0, !1, {
                                fileName: "app/routes/staff.tsx",
                                lineNumber: 158,
                                columnNumber: 12
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/staff.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/staff.tsx",
                          lineNumber: 152,
                          columnNumber: 10
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Divider, {}, void 0, !1, {
                          fileName: "app/routes/staff.tsx",
                          lineNumber: 161,
                          columnNumber: 10
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core16.Menu.Item, {
                          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid6.ArrowLeftOnRectangleIcon, {
                            className: "h-4 w-4"
                          }, void 0, !1, {
                            fileName: "app/routes/staff.tsx",
                            lineNumber: 164,
                            columnNumber: 17
                          }, this),
                          type: "submit",
                          form: "logout-form",
                          children: "Logout"
                        }, void 0, !1, {
                          fileName: "app/routes/staff.tsx",
                          lineNumber: 163,
                          columnNumber: 10
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/staff.tsx",
                      lineNumber: 151,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/staff.tsx",
                  lineNumber: 133,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/staff.tsx",
                lineNumber: 132,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/staff.tsx",
            lineNumber: 121,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff.tsx",
          lineNumber: 120,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff.tsx",
        lineNumber: 119,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/staff.tsx",
    lineNumber: 117,
    columnNumber: 3
  }, this);
}
function FooterComponent3() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
      className: "text-gray-400"
    }, void 0, !1, {
      fileName: "app/routes/staff.tsx",
      lineNumber: 183,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/staff.tsx",
    lineNumber: 182,
    columnNumber: 3
  }, this);
}

// app/routes/staff/employees.tsx
var employees_exports = {};
__export(employees_exports, {
  action: () => action9,
  default: () => ManageEmployees,
  loader: () => loader11
});
var import_solid7 = require("@heroicons/react/24/solid"), import_core17 = require("@mantine/core"), import_hooks14 = require("@mantine/hooks"), import_node16 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), React8 = __toESM(require("react")), import_zod4 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), AddEmployeeSchema = import_zod4.z.object({
  firstName: import_zod4.z.string().min(1, "First name is required"),
  lastName: import_zod4.z.string().min(1, "Last name is required"),
  email: import_zod4.z.string().min(1, "Email is required"),
  password: import_zod4.z.string().min(8, "Password must be at least 8 characters"),
  foodTruckId: import_zod4.z.string().min(1, "Food truck is required")
}), loader11 = async ({ request }) => {
  let user = await requireUser(request), employees = await prisma.user.findMany({
    where: {
      foodTruckId: user == null ? void 0 : user.foodTruckId
    }
  });
  return (0, import_node16.json)({ employees });
}, action9 = async ({ request }) => {
  let { fields, fieldErrors } = await validateAction(request, AddEmployeeSchema);
  return fieldErrors ? badRequest({ success: !1, fieldErrors }) : (await prisma.user.create({
    data: {
      firstName: fields.firstName,
      lastName: fields.lastName,
      email: fields.email,
      passwordHash: await createPasswordHash(fields.password),
      foodTruck: {
        connect: {
          id: fields.foodTruckId
        }
      }
    }
  }), (0, import_node16.json)({ success: !0 }));
};
function ManageEmployees() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let fetcher = (0, import_react20.useFetcher)(), { employees } = (0, import_react20.useLoaderData)(), { user } = useUser(), [isModalOpen, handleModal] = (0, import_hooks14.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  return React8.useEffect(() => {
    var _a2;
    fetcher.state !== "idle" && fetcher.submission === void 0 || (_a2 = fetcher.data) != null && _a2.success && handleModal.close();
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, fetcher.submission]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        className: "rounded-md",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-8 px-4 py-10 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "sm:flex sm:flex-auto sm:items-center sm:justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Button, {
                      leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid7.ArrowLeftIcon, {
                        className: "h-4 w-4"
                      }, void 0, !1, {
                        fileName: "app/routes/staff/employees.tsx",
                        lineNumber: 94,
                        columnNumber: 19
                      }, this),
                      variant: "subtle",
                      size: "sm",
                      component: import_react20.Link,
                      to: "..",
                      pl: 0,
                      mb: 20,
                      children: "Back"
                    }, void 0, !1, {
                      fileName: "app/routes/staff/employees.tsx",
                      lineNumber: 93,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      className: "text-lg font-semibold text-gray-900",
                      children: "Staff"
                    }, void 0, !1, {
                      fileName: "app/routes/staff/employees.tsx",
                      lineNumber: 104,
                      columnNumber: 8
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/staff/employees.tsx",
                  lineNumber: 92,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Button, {
                    loading: isSubmitting,
                    loaderPosition: "left",
                    onClick: () => handleModal.open(),
                    variant: "light",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid7.PlusIcon, {
                        className: "h-4 w-4"
                      }, void 0, !1, {
                        fileName: "app/routes/staff/employees.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "ml-2",
                        children: "Add"
                      }, void 0, !1, {
                        fileName: "app/routes/staff/employees.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/staff/employees.tsx",
                    lineNumber: 107,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/staff/employees.tsx",
                  lineNumber: 106,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/staff/employees.tsx",
              lineNumber: 91,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-8 flex flex-col",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                    className: "min-w-full divide-y divide-gray-300",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
                              children: "Name"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/employees.tsx",
                              lineNumber: 124,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "hidden py-3.5 px-3 text-left text-sm font-semibold text-gray-900 sm:table-cell",
                              children: "Email"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/employees.tsx",
                              lineNumber: 131,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/employees.tsx",
                              lineNumber: 137,
                              columnNumber: 12
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/staff/employees.tsx",
                          lineNumber: 123,
                          columnNumber: 11
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/staff/employees.tsx",
                        lineNumber: 122,
                        columnNumber: 10
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                        className: "divide-y divide-gray-200",
                        children: employees.map((ft) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: [
                                ft.firstName,
                                " ",
                                ft.lastName
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/staff/employees.tsx",
                              lineNumber: 146,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: ft.email
                            }, void 0, !1, {
                              fileName: "app/routes/staff/employees.tsx",
                              lineNumber: 149,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/employees.tsx",
                              lineNumber: 152,
                              columnNumber: 13
                            }, this)
                          ]
                        }, ft.id, !0, {
                          fileName: "app/routes/staff/employees.tsx",
                          lineNumber: 145,
                          columnNumber: 12
                        }, this))
                      }, void 0, !1, {
                        fileName: "app/routes/staff/employees.tsx",
                        lineNumber: 143,
                        columnNumber: 10
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/staff/employees.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/staff/employees.tsx",
                  lineNumber: 120,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/staff/employees.tsx",
                lineNumber: 119,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/staff/employees.tsx",
              lineNumber: 118,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/staff/employees.tsx",
          lineNumber: 90,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/employees.tsx",
        lineNumber: 89,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Modal, {
        opened: isModalOpen,
        onClose: () => handleModal.close(),
        title: "Add Food Truck",
        centered: !0,
        overlayBlur: 1.2,
        overlayOpacity: 0.6,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
            disabled: isSubmitting,
            className: "flex flex-col gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                hidden: !0,
                name: "foodTruckId",
                defaultValue: (user == null ? void 0 : user.foodTruckId) ?? ""
              }, void 0, !1, {
                fileName: "app/routes/staff/employees.tsx",
                lineNumber: 173,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.TextInput, {
                name: "firstName",
                label: "First Name",
                error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.firstName,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/employees.tsx",
                lineNumber: 178,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.TextInput, {
                name: "lastName",
                label: "Last Name",
                error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.lastName,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/employees.tsx",
                lineNumber: 184,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.TextInput, {
                name: "email",
                type: "email",
                label: "Email",
                error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.email,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/employees.tsx",
                lineNumber: 191,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.PasswordInput, {
                name: "password",
                label: "Password",
                error: (_i = (_h = fetcher.data) == null ? void 0 : _h.fieldErrors) == null ? void 0 : _i.password,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/employees.tsx",
                lineNumber: 199,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-1 flex items-center justify-end gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Button, {
                    variant: "subtle",
                    disabled: isSubmitting,
                    onClick: () => handleModal.close(),
                    color: "red",
                    children: "Cancel"
                  }, void 0, !1, {
                    fileName: "app/routes/staff/employees.tsx",
                    lineNumber: 207,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core17.Button, {
                    type: "submit",
                    loading: isSubmitting,
                    loaderPosition: "right",
                    children: "Create"
                  }, void 0, !1, {
                    fileName: "app/routes/staff/employees.tsx",
                    lineNumber: 215,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/staff/employees.tsx",
                lineNumber: 206,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/staff/employees.tsx",
            lineNumber: 172,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff/employees.tsx",
          lineNumber: 171,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/employees.tsx",
        lineNumber: 163,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/staff/employees.tsx",
    lineNumber: 88,
    columnNumber: 3
  }, this);
}

// app/routes/staff/orders.tsx
var orders_exports = {};
__export(orders_exports, {
  action: () => action10,
  default: () => Orders,
  loader: () => loader12
});
var import_solid8 = require("@heroicons/react/24/solid"), import_core18 = require("@mantine/core"), import_hooks16 = require("@mantine/hooks"), import_client8 = require("@prisma/client"), import_node17 = require("@remix-run/node"), import_react21 = require("@remix-run/react"), React9 = __toESM(require("react")), import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader12 = async ({ request }) => {
  await requireUser(request);
  let orders = await prisma.order.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      invoice: !0,
      items: {
        include: {
          item: !0
        }
      },
      user: !0
    }
  });
  return (0, import_node17.json)({ orders });
}, action10 = async ({ request }) => {
  var _a, _b, _c;
  let formData = await request.formData(), intent = (_a = formData.get("intent")) == null ? void 0 : _a.toString();
  (0, import_tiny_invariant2.default)(intent, "Invalid intent");
  let orderId = (_b = formData.get("orderId")) == null ? void 0 : _b.toString();
  switch ((0, import_tiny_invariant2.default)(orderId, "Invalid order id"), intent) {
    case "approve-order":
      return await prisma.order.update({
        where: { id: orderId },
        data: { status: import_client8.OrderStatus.PREPARING }
      }), (0, import_node17.json)({ success: !0 });
    case "reject-order":
      return await prisma.order.update({
        where: { id: orderId },
        data: { status: import_client8.OrderStatus.REJECTED }
      }), (0, import_node17.json)({ success: !0 });
    case "update-order-status": {
      let status = (_c = formData.get("status")) == null ? void 0 : _c.toString();
      return (0, import_tiny_invariant2.default)(status, "Invalid status"), await prisma.order.update({
        where: { id: orderId },
        data: { status }
      }), (0, import_node17.json)({ success: !0 });
    }
    default:
      return (0, import_node17.json)({ success: !1, message: "Invalid intent" }, { status: 400 });
  }
};
function Orders() {
  let { orders } = (0, import_react21.useLoaderData)(), transition = (0, import_react21.useTransition)(), submit = (0, import_react21.useSubmit)(), [items, setProducts] = React9.useState(
    []
  ), [isOpen, modalHandler] = (0, import_hooks16.useDisclosure)(!1, {
    onClose: () => setProducts([])
  }), isSubmitting = transition.state !== "idle";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        className: "mt-16",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "px-4 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "sm:flex sm:items-center",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "sm:flex-auto",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                    className: "text-xl font-semibold text-gray-900",
                    children: "Orders"
                  }, void 0, !1, {
                    fileName: "app/routes/staff/orders.tsx",
                    lineNumber: 103,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                    className: "mt-2 text-sm text-gray-700",
                    children: "A list of all the orders in your account including their user details."
                  }, void 0, !1, {
                    fileName: "app/routes/staff/orders.tsx",
                    lineNumber: 104,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/staff/orders.tsx",
                lineNumber: 102,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/staff/orders.tsx",
              lineNumber: 101,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-8 flex flex-col",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                    className: "shadow ring-1 ring-black ring-opacity-5 md:rounded-lg",
                    children: orders.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                      className: "min-w-full divide-y divide-gray-300",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                          className: "bg-gray-50",
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                            children: [
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                scope: "col",
                                className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6",
                                children: "Name"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/orders.tsx",
                                lineNumber: 118,
                                columnNumber: 14
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                scope: "col",
                                className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                children: "Type"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/orders.tsx",
                                lineNumber: 124,
                                columnNumber: 14
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                scope: "col",
                                className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                children: "Status"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/orders.tsx",
                                lineNumber: 130,
                                columnNumber: 14
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                scope: "col",
                                className: "px-3 py-3.5 text-left text-sm font-semibold text-gray-900",
                                children: "Products"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/orders.tsx",
                                lineNumber: 136,
                                columnNumber: 14
                              }, this),
                              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                                scope: "col",
                                className: "relative py-3.5 pl-3 pr-4 sm:pr-6"
                              }, void 0, !1, {
                                fileName: "app/routes/staff/orders.tsx",
                                lineNumber: 142,
                                columnNumber: 14
                              }, this)
                            ]
                          }, void 0, !0, {
                            fileName: "app/routes/staff/orders.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                          }, this)
                        }, void 0, !1, {
                          fileName: "app/routes/staff/orders.tsx",
                          lineNumber: 116,
                          columnNumber: 12
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                          className: "divide-y divide-gray-200 bg-white",
                          children: orders.map((order) => {
                            var _a, _b;
                            let isPending = order.status === import_client8.OrderStatus.PENDING, isCancelled = order.status === import_client8.OrderStatus.CANCELLED, isRejected = order.status === import_client8.OrderStatus.REJECTED, statusOptions = order.type === import_client8.OrderType.PICKUP ? ["PREPARING", "READY"] : ["PREPARING", "DELIVERED"], isOrderReady = order.status === import_client8.OrderStatus.READY, isOrderDelivered = order.status === import_client8.OrderStatus.DELIVERED;
                            return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                              children: [
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                                  className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "font-medium text-gray-900",
                                      children: [
                                        order.user.firstName,
                                        " ",
                                        order.user.lastName
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/staff/orders.tsx",
                                      lineNumber: 168,
                                      columnNumber: 17
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "text-gray-500",
                                      children: order.user.email
                                    }, void 0, !1, {
                                      fileName: "app/routes/staff/orders.tsx",
                                      lineNumber: 171,
                                      columnNumber: 17
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/staff/orders.tsx",
                                  lineNumber: 167,
                                  columnNumber: 16
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                                  className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                                  children: [
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "text-gray-900",
                                      children: titleCase(order.type)
                                    }, void 0, !1, {
                                      fileName: "app/routes/staff/orders.tsx",
                                      lineNumber: 177,
                                      columnNumber: 17
                                    }, this),
                                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                      className: "text-gray-500",
                                      children: [
                                        "(",
                                        (_a = order.invoice) != null && _a.paymentMethod ? (_b = order.invoice) == null ? void 0 : _b.paymentMethod.replace(
                                          "_",
                                          " "
                                        ) : "-",
                                        ")"
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/staff/orders.tsx",
                                      lineNumber: 180,
                                      columnNumber: 17
                                    }, this)
                                  ]
                                }, void 0, !0, {
                                  fileName: "app/routes/staff/orders.tsx",
                                  lineNumber: 176,
                                  columnNumber: 16
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                                  className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Badge, {
                                    color: isPending ? "gray" : isCancelled ? "indigo" : isRejected ? "red" : "green",
                                    children: titleCase(order.status)
                                  }, void 0, !1, {
                                    fileName: "app/routes/staff/orders.tsx",
                                    lineNumber: 192,
                                    columnNumber: 17
                                  }, this)
                                }, void 0, !1, {
                                  fileName: "app/routes/staff/orders.tsx",
                                  lineNumber: 191,
                                  columnNumber: 16
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                                  className: "whitespace-nowrap px-3 py-4 text-sm text-gray-500",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Button, {
                                    variant: "subtle",
                                    compact: !0,
                                    onClick: () => {
                                      setProducts(order.items), modalHandler.open();
                                    },
                                    children: "View all"
                                  }, void 0, !1, {
                                    fileName: "app/routes/staff/orders.tsx",
                                    lineNumber: 207,
                                    columnNumber: 17
                                  }, this)
                                }, void 0, !1, {
                                  fileName: "app/routes/staff/orders.tsx",
                                  lineNumber: 206,
                                  columnNumber: 16
                                }, this),
                                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                                  className: "relative flex items-center justify-center whitespace-nowrap py-4 pl-3 pr-4 text-sm font-medium sm:pr-6",
                                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                    className: "flex items-center gap-2",
                                    children: isPending ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
                                      children: [
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.ActionIcon, {
                                          color: "green",
                                          disabled: isSubmitting || !isPending,
                                          onClick: () => submit(
                                            {
                                              intent: "approve-order",
                                              orderId: order.id
                                            },
                                            {
                                              method: "post",
                                              replace: !0
                                            }
                                          ),
                                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid8.CheckCircleIcon, {
                                            className: "h-6"
                                          }, void 0, !1, {
                                            fileName: "app/routes/staff/orders.tsx",
                                            lineNumber: 238,
                                            columnNumber: 21
                                          }, this)
                                        }, void 0, !1, {
                                          fileName: "app/routes/staff/orders.tsx",
                                          lineNumber: 222,
                                          columnNumber: 20
                                        }, this),
                                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.ActionIcon, {
                                          color: "red",
                                          type: "submit",
                                          name: "intent",
                                          value: "reject-order",
                                          disabled: isSubmitting || !isPending,
                                          onClick: () => {
                                            submit(
                                              {
                                                intent: "reject-order",
                                                orderId: order.id
                                              },
                                              {
                                                method: "post",
                                                replace: !0
                                              }
                                            );
                                          },
                                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid8.MinusCircleIcon, {
                                            className: "h-7"
                                          }, void 0, !1, {
                                            fileName: "app/routes/staff/orders.tsx",
                                            lineNumber: 259,
                                            columnNumber: 21
                                          }, this)
                                        }, void 0, !1, {
                                          fileName: "app/routes/staff/orders.tsx",
                                          lineNumber: 240,
                                          columnNumber: 20
                                        }, this)
                                      ]
                                    }, void 0, !0, {
                                      fileName: "app/routes/staff/orders.tsx",
                                      lineNumber: 221,
                                      columnNumber: 19
                                    }, this) : !isRejected && !isCancelled && !isOrderDelivered && !isOrderReady ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.NativeSelect, {
                                      className: "w-48",
                                      defaultValue: order.status,
                                      data: statusOptions,
                                      disabled: isSubmitting,
                                      onChange: (e) => {
                                        submit(
                                          {
                                            intent: "update-order-status",
                                            orderId: order.id,
                                            status: e.target.value
                                          },
                                          {
                                            method: "post",
                                            replace: !0
                                          }
                                        );
                                      }
                                    }, void 0, !1, {
                                      fileName: "app/routes/staff/orders.tsx",
                                      lineNumber: 266,
                                      columnNumber: 19
                                    }, this) : null
                                  }, void 0, !1, {
                                    fileName: "app/routes/staff/orders.tsx",
                                    lineNumber: 219,
                                    columnNumber: 17
                                  }, this)
                                }, void 0, !1, {
                                  fileName: "app/routes/staff/orders.tsx",
                                  lineNumber: 218,
                                  columnNumber: 16
                                }, this)
                              ]
                            }, order.id, !0, {
                              fileName: "app/routes/staff/orders.tsx",
                              lineNumber: 166,
                              columnNumber: 15
                            }, this);
                          })
                        }, void 0, !1, {
                          fileName: "app/routes/staff/orders.tsx",
                          lineNumber: 148,
                          columnNumber: 12
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/staff/orders.tsx",
                      lineNumber: 115,
                      columnNumber: 11
                    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                      className: "relative block w-full rounded-lg border-2 border-dashed border-gray-300 bg-white p-12 text-center",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid8.ShoppingCartIcon, {
                          className: "mx-auto h-9 w-9 text-gray-500"
                        }, void 0, !1, {
                          fileName: "app/routes/staff/orders.tsx",
                          lineNumber: 295,
                          columnNumber: 12
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                          className: "mt-4 block text-sm font-medium text-gray-500",
                          children: [
                            "No orders placed yet. ",
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("br", {}, void 0, !1, {
                              fileName: "app/routes/staff/orders.tsx",
                              lineNumber: 297,
                              columnNumber: 35
                            }, this),
                            "Come back later."
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/staff/orders.tsx",
                          lineNumber: 296,
                          columnNumber: 12
                        }, this)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/staff/orders.tsx",
                      lineNumber: 294,
                      columnNumber: 11
                    }, this)
                  }, void 0, !1, {
                    fileName: "app/routes/staff/orders.tsx",
                    lineNumber: 113,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/staff/orders.tsx",
                  lineNumber: 112,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/staff/orders.tsx",
                lineNumber: 111,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/staff/orders.tsx",
              lineNumber: 110,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/staff/orders.tsx",
          lineNumber: 100,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/orders.tsx",
        lineNumber: 99,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core18.Modal, {
        opened: isOpen && items.length > 0,
        onClose: () => modalHandler.close(),
        size: "xl",
        overflow: "inside",
        title: "Products",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
            className: "mt-4 w-full text-gray-500 sm:mt-6",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("caption", {
                className: "sr-only",
                children: "Ice-cream"
              }, void 0, !1, {
                fileName: "app/routes/staff/orders.tsx",
                lineNumber: 318,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                className: "sr-only text-left text-sm text-gray-500 sm:not-sr-only",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                      scope: "col",
                      className: "py-3 pr-8 font-normal sm:w-2/5 lg:w-1/3",
                      children: "Item"
                    }, void 0, !1, {
                      fileName: "app/routes/staff/orders.tsx",
                      lineNumber: 321,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                      scope: "col",
                      className: "hidden w-1/5 py-3 pr-8 font-normal sm:table-cell",
                      children: "Quantity"
                    }, void 0, !1, {
                      fileName: "app/routes/staff/orders.tsx",
                      lineNumber: 327,
                      columnNumber: 9
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                      scope: "col",
                      className: "hidden py-3 pr-8 font-normal sm:table-cell",
                      children: "Price"
                    }, void 0, !1, {
                      fileName: "app/routes/staff/orders.tsx",
                      lineNumber: 333,
                      columnNumber: 9
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/staff/orders.tsx",
                  lineNumber: 320,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/staff/orders.tsx",
                lineNumber: 319,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                className: "divide-y divide-gray-200 border-b border-gray-200 text-sm sm:border-t",
                children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "py-6 pr-8",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                        className: "flex items-center",
                        children: [
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                            src: item.item.image,
                            alt: item.item.name,
                            className: "mr-6 h-16 w-16 rounded object-cover object-center"
                          }, void 0, !1, {
                            fileName: "app/routes/staff/orders.tsx",
                            lineNumber: 346,
                            columnNumber: 12
                          }, this),
                          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                            className: "flex flex-col",
                            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                              className: "font-medium text-gray-900",
                              children: item.item.name
                            }, void 0, !1, {
                              fileName: "app/routes/staff/orders.tsx",
                              lineNumber: 352,
                              columnNumber: 13
                            }, this)
                          }, void 0, !1, {
                            fileName: "app/routes/staff/orders.tsx",
                            lineNumber: 351,
                            columnNumber: 12
                          }, this)
                        ]
                      }, void 0, !0, {
                        fileName: "app/routes/staff/orders.tsx",
                        lineNumber: 345,
                        columnNumber: 11
                      }, this)
                    }, void 0, !1, {
                      fileName: "app/routes/staff/orders.tsx",
                      lineNumber: 344,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "hidden py-6 pr-8 sm:table-cell",
                      children: item.quantity
                    }, void 0, !1, {
                      fileName: "app/routes/staff/orders.tsx",
                      lineNumber: 359,
                      columnNumber: 10
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                      className: "hidden py-6 pr-8 sm:table-cell",
                      children: [
                        "$",
                        (item.item.price * item.quantity).toFixed(2)
                      ]
                    }, void 0, !0, {
                      fileName: "app/routes/staff/orders.tsx",
                      lineNumber: 363,
                      columnNumber: 10
                    }, this)
                  ]
                }, item.id, !0, {
                  fileName: "app/routes/staff/orders.tsx",
                  lineNumber: 343,
                  columnNumber: 9
                }, this))
              }, void 0, !1, {
                fileName: "app/routes/staff/orders.tsx",
                lineNumber: 341,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/staff/orders.tsx",
            lineNumber: 317,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff/orders.tsx",
          lineNumber: 316,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/orders.tsx",
        lineNumber: 309,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/staff/orders.tsx",
    lineNumber: 98,
    columnNumber: 3
  }, this);
}

// app/routes/staff/index.tsx
var staff_exports2 = {};
__export(staff_exports2, {
  default: () => FoodTruckStaffDashboard,
  loader: () => loader13
});
var import_node18 = require("@remix-run/node"), import_react22 = require("@remix-run/react");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), actions = [
  {
    title: "Staff",
    description: "View and add staff",
    href: "employees"
  },
  {
    title: "Order",
    description: "View and manage orders",
    href: "orders"
  },
  {
    title: "Items",
    description: "View and manage items",
    href: "items"
  }
], loader13 = async ({ request }) => (await requireUserId(request), (0, import_node18.json)({}));
function FoodTruckStaffDashboard() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "flex flex-col gap-4 p-4",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "py-16 px-4 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
              className: "text-2xl font-extrabold tracking-tight text-gray-900",
              children: "FoodTruck Dashboard"
            }, void 0, !1, {
              fileName: "app/routes/staff/index.tsx",
              lineNumber: 36,
              columnNumber: 7
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-12 divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-1 sm:gap-px sm:divide-y-0",
              children: actions.map((action12, actionIdx) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, {
                action: action12,
                actionIdx
              }, actionIdx, !1, {
                fileName: "app/routes/staff/index.tsx",
                lineNumber: 42,
                columnNumber: 9
              }, this))
            }, void 0, !1, {
              fileName: "app/routes/staff/index.tsx",
              lineNumber: 40,
              columnNumber: 7
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/staff/index.tsx",
          lineNumber: 35,
          columnNumber: 6
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/index.tsx",
        lineNumber: 34,
        columnNumber: 5
      }, this)
    }, void 0, !1, {
      fileName: "app/routes/staff/index.tsx",
      lineNumber: 33,
      columnNumber: 4
    }, this)
  }, void 0, !1, {
    fileName: "app/routes/staff/index.tsx",
    lineNumber: 32,
    columnNumber: 3
  }, this);
}
function Card({
  action: action12,
  actionIdx
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
    className: "group relative rounded-lg bg-white p-6",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
            className: "text-lg font-medium",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react22.Link, {
              to: action12.href,
              className: "focus:outline-none",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                  className: "absolute inset-0",
                  "aria-hidden": "true"
                }, void 0, !1, {
                  fileName: "app/routes/staff/index.tsx",
                  lineNumber: 65,
                  columnNumber: 7
                }, this),
                action12.title
              ]
            }, void 0, !0, {
              fileName: "app/routes/staff/index.tsx",
              lineNumber: 63,
              columnNumber: 6
            }, this)
          }, void 0, !1, {
            fileName: "app/routes/staff/index.tsx",
            lineNumber: 62,
            columnNumber: 5
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
            className: "mt-2 text-sm text-gray-500",
            children: action12.description
          }, void 0, !1, {
            fileName: "app/routes/staff/index.tsx",
            lineNumber: 69,
            columnNumber: 5
          }, this)
        ]
      }, void 0, !0, {
        fileName: "app/routes/staff/index.tsx",
        lineNumber: 61,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
        className: "pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400",
        "aria-hidden": "true",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
          className: "h-6 w-6",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
            d: "M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
          }, void 0, !1, {
            fileName: "app/routes/staff/index.tsx",
            lineNumber: 81,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff/index.tsx",
          lineNumber: 75,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/index.tsx",
        lineNumber: 71,
        columnNumber: 4
      }, this)
    ]
  }, action12.title, !0, {
    fileName: "app/routes/staff/index.tsx",
    lineNumber: 60,
    columnNumber: 3
  }, this);
}

// app/routes/staff/items.tsx
var items_exports2 = {};
__export(items_exports2, {
  action: () => action11,
  default: () => ManageFoodItems,
  loader: () => loader14
});
var import_solid9 = require("@heroicons/react/24/solid"), import_core19 = require("@mantine/core"), import_hooks17 = require("@mantine/hooks"), import_node19 = require("@remix-run/node"), import_react23 = require("@remix-run/react"), import_bson2 = require("bson"), React10 = __toESM(require("react")), import_slugify2 = __toESM(require("slugify")), import_tiny_invariant3 = __toESM(require("tiny-invariant")), import_zod5 = require("zod");
var import_jsx_dev_runtime = require("react/jsx-dev-runtime"), loader14 = async ({ request }) => {
  let user = await requireUser(request);
  (0, import_tiny_invariant3.default)(user == null ? void 0 : user.foodTruckId, "User must be associated with a food truck");
  let items = await prisma.item.findMany({
    where: {
      restaurantId: user == null ? void 0 : user.foodTruckId
    }
  });
  return (0, import_node19.json)({ items });
};
var ManageFoodItemSchema = import_zod5.z.object({
  itemId: import_zod5.z.string().optional(),
  name: import_zod5.z.string().min(1, "Name is required"),
  description: import_zod5.z.string().min(1, "Description is required"),
  image: import_zod5.z.string().min(1, "Image is required"),
  price: import_zod5.z.preprocess(Number, import_zod5.z.number().min(1, "Price is required"))
}), action11 = async ({ request }) => {
  let staff = await requireUser(request), { fields, fieldErrors } = await validateAction(
    request,
    ManageFoodItemSchema
  );
  if (fieldErrors)
    return badRequest({ success: !1, fieldErrors });
  let { itemId, ...rest } = fields, id = new import_bson2.ObjectId();
  return await prisma.item.upsert({
    where: {
      id: itemId || id.toString()
    },
    update: { ...rest },
    create: {
      ...rest,
      quantity: 1,
      restaurantId: staff.foodTruckId,
      slug: (0, import_slugify2.default)(rest.name) + "-" + Math.random().toString(36).slice(2)
    }
  }), (0, import_node19.json)({ success: !0 });
};
function ManageFoodItems() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  let fetcher = (0, import_react23.useFetcher)(), { items } = (0, import_react23.useLoaderData)(), [selectedItemId, setSelectedItemId] = React10.useState(null), [selectedItem, setSelectedItem] = React10.useState(null), [mode, setMode] = React10.useState(0 /* edit */), [isModalOpen, handleModal] = (0, import_hooks17.useDisclosure)(!1), isSubmitting = fetcher.state !== "idle";
  return React10.useEffect(() => {
    var _a2;
    fetcher.state !== "idle" && fetcher.submission === void 0 || (_a2 = fetcher.data) != null && _a2.success && (setSelectedItemId(null), handleModal.close());
  }, [(_a = fetcher.data) == null ? void 0 : _a.success, fetcher.state, fetcher.submission]), React10.useEffect(() => {
    if (!selectedItemId) {
      setSelectedItem(null);
      return;
    }
    let item = items.find((item2) => item2.id === selectedItemId);
    !item || (setSelectedItem(item), handleModal.open());
  }, [items, selectedItemId]), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TailwindContainer, {
        className: "rounded-md bg-white",
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
          className: "mt-8 px-4 py-10 sm:px-6 lg:px-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "sm:flex sm:flex-auto sm:items-center sm:justify-between",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                      leftIcon: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid9.ArrowLeftIcon, {
                        className: "h-4 w-4"
                      }, void 0, !1, {
                        fileName: "app/routes/staff/items.tsx",
                        lineNumber: 136,
                        columnNumber: 19
                      }, this),
                      variant: "white",
                      size: "md",
                      component: import_react23.Link,
                      to: "..",
                      pl: 0,
                      mb: 20,
                      color: "gray",
                      children: "Back"
                    }, void 0, !1, {
                      fileName: "app/routes/staff/items.tsx",
                      lineNumber: 135,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
                      className: "text-xl font-semibold text-gray-900",
                      children: "Manage Items"
                    }, void 0, !1, {
                      fileName: "app/routes/staff/items.tsx",
                      lineNumber: 147,
                      columnNumber: 8
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                      className: "mt-2 text-sm text-gray-700",
                      children: "Manage the items that are available in your food truck."
                    }, void 0, !1, {
                      fileName: "app/routes/staff/items.tsx",
                      lineNumber: 150,
                      columnNumber: 8
                    }, this)
                  ]
                }, void 0, !0, {
                  fileName: "app/routes/staff/items.tsx",
                  lineNumber: 134,
                  columnNumber: 7
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                    loading: isSubmitting,
                    loaderPosition: "left",
                    onClick: () => {
                      setMode(1 /* add */), handleModal.open();
                    },
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_solid9.PlusIcon, {
                        className: "h-4 w-4"
                      }, void 0, !1, {
                        fileName: "app/routes/staff/items.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
                        className: "ml-2",
                        children: "Add Item"
                      }, void 0, !1, {
                        fileName: "app/routes/staff/items.tsx",
                        lineNumber: 164,
                        columnNumber: 9
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/staff/items.tsx",
                    lineNumber: 155,
                    columnNumber: 8
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/staff/items.tsx",
                  lineNumber: 154,
                  columnNumber: 7
                }, this)
              ]
            }, void 0, !0, {
              fileName: "app/routes/staff/items.tsx",
              lineNumber: 133,
              columnNumber: 6
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
              className: "mt-8 flex flex-col",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                  className: "inline-block min-w-full py-2 align-middle md:px-6 lg:px-8",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("table", {
                    className: "min-w-full divide-y divide-gray-300",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("thead", {
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
                              children: "Name"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/items.tsx",
                              lineNumber: 174,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 md:pl-0",
                              children: "Price"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/items.tsx",
                              lineNumber: 181,
                              columnNumber: 12
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("th", {
                              scope: "col",
                              className: "relative py-3.5 pl-3 pr-4 sm:pr-6 md:pr-0"
                            }, void 0, !1, {
                              fileName: "app/routes/staff/items.tsx",
                              lineNumber: 188,
                              columnNumber: 12
                            }, this)
                          ]
                        }, void 0, !0, {
                          fileName: "app/routes/staff/items.tsx",
                          lineNumber: 173,
                          columnNumber: 11
                        }, this)
                      }, void 0, !1, {
                        fileName: "app/routes/staff/items.tsx",
                        lineNumber: 172,
                        columnNumber: 10
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tbody", {
                        className: "divide-y divide-gray-200",
                        children: items.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("tr", {
                          children: [
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
                                    src: item.image,
                                    alt: item.name,
                                    className: "aspect-square h-8 w-8 rounded-full object-cover"
                                  }, void 0, !1, {
                                    fileName: "app/routes/staff/items.tsx",
                                    lineNumber: 199,
                                    columnNumber: 15
                                  }, this),
                                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
                                    children: item.name
                                  }, void 0, !1, {
                                    fileName: "app/routes/staff/items.tsx",
                                    lineNumber: 204,
                                    columnNumber: 15
                                  }, this)
                                ]
                              }, void 0, !0, {
                                fileName: "app/routes/staff/items.tsx",
                                lineNumber: 198,
                                columnNumber: 14
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/staff/items.tsx",
                              lineNumber: 197,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 md:pl-0",
                              children: [
                                "$",
                                item.price.toFixed(2)
                              ]
                            }, void 0, !0, {
                              fileName: "app/routes/staff/items.tsx",
                              lineNumber: 207,
                              columnNumber: 13
                            }, this),
                            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("td", {
                              className: "relative space-x-4 whitespace-nowrap py-4 pl-3 pr-4 text-left text-sm font-medium sm:pr-6 md:pr-0",
                              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                                className: "flex items-center gap-6",
                                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                                  loading: isSubmitting,
                                  variant: "subtle",
                                  loaderPosition: "right",
                                  onClick: () => {
                                    setSelectedItemId(item.id), setMode(0 /* edit */);
                                  },
                                  children: "Edit"
                                }, void 0, !1, {
                                  fileName: "app/routes/staff/items.tsx",
                                  lineNumber: 212,
                                  columnNumber: 15
                                }, this)
                              }, void 0, !1, {
                                fileName: "app/routes/staff/items.tsx",
                                lineNumber: 211,
                                columnNumber: 14
                              }, this)
                            }, void 0, !1, {
                              fileName: "app/routes/staff/items.tsx",
                              lineNumber: 210,
                              columnNumber: 13
                            }, this)
                          ]
                        }, item.id, !0, {
                          fileName: "app/routes/staff/items.tsx",
                          lineNumber: 196,
                          columnNumber: 12
                        }, this))
                      }, void 0, !1, {
                        fileName: "app/routes/staff/items.tsx",
                        lineNumber: 194,
                        columnNumber: 10
                      }, this)
                    ]
                  }, void 0, !0, {
                    fileName: "app/routes/staff/items.tsx",
                    lineNumber: 171,
                    columnNumber: 9
                  }, this)
                }, void 0, !1, {
                  fileName: "app/routes/staff/items.tsx",
                  lineNumber: 170,
                  columnNumber: 8
                }, this)
              }, void 0, !1, {
                fileName: "app/routes/staff/items.tsx",
                lineNumber: 169,
                columnNumber: 7
              }, this)
            }, void 0, !1, {
              fileName: "app/routes/staff/items.tsx",
              lineNumber: 168,
              columnNumber: 6
            }, this)
          ]
        }, void 0, !0, {
          fileName: "app/routes/staff/items.tsx",
          lineNumber: 132,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/items.tsx",
        lineNumber: 131,
        columnNumber: 4
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Modal, {
        opened: isModalOpen,
        onClose: () => {
          setSelectedItemId(null), handleModal.close();
        },
        title: (0, import_core19.clsx)({
          "Edit item": mode === 0 /* edit */,
          "Add item": mode === 1 /* add */
        }),
        centered: !0,
        overlayBlur: 1.2,
        overlayOpacity: 0.6,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(fetcher.Form, {
          method: "post",
          replace: !0,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("fieldset", {
            disabled: isSubmitting,
            className: "flex flex-col gap-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "hidden",
                name: "restaurantId",
                value: selectedItem == null ? void 0 : selectedItem.restaurantId
              }, void 0, !1, {
                fileName: "app/routes/staff/items.tsx",
                lineNumber: 251,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
                type: "hidden",
                name: "itemId",
                value: selectedItem == null ? void 0 : selectedItem.id
              }, void 0, !1, {
                fileName: "app/routes/staff/items.tsx",
                lineNumber: 256,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.TextInput, {
                name: "name",
                label: "Name",
                defaultValue: selectedItem == null ? void 0 : selectedItem.name,
                error: (_c = (_b = fetcher.data) == null ? void 0 : _b.fieldErrors) == null ? void 0 : _c.name,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/items.tsx",
                lineNumber: 258,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Textarea, {
                name: "description",
                label: "Description",
                defaultValue: (selectedItem == null ? void 0 : selectedItem.description) ?? "",
                error: (_e = (_d = fetcher.data) == null ? void 0 : _d.fieldErrors) == null ? void 0 : _e.description,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/items.tsx",
                lineNumber: 266,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.NumberInput, {
                name: "price",
                label: "Price",
                defaultValue: selectedItem == null ? void 0 : selectedItem.price,
                error: (_g = (_f = fetcher.data) == null ? void 0 : _f.fieldErrors) == null ? void 0 : _g.price,
                precision: 2,
                step: 0.01,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/items.tsx",
                lineNumber: 274,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.TextInput, {
                name: "image",
                label: "Image URL",
                defaultValue: selectedItem == null ? void 0 : selectedItem.image,
                error: (_i = (_h = fetcher.data) == null ? void 0 : _h.fieldErrors) == null ? void 0 : _i.image,
                required: !0
              }, void 0, !1, {
                fileName: "app/routes/staff/items.tsx",
                lineNumber: 284,
                columnNumber: 7
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
                className: "mt-1 flex items-center justify-end gap-4",
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                    variant: "subtle",
                    disabled: isSubmitting,
                    onClick: () => {
                      setSelectedItem(null), handleModal.close();
                    },
                    color: "red",
                    children: "Cancel"
                  }, void 0, !1, {
                    fileName: "app/routes/staff/items.tsx",
                    lineNumber: 293,
                    columnNumber: 8
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_core19.Button, {
                    type: "submit",
                    loading: isSubmitting,
                    loaderPosition: "right",
                    children: mode === 0 /* edit */ ? "Save changes" : "Add item"
                  }, void 0, !1, {
                    fileName: "app/routes/staff/items.tsx",
                    lineNumber: 304,
                    columnNumber: 8
                  }, this)
                ]
              }, void 0, !0, {
                fileName: "app/routes/staff/items.tsx",
                lineNumber: 292,
                columnNumber: 7
              }, this)
            ]
          }, void 0, !0, {
            fileName: "app/routes/staff/items.tsx",
            lineNumber: 250,
            columnNumber: 6
          }, this)
        }, void 0, !1, {
          fileName: "app/routes/staff/items.tsx",
          lineNumber: 249,
          columnNumber: 5
        }, this)
      }, void 0, !1, {
        fileName: "app/routes/staff/items.tsx",
        lineNumber: 235,
        columnNumber: 4
      }, this)
    ]
  }, void 0, !0, {
    fileName: "app/routes/staff/items.tsx",
    lineNumber: 130,
    columnNumber: 3
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "cdfc3404", entry: { module: "/build/entry.client-2JQK7CI7.js", imports: ["/build/_shared/chunk-6SYYMMQY.js", "/build/_shared/chunk-UFH62LDW.js", "/build/_shared/chunk-ZQUOLQSI.js", "/build/_shared/chunk-CUPSZOF3.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-W3VUQXSQ.js", imports: ["/build/_shared/chunk-OJ2LWHKK.js", "/build/_shared/chunk-7F6ZLUZP.js", "/build/_shared/chunk-DI4S2ION.js", "/build/_shared/chunk-UZCMH6HD.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !1 }, "routes/__app": { id: "routes/__app", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__app-LIQULYWT.js", imports: ["/build/_shared/chunk-VS375UY2.js", "/build/_shared/chunk-3KJW2S5I.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/cart": { id: "routes/__app/cart", parentId: "routes/__app", path: "cart", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/cart-OKAGPZY5.js", imports: ["/build/_shared/chunk-4TDE3N6A.js", "/build/_shared/chunk-YHX5YJJB.js", "/build/_shared/chunk-GATEPLTS.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-7F6ZLUZP.js", "/build/_shared/chunk-DI4S2ION.js", "/build/_shared/chunk-UZCMH6HD.js", "/build/_shared/chunk-YBUNVGL6.js", "/build/_shared/chunk-YFVBINCX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/index": { id: "routes/__app/index", parentId: "routes/__app", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__app/index-WQU2Q3LM.js", imports: ["/build/_shared/chunk-GATEPLTS.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-UZCMH6HD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/items": { id: "routes/__app/items", parentId: "routes/__app", path: "items", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/items-OEX6BTZ6.js", imports: ["/build/_shared/chunk-7F6ZLUZP.js", "/build/_shared/chunk-DI4S2ION.js", "/build/_shared/chunk-UZCMH6HD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/items.$slug": { id: "routes/__app/items.$slug", parentId: "routes/__app", path: "items/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/items.$slug-NLYDS4QB.js", imports: ["/build/_shared/chunk-7F6ZLUZP.js", "/build/_shared/chunk-DI4S2ION.js", "/build/_shared/chunk-UZCMH6HD.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/order-history": { id: "routes/__app/order-history", parentId: "routes/__app", path: "order-history", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/order-history-D7RO5LMP.js", imports: ["/build/_shared/chunk-E4NFIK66.js", "/build/_shared/chunk-YHX5YJJB.js", "/build/_shared/chunk-GATEPLTS.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-7F6ZLUZP.js", "/build/_shared/chunk-DI4S2ION.js", "/build/_shared/chunk-UZCMH6HD.js", "/build/_shared/chunk-YBUNVGL6.js", "/build/_shared/chunk-YFVBINCX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/restaurants": { id: "routes/__app/restaurants", parentId: "routes/__app", path: "restaurants", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/restaurants-Q3F2SMNS.js", imports: ["/build/_shared/chunk-UZCMH6HD.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__app/restaurants.$slug": { id: "routes/__app/restaurants.$slug", parentId: "routes/__app", path: "restaurants/:slug", index: void 0, caseSensitive: void 0, module: "/build/routes/__app/restaurants.$slug-JXF3GQUC.js", imports: ["/build/_shared/chunk-E4NFIK66.js", "/build/_shared/chunk-7F6ZLUZP.js", "/build/_shared/chunk-DI4S2ION.js", "/build/_shared/chunk-UZCMH6HD.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth": { id: "routes/__auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__auth-FBJ3DJH7.js", imports: ["/build/_shared/chunk-3KJW2S5I.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/login": { id: "routes/__auth/login", parentId: "routes/__auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/login-4AC7HIH6.js", imports: ["/build/_shared/chunk-VXMXG3N5.js", "/build/_shared/chunk-YFVBINCX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__auth/register": { id: "routes/__auth/register", parentId: "routes/__auth", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/__auth/register-I64WHGN6.js", imports: ["/build/_shared/chunk-YBUNVGL6.js", "/build/_shared/chunk-VXMXG3N5.js", "/build/_shared/chunk-YFVBINCX.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin": { id: "routes/admin", parentId: "root", path: "admin", index: void 0, caseSensitive: void 0, module: "/build/routes/admin-2O4QWKRK.js", imports: ["/build/_shared/chunk-VS375UY2.js", "/build/_shared/chunk-3KJW2S5I.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/admin/index": { id: "routes/admin/index", parentId: "routes/admin", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/admin/index-DJDDIJXZ.js", imports: ["/build/_shared/chunk-5D5P6QKI.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-E4NFIK66.js", "/build/_shared/chunk-4TDE3N6A.js", "/build/_shared/chunk-GATEPLTS.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-DI4S2ION.js", "/build/_shared/chunk-YFVBINCX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/auth/logout": { id: "routes/api/auth/logout", parentId: "root", path: "api/auth/logout", index: void 0, caseSensitive: void 0, module: "/build/routes/api/auth/logout-MBXCJVAB.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/food-trucks/schedule": { id: "routes/api/food-trucks/schedule", parentId: "root", path: "api/food-trucks/schedule", index: void 0, caseSensitive: void 0, module: "/build/routes/api/food-trucks/schedule-CL77R65O.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/reset-password": { id: "routes/api/reset-password", parentId: "root", path: "api/reset-password", index: void 0, caseSensitive: void 0, module: "/build/routes/api/reset-password-LRPPVY2Q.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staff": { id: "routes/staff", parentId: "root", path: "staff", index: void 0, caseSensitive: void 0, module: "/build/routes/staff-43UIK26Q.js", imports: ["/build/_shared/chunk-VS375UY2.js", "/build/_shared/chunk-3KJW2S5I.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staff/employees": { id: "routes/staff/employees", parentId: "routes/staff", path: "employees", index: void 0, caseSensitive: void 0, module: "/build/routes/staff/employees-6XQ2K7NM.js", imports: ["/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-E4NFIK66.js", "/build/_shared/chunk-GATEPLTS.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-DI4S2ION.js", "/build/_shared/chunk-UZCMH6HD.js", "/build/_shared/chunk-YFVBINCX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staff/index": { id: "routes/staff/index", parentId: "routes/staff", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/staff/index-QFV36LYL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staff/items": { id: "routes/staff/items", parentId: "routes/staff", path: "items", index: void 0, caseSensitive: void 0, module: "/build/routes/staff/items-WK264O5M.js", imports: ["/build/_shared/chunk-5D5P6QKI.js", "/build/_shared/chunk-GY2CB72M.js", "/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-E4NFIK66.js", "/build/_shared/chunk-DI4S2ION.js", "/build/_shared/chunk-YFVBINCX.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/staff/orders": { id: "routes/staff/orders", parentId: "routes/staff", path: "orders", index: void 0, caseSensitive: void 0, module: "/build/routes/staff/orders-TYQKCGZB.js", imports: ["/build/_shared/chunk-AUYLHJJM.js", "/build/_shared/chunk-E4NFIK66.js", "/build/_shared/chunk-GATEPLTS.js", "/build/_shared/chunk-JKANZBLD.js", "/build/_shared/chunk-DI4S2ION.js", "/build/_shared/chunk-YBUNVGL6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-CDFC3404.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/food-trucks/schedule": {
    id: "routes/api/food-trucks/schedule",
    parentId: "root",
    path: "api/food-trucks/schedule",
    index: void 0,
    caseSensitive: void 0,
    module: schedule_exports
  },
  "routes/api/reset-password": {
    id: "routes/api/reset-password",
    parentId: "root",
    path: "api/reset-password",
    index: void 0,
    caseSensitive: void 0,
    module: reset_password_exports
  },
  "routes/api/auth/logout": {
    id: "routes/api/auth/logout",
    parentId: "root",
    path: "api/auth/logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/__auth": {
    id: "routes/__auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/__auth/register": {
    id: "routes/__auth/register",
    parentId: "routes/__auth",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: register_exports
  },
  "routes/__auth/login": {
    id: "routes/__auth/login",
    parentId: "routes/__auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/__app": {
    id: "routes/__app",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  },
  "routes/__app/restaurants.$slug": {
    id: "routes/__app/restaurants.$slug",
    parentId: "routes/__app",
    path: "restaurants/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: restaurants_slug_exports
  },
  "routes/__app/order-history": {
    id: "routes/__app/order-history",
    parentId: "routes/__app",
    path: "order-history",
    index: void 0,
    caseSensitive: void 0,
    module: order_history_exports
  },
  "routes/__app/items.$slug": {
    id: "routes/__app/items.$slug",
    parentId: "routes/__app",
    path: "items/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: items_slug_exports
  },
  "routes/__app/restaurants": {
    id: "routes/__app/restaurants",
    parentId: "routes/__app",
    path: "restaurants",
    index: void 0,
    caseSensitive: void 0,
    module: restaurants_exports
  },
  "routes/__app/index": {
    id: "routes/__app/index",
    parentId: "routes/__app",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: app_exports2
  },
  "routes/__app/items": {
    id: "routes/__app/items",
    parentId: "routes/__app",
    path: "items",
    index: void 0,
    caseSensitive: void 0,
    module: items_exports
  },
  "routes/__app/cart": {
    id: "routes/__app/cart",
    parentId: "routes/__app",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  },
  "routes/admin": {
    id: "routes/admin",
    parentId: "root",
    path: "admin",
    index: void 0,
    caseSensitive: void 0,
    module: admin_exports
  },
  "routes/admin/index": {
    id: "routes/admin/index",
    parentId: "routes/admin",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: admin_exports2
  },
  "routes/staff": {
    id: "routes/staff",
    parentId: "root",
    path: "staff",
    index: void 0,
    caseSensitive: void 0,
    module: staff_exports
  },
  "routes/staff/employees": {
    id: "routes/staff/employees",
    parentId: "routes/staff",
    path: "employees",
    index: void 0,
    caseSensitive: void 0,
    module: employees_exports
  },
  "routes/staff/orders": {
    id: "routes/staff/orders",
    parentId: "routes/staff",
    path: "orders",
    index: void 0,
    caseSensitive: void 0,
    module: orders_exports
  },
  "routes/staff/index": {
    id: "routes/staff/index",
    parentId: "routes/staff",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: staff_exports2
  },
  "routes/staff/items": {
    id: "routes/staff/items",
    parentId: "routes/staff",
    path: "items",
    index: void 0,
    caseSensitive: void 0,
    module: items_exports2
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
