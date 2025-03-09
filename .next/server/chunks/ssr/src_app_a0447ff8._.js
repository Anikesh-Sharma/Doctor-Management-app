module.exports = {

"[project]/src/app/_components/Dashboard.jsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, d: __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/dashboard/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Dashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/_components/Dashboard.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DashboardPage() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const userType = searchParams.get("userType") || "patient";
    // Simulated appointment data; replace with your API or localStorage data as needed.
    const appointments = userType === "doctor" ? [
        {
            id: 1,
            date: new Date("2025-03-15T09:00:00"),
            time: "09:00 AM",
            doctorName: "Dr. John Doe",
            title: "Appointment with Patient A",
            patientName: "Alice Johnson",
            status: "confirmed"
        },
        {
            id: 2,
            date: new Date("2025-03-20T11:00:00"),
            time: "11:00 AM",
            doctorName: "Dr. John Doe",
            title: "Appointment with Patient B",
            patientName: "Bob Smith",
            status: "confirmed"
        },
        {
            id: 3,
            date: new Date(new Date().setHours(14, 30, 0, 0)),
            time: "02:30 PM",
            doctorName: "Dr. John Doe",
            title: "Urgent Consultation",
            patientName: "Charlie Brown",
            status: "pending"
        }
    ] : [
        {
            id: 1,
            date: new Date("2025-03-12T10:00:00"),
            time: "10:00 AM",
            doctorName: "Dr. Jane Smith",
            title: "Consultation with Dr. Jane Smith",
            type: "check-up",
            status: "confirmed"
        },
        {
            id: 2,
            date: new Date("2025-03-18T14:00:00"),
            time: "02:00 PM",
            doctorName: "Dr. Mark Brown",
            title: "Follow-up with Dr. Mark Brown",
            type: "follow-up",
            status: "confirmed"
        },
        {
            id: 3,
            date: new Date(new Date().setHours(15, 0, 0, 0)),
            time: "03:00 PM",
            doctorName: "Dr. Jane Smith",
            title: "Annual Physical",
            type: "physical",
            status: "pending"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$_components$2f$Dashboard$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        appointments: appointments,
        userType: userType
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/page.jsx",
        lineNumber: 73,
        columnNumber: 10
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_a0447ff8._.js.map