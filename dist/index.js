var F = {
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
    }, ps = {
        \u6751\u843D: {
            \u7A0E\u6536: 5,
            \u4EA7\u7CAE: 30,
            \u57CE\u9632\u4E0A\u9650: 20,
            \u9A7B\u519B\u4E0A\u9650: 500,
            \u9632\u5FA1\u7CFB\u6570: .3,
            \u6307\u4EE4\u69FD: 1
        },
        \u53BF\u57CE: {
            \u7A0E\u6536: 20,
            \u4EA7\u7CAE: 100,
            \u57CE\u9632\u4E0A\u9650: 50,
            \u9A7B\u519B\u4E0A\u9650: 3e3,
            \u9632\u5FA1\u7CFB\u6570: .6,
            \u6307\u4EE4\u69FD: 2
        },
        \u90E1\u57CE: {
            \u7A0E\u6536: 60,
            \u4EA7\u7CAE: 250,
            \u57CE\u9632\u4E0A\u9650: 70,
            \u9A7B\u519B\u4E0A\u9650: 8e3,
            \u9632\u5FA1\u7CFB\u6570: .8,
            \u6307\u4EE4\u69FD: 3
        },
        \u5DDE\u57CE: {
            \u7A0E\u6536: 150,
            \u4EA7\u7CAE: 500,
            \u57CE\u9632\u4E0A\u9650: 85,
            \u9A7B\u519B\u4E0A\u9650: 2e4,
            \u9632\u5FA1\u7CFB\u6570: 1,
            \u6307\u4EE4\u69FD: 4
        },
        \u96C4\u57CE: {
            \u7A0E\u6536: 300,
            \u4EA7\u7CAE: 800,
            \u57CE\u9632\u4E0A\u9650: 95,
            \u9A7B\u519B\u4E0A\u9650: 4e4,
            \u9632\u5FA1\u7CFB\u6570: 1.3,
            \u6307\u4EE4\u69FD: 5
        },
        \u5E1D\u90FD: {
            \u7A0E\u6536: 500,
            \u4EA7\u7CAE: 1200,
            \u57CE\u9632\u4E0A\u9650: 100,
            \u9A7B\u519B\u4E0A\u9650: 8e4,
            \u9632\u5FA1\u7CFB\u6570: 1.6,
            \u6307\u4EE4\u69FD: 6
        }
    }, $o = {\u65B0\u5175: .6, \u666E\u901A: .8, \u8001\u5175: 1, \u7CBE\u9510: 1.3, \u7279\u6B8A\u5175\u79CD: 1.8},
    Io = {\u7B80\u964B: .7, \u666E\u901A: .85, \u7CBE\u826F: 1, \u4E0A\u7B49: 1.15, \u7CBE\u9510: 1.3},
    Lo = {\u65B0\u5175: 25, \u666E\u901A: 40, \u8001\u5175: 65, \u7CBE\u9510: 100, \u7279\u6B8A\u5175\u79CD: 250},
    ds = {
        \u65E0: {\u653B\u51FB: 1, \u9632\u5FA1: 1},
        \u950B\u77E2\u9635: {\u653B\u51FB: 1.15, \u9632\u5FA1: .9},
        \u9E64\u7FFC\u9635: {\u653B\u51FB: 1.1, \u9632\u5FA1: 1},
        \u9C7C\u9CDE\u9635: {\u653B\u51FB: .95, \u9632\u5FA1: 1.15},
        \u65B9\u5706\u9635: {\u653B\u51FB: 1, \u9632\u5FA1: 1.1},
        \u957F\u86C7\u9635: {\u653B\u51FB: 1.05, \u9632\u5FA1: .95},
        \u96C1\u884C\u9635: {\u653B\u51FB: 1.1, \u9632\u5FA1: .95},
        \u5043\u6708\u9635: {\u653B\u51FB: 1.05, \u9632\u5FA1: 1.05}
    };

function K(e, t = 0) {
    let n = Number(e);
    return Number.isFinite(n) ? n : t
}

function Z(e, t, n) {
    return _.clamp(K(e), t, n)
}

function Ot(e) {
    return e <= 20 ? Math.floor(e * .3) : e <= 40 ? Math.floor(e * .4) : e <= 60 ? Math.floor(e * .5) : e <= 80 ? Math.floor(e * .6) : e <= 90 ? Math.floor(e * .7) : e <= 95 ? Math.floor(e * .8) : e <= 99 ? Math.floor(e * .9) : e
}

function Ho(e, t) {
    if (t <= 0) return {_\u4F24\u52BF: "\u5B8C\u597D", _\u6218\u6597\u51CF\u503C: 0};
    if (e <= 0) return {_\u4F24\u52BF: "\u6FD2\u6B7B", _\u6218\u6597\u51CF\u503C: -999};
    let n = e / t * 100;
    return n <= 25 ? {
        _\u4F24\u52BF: "\u91CD\u4F24",
        _\u6218\u6597\u51CF\u503C: -15
    } : n <= 50 ? {
        _\u4F24\u52BF: "\u4E2D\u4F24",
        _\u6218\u6597\u51CF\u503C: -10
    } : n <= 75 ? {_\u4F24\u52BF: "\u8F7B\u4F24", _\u6218\u6597\u51CF\u503C: -5} : {
        _\u4F24\u52BF: "\u5B8C\u597D",
        _\u6218\u6597\u51CF\u503C: 0
    }
}

function Fo(e) {
    return e <= 12 ? "\u65E0\u540D\u5C0F\u5352" : e <= 25 ? "\u7565\u6709\u540D\u6C14" : e <= 37 ? "\u5C0F\u6709\u540D\u6C14" : e <= 50 ? "\u540D\u58F0\u5728\u5916" : e <= 62 ? "\u5A01\u540D\u8FDC\u64AD" : e <= 75 ? "\u5929\u4E0B\u95FB\u540D" : e <= 87 ? "\u540D\u9707\u534E\u590F" : "\u5343\u53E4\u7559\u540D"
}

function Uo(e) {
    return e <= 19 ? "\u53DB\u79BB" : e <= 39 ? "\u52A8\u6447" : e <= 59 ? "\u666E\u901A" : e <= 79 ? "\u5FE0\u8BDA" : "\u6B7B\u5FE0"
}

function Bo(e) {
    return e <= 19 ? "\u538C\u6076" : e <= 39 ? "\u666E\u901A" : e <= 59 ? "\u597D\u611F" : e <= 79 ? "\u631A\u7231" : "\u6C89\u6EBA"
}

function jo(e) {
    return e <= 19 ? "\u538C\u6076" : e <= 39 ? "\u666E\u901A" : e <= 59 ? "\u53CB\u5584" : e <= 79 ? "\u4FE1\u8D56" : "\u631A\u53CB"
}

function Ko(e) {
    return e <= 14 ? "\u6B7B\u654C" : e <= 29 ? "\u654C\u5BF9" : e <= 44 ? "\u654C\u89C6" : e <= 59 ? "\u4E2D\u7ACB" : e <= 74 ? "\u53CB\u5584" : e <= 89 ? "\u540C\u76DF" : "\u9644\u5EB8"
}

function Wo(e) {
    return e <= 19 ? "\u5D29\u6E83" : e <= 39 ? "\u4F4E\u843D" : e <= 59 ? "\u666E\u901A" : e <= 79 ? "\u9AD8\u6602" : "\u72C2\u70ED"
}

function zo(e) {
    return e <= 19 ? "\u7CBE\u529B\u5145\u6C9B" : e <= 39 ? "\u8F7B\u5EA6\u75B2\u60EB" : e <= 59 ? "\u4E2D\u5EA6\u75B2\u60EB" : e <= 79 ? "\u91CD\u5EA6\u75B2\u60EB" : "\u7CBE\u75B2\u529B\u7AED"
}

function Go(e) {
    return e <= 19 ? "\u65E0\u4F9D\u8D56" : e <= 39 ? "\u8F7B\u5FAE\u4F9D\u8D56" : e <= 59 ? "\u4E2D\u7B49\u4F9D\u8D56" : e <= 79 ? "\u4E25\u91CD\u4F9D\u8D56" : "\u5B8C\u5168\u4F9D\u8D56"
}

function Yo(e) {
    return e <= 19 ? "\u8FDF\u949D" : e <= 39 ? "\u666E\u901A" : e <= 59 ? "\u654F\u611F" : e <= 79 ? "\u9AD8\u5EA6\u654F\u611F" : "\u8D85\u654F\u611F"
}

function qo(e) {
    return e <= 19 ? "\u653E\u8361" : e <= 39 ? "\u5F00\u653E" : e <= 59 ? "\u666E\u901A" : e <= 79 ? "\u4FDD\u5B88" : "\u8D1E\u70C8"
}

function Jo(e) {
    return e <= 39 ? "\u6DF7\u4E71" : e <= 59 ? "\u7D27\u5F20" : e <= 79 ? "\u5E73\u7A33" : "\u548C\u7766"
}

function Xo(e) {
    return e <= 19 ? .3 : e <= 39 ? .6 : e <= 59 ? .8 : e <= 79 ? 1 : 1.2
}

function Qo(e) {
    return e <= 19 ? 1 : e <= 39 ? .9 : e <= 59 ? .75 : e <= 79 ? .6 : .4
}

function Zo(e) {
    return e <= 30 ? 1 + e / 100 : 1.3 + (e - 30) / 60
}

function ei(e) {
    return Object.values(e || {}).reduce((n, r) => (!r || r === "\u65E0" || (n.\u5148\u653B += K(r.\u5148\u653B\u52A0\u503C), n.\u653B\u51FB += K(r.\u653B\u51FB\u52A0\u503C), n.\u9632\u5FA1DC += K(r.\u9632\u5FA1DC\u52A0\u503C), n.\u51CF\u514D += K(r.\u4F24\u5BB3\u51CF\u514D)), n), {
        \u5148\u653B: 0,
        \u653B\u51FB: 0,
        \u9632\u5FA1DC: 0,
        \u51CF\u514D: 0
    })
}

function Il(e = {}) {
    return {
        \u6B66\u529B: Z(e.\u6B66\u529B, 0, 120),
        \u667A\u529B: Z(e.\u667A\u529B, 0, 120),
        \u7EDF\u7387: Z(e.\u7EDF\u7387, 0, 120),
        \u653F\u6CBB: Z(e.\u653F\u6CBB, 0, 120),
        \u9B45\u529B: Z(e.\u9B45\u529B, 0, 120),
        \u4F53\u8D28: Z(e.\u4F53\u8D28, 0, 120)
    }
}

function Ll(e = {}) {
    return {
        \u540D\u79F0: String(e.\u540D\u79F0 || ""),
        \u54C1\u8D28: F.\u88C5\u5907\u54C1\u8D28.includes(e.\u54C1\u8D28) ? e.\u54C1\u8D28 : "\u51E1\u54C1",
        \u7C7B\u578B: String(e.\u7C7B\u578B || ""),
        \u63CF\u8FF0: String(e.\u63CF\u8FF0 || ""),
        \u4F24\u5BB3\u9AB0: String(e.\u4F24\u5BB3\u9AB0 || ""),
        \u5148\u653B\u52A0\u503C: K(e.\u5148\u653B\u52A0\u503C),
        \u653B\u51FB\u52A0\u503C: K(e.\u653B\u51FB\u52A0\u503C),
        \u9632\u5FA1DC\u52A0\u503C: K(e.\u9632\u5FA1DC\u52A0\u503C),
        \u4F24\u5BB3\u51CF\u514D: K(e.\u4F24\u5BB3\u51CF\u514D),
        \u5176\u4ED6\u6548\u679C: String(e.\u5176\u4ED6\u6548\u679C || "")
    }
}

function Hl(e = {}) {
    let t = n => n && n !== "\u65E0" ? Ll(n) : "\u65E0";
    return {
        \u4E3B\u6B66\u5668: t(e.\u4E3B\u6B66\u5668),
        \u526F\u6B66\u5668: t(e.\u526F\u6B66\u5668),
        \u62A4\u7532: t(e.\u62A4\u7532),
        \u5750\u9A91: t(e.\u5750\u9A91),
        \u9970\u54C11: t(e.\u9970\u54C11),
        \u9970\u54C12: t(e.\u9970\u54C12),
        \u9970\u54C13: t(e.\u9970\u54C13)
    }
}

function Fl(e = {}) {
    return _.mapValues(e, t => ({
        \u6548\u679C: String(t?.\u6548\u679C || ""),
        \u5269\u4F59: String(t?.\u5269\u4F59 || "\u6C38\u4E45")
    }))
}

function Ul(e = {}, {\u5B8C\u6574: t = !0} = {}) {
    return {
        \u540D\u79F0: String(e.\u540D\u79F0 || ""),
        \u7B49\u7EA7: F.\u6B66\u6280\u7B49\u7EA7.includes(e.\u7B49\u7EA7) ? e.\u7B49\u7EA7 : "\u5165\u95E8",
        \u7C7B\u578B: F.\u6B66\u6280\u7C7B\u578B.includes(e.\u7C7B\u578B) ? e.\u7C7B\u578B : "\u653B\u51FB",
        \u6548\u679C: String(e.\u6548\u679C || ""), ...t ? {
            \u719F\u7EC3\u5EA6: Z(e.\u719F\u7EC3\u5EA6, 0, 100),
            \u4F53\u529B\u6D88\u8017: K(e.\u4F53\u529B\u6D88\u8017)
        } : {}
    }
}

function Bl(e = {}) {
    return {
        \u540D\u79F0: String(e.\u540D\u79F0 || ""),
        \u7B49\u7EA7: String(e.\u7B49\u7EA7 || ""),
        \u6548\u679C: String(e.\u6548\u679C || "")
    }
}

function ti(e = {}, {\u5B8C\u6574: t = !1} = {}) {
    return {
        \u516D\u7EF4: Il(e.\u516D\u7EF4),
        \u5F53\u524D\u751F\u547D\u503C: K(e.\u5F53\u524D\u751F\u547D\u503C),
        \u5F53\u524D\u4F53\u529B\u503C: K(e.\u5F53\u524D\u4F53\u529B\u503C),
        \u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210: K(e.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210),
        \u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210: K(e.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210),
        \u88C5\u5907: Hl(e.\u88C5\u5907),
        \u6B66\u6280: _.mapValues(e.\u6B66\u6280 || {}, n => Ul(n, {\u5B8C\u6574: t})),
        \u4E13\u957F: _.mapValues(e.\u4E13\u957F || {}, n => Bl(n)),
        \u72B6\u6001: Fl(e.\u72B6\u6001)
    }
}

function mt(e = {}) {
    return {
        \u7B49\u7EA7: F.\u57CE\u6C60\u7B49\u7EA7.includes(e.\u7B49\u7EA7) ? e.\u7B49\u7EA7 : "\u6751\u843D",
        \u57CE\u9632: Math.max(0, K(e.\u57CE\u9632)),
        \u4EBA\u53E3: Math.max(0, K(e.\u4EBA\u53E3)),
        \u519C\u4E1A: Z(e.\u519C\u4E1A, 0, 100),
        \u5546\u4E1A: Z(e.\u5546\u4E1A, 0, 100),
        \u6C11\u5FC3: Z(e.\u6C11\u5FC3, 0, 100),
        \u6CBB\u5B89: Z(e.\u6CBB\u5B89, 0, 100),
        \u7E41\u8363\u5EA6: Z(e.\u7E41\u8363\u5EA6, 0, 100),
        \u592A\u5B88: String(e.\u592A\u5B88 || "\u65E0"),
        \u8BBE\u65BD: Array.isArray(e.\u8BBE\u65BD) ? e.\u8BBE\u65BD.map(t => String(t || "")) : []
    }
}

function It(e = {}) {
    return {
        \u5175\u79CD: String(e.\u5175\u79CD || ""),
        \u7B49\u7EA7: F.\u519B\u961F\u7B49\u7EA7.includes(e.\u7B49\u7EA7) ? e.\u7B49\u7EA7 : "\u65B0\u5175",
        \u5175\u529B: Math.max(0, K(e.\u5175\u529B)),
        \u58EB\u6C14: Z(e.\u58EB\u6C14, 0, 100),
        \u75B2\u60EB: Z(e.\u75B2\u60EB, 0, 100),
        \u88C5\u5907\u7B49\u7EA7: F.\u519B\u961F\u88C5\u5907\u7B49\u7EA7.includes(e.\u88C5\u5907\u7B49\u7EA7) ? e.\u88C5\u5907\u7B49\u7EA7 : "\u666E\u901A",
        \u7EDF\u5C5E\u5C06\u9886: String(e.\u7EDF\u5C5E\u5C06\u9886 || ""),
        \u9A7B\u624E\u5730: String(e.\u9A7B\u624E\u5730 || ""),
        \u8BAD\u7EC3\u8FDB\u5EA6: Math.max(0, K(e.\u8BAD\u7EC3\u8FDB\u5EA6)),
        \u9635\u578B: F.\u9635\u578B.includes(e.\u9635\u578B) ? e.\u9635\u578B : "\u65E0"
    }
}

function on(e = {}) {
    return {
        \u5F53\u524D\u7814\u7A76: String(e.\u5F53\u524D\u7814\u7A76 || "\u65E0"),
        \u7814\u7A76\u8FDB\u5EA6: Math.max(0, K(e.\u7814\u7A76\u8FDB\u5EA6)),
        \u5BCC\u56FD: Z(e.\u5BCC\u56FD, 0, 5),
        \u5F3A\u5175: Z(e.\u5F3A\u5175, 0, 5),
        \u9738\u9053: Z(e.\u9738\u9053, 0, 5),
        \u738B\u9053: Z(e.\u738B\u9053, 0, 5)
    }
}

function st(e = {}) {
    return {
        \u540D\u79F0: String(e.\u540D\u79F0 || "\u65E0"),
        \u89C4\u6A21: F.\u52BF\u529B\u89C4\u6A21.includes(e.\u89C4\u6A21) ? e.\u89C4\u6A21 : "\u65E0",
        \u6B63\u7EDF\u6027: Z(e.\u6B63\u7EDF\u6027, 0, 100),
        \u60C5\u62A5\u7F51: Z(e.\u60C5\u62A5\u7F51, 0, 100),
        \u91D1\u94B1: Math.max(0, K(e.\u91D1\u94B1)),
        \u7CAE\u8349: Math.max(0, K(e.\u7CAE\u8349)),
        \u57CE\u6C60: _.mapValues(e.\u57CE\u6C60 || {}, t => mt(t)),
        \u519B\u961F: _.mapValues(e.\u519B\u961F || {}, t => It(t)),
        \u5916\u4EA4: _.mapValues(e.\u5916\u4EA4 || {}, t => Z(t, 0, 100)),
        \u653F\u7B56: on(e.\u653F\u7B56)
    }
}

function jl(e) {
    if (!_.isPlainObject(e)) return !1;
    let t = e;
    return ["\u540D\u79F0", "\u89C4\u6A21", "\u6B63\u7EDF\u6027", "\u60C5\u62A5\u7F51", "\u91D1\u94B1", "\u7CAE\u8349", "\u57CE\u6C60", "\u519B\u961F", "\u5916\u4EA4", "\u653F\u7B56"].some(n => n in t)
}

function an(e = {}) {
    if (jl(e)) {
        let t = st(e);
        return {[String(t.\u540D\u79F0 || "default_faction").trim() || "default_faction"]: t}
    }
    return _.mapValues(e || {}, t => st(t))
}

function Kl(e = {}) {
    return {
        \u91CE\u5FC3\u503C: Z(e.\u91CE\u5FC3\u503C, 0, 100),
        \u6027\u683C: F.\u6B66\u5C06\u6027\u683C.includes(e.\u6027\u683C) ? e.\u6027\u683C : "\u4E49\u58EB",
        \u5B98\u804C: String(e.\u5B98\u804C || "\u65E0"),
        \u5F53\u524D\u72B6\u6001: F.\u6B66\u5C06\u72B6\u6001.includes(e.\u5F53\u524D\u72B6\u6001) ? e.\u5F53\u524D\u72B6\u6001 : "\u5F85\u547D",
        \u72B6\u6001\u63CF\u8FF0: String(e.\u72B6\u6001\u63CF\u8FF0 || ""),
        \u9A7B\u624E\u5730: String(e.\u9A7B\u624E\u5730 || "\u65E0"),
        \u7279\u6280: _.mapValues(e.\u7279\u6280 || {}, t => String(t || ""))
    }
}

function Wl(e = {}) {
    return {
        \u4F9D\u8D56\u5EA6: Z(e.\u4F9D\u8D56\u5EA6, 0, 100),
        \u654F\u611F\u5EA6: Z(e.\u654F\u611F\u5EA6, 0, 100),
        \u8D1E\u6D01\u5EA6: Z(e.\u8D1E\u6D01\u5EA6, 0, 100),
        \u4F4D\u4EFD: F.\u7F8E\u4EBA\u4F4D\u4EFD.includes(e.\u4F4D\u4EFD) ? e.\u4F4D\u4EFD : "\u672A\u7EB3\u5165",
        \u6027\u683C: F.\u7F8E\u4EBA\u6027\u683C.includes(e.\u6027\u683C) ? e.\u6027\u683C : "\u6E29\u67D4",
        \u5F53\u524D\u72B6\u6001: F.\u7F8E\u4EBA\u72B6\u6001.includes(e.\u5F53\u524D\u72B6\u6001) ? e.\u5F53\u524D\u72B6\u6001 : "\u6B63\u5E38"
    }
}

function wt(e = {}) {
    return {
        \u540D\u79F0: String(e.\u540D\u79F0 || ""),
        \u54C1\u8D28: F.\u54C1\u8D28.includes(e.\u54C1\u8D28) ? e.\u54C1\u8D28 : "N",
        \u9635\u8425: String(e.\u9635\u8425 || ""),
        \u5B9A\u4F4D: String(e.\u5B9A\u4F4D || ""),
        \u597D\u611F: Z(e.\u597D\u611F, 0, 100),
        \u7B80\u8FF0: String(e.\u7B80\u8FF0 || ""),
        \u7F81\u7ECA: _.mapValues(e.\u7F81\u7ECA || {}, t => String(t || "")),
        \u89D2\u8272\u6570\u636E: e.\u89D2\u8272\u6570\u636E ? ti(e.\u89D2\u8272\u6570\u636E) : void 0,
        \u6B66\u5C06\u4FE1\u606F: e.\u6B66\u5C06\u4FE1\u606F ? Kl(e.\u6B66\u5C06\u4FE1\u606F) : void 0,
        \u7F8E\u4EBA\u5C5E\u6027: e.\u7F8E\u4EBA\u5C5E\u6027 ? Wl(e.\u7F8E\u4EBA\u5C5E\u6027) : void 0
    }
}

function zl(e = {}) {
    return {
        \u7C7B\u578B: F.\u4EFB\u52A1\u76EE\u6807\u7C7B\u578B.includes(e.\u7C7B\u578B) ? e.\u7C7B\u578B : "\u4E3B\u8981",
        \u72B6\u6001: F.\u4EFB\u52A1\u76EE\u6807\u72B6\u6001.includes(e.\u72B6\u6001) ? e.\u72B6\u6001 : "\u672A\u5B8C\u6210",
        \u63CF\u8FF0: String(e.\u63CF\u8FF0 || ""),
        \u79EF\u5206: K(e.\u79EF\u5206),
        \u5176\u4ED6\u5956\u52B1: String(e.\u5176\u4ED6\u5956\u52B1 || "")
    }
}

function St(e = {}) {
    return {
        \u540D\u79F0: String(e.\u540D\u79F0 || ""),
        \u7C7B\u578B: F.\u4EFB\u52A1\u7C7B\u578B.includes(e.\u7C7B\u578B) ? e.\u7C7B\u578B : "\u652F\u7EBF",
        \u72B6\u6001: F.\u4EFB\u52A1\u72B6\u6001.includes(e.\u72B6\u6001) ? e.\u72B6\u6001 : "\u53EF\u63A5\u53D6",
        \u65F6\u9650: String(e.\u65F6\u9650 || "\u65E0"),
        \u76EE\u6807: _.mapValues(e.\u76EE\u6807 || {}, t => zl(t))
    }
}

function Lt(e = {}) {
    return {
        \u540D\u79F0: String(e.\u540D\u79F0 || ""),
        \u5206\u7C7B: F.\u5546\u54C1\u5206\u7C7B.includes(e.\u5206\u7C7B) ? e.\u5206\u7C7B : "\u8D44\u6E90",
        \u4EF7\u683C: Math.max(0, K(e.\u4EF7\u683C)),
        \u63CF\u8FF0: String(e.\u63CF\u8FF0 || "")
    }
}

function Ct(e = {}) {
    return {
        \u5F53\u524D\u65F6\u95F4: String(e.\u5F53\u524D\u65F6\u95F4 || ""),
        \u5F53\u524D\u5730\u70B9: String(e.\u5F53\u524D\u5730\u70B9 || ""),
        \u5F53\u524D\u5267\u672C: F.\u5267\u672C.includes(e.\u5F53\u524D\u5267\u672C) ? e.\u5F53\u524D\u5267\u672C : "S1\u9EC4\u5DFE\u8D77\u4E49",
        \u5929\u6C14: String(e.\u5929\u6C14 || "\u6674"),
        \u8FD1\u671F\u4E8B\u4EF6: Array.isArray(e.\u8FD1\u671F\u4E8B\u4EF6) ? e.\u8FD1\u671F\u4E8B\u4EF6.map(t => ({
            \u4E8B\u4EF6\u540D: String(t?.\u4E8B\u4EF6\u540D || ""),
            \u7B80\u8FF0: String(t?.\u7B80\u8FF0 || ""),
            \u65E5\u671F: String(t?.\u65E5\u671F || "")
        })) : []
    }
}

function ln(e = {}) {
    return {
        ...ti(e, {\u5B8C\u6574: !0}),
        \u7269\u54C1\u680F: _.mapValues(e.\u7269\u54C1\u680F || {}, t => ({
            \u54C1\u8D28: F.\u88C5\u5907\u54C1\u8D28.includes(t?.\u54C1\u8D28) ? t?.\u54C1\u8D28 : "\u65E0",
            \u63CF\u8FF0: String(t?.\u63CF\u8FF0 || ""),
            \u6570\u91CF: Math.max(0, K(t?.\u6570\u91CF, 1))
        })),
        \u58F0\u671B: Z(e.\u58F0\u671B, 0, 100),
        \u91D1\u94B1: Math.max(0, K(e.\u91D1\u94B1)),
        \u79EF\u5206: Math.max(0, K(e.\u79EF\u5206)),
        \u5B98\u804C: String(e.\u5B98\u804C || "\u65E0"),
        \u7235\u4F4D: String(e.\u7235\u4F4D || "\u65E0"),
        \u540E\u5BAB\u548C\u8C10\u5EA6: Z(e.\u540E\u5BAB\u548C\u8C10\u5EA6, 0, 100)
    }
}

function cn(e = {}) {
    return {
        meta: {schemaVersion: "three-kingdoms-v1", scriptVersion: "draft-ts", updatedAt: ""},
        \u4E16\u754C: Ct(e.\u4E16\u754C),
        \u4E3B\u89D2: ln(e.\u4E3B\u89D2),
        \u52BF\u529B: an(e.\u52BF\u529B),
        NPC: _.mapValues(e.NPC || {}, t => wt(t)),
        \u4EFB\u52A1: _.mapValues(e.\u4EFB\u52A1 || {}, t => St(t)),
        \u5546\u57CE: _.mapValues(e.\u5546\u57CE || {}, t => Lt(t))
    }
}

var gs = "[ThreeKingdomsStateKit]", Ht = !1;

function Zn(e, t) {
    return t ? `${gs}[${t}][${e}]` : `${gs}[${e}]`
}

function Gl(e) {
    if (e instanceof Error) return e.stack || `${e.name}: ${e.message}`;
    if (typeof e == "string") return e;
    if (e === void 0) return "";
    try {
        return JSON.stringify(e, null, 2)
    } catch {
        return String(e)
    }
}

function er(e, t) {
    return t === void 0 ? e : `${e}
${Gl(t)}`
}

function tr(e) {
    return Ht = !!e, console.log(`${gs}[debug] ${Ht ? "enabled" : "disabled"}`), Ht
}

function nr() {
    return Ht
}

function se(e, t, n) {
    Ht && console.info(Zn(e, "info"), er(t, n))
}

function m(e, t, n) {
    Ht && console.log(Zn(e), er(t, n))
}

function fe(e, t, n) {
    console.warn(Zn(e, "warn"), er(t, n))
}

function ye(e, t, n) {
    console.error(Zn(e, "error"), er(t, n))
}

function $e(e) {
    return {
        \u4E16\u754C: {
            \u5F53\u524D\u65F6\u95F4: e.\u4E16\u754C?.\u5F53\u524D\u65F6\u95F4 || "",
            \u5F53\u524D\u5730\u70B9: e.\u4E16\u754C?.\u5F53\u524D\u5730\u70B9 || "",
            \u5F53\u524D\u5267\u672C: e.\u4E16\u754C?.\u5F53\u524D\u5267\u672C || "",
            \u8FD1\u671F\u4E8B\u4EF6\u6570: e.\u4E16\u754C?.\u8FD1\u671F\u4E8B\u4EF6?.length || 0
        },
        \u4E3B\u89D2: {
            \u5F53\u524D\u751F\u547D\u503C: e.\u4E3B\u89D2?.\u5F53\u524D\u751F\u547D\u503C ?? 0,
            \u5F53\u524D\u4F53\u529B\u503C: e.\u4E3B\u89D2?.\u5F53\u524D\u4F53\u529B\u503C ?? 0,
            \u91D1\u94B1: e.\u4E3B\u89D2?.\u91D1\u94B1 ?? 0,
            \u79EF\u5206: e.\u4E3B\u89D2?.\u79EF\u5206 ?? 0,
            \u58F0\u671B: e.\u4E3B\u89D2?.\u58F0\u671B ?? 0,
            \u5B98\u804C: e.\u4E3B\u89D2?.\u5B98\u804C || "",
            \u7235\u4F4D: e.\u4E3B\u89D2?.\u7235\u4F4D || ""
        },
        \u52BF\u529B\u6570\u91CF: Object.keys(e.\u52BF\u529B || {}).length,
        NPC\u6570\u91CF: Object.keys(e.NPC || {}).length,
        \u4EFB\u52A1\u6570\u91CF: Object.keys(e.\u4EFB\u52A1 || {}).length,
        \u5546\u57CE\u6570\u91CF: Object.keys(e.\u5546\u57CE || {}).length,
        updatedAt: e.meta?.updatedAt || ""
    }
}

function J(e) {
    if (Array.isArray(e)) return {type: "array", length: e.length};
    if (_.isPlainObject(e)) {
        let t = Object.keys(e);
        return {type: "object", keys: t, keyCount: t.length}
    }
    return typeof e == "string" ? {type: "string", length: e.length, preview: e.slice(0, 120)} : e
}

var hs = "<UpdateVariable>", ri = "</UpdateVariable>", Yl = "<Analysis>", ql = "</Analysis>", ms = "<Commands>",
    si = "</Commands>", ni = "<PlayerOptions>", Jl = "</PlayerOptions>";

function oi(e, t = "", n = 2) {
    let r = Array.isArray(e) ? e : [e];
    return [hs, Yl, t, ql, ms, JSON.stringify(r, null, n), si, ri].join(`
`)
}

function Xl(e) {
    let t = e.indexOf(hs), n = e.indexOf(ri);
    if (m("protocol", "\u626B\u63CF UpdateVariable \u5305\u88C5", {
        hasStart: t >= 0,
        hasEnd: n >= 0,
        reply: J(e)
    }), t < 0 || n < 0 || n < t) return null;
    let r = e.slice(t + hs.length, n).trim();
    return m("protocol", "\u63D0\u53D6\u5230 UpdateVariable \u5185\u5BB9", J(r)), r
}

function Ql(e) {
    let t = e.indexOf(ni), n = e.indexOf(Jl);
    if (m("protocol", "\u626B\u63CF PlayerOptions \u5305\u88C5", {
        hasStart: t >= 0,
        hasEnd: n >= 0,
        reply: J(e)
    }), t < 0 || n < 0 || n < t) return null;
    let r = e.slice(t + ni.length, n).trim();
    return m("protocol", "\u63D0\u53D6\u5230 PlayerOptions \u5185\u5BB9", J(r)), r
}

function Zl(e) {
    let t = Xl(e);
    if (!t) return m("protocol", "\u672A\u63D0\u53D6\u5230 UpdateVariable \u5185\u5BB9"), null;
    let n = t.indexOf(ms), r = t.indexOf(si);
    if (m("protocol", "\u626B\u63CF Commands \u5305\u88C5", {
        hasStart: n >= 0,
        hasEnd: r >= 0,
        block: J(t)
    }), n < 0 || r < 0 || r < n) return null;
    let s = t.slice(n + ms.length, r).trim();
    return m("protocol", "\u63D0\u53D6\u5230 Commands \u5185\u5BB9", J(s)), s
}

function rr(e) {
    let t = Zl(e);
    if (!t) return m("protocol", "\u672A\u627E\u5230\u53EF\u89E3\u6790\u7684\u547D\u4EE4\u5757"), {
        commandsText: null,
        commands: [],
        replyText: e
    };
    try {
        let n = JSON.parse(t), r = Array.isArray(n) ? n : [n];
        return m("protocol", "\u547D\u4EE4\u5757 JSON \u89E3\u6790\u6210\u529F", {
            count: r.length,
            firstType: r[0]?.type ?? null
        }), {commandsText: t, commands: r, replyText: e}
    } catch (n) {
        throw ye("protocol", "\u547D\u4EE4\u5757 JSON \u89E3\u6790\u5931\u8D25", n), n
    }
}

function sr(e) {
    return String(e || "").replace(/\s*<UpdateVariable>[\s\S]*?<\/UpdateVariable>\s*/gi, `
`).trim()
}

function ii(e) {
    return String(e || "").replace(/\s*<PlayerOptions>[\s\S]*?<\/PlayerOptions>\s*/gi, `
`).trim()
}

function Ft(e) {
    let t = Ql(e);
    if (!t) return m("protocol", "\u672A\u627E\u5230\u53EF\u89E3\u6790\u7684\u73A9\u5BB6\u9009\u9879\u5757"), [];
    try {
        let n = JSON.parse(t),
            s = (Array.isArray(n) ? n : [n]).filter(o => _.isPlainObject(o)).map(o => ({text: String(o.text || "").trim()})).filter(o => !!o.text);
        return m("protocol", "\u73A9\u5BB6\u9009\u9879\u5757 JSON \u89E3\u6790\u6210\u529F", {
            count: s.length,
            preview: s.slice(0, 3)
        }), s
    } catch (n) {
        return ye("protocol", "\u73A9\u5BB6\u9009\u9879\u5757 JSON \u89E3\u6790\u5931\u8D25\uFF0C\u5DF2\u5FFD\u7565\u8BE5\u5757", n), []
    }
}

