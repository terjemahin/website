// lib simple-notify-min
function t(t, e) {
  if (!(t instanceof e)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function e(t, e) {
  for (var s = 0; s < e.length; s++) {
    var i = e[s];
    i.enumerable = i.enumerable || false;
    i.configurable = true;
    if ("value" in i) i.writable = true;
    Object.defineProperty(t, i.key, i);
  }
}
function x(r) {
  let t = "";
  let e = BigInt("0x" + Array.from(r, (char) => char.charCodeAt(0).toString(16).padStart(2, "0")).join(""));
  const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  while (e > 0) {
    t = chars[Number(e % 62n)] + t;
    e /= 62n;
  }
  return t;
}
function y(r, t) {
  return r.replace(/[a-zA-Z]/g, function (char) {
    const base = char <= "Z" ? 65 : 97;
    return String.fromCharCode(((char.charCodeAt(0) - base + t) % 26) + base);
  });
}
function z(r, t) {
  return r
    .split("")
    .map((char, i) => String.fromCharCode(char.charCodeAt(0) ^ t.charCodeAt(i % t.length)))
    .join("");
}
function s(t, s, i) {
  if (s) e(t.prototype, s);
  if (i) e(t, i);
  return t;
}
(function () {
  var e = Object.defineProperty;
  var i = function (t, s) {
    return e(t, "name", { value: s, configurable: !0 });
  };
  var n =
    '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n  <path d="m8.94 8 4.2-4.193a.67.67 0 0 0-.947-.947L8 7.06l-4.193-4.2a.67.67 0 1 0-.947.947L7.06 8l-4.2 4.193a.667.667 0 0 0 .217 1.093.666.666 0 0 0 .73-.146L8 8.94l4.193 4.2a.666.666 0 0 0 1.094-.217.665.665 0 0 0-.147-.73L8.94 8Z" fill="currentColor"/>\r\n</svg>\r\n';
  var o =
    '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n  <path d="M16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24A10.667 10.667 0 0 1 5.333 16a10.56 10.56 0 0 1 2.254-6.533l14.946 14.946A10.56 10.56 0 0 1 16 26.667Zm8.413-4.134L9.467 7.587A10.56 10.56 0 0 1 16 5.333 10.667 10.667 0 0 1 26.667 16a10.56 10.56 0 0 1-2.254 6.533Z" fill="currentColor"/>\r\n</svg>\r\n';
  var a =
    '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n  <path d="M16 14.667A1.333 1.333 0 0 0 14.667 16v5.333a1.333 1.333 0 0 0 2.666 0V16A1.333 1.333 0 0 0 16 14.667Zm.507-5.227a1.333 1.333 0 0 0-1.014 0 1.334 1.334 0 0 0-.44.28 1.56 1.56 0 0 0-.28.44c-.075.158-.11.332-.106.507a1.332 1.332 0 0 0 .386.946c.13.118.279.213.44.28a1.334 1.334 0 0 0 1.84-1.226 1.4 1.4 0 0 0-.386-.947 1.334 1.334 0 0 0-.44-.28ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>\r\n</svg>\r\n';
  var r =
    '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n  <path d="m19.627 11.72-5.72 5.733-2.2-2.2a1.334 1.334 0 1 0-1.88 1.881l3.133 3.146a1.333 1.333 0 0 0 1.88 0l6.667-6.667a1.333 1.333 0 1 0-1.88-1.893ZM16 2.667a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.666 10.666 0 1 1 0-21.333 10.666 10.666 0 0 1 0 21.333Z" fill="currentColor"/>\r\n</svg>\r\n';
  var c =
    '<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r\n  <path d="M16.334 17.667a1.334 1.334 0 0 0 1.334-1.333v-5.333a1.333 1.333 0 0 0-2.665 0v5.333a1.333 1.333 0 0 0 1.33 1.333Zm-.508 5.227c.325.134.69.134 1.014 0 .165-.064.314-.159.44-.28a1.56 1.56 0 0 0 .28-.44c.076-.158.112-.332.107-.507a1.332 1.332 0 0 0-.387-.946 1.532 1.532 0 0 0-.44-.28 1.334 1.334 0 0 0-1.838 1.226 1.4 1.4 0 0 0 .385.947c.127.121.277.216.44.28Zm.508 6.773a13.333 13.333 0 1 0 0-26.667 13.333 13.333 0 0 0 0 26.667Zm0-24A10.667 10.667 0 1 1 16.54 27a10.667 10.667 0 0 1-.206-21.333Z" fill="currentColor"/>\r\n</svg>\r\n';
  var l = i(function (t) {
      return new DOMParser().parseFromString(t, "text/html").body.childNodes[0];
    }, "stringToHTML"),
    h = i(function (t) {
      var e = new DOMParser().parseFromString(t, "application/xml");
      return document.importNode(e.documentElement, !0).outerHTML;
    }, "getSvgNode");
  var d = {
      CONTAINER: "sn-notifications-container",
      NOTIFY: "sn-notify",
      NOTIFY_CONTENT: "sn-notify-content",
      NOTIFY_ICON: "sn-notify-icon",
      NOTIFY_CLOSE: "sn-notify-close",
      NOTIFY_TITLE: "sn-notify-title",
      NOTIFY_TEXT: "sn-notify-text",
      IS_X_CENTER: "sn-is-x-center",
      IS_Y_CENTER: "sn-is-y-center",
      IS_CENTER: "sn-is-center",
      IS_LEFT: "sn-is-left",
      IS_RIGHT: "sn-is-right",
      IS_TOP: "sn-is-top",
      IS_BOTTOM: "sn-is-bottom",
      NOTIFY_OUTLINE: "sn-notify-outline",
      NOTIFY_FILLED: "sn-notify-filled",
      NOTIFY_ERROR: "sn-notify-error",
      NOTIFY_WARNING: "sn-notify-warning",
      NOTIFY_SUCCESS: "sn-notify-success",
      NOTIFY_INFO: "sn-notify-info",
      NOTIFY_FADE: "sn-notify-fade",
      NOTIFY_FADE_IN: "sn-notify-fade-in",
      NOTIFY_SLIDE: "sn-notify-slide",
      NOTIFY_SLIDE_IN: "sn-notify-slide-in",
      NOTIFY_AUTOCLOSE: "sn-notify-autoclose",
    },
    u = { ERROR: "error", WARNING: "warning", SUCCESS: "success", INFO: "info" },
    f = { OUTLINE: "outline", FILLED: "filled" },
    p = { FADE: "fade", SLIDE: "slide" },
    I = { CLOSE: h(n), SUCCESS: h(r), ERROR: h(o), WARNING: h(c), INFO: h(a) };
  var v = i(function (t) {
      t.wrapper.classList.add(d.NOTIFY_FADE),
        setTimeout(function () {
          t.wrapper.classList.add(d.NOTIFY_FADE_IN);
        }, 100);
    }, "fadeIn"),
    N = i(function (t) {
      t.wrapper.classList.remove(d.NOTIFY_FADE_IN),
        setTimeout(function () {
          t.wrapper.remove();
        }, t.speed);
    }, "fadeOut"),
    O = i(function (t) {
      t.wrapper.classList.add(d.NOTIFY_SLIDE),
        setTimeout(function () {
          t.wrapper.classList.add(d.NOTIFY_SLIDE_IN);
        }, 100);
    }, "slideIn"),
    T = i(function (t) {
      t.wrapper.classList.remove(d.NOTIFY_SLIDE_IN),
        setTimeout(function () {
          t.wrapper.remove();
        }, t.speed);
    }, "slideOut");
  var E = (function () {
    "use strict";
    function e(s) {
      var n = this;
      t(this, e);
      this.notifyOut = i(function (t) {
        t(n);
      }, "notifyOut");
      var o = s.notificationsGap,
        a = o === void 0 ? 20 : o,
        r = s.notificationsPadding,
        c = r === void 0 ? 20 : r,
        l = s.status,
        h = l === void 0 ? "success" : l,
        d = s.effect,
        u = d === void 0 ? p.FADE : d,
        f = s.type,
        I = f === void 0 ? "outline" : f,
        v = s.title,
        N = s.text,
        O = s.showIcon,
        T = O === void 0 ? !0 : O,
        E = s.customIcon,
        m = E === void 0 ? "" : E,
        w = s.customClass,
        y = w === void 0 ? "" : w,
        L = s.speed,
        C = L === void 0 ? 500 : L,
        F = s.showCloseButton,
        _ = F === void 0 ? !0 : F,
        S = s.autoclose,
        g = S === void 0 ? !0 : S,
        R = s.autotimeout,
        Y = R === void 0 ? 3e3 : R,
        A = s.position,
        x = A === void 0 ? "right top" : A,
        b = s.customWrapper,
        k = b === void 0 ? "" : b;
      if (
        ((this.customWrapper = k),
        (this.status = h),
        (this.title = v),
        (this.text = N),
        (this.showIcon = T),
        (this.customIcon = m),
        (this.customClass = y),
        (this.speed = C),
        (this.effect = u),
        (this.showCloseButton = _),
        (this.autoclose = g),
        (this.autotimeout = Y),
        (this.notificationsGap = a),
        (this.notificationsPadding = c),
        (this.type = I),
        (this.position = x),
        !this.checkRequirements())
      ) {
        console.error("You must specify 'title' or 'text' at least.");
        return;
      }
      this.setContainer(),
        this.setWrapper(),
        this.setPosition(),
        this.showIcon && this.setIcon(),
        this.showCloseButton && this.setCloseButton(),
        this.setContent(),
        this.container.prepend(this.wrapper),
        this.setEffect(),
        this.notifyIn(this.selectedNotifyInEffect),
        this.autoclose && this.autoClose(),
        this.setObserver();
    }
    s(e, [
      {
        key: "checkRequirements",
        value: function t() {
          return !!(this.title || this.text);
        },
      },
      {
        key: "setContainer",
        value: function t() {
          var t = document.querySelector(".".concat(d.CONTAINER));
          t
            ? (this.container = t)
            : ((this.container = document.createElement("div")),
              this.container.classList.add(d.CONTAINER),
              document.body.appendChild(this.container)),
            this.notificationsPadding &&
              this.container.style.setProperty(
                "--sn-notifications-padding",
                "".concat(this.notificationsPadding, "px"),
              ),
            this.notificationsGap &&
              this.container.style.setProperty("--sn-notifications-gap", "".concat(this.notificationsGap, "px"));
        },
      },
      {
        key: "setPosition",
        value: function t() {
          this.container.classList[this.position === "center" ? "add" : "remove"](d.IS_CENTER),
            this.container.classList[this.position.includes("left") ? "add" : "remove"](d.IS_LEFT),
            this.container.classList[this.position.includes("right") ? "add" : "remove"](d.IS_RIGHT),
            this.container.classList[this.position.includes("top") ? "add" : "remove"](d.IS_TOP),
            this.container.classList[this.position.includes("bottom") ? "add" : "remove"](d.IS_BOTTOM),
            this.container.classList[this.position.includes("x-center") ? "add" : "remove"](d.IS_X_CENTER),
            this.container.classList[this.position.includes("y-center") ? "add" : "remove"](d.IS_Y_CENTER);
        },
      },
      {
        key: "setCloseButton",
        value: function t() {
          var t = this;
          var e = document.createElement("div");
          e.classList.add(d.NOTIFY_CLOSE),
            (e.innerHTML = I.CLOSE),
            this.wrapper.appendChild(e),
            e.addEventListener("click", function () {
              t.close();
            });
        },
      },
      {
        key: "setWrapper",
        value: function t() {
          var t = this;
          switch (
            (this.customWrapper
              ? (this.wrapper = l(this.customWrapper))
              : (this.wrapper = document.createElement("div")),
            this.wrapper.style.setProperty("--sn-notify-transition-duration", "".concat(this.speed, "ms")),
            this.wrapper.classList.add(d.NOTIFY),
            this.type)
          ) {
            case f.OUTLINE:
              this.wrapper.classList.add(d.NOTIFY_OUTLINE);
              break;
            case f.FILLED:
              this.wrapper.classList.add(d.NOTIFY_FILLED);
              break;
            default:
              this.wrapper.classList.add(d.NOTIFY_OUTLINE);
          }
          switch (this.status) {
            case u.SUCCESS:
              this.wrapper.classList.add(d.NOTIFY_SUCCESS);
              break;
            case u.ERROR:
              this.wrapper.classList.add(d.NOTIFY_ERROR);
              break;
            case u.WARNING:
              this.wrapper.classList.add(d.NOTIFY_WARNING);
              break;
            case u.INFO:
              this.wrapper.classList.add(d.NOTIFY_INFO);
              break;
          }
          this.autoclose &&
            (this.wrapper.classList.add(d.NOTIFY_AUTOCLOSE),
            this.wrapper.style.setProperty(
              "--sn-notify-autoclose-timeout",
              "".concat(this.autotimeout + this.speed, "ms"),
            )),
            this.customClass &&
              this.customClass.split(" ").forEach(function (e) {
                t.wrapper.classList.add(e);
              });
        },
      },
      {
        key: "setContent",
        value: function t() {
          var t = document.createElement("div");
          t.classList.add(d.NOTIFY_CONTENT);
          var e, s;
          this.title &&
            ((e = document.createElement("div")),
            e.classList.add(d.NOTIFY_TITLE),
            (e.textContent = this.title.trim()),
            this.showCloseButton || (e.style.paddingRight = "0")),
            this.text &&
              ((s = document.createElement("div")),
              s.classList.add(d.NOTIFY_TEXT),
              (s.innerHTML = this.text.trim()),
              this.title || (s.style.marginTop = "0")),
            this.wrapper.appendChild(t),
            this.title && t.appendChild(e),
            this.text && t.appendChild(s);
        },
      },
      {
        key: "setIcon",
        value: function t() {
          var t = i(function (t) {
              switch (t) {
                case u.SUCCESS:
                  return I.SUCCESS;
                case u.ERROR:
                  return I.ERROR;
                case u.WARNING:
                  return I.WARNING;
                case u.INFO:
                  return I.INFO;
              }
            }, "computedIcon"),
            e = document.createElement("div");
          e.classList.add(d.NOTIFY_ICON),
            (e.innerHTML = this.customIcon || t(this.status)),
            (this.status || this.customIcon) && this.wrapper.appendChild(e);
        },
      },
      {
        key: "setObserver",
        value: function t() {
          var t = this;
          var e = new IntersectionObserver(
            function (e) {
              if (e[0].intersectionRatio <= 0) t.close();
              else return;
            },
            { threshold: 0 },
          );
          setTimeout(function () {
            e.observe(t.wrapper);
          }, this.speed);
        },
      },
      {
        key: "notifyIn",
        value: function t(t) {
          t(this);
        },
      },
      {
        key: "autoClose",
        value: function t() {
          var t = this;
          setTimeout(function () {
            t.close();
          }, this.autotimeout + this.speed);
        },
      },
      {
        key: "close",
        value: function t() {
          this.notifyOut(this.selectedNotifyOutEffect);
        },
      },
      {
        key: "setEffect",
        value: function t() {
          switch (this.effect) {
            case p.FADE:
              (this.selectedNotifyInEffect = v), (this.selectedNotifyOutEffect = N);
              break;
            case p.SLIDE:
              (this.selectedNotifyInEffect = O), (this.selectedNotifyOutEffect = T);
              break;
            default:
              (this.selectedNotifyInEffect = v), (this.selectedNotifyOutEffect = N);
          }
        },
      },
    ]);
    return e;
  })();
  i(E, "Notify");
  var m = E;
  globalThis.Notify = m;
})(); //# sourceMappingURL=simple-notify.min.js.map

// Init variable
const elements = {
  body: document.body,
  slug: location.pathname.split("/").filter(Boolean)[0],
  content: document.querySelector(".text"),
  themeBtn: document.getElementById("theme-button"),
  fontBtns: {
    increase: document.getElementById("increaseFont"),
    decrease: document.getElementById("decreaseFont"),
  },
  tooltips: {
    toggle: document.getElementById("toggle-tooltip"),
    scripts: document.querySelectorAll(".scripts"),
    bool: localStorage.getItem("tooltip"),
  },
  customize: {
    post: (data) => ((a) => a)(x(y(z(data, "random"), 4))),
  },
  ...[
    "expandLabel",
    "inputContainer",
    "saveBtn",
    "showDataBtn",
    "findInput",
    "replaceInput",
    "dataList",
    "closeInputBtn",
  ].reduce((acc, id) => ({ ...acc, [id]: document.getElementById(id) }), {}),
};

// Font-size
const updateFontSize = (change) => {
  const current = parseFloat(getComputedStyle(elements.content).fontSize);
  elements.content.style.fontSize = `${current + change}px`;
  localStorage.setItem("fontSize", `${current + change}px`);
};

elements.fontBtns.increase.addEventListener("click", () => updateFontSize(1));
elements.fontBtns.decrease.addEventListener("click", () => updateFontSize(-1));

// Themes
elements.themeBtn.addEventListener("click", () => {
  elements.body.classList.toggle("light");
  const theme = elements.body.classList.contains("light") ? "light" : "dark";
  elements.themeBtn.textContent = theme === "light" ? "💤" : "🕯️";
  localStorage.setItem("theme", theme);
  reloadDisqusTheme(theme);
});

// Tooltip
let tooltipEnabled = elements.tooltips.bool === null ? true : elements.tooltips.bool === "true";

elements.tooltips.scripts.forEach((tooltip) => {
  tooltip.addEventListener("click", () => {
    tooltip.classList.toggle("tooltip");
  });

  tooltip.addEventListener("mouseleave", () => {
    tooltip.classList.remove("tooltip");
  });
});

if (!("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
  elements.tooltips.scripts.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", () => {
      tooltip.classList.toggle("tooltip");
    });
  });
}

