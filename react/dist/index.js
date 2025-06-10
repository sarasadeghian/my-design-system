import { createComponent as P } from "@lit/react";
import * as C from "react";
import { css as O, LitElement as U, html as z } from "lit";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A = (s) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(s, t);
  }) : customElements.define(s, t);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const u = globalThis, y = u.ShadowRoot && (u.ShadyCSS === void 0 || u.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, w = Symbol(), E = /* @__PURE__ */ new WeakMap();
let k = class {
  constructor(s, t, e) {
    if (this._$cssResult$ = !0, e !== w) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = s, this.t = t;
  }
  get styleSheet() {
    let s = this.o;
    const t = this.t;
    if (y && s === void 0) {
      const e = t !== void 0 && t.length === 1;
      e && (s = E.get(t)), s === void 0 && ((this.o = s = new CSSStyleSheet()).replaceSync(this.cssText), e && E.set(t, s));
    }
    return s;
  }
  toString() {
    return this.cssText;
  }
};
const M = (s) => new k(typeof s == "string" ? s : s + "", void 0, w), R = (s, t) => {
  if (y) s.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), o = u.litNonce;
    o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, s.appendChild(r);
  }
}, g = y ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return M(e);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: x, defineProperty: j, getOwnPropertyDescriptor: T, getOwnPropertyNames: D, getOwnPropertySymbols: q, getPrototypeOf: L } = Object, c = globalThis, $ = c.trustedTypes, N = $ ? $.emptyScript : "", _ = c.reactiveElementPolyfillSupport, p = (s, t) => s, v = { toAttribute(s, t) {
  switch (t) {
    case Boolean:
      s = s ? N : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, t) {
  let e = s;
  switch (t) {
    case Boolean:
      e = s !== null;
      break;
    case Number:
      e = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(s);
      } catch {
        e = null;
      }
  }
  return e;
} }, m = (s, t) => !x(s, t), S = { attribute: !0, type: String, converter: v, reflect: !1, useDefault: !1, hasChanged: m };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), c.litPropertyMetadata ?? (c.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class d extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = S) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), o = this.getPropertyDescriptor(t, r, e);
      o !== void 0 && j(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: o, set: a } = T(this.prototype, t) ?? { get() {
      return this[e];
    }, set(i) {
      this[e] = i;
    } };
    return { get: o, set(i) {
      const n = o == null ? void 0 : o.call(this);
      a == null || a.call(this, i), this.requestUpdate(t, n, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? S;
  }
  static _$Ei() {
    if (this.hasOwnProperty(p("elementProperties"))) return;
    const t = L(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(p("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(p("properties"))) {
      const e = this.properties, r = [...D(e), ...q(e)];
      for (const o of r) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, o] of e) this.elementProperties.set(r, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const o = this._$Eu(e, r);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const o of r) e.unshift(g(o));
    } else t !== void 0 && e.push(g(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return R(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    var r;
    const o = this.constructor.elementProperties.get(t), a = this.constructor._$Eu(t, o);
    if (a !== void 0 && o.reflect === !0) {
      const i = (((r = o.converter) == null ? void 0 : r.toAttribute) !== void 0 ? o.converter : v).toAttribute(e, o.type);
      this._$Em = t, i == null ? this.removeAttribute(a) : this.setAttribute(a, i), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var r, o;
    const a = this.constructor, i = a._$Eh.get(t);
    if (i !== void 0 && this._$Em !== i) {
      const n = a.getPropertyOptions(i), l = typeof n.converter == "function" ? { fromAttribute: n.converter } : ((r = n.converter) == null ? void 0 : r.fromAttribute) !== void 0 ? n.converter : v;
      this._$Em = i, this[i] = l.fromAttribute(e, n.type) ?? ((o = this._$Ej) == null ? void 0 : o.get(i)) ?? null, this._$Em = null;
    }
  }
  requestUpdate(t, e, r) {
    var o;
    if (t !== void 0) {
      const a = this.constructor, i = this[t];
      if (r ?? (r = a.getPropertyOptions(t)), !((r.hasChanged ?? m)(i, e) || r.useDefault && r.reflect && i === ((o = this._$Ej) == null ? void 0 : o.get(t)) && !this.hasAttribute(a._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: o, wrapped: a }, i) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, i ?? e ?? this[t]), a !== !0 || i !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var t;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [a, i] of this._$Ep) this[a] = i;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [a, i] of o) {
        const { wrapped: n } = i, l = this[a];
        n !== !0 || this._$AL.has(a) || l === void 0 || this.C(a, void 0, i, l);
      }
    }
    let e = !1;
    const r = this._$AL;
    try {
      e = this.shouldUpdate(r), e ? (this.willUpdate(r), (t = this._$EO) == null || t.forEach((o) => {
        var a;
        return (a = o.hostUpdate) == null ? void 0 : a.call(o);
      }), this.update(r)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(r);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((r) => {
      var o;
      return (o = r.hostUpdated) == null ? void 0 : o.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
}
d.elementStyles = [], d.shadowRootOptions = { mode: "open" }, d[p("elementProperties")] = /* @__PURE__ */ new Map(), d[p("finalized")] = /* @__PURE__ */ new Map(), _ == null || _({ ReactiveElement: d }), (c.reactiveElementVersions ?? (c.reactiveElementVersions = [])).push("2.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const B = { attribute: !0, type: String, converter: v, reflect: !1, hasChanged: m }, I = (s = B, t, e) => {
  const { kind: r, metadata: o } = e;
  let a = globalThis.litPropertyMetadata.get(o);
  if (a === void 0 && globalThis.litPropertyMetadata.set(o, a = /* @__PURE__ */ new Map()), r === "setter" && ((s = Object.create(s)).wrapped = !0), a.set(e.name, s), r === "accessor") {
    const { name: i } = e;
    return { set(n) {
      const l = t.get.call(this);
      t.set.call(this, n), this.requestUpdate(i, l, s);
    }, init(n) {
      return n !== void 0 && this.C(i, void 0, s, n), n;
    } };
  }
  if (r === "setter") {
    const { name: i } = e;
    return function(n) {
      const l = this[i];
      t.call(this, n), this.requestUpdate(i, l, s);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function b(s) {
  return (t, e) => typeof e == "object" ? I(s, t, e) : ((r, o, a) => {
    const i = o.hasOwnProperty(a);
    return o.constructor.createProperty(a, r), i ? Object.getOwnPropertyDescriptor(o, a) : void 0;
  })(s, t, e);
}
const J = O`
  button {
    font-family: var(--font-family);
    font-size: var(--font-size);
    font-weight: var(--font-weight);
    line-height: var(--line-height);
    border-radius: var(--border-radius);
    border: none;
    cursor: pointer;
    transition: background 0.2s, box-shadow 0.2s;
  }

  /* Variants */
  button.variant-primary {
    background: var(--primary-color);
    color: var(--on-primary-color);
    box-shadow: var(--elevation-1);
  }
  button.variant-primary:hover {
    background: var(--primary-color-hover);
    box-shadow: var(--elevation-2);
  }
  button.variant-primary:active {
    background: var(--primary-color-active);
  }

  button.variant-secondary {
    background: var(--secondary-color);
    color: var(--on-secondary-color);
    box-shadow: var(--elevation-1);
  }
  button.variant-secondary:hover {
    /* background: var(--secondary-color-hover); */
    box-shadow: var(--elevation-2);
  }

  button.variant-outline {
    background: transparent;
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
  button.variant-outline:hover {
    background: var(--primary-color);
    color: var(--on-primary-color);
  }

  /* Sizes */
  button.size-small {
    padding: var(--space-xs) var(--space-sm);
    font-size: var(--font-size-sm);
  }

  button.size-medium {
    padding: var(--space-sm) var(--space-md);
    font-size: var(--font-size);
  }

  button.size-large {
    padding: var(--space-md) var(--space-lg);
    font-size: var(--font-size-lg);
  }

  /* States */
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:focus {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
`;
var V = Object.defineProperty, K = Object.getOwnPropertyDescriptor, f = (s, t, e, r) => {
  for (var o = r > 1 ? void 0 : r ? K(t, e) : t, a = s.length - 1, i; a >= 0; a--)
    (i = s[a]) && (o = (r ? i(t, e, o) : i(o)) || o);
  return r && o && V(t, e, o), o;
};
let h = class extends U {
  constructor() {
    super(...arguments), this.variant = "primary", this.size = "medium", this.disabled = !1;
  }
  handleClick(s) {
    if (this.disabled) {
      s.preventDefault();
      return;
    }
    this.dispatchEvent(new CustomEvent("buttonClick", {
      detail: { originalEvent: s },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return z`
      <button
        type="button"
        ?disabled=${this.disabled}
        class="variant-${this.variant} size-${this.size}"
        @click=${this.handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
};
h.styles = J;
f([
  b({ type: String })
], h.prototype, "variant", 2);
f([
  b({ type: String })
], h.prototype, "size", 2);
f([
  b({ type: Boolean })
], h.prototype, "disabled", 2);
h = f([
  A("my-button")
], h);
const F = P({
  tagName: "my-button",
  elementClass: h,
  react: C,
  events: {
    onClick: "buttonClick"
  }
});
export {
  F as MyButtonReact
};
