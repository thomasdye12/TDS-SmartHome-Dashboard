



function LoadDeviceScreen() {
console.log("loadpage");

(function(t) {
    function e(e) {
        for (var a, r, s = e[0], l = e[1], c = e[2], d = 0, m = []; d < s.length; d++)
            r = s[d],
            Object.prototype.hasOwnProperty.call(n, r) && n[r] && m.push(n[r][0]),
            n[r] = 0;
        for (a in l)
            Object.prototype.hasOwnProperty.call(l, a) && (t[a] = l[a]);
        u && u(e);
        while (m.length)
            m.shift()();
        return i.push.apply(i, c || []),
        o()
    }
    function o() {
        for (var t, e = 0; e < i.length; e++) {
            for (var o = i[e], a = !0, s = 1; s < o.length; s++) {
                var l = o[s];
                0 !== n[l] && (a = !1)
            }
            a && (i.splice(e--, 1),
            t = r(r.s = o[0]))
        }
        return t
    }
    var a = {}
      , n = {
        app: 0
    }
      , i = [];
    function r(e) {
        if (a[e])
            return a[e].exports;
        var o = a[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(o.exports, o, o.exports, r),
        o.l = !0,
        o.exports
    }
    r.m = t,
    r.c = a,
    r.d = function(t, e, o) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        })
    }
    ,
    r.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" === typeof t && t && t.__esModule)
            return t;
        var o = Object.create(null);
        if (r.r(o),
        Object.defineProperty(o, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var a in t)
                r.d(o, a, function(e) {
                    return t[e]
                }
                .bind(null, a));
        return o
    }
    ,
    r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        }
        : function() {
            return t
        }
        ;
        return r.d(e, "a", e),
        e
    }
    ,
    r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    ,
    r.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || []
      , l = s.push.bind(s);
    s.push = e,
    s = s.slice();
    for (var c = 0; c < s.length; c++)
        e(s[c]);
    var u = l;
    i.push([0, "chunk-vendors"]),
    o()
}
)
({
    0: function(t, e, o) {
        t.exports = o("56d7")
    },
    "0325": function(t, e, o) {
        var a = o("24fb");
        e = a(!1),
        e.push([t.i, '.clock[data-v-05ec36d6]{position:relative;display:inline-block;vertical-align:middle;width:150px;height:150px;border:2px solid;border-radius:100%;text-align:center;font-size:14px}.clock .hour[data-v-05ec36d6]{position:absolute;top:0;left:50%;width:20px;height:50%;margin-left:-10px;padding-top:4%;font-weight:400;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-box-sizing:border-box;box-sizing:border-box}.clock .hour[data-v-05ec36d6],.clock .hour>span[data-v-05ec36d6]{display:block}.clock .hour>span>i[data-v-05ec36d6]{display:block;font-style:normal}.clock .hour[data-v-05ec36d6]:nth-of-type(2){-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.clock .hour:nth-of-type(2)>span[data-v-05ec36d6]{-webkit-transform:rotate(-30deg);-ms-transform:rotate(-30deg);transform:rotate(-30deg)}.clock .hour[data-v-05ec36d6]:nth-of-type(3){-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.clock .hour:nth-of-type(3)>span[data-v-05ec36d6]{-webkit-transform:rotate(-60deg);-ms-transform:rotate(-60deg);transform:rotate(-60deg)}.clock .hour[data-v-05ec36d6]:nth-of-type(4){-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}.clock .hour:nth-of-type(4)>span[data-v-05ec36d6]{-webkit-transform:rotate(-90deg);-ms-transform:rotate(-90deg);transform:rotate(-90deg)}.clock .hour[data-v-05ec36d6]:nth-of-type(5){-webkit-transform:rotate(120deg);-ms-transform:rotate(120deg);transform:rotate(120deg)}.clock .hour:nth-of-type(5)>span[data-v-05ec36d6]{-webkit-transform:rotate(-120deg);-ms-transform:rotate(-120deg);transform:rotate(-120deg)}.clock .hour[data-v-05ec36d6]:nth-of-type(6){-webkit-transform:rotate(150deg);-ms-transform:rotate(150deg);transform:rotate(150deg)}.clock .hour:nth-of-type(6)>span[data-v-05ec36d6]{-webkit-transform:rotate(-150deg);-ms-transform:rotate(-150deg);transform:rotate(-150deg)}.clock .hour[data-v-05ec36d6]:nth-of-type(7){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.clock .hour:nth-of-type(7)>span[data-v-05ec36d6]{-webkit-transform:rotate(-180deg);-ms-transform:rotate(-180deg);transform:rotate(-180deg)}.clock .hour[data-v-05ec36d6]:nth-of-type(8){-webkit-transform:rotate(210deg);-ms-transform:rotate(210deg);transform:rotate(210deg)}.clock .hour:nth-of-type(8)>span[data-v-05ec36d6]{-webkit-transform:rotate(-210deg);-ms-transform:rotate(-210deg);transform:rotate(-210deg)}.clock .hour[data-v-05ec36d6]:nth-of-type(9){-webkit-transform:rotate(240deg);-ms-transform:rotate(240deg);transform:rotate(240deg)}.clock .hour:nth-of-type(9)>span[data-v-05ec36d6]{-webkit-transform:rotate(-240deg);-ms-transform:rotate(-240deg);transform:rotate(-240deg)}.clock .hour[data-v-05ec36d6]:nth-of-type(10){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg)}.clock .hour:nth-of-type(10)>span[data-v-05ec36d6]{-webkit-transform:rotate(-270deg);-ms-transform:rotate(-270deg);transform:rotate(-270deg)}.clock .hour[data-v-05ec36d6]:nth-of-type(11){-webkit-transform:rotate(300deg);-ms-transform:rotate(300deg);transform:rotate(300deg)}.clock .hour:nth-of-type(11)>span[data-v-05ec36d6]{-webkit-transform:rotate(-300deg);-ms-transform:rotate(-300deg);transform:rotate(-300deg)}.clock .hour[data-v-05ec36d6]:nth-of-type(12){-webkit-transform:rotate(330deg);-ms-transform:rotate(330deg);transform:rotate(330deg)}.clock .hour:nth-of-type(12)>span[data-v-05ec36d6]{-webkit-transform:rotate(-330deg);-ms-transform:rotate(-330deg);transform:rotate(-330deg)}.clock .clock-circle[data-v-05ec36d6]{width:16px;height:16px;border:2px solid #666;border-radius:100%;background-color:#fff;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box}.clock .clock-circle[data-v-05ec36d6],.clock .clock-circle[data-v-05ec36d6]:before{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.clock .clock-circle[data-v-05ec36d6]:before{display:block;content:"";width:4px;height:4px;border-radius:100%;background-color:#666}.clock .clock-hour[data-v-05ec36d6],.clock .clock-minute[data-v-05ec36d6],.clock .clock-second[data-v-05ec36d6]{position:absolute;top:15%;left:50%;display:block;width:2px;height:35%;margin-left:-1px;border-radius:5px;-webkit-transform-origin:bottom;-ms-transform-origin:bottom;transform-origin:bottom;background-color:#666}.clock .clock-hour[data-v-05ec36d6]{top:30%;width:4px;height:20%;margin-left:-2px}.clock .clock-second[data-v-05ec36d6]{width:1px}', ""]),
        t.exports = e
    },
    "053f": function(t, e, o) {
        "use strict";
        var a = o("b28b")
          , n = o.n(a);
        n.a
    },
    "0554": function(t, e, o) {
        var a = o("96a4");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = o("499e").default;
        n("17611838", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "0814": function(t, e, o) {
        var a = o("24fb");
        e = a(!1),
        e.push([t.i, ".verte-picker__cursor{border:1px solid #fff}.slider__track{height:1rem}.slider__handle{height:2rem;width:2rem;margin-top:-.5rem;-webkit-box-shadow:0 1px 1px 1px #333;box-shadow:0 1px 1px 1px #333}", ""]),
        t.exports = e
    },
    "1f25": function(t, e, o) {
        var a = o("24fb");
        e = a(!1),
        e.push([t.i, "img{display:inline!important}", ""]),
        t.exports = e
    },
    "365c": function(t, e, o) {
        "use strict";
        var a = o("5684")
          , n = o.n(a);
        n.a
    },
    "391c": function(t, e, o) {
        var a = o("24fb");
        e = a(!1),
        e.push([t.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}a{background-color:rgba(0,0,0,0)}b,strong{font-weight:bolder}small{font-size:80%}img{border-style:none}button,input,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}textarea{overflow:auto}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}[hidden],template{display:none}h2,h3,h4,p{margin:0}button{background-color:rgba(0,0,0,0);background-image:none;padding:0}button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}html{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-color:#e2e8f0}*,:after,:before,img{border-style:solid}textarea{resize:vertical}input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{color:#a0aec0}input::-moz-placeholder,textarea::-moz-placeholder{color:#a0aec0}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#a0aec0}input::-ms-input-placeholder,textarea::-ms-input-placeholder{color:#a0aec0}input::placeholder,textarea::placeholder{color:#a0aec0}[role=button],button{cursor:pointer}h2,h3,h4{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}button,input,select,textarea{padding:0;line-height:inherit;color:inherit}img,object,svg,video{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}.bg-black{background-color:#000}.bg-white{background-color:#fff}.bg-gray-200{background-color:#edf2f7}.bg-gray-300{background-color:#e2e8f0}.bg-red-600{background-color:#e53e3e}.bg-green-400{background-color:#68d391}.bg-green-600{background-color:#38a169}.bg-blue-400{background-color:#63b3ed}.hover\\:bg-gray-200:hover{background-color:#edf2f7}.hover\\:bg-gray-300:hover{background-color:#e2e8f0}.border-black{border-color:#000}.border-white{border-color:#fff}.border-gray-200{border-color:#edf2f7}.border-gray-400{border-color:#cbd5e0}.border-red-600{border-color:#e53e3e}.rounded{border-radius:.25rem}.rounded-lg{border-radius:.5rem}.rounded-xl{border-radius:1rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.border-solid{border-style:solid}.border-2{border-width:2px}.border-4{border-width:4px}.border{border-width:1px}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.block{display:block}.inline-block{display:inline-block}.flex{display:-webkit-box;display:-ms-flexbox;display:flex}.grid{display:grid}.hidden{display:none}.flex-row{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.flex-col,.flex-row{-webkit-box-direction:normal}.flex-col{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.flex-no-wrap{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.items-center{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.items-stretch{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.self-start{-ms-flex-item-align:start;align-self:flex-start}.self-center{-ms-flex-item-align:center;align-self:center}.justify-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.justify-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.justify-center{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.content-center{-ms-flex-line-pack:center;align-content:center}.flex-auto{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}.flex-grow-0{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.flex-grow{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.order-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.order-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.order-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.order-4{-webkit-box-ordinal-group:5;-ms-flex-order:4;order:4}.float-right{float:right}.font-mono{font-family:Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}.font-bold{font-weight:700}.h-6{height:1.5rem}.h-8{height:2rem}.h-10{height:2.5rem}.h-90{height:70vh}.h-200{height:200px}.h-400{height:400px}.h-auto{height:auto}.h-full{height:100%}.h-screen{height:100vh}.h-1\\/3{height:33vh}.h-1\\/2{height:50vh}.h-70p{height:70%}.h-80p{height:80%}.m-1{margin:.25rem}.m-2{margin:.5rem}.m-4{margin:1rem}.m-auto{margin:auto}.m-p5{margin:.125rem}.my-1{margin-top:.25rem;margin-bottom:.25rem}.mx-1{margin-left:.25rem;margin-right:.25rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-8{margin-left:2rem;margin-right:2rem}.mx-auto{margin-left:auto;margin-right:auto}.mt-1{margin-top:.25rem}.mr-1{margin-right:.25rem}.ml-1{margin-left:.25rem}.mt-2{margin-top:.5rem}.mr-2{margin-right:.5rem}.mb-2{margin-bottom:.5rem}.ml-2{margin-left:.5rem}.mt-4{margin-top:1rem}.mr-4{margin-right:1rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.mt-12{margin-top:3rem}.mt-16{margin-top:4rem}.-mt-6{margin-top:-1.5rem}.min-w-full{min-width:100%}.outline-none{outline:0}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.p-1{padding:.25rem}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.px-1{padding-left:.25rem;padding-right:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-4{padding-left:1rem;padding-right:1rem}.pt-1{padding-top:.25rem}.pr-1{padding-right:.25rem}.pl-1{padding-left:.25rem}.pt-2{padding-top:.5rem}.pr-2{padding-right:.5rem}.pl-2{padding-left:.5rem}.pr-3{padding-right:.75rem}.pl-3{padding-left:.75rem}.pr-4{padding-right:1rem}.pb-4{padding-bottom:1rem}.pl-4{padding-left:1rem}.pr-6{padding-right:1.5rem}.pl-6{padding-left:1.5rem}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.inset-0{top:0;right:0;bottom:0;left:0}.inset-auto{top:auto;right:auto;bottom:auto;left:auto}.top-0{top:0}.right-0{right:0}.bottom-0{bottom:0}.resize{resize:both}.shadow{-webkit-box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06);box-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px 0 rgba(0,0,0,.06)}.shadow-md{-webkit-box-shadow:0 4px 6px -1px rgba(0,0,0,.2),0 2px 4px -1px rgba(0,0,0,.06);box-shadow:0 4px 6px -1px rgba(0,0,0,.2),0 2px 4px -1px rgba(0,0,0,.06)}.shadow-xl{-webkit-box-shadow:0 20px 25px -5px rgba(0,0,0,.4),0 10px 10px -5px rgba(0,0,0,.04);box-shadow:0 20px 25px -5px rgba(0,0,0,.4),0 10px 10px -5px rgba(0,0,0,.04)}.text-left{text-align:left}.text-center{text-align:center}.text-right{text-align:right}.text-black{color:#000}.text-white{color:#fff}.text-gray-200{color:#edf2f7}.text-red-600{color:#e53e3e}.text-red-700{color:#c53030}.text-green-600{color:#38a169}.text-25{font-size:25%}.text-xs{font-size:.75rem}.text-sm{font-size:.875rem}.text-base{font-size:1rem}.text-lg{font-size:1.125rem}.text-xl{font-size:1.25rem}.text-2xl{font-size:1.5rem}.text-3xl{font-size:1.875rem}.italic{font-style:italic}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.break-all{word-break:break-all}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.w-1{width:.25rem}.w-8{width:2rem}.w-10{width:2.5rem}.w-auto{width:auto}.w-1\\/2{width:50%}.w-1\\/3{width:33.333333%}.w-2\\/3{width:66.666667%}.w-full{width:100%}.w-fit{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content}.z-0{z-index:0}.z-10{z-index:10}.z-40{z-index:40}.z-50{z-index:50}.z-51{z-index:51}.z-99{z-index:99}.transform{--transform-translate-x:0;--transform-translate-y:0;--transform-rotate:0;--transform-skew-x:0;--transform-skew-y:0;--transform-scale-x:1;--transform-scale-y:1;-webkit-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));-ms-transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y));transform:translateX(var(--transform-translate-x)) translateY(var(--transform-translate-y)) rotate(var(--transform-rotate)) skewX(var(--transform-skew-x)) skewY(var(--transform-skew-y)) scaleX(var(--transform-scale-x)) scaleY(var(--transform-scale-y))}@media (min-width:768px){.md\\:flex{display:-webkit-box;display:-ms-flexbox;display:flex}.md\\:flex-row{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row}.md\\:flex-col,.md\\:flex-row{-webkit-box-direction:normal}.md\\:flex-col{-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column}.md\\:flex-wrap{-ms-flex-wrap:wrap;flex-wrap:wrap}.md\\:order-1{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.md\\:order-2{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.md\\:order-3{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.md\\:h-80{height:20rem}.md\\:h-90{height:70vh}.md\\:h-175{height:175px}.md\\:h-auto{height:auto}.md\\:h-full{height:100%}.md\\:h-7\\/8{height:70vh}.md\\:mx-1{margin-left:.25rem;margin-right:.25rem}.md\\:mx-2{margin-left:.5rem;margin-right:.5rem}.md\\:mx-auto{margin-left:auto;margin-right:auto}.md\\:mt-0{margin-top:0}.md\\:mt-1{margin-top:.25rem}.md\\:mt-10{margin-top:2.5rem}.md\\:mt-16{margin-top:4rem}.md\\:max-h-screen{max-height:100vh}.md\\:p-2{padding:.5rem}.md\\:pr-4{padding-right:1rem}.md\\:text-sm{font-size:.875rem}.md\\:w-1\\/2{width:50%}.md\\:w-1\\/3{width:33.333333%}.md\\:w-2\\/3{width:66.666667%}.md\\:w-1\\/4{width:25%}.md\\:w-1\\/6{width:16.666667%}.md\\:w-3\\/12{width:25%}.md\\:w-5\\/12{width:41.666667%}.md\\:w-full{width:100%}}", ""]),
        t.exports = e
    },
    4898: function(t, e, o) {
        var a = o("62ea");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = o("499e").default;
        n("59a457cc", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "49ea": function(t, e, o) {
        var a = o("1f25");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = o("499e").default;
        n("19654e66", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "4a80": function(t, e, o) {
        "use strict";
        var a = o("a132")
          , n = o.n(a);
        n.a
    },
    "511e": function(t, e, o) {
        var a = o("24fb");
        e = a(!1),
        e.push([t.i, "body,html{overscroll-behavior-y:contain}*{-webkit-transition:all .1s ease-out;transition:all .1s ease-out}a{color:unset}.mute,.muteControl,.next,.play-pause,.previous,.unmute,.volume{display:inline-block}.tile-primary{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;white-space:normal;text-overflow:clip;overflow:hidden;display:table-cell;vertical-align:middle}.tile-primary,.tile-secondary{width:calc(100% - 8px);text-align:center}.tile-secondary{position:absolute}.tile-tertiary{text-align:left;position:absolute;left:8px;top:4px}.tile-edit{text-align:center;position:absolute;top:4px;right:0;cursor:pointer;width:25px;height:25px;text-align:right;font-size:24px}.header{color:hsla(0,0%,100%,.87);text-shadow:1px 1px #222}.tile{float:left;display:table-cell;width:200px;height:160px;margin:2px;color:#fff;position:relative;cursor:pointer}@supports (display:grid){.tile{position:relative;cursor:pointer;width:unset;height:unset;margin:unset}}.tile-title{position:absolute;bottom:2px;left:4px;right:4px;text-align:center;overflow:hidden;text-overflow:clip}.tile-contents{text-align:center;position:relative;width:calc(100% - 8px);padding:4px;height:calc(100% - 8px);display:table}.rotate{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}input[type=number]{width:50px;height:30px;text-align:center}.tile{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.loader{border:5px solid #f2f4f8;border-top:5px solid #81bc00;border-radius:50%;display:inline-block;width:48px;height:48px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.small{font-size:50%}", ""]),
        t.exports = e
    },
    5684: function(t, e, o) {
        var a = o("a05c");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = o("499e").default;
        n("01687b22", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "56d7": function(t, e, o) {
        "use strict";
        o.r(e);
        var a = o("2b0e")
          , n = o("bc3a")
          , i = o.n(n)
          , r = {}
          , s = i.a.create(r);
        s.interceptors.request.use((function(t) {
            return t
        }
        ), (function(t) {
            return Promise.reject(t)
        }
        )),
        s.interceptors.response.use((function(t) {
            return t
        }
        ), (function(t) {
            return Promise.reject(t)
        }
        )),
        Plugin.install = function(t) {
            t.axios = s,
            window.axios = s,
            Object.defineProperties(t.prototype, {
                axios: {
                    get: function() {
                        return s
                    }
                },
                $axios: {
                    get: function() {
                        return s
                    }
                }
            })
        }
        ,
        a["default"].use(Plugin);
        Plugin;
        var l = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "z-0",
                attrs: {
                    id: "app"
                }
            }, [t.toggleMenu ? o("DashboardMenu") : t._e(), t.toggleMenuTile ? o("MenuTile") : t._e(), t.notLoaded ? t._e() : o("Dashboard"), t.notLoaded ? o("div", {
                staticClass: "w-auto h-screen flex flex-col justify-center"
            }, [o("div", {
                staticClass: "text-white text-center text-3xl"
            }, [t._v(" Loading " + t._s(t.loadingState) + "..."), o("br"), o("span", {
                staticClass: "loader"
            })])]) : t._e()], 1)
        }
          , c = []
          , u = o("a34a")
          , d = o.n(u)
          , m = o("2f62")
          , h = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "popup-container fixed z-10 overflow-auto w-full h-screen"
            }, [o("div", {
                directives: [{
                    name: "draggable",
                    rawName: "v-draggable"
                }],
                staticClass: "menu relative z-40 w-full md:w-2/3 m-auto md:max-h-screen flex-col flex shadow-xl border-solid border-2 border-gray-400 h-full md:h-auto overflow-auto rounded-xl select-none",
                staticStyle: {
                    transition: "unset",
                    "background-color": "rgba(255,255,255,.95)"
                }
            }, [o("div", {
                staticClass: "navHeader bg-black text-white p-2 h-10"
            }, [o("div", {
                staticClass: "location flex flex-row w-full text-right justify-end"
            }, [o("div", {
                staticClass: "navLink p-1 cursor-pointer",
                on: {
                    click: t.showGridArea
                }
            }, [t._v(" " + t._s(t.local.grid) + " ")]), o("div", {
                staticClass: "navLink p-1 cursor-pointer",
                on: {
                    click: t.showSettingsArea
                }
            }, [t._v(" " + t._s(t.local.options) + " ")]), o("div", {
                staticClass: "navLink p-1 cursor-pointer",
                on: {
                    click: t.showCustomArea
                }
            }, [t._v(" " + t._s(t.local.templates) + " ")]), o("div", {
                staticClass: "navLink p-1 cursor-pointer",
                on: {
                    click: t.showImportArea
                }
            }, [t._v(" " + t._s(t.local.advanced) + " ")]), o("div", {
                staticClass: "navLink py-1 pl-6 pr-1 cursor-pointer",
                on: {
                    click: t.closeMenu
                }
            }, [t._v(" X ")])])]), o("div", {
                staticClass: "h-80p overflow-auto"
            }, [t.showGrid || t.showColor ? o("MenuGrid") : t._e(), t.showSettings ? o("MenuSettings") : t._e(), t.showCustom ? o("MenuTemplates") : t._e(), t.showImport ? o("MenuAdvanced") : t._e()], 1)])])
        }
          , f = []
          , p = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "h-full overflow-auto"
            }, [o("div", {
                staticClass: "flex flex-wrap flex-row font-bold"
            }, [o("h3", {
                staticClass: "px-2 pt-2 cursor-pointer",
                on: {
                    click: t.showLayout
                }
            }, [t._v(" " + t._s(t.local.layout) + " ")]), o("h3", {
                staticClass: "px-2 pt-2 cursor-pointer",
                on: {
                    click: t.showDevices
                }
            }, [t._v(" " + t._s(t.local.devices) + " ")]), o("h3", {
                staticClass: "px-2 pt-2 cursor-pointer",
                on: {
                    click: t.showCSS
                }
            }, [t._v(" " + t._s(t.local.css) + " ")]), o("h3", {
                staticClass: "px-2 pt-2 cursor-pointer",
                on: {
                    click: t.showDebug
                }
            }, [t._v(" " + t._s(t.local.debug) + " ")]), t.showTileBuilder ? o("h3", {
                staticClass: "px-2 pt-2 cursor-pointer",
                on: {
                    click: t.toggleTileBuilder
                }
            }, [t._v(" " + t._s(t.local.tileBuilder) + " ")]) : t._e()]), t.layoutView ? o("div", {
                staticClass: "h-full overflow-auto m-1"
            }, [o("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.layoutJSON,
                    expression: "layoutJSON"
                }],
                staticClass: "exportBox h-70p md:h-7/8 w-full shadow border p-2 text-xs font-mono",
                domProps: {
                    value: t.layoutJSON
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.layoutJSON = e.target.value)
                    }
                }
            }), t._v(" "), o("div", {
                staticClass: "inline-block shadow px-4 py-2 bg-gray-200 m-2",
                on: {
                    click: t.validateJson
                }
            }, [t._v(" " + t._s(t.local.saveLayoutJSON) + " ")]), o("div", {
                staticClass: "importError text-red-600"
            }, [t._v(" " + t._s(t.importError) + " ")])]) : t._e(), t.devicesView ? o("div", {
                staticClass: "md:flex h-full overflow-auto m-1"
            }, [o("div", {
                staticClass: "block md:flex md:flex-col h-1/3 w-auto md:w-1/3 md:h-full md:flex-wrap p-1 overflow-auto"
            }, [o("div", {
                staticClass: "block"
            }, [o("div", {
                staticClass: "text-lg w-full"
            }, [t._v(" " + t._s(t.local.devices) + " ")]), o("div", {
                staticClass: "h-1/3 md:h-7/8 overflow-auto border w-full"
            }, t._l(t.filteredDevices, (function(e) {
                return o("div", {
                    key: e.id,
                    style: {
                        padding: "8px",
                        cursor: "pointer",
                        wordBreak: "break-all",
                        margin: "4px",
                        border: "1px solid #ccc",
                        backgroundColor: "white"
                    },
                    on: {
                        click: t.selectDevice
                    }
                }, [o("div", {
                    attrs: {
                        "data-id": e.id
                    }
                }, [t._v(" " + t._s(e.label) + " ")])])
            }
            )), 0)])]), 0 != t.selectedDevice ? o("div", {
                staticClass: "block md:flex md:flex-col h-1/3 md:w-1/4 md:h-full md:flex-wrap p-1 overflow-auto"
            }, [o("div", {
                staticClass: "block"
            }, [o("div", {
                staticClass: "text-lg w-full"
            }, [t._v(" " + t._s(t.local.currentStates) + " ")]), o("div", {
                staticClass: "h-1/3 md:h-7/8 overflow-auto border"
            }, t._l(t.attributes, (function(e) {
                return o("div", {
                    key: e.name,
                    style: {
                        padding: "8px",
                        cursor: "pointer",
                        wordBreak: "break-all",
                        margin: "4px",
                        border: "1px solid #ccc",
                        backgroundColor: "white"
                    }
                }, [o("div", [o("b", [t._v(t._s(t.templates[e.name.toLowerCase()] ? t.templates[e.name.toLowerCase()] : e.name) + ":")]), t._v(" " + t._s(t.local.states[e.value] ? t.local.states[e.value] : e.value) + t._s(e.unit) + " ")])])
            }
            )), 0)])]) : t._e(), 0 != t.selectedDevice && 1 != t.layout.hideEvents ? o("div", {
                staticClass: "block md:flex md:flex-col h-1/3 md:w-5/12 md:h-full md:flex-wrap p-1 overflow-auto"
            }, [o("div", {
                staticClass: "block"
            }, [o("div", {
                staticClass: "text-lg w-full"
            }, [t._v(" " + t._s(t.local.history) + " ")]), o("div", {
                staticClass: "h-1/3 md:h-7/8 overflow-auto border"
            }, t._l(t.events, (function(e, a) {
                return o("div", {
                    key: a,
                    staticClass: "text-xs md:text-sm p-2 m-1",
                    style: {
                        cursor: "pointer",
                        wordBreak: "break-all",
                        border: "1px solid #ccc",
                        backgroundColor: "white"
                    }
                }, [o("b", [t._v(t._s(e.name))]), t._v(" " + t._s(t.local.changedTo) + " "), o("b", [t._v(t._s(e.value))]), t._v(" " + t._s(t.local.on) + " " + t._s(t.formatDate(e.date)) + " ")])
            }
            )), 0)])]) : t._e()]) : t._e(), t.cssView ? o("div", {
                staticClass: "h-auto overflow-auto m-1"
            }, [o("textarea", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.layout.customCSS,
                    expression: "layout.customCSS"
                }],
                staticClass: "cssBox h-90 md:h-7/8 w-full shadow border p-2 text-xs font-mono",
                domProps: {
                    value: t.layout.customCSS
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.layout, "customCSS", e.target.value)
                    }
                }
            }), t._v(" "), o("div", [o("div", {
                staticClass: "inline-block shadow px-4 py-2 bg-gray-200 m-2 cursor-pointer",
                on: {
                    click: t.saveCSS
                }
            }, [t._v(" " + t._s(t.local.saveCSS) + " ")])])]) : t._e(), t.debugView ? o("div", {
                staticClass: "md:flex h-full overflow-auto m-1"
            }, [o("div", {
                staticClass: "p-2 h-auto w-full"
            }, [o("div", {
                staticStyle: {}
            }, [o("label", {
                attrs: {
                    for: "switch-1"
                }
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.debugCB,
                    expression: "debugCB"
                }],
                staticClass: "outline-none",
                attrs: {
                    id: "switch-1",
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.debugCB) ? t._i(t.debugCB, null) > -1 : t.debugCB
                },
                on: {
                    change: function(e) {
                        var o = t.debugCB
                          , a = e.target
                          , n = !!a.checked;
                        if (Array.isArray(o)) {
                            var i = null
                              , r = t._i(o, i);
                            a.checked ? r < 0 && (t.debugCB = o.concat([i])) : r > -1 && (t.debugCB = o.slice(0, r).concat(o.slice(r + 1)))
                        } else
                            t.debugCB = n
                    }
                }
            }), o("span", {
                staticClass: "pl-2"
            }, [t._v(t._s(t.local.enableDebug))])])]), o("textarea", {
                staticClass: "debugBox h-90 md:h-7/8 w-full shadow border p-2 text-xs font-mono",
                attrs: {
                    disabled: ""
                },
                domProps: {
                    value: t.debugFormatted
                }
            })])]) : t._e()])
        }
          , v = []
          , b = o("c1df")
          , g = o.n(b);
        function y(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function w(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? y(Object(o), !0).forEach((function(e) {
                    C(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : y(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function C(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var _ = {
            name: "MenuAdvanced",
            data: function() {
                return {
                    importError: "",
                    importText: "",
                    layoutView: !0,
                    devicesView: !1,
                    cssView: !1,
                    debugView: !1,
                    selectedDevice: 0,
                    events: []
                }
            },
            computed: w({}, Object(m["b"])(["local", "templates", "layout", "devices", "debug", "debugOn", "showTileBuilder"]), {
                debugFormatted: function() {
                    return this.debug.join("\r\n")
                },
                filteredDevices: function() {
                    return this.devices.filter((function(t) {
                        return t.id > 0
                    }
                    ))
                },
                debugCB: {
                    get: function() {
                        return this.debugOn
                    },
                    set: function(t) {
                        this.$store.commit("toggleDebug", t)
                    }
                },
                attributes: function() {
                    var t = this
                      , e = [];
                    return 0 != this.selectedDevice ? (this.devices.find((function(e) {
                        return e.id == t.selectedDevice
                    }
                    )).attr.forEach((function(t) {
                        e.push({
                            name: Object.keys(t)[0],
                            value: t[Object.keys(t)[0]],
                            unit: t.unit
                        })
                    }
                    )),
                    e ? e.sort((function(t, e) {
                        return t.name > e.name ? 1 : e.name > t.name ? -1 : 0
                    }
                    )) : []) : []
                },
                layoutJSON: {
                    get: function() {
                        return JSON.stringify(this.layout, null, 2)
                    },
                    set: function(t) {
                        this.importText = t
                    }
                }
            }),
            mounted: function() {
                this.importText = this.layoutJSON
            },
            updated: function() {
                var t = document.getElementsByTagName("textarea")[0];
                t && (t.scrollTop = t.scrollHeight)
            },
            methods: {
                showDevices: function() {
                    this.devicesView = !0,
                    this.layoutView = !1,
                    this.cssView = !1,
                    this.debugView = !1
                },
                showLayout: function() {
                    this.devicesView = !1,
                    this.layoutView = !0,
                    this.cssView = !1,
                    this.debugView = !1
                },
                showCSS: function() {
                    this.devicesView = !1,
                    this.layoutView = !1,
                    this.cssView = !0,
                    this.debugView = !1
                },
                showDebug: function() {
                    this.devicesView = !1,
                    this.layoutView = !1,
                    this.cssView = !1,
                    this.debugView = !0
                },
                toggleTileBuilder: function() {
                    this.$store.commit("SET_TILEBUILDER", !0)
                },
                selectDevice: function(t) {
                    void 0 != t.target.dataset.id && (this.selectedDevice = t.target.dataset.id,
                    this.showHistory())
                },
                saveCSS: function() {
                    var t = document.head
                      , e = document.createElement("style");
                    e.innerHTML = this.layout.customCSS,
                    t.appendChild(e),
                    this.$store.dispatch("saveLayout")
                },
                // showHistory: function() {
                //     var t = this
                //       , e = i.a.create({
                //         baseURL: this.$store.getters.urlPrefix + this.$store.getters.urlPath,
                //         crossDomain: !0,
                //         responseType: "json",
                //         withCredentials: !0,
                //         headers: {
                //             Accept: "application/json",
                //             "Content-Type": "application/json",
                //             Authorization: "Bearer " + this.$store.state.token
                //         }
                //     });
                //     e.get("/device/" + this.selectedDevice + "/events").then((function(e) {
                //         t.events = e.data
                //     }
                //     )).catch((function(e) {
                //         t.response = e,
                //         t.$store.commit("SET_CONNECTED", !1),
                //         console.log(e)
                //     }
                //     ))
                // },
                validateJson: function() {
                    var t;
                    if (this.importError = "",
                    "" != this.importText)
                        try {
                            t = JSON.parse(this.importText),
                            this.$store.commit("SET_LAYOUT", t),
                            this.$store.dispatch("saveLayout"),
                            this.importError = "Layout Saved",
                            0 == this.layout.tiles.length && this.$store.commit("TOGGLE_MENU")
                        } catch (e) {
                            this.importError = e.message
                        }
                },
                formatDate: function(t) {
                    var e = new g.a(t);
                    e.hours(),
                    e.minutes();
                    if (1 == this.layout.clockMode) {
                        if ("DD/MM/YYYY" == this.layout.dateFormat)
                            return e.format("DD/MM/YYYY hh:mm:ss a");
                        if ("MM/DD/YYYY" == this.layout.dateFormat)
                            return e.format("MM/DD/YYYY hh:mm:ss a");
                        if ("YYYY-MM-DD" == this.layout.dateFormat)
                            return e.format("YYYY-MM-DD hh:mm:ss a")
                    } else {
                        if ("DD/MM/YYYY" == this.layout.dateFormat)
                            return e.format("DD/MM/YYYY HH:mm:ss");
                        if ("MM/DD/YYYY" == this.layout.dateFormat)
                            return e.format("MM/DD/YYYY HH:mm:ss");
                        if ("YYYY-MM-DD" == this.layout.dateFormat)
                            return e.format("YYYY-MM-DD HH:mm:ss")
                    }
                }
            }
        }
          , x = _
          , k = o("2877")
          , S = Object(k["a"])(x, p, v, !1, null, null, null)
          , O = S.exports
          , T = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "h-full overflow-auto"
            }, [o("div", {
                staticClass: "p-2"
            }, [o("h3", [t._v(" " + t._s(t.local.templateColorEditor) + " ")]), o("div", {
                staticClass: "flex flex-row flex-wrap md:p-2 md:h-full"
            }, [o("div", {
                staticClass: "h-1/3 p-2 w-full md:h-7/8 md:w-1/3 shadow overflow-auto"
            }, [o("h3", [t._v(" " + t._s(t.local.templates) + " ")]), o("div", {}, t._l(t.templatesSorted, (function(e) {
                return o("div", {
                    key: e,
                    staticClass: "shadow",
                    staticStyle: {
                        margin: "4px"
                    },
                    attrs: {
                        "data-value": e
                    }
                }, [o("div", {
                    style: {
                        padding: "8px",
                        cursor: "pointer",
                        backgroundColor: "white"
                    },
                    on: {
                        click: t.setTemplate
                    }
                }, [t._v(" " + t._s(t.templates[e]) + " ")])])
            }
            )), 0)]), "" != t.selectedTemplate ? o("div", {
                staticClass: "h-1/4 mt-2 md:mt-0 p-2 w-full md:h-auto md:w-1/3 shadow overflow-auto"
            }, [o("h3", [t._v(" " + t._s(t.local.statesFor) + " " + t._s(t.selectedTemplateName) + " ")]), o("div", {}, t._l(t.templateStates, (function(e, a) {
                return o("div", {
                    key: a,
                    staticClass: "shadow",
                    staticStyle: {
                        margin: "4px"
                    },
                    attrs: {
                        value: e
                    }
                }, [o("div", {
                    style: {
                        padding: "8px",
                        cursor: "pointer",
                        backgroundColor: "white"
                    },
                    on: {
                        click: t.setState
                    }
                }, [t._v(" " + t._s(e) + " ")])])
            }
            )), 0)]) : t._e(), "" != t.selectedTemplate && "" != t.selectedState ? o("div", {
                staticClass: "h-auto mt-2 md:mt-0 p-2 w-full md:h-auto md:w-1/3 shadow overflow-auto"
            }, [o("h3", [t._v(" " + t._s(t.local.optionsFor) + " " + t._s(t.selectedState.charAt(0).toUpperCase() + t.selectedState.slice(1)) + " ")]), o("div", {
                staticClass: "md:h-full overflow-auto"
            }, [o("div", {}, [o("h4", [t._v(" " + t._s(t.local.color) + " ")]), o("div", {
                style: {
                    backgroundColor: t.color,
                    width: "25px",
                    height: "25px",
                    border: "1px solid #ccc",
                    display: "inline-block"
                },
                on: {
                    click: t.toggleColor
                }
            }), t.color ? o("div", {
                staticClass: "inline-block p-2 text-red-700 cursor-pointer",
                on: {
                    click: function(e) {
                        t.color = ""
                    }
                }
            }, [t._v(" " + t._s(t.local.remove) + " ")]) : t._e(), t.showColor ? o("verte", {
                attrs: {
                    "show-history": !1,
                    "rgb-sliders": !0,
                    model: "rgb",
                    "menu-position": "top",
                    display: "widget",
                    draggable: !0
                },
                on: {
                    input: t.changeColor
                },
                model: {
                    value: t.color,
                    callback: function(e) {
                        t.color = e
                    },
                    expression: "color"
                }
            }) : t._e()], 1), o("div", {}, [o("h4", [t._v(" " + t._s(t.local.backgroundColor) + " ")]), o("div", {
                style: {
                    backgroundColor: t.backgroundColor,
                    width: "25px",
                    height: "25px",
                    border: "1px solid #ccc",
                    display: "inline-block"
                },
                on: {
                    click: t.toggleBGColor
                }
            }), t.backgroundColor ? o("div", {
                staticClass: "inline-block p-2 text-red-700 cursor-pointer",
                on: {
                    click: function(e) {
                        t.backgroundColor = ""
                    }
                }
            }, [t._v(" " + t._s(t.local.remove) + " ")]) : t._e(), t.showBGColor ? o("verte", {
                attrs: {
                    "show-history": !1,
                    "rgb-sliders": !0,
                    model: "rgb",
                    "menu-position": "top",
                    display: "widget",
                    draggable: !0
                },
                on: {
                    input: t.changeBackgroundColor
                },
                model: {
                    value: t.backgroundColor,
                    callback: function(e) {
                        t.backgroundColor = e
                    },
                    expression: "backgroundColor"
                }
            }) : t._e()], 1), t.allowedIconEdit ? o("div", [o("h4", [t._v(t._s(t.local.customIcon))]), o("div", {
                staticClass: "material-icons",
                class: t.customIcon,
                staticStyle: {
                    width: "50px",
                    height: "50px",
                    border: "1px solid #ccc",
                    "font-size": "48px"
                },
                on: {
                    click: t.toggleIcons
                }
            }, [t._v(" " + t._s(t.parseFont(t.customIcon)) + " ")]), t.showIcons ? o("IconPicker", {
                staticClass: "h-1/3 overflow-auto border-2",
                attrs: {
                    picked: t.customIcon
                },
                on: {
                    "handle-icon-change": t.handleIconChange
                }
            }) : t._e()], 1) : t._e()])]) : t._e(), "" != t.selectedTemplate && "" != t.selectedState ? o("div", {
                staticClass: "flex flex-wrap mt-2"
            }, [o("div", {
                staticClass: "shadow px-4 py-2 bg-gray-200 m-2 cursor-pointer",
                on: {
                    click: t.saveColorsMenu
                }
            }, [t._v(" " + t._s(t.local.save) + " ")]), o("div", {
                staticClass: "shadow px-4 py-2 bg-red-600 m-2 text-white cursor-pointer",
                on: {
                    click: t.removeState
                }
            }, [t._v(" " + t._s(t.local.removeThisState) + " ")])]) : t._e()])])])
        }
          , E = []
          , I = o("36fc")
          , j = (o("bbb4"),
        function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "iconPicker"
            }, [o("div", {
                staticStyle: {
                    "padding-left": "8px"
                }
            }, [t._v(" " + t._s(t.local.search) + ": "), o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.search,
                    expression: "search"
                }],
                staticClass: "shadow w-auto p-1 inline-block outline-none",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.search
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.search = e.target.value)
                    }
                }
            })]), o("div", {
                staticClass: "h-400 overflow-auto"
            }, t._l(t.fontsFiltered, (function(e, a) {
                return o("div", {
                    key: a,
                    staticStyle: {
                        display: "inline-block",
                        cursor: "pointer"
                    },
                    attrs: {
                        id: "fonts"
                    },
                    on: {
                        click: function(o) {
                            return t.selectIcon(e)
                        }
                    }
                }, [o("i", {
                    class: t.iconClass + e,
                    staticStyle: {
                        "font-size": "36px",
                        padding: "4px 4px 0px 4px",
                        height: "54px",
                        "line-height": "36px"
                    },
                    attrs: {
                        "data-id": e
                    }
                }, [t._v(" " + t._s(t.parseFont(e)) + " ")])])
            }
            )), 0)])
        }
        )
          , M = [];
        function D(t, e, o, a, n, i, r) {
            try {
                var s = t[i](r)
                  , l = s.value
            } catch (c) {
                return void o(c)
            }
            s.done ? e(l) : Promise.resolve(l).then(a, n)
        }
        function z(t) {
            return function() {
                var e = this
                  , o = arguments;
                return new Promise((function(a, n) {
                    var i = t.apply(e, o);
                    function r(t) {
                        D(i, a, n, r, s, "next", t)
                    }
                    function s(t) {
                        D(i, a, n, r, s, "throw", t)
                    }
                    r(void 0)
                }
                ))
            }
        }
        function P(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function L(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? P(Object(o), !0).forEach((function(e) {
                    Y(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : P(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function Y(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var $ = {
            name: "IconPicker",
            props: {
                picked: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    fonts: [],
                    search: "",
                    textHover: ""
                }
            },
            computed: L({}, Object(m["b"])(["local", "layout"]), {
                iconClass: function() {
                    return "material-icons "
                },
                fontsFiltered: function() {
                    var t = this;
                    return "" != this.search ? this.fonts.filter((function(e) {
                        return e.toLowerCase().indexOf(t.search.toLowerCase()) > -1
                    }
                    )) : this.fonts
                }
            }),
            created: function() {
                var t = this;
                return z(d.a.mark((function e() {
                    return d.a.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2,
                                i.a.get(url + "/fonts/hubitat.svg").then((function(e) {
                                    for (var o = (new DOMParser).parseFromString(e.data, "text/xml"), a = o.getElementsByTagName("glyph"), n = 0; n < a.length; n++)
                                        a[n].getAttribute("glyph-name") && t.fonts.push("he-" + a[n].getAttribute("glyph-name"));
                                    t.fonts.sort()
                                }
                                ));
                            case 2:
                                return e.next = 4,
                                i.a.get(url + "/fonts/MaterialIcons-Regular.svg").then((function(e) {
                                    for (var o = (new DOMParser).parseFromString(e.data, "text/xml"), a = o.getElementsByTagName("glyph"), n = 0; n < a.length; n++)
                                        a[n].getAttribute("glyph-name") && N(a[n].getAttribute("glyph-name")) && t.fonts.push(a[n].getAttribute("glyph-name"));
                                    t.fonts.sort()
                                }
                                ));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )))()
            },
            updated: function() {},
            mounted: function() {},
            methods: {
                parseFont: function(t) {
                    if (-1 == t.indexOf("he-"))
                        return t
                },
                selectIcon: function(t) {
                    this.$emit("handle-icon-change", t)
                }
            }
        }
          , N = function(t) {
            var e = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "_", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            if (-1 == e.indexOf(t))
                return t
        }
          , A = $
          , R = Object(k["a"])(A, j, M, !1, null, null, null)
          , H = R.exports;
        function F(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function V(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? F(Object(o), !0).forEach((function(e) {
                    B(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : F(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function B(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var G = {
            name: "MenuTemplates",
            components: {
                IconPicker: H,
                verte: I["a"]
            },
            data: function() {
                return {
                    showColors: !0,
                    showIcons: !1,
                    showColor: !1,
                    showBGColor: !1,
                    selectedTemplate: "",
                    selectedState: "",
                    color: "",
                    backgroundColor: "",
                    customIcon: "",
                    suckerCanvas: null,
                    suckerArea: [],
                    isSucking: !1
                }
            },
            computed: V({}, Object(m["b"])(["local", "layout", "bgColors", "templateStates", "templates"]), {
                allowedIconEdit: function() {
                    var t = this
                      , e = ["acceleration", "bulb", "buttons", "carbon-monoxide", "contact", "door-control", "door", "garage-control", "garage", "lock", "momentary", "motion", "multi", "outlet", "presence", "relay", "shades", "smoke", "switches", "valve", "water", "window", "fan"];
                    return void 0 != e.find((function(e) {
                        return e == t.selectedTemplate
                    }
                    ))
                },
                templatesSorted: function() {
                    return this.$store.getters.templatesSorted
                },
                templateStates: function() {
                    var t = this
                      , e = this.$store.state.templateStates.find((function(e) {
                        return e.template.toLocaleLowerCase() == t.selectedTemplate
                    }
                    ));
                    if (e.states.length < 2 && (e.states = ["default"]),
                    "mode" == this.selectedTemplate) {
                        var o = this.$store.state.devices.find((function(t) {
                            return "Modes" == t.label
                        }
                        ));
                        e.states = o.attr.map((function(t) {
                            return t.name
                        }
                        )).filter((function(t) {
                            return void 0 != t
                        }
                        ))
                    }
                    return e.states
                },
                selectedTemplateName: function() {
                    return this.templates[this.selectedTemplate]
                }
            }),
            mounted: function() {

            },
            updated: function() {},
            methods: {
                toggleColor: function() {
                    this.showColor = !this.showColor
                },
                toggleBGColor: function() {
                    this.showBGColor = !this.showBGColor
                },
                toggleIcons: function() {
                    this.showIcons = !this.showIcons
                },
                setBgColor: function(t) {
                    this.$store.commit("SET_BGCOLOR", t.target.style.backgroundColor)
                },
                closeMenu: function() {
                    this.$store.commit("TOGGLE_MENU")
                },
                saveColorsMenu: function() {
                    this.$store.dispatch("saveLayout")
                },
                setTemplate: function(t) {
                    this.selectedTemplate = t.target.parentElement.dataset.value,
                    this.selectedState = "";
                    for (var e = t.target.parentNode.parentNode.children, o = 0; o < e.length; o++)
                        e[o].children[0].style.backgroundColor = "#fff",
                        e[o].style.backgroundColor = "#fff";
                    t.target.parentNode.style.backgroundColor = "#efefef",
                    t.target.style.backgroundColor = "#efefef"
                },
                setState: function(t) {
                    var e = this;
                    this.selectedState = t.target.innerText.toLocaleLowerCase();
                    var o = this.layout.customColors.filter((function(t) {
                        return t.template == e.selectedTemplate && t.state == e.selectedState
                    }
                    ));
                    o.length > 0 && (this.color = o[0].iconColor,
                    this.backgroundColor = o[0].bgColor,
                    this.customIcon = o[0].customIcon);
                    for (var a = t.target.parentNode.parentNode.children, n = 0; n < a.length; n++)
                        a[n].children[0].style.backgroundColor = "#fff",
                        a[n].style.backgroundColor = "#fff";
                    t.target.parentNode.style.backgroundColor = "#efefef",
                    t.target.style.backgroundColor = "#efefef"
                },
                removeState: function() {
                    this.$store.commit("REMOVE_COLORS", {
                        template: this.selectedTemplate,
                        state: this.selectedState
                    }),
                    this.selectedState = "",
                    this.color = "",
                    this.backgroundColor = "",
                    this.customIcon = ""
                },
                changeColor: function(t) {
                    t && -1 == t.indexOf("hsl") && (this.color = t,
                    this.$store.commit("SET_CUSTOMCOLOR", {
                        template: this.selectedTemplate,
                        state: this.selectedState,
                        color: this.color
                    }))
                },
                changeBackgroundColor: function(t) {
                    t && -1 == t.indexOf("hsl") && (this.backgroundColor = t,
                    this.$store.commit("SET_CUSTOMBACKGROUNDCOLOR", {
                        template: this.selectedTemplate,
                        state: this.selectedState,
                        color: this.backgroundColor
                    }))
                },
                handleIconChange: function(t) {
                    this.customIcon = t,
                    this.$store.commit("SET_CUSTOMICON", {
                        template: this.selectedTemplate,
                        state: this.selectedState,
                        icon: this.customIcon
                    })
                },
                parseFont: function(t) {
                    if (t && -1 == t.indexOf("he-"))
                        return t
                }
            }
        }
          , U = G
          , W = Object(k["a"])(U, T, E, !1, null, null, null)
          , X = W.exports
          , K = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "overflow-auto"
            }, [o("h3", {
                staticClass: "p-2"
            }, [t._v(" " + t._s(t.local.options) + " ")]), o("div", {
                staticClass: "flex flex-wrap items-stretch px-2 mb-2"
            }, [o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.localization))]), o("label", {
                staticClass: "inline-block",
                attrs: {
                    for: "clock12hour"
                }
            }, [o("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.localization,
                    expression: "localization"
                }],
                staticClass: "outline-none",
                attrs: {
                    id: "localization",
                    type: "select"
                },
                on: {
                    change: function(e) {
                        var o = Array.prototype.filter.call(e.target.options, (function(t) {
                            return t.selected
                        }
                        )).map((function(t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        }
                        ));
                        t.localization = e.target.multiple ? o : o[0]
                    }
                }
            }, t._l(t.locales, (function(e) {
                return o("option", {
                    key: e,
                    domProps: {
                        value: e
                    }
                }, [t._v(t._s(e))])
            }
            )), 0)])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.clockMode))]), o("label", {
                staticClass: "inline-block",
                attrs: {
                    for: "clock12hour"
                }
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.clock12hour,
                    expression: "clock12hour"
                }],
                staticClass: "outline-none",
                attrs: {
                    id: "clock12hour",
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.clock12hour) ? t._i(t.clock12hour, null) > -1 : t.clock12hour
                },
                on: {
                    change: function(e) {
                        var o = t.clock12hour
                          , a = e.target
                          , n = !!a.checked;
                        if (Array.isArray(o)) {
                            var i = null
                              , r = t._i(o, i);
                            a.checked ? r < 0 && (t.clock12hour = o.concat([i])) : r > -1 && (t.clock12hour = o.slice(0, r).concat(o.slice(r + 1)))
                        } else
                            t.clock12hour = n
                    }
                }
            })])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.dateFormat))]), o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.dateFormat,
                    expression: "dateFormat"
                }],
                staticClass: "outline-none",
                attrs: {
                    id: "dateFormat-1",
                    type: "radio",
                    value: "MM/DD/YYYY"
                },
                domProps: {
                    checked: t._q(t.dateFormat, "MM/DD/YYYY")
                },
                on: {
                    change: function(e) {
                        t.dateFormat = "MM/DD/YYYY"
                    }
                }
            }), o("span", {}, [t._v(" MM/DD/YYYY")]), o("br"), o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.dateFormat,
                    expression: "dateFormat"
                }],
                attrs: {
                    id: "dateFormat-2",
                    type: "radio",
                    name: "dateFormat-2",
                    value: "DD/MM/YYYY"
                },
                domProps: {
                    checked: t._q(t.dateFormat, "DD/MM/YYYY")
                },
                on: {
                    change: function(e) {
                        t.dateFormat = "DD/MM/YYYY"
                    }
                }
            }), o("span", {}, [t._v(" DD/MM/YYYY")]), o("br"), o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.dateFormat,
                    expression: "dateFormat"
                }],
                attrs: {
                    id: "dateFormat-3",
                    type: "radio",
                    name: "dateFormat-3",
                    value: "YYYY-MM-DD"
                },
                domProps: {
                    checked: t._q(t.dateFormat, "YYYY-MM-DD")
                },
                on: {
                    change: function(e) {
                        t.dateFormat = "YYYY-MM-DD"
                    }
                }
            }), o("span", {}, [t._v(" YYYY-MM-DD")])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.cloudRefresh))]), o("div", {}, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.cloudRefresh,
                    expression: "cloudRefresh"
                }],
                staticClass: "shadow w-full p-2 outline-none",
                attrs: {
                    id: "cloudRefresh",
                    type: "text",
                    pattern: "-?[0-9]*(\\.[0-9]+)?"
                },
                domProps: {
                    value: t.cloudRefresh
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.cloudRefresh = e.target.value)
                    }
                }
            })])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.lanRefresh))]), o("div", {}, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.lanRefresh,
                    expression: "lanRefresh"
                }],
                staticClass: "shadow w-full p-2 outline-none",
                attrs: {
                    id: "lanRefresh",
                    type: "text",
                    pattern: "-?[0-9]*(\\.[0-9]+)?"
                },
                domProps: {
                    value: t.lanRefresh
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.lanRefresh = e.target.value)
                    }
                }
            })])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.colWidth))]), o("div", {}, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.colWidth,
                    expression: "colWidth"
                }],
                staticClass: "shadow w-full p-2 outline-none",
                attrs: {
                    id: "colWidth",
                    type: "text",
                    pattern: "-?[0-9]*(\\.[0-9]+)?"
                },
                domProps: {
                    value: t.colWidth
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.colWidth = e.target.value)
                    }
                }
            })])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.rowHeight))]), o("div", {}, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.rowHeight,
                    expression: "rowHeight"
                }],
                staticClass: "shadow w-full p-2 outline-none",
                attrs: {
                    id: "rowHeight",
                    type: "text",
                    pattern: "-?[0-9]*(\\.[0-9]+)?"
                },
                domProps: {
                    value: t.rowHeight
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.rowHeight = e.target.value)
                    }
                }
            })])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.hide3dot))]), o("label", {
                attrs: {
                    for: "hide3dot"
                }
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.hide3dot,
                    expression: "hide3dot"
                }],
                staticClass: " outline-none",
                attrs: {
                    id: "hide3dot",
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.hide3dot) ? t._i(t.hide3dot, null) > -1 : t.hide3dot
                },
                on: {
                    change: function(e) {
                        var o = t.hide3dot
                          , a = e.target
                          , n = !!a.checked;
                        if (Array.isArray(o)) {
                            var i = null
                              , r = t._i(o, i);
                            a.checked ? r < 0 && (t.hide3dot = o.concat([i])) : r > -1 && (t.hide3dot = o.slice(0, r).concat(o.slice(r + 1)))
                        } else
                            t.hide3dot = n
                    }
                }
            })])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.hideTemplateNames))]), o("label", {
                attrs: {
                    for: "hideLabels"
                }
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.hideLabels,
                    expression: "hideLabels"
                }],
                staticClass: " outline-none",
                attrs: {
                    id: "hideLabels",
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.hideLabels) ? t._i(t.hideLabels, null) > -1 : t.hideLabels
                },
                on: {
                    change: function(e) {
                        var o = t.hideLabels
                          , a = e.target
                          , n = !!a.checked;
                        if (Array.isArray(o)) {
                            var i = null
                              , r = t._i(o, i);
                            a.checked ? r < 0 && (t.hideLabels = o.concat([i])) : r > -1 && (t.hideLabels = o.slice(0, r).concat(o.slice(r + 1)))
                        } else
                            t.hideLabels = n
                    }
                }
            }), o("span", {})])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.hideIconHelperText))]), o("label", {
                attrs: {
                    for: "hideIconText"
                }
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.hideIconText,
                    expression: "hideIconText"
                }],
                attrs: {
                    id: "hideIconText",
                    type: "checkbox",
                    clas: " outline-none"
                },
                domProps: {
                    checked: Array.isArray(t.hideIconText) ? t._i(t.hideIconText, null) > -1 : t.hideIconText
                },
                on: {
                    change: function(e) {
                        var o = t.hideIconText
                          , a = e.target
                          , n = !!a.checked;
                        if (Array.isArray(o)) {
                            var i = null
                              , r = t._i(o, i);
                            a.checked ? r < 0 && (t.hideIconText = o.concat([i])) : r > -1 && (t.hideIconText = o.slice(0, r).concat(o.slice(r + 1)))
                        } else
                            t.hideIconText = n
                    }
                }
            }), o("span", {})])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.hideTextShadow))]), o("label", {
                attrs: {
                    for: "hideTextShadow"
                }
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.hideTextShadow,
                    expression: "hideTextShadow"
                }],
                attrs: {
                    id: "hideTextShadow",
                    type: "checkbox",
                    clas: " outline-none"
                },
                domProps: {
                    checked: Array.isArray(t.hideTextShadow) ? t._i(t.hideTextShadow, null) > -1 : t.hideTextShadow
                },
                on: {
                    change: function(e) {
                        var o = t.hideTextShadow
                          , a = e.target
                          , n = !!a.checked;
                        if (Array.isArray(o)) {
                            var i = null
                              , r = t._i(o, i);
                            a.checked ? r < 0 && (t.hideTextShadow = o.concat([i])) : r > -1 && (t.hideTextShadow = o.slice(0, r).concat(o.slice(r + 1)))
                        } else
                            t.hideTextShadow = n
                    }
                }
            }), o("span", {})])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.hideHistory))]), o("label", {
                attrs: {
                    for: "hideEvents"
                }
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.hideEvents,
                    expression: "hideEvents"
                }],
                staticClass: " outline-none",
                attrs: {
                    id: "hideEvents",
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.hideEvents) ? t._i(t.hideEvents, null) > -1 : t.hideEvents
                },
                on: {
                    change: function(e) {
                        var o = t.hideEvents
                          , a = e.target
                          , n = !!a.checked;
                        if (Array.isArray(o)) {
                            var i = null
                              , r = t._i(o, i);
                            a.checked ? r < 0 && (t.hideEvents = o.concat([i])) : r > -1 && (t.hideEvents = o.slice(0, r).concat(o.slice(r + 1)))
                        } else
                            t.hideEvents = n
                    }
                }
            }), o("span", {})])])]), o("div", {
                staticClass: "w-1/2 md:w-1/4 shadow"
            }, [o("div", {
                staticClass: "p-4"
            }, [o("h4", [t._v(t._s(t.local.noDefaultColors))]), o("label", {
                attrs: {
                    for: "noColors"
                }
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.noColors,
                    expression: "noColors"
                }],
                staticClass: " outline-none",
                attrs: {
                    id: "noColors",
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.noColors) ? t._i(t.noColors, null) > -1 : t.noColors
                },
                on: {
                    change: function(e) {
                        var o = t.noColors
                          , a = e.target
                          , n = !!a.checked;
                        if (Array.isArray(o)) {
                            var i = null
                              , r = t._i(o, i);
                            a.checked ? r < 0 && (t.noColors = o.concat([i])) : r > -1 && (t.noColors = o.slice(0, r).concat(o.slice(r + 1)))
                        } else
                            t.noColors = n
                    }
                }
            }), o("span", {})])])])])])
        }
          , J = [];
        function q(t, e, o, a, n, i, r) {
            try {
                var s = t[i](r)
                  , l = s.value
            } catch (c) {
                return void o(c)
            }
            s.done ? e(l) : Promise.resolve(l).then(a, n)
        }
        function Z(t) {
            return function() {
                var e = this
                  , o = arguments;
                return new Promise((function(a, n) {
                    var i = t.apply(e, o);
                    function r(t) {
                        q(i, a, n, r, s, "next", t)
                    }
                    function s(t) {
                        q(i, a, n, r, s, "throw", t)
                    }
                    r(void 0)
                }
                ))
            }
        }
        function Q(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function tt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Q(Object(o), !0).forEach((function(e) {
                    et(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : Q(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function et(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var ot = {
            name: "MenuSettings",
            data: function() {
                return {
                    showColors: !0,
                    showCustom: !1,
                    showImport: !1,
                    showSettings: !1,
                    showGrid: !0,
                    showColor: !1,
                    showBGColor: !1,
                    backgroundColor: ""
                }
            },
            computed: tt({}, Object(m["b"])(["local", "layout", "bgColors", "locales"]), {
                localization: {
                    get: function() {
                        return this.$store.state.layout.localization
                    },
                    set: function() {
                        var t = Z(d.a.mark((function t(e) {
                            return d.a.wrap((function(t) {
                                while (1)
                                    switch (t.prev = t.next) {
                                    case 0:
                                        return this.$store.commit("SET_LOCALIZATION", e),
                                        t.next = 3,
                                        this.$store.dispatch("loadLocalization", this.layout);
                                    case 3:
                                    case "end":
                                        return t.stop()
                                    }
                            }
                            ), t, this)
                        }
                        )));
                        function e(e) {
                            return t.apply(this, arguments)
                        }
                        return e
                    }()
                },
                clock12hour: {
                    get: function() {
                        return this.$store.state.layout.clockMode
                    },
                    set: function(t) {
                        this.$store.commit("SET_CLOCKMODE", t)
                    }
                },
                hideIconText: {
                    get: function() {
                        return void 0 != this.$store.state.layout.hideIconText && this.$store.state.layout.hideIconText
                    },
                    set: function(t) {
                        this.$store.commit("SET_HIDEICONTEXT", t)
                    }
                },
                hideTextShadow: {
                    get: function() {
                        return void 0 != this.$store.state.layout.hideTextShadow && this.$store.state.layout.hideTextShadow
                    },
                    set: function(t) {
                        this.$store.commit("SET_HIDETEXTSHADOW", t)
                    }
                },
                hideEvents: {
                    get: function() {
                        return void 0 != this.$store.state.layout.hideEvents && this.$store.state.layout.hideEvents
                    },
                    set: function(t) {
                        this.$store.commit("SET_HIDEEVENTS", t)
                    }
                },
                noColors: {
                    get: function() {
                        return void 0 != this.$store.state.layout.noColors && this.$store.state.layout.noColors
                    },
                    set: function(t) {
                        this.$store.commit("SET_NOCOLORS", t)
                    }
                },
                goBack: {
                    get: function() {
                        return void 0 == this.$store.state.layout.goBack || this.$store.state.layout.goBack
                    },
                    set: function(t) {
                        this.$store.commit("SET_GOBACK", t)
                    }
                },
                hide3dot: {
                    get: function() {
                        return void 0 != this.$store.state.layout.hide3dot && this.$store.state.layout.hide3dot
                    },
                    set: function(t) {
                        this.$store.commit("SET_HIDE3DOT", t)
                    }
                },
                hideLabels: {
                    get: function() {
                        return void 0 != this.$store.state.layout.hideLabels && this.$store.state.layout.hideLabels
                    },
                    set: function(t) {
                        this.$store.commit("SET_HIDELABELS", t)
                    }
                },
                dateFormat: {
                    get: function() {
                        return void 0 == this.$store.state.layout.dateFormat ? "MM/DD/YYYY" : this.$store.state.layout.dateFormat
                    },
                    set: function(t) {
                        this.$store.commit("SET_DATEFORMAT", t)
                    }
                },
                cloudRefresh: {
                    get: function() {
                        return this.$store.state.layout.cloudRefresh
                    },
                    set: function(t) {
                        this.$store.commit("SET_CLOUDREFRESH", t)
                    }
                },
                lanRefresh: {
                    get: function() {
                        return this.$store.state.layout.lanRefresh
                    },
                    set: function(t) {
                        this.$store.commit("SET_LANREFRESH", t)
                    }
                },
                rowHeight: {
                    get: function() {
                        return void 0 == this.$store.state.layout.rowHeight ? "" : this.$store.state.layout.rowHeight
                    },
                    set: function(t) {
                        this.$store.commit("SET_ROWHEIGHT", t)
                    }
                },
                colWidth: {
                    get: function() {
                        return void 0 == this.$store.state.layout.colWidth ? "" : this.$store.state.layout.colWidth
                    },
                    set: function(t) {
                        this.$store.commit("SET_COLWIDTH", t)
                    }
                },
                fontSize: {
                    get: function() {
                        return void 0 == this.$store.state.layout.fontSize ? 12 : parseInt(this.$store.state.layout.fontSize)
                    },
                    set: function(t) {
                        this.$store.commit("SET_FONTSIZE", t)
                    }
                },
                iconSize: {
                    get: function() {
                        return void 0 == this.$store.state.layout.iconSize ? 32 : parseInt(this.$store.state.layout.iconSize)
                    },
                    set: function(t) {
                        this.$store.commit("SET_ICONSIZE", t)
                    }
                },
                gridGap: {
                    get: function() {
                        return void 0 == this.$store.state.layout.gridGap ? 8 : this.$store.state.layout.gridGap
                    },
                    set: function(t) {
                        this.$store.commit("SET_GRIDGAP", t)
                    }
                },
                roundedCorners: {
                    get: function() {
                        return void 0 == this.$store.state.layout.roundedCorners ? 8 : this.$store.state.layout.roundedCorners
                    },
                    set: function(t) {
                        this.$store.commit("SET_ROUNDEDCORNERS", t)
                    }
                },
                backgroundImage: {
                    get: function() {
                        return this.$store.state.layout.background
                    },
                    set: function(t) {
                        this.$store.commit("SET_BACKGROUND", t)
                    }
                }
            }),
            mounted: function() {},
            updated: function() {},
            methods: {
                setBgColor: function(t) {
                    this.$store.commit("SET_BGCOLOR", t.target.style.backgroundColor)
                },
                closeMenu: function() {
                    this.$store.commit("TOGGLE_MENU")
                },
                decreaseCols: function() {
                    this.$store.commit("SET_COLS", parseInt(this.layout.cols) - 1)
                },
                increaseCols: function() {
                    this.$store.commit("SET_COLS", parseInt(this.layout.cols) + 1)
                },
                decreaseRows: function() {
                    this.$store.commit("SET_ROWS", parseInt(this.layout.rows) - 1)
                },
                increaseRows: function() {
                    this.$store.commit("SET_ROWS", parseInt(this.layout.rows) + 1)
                },
                decreaseFont: function() {
                    this.fontSize--
                },
                increaseFont: function() {
                    this.fontSize++
                },
                decreaseIcon: function() {
                    this.iconSize--
                },
                increaseIcon: function() {
                    this.iconSize++
                },
                decreaseGap: function() {
                    this.gridGap--
                },
                increaseGap: function() {
                    this.gridGap++
                },
                decreaseRound: function() {
                    this.roundedCorners--
                },
                increaseRound: function() {
                    this.roundedCorners++
                },
                showImportArea: function() {
                    this.showSettings = !1,
                    this.showGrid = !1,
                    this.showColors = !1,
                    this.showCustom = !1,
                    this.showImport = !0
                },
                showCustomArea: function() {
                    this.showSettings = !1,
                    this.showGrid = !1,
                    this.showColors = !1,
                    this.showCustom = !0,
                    this.showImport = !1
                },
                showSettingsArea: function() {
                    this.showSettings = !0,
                    this.showGrid = !1,
                    this.showColors = !1,
                    this.showCustom = !1,
                    this.showImport = !1
                },
                showGridArea: function() {
                    this.showSettings = !1,
                    this.showGrid = !0,
                    this.showColors = !0,
                    this.showCustom = !1,
                    this.showImport = !1
                }
            }
        }
          , at = ot
          , nt = Object(k["a"])(at, K, J, !1, null, null, null)
          , it = nt.exports
          , rt = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "overflow-auto"
            }, [o("div", {
                staticClass: "gridSize block p-2"
            }, [o("div", {
                staticClass: "block w-full"
            }, [t._v(" " + t._s(t.local.gridSize) + " ")]), o("div", {
                staticClass: "flex flex-row flex-wrap justify-center"
            }, [o("div", {
                staticClass: "text-center w-1/2 md:w-1/6"
            }, [o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.decreaseCols
                }
            }, [o("i", {
                staticClass: "material-icons cols down"
            }, [t._v(" remove ")])]), o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.increaseCols
                }
            }, [o("i", {
                staticClass: "material-icons cols up"
            }, [t._v(" add ")])])]), o("div", [o("h4", {
                staticClass: "block text-center w-auto"
            }, [o("span", {
                staticClass: "value"
            }, [t._v(" " + t._s(t.layout.cols) + " ")]), t._v(" " + t._s(t.local.columns) + " ")])])]), o("div", {
                staticClass: "text-center w-1/2 md:w-1/6"
            }, [o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.decreaseRows
                }
            }, [o("i", {
                staticClass: "material-icons rows down"
            }, [t._v(" remove ")])]), o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.increaseRows
                }
            }, [o("i", {
                staticClass: "material-icons rows up"
            }, [t._v(" add ")])])]), o("div", [o("h4", {
                staticClass: "block text-center w-auto"
            }, [o("span", {
                staticClass: "value"
            }, [t._v(" " + t._s(t.layout.rows) + " ")]), t._v(" " + t._s(t.local.rows) + " ")])])]), o("div", {
                staticClass: "text-center w-1/2 md:w-1/6"
            }, [o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.decreaseFont
                }
            }, [o("i", {
                staticClass: "material-icons rows down"
            }, [t._v(" remove ")])]), o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.increaseFont
                }
            }, [o("i", {
                staticClass: "material-icons rows up"
            }, [t._v(" add ")])])]), o("div", [o("h4", {
                staticClass: "block text-center w-auto"
            }, [t._v(" " + t._s(t.local.fontSize) + " "), o("span", {
                staticClass: "value"
            }, [t._v(" " + t._s(t.fontSize) + " ")])])])]), o("div", {
                staticClass: "text-center w-1/2 md:w-1/6"
            }, [o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.decreaseIcon
                }
            }, [o("i", {
                staticClass: "material-icons rows down"
            }, [t._v(" remove ")])]), o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.increaseIcon
                }
            }, [o("i", {
                staticClass: "material-icons rows up"
            }, [t._v(" add ")])])]), o("div", [o("h4", {
                staticClass: "block text-center w-auto"
            }, [t._v(" " + t._s(t.local.iconSize) + " "), o("span", {
                staticClass: "value"
            }, [t._v(" " + t._s(t.iconSize) + " ")])])])]), o("div", {
                staticClass: "text-center w-1/2 md:w-1/6"
            }, [o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.decreaseGap
                }
            }, [o("i", {
                staticClass: "material-icons rows down"
            }, [t._v(" remove ")])]), o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.increaseGap
                }
            }, [o("i", {
                staticClass: "material-icons rows up"
            }, [t._v(" add ")])])]), o("div", [o("h4", {
                staticClass: "block text-center w-auto"
            }, [t._v(" " + t._s(t.local.gridGap) + " "), o("span", {
                staticClass: "value"
            }, [t._v(" " + t._s(t.gridGap) + " ")])])])]), o("div", {
                staticClass: "text-center w-1/2 md:w-1/6"
            }, [o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.decreaseRound
                }
            }, [o("i", {
                staticClass: "material-icons rows down"
            }, [t._v(" remove ")])]), o("button", {
                staticClass: "flex shadow p-3 m-2 rounded-lg hover:bg-gray-300",
                on: {
                    click: t.increaseRound
                }
            }, [o("i", {
                staticClass: "material-icons rows up"
            }, [t._v(" add ")])])]), o("div", [o("h4", {
                staticClass: "block text-center w-auto"
            }, [t._v(" " + t._s(t.local.rounded) + " "), o("span", {
                staticClass: "value"
            }, [t._v(" " + t._s(t.roundedCorners) + " ")])])])])])]), o("div", {
                staticClass: "block p-2 mt-4"
            }, [o("div", {
                staticClass: "block w-full"
            }, [t._v(" " + t._s(t.local.gridBackground) + " ")]), o("div", {
                staticClass: "w-auto flex flex-row flex-wrap",
                on: {
                    click: t.setBgColor
                }
            }, t._l(t.bgColors, (function(e, a) {
                return o("div", {
                    key: a,
                    staticClass: "w-1/2 md:w-1/6 truncate",
                    attrs: {
                        value: e
                    }
                }, [o("div", {
                    staticClass: "m-p5 shadow"
                }, [o("div", {
                    style: {
                        backgroundColor: e,
                        textShadow: "1px 1px #fff",
                        padding: ".5rem",
                        cursor: "pointer",
                        height: "calc(100% - 16px)"
                    }
                }, [t._v(" " + t._s(t.local.colors[e]) + " ")])])])
            }
            )), 0), o("div", [o("div", {
                staticClass: "block p-2"
            }, [o("label", {
                attrs: {
                    for: "backgroundColor"
                }
            }, [t._v(" " + t._s(t.local.customColor) + " ")]), o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.layout.bgColor,
                    expression: "layout.bgColor"
                }],
                staticClass: "shadow w-full p-2 outline-none border-gray-400 border",
                attrs: {
                    id: "backgroundColor",
                    type: "text"
                },
                domProps: {
                    value: t.layout.bgColor
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.layout, "bgColor", e.target.value)
                    }
                }
            })])]), o("div", [o("div", {
                staticClass: "p-2 block"
            }, [o("label", {
                staticClass: "block",
                attrs: {
                    for: "backgroundImage"
                }
            }, [t._v(" " + t._s(t.local.backgroundImage) + " ")]), o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.backgroundImage,
                    expression: "backgroundImage"
                }],
                staticClass: "shadow w-full p-2 outline-none border-gray-400 border",
                attrs: {
                    id: "backgroundImage",
                    type: "text"
                },
                domProps: {
                    value: t.backgroundImage
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.backgroundImage = e.target.value)
                    }
                }
            })])])])])
        }
          , st = [];
        function lt(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function ct(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? lt(Object(o), !0).forEach((function(e) {
                    ut(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : lt(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function ut(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var dt = {
            name: "MenuGrid",
            data: function() {
                return {
                    backgroundColor: ""
                }
            },
            computed: ct({}, Object(m["b"])(["local", "layout", "bgColors"]), {
                fontSize: {
                    get: function() {
                        return parseInt(this.$store.state.layout.fontSize)
                    },
                    set: function(t) {
                        this.$store.commit("SET_FONTSIZE", t)
                    }
                },
                iconSize: {
                    get: function() {
                        return void 0 == this.$store.state.layout.iconSize ? 32 : parseInt(this.$store.state.layout.iconSize)
                    },
                    set: function(t) {
                        this.$store.commit("SET_ICONSIZE", t)
                    }
                },
                gridGap: {
                    get: function() {
                        return this.$store.state.layout.gridGap
                    },
                    set: function(t) {
                        this.$store.commit("SET_GRIDGAP", t)
                    }
                },
                roundedCorners: {
                    get: function() {
                        return this.$store.state.layout.roundedCorners
                    },
                    set: function(t) {
                        this.$store.commit("SET_ROUNDEDCORNERS", t)
                    }
                },
                backgroundImage: {
                    get: function() {
                        return this.$store.state.layout.background
                    },
                    set: function(t) {
                        this.$store.commit("SET_BACKGROUND", t)
                    }
                }
            }),
            mounted: function() {},
            updated: function() {},
            methods: {
                setBgColor: function(t) {
                    this.$store.commit("SET_BGCOLOR", t.target.style.backgroundColor)
                },
                decreaseCols: function() {
                    this.$store.commit("SET_COLS", parseInt(this.layout.cols) - 1)
                },
                increaseCols: function() {
                    this.$store.commit("SET_COLS", parseInt(this.layout.cols) + 1)
                },
                decreaseRows: function() {
                    this.$store.commit("SET_ROWS", parseInt(this.layout.rows) - 1)
                },
                increaseRows: function() {
                    this.$store.commit("SET_ROWS", parseInt(this.layout.rows) + 1)
                },
                decreaseFont: function() {
                    this.fontSize--
                },
                increaseFont: function() {
                    this.fontSize++
                },
                decreaseIcon: function() {
                    this.iconSize--
                },
                increaseIcon: function() {
                    this.iconSize++
                },
                decreaseGap: function() {
                    this.gridGap--
                },
                increaseGap: function() {
                    this.gridGap++
                },
                decreaseRound: function() {
                    this.roundedCorners--
                },
                increaseRound: function() {
                    this.roundedCorners++
                }
            }
        }
          , mt = dt
          , ht = Object(k["a"])(mt, rt, st, !1, null, null, null)
          , ft = ht.exports;
        function pt(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function vt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? pt(Object(o), !0).forEach((function(e) {
                    bt(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : pt(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function bt(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var gt = {
            name: "Menu",
            components: {
                MenuAdvanced: O,
                MenuTemplates: X,
                MenuSettings: it,
                MenuGrid: ft
            },
            data: function() {
                return {
                    showColors: !0,
                    showCustom: !1,
                    showImport: !1,
                    showSettings: !1,
                    showGrid: !0,
                    showColor: !1,
                    showBGColor: !1
                }
            },
            computed: vt({}, Object(m["b"])(["local", "layout", "bgColors"]), {
                fontSize: {
                    get: function() {
                        return parseInt(this.$store.state.layout.fontSize)
                    },
                    set: function(t) {
                        this.$store.commit("SET_FONTSIZE", t)
                    }
                },
                iconSize: {
                    get: function() {
                        return void 0 == this.$store.state.layout.iconSize ? 32 : parseInt(this.$store.state.layout.iconSize)
                    },
                    set: function(t) {
                        this.$store.commit("SET_ICONSIZE", t)
                    }
                },
                gridGap: {
                    get: function() {
                        return this.$store.state.layout.gridGap
                    },
                    set: function(t) {
                        this.$store.commit("SET_GRIDGAP", t)
                    }
                },
                roundedCorners: {
                    get: function() {
                        return this.$store.state.layout.roundedCorners
                    },
                    set: function(t) {
                        this.$store.commit("SET_ROUNDEDCORNERS", t)
                    }
                },
                backgroundImage: {
                    get: function() {
                        return this.$store.state.layout.background
                    },
                    set: function(t) {
                        this.$store.commit("SET_BACKGROUND", t)
                    }
                }
            }),
            created: function() {
                document.addEventListener("keyup", this.escKey)
            },
            mounted: function() {},
            updated: function() {},
            beforeDestroy: function() {
                document.removeEventListener("keyup", this.escKey)
            },
            methods: {
                escKey: function(t) {
                    27 === t.keyCode && this.closeMenu()
                },
                setBgColor: function(t) {
                    this.$store.commit("SET_BGCOLOR", t.target.style.backgroundColor)
                },
                closeMenu: function() {
                    this.$store.commit("TOGGLE_MENU")
                },
                decreaseCols: function() {
                    this.$store.commit("SET_COLS", parseInt(this.layout.cols) - 1)
                },
                increaseCols: function() {
                    this.$store.commit("SET_COLS", parseInt(this.layout.cols) + 1)
                },
                decreaseRows: function() {
                    this.$store.commit("SET_ROWS", parseInt(this.layout.rows) - 1)
                },
                increaseRows: function() {
                    this.$store.commit("SET_ROWS", parseInt(this.layout.rows) + 1)
                },
                decreaseFont: function() {
                    this.fontSize--
                },
                increaseFont: function() {
                    this.fontSize++
                },
                decreaseIcon: function() {
                    this.iconSize--
                },
                increaseIcon: function() {
                    this.iconSize++
                },
                decreaseGap: function() {
                    this.gridGap--
                },
                increaseGap: function() {
                    this.gridGap++
                },
                decreaseRound: function() {
                    this.roundedCorners--
                },
                increaseRound: function() {
                    this.roundedCorners++
                },
                showImportArea: function() {
                    this.showSettings = !1,
                    this.showGrid = !1,
                    this.showColors = !1,
                    this.showCustom = !1,
                    this.showImport = !0
                },
                showCustomArea: function() {
                    this.showSettings = !1,
                    this.showGrid = !1,
                    this.showColors = !1,
                    this.showCustom = !0,
                    this.showImport = !1
                },
                showSettingsArea: function() {
                    this.showSettings = !0,
                    this.showGrid = !1,
                    this.showColors = !1,
                    this.showCustom = !1,
                    this.showImport = !1
                },
                showGridArea: function() {
                    this.showSettings = !1,
                    this.showGrid = !0,
                    this.showColors = !0,
                    this.showCustom = !1,
                    this.showImport = !1
                }
            }
        }
          , yt = gt
          , wt = Object(k["a"])(yt, h, f, !1, null, null, null)
          , Ct = wt.exports
          , _t = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", [o("div", {
                staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-screen"
            }, [o("div", {
                directives: [{
                    name: "draggable",
                    rawName: "v-draggable"
                }],
                staticClass: "menu relative z-40 w-full md:w-2/3 m-auto md:max-h-screen flex-col flex shadow-xl border-solid border-2 border-gray-400 h-full md:h-auto overflow-auto rounded-xl select-none",
                staticStyle: {
                    transition: "unset",
                    "background-color": "rgba(255,255,255,.95)"
                }
            }, [o("div", {
                staticClass: "navHeader bg-black text-white p-2 w-full h-10"
            }, [o("div", {
                staticClass: "navLink float-right px-1 cursor-pointer",
                on: {
                    click: t.closeMenu
                }
            }, [t._v(" X ")]), -1 == t.menuTile.id ? o("div", {
                staticClass: "navLink float-right px-1 cursor-pointer mr-4",
                on: {
                    click: t.addTile
                }
            }, [t._v(" " + t._s(t.local.addTile) + " ")]) : t._e(), o("div", {
                staticClass: "flex flex-auto flex-row"
            }, [-1 == t.menuTile.id ? o("div", {
                staticClass: "pl-2"
            }, [t._v(" " + t._s(t.local.addATile) + " ")]) : o("div", {
                staticClass: "flex-no-wrap"
            }, [o("span", {
                staticStyle: {
                    cursor: "pointer"
                },
                on: {
                    click: t.previousTile
                }
            }, [o("i", {
                staticClass: "material-icons he-previous2"
            })]), o("span", {
                staticStyle: {
                    "vertical-align": "top"
                }
            }, [t._v(t._s(t.local.editTileID) + " " + t._s(t.menuTile.id))]), o("span", {
                staticStyle: {
                    cursor: "pointer"
                },
                on: {
                    click: t.nextTile
                }
            }, [o("i", {
                staticClass: "material-icons he-next2"
            })])]), -1 != t.menuTile.id && 1 != t.layout.hideEvents && parseInt(t.device.id) > 0 && !t.historyArea ? o("div", {
                staticClass: "navLink flex-auto text-right pr-6"
            }, [o("span", {
                staticClass: "cursor-pointer",
                on: {
                    click: t.showHistory
                }
            }, [t._v(" " + t._s(t.local.history) + " ")])]) : t._e(), -1 != t.menuTile.id && t.historyArea ? o("div", {
                staticClass: "navLink flex-auto text-right pr-6 cursor-pointer",
                on: {
                    click: t.hideHistory
                }
            }, [t._v(" " + t._s(t.local.tile) + " ")]) : t._e()])]), t.tileArea ? o("div", {
                staticClass: "tileArea overflow-auto h-80p md:h-auto md:max-h-screen"
            }, [o("div", {
                staticClass: "tileEditArea overflow-auto"
            }, [o("div", {
                staticClass: "location md:flex md:flex-row w-full"
            }, [o("div", {
                staticClass: "config flex w-full md:w-1/2 flex-wrap content-center pb-4"
            }, [o("div", {
                staticClass: "text-center w-full md:w-1/2"
            }, [o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow-md p-3 m-1 rounded-lg hover:bg-gray-300 bg-white",
                on: {
                    click: t.decreaseRow
                }
            }, [o("i", {
                staticClass: "material-icons colNum down"
            }, [t._v(" keyboard_arrow_up ")])])]), o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow-md p-3 m-1 rounded-lg hover:bg-gray-300 bg-white",
                on: {
                    click: t.decreaseCol
                }
            }, [o("i", {
                staticClass: "material-icons colNum down"
            }, [t._v(" keyboard_arrow_left ")])]), o("div", {
                staticClass: "flex px-1 self-center flex-wrap flex-col"
            }, [o("div", {
                staticClass: "w-full"
            }, [t._v(" " + t._s(t.local.column) + " "), o("span", {
                staticClass: "value"
            }, [t._v(" " + t._s(t.col) + " ")])]), o("div", {
                staticClass: "w-full"
            }, [t._v(" " + t._s(t.local.row) + " "), o("span", {
                staticClass: "value"
            }, [t._v(" " + t._s(t.row) + " ")])])]), o("button", {
                staticClass: "flex shadow-md p-3 m-1 rounded-lg hover:bg-gray-300 bg-white",
                on: {
                    click: t.increaseCol
                }
            }, [o("i", {
                staticClass: "material-icons colNum up"
            }, [t._v(" keyboard_arrow_right ")])])]), o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow-md p-3 m-1 rounded-lg hover:bg-gray-300 bg-white",
                on: {
                    click: t.increaseRow
                }
            }, [o("i", {
                staticClass: "material-icons colNum up"
            }, [t._v(" keyboard_arrow_down ")])])])]), o("div", {
                staticClass: "text-center w-full md:w-1/2"
            }, [o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow-md p-3 m-1 rounded-lg hover:bg-gray-300 bg-white",
                on: {
                    click: t.decreaseRowSpan
                }
            }, [o("i", {
                staticClass: "material-icons colNum down"
            }, [t._v(" keyboard_arrow_up ")])])]), o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow-md p-3 m-1 rounded-lg hover:bg-gray-300 bg-white",
                on: {
                    click: t.decreaseColSpan
                }
            }, [o("i", {
                staticClass: "material-icons colNum down"
            }, [t._v(" keyboard_arrow_left ")])]), o("div", {
                staticClass: "flex px-1 self-center flex-wrap flex-col"
            }, [o("div", {
                staticClass: "inline-block"
            }, [t._v(" " + t._s(t.local.height) + " "), o("span", {
                staticClass: "value"
            }, [t._v(" " + t._s(t.rowSpan) + " ")])]), o("div", {
                staticClass: "inline-block"
            }, [t._v(" " + t._s(t.local.width) + " "), o("span", {
                staticClass: "value"
            }, [t._v(" " + t._s(t.colSpan) + " ")])])]), o("button", {
                staticClass: "flex shadow-md p-3 m-1 rounded-lg hover:bg-gray-300 bg-white",
                on: {
                    click: t.increaseColSpan
                }
            }, [o("i", {
                staticClass: "material-icons colNum up"
            }, [t._v(" keyboard_arrow_right ")])])]), o("div", {
                staticClass: "controls flex flex-row justify-center"
            }, [o("button", {
                staticClass: "flex shadow-md p-3 m-1 rounded-lg hover:bg-gray-300 bg-white",
                on: {
                    click: t.increaseRowSpan
                }
            }, [o("i", {
                staticClass: "material-icons colNum up"
            }, [t._v(" keyboard_arrow_down ")])])])])]), o("div", {
                staticClass: "grid block md:w-1/2"
            }, [o("div", {
                staticClass: "border shadow-md text-center h-full md:h-175 py-2 md:mt-1 overflow-auto"
            }, [o("div", {
                staticClass: "ml-2"
            }, [o("div", {
                staticClass: "flex flex-no-wrap flex-row justify-center w-fit"
            }, t._l(t.grid[0].length, (function(e, a) {
                return o("div", {
                    key: "col" + a,
                    staticClass: "border border-white",
                    on: {
                        click: function(e) {
                            return t.addCol(a + 1)
                        }
                    }
                }, [a == t.grid[0].length + 1 ? o("div", {
                    staticClass: "cursor-pointer w-10 h-6"
                }) : t._e()])
            }
            )), 0), t._l(t.grid, (function(e, a) {
                return o("div", {
                    key: a,
                    staticClass: "flex flex-no-wrap flex-row justify-center w-fit",
                    attrs: {
                        value: e
                    }
                }, t._l(e, (function(e, n) {
                    return o("div", {
                        key: n,
                        staticClass: "border border-gray-200",
                        attrs: {
                            value: e,
                            "data-row": a,
                            "data-col": n
                        },
                        on: {
                            click: t.pickLocation
                        }
                    }, ["y" == e ? o("div", {
                        staticClass: "w-10 h-6 bg-gray-300 cursor-pointer"
                    }, [a == t.row - 1 && n == t.col - 1 ? o("div", {
                        staticClass: "bg-blue-400 cursor-pointer h-full"
                    }) : o("span")]) : t._e(), "n" == e ? o("div", {
                        staticClass: "w-10 h-6 bg-green-400 cursor-pointer"
                    }, [a == t.row - 1 && n == t.col - 1 ? o("div", {
                        staticClass: "bg-blue-400 cursor-pointer"
                    }) : t._e()]) : t._e()])
                }
                )), 0)
            }
            ))], 2)])])])]), o("div", {
                staticClass: "w-full flex flex-auto overflow-auto"
            }, [o("div", {
                staticClass: "m-2 md:w-full md:flex md:flex-row md:flex-wrap"
            }, [o("label", {
                staticClass: "pl-1 text-xl",
                attrs: {
                    for: "tileTypeSelect"
                }
            }, [t._v("Tile Type: ")]), o("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.tileType,
                    expression: "tileType"
                }],
                attrs: {
                    id: "tileTypeSelect"
                },
                on: {
                    change: function(e) {
                        var o = Array.prototype.filter.call(e.target.options, (function(t) {
                            return t.selected
                        }
                        )).map((function(t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        }
                        ));
                        t.tileType = e.target.multiple ? o : o[0]
                    }
                }
            }, [o("option", {
                attrs: {
                    value: "device"
                }
            }, [t._v("Device")]), o("option", {
                attrs: {
                    value: "variable"
                }
            }, [t._v("Variable")])])])]), o("div", {
                staticClass: "w-full flex flex-auto overflow-auto"
            }, ["device" == t.tileType ? o("div", {
                staticClass: "deviceSelect m-2 md:w-full md:flex md:flex-row md:flex-wrap"
            }, [o("div", {
                staticClass: "devices md:w-1/3 p-1 h-auto"
            }, [t.authDevices.length ? o("div", {
                staticClass: "pl-1 text-xl"
            }, [t._v(" " + t._s(t.local.pickDevice) + " ")]) : o("div", {
                staticClass: "pl-1 text-xl",
                staticStyle: {
                    color: "red"
                }
            }, [t._v(" " + t._s(t.local.noDevicesAuthorized) + " ")]), o("div", {
                staticClass: "search pl-2"
            }, [t._v(" " + t._s(t.local.search) + ": "), o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.deviceSearch,
                    expression: "deviceSearch"
                }],
                staticClass: "shadow w-auto outline-none",
                attrs: {
                    type: "text",
                    disabled: !t.authDevices.length
                },
                domProps: {
                    value: t.deviceSearch
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.deviceSearch = e.target.value)
                    }
                }
            })]), o("div", {
                staticClass: "deviceList border shadow-md m-1 p-1 h-200 md:h-80 overflow-auto flex flex-row flex-grow flex-wrap text-sm bg-white"
            }, t._l(t.devicesFiltered, (function(e) {
                return o("div", {
                    key: e.id,
                    staticClass: "shadow w-full m-1",
                    attrs: {
                        value: e.id
                    }
                }, [e.id == t.device.id ? o("div", {
                    staticClass: "selected",
                    style: {
                        padding: "8px",
                        cursor: "pointer",
                        backgroundColor: "#CCC",
                        wordBreak: "break-all"
                    },
                    attrs: {
                        "data-id": e.id
                    },
                    on: {
                        click: t.setDevice
                    }
                }, [t._v(" " + t._s(e.label) + " ")]) : t._e(), e.id != t.device.id ? o("div", {
                    style: {
                        padding: "8px",
                        cursor: "pointer",
                        wordBreak: "break-all"
                    },
                    attrs: {
                        "data-id": e.id
                    },
                    on: {
                        click: t.setDevice
                    }
                }, [t._v(" " + t._s(e.label) + " ")]) : t._e()])
            }
            )), 0)]), o("div", {
                staticClass: "selectTemplate mt-2 md:mt-0 md:w-1/3"
            }, [o("div", {
                staticClass: "templates md:mx-1 p-1"
            }, [o("div", {
                staticClass: "pl-1 text-xl"
            }, [t._v(" " + t._s(t.local.pickTemplate) + " ")]), o("div", {
                staticClass: "search pl-2"
            }, [t._v(" " + t._s(t.local.search) + ": "), o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.templateSearch,
                    expression: "templateSearch"
                }],
                staticClass: "shadow w-auto outline-none",
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.templateSearch
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.templateSearch = e.target.value)
                    }
                }
            })]), o("div", {
                staticClass: "templates border shadow-md m-1 p-1 h-200 md:h-80 overflow-auto flex flex-row flex-wrap text-sm bg-white"
            }, t._l(t.templatesSorted, (function(e) {
                return o("div", {
                    key: e.name,
                    staticClass: "shadow w-full m-1",
                    attrs: {
                        "data-value": e.name
                    }
                }, [e.name.toLowerCase() == t.menuTile.template ? o("div", {
                    staticClass: "selected",
                    style: {
                        padding: "8px",
                        cursor: "pointer",
                        backgroundColor: "#CCC"
                    },
                    on: {
                        click: t.setTemplate
                    }
                }, [t._v(" " + t._s(e.displayValue) + " ")]) : t._e(), e.name.toLowerCase() != t.menuTile.template ? o("div", {
                    style: {
                        padding: "8px",
                        cursor: "pointer",
                        height: "calc(100% - 16px)"
                    },
                    on: {
                        click: t.setTemplate
                    }
                }, [t._v(" " + t._s(e.displayValue) + " ")]) : t._e()])
            }
            )), 0)])]), t.showOptions ? o("div", {
                staticClass: "options mt-2 md:mt-0 md:w-1/3"
            }, [o("div", {
                staticClass: "options "
            }, [o("div", {
                staticClass: "pl-1 text-xl"
            }, [t._v(" " + t._s(t.local.options) + " ")]), o("div", {
                staticClass: "md:h-auto"
            }, [o("div", {
                staticClass: "templateBgImage"
            }, [o("div", {
                staticClass: "p-1"
            }, [o("label", {
                attrs: {
                    for: "tempBgImage"
                }
            }, [t._v(" " + t._s(t.local.backgroundImageLink) + " ")]), o("div", {
                staticClass: "m-1"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.bgImage,
                    expression: "menuTile.bgImage"
                }],
                staticClass: "shadow w-full p-1 outline-none",
                attrs: {
                    id: "tempBgImage",
                    type: "text"
                },
                domProps: {
                    value: t.menuTile.bgImage
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.menuTile, "bgImage", e.target.value)
                    }
                }
            })])])]), "attribute" != t.menuTile.template.toLowerCase() && "battery" != t.menuTile.template.toLowerCase() && "carbon-dioxide" != t.menuTile.template.toLowerCase() && "clock" != t.menuTile.template.toLowerCase() && "clock-analog" != t.menuTile.template.toLowerCase() && "clock-date" != t.menuTile.template.toLowerCase() && "dashboard" != t.menuTile.template.toLowerCase() && "date" != t.menuTile.template.toLowerCase() && "energy" != t.menuTile.template.toLowerCase() && "generic" != t.menuTile.template.toLowerCase() && "hsm" != t.menuTile.template.toLowerCase() && "illuminance" != t.menuTile.template.toLowerCase() && "images" != t.menuTile.template.toLowerCase() && "links" != t.menuTile.template.toLowerCase() && "mode" != t.menuTile.template.toLowerCase() && "music-player" != t.menuTile.template.toLowerCase() && "power" != t.menuTile.template.toLowerCase() && "temperature" != t.menuTile.template.toLowerCase() && "texttile" != t.menuTile.template.toLowerCase() && "thermostat" != t.menuTile.template.toLowerCase() && "video-player" != t.menuTile.template.toLowerCase() && "weather" != t.menuTile.template.toLowerCase() && "variable-number" != t.menuTile.template.toLowerCase() && "variable-decimal" != t.menuTile.template.toLowerCase() && "variable-time" != t.menuTile.template.toLowerCase() && "variable-date" != t.menuTile.template.toLowerCase() && "variable-string" != t.menuTile.template.toLowerCase() && "variable-bool" != t.menuTile.template.toLowerCase() && "GroupColour" != t.menuTile.template.toLowerCase()  ? o("div", {
                staticClass: "p-1"
            }, [o("div", {}, [o("h4", {}, [t._v(" " + t._s(t.local.customIcon) + ": ")]), o("div", {
                staticClass: "material-icons m-1 p-2 border-2 cursor-pointer",
                class: t.menuTile.customIcon,
                on: {
                    click: t.toggleIcons
                }
            }, [t._v(" " + t._s(t.parseFont(t.menuTile.customIcon)) + " ")]), t._v(" " + t._s(t.menuTile.customIcon) + " "), t.menuTile.customIcon ? o("div", {
                staticClass: "cursor-pointer inline-block shadow px-4 py-2 bg-red-600 m-2 text-white",
                on: {
                    click: t.removeCustomIcon
                }
            }, [t._v(" " + t._s(t.local.remove) + " ")]) : t._e(), o("div", {
                staticClass: "m-1"
            }, [t.showIcons ? o("div", {
                staticClass: "shadow h-200 overflow-auto",
                attrs: {
                    id: "iconPicker"
                }
            }, [o("h3", [t._v(t._s(t.local.iconPicker))]), o("IconPicker", {
                attrs: {
                    picked: t.menuTile.customIcon
                },
                on: {
                    "handle-icon-change": t.handleIconChange
                }
            })], 1) : t._e()])])]) : t._e(), "carbon-dioxide" == t.menuTile.template.toLowerCase() || "humidity" == t.menuTile.template.toLowerCase() || "illuminance" == t.menuTile.template.toLowerCase() || "temperature" == t.menuTile.template.toLowerCase() ? o("div", {
                staticClass: "mb-2"
            }, [o("h3", {
                staticClass: "p-1"
            }, [t._v(" " + t._s(t.local.unitOptions) + " ")]), o("div", {
                staticClass: "px-2"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.hideUnit,
                    expression: "menuTile.hideUnit"
                }],
                staticClass: "shadow w-auto p-1 m-1 outline-none",
                attrs: {
                    id: "hideUnit",
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.menuTile.hideUnit) ? t._i(t.menuTile.hideUnit, null) > -1 : t.menuTile.hideUnit
                },
                on: {
                    change: function(e) {
                        var o = t.menuTile.hideUnit
                          , a = e.target
                          , n = !!a.checked;
                        if (Array.isArray(o)) {
                            var i = null
                              , r = t._i(o, i);
                            a.checked ? r < 0 && t.$set(t.menuTile, "hideUnit", o.concat([i])) : r > -1 && t.$set(t.menuTile, "hideUnit", o.slice(0, r).concat(o.slice(r + 1)))
                        } else
                            t.$set(t.menuTile, "hideUnit", n)
                    }
                }
            }), o("label", {
                attrs: {
                    for: "hideUnit"
                }
            }, [t._v(" " + t._s(t.local.overrideDeviceUnit))])]), t.menuTile.hideUnit ? o("div", [o("div", {
                staticStyle: {
                    margin: "0 8px",
                    "padding-right": "16px"
                }
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.customUnit,
                    expression: "menuTile.customUnit"
                }],
                staticClass: "shadow w-auto outline-none",
                attrs: {
                    id: "customUnit",
                    type: "text"
                },
                domProps: {
                    value: t.menuTile.customUnit
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.menuTile, "customUnit", e.target.value)
                    }
                }
            }), o("label", {
                attrs: {
                    for: "customUnit"
                }
            }, [t._v(" " + t._s(t.local.deviceUnit) + " ")])])]) : t._e()]) : t._e(), "images" == t.menuTile.template.toLowerCase() ? o("div", {
                staticClass: "mb-2"
            }, [o("div", {
                staticClass: "m-1 mb-2"
            }, [o("label", {
                attrs: {
                    for: "tempExtraInput"
                }
            }, [t._v(" " + t._s(t.local.imageURL) + " ")]), o("div", {
                staticClass: "m-1"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.templateExtra,
                    expression: "menuTile.templateExtra"
                }],
                staticClass: "shadow w-full p-1 outline-none",
                attrs: {
                    id: "tempExtraInput",
                    type: "text"
                },
                domProps: {
                    value: t.menuTile.templateExtra
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.menuTile, "templateExtra", e.target.value)
                    }
                }
            })])]), o("div", {
                staticClass: "m-1"
            }, [o("label", {
                attrs: {
                    for: "refreshInterval"
                }
            }, [t._v(" " + t._s(t.local.refreshInterval) + " ")]), o("div", {
                staticClass: "m-1"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.refreshInterval,
                    expression: "menuTile.refreshInterval"
                }],
                staticClass: "shadow w-full p-1 outline-none",
                attrs: {
                    id: "refreshInterval",
                    type: "text"
                },
                domProps: {
                    value: t.menuTile.refreshInterval
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.menuTile, "refreshInterval", e.target.value)
                    }
                }
            })])])]) : t._e(), "video-player" == t.menuTile.template.toLowerCase() ? o("div", {
                staticClass: "mb-2"
            }, [o("label", {
                staticClass: "px-1",
                attrs: {
                    for: "tempExtraInput"
                }
            }, [t._v(" " + t._s(t.local.videoURL) + " ")]), o("div", {
                staticClass: "mx-2"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.templateExtra,
                    expression: "menuTile.templateExtra"
                }],
                staticClass: "shadow w-full p-1 outline-none",
                attrs: {
                    id: "tempExtraInput",
                    type: "text"
                },
                domProps: {
                    value: t.menuTile.templateExtra
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.menuTile, "templateExtra", e.target.value)
                    }
                }
            })])]) : t._e(), "texttile" == t.menuTile.template.toLowerCase() ? o("div", {
                staticClass: "mb-2"
            }, [o("div", {
                staticClass: "px-1"
            }, [o("label", {
                attrs: {
                    for: "tempExtraInput"
                }
            }, [t._v(" " + t._s(t.local.text) + " ")]), o("div", {
                staticClass: "px-1"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.templateExtra,
                    expression: "menuTile.templateExtra"
                }],
                staticClass: "shadow w-full p-1 outline-none",
                attrs: {
                    id: "tempExtraInput",
                    type: "text"
                },
                domProps: {
                    value: t.menuTile.templateExtra
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.menuTile, "templateExtra", e.target.value)
                    }
                }
            })])])]) : t._e(), "links" == t.menuTile.template.toLowerCase() ? o("div", {
                staticClass: "mb-2"
            }, [o("div", {
                staticClass: "mx-1 mb-2"
            }, [o("label", {
                attrs: {
                    for: "tempExtraInput"
                }
            }, [t._v(" " + t._s(t.local.linkURL) + " ")]), o("div", {
                staticClass: "mx-1"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.templateExtra,
                    expression: "menuTile.templateExtra"
                }],
                staticClass: "shadow w-full p-1 outline-none",
                attrs: {
                    id: "tempExtraInput",
                    type: "text"
                },
                domProps: {
                    value: t.menuTile.templateExtra
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.menuTile, "templateExtra", e.target.value)
                    }
                }
            })])]), o("div", {
                staticClass: "mx-1"
            }, [o("label", {
                attrs: {
                    for: "linkName"
                }
            }, [t._v(" " + t._s(t.local.linkName) + " ")]), o("div", {
                staticClass: "mx-1"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.linkName,
                    expression: "menuTile.linkName"
                }],
                staticClass: "shadow w-full p-1 outline-none",
                attrs: {
                    id: "linkName",
                    type: "text"
                },
                domProps: {
                    value: t.menuTile.linkName
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.menuTile, "linkName", e.target.value)
                    }
                }
            })])])]) : t._e(), "buttons" == t.menuTile.template.toLowerCase() ? o("div", {
                staticClass: "mb-2"
            }, [o("label", {
                staticClass: "w-full block p-1 outline-none",
                attrs: {
                    for: "tempExtraInput"
                }
            }, [t._v(" " + t._s(t.local.buttonNumber) + " ")]), o("div", {
                staticClass: "mx-2"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.templateExtra,
                    expression: "menuTile.templateExtra"
                }],
                staticClass: "shadow w-full p-1 outline-none",
                attrs: {
                    id: "tempExtraInput",
                    type: "text"
                },
                domProps: {
                    value: t.menuTile.templateExtra
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.menuTile, "templateExtra", e.target.value)
                    }
                }
            })]), o("label", {
                staticClass: "w-full block p-1 outline-none",
                attrs: {
                    for: "tempExtraInput"
                }
            }, [t._v(" " + t._s(t.local.buttonCommand) + " ")]), o("div", {
                staticClass: "mx-2"
            }, [o("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.buttonCommand,
                    expression: "menuTile.buttonCommand"
                }],
                staticClass: "shadow w-full p-1 outline-none",
                attrs: {
                    id: "buttonCommandInput",
                    type: "text"
                },
                on: {
                    change: function(e) {
                        var o = Array.prototype.filter.call(e.target.options, (function(t) {
                            return t.selected
                        }
                        )).map((function(t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        }
                        ));
                        t.$set(t.menuTile, "buttonCommand", e.target.multiple ? o : o[0])
                    }
                }
            }, [o("option", {
                attrs: {
                    value: "doubleTap"
                }
            }, [t._v("Double Tap")]), o("option", {
                attrs: {
                    value: "hold"
                }
            }, [t._v("Hold")]), o("option", {
                attrs: {
                    value: "push"
                }
            }, [t._v("Push")]), o("option", {
                attrs: {
                    value: "releases"
                }
            }, [t._v("Release")])])])]) : t._e(), "thermostat" == t.menuTile.template.toLowerCase() ? o("div", {
                staticClass: "mb-2"
            }, [o("label", {
                staticClass: "w-full block p-1 outline-none",
                attrs: {
                    for: "tempExtraInput"
                }
            }, [t._v(" " + t._s(t.local.tempChangeStep) + " ")]), o("div", {
                staticClass: "mx-2"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.templateExtra,
                    expression: "menuTile.templateExtra"
                }],
                staticClass: "shadow w-full p-1 outline-none",
                attrs: {
                    id: "tempExtraInput",
                    type: "text"
                },
                domProps: {
                    value: t.menuTile.templateExtra
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.menuTile, "templateExtra", e.target.value)
                    }
                }
            })])]) : t._e(), "attribute" == t.menuTile.template.toLowerCase() ? o("div", [o("h3", {
                staticClass: "p-1"
            }, [t._v(" " + t._s(t.local.pickAttribute) + " ")]), o("div", {
                staticClass: "mx-2 mb-2"
            }, [o("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.templateExtra,
                    expression: "menuTile.templateExtra"
                }],
                staticClass: "w-full h-10 shadow p-1 outline-none",
                attrs: {
                    id: "attribute"
                },
                on: {
                    change: [function(e) {
                        var o = Array.prototype.filter.call(e.target.options, (function(t) {
                            return t.selected
                        }
                        )).map((function(t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        }
                        ));
                        t.$set(t.menuTile, "templateExtra", e.target.multiple ? o : o[0])
                    }
                    , t.setAttribute]
                }
            }, [o("option", {
                attrs: {
                    value: "-1"
                }
            }, [t._v(" " + t._s(t.local.chooseOne) + " ")]), o("option", {
                attrs: {
                    value: "hsmStatus"
                }
            }, [t._v(" " + t._s(t.local.hsmStatus) + " ")]), o("option", {
                attrs: {
                    value: "modeStatus"
                }
            }, [t._v(" " + t._s(t.local.modeStatus) + " ")]), o("option", {
                attrs: {
                    value: "lastUpdated"
                }
            }, [t._v(" " + t._s(t.local.lastUpdated) + " ")]), t._l(t.attributes, (function(e) {
                return o("option", {
                    key: e
                }, [t._v(" " + t._s(e) + " ")])
            }
            ))], 2)])]) : t._e(), "dashboard" == t.menuTile.template.toLowerCase() ? o("div", {
                staticClass: "mb-2"
            }, [o("h3", {
                staticClass: "px-1"
            }, [t._v(" " + t._s(t.local.selectDashboard) + " ")]), o("div", {
                staticClass: "mx-2"
            }, [o("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.menuTile.templateExtra,
                    expression: "menuTile.templateExtra"
                }],
                staticClass: "w-full h-10 shadow p-1 outline-none",
                attrs: {
                    id: "dashboard"
                },
                on: {
                    change: [function(e) {
                        var o = Array.prototype.filter.call(e.target.options, (function(t) {
                            return t.selected
                        }
                        )).map((function(t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        }
                        ));
                        t.$set(t.menuTile, "templateExtra", e.target.multiple ? o : o[0])
                    }
                    , t.setDashboard]
                }
            }, [o("option", {
                attrs: {
                    value: "-1"
                }
            }, [t._v(" " + t._s(t.local.chooseOne) + " ")]), t._l(t.dashboards, (function(e) {
                return o("option", {
                    key: e.id,
                    domProps: {
                        value: e.id
                    }
                }, [t._v(" " + t._s(e.name) + " ")])
            }
            ))], 2)])]) : t._e()])])]) : t._e()]) : t._e(), "variable" == t.tileType ? o("div", {
                staticClass: "variableSelect m-2 md:w-full md:flex md:flex-row md:flex-wrap"
            }, [o("div", {
                staticClass: "variables md:w-1/3 p-1 h-auto"
            }, [t.globalVars.length ? o("div", {
                staticClass: "pl-1 text-xl"
            }, [t._v(" " + t._s(t.local.pickVariable) + " ")]) : o("div", {
                staticClass: "pl-1 text-xl",
                staticStyle: {
                    color: "red"
                }
            }, [t._v(" " + t._s(t.local.noVariablesAuthorized) + " ")]), o("div", {
                staticClass: "search pl-2"
            }, [t._v(" " + t._s(t.local.search) + ": "), o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.deviceSearch,
                    expression: "deviceSearch"
                }],
                staticClass: "shadow w-auto outline-none",
                attrs: {
                    type: "text",
                    disabled: !t.globalVars.length
                },
                domProps: {
                    value: t.deviceSearch
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.deviceSearch = e.target.value)
                    }
                }
            })]), o("div", {
                staticClass: "deviceList border shadow-md m-1 p-1 h-200 md:h-80 overflow-auto flex flex-row flex-grow flex-wrap text-sm bg-white"
            }, t._l(t.variablesFiltered, (function(e) {
                return o("div", {
                    key: e.name,
                    staticClass: "shadow w-full m-1",
                    attrs: {
                        value: e
                    }
                }, [e.name == t.globalVar.name ? o("div", {
                    staticClass: "selected",
                    style: {
                        padding: "8px",
                        cursor: "pointer",
                        backgroundColor: "#CCC",
                        wordBreak: "break-all"
                    },
                    attrs: {
                        "data-id": e.name
                    },
                    on: {
                        click: t.setGlobalVar
                    }
                }, [t._v(" " + t._s(e.name) + " (" + t._s(e.type) + ") ")]) : t._e(), e.name != t.globalVar.name ? o("div", {
                    style: {
                        padding: "8px",
                        cursor: "pointer",
                        wordBreak: "break-all"
                    },
                    attrs: {
                        "data-id": e.name
                    },
                    on: {
                        click: t.setGlobalVar
                    }
                }, [t._v(" " + t._s(e.name) + " (" + t._s(e.type) + ") ")]) : t._e()])
            }
            )), 0)])]) : t._e()]), o("div", {
                staticClass: "buttons w-full text-right pr-4 py-2"
            }, [-1 == t.menuTile.id ? o("div", [o("div", {
                staticClass: "errorMessage text-right w-auto inline-block pr-2 text-red-600"
            }, [t._v(" " + t._s(t.errorMessage) + " ")]), o("button", {
                staticClass: "shadow px-4 py-2 bg-gray-200 m-2 w-auto",
                attrs: {
                    id: "addTileBtn"
                },
                on: {
                    click: t.addTile
                }
            }, [t._v(" " + t._s(t.local.addTile) + " ")])]) : o("div", [o("button", {
                staticClass: "shadow px-4 py-2 bg-red-600 m-2 text-white",
                attrs: {
                    id: "deleteTileBtn"
                },
                on: {
                    click: t.deleteTile
                }
            }, [t._v(" " + t._s(t.local.deleteTile) + " ")]), o("button", {
                staticClass: "shadow px-4 py-2 bg-gray-200 m-2",
                attrs: {
                    id: "closeTileBtn"
                },
                on: {
                    click: t.closeMenu
                }
            }, [t._v(" " + t._s(t.local.close) + " ")])])])]) : t._e(), t.historyArea ? o("div", {
                staticClass: "historyArea m-2 md:w-full md:flex md:flex-row md:flex-wrap md:h-90 overflow-auto bg-white"
            }, [o("div", [o("h3", {
                staticClass: "p-1 break-all"
            }, [t._v(" " + t._s(t.device.label) + " ")]), o("div", {}, [t._v(" " + t._s(t.local.history) + " "), o("div", {
                staticClass: "md:pr-4"
            }, t._l(t.events, (function(e, a) {
                return o("div", {
                    key: a,
                    staticClass: "border m-1 p-2"
                }, [o("b", [t._v(t._s(e.name))]), t._v(" " + t._s(t.local.changedTo) + " "), o("b", [t._v(t._s(e.value))]), t._v(" " + t._s(t.local.on) + " " + t._s(t.formatDate(e.date)) + " ")])
            }
            )), 0)])])]) : t._e()])]), t.confirmPopup ? o("confirmBox", {
                on: {
                    doCommand: t.doDelete,
                    hidePopup: t.hidePopup
                }
            }) : t._e()], 1)
        }
          , xt = []
          , kt = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-screen"
            }, [o("div", {
                staticClass: "popup-content inset-auto relative bg-white z-50 w-2/3 mx-auto mt-16 flex-col flex shadow-xl border md:h-auto overflow-auto rounded-xl"
            }, [o("div", {
                staticClass: "flex flex-row flex-wrap text-center justify-center p-2"
            }, [o("div", {
                staticClass: "text-lg w-full"
            }, [t._v(" " + "Are you sure" + " ")]), o("div", {
                staticClass: "inline-block p-2"
            }, [o("button", {
                staticClass: "shadow px-4 py-2 bg-gray-200 m-2 cursor-pointer ",
                on: {
                    // click: t.doCommand
                    click:  function() {
                        console.log(t);
                        ShowKeypad(t.$parent.name,function (code) {
                        validatePIN(code, t.$parent.context.id, function (isValid) {
                          if (isValid) {
                            t.doCommand();
                            CancelKeypad();
                          } else {
                            CancelKeypad();
                          }
                        });
                      })
                    }
                }
            }, [t._v(" " + "Yes" + " ")])]), o("div", {
                staticClass: "inline-block p-2"
            }, [o("button", {
                staticClass: "shadow px-4 py-2 bg-red-600 text-white m-2 cursor-pointer",
                on: {
                    click: t.hidePopup
                    //  t._s(t.local.no)
                }
            }, [t._v(" " + "No/ Cancel" + " ")])])])])])
        }
          , St = [];
        function Ot(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function Tt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ot(Object(o), !0).forEach((function(e) {
                    Et(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : Ot(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function Et(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var It = {
            computed: Tt({}, Object(m["b"])(["local"])),
            methods: {
                doCommand: function() {
                    this.$emit("doCommand", "")
                },
                hidePopup: function() {
                    this.$emit("hidePopup", "")
                }
            }
        }
          , jt = It
          , Mt = Object(k["a"])(jt, kt, St, !1, null, null, null)
          , Dt = Mt.exports;
        function zt(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function Pt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? zt(Object(o), !0).forEach((function(e) {
                    Lt(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : zt(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function Lt(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var Yt = {
            name: "MenuTile",
            components: {
                IconPicker: H,
                confirmBox: Dt
            },
            data: function() {
                return {
                    showOptions: !0,
                    tileArea: !0,
                    historyArea: !1,
                    device: {
                        id: -1,
                        label: ""
                    },
                    globalVar: {
                        name: ""
                    },
                    errorMessage: "",
                    confirmPopup: !1,
                    attributes: [],
                    deviceId: "",
                    template: "",
                    events: [],
                    showIcons: !1,
                    deviceSearch: "",
                    variableSearch: "",
                    templateSearch: "",
                    showColEdit: !1,
                    showRowEdit: !1,
                    tileType: "device"
                }
            },
            computed: Pt({}, Object(m["b"])(["local", "layout", "bgColors", "menuTile", "devices", "grid", "templates", "globalVars"]), {
                devicesFiltered: function() {
                    var t = this;
                    return "" != this.deviceSearch ? this.devices.filter((function(e) {
                        return parseInt(e.id) > 0 && e.label.toLowerCase().includes(t.deviceSearch.toLowerCase())
                    }
                    )) : this.devices.filter((function(t) {
                        return parseInt(t.id) > 0
                    }
                    ))
                },
                variablesFiltered: function() {
                    var t = this;
                    return "" != this.variableSearch ? this.globalVars.filter((function(e) {
                        return e.name.toLowerCase().includes(t.variableSearch.toLowerCase())
                    }
                    )) : this.globalVars
                },
                authDevices: function() {
                    return this.devices.filter((function(t) {
                        return parseInt(t.id) > 0
                    }
                    ))
                },
                dashboards: function() {
                    var t = this.devices.find((function(t) {
                        return "Dashboards" == t.label
                    }
                    ));
                    return t.attr
                },
                linkName: {
                    get: function() {
                        return this.menuTile.linkName
                    },
                    set: function(t) {
                        -1 != this.menuTile.id && (this.$store.commit("SET_LINKNAME", t),
                        this.updateTile(!0))
                    }
                },
                templatesSorted: function() {
                    var t = this
                      , e = this.$store.getters.templatesSorted
                      , o = [];
                    return e.forEach((function(e) {
                        o.push({
                            name: e,
                            displayValue: t.templates[e]
                        })
                    }
                    )),
                    "" != this.templateSearch && (o = o.filter((function(e) {
                        return e.name.toLowerCase().includes(t.templateSearch.toLowerCase())
                    }
                    ))),
                    o.sort((function(t, e) {
                        var o = t.displayValue
                          , a = e.displayValue;
                        return o < a ? -1 : o > a ? 1 : 0
                    }
                    ))
                },
                selectedTemplate: {
                    get: function() {
                        return void 0 != this.menuTile.template ? this.menuTile.template : null
                    },
                    set: function(t) {
                        this.$store.commit("SET_TEMPLATE", t)
                    }
                },
                bgImage: {
                    get: function() {
                        return void 0 != this.menuTile.bgImage ? this.menuTile.bgImage : null
                    },
                    set: function(t) {
                        this.$store.commit("SET_BGIMAGE", t)
                    }
                },
                row: {
                    get: function() {
                        if (void 0 != this.menuTile.row)
                            return this.menuTile.row;
                        var t = $t(this.layout, this.grid);
                        return void 0 == t ? this.layout.rows + 1 : t.row
                    },
                    set: function(t) {
                        t > 0 && this.$store.commit("SET_ROW", t)
                    }
                },
                col: {
                    get: function() {
                        if (void 0 != this.menuTile.col)
                            return this.menuTile.col;
                        var t = $t(this.layout, this.grid);
                        return void 0 == t ? 1 : t.col
                    },
                    set: function(t) {
                        t > 0 && this.$store.commit("SET_COL", t)
                    }
                },
                rowSpan: {
                    get: function() {
                        return void 0 != this.menuTile.rowSpan ? this.menuTile.rowSpan : 1
                    },
                    set: function(t) {
                        t > 0 && this.$store.commit("SET_ROWSPAN", t)
                    }
                },
                colSpan: {
                    get: function() {
                        return void 0 != this.menuTile.colSpan ? this.menuTile.colSpan : 1
                    },
                    set: function(t) {
                        t > 0 && this.$store.commit("SET_COLSPAN", t)
                    }
                }
            }),
            created: function() {
                document.addEventListener("keyup", this.escKey)
            },
            mounted: function() {
                var t = this;
                this.device = this.devices.filter((function(e) {
                    return e.id == t.menuTile.device
                }
                ))[0],
                void 0 == this.device && (this.device = {
                    id: -1,
                    label: ""
                }),
                "attribute" == this.menuTile.template.toLowerCase() && this.setAttributes()
            },
            updated: function() {},
            beforeDestroy: function() {
                document.removeEventListener("keyup", this.escKey)
            },
            methods: {
                addRow: function(t) {
                    this.$store.dispatch("ADD_ROW", t)
                },
                addCol: function(t) {
                    this.$store.dispatch("ADD_COL", t)
                },
                deleteRow: function(t) {},
                escKey: function(t) {
                    27 === t.keyCode && this.updateTile()
                },
                setBgColor: function() {
                    this.$store.commit("SET_BGCOLOR", this.layout.bgColor)
                },
                setDevice: function(t) {
                    for (var e = t.target.parentNode.parentNode.children, o = 0; o < e.length; o++)
                        e[o].children[0].style.backgroundColor = "#fff";
                    this.menuTile.device != t.target.dataset.id ? (this.$store.commit("SET_DEVICE", t.target.dataset.id),
                    t.target.style.backgroundColor = "#efefef") : (this.$store.commit("SET_DEVICE", ""),
                    t.target.style.backgroundColor = "#fff")
                },
                setGlobalVar: function(t) {
                    for (var e = t.target.parentNode.parentNode.children, o = 0; o < e.length; o++)
                        e[o].children[0].style.backgroundColor = "#fff";
                    this.menuTile.globalVar != t.target.dataset.id ? (this.$store.commit("SET_GLOBAL_VAR", t.target.dataset.id),
                    t.target.style.backgroundColor = "#efefef") : (this.$store.commit("SET_GLOBAL_VAR", ""),
                    t.target.style.backgroundColor = "#fff"),
                    this.selectedTemplate = "global-variable"
                },
                setTemplate: function(t) {
                    for (var e = t.target.parentNode.parentNode.children, o = 0; o < e.length; o++)
                        e[o].children[0].style.backgroundColor = "#fff";
                    if (t.target.style.backgroundColor = "#efefef",
                    this.selectedTemplate = t.target.parentNode.dataset.value.toLowerCase(),
                    "dashboard" == this.selectedTemplate) {
                        var a = this.devices.find((function(t) {
                            return "Dashboards" == t.label
                        }
                        ));
                        this.menuTile.device = a.id.toString()
                    }
                    if ("hsm" == this.selectedTemplate) {
                        a = this.devices.find((function(t) {
                            return "HSM Status" == t.label
                        }
                        ));
                        this.menuTile.device = a.id.toString()
                    }
                    if ("modes" == this.selectedTemplate) {
                        a = this.devices.find((function(t) {
                            return "Modes" == t.label
                        }
                        ));
                        this.menuTile.device = a.id.toString()
                    }
                    "clock" != this.selectedTemplate && "clock-analog" != this.selectedTemplate && "clock-date" != this.selectedTemplate && "date" != this.selectedTemplate && "images" != this.selectedTemplate && "links" != this.selectedTemplate || this.menuTile.device,
                    this.setAttributes(),
                    this.updateTile(!0)
                },
                // setAttributes: function() {
                //     var t = this;
                //     if ("attribute" == this.selectedTemplate && void 0 != this.menuTile.device && "" != this.menuTile.device && "-3" != this.menuTile.device && "-2" != this.menuTile.device) {
                //         var e = i.a.create({
                //             baseURL: this.$store.getters.urlPrefix + this.$store.getters.urlPath,
                //             crossDomain: !0,
                //             responseType: "json",
                //             withCredentials: !0,
                //             headers: {
                //                 Accept: "application/json",
                //                 "Content-Type": "application/json",
                //                 Authorization: "Bearer " + this.$store.state.token
                //             }
                //         });
                //         "" != this.menuTile.device && e.get("/device/" + this.menuTile.device).then((function(e) {
                //             var o = e.data;
                //             t.attributes = o[0].attr.map((function(t) {
                //                 return Object.keys(t)[0]
                //             }
                //             )).sort()
                //         }
                //         )).catch((function(e) {
                //             t.response = e,
                //             t.$store.commit("SET_CONNECTED", !1),
                //             console.log(e)
                //         }
                //         ))
                //     }
                // },
                closeMenu: function() {
                    -1 != this.menuTile.device && this.updateTile()
                },
                pickLocation: function(t) {
                    var e = t.currentTarget.dataset;
                    this.row = parseInt(e.row) + 1,
                    this.col = parseInt(e.col) + 1
                },
                toggleIcons: function() {
                    this.showIcons = !this.showIcons
                },
                decreaseCol: function() {
                    this.col--
                },
                increaseCol: function() {
                    this.col++
                },
                decreaseRow: function() {
                    this.row--
                },
                increaseRow: function() {
                    this.row++
                },
                decreaseColSpan: function() {
                    this.colSpan--
                },
                increaseColSpan: function() {
                    this.colSpan++
                },
                decreaseRowSpan: function() {
                    this.rowSpan--
                },
                increaseRowSpan: function() {
                    this.rowSpan++
                },
                addTile: function() {
                    var t = this.layout.tiles.map((function(t) {
                        return t.id
                    }
                    )).sort((function(t, e) {
                        return t - e
                    }
                    ))
                      , e = 0;
                    t.length > 0 && (e = t[t.length - 1] + 1);
                    var o = {
                        id: e,
                        bgImage: this.menuTile.bgImage,
                        col: this.col,
                        colSpan: this.colSpan,
                        device: this.menuTile.device,
                        globalVar: this.menuTile.globalVar,
                        row: this.row,
                        rowSpan: this.rowSpan,
                        template: this.selectedTemplate,
                        templateExtra: this.menuTile.templateExtra,
                        hideUnit: this.menuTile.customUnit,
                        refreshInterval: this.menuTile.refreshInterval,
                        linkName: this.menuTile.linkName
                    };
                    if ("" == this.selectedTemplate && "device" == this.tileType)
                        this.errorMessage = "Please Select a Template.";
                    else {
                        this.errorMessage = "",
                        this.$store.commit("ADD_TILE", o);
                        var a = $t(this.layout, this.grid);
                        void 0 == a ? this.col >= this.layout.cols ? (this.col = 1,
                        this.row++) : this.col++ : (this.row = a.row,
                        this.col = a.col),
                        this.menuTile.templateExtra = null
                    }
                },
                updateTile: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , e = {
                        id: this.menuTile.id,
                        bgImage: this.menuTile.bgImage,
                        col: this.col,
                        colSpan: this.colSpan,
                        device: this.deviceId,
                        row: this.row,
                        rowSpan: this.rowSpan,
                        template: this.selectedTemplate,
                        templateExtra: this.menuTile.templateExtra,
                        hideUnit: this.menuTile.customUnit,
                        refreshInterval: this.refreshInterval,
                        linkName: this.menuTile.linkName,
                        customIcon: this.menuTile.customIcon
                    };
                    this.$store.commit("UPDATE_TILE", e),
                    this.menuTile.templateExtra,
                    0 == t && this.$store.commit("CLOSE_MENUTILE")
                },
                deleteTile: function() {
                    this.confirmPopup = !0
                },
                doDelete: function() {
                    this.confirmPopup = !1,
                    this.$store.commit("DELETE_TILE", this.menuTile.id),
                    this.$store.commit("CLOSE_MENUTILE")
                },
                // showHistory: function() {
                //     var t = this;
                //     this.historyArea = !0,
                //     this.tileArea = !1;
                //     var e = i.a.create({
                //         baseURL: this.$store.getters.urlPrefix + this.$store.getters.urlPath,
                //         crossDomain: !0,
                //         responseType: "json",
                //         withCredentials: !0,
                //         headers: {
                //             Accept: "application/json",
                //             "Content-Type": "application/json",
                //             Authorization: "Bearer " + this.$store.state.token
                //         }
                //     });
                //     void 0 != this.menuTile.device && e.get("/device/" + this.menuTile.device + "/events").then((function(e) {
                //         t.events = e.data
                //     }
                //     )).catch((function(e) {
                //         t.response = e,
                //         t.$store.commit("SET_CONNECTED", !1),
                //         console.log(e)
                //     }
                //     ))
                // },
                setAttribute: function(t) {
                    var e = t.target.value;
                    this.menuTile.templateExtra = e,
                    "hsmStatus" == this.menuTile.templateExtra ? (this.menuTile.device = -3,
                    this.$store.commit("SET_DEVICE", -3)) : "modeStatus" == this.menuTile.templateExtra && (this.menuTile.device = -2,
                    this.$store.commit("SET_DEVICE", -2)),
                    this.updateTile(!0)
                },
                setDashboard: function(t) {
                    var e = t.target.value;
                    this.menuTile.templateExtra = e,
                    this.updateTile(!0)
                },
                hideHistory: function() {
                    this.historyArea = !1,
                    this.tileArea = !0
                },
                hidePopup: function() {
                    this.confirmPopup = !1
                },
                nextTile: function() {
                    this.$store.commit("SHOW_NEXTMENUTILE", this.menuTile)
                },
                previousTile: function() {
                    this.$store.commit("SHOW_PREVIOUSMENUTILE", this.menuTile)
                },
                handleIconChange: function(t) {
                    this.menuTile.customIcon = t,
                    this.updateTile(!0)
                },
                parseFont: function(t) {
                    if (t && -1 == t.indexOf("he-"))
                        return t
                },
                removeCustomIcon: function() {
                    this.menuTile.customIcon = null
                },
                formatDate: function(t) {
                    var e = new g.a(t);
                    if (1 == this.layout.clockMode) {
                        if ("DD/MM/YYYY" == this.layout.dateFormat)
                            return e.format("DD/MM hh:mm:ss a");
                        if ("MM/DD/YYYY" == this.layout.dateFormat)
                            return e.format("MM/DD hh:mm:ss a");
                        if ("YYYY-MM-DD" == this.layout.dateFormat)
                            return e.format("YYYY-MM-DD hh:mm:ss a")
                    } else {
                        if ("DD/MM/YYYY" == this.layout.dateFormat)
                            return e.format("DD/MM HH:mm:ss");
                        if ("MM/DD/YYYY" == this.layout.dateFormat)
                            return e.format("MM/DD HH:mm:ss");
                        if ("YYYY-MM-DD" == this.layout.dateFormat)
                            return e.format("YYYY-MM-DD HH:mm:ss")
                    }
                }
            }
        }
          , $t = function(t, e) {
            for (var o, a, n = 0; n < t.rows; n++)
                for (var i = 0; i < t.cols; i++)
                    if ("n" == e[n][i])
                        return o = n + 1,
                        a = i + 1,
                        {
                            row: o,
                            col: a
                        }
        }
          , Nt = Yt
          , At = Object(k["a"])(Nt, _t, xt, !1, null, null, null)
          , Rt = At.exports
          , Ht = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "dashboard",
                // staticStyle: {
                //     height: "200vh"
                // }
            }, [t.devices.length > 0 ? o("Grid") : t._e()], 1)
        }
          , Ft = []
          , Vt = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", [ t.layout.tiles && 0 == t.layout.tiles.length ? o("NoTiles") : t._e(), t.layout.tiles && t.layout.tiles.length > 0 ? o("TransitionGroup", {
                staticClass: "wrapper z-0",
                attrs: {
                    appear: "",
                    name: "fade",
                    tag: "div"
                }
            }, t._l(t.layout.tiles, (function(t) {
                return o(t.template.toLowerCase(), {
                    key: t.id,
                    tag: "Component",
                    attrs: {
                        context: t
                    }
                })
            }
            )), 1) : t._e()], 1)
        }
          , Bt = []
          , Gt = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {}, [o("span", {
                staticClass: "dashBack flex px-2",
                on: {
                    click: t.dashMenuClick
                }
            }, [o("i", {
                staticClass: "material-icons he-logo-mark"
            })]), o("span", {
                staticClass: "dashName flex pr-2"
            }, [t._v(" " + t._s(t.layout.name) + " ")]), o("span", {
                staticClass: "flex flex-auto justify-end"
            }, [t.isConnected ? t._e() : o("span", {
                staticClass: "flex cursor-pointer px-2",
                on: {
                    click: t.refresh
                }
            }, [o("i", {
                staticClass: "material-icons text-red-600"
            }, [t._v(" error ")])]), t.isConnected && !t.notLoaded ? o("span", {
                staticClass: "flex cursor-pointer px-1",
                on: {
                    click: t.refresh
                }
            }, [o("i", {
                staticClass: "material-icons text-green-600"
            }, [t._v(" check_circle ")])]) : t._e(), t.layout.readOnly || t.notLoaded ? t._e() : o("span", {
                staticClass: "showSidePanelBtn flex cursor-pointer px-1",
                on: {
                    click: t.toggleAddTile
                }
            }, [o("i", {
                staticClass: "material-icons"
            }, [t._v(" add ")])]), t.layout.readOnly || t.notLoaded ? t._e() : o("span", {
                staticClass: "showSidePanelBtn flex cursor-pointer px-1",
                on: {
                    click: t.toggleMenu
                }
            }, [o("i", {
                staticClass: "material-icons"
            }, [t._v(" settings ")])])])])
        }
          , Ut = [];
        function Wt(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function Xt(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Wt(Object(o), !0).forEach((function(e) {
                    Kt(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : Wt(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function Kt(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var Jt = {
            name: "Header",
            computed: Xt({}, Object(m["b"])(["layout", "notLoaded", "isConnected", "grid", "row", "col"])),
            methods: {
                toggleMenu: function() {
                    this.$store.commit("TOGGLE_MENU")
                },
                toggleAddTile: function() {
                    this.$store.commit("SHOW_MENUTILE", {
                        id: -1,
                        template: "",
                        row: null,
                        col: null,
                        rowSpan: 1,
                        colSpan: 1
                    })
                },
                dashMenuClick: function() {
                    allowGoBack && (window.location = "../../" + parentId + "/menu?access_token=" + parentToken)
                },
                refresh: function() {
                    location.reload(!0)
                }
            }
        }
          , qt = Jt
          , Zt = Object(k["a"])(qt, Gt, Ut, !1, null, null, null)
          , Qt = Zt.exports
          , te = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-screen"
            }, [o("div", {
                staticClass: "popup-content inset-auto relative bg-white z-50 w-full md:w-2/3 mx-auto md:mt-16 flex-col flex shadow-xl border h-auto overflow-auto md:h-auto rounded-xl "
            }, [o("div", {
                staticClass: "navHeader bg-black text-white p-2 w-full h-10"
            }, [o("div", {
                staticClass: "w-full flex justify-end flex-grow flex-row flex-no-wrap bg-black text-white "
            }, [t.showDashboardBuilder ? t._e() : o("div", {
                staticClass: "inline-block px-2 cursor-pointer",
                on: {
                    click: t.dashboardBuilder
                }
            }, [t._v(" " + t._s(t.local.dashboardBuilder) + " ")]), t.showDashboardBuilder ? o("div", {
                staticClass: "inline-block px-2 cursor-pointer",
                on: {
                    click: t.dashboardBuilder
                }
            }, [t._v(" " + t._s(t.local.gettingStarted) + " ")]) : t._e(), o("div", {
                staticClass: "inline-block pl-4 pr-2 cursor-pointer",
                on: {
                    click: t.openMenuTile
                }
            }, [t._v(" X ")])])]), o("div", {
                staticClass: "py-2 px-4 h-screen md:h-auto overflow-auto"
            }, [o("div", {
                staticClass: "py-2 text-lg"
            }, [t._v(" " + t._s(t.local.gettingStarted) + " ")]), t.showDashboardBuilder ? t._e() : o("div", {}, [o("div", {
                staticClass: "w-full"
            }, [o("p", {
                staticClass: "py-2"
            }, [t._v(" " + t._s(t.local.dashboardInfo1) + " ")]), o("p", {
                staticClass: "py-2"
            }, [t._v(" " + t._s(t.local.dashboardInfo2) + " " + t._s(t.devices.length - 1) + " ")]), o("p", {
                staticClass: "py-2"
            }, [t._v(" " + t._s(t.local.dashboardInfo3) + " "), o("br"), t._v(" " + t._s(t.cols) + " x " + t._s(t.rows) + " ")])]), o("div", {
                staticClass: "w-full py-1"
            }, [o("p", [o("i", {
                staticClass: "material-icons pr-2"
            }, [t._v(" settings ")]), t._v(" " + t._s(t.local.dashboardGearText) + " ")])]), o("div", {
                staticClass: "w-full py-1"
            }, [o("p", [o("i", {
                staticClass: "material-icons pr-2"
            }, [t._v(" add ")]), t._v(" " + t._s(t.local.dashboardPlusIconText) + " ")])]), o("div", {
                staticClass: "w-full py-1"
            }, [o("p", [o("i", {
                staticClass: "material-icons text-green-600 pr-2"
            }, [t._v(" check_circle ")]), t._v(" " + t._s(t.local.dashboardCheckText) + " ")])]), o("div", {
                staticClass: "w-full py-1"
            }, [o("p", [o("i", {
                staticClass: "material-icons text-red-600 pr-2"
            }, [t._v(" error ")]), t._v(" " + t._s(t.local.dashboardRedCircleText) + " ")])]), o("div", {
                staticClass: "w-full py-2"
            }, [o("p", [t._v(" " + t._s(t.local.dashboardInfo4) + " ")])]), o("div", {
                staticClass: "w-full py-2"
            }, [o("p", [t._v(" " + t._s(t.local.dashboardInfo5) + " ")])]), o("div", {
                staticClass: "w-full py-2"
            }, [o("p", [t._v(" " + t._s(t.local.dashboardInfo6) + " ")])]), o("div", {
                staticClass: "w-full py-2"
            }, [o("div", {
                staticClass: "shadow px-4 py-2 bg-gray-200 m-2 inline-block",
                on: {
                    click: t.autoFillGrid
                }
            }, [t._v(" " + t._s(t.local.autoFillGrid) + " " + t._s(t.cols) + " x " + t._s(Math.ceil(t.devices.length / t.cols)) + " ")]), o("div", {
                staticClass: "shadow px-4 py-2 bg-gray-200 m-2 inline-block",
                on: {
                    click: t.openMenuTile
                }
            }, [t._v(" " + t._s(t.local.manuallyAddTiles) + " ")])])]), t.showDashboardBuilder ? o("div", {
                staticClass: "p-2"
            }, [o("div", {
                staticClass: "w-full"
            }, [o("div", {
                staticClass: "text-lg"
            }, [t._v(" " + t._s(t.local.dashboardBuilder) + " ")]), o("p", [t._v(" " + t._s(t.local.dashboardBuilderText) + " ")]), o("div", [o("input", {
                attrs: {
                    name: "dashboardBuilder",
                    type: "checkbox",
                    checked: "",
                    value: "switch"
                }
            }), t._v(" " + t._s(t.templates["switches"]) + " ")]), o("div", [o("input", {
                attrs: {
                    name: "dashboardBuilder",
                    type: "checkbox",
                    checked: "",
                    value: "level"
                }
            }), t._v(" " + t._s(t.templates["dimmer"]) + " ")]), o("div", [o("input", {
                attrs: {
                    name: "dashboardBuilder",
                    type: "checkbox",
                    checked: "",
                    value: "battery"
                }
            }), t._v(" " + t._s(t.templates["battery"]) + " ")]), o("div", [o("input", {
                attrs: {
                    name: "dashboardBuilder",
                    type: "checkbox",
                    checked: "",
                    value: "temperature"
                }
            }), t._v(" " + t._s(t.templates["temperature"]) + " ")]), o("div", [o("input", {
                attrs: {
                    name: "dashboardBuilder",
                    type: "checkbox",
                    checked: "",
                    value: "contact"
                }
            }), t._v(" " + t._s(t.templates["contact"]) + " ")]), o("div", [o("input", {
                attrs: {
                    name: "dashboardBuilder",
                    type: "checkbox",
                    checked: "",
                    value: "motion"
                }
            }), t._v(" " + t._s(t.templates["motion"]) + " ")]), o("div", [o("input", {
                attrs: {
                    name: "dashboardBuilder",
                    type: "checkbox",
                    checked: "",
                    value: "water"
                }
            }), t._v(" " + t._s(t.templates["water"]) + " ")]), o("div", [o("input", {
                attrs: {
                    name: "dashboardBuilder",
                    type: "checkbox",
                    checked: "",
                    value: "presence"
                }
            }), t._v(" " + t._s(t.templates["presence"]) + " ")]), o("div", {
                staticClass: "py-2"
            }, [o("div", {
                staticClass: "text-lg"
            }, [t._v(" " + t._s(t.local.options) + " ")]), o("input", {
                attrs: {
                    id: "newRow",
                    name: "newRow",
                    type: "checkbox",
                    checked: "",
                    value: "newRow"
                }
            }), t._v(" " + t._s(t.local.newRowForEachGroup) + " ")]), o("div", {
                staticClass: "shadow px-4 py-2 bg-gray-200 m-2 inline-block",
                on: {
                    click: t.buildDashboard
                }
            }, [t._v(" " + t._s(t.local.buildMyDashboard) + " ")])])]) : t._e()])])])
        }
          , ee = [];
        function oe(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function ae(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? oe(Object(o), !0).forEach((function(e) {
                    ne(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : oe(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function ne(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var ie = {
            name: "NoTiles",
            data: function() {
                return {
                    showDashboardBuilder: !1
                }
            },
            computed: ae({}, Object(m["b"])(["local", "layout", "devices", "templates", "grid"]), {
                rows: function() {
                    return Math.floor(window.innerHeight / 180)
                },
                cols: function() {
                    var t = Math.floor(window.innerWidth / 200);
                    return t < 2 && (t = 2),
                    t
                }
            }),
            created: function() {},
            mounted: function() {},
            updated: function() {},
            methods: {
                autoFillGrid: function() {
                    var t = this;
                    this.$store.commit("SET_COLS", this.cols),
                    this.$store.commit("SET_ROWS", Math.ceil(this.devices.length / this.cols)),
                    this.$store.commit("SET_COLWIDTH", 200),
                    this.$store.commit("SET_ROWHEIGHT", 190);
                    var e = 1
                      , o = 1
                      , a = 0;
                    this.devices.forEach((function(n) {
                        if (void 0 == n.t && ("Dashboards" == n.label && (n.t = "dashboard"),
                        "HSM Status" == n.label && (n.t = "hsm"),
                        "Modes" == n.label && (n.t = "mode")),
                        "dashboard" != n.t) {
                            var i = {
                                id: a,
                                bgImage: "",
                                col: o,
                                colSpan: 1,
                                device: n.id,
                                row: e,
                                rowSpan: 1,
                                template: re(n.t),
                                templateExtra: ""
                            };
                            t.$store.commit("ADD_TILE", i),
                            o + 1 < parseInt(t.layout.cols) + 1 ? o++ : (o = 1,
                            e++),
                            a++
                        }
                    }
                    ))
                },
                openMenuTile: function() {
                    this.$store.commit("SET_COLS", this.cols),
                    this.$store.commit("SET_ROWS", this.rows),
                    this.$store.commit("SET_COLWIDTH", 200),
                    this.$store.commit("SET_ROWHEIGHT", 190),
                    document.getElementsByClassName("popup-container")[0].style.display = "none",
                    this.$store.commit("SHOW_MENUTILE", {
                        id: -1,
                        template: "",
                        row: this.row,
                        col: this.col,
                        rowSpan: 1,
                        colSpan: 1
                    })
                },
                dashboardBuilder: function() {
                    this.showDashboardBuilder = !this.showDashboardBuilder
                },
                buildDashboard: function(t) {
                    for (var e = this, o = [], a = t.target.parentElement.getElementsByTagName("input"), n = document.getElementById("newRow").checked, i = 0; a[i]; ++i)
                        a[i].checked && "newRow" != a[i].name && o.push(a[i].value);
                    this.$store.commit("SET_COLS", this.cols),
                    this.$store.commit("SET_COLWIDTH", 200),
                    this.$store.commit("SET_ROWHEIGHT", 190);
                    var r = 1
                      , s = 1
                      , l = (this.cols,
                    0);
                    o.forEach((function(t) {
                        e.devices.forEach((function(o) {
                            var a = o.attr.find((function(e) {
                                return Object.keys(e)[0] == t
                            }
                            ));
                            if (a) {
                                var n = t;
                                "switch" == t && (n = "switches"),
                                "level" == t && (n = "dimmer");
                                var i = {
                                    id: l,
                                    bgImage: "",
                                    col: s,
                                    colSpan: 1,
                                    device: o.id,
                                    row: r,
                                    rowSpan: 1,
                                    template: n,
                                    templateExtra: ""
                                };
                                e.$store.commit("ADD_TILE", i),
                                s + 1 < parseInt(e.layout.cols) + 1 ? s++ : (s = 1,
                                r++),
                                l++
                            }
                        }
                        )),
                        1 == n && (1 != s && r++,
                        s = 1)
                    }
                    )),
                    1 == n && r--,
                    this.$store.commit("SET_ROWS", r)
                }
            }
        }
          , re = function(t) {
            return "button" == t && (t = "buttons"),
            "image" == t && (t = "images"),
            "link" == t && (t = "links"),
            "switch" == t && (t = "switches"),
            t
        }
          , se = ie
          , le = Object(k["a"])(se, te, ee, !1, null, null, null)
          , ce = le.exports
          , ue = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile mode",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" Modes ")]), o("div", {
                staticClass: "tile-contents",
                on: {
                    click: t.showPopup
                }
            }, [o("div", {
                staticClass: "tile-primary",
                class: t.currentMode.name,
                style: {
                    color: t.customColor.iconColor,
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                }
            }, [t._v(" " + t._s(t.currentMode.name) + " ")])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])]), t.modePopup ? o("div", {
                staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-full"
            }, [o("div", {
                staticClass: "popup-content inset-auto relative bg-white z-50 md:w-2/3 mt-12 md:mx-auto flex-col flex shadow-xl h-85p md:h-full md:h-auto overflow-auto rounded-xl cursor-default"
            }, [o("div", {
                staticClass: "top-0 right-0 absolute px-4 py-2 text-black text-lg cursor-pointer",
                on: {
                    click: t.hidePopup
                }
            }, [t._v(" X ")]), o("div", {
                staticClass: "flex flex-row flex-wrap p-2 mt-8 text-center w-full"
            }, [o("div", {
                staticClass: "text-lg w-full p-2"
            }, [o("span", {
                staticClass: "font-bold"
            }, [t._v(t._s(t.currentMode.name))])]), o("div", {
                staticClass: "options w-full text-lg"
            }, [o("div", {
                staticClass: "text-lg w-full"
            }, [t._v(" " + t._s(t.local.changeModeTo) + " ")]), o("div", {
                staticClass: "h-auto overflow-auto"
            }, t._l(t.modes, (function(e, a) {
                return o("div", {
                    key: a,
                    staticClass: "shadow-md w-auto m-2 p-4 border cursor-pointer"
                }, [e.id ? o("div", {
                    on: {
                        click: function(o) {
                            return t.doMode(e.id)
                        }
                    }
                }, [t._v(" " + t._s(e.name) + " ")]) : t._e()])
            }
            )), 0)])])])]) : t._e(), t.pinPopup ? o("div", {
                staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-screen"
            }, [o("div", {
                staticClass: "popup-content inset-auto relative bg-white z-51 mt-12 mx-2 w-auto md:w-1/2 md:mx-auto flex-col flex shadow-xl border-solid border-2 border-gray-400 overflow-auto rounded-xl"
            }, [o("div", {
                staticClass: "top-0 right-0 absolute px-4 py-2 text-black text-lg justify-center",
                on: {
                    click: t.hidePinPopup
                }
            }, [t._v(" X ")]), o("div", {
                staticClass: "flex flex-col flex-wrap p-2 mt-2 text-center w-full justify-center cursor-default"
            }, [o("div", {
                staticClass: "text-lg w-full p-2 font-bold"
            }, [t._v(" " + t._s(t.local.pinEntry) + " ")]), o("div", {
                staticClass: "pinEntry w-full text-center justify-center flex"
            }, [o("div", {
                staticClass: "keyRow py-1 px-4 text-lg text-white bg-black h-8 w-full mx-8 my-1 justify-center",
                domProps: {
                    innerHTML: t._s(t.pinMask)
                }
            })]), o("div", {
                staticClass: "keyRow w-full flex flex-row flex-no-wrap text-3xl justify-center"
            }, [o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(1)
                    }
                }
            }, [t._v(" 1 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(2)
                    }
                }
            }, [t._v(" 2 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(3)
                    }
                }
            }, [t._v(" 3 ")])]), o("div", {
                staticClass: "keyRow w-full flex flex-row flex-no-wrap text-3xl justify-center"
            }, [o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(4)
                    }
                }
            }, [t._v(" 4 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(5)
                    }
                }
            }, [t._v(" 5 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(6)
                    }
                }
            }, [t._v(" 6 ")])]), o("div", {
                staticClass: "keyRow w-full flex flex-row flex-no-wrap text-3xl justify-center"
            }, [o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(7)
                    }
                }
            }, [t._v(" 7 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(8)
                    }
                }
            }, [t._v(" 8 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(9)
                    }
                }
            }, [t._v(" 9 ")])]), o("div", {
                staticClass: "keyRow w-full flex flex-row flex-no-wrap text-3xl justify-center"
            }, [o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: t.clearPin
                }
            }, [t._v(" X ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(0)
                    }
                }
            }, [t._v(" 0 ")]), o("div", {
                staticClass: "keyNum shadow-md py-2 px-1 m-2 bg-green-600 text-3xl content-center cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doMode("pin")
                    }
                }
            }, [t._v(" " + t._s(t.local.go) + " ")])])])])]) : t._e()])
        }
          , de = [];
        function me(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function he(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? me(Object(o), !0).forEach((function(e) {
                    fe(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : me(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function fe(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var pe = {
            name: "Mode",
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    modes: [],
                    modePopup: !1,
                    mode: "unknown",
                    pinPopup: !1,
                    pin: "",
                    pinMask: "",
                    cmd: ""
                }
            },
            computed: he({}, Object(m["b"])(["local", "devices", "layout"]), {
                bgImage: function() {
                    return void 0 != this.context.bgImage && "" != this.context.bgImage ? "url(" + this.context.bgImage + ")" : null
                },
                tileStyle: function() {
                    return {
                        gridRow: this.row,
                        gridColumn: this.col,
                        backgroundColor: this.customColor.bgColor,
                        color: this.customColor.iconColor,
                        fontSize: parseInt(this.layout.fontSize) + "px",
                        // borderRadius: this.layout.roundedCorners + "px",
                        backgroundImage: this.bgImage,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        boxShadow: this.customColor.boxShadow,
                        borderWidth: this.customColor.borderWidth,
                    }
                },
                currentState: function() {
                    return this.devices.filter((function(t) {
                        return "Modes" == t.label
                    }
                    ))
                },
                currentMode: function() {
                    var t = this.currentState[0].attr.find((function(t) {
                        return t.active
                    }
                    ));
                    return t || "not set"
                },
                row: function() {
                    return this.context.row + " / " + parseInt(this.context.row + this.context.rowSpan)
                },
                col: function() {
                    return this.context.col + " / " + parseInt(this.context.col + this.context.colSpan)
                },
                customColor: function() {
                    var t = this
                      , e = this.layout.customColors.filter((function(e) {
                        return e.template == t.context.template && e.state == t.currentMode.name.toLowerCase()
                    }
                    ));
                    return e.length > 0 ? e[0] : {
                        bgColor: "",
                        color: ""
                    }
                }
            }),
            mounted: function() {
                this.modes = this.currentState[0].attr.filter((function(t) {
                    return t.id
                }
                )),
                this.mode = this.currentState.label
            },
            methods: {
                showMenuTile: function() {
                    this.$store.commit("SHOW_MENUTILE", this.context)
                },
                showPopup: function(t) {
                    this.modePopup = !0
                },
                hidePopup: function() {
                    this.modePopup = !1
                },
                hidePinPopup: function() {
                    this.pinPopup = !1
                },
                doPin: function(t) {
                    this.pin += t,
                    "Invalid Pin" == this.pinMask && (this.pinMask = ""),
                    this.pinMask += "*"
                },
                clearPin: function() {
                    this.pin = "",
                    this.pinMask = ""
                },
                doMode: function(t) {
                    if (void 0 != this.layout.modesPin && this.pin != atob(this.layout.modesPin))
                        this.pinPopup = !0,
                        "pin" != t && (this.cmd = t),
                        "" != this.pin && (this.pinMask = "Invalid Pin"),
                        this.pin = "";
                    else {
                        this.pinPopup = !1,
                        this.hsmPopup = !1,
                        this.pin = "",
                        this.pinMask = "",
                        "pin" != t && (this.cmd = t),
                        this.modePopup = !1;
                        var e = {
                            id: this.cmd,
                            cmd: "mode",
                            secondary: ""
                        };
                        this.$store.dispatch("sendCommand", e)
                    }
                }
            }
        }
          , ve = pe
          , be = Object(k["a"])(ve, ue, de, !1, null, null, null)
          , ge = be.exports
          , ye = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile acceleration",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.acceleration
            }, [o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.acceleration.toLowerCase()] ? t.local.states[t.attr.acceleration.toLowerCase()] : t.attr.acceleration) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , we = [];
        function Ce(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function _e(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ce(Object(o), !0).forEach((function(e) {
                    xe(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : Ce(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function xe(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var ke = {
            data: function() {
                return {}
            },
            methods: {
                showMenuTile: function() {
                    this.$store.commit("SHOW_MENUTILE", this.context)
                },
                parseFont: function(t) {
                    if (void 0 != this.context.customIcon && "" != this.context.customIcon && (t = this.context.customIcon),
                    -1 == t.indexOf("he-"))
                        return t
                },
                customIcon: function(t, e, o) {




                    if (void 0 != this.context.customIcon && "" != this.context.customIcon)
                        return this.context.customIcon;
                    if (void 0 != e && "" != e)
                        return e;
                    var a = "he-question1";
                    switch (t[Object.keys(t)[0]] == this.local.sending && (a = "he-hour-glass"),
                    o) {
                    case "acceleration":
                        "active" == t.acceleration && (a = "he-acceleration_active"),
                        "inactive" == t.acceleration && (a = "he-acceleration_inactive");
                        break;
                    case "bulb":
                    case "bulb-color":
                        if (void 0 != this.context.customIconarray && "" != this.context.customIconarray)
                        {
                            if (this.context.customIconarray[t.switch]){
                                return this.context.customIconarray[t.switch];
                            }
                        }
                        "off" == t.switch && (a = "he-bulb_off"),
                        "on" == t.switch && (a = "he-bulb_on");
                        break;
                    case "buttons":
                        if (void 0 != this.context.customIconarray && "" != this.context.customIconarray)
                        {
                            if (this.context.customIconarray["press"]){
                                return this.context.customIconarray["press"];
                            }
                        }
                    case "momentary":
                        a = "he-tap";
                        break;
                    case "level-step":
                        a = "he-settings1";
                        break;
                    case "carbon-monoxide":
                        "detected" == t.carbonMonoxide && (a = "he-cloud1"),
                        "clear" == t.carbonMonoxide && (a = "he-brightness-contrast");
                        break;
                    case "contact":
                    case "multi":
                        "open" == t.contact && (a = "he-contact_open"),
                        "closed" == t.contact && (a = "he-contact_closed");
                        break;
                    case "dimmer":
                        "off" == t.switch && (a = "he-dimmer_low"),
                        "on" == t.switch && (a = "he-dimmer_medium");
                        break;
                    case "door":
                        "open" == t.contact && (a = "he-door_open"),
                        "closed" == t.contact && (a = "he-door_closed");
                        break;
                    case "door-control":
                        "open" == t.door && (a = "he-door_open"),
                        "closed" == t.door && (a = "he-door_closed"),
                        "closing" == t.door && (a = "he-door_exit_2"),
                        "opening" == t.door && (a = "he-door_enter");
                        break;
                    case "fan":
                        "off" == t.speed && (a = "he-fan_off"),
                        "on" == t.speed && (a = "he-fan_on"),
                        "low" == t.speed && (a = "he-fan_low"),
                        "medium-low" == t.speed && (a = "he-fan_med_low"),
                        "medium" == t.speed && (a = "he-fan_med"),
                        "medium-high" == t.speed && (a = "he-fan_med_high"),
                        "high" == t.speed && (a = "he-fan_high"),
                        "auto" == t.speed && (a = "he-fan_auto");
                        break;
                    case "garage":
                        if (void 0 != this.context.customIconarray && "" != this.context.customIconarray)
                        {
                            if (this.context.customIconarray[t.contact]){
                                return this.context.customIconarray[t.contact];
                            }
                        }
                        "open" == t.contact && (a = "he-garage_open"),
                        "closed" == t.contact && (a = "he-garage_closed"),
                        "opening" == t.contact && (a = "he-garage_open"),
                        "closing" == t.contact && (a = "he-garage_closed");
                        break;
                    case "garage-control":
                        if (void 0 != this.context.customIconarray && "" != this.context.customIconarray)
                        {
                            if (this.context.customIconarray[t.door]){
                                return this.context.customIconarray[t.door];
                            }
                        }
                        "open" == t.door && (a = "he-garage_open"),
                        "closed" == t.door && (a = "he-garage_closed"),
                        "opening" == t.door && (a = "he-garage_open"),
                        "closing" == t.door && (a = "he-garage_closed");
                        break;
                    case "lock":
                        if (void 0 != this.context.customIconarray && "" != this.context.customIconarray)
                        {
                            if (this.context.customIconarray[t.lock]){
                                return this.context.customIconarray[t.lock];
                            }
                        }
                        "locked" == t.lock && (a = "he-lock1"),
                        "unlocked" == t.lock && (a = "he-unlocked");
                        break;
                    case "motion":
                        if (void 0 != this.context.customIconarray && "" != this.context.customIconarray)
                        {
                            if (this.context.customIconarray[t.motion]){
                                return this.context.customIconarray[t.motion];
                            }
                        }
                        "active" == t.motion && (a = "he-running"),
                        "inactive" == t.motion && (a = "he-motion-sensor");
                        break;
                    case "outlet":
                        "on" == t.switch && (a = "he-outlet_3"),
                        "off" == t.switch && (a = "he-outlet_off");
                        break;
                    case "presence":
                        "present" == t.presence && (a = "he-user-check"),
                        "not present" == t.presence && (a = "he-not_present");
                        break;
                    case "relay":
                        "on" == t.switch && (a = "he-relay_on"),
                        "off" == t.switch && (a = "he-relay_off");
                        break;
                    case "shades":
                        "on" != t && "open" != t || (a = "he-shades_open"),
                        "off" != t && "closed" != t || (a = "he-shades_closed"),
                        "opening" != t && "closing" != t && "partially open" != t || (a = "he-shades_partially_open");
                        break;
                    case "shock":
                        "clear" == t.shock && (a = "he-window"),
                        "detected" == t.shock && (a = "he-siren");
                        break;
                    case "smoke":
                        "detected" == t.smoke && (a = "he-fire1"),
                        "clear" == t.smoke && (a = "he-fire_alarm_clear");
                        break;
                    case "switches":
                        if (void 0 != this.context.customIconarray && "" != this.context.customIconarray)
                        {
                            if (this.context.customIconarray[t.switch]){
                                return this.context.customIconarray[t.switch];
                            }
                        }


                        "on" == t.switch && (a = "he-switch_2_flipped"),
                        "off" == t.switch && (a = "he-switch_2");
                        // "on" == t.switch && (a = "he-switch_2_flipped"),
                        // "off" == t.switch && (a = "he-switch_2");
                        break;
                    case "valve":
                        "open" == t.valve && (a = "he-valve_4"),
                        "closed" == t.valve && (a = "he-valve");
                        break;
                    case "volume":
                        a = "volume";
                        break;
                    case "water":
                        "wet" == t.water && (a = "he-water"),
                        "dry" == t.water && (a = "he-water_dry");
                        break;
                    case "window":
                        "open" == t.contact && (a = "he-window_2"),
                        "closed" == t.contact && (a = "he-window_1");
                        break;
                    case "scene":
                        a = "he-image1";
                        break;
                    default:
                        break
                    }
                    return a
                }
            },
            computed: _e({}, Object(m["b"])(["local", "templates", "devices", "globalVars", "layout", "socket", "templates"]), {
                bgImage: function() {
                    return void 0 != this.context.bgImage && "" != this.context.bgImage ? "url(" + this.context.bgImage + ")" : null
                },
                process1: function() {
                    return {
                        backgroundColor: this.customColor.iconColor ? this.customColor.iconColor : "rgba(255,255,255,.85)"
                    }
                },
                rail1: function() {
                    return {
                        backgroundColor: "rgba(0,0,0,.5)"
                    }
                },
                tileStyle: function() {

                    // return {
                    //     gridRow: this.row,
                    //     gridColumn: this.col,
                    //     backgroundColor: this.customColor.bgColor,
                    //     color: this.customColor.iconColor,
                    //     fontSize: parseInt(this.layout.fontSize) + "px",
                    //     borderRadius: this.layout.roundedCorners + "px",
                    //     backgroundImage: this.bgImage,
                    //     backgroundPosition: "center center",
                    //     backgroundRepeat: "no-repeat",
                    //     backgroundSize: "cover",
                    //     overflow: "hidden",
                        // boxShadow: this.customColor.boxShadow,
                        // borderWidth: this.customColor.borderWidth,
                    // }
                    return {
                        gridRow: this.row,
                        gridColumn: this.col,
                        backgroundColor: this.customColor.bgColor,
                        color: this.customColor.iconColor,
                        fontSize: parseInt(this.layout.fontSize) + "px",
                        // borderRadius: this.layout.roundedCorners + "px",
                        backgroundImage: this.bgImage,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        textShadow: this.layout.hideTextShadow ? "none" : "1px 1px 4px #000",
                        boxShadow: this.customColor.boxShadow,
                        borderWidth: this.customColor.borderWidth,
                        overflow: this.customColor.overflow
                    }
                },
                currentState: function() {
                    var t, e = this;
                    return t = "0" == this.context.device ? this.devices.find((function(t) {
                        return t.id == e.context.device
                    }
                    )) : this.devices.find((function(t) {
                        return t.id === e.context.device
                    }
                    )),
                    t || {
                        label: "",
                        attr: []
                    }
                },
                name: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.label;
                        return t.length > 30 && (t = t.slice(0, 30) + "…"),
                        t
                    }
                    return ""
                },
                row: function() {
                    return this.context.row + " / " + parseInt(this.context.row + this.context.rowSpan)
                },
                col: function() {
                    return this.context.col + " / " + parseInt(this.context.col + this.context.colSpan)
                },
                customColor: function() {
                    var t = this
                      , e = this.layout.customColors.filter((function(e) {
                        return e.template == t.context.template
                    }
                    ));
                    if (e.length > 0 && void 0 != this.attr) {
                        var o = Object.keys(this.attr)
                          , a = e.filter((function(e) {
                            return e.state == t.attr[o[0]] || "default" == e.state.toLowerCase()
                        }
                        ));
                        if (a.length > 0)
                            return a[0];
                        if (0 == this.layout.noColors) {
                            a = Se(this.context.template, this.attr[Object.keys(this.attr)[0]]);
                            return a
                        }
                        return {
                            bgColor: "",
                            color: ""
                        }
                    }
                    if (void 0 != this.attr) {
                        if (0 == this.layout.noColors) {
                            a = Se(this.context.template, this.attr[Object.keys(this.attr)[0]]);
                            return a
                        }
                        return {
                            bgColor: "",
                            color: ""
                        }
                    }
                    return {
                        bgColor: "",
                        iconColor: ""
                    }
                },
                textSize: function() {
                    var t = parseInt(this.layout.fontSize);
                    return t / 14 + "em"
                },
                iconSize: function() {
                    return void 0 != this.layout.iconSize ? this.layout.iconSize + "px" : this.layout.fontSize / 14 * 3 + "em"
                }
            })
        }
          , Se = function(t, e) {
            var o = {};
            switch (t) {
            case "acceleration":
                "active" == e && (o = {
                    bgColor: "rgba(0, 255, 0, 0.5)",
                    iconColor: ""
                }),
                "inactive" == e && (o = {
                    bgColor: "",
                    iconColor: ""
                });
                break;
            case "battery":
                switch (!0) {
                case parseInt(e) < 25:
                    o = {
                        bgColor: "rgba(255, 0, 0, 0.65)",
                        iconColor: ""
                    };
                    break;
                case parseInt(e) < 50:
                    o = {
                        bgColor: "",
                        iconColor: ""
                    };
                    break;
                case parseInt(e) <= 100:
                    o = {
                        bgColor: "rgba(0, 255, 0, 0.5)",
                        iconColor: ""
                    };
                    break
                }
                break;
            case "bulb":
            case "dimmer":
            case "outlet":
            case "switches":
            case "relay":
            case "shades":
                "on" == e && (o = {
                    bgColor: "rgba(250, 242, 0, .87)",
                    iconColor: ""
                });
                break;
            case "door":
            case "door-control":
            case "garage":
            case "garage-control":
                "open" == e && (o = {
                    bgColor: "rgba(255, 0, 0, 0.65)",
                    iconColor: ""
                }),
                "closed" == e && (o = {
                    bgColor: "rgba(0, 255, 0, 0.5)",
                    iconColor: ""
                });
                break;
            case "contact":
            case "multi":
            case "window":
                "open" == e && (o = {
                    bgColor: "rgba(255, 0, 0, 0.65)",
                    iconColor: ""
                }),
                "closed" == e && (o = {
                    bgColor: "rgba(0, 255, 0, 0.5)",
                    iconColor: ""
                });
                break;
            case "valve":
                "open" == e && (o = {
                    bgColor: "rgba(0, 0, 255, 0.65)",
                    iconColor: ""
                }),
                "closed" == e && (o = {
                    bgColor: "rgba(0, 255, 0, 0.5)",
                    iconColor: ""
                });
                break;
            case "motion":
                "active" == e && (o = {
                    bgColor: "rgba(0, 255, 0, 0.5)",
                    iconColor: ""
                });
                break;
            case "lock":
                "locked" == e && (o = {
                    bgColor: "rgba(0, 255, 0, 0.5)",
                    iconColor: ""
                });
                break;
            case "presence":
                "present" == e && (o = {
                    bgColor: "rgba(0, 255, 0, 0.5)",
                    iconColor: ""
                }),
                "not present" == e && (o = {
                    bgColor: "rgba(255, 0, 0, 0.65)",
                    iconColor: ""
                });
                break;
            case "thermostat":
                "heating" == e && (o = {
                    bgColor: "rgba(255, 0, 0, 0.5)",
                    iconColor: ""
                }),
                "cooling" == e && (o = {
                    bgColor: "rgba(0, 0, 255, 0.5)",
                    iconColor: ""
                });
                break;
            case "shock":
                "detected" == e && (o = {
                    bgColor: "rgba(255, 0, 0, 0.5)",
                    iconColor: ""
                }),
                "clear" == e && (o = {
                    bgColor: "rgba(0, 255, 0, 0.5)",
                    iconColor: ""
                });
                break;
            case "water":
                "dry" == e && (o = {
                    bgColor: "rgba(0, 255, 0, 0.5)",
                    iconColor: ""
                }),
                "wet" == e && (o = {
                    bgColor: "rgba(0, ,0 255, 0.5)",
                    iconColor: ""
                });
                break;
            default:
                o = {
                    bgColor: "",
                    iconColor: ""
                };
                break
            }
            return o
        }
          , Oe = {
            name: "Acceleration",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("acceleration") > -1
                        }
                        ));
                        return t || {
                            acceleration: "unknown"
                        }
                    }
                    return {
                        acceleration: "unknown"
                    }
                }
            }
        }
          , Te = Oe
          , Ee = Object(k["a"])(Te, ye, we, !1, null, null, null)
          , Ie = Ee.exports
          , je = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile battery",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: "battery-" + t.attr.battery
            }, [t.attr.battery < 11 ? o("i", {
                staticClass: "material-icons ",
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v("battery_alert")]) : t._e(), t.attr.battery > 10 && t.attr.battery < 25 ? o("i", {
                staticClass: "material-icons he-battery_empty",
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }) : t._e(), t.attr.battery > 24 && t.attr.battery < 50 ? o("i", {
                staticClass: "material-icons he-battery_25_color",
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }) : t._e(), t.attr.battery >= 50 && t.attr.battery < 75 ? o("i", {
                staticClass: "material-icons he-battery_50_color",
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }) : t._e(), t.attr.battery >= 75 && t.attr.battery < 100 ? o("i", {
                staticClass: "material-icons he-battery_75_color",
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }) : t._e(), 100 == t.attr.battery ? o("i", {
                staticClass: "material-icons he-battery_full",
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }) : t._e(), o("div", [t._v(t._s(t.attr.battery) + t._s(t.attr.unit))])])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Me = []
          , De = {
            name: "Battery",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("battery") > -1
                        }
                        ));
                        return t || {
                            battery: "??",
                            unit: "%"
                        }
                    }
                    return {
                        battery: "unknown",
                        unit: ""
                    }
                }
            }
        }
          , ze = De
          , Pe = Object(k["a"])(ze, je, Me, !1, null, null, null)
          , Le = Pe.exports
          , Ye = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile bulb",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }), o("div", {
                staticClass: "tile-primary",
                class: t.attr.switch,
                on: {
                    click: t.doCommand
                }
            }, [o("div", [o("i", {
                staticClass: "material-icons ",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")])]), o("div", {
                staticClass: "dimmer"
            }, [o("VueSlider", {
                staticStyle: {
                    margin: "0 16px"
                },
                attrs: {
                    min: 0,
                    max: 100,
                    step: 1,
                    "dot-size": 20,
                    height: 12,
                    "process-style": t.process1,
                    "rail-style": t.rail1,
                    lazy: !0
                },
                on: {
                    change: t.updateSlider
                },
                model: {
                    value: t.attr2.level,
                    callback: function(e) {
                        t.$set(t.attr2, "level", e)
                    },
                    expression: "attr2.level"
                }
            })], 1), 0 == t.layout.hideIconText ? o("div", {
                staticClass: "dimLevel"
            }, [t._v(" " + t._s(t.attr2.level) + "% ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , $e = []
          , Ne = o("4971")
          , Ae = o.n(Ne)
          , Re = (o("24df"),
        {
            name: "Bulb",
            components: {
                VueSlider: Ae.a
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("switch") > -1
                        }
                        ));
                        return t || {
                            switch: "unknown"
                        }
                    }
                    return {
                        switch: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("level") > -1
                        }
                        ));
                        return void 0 != t && (t.level = parseInt(t.level)),
                        t || {
                            level: "0"
                        }
                    }
                    return {
                        level: "unknown"
                    }
                }
            },
            methods: {
                updateSlider: function(t) {
                    this.attr2.level = t;
                    var e = {
                        id: parseInt(this.context.device),
                        cmd: "setLevel",
                        secondary: t
                    };
                    this.$store.dispatch("sendCommand", e)
                },
                doCommand: function(t) {
                    var e, o = "";
                    if (-1 == t.target.classList.toString().indexOf("vue") && -1 == t.target.classList.toString().indexOf("dimmer") || t.target.classList.toString().indexOf("he-") > -1) {
                        e = "off" == this.attr.switch ? "on" : "off",
                        this.attr.switch = this.local.sending;
                        var a = {
                            id: parseInt(this.context.device),
                            cmd: e,
                            secondary: o
                        };
                        this.$store.dispatch("sendCommand", a)
                    }
                }
            }
        })
          , He = Re
          , Fe = Object(k["a"])(He, Ye, $e, !1, null, null, null)
          , Ve = Fe.exports
          , Be = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return tile_bulbColor(o,t);
        }
          , Ge = []
          , Ue = {
            name: "BulbColor",
            components: {
                VueSlider: Ae.a,
                Verte: I["a"]
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    popup: !1,
                    tempColor: "",
                    lastSent: "",
                    ctChange: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("switch") > -1
                        }
                        ));
                        return t || {
                            switch: "unknown"
                        }
                    }
                    return {
                        switch: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("level") > -1
                        }
                        ));
                        return t || {
                            level: "0"
                        }
                    }
                    return {
                        level: "unknown"
                    }
                },
                attr3: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("hue") > -1
                        }
                        ));
                        return t || {
                            hue: "0"
                        }
                    }
                    return {
                        hue: "unknown"
                    }
                },
                attr4: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("saturation") > -1
                        }
                        ));
                        return t || {
                            saturation: "0"
                        }
                    }
                    return {
                        saturation: "unknown"
                    }
                },
                attr5: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("colorTemperature") > -1
                        }
                        ));
                        return void 0 != t && (t.colorTemperature = parseInt(t.colorTemperature)),
                        t || {
                            colorTemperature: "0"
                        }
                    }
                    return {
                        colorTemperature: "unknown"
                    }
                },
                colorMode: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("colorMode") > -1
                        }
                        ));
                        return void 0 != t ? t.colorMode : "unknown"
                    }
                    return "unknown"
                },
                color: {
                    get: function() {
                        var t = this.hsv2rgb(3.6 * parseInt(this.attr3.hue), parseInt(this.attr4.saturation), parseInt(this.attr2.level));
                        return "rgb(" + t + ")"
                    },
                    set: function(t) {
                        this.tempColor = t
                    }
                }
            },
            methods: {
                updateSlider: function(t) {
                    this.attr2.level = t;
                    var e = {
                        id: parseInt(this.context.device),
                        cmd: "setLevel",
                        secondary: t
                    };
                    this.$store.dispatch("sendCommand", e)
                },
                updateSliderCT: function(t) {
                    this.attr5.colorTemperature = t;
                    var e = {
                        id: parseInt(this.context.device),
                        cmd: "setColorTemperature",
                        secondary: t
                    };
                    this.ctChange = !0,
                    this.$store.dispatch("sendCommand", e)
                },
                doCommand: function(t) {
                    var e, o = "";
                    if (-1 == t.target.classList.toString().indexOf("vue") && -1 == t.target.classList.toString().indexOf("dimmer") || t.target.classList.toString().indexOf("he-") > -1) {
                        e = "off" == this.attr.switch ? "on" : "off",
                        this.attr.switch = this.local.sending;
                        var a = {
                            id: parseInt(this.context.device),
                            cmd: e,
                            secondary: o
                        };
                        this.$store.dispatch("sendCommand", a)
                    }
                },
                showPopup: function() {
                    this.popup = !0;
                    var t = this.hsv2rgb(3.6 * parseInt(this.attr3.hue), parseInt(this.attr4.saturation), parseInt(this.attr2.level));
                    this.tempColor = "rgb(" + t + ")"
                },
                hidePopup: function() {
                    "on" != this.attr.switch || this.ctChange || "CT" === this.colorMode || this.doColorChange(this.color),
                    this.ctChange = !1,
                    this.popup = !1
                },
                doColorChange: function(t) {
                    var e = this;
                    t = t.match(/\d+/g);
                    var o = this.rgb2hsv(t[0], t[1], t[2])
                      , a = '{"hue":' + Math.round(o.h) + ',"saturation":' + Math.round(o.s) + ',"level":' + Math.round(o.v) + "}"
                      , n = {
                        id: parseInt(e.context.device),
                        cmd: "setColor",
                        secondary: a
                    };
                    e.$store.dispatch("sendCommand", n),
                    e.lastSent = (new Date).getTime()
                },
                changeBulbColor: function(t) {
                    var e = this
                      , o = e.hsv2rgb(3.6 * parseInt(e.attr3.hue), parseInt(e.attr4.saturation), parseInt(e.attr2.level))
                      , a = t.match(/\d+/g);
                    o[0] == a[0] && o[1] == a[1] && o[2] == a[2] || ("" === this.lastSent || this.lastSent + 500 < (new Date).getTime()) && this.doColorChange(t)
                },
                rgb2hsv: function(t, e, o) {
                    var a, n, i, r, s, l, c, u, d, m, h, f;
                    return a = t / 255,
                    n = e / 255,
                    i = o / 255,
                    d = Math.max(a, n, i),
                    m = d - Math.min(a, n, i),
                    h = function(t) {
                        return (d - t) / 6 / m + .5
                    }
                    ,
                    f = function(t) {
                        return Math.round(100 * t) / 100
                    }
                    ,
                    0 == m ? c = u = 0 : (u = m / d,
                    r = h(a),
                    s = h(n),
                    l = h(i),
                    a === d ? c = l - s : n === d ? c = 1 / 3 + r - l : i === d && (c = 2 / 3 + s - r),
                    c < 0 ? c += 1 : c > 1 && (c -= 1)),
                    {
                        h: Math.round(100 * c),
                        s: f(100 * u),
                        v: f(100 * d)
                    }
                },
                hsv2rgb: function(t, e, o) {
                    t /= 60,
                    e /= 100,
                    o /= 100;
                    var a = Math.floor(t) % 6
                      , n = t - Math.floor(t)
                      , i = 255 * o * (1 - e)
                      , r = 255 * o * (1 - e * n)
                      , s = 255 * o * (1 - e * (1 - n));
                    o *= 255;
                    switch (a) {
                    case 0:
                        return [Math.round(o), Math.round(s), Math.round(i)];
                    case 1:
                        return [Math.round(r), Math.round(o), Math.round(i)];
                    case 2:
                        return [Math.round(i), Math.round(o), Math.round(s)];
                    case 3:
                        return [Math.round(i), Math.round(r), Math.round(o)];
                    case 4:
                        return [Math.round(s), Math.round(i), Math.round(o)];
                    case 5:
                        return [Math.round(o), Math.round(i), Math.round(r)]
                    }
                },
                hsl2rgb: function(t, e, o) {
                    var a, n, i;
                    if (0 == e)
                        a = n = i = o;
                    else {
                        var r = function(t, e, o) {
                            return o < 0 && (o += 1),
                            o > 1 && (o -= 1),
                            o < 1 / 6 ? t + 6 * (e - t) * o : o < .5 ? e : o < 2 / 3 ? t + (e - t) * (2 / 3 - o) * 6 : t
                        }
                          , s = o < .5 ? o * (1 + e) : o + e - o * e
                          , l = 2 * o - s;
                        a = r(l, s, t + 1 / 3),
                        n = r(l, s, t),
                        i = r(l, s, t - 1 / 3)
                    }
                    return [Math.round(100 * a), Math.round(100 * n), Math.round(100 * i)]
                }
            }
        }
          , We = Ue
          , Xe = (o("735f"),
        Object(k["a"])(We, Be, Ge, !1, null, null, null))
          , Ke = Xe.exports
          , Je = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            //   console.log(t.context)
            return o("div", {
                staticClass: "tile button",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s( t.context.name ? t.context.name : t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " " + t._s(t.context.templateExtra) + " ")]), o("div", {
                staticClass: "tile-primary",
                on: {
                    click: t.doCommand
                }
            }, [
                
                         
                
                
                o("i", {
                    staticClass: "material-icons",
                    class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                    style: {
                        color: t.customColor.iconColor,
                        fontSize: t.iconSize,
                        width: 1.5 * parseInt(t.layout.iconSize) + "px"
                    }
                }, [
                    
                    (t.context.customIconarray  && t.context.customIconarray.customicon  ? o('img', { style: {
                            height: "50%",
                            "max-width": "100%",
                            "max-height": "100%"
                        },
                        attrs: {
                        src: "housepages/svg.php?name=" +  t.customIcon(t.attr, t.customColor.customIcon, t.context.template) + "&colour=" + t.customColor.iconColor + "&size=" + t.iconSize
                    }}) :  t._v(" " + (t.context.customIconarray  && t.context.customIconarray.customicon  ? '' : (t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")))),
                    
                   
                
                
                
                ]),
                
                
                
                0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.switch.toLowerCase()] ? t.local.states[t.attr.switch.toLowerCase()] : t.attr.switch) + " ")]) : t._e()
            
        
        
        ])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , qe = []
          , Ze = {
            name: "Buttons",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    return void 0 != this.currentState ? {
                        buttons: this.context.templateExtra
                    } : {
                        buttons: "unknown"
                    }
                }
            },
            methods: {
                doCommand: function() {
                    var t = this.context.buttonCommand ? this.context.buttonCommand : "push"
                      , e = this.context.templateExtra
                      , o = {
                        id: parseInt(this.context.device),
                        cmd: t,
                        secondary: e
                    };
                    this.$store.dispatch("sendCommand", o),
                    this.attr.buttons = this.local.sending
                }
            }
        }
          , Qe = Ze
          , to = Object(k["a"])(Qe, Je, qe, !1, null, null, null)
          , eo = to.exports
          , oo = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile co2",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.carbonDioxide,
                style: {
                    color: t.customColor.iconColor,
                    fontSize: 1.75 * parseInt(t.layout.fontSize) + "px"
                }
            }, [t._v(" " + t._s(t.attr.carbonDioxide) + " "), t.context.hideUnit ? t._e() : o("span", {
                staticClass: "small"
            }, [t._v(" " + t._s(t.attr.unit) + " ")]), t.context.hideUnit && void 0 != t.context.customUnit && "" != t.context.customUnit ? o("span", {
                staticClass: "small"
            }, [t._v(" " + t._s(t.context.customUnit) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , ao = []
          , no = {
            name: "CarbonDioxide",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("carbonDioxide") > -1
                        }
                        ));
                        return t || {
                            carbonDioxide: "unknown"
                        }
                    }
                    return {
                        carbonDioxide: "unknown"
                    }
                }
            }
        }
          , io = no
          , ro = Object(k["a"])(io, oo, ao, !1, null, null, null)
          , so = ro.exports
          , lo = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile co",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.carbonMonoxide
            }, [o("i", {
                staticClass: "material-icons ",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.carbonMonoxide.toLowerCase()] ? t.local.states[t.attr.carbonMonoxide.toLowerCase()] : t.attr.carbonMonoxide) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , co = []
          , uo = {
            name: "CarbonMonoxide",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("carbonMonoxide") > -1
                        }
                        ));
                        return t || {
                            carbonMonoxide: "unknown"
                        }
                    }
                    return {
                        switch: "unknown"
                    }
                }
            }
        }
          , mo = uo
          , ho = Object(k["a"])(mo, lo, co, !1, null, null, null)
          , fo = ho.exports
          , po = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile contact",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.contact
            }, [o("i", {
                staticClass: "material-icons ",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.contact.toLowerCase()] ? t.local.states[t.attr.contact.toLowerCase()] : t.attr.contact) + " ")]) : t._e()]), o("div", {
                staticClass: "tile-tertiary"
            }, ["unknown" != t.attr2.battery ? o("span", {
                staticClass: "temperature"
            }, [t._v(t._s(t.attr2.battery) + t._s(t.attr2.unit) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , vo = []
          , bo = {
            name: "Contact",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("contact") > -1
                        }
                        ));
                        return t || {
                            contact: "unknown"
                        }
                    }
                    return {
                        contact: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("battery") > -1
                        }
                        ));
                        return t || {
                            battery: "unknown",
                            unit: "%"
                        }
                    }
                    return {
                        battery: "unknown",
                        unit: ""
                    }
                }
            }
        }
          , go = bo
          , yo = Object(k["a"])(go, po, vo, !1, null, null, null)
          , wo = yo.exports
          , Co = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile dashboard",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents",
                on: {
                    click: t.visitLink
                }
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                style: {
                    color: t.customColor.iconColor,
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                }
            }, [t._v(" " + t._s(t.attr.name) + " ")])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , _o = []
          , xo = {
            name: "Dashboard",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                url: function() {
                    return this.attr.id + window.location.search
                },
                attr: function() {
                    var t = this;
                    if (void 0 != this.currentState) {
                        var e = this.currentState.attr.find((function(e) {
                            return e.id == t.context.templateExtra
                        }
                        ));
                        return e || {
                            dashboard: "unknown"
                        }
                    }
                    return {
                        dashboard: "unknown"
                    }
                }
            },
            methods: {
                visitLink: function() {
                window.location = this.url
                },
                obsoloteTile: function() {
                    alert("Please use regular 'Link' template instead of 'Dashboard link'.")
                }
            }
        }
          , ko = xo
          , So = Object(k["a"])(ko, Co, _o, !1, null, null, null)
          , Oo = So.exports
          , To = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile dimmer",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.switch,
                on: {
                    click: t.doCommand
                }
            }, [o("div", [o("i", {
                staticClass: "material-icons ",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")])]), o("div", {
                staticClass: "dimmer"
            }, [o("VueSlider", {
                staticStyle: {
                    margin: "0 16px"
                },
                attrs: {
                    min: 0,
                    max: 100,
                    step: 1,
                    "dot-size": 20,
                    height: 12,
                    "process-style": t.process1,
                    "rail-style": t.rail1,
                    lazy: !0
                },
                on: {
                    change: t.updateSlider
                },
                model: {
                    value: t.attr2.level,
                    callback: function(e) {
                        t.$set(t.attr2, "level", e)
                    },
                    expression: "attr2.level"
                }
            })], 1), 0 == t.layout.hideIconText ? o("div", {}, [t._v(" " + t._s(t.attr2.level) + "% ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Eo = []
          , Io = {
            name: "Dimmer",
            components: {
                VueSlider: Ae.a
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("switch") > -1
                        }
                        ));
                        return t || {
                            switch: "unknown"
                        }
                    }
                    return {
                        switch: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("level") > -1
                        }
                        ));
                        return t || {
                            level: "0"
                        }
                    }
                    return {
                        level: "unknown"
                    }
                }
            },
            methods: {
                updateSlider: function(t) {
                    this.attr2.level = t;
                    var e = {
                        id: parseInt(this.context.device),
                        cmd: "setLevel",
                        secondary: t
                    };
                    this.$store.dispatch("sendCommand", e)
                },
                doCommand: function(t) {
                    var e, o = "";
                    if (-1 == t.target.classList.toString().indexOf("vue") && -1 == t.target.classList.toString().indexOf("dimmer") || t.target.classList.toString().indexOf("he-") > -1) {
                        e = "off" == this.attr.switch ? "on" : "off",
                        this.attr.switch = this.local.sending;
                        var a = {
                            id: parseInt(this.context.device),
                            cmd: e,
                            secondary: o
                        };
                        this.$store.dispatch("sendCommand", a)
                    }
                }
            }
        }
          , jo = Io
          , Mo = Object(k["a"])(jo, To, Eo, !1, null, null, null)
          , Do = Mo.exports
          , zo = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile door-control",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.door,
                on: {
                    click: t.showPopup
                }
            }, [o("i", {
                staticClass: "material-icons ",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.door.toLowerCase()] ? t.local.states[t.attr.door.toLowerCase()] : t.attr.door) + " ")]) : t._e()]), t.confirmPopup ? o("confirmBox", {
                on: {
                    doCommand: t.doCommand,
                    hidePopup: t.hidePopup
                }
            }) : t._e()], 1), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Po = []
          , Lo = {
            name: "DoorControl",
            components: {
                confirmBox: Dt
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    confirmPopup: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("door") > -1
                        }
                        ));
                        return t || {
                            door: "unknown"
                        }
                    }
                    return {
                        door: "unknown"
                    }
                }
            },
            methods: {
                showPopup: function() {
                    this.confirmPopup = !0
                },
                hidePopup: function() {
                    this.confirmPopup = !1
                },
                doCommand: function() {
                    this.confirmPopup = !1;
                    var t = "";
                    if ("closed" == this.attr.door ? t = "open" : "open" == this.attr.door && (t = "close"),
                    "" != t) {
                        var e = {
                            id: parseInt(this.context.device),
                            cmd: t,
                            secondary: ""
                        };
                        this.$store.dispatch("sendCommand", e),
                        this.attr.contact = this.local.sending
                    }
                }
            }
        }
          , Yo = Lo
          , $o = Object(k["a"])(Yo, zo, Po, !1, null, null, null)
          , No = $o.exports
          , Ao = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile door",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.contact
            }, [o("i", {
                staticClass: "material-icons ",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.contact.toLowerCase()] ? t.local.states[t.attr.contact.toLowerCase()] : t.attr.contact) + " ")]) : t._e()]), o("div", {
                staticClass: "tile-tertiary"
            }, ["unknown" != t.attr2.battery && t.layout.hideLabels ? o("span", {
                staticClass: "temperature"
            }, [t._v(t._s(t.attr2.battery) + t._s(t.attr2.unit) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Ro = []
          , Ho = {
            name: "Door",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("contact") > -1
                        }
                        ));
                        return t || {
                            contact: "unknown"
                        }
                    }
                    return {
                        contact: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("battery") > -1
                        }
                        ));
                        return t || {
                            battery: "unknown",
                            unit: "%"
                        }
                    }
                    return {
                        battery: "unknown",
                        unit: ""
                    }
                }
            }
        }
          , Fo = Ho
          , Vo = Object(k["a"])(Fo, Ao, Ro, !1, null, null, null)
          , Bo = Vo.exports
          , Go = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile energy",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: "energy-" + t.attr.energy,
                style: {
                    color: t.customColor.iconColor,
                    fontSize: 1.75 * parseInt(t.layout.fontSize) + "px"
                }
            }, [t._v(" " + t._s(t.attr.energy) + " ")])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Uo = []
          , Wo = {
            name: "Energy",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("energy") > -1
                        }
                        ));
                        return t || {
                            energy: "unknown"
                        }
                    }
                    return {
                        energy: "unknown"
                    }
                }
            }
        }
          , Xo = Wo
          , Ko = Object(k["a"])(Xo, Go, Uo, !1, null, null, null)
          , Jo = Ko.exports
          , qo = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile fan",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.speed,
                on: {
                    click: t.showPopup
                }
            }, [o("i", {
                staticClass: "material-icons ",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.speed.toLowerCase()] ? t.local.states[t.attr.speed.toLowerCase()] : t.attr.speed) + " ")]) : t._e()]), t.fanPopup ? o("div", {
                staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-full"
            }, [o("div", {
                staticClass: "popup-content inset-auto relative bg-white mt-12 z-50 m-2 md:w-2/3 mt-12 md:mx-auto flex-col flex shadow-xl h-85p md:h-auto overflow-auto rounded-xl"
            }, [o("div", {
                staticClass: "top-0 right-0 absolute px-4 py-2 text-black text-lg",
                on: {
                    click: t.hidePopup
                }
            }, [t._v(" X ")]), o("div", {
                staticClass: "flex flex-row flex-wrap p-2 mt-8 text-center w-full"
            }, [o("div", {
                staticClass: "text-lg w-full"
            }, [t._v(" " + t._s(t.local.changeFanTo) + " ")]), o("div", {
                staticClass: "options w-full text-lg"
            }, [o("div", {
                staticClass: "shadow-md w-auto m-2 p-2 border"
            }, [o("div", {
                staticClass: "hsmItem",
                attrs: {
                    "data-id": "off"
                },
                on: {
                    click: t.doFan
                }
            }, [t._v(" " + t._s(t.local.states.off) + " ")])]), o("div", {
                staticClass: "shadow-md w-auto m-2 p-2 border"
            }, [o("div", {
                staticClass: "hsmItem",
                attrs: {
                    "data-id": "low"
                },
                on: {
                    click: t.doFan
                }
            }, [t._v(" " + t._s(t.local.states.low) + " ")])]), o("div", {
                staticClass: "shadow-md w-auto m-2 p-2 border"
            }, [o("div", {
                staticClass: "hsmItem",
                attrs: {
                    "data-id": "medium-low"
                },
                on: {
                    click: t.doFan
                }
            }, [t._v(" " + t._s(t.local.states["medium-low"]) + " ")])]), o("div", {
                staticClass: "shadow-md w-auto m-2 p-2 border"
            }, [o("div", {
                staticClass: "hsmItem",
                attrs: {
                    "data-id": "medium"
                },
                on: {
                    click: t.doFan
                }
            }, [t._v(" " + t._s(t.local.states.medium) + " ")])]), o("div", {
                staticClass: "shadow-md w-auto m-2 p-2 border"
            }, [o("div", {
                staticClass: "hsmItem",
                attrs: {
                    "data-id": "medium-high"
                },
                on: {
                    click: t.doFan
                }
            }, [t._v(" " + t._s(t.local.states["medium-high"]) + " ")])]), o("div", {
                staticClass: "shadow-md w-auto m-2 p-2 border"
            }, [o("div", {
                staticClass: "hsmItem",
                attrs: {
                    "data-id": "high"
                },
                on: {
                    click: t.doFan
                }
            }, [t._v(" " + t._s(t.local.states.high) + " ")])]), o("div", {
                staticClass: "shadow-md w-auto m-2 p-2 border"
            }, [o("div", {
                staticClass: "hsmItem",
                attrs: {
                    "data-id": "auto"
                },
                on: {
                    click: t.doFan
                }
            }, [t._v(" " + t._s(t.local.states.auto) + " ")])]), o("div", {
                staticClass: "shadow-md w-auto m-2 p-2 border"
            }, [o("div", {
                staticClass: "hsmItem",
                attrs: {
                    "data-id": "on"
                },
                on: {
                    click: t.doFan
                }
            }, [t._v(" " + t._s(t.local.states.on) + " ")])])])])])]) : t._e()]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Zo = []
          , Qo = {
            name: "Fan",
            components: {},
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    fanPopup: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("speed") > -1
                        }
                        ));
                        return t || {
                            speed: ""
                        }
                    }
                    return {
                        speed: ""
                    }
                }
            },
            methods: {
                showPopup: function(t) {
                    this.fanPopup = !0
                },
                hidePopup: function() {
                    this.fanPopup = !1
                },
                doFan: function(t) {
                    var e, o;
                    if (this.fanPopup = !1,
                    -1 == t.target.classList.toString().indexOf("vue") && -1 == t.target.classList.toString().indexOf("dimmer") || t.target.classList.toString().indexOf("he-") > -1) {
                        e = "setSpeed",
                        o = t.currentTarget.dataset.id;
                        var a = {
                            id: parseInt(this.context.device),
                            cmd: e,
                            secondary: o
                        };
                        this.$store.dispatch("sendCommand", a)
                    }
                }
            }
        }
          , ta = Qo
          , ea = Object(k["a"])(ta, qo, Zo, !1, null, null, null)
          , oa = ea.exports
          , aa = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile garage-control",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.door,
                on: {
                    click: t.doCommand
                }
            }, [
                
                o("i", {
                    staticClass: "material-icons",
                    class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                    style: {
                        color: t.customColor.iconColor,
                        fontSize: t.iconSize,
                        width: 3 * parseInt(t.layout.iconSize) + "px"
                    }
                }, [
                    
                    (t.context.customIconarray  && t.context.customIconarray.customicon  ? o('img', { style: {
                            // width: "80%",
                            height: "80%",
                            "max-width": "100%",
                            "max-height": "100%"
                        },
                        attrs: {
                        src: "housepages/svg.php?name=" +  t.customIcon(t.attr, t.customColor.customIcon, t.context.template) + "&colour=" + t.customColor.iconColor + "&size=" + t.iconSize
                    }}) :  t._v(" " + (t.context.customIconarray  && t.context.customIconarray.customicon  ? '' : (t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")))),
                    
                   
                
                
                
                ]),
                
                
                
                0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.switch.toLowerCase()] ? t.local.states[t.attr.switch.toLowerCase()] : t.attr.switch) + " ")]) : t._e()
            
        
        
        ]), t.confirmPopup ? o("confirmBox", {
                on: {
                    doCommand: t.doCommand,
                    hidePopup: t.hidePopup
                }
            }) : t._e()], 1), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , na = []
          , ia = {
            name: "GarageControl",
            components: {
                confirmBox: Dt
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    confirmPopup: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("door") > -1
                        }
                        ));
                        return t || {
                            door: "unknown"
                        }
                    }
                    return {
                        door: "unknown"
                    }
                }
            },
            methods: {
                showPopup: function() {
                    this.confirmPopup = !0
                },
                hidePopup: function() {
                    this.confirmPopup = !1
                },
                doCommand: function() {
                    this.confirmPopup = !1;
                    var t = "";
                    if ("closed" == this.attr.door ? t = "open" : "open" == this.attr.door && (t = "close"),
                    "" != t) {
                        var e = {
                            id: parseInt(this.context.device),
                            cmd: t,
                            secondary: ""
                        };
                        this.$store.dispatch("sendCommand", e),
                        this.attr.contact = this.local.sending
                    }
                }
            }
        }
          , ra = ia
          , sa = Object(k["a"])(ra, aa, na, !1, null, null, null)
          , la = sa.exports
          , ca = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile garage",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.contact
            }, [o("i", {
                staticClass: "material-icons ",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.contact.toLowerCase()] ? t.local.states[t.attr.contact.toLowerCase()] : t.attr.contact) + " ")]) : t._e()]), o("div", {
                staticClass: "tile-tertiary"
            }, ["unknown" != t.attr2.battery && t.layout.hideLabels ? o("span", {
                staticClass: "temperature"
            }, [t._v(t._s(t.attr2.battery) + t._s(t.attr2.unit) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , ua = []
          , da = {
            name: "Garage",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("contact") > -1
                        }
                        ));
                        return t || {
                            contact: "unknown"
                        }
                    }
                    return {
                        contact: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("battery") > -1
                        }
                        ));
                        return t || {
                            battery: "unknown",
                            unit: "%"
                        }
                    }
                    return {
                        battery: "unknown",
                        unit: ""
                    }
                }
            }
        }
          , ma = da
          , ha = Object(k["a"])(ma, ca, ua, !1, null, null, null)
          , fa = ha.exports
          , pa = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile humidity",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: "humidity-" + t.attr.humidity,
                style: {
                    color: t.customColor.iconColor,
                    fontSize: 1.75 * parseInt(t.layout.fontSize) + "px"
                }
            }, [t._v(" " + t._s(t.attr.humidity) + " "), t.context.hideUnit ? t._e() : o("span", {
                staticClass: "small"
            }, [t._v(" " + t._s(t.attr.unit) + " ")]), t.context.hideUnit && void 0 != t.context.customUnit && "" != t.context.customUnit ? o("span", {
                staticClass: "small"
            }, [t._v(" " + t._s(t.context.customUnit) + " ")]) : t._e()]), o("div", {
                staticClass: "tile-tertiary"
            }, ["unknown" != t.attr2.battery ? o("span", {
                staticClass: "temperature"
            }, [t._v(t._s(t.attr2.battery) + t._s(t.attr2.unit) + " ")]) : t._e()]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])])
        }
          , va = []
          , ba = {
            name: "Humidity",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("humidity") > -1
                        }
                        ));
                        return t || {
                            humidity: "unknown"
                        }
                    }
                    return {
                        humidity: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("battery") > -1
                        }
                        ));
                        return t || {
                            battery: "unknown",
                            unit: "%"
                        }
                    }
                    return {
                        battery: "unknown",
                        unit: ""
                    }
                }
            },
            methods: {}
        }
          , ga = ba
          , ya = Object(k["a"])(ga, pa, va, !1, null, null, null)
          , wa = ya.exports
          , Ca = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile level-step",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: "level-" + t.attr.level
            }, [o("div", [o("i", {
                staticClass: "material-icons ",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customIcon(t.attr, t.customColor.customIcon, t.context.template))) + " ")])]), o("div", {
                staticStyle: {
                    display: "inline-block",
                    width: "100%",
                    "text-align": "center",
                    "padding-bottom": "4px",
                    "padding-top": "8px"
                }
            }, [o("i", {
                staticClass: "material icons he-circle-down",
                staticStyle: {
                    "font-size": "24px"
                },
                on: {
                    click: function(e) {
                        return t.doCommand("down")
                    }
                }
            }), t._v(" "), o("div", {
                style: {
                    fontSize: .75 * t.layout.iconSize + "px",
                    display: "inline-block",
                    textAlign: "center"
                }
            }, [t._v(" " + t._s(t.attr.level) + " ")]), t._v(" "), o("i", {
                staticClass: "material icons he-circle-up",
                staticStyle: {
                    "font-size": "24px"
                },
                on: {
                    click: function(e) {
                        return t.doCommand("up")
                    }
                }
            })])])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , _a = []
          , xa = {
            name: "Volume",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("level") > -1
                        }
                        ));
                        return t || {
                            level: "0"
                        }
                    }
                    return {
                        level: "unknown"
                    }
                }
            },
            methods: {
                doCommand: function(t) {
                    var e, o = "";
                    e = "setLevel",
                    "up" == t ? o = parseInt(this.attr.level) + 10 >= 100 ? 100 : parseInt(this.attr.level) + 10 : "down" == t && (o = parseInt(this.attr.level) - 10 <= 0 ? 0 : parseInt(this.attr.level) - 10);
                    var a = {
                        id: parseInt(this.context.device),
                        cmd: e,
                        secondary: o
                    };
                    this.$store.dispatch("sendCommand", a)
                }
            }
        }
          , ka = xa
          , Sa = Object(k["a"])(ka, Ca, _a, !1, null, null, null)
          , Oa = Sa.exports
          , Ta = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return tile_Levelvertical(o,t);
        }, Ta = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return tile_Levelvertical(o,t);
        }
          , Ea = []
          , Ia = {
            name: "SliderVertical",
            components: {
                VueSlider: Ae.a
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    sliderHeight: 80
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("level") > -1
                        }
                        ));
                        return t || {
                            level: ""
                        }
                    }
                    return {
                        level: "unknown"
                    }
                }
            },
            mounted: function() {
                this.sliderHeight = this.$el.clientHeight - 72
            },
            methods: {
                updateSlider: function(t) {
                    this.attr.level = t;
                    var e = "setLevel"
                      , o = {
                        id: parseInt(this.context.device),
                        cmd: e,
                        secondary: parseInt(t)
                    };
                    this.$store.dispatch("sendCommand", o)
                },
                updateSliderTop: function(t) {
                    this.attr.level = 100;
                    var e = "setLevel"
                      , o = {
                        id: parseInt(this.context.device),
                        cmd: e,
                        secondary: parseInt(100)
                    };
                    this.$store.dispatch("sendCommand", o)
                },
                updateSliderbottom: function(t) {
                    this.attr.level = 0;
                    var e = "setLevel"
                      , o = {
                        id: parseInt(this.context.device),
                        cmd: e,
                        secondary: parseInt(0)
                    };
                    this.$store.dispatch("sendCommand", o)
                }
            }
        }
          , ja = Ia
          , Ma = Object(k["a"])(ja, Ta, Ea, !1, null, null, null)
          , Da = Ma.exports
          , za = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile illuminance",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.illuminance,
                style: {
                    color: t.customColor.iconColor,
                    fontSize: 1.75 * parseInt(t.layout.fontSize) + "px"
                }
            }, [t._v(" " + t._s(t.attr.illuminance) + " "), t.context.hideUnit ? t._e() : o("span", {
                staticClass: "small"
            }, [t._v(" " + t._s(t.attr.unit) + " ")]), t.context.hideUnit && void 0 != t.context.customUnit && "" != t.context.customUnit ? o("span", {
                staticClass: "small"
            }, [t._v(" " + t._s(t.context.customUnit) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Pa = []
          , La = {
            name: "Illuminance",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("illuminance") > -1
                        }
                        ));
                        return t || {
                            illuminance: "unknown"
                        }
                    }
                    return {
                        illuminance: "unknown"
                    }
                }
            },
            methods: {}
        }
          , Ya = La
          , $a = Object(k["a"])(Ya, za, Pa, !1, null, null, null)
          , Na = $a.exports
          , Aa = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile link",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents",
                on: {
                    click: t.visitLink
                }
            }, [o("div", {
                staticClass: "tile-primary overflow-hidden",
                style: {
                    color: t.customColor.iconColor,
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                }
            }, [o("div", {
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" " + t._s(t.context.linkName && "" != t.context.linkName ? t.context.linkName : t.context.templateExtra) + " ")])])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Ra = []
          , Ha = {
            name: "Links",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    return {
                        links: "unknown"
                    }
                }
            },
            methods: {
                visitLink: function() {
                    window.location = this.context.templateExtra
                }
            }
        }
          , Fa = Ha
          , Va = Object(k["a"])(Fa, Aa, Ra, !1, null, null, null)
          , Ba = Va.exports
          , Ga = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile lock",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.lock,
                on: {
                    click: t.showPopup
                }
            }, [                  
                
                o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize,
                    width: 2.5 * parseInt(t.layout.iconSize) + "px"
                }
            }, [
                
                (t.context.customIconarray  && t.context.customIconarray.customicon  ? o('img', { style: {
                        // width: "80%",
                        height: "80%",
                        "max-width": "100%",
                        "max-height": "100%"
                    },
                    attrs: {
                    src: "housepages/svg.php?name=" +  t.customIcon(t.attr, t.customColor.customIcon, t.context.template) + "&colour=" + t.customColor.iconColor + "&size=" + t.iconSize
                }}) :  t._v(" " + (t.context.customIconarray  && t.context.customIconarray.customicon  ? '' : (t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")))),
                
               
            
            
            
            ]),
            
            
            
            0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.switch.toLowerCase()] ? t.local.states[t.attr.switch.toLowerCase()] : t.attr.switch) + " ")]) : t._e()
        
        
        ]), "unknown" != t.attr2.battery ? o("div", {
                staticClass: "tile-tertiary"
            }, [t._v(" " + t._s(t.attr2.battery) + t._s(t.attr2.unit) + " ")]) : t._e(), t.confirmPopup ? o("confirmBox", {
                on: {
                    doCommand: t.doCommand,
                    hidePopup: t.hidePopup
                }
            }) : t._e()], 1), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Ua = []
          , Wa = {
            name: "Lock",
            components: {
                confirmBox: Dt
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    confirmPopup: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("lock") > -1
                        }
                        ));
                        return t || {
                            lock: "unknown"
                        }
                    }
                    return {
                        lock: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("battery") > -1
                        }
                        ));
                        return t || {
                            battery: "unknown",
                            unit: "%"
                        }
                    }
                    return {
                        battery: "unknown",
                        unit: ""
                    }
                },
                marginLeft: function() {
                    return "locked" == this.attr.lock ? "16px" : ""
                }
            },
            methods: {
                showPopup: function() {
                    this.confirmPopup = !0
                },
                hidePopup: function() {
                    this.confirmPopup = !1
                },
                doCommand: function() {
                    this.confirmPopup = !1;
                    var t = "locked" == this.attr.lock ? "unlock" : "lock"
                      , e = {
                        id: parseInt(this.context.device),
                        cmd: t,
                        secondary: ""
                    };
                    this.$store.dispatch("sendCommand", e),
                    this.attr.lock = this.local.sending
                }
            }
        }
          , Xa = Wa
          , Ka = Object(k["a"])(Xa, Ga, Ua, !1, null, null, null)
          , Ja = Ka.exports
          , qa = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile momentary",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                on: {
                    click: t.doCommand
                }
            }, [o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")])])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Za = []
          , Qa = {
            name: "Momentary",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("switch") > -1
                        }
                        ));
                        return t || {
                            switch: "unknown"
                        }
                    }
                    return {
                        switch: "unknown"
                    }
                }
            },
            methods: {
                doCommand: function() {
                    var t = "push"
                      , e = ""
                      , o = {
                        id: parseInt(this.context.device),
                        cmd: t,
                        secondary: e
                    };
                    this.$store.dispatch("sendCommand", o),
                    this.attr.switch = this.local.sending
                }
            }
        }
          , tn = Qa
          , en = Object(k["a"])(tn, qa, Za, !1, null, null, null)
          , on = en.exports
          , an = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile motion",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels || "unknown" == t.attr2.battery ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.attr2.battery) + t._s(t.attr2.unit) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.motion
            }, [
                
                
                
                      
                o("i", {
                    staticClass: "material-icons",
                    class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                    style: {
                        color: t.customColor.iconColor,
                        fontSize: t.iconSize,
                        width: 1.5 * parseInt(t.layout.iconSize) + "px"
                    }
                }, [
                    
                    (t.context.customIconarray  && t.context.customIconarray.customicon  ? o('img', { style: {
                            // width: "100%",
                            height: "100%",
                            "max-width": "100%",
                            "max-height": "100%"
                        },
                        attrs: {
                        src: "housepages/svg.php?name=" +  t.customIcon(t.attr, t.customColor.customIcon, t.context.template) + "&colour=" + t.customColor.iconColor + "&size=" + t.iconSize
                    }}) :  t._v(" " + (t.context.customIconarray  && t.context.customIconarray.customicon  ? '' : (t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")))),
                    
                   
                
                
                
                ]),
                
                
                
                0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.switch.toLowerCase()] ? t.local.states[t.attr.switch.toLowerCase()] : t.attr.switch) + " ")]) : t._e()
            
        
        
        ]), o("div", {
                staticClass: "tile-tertiary"
            }, ["unknown" != t.attr3.temperature ? o("span", {
                staticClass: "temperature"
            }, [t._v(t._s(t.attr3.temperature) + t._s(t.attr3.unit) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , nn = []
          , rn = {
            name: "Motion",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("motion") > -1
                        }
                        ));
                        return t || {
                            motion: "unknown"
                        }
                    }
                    return {
                        motion: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("battery") > -1
                        }
                        ));
                        return t || {
                            battery: "unknown",
                            unit: "%"
                        }
                    }
                    return {
                        battery: "unknown",
                        unit: ""
                    }
                },
                attr3: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("temperature") > -1
                        }
                        ));
                        return t || {
                            temperature: "unknown"
                        }
                    }
                    return {
                        temperature: "unknown"
                    }
                }
            }
        }
          , sn = rn
          , ln = Object(k["a"])(sn, an, nn, !1, null, null, null)
          , cn = ln.exports
          , un = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile mmulti",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, ["unknown" != t.attr2.battery ? o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.attr2.battery) + t._s(t.attr2.unit) + " ")]) : t._e(), o("div", {
                staticClass: "tile-primary",
                class: t.attr.contact
            }, [o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.contact.toLowerCase()] ? t.local.states[t.attr.contact.toLowerCase()] : t.attr.contact) + " ")]) : t._e()]), o("div", {
                staticClass: "tile-tertiary"
            }, [o("span", {
                staticClass: "temperature"
            }, [t._v(" " + t._s(t.attr3.temperature) + t._s(t.attr3.unit) + " ")])])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , dn = []
          , mn = {
            name: "Multi",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("contact") > -1
                        }
                        ));
                        return t || {
                            contact: "unknown"
                        }
                    }
                    return {
                        contact: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("battery") > -1
                        }
                        ));
                        return t || {
                            battery: "unknown",
                            unit: "%"
                        }
                    }
                    return {
                        battery: "unknown"
                    }
                },
                attr3: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("temperature") > -1
                        }
                        ));
                        return t || {
                            temperature: "unknown"
                        }
                    }
                    return {
                        temperature: "unknown"
                    }
                }
            }
        }
          , hn = mn
          , fn = Object(k["a"])(hn, un, dn, !1, null, null, null)
          , pn = fn.exports
          , vn = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile outlet",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.switch,
                on: {
                    click: t.doCommand
                }
            }, [o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.switch.toLowerCase()] ? t.local.states[t.attr.switch.toLowerCase()] : t.attr.switch) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , bn = []
          , gn = {
            name: "Outlet",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("switch") > -1
                        }
                        ));
                        return t || {
                            switch: "unknown"
                        }
                    }
                    return {
                        switch: "unknown"
                    }
                }
            },
            methods: {
                doCommand: function() {
                    var t = "off" == this.attr.switch ? "on" : "off"
                      , e = {
                        id: parseInt(this.context.device),
                        cmd: t,
                        secondary: ""
                    };
                    this.$store.dispatch("sendCommand", e),
                    this.attr.switch = this.local.sending
                }
            }
        }
          , yn = gn
          , wn = Object(k["a"])(yn, vn, bn, !1, null, null, null)
          , Cn = wn.exports
          , _n = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile power",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), tile_Power(o,t), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , xn = []
          , kn = {
            name: "Power",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("power") > -1
                        }
                        ));
                        return t || {
                            power: "unknown"
                        }
                    }
                    return {
                        power: "unknown"
                    }
                }
            }
        }
          , Sn = kn
          , On = Object(k["a"])(Sn, _n, xn, !1, null, null, null)
          , Tn = On.exports
          , En = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile presence",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, ["" != t.attr2.battery ? o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.attr2.battery) + t._s(t.attr2.unit) + " ")]) : t._e(), o("div", {
                staticClass: "tile-primary",
                class: t.attr.presence
            }, [o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.presence.toLowerCase()] ? t.local.states[t.attr.presence.toLowerCase()] : t.attr.presence) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , In = []
          , jn = {
            name: "Presence",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("presence") > -1
                        }
                        ));
                        return t || {
                            presence: "unknown"
                        }
                    }
                    return {
                        presence: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("battery") > -1
                        }
                        ));
                        return t || {
                            battery: "",
                            unit: "%"
                        }
                    }
                    return {
                        battery: "unknown"
                    }
                }
            }
        }
          , Mn = jn
          , Dn = Object(k["a"])(Mn, En, In, !1, null, null, null)
          , zn = Dn.exports
          , Pn = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile relay",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.switch,
                on: {
                    click: t.doCommand
                }
            }, [o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.switch.toLowerCase()] ? t.local.states[t.attr.switch.toLowerCase()] : t.attr.switch) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Ln = []
          , Yn = {
            name: "Relay",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("switch") > -1
                        }
                        ));
                        return t || {
                            switch: "unknown"
                        }
                    }
                    return {
                        switch: "unknown"
                    }
                }
            },
            methods: {
                doCommand: function() {
                    var t = "off" == this.attr.switch ? "on" : "off"
                      , e = {
                        id: parseInt(this.context.device),
                        cmd: t,
                        secondary: ""
                    };
                    this.$store.dispatch("sendCommand", e),
                    this.attr.switch = this.local.sending
                }
            }
        }
          , $n = Yn
          , Nn = Object(k["a"])($n, Pn, Ln, !1, null, null, null)
          , An = Nn.exports
          , Rn = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile shades",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.shade,
                on: {
                    click: t.doCommand
                }
            }, [o("div", [o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.shade, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")])]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.shade.toLowerCase()] ? t.local.states[t.shade.toLowerCase()] : t.shade) + " ")]) : t._e(), o("div", {
                staticClass: "dimmer"
            }, [o("VueSlider", {
                staticStyle: {
                    margin: "0 16px"
                },
                attrs: {
                    min: 0,
                    max: 100,
                    step: 1,
                    "dot-size": 20,
                    height: 12,
                    "process-style": t.process1,
                    "rail-style": t.rail1,
                    lazy: !0
                },
                on: {
                    change: t.updateSlider
                },
                model: {
                    value: t.position,
                    callback: function(e) {
                        t.position = e
                    },
                    expression: "position"
                }
            })], 1), 0 == t.layout.hideIconText ? o("div", {}, [t._v(" " + t._s(t.position) + "% ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Hn = []
          , Fn = {
            name: "Shades",
            components: {
                VueSlider: Ae.a
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("switch") > -1
                        }
                        ));
                        return t || {
                            switch: "unknown"
                        }
                    }
                    return {
                        switch: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("level") > -1
                        }
                        ));
                        return t || {
                            level: "0"
                        }
                    }
                    return {
                        level: "unknown"
                    }
                },
                attr3: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("windowShade") > -1
                        }
                        ));
                        return t || {
                            windowShade: "unknown"
                        }
                    }
                    return {
                        windowShade: "unknown"
                    }
                },
                attr4: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("position") > -1
                        }
                        ));
                        return t || {
                            position: "-1"
                        }
                    }
                    return {
                        position: "-1"
                    }
                },
                shade: function() {
                    return "unknown" != this.attr3.windowShade ? this.attr3.windowShade : this.attr.switch
                },
                position: {
                    get: function() {
                        return "-1" != this.attr4.position ? this.attr4.position : this.attr2.level
                    },
                    set: function(t) {
                        this.attr4.position = t,
                        this.attr2.level = t
                    }
                }
            },
            methods: {
                updateSlider: function(t) {
                    this.attr2.level = t;
                    var e = "setPosition";
                    "-1" == this.attr4.position && (e = "setLevel");
                    var o = {
                        id: parseInt(this.context.device),
                        cmd: e,
                        secondary: t
                    };
                    this.$store.dispatch("sendCommand", o)
                },
                doCommand: function(t) {
                    var e = ""
                      , o = "";
                    if ((-1 == t.target.classList.toString().indexOf("vue") && -1 == t.target.classList.toString().indexOf("dimmer") || t.target.classList.toString().indexOf("he-") > -1) && ("unknown" != this.attr3.windowShade ? ("open" == this.attr3.windowShade && (e = "close"),
                    "closed" == this.attr3.windowShade && (e = "open"),
                    "closing" != this.attr3.windowShade && "opening" != this.attr3.windowShade || (e = "stopPositionChange")) : e = "off" == this.attr.switch ? "on" : "off",
                    "" != e)) {
                        this.attr.switch = this.local.sending;
                        var a = {
                            id: parseInt(this.context.device),
                            cmd: e,
                            secondary: o
                        };
                        this.$store.dispatch("sendCommand", a)
                    }
                }
            }
        }
          , Vn = Fn
          , Bn = Object(k["a"])(Vn, Rn, Hn, !1, null, null, null)
          , Gn = Bn.exports
          , Un = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile shock",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.shock
            }, [o("i", {
                staticClass: "material-icons ",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.shock.toLowerCase()] ? t.local.states[t.attr.shock.toLowerCase()] : t.attr.shock) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Wn = []
          , Xn = {
            name: "GlassBreak",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("shock") > -1
                        }
                        ));
                        return t || {
                            shock: "unknown"
                        }
                    }
                    return {
                        shock: "unknown"
                    }
                }
            }
        }
          , Kn = Xn
          , Jn = Object(k["a"])(Kn, Un, Wn, !1, null, null, null)
          , qn = Jn.exports
          , Zn = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile smoke",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.smoke
            }, [
                
                
                o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize,
                },
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]),
             0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.smoke.toLowerCase()] ? t.local.states[t.attr.smoke.toLowerCase()] : t.attr.smoke) + " ")]) : t._e()
        
        
        ])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Qn = []
          , ti = {
            name: "Smoke",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("smoke") > -1
                        }
                        ));
                        return t || {
                            smoke: "unknown"
                        }
                    }
                    return {
                        smoke: "unknown"
                    }
                }
            }
        }
          , ei = ti
          , oi = Object(k["a"])(ei, Zn, Qn, !1, null, null, null)
          , ai = oi.exports
          , ni = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            //   console.log(t.templates);
            return o("div", {
                staticClass: "tile switch",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.switch,
                on: {
                    click: t.doCommand
                }
            }, [
                
                
                
                o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize,
                    width: 1.5 * parseInt(t.layout.iconSize) + "px"
                }
            }, [
                
                (t.context.customIconarray  && t.context.customIconarray.customicon  ? o('img', { style: {
                        // width: "80%",
                        height: "80%",
                        "max-width": "100%",
                        "max-height": "100%"
                    },
                    attrs: {
                    src: "housepages/svg.php?name=" +  t.customIcon(t.attr, t.customColor.customIcon, t.context.template) + "&colour=" + t.customColor.iconColor + "&size=" + t.iconSize
                }}) :  t._v(" " + (t.context.customIconarray  && t.context.customIconarray.customicon  ? '' : (t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")))),
                
               
            
            
            
            ]),
            
            
            
            0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.local.states[t.attr.switch.toLowerCase()] ? t.local.states[t.attr.switch.toLowerCase()] : t.attr.switch) + " ")]) : t._e()
        
        
        ])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , ii = []
          , ri = {
            name: "Switches",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("switch") > -1
                        }
                        ));
                        return t || {
                            switch: "unknown"
                        }
                    }
                    return {
                        switch: "unknown"
                    }
                }
            },
            updated: function() {},
            methods: {
                doCommand: function() {
                    var t = "off" == this.attr.switch ? "on" : "off"
                      , e = {
                        id: parseInt(this.context.device),
                        cmd: t,
                        secondary: ""
                    };
                    this.$store.dispatch("sendCommand", e),
                    this.attr.switch = this.local.sending
                }
            }
        }
          , si = ri
          , li = Object(k["a"])(si, ni, ii, !1, null, null, null)
          , ci = li.exports
          , ui = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile temperature",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: "temp-" + t.attr.contact,
                style: {
                    color: t.customColor.iconColor,
                    fontSize: 1.75 * parseInt(t.layout.fontSize) + "px"
                }
            }, [t._v(" " + t._s(t.attr.temperature) + " "), t.context.hideUnit ? t._e() : o("span", {
                staticClass: "small"
            }, [t._v(" " + t._s(t.attr.unit) + " ")]), t.context.hideUnit && void 0 != t.context.customUnit && "" != t.context.customUnit ? o("span", {
                staticClass: "small"
            }, [t._v(" " + t._s(t.context.customUnit) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , di = []
          , mi = {
            name: "Temperature",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("temperature") > -1
                        }
                        ));
                        return t || {
                            temperature: "unknown"
                        }
                    }
                    return {
                        temperature: "unknown"
                    }
                }
            }
        }
          , hi = mi
          , fi = Object(k["a"])(hi, ui, di, !1, null, null, null)
          , pi = fi.exports
          , vi = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return tile_heatingcontrol(o,t)
        }
          , bi = []
          , gi = {
            name: "Thermostat",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    hvacPopup: !1,
                    fanPopup: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("thermostatOperatingState") > -1
                        }
                        ));
                        return t || {
                            thermostatOperatingState: "unknown"
                        }
                    }
                    return {
                        thermostatOperatingState: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("coolingSetpoint") > -1
                        }
                        ));
                        return t || {
                            coolingSetpoint: "unknown"
                        }
                    }
                    return {
                        coolingSetpoint: "unknown"
                    }
                },
                attr3: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("heatingSetpoint") > -1
                        }
                        ));
                        return t || {
                            heatingSetpoint: "unknown"
                        }
                    }
                    return {
                        heatingSetpoint: "unknown"
                    }
                },
                attr4: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("supportedThermostatFanModes") > -1
                        }
                        ));
                        return t || {
                            supportedThermostatFanModes: ["on", "circulate", "auto"]
                        }
                    }
                    return {
                        supportedThermostatFanModes: "unknown"
                    }
                },
                attr5: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("supportedThermostatModes") > -1
                        }
                        ));
                        return t || {
                            supportedThermostatModes: ["auto", "cool", "emergency heat", "heat", "off"]
                        }
                    }
                    return {
                        supportedThermostatModes: "unknown"
                    }
                },
                attr6: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("thermostatFanMode") > -1
                        }
                        ));
                        return t || {
                            thermostatFanMode: "unknown"
                        }
                    }
                    return {
                        thermostatFanMode: "unknown"
                    }
                },
                attr7: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("temperature") > -1
                        }
                        ));
                        return t || {
                            temperature: "unknown"
                        }
                    }
                    return {
                        temperature: "unknown"
                    }
                },
                attr8: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("thermostatMode") > -1
                        }
                        ));
                        return void 0 != t && (t.thermostatMode = t.thermostatMode.trim()),
                        t || {
                            thermostatMode: "unknown"
                        }
                    }
                    return {
                        thermostatMode: "unknown"
                    }
                },
                supportedThermostatModes: function() {
                    var t = this.attr5.supportedThermostatModes;
                    return t = t.toString().replace("[", "").replace("]", "").split(",").map((function(t) {
                        return t.trim()
                    }
                    )),
                    t
                },
                supportedThermostatFanModes: function() {
                    var t = this.attr4.supportedThermostatFanModes;
                    return t = t.toString().replace("[", "").replace("]", "").split(",").map((function(t) {
                        return t.trim()
                    }
                    )),
                    t
                }
            },
            methods: {
                showHVAC: function() {
                    this.hvacPopup = !0
                },
                hideHVAC: function() {
                    this.hvacPopup = !1
                },
                showFan: function() {
                    this.fanPopup = !0
                },
                hideFan: function() {
                    this.fanPopup = !1
                },
                increaseCoolingSetpoint: function() {
                    var t = "C" == this.layout.tempScale ? .5 : 1;
                    if (void 0 != this.context.templateExtra) {
                        var e = parseFloat(this.context.templateExtra);
                        t = isNaN(e) ? t : e
                    }
                    this.attr2.coolingSetpoint = (parseFloat(this.attr2.coolingSetpoint) + t).toFixed(1);
                    var o = {
                        id: parseInt(this.context.device),
                        cmd: "setCoolingSetpoint",
                        secondary: parseFloat(this.attr2.coolingSetpoint)
                    };
                    this.$store.dispatch("sendCommand", o)
                },
                decreaseCoolingSetpoint: function() {
                    var t = "C" == this.layout.tempScale ? .5 : 1;
                    if (void 0 != this.context.templateExtra) {
                        var e = parseFloat(this.context.templateExtra);
                        t = isNaN(e) ? t : e
                    }
                    this.attr2.coolingSetpoint = (parseFloat(this.attr2.coolingSetpoint) - t).toFixed(1);
                    var o = {
                        id: parseInt(this.context.device),
                        cmd: "setCoolingSetpoint",
                        secondary: parseFloat(this.attr2.coolingSetpoint)
                    };
                    this.$store.dispatch("sendCommand", o)
                },
                increaseHeatingSetpoint: function() {
                    var t = "C" == this.layout.tempScale ? .5 : 1;
                    if (void 0 != this.context.templateExtra) {
                        var e = parseFloat(this.context.templateExtra);
                        t = isNaN(e) ? t : e
                    }
                    this.attr3.heatingSetpoint = (parseFloat(this.attr3.heatingSetpoint) + t).toFixed(1);
                    var o = {
                        id: parseInt(this.context.device),
                        cmd: "setHeatingSetpoint",
                        secondary: parseFloat(this.attr3.heatingSetpoint)
                    };
                    this.$store.dispatch("sendCommand", o)
                },
                decreaseHeatingSetpoint: function() {
                    var t = "C" == this.layout.tempScale ? .5 : 1;
                    if (void 0 != this.context.templateExtra) {
                        var e = parseFloat(this.context.templateExtra);
                        t = isNaN(e) ? t : e
                    }
                    this.attr3.heatingSetpoint = (parseFloat(this.attr3.heatingSetpoint) - t).toFixed(1);
                    var o = {
                        id: parseInt(this.context.device),
                        cmd: "setHeatingSetpoint",
                        secondary: parseFloat(this.attr3.heatingSetpoint)
                    };
                    this.$store.dispatch("sendCommand", o)
                },
                doMode: function(t) {
                    var e = {
                        id: parseInt(this.context.device),
                        cmd: "setThermostatMode",
                        secondary: t
                    };
                    this.$store.dispatch("sendCommand", e),
                    this.hvacPopup = !1
                },
                doFanMode: function(t) {
                    var e = {
                        id: parseInt(this.context.device),
                        cmd: "setThermostatFanMode",
                        secondary: t
                    };
                    this.$store.dispatch("sendCommand", e),
                    this.fanPopup = !1
                }
            }
        }
          , yi = gi
          , wi = Object(k["a"])(yi, vi, bi, !1, null, null, null)
          , Ci = wi.exports
          , _i = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile valve",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.contact,
                on: {
                    click: t.showPopup
                }
            }, [o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.attr.contact) + " ")]) : t._e()]), t.confirmPopup ? o("confirmBox", {
                on: {
                    doCommand: t.doCommand,
                    hidePopup: t.hidePopup
                }
            }) : t._e()], 1), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , xi = []
          , ki = {
            name: "Valve",
            components: {
                confirmBox: Dt
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    confirmPopup: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("valve") > -1
                        }
                        ));
                        return t || {
                            valve: "unknown"
                        }
                    }
                    return {
                        valve: "unknown"
                    }
                }
            },
            methods: {
                showPopup: function() {
                    this.confirmPopup = !0
                },
                hidePopup: function() {
                    this.confirmPopup = !1
                },
                doCommand: function() {
                    this.confirmPopup = !1;
                    var t = "";
                    if ("closed" == this.attr.valve && (t = "open"),
                    "open" == this.attr.valve && (t = "close"),
                    "" != t) {
                        var e = {
                            id: parseInt(this.context.device),
                            cmd: t,
                            secondary: ""
                        };
                        this.$store.dispatch("sendCommand", e),
                        this.attr.valve = this.local.sending
                    }
                }
            }
        }
          , Si = ki
          , Oi = Object(k["a"])(Si, _i, xi, !1, null, null, null)
          , Ti = Oi.exports
          , Ei = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile water",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, ["unknown" != t.attr2.battery ? o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.attr2.battery) + t._s(t.attr2.unit) + " ")]) : t._e(), o("div", {
                staticClass: "tile-primary",
                class: t.attr.water
            }, [o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.attr.water) + " ")]) : t._e()]), o("div", {
                staticClass: "tile-tertiary"
            }, ["unknown" != t.attr3.temperature ? o("span", {
                staticClass: "temperature"
            }, [t._v(" " + t._s(t.attr3.temperature) + t._s(t.attr3.unit) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Ii = []
          , ji = {
            name: "Water",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("water") > -1
                        }
                        ));
                        return t || {
                            water: "unknown"
                        }
                    }
                    return {
                        water: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("battery") > -1
                        }
                        ));
                        return t || {
                            battery: "unknown",
                            unit: "%"
                        }
                    }
                    return {
                        battery: "unknown"
                    }
                },
                attr3: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("temperature") > -1
                        }
                        ));
                        return t || {
                            temperature: "unknown"
                        }
                    }
                    return {
                        temperature: "unknown"
                    }
                }
            }
        }
          , Mi = ji
          , Di = Object(k["a"])(Mi, Ei, Ii, !1, null, null, null)
          , zi = Di.exports
          , Pi = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile window",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: t.attr.contact
            }, [o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), 0 == t.layout.hideIconText ? o("div", [t._v(" " + t._s(t.attr.contact) + " ")]) : t._e()]), o("div", {
                staticClass: "tile-tertiary"
            }, ["unknown" != t.attr2.battery ? o("span", {
                staticClass: "temperature"
            }, [t._v(t._s(t.attr2.battery) + t._s(t.attr2.unit) + " ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Li = []
          , Yi = {
            name: "Window",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("contact") > -1
                        }
                        ));
                        return t || {
                            contact: "unknown"
                        }
                    }
                    return {
                        contact: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("battery") > -1
                        }
                        ));
                        return t || {
                            battery: "unknown",
                            unit: "%"
                        }
                    }
                    return {
                        battery: "unknown",
                        unit: ""
                    }
                }
            }
        }
          , $i = Yi
          , Ni = Object(k["a"])($i, Pi, Li, !1, null, null, null)
          , Ai = Ni.exports
          , Ri = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile weather",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [o("div", {
                staticClass: "tile-primary",
                class: "temp-" + t.attr4.temperature
            }, [o("div", {
                staticClass: "weatherCity"
            }, [t._v(" " + t._s(t.attr2.city) + " ")]), o("div", {
                staticClass: "weatherCurrent"
            }, t._l(t.icons, (function(t, e) {
                return o("div", {
                    key: e,
                    staticClass: "weatherIcon"
                }, [o("img", {
                    attrs: {
                        src: "http://openweathermap.org/img/w/" + t + ".png"
                    }
                })])
            }
            )), 0), o("div", {
                staticClass: "weatherHumidity"
            }, [t._v(" " + t._s(t.attr3.humidity) + "%"), o("br"), t._v(" " + t._s(t.local.humidity) + " ")]), o("div", {
                staticClass: "weatherTemperature"
            }, [t._v(" " + t._s(t.attr4.temperature) + "°"), o("br"), t._v(" " + t._s(t.local.temp) + " ")]), o("div", {
                staticClass: "weatherSpeed"
            }, [t._v(" " + t._s(t.attr5.windSpeed)), o("br"), t._v(" " + t._s(t.local.wind) + " ")]), o("div", {
                staticClass: "weatherDirection"
            }, [o("div", {
                style: {
                    transform: "rotate(" + t.direction + "deg)"
                }
            }, [o("i", {
                staticClass: "material icons he-arrow-up2"
            })]), t._v(" " + t._s(t.local.direction) + " ")])])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Hi = []
          , Fi = {
            name: "Weather",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("weather") > -1
                        }
                        ));
                        return t || {
                            weather: ""
                        }
                    }
                    return {
                        weather: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("city") > -1
                        }
                        ));
                        return t || {
                            city: ""
                        }
                    }
                    return {
                        city: "unknown"
                    }
                },
                attr3: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("humidity") > -1
                        }
                        ));
                        return t || {
                            humidity: ""
                        }
                    }
                    return {
                        humidity: "unknown"
                    }
                },
                attr4: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("temperature") > -1
                        }
                        ));
                        return t || {
                            temperature: ""
                        }
                    }
                    return {
                        temperature: "unknown"
                    }
                },
                attr5: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("windSpeed") > -1
                        }
                        ));
                        return t || {
                            windSpeed: ""
                        }
                    }
                    return {
                        windSpeed: "unknown"
                    }
                },
                direction: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("windDirection") > -1
                        }
                        ));
                        return void 0 != t ? t.windDirection : ""
                    }
                    return {
                        windDirection: "unknown"
                    }
                },
                icons: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("weatherIcons") > -1
                        }
                        ));
                        if (void 0 != t) {
                            var e = t.weatherIcons.slice(-1);
                            return "," == e && (t.weatherIcons = t.weatherIcons.slice(0, -1)),
                            t.weatherIcons.split(",")
                        }
                        return ""
                    }
                    return {
                        weatherIcons: "unknown"
                    }
                }
            }
        }
          , Vi = Fi
          , Bi = (o("4a80"),
        Object(k["a"])(Vi, Ri, Hi, !1, null, "5b4273a2", null))
          , Gi = Bi.exports
          , Ui = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile attribute h-full",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.context.templateExtra) + " ")]), "unknown" != t.attr.attribute ? o("div", {
                staticClass: "tile-primary",
                style: {
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                },
                domProps: {
                    innerHTML: t._s(t.attr[t.context.templateExtra])
                }
            }) : o("div", {
                staticClass: "tile-primary",
                style: {
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                }
            }, [t._v(" Please Select an Attribute ")])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Wi = []
          , Xi = {
            name: "Attribute",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    var t = this;
                    if (void 0 != this.currentState) {
                        if ("-3" == this.context.device || "hsmStatus" == this.context.templateExtra) {
                            var e = this.devices.find((function(t) {
                                return -3 == t.id
                            }
                            ));
                            o = e.attr.find((function(t) {
                                return Object.keys(t).indexOf("status") > -1
                            }
                            ));
                            o[this.context.templateExtra] = o.status
                        } else if ("-2" == this.context.device || "modeStatus" == this.context.templateExtra) {
                            e = this.devices.find((function(t) {
                                return -2 == t.id
                            }
                            )),
                            o = e.attr.find((function(t) {
                                return Object.keys(t).indexOf("status") > -1
                            }
                            ));
                            o[this.context.templateExtra] = o.status
                        } else {
                            if ("lastUpdated" == this.context.templateExtra) {
                                e = this.devices.find((function(e) {
                                    return e.id == t.context.device
                                }
                                ));
                                return void 0 !== e ? {
                                    lastUpdated: this.formatDate(e.lu)
                                } : {
                                    lastUpdated: "unknown"
                                }
                            }
                            var o = this.currentState.attr.find((function(e) {
                                return Object.keys(e).indexOf(t.context.templateExtra) > -1
                            }
                            ))
                        }
                        return o || {
                            attribute: "unknown"
                        }
                    }
                    return o || {
                        attribute: "unknown"
                    }
                }
            },
            methods: {
                formatDate: function(t) {
                    var e = new g.a(t);
                    e.hours(),
                    e.minutes();
                    if (1 == this.layout.clockMode) {
                        if ("DD/MM/YYYY" == this.layout.dateFormat)
                            return e.format("DD/MM/YYYY hh:mm:ss a");
                        if ("MM/DD/YYYY" == this.layout.dateFormat)
                            return e.format("MM/DD/YYYY hh:mm:ss a");
                        if ("YYYY-MM-DD" == this.layout.dateFormat)
                            return e.format("YYYY-MM-DD hh:mm:ss a")
                    } else {
                        if ("DD/MM/YYYY" == this.layout.dateFormat)
                            return e.format("DD/MM/YYYY HH:mm:ss");
                        if ("MM/DD/YYYY" == this.layout.dateFormat)
                            return e.format("MM/DD/YYYY HH:mm:ss");
                        if ("YYYY-MM-DD" == this.layout.dateFormat)
                            return e.format("YYYY-MM-DD HH:mm:ss")
                    }
                }
            }
        }
          , Ki = Xi
          , Ji = (o("76d0"),
        Object(k["a"])(Ki, Ui, Wi, !1, null, null, null))
          , qi = Ji.exports
          , Zi = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile date-clock",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title"
            }), o("div", {
                staticClass: "tile-contents"
            }, [o("div", {
                staticClass: "tile-secondary"
            }), o("div", {
                staticClass: "tile-primary",
                style: {
                    fontSize: 2 * parseInt(t.layout.fontSize) + "px"
                }
            }, [t._v(" " + t._s(t.date) + " "), o("div", {
                style: {
                    fontSize: 2 * parseInt(t.layout.fontSize) + "px"
                },
                domProps: {
                    innerHTML: t._s(t.clock)
                }
            })])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Qi = [];
        function tr(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function er(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? tr(Object(o), !0).forEach((function(e) {
                    or(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : tr(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function or(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var ar = {
            name: "ClockDate",
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    currentState: [],
                    clock: "",
                    polling: null,
                    name: "unknown",
                    date: ""
                }
            },
            computed: er({}, Object(m["b"])(["devices", "layout"]), {
                bgImage: function() {
                    return void 0 != this.context.bgImage && "" != this.context.bgImage ? "url(" + this.context.bgImage + ")" : null
                },
                tileStyle: function() {
                    console.log(this.customColor);
                    return {
                        gridRow: this.row,
                        gridColumn: this.col,
                        backgroundColor: this.customColor.bgColor,
                        color: this.customColor.iconColor,
                        fontSize: parseInt(this.layout.fontSize) + "px",
                        // borderRadius: this.layout.roundedCorners + "px",
                        backgroundImage: this.bgImage,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        boxShadow: this.customColor.boxShadow,
                        borderWidth: this.customColor.borderWidth,
                    }
                },
                row: function() {
                    return this.context.row + " / " + parseInt(this.context.row + this.context.rowSpan)
                },
                col: function() {
                    return this.context.col + " / " + parseInt(this.context.col + this.context.colSpan)
                },
                customColor: function() {
                    var t = this
                      , e = this.layout.customColors.filter((function(e) {
                        return e.template == t.context.template
                    }
                    ));
                    return e.length > 0 ? e[0] : {
                        bgColor: "",
                        color: ""
                    }
                }
            }),
            created: function() {
                this.updateClock(),
                this.updateDate(),
                this.pollClock()
            },
            beforeDestroy: function() {
                clearInterval(this.polling)
            },
            mounted: function() {
                var t = this;
                setInterval((function() {
                    t.updateDate()
                }
                ), 6e4)
            },
            methods: {
                updateDate: function() {
                    var t = new Date
                      , e = t.getDate();
                    e < 10 && (e = "0" + e);
                    var o = t.getMonth() + 1;
                    o < 10 && (o = "0" + o);
                    var a = t.getFullYear()
                      , n = "";
                    "MM/DD/YYYY" == this.layout.dateFormat ? n = o + "/" + e + "/" + a : "DD/MM/YYYY" == this.layout.dateFormat ? n = e + "/" + o + "/" + a : "YYYY-MM-DD" == this.layout.dateFormat && (n = a + "-" + o + "-" + e),
                    this.date = n
                },
                showMenuTile: function() {
                    this.$store.commit("SHOW_MENUTILE", this.context)
                },
                pollClock: function() {
                    var t = this;
                    this.polling = setInterval((function() {
                        t.updateClock()
                    }
                    ), 1e3)
                },
                updateClock: function() {
                    var t = new Date
                      , e = t.getHours()
                      , o = t.getMinutes()
                      , a = t.getSeconds()
                      , n = "";
                    this.layout.clockMode ? (n = e >= 12 ? "pm" : "am",
                    e > 12 ? e -= 12 : 0 == e && (e = 12),
                    a < 10 && (a = "0" + a),
                    o < 10 && (o = "0" + o),
                    this.clock = e + ":" + o + ":" + a + "<small>" + n + "</small>") : (a < 10 && (a = "0" + a),
                    o < 10 && (o = "0" + o),
                    e < 10 && (e = "0" + e),
                    this.clock = e + ":" + o + ":" + a + "<small>" + n + "</small>")
                }
            }
        }
          , nr = ar
          , ir = Object(k["a"])(nr, Zi, Qi, !1, null, null, null)
          , rr = ir.exports
          , sr = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile clockTile",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-contents"
            }, [o("div", {
                staticClass: "clock",
                staticStyle: {
                    "margin-top": "8px"
                },
                style: t.clockStyle
            }, [o("div", {
                staticClass: "clock-circle"
            }), o("div", {
                staticClass: "clock-hour",
                style: {
                    transform: t.hourRotate
                }
            }), o("div", {
                staticClass: "clock-minute",
                style: {
                    transform: t.minuteRotate
                }
            }), o("div", {
                staticClass: "clock-second",
                style: {
                    transform: t.secondRotate
                }
            }), t._l(t.timeList, (function(e) {
                return o("b", {
                    key: e,
                    staticClass: "hour"
                }, [o("span", [o("i", {
                    style: {
                        transform: t.transform
                    }
                }, [t._v(t._s(e))])])])
            }
            ))], 2)]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , lr = [];
        function cr(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function ur(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? cr(Object(o), !0).forEach((function(e) {
                    dr(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : cr(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function dr(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var mr = {
            name: "AnalogClock",
            components: {},
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    currentState: [],
                    name: "",
                    timeList: [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
                    transform: "scale(1)",
                    hourRotate: "rotatez(0deg)",
                    minuteRotate: "rotatez(0deg)",
                    secondRotate: "rotatez(0deg)",
                    size: "120px"
                }
            },
            computed: ur({}, Object(m["b"])(["devices", "layout"]), {
                clockStyle: function() {
                    return {
                        height: this.size,
                        width: this.size,
                        color: this.color,
                        border: this.border,
                        background: this.bg
                    }
                },
                color: function() {
                    return this.customColor.iconColor
                },
                tileStyle: function() {
                    return {
                        gridRow: this.row,
                        gridColumn: this.col,
                        backgroundColor: this.customColor.bgColor,
                        color: this.customColor.iconColor,
                        fontSize: parseInt(this.layout.fontSize) + "px",
                        // borderRadius: this.layout.roundedCorners + "px",
                        backgroundImage: this.bgImage,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        boxShadow: this.customColor.boxShadow,
                        borderWidth: this.customColor.borderWidth,
                    }
                },
                bgImage: function() {
                    return void 0 != this.context.bgImage && "" != this.context.bgImage ? "url(" + this.context.bgImage + ")" : null
                },
                row: function() {
                    return this.context.row + " / " + parseInt(this.context.row + this.context.rowSpan)
                },
                col: function() {
                    return this.context.col + " / " + parseInt(this.context.col + this.context.colSpan)
                },
                customColor: function() {
                    var t = this
                      , e = this.layout.customColors.filter((function(e) {
                        return e.template == t.context.template
                    }
                    ));
                    return e.length > 0 ? e[0] : {
                        bgColor: "",
                        color: ""
                    }
                }
            }),
            watch: {
                time: function() {
                    this.show()
                }
            },
            mounted: function() {
                this.$el.clientWidth > this.$el.clientHeight ? this.size = this.$el.clientHeight - 24 + "px" : this.size = this.$el.clientWidth - 24 + "px",
                this.show()
            },
            destroyed: function() {
                this._timer && clearInterval(this._timer)
            },
            methods: {
                showMenuTile: function() {
                    this.$store.commit("SHOW_MENUTILE", this.context)
                },
                show: function() {
                    var t = this;
                    this.showTime(),
                    this._timer && clearInterval(this._timer),
                    this.time || (this._timer = setInterval((function() {
                        t.showTime()
                    }
                    ), 1e3))
                },
                showTime: function() {
                    var t;
                    if (this.time)
                        t = this.time.split(":");
                    else {
                        var e = new Date;
                        t = [e.getHours(), e.getMinutes(), e.getSeconds()]
                    }
                    var o = +t[0];
                    o = o > 11 ? o - 12 : o;
                    var a = +t[1]
                      , n = +t[2] || 0
                      , i = 30 * o + 6 * a / 360 * 30
                      , r = 6 * a
                      , s = 6 * n;
                    this.hourRotate = "rotatez(".concat(i, "deg)"),
                    this.minuteRotate = "rotatez(".concat(r, "deg)"),
                    this.secondRotate = "rotatez(".concat(s, "deg)")
                }
            }
        }
          , hr = mr
          , fr = (o("053f"),
        Object(k["a"])(hr, sr, lr, !1, null, "05ec36d6", null))
          , pr = fr.exports
          , vr = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile clock",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title"
            }), o("div", {
                staticClass: "tile-contents"
            }, [o("div", {
                staticClass: "tile-secondary"
            }), o("div", {
                staticClass: "tile-primary",
                style: {
                    fontSize: 2 * parseInt(t.layout.fontSize) + "px"
                },
                domProps: {
                    innerHTML: t._s(t.clock)
                }
            })]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , br = [];
        function gr(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function yr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? gr(Object(o), !0).forEach((function(e) {
                    wr(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : gr(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function wr(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var Cr = {
            name: "Clock",
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    currentState: [],
                    clock: "",
                    polling: null,
                    name: "unknown"
                }
            },
            computed: yr({}, Object(m["b"])(["devices", "layout"]), {
                bgImage: function() {
                    return void 0 != this.context.bgImage && "" != this.context.bgImage ? "url(" + this.context.bgImage + ")" : null
                },
                tileStyle: function() {
                    return {
                        gridRow: this.row,
                        gridColumn: this.col,
                        backgroundColor: this.customColor.bgColor,
                        color: this.customColor.iconColor,
                        fontSize: parseInt(this.layout.fontSize) + "px",
                        // borderRadius: this.layout.roundedCorners + "px",
                        backgroundImage: this.bgImage,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        boxShadow: this.customColor.boxShadow,
                        borderWidth: this.customColor.borderWidth,
                    }
                },
                row: function() {
                    return this.context.row + " / " + parseInt(this.context.row + this.context.rowSpan)
                },
                col: function() {
                    return this.context.col + " / " + parseInt(this.context.col + this.context.colSpan)
                },
                customColor: function() {
                    var t = this
                      , e = this.layout.customColors.filter((function(e) {
                        return e.template == t.context.template
                    }
                    ));
                    return e.length > 0 ? e[0] : {
                        bgColor: "",
                        color: ""
                    }
                }
            }),
            created: function() {
                this.updateClock(),
                this.pollClock()
            },
            beforeDestroy: function() {
                clearInterval(this.polling)
            },
            methods: {
                showMenuTile: function() {
                    this.$store.commit("SHOW_MENUTILE", this.context)
                },
                pollClock: function() {
                    var t = this;
                    this.polling = setInterval((function() {
                        t.updateClock()
                    }
                    ), 1e3)
                },
                updateClock: function() {
                    var t = new Date
                      , e = t.getHours()
                      , o = t.getMinutes()
                      , a = t.getSeconds()
                      , n = "";
                    this.layout.clockMode ? (n = e >= 12 ? "pm" : "am",
                    e > 12 ? e -= 12 : 0 == e && (e = 12),
                    a < 10 && (a = "0" + a),
                    o < 10 && (o = "0" + o),
                    this.clock = e + ":" + o + ":" + a + "<small>" + n + "</small>") : (a < 10 && (a = "0" + a),
                    o < 10 && (o = "0" + o),
                    e < 10 && (e = "0" + e),
                    this.clock = e + ":" + o + ":" + a + "<small>" + n + "</small>")
                }
            }
        }
          , _r = Cr
          , xr = Object(k["a"])(_r, vr, br, !1, null, null, null)
          , kr = xr.exports
          , Sr = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile date",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "h-full w-full overflow-hidden",
                staticStyle: {
                    "text-shadow": "none"
                },
                style: {
                    fontSize: 5 * t.ratio + "vmin"
                }
            }, [o("div", {
                staticClass: "bg-white text-black h-full border-black border rounded flex flex-wrap flex-col flex-grow justify-start text-center flex-auto w-full"
            }, [o("div", {
                staticClass: "month p-1 rounded-t w-full text-25"
            }, [t._v(" " + t._s(t.date.m) + " ")]), o("div", {
                staticClass: "flex flex-wrap flex-col flex-grow justify-center text-25"
            }, [o("div", {
                staticClass: "weekday p-1"
            }, [t._v(" " + t._s(t.date.day) + " ")]), o("div", {
                staticClass: "day p-1"
            }, [t._v(" " + t._s(t.date.d) + " ")]), o("div", {
                staticClass: "year p-1"
            }, [t._v(" " + t._s(t.date.y) + " ")])])])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Or = []
          , Tr = {
            name: "Date",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    ratio: 1,
                    date: {}
                }
            },
            computed: {},
            created: function() {
                this.getDate()
            },
            mounted: function() {
                var t = this;
                this.$el.clientWidth > this.$el.clientHeight ? (this.size = this.$el.clientHeight - 24 + "px",
                this.ratio = this.$el.clientHeight / 120) : (this.size = this.$el.clientWidth - 24 + "px",
                this.ratio = this.$el.clientWidth / 120),
                setInterval((function() {
                    t.getDate()
                }
                ), 6e4)
            },
            updated: function() {
                this.$el.clientWidth > this.$el.clientHeight ? (this.size = this.$el.clientHeight - 24 + "px",
                this.ratio = this.$el.clientHeight / 120) : (this.size = this.$el.clientWidth - 24 + "px",
                this.ratio = this.$el.clientWidth / 120)
            },
            methods: {
                showMenuTile: function() {
                    this.$store.commit("SHOW_MENUTILE", this.context)
                },
                getDate: function() {
                    var t = new Date
                      , e = t.getDate()
                      , o = t.getMonth() + 1
                      , a = t.getFullYear()
                      , n = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
                      , i = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    this.date = {
                        d: e,
                        m: i[o - 1],
                        y: a,
                        day: n[t.getDay()]
                    }
                }
            }
        }
          , Er = Tr
          , Ir = (o("e46b"),
        Object(k["a"])(Er, Sr, Or, !1, null, "174247f6", null))
          , jr = Ir.exports
          , Mr = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile generic",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }), o("div", {
                staticClass: "tile-primary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Dr = []
          , zr = {
            name: "Generic",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    attr: {
                        default: ""
                    }
                }
            }
        }
          , Pr = zr
          , Lr = Object(k["a"])(Pr, Mr, Dr, !1, null, null, null)
          , Yr = Lr.exports
          , $r = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile hsm",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents",
                class: t.hsm.name
            }, [o("div", {
                staticClass: "tile-primary w-full h-full",
                style: {
                    color: t.customColor.iconColor,
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                },
                on: {
                    click: t.showPopup
                }
            }, [o("i", {
                staticClass: "material-icons",
                class: t.hsm.icon
            }, [t._v(" " + t._s(t.hsm.icon))]), o("div", {
                staticClass: "p-1"
            }, [t._v(" " + t._s(t.hsm.name) + " ")])]), t.hsmPopup ? o("div", {
                staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-full"
            }, [o("div", {
                staticClass: "popup-content inset-auto relative bg-white z-50 w-full md:w-2/3 mx-auto mt-12 flex-col flex shadow-xl border h-85p md:h-auto overflow-auto rounded-xl cursor-default"
            }, [o("div", {
                staticClass: "absolute top-0 right-0 mt-2 mr-4 text-xl",
                on: {
                    click: t.hidePopup
                }
            }, [t._v(" X ")]), o("div", {
                staticClass: "p-2 text-lg font-bold"
            }, [t._v(" " + t._s(t.local.hsm) + " ")]), o("div", {
                staticClass: "text-lg"
            }, [o("div", {}, [o("div", {
                staticClass: "hsmList"
            }, [o("div", {}, [o("div", {
                staticClass: "shadow bg-black text-gray-200 p-2"
            }, [o("h2", [t._v(t._s(t.formatHSM(t.attr.status)))])]), o("div", {
                staticClass: "w-full flex flex-row flex-wrap p-2"
            }, ["disarmed" != t.attr.status ? o("div", {
                staticClass: "md:w-1/2"
            }, [o("div", {
                staticClass: "hsmItem shadow m-2 p-2 hover:bg-gray-200 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doHSM("disarm")
                    }
                }
            }, [t._v(t._s(t.local.disarm) + " ")])]) : t._e(), "armedHome" != t.attr.status ? o("div", {
                staticClass: "md:w-1/2"
            }, [o("div", {
                staticClass: "hsmItem shadow m-2 p-2 hover:bg-gray-200 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doHSM("armHome")
                    }
                }
            }, [t._v(" " + t._s(t.local.armHome) + " ")])]) : t._e(), "armedNight" != t.attr.status ? o("div", {
                staticClass: "md:w-1/2"
            }, [o("div", {
                staticClass: "hsmItem shadow m-2 p-2 hover:bg-gray-200 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doHSM("armNight")
                    }
                }
            }, [t._v(" " + t._s(t.local.armNight) + " ")])]) : t._e(), "armedAway" != t.attr.status ? o("div", {
                staticClass: "md:w-1/2"
            }, [o("div", {
                staticClass: "hsmItem shadow m-2 p-2 hover:bg-gray-200 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doHSM("armAway")
                    }
                }
            }, [t._v(" " + t._s(t.local.armAway) + " ")])]) : t._e(), o("div", {
                staticClass: "md:w-1/2"
            }, [o("div", {
                staticClass: "hsmItem shadow m-2 p-2 hover:bg-gray-200 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doHSM("armRules")
                    }
                }
            }, [t._v(" " + t._s(t.local.armAllRules) + " ")])]), o("div", {
                staticClass: "md:w-1/2"
            }, [o("div", {
                staticClass: "hsmItem shadow m-2 p-2 hover:bg-gray-200 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doHSM("disarmRules")
                    }
                }
            }, [t._v(" " + t._s(t.local.disarmAllRules) + " ")])]), o("div", {
                staticClass: "md:w-1/2"
            }, [o("div", {
                staticClass: "hsmItem shadow m-2 p-2 hover:bg-gray-200 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doHSM("disarmAll")
                    }
                }
            }, [t._v(" " + t._s(t.local.disarmAll) + " ")])]), o("div", {
                staticClass: "md:w-1/2"
            }, [o("div", {
                staticClass: "hsmItem shadow m-2 p-2 hover:bg-gray-200 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doHSM("armAll")
                    }
                }
            }, [t._v(" " + t._s(t.local.armAll) + " ")])]), o("div", {
                staticClass: "md:w-1/2"
            }, [o("div", {
                staticClass: "hsmItem shadow m-2 p-2 hover:bg-gray-200 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doHSM("cancelAlerts")
                    }
                }
            }, [t._v(" " + t._s(t.local.cancelAllAlerts) + " ")])])])])])]), o("div", {
                staticClass: "w-full flex p-2"
            }, [t.events.alerts.length > 0 ? o("div", {
                staticClass: "w-full md:w-1/2"
            }, [o("div", {
                staticClass: "text-lg font-bold"
            }, [t._v(" " + t._s(t.local.alerts) + " ")]), t._l(t.events.alerts, (function(e) {
                return o("div", {
                    key: e.alerts,
                    staticClass: "text-left p-1 text-base"
                }, [t._v(" " + t._s(t.formatDate(e.date)) + " - " + t._s(e.value) + " ")])
            }
            ))], 2) : t._e(), 1 != t.layout.hideEvents && t.events.events.length > 0 ? o("div", {
                staticClass: "w-full md:w-1/2"
            }, [o("div", {
                staticClass: "text-lg font-bold"
            }, [t._v(" " + t._s(t.local.events) + " ")]), t._l(t.events.events, (function(e) {
                return o("div", {
                    key: e.date,
                    staticClass: "text-left p-1 text-base"
                }, [t._v(" " + t._s(t.formatDate(e.date)) + " - " + t._s(t.formatHSM(e.value)) + " ")])
            }
            ))], 2) : t._e()])])])]) : t._e(), t.pinPopup ? o("div", {
                staticClass: "popup-container fixed inset-0 z-10 overflow-auto w-full h-screen"
            }, [o("div", {
                staticClass: "popup-content inset-auto relative bg-white z-51 mt-12 mx-2 w-auto md:w-1/2 md:mx-auto md:mt-10 flex-col flex shadow-xl border-solid border-2 border-gray-400 h-auto overflow-auto rounded-xl"
            }, [o("div", {
                staticClass: "top-0 right-0 absolute px-4 py-2 text-black text-lg justify-center",
                on: {
                    click: t.hidePinPopup
                }
            }, [t._v(" X ")]), o("div", {
                staticClass: "flex flex-col flex-wrap p-2 mt-2 text-center w-full justify-center cursor-default"
            }, [o("div", {
                staticClass: "text-lg w-full p-2 font-bold"
            }, [t._v(" Pin Entry ")]), o("div", {
                staticClass: "pinEntry w-full text-center justify-center flex"
            }, [o("div", {
                staticClass: "keyRow py-1 px-4 text-lg text-white bg-black h-8 w-full mx-8 md:w-1/6 my-1 justify-center",
                domProps: {
                    innerHTML: t._s(t.pinMask)
                }
            })]), o("div", {
                staticClass: "keyRow w-full flex flex-row flex-no-wrap text-3xl justify-center"
            }, [o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(1)
                    }
                }
            }, [t._v(" 1 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(2)
                    }
                }
            }, [t._v(" 2 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(3)
                    }
                }
            }, [t._v(" 3 ")])]), o("div", {
                staticClass: "keyRow w-full flex flex-row flex-no-wrap text-3xl justify-center"
            }, [o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(4)
                    }
                }
            }, [t._v(" 4 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(5)
                    }
                }
            }, [t._v(" 5 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(6)
                    }
                }
            }, [t._v(" 6 ")])]), o("div", {
                staticClass: "keyRow w-full flex flex-row flex-no-wrap text-3xl justify-center"
            }, [o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(7)
                    }
                }
            }, [t._v(" 7 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(8)
                    }
                }
            }, [t._v(" 8 ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(9)
                    }
                }
            }, [t._v(" 9 ")])]), o("div", {
                staticClass: "keyRow w-full flex flex-row flex-no-wrap text-3xl justify-center"
            }, [o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: t.clearPin
                }
            }, [t._v(" X ")]), o("div", {
                staticClass: "keyNum shadow py-2 px-4 m-2 cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doPin(0)
                    }
                }
            }, [t._v(" 0 ")]), o("div", {
                staticClass: "keyNum shadow-md py-2 px-1 m-2 bg-green-600 text-3xl content-center cursor-pointer",
                on: {
                    click: function(e) {
                        return t.doHSM("pin")
                    }
                }
            }, [t._v(" " + t._s(t.local.go) + " ")])])])])]) : t._e()]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Nr = [];
        function Ar(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function Rr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ar(Object(o), !0).forEach((function(e) {
                    Hr(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : Ar(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function Hr(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var Fr = {
            name: "HSM",
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    currentState: [],
                    name: "unknown",
                    hsmPopup: !1,
                    pinPopup: !1,
                    pin: "",
                    pinMask: "",
                    cmd: "",
                    events: {
                        alerts: [],
                        events: []
                    }
                }
            },
            computed: Rr({}, Object(m["b"])(["local", "devices", "layout"]), {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("status") > -1
                        }
                        ));
                        return t || {
                            status: "unknown"
                        }
                    }
                    return {
                        status: "unknown"
                    }
                },
                hsm: function() {
                    var t = void 0 != this.attr.status ? this.attr.status : "unknown"
                      , e = "verified_user";
                    switch (this.attr.status) {
                    case "disarmed":
                    case "intrusion":
                        t = "Disarmed",
                        e = "block";
                        break;
                    case "allDisarmed":
                        t = "All Disarmed",
                        e = "block";
                        break;
                    case "armedAway":
                        t = "Armed Away";
                        break;
                    case "armedHome":
                        t = "Armed Home",
                        e = "home";
                        break;
                    case "armedNight":
                        t = "Armed Night",
                        e = "brightness_3";
                        break;
                    case "armingAway":
                        t = "Please Exit Now",
                        e = "directions_walk";
                        break
                    }
                    return {
                        name: t,
                        icon: e
                    }
                },
                bgImage: function() {
                    return void 0 != this.context.bgImage && "" != this.context.bgImage ? "url(" + this.context.bgImage + ")" : null
                },
                tileStyle: function() {
                    return {
                        gridRow: this.row,
                        gridColumn: this.col,
                        backgroundColor: this.customColor.bgColor,
                        color: this.customColor.iconColor,
                        fontSize: parseInt(this.layout.fontSize) + "px",
                        // borderRadius: this.layout.roundedCorners + "px",
                        backgroundImage: this.bgImage,
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        overflow: "hidden",
                        boxShadow: this.customColor.boxShadow,
                        borderWidth: this.customColor.borderWidth,
                    }
                },
                row: function() {
                    return this.context.row + " / " + parseInt(this.context.row + this.context.rowSpan)
                },
                col: function() {
                    return this.context.col + " / " + parseInt(this.context.col + this.context.colSpan)
                },
                customColor: function() {
                    var t = this
                      , e = this.layout.customColors.filter((function(e) {
                        return e.template == t.context.template.toLowerCase()
                    }
                    ));
                    if (e.length > 0) {
                        var o = void 0 != this.attr.status ? this.attr.status.toLowerCase() : this.attr.status
                          , a = e.filter((function(t) {
                            return t.state.toLowerCase() == o || "default" == t.state
                        }
                        ));
                        return a.length > 0 ? a[0] : {
                            bgColor: "",
                            color: ""
                        }
                    }
                    if (0 == this.layout.noColors) {
                        o = void 0 != this.attr.status ? this.attr.status.toLowerCase() : this.attr.status;
                        return "disarmed" == o || "alldisarmed" == o ? {
                            bgColor: "rgba(255,0,0,.5)",
                            iconColor: ""
                        } : "armedaway" == o || "armingAway" == o || "armedhome" == o ? {
                            bgColor: "rgba(0,255,0,.5)",
                            iconColor: ""
                        } : {
                            bgColor: "",
                            color: ""
                        }
                    }
                    return {
                        bgColor: "",
                        color: ""
                    }
                }
            }),
            created: function() {
                this.currentState = this.devices.find((function(t) {
                    return "HSM Status" == t.label
                }
                )),
                void 0 != this.currentState ? this.name = this.currentState.label : this.name = "HSM"
            },
            mounted: function() {},
            methods: {
                showMenuTile: function() {
                    this.hsmPopup = !1,
                    this.$store.commit("SHOW_MENUTILE", this.context)
                },
                showPopup: function(t) {
                    this.getEvents(),
                    this.hsmPopup = !0
                },
                hidePopup: function() {
                    this.hsmPopup = !1
                },
                hidePinPopup: function() {
                    this.pinPopup = !1
                },
                doPin: function(t) {
                    this.pin += t,
                    "Invalid Pin" == this.pinMask && (this.pinMask = ""),
                    this.pinMask += "*"
                },
                clearPin: function() {
                    this.pin = "",
                    this.pinMask = ""
                },
                formatHSM: function(t) {
                    var e = t;
                    switch (t) {
                    case "allDisarmed":
                        e = "All Disarmed";
                        break;
                    case "disarmed":
                        e = "Disarmed";
                        break;
                    case "armedHome":
                        e = "Armed Home";
                        break;
                    case "armedAway":
                        e = "Armed Away";
                        break;
                    case "armingAway":
                        e = "Arming to Away";
                        break;
                    case "armedNight":
                        e = "Armed Night";
                        break;
                    default:
                        break
                    }
                    return e
                },
                getEvents: function() {
                    var t = this
                      , e = i.a.create({
                        baseURL: this.$store.getters.urlPrefix + this.$store.getters.urlPath,
                        crossDomain: !0,
                        responseType: "json",
                        withCredentials: !0,
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + this.$store.state.token
                        }
                    });
                    e.get("/hsmEvents").then((function(e) {
                        t.events = e.data
                    }
                    )).catch((function(e) {
                        t.response = e,
                        t.$store.commit("SET_CONNECTED", !1),
                        console.log(e)
                    }
                    ))
                },
                doHSM: function(t) {
                    if (void 0 != this.layout.hsmPin && this.pin != atob(this.layout.hsmPin))
                        this.pinPopup = !0,
                        "pin" != t && (this.cmd = t),
                        "" != this.pin && (this.pinMask = "Invalid Pin"),
                        this.pin = "";
                    else {
                        this.pinPopup = !1,
                        this.hsmPopup = !0,
                        this.pin = "",
                        this.pinMask = "",
                        "pin" != t && (this.cmd = t);
                        var e = {
                            id: this.cmd,
                            cmd: "hsm",
                            secondary: ""
                        };
                        this.$store.dispatch("sendCommand", e)
                    }
                },
                formatDate: function(t) {
                    var e = new g.a(t);
                    if (1 == this.layout.clockMode) {
                        if ("DD/MM/YYYY" == this.layout.dateFormat)
                            return e.format("DD/MM/YYYY hh:mm:ss a");
                        if ("MM/DD/YYYY" == this.layout.dateFormat)
                            return e.format("MM/DD/YYYY hh:mm:ss a");
                        if ("YYYY-MM-DD" == this.layout.dateFormat)
                            return e.format("YYYY-MM-DD hh:mm:ss a")
                    } else {
                        if ("DD/MM/YYYY" == this.layout.dateFormat)
                            return e.format("DD/MM/YYYY HH:mm:ss");
                        if ("MM/DD/YYYY" == this.layout.dateFormat)
                            return e.format("MM/DD/YYYY HH:mm:ss");
                        if ("YYYY-MM-DD" == this.layout.dateFormat)
                            return e.format("YYYY-MM-DD HH:mm:ss")
                    }
                }
            }
        }
          , Vr = Fr
          , Br = Object(k["a"])(Vr, $r, Nr, !1, null, null, null)
          , Gr = Br.exports
          , Ur = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile image",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "inset-auto"
            }, [void 0 != t.refreshImage && "" != t.refreshImage && null != t.refreshImage ? o("img", {
                staticClass: "image",
                attrs: {
                    src: t.refreshImage
                },
                on: {
                    click: function(e) {
                        return t.fullScreen("true")
                    }
                }
            }) : t._e()]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])]), 1 == t.popup ? o("div", {
                staticClass: "modal"
            }, [o("Transition", {
                attrs: {
                    appear: "",
                    name: "fade"
                }
            }, [void 0 != t.refreshImage && "" != t.refreshImage && null != t.refreshImage ? o("img", {
                staticClass: "image popUpImage",
                attrs: {
                    src: t.refreshImage
                },
                on: {
                    click: function(e) {
                        return t.fullScreen("false")
                    }
                }
            }) : t._e()])], 1) : t._e()])
        }
          , Wr = [];
        function Xr(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function Kr(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Xr(Object(o), !0).forEach((function(e) {
                    Jr(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : Xr(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function Jr(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var qr = {
            name: "Images",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    polling: null,
                    refreshImage: "",
                    attr: {
                        default: ""
                    },
                    popup: !1
                }
            },
            computed: Kr({}, Object(m["b"])(["layout"]), {
                bgImage: function() {
                    return void 0 != this.context.bgImage && "" != this.context.bgImage ? "url(" + this.context.bgImage + ")" : null
                },
                refreshInterval: function() {
                    return void 0 == this.context.refreshInterval || "" == this.context.refreshInterval ? 0 : 1e3 * parseInt(this.context.refreshInterval)
                }
            }),
            created: function() {},
            mounted: function() {
                this.refreshImage = this.context.templateExtra,
                clearInterval(this.polling),
                parseInt(this.refreshInterval) > 0 && this.pollClock()
            },
            updated: function() {
                clearInterval(this.polling),
                this.pollClock()
            },
            methods: {
                updateImage: function() {
                    parseInt(this.refreshInterval) > 0 && (this.context.templateExtra.indexOf("?") > -1 ? this.refreshImage = this.context.templateExtra + "&time=" + Math.floor(Date.now() / 1e3) : this.refreshImage = this.context.templateExtra + "?time=" + Math.floor(Date.now() / 1e3))
                },
                fullScreen: function(t) {
                    this.popup = !this.popup
                },
                pollClock: function() {
                    var t = this;
                    this.polling = setInterval((function() {
                        t.updateImage()
                    }
                    ), this.refreshInterval)
                }
            }
        }
          , Zr = qr
          , Qr = (o("e56f"),
        Object(k["a"])(Zr, Ur, Wr, !1, null, "4784b085", null))
          , ts = Qr.exports
          , es = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            //   console.log(t.title);
            return tile_musicPlayer(o,t)

        }
          , os = []
          , as = {
            name: "MusicPlayer",
            components: {
                VueSlider: Ae.a
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    status: "",
                    Popup: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("playbackState") > -1
                        }
                        ));
                        return t || {
                            status: "unknown"
                        }
                    }
                    return {
                        status: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("mute") > -1
                        }
                        ));
                        return t || {
                            mute: "unknown"
                        }
                    }
                    return {
                        mute: "unknown"
                    }
                },
                attr3: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("level") > -1
                        }
                        ));
                        return t || {
                            level: ""
                        }
                    }
                    return {
                        level: ""
                    }
                },
                attr4: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("trackDescription") > -1
                        }
                        ));
                        return t || {
                            trackDescription: "unknown"
                        }
                    }
                    return {
                        trackDescription: "unknown"
                    }
                },
                attr5: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("volume") > -1
                        }
                        ));
                        return t || {
                            volume: ""
                        }
                    }
                    return {
                        volume: ""
                    }
                },
                volume: {
                    get: function() {
                        return "" == this.attr5.volume ? this.attr3.level : this.attr5.volume
                    },
                    set: function() {}
                },
                absoluteAlbumArtUri: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("absoluteAlbumArtUri") > -1
                        }
                        ));
                        return t || {
                            absoluteAlbumArtUri: "unknown"
                        }
                    }
                    return {
                        absoluteAlbumArtUri: "unknown"
                    }
                },
                album: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("album") > -1
                        }
                        ));
                        return t || {
                            album: "unknown"
                        }
                    }
                    return {
                        album: "unknown"
                    }
                },
                artist: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("artist") > -1
                        }
                        ));
                        return t || {
                            artist: "unknown"
                        }
                    }
                    return {
                        artist: "unknown"
                    }
                },
                title: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("title") > -1
                        }
                        ));
                        return t || {
                            title: "unknown"
                        }
                    }
                    return {
                        title: "unknown"
                    }
                },
               

                findkey: function(key) {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf(key) > -1
                        }
                        ));
                        return t || {
                            key: "unknown"
                        }
                    
                }
            },        
          Getfavs: function() {
                fetch("housepages/sonos.php?code=favorites")
                  .then(response => {
                    if (!response.ok) {
                      throw new Error('Network response was not ok');
                      return [];
                    }
                    return response.json();
                  })
                  .then(data => {
                    return data;
                  })
                  .catch(error => {
                    this.errorMessage = error.message;
                    console.error('There has been a problem with your fetch operation:', error);
                    return [];
                  });
              }
            },
            methods: {
                showPopup: function(t) {
                    console.log("popupshown")
                    this.Popup = !0
                },
                hidePopup: function() {
                    this.Popup = !1
                },
                previous: function() {
                    var t = {
                        id: parseInt(this.context.device),
                        cmd: "previousTrack",
                        secondary: ""
                    };
                    this.$store.dispatch("sendCommand", t)
                },
                next: function() {
                    var t = {
                        id: parseInt(this.context.device),
                        cmd: "nextTrack",
                        secondary: ""
                    };
                    this.$store.dispatch("sendCommand", t)
                },
                play: function(t) {
                    var e = {
                        id: parseInt(this.context.device),
                        cmd: t,
                        secondary: ""
                    };
                    this.$store.dispatch("sendCommand", e)
                },
                updateSlider: function(t) {
                    this.volume = t,
                    this.attr3.level = t;
                    this.attr5.volume = t;
                    var e = "setVolume";
                    "" == this.attr5.volume && (e = "setLevel");
                    var o = {
                        id: parseInt(this.context.device),
                        cmd: e,
                        secondary: t
                    };
                    this.$store.dispatch("sendCommand", o)
                },
                doCommand: function(t) {
                    var e, o = "";
                    if (-1 == t.target.classList.toString().indexOf("vue") && -1 == t.target.classList.toString().indexOf("dimmer") || t.target.classList.toString().indexOf("he-") > -1) {
                        e = "off" == this.attr.switch ? "on" : "off";
                        var a = {
                            id: parseInt(this.context.device),
                            cmd: e,
                            secondary: o
                        };
                        this.$store.dispatch("sendCommand", a)
                    }
                }
            }
        }
          , ns = as
          , is = Object(k["a"])(ns, es, os, !1, null, null, null)
          , rs = is.exports
          , ss = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile scene",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                staticStyle: {
                    cursor: "default"
                },
                on: {
                    click: t.doCommand
                }
            }, [o("i", {
                staticClass: "material-icons",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customColor.customIcon ? t.customColor.customIcon : "")) + " ")]), o("div", {
                staticStyle: {
                    "margin-top": "4px"
                }
            }, [o("div", {
                staticClass: "shadow",
                staticStyle: {
                    display: "inline-block",
                    padding: "16px",
                    "background-color": "rgba(0,0,0,.65)",
                    "border-radius": "10px",
                    cursor: "pointer"
                },
                on: {
                    click: function(e) {
                        return t.doCommand("on")
                    }
                }
            }, [t._v(" " + t._s(t.local.on) + " ")]), t._v(" "), o("div", {
                staticClass: "shadow",
                staticStyle: {
                    display: "inline-block",
                    padding: "16px",
                    "background-color": "rgba(0,0,0,.65)",
                    "border-radius": "10px",
                    cursor: "pointer"
                },
                on: {
                    click: function(e) {
                        return t.doCommand("off")
                    }
                }
            }, [t._v(" " + t._s(t.local.off) + " ")])])])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , ls = []
          , cs = {
            name: "Scene",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("switch") > -1
                        }
                        ));
                        return t || {
                            switch: "unknown"
                        }
                    }
                    return {
                        switch: "unknown"
                    }
                }
            },
            methods: {
                doCommand: function(t) {
                    var e = t
                      , o = {
                        id: parseInt(this.context.device),
                        cmd: e,
                        secondary: ""
                    };
                    this.$store.dispatch("sendCommand", o),
                    this.attr.switch = this.local.sending
                }
            }
        }
          , us = cs
          , ds = Object(k["a"])(us, ss, ls, !1, null, null, null)
          , ms = ds.exports
          , hs = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile text-tile h-full",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "flex flex-col w-full text-center h-full"
            }, [o("div", {
                staticClass: "flex flex-grow w-full justify-center items-center",
                staticStyle: {
                    overflow: "visible",
                    "text-align": "center",
                    padding: "8px"
                },
                style: {
                    color: t.customColor.iconColor,
                    fontSize: 1.5 * t.layout.fontSize + "px"
                },
                domProps: {
                    innerHTML: t._s(t.context.templateExtra)
                }
            })]), o("div", {
                staticClass: "flex-grow-0 w-full",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , fs = []
          , ps = {
            name: "TextTile",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    return {
                        text: "unknown"
                    }
                }
            }
        }
          , vs = ps
          , bs = Object(k["a"])(vs, hs, fs, !1, null, null, null)
          , gs = bs.exports
          , ys = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile volume",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), o("div", {
                staticClass: "tile-primary",
                class: "volume-" + t.volume,
                on: {
                    click: t.doCommand
                }
            }, [o("div", [o("i", {
                staticClass: "material-icons ",
                class: t.customIcon(t.attr, t.customColor.customIcon, t.context.template),
                style: {
                    color: t.customColor.iconColor,
                    fontSize: t.iconSize
                }
            }, [t._v(" " + t._s(t.parseFont(t.customIcon(t.attr, t.customColor.customIcon, t.context.template))) + " ")])]), o("div", {
                staticClass: "dimmer"
            }, [o("VueSlider", {
                staticStyle: {
                    margin: "0 16px"
                },
                attrs: {
                    min: 0,
                    max: 100,
                    step: 1,
                    "dot-size": 20,
                    height: 12,
                    "process-style": t.process1,
                    "rail-style": t.rail1,
                    lazy: !0
                },
                on: {
                    change: t.updateSlider
                },
                model: {
                    value: t.volume,
                    callback: function(e) {
                        t.volume = e
                    },
                    expression: "volume"
                }
            })], 1), 0 == t.layout.hideIconText ? o("div", {}, [t._v(" " + t._s(t.volume) + "% ")]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , ws = []
          , Cs = {
            name: "Volume",
            components: {
                VueSlider: Ae.a
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("volume") > -1
                        }
                        ));
                        return t || {
                            volume: ""
                        }
                    }
                    return {
                        volume: "unknown"
                    }
                },
                attr2: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("level") > -1
                        }
                        ));
                        return t || {
                            level: ""
                        }
                    }
                    return {
                        level: "unknown"
                    }
                },
                volume: {
                    get: function() {
                        return "" == this.attr.volume ? this.attr2.level : this.attr.volume
                    },
                    set: function() {}
                }
            },
            methods: {
                updateSlider: function(t) {
                    this.attr.level = t;
                    var e = "setVolume";
                    "" == this.attr.volume && (e = "setLevel");
                    var o = {
                        id: parseInt(this.context.device),
                        cmd: e,
                        secondary: parseInt(t)
                    };
                    this.$store.dispatch("sendCommand", o)
                },
                doCommand: function(t) {
                    var e, o = "";
                    if (-1 == t.target.classList.toString().indexOf("vue") && -1 == t.target.classList.toString().indexOf("dimmer") || t.target.classList.toString().indexOf("he-") > -1) {
                        this.attr.switch = this.local.sending;
                        var a = {
                            id: parseInt(this.context.device),
                            cmd: e,
                            secondary: o
                        };
                        this.$store.dispatch("sendCommand", a)
                    }
                }
            }
        }
          , _s = Cs
          , xs = Object(k["a"])(_s, ys, ws, !1, null, null, null)
          , ks = xs.exports
          , Ss = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile video",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-contents"
            }, [o("div", {
                staticClass: "tile-primary",
                staticStyle: {
                    height: "100%",
                    width: "100%",
                    position: "absolute",
                    top: "0",
                    left: "0",
                    bottom: "0",
                    right: "0"
                }
            }, [void 0 != t.context.templateExtra && "" != t.context.templateExtra && null != t.context.templateExtra ? o("video", {
                staticClass: "image",
                staticStyle: {
                    "max-width": "100%",
                    "max-height": "100%"
                },
                attrs: {
                    autoplay: "",
                    width: "100%",
                    height: "100%"
                },
                on: {
                    click: function(e) {
                        return t.fullScreen("true")
                    }
                }
            }, [o("source", {
                attrs: {
                    src: t.context.templateExtra,
                    type: "video/mp4"
                }
            })]) : t._e()])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])]), 1 == t.popup ? o("div", {
                staticClass: "modal"
            }, [o("Transition", {
                attrs: {
                    appear: "",
                    name: "fade"
                }
            }, [void 0 != t.context.templateExtra && "" != t.context.templateExtra && null != t.context.templateExtra ? o("video", {
                staticClass: "image",
                staticStyle: {
                    "max-width": "100%",
                    "max-height": "100%"
                },
                attrs: {
                    autoplay: "",
                    width: "100%",
                    height: "100%"
                },
                on: {
                    click: function(e) {
                        return t.fullScreen("false")
                    }
                }
            }, [o("source", {
                attrs: {
                    src: t.context.templateExtra,
                    type: "video/mp4"
                }
            })]) : t._e()])], 1) : t._e()])
        }
          , Os = [];
        function Ts(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function Es(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ts(Object(o), !0).forEach((function(e) {
                    Is(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : Ts(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function Is(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var js = {
            name: "Images",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    polling: null,
                    refreshImage: "",
                    attr: {
                        default: ""
                    },
                    popup: !1
                }
            },
            computed: Es({}, Object(m["b"])(["layout"]), {
                bgImage: function() {
                    return void 0 != this.context.bgImage && "" != this.context.bgImage ? "url(" + this.context.bgImage + ")" : null
                },
                refreshInterval: function() {
                    return void 0 == this.context.refreshInterval || "" == this.context.refreshInterval ? 0 : 1e3 * parseInt(this.context.refreshInterval)
                }
            }),
            created: function() {},
            mounted: function() {},
            updated: function() {},
            methods: {
                fullScreen: function(t) {
                    this.popup = !this.popup,
                    "true" == t ? this.$el.getElementsByTagName("video")[0].pause() : this.$el.getElementsByTagName("video")[0].play()
                }
            }
        }
          , Ms = js
          , Ds = (o("365c"),
        Object(k["a"])(Ms, Ss, Os, !1, null, "d32ceec6", null))
          , zs = Ds.exports
          , Ps = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile variable-number",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), t.edit ? t._e() : o("div", {
                staticClass: "tile-primary",
                style: {
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                },
                on: {
                    click: t.showEdit
                }
            }, [t._v(" " + t._s(t.attr.variable) + " ")]), t.edit ? o("div", {
                staticClass: "tile-primary"
            }, [o("div", {}, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.attr.variable,
                    expression: "attr.variable"
                }],
                staticClass: "text-black outline-none",
                staticStyle: {
                    padding: ".25rem",
                    "font-size": "1rem",
                    width: "80%"
                },
                attrs: {
                    type: "number",
                    step: "1",
                    pattern: "\\d*",
                    onkeypress: "return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 45"
                },
                domProps: {
                    value: t.attr.variable
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.attr, "variable", e.target.value)
                    }
                }
            })]), o("button", {
                staticClass: "mt-1 shadow bg-gray-300 text-black p-2",
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.doCommand
                }
            }, [t._v(" " + t._s(t.local.save) + " ")])]) : t._e()]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Ls = []
          , Ys = {
            name: "VariableNumber",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    edit: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("variable") > -1
                        }
                        ));
                        return t || {
                            variable: "unknown"
                        }
                    }
                    return {
                        variable: "unknown"
                    }
                }
            },
            methods: {
                showEdit: function() {
                    this.edit = !0
                },
                doCommand: function() {
                    this.edit = !1;
                    var t = "setVariable"
                      , e = {
                        id: parseInt(this.context.device),
                        cmd: t,
                        secondary: this.attr.variable
                    };
                    this.$store.dispatch("sendCommand", e),
                    this.attr.variable = this.local.sending
                }
            }
        }
          , $s = Ys
          , Ns = Object(k["a"])($s, Ps, Ls, !1, null, null, null)
          , As = Ns.exports
          , Rs = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile variable-decimal",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), t.edit ? t._e() : o("div", {
                staticClass: "tile-primary",
                style: {
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                },
                on: {
                    click: t.showEdit
                }
            }, [t._v(" " + t._s(t.attr.variable) + " ")]), t.edit ? o("div", {
                staticClass: "tile-primary"
            }, [o("div", {}, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.attr.variable,
                    expression: "attr.variable"
                }],
                staticClass: "text-black outline-none",
                staticStyle: {
                    padding: ".25rem",
                    "font-size": "1rem",
                    width: "80%"
                },
                attrs: {
                    type: "number",
                    step: "1",
                    onkeypress: "return event.charCode >= 48 && event.charCode <= 57 || event.charCode == 45 || event.charCode == 46"
                },
                domProps: {
                    value: t.attr.variable
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.attr, "variable", e.target.value)
                    }
                }
            })]), o("button", {
                staticClass: "mt-1 shadow bg-gray-300 text-black p-2",
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.doCommand
                }
            }, [t._v(" " + t._s(t.local.save) + " ")])]) : t._e()]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Hs = []
          , Fs = {
            name: "VariableDecimal",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    edit: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("variable") > -1
                        }
                        ));
                        return t || {
                            variable: "unknown"
                        }
                    }
                    return {
                        variable: "unknown"
                    }
                }
            },
            methods: {
                showEdit: function() {
                    this.edit = !0
                },
                doCommand: function() {
                    this.edit = !1;
                    var t = "setVariable"
                      , e = {
                        id: parseInt(this.context.device),
                        cmd: t,
                        secondary: this.attr.variable
                    };
                    this.$store.dispatch("sendCommand", e),
                    this.attr.variable = this.local.sending
                }
            }
        }
          , Vs = Fs
          , Bs = Object(k["a"])(Vs, Rs, Hs, !1, null, null, null)
          , Gs = Bs.exports
          , Us = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile variable-string",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "flex flex-col w-full text-center h-full"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "flex-grow-0 w-full pt-1",
                class: t.context.template
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), t.edit ? t._e() : o("div", {
                staticClass: "flex flex-grow w-full justify-center items-center",
                style: {
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                },
                on: {
                    click: t.showEdit
                }
            }, [t._v(" " + t._s(t.attr.variable) + " ")]), t.edit ? o("div", {
                staticClass: "flex flex-grow w-full justify-center items-center"
            }, [o("div", {
                staticClass: "block"
            }, [o("div", {
                staticClass: "w-full"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.variable,
                    expression: "variable"
                }],
                staticClass: "text-black outline-none",
                staticStyle: {
                    padding: ".25rem",
                    "font-size": "1rem",
                    width: "80%"
                },
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.variable
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.variable = e.target.value)
                    }
                }
            })]), o("div", {
                staticClass: "pt-2"
            }, [o("button", {
                staticClass: "mt-1 shadow bg-gray-300 text-black p-2",
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.doCommand
                }
            }, [t._v(" " + t._s(t.local.save) + " ")])])])]) : t._e(), o("div", {
                staticClass: "flex-grow-0 w-full"
            }, [t._v(" " + t._s(t.name) + " ")])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Ws = []
          , Xs = {
            name: "VariableString",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    edit: !1,
                    variable: ""
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("variable") > -1
                        }
                        ));
                        return t || {
                            variable: "unknown"
                        }
                    }
                    return {
                        variable: "unknown"
                    }
                }
            },
            watch: {
                variable: function(t) {
                    t && (this.variable = t.toString().replace(/<(?:.|\n)*?>/gm, ""))
                }
            },
            methods: {
                showEdit: function() {
                    this.variable = this.attr.variable,
                    this.edit = !0
                },
                doCommand: function() {
                    this.edit = !1;
                    var t = "setVariable";
                    if ("" != this.variable) {
                        var e = {
                            id: parseInt(this.context.device),
                            cmd: t,
                            secondary: this.variable
                        };
                        this.$store.dispatch("sendCommand", e),
                        this.attr.variable = this.local.sending
                    }
                }
            }
        }
          , Ks = Xs
          , Js = Object(k["a"])(Ks, Us, Ws, !1, null, null, null)
          , qs = Js.exports
          , Zs = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile variable-bool",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), t.edit ? t._e() : o("div", {
                staticClass: "tile-primary",
                style: {
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                },
                on: {
                    click: t.showEdit
                }
            }, [t._v(" " + t._s(t.attr.variable) + " ")]), t.edit ? o("div", {
                staticClass: "tile-primary"
            }, [o("div", {}, [o("input", {
                staticClass: " outline-none",
                staticStyle: {
                    "font-size": "8em"
                },
                attrs: {
                    type: "checkbox"
                },
                domProps: {
                    checked: "true" == t.attr.variable
                }
            })]), o("button", {
                staticClass: "mt-1 shadow bg-gray-300 text-black p-2",
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.doCommand
                }
            }, [t._v(" " + t._s(t.local.save) + " ")])]) : t._e()]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , Qs = []
          , tl = {
            name: "VariableBoolean",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    edit: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("variable") > -1
                        }
                        ));
                        return t || {
                            variable: "unknown"
                        }
                    }
                    return {
                        variable: "unknown"
                    }
                }
            },
            methods: {
                showEdit: function() {
                    this.edit = !0
                },
                doCommand: function(t) {
                    this.edit = !1;
                    var e = "setVariable"
                      , o = {
                        id: parseInt(this.context.device),
                        cmd: e,
                        secondary: t.currentTarget.previousElementSibling.firstChild.checked.toString()
                    };
                    this.$store.dispatch("sendCommand", o),
                    this.attr.variable = this.local.sending
                }
            }
        }
          , el = tl
          , ol = Object(k["a"])(el, Zs, Qs, !1, null, null, null)
          , al = ol.exports
          , nl = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile variable-time",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), t.edit ? t._e() : o("div", {
                staticClass: "tile-primary",
                style: {
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                },
                on: {
                    click: t.showEdit
                }
            }, [t._v(" " + t._s(t.formattedTime) + " ")]), t.edit ? o("div", {
                staticClass: "tile-primary"
            }, [o("div", {
                staticClass: "p-2"
            }, [o("timePicker", {
                attrs: {
                    time: t.time,
                    allow24: !t.layout.clockMode
                },
                on: {
                    "update-time": t.getTime
                }
            })], 1), o("button", {
                staticClass: "mt-1 shadow bg-gray-300 text-black p-2",
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.doCommand
                }
            }, [t._v(" " + t._s(t.local.save) + " ")])]) : t._e()]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , il = []
          , rl = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.timeInput,
                    expression: "timeInput"
                }],
                staticClass: "text-black outline-none shadow p-2",
                class: {
                    "border-solid border-red-600 border-4": !t.isValid
                },
                attrs: {
                    type: "text"
                },
                domProps: {
                    value: t.timeInput
                },
                on: {
                    keypress: t.validateTime,
                    input: [function(e) {
                        e.target.composing || (t.timeInput = e.target.value)
                    }
                    , t.validateTime]
                }
            }), !t.isValid && t.allow24 ? o("div", [t._v(" (HH:MM) ")]) : t._e(), t.isValid || t.allow24 ? t._e() : o("div", [t._v(" (HH:MM AM/PM) ")])])
        }
          , sl = []
          , ll = {
            name: "TimePicker",
            props: {
                time: {
                    type: String,
                    default: ""
                },
                allow24: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    isValid: !0,
                    timeInput: ""
                }
            },
            created: function() {
                this.timeInput = this.allow24 ? this.time : this.formatAMPM(this.time)
            },
            methods: {
                formatAMPM: function(t) {
                    var e = t.split(":")[0]
                      , o = t.split(":")[1]
                      , a = "am";
                    return 0 == e ? e = 12 : e >= 12 && (e = e > 12 ? parseInt(e) - 12 : e,
                    a = "pm"),
                    "".concat(e, ":").concat(o, " ").concat(a)
                },
                convertPM: function(t) {
                    var e = t.split(":")[0];
                    t.toLowerCase().indexOf("pm") > -1 && e < 12 && (e = parseInt(e) + 12,
                    24 === e && (e = 0)),
                    t.toLowerCase().indexOf("am") > -1 && 12 == e && (e = 0);
                    var o = t.toLowerCase().replace("am", "").replace("pm", "").split(":")[1];
                    return "".concat(e, ":").concat(o)
                },
                validateTime: function(t) {
                    this.isValid = !!t.currentTarget.value.match(/(^(([0-1]?\d)|(2[0-3]))(:)?[0-5][0-9]$)|(^((0?[1-9])|(1[0-2]))(:)([0-5][0-9])( )([aA]|[pP])[mM]$)|(^([aA]|[pP])[mM]( )((0?[1-9])|(1[0-2]))(|)([0-5][0-9])$)/),
                    this.isValid && this.$emit("update-time", this.convertPM(t.currentTarget.value).trim())
                }
            }
        }
          , cl = ll
          , ul = Object(k["a"])(cl, rl, sl, !1, null, null, null)
          , dl = ul.exports
          , ml = {
            name: "VariableTime",
            components: {
                timePicker: dl
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    edit: !1
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("dateTime") > -1
                        }
                        ))
                          , e = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("variable") > -1
                        }
                        ));
                        return t || (e || {
                            variable: "unknown"
                        })
                    }
                    return {
                        variable: "unknown"
                    }
                },
                time: function() {
                    var t = new g.a;
                    return void 0 != this.attr.dateTime ? t = 29 == this.attr.dateTime.length ? new g.a(this.attr.dateTime.replace(this.attr.dateTime.substring(0, 11), (new g.a).format("YYYY-MM-DD"))) : new g.a(this.attr.dateTime.replace("9999-99-99", (new g.a).format("YYYY-MM-DD"))) : void 0 != this.attr.variable && (t = 29 == this.attr.variable.length ? new g.a(this.attr.variable.replace(this.attr.dateTime.substring(0, 11), (new g.a).format("YYYY-MM-DD"))) : new g.a(this.attr.variable.replace("9999-99-99", (new g.a).format("YYYY-MM-DD")))),
                    t.format("HH:mm")
                },
                formattedTime: function() {
                    var t = new g.a;
                    return void 0 != this.attr.dateTime ? t = 29 == this.attr.dateTime.length ? new g.a(this.attr.dateTime.replace(this.attr.dateTime.substring(0, 11), (new g.a).format("YYYY-MM-DD"))) : new g.a(this.attr.dateTime.replace("9999-99-99", (new g.a).format("YYYY-MM-DD"))) : void 0 != this.attr.variable && (t = 29 == this.attr.variable.length ? new g.a(this.attr.variable.replace(this.attr.dateTime.substring(0, 11), (new g.a).format("YYYY-MM-DD"))) : new g.a(this.attr.variable.replace("9999-99-99", (new g.a).format("YYYY-MM-DD")))),
                    console.log(this.attr),
                    this.layout.clockMode ? t.format("h:mm a") : t.format("HH:mm")
                }
            },
            methods: {
                showEdit: function() {
                    this.edit = !0
                },
                getTime: function(t) {
                    var e = (new g.a).hours(t.split(":")[0]).minutes(t.split(":")[1]);
                    void 0 != this.attr.dateTime ? this.attr.dateTime = e.format("YYYY-MM-DDTHH:mm:00.000ZZ") : void 0 != this.attr.variable && (this.attr.variable = e.format("YYYY-MM-DDTHH:mm:00.000ZZ"))
                },
                doCommand: function() {
                    this.edit = !1;
                    var t = void 0 != this.attr.variable ? "setVariable" : "setDateTime"
                      , e = (new g.a).hours(this.time.split(":")[0]).minutes(this.time.split(":")[1])
                      , o = e.format("YYYY-MM-DDTHH:mm:00.000ZZ");
                    void 0 == this.attr.dateTime || !this.attr.dateTime.includes("9999-99-99") && 29 != this.attr.dateTime.length ? void 0 != this.attr.variable && this.attr.variable.includes("9999-99-99") && (o = "9999-99-99" + o.substring(10)) : o = "9999-99-99" + o.substring(10);
                    var a = {
                        id: parseInt(this.context.device),
                        cmd: t,
                        secondary: o
                    };
                    this.$store.dispatch("sendCommand", a)
                }
            }
        }
          , hl = ml
          , fl = Object(k["a"])(hl, nl, il, !1, null, null, null)
          , pl = fl.exports
          , vl = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile variable-date",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "tile-title",
                style: {
                    fontSize: t.customColor.fontSize
                }
            }, [t._v(" " + t._s(t.name) + " ")]), o("div", {
                staticClass: "tile-contents"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "tile-secondary"
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), t.edit ? t._e() : o("div", {
                staticClass: "tile-primary",
                style: {
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                },
                on: {
                    click: t.showEdit
                }
            }, [t._v(" " + t._s(t.formattedDate) + " ")]), t.edit ? o("div", {
                staticClass: "tile-primary"
            }, [o("div", {
                staticClass: "p-2"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.editDate,
                    expression: "editDate"
                }],
                staticClass: "text-black outline-none",
                staticStyle: {
                    padding: ".25rem",
                    "font-size": "1rem",
                    width: "90%"
                },
                attrs: {
                    type: "date"
                },
                domProps: {
                    value: t.editDate
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.editDate = e.target.value)
                    }
                }
            })]), o("button", {
                staticClass: "mt-1 shadow bg-gray-300 text-black p-2",
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.doCommand
                }
            }, [t._v(" " + t._s(t.local.save) + " ")])]) : t._e()]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , bl = []
          , gl = {
            name: "VariableDate",
            components: {
                timePicker: dl
            },
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    edit: !1,
                    editDate: ""
                }
            },
            computed: {
                attr: function() {
                    if (void 0 != this.currentState) {
                        var t = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("dateTime") > -1
                        }
                        ))
                          , e = this.currentState.attr.find((function(t) {
                            return Object.keys(t).indexOf("variable") > -1
                        }
                        ));
                        return t || (e || {
                            variable: "unknown"
                        })
                    }
                    return {
                        variable: "unknown"
                    }
                },
                dateTime: function() {
                    var t = new g.a;
                    return void 0 != this.attr.dateTime ? t = new g.a(this.attr.dateTime) : void 0 != this.attr.variable && (t = new g.a(this.attr.variable)),
                    t.format("YYYY-MM-DD")
                },
                formattedDate: function() {
                    var t = new g.a;
                    return void 0 != this.attr.dateTime ? t = new g.a(this.attr.dateTime) : void 0 != this.attr.variable && (t = new g.a(this.attr.variable)),
                    console.log(this.attr),
                    t.format(this.layout.dateFormat)
                }
            },
            methods: {
                showEdit: function() {
                    this.edit = !0,
                    this.editDate = this.dateTime
                },
                doCommand: function() {
                    this.edit = !1;
                    var t = void 0 != this.attr.variable ? "setVariable" : "setDate"
                      , e = {
                        id: parseInt(this.context.device),
                        cmd: t,
                        secondary: this.editDate
                    };
                    this.$store.dispatch("sendCommand", e)
                }
            }
        }
          , yl = gl
          , wl = Object(k["a"])(yl, vl, bl, !1, null, null, null)
          , Cl = wl.exports
          , _l = function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                staticClass: "tile variable-string",
                style: t.tileStyle,
                attrs: {
                    id: "tile-" + t.context.id
                }
            }, [o("div", {
                staticClass: "flex flex-col w-full text-center h-full"
            }, [t.layout.hideLabels ? t._e() : o("div", {
                staticClass: "flex-grow-0 w-full pt-1",
                class: t.context.template
            }, [t._v(" " + t._s(t.templates[t.context.template]) + " ")]), t.edit ? t._e() : o("div", {
                staticClass: "flex flex-grow w-full justify-center items-center",
                style: {
                    fontSize: 1.5 * parseInt(t.layout.fontSize) + "px"
                },
                on: {
                    click: t.showEdit
                }
            }, [t._v(" " + t._s(t.displayValue) + " ")]), t.edit ? o("div", {
                staticClass: "flex flex-grow w-full justify-center items-center"
            }, [o("div", {
                staticClass: "block"
            }, ["boolean" != t.inputType && "datetime-local" != t.inputType ? o("div", ["checkbox" === t.inputType ? o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.variable,
                    expression: "variable"
                }],
                staticClass: "text-black outline-none",
                staticStyle: {
                    padding: ".25rem",
                    "font-size": "1rem"
                },
                attrs: {
                    id: "input-" + t.context.id,
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(t.variable) ? t._i(t.variable, null) > -1 : t.variable
                },
                on: {
                    change: function(e) {
                        var o = t.variable
                          , a = e.target
                          , n = !!a.checked;
                        if (Array.isArray(o)) {
                            var i = null
                              , r = t._i(o, i);
                            a.checked ? r < 0 && (t.variable = o.concat([i])) : r > -1 && (t.variable = o.slice(0, r).concat(o.slice(r + 1)))
                        } else
                            t.variable = n
                    }
                }
            }) : "radio" === t.inputType ? o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.variable,
                    expression: "variable"
                }],
                staticClass: "text-black outline-none",
                staticStyle: {
                    padding: ".25rem",
                    "font-size": "1rem"
                },
                attrs: {
                    id: "input-" + t.context.id,
                    type: "radio"
                },
                domProps: {
                    checked: t._q(t.variable, null)
                },
                on: {
                    change: function(e) {
                        t.variable = null
                    }
                }
            }) : o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.variable,
                    expression: "variable"
                }],
                staticClass: "text-black outline-none",
                staticStyle: {
                    padding: ".25rem",
                    "font-size": "1rem"
                },
                attrs: {
                    id: "input-" + t.context.id,
                    type: t.inputType
                },
                domProps: {
                    value: t.variable
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.variable = e.target.value)
                    }
                }
            })]) : t._e(), "datetime-local" == t.inputType ? o("div", [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.varTime,
                    expression: "varTime"
                }],
                staticClass: "text-black outline-none",
                staticStyle: {
                    padding: ".25rem",
                    "font-size": "1rem",
                    "margin-bottom": "16px"
                },
                attrs: {
                    id: "input-time-" + t.context.id,
                    type: "time"
                },
                domProps: {
                    value: t.varTime
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.varTime = e.target.value)
                    }
                }
            }), o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.varDate,
                    expression: "varDate"
                }],
                staticClass: "text-black outline-none",
                staticStyle: {
                    padding: ".25rem",
                    "font-size": "1rem"
                },
                attrs: {
                    id: "input-date-" + t.context.id,
                    type: "date"
                },
                domProps: {
                    value: t.varDate
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.varDate = e.target.value)
                    }
                }
            })]) : t._e(), "boolean" == t.inputType ? o("div", [o("select", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.variable,
                    expression: "variable"
                }],
                staticClass: "text-black outline-none",
                staticStyle: {
                    "font-size": "18px"
                },
                on: {
                    change: function(e) {
                        var o = Array.prototype.filter.call(e.target.options, (function(t) {
                            return t.selected
                        }
                        )).map((function(t) {
                            var e = "_value"in t ? t._value : t.value;
                            return e
                        }
                        ));
                        t.variable = e.target.multiple ? o : o[0]
                    }
                }
            }, [o("option", {
                attrs: {
                    value: "true"
                }
            }, [t._v("True")]), o("option", {
                attrs: {
                    value: "false"
                }
            }, [t._v("False")])])]) : t._e(), o("div", {
                staticClass: "pt-2"
            }, [o("button", {
                staticClass: "mt-1 shadow bg-gray-300 text-black p-2",
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.setVariable
                }
            }, [t._v(" " + t._s(t.local.save) + " ")])])])]) : t._e(), t.rename ? o("div", {
                staticClass: "flex flex-grow w-full justify-center items-center"
            }, [o("div", {
                staticClass: "block"
            }, [o("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: t.newVarName,
                    expression: "newVarName"
                }],
                staticClass: "text-black outline-none",
                staticStyle: {
                    padding: ".25rem",
                    "font-size": "1rem"
                },
                attrs: {
                    id: "input-" + t.context.id,
                    type: "text"
                },
                domProps: {
                    value: t.newVarName
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.newVarName = e.target.value)
                    }
                }
            }), o("div", {
                staticClass: "pt-2"
            }, [o("button", {
                staticClass: "mt-1 shadow bg-gray-300 text-black p-2",
                attrs: {
                    type: "button"
                },
                on: {
                    click: t.setVariable
                }
            }, [t._v(" Rename ")])])])]) : t._e(), o("div", {
                staticClass: "flex-grow-0 w-full",
                on: {
                    click: t.showRename
                }
            }, [t._v(" " + t._s("" == t.newVarName ? t.globalVariable.name : t.newVarName) + " ")])]), t.layout.readOnly || t.layout.hide3dot ? t._e() : o("div", {
                staticClass: "tile-edit",
                on: {
                    click: t.showMenuTile
                }
            }, [o("i", {
                staticClass: "material-icons",
                style: {
                    color: t.customColor.iconColor
                }
            }, [t._v(" more_vert ")])])])
        }
          , xl = []
          , kl = {
            name: "GlobalVariable",
            mixins: [ke],
            props: {
                context: {
                    type: Object,
                    default: function() {
                        return {}
                    }
                }
            },
            data: function() {
                return {
                    edit: !1,
                    rename: !1,
                    variable: "",
                    newVarName: "",
                    varName: "",
                    varTime: "",
                    varDate: ""
                }
            },
            computed: {
                variableName: function() {
                    return this.context.globalVar
                },
                globalVariable: function() {
                    var t = this;
                    return this.globalVars.find((function(e) {
                        return e.name == t.variableName
                    }
                    ))
                },
                displayValue: function() {

                    if ("datetime" == this.globalVariable.type) {
                        var t = new g.a;
                        if (this.globalVariable.value.includes("99:99:99.999-9999"))
                            return t = new g.a(this.globalVariable.value.replace("99:99:99.999-9999", (new g.a).format("HH:mm"))),
                            t.format(this.layout.dateFormat);
                        if (this.globalVariable.value.includes("9999-99-99"))
                            return t = new g.a(this.globalVariable.value.replace("9999-99-99", (new g.a).format("YYYY-MM-DD"))),
                            this.layout.clockMode ? t.format("h:mm a") : t.format("HH:mm");
                        if (t = new g.a(this.globalVariable.value),
                        "DD/MM/YYYY" == this.layout.dateFormat)
                            return t.format("DD/MM/YYYY HH:mm:ss");
                        if ("MM/DD/YYYY" == this.layout.dateFormat)
                            return t.format("MM/DD/YYYY HH:mm:ss");
                        if ("YYYY-MM-DD" == this.layout.dateFormat)
                            return t.format("YYYY-MM-DD HH:mm:ss")
                    }
                    return this.globalVariable.value
                },
                inputType: function() {
                    return "datetime" == this.globalVariable.type ? this.globalVariable.value.includes("99:99:99.999-9999") ? "date" : this.globalVariable.value.includes("9999-99-99") ? "time" : "datetime-local" : "boolean" == this.globalVariable.type ? "boolean" : "text"
                }
            },
            methods: {
                showEdit: function() {
                    "datetime" == this.globalVariable.type ? this.globalVariable.value.includes("99:99:99.999-9999") ? this.variable = this.globalVariable.value.substring(0, 10) : this.globalVariable.value.includes("9999-99-99") ? this.variable = this.globalVariable.value.substring(11, 16) : (this.variable = this.globalVariable.value.substring(0, 19),
                    this.varDate = this.globalVariable.value.substring(0, 10),
                    this.varTime = this.globalVariable.value.substring(11, 16)) : this.variable = this.globalVariable.value,
                    this.edit = !0,
                    this.rename = !1
                },
                showRename: function() {
                    "datetime" == this.globalVariable.type ? this.globalVariable.value.includes("99:99:99.999-9999") ? this.variable = this.globalVariable.value.substring(0, 10) : this.globalVariable.value.includes("9999-99-99") ? this.variable = this.globalVariable.value.substring(11, 16) : (this.variable = this.globalVariable.value.substring(0, 19),
                    this.varDate = this.globalVariable.value.substring(0, 10),
                    this.varTime = this.globalVariable.value.substring(11, 16)) : this.variable = this.globalVariable.value,
                    this.newVarName = this.globalVariable.name,
                    this.rename = !0,
                    this.edit = !1
                },
                setVariable: function() {
                    this.edit = !1,
                    this.rename = !1;
                    var t = this.globalVariable;
                    if ("datetime" == this.globalVariable.type) {
                        var e = new g.a
                          , o = this.variable;
                        29 == o.length && (e = new g.a(o.replace(o.substring(0, 11), (new g.a).format("YYYY-MM-DD"))),
                        t.value = e.format("YYYY-MM-DDTHH:mm:00.000ZZ")),
                        16 == o.length && (t.value = this.varDate + "T" + this.varTime + t.value.substring(16)),
                        19 == o.length && (t.value = this.varDate + "T" + this.varTime + t.value.substring(16)),
                        10 == o.length && (t.value = o + "T99:99:99.999-9999"),
                        5 == o.length && (t.value = "9999-99-99T" + o + t.value.substring(16))
                    } else
                        t.value = this.variable;
                    t.newName = this.newVarName,
                    this.$store.dispatch("setGlobalVariable", t)
                }
            }
        }
          , Sl = kl
          , Ol = Object(k["a"])(Sl, _l, xl, !1, null, null, null)
          , Tl = Ol.exports;
        function El(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function Il(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? El(Object(o), !0).forEach((function(e) {
                    jl(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : El(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function jl(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var Ml, Dl = {
            name: "Grid",
            components: {
                Header: Qt,
                NoTiles: ce,
                acceleration: Ie,
                attribute: qi,
                battery: Le,
                bulb: Ve,
                bulbColor: Ke,
                buttons: eo,
                carbonDioxide: so,
                carbonMonoxide: fo,
                contact: wo,
                dashboard: Oo,
                date: jr,
                dimmer: Do,
                doorControl: No,
                door: Bo,
                energy: Jo,
                fan: oa,
                garageControl: la,
                garage: fa,
                humidity: wa,
                illuminance: Na,
                levelStep: Oa,
                levelVertical: Da,
                links: Ba,
                lock: Ja,
                momentary: on,
                motion: cn,
                multi: pn,
                outlet: Cn,
                power: Tn,
                presence: zn,
                relay: An,
                shock: qn,
                shades: Gn,
                smoke: ai,
                switches: ci,
                temperature: pi,
                thermostat: Ci,
                valve: Ti,
                water: zi,
                window: Ai,
                clockDate: rr,
                clock: kr,
                clockAnalog: pr,
                generic: Yr,
                hsm: Gr,
                images: ts,
                mode: ge,
                musicPlayer: rs,
                weather: Gi,
                scene: ms,
                texttile: gs,
                volume: ks,
                videoPlayer: zs,
                variableNumber: As,
                variableDecimal: Gs,
                variableString: qs,
                variableBool: al,
                variableTime: pl,
                variableDate: Cl,
                globalVariable: Tl,
                GroupColour: rs,
            },
            data: function() {
                return {}
            },
            computed: Il({}, Object(m["b"])(["layout", "devices", "grid", "showTileBuilder"]), {
                repeatCols: function() {
                    return void 0 != this.layout.colWidth && "" != this.layout.colWidth ? "repeat(" + this.layout.cols + ", " + this.layout.colWidth + "px)" : "repeat(" + this.layout.cols + ", 1fr)"
                },
                repeatRows: function() {
                    return void 0 != this.layout.rowHeight && "" != this.layout.rowHeight ? "repeat(" + this.layout.rows + ", " + this.layout.rowHeight + "px)" : "repeat(" + this.layout.rows + ", 1fr)"
                },
                autoColumns: function() {
                    return void 0 != this.layout.colWidth && "" != this.layout.colWidth ? this.layout.colWidth + "px" : "1fr"
                },
                autoRows: function() {
                    return void 0 != this.layout.rowHeight && "" != this.layout.rowHeight ? this.layout.rowHeight + "px" : "1fr"
                }
            }),
            mounted: function() {
                this.$store.dispatch("fixBG"),
                this.$store.dispatch("insertCSS")
            },
            updated: function() {
                this.$store.dispatch("fixBG")
            },
            methods: {}
        }, zl = Dl, Pl = Object(k["a"])(zl, Vt, Bt, !1, null, null, null), Ll = Pl.exports, Yl = {
            templateStates: [{
                template: "acceleration",
                states: ["active", "inactive"]
            }, {
                template: "attribute",
                states: [""]
            }, {
                template: "battery",
                states: [""]
            }, {
                template: "bulb",
                states: ["on", "off"]
            }, {
                template: "bulb-color",
                states: ["on", "off"]
            }, {
                template: "buttons",
                states: [""]
            }, {
                template: "carbon-dioxide",
                states: [""]
            }, {
                template: "carbon-monoxide",
                states: ["clear", "detected"]
            }, {
                template: "clock-date",
                states: [""]
            }, {
                template: "clock-analog",
                states: [""]
            }, {
                template: "clock",
                states: [""]
            }, {
                template: "contact",
                states: ["open", "closed"]
            }, {
                template: "date",
                states: [""]
            }, {
                template: "dashboard",
                states: [""]
            }, {
                template: "dimmer",
                states: ["on", "off"]
            }, {
                template: "door-control",
                states: ["open", "closed", "opening", "closing"]
            }, {
                template: "door",
                states: ["open", "closed"]
            }, {
                template: "energy",
                states: [""]
            }, {
                template: "fan",
                states: ["on", "off", "low", "medium-low", "medium", "medium-high", "high", "auto"]
            }, {
                template: "garage-control",
                states: ["open", "closed", "opening", "closing"]
            }, {
                template: "garage",
                states: ["open", "closed", "opening", "closing"]
            }, {
                template: "generic",
                states: [""]
            }, {
                template: "hsm",
                states: ["armedHome", "armedAway", "armedNight", "disarmed", "allDisarmed", "armingAway"]
            }, {
                template: "humidity",
                states: [""]
            }, {
                template: "level-step",
                states: [""]
            }, {
                template: "illuminance",
                states: [""]
            }, {
                template: "images",
                states: [""]
            }, {
                template: "links",
                states: [""]
            }, {
                template: "level-vertical",
                states: [""]
            } , {
                template: "level-vertical1",
                states: [""]
            }, {
                template: "level-horizontal",
                states: [""]
            },{
                template: "lock",
                states: ["locked", "unlocked"]
            }, {
                template: "mode",
                states: [""]
            }, {
                template: "momentary",
                states: [""]
            }, {
                template: "music-player",
                states: [""]
            }, {
                template: "motion",
                states: ["active", "inactive"]
            }, {
                template: "multi",
                states: ["open", "closed"]
            }, {
                template: "outlet",
                states: ["on", "off"]
            }, {
                template: "power",
                states: [""]
            }, {
                template: "presence",
                states: ["present", "not present"]
            }, {
                template: "relay",
                states: ["on", "off"]
            }, {
                template: "shades",
                states: ["on", "off", "opening", "partially open", "closed", "open", "closing"]
            }, {
                template: "shock",
                states: ["detected", "clear"]
            }, {
                template: "smoke",
                states: ["detected", "clear"]
            }, {
                template: "switches",
                states: ["on", "off"]
            }, {
                template: "valve",
                states: ["open", "closed"]
            }, {
                template: "temperature",
                states: [""]
            }, {
                template: "thermostat",
                states: ["heating", "pending cool", "pending heat", "vent economizer", "idle", "cooling", "fan only"]
            }, {
                template: "water",
                states: ["wet", "dry"]
            }, {
                template: "window",
                states: ["open", "closed"]
            }, {
                template: "weather",
                states: [""]
            }, {
                template: "scene",
                states: [""]
            }, {
                template: "texttile",
                states: [""]
            }, {
                template: "volume",
                states: [""]
            }, {
                template: "video-player",
                states: [""]
            }, {
                template: "variable-number",
                states: [""]
            }, {
                template: "variable-time",
                states: [""]
            }, {
                template: "variable-date",
                states: [""]
            }, {
                template: "variable-decimal",
                states: [""]
            }, {
                template: "variable-string",
                states: [""]
            }, {
                template: "variable-bool",
                states: [""]
            }, {
                template: "GroupColour",
                states: [""]
            }]
        }, $l = Yl;
        function Nl(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function Al(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Nl(Object(o), !0).forEach((function(e) {
                    Rl(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : Nl(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function Rl(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var Hl = (Ml = {
            name: "Dashboard",
            components: {
                Grid: Ll
            },
            data: function() {
                return {}
            },
            computed: Al({}, Object(m["b"])(["layout", "devices", "toggleMenu", "toggleMenuTile", "hubURL", "isLocal"])),
            mounted: function() {},
            updated: function() {}
        },
        Rl(Ml, "mounted", (function() {
            var t = void 0 == this.layout.lanRefresh ? 20 : this.layout.lanRefresh;
            this.isLocal || (t = void 0 == this.layout.cloudRefresh ? 5 : this.layout.cloudRefresh);
            var e = this;
            e.$store.dispatch("getUpdates"),
            setInterval((function() {
                e.$store.dispatch("getUpdates")
            }
            ), 5000 * parseInt(t))
        }
        )),
        Rl(Ml, "methods", {}),
        Ml)
          , Fl = Hl
          , Vl = Object(k["a"])(Fl, Ht, Ft, !1, null, null, null)
          , Bl = Vl.exports;
        function Gl(t, e, o, a, n, i, r) {
            try {
                var s = t[i](r)
                  , l = s.value
            } catch (c) {
                return void o(c)
            }
            s.done ? e(l) : Promise.resolve(l).then(a, n)
        }
        function Ul(t) {
            return function() {
                var e = this
                  , o = arguments;
                return new Promise((function(a, n) {
                    var i = t.apply(e, o);
                    function r(t) {
                        Gl(i, a, n, r, s, "next", t)
                    }
                    function s(t) {
                        Gl(i, a, n, r, s, "throw", t)
                    }
                    r(void 0)
                }
                ))
            }
        }
        function Wl(t, e) {
            var o = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(t);
                e && (a = a.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable
                }
                ))),
                o.push.apply(o, a)
            }
            return o
        }
        function Xl(t) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Wl(Object(o), !0).forEach((function(e) {
                    Kl(t, e, o[e])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : Wl(Object(o)).forEach((function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
                }
                ))
            }
            return t
        }
        function Kl(t, e, o) {
            return e in t ? Object.defineProperty(t, e, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = o,
            t
        }
        var Jl = {
            name: "App",
            components: {
                Dashboard: Bl,
                DashboardMenu: Ct,
                MenuTile: Rt
            },
            data: function() {
                return {
                    polling: null,
                    lastRefresh: null
                }
            },
            computed: Xl({}, Object(m["b"])(["layout", "notLoaded", "toggleMenuTile", "toggleMenu", "loadingState"]), {
                bgStyle: function() {
                    return void 0 != this.layout.background && "" != this.layout.background ? {
                        backgroundImage: "url(" + this.layout.background + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundColor: this.layout.bgColor,
                        backgroundPosition: "center"
                    } : (t = {
                        backgroundColor: this.layout.bgColor,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover"
                    },
                    Kl(t, "backgroundColor", this.layout.bgColor),
                    Kl(t, "backgroundPosition", "center"),
                    t);
                    var t
                }
            }),
            beforeDestroy: function() {
                clearInterval(this.polling)
            },
            created: function() {
                DevicesPageStore = this;
                window.addEventListener("resize", this.fixBG),
                this.getData()
            },
            destroyed: function() {
                window.removeEventListener("resize", this.fixBG)
            },
            mounted: function() {
                this.pollLayout(),
                this.pollDevices(),
                this.pollGlobalVariables()
                // window.applicationCache && applicationCache.addEventListener("updateready", (function() {
                //     confirm("An update is available. Reload now?") && window.location.reload(!0)
                // }
                // ));
                var t = this;
                // window.addEventListener("focus", (function() {
                //     t.log("Dashboard in Focus"),
                //     t.pollLayout(),
                //     t.pollDevices()
                // }
                // ), !1),
                // window.addEventListener("blur", (function() {
                //     t.log("Dashboard in Background")
                // }
                // ), !1)
            },
            methods: {
                getData: function() {
                    var t = this;
                    return Ul(d.a.mark((function e() {
                        return d.a.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 3,
                                    t.$store.dispatch("loadLayout");
                                case 3:
                                    return e.next = 5,
                                    t.$store.dispatch("loadDevices");
                                case 5:
                                    return e.next = 7,
                                    t.$store.dispatch("loadGlobalVars");
                                case 7:
                                    e.next = 11;
                                    break;
                                case 10:
                                    t.log("Tried to refresh data too fast");
                                case 11:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                },
                pollLayout: function() {
                    var t = this;
                    clearTimeout(this.polling),
                    this.polling = setTimeout((function() {
                       t.$store.dispatch("loadLayout"),
                        t.pollLayout()
                    }
                    ), 3e5)
                },
                pollDevices: function() {
                    var t = this;
                    clearTimeout(this.polling),
                    this.polling = setTimeout((function() {
                        t.$store.dispatch("loadDevices"),
                        t.pollDevices()
                    }
                    ), 6e5)
                },
                pollGlobalVariables: function() {
                    var t = this;
                    clearTimeout(this.polling),
                    this.polling = setTimeout((function() {
                        t.$store.dispatch("loadGlobalVars"),
                        t.pollGlobalVariables()
                    }
                    ), 6e5)
                },
                localization: function() {
                    this.$store.dispatch("loadLocalization"),
                    this.$store.dispatch("loadTemplates")
                },
                log: function(t) {
                    this.$store.commit("log", t)
                }
            }
        }
          , ql = Jl
          , Zl = (o("5c0b"),
        Object(k["a"])(ql, l, c, !1, null, null, null))
          , Ql = Zl.exports
          , tc = o("b408")
          , ec = o.n(tc);
        function oc(t, e, o, a, n, i, r) {
            try {
                var s = t[i](r)
                  , l = s.value
            } catch (c) {
                return void o(c)
            }
            s.done ? e(l) : Promise.resolve(l).then(a, n)
        }
        function ac(t) {
            return function() {
                var e = this
                  , o = arguments;
                return new Promise((function(a, n) {
                    var i = t.apply(e, o);
                    function r(t) {
                        oc(i, a, n, r, s, "next", t)
                    }
                    function s(t) {
                        oc(i, a, n, r, s, "throw", t)
                    }
                    r(void 0)
                }
                ))
            }
        }
        a["default"].use(m["a"]);
        var nc = new a["default"]
          , ic = new m["a"].Store({
            state: {
                debugOn: !1,
                isConnected: !1,
                local: {},
                debug: [""],
                hubId: "",
                token: "",
                hubURL: "",
                cloudURL: "",
                port: null,
                localPath: "",
                appId:"",
                dashboardId: "",
                Room:"",
                layout1: hub.layout,
                devices1: hub.devices,
                layout: hub.layout,
                Websocketurl: "",
                WebSocketTimeout: "",

                locales: [],
                devices: [],
                globalVars: [],
                grid: [],
                toggleMenu: !1,
                toggleMenuTile: !1,
                toggleColors: !1,
                menuTile: [],
                bgColors: ["Black", "White", "Blue", "Brown", "Chocolate", "DarkGray", "DarkGreen", "DarkRed", "DimGray", "DodgerBlue", "Gold", "Green", "Grey", "Indigo", "Ivory", "LightCyan", "LightGray", "MediumBlue", "Purple", "RoyalBlue", "SaddleBrown", "Silver", "SkyBlue", "Tan", "WhiteSmoke"],
                templates: {},
                templateStates: $l.templateStates,
                notLoaded: !0,
                loadingState: "Dashboard",
                socket: {
                    isConnected: !1,
                    message: "",
                    reconnectError: !1,
                    retryCount: 0
                },
                lastLayoutSave: "",
                timer: "",
                lastUpdate: "",
                showTileBuilder: !1,
                parentToken: "",
                allowGoBack: "",
                parentId: ""
            },
            getters: {
                templatesSorted: function() {
                    return ic.state.templates.length ? [] : Object.keys(ic.state.templates).sort()
                },
                cloudPath: function() {
                    return "/api/" + ic.state.hubId + "/apps/"
                },
                urlPrefix: function() {
                    return window.location.protocol + "//"
                },
                urlPath: function() {
                    return ic.state.isLocal ? ic.state.hubURL + ic.state.localPath + ic.state.appId + "/dashboard/" + ic.state.dashboardId : ic.state.cloudURL + ic.getters.cloudPath + ic.state.appId + "/dashboard/" + ic.state.dashboardId
                }
            },
            mutations: {
                log: function(t, e) {
                    if (true) {
                        // t.debug.length > 200 && t.debug.splice(0, t.debug.length - 199);
                        var o = ""
                          , a = new g.a(new Date);
                        1 == t.layout.clockMode ? "DD/MM/YYYY" == t.layout.dateFormat ? o = a.format("DD/MM/YYYY hh:mm:ss a") : "MM/DD/YYYY" == t.layout.dateFormat ? o = a.format("MM/DD/YYYY hh:mm:ss a") : "YYYY-MM-DD" == t.layout.dateFormat && (o = a.format("YYYY-MM-DD hh:mm:ss a")) : "DD/MM/YYYY" == t.layout.dateFormat ? o = a.format("DD/MM/YYYY HH:mm:ss") : "MM/DD/YYYY" == t.layout.dateFormat ? o = a.format("MM/DD/YYYY HH:mm:ss") : "YYYY-MM-DD" == t.layout.dateFormat && (o = a.format("YYYY-MM-DD HH:mm:ss")),
                        t.debug.push(o + " - " + e)
                        console.log(o + " - " + e)
                    }
                },
                SET_TILEBUILDER: function(t, e) {
                    t.showTileBuilder = e
                },
                SET_TEMPLATES: function(t, e) {
                    t.templates = e
                },
                SET_LAYOUT: function(t, e) {
                    var o = e.tiles.filter((function(t) {
                        return "[object object]" == t.template
                    }
                    ));
                    o.length > 0 && o.map((function(t) {
                        return t.template = "generic"
                    }
                    ));
                    var a = e.tiles.filter((function(t) {
                        return "button" == t.template
                    }
                    ));
                    a.length > 0 && a.map((function(t) {
                        return t.template = "buttons"
                    }
                    ));
                    a = e.customColors.filter((function(t) {
                        return "button" == t.template
                    }
                    ));
                    a.length > 0 && a.map((function(t) {
                        return t.template = "buttons"
                    }
                    ));
                    var n = e.tiles.filter((function(t) {
                        return "image" == t.template
                    }
                    ));
                    n.length > 0 && n.map((function(t) {
                        return t.template = "images"
                    }
                    ));
                    n = e.customColors.filter((function(t) {
                        return "image" == t.template
                    }
                    ));
                    n.length > 0 && n.map((function(t) {
                        return t.template = "images"
                    }
                    ));
                    var i = e.tiles.filter((function(t) {
                        return "link" == t.template
                    }
                    ));
                    i.length > 0 && i.map((function(t) {
                        return t.template = "links"
                    }
                    ));
                    i = e.customColors.filter((function(t) {
                        return "link" == t.template
                    }
                    ));
                    i.length > 0 && i.map((function(t) {
                        return t.template = "links"
                    }
                    ));
                    var r = e.tiles.filter((function(t) {
                        return "switch" == t.template
                    }
                    ));
                    r.length > 0 && r.map((function(t) {
                        return t.template = "switches"
                    }
                    ));
                    r = e.customColors.filter((function(t) {
                        return "switch" == t.template
                    }
                    ));
                    r.length > 0 && r.map((function(t) {
                        return t.template = "switches"
                    }
                    ));
                    r = e.customColors.filter((function(t) {
                        return "HSM" == t.template
                    }
                    ));
                    r.length > 0 && r.map((function(t) {
                        return t.template = "hsm"
                    }
                    )),
                    e.customColors || (e.customColors = []);
                    var s = e.customColors.filter((function(t) {
                        return "Default" == t.state
                    }
                    ));
                    s.forEach((function(t) {
                        t.state = "default"
                    }
                    )),
                    "NaN" == e.fontSize || void 0 == e.fontSize ? e.fontSize = 12 : e.fontSize = parseInt(e.fontSize),
                    void 0 == e.gridGap && (e.gridGap = 10),
                    void 0 == e.roundedCorners && (e.roundedCorners = 10),
                    void 0 == e.clockMode && (e.clockMode = !1),
                    void 0 == e.hide3dot && (e.hide3dot = !1),
                    void 0 == e.hideLabels && (e.hideLabels = !0),
                    void 0 == e.hideIconText && (e.hideIconText = !0),
                    void 0 == e.hideTextShadow && (e.hideTextShadow = !0),
                    void 0 == e.hideEvents && (e.hideEvents = !1),
                    void 0 == e.dateFormat && (e.dateFormat = "MM/DD/YYYY"),
                    void 0 == e.goBack && (e.goBack = !0),
                    void 0 == e.iconSize && (e.iconSize = 42),
                    void 0 == e.localization && (e.localization = "English"),
                    e.rows = parseInt(e.rows),
                    e.cols = parseInt(e.cols);
                    var l = rc(e, []);
                    t.grid = l;
                    var c = t.grid.find((function(t) {
                        return t.indexOf("n") > -1
                    }
                    ));
                    t.row = void 0 == c ? 1 : c.length + 1;
                    var u = t.grid.find((function(t) {
                        return t.indexOf("n") > -1
                    }
                    ));
                    t.col = void 0 == u ? 1 : u.length + 1,
                    t.layout = e,
                    t.layout && t.devices.length
                },
                SET_DEVICES: function(t, e) {
                    hub.DeviceConnect = t
                    //             created: function() {
                    this.commit("log", "Device Count: " + hub.devices),
                    hub.devices > 0 ? a["default"].set(hub.devices, e) : e.forEach((function(e) {
                        t.devices.push(e)
                    }
                    )),
                    t.layout && t.devices.length > 0 && (t.loadingState = "Devices",
                    t.notLoaded = !1
                    )
                },
                SET_UPDATES: function(t, e) {
                    try {
                        e.length > 0 && e.forEach((function(e) {
                            if (-4 == e.id) {
                                var o = t.globalVars.find((function(t) {
                                    return "variable:" + t.name == e.name
                                }
                                ));
                                o.value = e.value
                            }
                            var a = t.devices.find((function(t) {
                                return t.id == e.id
                            }
                            ));
                            if (-2 == a.id) {
                                var n = t.devices.find((function(t) {
                                    return "Modes" == t.label
                                }
                                ));
                                if (void 0 != n) {
                                    n.attr.forEach((function(t) {
                                        t.active = !1
                                    }
                                    ));
                                    var i = e.attr.find((function(t) {
                                        return "status" == Object.keys(t)
                                    }
                                    ))
                                      , r = n.attr.find((function(t) {
                                        return t.name == i.status
                                    }
                                    ));
                                    r.active = !0;
                                    var s = n.attr.find((function(t) {
                                        return Object.keys(t).indexOf("status") > -1
                                    }
                                    ));
                                    s.status = i.status,
                                    delete s.active
                                }
                            } else if (-3 == a.id) {
                                var l = t.devices.find((function(t) {
                                    return "HSM Status" == t.label
                                }
                                ));
                                l.attr[0].status = e.attr[0].status
                            } else
                                void 0 != a && e.attr.forEach((function(t) {
                                    var e = a.attr.filter((function(e) {
                                        return [Object.keys(e)[0]] == Object.keys(t)[0]
                                    }
                                    ));
                                    -1 == t[Object.keys(e[0])[0]].indexOf("<script") && (e[0][Object.keys(e[0])[0]] = t[Object.keys(e[0])[0]])
                                }
                                ))
                        }
                        ))
                    } catch (o) {
                        this.commit("log", "Unknown Error: " + o)
                    }
                },
                SET_BGIMAGE: function(t, e) {
                    t.menuTile.bgImage = e,
                    this.dispatch("saveLayout")
                },
                SET_REFRESHINTERVAL: function(t, e) {
                    t.menuTile.refreshInterval = e,
                    this.dispatch("saveLayout")
                },
                SET_LINKNAME: function(t, e) {
                    t.menuTile.linkName = e,
                    this.dispatch("saveLayout")
                },
                SET_DEVICE: function(t, e) {
                    t.menuTile.device = e,
                    this.dispatch("saveLayout")
                },
                SET_GLOBAL_VAR: function(t, e) {
                    t.menuTile.globalVar = e,
                    this.dispatch("saveLayout")
                },
                SET_TEMPLATE: function(t, e) {
                    t.menuTile.template = e,
                    this.dispatch("saveLayout")
                },
                SET_HIDEUNIT: function(t, e) {
                    t.menuTile.hideUnit = e,
                    this.dispatch("saveLayout")
                },
                SET_LOCALIZATION: function(t, e) {
                    t.layout.localization = e,
                    this.dispatch("saveLayout")
                },
                SET_BACKGROUND: function(t, e) {
                    t.layout.background = e,
                    this.dispatch("fixBG"),
                    this.dispatch("saveLayout")
                },
                SET_FONTSIZE: function(t, e) {
                    t.layout.fontSize = e.toString(),
                    this.dispatch("saveLayout")
                },
                SET_ICONSIZE: function(t, e) {
                    t.layout.iconSize = e.toString(),
                    this.dispatch("saveLayout")
                },
                // SET_CLOCKMODE: function(t, e) {
                //     t.layout.clockMode = e,
                //     this.dispatch("saveLayout")
                // },
                // SET_HIDEICONTEXT: function(t, e) {
                //     t.layout.hideIconText = e,
                //     this.dispatch("saveLayout")
                // },
                // SET_HIDETEXTSHADOW: function(t, e) {
                //     t.layout.hideTextShadow = e,
                //     this.dispatch("saveLayout")
                // },
                // SET_HIDEEVENTS: function(t, e) {
                //     t.layout.hideEvents = e,
                //     this.dispatch("saveLayout")
                // },
                // SET_NOCOLORS: function(t, e) {
                //     t.layout.noColors = e,
                //     this.dispatch("saveLayout")
                // },
                // SET_DATEFORMAT: function(t, e) {
                //     t.layout.dateFormat = e,
                //     this.dispatch("saveLayout")
                // },
                // SET_GRIDGAP: function(t, e) {
                //     t.layout.gridGap = parseInt(e),
                //     this.dispatch("saveLayout")
                // },
                // SET_CLOUDREFRESH: function(t, e) {
                //     t.layout.cloudRefresh = parseInt(e),
                //     this.dispatch("saveLayout")
                // },
                // SET_LANREFRESH: function(t, e) {
                //     t.layout.lanRefresh = parseInt(e),
                //     this.dispatch("saveLayout")
                // },
                // SET_GOBACK: function(t, e) {
                //     t.layout.goBack = e,
                //     this.dispatch("saveLayout")
                // },
                // SET_HIDE3DOT: function(t, e) {
                //     t.layout.hide3dot = e,
                //     this.dispatch("saveLayout")
                // },
                // SET_HIDELABELS: function(t, e) {
                //     t.layout.hideLabels = e,
                //     this.dispatch("saveLayout")
                // },
                // REMOVE_COLORS: function(t, e) {
                //     var o = t.layout.customColors.find((function(t) {
                //         return t.template == e.template && t.state == e.state
                //     }
                //     ));
                //     void 0 != o && t.layout.customColors.pop(o),
                //     this.dispatch("saveLayout")
                // },
                // SET_COLWIDTH: function(t, e) {
                //     t.layout.colWidth = "" == e ? e : parseInt(e),
                //     this.dispatch("saveLayout")
                // },
                // SET_ROWHEIGHT: function(t, e) {
                //     t.layout.rowHeight = "" == e ? e : parseInt(e),
                //     this.dispatch("saveLayout")
                // },
                // SET_ROUNDEDCORNERS: function(t, e) {
                //     t.layout.roundedCorners = parseInt(e),
                //     this.dispatch("saveLayout")
                // },
                // TOGGLE_MENU: function(t) {
                //     t.toggleMenu = !t.toggleMenu
                // },
                // TOGGLE_COLORS: function(t) {
                //     t.toggleColors = !t.toggleColors
                // },
                // SET_CUSTOMCOLOR: function(t, e) {
                //     var o = t.layout.customColors.filter((function(t) {
                //         return t.template == e.template && t.state == e.state
                //     }
                //     ));
                //     o.length > 0 ? o[0].iconColor = e.color : t.layout.customColors.push({
                //         template: e.template,
                //         bgColor: "",
                //         iconColor: e.color,
                //         state: e.state
                //     })
                // },
                // SET_CUSTOMBACKGROUNDCOLOR: function(t, e) {
                //     var o = t.layout.customColors.filter((function(t) {
                //         return t.template == e.template && t.state == e.state
                //     }
                //     ));
                //     o.length > 0 ? o[0].bgColor = e.color : t.layout.customColors.push({
                //         template: e.template,
                //         bgColor: e.color,
                //         iconColor: "",
                //         customIcon: "",
                //         state: e.state
                //     })
                // },
                // SET_CUSTOMICON: function(t, e) {
                //     var o = t.layout.customColors.filter((function(t) {
                //         return t.template == e.template && t.state == e.state
                //     }
                //     ));
                //     o.length > 0 ? o[0].customIcon = e.icon : t.layout.customColors.push({
                //         template: e.template,
                //         bgColor: "",
                //         iconColor: "",
                //         customIcon: e.icon,
                //         state: e.state
                //     })
                // },
                // SET_LOCALESJSON: function(t, e) {
                //     t.locales = e.locales
                // },
                // SET_LOCALJSON: function(t, e) {
                //     t.local = e
                // },
                // SET_TEMPLATESJSON: function(t, e) {
                //     t.templates = e
                // },
                // GRID_UPDATE: function(t, e) {
                //     t.grid = e
                // },
                // SHOW_MENUTILE: function(t, e) {
                //     t.toggleMenuTile = !0,
                //     t.menuTile = e
                // },
                // SHOW_NEXTMENUTILE: function(t, e) {
                //     var o = t.layout.tiles.indexOf(e);
                //     t.menuTile = t.layout.tiles[o + 1 >= t.layout.tiles.length ? 0 : o + 1]
                // },
                // SHOW_PREVIOUSMENUTILE: function(t, e) {
                //     var o = t.layout.tiles.indexOf(e);
                //     t.menuTile = t.layout.tiles[o - 1 >= 0 ? o - 1 : t.layout.tiles.length - 1]
                // },
                // CLOSE_MENUTILE: function(t) {
                //     t.toggleMenuTile = !1,
                //     t.menuTile = {}
                // },
                // SET_ATTRIBUTES: function(t, e) {
                //     var o = t.devices.find((function(t) {
                //         return t.id == e.id
                //     }
                //     ));
                //     if (void 0 != o)
                //         for (var a = 0; a < e.attr.length; a++)
                //             o.attr[Object.keys(e.attr[a])[0]] = e.attr[a][Object.keys(e.attr[a])[0]]
                // },
                // SET_LASTLAYOUTSAVE: function(t, e) {
                //     t.lastLayoutSave = e
                // },
                // SET_CONNECTED: function(t, e) {
                //     t.isConnected = e
                // },
                // SOCKET_ONOPEN: function(t, e) {
                //     console.log("socket opened"),
                //     this.commit("log", "Websocket Opened"),
                //     a["default"].prototype.$socket = e.currentTarget,
                //     t.socket.isConnected = e,
                //     this.commit("SET_CONNECTED", !0),
                //     t.socket.retryCount = 0
                // },
                // SOCKET_ONCLOSE: function(t, e) {

                //     console.log("socket closed " + e),
                //     console.log(e),
                //     this.commit("log", "WebSocket closed " + e.reason),
                //     t.socket.isConnected = !1,
                //     this.commit("SET_CONNECTED", !1),
                //     t.socket.retryCount++
                //     // t.socket.retryCount < 2 && setTimeout((function() {
                //     //     0 != t.socket.retryCount && nc.$connect()
                //     // }
                //     // ), 5000)
                // },
                // SOCKET_ONERROR: function(t, e) {
                //     console.log("socket error " + e),
                //     this.commit("log", "WebSocket error " + e),
                //     this.commit("SET_CONNECTED", !1),
                //     t.socket.retryCount++,
                //     t.socket.retryCount
                // },
                // SOCKET_ONMESSAGE: function(t, e) {
                //     if (t.socket.message = e,
                //     t.socket.retryCount = 0,
                //     "TDS Homeserver" === e.source) {
                //         var o = t.devices.find((function(t) {
                //             return t.id == e.deviceId
                //         }
                //         ));
                //         if (void 0 != o) {
                //             var a = o.attr.find((function(t) {
                //                 return Object.keys(t).indexOf(e.name) > -1
                //             }
                //             ));
                //             // console.log(e);
                //             void 0 != a && void 0 != e.value && (a[e.name] = e.value,
                //             this.commit("log", "Handling message: " + e.value + " for device id: " + e.deviceId))
                //         }
                //     }
                // },
                // SOCKET_RECONNECT: function(t, e) {
                //     console.info("Reconnecting socket attempt " + e),
                //     t.socket.retryCount = e,
                //     e % 4 == 0 ? nc.$disconnect : (nc.$connect,
                //     this.commit("log", "Reconnecting Websocket"))
                // },
                // SOCKET_RECONNECT_ERROR: function(t) {
                //     t.socket.reconnectError = !0,
                //     this.commit("SET_CONNECTED", !1),
                //     this.commit("log", "Failed to Reconnect Websocket")
                // },
                // SOCKET_RESET_RECONNECT: function(t) {
                //     t.socket.retryCount = 0
                // }
            },
            actions: {
                fixBG: function() {
                    var t = document.getElementsByTagName("html")[0];
                    void 0 != ic.state.layout.background && "" != ic.state.layout.background ? (t.style.backgroundImage = "url(" + ic.state.layout.background + ")",
                    t.style.backgroundRepeat = "no-repeat",
                    t.style.backgroundSize = "cover !important",
                    t.style.backgroundColor = ic.state.layout.bgColor,
                    t.style.backgroundPosition = "center") : (t.style.backgroundRepeat = "no-repeat",
                    t.style.backgroundSize = "cover !important",
                    t.style.backgroundColor = ic.state.layout.bgColor,
                    t.style.backgroundPosition = "center",
                    t.style.backgroundImage = "")
                },
                fontSize: function(t) {
                    var e = t.commit
                      , o = t.fontSize;
                    e("SET_FONTSIZE", o)
                },
                loadTemplates: function(t) {
                   
                    var e = this
                      , o = t.commit;
                        // var a = i.a.create({
                        //     baseURL: this.getters.urlPrefix + this.getters.urlPath,
                        //     crossDomain: !0,
                        //     responseType: "json",
                        //     withCredentials: !0,
                        //     headers: {
                        //         Accept: "application/json",
                        //         "Content-Type": "application/json",
                        //         Authorization: "Bearer " + ic.state.token
                        //     }
                        // });
                        this.commit("log", "Requesting Layout")
                        // a.get("/localization/templates").then((function(t) {
                        //     o("log", "Got Localization Templates"),
                        //     o("SET_TEMPLATES", t.data),
                        //     o("SET_CONNECTED", !0)
                        // }
                        // )).catch((function(t) {
                        //     e.commit("log", "Error getting localization " + t),
                        //     e.response = t,
                        //     o("SET_CONNECTED", !1),
                        //     console.log(t)
                        // }
                        // ))
                    
                },
                loadLayout: function(t) {
                    var e = this;
                    return ac(d.a.mark((function o() {
                        var a, n, r;
                        return d.a.wrap((function(o) {
                            while (1)
                                switch (o.prev = o.next) {
                                case 0:
                                    a = t.commit;
                                    a("SET_LAYOUT", hub.layout);
                                case 6:
                                case "end":
                                    return o.stop()
                                }
                        }
                        ), o)
                    }
                    )))()
                },
                loadLocalization: function(t, e) {
                    return nc(d.a.mark((function o() {
                        var n, a;
                        return d.a.wrap((function(o) {
                            while (1) switch (o.prev = o.next) {
                                case 0:
                                     return n = t.commit, o.next = 3,n("SET_LOCALESJSON", JSON.parse('{"locales": ["English", "Spanish", "Italian"]}'))
                                case 3:
                                    return a = e.localization ? e.localization : "English", o.next = 6, i.a.get( a + ".json").then((function(t) {
                                        n("SET_LOCALJSON", t.data)
                                    }));
                                case 6:
                                    return o.next = 8, i.a.get(a + ".json.1").then((function(t) {
                                        n("SET_TEMPLATESJSON", t.data)
                                    }));
                                case 8:
                                case "end":
                                    return o.stop()
                            }
                        }), o)
                    })))()
                },
                loadDevices: function(t) {
                    var e = this,
                    o = t.commit;
                    this.commit("log", "Requesting Devices"),  o("SET_DEVICES",  hub.devices), o("SET_CONNECTED", !0)
                },
                loadGlobalVars: function(t) {
                    var e = this
                      , o = t.commit;
                      this.commit("log", "Requesting Global Variables"), o("SET_GLOBAL_VARS", "[]"), o("SET_CONNECTED", !0)
                },
                openSocket: function() {
                    // this.commit("log", "Opening Socket");
                    //  let DashboardDevices = [];
                    //     // loop over the devices in  ic.state.devices
                    //     for (let i = 0; i < ic.state.devices.length; i++) {
                    //         DashboardDevices.push(ic.state.devices[i].id)
                    //       }
                    //      //  console.log(DashboardDevices);


                    // a["default"].use(ec.a, ic.state.Websocketurl + "?devices="+ DashboardDevices.toString() +"&timeout=" + ic.state.WebSocketTimeout + "&screenID=" + ic.state.ScreenID, {
                    //     format: "json",
                    //     store: ic,
                    //     connectManually: !0
                    // }),
                    // websocketfordashboard = nc;
                    // nc.$connect()

                },
                getUpdates: function(t) {
                    // var e = this
                    //   , o = t.commit
                    //   , a = t.dispatch;
                    // if (ic.state.isLocal && 0 == ic.state.socket.isConnected && ic.state.socket.retryCount < 1)
                    //     a("openSocket");
                },
                getAttributes: function(t, e) {
                    // var o = this
                    //   , a = t.commit
                    //   , n = i.a.create({
                    //     baseURL: this.getters.urlPrefix + this.getters.urlPath,
                    //     crossDomain: !0,
                    //     responseType: "json",
                    //     withCredentials: !0,
                    //     headers: {
                    //         Accept: "application/json",
                    //         "Content-Type": "application/json",
                    //         Authorization: "Bearer " + this.state.token
                    //     }
                    // });
                    // "" != e && (this.commit("log", "Requesting Attributes for ID: " + e),
                    // n.get("/device/" + e).then((function(t) {
                    //     o.commit("log", "Got Attributes for ID: " + e);
                    //     var n = t.data;
                    //     n.length > 0 && a("SET_ATTRIBUTES", n[0])
                    // }
                    // )).catch((function(t) {
                    //     o.commit("log", "Error getting Attributes " + t),
                    //     o.response = t,
                    //     a("SET_CONNECTED", !1),
                    //     console.log(t)
                    // }
                    // )))
                },
                sendCommand: function(t, e) {
                    var o = this
                      , a = t.commit
                      , n = i.a.create({
                        baseURL: "housepages",
                        crossDomain: !0,
                        responseType: "json",
                        withCredentials: !0,
                        headers: {
                            Accept: "application/json",
                            "Content-Type": "application/json",
                            Authorization: "Bearer " + ic.state.token
                        }
                    })
                      , r = {
                        id: e.id,
                        cmd: e.cmd,
                        secondary: e.secondary
                    };
                    this.commit("log", "Sending Command " + r.cmd + " to id " + r.id),
                        // console.log(nc)
                    n.post("/command.php", r).then((function(t) {
                        o.commit("log", "Command Sent"),
                        void 0 != t.data.poll && a("SET_UPDATES", t.data.poll)
                    }
                    )).catch((function(t) {
                        o.commit("log", "Error seding command " + t),
                        o.response = t,
                        console.log(t)
                    }
                    ))
                }
            }
        })
          , rc = function(t, e) {
            for (var o = 0; o <= t.rows - 1; o++) {
                e[o] = new Array(t.cols);
                for (var a = 0; a <= t.cols - 1; a++)
                    e[o][a] = "n"
            }
            // for (var n in t.tiles)
            //     try {
            //         for (var i = 0; i <= t.tiles[n].rowSpan - 1; i++) {
            //             for (var r = 0; r <= t.tiles[n].colSpan - 1; r++) {
            //                 t.tiles[n].row <= t.rows && 
            //                 t.tiles[n].col <= t.cols && 
            //                 (e[t.tiles[n].row - 1 + i]
            //                 [t.tiles[n].col - 1 + r] = "y")
            //                 console.log(t.tiles[n].col - 1 + r)
            //             }
            //         }
                
            //     } catch (s) {
            //         console.log(s)
            //     }
            return e
        }
          , sc = ic;
        o("ba8c"),
        o("8ad3"),
        o("d2d0");
        a["default"].config.productionTip = !1,
        a["default"].directive("draggable", {
            bind: function(t) {
                var e, o, a, n;
                function i(i) {
                    var r = i.clientX - a
                      , s = i.clientY - n;
                    return t.style.top = o + s + "px",
                    t.style.left = e + r + "px",
                    !1
                }
                function r() {
                    document.removeEventListener("mousemove", i),
                    document.removeEventListener("mouseup", r)
                }
                t.style.position = "absolute",
                t.style.left = "0",
                t.style.right = "0",
                t.style.marginLeft = "auto",
                t.style.marginRight = "auto",
                t.addEventListener("mousedown", (function(s) {
                    if (s.currentTarget.classList.contains("menu") && "INPUT" !== s.target.tagName && "SELECT" !== s.target.tagName) {
                        e = t.offsetLeft,
                        o = t.offsetTop,
                        a = s.clientX,
                        n = s.clientY,
                        t.style.marginLeft = "unset",
                        t.style.marginRight = "unset",
                        t.style.right = "unset";
                        var l = s.clientX - a
                          , c = s.clientY - n;
                        return t.style.top = o + c + "px",
                        t.style.left = e + l + "px",
                        document.addEventListener("mousemove", i),
                        document.addEventListener("mouseup", r),
                        !1
                    }
                    return !1
                }
                ))
            }
        });
        new a["default"]({
            store: sc,
            render: function(t) {
                return t(Ql)
            }
        }).$mount("#app")
    },
    "5c0b": function(t, e, o) {
        "use strict";
        var a = o("0554")
          , n = o.n(a);
        n.a
    },
    "62ea": function(t, e, o) {
        var a = o("24fb");
        e = a(!1),
        e.push([t.i, ".month[data-v-174247f6]{text-transform:uppercase;background:#b11;background:-webkit-gradient(linear,left top,right bottom,from(#d66),to(#a00));background:-webkit-linear-gradient(top left,#d66 0,#a00);background:linear-gradient(to bottom right,#d66 0,#a00);color:#fff}", ""]),
        t.exports = e
    },
    "735f": function(t, e, o) {
        "use strict";
        var a = o("7b7b")
          , n = o.n(a);
        n.a
    },
    "76d0": function(t, e, o) {
        "use strict";
        var a = o("49ea")
          , n = o.n(a);
        n.a
    },
    "7b7b": function(t, e, o) {
        var a = o("0814");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = o("499e").default;
        n("f1bc2c42", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "8ad3": function(t, e, o) {
        var a = o("511e");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = o("499e").default;
        n("4483b66a", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    "96a4": function(t, e, o) {
        var a = o("24fb")
          , n = o("b6cb")
          , i = o("0dd2")
          , r = o("7ccb");
        e = a(!1),
        e.i(n),
        e.i(i),
        e.i(r),
        e.push([t.i, "#app{font-family:Avenir,Helvetica,Arial,sans-serif;text-align:left;height:-webkit-fill-available;min-height:-webkit-fill-available}html{background-size:cover;background-color:#282828;background-repeat:no-repeat;background-attachment:fixed;background-position:50%;overflow:hidden}", ""]),
        t.exports = e
    },
    a05c: function(t, e, o) {
        var a = o("24fb");
        e = a(!1),
        e.push([t.i, ".popUpImage[data-v-d32ceec6]{right:0;margin:auto;bottom:0;-webkit-transition:.1s;transition:.1s}.modal[data-v-d32ceec6],.popUpImage[data-v-d32ceec6]{position:fixed;top:0;left:0;width:100%;z-index:9999}.modal[data-v-d32ceec6]{padding-top:100px;height:100%;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.9)}", ""]),
        t.exports = e
    },
    a132: function(t, e, o) {
        var a = o("bb80");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = o("499e").default;
        n("1445a2d4", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    b28b: function(t, e, o) {
        var a = o("0325");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = o("499e").default;
        n("6688ecd4", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    ba8c: function(t, e, o) {
        var a = o("391c");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = o("499e").default;
        n("7874cfc2", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    bb80: function(t, e, o) {
        var a = o("24fb");
        e = a(!1),
        e.push([t.i, ".weatherIcon[data-v-5b4273a2],.weatherIcon img[data-v-5b4273a2]{display:inline-block;padding:0;margin:0}.weatherDirection[data-v-5b4273a2],.weatherHumidity[data-v-5b4273a2],.weatherSpeed[data-v-5b4273a2],.weatherTemperature[data-v-5b4273a2]{display:inline-block;padding:4px}", ""]),
        t.exports = e
    },
    c2a4: function(t, e, o) {
        var a = o("24fb");
        e = a(!1),
        e.push([t.i, ".popUpImage[data-v-4784b085]{position:fixed!important;right:0;margin:auto;bottom:0;-webkit-transition:.1s;transition:.1s;-o-object-fit:contain;object-fit:contain}.modal[data-v-4784b085],.popUpImage[data-v-4784b085]{top:0;left:0;width:100%;height:100%;z-index:9999}.modal[data-v-4784b085]{position:fixed;padding-top:100px;overflow:auto;background-color:#000;background-color:rgba(0,0,0,.9)}.image[data-v-4784b085]{position:absolute;top:0;left:0;right:0;bottom:0;text-align:center;width:100%;height:100%;-o-object-fit:contain;object-fit:contain}", ""]),
        t.exports = e
    },
    cf02: function(t, e, o) {
        var a = o("24fb");
        e = a(!1),
        e.push([t.i, '.fade-leave-to{opacity:0;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0)}[class*=" he-"],[class^=he-]{font-family:hubitat!important;font-style:normal;font-weight:400;-webkit-font-feature-settings:normal;font-feature-settings:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.he-add_1:before{content:"\\e906"}.he-add_2:before{content:"\\e909"}.he-advanced_1:before{content:"\\e916"}.he-apps_1:before{content:"\\ea32"}.he-apps_2:before{content:"\\ea33"}.he-community_1:before{content:"\\ea36"}.he-community_2:before{content:"\\ea37"}.he-devices_1:before{content:"\\ea47"}.he-devices_2:before{content:"\\ea48"}.he-discovery_1:before{content:"\\ea4b"}.he-discovery_3:before{content:"\\ea4d"}.he-events_2:before{content:"\\ea5c"}.he-exclude_1:before{content:"\\ea5e"}.he-exclude_3:before{content:"\\ea60"}.he-help_1:before{content:"\\ea62"}.he-help_2:before{content:"\\ea63"}.he-hubevents_2:before{content:"\\ea66"}.he-info_1:before{content:"\\ea68"}.he-info_3:before{content:"\\ea6a"}.he-location_1:before{content:"\\ea6c"}.he-location_3:before{content:"\\ea6e"}.he-locationevents_2:before{content:"\\ea73"}.he-logs_2:before{content:"\\ea75"}.he-logs_4:before{content:"\\ea77"}.he-reboothub_1:before{content:"\\e918"}.he-reboothub_2:before{content:"\\e919"}.he-repair_1:before{content:"\\e93a"}.he-repair_2:before{content:"\\ea12"}.he-settings_1:before{content:"\\ea17"}.he-shutdown_1:before{content:"\\ea79"}.he-shutdown_3:before{content:"\\ea7b"}.he-acceleration_active:before{content:"\\ebd3"}.he-acceleration_inactive:before{content:"\\ebd9"}.he-address-book1:before{content:"\\e944"}.he-aid-kit:before{content:"\\e998"}.he-air_filter:before{content:"\\ecc7"}.he-alarm:before{content:"\\e950"}.he-alarm1:before{content:"\\ecc9"}.he-alarm_2:before{content:"\\ecc8"}.he-alexa:before{content:"\\ed31"}.he-amazon2:before{content:"\\eaf4"}.he-android1:before{content:"\\eac0"}.he-apple1:before{content:"\\eaf8"}.he-appointment:before{content:"\\ecca"}.he-apps_11:before{content:"\\ea05"}.he-apps_21:before{content:"\\ea06"}.he-arrival:before{content:"\\eccb"}.he-arrow-down-left2:before{content:"\\ea3f"}.he-arrow-down-right2:before{content:"\\ea3d"}.he-arrow-down2:before{content:"\\ea3e"}.he-arrow-left2:before{content:"\\ea40"}.he-arrow-right2:before{content:"\\ea3c"}.he-arrow-up-left2:before{content:"\\ea39"}.he-arrow-up-right2:before{content:"\\ea3b"}.he-arrow-up2:before{content:"\\ea3a"}.he-attachment:before{content:"\\e9cd"}.he-axis:before{content:"\\eaf3"}.he-axis_2:before{content:"\\eaf2"}.he-axis_3:before{content:"\\ed6a"}.he-backward2:before{content:"\\ea1f"}.he-barcode1:before{content:"\\e937"}.he-bathtub1:before{content:"\\ed33"}.he-battery_25:before{content:"\\ec54"}.he-battery_25_color:before{content:"\\ebdc"}.he-battery_25_filled:before{content:"\\ec53"}.he-battery_50:before{content:"\\ec56"}.he-battery_50_color:before{content:"\\ebdd"}.he-battery_50_filled:before{content:"\\ec55"}.he-battery_75_color:before{content:"\\ebde"}.he-battery_75_to_100:before{content:"\\ec57"}.he-battery_empty:before{content:"\\ec59"}.he-battery_empty_filled:before{content:"\\ec58"}.he-battery_full:before{content:"\\ec5a"}.he-battery_full_color:before{content:"\\ebe2"}.he-battery_large:before{content:"\\eccd"}.he-battery_large_filled:before{content:"\\eccc"}.he-battery_low_color:before{content:"\\ebe3"}.he-beach-chair:before{content:"\\ec4e"}.he-bed_1:before{content:"\\eb0d"}.he-bed_2:before{content:"\\ed34"}.he-bed_3:before{content:"\\eb0e"}.he-bed_4:before{content:"\\eb0f"}.he-bed_5:before{content:"\\ed35"}.he-bell1:before{content:"\\e951"}.he-bin:before{content:"\\e9ac"}.he-bin2:before{content:"\\e9ad"}.he-blind1:before{content:"\\ecb6"}.he-blocked:before{content:"\\ea0e"}.he-bluetooth1:before{content:"\\eb11"}.he-bluetooth_headphones:before{content:"\\eb10"}.he-book1:before{content:"\\e91f"}.he-bookmark1:before{content:"\\e9d2"}.he-bookmarks:before{content:"\\e9d3"}.he-books:before{content:"\\e920"}.he-box-add:before{content:"\\e95e"}.he-box-remove:before{content:"\\e95f"}.he-briefcase1:before{content:"\\e9ae"}.he-brightness-contrast:before{content:"\\e9d6"}.he-bubble:before{content:"\\e96b"}.he-bubble2:before{content:"\\e96e"}.he-bubbles:before{content:"\\e96c"}.he-bubbles2:before{content:"\\e96d"}.he-bubbles3:before{content:"\\e96f"}.he-bubbles4:before{content:"\\e970"}.he-bug1:before{content:"\\e999"}.he-bulb_1:before{content:"\\ecda"}.he-bulb_2:before{content:"\\ecdb"}.he-bulb_4:before{content:"\\ec68"}.he-bulb_6:before{content:"\\eb12"}.he-bulb_off:before{content:"\\ebe4"}.he-bulb_on:before{content:"\\ebec"}.he-button_off .path1:before{content:"\\ebf9";color:#000}.he-button_off .path2:before{content:"\\ebfa";margin-left:-1em;color:#000}.he-button_off .path3:before{content:"\\ebfb";margin-left:-1em;color:#fff;opacity:.6}.he-button_on .path1:before{content:"\\ebfc";color:#000}.he-button_on .path2:before{content:"\\ebfd";margin-left:-1em;color:#000}.he-button_on .path3:before{content:"\\ebfe";margin-left:-1em;color:#3cbf8a}.he-calculator1:before{content:"\\e940"}.he-calendar1:before{content:"\\e953"}.he-calendar2:before{content:"\\ecbe"}.he-calendar_2:before{content:"\\ecdc"}.he-camera1:before{content:"\\e90f"}.he-cancel-circle:before{content:"\\ea0d"}.he-car1:before{content:"\\ec69"}.he-cctv:before{content:"\\ed36"}.he-cd_rom:before{content:"\\eb13"}.he-ceiling_lamp:before{content:"\\eb14"}.he-ceiling_lamp_2:before{content:"\\ed37"}.he-chair_lounge:before{content:"\\ed3b"}.he-chandelier_2:before{content:"\\eb15"}.he-checkbox-checked:before{content:"\\ea52"}.he-checkbox-unchecked:before{content:"\\ea53"}.he-checkmark:before{content:"\\ea10"}.he-checkmark2:before{content:"\\ea11"}.he-chrome1:before{content:"\\ead9"}.he-circle-down:before{content:"\\ea43"}.he-circle-left:before{content:"\\ea44"}.he-circle-right:before{content:"\\ea42"}.he-circle-up:before{content:"\\ea41"}.he-circuit:before{content:"\\ecdd"}.he-clean:before{content:"\\ec6a"}.he-cleaning_1:before{content:"\\ec6b"}.he-cleaning_2:before{content:"\\ec6c"}.he-cleaning_3:before{content:"\\ec6d"}.he-clipboard1:before{content:"\\e9b8"}.he-clock:before{content:"\\e94e"}.he-clock2:before{content:"\\e94f"}.he-cloud-check:before{content:"\\e9c4"}.he-cloud-download1:before{content:"\\e9c2"}.he-cloud-upload1:before{content:"\\e9c3"}.he-cloud1:before{content:"\\e9c1"}.he-co2:before{content:"\\ecb7"}.he-codepen1:before{content:"\\eae8"}.he-cog1:before{content:"\\e994"}.he-cogs1:before{content:"\\e995"}.he-color_palette:before{content:"\\ecde"}.he-command:before{content:"\\ea4e"}.he-compass1:before{content:"\\e949"}.he-compass2:before{content:"\\e94a"}.he-computer:before{content:"\\ecb0"}.he-computer_2:before{content:"\\eb16"}.he-connection:before{content:"\\e91b"}.he-contact_closed:before{content:"\\eb91"}.he-contact_open:before{content:"\\eb92"}.he-contrast:before{content:"\\e9d5"}.he-copy1:before{content:"\\e92c"}.he-crop1:before{content:"\\ea57"}.he-cross:before{content:"\\ea0f"}.he-ctrl:before{content:"\\ea50"}.he-customer_support:before{content:"\\eaeb"}.he-danger:before{content:"\\ecbb"}.he-dashboard1:before{content:"\\ecb2"}.he-dashboards:before{content:"\\ecdf"}.he-database1:before{content:"\\e964"}.he-default_dashboard_icon:before{content:"\\e93b"}.he-delicious1:before{content:"\\eacd"}.he-dimmer_high:before{content:"\\ebff"}.he-dimmer_low:before{content:"\\ec10"}.he-dimmer_medium:before{content:"\\ec17"}.he-dining-chair:before{content:"\\ecc2"}.he-dinner:before{content:"\\ecc3"}.he-discover:before{content:"\\eaec"}.he-display:before{content:"\\e956"}.he-door-1:before{content:"\\ecbc"}.he-door_3:before{content:"\\ec6e"}.he-door_closed:before{content:"\\ec6f"}.he-door_enter:before{content:"\\ec70"}.he-door_exit_2:before{content:"\\ec71"}.he-door_lock:before{content:"\\ed3c"}.he-door_open:before{content:"\\ec72"}.he-door_remote:before{content:"\\ed3d"}.he-download1:before{content:"\\e960"}.he-download2:before{content:"\\e9c5"}.he-download3:before{content:"\\e9c7"}.he-downstairs:before{content:"\\ed6c"}.he-drawer:before{content:"\\e95c"}.he-drawer2:before{content:"\\e95d"}.he-dribbble1:before{content:"\\eaa7"}.he-drive:before{content:"\\e963"}.he-drive1:before{content:"\\eb20"}.he-drop:before{content:"\\ec51"}.he-dropbox1:before{content:"\\eaae"}.he-dryer:before{content:"\\eb26"}.he-dryer_2:before{content:"\\eb25"}.he-earth:before{content:"\\e9ca"}.he-edge1:before{content:"\\eadc"}.he-eject1:before{content:"\\ea25"}.he-electricity:before{content:"\\ece0"}.he-embed:before{content:"\\ea7f"}.he-embed2:before{content:"\\ea80"}.he-enlarge:before{content:"\\e989"}.he-enlarge2:before{content:"\\e98b"}.he-enter:before{content:"\\ea13"}.he-envelop:before{content:"\\e945"}.he-equalizer:before{content:"\\e992"}.he-equalizer2:before{content:"\\e993"}.he-ethernet:before{content:"\\ecc6"}.he-exit:before{content:"\\ea14"}.he-eye-blocked:before{content:"\\e9d1"}.he-eye-minus:before{content:"\\e9d0"}.he-eye-plus:before{content:"\\e9cf"}.he-eye1:before{content:"\\e9ce"}.he-eyedropper1:before{content:"\\e90a"}.he-facebook1:before{content:"\\ea90"}.he-facebook2:before{content:"\\ea91"}.he-facebook3:before{content:"\\eb2a"}.he-facebook_2:before{content:"\\eb27"}.he-fan:before{content:"\\ecb8"}.he-fan_2:before{content:"\\eb2b"}.he-fan_auto:before{content:"\\e980"}.he-fan_high:before{content:"\\e9b0"}.he-fan_low:before{content:"\\e9e4"}.he-fan_med:before{content:"\\e9fc"}.he-fan_med_high:before{content:"\\e9ec"}.he-fan_med_low:before{content:"\\e9f4"}.he-fan_off:before{content:"\\e93c"}.he-fan_on:before{content:"\\ea04"}.he-feed1:before{content:"\\e91d"}.he-file-empty:before{content:"\\e924"}.he-file-music:before{content:"\\e928"}.he-file-picture:before{content:"\\e927"}.he-file-play:before{content:"\\e929"}.he-file-text1:before{content:"\\e922"}.he-file-text2:before{content:"\\e926"}.he-file-video:before{content:"\\e92a"}.he-file-zip:before{content:"\\e92b"}.he-file1:before{content:"\\eaee"}.he-file_2:before{content:"\\eaed"}.he-files-empty:before{content:"\\e925"}.he-film1:before{content:"\\e913"}.he-filter1:before{content:"\\ea5b"}.he-filter2:before{content:"\\ed2d"}.he-finder:before{content:"\\eabf"}.he-fingerprint:before{content:"\\ecaf"}.he-fire-alarm:before{content:"\\ecba"}.he-fire1:before{content:"\\e9a9"}.he-fire2:before{content:"\\ece1"}.he-fire_alarm_clear:before{content:"\\ec23"}.he-firefox1:before{content:"\\eada"}.he-fireplace:before{content:"\\ed3e"}.he-first:before{content:"\\ea21"}.he-fist:before{content:"\\ece3"}.he-fist_2:before{content:"\\ece2"}.he-flag1:before{content:"\\e9cc"}.he-flag2:before{content:"\\ece4"}.he-flash1:before{content:"\\ec73"}.he-flickr1:before{content:"\\eaa3"}.he-flickr2:before{content:"\\eaa4"}.he-flickr3:before{content:"\\eaa5"}.he-flickr4:before{content:"\\eaa6"}.he-floppy-disk:before{content:"\\e962"}.he-folder-download:before{content:"\\e933"}.he-folder-minus:before{content:"\\e932"}.he-folder-open1:before{content:"\\e930"}.he-folder-plus:before{content:"\\e931"}.he-folder-upload:before{content:"\\e934"}.he-folder1:before{content:"\\e92f"}.he-forward1:before{content:"\\e969"}.he-forward3:before{content:"\\ea20"}.he-gaming_controler:before{content:"\\eb2c"}.he-gaming_controller_2:before{content:"\\eb2d"}.he-gaming_controller_3:before{content:"\\eb2e"}.he-garage_closed:before{content:"\\ec24"}.he-garage_closing .path1:before{content:"\\ec25";color:#000}.he-garage_closing .path2:before{content:"\\ec26";margin-left:-1em;color:#fff}.he-garage_closing .path3:before{content:"\\ec27";margin-left:-1em;color:#000}.he-garage_closing .path4:before{content:"\\ec28";margin-left:-1em;color:#fff}.he-garage_closing .path5:before{content:"\\ec29";margin-left:-1em;color:#000}.he-garage_locked .path1:before{content:"\\ec2a";color:#000}.he-garage_locked .path2:before{content:"\\ec2b";margin-left:-1em;color:#000}.he-garage_locked .path3:before{content:"\\ec2c";margin-left:-1em;color:#fff}.he-garage_locked .path4:before{content:"\\ec2d";margin-left:-1em;color:#000}.he-garage_open:before{content:"\\ec2e"}.he-garage_opening .path1:before{content:"\\ec30";color:#000}.he-garage_opening .path2:before{content:"\\ec31";margin-left:-1em;color:#fff}.he-garage_opening .path3:before{content:"\\ec32";margin-left:-1em;color:#000}.he-garage_opening .path4:before{content:"\\ec33";margin-left:-1em;color:#fff}.he-garage_opening .path5:before{content:"\\ec34";margin-left:-1em;color:#000}.he-garage_unlocked .path1:before{content:"\\ec35";color:#000}.he-garage_unlocked .path2:before{content:"\\ec36";margin-left:-1em;color:#000}.he-garage_unlocked .path3:before{content:"\\ec37";margin-left:-1em;color:#fff}.he-garage_unlocked .path4:before{content:"\\ec38";margin-left:-1em;color:#000}.he-gas_warning:before{content:"\\ec74"}.he-gauge:before{content:"\\ece6"}.he-gauge_2:before{content:"\\ece5"}.he-gift1:before{content:"\\e99f"}.he-git1:before{content:"\\eae7"}.he-github1:before{content:"\\eab0"}.he-glass1:before{content:"\\e9a0"}.he-glass2:before{content:"\\e9a1"}.he-gmail:before{content:"\\eb30"}.he-google-drive:before{content:"\\ea8f"}.he-google1:before{content:"\\ea88"}.he-google2:before{content:"\\ea89"}.he-google3:before{content:"\\ea8a"}.he-google_play:before{content:"\\eb3b"}.he-grid:before{content:"\\ed2e"}.he-hammer:before{content:"\\e996"}.he-hand_3:before{content:"\\ece7"}.he-hand_wave:before{content:"\\ece8"}.he-hanging_lights:before{content:"\\eb43"}.he-hanging_roof_lamp:before{content:"\\eb44"}.he-hangouts:before{content:"\\ea8e"}.he-headphones1:before{content:"\\e910"}.he-heart1:before{content:"\\e9da"}.he-help1:before{content:"\\eaef"}.he-history1:before{content:"\\e94d"}.he-home1:before{content:"\\e900"}.he-home2:before{content:"\\e901"}.he-home3:before{content:"\\e902"}.he-house_1:before{content:"\\ed3f"}.he-house_2:before{content:"\\ed40"}.he-house_3:before{content:"\\ed41"}.he-house_4:before{content:"\\ed42"}.he-house_5:before{content:"\\ed43"}.he-humidity:before{content:"\\ecf4"}.he-humidity_filled:before{content:"\\ecf3"}.he-image1:before{content:"\\e90d"}.he-images:before{content:"\\e90e"}.he-infinite:before{content:"\\ea2f"}.he-info1:before{content:"\\ea0c"}.he-insert-template:before{content:"\\ea72"}.he-instagram1:before{content:"\\ea92"}.he-integrated_circuit:before{content:"\\ecf5"}.he-key1:before{content:"\\e98d"}.he-keyboard:before{content:"\\e955"}.he-keypad_1:before{content:"\\eb45"}.he-keypad_2:before{content:"\\eb46"}.he-kitchen:before{content:"\\ed44"}.he-lab:before{content:"\\e9aa"}.he-lamp_1:before{content:"\\ed4d"}.he-lamp_hanging:before{content:"\\ed4e"}.he-laptop1:before{content:"\\e957"}.he-last:before{content:"\\ea22"}.he-laundry:before{content:"\\ec75"}.he-leaf1:before{content:"\\e9a4"}.he-less_plus_signs:before{content:"\\ecf6"}.he-lifebuoy:before{content:"\\e941"}.he-lightbulb:before{content:"\\eca0"}.he-link1:before{content:"\\e9cb"}.he-link2:before{content:"\\ecf8"}.he-link_broken:before{content:"\\ecf7"}.he-linkedin1:before{content:"\\eac9"}.he-linkedin2:before{content:"\\eaca"}.he-list-numbered:before{content:"\\e9b9"}.he-list1:before{content:"\\e9ba"}.he-list2:before{content:"\\e9bb"}.he-list3:before{content:"\\ed2f"}.he-location:before{content:"\\e947"}.he-location2:before{content:"\\e948"}.he-lock1:before{content:"\\e98f"}.he-logo-mark:before{content:"\\e908"}.he-logo-vertical-white:before{content:"\\e907";color:#fff}.he-loop:before{content:"\\ea2d"}.he-loop2:before{content:"\\ea2e"}.he-magic-wand:before{content:"\\e997"}.he-magnet1:before{content:"\\e9ab"}.he-man:before{content:"\\e9dc"}.he-man-woman:before{content:"\\e9de"}.he-map1:before{content:"\\e94b"}.he-map2:before{content:"\\e94c"}.he-menu:before{content:"\\e9bd"}.he-menu2:before{content:"\\e9be"}.he-menu3:before{content:"\\e9bf"}.he-menu4:before{content:"\\e9c0"}.he-meter:before{content:"\\e9a6"}.he-meter1:before{content:"\\ecf9"}.he-meter2:before{content:"\\e9a7"}.he-mic:before{content:"\\e91e"}.he-microsoft:before{content:"\\eb51"}.he-microwave:before{content:"\\ecc5"}.he-minus1:before{content:"\\ea0b"}.he-mobile1:before{content:"\\e958"}.he-mobile2:before{content:"\\e959"}.he-mode_away:before{content:"\\ec39"}.he-mode_cleaning:before{content:"\\ec3a"}.he-mode_day:before{content:"\\ec3b"}.he-mode_default:before{content:"\\ec3c"}.he-mode_evening:before{content:"\\ec3d"}.he-mode_night:before{content:"\\ec3e"}.he-mode_vacation:before{content:"\\ec3f"}.he-monitor:before{content:"\\eb55"}.he-motion-sensor:before{content:"\\ed64"}.he-motion_detector_1:before{content:"\\ec76"}.he-motion_detector_2:before{content:"\\ec82"}.he-motion_detector_3:before{content:"\\ecfb"}.he-motion_detector_3_filled:before{content:"\\ecfa"}.he-motion_detector_4:before{content:"\\ecfc"}.he-mug:before{content:"\\e9a2"}.he-music1:before{content:"\\e911"}.he-music_player:before{content:"\\eb56"}.he-mute:before{content:"\\ecfd"}.he-netflix:before{content:"\\eb57"}.he-new-tab:before{content:"\\ea7e"}.he-newspaper:before{content:"\\e904"}.he-next2:before{content:"\\ea24"}.he-next_track:before{content:"\\ecfe"}.he-night_1:before{content:"\\ec83"}.he-night_2:before{content:"\\ec84"}.he-not_present:before{content:"\\eb8f"}.he-notification:before{content:"\\ea08"}.he-oculus_rift:before{content:"\\eb5f"}.he-office:before{content:"\\e903"}.he-onedrive:before{content:"\\eaaf"}.he-opt:before{content:"\\ea51"}.he-outlet:before{content:"\\ed30"}.he-outlet_3:before{content:"\\ec85"}.he-outlet_off:before{content:"\\e97c"}.he-padlock_locked:before{content:"\\ec86"}.he-padlock_unlocked:before{content:"\\ec87"}.he-paint-format:before{content:"\\e90c"}.he-pantone_1:before{content:"\\ecff"}.he-paste1:before{content:"\\e92d"}.he-pause-outlined-big-symbol:before{content:"\\ecbd"}.he-pause2:before{content:"\\ea1d"}.he-pause_circle:before{content:"\\ed00"}.he-pencil1:before{content:"\\e905"}.he-phone-hang-up:before{content:"\\e943"}.he-phone1:before{content:"\\e942"}.he-pie-chart1:before{content:"\\e99a"}.he-pinterest3:before{content:"\\eb60"}.he-placeholder:before{content:"\\ed32"}.he-placeholder_1:before{content:"\\ec88"}.he-play1:before{content:"\\e912"}.he-play3:before{content:"\\ea1c"}.he-play_button:before{content:"\\ed01"}.he-playstation:before{content:"\\eb62"}.he-playstation_logo:before{content:"\\eb61"}.he-plug1:before{content:"\\ecb9"}.he-plug_1:before{content:"\\ec89"}.he-plug_2:before{content:"\\ed4f"}.he-plug_3:before{content:"\\ed50"}.he-plug_4:before{content:"\\ec8a"}.he-plug_5:before{content:"\\ed02"}.he-plug_6:before{content:"\\ed03"}.he-plus1:before{content:"\\ea0a"}.he-podcast1:before{content:"\\e91c"}.he-portrait:before{content:"\\ed68"}.he-power:before{content:"\\e9b5"}.he-power-cord:before{content:"\\e9b7"}.he-power_off:before{content:"\\ec40"}.he-power_on:before{content:"\\ec41"}.he-present:before{content:"\\eb90"}.he-previous2:before{content:"\\ea23"}.he-price-tag:before{content:"\\e935"}.he-price-tags:before{content:"\\e936"}.he-printer:before{content:"\\e954"}.he-profile:before{content:"\\e923"}.he-property:before{content:"\\ecb1"}.he-psp:before{content:"\\eb63"}.he-pushpin:before{content:"\\e946"}.he-qrcode1:before{content:"\\e938"}.he-question1:before{content:"\\ea09"}.he-question2:before{content:"\\ecbf"}.he-question_1:before{content:"\\eaf0"}.he-question_2:before{content:"\\eaf1"}.he-quotes-left:before{content:"\\e977"}.he-quotes-right:before{content:"\\e978"}.he-radio-checked:before{content:"\\ea54"}.he-radio-checked2:before{content:"\\ea55"}.he-radio-unchecked:before{content:"\\ea56"}.he-reddit1:before{content:"\\eac6"}.he-redo:before{content:"\\e966"}.he-redo2:before{content:"\\e968"}.he-relay_off:before{content:"\\ec4a"}.he-relay_on:before{content:"\\ec4b"}.he-repair1:before{content:"\\ec96"}.he-reply1:before{content:"\\e96a"}.he-resize:before{content:"\\ec4f"}.he-road1:before{content:"\\e9b1"}.he-rocket1:before{content:"\\e9a5"}.he-router_1:before{content:"\\ed04"}.he-router_2:before{content:"\\ed05"}.he-router_3:before{content:"\\ed06"}.he-router_4:before{content:"\\ed07"}.he-rss1:before{content:"\\ea9b"}.he-rss2:before{content:"\\ea9c"}.he-running:before{content:"\\ed08"}.he-safari1:before{content:"\\eadd"}.he-samsung:before{content:"\\ed09"}.he-scissors1:before{content:"\\ea5a"}.he-search1:before{content:"\\e986"}.he-security_system:before{content:"\\ed51"}.he-sensor:before{content:"\\ed66"}.he-sensor_1:before{content:"\\ed65"}.he-sensor_2:before{content:"\\ed0a"}.he-sensor_3:before{content:"\\ed0b"}.he-sensor_4:before{content:"\\ed63"}.he-sensor_5:before{content:"\\ed0c"}.he-settings1:before{content:"\\ec4d"}.he-setup:before{content:"\\ec4c"}.he-shades_closed:before{content:"\\eba1"}.he-shades_open:before{content:"\\ebaa"}.he-shades_opening .path1:before{content:"\\ebaf";color:#231d1d}.he-shades_opening .path2:before{content:"\\ebb0";margin-left:-1em;color:#231d1d}.he-shades_opening .path3:before{content:"\\ebb1";margin-left:-1em;color:#000}.he-shades_opening .path4:before{content:"\\ebb2";margin-left:-1em;color:#fff}.he-shades_opening .path5:before{content:"\\ebb3";margin-left:-1em;color:#fff}.he-shades_opening .path6:before{content:"\\ebb4";margin-left:-1em;color:#fff}.he-shades_opening .path7:before{content:"\\ebb5";margin-left:-1em;color:#fff}.he-shades_opening .path8:before{content:"\\ebb6";margin-left:-1em;color:#fff}.he-shades_opening .path9:before{content:"\\ebb7";margin-left:-1em;color:#fff}.he-shades_opening .path10:before{content:"\\ebb8";margin-left:-1em;color:#000}.he-shades_opening .path11:before{content:"\\ebb9";margin-left:-1em;color:#fff}.he-shades_opening .path12:before{content:"\\ebba";margin-left:-1em;color:#000}.he-shades_partially_open:before{content:"\\ebbb"}.he-shades_unknown .path1:before{content:"\\ebc7";color:#231d1d}.he-shades_unknown .path2:before{content:"\\ebc8";margin-left:-1em;color:#231d1d}.he-shades_unknown .path3:before{content:"\\ebc9";margin-left:-1em;color:#000}.he-shades_unknown .path4:before{content:"\\ebca";margin-left:-1em;color:#fff}.he-shades_unknown .path5:before{content:"\\ebcb";margin-left:-1em;color:#fff}.he-shades_unknown .path6:before{content:"\\ebcc";margin-left:-1em;color:#fff}.he-shades_unknown .path7:before{content:"\\ebcd";margin-left:-1em;color:#fff}.he-shades_unknown .path8:before{content:"\\ebce";margin-left:-1em;color:#fff}.he-shades_unknown .path9:before{content:"\\ebcf";margin-left:-1em;color:#fff}.he-shades_unknown .path10:before{content:"\\ebd0";margin-left:-1em;color:#000}.he-shades_unknown .path11:before{content:"\\ebd1";margin-left:-1em;color:#fff}.he-shades_unknown .path12:before{content:"\\ebd2";margin-left:-1em;color:#000}.he-share1:before{content:"\\ea7d"}.he-share2:before{content:"\\ea82"}.he-shield1:before{content:"\\e9b4"}.he-shift:before{content:"\\ea4f"}.he-shower1:before{content:"\\ed52"}.he-shrink:before{content:"\\e98a"}.he-shrink2:before{content:"\\e98c"}.he-shuffle:before{content:"\\ea30"}.he-sink:before{content:"\\ed54"}.he-sink_2:before{content:"\\ed53"}.he-siren:before{content:"\\ed17"}.he-siren_and_alarm:before{content:"\\ed0d"}.he-skype1:before{content:"\\eac5"}.he-smoke_detector:before{content:"\\ed19"}.he-smoke_detector_2:before{content:"\\ed18"}.he-snowflake:before{content:"\\ed1a"}.he-sofa:before{content:"\\ed69"}.he-sound_on:before{content:"\\ed1c"}.he-sound_on_loud:before{content:"\\ed1b"}.he-soundcloud1:before{content:"\\eac3"}.he-soundcloud2:before{content:"\\eac4"}.he-speaker:before{content:"\\ed1e"}.he-speaker_1:before{content:"\\ed55"}.he-speaker_2:before{content:"\\ed56"}.he-speaker_3:before{content:"\\eb69"}.he-speaker_off:before{content:"\\ed1d"}.he-sphere:before{content:"\\e9c9"}.he-spinner11:before{content:"\\e984"}.he-spoon-knife:before{content:"\\e9a3"}.he-spotify1:before{content:"\\ea94"}.he-spotify2:before{content:"\\eb6a"}.he-square-measument:before{content:"\\ec50"}.he-stack:before{content:"\\e92e"}.he-stackoverflow:before{content:"\\ead0"}.he-stairs:before{content:"\\ed6b"}.he-star-empty:before{content:"\\e9d7"}.he-star-full:before{content:"\\e9d9"}.he-star-half1:before{content:"\\e9d8"}.he-stats-bars:before{content:"\\e99c"}.he-stats-bars2:before{content:"\\e99d"}.he-stats-dots:before{content:"\\e99b"}.he-steam1:before{content:"\\eaac"}.he-steam2:before{content:"\\eaad"}.he-stop2:before{content:"\\ea1e"}.he-stop3:before{content:"\\ed21"}.he-stop_2:before{content:"\\ed20"}.he-stop_2_filled:before{content:"\\ed1f"}.he-stopwatch:before{content:"\\e952"}.he-stove:before{content:"\\ed57"}.he-strikethrough2:before{content:"\\ec9b"}.he-sun:before{content:"\\e9d4"}.he-sun1:before{content:"\\ec52"}.he-sunrise:before{content:"\\ecc4"}.he-sunrise_2:before{content:"\\ec9c"}.he-sunrise_3:before{content:"\\ec9d"}.he-suspension:before{content:"\\ed67"}.he-svg:before{content:"\\eae9"}.he-switch:before{content:"\\e9b6"}.he-switch_2:before{content:"\\ed25"}.he-switch_2_flipped:before{content:"\\ed22"}.he-switch_2_off:before{content:"\\ec9e"}.he-switch_2_off_filled:before{content:"\\ed23"}.he-switch_2_on:before{content:"\\ec9f"}.he-switch_2_on_filled:before{content:"\\ed24"}.he-switch_8:before{content:"\\ed27"}.he-switch_8_closed:before{content:"\\ed26"}.he-switch_off:before{content:"\\eb98"}.he-switch_on:before{content:"\\ed28"}.he-tab:before{content:"\\ea45"}.he-table1:before{content:"\\ea70"}.he-table2:before{content:"\\ea71"}.he-table3:before{content:"\\ed58"}.he-tablet1:before{content:"\\e95a"}.he-tap:before{content:"\\ed29"}.he-target:before{content:"\\e9b3"}.he-telegram1:before{content:"\\ea95"}.he-television_1:before{content:"\\ed59"}.he-television_2:before{content:"\\ed5a"}.he-terminal1:before{content:"\\ea81"}.he-thermometer1:before{content:"\\ecb5"}.he-thermometer_2:before{content:"\\ed5b"}.he-thermometer_3:before{content:"\\ed5c"}.he-thermometer_4:before{content:"\\ed2a"}.he-thermometer_5:before{content:"\\ed2b"}.he-thermostat_6:before{content:"\\eb6b"}.he-thumb-up:before{content:"\\ecae"}.he-ticket1:before{content:"\\e939"}.he-toilet:before{content:"\\ed5d"}.he-tree1:before{content:"\\e9bc"}.he-trello1:before{content:"\\eab3"}.he-trophy1:before{content:"\\e99e"}.he-tumblr1:before{content:"\\eab9"}.he-tumblr2:before{content:"\\eaba"}.he-tux:before{content:"\\eabd"}.he-tv1:before{content:"\\e95b"}.he-twitch1:before{content:"\\ea9f"}.he-twitter1:before{content:"\\ea96"}.he-twitter2:before{content:"\\eb76"}.he-undo1:before{content:"\\e965"}.he-undo2:before{content:"\\e967"}.he-ungroup:before{content:"\\ea59"}.he-unlink1:before{content:"\\ecb3"}.he-unlocked:before{content:"\\e990"}.he-upload1:before{content:"\\e961"}.he-upload2:before{content:"\\e9c6"}.he-upload3:before{content:"\\e9c8"}.he-user-check:before{content:"\\e975"}.he-user-minus:before{content:"\\e974"}.he-user-plus1:before{content:"\\e973"}.he-user-tie:before{content:"\\e976"}.he-user1:before{content:"\\e971"}.he-users1:before{content:"\\e972"}.he-valve:before{content:"\\eb7a"}.he-valve_2:before{content:"\\eb77"}.he-valve_3:before{content:"\\eb78"}.he-valve_4:before{content:"\\eb79"}.he-ventilator:before{content:"\\eb7b"}.he-video-camera1:before{content:"\\e914"}.he-video-player:before{content:"\\ecc1"}.he-vimeo1:before{content:"\\eaa0"}.he-vimeo2:before{content:"\\eaa1"}.he-volume-decrease:before{content:"\\ea2c"}.he-volume-high:before{content:"\\ea26"}.he-volume-increase:before{content:"\\ea2b"}.he-volume-low:before{content:"\\ea28"}.he-volume-medium:before{content:"\\ea27"}.he-volume-mute:before{content:"\\ea29"}.he-volume-mute2:before{content:"\\ea2a"}.he-wardrobe:before{content:"\\ed61"}.he-wardrobe_2:before{content:"\\ed5e"}.he-warning1:before{content:"\\ea07"}.he-washing_machine:before{content:"\\eb80"}.he-washing_machine_2:before{content:"\\eb7d"}.he-washing_machine_3:before{content:"\\eb7e"}.he-washing_machine_4:before{content:"\\eb7f"}.he-water:before{content:"\\eb82"}.he-water_2:before{content:"\\eb81"}.he-water_dry:before{content:"\\eb99"}.he-water_wet:before{content:"\\eb9e";color:#6b6b6b}.he-web-design:before{content:"\\ecc0"}.he-whatsapp1:before{content:"\\ea93"}.he-wifi1:before{content:"\\ed2c"}.he-wikipedia:before{content:"\\eac8"}.he-window:before{content:"\\ecb4"}.he-window_1:before{content:"\\ecad"}.he-window_2:before{content:"\\ecac"}.he-window_3:before{content:"\\ed62"}.he-windows1:before{content:"\\eac1"}.he-windows8:before{content:"\\eac2"}.he-woman:before{content:"\\e9dd"}.he-wordpress1:before{content:"\\eab4"}.he-wrench1:before{content:"\\e991"}.he-xbox:before{content:"\\eb88"}.he-youtube1:before{content:"\\ea9d"}.he-youtube3:before{content:"\\eb89";color:#777}.he-zigbee:before{content:"\\ea83"}.he-zoom-in:before{content:"\\e987"}.he-zoom-out:before{content:"\\e988"}.he-zwave:before{content:"\\eb8b"}', ""]),
        t.exports = e
    },
    d2d0: function(t, e, o) {
        var a = o("cf02");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = o("499e").default;
        n("6cb9f11e", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    e46b: function(t, e, o) {
        "use strict";
        var a = o("4898")
          , n = o.n(a);
        n.a
    },
    e56f: function(t, e, o) {
        "use strict";
        var a = o("fa71")
          , n = o.n(a);
        n.a
    },
    fa71: function(t, e, o) {
        var a = o("c2a4");
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        var n = o("499e").default;
        n("47437b66", a, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    fd21: function(t, e, o) {
        var a = {
            "./en-SG": "cdab",
            "./en-SG.js": "cdab",
            "./en-au": "0e6b",
            "./en-au.js": "0e6b",
            "./en-ca": "3886",
            "./en-ca.js": "3886",
            "./en-gb": "39a6",
            "./en-gb.js": "39a6",
            "./en-ie": "e1d3",
            "./en-ie.js": "e1d3",
            "./en-il": "7333",
            "./en-il.js": "7333",
            "./en-nz": "6f50",
            "./en-nz.js": "6f50"
        };
        function n(t) {
            var e = i(t);
            return o(e)
        }
        function i(t) {
            if (!o.o(a, t)) {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND",
                e
            }
            return a[t]
        }
        n.keys = function() {
            return Object.keys(a)
        }
        ,
        n.resolve = i,
        t.exports = n,
        n.id = "fd21"
    }
})
}

// LoadDeviceScreen();
// wait 10 seocnds and call load page again

setTimeout(() => {
    LoadDeviceScreen();
},1000 );