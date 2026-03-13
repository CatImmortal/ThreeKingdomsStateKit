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
    \u5206\u7C7B: String(data.\u5206\u7C7B || ""),
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
    \u52BF\u529B: create\u52BF\u529B(seed.\u52BF\u529B),
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
  if (payload === void 0) {
    console.info(formatPrefix(scope, "info"), message);
    return;
  }
  console.info(formatPrefix(scope, "info"), message, payload);
}
function debugLog(scope, message, payload) {
  if (!debugEnabled) return;
  if (payload === void 0) {
    console.log(formatPrefix(scope), message);
    return;
  }
  console.log(formatPrefix(scope), message, payload);
}
function debugWarn(scope, message, payload) {
  if (payload === void 0) {
    console.warn(formatPrefix(scope, "warn"), message);
    return;
  }
  console.warn(formatPrefix(scope, "warn"), message, payload);
}
function debugError(scope, message, error) {
  if (error === void 0) {
    console.error(formatPrefix(scope, "error"), message);
    return;
  }
  console.error(formatPrefix(scope, "error"), message, error);
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
  UpdateFaction: ["type", "changes"],
  UpsertCity: ["type", "id", "data", "createIfMissing"],
  RemoveCity: ["type", "id"],
  UpsertArmy: ["type", "id", "data", "createIfMissing"],
  RemoveArmy: ["type", "id"],
  UpdateDiplomacy: ["type", "changes"],
  UpdatePolicy: ["type", "changes"],
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
var \u4E3B\u89D2\u5B57\u6BB5 = ["\u516D\u7EF4", "\u5F53\u524D\u751F\u547D\u503C", "\u5F53\u524D\u4F53\u529B\u503C", "\u88C5\u5907", "\u6B66\u6280", "\u4E13\u957F", "\u72B6\u6001", "\u7269\u54C1\u680F", "\u58F0\u671B", "\u91D1\u94B1", "\u79EF\u5206", "\u5B98\u804C", "\u7235\u4F4D", "\u540E\u5BAB\u548C\u8C10\u5EA6"];
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
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, ["\u516D\u7EF4", "\u5F53\u524D\u751F\u547D\u503C", "\u5F53\u524D\u4F53\u529B\u503C", "\u88C5\u5907", "\u6B66\u6280", "\u4E13\u957F", "\u72B6\u6001"], path);
  if (value.\u516D\u7EF4 !== void 0) \u6821\u9A8C\u516D\u7EF4(value.\u516D\u7EF4, `${path}.\u516D\u7EF4`);
  if (value.\u5F53\u524D\u751F\u547D\u503C !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u5F53\u524D\u751F\u547D\u503C, `${path}.\u5F53\u524D\u751F\u547D\u503C`);
  if (value.\u5F53\u524D\u4F53\u529B\u503C !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u5F53\u524D\u4F53\u529B\u503C, `${path}.\u5F53\u524D\u4F53\u529B\u503C`);
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
  if (value.\u5206\u7C7B !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u5206\u7C7B, `${path}.\u5206\u7C7B`);
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
        debugLog("commands", "\u6821\u9A8C UpdateFaction", { index });
        \u6821\u9A8C\u52BF\u529B\u66F4\u65B0(command.changes, `${path}.changes`);
        return;
      case "UpsertCity":
        debugLog("commands", "\u6821\u9A8C UpsertCity", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        if (command.createIfMissing !== void 0) {
          \u65AD\u8A00\u5E03\u5C14(command.createIfMissing, `${path}.createIfMissing`);
        }
        \u6821\u9A8C\u57CE\u6C60\u66F4\u65B0(command.data, `${path}.data`);
        return;
      case "RemoveCity":
        debugLog("commands", "\u6821\u9A8C RemoveCity", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        return;
      case "UpsertArmy":
        debugLog("commands", "\u6821\u9A8C UpsertArmy", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        if (command.createIfMissing !== void 0) {
          \u65AD\u8A00\u5E03\u5C14(command.createIfMissing, `${path}.createIfMissing`);
        }
        \u6821\u9A8C\u519B\u961F\u66F4\u65B0(command.data, `${path}.data`);
        return;
      case "RemoveArmy":
        debugLog("commands", "\u6821\u9A8C RemoveArmy", { index, id: command.id });
        \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
        return;
      case "UpdateDiplomacy":
        debugLog("commands", "\u6821\u9A8C UpdateDiplomacy", { index });
        \u6821\u9A8C\u6570\u5B57\u6620\u5C04(command.changes, `${path}.changes`);
        return;
      case "UpdatePolicy":
        debugLog("commands", "\u6821\u9A8C UpdatePolicy", { index });
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
  const \u751F\u547D\u4E0A\u9650 = (next.\u516D\u7EF4._\u4F53\u8D28\u52A0\u503C ?? 0) * 5;
  const \u4F53\u529B\u4E0A\u9650 = (next.\u516D\u7EF4._\u4F53\u8D28\u52A0\u503C ?? 0) * 8;
  next.\u5F53\u524D\u751F\u547D\u503C = _.clamp(\u6570\u503C(next.\u5F53\u524D\u751F\u547D\u503C), 0, \u751F\u547D\u4E0A\u9650);
  next.\u5F53\u524D\u4F53\u529B\u503C = _.clamp(\u6570\u503C(next.\u5F53\u524D\u4F53\u529B\u503C), 0, \u4F53\u529B\u4E0A\u9650);
  next._\u751F\u547D\u4E0A\u9650 = \u751F\u547D\u4E0A\u9650;
  next._\u4F53\u529B\u4E0A\u9650 = \u4F53\u529B\u4E0A\u9650;
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
function recompute\u5168\u5C40(state) {
  const next = _.cloneDeep(state);
  next.\u4E16\u754C = create\u4E16\u754C(next.\u4E16\u754C);
  next.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6 = next.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6.slice(-MAX_RECENT_EVENTS);
  next.\u4E3B\u89D2 = recompute\u4E3B\u89D2(next.\u4E3B\u89D2);
  next.NPC = _.mapValues(next.NPC || {}, (npc) => recomputeNPC(npc));
  next.\u52BF\u529B = recompute\u52BF\u529B(create\u52BF\u529B(next.\u52BF\u529B), { NPC: next.NPC });
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
function \u5E94\u7528\u52BF\u529B\u66F4\u65B0(state, command) {
  state.\u52BF\u529B = create\u52BF\u529B(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(state.\u52BF\u529B), command.changes));
}
function \u5E94\u7528\u57CE\u6C60\u66F4\u65B0(state, command) {
  const current = state.\u52BF\u529B.\u57CE\u6C60[command.id];
  if (!current && command.createIfMissing === false) {
    throw new Error(`\u57CE\u6C60\u4E0D\u5B58\u5728: ${command.id}`);
  }
  const next = create\u57CE\u6C60(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(current ?? create\u57CE\u6C60()), command.data));
  state.\u52BF\u529B.\u57CE\u6C60[command.id] = next;
}
function \u5E94\u7528\u519B\u961F\u66F4\u65B0(state, command) {
  const current = state.\u52BF\u529B.\u519B\u961F[command.id];
  if (!current && command.createIfMissing === false) {
    throw new Error(`\u519B\u961F\u4E0D\u5B58\u5728: ${command.id}`);
  }
  const next = create\u519B\u961F(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(current ?? create\u519B\u961F()), command.data));
  state.\u52BF\u529B.\u519B\u961F[command.id] = next;
}
function \u5E94\u7528\u5916\u4EA4\u66F4\u65B0(state, command) {
  state.\u52BF\u529B.\u5916\u4EA4 = {
    ...state.\u52BF\u529B.\u5916\u4EA4,
    ..._.mapValues(command.changes, (value) => Math.max(0, Math.min(100, \u6570\u503C(value))))
  };
}
function \u5E94\u7528\u653F\u7B56\u66F4\u65B0(state, command) {
  state.\u52BF\u529B.\u653F\u7B56 = create\u653F\u7B56(\u5408\u5E76\u5BF9\u8C61(_.cloneDeep(state.\u52BF\u529B.\u653F\u7B56), command.changes));
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
        id: "id" in command ? command.id : void 0
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
        case "RemoveCity":
          delete next.\u52BF\u529B.\u57CE\u6C60[command.id];
          break;
        case "UpsertArmy":
          \u5E94\u7528\u519B\u961F\u66F4\u65B0(next, command);
          break;
        case "RemoveArmy":
          delete next.\u52BF\u529B.\u519B\u961F[command.id];
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
function \u6784\u5EFA\u6CE8\u5165\u89C6\u56FE(state) {
  return {
    \u4E16\u754C: _.cloneDeep(state.\u4E16\u754C),
    \u4E3B\u89D2: _.cloneDeep(state.\u4E3B\u89D2),
    \u52BF\u529B: _.cloneDeep(state.\u52BF\u529B),
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
  UPDATE_VARIABLE_END: () => UPDATE_VARIABLE_END,
  UPDATE_VARIABLE_START: () => UPDATE_VARIABLE_START,
  \u5305\u88C5\u547D\u4EE4\u5757: () => \u5305\u88C5\u547D\u4EE4\u5757,
  \u63D0\u53D6\u547D\u4EE4\u5757: () => \u63D0\u53D6\u547D\u4EE4\u5757,
  \u79FB\u9664\u547D\u4EE4\u5757: () => \u79FB\u9664\u547D\u4EE4\u5757,
  \u89E3\u6790\u547D\u4EE4\u5757: () => \u89E3\u6790\u547D\u4EE4\u5757
});
var UPDATE_VARIABLE_START = "<UpdateVariable>";
var UPDATE_VARIABLE_END = "</UpdateVariable>";
var ANALYSIS_START = "<Analysis>";
var ANALYSIS_END = "</Analysis>";
var COMMAND_BLOCK_START = "<Commands>";
var COMMAND_BLOCK_END = "</Commands>";
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
function \u79FB\u9664\u547D\u4EE4\u5757(replyText) {
  const pattern = new RegExp(`${_.escapeRegExp(UPDATE_VARIABLE_START)}[\\s\\S]*?${_.escapeRegExp(UPDATE_VARIABLE_END)}`, "g");
  return replyText.replace(pattern, "").trim();
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
      replyText: \u79FB\u9664\u547D\u4EE4\u5757(replyText)
    };
  } catch (error) {
    debugError("protocol", "\u547D\u4EE4\u5757 JSON \u89E3\u6790\u5931\u8D25", error);
    throw error;
  }
}

