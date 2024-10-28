import { defineComponent, openBlock, createElementBlock, normalizeClass, normalizeStyle, createVNode, createTextVNode } from "vue";
const version = "1.0.1";
const _hoisted_1 = ["src"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    name: "Avatar"
  },
  __name: "Avatar",
  props: {
    url: {},
    round: { type: Boolean, default: false },
    size: { default: "24px" }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("img", {
        src: _ctx.url,
        alt: "",
        class: normalizeClass(["object-cover", _ctx.round ? "rounded-full" : "rounded-lg"]),
        style: normalizeStyle({ width: _ctx.size, height: _ctx.size })
      }, null, 14, _hoisted_1);
    };
  }
});
const buttonProps = {
  // 颜色
  color: {
    type: String,
    default: "blue"
  },
  /**
   * 尺寸
   * @example 'small' | 'medium' | 'large'
   */
  size: {
    type: String,
    default: "medium"
  },
  // 是否圆角
  round: {
    type: Boolean,
    default: false
  },
  // 是否扁平
  plain: {
    type: Boolean,
    default: false
  },
  // 图标
  icon: {
    type: String,
    default: ""
  }
};
const SButton = /* @__PURE__ */ defineComponent({
  name: "SButton",
  props: buttonProps,
  setup(props, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("button", {
      "class": `
          py-${size[props.size].y}
          px-${size[props.size].x}
          ${props.round ? "rounded-full" : "rounded-lg"}
          bg-${props.color}-${props.plain ? "100" : "500"}
          hover:bg-${props.color}-400
          border-${props.color}-${props.plain ? "500" : "500"}
          cursor-pointer
          border-solid
          text-${props.plain ? `${props.color}-500` : "white"}
          text-${size[props.size].text}
          hover-text-white=""
          transition="" duration-300="" ease-in-out="" transform="" hover-scale-105=""

          mx-1=""
          `
    }, [props.icon !== "" ? createVNode("i", {
      "class": `i-ic-baseline-${props.icon} p-3`
    }, null) : "", slots.default ? slots.default() : ""]);
  }
});
const TSXButton = /* @__PURE__ */ defineComponent({
  name: "TSXButton",
  render() {
    return createVNode("button", null, [createTextVNode("TSX Button")]);
  }
});
const componentPrefix = "S";
function withInstall(options) {
  options.install = (app) => {
    const { name } = options;
    if (name) {
      app.component(componentPrefix + name, options);
    }
  };
  return options;
}
const Button = withInstall(SButton);
const linkProps = {
  size: {
    type: String,
    default: "medium"
  },
  color: {
    type: String,
    default: "purple"
  }
};
const _Link = /* @__PURE__ */ defineComponent({
  name: "Link",
  props: linkProps,
  setup(props, {
    slots
  }) {
    const size = {
      small: {
        x: "2",
        y: "1",
        text: "sm"
      },
      medium: {
        x: "3",
        y: "1.5",
        text: "base"
      },
      large: {
        x: "4",
        y: "2",
        text: "lg"
      }
    };
    return () => createVNode("a", {
      "class": ` 
              hover:text-white
              cursor-pointer
              py-${size[props.size].y}
              px-${size[props.size].x}
              text-${`${props.color}-500`}
              text-${size[props.size].text}
              hover:bg-${props.color}-400
              `
    }, [createVNode("span", null, [createTextVNode(" "), slots.default ? slots.default() : "默认链接", createTextVNode(" ")])]);
  }
});
const Link = withInstall(_Link);
const entry = {
  install(app) {
    app.component(SButton.name, SButton);
    app.component(TSXButton.name, TSXButton);
  },
  version
};
export {
  _sfc_main as Avatar,
  Button,
  Link,
  SButton,
  TSXButton,
  buttonProps,
  entry as default,
  linkProps
};