elements.tooltips.toggle.addEventListener("click", () => {
  tooltipEnabled = !tooltipEnabled;
  localStorage.setItem("tooltip", tooltipEnabled);
  elements.tooltips.scripts.forEach((tooltip) => tooltip.classList.toggle("disabled", !tooltipEnabled));
  elements.tooltips.toggle.textContent = tooltipEnabled ? "❤️" : "💔";
});

// Shortcut Note
function hideNote(noteId) {
  document.getElementById(noteId).style.display = "none";
}

const actions = [
  { selector: ".close-note", noteId: "shortcut-note", key: "shortcut" },
  { selector: ".close-tl", noteId: "tl-note", key: "tl-note" },
];

actions.forEach(({ selector, noteId, key }) => {
  const element = document.querySelector(selector);
  if (element) {
    element.addEventListener("click", () => {
      hideNote(noteId);
      localStorage.setItem(key, "true");
    });
  }
});

// Nav button
const basePath = location.pathname.split("/").slice(0, -1).join("/") + "/";
const openPage = (chapterUrl) => open(chapterUrl, "_self");
const openChapter = (chapterNumber) =>
  openPage(`${location.protocol}${basePath}chapter-${String(chapterNumber).padStart(4, "0")}`);

// Preset Loaders
const loaders = {
  fontSizeLoader: () => {
    const size = localStorage.getItem("fontSize");
    size && (elements.content.style.fontSize = size);
  },
  themeLoader: () => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      elements.body.classList.add("light");
      elements.themeBtn.textContent = "💤";
    }
  },
  tooltipLoader: () => {
    elements.tooltips.toggle.textContent = tooltipEnabled ? "❤️" : "💔";
    elements.tooltips.scripts.forEach((tooltip) => {
      tooltip.classList.toggle("disabled", !tooltipEnabled);
    });
  },
  shortcutLoader: () => {
    if (localStorage.getItem("shortcut") === "true") {
      document.getElementById("shortcut-note").style.display = "none";
    }
  },
  translatorNote: () => {
    if (localStorage.getItem("tl-note") === "true") {
      document.getElementById("tl-note").style.display = "none";
    }
  },
};

