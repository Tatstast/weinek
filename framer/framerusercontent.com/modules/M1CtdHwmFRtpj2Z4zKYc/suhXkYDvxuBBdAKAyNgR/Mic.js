let o;
var l = (r) => {
    if (!o) {
        let e = function(t, n) {
            return r.createElement("svg", {
                width: "100%",
                height: "1.5em",
                strokeWidth: 1.5,
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                color: "currentColor",
                ref: n,
                ...t
            }, r.createElement("rect", {
                x: 9,
                y: 2,
                width: 6,
                height: 12,
                rx: 3,
                stroke: "currentColor"
            }), r.createElement("path", {
                d: "M5 10v1a7 7 0 007 7v0a7 7 0 007-7v-1M12 18v4m0 0H9m3 0h3",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }));
        };
        o = r.forwardRef(e);
    }
    return o;
};
const __FramerMetadata__ = {
    exports: {
        default: {
            type: "reactComponent",
            slots: [],
            annotations: {
                framerContractVersion: "1"
            }
        },
        __FramerMetadata__: {
            type: "variable"
        }
    }
};
export {
    __FramerMetadata__,
    l as
    default
};