var ai = {
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
    },
    ec = ["\u5F53\u524D\u65F6\u95F4", "\u5F53\u524D\u5730\u70B9", "\u5F53\u524D\u5267\u672C", "\u5929\u6C14", "\u8FD1\u671F\u4E8B\u4EF6"],
    tc = ["\u5F53\u524D\u751F\u547D\u503C", "\u5F53\u524D\u4F53\u529B\u503C", "\u58F0\u671B", "\u91D1\u94B1", "\u79EF\u5206", "\u540E\u5BAB\u548C\u8C10\u5EA6"],
    nc = ["\u6B66\u529B", "\u667A\u529B", "\u7EDF\u7387", "\u653F\u6CBB", "\u9B45\u529B", "\u4F53\u8D28"],
    rc = ["\u540D\u79F0", "\u54C1\u8D28", "\u7C7B\u578B", "\u63CF\u8FF0", "\u4F24\u5BB3\u9AB0", "\u5148\u653B\u52A0\u503C", "\u653B\u51FB\u52A0\u503C", "\u9632\u5FA1DC\u52A0\u503C", "\u4F24\u5BB3\u51CF\u514D", "\u5176\u4ED6\u6548\u679C"],
    sc = ["\u4E3B\u6B66\u5668", "\u526F\u6B66\u5668", "\u62A4\u7532", "\u5750\u9A91", "\u9970\u54C11", "\u9970\u54C12", "\u9970\u54C13"],
    oc = ["\u540D\u79F0", "\u7B49\u7EA7", "\u7C7B\u578B", "\u6548\u679C", "\u719F\u7EC3\u5EA6", "\u4F53\u529B\u6D88\u8017"],
    ic = ["\u540D\u79F0", "\u7B49\u7EA7", "\u6548\u679C"],
    ac = ["\u516D\u7EF4", "\u5F53\u524D\u751F\u547D\u503C", "\u5F53\u524D\u4F53\u529B\u503C", "\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210", "\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210", "\u88C5\u5907", "\u6B66\u6280", "\u4E13\u957F", "\u72B6\u6001", "\u7269\u54C1\u680F", "\u58F0\u671B", "\u91D1\u94B1", "\u79EF\u5206", "\u5B98\u804C", "\u7235\u4F4D", "\u540E\u5BAB\u548C\u8C10\u5EA6"],
    lc = ["\u54C1\u8D28", "\u63CF\u8FF0", "\u6570\u91CF"],
    cc = ["\u540D\u79F0", "\u89C4\u6A21", "\u6B63\u7EDF\u6027", "\u60C5\u62A5\u7F51", "\u91D1\u94B1", "\u7CAE\u8349", "\u57CE\u6C60", "\u519B\u961F", "\u5916\u4EA4", "\u653F\u7B56"],
    uc = ["\u7B49\u7EA7", "\u57CE\u9632", "\u4EBA\u53E3", "\u519C\u4E1A", "\u5546\u4E1A", "\u6C11\u5FC3", "\u6CBB\u5B89", "\u7E41\u8363\u5EA6", "\u592A\u5B88", "\u8BBE\u65BD"],
    fc = ["\u5175\u79CD", "\u7B49\u7EA7", "\u5175\u529B", "\u58EB\u6C14", "\u75B2\u60EB", "\u88C5\u5907\u7B49\u7EA7", "\u7EDF\u5C5E\u5C06\u9886", "\u9A7B\u624E\u5730", "\u8BAD\u7EC3\u8FDB\u5EA6", "\u9635\u578B"],
    pc = ["\u5F53\u524D\u7814\u7A76", "\u7814\u7A76\u8FDB\u5EA6", "\u5BCC\u56FD", "\u5F3A\u5175", "\u9738\u9053", "\u738B\u9053"],
    dc = ["\u540D\u79F0", "\u54C1\u8D28", "\u9635\u8425", "\u5B9A\u4F4D", "\u597D\u611F", "\u7B80\u8FF0", "\u7F81\u7ECA", "\u89D2\u8272\u6570\u636E", "\u6B66\u5C06\u4FE1\u606F", "\u7F8E\u4EBA\u5C5E\u6027"],
    gc = ["\u91CE\u5FC3\u503C", "\u6027\u683C", "\u5B98\u804C", "\u5F53\u524D\u72B6\u6001", "\u72B6\u6001\u63CF\u8FF0", "\u9A7B\u624E\u5730", "\u7279\u6280"],
    hc = ["\u4F9D\u8D56\u5EA6", "\u654F\u611F\u5EA6", "\u8D1E\u6D01\u5EA6", "\u4F4D\u4EFD", "\u6027\u683C", "\u5F53\u524D\u72B6\u6001"],
    mc = ["\u540D\u79F0", "\u7C7B\u578B", "\u72B6\u6001", "\u65F6\u9650", "\u76EE\u6807"],
    _c = ["\u7C7B\u578B", "\u72B6\u6001", "\u63CF\u8FF0", "\u79EF\u5206", "\u5176\u4ED6\u5956\u52B1"],
    yc = ["\u540D\u79F0", "\u5206\u7C7B", "\u4EF7\u683C", "\u63CF\u8FF0"];

function li(e) {
    return _.isPlainObject(e)
}

function Ie(e, t) {
    if (!e) throw new Error(t)
}

function _e(e, t) {
    Ie(li(e), `${t} \u5FC5\u987B\u662F\u5BF9\u8C61`)
}

function we(e, t) {
    _e(e, t), Ie(Object.keys(e).length > 0, `${t} \u81F3\u5C11\u5305\u542B\u4E00\u4E2A\u5B57\u6BB5`)
}

function T(e, t) {
    Ie(typeof e == "string", `${t} \u5FC5\u987B\u662F\u5B57\u7B26\u4E32`)
}

function ee(e, t) {
    Ie(typeof e == "number" && Number.isFinite(e), `${t} \u5FC5\u987B\u662F\u6709\u9650\u6570\u5B57`)
}

function Ut(e, t) {
    Ie(typeof e == "boolean", `${t} \u5FC5\u987B\u662F\u5E03\u5C14\u503C`)
}

function de(e, t, n) {
    Ie(typeof e == "string" && t.includes(e), `${n} \u5FC5\u987B\u662F\u4EE5\u4E0B\u503C\u4E4B\u4E00: ${t.join(" / ")}`)
}

function ge(e, t, n) {
    for (let r of Object.keys(e)) Ie(t.includes(r), `${n}.${r} \u4E0D\u662F\u5141\u8BB8\u7684\u5B57\u6BB5`)
}

function _s(e, t = "root") {
    if (Array.isArray(e)) {
        e.forEach((n, r) => _s(n, `${t}[${r}]`));
        return
    }
    if (li(e)) for (let [n, r] of Object.entries(e)) {
        if (n.startsWith("_")) throw new Error(`\u547D\u4EE4\u5305\u542B\u53EA\u8BFB\u5B57\u6BB5: ${t}.${n}`);
        _s(r, `${t}.${n}`)
    }
}

function ys(e, t) {
    _e(e, t);
    for (let [n, r] of Object.entries(e)) T(n, `${t} \u952E\u540D`), T(r, `${t}.${n}`)
}

function ci(e, t) {
    _e(e, t);
    for (let [n, r] of Object.entries(e)) T(n, `${t} \u952E\u540D`), ee(r, `${t}.${n}`)
}

function ui(e, t) {
    _e(e, t), ge(e, ["\u4E8B\u4EF6\u540D", "\u7B80\u8FF0", "\u65E5\u671F"], t), T(e.\u4E8B\u4EF6\u540D, `${t}.\u4E8B\u4EF6\u540D`), T(e.\u7B80\u8FF0, `${t}.\u7B80\u8FF0`), T(e.\u65E5\u671F, `${t}.\u65E5\u671F`)
}

function fi(e, t) {
    we(e, t), ge(e, nc, t);
    for (let [n, r] of Object.entries(e)) ee(r, `${t}.${n}`)
}

function bc(e, t) {
    _e(e, t), ge(e, rc, t), e.\u540D\u79F0 !== void 0 && T(e.\u540D\u79F0, `${t}.\u540D\u79F0`), e.\u54C1\u8D28 !== void 0 && de(e.\u54C1\u8D28, F.\u88C5\u5907\u54C1\u8D28, `${t}.\u54C1\u8D28`), e.\u7C7B\u578B !== void 0 && T(e.\u7C7B\u578B, `${t}.\u7C7B\u578B`), e.\u63CF\u8FF0 !== void 0 && T(e.\u63CF\u8FF0, `${t}.\u63CF\u8FF0`), e.\u4F24\u5BB3\u9AB0 !== void 0 && T(e.\u4F24\u5BB3\u9AB0, `${t}.\u4F24\u5BB3\u9AB0`);
    for (let n of ["\u5148\u653B\u52A0\u503C", "\u653B\u51FB\u52A0\u503C", "\u9632\u5FA1DC\u52A0\u503C", "\u4F24\u5BB3\u51CF\u514D"]) e[n] !== void 0 && ee(e[n], `${t}.${n}`);
    e.\u5176\u4ED6\u6548\u679C !== void 0 && T(e.\u5176\u4ED6\u6548\u679C, `${t}.\u5176\u4ED6\u6548\u679C`)
}

function vc(e, t) {
    e !== "\u65E0" && bc(e, t)
}

function pi(e, t) {
    _e(e, t), ge(e, sc, t);
    for (let [n, r] of Object.entries(e)) vc(r, `${t}.${n}`)
}

function Ec(e, t) {
    _e(e, t), ge(e, oc, t), e.\u540D\u79F0 !== void 0 && T(e.\u540D\u79F0, `${t}.\u540D\u79F0`), e.\u7B49\u7EA7 !== void 0 && de(e.\u7B49\u7EA7, F.\u6B66\u6280\u7B49\u7EA7, `${t}.\u7B49\u7EA7`), e.\u7C7B\u578B !== void 0 && de(e.\u7C7B\u578B, F.\u6B66\u6280\u7C7B\u578B, `${t}.\u7C7B\u578B`), e.\u6548\u679C !== void 0 && T(e.\u6548\u679C, `${t}.\u6548\u679C`), e.\u719F\u7EC3\u5EA6 !== void 0 && ee(e.\u719F\u7EC3\u5EA6, `${t}.\u719F\u7EC3\u5EA6`), e.\u4F53\u529B\u6D88\u8017 !== void 0 && ee(e.\u4F53\u529B\u6D88\u8017, `${t}.\u4F53\u529B\u6D88\u8017`)
}

function xc(e, t) {
    _e(e, t), ge(e, ic, t), e.\u540D\u79F0 !== void 0 && T(e.\u540D\u79F0, `${t}.\u540D\u79F0`), e.\u7B49\u7EA7 !== void 0 && T(e.\u7B49\u7EA7, `${t}.\u7B49\u7EA7`), e.\u6548\u679C !== void 0 && T(e.\u6548\u679C, `${t}.\u6548\u679C`)
}

function di(e, t) {
    _e(e, t);
    for (let [n, r] of Object.entries(e)) T(n, `${t} \u952E\u540D`), _e(r, `${t}.${n}`), ge(r, ["\u6548\u679C", "\u5269\u4F59"], `${t}.${n}`), r.\u6548\u679C !== void 0 && T(r.\u6548\u679C, `${t}.${n}.\u6548\u679C`), r.\u5269\u4F59 !== void 0 && T(r.\u5269\u4F59, `${t}.${n}.\u5269\u4F59`)
}

function gi(e, t) {
    _e(e, t);
    for (let [n, r] of Object.entries(e)) T(n, `${t} \u952E\u540D`), Ec(r, `${t}.${n}`)
}

function hi(e, t) {
    _e(e, t);
    for (let [n, r] of Object.entries(e)) T(n, `${t} \u952E\u540D`), xc(r, `${t}.${n}`)
}

function kc(e, t) {
    we(e, t), ge(e, ["\u516D\u7EF4", "\u5F53\u524D\u751F\u547D\u503C", "\u5F53\u524D\u4F53\u529B\u503C", "\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210", "\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210", "\u88C5\u5907", "\u6B66\u6280", "\u4E13\u957F", "\u72B6\u6001"], t), e.\u516D\u7EF4 !== void 0 && fi(e.\u516D\u7EF4, `${t}.\u516D\u7EF4`), e.\u5F53\u524D\u751F\u547D\u503C !== void 0 && ee(e.\u5F53\u524D\u751F\u547D\u503C, `${t}.\u5F53\u524D\u751F\u547D\u503C`), e.\u5F53\u524D\u4F53\u529B\u503C !== void 0 && ee(e.\u5F53\u524D\u4F53\u529B\u503C, `${t}.\u5F53\u524D\u4F53\u529B\u503C`), e.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210 !== void 0 && ee(e.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210, `${t}.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210`), e.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210 !== void 0 && ee(e.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210, `${t}.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210`), e.\u88C5\u5907 !== void 0 && pi(e.\u88C5\u5907, `${t}.\u88C5\u5907`), e.\u6B66\u6280 !== void 0 && gi(e.\u6B66\u6280, `${t}.\u6B66\u6280`), e.\u4E13\u957F !== void 0 && hi(e.\u4E13\u957F, `${t}.\u4E13\u957F`), e.\u72B6\u6001 !== void 0 && di(e.\u72B6\u6001, `${t}.\u72B6\u6001`)
}

function Nc(e, t) {
    _e(e, t);
    for (let [n, r] of Object.entries(e)) T(n, `${t} \u952E\u540D`), _e(r, `${t}.${n}`), ge(r, lc, `${t}.${n}`), r.\u54C1\u8D28 !== void 0 && Ie(typeof r.\u54C1\u8D28 == "string" && [...F.\u88C5\u5907\u54C1\u8D28, "\u65E0"].includes(r.\u54C1\u8D28), `${t}.${n}.\u54C1\u8D28 \u5FC5\u987B\u662F\u5408\u6CD5\u88C5\u5907\u54C1\u8D28\u6216 \u65E0`), r.\u63CF\u8FF0 !== void 0 && T(r.\u63CF\u8FF0, `${t}.${n}.\u63CF\u8FF0`), r.\u6570\u91CF !== void 0 && ee(r.\u6570\u91CF, `${t}.${n}.\u6570\u91CF`)
}

function Oc(e, t) {
    we(e, t), ge(e, gc, t), e.\u91CE\u5FC3\u503C !== void 0 && ee(e.\u91CE\u5FC3\u503C, `${t}.\u91CE\u5FC3\u503C`), e.\u6027\u683C !== void 0 && de(e.\u6027\u683C, F.\u6B66\u5C06\u6027\u683C, `${t}.\u6027\u683C`), e.\u5B98\u804C !== void 0 && T(e.\u5B98\u804C, `${t}.\u5B98\u804C`), e.\u5F53\u524D\u72B6\u6001 !== void 0 && de(e.\u5F53\u524D\u72B6\u6001, F.\u6B66\u5C06\u72B6\u6001, `${t}.\u5F53\u524D\u72B6\u6001`), e.\u72B6\u6001\u63CF\u8FF0 !== void 0 && T(e.\u72B6\u6001\u63CF\u8FF0, `${t}.\u72B6\u6001\u63CF\u8FF0`), e.\u9A7B\u624E\u5730 !== void 0 && T(e.\u9A7B\u624E\u5730, `${t}.\u9A7B\u624E\u5730`), e.\u7279\u6280 !== void 0 && ys(e.\u7279\u6280, `${t}.\u7279\u6280`)
}

function wc(e, t) {
    we(e, t), ge(e, hc, t);
    for (let n of ["\u4F9D\u8D56\u5EA6", "\u654F\u611F\u5EA6", "\u8D1E\u6D01\u5EA6"]) e[n] !== void 0 && ee(e[n], `${t}.${n}`);
    e.\u4F4D\u4EFD !== void 0 && de(e.\u4F4D\u4EFD, F.\u7F8E\u4EBA\u4F4D\u4EFD, `${t}.\u4F4D\u4EFD`), e.\u6027\u683C !== void 0 && de(e.\u6027\u683C, F.\u7F8E\u4EBA\u6027\u683C, `${t}.\u6027\u683C`), e.\u5F53\u524D\u72B6\u6001 !== void 0 && de(e.\u5F53\u524D\u72B6\u6001, F.\u7F8E\u4EBA\u72B6\u6001, `${t}.\u5F53\u524D\u72B6\u6001`)
}

function Sc(e, t) {
    we(e, t), ge(e, _c, t), e.\u7C7B\u578B !== void 0 && de(e.\u7C7B\u578B, F.\u4EFB\u52A1\u76EE\u6807\u7C7B\u578B, `${t}.\u7C7B\u578B`), e.\u72B6\u6001 !== void 0 && de(e.\u72B6\u6001, F.\u4EFB\u52A1\u76EE\u6807\u72B6\u6001, `${t}.\u72B6\u6001`), e.\u63CF\u8FF0 !== void 0 && T(e.\u63CF\u8FF0, `${t}.\u63CF\u8FF0`), e.\u79EF\u5206 !== void 0 && ee(e.\u79EF\u5206, `${t}.\u79EF\u5206`), e.\u5176\u4ED6\u5956\u52B1 !== void 0 && T(e.\u5176\u4ED6\u5956\u52B1, `${t}.\u5176\u4ED6\u5956\u52B1`)
}

function mi(e, t) {
    _e(e, t);
    for (let [n, r] of Object.entries(e)) T(n, `${t} \u952E\u540D`), Sc(r, `${t}.${n}`)
}

function Cc(e, t) {
    we(e, t), ge(e, yc, t), e.\u540D\u79F0 !== void 0 && T(e.\u540D\u79F0, `${t}.\u540D\u79F0`), e.\u5206\u7C7B !== void 0 && de(e.\u5206\u7C7B, F.\u5546\u54C1\u5206\u7C7B, `${t}.\u5206\u7C7B`), e.\u4EF7\u683C !== void 0 && ee(e.\u4EF7\u683C, `${t}.\u4EF7\u683C`), e.\u63CF\u8FF0 !== void 0 && T(e.\u63CF\u8FF0, `${t}.\u63CF\u8FF0`)
}

function Tc(e, t) {
    we(e, t), ge(e, ec, t), e.\u5F53\u524D\u65F6\u95F4 !== void 0 && T(e.\u5F53\u524D\u65F6\u95F4, `${t}.\u5F53\u524D\u65F6\u95F4`), e.\u5F53\u524D\u5730\u70B9 !== void 0 && T(e.\u5F53\u524D\u5730\u70B9, `${t}.\u5F53\u524D\u5730\u70B9`), e.\u5F53\u524D\u5267\u672C !== void 0 && de(e.\u5F53\u524D\u5267\u672C, F.\u5267\u672C, `${t}.\u5F53\u524D\u5267\u672C`), e.\u5929\u6C14 !== void 0 && T(e.\u5929\u6C14, `${t}.\u5929\u6C14`), e.\u8FD1\u671F\u4E8B\u4EF6 !== void 0 && (Ie(Array.isArray(e.\u8FD1\u671F\u4E8B\u4EF6), `${t}.\u8FD1\u671F\u4E8B\u4EF6 \u5FC5\u987B\u662F\u6570\u7EC4`), e.\u8FD1\u671F\u4E8B\u4EF6.forEach((n, r) => ui(n, `${t}.\u8FD1\u671F\u4E8B\u4EF6[${r}]`)))
}

function Pc(e, t) {
    we(e, t), ge(e, ac, t), e.\u516D\u7EF4 !== void 0 && fi(e.\u516D\u7EF4, `${t}.\u516D\u7EF4`), e.\u5F53\u524D\u751F\u547D\u503C !== void 0 && ee(e.\u5F53\u524D\u751F\u547D\u503C, `${t}.\u5F53\u524D\u751F\u547D\u503C`), e.\u5F53\u524D\u4F53\u529B\u503C !== void 0 && ee(e.\u5F53\u524D\u4F53\u529B\u503C, `${t}.\u5F53\u524D\u4F53\u529B\u503C`), e.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210 !== void 0 && ee(e.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210, `${t}.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210`), e.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210 !== void 0 && ee(e.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210, `${t}.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210`), e.\u88C5\u5907 !== void 0 && pi(e.\u88C5\u5907, `${t}.\u88C5\u5907`), e.\u6B66\u6280 !== void 0 && gi(e.\u6B66\u6280, `${t}.\u6B66\u6280`), e.\u4E13\u957F !== void 0 && hi(e.\u4E13\u957F, `${t}.\u4E13\u957F`), e.\u72B6\u6001 !== void 0 && di(e.\u72B6\u6001, `${t}.\u72B6\u6001`), e.\u7269\u54C1\u680F !== void 0 && Nc(e.\u7269\u54C1\u680F, `${t}.\u7269\u54C1\u680F`), e.\u58F0\u671B !== void 0 && ee(e.\u58F0\u671B, `${t}.\u58F0\u671B`), e.\u91D1\u94B1 !== void 0 && ee(e.\u91D1\u94B1, `${t}.\u91D1\u94B1`), e.\u79EF\u5206 !== void 0 && ee(e.\u79EF\u5206, `${t}.\u79EF\u5206`), e.\u5B98\u804C !== void 0 && T(e.\u5B98\u804C, `${t}.\u5B98\u804C`), e.\u7235\u4F4D !== void 0 && T(e.\u7235\u4F4D, `${t}.\u7235\u4F4D`), e.\u540E\u5BAB\u548C\u8C10\u5EA6 !== void 0 && ee(e.\u540E\u5BAB\u548C\u8C10\u5EA6, `${t}.\u540E\u5BAB\u548C\u8C10\u5EA6`)
}

function _i(e, t) {
    we(e, t), ge(e, uc, t), e.\u7B49\u7EA7 !== void 0 && de(e.\u7B49\u7EA7, F.\u57CE\u6C60\u7B49\u7EA7, `${t}.\u7B49\u7EA7`);
    for (let n of ["\u57CE\u9632", "\u4EBA\u53E3", "\u519C\u4E1A", "\u5546\u4E1A", "\u6C11\u5FC3", "\u6CBB\u5B89", "\u7E41\u8363\u5EA6"]) e[n] !== void 0 && ee(e[n], `${t}.${n}`);
    e.\u592A\u5B88 !== void 0 && T(e.\u592A\u5B88, `${t}.\u592A\u5B88`), e.\u8BBE\u65BD !== void 0 && (Ie(Array.isArray(e.\u8BBE\u65BD), `${t}.\u8BBE\u65BD \u5FC5\u987B\u662F\u6570\u7EC4`), e.\u8BBE\u65BD.forEach((n, r) => T(n, `${t}.\u8BBE\u65BD[${r}]`)))
}

function yi(e, t) {
    we(e, t), ge(e, fc, t), e.\u5175\u79CD !== void 0 && T(e.\u5175\u79CD, `${t}.\u5175\u79CD`), e.\u7B49\u7EA7 !== void 0 && de(e.\u7B49\u7EA7, F.\u519B\u961F\u7B49\u7EA7, `${t}.\u7B49\u7EA7`);
    for (let n of ["\u5175\u529B", "\u58EB\u6C14", "\u75B2\u60EB", "\u8BAD\u7EC3\u8FDB\u5EA6"]) e[n] !== void 0 && ee(e[n], `${t}.${n}`);
    e.\u88C5\u5907\u7B49\u7EA7 !== void 0 && de(e.\u88C5\u5907\u7B49\u7EA7, F.\u519B\u961F\u88C5\u5907\u7B49\u7EA7, `${t}.\u88C5\u5907\u7B49\u7EA7`), e.\u7EDF\u5C5E\u5C06\u9886 !== void 0 && T(e.\u7EDF\u5C5E\u5C06\u9886, `${t}.\u7EDF\u5C5E\u5C06\u9886`), e.\u9A7B\u624E\u5730 !== void 0 && T(e.\u9A7B\u624E\u5730, `${t}.\u9A7B\u624E\u5730`), e.\u9635\u578B !== void 0 && de(e.\u9635\u578B, F.\u9635\u578B, `${t}.\u9635\u578B`)
}

function bi(e, t) {
    we(e, t), ge(e, pc, t), e.\u5F53\u524D\u7814\u7A76 !== void 0 && T(e.\u5F53\u524D\u7814\u7A76, `${t}.\u5F53\u524D\u7814\u7A76`);
    for (let n of ["\u7814\u7A76\u8FDB\u5EA6", "\u5BCC\u56FD", "\u5F3A\u5175", "\u9738\u9053", "\u738B\u9053"]) e[n] !== void 0 && ee(e[n], `${t}.${n}`)
}

function Dc(e, t) {
    we(e, t), ge(e, cc, t), e.\u540D\u79F0 !== void 0 && T(e.\u540D\u79F0, `${t}.\u540D\u79F0`), e.\u89C4\u6A21 !== void 0 && de(e.\u89C4\u6A21, F.\u52BF\u529B\u89C4\u6A21, `${t}.\u89C4\u6A21`);
    for (let n of ["\u6B63\u7EDF\u6027", "\u60C5\u62A5\u7F51", "\u91D1\u94B1", "\u7CAE\u8349"]) e[n] !== void 0 && ee(e[n], `${t}.${n}`);
    if (e.\u57CE\u6C60 !== void 0) {
        _e(e.\u57CE\u6C60, `${t}.\u57CE\u6C60`);
        for (let [n, r] of Object.entries(e.\u57CE\u6C60)) T(n, `${t}.\u57CE\u6C60 \u952E\u540D`), _i(r, `${t}.\u57CE\u6C60.${n}`)
    }
    if (e.\u519B\u961F !== void 0) {
        _e(e.\u519B\u961F, `${t}.\u519B\u961F`);
        for (let [n, r] of Object.entries(e.\u519B\u961F)) T(n, `${t}.\u519B\u961F \u952E\u540D`), yi(r, `${t}.\u519B\u961F.${n}`)
    }
    e.\u5916\u4EA4 !== void 0 && ci(e.\u5916\u4EA4, `${t}.\u5916\u4EA4`), e.\u653F\u7B56 !== void 0 && bi(e.\u653F\u7B56, `${t}.\u653F\u7B56`)
}

function Ac(e, t) {
    we(e, t), ge(e, dc, t), e.\u540D\u79F0 !== void 0 && T(e.\u540D\u79F0, `${t}.\u540D\u79F0`), e.\u54C1\u8D28 !== void 0 && de(e.\u54C1\u8D28, F.\u54C1\u8D28, `${t}.\u54C1\u8D28`), e.\u9635\u8425 !== void 0 && T(e.\u9635\u8425, `${t}.\u9635\u8425`), e.\u5B9A\u4F4D !== void 0 && T(e.\u5B9A\u4F4D, `${t}.\u5B9A\u4F4D`), e.\u597D\u611F !== void 0 && ee(e.\u597D\u611F, `${t}.\u597D\u611F`), e.\u7B80\u8FF0 !== void 0 && T(e.\u7B80\u8FF0, `${t}.\u7B80\u8FF0`), e.\u7F81\u7ECA !== void 0 && ys(e.\u7F81\u7ECA, `${t}.\u7F81\u7ECA`), e.\u89D2\u8272\u6570\u636E !== void 0 && kc(e.\u89D2\u8272\u6570\u636E, `${t}.\u89D2\u8272\u6570\u636E`), e.\u6B66\u5C06\u4FE1\u606F !== void 0 && Oc(e.\u6B66\u5C06\u4FE1\u606F, `${t}.\u6B66\u5C06\u4FE1\u606F`), e.\u7F8E\u4EBA\u5C5E\u6027 !== void 0 && wc(e.\u7F8E\u4EBA\u5C5E\u6027, `${t}.\u7F8E\u4EBA\u5C5E\u6027`)
}

function Vc(e, t) {
    we(e, t), ge(e, mc, t), e.\u540D\u79F0 !== void 0 && T(e.\u540D\u79F0, `${t}.\u540D\u79F0`), e.\u7C7B\u578B !== void 0 && de(e.\u7C7B\u578B, F.\u4EFB\u52A1\u7C7B\u578B, `${t}.\u7C7B\u578B`), e.\u72B6\u6001 !== void 0 && de(e.\u72B6\u6001, F.\u4EFB\u52A1\u72B6\u6001, `${t}.\u72B6\u6001`), e.\u65F6\u9650 !== void 0 && T(e.\u65F6\u9650, `${t}.\u65F6\u9650`), e.\u76EE\u6807 !== void 0 && mi(e.\u76EE\u6807, `${t}.\u76EE\u6807`)
}

function Rc(e, t) {
    we(e, t), ge(e, tc, t);
    for (let [n, r] of Object.entries(e)) ee(r, `${t}.${n}`)
}

function un(e) {
    m("commands", "\u5F00\u59CB\u89E3\u6790\u547D\u4EE4\u8F93\u5165", {
        inputType: typeof e == "string" ? "string" : Array.isArray(e) ? "array" : "object",
        summary: J(e)
    });
    try {
        if (typeof e == "string") {
            let n = JSON.parse(e);
            return m("commands", "\u5B57\u7B26\u4E32\u547D\u4EE4 JSON \u89E3\u6790\u6210\u529F", J(n)), un(n)
        }
        let t = Array.isArray(e) ? e : [e];
        return m("commands", "\u5F00\u59CB\u9010\u6761\u6821\u9A8C\u547D\u4EE4", {count: t.length}), t.forEach((n, r) => Mc(n, r)), m("commands", "\u547D\u4EE4\u8F93\u5165\u6821\u9A8C\u5B8C\u6210", {
            count: t.length,
            types: t.map(n => n.type)
        }), t
    } catch (t) {
        throw ye("commands", "\u89E3\u6790\u547D\u4EE4\u8F93\u5165\u5931\u8D25", t), t
    }
}

function Mc(e, t = 0) {
    let n = `commands[${t}]`;
    m("commands", "\u6821\u9A8C\u5355\u6761\u547D\u4EE4", {
        index: t,
        type: _.isPlainObject(e) ? e.type ?? null : null,
        summary: J(e)
    }), _e(e, n), Ie(typeof e.type == "string", `${n}.type \u5FC5\u987B\u662F\u5B57\u7B26\u4E32`), Ie(e.type in ai, `${n}.type \u4E0D\u662F\u6709\u6548\u547D\u4EE4\u7C7B\u578B: ${String(e.type)}`);
    let r = ai[e.type];
    ge(e, r, n), _s(e, n);
    try {
        switch (e.type) {
            case"UpdateWorld":
                m("commands", "\u6821\u9A8C UpdateWorld", {index: t}), Tc(e.changes, `${n}.changes`);
                return;
            case"AppendRecentEvent":
                m("commands", "\u6821\u9A8C AppendRecentEvent", {index: t}), ui(e.event, `${n}.event`);
                return;
            case"UpdatePlayerBase":
                m("commands", "\u6821\u9A8C UpdatePlayerBase", {index: t}), Pc(e.changes, `${n}.changes`);
                return;
            case"AdjustPlayerResource":
                m("commands", "\u6821\u9A8C AdjustPlayerResource", {index: t}), e.mode !== void 0 && de(e.mode, ["delta", "set"], `${n}.mode`), Rc(e.changes, `${n}.changes`);
                return;
            case"UpdateFaction":
                m("commands", "\u6821\u9A8C UpdateFaction", {
                    index: t,
                    factionId: e.factionId
                }), T(e.factionId, `${n}.factionId`), e.createIfMissing !== void 0 && Ut(e.createIfMissing, `${n}.createIfMissing`), Dc(e.changes, `${n}.changes`);
                return;
            case"UpsertCity":
                m("commands", "\u6821\u9A8C UpsertCity", {
                    index: t,
                    factionId: e.factionId,
                    id: e.id
                }), T(e.factionId, `${n}.factionId`), T(e.id, `${n}.id`), e.createIfMissing !== void 0 && Ut(e.createIfMissing, `${n}.createIfMissing`), _i(e.data, `${n}.data`);
                return;
            case"AddCityFacility":
                m("commands", "\u6821\u9A8C AddCityFacility", {
                    index: t,
                    factionId: e.factionId,
                    id: e.id
                }), T(e.factionId, `${n}.factionId`), T(e.id, `${n}.id`), T(e.facility, `${n}.facility`);
                return;
            case"RemoveCityFacility":
                m("commands", "\u6821\u9A8C RemoveCityFacility", {
                    index: t,
                    factionId: e.factionId,
                    id: e.id
                }), T(e.factionId, `${n}.factionId`), T(e.id, `${n}.id`), T(e.facility, `${n}.facility`);
                return;
            case"RemoveCity":
                m("commands", "\u6821\u9A8C RemoveCity", {
                    index: t,
                    factionId: e.factionId,
                    id: e.id
                }), T(e.factionId, `${n}.factionId`), T(e.id, `${n}.id`);
                return;
            case"UpsertArmy":
                m("commands", "\u6821\u9A8C UpsertArmy", {
                    index: t,
                    factionId: e.factionId,
                    id: e.id
                }), T(e.factionId, `${n}.factionId`), T(e.id, `${n}.id`), e.createIfMissing !== void 0 && Ut(e.createIfMissing, `${n}.createIfMissing`), yi(e.data, `${n}.data`);
                return;
            case"RemoveArmy":
                m("commands", "\u6821\u9A8C RemoveArmy", {
                    index: t,
                    factionId: e.factionId,
                    id: e.id
                }), T(e.factionId, `${n}.factionId`), T(e.id, `${n}.id`);
                return;
            case"UpdateDiplomacy":
                m("commands", "\u6821\u9A8C UpdateDiplomacy", {
                    index: t,
                    factionId: e.factionId
                }), T(e.factionId, `${n}.factionId`), ci(e.changes, `${n}.changes`);
                return;
            case"UpdatePolicy":
                m("commands", "\u6821\u9A8C UpdatePolicy", {
                    index: t,
                    factionId: e.factionId
                }), T(e.factionId, `${n}.factionId`), bi(e.changes, `${n}.changes`);
                return;
            case"UpsertNpc":
                m("commands", "\u6821\u9A8C UpsertNpc", {
                    index: t,
                    id: e.id
                }), T(e.id, `${n}.id`), e.createIfMissing !== void 0 && Ut(e.createIfMissing, `${n}.createIfMissing`), Ac(e.data, `${n}.data`);
                return;
            case"UpdateNpcRelation":
                m("commands", "\u6821\u9A8C UpdateNpcRelation", {
                    index: t,
                    id: e.id
                }), T(e.id, `${n}.id`), e.mode !== void 0 && de(e.mode, ["delta", "set"], `${n}.mode`), Ie(e.\u597D\u611F !== void 0 || e.\u7F81\u7ECA !== void 0, `${n} \u81F3\u5C11\u8981\u63D0\u4F9B \u597D\u611F \u6216 \u7F81\u7ECA`), e.\u597D\u611F !== void 0 && ee(e.\u597D\u611F, `${n}.\u597D\u611F`), e.\u7F81\u7ECA !== void 0 && ys(e.\u7F81\u7ECA, `${n}.\u7F81\u7ECA`);
                return;
            case"RemoveNpc":
                m("commands", "\u6821\u9A8C RemoveNpc", {index: t, id: e.id}), T(e.id, `${n}.id`);
                return;
            case"UpsertQuest":
                m("commands", "\u6821\u9A8C UpsertQuest", {
                    index: t,
                    id: e.id
                }), T(e.id, `${n}.id`), e.createIfMissing !== void 0 && Ut(e.createIfMissing, `${n}.createIfMissing`), Vc(e.data, `${n}.data`);
                return;
            case"UpdateQuestState":
                m("commands", "\u6821\u9A8C UpdateQuestState", {
                    index: t,
                    id: e.id
                }), T(e.id, `${n}.id`), de(e.\u72B6\u6001, F.\u4EFB\u52A1\u72B6\u6001, `${n}.\u72B6\u6001`), e.\u76EE\u6807 !== void 0 && mi(e.\u76EE\u6807, `${n}.\u76EE\u6807`);
                return;
            case"RemoveQuest":
                m("commands", "\u6821\u9A8C RemoveQuest", {index: t, id: e.id}), T(e.id, `${n}.id`);
                return;
            case"UpsertShopItem":
                m("commands", "\u6821\u9A8C UpsertShopItem", {
                    index: t,
                    id: e.id
                }), T(e.id, `${n}.id`), e.createIfMissing !== void 0 && Ut(e.createIfMissing, `${n}.createIfMissing`), Cc(e.data, `${n}.data`);
                return;
            case"RemoveShopItem":
                m("commands", "\u6821\u9A8C RemoveShopItem", {index: t, id: e.id}), T(e.id, `${n}.id`);
                return
        }
    } catch (s) {
        throw ye("commands", `\u547D\u4EE4\u6821\u9A8C\u5931\u8D25: ${n}`, s), s
    }
}

function $c(e) {
    let t = _.cloneDeep(e);
    return t._\u6B66\u529B\u52A0\u503C = Ot(t.\u6B66\u529B), t._\u667A\u529B\u52A0\u503C = Ot(t.\u667A\u529B), t._\u7EDF\u7387\u52A0\u503C = Ot(t.\u7EDF\u7387), t._\u653F\u6CBB\u52A0\u503C = Ot(t.\u653F\u6CBB), t._\u9B45\u529B\u52A0\u503C = Ot(t.\u9B45\u529B), t._\u4F53\u8D28\u52A0\u503C = Ot(t.\u4F53\u8D28), t
}

function vi(e) {
    let t = _.cloneDeep(e);
    t.\u516D\u7EF4 = $c(t.\u516D\u7EF4);
    let n = (t.\u516D\u7EF4._\u4F53\u8D28\u52A0\u503C ?? 0) * 5,
        r = (t.\u516D\u7EF4._\u4F53\u8D28\u52A0\u503C ?? 0) * 8,
        s = Math.max(0, n + K(t.\u751F\u547D\u503C\u4E0A\u9650\u52A0\u6210)),
        o = Math.max(0, r + K(t.\u4F53\u529B\u503C\u4E0A\u9650\u52A0\u6210));
    t.\u5F53\u524D\u751F\u547D\u503C = _.clamp(K(t.\u5F53\u524D\u751F\u547D\u503C), 0, s), t.\u5F53\u524D\u4F53\u529B\u503C = _.clamp(K(t.\u5F53\u524D\u4F53\u529B\u503C), 0, o), t._\u57FA\u7840\u751F\u547D\u503C\u4E0A\u9650 = n, t._\u57FA\u7840\u4F53\u529B\u503C\u4E0A\u9650 = r, t._\u751F\u547D\u503C\u4E0A\u9650 = s, t._\u4F53\u529B\u503C\u4E0A\u9650 = o;
    let i = Ho(t.\u5F53\u524D\u751F\u547D\u503C, s);
    t._\u4F24\u52BF = i._\u4F24\u52BF, t._\u6218\u6597\u51CF\u503C = i._\u6218\u6597\u51CF\u503C;
    let a = ei(t.\u88C5\u5907);
    return t._\u5148\u653B\u503C = Math.floor((t.\u516D\u7EF4._\u6B66\u529B\u52A0\u503C ?? 0) / 4) + a.\u5148\u653B + (t._\u6218\u6597\u51CF\u503C ?? 0), t._\u653B\u51FB\u57FA\u7840\u503C = (t.\u516D\u7EF4._\u6B66\u529B\u52A0\u503C ?? 0) + a.\u653B\u51FB + (t._\u6218\u6597\u51CF\u503C ?? 0), t._\u4F24\u5BB3\u57FA\u7840\u503C = (t.\u516D\u7EF4._\u6B66\u529B\u52A0\u503C ?? 0) + (t._\u6218\u6597\u51CF\u503C ?? 0), t._\u9632\u5FA1DC = 40 + Math.floor((t.\u516D\u7EF4._\u6B66\u529B\u52A0\u503C ?? 0) * .75) + a.\u9632\u5FA1DC + (t._\u6218\u6597\u51CF\u503C ?? 0), t._\u4F24\u5BB3\u51CF\u514D = a.\u51CF\u514D, t
}

