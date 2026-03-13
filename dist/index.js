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
  \u548C\u8C10\u7B49\u7EA7: () => \u548C\u8C10\u7B49\u7EA7,
  \u58F0\u671B\u79F0\u53F7: () => \u58F0\u671B\u79F0\u53F7,
  \u597D\u611F\u7B49\u7EA7: () => \u597D\u611F\u7B49\u7EA7,
  \u5FE0\u8BDA\u7B49\u7EA7: () => \u5FE0\u8BDA\u7B49\u7EA7,
  \u654F\u611F\u7B49\u7EA7: () => \u654F\u611F\u7B49\u7EA7,
  \u6570\u503C: () => \u6570\u503C,
  \u679A\u4E3E: () => \u679A\u4E3E,
  \u6C47\u603B\u88C5\u5907\u52A0\u503C: () => \u6C47\u603B\u88C5\u5907\u52A0\u503C,
  \u8BA1\u7B97\u4F24\u52BF: () => \u8BA1\u7B97\u4F24\u52BF,
  \u8BA1\u7B97\u52A0\u503C: () => \u8BA1\u7B97\u52A0\u503C,
  \u8D1E\u6D01\u7B49\u7EA7: () => \u8D1E\u6D01\u7B49\u7EA7,
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
  \u4EFB\u52A1\u76EE\u6807\u72B6\u6001: ["\u672A\u53D1\u73B0", "\u672A\u5B8C\u6210", "\u5DF2\u5B8C\u6210"]
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
    \u5148\u653B\u52A0\u503C: \u6570\u503C(data.\u5148\u653B\u52A0\u503C),
    \u653B\u51FB\u52A0\u503C: \u6570\u503C(data.\u653B\u51FB\u52A0\u503C),
    \u9632\u5FA1DC\u52A0\u503C: \u6570\u503C(data.\u9632\u5FA1DC\u52A0\u503C),
    \u4F24\u5BB3\u51CF\u514D: \u6570\u503C(data.\u4F24\u5BB3\u51CF\u514D),
    \u6548\u679C: String(data.\u6548\u679C || "")
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
    \u7B49\u7EA7: \u679A\u4E3E.\u6B66\u6280\u7B49\u7EA7.includes(data.\u7B49\u7EA7) ? data.\u7B49\u7EA7 : "\u5165\u95E8",
    \u7C7B\u578B: \u679A\u4E3E.\u6B66\u6280\u7C7B\u578B.includes(data.\u7C7B\u578B) ? data.\u7C7B\u578B : "\u653B\u51FB",
    \u6548\u679C: String(data.\u6548\u679C || ""),
    ...\u5B8C\u6574 ? { \u719F\u7EC3\u5EA6: \u9650\u5236\u6570\u503C(data.\u719F\u7EC3\u5EA6, 0, 100), \u4F53\u529B\u6D88\u8017: \u6570\u503C(data.\u4F53\u529B\u6D88\u8017) } : {}
  };
}
function create\u4E13\u957F\u6761\u76EE(data = {}, { \u5B8C\u6574 = true } = {}) {
  return {
    \u7B49\u7EA7: String(data.\u7B49\u7EA7 || ""),
    \u6548\u679C: String(data.\u6548\u679C || ""),
    ...\u5B8C\u6574 ? { \u52A0\u503C: \u6570\u503C(data.\u52A0\u503C) } : {}
  };
}
function create\u89D2\u8272\u6218\u6597\u6570\u636E(data = {}, { \u5B8C\u6574 = false } = {}) {
  return {
    \u516D\u7EF4: create\u516D\u7EF4(data.\u516D\u7EF4),
    \u5F53\u524D\u751F\u547D\u503C: \u6570\u503C(data.\u5F53\u524D\u751F\u547D\u503C),
    \u5F53\u524D\u4F53\u529B\u503C: \u6570\u503C(data.\u5F53\u524D\u4F53\u529B\u503C),
    \u88C5\u5907: create\u88C5\u5907\u680F(data.\u88C5\u5907),
    \u6B66\u6280: _.mapValues(data.\u6B66\u6280 || {}, (item) => create\u6B66\u6280\u6761\u76EE(item, { \u5B8C\u6574 })),
    \u4E13\u957F: _.mapValues(data.\u4E13\u957F || {}, (item) => create\u4E13\u957F\u6761\u76EE(item, { \u5B8C\u6574 })),
    \u72B6\u6001: create\u72B6\u6001\u8BB0\u5F55(data.\u72B6\u6001)
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
    \u79EF\u5206: \u6570\u503C(data.\u79EF\u5206),
    \u5176\u4ED6\u5956\u52B1: String(data.\u5176\u4ED6\u5956\u52B1 || "")
  };
}
function create\u4EFB\u52A1(data = {}) {
  return {
    \u7C7B\u578B: \u679A\u4E3E.\u4EFB\u52A1\u7C7B\u578B.includes(data.\u7C7B\u578B) ? data.\u7C7B\u578B : "\u652F\u7EBF",
    \u72B6\u6001: \u679A\u4E3E.\u4EFB\u52A1\u72B6\u6001.includes(data.\u72B6\u6001) ? data.\u72B6\u6001 : "\u53EF\u63A5\u53D6",
    \u65F6\u9650: String(data.\u65F6\u9650 || "\u65E0"),
    \u76EE\u6807: _.mapValues(data.\u76EE\u6807 || {}, (item) => create\u4EFB\u52A1\u76EE\u6807(item))
  };
}
function create\u5546\u54C1\u6761\u76EE(data = {}) {
  return {
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
var \u547D\u4EE4\u5B57\u6BB5\u767D\u540D\u5355 = {
  UpdateWorld: ["type", "changes"],
  AppendRecentEvent: ["type", "event"],
  UpdatePlayerBase: ["type", "changes"],
  AdjustPlayerResource: ["type", "mode", "changes"],
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
var \u88C5\u5907\u6761\u76EE\u5B57\u6BB5 = ["\u540D\u79F0", "\u54C1\u8D28", "\u7C7B\u578B", "\u5148\u653B\u52A0\u503C", "\u653B\u51FB\u52A0\u503C", "\u9632\u5FA1DC\u52A0\u503C", "\u4F24\u5BB3\u51CF\u514D", "\u6548\u679C"];
var \u88C5\u5907\u680F\u5B57\u6BB5 = ["\u4E3B\u6B66\u5668", "\u526F\u6B66\u5668", "\u62A4\u7532", "\u5750\u9A91", "\u9970\u54C11", "\u9970\u54C12", "\u9970\u54C13"];
var \u6B66\u6280\u6761\u76EE\u5B57\u6BB5 = ["\u7B49\u7EA7", "\u7C7B\u578B", "\u6548\u679C", "\u719F\u7EC3\u5EA6", "\u4F53\u529B\u6D88\u8017"];
var \u4E13\u957F\u6761\u76EE\u5B57\u6BB5 = ["\u7B49\u7EA7", "\u6548\u679C", "\u52A0\u503C"];
var \u4E3B\u89D2\u5B57\u6BB5 = ["\u516D\u7EF4", "\u5F53\u524D\u751F\u547D\u503C", "\u5F53\u524D\u4F53\u529B\u503C", "\u88C5\u5907", "\u6B66\u6280", "\u4E13\u957F", "\u72B6\u6001", "\u7269\u54C1\u680F", "\u58F0\u671B", "\u91D1\u94B1", "\u79EF\u5206", "\u5B98\u804C", "\u7235\u4F4D", "\u540E\u5BAB\u548C\u8C10\u5EA6"];
var \u7269\u54C1\u680F\u5B57\u6BB5 = ["\u54C1\u8D28", "\u63CF\u8FF0", "\u6570\u91CF"];
var NPC\u5B57\u6BB5 = ["\u54C1\u8D28", "\u9635\u8425", "\u5B9A\u4F4D", "\u597D\u611F", "\u7B80\u8FF0", "\u7F81\u7ECA", "\u89D2\u8272\u6570\u636E", "\u6B66\u5C06\u4FE1\u606F", "\u7F8E\u4EBA\u5C5E\u6027"];
var \u6B66\u5C06\u4FE1\u606F\u5B57\u6BB5 = ["\u91CE\u5FC3\u503C", "\u6027\u683C", "\u5B98\u804C", "\u5F53\u524D\u72B6\u6001", "\u72B6\u6001\u63CF\u8FF0", "\u9A7B\u624E\u5730", "\u7279\u6280"];
var \u7F8E\u4EBA\u5C5E\u6027\u5B57\u6BB5 = ["\u4F9D\u8D56\u5EA6", "\u654F\u611F\u5EA6", "\u8D1E\u6D01\u5EA6", "\u4F4D\u4EFD", "\u6027\u683C", "\u5F53\u524D\u72B6\u6001"];
var \u4EFB\u52A1\u5B57\u6BB5 = ["\u7C7B\u578B", "\u72B6\u6001", "\u65F6\u9650", "\u76EE\u6807"];
var \u4EFB\u52A1\u76EE\u6807\u5B57\u6BB5 = ["\u7C7B\u578B", "\u72B6\u6001", "\u79EF\u5206", "\u5176\u4ED6\u5956\u52B1"];
var \u5546\u54C1\u5B57\u6BB5 = ["\u5206\u7C7B", "\u4EF7\u683C", "\u63CF\u8FF0"];
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
  for (const key of ["\u5148\u653B\u52A0\u503C", "\u653B\u51FB\u52A0\u503C", "\u9632\u5FA1DC\u52A0\u503C", "\u4F24\u5BB3\u51CF\u514D"]) {
    if (value[key] !== void 0) \u65AD\u8A00\u6570\u5B57(value[key], `${path}.${key}`);
  }
  if (value.\u6548\u679C !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u6548\u679C, `${path}.\u6548\u679C`);
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
  if (value.\u7B49\u7EA7 !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u7B49\u7EA7, \u679A\u4E3E.\u6B66\u6280\u7B49\u7EA7, `${path}.\u7B49\u7EA7`);
  if (value.\u7C7B\u578B !== void 0) \u65AD\u8A00\u679A\u4E3E\u503C(value.\u7C7B\u578B, \u679A\u4E3E.\u6B66\u6280\u7C7B\u578B, `${path}.\u7C7B\u578B`);
  if (value.\u6548\u679C !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u6548\u679C, `${path}.\u6548\u679C`);
  if (value.\u719F\u7EC3\u5EA6 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u719F\u7EC3\u5EA6, `${path}.\u719F\u7EC3\u5EA6`);
  if (value.\u4F53\u529B\u6D88\u8017 !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u4F53\u529B\u6D88\u8017, `${path}.\u4F53\u529B\u6D88\u8017`);
}
function \u6821\u9A8C\u4E13\u957F\u6761\u76EE(value, path) {
  \u65AD\u8A00\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, \u4E13\u957F\u6761\u76EE\u5B57\u6BB5, path);
  if (value.\u7B49\u7EA7 !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u7B49\u7EA7, `${path}.\u7B49\u7EA7`);
  if (value.\u6548\u679C !== void 0) \u65AD\u8A00\u5B57\u7B26\u4E32(value.\u6548\u679C, `${path}.\u6548\u679C`);
  if (value.\u52A0\u503C !== void 0) \u65AD\u8A00\u6570\u5B57(value.\u52A0\u503C, `${path}.\u52A0\u503C`);
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
function \u6821\u9A8CNPC\u66F4\u65B0(value, path) {
  \u65AD\u8A00\u975E\u7A7A\u5BF9\u8C61(value, path);
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(value, NPC\u5B57\u6BB5, path);
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
  if (typeof input === "string") {
    const parsed = JSON.parse(input);
    return \u89E3\u6790\u547D\u4EE4\u8F93\u5165(parsed);
  }
  const list = Array.isArray(input) ? input : [input];
  list.forEach((command, index) => \u6821\u9A8C\u547D\u4EE4(command, index));
  return list;
}
function \u6821\u9A8C\u547D\u4EE4(command, index = 0) {
  const path = `commands[${index}]`;
  \u65AD\u8A00\u5BF9\u8C61(command, path);
  \u65AD\u8A00(typeof command.type === "string", `${path}.type \u5FC5\u987B\u662F\u5B57\u7B26\u4E32`);
  \u65AD\u8A00(command.type in \u547D\u4EE4\u5B57\u6BB5\u767D\u540D\u5355, `${path}.type \u4E0D\u662F\u6709\u6548\u547D\u4EE4\u7C7B\u578B: ${String(command.type)}`);
  const allowedKeys = \u547D\u4EE4\u5B57\u6BB5\u767D\u540D\u5355[command.type];
  \u65AD\u8A00\u5B57\u6BB5\u767D\u540D\u5355(command, allowedKeys, path);
  \u65AD\u8A00\u65E0\u4E0B\u5212\u7EBF\u5B57\u6BB5(command, path);
  switch (command.type) {
    case "UpdateWorld":
      \u6821\u9A8C\u4E16\u754C\u66F4\u65B0(command.changes, `${path}.changes`);
      return;
    case "AppendRecentEvent":
      \u6821\u9A8C\u4E16\u754C\u4E8B\u4EF6\u8F93\u5165(command.event, `${path}.event`);
      return;
    case "UpdatePlayerBase":
      \u6821\u9A8C\u4E3B\u89D2\u66F4\u65B0(command.changes, `${path}.changes`);
      return;
    case "AdjustPlayerResource":
      if (command.mode !== void 0) {
        \u65AD\u8A00\u679A\u4E3E\u503C(command.mode, ["delta", "set"], `${path}.mode`);
      }
      \u6821\u9A8C\u8D44\u6E90\u53D8\u5316(command.changes, `${path}.changes`);
      return;
    case "UpsertNpc":
      \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
      if (command.createIfMissing !== void 0) {
        \u65AD\u8A00\u5E03\u5C14(command.createIfMissing, `${path}.createIfMissing`);
      }
      \u6821\u9A8CNPC\u66F4\u65B0(command.data, `${path}.data`);
      return;
    case "UpdateNpcRelation":
      \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
      if (command.mode !== void 0) {
        \u65AD\u8A00\u679A\u4E3E\u503C(command.mode, ["delta", "set"], `${path}.mode`);
      }
      \u65AD\u8A00(command.\u597D\u611F !== void 0 || command.\u7F81\u7ECA !== void 0, `${path} \u81F3\u5C11\u8981\u63D0\u4F9B \u597D\u611F \u6216 \u7F81\u7ECA`);
      if (command.\u597D\u611F !== void 0) \u65AD\u8A00\u6570\u5B57(command.\u597D\u611F, `${path}.\u597D\u611F`);
      if (command.\u7F81\u7ECA !== void 0) \u6821\u9A8C\u5B57\u7B26\u4E32\u6620\u5C04(command.\u7F81\u7ECA, `${path}.\u7F81\u7ECA`);
      return;
    case "RemoveNpc":
      \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
      return;
    case "UpsertQuest":
      \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
      if (command.createIfMissing !== void 0) {
        \u65AD\u8A00\u5E03\u5C14(command.createIfMissing, `${path}.createIfMissing`);
      }
      \u6821\u9A8C\u4EFB\u52A1\u66F4\u65B0(command.data, `${path}.data`);
      return;
    case "UpdateQuestState":
      \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
      \u65AD\u8A00\u679A\u4E3E\u503C(command.\u72B6\u6001, \u679A\u4E3E.\u4EFB\u52A1\u72B6\u6001, `${path}.\u72B6\u6001`);
      if (command.\u76EE\u6807 !== void 0) {
        \u6821\u9A8C\u4EFB\u52A1\u76EE\u6807\u6620\u5C04(command.\u76EE\u6807, `${path}.\u76EE\u6807`);
      }
      return;
    case "RemoveQuest":
      \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
      return;
    case "UpsertShopItem":
      \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
      if (command.createIfMissing !== void 0) {
        \u65AD\u8A00\u5E03\u5C14(command.createIfMissing, `${path}.createIfMissing`);
      }
      \u6821\u9A8C\u5546\u54C1\u6761\u76EE(command.data, `${path}.data`);
      return;
    case "RemoveShopItem":
      \u65AD\u8A00\u5B57\u7B26\u4E32(command.id, `${path}.id`);
      return;
  }
}
function \u521B\u5EFA\u547D\u4EE4\u6267\u884C\u5FEB\u7167(state) {
  return _.cloneDeep(state);
}

// src/storage.ts
var storage_exports = {};
__export(storage_exports, {
  CONTEXT_MACRO_KEY: () => CONTEXT_MACRO_KEY,
  STATE_ROOT_KEY: () => STATE_ROOT_KEY,
  \u4FDD\u5B58\u4E0A\u4E0B\u6587\u5B8F: () => \u4FDD\u5B58\u4E0A\u4E0B\u6587\u5B8F,
  \u4FDD\u5B58\u72B6\u6001: () => \u4FDD\u5B58\u72B6\u6001,
  \u521D\u59CB\u5316\u72B6\u6001: () => \u521D\u59CB\u5316\u72B6\u6001,
  \u52A0\u8F7D\u72B6\u6001: () => \u52A0\u8F7D\u72B6\u6001,
  \u66F4\u65B0\u72B6\u6001: () => \u66F4\u65B0\u72B6\u6001,
  \u8BFB\u53D6\u4E0A\u4E0B\u6587\u5B8F: () => \u8BFB\u53D6\u4E0A\u4E0B\u6587\u5B8F,
  \u8BFB\u53D6\u539F\u59CB\u72B6\u6001: () => \u8BFB\u53D6\u539F\u59CB\u72B6\u6001,
  \u8BFB\u53D6\u804A\u5929\u53D8\u91CF: () => \u8BFB\u53D6\u804A\u5929\u53D8\u91CF
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
function recompute\u5168\u5C40(state) {
  const next = _.cloneDeep(state);
  next.\u4E16\u754C = create\u4E16\u754C(next.\u4E16\u754C);
  next.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6 = next.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6.slice(-MAX_RECENT_EVENTS);
  next.\u4E3B\u89D2 = recompute\u4E3B\u89D2(next.\u4E3B\u89D2);
  next.NPC = _.mapValues(next.NPC || {}, (npc) => recomputeNPC(npc));
  next.\u4EFB\u52A1 = _.pickBy(next.\u4EFB\u52A1 || {}, (task) => ["\u53EF\u63A5\u53D6", "\u8FDB\u884C\u4E2D", "\u53EF\u63D0\u4EA4"].includes(task.\u72B6\u6001));
  next.meta.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
  return next;
}

// src/storage.ts
var STATE_ROOT_KEY = "sgbz_state";
var CONTEXT_MACRO_KEY = "sgbz_context";
function \u83B7\u53D6\u53D8\u91CF\u63A5\u53E3() {
  const helper = window.TavernHelper;
  if (!helper?.getVariables || !helper?.replaceVariables) {
    throw new Error("\u672A\u627E\u5230 TavernHelper.getVariables / replaceVariables\uFF0C\u65E0\u6CD5\u8BFB\u5199\u804A\u5929\u5B58\u6863");
  }
  return {
    getVariables: helper.getVariables,
    replaceVariables: helper.replaceVariables
  };
}
function \u8BFB\u53D6\u804A\u5929\u53D8\u91CF() {
  return \u83B7\u53D6\u53D8\u91CF\u63A5\u53E3().getVariables({ type: "chat" }) ?? {};
}
function \u8BFB\u53D6\u539F\u59CB\u72B6\u6001(rootKey = STATE_ROOT_KEY) {
  return _.get(\u8BFB\u53D6\u804A\u5929\u53D8\u91CF(), rootKey);
}
function \u8BFB\u53D6\u4E0A\u4E0B\u6587\u5B8F(rootKey = CONTEXT_MACRO_KEY) {
  return String(_.get(\u8BFB\u53D6\u804A\u5929\u53D8\u91CF(), rootKey, ""));
}
function \u52A0\u8F7D\u72B6\u6001(rootKey = STATE_ROOT_KEY) {
  const raw = \u8BFB\u53D6\u539F\u59CB\u72B6\u6001(rootKey);
  return recompute\u5168\u5C40(create\u521D\u59CB\u72B6\u6001(raw));
}
function \u4FDD\u5B58\u72B6\u6001(state, rootKey = STATE_ROOT_KEY) {
  const next = recompute\u5168\u5C40(create\u521D\u59CB\u72B6\u6001(state));
  const variables = \u8BFB\u53D6\u804A\u5929\u53D8\u91CF();
  _.set(variables, rootKey, next);
  \u83B7\u53D6\u53D8\u91CF\u63A5\u53E3().replaceVariables(variables, { type: "chat" });
  return next;
}
function \u4FDD\u5B58\u4E0A\u4E0B\u6587\u5B8F(content, rootKey = CONTEXT_MACRO_KEY) {
  const variables = \u8BFB\u53D6\u804A\u5929\u53D8\u91CF();
  _.set(variables, rootKey, String(content || ""));
  \u83B7\u53D6\u53D8\u91CF\u63A5\u53E3().replaceVariables(variables, { type: "chat" });
  return String(_.get(variables, rootKey, ""));
}
function \u521D\u59CB\u5316\u72B6\u6001(seed = {}, rootKey = STATE_ROOT_KEY) {
  return \u4FDD\u5B58\u72B6\u6001(create\u521D\u59CB\u72B6\u6001(seed), rootKey);
}
function \u66F4\u65B0\u72B6\u6001(updater, rootKey = STATE_ROOT_KEY) {
  const current = \u52A0\u8F7D\u72B6\u6001(rootKey);
  return \u4FDD\u5B58\u72B6\u6001(updater(current), rootKey);
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
        ...next.\u76EE\u6807[targetId] ?? { \u7C7B\u578B: "\u4E3B\u8981", \u72B6\u6001: "\u672A\u5B8C\u6210", \u79EF\u5206: 0, \u5176\u4ED6\u5956\u52B1: "" },
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
  const commands = \u89E3\u6790\u547D\u4EE4\u8F93\u5165(commandInput);
  const next = _.cloneDeep(state);
  for (const command of commands) {
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
  }
  return {
    state: recompute\u5168\u5C40(next),
    applied: commands
  };
}
function \u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4(state, commandInput, rootKey = STATE_ROOT_KEY) {
  const result = \u6267\u884C\u547D\u4EE4(state, commandInput);
  return {
    ...result,
    state: \u4FDD\u5B58\u72B6\u6001(result.state, rootKey)
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
  COMMAND_BLOCK_END: () => COMMAND_BLOCK_END,
  COMMAND_BLOCK_START: () => COMMAND_BLOCK_START,
  \u5305\u88C5\u547D\u4EE4\u5757: () => \u5305\u88C5\u547D\u4EE4\u5757,
  \u63D0\u53D6\u547D\u4EE4\u5757: () => \u63D0\u53D6\u547D\u4EE4\u5757,
  \u79FB\u9664\u547D\u4EE4\u5757: () => \u79FB\u9664\u547D\u4EE4\u5757,
  \u89E3\u6790\u547D\u4EE4\u5757: () => \u89E3\u6790\u547D\u4EE4\u5757
});
var COMMAND_BLOCK_START = "<SgCommandsStart>";
var COMMAND_BLOCK_END = "<SgCommandsEnd>";
function \u5305\u88C5\u547D\u4EE4\u5757(commands, space = 2) {
  const list = Array.isArray(commands) ? commands : [commands];
  return [COMMAND_BLOCK_START, JSON.stringify(list, null, space), COMMAND_BLOCK_END].join("\n");
}
function \u63D0\u53D6\u547D\u4EE4\u5757(replyText) {
  const start = replyText.indexOf(COMMAND_BLOCK_START);
  const end = replyText.indexOf(COMMAND_BLOCK_END);
  if (start < 0 || end < 0 || end < start) {
    return null;
  }
  return replyText.slice(start + COMMAND_BLOCK_START.length, end).trim();
}
function \u79FB\u9664\u547D\u4EE4\u5757(replyText) {
  const pattern = new RegExp(`${_.escapeRegExp(COMMAND_BLOCK_START)}[\\s\\S]*?${_.escapeRegExp(COMMAND_BLOCK_END)}`, "g");
  return replyText.replace(pattern, "").trim();
}
function \u89E3\u6790\u547D\u4EE4\u5757(replyText) {
  const commandsText = \u63D0\u53D6\u547D\u4EE4\u5757(replyText);
  if (!commandsText) {
    return {
      commandsText: null,
      commands: [],
      replyText
    };
  }
  const parsed = JSON.parse(commandsText);
  return {
    commandsText,
    commands: Array.isArray(parsed) ? parsed : [parsed],
    replyText: \u79FB\u9664\u547D\u4EE4\u5757(replyText)
  };
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
  return \u4FDD\u5B58\u4E0A\u4E0B\u6587\u5B8F(buildContextMacroText(state), macroKey);
}
function refreshContextMacroFromStorage(rootKey = STATE_ROOT_KEY, macroKey = CONTEXT_MACRO_KEY) {
  return refreshContextMacro(\u52A0\u8F7D\u72B6\u6001(rootKey), macroKey);
}
function extractCommands(replyText) {
  const parsed = \u89E3\u6790\u547D\u4EE4\u5757(replyText);
  return {
    commandsText: parsed.commandsText,
    commands: parsed.commandsText ? \u89E3\u6790\u547D\u4EE4\u8F93\u5165(parsed.commands) : [],
    cleanedReplyText: parsed.replyText
  };
}
function extractAndApplyCommands(replyText, state) {
  const extracted = extractCommands(replyText);
  if (extracted.commands.length === 0) {
    return {
      state: _.cloneDeep(state),
      applied: [],
      commandsText: null,
      cleanedReplyText: extracted.cleanedReplyText
    };
  }
  const result = \u6267\u884C\u547D\u4EE4(state, extracted.commands);
  return {
    ...result,
    commandsText: extracted.commandsText,
    cleanedReplyText: extracted.cleanedReplyText
  };
}
function extractApplyAndSaveCommands(replyText, state, rootKey = STATE_ROOT_KEY, macroKey = CONTEXT_MACRO_KEY) {
  const extracted = extractCommands(replyText);
  if (extracted.commands.length === 0) {
    refreshContextMacro(state, macroKey);
    return {
      state: _.cloneDeep(state),
      applied: [],
      commandsText: null,
      cleanedReplyText: extracted.cleanedReplyText
    };
  }
  const result = \u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4(state, extracted.commands, rootKey);
  refreshContextMacro(result.state, macroKey);
  return {
    ...result,
    commandsText: extracted.commandsText,
    cleanedReplyText: extracted.cleanedReplyText
  };
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
function renderSgbzContextMacro(rootKey = STATE_ROOT_KEY) {
  return buildInjectedContext(\u52A0\u8F7D\u72B6\u6001(rootKey));
}
function unregisterSgbzMacros() {
  const api = \u83B7\u53D6\u5B8F\u63A5\u53E3();
  for (const macro of \u5DF2\u6CE8\u518C\u5B8F) {
    macro.unregister();
    api.unregisterMacroLike?.(macro.regex);
  }
  \u5DF2\u6CE8\u518C\u5B8F = [];
}
function registerSgbzMacros(rootKey = STATE_ROOT_KEY) {
  unregisterSgbzMacros();
  const api = \u83B7\u53D6\u5B8F\u63A5\u53E3();
  const entry = api.registerMacroLike(SGBZ_CONTEXT_MACRO_REGEX, () => renderSgbzContextMacro(rootKey));
  \u5DF2\u6CE8\u518C\u5B8F.push({ regex: SGBZ_CONTEXT_MACRO_REGEX, unregister: entry.unregister });
}

// src/index.ts
var ThreeKingdomsStateKit = {
  \u7ED3\u6784: {
    create\u4E16\u754C,
    create\u4E3B\u89D2,
    createNPC,
    create\u4EFB\u52A1,
    create\u5546\u54C1\u6761\u76EE,
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
  \u91CD\u7B97: {
    recompute\u516D\u7EF4,
    recompute\u89D2\u8272\u6218\u6597\u6570\u636E,
    recompute\u7F8E\u4EBA\u5C5E\u6027,
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
  console.warn("[ThreeKingdomsStateKit] \u6CE8\u518C\u5B8F\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", error);
}
var index_default = ThreeKingdomsStateKit;
export {
  COMMAND_BLOCK_END,
  COMMAND_BLOCK_START,
  CONTEXT_MACRO_KEY,
  MAX_CONTEXT_NPCS,
  MAX_CONTEXT_QUESTS,
  MAX_CONTEXT_SHOP_ITEMS,
  MAX_RECENT_EVENTS,
  SGBZ_CONTEXT_MACRO_REGEX,
  STATE_ROOT_KEY,
  ThreeKingdomsStateKit,
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
  create\u521D\u59CB\u72B6\u6001,
  create\u5546\u54C1\u6761\u76EE,
  create\u6B66\u5C06\u4FE1\u606F,
  create\u6B66\u6280\u6761\u76EE,
  create\u72B6\u6001\u8BB0\u5F55,
  create\u7F8E\u4EBA\u5C5E\u6027,
  create\u88C5\u5907\u6761\u76EE,
  create\u88C5\u5907\u680F,
  create\u89D2\u8272\u6218\u6597\u6570\u636E,
  index_default as default,
  extractAndApplyCommands,
  extractApplyAndSaveCommands,
  extractCommands,
  recomputeNPC,
  recompute\u4E3B\u89D2,
  recompute\u5168\u5C40,
  recompute\u516D\u7EF4,
  recompute\u7F8E\u4EBA\u5C5E\u6027,
  recompute\u89D2\u8272\u6218\u6597\u6570\u636E,
  refreshContextMacro,
  refreshContextMacroFromStorage,
  registerSgbzMacros,
  renderSgbzContextMacro,
  unregisterSgbzMacros,
  \u4EA4\u60C5\u7B49\u7EA7,
  \u4F9D\u8D56\u7B49\u7EA7,
  \u4FDD\u5B58\u4E0A\u4E0B\u6587\u5B8F,
  \u4FDD\u5B58\u72B6\u6001,
  \u521B\u5EFA\u547D\u4EE4\u6267\u884C\u5FEB\u7167,
  \u521D\u59CB\u5316\u72B6\u6001,
  \u52A0\u8F7D\u72B6\u6001,
  \u5305\u88C5\u547D\u4EE4\u5757,
  \u548C\u8C10\u7B49\u7EA7,
  \u58F0\u671B\u79F0\u53F7,
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
  \u79FB\u9664\u547D\u4EE4\u5757,
  \u89E3\u6790\u547D\u4EE4\u5757,
  \u89E3\u6790\u547D\u4EE4\u8F93\u5165,
  \u8BA1\u7B97\u4F24\u52BF,
  \u8BA1\u7B97\u52A0\u503C,
  \u8BFB\u53D6\u4E0A\u4E0B\u6587\u5B8F,
  \u8BFB\u53D6\u539F\u59CB\u72B6\u6001,
  \u8BFB\u53D6\u804A\u5929\u53D8\u91CF,
  \u8D1E\u6D01\u7B49\u7EA7,
  \u9009\u62E9\u5546\u57CE\u6761\u76EE,
  \u9009\u62E9\u5F53\u524D\u5730\u70B9\u76F8\u5173NPC,
  \u9009\u62E9\u8FDB\u884C\u4E2D\u4EFB\u52A1,
  \u9650\u5236\u6570\u503C
};
