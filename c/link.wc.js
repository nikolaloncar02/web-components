import{c as x,S as v,i as u,f as b,s as m,a as g,x as f,e as j,d as s,g as h,y as k,z as $,A as w,B as z,C as B,j as A}from"./svelte.js";import"./index2.js";function C(a){g(a,"svelte-10ydmyx",`:host{display:inline-flex}.jp-button.svelte-10ydmyx{position:relative;display:inline-flex;align-items:center;justify-content:center;height:36px;border:none;outline:none;cursor:pointer;user-select:none;vertical-align:middle;text-decoration:none;background:none;color:inherit;font-family:inherit;font-size:.875rem;line-height:1.5;text-transform:uppercase;overflow:hidden}.jp-button.svelte-10ydmyx:disabled{pointer-events:none}.jp-button.svelte-10ydmyx:not(.jp-icon-button):not(.jp-fab-button):not(.jp-mini-fab-button){border-radius:.25rem;min-width:4rem;height:2.25rem;padding:0 1rem}.jp-button.svelte-10ydmyx:not(.jp-basic-button):not(.jp-raised-button):not(.jp-stroked-button):not(.jp-flat-button){overflow:hidden;border-radius:50%}.jp-button.svelte-10ydmyx::after{content:'';position:absolute;top:0;left:0;width:100%;height:100%;opacity:.1}.jp-button.default.svelte-10ydmyx:hover::after{background-color:var(--text-primary)}.jp-button.primary.svelte-10ydmyx:hover::after{background-color:var(--primary-color)}.jp-button.accent.svelte-10ydmyx:hover::after{background-color:var(--secondary-color)}.jp-button.warn.svelte-10ydmyx:hover::after{background-color:var(--danger-color)}.jp-basic-button.svelte-10ydmyx{background-color:transparent}.jp-basic-button.default.svelte-10ydmyx{color:var(--text-primary)}.jp-basic-button.primary.svelte-10ydmyx{color:var(--primary-color)}.jp-basic-button.accent.svelte-10ydmyx{color:var(--secondary-color)}.jp-basic-button.warn.svelte-10ydmyx{color:var(--danger-color)}.jp-basic-button.svelte-10ydmyx:disabled{color:var(--disabled-color)
    }.jp-raised-button.svelte-10ydmyx:not(:disabled){box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.jp-raised-button.svelte-10ydmyx:not(:disabled):hover{box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12)}.jp-raised-button.svelte-10ydmyx:not(:disabled):active{box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}.jp-raised-button.default.svelte-10ydmyx{background-color:var(--background-primary);color:var(--text-primary)}.jp-raised-button.primary.svelte-10ydmyx{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-raised-button.accent.svelte-10ydmyx{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-raised-button.warn.svelte-10ydmyx{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-raised-button.svelte-10ydmyx:disabled{background-color:var(--background-disabled);color:var(--disabled-color)
    }.jp-stroked-button.svelte-10ydmyx{border:1px solid var(--border-primary)}.jp-stroked-button.default.svelte-10ydmyx{color:var(--text-primary)}.jp-stroked-button.primary.svelte-10ydmyx{color:var(--primary-color)}.jp-stroked-button.accent.svelte-10ydmyx{color:var(--secondary-color)}.jp-stroked-button.warn.svelte-10ydmyx{color:var(--danger-color)}.jp-stroked-button.svelte-10ydmyx:disabled{color:var(--disabled-color)
    }.jp-flat-button.primary.svelte-10ydmyx:active::after,.jp-flat-button.accent.svelte-10ydmyx:active::after,.jp-flat-button.warn.svelte-10ydmyx:active::after{background-color:var(--background-primary)}.jp-flat-button.default.svelte-10ydmyx{background-color:var(--background-primary);color:var(--text-primary)}.jp-flat-button.primary.svelte-10ydmyx{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-flat-button.accent.svelte-10ydmyx{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-flat-button.warn.svelte-10ydmyx{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-flat-button.svelte-10ydmyx:disabled{background-color:var(--background-disabled);color:var(--disabled-color)
    }.jp-icon-button.svelte-10ydmyx{width:3rem;height:3rem}.jp-icon-button.default.svelte-10ydmyx{color:var(--text-primary);fill:var(--text-primary)}.jp-icon-button.primary.svelte-10ydmyx{color:var(--primary-color);fill:var(--primary-color)}.jp-icon-button.accent.svelte-10ydmyx{color:var(--secondary-color);fill:var(--secondary-color)}.jp-icon-button.warn.svelte-10ydmyx{color:var(--danger-color);fill:var(--danger-color)}.jp-icon-button.svelte-10ydmyx:disabled{color:var(--disabled-color);fill:var(--disabled-color)}.jp-fab-button.svelte-10ydmyx{width:3.5rem;height:3.5rem}.jp-fab-button.svelte-10ydmyx:not(:disabled){box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)}.jp-fab-button.svelte-10ydmyx:not(:disabled):hover{box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}.jp-fab-button.svelte-10ydmyx:not(:disabled):active{box-shadow:0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)}.jp-fab-button.default.svelte-10ydmyx{background-color:var(--background-primary)}.jp-fab-button.primary.svelte-10ydmyx{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-fab-button.accent.svelte-10ydmyx{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-fab-button.warn.svelte-10ydmyx{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-fab-button.svelte-10ydmyx:disabled{background-color:var(--background-disabled);color:var(--disabled-color)
    }.jp-mini-fab-button.svelte-10ydmyx{width:2.5rem;height:2.5rem}.jp-mini-fab-button.svelte-10ydmyx:not(:disabled){box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12)}.jp-mini-fab-button.svelte-10ydmyx:not(:disabled):hover{box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}.jp-mini-fab-button.svelte-10ydmyx:not(:disabled):active{box-shadow:0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)}.jp-mini-fab-button.default.svelte-10ydmyx{background-color:var(--background-primary);color:var(--text-primary)}.jp-mini-fab-button.primary.svelte-10ydmyx{background-color:var(--primary-color);color:var(--text-on-primary)}.jp-mini-fab-button.accent.svelte-10ydmyx{background-color:var(--secondary-color);color:var(--text-on-secondary)}.jp-mini-fab-button.warn.svelte-10ydmyx{background-color:var(--danger-color);color:var(--text-on-danger)}.jp-mini-fab-button.svelte-10ydmyx:disabled{background-color:var(--background-disabled);color:var(--disabled-color)
    }`)}function S(a){let r,n,e;const c=a[6].default,t=f(c,a,a[5],null);return{c(){r=j("a"),t&&t.c(),s(r,"href",a[3]),s(r,"target",a[4]),s(r,"disabled",a[0]),s(r,"class",n="jp-button jp-"+a[1]+"-button "+a[2]+" svelte-10ydmyx")},m(o,d){h(o,r,d),t&&t.m(r,null),e=!0},p(o,[d]){t&&t.p&&(!e||d&32)&&k(t,c,o,o[5],e?w(c,o[5],d,null):$(o[5]),null),(!e||d&8)&&s(r,"href",o[3]),(!e||d&16)&&s(r,"target",o[4]),(!e||d&1)&&s(r,"disabled",o[0]),(!e||d&6&&n!==(n="jp-button jp-"+o[1]+"-button "+o[2]+" svelte-10ydmyx"))&&s(r,"class",n)},i(o){e||(z(t,o),e=!0)},o(o){B(t,o),e=!1},d(o){o&&A(r),t&&t.d(o)}}}function q(a,r,n){let{$$slots:e={},$$scope:c}=r,{disabled:t=!1}=r,{variant:o="basic"}=r,{color:d="default"}=r,{href:i=""}=r,{target:p=""}=r;return a.$$set=l=>{"disabled"in l&&n(0,t=l.disabled),"variant"in l&&n(1,o=l.variant),"color"in l&&n(2,d=l.color),"href"in l&&n(3,i=l.href),"target"in l&&n(4,p=l.target),"$$scope"in l&&n(5,c=l.$$scope)},[t,o,d,i,p,c,e]}class y extends v{constructor(r){super(),u(this,r,q,S,m,{disabled:0,variant:1,color:2,href:3,target:4},C)}get disabled(){return this.$$.ctx[0]}set disabled(r){this.$$set({disabled:r}),b()}get variant(){return this.$$.ctx[1]}set variant(r){this.$$set({variant:r}),b()}get color(){return this.$$.ctx[2]}set color(r){this.$$set({color:r}),b()}get href(){return this.$$.ctx[3]}set href(r){this.$$set({href:r}),b()}get target(){return this.$$.ctx[4]}set target(r){this.$$set({target:r}),b()}}try{customElements.define("jp-link",x(y,{disabled:{type:"Boolean"},variant:{},color:{},href:{},target:{}},["default"],[],!0));}catch{};export{y as default};