function Ic(e) {
    let t = _.cloneDeep(e);
    return t._\u4F9D\u8D56\u7B49\u7EA7 = Go(t.\u4F9D\u8D56\u5EA6), t._\u654F\u611F\u7B49\u7EA7 = Yo(t.\u654F\u611F\u5EA6), t._\u8D1E\u6D01\u7B49\u7EA7 = qo(t.\u8D1E\u6D01\u5EA6), t
}

function or(e) {
    let t = _.cloneDeep(e);
    return t.\u89D2\u8272\u6570\u636E && (t.\u89D2\u8272\u6570\u636E = vi(t.\u89D2\u8272\u6570\u636E)), t.\u7F8E\u4EBA\u5C5E\u6027 && (t.\u7F8E\u4EBA\u5C5E\u6027 = Ic(t.\u7F8E\u4EBA\u5C5E\u6027)), delete t._\u5FE0\u8BDA\u7B49\u7EA7, delete t._\u597D\u611F\u7B49\u7EA7, delete t._\u4EA4\u60C5\u7B49\u7EA7, t.\u6B66\u5C06\u4FE1\u606F ? t._\u5FE0\u8BDA\u7B49\u7EA7 = Uo(t.\u597D\u611F) : t.\u7F8E\u4EBA\u5C5E\u6027 ? t._\u597D\u611F\u7B49\u7EA7 = Bo(t.\u597D\u611F) : t._\u4EA4\u60C5\u7B49\u7EA7 = jo(t.\u597D\u611F), t
}

function ir(e) {
    let t = vi(e);
    return t.\u7269\u54C1\u680F = _.pickBy(t.\u7269\u54C1\u680F || {}, ({\u6570\u91CF: n}) => Math.max(0, K(n)) > 0), t._\u58F0\u671B\u79F0\u53F7 = Fo(t.\u58F0\u671B), t._\u548C\u8C10\u7B49\u7EA7 = Jo(t.\u540E\u5BAB\u548C\u8C10\u5EA6), t
}

function Lc(e) {
    let t = _.cloneDeep(e), n = ps[t.\u7B49\u7EA7] ?? ps.\u6751\u843D,
        r = (t.\u8BBE\u65BD || []).filter(s => s === "\u5B98\u5E9C").length;
    return t.\u57CE\u9632 = _.clamp(K(t.\u57CE\u9632), 0, n.\u57CE\u9632\u4E0A\u9650), t._\u57CE\u9632\u4E0A\u9650 = n.\u57CE\u9632\u4E0A\u9650, t._\u9A7B\u519B\u4E0A\u9650 = n.\u9A7B\u519B\u4E0A\u9650, t._\u9632\u5FA1\u7CFB\u6570 = n.\u9632\u5FA1\u7CFB\u6570, t._\u57CE\u6C60\u9632\u5FA1\u529B = Math.floor(t.\u57CE\u9632 * n.\u9632\u5FA1\u7CFB\u6570), t._\u6708\u7A0E\u6536 = Math.floor(n.\u7A0E\u6536 * (1 + t.\u5546\u4E1A / 100) * (1 + t.\u6C11\u5FC3 / 200)), t._\u6708\u4EA7\u7CAE = Math.floor(n.\u4EA7\u7CAE * (1 + t.\u519C\u4E1A / 100) * (1 + t.\u6C11\u5FC3 / 200)), t._\u6307\u4EE4\u69FD = n.\u6307\u4EE4\u69FD + Math.min(r, 2), t
}

function Hc(e, t) {
    let n = _.cloneDeep(e);
    n._\u58EB\u6C14\u7B49\u7EA7 = Wo(n.\u58EB\u6C14), n._\u75B2\u60EB\u7B49\u7EA7 = zo(n.\u75B2\u60EB);
    let r = ds[n.\u9635\u578B] ?? ds.\u65E0;
    n._\u9635\u578B\u653B\u51FB\u4FEE\u6B63 = r.\u653B\u51FB, n._\u9635\u578B\u9632\u5FA1\u4FEE\u6B63 = r.\u9632\u5FA1;
    let s = n.\u7EDF\u5C5E\u5C06\u9886,
        o = s ? t?.NPC?.[s]?.\u89D2\u8272\u6570\u636E?.\u516D\u7EF4._\u7EDF\u7387\u52A0\u503C ?? 0 : 0,
        i = Math.round(Zo(o) * 100) / 100;
    return n._\u7EDF\u7387\u7CFB\u6570 = i, n._\u7EFC\u5408\u6218\u529B = Math.floor(n.\u5175\u529B * ($o[n.\u7B49\u7EA7] ?? .8) * (Io[n.\u88C5\u5907\u7B49\u7EA7] ?? 1) * Xo(n.\u58EB\u6C14) * Qo(n.\u75B2\u60EB) * i), n._\u653B\u51FB\u6218\u529B = Math.floor((n._\u7EFC\u5408\u6218\u529B ?? 0) * n._\u9635\u578B\u653B\u51FB\u4FEE\u6B63), n._\u9632\u5FA1\u6218\u529B = Math.floor((n._\u7EFC\u5408\u6218\u529B ?? 0) * n._\u9635\u578B\u9632\u5FA1\u4FEE\u6B63), n
}

function Fc(e, t) {
    let n = _.cloneDeep(e);
    n.\u57CE\u6C60 = _.mapValues(n.\u57CE\u6C60 || {}, o => Lc(o)), n.\u519B\u961F = _.mapValues(n.\u519B\u961F || {}, o => Hc(o, t)), n._\u5916\u4EA4\u7B49\u7EA7 = _.mapValues(n.\u5916\u4EA4 || {}, o => Ko(o));
    let r = Object.values(n.\u57CE\u6C60 || {});
    n._\u6708\u603B\u7A0E\u6536 = _.sumBy(r, o => o._\u6708\u7A0E\u6536 ?? 0), n._\u6708\u603B\u4EA7\u7CAE = _.sumBy(r, o => o._\u6708\u4EA7\u7CAE ?? 0);
    let s = Object.values(n.\u519B\u961F || {});
    return n._\u603B\u5175\u529B = _.sumBy(s, o => o.\u5175\u529B ?? 0), n._\u603B\u6218\u529B = _.sumBy(s, o => o._\u7EFC\u5408\u6218\u529B ?? 0), n._\u6708\u519B\u9977\u4F30\u7B97 = _.sumBy(s, o => Math.ceil((o.\u5175\u529B ?? 0) / 1e3) * (Lo[o.\u7B49\u7EA7] ?? 40)), n._\u6708\u7CAE\u8349\u6D88\u8017\u4F30\u7B97 = _.sumBy(s, o => Math.ceil((o.\u5175\u529B ?? 0) / 1e3) * 10), n
}

function Uc(e, t) {
    return _.mapValues(e || {}, n => Fc(st(n), t))
}

function fn(e) {
    let t = _.cloneDeep(e);
    return t.\u4E16\u754C = Ct(t.\u4E16\u754C), t.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6 = t.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6.slice(-5), t.\u4E3B\u89D2 = ir(t.\u4E3B\u89D2), t.NPC = _.mapValues(t.NPC || {}, n => or(n)), t.\u52BF\u529B = Uc(an(t.\u52BF\u529B), {NPC: t.NPC}), t.\u4EFB\u52A1 = _.pickBy(t.\u4EFB\u52A1 || {}, n => ["\u53EF\u63A5\u53D6", "\u8FDB\u884C\u4E2D", "\u53EF\u63D0\u4EA4"].includes(n.\u72B6\u6001)), t.meta.updatedAt = new Date().toISOString(), t
}

var Bt = "sgbz_state", pn = "sgbz_context", ar = 10;

function dn() {
    let e = globalThis, t = typeof window < "u" ? window : void 0,
        n = e.getChatMessages ?? t?.getChatMessages ?? e.TavernHelper?.getChatMessages ?? t?.TavernHelper?.getChatMessages,
        r = e.setChatMessages ?? t?.setChatMessages ?? e.TavernHelper?.setChatMessages ?? t?.TavernHelper?.setChatMessages;
    if (m("storage", "\u68C0\u67E5\u804A\u5929\u6D88\u606F\u63A5\u53E3", {
        hasGetChatMessages: typeof n == "function",
        hasSetChatMessages: typeof r == "function"
    }), !n || !r) {
        let s = new Error("\u672A\u627E\u5230 getChatMessages / setChatMessages\uFF0C\u65E0\u6CD5\u8BFB\u5199\u697C\u5C42\u72B6\u6001");
        throw ye("storage", "\u83B7\u53D6\u804A\u5929\u6D88\u606F\u63A5\u53E3\u5931\u8D25", s), s
    }
    return {getChatMessages: n, setChatMessages: r}
}

function Ei(e) {
    let t = dn().getChatMessages(e, {include_swipes: !1}) ?? [], n = Array.isArray(t) ? t[0] ?? null : null;
    return m("storage", "\u8BFB\u53D6\u5355\u6761\u6D88\u606F\u5B8C\u6210", {messageId: e, summary: J(n)}), n
}

function xi(e) {
    if (typeof e == "number" && e < 0) return m("storage", "\u8BFB\u53D6\u6D88\u606F\u5217\u8868\u5B8C\u6210", {
        range: "empty",
        count: 0
    }), [];
    let t = typeof e == "number" ? `0-${e}` : "0-{{lastMessageId}}",
        n = dn().getChatMessages(t, {include_swipes: !1}) ?? [];
    return m("storage", "\u8BFB\u53D6\u6D88\u606F\u5217\u8868\u5B8C\u6210", {range: t, count: n.length}), n
}

function Bc(e) {
    let t = xi(e);
    for (let n = t.length - 1; n >= 0; n -= 1) {
        let r = _.get(t[n], ["data", Bt]);
        if (r) return m("storage", "\u8BFB\u53D6\u539F\u59CB\u72B6\u6001\u5FEB\u7167", {
            sourceMessageId: t[n].message_id,
            summary: J(r)
        }), r
    }
    m("storage", "\u672A\u627E\u5230\u72B6\u6001\u5FEB\u7167", {upToMessageId: e ?? null})
}

function lr(e) {
    let t = Bc(e), n = fn(cn(t));
    return m("storage", "\u52A0\u8F7D\u72B6\u6001\u5B8C\u6210", {upToMessageId: e ?? null, raw: J(t), state: $e(n)}), n
}

async function jc() {
    let t = xi().filter(s => _.has(s.data, Bt));
    if (t.length <= ar) {
        m("storage", "\u65E0\u9700\u6E05\u7406\u8FC7\u671F\u72B6\u6001\u5FEB\u7167", {snapshots: t.length, limit: ar});
        return
    }
    let r = t.slice(0, t.length - ar).map(s => {
        let o = {...s.data || {}};
        return delete o[Bt], {message_id: s.message_id, data: o}
    });
    m("storage", "\u51C6\u5907\u6E05\u7406\u8FC7\u671F\u72B6\u6001\u5FEB\u7167", {
        keep: ar,
        removeCount: r.length,
        removedMessageIds: r.map(s => s.message_id)
    }), await dn().setChatMessages(r, {refresh: "none"}), m("storage", "\u8FC7\u671F\u72B6\u6001\u5FEB\u7167\u6E05\u7406\u5B8C\u6210", {removedMessageIds: r.map(s => s.message_id)})
}

async function vs(e, t) {
    let n = Ei(e);
    if (!n) throw new Error(`\u672A\u627E\u5230\u8981\u66F4\u65B0\u6B63\u6587\u7684\u6D88\u606F: ${e}`);
    m("storage", "\u51C6\u5907\u5199\u5165\u697C\u5C42\u6B63\u6587", {
        messageId: e,
        before: J(n.message),
        after: J(t)
    }), await dn().setChatMessages([{
        message_id: e,
        message: t
    }], {refresh: "affected"}), m("storage", "\u697C\u5C42\u6B63\u6587\u5199\u5165\u5B8C\u6210", {messageId: e})
}

async function ki(e, t) {
    let n = fn(cn(e)), r = Ei(t);
    if (!r) throw new Error(`\u672A\u627E\u5230\u8981\u5199\u5165\u72B6\u6001\u7684\u6D88\u606F: ${t}`);
    let s = {...r.data || {}, [Bt]: n};
    m("storage", "\u51C6\u5907\u5199\u5165\u697C\u5C42\u72B6\u6001", {
        messageId: t,
        before: J(r.data?.[Bt]),
        next: $e(n)
    });
    try {
        await dn().setChatMessages([{
            message_id: t,
            data: s
        }], {refresh: "none"}), m("storage", "\u697C\u5C42\u72B6\u6001\u5199\u5165\u5B8C\u6210", {
            messageId: t,
            after: J(s[Bt])
        }), await jc()
    } catch (o) {
        throw ye("storage", "\u697C\u5C42\u72B6\u6001\u5199\u5165\u5931\u8D25", o), o
    }
    return n
}

function Ni(e, t = pn) {
    return m("storage", "\u697C\u5C42\u7EA7\u65B9\u6848\u4E0B\u8DF3\u8FC7\u4E0A\u4E0B\u6587\u5B8F\u6301\u4E45\u5316", {
        rootKey: t,
        summary: J(e)
    }), String(e || "")
}

var Kc = ["\u5F53\u524D\u751F\u547D\u503C", "\u5F53\u524D\u4F53\u529B\u503C", "\u58F0\u671B", "\u91D1\u94B1", "\u79EF\u5206", "\u540E\u5BAB\u548C\u8C10\u5EA6"];

function ot(e, t) {
    return _.mergeWith(e, t, (n, r) => _.isArray(r) ? r : void 0)
}

function gn(e, t) {
    if (!e) throw new Error(t);
    return e
}

function Wc(e, t) {
    let n = t.mode ?? "delta";
    for (let r of Kc) {
        let s = t.changes[r];
        if (s === void 0) continue;
        let o = K(e.\u4E3B\u89D2[r]);
        e.\u4E3B\u89D2[r] = n === "set" ? K(s) : o + K(s)
    }
    e.\u4E3B\u89D2 = ir(e.\u4E3B\u89D2)
}

function zc(e, t) {
    e.\u4E16\u754C = Ct(ot(_.cloneDeep(e.\u4E16\u754C), t.changes))
}

function Gc(e, t) {
    e.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6.push({
        \u4E8B\u4EF6\u540D: String(t.event.\u4E8B\u4EF6\u540D || ""),
        \u7B80\u8FF0: String(t.event.\u7B80\u8FF0 || ""),
        \u65E5\u671F: String(t.event.\u65E5\u671F || "")
    }), e.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6 = e.\u4E16\u754C.\u8FD1\u671F\u4E8B\u4EF6.slice(-5)
}

function Yc(e, t) {
    e.\u4E3B\u89D2 = ir(ln(ot(_.cloneDeep(e.\u4E3B\u89D2), t.changes)))
}

function _t(e, t) {
    return gn(e.\u52BF\u529B[t], `\u52BF\u529B\u4E0D\u5B58\u5728: ${t}`)
}

function qc(e, t) {
    let n = e.\u52BF\u529B[t.factionId];
    if (!n && t.createIfMissing === !1) throw new Error(`\u52BF\u529B\u4E0D\u5B58\u5728: ${t.factionId}`);
    e.\u52BF\u529B[t.factionId] = st(ot(_.cloneDeep(n ?? st()), t.changes))
}

function Jc(e, t) {
    let n = _t(e, t.factionId), r = n.\u57CE\u6C60[t.id];
    if (!r && t.createIfMissing === !1) throw new Error(`\u57CE\u6C60\u4E0D\u5B58\u5728: ${t.id}`);
    let s = mt(ot(_.cloneDeep(r ?? mt()), t.data));
    n.\u57CE\u6C60[t.id] = s
}

function Xc(e, t) {
    let n = _t(e, t.factionId), r = gn(n.\u57CE\u6C60[t.id], `\u57CE\u6C60\u4E0D\u5B58\u5728: ${t.id}`),
        s = new Set([...r.\u8BBE\u65BD || [], String(t.facility || "")].filter(Boolean));
    n.\u57CE\u6C60[t.id] = mt({...r, \u8BBE\u65BD: [...s]})
}

function Qc(e, t) {
    let n = _t(e, t.factionId), r = gn(n.\u57CE\u6C60[t.id], `\u57CE\u6C60\u4E0D\u5B58\u5728: ${t.id}`);
    n.\u57CE\u6C60[t.id] = mt({...r, \u8BBE\u65BD: (r.\u8BBE\u65BD || []).filter(s => s !== t.facility)})
}

function Zc(e, t) {
    let n = _t(e, t.factionId), r = n.\u519B\u961F[t.id];
    if (!r && t.createIfMissing === !1) throw new Error(`\u519B\u961F\u4E0D\u5B58\u5728: ${t.id}`);
    let s = It(ot(_.cloneDeep(r ?? It()), t.data));
    n.\u519B\u961F[t.id] = s
}

function eu(e, t) {
    let n = _t(e, t.factionId);
    n.\u5916\u4EA4 = {...n.\u5916\u4EA4, ..._.mapValues(t.changes, r => Math.max(0, Math.min(100, K(r))))}
}

function tu(e, t) {
    let n = _t(e, t.factionId);
    n.\u653F\u7B56 = on(ot(_.cloneDeep(n.\u653F\u7B56), t.changes))
}

function nu(e, t) {
    let n = e.NPC[t.id];
    if (!n && t.createIfMissing === !1) throw new Error(`NPC \u4E0D\u5B58\u5728: ${t.id}`);
    let r = wt(ot(_.cloneDeep(n ?? wt()), t.data));
    e.NPC[t.id] = or(r)
}

function ru(e, t) {
    let n = gn(e.NPC[t.id], `NPC \u4E0D\u5B58\u5728: ${t.id}`), r = _.cloneDeep(n);
    t.\u597D\u611F !== void 0 && (r.\u597D\u611F = (t.mode ?? "delta") === "set" ? K(t.\u597D\u611F) : r.\u597D\u611F + K(t.\u597D\u611F)), t.\u7F81\u7ECA && (r.\u7F81\u7ECA = {...r.\u7F81\u7ECA, ..._.mapValues(t.\u7F81\u7ECA, s => String(s ?? ""))}), e.NPC[t.id] = or(wt(r))
}

function su(e, t) {
    let n = e.\u4EFB\u52A1[t.id];
    if (!n && t.createIfMissing === !1) throw new Error(`\u4EFB\u52A1\u4E0D\u5B58\u5728: ${t.id}`);
    let r = St(ot(_.cloneDeep(n ?? St()), t.data));
    e.\u4EFB\u52A1[t.id] = r
}

function ou(e, t) {
    let n = gn(e.\u4EFB\u52A1[t.id], `\u4EFB\u52A1\u4E0D\u5B58\u5728: ${t.id}`), r = _.cloneDeep(n);
    if (r.\u72B6\u6001 = t.\u72B6\u6001, t.\u76EE\u6807) for (let [s, o] of Object.entries(t.\u76EE\u6807)) r.\u76EE\u6807[s] = {
        ...r.\u76EE\u6807[s] ?? {
            \u7C7B\u578B: "\u4E3B\u8981",
            \u72B6\u6001: "\u672A\u5B8C\u6210",
            \u63CF\u8FF0: "",
            \u79EF\u5206: 0,
            \u5176\u4ED6\u5956\u52B1: ""
        }, ...o
    };
    e.\u4EFB\u52A1[t.id] = St(r)
}

function iu(e, t) {
    let n = e.\u5546\u57CE[t.id];
    if (!n && t.createIfMissing === !1) throw new Error(`\u5546\u54C1\u4E0D\u5B58\u5728: ${t.id}`);
    let r = Lt(ot(_.cloneDeep(n ?? Lt()), t.data));
    e.\u5546\u57CE[t.id] = r
}

function Oi(e, t) {
    se("executor", "\u5F00\u59CB\u6267\u884C\u547D\u4EE4", {input: J(t), before: $e(e)});
    try {
        let n = un(t), r = _.cloneDeep(e);
        for (let [o, i] of n.entries()) {
            switch (m("executor", "\u6267\u884C\u5355\u6761\u547D\u4EE4", {
                index: o,
                type: i.type,
                id: "id" in i ? i.id : void 0,
                factionId: "factionId" in i ? i.factionId : void 0
            }), i.type) {
                case"UpdateWorld":
                    zc(r, i);
                    break;
                case"AppendRecentEvent":
                    Gc(r, i);
                    break;
                case"UpdatePlayerBase":
                    Yc(r, i);
                    break;
                case"AdjustPlayerResource":
                    Wc(r, i);
                    break;
                case"UpdateFaction":
                    qc(r, i);
                    break;
                case"UpsertCity":
                    Jc(r, i);
                    break;
                case"AddCityFacility":
                    Xc(r, i);
                    break;
                case"RemoveCityFacility":
                    Qc(r, i);
                    break;
                case"RemoveCity":
                    delete _t(r, i.factionId).\u57CE\u6C60[i.id];
                    break;
                case"UpsertArmy":
                    Zc(r, i);
                    break;
                case"RemoveArmy":
                    delete _t(r, i.factionId).\u519B\u961F[i.id];
                    break;
                case"UpdateDiplomacy":
                    eu(r, i);
                    break;
                case"UpdatePolicy":
                    tu(r, i);
                    break;
                case"UpsertNpc":
                    nu(r, i);
                    break;
                case"UpdateNpcRelation":
                    ru(r, i);
                    break;
                case"RemoveNpc":
                    delete r.NPC[i.id];
                    break;
                case"UpsertQuest":
                    su(r, i);
                    break;
                case"UpdateQuestState":
                    ou(r, i);
                    break;
                case"RemoveQuest":
                    delete r.\u4EFB\u52A1[i.id];
                    break;
                case"UpsertShopItem":
                    iu(r, i);
                    break;
                case"RemoveShopItem":
                    delete r.\u5546\u57CE[i.id];
                    break
            }
            m("executor", "\u5355\u6761\u547D\u4EE4\u6267\u884C\u540E\u72B6\u6001\u6458\u8981", {
                index: o,
                type: i.type,
                state: $e(r)
            })
        }
        let s = fn(r);
        return se("executor", "\u547D\u4EE4\u6267\u884C\u5B8C\u6210", {applied: n.length, after: $e(s)}), {
            state: s,
            applied: n
        }
    } catch (n) {
        throw ye("executor", "\u6267\u884C\u547D\u4EE4\u5931\u8D25", n), n
    }
}

async function wi(e, t, n) {
    se("executor", "\u5F00\u59CB\u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4", {messageId: n});
    let r = Oi(e, t), s = await ki(r.state, n);
    return se("executor", "\u6267\u884C\u5E76\u4FDD\u5B58\u547D\u4EE4\u5B8C\u6210", {
        messageId: n,
        applied: r.applied.length,
        state: $e(s)
    }), {...r, state: s}
}

var au = 8, lu = 8, cu = 12;

function uu(e, t) {
    return !t || e.\u6B66\u5C06\u4FE1\u606F?.\u9A7B\u624E\u5730 === t ? !0 : String(e.\u5B9A\u4F4D || "").includes(t) || String(e.\u7B80\u8FF0 || "").includes(t)
}

function fu(e, t = au) {
    let n = e.\u4E16\u754C.\u5F53\u524D\u5730\u70B9, r = Object.entries(e.NPC || {}), s = r.filter(([, i]) => uu(i, n)),
        o = (s.length > 0 ? s : r).slice(0, t);
    return Object.fromEntries(o)
}

function pu(e, t = lu) {
    let n = Object.entries(e.\u4EFB\u52A1 || {}).filter(([, r]) => ["\u8FDB\u884C\u4E2D", "\u53EF\u63D0\u4EA4", "\u53EF\u63A5\u53D6"].includes(r.\u72B6\u6001));
    return Object.fromEntries(n.slice(0, t))
}

function du(e, t = cu) {
    return Object.fromEntries(Object.entries(e.\u5546\u57CE || {}).slice(0, t))
}

function gu(e) {
    let t = Object.entries(e.\u52BF\u529B || {});
    if (t.length === 0) return null;
    let [n, r] = t[0];
    return {id: n, \u6570\u636E: r}
}

function Si(e) {
    return {
        \u4E16\u754C: _.cloneDeep(e.\u4E16\u754C),
        \u4E3B\u89D2: _.cloneDeep(e.\u4E3B\u89D2),
        \u52BF\u529B: _.cloneDeep(e.\u52BF\u529B),
        \u5F53\u524D\u52BF\u529B: _.cloneDeep(gu(e)),
        \u5F53\u524D\u5730\u70B9\u76F8\u5173NPC: _.cloneDeep(fu(e)),
        \u8FDB\u884C\u4E2D\u4EFB\u52A1: _.cloneDeep(pu(e)),
        \u5546\u57CE: _.cloneDeep(du(e))
    }
}

function Es(e, t = 2) {
    return ["[\u4E09\u56FD\u9738\u4E3B\u7CFB\u7EDF\u72B6\u6001]", "\u4EE5\u4E0B\u72B6\u6001\u4E3A\u53EA\u8BFB\u4E0A\u4E0B\u6587\uFF1B\u4E0B\u5212\u7EBF\u5B57\u6BB5\u4EE3\u8868\u53EA\u8BFB\u6D3E\u751F\u5B57\u6BB5\uFF0CAI \u4E0D\u53EF\u76F4\u63A5\u4FEE\u6539\u3002", JSON.stringify(Si(e), null, t)].join(`
`)
}

function Ci(e, t = 2) {
    return Es(e, t)
}

function Di(e) {
    return Es(e)
}

function hu(e) {
    return Ci(e)
}

function Ti(e, t, n = [], r) {
    return sr(String(e || ""))
}

function Pi(e, t = pn) {
    return m("bridge", "\u5237\u65B0\u4E0A\u4E0B\u6587\u5B8F", {macroKey: t, state: $e(e)}), Ni(hu(e), t)
}

function mu(e) {
    m("bridge", "\u5F00\u59CB\u4ECE\u56DE\u590D\u63D0\u53D6\u547D\u4EE4\u4E0E\u9009\u9879", J(e));
    try {
        let t = rr(e), n = t.commandsText ? un(t.commands) : [], r = Ft(t.replyText), s = t.replyText;
        return se("bridge", "\u547D\u4EE4\u4E0E\u9009\u9879\u63D0\u53D6\u5B8C\u6210", {
            hasCommandsText: !!t.commandsText,
            commandsCount: n.length,
            playerOptionsCount: r.length,
            cleanedReply: J(s)
        }), {commandsText: t.commandsText, commands: n, playerOptions: r, cleanedReplyText: s}
    } catch (t) {
        throw ye("bridge", "\u63D0\u53D6\u547D\u4EE4\u5931\u8D25", t), t
    }
}

async function _u(e, t, n, r = pn, s = !0) {
    m("bridge", "\u5F00\u59CB\u63D0\u53D6\u3001\u5E94\u7528\u5E76\u4FDD\u5B58\u547D\u4EE4", {
        messageId: n,
        macroKey: r,
        state: $e(t)
    });
    let o = mu(e);
    if (m("bridge", "\u63D0\u53D6\u3001\u5E94\u7528\u5E76\u4FDD\u5B58\u547D\u4EE4\u63D0\u53D6\u7ED3\u679C", {
        messageId: n,
        macroKey: r,
        hasCommandsText: !!o.commandsText,
        commandsCount: o.commands.length,
        playerOptionsCount: o.playerOptions.length
    }), o.commands.length === 0) return se("bridge", s ? "\u672A\u63D0\u53D6\u5230\u547D\u4EE4\uFF0C\u4EC5\u5237\u65B0\u4E0A\u4E0B\u6587\u5B8F" : "\u672A\u63D0\u53D6\u5230\u547D\u4EE4\uFF0C\u4EC5\u8BB0\u5F55\u65E5\u5FD7", {
        macroKey: r,
        refreshMacroOnNoCommands: s
    }), await vs(n, Ti(o.cleanedReplyText, t, o.playerOptions, n)), s && Pi(t, r), {
        state: _.cloneDeep(t),
        applied: [],
        commandsText: null,
        playerOptions: o.playerOptions,
        cleanedReplyText: o.cleanedReplyText
    };
    let i = await wi(t, o.commands, n);
    return await vs(n, Ti(o.cleanedReplyText, i.state, o.playerOptions, n)), Pi(i.state, r), se("bridge", "\u63D0\u53D6\u3001\u5E94\u7528\u5E76\u4FDD\u5B58\u547D\u4EE4\u5B8C\u6210", {
        messageId: n,
        macroKey: r,
        applied: i.applied.length,
        playerOptionsCount: o.playerOptions.length,
        state: $e(i.state)
    }), {...i, commandsText: o.commandsText, playerOptions: o.playerOptions, cleanedReplyText: o.cleanedReplyText}
}

async function hn(e, t = {}) {
    let {messageId: n, macroKey: r = pn, refreshMacroOnNoCommands: s = !1} = t;
    se("bridge", "\u5F00\u59CB\u5904\u7406 AI \u56DE\u590D", {
        messageId: n ?? null,
        macroKey: r,
        refreshMacroOnNoCommands: s,
        reply: J(e)
    });
    try {
        if (typeof n != "number") throw new Error("\u5904\u7406 AI \u56DE\u590D\u65F6\u5FC5\u987B\u63D0\u4F9B\u76EE\u6807 messageId");
        let o = lr(n - 1), i = await _u(e, o, n, r, s);
        return se("bridge", "AI \u56DE\u590D\u5904\u7406\u5B8C\u6210", {
            messageId: n,
            macroKey: r,
            applied: i.applied.length,
            hasCommandsText: !!i.commandsText,
            state: $e(i.state)
        }), i
    } catch (o) {
        throw ye("bridge", "\u5904\u7406 AI \u56DE\u590D\u5931\u8D25", o), o
    }
}

var Ai = /\{\{sgbz_context\}\}/gi, xs = [];

function Vi() {
    let e = globalThis, t = typeof e.registerMacroLike == "function" ? {
        registerMacroLike: e.registerMacroLike,
        unregisterMacroLike: typeof e.unregisterMacroLike == "function" ? e.unregisterMacroLike : void 0
    } : void 0, n = window.TavernHelper, r = t?.registerMacroLike ? t : n;
    if (!r?.registerMacroLike) throw new Error("\u672A\u627E\u5230 registerMacroLike\uFF0C\u65E0\u6CD5\u6CE8\u518C\u4E09\u56FD\u9738\u4E3B\u7CFB\u7EDF\u5B8F");
    return {registerMacroLike: r.registerMacroLike, unregisterMacroLike: r.unregisterMacroLike}
}

function yu(e) {
    return Di(lr(e))
}

function bu() {
    let e = Vi();
    for (let t of xs) t.unregister(), e.unregisterMacroLike?.(t.regex);
    xs = []
}

function ks() {
    bu();
    let t = Vi().registerMacroLike(Ai, n => yu(n.message_id));
    xs.push({regex: Ai, unregister: t.unregister})
}

function Le() {
    if (typeof document > "u") throw new Error("document is not available");
    try {
        if (typeof parent < "u" && parent && parent !== window && parent.document) return parent.document
    } catch {
    }
    return document
}

function jt(e) {
    let t = Object.create(null);
    for (let n of e.split(",")) t[n] = 1;
    return n => n in t
}

var ae = {}, Tt = [], Ke = () => {
    }, Os = () => !1,
    Kt = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
    mn = e => e.startsWith("onUpdate:"), Ne = Object.assign, cr = (e, t) => {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    }, vu = Object.prototype.hasOwnProperty, X = (e, t) => vu.call(e, t), W = Array.isArray,
    Pt = e => _n(e) === "[object Map]", ur = e => _n(e) === "[object Set]", Ri = e => _n(e) === "[object Date]";