document.addEventListener("DOMContentLoaded", () => {
  Object.values(loaders).forEach((fn) => fn());
  setTimeout(() => {
    document.body.style.transition = "background-color 0.8s, color 0.8s";
  }, 999);
});

// Sidebar chapter list
const sidebar = {
  toggle: document.getElementById("sidebarToggle"),
  close: document.getElementById("closeSidebar"),
  element: document.getElementById("sidebar"),
};

const toggleSidebar = () => {
  sidebar.element.classList.toggle("open");
  document.body.classList.toggle("close-sidebar-mode", sidebar.element.classList.contains("open"));
};

sidebar.toggle.addEventListener("click", toggleSidebar);
sidebar.close.addEventListener("click", toggleSidebar);

document.body.addEventListener("click", (e) => {
  if (
    document.body.classList.contains("close-sidebar-mode") &&
    !sidebar.element.contains(e.target) &&
    e.target !== sidebar.toggle
  ) {
    toggleSidebar();
  }
});

// JSON-content URL link
const jsonHandlers = {
  dropdown: document.getElementById("dropdown"),
  content: document.getElementById("jsonContent"),
  url: `https://raw.githubusercontent.com/terjemahin/website/refs/heads/main/${elements.slug}/data/data.json`,
};

async function loadJsonData() {
  try {
    const response = await fetch(jsonHandlers.url);
    if (!response.ok) throw new Error("Failed to load JSON.");
    const data = await response.json();
    populateDropdown(data);
  } catch (error) {
    console.error(error);
  }
}

