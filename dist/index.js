var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/rules.ts
var rules_exports = {};
__export(rules_exports, {
  MAX_RECENT_EVENTS: () => MAX_RECENT_EVENTS,
  \u4EA4\u60C5\u7B49\u7EA7: () => \u4EA4\u60C5\u7B49\u7EA7,
  \u4F9D\u8D56\u7B49\u7EA7: () => \u4F9D\u8D56\u7B49\u7EA7,
  \u519B\u961F\u88C5\u5907\u7CFB\u6570: () => \u519B\u961F\u88C5\u5907\u7CFB\u6570,
  \u519B\u9977\u57FA\u6570: () => \u519B\u9977\u57FA\u6570,
  \u548C\u8C10\u7B49\u7EA7: () => \u548C\u8C10\u7B49\u7EA7,
  \u57CE\u6C60\u57FA\u7840: () => \u57CE\u6C60\u57FA\u7840,
  \u58EB\u6C14\u7B49\u7EA7: () => \u58EB\u6C14\u7B49\u7EA7,
  \u58EB\u6C14\u7CFB\u6570: () => \u58EB\u6C14\u7CFB\u6570,
  \u58F0\u671B\u79F0\u53F7: () => \u58F0\u671B\u79F0\u53F7,
  \u5916\u4EA4\u7B49\u7EA7: () => \u5916\u4EA4\u7B49\u7EA7,
  \u597D\u611F\u7B49\u7EA7: () => \u597D\u611F\u7B49\u7EA7,
  \u5FE0\u8BDA\u7B49\u7EA7: () => \u5FE0\u8BDA\u7B49\u7EA7,
  \u654F\u611F\u7B49\u7EA7: () => \u654F\u611F\u7B49\u7EA7,
  \u6570\u503C: () => \u6570\u503C,
  \u679A\u4E3E: () => \u679A\u4E3E,
  \u6C47\u603B\u88C5\u5907\u52A0\u503C: () => \u6C47\u603B\u88C5\u5907\u52A0\u503C,
  \u75B2\u60EB\u7B49\u7EA7: () => \u75B2\u60EB\u7B49\u7EA7,
  \u75B2\u60EB\u7CFB\u6570: () => \u75B2\u60EB\u7CFB\u6570,
  \u7B49\u7EA7\u7CFB\u6570: () => \u7B49\u7EA7\u7CFB\u6570,
  \u7EDF\u7387\u7CFB\u6570: () => \u7EDF\u7387\u7CFB\u6570,
  \u8BA1\u7B97\u4F24\u52BF: () => \u8BA1\u7B97\u4F24\u52BF,
  \u8BA1\u7B97\u52A0\u503C: () => \u8BA1\u7B97\u52A0\u503C,
  \u8D1E\u6D01\u7B49\u7EA7: () => \u8D1E\u6D01\u7B49\u7EA7,
  \u9635\u578B\u6570\u636E: () => \u9635\u578B\u6570\u636E,
  \u9650\u5236\u6570\u503C: () => \u9650\u5236\u6570\u503C
});
var MAX_RECENT_EVENTS = 5;
var \u679A\u4E3E = {
  \u54C1\u8D28: ["N", "R", "SR", "SSR", "UR"],
  \u88C5\u5907\u54C1\u8D28: ["\u51E1\u54C1", "\u826F\u54C1", "\u4E0A\u54C1", "\u6781\u54C1", "\u4F20\u8BF4", "\u795E\u8BDD"],
  \u6B66\u6280\u7B49\u7EA7: ["\u5165\u95E8", "\u7CBE\u901A", "\u5927\u6210", "\u7EDD\u5B66", "\u795E\u6280"],
  \u6B66\u6280\u7C7B\u578B: ["\u653B\u51FB", "\u9632\u5FA1", "\u8F85\u52A9", "\u53CD\u51FB"],
  \u5267\u672C: ["S1\u9EC4\u5DFE\u8D77\u4E49", "S2\u8BA8\u4F10\u8463\u5353"],
  \u6B66\u5C06\u6027\u683C: ["\u4E49\u58EB", "\u5229\u5DF1", "\u91CE\u5FC3\u5BB6", "\u611A\u5FE0", "\u50B2\u6C14", "\u611F\u6069"],
  \u6B66\u5C06\u72B6\u6001: ["\u5F85\u547D", "\u9A7B\u5B88", "\u968F\u519B", "\u6267\u884C\u6307\u4EE4", "\u53D7\u4F24", "\u88AB\u4FD8", "\u9635\u4EA1"],
  \u7F8E\u4EBA\u4F4D\u4EFD: ["\u672A\u7EB3\u5165", "\u901A\u623F", "\u4F8D\u59BE", "\u59EC\u59BE", "\u4FA7\u5983", "\u6B63\u59BB", "\u7981\u8114"],
  \u7F8E\u4EBA\u6027\u683C: ["\u6E29\u67D4", "\u8D1E\u70C8", "\u9AD8\u51B7", "\u5A07\u86EE", "\u591A\u60C5", "\u75C5\u5A07", "\u5584\u5992"],
  \u7F8E\u4EBA\u72B6\u6001: ["\u6B63\u5E38", "\u6000\u5B55", "\u4EA7\u540E", "\u751F\u75C5", "\u88AB\u56DA", "\u5931\u8E2A"],
  \u4EFB\u52A1\u7C7B\u578B: ["\u4E3B\u7EBF", "\u652F\u7EBF", "\u9690\u85CF", "\u53F2\u8BD7", "\u6210\u5C31", "\u59D4\u6258"],
  \u5546\u54C1\u5206\u7C7B: ["\u88C5\u5907", "\u6280\u80FD\u4E66", "\u6D88\u8017\u54C1", "\u8D44\u6E90", "\u9650\u65F6\u7A00\u6709"],
  \u4EFB\u52A1\u72B6\u6001: ["\u53EF\u63A5\u53D6", "\u8FDB\u884C\u4E2D", "\u53EF\u63D0\u4EA4", "\u5DF2\u5B8C\u6210", "\u5DF2\u5931\u8D25", "\u5DF2\u8FC7\u671F"],
  \u4EFB\u52A1\u76EE\u6807\u7C7B\u578B: ["\u4E3B\u8981", "\u6B21\u8981", "\u9690\u85CF"],
  \u4EFB\u52A1\u76EE\u6807\u72B6\u6001: ["\u672A\u53D1\u73B0", "\u672A\u5B8C\u6210", "\u5DF2\u5B8C\u6210"],
  \u52BF\u529B\u89C4\u6A21: ["\u65E0", "\u8349\u83BD", "\u53BF\u7EA7", "\u90E1\u7EA7", "\u5DDE\u7EA7", "\u9738\u4E3B", "\u5E1D\u56FD"],
  \u57CE\u6C60\u7B49\u7EA7: ["\u6751\u843D", "\u53BF\u57CE", "\u90E1\u57CE", "\u5DDE\u57CE", "\u96C4\u57CE", "\u5E1D\u90FD"],
  \u519B\u961F\u7B49\u7EA7: ["\u65B0\u5175", "\u666E\u901A", "\u8001\u5175", "\u7CBE\u9510", "\u7279\u6B8A\u5175\u79CD"],
  \u519B\u961F\u88C5\u5907\u7B49\u7EA7: ["\u7B80\u964B", "\u666E\u901A", "\u7CBE\u826F", "\u4E0A\u7B49", "\u7CBE\u9510"],
  \u9635\u578B: ["\u65E0", "\u950B\u77E2\u9635", "\u9E64\u7FFC\u9635", "\u9C7C\u9CDE\u9635", "\u65B9\u5706\u9635", "\u957F\u86C7\u9635", "\u96C1\u884C\u9635", "\u5043\u6708\u9635"]
};
var \u57CE\u6C60\u57FA\u7840 = {
  \u6751\u843D: { \u7A0E\u6536: 5, \u4EA7\u7CAE: 30, \u57CE\u9632\u4E0A\u9650: 20, \u9A7B\u519B\u4E0A\u9650: 500, \u9632\u5FA1\u7CFB\u6570: 0.3, \u6307\u4EE4\u69FD: 1 },
  \u53BF\u57CE: { \u7A0E\u6536: 20, \u4EA7\u7CAE: 100, \u57CE\u9632\u4E0A\u9650: 50, \u9A7B\u519B\u4E0A\u9650: 3e3, \u9632\u5FA1\u7CFB\u6570: 0.6, \u6307\u4EE4\u69FD: 2 },
  \u90E1\u57CE: { \u7A0E\u6536: 60, \u4EA7\u7CAE: 250, \u57CE\u9632\u4E0A\u9650: 70, \u9A7B\u519B\u4E0A\u9650: 8e3, \u9632\u5FA1\u7CFB\u6570: 0.8, \u6307\u4EE4\u69FD: 3 },
  \u5DDE\u57CE: { \u7A0E\u6536: 150, \u4EA7\u7CAE: 500, \u57CE\u9632\u4E0A\u9650: 85, \u9A7B\u519B\u4E0A\u9650: 2e4, \u9632\u5FA1\u7CFB\u6570: 1, \u6307\u4EE4\u69FD: 4 },
  \u96C4\u57CE: { \u7A0E\u6536: 300, \u4EA7\u7CAE: 800, \u57CE\u9632\u4E0A\u9650: 95, \u9A7B\u519B\u4E0A\u9650: 4e4, \u9632\u5FA1\u7CFB\u6570: 1.3, \u6307\u4EE4\u69FD: 5 },
  \u5E1D\u90FD: { \u7A0E\u6536: 500, \u4EA7\u7CAE: 1200, \u57CE\u9632\u4E0A\u9650: 100, \u9A7B\u519B\u4E0A\u9650: 8e4, \u9632\u5FA1\u7CFB\u6570: 1.6, \u6307\u4EE4\u69FD: 6 }
};
var \u7B49\u7EA7\u7CFB\u6570 = { \u65B0\u5175: 0.6, \u666E\u901A: 0.8, \u8001\u5175: 1, \u7CBE\u9510: 1.3, \u7279\u6B8A\u5175\u79CD: 1.8 };
var \u519B\u961F\u88C5\u5907\u7CFB\u6570 = { \u7B80\u964B: 0.7, \u666E\u901A: 0.85, \u7CBE\u826F: 1, \u4E0A\u7B49: 1.15, \u7CBE\u9510: 1.3 };
var \u519B\u9977\u57FA\u6570 = { \u65B0\u5175: 25, \u666E\u901A: 40, \u8001\u5175: 65, \u7CBE\u9510: 100, \u7279\u6B8A\u5175\u79CD: 250 };
var \u9635\u578B\u6570\u636E = {
  \u65E0: { \u653B\u51FB: 1, \u9632\u5FA1: 1 },
  \u950B\u77E2\u9635: { \u653B\u51FB: 1.15, \u9632\u5FA1: 0.9 },
  \u9E64\u7FFC\u9635: { \u653B\u51FB: 1.1, \u9632\u5FA1: 1 },
  \u9C7C\u9CDE\u9635: { \u653B\u51FB: 0.95, \u9632\u5FA1: 1.15 },
  \u65B9\u5706\u9635: { \u653B\u51FB: 1, \u9632\u5FA1: 1.1 },
  \u957F\u86C7\u9635: { \u653B\u51FB: 1.05, \u9632\u5FA1: 0.95 },
  \u96C1\u884C\u9635: { \u653B\u51FB: 1.1, \u9632\u5FA1: 0.95 },
  \u5043\u6708\u9635: { \u653B\u51FB: 1.05, \u9632\u5FA1: 1.05 }
};
function \u6570\u503C(value, fallback = 0) {
  const n = Number(value);
  return Number.isFinite(n) ? n : fallback;
}
function \u9650\u5236\u6570\u503C(value, min, max) {
  return _.clamp(\u6570\u503C(value), min, max);
}
function \u8BA1\u7B97\u52A0\u503C(\u5C5E\u6027\u503C) {
  if (\u5C5E\u6027\u503C <= 20) return Math.floor(\u5C5E\u6027\u503C * 0.3);
  if (\u5C5E\u6027\u503C <= 40) return Math.floor(\u5C5E\u6027\u503C * 0.4);
  if (\u5C5E\u6027\u503C <= 60) return Math.floor(\u5C5E\u6027\u503C * 0.5);
  if (\u5C5E\u6027\u503C <= 80) return Math.floor(\u5C5E\u6027\u503C * 0.6);
  if (\u5C5E\u6027\u503C <= 90) return Math.floor(\u5C5E\u6027\u503C * 0.7);
  if (\u5C5E\u6027\u503C <= 95) return Math.floor(\u5C5E\u6027\u503C * 0.8);
  if (\u5C5E\u6027\u503C <= 99) return Math.floor(\u5C5E\u6027\u503C * 0.9);
  return \u5C5E\u6027\u503C;
}
function \u8BA1\u7B97\u4F24\u52BF(\u5F53\u524D, \u4E0A\u9650) {
  if (\u4E0A\u9650 <= 0) return { _\u4F24\u52BF: "\u5B8C\u597D", _\u6218\u6597\u51CF\u503C: 0 };
  if (\u5F53\u524D <= 0) return { _\u4F24\u52BF: "\u6FD2\u6B7B", _\u6218\u6597\u51CF\u503C: -999 };
  const pct = \u5F53\u524D / \u4E0A\u9650 * 100;
  if (pct <= 25) return { _\u4F24\u52BF: "\u91CD\u4F24", _\u6218\u6597\u51CF\u503C: -15 };
  if (pct <= 50) return { _\u4F24\u52BF: "\u4E2D\u4F24", _\u6218\u6597\u51CF\u503C: -10 };
  if (pct <= 75) return { _\u4F24\u52BF: "\u8F7B\u4F24", _\u6218\u6597\u51CF\u503C: -5 };
  return { _\u4F24\u52BF: "\u5B8C\u597D", _\u6218\u6597\u51CF\u503C: 0 };
}
function \u58F0\u671B\u79F0\u53F7(v) {
  if (v <= 12) return "\u65E0\u540D\u5C0F\u5352";
  if (v <= 25) return "\u7565\u6709\u540D\u6C14";
  if (v <= 37) return "\u5C0F\u6709\u540D\u6C14";
  if (v <= 50) return "\u540D\u58F0\u5728\u5916";
  if (v <= 62) return "\u5A01\u540D\u8FDC\u64AD";
  if (v <= 75) return "\u5929\u4E0B\u95FB\u540D";
  if (v <= 87) return "\u540D\u9707\u534E\u590F";
  return "\u5343\u53E4\u7559\u540D";
}
function \u5FE0\u8BDA\u7B49\u7EA7(v) {
  if (v <= 19) return "\u53DB\u79BB";
  if (v <= 39) return "\u52A8\u6447";
  if (v <= 59) return "\u666E\u901A";
  if (v <= 79) return "\u5FE0\u8BDA";
  return "\u6B7B\u5FE0";
}
function \u597D\u611F\u7B49\u7EA7(v) {
  if (v <= 19) return "\u538C\u6076";
  if (v <= 39) return "\u666E\u901A";
  if (v <= 59) return "\u597D\u611F";
  if (v <= 79) return "\u631A\u7231";
  return "\u6C89\u6EBA";
}
function \u4EA4\u60C5\u7B49\u7EA7(v) {
  if (v <= 19) return "\u538C\u6076";
  if (v <= 39) return "\u666E\u901A";
  if (v <= 59) return "\u53CB\u5584";
  if (v <= 79) return "\u4FE1\u8D56";
  return "\u631A\u53CB";
}
function \u5916\u4EA4\u7B49\u7EA7(v) {
  if (v <= 14) return "\u6B7B\u654C";
  if (v <= 29) return "\u654C\u5BF9";
  if (v <= 44) return "\u654C\u89C6";
  if (v <= 59) return "\u4E2D\u7ACB";
  if (v <= 74) return "\u53CB\u5584";
  if (v <= 89) return "\u540C\u76DF";
  return "\u9644\u5EB8";
}
function \u58EB\u6C14\u7B49\u7EA7(v) {
  if (v <= 19) return "\u5D29\u6E83";
  if (v <= 39) return "\u4F4E\u843D";
  if (v <= 59) return "\u666E\u901A";
  if (v <= 79) return "\u9AD8\u6602";
  return "\u72C2\u70ED";
}
function \u75B2\u60EB\u7B49\u7EA7(v) {
  if (v <= 19) return "\u7CBE\u529B\u5145\u6C9B";
  if (v <= 39) return "\u8F7B\u5EA6\u75B2\u60EB";
  if (v <= 59) return "\u4E2D\u5EA6\u75B2\u60EB";
  if (v <= 79) return "\u91CD\u5EA6\u75B2\u60EB";
  return "\u7CBE\u75B2\u529B\u7AED";
}
function \u4F9D\u8D56\u7B49\u7EA7(v) {
  if (v <= 19) return "\u65E0\u4F9D\u8D56";
  if (v <= 39) return "\u8F7B\u5FAE\u4F9D\u8D56";
  if (v <= 59) return "\u4E2D\u7B49\u4F9D\u8D56";
  if (v <= 79) return "\u4E25\u91CD\u4F9D\u8D56";
  return "\u5B8C\u5168\u4F9D\u8D56";
}
function \u654F\u611F\u7B49\u7EA7(v) {
  if (v <= 19) return "\u8FDF\u949D";
  if (v <= 39) return "\u666E\u901A";
  if (v <= 59) return "\u654F\u611F";
  if (v <= 79) return "\u9AD8\u5EA6\u654F\u611F";
  return "\u8D85\u654F\u611F";
}
function \u8D1E\u6D01\u7B49\u7EA7(v) {
  if (v <= 19) return "\u653E\u8361";
  if (v <= 39) return "\u5F00\u653E";
  if (v <= 59) return "\u666E\u901A";
  if (v <= 79) return "\u4FDD\u5B88";
  return "\u8D1E\u70C8";
}
function \u548C\u8C10\u7B49\u7EA7(v) {
  if (v <= 39) return "\u6DF7\u4E71";
  if (v <= 59) return "\u7D27\u5F20";
  if (v <= 79) return "\u5E73\u7A33";
  return "\u548C\u7766";
}
function \u58EB\u6C14\u7CFB\u6570(v) {
  if (v <= 19) return 0.3;
  if (v <= 39) return 0.6;
  if (v <= 59) return 0.8;
  if (v <= 79) return 1;
  return 1.2;
}
function \u75B2\u60EB\u7CFB\u6570(v) {
  if (v <= 19) return 1;
  if (v <= 39) return 0.9;
  if (v <= 59) return 0.75;
  if (v <= 79) return 0.6;
  return 0.4;
}
function \u7EDF\u7387\u7CFB\u6570(v) {
  if (v <= 30) return 1 + v / 100;
  return 1.3 + (v - 30) / 60;
}
function \u6C47\u603B\u88C5\u5907\u52A0\u503C(\u88C5\u5907) {
  const slots = Object.values(\u88C5\u5907 || {});
  return slots.reduce(
    (acc, item) => {
      if (!item || item === "\u65E0") {
        return acc;
      }
      acc.\u5148\u653B += \u6570\u503C(item.\u5148\u653B\u52A0\u503C);
      acc.\u653B\u51FB += \u6570\u503C(item.\u653B\u51FB\u52A0\u503C);
      acc.\u9632\u5FA1DC += \u6570\u503C(item.\u9632\u5FA1DC\u52A0\u503C);
      acc.\u51CF\u514D += \u6570\u503C(item.\u4F24\u5BB3\u51CF\u514D);
      return acc;
    },
    { \u5148\u653B: 0, \u653B\u51FB: 0, \u9632\u5FA1DC: 0, \u51CF\u514D: 0 }
  );
}

// src/state.ts
function create\u516D\u7EF4(data = {}) {
  return {
    \u6B66\u529B: \u9650\u5236\u6570\u503C(data.\u6B66\u529B, 0, 120),
    \u667A\u529B: \u9650\u5236\u6570\u503C(data.\u667A\u529B, 0, 120),
    \u7EDF\u7387: \u9650\u5236\u6570\u503C(data.\u7EDF\u7387, 0, 120),
    \u653F\u6CBB: \u9650\u5236\u6570\u503C(data.\u653F\u6CBB, 0, 120),
    \u9B45\u529B: \u9650\u5236\u6570\u503C(data.\u9B45\u529B, 0, 120),
    \u4F53\u8D28: \u9650\u5236\u6570\u503C(data.\u4F53\u8D28, 0, 120)
  };
}
function create\u88C5\u5907\u6761\u76EE(data = {}) {
  return {
    \u540D\u79F0: String(data.\u540D\u79F0 || ""),
    \u54C1\u8D28: \u679A\u4E3E.\u88C5\u5907\u54C1\u8D28.includes(data.\u54C1\u8D28) ? data.\u54C1\u8D28 : "\u51E1\u54C1",
    \u7C7B\u578B: String(data.\u7C7B\u578B || ""),
    \u63CF\u8FF0: String(data.\u63CF\u8FF0 || ""),
    \u4F24\u5BB3\u9AB0: String(data.\u4F24\u5BB3\u9AB0 || ""),
    \u5148\u653B\u52A0\u503C: \u6570\u503C(data.\u5148\u653B\u52A0\u503C),
    \u653B\u51FB\u52A0\u503C: \u6570\u503C(data.\u653B\u51FB\u52A0\u503C),
    \u9632\u5FA1DC\u52A0\u503C: \u6570\u503C(data.\u9632\u5FA1DC\u52A0\u503C),
    \u4F24\u5BB3\u51CF\u514D: \u6570\u503C(data.\u4F24\u5BB3\u51CF\u514D),
    \u5176\u4ED6\u6548\u679C: String(data.\u5176\u4ED6\u6548\u679C || "")
  };
}
function create\u88C5\u5907\u680F(data = {}) {
  const toSlot = (value) => value && value !== "\u65E0" ? create\u88C5\u5907\u6761\u76EE(value) : "\u65E0";
  return {
    \u4E3B\u6B66\u5668: toSlot(data.\u4E3B\u6B66\u5668),
    \u526F\u6B66\u5668: toSlot(data.\u526F\u6B66\u5668),
    \u62A4\u7532: toSlot(data.\u62A4\u7532),
    \u5750\u9A91: toSlot(data.\u5750\u9A91),
    \u9970\u54C11: toSlot(data.\u9970\u54C11),
    \u9970\u54C12: toSlot(data.\u9970\u54C12),
    \u9970\u54C13: toSlot(data.\u9970\u54C13)
  };
}
function create\u72B6\u6001\u8BB0\u5F55(data = {}) {
  return _.mapValues(data, (item) => ({
    \u6548\u679C: String(item?.\u6548\u679C || ""),
    \u5269\u4F59: String(item?.\u5269\u4F59 || "\u6C38\u4E45")
  }));
}
function create\u6B66\u6280\u6761\u76EE(data = {}, { \u5B8C\u6574 = true } = {}) {
  return {
    \u540D\u79F0: String(data.\u540D\u79F0 || ""),
    \u7B49\u7EA7: \u679A\u4E3E.\u6B66\u6280\u7B49\u7EA7.includes(data.\u7B49\u7EA7) ? data.\u7B49\u7EA7 : "\u5165\u95E8",
    \u7C7B\u578B: \u679A\u4E3E.\u6B66\u6280\u7C7B\u578B.includes(data.\u7C7B\u578B) ? data.\u7C7B\u578B : "\u653B\u51FB",
    \u6548\u679C: String(data.\u6548\u679C || ""),
    ...\u5B8C\u6574 ? { \u719F\u7EC3\u5EA6: \u9650\u5236\u6570\u503C(data.\u719F\u7EC3\u5EA6, 0, 100), \u4F53\u529B\u6D88\u8017: \u6570\u503C(data.\u4F53\u529B\u6D88\u8017) } : {}
  };
}
function create\u4E13\u957F\u6761\u76EE(data = {}) {
  return {
    \u540D\u79F0: String(data.\u540D\u79F0 || ""),
    \u7B49\u7EA7: String(data.\u7B49\u7EA7 || ""),
    \u6548\u679C: String(data.\u6548\u679C || "")
  };
}
function create\u89D2\u8272\u6218\u6597\u6570\u636E(data = {}, { \u5B8C\u6574 = false } = {}) {
  return {
    \u516D\u7EF4: create\u516D\u7EF4(data.\u516D\u7EF4),
    \u5F53\u524D\u751F\u547D\u503C: \u6570\u503C(data.\u5F53\u524D\u751F\u547D\u503C),
    \u5F53\u524D\u4F53\u529B\u503C: \u6570\u503C(data.\u5F53\u524D\u4F53\u529B\u503C),
    \u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210: \u6570\u503C(data.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210),
    \u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210: \u6570\u503C(data.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210),
    \u88C5\u5907: create\u88C5\u5907\u680F(data.\u88C5\u5907),
    \u6B66\u6280: _.mapValues(data.\u6B66\u6280 || {}, (item) => create\u6B66\u6280\u6761\u76EE(item, { \u5B8C\u6574 })),
    \u4E13\u957F: _.mapValues(data.\u4E13\u957F || {}, (item) => create\u4E13\u957F\u6761\u76EE(item)),
    \u72B6\u6001: create\u72B6\u6001\u8BB0\u5F55(data.\u72B6\u6001)
  };
}
function create\u57CE\u6C60(data = {}) {
  return {
    \u7B49\u7EA7: \u679A\u4E3E.\u57CE\u6C60\u7B49\u7EA7.includes(data.\u7B49\u7EA7) ? data.\u7B49\u7EA7 : "\u6751\u843D",
    \u57CE\u9632: Math.max(0, \u6570\u503C(data.\u57CE\u9632)),
    \u4EBA\u53E3: Math.max(0, \u6570\u503C(data.\u4EBA\u53E3)),
    \u519C\u4E1A: \u9650\u5236\u6570\u503C(data.\u519C\u4E1A, 0, 100),
    \u5546\u4E1A: \u9650\u5236\u6570\u503C(data.\u5546\u4E1A, 0, 100),
    \u6C11\u5FC3: \u9650\u5236\u6570\u503C(data.\u6C11\u5FC3, 0, 100),
    \u6CBB\u5B89: \u9650\u5236\u6570\u503C(data.\u6CBB\u5B89, 0, 100),
    \u7E41\u8363\u5EA6: \u9650\u5236\u6570\u503C(data.\u7E41\u8363\u5EA6, 0, 100),
    \u592A\u5B88: String(data.\u592A\u5B88 || "\u65E0"),
    \u8BBE\u65BD: Array.isArray(data.\u8BBE\u65BD) ? data.\u8BBE\u65BD.map((item) => String(item || "")) : []
  };
}
function create\u519B\u961F(data = {}) {
  return {
    \u5175\u79CD: String(data.\u5175\u79CD || ""),
    \u7B49\u7EA7: \u679A\u4E3E.\u519B\u961F\u7B49\u7EA7.includes(data.\u7B49\u7EA7) ? data.\u7B49\u7EA7 : "\u65B0\u5175",
    \u5175\u529B: Math.max(0, \u6570\u503C(data.\u5175\u529B)),
    \u58EB\u6C14: \u9650\u5236\u6570\u503C(data.\u58EB\u6C14, 0, 100),
    \u75B2\u60EB: \u9650\u5236\u6570\u503C(data.\u75B2\u60EB, 0, 100),
    \u88C5\u5907\u7B49\u7EA7: \u679A\u4E3E.\u519B\u961F\u88C5\u5907\u7B49\u7EA7.includes(data.\u88C5\u5907\u7B49\u7EA7) ? data.\u88C5\u5907\u7B49\u7EA7 : "\u666E\u901A",
    \u7EDF\u5C5E\u5C06\u9886: String(data.\u7EDF\u5C5E\u5C06\u9886 || ""),
    \u9A7B\u624E\u5730: String(data.\u9A7B\u624E\u5730 || ""),
    \u8BAD\u7EC3\u8FDB\u5EA6: Math.max(0, \u6570\u503C(data.\u8BAD\u7EC3\u8FDB\u5EA6)),
    \u9635\u578B: \u679A\u4E3E.\u9635\u578B.includes(data.\u9635\u578B) ? data.\u9635\u578B : "\u65E0"
  };
}
function create\u653F\u7B56(data = {}) {
  return {
    \u5F53\u524D\u7814\u7A76: String(data.\u5F53\u524D\u7814\u7A76 || "\u65E0"),
    \u7814\u7A76\u8FDB\u5EA6: Math.max(0, \u6570\u503C(data.\u7814\u7A76\u8FDB\u5EA6)),
    \u5BCC\u56FD: \u9650\u5236\u6570\u503C(data.\u5BCC\u56FD, 0, 5),
    \u5F3A\u5175: \u9650\u5236\u6570\u503C(data.\u5F3A\u5175, 0, 5),
    \u9738\u9053: \u9650\u5236\u6570\u503C(data.\u9738\u9053, 0, 5),
    \u738B\u9053: \u9650\u5236\u6570\u503C(data.\u738B\u9053, 0, 5)
  };
}
function create\u52BF\u529B(data = {}) {
  return {
    \u540D\u79F0: String(data.\u540D\u79F0 || "\u65E0"),
    \u89C4\u6A21: \u679A\u4E3E.\u52BF\u529B\u89C4\u6A21.includes(data.\u89C4\u6A21) ? data.\u89C4\u6A21 : "\u65E0",
    \u6B63\u7EDF\u6027: \u9650\u5236\u6570\u503C(data.\u6B63\u7EDF\u6027, 0, 100),
    \u60C5\u62A5\u7F51: \u9650\u5236\u6570\u503C(data.\u60C5\u62A5\u7F51, 0, 100),
    \u91D1\u94B1: Math.max(0, \u6570\u503C(data.\u91D1\u94B1)),
    \u7CAE\u8349: Math.max(0, \u6570\u503C(data.\u7CAE\u8349)),
    \u57CE\u6C60: _.mapValues(data.\u57CE\u6C60 || {}, (item) => create\u57CE\u6C60(item)),
    \u519B\u961F: _.mapValues(data.\u519B\u961F || {}, (item) => create\u519B\u961F(item)),
    \u5916\u4EA4: _.mapValues(data.\u5916\u4EA4 || {}, (value) => \u9650\u5236\u6570\u503C(value, 0, 100)),
    \u653F\u7B56: create\u653F\u7B56(data.\u653F\u7B56)
  };
}
function \u770B\u8D77\u6765\u50CF\u5355\u52BF\u529B\u5BF9\u8C61(data) {
  if (!_.isPlainObject(data)) {
    return false;
  }
  const record = data;
  return ["\u540D\u79F0", "\u89C4\u6A21", "\u6B63\u7EDF\u6027", "\u60C5\u62A5\u7F51", "\u91D1\u94B1", "\u7CAE\u8349", "\u57CE\u6C60", "\u519B\u961F", "\u5916\u4EA4", "\u653F\u7B56"].some((key) => key in record);
}
function create\u52BF\u529B\u96C6\u5408(data = {}) {
  if (\u770B\u8D77\u6765\u50CF\u5355\u52BF\u529B\u5BF9\u8C61(data)) {
    const faction = create\u52BF\u529B(data);
    const factionId = String(faction.\u540D\u79F0 || "default_faction").trim() || "default_faction";
    return { [factionId]: faction };
  }
  return _.mapValues(data || {}, (item) => create\u52BF\u529B(item));
}
function create\u6B66\u5C06\u4FE1\u606F(data = {}) {
  return {
    \u91CE\u5FC3\u503C: \u9650\u5236\u6570\u503C(data.\u91CE\u5FC3\u503C, 0, 100),
    \u6027\u683C: \u679A\u4E3E.\u6B66\u5C06\u6027\u683C.includes(data.\u6027\u683C) ? data.\u6027\u683C : "\u4E49\u58EB",
    \u5B98\u804C: String(data.\u5B98\u804C || "\u65E0"),
    \u5F53\u524D\u72B6\u6001: \u679A\u4E3E.\u6B66\u5C06\u72B6\u6001.includes(data.\u5F53\u524D\u72B6\u6001) ? data.\u5F53\u524D\u72B6\u6001 : "\u5F85\u547D",
    \u72B6\u6001\u63CF\u8FF0: String(data.\u72B6\u6001\u63CF\u8FF0 || ""),
    \u9A7B\u624E\u5730: String(data.\u9A7B\u624E\u5730 || "\u65E0"),
    \u7279\u6280: _.mapValues(data.\u7279\u6280 || {}, (value) => String(value || ""))
  };
}
function create\u7F8E\u4EBA\u5C5E\u6027(data = {}) {
  return {
    \u4F9D\u8D56\u5EA6: \u9650\u5236\u6570\u503C(data.\u4F9D\u8D56\u5EA6, 0, 100),
    \u654F\u611F\u5EA6: \u9650\u5236\u6570\u503C(data.\u654F\u611F\u5EA6, 0, 100),
    \u8D1E\u6D01\u5EA6: \u9650\u5236\u6570\u503C(data.\u8D1E\u6D01\u5EA6, 0, 100),
    \u4F4D\u4EFD: \u679A\u4E3E.\u7F8E\u4EBA\u4F4D\u4EFD.includes(data.\u4F4D\u4EFD) ? data.\u4F4D\u4EFD : "\u672A\u7EB3\u5165",
    \u6027\u683C: \u679A\u4E3E.\u7F8E\u4EBA\u6027\u683C.includes(data.\u6027\u683C) ? data.\u6027\u683C : "\u6E29\u67D4",
    \u5F53\u524D\u72B6\u6001: \u679A\u4E3E.\u7F8E\u4EBA\u72B6\u6001.includes(data.\u5F53\u524D\u72B6\u6001) ? data.\u5F53\u524D\u72B6\u6001 : "\u6B63\u5E38"
  };
}
function createNPC(data = {}) {
  return {
    \u540D\u79F0: String(data.\u540D\u79F0 || ""),
    \u54C1\u8D28: \u679A\u4E3E.\u54C1\u8D28.includes(data.\u54C1\u8D28) ? data.\u54C1\u8D28 : "N",
    \u9635\u8425: String(data.\u9635\u8425 || ""),
    \u5B9A\u4F4D: String(data.\u5B9A\u4F4D || ""),
    \u597D\u611F: \u9650\u5236\u6570\u503C(data.\u597D\u611F, 0, 100),
    \u7B80\u8FF0: String(data.\u7B80\u8FF0 || ""),
    \u7F81\u7ECA: _.mapValues(data.\u7F81\u7ECA || {}, (value) => String(value || "")),
    \u89D2\u8272\u6570\u636E: data.\u89D2\u8272\u6570\u636E ? create\u89D2\u8272\u6218\u6597\u6570\u636E(data.\u89D2\u8272\u6570\u636E) : void 0,
    \u6B66\u5C06\u4FE1\u606F: data.\u6B66\u5C06\u4FE1\u606F ? create\u6B66\u5C06\u4FE1\u606F(data.\u6B66\u5C06\u4FE1\u606F) : void 0,
    \u7F8E\u4EBA\u5C5E\u6027: data.\u7F8E\u4EBA\u5C5E\u6027 ? create\u7F8E\u4EBA\u5C5E\u6027(data.\u7F8E\u4EBA\u5C5E\u6027) : void 0
  };
}
function create\u4EFB\u52A1\u76EE\u6807(data = {}) {
  return {
    \u7C7B\u578B: \u679A\u4E3E.\u4EFB\u52A1\u76EE\u6807\u7C7B\u578B.includes(data.\u7C7B\u578B) ? data.\u7C7B\u578B : "\u4E3B\u8981",
    \u72B6\u6001: \u679A\u4E3E.\u4EFB\u52A1\u76EE\u6807\u72B6\u6001.includes(data.\u72B6\u6001) ? data.\u72B6\u6001 : "\u672A\u5B8C\u6210",
    \u63CF\u8FF0: String(data.\u63CF\u8FF0 || ""),
    \u79EF\u5206: \u6570\u503C(data.\u79EF\u5206),
    \u5176\u4ED6\u5956\u52B1: String(data.\u5176\u4ED6\u5956\u52B1 || "")
  };
}
function create\u4EFB\u52A1(data = {}) {
  return {
    \u540D\u79F0: String(data.\u540D\u79F0 || ""),
    \u7C7B\u578B: \u679A\u4E3E.\u4EFB\u52A1\u7C7B\u578B.includes(data.\u7C7B\u578B) ? data.\u7C7B\u578B : "\u652F\u7EBF",
    \u72B6\u6001: \u679A\u4E3E.\u4EFB\u52A1\u72B6\u6001.includes(data.\u72B6\u6001) ? data.\u72B6\u6001 : "\u53EF\u63A5\u53D6",
    \u65F6\u9650: String(data.\u65F6\u9650 || "\u65E0"),
    \u76EE\u6807: _.mapValues(data.\u76EE\u6807 || {}, (item) => create\u4EFB\u52A1\u76EE\u6807(item))
  };
}
function create\u5546\u54C1\u6761\u76EE(data = {}) {
  return {
    \u540D\u79F0: String(data.\u540D\u79F0 || ""),
    \u5206\u7C7B: \u679A\u4E3E.\u5546\u54C1\u5206\u7C7B.includes(data.\u5206\u7C7B) ? data.\u5206\u7C7B : "\u8D44\u6E90",
    \u4EF7\u683C: Math.max(0, \u6570\u503C(data.\u4EF7\u683C)),
    \u63CF\u8FF0: String(data.\u63CF\u8FF0 || "")
  };
}
function create\u4E16\u754C(data = {}) {
  return {
    \u5F53\u524D\u65F6\u95F4: String(data.\u5F53\u524D\u65F6\u95F4 || ""),
    \u5F53\u524D\u5730\u70B9: String(data.\u5F53\u524D\u5730\u70B9 || ""),
    \u5F53\u524D\u5267\u672C: \u679A\u4E3E.\u5267\u672C.includes(data.\u5F53\u524D\u5267\u672C) ? data.\u5F53\u524D\u5267\u672C : "S1\u9EC4\u5DFE\u8D77\u4E49",
    \u5929\u6C14: String(data.\u5929\u6C14 || "\u6674"),
    \u8FD1\u671F\u4E8B\u4EF6: Array.isArray(data.\u8FD1\u671F\u4E8B\u4EF6) ? data.\u8FD1\u671F\u4E8B\u4EF6.map((item) => ({
      \u4E8B\u4EF6\u540D: String(item?.\u4E8B\u4EF6\u540D || ""),
      \u7B80\u8FF0: String(item?.\u7B80\u8FF0 || ""),
      \u65E5\u671F: String(item?.\u65E5\u671F || "")
    })) : []
  };
}
function create\u4E3B\u89D2(data = {}) {
  return {
    ...create\u89D2\u8272\u6218\u6597\u6570\u636E(data, { \u5B8C\u6574: true }),
    \u7269\u54C1\u680F: _.mapValues(data.\u7269\u54C1\u680F || {}, (item) => ({
      \u54C1\u8D28: \u679A\u4E3E.\u88C5\u5907\u54C1\u8D28.includes(item?.\u54C1\u8D28) ? item?.\u54C1\u8D28 : "\u65E0",
      \u63CF\u8FF0: String(item?.\u63CF\u8FF0 || ""),
      \u6570\u91CF: Math.max(0, \u6570\u503C(item?.\u6570\u91CF, 1))
    })),
    \u58F0\u671B: \u9650\u5236\u6570\u503C(data.\u58F0\u671B, 0, 100),
    \u91D1\u94B1: Math.max(0, \u6570\u503C(data.\u91D1\u94B1)),
    \u79EF\u5206: Math.max(0, \u6570\u503C(data.\u79EF\u5206)),
    \u5B98\u804C: String(data.\u5B98\u804C || "\u65E0"),
    \u7235\u4F4D: String(data.\u7235\u4F4D || "\u65E0"),
    \u540E\u5BAB\u548C\u8C10\u5EA6: \u9650\u5236\u6570\u503C(data.\u540E\u5BAB\u548C\u8C10\u5EA6, 0, 100)
  };
}
function create\u521D\u59CB\u72B6\u6001(seed = {}) {
  return {
    meta: {
      schemaVersion: "three-kingdoms-v1",
      scriptVersion: "draft-ts",
      updatedAt: ""
    },
    \u4E16\u754C: create\u4E16\u754C(seed.\u4E16\u754C),
    \u4E3B\u89D2: create\u4E3B\u89D2(seed.\u4E3B\u89D2),
    \u52BF\u529B: create\u52BF\u529B\u96C6\u5408(seed.\u52BF\u529B),
    NPC: _.mapValues(seed.NPC || {}, (item) => createNPC(item)),
    \u4EFB\u52A1: _.mapValues(seed.\u4EFB\u52A1 || {}, (item) => create\u4EFB\u52A1(item)),
    \u5546\u57CE: _.mapValues(seed.\u5546\u57CE || {}, (item) => create\u5546\u54C1\u6761\u76EE(item))
  };
}

// src/commands.ts
var commands_exports = {};
__export(commands_exports, {
  \u521B\u5EFA\u547D\u4EE4\u6267\u884C\u5FEB\u7167: () => \u521B\u5EFA\u547D\u4EE4\u6267\u884C\u5FEB\u7167,
  \u65AD\u8A00\u65E0\u4E0B\u5212\u7EBF\u5B57\u6BB5: () => \u65AD\u8A00\u65E0\u4E0B\u5212\u7EBF\u5B57\u6BB5,
  \u6821\u9A8C\u547D\u4EE4: () => \u6821\u9A8C\u547D\u4EE4,
  \u89E3\u6790\u547D\u4EE4\u8F93\u5165: () => \u89E3\u6790\u547D\u4EE4\u8F93\u5165
});

// src/debug.ts
var debug_exports = {};
__export(debug_exports, {
  debugError: () => debugError,
  debugInfo: () => debugInfo,
  debugLog: () => debugLog,
  debugWarn: () => debugWarn,
  getDebugEnabled: () => getDebugEnabled,
  setDebugEnabled: () => setDebugEnabled,
  summarizeState: () => summarizeState,
  summarizeValue: () => summarizeValue
});
var DEBUG_PREFIX = "[ThreeKingdomsStateKit]";
var debugEnabled = false;
function formatPrefix(scope, level) {
  return level ? `${DEBUG_PREFIX}[${level}][${scope}]` : `${DEBUG_PREFIX}[${scope}]`;
}
function stringifyPayload(payload) {
  if (payload instanceof Error) {
    return payload.stack || `${payload.name}: ${payload.message}`;
  }
  if (typeof payload === "string") {
    return payload;
  }
  if (payload === void 0) {
    return "";
  }
  try {
    return JSON.stringify(payload, null, 2);
  } catch {
    return String(payload);
  }
}
function formatMessage(message, payload) {
  if (payload === void 0) {
    return message;
  }
  return `${message}
${stringifyPayload(payload)}`;
}
function setDebugEnabled(enabled) {
  debugEnabled = Boolean(enabled);
  console.log(`${DEBUG_PREFIX}[debug] ${debugEnabled ? "enabled" : "disabled"}`);
  return debugEnabled;
}
function getDebugEnabled() {
  return debugEnabled;
}
function debugInfo(scope, message, payload) {
  if (!debugEnabled) return;
  console.info(formatPrefix(scope, "info"), formatMessage(message, payload));
}
function debugLog(scope, message, payload) {
  if (!debugEnabled) return;
  console.log(formatPrefix(scope), formatMessage(message, payload));
}
function debugWarn(scope, message, payload) {
  console.warn(formatPrefix(scope, "warn"), formatMessage(message, payload));
}
function debugError(scope, message, error) {
  console.error(formatPrefix(scope, "error"), formatMessage(message, error));
}
function summarizeState(state) {
  return {
    \u4E16\u754C: {
      \u5F53\u524D\u65F6\u95F4: state.\u4E16\u754C?.\u5F53\u524D\u65F6\u95F4 || "",
      \u5F53\u524D\u5730\u70B9: state.\u4E16\u754C?.\u5F53\u524D\u5730\u70B9 || "",
      \u5F53\u524D\u5267\u672C: state.\u4E16\u754C?.\u5F53\u524D\u5267\u672C || "",
      \u8FD1\u671F\u4E8B\u4EF6\u6570: state.\u4E16\u754C?.\u8FD1\u671F\u4E8B\u4EF6?.length || 0
    },
    \u4E3B\u89D2: {
      \u5F53\u524D\u751F\u547D\u503C: state.\u4E3B\u89D2?.\u5F53\u524D\u751F\u547D\u503C ?? 0,
      \u5F53\u524D\u4F53\u529B\u503C: state.\u4E3B\u89D2?.\u5F53\u524D\u4F53\u529B\u503C ?? 0,
      \u91D1\u94B1: state.\u4E3B\u89D2?.\u91D1\u94B1 ?? 0,
      \u79EF\u5206: state.\u4E3B\u89D2?.\u79EF\u5206 ?? 0,
      \u58F0\u671B: state.\u4E3B\u89D2?.\u58F0\u671B ?? 0,
      \u5B98\u804C: state.\u4E3B\u89D2?.\u5B98\u804C || "",
      \u7235\u4F4D: state.\u4E3B\u89D2?.\u7235\u4F4D || ""
    },
    \u52BF\u529B\u6570\u91CF: Object.keys(state.\u52BF\u529B || {}).length,
    NPC\u6570\u91CF: Object.keys(state.NPC || {}).length,
    \u4EFB\u52A1\u6570\u91CF: Object.keys(state.\u4EFB\u52A1 || {}).length,
    \u5546\u57CE\u6570\u91CF: Object.keys(state.\u5546\u57CE || {}).length,
    updatedAt: state.meta?.updatedAt || ""
  };
}
function summarizeValue(value) {
  if (Array.isArray(value)) {
    return { type: "array", length: value.length };
  }
  if (_.isPlainObject(value)) {
    const keys = Object.keys(value);
    return { type: "object", keys, keyCount: keys.length };
  }
  if (typeof value === "string") {
    return { type: "string", length: value.length, preview: value.slice(0, 120) };
  }
  return value;
}

// src/commands.ts
var \u547D\u4EE4\u5B57\u6BB5\u767D\u540D\u5355 = {
  UpdateWorld: ["type", "changes"],
  AppendRecentEvent: ["type", "event"],
  UpdatePlayerBase: ["type", "changes"],
  AdjustPlayerResource: ["type", "mode", "changes"],
  UpdateFaction: ["type", "factionId", "changes", "createIfMissing"],
  UpsertCity: ["type", "factionId", "id", "data", "createIfMissing"],
  AddCityFacility: ["type", "factionId", "id", "facility"],
  RemoveCityFacility: ["type", "factionId", "id", "facility"],
  RemoveCity: ["type", "factionId", "id"],
  UpsertArmy: ["type", "factionId", "id", "data", "createIfMissing"],
  RemoveArmy: ["type", "factionId", "id"],
  UpdateDiplomacy: ["type", "factionId", "changes"],
  UpdatePolicy: ["type", "factionId", "changes"],
  UpsertNpc: ["type", "id", "data", "createIfMissing"],
  UpdateNpcRelation: ["type", "id", "mode", "\u597D\u611F", "\u7F81\u7ECA"],
  RemoveNpc: ["type", "id"],
  UpsertQuest: ["type", "id", "data", "createIfMissing"],
  UpdateQuestState: ["type", "id", "\u72B6\u6001", "\u76EE\u6807"],
  RemoveQuest: ["type", "id"],
  UpsertShopItem: ["type", "id", "data", "createIfMissing"],
  RemoveShopItem: ["type", "id"]
};
var \u4E16\u754C\u5B57\u6BB5 = ["\u5F53\u524D\u65F6\u95F4", "\u5F53\u524D\u5730\u70B9", "\u5F53\u524D\u5267\u672C", "\u5929\u6C14", "\u8FD1\u671F\u4E8B\u4EF6"];
var \u4E3B\u89D2\u8D44\u6E90\u5B57\u6BB5 = ["\u5F53\u524D\u751F\u547D\u503C", "\u5F53\u524D\u4F53\u529B\u503C", "\u58F0\u671B", "\u91D1\u94B1", "\u79EF\u5206", "\u540E\u5BAB\u548C\u8C10\u5EA6"];
var \u516D\u7EF4\u5B57\u6BB5 = ["\u6B66\u529B", "\u667A\u529B", "\u7EDF\u7387", "\u653F\u6CBB", "\u9B45\u529B", "\u4F53\u8D28"];
var \u88C5\u5907\u6761\u76EE\u5B57\u6BB5 = ["\u540D\u79F0", "\u54C1\u8D28", "\u7C7B\u578B", "\u63CF\u8FF0", "\u4F24\u5BB3\u9AB0", "\u5148\u653B\u52A0\u503C", "\u653B\u51FB\u52A0\u503C", "\u9632\u5FA1DC\u52A0\u503C", "\u4F24\u5BB3\u51CF\u514D", "\u5176\u4ED6\u6548\u679C"];
var \u88C5\u5907\u680F\u5B57\u6BB5 = ["\u4E3B\u6B66\u5668", "\u526F\u6B66\u5668", "\u62A4\u7532", "\u5750\u9A91", "\u9970\u54C11", "\u9970\u54C12", "\u9970\u54C13"];
var \u6B66\u6280\u6761\u76EE\u5B57\u6BB5 = ["\u540D\u79F0", "\u7B49\u7EA7", "\u7C7B\u578B", "\u6548\u679C", "\u719F\u7EC3\u5EA6", "\u4F53\u529B\u6D88\u8017"];
var \u4E13\u957F\u6761\u76EE\u5B57\u6BB5 = ["\u540D\u79F0", "\u7B49\u7EA7", "\u6548\u679C"];
var \u4E3B\u89D2\u5B57\u6BB5 = ["\u516D\u7EF4", "\u5F53\u524D\u751F\u547D\u503C", "\u5F53\u524D\u4F53\u529B\u503C", "\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210", "\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210", "\u88C5\u5907", "\u6B66\u6280", "\u4E13\u957F", "\u72B6\u6001", "\u7269\u54C1\u680F", "\u58F0\u671B", "\u91D1\u94B1", "\u79EF\u5206", "\u5B98\u804C", "\u7235\u4F4D", "\u540E\u5BAB\u548C\u8C10\u5EA6"];
var \u7269\u54C1\u680F\u5B57\u6BB5 = ["\u54C1\u8D28", "\u63CF\u8FF0", "\u6570\u91CF"];
var \u52BF\u529B\u5B57\u6BB5 = ["\u540D\u79F0", "\u89C4\u6A21", "\u6B63\u7EDF\u6027", "\u60C5\u62A5\u7F51", "\u91D1\u94B1", "\u7CAE\u8349", "\u57CE\u6C60", "\u519B\u961F", "\u5916\u4EA4", "\u653F\u7B56"];
var \u57CE\u6C60\u5B57\u6BB5 = ["\u7B49\u7EA7", "\u57CE\u9632", "\u4EBA\u53E3", "\u519C\u4E1A", "\u5546\u4E1A", "\u6C11\u5FC3", "\u6CBB\u5B89", "\u7E41\u8363\u5EA6", "\u592A\u5B88", "\u8BBE\u65BD"];
var \u519B\u961F\u5B57\u6BB5 = ["\u5175\u79CD", "\u7B49\u7EA7", "\u5175\u529B", "\u58EB\u6C14", "\u75B2\u60EB", "\u88C5\u5907\u7B49\u7EA7", "\u7EDF\u5C5E\u5C06\u9886", "\u9A7B\u624E\u5730", "\u8BAD\u7EC3\u8FDB\u5EA6", "\u9635\u578B"];
var \u653F\u7B56\u5B57\u6BB5 = ["\u5F53\u524D\u7814\u7A76", "\u7814\u7A76\u8FDB\u5EA6", "\u5BCC\u56FD", "\u5F3A\u5175", "\u9738\u9053", "\u738B\u9053"];
var NPC\u5B57\u6BB5 = ["\u540D\u79F0", "\u54C1\u8D28", "\u9635\u8425", "\u5B9A\u4F4D", "\u597D\u611F", "\u7B80\u8FF0", "\u7F81\u7ECA", "\u89D2\u8272\u6570\u636E", "\u6B66\u5C06\u4FE1\u606F", "\u7F8E\u4EBA\u5C5E\u6027"];
var \u6B66\u5C06\u4FE1\u606F\u5B57\u6BB5 = ["\u91CE\u5FC3\u503C", "\u6027\u683C", "\u5B98\u804C", "\u5F53\u524D\u72B6\u6001", "\u72B6\u6001\u63CF\u8FF0", "\u9A7B\u624E\u5730", "\u7279\u6280"];
var \u7F8E\u4EBA\u5C5E\u6027\u5B57\u6BB5 = ["\u4F9D\u8D56\u5EA6", "\u654F\u611F\u5EA6", "\u8D1E\u6D01\u5EA6", "\u4F4D\u4EFD", "\u6027\u683C", "\u5F53\u524D\u72B6\u6001"];
var \u4EFB\u52A1\u5B57\u6BB5 = ["\u540D\u79F0", "\u7C7B\u578B", "\u72B6\u6001", "\u65F6\u9650", "\u76EE\u6807"];
var \u4EFB\u52A1\u76EE\u6807\u5B57\u6BB5 = ["\u7C7B\u578B", "\u72B6\u6001", "\u63CF\u8FF0", "\u79EF\u5206", "\u5176\u4ED6\u5956\u52B1"];
var \u5546\u54C1\u5B57\u6BB5 = ["\u540D\u79F0", "\u5206\u7C7B", "\u4EF7\u683C", "\u63CF\u8FF0"];
function isPlainObject(value) {
  return _.isPlainObject(value);
}
function \u65AD\u8A00(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}
function \u65AD\u8A00\u5BF9\u8C61(value, path) {
  \u65AD\u8A00(isPlainObject(value), `${path} \u5FC5\u987B\u662F\u5BF9\u8C61`);
}
function \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  \u65AD\u8A00(Object.keys(value).length > 0, `${path} \u81F3\u5C11\u5305\u542B\u4E00\u4E2A\u5B57\u6BB5`);
}
function \u65AD\u8A00\u5B57\u7B26\u4E32(value, path) {
  \u65AD\u8A00(typeof value === "string", `${path} \u5FC5\u987B\u662F\u5B57\u7B26\u4E32`);
}
function \u65AD\u8A00\u6570\u5B57(value, path) {
  \u65AD\u8A00(typeof value === "number" && Number.isFinite(value), `${path} \u5FC5\u987B\u662F\u6709\u9650\u6570\u5B57`);
}
function \u65AD\u8A00\u5E03\u5C14(value, path) {
  \u65AD\u8A00(typeof value === "boolean", `${path} \u5FC5\u987B\u662F\u5E03\u5C14\u503C`);
}
function \u65AD\u8A00\u679A\u4E3E\u503C(value, enumValues, path) {
  \u65AD\u8A00(typeof value === "string" && enumValues.includes(value), `${path} \u5FC5\u987B\u662F\u4EE5\u4E0B\u503C\u4E4B\u4E00: ${enumValues.join(" / ")}`);
}
function \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(target, allowedKeys, path) {
  for (const key of Object.keys(target)) {
    \u65AD\u8A00(allowedKeys.includes(key), `${path}.${key} \u4E0D\u662F\u5141\u8BB8\u7684\u5B57\u6BB5`);
  }
}
function \u65AD\u8A00\u65E0\u4E0B\u5212\u7EBF\u5B57\u6BB5(value, path = "root") {
  if (Array.isArray(value)) {
    value.forEach((item, index) => \u65AD\u8A00\u65E0\u4E0B\u5212\u7EBF\u5B57\u6BB5(item, `${path}[${index}]`));
    return;
  }
  if (!isPlainObject(value)) {
    return;
  }
  for (const [key, child] of Object.entries(value)) {
    if (key.startsWith("_")) {
      throw new Error(`\u547D\u4EE4\u5305\u542B\u53EA\u8BFB\u5B57\u6BB5: ${path}.${key}`);
    }
    \u65AD\u8A00\u65E0\u4E0B\u5212\u7EBF\u5B57\u6BB5(child, `${path}.${key}`);
  }
}
function \u6821\u9A8C\u5B57\u7B26\u4E32\u6620\u5C04(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  for (const [key, item] of Object.entries(value)) {
    \u65AD\u8A00\u5B57\u7B26\u4E32(key, `${path} \u952E\u540D`);
    \u65AD\u8A00\u5B57\u7B26\u4E32(item, `${path}.${key}`);
  }
}
function \u6821\u9A8C\u6570\u5B57\u6620\u5C04(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  for (const [key, item] of Object.entries(value)) {
    \u65AD\u8A00\u5B57\u7B26\u4E32(key, `${path} \u952E\u540D`);
    \u65AD\u8A00\u6570\u5B57(item, `${path}.${key}`);
  }
}
function \u6821\u9A8C\u4E16\u754C\u4E8B\u4EF6\u8F93\u5165(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, ["\u4E8B\u4EF6\u540D", "\u7B80\u8FF0", "\u65E5\u671F"], path);
  \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u4E8B\u4EF6\u540D, `${path}.\u4E8B\u4EF6\u540D`);
  \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u7B80\u8FF0, `${path}.\u7B80\u8FF0`);
  \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u65E5\u671F, `${path}.\u65E5\u671F`);
}
function \u6821\u9A8C\u516D\u7EF4(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u516D\u7EF4\u5B57\u6BB5, path);
  for (const [key, item] of Object.entries(value)) {
    \u65AD\u8A00\u6570\u5B57(item, `${path}.${key}`);
  }
}
function \u6821\u9A8C\u88C5\u5907\u6761\u76EE(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u88C5\u5907\u6761\u76EE\u5B57\u6BB5, path);
  if (value.\u540D\u79F0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u540D\u79F0, `${path}.\u540D\u79F0`);
  if (value.\u54C1\u8D28 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u54C1\u8D28, \u679A\u4E3E.\u88C5\u5907\u54C1\u8D28, `${path}.\u54C1\u8D28`);
  if (value.\u7C7B\u578B !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u7C7B\u578B, `${path}.\u7C7B\u578B`);
  if (value.\u63CF\u8FF0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u63CF\u8FF0, `${path}.\u63CF\u8FF0`);
  if (value.\u4F24\u5BB3\u9AB0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u4F24\u5BB3\u9AB0, `${path}.\u4F24\u5BB3\u9AB0`);
  for (const key of ["\u5148\u653B\u52A0\u503C", "\u653B\u51FB\u52A0\u503C", "\u9632\u5FA1DC\u52A0\u503C", "\u4F24\u5BB3\u51CF\u514D"]) {
    if (value[key] !== void 0) \u65AD\u8A00\u6570\u5B57(value[key], `${path}.${key}`);
  }
  if (value.\u5176\u4ED6\u6548\u679C !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u5176\u4ED6\u6548\u679C, `${path}.\u5176\u4ED6\u6548\u679C`);
}
function \u6821\u9A8C\u88C5\u5907\u680F\u4F4D(value, path) {
  if (value === "\u65E0") {
    return;
  }
  \u6821\u9A8C\u88C5\u5907\u6761\u76EE(value, path);
}
function \u6821\u9A8C\u88C5\u5907\u680F(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u88C5\u5907\u680F\u5B57\u6BB5, path);
  for (const [key, item] of Object.entries(value)) {
    \u6821\u9A8C\u88C5\u5907\u680F\u4F4D(item, `${path}.${key}`);
  }
}
function \u6821\u9A8C\u6B66\u6280\u6761\u76EE(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u6B66\u6280\u6761\u76EE\u5B57\u6BB5, path);
  if (value.\u540D\u79F0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u540D\u79F0, `${path}.\u540D\u79F0`);
  if (value.\u7B49\u7EA7 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u7B49\u7EA7, \u679A\u4E3E.\u6B66\u6280\u7B49\u7EA7, `${path}.\u7B49\u7EA7`);
  if (value.\u7C7B\u578B !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u7C7B\u578B, \u679A\u4E3E.\u6B66\u6280\u7C7B\u578B, `${path}.\u7C7B\u578B`);
  if (value.\u6548\u679C !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u6548\u679C, `${path}.\u6548\u679C`);
  if (value.\u719F\u7EC3\u5EA6 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u719F\u7EC3\u5EA6, `${path}.\u719F\u7EC3\u5EA6`);
  if (value.\u4F53\u529B\u6D88\u8017 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u4F53\u529B\u6D88\u8017, `${path}.\u4F53\u529B\u6D88\u8017`);
}
function \u6821\u9A8C\u4E13\u957F\u6761\u76EE(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u4E13\u957F\u6761\u76EE\u5B57\u6BB5, path);
  if (value.\u540D\u79F0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u540D\u79F0, `${path}.\u540D\u79F0`);
  if (value.\u7B49\u7EA7 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u7B49\u7EA7, `${path}.\u7B49\u7EA7`);
  if (value.\u6548\u679C !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u6548\u679C, `${path}.\u6548\u679C`);
}
function \u6821\u9A8C\u72B6\u6001\u8BB0\u5F55(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  for (const [key, item] of Object.entries(value)) {
    \u65AD\u8A00\u5B57\u7B26\u4E32(key, `${path} \u952E\u540D`);
    \u65AD\u8A00\u5BF9\u8C61(item, `${path}.${key}`);
    \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(item, ["\u6548\u679C", "\u5269\u4F59"], `${path}.${key}`);
    if (item.\u6548\u679C !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(item.\u6548\u679C, `${path}.${key}.\u6548\u679C`);
    if (item.\u5269\u4F59 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(item.\u5269\u4F59, `${path}.${key}.\u5269\u4F59`);
  }
}
function \u6821\u9A8C\u6B66\u6280\u6620\u5C04(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  for (const [key, item] of Object.entries(value)) {
    \u65AD\u8A00\u5B57\u7B26\u4E32(key, `${path} \u952E\u540D`);
    \u6821\u9A8C\u6B66\u6280\u6761\u76EE(item, `${path}.${key}`);
  }
}
function \u6821\u9A8C\u4E13\u957F\u6620\u5C04(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  for (const [key, item] of Object.entries(value)) {
    \u65AD\u8A00\u5B57\u7B26\u4E32(key, `${path} \u952E\u540D`);
    \u6821\u9A8C\u4E13\u957F\u6761\u76EE(item, `${path}.${key}`);
  }
}
function \u6821\u9A8C\u89D2\u8272\u6218\u6597\u6570\u636E(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, ["\u516D\u7EF4", "\u5F53\u524D\u751F\u547D\u503C", "\u5F53\u524D\u4F53\u529B\u503C", "\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210", "\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210", "\u88C5\u5907", "\u6B66\u6280", "\u4E13\u957F", "\u72B6\u6001"], path);
  if (value.\u516D\u7EF4 !== void 0) \u6821\u9A8C\u516D\u7EF4(value.\u516D\u7EF4, `${path}.\u516D\u7EF4`);
  if (value.\u5F53\u524D\u751F\u547D\u503C !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u5F53\u524D\u751F\u547D\u503C, `${path}.\u5F53\u524D\u751F\u547D\u503C`);
  if (value.\u5F53\u524D\u4F53\u529B\u503C !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u5F53\u524D\u4F53\u529B\u503C, `${path}.\u5F53\u524D\u4F53\u529B\u503C`);
  if (value.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210, `${path}.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210`);
  if (value.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210, `${path}.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210`);
  if (value.\u88C5\u5907 !== void 0) \u6821\u9A8C\u88C5\u5907\u680F(value.\u88C5\u5907, `${path}.\u88C5\u5907`);
  if (value.\u6B66\u6280 !== void 0) \u6821\u9A8C\u6B66\u6280\u6620\u5C04(value.\u6B66\u6280, `${path}.\u6B66\u6280`);
  if (value.\u4E13\u957F !== void 0) \u6821\u9A8C\u4E13\u957F\u6620\u5C04(value.\u4E13\u957F, `${path}.\u4E13\u957F`);
  if (value.\u72B6\u6001 !== void 0) \u6821\u9A8C\u72B6\u6001\u8BB0\u5F55(value.\u72B6\u6001, `${path}.\u72B6\u6001`);
}
function \u6821\u9A8C\u7269\u54C1\u680F(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  for (const [key, item] of Object.entries(value)) {
    \u65AD\u8A00\u5B57\u7B26\u4E32(key, `${path} \u952E\u540D`);
    \u65AD\u8A00\u5BF9\u8C61(item, `${path}.${key}`);
    \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(item, \u7269\u54C1\u680F\u5B57\u6BB5, `${path}.${key}`);
    if (item.\u54C1\u8D28 !== void 0) {
      \u65AD\u8A00(typeof item.\u54C1\u8D28 === "string" && [...\u679A\u4E3E.\u88C5\u5907\u54C1\u8D28, "\u65E0"].includes(item.\u54C1\u8D28), `${path}.${key}.\u54C1\u8D28 \u5FC5\u987B\u662F\u5408\u6CD5\u88C5\u5907\u54C1\u8D28\u6216 \u65E0`);
    }
    if (item.\u63CF\u8FF0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(item.\u63CF\u8FF0, `${path}.${key}.\u63CF\u8FF0`);
    if (item.\u6570\u91CF !== void 0) \u65AD\u8A00\u6570\u5B57(item.\u6570\u91CF, `${path}.${key}.\u6570\u91CF`);
  }
}
function \u6821\u9A8C\u6B66\u5C06\u4FE1\u606F(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u6B66\u5C06\u4FE1\u606F\u5B57\u6BB5, path);
  if (value.\u91CE\u5FC3\u503C !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u91CE\u5FC3\u503C, `${path}.\u91CE\u5FC3\u503C`);
  if (value.\u6027\u683C !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u6027\u683C, \u679A\u4E3E.\u6B66\u5C06\u6027\u683C, `${path}.\u6027\u683C`);
  if (value.\u5B98\u804C !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u5B98\u804C, `${path}.\u5B98\u804C`);
  if (value.\u5F53\u524D\u72B6\u6001 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u5F53\u524D\u72B6\u6001, \u679A\u4E3E.\u6B66\u5C06\u72B6\u6001, `${path}.\u5F53\u524D\u72B6\u6001`);
  if (value.\u72B6\u6001\u63CF\u8FF0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u72B6\u6001\u63CF\u8FF0, `${path}.\u72B6\u6001\u63CF\u8FF0`);
  if (value.\u9A7B\u624E\u5730 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u9A7B\u624E\u5730, `${path}.\u9A7B\u624E\u5730`);
  if (value.\u7279\u6280 !== void 0) \u6821\u9A8C\u5B57\u7B26\u4E32\u6620\u5C04(value.\u7279\u6280, `${path}.\u7279\u6280`);
}
function \u6821\u9A8C\u7F8E\u4EBA\u5C5E\u6027(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u7F8E\u4EBA\u5C5E\u6027\u5B57\u6BB5, path);
  for (const key of ["\u4F9D\u8D56\u5EA6", "\u654F\u611F\u5EA6", "\u8D1E\u6D01\u5EA6"]) {
    if (value[key] !== void 0) \u65AD\u8A00\u6570\u5B57(value[key], `${path}.${key}`);
  }
  if (value.\u4F4D\u4EFD !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u4F4D\u4EFD, \u679A\u4E3E.\u7F8E\u4EBA\u4F4D\u4EFD, `${path}.\u4F4D\u4EFD`);
  if (value.\u6027\u683C !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u6027\u683C, \u679A\u4E3E.\u7F8E\u4EBA\u6027\u683C, `${path}.\u6027\u683C`);
  if (value.\u5F53\u524D\u72B6\u6001 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u5F53\u524D\u72B6\u6001, \u679A\u4E3E.\u7F8E\u4EBA\u72B6\u6001, `${path}.\u5F53\u524D\u72B6\u6001`);
}
function \u6821\u9A8C\u4EFB\u52A1\u76EE\u6807\u66F4\u65B0(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u4EFB\u52A1\u76EE\u6807\u5B57\u6BB5, path);
  if (value.\u7C7B\u578B !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u7C7B\u578B, \u679A\u4E3E.\u4EFB\u52A1\u76EE\u6807\u7C7B\u578B, `${path}.\u7C7B\u578B`);
  if (value.\u72B6\u6001 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u72B6\u6001, \u679A\u4E3E.\u4EFB\u52A1\u76EE\u6807\u72B6\u6001, `${path}.\u72B6\u6001`);
  if (value.\u63CF\u8FF0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u63CF\u8FF0, `${path}.\u63CF\u8FF0`);
  if (value.\u79EF\u5206 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u79EF\u5206, `${path}.\u79EF\u5206`);
  if (value.\u5176\u4ED6\u5956\u52B1 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u5176\u4ED6\u5956\u52B1, `${path}.\u5176\u4ED6\u5956\u52B1`);
}
function \u6821\u9A8C\u4EFB\u52A1\u76EE\u6807\u6620\u5C04(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  for (const [key, item] of Object.entries(value)) {
    \u65AD\u8A00\u5B57\u7B26\u4E32(key, `${path} \u952E\u540D`);
    \u6821\u9A8C\u4EFB\u52A1\u76EE\u6807\u66F4\u65B0(item, `${path}.${key}`);
  }
}
function \u6821\u9A8C\u5546\u54C1\u6761\u76EE(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u5546\u54C1\u5B57\u6BB5, path);
  if (value.\u540D\u79F0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u540D\u79F0, `${path}.\u540D\u79F0`);
  if (value.\u5206\u7C7B !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u5206\u7C7B, \u679A\u4E3E.\u5546\u54C1\u5206\u7C7B, `${path}.\u5206\u7C7B`);
  if (value.\u4EF7\u683C !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u4EF7\u683C, `${path}.\u4EF7\u683C`);
  if (value.\u63CF\u8FF0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u63CF\u8FF0, `${path}.\u63CF\u8FF0`);
}
function \u6821\u9A8C\u4E16\u754C\u66F4\u65B0(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u4E16\u754C\u5B57\u6BB5, path);
  if (value.\u5F53\u524D\u65F6\u95F4 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u5F53\u524D\u65F6\u95F4, `${path}.\u5F53\u524D\u65F6\u95F4`);
  if (value.\u5F53\u524D\u5730\u70B9 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u5F53\u524D\u5730\u70B9, `${path}.\u5F53\u524D\u5730\u70B9`);
  if (value.\u5F53\u524D\u5267\u672C !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u5F53\u524D\u5267\u672C, \u679A\u4E3E.\u5267\u672C, `${path}.\u5F53\u524D\u5267\u672C`);
  if (value.\u5929\u6C14 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u5929\u6C14, `${path}.\u5929\u6C14`);
  if (value.\u8FD1\u671F\u4E8B\u4EF6 !== void 0) {
    \u65AD\u8A00(Array.isArray(value.\u8FD1\u671F\u4E8B\u4EF6), `${path}.\u8FD1\u671F\u4E8B\u4EF6 \u5FC5\u987B\u662F\u6570\u7EC4`);
    value.\u8FD1\u671F\u4E8B\u4EF6.forEach((item, index) => \u6821\u9A8C\u4E16\u754C\u4E8B\u4EF6\u8F93\u5165(item, `${path}.\u8FD1\u671F\u4E8B\u4EF6[${index}]`));
  }
}
function \u6821\u9A8C\u4E3B\u89D2\u66F4\u65B0(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u4E3B\u89D2\u5B57\u6BB5, path);
  if (value.\u516D\u7EF4 !== void 0) \u6821\u9A8C\u516D\u7EF4(value.\u516D\u7EF4, `${path}.\u516D\u7EF4`);
  if (value.\u5F53\u524D\u751F\u547D\u503C !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u5F53\u524D\u751F\u547D\u503C, `${path}.\u5F53\u524D\u751F\u547D\u503C`);
  if (value.\u5F53\u524D\u4F53\u529B\u503C !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u5F53\u524D\u4F53\u529B\u503C, `${path}.\u5F53\u524D\u4F53\u529B\u503C`);
  if (value.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210, `${path}.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210`);
  if (value.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210, `${path}.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210`);
  if (value.\u88C5\u5907 !== void 0) \u6821\u9A8C\u88C5\u5907\u680F(value.\u88C5\u5907, `${path}.\u88C5\u5907`);
  if (value.\u6B66\u6280 !== void 0) \u6821\u9A8C\u6B66\u6280\u6620\u5C04(value.\u6B66\u6280, `${path}.\u6B66\u6280`);
  if (value.\u4E13\u957F !== void 0) \u6821\u9A8C\u4E13\u957F\u6620\u5C04(value.\u4E13\u957F, `${path}.\u4E13\u957F`);
  if (value.\u72B6\u6001 !== void 0) \u6821\u9A8C\u72B6\u6001\u8BB0\u5F55(value.\u72B6\u6001, `${path}.\u72B6\u6001`);
  if (value.\u7269\u54C1\u680F !== void 0) \u6821\u9A8C\u7269\u54C1\u680F(value.\u7269\u54C1\u680F, `${path}.\u7269\u54C1\u680F`);
  if (value.\u58F0\u671B !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u58F0\u671B, `${path}.\u58F0\u671B`);
  if (value.\u91D1\u94B1 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u91D1\u94B1, `${path}.\u91D1\u94B1`);
  if (value.\u79EF\u5206 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u79EF\u5206, `${path}.\u79EF\u5206`);
  if (value.\u5B98\u804C !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u5B98\u804C, `${path}.\u5B98\u804C`);
  if (value.\u7235\u4F4D !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u7235\u4F4D, `${path}.\u7235\u4F4D`);
  if (value.\u540E\u5BAB\u548C\u8C10\u5EA6 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u540E\u5BAB\u548C\u8C10\u5EA6, `${path}.\u540E\u5BAB\u548C\u8C10\u5EA6`);
}
function \u6821\u9A8C\u57CE\u6C60\u66F4\u65B0(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u57CE\u6C60\u5B57\u6BB5, path);
  if (value.\u7B49\u7EA7 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u7B49\u7EA7, \u679A\u4E3E.\u57CE\u6C60\u7B49\u7EA7, `${path}.\u7B49\u7EA7`);
  for (const key of ["\u57CE\u9632", "\u4EBA\u53E3", "\u519C\u4E1A", "\u5546\u4E1A", "\u6C11\u5FC3", "\u6CBB\u5B89", "\u7E41\u8363\u5EA6"]) {
    if (value[key] !== void 0) \u65AD\u8A00\u6570\u5B57(value[key], `${path}.${key}`);
  }
  if (value.\u592A\u5B88 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u592A\u5B88, `${path}.\u592A\u5B88`);
  if (value.\u8BBE\u65BD !== void 0) {
    \u65AD\u8A00(Array.isArray(value.\u8BBE\u65BD), `${path}.\u8BBE\u65BD \u5FC5\u987B\u662F\u6570\u7EC4`);
    value.\u8BBE\u65BD.forEach((item, index) => \u65AD\u8A00\u5B57\u7B26\u4E32(item, `${path}.\u8BBE\u65BD[${index}]`));
  }
}
function \u6821\u9A8C\u519B\u961F\u66F4\u65B0(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u519B\u961F\u5B57\u6BB5, path);
  if (value.\u5175\u79CD !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u5175\u79CD, `${path}.\u5175\u79CD`);
  if (value.\u7B49\u7EA7 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u7B49\u7EA7, \u679A\u4E3E.\u519B\u961F\u7B49\u7EA7, `${path}.\u7B49\u7EA7`);
  for (const key of ["\u5175\u529B", "\u58EB\u6C14", "\u75B2\u60EB", "\u8BAD\u7EC3\u8FDB\u5EA6"]) {
    if (value[key] !== void 0) \u65AD\u8A00\u6570\u5B57(value[key], `${path}.${key}`);
  }
  if (value.\u88C5\u5907\u7B49\u7EA7 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u88C5\u5907\u7B49\u7EA7, \u679A\u4E3E.\u519B\u961F\u88C5\u5907\u7B49\u7EA7, `${path}.\u88C5\u5907\u7B49\u7EA7`);
  if (value.\u7EDF\u5C5E\u5C06\u9886 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u7EDF\u5C5E\u5C06\u9886, `${path}.\u7EDF\u5C5E\u5C06\u9886`);
  if (value.\u9A7B\u624E\u5730 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u9A7B\u624E\u5730, `${path}.\u9A7B\u624E\u5730`);
  if (value.\u9635\u578B !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u9635\u578B, \u679A\u4E3E.\u9635\u578B, `${path}.\u9635\u578B`);
}
function \u6821\u9A8C\u653F\u7B56\u66F4\u65B0(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u653F\u7B56\u5B57\u6BB5, path);
  if (value.\u5F53\u524D\u7814\u7A76 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u5F53\u524D\u7814\u7A76, `${path}.\u5F53\u524D\u7814\u7A76`);
  for (const key of ["\u7814\u7A76\u8FDB\u5EA6", "\u5BCC\u56FD", "\u5F3A\u5175", "\u9738\u9053", "\u738B\u9053"]) {
    if (value[key] !== void 0) \u65AD\u8A00\u6570\u5B57(value[key], `${path}.${key}`);
  }
}
function \u6821\u9A8C\u52BF\u529B\u66F4\u65B0(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u52BF\u529B\u5B57\u6BB5, path);
  if (value.\u540D\u79F0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u540D\u79F0, `${path}.\u540D\u79F0`);
  if (value.\u89C4\u6A21 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u89C4\u6A21, \u679A\u4E3E.\u52BF\u529B\u89C4\u6A21, `${path}.\u89C4\u6A21`);
  for (const key of ["\u6B63\u7EDF\u6027", "\u60C5\u62A5\u7F51", "\u91D1\u94B1", "\u7CAE\u8349"]) {
    if (value[key] !== void 0) \u65AD\u8A00\u6570\u5B57(value[key], `${path}.${key}`);
  }
  if (value.\u57CE\u6C60 !== void 0) {
    \u65AD\u8A00\u5BF9\u8C61(value.\u57CE\u6C60, `${path}.\u57CE\u6C60`);
    for (const [key, item] of Object.entries(value.\u57CE\u6C60)) {
      \u65AD\u8A00\u5B57\u7B26\u4E32(key, `${path}.\u57CE\u6C60 \u952E\u540D`);
      \u6821\u9A8C\u57CE\u6C60\u66F4\u65B0(item, `${path}.\u57CE\u6C60.${key}`);
    }
  }
  if (value.\u519B\u961F !== void 0) {
    \u65AD\u8A00\u5BF9\u8C61(value.\u519B\u961F, `${path}.\u519B\u961F`);
    for (const [key, item] of Object.entries(value.\u519B\u961F)) {
      \u65AD\u8A00\u5B57\u7B26\u4E32(key, `${path}.\u519B\u961F \u952E\u540D`);
      \u6821\u9A8C\u519B\u961F\u66F4\u65B0(item, `${path}.\u519B\u961F.${key}`);
    }
  }
  if (value.\u5916\u4EA4 !== void 0) {
    \u6821\u9A8C\u6570\u5B57\u6620\u5C04(value.\u5916\u4EA4, `${path}.\u5916\u4EA4`);
  }
  if (value.\u653F\u7B56 !== void 0) \u6821\u9A8C\u653F\u7B56\u66F4\u65B0(value.\u653F\u7B56, `${path}.\u653F\u7B56`);
}
function \u6821\u9A8CNPC\u66F4\u65B0(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, NPC\u5B57\u6BB5, path);
  if (value.\u540D\u79F0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u540D\u79F0, `${path}.\u540D\u79F0`);
  if (value.\u54C1\u8D28 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u54C1\u8D28, \u679A\u4E3E.\u54C1\u8D28, `${path}.\u54C1\u8D28`);
  if (value.\u9635\u8425 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u9635\u8425, `${path}.\u9635\u8425`);
  if (value.\u5B9A\u4F4D !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u5B9A\u4F4D, `${path}.\u5B9A\u4F4D`);
  if (value.\u597D\u611F !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u597D\u611F, `${path}.\u597D\u611F`);
  if (value.\u7B80\u8FF0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u7B80\u8FF0, `${path}.\u7B80\u8FF0`);
  if (value.\u7F81\u7ECA !== void 0) \u6821\u9A8C\u5B57\u7B26\u4E32\u6620\u5C04(value.\u7F81\u7ECA, `${path}.\u7F81\u7ECA`);
  if (value.\u89D2\u8272\u6570\u636E !== void 0) \u6821\u9A8C\u89D2\u8272\u6218\u6597\u6570\u636E(value.\u89D2\u8272\u6570\u636E, `${path}.\u89D2\u8272\u6570\u636E`);
  if (value.\u6B66\u5C06\u4FE1\u606F !== void 0) \u6821\u9A8C\u6B66\u5C06\u4FE1\u606F(value.\u6B66\u5C06\u4FE1\u606F, `${path}.\u6B66\u5C06\u4FE1\u606F`);
  if (value.\u7F8E\u4EBA\u5C5E\u6027 !== void 0) \u6821\u9A8C\u7F8E\u4EBA\u5C5E\u6027(value.\u7F8E\u4EBA\u5C5E\u6027, `${path}.\u7F8E\u4EBA\u5C5E\u6027`);
}
function \u6821\u9A8C\u4EFB\u52A1\u66F4\u65B0(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u4EFB\u52A1\u5B57\u6BB5, path);
  if (value.\u540D\u79F0 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u540D\u79F0, `${path}.\u540D\u79F0`);
  if (value.\u7C7B\u578B !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u7C7B\u578B, \u679A\u4E3E.\u4EFB\u52A1\u7C7B\u578B, `${path}.\u7C7B\u578B`);
  if (value.\u72B6\u6001 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u72B6\u6001, \u679A\u4E3E.\u4EFB\u52A1\u72B6\u6001, `${path}.\u72B6\u6001`);
  if (value.\u65F6\u9650 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u65F6\u9650, `${path}.\u65F6\u9650`);
  if (value.\u76EE\u6807 !== void 0) \u6821\u9A8C\u4EFB\u52A1\u76EE\u6807\u6620\u5C04(value.\u76EE\u6807, `${path}.\u76EE\u6807`);
}
function \u6821\u9A8C\u8D44\u6E90\u53D8\u5316(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u4E3B\u89D2\u8D44\u6E90\u5B57\u6BB5, path);
  for (const [key, item] of Object.entries(value)) {
    \u65AD\u8A00\u6570\u5B57(item, `${path}.${key}`);
  }
}
function \u89E3\u6790\u547D\u4EE4\u8F93\u5165(input) {
  debugLog("commands", "\u5F00\u59CB\u89E3\u6790\u547D\u4EE4\u8F93\u5165", {
    inputType: typeof input === "string" ? "string" : Array.isArray(input) ? "array" : "object",
    summary: summarizeValue(input)
  });
  try {
    if (typeof input === "string") {
      const parsed = JSON.parse(input);
      debugLog("commands", "\u5B57\u7B26\u4E32\u547D\u4EE4 JSON \u89E3\u6790\u6210\u529F", summarizeValue(parsed));
      return \u89E3\u6790\u547D\u4EE4\u8F93\u5165(parsed);
    }
    const list = Array.isArray(input) ? input : [input];
    debugLog("commands", "\u5F00\u59CB\u9010\u6761\u6821\u9A8C\u547D\u4EE4", { count: list.length });
    list.forEach((command, index) => \u6821\u9A8C\u547D\u4EE4(command, index));
    debugLog("commands", "\u547D\u4EE4\u8F93\u5165\u6821\u9A8C\u5B8C\u6210", {
      count: list.length,
      types: list.map((command) => command.type)
    });
    return list;
  } catch (error) {
    debugError("commands", "\u89E3\u6790\u547D\u4EE4\u8F93\u5165\u5931\u8D25", error);
    throw error;
  }
}
function \u6821\u9A8C\u547D\u4EE4(command, index = 0) {
  const path = `commands[${index}]`;
  debugLog("commands", "\u6821\u9A8C\u5355\u6761\u547D\u4EE4", {
    index,
    type: _.isPlainObject(command) ? command.type ?? null : null,
    summary: summarizeValue(command)
  });
  \u65AD\u8A00\u5BF9\u8C61(command, path);
  \u65AD\u8A00(typeof command.type === "string", `${path}.type \u5FC5\u987B\u662F\u5B57\u7B26\u4E32`);
  \u65AD\u8A00(command.type in \u547D\u4EE4\u5B57\u6BB5\u767D\u540D\u5355, `${path}.type \u4E0D\u662F\u6709\u6548\u547D\u4EE4\u7C7B\u578B: ${String(command.type)}`);
  const allowedKeys = \u547D\u4EE4\u5B57\u6BB5\u767D\u540D\u5355[command.type];
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(command, allowedKeys, path);
  \u65AD\u8A00\u65E0\u4E0B\u5212\u7EBF\u5B57\u6BB5(command, path);
  try {
    switch (command.type) {
      case "UpdateWorld":
        debugLog("commands", "\u6821\u9A8C UpdateWorld", { index });
        \u6821\u9A8C\u4E16\u754C\u66F4\u65B0(command.changes, `${path}.changes`);
        return;
      case "AppendRecentEvent":
        debugLog("commands", "\u6821\u9A8C AppendRecentEvent", { index });
        \u6821\u9A8C\u4E16\u754C\u4E8B\u4EF6\u8F93\u5165(command.event, `${path}.event`);
        return;
      case "UpdatePlayerBase":
        debugLog("commands", "\u6821\u9A8C UpdatePlayerBase", { index });
        \u6821\u9A8C\u4E3B\u89D2\u66F4\u65B0(command.changes, `${path}.changes`);
        return;
      case "AdjustPlayerResource":
        debugLog("commands", "\u6821\u9A8C AdjustPlayerResource", { index });
        if (command.mode !== void 0) {
          \u65AD\u8A00\u679A\u4E3E\u503C(command.mode, ["delta", "set"], `${path}.mode`);
        }
        \u6821\u9A8C\u8D44\u6E90\u53D8\u5316(command.changes, `${path}.changes`);
        return;
      case "UpdateFaction":
        debugLog("commands", "\u6821\u9A8C UpdateFaction", { index, factionId: command.factionId });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.factionId, `${path}.factionId`);
        if (command.createIfMissing !== void 0) {
          \u65AD\u8A00\u5E03\u5C14(command.createIfMissing, `${path}.createIfMissing`);
        }
        \u6821\u9A8C\u52BF\u529B\u66F4\u65B0(command.changes, `${path}.changes`);
        return;
      case "UpsertCity":
        debugLog("commands", "\u6821\u9A8C UpsertCity", { index, factionId: command.factionId, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.factionId, `${path}.factionId`);
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        if (command.createIfMissing !== void 0) {
          \u65AD\u8A00\u5E03\u5C14(command.createIfMissing, `${path}.createIfMissing`);
        }
        \u6821\u9A8C\u57CE\u6C60\u66F4\u65B0(command.data, `${path}.data`);
        return;
      case "AddCityFacility":
        debugLog("commands", "\u6821\u9A8C AddCityFacility", { index, factionId: command.factionId, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.factionId, `${path}.factionId`);
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.facility, `${path}.facility`);
        return;
      case "RemoveCityFacility":
        debugLog("commands", "\u6821\u9A8C RemoveCityFacility", { index, factionId: command.factionId, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.factionId, `${path}.factionId`);
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.facility, `${path}.facility`);
        return;
      case "RemoveCity":
        debugLog("commands", "\u6821\u9A8C RemoveCity", { index, factionId: command.factionId, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.factionId, `${path}.factionId`);
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        return;
      case "UpsertArmy":
        debugLog("commands", "\u6821\u9A8C UpsertArmy", { index, factionId: command.factionId, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.factionId, `${path}.factionId`);
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        if (command.createIfMissing !== void 0) {
          \u65AD\u8A00\u5E03\u5C14(command.createIfMissing, `${path}.createIfMissing`);
        }
        \u6821\u9A8C\u519B\u961F\u66F4\u65B0(command.data, `${path}.data`);
        return;
      case "RemoveArmy":
        debugLog("commands", "\u6821\u9A8C RemoveArmy", { index, factionId: command.factionId, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.factionId, `${path}.factionId`);
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        return;
      case "UpdateDiplomacy":
        debugLog("commands", "\u6821\u9A8C UpdateDiplomacy", { index, factionId: command.factionId });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.factionId, `${path}.factionId`);
        \u6821\u9A8C\u6570\u5B57\u6620\u5C04(command.changes, `${path}.changes`);
        return;
      case "UpdatePolicy":
        debugLog("commands", "\u6821\u9A8C UpdatePolicy", { index, factionId: command.factionId });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.factionId, `${path}.factionId`);
        \u6821\u9A8C\u653F\u7B56\u66F4\u65B0(command.changes, `${path}.changes`);
        return;
      case "UpsertNpc":
        debugLog("commands", "\u6821\u9A8C UpsertNpc", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        if (command.createIfMissing !== void 0) {
          \u65AD\u8A00\u5E03\u5C14(command.createIfMissing, `${path}.createIfMissing`);
        }
        \u6821\u9A8CNPC\u66F4\u65B0(command.data, `${path}.data`);
        return;
      case "UpdateNpcRelation":
        debugLog("commands", "\u6821\u9A8C UpdateNpcRelation", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        if (command.mode !== void 0) {
          \u65AD\u8A00\u679A\u4E3E\u503C(command.mode, ["delta", "set"], `${path}.mode`);
        }
        \u65AD\u8A00(command.\u597D\u611F !== void 0 || command.\u7F81\u7ECA !== void 0, `${path} \u81F3\u5C11\u8981\u63D0\u4F9B \u597D\u611F \u6216 \u7F81\u7ECA`);
        if (command.\u597D\u611F !== void 0) \u65AD\u8A00\u6570\u5B57(command.\u597D\u611F, `${path}.\u597D\u611F`);
        if (command.\u7F81\u7ECA !== void 0) \u6821\u9A8C\u5B57\u7B26\u4E32\u6620\u5C04(command.\u7F81\u7ECA, `${path}.\u7F81\u7ECA`);
        return;
      case "RemoveNpc":
        debugLog("commands", "\u6821\u9A8C RemoveNpc", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        return;
      case "UpsertQuest":
        debugLog("commands", "\u6821\u9A8C UpsertQuest", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        if (command.createIfMissing !== void 0) {
          \u65AD\u8A00\u5E03\u5C14(command.createIfMissing, `${path}.createIfMissing`);
        }
        \u6821\u9A8C\u4EFB\u52A1\u66F4\u65B0(command.data, `${path}.data`);
        return;
      case "UpdateQuestState":
        debugLog("commands", "\u6821\u9A8C UpdateQuestState", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        \u65AD\u8A00\u679A\u4E3E\u503C(command.\u72B6\u6001, \u679A\u4E3E.\u4EFB\u52A1\u72B6\u6001, `${path}.\u72B6\u6001`);
        if (command.\u76EE\u6807 !== void 0) {
          \u6821\u9A8C\u4EFB\u52A1\u76EE\u6807\u6620\u5C04(command.\u76EE\u6807, `${path}.\u76EE\u6807`);
        }
        return;
      case "RemoveQuest":
        debugLog("commands", "\u6821\u9A8C RemoveQuest", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        return;
      case "UpsertShopItem":
        debugLog("commands", "\u6821\u9A8C UpsertShopItem", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        if (command.createIfMissing !== void 0) {
          \u65AD\u8A00\u5E03\u5C14(command.createIfMissing, `${path}.createIfMissing`);
        }
        \u6821\u9A8C\u5546\u54C1\u6761\u76EE(command.data, `${path}.data`);
        return;
      case "RemoveShopItem":
        debugLog("commands", "\u6821\u9A8C RemoveShopItem", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        return;
    }
  } catch (error) {
    debugError("commands", `\u547D\u4EE4\u6821\u9A8C\u5931\u8D25: ${path}`, error);
    throw error;
  }
}
function \u521B\u5EFA\u547D\u4EE4\u6267\u884C\u5FEB\u7167(state) {
  return _.cloneDeep(state);
}

// src/storage.ts
var storage_exports = {};
__export(storage_exports, {
  CONTEXT_MACRO_KEY: () => CONTEXT_MACRO_KEY,
  MAX_SAVED_STATE_MESSAGES: () => MAX_SAVED_STATE_MESSAGES,
  STATE_ROOT_KEY: () => STATE_ROOT_KEY,
  \u4FDD\u5B58\u4E0A\u4E0B\u6587\u5B8F: () => \u4FDD\u5B58\u4E0A\u4E0B\u6587\u5B8F,
  \u4FDD\u5B58\u72B6\u6001: () => \u4FDD\u5B58\u72B6\u6001,
  \u521D\u59CB\u5316\u72B6\u6001: () => \u521D\u59CB\u5316\u72B6\u6001,
  \u52A0\u8F7D\u72B6\u6001: () => \u52A0\u8F7D\u72B6\u6001,
  \u66F4\u65B0\u6D88\u606F\u6B63\u6587: () => \u66F4\u65B0\u6D88\u606F\u6B63\u6587,
  \u66F4\u65B0\u72B6\u6001: () => \u66F4\u65B0\u72B6\u6001,
  \u8BFB\u53D6\u4E0A\u4E0B\u6587\u5B8F: () => \u8BFB\u53D6\u4E0A\u4E0B\u6587\u5B8F,
  \u8BFB\u53D6\u539F\u59CB\u72B6\u6001: () => \u8BFB\u53D6\u539F\u59CB\u72B6\u6001,
  \u8BFB\u53D6\u6240\u6709\u6D88\u606F: () => \u8BFB\u53D6\u6240\u6709\u6D88\u606F,
  \u8BFB\u53D6\u6D88\u606F: () => \u8BFB\u53D6\u6D88\u606F
});

// src/recompute.ts
function recompute\u516D\u7EF4(stats) {
  const next = _.cloneDeep(stats);
  next._\u6B66\u529B\u52A0\u503C = \u8BA1\u7B97\u52A0\u503C(next.\u6B66\u529B);
  next._\u667A\u529B\u52A0\u503C = \u8BA1\u7B97\u52A0\u503C(next.\u667A\u529B);
  next._\u7EDF\u7387\u52A0\u503C = \u8BA1\u7B97\u52A0\u503C(next.\u7EDF\u7387);
  next._\u653F\u6CBB\u52A0\u503C = \u8BA1\u7B97\u52A0\u503C(next.\u653F\u6CBB);
  next._\u9B45\u529B\u52A0\u503C = \u8BA1\u7B97\u52A0\u503C(next.\u9B45\u529B);
  next._\u4F53\u8D28\u52A0\u503C = \u8BA1\u7B97\u52A0\u503C(next.\u4F53\u8D28);
  return next;
}
function recompute\u89D2\u8272\u6218\u6597\u6570\u636E(data) {
  const next = _.cloneDeep(data);
  next.\u516D\u7EF4 = recompute\u516D\u7EF4(next.\u516D\u7EF4);
  const \u57FA\u7840\u751F\u547D\u4E0A\u9650 = (next.\u516D\u7EF4._\u4F53\u8D28\u52A0\u503C ?? 0) * 5;
  const \u57FA\u7840\u4F53\u529B\u4E0A\u9650 = (next.\u516D\u7EF4._\u4F53\u8D28\u52A0\u503C ?? 0) * 8;
  const \u751F\u547D\u4E0A\u9650 = Math.max(0, \u57FA\u7840\u751F\u547D\u4E0A\u9650 + \u6570\u503C(next.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210));
  const \u4F53\u529B\u4E0A\u9650 = Math.max(0, \u57FA\u7840\u4F53\u529B\u4E0A\u9650 + \u6570\u503C(next.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210));
  next.\u5F53\u524D\u751F\u547D\u503C = _.clamp(\u6570\u503C(next.\u5F53\u524D\u751F\u547D\u503C), 0, \u751F\u547D\u4E0A\u9650);
  next.\u5F53\u524D\u4F53\u529B\u503C = _.clamp(\u6570\u503C(next.\u5F53\u524D\u4F53\u529B\u503C), 0, \u4F53\u529B\u4E0A\u9650);
  next._\u57FA\u7840\u751F\u547D\u503C\u4E0A\u9650 = \u57FA\u7840\u751F\u547D\u4E0A\u9650;
  next._\u57FA\u7840\u4F53\u529B\u503C\u4E0A\u9650 = \u57FA\u7840\u4F53\u529B\u4E0A\u9650;
  next._\u751F\u547D\u503C\u4E0A\u9650 = \u751F\u547D\u4E0A\u9650;
  next._\u4F53\u529B\u503C\u4E0A\u9650 = \u4F53\u529B\u4E0A\u9650;
  const \u4F24\u52BF = \u8BA1\u7B97\u4F24\u52BF(next.\u5F53\u524D\u751F\u547D\u503C, \u751F\u547D\u4E0A\u9650);
  next._\u4F24\u52BF = \u4F24\u52BF._\u4F24\u52BF;
  next._\u6218\u6597\u51CF\u503C = \u4F24\u52BF._\u6218\u6597\u51CF\u503C;
  const \u88C5\u5907\u6C47\u603B = \u6C47\u603B\u88C5\u5907\u52A0\u503C(next.\u88C5\u5907);
  next._\u5148\u653B\u503C = Math.floor((next.\u516D\u7EF4._\u6B66\u529B\u52A0\u503C ?? 0) / 4) + \u88C5\u5907\u6C47\u603B.\u5148\u653B + (next._\u6218\u6597\u51CF\u503C ?? 0);
  next._\u653B\u51FB\u57FA\u7840\u503C = (next.\u516D\u7EF4._\u6B66\u529B\u52A0\u503C ?? 0) + \u88C5\u5907\u6C47\u603B.\u653B\u51FB + (next._\u6218\u6597\u51CF\u503C ?? 0);
  next._\u4F24\u5BB3\u57FA\u7840\u503C = (next.\u516D\u7EF4._\u6B66\u529B\u52A0\u503C ?? 0) + (next._\u6218\u6597\u51CF\u503C ?? 0);
  next._\u9632\u5FA1DC = 40 + Math.floor((next.\u516D\u7EF4._\u6B66\u529B\u52A0\u503C ?? 0) * 0.75) + \u88C5\u5907\u6C47\u603B.\u9632\u5FA1DC + (next._\u6218\u6597\u51CF\u503C ?? 0);
  next._\u4F24\u5BB3\u51CF\u514D = \u88C5\u5907\u6C47\u603B.\u51CF\u514D;
  return next;
}
function recompute\u7F8E\u4EBA\u5C5E\u6027(data) {
  const next = _.cloneDeep(data);
  next._\u4F9D\u8D56\u7B49\u7EA7 = \u4F9D\u8D56\u7B49\u7EA7(next.\u4F9D\u8D56\u5EA6);
  next._\u654F\u611F\u7B49\u7EA7 = \u654F\u611F\u7B49\u7EA7(next.\u654F\u611F\u5EA6);
  next._\u8D1E\u6D01\u7B49\u7EA7 = \u8D1E\u6D01\u7B49\u7EA7(next.\u8D1E\u6D01\u5EA6);
  return next;
}
function recomputeNPC(data) {
  const next = _.cloneDeep(data);
  if (next.\u89D2\u8272\u6570\u636E) {
    next.\u89D2\u8272\u6570\u636E = recompute\u89D2\u8272\u6218\u6597\u6570\u636E(next.\u89D2\u8272\u6570\u636E);
  }
  if (next.\u7F8E\u4EBA\u5C5E\u6027) {
    next.\u7F8E\u4EBA\u5C5E\u6027 = recompute\u7F8E\u4EBA\u5C5E\u6027(next.\u7F8E\u4EBA\u5C5E\u6027);
  }
  delete next._\u5FE0\u8BDA\u7B49\u7EA7;
  delete next._\u597D\u611F\u7B49\u7EA7;
  delete next._\u4EA4\u60C5\u7B49\u7EA7;
  if (next.\u6B66\u5C06\u4FE1\u606F) {
    next._\u5FE0\u8BDA\u7B49\u7EA7 = \u5FE0\u8BDA\u7B49\u7EA7(next.\u597D\u611F);
  } else if (next.\u7F8E\u4EBA\u5C5E\u6027) {
    next._\u597D\u611F\u7B49\u7EA7 = \u597D\u611F\u7B49\u7EA7(next.\u597D\u611F);
  } else {
    next._\u4EA4\u60C5\u7B49\u7EA7 = \u4EA4\u60C5\u7B49\u7EA7(next.\u597D\u611F);
  }
  return next;
}
function recompute\u4E3B\u89D2(data) {
  const next = recompute\u89D2\u8272\u6218\u6597\u6570\u636E(data);
  next.\u7269\u54C1\u680F = _.pickBy(next.\u7269\u54C1\u680F || {}, ({ \u6570\u91CF }) => Math.max(0, \u6570\u503C(\u6570\u91CF)) > 0);
  next._\u58F0\u671B\u79F0\u53F7 = \u58F0\u671B\u79F0\u53F7(next.\u58F0\u671B);
  next._\u548C\u8C10\u7B49\u7EA7 = \u548C\u8C10\u7B49\u7EA7(next.\u540E\u5BAB\u548C\u8C10\u5EA6);
  return next;
}
function recompute\u57CE\u6C60(data) {
  const next = _.cloneDeep(data);
  const base = \u57CE\u6C60\u57FA\u7840[next.\u7B49\u7EA7] ?? \u57CE\u6C60\u57FA\u7840.\u6751\u843D;
  const \u5B98\u5E9C\u6570\u91CF = (next.\u8BBE\u65BD || []).filter((item) => item === "\u5B98\u5E9C").length;
  next.\u57CE\u9632 = _.clamp(\u6570\u503C(next.\u57CE\u9632), 0, base.\u57CE\u9632\u4E0A\u9650);
  next._\u57CE\u9632\u4E0A\u9650 = base.\u57CE\u9632\u4E0A\u9650;
  next._\u9A7B\u519B\u4E0A\u9650 = base.\u9A7B\u519B\u4E0A\u9650;
  next._\u9632\u5FA1\u7CFB\u6570 = base.\u9632\u5FA1\u7CFB\u6570;
  next._\u57CE\u6C60\u9632\u5FA1\u529B = Math.floor(next.\u57CE\u9632 * base.\u9632\u5FA1\u7CFB\u6570);
  next._\u6708\u7A0E\u6536 = Math.floor(base.\u7A0E\u6536 * (1 + next.\u5546\u4E1A / 100) * (1 + next.\u6C11\u5FC3 / 200));
  next._\u6708\u4EA7\u7CAE = Math.floor(base.\u4EA7\u7CAE * (1 + next.\u519C\u4E1A / 100) * (1 + next.\u6C11\u5FC3 / 200));
  next._\u6307\u4EE4\u69FD = base.\u6307\u4EE4\u69FD + Math.min(\u5B98\u5E9C\u6570\u91CF, 2);
  return next;
}
function recompute\u519B\u961F(data, state) {
  const next = _.cloneDeep(data);
  next._\u58EB\u6C14\u7B49\u7EA7 = \u58EB\u6C14\u7B49\u7EA7(next.\u58EB\u6C14);
  next._\u75B2\u60EB\u7B49\u7EA7 = \u75B2\u60EB\u7B49\u7EA7(next.\u75B2\u60EB);
  const \u9635\u578B = \u9635\u578B\u6570\u636E[next.\u9635\u578B] ?? \u9635\u578B\u6570\u636E.\u65E0;
  next._\u9635\u578B\u653B\u51FB\u4FEE\u6B63 = \u9635\u578B.\u653B\u51FB;
  next._\u9635\u578B\u9632\u5FA1\u4FEE\u6B63 = \u9635\u578B.\u9632\u5FA1;
  const \u5C06\u9886\u540D = next.\u7EDF\u5C5E\u5C06\u9886;
  const \u5C06\u9886\u7EDF\u7387\u52A0\u503C = \u5C06\u9886\u540D ? state?.NPC?.[\u5C06\u9886\u540D]?.\u89D2\u8272\u6570\u636E?.\u516D\u7EF4._\u7EDF\u7387\u52A0\u503C ?? 0 : 0;
  const \u7EDF\u7387\u7CFB\u6570\u503C = Math.round(\u7EDF\u7387\u7CFB\u6570(\u5C06\u9886\u7EDF\u7387\u52A0\u503C) * 100) / 100;
  next._\u7EDF\u7387\u7CFB\u6570 = \u7EDF\u7387\u7CFB\u6570\u503C;
  next._\u7EFC\u5408\u6218\u529B = Math.floor(
    next.\u5175\u529B * (\u7B49\u7EA7\u7CFB\u6570[next.\u7B49\u7EA7] ?? 0.8) * (\u519B\u961F\u88C5\u5907\u7CFB\u6570[next.\u88C5\u5907\u7B49\u7EA7] ?? 1) * \u58EB\u6C14\u7CFB\u6570(next.\u58EB\u6C14) * \u75B2\u60EB\u7CFB\u6570(next.\u75B2\u60EB) * \u7EDF\u7387\u7CFB\u6570\u503C
  );
  next._\u653B\u51FB\u6218\u529B = Math.floor((next._\u7EFC\u5408\u6218\u529B ?? 0) * next._\u9635\u578B\u653B\u51FB\u4FEE\u6B63);
  next._\u9632\u5FA1\u6218\u529B = Math.floor((next._\u7EFC\u5408\u6218\u529B ?? 0) * next._\u9635\u578B\u9632\u5FA1\u4FEE\u6B63);
  return next;
}
function recompute\u52BF\u529B(data, state) {
  const next = _.cloneDeep(data);
  next.\u57CE\u6C60 = _.mapValues(next.\u57CE\u6C60 || {}, (item) => recompute\u57CE\u6C60(item));
  next.\u519B\u961F = _.mapValues(next.\u519B\u961F || {}, (item) => recompute\u519B\u961F(item, state));
  next._\u5916\u4EA4\u7B49\u7EA7 = _.mapValues(next.\u5916\u4EA4 || {}, (value) => \u5916\u4EA4\u7B49\u7EA7(value));
  const \u57CE\u6C60\u5217\u8868 = Object.values(next.\u57CE\u6C60 || {});
  next._\u6708\u603B\u7A0E\u6536 = _.sumBy(\u57CE\u6C60\u5217\u8868, (item) => item._\u6708\u7A0E\u6536 ?? 0);
  next._\u6708\u603B\u4EA7\u7CAE = _.sumBy(\u57CE\u6C60\u5217\u8868, (item) => item._\u6708\u4EA7\u7CAE ?? 0);
  const \u519B\u961F\u5217\u8868 = Object.values(next.\u519B\u961F || {});
  next._\u603B\u5175\u529B = _.sumBy(\u519B\u961F\u5217\u8868, (item) => item.\u5175\u529B ?? 0);
  next._\u603B\u6218\u529B = _.sumBy(\u519B\u961F\u5217\u8868, (item) => item._\u7EFC\u5408\u6218\u529B ?? 0);
  next._\u6708\u519B\u9977\u4F30\u7B97 = _.sumBy(\u519B\u961F\u5217\u8868, (item) => Math.ceil((item.\u5175\u529B ?? 0) / 1e3) * (\u519B\u9977\u57FA\u6570[item.\u7B49\u7EA7] ?? 40));
  next._\u6708\u7CAE\u8349\u6D88\u8017\u4F30\u7B97 = _.sumBy(\u519B\u961F\u5217\u8868, (item) => Math.ceil((item.\u5175\u529B ?? 0) / 1e3) * 10);
  return next;
}
function recompute\u52BF\u529B\u96C6\u5408(data, state) {
  return _.mapValues(data || {}, (faction) => recompute\u52BF\u529B(create\u52BF\u529B(faction), state));
}
function recompute\u5168\u5C40(state) {
  const next = _.cloneDeep(state);
  next.\u4E16\u754C = create\u4E16\u754C(next.\u4E16\u754C);
  next.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6 = next.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6.slice(-MAX_RECENT_EVENTS);
  next.\u4E3B\u89D2 = recompute\u4E3B\u89D2(next.\u4E3B\u89D2);
  next.NPC = _.mapValues(next.NPC || {}, (npc) => recomputeNPC(npc));
  next.\u52BF\u529B = recompute\u52BF\u529B\u96C6\u5408(create\u52BF\u529B\u96C6\u5408(next.\u52BF\u529B), { NPC: next.NPC });
  next.\u4EFB\u52A1 = _.pickBy(next.\u4EFB\u52A1 || {}, (task) => ["\u53EF\u63A5\u53D6", "\u8FDB\u884C\u4E2D", "\u53EF\u63D0\u4EA4"].includes(task.\u72B6\u6001));
  next.meta.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
  return next;
}

// src/storage.ts
var STATE_ROOT_KEY = "sgbz_state";
var CONTEXT_MACRO_KEY = "sgbz_context";
var MAX_SAVED_STATE_MESSAGES = 10;
function \u83B7\u53D6\u6D88\u606F\u63A5\u53E3() {
  const globalApi = globalThis;
  const windowApi = typeof window !== "undefined" ? window : void 0;
  const getChatMessages = globalApi.getChatMessages ?? windowApi?.getChatMessages ?? globalApi.TavernHelper?.getChatMessages ?? windowApi?.TavernHelper?.getChatMessages;
  const setChatMessages = globalApi.setChatMessages ?? windowApi?.setChatMessages ?? globalApi.TavernHelper?.setChatMessages ?? windowApi?.TavernHelper?.setChatMessages;
  debugLog("storage", "\u68C0\u67E5\u804A\u5929\u6D88\u606F\u63A5\u53E3", {
    hasGetChatMessages: typeof getChatMessages === "function",
    hasSetChatMessages: typeof setChatMessages === "function"
  });
  if (!getChatMessages || !setChatMessages) {
    const error = new Error("\u672A\u627E\u5230 getChatMessages / setChatMessages\uFF0C\u65E0\u6CD5\u8BFB\u5199\u697C\u5C42\u72B6\u6001");
    debugError("storage", "\u83B7\u53D6\u804A\u5929\u6D88\u606F\u63A5\u53E3\u5931\u8D25", error);
    throw error;
  }
  return { getChatMessages, setChatMessages };
}
function \u8BFB\u53D6\u6D88\u606F(messageId) {
  const messages = \u83B7\u53D6\u6D88\u606F\u63A5\u53E3().getChatMessages(messageId, { include_swipes: false }) ?? [];
  const message = Array.isArray(messages) ? messages[0] ?? null : null;
  debugLog("storage", "\u8BFB\u53D6\u5355\u6761\u6D88\u606F\u5B8C\u6210", {
    messageId,
    summary: summarizeValue(message)
  });
  return message;
}
function \u8BFB\u53D6\u6240\u6709\u6D88\u606F(\u622A\u6B62\u6D88\u606FID) {
  if (typeof \u622A\u6B62\u6D88\u606FID === "number" && \u622A\u6B62\u6D88\u606FID < 0) {
    debugLog("storage", "\u8BFB\u53D6\u6D88\u606F\u5217\u8868\u5B8C\u6210", {
      range: "empty",
      count: 0
    });
    return [];
  }
  const range = typeof \u622A\u6B62\u6D88\u606FID === "number" ? `0-${\u622A\u6B62\u6D88\u606FID}` : "0-{{lastMessageId}}";
  const messages = \u83B7\u53D6\u6D88\u606F\u63A5\u53E3().getChatMessages(range, { include_swipes: false }) ?? [];
  debugLog("storage", "\u8BFB\u53D6\u6D88\u606F\u5217\u8868\u5B8C\u6210", {
    range,
    count: messages.length
  });
  return messages;
}
function \u8BFB\u53D6\u539F\u59CB\u72B6\u6001(messageId) {
  const messages = \u8BFB\u53D6\u6240\u6709\u6D88\u606F(messageId);
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const raw = _.get(messages[index], ["data", STATE_ROOT_KEY]);
    if (!raw) continue;
    debugLog("storage", "\u8BFB\u53D6\u539F\u59CB\u72B6\u6001\u5FEB\u7167", {
      sourceMessageId: messages[index].message_id,
      summary: summarizeValue(raw)
    });
    return raw;
  }
  debugLog("storage", "\u672A\u627E\u5230\u72B6\u6001\u5FEB\u7167", { upToMessageId: messageId ?? null });
  return void 0;
}
function \u8BFB\u53D6\u4E0A\u4E0B\u6587\u5B8F(rootKey = CONTEXT_MACRO_KEY) {
  debugLog("storage", "\u697C\u5C42\u7EA7\u65B9\u6848\u4E0B\u4E0D\u518D\u6301\u4E45\u5316\u4E0A\u4E0B\u6587\u5B8F", { rootKey });
  return "";
}
function \u52A0\u8F7D\u72B6\u6001(\u622A\u6B62\u6D88\u606FID) {
  const raw = \u8BFB\u53D6\u539F\u59CB\u72B6\u6001(\u622A\u6B62\u6D88\u606FID);
  const state = recompute\u5168\u5C40(create\u521D\u59CB\u72B6\u6001(raw));
  debugLog("storage", "\u52A0\u8F7D\u72B6\u6001\u5B8C\u6210", {
    upToMessageId: \u622A\u6B62\u6D88\u606FID ?? null,
    raw: summarizeValue(raw),
    state: summarizeState(state)
  });
  return state;
}
async function \u6E05\u7406\u8FC7\u671F\u72B6\u6001\u5FEB\u7167() {
  const messages = \u8BFB\u53D6\u6240\u6709\u6D88\u606F();
  const snapshots = messages.filter((message) => _.has(message.data, STATE_ROOT_KEY));
  if (snapshots.length <= MAX_SAVED_STATE_MESSAGES) {
    debugLog("storage", "\u65E0\u9700\u6E05\u7406\u8FC7\u671F\u72B6\u6001\u5FEB\u7167", {
      snapshots: snapshots.length,
      limit: MAX_SAVED_STATE_MESSAGES
    });
    return;
  }
  const expired = snapshots.slice(0, snapshots.length - MAX_SAVED_STATE_MESSAGES);
  const patches = expired.map((message) => {
    const nextData = { ...message.data || {} };
    delete nextData[STATE_ROOT_KEY];
    return {
      message_id: message.message_id,
      data: nextData
    };
  });
  debugLog("storage", "\u51C6\u5907\u6E05\u7406\u8FC7\u671F\u72B6\u6001\u5FEB\u7167", {
    keep: MAX_SAVED_STATE_MESSAGES,
    removeCount: patches.length,
    removedMessageIds: patches.map((item) => item.message_id)
  });
  await \u83B7\u53D6\u6D88\u606F\u63A5\u53E3().setChatMessages(patches, { refresh: "none" });
  debugLog("storage", "\u8FC7\u671F\u72B6\u6001\u5FEB\u7167\u6E05\u7406\u5B8C\u6210", {
    removedMessageIds: patches.map((item) => item.message_id)
  });
}
async function \u66F4\u65B0\u6D88\u606F\u6B63\u6587(messageId, message) {
  const currentMessage = \u8BFB\u53D6\u6D88\u606F(messageId);
  if (!currentMessage) {
    throw new Error(`\u672A\u627E\u5230\u8981\u66F4\u65B0\u6B63\u6587\u7684\u6D88\u606F: ${messageId}`);
  }
  debugLog("storage", "\u51C6\u5907\u5199\u5165\u697C\u5C42\u6B63\u6587", {
    messageId,
    before: summarizeValue(currentMessage.message),
    after: summarizeValue(message)
  });
  await \u83B7\u53D6\u6D88\u606F\u63A5\u53E3().setChatMessages([{ message_id: messageId, message }], { refresh: "affected" });
  debugLog("storage", "\u697C\u5C42\u6B63\u6587\u5199\u5165\u5B8C\u6210", { messageId });
}
async function \u4FDD\u5B58\u72B6\u6001(state, messageId) {
  const next = recompute\u5168\u5C40(create\u521D\u59CB\u72B6\u6001(state));
  const currentMessage = \u8BFB\u53D6\u6D88\u606F(messageId);
  if (!currentMessage) {
    throw new Error(`\u672A\u627E\u5230\u8981\u5199\u5165\u72B6\u6001\u7684\u6D88\u606F: ${messageId}`);
  }
  const nextData = {
    ...currentMessage.data || {},
    [STATE_ROOT_KEY]: next
  };
  debugLog("storage", "\u51C6\u5907\u5199\u5165\u697C\u5C42\u72B6\u6001", {
    messageId,
    before: summarizeValue(currentMessage.data?.[STATE_ROOT_KEY]),
    next: summarizeState(next)
  });
  try {
    await \u83B7\u53D6\u6D88\u606F\u63A5\u53E3().setChatMessages([{ message_id: messageId, data: nextData }], { refresh: "none" });
    debugLog("storage", "\u697C\u5C42\u72B6\u6001\u5199\u5165\u5B8C\u6210", {
      messageId,
      after: summarizeValue(nextData[STATE_ROOT_KEY])
    });
    await \u6E05\u7406\u8FC7\u671F\u72B6\u6001\u5FEB\u7167();
  } catch (error) {
    debugError("storage", "\u697C\u5C42\u72B6\u6001\u5199\u5165\u5931\u8D25", error);
    throw error;
  }
  return next;
}
function \u4FDD\u5B58\u4E0A\u4E0B\u6587\u5B8F(content, rootKey = CONTEXT_MACRO_KEY) {
  debugLog("storage", "\u697C\u5C42\u7EA7\u65B9\u6848\u4E0B\u8DF3\u8FC7\u4E0A\u4E0B\u6587\u5B8F\u6301\u4E45\u5316", {
    rootKey,
    summary: summarizeValue(content)
  });
  return String(content || "");
}
async function \u521D\u59CB\u5316\u72B6\u6001(seed = {}, messageId) {
  return \u4FDD\u5B58\u72B6\u6001(create\u521D\u59CB\u72B6\u6001(seed), messageId);
}
async function \u66F4\u65B0\u72B6\u6001(updater, messageId) {
  const current = \u52A0\u8F7D\u72B6\u6001(messageId - 1);
  return \u4FDD\u5B58\u72B6\u6001(updater(current), messageId);
}

// src/executor.ts
var executor_exports = {};
__export(executor_exports, {
  \u6267\u884C\u547D\u4EE4: () => \u6267\u884C\u547D\u4EE4,
  \u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4: () => \u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4
});
var \u4E3B\u89D2\u8D44\u6E90\u5B57\u6BB52 = ["\u5F53\u524D\u751F\u547D\u503C", "\u5F53\u524D\u4F53\u529B\u503C", "\u58F0\u671B", "\u91D1\u94B1", "\u79EF\u5206", "\u540E\u5BAB\u548C\u8C10\u5EA6"];
function \u5408\u5E76\u5BF9\u8C61(target, patch) {
  return _.mergeWith(target, patch, (_lhs, rhs) => _.isArray(rhs) ? rhs : void 0);
}
function \u65AD\u8A00\u5B58\u5728(value, message) {
  if (!value) {
    throw new Error(message);
  }
  return value;
}
function \u5E94\u7528\u4E3B\u89D2\u8D44\u6E90\u53D8\u66F4(state, command) {
  const mode = command.mode ?? "delta";
  for (const key of \u4E3B\u89D2\u8D44\u6E90\u5B57\u6BB52) {
    const value = command.changes[key];
    if (value === void 0) continue;
    const current = \u6570\u503C(state.\u4E3B\u89D2[key]);
    state.\u4E3B\u89D2[key] = mode === "set" ? \u6570\u503C(value) : current + \u6570\u503C(value);
  }
  state.\u4E3B\u89D2 = recompute\u4E3B\u89D2(state.\u4E3B\u89D2);
}
function \u5E94\u7528\u4E16\u754C\u66F4\u65B0(state, command) {
  state.\u4E16\u754C = create\u4E16\u754C(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(state.\u4E16\u754C), command.changes));
}
function \u5E94\u7528\u8FD1\u671F\u4E8B\u4EF6(state, command) {
  state.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6.push({
    \u4E8B\u4EF6\u540D: String(command.event.\u4E8B\u4EF6\u540D || ""),
    \u7B80\u8FF0: String(command.event.\u7B80\u8FF0 || ""),
    \u65E5\u671F: String(command.event.\u65E5\u671F || "")
  });
  state.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6 = state.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6.slice(-MAX_RECENT_EVENTS);
}
function \u5E94\u7528\u4E3B\u89D2\u57FA\u7840\u66F4\u65B0(state, command) {
  state.\u4E3B\u89D2 = recompute\u4E3B\u89D2(create\u4E3B\u89D2(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(state.\u4E3B\u89D2), command.changes)));
}
function \u83B7\u53D6\u76EE\u6807\u52BF\u529B(state, factionId) {
  return \u65AD\u8A00\u5B58\u5728(state.\u52BF\u529B[factionId], `\u52BF\u529B\u4E0D\u5B58\u5728: ${factionId}`);
}
function \u5E94\u7528\u52BF\u529B\u66F4\u65B0(state, command) {
  const current = state.\u52BF\u529B[command.factionId];
  if (!current && command.createIfMissing === false) {
    throw new Error(`\u52BF\u529B\u4E0D\u5B58\u5728: ${command.factionId}`);
  }
  state.\u52BF\u529B[command.factionId] = create\u52BF\u529B(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(current ?? create\u52BF\u529B()), command.changes));
}
function \u5E94\u7528\u57CE\u6C60\u66F4\u65B0(state, command) {
  const faction = \u83B7\u53D6\u76EE\u6807\u52BF\u529B(state, command.factionId);
  const current = faction.\u57CE\u6C60[command.id];
  if (!current && command.createIfMissing === false) {
    throw new Error(`\u57CE\u6C60\u4E0D\u5B58\u5728: ${command.id}`);
  }
  const next = create\u57CE\u6C60(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(current ?? create\u57CE\u6C60()), command.data));
  faction.\u57CE\u6C60[command.id] = next;
}
function \u5E94\u7528\u57CE\u6C60\u8BBE\u65BD\u8FFD\u52A0(state, command) {
  const faction = \u83B7\u53D6\u76EE\u6807\u52BF\u529B(state, command.factionId);
  const current = \u65AD\u8A00\u5B58\u5728(faction.\u57CE\u6C60[command.id], `\u57CE\u6C60\u4E0D\u5B58\u5728: ${command.id}`);
  const set = new Set([...current.\u8BBE\u65BD || [], String(command.facility || "")].filter(Boolean));
  faction.\u57CE\u6C60[command.id] = create\u57CE\u6C60({ ...current, \u8BBE\u65BD: [...set] });
}
function \u5E94\u7528\u57CE\u6C60\u8BBE\u65BD\u79FB\u9664(state, command) {
  const faction = \u83B7\u53D6\u76EE\u6807\u52BF\u529B(state, command.factionId);
  const current = \u65AD\u8A00\u5B58\u5728(faction.\u57CE\u6C60[command.id], `\u57CE\u6C60\u4E0D\u5B58\u5728: ${command.id}`);
  faction.\u57CE\u6C60[command.id] = create\u57CE\u6C60({
    ...current,
    \u8BBE\u65BD: (current.\u8BBE\u65BD || []).filter((item) => item !== command.facility)
  });
}
function \u5E94\u7528\u519B\u961F\u66F4\u65B0(state, command) {
  const faction = \u83B7\u53D6\u76EE\u6807\u52BF\u529B(state, command.factionId);
  const current = faction.\u519B\u961F[command.id];
  if (!current && command.createIfMissing === false) {
    throw new Error(`\u519B\u961F\u4E0D\u5B58\u5728: ${command.id}`);
  }
  const next = create\u519B\u961F(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(current ?? create\u519B\u961F()), command.data));
  faction.\u519B\u961F[command.id] = next;
}
function \u5E94\u7528\u5916\u4EA4\u66F4\u65B0(state, command) {
  const faction = \u83B7\u53D6\u76EE\u6807\u52BF\u529B(state, command.factionId);
  faction.\u5916\u4EA4 = {
    ...faction.\u5916\u4EA4,
    ..._.mapValues(command.changes, (value) => Math.max(0, Math.min(100, \u6570\u503C(value))))
  };
}
function \u5E94\u7528\u653F\u7B56\u66F4\u65B0(state, command) {
  const faction = \u83B7\u53D6\u76EE\u6807\u52BF\u529B(state, command.factionId);
  faction.\u653F\u7B56 = create\u653F\u7B56(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(faction.\u653F\u7B56), command.changes));
}
function \u5E94\u7528NPC\u66F4\u65B0(state, command) {
  const current = state.NPC[command.id];
  if (!current && command.createIfMissing === false) {
    throw new Error(`NPC \u4E0D\u5B58\u5728: ${command.id}`);
  }
  const next = createNPC(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(current ?? createNPC()), command.data));
  state.NPC[command.id] = recomputeNPC(next);
}
function \u5E94\u7528NPC\u5173\u7CFB\u66F4\u65B0(state, command) {
  const current = \u65AD\u8A00\u5B58\u5728(state.NPC[command.id], `NPC \u4E0D\u5B58\u5728: ${command.id}`);
  const next = _.cloneDeep(current);
  if (command.\u597D\u611F !== void 0) {
    next.\u597D\u611F = (command.mode ?? "delta") === "set" ? \u6570\u503C(command.\u597D\u611F) : next.\u597D\u611F + \u6570\u503C(command.\u597D\u611F);
  }
  if (command.\u7F81\u7ECA) {
    next.\u7F81\u7ECA = {
      ...next.\u7F81\u7ECA,
      ..._.mapValues(command.\u7F81\u7ECA, (value) => String(value ?? ""))
    };
  }
  state.NPC[command.id] = recomputeNPC(createNPC(next));
}
function \u5E94\u7528\u4EFB\u52A1\u66F4\u65B0(state, command) {
  const current = state.\u4EFB\u52A1[command.id];
  if (!current && command.createIfMissing === false) {
    throw new Error(`\u4EFB\u52A1\u4E0D\u5B58\u5728: ${command.id}`);
  }
  const next = create\u4EFB\u52A1(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(current ?? create\u4EFB\u52A1()), command.data));
  state.\u4EFB\u52A1[command.id] = next;
}
function \u5E94\u7528\u4EFB\u52A1\u72B6\u6001(state, command) {
  const current = \u65AD\u8A00\u5B58\u5728(state.\u4EFB\u52A1[command.id], `\u4EFB\u52A1\u4E0D\u5B58\u5728: ${command.id}`);
  const next = _.cloneDeep(current);
  next.\u72B6\u6001 = command.\u72B6\u6001;
  if (command.\u76EE\u6807) {
    for (const [targetId, patch] of Object.entries(command.\u76EE\u6807)) {
      next.\u76EE\u6807[targetId] = {
        ...next.\u76EE\u6807[targetId] ?? { \u7C7B\u578B: "\u4E3B\u8981", \u72B6\u6001: "\u672A\u5B8C\u6210", \u63CF\u8FF0: "", \u79EF\u5206: 0, \u5176\u4ED6\u5956\u52B1: "" },
        ...patch
      };
    }
  }
  state.\u4EFB\u52A1[command.id] = create\u4EFB\u52A1(next);
}
function \u5E94\u7528\u5546\u54C1\u66F4\u65B0(state, command) {
  const current = state.\u5546\u57CE[command.id];
  if (!current && command.createIfMissing === false) {
    throw new Error(`\u5546\u54C1\u4E0D\u5B58\u5728: ${command.id}`);
  }
  const next = create\u5546\u54C1\u6761\u76EE(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(current ?? create\u5546\u54C1\u6761\u76EE()), command.data));
  state.\u5546\u57CE[command.id] = next;
}
function \u6267\u884C\u547D\u4EE4(state, commandInput) {
  debugInfo("executor", "\u5F00\u59CB\u6267\u884C\u547D\u4EE4", {
    input: summarizeValue(commandInput),
    before: summarizeState(state)
  });
  try {
    const commands = \u89E3\u6790\u547D\u4EE4\u8F93\u5165(commandInput);
    const next = _.cloneDeep(state);
    for (const [index, command] of commands.entries()) {
      debugLog("executor", "\u6267\u884C\u5355\u6761\u547D\u4EE4", {
        index,
        type: command.type,
        id: "id" in command ? command.id : void 0,
        factionId: "factionId" in command ? command.factionId : void 0
      });
      switch (command.type) {
        case "UpdateWorld":
          \u5E94\u7528\u4E16\u754C\u66F4\u65B0(next, command);
          break;
        case "AppendRecentEvent":
          \u5E94\u7528\u8FD1\u671F\u4E8B\u4EF6(next, command);
          break;
        case "UpdatePlayerBase":
          \u5E94\u7528\u4E3B\u89D2\u57FA\u7840\u66F4\u65B0(next, command);
          break;
        case "AdjustPlayerResource":
          \u5E94\u7528\u4E3B\u89D2\u8D44\u6E90\u53D8\u66F4(next, command);
          break;
        case "UpdateFaction":
          \u5E94\u7528\u52BF\u529B\u66F4\u65B0(next, command);
          break;
        case "UpsertCity":
          \u5E94\u7528\u57CE\u6C60\u66F4\u65B0(next, command);
          break;
        case "AddCityFacility":
          \u5E94\u7528\u57CE\u6C60\u8BBE\u65BD\u8FFD\u52A0(next, command);
          break;
        case "RemoveCityFacility":
          \u5E94\u7528\u57CE\u6C60\u8BBE\u65BD\u79FB\u9664(next, command);
          break;
        case "RemoveCity":
          delete \u83B7\u53D6\u76EE\u6807\u52BF\u529B(next, command.factionId).\u57CE\u6C60[command.id];
          break;
        case "UpsertArmy":
          \u5E94\u7528\u519B\u961F\u66F4\u65B0(next, command);
          break;
        case "RemoveArmy":
          delete \u83B7\u53D6\u76EE\u6807\u52BF\u529B(next, command.factionId).\u519B\u961F[command.id];
          break;
        case "UpdateDiplomacy":
          \u5E94\u7528\u5916\u4EA4\u66F4\u65B0(next, command);
          break;
        case "UpdatePolicy":
          \u5E94\u7528\u653F\u7B56\u66F4\u65B0(next, command);
          break;
        case "UpsertNpc":
          \u5E94\u7528NPC\u66F4\u65B0(next, command);
          break;
        case "UpdateNpcRelation":
          \u5E94\u7528NPC\u5173\u7CFB\u66F4\u65B0(next, command);
          break;
        case "RemoveNpc":
          delete next.NPC[command.id];
          break;
        case "UpsertQuest":
          \u5E94\u7528\u4EFB\u52A1\u66F4\u65B0(next, command);
          break;
        case "UpdateQuestState":
          \u5E94\u7528\u4EFB\u52A1\u72B6\u6001(next, command);
          break;
        case "RemoveQuest":
          delete next.\u4EFB\u52A1[command.id];
          break;
        case "UpsertShopItem":
          \u5E94\u7528\u5546\u54C1\u66F4\u65B0(next, command);
          break;
        case "RemoveShopItem":
          delete next.\u5546\u57CE[command.id];
          break;
      }
      debugLog("executor", "\u5355\u6761\u547D\u4EE4\u6267\u884C\u540E\u72B6\u6001\u6458\u8981", {
        index,
        type: command.type,
        state: summarizeState(next)
      });
    }
    const finalState = recompute\u5168\u5C40(next);
    debugInfo("executor", "\u547D\u4EE4\u6267\u884C\u5B8C\u6210", {
      applied: commands.length,
      after: summarizeState(finalState)
    });
    return {
      state: finalState,
      applied: commands
    };
  } catch (error) {
    debugError("executor", "\u6267\u884C\u547D\u4EE4\u5931\u8D25", error);
    throw error;
  }
}
async function \u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4(state, commandInput, messageId) {
  debugInfo("executor", "\u5F00\u59CB\u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4", { messageId });
  const result = \u6267\u884C\u547D\u4EE4(state, commandInput);
  const savedState = await \u4FDD\u5B58\u72B6\u6001(result.state, messageId);
  debugInfo("executor", "\u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4\u5B8C\u6210", {
    messageId,
    applied: result.applied.length,
    state: summarizeState(savedState)
  });
  return {
    ...result,
    state: savedState
  };
}

// src/context.ts
var context_exports = {};
__export(context_exports, {
  MAX_CONTEXT_NPCS: () => MAX_CONTEXT_NPCS,
  MAX_CONTEXT_QUESTS: () => MAX_CONTEXT_QUESTS,
  MAX_CONTEXT_SHOP_ITEMS: () => MAX_CONTEXT_SHOP_ITEMS,
  \u6784\u5EFA\u5B8F\u6CE8\u5165\u6587\u672C: () => \u6784\u5EFA\u5B8F\u6CE8\u5165\u6587\u672C,
  \u6784\u5EFA\u6CE8\u5165\u6587\u672C: () => \u6784\u5EFA\u6CE8\u5165\u6587\u672C,
  \u6784\u5EFA\u6CE8\u5165\u89C6\u56FE: () => \u6784\u5EFA\u6CE8\u5165\u89C6\u56FE,
  \u9009\u62E9\u5546\u57CE\u6761\u76EE: () => \u9009\u62E9\u5546\u57CE\u6761\u76EE,
  \u9009\u62E9\u5F53\u524D\u5730\u70B9\u76F8\u5173NPC: () => \u9009\u62E9\u5F53\u524D\u5730\u70B9\u76F8\u5173NPC,
  \u9009\u62E9\u8FDB\u884C\u4E2D\u4EFB\u52A1: () => \u9009\u62E9\u8FDB\u884C\u4E2D\u4EFB\u52A1
});
var MAX_CONTEXT_NPCS = 8;
var MAX_CONTEXT_QUESTS = 8;
var MAX_CONTEXT_SHOP_ITEMS = 12;
function \u662F\u5426\u5F53\u524D\u5730\u70B9\u76F8\u5173(npc, \u5F53\u524D\u5730\u70B9) {
  if (!\u5F53\u524D\u5730\u70B9) {
    return true;
  }
  if (npc.\u6B66\u5C06\u4FE1\u606F?.\u9A7B\u624E\u5730 === \u5F53\u524D\u5730\u70B9) {
    return true;
  }
  return String(npc.\u5B9A\u4F4D || "").includes(\u5F53\u524D\u5730\u70B9) || String(npc.\u7B80\u8FF0 || "").includes(\u5F53\u524D\u5730\u70B9);
}
function \u9009\u62E9\u5F53\u524D\u5730\u70B9\u76F8\u5173NPC(state, limit = MAX_CONTEXT_NPCS) {
  const \u5F53\u524D\u5730\u70B9 = state.\u4E16\u754C.\u5F53\u524D\u5730\u70B9;
  const entries = Object.entries(state.NPC || {});
  const matched = entries.filter(([, npc]) => \u662F\u5426\u5F53\u524D\u5730\u70B9\u76F8\u5173(npc, \u5F53\u524D\u5730\u70B9));
  const selected = (matched.length > 0 ? matched : entries).slice(0, limit);
  return Object.fromEntries(selected);
}
function \u9009\u62E9\u8FDB\u884C\u4E2D\u4EFB\u52A1(state, limit = MAX_CONTEXT_QUESTS) {
  const selected = Object.entries(state.\u4EFB\u52A1 || {}).filter(([, task]) => ["\u8FDB\u884C\u4E2D", "\u53EF\u63D0\u4EA4", "\u53EF\u63A5\u53D6"].includes(task.\u72B6\u6001));
  return Object.fromEntries(selected.slice(0, limit));
}
function \u9009\u62E9\u5546\u57CE\u6761\u76EE(state, limit = MAX_CONTEXT_SHOP_ITEMS) {
  return Object.fromEntries(Object.entries(state.\u5546\u57CE || {}).slice(0, limit));
}
function \u9009\u62E9\u5F53\u524D\u52BF\u529B(state) {
  const entries = Object.entries(state.\u52BF\u529B || {});
  if (entries.length === 0) {
    return null;
  }
  const [id, \u6570\u636E] = entries[0];
  return { id, \u6570\u636E };
}
function \u6784\u5EFA\u6CE8\u5165\u89C6\u56FE(state) {
  return {
    \u4E16\u754C: _.cloneDeep(state.\u4E16\u754C),
    \u4E3B\u89D2: _.cloneDeep(state.\u4E3B\u89D2),
    \u52BF\u529B: _.cloneDeep(state.\u52BF\u529B),
    \u5F53\u524D\u52BF\u529B: _.cloneDeep(\u9009\u62E9\u5F53\u524D\u52BF\u529B(state)),
    \u5F53\u524D\u5730\u70B9\u76F8\u5173NPC: _.cloneDeep(\u9009\u62E9\u5F53\u524D\u5730\u70B9\u76F8\u5173NPC(state)),
    \u8FDB\u884C\u4E2D\u4EFB\u52A1: _.cloneDeep(\u9009\u62E9\u8FDB\u884C\u4E2D\u4EFB\u52A1(state)),
    \u5546\u57CE: _.cloneDeep(\u9009\u62E9\u5546\u57CE\u6761\u76EE(state))
  };
}
function \u6784\u5EFA\u6CE8\u5165\u6587\u672C(state, space = 2) {
  return [
    "[\u4E09\u56FD\u9738\u4E3B\u7CFB\u7EDF\u72B6\u6001]",
    "\u4EE5\u4E0B\u72B6\u6001\u4E3A\u53EA\u8BFB\u4E0A\u4E0B\u6587\uFF1B\u4E0B\u5212\u7EBF\u5B57\u6BB5\u4EE3\u8868\u53EA\u8BFB\u6D3E\u751F\u5B57\u6BB5\uFF0CAI \u4E0D\u53EF\u76F4\u63A5\u4FEE\u6539\u3002",
    JSON.stringify(\u6784\u5EFA\u6CE8\u5165\u89C6\u56FE(state), null, space)
  ].join("\n");
}
function \u6784\u5EFA\u5B8F\u6CE8\u5165\u6587\u672C(state, space = 2) {
  return \u6784\u5EFA\u6CE8\u5165\u6587\u672C(state, space);
}

// src/protocol.ts
var protocol_exports = {};
__export(protocol_exports, {
  ANALYSIS_END: () => ANALYSIS_END,
  ANALYSIS_START: () => ANALYSIS_START,
  COMMAND_BLOCK_END: () => COMMAND_BLOCK_END,
  COMMAND_BLOCK_START: () => COMMAND_BLOCK_START,
  PLAYER_OPTIONS_END: () => PLAYER_OPTIONS_END,
  PLAYER_OPTIONS_START: () => PLAYER_OPTIONS_START,
  UPDATE_VARIABLE_END: () => UPDATE_VARIABLE_END,
  UPDATE_VARIABLE_START: () => UPDATE_VARIABLE_START,
  \u5305\u88C5\u547D\u4EE4\u5757: () => \u5305\u88C5\u547D\u4EE4\u5757,
  \u63D0\u53D6\u547D\u4EE4\u5757: () => \u63D0\u53D6\u547D\u4EE4\u5757,
  \u63D0\u53D6\u73A9\u5BB6\u9009\u9879\u5757: () => \u63D0\u53D6\u73A9\u5BB6\u9009\u9879\u5757,
  \u79FB\u9664\u73A9\u5BB6\u9009\u9879\u5757: () => \u79FB\u9664\u73A9\u5BB6\u9009\u9879\u5757,
  \u89E3\u6790\u547D\u4EE4\u5757: () => \u89E3\u6790\u547D\u4EE4\u5757,
  \u89E3\u6790\u73A9\u5BB6\u9009\u9879\u5757: () => \u89E3\u6790\u73A9\u5BB6\u9009\u9879\u5757
});
var UPDATE_VARIABLE_START = "<UpdateVariable>";
var UPDATE_VARIABLE_END = "</UpdateVariable>";
var ANALYSIS_START = "<Analysis>";
var ANALYSIS_END = "</Analysis>";
var COMMAND_BLOCK_START = "<Commands>";
var COMMAND_BLOCK_END = "</Commands>";
var PLAYER_OPTIONS_START = "<PlayerOptions>";
var PLAYER_OPTIONS_END = "</PlayerOptions>";
function \u5305\u88C5\u547D\u4EE4\u5757(commands, analysis = "", space = 2) {
  const list = Array.isArray(commands) ? commands : [commands];
  return [
    UPDATE_VARIABLE_START,
    ANALYSIS_START,
    analysis,
    ANALYSIS_END,
    COMMAND_BLOCK_START,
    JSON.stringify(list, null, space),
    COMMAND_BLOCK_END,
    UPDATE_VARIABLE_END
  ].join("\n");
}
function \u63D0\u53D6\u66F4\u65B0\u5757(replyText) {
  const start = replyText.indexOf(UPDATE_VARIABLE_START);
  const end = replyText.indexOf(UPDATE_VARIABLE_END);
  debugLog("protocol", "\u626B\u63CF UpdateVariable \u5305\u88C5", {
    hasStart: start >= 0,
    hasEnd: end >= 0,
    reply: summarizeValue(replyText)
  });
  if (start < 0 || end < 0 || end < start) {
    return null;
  }
  const block = replyText.slice(start + UPDATE_VARIABLE_START.length, end).trim();
  debugLog("protocol", "\u63D0\u53D6\u5230 UpdateVariable \u5185\u5BB9", summarizeValue(block));
  return block;
}
function \u63D0\u53D6\u73A9\u5BB6\u9009\u9879\u5757(replyText) {
  const start = replyText.indexOf(PLAYER_OPTIONS_START);
  const end = replyText.indexOf(PLAYER_OPTIONS_END);
  debugLog("protocol", "\u626B\u63CF PlayerOptions \u5305\u88C5", {
    hasStart: start >= 0,
    hasEnd: end >= 0,
    reply: summarizeValue(replyText)
  });
  if (start < 0 || end < 0 || end < start) {
    return null;
  }
  const block = replyText.slice(start + PLAYER_OPTIONS_START.length, end).trim();
  debugLog("protocol", "\u63D0\u53D6\u5230 PlayerOptions \u5185\u5BB9", summarizeValue(block));
  return block;
}
function \u63D0\u53D6\u547D\u4EE4\u5757(replyText) {
  const block = \u63D0\u53D6\u66F4\u65B0\u5757(replyText);
  if (!block) {
    debugLog("protocol", "\u672A\u63D0\u53D6\u5230 UpdateVariable \u5185\u5BB9");
    return null;
  }
  const start = block.indexOf(COMMAND_BLOCK_START);
  const end = block.indexOf(COMMAND_BLOCK_END);
  debugLog("protocol", "\u626B\u63CF Commands \u5305\u88C5", {
    hasStart: start >= 0,
    hasEnd: end >= 0,
    block: summarizeValue(block)
  });
  if (start < 0 || end < 0 || end < start) {
    return null;
  }
  const commandsText = block.slice(start + COMMAND_BLOCK_START.length, end).trim();
  debugLog("protocol", "\u63D0\u53D6\u5230 Commands \u5185\u5BB9", summarizeValue(commandsText));
  return commandsText;
}
function \u89E3\u6790\u547D\u4EE4\u5757(replyText) {
  const commandsText = \u63D0\u53D6\u547D\u4EE4\u5757(replyText);
  if (!commandsText) {
    debugLog("protocol", "\u672A\u627E\u5230\u53EF\u89E3\u6790\u7684\u547D\u4EE4\u5757");
    return {
      commandsText: null,
      commands: [],
      replyText
    };
  }
  try {
    const parsed = JSON.parse(commandsText);
    const commands = Array.isArray(parsed) ? parsed : [parsed];
    debugLog("protocol", "\u547D\u4EE4\u5757 JSON \u89E3\u6790\u6210\u529F", {
      count: commands.length,
      firstType: commands[0]?.type ?? null
    });
    return {
      commandsText,
      commands,
      replyText
    };
  } catch (error) {
    debugError("protocol", "\u547D\u4EE4\u5757 JSON \u89E3\u6790\u5931\u8D25", error);
    throw error;
  }
}
function \u79FB\u9664\u73A9\u5BB6\u9009\u9879\u5757(replyText) {
  return String(replyText || "").replace(/\s*<PlayerOptions>[\s\S]*?<\/PlayerOptions>\s*/gi, "\n").trim();
}
function \u89E3\u6790\u73A9\u5BB6\u9009\u9879\u5757(replyText) {
  const optionsText = \u63D0\u53D6\u73A9\u5BB6\u9009\u9879\u5757(replyText);
  if (!optionsText) {
    debugLog("protocol", "\u672A\u627E\u5230\u53EF\u89E3\u6790\u7684\u73A9\u5BB6\u9009\u9879\u5757");
    return [];
  }
  try {
    const parsed = JSON.parse(optionsText);
    const list = Array.isArray(parsed) ? parsed : [parsed];
    const options = list.filter((item) => _.isPlainObject(item)).map((item) => ({ text: String(item.text || "").trim() })).filter((item) => Boolean(item.text));
    debugLog("protocol", "\u73A9\u5BB6\u9009\u9879\u5757 JSON \u89E3\u6790\u6210\u529F", {
      count: options.length,
      preview: options.slice(0, 3)
    });
    return options;
  } catch (error) {
    debugError("protocol", "\u73A9\u5BB6\u9009\u9879\u5757 JSON \u89E3\u6790\u5931\u8D25\uFF0C\u5DF2\u5FFD\u7565\u8BE5\u5757", error);
    return [];
  }
}

// src/bridge.ts
var bridge_exports = {};
__export(bridge_exports, {
  appendReplyDecorators: () => appendReplyDecorators,
  buildContextMacroText: () => buildContextMacroText,
  buildInjectedContext: () => buildInjectedContext,
  buildInjectedView: () => buildInjectedView,
  extractAndApplyCommands: () => extractAndApplyCommands,
  extractApplyAndSaveCommands: () => extractApplyAndSaveCommands,
  extractCommands: () => extractCommands,
  handleAssistantReply: () => handleAssistantReply,
  refreshContextMacro: () => refreshContextMacro,
  refreshContextMacroFromStorage: () => refreshContextMacroFromStorage
});
function buildInjectedContext(state) {
  return \u6784\u5EFA\u6CE8\u5165\u6587\u672C(state);
}
function buildInjectedView(state) {
  return \u6784\u5EFA\u6CE8\u5165\u89C6\u56FE(state);
}
function buildContextMacroText(state) {
  return \u6784\u5EFA\u5B8F\u6CE8\u5165\u6587\u672C(state);
}
function appendReplyDecorators(replyText, state, playerOptions = [], messageId) {
  void state;
  void playerOptions;
  void messageId;
  return String(replyText || "").trim();
}
function refreshContextMacro(state, macroKey = CONTEXT_MACRO_KEY) {
  debugLog("bridge", "\u5237\u65B0\u4E0A\u4E0B\u6587\u5B8F", {
    macroKey,
    state: summarizeState(state)
  });
  return \u4FDD\u5B58\u4E0A\u4E0B\u6587\u5B8F(buildContextMacroText(state), macroKey);
}
function refreshContextMacroFromStorage(messageId, macroKey = CONTEXT_MACRO_KEY) {
  debugLog("bridge", "\u4ECE\u6700\u65B0\u697C\u5C42\u5FEB\u7167\u5237\u65B0\u4E0A\u4E0B\u6587\u5B8F", { messageId: messageId ?? null, macroKey });
  return refreshContextMacro(\u52A0\u8F7D\u72B6\u6001(messageId), macroKey);
}
function extractCommands(replyText) {
  debugLog("bridge", "\u5F00\u59CB\u4ECE\u56DE\u590D\u63D0\u53D6\u547D\u4EE4\u4E0E\u9009\u9879", summarizeValue(replyText));
  try {
    const parsed = \u89E3\u6790\u547D\u4EE4\u5757(replyText);
    const commands = parsed.commandsText ? \u89E3\u6790\u547D\u4EE4\u8F93\u5165(parsed.commands) : [];
    const playerOptions = \u89E3\u6790\u73A9\u5BB6\u9009\u9879\u5757(parsed.replyText);
    const cleanedReplyText = \u79FB\u9664\u73A9\u5BB6\u9009\u9879\u5757(parsed.replyText);
    debugInfo("bridge", "\u547D\u4EE4\u4E0E\u9009\u9879\u63D0\u53D6\u5B8C\u6210", {
      hasCommandsText: Boolean(parsed.commandsText),
      commandsCount: commands.length,
      playerOptionsCount: playerOptions.length,
      cleanedReply: summarizeValue(cleanedReplyText)
    });
    return {
      commandsText: parsed.commandsText,
      commands,
      playerOptions,
      cleanedReplyText
    };
  } catch (error) {
    debugError("bridge", "\u63D0\u53D6\u547D\u4EE4\u5931\u8D25", error);
    throw error;
  }
}
function extractAndApplyCommands(replyText, state) {
  debugLog("bridge", "\u5F00\u59CB\u63D0\u53D6\u5E76\u5E94\u7528\u547D\u4EE4", { state: summarizeState(state) });
  const extracted = extractCommands(replyText);
  if (extracted.commands.length === 0) {
    debugInfo("bridge", "\u672A\u63D0\u53D6\u5230\u547D\u4EE4\uFF0C\u8DF3\u8FC7\u6267\u884C");
    return {
      state: _.cloneDeep(state),
      applied: [],
      commandsText: null,
      playerOptions: extracted.playerOptions,
      cleanedReplyText: extracted.cleanedReplyText
    };
  }
  const result = \u6267\u884C\u547D\u4EE4(state, extracted.commands);
  debugInfo("bridge", "\u63D0\u53D6\u5E76\u5E94\u7528\u547D\u4EE4\u5B8C\u6210", {
    applied: result.applied.length,
    state: summarizeState(result.state)
  });
  return {
    ...result,
    commandsText: extracted.commandsText,
    playerOptions: extracted.playerOptions,
    cleanedReplyText: extracted.cleanedReplyText
  };
}
async function extractApplyAndSaveCommands(replyText, state, messageId, macroKey = CONTEXT_MACRO_KEY, refreshMacroOnNoCommands = true) {
  debugLog("bridge", "\u5F00\u59CB\u63D0\u53D6\u3001\u5E94\u7528\u5E76\u4FDD\u5B58\u547D\u4EE4", {
    messageId,
    macroKey,
    state: summarizeState(state)
  });
  const extracted = extractCommands(replyText);
  debugLog("bridge", "\u63D0\u53D6\u3001\u5E94\u7528\u5E76\u4FDD\u5B58\u547D\u4EE4\u63D0\u53D6\u7ED3\u679C", {
    messageId,
    macroKey,
    hasCommandsText: Boolean(extracted.commandsText),
    commandsCount: extracted.commands.length,
    playerOptionsCount: extracted.playerOptions.length
  });
  if (extracted.commands.length === 0) {
    debugInfo("bridge", refreshMacroOnNoCommands ? "\u672A\u63D0\u53D6\u5230\u547D\u4EE4\uFF0C\u4EC5\u5237\u65B0\u4E0A\u4E0B\u6587\u5B8F" : "\u672A\u63D0\u53D6\u5230\u547D\u4EE4\uFF0C\u4EC5\u8BB0\u5F55\u65E5\u5FD7", {
      macroKey,
      refreshMacroOnNoCommands
    });
    await \u66F4\u65B0\u6D88\u606F\u6B63\u6587(messageId, appendReplyDecorators(extracted.cleanedReplyText, state, extracted.playerOptions, messageId));
    if (refreshMacroOnNoCommands) {
      refreshContextMacro(state, macroKey);
    }
    return {
      state: _.cloneDeep(state),
      applied: [],
      commandsText: null,
      playerOptions: extracted.playerOptions,
      cleanedReplyText: extracted.cleanedReplyText
    };
  }
  const result = await \u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4(state, extracted.commands, messageId);
  await \u66F4\u65B0\u6D88\u606F\u6B63\u6587(messageId, appendReplyDecorators(extracted.cleanedReplyText, result.state, extracted.playerOptions, messageId));
  refreshContextMacro(result.state, macroKey);
  debugInfo("bridge", "\u63D0\u53D6\u3001\u5E94\u7528\u5E76\u4FDD\u5B58\u547D\u4EE4\u5B8C\u6210", {
    messageId,
    macroKey,
    applied: result.applied.length,
    playerOptionsCount: extracted.playerOptions.length,
    state: summarizeState(result.state)
  });
  return {
    ...result,
    commandsText: extracted.commandsText,
    playerOptions: extracted.playerOptions,
    cleanedReplyText: extracted.cleanedReplyText
  };
}
async function handleAssistantReply(replyText, options = {}) {
  const { messageId, macroKey = CONTEXT_MACRO_KEY, refreshMacroOnNoCommands = false } = options;
  debugInfo("bridge", "\u5F00\u59CB\u5904\u7406 AI \u56DE\u590D", {
    messageId: messageId ?? null,
    macroKey,
    refreshMacroOnNoCommands,
    reply: summarizeValue(replyText)
  });
  try {
    if (typeof messageId !== "number") {
      throw new Error("\u5904\u7406 AI \u56DE\u590D\u65F6\u5FC5\u987B\u63D0\u4F9B\u76EE\u6807 messageId");
    }
    const state = \u52A0\u8F7D\u72B6\u6001(messageId - 1);
    const result = await extractApplyAndSaveCommands(replyText, state, messageId, macroKey, refreshMacroOnNoCommands);
    debugInfo("bridge", "AI \u56DE\u590D\u5904\u7406\u5B8C\u6210", {
      messageId,
      macroKey,
      applied: result.applied.length,
      hasCommandsText: Boolean(result.commandsText),
      state: summarizeState(result.state)
    });
    return result;
  } catch (error) {
    debugError("bridge", "\u5904\u7406 AI \u56DE\u590D\u5931\u8D25", error);
    throw error;
  }
}

// src/macro.ts
var macro_exports = {};
__export(macro_exports, {
  SGBZ_CONTEXT_MACRO_REGEX: () => SGBZ_CONTEXT_MACRO_REGEX,
  registerSgbzMacros: () => registerSgbzMacros,
  renderSgbzContextMacro: () => renderSgbzContextMacro,
  unregisterSgbzMacros: () => unregisterSgbzMacros
});
var SGBZ_CONTEXT_MACRO_REGEX = /\{\{sgbz_context\}\}/gi;
var \u5DF2\u6CE8\u518C\u5B8F = [];
function \u83B7\u53D6\u5B8F\u63A5\u53E3() {
  const globalScope = globalThis;
  const globalApi = typeof globalScope.registerMacroLike === "function" ? {
    registerMacroLike: globalScope.registerMacroLike,
    unregisterMacroLike: typeof globalScope.unregisterMacroLike === "function" ? globalScope.unregisterMacroLike : void 0
  } : void 0;
  const helperApi = window.TavernHelper;
  const api = globalApi?.registerMacroLike ? globalApi : helperApi;
  if (!api?.registerMacroLike) {
    throw new Error("\u672A\u627E\u5230 registerMacroLike\uFF0C\u65E0\u6CD5\u6CE8\u518C\u4E09\u56FD\u9738\u4E3B\u7CFB\u7EDF\u5B8F");
  }
  return {
    registerMacroLike: api.registerMacroLike,
    unregisterMacroLike: api.unregisterMacroLike
  };
}
function renderSgbzContextMacro(messageId) {
  return buildInjectedContext(\u52A0\u8F7D\u72B6\u6001(messageId));
}
function unregisterSgbzMacros() {
  const api = \u83B7\u53D6\u5B8F\u63A5\u53E3();
  for (const macro of \u5DF2\u6CE8\u518C\u5B8F) {
    macro.unregister();
    api.unregisterMacroLike?.(macro.regex);
  }
  \u5DF2\u6CE8\u518C\u5B8F = [];
}
function registerSgbzMacros() {
  unregisterSgbzMacros();
  const api = \u83B7\u53D6\u5B8F\u63A5\u53E3();
  const entry = api.registerMacroLike(SGBZ_CONTEXT_MACRO_REGEX, (context) => renderSgbzContextMacro(context.message_id));
  \u5DF2\u6CE8\u518C\u5B8F.push({ regex: SGBZ_CONTEXT_MACRO_REGEX, unregister: entry.unregister });
}

// src/runtime.ts
var runtime_exports = {};
__export(runtime_exports, {
  clearPlayerOptionsQuickReplies: () => clearPlayerOptionsQuickReplies,
  clearPlayerOptionsView: () => clearPlayerOptionsView,
  handlePlayerOptionClick: () => handlePlayerOptionClick,
  rehydratePlayerOptionsQuickRepliesFromLatestMessage: () => rehydratePlayerOptionsQuickRepliesFromLatestMessage,
  setupAssistantReplyHook: () => setupAssistantReplyHook,
  setupChatChangedHook: () => setupChatChangedHook,
  setupDebugLogToggleButtonHook: () => setupDebugLogToggleButtonHook,
  setupDebugParseButtonHook: () => setupDebugParseButtonHook,
  setupSystemPanelToggleButtonHook: () => setupSystemPanelToggleButtonHook,
  setupVuePanelToggleButtonHook: () => setupVuePanelToggleButtonHook,
  syncPlayerOptionsQuickReplies: () => syncPlayerOptionsQuickReplies,
  teardownAssistantReplyHook: () => teardownAssistantReplyHook,
  teardownChatChangedHook: () => teardownChatChangedHook,
  teardownDebugLogToggleButtonHook: () => teardownDebugLogToggleButtonHook,
  teardownDebugParseButtonHook: () => teardownDebugParseButtonHook,
  teardownVuePanelToggleButtonHook: () => teardownVuePanelToggleButtonHook,
  toggleSystemPanel: () => toggleSystemPanel,
  toggleVuePanel: () => toggleVuePanel,
  updatePlayerOptionsView: () => updatePlayerOptionsView
});

// src/dom-host.ts
var dom_host_exports = {};
__export(dom_host_exports, {
  getHostDocument: () => getHostDocument,
  getHostWindow: () => getHostWindow
});
function getHostDocument() {
  if (typeof document === "undefined") {
    throw new Error("document is not available");
  }
  try {
    if (typeof parent !== "undefined" && parent && parent !== window && parent.document) {
      return parent.document;
    }
  } catch {
  }
  return document;
}
function getHostWindow() {
  try {
    if (typeof parent !== "undefined" && parent && parent !== window) {
      return parent;
    }
  } catch {
  }
  return globalThis;
}

// node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map2 = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(",")) map2[key] = 1;
  return (val) => val in map2;
}
var EMPTY_OBJ = true ? Object.freeze({}) : {};
var EMPTY_ARR = true ? Object.freeze([]) : [];
var NOOP = () => {
};
var NO = () => false;
var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
(key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
var isModelListener = (key) => key.startsWith("onUpdate:");
var extend = Object.assign;
var remove = (arr, el) => {
  const i = arr.indexOf(el);
  if (i > -1) {
    arr.splice(i, 1);
  }
};
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key) => hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val) => toTypeString(val) === "[object Map]";
var isSet = (val) => toTypeString(val) === "[object Set]";
var isDate = (val) => toTypeString(val) === "[object Date]";
var isFunction = (val) => typeof val === "function";
var isString = (val) => typeof val === "string";
var isSymbol = (val) => typeof val === "symbol";
var isObject = (val) => val !== null && typeof val === "object";
var isPromise = (val) => {
  return (isObject(val) || isFunction(val)) && isFunction(val.then) && isFunction(val.catch);
};
var objectToString = Object.prototype.toString;
var toTypeString = (value) => objectToString.call(value);
var toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
var isPlainObject2 = (val) => toTypeString(val) === "[object Object]";
var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var isReservedProp = /* @__PURE__ */ makeMap(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
);
var isBuiltInDirective = /* @__PURE__ */ makeMap(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
);
var cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return ((str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  });
};
var camelizeRE = /-\w/g;
var camelize = cacheStringFunction(
  (str) => {
    return str.replace(camelizeRE, (c) => c.slice(1).toUpperCase());
  }
);
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction(
  (str) => str.replace(hyphenateRE, "-$1").toLowerCase()
);
var capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
var toHandlerKey = cacheStringFunction(
  (str) => {
    const s = str ? `on${capitalize(str)}` : ``;
    return s;
  }
);
var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
var invokeArrayFns = (fns, ...arg) => {
  for (let i = 0; i < fns.length; i++) {
    fns[i](...arg);
  }
};
var def = (obj, key, value, writable = false) => {
  Object.defineProperty(obj, key, {
    configurable: true,
    enumerable: false,
    writable,
    value
  });
};
var looseToNumber = (val) => {
  const n = parseFloat(val);
  return isNaN(n) ? val : n;
};
var _globalThis;
var getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
function normalizeStyle(value) {
  if (isArray(value)) {
    const res = {};
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
      if (normalized) {
        for (const key in normalized) {
          res[key] = normalized[key];
        }
      }
    }
    return res;
  } else if (isString(value) || isObject(value)) {
    return value;
  }
}
var listDelimiterRE = /;(?![^(]*\))/g;
var propertyDelimiterRE = /:([^]+)/;
var styleCommentRE = /\/\*[^]*?\*\//g;
function parseStringStyle(cssText) {
  const ret = {};
  cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
    if (item) {
      const tmp = item.split(propertyDelimiterRE);
      tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return ret;
}
function normalizeClass(value) {
  let res = "";
  if (isString(value)) {
    res = value;
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const normalized = normalizeClass(value[i]);
      if (normalized) {
        res += normalized + " ";
      }
    }
  } else if (isObject(value)) {
    for (const name in value) {
      if (value[name]) {
        res += name + " ";
      }
    }
  }
  return res.trim();
}
var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
var MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
var isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
var isBooleanAttr = /* @__PURE__ */ makeMap(
  specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
);
function includeBooleanAttr(value) {
  return !!value || value === "";
}
function looseCompareArrays(a, b) {
  if (a.length !== b.length) return false;
  let equal = true;
  for (let i = 0; equal && i < a.length; i++) {
    equal = looseEqual(a[i], b[i]);
  }
  return equal;
}
function looseEqual(a, b) {
  if (a === b) return true;
  let aValidType = isDate(a);
  let bValidType = isDate(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? a.getTime() === b.getTime() : false;
  }
  aValidType = isSymbol(a);
  bValidType = isSymbol(b);
  if (aValidType || bValidType) {
    return a === b;
  }
  aValidType = isArray(a);
  bValidType = isArray(b);
  if (aValidType || bValidType) {
    return aValidType && bValidType ? looseCompareArrays(a, b) : false;
  }
  aValidType = isObject(a);
  bValidType = isObject(b);
  if (aValidType || bValidType) {
    if (!aValidType || !bValidType) {
      return false;
    }
    const aKeysCount = Object.keys(a).length;
    const bKeysCount = Object.keys(b).length;
    if (aKeysCount !== bKeysCount) {
      return false;
    }
    for (const key in a) {
      const aHasKey = a.hasOwnProperty(key);
      const bHasKey = b.hasOwnProperty(key);
      if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
        return false;
      }
    }
  }
  return String(a) === String(b);
}
var isRef = (val) => {
  return !!(val && val["__v_isRef"] === true);
};
var toDisplayString = (val) => {
  return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction(val.toString)) ? isRef(val) ? toDisplayString(val.value) : JSON.stringify(val, replacer, 2) : String(val);
};
var replacer = (_key, val) => {
  if (isRef(val)) {
    return replacer(_key, val.value);
  } else if (isMap(val)) {
    return {
      [`Map(${val.size})`]: [...val.entries()].reduce(
        (entries, [key, val2], i) => {
          entries[stringifySymbol(key, i) + " =>"] = val2;
          return entries;
        },
        {}
      )
    };
  } else if (isSet(val)) {
    return {
      [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
    };
  } else if (isSymbol(val)) {
    return stringifySymbol(val);
  } else if (isObject(val) && !isArray(val) && !isPlainObject2(val)) {
    return String(val);
  }
  return val;
};
var stringifySymbol = (v, i = "") => {
  var _a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
  );
};

// node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
function warn(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
var activeEffectScope;
var EffectScope = class {
  // TODO isolatedDeclarations "__v_skip"
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this._on = 0;
    this.effects = [];
    this.cleanups = [];
    this._isPaused = false;
    this.__v_skip = true;
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = true;
      let i, l;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].pause();
        }
      }
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].pause();
      }
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active) {
      if (this._isPaused) {
        this._isPaused = false;
        let i, l;
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].resume();
          }
        }
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].resume();
        }
      }
    }
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else if (true) {
      warn(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    if (++this._on === 1) {
      this.prevScope = activeEffectScope;
      activeEffectScope = this;
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      activeEffectScope = this.prevScope;
      this.prevScope = void 0;
    }
  }
  stop(fromParent) {
    if (this._active) {
      this._active = false;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      this.effects.length = 0;
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      this.cleanups.length = 0;
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
    }
  }
};
function getCurrentScope() {
  return activeEffectScope;
}
var activeSub;
var pausedQueueEffects = /* @__PURE__ */ new WeakSet();
var ReactiveEffect = class {
  constructor(fn) {
    this.fn = fn;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 1 | 4;
    this.next = void 0;
    this.cleanup = void 0;
    this.scheduler = void 0;
    if (activeEffectScope && activeEffectScope.active) {
      activeEffectScope.effects.push(this);
    }
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    if (this.flags & 64) {
      this.flags &= -65;
      if (pausedQueueEffects.has(this)) {
        pausedQueueEffects.delete(this);
        this.trigger();
      }
    }
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags & 2 && !(this.flags & 32)) {
      return;
    }
    if (!(this.flags & 8)) {
      batch(this);
    }
  }
  run() {
    if (!(this.flags & 1)) {
      return this.fn();
    }
    this.flags |= 2;
    cleanupEffect(this);
    prepareDeps(this);
    const prevEffect = activeSub;
    const prevShouldTrack = shouldTrack;
    activeSub = this;
    shouldTrack = true;
    try {
      return this.fn();
    } finally {
      if (activeSub !== this) {
        warn(
          "Active effect was not restored correctly - this is likely a Vue internal bug."
        );
      }
      cleanupDeps(this);
      activeSub = prevEffect;
      shouldTrack = prevShouldTrack;
      this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let link = this.deps; link; link = link.nextDep) {
        removeSub(link);
      }
      this.deps = this.depsTail = void 0;
      cleanupEffect(this);
      this.onStop && this.onStop();
      this.flags &= -2;
    }
  }
  trigger() {
    if (this.flags & 64) {
      pausedQueueEffects.add(this);
    } else if (this.scheduler) {
      this.scheduler();
    } else {
      this.runIfDirty();
    }
  }
  /**
   * @internal
   */
  runIfDirty() {
    if (isDirty(this)) {
      this.run();
    }
  }
  get dirty() {
    return isDirty(this);
  }
};
var batchDepth = 0;
var batchedSub;
var batchedComputed;
function batch(sub, isComputed = false) {
  sub.flags |= 8;
  if (isComputed) {
    sub.next = batchedComputed;
    batchedComputed = sub;
    return;
  }
  sub.next = batchedSub;
  batchedSub = sub;
}
function startBatch() {
  batchDepth++;
}
function endBatch() {
  if (--batchDepth > 0) {
    return;
  }
  if (batchedComputed) {
    let e = batchedComputed;
    batchedComputed = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      e = next;
    }
  }
  let error;
  while (batchedSub) {
    let e = batchedSub;
    batchedSub = void 0;
    while (e) {
      const next = e.next;
      e.next = void 0;
      e.flags &= -9;
      if (e.flags & 1) {
        try {
          ;
          e.trigger();
        } catch (err) {
          if (!error) error = err;
        }
      }
      e = next;
    }
  }
  if (error) throw error;
}
function prepareDeps(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    link.version = -1;
    link.prevActiveLink = link.dep.activeLink;
    link.dep.activeLink = link;
  }
}
function cleanupDeps(sub) {
  let head;
  let tail = sub.depsTail;
  let link = tail;
  while (link) {
    const prev = link.prevDep;
    if (link.version === -1) {
      if (link === tail) tail = prev;
      removeSub(link);
      removeDep(link);
    } else {
      head = link;
    }
    link.dep.activeLink = link.prevActiveLink;
    link.prevActiveLink = void 0;
    link = prev;
  }
  sub.deps = head;
  sub.depsTail = tail;
}
function isDirty(sub) {
  for (let link = sub.deps; link; link = link.nextDep) {
    if (link.dep.version !== link.version || link.dep.computed && (refreshComputed(link.dep.computed) || link.dep.version !== link.version)) {
      return true;
    }
  }
  if (sub._dirty) {
    return true;
  }
  return false;
}
function refreshComputed(computed3) {
  if (computed3.flags & 4 && !(computed3.flags & 16)) {
    return;
  }
  computed3.flags &= -17;
  if (computed3.globalVersion === globalVersion) {
    return;
  }
  computed3.globalVersion = globalVersion;
  if (!computed3.isSSR && computed3.flags & 128 && (!computed3.deps && !computed3._dirty || !isDirty(computed3))) {
    return;
  }
  computed3.flags |= 2;
  const dep = computed3.dep;
  const prevSub = activeSub;
  const prevShouldTrack = shouldTrack;
  activeSub = computed3;
  shouldTrack = true;
  try {
    prepareDeps(computed3);
    const value = computed3.fn(computed3._value);
    if (dep.version === 0 || hasChanged(value, computed3._value)) {
      computed3.flags |= 128;
      computed3._value = value;
      dep.version++;
    }
  } catch (err) {
    dep.version++;
    throw err;
  } finally {
    activeSub = prevSub;
    shouldTrack = prevShouldTrack;
    cleanupDeps(computed3);
    computed3.flags &= -3;
  }
}
function removeSub(link, soft = false) {
  const { dep, prevSub, nextSub } = link;
  if (prevSub) {
    prevSub.nextSub = nextSub;
    link.prevSub = void 0;
  }
  if (nextSub) {
    nextSub.prevSub = prevSub;
    link.nextSub = void 0;
  }
  if (dep.subsHead === link) {
    dep.subsHead = nextSub;
  }
  if (dep.subs === link) {
    dep.subs = prevSub;
    if (!prevSub && dep.computed) {
      dep.computed.flags &= -5;
      for (let l = dep.computed.deps; l; l = l.nextDep) {
        removeSub(l, true);
      }
    }
  }
  if (!soft && !--dep.sc && dep.map) {
    dep.map.delete(dep.key);
  }
}
function removeDep(link) {
  const { prevDep, nextDep } = link;
  if (prevDep) {
    prevDep.nextDep = nextDep;
    link.prevDep = void 0;
  }
  if (nextDep) {
    nextDep.prevDep = prevDep;
    link.nextDep = void 0;
  }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function cleanupEffect(e) {
  const { cleanup } = e;
  e.cleanup = void 0;
  if (cleanup) {
    const prevSub = activeSub;
    activeSub = void 0;
    try {
      cleanup();
    } finally {
      activeSub = prevSub;
    }
  }
}
var globalVersion = 0;
var Link = class {
  constructor(sub, dep) {
    this.sub = sub;
    this.dep = dep;
    this.version = dep.version;
    this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
};
var Dep = class {
  // TODO isolatedDeclarations "__v_skip"
  constructor(computed3) {
    this.computed = computed3;
    this.version = 0;
    this.activeLink = void 0;
    this.subs = void 0;
    this.map = void 0;
    this.key = void 0;
    this.sc = 0;
    this.__v_skip = true;
    if (true) {
      this.subsHead = void 0;
    }
  }
  track(debugInfo2) {
    if (!activeSub || !shouldTrack || activeSub === this.computed) {
      return;
    }
    let link = this.activeLink;
    if (link === void 0 || link.sub !== activeSub) {
      link = this.activeLink = new Link(activeSub, this);
      if (!activeSub.deps) {
        activeSub.deps = activeSub.depsTail = link;
      } else {
        link.prevDep = activeSub.depsTail;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
      }
      addSub(link);
    } else if (link.version === -1) {
      link.version = this.version;
      if (link.nextDep) {
        const next = link.nextDep;
        next.prevDep = link.prevDep;
        if (link.prevDep) {
          link.prevDep.nextDep = next;
        }
        link.prevDep = activeSub.depsTail;
        link.nextDep = void 0;
        activeSub.depsTail.nextDep = link;
        activeSub.depsTail = link;
        if (activeSub.deps === link) {
          activeSub.deps = next;
        }
      }
    }
    if (activeSub.onTrack) {
      activeSub.onTrack(
        extend(
          {
            effect: activeSub
          },
          debugInfo2
        )
      );
    }
    return link;
  }
  trigger(debugInfo2) {
    this.version++;
    globalVersion++;
    this.notify(debugInfo2);
  }
  notify(debugInfo2) {
    startBatch();
    try {
      if (true) {
        for (let head = this.subsHead; head; head = head.nextSub) {
          if (head.sub.onTrigger && !(head.sub.flags & 8)) {
            head.sub.onTrigger(
              extend(
                {
                  effect: head.sub
                },
                debugInfo2
              )
            );
          }
        }
      }
      for (let link = this.subs; link; link = link.prevSub) {
        if (link.sub.notify()) {
          ;
          link.sub.dep.notify();
        }
      }
    } finally {
      endBatch();
    }
  }
};
function addSub(link) {
  link.dep.sc++;
  if (link.sub.flags & 4) {
    const computed3 = link.dep.computed;
    if (computed3 && !link.dep.subs) {
      computed3.flags |= 4 | 16;
      for (let l = computed3.deps; l; l = l.nextDep) {
        addSub(l);
      }
    }
    const currentTail = link.dep.subs;
    if (currentTail !== link) {
      link.prevSub = currentTail;
      if (currentTail) currentTail.nextSub = link;
    }
    if (link.dep.subsHead === void 0) {
      link.dep.subsHead = link;
    }
    link.dep.subs = link;
  }
}
var targetMap = /* @__PURE__ */ new WeakMap();
var ITERATE_KEY = /* @__PURE__ */ Symbol(
  true ? "Object iterate" : ""
);
var MAP_KEY_ITERATE_KEY = /* @__PURE__ */ Symbol(
  true ? "Map keys iterate" : ""
);
var ARRAY_ITERATE_KEY = /* @__PURE__ */ Symbol(
  true ? "Array iterate" : ""
);
function track(target, type, key) {
  if (shouldTrack && activeSub) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = new Dep());
      dep.map = depsMap;
      dep.key = key;
    }
    if (true) {
      dep.track({
        target,
        type,
        key
      });
    } else {
      dep.track();
    }
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    globalVersion++;
    return;
  }
  const run = (dep) => {
    if (dep) {
      if (true) {
        dep.trigger({
          target,
          type,
          key,
          newValue,
          oldValue,
          oldTarget
        });
      } else {
        dep.trigger();
      }
    }
  };
  startBatch();
  if (type === "clear") {
    depsMap.forEach(run);
  } else {
    const targetIsArray = isArray(target);
    const isArrayIndex = targetIsArray && isIntegerKey(key);
    if (targetIsArray && key === "length") {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || key2 === ARRAY_ITERATE_KEY || !isSymbol(key2) && key2 >= newLength) {
          run(dep);
        }
      });
    } else {
      if (key !== void 0 || depsMap.has(void 0)) {
        run(depsMap.get(key));
      }
      if (isArrayIndex) {
        run(depsMap.get(ARRAY_ITERATE_KEY));
      }
      switch (type) {
        case "add":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isArrayIndex) {
            run(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!targetIsArray) {
            run(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              run(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            run(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
  }
  endBatch();
}
function reactiveReadArray(array) {
  const raw = /* @__PURE__ */ toRaw(array);
  if (raw === array) return raw;
  track(raw, "iterate", ARRAY_ITERATE_KEY);
  return /* @__PURE__ */ isShallow(array) ? raw : raw.map(toReactive);
}
function shallowReadArray(arr) {
  track(arr = /* @__PURE__ */ toRaw(arr), "iterate", ARRAY_ITERATE_KEY);
  return arr;
}
function toWrapped(target, item) {
  if (/* @__PURE__ */ isReadonly(target)) {
    return /* @__PURE__ */ isReactive(target) ? toReadonly(toReactive(item)) : toReadonly(item);
  }
  return toReactive(item);
}
var arrayInstrumentations = {
  __proto__: null,
  [Symbol.iterator]() {
    return iterator(this, Symbol.iterator, (item) => toWrapped(this, item));
  },
  concat(...args) {
    return reactiveReadArray(this).concat(
      ...args.map((x) => isArray(x) ? reactiveReadArray(x) : x)
    );
  },
  entries() {
    return iterator(this, "entries", (value) => {
      value[1] = toWrapped(this, value[1]);
      return value;
    });
  },
  every(fn, thisArg) {
    return apply(this, "every", fn, thisArg, void 0, arguments);
  },
  filter(fn, thisArg) {
    return apply(
      this,
      "filter",
      fn,
      thisArg,
      (v) => v.map((item) => toWrapped(this, item)),
      arguments
    );
  },
  find(fn, thisArg) {
    return apply(
      this,
      "find",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findIndex(fn, thisArg) {
    return apply(this, "findIndex", fn, thisArg, void 0, arguments);
  },
  findLast(fn, thisArg) {
    return apply(
      this,
      "findLast",
      fn,
      thisArg,
      (item) => toWrapped(this, item),
      arguments
    );
  },
  findLastIndex(fn, thisArg) {
    return apply(this, "findLastIndex", fn, thisArg, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(fn, thisArg) {
    return apply(this, "forEach", fn, thisArg, void 0, arguments);
  },
  includes(...args) {
    return searchProxy(this, "includes", args);
  },
  indexOf(...args) {
    return searchProxy(this, "indexOf", args);
  },
  join(separator) {
    return reactiveReadArray(this).join(separator);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...args) {
    return searchProxy(this, "lastIndexOf", args);
  },
  map(fn, thisArg) {
    return apply(this, "map", fn, thisArg, void 0, arguments);
  },
  pop() {
    return noTracking(this, "pop");
  },
  push(...args) {
    return noTracking(this, "push", args);
  },
  reduce(fn, ...args) {
    return reduce(this, "reduce", fn, args);
  },
  reduceRight(fn, ...args) {
    return reduce(this, "reduceRight", fn, args);
  },
  shift() {
    return noTracking(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(fn, thisArg) {
    return apply(this, "some", fn, thisArg, void 0, arguments);
  },
  splice(...args) {
    return noTracking(this, "splice", args);
  },
  toReversed() {
    return reactiveReadArray(this).toReversed();
  },
  toSorted(comparer) {
    return reactiveReadArray(this).toSorted(comparer);
  },
  toSpliced(...args) {
    return reactiveReadArray(this).toSpliced(...args);
  },
  unshift(...args) {
    return noTracking(this, "unshift", args);
  },
  values() {
    return iterator(this, "values", (item) => toWrapped(this, item));
  }
};
function iterator(self2, method, wrapValue) {
  const arr = shallowReadArray(self2);
  const iter = arr[method]();
  if (arr !== self2 && !/* @__PURE__ */ isShallow(self2)) {
    iter._next = iter.next;
    iter.next = () => {
      const result = iter._next();
      if (!result.done) {
        result.value = wrapValue(result.value);
      }
      return result;
    };
  }
  return iter;
}
var arrayProto = Array.prototype;
function apply(self2, method, fn, thisArg, wrappedRetFn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !/* @__PURE__ */ isShallow(self2);
  const methodFn = arr[method];
  if (methodFn !== arrayProto[method]) {
    const result2 = methodFn.apply(self2, args);
    return needsWrap ? toReactive(result2) : result2;
  }
  let wrappedFn = fn;
  if (arr !== self2) {
    if (needsWrap) {
      wrappedFn = function(item, index) {
        return fn.call(this, toWrapped(self2, item), index, self2);
      };
    } else if (fn.length > 2) {
      wrappedFn = function(item, index) {
        return fn.call(this, item, index, self2);
      };
    }
  }
  const result = methodFn.call(arr, wrappedFn, thisArg);
  return needsWrap && wrappedRetFn ? wrappedRetFn(result) : result;
}
function reduce(self2, method, fn, args) {
  const arr = shallowReadArray(self2);
  const needsWrap = arr !== self2 && !/* @__PURE__ */ isShallow(self2);
  let wrappedFn = fn;
  let wrapInitialAccumulator = false;
  if (arr !== self2) {
    if (needsWrap) {
      wrapInitialAccumulator = args.length === 0;
      wrappedFn = function(acc, item, index) {
        if (wrapInitialAccumulator) {
          wrapInitialAccumulator = false;
          acc = toWrapped(self2, acc);
        }
        return fn.call(this, acc, toWrapped(self2, item), index, self2);
      };
    } else if (fn.length > 3) {
      wrappedFn = function(acc, item, index) {
        return fn.call(this, acc, item, index, self2);
      };
    }
  }
  const result = arr[method](wrappedFn, ...args);
  return wrapInitialAccumulator ? toWrapped(self2, result) : result;
}
function searchProxy(self2, method, args) {
  const arr = /* @__PURE__ */ toRaw(self2);
  track(arr, "iterate", ARRAY_ITERATE_KEY);
  const res = arr[method](...args);
  if ((res === -1 || res === false) && /* @__PURE__ */ isProxy(args[0])) {
    args[0] = /* @__PURE__ */ toRaw(args[0]);
    return arr[method](...args);
  }
  return res;
}
function noTracking(self2, method, args = []) {
  pauseTracking();
  startBatch();
  const res = (/* @__PURE__ */ toRaw(self2))[method].apply(self2, args);
  endBatch();
  resetTracking();
  return res;
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
function hasOwnProperty2(key) {
  if (!isSymbol(key)) key = String(key);
  const obj = /* @__PURE__ */ toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
var BaseReactiveHandler = class {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    if (key === "__v_skip") return target["__v_skip"];
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      let fn;
      if (targetIsArray && (fn = arrayInstrumentations[key])) {
        return fn;
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty2;
      }
    }
    const res = Reflect.get(
      target,
      key,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ isRef2(target) ? target : receiver
    );
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (/* @__PURE__ */ isRef2(res)) {
      const value = targetIsArray && isIntegerKey(key) ? res : res.value;
      return isReadonly2 && isObject(value) ? /* @__PURE__ */ readonly(value) : value;
    }
    if (isObject(res)) {
      return isReadonly2 ? /* @__PURE__ */ readonly(res) : /* @__PURE__ */ reactive(res);
    }
    return res;
  }
};
var MutableReactiveHandler = class extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    const isArrayWithIntegerKey = isArray(target) && isIntegerKey(key);
    if (!this._isShallow) {
      const isOldValueReadonly = /* @__PURE__ */ isReadonly(oldValue);
      if (!/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
        oldValue = /* @__PURE__ */ toRaw(oldValue);
        value = /* @__PURE__ */ toRaw(value);
      }
      if (!isArrayWithIntegerKey && /* @__PURE__ */ isRef2(oldValue) && !/* @__PURE__ */ isRef2(value)) {
        if (isOldValueReadonly) {
          if (true) {
            warn(
              `Set operation on key "${String(key)}" failed: target is readonly.`,
              target[key]
            );
          }
          return true;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArrayWithIntegerKey ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(
      target,
      key,
      value,
      /* @__PURE__ */ isRef2(target) ? target : receiver
    );
    if (target === /* @__PURE__ */ toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
};
var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    if (true) {
      warn(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
  deleteProperty(target, key) {
    if (true) {
      warn(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
};
var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(true);
var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
var toShallow = (value) => value;
var getProto = (v) => Reflect.getPrototypeOf(v);
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = /* @__PURE__ */ toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return extend(
      // inheriting all iterator properties
      Object.create(innerIterator),
      {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        }
      }
    );
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    if (true) {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      warn(
        `${capitalize(type)} operation ${key}failed: target is readonly.`,
        /* @__PURE__ */ toRaw(this)
      );
    }
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations(readonly2, shallow) {
  const instrumentations = {
    get(key) {
      const target = this["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const rawKey = /* @__PURE__ */ toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "get", key);
        }
        track(rawTarget, "get", rawKey);
      }
      const { has } = getProto(rawTarget);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      if (has.call(rawTarget, key)) {
        return wrap(target.get(key));
      } else if (has.call(rawTarget, rawKey)) {
        return wrap(target.get(rawKey));
      } else if (target !== rawTarget) {
        target.get(key);
      }
    },
    get size() {
      const target = this["__v_raw"];
      !readonly2 && track(/* @__PURE__ */ toRaw(target), "iterate", ITERATE_KEY);
      return target.size;
    },
    has(key) {
      const target = this["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const rawKey = /* @__PURE__ */ toRaw(key);
      if (!readonly2) {
        if (hasChanged(key, rawKey)) {
          track(rawTarget, "has", key);
        }
        track(rawTarget, "has", rawKey);
      }
      return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
    },
    forEach(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = /* @__PURE__ */ toRaw(target);
      const wrap = shallow ? toShallow : readonly2 ? toReadonly : toReactive;
      !readonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    }
  };
  extend(
    instrumentations,
    readonly2 ? {
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear")
    } : {
      add(value) {
        const target = /* @__PURE__ */ toRaw(this);
        const proto = getProto(target);
        const rawValue = /* @__PURE__ */ toRaw(value);
        const valueToAdd = !shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value) ? rawValue : value;
        const hadKey = proto.has.call(target, valueToAdd) || hasChanged(value, valueToAdd) && proto.has.call(target, value) || hasChanged(rawValue, valueToAdd) && proto.has.call(target, rawValue);
        if (!hadKey) {
          target.add(valueToAdd);
          trigger(target, "add", valueToAdd, valueToAdd);
        }
        return this;
      },
      set(key, value) {
        if (!shallow && !/* @__PURE__ */ isShallow(value) && !/* @__PURE__ */ isReadonly(value)) {
          value = /* @__PURE__ */ toRaw(value);
        }
        const target = /* @__PURE__ */ toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = /* @__PURE__ */ toRaw(key);
          hadKey = has.call(target, key);
        } else if (true) {
          checkIdentityKeys(target, has, key);
        }
        const oldValue = get.call(target, key);
        target.set(key, value);
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
        return this;
      },
      delete(key) {
        const target = /* @__PURE__ */ toRaw(this);
        const { has, get } = getProto(target);
        let hadKey = has.call(target, key);
        if (!hadKey) {
          key = /* @__PURE__ */ toRaw(key);
          hadKey = has.call(target, key);
        } else if (true) {
          checkIdentityKeys(target, has, key);
        }
        const oldValue = get ? get.call(target, key) : void 0;
        const result = target.delete(key);
        if (hadKey) {
          trigger(target, "delete", key, void 0, oldValue);
        }
        return result;
      },
      clear() {
        const target = /* @__PURE__ */ toRaw(this);
        const hadItems = target.size !== 0;
        const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
        const result = target.clear();
        if (hadItems) {
          trigger(
            target,
            "clear",
            void 0,
            void 0,
            oldTarget
          );
        }
        return result;
      }
    }
  );
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    instrumentations[method] = createIterableMethod(method, readonly2, shallow);
  });
  return instrumentations;
}
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = createInstrumentations(isReadonly2, shallow);
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
var mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var shallowCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, true)
};
var readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
var shallowReadonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, true)
};
function checkIdentityKeys(target, has, key) {
  const rawKey = /* @__PURE__ */ toRaw(key);
  if (rawKey !== key && has.call(target, rawKey)) {
    const type = toRawType(target);
    warn(
      `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
// @__NO_SIDE_EFFECTS__
function reactive(target) {
  if (/* @__PURE__ */ isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
// @__NO_SIDE_EFFECTS__
function shallowReactive(target) {
  return createReactiveObject(
    target,
    false,
    shallowReactiveHandlers,
    shallowCollectionHandlers,
    shallowReactiveMap
  );
}
// @__NO_SIDE_EFFECTS__
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
// @__NO_SIDE_EFFECTS__
function shallowReadonly(target) {
  return createReactiveObject(
    target,
    true,
    shallowReadonlyHandlers,
    shallowReadonlyCollectionHandlers,
    shallowReadonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject(target)) {
    if (true) {
      warn(
        `value cannot be made ${isReadonly2 ? "readonly" : "reactive"}: ${String(
          target
        )}`
      );
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
// @__NO_SIDE_EFFECTS__
function isReactive(value) {
  if (/* @__PURE__ */ isReadonly(value)) {
    return /* @__PURE__ */ isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
// @__NO_SIDE_EFFECTS__
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
// @__NO_SIDE_EFFECTS__
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
// @__NO_SIDE_EFFECTS__
function isProxy(value) {
  return value ? !!value["__v_raw"] : false;
}
// @__NO_SIDE_EFFECTS__
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? /* @__PURE__ */ toRaw(raw) : observed;
}
function markRaw(value) {
  if (!hasOwn(value, "__v_skip") && Object.isExtensible(value)) {
    def(value, "__v_skip", true);
  }
  return value;
}
var toReactive = (value) => isObject(value) ? /* @__PURE__ */ reactive(value) : value;
var toReadonly = (value) => isObject(value) ? /* @__PURE__ */ readonly(value) : value;
// @__NO_SIDE_EFFECTS__
function isRef2(r) {
  return r ? r["__v_isRef"] === true : false;
}
// @__NO_SIDE_EFFECTS__
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (/* @__PURE__ */ isRef2(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
var RefImpl = class {
  constructor(value, isShallow2) {
    this.dep = new Dep();
    this["__v_isRef"] = true;
    this["__v_isShallow"] = false;
    this._rawValue = isShallow2 ? value : /* @__PURE__ */ toRaw(value);
    this._value = isShallow2 ? value : toReactive(value);
    this["__v_isShallow"] = isShallow2;
  }
  get value() {
    if (true) {
      this.dep.track({
        target: this,
        type: "get",
        key: "value"
      });
    } else {
      this.dep.track();
    }
    return this._value;
  }
  set value(newValue) {
    const oldValue = this._rawValue;
    const useDirectValue = this["__v_isShallow"] || /* @__PURE__ */ isShallow(newValue) || /* @__PURE__ */ isReadonly(newValue);
    newValue = useDirectValue ? newValue : /* @__PURE__ */ toRaw(newValue);
    if (hasChanged(newValue, oldValue)) {
      this._rawValue = newValue;
      this._value = useDirectValue ? newValue : toReactive(newValue);
      if (true) {
        this.dep.trigger({
          target: this,
          type: "set",
          key: "value",
          newValue,
          oldValue
        });
      } else {
        this.dep.trigger();
      }
    }
  }
};
function unref(ref2) {
  return /* @__PURE__ */ isRef2(ref2) ? ref2.value : ref2;
}
var shallowUnwrapHandlers = {
  get: (target, key, receiver) => key === "__v_raw" ? target : unref(Reflect.get(target, key, receiver)),
  set: (target, key, value, receiver) => {
    const oldValue = target[key];
    if (/* @__PURE__ */ isRef2(oldValue) && !/* @__PURE__ */ isRef2(value)) {
      oldValue.value = value;
      return true;
    } else {
      return Reflect.set(target, key, value, receiver);
    }
  }
};
function proxyRefs(objectWithRefs) {
  return /* @__PURE__ */ isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
}
var ComputedRefImpl = class {
  constructor(fn, setter, isSSR) {
    this.fn = fn;
    this.setter = setter;
    this._value = void 0;
    this.dep = new Dep(this);
    this.__v_isRef = true;
    this.deps = void 0;
    this.depsTail = void 0;
    this.flags = 16;
    this.globalVersion = globalVersion - 1;
    this.next = void 0;
    this.effect = this;
    this["__v_isReadonly"] = !setter;
    this.isSSR = isSSR;
  }
  /**
   * @internal
   */
  notify() {
    this.flags |= 16;
    if (!(this.flags & 8) && // avoid infinite self recursion
    activeSub !== this) {
      batch(this, true);
      return true;
    } else if (true) ;
  }
  get value() {
    const link = true ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    refreshComputed(this);
    if (link) {
      link.version = this.dep.version;
    }
    return this._value;
  }
  set value(newValue) {
    if (this.setter) {
      this.setter(newValue);
    } else if (true) {
      warn("Write operation failed: computed value is readonly");
    }
  }
};
// @__NO_SIDE_EFFECTS__
function computed(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, isSSR);
  if (debugOptions && !isSSR) {
    cRef.onTrack = debugOptions.onTrack;
    cRef.onTrigger = debugOptions.onTrigger;
  }
  return cRef;
}
var INITIAL_WATCHER_VALUE = {};
var cleanupMap = /* @__PURE__ */ new WeakMap();
var activeWatcher = void 0;
function onWatcherCleanup(cleanupFn, failSilently = false, owner = activeWatcher) {
  if (owner) {
    let cleanups = cleanupMap.get(owner);
    if (!cleanups) cleanupMap.set(owner, cleanups = []);
    cleanups.push(cleanupFn);
  } else if (!failSilently) {
    warn(
      `onWatcherCleanup() was called when there was no active watcher to associate with.`
    );
  }
}
function watch(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, once, scheduler, augmentJob, call } = options;
  const warnInvalidSource = (s) => {
    (options.onWarn || warn)(
      `Invalid watch source: `,
      s,
      `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
    );
  };
  const reactiveGetter = (source2) => {
    if (deep) return source2;
    if (/* @__PURE__ */ isShallow(source2) || deep === false || deep === 0)
      return traverse(source2, 1);
    return traverse(source2);
  };
  let effect2;
  let getter;
  let cleanup;
  let boundCleanup;
  let forceTrigger = false;
  let isMultiSource = false;
  if (/* @__PURE__ */ isRef2(source)) {
    getter = () => source.value;
    forceTrigger = /* @__PURE__ */ isShallow(source);
  } else if (/* @__PURE__ */ isReactive(source)) {
    getter = () => reactiveGetter(source);
    forceTrigger = true;
  } else if (isArray(source)) {
    isMultiSource = true;
    forceTrigger = source.some((s) => /* @__PURE__ */ isReactive(s) || /* @__PURE__ */ isShallow(s));
    getter = () => source.map((s) => {
      if (/* @__PURE__ */ isRef2(s)) {
        return s.value;
      } else if (/* @__PURE__ */ isReactive(s)) {
        return reactiveGetter(s);
      } else if (isFunction(s)) {
        return call ? call(s, 2) : s();
      } else {
        warnInvalidSource(s);
      }
    });
  } else if (isFunction(source)) {
    if (cb) {
      getter = call ? () => call(source, 2) : source;
    } else {
      getter = () => {
        if (cleanup) {
          pauseTracking();
          try {
            cleanup();
          } finally {
            resetTracking();
          }
        }
        const currentEffect = activeWatcher;
        activeWatcher = effect2;
        try {
          return call ? call(source, 3, [boundCleanup]) : source(boundCleanup);
        } finally {
          activeWatcher = currentEffect;
        }
      };
    }
  } else {
    getter = NOOP;
    warnInvalidSource(source);
  }
  if (cb && deep) {
    const baseGetter = getter;
    const depth = deep === true ? Infinity : deep;
    getter = () => traverse(baseGetter(), depth);
  }
  const scope = getCurrentScope();
  const watchHandle = () => {
    effect2.stop();
    if (scope && scope.active) {
      remove(scope.effects, effect2);
    }
  };
  if (once && cb) {
    const _cb = cb;
    cb = (...args) => {
      _cb(...args);
      watchHandle();
    };
  }
  let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
  const job = (immediateFirstRun) => {
    if (!(effect2.flags & 1) || !effect2.dirty && !immediateFirstRun) {
      return;
    }
    if (cb) {
      const newValue = effect2.run();
      if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue))) {
        if (cleanup) {
          cleanup();
        }
        const currentWatcher = activeWatcher;
        activeWatcher = effect2;
        try {
          const args = [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            boundCleanup
          ];
          oldValue = newValue;
          call ? call(cb, 3, args) : (
            // @ts-expect-error
            cb(...args)
          );
        } finally {
          activeWatcher = currentWatcher;
        }
      }
    } else {
      effect2.run();
    }
  };
  if (augmentJob) {
    augmentJob(job);
  }
  effect2 = new ReactiveEffect(getter);
  effect2.scheduler = scheduler ? () => scheduler(job, false) : job;
  boundCleanup = (fn) => onWatcherCleanup(fn, false, effect2);
  cleanup = effect2.onStop = () => {
    const cleanups = cleanupMap.get(effect2);
    if (cleanups) {
      if (call) {
        call(cleanups, 4);
      } else {
        for (const cleanup2 of cleanups) cleanup2();
      }
      cleanupMap.delete(effect2);
    }
  };
  if (true) {
    effect2.onTrack = options.onTrack;
    effect2.onTrigger = options.onTrigger;
  }
  if (cb) {
    if (immediate) {
      job(true);
    } else {
      oldValue = effect2.run();
    }
  } else if (scheduler) {
    scheduler(job.bind(null, true), true);
  } else {
    effect2.run();
  }
  watchHandle.pause = effect2.pause.bind(effect2);
  watchHandle.resume = effect2.resume.bind(effect2);
  watchHandle.stop = watchHandle;
  return watchHandle;
}
function traverse(value, depth = Infinity, seen) {
  if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
    return value;
  }
  seen = seen || /* @__PURE__ */ new Map();
  if ((seen.get(value) || 0) >= depth) {
    return value;
  }
  seen.set(value, depth);
  depth--;
  if (/* @__PURE__ */ isRef2(value)) {
    traverse(value.value, depth, seen);
  } else if (isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      traverse(value[i], depth, seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach((v) => {
      traverse(v, depth, seen);
    });
  } else if (isPlainObject2(value)) {
    for (const key in value) {
      traverse(value[key], depth, seen);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
      if (Object.prototype.propertyIsEnumerable.call(value, key)) {
        traverse(value[key], depth, seen);
      }
    }
  }
  return value;
}

// node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
var isWarning = false;
function warn$1(msg, ...args) {
  if (isWarning) return;
  isWarning = true;
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
  isWarning = false;
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef2(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
var ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  ["a"]: "activated hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush",
  [15]: "component update",
  [16]: "app unmount cleanup function"
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function callWithAsyncErrorHandling(fn, instance, type, args) {
  if (isFunction(fn)) {
    const res = callWithErrorHandling(fn, instance, type, args);
    if (res && isPromise(res)) {
      res.catch((err) => {
        handleError(err, instance, type);
      });
    }
    return res;
  }
  if (isArray(fn)) {
    const values = [];
    for (let i = 0; i < fn.length; i++) {
      values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
    }
    return values;
  } else if (true) {
    warn$1(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`
    );
  }
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  const { errorHandler, throwUnhandledErrorInProduction } = instance && instance.appContext.config || EMPTY_OBJ;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = true ? ErrorTypeStrings$1[type] : `https://vuejs.org/error-reference/#runtime-${type}`;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    if (errorHandler) {
      pauseTracking();
      callWithErrorHandling(errorHandler, null, 10, [
        err,
        exposedInstance,
        errorInfo
      ]);
      resetTracking();
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev, throwUnhandledErrorInProduction);
}
function logError(err, type, contextVNode, throwInDev = true, throwInProd = false) {
  if (true) {
    const info = ErrorTypeStrings$1[type];
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    if (throwInDev) {
      throw err;
    } else {
      console.error(err);
    }
  } else if (throwInProd) {
    throw err;
  } else {
    console.error(err);
  }
}
var queue = [];
var flushIndex = -1;
var pendingPostFlushCbs = [];
var activePostFlushCbs = null;
var postFlushIndex = 0;
var resolvedPromise = /* @__PURE__ */ Promise.resolve();
var currentFlushPromise = null;
var RECURSION_LIMIT = 100;
function nextTick(fn) {
  const p2 = currentFlushPromise || resolvedPromise;
  return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
}
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.flags & 2) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!(job.flags & 1)) {
    const jobId = getId(job);
    const lastJob = queue[queue.length - 1];
    if (!lastJob || // fast path when the job id is larger than the tail
    !(job.flags & 2) && jobId >= getId(lastJob)) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(jobId), 0, job);
    }
    job.flags |= 1;
    queueFlush();
  }
}
function queueFlush() {
  if (!currentFlushPromise) {
    currentFlushPromise = resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (activePostFlushCbs && cb.id === -1) {
      activePostFlushCbs.splice(postFlushIndex + 1, 0, cb);
    } else if (!(cb.flags & 1)) {
      pendingPostFlushCbs.push(cb);
      cb.flags |= 1;
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPreFlushCbs(instance, seen, i = flushIndex + 1) {
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  for (; i < queue.length; i++) {
    const cb = queue[i];
    if (cb && cb.flags & 2) {
      if (instance && cb.id !== instance.uid) {
        continue;
      }
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      queue.splice(i, 1);
      i--;
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      cb();
      if (!(cb.flags & 4)) {
        cb.flags &= -2;
      }
    }
  }
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      const cb = activePostFlushCbs[postFlushIndex];
      if (checkRecursiveUpdates(seen, cb)) {
        continue;
      }
      if (cb.flags & 4) {
        cb.flags &= -2;
      }
      if (!(cb.flags & 8)) cb();
      cb.flags &= -2;
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
var getId = (job) => job.id == null ? job.flags & 2 ? -1 : Infinity : job.id;
function flushJobs(seen) {
  if (true) {
    seen = seen || /* @__PURE__ */ new Map();
  }
  const check = true ? (job) => checkRecursiveUpdates(seen, job) : NOOP;
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && !(job.flags & 8)) {
        if (check(job)) {
          continue;
        }
        if (job.flags & 4) {
          job.flags &= ~1;
        }
        callWithErrorHandling(
          job,
          job.i,
          job.i ? 15 : 14
        );
        if (!(job.flags & 4)) {
          job.flags &= ~1;
        }
      }
    }
  } finally {
    for (; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job) {
        job.flags &= -2;
      }
    }
    flushIndex = -1;
    queue.length = 0;
    flushPostFlushCbs(seen);
    currentFlushPromise = null;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  const count = seen.get(fn) || 0;
  if (count > RECURSION_LIMIT) {
    const instance = fn.i;
    const componentName = instance && getComponentName(instance.type);
    handleError(
      `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    );
    return true;
  }
  seen.set(fn, count + 1);
  return false;
}
var isHmrUpdating = false;
var hmrDirtyComponents = /* @__PURE__ */ new Map();
if (true) {
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
var map = /* @__PURE__ */ new Map();
function registerHMR(instance) {
  const id = instance.type.__hmrId;
  let record = map.get(id);
  if (!record) {
    createRecord(id, instance.type);
    record = map.get(id);
  }
  record.instances.add(instance);
}
function unregisterHMR(instance) {
  map.get(instance.type.__hmrId).instances.delete(instance);
}
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    isHmrUpdating = true;
    if (!(instance.job.flags & 8)) {
      instance.update();
    }
    isHmrUpdating = false;
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record) return;
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (let i = 0; i < instances.length; i++) {
    const instance = instances[i];
    const oldComp = normalizeClassComponent(instance.type);
    let dirtyInstances = hmrDirtyComponents.get(oldComp);
    if (!dirtyInstances) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.set(oldComp, dirtyInstances = /* @__PURE__ */ new Set());
    }
    dirtyInstances.add(instance);
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      dirtyInstances.add(instance);
      instance.ceReload(newComp.styles);
      dirtyInstances.delete(instance);
    } else if (instance.parent) {
      queueJob(() => {
        if (!(instance.job.flags & 8)) {
          isHmrUpdating = true;
          instance.parent.update();
          isHmrUpdating = false;
          dirtyInstances.delete(instance);
        }
      });
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn(
        "[HMR] Root or manually mounted instance modified. Full reload required."
      );
    }
    if (instance.root.ce && instance !== instance.root) {
      instance.root.ce._removeChildStyle(oldComp);
    }
  }
  queuePostFlushCb(() => {
    hmrDirtyComponents.clear();
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(
        `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
      );
    }
  };
}
var devtools$1;
var buffer = [];
var devtoolsNotInstalled = false;
function emit$1(event, ...args) {
  if (devtools$1) {
    devtools$1.emit(event, ...args);
  } else if (!devtoolsNotInstalled) {
    buffer.push({ event, args });
  }
}
function setDevtoolsHook$1(hook, target) {
  var _a, _b;
  devtools$1 = hook;
  if (devtools$1) {
    devtools$1.enabled = true;
    buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
    buffer = [];
  } else if (
    // handle late devtools injection - only do this if we are in an actual
    // browser environment to avoid the timer handle stalling test runner exit
    // (#4815)
    typeof window !== "undefined" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    // eslint-disable-next-line no-restricted-syntax
    !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
  ) {
    const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
    replay.push((newHook) => {
      setDevtoolsHook$1(newHook, target);
    });
    setTimeout(() => {
      if (!devtools$1) {
        target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
        devtoolsNotInstalled = true;
        buffer = [];
      }
    }, 3e3);
  } else {
    devtoolsNotInstalled = true;
    buffer = [];
  }
}
function devtoolsInitApp(app2, version2) {
  emit$1("app:init", app2, version2, {
    Fragment,
    Text,
    Comment,
    Static
  });
}
function devtoolsUnmountApp(app2) {
  emit$1("app:unmount", app2);
}
var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:added"
  /* COMPONENT_ADDED */
);
var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:updated"
  /* COMPONENT_UPDATED */
);
var _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
  "component:removed"
  /* COMPONENT_REMOVED */
);
var devtoolsComponentRemoved = (component) => {
  if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
  !devtools$1.cleanupBuffer(component)) {
    _devtoolsComponentRemoved(component);
  }
};
// @__NO_SIDE_EFFECTS__
function createDevtoolsComponentHook(hook) {
  return (component) => {
    emit$1(
      hook,
      component.appContext.app,
      component.uid,
      component.parent ? component.parent.uid : void 0,
      component
    );
  };
}
var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:start"
  /* PERFORMANCE_START */
);
var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
  "perf:end"
  /* PERFORMANCE_END */
);
function createDevtoolsPerformanceHook(hook) {
  return (component, type, time) => {
    emit$1(hook, component.appContext.app, component.uid, component, type, time);
  };
}
function devtoolsComponentEmit(component, event, params) {
  emit$1(
    "component:emit",
    component.appContext.app,
    component,
    event,
    params
  );
}
var currentRenderingInstance = null;
var currentScopeId = null;
function setCurrentRenderingInstance(instance) {
  const prev = currentRenderingInstance;
  currentRenderingInstance = instance;
  currentScopeId = instance && instance.type.__scopeId || null;
  return prev;
}
function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
  if (!ctx) return fn;
  if (fn._n) {
    return fn;
  }
  const renderFnWithContext = (...args) => {
    if (renderFnWithContext._d) {
      setBlockTracking(-1);
    }
    const prevInstance = setCurrentRenderingInstance(ctx);
    let res;
    try {
      res = fn(...args);
    } finally {
      setCurrentRenderingInstance(prevInstance);
      if (renderFnWithContext._d) {
        setBlockTracking(1);
      }
    }
    if (true) {
      devtoolsComponentUpdated(ctx);
    }
    return res;
  };
  renderFnWithContext._n = true;
  renderFnWithContext._c = true;
  renderFnWithContext._d = true;
  return renderFnWithContext;
}
function validateDirectiveName(name) {
  if (isBuiltInDirective(name)) {
    warn$1("Do not use built-in directive ids as custom directive id: " + name);
  }
}
function invokeDirectiveHook(vnode, prevVNode, instance, name) {
  const bindings = vnode.dirs;
  const oldBindings = prevVNode && prevVNode.dirs;
  for (let i = 0; i < bindings.length; i++) {
    const binding = bindings[i];
    if (oldBindings) {
      binding.oldValue = oldBindings[i].value;
    }
    let hook = binding.dir[name];
    if (hook) {
      pauseTracking();
      callWithAsyncErrorHandling(hook, instance, 8, [
        vnode.el,
        binding,
        vnode,
        prevVNode
      ]);
      resetTracking();
    }
  }
}
function provide(key, value) {
  if (true) {
    if (!currentInstance || currentInstance.isMounted) {
      warn$1(`provide() can only be used inside setup().`);
    }
  }
  if (currentInstance) {
    let provides = currentInstance.provides;
    const parentProvides = currentInstance.parent && currentInstance.parent.provides;
    if (parentProvides === provides) {
      provides = currentInstance.provides = Object.create(parentProvides);
    }
    provides[key] = value;
  }
}
function inject(key, defaultValue, treatDefaultAsFactory = false) {
  const instance = getCurrentInstance();
  if (instance || currentApp) {
    let provides = currentApp ? currentApp._context.provides : instance ? instance.parent == null || instance.ce ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : void 0;
    if (provides && key in provides) {
      return provides[key];
    } else if (arguments.length > 1) {
      return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
    } else if (true) {
      warn$1(`injection "${String(key)}" not found.`);
    }
  } else if (true) {
    warn$1(`inject() can only be used inside setup() or functional components.`);
  }
}
var ssrContextKey = /* @__PURE__ */ Symbol.for("v-scx");
var useSSRContext = () => {
  {
    const ctx = inject(ssrContextKey);
    if (!ctx) {
      warn$1(
        `Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`
      );
    }
    return ctx;
  }
};
function watch2(source, cb, options) {
  if (!isFunction(cb)) {
    warn$1(
      `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
    );
  }
  return doWatch(source, cb, options);
}
function doWatch(source, cb, options = EMPTY_OBJ) {
  const { immediate, deep, flush, once } = options;
  if (!cb) {
    if (immediate !== void 0) {
      warn$1(
        `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (deep !== void 0) {
      warn$1(
        `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
    if (once !== void 0) {
      warn$1(
        `watch() "once" option is only respected when using the watch(source, callback, options?) signature.`
      );
    }
  }
  const baseWatchOptions = extend({}, options);
  if (true) baseWatchOptions.onWarn = warn$1;
  const runsImmediately = cb && immediate || !cb && flush !== "post";
  let ssrCleanup;
  if (isInSSRComponentSetup) {
    if (flush === "sync") {
      const ctx = useSSRContext();
      ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
    } else if (!runsImmediately) {
      const watchStopHandle = () => {
      };
      watchStopHandle.stop = NOOP;
      watchStopHandle.resume = NOOP;
      watchStopHandle.pause = NOOP;
      return watchStopHandle;
    }
  }
  const instance = currentInstance;
  baseWatchOptions.call = (fn, type, args) => callWithAsyncErrorHandling(fn, instance, type, args);
  let isPre = false;
  if (flush === "post") {
    baseWatchOptions.scheduler = (job) => {
      queuePostRenderEffect(job, instance && instance.suspense);
    };
  } else if (flush !== "sync") {
    isPre = true;
    baseWatchOptions.scheduler = (job, isFirstRun) => {
      if (isFirstRun) {
        job();
      } else {
        queueJob(job);
      }
    };
  }
  baseWatchOptions.augmentJob = (job) => {
    if (cb) {
      job.flags |= 4;
    }
    if (isPre) {
      job.flags |= 2;
      if (instance) {
        job.id = instance.uid;
        job.i = instance;
      }
    }
  };
  const watchHandle = watch(source, cb, baseWatchOptions);
  if (isInSSRComponentSetup) {
    if (ssrCleanup) {
      ssrCleanup.push(watchHandle);
    } else if (runsImmediately) {
      watchHandle();
    }
  }
  return watchHandle;
}
function instanceWatch(source, value, options) {
  const publicThis = this.proxy;
  const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
  let cb;
  if (isFunction(value)) {
    cb = value;
  } else {
    cb = value.handler;
    options = value;
  }
  const reset = setCurrentInstance(this);
  const res = doWatch(getter, cb.bind(publicThis), options);
  reset();
  return res;
}
function createPathGetter(ctx, path) {
  const segments = path.split(".");
  return () => {
    let cur = ctx;
    for (let i = 0; i < segments.length && cur; i++) {
      cur = cur[segments[i]];
    }
    return cur;
  };
}
var TeleportEndKey = /* @__PURE__ */ Symbol("_vte");
var isTeleport = (type) => type.__isTeleport;
var leaveCbKey = /* @__PURE__ */ Symbol("_leaveCb");
function setTransitionHooks(vnode, hooks) {
  if (vnode.shapeFlag & 6 && vnode.component) {
    vnode.transition = hooks;
    setTransitionHooks(vnode.component.subTree, hooks);
  } else if (vnode.shapeFlag & 128) {
    vnode.ssContent.transition = hooks.clone(vnode.ssContent);
    vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
  } else {
    vnode.transition = hooks;
  }
}
// @__NO_SIDE_EFFECTS__
function defineComponent(options, extraOptions) {
  return isFunction(options) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
  ) : options;
}
function markAsyncBoundary(instance) {
  instance.ids = [instance.ids[0] + instance.ids[2]++ + "-", 0, 0];
}
var knownTemplateRefs = /* @__PURE__ */ new WeakSet();
function isTemplateRefKey(refs, key) {
  let desc;
  return !!((desc = Object.getOwnPropertyDescriptor(refs, key)) && !desc.configurable);
}
var pendingSetRefMap = /* @__PURE__ */ new WeakMap();
function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
  if (isArray(rawRef)) {
    rawRef.forEach(
      (r, i) => setRef(
        r,
        oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef),
        parentSuspense,
        vnode,
        isUnmount
      )
    );
    return;
  }
  if (isAsyncWrapper(vnode) && !isUnmount) {
    if (vnode.shapeFlag & 512 && vnode.type.__asyncResolved && vnode.component.subTree.component) {
      setRef(rawRef, oldRawRef, parentSuspense, vnode.component.subTree);
    }
    return;
  }
  const refValue = vnode.shapeFlag & 4 ? getComponentPublicInstance(vnode.component) : vnode.el;
  const value = isUnmount ? null : refValue;
  const { i: owner, r: ref2 } = rawRef;
  if (!owner) {
    warn$1(
      `Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`
    );
    return;
  }
  const oldRef = oldRawRef && oldRawRef.r;
  const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
  const setupState = owner.setupState;
  const rawSetupState = toRaw(setupState);
  const canSetSetupRef = setupState === EMPTY_OBJ ? NO : (key) => {
    if (true) {
      if (hasOwn(rawSetupState, key) && !isRef2(rawSetupState[key])) {
        warn$1(
          `Template ref "${key}" used on a non-ref value. It will not work in the production build.`
        );
      }
      if (knownTemplateRefs.has(rawSetupState[key])) {
        return false;
      }
    }
    if (isTemplateRefKey(refs, key)) {
      return false;
    }
    return hasOwn(rawSetupState, key);
  };
  const canSetRef = (ref22, key) => {
    if (knownTemplateRefs.has(ref22)) {
      return false;
    }
    if (key && isTemplateRefKey(refs, key)) {
      return false;
    }
    return true;
  };
  if (oldRef != null && oldRef !== ref2) {
    invalidatePendingSetRef(oldRawRef);
    if (isString(oldRef)) {
      refs[oldRef] = null;
      if (canSetSetupRef(oldRef)) {
        setupState[oldRef] = null;
      }
    } else if (isRef2(oldRef)) {
      const oldRawRefAtom = oldRawRef;
      if (canSetRef(oldRef, oldRawRefAtom.k)) {
        oldRef.value = null;
      }
      if (oldRawRefAtom.k) refs[oldRawRefAtom.k] = null;
    }
  }
  if (isFunction(ref2)) {
    callWithErrorHandling(ref2, owner, 12, [value, refs]);
  } else {
    const _isString = isString(ref2);
    const _isRef = isRef2(ref2);
    if (_isString || _isRef) {
      const doSet = () => {
        if (rawRef.f) {
          const existing = _isString ? canSetSetupRef(ref2) ? setupState[ref2] : refs[ref2] : canSetRef(ref2) || !rawRef.k ? ref2.value : refs[rawRef.k];
          if (isUnmount) {
            isArray(existing) && remove(existing, refValue);
          } else {
            if (!isArray(existing)) {
              if (_isString) {
                refs[ref2] = [refValue];
                if (canSetSetupRef(ref2)) {
                  setupState[ref2] = refs[ref2];
                }
              } else {
                const newVal = [refValue];
                if (canSetRef(ref2, rawRef.k)) {
                  ref2.value = newVal;
                }
                if (rawRef.k) refs[rawRef.k] = newVal;
              }
            } else if (!existing.includes(refValue)) {
              existing.push(refValue);
            }
          }
        } else if (_isString) {
          refs[ref2] = value;
          if (canSetSetupRef(ref2)) {
            setupState[ref2] = value;
          }
        } else if (_isRef) {
          if (canSetRef(ref2, rawRef.k)) {
            ref2.value = value;
          }
          if (rawRef.k) refs[rawRef.k] = value;
        } else if (true) {
          warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
        }
      };
      if (value) {
        const job = () => {
          doSet();
          pendingSetRefMap.delete(rawRef);
        };
        job.id = -1;
        pendingSetRefMap.set(rawRef, job);
        queuePostRenderEffect(job, parentSuspense);
      } else {
        invalidatePendingSetRef(rawRef);
        doSet();
      }
    } else if (true) {
      warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
    }
  }
}
function invalidatePendingSetRef(rawRef) {
  const pendingSetRef = pendingSetRefMap.get(rawRef);
  if (pendingSetRef) {
    pendingSetRef.flags |= 8;
    pendingSetRefMap.delete(rawRef);
  }
}
var requestIdleCallback = getGlobalThis().requestIdleCallback || ((cb) => setTimeout(cb, 1));
var cancelIdleCallback = getGlobalThis().cancelIdleCallback || ((id) => clearTimeout(id));
var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
function onActivated(hook, target) {
  registerKeepAliveHook(hook, "a", target);
}
function onDeactivated(hook, target) {
  registerKeepAliveHook(hook, "da", target);
}
function registerKeepAliveHook(hook, type, target = currentInstance) {
  const wrappedHook = hook.__wdc || (hook.__wdc = () => {
    let current = target;
    while (current) {
      if (current.isDeactivated) {
        return;
      }
      current = current.parent;
    }
    return hook();
  });
  injectHook(type, wrappedHook, target);
  if (target) {
    let current = target.parent;
    while (current && current.parent) {
      if (isKeepAlive(current.parent.vnode)) {
        injectToKeepAliveRoot(wrappedHook, type, target, current);
      }
      current = current.parent;
    }
  }
}
function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
  const injected = injectHook(
    type,
    hook,
    keepAliveRoot,
    true
    /* prepend */
  );
  onUnmounted(() => {
    remove(keepAliveRoot[type], injected);
  }, target);
}
function injectHook(type, hook, target = currentInstance, prepend = false) {
  if (target) {
    const hooks = target[type] || (target[type] = []);
    const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
      pauseTracking();
      const reset = setCurrentInstance(target);
      const res = callWithAsyncErrorHandling(hook, target, type, args);
      reset();
      resetTracking();
      return res;
    });
    if (prepend) {
      hooks.unshift(wrappedHook);
    } else {
      hooks.push(wrappedHook);
    }
    return wrappedHook;
  } else if (true) {
    const apiName = toHandlerKey(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
    warn$1(
      `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
var createHook = (lifecycle) => (hook, target = currentInstance) => {
  if (!isInSSRComponentSetup || lifecycle === "sp") {
    injectHook(lifecycle, (...args) => hook(...args), target);
  }
};
var onBeforeMount = createHook("bm");
var onMounted = createHook("m");
var onBeforeUpdate = createHook(
  "bu"
);
var onUpdated = createHook("u");
var onBeforeUnmount = createHook(
  "bum"
);
var onUnmounted = createHook("um");
var onServerPrefetch = createHook(
  "sp"
);
var onRenderTriggered = createHook("rtg");
var onRenderTracked = createHook("rtc");
function onErrorCaptured(hook, target = currentInstance) {
  injectHook("ec", hook, target);
}
var NULL_DYNAMIC_COMPONENT = /* @__PURE__ */ Symbol.for("v-ndc");
function renderList(source, renderItem, cache, index) {
  let ret;
  const cached = cache && cache[index];
  const sourceIsArray = isArray(source);
  if (sourceIsArray || isString(source)) {
    const sourceIsReactiveArray = sourceIsArray && isReactive(source);
    let needsWrap = false;
    let isReadonlySource = false;
    if (sourceIsReactiveArray) {
      needsWrap = !isShallow(source);
      isReadonlySource = isReadonly(source);
      source = shallowReadArray(source);
    }
    ret = new Array(source.length);
    for (let i = 0, l = source.length; i < l; i++) {
      ret[i] = renderItem(
        needsWrap ? isReadonlySource ? toReadonly(toReactive(source[i])) : toReactive(source[i]) : source[i],
        i,
        void 0,
        cached && cached[i]
      );
    }
  } else if (typeof source === "number") {
    if (!Number.isInteger(source) || source < 0) {
      warn$1(
        `The v-for range expects a positive integer value but got ${source}.`
      );
      ret = [];
    } else {
      ret = new Array(source);
      for (let i = 0; i < source; i++) {
        ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
      }
    }
  } else if (isObject(source)) {
    if (source[Symbol.iterator]) {
      ret = Array.from(
        source,
        (item, i) => renderItem(item, i, void 0, cached && cached[i])
      );
    } else {
      const keys = Object.keys(source);
      ret = new Array(keys.length);
      for (let i = 0, l = keys.length; i < l; i++) {
        const key = keys[i];
        ret[i] = renderItem(source[key], key, i, cached && cached[i]);
      }
    }
  } else {
    ret = [];
  }
  if (cache) {
    cache[index] = ret;
  }
  return ret;
}
var getPublicInstance = (i) => {
  if (!i) return null;
  if (isStatefulComponent(i)) return getComponentPublicInstance(i);
  return getPublicInstance(i.parent);
};
var publicPropertiesMap = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
    $: (i) => i,
    $el: (i) => i.vnode.el,
    $data: (i) => i.data,
    $props: (i) => true ? shallowReadonly(i.props) : i.props,
    $attrs: (i) => true ? shallowReadonly(i.attrs) : i.attrs,
    $slots: (i) => true ? shallowReadonly(i.slots) : i.slots,
    $refs: (i) => true ? shallowReadonly(i.refs) : i.refs,
    $parent: (i) => getPublicInstance(i.parent),
    $root: (i) => getPublicInstance(i.root),
    $host: (i) => i.ce,
    $emit: (i) => i.emit,
    $options: (i) => true ? resolveMergedOptions(i) : i.type,
    $forceUpdate: (i) => i.f || (i.f = () => {
      queueJob(i.update);
    }),
    $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
    $watch: (i) => true ? instanceWatch.bind(i) : NOOP
  })
);
var isReservedPrefix = (key) => key === "_" || key === "$";
var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
var PublicInstanceProxyHandlers = {
  get({ _: instance }, key) {
    if (key === "__v_skip") {
      return true;
    }
    const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
    if (key === "__isVue") {
      return true;
    }
    if (key[0] !== "$") {
      const n = accessCache[key];
      if (n !== void 0) {
        switch (n) {
          case 1:
            return setupState[key];
          case 2:
            return data[key];
          case 4:
            return ctx[key];
          case 3:
            return props[key];
        }
      } else if (hasSetupBinding(setupState, key)) {
        accessCache[key] = 1;
        return setupState[key];
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        accessCache[key] = 2;
        return data[key];
      } else if (hasOwn(props, key)) {
        accessCache[key] = 3;
        return props[key];
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (shouldCacheAccess) {
        accessCache[key] = 0;
      }
    }
    const publicGetter = publicPropertiesMap[key];
    let cssModule, globalProperties;
    if (publicGetter) {
      if (key === "$attrs") {
        track(instance.attrs, "get", "");
        markAttrsAccessed();
      } else if (key === "$slots") {
        track(instance, "get", key);
      }
      return publicGetter(instance);
    } else if (
      // css module (injected by vue-loader)
      (cssModule = type.__cssModules) && (cssModule = cssModule[key])
    ) {
      return cssModule;
    } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
      accessCache[key] = 4;
      return ctx[key];
    } else if (
      // global properties
      globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
    ) {
      {
        return globalProperties[key];
      }
    } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    key.indexOf("__v") !== 0)) {
      if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
        warn$1(
          `Property ${JSON.stringify(
            key
          )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
        );
      } else if (instance === currentRenderingInstance) {
        warn$1(
          `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
        );
      }
    }
  },
  set({ _: instance }, key, value) {
    const { data, setupState, ctx } = instance;
    if (hasSetupBinding(setupState, key)) {
      setupState[key] = value;
      return true;
    } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
      warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
      return false;
    } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
      data[key] = value;
      return true;
    } else if (hasOwn(instance.props, key)) {
      warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
      return false;
    }
    if (key[0] === "$" && key.slice(1) in instance) {
      warn$1(
        `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
      );
      return false;
    } else {
      if (key in instance.appContext.config.globalProperties) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          value
        });
      } else {
        ctx[key] = value;
      }
    }
    return true;
  },
  has({
    _: { data, setupState, accessCache, ctx, appContext, props, type }
  }, key) {
    let cssModules;
    return !!(accessCache[key] || data !== EMPTY_OBJ && key[0] !== "$" && hasOwn(data, key) || hasSetupBinding(setupState, key) || hasOwn(props, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key) || (cssModules = type.__cssModules) && cssModules[key]);
  },
  defineProperty(target, key, descriptor) {
    if (descriptor.get != null) {
      target._.accessCache[key] = 0;
    } else if (hasOwn(descriptor, "value")) {
      this.set(target, key, descriptor.value, null);
    }
    return Reflect.defineProperty(target, key, descriptor);
  }
};
if (true) {
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(
      `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
    );
    return Reflect.ownKeys(target);
  };
}
function createDevRenderContext(instance) {
  const target = {};
  Object.defineProperty(target, `_`, {
    configurable: true,
    enumerable: false,
    get: () => instance
  });
  Object.keys(publicPropertiesMap).forEach((key) => {
    Object.defineProperty(target, key, {
      configurable: true,
      enumerable: false,
      get: () => publicPropertiesMap[key](instance),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: NOOP
    });
  });
  return target;
}
function exposePropsOnRenderContext(instance) {
  const {
    ctx,
    propsOptions: [propsOptions]
  } = instance;
  if (propsOptions) {
    Object.keys(propsOptions).forEach((key) => {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => instance.props[key],
        set: NOOP
      });
    });
  }
}
function exposeSetupStateOnRenderContext(instance) {
  const { ctx, setupState } = instance;
  Object.keys(toRaw(setupState)).forEach((key) => {
    if (!setupState.__isScriptSetup) {
      if (isReservedPrefix(key[0])) {
        warn$1(
          `setup() return property ${JSON.stringify(
            key
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => setupState[key],
        set: NOOP
      });
    }
  });
}
function normalizePropsOrEmits(props) {
  return isArray(props) ? props.reduce(
    (normalized, p2) => (normalized[p2] = null, normalized),
    {}
  ) : props;
}
function createDuplicateChecker() {
  const cache = /* @__PURE__ */ Object.create(null);
  return (type, key) => {
    if (cache[key]) {
      warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
    } else {
      cache[key] = type;
    }
  };
}
var shouldCacheAccess = true;
function applyOptions(instance) {
  const options = resolveMergedOptions(instance);
  const publicThis = instance.proxy;
  const ctx = instance.ctx;
  shouldCacheAccess = false;
  if (options.beforeCreate) {
    callHook(options.beforeCreate, instance, "bc");
  }
  const {
    // state
    data: dataOptions,
    computed: computedOptions,
    methods,
    watch: watchOptions,
    provide: provideOptions,
    inject: injectOptions,
    // lifecycle
    created,
    beforeMount,
    mounted,
    beforeUpdate,
    updated,
    activated,
    deactivated,
    beforeDestroy,
    beforeUnmount,
    destroyed,
    unmounted,
    render,
    renderTracked,
    renderTriggered,
    errorCaptured,
    serverPrefetch,
    // public API
    expose,
    inheritAttrs,
    // assets
    components,
    directives,
    filters
  } = options;
  const checkDuplicateProperties = true ? createDuplicateChecker() : null;
  if (true) {
    const [propsOptions] = instance.propsOptions;
    if (propsOptions) {
      for (const key in propsOptions) {
        checkDuplicateProperties("Props", key);
      }
    }
  }
  if (injectOptions) {
    resolveInjections(injectOptions, ctx, checkDuplicateProperties);
  }
  if (methods) {
    for (const key in methods) {
      const methodHandler = methods[key];
      if (isFunction(methodHandler)) {
        if (true) {
          Object.defineProperty(ctx, key, {
            value: methodHandler.bind(publicThis),
            configurable: true,
            enumerable: true,
            writable: true
          });
        } else {
          ctx[key] = methodHandler.bind(publicThis);
        }
        if (true) {
          checkDuplicateProperties("Methods", key);
        }
      } else if (true) {
        warn$1(
          `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
        );
      }
    }
  }
  if (dataOptions) {
    if (!isFunction(dataOptions)) {
      warn$1(
        `The data option must be a function. Plain object usage is no longer supported.`
      );
    }
    const data = dataOptions.call(publicThis, publicThis);
    if (isPromise(data)) {
      warn$1(
        `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
      );
    }
    if (!isObject(data)) {
      warn$1(`data() should return an object.`);
    } else {
      instance.data = reactive(data);
      if (true) {
        for (const key in data) {
          checkDuplicateProperties("Data", key);
          if (!isReservedPrefix(key[0])) {
            Object.defineProperty(ctx, key, {
              configurable: true,
              enumerable: true,
              get: () => data[key],
              set: NOOP
            });
          }
        }
      }
    }
  }
  shouldCacheAccess = true;
  if (computedOptions) {
    for (const key in computedOptions) {
      const opt = computedOptions[key];
      const get = isFunction(opt) ? opt.bind(publicThis, publicThis) : isFunction(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
      if (get === NOOP) {
        warn$1(`Computed property "${key}" has no getter.`);
      }
      const set = !isFunction(opt) && isFunction(opt.set) ? opt.set.bind(publicThis) : true ? () => {
        warn$1(
          `Write operation failed: computed property "${key}" is readonly.`
        );
      } : NOOP;
      const c = computed2({
        get,
        set
      });
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => c.value,
        set: (v) => c.value = v
      });
      if (true) {
        checkDuplicateProperties("Computed", key);
      }
    }
  }
  if (watchOptions) {
    for (const key in watchOptions) {
      createWatcher(watchOptions[key], ctx, publicThis, key);
    }
  }
  if (provideOptions) {
    const provides = isFunction(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
    Reflect.ownKeys(provides).forEach((key) => {
      provide(key, provides[key]);
    });
  }
  if (created) {
    callHook(created, instance, "c");
  }
  function registerLifecycleHook(register, hook) {
    if (isArray(hook)) {
      hook.forEach((_hook) => register(_hook.bind(publicThis)));
    } else if (hook) {
      register(hook.bind(publicThis));
    }
  }
  registerLifecycleHook(onBeforeMount, beforeMount);
  registerLifecycleHook(onMounted, mounted);
  registerLifecycleHook(onBeforeUpdate, beforeUpdate);
  registerLifecycleHook(onUpdated, updated);
  registerLifecycleHook(onActivated, activated);
  registerLifecycleHook(onDeactivated, deactivated);
  registerLifecycleHook(onErrorCaptured, errorCaptured);
  registerLifecycleHook(onRenderTracked, renderTracked);
  registerLifecycleHook(onRenderTriggered, renderTriggered);
  registerLifecycleHook(onBeforeUnmount, beforeUnmount);
  registerLifecycleHook(onUnmounted, unmounted);
  registerLifecycleHook(onServerPrefetch, serverPrefetch);
  if (isArray(expose)) {
    if (expose.length) {
      const exposed = instance.exposed || (instance.exposed = {});
      expose.forEach((key) => {
        Object.defineProperty(exposed, key, {
          get: () => publicThis[key],
          set: (val) => publicThis[key] = val,
          enumerable: true
        });
      });
    } else if (!instance.exposed) {
      instance.exposed = {};
    }
  }
  if (render && instance.render === NOOP) {
    instance.render = render;
  }
  if (inheritAttrs != null) {
    instance.inheritAttrs = inheritAttrs;
  }
  if (components) instance.components = components;
  if (directives) instance.directives = directives;
  if (serverPrefetch) {
    markAsyncBoundary(instance);
  }
}
function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
  if (isArray(injectOptions)) {
    injectOptions = normalizeInject(injectOptions);
  }
  for (const key in injectOptions) {
    const opt = injectOptions[key];
    let injected;
    if (isObject(opt)) {
      if ("default" in opt) {
        injected = inject(
          opt.from || key,
          opt.default,
          true
        );
      } else {
        injected = inject(opt.from || key);
      }
    } else {
      injected = inject(opt);
    }
    if (isRef2(injected)) {
      Object.defineProperty(ctx, key, {
        enumerable: true,
        configurable: true,
        get: () => injected.value,
        set: (v) => injected.value = v
      });
    } else {
      ctx[key] = injected;
    }
    if (true) {
      checkDuplicateProperties("Inject", key);
    }
  }
}
function callHook(hook, instance, type) {
  callWithAsyncErrorHandling(
    isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
    instance,
    type
  );
}
function createWatcher(raw, ctx, publicThis, key) {
  let getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
  if (isString(raw)) {
    const handler = ctx[raw];
    if (isFunction(handler)) {
      {
        watch2(getter, handler);
      }
    } else if (true) {
      warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
    }
  } else if (isFunction(raw)) {
    {
      watch2(getter, raw.bind(publicThis));
    }
  } else if (isObject(raw)) {
    if (isArray(raw)) {
      raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
    } else {
      const handler = isFunction(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
      if (isFunction(handler)) {
        watch2(getter, handler, raw);
      } else if (true) {
        warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
      }
    }
  } else if (true) {
    warn$1(`Invalid watch option: "${key}"`, raw);
  }
}
function resolveMergedOptions(instance) {
  const base = instance.type;
  const { mixins, extends: extendsOptions } = base;
  const {
    mixins: globalMixins,
    optionsCache: cache,
    config: { optionMergeStrategies }
  } = instance.appContext;
  const cached = cache.get(base);
  let resolved;
  if (cached) {
    resolved = cached;
  } else if (!globalMixins.length && !mixins && !extendsOptions) {
    {
      resolved = base;
    }
  } else {
    resolved = {};
    if (globalMixins.length) {
      globalMixins.forEach(
        (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
      );
    }
    mergeOptions(resolved, base, optionMergeStrategies);
  }
  if (isObject(base)) {
    cache.set(base, resolved);
  }
  return resolved;
}
function mergeOptions(to, from, strats, asMixin = false) {
  const { mixins, extends: extendsOptions } = from;
  if (extendsOptions) {
    mergeOptions(to, extendsOptions, strats, true);
  }
  if (mixins) {
    mixins.forEach(
      (m) => mergeOptions(to, m, strats, true)
    );
  }
  for (const key in from) {
    if (asMixin && key === "expose") {
      warn$1(
        `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
      );
    } else {
      const strat = internalOptionMergeStrats[key] || strats && strats[key];
      to[key] = strat ? strat(to[key], from[key]) : from[key];
    }
  }
  return to;
}
var internalOptionMergeStrats = {
  data: mergeDataFn,
  props: mergeEmitsOrPropsOptions,
  emits: mergeEmitsOrPropsOptions,
  // objects
  methods: mergeObjectOptions,
  computed: mergeObjectOptions,
  // lifecycle
  beforeCreate: mergeAsArray,
  created: mergeAsArray,
  beforeMount: mergeAsArray,
  mounted: mergeAsArray,
  beforeUpdate: mergeAsArray,
  updated: mergeAsArray,
  beforeDestroy: mergeAsArray,
  beforeUnmount: mergeAsArray,
  destroyed: mergeAsArray,
  unmounted: mergeAsArray,
  activated: mergeAsArray,
  deactivated: mergeAsArray,
  errorCaptured: mergeAsArray,
  serverPrefetch: mergeAsArray,
  // assets
  components: mergeObjectOptions,
  directives: mergeObjectOptions,
  // watch
  watch: mergeWatchOptions,
  // provide / inject
  provide: mergeDataFn,
  inject: mergeInject
};
function mergeDataFn(to, from) {
  if (!from) {
    return to;
  }
  if (!to) {
    return from;
  }
  return function mergedDataFn() {
    return extend(
      isFunction(to) ? to.call(this, this) : to,
      isFunction(from) ? from.call(this, this) : from
    );
  };
}
function mergeInject(to, from) {
  return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
}
function normalizeInject(raw) {
  if (isArray(raw)) {
    const res = {};
    for (let i = 0; i < raw.length; i++) {
      res[raw[i]] = raw[i];
    }
    return res;
  }
  return raw;
}
function mergeAsArray(to, from) {
  return to ? [...new Set([].concat(to, from))] : from;
}
function mergeObjectOptions(to, from) {
  return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
}
function mergeEmitsOrPropsOptions(to, from) {
  if (to) {
    if (isArray(to) && isArray(from)) {
      return [.../* @__PURE__ */ new Set([...to, ...from])];
    }
    return extend(
      /* @__PURE__ */ Object.create(null),
      normalizePropsOrEmits(to),
      normalizePropsOrEmits(from != null ? from : {})
    );
  } else {
    return from;
  }
}
function mergeWatchOptions(to, from) {
  if (!to) return from;
  if (!from) return to;
  const merged = extend(/* @__PURE__ */ Object.create(null), to);
  for (const key in from) {
    merged[key] = mergeAsArray(to[key], from[key]);
  }
  return merged;
}
function createAppContext() {
  return {
    app: null,
    config: {
      isNativeTag: NO,
      performance: false,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
var uid$1 = 0;
function createAppAPI(render, hydrate) {
  return function createApp2(rootComponent, rootProps = null) {
    if (!isFunction(rootComponent)) {
      rootComponent = extend({}, rootComponent);
    }
    if (rootProps != null && !isObject(rootProps)) {
      warn$1(`root props passed to app.mount() must be an object.`);
      rootProps = null;
    }
    const context = createAppContext();
    const installedPlugins = /* @__PURE__ */ new WeakSet();
    const pluginCleanupFns = [];
    let isMounted = false;
    const app2 = context.app = {
      _uid: uid$1++,
      _component: rootComponent,
      _props: rootProps,
      _container: null,
      _context: context,
      _instance: null,
      version,
      get config() {
        return context.config;
      },
      set config(v) {
        if (true) {
          warn$1(
            `app.config cannot be replaced. Modify individual options instead.`
          );
        }
      },
      use(plugin, ...options) {
        if (installedPlugins.has(plugin)) {
          warn$1(`Plugin has already been applied to target app.`);
        } else if (plugin && isFunction(plugin.install)) {
          installedPlugins.add(plugin);
          plugin.install(app2, ...options);
        } else if (isFunction(plugin)) {
          installedPlugins.add(plugin);
          plugin(app2, ...options);
        } else if (true) {
          warn$1(
            `A plugin must either be a function or an object with an "install" function.`
          );
        }
        return app2;
      },
      mixin(mixin) {
        if (true) {
          if (!context.mixins.includes(mixin)) {
            context.mixins.push(mixin);
          } else if (true) {
            warn$1(
              "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
            );
          }
        } else if (true) {
          warn$1("Mixins are only available in builds supporting Options API");
        }
        return app2;
      },
      component(name, component) {
        if (true) {
          validateComponentName(name, context.config);
        }
        if (!component) {
          return context.components[name];
        }
        if (context.components[name]) {
          warn$1(`Component "${name}" has already been registered in target app.`);
        }
        context.components[name] = component;
        return app2;
      },
      directive(name, directive) {
        if (true) {
          validateDirectiveName(name);
        }
        if (!directive) {
          return context.directives[name];
        }
        if (context.directives[name]) {
          warn$1(`Directive "${name}" has already been registered in target app.`);
        }
        context.directives[name] = directive;
        return app2;
      },
      mount(rootContainer, isHydrate, namespace) {
        if (!isMounted) {
          if (rootContainer.__vue_app__) {
            warn$1(
              `There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`
            );
          }
          const vnode = app2._ceVNode || createVNode(rootComponent, rootProps);
          vnode.appContext = context;
          if (namespace === true) {
            namespace = "svg";
          } else if (namespace === false) {
            namespace = void 0;
          }
          if (true) {
            context.reload = () => {
              const cloned = cloneVNode(vnode);
              cloned.el = null;
              render(cloned, rootContainer, namespace);
            };
          }
          if (isHydrate && hydrate) {
            hydrate(vnode, rootContainer);
          } else {
            render(vnode, rootContainer, namespace);
          }
          isMounted = true;
          app2._container = rootContainer;
          rootContainer.__vue_app__ = app2;
          if (true) {
            app2._instance = vnode.component;
            devtoolsInitApp(app2, version);
          }
          return getComponentPublicInstance(vnode.component);
        } else if (true) {
          warn$1(
            `App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``
          );
        }
      },
      onUnmount(cleanupFn) {
        if (typeof cleanupFn !== "function") {
          warn$1(
            `Expected function as first argument to app.onUnmount(), but got ${typeof cleanupFn}`
          );
        }
        pluginCleanupFns.push(cleanupFn);
      },
      unmount() {
        if (isMounted) {
          callWithAsyncErrorHandling(
            pluginCleanupFns,
            app2._instance,
            16
          );
          render(null, app2._container);
          if (true) {
            app2._instance = null;
            devtoolsUnmountApp(app2);
          }
          delete app2._container.__vue_app__;
        } else if (true) {
          warn$1(`Cannot unmount an app that is not mounted.`);
        }
      },
      provide(key, value) {
        if (key in context.provides) {
          if (hasOwn(context.provides, key)) {
            warn$1(
              `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
            );
          } else {
            warn$1(
              `App already provides property with key "${String(key)}" inherited from its parent element. It will be overwritten with the new value.`
            );
          }
        }
        context.provides[key] = value;
        return app2;
      },
      runWithContext(fn) {
        const lastApp = currentApp;
        currentApp = app2;
        try {
          return fn();
        } finally {
          currentApp = lastApp;
        }
      }
    };
    return app2;
  };
}
var currentApp = null;
var getModelModifiers = (props, modelName) => {
  return modelName === "modelValue" || modelName === "model-value" ? props.modelModifiers : props[`${modelName}Modifiers`] || props[`${camelize(modelName)}Modifiers`] || props[`${hyphenate(modelName)}Modifiers`];
};
function emit(instance, event, ...rawArgs) {
  if (instance.isUnmounted) return;
  const props = instance.vnode.props || EMPTY_OBJ;
  if (true) {
    const {
      emitsOptions,
      propsOptions: [propsOptions]
    } = instance;
    if (emitsOptions) {
      if (!(event in emitsOptions) && true) {
        if (!propsOptions || !(toHandlerKey(camelize(event)) in propsOptions)) {
          warn$1(
            `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(camelize(event))}" prop.`
          );
        }
      } else {
        const validator = emitsOptions[event];
        if (isFunction(validator)) {
          const isValid = validator(...rawArgs);
          if (!isValid) {
            warn$1(
              `Invalid event arguments: event validation failed for event "${event}".`
            );
          }
        }
      }
    }
  }
  let args = rawArgs;
  const isModelListener2 = event.startsWith("update:");
  const modifiers = isModelListener2 && getModelModifiers(props, event.slice(7));
  if (modifiers) {
    if (modifiers.trim) {
      args = rawArgs.map((a) => isString(a) ? a.trim() : a);
    }
    if (modifiers.number) {
      args = rawArgs.map(looseToNumber);
    }
  }
  if (true) {
    devtoolsComponentEmit(instance, event, args);
  }
  if (true) {
    const lowerCaseEvent = event.toLowerCase();
    if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
      warn$1(
        `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
          instance,
          instance.type
        )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(
          event
        )}" instead of "${event}".`
      );
    }
  }
  let handlerName;
  let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
  props[handlerName = toHandlerKey(camelize(event))];
  if (!handler && isModelListener2) {
    handler = props[handlerName = toHandlerKey(hyphenate(event))];
  }
  if (handler) {
    callWithAsyncErrorHandling(
      handler,
      instance,
      6,
      args
    );
  }
  const onceHandler = props[handlerName + `Once`];
  if (onceHandler) {
    if (!instance.emitted) {
      instance.emitted = {};
    } else if (instance.emitted[handlerName]) {
      return;
    }
    instance.emitted[handlerName] = true;
    callWithAsyncErrorHandling(
      onceHandler,
      instance,
      6,
      args
    );
  }
}
var mixinEmitsCache = /* @__PURE__ */ new WeakMap();
function normalizeEmitsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinEmitsCache : appContext.emitsCache;
  const cached = cache.get(comp);
  if (cached !== void 0) {
    return cached;
  }
  const raw = comp.emits;
  let normalized = {};
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendEmits = (raw2) => {
      const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
      if (normalizedFromExtend) {
        hasExtends = true;
        extend(normalized, normalizedFromExtend);
      }
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendEmits);
    }
    if (comp.extends) {
      extendEmits(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendEmits);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, null);
    }
    return null;
  }
  if (isArray(raw)) {
    raw.forEach((key) => normalized[key] = null);
  } else {
    extend(normalized, raw);
  }
  if (isObject(comp)) {
    cache.set(comp, normalized);
  }
  return normalized;
}
function isEmitListener(options, key) {
  if (!options || !isOn(key)) {
    return false;
  }
  key = key.slice(2).replace(/Once$/, "");
  return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
}
var accessedAttrs = false;
function markAttrsAccessed() {
  accessedAttrs = true;
}
function renderComponentRoot(instance) {
  const {
    type: Component,
    vnode,
    proxy,
    withProxy,
    propsOptions: [propsOptions],
    slots,
    attrs,
    emit: emit2,
    render,
    renderCache,
    props,
    data,
    setupState,
    ctx,
    inheritAttrs
  } = instance;
  const prev = setCurrentRenderingInstance(instance);
  let result;
  let fallthroughAttrs;
  if (true) {
    accessedAttrs = false;
  }
  try {
    if (vnode.shapeFlag & 4) {
      const proxyToUse = withProxy || proxy;
      const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
        get(target, key, receiver) {
          warn$1(
            `Property '${String(
              key
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          );
          return Reflect.get(target, key, receiver);
        }
      }) : proxyToUse;
      result = normalizeVNode(
        render.call(
          thisProxy,
          proxyToUse,
          renderCache,
          true ? shallowReadonly(props) : props,
          setupState,
          data,
          ctx
        )
      );
      fallthroughAttrs = attrs;
    } else {
      const render2 = Component;
      if (attrs === props) {
        markAttrsAccessed();
      }
      result = normalizeVNode(
        render2.length > 1 ? render2(
          true ? shallowReadonly(props) : props,
          true ? {
            get attrs() {
              markAttrsAccessed();
              return shallowReadonly(attrs);
            },
            slots,
            emit: emit2
          } : { attrs, slots, emit: emit2 }
        ) : render2(
          true ? shallowReadonly(props) : props,
          null
        )
      );
      fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
    }
  } catch (err) {
    blockStack.length = 0;
    handleError(err, instance, 1);
    result = createVNode(Comment);
  }
  let root = result;
  let setRoot = void 0;
  if (result.patchFlag > 0 && result.patchFlag & 2048) {
    [root, setRoot] = getChildRoot(result);
  }
  if (fallthroughAttrs && inheritAttrs !== false) {
    const keys = Object.keys(fallthroughAttrs);
    const { shapeFlag } = root;
    if (keys.length) {
      if (shapeFlag & (1 | 6)) {
        if (propsOptions && keys.some(isModelListener)) {
          fallthroughAttrs = filterModelListeners(
            fallthroughAttrs,
            propsOptions
          );
        }
        root = cloneVNode(root, fallthroughAttrs, false, true);
      } else if (!accessedAttrs && root.type !== Comment) {
        const allAttrs = Object.keys(attrs);
        const eventAttrs = [];
        const extraAttrs = [];
        for (let i = 0, l = allAttrs.length; i < l; i++) {
          const key = allAttrs[i];
          if (isOn(key)) {
            if (!isModelListener(key)) {
              eventAttrs.push(key[2].toLowerCase() + key.slice(3));
            }
          } else {
            extraAttrs.push(key);
          }
        }
        if (extraAttrs.length) {
          warn$1(
            `Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
          );
        }
        if (eventAttrs.length) {
          warn$1(
            `Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
          );
        }
      }
    }
  }
  if (vnode.dirs) {
    if (!isElementRoot(root)) {
      warn$1(
        `Runtime directive used on component with non-element root node. The directives will not function as intended.`
      );
    }
    root = cloneVNode(root, null, false, true);
    root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
  }
  if (vnode.transition) {
    if (!isElementRoot(root)) {
      warn$1(
        `Component inside <Transition> renders non-element root node that cannot be animated.`
      );
    }
    setTransitionHooks(root, vnode.transition);
  }
  if (setRoot) {
    setRoot(root);
  } else {
    result = root;
  }
  setCurrentRenderingInstance(prev);
  return result;
}
var getChildRoot = (vnode) => {
  const rawChildren = vnode.children;
  const dynamicChildren = vnode.dynamicChildren;
  const childRoot = filterSingleRoot(rawChildren, false);
  if (!childRoot) {
    return [vnode, void 0];
  } else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) {
    return getChildRoot(childRoot);
  }
  const index = rawChildren.indexOf(childRoot);
  const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
  const setRoot = (updatedRoot) => {
    rawChildren[index] = updatedRoot;
    if (dynamicChildren) {
      if (dynamicIndex > -1) {
        dynamicChildren[dynamicIndex] = updatedRoot;
      } else if (updatedRoot.patchFlag > 0) {
        vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
      }
    }
  };
  return [normalizeVNode(childRoot), setRoot];
};
function filterSingleRoot(children, recurse = true) {
  let singleRoot;
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (isVNode(child)) {
      if (child.type !== Comment || child.children === "v-if") {
        if (singleRoot) {
          return;
        } else {
          singleRoot = child;
          if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) {
            return filterSingleRoot(singleRoot.children);
          }
        }
      }
    } else {
      return;
    }
  }
  return singleRoot;
}
var getFunctionalFallthrough = (attrs) => {
  let res;
  for (const key in attrs) {
    if (key === "class" || key === "style" || isOn(key)) {
      (res || (res = {}))[key] = attrs[key];
    }
  }
  return res;
};
var filterModelListeners = (attrs, props) => {
  const res = {};
  for (const key in attrs) {
    if (!isModelListener(key) || !(key.slice(9) in props)) {
      res[key] = attrs[key];
    }
  }
  return res;
};
var isElementRoot = (vnode) => {
  return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
};
function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
  const { props: prevProps, children: prevChildren, component } = prevVNode;
  const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
  const emits = component.emitsOptions;
  if ((prevChildren || nextChildren) && isHmrUpdating) {
    return true;
  }
  if (nextVNode.dirs || nextVNode.transition) {
    return true;
  }
  if (optimized && patchFlag >= 0) {
    if (patchFlag & 1024) {
      return true;
    }
    if (patchFlag & 16) {
      if (!prevProps) {
        return !!nextProps;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    } else if (patchFlag & 8) {
      const dynamicProps = nextVNode.dynamicProps;
      for (let i = 0; i < dynamicProps.length; i++) {
        const key = dynamicProps[i];
        if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emits, key)) {
          return true;
        }
      }
    }
  } else {
    if (prevChildren || nextChildren) {
      if (!nextChildren || !nextChildren.$stable) {
        return true;
      }
    }
    if (prevProps === nextProps) {
      return false;
    }
    if (!prevProps) {
      return !!nextProps;
    }
    if (!nextProps) {
      return true;
    }
    return hasPropsChanged(prevProps, nextProps, emits);
  }
  return false;
}
function hasPropsChanged(prevProps, nextProps, emitsOptions) {
  const nextKeys = Object.keys(nextProps);
  if (nextKeys.length !== Object.keys(prevProps).length) {
    return true;
  }
  for (let i = 0; i < nextKeys.length; i++) {
    const key = nextKeys[i];
    if (hasPropValueChanged(nextProps, prevProps, key) && !isEmitListener(emitsOptions, key)) {
      return true;
    }
  }
  return false;
}
function hasPropValueChanged(nextProps, prevProps, key) {
  const nextProp = nextProps[key];
  const prevProp = prevProps[key];
  if (key === "style" && isObject(nextProp) && isObject(prevProp)) {
    return !looseEqual(nextProp, prevProp);
  }
  return nextProp !== prevProp;
}
function updateHOCHostEl({ vnode, parent: parent2 }, el) {
  while (parent2) {
    const root = parent2.subTree;
    if (root.suspense && root.suspense.activeBranch === vnode) {
      root.el = vnode.el;
    }
    if (root === vnode) {
      (vnode = parent2.vnode).el = el;
      parent2 = parent2.parent;
    } else {
      break;
    }
  }
}
var internalObjectProto = {};
var createInternalObject = () => Object.create(internalObjectProto);
var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
function initProps(instance, rawProps, isStateful, isSSR = false) {
  const props = {};
  const attrs = createInternalObject();
  instance.propsDefaults = /* @__PURE__ */ Object.create(null);
  setFullProps(instance, rawProps, props, attrs);
  for (const key in instance.propsOptions[0]) {
    if (!(key in props)) {
      props[key] = void 0;
    }
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
  if (isStateful) {
    instance.props = isSSR ? props : shallowReactive(props);
  } else {
    if (!instance.type.props) {
      instance.props = attrs;
    } else {
      instance.props = props;
    }
  }
  instance.attrs = attrs;
}
function isInHmrContext(instance) {
  while (instance) {
    if (instance.type.__hmrId) return true;
    instance = instance.parent;
  }
}
function updateProps(instance, rawProps, rawPrevProps, optimized) {
  const {
    props,
    attrs,
    vnode: { patchFlag }
  } = instance;
  const rawCurrentProps = toRaw(props);
  const [options] = instance.propsOptions;
  let hasAttrsChanged = false;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
  ) {
    if (patchFlag & 8) {
      const propsToUpdate = instance.vnode.dynamicProps;
      for (let i = 0; i < propsToUpdate.length; i++) {
        let key = propsToUpdate[i];
        if (isEmitListener(instance.emitsOptions, key)) {
          continue;
        }
        const value = rawProps[key];
        if (options) {
          if (hasOwn(attrs, key)) {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          } else {
            const camelizedKey = camelize(key);
            props[camelizedKey] = resolvePropValue(
              options,
              rawCurrentProps,
              camelizedKey,
              value,
              instance,
              false
            );
          }
        } else {
          if (value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
  } else {
    if (setFullProps(instance, rawProps, props, attrs)) {
      hasAttrsChanged = true;
    }
    let kebabKey;
    for (const key in rawCurrentProps) {
      if (!rawProps || // for camelCase
      !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
        if (options) {
          if (rawPrevProps && // for camelCase
          (rawPrevProps[key] !== void 0 || // for kebab-case
          rawPrevProps[kebabKey] !== void 0)) {
            props[key] = resolvePropValue(
              options,
              rawCurrentProps,
              key,
              void 0,
              instance,
              true
            );
          }
        } else {
          delete props[key];
        }
      }
    }
    if (attrs !== rawCurrentProps) {
      for (const key in attrs) {
        if (!rawProps || !hasOwn(rawProps, key) && true) {
          delete attrs[key];
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (hasAttrsChanged) {
    trigger(instance.attrs, "set", "");
  }
  if (true) {
    validateProps(rawProps || {}, props, instance);
  }
}
function setFullProps(instance, rawProps, props, attrs) {
  const [options, needCastKeys] = instance.propsOptions;
  let hasAttrsChanged = false;
  let rawCastValues;
  if (rawProps) {
    for (let key in rawProps) {
      if (isReservedProp(key)) {
        continue;
      }
      const value = rawProps[key];
      let camelKey;
      if (options && hasOwn(options, camelKey = camelize(key))) {
        if (!needCastKeys || !needCastKeys.includes(camelKey)) {
          props[camelKey] = value;
        } else {
          (rawCastValues || (rawCastValues = {}))[camelKey] = value;
        }
      } else if (!isEmitListener(instance.emitsOptions, key)) {
        if (!(key in attrs) || value !== attrs[key]) {
          attrs[key] = value;
          hasAttrsChanged = true;
        }
      }
    }
  }
  if (needCastKeys) {
    const rawCurrentProps = toRaw(props);
    const castValues = rawCastValues || EMPTY_OBJ;
    for (let i = 0; i < needCastKeys.length; i++) {
      const key = needCastKeys[i];
      props[key] = resolvePropValue(
        options,
        rawCurrentProps,
        key,
        castValues[key],
        instance,
        !hasOwn(castValues, key)
      );
    }
  }
  return hasAttrsChanged;
}
function resolvePropValue(options, props, key, value, instance, isAbsent) {
  const opt = options[key];
  if (opt != null) {
    const hasDefault = hasOwn(opt, "default");
    if (hasDefault && value === void 0) {
      const defaultValue = opt.default;
      if (opt.type !== Function && !opt.skipFactory && isFunction(defaultValue)) {
        const { propsDefaults } = instance;
        if (key in propsDefaults) {
          value = propsDefaults[key];
        } else {
          const reset = setCurrentInstance(instance);
          value = propsDefaults[key] = defaultValue.call(
            null,
            props
          );
          reset();
        }
      } else {
        value = defaultValue;
      }
      if (instance.ce) {
        instance.ce._setProp(key, value);
      }
    }
    if (opt[
      0
      /* shouldCast */
    ]) {
      if (isAbsent && !hasDefault) {
        value = false;
      } else if (opt[
        1
        /* shouldCastTrue */
      ] && (value === "" || value === hyphenate(key))) {
        value = true;
      }
    }
  }
  return value;
}
var mixinPropsCache = /* @__PURE__ */ new WeakMap();
function normalizePropsOptions(comp, appContext, asMixin = false) {
  const cache = asMixin ? mixinPropsCache : appContext.propsCache;
  const cached = cache.get(comp);
  if (cached) {
    return cached;
  }
  const raw = comp.props;
  const normalized = {};
  const needCastKeys = [];
  let hasExtends = false;
  if (!isFunction(comp)) {
    const extendProps = (raw2) => {
      hasExtends = true;
      const [props, keys] = normalizePropsOptions(raw2, appContext, true);
      extend(normalized, props);
      if (keys) needCastKeys.push(...keys);
    };
    if (!asMixin && appContext.mixins.length) {
      appContext.mixins.forEach(extendProps);
    }
    if (comp.extends) {
      extendProps(comp.extends);
    }
    if (comp.mixins) {
      comp.mixins.forEach(extendProps);
    }
  }
  if (!raw && !hasExtends) {
    if (isObject(comp)) {
      cache.set(comp, EMPTY_ARR);
    }
    return EMPTY_ARR;
  }
  if (isArray(raw)) {
    for (let i = 0; i < raw.length; i++) {
      if (!isString(raw[i])) {
        warn$1(`props must be strings when using array syntax.`, raw[i]);
      }
      const normalizedKey = camelize(raw[i]);
      if (validatePropName(normalizedKey)) {
        normalized[normalizedKey] = EMPTY_OBJ;
      }
    }
  } else if (raw) {
    if (!isObject(raw)) {
      warn$1(`invalid props options`, raw);
    }
    for (const key in raw) {
      const normalizedKey = camelize(key);
      if (validatePropName(normalizedKey)) {
        const opt = raw[key];
        const prop = normalized[normalizedKey] = isArray(opt) || isFunction(opt) ? { type: opt } : extend({}, opt);
        const propType = prop.type;
        let shouldCast = false;
        let shouldCastTrue = true;
        if (isArray(propType)) {
          for (let index = 0; index < propType.length; ++index) {
            const type = propType[index];
            const typeName = isFunction(type) && type.name;
            if (typeName === "Boolean") {
              shouldCast = true;
              break;
            } else if (typeName === "String") {
              shouldCastTrue = false;
            }
          }
        } else {
          shouldCast = isFunction(propType) && propType.name === "Boolean";
        }
        prop[
          0
          /* shouldCast */
        ] = shouldCast;
        prop[
          1
          /* shouldCastTrue */
        ] = shouldCastTrue;
        if (shouldCast || hasOwn(prop, "default")) {
          needCastKeys.push(normalizedKey);
        }
      }
    }
  }
  const res = [normalized, needCastKeys];
  if (isObject(comp)) {
    cache.set(comp, res);
  }
  return res;
}
function validatePropName(key) {
  if (key[0] !== "$" && !isReservedProp(key)) {
    return true;
  } else if (true) {
    warn$1(`Invalid prop name: "${key}" is a reserved property.`);
  }
  return false;
}
function getType(ctor) {
  if (ctor === null) {
    return "null";
  }
  if (typeof ctor === "function") {
    return ctor.name || "";
  } else if (typeof ctor === "object") {
    const name = ctor.constructor && ctor.constructor.name;
    return name || "";
  }
  return "";
}
function validateProps(rawProps, props, instance) {
  const resolvedValues = toRaw(props);
  const options = instance.propsOptions[0];
  const camelizePropsKey = Object.keys(rawProps).map((key) => camelize(key));
  for (const key in options) {
    let opt = options[key];
    if (opt == null) continue;
    validateProp(
      key,
      resolvedValues[key],
      opt,
      true ? shallowReadonly(resolvedValues) : resolvedValues,
      !camelizePropsKey.includes(key)
    );
  }
}
function validateProp(name, value, prop, props, isAbsent) {
  const { type, required, validator, skipCheck } = prop;
  if (required && isAbsent) {
    warn$1('Missing required prop: "' + name + '"');
    return;
  }
  if (value == null && !required) {
    return;
  }
  if (type != null && type !== true && !skipCheck) {
    let isValid = false;
    const types = isArray(type) ? type : [type];
    const expectedTypes = [];
    for (let i = 0; i < types.length && !isValid; i++) {
      const { valid, expectedType } = assertType(value, types[i]);
      expectedTypes.push(expectedType || "");
      isValid = valid;
    }
    if (!isValid) {
      warn$1(getInvalidTypeMessage(name, value, expectedTypes));
      return;
    }
  }
  if (validator && !validator(value, props)) {
    warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
  }
}
var isSimpleType = /* @__PURE__ */ makeMap(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function assertType(value, type) {
  let valid;
  const expectedType = getType(type);
  if (expectedType === "null") {
    valid = value === null;
  } else if (isSimpleType(expectedType)) {
    const t = typeof value;
    valid = t === expectedType.toLowerCase();
    if (!valid && t === "object") {
      valid = value instanceof type;
    }
  } else if (expectedType === "Object") {
    valid = isObject(value);
  } else if (expectedType === "Array") {
    valid = isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid,
    expectedType
  };
}
function getInvalidTypeMessage(name, value, expectedTypes) {
  if (expectedTypes.length === 0) {
    return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
  }
  let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
  const expectedType = expectedTypes[0];
  const receivedType = toRawType(value);
  const expectedValue = styleValue(value, expectedType);
  const receivedValue = styleValue(value, receivedType);
  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += ` with value ${expectedValue}`;
  }
  message += `, got ${receivedType} `;
  if (isExplicable(receivedType)) {
    message += `with value ${receivedValue}.`;
  }
  return message;
}
function styleValue(value, type) {
  if (type === "String") {
    return `"${value}"`;
  } else if (type === "Number") {
    return `${Number(value)}`;
  } else {
    return `${value}`;
  }
}
function isExplicable(type) {
  const explicitTypes = ["string", "number", "boolean"];
  return explicitTypes.some((elem) => type.toLowerCase() === elem);
}
function isBoolean(...args) {
  return args.some((elem) => elem.toLowerCase() === "boolean");
}
var isInternalKey = (key) => key === "_" || key === "_ctx" || key === "$stable";
var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
var normalizeSlot = (key, rawSlot, ctx) => {
  if (rawSlot._n) {
    return rawSlot;
  }
  const normalized = withCtx((...args) => {
    if (currentInstance && !(ctx === null && currentRenderingInstance) && !(ctx && ctx.root !== currentInstance.root)) {
      warn$1(
        `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
      );
    }
    return normalizeSlotValue(rawSlot(...args));
  }, ctx);
  normalized._c = false;
  return normalized;
};
var normalizeObjectSlots = (rawSlots, slots, instance) => {
  const ctx = rawSlots._ctx;
  for (const key in rawSlots) {
    if (isInternalKey(key)) continue;
    const value = rawSlots[key];
    if (isFunction(value)) {
      slots[key] = normalizeSlot(key, value, ctx);
    } else if (value != null) {
      if (true) {
        warn$1(
          `Non-function value encountered for slot "${key}". Prefer function slots for better performance.`
        );
      }
      const normalized = normalizeSlotValue(value);
      slots[key] = () => normalized;
    }
  }
};
var normalizeVNodeSlots = (instance, children) => {
  if (!isKeepAlive(instance.vnode) && true) {
    warn$1(
      `Non-function value encountered for default slot. Prefer function slots for better performance.`
    );
  }
  const normalized = normalizeSlotValue(children);
  instance.slots.default = () => normalized;
};
var assignSlots = (slots, children, optimized) => {
  for (const key in children) {
    if (optimized || !isInternalKey(key)) {
      slots[key] = children[key];
    }
  }
};
var initSlots = (instance, children, optimized) => {
  const slots = instance.slots = createInternalObject();
  if (instance.vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      assignSlots(slots, children, optimized);
      if (optimized) {
        def(slots, "_", type, true);
      }
    } else {
      normalizeObjectSlots(children, slots);
    }
  } else if (children) {
    normalizeVNodeSlots(instance, children);
  }
};
var updateSlots = (instance, children, optimized) => {
  const { vnode, slots } = instance;
  let needDeletionCheck = true;
  let deletionComparisonTarget = EMPTY_OBJ;
  if (vnode.shapeFlag & 32) {
    const type = children._;
    if (type) {
      if (isHmrUpdating) {
        assignSlots(slots, children, optimized);
        trigger(instance, "set", "$slots");
      } else if (optimized && type === 1) {
        needDeletionCheck = false;
      } else {
        assignSlots(slots, children, optimized);
      }
    } else {
      needDeletionCheck = !children.$stable;
      normalizeObjectSlots(children, slots);
    }
    deletionComparisonTarget = children;
  } else if (children) {
    normalizeVNodeSlots(instance, children);
    deletionComparisonTarget = { default: 1 };
  }
  if (needDeletionCheck) {
    for (const key in slots) {
      if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
        delete slots[key];
      }
    }
  }
};
var supported;
var perf;
function startMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    perf.mark(`vue-${type}-${instance.uid}`);
  }
  if (true) {
    devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function endMeasure(instance, type) {
  if (instance.appContext.config.performance && isSupported()) {
    const startTag = `vue-${type}-${instance.uid}`;
    const endTag = startTag + `:end`;
    const measureName = `<${formatComponentName(instance, instance.type)}> ${type}`;
    perf.mark(endTag);
    perf.measure(measureName, startTag, endTag);
    perf.clearMeasures(measureName);
    perf.clearMarks(startTag);
    perf.clearMarks(endTag);
  }
  if (true) {
    devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
  }
}
function isSupported() {
  if (supported !== void 0) {
    return supported;
  }
  if (typeof window !== "undefined" && window.performance) {
    supported = true;
    perf = window.performance;
  } else {
    supported = false;
  }
  return supported;
}
function initFeatureFlags() {
  const needWarn = [];
  if (false) {
    needWarn.push(`__VUE_OPTIONS_API__`);
    getGlobalThis().__VUE_OPTIONS_API__ = true;
  }
  if (false) {
    needWarn.push(`__VUE_PROD_DEVTOOLS__`);
    getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
  }
  if (false) {
    needWarn.push(`__VUE_PROD_HYDRATION_MISMATCH_DETAILS__`);
    getGlobalThis().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
  }
  if (needWarn.length) {
    const multi = needWarn.length > 1;
    console.warn(
      `Feature flag${multi ? `s` : ``} ${needWarn.join(", ")} ${multi ? `are` : `is`} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
var queuePostRenderEffect = queueEffectWithSuspense;
function createRenderer(options) {
  return baseCreateRenderer(options);
}
function baseCreateRenderer(options, createHydrationFns) {
  {
    initFeatureFlags();
  }
  const target = getGlobalThis();
  target.__VUE__ = true;
  if (true) {
    setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
  }
  const {
    insert: hostInsert,
    remove: hostRemove,
    patchProp: hostPatchProp,
    createElement: hostCreateElement,
    createText: hostCreateText,
    createComment: hostCreateComment,
    setText: hostSetText,
    setElementText: hostSetElementText,
    parentNode: hostParentNode,
    nextSibling: hostNextSibling,
    setScopeId: hostSetScopeId = NOOP,
    insertStaticContent: hostInsertStaticContent
  } = options;
  const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
    if (n1 === n2) {
      return;
    }
    if (n1 && !isSameVNodeType(n1, n2)) {
      anchor = getNextHostNode(n1);
      unmount(n1, parentComponent, parentSuspense, true);
      n1 = null;
    }
    if (n2.patchFlag === -2) {
      optimized = false;
      n2.dynamicChildren = null;
    }
    const { type, ref: ref2, shapeFlag } = n2;
    switch (type) {
      case Text:
        processText(n1, n2, container, anchor);
        break;
      case Comment:
        processCommentNode(n1, n2, container, anchor);
        break;
      case Static:
        if (n1 == null) {
          mountStaticNode(n2, container, anchor, namespace);
        } else if (true) {
          patchStaticNode(n1, n2, container, namespace);
        }
        break;
      case Fragment:
        processFragment(
          n1,
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        break;
      default:
        if (shapeFlag & 1) {
          processElement(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 6) {
          processComponent(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (shapeFlag & 64) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (shapeFlag & 128) {
          type.process(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized,
            internals
          );
        } else if (true) {
          warn$1("Invalid VNode type:", type, `(${typeof type})`);
        }
    }
    if (ref2 != null && parentComponent) {
      setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
    } else if (ref2 == null && n1 && n1.ref != null) {
      setRef(n1.ref, null, parentSuspense, n1, true);
    }
  };
  const processText = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateText(n2.children),
        container,
        anchor
      );
    } else {
      const el = n2.el = n1.el;
      if (n2.children !== n1.children) {
        hostSetText(el, n2.children);
      }
    }
  };
  const processCommentNode = (n1, n2, container, anchor) => {
    if (n1 == null) {
      hostInsert(
        n2.el = hostCreateComment(n2.children || ""),
        container,
        anchor
      );
    } else {
      n2.el = n1.el;
    }
  };
  const mountStaticNode = (n2, container, anchor, namespace) => {
    [n2.el, n2.anchor] = hostInsertStaticContent(
      n2.children,
      container,
      anchor,
      namespace,
      n2.el,
      n2.anchor
    );
  };
  const patchStaticNode = (n1, n2, container, namespace) => {
    if (n2.children !== n1.children) {
      const anchor = hostNextSibling(n1.anchor);
      removeStaticNode(n1);
      [n2.el, n2.anchor] = hostInsertStaticContent(
        n2.children,
        container,
        anchor,
        namespace
      );
    } else {
      n2.el = n1.el;
      n2.anchor = n1.anchor;
    }
  };
  const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostInsert(el, container, nextSibling);
      el = next;
    }
    hostInsert(anchor, container, nextSibling);
  };
  const removeStaticNode = ({ el, anchor }) => {
    let next;
    while (el && el !== anchor) {
      next = hostNextSibling(el);
      hostRemove(el);
      el = next;
    }
    hostRemove(anchor);
  };
  const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    if (n2.type === "svg") {
      namespace = "svg";
    } else if (n2.type === "math") {
      namespace = "mathml";
    }
    if (n1 == null) {
      mountElement(
        n2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      const customElement = n1.el && n1.el._isVueCE ? n1.el : null;
      try {
        if (customElement) {
          customElement._beginPatch();
        }
        patchElement(
          n1,
          n2,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } finally {
        if (customElement) {
          customElement._endPatch();
        }
      }
    }
  };
  const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let el;
    let vnodeHook;
    const { props, shapeFlag, transition, dirs } = vnode;
    el = vnode.el = hostCreateElement(
      vnode.type,
      namespace,
      props && props.is,
      props
    );
    if (shapeFlag & 8) {
      hostSetElementText(el, vnode.children);
    } else if (shapeFlag & 16) {
      mountChildren(
        vnode.children,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(vnode, namespace),
        slotScopeIds,
        optimized
      );
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "created");
    }
    setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
    if (props) {
      for (const key in props) {
        if (key !== "value" && !isReservedProp(key)) {
          hostPatchProp(el, key, null, props[key], namespace, parentComponent);
        }
      }
      if ("value" in props) {
        hostPatchProp(el, "value", null, props.value, namespace);
      }
      if (vnodeHook = props.onVnodeBeforeMount) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
    }
    if (true) {
      def(el, "__vnode", vnode, true);
      def(el, "__vueParentComponent", parentComponent, true);
    }
    if (dirs) {
      invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
    }
    const needCallTransitionHooks = needTransition(parentSuspense, transition);
    if (needCallTransitionHooks) {
      transition.beforeEnter(el);
    }
    hostInsert(el, container, anchor);
    if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        needCallTransitionHooks && transition.enter(el);
        dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
      }, parentSuspense);
    }
  };
  const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
    if (scopeId) {
      hostSetScopeId(el, scopeId);
    }
    if (slotScopeIds) {
      for (let i = 0; i < slotScopeIds.length; i++) {
        hostSetScopeId(el, slotScopeIds[i]);
      }
    }
    if (parentComponent) {
      let subTree = parentComponent.subTree;
      if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
        subTree = filterSingleRoot(subTree.children) || subTree;
      }
      if (vnode === subTree || isSuspense(subTree.type) && (subTree.ssContent === vnode || subTree.ssFallback === vnode)) {
        const parentVNode = parentComponent.vnode;
        setScopeId(
          el,
          parentVNode,
          parentVNode.scopeId,
          parentVNode.slotScopeIds,
          parentComponent.parent
        );
      }
    }
  };
  const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
    for (let i = start; i < children.length; i++) {
      const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
      patch(
        null,
        child,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
  };
  const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const el = n2.el = n1.el;
    if (true) {
      el.__vnode = n2;
    }
    let { patchFlag, dynamicChildren, dirs } = n2;
    patchFlag |= n1.patchFlag & 16;
    const oldProps = n1.props || EMPTY_OBJ;
    const newProps = n2.props || EMPTY_OBJ;
    let vnodeHook;
    parentComponent && toggleRecurse(parentComponent, false);
    if (vnodeHook = newProps.onVnodeBeforeUpdate) {
      invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
    }
    if (dirs) {
      invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
    }
    parentComponent && toggleRecurse(parentComponent, true);
    if (isHmrUpdating) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (oldProps.innerHTML && newProps.innerHTML == null || oldProps.textContent && newProps.textContent == null) {
      hostSetElementText(el, "");
    }
    if (dynamicChildren) {
      patchBlockChildren(
        n1.dynamicChildren,
        dynamicChildren,
        el,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds
      );
      if (true) {
        traverseStaticChildren(n1, n2);
      }
    } else if (!optimized) {
      patchChildren(
        n1,
        n2,
        el,
        null,
        parentComponent,
        parentSuspense,
        resolveChildrenNamespace(n2, namespace),
        slotScopeIds,
        false
      );
    }
    if (patchFlag > 0) {
      if (patchFlag & 16) {
        patchProps(el, oldProps, newProps, parentComponent, namespace);
      } else {
        if (patchFlag & 2) {
          if (oldProps.class !== newProps.class) {
            hostPatchProp(el, "class", null, newProps.class, namespace);
          }
        }
        if (patchFlag & 4) {
          hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
        }
        if (patchFlag & 8) {
          const propsToUpdate = n2.dynamicProps;
          for (let i = 0; i < propsToUpdate.length; i++) {
            const key = propsToUpdate[i];
            const prev = oldProps[key];
            const next = newProps[key];
            if (next !== prev || key === "value") {
              hostPatchProp(el, key, prev, next, namespace, parentComponent);
            }
          }
        }
      }
      if (patchFlag & 1) {
        if (n1.children !== n2.children) {
          hostSetElementText(el, n2.children);
        }
      }
    } else if (!optimized && dynamicChildren == null) {
      patchProps(el, oldProps, newProps, parentComponent, namespace);
    }
    if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
        dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
      }, parentSuspense);
    }
  };
  const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
    for (let i = 0; i < newChildren.length; i++) {
      const oldVNode = oldChildren[i];
      const newVNode = newChildren[i];
      const container = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
        oldVNode.shapeFlag & (6 | 64 | 128)) ? hostParentNode(oldVNode.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          fallbackContainer
        )
      );
      patch(
        oldVNode,
        newVNode,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        true
      );
    }
  };
  const patchProps = (el, oldProps, newProps, parentComponent, namespace) => {
    if (oldProps !== newProps) {
      if (oldProps !== EMPTY_OBJ) {
        for (const key in oldProps) {
          if (!isReservedProp(key) && !(key in newProps)) {
            hostPatchProp(
              el,
              key,
              oldProps[key],
              null,
              namespace,
              parentComponent
            );
          }
        }
      }
      for (const key in newProps) {
        if (isReservedProp(key)) continue;
        const next = newProps[key];
        const prev = oldProps[key];
        if (next !== prev && key !== "value") {
          hostPatchProp(el, key, prev, next, namespace, parentComponent);
        }
      }
      if ("value" in newProps) {
        hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
      }
    }
  };
  const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
    const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
    let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
    if (
      // #5523 dev root fragment may inherit directives
      isHmrUpdating || patchFlag & 2048
    ) {
      patchFlag = 0;
      optimized = false;
      dynamicChildren = null;
    }
    if (fragmentSlotScopeIds) {
      slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
    }
    if (n1 == null) {
      hostInsert(fragmentStartAnchor, container, anchor);
      hostInsert(fragmentEndAnchor, container, anchor);
      mountChildren(
        // #10007
        // such fragment like `<></>` will be compiled into
        // a fragment which doesn't have a children.
        // In this case fallback to an empty array
        n2.children || [],
        container,
        fragmentEndAnchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    } else {
      if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      n1.dynamicChildren && n1.dynamicChildren.length === dynamicChildren.length) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          container,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds
        );
        if (true) {
          traverseStaticChildren(n1, n2);
        } else if (
          // #2080 if the stable fragment has a key, it's a <template v-for> that may
          //  get moved around. Make sure all root level vnodes inherit el.
          // #2134 or if it's a component root, it may also get moved around
          // as the component is being moved.
          n2.key != null || parentComponent && n2 === parentComponent.subTree
        ) {
          traverseStaticChildren(
            n1,
            n2,
            true
            /* shallow */
          );
        }
      } else {
        patchChildren(
          n1,
          n2,
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    }
  };
  const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    n2.slotScopeIds = slotScopeIds;
    if (n1 == null) {
      if (n2.shapeFlag & 512) {
        parentComponent.ctx.activate(
          n2,
          container,
          anchor,
          namespace,
          optimized
        );
      } else {
        mountComponent(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          optimized
        );
      }
    } else {
      updateComponent(n1, n2, optimized);
    }
  };
  const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
    const instance = initialVNode.component = createComponentInstance(
      initialVNode,
      parentComponent,
      parentSuspense
    );
    if (instance.type.__hmrId) {
      registerHMR(instance);
    }
    if (true) {
      pushWarningContext(initialVNode);
      startMeasure(instance, `mount`);
    }
    if (isKeepAlive(initialVNode)) {
      instance.ctx.renderer = internals;
    }
    {
      if (true) {
        startMeasure(instance, `init`);
      }
      setupComponent(instance, false, optimized);
      if (true) {
        endMeasure(instance, `init`);
      }
    }
    if (isHmrUpdating) initialVNode.el = null;
    if (instance.asyncDep) {
      parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect, optimized);
      if (!initialVNode.el) {
        const placeholder = instance.subTree = createVNode(Comment);
        processCommentNode(null, placeholder, container, anchor);
        initialVNode.placeholder = placeholder.el;
      }
    } else {
      setupRenderEffect(
        instance,
        initialVNode,
        container,
        anchor,
        parentSuspense,
        namespace,
        optimized
      );
    }
    if (true) {
      popWarningContext();
      endMeasure(instance, `mount`);
    }
  };
  const updateComponent = (n1, n2, optimized) => {
    const instance = n2.component = n1.component;
    if (shouldUpdateComponent(n1, n2, optimized)) {
      if (instance.asyncDep && !instance.asyncResolved) {
        if (true) {
          pushWarningContext(n2);
        }
        updateComponentPreRender(instance, n2, optimized);
        if (true) {
          popWarningContext();
        }
        return;
      } else {
        instance.next = n2;
        instance.update();
      }
    } else {
      n2.el = n1.el;
      instance.vnode = n2;
    }
  };
  const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
    const componentUpdateFn = () => {
      if (!instance.isMounted) {
        let vnodeHook;
        const { el, props } = initialVNode;
        const { bm, m, parent: parent2, root, type } = instance;
        const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
        toggleRecurse(instance, false);
        if (bm) {
          invokeArrayFns(bm);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
          invokeVNodeHook(vnodeHook, parent2, initialVNode);
        }
        toggleRecurse(instance, true);
        if (el && hydrateNode) {
          const hydrateSubTree = () => {
            if (true) {
              startMeasure(instance, `render`);
            }
            instance.subTree = renderComponentRoot(instance);
            if (true) {
              endMeasure(instance, `render`);
            }
            if (true) {
              startMeasure(instance, `hydrate`);
            }
            hydrateNode(
              el,
              instance.subTree,
              instance,
              parentSuspense,
              null
            );
            if (true) {
              endMeasure(instance, `hydrate`);
            }
          };
          if (isAsyncWrapperVNode && type.__asyncHydrate) {
            type.__asyncHydrate(
              el,
              instance,
              hydrateSubTree
            );
          } else {
            hydrateSubTree();
          }
        } else {
          if (root.ce && root.ce._hasShadowRoot()) {
            root.ce._injectChildStyle(
              type,
              instance.parent ? instance.parent.type : void 0
            );
          }
          if (true) {
            startMeasure(instance, `render`);
          }
          const subTree = instance.subTree = renderComponentRoot(instance);
          if (true) {
            endMeasure(instance, `render`);
          }
          if (true) {
            startMeasure(instance, `patch`);
          }
          patch(
            null,
            subTree,
            container,
            anchor,
            instance,
            parentSuspense,
            namespace
          );
          if (true) {
            endMeasure(instance, `patch`);
          }
          initialVNode.el = subTree.el;
        }
        if (m) {
          queuePostRenderEffect(m, parentSuspense);
        }
        if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
          const scopedInitialVNode = initialVNode;
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent2, scopedInitialVNode),
            parentSuspense
          );
        }
        if (initialVNode.shapeFlag & 256 || parent2 && isAsyncWrapper(parent2.vnode) && parent2.vnode.shapeFlag & 256) {
          instance.a && queuePostRenderEffect(instance.a, parentSuspense);
        }
        instance.isMounted = true;
        if (true) {
          devtoolsComponentAdded(instance);
        }
        initialVNode = container = anchor = null;
      } else {
        let { next, bu, u, parent: parent2, vnode } = instance;
        {
          const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
          if (nonHydratedAsyncRoot) {
            if (next) {
              next.el = vnode.el;
              updateComponentPreRender(instance, next, optimized);
            }
            nonHydratedAsyncRoot.asyncDep.then(() => {
              queuePostRenderEffect(() => {
                if (!instance.isUnmounted) update();
              }, parentSuspense);
            });
            return;
          }
        }
        let originNext = next;
        let vnodeHook;
        if (true) {
          pushWarningContext(next || instance.vnode);
        }
        toggleRecurse(instance, false);
        if (next) {
          next.el = vnode.el;
          updateComponentPreRender(instance, next, optimized);
        } else {
          next = vnode;
        }
        if (bu) {
          invokeArrayFns(bu);
        }
        if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
          invokeVNodeHook(vnodeHook, parent2, next, vnode);
        }
        toggleRecurse(instance, true);
        if (true) {
          startMeasure(instance, `render`);
        }
        const nextTree = renderComponentRoot(instance);
        if (true) {
          endMeasure(instance, `render`);
        }
        const prevTree = instance.subTree;
        instance.subTree = nextTree;
        if (true) {
          startMeasure(instance, `patch`);
        }
        patch(
          prevTree,
          nextTree,
          // parent may have changed if it's in a teleport
          hostParentNode(prevTree.el),
          // anchor may have changed if it's in a fragment
          getNextHostNode(prevTree),
          instance,
          parentSuspense,
          namespace
        );
        if (true) {
          endMeasure(instance, `patch`);
        }
        next.el = nextTree.el;
        if (originNext === null) {
          updateHOCHostEl(instance, nextTree.el);
        }
        if (u) {
          queuePostRenderEffect(u, parentSuspense);
        }
        if (vnodeHook = next.props && next.props.onVnodeUpdated) {
          queuePostRenderEffect(
            () => invokeVNodeHook(vnodeHook, parent2, next, vnode),
            parentSuspense
          );
        }
        if (true) {
          devtoolsComponentUpdated(instance);
        }
        if (true) {
          popWarningContext();
        }
      }
    };
    instance.scope.on();
    const effect2 = instance.effect = new ReactiveEffect(componentUpdateFn);
    instance.scope.off();
    const update = instance.update = effect2.run.bind(effect2);
    const job = instance.job = effect2.runIfDirty.bind(effect2);
    job.i = instance;
    job.id = instance.uid;
    effect2.scheduler = () => queueJob(job);
    toggleRecurse(instance, true);
    if (true) {
      effect2.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
      effect2.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
    }
    update();
  };
  const updateComponentPreRender = (instance, nextVNode, optimized) => {
    nextVNode.component = instance;
    const prevProps = instance.vnode.props;
    instance.vnode = nextVNode;
    instance.next = null;
    updateProps(instance, nextVNode.props, prevProps, optimized);
    updateSlots(instance, nextVNode.children, optimized);
    pauseTracking();
    flushPreFlushCbs(instance);
    resetTracking();
  };
  const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
    const c1 = n1 && n1.children;
    const prevShapeFlag = n1 ? n1.shapeFlag : 0;
    const c2 = n2.children;
    const { patchFlag, shapeFlag } = n2;
    if (patchFlag > 0) {
      if (patchFlag & 128) {
        patchKeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      } else if (patchFlag & 256) {
        patchUnkeyedChildren(
          c1,
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
        return;
      }
    }
    if (shapeFlag & 8) {
      if (prevShapeFlag & 16) {
        unmountChildren(c1, parentComponent, parentSuspense);
      }
      if (c2 !== c1) {
        hostSetElementText(container, c2);
      }
    } else {
      if (prevShapeFlag & 16) {
        if (shapeFlag & 16) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          unmountChildren(c1, parentComponent, parentSuspense, true);
        }
      } else {
        if (prevShapeFlag & 8) {
          hostSetElementText(container, "");
        }
        if (shapeFlag & 16) {
          mountChildren(
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    }
  };
  const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    c1 = c1 || EMPTY_ARR;
    c2 = c2 || EMPTY_ARR;
    const oldLength = c1.length;
    const newLength = c2.length;
    const commonLength = Math.min(oldLength, newLength);
    let i;
    for (i = 0; i < commonLength; i++) {
      const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      patch(
        c1[i],
        nextChild,
        container,
        null,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized
      );
    }
    if (oldLength > newLength) {
      unmountChildren(
        c1,
        parentComponent,
        parentSuspense,
        true,
        false,
        commonLength
      );
    } else {
      mountChildren(
        c2,
        container,
        anchor,
        parentComponent,
        parentSuspense,
        namespace,
        slotScopeIds,
        optimized,
        commonLength
      );
    }
  };
  const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
    let i = 0;
    const l2 = c2.length;
    let e1 = c1.length - 1;
    let e2 = l2 - 1;
    while (i <= e1 && i <= e2) {
      const n1 = c1[i];
      const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      i++;
    }
    while (i <= e1 && i <= e2) {
      const n1 = c1[e1];
      const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
      if (isSameVNodeType(n1, n2)) {
        patch(
          n1,
          n2,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        break;
      }
      e1--;
      e2--;
    }
    if (i > e1) {
      if (i <= e2) {
        const nextPos = e2 + 1;
        const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
        while (i <= e2) {
          patch(
            null,
            c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          i++;
        }
      }
    } else if (i > e2) {
      while (i <= e1) {
        unmount(c1[i], parentComponent, parentSuspense, true);
        i++;
      }
    } else {
      const s1 = i;
      const s2 = i;
      const keyToNewIndexMap = /* @__PURE__ */ new Map();
      for (i = s2; i <= e2; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (nextChild.key != null) {
          if (keyToNewIndexMap.has(nextChild.key)) {
            warn$1(
              `Duplicate keys found during update:`,
              JSON.stringify(nextChild.key),
              `Make sure keys are unique.`
            );
          }
          keyToNewIndexMap.set(nextChild.key, i);
        }
      }
      let j;
      let patched = 0;
      const toBePatched = e2 - s2 + 1;
      let moved = false;
      let maxNewIndexSoFar = 0;
      const newIndexToOldIndexMap = new Array(toBePatched);
      for (i = 0; i < toBePatched; i++) newIndexToOldIndexMap[i] = 0;
      for (i = s1; i <= e1; i++) {
        const prevChild = c1[i];
        if (patched >= toBePatched) {
          unmount(prevChild, parentComponent, parentSuspense, true);
          continue;
        }
        let newIndex;
        if (prevChild.key != null) {
          newIndex = keyToNewIndexMap.get(prevChild.key);
        } else {
          for (j = s2; j <= e2; j++) {
            if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
              newIndex = j;
              break;
            }
          }
        }
        if (newIndex === void 0) {
          unmount(prevChild, parentComponent, parentSuspense, true);
        } else {
          newIndexToOldIndexMap[newIndex - s2] = i + 1;
          if (newIndex >= maxNewIndexSoFar) {
            maxNewIndexSoFar = newIndex;
          } else {
            moved = true;
          }
          patch(
            prevChild,
            c2[newIndex],
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          patched++;
        }
      }
      const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
      j = increasingNewIndexSequence.length - 1;
      for (i = toBePatched - 1; i >= 0; i--) {
        const nextIndex = s2 + i;
        const nextChild = c2[nextIndex];
        const anchorVNode = c2[nextIndex + 1];
        const anchor = nextIndex + 1 < l2 ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          anchorVNode.el || resolveAsyncComponentPlaceholder(anchorVNode)
        ) : parentAnchor;
        if (newIndexToOldIndexMap[i] === 0) {
          patch(
            null,
            nextChild,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else if (moved) {
          if (j < 0 || i !== increasingNewIndexSequence[j]) {
            move(nextChild, container, anchor, 2);
          } else {
            j--;
          }
        }
      }
    }
  };
  const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
    const { el, type, transition, children, shapeFlag } = vnode;
    if (shapeFlag & 6) {
      move(vnode.component.subTree, container, anchor, moveType);
      return;
    }
    if (shapeFlag & 128) {
      vnode.suspense.move(container, anchor, moveType);
      return;
    }
    if (shapeFlag & 64) {
      type.move(vnode, container, anchor, internals);
      return;
    }
    if (type === Fragment) {
      hostInsert(el, container, anchor);
      for (let i = 0; i < children.length; i++) {
        move(children[i], container, anchor, moveType);
      }
      hostInsert(vnode.anchor, container, anchor);
      return;
    }
    if (type === Static) {
      moveStaticNode(vnode, container, anchor);
      return;
    }
    const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
    if (needTransition2) {
      if (moveType === 0) {
        transition.beforeEnter(el);
        hostInsert(el, container, anchor);
        queuePostRenderEffect(() => transition.enter(el), parentSuspense);
      } else {
        const { leave, delayLeave, afterLeave } = transition;
        const remove22 = () => {
          if (vnode.ctx.isUnmounted) {
            hostRemove(el);
          } else {
            hostInsert(el, container, anchor);
          }
        };
        const performLeave = () => {
          if (el._isLeaving) {
            el[leaveCbKey](
              true
              /* cancelled */
            );
          }
          leave(el, () => {
            remove22();
            afterLeave && afterLeave();
          });
        };
        if (delayLeave) {
          delayLeave(el, remove22, performLeave);
        } else {
          performLeave();
        }
      }
    } else {
      hostInsert(el, container, anchor);
    }
  };
  const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
    const {
      type,
      props,
      ref: ref2,
      children,
      dynamicChildren,
      shapeFlag,
      patchFlag,
      dirs,
      cacheIndex
    } = vnode;
    if (patchFlag === -2) {
      optimized = false;
    }
    if (ref2 != null) {
      pauseTracking();
      setRef(ref2, null, parentSuspense, vnode, true);
      resetTracking();
    }
    if (cacheIndex != null) {
      parentComponent.renderCache[cacheIndex] = void 0;
    }
    if (shapeFlag & 256) {
      parentComponent.ctx.deactivate(vnode);
      return;
    }
    const shouldInvokeDirs = shapeFlag & 1 && dirs;
    const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
    let vnodeHook;
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
      invokeVNodeHook(vnodeHook, parentComponent, vnode);
    }
    if (shapeFlag & 6) {
      unmountComponent(vnode.component, parentSuspense, doRemove);
    } else {
      if (shapeFlag & 128) {
        vnode.suspense.unmount(parentSuspense, doRemove);
        return;
      }
      if (shouldInvokeDirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
      }
      if (shapeFlag & 64) {
        vnode.type.remove(
          vnode,
          parentComponent,
          parentSuspense,
          internals,
          doRemove
        );
      } else if (dynamicChildren && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !dynamicChildren.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
        unmountChildren(
          dynamicChildren,
          parentComponent,
          parentSuspense,
          false,
          true
        );
      } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
        unmountChildren(children, parentComponent, parentSuspense);
      }
      if (doRemove) {
        remove2(vnode);
      }
    }
    if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
      queuePostRenderEffect(() => {
        vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
        shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
      }, parentSuspense);
    }
  };
  const remove2 = (vnode) => {
    const { type, el, anchor, transition } = vnode;
    if (type === Fragment) {
      if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
        vnode.children.forEach((child) => {
          if (child.type === Comment) {
            hostRemove(child.el);
          } else {
            remove2(child);
          }
        });
      } else {
        removeFragment(el, anchor);
      }
      return;
    }
    if (type === Static) {
      removeStaticNode(vnode);
      return;
    }
    const performRemove = () => {
      hostRemove(el);
      if (transition && !transition.persisted && transition.afterLeave) {
        transition.afterLeave();
      }
    };
    if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
      const { leave, delayLeave } = transition;
      const performLeave = () => leave(el, performRemove);
      if (delayLeave) {
        delayLeave(vnode.el, performRemove, performLeave);
      } else {
        performLeave();
      }
    } else {
      performRemove();
    }
  };
  const removeFragment = (cur, end) => {
    let next;
    while (cur !== end) {
      next = hostNextSibling(cur);
      hostRemove(cur);
      cur = next;
    }
    hostRemove(end);
  };
  const unmountComponent = (instance, parentSuspense, doRemove) => {
    if (instance.type.__hmrId) {
      unregisterHMR(instance);
    }
    const { bum, scope, job, subTree, um, m, a } = instance;
    invalidateMount(m);
    invalidateMount(a);
    if (bum) {
      invokeArrayFns(bum);
    }
    scope.stop();
    if (job) {
      job.flags |= 8;
      unmount(subTree, instance, parentSuspense, doRemove);
    }
    if (um) {
      queuePostRenderEffect(um, parentSuspense);
    }
    queuePostRenderEffect(() => {
      instance.isUnmounted = true;
    }, parentSuspense);
    if (true) {
      devtoolsComponentRemoved(instance);
    }
  };
  const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
    for (let i = start; i < children.length; i++) {
      unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
    }
  };
  const getNextHostNode = (vnode) => {
    if (vnode.shapeFlag & 6) {
      return getNextHostNode(vnode.component.subTree);
    }
    if (vnode.shapeFlag & 128) {
      return vnode.suspense.next();
    }
    const el = hostNextSibling(vnode.anchor || vnode.el);
    const teleportEnd = el && el[TeleportEndKey];
    return teleportEnd ? hostNextSibling(teleportEnd) : el;
  };
  let isFlushing = false;
  const render = (vnode, container, namespace) => {
    let instance;
    if (vnode == null) {
      if (container._vnode) {
        unmount(container._vnode, null, null, true);
        instance = container._vnode.component;
      }
    } else {
      patch(
        container._vnode || null,
        vnode,
        container,
        null,
        null,
        null,
        namespace
      );
    }
    container._vnode = vnode;
    if (!isFlushing) {
      isFlushing = true;
      flushPreFlushCbs(instance);
      flushPostFlushCbs();
      isFlushing = false;
    }
  };
  const internals = {
    p: patch,
    um: unmount,
    m: move,
    r: remove2,
    mt: mountComponent,
    mc: mountChildren,
    pc: patchChildren,
    pbc: patchBlockChildren,
    n: getNextHostNode,
    o: options
  };
  let hydrate;
  let hydrateNode;
  if (createHydrationFns) {
    [hydrate, hydrateNode] = createHydrationFns(
      internals
    );
  }
  return {
    render,
    hydrate,
    createApp: createAppAPI(render, hydrate)
  };
}
function resolveChildrenNamespace({ type, props }, currentNamespace) {
  return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
}
function toggleRecurse({ effect: effect2, job }, allowed) {
  if (allowed) {
    effect2.flags |= 32;
    job.flags |= 4;
  } else {
    effect2.flags &= -33;
    job.flags &= -5;
  }
}
function needTransition(parentSuspense, transition) {
  return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
}
function traverseStaticChildren(n1, n2, shallow = false) {
  const ch1 = n1.children;
  const ch2 = n2.children;
  if (isArray(ch1) && isArray(ch2)) {
    for (let i = 0; i < ch1.length; i++) {
      const c1 = ch1[i];
      let c2 = ch2[i];
      if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
        if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
          c2 = ch2[i] = cloneIfMounted(ch2[i]);
          c2.el = c1.el;
        }
        if (!shallow && c2.patchFlag !== -2)
          traverseStaticChildren(c1, c2);
      }
      if (c2.type === Text) {
        if (c2.patchFlag === -1) {
          c2 = ch2[i] = cloneIfMounted(c2);
        }
        c2.el = c1.el;
      }
      if (c2.type === Comment && !c2.el) {
        c2.el = c1.el;
      }
      if (true) {
        c2.el && (c2.el.__vnode = c2);
      }
    }
  }
}
function getSequence(arr) {
  const p2 = arr.slice();
  const result = [0];
  let i, j, u, v, c;
  const len = arr.length;
  for (i = 0; i < len; i++) {
    const arrI = arr[i];
    if (arrI !== 0) {
      j = result[result.length - 1];
      if (arr[j] < arrI) {
        p2[i] = j;
        result.push(i);
        continue;
      }
      u = 0;
      v = result.length - 1;
      while (u < v) {
        c = u + v >> 1;
        if (arr[result[c]] < arrI) {
          u = c + 1;
        } else {
          v = c;
        }
      }
      if (arrI < arr[result[u]]) {
        if (u > 0) {
          p2[i] = result[u - 1];
        }
        result[u] = i;
      }
    }
  }
  u = result.length;
  v = result[u - 1];
  while (u-- > 0) {
    result[u] = v;
    v = p2[v];
  }
  return result;
}
function locateNonHydratedAsyncRoot(instance) {
  const subComponent = instance.subTree.component;
  if (subComponent) {
    if (subComponent.asyncDep && !subComponent.asyncResolved) {
      return subComponent;
    } else {
      return locateNonHydratedAsyncRoot(subComponent);
    }
  }
}
function invalidateMount(hooks) {
  if (hooks) {
    for (let i = 0; i < hooks.length; i++)
      hooks[i].flags |= 8;
  }
}
function resolveAsyncComponentPlaceholder(anchorVnode) {
  if (anchorVnode.placeholder) {
    return anchorVnode.placeholder;
  }
  const instance = anchorVnode.component;
  if (instance) {
    return resolveAsyncComponentPlaceholder(instance.subTree);
  }
  return null;
}
var isSuspense = (type) => type.__isSuspense;
function queueEffectWithSuspense(fn, suspense) {
  if (suspense && suspense.pendingBranch) {
    if (isArray(fn)) {
      suspense.effects.push(...fn);
    } else {
      suspense.effects.push(fn);
    }
  } else {
    queuePostFlushCb(fn);
  }
}
var Fragment = /* @__PURE__ */ Symbol.for("v-fgt");
var Text = /* @__PURE__ */ Symbol.for("v-txt");
var Comment = /* @__PURE__ */ Symbol.for("v-cmt");
var Static = /* @__PURE__ */ Symbol.for("v-stc");
var blockStack = [];
var currentBlock = null;
function openBlock(disableTracking = false) {
  blockStack.push(currentBlock = disableTracking ? null : []);
}
function closeBlock() {
  blockStack.pop();
  currentBlock = blockStack[blockStack.length - 1] || null;
}
var isBlockTreeEnabled = 1;
function setBlockTracking(value, inVOnce = false) {
  isBlockTreeEnabled += value;
  if (value < 0 && currentBlock && inVOnce) {
    currentBlock.hasOnce = true;
  }
}
function setupBlock(vnode) {
  vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
  closeBlock();
  if (isBlockTreeEnabled > 0 && currentBlock) {
    currentBlock.push(vnode);
  }
  return vnode;
}
function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
  return setupBlock(
    createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      true
    )
  );
}
function createBlock(type, props, children, patchFlag, dynamicProps) {
  return setupBlock(
    createVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      true
    )
  );
}
function isVNode(value) {
  return value ? value.__v_isVNode === true : false;
}
function isSameVNodeType(n1, n2) {
  if (n2.shapeFlag & 6 && n1.component) {
    const dirtyInstances = hmrDirtyComponents.get(n2.type);
    if (dirtyInstances && dirtyInstances.has(n1.component)) {
      n1.shapeFlag &= -257;
      n2.shapeFlag &= -513;
      return false;
    }
  }
  return n1.type === n2.type && n1.key === n2.key;
}
var vnodeArgsTransformer;
var createVNodeWithArgsTransform = (...args) => {
  return _createVNode(
    ...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args
  );
};
var normalizeKey = ({ key }) => key != null ? key : null;
var normalizeRef = ({
  ref: ref2,
  ref_key,
  ref_for
}) => {
  if (typeof ref2 === "number") {
    ref2 = "" + ref2;
  }
  return ref2 != null ? isString(ref2) || isRef2(ref2) || isFunction(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
};
function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
  const vnode = {
    __v_isVNode: true,
    __v_skip: true,
    type,
    props,
    key: props && normalizeKey(props),
    ref: props && normalizeRef(props),
    scopeId: currentScopeId,
    slotScopeIds: null,
    children,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag,
    patchFlag,
    dynamicProps,
    dynamicChildren: null,
    appContext: null,
    ctx: currentRenderingInstance
  };
  if (needFullChildrenNormalization) {
    normalizeChildren(vnode, children);
    if (shapeFlag & 128) {
      type.normalize(vnode);
    }
  } else if (children) {
    vnode.shapeFlag |= isString(children) ? 8 : 16;
  }
  if (vnode.key !== vnode.key) {
    warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
  }
  if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
  !isBlockNode && // has current parent block
  currentBlock && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  vnode.patchFlag !== 32) {
    currentBlock.push(vnode);
  }
  return vnode;
}
var createVNode = true ? createVNodeWithArgsTransform : _createVNode;
function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
  if (!type || type === NULL_DYNAMIC_COMPONENT) {
    if (!type) {
      warn$1(`Invalid vnode type when creating vnode: ${type}.`);
    }
    type = Comment;
  }
  if (isVNode(type)) {
    const cloned = cloneVNode(
      type,
      props,
      true
      /* mergeRef: true */
    );
    if (children) {
      normalizeChildren(cloned, children);
    }
    if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
      if (cloned.shapeFlag & 6) {
        currentBlock[currentBlock.indexOf(type)] = cloned;
      } else {
        currentBlock.push(cloned);
      }
    }
    cloned.patchFlag = -2;
    return cloned;
  }
  if (isClassComponent(type)) {
    type = type.__vccOpts;
  }
  if (props) {
    props = guardReactiveProps(props);
    let { class: klass, style } = props;
    if (klass && !isString(klass)) {
      props.class = normalizeClass(klass);
    }
    if (isObject(style)) {
      if (isProxy(style) && !isArray(style)) {
        style = extend({}, style);
      }
      props.style = normalizeStyle(style);
    }
  }
  const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction(type) ? 2 : 0;
  if (shapeFlag & 4 && isProxy(type)) {
    type = toRaw(type);
    warn$1(
      `Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
      `
Component that was made reactive: `,
      type
    );
  }
  return createBaseVNode(
    type,
    props,
    children,
    patchFlag,
    dynamicProps,
    shapeFlag,
    isBlockNode,
    true
  );
}
function guardReactiveProps(props) {
  if (!props) return null;
  return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
}
function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
  const { props, ref: ref2, patchFlag, children, transition } = vnode;
  const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
  const cloned = {
    __v_isVNode: true,
    __v_skip: true,
    type: vnode.type,
    props: mergedProps,
    key: mergedProps && normalizeKey(mergedProps),
    ref: extraProps && extraProps.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
    ) : ref2,
    scopeId: vnode.scopeId,
    slotScopeIds: vnode.slotScopeIds,
    children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
    target: vnode.target,
    targetStart: vnode.targetStart,
    targetAnchor: vnode.targetAnchor,
    staticCount: vnode.staticCount,
    shapeFlag: vnode.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
    dynamicProps: vnode.dynamicProps,
    dynamicChildren: vnode.dynamicChildren,
    appContext: vnode.appContext,
    dirs: vnode.dirs,
    transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: vnode.component,
    suspense: vnode.suspense,
    ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
    ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
    placeholder: vnode.placeholder,
    el: vnode.el,
    anchor: vnode.anchor,
    ctx: vnode.ctx,
    ce: vnode.ce
  };
  if (transition && cloneTransition) {
    setTransitionHooks(
      cloned,
      transition.clone(cloned)
    );
  }
  return cloned;
}
function deepCloneVNode(vnode) {
  const cloned = cloneVNode(vnode);
  if (isArray(vnode.children)) {
    cloned.children = vnode.children.map(deepCloneVNode);
  }
  return cloned;
}
function createTextVNode(text = " ", flag = 0) {
  return createVNode(Text, null, text, flag);
}
function createCommentVNode(text = "", asBlock = false) {
  return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
}
function normalizeVNode(child) {
  if (child == null || typeof child === "boolean") {
    return createVNode(Comment);
  } else if (isArray(child)) {
    return createVNode(
      Fragment,
      null,
      // #3666, avoid reference pollution when reusing vnode
      child.slice()
    );
  } else if (isVNode(child)) {
    return cloneIfMounted(child);
  } else {
    return createVNode(Text, null, String(child));
  }
}
function cloneIfMounted(child) {
  return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
}
function normalizeChildren(vnode, children) {
  let type = 0;
  const { shapeFlag } = vnode;
  if (children == null) {
    children = null;
  } else if (isArray(children)) {
    type = 16;
  } else if (typeof children === "object") {
    if (shapeFlag & (1 | 64)) {
      const slot = children.default;
      if (slot) {
        slot._c && (slot._d = false);
        normalizeChildren(vnode, slot());
        slot._c && (slot._d = true);
      }
      return;
    } else {
      type = 32;
      const slotFlag = children._;
      if (!slotFlag && !isInternalObject(children)) {
        children._ctx = currentRenderingInstance;
      } else if (slotFlag === 3 && currentRenderingInstance) {
        if (currentRenderingInstance.slots._ === 1) {
          children._ = 1;
        } else {
          children._ = 2;
          vnode.patchFlag |= 1024;
        }
      }
    }
  } else if (isFunction(children)) {
    children = { default: children, _ctx: currentRenderingInstance };
    type = 32;
  } else {
    children = String(children);
    if (shapeFlag & 64) {
      type = 16;
      children = [createTextVNode(children)];
    } else {
      type = 8;
    }
  }
  vnode.children = children;
  vnode.shapeFlag |= type;
}
function mergeProps(...args) {
  const ret = {};
  for (let i = 0; i < args.length; i++) {
    const toMerge = args[i];
    for (const key in toMerge) {
      if (key === "class") {
        if (ret.class !== toMerge.class) {
          ret.class = normalizeClass([ret.class, toMerge.class]);
        }
      } else if (key === "style") {
        ret.style = normalizeStyle([ret.style, toMerge.style]);
      } else if (isOn(key)) {
        const existing = ret[key];
        const incoming = toMerge[key];
        if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
          ret[key] = existing ? [].concat(existing, incoming) : incoming;
        }
      } else if (key !== "") {
        ret[key] = toMerge[key];
      }
    }
  }
  return ret;
}
function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
  callWithAsyncErrorHandling(hook, instance, 7, [
    vnode,
    prevVNode
  ]);
}
var emptyAppContext = createAppContext();
var uid = 0;
function createComponentInstance(vnode, parent2, suspense) {
  const type = vnode.type;
  const appContext = (parent2 ? parent2.appContext : vnode.appContext) || emptyAppContext;
  const instance = {
    uid: uid++,
    vnode,
    type,
    parent: parent2,
    appContext,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new EffectScope(
      true
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: parent2 ? parent2.provides : Object.create(appContext.provides),
    ids: parent2 ? parent2.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: normalizePropsOptions(type, appContext),
    emitsOptions: normalizeEmitsOptions(type, appContext),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: EMPTY_OBJ,
    // inheritAttrs
    inheritAttrs: type.inheritAttrs,
    // state
    ctx: EMPTY_OBJ,
    data: EMPTY_OBJ,
    props: EMPTY_OBJ,
    attrs: EMPTY_OBJ,
    slots: EMPTY_OBJ,
    refs: EMPTY_OBJ,
    setupState: EMPTY_OBJ,
    setupContext: null,
    // suspense related
    suspense,
    suspenseId: suspense ? suspense.pendingId : 0,
    asyncDep: null,
    asyncResolved: false,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: false,
    isUnmounted: false,
    isDeactivated: false,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  if (true) {
    instance.ctx = createDevRenderContext(instance);
  } else {
    instance.ctx = { _: instance };
  }
  instance.root = parent2 ? parent2.root : instance;
  instance.emit = emit.bind(null, instance);
  if (vnode.ce) {
    vnode.ce(instance);
  }
  return instance;
}
var currentInstance = null;
var getCurrentInstance = () => currentInstance || currentRenderingInstance;
var internalSetCurrentInstance;
var setInSSRSetupState;
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key])) setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1) setters.forEach((set) => set(v));
      else setters[0](v);
    };
  };
  internalSetCurrentInstance = registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => currentInstance = v
  );
  setInSSRSetupState = registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => isInSSRComponentSetup = v
  );
}
var setCurrentInstance = (instance) => {
  const prev = currentInstance;
  internalSetCurrentInstance(instance);
  instance.scope.on();
  return () => {
    instance.scope.off();
    internalSetCurrentInstance(prev);
  };
};
var unsetCurrentInstance = () => {
  currentInstance && currentInstance.scope.off();
  internalSetCurrentInstance(null);
};
var isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
function validateComponentName(name, { isNativeTag }) {
  if (isBuiltInTag(name) || isNativeTag(name)) {
    warn$1(
      "Do not use built-in or reserved HTML elements as component id: " + name
    );
  }
}
function isStatefulComponent(instance) {
  return instance.vnode.shapeFlag & 4;
}
var isInSSRComponentSetup = false;
function setupComponent(instance, isSSR = false, optimized = false) {
  isSSR && setInSSRSetupState(isSSR);
  const { props, children } = instance.vnode;
  const isStateful = isStatefulComponent(instance);
  initProps(instance, props, isStateful, isSSR);
  initSlots(instance, children, optimized || isSSR);
  const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
  isSSR && setInSSRSetupState(false);
  return setupResult;
}
function setupStatefulComponent(instance, isSSR) {
  const Component = instance.type;
  if (true) {
    if (Component.name) {
      validateComponentName(Component.name, instance.appContext.config);
    }
    if (Component.components) {
      const names = Object.keys(Component.components);
      for (let i = 0; i < names.length; i++) {
        validateComponentName(names[i], instance.appContext.config);
      }
    }
    if (Component.directives) {
      const names = Object.keys(Component.directives);
      for (let i = 0; i < names.length; i++) {
        validateDirectiveName(names[i]);
      }
    }
    if (Component.compilerOptions && isRuntimeOnly()) {
      warn$1(
        `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
      );
    }
  }
  instance.accessCache = /* @__PURE__ */ Object.create(null);
  instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
  if (true) {
    exposePropsOnRenderContext(instance);
  }
  const { setup } = Component;
  if (setup) {
    pauseTracking();
    const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
    const reset = setCurrentInstance(instance);
    const setupResult = callWithErrorHandling(
      setup,
      instance,
      0,
      [
        true ? shallowReadonly(instance.props) : instance.props,
        setupContext
      ]
    );
    const isAsyncSetup = isPromise(setupResult);
    resetTracking();
    reset();
    if ((isAsyncSetup || instance.sp) && !isAsyncWrapper(instance)) {
      markAsyncBoundary(instance);
    }
    if (isAsyncSetup) {
      setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
      if (isSSR) {
        return setupResult.then((resolvedResult) => {
          handleSetupResult(instance, resolvedResult, isSSR);
        }).catch((e) => {
          handleError(e, instance, 0);
        });
      } else {
        instance.asyncDep = setupResult;
        if (!instance.suspense) {
          const name = formatComponentName(instance, Component);
          warn$1(
            `Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
          );
        }
      }
    } else {
      handleSetupResult(instance, setupResult, isSSR);
    }
  } else {
    finishComponentSetup(instance, isSSR);
  }
}
function handleSetupResult(instance, setupResult, isSSR) {
  if (isFunction(setupResult)) {
    if (instance.type.__ssrInlineRender) {
      instance.ssrRender = setupResult;
    } else {
      instance.render = setupResult;
    }
  } else if (isObject(setupResult)) {
    if (isVNode(setupResult)) {
      warn$1(
        `setup() should not return VNodes directly - return a render function instead.`
      );
    }
    if (true) {
      instance.devtoolsRawSetupState = setupResult;
    }
    instance.setupState = proxyRefs(setupResult);
    if (true) {
      exposeSetupStateOnRenderContext(instance);
    }
  } else if (setupResult !== void 0) {
    warn$1(
      `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
    );
  }
  finishComponentSetup(instance, isSSR);
}
var compile;
var installWithProxy;
var isRuntimeOnly = () => !compile;
function finishComponentSetup(instance, isSSR, skipOptions) {
  const Component = instance.type;
  if (!instance.render) {
    if (!isSSR && compile && !Component.render) {
      const template = Component.template || resolveMergedOptions(instance).template;
      if (template) {
        if (true) {
          startMeasure(instance, `compile`);
        }
        const { isCustomElement, compilerOptions } = instance.appContext.config;
        const { delimiters, compilerOptions: componentCompilerOptions } = Component;
        const finalCompilerOptions = extend(
          extend(
            {
              isCustomElement,
              delimiters
            },
            compilerOptions
          ),
          componentCompilerOptions
        );
        Component.render = compile(template, finalCompilerOptions);
        if (true) {
          endMeasure(instance, `compile`);
        }
      }
    }
    instance.render = Component.render || NOOP;
    if (installWithProxy) {
      installWithProxy(instance);
    }
  }
  if (true) {
    const reset = setCurrentInstance(instance);
    pauseTracking();
    try {
      applyOptions(instance);
    } finally {
      resetTracking();
      reset();
    }
  }
  if (!Component.render && instance.render === NOOP && !isSSR) {
    if (!compile && Component.template) {
      warn$1(
        `Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
      );
    } else {
      warn$1(`Component is missing template or render function: `, Component);
    }
  }
}
var attrsProxyHandlers = true ? {
  get(target, key) {
    markAttrsAccessed();
    track(target, "get", "");
    return target[key];
  },
  set() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  },
  deleteProperty() {
    warn$1(`setupContext.attrs is readonly.`);
    return false;
  }
} : {
  get(target, key) {
    track(target, "get", "");
    return target[key];
  }
};
function getSlotsProxy(instance) {
  return new Proxy(instance.slots, {
    get(target, key) {
      track(instance, "get", "$slots");
      return target[key];
    }
  });
}
function createSetupContext(instance) {
  const expose = (exposed) => {
    if (true) {
      if (instance.exposed) {
        warn$1(`expose() should be called only once per setup().`);
      }
      if (exposed != null) {
        let exposedType = typeof exposed;
        if (exposedType === "object") {
          if (isArray(exposed)) {
            exposedType = "array";
          } else if (isRef2(exposed)) {
            exposedType = "ref";
          }
        }
        if (exposedType !== "object") {
          warn$1(
            `expose() should be passed a plain object, received ${exposedType}.`
          );
        }
      }
    }
    instance.exposed = exposed || {};
  };
  if (true) {
    let attrsProxy;
    let slotsProxy;
    return Object.freeze({
      get attrs() {
        return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
      },
      get slots() {
        return slotsProxy || (slotsProxy = getSlotsProxy(instance));
      },
      get emit() {
        return (event, ...args) => instance.emit(event, ...args);
      },
      expose
    });
  } else {
    return {
      attrs: new Proxy(instance.attrs, attrsProxyHandlers),
      slots: instance.slots,
      emit: instance.emit,
      expose
    };
  }
}
function getComponentPublicInstance(instance) {
  if (instance.exposed) {
    return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
      get(target, key) {
        if (key in target) {
          return target[key];
        } else if (key in publicPropertiesMap) {
          return publicPropertiesMap[key](instance);
        }
      },
      has(target, key) {
        return key in target || key in publicPropertiesMap;
      }
    }));
  } else {
    return instance.proxy;
  }
}
var classifyRE = /(?:^|[-_])\w/g;
var classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(instance.components) || instance.parent && inferFromRegistry(
      instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
var computed2 = (getterOrOptions, debugOptions) => {
  const c = computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
  if (true) {
    const i = getCurrentInstance();
    if (i && i.appContext.config.warnRecursiveComputed) {
      c._warnRecursive = true;
    }
  }
  return c;
};
function initCustomFormatter() {
  if (typeof window === "undefined") {
    return;
  }
  const vueStyle = { style: "color:#3ba776" };
  const numberStyle = { style: "color:#1677ff" };
  const stringStyle = { style: "color:#f5222d" };
  const keywordStyle = { style: "color:#eb2f96" };
  const formatter = {
    __vue_custom_formatter: true,
    header(obj) {
      if (!isObject(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if (isRef2(obj)) {
        pauseTracking();
        const value = obj.value;
        resetTracking();
        return [
          "div",
          {},
          ["span", vueStyle, genRefFlag(obj)],
          "<",
          formatValue(value),
          `>`
        ];
      } else if (isReactive(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
          "<",
          formatValue(obj),
          `>${isReadonly(obj) ? ` (readonly)` : ``}`
        ];
      } else if (isReadonly(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
          "<",
          formatValue(obj),
          ">"
        ];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return [
          "div",
          {},
          ...formatInstance(obj.$)
        ];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }
    const computed3 = extractKeys(instance, "computed");
    if (computed3) {
      blocks.push(createInstanceBlock("computed", computed3));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push([
      "div",
      {},
      [
        "span",
        {
          style: keywordStyle.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: instance }]
    ]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        type
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(target).map((key) => {
          return [
            "div",
            {},
            ["span", keywordStyle, key + ": "],
            formatValue(target[key], false)
          ];
        })
      ]
    ];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject(v)) {
      return ["object", { object: asRaw ? toRaw(v) : v }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    const Comp = instance.type;
    if (isFunction(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
var version = "3.5.30";
var warn2 = true ? warn$1 : NOOP;

// node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
var policy = void 0;
var tt = typeof window !== "undefined" && window.trustedTypes;
if (tt) {
  try {
    policy = /* @__PURE__ */ tt.createPolicy("vue", {
      createHTML: (val) => val
    });
  } catch (e) {
    warn2(`Error creating trusted types policy: ${e}`);
  }
}
var unsafeToTrustedHTML = policy ? (val) => policy.createHTML(val) : (val) => val;
var svgNS = "http://www.w3.org/2000/svg";
var mathmlNS = "http://www.w3.org/1998/Math/MathML";
var doc = typeof document !== "undefined" ? document : null;
var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
var nodeOps = {
  insert: (child, parent2, anchor) => {
    parent2.insertBefore(child, anchor || null);
  },
  remove: (child) => {
    const parent2 = child.parentNode;
    if (parent2) {
      parent2.removeChild(child);
    }
  },
  createElement: (tag, namespace, is, props) => {
    const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : is ? doc.createElement(tag, { is }) : doc.createElement(tag);
    if (tag === "select" && props && props.multiple != null) {
      el.setAttribute("multiple", props.multiple);
    }
    return el;
  },
  createText: (text) => doc.createTextNode(text),
  createComment: (text) => doc.createComment(text),
  setText: (node, text) => {
    node.nodeValue = text;
  },
  setElementText: (el, text) => {
    el.textContent = text;
  },
  parentNode: (node) => node.parentNode,
  nextSibling: (node) => node.nextSibling,
  querySelector: (selector) => doc.querySelector(selector),
  setScopeId(el, id) {
    el.setAttribute(id, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(content, parent2, anchor, namespace, start, end) {
    const before = anchor ? anchor.previousSibling : parent2.lastChild;
    if (start && (start === end || start.nextSibling)) {
      while (true) {
        parent2.insertBefore(start.cloneNode(true), anchor);
        if (start === end || !(start = start.nextSibling)) break;
      }
    } else {
      templateContainer.innerHTML = unsafeToTrustedHTML(
        namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content
      );
      const template = templateContainer.content;
      if (namespace === "svg" || namespace === "mathml") {
        const wrapper = template.firstChild;
        while (wrapper.firstChild) {
          template.appendChild(wrapper.firstChild);
        }
        template.removeChild(wrapper);
      }
      parent2.insertBefore(template, anchor);
    }
    return [
      // first
      before ? before.nextSibling : parent2.firstChild,
      // last
      anchor ? anchor.previousSibling : parent2.lastChild
    ];
  }
};
var vtcKey = /* @__PURE__ */ Symbol("_vtc");
function patchClass(el, value, isSVG) {
  const transitionClasses = el[vtcKey];
  if (transitionClasses) {
    value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
  }
  if (value == null) {
    el.removeAttribute("class");
  } else if (isSVG) {
    el.setAttribute("class", value);
  } else {
    el.className = value;
  }
}
var vShowOriginalDisplay = /* @__PURE__ */ Symbol("_vod");
var vShowHidden = /* @__PURE__ */ Symbol("_vsh");
var CSS_VAR_TEXT = /* @__PURE__ */ Symbol(true ? "CSS_VAR_TEXT" : "");
var displayRE = /(?:^|;)\s*display\s*:/;
function patchStyle(el, prev, next) {
  const style = el.style;
  const isCssString = isString(next);
  let hasControlledDisplay = false;
  if (next && !isCssString) {
    if (prev) {
      if (!isString(prev)) {
        for (const key in prev) {
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      } else {
        for (const prevStyle of prev.split(";")) {
          const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
          if (next[key] == null) {
            setStyle(style, key, "");
          }
        }
      }
    }
    for (const key in next) {
      if (key === "display") {
        hasControlledDisplay = true;
      }
      setStyle(style, key, next[key]);
    }
  } else {
    if (isCssString) {
      if (prev !== next) {
        const cssVarText = style[CSS_VAR_TEXT];
        if (cssVarText) {
          next += ";" + cssVarText;
        }
        style.cssText = next;
        hasControlledDisplay = displayRE.test(next);
      }
    } else if (prev) {
      el.removeAttribute("style");
    }
  }
  if (vShowOriginalDisplay in el) {
    el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
    if (el[vShowHidden]) {
      style.display = "none";
    }
  }
}
var semicolonRE = /[^\\];\s*$/;
var importantRE = /\s*!important$/;
function setStyle(style, name, val) {
  if (isArray(val)) {
    val.forEach((v) => setStyle(style, name, v));
  } else {
    if (val == null) val = "";
    if (true) {
      if (semicolonRE.test(val)) {
        warn2(
          `Unexpected semicolon at the end of '${name}' style value: '${val}'`
        );
      }
    }
    if (name.startsWith("--")) {
      style.setProperty(name, val);
    } else {
      const prefixed = autoPrefix(style, name);
      if (importantRE.test(val)) {
        style.setProperty(
          hyphenate(prefixed),
          val.replace(importantRE, ""),
          "important"
        );
      } else {
        style[prefixed] = val;
      }
    }
  }
}
var prefixes = ["Webkit", "Moz", "ms"];
var prefixCache = {};
function autoPrefix(style, rawName) {
  const cached = prefixCache[rawName];
  if (cached) {
    return cached;
  }
  let name = camelize(rawName);
  if (name !== "filter" && name in style) {
    return prefixCache[rawName] = name;
  }
  name = capitalize(name);
  for (let i = 0; i < prefixes.length; i++) {
    const prefixed = prefixes[i] + name;
    if (prefixed in style) {
      return prefixCache[rawName] = prefixed;
    }
  }
  return rawName;
}
var xlinkNS = "http://www.w3.org/1999/xlink";
function patchAttr(el, key, value, isSVG, instance, isBoolean2 = isSpecialBooleanAttr(key)) {
  if (isSVG && key.startsWith("xlink:")) {
    if (value == null) {
      el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(
        key,
        isBoolean2 ? "" : isSymbol(value) ? String(value) : value
      );
    }
  }
}
function patchDOMProp(el, key, value, parentComponent, attrName) {
  if (key === "innerHTML" || key === "textContent") {
    if (value != null) {
      el[key] = key === "innerHTML" ? unsafeToTrustedHTML(value) : value;
    }
    return;
  }
  const tag = el.tagName;
  if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
  !tag.includes("-")) {
    const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
    const newValue = value == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      el.type === "checkbox" ? "on" : ""
    ) : String(value);
    if (oldValue !== newValue || !("_value" in el)) {
      el.value = newValue;
    }
    if (value == null) {
      el.removeAttribute(key);
    }
    el._value = value;
    return;
  }
  let needRemove = false;
  if (value === "" || value == null) {
    const type = typeof el[key];
    if (type === "boolean") {
      value = includeBooleanAttr(value);
    } else if (value == null && type === "string") {
      value = "";
      needRemove = true;
    } else if (type === "number") {
      value = 0;
      needRemove = true;
    }
  }
  try {
    el[key] = value;
  } catch (e) {
    if (!needRemove) {
      warn2(
        `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
        e
      );
    }
  }
  needRemove && el.removeAttribute(attrName || key);
}
function addEventListener(el, event, handler, options) {
  el.addEventListener(event, handler, options);
}
function removeEventListener(el, event, handler, options) {
  el.removeEventListener(event, handler, options);
}
var veiKey = /* @__PURE__ */ Symbol("_vei");
function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
  const invokers = el[veiKey] || (el[veiKey] = {});
  const existingInvoker = invokers[rawName];
  if (nextValue && existingInvoker) {
    existingInvoker.value = true ? sanitizeEventValue(nextValue, rawName) : nextValue;
  } else {
    const [name, options] = parseName(rawName);
    if (nextValue) {
      const invoker = invokers[rawName] = createInvoker(
        true ? sanitizeEventValue(nextValue, rawName) : nextValue,
        instance
      );
      addEventListener(el, name, invoker, options);
    } else if (existingInvoker) {
      removeEventListener(el, name, existingInvoker, options);
      invokers[rawName] = void 0;
    }
  }
}
var optionsModifierRE = /(?:Once|Passive|Capture)$/;
function parseName(name) {
  let options;
  if (optionsModifierRE.test(name)) {
    options = {};
    let m;
    while (m = name.match(optionsModifierRE)) {
      name = name.slice(0, name.length - m[0].length);
      options[m[0].toLowerCase()] = true;
    }
  }
  const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
  return [event, options];
}
var cachedNow = 0;
var p = /* @__PURE__ */ Promise.resolve();
var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
function createInvoker(initialValue, instance) {
  const invoker = (e) => {
    if (!e._vts) {
      e._vts = Date.now();
    } else if (e._vts <= invoker.attached) {
      return;
    }
    callWithAsyncErrorHandling(
      patchStopImmediatePropagation(e, invoker.value),
      instance,
      5,
      [e]
    );
  };
  invoker.value = initialValue;
  invoker.attached = getNow();
  return invoker;
}
function sanitizeEventValue(value, propName) {
  if (isFunction(value) || isArray(value)) {
    return value;
  }
  warn2(
    `Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`
  );
  return NOOP;
}
function patchStopImmediatePropagation(e, value) {
  if (isArray(value)) {
    const originalStop = e.stopImmediatePropagation;
    e.stopImmediatePropagation = () => {
      originalStop.call(e);
      e._stopped = true;
    };
    return value.map(
      (fn) => (e2) => !e2._stopped && fn && fn(e2)
    );
  } else {
    return value;
  }
}
var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
var patchProp = (el, key, prevValue, nextValue, namespace, parentComponent) => {
  const isSVG = namespace === "svg";
  if (key === "class") {
    patchClass(el, nextValue, isSVG);
  } else if (key === "style") {
    patchStyle(el, prevValue, nextValue);
  } else if (isOn(key)) {
    if (!isModelListener(key)) {
      patchEvent(el, key, prevValue, nextValue, parentComponent);
    }
  } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
    patchDOMProp(el, key, nextValue);
    if (!el.tagName.includes("-") && (key === "value" || key === "checked" || key === "selected")) {
      patchAttr(el, key, nextValue, isSVG, parentComponent, key !== "value");
    }
  } else if (
    // #11081 force set props for possible async custom element
    el._isVueCE && // #12408 check if it's declared prop or it's async custom element
    (shouldSetAsPropForVueCE(el, key) || // @ts-expect-error _def is private
    el._def.__asyncLoader && (/[A-Z]/.test(key) || !isString(nextValue)))
  ) {
    patchDOMProp(el, camelize(key), nextValue, parentComponent, key);
  } else {
    if (key === "true-value") {
      el._trueValue = nextValue;
    } else if (key === "false-value") {
      el._falseValue = nextValue;
    }
    patchAttr(el, key, nextValue, isSVG);
  }
};
function shouldSetAsProp(el, key, value, isSVG) {
  if (isSVG) {
    if (key === "innerHTML" || key === "textContent") {
      return true;
    }
    if (key in el && isNativeOn(key) && isFunction(value)) {
      return true;
    }
    return false;
  }
  if (key === "spellcheck" || key === "draggable" || key === "translate" || key === "autocorrect") {
    return false;
  }
  if (key === "sandbox" && el.tagName === "IFRAME") {
    return false;
  }
  if (key === "form") {
    return false;
  }
  if (key === "list" && el.tagName === "INPUT") {
    return false;
  }
  if (key === "type" && el.tagName === "TEXTAREA") {
    return false;
  }
  if (key === "width" || key === "height") {
    const tag = el.tagName;
    if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
      return false;
    }
  }
  if (isNativeOn(key) && isString(value)) {
    return false;
  }
  return key in el;
}
function shouldSetAsPropForVueCE(el, key) {
  const props = (
    // @ts-expect-error _def is private
    el._def.props
  );
  if (!props) {
    return false;
  }
  const camelKey = camelize(key);
  return Array.isArray(props) ? props.some((prop) => camelize(prop) === camelKey) : Object.keys(props).some((prop) => camelize(prop) === camelKey);
}
var systemModifiers = ["ctrl", "shift", "alt", "meta"];
var modifierGuards = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, modifiers) => systemModifiers.some((m) => e[`${m}Key`] && !modifiers.includes(m))
};
var withModifiers = (fn, modifiers) => {
  if (!fn) return fn;
  const cache = fn._withMods || (fn._withMods = {});
  const cacheKey = modifiers.join(".");
  return cache[cacheKey] || (cache[cacheKey] = ((event, ...args) => {
    for (let i = 0; i < modifiers.length; i++) {
      const guard = modifierGuards[modifiers[i]];
      if (guard && guard(event, modifiers)) return;
    }
    return fn(event, ...args);
  }));
};
var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
var renderer;
function ensureRenderer() {
  return renderer || (renderer = createRenderer(rendererOptions));
}
var createApp = ((...args) => {
  const app2 = ensureRenderer().createApp(...args);
  if (true) {
    injectNativeTagCheck(app2);
    injectCompilerOptionsCheck(app2);
  }
  const { mount } = app2;
  app2.mount = (containerOrSelector) => {
    const container = normalizeContainer(containerOrSelector);
    if (!container) return;
    const component = app2._component;
    if (!isFunction(component) && !component.render && !component.template) {
      component.template = container.innerHTML;
    }
    if (container.nodeType === 1) {
      container.textContent = "";
    }
    const proxy = mount(container, false, resolveRootNamespace(container));
    if (container instanceof Element) {
      container.removeAttribute("v-cloak");
      container.setAttribute("data-v-app", "");
    }
    return proxy;
  };
  return app2;
});
function resolveRootNamespace(container) {
  if (container instanceof SVGElement) {
    return "svg";
  }
  if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
    return "mathml";
  }
}
function injectNativeTagCheck(app2) {
  Object.defineProperty(app2.config, "isNativeTag", {
    value: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
    writable: false
  });
}
function injectCompilerOptionsCheck(app2) {
  if (isRuntimeOnly()) {
    const isCustomElement = app2.config.isCustomElement;
    Object.defineProperty(app2.config, "isCustomElement", {
      get() {
        return isCustomElement;
      },
      set() {
        warn2(
          `The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`
        );
      }
    });
    const compilerOptions = app2.config.compilerOptions;
    const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
    Object.defineProperty(app2.config, "compilerOptions", {
      get() {
        warn2(msg);
        return compilerOptions;
      },
      set() {
        warn2(msg);
      }
    });
  }
}
function normalizeContainer(container) {
  if (isString(container)) {
    const res = document.querySelector(container);
    if (!res) {
      warn2(
        `Failed to mount app: mount target selector "${container}" returned null.`
      );
    }
    return res;
  }
  if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
    warn2(
      `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`
    );
  }
  return container;
}

// node_modules/vue/dist/vue.runtime.esm-bundler.js
function initDev() {
  {
    initCustomFormatter();
  }
}
if (true) {
  initDev();
}

// src/ui/drag.ts
function clampToViewport(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function computeCenteredPosition(panelWidth, panelHeight, viewportWidth, viewportHeight) {
  return {
    left: clampToViewport((viewportWidth - panelWidth) / 2, 8, viewportWidth - panelWidth - 8),
    top: clampToViewport((viewportHeight - panelHeight) / 2, 8, viewportHeight - panelHeight - 8)
  };
}
function computeInputAbovePosition(inputRect, panelWidth, panelHeight, viewportWidth, viewportHeight) {
  if (!inputRect) {
    return {
      left: clampToViewport((viewportWidth - panelWidth) / 2, 8, viewportWidth - panelWidth - 8),
      top: clampToViewport(viewportHeight - panelHeight - 160, 8, viewportHeight - panelHeight - 8)
    };
  }
  return {
    left: clampToViewport(inputRect.left + (inputRect.width - panelWidth) / 2, 8, viewportWidth - panelWidth - 8),
    top: clampToViewport(inputRect.top - panelHeight - 24, 8, viewportHeight - panelHeight - 8)
  };
}
function attachDragHandlers(options) {
  const { event, panel, win, onMovePosition } = options;
  const rect = panel.getBoundingClientRect();
  const offsetX = event.clientX - rect.left;
  const offsetY = event.clientY - rect.top;
  const onMove = (moveEvent) => {
    const left = clampToViewport(moveEvent.clientX - offsetX, 8, win.innerWidth - rect.width - 8);
    const top = clampToViewport(moveEvent.clientY - offsetY, 8, win.innerHeight - rect.height - 8);
    onMovePosition({ left, top });
  };
  const onUp = () => {
    win.removeEventListener("pointermove", onMove);
    win.removeEventListener("pointerup", onUp);
  };
  win.addEventListener("pointermove", onMove);
  win.addEventListener("pointerup", onUp, { once: true });
}

// src/ui/store.ts
var SYSTEM_PANEL_POSITION_KEY = "tk-system-panel-position";
var PLAYER_OPTIONS_POSITION_KEY = "tk-player-options-panel-position";
function \u8BFB\u53D6\u4F4D\u7F6E(key) {
  try {
    const raw = globalThis.localStorage?.getItem(key);
    if (!raw) {
      return { mode: "default", left: 0, top: 0 };
    }
    const parsed = JSON.parse(raw);
    if (parsed.mode !== "custom" && parsed.mode !== "default") {
      return { mode: "default", left: 0, top: 0 };
    }
    return {
      mode: parsed.mode,
      left: Number(parsed.left || 0),
      top: Number(parsed.top || 0)
    };
  } catch {
    return { mode: "default", left: 0, top: 0 };
  }
}
function \u4FDD\u5B58\u4F4D\u7F6E(key, position) {
  try {
    globalThis.localStorage?.setItem(key, JSON.stringify(position));
  } catch {
  }
}
var unifiedPanelState = reactive({
  systemPanel: {
    visible: false,
    latestMessageId: null,
    state: null,
    position: \u8BFB\u53D6\u4F4D\u7F6E(SYSTEM_PANEL_POSITION_KEY)
  },
  playerOptionsPanel: {
    visible: false,
    latestMessageId: null,
    options: [],
    position: \u8BFB\u53D6\u4F4D\u7F6E(PLAYER_OPTIONS_POSITION_KEY)
  }
});
function updateSystemPanelState(payload) {
  unifiedPanelState.systemPanel.latestMessageId = payload.messageId;
  unifiedPanelState.systemPanel.state = payload.state;
}
function updatePlayerOptionsPanelState(payload) {
  const options = payload.options ?? [];
  unifiedPanelState.playerOptionsPanel.latestMessageId = payload.messageId;
  unifiedPanelState.playerOptionsPanel.options = options;
  unifiedPanelState.playerOptionsPanel.visible = options.length > 0;
}
function setSystemPanelVisible(visible) {
  unifiedPanelState.systemPanel.visible = visible;
}
function setPlayerOptionsPanelVisible(visible) {
  unifiedPanelState.playerOptionsPanel.visible = visible;
}
function setSystemPanelPosition(left, top) {
  const position = { mode: "custom", left, top };
  unifiedPanelState.systemPanel.position = position;
  \u4FDD\u5B58\u4F4D\u7F6E(SYSTEM_PANEL_POSITION_KEY, position);
}
function setPlayerOptionsPanelPosition(left, top) {
  const position = { mode: "custom", left, top };
  unifiedPanelState.playerOptionsPanel.position = position;
  \u4FDD\u5B58\u4F4D\u7F6E(PLAYER_OPTIONS_POSITION_KEY, position);
}
function resetSystemPanelPosition() {
  const position = { mode: "default", left: 0, top: 0 };
  unifiedPanelState.systemPanel.position = position;
  \u4FDD\u5B58\u4F4D\u7F6E(SYSTEM_PANEL_POSITION_KEY, position);
}
function resetPlayerOptionsPanelPosition() {
  const position = { mode: "default", left: 0, top: 0 };
  unifiedPanelState.playerOptionsPanel.position = position;
  \u4FDD\u5B58\u4F4D\u7F6E(PLAYER_OPTIONS_POSITION_KEY, position);
}
function clearUnifiedPanelState() {
  unifiedPanelState.systemPanel.visible = false;
  unifiedPanelState.systemPanel.latestMessageId = null;
  unifiedPanelState.systemPanel.state = null;
  unifiedPanelState.playerOptionsPanel.visible = false;
  unifiedPanelState.playerOptionsPanel.latestMessageId = null;
  unifiedPanelState.playerOptionsPanel.options = [];
}

// unplugin-vue: /plugin-vue/export-helper
var export_helper_default = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

// src/ui/components/status/ArmyPanel.vue
var _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ArmyPanel",
  props: { state: {
    type: Object,
    required: true
  } },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const currentFactionEntry = computed2(() => Object.entries(props.state.\u52BF\u529B || {})[0] ?? null);
    const currentFactionId = computed2(() => currentFactionEntry.value?.[0] ?? "");
    const currentFaction = computed2(() => currentFactionEntry.value?.[1] ?? null);
    const armies = computed2(() => Object.entries(currentFaction.value?.\u519B\u961F || {}));
    const __returned__ = {
      props,
      currentFactionEntry,
      currentFactionId,
      currentFaction,
      armies
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_1 = { class: "tk-panel-card" };
var _hoisted_2 = {
  key: 0,
  class: "tk-panel-inline-note"
};
var _hoisted_3 = { class: "tk-panel-detail-list" };
var _hoisted_4 = { class: "tk-panel-detail-body" };
var _hoisted_5 = { class: "tk-panel-bar-row" };
var _hoisted_6 = { class: "tk-panel-bar" };
var _hoisted_7 = { class: "tk-panel-bar-value" };
var _hoisted_8 = { class: "tk-panel-bar-row" };
var _hoisted_9 = { class: "tk-panel-bar" };
var _hoisted_10 = { class: "tk-panel-bar-value" };
var _hoisted_11 = { class: "tk-panel-kv-grid compact" };
var _hoisted_12 = { class: "tk-panel-kv" };
var _hoisted_13 = { class: "tk-panel-v" };
var _hoisted_14 = { class: "tk-panel-kv" };
var _hoisted_15 = { class: "tk-panel-v" };
var _hoisted_16 = { class: "tk-panel-kv" };
var _hoisted_17 = { class: "tk-panel-v" };
var _hoisted_18 = { class: "tk-panel-kv" };
var _hoisted_19 = { class: "tk-panel-v" };
var _hoisted_20 = { class: "tk-panel-kv" };
var _hoisted_21 = { class: "tk-panel-v" };
var _hoisted_22 = { class: "tk-panel-kv" };
var _hoisted_23 = { class: "tk-panel-v" };
var _hoisted_24 = {
  key: 0,
  class: "tk-panel-empty"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_1, [
    _cache[8] || (_cache[8] = createBaseVNode(
      "div",
      { class: "tk-panel-card-title" },
      "\u519B\u961F",
      -1
      /* CACHED */
    )),
    $setup.currentFaction ? (openBlock(), createElementBlock(
      "div",
      _hoisted_2,
      "\u5F53\u524D\u5C55\u793A\u52BF\u529B\uFF1A" + toDisplayString($setup.currentFaction.\u540D\u79F0 || $setup.currentFactionId) + "\uFF08" + toDisplayString($setup.currentFactionId) + "\uFF09",
      1
      /* TEXT */
    )) : createCommentVNode("v-if", true),
    createBaseVNode("div", _hoisted_3, [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.armies, ([id, army]) => {
        return openBlock(), createElementBlock("details", {
          key: id,
          class: "tk-panel-detail"
        }, [createBaseVNode("summary", null, [createBaseVNode(
          "span",
          null,
          toDisplayString(id),
          1
          /* TEXT */
        ), createBaseVNode(
          "span",
          null,
          toDisplayString(army.\u5175\u79CD) + " / " + toDisplayString(army.\u7B49\u7EA7),
          1
          /* TEXT */
        )]), createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, [
            _cache[0] || (_cache[0] = createBaseVNode(
              "div",
              { class: "tk-panel-bar-label" },
              "\u58EB\u6C14",
              -1
              /* CACHED */
            )),
            createBaseVNode("div", _hoisted_6, [createBaseVNode(
              "span",
              {
                class: "tk-panel-bar-fill is-morale",
                style: normalizeStyle({ width: `${army.\u58EB\u6C14}%` })
              },
              null,
              4
              /* STYLE */
            )]),
            createBaseVNode(
              "div",
              _hoisted_7,
              toDisplayString(army.\u58EB\u6C14) + " / 100",
              1
              /* TEXT */
            )
          ]),
          createBaseVNode("div", _hoisted_8, [
            _cache[1] || (_cache[1] = createBaseVNode(
              "div",
              { class: "tk-panel-bar-label" },
              "\u75B2\u60EB",
              -1
              /* CACHED */
            )),
            createBaseVNode("div", _hoisted_9, [createBaseVNode(
              "span",
              {
                class: "tk-panel-bar-fill is-fatigue",
                style: normalizeStyle({ width: `${army.\u75B2\u60EB}%` })
              },
              null,
              4
              /* STYLE */
            )]),
            createBaseVNode(
              "div",
              _hoisted_10,
              toDisplayString(army.\u75B2\u60EB) + " / 100",
              1
              /* TEXT */
            )
          ]),
          createBaseVNode("div", _hoisted_11, [
            createBaseVNode("div", _hoisted_12, [_cache[2] || (_cache[2] = createBaseVNode(
              "span",
              { class: "tk-panel-k" },
              "\u5175\u529B",
              -1
              /* CACHED */
            )), createBaseVNode(
              "span",
              _hoisted_13,
              toDisplayString(army.\u5175\u529B),
              1
              /* TEXT */
            )]),
            createBaseVNode("div", _hoisted_14, [_cache[3] || (_cache[3] = createBaseVNode(
              "span",
              { class: "tk-panel-k" },
              "\u5C06\u9886",
              -1
              /* CACHED */
            )), createBaseVNode(
              "span",
              _hoisted_15,
              toDisplayString(army.\u7EDF\u5C5E\u5C06\u9886 || "\u65E0"),
              1
              /* TEXT */
            )]),
            createBaseVNode("div", _hoisted_16, [_cache[4] || (_cache[4] = createBaseVNode(
              "span",
              { class: "tk-panel-k" },
              "\u9A7B\u624E\u5730",
              -1
              /* CACHED */
            )), createBaseVNode(
              "span",
              _hoisted_17,
              toDisplayString(army.\u9A7B\u624E\u5730 || "\u65E0"),
              1
              /* TEXT */
            )]),
            createBaseVNode("div", _hoisted_18, [_cache[5] || (_cache[5] = createBaseVNode(
              "span",
              { class: "tk-panel-k" },
              "\u6218\u529B",
              -1
              /* CACHED */
            )), createBaseVNode(
              "span",
              _hoisted_19,
              toDisplayString(army._\u7EFC\u5408\u6218\u529B ?? 0),
              1
              /* TEXT */
            )]),
            createBaseVNode("div", _hoisted_20, [_cache[6] || (_cache[6] = createBaseVNode(
              "span",
              { class: "tk-panel-k" },
              "\u653B\u51FB\u6218\u529B",
              -1
              /* CACHED */
            )), createBaseVNode(
              "span",
              _hoisted_21,
              toDisplayString(army._\u653B\u51FB\u6218\u529B ?? 0),
              1
              /* TEXT */
            )]),
            createBaseVNode("div", _hoisted_22, [_cache[7] || (_cache[7] = createBaseVNode(
              "span",
              { class: "tk-panel-k" },
              "\u9632\u5FA1\u6218\u529B",
              -1
              /* CACHED */
            )), createBaseVNode(
              "span",
              _hoisted_23,
              toDisplayString(army._\u9632\u5FA1\u6218\u529B ?? 0),
              1
              /* TEXT */
            )])
          ])
        ])]);
      }),
      128
      /* KEYED_FRAGMENT */
    )), $setup.armies.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_24, "\u5F53\u524D\u6CA1\u6709\u519B\u961F\u6570\u636E")) : createCommentVNode("v-if", true)])
  ]);
}
var ArmyPanel_default = /* @__PURE__ */ export_helper_default(_sfc_main, [["render", _sfc_render], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\ArmyPanel.vue"]]);

// src/ui/components/status/FactionPanel.vue
var _sfc_main2 = /* @__PURE__ */ defineComponent({
  __name: "FactionPanel",
  props: { state: {
    type: Object,
    required: true
  } },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const currentFactionEntry = computed2(() => Object.entries(props.state.\u52BF\u529B || {})[0] ?? null);
    const currentFactionId = computed2(() => currentFactionEntry.value?.[0] ?? "");
    const currentFaction = computed2(() => currentFactionEntry.value?.[1] ?? null);
    const diplomacyItems = computed2(() => Object.entries(currentFaction.value?.\u5916\u4EA4 || {}).slice(0, 8).map(([name, value]) => ({
      label: name,
      value: `${value} / ${currentFaction.value?._\u5916\u4EA4\u7B49\u7EA7?.[name] || "\u672A\u77E5"}`
    })));
    const cities = computed2(() => Object.entries(currentFaction.value?.\u57CE\u6C60 || {}).slice(0, 8));
    const summaryItems = computed2(() => currentFaction.value ? [
      {
        label: "\u540D\u79F0",
        value: currentFaction.value.\u540D\u79F0 || "\u65E0",
        accent: true
      },
      {
        label: "\u89C4\u6A21",
        value: currentFaction.value.\u89C4\u6A21 || "\u65E0",
        accent: true
      },
      {
        label: "\u6B63\u7EDF\u6027",
        value: currentFaction.value.\u6B63\u7EDF\u6027
      },
      {
        label: "\u60C5\u62A5\u7F51",
        value: currentFaction.value.\u60C5\u62A5\u7F51
      },
      {
        label: "\u91D1\u94B1",
        value: currentFaction.value.\u91D1\u94B1
      },
      {
        label: "\u7CAE\u8349",
        value: currentFaction.value.\u7CAE\u8349
      },
      {
        label: "\u603B\u5175\u529B",
        value: currentFaction.value._\u603B\u5175\u529B ?? 0
      },
      {
        label: "\u603B\u6218\u529B",
        value: currentFaction.value._\u603B\u6218\u529B ?? 0
      },
      {
        label: "\u6708\u7A0E\u6536",
        value: currentFaction.value._\u6708\u603B\u7A0E\u6536 ?? 0
      },
      {
        label: "\u6708\u4EA7\u7CAE",
        value: currentFaction.value._\u6708\u603B\u4EA7\u7CAE ?? 0
      },
      {
        label: "\u6708\u519B\u9977",
        value: currentFaction.value._\u6708\u519B\u9977\u4F30\u7B97 ?? 0
      },
      {
        label: "\u6708\u8017\u7CAE",
        value: currentFaction.value._\u6708\u7CAE\u8349\u6D88\u8017\u4F30\u7B97 ?? 0
      }
    ] : []);
    const __returned__ = {
      props,
      currentFactionEntry,
      currentFactionId,
      currentFaction,
      diplomacyItems,
      cities,
      summaryItems
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_110 = {
  key: 0,
  class: "tk-panel-page-grid cols-2"
};
var _hoisted_25 = { class: "tk-panel-card" };
var _hoisted_32 = { class: "tk-panel-inline-note" };
var _hoisted_42 = { class: "tk-panel-kv-grid" };
var _hoisted_52 = { class: "tk-panel-k" };
var _hoisted_62 = { class: "tk-panel-v" };
var _hoisted_72 = { class: "tk-panel-card" };
var _hoisted_82 = { class: "tk-panel-kv-grid compact" };
var _hoisted_92 = { class: "tk-panel-k" };
var _hoisted_102 = { class: "tk-panel-v" };
var _hoisted_112 = {
  key: 0,
  class: "tk-panel-empty"
};
var _hoisted_122 = { class: "tk-panel-card cols-span-2" };
var _hoisted_132 = { class: "tk-panel-list" };
var _hoisted_142 = { class: "tk-panel-list-title" };
var _hoisted_152 = { class: "tk-panel-list-meta" };
var _hoisted_162 = { class: "tk-panel-list-desc" };
var _hoisted_172 = {
  key: 0,
  class: "tk-panel-empty"
};
var _hoisted_182 = {
  key: 1,
  class: "tk-panel-card"
};
function _sfc_render2(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.currentFaction ? (openBlock(), createElementBlock("div", _hoisted_110, [
    createBaseVNode("section", _hoisted_25, [
      _cache[0] || (_cache[0] = createBaseVNode(
        "div",
        { class: "tk-panel-card-title" },
        "\u52BF\u529B\u603B\u89C8",
        -1
        /* CACHED */
      )),
      createBaseVNode(
        "div",
        _hoisted_32,
        "\u5F53\u524D\u5C55\u793A\u52BF\u529B\uFF1A" + toDisplayString($setup.currentFaction.\u540D\u79F0 || $setup.currentFactionId) + "\uFF08" + toDisplayString($setup.currentFactionId) + "\uFF09",
        1
        /* TEXT */
      ),
      createBaseVNode("div", _hoisted_42, [(openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList($setup.summaryItems, (item) => {
          return openBlock(), createElementBlock(
            "div",
            {
              key: item.label,
              class: normalizeClass(["tk-panel-kv", { "is-accent": item.accent }])
            },
            [createBaseVNode(
              "span",
              _hoisted_52,
              toDisplayString(item.label),
              1
              /* TEXT */
            ), createBaseVNode(
              "span",
              _hoisted_62,
              toDisplayString(item.value),
              1
              /* TEXT */
            )],
            2
            /* CLASS */
          );
        }),
        128
        /* KEYED_FRAGMENT */
      ))])
    ]),
    createBaseVNode("section", _hoisted_72, [_cache[1] || (_cache[1] = createBaseVNode(
      "div",
      { class: "tk-panel-card-title" },
      "\u5916\u4EA4\u6001\u52BF",
      -1
      /* CACHED */
    )), createBaseVNode("div", _hoisted_82, [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.diplomacyItems, (item) => {
        return openBlock(), createElementBlock("div", {
          key: item.label,
          class: "tk-panel-kv"
        }, [createBaseVNode(
          "span",
          _hoisted_92,
          toDisplayString(item.label),
          1
          /* TEXT */
        ), createBaseVNode(
          "span",
          _hoisted_102,
          toDisplayString(item.value),
          1
          /* TEXT */
        )]);
      }),
      128
      /* KEYED_FRAGMENT */
    )), $setup.diplomacyItems.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_112, "\u6682\u65E0\u5916\u4EA4\u6570\u636E")) : createCommentVNode("v-if", true)])]),
    createBaseVNode("section", _hoisted_122, [_cache[2] || (_cache[2] = createBaseVNode(
      "div",
      { class: "tk-panel-card-title" },
      "\u57CE\u6C60\u6458\u8981",
      -1
      /* CACHED */
    )), createBaseVNode("div", _hoisted_132, [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.cities, ([id, city]) => {
        return openBlock(), createElementBlock("div", {
          key: id,
          class: "tk-panel-list-item"
        }, [
          createBaseVNode(
            "div",
            _hoisted_142,
            toDisplayString(id),
            1
            /* TEXT */
          ),
          createBaseVNode(
            "div",
            _hoisted_152,
            toDisplayString(city.\u7B49\u7EA7) + " / \u592A\u5B88:" + toDisplayString(city.\u592A\u5B88 || "\u65E0"),
            1
            /* TEXT */
          ),
          createBaseVNode(
            "div",
            _hoisted_162,
            "\u7A0E\u6536:" + toDisplayString(city._\u6708\u7A0E\u6536 ?? 0) + " \xB7 \u4EA7\u7CAE:" + toDisplayString(city._\u6708\u4EA7\u7CAE ?? 0),
            1
            /* TEXT */
          )
        ]);
      }),
      128
      /* KEYED_FRAGMENT */
    )), $setup.cities.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_172, "\u6682\u65E0\u57CE\u6C60\u6570\u636E")) : createCommentVNode("v-if", true)])])
  ])) : (openBlock(), createElementBlock("section", _hoisted_182, [..._cache[3] || (_cache[3] = [createBaseVNode(
    "div",
    { class: "tk-panel-card-title" },
    "\u52BF\u529B",
    -1
    /* CACHED */
  ), createBaseVNode(
    "div",
    { class: "tk-panel-empty" },
    "\u5F53\u524D\u6CA1\u6709\u52BF\u529B\u6570\u636E",
    -1
    /* CACHED */
  )])]));
}
var FactionPanel_default = /* @__PURE__ */ export_helper_default(_sfc_main2, [["render", _sfc_render2], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\FactionPanel.vue"]]);

// src/ui/components/status/RadarChart.vue
var cx = 110;
var cy = 110;
var maxRadius = 72;
var maxValue = 120;
var _sfc_main3 = /* @__PURE__ */ defineComponent({
  __name: "RadarChart",
  props: { stats: {
    type: Object,
    required: true
  } },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const labels = computed2(() => [
      {
        key: "\u6B66\u529B",
        value: props.stats.\u6B66\u529B,
        bonus: props.stats._\u6B66\u529B\u52A0\u503C ?? 0
      },
      {
        key: "\u667A\u529B",
        value: props.stats.\u667A\u529B,
        bonus: props.stats._\u667A\u529B\u52A0\u503C ?? 0
      },
      {
        key: "\u7EDF\u7387",
        value: props.stats.\u7EDF\u7387,
        bonus: props.stats._\u7EDF\u7387\u52A0\u503C ?? 0
      },
      {
        key: "\u653F\u6CBB",
        value: props.stats.\u653F\u6CBB,
        bonus: props.stats._\u653F\u6CBB\u52A0\u503C ?? 0
      },
      {
        key: "\u9B45\u529B",
        value: props.stats.\u9B45\u529B,
        bonus: props.stats._\u9B45\u529B\u52A0\u503C ?? 0
      },
      {
        key: "\u4F53\u8D28",
        value: props.stats.\u4F53\u8D28,
        bonus: props.stats._\u4F53\u8D28\u52A0\u503C ?? 0
      }
    ]);
    const rings = [
      0.25,
      0.5,
      0.75,
      1
    ];
    const angles = computed2(() => labels.value.map((_2, index) => -Math.PI / 2 + Math.PI * 2 * index / labels.value.length));
    function point(radius, angle) {
      return {
        x: Number((cx + Math.cos(angle) * radius).toFixed(1)),
        y: Number((cy + Math.sin(angle) * radius).toFixed(1))
      };
    }
    function polygonPoints(scale) {
      return angles.value.map((angle) => {
        const p2 = point(maxRadius * scale, angle);
        return `${p2.x},${p2.y}`;
      }).join(" ");
    }
    const shapePoints = computed2(() => labels.value.map((item, index) => {
      const p2 = point(maxRadius * Math.max(0, Math.min(1, item.value / maxValue)), angles.value[index]);
      return `${p2.x},${p2.y}`;
    }).join(" "));
    const dots = computed2(() => labels.value.map((item, index) => point(maxRadius * Math.max(0, Math.min(1, item.value / maxValue)), angles.value[index])));
    const labelPositions = computed2(() => labels.value.map((_2, index) => point(maxRadius + 28, angles.value[index])));
    const __returned__ = {
      props,
      labels,
      cx,
      cy,
      maxRadius,
      maxValue,
      rings,
      angles,
      point,
      polygonPoints,
      shapePoints,
      dots,
      labelPositions
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_111 = { class: "tk-radar-wrap" };
var _hoisted_26 = {
  class: "tk-radar",
  viewBox: "0 0 220 220",
  role: "img",
  "aria-label": "\u4E3B\u89D2\u516D\u7EF4\u96F7\u8FBE\u56FE"
};
var _hoisted_33 = ["points"];
var _hoisted_43 = ["x2", "y2"];
var _hoisted_53 = ["points"];
var _hoisted_63 = ["cx", "cy"];
var _hoisted_73 = ["x", "y"];
var _hoisted_83 = ["x"];
var _hoisted_93 = ["x"];
function _sfc_render3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_111, [(openBlock(), createElementBlock("svg", _hoisted_26, [
    (openBlock(), createElementBlock(
      Fragment,
      null,
      renderList($setup.rings, (ring) => {
        return createBaseVNode("polygon", {
          key: ring,
          class: "tk-radar-ring",
          points: $setup.polygonPoints(ring)
        }, null, 8, _hoisted_33);
      }),
      64
      /* STABLE_FRAGMENT */
    )),
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.angles, (angle, index) => {
        return openBlock(), createElementBlock("line", {
          key: `axis-${index}`,
          class: "tk-radar-axis",
          x1: $setup.cx,
          y1: $setup.cy,
          x2: $setup.cx + Math.cos(angle) * $setup.maxRadius,
          y2: $setup.cy + Math.sin(angle) * $setup.maxRadius
        }, null, 8, _hoisted_43);
      }),
      128
      /* KEYED_FRAGMENT */
    )),
    createBaseVNode("polygon", {
      class: "tk-radar-shape",
      points: $setup.shapePoints
    }, null, 8, _hoisted_53),
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.dots, (dot, index) => {
        return openBlock(), createElementBlock("circle", {
          key: `dot-${index}`,
          class: "tk-radar-dot",
          cx: dot.x,
          cy: dot.y,
          r: "3"
        }, null, 8, _hoisted_63);
      }),
      128
      /* KEYED_FRAGMENT */
    )),
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.labels, (label, index) => {
        return openBlock(), createElementBlock("text", {
          key: label.key,
          class: "tk-radar-label",
          x: $setup.labelPositions[index].x,
          y: $setup.labelPositions[index].y,
          "text-anchor": "middle"
        }, [createBaseVNode("tspan", {
          x: $setup.labelPositions[index].x,
          dy: "0"
        }, toDisplayString(label.key), 9, _hoisted_83), createBaseVNode("tspan", {
          x: $setup.labelPositions[index].x,
          dy: "13"
        }, toDisplayString(`${label.value}/${label.bonus}`), 9, _hoisted_93)], 8, _hoisted_73);
      }),
      128
      /* KEYED_FRAGMENT */
    ))
  ]))]);
}
var RadarChart_default = /* @__PURE__ */ export_helper_default(_sfc_main3, [["render", _sfc_render3], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\RadarChart.vue"]]);

// src/ui/components/status/HeroPanel.vue
var _sfc_main4 = /* @__PURE__ */ defineComponent({
  __name: "HeroPanel",
  props: { state: {
    type: Object,
    required: true
  } },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const player = computed2(() => props.state.\u4E3B\u89D2);
    const tabs = [
      {
        key: "attrs",
        label: "\u5C5E\u6027"
      },
      {
        key: "equip",
        label: "\u88C5\u5907"
      },
      {
        key: "bag",
        label: "\u80CC\u5305"
      },
      {
        key: "skills",
        label: "\u6B66\u6280"
      },
      {
        key: "perks",
        label: "\u4E13\u957F"
      },
      {
        key: "consorts",
        label: "\u540E\u5BAB"
      },
      {
        key: "generals",
        label: "\u6B66\u5C06"
      }
    ];
    const activeTab = ref("attrs");
    const resourceItems = computed2(() => [
      {
        label: "\u5B98\u804C",
        value: player.value.\u5B98\u804C || "\u65E0",
        accent: true
      },
      {
        label: "\u7235\u4F4D",
        value: player.value.\u7235\u4F4D || "\u65E0",
        accent: true
      },
      {
        label: "\u58F0\u671B\u79F0\u53F7",
        value: player.value._\u58F0\u671B\u79F0\u53F7 || "\u65E0"
      },
      {
        label: "\u548C\u8C10\u7B49\u7EA7",
        value: player.value._\u548C\u8C10\u7B49\u7EA7 || "\u65E0"
      },
      {
        label: "\u91D1\u94B1",
        value: player.value.\u91D1\u94B1
      },
      {
        label: "\u79EF\u5206",
        value: player.value.\u79EF\u5206
      },
      {
        label: "\u58F0\u671B",
        value: player.value.\u58F0\u671B
      }
    ]);
    const battleItems = computed2(() => [
      {
        label: "\u5148\u653B",
        value: player.value._\u5148\u653B\u503C ?? 0
      },
      {
        label: "\u653B\u51FB",
        value: player.value._\u653B\u51FB\u57FA\u7840\u503C ?? 0
      },
      {
        label: "\u4F24\u5BB3",
        value: player.value._\u4F24\u5BB3\u57FA\u7840\u503C ?? 0
      },
      {
        label: "\u9632\u5FA1DC",
        value: player.value._\u9632\u5FA1DC ?? 0
      },
      {
        label: "\u4F24\u5BB3\u51CF\u514D",
        value: player.value._\u4F24\u5BB3\u51CF\u514D ?? 0
      }
    ]);
    const \u540E\u5BAB\u9879\u5217\u8868 = computed2(() => Object.entries(props.state.NPC || {}).filter(([, npc]) => Boolean(npc.\u7F8E\u4EBA\u5C5E\u6027)).map(([id, npc]) => ({
      title: npc.\u540D\u79F0 || id,
      meta: `${npc.\u7F8E\u4EBA\u5C5E\u6027?.\u4F4D\u4EFD || "\u672A\u7EB3\u5165"} / ${npc.\u7F8E\u4EBA\u5C5E\u6027?._\u4F9D\u8D56\u7B49\u7EA7 || npc.\u7F8E\u4EBA\u5C5E\u6027?.\u4F9D\u8D56\u5EA6 || 0}`,
      desc: `${npc.\u7F8E\u4EBA\u5C5E\u6027?.\u5F53\u524D\u72B6\u6001 || "\u6B63\u5E38"} \xB7 ${npc.\u7B80\u8FF0 || "\u65E0"}`
    })));
    const \u6B66\u5C06\u9879\u5217\u8868 = computed2(() => Object.entries(props.state.NPC || {}).filter(([, npc]) => Boolean(npc.\u6B66\u5C06\u4FE1\u606F)).map(([id, npc]) => ({
      title: npc.\u540D\u79F0 || id,
      meta: `${npc.\u6B66\u5C06\u4FE1\u606F?.\u5B98\u804C || "\u65E0\u5B98\u804C"} / ${npc.\u6B66\u5C06\u4FE1\u606F?.\u5F53\u524D\u72B6\u6001 || "\u5F85\u547D"}`,
      desc: `${npc.\u6B66\u5C06\u4FE1\u606F?.\u9A7B\u624E\u5730 || "\u65E0\u9A7B\u5730"} \xB7 ${npc.\u7B80\u8FF0 || "\u65E0"}`
    })));
    const lists = computed2(() => ({
      equip: Object.entries(player.value.\u88C5\u5907 || {}).map(([slot, item]) => !item || item === "\u65E0" ? {
        title: slot,
        meta: "\u672A\u88C5\u5907",
        desc: ""
      } : {
        title: `${slot} \xB7 ${item.\u540D\u79F0}`,
        meta: `${item.\u54C1\u8D28} / ${item.\u7C7B\u578B}`,
        desc: item.\u63CF\u8FF0 || item.\u5176\u4ED6\u6548\u679C || "\u65E0"
      }),
      bag: Object.entries(player.value.\u7269\u54C1\u680F || {}).map(([id, item]) => ({
        title: id,
        meta: `${item.\u54C1\u8D28} / \u6570\u91CF:${item.\u6570\u91CF}`,
        desc: item.\u63CF\u8FF0 || "\u65E0"
      })),
      skills: Object.entries(player.value.\u6B66\u6280 || {}).map(([id, skill]) => ({
        title: skill.\u540D\u79F0 || id,
        meta: `${skill.\u7B49\u7EA7} / ${skill.\u7C7B\u578B}`,
        desc: `\u719F\u7EC3\u5EA6\uFF1A${skill.\u719F\u7EC3\u5EA6 ?? 0}\u3000\u4F53\u529B\u6D88\u8017\uFF1A${skill.\u4F53\u529B\u6D88\u8017 ?? 0}${skill.\u6548\u679C ? `
${skill.\u6548\u679C}` : ""}`
      })),
      perks: Object.entries(player.value.\u4E13\u957F || {}).map(([id, perk]) => ({
        title: perk.\u540D\u79F0 || id,
        meta: perk.\u7B49\u7EA7 || "\u672A\u5B9A\u7EA7",
        desc: perk.\u6548\u679C || "\u65E0"
      })),
      consorts: \u540E\u5BAB\u9879\u5217\u8868.value,
      generals: \u6B66\u5C06\u9879\u5217\u8868.value
    }));
    const titles = {
      equip: "\u88C5\u5907\u680F",
      bag: "\u80CC\u5305",
      skills: "\u6B66\u6280\u680F",
      perks: "\u4E13\u957F\u680F",
      consorts: "\u540E\u5BAB\u5217\u8868",
      generals: "\u5DF2\u62DB\u52DF\u6B66\u5C06"
    };
    const empties = {
      equip: "\u6682\u65E0\u88C5\u5907",
      bag: "\u6682\u65E0\u7269\u54C1",
      skills: "\u6682\u65E0\u6B66\u6280",
      perks: "\u6682\u65E0\u4E13\u957F",
      consorts: "\u6682\u65E0\u540E\u5BAB\u6210\u5458",
      generals: "\u6682\u65E0\u5DF2\u62DB\u52DF\u6B66\u5C06"
    };
    const currentListKey = computed2(() => activeTab.value === "attrs" ? "equip" : activeTab.value);
    const currentTitle = computed2(() => titles[currentListKey.value]);
    const currentEmpty = computed2(() => empties[currentListKey.value] || "\u6682\u65E0\u5185\u5BB9");
    const currentList = computed2(() => lists.value[currentListKey.value] || []);
    const ratio = (current, max) => `${Math.max(0, Math.min(100, Math.round(current / Math.max(max || 100, 1) * 100)))}%`;
    const __returned__ = {
      props,
      player,
      tabs,
      activeTab,
      resourceItems,
      battleItems,
      \u540E\u5BAB\u9879\u5217\u8868,
      \u6B66\u5C06\u9879\u5217\u8868,
      lists,
      titles,
      empties,
      currentListKey,
      currentTitle,
      currentEmpty,
      currentList,
      ratio,
      RadarChart: RadarChart_default
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_113 = { class: "tk-subtabs" };
var _hoisted_27 = ["onClick"];
var _hoisted_34 = {
  key: 0,
  class: "tk-panel-page-grid cols-2"
};
var _hoisted_44 = { class: "tk-panel-card" };
var _hoisted_54 = { class: "tk-panel-bar-row" };
var _hoisted_64 = { class: "tk-panel-bar" };
var _hoisted_74 = { class: "tk-panel-bar-value" };
var _hoisted_84 = { class: "tk-panel-bar-row" };
var _hoisted_94 = { class: "tk-panel-bar" };
var _hoisted_103 = { class: "tk-panel-bar-value" };
var _hoisted_114 = { class: "tk-panel-inline-note" };
var _hoisted_123 = { class: "tk-panel-kv-grid" };
var _hoisted_133 = { class: "tk-panel-k" };
var _hoisted_143 = { class: "tk-panel-v" };
var _hoisted_153 = { class: "tk-panel-card" };
var _hoisted_163 = { class: "tk-panel-kv-grid compact" };
var _hoisted_173 = { class: "tk-panel-k" };
var _hoisted_183 = { class: "tk-panel-v" };
var _hoisted_192 = {
  key: 1,
  class: "tk-panel-card"
};
var _hoisted_202 = { class: "tk-panel-card-title" };
var _hoisted_212 = { class: "tk-panel-list" };
var _hoisted_222 = { class: "tk-panel-list-title" };
var _hoisted_232 = { class: "tk-panel-list-meta" };
var _hoisted_242 = {
  key: 0,
  class: "tk-panel-list-desc"
};
var _hoisted_252 = {
  key: 0,
  class: "tk-panel-empty"
};
function _sfc_render4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_113, [(openBlock(), createElementBlock(
    Fragment,
    null,
    renderList($setup.tabs, (tab) => {
      return createBaseVNode("button", {
        key: tab.key,
        type: "button",
        class: normalizeClass(["tk-subtab-label", { "is-active": $setup.activeTab === tab.key }]),
        onClick: ($event) => $setup.activeTab = tab.key
      }, toDisplayString(tab.label), 11, _hoisted_27);
    }),
    64
    /* STABLE_FRAGMENT */
  ))]), $setup.activeTab === "attrs" ? (openBlock(), createElementBlock("div", _hoisted_34, [createBaseVNode("section", _hoisted_44, [
    _cache[2] || (_cache[2] = createBaseVNode(
      "div",
      { class: "tk-panel-card-title" },
      "\u4E3B\u89D2\u9762\u677F",
      -1
      /* CACHED */
    )),
    createBaseVNode("div", _hoisted_54, [
      _cache[0] || (_cache[0] = createBaseVNode(
        "div",
        { class: "tk-panel-bar-label" },
        "\u751F\u547D",
        -1
        /* CACHED */
      )),
      createBaseVNode("div", _hoisted_64, [createBaseVNode(
        "span",
        {
          class: "tk-panel-bar-fill is-hp",
          style: normalizeStyle({ width: $setup.ratio($setup.player.\u5F53\u524D\u751F\u547D\u503C, $setup.player._\u751F\u547D\u503C\u4E0A\u9650) })
        },
        null,
        4
        /* STYLE */
      )]),
      createBaseVNode(
        "div",
        _hoisted_74,
        toDisplayString($setup.player.\u5F53\u524D\u751F\u547D\u503C) + " / " + toDisplayString($setup.player._\u751F\u547D\u503C\u4E0A\u9650 ?? 0),
        1
        /* TEXT */
      )
    ]),
    createBaseVNode("div", _hoisted_84, [
      _cache[1] || (_cache[1] = createBaseVNode(
        "div",
        { class: "tk-panel-bar-label" },
        "\u4F53\u529B",
        -1
        /* CACHED */
      )),
      createBaseVNode("div", _hoisted_94, [createBaseVNode(
        "span",
        {
          class: "tk-panel-bar-fill is-sp",
          style: normalizeStyle({ width: $setup.ratio($setup.player.\u5F53\u524D\u4F53\u529B\u503C, $setup.player._\u4F53\u529B\u503C\u4E0A\u9650) })
        },
        null,
        4
        /* STYLE */
      )]),
      createBaseVNode(
        "div",
        _hoisted_103,
        toDisplayString($setup.player.\u5F53\u524D\u4F53\u529B\u503C) + " / " + toDisplayString($setup.player._\u4F53\u529B\u503C\u4E0A\u9650 ?? 0),
        1
        /* TEXT */
      )
    ]),
    createBaseVNode(
      "div",
      _hoisted_114,
      "\u4F24\u52BF\uFF1A" + toDisplayString($setup.player._\u4F24\u52BF || "\u5B8C\u597D") + "\u3000\u51CF\u503C\uFF1A" + toDisplayString($setup.player._\u6218\u6597\u51CF\u503C ?? 0),
      1
      /* TEXT */
    ),
    createBaseVNode("div", _hoisted_123, [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.resourceItems, (item) => {
        return openBlock(), createElementBlock(
          "div",
          {
            key: item.label,
            class: normalizeClass(["tk-panel-kv", { "is-accent": item.accent }])
          },
          [createBaseVNode(
            "span",
            _hoisted_133,
            toDisplayString(item.label),
            1
            /* TEXT */
          ), createBaseVNode(
            "span",
            _hoisted_143,
            toDisplayString(item.value),
            1
            /* TEXT */
          )],
          2
          /* CLASS */
        );
      }),
      128
      /* KEYED_FRAGMENT */
    ))])
  ]), createBaseVNode("section", _hoisted_153, [
    _cache[3] || (_cache[3] = createBaseVNode(
      "div",
      { class: "tk-panel-card-title" },
      "\u516D\u7EF4\u4E0E\u6218\u6597",
      -1
      /* CACHED */
    )),
    createVNode($setup["RadarChart"], { stats: $setup.player.\u516D\u7EF4 }, null, 8, ["stats"]),
    createBaseVNode("div", _hoisted_163, [(openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.battleItems, (item) => {
        return openBlock(), createElementBlock("div", {
          key: item.label,
          class: "tk-panel-kv"
        }, [createBaseVNode(
          "span",
          _hoisted_173,
          toDisplayString(item.label),
          1
          /* TEXT */
        ), createBaseVNode(
          "span",
          _hoisted_183,
          toDisplayString(item.value),
          1
          /* TEXT */
        )]);
      }),
      128
      /* KEYED_FRAGMENT */
    ))])
  ])])) : (openBlock(), createElementBlock("section", _hoisted_192, [createBaseVNode(
    "div",
    _hoisted_202,
    toDisplayString($setup.currentTitle),
    1
    /* TEXT */
  ), createBaseVNode("div", _hoisted_212, [(openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList($setup.currentList, (item) => {
      return openBlock(), createElementBlock("div", {
        key: item.title + item.meta,
        class: "tk-panel-list-item"
      }, [
        createBaseVNode(
          "div",
          _hoisted_222,
          toDisplayString(item.title),
          1
          /* TEXT */
        ),
        createBaseVNode(
          "div",
          _hoisted_232,
          toDisplayString(item.meta),
          1
          /* TEXT */
        ),
        item.desc ? (openBlock(), createElementBlock(
          "div",
          _hoisted_242,
          toDisplayString(item.desc),
          1
          /* TEXT */
        )) : createCommentVNode("v-if", true)
      ]);
    }),
    128
    /* KEYED_FRAGMENT */
  )), $setup.currentList.length === 0 ? (openBlock(), createElementBlock(
    "div",
    _hoisted_252,
    toDisplayString($setup.currentEmpty),
    1
    /* TEXT */
  )) : createCommentVNode("v-if", true)])]))]);
}
var HeroPanel_default = /* @__PURE__ */ export_helper_default(_sfc_main4, [["render", _sfc_render4], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\HeroPanel.vue"]]);

// src/ui/components/status/NpcPanel.vue
var _sfc_main5 = /* @__PURE__ */ defineComponent({
  __name: "NpcPanel",
  props: { state: {
    type: Object,
    required: true
  } },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const entries = computed2(() => Object.entries(props.state.NPC || {}));
    const __returned__ = {
      props,
      entries
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_115 = { class: "tk-panel-card" };
var _hoisted_28 = { class: "tk-panel-detail-list" };
var _hoisted_35 = { class: "tk-panel-detail-body" };
var _hoisted_45 = { class: "tk-panel-kv-grid compact" };
var _hoisted_55 = { class: "tk-panel-kv" };
var _hoisted_65 = { class: "tk-panel-v" };
var _hoisted_75 = { class: "tk-panel-kv" };
var _hoisted_85 = { class: "tk-panel-v" };
var _hoisted_95 = { class: "tk-panel-kv" };
var _hoisted_104 = { class: "tk-panel-v" };
var _hoisted_116 = { class: "tk-panel-inline-note" };
var _hoisted_124 = {
  key: 0,
  class: "tk-panel-empty"
};
function _sfc_render5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_115, [_cache[3] || (_cache[3] = createBaseVNode(
    "div",
    { class: "tk-panel-card-title" },
    "\u5F53\u524D\u5730\u70B9 NPC",
    -1
    /* CACHED */
  )), createBaseVNode("div", _hoisted_28, [(openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList($setup.entries, ([id, npc]) => {
      return openBlock(), createElementBlock("details", {
        key: id,
        class: "tk-panel-detail"
      }, [createBaseVNode("summary", null, [createBaseVNode(
        "span",
        null,
        toDisplayString(npc.\u540D\u79F0 || id),
        1
        /* TEXT */
      ), createBaseVNode(
        "span",
        null,
        toDisplayString(npc.\u54C1\u8D28) + " / " + toDisplayString(npc.\u5B9A\u4F4D || "\u672A\u77E5"),
        1
        /* TEXT */
      )]), createBaseVNode("div", _hoisted_35, [createBaseVNode("div", _hoisted_45, [
        createBaseVNode("div", _hoisted_55, [_cache[0] || (_cache[0] = createBaseVNode(
          "span",
          { class: "tk-panel-k" },
          "\u9635\u8425",
          -1
          /* CACHED */
        )), createBaseVNode(
          "span",
          _hoisted_65,
          toDisplayString(npc.\u9635\u8425 || "\u65E0"),
          1
          /* TEXT */
        )]),
        createBaseVNode("div", _hoisted_75, [_cache[1] || (_cache[1] = createBaseVNode(
          "span",
          { class: "tk-panel-k" },
          "\u5B9A\u4F4D",
          -1
          /* CACHED */
        )), createBaseVNode(
          "span",
          _hoisted_85,
          toDisplayString(npc.\u5B9A\u4F4D || "\u65E0"),
          1
          /* TEXT */
        )]),
        createBaseVNode("div", _hoisted_95, [_cache[2] || (_cache[2] = createBaseVNode(
          "span",
          { class: "tk-panel-k" },
          "\u5173\u7CFB",
          -1
          /* CACHED */
        )), createBaseVNode(
          "span",
          _hoisted_104,
          toDisplayString(npc._\u5FE0\u8BDA\u7B49\u7EA7 || npc._\u597D\u611F\u7B49\u7EA7 || npc._\u4EA4\u60C5\u7B49\u7EA7 || npc.\u597D\u611F),
          1
          /* TEXT */
        )])
      ]), createBaseVNode(
        "div",
        _hoisted_116,
        toDisplayString(npc.\u7B80\u8FF0 || "\u6682\u65E0\u63CF\u8FF0"),
        1
        /* TEXT */
      )])]);
    }),
    128
    /* KEYED_FRAGMENT */
  )), $setup.entries.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_124, "\u5F53\u524D\u5730\u70B9\u6682\u65E0\u5173\u952E NPC")) : createCommentVNode("v-if", true)])]);
}
var NpcPanel_default = /* @__PURE__ */ export_helper_default(_sfc_main5, [["render", _sfc_render5], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\NpcPanel.vue"]]);

// src/ui/components/status/QuestPanel.vue
var _sfc_main6 = /* @__PURE__ */ defineComponent({
  __name: "QuestPanel",
  props: { state: {
    type: Object,
    required: true
  } },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const tasks = computed2(() => Object.entries(props.state.\u4EFB\u52A1 || {}));
    const typeTabs = computed2(() => [...new Set(tasks.value.map(([, task]) => task.\u7C7B\u578B))]);
    const activeTab = ref("");
    watch2(typeTabs, (value) => {
      activeTab.value = value[0] || "";
    }, { immediate: true });
    const currentTasks = computed2(() => activeTab.value ? tasks.value.filter(([, task]) => task.\u7C7B\u578B === activeTab.value) : tasks.value);
    const __returned__ = {
      props,
      tasks,
      typeTabs,
      activeTab,
      currentTasks
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_117 = {
  key: 0,
  class: "tk-subtabs"
};
var _hoisted_29 = ["onClick"];
var _hoisted_36 = { class: "tk-panel-card" };
var _hoisted_46 = { class: "tk-panel-card-title" };
var _hoisted_56 = {
  key: 0,
  class: "tk-panel-detail-list"
};
var _hoisted_66 = { class: "tk-panel-detail-body" };
var _hoisted_76 = { class: "tk-panel-inline-note" };
var _hoisted_86 = { class: "tk-panel-list" };
var _hoisted_96 = { class: "tk-panel-list-title" };
var _hoisted_105 = { class: "tk-panel-list-meta" };
var _hoisted_118 = { class: "tk-panel-list-desc" };
var _hoisted_125 = {
  key: 0,
  class: "tk-panel-empty"
};
var _hoisted_134 = {
  key: 1,
  class: "tk-panel-empty"
};
function _sfc_render6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [$setup.typeTabs.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_117, [(openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList($setup.typeTabs, (tab) => {
      return openBlock(), createElementBlock("button", {
        key: tab,
        type: "button",
        class: normalizeClass(["tk-subtab-label", { "is-active": $setup.activeTab === tab }]),
        onClick: ($event) => $setup.activeTab = tab
      }, toDisplayString(tab), 11, _hoisted_29);
    }),
    128
    /* KEYED_FRAGMENT */
  ))])) : createCommentVNode("v-if", true), createBaseVNode("section", _hoisted_36, [createBaseVNode(
    "div",
    _hoisted_46,
    toDisplayString($setup.activeTab ? `${$setup.activeTab}\u4EFB\u52A1` : "\u4EFB\u52A1\u5217\u8868"),
    1
    /* TEXT */
  ), $setup.currentTasks.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_56, [(openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList($setup.currentTasks, ([id, task]) => {
      return openBlock(), createElementBlock("details", {
        key: id,
        class: "tk-panel-detail"
      }, [createBaseVNode("summary", null, [createBaseVNode(
        "span",
        null,
        toDisplayString(task.\u540D\u79F0 || id),
        1
        /* TEXT */
      ), createBaseVNode(
        "span",
        null,
        toDisplayString(task.\u7C7B\u578B) + " / " + toDisplayString(task.\u72B6\u6001),
        1
        /* TEXT */
      )]), createBaseVNode("div", _hoisted_66, [createBaseVNode(
        "div",
        _hoisted_76,
        "\u65F6\u9650\uFF1A" + toDisplayString(task.\u65F6\u9650 || "\u65E0\u65F6\u9650"),
        1
        /* TEXT */
      ), createBaseVNode("div", _hoisted_86, [(openBlock(true), createElementBlock(
        Fragment,
        null,
        renderList(Object.entries(task.\u76EE\u6807 || {}), ([targetId, target]) => {
          return openBlock(), createElementBlock("div", {
            key: targetId,
            class: "tk-panel-list-item"
          }, [
            createBaseVNode(
              "div",
              _hoisted_96,
              toDisplayString(target.\u63CF\u8FF0 || targetId),
              1
              /* TEXT */
            ),
            createBaseVNode(
              "div",
              _hoisted_105,
              toDisplayString(target.\u7C7B\u578B) + " / " + toDisplayString(target.\u72B6\u6001),
              1
              /* TEXT */
            ),
            createBaseVNode(
              "div",
              _hoisted_118,
              "\u79EF\u5206\uFF1A" + toDisplayString(target.\u79EF\u5206 ?? 0) + "\u3000\u5176\u4ED6\u5956\u52B1\uFF1A" + toDisplayString(target.\u5176\u4ED6\u5956\u52B1 || "\u65E0"),
              1
              /* TEXT */
            )
          ]);
        }),
        128
        /* KEYED_FRAGMENT */
      )), Object.keys(task.\u76EE\u6807 || {}).length === 0 ? (openBlock(), createElementBlock("div", _hoisted_125, "\u6682\u65E0\u4EFB\u52A1\u76EE\u6807")) : createCommentVNode("v-if", true)])])]);
    }),
    128
    /* KEYED_FRAGMENT */
  ))])) : (openBlock(), createElementBlock("div", _hoisted_134, "\u5F53\u524D\u6CA1\u6709\u6D3B\u8DC3\u4EFB\u52A1"))])]);
}
var QuestPanel_default = /* @__PURE__ */ export_helper_default(_sfc_main6, [["render", _sfc_render6], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\QuestPanel.vue"]]);

// src/ui/components/status/ShopPanel.vue
var _sfc_main7 = /* @__PURE__ */ defineComponent({
  __name: "ShopPanel",
  props: { state: {
    type: Object,
    required: true
  } },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const items = computed2(() => Object.entries(props.state.\u5546\u57CE || {}));
    const typeTabs = computed2(() => [...new Set(items.value.map(([, item]) => item.\u5206\u7C7B))]);
    const activeTab = ref("");
    watch2(typeTabs, (value) => {
      activeTab.value = value[0] || "";
    }, { immediate: true });
    const currentItems = computed2(() => activeTab.value ? items.value.filter(([, item]) => item.\u5206\u7C7B === activeTab.value) : items.value);
    const __returned__ = {
      props,
      items,
      typeTabs,
      activeTab,
      currentItems
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_119 = {
  key: 0,
  class: "tk-subtabs"
};
var _hoisted_210 = ["onClick"];
var _hoisted_37 = { class: "tk-panel-card" };
var _hoisted_47 = { class: "tk-panel-card-title" };
var _hoisted_57 = { class: "tk-panel-list" };
var _hoisted_67 = { class: "tk-panel-list-title" };
var _hoisted_77 = { class: "tk-panel-list-meta" };
var _hoisted_87 = { class: "tk-panel-list-desc" };
var _hoisted_97 = {
  key: 0,
  class: "tk-panel-empty"
};
function _sfc_render7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [$setup.typeTabs.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_119, [(openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList($setup.typeTabs, (tab) => {
      return openBlock(), createElementBlock("button", {
        key: tab,
        type: "button",
        class: normalizeClass(["tk-subtab-label", { "is-active": $setup.activeTab === tab }]),
        onClick: ($event) => $setup.activeTab = tab
      }, toDisplayString(tab), 11, _hoisted_210);
    }),
    128
    /* KEYED_FRAGMENT */
  ))])) : createCommentVNode("v-if", true), createBaseVNode("section", _hoisted_37, [createBaseVNode(
    "div",
    _hoisted_47,
    toDisplayString($setup.activeTab || "\u5546\u57CE"),
    1
    /* TEXT */
  ), createBaseVNode("div", _hoisted_57, [(openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList($setup.currentItems, ([id, item]) => {
      return openBlock(), createElementBlock("div", {
        key: id,
        class: "tk-panel-list-item"
      }, [
        createBaseVNode(
          "div",
          _hoisted_67,
          toDisplayString(item.\u540D\u79F0 || id),
          1
          /* TEXT */
        ),
        createBaseVNode(
          "div",
          _hoisted_77,
          toDisplayString(item.\u5206\u7C7B) + " / " + toDisplayString(item.\u4EF7\u683C) + " \u79EF\u5206",
          1
          /* TEXT */
        ),
        createBaseVNode(
          "div",
          _hoisted_87,
          toDisplayString(item.\u63CF\u8FF0 || ""),
          1
          /* TEXT */
        )
      ]);
    }),
    128
    /* KEYED_FRAGMENT */
  )), $setup.currentItems.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_97, "\u5F53\u524D\u6CA1\u6709\u53EF\u89C1\u5546\u54C1")) : createCommentVNode("v-if", true)])])]);
}
var ShopPanel_default = /* @__PURE__ */ export_helper_default(_sfc_main7, [["render", _sfc_render7], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\ShopPanel.vue"]]);

// src/ui/components/StatusBarPanel.vue
var _sfc_main8 = /* @__PURE__ */ defineComponent({
  __name: "StatusBarPanel",
  setup(__props, { expose: __expose }) {
    __expose();
    const state = computed2(() => unifiedPanelState.systemPanel.state);
    const tabs = [
      {
        key: "hero",
        label: "\u4E3B\u89D2"
      },
      {
        key: "npc",
        label: "\u5F53\u524D\u5730\u70B9NPC"
      },
      {
        key: "quest",
        label: "\u4EFB\u52A1"
      },
      {
        key: "shop",
        label: "\u5546\u57CE"
      },
      {
        key: "army",
        label: "\u519B\u961F"
      },
      {
        key: "faction",
        label: "\u52BF\u529B"
      }
    ];
    const activeTab = ref("hero");
    const header = computed2(() => {
      if (!state.value) {
        return "";
      }
      return `${state.value.\u4E16\u754C.\u5F53\u524D\u65F6\u95F4 || "\u672A\u77E5\u65F6\u523B"} \xB7 ${state.value.\u4E16\u754C.\u5F53\u524D\u5730\u70B9 || "\u672A\u77E5\u5730\u70B9"} \xB7 ${state.value.\u4E16\u754C.\u5929\u6C14 || "\u672A\u77E5\u5929\u6C14"} \xB7 ${state.value.\u4E16\u754C.\u5F53\u524D\u5267\u672C || "\u672A\u77E5\u5267\u672C"}`;
    });
    watch2(state, (value) => {
      if (!value) {
        activeTab.value = "hero";
      }
    });
    const __returned__ = {
      state,
      tabs,
      activeTab,
      header,
      ArmyPanel: ArmyPanel_default,
      FactionPanel: FactionPanel_default,
      HeroPanel: HeroPanel_default,
      NpcPanel: NpcPanel_default,
      QuestPanel: QuestPanel_default,
      ShopPanel: ShopPanel_default
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_120 = { class: "tk-vue-card tk-vue-status tk-statusbar" };
var _hoisted_211 = {
  key: 0,
  class: "tk-panel-shell"
};
var _hoisted_38 = { class: "tk-panel-head" };
var _hoisted_48 = { class: "tk-panel-subtitle" };
var _hoisted_58 = { class: "tk-panel-tabs" };
var _hoisted_68 = ["onClick"];
var _hoisted_78 = { class: "tk-panel-pages" };
var _hoisted_88 = {
  key: 0,
  class: "tk-panel-page is-hero"
};
var _hoisted_98 = {
  key: 1,
  class: "tk-panel-page is-npc"
};
var _hoisted_106 = {
  key: 2,
  class: "tk-panel-page is-quest"
};
var _hoisted_1110 = {
  key: 3,
  class: "tk-panel-page is-shop"
};
var _hoisted_126 = {
  key: 4,
  class: "tk-panel-page is-army"
};
var _hoisted_135 = {
  key: 5,
  class: "tk-panel-page is-faction"
};
var _hoisted_144 = {
  key: 1,
  class: "tk-vue-empty"
};
function _sfc_render8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_120, [$setup.state ? (openBlock(), createElementBlock("div", _hoisted_211, [
    createBaseVNode("div", _hoisted_38, [_cache[0] || (_cache[0] = createBaseVNode(
      "div",
      { class: "tk-panel-title" },
      "\u4E09\u56FD\u9738\u4E3B \xB7 \u7CFB\u7EDF\u9762\u677F",
      -1
      /* CACHED */
    )), createBaseVNode("div", _hoisted_48, [createBaseVNode(
      "span",
      null,
      toDisplayString($setup.header),
      1
      /* TEXT */
    )])]),
    createBaseVNode("div", _hoisted_58, [(openBlock(), createElementBlock(
      Fragment,
      null,
      renderList($setup.tabs, (tab) => {
        return createBaseVNode("button", {
          key: tab.key,
          type: "button",
          class: normalizeClass(["tk-panel-tab-label", { "is-active": $setup.activeTab === tab.key }]),
          onClick: ($event) => $setup.activeTab = tab.key
        }, toDisplayString(tab.label), 11, _hoisted_68);
      }),
      64
      /* STABLE_FRAGMENT */
    ))]),
    createBaseVNode("div", _hoisted_78, [$setup.activeTab === "hero" ? (openBlock(), createElementBlock("div", _hoisted_88, [createVNode($setup["HeroPanel"], { state: $setup.state }, null, 8, ["state"])])) : $setup.activeTab === "npc" ? (openBlock(), createElementBlock("div", _hoisted_98, [createVNode($setup["NpcPanel"], { state: $setup.state }, null, 8, ["state"])])) : $setup.activeTab === "quest" ? (openBlock(), createElementBlock("div", _hoisted_106, [createVNode($setup["QuestPanel"], { state: $setup.state }, null, 8, ["state"])])) : $setup.activeTab === "shop" ? (openBlock(), createElementBlock("div", _hoisted_1110, [createVNode($setup["ShopPanel"], { state: $setup.state }, null, 8, ["state"])])) : $setup.activeTab === "army" ? (openBlock(), createElementBlock("div", _hoisted_126, [createVNode($setup["ArmyPanel"], { state: $setup.state }, null, 8, ["state"])])) : (openBlock(), createElementBlock("div", _hoisted_135, [createVNode($setup["FactionPanel"], { state: $setup.state }, null, 8, ["state"])]))])
  ])) : (openBlock(), createElementBlock("div", _hoisted_144, "\u5F53\u524D\u6CA1\u6709\u72B6\u6001\u6570\u636E"))]);
}
var StatusBarPanel_default = /* @__PURE__ */ export_helper_default(_sfc_main8, [["render", _sfc_render8], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\StatusBarPanel.vue"]]);

// src/ui/views/UnifiedPanel.vue
var _sfc_main9 = /* @__PURE__ */ defineComponent({
  __name: "UnifiedPanel",
  setup(__props, { expose: __expose }) {
    __expose();
    const panelRef = ref(null);
    const visible = computed2(() => unifiedPanelState.systemPanel.visible);
    const measuredSize = ref({
      width: 960,
      height: 640
    });
    const worldSummary = computed2(() => {
      const state = unifiedPanelState.systemPanel.state;
      if (!state) {
        return "";
      }
      return [
        state.\u4E16\u754C.\u5F53\u524D\u65F6\u95F4 || "\u672A\u77E5\u65F6\u523B",
        state.\u4E16\u754C.\u5F53\u524D\u5730\u70B9 || "\u672A\u77E5\u5730\u70B9",
        state.\u4E16\u754C.\u5929\u6C14 || "\u672A\u77E5\u5929\u6C14",
        state.\u4E16\u754C.\u5F53\u524D\u5267\u672C || "\u672A\u77E5\u5267\u672C"
      ].join(" \xB7 ");
    });
    const panelStyle = computed2(() => {
      const position = unifiedPanelState.systemPanel.position;
      if (position.mode === "default") {
        const hostDocument = typeof document !== "undefined" ? getHostDocument() : null;
        const win = hostDocument?.defaultView ?? (typeof window !== "undefined" ? window : null);
        const centered = win ? computeCenteredPosition(measuredSize.value.width, measuredSize.value.height, win.innerWidth, win.innerHeight) : {
          left: 24,
          top: 24
        };
        return {
          position: "fixed",
          left: `${centered.left}px`,
          top: `${centered.top}px`,
          width: "min(1080px,calc(100vw - 24px))"
        };
      }
      return {
        position: "fixed",
        left: `${position.left}px`,
        top: `${position.top}px`,
        width: "min(1080px,calc(100vw - 24px))"
      };
    });
    function \u66F4\u65B0\u9ED8\u8BA4\u4F4D\u7F6E() {
      if (unifiedPanelState.systemPanel.position.mode !== "default" || !visible.value) {
        return;
      }
      nextTick(() => {
        const panel = panelRef.value;
        if (!panel) {
          return;
        }
        const rect = panel.getBoundingClientRect();
        measuredSize.value = {
          width: rect.width,
          height: rect.height
        };
      });
    }
    const handleDragStart = (event) => {
      const target = event.currentTarget;
      const panel = target?.closest(".tk-vue-panel-shell");
      if (!panel) {
        return;
      }
      const hostDocument = getHostDocument();
      const win = hostDocument.defaultView ?? window;
      if (unifiedPanelState.systemPanel.position.mode === "default") {
        const rect = panel.getBoundingClientRect();
        setSystemPanelPosition(rect.left, rect.top);
      }
      attachDragHandlers({
        event,
        panel,
        win,
        onMovePosition: (position) => setSystemPanelPosition(position.left, position.top)
      });
    };
    const handleResetPosition = () => {
      resetSystemPanelPosition();
      \u66F4\u65B0\u9ED8\u8BA4\u4F4D\u7F6E();
    };
    watch2([visible, () => unifiedPanelState.systemPanel.position.mode], () => {
      \u66F4\u65B0\u9ED8\u8BA4\u4F4D\u7F6E();
    }, { immediate: true });
    const __returned__ = {
      panelRef,
      visible,
      measuredSize,
      worldSummary,
      panelStyle,
      \u66F4\u65B0\u9ED8\u8BA4\u4F4D\u7F6E,
      handleDragStart,
      handleResetPosition,
      StatusBarPanel: StatusBarPanel_default
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_121 = { class: "tk-vue-panel-subtitle" };
var _hoisted_213 = { class: "tk-vue-panel-content is-system-panel" };
function _sfc_render9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      ref: "panelRef",
      class: normalizeClass(["tk-vue-panel-shell", $setup.visible ? "is-visible" : "is-hidden"]),
      style: normalizeStyle($setup.panelStyle)
    },
    [createBaseVNode(
      "div",
      {
        class: "tk-vue-panel-head tk-vue-drag-handle",
        onPointerdown: $setup.handleDragStart
      },
      [createBaseVNode("div", null, [_cache[0] || (_cache[0] = createBaseVNode(
        "div",
        { class: "tk-vue-panel-title" },
        "\u7CFB\u7EDF\u754C\u9762",
        -1
        /* CACHED */
      )), createBaseVNode("div", _hoisted_121, [$setup.worldSummary ? (openBlock(), createElementBlock(
        Fragment,
        { key: 0 },
        [createTextVNode(
          toDisplayString($setup.worldSummary),
          1
          /* TEXT */
        )],
        64
        /* STABLE_FRAGMENT */
      )) : (openBlock(), createElementBlock(
        Fragment,
        { key: 1 },
        [createTextVNode("\u5F53\u524D\u6CA1\u6709\u53EF\u663E\u793A\u7684\u7CFB\u7EDF\u6570\u636E")],
        64
        /* STABLE_FRAGMENT */
      ))])]), createBaseVNode("button", {
        type: "button",
        class: "tk-vue-head-btn",
        onClick: withModifiers($setup.handleResetPosition, ["stop"])
      }, "\u91CD\u7F6E\u4F4D\u7F6E")],
      32
      /* NEED_HYDRATION */
    ), createBaseVNode("div", _hoisted_213, [createVNode($setup["StatusBarPanel"])])],
    6
    /* CLASS, STYLE */
  );
}
var UnifiedPanel_default = /* @__PURE__ */ export_helper_default(_sfc_main9, [["render", _sfc_render9], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\views\\UnifiedPanel.vue"]]);

// src/ui/components/PlayerOptionsPanel.vue
var _sfc_main10 = /* @__PURE__ */ defineComponent({
  __name: "PlayerOptionsPanel",
  setup(__props, { expose: __expose }) {
    __expose();
    const options = computed2(() => unifiedPanelState.playerOptionsPanel.options);
    const handleOptionClick = (text) => {
      if (unifiedPanelState.playerOptionsPanel.latestMessageId == null) {
        return;
      }
      void handlePlayerOptionClick(unifiedPanelState.playerOptionsPanel.latestMessageId, text);
    };
    const __returned__ = {
      options,
      handleOptionClick
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_127 = { class: "tk-vue-card tk-vue-options" };
var _hoisted_214 = {
  key: 0,
  class: "tk-vue-options-list"
};
var _hoisted_39 = ["onClick"];
var _hoisted_49 = {
  key: 1,
  class: "tk-vue-empty"
};
function _sfc_render10(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("section", _hoisted_127, [_cache[0] || (_cache[0] = createBaseVNode(
    "div",
    { class: "tk-vue-card-title" },
    "\u53EF\u9009\u884C\u52A8",
    -1
    /* CACHED */
  )), $setup.options.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_214, [(openBlock(true), createElementBlock(
    Fragment,
    null,
    renderList($setup.options, (option, index) => {
      return openBlock(), createElementBlock("button", {
        key: `${option.text}-${index}`,
        type: "button",
        class: "tk-vue-option-btn",
        onClick: ($event) => $setup.handleOptionClick(option.text)
      }, toDisplayString(option.text), 9, _hoisted_39);
    }),
    128
    /* KEYED_FRAGMENT */
  ))])) : (openBlock(), createElementBlock("div", _hoisted_49, "\u5F53\u524D\u6CA1\u6709\u53EF\u9009\u884C\u52A8"))]);
}
var PlayerOptionsPanel_default = /* @__PURE__ */ export_helper_default(_sfc_main10, [["render", _sfc_render10], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\PlayerOptionsPanel.vue"]]);

// src/ui/views/PlayerOptionsFloatingPanel.vue
var _sfc_main11 = /* @__PURE__ */ defineComponent({
  __name: "PlayerOptionsFloatingPanel",
  setup(__props, { expose: __expose }) {
    __expose();
    const panelRef = ref(null);
    const visible = computed2(() => unifiedPanelState.playerOptionsPanel.visible);
    const measuredSize = ref({
      width: 420,
      height: 220
    });
    const panelStyle = computed2(() => {
      const position = unifiedPanelState.playerOptionsPanel.position;
      if (position.mode === "default") {
        const hostDocument = typeof document !== "undefined" ? getHostDocument() : null;
        const win = hostDocument?.defaultView ?? (typeof window !== "undefined" ? window : null);
        const input = \u67E5\u627E\u8F93\u5165\u6846\u5143\u7D20();
        const resolved = win ? computeInputAbovePosition(input?.getBoundingClientRect() ?? null, measuredSize.value.width, measuredSize.value.height, win.innerWidth, win.innerHeight) : {
          left: 24,
          top: 24
        };
        return {
          position: "fixed",
          left: `${resolved.left}px`,
          top: `${resolved.top}px`,
          width: "min(420px,calc(100vw - 24px))"
        };
      }
      return {
        position: "fixed",
        left: `${position.left}px`,
        top: `${position.top}px`,
        width: "min(420px,calc(100vw - 24px))"
      };
    });
    function \u67E5\u627E\u8F93\u5165\u6846\u5143\u7D20() {
      const hostDocument = getHostDocument();
      const selectors = [
        "#send_textarea",
        "#send_textarea textarea",
        'textarea[name="send_textarea"]',
        'textarea[id="send_textarea"]',
        '[contenteditable="true"]',
        '[contenteditable="plaintext-only"]',
        ".ProseMirror",
        "form textarea",
        "textarea",
        'input[type="text"]'
      ];
      for (const selector of selectors) {
        const element = hostDocument.querySelector(selector);
        if (element instanceof HTMLElement) {
          return element;
        }
      }
      return null;
    }
    function \u66F4\u65B0\u9ED8\u8BA4\u4F4D\u7F6E() {
      if (unifiedPanelState.playerOptionsPanel.position.mode !== "default" || !visible.value) {
        return;
      }
      nextTick(() => {
        const panel = panelRef.value;
        if (!panel) {
          return;
        }
        const rect = panel.getBoundingClientRect();
        measuredSize.value = {
          width: rect.width,
          height: rect.height
        };
      });
    }
    const handleDragStart = (event) => {
      const target = event.currentTarget;
      const panel = target?.closest(".tk-vue-floating-options");
      if (!panel) {
        return;
      }
      const hostDocument = getHostDocument();
      const win = hostDocument.defaultView ?? window;
      if (unifiedPanelState.playerOptionsPanel.position.mode === "default") {
        const rect = panel.getBoundingClientRect();
        setPlayerOptionsPanelPosition(rect.left, rect.top);
      }
      attachDragHandlers({
        event,
        panel,
        win,
        onMovePosition: (position) => setPlayerOptionsPanelPosition(position.left, position.top)
      });
    };
    const handleResetPosition = () => {
      resetPlayerOptionsPanelPosition();
      \u66F4\u65B0\u9ED8\u8BA4\u4F4D\u7F6E();
    };
    watch2([
      visible,
      () => unifiedPanelState.playerOptionsPanel.options.length,
      () => unifiedPanelState.playerOptionsPanel.position.mode
    ], () => {
      \u66F4\u65B0\u9ED8\u8BA4\u4F4D\u7F6E();
    }, { immediate: true });
    const __returned__ = {
      panelRef,
      visible,
      measuredSize,
      panelStyle,
      \u67E5\u627E\u8F93\u5165\u6846\u5143\u7D20,
      \u66F4\u65B0\u9ED8\u8BA4\u4F4D\u7F6E,
      handleDragStart,
      handleResetPosition,
      PlayerOptionsPanel: PlayerOptionsPanel_default
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
function _sfc_render11(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "div",
    {
      ref: "panelRef",
      class: normalizeClass(["tk-vue-floating-options", $setup.visible ? "is-visible" : "is-hidden"]),
      style: normalizeStyle($setup.panelStyle)
    },
    [createBaseVNode(
      "div",
      {
        class: "tk-vue-floating-head tk-vue-drag-handle",
        onPointerdown: $setup.handleDragStart
      },
      [_cache[0] || (_cache[0] = createBaseVNode(
        "div",
        null,
        [createBaseVNode("div", { class: "tk-vue-panel-title" }, "\u53EF\u9009\u884C\u52A8"), createBaseVNode("div", { class: "tk-vue-panel-subtitle" }, "\u5F53\u524D\u6700\u65B0 AI \u56DE\u590D\u53EF\u9009\u9879")],
        -1
        /* CACHED */
      )), createBaseVNode("button", {
        type: "button",
        class: "tk-vue-head-btn",
        onClick: withModifiers($setup.handleResetPosition, ["stop"])
      }, "\u91CD\u7F6E\u4F4D\u7F6E")],
      32
      /* NEED_HYDRATION */
    ), createVNode($setup["PlayerOptionsPanel"])],
    6
    /* CLASS, STYLE */
  );
}
var PlayerOptionsFloatingPanel_default = /* @__PURE__ */ export_helper_default(_sfc_main11, [["render", _sfc_render11], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\views\\PlayerOptionsFloatingPanel.vue"]]);

// src/ui/SystemUiRoot.vue
var _sfc_main12 = /* @__PURE__ */ defineComponent({
  __name: "SystemUiRoot",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {
      UnifiedPanel: UnifiedPanel_default,
      PlayerOptionsFloatingPanel: PlayerOptionsFloatingPanel_default
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var _hoisted_128 = { class: "tk-vue-root-shell" };
function _sfc_render12(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_128, [createVNode($setup["UnifiedPanel"]), createVNode($setup["PlayerOptionsFloatingPanel"])]);
}
var SystemUiRoot_default = /* @__PURE__ */ export_helper_default(_sfc_main12, [["render", _sfc_render12], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\SystemUiRoot.vue"]]);

// src/ui/app.ts
var ROOT_ID = "tk-vue-root";
var STYLE_ID = "tk-vue-root-style";
var STYLE_TEXT = `#tk-vue-root{position:fixed;inset:0;z-index:2147483200;font-family:"Microsoft YaHei",serif;pointer-events:none}#tk-vue-root *{box-sizing:border-box}#tk-vue-root .tk-vue-panel-shell{position:fixed;width:min(1080px,calc(100vw - 24px));border:1px solid rgba(196,154,92,.36);border-radius:18px;background:linear-gradient(180deg,rgba(41,25,17,.96),rgba(12,10,10,.98));box-shadow:0 16px 36px rgba(0,0,0,.35);overflow:hidden;color:#f3e3c3;pointer-events:auto}#tk-vue-root .tk-vue-floating-options{position:fixed;width:min(420px,calc(100vw - 24px));border:1px solid rgba(196,154,92,.36);border-radius:18px;background:linear-gradient(180deg,rgba(41,25,17,.96),rgba(12,10,10,.98));box-shadow:0 16px 36px rgba(0,0,0,.35);overflow:hidden;color:#f3e3c3;pointer-events:auto}#tk-vue-root .tk-vue-panel-shell.is-hidden,#tk-vue-root .tk-vue-floating-options.is-hidden{display:none}#tk-vue-root .tk-vue-panel-head,#tk-vue-root .tk-vue-floating-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:14px 16px;border-bottom:1px solid rgba(196,154,92,.22);background:rgba(255,255,255,.03);cursor:move}#tk-vue-root .tk-vue-panel-title{font-size:18px;font-weight:700;color:#f6d9a2;letter-spacing:1px}#tk-vue-root .tk-vue-panel-subtitle{margin-top:4px;font-size:12px;color:#cfb78d}#tk-vue-root .tk-vue-head-btn{appearance:none;border:1px solid rgba(220,181,119,.28);border-radius:999px;padding:6px 10px;background:rgba(255,255,255,.04);color:#dcc59c;cursor:pointer;font-size:12px}#tk-vue-root .tk-vue-panel-content{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;padding:14px}#tk-vue-root .tk-vue-panel-content.is-system-panel{grid-template-columns:minmax(0,1fr)}#tk-vue-root .tk-vue-card{border:1px solid rgba(196,154,92,.22);border-radius:14px;background:rgba(255,248,232,.03);padding:14px}#tk-vue-root .tk-vue-card-title{margin-bottom:10px;font-size:13px;font-weight:700;color:#f0c983;letter-spacing:1px}#tk-vue-root .tk-vue-options-list{display:flex;flex-direction:column;gap:10px}#tk-vue-root .tk-vue-option-btn{appearance:none;border:1px solid rgba(220,181,119,.34);border-radius:12px;padding:10px 12px;background:linear-gradient(180deg,rgba(123,77,38,.42),rgba(74,45,24,.36));color:#fff0d0;cursor:pointer;font-size:13px;line-height:1.45;text-align:left;transition:.18s box-shadow,.18s transform,.18s background,.18s border-color}#tk-vue-root .tk-vue-option-btn:hover{transform:translateY(-1px);background:linear-gradient(180deg,rgba(149,96,47,.56),rgba(88,53,28,.46));border-color:rgba(255,222,160,.68);box-shadow:0 8px 18px rgba(0,0,0,.18)}#tk-vue-root .tk-vue-empty{padding:14px;color:#bda681;font-size:12px;text-align:center}#tk-vue-root .tk-statusbar{margin-top:0;border:1px solid rgba(196,154,92,.45);border-radius:14px;overflow:hidden;background:linear-gradient(180deg,rgba(37,24,17,.96),rgba(15,12,10,.96));box-shadow:0 12px 32px rgba(0,0,0,.35);color:#f3e3c3;font-family:"Microsoft YaHei",serif}#tk-vue-root .tk-statusbar *{box-sizing:border-box}#tk-vue-root .tk-statusbar .tk-panel-shell{position:relative}#tk-vue-root .tk-statusbar .tk-panel-head{padding:14px 16px;border-bottom:1px solid rgba(196,154,92,.28);background:linear-gradient(180deg,rgba(122,63,30,.35),rgba(54,30,18,.15))}#tk-vue-root .tk-statusbar .tk-panel-title{font-size:18px;font-weight:700;letter-spacing:2px;color:#f6d9a2}#tk-vue-root .tk-statusbar .tk-panel-subtitle{margin-top:6px;font-size:12px;color:#d8bf93;display:flex;flex-wrap:wrap;gap:10px}#tk-vue-root .tk-statusbar .tk-panel-tabs{display:flex;flex-wrap:wrap;gap:8px;padding:12px 14px;border-bottom:1px solid rgba(196,154,92,.22);background:rgba(255,255,255,.02)}#tk-vue-root .tk-statusbar .tk-panel-tab-label{padding:8px 14px;border:1px solid rgba(196,154,92,.28);border-radius:999px;background:rgba(255,255,255,.04);color:#dcc59c;cursor:pointer;transition:.2s;font-size:12px}#tk-vue-root .tk-statusbar .tk-panel-tab-label:hover,#tk-vue-root .tk-statusbar .tk-panel-tab-label.is-active{background:linear-gradient(180deg,#a76b2e,#7a4a1f);color:#fff5e6;border-color:rgba(255,216,158,.8);box-shadow:0 0 0 1px rgba(255,240,212,.12) inset}#tk-vue-root .tk-statusbar .tk-panel-pages{padding:14px}#tk-vue-root .tk-statusbar .tk-panel-page-grid{display:grid;gap:12px}#tk-vue-root .tk-statusbar .tk-panel-page-grid.cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}#tk-vue-root .tk-statusbar .tk-subtabs{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}#tk-vue-root .tk-statusbar .tk-subtab-label{padding:6px 12px;border:1px solid rgba(196,154,92,.22);border-radius:999px;background:rgba(255,255,255,.03);color:#d6bb91;cursor:pointer;font-size:12px;transition:.2s}#tk-vue-root .tk-statusbar .tk-subtab-label:hover,#tk-vue-root .tk-statusbar .tk-subtab-label.is-active{background:linear-gradient(180deg,#8d5a27,#653717);color:#fff5e6;border-color:rgba(255,216,158,.72)}#tk-vue-root .tk-statusbar .cols-span-2{grid-column:span 2}#tk-vue-root .tk-statusbar .tk-panel-card{padding:14px;border:1px solid rgba(196,154,92,.22);border-radius:12px;background:rgba(255,248,232,.03)}#tk-vue-root .tk-statusbar .tk-panel-card-title{margin-bottom:10px;font-size:13px;font-weight:700;color:#f0c983;letter-spacing:1px}#tk-vue-root .tk-statusbar .tk-panel-kv-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}#tk-vue-root .tk-statusbar .tk-panel-kv-grid.compact{grid-template-columns:repeat(3,minmax(0,1fr))}#tk-vue-root .tk-statusbar .tk-panel-kv{padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.05)}#tk-vue-root .tk-statusbar .tk-panel-kv.is-accent{background:rgba(167,107,46,.18);border-color:rgba(240,201,131,.26)}#tk-vue-root .tk-statusbar .tk-panel-k{display:block;font-size:11px;color:#cba977}#tk-vue-root .tk-statusbar .tk-panel-v{display:block;margin-top:4px;font-size:13px;color:#fff1d0}#tk-vue-root .tk-statusbar .tk-panel-inline-note{margin-top:10px;font-size:12px;color:#d6c4a4}#tk-vue-root .tk-statusbar .tk-panel-list,#tk-vue-root .tk-statusbar .tk-panel-detail-list{display:flex;flex-direction:column;gap:8px}#tk-vue-root .tk-statusbar .tk-panel-list-item{padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.05)}#tk-vue-root .tk-statusbar .tk-panel-list-title{font-size:13px;font-weight:700;color:#f6dfb5}#tk-vue-root .tk-statusbar .tk-panel-list-meta{margin-top:4px;font-size:11px;color:#d6bb91}#tk-vue-root .tk-statusbar .tk-panel-list-desc{margin-top:6px;font-size:12px;color:#f2eadc;opacity:.88;white-space:pre-line}#tk-vue-root .tk-statusbar .tk-panel-detail{border:1px solid rgba(255,255,255,.06);border-radius:10px;background:rgba(255,255,255,.03);overflow:hidden}#tk-vue-root .tk-statusbar .tk-panel-detail summary{display:flex;justify-content:space-between;gap:12px;cursor:pointer;list-style:none;padding:10px 12px;color:#f6dfb5;font-size:13px}#tk-vue-root .tk-statusbar .tk-panel-detail summary::-webkit-details-marker{display:none}#tk-vue-root .tk-statusbar .tk-panel-detail-body{padding:0 12px 12px}#tk-vue-root .tk-statusbar .tk-panel-empty{padding:18px 12px;text-align:center;color:#bda681;font-size:12px}#tk-vue-root .tk-statusbar .tk-radar-wrap{display:block;margin-bottom:12px}#tk-vue-root .tk-statusbar .tk-radar{width:220px;height:220px;display:block;margin:0 auto}#tk-vue-root .tk-statusbar .tk-radar-ring,#tk-vue-root .tk-statusbar .tk-radar-axis{fill:none;stroke:rgba(240,201,131,.18);stroke-width:1}#tk-vue-root .tk-statusbar .tk-radar-shape{fill:rgba(167,107,46,.28);stroke:#f0c983;stroke-width:2}#tk-vue-root .tk-statusbar .tk-radar-dot{fill:#f6dfb5}#tk-vue-root .tk-statusbar .tk-radar-label{fill:#d8bf93;font-size:11px}#tk-vue-root .tk-statusbar .tk-panel-bar-row{display:grid;grid-template-columns:56px 1fr auto;gap:8px;align-items:center;margin-bottom:8px}#tk-vue-root .tk-statusbar .tk-panel-bar-label,#tk-vue-root .tk-statusbar .tk-panel-bar-value{font-size:11px;color:#d8bf93}#tk-vue-root .tk-statusbar .tk-panel-bar{height:9px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}#tk-vue-root .tk-statusbar .tk-panel-bar-fill{display:block;height:100%}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-hp{background:linear-gradient(90deg,#7f1d1d,#dc2626)}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-sp{background:linear-gradient(90deg,#0f3d73,#3b82f6)}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-morale{background:linear-gradient(90deg,#7c5c12,#f59e0b)}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-fatigue{background:linear-gradient(90deg,#3f3f46,#a1a1aa)}@media (max-width:900px){#tk-vue-root .tk-vue-panel-content{grid-template-columns:1fr}}@media (max-width:720px){#tk-vue-root .tk-statusbar .tk-panel-page-grid.cols-2,#tk-vue-root .tk-statusbar .tk-panel-kv-grid,#tk-vue-root .tk-statusbar .tk-panel-kv-grid.compact{grid-template-columns:1fr}#tk-vue-root .tk-statusbar .cols-span-2{grid-column:span 1}#tk-vue-root .tk-statusbar .tk-radar{width:180px;height:180px}}`;
var app = null;
function ensureStyle(hostDocument) {
  let style = hostDocument.getElementById(STYLE_ID);
  if (!(style instanceof HTMLStyleElement)) {
    style = hostDocument.createElement("style");
    style.id = STYLE_ID;
    hostDocument.head.appendChild(style);
  }
  if (style.textContent !== STYLE_TEXT) {
    style.textContent = STYLE_TEXT;
  }
}
function ensureRoot() {
  let hostDocument;
  try {
    hostDocument = getHostDocument();
  } catch {
    return null;
  }
  ensureStyle(hostDocument);
  let root = hostDocument.getElementById(ROOT_ID);
  if (root instanceof HTMLElement) {
    return root;
  }
  root = hostDocument.createElement("div");
  root.id = ROOT_ID;
  hostDocument.body.appendChild(root);
  return root;
}
function mountUnifiedPanelApp() {
  if (app) {
    return true;
  }
  const root = ensureRoot();
  if (!root) {
    return false;
  }
  app = createApp(SystemUiRoot_default);
  app.mount(root);
  return true;
}
function unmountUnifiedPanelApp() {
  if (!app) {
    return;
  }
  app.unmount();
  app = null;
  try {
    const hostDocument = getHostDocument();
    hostDocument.getElementById(ROOT_ID)?.remove();
    hostDocument.getElementById(STYLE_ID)?.remove();
  } catch {
  }
}

// src/runtime.ts
var \u5DF2\u6CE8\u518C\u56DE\u590D\u94A9\u5B50 = null;
var \u5DF2\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50 = null;
var \u5DF2\u6CE8\u518C\u6309\u94AE\u94A9\u5B50 = null;
var \u5DF2\u6CE8\u518C\u65E5\u5FD7\u6309\u94AE\u94A9\u5B50 = null;
var \u5DF2\u6CE8\u518CVue\u9762\u677F\u6309\u94AE\u94A9\u5B50 = null;
var \u6700\u8FD1\u5904\u7406\u8BB0\u5F55 = { messageId: null, message: "" };
var Vue\u9762\u677F\u5DF2\u542F\u7528 = false;
function \u83B7\u53D6\u8FD0\u884C\u65F6\u63A5\u53E3() {
  const globalApi = globalThis;
  const windowApi = typeof window !== "undefined" ? window : void 0;
  return {
    eventOn: globalApi.eventOn ?? windowApi?.eventOn,
    eventRemoveListener: globalApi.eventRemoveListener ?? windowApi?.eventRemoveListener,
    getButtonEvent: globalApi.getButtonEvent ?? windowApi?.getButtonEvent,
    tavern_events: globalApi.tavern_events ?? windowApi?.tavern_events,
    getChatMessages: globalApi.getChatMessages ?? windowApi?.getChatMessages,
    executeSlashCommandsWithOptions: globalApi.executeSlashCommandsWithOptions ?? windowApi?.executeSlashCommandsWithOptions,
    triggerSlash: globalApi.triggerSlash ?? windowApi?.triggerSlash,
    TavernHelper: globalApi.TavernHelper ?? windowApi?.TavernHelper
  };
}
function \u83B7\u53D6\u6D88\u606F\u8BFB\u53D6\u51FD\u6570() {
  const runtime = \u83B7\u53D6\u8FD0\u884C\u65F6\u63A5\u53E3();
  return runtime.getChatMessages ?? runtime.TavernHelper?.getChatMessages;
}
function \u83B7\u53D6Slash\u6267\u884C\u5668() {
  const runtime = \u83B7\u53D6\u8FD0\u884C\u65F6\u63A5\u53E3();
  const triggerSlash = runtime.triggerSlash ?? runtime.TavernHelper?.triggerSlash;
  const executeSlashCommandsWithOptions = runtime.executeSlashCommandsWithOptions ?? runtime.TavernHelper?.executeSlashCommandsWithOptions;
  debugLog("runtime", "\u68C0\u67E5 slash \u6267\u884C\u5668", {
    hasDirectTriggerSlash: typeof runtime.triggerSlash === "function",
    hasTavernHelperTriggerSlash: typeof runtime.TavernHelper?.triggerSlash === "function",
    hasDirectExecutor: typeof runtime.executeSlashCommandsWithOptions === "function",
    hasTavernHelperExecutor: typeof runtime.TavernHelper?.executeSlashCommandsWithOptions === "function",
    preferred: typeof triggerSlash === "function" ? "triggerSlash" : typeof executeSlashCommandsWithOptions === "function" ? "executeSlashCommandsWithOptions" : "none"
  });
  return {
    triggerSlash,
    executeSlashCommandsWithOptions
  };
}
function \u83B7\u53D6Toastr\u63A5\u53E3() {
  const globalApi = globalThis;
  const windowApi = typeof window !== "undefined" ? window : void 0;
  return globalApi.toastr ?? windowApi?.toastr;
}
function \u63D0\u793A\u65E5\u5FD7\u5F00\u5173\u72B6\u6001(enabled) {
  const message = `\u5DF2${enabled ? "\u5F00\u542F" : "\u5173\u95ED"} log/info \u65E5\u5FD7\u6253\u5370`;
  const toastr = \u83B7\u53D6Toastr\u63A5\u53E3();
  if (typeof toastr?.success === "function") {
    toastr.success(message);
    return;
  }
  console.log("[ThreeKingdomsStateKit][debug]", message);
}
function \u63D0\u793A\u73A9\u5BB6\u9009\u9879\u6D88\u606F(message, tone = "success") {
  const toastr = \u83B7\u53D6Toastr\u63A5\u53E3();
  if (tone === "warning" && typeof toastr?.warning === "function") {
    toastr.warning(message);
    return;
  }
  if (tone === "success" && typeof toastr?.success === "function") {
    toastr.success(message);
    return;
  }
  console.log("[ThreeKingdomsStateKit][player-options]", message);
}
function \u8BFB\u53D6\u6D88\u606F2(messageId) {
  const getChatMessages = \u83B7\u53D6\u6D88\u606F\u8BFB\u53D6\u51FD\u6570();
  if (typeof getChatMessages !== "function") {
    debugLog("runtime", "\u672A\u627E\u5230 getChatMessages\uFF0C\u65E0\u6CD5\u8BFB\u53D6\u6307\u5B9A\u6D88\u606F", { messageId });
    return null;
  }
  const messages = getChatMessages(messageId, { include_swipes: false }) ?? [];
  const message = Array.isArray(messages) ? messages[0] ?? null : null;
  debugLog("runtime", "\u8BFB\u53D6\u6307\u5B9A\u6D88\u606F\u5B8C\u6210", {
    messageId,
    message: summarizeValue(message)
  });
  return message;
}
function \u8BFB\u53D6\u6700\u65B0assistant\u6D88\u606F() {
  const getChatMessages = \u83B7\u53D6\u6D88\u606F\u8BFB\u53D6\u51FD\u6570();
  if (typeof getChatMessages !== "function") {
    debugLog("runtime", "\u672A\u627E\u5230 getChatMessages\uFF0C\u65E0\u6CD5\u8BFB\u53D6\u6700\u65B0 assistant \u6D88\u606F");
    return null;
  }
  const messages = getChatMessages("0-{{lastMessageId}}", { include_swipes: false }) ?? [];
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index];
    if (message?.role === "assistant") {
      debugLog("runtime", "\u8BFB\u53D6\u6700\u65B0 assistant \u6D88\u606F\u5B8C\u6210", {
        messageId: message.message_id ?? null
      });
      return message;
    }
  }
  debugLog("runtime", "\u672A\u627E\u5230\u6700\u65B0 assistant \u6D88\u606F");
  return null;
}
function \u662F\u5426\u6700\u65B0assistant\u697C\u5C42(messageId) {
  const latest = \u8BFB\u53D6\u6700\u65B0assistant\u6D88\u606F();
  const isLatest = typeof latest?.message_id === "number" && latest.message_id === messageId;
  debugLog("runtime", "\u6821\u9A8C\u73A9\u5BB6\u9009\u9879\u697C\u5C42\u662F\u5426\u6700\u65B0", {
    messageId,
    latestAssistantMessageId: latest?.message_id ?? null,
    isLatest
  });
  return isLatest;
}
function \u683C\u5F0F\u5316\u73A9\u5BB6\u9009\u9879\u6587\u672C(text) {
  const normalized = String(text || "").trim().replace(/^（|）$/g, "");
  return normalized ? `\uFF08${normalized}\uFF09` : "";
}
function \u67E5\u627E\u8F93\u5165\u6846() {
  let hostDocument;
  try {
    hostDocument = getHostDocument();
  } catch {
    return null;
  }
  const selectors = [
    "#send_textarea",
    "#send_textarea textarea",
    'textarea[name="send_textarea"]',
    'textarea[id="send_textarea"]',
    'textarea[data-testid="send_textarea"]',
    '[contenteditable="true"]',
    '[contenteditable="plaintext-only"]',
    ".ProseMirror",
    "form textarea",
    "textarea",
    'input[type="text"]'
  ];
  for (const selector of selectors) {
    const element = hostDocument.querySelector(selector);
    if (element instanceof HTMLTextAreaElement || element instanceof HTMLInputElement) {
      return element;
    }
    if (element instanceof HTMLElement && element.isContentEditable) {
      return element;
    }
  }
  const active = hostDocument.activeElement;
  if (active instanceof HTMLTextAreaElement || active instanceof HTMLInputElement) {
    return active;
  }
  if (active instanceof HTMLElement && active.isContentEditable) {
    return active;
  }
  return null;
}
function \u8BBE\u7F6E\u539F\u751F\u8F93\u5165\u503C(input, text) {
  const prototype = input instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  const descriptor = Object.getOwnPropertyDescriptor(prototype, "value");
  if (descriptor?.set) {
    descriptor.set.call(input, text);
    return;
  }
  input.value = text;
}
function \u8BBE\u7F6E\u53EF\u7F16\u8F91\u533A\u57DF\u6587\u672C(input, text) {
  input.textContent = text;
  const selection = typeof window !== "undefined" ? window.getSelection?.() : null;
  let range = null;
  try {
    range = getHostDocument().createRange();
  } catch {
    range = null;
  }
  if (!selection || !range) {
    return;
  }
  range.selectNodeContents(input);
  range.collapse(false);
  selection.removeAllRanges();
  selection.addRange(range);
}
async function \u901A\u8FC7Slash\u586B\u5145\u8F93\u5165\u6846(text) {
  const command = `/setinput ${JSON.stringify(text)}`;
  if (await \u6267\u884CSlash(command)) {
    debugInfo("runtime", "\u5DF2\u901A\u8FC7 slash /setinput \u586B\u5145\u8F93\u5165\u6846", { text: summarizeValue(text) });
    return true;
  }
  return false;
}
function \u901A\u8FC7DOM\u586B\u5145\u8F93\u5165\u6846(text) {
  const input = \u67E5\u627E\u8F93\u5165\u6846();
  if (!input) {
    debugWarn("runtime", "\u672A\u627E\u5230\u53EF\u586B\u5145\u7684\u8F93\u5165\u6846");
    return false;
  }
  input.focus();
  if (input instanceof HTMLTextAreaElement || input instanceof HTMLInputElement) {
    \u8BBE\u7F6E\u539F\u751F\u8F93\u5165\u503C(input, text);
  } else if (input instanceof HTMLElement && input.isContentEditable) {
    \u8BBE\u7F6E\u53EF\u7F16\u8F91\u533A\u57DF\u6587\u672C(input, text);
  } else {
    debugWarn("runtime", "\u627E\u5230\u7684\u8F93\u5165\u76EE\u6807\u4E0D\u652F\u6301\u586B\u5145", { tagName: input.tagName ?? null });
    return false;
  }
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(new Event("change", { bubbles: true }));
  debugInfo("runtime", "\u5DF2\u901A\u8FC7 DOM \u586B\u5145\u7528\u6237\u8F93\u5165\u6846", {
    tagName: input.tagName,
    isContentEditable: input instanceof HTMLElement ? input.isContentEditable : false,
    text: summarizeValue(text)
  });
  return true;
}
async function \u586B\u5145\u8F93\u5165\u6846(text) {
  if (await \u901A\u8FC7Slash\u586B\u5145\u8F93\u5165\u6846(text)) {
    return true;
  }
  return \u901A\u8FC7DOM\u586B\u5145\u8F93\u5165\u6846(text);
}
function \u662F\u5426\u91CD\u590D\u6D88\u606F(message) {
  const messageId = typeof message.message_id === "number" ? message.message_id : null;
  const text = String(message.message || "");
  return \u6700\u8FD1\u5904\u7406\u8BB0\u5F55.messageId === messageId && \u6700\u8FD1\u5904\u7406\u8BB0\u5F55.message === text;
}
function \u8BB0\u5F55\u6700\u8FD1\u6D88\u606F(message) {
  \u6700\u8FD1\u5904\u7406\u8BB0\u5F55 = {
    messageId: typeof message.message_id === "number" ? message.message_id : null,
    message: String(message.message || "")
  };
}
async function \u6267\u884CSlash(command) {
  const { triggerSlash, executeSlashCommandsWithOptions } = \u83B7\u53D6Slash\u6267\u884C\u5668();
  if (typeof triggerSlash === "function") {
    try {
      await triggerSlash(command);
      debugLog("runtime", "\u901A\u8FC7 triggerSlash \u6267\u884C slash \u547D\u4EE4\u6210\u529F", { command });
      return true;
    } catch (error) {
      debugWarn("runtime", "\u901A\u8FC7 triggerSlash \u6267\u884C slash \u547D\u4EE4\u5F02\u5E38", { command, error });
      return false;
    }
  }
  if (typeof executeSlashCommandsWithOptions === "function") {
    try {
      const result = await executeSlashCommandsWithOptions(command, { handleExecutionErrors: true });
      if (result?.isError) {
        debugWarn("runtime", "\u901A\u8FC7 executeSlashCommandsWithOptions \u6267\u884C slash \u547D\u4EE4\u5931\u8D25", {
          command,
          errorMessage: result.errorMessage || null
        });
        return false;
      }
      debugLog("runtime", "\u901A\u8FC7 executeSlashCommandsWithOptions \u6267\u884C slash \u547D\u4EE4\u6210\u529F", { command });
      return true;
    } catch (error) {
      debugWarn("runtime", "\u901A\u8FC7 executeSlashCommandsWithOptions \u6267\u884C slash \u547D\u4EE4\u5F02\u5E38", { command, error });
      return false;
    }
  }
  debugWarn("runtime", "\u672A\u627E\u5230\u53EF\u7528\u7684 slash \u6267\u884C\u5668\uFF0C\u65E0\u6CD5\u6267\u884C\u547D\u4EE4", { command });
  return false;
}
function \u786E\u4FDDVue\u9762\u677F\u5DF2\u6302\u8F7D() {
  try {
    const mounted = mountUnifiedPanelApp();
    if (!mounted) {
      debugWarn("runtime", "Vue \u9762\u677F\u6302\u8F7D\u5931\u8D25\uFF0C\u7EE7\u7EED\u4F7F\u7528\u6B63\u6587\u72B6\u6001\u680F\u515C\u5E95");
      return false;
    }
    Vue\u9762\u677F\u5DF2\u542F\u7528 = true;
    return true;
  } catch (error) {
    debugWarn("runtime", "Vue \u9762\u677F\u6302\u8F7D\u5F02\u5E38\uFF0C\u7EE7\u7EED\u4F7F\u7528\u6B63\u6587\u72B6\u6001\u680F\u515C\u5E95", error);
    return false;
  }
}
function \u540C\u6B65Vue\u9762\u677F(messageId, state, options) {
  if (!\u786E\u4FDDVue\u9762\u677F\u5DF2\u6302\u8F7D()) {
    return false;
  }
  try {
    updateSystemPanelState({
      messageId,
      state
    });
    updatePlayerOptionsPanelState({
      messageId,
      options
    });
    debugLog("runtime", "\u5DF2\u540C\u6B65 Vue \u53CC\u60AC\u6D6E\u7A97\u72B6\u6001", {
      messageId,
      playerOptionsCount: options.length
    });
    return true;
  } catch (error) {
    debugWarn("runtime", "\u540C\u6B65 Vue \u9762\u677F\u72B6\u6001\u5931\u8D25\uFF0C\u7EE7\u7EED\u4F7F\u7528\u6B63\u6587\u72B6\u6001\u680F\u515C\u5E95", error);
    return false;
  }
}
async function syncPlayerOptionsQuickReplies(messageId, options) {
  void messageId;
  void options;
  debugLog("runtime", "\u5DF2\u505C\u7528 Quick Reply \u540C\u6B65\u903B\u8F91\uFF0C\u5F53\u524D\u7531 Vue \u72B6\u6001\u9762\u677F\u627F\u8F7D");
  return false;
}
async function clearPlayerOptionsQuickReplies() {
  debugLog("runtime", "\u5DF2\u505C\u7528 Quick Reply \u6E05\u7406\u903B\u8F91\uFF0C\u5F53\u524D\u7531 Vue \u72B6\u6001\u9762\u677F\u627F\u8F7D");
}
async function rehydratePlayerOptionsQuickRepliesFromLatestMessage() {
  if (!unifiedPanelState.systemPanel.state || unifiedPanelState.systemPanel.latestMessageId == null) {
    debugLog("runtime", "\u5F53\u524D\u6CA1\u6709\u53EF\u6062\u590D\u7684 Vue \u9762\u677F\u72B6\u6001");
    return false;
  }
  return \u540C\u6B65Vue\u9762\u677F(unifiedPanelState.systemPanel.latestMessageId, unifiedPanelState.systemPanel.state, unifiedPanelState.playerOptionsPanel.options);
}
function updatePlayerOptionsView(messageId, options) {
  if (!unifiedPanelState.systemPanel.state) {
    debugLog("runtime", "\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u72B6\u6001\uFF0C\u8DF3\u8FC7\u72EC\u7ACB\u66F4\u65B0 Vue \u9009\u9879\u89C6\u56FE", { messageId, playerOptionsCount: options.length });
    return false;
  }
  updatePlayerOptionsPanelState({ messageId, options });
  return true;
}
function clearPlayerOptionsView() {
  setPlayerOptionsPanelVisible(false);
  updatePlayerOptionsPanelState({ messageId: unifiedPanelState.playerOptionsPanel.latestMessageId ?? -1, options: [] });
  debugLog("runtime", "\u5DF2\u6E05\u7406\u73A9\u5BB6\u9009\u9879\u60AC\u6D6E\u7A97\u72B6\u6001");
}
async function handlePlayerOptionClick(messageId, optionText) {
  debugLog("runtime", "\u6536\u5230\u73A9\u5BB6\u9009\u9879\u70B9\u51FB\u8BF7\u6C42", {
    messageId,
    optionText
  });
  if (!Number.isFinite(messageId) || !optionText) {
    debugWarn("runtime", "\u73A9\u5BB6\u9009\u9879\u70B9\u51FB\u53C2\u6570\u65E0\u6548\uFF0C\u5DF2\u5FFD\u7565", { messageId, optionText });
    return false;
  }
  if (!\u662F\u5426\u6700\u65B0assistant\u697C\u5C42(messageId)) {
    \u63D0\u793A\u73A9\u5BB6\u9009\u9879\u6D88\u606F("\u4EC5\u6700\u65B0\u4E00\u6761 AI \u56DE\u590D\u7684\u9009\u9879\u53EF\u586B\u5165\u8F93\u5165\u680F", "warning");
    return false;
  }
  const formatted = \u683C\u5F0F\u5316\u73A9\u5BB6\u9009\u9879\u6587\u672C(optionText);
  if (!formatted) {
    debugWarn("runtime", "\u73A9\u5BB6\u9009\u9879\u6587\u672C\u4E3A\u7A7A\uFF0C\u5DF2\u5FFD\u7565", { messageId });
    return false;
  }
  if (!await \u586B\u5145\u8F93\u5165\u6846(formatted)) {
    \u63D0\u793A\u73A9\u5BB6\u9009\u9879\u6D88\u606F("\u672A\u627E\u5230\u8F93\u5165\u680F\uFF0C\u65E0\u6CD5\u586B\u5145\u9009\u9879", "warning");
    return false;
  }
  \u63D0\u793A\u73A9\u5BB6\u9009\u9879\u6D88\u606F("\u5DF2\u5C06\u9009\u9879\u586B\u5165\u8F93\u5165\u680F\uFF0C\u53EF\u4FEE\u6539\u540E\u624B\u52A8\u53D1\u9001");
  return true;
}
function \u5378\u8F7D\u4E8B\u4EF6\u7ED1\u5B9A(bindingState) {
  if (!bindingState) {
    return;
  }
  const runtime = \u83B7\u53D6\u8FD0\u884C\u65F6\u63A5\u53E3();
  const { eventName, listener, binding } = bindingState;
  binding?.removeListener?.();
  binding?.off?.();
  binding?.unsubscribe?.();
  binding?.unregister?.();
  runtime.eventRemoveListener?.(eventName, listener);
}
function teardownDebugParseButtonHook() {
  if (!\u5DF2\u6CE8\u518C\u6309\u94AE\u94A9\u5B50) {
    return;
  }
  const { eventName } = \u5DF2\u6CE8\u518C\u6309\u94AE\u94A9\u5B50;
  \u5378\u8F7D\u4E8B\u4EF6\u7ED1\u5B9A(\u5DF2\u6CE8\u518C\u6309\u94AE\u94A9\u5B50);
  \u5DF2\u6CE8\u518C\u6309\u94AE\u94A9\u5B50 = null;
  debugLog("runtime", "\u5DF2\u5378\u8F7D\u89E3\u6790\u547D\u4EE4\u6309\u94AE\u94A9\u5B50", { eventName });
}
function setupDebugParseButtonHook(buttonName = "\u89E3\u6790\u547D\u4EE4", options = {}) {
  teardownDebugParseButtonHook();
  const runtime = \u83B7\u53D6\u8FD0\u884C\u65F6\u63A5\u53E3();
  const eventName = runtime.getButtonEvent?.(buttonName);
  if (!eventName || typeof runtime.eventOn !== "function") {
    debugLog("runtime", "\u672A\u627E\u5230\u6309\u94AE\u4E8B\u4EF6\u6216 eventOn\uFF0C\u65E0\u6CD5\u6CE8\u518C\u89E3\u6790\u547D\u4EE4\u6309\u94AE", {
      buttonName,
      hasEventOn: typeof runtime.eventOn === "function",
      eventName
    });
    return false;
  }
  const listener = async () => {
    debugInfo("runtime", "\u6536\u5230\u89E3\u6790\u547D\u4EE4\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6", { buttonName, eventName });
    try {
      const message = \u8BFB\u53D6\u6D88\u606F2(-1);
      if (!message) {
        debugInfo("runtime", "\u6309\u94AE\u8C03\u8BD5\u672A\u8BFB\u53D6\u5230\u6700\u65B0\u6D88\u606F\uFF0C\u8DF3\u8FC7\u5904\u7406");
        return;
      }
      if (message.role !== "assistant" || typeof message.message_id !== "number") {
        debugInfo("runtime", "\u6309\u94AE\u8C03\u8BD5\u8BFB\u53D6\u5230\u7684\u6700\u65B0\u6D88\u606F\u4E0D\u662F\u53EF\u5904\u7406 assistant \u6D88\u606F\uFF0C\u8DF3\u8FC7\u5904\u7406", {
          role: message.role ?? null,
          messageId: message.message_id ?? null
        });
        return;
      }
      const result = await handleAssistantReply(String(message.message || ""), {
        ...options,
        messageId: message.message_id,
        refreshMacroOnNoCommands: false
      });
      \u540C\u6B65Vue\u9762\u677F(message.message_id, result.state, result.playerOptions);
      debugInfo("runtime", "\u6309\u94AE\u89E6\u53D1\u7684 assistant \u6D88\u606F\u5904\u7406\u5B8C\u6210", {
        buttonName,
        messageId: message.message_id,
        applied: result.applied.length,
        hasCommandsText: Boolean(result.commandsText)
      });
    } catch (error) {
      debugError("runtime", "\u6309\u94AE\u89E6\u53D1\u7684 assistant \u6D88\u606F\u5904\u7406\u5931\u8D25", error);
    }
  };
  const binding = runtime.eventOn(eventName, listener);
  \u5DF2\u6CE8\u518C\u6309\u94AE\u94A9\u5B50 = { eventName, listener, binding: binding ?? void 0 };
  debugLog("runtime", "\u5DF2\u6CE8\u518C\u89E3\u6790\u547D\u4EE4\u6309\u94AE\u94A9\u5B50", { buttonName, eventName });
  return true;
}
function teardownAssistantReplyHook() {
  if (!\u5DF2\u6CE8\u518C\u56DE\u590D\u94A9\u5B50) {
    return;
  }
  const { eventName } = \u5DF2\u6CE8\u518C\u56DE\u590D\u94A9\u5B50;
  \u5378\u8F7D\u4E8B\u4EF6\u7ED1\u5B9A(\u5DF2\u6CE8\u518C\u56DE\u590D\u94A9\u5B50);
  \u5DF2\u6CE8\u518C\u56DE\u590D\u94A9\u5B50 = null;
  debugLog("runtime", "\u5DF2\u5378\u8F7D AI \u56DE\u590D\u5B8C\u6210\u94A9\u5B50", { eventName });
}
function teardownChatChangedHook() {
  if (!\u5DF2\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50) {
    return;
  }
  const { eventName } = \u5DF2\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50;
  \u5378\u8F7D\u4E8B\u4EF6\u7ED1\u5B9A(\u5DF2\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50);
  \u5DF2\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50 = null;
  debugLog("runtime", "\u5DF2\u5378\u8F7D\u804A\u5929\u5207\u6362\u94A9\u5B50", { eventName });
}
function setupChatChangedHook() {
  teardownChatChangedHook();
  const runtime = \u83B7\u53D6\u8FD0\u884C\u65F6\u63A5\u53E3();
  const eventName = runtime.tavern_events?.CHAT_CHANGED;
  if (!eventName || typeof runtime.eventOn !== "function") {
    debugLog("runtime", "\u672A\u627E\u5230 tavern_events.CHAT_CHANGED \u6216 eventOn\uFF0C\u65E0\u6CD5\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50", {
      hasEventOn: typeof runtime.eventOn === "function",
      eventName
    });
    return false;
  }
  const listener = (chatFileName) => {
    debugInfo("runtime", "\u6536\u5230 CHAT_CHANGED \u4E8B\u4EF6\uFF0C\u51C6\u5907\u6E05\u7406\u60AC\u6D6E\u7A97", { chatFileName: chatFileName ?? null });
    clearUnifiedPanelState();
    unmountUnifiedPanelApp();
    Vue\u9762\u677F\u5DF2\u542F\u7528 = false;
  };
  const binding = runtime.eventOn(eventName, listener);
  \u5DF2\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50 = { eventName, listener, binding: binding ?? void 0 };
  debugLog("runtime", "\u5DF2\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50", { eventName });
  return true;
}
function teardownDebugLogToggleButtonHook() {
  if (!\u5DF2\u6CE8\u518C\u65E5\u5FD7\u6309\u94AE\u94A9\u5B50) {
    return;
  }
  const { eventName } = \u5DF2\u6CE8\u518C\u65E5\u5FD7\u6309\u94AE\u94A9\u5B50;
  \u5378\u8F7D\u4E8B\u4EF6\u7ED1\u5B9A(\u5DF2\u6CE8\u518C\u65E5\u5FD7\u6309\u94AE\u94A9\u5B50);
  \u5DF2\u6CE8\u518C\u65E5\u5FD7\u6309\u94AE\u94A9\u5B50 = null;
  debugLog("runtime", "\u5DF2\u5378\u8F7D\u65E5\u5FD7\u5F00\u5173\u6309\u94AE\u94A9\u5B50", { eventName });
}
function teardownVuePanelToggleButtonHook() {
  if (\u5DF2\u6CE8\u518CVue\u9762\u677F\u6309\u94AE\u94A9\u5B50) {
    const { eventName } = \u5DF2\u6CE8\u518CVue\u9762\u677F\u6309\u94AE\u94A9\u5B50;
    \u5378\u8F7D\u4E8B\u4EF6\u7ED1\u5B9A(\u5DF2\u6CE8\u518CVue\u9762\u677F\u6309\u94AE\u94A9\u5B50);
    \u5DF2\u6CE8\u518CVue\u9762\u677F\u6309\u94AE\u94A9\u5B50 = null;
    debugLog("runtime", "\u5DF2\u5378\u8F7D Vue \u9762\u677F\u5F00\u5173\u6309\u94AE\u94A9\u5B50", { eventName });
  }
  clearUnifiedPanelState();
  unmountUnifiedPanelApp();
  Vue\u9762\u677F\u5DF2\u542F\u7528 = false;
  debugLog("runtime", "\u5DF2\u5378\u8F7D Vue \u9762\u677F");
}
function toggleVuePanel() {
  const mounted = \u786E\u4FDDVue\u9762\u677F\u5DF2\u6302\u8F7D();
  if (!mounted) {
    return false;
  }
  const nextVisible = !unifiedPanelState.systemPanel.visible;
  setSystemPanelVisible(nextVisible);
  debugLog("runtime", nextVisible ? "\u5DF2\u663E\u793A\u7CFB\u7EDF\u754C\u9762" : "\u5DF2\u9690\u85CF\u7CFB\u7EDF\u754C\u9762");
  return nextVisible;
}
function toggleSystemPanel() {
  return toggleVuePanel();
}
function setupVuePanelToggleButtonHook(buttonName = "\u7CFB\u7EDF\u754C\u9762\u5F00\u5173") {
  teardownVuePanelToggleButtonHook();
  const runtime = \u83B7\u53D6\u8FD0\u884C\u65F6\u63A5\u53E3();
  const eventName = runtime.getButtonEvent?.(buttonName);
  if (!eventName || typeof runtime.eventOn !== "function") {
    debugLog("runtime", "\u672A\u627E\u5230\u6309\u94AE\u4E8B\u4EF6\u6216 eventOn\uFF0C\u65E0\u6CD5\u6CE8\u518C Vue \u9762\u677F\u5F00\u5173\u6309\u94AE", {
      buttonName,
      hasEventOn: typeof runtime.eventOn === "function",
      eventName
    });
    return false;
  }
  const listener = () => {
    const visible = toggleVuePanel();
    debugLog("runtime", "\u6536\u5230\u7CFB\u7EDF\u754C\u9762\u5F00\u5173\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6", { buttonName, eventName, visible });
  };
  const binding = runtime.eventOn(eventName, listener);
  \u5DF2\u6CE8\u518CVue\u9762\u677F\u6309\u94AE\u94A9\u5B50 = { eventName, listener, binding: binding ?? void 0 };
  debugLog("runtime", "\u5DF2\u6CE8\u518C\u7CFB\u7EDF\u754C\u9762\u5F00\u5173\u6309\u94AE\u94A9\u5B50", { buttonName, eventName, hasBinding: Boolean(binding) });
  return true;
}
function setupSystemPanelToggleButtonHook(buttonName = "\u7CFB\u7EDF\u754C\u9762\u5F00\u5173") {
  return setupVuePanelToggleButtonHook(buttonName);
}
function setupDebugLogToggleButtonHook(buttonName = "\u65E5\u5FD7\u5F00\u5173") {
  teardownDebugLogToggleButtonHook();
  const runtime = \u83B7\u53D6\u8FD0\u884C\u65F6\u63A5\u53E3();
  const eventName = runtime.getButtonEvent?.(buttonName);
  if (!eventName || typeof runtime.eventOn !== "function") {
    debugLog("runtime", "\u672A\u627E\u5230\u6309\u94AE\u4E8B\u4EF6\u6216 eventOn\uFF0C\u65E0\u6CD5\u6CE8\u518C\u65E5\u5FD7\u5F00\u5173\u6309\u94AE", {
      buttonName,
      hasEventOn: typeof runtime.eventOn === "function",
      eventName
    });
    return false;
  }
  const listener = () => {
    const nextEnabled = !getDebugEnabled();
    setDebugEnabled(nextEnabled);
    console.log("[ThreeKingdomsStateKit][debug]", `\u65E5\u5FD7\u5F00\u5173\u5DF2${nextEnabled ? "\u5F00\u542F" : "\u5173\u95ED"}\uFF08info/log ${nextEnabled ? "\u542F\u7528" : "\u7981\u7528"}\uFF0Cwarning/error \u59CB\u7EC8\u8F93\u51FA\uFF09`);
    \u63D0\u793A\u65E5\u5FD7\u5F00\u5173\u72B6\u6001(nextEnabled);
  };
  const binding = runtime.eventOn(eventName, listener);
  \u5DF2\u6CE8\u518C\u65E5\u5FD7\u6309\u94AE\u94A9\u5B50 = { eventName, listener, binding: binding ?? void 0 };
  debugLog("runtime", "\u5DF2\u6CE8\u518C\u65E5\u5FD7\u5F00\u5173\u6309\u94AE\u94A9\u5B50", { buttonName, eventName });
  return true;
}
function setupAssistantReplyHook(options = {}) {
  teardownAssistantReplyHook();
  const runtime = \u83B7\u53D6\u8FD0\u884C\u65F6\u63A5\u53E3();
  const eventName = runtime.tavern_events?.MESSAGE_RECEIVED;
  if (!eventName || typeof runtime.eventOn !== "function") {
    debugLog("runtime", "\u672A\u627E\u5230 tavern_events.MESSAGE_RECEIVED \u6216 eventOn\uFF0C\u65E0\u6CD5\u81EA\u52A8\u63A5\u5165", {
      hasEventOn: typeof runtime.eventOn === "function",
      eventName
    });
    return false;
  }
  const listener = async (messageId, type) => {
    debugInfo("runtime", "\u6536\u5230 MESSAGE_RECEIVED \u4E8B\u4EF6", {
      eventName,
      messageId,
      type: type ?? null
    });
    try {
      const message = \u8BFB\u53D6\u6D88\u606F2(messageId);
      if (!message) {
        debugInfo("runtime", "\u672A\u8BFB\u53D6\u5230\u76EE\u6807\u6D88\u606F\uFF0C\u8DF3\u8FC7\u5904\u7406", { messageId });
        return;
      }
      if (message.role !== "assistant") {
        debugInfo("runtime", "\u76EE\u6807\u6D88\u606F\u4E0D\u662F assistant\uFF0C\u8DF3\u8FC7\u5904\u7406", {
          role: message.role ?? null,
          messageId: message.message_id ?? messageId
        });
        return;
      }
      if (\u662F\u5426\u91CD\u590D\u6D88\u606F(message)) {
        debugInfo("runtime", "\u68C0\u6D4B\u5230\u91CD\u590D assistant \u6D88\u606F\uFF0C\u8DF3\u8FC7\u5904\u7406", {
          messageId: message.message_id ?? messageId
        });
        return;
      }
      const result = await handleAssistantReply(String(message.message || ""), {
        ...options,
        messageId,
        refreshMacroOnNoCommands: false
      });
      \u8BB0\u5F55\u6700\u8FD1\u6D88\u606F(message);
      \u540C\u6B65Vue\u9762\u677F(message.message_id ?? messageId, result.state, result.playerOptions);
      debugInfo("runtime", "assistant \u6D88\u606F\u81EA\u52A8\u5904\u7406\u5B8C\u6210", {
        messageId: message.message_id ?? messageId,
        applied: result.applied.length,
        hasCommandsText: Boolean(result.commandsText),
        playerOptionsCount: result.playerOptions.length
      });
    } catch (error) {
      debugError("runtime", "assistant \u6D88\u606F\u81EA\u52A8\u5904\u7406\u5931\u8D25", error);
    }
  };
  const binding = runtime.eventOn(eventName, listener);
  \u5DF2\u6CE8\u518C\u56DE\u590D\u94A9\u5B50 = { eventName, listener, binding: binding ?? void 0 };
  debugLog("runtime", "\u5DF2\u6CE8\u518C assistant \u6D88\u606F\u63A5\u6536\u94A9\u5B50", { eventName });
  return true;
}

// src/runtime-auto.ts
try {
  setupAssistantReplyHook();
} catch (error) {
  debugWarn("runtime-auto", "\u6CE8\u518C AI \u56DE\u590D\u5B8C\u6210\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", error);
}
try {
  setupChatChangedHook();
} catch (error) {
  debugWarn("runtime-auto", "\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", error);
}
try {
  setupDebugParseButtonHook("\u89E3\u6790\u547D\u4EE4");
} catch (error) {
  debugWarn("runtime-auto", "\u6CE8\u518C\u201C\u89E3\u6790\u547D\u4EE4\u201D\u6309\u94AE\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", error);
}
try {
  setupDebugLogToggleButtonHook("\u65E5\u5FD7\u5F00\u5173");
} catch (error) {
  debugWarn("runtime-auto", "\u6CE8\u518C\u201C\u65E5\u5FD7\u5F00\u5173\u201D\u6309\u94AE\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", error);
}
try {
  setupVuePanelToggleButtonHook("\u7CFB\u7EDF\u754C\u9762\u5F00\u5173");
} catch (error) {
  debugWarn("runtime-auto", "\u6CE8\u518C\u201C\u7CFB\u7EDF\u754C\u9762\u5F00\u5173\u201D\u6309\u94AE\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", error);
}

// src/index.ts
var ThreeKingdomsStateKit = {
  \u7ED3\u6784: {
    create\u4E16\u754C,
    create\u4E3B\u89D2,
    createNPC,
    create\u4EFB\u52A1,
    create\u5546\u54C1\u6761\u76EE,
    create\u52BF\u529B,
    create\u52BF\u529B\u96C6\u5408,
    create\u57CE\u6C60,
    create\u519B\u961F,
    create\u653F\u7B56,
    create\u521D\u59CB\u72B6\u6001
  },
  \u89C4\u5219: rules_exports,
  \u547D\u4EE4: commands_exports,
  \u5B58\u6863: storage_exports,
  \u6267\u884C: executor_exports,
  \u4E0A\u4E0B\u6587: context_exports,
  \u534F\u8BAE: protocol_exports,
  \u6865\u63A5: bridge_exports,
  \u5B8F: macro_exports,
  \u8FD0\u884C\u65F6: runtime_exports,
  \u8C03\u8BD5: debug_exports,
  \u5BBF\u4E3BDOM: dom_host_exports,
  handleAssistantReply,
  setupAssistantReplyHook,
  teardownAssistantReplyHook,
  setupChatChangedHook,
  teardownChatChangedHook,
  setupDebugParseButtonHook,
  teardownDebugParseButtonHook,
  setupDebugLogToggleButtonHook,
  teardownDebugLogToggleButtonHook,
  setupVuePanelToggleButtonHook,
  setupSystemPanelToggleButtonHook,
  teardownVuePanelToggleButtonHook,
  toggleVuePanel,
  toggleSystemPanel,
  handlePlayerOptionClick,
  syncPlayerOptionsQuickReplies,
  clearPlayerOptionsQuickReplies,
  rehydratePlayerOptionsQuickRepliesFromLatestMessage,
  updatePlayerOptionsView,
  clearPlayerOptionsView,
  setDebug: setDebugEnabled,
  getDebug: getDebugEnabled,
  \u91CD\u7B97: {
    recompute\u516D\u7EF4,
    recompute\u89D2\u8272\u6218\u6597\u6570\u636E,
    recompute\u7F8E\u4EBA\u5C5E\u6027,
    recompute\u57CE\u6C60,
    recompute\u519B\u961F,
    recompute\u52BF\u529B,
    recompute\u52BF\u529B\u96C6\u5408,
    recomputeNPC,
    recompute\u4E3B\u89D2,
    recompute\u5168\u5C40
  }
};
if (typeof initializeGlobal === "function") {
  initializeGlobal("ThreeKingdomsStateKit", ThreeKingdomsStateKit);
}
window.ThreeKingdomsStateKit = ThreeKingdomsStateKit;
try {
  registerSgbzMacros();
} catch (error) {
  debugWarn("index", "\u6CE8\u518C\u5B8F\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", error);
}
var index_default = ThreeKingdomsStateKit;
export {
  ANALYSIS_END,
  ANALYSIS_START,
  COMMAND_BLOCK_END,
  COMMAND_BLOCK_START,
  CONTEXT_MACRO_KEY,
  MAX_CONTEXT_NPCS,
  MAX_CONTEXT_QUESTS,
  MAX_CONTEXT_SHOP_ITEMS,
  MAX_RECENT_EVENTS,
  MAX_SAVED_STATE_MESSAGES,
  PLAYER_OPTIONS_END,
  PLAYER_OPTIONS_START,
  SGBZ_CONTEXT_MACRO_REGEX,
  STATE_ROOT_KEY,
  ThreeKingdomsStateKit,
  UPDATE_VARIABLE_END,
  UPDATE_VARIABLE_START,
  appendReplyDecorators,
  buildContextMacroText,
  buildInjectedContext,
  buildInjectedView,
  clearPlayerOptionsQuickReplies,
  clearPlayerOptionsView,
  createNPC,
  create\u4E13\u957F\u6761\u76EE,
  create\u4E16\u754C,
  create\u4E3B\u89D2,
  create\u4EFB\u52A1,
  create\u4EFB\u52A1\u76EE\u6807,
  create\u516D\u7EF4,
  create\u519B\u961F,
  create\u521D\u59CB\u72B6\u6001,
  create\u52BF\u529B,
  create\u52BF\u529B\u96C6\u5408,
  create\u5546\u54C1\u6761\u76EE,
  create\u57CE\u6C60,
  create\u653F\u7B56,
  create\u6B66\u5C06\u4FE1\u606F,
  create\u6B66\u6280\u6761\u76EE,
  create\u72B6\u6001\u8BB0\u5F55,
  create\u7F8E\u4EBA\u5C5E\u6027,
  create\u88C5\u5907\u6761\u76EE,
  create\u88C5\u5907\u680F,
  create\u89D2\u8272\u6218\u6597\u6570\u636E,
  debugError,
  debugInfo,
  debugLog,
  debugWarn,
  index_default as default,
  extractAndApplyCommands,
  extractApplyAndSaveCommands,
  extractCommands,
  getDebugEnabled,
  getHostDocument,
  getHostWindow,
  handleAssistantReply,
  handlePlayerOptionClick,
  recomputeNPC,
  recompute\u4E3B\u89D2,
  recompute\u5168\u5C40,
  recompute\u516D\u7EF4,
  recompute\u519B\u961F,
  recompute\u52BF\u529B,
  recompute\u52BF\u529B\u96C6\u5408,
  recompute\u57CE\u6C60,
  recompute\u7F8E\u4EBA\u5C5E\u6027,
  recompute\u89D2\u8272\u6218\u6597\u6570\u636E,
  refreshContextMacro,
  refreshContextMacroFromStorage,
  registerSgbzMacros,
  rehydratePlayerOptionsQuickRepliesFromLatestMessage,
  renderSgbzContextMacro,
  setDebugEnabled,
  setupAssistantReplyHook,
  setupChatChangedHook,
  setupDebugLogToggleButtonHook,
  setupDebugParseButtonHook,
  setupSystemPanelToggleButtonHook,
  setupVuePanelToggleButtonHook,
  summarizeState,
  summarizeValue,
  syncPlayerOptionsQuickReplies,
  teardownAssistantReplyHook,
  teardownChatChangedHook,
  teardownDebugLogToggleButtonHook,
  teardownDebugParseButtonHook,
  teardownVuePanelToggleButtonHook,
  toggleSystemPanel,
  toggleVuePanel,
  unregisterSgbzMacros,
  updatePlayerOptionsView,
  \u4EA4\u60C5\u7B49\u7EA7,
  \u4F9D\u8D56\u7B49\u7EA7,
  \u4FDD\u5B58\u4E0A\u4E0B\u6587\u5B8F,
  \u4FDD\u5B58\u72B6\u6001,
  \u519B\u961F\u88C5\u5907\u7CFB\u6570,
  \u519B\u9977\u57FA\u6570,
  \u521B\u5EFA\u547D\u4EE4\u6267\u884C\u5FEB\u7167,
  \u521D\u59CB\u5316\u72B6\u6001,
  \u52A0\u8F7D\u72B6\u6001,
  \u5305\u88C5\u547D\u4EE4\u5757,
  \u548C\u8C10\u7B49\u7EA7,
  \u57CE\u6C60\u57FA\u7840,
  \u58EB\u6C14\u7B49\u7EA7,
  \u58EB\u6C14\u7CFB\u6570,
  \u58F0\u671B\u79F0\u53F7,
  \u5916\u4EA4\u7B49\u7EA7,
  \u597D\u611F\u7B49\u7EA7,
  \u5FE0\u8BDA\u7B49\u7EA7,
  \u6267\u884C\u547D\u4EE4,
  \u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4,
  \u63D0\u53D6\u547D\u4EE4\u5757,
  \u63D0\u53D6\u73A9\u5BB6\u9009\u9879\u5757,
  \u654F\u611F\u7B49\u7EA7,
  \u6570\u503C,
  \u65AD\u8A00\u65E0\u4E0B\u5212\u7EBF\u5B57\u6BB5,
  \u66F4\u65B0\u6D88\u606F\u6B63\u6587,
  \u66F4\u65B0\u72B6\u6001,
  \u6784\u5EFA\u5B8F\u6CE8\u5165\u6587\u672C,
  \u6784\u5EFA\u6CE8\u5165\u6587\u672C,
  \u6784\u5EFA\u6CE8\u5165\u89C6\u56FE,
  \u679A\u4E3E,
  \u6821\u9A8C\u547D\u4EE4,
  \u6C47\u603B\u88C5\u5907\u52A0\u503C,
  \u75B2\u60EB\u7B49\u7EA7,
  \u75B2\u60EB\u7CFB\u6570,
  \u79FB\u9664\u73A9\u5BB6\u9009\u9879\u5757,
  \u7B49\u7EA7\u7CFB\u6570,
  \u7EDF\u7387\u7CFB\u6570,
  \u89E3\u6790\u547D\u4EE4\u5757,
  \u89E3\u6790\u547D\u4EE4\u8F93\u5165,
  \u89E3\u6790\u73A9\u5BB6\u9009\u9879\u5757,
  \u8BA1\u7B97\u4F24\u52BF,
  \u8BA1\u7B97\u52A0\u503C,
  \u8BFB\u53D6\u4E0A\u4E0B\u6587\u5B8F,
  \u8BFB\u53D6\u539F\u59CB\u72B6\u6001,
  \u8BFB\u53D6\u6240\u6709\u6D88\u606F,
  \u8BFB\u53D6\u6D88\u606F,
  \u8D1E\u6D01\u7B49\u7EA7,
  \u9009\u62E9\u5546\u57CE\u6761\u76EE,
  \u9009\u62E9\u5F53\u524D\u5730\u70B9\u76F8\u5173NPC,
  \u9009\u62E9\u8FDB\u884C\u4E2D\u4EFB\u52A1,
  \u9635\u578B\u6570\u636E,
  \u9650\u5236\u6570\u503C
};
/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.5.30
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/reactivity/dist/reactivity.esm-bundler.js:
  (**
  * @vue/reactivity v3.5.30
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (**
  * @vue/runtime-core v3.5.30
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-dom/dist/runtime-dom.esm-bundler.js:
  (**
  * @vue/runtime-dom v3.5.30
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

vue/dist/vue.runtime.esm-bundler.js:
  (**
  * vue v3.5.30
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