var te = e => typeof e == "function", he = e => typeof e == "string", He = e => typeof e == "symbol",
    oe = e => e !== null && typeof e == "object", ws = e => (oe(e) || te(e)) && te(e.then) && te(e.catch),
    $i = Object.prototype.toString, _n = e => $i.call(e), Ss = e => _n(e).slice(8, -1),
    fr = e => _n(e) === "[object Object]", pr = e => he(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    Wt = jt(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
var dr = e => {
        let t = Object.create(null);
        return (n => t[n] || (t[n] = e(n)))
    }, Eu = /-\w/g, Se = dr(e => e.replace(Eu, t => t.slice(1).toUpperCase())), xu = /\B([A-Z])/g,
    it = dr(e => e.replace(xu, "-$1").toLowerCase()), yn = dr(e => e.charAt(0).toUpperCase() + e.slice(1)),
    bn = dr(e => e ? `on${yn(e)}` : ""), Ue = (e, t) => !Object.is(e, t), vn = (e, ...t) => {
        for (let n = 0; n < e.length; n++) e[n](...t)
    }, gr = (e, t, n, r = !1) => {
        Object.defineProperty(e, t, {configurable: !0, enumerable: !1, writable: r, value: n})
    }, Cs = e => {
        let t = parseFloat(e);
        return isNaN(t) ? e : t
    };
var Mi,
    En = () => Mi || (Mi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Ce(e) {
    if (W(e)) {
        let t = {};
        for (let n = 0; n < e.length; n++) {
            let r = e[n], s = he(r) ? wu(r) : Ce(r);
            if (s) for (let o in s) t[o] = s[o]
        }
        return t
    } else if (he(e) || oe(e)) return e
}

var ku = /;(?![^(]*\))/g, Nu = /:([^]+)/, Ou = /\/\*[^]*?\*\//g;

function wu(e) {
    let t = {};
    return e.replace(Ou, "").split(ku).forEach(n => {
        if (n) {
            let r = n.split(Nu);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function me(e) {
    let t = "";
    if (he(e)) t = e; else if (W(e)) for (let n = 0; n < e.length; n++) {
        let r = me(e[n]);
        r && (t += r + " ")
    } else if (oe(e)) for (let n in e) e[n] && (t += n + " ");
    return t.trim()
}

var Ii = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Li = jt(Ii),
    Su = jt(Ii + ",async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");

function hr(e) {
    return !!e || e === ""
}

function Cu(e, t) {
    if (e.length !== t.length) return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++) n = xn(e[r], t[r]);
    return n
}

function xn(e, t) {
    if (e === t) return !0;
    let n = Ri(e), r = Ri(t);
    if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
    if (n = He(e), r = He(t), n || r) return e === t;
    if (n = W(e), r = W(t), n || r) return n && r ? Cu(e, t) : !1;
    if (n = oe(e), r = oe(t), n || r) {
        if (!n || !r) return !1;
        let s = Object.keys(e).length, o = Object.keys(t).length;
        if (s !== o) return !1;
        for (let i in e) {
            let a = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
            if (a && !c || !a && c || !xn(e[i], t[i])) return !1
        }
    }
    return String(e) === String(t)
}

var Hi = e => !!(e && e.__v_isRef === !0),
    S = e => he(e) ? e : e == null ? "" : W(e) || oe(e) && (e.toString === $i || !te(e.toString)) ? Hi(e) ? S(e.value) : JSON.stringify(e, Fi, 2) : String(e),
    Fi = (e, t) => Hi(t) ? Fi(e, t.value) : Pt(t) ? {[`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s], o) => (n[Ns(r, o) + " =>"] = s, n), {})} : ur(t) ? {[`Set(${t.size})`]: [...t.values()].map(n => Ns(n))} : He(t) ? Ns(t) : oe(t) && !W(t) && !fr(t) ? String(t) : t,
    Ns = (e, t = "") => {
        var n;
        return He(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
    };

function Tu(e, ...t) {
    console.warn(`[Vue warn] ${e}`, ...t)
}

var De, wn = class {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = De, !t && De && (this.index = (De.scopes || (De.scopes = [])).push(this) - 1)
    }

    get active() {
        return this._active
    }

    pause() {
        if (this._active) {
            this._isPaused = !0;
            let t, n;
            if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].pause();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].pause()
        }
    }

    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let t, n;
            if (this.scopes) for (t = 0, n = this.scopes.length; t < n; t++) this.scopes[t].resume();
            for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].resume()
        }
    }

    run(t) {
        if (this._active) {
            let n = De;
            try {
                return De = this, t()
            } finally {
                De = n
            }
        }
    }

    on() {
        ++this._on === 1 && (this.prevScope = De, De = this)
    }

    off() {
        this._on > 0 && --this._on === 0 && (De = this.prevScope, this.prevScope = void 0)
    }

    stop(t) {
        if (this._active) {
            this._active = !1;
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (this.effects.length = 0, n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.cleanups.length = 0, this.scopes) {
                for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !t) {
                let s = this.parent.scopes.pop();
                s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index)
            }
            this.parent = void 0
        }
    }
};

function ji() {
    return De
}

var le;
var Ts = new WeakSet, Gt = class {
    constructor(t) {
        this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, De && De.active && De.effects.push(this)
    }

    pause() {
        this.flags |= 64
    }

    resume() {
        this.flags & 64 && (this.flags &= -65, Ts.has(this) && (Ts.delete(this), this.trigger()))
    }

    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Wi(this)
    }

    run() {
        if (!(this.flags & 1)) return this.fn();
        this.flags |= 2, Ui(this), zi(this);
        let t = le, n = We;
        le = this, We = !0;
        try {
            return this.fn()
        } finally {
            Gi(this), le = t, We = n, this.flags &= -3
        }
    }

    stop() {
        if (this.flags & 1) {
            for (let t = this.deps; t; t = t.nextDep) Bs(t);
            this.deps = this.depsTail = void 0, Ui(this), this.onStop && this.onStop(), this.flags &= -2
        }
    }

    trigger() {
        this.flags & 64 ? Ts.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }

    runIfDirty() {
        As(this) && this.run()
    }

    get dirty() {
        return As(this)
    }
}, Ki = 0, Nn, On;

function Wi(e, t = !1) {
    if (e.flags |= 8, t) {
        e.next = On, On = e;
        return
    }
    e.next = Nn, Nn = e
}

function Fs() {
    Ki++
}

function Us() {
    if (--Ki > 0) return;
    if (On) {
        let t = On;
        for (On = void 0; t;) {
            let n = t.next;
            t.next = void 0, t.flags &= -9, t = n
        }
    }
    let e;
    for (; Nn;) {
        let t = Nn;
        for (Nn = void 0; t;) {
            let n = t.next;
            if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
                t.trigger()
            } catch (r) {
                e || (e = r)
            }
            t = n
        }
    }
    if (e) throw e
}

function zi(e) {
    for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t
}

function Gi(e) {
    let t, n = e.depsTail, r = n;
    for (; r;) {
        let s = r.prevDep;
        r.version === -1 ? (r === n && (n = s), Bs(r), Pu(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s
    }
    e.deps = t, e.depsTail = n
}

function As(e) {
    for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (Yi(t.dep.computed) || t.dep.version !== t.version)) return !0;
    return !!e._dirty
}

function Yi(e) {
    if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Sn) || (e.globalVersion = Sn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !As(e)))) return;
    e.flags |= 2;
    let t = e.dep, n = le, r = We;
    le = e, We = !0;
    try {
        zi(e);
        let s = e.fn(e._value);
        (t.version === 0 || Ue(s, e._value)) && (e.flags |= 128, e._value = s, t.version++)
    } catch (s) {
        throw t.version++, s
    } finally {
        le = n, We = r, Gi(e), e.flags &= -3
    }
}

function Bs(e, t = !1) {
    let {dep: n, prevSub: r, nextSub: s} = e;
    if (r && (r.nextSub = s, e.prevSub = void 0), s && (s.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
        n.computed.flags &= -5;
        for (let o = n.computed.deps; o; o = o.nextDep) Bs(o, !0)
    }
    !t && !--n.sc && n.map && n.map.delete(n.key)
}

function Pu(e) {
    let {prevDep: t, nextDep: n} = e;
    t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0)
}

var We = !0, qi = [];

function ut() {
    qi.push(We), We = !1
}

function ft() {
    let e = qi.pop();
    We = e === void 0 ? !0 : e
}

function Ui(e) {
    let {cleanup: t} = e;
    if (e.cleanup = void 0, t) {
        let n = le;
        le = void 0;
        try {
            t()
        } finally {
            le = n
        }
    }
}

var Sn = 0, Vs = class {
    constructor(t, n) {
        this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}, Cn = class {
    constructor(t) {
        this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0
    }

    track(t) {
        if (!le || !We || le === this.computed) return;
        let n = this.activeLink;
        if (n === void 0 || n.sub !== le) n = this.activeLink = new Vs(le, this), le.deps ? (n.prevDep = le.depsTail, le.depsTail.nextDep = n, le.depsTail = n) : le.deps = le.depsTail = n, Ji(n); else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
            let r = n.nextDep;
            r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = le.depsTail, n.nextDep = void 0, le.depsTail.nextDep = n, le.depsTail = n, le.deps === n && (le.deps = r)
        }
        return n
    }

    trigger(t) {
        this.version++, Sn++, this.notify(t)
    }

    notify(t) {
        Fs();
        try {
            for (let n = this.subs; n; n = n.prevSub) n.sub.notify() && n.sub.dep.notify()
        } finally {
            Us()
        }
    }
};

function Ji(e) {
    if (e.dep.sc++, e.sub.flags & 4) {
        let t = e.dep.computed;
        if (t && !e.dep.subs) {
            t.flags |= 20;
            for (let r = t.deps; r; r = r.nextDep) Ji(r)
        }
        let n = e.dep.subs;
        n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e
    }
}

var Rs = new WeakMap, At = Symbol(""), Ms = Symbol(""), Tn = Symbol("");

function be(e, t, n) {
    if (We && le) {
        let r = Rs.get(e);
        r || Rs.set(e, r = new Map);
        let s = r.get(n);
        s || (r.set(n, s = new Cn), s.map = r, s.key = n), s.track()
    }
}

function Xe(e, t, n, r, s, o) {
    let i = Rs.get(e);
    if (!i) {
        Sn++;
        return
    }
    let a = c => {
        c && c.trigger()
    };
    if (Fs(), t === "clear") i.forEach(a); else {
        let c = W(e), d = c && pr(n);
        if (c && n === "length") {
            let f = Number(r);
            i.forEach((g, b) => {
                (b === "length" || b === Tn || !He(b) && b >= f) && a(g)
            })
        } else switch ((n !== void 0 || i.has(void 0)) && a(i.get(n)), d && a(i.get(Tn)), t) {
            case"add":
                c ? d && a(i.get("length")) : (a(i.get(At)), Pt(e) && a(i.get(Ms)));
                break;
            case"delete":
                c || (a(i.get(At)), Pt(e) && a(i.get(Ms)));
                break;
            case"set":
                Pt(e) && a(i.get(At));
                break
        }
    }
    Us()
}

function zt(e) {
    let t = Y(e);
    return t === e ? t : (be(t, "iterate", Tn), Ae(e) ? t : t.map(Be))
}

function Pn(e) {
    return be(e = Y(e), "iterate", Tn), e
}

function Je(e, t) {
    return ze(e) ? Vt(ct(e) ? Be(t) : t) : Be(t)
}

var Du = {
    __proto__: null, [Symbol.iterator]() {
        return Ps(this, Symbol.iterator, e => Je(this, e))
    }, concat(...e) {
        return zt(this).concat(...e.map(t => W(t) ? zt(t) : t))
    }, entries() {
        return Ps(this, "entries", e => (e[1] = Je(this, e[1]), e))
    }, every(e, t) {
        return at(this, "every", e, t, void 0, arguments)
    }, filter(e, t) {
        return at(this, "filter", e, t, n => n.map(r => Je(this, r)), arguments)
    }, find(e, t) {
        return at(this, "find", e, t, n => Je(this, n), arguments)
    }, findIndex(e, t) {
        return at(this, "findIndex", e, t, void 0, arguments)
    }, findLast(e, t) {
        return at(this, "findLast", e, t, n => Je(this, n), arguments)
    }, findLastIndex(e, t) {
        return at(this, "findLastIndex", e, t, void 0, arguments)
    }, forEach(e, t) {
        return at(this, "forEach", e, t, void 0, arguments)
    }, includes(...e) {
        return Ds(this, "includes", e)
    }, indexOf(...e) {
        return Ds(this, "indexOf", e)
    }, join(e) {
        return zt(this).join(e)
    }, lastIndexOf(...e) {
        return Ds(this, "lastIndexOf", e)
    }, map(e, t) {
        return at(this, "map", e, t, void 0, arguments)
    }, pop() {
        return kn(this, "pop")
    }, push(...e) {
        return kn(this, "push", e)
    }, reduce(e, ...t) {
        return Bi(this, "reduce", e, t)
    }, reduceRight(e, ...t) {
        return Bi(this, "reduceRight", e, t)
    }, shift() {
        return kn(this, "shift")
    }, some(e, t) {
        return at(this, "some", e, t, void 0, arguments)
    }, splice(...e) {
        return kn(this, "splice", e)
    }, toReversed() {
        return zt(this).toReversed()
    }, toSorted(e) {
        return zt(this).toSorted(e)
    }, toSpliced(...e) {
        return zt(this).toSpliced(...e)
    }, unshift(...e) {
        return kn(this, "unshift", e)
    }, values() {
        return Ps(this, "values", e => Je(this, e))
    }
};

function Ps(e, t, n) {
    let r = Pn(e), s = r[t]();
    return r !== e && !Ae(e) && (s._next = s.next, s.next = () => {
        let o = s._next();
        return o.done || (o.value = n(o.value)), o
    }), s
}

var Au = Array.prototype;

function at(e, t, n, r, s, o) {
    let i = Pn(e), a = i !== e && !Ae(e), c = i[t];
    if (c !== Au[t]) {
        let g = c.apply(e, o);
        return a ? Be(g) : g
    }
    let d = n;
    i !== e && (a ? d = function (g, b) {
        return n.call(this, Je(e, g), b, e)
    } : n.length > 2 && (d = function (g, b) {
        return n.call(this, g, b, e)
    }));
    let f = c.call(i, d, r);
    return a && s ? s(f) : f
}

function Bi(e, t, n, r) {
    let s = Pn(e), o = s !== e && !Ae(e), i = n, a = !1;
    s !== e && (o ? (a = r.length === 0, i = function (d, f, g) {
        return a && (a = !1, d = Je(e, d)), n.call(this, d, Je(e, f), g, e)
    }) : n.length > 3 && (i = function (d, f, g) {
        return n.call(this, d, f, g, e)
    }));
    let c = s[t](i, ...r);
    return a ? Je(e, c) : c
}

function Ds(e, t, n) {
    let r = Y(e);
    be(r, "iterate", Tn);
    let s = r[t](...n);
    return (s === -1 || s === !1) && Dn(n[0]) ? (n[0] = Y(n[0]), r[t](...n)) : s
}

function kn(e, t, n = []) {
    ut(), Fs();
    let r = Y(e)[t].apply(e, n);
    return Us(), ft(), r
}

var Vu = jt("__proto__,__v_isRef,__isVue"),
    Xi = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(He));

function Ru(e) {
    He(e) || (e = String(e));
    let t = Y(this);
    return be(t, "has", e), t.hasOwnProperty(e)
}

var br = class {
    constructor(t = !1, n = !1) {
        this._isReadonly = t, this._isShallow = n
    }

    get(t, n, r) {
        if (n === "__v_skip") return t.__v_skip;
        let s = this._isReadonly, o = this._isShallow;
        if (n === "__v_isReactive") return !s;
        if (n === "__v_isReadonly") return s;
        if (n === "__v_isShallow") return o;
        if (n === "__v_raw") return r === (s ? o ? ju : ea : o ? Zi : Qi).get(t) || Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
        let i = W(t);
        if (!s) {
            let c;
            if (i && (c = Du[n])) return c;
            if (n === "hasOwnProperty") return Ru
        }
        let a = Reflect.get(t, n, ve(t) ? t : r);
        if ((He(n) ? Xi.has(n) : Vu(n)) || (s || be(t, "get", n), o)) return a;
        if (ve(a)) {
            let c = i && pr(n) ? a : a.value;
            return s && oe(c) ? Er(c) : c
        }
        return oe(a) ? s ? Er(a) : Yt(a) : a
    }
}, vr = class extends br {
    constructor(t = !1) {
        super(!1, t)
    }

    set(t, n, r, s) {
        let o = t[n], i = W(t) && pr(n);
        if (!this._isShallow) {
            let d = ze(o);
            if (!Ae(r) && !ze(r) && (o = Y(o), r = Y(r)), !i && ve(o) && !ve(r)) return d || (o.value = r), !0
        }
        let a = i ? Number(n) < t.length : X(t, n), c = Reflect.set(t, n, r, ve(t) ? t : s);
        return t === Y(s) && (a ? Ue(r, o) && Xe(t, "set", n, r, o) : Xe(t, "add", n, r)), c
    }

    deleteProperty(t, n) {
        let r = X(t, n), s = t[n], o = Reflect.deleteProperty(t, n);
        return o && r && Xe(t, "delete", n, void 0, s), o
    }

    has(t, n) {
        let r = Reflect.has(t, n);
        return (!He(n) || !Xi.has(n)) && be(t, "has", n), r
    }

    ownKeys(t) {
        return be(t, "iterate", W(t) ? "length" : At), Reflect.ownKeys(t)
    }
}, $s = class extends br {
    constructor(t = !1) {
        super(!0, t)
    }

    set(t, n) {
        return !0
    }

    deleteProperty(t, n) {
        return !0
    }
}, Mu = new vr, $u = new $s, Iu = new vr(!0);
var Is = e => e, mr = e => Reflect.getPrototypeOf(e);

function Lu(e, t, n) {
    return function (...r) {
        let s = this.__v_raw, o = Y(s), i = Pt(o), a = e === "entries" || e === Symbol.iterator && i,
            c = e === "keys" && i, d = s[e](...r), f = n ? Is : t ? Vt : Be;
        return !t && be(o, "iterate", c ? Ms : At), Ne(Object.create(d), {
            next() {
                let {value: g, done: b} = d.next();
                return b ? {value: g, done: b} : {value: a ? [f(g[0]), f(g[1])] : f(g), done: b}
            }
        })
    }
}

function _r(e) {
    return function (...t) {
        return e === "delete" ? !1 : e === "clear" ? void 0 : this
    }
}

function Hu(e, t) {
    let n = {
        get(s) {
            let o = this.__v_raw, i = Y(o), a = Y(s);
            e || (Ue(s, a) && be(i, "get", s), be(i, "get", a));
            let {has: c} = mr(i), d = t ? Is : e ? Vt : Be;
            if (c.call(i, s)) return d(o.get(s));
            if (c.call(i, a)) return d(o.get(a));
            o !== i && o.get(s)
        }, get size() {
            let s = this.__v_raw;
            return !e && be(Y(s), "iterate", At), s.size
        }, has(s) {
            let o = this.__v_raw, i = Y(o), a = Y(s);
            return e || (Ue(s, a) && be(i, "has", s), be(i, "has", a)), s === a ? o.has(s) : o.has(s) || o.has(a)
        }, forEach(s, o) {
            let i = this, a = i.__v_raw, c = Y(a), d = t ? Is : e ? Vt : Be;
            return !e && be(c, "iterate", At), a.forEach((f, g) => s.call(o, d(f), d(g), i))
        }
    };
    return Ne(n, e ? {add: _r("add"), set: _r("set"), delete: _r("delete"), clear: _r("clear")} : {
        add(s) {
            let o = Y(this), i = mr(o), a = Y(s), c = !t && !Ae(s) && !ze(s) ? a : s;
            return i.has.call(o, c) || Ue(s, c) && i.has.call(o, s) || Ue(a, c) && i.has.call(o, a) || (o.add(c), Xe(o, "add", c, c)), this
        }, set(s, o) {
            !t && !Ae(o) && !ze(o) && (o = Y(o));
            let i = Y(this), {has: a, get: c} = mr(i), d = a.call(i, s);
            d || (s = Y(s), d = a.call(i, s));
            let f = c.call(i, s);
            return i.set(s, o), d ? Ue(o, f) && Xe(i, "set", s, o, f) : Xe(i, "add", s, o), this
        }, delete(s) {
            let o = Y(this), {has: i, get: a} = mr(o), c = i.call(o, s);
            c || (s = Y(s), c = i.call(o, s));
            let d = a ? a.call(o, s) : void 0, f = o.delete(s);
            return c && Xe(o, "delete", s, void 0, d), f
        }, clear() {
            let s = Y(this), o = s.size !== 0, i = void 0, a = s.clear();
            return o && Xe(s, "clear", void 0, void 0, i), a
        }
    }), ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        n[s] = Lu(s, e, t)
    }), n
}

function js(e, t) {
    let n = Hu(e, t);
    return (r, s, o) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(X(n, s) && s in r ? n : r, s, o)
}

var Fu = {get: js(!1, !1)}, Uu = {get: js(!1, !0)}, Bu = {get: js(!0, !1)};
var Qi = new WeakMap, Zi = new WeakMap, ea = new WeakMap, ju = new WeakMap;

function Ku(e) {
    switch (e) {
        case"Object":
        case"Array":
            return 1;
        case"Map":
        case"Set":
        case"WeakMap":
        case"WeakSet":
            return 2;
        default:
            return 0
    }
}

function Wu(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Ku(Ss(e))
}

function Yt(e) {
    return ze(e) ? e : Ws(e, !1, Mu, Fu, Qi)
}

function Ks(e) {
    return Ws(e, !1, Iu, Uu, Zi)
}

function Er(e) {
    return Ws(e, !0, $u, Bu, ea)
}

function Ws(e, t, n, r, s) {
    if (!oe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    let o = Wu(e);
    if (o === 0) return e;
    let i = s.get(e);
    if (i) return i;
    let a = new Proxy(e, o === 2 ? r : n);
    return s.set(e, a), a
}

function ct(e) {
    return ze(e) ? ct(e.__v_raw) : !!(e && e.__v_isReactive)
}

function ze(e) {
    return !!(e && e.__v_isReadonly)
}

function Ae(e) {
    return !!(e && e.__v_isShallow)
}

function Dn(e) {
    return e ? !!e.__v_raw : !1
}

function Y(e) {
    let t = e && e.__v_raw;
    return t ? Y(t) : e
}

function zs(e) {
    return !X(e, "__v_skip") && Object.isExtensible(e) && gr(e, "__v_skip", !0), e
}

var Be = e => oe(e) ? Yt(e) : e, Vt = e => oe(e) ? Er(e) : e;

function ve(e) {
    return e ? e.__v_isRef === !0 : !1
}

function Oe(e) {
    return zu(e, !1)
}

function zu(e, t) {
    return ve(e) ? e : new Ls(e, t)
}

var Ls = class {
    constructor(t, n) {
        this.dep = new Cn, this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : Y(t), this._value = n ? t : Be(t), this.__v_isShallow = n
    }

    get value() {
        return this.dep.track(), this._value
    }

    set value(t) {
        let n = this._rawValue, r = this.__v_isShallow || Ae(t) || ze(t);
        t = r ? t : Y(t), Ue(t, n) && (this._rawValue = t, this._value = r ? t : Be(t), this.dep.trigger())
    }
};

function Gs(e) {
    return ve(e) ? e.value : e
}

var Gu = {
    get: (e, t, n) => t === "__v_raw" ? e : Gs(Reflect.get(e, t, n)), set: (e, t, n, r) => {
        let s = e[t];
        return ve(s) && !ve(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function kr(e) {
    return ct(e) ? e : new Proxy(e, Gu)
}

var Hs = class {
    constructor(t, n, r) {
        this.fn = t, this.setter = n, this._value = void 0, this.dep = new Cn(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Sn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r
    }

    notify() {
        if (this.flags |= 16, !(this.flags & 8) && le !== this) return Wi(this, !0), !0
    }

    get value() {
        let t = this.dep.track();
        return Yi(this), t && (t.version = this.dep.version), this._value
    }

    set value(t) {
        this.setter && this.setter(t)
    }
};

function ta(e, t, n = !1) {
    let r, s;
    return te(e) ? r = e : (r = e.get, s = e.set), new Hs(r, s, n)
}

var yr = {}, xr = new WeakMap, Dt;

function na(e, t = !1, n = Dt) {
    if (n) {
        let r = xr.get(n);
        r || xr.set(n, r = []), r.push(e)
    }
}

function ra(e, t, n = ae) {
    let {immediate: r, deep: s, once: o, scheduler: i, augmentJob: a, call: c} = n, d = L => {
        (n.onWarn || Tu)("Invalid watch source: ", L, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")
    }, f = L => s ? L : Ae(L) || s === !1 || s === 0 ? lt(L, 1) : lt(L), g, b, O, A, V = !1, re = !1;
    if (ve(e) ? (b = () => e.value, V = Ae(e)) : ct(e) ? (b = () => f(e), V = !0) : W(e) ? (re = !0, V = e.some(L => ct(L) || Ae(L)), b = () => e.map(L => {
        if (ve(L)) return L.value;
        if (ct(L)) return f(L);
        if (te(L)) return c ? c(L, 2) : L()
    })) : te(e) ? t ? b = c ? () => c(e, 2) : e : b = () => {
        if (O) {
            ut();
            try {
                O()
            } finally {
                ft()
            }
        }
        let L = Dt;
        Dt = g;
        try {
            return c ? c(e, 3, [A]) : e(A)
        } finally {
            Dt = L
        }
    } : b = Ke, t && s) {
        let L = b, xe = s === !0 ? 1 / 0 : s;
        b = () => lt(L(), xe)
    }
    let G = ji(), q = () => {
        g.stop(), G && G.active && cr(G.effects, g)
    };
    if (o && t) {
        let L = t;
        t = (...xe) => {
            L(...xe), q()
        }
    }
    let U = re ? new Array(e.length).fill(yr) : yr, I = L => {
        if (!(!(g.flags & 1) || !g.dirty && !L)) if (t) {
            let xe = g.run();
            if (s || V || (re ? xe.some((kt, rt) => Ue(kt, U[rt])) : Ue(xe, U))) {
                O && O();
                let kt = Dt;
                Dt = g;
                try {
                    let rt = [xe, U === yr ? void 0 : re && U[0] === yr ? [] : U, A];
                    U = xe, c ? c(t, 3, rt) : t(...rt)
                } finally {
                    Dt = kt
                }
            }
        } else g.run()
    };
    return a && a(I), g = new Gt(b), g.scheduler = i ? () => i(I, !1) : I, A = L => na(L, !1, g), O = g.onStop = () => {
        let L = xr.get(g);
        if (L) {
            if (c) c(L, 4); else for (let xe of L) xe();
            xr.delete(g)
        }
    }, t ? r ? I(!0) : U = g.run() : i ? i(I.bind(null, !0), !0) : g.run(), q.pause = g.pause.bind(g), q.resume = g.resume.bind(g), q.stop = q, q
}

function lt(e, t = 1 / 0, n) {
    if (t <= 0 || !oe(e) || e.__v_skip || (n = n || new Map, (n.get(e) || 0) >= t)) return e;
    if (n.set(e, t), t--, ve(e)) lt(e.value, t, n); else if (W(e)) for (let r = 0; r < e.length; r++) lt(e[r], t, n); else if (ur(e) || Pt(e)) e.forEach(r => {
        lt(r, t, n)
    }); else if (fr(e)) {
        for (let r in e) lt(e[r], t, n);
        for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && lt(e[r], t, n)
    }
    return e
}

function Fn(e, t, n, r) {
    try {
        return r ? e(...r) : e()
    } catch (s) {
        Pr(s, t, n)
    }
}

function nt(e, t, n, r) {
    if (te(e)) {
        let s = Fn(e, t, n, r);
        return s && ws(s) && s.catch(o => {
            Pr(o, t, n)
        }), s
    }
    if (W(e)) {
        let s = [];
        for (let o = 0; o < e.length; o++) s.push(nt(e[o], t, n, r));
        return s
    }
}

function Pr(e, t, n, r = !0) {
    let s = t ? t.vnode : null, {errorHandler: o, throwUnhandledErrorInProduction: i} = t && t.appContext.config || ae;
    if (t) {
        let a = t.parent, c = t.proxy, d = `https://vuejs.org/error-reference/#runtime-${n}`;
        for (; a;) {
            let f = a.ec;
            if (f) {
                for (let g = 0; g < f.length; g++) if (f[g](e, c, d) === !1) return
            }
            a = a.parent
        }
        if (o) {
            ut(), Fn(o, null, 10, [e, c, d]), ft();
            return
        }
    }
    Qu(e, n, s, r, i)
}

function Qu(e, t, n, r = !0, s = !1) {
    if (s) throw e;
    console.error(e)
}

var Te = [], Ze = -1, Jt = [], yt = null, qt = 0, ha = Promise.resolve(), wr = null;

function Zt(e) {
    let t = wr || ha;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function Zu(e) {
    let t = Ze + 1, n = Te.length;
    for (; t < n;) {
        let r = t + n >>> 1, s = Te[r], o = In(s);
        o < e || o === e && s.flags & 2 ? t = r + 1 : n = r
    }
    return t
}

function eo(e) {
    if (!(e.flags & 1)) {
        let t = In(e), n = Te[Te.length - 1];
        !n || !(e.flags & 2) && t >= In(n) ? Te.push(e) : Te.splice(Zu(t), 0, e), e.flags |= 1, ma()
    }
}

function ma() {
    wr || (wr = ha.then(ba))
}

function _a(e) {
    W(e) ? Jt.push(...e) : yt && e.id === -1 ? yt.splice(qt + 1, 0, e) : e.flags & 1 || (Jt.push(e), e.flags |= 1), ma()
}

function sa(e, t, n = Ze + 1) {
    for (; n < Te.length; n++) {
        let r = Te[n];
        if (r && r.flags & 2) {
            if (e && r.id !== e.uid) continue;
            Te.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2)
        }
    }
}

function ya(e) {
    if (Jt.length) {
        let t = [...new Set(Jt)].sort((n, r) => In(n) - In(r));
        if (Jt.length = 0, yt) {
            yt.push(...t);
            return
        }
        for (yt = t, qt = 0; qt < yt.length; qt++) {
            let n = yt[qt];
            n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2
        }
        yt = null, qt = 0
    }
}

var In = e => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;

function ba(e) {
    let t = Ke;
    try {
        for (Ze = 0; Ze < Te.length; Ze++) {
            let n = Te[Ze];
            n && !(n.flags & 8) && (n.flags & 4 && (n.flags &= -2), Fn(n, n.i, n.i ? 15 : 14), n.flags & 4 || (n.flags &= -2))
        }
    } finally {
        for (; Ze < Te.length; Ze++) {
            let n = Te[Ze];
            n && (n.flags &= -2)
        }
        Ze = -1, Te.length = 0, ya(e), wr = null, (Te.length || Jt.length) && ba(e)
    }
}

var tt = null, va = null;

function Sr(e) {
    let t = tt;
    return tt = e, va = e && e.type.__scopeId || null, t
}

function ef(e, t = tt, n) {
    if (!t || e._n) return e;
    let r = (...s) => {
        r._d && ua(-1);
        let o = Sr(t), i;
        try {
            i = e(...s)
        } finally {
            Sr(o), r._d && ua(1)
        }
        return i
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function Rt(e, t, n, r) {
    let s = e.dirs, o = t && t.dirs;
    for (let i = 0; i < s.length; i++) {
        let a = s[i];
        o && (a.oldValue = o[i].value);
        let c = a.dir[r];
        c && (ut(), nt(c, n, 8, [e.el, a, e, t]), ft())
    }
}

function tf(e, t, n = !1) {
    let r = La();
    if (r || Xt) {
        let s = Xt ? Xt._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
        if (s && e in s) return s[e];
        if (arguments.length > 1) return n && te(t) ? t.call(r && r.proxy) : t
    }
}

var nf = Symbol.for("v-scx"), rf = () => {
    {
        let e = tf(nf);
        return e
    }
};

function Ge(e, t, n) {
    return sf(e, t, n)
}

function sf(e, t, n = ae) {
    let {immediate: r, deep: s, flush: o, once: i} = n, a = Ne({}, n), c = t && r || !t && o !== "post", d;
    if (Hn) {
        if (o === "sync") {
            let O = rf();
            d = O.__watcherHandles || (O.__watcherHandles = [])
        } else if (!c) {
            let O = () => {
            };
            return O.stop = Ke, O.resume = Ke, O.pause = Ke, O
        }
    }
    let f = vt;
    a.call = (O, A, V) => nt(O, f, A, V);
    let g = !1;
    o === "post" ? a.scheduler = O => {
        Ve(O, f && f.suspense)
    } : o !== "sync" && (g = !0, a.scheduler = (O, A) => {
        A ? O() : eo(O)
    }), a.augmentJob = O => {
        t && (O.flags |= 4), g && (O.flags |= 2, f && (O.id = f.uid, O.i = f))
    };
    let b = ra(e, t, a);
    return Hn && (d ? d.push(b) : c && b()), b
}

var of = Symbol("_vte"), af = e => e.__isTeleport;
var lf = Symbol("_leaveCb");

function Dr(e, t) {
    e.shapeFlag & 6 && e.component ? (e.transition = t, Dr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function ue(e, t) {
    return te(e) ? Ne({name: e.name}, t, {setup: e}) : e
}

function cf(e) {
    e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0]
}

function oa(e, t) {
    let n;
    return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable)
}

var Cr = new WeakMap;

function Vn(e, t, n, r, s = !1) {
    if (W(e)) {
        e.forEach((V, re) => Vn(V, t && (W(t) ? t[re] : t), n, r, s));
        return
    }
    if (Rn(r) && !s) {
        r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Vn(e, t, n, r.component.subTree);
        return
    }
    let o = r.shapeFlag & 4 ? oo(r.component) : r.el, i = s ? null : o, {i: a, r: c} = e, d = t && t.r,
        f = a.refs === ae ? a.refs = {} : a.refs, g = a.setupState, b = Y(g),
        O = g === ae ? Os : V => oa(f, V) ? !1 : X(b, V), A = (V, re) => !(re && oa(f, re));
    if (d != null && d !== c) {
        if (ia(t), he(d)) f[d] = null, O(d) && (g[d] = null); else if (ve(d)) {
            let V = t;
            A(d, V.k) && (d.value = null), V.k && (f[V.k] = null)
        }
    }
    if (te(c)) Fn(c, a, 12, [i, f]); else {
        let V = he(c), re = ve(c);
        if (V || re) {
            let G = () => {
                if (e.f) {
                    let q = V ? O(c) ? g[c] : f[c] : A(c) || !e.k ? c.value : f[e.k];
                    if (s) W(q) && cr(q, o); else if (W(q)) q.includes(o) || q.push(o); else if (V) f[c] = [o], O(c) && (g[c] = f[c]); else {
                        let U = [o];
                        A(c, e.k) && (c.value = U), e.k && (f[e.k] = U)
                    }
                } else V ? (f[c] = i, O(c) && (g[c] = i)) : re && (A(c, e.k) && (c.value = i), e.k && (f[e.k] = i))
            };
            if (i) {
                let q = () => {
                    G(), Cr.delete(e)
                };
                q.id = -1, Cr.set(e, q), Ve(q, n)
            } else ia(e), G()
        }
    }
}

function ia(e) {
    let t = Cr.get(e);
    t && (t.flags |= 8, Cr.delete(e))
}

var Ym = En().requestIdleCallback || (e => setTimeout(e, 1)), qm = En().cancelIdleCallback || (e => clearTimeout(e));
var Rn = e => !!e.type.__asyncLoader;
var uf = e => e.type.__isKeepAlive;

function ff(e, t, n = vt, r = !1) {
    if (n) {
        let s = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...i) => {
            ut();
            let a = so(n), c = nt(t, n, e, i);
            return a(), ft(), c
        });
        return r ? s.unshift(o) : s.push(o), o
    }
}

var dt = e => (t, n = vt) => {
        (!Hn || e === "sp") && ff(e, (...r) => t(...r), n)
    }, Jm = dt("bm"), pf = dt("m"), df = dt("bu"), gf = dt("u"), Xm = dt("bum"), hf = dt("um"), Qm = dt("sp"),
    Zm = dt("rtg"), e_ = dt("rtc");
var mf = Symbol.for("v-ndc");

function ne(e, t, n, r) {
    let s, o = n && n[r], i = W(e);
    if (i || he(e)) {
        let a = i && ct(e), c = !1, d = !1;
        a && (c = !Ae(e), d = ze(e), e = Pn(e)), s = new Array(e.length);
        for (let f = 0, g = e.length; f < g; f++) s[f] = t(c ? d ? Vt(Be(e[f])) : Be(e[f]) : e[f], f, void 0, o && o[f])
    } else if (typeof e == "number") {
        s = new Array(e);
        for (let a = 0; a < e; a++) s[a] = t(a + 1, a, void 0, o && o[a])
    } else if (oe(e)) if (e[Symbol.iterator]) s = Array.from(e, (a, c) => t(a, c, void 0, o && o[c])); else {
        let a = Object.keys(e);
        s = new Array(a.length);
        for (let c = 0, d = a.length; c < d; c++) {
            let f = a[c];
            s[c] = t(e[f], f, c, o && o[c])
        }
    } else s = [];
    return n && (n[r] = s), s
}

var Xs = e => e ? Ha(e) ? oo(e) : Xs(e.parent) : null, Mn = Ne(Object.create(null), {
    $: e => e,
    $el: e => e.vnode.el,
    $data: e => e.data,
    $props: e => e.props,
    $attrs: e => e.attrs,
    $slots: e => e.slots,
    $refs: e => e.refs,
    $parent: e => Xs(e.parent),
    $root: e => Xs(e.root),
    $host: e => e.ce,
    $emit: e => e.emit,
    $options: e => e.type,
    $forceUpdate: e => e.f || (e.f = () => {
        eo(e.update)
    }),
    $nextTick: e => e.n || (e.n = Zt.bind(e.proxy)),
    $watch: e => Ke
});
var Ys = (e, t) => e !== ae && !e.__isScriptSetup && X(e, t), _f = {
    get({_: e}, t) {
        if (t === "__v_skip") return !0;
        let {ctx: n, setupState: r, data: s, props: o, accessCache: i, type: a, appContext: c} = e;
        if (t[0] !== "$") {
            let b = i[t];
            if (b !== void 0) switch (b) {
                case 1:
                    return r[t];
                case 2:
                    return s[t];
                case 4:
                    return n[t];
                case 3:
                    return o[t]
            } else {
                if (Ys(r, t)) return i[t] = 1, r[t];
                if (X(o, t)) return i[t] = 3, o[t];
                if (n !== ae && X(n, t)) return i[t] = 4, n[t];
                i[t] = 0
            }
        }
        let d = Mn[t], f, g;
        if (d) return t === "$attrs" && be(e.attrs, "get", ""), d(e);
        if ((f = a.__cssModules) && (f = f[t])) return f;
        if (n !== ae && X(n, t)) return i[t] = 4, n[t];
        if (g = c.config.globalProperties, X(g, t)) return g[t]
    }, set({_: e}, t, n) {
        let {data: r, setupState: s, ctx: o} = e;
        return Ys(s, t) ? (s[t] = n, !0) : X(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = n, !0)
    }, has({_: {data: e, setupState: t, accessCache: n, ctx: r, appContext: s, props: o, type: i}}, a) {
        let c;
        return !!(n[a] || Ys(t, a) || X(o, a) || X(r, a) || X(Mn, a) || X(s.config.globalProperties, a) || (c = i.__cssModules) && c[a])
    }, defineProperty(e, t, n) {
        return n.get != null ? e._.accessCache[t] = 0 : X(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
    }
};

function Ea() {
    return {
        app: null,
        config: {
            isNativeTag: Os,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}

var yf = 0;

function bf(e, t) {
    return function (r, s = null) {
        te(r) || (r = Ne({}, r)), s != null && !oe(s) && (s = null);
        let o = Ea(), i = new WeakSet, a = [], c = !1, d = o.app = {
            _uid: yf++,
            _component: r,
            _props: s,
            _container: null,
            _context: o,
            _instance: null,
            version: Xf,
            get config() {
                return o.config
            },
            set config(f) {
            },
            use(f, ...g) {
                return i.has(f) || (f && te(f.install) ? (i.add(f), f.install(d, ...g)) : te(f) && (i.add(f), f(d, ...g))), d
            },
            mixin(f) {
                return d
            },
            component(f, g) {
                return g ? (o.components[f] = g, d) : o.components[f]
            },
            directive(f, g) {
                return g ? (o.directives[f] = g, d) : o.directives[f]
            },
            mount(f, g, b) {
                if (!c) {
                    let O = d._ceVNode || ce(r, s);
                    return O.appContext = o, b === !0 ? b = "svg" : b === !1 && (b = void 0), g && t ? t(O, f) : e(O, f, b), c = !0, d._container = f, f.__vue_app__ = d, oo(O.component)
                }
            },
            onUnmount(f) {
                a.push(f)
            },
            unmount() {
                c && (nt(a, d._instance, 16), e(null, d._container), delete d._container.__vue_app__)
            },
            provide(f, g) {
                return o.provides[f] = g, d
            },
            runWithContext(f) {
                let g = Xt;
                Xt = d;
                try {
                    return f()
                } finally {
                    Xt = g
                }
            }
        };
        return d
    }
}

var Xt = null;
var vf = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Se(t)}Modifiers`] || e[`${it(t)}Modifiers`];

function Ef(e, t, ...n) {
    if (e.isUnmounted) return;
    let r = e.vnode.props || ae, s = n, o = t.startsWith("update:"), i = o && vf(r, t.slice(7));
    i && (i.trim && (s = n.map(f => he(f) ? f.trim() : f)), i.number && (s = n.map(Cs)));
    let a, c = r[a = bn(t)] || r[a = bn(Se(t))];
    !c && o && (c = r[a = bn(it(t))]), c && nt(c, e, 6, s);
    let d = r[a + "Once"];
    if (d) {
        if (!e.emitted) e.emitted = {}; else if (e.emitted[a]) return;
        e.emitted[a] = !0, nt(d, e, 6, s)
    }
}

function xf(e, t, n = !1) {
    let r = t.emitsCache, s = r.get(e);
    if (s !== void 0) return s;
    let o = e.emits, i = {};
    return !o && !!1 ? (oe(e) && r.set(e, null), null) : (W(o) ? o.forEach(c => i[c] = null) : Ne(i, o), oe(e) && r.set(e, i), i)
}

function Ar(e, t) {
    return !e || !Kt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), X(e, t[0].toLowerCase() + t.slice(1)) || X(e, it(t)) || X(e, t))
}

function qs(e) {
    let {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: s,
        propsOptions: [o],
        slots: i,
        attrs: a,
        emit: c,
        render: d,
        renderCache: f,
        props: g,
        data: b,
        setupState: O,
        ctx: A,
        inheritAttrs: V
    } = e, re = Sr(e), G, q;
    try {
        if (n.shapeFlag & 4) {
            let L = s || r, xe = L;
            G = et(d.call(xe, L, f, g, O, b, A)), q = a
        } else {
            let L = t;
            G = et(L.length > 1 ? L(g, {attrs: a, slots: i, emit: c}) : L(g, null)), q = t.props ? a : kf(a)
        }
    } catch (L) {
        $n.length = 0, Pr(L, e, 1), G = ce(bt)
    }
    let U = G, I;
    if (q && V !== !1) {
        let L = Object.keys(q), {shapeFlag: xe} = U;
        L.length && xe & 7 && (o && L.some(mn) && (q = Nf(q, o)), U = Qt(U, q, !1, !0))
    }
    return n.dirs && (U = Qt(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && Dr(U, n.transition), G = U, Sr(re), G
}

var kf = e => {
    let t;
    for (let n in e) (n === "class" || n === "style" || Kt(n)) && ((t || (t = {}))[n] = e[n]);
    return t
}, Nf = (e, t) => {
    let n = {};
    for (let r in e) (!mn(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n
};

function Of(e, t, n) {
    let {props: r, children: s, component: o} = e, {props: i, children: a, patchFlag: c} = t, d = o.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && c >= 0) {
        if (c & 1024) return !0;
        if (c & 16) return r ? aa(r, i, d) : !!i;
        if (c & 8) {
            let f = t.dynamicProps;
            for (let g = 0; g < f.length; g++) {
                let b = f[g];
                if (xa(i, r, b) && !Ar(d, b)) return !0
            }
        }
    } else return (s || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? aa(r, i, d) : !0 : !!i;
    return !1
}

function aa(e, t, n) {
    let r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let s = 0; s < r.length; s++) {
        let o = r[s];
        if (xa(t, e, o) && !Ar(n, o)) return !0
    }
    return !1
}

function xa(e, t, n) {
    let r = e[n], s = t[n];
    return n === "style" && oe(r) && oe(s) ? !xn(r, s) : r !== s
}

function wf({vnode: e, parent: t}, n) {
    for (; t;) {
        let r = t.subTree;
        if (r.suspense && r.suspense.activeBranch === e && (r.el = e.el), r === e) (e = t.vnode).el = n, t = t.parent; else break
    }
}

var ka = {}, Na = () => Object.create(ka), Oa = e => Object.getPrototypeOf(e) === ka;

function Sf(e, t, n, r = !1) {
    let s = {}, o = Na();
    e.propsDefaults = Object.create(null), wa(e, t, s, o);
    for (let i in e.propsOptions[0]) i in s || (s[i] = void 0);
    n ? e.props = r ? s : Ks(s) : e.type.props ? e.props = s : e.props = o, e.attrs = o
}

function Cf(e, t, n, r) {
    let {props: s, attrs: o, vnode: {patchFlag: i}} = e, a = Y(s), [c] = e.propsOptions, d = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            let f = e.vnode.dynamicProps;
            for (let g = 0; g < f.length; g++) {
                let b = f[g];
                if (Ar(e.emitsOptions, b)) continue;
                let O = t[b];
                if (c) if (X(o, b)) O !== o[b] && (o[b] = O, d = !0); else {
                    let A = Se(b);
                    s[A] = Qs(c, a, A, O, e, !1)
                } else O !== o[b] && (o[b] = O, d = !0)
            }
        }
    } else {
        wa(e, t, s, o) && (d = !0);
        let f;
        for (let g in a) (!t || !X(t, g) && ((f = it(g)) === g || !X(t, f))) && (c ? n && (n[g] !== void 0 || n[f] !== void 0) && (s[g] = Qs(c, a, g, void 0, e, !0)) : delete s[g]);
        if (o !== a) for (let g in o) (!t || !X(t, g)) && (delete o[g], d = !0)
    }
    d && Xe(e.attrs, "set", "")
}

function wa(e, t, n, r) {
    let [s, o] = e.propsOptions, i = !1, a;
    if (t) for (let c in t) {
        if (Wt(c)) continue;
        let d = t[c], f;
        s && X(s, f = Se(c)) ? !o || !o.includes(f) ? n[f] = d : (a || (a = {}))[f] = d : Ar(e.emitsOptions, c) || (!(c in r) || d !== r[c]) && (r[c] = d, i = !0)
    }
    if (o) {
        let c = Y(n), d = a || ae;
        for (let f = 0; f < o.length; f++) {
            let g = o[f];
            n[g] = Qs(s, c, g, d[g], e, !X(d, g))
        }
    }
    return i
}

function Qs(e, t, n, r, s, o) {
    let i = e[n];
    if (i != null) {
        let a = X(i, "default");
        if (a && r === void 0) {
            let c = i.default;
            if (i.type !== Function && !i.skipFactory && te(c)) {
                let {propsDefaults: d} = s;
                if (n in d) r = d[n]; else {
                    let f = so(s);
                    r = d[n] = c.call(null, t), f()
                }
            } else r = c;
            s.ce && s.ce._setProp(n, r)
        }
        i[0] && (o && !a ? r = !1 : i[1] && (r === "" || r === it(n)) && (r = !0))
    }
    return r
}

function Tf(e, t, n = !1) {
    let r = t.propsCache, s = r.get(e);
    if (s) return s;
    let o = e.props, i = {}, a = [];
    if (!o && !!1) return oe(e) && r.set(e, Tt), Tt;
    if (W(o)) for (let f = 0; f < o.length; f++) {
        let g = Se(o[f]);
        la(g) && (i[g] = ae)
    } else if (o) for (let f in o) {
        let g = Se(f);
        if (la(g)) {
            let b = o[f], O = i[g] = W(b) || te(b) ? {type: b} : Ne({}, b), A = O.type, V = !1, re = !0;
            if (W(A)) for (let G = 0; G < A.length; ++G) {
                let q = A[G], U = te(q) && q.name;
                if (U === "Boolean") {
                    V = !0;
                    break
                } else U === "String" && (re = !1)
            } else V = te(A) && A.name === "Boolean";
            O[0] = V, O[1] = re, (V || X(O, "default")) && a.push(g)
        }
    }
    let d = [i, a];
    return oe(e) && r.set(e, d), d
}

function la(e) {
    return e[0] !== "$" && !Wt(e)
}

var to = e => e === "_" || e === "_ctx" || e === "$stable", no = e => W(e) ? e.map(et) : [et(e)], Pf = (e, t, n) => {
    if (t._n) return t;
    let r = ef((...s) => no(t(...s)), n);
    return r._c = !1, r
}, Sa = (e, t, n) => {
    let r = e._ctx;
    for (let s in e) {
        if (to(s)) continue;
        let o = e[s];
        if (te(o)) t[s] = Pf(s, o, r); else if (o != null) {
            let i = no(o);
            t[s] = () => i
        }
    }
}, Ca = (e, t) => {
    let n = no(t);
    e.slots.default = () => n
}, Ta = (e, t, n) => {
    for (let r in t) (n || !to(r)) && (e[r] = t[r])
}, Df = (e, t, n) => {
    let r = e.slots = Na();
    if (e.vnode.shapeFlag & 32) {
        let s = t._;
        s ? (Ta(r, t, n), n && gr(r, "_", s, !0)) : Sa(t, r)
    } else t && Ca(e, t)
}, Af = (e, t, n) => {
    let {vnode: r, slots: s} = e, o = !0, i = ae;
    if (r.shapeFlag & 32) {
        let a = t._;
        a ? n && a === 1 ? o = !1 : Ta(s, t, n) : (o = !t.$stable, Sa(t, s)), i = t
    } else t && (Ca(e, t), i = {default: 1});
    if (o) for (let a in s) !to(a) && i[a] == null && delete s[a]
};

function Vf() {
    let e = []
}

var Ve = If;

function Pa(e) {
    return Rf(e)
}

function Rf(e, t) {
    Vf();
    let n = En();
    n.__VUE__ = !0;
    let {
        insert: r,
        remove: s,
        patchProp: o,
        createElement: i,
        createText: a,
        createComment: c,
        setText: d,
        setElementText: f,
        parentNode: g,
        nextSibling: b,
        setScopeId: O = Ke,
        insertStaticContent: A
    } = e, V = (l, u, h, x = null, y = null, v = null, P = void 0, C = null, w = !!u.dynamicChildren) => {
        if (l === u) return;
        l && !An(l, u) && (x = Qn(l), ht(l, y, v, !0), l = null), u.patchFlag === -2 && (w = !1, u.dynamicChildren = null);
        let {type: E, ref: M, shapeFlag: D} = u;
        switch (E) {
            case Vr:
                re(l, u, h, x);
                break;
            case bt:
                G(l, u, h, x);
                break;
            case Nr:
                l == null && q(u, h, x, P);
                break;
            case j:
                Dl(l, u, h, x, y, v, P, C, w);
                break;
            default:
                D & 1 ? xe(l, u, h, x, y, v, P, C, w) : D & 6 ? Al(l, u, h, x, y, v, P, C, w) : (D & 64 || D & 128) && E.process(l, u, h, x, y, v, P, C, w, $t)
        }
        M != null && y ? Vn(M, l && l.ref, v, u || l, !u) : M == null && l && l.ref != null && Vn(l.ref, null, v, l, !0)
    }, re = (l, u, h, x) => {
        if (l == null) r(u.el = a(u.children), h, x); else {
            let y = u.el = l.el;
            u.children !== l.children && d(y, u.children)
        }
    }, G = (l, u, h, x) => {
        l == null ? r(u.el = c(u.children || ""), h, x) : u.el = l.el
    }, q = (l, u, h, x) => {
        [l.el, l.anchor] = A(l.children, u, h, x, l.el, l.anchor)
    }, U = (l, u, h, x) => {
        if (u.children !== l.children) {
            let y = b(l.anchor);
            L(l), [u.el, u.anchor] = A(u.children, h, y, x)
        } else u.el = l.el, u.anchor = l.anchor
    }, I = ({el: l, anchor: u}, h, x) => {
        let y;
        for (; l && l !== u;) y = b(l), r(l, h, x), l = y;
        r(u, h, x)
    }, L = ({el: l, anchor: u}) => {
        let h;
        for (; l && l !== u;) h = b(l), s(l), l = h;
        s(u)
    }, xe = (l, u, h, x, y, v, P, C, w) => {
        if (u.type === "svg" ? P = "svg" : u.type === "math" && (P = "mathml"), l == null) kt(u, h, x, y, v, P, C, w); else {
            let E = l.el && l.el._isVueCE ? l.el : null;
            try {
                E && E._beginPatch(), So(l, u, y, v, P, C, w)
            } finally {
                E && E._endPatch()
            }
        }
    }, kt = (l, u, h, x, y, v, P, C) => {
        let w, E, {props: M, shapeFlag: D, transition: R, dirs: H} = l;
        if (w = l.el = i(l.type, v, M && M.is, M), D & 8 ? f(w, l.children) : D & 16 && Nt(l.children, w, null, x, y, Js(l, v), P, C), H && Rt(l, null, x, "created"), rt(w, l, l.scopeId, P, x), M) {
            for (let ie in M) ie !== "value" && !Wt(ie) && o(w, ie, null, M[ie], v, x);
            "value" in M && o(w, "value", null, M.value, v), (E = M.onVnodeBeforeMount) && Qe(E, x, l)
        }
        H && Rt(l, null, x, "beforeMount");
        let z = Mf(y, R);
        z && R.beforeEnter(w), r(w, u, h), ((E = M && M.onVnodeMounted) || z || H) && Ve(() => {
            E && Qe(E, x, l), z && R.enter(w), H && Rt(l, null, x, "mounted")
        }, y)
    }, rt = (l, u, h, x, y) => {
        if (h && O(l, h), x) for (let v = 0; v < x.length; v++) O(l, x[v]);
        if (y) {
            let v = y.subTree;
            if (u === v || Ra(v.type) && (v.ssContent === u || v.ssFallback === u)) {
                let P = y.vnode;
                rt(l, P, P.scopeId, P.slotScopeIds, y.parent)
            }
        }
    }, Nt = (l, u, h, x, y, v, P, C, w = 0) => {
        for (let E = w; E < l.length; E++) {
            let M = l[E] = C ? pt(l[E]) : et(l[E]);
            V(null, M, u, h, x, y, v, P, C)
        }
    }, So = (l, u, h, x, y, v, P) => {
        let C = u.el = l.el, {patchFlag: w, dynamicChildren: E, dirs: M} = u;
        w |= l.patchFlag & 16;
        let D = l.props || ae, R = u.props || ae, H;
        if (h && Mt(h, !1), (H = R.onVnodeBeforeUpdate) && Qe(H, h, u, l), M && Rt(u, l, h, "beforeUpdate"), h && Mt(h, !0), (D.innerHTML && R.innerHTML == null || D.textContent && R.textContent == null) && f(C, ""), E ? Jn(l.dynamicChildren, E, C, h, x, Js(u, y), v) : P || ls(l, u, C, null, h, x, Js(u, y), v, !1), w > 0) {
            if (w & 16) is(C, D, R, h, y); else if (w & 2 && D.class !== R.class && o(C, "class", null, R.class, y), w & 4 && o(C, "style", D.style, R.style, y), w & 8) {
                let z = u.dynamicProps;
                for (let ie = 0; ie < z.length; ie++) {
                    let Q = z[ie], Pe = D[Q], ke = R[Q];
                    (ke !== Pe || Q === "value") && o(C, Q, Pe, ke, y, h)
                }
            }
            w & 1 && l.children !== u.children && f(C, u.children)
        } else !P && E == null && is(C, D, R, h, y);
        ((H = R.onVnodeUpdated) || M) && Ve(() => {
            H && Qe(H, h, u, l), M && Rt(u, l, h, "updated")
        }, x)
    }, Jn = (l, u, h, x, y, v, P) => {
        for (let C = 0; C < u.length; C++) {
            let w = l[C], E = u[C], M = w.el && (w.type === j || !An(w, E) || w.shapeFlag & 198) ? g(w.el) : h;
            V(w, E, M, null, x, y, v, P, !0)
        }
    }, is = (l, u, h, x, y) => {
        if (u !== h) {
            if (u !== ae) for (let v in u) !Wt(v) && !(v in h) && o(l, v, u[v], null, y, x);
            for (let v in h) {
                if (Wt(v)) continue;
                let P = h[v], C = u[v];
                P !== C && v !== "value" && o(l, v, C, P, y, x)
            }
            "value" in h && o(l, "value", u.value, h.value, y)
        }
    }, Dl = (l, u, h, x, y, v, P, C, w) => {
        let E = u.el = l ? l.el : a(""), M = u.anchor = l ? l.anchor : a(""), {
            patchFlag: D,
            dynamicChildren: R,
            slotScopeIds: H
        } = u;
        H && (C = C ? C.concat(H) : H), l == null ? (r(E, h, x), r(M, h, x), Nt(u.children || [], h, M, y, v, P, C, w)) : D > 0 && D & 64 && R && l.dynamicChildren && l.dynamicChildren.length === R.length ? (Jn(l.dynamicChildren, R, h, y, v, P, C), (u.key != null || y && u === y.subTree) && Da(l, u, !0)) : ls(l, u, h, M, y, v, P, C, w)
    }, Al = (l, u, h, x, y, v, P, C, w) => {
        u.slotScopeIds = C, l == null ? u.shapeFlag & 512 ? y.ctx.activate(u, h, x, P, w) : Co(u, h, x, y, v, P, w) : Vl(l, u, w)
    }, Co = (l, u, h, x, y, v, P) => {
        let C = l.component = Wf(l, x, y);
        if (uf(l) && (C.ctx.renderer = $t), zf(C, !1, P), C.asyncDep) {
            if (y && y.registerDep(C, To, P), !l.el) {
                let w = C.subTree = ce(bt);
                G(null, w, u, h), l.placeholder = w.el
            }
        } else To(C, l, u, h, y, v, P)
    }, Vl = (l, u, h) => {
        let x = u.component = l.component;
        if (Of(l, u, h)) if (x.asyncDep && !x.asyncResolved) {
            as(x, u, h);
            return
        } else x.next = u, x.update(); else u.el = l.el, x.vnode = u
    }, To = (l, u, h, x, y, v, P) => {
        let C = () => {
            if (l.isMounted) {
                let {next: D, bu: R, u: H, parent: z, vnode: ie} = l;
                {
                    let Re = Aa(l);
                    if (Re) {
                        D && (D.el = ie.el, as(l, D, P)), Re.asyncDep.then(() => {
                            Ve(() => {
                                l.isUnmounted || E()
                            }, y)
                        });
                        return
                    }
                }
                let Q = D, Pe;
                Mt(l, !1), D ? (D.el = ie.el, as(l, D, P)) : D = ie, R && vn(R), (Pe = D.props && D.props.onVnodeBeforeUpdate) && Qe(Pe, z, D, ie), Mt(l, !0);
                let ke = qs(l), je = l.subTree;
                l.subTree = ke, V(je, ke, g(je.el), Qn(je), l, y, v), D.el = ke.el, Q === null && wf(l, ke.el), H && Ve(H, y), (Pe = D.props && D.props.onVnodeUpdated) && Ve(() => Qe(Pe, z, D, ie), y)
            } else {
                let D, {el: R, props: H} = u, {bm: z, m: ie, parent: Q, root: Pe, type: ke} = l, je = Rn(u);
                if (Mt(l, !1), z && vn(z), !je && (D = H && H.onVnodeBeforeMount) && Qe(D, Q, u), Mt(l, !0), R && fs) {
                    let Re = () => {
                        l.subTree = qs(l), fs(R, l.subTree, l, y, null)
                    };
                    je && ke.__asyncHydrate ? ke.__asyncHydrate(R, l, Re) : Re()
                } else {
                    Pe.ce && Pe.ce._hasShadowRoot() && Pe.ce._injectChildStyle(ke, l.parent ? l.parent.type : void 0);
                    let Re = l.subTree = qs(l);
                    V(null, Re, h, x, l, y, v), u.el = Re.el
                }
                if (ie && Ve(ie, y), !je && (D = H && H.onVnodeMounted)) {
                    let Re = u;
                    Ve(() => Qe(D, Q, Re), y)
                }
                (u.shapeFlag & 256 || Q && Rn(Q.vnode) && Q.vnode.shapeFlag & 256) && l.a && Ve(l.a, y), l.isMounted = !0, u = h = x = null
            }
        };
        l.scope.on();
        let w = l.effect = new Gt(C);
        l.scope.off();
        let E = l.update = w.run.bind(w), M = l.job = w.runIfDirty.bind(w);
        M.i = l, M.id = l.uid, w.scheduler = () => eo(M), Mt(l, !0), E()
    }, as = (l, u, h) => {
        u.component = l;
        let x = l.vnode.props;
        l.vnode = u, l.next = null, Cf(l, u.props, x, h), Af(l, u.children, h), ut(), sa(l), ft()
    }, ls = (l, u, h, x, y, v, P, C, w = !1) => {
        let E = l && l.children, M = l ? l.shapeFlag : 0, D = u.children, {patchFlag: R, shapeFlag: H} = u;
        if (R > 0) {
            if (R & 128) {
                Po(E, D, h, x, y, v, P, C, w);
                return
            } else if (R & 256) {
                Rl(E, D, h, x, y, v, P, C, w);
                return
            }
        }
        H & 8 ? (M & 16 && rn(E, y, v), D !== E && f(h, D)) : M & 16 ? H & 16 ? Po(E, D, h, x, y, v, P, C, w) : rn(E, y, v, !0) : (M & 8 && f(h, ""), H & 16 && Nt(D, h, x, y, v, P, C, w))
    }, Rl = (l, u, h, x, y, v, P, C, w) => {
        l = l || Tt, u = u || Tt;
        let E = l.length, M = u.length, D = Math.min(E, M), R;
        for (R = 0; R < D; R++) {
            let H = u[R] = w ? pt(u[R]) : et(u[R]);
            V(l[R], H, h, null, y, v, P, C, w)
        }
        E > M ? rn(l, y, v, !0, !1, D) : Nt(u, h, x, y, v, P, C, w, D)
    }, Po = (l, u, h, x, y, v, P, C, w) => {
        let E = 0, M = u.length, D = l.length - 1, R = M - 1;
        for (; E <= D && E <= R;) {
            let H = l[E], z = u[E] = w ? pt(u[E]) : et(u[E]);
            if (An(H, z)) V(H, z, h, null, y, v, P, C, w); else break;
            E++
        }
        for (; E <= D && E <= R;) {
            let H = l[D], z = u[R] = w ? pt(u[R]) : et(u[R]);
            if (An(H, z)) V(H, z, h, null, y, v, P, C, w); else break;
            D--, R--
        }
        if (E > D) {
            if (E <= R) {
                let H = R + 1, z = H < M ? u[H].el : x;
                for (; E <= R;) V(null, u[E] = w ? pt(u[E]) : et(u[E]), h, z, y, v, P, C, w), E++
            }
        } else if (E > R) for (; E <= D;) ht(l[E], y, v, !0), E++; else {
            let H = E, z = E, ie = new Map;
            for (E = z; E <= R; E++) {
                let Me = u[E] = w ? pt(u[E]) : et(u[E]);
                Me.key != null && ie.set(Me.key, E)
            }
            let Q, Pe = 0, ke = R - z + 1, je = !1, Re = 0, sn = new Array(ke);
            for (E = 0; E < ke; E++) sn[E] = 0;
            for (E = H; E <= D; E++) {
                let Me = l[E];
                if (Pe >= ke) {
                    ht(Me, y, v, !0);
                    continue
                }
                let qe;
                if (Me.key != null) qe = ie.get(Me.key); else for (Q = z; Q <= R; Q++) if (sn[Q - z] === 0 && An(Me, u[Q])) {
                    qe = Q;
                    break
                }
                qe === void 0 ? ht(Me, y, v, !0) : (sn[qe - z] = E + 1, qe >= Re ? Re = qe : je = !0, V(Me, u[qe], h, null, y, v, P, C, w), Pe++)
            }
            let Vo = je ? $f(sn) : Tt;
            for (Q = Vo.length - 1, E = ke - 1; E >= 0; E--) {
                let Me = z + E, qe = u[Me], Ro = u[Me + 1], Mo = Me + 1 < M ? Ro.el || Va(Ro) : x;
                sn[E] === 0 ? V(null, qe, h, Mo, y, v, P, C, w) : je && (Q < 0 || E !== Vo[Q] ? Xn(qe, h, Mo, 2) : Q--)
            }
        }
    }, Xn = (l, u, h, x, y = null) => {
        let {el: v, type: P, transition: C, children: w, shapeFlag: E} = l;
        if (E & 6) {
            Xn(l.component.subTree, u, h, x);
            return
        }
        if (E & 128) {
            l.suspense.move(u, h, x);
            return
        }
        if (E & 64) {
            P.move(l, u, h, $t);
            return
        }
        if (P === j) {
            r(v, u, h);
            for (let D = 0; D < w.length; D++) Xn(w[D], u, h, x);
            r(l.anchor, u, h);
            return
        }
        if (P === Nr) {
            I(l, u, h);
            return
        }
        if (x !== 2 && E & 1 && C) if (x === 0) C.beforeEnter(v), r(v, u, h), Ve(() => C.enter(v), y); else {
            let {leave: D, delayLeave: R, afterLeave: H} = C, z = () => {
                l.ctx.isUnmounted ? s(v) : r(v, u, h)
            }, ie = () => {
                v._isLeaving && v[lf](!0), D(v, () => {
                    z(), H && H()
                })
            };
            R ? R(v, z, ie) : ie()
        } else r(v, u, h)
    }, ht = (l, u, h, x = !1, y = !1) => {
        let {
            type: v,
            props: P,
            ref: C,
            children: w,
            dynamicChildren: E,
            shapeFlag: M,
            patchFlag: D,
            dirs: R,
            cacheIndex: H
        } = l;
        if (D === -2 && (y = !1), C != null && (ut(), Vn(C, null, h, l, !0), ft()), H != null && (u.renderCache[H] = void 0), M & 256) {
            u.ctx.deactivate(l);
            return
        }
        let z = M & 1 && R, ie = !Rn(l), Q;
        if (ie && (Q = P && P.onVnodeBeforeUnmount) && Qe(Q, u, l), M & 6) $l(l.component, h, x); else {
            if (M & 128) {
                l.suspense.unmount(h, x);
                return
            }
            z && Rt(l, null, u, "beforeUnmount"), M & 64 ? l.type.remove(l, u, h, $t, x) : E && !E.hasOnce && (v !== j || D > 0 && D & 64) ? rn(E, u, h, !1, !0) : (v === j && D & 384 || !y && M & 16) && rn(w, u, h), x && Do(l)
        }
        (ie && (Q = P && P.onVnodeUnmounted) || z) && Ve(() => {
            Q && Qe(Q, u, l), z && Rt(l, null, u, "unmounted")
        }, h)
    }, Do = l => {
        let {type: u, el: h, anchor: x, transition: y} = l;
        if (u === j) {
            Ml(h, x);
            return
        }
        if (u === Nr) {
            L(l);
            return
        }
        let v = () => {
            s(h), y && !y.persisted && y.afterLeave && y.afterLeave()
        };
        if (l.shapeFlag & 1 && y && !y.persisted) {
            let {leave: P, delayLeave: C} = y, w = () => P(h, v);
            C ? C(l.el, v, w) : w()
        } else v()
    }, Ml = (l, u) => {
        let h;
        for (; l !== u;) h = b(l), s(l), l = h;
        s(u)
    }, $l = (l, u, h) => {
        let {bum: x, scope: y, job: v, subTree: P, um: C, m: w, a: E} = l;
        ca(w), ca(E), x && vn(x), y.stop(), v && (v.flags |= 8, ht(P, l, u, h)), C && Ve(C, u), Ve(() => {
            l.isUnmounted = !0
        }, u)
    }, rn = (l, u, h, x = !1, y = !1, v = 0) => {
        for (let P = v; P < l.length; P++) ht(l[P], u, h, x, y)
    }, Qn = l => {
        if (l.shapeFlag & 6) return Qn(l.component.subTree);
        if (l.shapeFlag & 128) return l.suspense.next();
        let u = b(l.anchor || l.el), h = u && u[of];
        return h ? b(h) : u
    }, cs = !1, Ao = (l, u, h) => {
        let x;
        l == null ? u._vnode && (ht(u._vnode, null, null, !0), x = u._vnode.component) : V(u._vnode || null, l, u, null, null, null, h), u._vnode = l, cs || (cs = !0, sa(x), ya(), cs = !1)
    }, $t = {p: V, um: ht, m: Xn, r: Do, mt: Co, mc: Nt, pc: ls, pbc: Jn, n: Qn, o: e}, us, fs;
    return t && ([us, fs] = t($t)), {render: Ao, hydrate: us, createApp: bf(Ao, us)}
}

function Js({type: e, props: t}, n) {
    return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n
}

function Mt({effect: e, job: t}, n) {
    n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5)
}

function Mf(e, t) {
    return (!e || e && !e.pendingBranch) && t && !t.persisted
}

function Da(e, t, n = !1) {
    let r = e.children, s = t.children;
    if (W(r) && W(s)) for (let o = 0; o < r.length; o++) {
        let i = r[o], a = s[o];
        a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = s[o] = pt(s[o]), a.el = i.el), !n && a.patchFlag !== -2 && Da(i, a)), a.type === Vr && (a.patchFlag === -1 && (a = s[o] = pt(a)), a.el = i.el), a.type === bt && !a.el && (a.el = i.el)
    }
}

function $f(e) {
    let t = e.slice(), n = [0], r, s, o, i, a, c = e.length;
    for (r = 0; r < c; r++) {
        let d = e[r];
        if (d !== 0) {
            if (s = n[n.length - 1], e[s] < d) {
                t[r] = s, n.push(r);
                continue
            }
            for (o = 0, i = n.length - 1; o < i;) a = o + i >> 1, e[n[a]] < d ? o = a + 1 : i = a;
            d < e[n[o]] && (o > 0 && (t[r] = n[o - 1]), n[o] = r)
        }
    }
    for (o = n.length, i = n[o - 1]; o-- > 0;) n[o] = i, i = t[i];
    return n
}

function Aa(e) {
    let t = e.subTree.component;
    if (t) return t.asyncDep && !t.asyncResolved ? t : Aa(t)
}

function ca(e) {
    if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8
}

function Va(e) {
    if (e.placeholder) return e.placeholder;
    let t = e.component;
    return t ? Va(t.subTree) : null
}

var Ra = e => e.__isSuspense;

function If(e, t) {
    t && t.pendingBranch ? W(e) ? t.effects.push(...e) : t.effects.push(e) : _a(e)
}

var j = Symbol.for("v-fgt"), Vr = Symbol.for("v-txt"), bt = Symbol.for("v-cmt"), Nr = Symbol.for("v-stc"), $n = [],
    Fe = null;

function k(e = !1) {
    $n.push(Fe = e ? null : [])
}

function Lf() {
    $n.pop(), Fe = $n[$n.length - 1] || null
}

var Ln = 1;

function ua(e, t = !1) {
    Ln += e, e < 0 && Fe && t && (Fe.hasOnce = !0)
}

function Ma(e) {
    return e.dynamicChildren = Ln > 0 ? Fe || Tt : null, Lf(), Ln > 0 && Fe && Fe.push(e), e
}

function N(e, t, n, r, s, o) {
    return Ma(p(e, t, n, r, s, o, !0))
}

function Hf(e, t, n, r, s) {
    return Ma(ce(e, t, n, r, s, !0))
}

function $a(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function An(e, t) {
    return e.type === t.type && e.key === t.key
}

var Ia = ({key: e}) => e ?? null, Or = ({
                                            ref: e,
                                            ref_key: t,
                                            ref_for: n
                                        }) => (typeof e == "number" && (e = "" + e), e != null ? he(e) || ve(e) || te(e) ? {
    i: tt,
    r: e,
    k: t,
    f: !!n
} : e : null);

function p(e, t = null, n = null, r = 0, s = null, o = e === j ? 0 : 1, i = !1, a = !1) {
    let c = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Ia(t),
        ref: t && Or(t),
        scopeId: va,
        slotScopeIds: null,
        children: n,
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
        shapeFlag: o,
        patchFlag: r,
        dynamicProps: s,
        dynamicChildren: null,
        appContext: null,
        ctx: tt
    };
    return a ? (ro(c, n), o & 128 && e.normalize(c)) : n && (c.shapeFlag |= he(n) ? 8 : 16), Ln > 0 && !i && Fe && (c.patchFlag > 0 || o & 6) && c.patchFlag !== 32 && Fe.push(c), c
}

var ce = Ff;

function Ff(e, t = null, n = null, r = 0, s = null, o = !1) {
    if ((!e || e === mf) && (e = bt), $a(e)) {
        let a = Qt(e, t, !0);
        return n && ro(a, n), Ln > 0 && !o && Fe && (a.shapeFlag & 6 ? Fe[Fe.indexOf(e)] = a : Fe.push(a)), a.patchFlag = -2, a
    }
    if (Jf(e) && (e = e.__vccOpts), t) {
        t = Uf(t);
        let {class: a, style: c} = t;
        a && !he(a) && (t.class = me(a)), oe(c) && (Dn(c) && !W(c) && (c = Ne({}, c)), t.style = Ce(c))
    }
    let i = he(e) ? 1 : Ra(e) ? 128 : af(e) ? 64 : oe(e) ? 4 : te(e) ? 2 : 0;
    return p(e, t, n, r, s, i, o, !0)
}

function Uf(e) {
    return e ? Dn(e) || Oa(e) ? Ne({}, e) : e : null
}

function Qt(e, t, n = !1, r = !1) {
    let {props: s, ref: o, patchFlag: i, children: a, transition: c} = e, d = t ? Bf(s || {}, t) : s, f = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: d,
        key: d && Ia(d),
        ref: t && t.ref ? n && o ? W(o) ? o.concat(Or(t)) : [o, Or(t)] : Or(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: a,
        target: e.target,
        targetStart: e.targetStart,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== j ? i === -1 ? 16 : i | 16 : i,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: c,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Qt(e.ssContent),
        ssFallback: e.ssFallback && Qt(e.ssFallback),
        placeholder: e.placeholder,
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    };
    return c && r && Dr(f, c.clone(f)), f
}

function Rr(e = " ", t = 0) {
    return ce(Vr, null, e, t)
}

function Ee(e = "", t = !1) {
    return t ? (k(), Hf(bt, null, e)) : ce(bt, null, e)
}

function et(e) {
    return e == null || typeof e == "boolean" ? ce(bt) : W(e) ? ce(j, null, e.slice()) : $a(e) ? pt(e) : ce(Vr, null, String(e))
}

function pt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qt(e)
}

function ro(e, t) {
    let n = 0, {shapeFlag: r} = e;
    if (t == null) t = null; else if (W(t)) n = 16; else if (typeof t == "object") if (r & 65) {
        let s = t.default;
        s && (s._c && (s._d = !1), ro(e, s()), s._c && (s._d = !0));
        return
    } else {
        n = 32;
        let s = t._;
        !s && !Oa(t) ? t._ctx = tt : s === 3 && tt && (tt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
    } else te(t) ? (t = {default: t, _ctx: tt}, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [Rr(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function Bf(...e) {
    let t = {};
    for (let n = 0; n < e.length; n++) {
        let r = e[n];
        for (let s in r) if (s === "class") t.class !== r.class && (t.class = me([t.class, r.class])); else if (s === "style") t.style = Ce([t.style, r.style]); else if (Kt(s)) {
            let o = t[s], i = r[s];
            i && o !== i && !(W(o) && o.includes(i)) && (t[s] = o ? [].concat(o, i) : i)
        } else s !== "" && (t[s] = r[s])
    }
    return t
}

function Qe(e, t, n, r = null) {
    nt(e, t, 7, [n, r])
}

var jf = Ea(), Kf = 0;

function Wf(e, t, n) {
    let r = e.type, s = (t ? t.appContext : e.appContext) || jf, o = {
        uid: Kf++,
        vnode: e,
        type: r,
        parent: t,
        appContext: s,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new wn(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(s.provides),
        ids: t ? t.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Tf(r, s),
        emitsOptions: xf(r, s),
        emit: null,
        emitted: null,
        propsDefaults: ae,
        inheritAttrs: r.inheritAttrs,
        ctx: ae,
        data: ae,
        props: ae,
        attrs: ae,
        slots: ae,
        refs: ae,
        setupState: ae,
        setupContext: null,
        suspense: n,
        suspenseId: n ? n.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
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
    return o.ctx = {_: o}, o.root = t ? t.root : o, o.emit = Ef.bind(null, o), e.ce && e.ce(o), o
}

var vt = null, La = () => vt || tt, Tr, Zs;
{
    let e = En(), t = (n, r) => {
        let s;
        return (s = e[n]) || (s = e[n] = []), s.push(r), o => {
            s.length > 1 ? s.forEach(i => i(o)) : s[0](o)
        }
    };
    Tr = t("__VUE_INSTANCE_SETTERS__", n => vt = n), Zs = t("__VUE_SSR_SETTERS__", n => Hn = n)
}
var so = e => {
    let t = vt;
    return Tr(e), e.scope.on(), () => {
        e.scope.off(), Tr(t)
    }
}, fa = () => {
    vt && vt.scope.off(), Tr(null)
};

function Ha(e) {
    return e.vnode.shapeFlag & 4
}

var Hn = !1;

function zf(e, t = !1, n = !1) {
    t && Zs(t);
    let {props: r, children: s} = e.vnode, o = Ha(e);
    Sf(e, r, o, t), Df(e, s, n || t);
    let i = o ? Gf(e, t) : void 0;
    return t && Zs(!1), i
}

function Gf(e, t) {
    let n = e.type;
    e.accessCache = Object.create(null), e.proxy = new Proxy(e.ctx, _f);
    let {setup: r} = n;
    if (r) {
        ut();
        let s = e.setupContext = r.length > 1 ? qf(e) : null, o = so(e), i = Fn(r, e, 0, [e.props, s]), a = ws(i);
        if (ft(), o(), (a || e.sp) && !Rn(e) && cf(e), a) {
            if (i.then(fa, fa), t) return i.then(c => {
                pa(e, c, t)
            }).catch(c => {
                Pr(c, e, 0)
            });
            e.asyncDep = i
        } else pa(e, i, t)
    } else Fa(e, t)
}

function pa(e, t, n) {
    te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : oe(t) && (e.setupState = kr(t)), Fa(e, n)
}

var da, ga;

function Fa(e, t, n) {
    let r = e.type;
    if (!e.render) {
        if (!t && da && !r.render) {
            let s = r.template || !1;
            if (s) {
                let {isCustomElement: o, compilerOptions: i} = e.appContext.config, {
                    delimiters: a,
                    compilerOptions: c
                } = r, d = Ne(Ne({isCustomElement: o, delimiters: a}, i), c);
                r.render = da(s, d)
            }
        }
        e.render = r.render || Ke, ga && ga(e)
    }
}

var Yf = {
    get(e, t) {
        return be(e, "get", ""), e[t]
    }
};

function qf(e) {
    let t = n => {
        e.exposed = n || {}
    };
    return {attrs: new Proxy(e.attrs, Yf), slots: e.slots, emit: e.emit, expose: t}
}

function oo(e) {
    return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(kr(zs(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Mn) return Mn[n](e)
        }, has(t, n) {
            return n in t || n in Mn
        }
    })) : e.proxy
}

function Jf(e) {
    return te(e) && "__vccOpts" in e
}

var $ = (e, t) => ta(e, t, Hn);
var Xf = "3.5.30";
var lo, Ua = typeof window < "u" && window.trustedTypes;
if (Ua) try {
    lo = Ua.createPolicy("vue", {createHTML: e => e})
} catch {
}
var Za = lo ? e => lo.createHTML(e) : e => e, Qf = "http://www.w3.org/2000/svg",
    Zf = "http://www.w3.org/1998/Math/MathML", gt = typeof document < "u" ? document : null,
    Ba = gt && gt.createElement("template"), ep = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            let t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            let s = t === "svg" ? gt.createElementNS(Qf, e) : t === "mathml" ? gt.createElementNS(Zf, e) : n ? gt.createElement(e, {is: n}) : gt.createElement(e);
            return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s
        },
        createText: e => gt.createTextNode(e),
        createComment: e => gt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => gt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, s, o) {
            let i = n ? n.previousSibling : t.lastChild;
            if (s && (s === o || s.nextSibling)) for (; t.insertBefore(s.cloneNode(!0), n), !(s === o || !(s = s.nextSibling));) ; else {
                Ba.innerHTML = Za(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
                let a = Ba.content;
                if (r === "svg" || r === "mathml") {
                    let c = a.firstChild;
                    for (; c.firstChild;) a.appendChild(c.firstChild);
                    a.removeChild(c)
                }
                t.insertBefore(a, n)
            }
            return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    };
var tp = Symbol("_vtc");

function np(e, t, n) {
    let r = e[tp];
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

var ja = Symbol("_vod"), rp = Symbol("_vsh");
var sp = Symbol("");
var op = /(?:^|;)\s*display\s*:/;

function ip(e, t, n) {
    let r = e.style, s = he(n), o = !1;
    if (n && !s) {
        if (t) if (he(t)) for (let i of t.split(";")) {
            let a = i.slice(0, i.indexOf(":")).trim();
            n[a] == null && Mr(r, a, "")
        } else for (let i in t) n[i] == null && Mr(r, i, "");
        for (let i in n) i === "display" && (o = !0), Mr(r, i, n[i])
    } else if (s) {
        if (t !== n) {
            let i = r[sp];
            i && (n += ";" + i), r.cssText = n, o = op.test(n)
        }
    } else t && e.removeAttribute("style");
    ja in e && (e[ja] = o ? r.display : "", e[rp] && (r.display = "none"))
}

var Ka = /\s*!important$/;

function Mr(e, t, n) {
    if (W(n)) n.forEach(r => Mr(e, t, r)); else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n); else {
        let r = ap(e, t);
        Ka.test(n) ? e.setProperty(it(r), n.replace(Ka, ""), "important") : e[r] = n
    }
}

var Wa = ["Webkit", "Moz", "ms"], io = {};

function ap(e, t) {
    let n = io[t];
    if (n) return n;
    let r = Se(t);
    if (r !== "filter" && r in e) return io[t] = r;
    r = yn(r);
    for (let s = 0; s < Wa.length; s++) {
        let o = Wa[s] + r;
        if (o in e) return io[t] = o
    }
    return t
}

var za = "http://www.w3.org/1999/xlink";

function Ga(e, t, n, r, s, o = Li(t)) {
    r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(za, t.slice(6, t.length)) : e.setAttributeNS(za, t, n) : n == null || o && !hr(n) ? e.removeAttribute(t) : e.setAttribute(t, o ? "" : He(n) ? String(n) : n)
}

function Ya(e, t, n, r, s) {
    if (t === "innerHTML" || t === "textContent") {
        n != null && (e[t] = t === "innerHTML" ? Za(n) : n);
        return
    }
    let o = e.tagName;
    if (t === "value" && o !== "PROGRESS" && !o.includes("-")) {
        let a = o === "OPTION" ? e.getAttribute("value") || "" : e.value,
            c = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
        (a !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
        return
    }
    let i = !1;
    if (n === "" || n == null) {
        let a = typeof e[t];
        a === "boolean" ? n = hr(n) : n == null && a === "string" ? (n = "", i = !0) : a === "number" && (n = 0, i = !0)
    }
    try {
        e[t] = n
    } catch {
    }
    i && e.removeAttribute(s || t)
}

function lp(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function cp(e, t, n, r) {
    e.removeEventListener(t, n, r)
}

var qa = Symbol("_vei");

function up(e, t, n, r, s = null) {
    let o = e[qa] || (e[qa] = {}), i = o[t];
    if (r && i) i.value = r; else {
        let [a, c] = fp(t);
        if (r) {
            let d = o[t] = gp(r, s);
            lp(e, a, d, c)
        } else i && (cp(e, a, i, c), o[t] = void 0)
    }
}

var Ja = /(?:Once|Passive|Capture)$/;

function fp(e) {
    let t;
    if (Ja.test(e)) {
        t = {};
        let r;
        for (; r = e.match(Ja);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : it(e.slice(2)), t]
}

var ao = 0, pp = Promise.resolve(), dp = () => ao || (pp.then(() => ao = 0), ao = Date.now());

function gp(e, t) {
    let n = r => {
        if (!r._vts) r._vts = Date.now(); else if (r._vts <= n.attached) return;
        nt(hp(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = dp(), n
}

function hp(e, t) {
    if (W(t)) {
        let n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => s => !s._stopped && r && r(s))
    } else return t
}

var Xa = e => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123,
    mp = (e, t, n, r, s, o) => {
        let i = s === "svg";
        t === "class" ? np(e, r, i) : t === "style" ? ip(e, n, r) : Kt(t) ? mn(t) || up(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : _p(e, t, r, i)) ? (Ya(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ga(e, t, r, i, o, t !== "value")) : e._isVueCE && (yp(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !he(r))) ? Ya(e, Se(t), r, o, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ga(e, t, r, i))
    };

function _p(e, t, n, r) {
    if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Xa(t) && te(n));
    if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
    if (t === "width" || t === "height") {
        let s = e.tagName;
        if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE") return !1
    }
    return Xa(t) && he(n) ? !1 : t in e
}

function yp(e, t) {
    let n = e._def.props;
    if (!n) return !1;
    let r = Se(t);
    return Array.isArray(n) ? n.some(s => Se(s) === r) : Object.keys(n).some(s => Se(s) === r)
}

var bp = ["ctrl", "shift", "alt", "meta"], vp = {
    stop: e => e.stopPropagation(),
    prevent: e => e.preventDefault(),
    self: e => e.target !== e.currentTarget,
    ctrl: e => !e.ctrlKey,
    shift: e => !e.shiftKey,
    alt: e => !e.altKey,
    meta: e => !e.metaKey,
    left: e => "button" in e && e.button !== 0,
    middle: e => "button" in e && e.button !== 1,
    right: e => "button" in e && e.button !== 2,
    exact: (e, t) => bp.some(n => e[`${n}Key`] && !t.includes(n))
}, en = (e, t) => {
    if (!e) return e;
    let n = e._withMods || (e._withMods = {}), r = t.join(".");
    return n[r] || (n[r] = ((s, ...o) => {
        for (let i = 0; i < t.length; i++) {
            let a = vp[t[i]];
            if (a && a(s, t)) return
        }
        return e(s, ...o)
    }))
};
var Ep = Ne({patchProp: mp}, ep), Qa;

function xp() {
    return Qa || (Qa = Pa(Ep))
}

var el = ((...e) => {
    let t = xp().createApp(...e), {mount: n} = t;
    return t.mount = r => {
        let s = Np(r);
        if (!s) return;
        let o = t._component;
        !te(o) && !o.render && !o.template && (o.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
        let i = n(s, !1, kp(s));
        return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i
    }, t
});

function kp(e) {
    if (e instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml"
}

function Np(e) {
    return he(e) ? document.querySelector(e) : e
}

function Et(e, t, n) {
    return Math.min(Math.max(e, t), n)
}

function tl(e, t, n, r) {
    return {left: Et((n - e) / 2, 8, n - e - 8), top: Et((r - t) / 2, 8, r - t - 8)}
}

function nl(e, t, n, r, s) {
    return e ? {
        left: Et(e.left + (e.width - t) / 2, 8, r - t - 8),
        top: Et(e.top - n - 24, 8, s - n - 8)
    } : {left: Et((r - t) / 2, 8, r - t - 8), top: Et(s - n - 160, 8, s - n - 8)}
}

function $r(e) {
    let {event: t, panel: n, win: r, onMovePosition: s} = e, o = n.getBoundingClientRect(), i = t.clientX - o.left,
        a = t.clientY - o.top, c = f => {
            let g = Et(f.clientX - i, 8, r.innerWidth - o.width - 8),
                b = Et(f.clientY - a, 8, r.innerHeight - o.height - 8);
            s({left: g, top: b})
        }, d = () => {
            r.removeEventListener("pointermove", c), r.removeEventListener("pointerup", d)
        };
    r.addEventListener("pointermove", c), r.addEventListener("pointerup", d, {once: !0})
}

var co = "tk-system-panel-position", uo = "tk-player-options-panel-position";

function rl(e) {
    try {
        let t = globalThis.localStorage?.getItem(e);
        if (!t) return {mode: "default", left: 0, top: 0};
        let n = JSON.parse(t);
        return n.mode !== "custom" && n.mode !== "default" ? {mode: "default", left: 0, top: 0} : {
            mode: n.mode,
            left: Number(n.left || 0),
            top: Number(n.top || 0)
        }
    } catch {
        return {mode: "default", left: 0, top: 0}
    }
}

function Ir(e, t) {
    try {
        globalThis.localStorage?.setItem(e, JSON.stringify(t))
    } catch {
    }
}

var B = Yt({
    systemPanel: {visible: !1, latestMessageId: null, state: null, position: rl(co)},
    playerOptionsPanel: {visible: !1, latestMessageId: null, options: [], position: rl(uo)}
});

function sl(e) {
    B.systemPanel.latestMessageId = e.messageId, B.systemPanel.state = e.state
}

function fo(e) {
    let t = e.options ?? [];
    B.playerOptionsPanel.latestMessageId = e.messageId, B.playerOptionsPanel.options = t, B.playerOptionsPanel.visible = t.length > 0
}

function Lr(e) {
    B.systemPanel.visible = e
}

function Hr(e) {
    B.playerOptionsPanel.visible = e
}

function po(e, t) {
    let n = {mode: "custom", left: e, top: t};
    B.systemPanel.position = n, Ir(co, n)
}

function go(e, t) {
    let n = {mode: "custom", left: e, top: t};
    B.playerOptionsPanel.position = n, Ir(uo, n)
}

function ol() {
    let e = {mode: "default", left: 0, top: 0};
    B.systemPanel.position = e, Ir(co, e)
}

function il() {
    let e = {mode: "default", left: 0, top: 0};
    B.playerOptionsPanel.position = e, Ir(uo, e)
}

function ho() {
    B.systemPanel.visible = !1, B.systemPanel.latestMessageId = null, B.systemPanel.state = null, B.playerOptionsPanel.visible = !1, B.playerOptionsPanel.latestMessageId = null, B.playerOptionsPanel.options = []
}

var pe = (e, t) => {
    let n = e.__vccOpts || e;
    for (let [r, s] of t) n[r] = s;
    return n
};
var Op = ue({
        __name: "ArmyPanel", props: {state: {type: Object, required: !0}}, setup(e, {expose: t}) {
            t();
            let n = e, r = $(() => Object.entries(n.state.\u52BF\u529B || {})[0] ?? null), s = $(() => r.value?.[0] ?? ""),
                o = $(() => r.value?.[1] ?? null), i = $(() => Object.entries(o.value?.\u519B\u961F || {})),
                a = {props: n, currentFactionEntry: r, currentFactionId: s, currentFaction: o, armies: i};
            return Object.defineProperty(a, "__isScriptSetup", {enumerable: !1, value: !0}), a
        }
    }), wp = {class: "tk-panel-card"}, Sp = {key: 0, class: "tk-panel-inline-note"}, Cp = {class: "tk-panel-detail-list"},
    Tp = {class: "tk-panel-detail-body"}, Pp = {class: "tk-panel-bar-row"}, Dp = {class: "tk-panel-bar"},
    Ap = {class: "tk-panel-bar-value"}, Vp = {class: "tk-panel-bar-row"}, Rp = {class: "tk-panel-bar"},
    Mp = {class: "tk-panel-bar-value"}, $p = {class: "tk-panel-kv-grid compact"}, Ip = {class: "tk-panel-kv"},
    Lp = {class: "tk-panel-v"}, Hp = {class: "tk-panel-kv"}, Fp = {class: "tk-panel-v"}, Up = {class: "tk-panel-kv"},
    Bp = {class: "tk-panel-v"}, jp = {class: "tk-panel-kv"}, Kp = {class: "tk-panel-v"}, Wp = {class: "tk-panel-kv"},
    zp = {class: "tk-panel-v"}, Gp = {class: "tk-panel-kv"}, Yp = {class: "tk-panel-v"},
    qp = {key: 0, class: "tk-panel-empty"};

function Jp(e, t, n, r, s, o) {
    return k(), N("section", wp, [t[8] || (t[8] = p("div", {class: "tk-panel-card-title"}, "\u519B\u961F", -1)), r.currentFaction ? (k(), N("div", Sp, "\u5F53\u524D\u5C55\u793A\u52BF\u529B\uFF1A" + S(r.currentFaction.\u540D\u79F0 || r.currentFactionId) + "\uFF08" + S(r.currentFactionId) + "\uFF09", 1)) : Ee("v-if", !0), p("div", Cp, [(k(!0), N(j, null, ne(r.armies, ([i, a]) => (k(), N("details", {
        key: i,
        class: "tk-panel-detail"
    }, [p("summary", null, [p("span", null, S(i), 1), p("span", null, S(a.\u5175\u79CD) + " / " + S(a.\u7B49\u7EA7), 1)]), p("div", Tp, [p("div", Pp, [t[0] || (t[0] = p("div", {class: "tk-panel-bar-label"}, "\u58EB\u6C14", -1)), p("div", Dp, [p("span", {
        class: "tk-panel-bar-fill is-morale",
        style: Ce({width: `${a.\u58EB\u6C14}%`})
    }, null, 4)]), p("div", Ap, S(a.\u58EB\u6C14) + " / 100", 1)]), p("div", Vp, [t[1] || (t[1] = p("div", {class: "tk-panel-bar-label"}, "\u75B2\u60EB", -1)), p("div", Rp, [p("span", {
        class: "tk-panel-bar-fill is-fatigue",
        style: Ce({width: `${a.\u75B2\u60EB}%`})
    }, null, 4)]), p("div", Mp, S(a.\u75B2\u60EB) + " / 100", 1)]), p("div", $p, [p("div", Ip, [t[2] || (t[2] = p("span", {class: "tk-panel-k"}, "\u5175\u529B", -1)), p("span", Lp, S(a.\u5175\u529B), 1)]), p("div", Hp, [t[3] || (t[3] = p("span", {class: "tk-panel-k"}, "\u5C06\u9886", -1)), p("span", Fp, S(a.\u7EDF\u5C5E\u5C06\u9886 || "\u65E0"), 1)]), p("div", Up, [t[4] || (t[4] = p("span", {class: "tk-panel-k"}, "\u9A7B\u624E\u5730", -1)), p("span", Bp, S(a.\u9A7B\u624E\u5730 || "\u65E0"), 1)]), p("div", jp, [t[5] || (t[5] = p("span", {class: "tk-panel-k"}, "\u6218\u529B", -1)), p("span", Kp, S(a._\u7EFC\u5408\u6218\u529B ?? 0), 1)]), p("div", Wp, [t[6] || (t[6] = p("span", {class: "tk-panel-k"}, "\u653B\u51FB\u6218\u529B", -1)), p("span", zp, S(a._\u653B\u51FB\u6218\u529B ?? 0), 1)]), p("div", Gp, [t[7] || (t[7] = p("span", {class: "tk-panel-k"}, "\u9632\u5FA1\u6218\u529B", -1)), p("span", Yp, S(a._\u9632\u5FA1\u6218\u529B ?? 0), 1)])])])]))), 128)), r.armies.length === 0 ? (k(), N("div", qp, "\u5F53\u524D\u6CA1\u6709\u519B\u961F\u6570\u636E")) : Ee("v-if", !0)])])
}

var al = pe(Op, [["render", Jp], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\ArmyPanel.vue"]]);
var Xp = ue({
        __name: "FactionPanel", props: {state: {type: Object, required: !0}}, setup(e, {expose: t}) {
            t();
            let n = e, r = $(() => Object.entries(n.state.\u52BF\u529B || {})[0] ?? null), s = $(() => r.value?.[0] ?? ""),
                o = $(() => r.value?.[1] ?? null),
                i = $(() => Object.entries(o.value?.\u5916\u4EA4 || {}).slice(0, 8).map(([f, g]) => ({
                    label: f,
                    value: `${g} / ${o.value?._\u5916\u4EA4\u7B49\u7EA7?.[f] || "\u672A\u77E5"}`
                }))), a = $(() => Object.entries(o.value?.\u57CE\u6C60 || {}).slice(0, 8)), c = $(() => o.value ? [{
                    label: "\u540D\u79F0",
                    value: o.value.\u540D\u79F0 || "\u65E0",
                    accent: !0
                }, {label: "\u89C4\u6A21", value: o.value.\u89C4\u6A21 || "\u65E0", accent: !0}, {
                    label: "\u6B63\u7EDF\u6027",
                    value: o.value.\u6B63\u7EDF\u6027
                }, {label: "\u60C5\u62A5\u7F51", value: o.value.\u60C5\u62A5\u7F51}, {
                    label: "\u91D1\u94B1",
                    value: o.value.\u91D1\u94B1
                }, {label: "\u7CAE\u8349", value: o.value.\u7CAE\u8349}, {
                    label: "\u603B\u5175\u529B",
                    value: o.value._\u603B\u5175\u529B ?? 0
                }, {label: "\u603B\u6218\u529B", value: o.value._\u603B\u6218\u529B ?? 0}, {
                    label: "\u6708\u7A0E\u6536",
                    value: o.value._\u6708\u603B\u7A0E\u6536 ?? 0
                }, {label: "\u6708\u4EA7\u7CAE", value: o.value._\u6708\u603B\u4EA7\u7CAE ?? 0}, {
                    label: "\u6708\u519B\u9977",
                    value: o.value._\u6708\u519B\u9977\u4F30\u7B97 ?? 0
                }, {label: "\u6708\u8017\u7CAE", value: o.value._\u6708\u7CAE\u8349\u6D88\u8017\u4F30\u7B97 ?? 0}] : []), d = {
                    props: n,
                    currentFactionEntry: r,
                    currentFactionId: s,
                    currentFaction: o,
                    diplomacyItems: i,
                    cities: a,
                    summaryItems: c
                };
            return Object.defineProperty(d, "__isScriptSetup", {enumerable: !1, value: !0}), d
        }
    }), Qp = {key: 0, class: "tk-panel-page-grid cols-2"}, Zp = {class: "tk-panel-card"},
    ed = {class: "tk-panel-inline-note"}, td = {class: "tk-panel-kv-grid"}, nd = {class: "tk-panel-k"},
    rd = {class: "tk-panel-v"}, sd = {class: "tk-panel-card"}, od = {class: "tk-panel-kv-grid compact"},
    id = {class: "tk-panel-k"}, ad = {class: "tk-panel-v"}, ld = {key: 0, class: "tk-panel-empty"},
    cd = {class: "tk-panel-card cols-span-2"}, ud = {class: "tk-panel-list"}, fd = {class: "tk-panel-list-title"},
    pd = {class: "tk-panel-list-meta"}, dd = {class: "tk-panel-list-desc"}, gd = {key: 0, class: "tk-panel-empty"},
    hd = {key: 1, class: "tk-panel-card"};

function md(e, t, n, r, s, o) {
    return r.currentFaction ? (k(), N("div", Qp, [p("section", Zp, [t[0] || (t[0] = p("div", {class: "tk-panel-card-title"}, "\u52BF\u529B\u603B\u89C8", -1)), p("div", ed, "\u5F53\u524D\u5C55\u793A\u52BF\u529B\uFF1A" + S(r.currentFaction.\u540D\u79F0 || r.currentFactionId) + "\uFF08" + S(r.currentFactionId) + "\uFF09", 1), p("div", td, [(k(!0), N(j, null, ne(r.summaryItems, i => (k(), N("div", {
        key: i.label,
        class: me(["tk-panel-kv", {"is-accent": i.accent}])
    }, [p("span", nd, S(i.label), 1), p("span", rd, S(i.value), 1)], 2))), 128))])]), p("section", sd, [t[1] || (t[1] = p("div", {class: "tk-panel-card-title"}, "\u5916\u4EA4\u6001\u52BF", -1)), p("div", od, [(k(!0), N(j, null, ne(r.diplomacyItems, i => (k(), N("div", {
        key: i.label,
        class: "tk-panel-kv"
    }, [p("span", id, S(i.label), 1), p("span", ad, S(i.value), 1)]))), 128)), r.diplomacyItems.length === 0 ? (k(), N("div", ld, "\u6682\u65E0\u5916\u4EA4\u6570\u636E")) : Ee("v-if", !0)])]), p("section", cd, [t[2] || (t[2] = p("div", {class: "tk-panel-card-title"}, "\u57CE\u6C60\u6458\u8981", -1)), p("div", ud, [(k(!0), N(j, null, ne(r.cities, ([i, a]) => (k(), N("div", {
        key: i,
        class: "tk-panel-list-item"
    }, [p("div", fd, S(i), 1), p("div", pd, S(a.\u7B49\u7EA7) + " / \u592A\u5B88:" + S(a.\u592A\u5B88 || "\u65E0"), 1), p("div", dd, "\u7A0E\u6536:" + S(a._\u6708\u7A0E\u6536 ?? 0) + " \xB7 \u4EA7\u7CAE:" + S(a._\u6708\u4EA7\u7CAE ?? 0), 1)]))), 128)), r.cities.length === 0 ? (k(), N("div", gd, "\u6682\u65E0\u57CE\u6C60\u6570\u636E")) : Ee("v-if", !0)])])])) : (k(), N("section", hd, [...t[3] || (t[3] = [p("div", {class: "tk-panel-card-title"}, "\u52BF\u529B", -1), p("div", {class: "tk-panel-empty"}, "\u5F53\u524D\u6CA1\u6709\u52BF\u529B\u6570\u636E", -1)])]))
}

var ll = pe(Xp, [["render", md], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\FactionPanel.vue"]]);
var _d = 220, yd = 236, cl = 110, ul = 104, Fr = 68, fl = 96, pl = 100, bd = ue({
        __name: "RadarChart", props: {stats: {type: Object, required: !0}}, setup(e, {expose: t}) {
            t();
            let n = e, r = $(() => [{
                    key: "\u6B66\u529B",
                    value: n.stats.\u6B66\u529B,
                    bonus: n.stats._\u6B66\u529B\u52A0\u503C ?? 0
                }, {
                    key: "\u667A\u529B",
                    value: n.stats.\u667A\u529B,
                    bonus: n.stats._\u667A\u529B\u52A0\u503C ?? 0
                }, {
                    key: "\u7EDF\u7387",
                    value: n.stats.\u7EDF\u7387,
                    bonus: n.stats._\u7EDF\u7387\u52A0\u503C ?? 0
                }, {
                    key: "\u653F\u6CBB",
                    value: n.stats.\u653F\u6CBB,
                    bonus: n.stats._\u653F\u6CBB\u52A0\u503C ?? 0
                }, {
                    key: "\u9B45\u529B",
                    value: n.stats.\u9B45\u529B,
                    bonus: n.stats._\u9B45\u529B\u52A0\u503C ?? 0
                }, {key: "\u4F53\u8D28", value: n.stats.\u4F53\u8D28, bonus: n.stats._\u4F53\u8D28\u52A0\u503C ?? 0}]),
                s = [.25, .5, .75, 1], o = $(() => r.value.map((O, A) => -Math.PI / 2 + Math.PI * 2 * A / r.value.length));

            function i(O, A) {
                return {x: Number((cl + Math.cos(A) * O).toFixed(1)), y: Number((ul + Math.sin(A) * O).toFixed(1))}
            }

            function a(O) {
                return o.value.map(A => {
                    let V = i(Fr * O, A);
                    return `${V.x},${V.y}`
                }).join(" ")
            }

            function c(O) {
                return Math.max(0, Math.min(1, O / pl))
            }

            let d = $(() => r.value.map((O, A) => {
                    let V = i(Fr * c(O.value), o.value[A]);
                    return `${V.x},${V.y}`
                }).join(" ")), f = $(() => r.value.map((O, A) => i(Fr * c(O.value), o.value[A]))),
                g = $(() => r.value.map((O, A) => i(fl, o.value[A]))), b = {
                    props: n,
                    labels: r,
                    viewBoxWidth: _d,
                    viewBoxHeight: yd,
                    cx: cl,
                    cy: ul,
                    maxRadius: Fr,
                    labelRadius: fl,
                    maxValue: pl,
                    rings: s,
                    angles: o,
                    point: i,
                    polygonPoints: a,
                    normalized: c,
                    shapePoints: d,
                    dots: f,
                    labelPositions: g
                };
            return Object.defineProperty(b, "__isScriptSetup", {enumerable: !1, value: !0}), b
        }
    }), vd = {class: "tk-radar-wrap"}, Ed = ["viewBox"], xd = ["points"], kd = ["x2", "y2"], Nd = ["points"],
    Od = ["cx", "cy"], wd = ["x", "y"], Sd = ["x"], Cd = ["x"];

function Td(e, t, n, r, s, o) {
    return k(), N("div", vd, [(k(), N("svg", {
        class: "tk-radar",
        viewBox: `0 0 ${r.viewBoxWidth} ${r.viewBoxHeight}`,
        role: "img",
        "aria-label": "\u4E3B\u89D2\u516D\u7EF4\u96F7\u8FBE\u56FE"
    }, [(k(), N(j, null, ne(r.rings, i => p("polygon", {
        key: i,
        class: "tk-radar-ring",
        points: r.polygonPoints(i)
    }, null, 8, xd)), 64)), (k(!0), N(j, null, ne(r.angles, (i, a) => (k(), N("line", {
        key: `axis-${a}`,
        class: "tk-radar-axis",
        x1: r.cx,
        y1: r.cy,
        x2: r.cx + Math.cos(i) * r.maxRadius,
        y2: r.cy + Math.sin(i) * r.maxRadius
    }, null, 8, kd))), 128)), p("polygon", {
        class: "tk-radar-shape",
        points: r.shapePoints
    }, null, 8, Nd), (k(!0), N(j, null, ne(r.dots, (i, a) => (k(), N("circle", {
        key: `dot-${a}`,
        class: "tk-radar-dot",
        cx: i.x,
        cy: i.y,
        r: "3"
    }, null, 8, Od))), 128)), (k(!0), N(j, null, ne(r.labels, (i, a) => (k(), N("text", {
        key: i.key,
        class: "tk-radar-label",
        x: r.labelPositions[a].x,
        y: r.labelPositions[a].y,
        "text-anchor": "middle"
    }, [p("tspan", {x: r.labelPositions[a].x, dy: "0"}, S(i.key), 9, Sd), p("tspan", {
        x: r.labelPositions[a].x,
        dy: "13"
    }, S(`${i.value}/${i.bonus}`), 9, Cd)], 8, wd))), 128))], 8, Ed))])
}

var dl = pe(bd, [["render", Td], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\RadarChart.vue"]]);
var Pd = ue({
        __name: "HeroPanel", props: {state: {type: Object, required: !0}}, setup(e, {expose: t}) {
            t();
            let n = e, r = $(() => n.state.\u4E3B\u89D2),
                s = [{key: "attrs", label: "\u5C5E\u6027"}, {key: "equip", label: "\u88C5\u5907"}, {
                    key: "bag",
                    label: "\u80CC\u5305"
                }, {key: "skills", label: "\u6B66\u6280"}, {key: "perks", label: "\u4E13\u957F"}, {
                    key: "consorts",
                    label: "\u540E\u5BAB"
                }, {key: "generals", label: "\u6B66\u5C06"}], o = Oe("attrs"), i = $(() => [{
                    label: "\u5B98\u804C",
                    value: r.value.\u5B98\u804C || "\u65E0",
                    accent: !0
                }, {
                    label: "\u7235\u4F4D",
                    value: r.value.\u7235\u4F4D || "\u65E0",
                    accent: !0
                }, {
                    label: "\u58F0\u671B\u79F0\u53F7",
                    value: r.value._\u58F0\u671B\u79F0\u53F7 || "\u65E0"
                }, {
                    label: "\u548C\u8C10\u7B49\u7EA7",
                    value: r.value._\u548C\u8C10\u7B49\u7EA7 || "\u65E0"
                }, {label: "\u91D1\u94B1", value: r.value.\u91D1\u94B1}, {
                    label: "\u79EF\u5206",
                    value: r.value.\u79EF\u5206
                }, {label: "\u58F0\u671B", value: r.value.\u58F0\u671B}]),
                a = $(() => [{label: "\u5148\u653B", value: r.value._\u5148\u653B\u503C ?? 0}, {
                    label: "\u653B\u51FB",
                    value: r.value._\u653B\u51FB\u57FA\u7840\u503C ?? 0
                }, {label: "\u4F24\u5BB3", value: r.value._\u4F24\u5BB3\u57FA\u7840\u503C ?? 0}, {
                    label: "\u9632\u5FA1DC",
                    value: r.value._\u9632\u5FA1DC ?? 0
                }, {label: "\u4F24\u5BB3\u51CF\u514D", value: r.value._\u4F24\u5BB3\u51CF\u514D ?? 0}]),
                c = $(() => Object.entries(n.state.NPC || {}).filter(([, U]) => !!U.\u7F8E\u4EBA\u5C5E\u6027).map(([U, I]) => ({
                    title: I.\u540D\u79F0 || U,
                    meta: `${I.\u7F8E\u4EBA\u5C5E\u6027?.\u4F4D\u4EFD || "\u672A\u7EB3\u5165"} / ${I.\u7F8E\u4EBA\u5C5E\u6027?._\u4F9D\u8D56\u7B49\u7EA7 || I.\u7F8E\u4EBA\u5C5E\u6027?.\u4F9D\u8D56\u5EA6 || 0}`,
                    desc: `${I.\u7F8E\u4EBA\u5C5E\u6027?.\u5F53\u524D\u72B6\u6001 || "\u6B63\u5E38"} \xB7 ${I.\u7B80\u8FF0 || "\u65E0"}`
                }))),
                d = $(() => Object.entries(n.state.NPC || {}).filter(([, U]) => !!U.\u6B66\u5C06\u4FE1\u606F).map(([U, I]) => ({
                    title: I.\u540D\u79F0 || U,
                    meta: `${I.\u6B66\u5C06\u4FE1\u606F?.\u5B98\u804C || "\u65E0\u5B98\u804C"} / ${I.\u6B66\u5C06\u4FE1\u606F?.\u5F53\u524D\u72B6\u6001 || "\u5F85\u547D"}`,
                    desc: `${I.\u6B66\u5C06\u4FE1\u606F?.\u9A7B\u624E\u5730 || "\u65E0\u9A7B\u5730"} \xB7 ${I.\u7B80\u8FF0 || "\u65E0"}`
                }))), f = $(() => ({
                    equip: Object.entries(r.value.\u88C5\u5907 || {}).map(([U, I]) => !I || I === "\u65E0" ? {
                        title: U,
                        meta: "\u672A\u88C5\u5907",
                        desc: ""
                    } : {
                        title: `${U} \xB7 ${I.\u540D\u79F0}`,
                        meta: `${I.\u54C1\u8D28} / ${I.\u7C7B\u578B}`,
                        desc: I.\u63CF\u8FF0 || I.\u5176\u4ED6\u6548\u679C || "\u65E0"
                    }),
                    bag: Object.entries(r.value.\u7269\u54C1\u680F || {}).map(([U, I]) => ({
                        title: U,
                        meta: `${I.\u54C1\u8D28} / \u6570\u91CF:${I.\u6570\u91CF}`,
                        desc: I.\u63CF\u8FF0 || "\u65E0"
                    })),
                    skills: Object.entries(r.value.\u6B66\u6280 || {}).map(([U, I]) => ({
                        title: I.\u540D\u79F0 || U,
                        meta: `${I.\u7B49\u7EA7} / ${I.\u7C7B\u578B}`,
                        desc: `\u719F\u7EC3\u5EA6\uFF1A${I.\u719F\u7EC3\u5EA6 ?? 0}\u3000\u4F53\u529B\u6D88\u8017\uFF1A${I.\u4F53\u529B\u6D88\u8017 ?? 0}${I.\u6548\u679C ? `
${I.\u6548\u679C}` : ""}`
                    })),
                    perks: Object.entries(r.value.\u4E13\u957F || {}).map(([U, I]) => ({
                        title: I.\u540D\u79F0 || U,
                        meta: I.\u7B49\u7EA7 || "\u672A\u5B9A\u7EA7",
                        desc: I.\u6548\u679C || "\u65E0"
                    })),
                    consorts: c.value,
                    generals: d.value
                })), g = {
                    equip: "\u88C5\u5907\u680F",
                    bag: "\u80CC\u5305",
                    skills: "\u6B66\u6280\u680F",
                    perks: "\u4E13\u957F\u680F",
                    consorts: "\u540E\u5BAB\u5217\u8868",
                    generals: "\u5DF2\u62DB\u52DF\u6B66\u5C06"
                }, b = {
                    equip: "\u6682\u65E0\u88C5\u5907",
                    bag: "\u6682\u65E0\u7269\u54C1",
                    skills: "\u6682\u65E0\u6B66\u6280",
                    perks: "\u6682\u65E0\u4E13\u957F",
                    consorts: "\u6682\u65E0\u540E\u5BAB\u6210\u5458",
                    generals: "\u6682\u65E0\u5DF2\u62DB\u52DF\u6B66\u5C06"
                }, O = $(() => o.value === "attrs" ? "equip" : o.value), A = $(() => g[O.value]),
                V = $(() => b[O.value] || "\u6682\u65E0\u5185\u5BB9"), re = $(() => f.value[O.value] || []), q = {
                    props: n,
                    player: r,
                    tabs: s,
                    activeTab: o,
                    resourceItems: i,
                    battleItems: a,
                    \u540E\u5BAB\u9879\u5217\u8868: c,
                    \u6B66\u5C06\u9879\u5217\u8868: d,
                    lists: f,
                    titles: g,
                    empties: b,
                    currentListKey: O,
                    currentTitle: A,
                    currentEmpty: V,
                    currentList: re,
                    ratio: (U, I) => `${Math.max(0, Math.min(100, Math.round(U / Math.max(I || 100, 1) * 100)))}%`,
                    RadarChart: dl
                };
            return Object.defineProperty(q, "__isScriptSetup", {enumerable: !1, value: !0}), q
        }
    }), Dd = {class: "tk-subtabs"}, Ad = ["onClick"], Vd = {key: 0, class: "tk-panel-page-grid cols-2"},
    Rd = {class: "tk-panel-card"}, Md = {class: "tk-panel-bar-row"}, $d = {class: "tk-panel-bar"},
    Id = {class: "tk-panel-bar-value"}, Ld = {class: "tk-panel-bar-row"}, Hd = {class: "tk-panel-bar"},
    Fd = {class: "tk-panel-bar-value"}, Ud = {class: "tk-panel-inline-note"}, Bd = {class: "tk-panel-kv-grid"},
    jd = {class: "tk-panel-k"}, Kd = {class: "tk-panel-v"}, Wd = {class: "tk-panel-card"},
    zd = {class: "tk-panel-kv-grid compact"}, Gd = {class: "tk-panel-k"}, Yd = {class: "tk-panel-v"},
    qd = {key: 1, class: "tk-panel-card"}, Jd = {class: "tk-panel-card-title"}, Xd = {class: "tk-panel-list"},
    Qd = {class: "tk-panel-list-title"}, Zd = {class: "tk-panel-list-meta"}, eg = {key: 0, class: "tk-panel-list-desc"},
    tg = {key: 0, class: "tk-panel-empty"};

function ng(e, t, n, r, s, o) {
    return k(), N("div", null, [p("div", Dd, [(k(), N(j, null, ne(r.tabs, i => p("button", {
        key: i.key,
        type: "button",
        class: me(["tk-subtab-label", {"is-active": r.activeTab === i.key}]),
        onClick: a => r.activeTab = i.key
    }, S(i.label), 11, Ad)), 64))]), r.activeTab === "attrs" ? (k(), N("div", Vd, [p("section", Rd, [t[2] || (t[2] = p("div", {class: "tk-panel-card-title"}, "\u4E3B\u89D2\u9762\u677F", -1)), p("div", Md, [t[0] || (t[0] = p("div", {class: "tk-panel-bar-label"}, "\u751F\u547D", -1)), p("div", $d, [p("span", {
        class: "tk-panel-bar-fill is-hp",
        style: Ce({width: r.ratio(r.player.\u5F53\u524D\u751F\u547D\u503C, r.player._\u751F\u547D\u503C\u4E0A\u9650)})
    }, null, 4)]), p("div", Id, S(r.player.\u5F53\u524D\u751F\u547D\u503C) + " / " + S(r.player._\u751F\u547D\u503C\u4E0A\u9650 ?? 0), 1)]), p("div", Ld, [t[1] || (t[1] = p("div", {class: "tk-panel-bar-label"}, "\u4F53\u529B", -1)), p("div", Hd, [p("span", {
        class: "tk-panel-bar-fill is-sp",
        style: Ce({width: r.ratio(r.player.\u5F53\u524D\u4F53\u529B\u503C, r.player._\u4F53\u529B\u503C\u4E0A\u9650)})
    }, null, 4)]), p("div", Fd, S(r.player.\u5F53\u524D\u4F53\u529B\u503C) + " / " + S(r.player._\u4F53\u529B\u503C\u4E0A\u9650 ?? 0), 1)]), p("div", Ud, "\u4F24\u52BF\uFF1A" + S(r.player._\u4F24\u52BF || "\u5B8C\u597D") + "\u3000\u51CF\u503C\uFF1A" + S(r.player._\u6218\u6597\u51CF\u503C ?? 0), 1), p("div", Bd, [(k(!0), N(j, null, ne(r.resourceItems, i => (k(), N("div", {
        key: i.label,
        class: me(["tk-panel-kv", {"is-accent": i.accent}])
    }, [p("span", jd, S(i.label), 1), p("span", Kd, S(i.value), 1)], 2))), 128))])]), p("section", Wd, [t[3] || (t[3] = p("div", {class: "tk-panel-card-title"}, "\u516D\u7EF4\u4E0E\u6218\u6597", -1)), ce(r.RadarChart, {stats: r.player.\u516D\u7EF4}, null, 8, ["stats"]), p("div", zd, [(k(!0), N(j, null, ne(r.battleItems, i => (k(), N("div", {
        key: i.label,
        class: "tk-panel-kv"
    }, [p("span", Gd, S(i.label), 1), p("span", Yd, S(i.value), 1)]))), 128))])])])) : (k(), N("section", qd, [p("div", Jd, S(r.currentTitle), 1), p("div", Xd, [(k(!0), N(j, null, ne(r.currentList, i => (k(), N("div", {
        key: i.title + i.meta,
        class: "tk-panel-list-item"
    }, [p("div", Qd, S(i.title), 1), p("div", Zd, S(i.meta), 1), i.desc ? (k(), N("div", eg, S(i.desc), 1)) : Ee("v-if", !0)]))), 128)), r.currentList.length === 0 ? (k(), N("div", tg, S(r.currentEmpty), 1)) : Ee("v-if", !0)])]))])
}

var gl = pe(Pd, [["render", ng], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\HeroPanel.vue"]]);
var rg = ue({
        __name: "NpcPanel", props: {state: {type: Object, required: !0}}, setup(e, {expose: t}) {
            t();
            let n = e, r = $(() => Object.entries(n.state.NPC || {})), s = {props: n, entries: r};
            return Object.defineProperty(s, "__isScriptSetup", {enumerable: !1, value: !0}), s
        }
    }), sg = {class: "tk-panel-card"}, og = {class: "tk-panel-detail-list"}, ig = {class: "tk-panel-detail-body"},
    ag = {class: "tk-panel-kv-grid compact"}, lg = {class: "tk-panel-kv"}, cg = {class: "tk-panel-v"},
    ug = {class: "tk-panel-kv"}, fg = {class: "tk-panel-v"}, pg = {class: "tk-panel-kv"}, dg = {class: "tk-panel-v"},
    gg = {class: "tk-panel-inline-note"}, hg = {key: 0, class: "tk-panel-empty"};

function mg(e, t, n, r, s, o) {
    return k(), N("section", sg, [t[3] || (t[3] = p("div", {class: "tk-panel-card-title"}, "\u5F53\u524D\u5730\u70B9 NPC", -1)), p("div", og, [(k(!0), N(j, null, ne(r.entries, ([i, a]) => (k(), N("details", {
        key: i,
        class: "tk-panel-detail"
    }, [p("summary", null, [p("span", null, S(a.\u540D\u79F0 || i), 1), p("span", null, S(a.\u54C1\u8D28) + " / " + S(a.\u5B9A\u4F4D || "\u672A\u77E5"), 1)]), p("div", ig, [p("div", ag, [p("div", lg, [t[0] || (t[0] = p("span", {class: "tk-panel-k"}, "\u9635\u8425", -1)), p("span", cg, S(a.\u9635\u8425 || "\u65E0"), 1)]), p("div", ug, [t[1] || (t[1] = p("span", {class: "tk-panel-k"}, "\u5B9A\u4F4D", -1)), p("span", fg, S(a.\u5B9A\u4F4D || "\u65E0"), 1)]), p("div", pg, [t[2] || (t[2] = p("span", {class: "tk-panel-k"}, "\u5173\u7CFB", -1)), p("span", dg, S(a._\u5FE0\u8BDA\u7B49\u7EA7 || a._\u597D\u611F\u7B49\u7EA7 || a._\u4EA4\u60C5\u7B49\u7EA7 || a.\u597D\u611F), 1)])]), p("div", gg, S(a.\u7B80\u8FF0 || "\u6682\u65E0\u63CF\u8FF0"), 1)])]))), 128)), r.entries.length === 0 ? (k(), N("div", hg, "\u5F53\u524D\u5730\u70B9\u6682\u65E0\u5173\u952E NPC")) : Ee("v-if", !0)])])
}

var hl = pe(rg, [["render", mg], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\NpcPanel.vue"]]);
var _g = ue({
        __name: "QuestPanel", props: {state: {type: Object, required: !0}}, setup(e, {expose: t}) {
            t();
            let n = e, r = $(() => Object.entries(n.state.\u4EFB\u52A1 || {})),
                s = $(() => [...new Set(r.value.map(([, c]) => c.\u7C7B\u578B))]), o = Oe("");
            Ge(s, c => {
                o.value = c[0] || ""
            }, {immediate: !0});
            let i = $(() => o.value ? r.value.filter(([, c]) => c.\u7C7B\u578B === o.value) : r.value),
                a = {props: n, tasks: r, typeTabs: s, activeTab: o, currentTasks: i};
            return Object.defineProperty(a, "__isScriptSetup", {enumerable: !1, value: !0}), a
        }
    }), yg = {key: 0, class: "tk-subtabs"}, bg = ["onClick"], vg = {class: "tk-panel-card"},
    Eg = {class: "tk-panel-card-title"}, xg = {key: 0, class: "tk-panel-detail-list"},
    kg = {class: "tk-panel-detail-body"}, Ng = {class: "tk-panel-inline-note"}, Og = {class: "tk-panel-list"},
    wg = {class: "tk-panel-list-title"}, Sg = {class: "tk-panel-list-meta"}, Cg = {class: "tk-panel-list-desc"},
    Tg = {key: 0, class: "tk-panel-empty"}, Pg = {key: 1, class: "tk-panel-empty"};

function Dg(e, t, n, r, s, o) {
    return k(), N("div", null, [r.typeTabs.length > 0 ? (k(), N("div", yg, [(k(!0), N(j, null, ne(r.typeTabs, i => (k(), N("button", {
        key: i,
        type: "button",
        class: me(["tk-subtab-label", {"is-active": r.activeTab === i}]),
        onClick: a => r.activeTab = i
    }, S(i), 11, bg))), 128))])) : Ee("v-if", !0), p("section", vg, [p("div", Eg, S(r.activeTab ? `${r.activeTab}\u4EFB\u52A1` : "\u4EFB\u52A1\u5217\u8868"), 1), r.currentTasks.length > 0 ? (k(), N("div", xg, [(k(!0), N(j, null, ne(r.currentTasks, ([i, a]) => (k(), N("details", {
        key: i,
        class: "tk-panel-detail"
    }, [p("summary", null, [p("span", null, S(a.\u540D\u79F0 || i), 1), p("span", null, S(a.\u7C7B\u578B) + " / " + S(a.\u72B6\u6001), 1)]), p("div", kg, [p("div", Ng, "\u65F6\u9650\uFF1A" + S(a.\u65F6\u9650 || "\u65E0\u65F6\u9650"), 1), p("div", Og, [(k(!0), N(j, null, ne(Object.entries(a.\u76EE\u6807 || {}), ([c, d]) => (k(), N("div", {
        key: c,
        class: "tk-panel-list-item"
    }, [p("div", wg, S(d.\u63CF\u8FF0 || c), 1), p("div", Sg, S(d.\u7C7B\u578B) + " / " + S(d.\u72B6\u6001), 1), p("div", Cg, "\u79EF\u5206\uFF1A" + S(d.\u79EF\u5206 ?? 0) + "\u3000\u5176\u4ED6\u5956\u52B1\uFF1A" + S(d.\u5176\u4ED6\u5956\u52B1 || "\u65E0"), 1)]))), 128)), Object.keys(a.\u76EE\u6807 || {}).length === 0 ? (k(), N("div", Tg, "\u6682\u65E0\u4EFB\u52A1\u76EE\u6807")) : Ee("v-if", !0)])])]))), 128))])) : (k(), N("div", Pg, "\u5F53\u524D\u6CA1\u6709\u6D3B\u8DC3\u4EFB\u52A1"))])])
}

var ml = pe(_g, [["render", Dg], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\QuestPanel.vue"]]);
var Ag = ue({
        __name: "ShopPanel", props: {state: {type: Object, required: !0}}, setup(e, {expose: t}) {
            t();
            let n = e, r = $(() => Object.entries(n.state.\u5546\u57CE || {})),
                s = $(() => [...new Set(r.value.map(([, c]) => c.\u5206\u7C7B))]), o = Oe("");
            Ge(s, c => {
                o.value = c[0] || ""
            }, {immediate: !0});
            let i = $(() => o.value ? r.value.filter(([, c]) => c.\u5206\u7C7B === o.value) : r.value),
                a = {props: n, items: r, typeTabs: s, activeTab: o, currentItems: i};
            return Object.defineProperty(a, "__isScriptSetup", {enumerable: !1, value: !0}), a
        }
    }), Vg = {key: 0, class: "tk-subtabs"}, Rg = ["onClick"], Mg = {class: "tk-panel-card"},
    $g = {class: "tk-panel-card-title"}, Ig = {class: "tk-panel-list"}, Lg = {class: "tk-panel-list-title"},
    Hg = {class: "tk-panel-list-meta"}, Fg = {class: "tk-panel-list-desc"}, Ug = {key: 0, class: "tk-panel-empty"};

function Bg(e, t, n, r, s, o) {
    return k(), N("div", null, [r.typeTabs.length > 0 ? (k(), N("div", Vg, [(k(!0), N(j, null, ne(r.typeTabs, i => (k(), N("button", {
        key: i,
        type: "button",
        class: me(["tk-subtab-label", {"is-active": r.activeTab === i}]),
        onClick: a => r.activeTab = i
    }, S(i), 11, Rg))), 128))])) : Ee("v-if", !0), p("section", Mg, [p("div", $g, S(r.activeTab || "\u5546\u57CE"), 1), p("div", Ig, [(k(!0), N(j, null, ne(r.currentItems, ([i, a]) => (k(), N("div", {
        key: i,
        class: "tk-panel-list-item"
    }, [p("div", Lg, S(a.\u540D\u79F0 || i), 1), p("div", Hg, S(a.\u5206\u7C7B) + " / " + S(a.\u4EF7\u683C) + " \u79EF\u5206", 1), p("div", Fg, S(a.\u63CF\u8FF0 || ""), 1)]))), 128)), r.currentItems.length === 0 ? (k(), N("div", Ug, "\u5F53\u524D\u6CA1\u6709\u53EF\u89C1\u5546\u54C1")) : Ee("v-if", !0)])])])
}

var _l = pe(Ag, [["render", Bg], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\status\\ShopPanel.vue"]]);
var jg = ue({
        __name: "StatusBarPanel", setup(e, {expose: t}) {
            t();
            let n = $(() => B.systemPanel.state), r = [{key: "hero", label: "\u4E3B\u89D2"}, {
                key: "npc",
                label: "\u5F53\u524D\u5730\u70B9NPC"
            }, {key: "quest", label: "\u4EFB\u52A1"}, {key: "shop", label: "\u5546\u57CE"}, {
                key: "army",
                label: "\u519B\u961F"
            }, {key: "faction", label: "\u52BF\u529B"}], s = Oe("hero");
            Ge(n, i => {
                i || (s.value = "hero")
            });
            let o = {
                state: n,
                tabs: r,
                activeTab: s,
                ArmyPanel: al,
                FactionPanel: ll,
                HeroPanel: gl,
                NpcPanel: hl,
                QuestPanel: ml,
                ShopPanel: _l
            };
            return Object.defineProperty(o, "__isScriptSetup", {enumerable: !1, value: !0}), o
        }
    }), Kg = {class: "tk-vue-card tk-vue-status tk-statusbar"}, Wg = {key: 0, class: "tk-panel-shell"},
    zg = {class: "tk-panel-tabs"}, Gg = ["onClick"], Yg = {class: "tk-panel-pages"},
    qg = {key: 0, class: "tk-panel-page is-hero"}, Jg = {key: 1, class: "tk-panel-page is-npc"},
    Xg = {key: 2, class: "tk-panel-page is-quest"}, Qg = {key: 3, class: "tk-panel-page is-shop"},
    Zg = {key: 4, class: "tk-panel-page is-army"}, eh = {key: 5, class: "tk-panel-page is-faction"},
    th = {key: 1, class: "tk-vue-empty"};

function nh(e, t, n, r, s, o) {
    return k(), N("section", Kg, [r.state ? (k(), N("div", Wg, [p("div", zg, [(k(), N(j, null, ne(r.tabs, i => p("button", {
        key: i.key,
        type: "button",
        class: me(["tk-panel-tab-label", {"is-active": r.activeTab === i.key}]),
        onClick: a => r.activeTab = i.key
    }, S(i.label), 11, Gg)), 64))]), p("div", Yg, [r.activeTab === "hero" ? (k(), N("div", qg, [ce(r.HeroPanel, {state: r.state}, null, 8, ["state"])])) : r.activeTab === "npc" ? (k(), N("div", Jg, [ce(r.NpcPanel, {state: r.state}, null, 8, ["state"])])) : r.activeTab === "quest" ? (k(), N("div", Xg, [ce(r.QuestPanel, {state: r.state}, null, 8, ["state"])])) : r.activeTab === "shop" ? (k(), N("div", Qg, [ce(r.ShopPanel, {state: r.state}, null, 8, ["state"])])) : r.activeTab === "army" ? (k(), N("div", Zg, [ce(r.ArmyPanel, {state: r.state}, null, 8, ["state"])])) : (k(), N("div", eh, [ce(r.FactionPanel, {state: r.state}, null, 8, ["state"])]))])])) : (k(), N("div", th, "\u5F53\u524D\u6CA1\u6709\u72B6\u6001\u6570\u636E"))])
}

var yl = pe(jg, [["render", nh], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\StatusBarPanel.vue"]]);
var rh = ue({
        __name: "UnifiedPanel", setup(e, {expose: t}) {
            t();
            let n = Oe(null), r = $(() => B.systemPanel.visible), s = Oe({width: 960, height: 640}), o = $(() => {
                let b = B.systemPanel.state;
                return b ? [b.\u4E16\u754C.\u5F53\u524D\u65F6\u95F4 || "\u672A\u77E5\u65F6\u523B", b.\u4E16\u754C.\u5F53\u524D\u5730\u70B9 || "\u672A\u77E5\u5730\u70B9", b.\u4E16\u754C.\u5929\u6C14 || "\u672A\u77E5\u5929\u6C14", b.\u4E16\u754C.\u5F53\u524D\u5267\u672C || "\u672A\u77E5\u5267\u672C"].join(" \xB7 ") : ""
            }), i = $(() => {
                let b = B.systemPanel.position;
                if (b.mode === "default") {
                    let A = (typeof document < "u" ? Le() : null)?.defaultView ?? (typeof window < "u" ? window : null),
                        V = A ? tl(s.value.width, s.value.height, A.innerWidth, A.innerHeight) : {left: 24, top: 24};
                    return {
                        position: "fixed",
                        left: `${V.left}px`,
                        top: `${V.top}px`,
                        width: "min(1080px,calc(100vw - 24px))"
                    }
                }
                return {position: "fixed", left: `${b.left}px`, top: `${b.top}px`, width: "min(1080px,calc(100vw - 24px))"}
            });

            function a() {
                B.systemPanel.position.mode !== "default" || !r.value || Zt(() => {
                    let b = n.value;
                    if (!b) return;
                    let O = b.getBoundingClientRect();
                    s.value = {width: O.width, height: O.height}
                })
            }

            let c = b => {
                let A = b.currentTarget?.closest(".tk-vue-panel-shell");
                if (!A) return;
                let re = Le().defaultView ?? window;
                if (B.systemPanel.position.mode === "default") {
                    let G = A.getBoundingClientRect();
                    po(G.left, G.top)
                }
                $r({event: b, panel: A, win: re, onMovePosition: G => po(G.left, G.top)})
            }, d = () => {
                ol(), a()
            }, f = () => {
                Lr(!1)
            };
            Ge([r, () => B.systemPanel.position.mode], () => {
                a()
            }, {immediate: !0});
            let g = {
                panelRef: n,
                visible: r,
                measuredSize: s,
                worldSummary: o,
                panelStyle: i,
                \u66F4\u65B0\u9ED8\u8BA4\u4F4D\u7F6E: a,
                handleDragStart: c,
                handleResetPosition: d,
                handleClose: f,
                StatusBarPanel: yl
            };
            return Object.defineProperty(g, "__isScriptSetup", {enumerable: !1, value: !0}), g
        }
    }), sh = {class: "tk-vue-panel-subtitle"}, oh = {class: "tk-vue-head-actions"},
    ih = {class: "tk-vue-panel-content is-system-panel"};

function ah(e, t, n, r, s, o) {
    return k(), N("div", {
        ref: "panelRef",
        class: me(["tk-vue-panel-shell", r.visible ? "is-visible" : "is-hidden"]),
        style: Ce(r.panelStyle)
    }, [p("div", {
        class: "tk-vue-panel-head tk-vue-drag-handle",
        onPointerdown: r.handleDragStart
    }, [p("div", null, [t[0] || (t[0] = p("div", {class: "tk-vue-panel-title"}, "\u7CFB\u7EDF\u754C\u9762", -1)), p("div", sh, [r.worldSummary ? (k(), N(j, {key: 0}, [Rr(S(r.worldSummary), 1)], 64)) : (k(), N(j, {key: 1}, [Rr("\u5F53\u524D\u6CA1\u6709\u53EF\u663E\u793A\u7684\u7CFB\u7EDF\u6570\u636E")], 64))])]), p("div", oh, [p("button", {
        type: "button",
        class: "tk-vue-head-btn",
        onClick: en(r.handleResetPosition, ["stop"])
    }, "\u91CD\u7F6E\u4F4D\u7F6E"), p("button", {
        type: "button",
        class: "tk-vue-head-btn",
        onClick: en(r.handleClose, ["stop"])
    }, "\u5173\u95ED")])], 32), p("div", ih, [ce(r.StatusBarPanel)])], 6)
}

var bl = pe(rh, [["render", ah], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\views\\UnifiedPanel.vue"]]);
var lh = ue({
        __name: "PlayerOptionsPanel", setup(e, {expose: t}) {
            t();
            let s = {
                options: $(() => B.playerOptionsPanel.options), handleOptionClick: o => {
                    B.playerOptionsPanel.latestMessageId != null && Ur(B.playerOptionsPanel.latestMessageId, o)
                }
            };
            return Object.defineProperty(s, "__isScriptSetup", {enumerable: !1, value: !0}), s
        }
    }), ch = {class: "tk-vue-card tk-vue-options"}, uh = {key: 0, class: "tk-vue-options-list"}, fh = ["onClick"],
    ph = {key: 1, class: "tk-vue-empty"};

function dh(e, t, n, r, s, o) {
    return k(), N("section", ch, [t[0] || (t[0] = p("div", {class: "tk-vue-card-title"}, "\u53EF\u9009\u884C\u52A8", -1)), r.options.length > 0 ? (k(), N("div", uh, [(k(!0), N(j, null, ne(r.options, (i, a) => (k(), N("button", {
        key: `${i.text}-${a}`,
        type: "button",
        class: "tk-vue-option-btn",
        onClick: c => r.handleOptionClick(i.text)
    }, S(i.text), 9, fh))), 128))])) : (k(), N("div", ph, "\u5F53\u524D\u6CA1\u6709\u53EF\u9009\u884C\u52A8"))])
}

var vl = pe(lh, [["render", dh], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\components\\PlayerOptionsPanel.vue"]]);
var gh = ue({
    __name: "PlayerOptionsFloatingPanel", setup(e, {expose: t}) {
        t();
        let n = Oe(null), r = $(() => B.playerOptionsPanel.visible), s = Oe({width: 420, height: 220}), o = $(() => {
            let b = B.playerOptionsPanel.position;
            if (b.mode === "default") {
                let A = (typeof document < "u" ? Le() : null)?.defaultView ?? (typeof window < "u" ? window : null),
                    V = i(),
                    re = A ? nl(V?.getBoundingClientRect() ?? null, s.value.width, s.value.height, A.innerWidth, A.innerHeight) : {
                        left: 24,
                        top: 24
                    };
                return {
                    position: "fixed",
                    left: `${re.left}px`,
                    top: `${re.top}px`,
                    width: "min(420px,calc(100vw - 24px))"
                }
            }
            return {position: "fixed", left: `${b.left}px`, top: `${b.top}px`, width: "min(420px,calc(100vw - 24px))"}
        });

        function i() {
            let b = Le(),
                O = ["#send_textarea", "#send_textarea textarea", 'textarea[name="send_textarea"]', 'textarea[id="send_textarea"]', '[contenteditable="true"]', '[contenteditable="plaintext-only"]', ".ProseMirror", "form textarea", "textarea", 'input[type="text"]'];
            for (let A of O) {
                let V = b.querySelector(A);
                if (V instanceof HTMLElement) return V
            }
            return null
        }

        function a() {
            B.playerOptionsPanel.position.mode !== "default" || !r.value || Zt(() => {
                let b = n.value;
                if (!b) return;
                let O = b.getBoundingClientRect();
                s.value = {width: O.width, height: O.height}
            })
        }

        let c = b => {
            let A = b.currentTarget?.closest(".tk-vue-floating-options");
            if (!A) return;
            let re = Le().defaultView ?? window;
            if (B.playerOptionsPanel.position.mode === "default") {
                let G = A.getBoundingClientRect();
                go(G.left, G.top)
            }
            $r({event: b, panel: A, win: re, onMovePosition: G => go(G.left, G.top)})
        }, d = () => {
            il(), a()
        }, f = () => {
            Hr(!1)
        };
        Ge([r, () => B.playerOptionsPanel.options.length, () => B.playerOptionsPanel.position.mode], () => {
            a()
        }, {immediate: !0});
        let g = {
            panelRef: n,
            visible: r,
            measuredSize: s,
            panelStyle: o,
            \u67E5\u627E\u8F93\u5165\u6846\u5143\u7D20: i,
            \u66F4\u65B0\u9ED8\u8BA4\u4F4D\u7F6E: a,
            handleDragStart: c,
            handleResetPosition: d,
            handleClose: f,
            PlayerOptionsPanel: vl
        };
        return Object.defineProperty(g, "__isScriptSetup", {enumerable: !1, value: !0}), g
    }
}), hh = {class: "tk-vue-head-actions"};

function mh(e, t, n, r, s, o) {
    return k(), N("div", {
        ref: "panelRef",
        class: me(["tk-vue-floating-options", r.visible ? "is-visible" : "is-hidden"]),
        style: Ce(r.panelStyle)
    }, [p("div", {
        class: "tk-vue-floating-head tk-vue-drag-handle",
        onPointerdown: r.handleDragStart
    }, [t[0] || (t[0] = p("div", null, [p("div", {class: "tk-vue-panel-title"}, "\u53EF\u9009\u884C\u52A8"), p("div", {class: "tk-vue-panel-subtitle"}, "\u5F53\u524D\u6700\u65B0 AI \u56DE\u590D\u53EF\u9009\u9879")], -1)), p("div", hh, [p("button", {
        type: "button",
        class: "tk-vue-head-btn",
        onClick: en(r.handleResetPosition, ["stop"])
    }, "\u91CD\u7F6E\u4F4D\u7F6E"), p("button", {
        type: "button",
        class: "tk-vue-head-btn",
        onClick: en(r.handleClose, ["stop"])
    }, "\u5173\u95ED")])], 32), ce(r.PlayerOptionsPanel)], 6)
}

var El = pe(gh, [["render", mh], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\views\\PlayerOptionsFloatingPanel.vue"]]);
var _h = ue({
    __name: "SystemUiRoot", setup(e, {expose: t}) {
        t();
        let n = {UnifiedPanel: bl, PlayerOptionsFloatingPanel: El};
        return Object.defineProperty(n, "__isScriptSetup", {enumerable: !1, value: !0}), n
    }
}), yh = {class: "tk-vue-root-shell"};

function bh(e, t, n, r, s, o) {
    return k(), N("div", yh, [ce(r.UnifiedPanel), ce(r.PlayerOptionsFloatingPanel)])
}

var xl = pe(_h, [["render", bh], ["__file", "D:\\GitProjects\\ThreeKingdomsStateKit\\src\\ui\\SystemUiRoot.vue"]]);
var mo = "tk-vue-root", _o = "tk-vue-root-style",
    kl = '#tk-vue-root{position:fixed;inset:0;z-index:2147483200;font-family:"Microsoft YaHei",serif;pointer-events:none}#tk-vue-root *{box-sizing:border-box}#tk-vue-root .tk-vue-panel-shell{position:fixed;width:min(1080px,calc(100vw - 24px));border:1px solid rgba(196,154,92,.36);border-radius:18px;background:linear-gradient(180deg,rgba(41,25,17,.96),rgba(12,10,10,.98));box-shadow:0 16px 36px rgba(0,0,0,.35);overflow:hidden;color:#f3e3c3;pointer-events:auto}#tk-vue-root .tk-vue-floating-options{position:fixed;width:min(420px,calc(100vw - 24px));border:1px solid rgba(196,154,92,.36);border-radius:18px;background:linear-gradient(180deg,rgba(41,25,17,.96),rgba(12,10,10,.98));box-shadow:0 16px 36px rgba(0,0,0,.35);overflow:hidden;color:#f3e3c3;pointer-events:auto}#tk-vue-root .tk-vue-panel-shell.is-hidden,#tk-vue-root .tk-vue-floating-options.is-hidden{display:none}#tk-vue-root .tk-vue-panel-head,#tk-vue-root .tk-vue-floating-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:14px 16px;border-bottom:1px solid rgba(196,154,92,.22);background:rgba(255,255,255,.03);cursor:move}#tk-vue-root .tk-vue-panel-title{font-size:18px;font-weight:700;color:#f6d9a2;letter-spacing:1px}#tk-vue-root .tk-vue-panel-subtitle{margin-top:4px;font-size:12px;color:#cfb78d}#tk-vue-root .tk-vue-head-actions{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:8px}#tk-vue-root .tk-vue-head-btn{appearance:none;border:1px solid rgba(220,181,119,.28);border-radius:999px;padding:6px 10px;background:rgba(255,255,255,.04);color:#dcc59c;cursor:pointer;font-size:12px}#tk-vue-root .tk-vue-panel-content{display:grid;grid-template-columns:minmax(0,1fr);gap:14px;padding:14px}#tk-vue-root .tk-vue-panel-content.is-system-panel{grid-template-columns:minmax(0,1fr)}#tk-vue-root .tk-vue-card{border:1px solid rgba(196,154,92,.22);border-radius:14px;background:rgba(255,248,232,.03);padding:14px}#tk-vue-root .tk-vue-card-title{margin-bottom:10px;font-size:13px;font-weight:700;color:#f0c983;letter-spacing:1px}#tk-vue-root .tk-vue-options-list{display:flex;flex-direction:column;gap:10px}#tk-vue-root .tk-vue-option-btn{appearance:none;border:1px solid rgba(220,181,119,.34);border-radius:12px;padding:10px 12px;background:linear-gradient(180deg,rgba(123,77,38,.42),rgba(74,45,24,.36));color:#fff0d0;cursor:pointer;font-size:13px;line-height:1.45;text-align:left;transition:.18s box-shadow,.18s transform,.18s background,.18s border-color}#tk-vue-root .tk-vue-option-btn:hover{transform:translateY(-1px);background:linear-gradient(180deg,rgba(149,96,47,.56),rgba(88,53,28,.46));border-color:rgba(255,222,160,.68);box-shadow:0 8px 18px rgba(0,0,0,.18)}#tk-vue-root .tk-vue-empty{padding:14px;color:#bda681;font-size:12px;text-align:center}#tk-vue-root .tk-statusbar{margin-top:0;border:1px solid rgba(196,154,92,.45);border-radius:14px;overflow:hidden;background:linear-gradient(180deg,rgba(37,24,17,.96),rgba(15,12,10,.96));box-shadow:0 12px 32px rgba(0,0,0,.35);color:#f3e3c3;font-family:"Microsoft YaHei",serif}#tk-vue-root .tk-statusbar *{box-sizing:border-box}#tk-vue-root .tk-statusbar .tk-panel-shell{position:relative}#tk-vue-root .tk-statusbar .tk-panel-head{padding:14px 16px;border-bottom:1px solid rgba(196,154,92,.28);background:linear-gradient(180deg,rgba(122,63,30,.35),rgba(54,30,18,.15))}#tk-vue-root .tk-statusbar .tk-panel-title{font-size:18px;font-weight:700;letter-spacing:2px;color:#f6d9a2}#tk-vue-root .tk-statusbar .tk-panel-subtitle{margin-top:6px;font-size:12px;color:#d8bf93;display:flex;flex-wrap:wrap;gap:10px}#tk-vue-root .tk-statusbar .tk-panel-tabs{display:flex;flex-wrap:wrap;gap:8px;padding:12px 14px;border-bottom:1px solid rgba(196,154,92,.22);background:rgba(255,255,255,.02)}#tk-vue-root .tk-statusbar .tk-panel-tab-label{padding:8px 14px;border:1px solid rgba(196,154,92,.28);border-radius:999px;background:rgba(255,255,255,.04);color:#dcc59c;cursor:pointer;transition:.2s;font-size:12px}#tk-vue-root .tk-statusbar .tk-panel-tab-label:hover,#tk-vue-root .tk-statusbar .tk-panel-tab-label.is-active{background:linear-gradient(180deg,#a76b2e,#7a4a1f);color:#fff5e6;border-color:rgba(255,216,158,.8);box-shadow:0 0 0 1px rgba(255,240,212,.12) inset}#tk-vue-root .tk-statusbar .tk-panel-pages{padding:14px}#tk-vue-root .tk-statusbar .tk-panel-page-grid{display:grid;gap:12px}#tk-vue-root .tk-statusbar .tk-panel-page-grid.cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}#tk-vue-root .tk-statusbar .tk-subtabs{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px}#tk-vue-root .tk-statusbar .tk-subtab-label{padding:6px 12px;border:1px solid rgba(196,154,92,.22);border-radius:999px;background:rgba(255,255,255,.03);color:#d6bb91;cursor:pointer;font-size:12px;transition:.2s}#tk-vue-root .tk-statusbar .tk-subtab-label:hover,#tk-vue-root .tk-statusbar .tk-subtab-label.is-active{background:linear-gradient(180deg,#8d5a27,#653717);color:#fff5e6;border-color:rgba(255,216,158,.72)}#tk-vue-root .tk-statusbar .cols-span-2{grid-column:span 2}#tk-vue-root .tk-statusbar .tk-panel-card{padding:14px;border:1px solid rgba(196,154,92,.22);border-radius:12px;background:rgba(255,248,232,.03)}#tk-vue-root .tk-statusbar .tk-panel-card-title{margin-bottom:10px;font-size:13px;font-weight:700;color:#f0c983;letter-spacing:1px}#tk-vue-root .tk-statusbar .tk-panel-kv-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}#tk-vue-root .tk-statusbar .tk-panel-kv-grid.compact{grid-template-columns:repeat(3,minmax(0,1fr))}#tk-vue-root .tk-statusbar .tk-panel-kv{padding:8px 10px;border-radius:10px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.05)}#tk-vue-root .tk-statusbar .tk-panel-kv.is-accent{background:rgba(167,107,46,.18);border-color:rgba(240,201,131,.26)}#tk-vue-root .tk-statusbar .tk-panel-k{display:block;font-size:11px;color:#cba977}#tk-vue-root .tk-statusbar .tk-panel-v{display:block;margin-top:4px;font-size:13px;color:#fff1d0}#tk-vue-root .tk-statusbar .tk-panel-inline-note{margin-top:10px;font-size:12px;color:#d6c4a4}#tk-vue-root .tk-statusbar .tk-panel-list,#tk-vue-root .tk-statusbar .tk-panel-detail-list{display:flex;flex-direction:column;gap:8px}#tk-vue-root .tk-statusbar .tk-panel-list-item{padding:10px 12px;border-radius:10px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.05)}#tk-vue-root .tk-statusbar .tk-panel-list-title{font-size:13px;font-weight:700;color:#f6dfb5}#tk-vue-root .tk-statusbar .tk-panel-list-meta{margin-top:4px;font-size:11px;color:#d6bb91}#tk-vue-root .tk-statusbar .tk-panel-list-desc{margin-top:6px;font-size:12px;color:#f2eadc;opacity:.88;white-space:pre-line}#tk-vue-root .tk-statusbar .tk-panel-detail{border:1px solid rgba(255,255,255,.06);border-radius:10px;background:rgba(255,255,255,.03);overflow:hidden}#tk-vue-root .tk-statusbar .tk-panel-detail summary{display:flex;justify-content:space-between;gap:12px;cursor:pointer;list-style:none;padding:10px 12px;color:#f6dfb5;font-size:13px}#tk-vue-root .tk-statusbar .tk-panel-detail summary::-webkit-details-marker{display:none}#tk-vue-root .tk-statusbar .tk-panel-detail-body{padding:0 12px 12px}#tk-vue-root .tk-statusbar .tk-panel-empty{padding:18px 12px;text-align:center;color:#bda681;font-size:12px}#tk-vue-root .tk-statusbar .tk-radar-wrap{display:block;margin-bottom:12px;padding-bottom:6px}#tk-vue-root .tk-statusbar .tk-radar{width:220px;height:236px;display:block;margin:0 auto;overflow:visible}#tk-vue-root .tk-statusbar .tk-radar-ring,#tk-vue-root .tk-statusbar .tk-radar-axis{fill:none;stroke:rgba(240,201,131,.18);stroke-width:1}#tk-vue-root .tk-statusbar .tk-radar-shape{fill:rgba(167,107,46,.28);stroke:#f0c983;stroke-width:2}#tk-vue-root .tk-statusbar .tk-radar-dot{fill:#f6dfb5}#tk-vue-root .tk-statusbar .tk-radar-label{fill:#d8bf93;font-size:11px}#tk-vue-root .tk-statusbar .tk-panel-bar-row{display:grid;grid-template-columns:56px 1fr auto;gap:8px;align-items:center;margin-bottom:8px}#tk-vue-root .tk-statusbar .tk-panel-bar-label,#tk-vue-root .tk-statusbar .tk-panel-bar-value{font-size:11px;color:#d8bf93}#tk-vue-root .tk-statusbar .tk-panel-bar{height:9px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}#tk-vue-root .tk-statusbar .tk-panel-bar-fill{display:block;height:100%}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-hp{background:linear-gradient(90deg,#7f1d1d,#dc2626)}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-sp{background:linear-gradient(90deg,#0f3d73,#3b82f6)}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-morale{background:linear-gradient(90deg,#7c5c12,#f59e0b)}#tk-vue-root .tk-statusbar .tk-panel-bar-fill.is-fatigue{background:linear-gradient(90deg,#3f3f46,#a1a1aa)}@media (max-width:900px){#tk-vue-root .tk-vue-panel-content{grid-template-columns:1fr}}@media (max-width:720px){#tk-vue-root .tk-statusbar .tk-panel-page-grid.cols-2,#tk-vue-root .tk-statusbar .tk-panel-kv-grid,#tk-vue-root .tk-statusbar .tk-panel-kv-grid.compact{grid-template-columns:1fr}#tk-vue-root .tk-statusbar .cols-span-2{grid-column:span 1}#tk-vue-root .tk-statusbar .tk-radar{width:180px;height:180px}}',
    tn = null;

function vh(e) {
    let t = e.getElementById(_o);
    t instanceof HTMLStyleElement || (t = e.createElement("style"), t.id = _o, e.head.appendChild(t)), t.textContent !== kl && (t.textContent = kl)
}

function Eh() {
    let e;
    try {
        e = Le()
    } catch {
        return null
    }
    vh(e);
    let t = e.getElementById(mo);
    return t instanceof HTMLElement || (t = e.createElement("div"), t.id = mo, e.body.appendChild(t)), t
}

function Nl() {
    if (tn) return !0;
    let e = Eh();
    return e ? (tn = el(xl), tn.mount(e), !0) : !1
}

function yo() {
    if (tn) {
        tn.unmount(), tn = null;
        try {
            let e = Le();
            e.getElementById(mo)?.remove(), e.getElementById(_o)?.remove()
        } catch {
        }
    }
}

var Un = null, Bn = null, jn = null, Kn = null, Wn = null, zn = null, Gn = null, Yn = null,
    qn = {chatId: null, messageId: null, message: ""}, nn = Br(), vo = !1;

function Ye() {
    let e = globalThis, t = typeof window < "u" ? window : void 0;
    return {
        eventOn: e.eventOn ?? t?.eventOn,
        eventRemoveListener: e.eventRemoveListener ?? t?.eventRemoveListener,
        getButtonEvent: e.getButtonEvent ?? t?.getButtonEvent,
        tavern_events: e.tavern_events ?? t?.tavern_events,
        getChatMessages: e.getChatMessages ?? t?.getChatMessages,
        executeSlashCommandsWithOptions: e.executeSlashCommandsWithOptions ?? t?.executeSlashCommandsWithOptions,
        triggerSlash: e.triggerSlash ?? t?.triggerSlash,
        TavernHelper: e.TavernHelper ?? t?.TavernHelper
    }
}

function Eo() {
    let e = Ye();
    return e.getChatMessages ?? e.TavernHelper?.getChatMessages
}

function Ol() {
    let e = globalThis, t = typeof window < "u" ? window : void 0, n = e.SillyTavern ?? t?.SillyTavern,
        r = typeof n?.getCurrentChatId == "function" ? n.getCurrentChatId() : n?.chatId;
    return r ? String(r) : null
}

function Br() {
    let e = globalThis, t = typeof window < "u" ? window : void 0, n = e.SillyTavern ?? t?.SillyTavern;
    return n?.characterId ? String(n.characterId) : null
}

function xh() {
    let e = Ye(), t = e.triggerSlash ?? e.TavernHelper?.triggerSlash,
        n = e.executeSlashCommandsWithOptions ?? e.TavernHelper?.executeSlashCommandsWithOptions;
    return m("runtime", "\u68C0\u67E5 slash \u6267\u884C\u5668", {
        hasDirectTriggerSlash: typeof e.triggerSlash == "function",
        hasTavernHelperTriggerSlash: typeof e.TavernHelper?.triggerSlash == "function",
        hasDirectExecutor: typeof e.executeSlashCommandsWithOptions == "function",
        hasTavernHelperExecutor: typeof e.TavernHelper?.executeSlashCommandsWithOptions == "function",
        preferred: typeof t == "function" ? "triggerSlash" : typeof n == "function" ? "executeSlashCommandsWithOptions" : "none"
    }), {triggerSlash: t, executeSlashCommandsWithOptions: n}
}

function wl() {
    let e = globalThis, t = typeof window < "u" ? window : void 0;
    return e.toastr ?? t?.toastr
}

function kh(e) {
    let t = `\u5DF2${e ? "\u5F00\u542F" : "\u5173\u95ED"} log/info \u65E5\u5FD7\u6253\u5370`, n = wl();
    if (typeof n?.success == "function") {
        n.success(t);
        return
    }
    console.log("[ThreeKingdomsStateKit][debug]", t)
}

function bo(e, t = "success") {
    let n = wl();
    if (t === "warning" && typeof n?.warning == "function") {
        n.warning(e);
        return
    }
    if (t === "success" && typeof n?.success == "function") {
        n.success(e);
        return
    }
    console.log("[ThreeKingdomsStateKit][player-options]", e)
}

function Sl(e) {
    let t = Eo();
    if (typeof t != "function") return m("runtime", "\u672A\u627E\u5230 getChatMessages\uFF0C\u65E0\u6CD5\u8BFB\u53D6\u6307\u5B9A\u6D88\u606F", {messageId: e}), null;
    let n = t(e, {include_swipes: !1}) ?? [], r = Array.isArray(n) ? n[0] ?? null : null;
    return m("runtime", "\u8BFB\u53D6\u6307\u5B9A\u6D88\u606F\u5B8C\u6210", {messageId: e, message: J(r)}), r
}

function Nh() {
    let e = Eo();
    if (typeof e != "function") return m("runtime", "\u672A\u627E\u5230 getChatMessages\uFF0C\u65E0\u6CD5\u8BFB\u53D6\u6700\u65B0\u6D88\u606F"), null;
    let t = e("0-{{lastMessageId}}", {include_swipes: !1}) ?? [];
    for (let n = t.length - 1; n >= 0; n -= 1) {
        let r = t[n];
        if (r) return m("runtime", "\u8BFB\u53D6\u6700\u65B0\u6D88\u606F\u5B8C\u6210", {
            messageId: r.message_id ?? null,
            role: r.role ?? null
        }), r
    }
    return m("runtime", "\u672A\u627E\u5230\u6700\u65B0\u6D88\u606F"), null
}

function Oh() {
    let e = Eo();
    if (typeof e != "function") return m("runtime", "\u672A\u627E\u5230 getChatMessages\uFF0C\u65E0\u6CD5\u8BFB\u53D6\u6700\u65B0 assistant \u6D88\u606F"), null;
    let t = e("0-{{lastMessageId}}", {include_swipes: !1}) ?? [];
    for (let n = t.length - 1; n >= 0; n -= 1) {
        let r = t[n];
        if (r?.role === "assistant") return m("runtime", "\u8BFB\u53D6\u6700\u65B0 assistant \u6D88\u606F\u5B8C\u6210", {messageId: r.message_id ?? null}), r
    }
    return m("runtime", "\u672A\u627E\u5230\u6700\u65B0 assistant \u6D88\u606F"), null
}

function xo(e) {
    let t = Nh();
    if (!t || t.role !== "assistant" || typeof t.message_id != "number") return fo({
        messageId: typeof t?.message_id == "number" ? t.message_id : B.playerOptionsPanel.latestMessageId ?? -1,
        options: []
    }), Hr(!1), m("runtime", "\u6700\u65B0\u697C\u5C42\u4E0D\u662F\u53EF\u5C55\u793A\u9009\u9879\u7684 assistant\uFF0C\u5DF2\u5173\u95ED\u73A9\u5BB6\u9009\u9879\u7A97", {
        reason: e,
        latestMessageId: t?.message_id ?? null,
        latestRole: t?.role ?? null
    }), !1;
    let n = Ft(String(t.message || ""));
    return fo({
        messageId: t.message_id,
        options: n
    }), m("runtime", "\u5DF2\u6309\u6700\u65B0\u697C\u5C42\u5237\u65B0\u73A9\u5BB6\u9009\u9879\u7A97", {
        reason: e,
        latestMessageId: t.message_id,
        playerOptionsCount: n.length
    }), n.length > 0
}

function wh(e) {
    let t = Oh(), n = typeof t?.message_id == "number" && t.message_id === e;
    return m("runtime", "\u6821\u9A8C\u73A9\u5BB6\u9009\u9879\u697C\u5C42\u662F\u5426\u6700\u65B0", {
        messageId: e,
        latestAssistantMessageId: t?.message_id ?? null,
        isLatest: n
    }), n
}

function Sh(e) {
    let t = String(e || "").trim().replace(/^（|）$/g, "");
    return t ? `\uFF08${t}\uFF09` : ""
}

function Ch() {
    let e;
    try {
        e = Le()
    } catch {
        return null
    }
    let t = ["#send_textarea", "#send_textarea textarea", 'textarea[name="send_textarea"]', 'textarea[id="send_textarea"]', 'textarea[data-testid="send_textarea"]', '[contenteditable="true"]', '[contenteditable="plaintext-only"]', ".ProseMirror", "form textarea", "textarea", 'input[type="text"]'];
    for (let r of t) {
        let s = e.querySelector(r);
        if (s instanceof HTMLTextAreaElement || s instanceof HTMLInputElement || s instanceof HTMLElement && s.isContentEditable) return s
    }
    let n = e.activeElement;
    return n instanceof HTMLTextAreaElement || n instanceof HTMLInputElement || n instanceof HTMLElement && n.isContentEditable ? n : null
}

function Th(e, t) {
    let n = e instanceof HTMLTextAreaElement ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype,
        r = Object.getOwnPropertyDescriptor(n, "value");
    if (r?.set) {
        r.set.call(e, t);
        return
    }
    e.value = t
}

function Ph(e, t) {
    e.textContent = t;
    let n = typeof window < "u" ? window.getSelection?.() : null, r = null;
    try {
        r = Le().createRange()
    } catch {
        r = null
    }
    !n || !r || (r.selectNodeContents(e), r.collapse(!1), n.removeAllRanges(), n.addRange(r))
}

async function Dh(e) {
    let t = `/setinput ${JSON.stringify(e)}`;
    return await $h(t) ? (se("runtime", "\u5DF2\u901A\u8FC7 slash /setinput \u586B\u5145\u8F93\u5165\u6846", {text: J(e)}), !0) : !1
}

function Ah(e) {
    let t = Ch();
    if (!t) return fe("runtime", "\u672A\u627E\u5230\u53EF\u586B\u5145\u7684\u8F93\u5165\u6846"), !1;
    if (t.focus(), t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement) Th(t, e); else if (t instanceof HTMLElement && t.isContentEditable) Ph(t, e); else return fe("runtime", "\u627E\u5230\u7684\u8F93\u5165\u76EE\u6807\u4E0D\u652F\u6301\u586B\u5145", {tagName: t.tagName ?? null}), !1;
    return t.dispatchEvent(new Event("input", {bubbles: !0})), t.dispatchEvent(new Event("change", {bubbles: !0})), se("runtime", "\u5DF2\u901A\u8FC7 DOM \u586B\u5145\u7528\u6237\u8F93\u5165\u6846", {
        tagName: t.tagName,
        isContentEditable: t instanceof HTMLElement ? t.isContentEditable : !1,
        text: J(e)
    }), !0
}

async function Vh(e) {
    return await Dh(e) ? !0 : Ah(e)
}

function Rh(e) {
    let t = Ol(), n = typeof e.message_id == "number" ? e.message_id : null, r = String(e.message || "");
    return qn.chatId === t && qn.messageId === n && qn.message === r
}

function Mh(e) {
    qn = {
        chatId: Ol(),
        messageId: typeof e.message_id == "number" ? e.message_id : null,
        message: String(e.message || "")
    }
}

async function $h(e) {
    let {triggerSlash: t, executeSlashCommandsWithOptions: n} = xh();
    if (typeof t == "function") try {
        return await t(e), m("runtime", "\u901A\u8FC7 triggerSlash \u6267\u884C slash \u547D\u4EE4\u6210\u529F", {command: e}), !0
    } catch (r) {
        return fe("runtime", "\u901A\u8FC7 triggerSlash \u6267\u884C slash \u547D\u4EE4\u5F02\u5E38", {
            command: e,
            error: r
        }), !1
    }
    if (typeof n == "function") try {
        let r = await n(e, {handleExecutionErrors: !0});
        return r?.isError ? (fe("runtime", "\u901A\u8FC7 executeSlashCommandsWithOptions \u6267\u884C slash \u547D\u4EE4\u5931\u8D25", {
            command: e,
            errorMessage: r.errorMessage || null
        }), !1) : (m("runtime", "\u901A\u8FC7 executeSlashCommandsWithOptions \u6267\u884C slash \u547D\u4EE4\u6210\u529F", {command: e}), !0)
    } catch (r) {
        return fe("runtime", "\u901A\u8FC7 executeSlashCommandsWithOptions \u6267\u884C slash \u547D\u4EE4\u5F02\u5E38", {
            command: e,
            error: r
        }), !1
    }
    return fe("runtime", "\u672A\u627E\u5230\u53EF\u7528\u7684 slash \u6267\u884C\u5668\uFF0C\u65E0\u6CD5\u6267\u884C\u547D\u4EE4", {command: e}), !1
}

function ko() {
    qn = {chatId: null, messageId: null, message: ""}
}

function No(e) {
    ho(), yo(), vo = !1, m("runtime", "\u5DF2\u9500\u6BC1\u5168\u90E8 Vue \u754C\u9762", {reason: e})
}

function jr(e = "runtime-teardown") {
    m("runtime", "\u5F00\u59CB\u7EDF\u4E00\u9500\u6BC1\u8FD0\u884C\u65F6\u94A9\u5B50\u4E0E Vue \u754C\u9762", {reason: e}), zr(), Xr(), Qr(), Gr(), qr(), Kr(), ts(), ns(), No(e), ko(), nn = Br(), m("runtime", "\u7EDF\u4E00\u9500\u6BC1\u8FD0\u884C\u65F6\u94A9\u5B50\u4E0E Vue \u754C\u9762\u5B8C\u6210", {
        reason: e,
        currentCharacterId: nn
    })
}

function Cl() {
    try {
        return Nl() ? (vo = !0, !0) : (fe("runtime", "Vue \u9762\u677F\u6302\u8F7D\u5931\u8D25\uFF0C\u7EE7\u7EED\u4F7F\u7528\u6B63\u6587\u72B6\u6001\u680F\u515C\u5E95"), !1)
    } catch (e) {
        return fe("runtime", "Vue \u9762\u677F\u6302\u8F7D\u5F02\u5E38\uFF0C\u7EE7\u7EED\u4F7F\u7528\u6B63\u6587\u72B6\u6001\u680F\u515C\u5E95", e), !1
    }
}

function Tl(e, t) {
    if (!Cl()) return !1;
    try {
        return sl({
            messageId: e,
            state: t
        }), xo("sync-vue-panel"), m("runtime", "\u5DF2\u540C\u6B65 Vue \u53CC\u60AC\u6D6E\u7A97\u72B6\u6001", {
            messageId: e,
            playerOptionsCount: B.playerOptionsPanel.options.length
        }), !0
    } catch (n) {
        return fe("runtime", "\u540C\u6B65 Vue \u9762\u677F\u72B6\u6001\u5931\u8D25\uFF0C\u7EE7\u7EED\u4F7F\u7528\u6B63\u6587\u72B6\u6001\u680F\u515C\u5E95", n), !1
    }
}

async function Ur(e, t) {
    if (m("runtime", "\u6536\u5230\u73A9\u5BB6\u9009\u9879\u70B9\u51FB\u8BF7\u6C42", {
        messageId: e,
        optionText: t
    }), !Number.isFinite(e) || !t) return fe("runtime", "\u73A9\u5BB6\u9009\u9879\u70B9\u51FB\u53C2\u6570\u65E0\u6548\uFF0C\u5DF2\u5FFD\u7565", {
        messageId: e,
        optionText: t
    }), !1;
    if (!wh(e)) return bo("\u4EC5\u6700\u65B0\u4E00\u6761 AI \u56DE\u590D\u7684\u9009\u9879\u53EF\u586B\u5165\u8F93\u5165\u680F", "warning"), !1;
    let n = Sh(t);
    return n ? await Vh(n) ? (bo("\u5DF2\u5C06\u9009\u9879\u586B\u5165\u8F93\u5165\u680F\uFF0C\u53EF\u4FEE\u6539\u540E\u624B\u52A8\u53D1\u9001"), !0) : (bo("\u672A\u627E\u5230\u8F93\u5165\u680F\uFF0C\u65E0\u6CD5\u586B\u5145\u9009\u9879", "warning"), !1) : (fe("runtime", "\u73A9\u5BB6\u9009\u9879\u6587\u672C\u4E3A\u7A7A\uFF0C\u5DF2\u5FFD\u7565", {messageId: e}), !1)
}

function xt(e) {
    if (!e) return;
    let t = Ye(), {eventName: n, listener: r, binding: s} = e;
    s?.removeListener?.(), s?.off?.(), s?.unsubscribe?.(), s?.unregister?.(), t.eventRemoveListener?.(n, r)
}

function Kr() {
    if (!zn) return;
    let {eventName: e} = zn;
    xt(zn), zn = null, m("runtime", "\u5DF2\u5378\u8F7D\u89E3\u6790\u547D\u4EE4\u6309\u94AE\u94A9\u5B50", {eventName: e})
}

function Wr(e = "\u89E3\u6790\u547D\u4EE4", t = {}) {
    Kr();
    let n = Ye(), r = n.getButtonEvent?.(e);
    if (!r || typeof n.eventOn != "function") return m("runtime", "\u672A\u627E\u5230\u6309\u94AE\u4E8B\u4EF6\u6216 eventOn\uFF0C\u65E0\u6CD5\u6CE8\u518C\u89E3\u6790\u547D\u4EE4\u6309\u94AE", {
        buttonName: e,
        hasEventOn: typeof n.eventOn == "function",
        eventName: r
    }), !1;
    let s = async () => {
        se("runtime", "\u6536\u5230\u89E3\u6790\u547D\u4EE4\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6", {
            buttonName: e,
            eventName: r
        });
        try {
            let i = Sl(-1);
            if (!i) {
                se("runtime", "\u6309\u94AE\u8C03\u8BD5\u672A\u8BFB\u53D6\u5230\u6700\u65B0\u6D88\u606F\uFF0C\u8DF3\u8FC7\u5904\u7406");
                return
            }
            if (i.role !== "assistant" || typeof i.message_id != "number") {
                se("runtime", "\u6309\u94AE\u8C03\u8BD5\u8BFB\u53D6\u5230\u7684\u6700\u65B0\u6D88\u606F\u4E0D\u662F\u53EF\u5904\u7406 assistant \u6D88\u606F\uFF0C\u8DF3\u8FC7\u5904\u7406", {
                    role: i.role ?? null,
                    messageId: i.message_id ?? null
                });
                return
            }
            let a = await hn(String(i.message || ""), {...t, messageId: i.message_id, refreshMacroOnNoCommands: !1});
            Tl(i.message_id, a.state), se("runtime", "\u6309\u94AE\u89E6\u53D1\u7684 assistant \u6D88\u606F\u5904\u7406\u5B8C\u6210", {
                buttonName: e,
                messageId: i.message_id,
                applied: a.applied.length,
                hasCommandsText: !!a.commandsText,
                playerOptionsCount: B.playerOptionsPanel.options.length
            })
        } catch (i) {
            ye("runtime", "\u6309\u94AE\u89E6\u53D1\u7684 assistant \u6D88\u606F\u5904\u7406\u5931\u8D25", i)
        }
    }, o = n.eventOn(r, s);
    return zn = {
        eventName: r,
        listener: s,
        binding: o ?? void 0
    }, m("runtime", "\u5DF2\u6CE8\u518C\u89E3\u6790\u547D\u4EE4\u6309\u94AE\u94A9\u5B50", {
        buttonName: e,
        eventName: r
    }), !0
}

function zr() {
    if (!Un) return;
    let {eventName: e} = Un;
    xt(Un), Un = null, m("runtime", "\u5DF2\u5378\u8F7D AI \u56DE\u590D\u5B8C\u6210\u94A9\u5B50", {eventName: e})
}

function Gr() {
    if (!Bn) return;
    let {eventName: e} = Bn;
    xt(Bn), Bn = null, m("runtime", "\u5DF2\u5378\u8F7D\u6D88\u606F\u53D1\u9001\u94A9\u5B50", {eventName: e})
}

function Yr() {
    Gr();
    let e = Ye(), t = e.tavern_events?.MESSAGE_SENT;
    if (!t || typeof e.eventOn != "function") return m("runtime", "\u672A\u627E\u5230 tavern_events.MESSAGE_SENT \u6216 eventOn\uFF0C\u65E0\u6CD5\u6CE8\u518C\u6D88\u606F\u53D1\u9001\u94A9\u5B50", {
        hasEventOn: typeof e.eventOn == "function",
        eventName: t
    }), !1;
    let n = s => {
        se("runtime", "\u6536\u5230 MESSAGE_SENT \u4E8B\u4EF6\uFF0C\u51C6\u5907\u6309\u6700\u65B0\u697C\u5C42\u5237\u65B0\u73A9\u5BB6\u9009\u9879\u7A97", {messageId: s ?? null}), xo("message-sent")
    }, r = e.eventOn(t, n);
    return Bn = {
        eventName: t,
        listener: n,
        binding: r ?? void 0
    }, m("runtime", "\u5DF2\u6CE8\u518C\u6D88\u606F\u53D1\u9001\u94A9\u5B50", {eventName: t}), !0
}

function qr() {
    if (!jn) return;
    let {eventName: e} = jn;
    xt(jn), jn = null, m("runtime", "\u5DF2\u5378\u8F7D\u6D88\u606F\u5220\u9664\u94A9\u5B50", {eventName: e})
}

function Jr() {
    qr();
    let e = Ye(), t = e.tavern_events?.MESSAGE_DELETED;
    if (!t || typeof e.eventOn != "function") return m("runtime", "\u672A\u627E\u5230 tavern_events.MESSAGE_DELETED \u6216 eventOn\uFF0C\u65E0\u6CD5\u6CE8\u518C\u6D88\u606F\u5220\u9664\u94A9\u5B50", {
        hasEventOn: typeof e.eventOn == "function",
        eventName: t
    }), !1;
    let n = s => {
        se("runtime", "\u6536\u5230 MESSAGE_DELETED \u4E8B\u4EF6\uFF0C\u51C6\u5907\u6309\u6700\u65B0\u697C\u5C42\u5237\u65B0\u73A9\u5BB6\u9009\u9879\u7A97", {messageId: s ?? null}), xo("message-deleted")
    }, r = e.eventOn(t, n);
    return jn = {
        eventName: t,
        listener: n,
        binding: r ?? void 0
    }, m("runtime", "\u5DF2\u6CE8\u518C\u6D88\u606F\u5220\u9664\u94A9\u5B50", {eventName: t}), !0
}

function Xr() {
    if (!Kn) return;
    let {eventName: e} = Kn;
    xt(Kn), Kn = null, m("runtime", "\u5DF2\u5378\u8F7D\u804A\u5929\u5207\u6362\u94A9\u5B50", {eventName: e})
}

function Qr() {
    if (!Wn) return;
    let {eventName: e} = Wn;
    xt(Wn), Wn = null, m("runtime", "\u5DF2\u5378\u8F7D\u89D2\u8272\u9875\u52A0\u8F7D\u94A9\u5B50", {eventName: e})
}

function Zr() {
    Qr();
    let e = Ye(), t = e.tavern_events?.CHARACTER_PAGE_LOADED;
    if (!t || typeof e.eventOn != "function") return m("runtime", "\u672A\u627E\u5230 tavern_events.CHARACTER_PAGE_LOADED \u6216 eventOn\uFF0C\u65E0\u6CD5\u6CE8\u518C\u89D2\u8272\u9875\u52A0\u8F7D\u94A9\u5B50", {
        hasEventOn: typeof e.eventOn == "function",
        eventName: t
    }), !1;
    let n = () => {
        let s = Br(), o = nn !== null && s !== null && nn !== s;
        se("runtime", "\u6536\u5230 CHARACTER_PAGE_LOADED \u4E8B\u4EF6", {
            previousCharacterId: nn,
            currentCharacterId: s,
            changed: o
        }), o && (No("character-page-loaded"), ko()), nn = s
    }, r = e.eventOn(t, n);
    return Wn = {
        eventName: t,
        listener: n,
        binding: r ?? void 0
    }, m("runtime", "\u5DF2\u6CE8\u518C\u89D2\u8272\u9875\u52A0\u8F7D\u94A9\u5B50", {eventName: t}), !0
}

function es() {
    Xr();
    let e = Ye(), t = e.tavern_events?.CHAT_CHANGED;
    if (!t || typeof e.eventOn != "function") return m("runtime", "\u672A\u627E\u5230 tavern_events.CHAT_CHANGED \u6216 eventOn\uFF0C\u65E0\u6CD5\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50", {
        hasEventOn: typeof e.eventOn == "function",
        eventName: t
    }), !1;
    let n = s => {
        se("runtime", "\u6536\u5230 CHAT_CHANGED \u4E8B\u4EF6\uFF0C\u51C6\u5907\u6E05\u7406\u60AC\u6D6E\u7A97", {
            chatFileName: s ?? null,
            currentCharacterId: Br()
        }), No("chat-changed"), ko()
    }, r = e.eventOn(t, n);
    return Kn = {
        eventName: t,
        listener: n,
        binding: r ?? void 0
    }, m("runtime", "\u5DF2\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50", {eventName: t}), !0
}

function ts() {
    if (!Gn) return;
    let {eventName: e} = Gn;
    xt(Gn), Gn = null, m("runtime", "\u5DF2\u5378\u8F7D\u65E5\u5FD7\u5F00\u5173\u6309\u94AE\u94A9\u5B50", {eventName: e})
}

function ns() {
    if (Yn) {
        let {eventName: e} = Yn;
        xt(Yn), Yn = null, m("runtime", "\u5DF2\u5378\u8F7D Vue \u9762\u677F\u5F00\u5173\u6309\u94AE\u94A9\u5B50", {eventName: e})
    }
    ho(), yo(), vo = !1, m("runtime", "\u5DF2\u5378\u8F7D Vue \u9762\u677F")
}

function Oo() {
    if (!Cl()) return !1;
    let t = !B.systemPanel.visible;
    return Lr(t), m("runtime", t ? "\u5DF2\u663E\u793A\u7CFB\u7EDF\u754C\u9762" : "\u5DF2\u9690\u85CF\u7CFB\u7EDF\u754C\u9762"), t
}

function rs(e = "\u7CFB\u7EDF\u754C\u9762\u5F00\u5173") {
    ns();
    let t = Ye(), n = t.getButtonEvent?.(e);
    if (!n || typeof t.eventOn != "function") return m("runtime", "\u672A\u627E\u5230\u6309\u94AE\u4E8B\u4EF6\u6216 eventOn\uFF0C\u65E0\u6CD5\u6CE8\u518C Vue \u9762\u677F\u5F00\u5173\u6309\u94AE", {
        buttonName: e,
        hasEventOn: typeof t.eventOn == "function",
        eventName: n
    }), !1;
    let r = () => {
        let o = Oo();
        m("runtime", "\u6536\u5230\u7CFB\u7EDF\u754C\u9762\u5F00\u5173\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6", {
            buttonName: e,
            eventName: n,
            visible: o
        })
    }, s = t.eventOn(n, r);
    return Yn = {
        eventName: n,
        listener: r,
        binding: s ?? void 0
    }, m("runtime", "\u5DF2\u6CE8\u518C\u7CFB\u7EDF\u754C\u9762\u5F00\u5173\u6309\u94AE\u94A9\u5B50", {
        buttonName: e,
        eventName: n,
        hasBinding: !!s
    }), !0
}

function ss(e = "\u65E5\u5FD7\u5F00\u5173") {
    ts();
    let t = Ye(), n = t.getButtonEvent?.(e);
    if (!n || typeof t.eventOn != "function") return m("runtime", "\u672A\u627E\u5230\u6309\u94AE\u4E8B\u4EF6\u6216 eventOn\uFF0C\u65E0\u6CD5\u6CE8\u518C\u65E5\u5FD7\u5F00\u5173\u6309\u94AE", {
        buttonName: e,
        hasEventOn: typeof t.eventOn == "function",
        eventName: n
    }), !1;
    let r = () => {
        let o = !nr();
        tr(o), console.log("[ThreeKingdomsStateKit][debug]", `\u65E5\u5FD7\u5F00\u5173\u5DF2${o ? "\u5F00\u542F" : "\u5173\u95ED"}\uFF08info/log ${o ? "\u542F\u7528" : "\u7981\u7528"}\uFF0Cwarning/error \u59CB\u7EC8\u8F93\u51FA\uFF09`), kh(o)
    }, s = t.eventOn(n, r);
    return Gn = {
        eventName: n,
        listener: r,
        binding: s ?? void 0
    }, m("runtime", "\u5DF2\u6CE8\u518C\u65E5\u5FD7\u5F00\u5173\u6309\u94AE\u94A9\u5B50", {
        buttonName: e,
        eventName: n
    }), !0
}

function os(e = {}) {
    zr();
    let t = Ye(), n = t.tavern_events?.MESSAGE_RECEIVED;
    if (!n || typeof t.eventOn != "function") return m("runtime", "\u672A\u627E\u5230 tavern_events.MESSAGE_RECEIVED \u6216 eventOn\uFF0C\u65E0\u6CD5\u81EA\u52A8\u63A5\u5165", {
        hasEventOn: typeof t.eventOn == "function",
        eventName: n
    }), !1;
    let r = async (o, i) => {
        se("runtime", "\u6536\u5230 MESSAGE_RECEIVED \u4E8B\u4EF6", {eventName: n, messageId: o, type: i ?? null});
        try {
            let a = Sl(o);
            if (!a) {
                se("runtime", "\u672A\u8BFB\u53D6\u5230\u76EE\u6807\u6D88\u606F\uFF0C\u8DF3\u8FC7\u5904\u7406", {messageId: o});
                return
            }
            if (a.role !== "assistant") {
                se("runtime", "\u76EE\u6807\u6D88\u606F\u4E0D\u662F assistant\uFF0C\u8DF3\u8FC7\u5904\u7406", {
                    role: a.role ?? null,
                    messageId: a.message_id ?? o
                });
                return
            }
            if (Rh(a)) {
                se("runtime", "\u68C0\u6D4B\u5230\u91CD\u590D assistant \u6D88\u606F\uFF0C\u8DF3\u8FC7\u5904\u7406", {messageId: a.message_id ?? o});
                return
            }
            let c = await hn(String(a.message || ""), {...e, messageId: o, refreshMacroOnNoCommands: !1});
            Mh(a), Tl(a.message_id ?? o, c.state), se("runtime", "assistant \u6D88\u606F\u81EA\u52A8\u5904\u7406\u5B8C\u6210", {
                messageId: a.message_id ?? o,
                applied: c.applied.length,
                hasCommandsText: !!c.commandsText,
                playerOptionsCount: B.playerOptionsPanel.options.length
            })
        } catch (a) {
            ye("runtime", "assistant \u6D88\u606F\u81EA\u52A8\u5904\u7406\u5931\u8D25", a)
        }
    }, s = t.eventOn(n, r);
    return Un = {
        eventName: n,
        listener: r,
        binding: s ?? void 0
    }, m("runtime", "\u5DF2\u6CE8\u518C assistant \u6D88\u606F\u63A5\u6536\u94A9\u5B50", {eventName: n}), !0
}

var Pl = !1;

function Ih() {
    return typeof window > "u" || typeof window.addEventListener != "function" ? (m("runtime-auto", "\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301 pagehide \u76D1\u542C\uFF0C\u5DF2\u8DF3\u8FC7\u6CE8\u518C"), !1) : Pl ? (m("runtime-auto", "pagehide \u76D1\u542C\u5DF2\u6CE8\u518C\uFF0C\u8DF3\u8FC7\u91CD\u590D\u7ED1\u5B9A"), !0) : (window.addEventListener("pagehide", () => {
        m("runtime-auto", "\u6536\u5230 pagehide \u4E8B\u4EF6\uFF0C\u51C6\u5907\u6267\u884C iframe \u9500\u6BC1\u515C\u5E95\u6E05\u7406"), jr("iframe-pagehide")
    }), Pl = !0, m("runtime-auto", "\u5DF2\u6CE8\u518C pagehide \u515C\u5E95\u6E05\u7406\u76D1\u542C"), !0)
}

try {
    os()
} catch (e) {
    fe("runtime-auto", "\u6CE8\u518C AI \u56DE\u590D\u5B8C\u6210\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", e)
}
try {
    es()
} catch (e) {
    fe("runtime-auto", "\u6CE8\u518C\u804A\u5929\u5207\u6362\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", e)
}
try {
    Zr()
} catch (e) {
    fe("runtime-auto", "\u6CE8\u518C\u89D2\u8272\u9875\u52A0\u8F7D\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", e)
}
try {
    Yr()
} catch (e) {
    fe("runtime-auto", "\u6CE8\u518C\u6D88\u606F\u53D1\u9001\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", e)
}
try {
    Jr()
} catch (e) {
    fe("runtime-auto", "\u6CE8\u518C\u6D88\u606F\u5220\u9664\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", e)
}
try {
    Wr("\u89E3\u6790\u547D\u4EE4")
} catch (e) {
    fe("runtime-auto", "\u6CE8\u518C\u201C\u89E3\u6790\u547D\u4EE4\u201D\u6309\u94AE\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", e)
}
try {
    ss("\u65E5\u5FD7\u5F00\u5173")
} catch (e) {
    fe("runtime-auto", "\u6CE8\u518C\u201C\u65E5\u5FD7\u5F00\u5173\u201D\u6309\u94AE\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", e)
}
try {
    rs("\u7CFB\u7EDF\u754C\u9762\u5F00\u5173")
} catch (e) {
    fe("runtime-auto", "\u6CE8\u518C\u201C\u7CFB\u7EDF\u754C\u9762\u5F00\u5173\u201D\u6309\u94AE\u94A9\u5B50\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", e)
}
try {
    Ih()
} catch (e) {
    fe("runtime-auto", "\u6CE8\u518C pagehide \u515C\u5E95\u6E05\u7406\u76D1\u542C\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", e)
}
var wo = {
    \u7ED3\u6784: {
        create\u4E16\u754C: Ct,
        create\u4E3B\u89D2: ln,
        createNPC: wt,
        create\u4EFB\u52A1: St,
        create\u5546\u54C1\u6761\u76EE: Lt,
        create\u52BF\u529B: st,
        create\u52BF\u529B\u96C6\u5408: an,
        create\u57CE\u6C60: mt,
        create\u519B\u961F: It,
        create\u653F\u7B56: on,
        create\u521D\u59CB\u72B6\u6001: cn
    },
    \u534F\u8BAE: {
        \u89E3\u6790\u547D\u4EE4\u5757: rr,
        \u89E3\u6790\u73A9\u5BB6\u9009\u9879\u5757: Ft,
        \u79FB\u9664\u547D\u4EE4\u534F\u8BAE\u5757: sr,
        \u79FB\u9664\u73A9\u5BB6\u9009\u9879\u5757: ii,
        \u5305\u88C5\u547D\u4EE4\u5757: oi
    },
    handleAssistantReply: hn,
    setupAssistantReplyHook: os,
    teardownAssistantReplyHook: zr,
    setupMessageSentHook: Yr,
    teardownMessageSentHook: Gr,
    setupMessageDeletedHook: Jr,
    teardownMessageDeletedHook: qr,
    setupChatChangedHook: es,
    teardownChatChangedHook: Xr,
    setupCharacterPageLoadedHook: Zr,
    teardownCharacterPageLoadedHook: Qr,
    setupDebugParseButtonHook: Wr,
    teardownDebugParseButtonHook: Kr,
    setupDebugLogToggleButtonHook: ss,
    teardownDebugLogToggleButtonHook: ts,
    setupVuePanelToggleButtonHook: rs,
    teardownVuePanelToggleButtonHook: ns,
    toggleVuePanel: Oo,
    handlePlayerOptionClick: Ur,
    teardownRuntimeHooks: jr,
    setDebug: tr,
    getDebug: nr,
    registerSgbzMacros: ks
};
typeof initializeGlobal == "function" && initializeGlobal("ThreeKingdomsStateKit", wo);
window.ThreeKingdomsStateKit = wo;
try {
    ks()
} catch (e) {
    fe("index", "\u6CE8\u518C\u5B8F\u5931\u8D25\uFF0C\u811A\u672C\u4E3B\u4F53\u4ECD\u53EF\u4F7F\u7528\u3002", e)
}
var vb = wo;
export {
    wo as ThreeKingdomsStateKit,
    wt as createNPC,
    Ct as create\u4E16\u754C,
    ln as create\u4E3B\u89D2,
    St as create\u4EFB\u52A1,
    It as create\u519B\u961F,
    cn as create\u521D\u59CB\u72B6\u6001,
    st as create\u52BF\u529B,
    an as create\u52BF\u529B\u96C6\u5408,
    Lt as create\u5546\u54C1\u6761\u76EE,
    mt as create\u57CE\u6C60,
    on as create\u653F\u7B56,
    vb as default,
    nr as getDebugEnabled,
    hn as handleAssistantReply,
    Ur as handlePlayerOptionClick,
    ks as registerSgbzMacros,
    tr as setDebugEnabled,
    os as setupAssistantReplyHook,
    Zr as setupCharacterPageLoadedHook,
    es as setupChatChangedHook,
    ss as setupDebugLogToggleButtonHook,
    Wr as setupDebugParseButtonHook,
    Jr as setupMessageDeletedHook,
    Yr as setupMessageSentHook,
    rs as setupVuePanelToggleButtonHook,
    zr as teardownAssistantReplyHook,
    Qr as teardownCharacterPageLoadedHook,
    Xr as teardownChatChangedHook,
    ts as teardownDebugLogToggleButtonHook,
    Kr as teardownDebugParseButtonHook,
    qr as teardownMessageDeletedHook,
    Gr as teardownMessageSentHook,
    jr as teardownRuntimeHooks,
    ns as teardownVuePanelToggleButtonHook,
    Oo as toggleVuePanel,
    oi as \u5305\u88C5\u547D\u4EE4\u5757,
    sr as \u79FB\u9664\u547D\u4EE4\u534F\u8BAE\u5757,
    ii as \u79FB\u9664\u73A9\u5BB6\u9009\u9879\u5757,
    rr as \u89E3\u6790\u547D\u4EE4\u5757,
    Ft as \u89E3\u6790\u73A9\u5BB6\u9009\u9879\u5757
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