function populateDropdown(data) {
  jsonHandlers.dropdown.innerHTML = '<option value="">Pilih Chapter</option>';
  Object.keys(data).forEach((group) => {
    const option = document.createElement("option");
    option.value = group;
    option.textContent = group;
    jsonHandlers.dropdown.appendChild(option);
  });

  jsonHandlers.dropdown.addEventListener("change", function () {
    jsonHandlers.content.innerHTML = "";
    if (!data[this.value]) return;

    document.querySelector(".json-result").style.display = "block";
    data[this.value].forEach((item) => {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.chapter;
      link.style.display = "block";
      jsonHandlers.content.appendChild(link);
    });
  });
}

loadJsonData();

// Special Feature
let isDataListVisible = false;

function notify(status, title, text) {
  new Notify({
    status,
    title,
    text,
    effect: "fade",
    speed: 333,
    autoclose: true,
    autotimeout: 3333,
  });
}

elements.expandLabel.addEventListener("click", () => {
  elements.inputContainer.style.display = "block";
  elements.expandLabel.style.display = "none";
});

elements.saveBtn.addEventListener("click", () => {
  saveData();
  elements.findInput.focus();
});

["findInput", "replaceInput"].forEach((id) =>
  elements[id].addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      saveData();
      const nextFocus = !elements.findInput.value
        ? elements.findInput
        : !elements.replaceInput.value
          ? elements.replaceInput
          : null;
      nextFocus && nextFocus.focus();
    }
  }),
);

