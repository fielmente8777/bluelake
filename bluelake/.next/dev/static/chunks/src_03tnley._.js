(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Aboutus.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AboutUs",
    ()=>AboutUs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$SectionWithContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionWithContainer$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/SectionWithContainer.tsx [app-client] (ecmascript) <export default as SectionWithContainer>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const aboutImages = [
    {
        image: "/images/DJI_0856_11zon.jpg",
        alt: "The Blue Lake resort aerial view"
    },
    {
        image: "/images/DJI_0903_11zon.jpg",
        alt: "The Blue Lake resort at night"
    },
    {
        image: "/images/DJI_0897_11zon.jpg",
        alt: "Lake and mountain view"
    }
];
function AboutUs() {
    _s();
    const [currentMobileIndex, setCurrentMobileIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    /*
   * MOBILE AUTO SLIDER
   * Auto slides image every 3 seconds on mobile view
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutUs.useEffect": ()=>{
            const interval = setInterval({
                "AboutUs.useEffect.interval": ()=>{
                    setCurrentMobileIndex({
                        "AboutUs.useEffect.interval": (prev)=>(prev + 1) % aboutImages.length
                    }["AboutUs.useEffect.interval"]);
                }
            }["AboutUs.useEffect.interval"], 3000);
            return ({
                "AboutUs.useEffect": ()=>clearInterval(interval)
            })["AboutUs.useEffect"];
        }
    }["AboutUs.useEffect"], []);
    const changeMobileImage = (direction)=>{
        setCurrentMobileIndex((prev)=>(prev + direction + aboutImages.length) % aboutImages.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$SectionWithContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionWithContainer$3e$__["SectionWithContainer"], {
        sectionId: "about",
        sectionProps: {
            "aria-labelledby": "about-title"
        },
        sectionClassName: "bg-off-white px-5 pt-[58px] pb-[65px] sm:px-8 lg:px-[52px]",
        defaultPadding: false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[38px] flex flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "m-0 flex items-center justify-center gap-3 font-sans text-[14px] font-bold tracking-[0.15em] text-gold uppercase sm:text-[24px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-px w-[24px] bg-gold"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Aboutus.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            "About Us",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-px w-[24px] bg-gold"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Aboutus.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Aboutus.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "about-title",
                        className: "mt-4 whitespace-nowrap font-sans text-[20px] font-semibold leading-[1.15] text-navy-deep sm:mt-[40px] sm:max-w-[900px] sm:whitespace-normal sm:text-[40px]",
                        children: "A Serene Lakeside Escape in Igatpuri"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Aboutus.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Aboutus.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[280px] w-full overflow-hidden rounded-[8px] bg-white sm:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: aboutImages[currentMobileIndex].image,
                        alt: aboutImages[currentMobileIndex].alt,
                        className: "h-full w-full object-cover transition-all duration-700 ease-in-out"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Aboutus.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Previous image",
                        onClick: ()=>changeMobileImage(-1),
                        className: "\r\n\n            absolute\r\n\n            left-[10px]\r\n\n            top-1/2\r\n\n            z-10\r\n\n            flex\r\n\n            h-[34px]\r\n\n            w-[34px]\r\n\n            -translate-y-1/2\r\n\n            items-center\r\n\n            justify-center\r\n\n            rounded-full\r\n\n            bg-black/45\r\n\n            text-white\r\n\n            backdrop-blur-sm\r\n\n            transition-all\r\n\n            hover:bg-black/65\r\n\n          ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronLeftCircle"], {
                            className: "h-[20px] w-[20px] text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Aboutus.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Aboutus.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Next image",
                        onClick: ()=>changeMobileImage(1),
                        className: "\r\n\n            absolute\r\n\n            right-[10px]\r\n\n            top-1/2\r\n\n            z-10\r\n\n            flex\r\n\n            h-[34px]\r\n\n            w-[34px]\r\n\n            -translate-y-1/2\r\n\n            items-center\r\n\n            justify-center\r\n\n            rounded-full\r\n\n            bg-black/45\r\n\n            text-white\r\n\n            backdrop-blur-sm\r\n\n            transition-all\r\n\n            hover:bg-black/65\r\n\n          ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronRightCircle"], {
                            className: "h-[20px] w-[20px] text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Aboutus.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Aboutus.tsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Aboutus.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hidden grid-cols-1 gap-[16px] sm:grid sm:grid-cols-3",
                children: aboutImages.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[280px] overflow-hidden rounded-[8px] bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: item.image,
                            alt: item.alt,
                            className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Aboutus.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this)
                    }, item.image, false, {
                        fileName: "[project]/src/components/Aboutus.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Aboutus.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-[20px] font-sans text-[14px] leading-[1.7] text-text-muted sm:text-[16px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Nestled amidst the scenic beauty of Igatpuri, The Blue Lake Resort is a peaceful retreat designed for guests looking to relax, reconnect and create memorable moments. Surrounded by lush greenery and beautiful lake views, the resort offers comfortable stays, an infinity swimming pool, delicious dining, indoor and outdoor activities, and spacious spaces for families, friends and celebrations. Whether it’s a relaxing weekend getaway, a family holiday or a special occasion, The Blue Lake Resort brings together nature, comfort and warm hospitality for a refreshing escape from the everyday."
                }, void 0, false, {
                    fileName: "[project]/src/components/Aboutus.tsx",
                    lineNumber: 147,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Aboutus.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Aboutus.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(AboutUs, "6kslfbmxBLBiQ636LuvPWV7ZMt4=");
_c = AboutUs;
var _c;
__turbopack_context__.k.register(_c, "AboutUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ExperiencesStrip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperiencesStrip",
    ()=>ExperiencesStrip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$SectionWithContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionWithContainer$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/SectionWithContainer.tsx [app-client] (ecmascript) <export default as SectionWithContainer>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Duplicate cards array for seamless infinite circular looping on desktop
const doubledCards = [
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experienceCards"],
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experienceCards"]
];
function ExperiencesStrip() {
    _s();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isHoveredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [mobileIndex, setMobileIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    /*
   * DESKTOP INFINITE CIRCULAR CONTINUOUS SLIDER
   * Continuously moves images forward on desktop without scrolling back.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExperiencesStrip.useEffect": ()=>{
            let animationFrameId;
            const step = {
                "ExperiencesStrip.useEffect.step": ()=>{
                    if (trackRef.current && !isHoveredRef.current) {
                        const container = trackRef.current;
                        const halfWidth = container.scrollWidth / 2;
                        container.scrollLeft += 1;
                        if (container.scrollLeft >= halfWidth) {
                            container.scrollLeft -= halfWidth;
                        }
                    }
                    animationFrameId = requestAnimationFrame(step);
                }
            }["ExperiencesStrip.useEffect.step"];
            animationFrameId = requestAnimationFrame(step);
            return ({
                "ExperiencesStrip.useEffect": ()=>cancelAnimationFrame(animationFrameId)
            })["ExperiencesStrip.useEffect"];
        }
    }["ExperiencesStrip.useEffect"], []);
    /*
   * MOBILE AUTO SLIDER EFFECT
   * Changes single centered image every 3 seconds on mobile view.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExperiencesStrip.useEffect": ()=>{
            const interval = setInterval({
                "ExperiencesStrip.useEffect.interval": ()=>{
                    if (!isHoveredRef.current) {
                        setMobileIndex({
                            "ExperiencesStrip.useEffect.interval": (prev)=>(prev + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experienceCards"].length
                        }["ExperiencesStrip.useEffect.interval"]);
                    }
                }
            }["ExperiencesStrip.useEffect.interval"], 3000);
            return ({
                "ExperiencesStrip.useEffect": ()=>clearInterval(interval)
            })["ExperiencesStrip.useEffect"];
        }
    }["ExperiencesStrip.useEffect"], []);
    const prevMobile = ()=>{
        setMobileIndex((prev)=>(prev - 1 + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experienceCards"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experienceCards"].length);
    };
    const nextMobile = ()=>{
        setMobileIndex((prev)=>(prev + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experienceCards"].length);
    };
    const scrollByCard = (dir)=>{
        if (!trackRef.current) return;
        const container = trackRef.current;
        const halfWidth = container.scrollWidth / 2;
        const cardWidth = 235;
        let target = container.scrollLeft + dir * cardWidth;
        if (target >= halfWidth) {
            target -= halfWidth;
        } else if (target < 0) {
            target += halfWidth;
        }
        container.scrollTo({
            left: target,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$SectionWithContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionWithContainer$3e$__["SectionWithContainer"], {
        sectionId: "experiences",
        sectionProps: {
            "aria-labelledby": "experiences-title"
        },
        sectionClassName: "bg-black px-5 pt-[70px] pb-[70px] sm:px-9 lg:px-12",
        defaultPadding: false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[42px] text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "m-0 flex items-center justify-center gap-3 py-3 font-sans text-[14px] font-bold tracking-[0.12em] text-gold uppercase sm:text-[24px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-px w-[24px] bg-gold"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExperiencesStrip.tsx",
                                lineNumber: 98,
                                columnNumber: 13
                            }, this),
                            "Experiences That Stay",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "h-px w-[24px] bg-gold"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExperiencesStrip.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExperiencesStrip.tsx",
                        lineNumber: 97,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "experiences-title",
                        className: "mt-[10px] font-display text-[20px] leading-[1.1] text-white sm:text-[40px]",
                        children: "More Than Just a Stay"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExperiencesStrip.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExperiencesStrip.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mx-auto w-full max-w-[280px] sm:hidden",
                onMouseEnter: ()=>isHoveredRef.current = true,
                onMouseLeave: ()=>isHoveredRef.current = false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-[320px] w-full overflow-hidden rounded-[8px] border border-white/35 bg-charcoal shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experienceCards"][mobileIndex].image,
                                alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experienceCards"][mobileIndex].alt || "Experience photo",
                                className: "h-full w-full object-cover transition-all duration-700 ease-in-out"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExperiencesStrip.tsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_25%,rgba(0,0,0,0.15)_50%,rgba(0,0,0,0.9)_100%)]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExperiencesStrip.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExperiencesStrip.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Previous experience image",
                        onClick: prevMobile,
                        className: "absolute left-[-18px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(47,68,42,0.95)] text-white shadow-xl backdrop-blur-[4px] transition-all hover:scale-105 hover:bg-navy-deep [&>svg]:h-5 [&>svg]:w-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronLeftCircle"], {
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperiencesStrip.tsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExperiencesStrip.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Next experience image",
                        onClick: nextMobile,
                        className: "absolute right-[-18px] top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(47,68,42,0.95)] text-white shadow-xl backdrop-blur-[4px] transition-all hover:scale-105 hover:bg-navy-deep [&>svg]:h-5 [&>svg]:w-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronRightCircle"], {
                            "aria-hidden": "true"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ExperiencesStrip.tsx",
                            lineNumber: 149,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExperiencesStrip.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExperiencesStrip.tsx",
                lineNumber: 115,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative hidden w-full sm:block",
                onMouseEnter: ()=>isHoveredRef.current = true,
                onMouseLeave: ()=>isHoveredRef.current = false,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        ref: trackRef,
                        className: "\r\n\n              no-scrollbar\r\n\n              flex\r\n\n              w-full\r\n\n              gap-[15px]\r\n\n              overflow-x-auto\r\n\n              pb-1\r\n\n            ",
                        children: doubledCards.map((card, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "\r\n\n                  relative\r\n\n                  h-[290px]\r\n\n                  min-w-[220px]\r\n\n                  shrink-0\r\n\n                  overflow-hidden\r\n\n                  rounded-[6px]\r\n\n                  border\r\n\n                  border-white/35\r\n\n                  bg-charcoal\r\n\n                ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: card.image,
                                        alt: "",
                                        "aria-hidden": "true",
                                        className: "\r\n\n                    absolute\r\n\n                    inset-0\r\n\n                    h-full\r\n\n                    w-full\r\n\n                    object-cover\r\n\n                  "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExperiencesStrip.tsx",
                                        lineNumber: 187,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "\r\n\n                    pointer-events-none\r\n\n                    absolute\r\n\n                    inset-0\r\n\n                    bg-[linear-gradient(\r\n\n                      to_bottom,\r\n\n                      rgba(0,0,0,0)_25%,\r\n\n                      rgba(0,0,0,0.15)_50%,\r\n\n                      rgba(0,0,0,0.9)_100%\r\n\n                    )]\r\n\n                  "
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ExperiencesStrip.tsx",
                                        lineNumber: 201,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, `${card.image}-${index}`, true, {
                                fileName: "[project]/src/components/ExperiencesStrip.tsx",
                                lineNumber: 172,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ExperiencesStrip.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute right-[5px] bottom-[-25px] z-10 flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Previous experiences",
                                onClick: ()=>scrollByCard(-1),
                                className: "\r\n\n                flex\r\n\n                h-12\r\n\n                w-12\r\n\n                items-center\r\n\n                justify-center\r\n\n                rounded-full\r\n\n                bg-[rgba(47,68,42,0.9)]\r\n\n                text-white\r\n\n                backdrop-blur-[4px]\r\n\n                transition-all\r\n\n                hover:-translate-y-px\r\n\n                hover:bg-navy-deep\r\n\n                [&>svg]:h-5\r\n\n                [&>svg]:w-5\r\n\n              ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronLeftCircle"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExperiencesStrip.tsx",
                                    lineNumber: 241,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExperiencesStrip.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": "Next experiences",
                                onClick: ()=>scrollByCard(1),
                                className: "\r\n\n                flex\r\n\n                h-12\r\n\n                w-12\r\n\n                items-center\r\n\n                justify-center\r\n\n                rounded-full\r\n\n                bg-[rgba(47,68,42,0.9)]\r\n\n                text-white\r\n\n                backdrop-blur-[4px]\r\n\n                transition-all\r\n\n                hover:-translate-y-px\r\n\n                hover:bg-navy-deep\r\n\n                [&>svg]:h-5\r\n\n                [&>svg]:w-5\r\n\n              ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronRightCircle"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ExperiencesStrip.tsx",
                                    lineNumber: 265,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ExperiencesStrip.tsx",
                                lineNumber: 244,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ExperiencesStrip.tsx",
                        lineNumber: 219,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ExperiencesStrip.tsx",
                lineNumber: 154,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-[38px] flex justify-center text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "max-w-[650px] font-sans text-[14px] leading-[1.6] text-white/65 sm:text-[15px]",
                    children: "From adventure to relaxation, explore experiences that connect you with nature and create unforgettable memories."
                }, void 0, false, {
                    fileName: "[project]/src/components/ExperiencesStrip.tsx",
                    lineNumber: 272,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/ExperiencesStrip.tsx",
                lineNumber: 271,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ExperiencesStrip.tsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(ExperiencesStrip, "EEx0hbCOV+yMtd0q1jualBxLMYk=");
_c = ExperiencesStrip;
var _c;
__turbopack_context__.k.register(_c, "ExperiencesStrip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhotoPlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhotoPlaceholder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$BookingContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/BookingContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Section$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/Section.tsx [app-client] (ecmascript) <export default as Section>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/Container.tsx [app-client] (ecmascript) <export default as Container>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Footer() {
    _s();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [submitted, setSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { openBookingModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$BookingContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingModal"])();
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!email.trim()) return;
        setSubmitted(true);
        setEmail("");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Section$3e$__["Section"], {
                defaultPadding: false,
                className: "relative h-[280px] overflow-hidden rounded-t-[32px] bg-navy-deep font-sans text-white sm:h-[345px] lg:h-[350px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhotoPlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhotoPlaceholder"], {
                        src: "/images/BLR_EDIITED-24_11zon.jpg",
                        alt: "Ante Meridiem Hotels & Resorts exterior",
                        ratio: "21 / 8",
                        className: "absolute inset-0 h-full !aspect-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[linear-gradient(90deg,rgba(11,37,69,0.85)_0%,rgba(11,37,69,0.60)_50%,rgba(11,37,69,0)_85%)] sm:bg-[linear-gradient(90deg,rgba(11,37,69,0.92)_0%,rgba(11,37,69,0.55)_45%,rgba(11,37,69,0.15)_100%)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 z-10 flex items-center sm:items-start sm:pt-[40px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "max-w-[520px]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "m-0 text-[14px] font-bold tracking-[0.08em] text-white uppercase sm:text-[16px]",
                                        children: "A UNIT OF"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        id: "managed-title",
                                        className: "font-cormorant! text-[20px] font-semibold text-white sm:mt-3 md:text-5xl uppercase",
                                        children: "Ante Meridiem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 max-w-[520px] text-[13px] text-white sm:mt-[28px] sm:text-[18px]",
                                        children: "With a commitment to excellence, we bring world-class hospitality, operational expertise and a passion for creating memorable stays."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>openBookingModal(),
                                        className: "mt-2 inline-flex items-center bg-white px-5 py-3 text-[12px] font-bold tracking-[0.06em] !text-navy-deep uppercase transition-colors hover:bg-gray-100 sm:mt-[24px] sm:px-7 sm:py-4 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mr-3 flex items-center border-r border-navy-deep/30 pr-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: "/images/logo.jpeg",
                                                    alt: "Logo",
                                                    className: "h-5 w-auto object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Footer.tsx",
                                                lineNumber: 75,
                                                columnNumber: 17
                                            }, this),
                                            "Book Now"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Footer.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Footer.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Footer.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                id: "contact",
                className: "max_screen_width bg-navy-deep pt-8 font-sans text-text-on-dark sm:pt-[42px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-6 md:grid-cols-[1.15fr_1fr_1fr] md:gap-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col items-start text-left md:pr-[40px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-2 max-w-lg font-sans text-[20px] font-semibold text-white sm:mb-3 sm:text-[32px]",
                                            children: "Plan Your Escape to Serenity"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 max-w-[30ch] text-[14px] text-text-on-dark-muted sm:mt-3 sm:text-base",
                                            children: "Book your stay or reach out to us for enquiries, events and special offers."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 98,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-white/15 py-4 md:border-t-0 md:border-l md:px-10 md:py-0",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-2 font-sans text-[13px] font-bold text-white uppercase sm:mb-3 sm:text-[14px]",
                                            children: "Location"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2.5 py-2 sm:py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinIcon"], {
                                                    "aria-hidden": "true",
                                                    className: "mt-px h-4 w-4 shrink-0 text-white sm:h-5 sm:w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "m-0 text-[13px] text-text-on-dark sm:text-[14px]",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactDetails"].address
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-2 mt-2 font-sans text-[13px] font-bold text-white uppercase sm:mb-3 sm:mt-0 sm:text-[14px]",
                                            children: "Phone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2.5 py-2 sm:py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneIcon"], {
                                                    "aria-hidden": "true",
                                                    className: "mt-px h-4 w-4 shrink-0 text-white sm:h-5 sm:w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "m-0 text-[13px] leading-[1.5] text-text-on-dark sm:text-[14px]",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactDetails"].phones.map((phone, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                idx > 0 && " / ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `tel:${phone.replace(/\s+/g, "")}`,
                                                                    className: "hover:text-white transition-colors",
                                                                    children: phone
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, phone, true, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 138,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-2 mt-2 font-sans text-[13px] font-bold text-white uppercase sm:mb-3 sm:mt-0 sm:text-[14px]",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2.5 py-2 sm:py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    "aria-hidden": "true",
                                                    viewBox: "0 0 24 24",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    className: "mt-px h-4 w-4 shrink-0 text-white sm:h-5 sm:w-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                            x: "3",
                                                            y: "5",
                                                            width: "18",
                                                            height: "14",
                                                            rx: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 164,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "m3 7 9 6 9-6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 165,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 156,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "m-0 text-[13px] leading-[1.5] text-text-on-dark sm:text-[14px]",
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contactDetails"].email.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                idx > 0 && " / ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    href: `mailto:${item}`,
                                                                    className: "hover:text-white transition-colors",
                                                                    children: item
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/Footer.tsx",
                                                                    lineNumber: 172,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, item, true, {
                                                            fileName: "[project]/src/components/Footer.tsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 155,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border-t border-white/15 pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-[38px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-2 font-sans text-[13px] font-bold tracking-[0.1em] text-white uppercase sm:mb-3 sm:text-[14px]",
                                            children: "Follow Us"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 186,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2.5 py-2 sm:py-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.instagram.com/thebluelakeresort?igsi=MTg1MDBiNW9pZTJkZQ==",
                                                    "aria-label": "Instagram",
                                                    className: "flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 [&>svg]:h-[16px] [&>svg]:w-[16px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InstagramIcon"], {
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "https://www.facebook.com/thebluelakeresort/",
                                                    "aria-label": "Facebook",
                                                    className: "flex h-[32px] w-[32px] items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white/10 [&>svg]:h-[16px] [&>svg]:w-[16px]",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FacebookIcon"], {
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 190,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mt-2 font-sans text-[13px] font-bold text-white uppercase sm:mt-0 sm:text-[14px]",
                                            children: "Newsletter"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "py-2 text-[13px] text-text-on-dark sm:py-3 sm:text-[14px]",
                                            children: "Stay updated with our latest offers and experiences."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 212,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            onSubmit: handleSubmit,
                                            noValidate: true,
                                            className: "flex h-10 w-full border border-white/35",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "newsletter-email",
                                                    className: "hidden",
                                                    children: "Email address"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    id: "newsletter-email",
                                                    type: "email",
                                                    required: true,
                                                    placeholder: "Enter your email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    className: "min-w-0 flex-1 border-none bg-white px-3 font-sans text-[12px] text-navy-deep placeholder:text-[#777] focus:outline-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    "aria-label": "Subscribe",
                                                    className: "flex w-10 items-center justify-center border-none bg-transparent text-white transition-colors hover:bg-white/10 [&>svg]:h-4 [&>svg]:w-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SendIcon"], {
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.tsx",
                                                        lineNumber: 240,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Footer.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            role: "status",
                                            className: "mt-1.5 text-[13px] text-gold sm:text-[14px]",
                                            children: "Thanks — you’re subscribed!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 245,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 185,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex min-h-[48px] flex-col items-start gap-3 border-t border-white/20 pt-4 pb-6 font-sans text-[13px] text-text-on-dark-muted sm:mt-[34px] sm:flex-row sm:items-center sm:justify-between sm:text-[14px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "© 2025 The Blue Lake, Igatpuri. All Rights Reserved."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-x-4 gap-y-2 sm:gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/privacy-policy",
                                            className: "transition-colors hover:text-white",
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 260,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/cancellation-policy",
                                            className: "transition-colors hover:text-white",
                                            children: "Cancellation Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 266,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/in-house-guest-policy",
                                            className: "transition-colors hover:text-white",
                                            children: "In House Guest Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 272,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/credit",
                                            className: "transition-colors hover:text-white",
                                            children: "Powered by Fielmente"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.tsx",
                                            lineNumber: 278,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.tsx",
                                    lineNumber: 259,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 94,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.tsx",
                lineNumber: 90,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Footer, "L8lzSpzATyWLR1QghhAEudXlTGc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$BookingContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingModal"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Gallery.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Gallery",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$SectionWithContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionWithContainer$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/SectionWithContainer.tsx [app-client] (ecmascript) <export default as SectionWithContainer>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Gallery() {
    _s();
    // Show only 4 images on desktop single row
    const homepageGalleryImages = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"].slice(0, 4);
    const [currentMobileIndex, setCurrentMobileIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    /*
   * MOBILE AUTO SLIDER
   * Auto slides through all 36 gallery images every 3 seconds on mobile view
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Gallery.useEffect": ()=>{
            const interval = setInterval({
                "Gallery.useEffect.interval": ()=>{
                    setCurrentMobileIndex({
                        "Gallery.useEffect.interval": (prev)=>(prev + 1) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"].length
                    }["Gallery.useEffect.interval"]);
                }
            }["Gallery.useEffect.interval"], 3000);
            return ({
                "Gallery.useEffect": ()=>clearInterval(interval)
            })["Gallery.useEffect"];
        }
    }["Gallery.useEffect"], []);
    const changeMobileImage = (direction)=>{
        setCurrentMobileIndex((prev)=>(prev + direction + __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"].length) % __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"].length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$SectionWithContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SectionWithContainer$3e$__["SectionWithContainer"], {
        sectionId: "gallery",
        sectionProps: {
            "aria-labelledby": "gallery-title"
        },
        sectionClassName: "bg-off-white px-5 pt-[58px] pb-[65px] sm:px-8 lg:px-[52px]",
        defaultPadding: false,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-[38px] flex flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "flex items-center gap-2 font-sans text-[14px] font-bold tracking-[0.16em] text-gold uppercase sm:text-[24px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block h-px w-[20px] bg-gold"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Gallery.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this),
                            "Gallery",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "block h-px w-[20px] bg-gold"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Gallery.tsx",
                                lineNumber: 43,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "gallery-title",
                        className: "mt-[12px] font-display text-[20px] font-medium leading-snug text-navy-deep sm:text-[40px]",
                        children: "A Glimpse of Paradise"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 46,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 font-sans text-[14px] text-text-muted sm:mt-5 sm:text-[16px]",
                        children: "See the beauty, feel the calm."
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 39,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[250px] w-full overflow-hidden rounded-[7px] bg-white sm:hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"][currentMobileIndex].image,
                        alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["galleryImages"][currentMobileIndex].alt,
                        className: "h-full w-full object-cover transition-all duration-700 ease-in-out"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Previous gallery image",
                        onClick: ()=>changeMobileImage(-1),
                        className: "\r\n\n              absolute\r\n\n              left-[10px]\r\n\n              top-1/2\r\n\n              z-10\r\n\n              flex\r\n\n              h-[34px]\r\n\n              w-[34px]\r\n\n              -translate-y-1/2\r\n\n              items-center\r\n\n              justify-center\r\n\n              rounded-full\r\n\n              bg-black/45\r\n\n              text-white\r\n\n              backdrop-blur-sm\r\n\n              transition-all\r\n\n              hover:bg-black/65\r\n\n            ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronLeftCircle"], {
                            className: "h-[20px] w-[20px] text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Gallery.tsx",
                            lineNumber: 90,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-label": "Next gallery image",
                        onClick: ()=>changeMobileImage(1),
                        className: "\r\n\n              absolute\r\n\n              right-[10px]\r\n\n              top-1/2\r\n\n              z-10\r\n\n              flex\r\n\n              h-[34px]\r\n\n              w-[34px]\r\n\n              -translate-y-1/2\r\n\n              items-center\r\n\n              justify-center\r\n\n              rounded-full\r\n\n              bg-black/45\r\n\n              text-white\r\n\n              backdrop-blur-sm\r\n\n              transition-all\r\n\n              hover:bg-black/65\r\n\n            ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronRightCircle"], {
                            className: "h-[20px] w-[20px] text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Gallery.tsx",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "hidden grid-cols-1 gap-[9px] sm:grid sm:grid-cols-2 lg:grid-cols-4",
                children: homepageGalleryImages.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "height: 250px; overflow-hidden rounded-[7px] bg-white",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: img.image,
                            alt: img.alt,
                            className: "h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Gallery.tsx",
                            lineNumber: 128,
                            columnNumber: 15
                        }, this)
                    }, img.image, false, {
                        fileName: "[project]/src/components/Gallery.tsx",
                        lineNumber: 124,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 122,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "/gallery",
                    className: "inline-flex items-center rounded-[4px] bg-navy-deep px-[22px] py-3 text-[11px] font-bold tracking-[0.08em] !text-white uppercase transition-colors hover:bg-navy-darker",
                    children: "View All"
                }, void 0, false, {
                    fileName: "[project]/src/components/Gallery.tsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Gallery.tsx",
                lineNumber: 138,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Gallery.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(Gallery, "6kslfbmxBLBiQ636LuvPWV7ZMt4=");
_c = Gallery;
var _c;
__turbopack_context__.k.register(_c, "Gallery");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$BookingContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/BookingContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/Container.tsx [app-client] (ecmascript) <export default as Container>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Header() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { openBookingModal } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$BookingContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingModal"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "absolute top-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-[6px]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                className: "relative flex items-center justify-between gap-4 py-[14px] sm:gap-6 sm:py-[18px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        "aria-label": "The Blue Lake, Igatpuri — home",
                        className: "flex shrink-0 items-center",
                        onClick: ()=>setOpen(false),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/logo.png",
                            alt: "The Blue Lake Igatpuri",
                            className: "h-[46px] w-auto object-contain sm:h-[55px]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Header.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        "aria-label": "Primary",
                        className: `${open ? "flex" : "hidden"} absolute top-full left-0 right-0 flex-col gap-[18px] bg-white p-5 shadow-[var(--shadow-card)] lg:static lg:flex lg:flex-row lg:items-center lg:gap-[clamp(14px,1.8vw,28px)] lg:bg-transparent lg:p-0 lg:shadow-none`,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].map((link, i)=>{
                            const href = link.href.startsWith("#") ? `/${link.href}` : link.href;
                            const isActive = pathname === href || pathname === "/" && i === 0 || href !== "/" && href !== "/#home" && !href.startsWith("/#") && pathname?.startsWith(href);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: href,
                                onClick: ()=>setOpen(false),
                                className: `flex items-center gap-1 border-b-2 pb-1 text-xs font-semibold tracking-[0.06em] uppercase transition-colors hover:text-gold ${isActive ? "border-gold text-gold" : "border-transparent text-navy-deep"}`,
                                children: link.label
                            }, link.label, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 17
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>{
                                    setOpen(false);
                                    openBookingModal();
                                },
                                className: "shrink-0 rounded-[4px] bg-navy-deep px-[16px] py-2.5 text-[11px] font-bold tracking-[0.08em] !text-white uppercase transition-colors hover:bg-navy-darker sm:px-[22px] sm:py-3 cursor-pointer",
                                children: "Book Now"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-label": open ? "Close menu" : "Open menu",
                                "aria-expanded": open,
                                onClick: ()=>setOpen((v)=>!v),
                                className: "inline-flex flex-col gap-1 border-none bg-transparent p-1.5 lg:hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-0.5 w-[22px] bg-navy-deep"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-0.5 w-[22px] bg-navy-deep"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "h-0.5 w-[22px] bg-navy-deep"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Header.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Header.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Header.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Header.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/Header.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Header.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_s(Header, "y1YpD5ZIMWpO/rW/yLhgSSyol5o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$BookingContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useBookingModal"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Hero",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhotoPlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PhotoPlaceholder.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Section$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/Section.tsx [app-client] (ecmascript) <export default as Section>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/Container.tsx [app-client] (ecmascript) <export default as Container>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function formatDate(value) {
    if (!value) return null;
    const d = new Date(`${value}T00:00:00`);
    return d.toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}
function Hero({ photoSrc = "/home-banner image.png", alt = "Aerial view of The Blue Lake resort at dusk, buildings lit along the lakeshore surrounded by mountains", tagline = "Lakeside Serenity. Timeless Memories.", title = "THE BLUE LAKE, IGATPURI", subtitle = "A serene lakeside resort in Murambi, Igatpuri, where nature’s calm meets refined comfort.", whatsappNumber = "918065072001", phoneNumber = "+918065072001", mapsUrl = "https://maps.google.com/?q=The+Blue+Lake+Igatpuri", onSearch, showBookingBar = true, align = "left" }) {
    _s();
    const today = new Date().toISOString().slice(0, 10);
    const [checkIn, setCheckIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [checkOut, setCheckOut] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [rooms, setRooms] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [adults, setAdults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2);
    const [children, setChildren] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [guestsOpen, setGuestsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    /* DATE INPUT REFS */ const checkInRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const checkOutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* GUEST DROPDOWN REF */ const guestsFieldRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    /* CLOSE GUEST DROPDOWN OUTSIDE CLICK */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hero.useEffect": ()=>{
            function handleClickOutside(event) {
                if (guestsFieldRef.current && !guestsFieldRef.current.contains(event.target)) {
                    setGuestsOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "Hero.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["Hero.useEffect"];
        }
    }["Hero.useEffect"], []);
    /* GUEST SUMMARY */ const guestsSummary = `${adults + children} Guest${adults + children !== 1 ? "s" : ""}, ${rooms} Room${rooms !== 1 ? "s" : ""}`;
    /* FORM SUBMIT */ function handleSubmit(event) {
        event.preventDefault();
        setStatus("");
        if (!checkIn || !checkOut) {
            setStatus("Pick both a check-in and check-out date to continue.");
            return;
        }
        if (checkOut <= checkIn) {
            setStatus("Check-out must be after check-in.");
            return;
        }
        const payload = {
            checkIn,
            checkOut,
            rooms,
            adults,
            children
        };
        if (onSearch) {
            onSearch(payload);
        } else {
            setStatus(`Checking availability for ${adults + children} guest${adults + children !== 1 ? "s" : ""} · ${formatDate(checkIn)} → ${formatDate(checkOut)}`);
        }
    }
    /* OPEN CHECK-IN CALENDAR */ function openCheckInPicker() {
        checkInRef.current?.showPicker?.();
    }
    /* OPEN CHECK-OUT CALENDAR */ function openCheckOutPicker() {
        checkOutRef.current?.showPicker?.();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Section$3e$__["Section"], {
        defaultPadding: false,
        className: "relative overflow-visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PhotoPlaceholder$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhotoPlaceholder"], {
                        src: photoSrc,
                        alt: alt,
                        ratio: "21 / 9",
                        className: "!aspect-auto h-[620px] md:h-[668px]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-0 bg-[linear-gradient(100deg,rgba(11,37,69,0.72)_0%,rgba(11,37,69,0.32)_45%,rgba(11,37,69,0.05)_70%)]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute pointer-events-none ${align === "center" ? "inset-0 flex flex-col items-center justify-center text-center" : "bottom-[90px] left-0 right-0 text-left md:bottom-[130px]"} w-full text-white`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                            className: "pointer-events-auto",
                            children: [
                                tagline && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "whitespace-nowrap py-3 text-[14px] font-semibold tracking-[0.06em] text-text-on-dark uppercase sm:text-base sm:tracking-[0.18em]",
                                    children: tagline
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 165,
                                    columnNumber: 15
                                }, this),
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: `${align === "center" ? "max-w-none text-center" : "max-w-[14ch]"} py-3 font-display text-[20px] font-semibold leading-[1.08] uppercase sm:text-[clamp(30px,5.5vw,52px)]`,
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-[18px] text-[14px] max-w-[44ch] text-text-on-dark sm:text-base sm:max-w-[38ch]",
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "\r\n\n            absolute\r\n\n            right-3\r\n\n            top-[105px]\r\n\n            z-[5]\r\n\n            flex\r\n\n            flex-col\r\n\n            overflow-hidden\r\n\n            rounded-[24px]\r\n\n            bg-navy-deep\r\n\n            shadow-[var(--shadow-card)]\r\n\n            sm:right-8\r\n\n            sm:top-1/2\r\n\n            sm:-translate-y-1/2\r\n\n          ",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `https://wa.me/${whatsappNumber}`,
                                target: "_blank",
                                rel: "noreferrer",
                                "aria-label": "WhatsApp chat",
                                className: "\r\n\n              flex\r\n\n              h-[52px]\r\n\n              w-[48px]\r\n\n              items-center\r\n\n              justify-center\r\n\n              !text-white\r\n\n              hover:bg-navy-darker\r\n\n              [&>svg]:h-[21px]\r\n\n              [&>svg]:w-[21px]\r\n\n            ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppIcon"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 224,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "tel:+918065072001",
                                "aria-label": "Call resort",
                                className: "\r\n\n              flex\r\n\n              h-[52px]\r\n\n              w-[48px]\r\n\n              items-center\r\n\n              justify-center\r\n\n              !text-white\r\n\n              hover:bg-navy-darker\r\n\n              [&>svg]:h-[20px]\r\n\n              [&>svg]:w-[20px]\r\n\n            ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhoneIcon"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 243,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 228,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://maps.app.goo.gl/yjjb6rpRNq4cHvTH6",
                                target: "_blank",
                                rel: "noreferrer",
                                "aria-label": "View on map",
                                className: "\r\n\n              flex\r\n\n              h-[52px]\r\n\n              w-[48px]\r\n\n              items-center\r\n\n              justify-center\r\n\n              !text-white\r\n\n              hover:bg-navy-darker\r\n\n              [&>svg]:h-[21px]\r\n\n              [&>svg]:w-[21px]\r\n\n            ",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PinIcon"], {
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 264,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 247,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 189,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this),
            showBookingBar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 -mt-[35px] md:-mt-[52px]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                "aria-label": "Check availability",
                                onSubmit: handleSubmit,
                                className: "\r\n\n                  relative mx-auto\r\n\n                  grid w-full\r\n\n                  grid-cols-1\r\n\n                  overflow-visible\r\n\n                  rounded-[8px]\r\n\n                  bg-white\r\n\n                  shadow-[0_12px_35px_rgba(11,37,69,0.12)]\r\n\n                  md:grid-cols-[1fr_1fr_1.2fr_auto]\r\n\n                  md:items-stretch\r\n\n                ",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "\r\n\n              relative\r\n\n              flex\r\n\n              cursor-pointer\r\n\n              flex-col\r\n\n              gap-1.5\r\n\n              border-b\r\n\n              border-border\r\n\n              px-[22px]\r\n\n              py-4\r\n\n              rounded-t-[8px]\r\n\n              md:border-b-0\r\n\n              md:rounded-tr-none\r\n\n              md:rounded-l-[8px]\r\n\n            ",
                                        onClick: openCheckInPicker,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold tracking-[0.08em] text-navy-deep uppercase",
                                                children: "Check-in"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 308,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex items-center justify-between gap-2 text-[13px] [&>svg]:shrink-0 [&>svg]:text-navy-deep ${checkIn ? "text-navy-deep" : "text-text-muted"}`,
                                                children: [
                                                    checkIn ? formatDate(checkIn) : "Select Date",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarIcon"], {
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 319,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 312,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: checkInRef,
                                                type: "date",
                                                min: today,
                                                value: checkIn,
                                                "aria-label": "Check-in date",
                                                onChange: (e)=>{
                                                    const value = e.target.value;
                                                    setCheckIn(value);
                                                    setStatus("");
                                                    if (checkOut && checkOut <= value) {
                                                        setCheckOut("");
                                                    }
                                                },
                                                className: "\r\n\n                absolute\r\n\n                inset-0\r\n\n                cursor-pointer\r\n\n                border-none\r\n\n                opacity-0\r\n\n              "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 322,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 290,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "\r\n\n              relative\r\n\n              flex\r\n\n              cursor-pointer\r\n\n              flex-col\r\n\n              gap-1.5\r\n\n              border-b\r\n\n              border-border\r\n\n              px-[22px]\r\n\n              py-4\r\n\n              md:border-b-0\r\n\n            ",
                                        onClick: openCheckOutPicker,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold tracking-[0.08em] text-navy-deep uppercase",
                                                children: "Check-out"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 364,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `flex items-center justify-between gap-2 text-[13px] [&>svg]:shrink-0 [&>svg]:text-navy-deep ${checkOut ? "text-navy-deep" : "text-text-muted"}`,
                                                children: [
                                                    checkOut ? formatDate(checkOut) : "Select Date",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CalendarIcon"], {
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 368,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                ref: checkOutRef,
                                                type: "date",
                                                min: checkIn || today,
                                                value: checkOut,
                                                "aria-label": "Check-out date",
                                                onChange: (e)=>{
                                                    setCheckOut(e.target.value);
                                                    setStatus("");
                                                },
                                                className: "\r\n\n                absolute\r\n\n                inset-0\r\n\n                cursor-pointer\r\n\n                border-none\r\n\n                opacity-0\r\n\n              "
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 378,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 349,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        ref: guestsFieldRef,
                                        onClick: ()=>setGuestsOpen((v)=>!v),
                                        className: "\r\n\n              relative\r\n\n              flex\r\n\n              cursor-pointer\r\n\n              flex-col\r\n\n              gap-1.5\r\n\n              border-b\r\n\n              border-border\r\n\n              px-[22px]\r\n\n              py-4\r\n\n              md:border-b-0\r\n\n            ",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-[10px] font-bold tracking-[0.08em] text-navy-deep uppercase",
                                                children: "Guests & Rooms"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 415,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center justify-between gap-2 text-[13px] text-navy-deep [&>svg]:shrink-0 [&>svg]:text-navy-deep",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "flex items-center gap-1.5",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GuestsIcon"], {
                                                                "aria-hidden": "true"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Hero.tsx",
                                                                lineNumber: 421,
                                                                columnNumber: 17
                                                            }, this),
                                                            guestsSummary
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChevronDown"], {
                                                        "aria-hidden": "true"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 419,
                                                columnNumber: 13
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: (e)=>e.stopPropagation(),
                                                className: `
                absolute
                top-[calc(100%+8px)]
                left-[22px]
                right-[22px]
                z-20
                rounded-[4px]
                border
                border-border
                bg-white
                p-4
                shadow-[var(--shadow-float)]
                md:left-auto
                md:right-0
                md:w-[260px]
                ${guestsOpen ? "block" : "hidden"}
              `,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[13px] text-navy-deep",
                                                                children: "Rooms"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Hero.tsx",
                                                                lineNumber: 451,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setRooms((v)=>Math.max(1, v - 1)),
                                                                        disabled: rooms <= 1,
                                                                        className: "\r\n\n                      flex\r\n\n                      h-[26px]\r\n\n                      w-[26px]\r\n\n                      items-center\r\n\n                      justify-center\r\n\n                      rounded-full\r\n\n                      border\r\n\n                      border-border\r\n\n                      bg-white\r\n\n                      text-base\r\n\n                      leading-none\r\n\n                      text-navy-deep\r\n\n                      disabled:cursor-not-allowed\r\n\n                      disabled:opacity-35\r\n\n                      enabled:hover:border-navy-deep\r\n\n                    ",
                                                                        children: "−"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Hero.tsx",
                                                                        lineNumber: 454,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "min-w-[16px] text-center text-[13px] font-semibold",
                                                                        children: rooms
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Hero.tsx",
                                                                        lineNumber: 479,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setRooms((v)=>Math.min(6, v + 1)),
                                                                        className: "\r\n\n                      flex\r\n\n                      h-[26px]\r\n\n                      w-[26px]\r\n\n                      items-center\r\n\n                      justify-center\r\n\n                      rounded-full\r\n\n                      border\r\n\n                      border-border\r\n\n                      bg-white\r\n\n                      text-base\r\n\n                      leading-none\r\n\n                      text-navy-deep\r\n\n                      hover:border-navy-deep\r\n\n                    ",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Hero.tsx",
                                                                        lineNumber: 483,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Hero.tsx",
                                                                lineNumber: 453,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 450,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between border-t border-border py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[13px] text-navy-deep",
                                                                children: "Adults"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Hero.tsx",
                                                                lineNumber: 509,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setAdults((v)=>Math.max(1, v - 1)),
                                                                        disabled: adults <= 1,
                                                                        className: "\r\n\n                      flex\r\n\n                      h-[26px]\r\n\n                      w-[26px]\r\n\n                      items-center\r\n\n                      justify-center\r\n\n                      rounded-full\r\n\n                      border\r\n\n                      border-border\r\n\n                      bg-white\r\n\n                      text-base\r\n\n                      leading-none\r\n\n                      text-navy-deep\r\n\n                      disabled:cursor-not-allowed\r\n\n                      disabled:opacity-35\r\n\n                      enabled:hover:border-navy-deep\r\n\n                    ",
                                                                        children: "−"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Hero.tsx",
                                                                        lineNumber: 512,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "min-w-[16px] text-center text-[13px] font-semibold",
                                                                        children: adults
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Hero.tsx",
                                                                        lineNumber: 537,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setAdults((v)=>Math.min(10, v + 1)),
                                                                        className: "\r\n\n                      flex\r\n\n                      h-[26px]\r\n\n                      w-[26px]\r\n\n                      items-center\r\n\n                      justify-center\r\n\n                      rounded-full\r\n\n                      border\r\n\n                      border-border\r\n\n                      bg-white\r\n\n                      text-base\r\n\n                      leading-none\r\n\n                      text-navy-deep\r\n\n                      hover:border-navy-deep\r\n\n                    ",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Hero.tsx",
                                                                        lineNumber: 541,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Hero.tsx",
                                                                lineNumber: 511,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 508,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between border-t border-border py-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[13px] text-navy-deep",
                                                                children: "Children"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Hero.tsx",
                                                                lineNumber: 567,
                                                                columnNumber: 17
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setChildren((v)=>Math.max(0, v - 1)),
                                                                        disabled: children <= 0,
                                                                        className: "\r\n\n                      flex\r\n\n                      h-[26px]\r\n\n                      w-[26px]\r\n\n                      items-center\r\n\n                      justify-center\r\n\n                      rounded-full\r\n\n                      border\r\n\n                      border-border\r\n\n                      bg-white\r\n\n                      text-base\r\n\n                      leading-none\r\n\n                      text-navy-deep\r\n\n                      disabled:cursor-not-allowed\r\n\n                      disabled:opacity-35\r\n\n                      enabled:hover:border-navy-deep\r\n\n                    ",
                                                                        children: "−"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Hero.tsx",
                                                                        lineNumber: 570,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "min-w-[16px] text-center text-[13px] font-semibold",
                                                                        children: children
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Hero.tsx",
                                                                        lineNumber: 595,
                                                                        columnNumber: 19
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: ()=>setChildren((v)=>Math.min(8, v + 1)),
                                                                        className: "\r\n\n                      flex\r\n\n                      h-[26px]\r\n\n                      w-[26px]\r\n\n                      items-center\r\n\n                      justify-center\r\n\n                      rounded-full\r\n\n                      border\r\n\n                      border-border\r\n\n                      bg-white\r\n\n                      text-base\r\n\n                      leading-none\r\n\n                      text-navy-deep\r\n\n                      hover:border-navy-deep\r\n\n                    ",
                                                                        children: "+"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Hero.tsx",
                                                                        lineNumber: 599,
                                                                        columnNumber: 19
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Hero.tsx",
                                                                lineNumber: 569,
                                                                columnNumber: 17
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 15
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>setGuestsOpen(false),
                                                        className: "\r\n\n                  mt-3\r\n\n                  w-full\r\n\n                  rounded-[4px]\r\n\n                  bg-navy-deep\r\n\n                  py-2.5\r\n\n                  text-[11px]\r\n\n                  font-bold\r\n\n                  tracking-[0.06em]\r\n\n                  text-white\r\n\n                  uppercase\r\n\n                ",
                                                        children: "Done"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Hero.tsx",
                                                        lineNumber: 624,
                                                        columnNumber: 15
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Hero.tsx",
                                                lineNumber: 429,
                                                columnNumber: 13
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 399,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        className: "\r\n\n              border-none\r\n\n              bg-navy-deep\r\n\n              px-7\r\n\n              py-[18px]\r\n\n              text-xs\r\n\n              font-bold\r\n\n              tracking-[0.06em]\r\n\n              text-white\r\n\n              uppercase\r\n\n              transition-colors\r\n\n              hover:bg-navy-darker\r\n\n              rounded-b-[8px]\r\n\n              md:rounded-bl-none\r\n\n              md:rounded-r-[8px]\r\n\n            ",
                                        children: "Check Availability"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 646,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 274,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 273,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 272,
                        columnNumber: 11
                    }, this),
                    status && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            role: "status",
                            className: "mt-2.5 text-xs text-navy-deep",
                            children: status
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 674,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 673,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 271,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_s(Hero, "3TDYxkWzRrKNvWgYNg5dlv1IoJM=");
_c = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/PhotoPlaceholder.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * PhotoPlaceholder
 * ------------------------------------------------------------------
 * The reference design is built entirely around proprietary resort
 * photography (drone shots of the property, room interiors, guest
 * activity photos). Those images can't be extracted from a screenshot,
 * so every photo slot in this build renders as a labeled placeholder
 * at the EXACT crop ratio and position used in the reference layout.
 *
 * To go live: pass a real `src`. The label/caption disappears
 * automatically once a src is provided, and object-fit/position are
 * preserved so the real photo will crop identically to the reference.
 * ------------------------------------------------------------------
 */ __turbopack_context__.s([
    "PhotoPlaceholder",
    ()=>PhotoPlaceholder
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function PhotoPlaceholder({ src, alt, ratio = "4 / 3", objectPosition = "center", className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative w-full overflow-hidden bg-[linear-gradient(135deg,#cfd9df_0%,#a9c1c9_45%,#7f9aa3_100%)] ${className}`,
        style: {
            aspectRatio: ratio
        },
        role: "img",
        "aria-label": alt,
        children: src ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: src,
            alt: alt,
            loading: "lazy",
            className: "h-full w-full object-cover",
            style: {
                objectPosition
            }
        }, void 0, false, {
            fileName: "[project]/src/components/PhotoPlaceholder.tsx",
            lineNumber: 39,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            "aria-hidden": "true",
            className: "absolute inset-0 flex items-center justify-center bg-white/35 px-3 py-2 text-center text-[11px] leading-[1.4] tracking-[0.02em] text-[rgba(11,37,69,0.65)]",
            children: alt
        }, void 0, false, {
            fileName: "[project]/src/components/PhotoPlaceholder.tsx",
            lineNumber: 47,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/PhotoPlaceholder.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_c = PhotoPlaceholder;
var _c;
__turbopack_context__.k.register(_c, "PhotoPlaceholder");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sectionComponants/Container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Container = ({ className = "", children, id = "", style = {}, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `max_width ${className}`,
        id: id,
        style: style,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/sectionComponants/Container.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Container;
const __TURBOPACK__default__export__ = Container;
var _c;
__turbopack_context__.k.register(_c, "Container");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sectionComponants/Container.tsx [app-client] (ecmascript) <export default as Container>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Container",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/Container.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/sectionComponants/Section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Section = ({ className = "", id, children, defaultPadding = true, style = {}, ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `max_screen_width overflow-clip ${defaultPadding ? "py-12 md:py-16" : ""} ${className}`,
        id: id,
        style: style,
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/sectionComponants/Section.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Section;
const __TURBOPACK__default__export__ = Section;
var _c;
__turbopack_context__.k.register(_c, "Section");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sectionComponants/Section.tsx [app-client] (ecmascript) <export default as Section>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Section",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/Section.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/sectionComponants/SectionWithContainer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/Section.tsx [app-client] (ecmascript)");
;
;
;
const SectionWithContainer = ({ sectionId = "", containerId = "", sectionClassName = "", containerClassName = "", sectionStyle = {}, containerStyle = {}, children, defaultPadding = true, sectionProps = {}, containerProps = {} })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        id: sectionId,
        className: sectionClassName,
        style: sectionStyle,
        defaultPadding: defaultPadding,
        ...sectionProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: containerId,
            className: containerClassName,
            style: containerStyle,
            ...containerProps,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/sectionComponants/SectionWithContainer.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/sectionComponants/SectionWithContainer.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = SectionWithContainer;
const __TURBOPACK__default__export__ = SectionWithContainer;
var _c;
__turbopack_context__.k.register(_c, "SectionWithContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/sectionComponants/SectionWithContainer.tsx [app-client] (ecmascript) <export default as SectionWithContainer>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SectionWithContainer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$SectionWithContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$SectionWithContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/SectionWithContainer.tsx [app-client] (ecmascript)");
}),
"[project]/src/components/sectionComponants/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Container$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/Container.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$Section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/Section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$SectionWithContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sectionComponants/SectionWithContainer.tsx [app-client] (ecmascript)");
;
;
;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sectionComponants$2f$SectionWithContainer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "contactDetails",
    ()=>contactDetails,
    "experienceCards",
    ()=>experienceCards,
    "featureItems",
    ()=>featureItems,
    "galleryImages",
    ()=>galleryImages,
    "navLinks",
    ()=>navLinks,
    "rooms",
    ()=>rooms
]);
const navLinks = [
    {
        label: "Home",
        href: "#home"
    },
    {
        label: "About Us",
        href: "#about"
    },
    {
        label: "Accommodation",
        href: "/accommodation"
    },
    {
        label: "Gallery",
        href: "/gallery"
    },
    {
        label: "Celebrations",
        href: "/celebrations"
    },
    {
        label: "Contact",
        href: "#contact"
    }
];
const featureItems = [
    {
        icon: "lakeside",
        title: "Lakeside Location",
        description: "Wake up to breathtaking views of the peaceful lake and lush mountains."
    },
    {
        icon: "premium",
        title: "Premium Stay",
        description: "Elegant rooms & villas designed for comfort, relaxation and style."
    },
    {
        icon: "dining",
        title: "Delightful Dining",
        description: "Savor delicious multi-cuisine meals crafted with fresh, local ingredients."
    },
    {
        icon: "experiences",
        title: "Experiences",
        description: "Adventure, bonfires, nature walks & curated outdoor activities."
    },
    {
        icon: "events",
        title: "Events & Celebrations",
        description: "Perfect for weddings, corporate retreats & special occasions."
    }
];
const rooms = [
    {
        name: "Deluxe Lake View AC",
        roomSize: "180 sq.ft(17 sq.mt.)",
        view: "Lake View",
        beds: "1 Queen Bed",
        bathroom: "1 Bathroom",
        guests: "Max 3 Guests",
        images: [
            "/rooms/deluxe.jpg",
            "/rooms/beddelux.jpg",
            "/rooms/bathdeluxe.jpg",
            "/rooms/deleuxelake.jpg",
            "/rooms/deluxebath.jpg"
        ]
    },
    {
        name: "Super Deluxe Lake View",
        roomSize: "280 sq.ft(26 sq.mt.)",
        view: "Lake View",
        beds: "1 King Bed or 2 Single Beds",
        bathroom: "1 Bathroom",
        guests: "Max 3 Guests",
        images: [
            "/rooms/Superdeluxe.jpg",
            "/rooms/super/bath.jpg",
            "/rooms/super/bathr.jpg",
            "/rooms/super/bed.jpg",
            "/rooms/super/eac02.jpg",
            "/rooms/super/s.jpg",
            "/rooms/super/sup.jpg",
            "/rooms/super/super.jpg"
        ]
    },
    {
        name: "Deluxe Garden View AC",
        roomSize: "180 sq.ft(17 sq.mt.)",
        view: "Garden View",
        beds: "1 King Bed",
        bathroom: "1 Bathroom",
        guests: "Max 3 Guests",
        images: [
            "/rooms/deluxe.jpg",
            "/rooms/garden/202002111643316554-abe864aadcf511eca6940a58a9feac02.jpg",
            "/rooms/garden/bed.jpg",
            "/rooms/deleuxelake.jpg"
        ]
    }
];
const experienceCards = [
    {
        // title: "Bonfire Nights",
        alt: "Guests gathered around a bonfire at night",
        image: "/images/BLR_EDIITED-51_11zon.jpg"
    },
    {
        // title: "Water Activities",
        alt: "Kayaking on the lake",
        image: "/images/BLR_EDIITED-44_11zon.jpg"
    },
    {
        // title: "Nature Trails",
        alt: "Guests walking a forest nature trail",
        image: "/images/DJI_0897_11zon.jpg"
    },
    {
        // title: "Outdoor Dining",
        alt: "String-lit outdoor dining setup by the lake",
        image: "/images/IMG_8935_11zon.jpg"
    },
    {
        // title: "Nature Trails",
        alt: "Guests walking a forest nature trail",
        image: "/images/BLR_EDIITED-24_11zon.jpg"
    },
    {
        // title: "Outdoor Dining",
        alt: "String-lit outdoor dining setup by the lake",
        image: "/images/DJI_0908_11zon.jpg"
    },
    {
        // title: "Nature Trails",
        alt: "Guests walking a forest nature trail",
        image: "/gallery/BLR_EDIITED-65_11zon.jpg"
    },
    {
        // title: "Outdoor Dining",
        alt: "String-lit outdoor dining setup by the lake",
        image: "/rooms/super/s.jpg"
    }
];
const galleryImages = [
    {
        image: "/gallery/gallery-a.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-b.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-c.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-d.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-e.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-f.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-g.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-h.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-i.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-j.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-k.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-l.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-m.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-n.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-o.png",
        alt: "The Blue Lake Resort Igatpuri"
    },
    {
        image: "/gallery/gallery-p.png",
        alt: "The Blue Lake Resort Igatpuri"
    }
];
const contactDetails = {
    address: "Murambi, Gate no. 858 Wadiwarhe-Ahurli, Road, Igatpuri, Maharashtra 422010",
    phones: [
        "+91 80-65072001",
        "+91 8554-929929"
    ],
    email: [
        "sales@amhotels.in",
        "info@amhotels.in"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_03tnley._.js.map