// src/bridge.ts
var bridge_exports = {};
__export(bridge_exports, {
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
  debugLog("bridge", "\u5F00\u59CB\u4ECE\u56DE\u590D\u63D0\u53D6\u547D\u4EE4", summarizeValue(replyText));
  try {
    const parsed = \u89E3\u6790\u547D\u4EE4\u5757(replyText);
    const commands = parsed.commandsText ? \u89E3\u6790\u547D\u4EE4\u8F93\u5165(parsed.commands) : [];
    debugInfo("bridge", "\u547D\u4EE4\u63D0\u53D6\u5B8C\u6210", {
      hasCommandsText: Boolean(parsed.commandsText),
      commandsCount: commands.length,
      cleanedReply: summarizeValue(parsed.replyText)
    });
    return {
      commandsText: parsed.commandsText,
      commands,
      cleanedReplyText: parsed.replyText
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
    commandsCount: extracted.commands.length
  });
  if (extracted.commands.length === 0) {
    debugInfo("bridge", refreshMacroOnNoCommands ? "\u672A\u63D0\u53D6\u5230\u547D\u4EE4\uFF0C\u4EC5\u5237\u65B0\u4E0A\u4E0B\u6587\u5B8F" : "\u672A\u63D0\u53D6\u5230\u547D\u4EE4\uFF0C\u4EC5\u8BB0\u5F55\u65E5\u5FD7", {
      macroKey,
      refreshMacroOnNoCommands
    });
    if (refreshMacroOnNoCommands) {
      refreshContextMacro(state, macroKey);
    }
    return {
      state: _.cloneDeep(state),
      applied: [],
      commandsText: null,
      cleanedReplyText: extracted.cleanedReplyText
    };
  }
  const result = await \u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4(state, extracted.commands, messageId);
  refreshContextMacro(result.state, macroKey);
  debugInfo("bridge", "\u63D0\u53D6\u3001\u5E94\u7528\u5E76\u4FDD\u5B58\u547D\u4EE4\u5B8C\u6210", {
    messageId,
    macroKey,
    applied: result.applied.length,
    state: summarizeState(result.state)
  });
  return {
    ...result,
    commandsText: extracted.commandsText,
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
  setupAssistantReplyHook: () => setupAssistantReplyHook,
  setupDebugLogToggleButtonHook: () => setupDebugLogToggleButtonHook,
  setupDebugParseButtonHook: () => setupDebugParseButtonHook,
  teardownAssistantReplyHook: () => teardownAssistantReplyHook,
  teardownDebugLogToggleButtonHook: () => teardownDebugLogToggleButtonHook,
  teardownDebugParseButtonHook: () => teardownDebugParseButtonHook
});
var \u5DF2\u6CE8\u518C\u56DE\u590D\u94A9\u5B50 = null;
var \u5DF2\u6CE8\u518C\u6309\u94AE\u94A9\u5B50 = null;
var \u5DF2\u6CE8\u518C\u65E5\u5FD7\u6309\u94AE\u94A9\u5B50 = null;
var \u6700\u8FD1\u5904\u7406\u8BB0\u5F55 = { messageId: null, message: "" };
function \u83B7\u53D6\u8FD0\u884C\u65F6\u63A5\u53E3() {
  const globalApi = globalThis;
  const windowApi = typeof window !== "undefined" ? window : void 0;
  return {
    eventOn: globalApi.eventOn ?? windowApi?.eventOn,
    eventRemoveListener: globalApi.eventRemoveListener ?? windowApi?.eventRemoveListener,
    getButtonEvent: globalApi.getButtonEvent ?? windowApi?.getButtonEvent,
    tavern_events: globalApi.tavern_events ?? windowApi?.tavern_events,
    getChatMessages: globalApi.getChatMessages ?? windowApi?.getChatMessages,
    TavernHelper: globalApi.TavernHelper ?? windowApi?.TavernHelper
  };
}
function \u83B7\u53D6\u6D88\u606F\u8BFB\u53D6\u51FD\u6570() {
  const runtime = \u83B7\u53D6\u8FD0\u884C\u65F6\u63A5\u53E3();
  return runtime.getChatMessages ?? runtime.TavernHelper?.getChatMessages;
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
function teardownDebugLogToggleButtonHook() {
  if (!\u5DF2\u6CE8\u518C\u65E5\u5FD7\u6309\u94AE\u94A9\u5B50) {
    return;
  }
  const { eventName } = \u5DF2\u6CE8\u518C\u65E5\u5FD7\u6309\u94AE\u94A9\u5B50;
  \u5378\u8F7D\u4E8B\u4EF6\u7ED1\u5B9A(\u5DF2\u6CE8\u518C\u65E5\u5FD7\u6309\u94AE\u94A9\u5B50);
  \u5DF2\u6CE8\u518C\u65E5\u5FD7\u6309\u94AE\u94A9\u5B50 = null;
  debugLog("runtime", "\u5DF2\u5378\u8F7D\u65E5\u5FD7\u5F00\u5173\u6309\u94AE\u94A9\u5B50", { eventName });
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
      debugInfo("runtime", "assistant \u6D88\u606F\u81EA\u52A8\u5904\u7406\u5B8C\u6210", {
        messageId: message.message_id ?? messageId,
        applied: result.applied.length,
        hasCommandsText: Boolean(result.commandsText)
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
  setupDebugParseButtonHook("\u89E3\u6790\u547D\u4EE4");
} catch (error) {
  debugWarn("runtime-auto", "\u6CE8\u518C\u201C\u89E3\u6790\u547D\u4EE4\u201D\u6309\u94AE\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", error);
}
try {
  setupDebugLogToggleButtonHook("\u65E5\u5FD7\u5F00\u5173");
} catch (error) {
  debugWarn("runtime-auto", "\u6CE8\u518C\u201C\u65E5\u5FD7\u5F00\u5173\u201D\u6309\u94AE\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", error);
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
  handleAssistantReply,
  setupAssistantReplyHook,
  teardownAssistantReplyHook,
  setupDebugParseButtonHook,
  teardownDebugParseButtonHook,
  setupDebugLogToggleButtonHook,
  teardownDebugLogToggleButtonHook,
  setDebug: setDebugEnabled,
  getDebug: getDebugEnabled,
  \u91CD\u7B97: {
    recompute\u516D\u7EF4,
    recompute\u89D2\u8272\u6218\u6597\u6570\u636E,
    recompute\u7F8E\u4EBA\u5C5E\u6027,
    recompute\u57CE\u6C60,
    recompute\u519B\u961F,
    recompute\u52BF\u529B,
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
  SGBZ_CONTEXT_MACRO_REGEX,
  STATE_ROOT_KEY,
  ThreeKingdomsStateKit,
  UPDATE_VARIABLE_END,
  UPDATE_VARIABLE_START,
  buildContextMacroText,
  buildInjectedContext,
  buildInjectedView,
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
  handleAssistantReply,
  recomputeNPC,
  recompute\u4E3B\u89D2,
  recompute\u5168\u5C40,
  recompute\u516D\u7EF4,
  recompute\u519B\u961F,
  recompute\u52BF\u529B,
  recompute\u57CE\u6C60,
  recompute\u7F8E\u4EBA\u5C5E\u6027,
  recompute\u89D2\u8272\u6218\u6597\u6570\u636E,
  refreshContextMacro,
  refreshContextMacroFromStorage,
  registerSgbzMacros,
  renderSgbzContextMacro,
  setDebugEnabled,
  setupAssistantReplyHook,
  setupDebugLogToggleButtonHook,
  setupDebugParseButtonHook,
  summarizeState,
  summarizeValue,
  teardownAssistantReplyHook,
  teardownDebugLogToggleButtonHook,
  teardownDebugParseButtonHook,
  unregisterSgbzMacros,
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
  \u654F\u611F\u7B49\u7EA7,
  \u6570\u503C,
  \u65AD\u8A00\u65E0\u4E0B\u5212\u7EBF\u5B57\u6BB5,
  \u66F4\u65B0\u72B6\u6001,
  \u6784\u5EFA\u5B8F\u6CE8\u5165\u6587\u672C,
  \u6784\u5EFA\u6CE8\u5165\u6587\u672C,
  \u6784\u5EFA\u6CE8\u5165\u89C6\u56FE,
  \u679A\u4E3E,
  \u6821\u9A8C\u547D\u4EE4,
  \u6C47\u603B\u88C5\u5907\u52A0\u503C,
  \u75B2\u60EB\u7B49\u7EA7,
  \u75B2\u60EB\u7CFB\u6570,
  \u79FB\u9664\u547D\u4EE4\u5757,
  \u7B49\u7EA7\u7CFB\u6570,
  \u7EDF\u7387\u7CFB\u6570,
  \u89E3\u6790\u547D\u4EE4\u5757,
  \u89E3\u6790\u547D\u4EE4\u8F93\u5165,
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