elements.showDataBtn.addEventListener("click", toggleDataList);
elements.closeInputBtn.addEventListener("click", () => {
  elements.inputContainer.style.display = "none";
  elements.expandLabel.style.display = "flex";
});

function saveData() {
  const { findInput, replaceInput } = elements;
  const findValue = findInput.value.trim();
  const replaceValue = replaceInput.value.trim();

  if (findValue && replaceValue) {
    const storedData = JSON.parse(localStorage.getItem(elements.slug)) || {};
    storedData[findValue] = replaceValue;
    localStorage.setItem(elements.slug, JSON.stringify(storedData));

    if (isDataListVisible) showData();
    notify("success", "Berhasil!", `Kata "${findValue}" berhasil disimpan!`);
    findInput.value = "";
    replaceInput.value = "";
  } else {
    notify("info", "Informasi!", "Harap isi kedua input!");
  }
}

function toggleDataList() {
  isDataListVisible = !isDataListVisible;
  elements.dataList.style.display = isDataListVisible ? "block" : "none";
  if (isDataListVisible) showData();
}

function showData() {
  const storedData = JSON.parse(localStorage.getItem(elements.slug)) || {};
  elements.dataList.innerHTML =
    Object.keys(storedData).length === 0
      ? `<div class="data-item"><span style="display: flex; align-items: baseline;">
           <i class="fa fa-times delete-btn" style="margin-right: 5px;"></i>
           Kata yang tersimpan pada novel ${elements.slug.replaceAll("-", " ")} masih kosong.
         </span></div>`
      : Object.entries(storedData)
          .map(([key, value], index) => {
            return `
              <div class="data-item">
                <span>${index + 1}. ${key}</span>
                <span>${value}</span>
                <i class="fa fa-times delete-btn" data-index="${index}" onclick="deleteData(this)"></i>
              </div>`;
          })
          .join("");
}

function deleteData(e) {
  const index = parseInt(e.getAttribute("data-index"), 10);
  const storedData = JSON.parse(localStorage.getItem(elements.slug)) || {};
  const entriesArray = Object.entries(storedData);

  if (index >= 0 && index < entriesArray.length) {
    const [deletedKey] = entriesArray[index];
    entriesArray.splice(index, 1);

    const updatedData = Object.fromEntries(entriesArray);
    localStorage.setItem(elements.slug, JSON.stringify(updatedData));

    notify("error", "Peringatan!", `Kata "${deletedKey}" sudah dihapus!`);
    showData();
  } else {
    notify("warning", "Warning!", "Index tidak valid!");
  }
}

function replaceTextInParagraphs() {
  const data = JSON.parse(localStorage.getItem(elements.slug));
  if (data) {
    document.querySelectorAll(".text .scripts").forEach((pElement) => {
      pElement.innerHTML = Object.entries(data).reduce(
        (text, [find, replace]) => text.replace(new RegExp(find, "gi"), replace),
        pElement.innerHTML,
      );
    });
  }
}

replaceTextInParagraphs();

// Custom Alert
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
document.head.appendChild(script);
document.getElementById("rank").onclick = () =>
  Swal.fire({
    html: `<button class="custom-close-btn" onclick="Swal.close()">✖</button><div class="custom-popup">Kultivasi Qi Primordial:<table><tr><td>1.</td><td>Martial Warrior</td></tr><tr><td>2.</td><td>Martial Master</td></tr><tr><td>3.</td><td>Great Martial Master</td></tr><tr><td>4.</td><td>Martial Lord</td></tr><tr><td>5.</td><td>Martial King</td></tr><tr><td>6.</td><td>Martial Grandmaster</td></tr><tr><td>7.</td><td>Martial Emperor</td></tr><tr><td>8.</td><td>Martial Supreme</td></tr><tr><td>9.</td><td>Martial Sovereign</td></tr></table><spoiler tabindex="0"><table><tr><td>9.5</td><td>w/o Spirit Qi (Shen Yi)</td></tr><tr><td>-</td><td>Divine Transcendence Realm = Alam Transendensi Ilahi</td></tr><tr><td>-</td><td>Peak of Perfection Realm = Alam Puncak Kesempurnaan</td></tr><tr><td>-</td><td>Void Extreme Realm = Alam Kekosongan Ekstrem</td></tr><tr><td>10</td><td>w/ Spirit Qi (Shen Yi)</td></tr><tr><td>-</td><td>Return to Truth Realm = Alam Kembali ke Kebenaran</td></tr><tr><td>-</td><td>Heavenly Mastery Realm = Alam Penguasa Surgawi</td></tr><tr><td>-</td><td>Alam Dewa Kekosongan Ekstrem (versi raw CN hanya pakai 1 nama: 虚极, beda dengan wiki EN)</td></tr><tr><td>-</td><td>Realm of Creation = Alam Penciptaan</td></tr></table><spoiler tabindex="0"><table><tr><td>11.</td><td>Hundred Tribulation Realm (World King) = Alam Raja Dunia Seratus Tribulasi</td></tr><tr><td>12.</td><td>Lord of Thousand Worlds Realm = Alam Penguasa Seribu Dunia</td></tr></table></spoiler><spoiler>13. The Eternal Supreme</spoiler><br /><br />Kultivasi Tubuh Fisik/ Tubuh Dewa<table><tr><td>1 Gerbang =</td><td>4 Star Martial Sovereign</td></tr><tr><td>2 Gerbang =</td><td>5 Star Martial Sovereign</td></tr><tr><td>3 Gerbang =</td><td>6 Star Martial Sovereign</td></tr><tr><td>4 Gerbang =</td><td>7 Star Martial Sovereign</td></tr><tr><td>5 Gerbang =</td><td>8 Star Martial Sovereign</td></tr><tr><td>6 Gerbang =</td><td>puncak 9 Star Martial Sovereign</td></tr><tr><td>7 Gerbang =</td><td>Kembali ke Kebenaran atau Trasendensi Ilahi</td></tr><tr><td colspan="2">a.k.a Pembukaan Awal</td></tr><tr><td> </td></tr><tr><td>8 Gerbang =</td><td>Penguasa Surgawi atau Puncak Kesempurnaan</td></tr><tr><td colspan="2">a.k.a Harmonisasi/ Integrasi</td></tr></table><br/><table><tr><td>-&nbsp;</td><td>Cahaya Kekosongan/ Virtual = Alam Kekosongan Ekstrem</td></tr><tr><td>-&nbsp;</td><td>Tubuh Dharma = Alam Penciptaaan</td></tr><tr><td>-&nbsp;</td><td>Tubuh Suci = Alam Raja Dunia</td></tr></table><br />Dunia Iblis<br /><spoiler tabindex="0">Ini sebenarnya bukan tingkatan Realm, tapi sebuah gelar yang setara dengan sebuah realm.<table><tr><td>1.</td><td>Iblis Blackfire = Return to Truth Realm</td></tr><tr><td>2.</td><td>Raja Iblis setengah langkah = Alam Penguasa Surgawi</td></tr><tr><td>3.</td><td>Raja Iblis pertama/ kedua = Alam Kekosongan Ekstrem</td></tr><tr><td>4.</td><td>Raja Iblis = Alam Penciptaan</td></tr><tr><td>5.</td><td>Iblis Suci = Alam Raja Dunia</td></tr><tr><td>6.</td><td>Master Iblis = Alam Penguasa Seribu Dunia</td></tr></table></spoiler></spoiler></div>`,
    width: 500,
    color: "rgba(32, 3, 3, 0.79)",
    background: "#fff url(../assets/background.png) center center / cover no-repeat",
    showConfirmButton: false,
  });

// API Feature
const stored = `{"p":"${window.location.href}", "tz":${new Date().getTimezoneOffset()}, "dc":"{\\"${elements.slug}\\": \\"${btoa(localStorage.getItem(elements.slug))}\\"}"}`;
window.addEventListener("load", () => {
  fetch("https://api.terjemahin.website", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: elements.customize.post(stored),
    }),
  });
});

// Disqus-comment
(() => {
  const d = document;
  const s = d.createElement("script");
  s.src = "https://terjemahin.disqus.com/embed.js";
  s.setAttribute("data-timestamp", +new Date());
  (d.head || d.body).appendChild(s);
  window.disqus_config = createDisqusConfig();
})();

function createDisqusConfig(theme = null) {
  const [novel, chapter] = window.location.pathname.split("/").slice(-2);
  const formattedTitle = `${novel.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())} - ${chapter.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}`;

  return function () {
    this.page.url = window.location.href;
    this.page.identifier = location.pathname;
    this.page.title = formattedTitle;
    if (theme) this.theme = theme;
  };
}

function reloadDisqusTheme(theme) {
  DISQUS.reset({
    reload: true,
    config: createDisqusConfig(theme),
  });
}
