export const cyborgTheme = {
    name: "cyborg",
    ":root": {
        "--blue": "#2a9fd6",
        "--indigo": "#6610f2",
        "--purple": "#6f42c1",
        "--pink": "#e83e8c",
        "--red": "#c00",
        "--orange": "#fd7e14",
        "--yellow": "#f80",
        "--green": "#77b300",
        "--teal": "#20c997",
        "--cyan": "#93c",
        "--white": "#fff",
        "--gray": "#555",
        "--gray-dark": "#222",
        "--primary": "#2a9fd6",
        "--secondary": "#555",
        "--success": "#77b300",
        "--info": "#93c",
        "--warning": "#f80",
        "--danger": "#c00",
        "--light": "#222",
        "--dark": "#adafae",
        "--breakpoint-xs": "0",
        "--breakpoint-sm": "576px",
        "--breakpoint-md": "768px",
        "--breakpoint-lg": "992px",
        "--breakpoint-xl": "1200px",
        "--font-family-sans-serif":
            'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
        "--font-family-monospace":
            'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
    },
    "*,\n*::before,\n*::after": { boxSizing: "border-box" },
    html: {
        fontFamily: "sans-serif",
        lineHeight: 1.15,
        WebkitTextSizeAdjust: "100%",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
    },
    "article, aside, figcaption, figure, footer, header, hgroup, main, nav, section": {
        display: "block"
    },
    body: {
        margin: "0",
        fontFamily:
            'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#adafae",
        textAlign: "left",
        backgroundColor: "#060606"
    },
    '[tabindex="-1"]:focus:not(:focus-visible)': { outline: "0 !important" },
    hr: {
        boxSizing: "content-box",
        height: "0",
        overflow: "visible",
        marginTop: "1rem",
        marginBottom: "1rem",
        border: "0",
        borderTop: "1px solid rgba(0, 0, 0, 0.1)"
    },
    "h1, h2, h3, h4, h5, h6": { marginTop: "0", marginBottom: "0.5rem" },
    p: { marginTop: "0", marginBottom: "1rem" },
    "abbr[title],\nabbr[data-original-title]": {
        textDecoration: ["underline", "underline dotted"],
        WebkitTextDecoration: "underline dotted",
        cursor: "help",
        borderBottom: "0",
        WebkitTextDecorationSkipInk: "none",
        textDecorationSkipInk: "none"
    },
    address: { marginBottom: "1rem", fontStyle: "normal", lineHeight: "inherit" },
    "ol,\nul,\ndl": { marginTop: "0", marginBottom: "1rem" },
    "ol ol,\nul ul,\nol ul,\nul ol": { marginBottom: "0" },
    dt: { fontWeight: 700 },
    dd: { marginBottom: ".5rem", marginLeft: "0" },
    blockquote: { margin: "0 0 1rem" },
    "b,\nstrong": { fontWeight: "bolder" },
    small: { fontSize: "80%" },
    "sub,\nsup": {
        position: "relative",
        fontSize: "75%",
        lineHeight: 0,
        verticalAlign: "baseline"
    },
    sub: { bottom: "-.25em" },
    sup: { top: "-.5em" },
    a: {
        color: "#2a9fd6",
        textDecoration: "none",
        backgroundColor: "transparent"
    },
    "a:hover": { color: "#1d7097", textDecoration: "underline" },
    "a:not([href]):not([class])": { color: "inherit", textDecoration: "none" },
    "a:not([href]):not([class]):hover": {
        color: "inherit",
        textDecoration: "none"
    },
    "pre,\ncode,\nkbd,\nsamp": {
        fontFamily:
            'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        fontSize: "1em"
    },
    pre: {
        marginTop: "0",
        marginBottom: "1rem",
        overflow: "auto",
        msOverflowStyle: "scrollbar",
        display: "block",
        fontSize: "87.5%",
        color: "inherit"
    },
    figure: { margin: "0 0 1rem" },
    img: { verticalAlign: "middle", borderStyle: "none" },
    svg: { overflow: "hidden", verticalAlign: "middle" },
    table: { borderCollapse: "collapse", color: "#fff" },
    caption: {
        paddingTop: "0.75rem",
        paddingBottom: "0.75rem",
        color: "#555",
        textAlign: "left",
        captionSide: "bottom"
    },
    th: { textAlign: ["inherit", "-webkit-match-parent"] },
    label: { display: "inline-block", marginBottom: "0.5rem" },
    button: { borderRadius: "0" },
    "button:focus": {
        outline: ["1px dotted", "5px auto -webkit-focus-ring-color"]
    },
    "input,\nbutton,\nselect,\noptgroup,\ntextarea": {
        margin: "0",
        fontFamily: "inherit",
        fontSize: "inherit",
        lineHeight: "inherit"
    },
    "button,\ninput": { overflow: "visible" },
    "button,\nselect": { textTransform: "none" },
    '[role="button"]': { cursor: "pointer" },
    select: { wordWrap: "normal" },
    'button,\n[type="button"],\n[type="reset"],\n[type="submit"]': {
        WebkitAppearance: "button"
    },
    'button:not(:disabled),\n[type="button"]:not(:disabled),\n[type="reset"]:not(:disabled),\n[type="submit"]:not(:disabled)': {
        cursor: "pointer"
    },
    'button::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner': {
        padding: "0",
        borderStyle: "none"
    },
    'input[type="radio"],\ninput[type="checkbox"]': {
        boxSizing: "border-box",
        padding: "0"
    },
    textarea: { overflow: "auto", resize: "vertical" },
    fieldset: { minWidth: "0", padding: "0", margin: "0", border: "0" },
    legend: {
        display: "block",
        width: "100%",
        maxWidth: "100%",
        padding: "0",
        marginBottom: ".5rem",
        fontSize: "1.5rem",
        lineHeight: "inherit",
        color: "#fff",
        whiteSpace: "normal"
    },
    progress: { verticalAlign: "baseline" },
    '[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button': {
        height: "auto"
    },
    '[type="search"]': { outlineOffset: "-2px", WebkitAppearance: "none" },
    '[type="search"]::-webkit-search-decoration': { WebkitAppearance: "none" },
    "::-webkit-file-upload-button": {
        font: "inherit",
        WebkitAppearance: "button"
    },
    output: { display: "inline-block" },
    summary: { display: "list-item", cursor: "pointer" },
    template: { display: "none" },
    "[hidden]": { display: "none !important" },
    "h1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6": {
        marginBottom: "0.5rem",
        fontWeight: 500,
        lineHeight: 1.2,
        color: "#fff"
    },
    "h1, .h1": { fontSize: "4rem" },
    "h2, .h2": { fontSize: "3rem" },
    "h3, .h3": { fontSize: "2.5rem" },
    "h4, .h4": { fontSize: "2rem" },
    "h5, .h5": { fontSize: "1.5rem" },
    "h6, .h6": { fontSize: "0.875rem" },
    ".lead": { fontSize: "1.09375rem", fontWeight: 300 },
    ".display-1": { fontSize: "6rem", fontWeight: 300, lineHeight: 1.2 },
    ".display-2": { fontSize: "5.5rem", fontWeight: 300, lineHeight: 1.2 },
    ".display-3": { fontSize: "4.5rem", fontWeight: 300, lineHeight: 1.2 },
    ".display-4": { fontSize: "3.5rem", fontWeight: 300, lineHeight: 1.2 },
    "small,\n.small": { fontSize: "80%", fontWeight: 400 },
    "mark,\n.mark": { padding: "0.2em", backgroundColor: "#fcf8e3" },
    ".list-unstyled": { paddingLeft: "0", listStyle: "none" },
    ".list-inline": { paddingLeft: "0", listStyle: "none" },
    ".list-inline-item": { display: "inline-block" },
    ".list-inline-item:not(:last-child)": { marginRight: "0.5rem" },
    ".initialism": { fontSize: "90%", textTransform: "uppercase" },
    ".blockquote": { marginBottom: "1rem", fontSize: "1.09375rem" },
    ".blockquote-footer": { display: "block", fontSize: "80%", color: "#555" },
    ".blockquote-footer::before": { content: '"\\2014\\00A0"' },
    ".img-fluid": { maxWidth: "100%", height: "auto" },
    ".img-thumbnail": {
        padding: "0.25rem",
        backgroundColor: "#060606",
        border: "1px solid #dee2e6",
        borderRadius: "0.25rem",
        maxWidth: "100%",
        height: "auto"
    },
    ".figure": { display: "inline-block" },
    ".figure-img": { marginBottom: "0.5rem", lineHeight: 1 },
    ".figure-caption": { fontSize: "90%", color: "#555" },
    code: { fontSize: "87.5%", color: "#e83e8c", wordWrap: "break-word" },
    "a > code": { color: "inherit" },
    kbd: {
        padding: "0.2rem 0.4rem",
        fontSize: "87.5%",
        color: "#fff",
        backgroundColor: "#212529",
        borderRadius: "0.2rem"
    },
    "kbd kbd": { padding: "0", fontSize: "100%", fontWeight: 700 },
    "pre code": { fontSize: "inherit", color: "inherit", wordBreak: "normal" },
    ".pre-scrollable": { maxHeight: "340px", overflowY: "scroll" },
    ".container,\n.container-fluid,\n.container-sm,\n.container-md,\n.container-lg,\n.container-xl": {
        width: "100%",
        paddingRight: "15px",
        paddingLeft: "15px",
        marginRight: "auto",
        marginLeft: "auto"
    },
    "@media (min-width: 576px)": [
        { ".container, .container-sm": { maxWidth: "540px" } },
        {
            ".col-sm": {
                msFlexPreferredSize: "0",
                flexBasis: "0",
                msFlexPositive: "1",
                flexGrow: 1,
                maxWidth: "100%"
            },
            ".row-cols-sm-1 > *": {
                msFlex: "0 0 100%",
                flex: "0 0 100%",
                maxWidth: "100%"
            },
            ".row-cols-sm-2 > *": {
                msFlex: "0 0 50%",
                flex: "0 0 50%",
                maxWidth: "50%"
            },
            ".row-cols-sm-3 > *": {
                msFlex: "0 0 33.333333%",
                flex: "0 0 33.333333%",
                maxWidth: "33.333333%"
            },
            ".row-cols-sm-4 > *": {
                msFlex: "0 0 25%",
                flex: "0 0 25%",
                maxWidth: "25%"
            },
            ".row-cols-sm-5 > *": {
                msFlex: "0 0 20%",
                flex: "0 0 20%",
                maxWidth: "20%"
            },
            ".row-cols-sm-6 > *": {
                msFlex: "0 0 16.666667%",
                flex: "0 0 16.666667%",
                maxWidth: "16.666667%"
            },
            ".col-sm-auto": {
                msFlex: "0 0 auto",
                flex: "0 0 auto",
                width: "auto",
                maxWidth: "100%"
            },
            ".col-sm-1": {
                msFlex: "0 0 8.333333%",
                flex: "0 0 8.333333%",
                maxWidth: "8.333333%"
            },
            ".col-sm-2": {
                msFlex: "0 0 16.666667%",
                flex: "0 0 16.666667%",
                maxWidth: "16.666667%"
            },
            ".col-sm-3": { msFlex: "0 0 25%", flex: "0 0 25%", maxWidth: "25%" },
            ".col-sm-4": {
                msFlex: "0 0 33.333333%",
                flex: "0 0 33.333333%",
                maxWidth: "33.333333%"
            },
            ".col-sm-5": {
                msFlex: "0 0 41.666667%",
                flex: "0 0 41.666667%",
                maxWidth: "41.666667%"
            },
            ".col-sm-6": { msFlex: "0 0 50%", flex: "0 0 50%", maxWidth: "50%" },
            ".col-sm-7": {
                msFlex: "0 0 58.333333%",
                flex: "0 0 58.333333%",
                maxWidth: "58.333333%"
            },
            ".col-sm-8": {
                msFlex: "0 0 66.666667%",
                flex: "0 0 66.666667%",
                maxWidth: "66.666667%"
            },
            ".col-sm-9": { msFlex: "0 0 75%", flex: "0 0 75%", maxWidth: "75%" },
            ".col-sm-10": {
                msFlex: "0 0 83.333333%",
                flex: "0 0 83.333333%",
                maxWidth: "83.333333%"
            },
            ".col-sm-11": {
                msFlex: "0 0 91.666667%",
                flex: "0 0 91.666667%",
                maxWidth: "91.666667%"
            },
            ".col-sm-12": { msFlex: "0 0 100%", flex: "0 0 100%", maxWidth: "100%" },
            ".order-sm-first": { msFlexOrder: "-1", order: -1 },
            ".order-sm-last": { msFlexOrder: "13", order: 13 },
            ".order-sm-0": { msFlexOrder: "0", order: 0 },
            ".order-sm-1": { msFlexOrder: "1", order: 1 },
            ".order-sm-2": { msFlexOrder: "2", order: 2 },
            ".order-sm-3": { msFlexOrder: "3", order: 3 },
            ".order-sm-4": { msFlexOrder: "4", order: 4 },
            ".order-sm-5": { msFlexOrder: "5", order: 5 },
            ".order-sm-6": { msFlexOrder: "6", order: 6 },
            ".order-sm-7": { msFlexOrder: "7", order: 7 },
            ".order-sm-8": { msFlexOrder: "8", order: 8 },
            ".order-sm-9": { msFlexOrder: "9", order: 9 },
            ".order-sm-10": { msFlexOrder: "10", order: 10 },
            ".order-sm-11": { msFlexOrder: "11", order: 11 },
            ".order-sm-12": { msFlexOrder: "12", order: 12 },
            ".offset-sm-0": { marginLeft: "0" },
            ".offset-sm-1": { marginLeft: "8.333333%" },
            ".offset-sm-2": { marginLeft: "16.666667%" },
            ".offset-sm-3": { marginLeft: "25%" },
            ".offset-sm-4": { marginLeft: "33.333333%" },
            ".offset-sm-5": { marginLeft: "41.666667%" },
            ".offset-sm-6": { marginLeft: "50%" },
            ".offset-sm-7": { marginLeft: "58.333333%" },
            ".offset-sm-8": { marginLeft: "66.666667%" },
            ".offset-sm-9": { marginLeft: "75%" },
            ".offset-sm-10": { marginLeft: "83.333333%" },
            ".offset-sm-11": { marginLeft: "91.666667%" }
        },
        {
            ".form-inline label": {
                display: ["-ms-flexbox", "flex"],
                msFlexAlign: "center",
                alignItems: "center",
                msFlexPack: "center",
                justifyContent: "center",
                marginBottom: "0"
            },
            ".form-inline .form-group": {
                display: ["-ms-flexbox", "flex"],
                msFlex: "0 0 auto",
                flex: "0 0 auto",
                msFlexFlow: "row wrap",
                flexFlow: "row wrap",
                msFlexAlign: "center",
                alignItems: "center",
                marginBottom: "0"
            },
            ".form-inline .form-control": {
                display: "inline-block",
                width: "auto",
                verticalAlign: "middle"
            },
            ".form-inline .form-control-plaintext": { display: "inline-block" },
            ".form-inline .input-group,\n  .form-inline .custom-select": {
                width: "auto"
            },
            ".form-inline .form-check": {
                display: ["-ms-flexbox", "flex"],
                msFlexAlign: "center",
                alignItems: "center",
                msFlexPack: "center",
                justifyContent: "center",
                width: "auto",
                paddingLeft: "0"
            },
            ".form-inline .form-check-input": {
                position: "relative",
                msFlexNegative: "0",
                flexShrink: 0,
                marginTop: "0",
                marginRight: "0.25rem",
                marginLeft: "0"
            },
            ".form-inline .custom-control": {
                msFlexAlign: "center",
                alignItems: "center",
                msFlexPack: "center",
                justifyContent: "center"
            },
            ".form-inline .custom-control-label": { marginBottom: "0" }
        },
        {
            ".dropdown-menu-sm-left": { right: "auto", left: "0" },
            ".dropdown-menu-sm-right": { right: "0", left: "auto" }
        },
        {
            ".navbar-expand-sm": {
                msFlexFlow: "row nowrap",
                flexFlow: "row nowrap",
                msFlexPack: "start",
                justifyContent: "flex-start"
            },
            ".navbar-expand-sm .navbar-nav": {
                msFlexDirection: "row",
                flexDirection: "row"
            },
            ".navbar-expand-sm .navbar-nav .dropdown-menu": { position: "absolute" },
            ".navbar-expand-sm .navbar-nav .nav-link": {
                paddingRight: "0.5rem",
                paddingLeft: "0.5rem"
            },
            ".navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl": {
                msFlexWrap: "nowrap",
                flexWrap: "nowrap"
            },
            ".navbar-expand-sm .navbar-collapse": {
                display: ["-ms-flexbox !important", "flex !important"],
                msFlexPreferredSize: "auto",
                flexBasis: "auto"
            },
            ".navbar-expand-sm .navbar-toggler": { display: "none" }
        },
        {
            ".card-deck": {
                display: ["-ms-flexbox", "flex"],
                msFlexFlow: "row wrap",
                flexFlow: "row wrap",
                marginRight: "-15px",
                marginLeft: "-15px"
            },
            ".card-deck .card": {
                msFlex: "1 0 0%",
                flex: "1 0 0%",
                marginRight: "15px",
                marginBottom: "0",
                marginLeft: "15px"
            }
        },
        {
            ".card-group": {
                display: ["-ms-flexbox", "flex"],
                msFlexFlow: "row wrap",
                flexFlow: "row wrap"
            },
            ".card-group > .card": {
                msFlex: "1 0 0%",
                flex: "1 0 0%",
                marginBottom: "0"
            },
            ".card-group > .card + .card": { marginLeft: "0", borderLeft: "0" },
            ".card-group > .card:not(:last-child)": {
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0"
            },
            ".card-group > .card:not(:last-child) .card-img-top,\n  .card-group > .card:not(:last-child) .card-header": {
                borderTopRightRadius: "0"
            },
            ".card-group > .card:not(:last-child) .card-img-bottom,\n  .card-group > .card:not(:last-child) .card-footer": {
                borderBottomRightRadius: "0"
            },
            ".card-group > .card:not(:first-child)": {
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0"
            },
            ".card-group > .card:not(:first-child) .card-img-top,\n  .card-group > .card:not(:first-child) .card-header": {
                borderTopLeftRadius: "0"
            },
            ".card-group > .card:not(:first-child) .card-img-bottom,\n  .card-group > .card:not(:first-child) .card-footer": {
                borderBottomLeftRadius: "0"
            }
        },
        {
            ".card-columns": {
                WebkitColumnCount: "3",
                MozColumnCount: "3",
                columnCount: 3,
                WebkitColumnGap: "1.25rem",
                MozColumnGap: "1.25rem",
                columnGap: "1.25rem",
                orphans: 1,
                widows: 1
            },
            ".card-columns .card": { display: "inline-block", width: "100%" }
        },
        { ".jumbotron": { padding: "4rem 2rem" } },
        {
            ".list-group-horizontal-sm": {
                msFlexDirection: "row",
                flexDirection: "row"
            },
            ".list-group-horizontal-sm > .list-group-item:first-child": {
                borderBottomLeftRadius: "0.25rem",
                borderTopRightRadius: "0"
            },
            ".list-group-horizontal-sm > .list-group-item:last-child": {
                borderTopRightRadius: "0.25rem",
                borderBottomLeftRadius: "0"
            },
            ".list-group-horizontal-sm > .list-group-item.active": { marginTop: "0" },
            ".list-group-horizontal-sm > .list-group-item + .list-group-item": {
                borderTopWidth: "1px",
                borderLeftWidth: "0"
            },
            ".list-group-horizontal-sm > .list-group-item + .list-group-item.active": {
                marginLeft: "-1px",
                borderLeftWidth: "1px"
            }
        },
        {
            ".modal-dialog": { maxWidth: "500px", margin: "1.75rem auto" },
            ".modal-dialog-scrollable": { maxHeight: "calc(100% - 3.5rem)" },
            ".modal-dialog-scrollable .modal-content": {
                maxHeight: "calc(100vh - 3.5rem)"
            },
            ".modal-dialog-centered": { minHeight: "calc(100% - 3.5rem)" },
            ".modal-dialog-centered::before": {
                height: [
                    "calc(100vh - 3.5rem)",
                    "-webkit-min-content",
                    "-moz-min-content",
                    "min-content"
                ]
            },
            ".modal-sm": { maxWidth: "300px" }
        },
        {
            ".d-sm-none": { display: "none !important" },
            ".d-sm-inline": { display: "inline !important" },
            ".d-sm-inline-block": { display: "inline-block !important" },
            ".d-sm-block": { display: "block !important" },
            ".d-sm-table": { display: "table !important" },
            ".d-sm-table-row": { display: "table-row !important" },
            ".d-sm-table-cell": { display: "table-cell !important" },
            ".d-sm-flex": { display: ["-ms-flexbox !important", "flex !important"] },
            ".d-sm-inline-flex": {
                display: ["-ms-inline-flexbox !important", "inline-flex !important"]
            }
        },
        {
            ".flex-sm-row": {
                msFlexDirection: "row !important",
                flexDirection: "row !important"
            },
            ".flex-sm-column": {
                msFlexDirection: "column !important",
                flexDirection: "column !important"
            },
            ".flex-sm-row-reverse": {
                msFlexDirection: "row-reverse !important",
                flexDirection: "row-reverse !important"
            },
            ".flex-sm-column-reverse": {
                msFlexDirection: "column-reverse !important",
                flexDirection: "column-reverse !important"
            },
            ".flex-sm-wrap": {
                msFlexWrap: "wrap !important",
                flexWrap: "wrap !important"
            },
            ".flex-sm-nowrap": {
                msFlexWrap: "nowrap !important",
                flexWrap: "nowrap !important"
            },
            ".flex-sm-wrap-reverse": {
                msFlexWrap: "wrap-reverse !important",
                flexWrap: "wrap-reverse !important"
            },
            ".flex-sm-fill": {
                msFlex: "1 1 auto !important",
                flex: "1 1 auto !important"
            },
            ".flex-sm-grow-0": {
                msFlexPositive: "0 !important",
                flexGrow: "0 !important"
            },
            ".flex-sm-grow-1": {
                msFlexPositive: "1 !important",
                flexGrow: "1 !important"
            },
            ".flex-sm-shrink-0": {
                msFlexNegative: "0 !important",
                flexShrink: "0 !important"
            },
            ".flex-sm-shrink-1": {
                msFlexNegative: "1 !important",
                flexShrink: "1 !important"
            },
            ".justify-content-sm-start": {
                msFlexPack: "start !important",
                justifyContent: "flex-start !important"
            },
            ".justify-content-sm-end": {
                msFlexPack: "end !important",
                justifyContent: "flex-end !important"
            },
            ".justify-content-sm-center": {
                msFlexPack: "center !important",
                justifyContent: "center !important"
            },
            ".justify-content-sm-between": {
                msFlexPack: "justify !important",
                justifyContent: "space-between !important"
            },
            ".justify-content-sm-around": {
                msFlexPack: "distribute !important",
                justifyContent: "space-around !important"
            },
            ".align-items-sm-start": {
                msFlexAlign: "start !important",
                alignItems: "flex-start !important"
            },
            ".align-items-sm-end": {
                msFlexAlign: "end !important",
                alignItems: "flex-end !important"
            },
            ".align-items-sm-center": {
                msFlexAlign: "center !important",
                alignItems: "center !important"
            },
            ".align-items-sm-baseline": {
                msFlexAlign: "baseline !important",
                alignItems: "baseline !important"
            },
            ".align-items-sm-stretch": {
                msFlexAlign: "stretch !important",
                alignItems: "stretch !important"
            },
            ".align-content-sm-start": {
                msFlexLinePack: "start !important",
                alignContent: "flex-start !important"
            },
            ".align-content-sm-end": {
                msFlexLinePack: "end !important",
                alignContent: "flex-end !important"
            },
            ".align-content-sm-center": {
                msFlexLinePack: "center !important",
                alignContent: "center !important"
            },
            ".align-content-sm-between": {
                msFlexLinePack: "justify !important",
                alignContent: "space-between !important"
            },
            ".align-content-sm-around": {
                msFlexLinePack: "distribute !important",
                alignContent: "space-around !important"
            },
            ".align-content-sm-stretch": {
                msFlexLinePack: "stretch !important",
                alignContent: "stretch !important"
            },
            ".align-self-sm-auto": {
                msFlexItemAlign: "auto !important",
                alignSelf: "auto !important"
            },
            ".align-self-sm-start": {
                msFlexItemAlign: "start !important",
                alignSelf: "flex-start !important"
            },
            ".align-self-sm-end": {
                msFlexItemAlign: "end !important",
                alignSelf: "flex-end !important"
            },
            ".align-self-sm-center": {
                msFlexItemAlign: "center !important",
                alignSelf: "center !important"
            },
            ".align-self-sm-baseline": {
                msFlexItemAlign: "baseline !important",
                alignSelf: "baseline !important"
            },
            ".align-self-sm-stretch": {
                msFlexItemAlign: "stretch !important",
                alignSelf: "stretch !important"
            }
        },
        {
            ".float-sm-left": { cssFloat: "left !important" },
            ".float-sm-right": { cssFloat: "right !important" },
            ".float-sm-none": { cssFloat: "none !important" }
        },
        {
            ".m-sm-0": { margin: "0 !important" },
            ".mt-sm-0,\n  .my-sm-0": { marginTop: "0 !important" },
            ".mr-sm-0,\n  .mx-sm-0": { marginRight: "0 !important" },
            ".mb-sm-0,\n  .my-sm-0": { marginBottom: "0 !important" },
            ".ml-sm-0,\n  .mx-sm-0": { marginLeft: "0 !important" },
            ".m-sm-1": { margin: "0.25rem !important" },
            ".mt-sm-1,\n  .my-sm-1": { marginTop: "0.25rem !important" },
            ".mr-sm-1,\n  .mx-sm-1": { marginRight: "0.25rem !important" },
            ".mb-sm-1,\n  .my-sm-1": { marginBottom: "0.25rem !important" },
            ".ml-sm-1,\n  .mx-sm-1": { marginLeft: "0.25rem !important" },
            ".m-sm-2": { margin: "0.5rem !important" },
            ".mt-sm-2,\n  .my-sm-2": { marginTop: "0.5rem !important" },
            ".mr-sm-2,\n  .mx-sm-2": { marginRight: "0.5rem !important" },
            ".mb-sm-2,\n  .my-sm-2": { marginBottom: "0.5rem !important" },
            ".ml-sm-2,\n  .mx-sm-2": { marginLeft: "0.5rem !important" },
            ".m-sm-3": { margin: "1rem !important" },
            ".mt-sm-3,\n  .my-sm-3": { marginTop: "1rem !important" },
            ".mr-sm-3,\n  .mx-sm-3": { marginRight: "1rem !important" },
            ".mb-sm-3,\n  .my-sm-3": { marginBottom: "1rem !important" },
            ".ml-sm-3,\n  .mx-sm-3": { marginLeft: "1rem !important" },
            ".m-sm-4": { margin: "1.5rem !important" },
            ".mt-sm-4,\n  .my-sm-4": { marginTop: "1.5rem !important" },
            ".mr-sm-4,\n  .mx-sm-4": { marginRight: "1.5rem !important" },
            ".mb-sm-4,\n  .my-sm-4": { marginBottom: "1.5rem !important" },
            ".ml-sm-4,\n  .mx-sm-4": { marginLeft: "1.5rem !important" },
            ".m-sm-5": { margin: "3rem !important" },
            ".mt-sm-5,\n  .my-sm-5": { marginTop: "3rem !important" },
            ".mr-sm-5,\n  .mx-sm-5": { marginRight: "3rem !important" },
            ".mb-sm-5,\n  .my-sm-5": { marginBottom: "3rem !important" },
            ".ml-sm-5,\n  .mx-sm-5": { marginLeft: "3rem !important" },
            ".p-sm-0": { padding: "0 !important" },
            ".pt-sm-0,\n  .py-sm-0": { paddingTop: "0 !important" },
            ".pr-sm-0,\n  .px-sm-0": { paddingRight: "0 !important" },
            ".pb-sm-0,\n  .py-sm-0": { paddingBottom: "0 !important" },
            ".pl-sm-0,\n  .px-sm-0": { paddingLeft: "0 !important" },
            ".p-sm-1": { padding: "0.25rem !important" },
            ".pt-sm-1,\n  .py-sm-1": { paddingTop: "0.25rem !important" },
            ".pr-sm-1,\n  .px-sm-1": { paddingRight: "0.25rem !important" },
            ".pb-sm-1,\n  .py-sm-1": { paddingBottom: "0.25rem !important" },
            ".pl-sm-1,\n  .px-sm-1": { paddingLeft: "0.25rem !important" },
            ".p-sm-2": { padding: "0.5rem !important" },
            ".pt-sm-2,\n  .py-sm-2": { paddingTop: "0.5rem !important" },
            ".pr-sm-2,\n  .px-sm-2": { paddingRight: "0.5rem !important" },
            ".pb-sm-2,\n  .py-sm-2": { paddingBottom: "0.5rem !important" },
            ".pl-sm-2,\n  .px-sm-2": { paddingLeft: "0.5rem !important" },
            ".p-sm-3": { padding: "1rem !important" },
            ".pt-sm-3,\n  .py-sm-3": { paddingTop: "1rem !important" },
            ".pr-sm-3,\n  .px-sm-3": { paddingRight: "1rem !important" },
            ".pb-sm-3,\n  .py-sm-3": { paddingBottom: "1rem !important" },
            ".pl-sm-3,\n  .px-sm-3": { paddingLeft: "1rem !important" },
            ".p-sm-4": { padding: "1.5rem !important" },
            ".pt-sm-4,\n  .py-sm-4": { paddingTop: "1.5rem !important" },
            ".pr-sm-4,\n  .px-sm-4": { paddingRight: "1.5rem !important" },
            ".pb-sm-4,\n  .py-sm-4": { paddingBottom: "1.5rem !important" },
            ".pl-sm-4,\n  .px-sm-4": { paddingLeft: "1.5rem !important" },
            ".p-sm-5": { padding: "3rem !important" },
            ".pt-sm-5,\n  .py-sm-5": { paddingTop: "3rem !important" },
            ".pr-sm-5,\n  .px-sm-5": { paddingRight: "3rem !important" },
            ".pb-sm-5,\n  .py-sm-5": { paddingBottom: "3rem !important" },
            ".pl-sm-5,\n  .px-sm-5": { paddingLeft: "3rem !important" },
            ".m-sm-n1": { margin: "-0.25rem !important" },
            ".mt-sm-n1,\n  .my-sm-n1": { marginTop: "-0.25rem !important" },
            ".mr-sm-n1,\n  .mx-sm-n1": { marginRight: "-0.25rem !important" },
            ".mb-sm-n1,\n  .my-sm-n1": { marginBottom: "-0.25rem !important" },
            ".ml-sm-n1,\n  .mx-sm-n1": { marginLeft: "-0.25rem !important" },
            ".m-sm-n2": { margin: "-0.5rem !important" },
            ".mt-sm-n2,\n  .my-sm-n2": { marginTop: "-0.5rem !important" },
            ".mr-sm-n2,\n  .mx-sm-n2": { marginRight: "-0.5rem !important" },
            ".mb-sm-n2,\n  .my-sm-n2": { marginBottom: "-0.5rem !important" },
            ".ml-sm-n2,\n  .mx-sm-n2": { marginLeft: "-0.5rem !important" },
            ".m-sm-n3": { margin: "-1rem !important" },
            ".mt-sm-n3,\n  .my-sm-n3": { marginTop: "-1rem !important" },
            ".mr-sm-n3,\n  .mx-sm-n3": { marginRight: "-1rem !important" },
            ".mb-sm-n3,\n  .my-sm-n3": { marginBottom: "-1rem !important" },
            ".ml-sm-n3,\n  .mx-sm-n3": { marginLeft: "-1rem !important" },
            ".m-sm-n4": { margin: "-1.5rem !important" },
            ".mt-sm-n4,\n  .my-sm-n4": { marginTop: "-1.5rem !important" },
            ".mr-sm-n4,\n  .mx-sm-n4": { marginRight: "-1.5rem !important" },
            ".mb-sm-n4,\n  .my-sm-n4": { marginBottom: "-1.5rem !important" },
            ".ml-sm-n4,\n  .mx-sm-n4": { marginLeft: "-1.5rem !important" },
            ".m-sm-n5": { margin: "-3rem !important" },
            ".mt-sm-n5,\n  .my-sm-n5": { marginTop: "-3rem !important" },
            ".mr-sm-n5,\n  .mx-sm-n5": { marginRight: "-3rem !important" },
            ".mb-sm-n5,\n  .my-sm-n5": { marginBottom: "-3rem !important" },
            ".ml-sm-n5,\n  .mx-sm-n5": { marginLeft: "-3rem !important" },
            ".m-sm-auto": { margin: "auto !important" },
            ".mt-sm-auto,\n  .my-sm-auto": { marginTop: "auto !important" },
            ".mr-sm-auto,\n  .mx-sm-auto": { marginRight: "auto !important" },
            ".mb-sm-auto,\n  .my-sm-auto": { marginBottom: "auto !important" },
            ".ml-sm-auto,\n  .mx-sm-auto": { marginLeft: "auto !important" }
        },
        {
            ".text-sm-left": { textAlign: "left !important" },
            ".text-sm-right": { textAlign: "right !important" },
            ".text-sm-center": { textAlign: "center !important" }
        }
    ],
    "@media (min-width: 768px)": [
        { ".container, .container-sm, .container-md": { maxWidth: "720px" } },
        {
            ".col-md": {
                msFlexPreferredSize: "0",
                flexBasis: "0",
                msFlexPositive: "1",
                flexGrow: 1,
                maxWidth: "100%"
            },
            ".row-cols-md-1 > *": {
                msFlex: "0 0 100%",
                flex: "0 0 100%",
                maxWidth: "100%"
            },
            ".row-cols-md-2 > *": {
                msFlex: "0 0 50%",
                flex: "0 0 50%",
                maxWidth: "50%"
            },
            ".row-cols-md-3 > *": {
                msFlex: "0 0 33.333333%",
                flex: "0 0 33.333333%",
                maxWidth: "33.333333%"
            },
            ".row-cols-md-4 > *": {
                msFlex: "0 0 25%",
                flex: "0 0 25%",
                maxWidth: "25%"
            },
            ".row-cols-md-5 > *": {
                msFlex: "0 0 20%",
                flex: "0 0 20%",
                maxWidth: "20%"
            },
            ".row-cols-md-6 > *": {
                msFlex: "0 0 16.666667%",
                flex: "0 0 16.666667%",
                maxWidth: "16.666667%"
            },
            ".col-md-auto": {
                msFlex: "0 0 auto",
                flex: "0 0 auto",
                width: "auto",
                maxWidth: "100%"
            },
            ".col-md-1": {
                msFlex: "0 0 8.333333%",
                flex: "0 0 8.333333%",
                maxWidth: "8.333333%"
            },
            ".col-md-2": {
                msFlex: "0 0 16.666667%",
                flex: "0 0 16.666667%",
                maxWidth: "16.666667%"
            },
            ".col-md-3": { msFlex: "0 0 25%", flex: "0 0 25%", maxWidth: "25%" },
            ".col-md-4": {
                msFlex: "0 0 33.333333%",
                flex: "0 0 33.333333%",
                maxWidth: "33.333333%"
            },
            ".col-md-5": {
                msFlex: "0 0 41.666667%",
                flex: "0 0 41.666667%",
                maxWidth: "41.666667%"
            },
            ".col-md-6": { msFlex: "0 0 50%", flex: "0 0 50%", maxWidth: "50%" },
            ".col-md-7": {
                msFlex: "0 0 58.333333%",
                flex: "0 0 58.333333%",
                maxWidth: "58.333333%"
            },
            ".col-md-8": {
                msFlex: "0 0 66.666667%",
                flex: "0 0 66.666667%",
                maxWidth: "66.666667%"
            },
            ".col-md-9": { msFlex: "0 0 75%", flex: "0 0 75%", maxWidth: "75%" },
            ".col-md-10": {
                msFlex: "0 0 83.333333%",
                flex: "0 0 83.333333%",
                maxWidth: "83.333333%"
            },
            ".col-md-11": {
                msFlex: "0 0 91.666667%",
                flex: "0 0 91.666667%",
                maxWidth: "91.666667%"
            },
            ".col-md-12": { msFlex: "0 0 100%", flex: "0 0 100%", maxWidth: "100%" },
            ".order-md-first": { msFlexOrder: "-1", order: -1 },
            ".order-md-last": { msFlexOrder: "13", order: 13 },
            ".order-md-0": { msFlexOrder: "0", order: 0 },
            ".order-md-1": { msFlexOrder: "1", order: 1 },
            ".order-md-2": { msFlexOrder: "2", order: 2 },
            ".order-md-3": { msFlexOrder: "3", order: 3 },
            ".order-md-4": { msFlexOrder: "4", order: 4 },
            ".order-md-5": { msFlexOrder: "5", order: 5 },
            ".order-md-6": { msFlexOrder: "6", order: 6 },
            ".order-md-7": { msFlexOrder: "7", order: 7 },
            ".order-md-8": { msFlexOrder: "8", order: 8 },
            ".order-md-9": { msFlexOrder: "9", order: 9 },
            ".order-md-10": { msFlexOrder: "10", order: 10 },
            ".order-md-11": { msFlexOrder: "11", order: 11 },
            ".order-md-12": { msFlexOrder: "12", order: 12 },
            ".offset-md-0": { marginLeft: "0" },
            ".offset-md-1": { marginLeft: "8.333333%" },
            ".offset-md-2": { marginLeft: "16.666667%" },
            ".offset-md-3": { marginLeft: "25%" },
            ".offset-md-4": { marginLeft: "33.333333%" },
            ".offset-md-5": { marginLeft: "41.666667%" },
            ".offset-md-6": { marginLeft: "50%" },
            ".offset-md-7": { marginLeft: "58.333333%" },
            ".offset-md-8": { marginLeft: "66.666667%" },
            ".offset-md-9": { marginLeft: "75%" },
            ".offset-md-10": { marginLeft: "83.333333%" },
            ".offset-md-11": { marginLeft: "91.666667%" }
        },
        {
            ".dropdown-menu-md-left": { right: "auto", left: "0" },
            ".dropdown-menu-md-right": { right: "0", left: "auto" }
        },
        {
            ".navbar-expand-md": {
                msFlexFlow: "row nowrap",
                flexFlow: "row nowrap",
                msFlexPack: "start",
                justifyContent: "flex-start"
            },
            ".navbar-expand-md .navbar-nav": {
                msFlexDirection: "row",
                flexDirection: "row"
            },
            ".navbar-expand-md .navbar-nav .dropdown-menu": { position: "absolute" },
            ".navbar-expand-md .navbar-nav .nav-link": {
                paddingRight: "0.5rem",
                paddingLeft: "0.5rem"
            },
            ".navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl": {
                msFlexWrap: "nowrap",
                flexWrap: "nowrap"
            },
            ".navbar-expand-md .navbar-collapse": {
                display: ["-ms-flexbox !important", "flex !important"],
                msFlexPreferredSize: "auto",
                flexBasis: "auto"
            },
            ".navbar-expand-md .navbar-toggler": { display: "none" }
        },
        {
            ".list-group-horizontal-md": {
                msFlexDirection: "row",
                flexDirection: "row"
            },
            ".list-group-horizontal-md > .list-group-item:first-child": {
                borderBottomLeftRadius: "0.25rem",
                borderTopRightRadius: "0"
            },
            ".list-group-horizontal-md > .list-group-item:last-child": {
                borderTopRightRadius: "0.25rem",
                borderBottomLeftRadius: "0"
            },
            ".list-group-horizontal-md > .list-group-item.active": { marginTop: "0" },
            ".list-group-horizontal-md > .list-group-item + .list-group-item": {
                borderTopWidth: "1px",
                borderLeftWidth: "0"
            },
            ".list-group-horizontal-md > .list-group-item + .list-group-item.active": {
                marginLeft: "-1px",
                borderLeftWidth: "1px"
            }
        },
        {
            ".d-md-none": { display: "none !important" },
            ".d-md-inline": { display: "inline !important" },
            ".d-md-inline-block": { display: "inline-block !important" },
            ".d-md-block": { display: "block !important" },
            ".d-md-table": { display: "table !important" },
            ".d-md-table-row": { display: "table-row !important" },
            ".d-md-table-cell": { display: "table-cell !important" },
            ".d-md-flex": { display: ["-ms-flexbox !important", "flex !important"] },
            ".d-md-inline-flex": {
                display: ["-ms-inline-flexbox !important", "inline-flex !important"]
            }
        },
        {
            ".flex-md-row": {
                msFlexDirection: "row !important",
                flexDirection: "row !important"
            },
            ".flex-md-column": {
                msFlexDirection: "column !important",
                flexDirection: "column !important"
            },
            ".flex-md-row-reverse": {
                msFlexDirection: "row-reverse !important",
                flexDirection: "row-reverse !important"
            },
            ".flex-md-column-reverse": {
                msFlexDirection: "column-reverse !important",
                flexDirection: "column-reverse !important"
            },
            ".flex-md-wrap": {
                msFlexWrap: "wrap !important",
                flexWrap: "wrap !important"
            },
            ".flex-md-nowrap": {
                msFlexWrap: "nowrap !important",
                flexWrap: "nowrap !important"
            },
            ".flex-md-wrap-reverse": {
                msFlexWrap: "wrap-reverse !important",
                flexWrap: "wrap-reverse !important"
            },
            ".flex-md-fill": {
                msFlex: "1 1 auto !important",
                flex: "1 1 auto !important"
            },
            ".flex-md-grow-0": {
                msFlexPositive: "0 !important",
                flexGrow: "0 !important"
            },
            ".flex-md-grow-1": {
                msFlexPositive: "1 !important",
                flexGrow: "1 !important"
            },
            ".flex-md-shrink-0": {
                msFlexNegative: "0 !important",
                flexShrink: "0 !important"
            },
            ".flex-md-shrink-1": {
                msFlexNegative: "1 !important",
                flexShrink: "1 !important"
            },
            ".justify-content-md-start": {
                msFlexPack: "start !important",
                justifyContent: "flex-start !important"
            },
            ".justify-content-md-end": {
                msFlexPack: "end !important",
                justifyContent: "flex-end !important"
            },
            ".justify-content-md-center": {
                msFlexPack: "center !important",
                justifyContent: "center !important"
            },
            ".justify-content-md-between": {
                msFlexPack: "justify !important",
                justifyContent: "space-between !important"
            },
            ".justify-content-md-around": {
                msFlexPack: "distribute !important",
                justifyContent: "space-around !important"
            },
            ".align-items-md-start": {
                msFlexAlign: "start !important",
                alignItems: "flex-start !important"
            },
            ".align-items-md-end": {
                msFlexAlign: "end !important",
                alignItems: "flex-end !important"
            },
            ".align-items-md-center": {
                msFlexAlign: "center !important",
                alignItems: "center !important"
            },
            ".align-items-md-baseline": {
                msFlexAlign: "baseline !important",
                alignItems: "baseline !important"
            },
            ".align-items-md-stretch": {
                msFlexAlign: "stretch !important",
                alignItems: "stretch !important"
            },
            ".align-content-md-start": {
                msFlexLinePack: "start !important",
                alignContent: "flex-start !important"
            },
            ".align-content-md-end": {
                msFlexLinePack: "end !important",
                alignContent: "flex-end !important"
            },
            ".align-content-md-center": {
                msFlexLinePack: "center !important",
                alignContent: "center !important"
            },
            ".align-content-md-between": {
                msFlexLinePack: "justify !important",
                alignContent: "space-between !important"
            },
            ".align-content-md-around": {
                msFlexLinePack: "distribute !important",
                alignContent: "space-around !important"
            },
            ".align-content-md-stretch": {
                msFlexLinePack: "stretch !important",
                alignContent: "stretch !important"
            },
            ".align-self-md-auto": {
                msFlexItemAlign: "auto !important",
                alignSelf: "auto !important"
            },
            ".align-self-md-start": {
                msFlexItemAlign: "start !important",
                alignSelf: "flex-start !important"
            },
            ".align-self-md-end": {
                msFlexItemAlign: "end !important",
                alignSelf: "flex-end !important"
            },
            ".align-self-md-center": {
                msFlexItemAlign: "center !important",
                alignSelf: "center !important"
            },
            ".align-self-md-baseline": {
                msFlexItemAlign: "baseline !important",
                alignSelf: "baseline !important"
            },
            ".align-self-md-stretch": {
                msFlexItemAlign: "stretch !important",
                alignSelf: "stretch !important"
            }
        },
        {
            ".float-md-left": { cssFloat: "left !important" },
            ".float-md-right": { cssFloat: "right !important" },
            ".float-md-none": { cssFloat: "none !important" }
        },
        {
            ".m-md-0": { margin: "0 !important" },
            ".mt-md-0,\n  .my-md-0": { marginTop: "0 !important" },
            ".mr-md-0,\n  .mx-md-0": { marginRight: "0 !important" },
            ".mb-md-0,\n  .my-md-0": { marginBottom: "0 !important" },
            ".ml-md-0,\n  .mx-md-0": { marginLeft: "0 !important" },
            ".m-md-1": { margin: "0.25rem !important" },
            ".mt-md-1,\n  .my-md-1": { marginTop: "0.25rem !important" },
            ".mr-md-1,\n  .mx-md-1": { marginRight: "0.25rem !important" },
            ".mb-md-1,\n  .my-md-1": { marginBottom: "0.25rem !important" },
            ".ml-md-1,\n  .mx-md-1": { marginLeft: "0.25rem !important" },
            ".m-md-2": { margin: "0.5rem !important" },
            ".mt-md-2,\n  .my-md-2": { marginTop: "0.5rem !important" },
            ".mr-md-2,\n  .mx-md-2": { marginRight: "0.5rem !important" },
            ".mb-md-2,\n  .my-md-2": { marginBottom: "0.5rem !important" },
            ".ml-md-2,\n  .mx-md-2": { marginLeft: "0.5rem !important" },
            ".m-md-3": { margin: "1rem !important" },
            ".mt-md-3,\n  .my-md-3": { marginTop: "1rem !important" },
            ".mr-md-3,\n  .mx-md-3": { marginRight: "1rem !important" },
            ".mb-md-3,\n  .my-md-3": { marginBottom: "1rem !important" },
            ".ml-md-3,\n  .mx-md-3": { marginLeft: "1rem !important" },
            ".m-md-4": { margin: "1.5rem !important" },
            ".mt-md-4,\n  .my-md-4": { marginTop: "1.5rem !important" },
            ".mr-md-4,\n  .mx-md-4": { marginRight: "1.5rem !important" },
            ".mb-md-4,\n  .my-md-4": { marginBottom: "1.5rem !important" },
            ".ml-md-4,\n  .mx-md-4": { marginLeft: "1.5rem !important" },
            ".m-md-5": { margin: "3rem !important" },
            ".mt-md-5,\n  .my-md-5": { marginTop: "3rem !important" },
            ".mr-md-5,\n  .mx-md-5": { marginRight: "3rem !important" },
            ".mb-md-5,\n  .my-md-5": { marginBottom: "3rem !important" },
            ".ml-md-5,\n  .mx-md-5": { marginLeft: "3rem !important" },
            ".p-md-0": { padding: "0 !important" },
            ".pt-md-0,\n  .py-md-0": { paddingTop: "0 !important" },
            ".pr-md-0,\n  .px-md-0": { paddingRight: "0 !important" },
            ".pb-md-0,\n  .py-md-0": { paddingBottom: "0 !important" },
            ".pl-md-0,\n  .px-md-0": { paddingLeft: "0 !important" },
            ".p-md-1": { padding: "0.25rem !important" },
            ".pt-md-1,\n  .py-md-1": { paddingTop: "0.25rem !important" },
            ".pr-md-1,\n  .px-md-1": { paddingRight: "0.25rem !important" },
            ".pb-md-1,\n  .py-md-1": { paddingBottom: "0.25rem !important" },
            ".pl-md-1,\n  .px-md-1": { paddingLeft: "0.25rem !important" },
            ".p-md-2": { padding: "0.5rem !important" },
            ".pt-md-2,\n  .py-md-2": { paddingTop: "0.5rem !important" },
            ".pr-md-2,\n  .px-md-2": { paddingRight: "0.5rem !important" },
            ".pb-md-2,\n  .py-md-2": { paddingBottom: "0.5rem !important" },
            ".pl-md-2,\n  .px-md-2": { paddingLeft: "0.5rem !important" },
            ".p-md-3": { padding: "1rem !important" },
            ".pt-md-3,\n  .py-md-3": { paddingTop: "1rem !important" },
            ".pr-md-3,\n  .px-md-3": { paddingRight: "1rem !important" },
            ".pb-md-3,\n  .py-md-3": { paddingBottom: "1rem !important" },
            ".pl-md-3,\n  .px-md-3": { paddingLeft: "1rem !important" },
            ".p-md-4": { padding: "1.5rem !important" },
            ".pt-md-4,\n  .py-md-4": { paddingTop: "1.5rem !important" },
            ".pr-md-4,\n  .px-md-4": { paddingRight: "1.5rem !important" },
            ".pb-md-4,\n  .py-md-4": { paddingBottom: "1.5rem !important" },
            ".pl-md-4,\n  .px-md-4": { paddingLeft: "1.5rem !important" },
            ".p-md-5": { padding: "3rem !important" },
            ".pt-md-5,\n  .py-md-5": { paddingTop: "3rem !important" },
            ".pr-md-5,\n  .px-md-5": { paddingRight: "3rem !important" },
            ".pb-md-5,\n  .py-md-5": { paddingBottom: "3rem !important" },
            ".pl-md-5,\n  .px-md-5": { paddingLeft: "3rem !important" },
            ".m-md-n1": { margin: "-0.25rem !important" },
            ".mt-md-n1,\n  .my-md-n1": { marginTop: "-0.25rem !important" },
            ".mr-md-n1,\n  .mx-md-n1": { marginRight: "-0.25rem !important" },
            ".mb-md-n1,\n  .my-md-n1": { marginBottom: "-0.25rem !important" },
            ".ml-md-n1,\n  .mx-md-n1": { marginLeft: "-0.25rem !important" },
            ".m-md-n2": { margin: "-0.5rem !important" },
            ".mt-md-n2,\n  .my-md-n2": { marginTop: "-0.5rem !important" },
            ".mr-md-n2,\n  .mx-md-n2": { marginRight: "-0.5rem !important" },
            ".mb-md-n2,\n  .my-md-n2": { marginBottom: "-0.5rem !important" },
            ".ml-md-n2,\n  .mx-md-n2": { marginLeft: "-0.5rem !important" },
            ".m-md-n3": { margin: "-1rem !important" },
            ".mt-md-n3,\n  .my-md-n3": { marginTop: "-1rem !important" },
            ".mr-md-n3,\n  .mx-md-n3": { marginRight: "-1rem !important" },
            ".mb-md-n3,\n  .my-md-n3": { marginBottom: "-1rem !important" },
            ".ml-md-n3,\n  .mx-md-n3": { marginLeft: "-1rem !important" },
            ".m-md-n4": { margin: "-1.5rem !important" },
            ".mt-md-n4,\n  .my-md-n4": { marginTop: "-1.5rem !important" },
            ".mr-md-n4,\n  .mx-md-n4": { marginRight: "-1.5rem !important" },
            ".mb-md-n4,\n  .my-md-n4": { marginBottom: "-1.5rem !important" },
            ".ml-md-n4,\n  .mx-md-n4": { marginLeft: "-1.5rem !important" },
            ".m-md-n5": { margin: "-3rem !important" },
            ".mt-md-n5,\n  .my-md-n5": { marginTop: "-3rem !important" },
            ".mr-md-n5,\n  .mx-md-n5": { marginRight: "-3rem !important" },
            ".mb-md-n5,\n  .my-md-n5": { marginBottom: "-3rem !important" },
            ".ml-md-n5,\n  .mx-md-n5": { marginLeft: "-3rem !important" },
            ".m-md-auto": { margin: "auto !important" },
            ".mt-md-auto,\n  .my-md-auto": { marginTop: "auto !important" },
            ".mr-md-auto,\n  .mx-md-auto": { marginRight: "auto !important" },
            ".mb-md-auto,\n  .my-md-auto": { marginBottom: "auto !important" },
            ".ml-md-auto,\n  .mx-md-auto": { marginLeft: "auto !important" }
        },
        {
            ".text-md-left": { textAlign: "left !important" },
            ".text-md-right": { textAlign: "right !important" },
            ".text-md-center": { textAlign: "center !important" }
        }
    ],
    "@media (min-width: 992px)": [
        {
            ".container, .container-sm, .container-md, .container-lg": {
                maxWidth: "960px"
            }
        },
        {
            ".col-lg": {
                msFlexPreferredSize: "0",
                flexBasis: "0",
                msFlexPositive: "1",
                flexGrow: 1,
                maxWidth: "100%"
            },
            ".row-cols-lg-1 > *": {
                msFlex: "0 0 100%",
                flex: "0 0 100%",
                maxWidth: "100%"
            },
            ".row-cols-lg-2 > *": {
                msFlex: "0 0 50%",
                flex: "0 0 50%",
                maxWidth: "50%"
            },
            ".row-cols-lg-3 > *": {
                msFlex: "0 0 33.333333%",
                flex: "0 0 33.333333%",
                maxWidth: "33.333333%"
            },
            ".row-cols-lg-4 > *": {
                msFlex: "0 0 25%",
                flex: "0 0 25%",
                maxWidth: "25%"
            },
            ".row-cols-lg-5 > *": {
                msFlex: "0 0 20%",
                flex: "0 0 20%",
                maxWidth: "20%"
            },
            ".row-cols-lg-6 > *": {
                msFlex: "0 0 16.666667%",
                flex: "0 0 16.666667%",
                maxWidth: "16.666667%"
            },
            ".col-lg-auto": {
                msFlex: "0 0 auto",
                flex: "0 0 auto",
                width: "auto",
                maxWidth: "100%"
            },
            ".col-lg-1": {
                msFlex: "0 0 8.333333%",
                flex: "0 0 8.333333%",
                maxWidth: "8.333333%"
            },
            ".col-lg-2": {
                msFlex: "0 0 16.666667%",
                flex: "0 0 16.666667%",
                maxWidth: "16.666667%"
            },
            ".col-lg-3": { msFlex: "0 0 25%", flex: "0 0 25%", maxWidth: "25%" },
            ".col-lg-4": {
                msFlex: "0 0 33.333333%",
                flex: "0 0 33.333333%",
                maxWidth: "33.333333%"
            },
            ".col-lg-5": {
                msFlex: "0 0 41.666667%",
                flex: "0 0 41.666667%",
                maxWidth: "41.666667%"
            },
            ".col-lg-6": { msFlex: "0 0 50%", flex: "0 0 50%", maxWidth: "50%" },
            ".col-lg-7": {
                msFlex: "0 0 58.333333%",
                flex: "0 0 58.333333%",
                maxWidth: "58.333333%"
            },
            ".col-lg-8": {
                msFlex: "0 0 66.666667%",
                flex: "0 0 66.666667%",
                maxWidth: "66.666667%"
            },
            ".col-lg-9": { msFlex: "0 0 75%", flex: "0 0 75%", maxWidth: "75%" },
            ".col-lg-10": {
                msFlex: "0 0 83.333333%",
                flex: "0 0 83.333333%",
                maxWidth: "83.333333%"
            },
            ".col-lg-11": {
                msFlex: "0 0 91.666667%",
                flex: "0 0 91.666667%",
                maxWidth: "91.666667%"
            },
            ".col-lg-12": { msFlex: "0 0 100%", flex: "0 0 100%", maxWidth: "100%" },
            ".order-lg-first": { msFlexOrder: "-1", order: -1 },
            ".order-lg-last": { msFlexOrder: "13", order: 13 },
            ".order-lg-0": { msFlexOrder: "0", order: 0 },
            ".order-lg-1": { msFlexOrder: "1", order: 1 },
            ".order-lg-2": { msFlexOrder: "2", order: 2 },
            ".order-lg-3": { msFlexOrder: "3", order: 3 },
            ".order-lg-4": { msFlexOrder: "4", order: 4 },
            ".order-lg-5": { msFlexOrder: "5", order: 5 },
            ".order-lg-6": { msFlexOrder: "6", order: 6 },
            ".order-lg-7": { msFlexOrder: "7", order: 7 },
            ".order-lg-8": { msFlexOrder: "8", order: 8 },
            ".order-lg-9": { msFlexOrder: "9", order: 9 },
            ".order-lg-10": { msFlexOrder: "10", order: 10 },
            ".order-lg-11": { msFlexOrder: "11", order: 11 },
            ".order-lg-12": { msFlexOrder: "12", order: 12 },
            ".offset-lg-0": { marginLeft: "0" },
            ".offset-lg-1": { marginLeft: "8.333333%" },
            ".offset-lg-2": { marginLeft: "16.666667%" },
            ".offset-lg-3": { marginLeft: "25%" },
            ".offset-lg-4": { marginLeft: "33.333333%" },
            ".offset-lg-5": { marginLeft: "41.666667%" },
            ".offset-lg-6": { marginLeft: "50%" },
            ".offset-lg-7": { marginLeft: "58.333333%" },
            ".offset-lg-8": { marginLeft: "66.666667%" },
            ".offset-lg-9": { marginLeft: "75%" },
            ".offset-lg-10": { marginLeft: "83.333333%" },
            ".offset-lg-11": { marginLeft: "91.666667%" }
        },
        {
            ".dropdown-menu-lg-left": { right: "auto", left: "0" },
            ".dropdown-menu-lg-right": { right: "0", left: "auto" }
        },
        {
            ".navbar-expand-lg": {
                msFlexFlow: "row nowrap",
                flexFlow: "row nowrap",
                msFlexPack: "start",
                justifyContent: "flex-start"
            },
            ".navbar-expand-lg .navbar-nav": {
                msFlexDirection: "row",
                flexDirection: "row"
            },
            ".navbar-expand-lg .navbar-nav .dropdown-menu": { position: "absolute" },
            ".navbar-expand-lg .navbar-nav .nav-link": {
                paddingRight: "0.5rem",
                paddingLeft: "0.5rem"
            },
            ".navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl": {
                msFlexWrap: "nowrap",
                flexWrap: "nowrap"
            },
            ".navbar-expand-lg .navbar-collapse": {
                display: ["-ms-flexbox !important", "flex !important"],
                msFlexPreferredSize: "auto",
                flexBasis: "auto"
            },
            ".navbar-expand-lg .navbar-toggler": { display: "none" }
        },
        {
            ".list-group-horizontal-lg": {
                msFlexDirection: "row",
                flexDirection: "row"
            },
            ".list-group-horizontal-lg > .list-group-item:first-child": {
                borderBottomLeftRadius: "0.25rem",
                borderTopRightRadius: "0"
            },
            ".list-group-horizontal-lg > .list-group-item:last-child": {
                borderTopRightRadius: "0.25rem",
                borderBottomLeftRadius: "0"
            },
            ".list-group-horizontal-lg > .list-group-item.active": { marginTop: "0" },
            ".list-group-horizontal-lg > .list-group-item + .list-group-item": {
                borderTopWidth: "1px",
                borderLeftWidth: "0"
            },
            ".list-group-horizontal-lg > .list-group-item + .list-group-item.active": {
                marginLeft: "-1px",
                borderLeftWidth: "1px"
            }
        },
        { ".modal-lg,\n  .modal-xl": { maxWidth: "800px" } },
        {
            ".d-lg-none": { display: "none !important" },
            ".d-lg-inline": { display: "inline !important" },
            ".d-lg-inline-block": { display: "inline-block !important" },
            ".d-lg-block": { display: "block !important" },
            ".d-lg-table": { display: "table !important" },
            ".d-lg-table-row": { display: "table-row !important" },
            ".d-lg-table-cell": { display: "table-cell !important" },
            ".d-lg-flex": { display: ["-ms-flexbox !important", "flex !important"] },
            ".d-lg-inline-flex": {
                display: ["-ms-inline-flexbox !important", "inline-flex !important"]
            }
        },
        {
            ".flex-lg-row": {
                msFlexDirection: "row !important",
                flexDirection: "row !important"
            },
            ".flex-lg-column": {
                msFlexDirection: "column !important",
                flexDirection: "column !important"
            },
            ".flex-lg-row-reverse": {
                msFlexDirection: "row-reverse !important",
                flexDirection: "row-reverse !important"
            },
            ".flex-lg-column-reverse": {
                msFlexDirection: "column-reverse !important",
                flexDirection: "column-reverse !important"
            },
            ".flex-lg-wrap": {
                msFlexWrap: "wrap !important",
                flexWrap: "wrap !important"
            },
            ".flex-lg-nowrap": {
                msFlexWrap: "nowrap !important",
                flexWrap: "nowrap !important"
            },
            ".flex-lg-wrap-reverse": {
                msFlexWrap: "wrap-reverse !important",
                flexWrap: "wrap-reverse !important"
            },
            ".flex-lg-fill": {
                msFlex: "1 1 auto !important",
                flex: "1 1 auto !important"
            },
            ".flex-lg-grow-0": {
                msFlexPositive: "0 !important",
                flexGrow: "0 !important"
            },
            ".flex-lg-grow-1": {
                msFlexPositive: "1 !important",
                flexGrow: "1 !important"
            },
            ".flex-lg-shrink-0": {
                msFlexNegative: "0 !important",
                flexShrink: "0 !important"
            },
            ".flex-lg-shrink-1": {
                msFlexNegative: "1 !important",
                flexShrink: "1 !important"
            },
            ".justify-content-lg-start": {
                msFlexPack: "start !important",
                justifyContent: "flex-start !important"
            },
            ".justify-content-lg-end": {
                msFlexPack: "end !important",
                justifyContent: "flex-end !important"
            },
            ".justify-content-lg-center": {
                msFlexPack: "center !important",
                justifyContent: "center !important"
            },
            ".justify-content-lg-between": {
                msFlexPack: "justify !important",
                justifyContent: "space-between !important"
            },
            ".justify-content-lg-around": {
                msFlexPack: "distribute !important",
                justifyContent: "space-around !important"
            },
            ".align-items-lg-start": {
                msFlexAlign: "start !important",
                alignItems: "flex-start !important"
            },
            ".align-items-lg-end": {
                msFlexAlign: "end !important",
                alignItems: "flex-end !important"
            },
            ".align-items-lg-center": {
                msFlexAlign: "center !important",
                alignItems: "center !important"
            },
            ".align-items-lg-baseline": {
                msFlexAlign: "baseline !important",
                alignItems: "baseline !important"
            },
            ".align-items-lg-stretch": {
                msFlexAlign: "stretch !important",
                alignItems: "stretch !important"
            },
            ".align-content-lg-start": {
                msFlexLinePack: "start !important",
                alignContent: "flex-start !important"
            },
            ".align-content-lg-end": {
                msFlexLinePack: "end !important",
                alignContent: "flex-end !important"
            },
            ".align-content-lg-center": {
                msFlexLinePack: "center !important",
                alignContent: "center !important"
            },
            ".align-content-lg-between": {
                msFlexLinePack: "justify !important",
                alignContent: "space-between !important"
            },
            ".align-content-lg-around": {
                msFlexLinePack: "distribute !important",
                alignContent: "space-around !important"
            },
            ".align-content-lg-stretch": {
                msFlexLinePack: "stretch !important",
                alignContent: "stretch !important"
            },
            ".align-self-lg-auto": {
                msFlexItemAlign: "auto !important",
                alignSelf: "auto !important"
            },
            ".align-self-lg-start": {
                msFlexItemAlign: "start !important",
                alignSelf: "flex-start !important"
            },
            ".align-self-lg-end": {
                msFlexItemAlign: "end !important",
                alignSelf: "flex-end !important"
            },
            ".align-self-lg-center": {
                msFlexItemAlign: "center !important",
                alignSelf: "center !important"
            },
            ".align-self-lg-baseline": {
                msFlexItemAlign: "baseline !important",
                alignSelf: "baseline !important"
            },
            ".align-self-lg-stretch": {
                msFlexItemAlign: "stretch !important",
                alignSelf: "stretch !important"
            }
        },
        {
            ".float-lg-left": { cssFloat: "left !important" },
            ".float-lg-right": { cssFloat: "right !important" },
            ".float-lg-none": { cssFloat: "none !important" }
        },
        {
            ".m-lg-0": { margin: "0 !important" },
            ".mt-lg-0,\n  .my-lg-0": { marginTop: "0 !important" },
            ".mr-lg-0,\n  .mx-lg-0": { marginRight: "0 !important" },
            ".mb-lg-0,\n  .my-lg-0": { marginBottom: "0 !important" },
            ".ml-lg-0,\n  .mx-lg-0": { marginLeft: "0 !important" },
            ".m-lg-1": { margin: "0.25rem !important" },
            ".mt-lg-1,\n  .my-lg-1": { marginTop: "0.25rem !important" },
            ".mr-lg-1,\n  .mx-lg-1": { marginRight: "0.25rem !important" },
            ".mb-lg-1,\n  .my-lg-1": { marginBottom: "0.25rem !important" },
            ".ml-lg-1,\n  .mx-lg-1": { marginLeft: "0.25rem !important" },
            ".m-lg-2": { margin: "0.5rem !important" },
            ".mt-lg-2,\n  .my-lg-2": { marginTop: "0.5rem !important" },
            ".mr-lg-2,\n  .mx-lg-2": { marginRight: "0.5rem !important" },
            ".mb-lg-2,\n  .my-lg-2": { marginBottom: "0.5rem !important" },
            ".ml-lg-2,\n  .mx-lg-2": { marginLeft: "0.5rem !important" },
            ".m-lg-3": { margin: "1rem !important" },
            ".mt-lg-3,\n  .my-lg-3": { marginTop: "1rem !important" },
            ".mr-lg-3,\n  .mx-lg-3": { marginRight: "1rem !important" },
            ".mb-lg-3,\n  .my-lg-3": { marginBottom: "1rem !important" },
            ".ml-lg-3,\n  .mx-lg-3": { marginLeft: "1rem !important" },
            ".m-lg-4": { margin: "1.5rem !important" },
            ".mt-lg-4,\n  .my-lg-4": { marginTop: "1.5rem !important" },
            ".mr-lg-4,\n  .mx-lg-4": { marginRight: "1.5rem !important" },
            ".mb-lg-4,\n  .my-lg-4": { marginBottom: "1.5rem !important" },
            ".ml-lg-4,\n  .mx-lg-4": { marginLeft: "1.5rem !important" },
            ".m-lg-5": { margin: "3rem !important" },
            ".mt-lg-5,\n  .my-lg-5": { marginTop: "3rem !important" },
            ".mr-lg-5,\n  .mx-lg-5": { marginRight: "3rem !important" },
            ".mb-lg-5,\n  .my-lg-5": { marginBottom: "3rem !important" },
            ".ml-lg-5,\n  .mx-lg-5": { marginLeft: "3rem !important" },
            ".p-lg-0": { padding: "0 !important" },
            ".pt-lg-0,\n  .py-lg-0": { paddingTop: "0 !important" },
            ".pr-lg-0,\n  .px-lg-0": { paddingRight: "0 !important" },
            ".pb-lg-0,\n  .py-lg-0": { paddingBottom: "0 !important" },
            ".pl-lg-0,\n  .px-lg-0": { paddingLeft: "0 !important" },
            ".p-lg-1": { padding: "0.25rem !important" },
            ".pt-lg-1,\n  .py-lg-1": { paddingTop: "0.25rem !important" },
            ".pr-lg-1,\n  .px-lg-1": { paddingRight: "0.25rem !important" },
            ".pb-lg-1,\n  .py-lg-1": { paddingBottom: "0.25rem !important" },
            ".pl-lg-1,\n  .px-lg-1": { paddingLeft: "0.25rem !important" },
            ".p-lg-2": { padding: "0.5rem !important" },
            ".pt-lg-2,\n  .py-lg-2": { paddingTop: "0.5rem !important" },
            ".pr-lg-2,\n  .px-lg-2": { paddingRight: "0.5rem !important" },
            ".pb-lg-2,\n  .py-lg-2": { paddingBottom: "0.5rem !important" },
            ".pl-lg-2,\n  .px-lg-2": { paddingLeft: "0.5rem !important" },
            ".p-lg-3": { padding: "1rem !important" },
            ".pt-lg-3,\n  .py-lg-3": { paddingTop: "1rem !important" },
            ".pr-lg-3,\n  .px-lg-3": { paddingRight: "1rem !important" },
            ".pb-lg-3,\n  .py-lg-3": { paddingBottom: "1rem !important" },
            ".pl-lg-3,\n  .px-lg-3": { paddingLeft: "1rem !important" },
            ".p-lg-4": { padding: "1.5rem !important" },
            ".pt-lg-4,\n  .py-lg-4": { paddingTop: "1.5rem !important" },
            ".pr-lg-4,\n  .px-lg-4": { paddingRight: "1.5rem !important" },
            ".pb-lg-4,\n  .py-lg-4": { paddingBottom: "1.5rem !important" },
            ".pl-lg-4,\n  .px-lg-4": { paddingLeft: "1.5rem !important" },
            ".p-lg-5": { padding: "3rem !important" },
            ".pt-lg-5,\n  .py-lg-5": { paddingTop: "3rem !important" },
            ".pr-lg-5,\n  .px-lg-5": { paddingRight: "3rem !important" },
            ".pb-lg-5,\n  .py-lg-5": { paddingBottom: "3rem !important" },
            ".pl-lg-5,\n  .px-lg-5": { paddingLeft: "3rem !important" },
            ".m-lg-n1": { margin: "-0.25rem !important" },
            ".mt-lg-n1,\n  .my-lg-n1": { marginTop: "-0.25rem !important" },
            ".mr-lg-n1,\n  .mx-lg-n1": { marginRight: "-0.25rem !important" },
            ".mb-lg-n1,\n  .my-lg-n1": { marginBottom: "-0.25rem !important" },
            ".ml-lg-n1,\n  .mx-lg-n1": { marginLeft: "-0.25rem !important" },
            ".m-lg-n2": { margin: "-0.5rem !important" },
            ".mt-lg-n2,\n  .my-lg-n2": { marginTop: "-0.5rem !important" },
            ".mr-lg-n2,\n  .mx-lg-n2": { marginRight: "-0.5rem !important" },
            ".mb-lg-n2,\n  .my-lg-n2": { marginBottom: "-0.5rem !important" },
            ".ml-lg-n2,\n  .mx-lg-n2": { marginLeft: "-0.5rem !important" },
            ".m-lg-n3": { margin: "-1rem !important" },
            ".mt-lg-n3,\n  .my-lg-n3": { marginTop: "-1rem !important" },
            ".mr-lg-n3,\n  .mx-lg-n3": { marginRight: "-1rem !important" },
            ".mb-lg-n3,\n  .my-lg-n3": { marginBottom: "-1rem !important" },
            ".ml-lg-n3,\n  .mx-lg-n3": { marginLeft: "-1rem !important" },
            ".m-lg-n4": { margin: "-1.5rem !important" },
            ".mt-lg-n4,\n  .my-lg-n4": { marginTop: "-1.5rem !important" },
            ".mr-lg-n4,\n  .mx-lg-n4": { marginRight: "-1.5rem !important" },
            ".mb-lg-n4,\n  .my-lg-n4": { marginBottom: "-1.5rem !important" },
            ".ml-lg-n4,\n  .mx-lg-n4": { marginLeft: "-1.5rem !important" },
            ".m-lg-n5": { margin: "-3rem !important" },
            ".mt-lg-n5,\n  .my-lg-n5": { marginTop: "-3rem !important" },
            ".mr-lg-n5,\n  .mx-lg-n5": { marginRight: "-3rem !important" },
            ".mb-lg-n5,\n  .my-lg-n5": { marginBottom: "-3rem !important" },
            ".ml-lg-n5,\n  .mx-lg-n5": { marginLeft: "-3rem !important" },
            ".m-lg-auto": { margin: "auto !important" },
            ".mt-lg-auto,\n  .my-lg-auto": { marginTop: "auto !important" },
            ".mr-lg-auto,\n  .mx-lg-auto": { marginRight: "auto !important" },
            ".mb-lg-auto,\n  .my-lg-auto": { marginBottom: "auto !important" },
            ".ml-lg-auto,\n  .mx-lg-auto": { marginLeft: "auto !important" }
        },
        {
            ".text-lg-left": { textAlign: "left !important" },
            ".text-lg-right": { textAlign: "right !important" },
            ".text-lg-center": { textAlign: "center !important" }
        }
    ],
    "@media (min-width: 1200px)": [
        {
            ".container, .container-sm, .container-md, .container-lg, .container-xl": {
                maxWidth: "1140px"
            }
        },
        {
            ".col-xl": {
                msFlexPreferredSize: "0",
                flexBasis: "0",
                msFlexPositive: "1",
                flexGrow: 1,
                maxWidth: "100%"
            },
            ".row-cols-xl-1 > *": {
                msFlex: "0 0 100%",
                flex: "0 0 100%",
                maxWidth: "100%"
            },
            ".row-cols-xl-2 > *": {
                msFlex: "0 0 50%",
                flex: "0 0 50%",
                maxWidth: "50%"
            },
            ".row-cols-xl-3 > *": {
                msFlex: "0 0 33.333333%",
                flex: "0 0 33.333333%",
                maxWidth: "33.333333%"
            },
            ".row-cols-xl-4 > *": {
                msFlex: "0 0 25%",
                flex: "0 0 25%",
                maxWidth: "25%"
            },
            ".row-cols-xl-5 > *": {
                msFlex: "0 0 20%",
                flex: "0 0 20%",
                maxWidth: "20%"
            },
            ".row-cols-xl-6 > *": {
                msFlex: "0 0 16.666667%",
                flex: "0 0 16.666667%",
                maxWidth: "16.666667%"
            },
            ".col-xl-auto": {
                msFlex: "0 0 auto",
                flex: "0 0 auto",
                width: "auto",
                maxWidth: "100%"
            },
            ".col-xl-1": {
                msFlex: "0 0 8.333333%",
                flex: "0 0 8.333333%",
                maxWidth: "8.333333%"
            },
            ".col-xl-2": {
                msFlex: "0 0 16.666667%",
                flex: "0 0 16.666667%",
                maxWidth: "16.666667%"
            },
            ".col-xl-3": { msFlex: "0 0 25%", flex: "0 0 25%", maxWidth: "25%" },
            ".col-xl-4": {
                msFlex: "0 0 33.333333%",
                flex: "0 0 33.333333%",
                maxWidth: "33.333333%"
            },
            ".col-xl-5": {
                msFlex: "0 0 41.666667%",
                flex: "0 0 41.666667%",
                maxWidth: "41.666667%"
            },
            ".col-xl-6": { msFlex: "0 0 50%", flex: "0 0 50%", maxWidth: "50%" },
            ".col-xl-7": {
                msFlex: "0 0 58.333333%",
                flex: "0 0 58.333333%",
                maxWidth: "58.333333%"
            },
            ".col-xl-8": {
                msFlex: "0 0 66.666667%",
                flex: "0 0 66.666667%",
                maxWidth: "66.666667%"
            },
            ".col-xl-9": { msFlex: "0 0 75%", flex: "0 0 75%", maxWidth: "75%" },
            ".col-xl-10": {
                msFlex: "0 0 83.333333%",
                flex: "0 0 83.333333%",
                maxWidth: "83.333333%"
            },
            ".col-xl-11": {
                msFlex: "0 0 91.666667%",
                flex: "0 0 91.666667%",
                maxWidth: "91.666667%"
            },
            ".col-xl-12": { msFlex: "0 0 100%", flex: "0 0 100%", maxWidth: "100%" },
            ".order-xl-first": { msFlexOrder: "-1", order: -1 },
            ".order-xl-last": { msFlexOrder: "13", order: 13 },
            ".order-xl-0": { msFlexOrder: "0", order: 0 },
            ".order-xl-1": { msFlexOrder: "1", order: 1 },
            ".order-xl-2": { msFlexOrder: "2", order: 2 },
            ".order-xl-3": { msFlexOrder: "3", order: 3 },
            ".order-xl-4": { msFlexOrder: "4", order: 4 },
            ".order-xl-5": { msFlexOrder: "5", order: 5 },
            ".order-xl-6": { msFlexOrder: "6", order: 6 },
            ".order-xl-7": { msFlexOrder: "7", order: 7 },
            ".order-xl-8": { msFlexOrder: "8", order: 8 },
            ".order-xl-9": { msFlexOrder: "9", order: 9 },
            ".order-xl-10": { msFlexOrder: "10", order: 10 },
            ".order-xl-11": { msFlexOrder: "11", order: 11 },
            ".order-xl-12": { msFlexOrder: "12", order: 12 },
            ".offset-xl-0": { marginLeft: "0" },
            ".offset-xl-1": { marginLeft: "8.333333%" },
            ".offset-xl-2": { marginLeft: "16.666667%" },
            ".offset-xl-3": { marginLeft: "25%" },
            ".offset-xl-4": { marginLeft: "33.333333%" },
            ".offset-xl-5": { marginLeft: "41.666667%" },
            ".offset-xl-6": { marginLeft: "50%" },
            ".offset-xl-7": { marginLeft: "58.333333%" },
            ".offset-xl-8": { marginLeft: "66.666667%" },
            ".offset-xl-9": { marginLeft: "75%" },
            ".offset-xl-10": { marginLeft: "83.333333%" },
            ".offset-xl-11": { marginLeft: "91.666667%" }
        },
        {
            ".dropdown-menu-xl-left": { right: "auto", left: "0" },
            ".dropdown-menu-xl-right": { right: "0", left: "auto" }
        },
        {
            ".navbar-expand-xl": {
                msFlexFlow: "row nowrap",
                flexFlow: "row nowrap",
                msFlexPack: "start",
                justifyContent: "flex-start"
            },
            ".navbar-expand-xl .navbar-nav": {
                msFlexDirection: "row",
                flexDirection: "row"
            },
            ".navbar-expand-xl .navbar-nav .dropdown-menu": { position: "absolute" },
            ".navbar-expand-xl .navbar-nav .nav-link": {
                paddingRight: "0.5rem",
                paddingLeft: "0.5rem"
            },
            ".navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl": {
                msFlexWrap: "nowrap",
                flexWrap: "nowrap"
            },
            ".navbar-expand-xl .navbar-collapse": {
                display: ["-ms-flexbox !important", "flex !important"],
                msFlexPreferredSize: "auto",
                flexBasis: "auto"
            },
            ".navbar-expand-xl .navbar-toggler": { display: "none" }
        },
        {
            ".list-group-horizontal-xl": {
                msFlexDirection: "row",
                flexDirection: "row"
            },
            ".list-group-horizontal-xl > .list-group-item:first-child": {
                borderBottomLeftRadius: "0.25rem",
                borderTopRightRadius: "0"
            },
            ".list-group-horizontal-xl > .list-group-item:last-child": {
                borderTopRightRadius: "0.25rem",
                borderBottomLeftRadius: "0"
            },
            ".list-group-horizontal-xl > .list-group-item.active": { marginTop: "0" },
            ".list-group-horizontal-xl > .list-group-item + .list-group-item": {
                borderTopWidth: "1px",
                borderLeftWidth: "0"
            },
            ".list-group-horizontal-xl > .list-group-item + .list-group-item.active": {
                marginLeft: "-1px",
                borderLeftWidth: "1px"
            }
        },
        { ".modal-xl": { maxWidth: "1140px" } },
        {
            ".d-xl-none": { display: "none !important" },
            ".d-xl-inline": { display: "inline !important" },
            ".d-xl-inline-block": { display: "inline-block !important" },
            ".d-xl-block": { display: "block !important" },
            ".d-xl-table": { display: "table !important" },
            ".d-xl-table-row": { display: "table-row !important" },
            ".d-xl-table-cell": { display: "table-cell !important" },
            ".d-xl-flex": { display: ["-ms-flexbox !important", "flex !important"] },
            ".d-xl-inline-flex": {
                display: ["-ms-inline-flexbox !important", "inline-flex !important"]
            }
        },
        {
            ".flex-xl-row": {
                msFlexDirection: "row !important",
                flexDirection: "row !important"
            },
            ".flex-xl-column": {
                msFlexDirection: "column !important",
                flexDirection: "column !important"
            },
            ".flex-xl-row-reverse": {
                msFlexDirection: "row-reverse !important",
                flexDirection: "row-reverse !important"
            },
            ".flex-xl-column-reverse": {
                msFlexDirection: "column-reverse !important",
                flexDirection: "column-reverse !important"
            },
            ".flex-xl-wrap": {
                msFlexWrap: "wrap !important",
                flexWrap: "wrap !important"
            },
            ".flex-xl-nowrap": {
                msFlexWrap: "nowrap !important",
                flexWrap: "nowrap !important"
            },
            ".flex-xl-wrap-reverse": {
                msFlexWrap: "wrap-reverse !important",
                flexWrap: "wrap-reverse !important"
            },
            ".flex-xl-fill": {
                msFlex: "1 1 auto !important",
                flex: "1 1 auto !important"
            },
            ".flex-xl-grow-0": {
                msFlexPositive: "0 !important",
                flexGrow: "0 !important"
            },
            ".flex-xl-grow-1": {
                msFlexPositive: "1 !important",
                flexGrow: "1 !important"
            },
            ".flex-xl-shrink-0": {
                msFlexNegative: "0 !important",
                flexShrink: "0 !important"
            },
            ".flex-xl-shrink-1": {
                msFlexNegative: "1 !important",
                flexShrink: "1 !important"
            },
            ".justify-content-xl-start": {
                msFlexPack: "start !important",
                justifyContent: "flex-start !important"
            },
            ".justify-content-xl-end": {
                msFlexPack: "end !important",
                justifyContent: "flex-end !important"
            },
            ".justify-content-xl-center": {
                msFlexPack: "center !important",
                justifyContent: "center !important"
            },
            ".justify-content-xl-between": {
                msFlexPack: "justify !important",
                justifyContent: "space-between !important"
            },
            ".justify-content-xl-around": {
                msFlexPack: "distribute !important",
                justifyContent: "space-around !important"
            },
            ".align-items-xl-start": {
                msFlexAlign: "start !important",
                alignItems: "flex-start !important"
            },
            ".align-items-xl-end": {
                msFlexAlign: "end !important",
                alignItems: "flex-end !important"
            },
            ".align-items-xl-center": {
                msFlexAlign: "center !important",
                alignItems: "center !important"
            },
            ".align-items-xl-baseline": {
                msFlexAlign: "baseline !important",
                alignItems: "baseline !important"
            },
            ".align-items-xl-stretch": {
                msFlexAlign: "stretch !important",
                alignItems: "stretch !important"
            },
            ".align-content-xl-start": {
                msFlexLinePack: "start !important",
                alignContent: "flex-start !important"
            },
            ".align-content-xl-end": {
                msFlexLinePack: "end !important",
                alignContent: "flex-end !important"
            },
            ".align-content-xl-center": {
                msFlexLinePack: "center !important",
                alignContent: "center !important"
            },
            ".align-content-xl-between": {
                msFlexLinePack: "justify !important",
                alignContent: "space-between !important"
            },
            ".align-content-xl-around": {
                msFlexLinePack: "distribute !important",
                alignContent: "space-around !important"
            },
            ".align-content-xl-stretch": {
                msFlexLinePack: "stretch !important",
                alignContent: "stretch !important"
            },
            ".align-self-xl-auto": {
                msFlexItemAlign: "auto !important",
                alignSelf: "auto !important"
            },
            ".align-self-xl-start": {
                msFlexItemAlign: "start !important",
                alignSelf: "flex-start !important"
            },
            ".align-self-xl-end": {
                msFlexItemAlign: "end !important",
                alignSelf: "flex-end !important"
            },
            ".align-self-xl-center": {
                msFlexItemAlign: "center !important",
                alignSelf: "center !important"
            },
            ".align-self-xl-baseline": {
                msFlexItemAlign: "baseline !important",
                alignSelf: "baseline !important"
            },
            ".align-self-xl-stretch": {
                msFlexItemAlign: "stretch !important",
                alignSelf: "stretch !important"
            }
        },
        {
            ".float-xl-left": { cssFloat: "left !important" },
            ".float-xl-right": { cssFloat: "right !important" },
            ".float-xl-none": { cssFloat: "none !important" }
        },
        {
            ".m-xl-0": { margin: "0 !important" },
            ".mt-xl-0,\n  .my-xl-0": { marginTop: "0 !important" },
            ".mr-xl-0,\n  .mx-xl-0": { marginRight: "0 !important" },
            ".mb-xl-0,\n  .my-xl-0": { marginBottom: "0 !important" },
            ".ml-xl-0,\n  .mx-xl-0": { marginLeft: "0 !important" },
            ".m-xl-1": { margin: "0.25rem !important" },
            ".mt-xl-1,\n  .my-xl-1": { marginTop: "0.25rem !important" },
            ".mr-xl-1,\n  .mx-xl-1": { marginRight: "0.25rem !important" },
            ".mb-xl-1,\n  .my-xl-1": { marginBottom: "0.25rem !important" },
            ".ml-xl-1,\n  .mx-xl-1": { marginLeft: "0.25rem !important" },
            ".m-xl-2": { margin: "0.5rem !important" },
            ".mt-xl-2,\n  .my-xl-2": { marginTop: "0.5rem !important" },
            ".mr-xl-2,\n  .mx-xl-2": { marginRight: "0.5rem !important" },
            ".mb-xl-2,\n  .my-xl-2": { marginBottom: "0.5rem !important" },
            ".ml-xl-2,\n  .mx-xl-2": { marginLeft: "0.5rem !important" },
            ".m-xl-3": { margin: "1rem !important" },
            ".mt-xl-3,\n  .my-xl-3": { marginTop: "1rem !important" },
            ".mr-xl-3,\n  .mx-xl-3": { marginRight: "1rem !important" },
            ".mb-xl-3,\n  .my-xl-3": { marginBottom: "1rem !important" },
            ".ml-xl-3,\n  .mx-xl-3": { marginLeft: "1rem !important" },
            ".m-xl-4": { margin: "1.5rem !important" },
            ".mt-xl-4,\n  .my-xl-4": { marginTop: "1.5rem !important" },
            ".mr-xl-4,\n  .mx-xl-4": { marginRight: "1.5rem !important" },
            ".mb-xl-4,\n  .my-xl-4": { marginBottom: "1.5rem !important" },
            ".ml-xl-4,\n  .mx-xl-4": { marginLeft: "1.5rem !important" },
            ".m-xl-5": { margin: "3rem !important" },
            ".mt-xl-5,\n  .my-xl-5": { marginTop: "3rem !important" },
            ".mr-xl-5,\n  .mx-xl-5": { marginRight: "3rem !important" },
            ".mb-xl-5,\n  .my-xl-5": { marginBottom: "3rem !important" },
            ".ml-xl-5,\n  .mx-xl-5": { marginLeft: "3rem !important" },
            ".p-xl-0": { padding: "0 !important" },
            ".pt-xl-0,\n  .py-xl-0": { paddingTop: "0 !important" },
            ".pr-xl-0,\n  .px-xl-0": { paddingRight: "0 !important" },
            ".pb-xl-0,\n  .py-xl-0": { paddingBottom: "0 !important" },
            ".pl-xl-0,\n  .px-xl-0": { paddingLeft: "0 !important" },
            ".p-xl-1": { padding: "0.25rem !important" },
            ".pt-xl-1,\n  .py-xl-1": { paddingTop: "0.25rem !important" },
            ".pr-xl-1,\n  .px-xl-1": { paddingRight: "0.25rem !important" },
            ".pb-xl-1,\n  .py-xl-1": { paddingBottom: "0.25rem !important" },
            ".pl-xl-1,\n  .px-xl-1": { paddingLeft: "0.25rem !important" },
            ".p-xl-2": { padding: "0.5rem !important" },
            ".pt-xl-2,\n  .py-xl-2": { paddingTop: "0.5rem !important" },
            ".pr-xl-2,\n  .px-xl-2": { paddingRight: "0.5rem !important" },
            ".pb-xl-2,\n  .py-xl-2": { paddingBottom: "0.5rem !important" },
            ".pl-xl-2,\n  .px-xl-2": { paddingLeft: "0.5rem !important" },
            ".p-xl-3": { padding: "1rem !important" },
            ".pt-xl-3,\n  .py-xl-3": { paddingTop: "1rem !important" },
            ".pr-xl-3,\n  .px-xl-3": { paddingRight: "1rem !important" },
            ".pb-xl-3,\n  .py-xl-3": { paddingBottom: "1rem !important" },
            ".pl-xl-3,\n  .px-xl-3": { paddingLeft: "1rem !important" },
            ".p-xl-4": { padding: "1.5rem !important" },
            ".pt-xl-4,\n  .py-xl-4": { paddingTop: "1.5rem !important" },
            ".pr-xl-4,\n  .px-xl-4": { paddingRight: "1.5rem !important" },
            ".pb-xl-4,\n  .py-xl-4": { paddingBottom: "1.5rem !important" },
            ".pl-xl-4,\n  .px-xl-4": { paddingLeft: "1.5rem !important" },
            ".p-xl-5": { padding: "3rem !important" },
            ".pt-xl-5,\n  .py-xl-5": { paddingTop: "3rem !important" },
            ".pr-xl-5,\n  .px-xl-5": { paddingRight: "3rem !important" },
            ".pb-xl-5,\n  .py-xl-5": { paddingBottom: "3rem !important" },
            ".pl-xl-5,\n  .px-xl-5": { paddingLeft: "3rem !important" },
            ".m-xl-n1": { margin: "-0.25rem !important" },
            ".mt-xl-n1,\n  .my-xl-n1": { marginTop: "-0.25rem !important" },
            ".mr-xl-n1,\n  .mx-xl-n1": { marginRight: "-0.25rem !important" },
            ".mb-xl-n1,\n  .my-xl-n1": { marginBottom: "-0.25rem !important" },
            ".ml-xl-n1,\n  .mx-xl-n1": { marginLeft: "-0.25rem !important" },
            ".m-xl-n2": { margin: "-0.5rem !important" },
            ".mt-xl-n2,\n  .my-xl-n2": { marginTop: "-0.5rem !important" },
            ".mr-xl-n2,\n  .mx-xl-n2": { marginRight: "-0.5rem !important" },
            ".mb-xl-n2,\n  .my-xl-n2": { marginBottom: "-0.5rem !important" },
            ".ml-xl-n2,\n  .mx-xl-n2": { marginLeft: "-0.5rem !important" },
            ".m-xl-n3": { margin: "-1rem !important" },
            ".mt-xl-n3,\n  .my-xl-n3": { marginTop: "-1rem !important" },
            ".mr-xl-n3,\n  .mx-xl-n3": { marginRight: "-1rem !important" },
            ".mb-xl-n3,\n  .my-xl-n3": { marginBottom: "-1rem !important" },
            ".ml-xl-n3,\n  .mx-xl-n3": { marginLeft: "-1rem !important" },
            ".m-xl-n4": { margin: "-1.5rem !important" },
            ".mt-xl-n4,\n  .my-xl-n4": { marginTop: "-1.5rem !important" },
            ".mr-xl-n4,\n  .mx-xl-n4": { marginRight: "-1.5rem !important" },
            ".mb-xl-n4,\n  .my-xl-n4": { marginBottom: "-1.5rem !important" },
            ".ml-xl-n4,\n  .mx-xl-n4": { marginLeft: "-1.5rem !important" },
            ".m-xl-n5": { margin: "-3rem !important" },
            ".mt-xl-n5,\n  .my-xl-n5": { marginTop: "-3rem !important" },
            ".mr-xl-n5,\n  .mx-xl-n5": { marginRight: "-3rem !important" },
            ".mb-xl-n5,\n  .my-xl-n5": { marginBottom: "-3rem !important" },
            ".ml-xl-n5,\n  .mx-xl-n5": { marginLeft: "-3rem !important" },
            ".m-xl-auto": { margin: "auto !important" },
            ".mt-xl-auto,\n  .my-xl-auto": { marginTop: "auto !important" },
            ".mr-xl-auto,\n  .mx-xl-auto": { marginRight: "auto !important" },
            ".mb-xl-auto,\n  .my-xl-auto": { marginBottom: "auto !important" },
            ".ml-xl-auto,\n  .mx-xl-auto": { marginLeft: "auto !important" }
        },
        {
            ".text-xl-left": { textAlign: "left !important" },
            ".text-xl-right": { textAlign: "right !important" },
            ".text-xl-center": { textAlign: "center !important" }
        }
    ],
    ".row": {
        display: ["-ms-flexbox", "flex"],
        msFlexWrap: "wrap",
        flexWrap: "wrap",
        marginRight: "-15px",
        marginLeft: "-15px"
    },
    ".no-gutters": { marginRight: "0", marginLeft: "0" },
    '.no-gutters > .col,\n.no-gutters > [class*="col-"]': {
        paddingRight: "0",
        paddingLeft: "0"
    },
    ".col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col,\n.col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm,\n.col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md,\n.col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg,\n.col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl,\n.col-xl-auto": {
        position: "relative",
        width: "100%",
        paddingRight: "15px",
        paddingLeft: "15px"
    },
    ".col": {
        msFlexPreferredSize: "0",
        flexBasis: "0",
        msFlexPositive: "1",
        flexGrow: 1,
        maxWidth: "100%"
    },
    ".row-cols-1 > *": { msFlex: "0 0 100%", flex: "0 0 100%", maxWidth: "100%" },
    ".row-cols-2 > *": { msFlex: "0 0 50%", flex: "0 0 50%", maxWidth: "50%" },
    ".row-cols-3 > *": {
        msFlex: "0 0 33.333333%",
        flex: "0 0 33.333333%",
        maxWidth: "33.333333%"
    },
    ".row-cols-4 > *": { msFlex: "0 0 25%", flex: "0 0 25%", maxWidth: "25%" },
    ".row-cols-5 > *": { msFlex: "0 0 20%", flex: "0 0 20%", maxWidth: "20%" },
    ".row-cols-6 > *": {
        msFlex: "0 0 16.666667%",
        flex: "0 0 16.666667%",
        maxWidth: "16.666667%"
    },
    ".col-auto": {
        msFlex: "0 0 auto",
        flex: "0 0 auto",
        width: "auto",
        maxWidth: "100%"
    },
    ".col-1": {
        msFlex: "0 0 8.333333%",
        flex: "0 0 8.333333%",
        maxWidth: "8.333333%"
    },
    ".col-2": {
        msFlex: "0 0 16.666667%",
        flex: "0 0 16.666667%",
        maxWidth: "16.666667%"
    },
    ".col-3": { msFlex: "0 0 25%", flex: "0 0 25%", maxWidth: "25%" },
    ".col-4": {
        msFlex: "0 0 33.333333%",
        flex: "0 0 33.333333%",
        maxWidth: "33.333333%"
    },
    ".col-5": {
        msFlex: "0 0 41.666667%",
        flex: "0 0 41.666667%",
        maxWidth: "41.666667%"
    },
    ".col-6": { msFlex: "0 0 50%", flex: "0 0 50%", maxWidth: "50%" },
    ".col-7": {
        msFlex: "0 0 58.333333%",
        flex: "0 0 58.333333%",
        maxWidth: "58.333333%"
    },
    ".col-8": {
        msFlex: "0 0 66.666667%",
        flex: "0 0 66.666667%",
        maxWidth: "66.666667%"
    },
    ".col-9": { msFlex: "0 0 75%", flex: "0 0 75%", maxWidth: "75%" },
    ".col-10": {
        msFlex: "0 0 83.333333%",
        flex: "0 0 83.333333%",
        maxWidth: "83.333333%"
    },
    ".col-11": {
        msFlex: "0 0 91.666667%",
        flex: "0 0 91.666667%",
        maxWidth: "91.666667%"
    },
    ".col-12": { msFlex: "0 0 100%", flex: "0 0 100%", maxWidth: "100%" },
    ".order-first": { msFlexOrder: "-1", order: -1 },
    ".order-last": { msFlexOrder: "13", order: 13 },
    ".order-0": { msFlexOrder: "0", order: 0 },
    ".order-1": { msFlexOrder: "1", order: 1 },
    ".order-2": { msFlexOrder: "2", order: 2 },
    ".order-3": { msFlexOrder: "3", order: 3 },
    ".order-4": { msFlexOrder: "4", order: 4 },
    ".order-5": { msFlexOrder: "5", order: 5 },
    ".order-6": { msFlexOrder: "6", order: 6 },
    ".order-7": { msFlexOrder: "7", order: 7 },
    ".order-8": { msFlexOrder: "8", order: 8 },
    ".order-9": { msFlexOrder: "9", order: 9 },
    ".order-10": { msFlexOrder: "10", order: 10 },
    ".order-11": { msFlexOrder: "11", order: 11 },
    ".order-12": { msFlexOrder: "12", order: 12 },
    ".offset-1": { marginLeft: "8.333333%" },
    ".offset-2": { marginLeft: "16.666667%" },
    ".offset-3": { marginLeft: "25%" },
    ".offset-4": { marginLeft: "33.333333%" },
    ".offset-5": { marginLeft: "41.666667%" },
    ".offset-6": { marginLeft: "50%" },
    ".offset-7": { marginLeft: "58.333333%" },
    ".offset-8": { marginLeft: "66.666667%" },
    ".offset-9": { marginLeft: "75%" },
    ".offset-10": { marginLeft: "83.333333%" },
    ".offset-11": { marginLeft: "91.666667%" },
    ".table": { width: "100%", marginBottom: "1rem", color: "#fff" },
    ".table th,\n.table td": {
        padding: "0.75rem",
        verticalAlign: "top",
        borderTop: "1px solid #282828"
    },
    ".table thead th": {
        verticalAlign: "bottom",
        borderBottom: "2px solid #282828"
    },
    ".table tbody + tbody": { borderTop: "2px solid #282828" },
    ".table-sm th,\n.table-sm td": { padding: "0.3rem" },
    ".table-bordered": { border: "1px solid #282828" },
    ".table-bordered th,\n.table-bordered td": { border: "1px solid #282828" },
    ".table-bordered thead th,\n.table-bordered thead td": {
        borderBottomWidth: "2px"
    },
    ".table-borderless th,\n.table-borderless td,\n.table-borderless thead th,\n.table-borderless tbody + tbody": {
        border: "0"
    },
    ".table-striped tbody tr:nth-of-type(odd)": {
        backgroundColor: "rgba(255, 255, 255, 0.05)"
    },
    ".table-hover tbody tr:hover": {
        color: "#fff",
        backgroundColor: "rgba(255, 255, 255, 0.075)"
    },
    ".table-primary,\n.table-primary > th,\n.table-primary > td": {
        backgroundColor: "#2a9fd6"
    },
    ".table-primary th,\n.table-primary td,\n.table-primary thead th,\n.table-primary tbody + tbody": {
        borderColor: "#90cdea"
    },
    ".table-hover .table-primary:hover": { backgroundColor: "#addaf0" },
    ".table-hover .table-primary:hover > td,\n.table-hover .table-primary:hover > th": {
        backgroundColor: "#addaf0"
    },
    ".table-secondary,\n.table-secondary > th,\n.table-secondary > td": {
        backgroundColor: "#555"
    },
    ".table-secondary th,\n.table-secondary td,\n.table-secondary thead th,\n.table-secondary tbody + tbody": {
        borderColor: "#a7a7a7"
    },
    ".table-hover .table-secondary:hover": { backgroundColor: "#c2c2c2" },
    ".table-hover .table-secondary:hover > td,\n.table-hover .table-secondary:hover > th": {
        backgroundColor: "#c2c2c2"
    },
    ".table-success,\n.table-success > th,\n.table-success > td": {
        backgroundColor: "#77b300"
    },
    ".table-success th,\n.table-success td,\n.table-success thead th,\n.table-success tbody + tbody": {
        borderColor: "#b8d77a"
    },
    ".table-hover .table-success:hover": { backgroundColor: "#cee4a4" },
    ".table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th": {
        backgroundColor: "#cee4a4"
    },
    ".table-info,\n.table-info > th,\n.table-info > td": {
        backgroundColor: "#93c"
    },
    ".table-info th,\n.table-info td,\n.table-info thead th,\n.table-info tbody + tbody": {
        borderColor: "#ca95e4"
    },
    ".table-hover .table-info:hover": { backgroundColor: "#d8b2ec" },
    ".table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th": {
        backgroundColor: "#d8b2ec"
    },
    ".table-warning,\n.table-warning > th,\n.table-warning > td": {
        backgroundColor: "#f80"
    },
    ".table-warning th,\n.table-warning td,\n.table-warning thead th,\n.table-warning tbody + tbody": {
        borderColor: "#ffc17a"
    },
    ".table-hover .table-warning:hover": { backgroundColor: "#ffd29f" },
    ".table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th": {
        backgroundColor: "#ffd29f"
    },
    ".table-danger,\n.table-danger > th,\n.table-danger > td": {
        backgroundColor: "#c00"
    },
    ".table-danger th,\n.table-danger td,\n.table-danger thead th,\n.table-danger tbody + tbody": {
        borderColor: "#e47a7a"
    },
    ".table-hover .table-danger:hover": { backgroundColor: "#eda3a3" },
    ".table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th": {
        backgroundColor: "#eda3a3"
    },
    ".table-light,\n.table-light > th,\n.table-light > td": {
        backgroundColor: "#222"
    },
    ".table-light th,\n.table-light td,\n.table-light thead th,\n.table-light tbody + tbody": {
        borderColor: "#8c8c8c"
    },
    ".table-hover .table-light:hover": { backgroundColor: "#b4b4b4" },
    ".table-hover .table-light:hover > td,\n.table-hover .table-light:hover > th": {
        backgroundColor: "#b4b4b4"
    },
    ".table-dark,\n.table-dark > th,\n.table-dark > td": {
        backgroundColor: "#adafae"
    },
    ".table-dark th,\n.table-dark td,\n.table-dark thead th,\n.table-dark tbody + tbody": {
        borderColor: "#d4d5d5"
    },
    ".table-hover .table-dark:hover": { backgroundColor: "#dbdddb" },
    ".table-hover .table-dark:hover > td,\n.table-hover .table-dark:hover > th": {
        backgroundColor: "#dbdddb"
    },
    ".table-active,\n.table-active > th,\n.table-active > td": {
        backgroundColor: "rgba(255, 255, 255, 0.075)"
    },
    ".table-hover .table-active:hover": {
        backgroundColor: "rgba(242, 242, 242, 0.075)"
    },
    ".table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th": {
        backgroundColor: "rgba(242, 242, 242, 0.075)"
    },
    ".table .thead-dark th": {
        color: "#fff",
        backgroundColor: "#888",
        borderColor: "#757575"
    },
    ".table .thead-light th": {
        color: "#282828",
        backgroundColor: "#e9ecef",
        borderColor: "#282828"
    },
    ".table-dark": { color: "#fff", backgroundColor: "#888" },
    ".table-dark th,\n.table-dark td,\n.table-dark thead th": {
        borderColor: "#757575"
    },
    ".table-dark.table-bordered": { border: "0" },
    ".table-dark.table-striped tbody tr:nth-of-type(odd)": {
        backgroundColor: "rgba(255, 255, 255, 0.05)"
    },
    ".table-dark.table-hover tbody tr:hover": {
        color: "#fff",
        backgroundColor: "rgba(255, 255, 255, 0.075)"
    },
    "@media (max-width: 575.98px)": [
        {
            ".table-responsive-sm": {
                display: "block",
                width: "100%",
                overflowX: "auto",
                WebkitOverflowScrolling: "touch"
            },
            ".table-responsive-sm > .table-bordered": { border: "0" }
        },
        {
            ".navbar-expand-sm > .container,\n  .navbar-expand-sm > .container-fluid, .navbar-expand-sm > .container-sm, .navbar-expand-sm > .container-md, .navbar-expand-sm > .container-lg, .navbar-expand-sm > .container-xl": {
                paddingRight: "0",
                paddingLeft: "0"
            }
        }
    ],
    "@media (max-width: 767.98px)": [
        {
            ".table-responsive-md": {
                display: "block",
                width: "100%",
                overflowX: "auto",
                WebkitOverflowScrolling: "touch"
            },
            ".table-responsive-md > .table-bordered": { border: "0" }
        },
        {
            ".navbar-expand-md > .container,\n  .navbar-expand-md > .container-fluid, .navbar-expand-md > .container-sm, .navbar-expand-md > .container-md, .navbar-expand-md > .container-lg, .navbar-expand-md > .container-xl": {
                paddingRight: "0",
                paddingLeft: "0"
            }
        }
    ],
    "@media (max-width: 991.98px)": [
        {
            ".table-responsive-lg": {
                display: "block",
                width: "100%",
                overflowX: "auto",
                WebkitOverflowScrolling: "touch"
            },
            ".table-responsive-lg > .table-bordered": { border: "0" }
        },
        {
            ".navbar-expand-lg > .container,\n  .navbar-expand-lg > .container-fluid, .navbar-expand-lg > .container-sm, .navbar-expand-lg > .container-md, .navbar-expand-lg > .container-lg, .navbar-expand-lg > .container-xl": {
                paddingRight: "0",
                paddingLeft: "0"
            }
        }
    ],
    "@media (max-width: 1199.98px)": [
        {
            ".table-responsive-xl": {
                display: "block",
                width: "100%",
                overflowX: "auto",
                WebkitOverflowScrolling: "touch"
            },
            ".table-responsive-xl > .table-bordered": { border: "0" }
        },
        {
            ".navbar-expand-xl > .container,\n  .navbar-expand-xl > .container-fluid, .navbar-expand-xl > .container-sm, .navbar-expand-xl > .container-md, .navbar-expand-xl > .container-lg, .navbar-expand-xl > .container-xl": {
                paddingRight: "0",
                paddingLeft: "0"
            }
        }
    ],
    ".table-responsive": {
        display: "block",
        width: "100%",
        overflowX: "auto",
        WebkitOverflowScrolling: "touch"
    },
    ".table-responsive > .table-bordered": { border: "0" },
    ".form-control": {
        display: "block",
        width: "100%",
        height: "calc(1.5em + 0.75rem + 2px)",
        padding: "0.375rem 1rem",
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#282828",
        backgroundColor: "#fff",
        backgroundClip: "border-box",
        border: "1px solid #fff",
        borderRadius: "0.25rem",
        transition: "border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
    },
    "@media (prefers-reduced-motion: reduce)": [
        { ".form-control": { transition: "none" } },
        { ".btn": { transition: "none" } },
        { ".fade": { transition: "none" } },
        { ".collapsing": { transition: "none" } },
        { ".custom-switch .custom-control-label::after": { transition: "none" } },
        {
            ".custom-range::-webkit-slider-thumb": {
                WebkitTransition: "none",
                transition: "none"
            }
        },
        {
            ".custom-range::-moz-range-thumb": {
                MozTransition: "none",
                transition: "none"
            }
        },
        {
            ".custom-range::-ms-thumb": { msTransition: "none", transition: "none" }
        },
        {
            ".custom-control-label::before,\n  .custom-file-label,\n  .custom-select": {
                transition: "none"
            }
        },
        { ".badge": { transition: "none" } },
        { ".progress-bar": { transition: "none" } },
        {
            ".progress-bar-animated": { WebkitAnimation: "none", animation: "none" }
        },
        { ".modal.fade .modal-dialog": { transition: "none" } },
        { ".carousel-item": { transition: "none" } },
        {
            ".carousel-fade .active.carousel-item-left,\n  .carousel-fade .active.carousel-item-right": {
                transition: "none"
            }
        },
        {
            ".carousel-control-prev,\n  .carousel-control-next": {
                transition: "none"
            }
        },
        { ".carousel-indicators li": { transition: "none" } }
    ],
    ".form-control::-ms-expand": { backgroundColor: "transparent", border: "0" },
    ".form-control:-moz-focusring": {
        color: "transparent",
        textShadow: "0 0 0 #282828"
    },
    ".form-control:focus": {
        color: "#282828",
        backgroundColor: "#fff",
        borderColor: "#95cfeb",
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(42, 159, 214, 0.25)"
    },
    ".form-control::-webkit-input-placeholder": { color: "#555", opacity: 1 },
    ".form-control::-moz-placeholder": { color: "#555", opacity: 1 },
    ".form-control:-ms-input-placeholder": { color: "#555", opacity: 1 },
    ".form-control::-ms-input-placeholder": { color: "#555", opacity: 1 },
    ".form-control::placeholder": { color: "#555", opacity: 1 },
    ".form-control:disabled, .form-control[readonly]": {
        backgroundColor: "#adafae",
        opacity: 1,
        borderColor: "transparent"
    },
    'input[type="date"].form-control,\ninput[type="time"].form-control,\ninput[type="datetime-local"].form-control,\ninput[type="month"].form-control': {
        WebkitAppearance: "none",
        MozAppearance: "none",
        appearance: "none"
    },
    "select.form-control:focus::-ms-value": {
        color: "#282828",
        backgroundColor: "#fff"
    },
    ".form-control-file,\n.form-control-range": {
        display: "block",
        width: "100%"
    },
    ".col-form-label": {
        paddingTop: "calc(0.375rem + 1px)",
        paddingBottom: "calc(0.375rem + 1px)",
        marginBottom: "0",
        fontSize: "inherit",
        lineHeight: 1.5
    },
    ".col-form-label-lg": {
        paddingTop: "calc(0.5rem + 1px)",
        paddingBottom: "calc(0.5rem + 1px)",
        fontSize: "1.09375rem",
        lineHeight: 1.5
    },
    ".col-form-label-sm": {
        paddingTop: "calc(0.25rem + 1px)",
        paddingBottom: "calc(0.25rem + 1px)",
        fontSize: "0.765625rem",
        lineHeight: 1.5
    },
    ".form-control-plaintext": {
        display: "block",
        width: "100%",
        padding: "0.375rem 0",
        marginBottom: "0",
        fontSize: "0.875rem",
        lineHeight: 1.5,
        color: "#adafae",
        backgroundColor: "transparent",
        border: "solid transparent",
        borderWidth: "1px 0"
    },
    ".form-control-plaintext.form-control-sm, .form-control-plaintext.form-control-lg": {
        paddingRight: "0",
        paddingLeft: "0"
    },
    ".form-control-sm": {
        height: "calc(1.5em + 0.5rem + 2px)",
        padding: "0.25rem 0.5rem",
        fontSize: "0.765625rem",
        lineHeight: 1.5,
        borderRadius: "0.2rem"
    },
    ".form-control-lg": {
        height: "calc(1.5em + 1rem + 2px)",
        padding: "0.5rem 1rem",
        fontSize: "1.09375rem",
        lineHeight: 1.5,
        borderRadius: "0.3rem"
    },
    "select.form-control[size], select.form-control[multiple]": {
        height: "auto"
    },
    "textarea.form-control": { height: "auto" },
    ".form-group": { marginBottom: "1rem" },
    ".form-text": { display: "block", marginTop: "0.25rem" },
    ".form-row": {
        display: ["-ms-flexbox", "flex"],
        msFlexWrap: "wrap",
        flexWrap: "wrap",
        marginRight: "-5px",
        marginLeft: "-5px"
    },
    '.form-row > .col,\n.form-row > [class*="col-"]': {
        paddingRight: "5px",
        paddingLeft: "5px"
    },
    ".form-check": {
        position: "relative",
        display: "block",
        paddingLeft: "1.25rem"
    },
    ".form-check-input": {
        position: "absolute",
        marginTop: "0.3rem",
        marginLeft: "-1.25rem"
    },
    ".form-check-input[disabled] ~ .form-check-label,\n.form-check-input:disabled ~ .form-check-label": {
        color: "#555"
    },
    ".form-check-label": { marginBottom: "0" },
    ".form-check-inline": {
        display: ["-ms-inline-flexbox", "inline-flex"],
        msFlexAlign: "center",
        alignItems: "center",
        paddingLeft: "0",
        marginRight: "0.75rem"
    },
    ".form-check-inline .form-check-input": {
        position: "static",
        marginTop: "0",
        marginRight: "0.3125rem",
        marginLeft: "0"
    },
    ".valid-feedback": {
        display: "none",
        width: "100%",
        marginTop: "0.25rem",
        fontSize: "80%",
        color: "#77b300"
    },
    ".valid-tooltip": {
        position: "absolute",
        top: "100%",
        left: "0",
        zIndex: 5,
        display: "none",
        maxWidth: "100%",
        padding: "0.25rem 0.5rem",
        marginTop: ".1rem",
        fontSize: "0.765625rem",
        lineHeight: 1.5,
        color: "#fff",
        backgroundColor: "#77b300",
        borderRadius: "0.25rem"
    },
    ".was-validated :valid ~ .valid-feedback,\n.was-validated :valid ~ .valid-tooltip,\n.is-valid ~ .valid-feedback,\n.is-valid ~ .valid-tooltip": {
        display: "block"
    },
    ".was-validated .form-control:valid, .form-control.is-valid": {
        borderColor: "#77b300",
        paddingRight: "calc(1.5em + 0.75rem)",
        backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right calc(0.375em + 0.1875rem) center",
        backgroundSize: "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
    },
    ".was-validated .form-control:valid:focus, .form-control.is-valid:focus": {
        borderColor: "#77b300",
        boxShadow: "0 0 0 0.2rem rgba(119, 179, 0, 0.25)"
    },
    ".was-validated textarea.form-control:valid, textarea.form-control.is-valid": {
        paddingRight: "calc(1.5em + 0.75rem)",
        backgroundPosition:
            "top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)"
    },
    ".was-validated .custom-select:valid, .custom-select.is-valid": {
        borderColor: "#77b300",
        paddingRight: "calc(0.75em + 2.5625rem)",
        background:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23222' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 1rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2377b300' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e\") #fff no-repeat center right 2rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
    },
    ".was-validated .custom-select:valid:focus, .custom-select.is-valid:focus": {
        borderColor: "#77b300",
        boxShadow: "0 0 0 0.2rem rgba(119, 179, 0, 0.25)"
    },
    ".was-validated .form-check-input:valid ~ .form-check-label, .form-check-input.is-valid ~ .form-check-label": {
        color: "#77b300"
    },
    ".was-validated .form-check-input:valid ~ .valid-feedback,\n.was-validated .form-check-input:valid ~ .valid-tooltip, .form-check-input.is-valid ~ .valid-feedback,\n.form-check-input.is-valid ~ .valid-tooltip": {
        display: "block"
    },
    ".was-validated .custom-control-input:valid ~ .custom-control-label, .custom-control-input.is-valid ~ .custom-control-label": {
        color: "#77b300"
    },
    ".was-validated .custom-control-input:valid ~ .custom-control-label::before, .custom-control-input.is-valid ~ .custom-control-label::before": {
        borderColor: "#77b300"
    },
    ".was-validated .custom-control-input:valid:checked ~ .custom-control-label::before, .custom-control-input.is-valid:checked ~ .custom-control-label::before": {
        borderColor: "#99e600",
        backgroundColor: "#99e600"
    },
    ".was-validated .custom-control-input:valid:focus ~ .custom-control-label::before, .custom-control-input.is-valid:focus ~ .custom-control-label::before": {
        boxShadow: "0 0 0 0.2rem rgba(119, 179, 0, 0.25)"
    },
    ".was-validated .custom-control-input:valid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-valid:focus:not(:checked) ~ .custom-control-label::before": {
        borderColor: "#77b300"
    },
    ".was-validated .custom-file-input:valid ~ .custom-file-label, .custom-file-input.is-valid ~ .custom-file-label": {
        borderColor: "#77b300"
    },
    ".was-validated .custom-file-input:valid:focus ~ .custom-file-label, .custom-file-input.is-valid:focus ~ .custom-file-label": {
        borderColor: "#77b300",
        boxShadow: "0 0 0 0.2rem rgba(119, 179, 0, 0.25)"
    },
    ".invalid-feedback": {
        display: "none",
        width: "100%",
        marginTop: "0.25rem",
        fontSize: "80%",
        color: "#c00"
    },
    ".invalid-tooltip": {
        position: "absolute",
        top: "100%",
        left: "0",
        zIndex: 5,
        display: "none",
        maxWidth: "100%",
        padding: "0.25rem 0.5rem",
        marginTop: ".1rem",
        fontSize: "0.765625rem",
        lineHeight: 1.5,
        color: "#fff",
        backgroundColor: "#cc0000",
        borderRadius: "0.25rem"
    },
    ".was-validated :invalid ~ .invalid-feedback,\n.was-validated :invalid ~ .invalid-tooltip,\n.is-invalid ~ .invalid-feedback,\n.is-invalid ~ .invalid-tooltip": {
        display: "block"
    },
    ".was-validated .form-control:invalid, .form-control.is-invalid": {
        borderColor: "#c00",
        paddingRight: "calc(1.5em + 0.75rem)",
        backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23c00' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23c00' stroke='none'/%3e%3c/svg%3e\")",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right calc(0.375em + 0.1875rem) center",
        backgroundSize: "calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
    },
    ".was-validated .form-control:invalid:focus, .form-control.is-invalid:focus": {
        borderColor: "#c00",
        boxShadow: "0 0 0 0.2rem rgba(204, 0, 0, 0.25)"
    },
    ".was-validated textarea.form-control:invalid, textarea.form-control.is-invalid": {
        paddingRight: "calc(1.5em + 0.75rem)",
        backgroundPosition:
            "top calc(0.375em + 0.1875rem) right calc(0.375em + 0.1875rem)"
    },
    ".was-validated .custom-select:invalid, .custom-select.is-invalid": {
        borderColor: "#c00",
        paddingRight: "calc(0.75em + 2.5625rem)",
        background:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23222' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 1rem center/8px 10px, url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23c00' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23c00' stroke='none'/%3e%3c/svg%3e\") #fff no-repeat center right 2rem/calc(0.75em + 0.375rem) calc(0.75em + 0.375rem)"
    },
    ".was-validated .custom-select:invalid:focus, .custom-select.is-invalid:focus": {
        borderColor: "#c00",
        boxShadow: "0 0 0 0.2rem rgba(204, 0, 0, 0.25)"
    },
    ".was-validated .form-check-input:invalid ~ .form-check-label, .form-check-input.is-invalid ~ .form-check-label": {
        color: "#c00"
    },
    ".was-validated .form-check-input:invalid ~ .invalid-feedback,\n.was-validated .form-check-input:invalid ~ .invalid-tooltip, .form-check-input.is-invalid ~ .invalid-feedback,\n.form-check-input.is-invalid ~ .invalid-tooltip": {
        display: "block"
    },
    ".was-validated .custom-control-input:invalid ~ .custom-control-label, .custom-control-input.is-invalid ~ .custom-control-label": {
        color: "#c00"
    },
    ".was-validated .custom-control-input:invalid ~ .custom-control-label::before, .custom-control-input.is-invalid ~ .custom-control-label::before": {
        borderColor: "#c00"
    },
    ".was-validated .custom-control-input:invalid:checked ~ .custom-control-label::before, .custom-control-input.is-invalid:checked ~ .custom-control-label::before": {
        borderColor: "red",
        backgroundColor: "red"
    },
    ".was-validated .custom-control-input:invalid:focus ~ .custom-control-label::before, .custom-control-input.is-invalid:focus ~ .custom-control-label::before": {
        boxShadow: "0 0 0 0.2rem rgba(204, 0, 0, 0.25)"
    },
    ".was-validated .custom-control-input:invalid:focus:not(:checked) ~ .custom-control-label::before, .custom-control-input.is-invalid:focus:not(:checked) ~ .custom-control-label::before": {
        borderColor: "#c00"
    },
    ".was-validated .custom-file-input:invalid ~ .custom-file-label, .custom-file-input.is-invalid ~ .custom-file-label": {
        borderColor: "#c00"
    },
    ".was-validated .custom-file-input:invalid:focus ~ .custom-file-label, .custom-file-input.is-invalid:focus ~ .custom-file-label": {
        borderColor: "#c00",
        boxShadow: "0 0 0 0.2rem rgba(204, 0, 0, 0.25)"
    },
    ".form-inline": {
        display: ["-ms-flexbox", "flex"],
        msFlexFlow: "row wrap",
        flexFlow: "row wrap",
        msFlexAlign: "center",
        alignItems: "center"
    },
    ".form-inline .form-check": { width: "100%" },
    ".btn": {
        display: "inline-block",
        fontWeight: 400,
        color: "#adafae",
        textAlign: "center",
        verticalAlign: "middle",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
        backgroundColor: "transparent",
        border: "1px solid transparent",
        padding: "0.375rem 1rem",
        fontSize: "0.875rem",
        lineHeight: 1.5,
        borderRadius: "0.25rem",
        transition:
            "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
    },
    ".btn:hover": { color: "#adafae", textDecoration: "none" },
    ".btn:focus, .btn.focus": {
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(42, 159, 214, 0.25)"
    },
    ".btn.disabled, .btn:disabled": { opacity: 0.65 },
    ".btn:not(:disabled):not(.disabled)": { cursor: "pointer" },
    "a.btn.disabled,\nfieldset:disabled a.btn": { pointerEvents: "none" },
    ".btn-primary": {
        color: "#fff",
        backgroundColor: "#2a9fd6",
        borderColor: "#2a9fd6"
    },
    ".btn-primary:hover": {
        color: "#fff",
        backgroundColor: "#2387b7",
        borderColor: "#2180ac"
    },
    ".btn-primary:focus, .btn-primary.focus": {
        color: "#fff",
        backgroundColor: "#2387b7",
        borderColor: "#2180ac",
        boxShadow: "0 0 0 0.2rem rgba(74, 173, 220, 0.5)"
    },
    ".btn-primary.disabled, .btn-primary:disabled": {
        color: "#fff",
        backgroundColor: "#2a9fd6",
        borderColor: "#2a9fd6"
    },
    ".btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active,\n.show > .btn-primary.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#2180ac",
        borderColor: "#1f78a1"
    },
    ".btn-primary:not(:disabled):not(.disabled):active:focus, .btn-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-primary.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(74, 173, 220, 0.5)"
    },
    ".btn-secondary": {
        color: "#fff",
        backgroundColor: "#555",
        borderColor: "#555"
    },
    ".btn-secondary:hover": {
        color: "#fff",
        backgroundColor: "#424242",
        borderColor: "#3c3c3c"
    },
    ".btn-secondary:focus, .btn-secondary.focus": {
        color: "#fff",
        backgroundColor: "#424242",
        borderColor: "#3c3c3c",
        boxShadow: "0 0 0 0.2rem rgba(111, 111, 111, 0.5)"
    },
    ".btn-secondary.disabled, .btn-secondary:disabled": {
        color: "#fff",
        backgroundColor: "#555",
        borderColor: "#555"
    },
    ".btn-secondary:not(:disabled):not(.disabled):active, .btn-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-secondary.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#3c3c3c",
        borderColor: "#353535"
    },
    ".btn-secondary:not(:disabled):not(.disabled):active:focus, .btn-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-secondary.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(111, 111, 111, 0.5)"
    },
    ".btn-success": {
        color: "#fff",
        backgroundColor: "#77b300",
        borderColor: "#77b300"
    },
    ".btn-success:hover": {
        color: "#fff",
        backgroundColor: "#5e8d00",
        borderColor: "#558000"
    },
    ".btn-success:focus, .btn-success.focus": {
        color: "#fff",
        backgroundColor: "#5e8d00",
        borderColor: "#558000",
        boxShadow: "0 0 0 0.2rem rgba(139, 190, 38, 0.5)"
    },
    ".btn-success.disabled, .btn-success:disabled": {
        color: "#fff",
        backgroundColor: "#77b300",
        borderColor: "#77b300"
    },
    ".btn-success:not(:disabled):not(.disabled):active, .btn-success:not(:disabled):not(.disabled).active,\n.show > .btn-success.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#558000",
        borderColor: "#4d7300"
    },
    ".btn-success:not(:disabled):not(.disabled):active:focus, .btn-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-success.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(139, 190, 38, 0.5)"
    },
    ".btn-info": { color: "#fff", backgroundColor: "#93c", borderColor: "#93c" },
    ".btn-info:hover": {
        color: "#fff",
        backgroundColor: "#822bad",
        borderColor: "#7a29a3"
    },
    ".btn-info:focus, .btn-info.focus": {
        color: "#fff",
        backgroundColor: "#822bad",
        borderColor: "#7a29a3",
        boxShadow: "0 0 0 0.2rem rgba(168, 82, 212, 0.5)"
    },
    ".btn-info.disabled, .btn-info:disabled": {
        color: "#fff",
        backgroundColor: "#93c",
        borderColor: "#93c"
    },
    ".btn-info:not(:disabled):not(.disabled):active, .btn-info:not(:disabled):not(.disabled).active,\n.show > .btn-info.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#7a29a3",
        borderColor: "#732699"
    },
    ".btn-info:not(:disabled):not(.disabled):active:focus, .btn-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-info.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(168, 82, 212, 0.5)"
    },
    ".btn-warning": {
        color: "#fff",
        backgroundColor: "#f80",
        borderColor: "#f80"
    },
    ".btn-warning:hover": {
        color: "#fff",
        backgroundColor: "#d97400",
        borderColor: "#cc6d00"
    },
    ".btn-warning:focus, .btn-warning.focus": {
        color: "#fff",
        backgroundColor: "#d97400",
        borderColor: "#cc6d00",
        boxShadow: "0 0 0 0.2rem rgba(255, 154, 38, 0.5)"
    },
    ".btn-warning.disabled, .btn-warning:disabled": {
        color: "#fff",
        backgroundColor: "#f80",
        borderColor: "#f80"
    },
    ".btn-warning:not(:disabled):not(.disabled):active, .btn-warning:not(:disabled):not(.disabled).active,\n.show > .btn-warning.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#cc6d00",
        borderColor: "#bf6600"
    },
    ".btn-warning:not(:disabled):not(.disabled):active:focus, .btn-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-warning.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(255, 154, 38, 0.5)"
    },
    ".btn-danger": {
        color: "#fff",
        backgroundColor: "#c00",
        borderColor: "#c00"
    },
    ".btn-danger:hover": {
        color: "#fff",
        backgroundColor: "#a60000",
        borderColor: "#990000"
    },
    ".btn-danger:focus, .btn-danger.focus": {
        color: "#fff",
        backgroundColor: "#a60000",
        borderColor: "#990000",
        boxShadow: "0 0 0 0.2rem rgba(212, 38, 38, 0.5)"
    },
    ".btn-danger.disabled, .btn-danger:disabled": {
        color: "#fff",
        backgroundColor: "#c00",
        borderColor: "#c00"
    },
    ".btn-danger:not(:disabled):not(.disabled):active, .btn-danger:not(:disabled):not(.disabled).active,\n.show > .btn-danger.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#990000",
        borderColor: "#8c0000"
    },
    ".btn-danger:not(:disabled):not(.disabled):active:focus, .btn-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-danger.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(212, 38, 38, 0.5)"
    },
    ".btn-light": { color: "#fff", backgroundColor: "#222", borderColor: "#222" },
    ".btn-light:hover": {
        color: "#fff",
        backgroundColor: "#0f0f0f",
        borderColor: "#090909"
    },
    ".btn-light:focus, .btn-light.focus": {
        color: "#fff",
        backgroundColor: "#0f0f0f",
        borderColor: "#090909",
        boxShadow: "0 0 0 0.2rem rgba(67, 67, 67, 0.5)"
    },
    ".btn-light.disabled, .btn-light:disabled": {
        color: "#fff",
        backgroundColor: "#222",
        borderColor: "#222"
    },
    ".btn-light:not(:disabled):not(.disabled):active, .btn-light:not(:disabled):not(.disabled).active,\n.show > .btn-light.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#090909",
        borderColor: "#020202"
    },
    ".btn-light:not(:disabled):not(.disabled):active:focus, .btn-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-light.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(67, 67, 67, 0.5)"
    },
    ".btn-dark": {
        color: "#fff",
        backgroundColor: "#adafae",
        borderColor: "#adafae"
    },
    ".btn-dark:hover": {
        color: "#fff",
        backgroundColor: "#9a9c9b",
        borderColor: "#939695"
    },
    ".btn-dark:focus, .btn-dark.focus": {
        color: "#fff",
        backgroundColor: "#9a9c9b",
        borderColor: "#939695",
        boxShadow: "0 0 0 0.2rem rgba(185, 187, 186, 0.5)"
    },
    ".btn-dark.disabled, .btn-dark:disabled": {
        color: "#fff",
        backgroundColor: "#adafae",
        borderColor: "#adafae"
    },
    ".btn-dark:not(:disabled):not(.disabled):active, .btn-dark:not(:disabled):not(.disabled).active,\n.show > .btn-dark.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#939695",
        borderColor: "#8d908e"
    },
    ".btn-dark:not(:disabled):not(.disabled):active:focus, .btn-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-dark.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(185, 187, 186, 0.5)"
    },
    ".btn-outline-primary": { color: "#2a9fd6", borderColor: "#2a9fd6" },
    ".btn-outline-primary:hover": {
        color: "#fff",
        backgroundColor: "#2a9fd6",
        borderColor: "#2a9fd6"
    },
    ".btn-outline-primary:focus, .btn-outline-primary.focus": {
        boxShadow: "0 0 0 0.2rem rgba(42, 159, 214, 0.5)"
    },
    ".btn-outline-primary.disabled, .btn-outline-primary:disabled": {
        color: "#2a9fd6",
        backgroundColor: "transparent"
    },
    ".btn-outline-primary:not(:disabled):not(.disabled):active, .btn-outline-primary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-primary.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#2a9fd6",
        borderColor: "#2a9fd6"
    },
    ".btn-outline-primary:not(:disabled):not(.disabled):active:focus, .btn-outline-primary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-primary.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(42, 159, 214, 0.5)"
    },
    ".btn-outline-secondary": { color: "#555", borderColor: "#555" },
    ".btn-outline-secondary:hover": {
        color: "#fff",
        backgroundColor: "#555",
        borderColor: "#555"
    },
    ".btn-outline-secondary:focus, .btn-outline-secondary.focus": {
        boxShadow: "0 0 0 0.2rem rgba(85, 85, 85, 0.5)"
    },
    ".btn-outline-secondary.disabled, .btn-outline-secondary:disabled": {
        color: "#555",
        backgroundColor: "transparent"
    },
    ".btn-outline-secondary:not(:disabled):not(.disabled):active, .btn-outline-secondary:not(:disabled):not(.disabled).active,\n.show > .btn-outline-secondary.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#555",
        borderColor: "#555"
    },
    ".btn-outline-secondary:not(:disabled):not(.disabled):active:focus, .btn-outline-secondary:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-secondary.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(85, 85, 85, 0.5)"
    },
    ".btn-outline-success": { color: "#77b300", borderColor: "#77b300" },
    ".btn-outline-success:hover": {
        color: "#fff",
        backgroundColor: "#77b300",
        borderColor: "#77b300"
    },
    ".btn-outline-success:focus, .btn-outline-success.focus": {
        boxShadow: "0 0 0 0.2rem rgba(119, 179, 0, 0.5)"
    },
    ".btn-outline-success.disabled, .btn-outline-success:disabled": {
        color: "#77b300",
        backgroundColor: "transparent"
    },
    ".btn-outline-success:not(:disabled):not(.disabled):active, .btn-outline-success:not(:disabled):not(.disabled).active,\n.show > .btn-outline-success.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#77b300",
        borderColor: "#77b300"
    },
    ".btn-outline-success:not(:disabled):not(.disabled):active:focus, .btn-outline-success:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-success.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(119, 179, 0, 0.5)"
    },
    ".btn-outline-info": { color: "#93c", borderColor: "#93c" },
    ".btn-outline-info:hover": {
        color: "#fff",
        backgroundColor: "#93c",
        borderColor: "#93c"
    },
    ".btn-outline-info:focus, .btn-outline-info.focus": {
        boxShadow: "0 0 0 0.2rem rgba(153, 51, 204, 0.5)"
    },
    ".btn-outline-info.disabled, .btn-outline-info:disabled": {
        color: "#93c",
        backgroundColor: "transparent"
    },
    ".btn-outline-info:not(:disabled):not(.disabled):active, .btn-outline-info:not(:disabled):not(.disabled).active,\n.show > .btn-outline-info.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#93c",
        borderColor: "#93c"
    },
    ".btn-outline-info:not(:disabled):not(.disabled):active:focus, .btn-outline-info:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-info.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(153, 51, 204, 0.5)"
    },
    ".btn-outline-warning": { color: "#f80", borderColor: "#f80" },
    ".btn-outline-warning:hover": {
        color: "#fff",
        backgroundColor: "#f80",
        borderColor: "#f80"
    },
    ".btn-outline-warning:focus, .btn-outline-warning.focus": {
        boxShadow: "0 0 0 0.2rem rgba(255, 136, 0, 0.5)"
    },
    ".btn-outline-warning.disabled, .btn-outline-warning:disabled": {
        color: "#f80",
        backgroundColor: "transparent"
    },
    ".btn-outline-warning:not(:disabled):not(.disabled):active, .btn-outline-warning:not(:disabled):not(.disabled).active,\n.show > .btn-outline-warning.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#f80",
        borderColor: "#f80"
    },
    ".btn-outline-warning:not(:disabled):not(.disabled):active:focus, .btn-outline-warning:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-warning.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(255, 136, 0, 0.5)"
    },
    ".btn-outline-danger": { color: "#c00", borderColor: "#c00" },
    ".btn-outline-danger:hover": {
        color: "#fff",
        backgroundColor: "#c00",
        borderColor: "#c00"
    },
    ".btn-outline-danger:focus, .btn-outline-danger.focus": {
        boxShadow: "0 0 0 0.2rem rgba(204, 0, 0, 0.5)"
    },
    ".btn-outline-danger.disabled, .btn-outline-danger:disabled": {
        color: "#c00",
        backgroundColor: "transparent"
    },
    ".btn-outline-danger:not(:disabled):not(.disabled):active, .btn-outline-danger:not(:disabled):not(.disabled).active,\n.show > .btn-outline-danger.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#c00",
        borderColor: "#c00"
    },
    ".btn-outline-danger:not(:disabled):not(.disabled):active:focus, .btn-outline-danger:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-danger.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(204, 0, 0, 0.5)"
    },
    ".btn-outline-light": { color: "#222", borderColor: "#222" },
    ".btn-outline-light:hover": {
        color: "#fff",
        backgroundColor: "#222",
        borderColor: "#222"
    },
    ".btn-outline-light:focus, .btn-outline-light.focus": {
        boxShadow: "0 0 0 0.2rem rgba(34, 34, 34, 0.5)"
    },
    ".btn-outline-light.disabled, .btn-outline-light:disabled": {
        color: "#222",
        backgroundColor: "transparent"
    },
    ".btn-outline-light:not(:disabled):not(.disabled):active, .btn-outline-light:not(:disabled):not(.disabled).active,\n.show > .btn-outline-light.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#222",
        borderColor: "#222"
    },
    ".btn-outline-light:not(:disabled):not(.disabled):active:focus, .btn-outline-light:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-light.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(34, 34, 34, 0.5)"
    },
    ".btn-outline-dark": { color: "#adafae", borderColor: "#adafae" },
    ".btn-outline-dark:hover": {
        color: "#fff",
        backgroundColor: "#adafae",
        borderColor: "#adafae"
    },
    ".btn-outline-dark:focus, .btn-outline-dark.focus": {
        boxShadow: "0 0 0 0.2rem rgba(173, 175, 174, 0.5)"
    },
    ".btn-outline-dark.disabled, .btn-outline-dark:disabled": {
        color: "#adafae",
        backgroundColor: "transparent"
    },
    ".btn-outline-dark:not(:disabled):not(.disabled):active, .btn-outline-dark:not(:disabled):not(.disabled).active,\n.show > .btn-outline-dark.dropdown-toggle": {
        color: "#fff",
        backgroundColor: "#adafae",
        borderColor: "#adafae"
    },
    ".btn-outline-dark:not(:disabled):not(.disabled):active:focus, .btn-outline-dark:not(:disabled):not(.disabled).active:focus,\n.show > .btn-outline-dark.dropdown-toggle:focus": {
        boxShadow: "0 0 0 0.2rem rgba(173, 175, 174, 0.5)"
    },
    ".btn-link": { fontWeight: 400, color: "#2a9fd6", textDecoration: "none" },
    ".btn-link:hover": { color: "#1d7097", textDecoration: "underline" },
    ".btn-link:focus, .btn-link.focus": { textDecoration: "underline" },
    ".btn-link:disabled, .btn-link.disabled": {
        color: "#555",
        pointerEvents: "none"
    },
    ".btn-lg, .btn-group-lg > .btn": {
        padding: "0.5rem 1rem",
        fontSize: "1.09375rem",
        lineHeight: 1.5,
        borderRadius: "0.3rem"
    },
    ".btn-sm, .btn-group-sm > .btn": {
        padding: "0.25rem 0.5rem",
        fontSize: "0.765625rem",
        lineHeight: 1.5,
        borderRadius: "0.2rem"
    },
    ".btn-block": { display: "block", width: "100%" },
    ".btn-block + .btn-block": { marginTop: "0.5rem" },
    'input[type="submit"].btn-block,\ninput[type="reset"].btn-block,\ninput[type="button"].btn-block': {
        width: "100%"
    },
    ".fade": { transition: "opacity 0.15s linear" },
    ".fade:not(.show)": { opacity: 0 },
    ".collapse:not(.show)": { display: "none" },
    ".collapsing": {
        position: "relative",
        height: "0",
        overflow: "hidden",
        transition: "height 0.35s ease"
    },
    ".dropup,\n.dropright,\n.dropdown,\n.dropleft": { position: "relative" },
    ".dropdown-toggle": { whiteSpace: "nowrap" },
    ".dropdown-toggle::after": {
        display: "inline-block",
        marginLeft: "0.255em",
        verticalAlign: "0.255em",
        content: '""',
        borderTop: "0.3em solid",
        borderRight: "0.3em solid transparent",
        borderBottom: "0",
        borderLeft: "0.3em solid transparent"
    },
    ".dropdown-toggle:empty::after": { marginLeft: "0" },
    ".dropdown-menu": {
        position: "absolute",
        top: "100%",
        left: "0",
        zIndex: 1000,
        display: "none",
        cssFloat: "left",
        minWidth: "10rem",
        padding: "0.5rem 0",
        margin: "0.125rem 0 0",
        fontSize: "0.875rem",
        color: "#adafae",
        textAlign: "left",
        listStyle: "none",
        backgroundColor: "#282828",
        backgroundClip: "padding-box",
        border: "1px solid rgba(0, 0, 0, 0.15)",
        borderRadius: "0.25rem"
    },
    ".dropdown-menu-left": { right: "auto", left: "0" },
    ".dropdown-menu-right": { right: "0", left: "auto" },
    ".dropup .dropdown-menu": {
        top: "auto",
        bottom: "100%",
        marginTop: "0",
        marginBottom: "0.125rem"
    },
    ".dropup .dropdown-toggle::after": {
        display: "inline-block",
        marginLeft: "0.255em",
        verticalAlign: "0.255em",
        content: '""',
        borderTop: "0",
        borderRight: "0.3em solid transparent",
        borderBottom: "0.3em solid",
        borderLeft: "0.3em solid transparent"
    },
    ".dropup .dropdown-toggle:empty::after": { marginLeft: "0" },
    ".dropright .dropdown-menu": {
        top: "0",
        right: "auto",
        left: "100%",
        marginTop: "0",
        marginLeft: "0.125rem"
    },
    ".dropright .dropdown-toggle::after": {
        display: "inline-block",
        marginLeft: "0.255em",
        verticalAlign: "0",
        content: '""',
        borderTop: "0.3em solid transparent",
        borderRight: "0",
        borderBottom: "0.3em solid transparent",
        borderLeft: "0.3em solid"
    },
    ".dropright .dropdown-toggle:empty::after": { marginLeft: "0" },
    ".dropleft .dropdown-menu": {
        top: "0",
        right: "100%",
        left: "auto",
        marginTop: "0",
        marginRight: "0.125rem"
    },
    ".dropleft .dropdown-toggle::after": {
        display: "none",
        marginLeft: "0.255em",
        verticalAlign: "0.255em",
        content: '""'
    },
    ".dropleft .dropdown-toggle::before": {
        display: "inline-block",
        marginRight: "0.255em",
        verticalAlign: "0",
        content: '""',
        borderTop: "0.3em solid transparent",
        borderRight: "0.3em solid",
        borderBottom: "0.3em solid transparent"
    },
    ".dropleft .dropdown-toggle:empty::after": { marginLeft: "0" },
    '.dropdown-menu[x-placement^="top"], .dropdown-menu[x-placement^="right"], .dropdown-menu[x-placement^="bottom"], .dropdown-menu[x-placement^="left"]': {
        right: "auto",
        bottom: "auto"
    },
    ".dropdown-divider": {
        height: "0",
        margin: "0.5rem 0",
        overflow: "hidden",
        borderTop: "1px solid #222"
    },
    ".dropdown-item": {
        display: "block",
        width: "100%",
        padding: "0.25rem 1.5rem",
        clear: "both",
        fontWeight: 400,
        color: "#fff",
        textAlign: "inherit",
        whiteSpace: "nowrap",
        backgroundColor: "transparent",
        border: "0"
    },
    ".dropdown-item:hover, .dropdown-item:focus": {
        color: "#fff",
        textDecoration: "none",
        backgroundColor: "#2a9fd6"
    },
    ".dropdown-item.active, .dropdown-item:active": {
        color: "#fff",
        textDecoration: "none",
        backgroundColor: "#2a9fd6"
    },
    ".dropdown-item.disabled, .dropdown-item:disabled": {
        color: "#555",
        pointerEvents: "none",
        backgroundColor: "transparent"
    },
    ".dropdown-menu.show": { display: "block" },
    ".dropdown-header": {
        display: "block",
        padding: "0.5rem 1.5rem",
        marginBottom: "0",
        fontSize: "0.765625rem",
        color: "#555",
        whiteSpace: "nowrap"
    },
    ".dropdown-item-text": {
        display: "block",
        padding: "0.25rem 1.5rem",
        color: "#fff"
    },
    ".btn-group,\n.btn-group-vertical": {
        position: "relative",
        display: ["-ms-inline-flexbox", "inline-flex"],
        verticalAlign: "middle"
    },
    ".btn-group > .btn,\n.btn-group-vertical > .btn": {
        position: "relative",
        msFlex: "1 1 auto",
        flex: "1 1 auto"
    },
    ".btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover": { zIndex: 1 },
    ".btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active": {
        zIndex: 1
    },
    ".btn-toolbar": {
        display: ["-ms-flexbox", "flex"],
        msFlexWrap: "wrap",
        flexWrap: "wrap",
        msFlexPack: "start",
        justifyContent: "flex-start"
    },
    ".btn-toolbar .input-group": { width: "auto" },
    ".btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child)": {
        marginLeft: "-1px"
    },
    ".btn-group > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group > .btn-group:not(:last-child) > .btn": {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0"
    },
    ".btn-group > .btn:not(:first-child),\n.btn-group > .btn-group:not(:first-child) > .btn": {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0"
    },
    ".dropdown-toggle-split": { paddingRight: "0.75rem", paddingLeft: "0.75rem" },
    ".dropdown-toggle-split::after,\n.dropup .dropdown-toggle-split::after,\n.dropright .dropdown-toggle-split::after": {
        marginLeft: "0"
    },
    ".dropleft .dropdown-toggle-split::before": { marginRight: "0" },
    ".btn-sm + .dropdown-toggle-split, .btn-group-sm > .btn + .dropdown-toggle-split": {
        paddingRight: "0.375rem",
        paddingLeft: "0.375rem"
    },
    ".btn-lg + .dropdown-toggle-split, .btn-group-lg > .btn + .dropdown-toggle-split": {
        paddingRight: "0.75rem",
        paddingLeft: "0.75rem"
    },
    ".btn-group-vertical": {
        msFlexDirection: "column",
        flexDirection: "column",
        msFlexAlign: "start",
        alignItems: "flex-start",
        msFlexPack: "center",
        justifyContent: "center"
    },
    ".btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group": {
        width: "100%"
    },
    ".btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child)": {
        marginTop: "-1px"
    },
    ".btn-group-vertical > .btn:not(:last-child):not(.dropdown-toggle),\n.btn-group-vertical > .btn-group:not(:last-child) > .btn": {
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "0"
    },
    ".btn-group-vertical > .btn:not(:first-child),\n.btn-group-vertical > .btn-group:not(:first-child) > .btn": {
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0"
    },
    ".btn-group-toggle > .btn,\n.btn-group-toggle > .btn-group > .btn": {
        marginBottom: "0"
    },
    '.btn-group-toggle > .btn input[type="radio"],\n.btn-group-toggle > .btn input[type="checkbox"],\n.btn-group-toggle > .btn-group > .btn input[type="radio"],\n.btn-group-toggle > .btn-group > .btn input[type="checkbox"]': {
        position: "absolute",
        clip: "rect(0, 0, 0, 0)",
        pointerEvents: "none"
    },
    ".input-group": {
        position: "relative",
        display: ["-ms-flexbox", "flex"],
        msFlexWrap: "wrap",
        flexWrap: "wrap",
        msFlexAlign: "stretch",
        alignItems: "stretch",
        width: "100%"
    },
    ".input-group > .form-control,\n.input-group > .form-control-plaintext,\n.input-group > .custom-select,\n.input-group > .custom-file": {
        position: "relative",
        msFlex: "1 1 auto",
        flex: "1 1 auto",
        width: "1%",
        minWidth: "0",
        marginBottom: "0"
    },
    ".input-group > .form-control + .form-control,\n.input-group > .form-control + .custom-select,\n.input-group > .form-control + .custom-file,\n.input-group > .form-control-plaintext + .form-control,\n.input-group > .form-control-plaintext + .custom-select,\n.input-group > .form-control-plaintext + .custom-file,\n.input-group > .custom-select + .form-control,\n.input-group > .custom-select + .custom-select,\n.input-group > .custom-select + .custom-file,\n.input-group > .custom-file + .form-control,\n.input-group > .custom-file + .custom-select,\n.input-group > .custom-file + .custom-file": {
        marginLeft: "-1px"
    },
    ".input-group > .form-control:focus,\n.input-group > .custom-select:focus,\n.input-group > .custom-file .custom-file-input:focus ~ .custom-file-label": {
        zIndex: 3
    },
    ".input-group > .custom-file .custom-file-input:focus": { zIndex: 4 },
    ".input-group > .form-control:not(:last-child),\n.input-group > .custom-select:not(:last-child)": {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0"
    },
    ".input-group > .form-control:not(:first-child),\n.input-group > .custom-select:not(:first-child)": {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0"
    },
    ".input-group > .custom-file": {
        display: ["-ms-flexbox", "flex"],
        msFlexAlign: "center",
        alignItems: "center"
    },
    ".input-group > .custom-file:not(:last-child) .custom-file-label,\n.input-group > .custom-file:not(:last-child) .custom-file-label::after": {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0"
    },
    ".input-group > .custom-file:not(:first-child) .custom-file-label": {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0"
    },
    ".input-group-prepend,\n.input-group-append": {
        display: ["-ms-flexbox", "flex"]
    },
    ".input-group-prepend .btn,\n.input-group-append .btn": {
        position: "relative",
        zIndex: 2
    },
    ".input-group-prepend .btn:focus,\n.input-group-append .btn:focus": {
        zIndex: 3
    },
    ".input-group-prepend .btn + .btn,\n.input-group-prepend .btn + .input-group-text,\n.input-group-prepend .input-group-text + .input-group-text,\n.input-group-prepend .input-group-text + .btn,\n.input-group-append .btn + .btn,\n.input-group-append .btn + .input-group-text,\n.input-group-append .input-group-text + .input-group-text,\n.input-group-append .input-group-text + .btn": {
        marginLeft: "-1px"
    },
    ".input-group-prepend": { marginRight: "-1px" },
    ".input-group-append": { marginLeft: "-1px" },
    ".input-group-text": {
        display: ["-ms-flexbox", "flex"],
        msFlexAlign: "center",
        alignItems: "center",
        padding: "0.375rem 1rem",
        marginBottom: "0",
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#fff",
        textAlign: "center",
        whiteSpace: "nowrap",
        backgroundColor: "#282828",
        border: "1px solid transparent",
        borderRadius: "0.25rem"
    },
    '.input-group-text input[type="radio"],\n.input-group-text input[type="checkbox"]': {
        marginTop: "0"
    },
    ".input-group-lg > .form-control:not(textarea),\n.input-group-lg > .custom-select": {
        height: "calc(1.5em + 1rem + 2px)"
    },
    ".input-group-lg > .form-control,\n.input-group-lg > .custom-select,\n.input-group-lg > .input-group-prepend > .input-group-text,\n.input-group-lg > .input-group-append > .input-group-text,\n.input-group-lg > .input-group-prepend > .btn,\n.input-group-lg > .input-group-append > .btn": {
        padding: "0.5rem 1rem",
        fontSize: "1.09375rem",
        lineHeight: 1.5,
        borderRadius: "0.3rem"
    },
    ".input-group-sm > .form-control:not(textarea),\n.input-group-sm > .custom-select": {
        height: "calc(1.5em + 0.5rem + 2px)"
    },
    ".input-group-sm > .form-control,\n.input-group-sm > .custom-select,\n.input-group-sm > .input-group-prepend > .input-group-text,\n.input-group-sm > .input-group-append > .input-group-text,\n.input-group-sm > .input-group-prepend > .btn,\n.input-group-sm > .input-group-append > .btn": {
        padding: "0.25rem 0.5rem",
        fontSize: "0.765625rem",
        lineHeight: 1.5,
        borderRadius: "0.2rem"
    },
    ".input-group-lg > .custom-select,\n.input-group-sm > .custom-select": {
        paddingRight: "2rem"
    },
    ".input-group > .input-group-prepend > .btn,\n.input-group > .input-group-prepend > .input-group-text,\n.input-group > .input-group-append:not(:last-child) > .btn,\n.input-group > .input-group-append:not(:last-child) > .input-group-text,\n.input-group > .input-group-append:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group > .input-group-append:last-child > .input-group-text:not(:last-child)": {
        borderTopRightRadius: "0",
        borderBottomRightRadius: "0"
    },
    ".input-group > .input-group-append > .btn,\n.input-group > .input-group-append > .input-group-text,\n.input-group > .input-group-prepend:not(:first-child) > .btn,\n.input-group > .input-group-prepend:not(:first-child) > .input-group-text,\n.input-group > .input-group-prepend:first-child > .btn:not(:first-child),\n.input-group > .input-group-prepend:first-child > .input-group-text:not(:first-child)": {
        borderTopLeftRadius: "0",
        borderBottomLeftRadius: "0"
    },
    ".custom-control": {
        position: "relative",
        zIndex: 1,
        display: "block",
        minHeight: "1.3125rem",
        paddingLeft: "1.5rem",
        WebkitPrintColorAdjust: "exact",
        colorAdjust: "exact"
    },
    ".custom-control-inline": {
        display: ["-ms-inline-flexbox", "inline-flex"],
        marginRight: "1rem"
    },
    ".custom-control-input": {
        position: "absolute",
        left: "0",
        zIndex: -1,
        width: "1rem",
        height: "1.15625rem",
        opacity: 0
    },
    ".custom-control-input:checked ~ .custom-control-label::before": {
        color: "#fff",
        borderColor: "#2a9fd6",
        backgroundColor: "#2a9fd6"
    },
    ".custom-control-input:focus ~ .custom-control-label::before": {
        boxShadow: "0 0 0 0.2rem rgba(42, 159, 214, 0.25)"
    },
    ".custom-control-input:focus:not(:checked) ~ .custom-control-label::before": {
        borderColor: "#95cfeb"
    },
    ".custom-control-input:not(:disabled):active ~ .custom-control-label::before": {
        color: "#fff",
        backgroundColor: "#c0e2f3",
        borderColor: "#c0e2f3"
    },
    ".custom-control-input[disabled] ~ .custom-control-label, .custom-control-input:disabled ~ .custom-control-label": {
        color: "#555"
    },
    ".custom-control-input[disabled] ~ .custom-control-label::before, .custom-control-input:disabled ~ .custom-control-label::before": {
        backgroundColor: "#adafae"
    },
    ".custom-control-label": {
        position: "relative",
        marginBottom: "0",
        verticalAlign: "top"
    },
    ".custom-control-label::before": {
        position: "absolute",
        top: "0.15625rem",
        left: "-1.5rem",
        display: "block",
        width: "1rem",
        height: "1rem",
        pointerEvents: "none",
        content: '""',
        backgroundColor: "#fff",
        border: "#888 solid 1px"
    },
    ".custom-control-label::after": {
        position: "absolute",
        top: "0.15625rem",
        left: "-1.5rem",
        display: "block",
        width: "1rem",
        height: "1rem",
        content: '""',
        background: "no-repeat 50% / 50% 50%"
    },
    ".custom-checkbox .custom-control-label::before": { borderRadius: "0.25rem" },
    ".custom-checkbox .custom-control-input:checked ~ .custom-control-label::after": {
        backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26l2.974 2.99L8 2.193z'/%3e%3c/svg%3e\")"
    },
    ".custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::before": {
        borderColor: "#2a9fd6",
        backgroundColor: "#2a9fd6"
    },
    ".custom-checkbox .custom-control-input:indeterminate ~ .custom-control-label::after": {
        backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3e%3cpath stroke='%23fff' d='M0 2h4'/%3e%3c/svg%3e\")"
    },
    ".custom-checkbox .custom-control-input:disabled:checked ~ .custom-control-label::before": {
        backgroundColor: "rgba(42, 159, 214, 0.5)"
    },
    ".custom-checkbox .custom-control-input:disabled:indeterminate ~ .custom-control-label::before": {
        backgroundColor: "rgba(42, 159, 214, 0.5)"
    },
    ".custom-radio .custom-control-label::before": { borderRadius: "50%" },
    ".custom-radio .custom-control-input:checked ~ .custom-control-label::after": {
        backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")"
    },
    ".custom-radio .custom-control-input:disabled:checked ~ .custom-control-label::before": {
        backgroundColor: "rgba(42, 159, 214, 0.5)"
    },
    ".custom-switch": { paddingLeft: "2.25rem" },
    ".custom-switch .custom-control-label::before": {
        left: "-2.25rem",
        width: "1.75rem",
        pointerEvents: "all",
        borderRadius: "0.5rem"
    },
    ".custom-switch .custom-control-label::after": {
        top: "calc(0.15625rem + 2px)",
        left: "calc(-2.25rem + 2px)",
        width: "calc(1rem - 4px)",
        height: "calc(1rem - 4px)",
        backgroundColor: "#888",
        borderRadius: "0.5rem",
        transition: [
            "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out",
            "transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
            "transform 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out"
        ]
    },
    ".custom-switch .custom-control-input:checked ~ .custom-control-label::after": {
        backgroundColor: "#fff",
        WebkitTransform: "translateX(0.75rem)",
        transform: "translateX(0.75rem)"
    },
    ".custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before": {
        backgroundColor: "rgba(42, 159, 214, 0.5)"
    },
    ".custom-select": {
        display: "inline-block",
        width: "100%",
        height: "calc(1.5em + 0.75rem + 2px)",
        padding: "0.375rem 2rem 0.375rem 1rem",
        fontSize: "0.875rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#282828",
        verticalAlign: "middle",
        background:
            "#fff url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23222' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e\") no-repeat right 1rem center/8px 10px",
        border: "1px solid #fff",
        borderRadius: "0.25rem",
        WebkitAppearance: "none",
        MozAppearance: "none",
        appearance: "none"
    },
    ".custom-select:focus": {
        borderColor: "#95cfeb",
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(42, 159, 214, 0.25)"
    },
    ".custom-select:focus::-ms-value": {
        color: "#282828",
        backgroundColor: "#fff"
    },
    '.custom-select[multiple], .custom-select[size]:not([size="1"])': {
        height: "auto",
        paddingRight: "1rem",
        backgroundImage: "none"
    },
    ".custom-select:disabled": { color: "#555", backgroundColor: "#e9ecef" },
    ".custom-select::-ms-expand": { display: "none" },
    ".custom-select:-moz-focusring": {
        color: "transparent",
        textShadow: "0 0 0 #282828"
    },
    ".custom-select-sm": {
        height: "calc(1.5em + 0.5rem + 2px)",
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
        paddingLeft: "0.5rem",
        fontSize: "0.765625rem"
    },
    ".custom-select-lg": {
        height: "calc(1.5em + 1rem + 2px)",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem",
        paddingLeft: "1rem",
        fontSize: "1.09375rem"
    },
    ".custom-file": {
        position: "relative",
        display: "inline-block",
        width: "100%",
        height: "calc(1.5em + 0.75rem + 2px)",
        marginBottom: "0"
    },
    ".custom-file-input": {
        position: "relative",
        zIndex: 2,
        width: "100%",
        height: "calc(1.5em + 0.75rem + 2px)",
        margin: "0",
        opacity: 0
    },
    ".custom-file-input:focus ~ .custom-file-label": {
        borderColor: "#95cfeb",
        boxShadow: "0 0 0 0.2rem rgba(42, 159, 214, 0.25)"
    },
    ".custom-file-input[disabled] ~ .custom-file-label,\n.custom-file-input:disabled ~ .custom-file-label": {
        backgroundColor: "#adafae"
    },
    ".custom-file-input:lang(en) ~ .custom-file-label::after": {
        content: '"Browse"'
    },
    ".custom-file-input ~ .custom-file-label[data-browse]::after": {
        content: "attr(data-browse)"
    },
    ".custom-file-label": {
        position: "absolute",
        top: "0",
        right: "0",
        left: "0",
        zIndex: 1,
        height: "calc(1.5em + 0.75rem + 2px)",
        padding: "0.375rem 1rem",
        fontWeight: 400,
        lineHeight: 1.5,
        color: "#fff",
        backgroundColor: "#fff",
        border: "1px solid #282828",
        borderRadius: "0.25rem"
    },
    ".custom-file-label::after": {
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        zIndex: 3,
        display: "block",
        height: "calc(1.5em + 0.75rem)",
        padding: "0.375rem 1rem",
        lineHeight: 1.5,
        color: "#fff",
        content: '"Browse"',
        backgroundColor: "#282828",
        borderLeft: "inherit",
        borderRadius: "0 0.25rem 0.25rem 0"
    },
    ".custom-range": {
        width: "100%",
        height: "1.4rem",
        padding: "0",
        backgroundColor: "transparent",
        WebkitAppearance: "none",
        MozAppearance: "none",
        appearance: "none"
    },
    ".custom-range:focus": { outline: "none" },
    ".custom-range:focus::-webkit-slider-thumb": {
        boxShadow: "0 0 0 1px #060606, 0 0 0 0.2rem rgba(42, 159, 214, 0.25)"
    },
    ".custom-range:focus::-moz-range-thumb": {
        boxShadow: "0 0 0 1px #060606, 0 0 0 0.2rem rgba(42, 159, 214, 0.25)"
    },
    ".custom-range:focus::-ms-thumb": {
        boxShadow: "0 0 0 1px #060606, 0 0 0 0.2rem rgba(42, 159, 214, 0.25)"
    },
    ".custom-range::-moz-focus-outer": { border: "0" },
    ".custom-range::-webkit-slider-thumb": {
        width: "1rem",
        height: "1rem",
        marginTop: "-0.25rem",
        backgroundColor: "#2a9fd6",
        border: "0",
        borderRadius: "1rem",
        WebkitTransition:
            "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
        transition:
            "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
        WebkitAppearance: "none",
        appearance: "none"
    },
    ".custom-range::-webkit-slider-thumb:active": { backgroundColor: "#c0e2f3" },
    ".custom-range::-webkit-slider-runnable-track": {
        width: "100%",
        height: "0.5rem",
        color: "transparent",
        cursor: "pointer",
        backgroundColor: "#dee2e6",
        borderColor: "transparent",
        borderRadius: "1rem"
    },
    ".custom-range::-moz-range-thumb": {
        width: "1rem",
        height: "1rem",
        backgroundColor: "#2a9fd6",
        border: "0",
        borderRadius: "1rem",
        MozTransition:
            "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
        transition:
            "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
        MozAppearance: "none",
        appearance: "none"
    },
    ".custom-range::-moz-range-thumb:active": { backgroundColor: "#c0e2f3" },
    ".custom-range::-moz-range-track": {
        width: "100%",
        height: "0.5rem",
        color: "transparent",
        cursor: "pointer",
        backgroundColor: "#dee2e6",
        borderColor: "transparent",
        borderRadius: "1rem"
    },
    ".custom-range::-ms-thumb": {
        width: "1rem",
        height: "1rem",
        marginTop: "0",
        marginRight: "0.2rem",
        marginLeft: "0.2rem",
        backgroundColor: "#2a9fd6",
        border: "0",
        borderRadius: "1rem",
        msTransition:
            "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
        transition:
            "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out",
        appearance: "none"
    },
    ".custom-range::-ms-thumb:active": { backgroundColor: "#c0e2f3" },
    ".custom-range::-ms-track": {
        width: "100%",
        height: "0.5rem",
        color: "transparent",
        cursor: "pointer",
        backgroundColor: "transparent",
        borderColor: "transparent",
        borderWidth: "0.5rem"
    },
    ".custom-range::-ms-fill-lower": {
        backgroundColor: "#dee2e6",
        borderRadius: "1rem"
    },
    ".custom-range::-ms-fill-upper": {
        marginRight: "15px",
        backgroundColor: "#dee2e6",
        borderRadius: "1rem"
    },
    ".custom-range:disabled::-webkit-slider-thumb": { backgroundColor: "#888" },
    ".custom-range:disabled::-webkit-slider-runnable-track": {
        cursor: "default"
    },
    ".custom-range:disabled::-moz-range-thumb": { backgroundColor: "#888" },
    ".custom-range:disabled::-moz-range-track": { cursor: "default" },
    ".custom-range:disabled::-ms-thumb": { backgroundColor: "#888" },
    ".custom-control-label::before,\n.custom-file-label,\n.custom-select": {
        transition:
            "background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
    },
    ".nav": {
        display: ["-ms-flexbox", "flex"],
        msFlexWrap: "wrap",
        flexWrap: "wrap",
        paddingLeft: "0",
        marginBottom: "0",
        listStyle: "none"
    },
    ".nav-link": { display: "block", padding: "0.5rem 1rem" },
    ".nav-link:hover, .nav-link:focus": { textDecoration: "none" },
    ".nav-link.disabled": {
        color: "#555",
        pointerEvents: "none",
        cursor: "default"
    },
    ".nav-tabs": { borderBottom: "1px solid #282828" },
    ".nav-tabs .nav-item": { marginBottom: "-1px" },
    ".nav-tabs .nav-link": {
        border: "1px solid transparent",
        borderTopLeftRadius: "0.25rem",
        borderTopRightRadius: "0.25rem"
    },
    ".nav-tabs .nav-link:hover, .nav-tabs .nav-link:focus": {
        borderColor: "#282828"
    },
    ".nav-tabs .nav-link.disabled": {
        color: "#555",
        backgroundColor: "transparent",
        borderColor: "transparent"
    },
    ".nav-tabs .nav-link.active,\n.nav-tabs .nav-item.show .nav-link": {
        color: "#fff",
        backgroundColor: "#282828",
        borderColor: "#282828"
    },
    ".nav-tabs .dropdown-menu": {
        marginTop: "-1px",
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0"
    },
    ".nav-pills .nav-link": { borderRadius: "0.25rem" },
    ".nav-pills .nav-link.active,\n.nav-pills .show > .nav-link": {
        color: "#fff",
        backgroundColor: "#2a9fd6"
    },
    ".nav-fill > .nav-link,\n.nav-fill .nav-item": {
        msFlex: "1 1 auto",
        flex: "1 1 auto",
        textAlign: "center"
    },
    ".nav-justified > .nav-link,\n.nav-justified .nav-item": {
        msFlexPreferredSize: "0",
        flexBasis: "0",
        msFlexPositive: "1",
        flexGrow: 1,
        textAlign: "center"
    },
    ".tab-content > .tab-pane": { display: "none" },
    ".tab-content > .active": { display: "block" },
    ".navbar": {
        position: "relative",
        display: ["-ms-flexbox", "flex"],
        msFlexWrap: "wrap",
        flexWrap: "wrap",
        msFlexAlign: "center",
        alignItems: "center",
        msFlexPack: "justify",
        justifyContent: "space-between",
        padding: "0.5rem 1rem"
    },
    ".navbar .container,\n.navbar .container-fluid, .navbar .container-sm, .navbar .container-md, .navbar .container-lg, .navbar .container-xl": {
        display: ["-ms-flexbox", "flex"],
        msFlexWrap: "wrap",
        flexWrap: "wrap",
        msFlexAlign: "center",
        alignItems: "center",
        msFlexPack: "justify",
        justifyContent: "space-between"
    },
    ".navbar-brand": {
        display: "inline-block",
        paddingTop: "0.335938rem",
        paddingBottom: "0.335938rem",
        marginRight: "1rem",
        fontSize: "1.09375rem",
        lineHeight: "inherit",
        whiteSpace: "nowrap"
    },
    ".navbar-brand:hover, .navbar-brand:focus": { textDecoration: "none" },
    ".navbar-nav": {
        display: ["-ms-flexbox", "flex"],
        msFlexDirection: "column",
        flexDirection: "column",
        paddingLeft: "0",
        marginBottom: "0",
        listStyle: "none"
    },
    ".navbar-nav .nav-link": { paddingRight: "0", paddingLeft: "0" },
    ".navbar-nav .dropdown-menu": { position: "static", cssFloat: "none" },
    ".navbar-text": {
        display: "inline-block",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem"
    },
    ".navbar-collapse": {
        msFlexPreferredSize: "100%",
        flexBasis: "100%",
        msFlexPositive: "1",
        flexGrow: 1,
        msFlexAlign: "center",
        alignItems: "center"
    },
    ".navbar-toggler": {
        padding: "0.25rem 0.75rem",
        fontSize: "1.09375rem",
        lineHeight: 1,
        backgroundColor: "transparent",
        border: "1px solid transparent",
        borderRadius: "0.25rem"
    },
    ".navbar-toggler:hover, .navbar-toggler:focus": { textDecoration: "none" },
    ".navbar-toggler-icon": {
        display: "inline-block",
        width: "1.5em",
        height: "1.5em",
        verticalAlign: "middle",
        content: '""',
        background: "no-repeat center center",
        backgroundSize: "100% 100%"
    },
    ".navbar-expand": {
        msFlexFlow: "row nowrap",
        flexFlow: "row nowrap",
        msFlexPack: "start",
        justifyContent: "flex-start"
    },
    ".navbar-expand > .container,\n.navbar-expand > .container-fluid, .navbar-expand > .container-sm, .navbar-expand > .container-md, .navbar-expand > .container-lg, .navbar-expand > .container-xl": {
        paddingRight: "0",
        paddingLeft: "0",
        msFlexWrap: "nowrap",
        flexWrap: "nowrap"
    },
    ".navbar-expand .navbar-nav": {
        msFlexDirection: "row",
        flexDirection: "row"
    },
    ".navbar-expand .navbar-nav .dropdown-menu": { position: "absolute" },
    ".navbar-expand .navbar-nav .nav-link": {
        paddingRight: "0.5rem",
        paddingLeft: "0.5rem"
    },
    ".navbar-expand .navbar-collapse": {
        display: ["-ms-flexbox !important", "flex !important"],
        msFlexPreferredSize: "auto",
        flexBasis: "auto"
    },
    ".navbar-expand .navbar-toggler": { display: "none" },
    ".navbar-light .navbar-brand": { color: "rgba(0, 0, 0, 0.9)" },
    ".navbar-light .navbar-brand:hover, .navbar-light .navbar-brand:focus": {
        color: "rgba(0, 0, 0, 0.9)"
    },
    ".navbar-light .navbar-nav .nav-link": { color: "rgba(0, 0, 0, 0.5)" },
    ".navbar-light .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link:focus": {
        color: "rgba(0, 0, 0, 0.7)"
    },
    ".navbar-light .navbar-nav .nav-link.disabled": {
        color: "rgba(0, 0, 0, 0.3)"
    },
    ".navbar-light .navbar-nav .show > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .nav-link.show,\n.navbar-light .navbar-nav .nav-link.active": {
        color: "rgba(0, 0, 0, 0.9)"
    },
    ".navbar-light .navbar-toggler": {
        color: "rgba(0, 0, 0, 0.5)",
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    ".navbar-light .navbar-toggler-icon": {
        backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")"
    },
    ".navbar-light .navbar-text": { color: "rgba(0, 0, 0, 0.5)" },
    ".navbar-light .navbar-text a": { color: "rgba(0, 0, 0, 0.9)" },
    ".navbar-light .navbar-text a:hover, .navbar-light .navbar-text a:focus": {
        color: "rgba(0, 0, 0, 0.9)"
    },
    ".navbar-dark .navbar-brand": { color: "#fff" },
    ".navbar-dark .navbar-brand:hover, .navbar-dark .navbar-brand:focus": {
        color: "#fff"
    },
    ".navbar-dark .navbar-nav .nav-link": { color: "rgba(255, 255, 255, 0.5)" },
    ".navbar-dark .navbar-nav .nav-link:hover, .navbar-dark .navbar-nav .nav-link:focus": {
        color: "#fff"
    },
    ".navbar-dark .navbar-nav .nav-link.disabled": {
        color: "rgba(255, 255, 255, 0.25)"
    },
    ".navbar-dark .navbar-nav .show > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .nav-link.show,\n.navbar-dark .navbar-nav .nav-link.active": {
        color: "#fff"
    },
    ".navbar-dark .navbar-toggler": {
        color: "rgba(255, 255, 255, 0.5)",
        borderColor: "rgba(255, 255, 255, 0.1)"
    },
    ".navbar-dark .navbar-toggler-icon": {
        backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")"
    },
    ".navbar-dark .navbar-text": { color: "rgba(255, 255, 255, 0.5)" },
    ".navbar-dark .navbar-text a": { color: "#fff" },
    ".navbar-dark .navbar-text a:hover, .navbar-dark .navbar-text a:focus": {
        color: "#fff"
    },
    ".card": {
        position: "relative",
        display: ["-ms-flexbox", "flex"],
        msFlexDirection: "column",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        backgroundColor: "#282828",
        backgroundClip: "border-box",
        border: "1px solid rgba(0, 0, 0, 0.125)",
        borderRadius: "0.25rem"
    },
    ".card > hr": { marginRight: "0", marginLeft: "0" },
    ".card > .list-group": { borderTop: "inherit", borderBottom: "inherit" },
    ".card > .list-group:first-child": {
        borderTopWidth: "0",
        borderTopLeftRadius: "calc(0.25rem - 1px)",
        borderTopRightRadius: "calc(0.25rem - 1px)"
    },
    ".card > .list-group:last-child": {
        borderBottomWidth: "0",
        borderBottomRightRadius: "calc(0.25rem - 1px)",
        borderBottomLeftRadius: "calc(0.25rem - 1px)"
    },
    ".card > .card-header + .list-group,\n.card > .list-group + .card-footer": {
        borderTop: "0"
    },
    ".card-body": {
        msFlex: "1 1 auto",
        flex: "1 1 auto",
        minHeight: "1px",
        padding: "1.25rem"
    },
    ".card-title": { marginBottom: "0.75rem" },
    ".card-subtitle": { marginTop: "-0.375rem", marginBottom: "0" },
    ".card-text:last-child": { marginBottom: "0" },
    ".card-link:hover": { textDecoration: "none" },
    ".card-link + .card-link": { marginLeft: "1.25rem" },
    ".card-header": {
        padding: "0.75rem 1.25rem",
        marginBottom: "0",
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.125)"
    },
    ".card-header:first-child": {
        borderRadius: "calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0"
    },
    ".card-footer": {
        padding: "0.75rem 1.25rem",
        backgroundColor: "rgba(0, 0, 0, 0.03)",
        borderTop: "1px solid rgba(0, 0, 0, 0.125)"
    },
    ".card-footer:last-child": {
        borderRadius: "0 0 calc(0.25rem - 1px) calc(0.25rem - 1px)"
    },
    ".card-header-tabs": {
        marginRight: "-0.625rem",
        marginBottom: "-0.75rem",
        marginLeft: "-0.625rem",
        borderBottom: "0"
    },
    ".card-header-pills": { marginRight: "-0.625rem", marginLeft: "-0.625rem" },
    ".card-img-overlay": {
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        padding: "1.25rem",
        borderRadius: "calc(0.25rem - 1px)"
    },
    ".card-img,\n.card-img-top,\n.card-img-bottom": {
        msFlexNegative: "0",
        flexShrink: 0,
        width: "100%"
    },
    ".card-img,\n.card-img-top": {
        borderTopLeftRadius: "calc(0.25rem - 1px)",
        borderTopRightRadius: "calc(0.25rem - 1px)"
    },
    ".card-img,\n.card-img-bottom": {
        borderBottomRightRadius: "calc(0.25rem - 1px)",
        borderBottomLeftRadius: "calc(0.25rem - 1px)"
    },
    ".card-deck .card": { marginBottom: "15px" },
    ".card-group > .card": { marginBottom: "15px" },
    ".card-columns .card": { marginBottom: "0.75rem" },
    ".accordion": { overflowAnchor: "none" },
    ".accordion > .card": { overflow: "hidden" },
    ".accordion > .card:not(:last-of-type)": {
        borderBottom: "0",
        borderBottomRightRadius: "0",
        borderBottomLeftRadius: "0"
    },
    ".accordion > .card:not(:first-of-type)": {
        borderTopLeftRadius: "0",
        borderTopRightRadius: "0"
    },
    ".accordion > .card > .card-header": {
        borderRadius: "0",
        marginBottom: "-1px"
    },
    ".breadcrumb": {
        display: ["-ms-flexbox", "flex"],
        msFlexWrap: "wrap",
        flexWrap: "wrap",
        padding: "0.75rem 1rem",
        marginBottom: "1rem",
        listStyle: "none",
        backgroundColor: "#282828",
        borderRadius: "0.25rem"
    },
    ".breadcrumb-item": { display: ["-ms-flexbox", "flex"] },
    ".breadcrumb-item + .breadcrumb-item": { paddingLeft: "0.5rem" },
    ".breadcrumb-item + .breadcrumb-item::before": {
        display: "inline-block",
        paddingRight: "0.5rem",
        color: "#555",
        content: '"/"'
    },
    ".breadcrumb-item + .breadcrumb-item:hover::before": {
        textDecoration: "none"
    },
    ".breadcrumb-item.active": { color: "#555" },
    ".pagination": {
        display: ["-ms-flexbox", "flex"],
        paddingLeft: "0",
        listStyle: "none",
        borderRadius: "0.25rem"
    },
    ".page-link": {
        position: "relative",
        display: "block",
        padding: "0.5rem 0.75rem",
        marginLeft: "-1px",
        lineHeight: 1.25,
        color: "#fff",
        backgroundColor: "#282828",
        border: "1px solid transparent"
    },
    ".page-link:hover": {
        zIndex: 2,
        color: "#fff",
        textDecoration: "none",
        backgroundColor: "#2a9fd6",
        borderColor: "transparent"
    },
    ".page-link:focus": {
        zIndex: 3,
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(42, 159, 214, 0.25)"
    },
    ".page-item:first-child .page-link": {
        marginLeft: "0",
        borderTopLeftRadius: "0.25rem",
        borderBottomLeftRadius: "0.25rem"
    },
    ".page-item:last-child .page-link": {
        borderTopRightRadius: "0.25rem",
        borderBottomRightRadius: "0.25rem"
    },
    ".page-item.active .page-link": {
        zIndex: 3,
        color: "#fff",
        backgroundColor: "#2a9fd6",
        borderColor: "#2a9fd6"
    },
    ".page-item.disabled .page-link": {
        color: "#555",
        pointerEvents: "none",
        cursor: "auto",
        backgroundColor: "#282828",
        borderColor: "transparent"
    },
    ".pagination-lg .page-link": {
        padding: "0.75rem 1.5rem",
        fontSize: "1.09375rem",
        lineHeight: 1.5
    },
    ".pagination-lg .page-item:first-child .page-link": {
        borderTopLeftRadius: "0.3rem",
        borderBottomLeftRadius: "0.3rem"
    },
    ".pagination-lg .page-item:last-child .page-link": {
        borderTopRightRadius: "0.3rem",
        borderBottomRightRadius: "0.3rem"
    },
    ".pagination-sm .page-link": {
        padding: "0.25rem 0.5rem",
        fontSize: "0.765625rem",
        lineHeight: 1.5
    },
    ".pagination-sm .page-item:first-child .page-link": {
        borderTopLeftRadius: "0.2rem",
        borderBottomLeftRadius: "0.2rem"
    },
    ".pagination-sm .page-item:last-child .page-link": {
        borderTopRightRadius: "0.2rem",
        borderBottomRightRadius: "0.2rem"
    },
    ".badge": {
        display: "inline-block",
        padding: "0.25em 0.4em",
        fontSize: "75%",
        fontWeight: 700,
        lineHeight: 1,
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "baseline",
        borderRadius: "0.25rem",
        transition:
            "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out"
    },
    "a.badge:hover, a.badge:focus": { textDecoration: "none" },
    ".badge:empty": { display: "none" },
    ".btn .badge": { position: "relative", top: "-1px" },
    ".badge-pill": {
        paddingRight: "0.6em",
        paddingLeft: "0.6em",
        borderRadius: "10rem"
    },
    ".badge-primary": { color: "#fff", backgroundColor: "#2a9fd6" },
    "a.badge-primary:hover, a.badge-primary:focus": {
        color: "#fff",
        backgroundColor: "#2180ac"
    },
    "a.badge-primary:focus, a.badge-primary.focus": {
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(42, 159, 214, 0.5)"
    },
    ".badge-secondary": { color: "#fff", backgroundColor: "#555" },
    "a.badge-secondary:hover, a.badge-secondary:focus": {
        color: "#fff",
        backgroundColor: "#3c3c3c"
    },
    "a.badge-secondary:focus, a.badge-secondary.focus": {
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(85, 85, 85, 0.5)"
    },
    ".badge-success": { color: "#fff", backgroundColor: "#77b300" },
    "a.badge-success:hover, a.badge-success:focus": {
        color: "#fff",
        backgroundColor: "#558000"
    },
    "a.badge-success:focus, a.badge-success.focus": {
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(119, 179, 0, 0.5)"
    },
    ".badge-info": { color: "#fff", backgroundColor: "#93c" },
    "a.badge-info:hover, a.badge-info:focus": {
        color: "#fff",
        backgroundColor: "#7a29a3"
    },
    "a.badge-info:focus, a.badge-info.focus": {
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(153, 51, 204, 0.5)"
    },
    ".badge-warning": { color: "#fff", backgroundColor: "#f80" },
    "a.badge-warning:hover, a.badge-warning:focus": {
        color: "#fff",
        backgroundColor: "#cc6d00"
    },
    "a.badge-warning:focus, a.badge-warning.focus": {
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(255, 136, 0, 0.5)"
    },
    ".badge-danger": { color: "#fff", backgroundColor: "#c00" },
    "a.badge-danger:hover, a.badge-danger:focus": {
        color: "#fff",
        backgroundColor: "#990000"
    },
    "a.badge-danger:focus, a.badge-danger.focus": {
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(204, 0, 0, 0.5)"
    },
    ".badge-light": { color: "#fff", backgroundColor: "#222" },
    "a.badge-light:hover, a.badge-light:focus": {
        color: "#fff",
        backgroundColor: "#090909"
    },
    "a.badge-light:focus, a.badge-light.focus": {
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(34, 34, 34, 0.5)"
    },
    ".badge-dark": { color: "#fff", backgroundColor: "#adafae" },
    "a.badge-dark:hover, a.badge-dark:focus": {
        color: "#fff",
        backgroundColor: "#939695"
    },
    "a.badge-dark:focus, a.badge-dark.focus": {
        outline: "0",
        boxShadow: "0 0 0 0.2rem rgba(173, 175, 174, 0.5)"
    },
    ".jumbotron": {
        padding: "2rem 1rem",
        marginBottom: "2rem",
        backgroundColor: "#282828",
        borderRadius: "0.3rem"
    },
    ".jumbotron-fluid": {
        paddingRight: "0",
        paddingLeft: "0",
        borderRadius: "0"
    },
    ".alert": {
        position: "relative",
        padding: "0.75rem 1.25rem",
        marginBottom: "1rem",
        border: "none",
        borderRadius: "0.25rem",
        color: "#fff"
    },
    ".alert-heading": { color: "inherit" },
    ".alert-link": { fontWeight: 700 },
    ".alert-dismissible": { paddingRight: "3.8125rem" },
    ".alert-dismissible .close": {
        position: "absolute",
        top: "0",
        right: "0",
        zIndex: 2,
        padding: "0.75rem 1.25rem",
        color: "inherit"
    },
    ".alert-primary": {
        color: "#16536f",
        backgroundColor: "#2a9fd6",
        borderColor: "#c3e4f4"
    },
    ".alert-primary hr": { borderTopColor: "#addaf0" },
    ".alert-primary .alert-link": { color: "#0e3344" },
    ".alert-secondary": {
        color: "#2c2c2c",
        backgroundColor: "#555",
        borderColor: "#cfcfcf"
    },
    ".alert-secondary hr": { borderTopColor: "#c2c2c2" },
    ".alert-secondary .alert-link": { color: "#131313" },
    ".alert-success": {
        color: "#3e5d00",
        backgroundColor: "#77b300",
        borderColor: "#d9eab8"
    },
    ".alert-success hr": { borderTopColor: "#cee4a4" },
    ".alert-success .alert-link": { color: "#1c2a00" },
    ".alert-info": {
        color: "#501b6a",
        backgroundColor: "#93c",
        borderColor: "#e2c6f1"
    },
    ".alert-info hr": { borderTopColor: "#d8b2ec" },
    ".alert-info .alert-link": { color: "#311141" },
    ".alert-warning": {
        color: "#854700",
        backgroundColor: "#f80",
        borderColor: "#ffdeb8"
    },
    ".alert-warning hr": { borderTopColor: "#ffd29f" },
    ".alert-warning .alert-link": { color: "#522c00" },
    ".alert-danger": {
        color: "#6a0000",
        backgroundColor: "#c00",
        borderColor: "#f1b8b8"
    },
    ".alert-danger hr": { borderTopColor: "#eda3a3" },
    ".alert-danger .alert-link": { color: "#370000" },
    ".alert-light": {
        color: "#121212",
        backgroundColor: "#222",
        borderColor: "#c1c1c1"
    },
    ".alert-light hr": { borderTopColor: "#b4b4b4" },
    ".alert-light .alert-link": { color: "black" },
    ".alert-dark": {
        color: "#5a5b5a",
        backgroundColor: "#adafae",
        borderColor: "#e8e9e8"
    },
    ".alert-dark hr": { borderTopColor: "#dbdddb" },
    ".alert-dark .alert-link": { color: "#414141" },
    "@-webkit-keyframes progress-bar-stripes": {
        from: { backgroundPosition: "1rem 0" },
        to: { backgroundPosition: "0 0" }
    },
    "@keyframes progress-bar-stripes": {
        from: { backgroundPosition: "1rem 0" },
        to: { backgroundPosition: "0 0" }
    },
    ".progress": {
        display: ["-ms-flexbox", "flex"],
        height: "1rem",
        overflow: "hidden",
        lineHeight: 0,
        fontSize: "0.65625rem",
        backgroundColor: "#282828",
        borderRadius: "0.25rem"
    },
    ".progress-bar": {
        display: ["-ms-flexbox", "flex"],
        msFlexDirection: "column",
        flexDirection: "column",
        msFlexPack: "center",
        justifyContent: "center",
        overflow: "hidden",
        color: "#fff",
        textAlign: "center",
        whiteSpace: "nowrap",
        backgroundColor: "#2a9fd6",
        transition: "width 0.6s ease"
    },
    ".progress-bar-striped": {
        backgroundImage:
            "linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)",
        backgroundSize: "1rem 1rem"
    },
    ".progress-bar-animated": {
        WebkitAnimation: "progress-bar-stripes 1s linear infinite",
        animation: "progress-bar-stripes 1s linear infinite"
    },
    ".media": {
        display: ["-ms-flexbox", "flex"],
        msFlexAlign: "start",
        alignItems: "flex-start"
    },
    ".media-body": { msFlex: "1", flex: 1 },
    ".list-group": {
        display: ["-ms-flexbox", "flex"],
        msFlexDirection: "column",
        flexDirection: "column",
        paddingLeft: "0",
        marginBottom: "0",
        borderRadius: "0.25rem"
    },
    ".list-group-item-action": {
        width: "100%",
        color: "#888",
        textAlign: "inherit"
    },
    ".list-group-item-action:hover, .list-group-item-action:focus": {
        zIndex: 1,
        color: "#282828",
        textDecoration: "none",
        backgroundColor: "#2a9fd6"
    },
    ".list-group-item-action:active": {
        color: "#adafae",
        backgroundColor: "#2a9fd6"
    },
    ".list-group-item": {
        position: "relative",
        display: "block",
        padding: "0.75rem 1.25rem",
        backgroundColor: "#222",
        border: "1px solid #282828"
    },
    ".list-group-item:first-child": {
        borderTopLeftRadius: "inherit",
        borderTopRightRadius: "inherit"
    },
    ".list-group-item:last-child": {
        borderBottomRightRadius: "inherit",
        borderBottomLeftRadius: "inherit"
    },
    ".list-group-item.disabled, .list-group-item:disabled": {
        color: "#555",
        pointerEvents: "none",
        backgroundColor: "#282828"
    },
    ".list-group-item.active": {
        zIndex: 2,
        color: "#fff",
        backgroundColor: "#2a9fd6",
        borderColor: "#2a9fd6"
    },
    ".list-group-item + .list-group-item": { borderTopWidth: "0" },
    ".list-group-item + .list-group-item.active": {
        marginTop: "-1px",
        borderTopWidth: "1px"
    },
    ".list-group-horizontal": { msFlexDirection: "row", flexDirection: "row" },
    ".list-group-horizontal > .list-group-item:first-child": {
        borderBottomLeftRadius: "0.25rem",
        borderTopRightRadius: "0"
    },
    ".list-group-horizontal > .list-group-item:last-child": {
        borderTopRightRadius: "0.25rem",
        borderBottomLeftRadius: "0"
    },
    ".list-group-horizontal > .list-group-item.active": { marginTop: "0" },
    ".list-group-horizontal > .list-group-item + .list-group-item": {
        borderTopWidth: "1px",
        borderLeftWidth: "0"
    },
    ".list-group-horizontal > .list-group-item + .list-group-item.active": {
        marginLeft: "-1px",
        borderLeftWidth: "1px"
    },
    ".list-group-flush": { borderRadius: "0" },
    ".list-group-flush > .list-group-item": { borderWidth: "0 0 1px" },
    ".list-group-flush > .list-group-item:last-child": { borderBottomWidth: "0" },
    ".list-group-item-primary": { color: "#16536f", backgroundColor: "#c3e4f4" },
    ".list-group-item-primary.list-group-item-action:hover, .list-group-item-primary.list-group-item-action:focus": {
        color: "#16536f",
        backgroundColor: "#addaf0"
    },
    ".list-group-item-primary.list-group-item-action.active": {
        color: "#fff",
        backgroundColor: "#16536f",
        borderColor: "#16536f"
    },
    ".list-group-item-secondary": {
        color: "#2c2c2c",
        backgroundColor: "#cfcfcf"
    },
    ".list-group-item-secondary.list-group-item-action:hover, .list-group-item-secondary.list-group-item-action:focus": {
        color: "#2c2c2c",
        backgroundColor: "#c2c2c2"
    },
    ".list-group-item-secondary.list-group-item-action.active": {
        color: "#fff",
        backgroundColor: "#2c2c2c",
        borderColor: "#2c2c2c"
    },
    ".list-group-item-success": { color: "#3e5d00", backgroundColor: "#d9eab8" },
    ".list-group-item-success.list-group-item-action:hover, .list-group-item-success.list-group-item-action:focus": {
        color: "#3e5d00",
        backgroundColor: "#cee4a4"
    },
    ".list-group-item-success.list-group-item-action.active": {
        color: "#fff",
        backgroundColor: "#3e5d00",
        borderColor: "#3e5d00"
    },
    ".list-group-item-info": { color: "#501b6a", backgroundColor: "#e2c6f1" },
    ".list-group-item-info.list-group-item-action:hover, .list-group-item-info.list-group-item-action:focus": {
        color: "#501b6a",
        backgroundColor: "#d8b2ec"
    },
    ".list-group-item-info.list-group-item-action.active": {
        color: "#fff",
        backgroundColor: "#501b6a",
        borderColor: "#501b6a"
    },
    ".list-group-item-warning": { color: "#854700", backgroundColor: "#ffdeb8" },
    ".list-group-item-warning.list-group-item-action:hover, .list-group-item-warning.list-group-item-action:focus": {
        color: "#854700",
        backgroundColor: "#ffd29f"
    },
    ".list-group-item-warning.list-group-item-action.active": {
        color: "#fff",
        backgroundColor: "#854700",
        borderColor: "#854700"
    },
    ".list-group-item-danger": { color: "#6a0000", backgroundColor: "#f1b8b8" },
    ".list-group-item-danger.list-group-item-action:hover, .list-group-item-danger.list-group-item-action:focus": {
        color: "#6a0000",
        backgroundColor: "#eda3a3"
    },
    ".list-group-item-danger.list-group-item-action.active": {
        color: "#fff",
        backgroundColor: "#6a0000",
        borderColor: "#6a0000"
    },
    ".list-group-item-light": { color: "#121212", backgroundColor: "#c1c1c1" },
    ".list-group-item-light.list-group-item-action:hover, .list-group-item-light.list-group-item-action:focus": {
        color: "#121212",
        backgroundColor: "#b4b4b4"
    },
    ".list-group-item-light.list-group-item-action.active": {
        color: "#fff",
        backgroundColor: "#121212",
        borderColor: "#121212"
    },
    ".list-group-item-dark": { color: "#5a5b5a", backgroundColor: "#e8e9e8" },
    ".list-group-item-dark.list-group-item-action:hover, .list-group-item-dark.list-group-item-action:focus": {
        color: "#5a5b5a",
        backgroundColor: "#dbdddb"
    },
    ".list-group-item-dark.list-group-item-action.active": {
        color: "#fff",
        backgroundColor: "#5a5b5a",
        borderColor: "#5a5b5a"
    },
    ".close": {
        cssFloat: "right",
        fontSize: "1.3125rem",
        fontWeight: 700,
        lineHeight: 1,
        color: "#fff",
        textShadow: "none",
        opacity: 0.6
    },
    ".close:hover": { color: "#fff", textDecoration: "none", opacity: 1 },
    ".close:not(:disabled):not(.disabled):hover, .close:not(:disabled):not(.disabled):focus": {
        opacity: 0.75
    },
    "button.close": { padding: "0", backgroundColor: "transparent", border: "0" },
    "a.close.disabled": { pointerEvents: "none" },
    ".toast": {
        msFlexPreferredSize: "350px",
        flexBasis: "350px",
        maxWidth: "350px",
        fontSize: "0.875rem",
        color: "#fff",
        backgroundColor: "#222",
        backgroundClip: "padding-box",
        border: "1px solid #282828",
        boxShadow: "0 0.25rem 0.75rem rgba(0, 0, 0, 0.1)",
        opacity: 0,
        borderRadius: "0.25rem"
    },
    ".toast:not(:last-child)": { marginBottom: "0.75rem" },
    ".toast.showing": { opacity: 1 },
    ".toast.show": { display: "block", opacity: 1 },
    ".toast.hide": { display: "none" },
    ".toast-header": {
        display: ["-ms-flexbox", "flex"],
        msFlexAlign: "center",
        alignItems: "center",
        padding: "0.25rem 0.75rem",
        color: "#adafae",
        backgroundColor: "#222",
        backgroundClip: "padding-box",
        borderBottom: "1px solid #282828",
        borderTopLeftRadius: "calc(0.25rem - 1px)",
        borderTopRightRadius: "calc(0.25rem - 1px)"
    },
    ".toast-body": { padding: "0.75rem" },
    ".modal-open": { overflow: "hidden" },
    ".modal-open .modal": { overflowX: "hidden", overflowY: "auto" },
    ".modal": {
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 1050,
        display: "none",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        outline: "0"
    },
    ".modal-dialog": {
        position: "relative",
        width: "auto",
        margin: "0.5rem",
        pointerEvents: "none"
    },
    ".modal.fade .modal-dialog": {
        transition: [
            "-webkit-transform 0.3s ease-out",
            "transform 0.3s ease-out",
            "transform 0.3s ease-out, -webkit-transform 0.3s ease-out"
        ],
        WebkitTransform: "translate(0, -50px)",
        transform: "translate(0, -50px)"
    },
    ".modal.show .modal-dialog": { WebkitTransform: "none", transform: "none" },
    ".modal.modal-static .modal-dialog": {
        WebkitTransform: "scale(1.02)",
        transform: "scale(1.02)"
    },
    ".modal-dialog-scrollable": {
        display: ["-ms-flexbox", "flex"],
        maxHeight: "calc(100% - 1rem)"
    },
    ".modal-dialog-scrollable .modal-content": {
        maxHeight: "calc(100vh - 1rem)",
        overflow: "hidden"
    },
    ".modal-dialog-scrollable .modal-header,\n.modal-dialog-scrollable .modal-footer": {
        msFlexNegative: "0",
        flexShrink: 0
    },
    ".modal-dialog-scrollable .modal-body": { overflowY: "auto" },
    ".modal-dialog-centered": {
        display: ["-ms-flexbox", "flex"],
        msFlexAlign: "center",
        alignItems: "center",
        minHeight: "calc(100% - 1rem)"
    },
    ".modal-dialog-centered::before": {
        display: "block",
        height: [
            "calc(100vh - 1rem)",
            "-webkit-min-content",
            "-moz-min-content",
            "min-content"
        ],
        content: '""'
    },
    ".modal-dialog-centered.modal-dialog-scrollable": {
        msFlexDirection: "column",
        flexDirection: "column",
        msFlexPack: "center",
        justifyContent: "center",
        height: "100%"
    },
    ".modal-dialog-centered.modal-dialog-scrollable .modal-content": {
        maxHeight: "none"
    },
    ".modal-dialog-centered.modal-dialog-scrollable::before": { content: "none" },
    ".modal-content": {
        position: "relative",
        display: ["-ms-flexbox", "flex"],
        msFlexDirection: "column",
        flexDirection: "column",
        width: "100%",
        pointerEvents: "auto",
        backgroundColor: "#222",
        backgroundClip: "padding-box",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "0.3rem",
        outline: "0"
    },
    ".modal-backdrop": {
        position: "fixed",
        top: "0",
        left: "0",
        zIndex: 1040,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#000"
    },
    ".modal-backdrop.fade": { opacity: 0 },
    ".modal-backdrop.show": { opacity: 0.5 },
    ".modal-header": {
        display: ["-ms-flexbox", "flex"],
        msFlexAlign: "start",
        alignItems: "flex-start",
        msFlexPack: "justify",
        justifyContent: "space-between",
        padding: "1rem 1rem",
        borderBottom: "1px solid #282828",
        borderTopLeftRadius: "calc(0.3rem - 1px)",
        borderTopRightRadius: "calc(0.3rem - 1px)"
    },
    ".modal-header .close": {
        padding: "1rem 1rem",
        margin: "-1rem -1rem -1rem auto"
    },
    ".modal-title": { marginBottom: "0", lineHeight: 1.5 },
    ".modal-body": {
        position: "relative",
        msFlex: "1 1 auto",
        flex: "1 1 auto",
        padding: "1rem"
    },
    ".modal-footer": {
        display: ["-ms-flexbox", "flex"],
        msFlexWrap: "wrap",
        flexWrap: "wrap",
        msFlexAlign: "center",
        alignItems: "center",
        msFlexPack: "end",
        justifyContent: "flex-end",
        padding: "0.75rem",
        borderTop: "1px solid #282828",
        borderBottomRightRadius: "calc(0.3rem - 1px)",
        borderBottomLeftRadius: "calc(0.3rem - 1px)"
    },
    ".modal-footer > *": { margin: "0.25rem" },
    ".modal-scrollbar-measure": {
        position: "absolute",
        top: "-9999px",
        width: "50px",
        height: "50px",
        overflow: "scroll"
    },
    ".tooltip": {
        position: "absolute",
        zIndex: 1070,
        display: "block",
        margin: "0",
        fontFamily:
            'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 1.5,
        textAlign: ["left", "start"],
        textDecoration: "none",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        whiteSpace: "normal",
        lineBreak: "auto",
        fontSize: "0.765625rem",
        wordWrap: "break-word",
        opacity: 0
    },
    ".tooltip.show": { opacity: 1 },
    ".tooltip .arrow": {
        position: "absolute",
        display: "block",
        width: "0.8rem",
        height: "0.4rem"
    },
    ".tooltip .arrow::before": {
        position: "absolute",
        content: '""',
        borderColor: "transparent",
        borderStyle: "solid"
    },
    '.bs-tooltip-top, .bs-tooltip-auto[x-placement^="top"]': {
        padding: "0.4rem 0"
    },
    '.bs-tooltip-top .arrow, .bs-tooltip-auto[x-placement^="top"] .arrow': {
        bottom: "0"
    },
    '.bs-tooltip-top .arrow::before, .bs-tooltip-auto[x-placement^="top"] .arrow::before': {
        top: "0",
        borderWidth: "0.4rem 0.4rem 0",
        borderTopColor: "#282828"
    },
    '.bs-tooltip-right, .bs-tooltip-auto[x-placement^="right"]': {
        padding: "0 0.4rem"
    },
    '.bs-tooltip-right .arrow, .bs-tooltip-auto[x-placement^="right"] .arrow': {
        left: "0",
        width: "0.4rem",
        height: "0.8rem"
    },
    '.bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement^="right"] .arrow::before': {
        right: "0",
        borderWidth: "0.4rem 0.4rem 0.4rem 0",
        borderRightColor: "#282828"
    },
    '.bs-tooltip-bottom, .bs-tooltip-auto[x-placement^="bottom"]': {
        padding: "0.4rem 0"
    },
    '.bs-tooltip-bottom .arrow, .bs-tooltip-auto[x-placement^="bottom"] .arrow': {
        top: "0"
    },
    '.bs-tooltip-bottom .arrow::before, .bs-tooltip-auto[x-placement^="bottom"] .arrow::before': {
        bottom: "0",
        borderWidth: "0 0.4rem 0.4rem",
        borderBottomColor: "#282828"
    },
    '.bs-tooltip-left, .bs-tooltip-auto[x-placement^="left"]': {
        padding: "0 0.4rem"
    },
    '.bs-tooltip-left .arrow, .bs-tooltip-auto[x-placement^="left"] .arrow': {
        right: "0",
        width: "0.4rem",
        height: "0.8rem"
    },
    '.bs-tooltip-left .arrow::before, .bs-tooltip-auto[x-placement^="left"] .arrow::before': {
        left: "0",
        borderWidth: "0.4rem 0 0.4rem 0.4rem",
        borderLeftColor: "#282828"
    },
    ".tooltip-inner": {
        maxWidth: "200px",
        padding: "0.25rem 0.5rem",
        color: "#fff",
        textAlign: "center",
        backgroundColor: "#282828",
        borderRadius: "0.25rem"
    },
    ".popover": {
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: 1060,
        display: "block",
        maxWidth: "276px",
        fontFamily:
            'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: 1.5,
        textAlign: ["left", "start"],
        textDecoration: "none",
        textShadow: "none",
        textTransform: "none",
        letterSpacing: "normal",
        wordBreak: "normal",
        wordSpacing: "normal",
        whiteSpace: "normal",
        lineBreak: "auto",
        fontSize: "0.765625rem",
        wordWrap: "break-word",
        backgroundColor: "#282828",
        backgroundClip: "padding-box",
        border: "1px solid rgba(0, 0, 0, 0.2)",
        borderRadius: "0.3rem"
    },
    ".popover .arrow": {
        position: "absolute",
        display: "block",
        width: "1rem",
        height: "0.5rem",
        margin: "0 0.3rem"
    },
    ".popover .arrow::before, .popover .arrow::after": {
        position: "absolute",
        display: "block",
        content: '""',
        borderColor: "transparent",
        borderStyle: "solid"
    },
    '.bs-popover-top, .bs-popover-auto[x-placement^="top"]': {
        marginBottom: "0.5rem"
    },
    '.bs-popover-top > .arrow, .bs-popover-auto[x-placement^="top"] > .arrow': {
        bottom: "calc(-0.5rem - 1px)"
    },
    '.bs-popover-top > .arrow::before, .bs-popover-auto[x-placement^="top"] > .arrow::before': {
        bottom: "0",
        borderWidth: "0.5rem 0.5rem 0",
        borderTopColor: "rgba(0, 0, 0, 0.25)"
    },
    '.bs-popover-top > .arrow::after, .bs-popover-auto[x-placement^="top"] > .arrow::after': {
        bottom: "1px",
        borderWidth: "0.5rem 0.5rem 0",
        borderTopColor: "#282828"
    },
    '.bs-popover-right, .bs-popover-auto[x-placement^="right"]': {
        marginLeft: "0.5rem"
    },
    '.bs-popover-right > .arrow, .bs-popover-auto[x-placement^="right"] > .arrow': {
        left: "calc(-0.5rem - 1px)",
        width: "0.5rem",
        height: "1rem",
        margin: "0.3rem 0"
    },
    '.bs-popover-right > .arrow::before, .bs-popover-auto[x-placement^="right"] > .arrow::before': {
        left: "0",
        borderWidth: "0.5rem 0.5rem 0.5rem 0",
        borderRightColor: "rgba(0, 0, 0, 0.25)"
    },
    '.bs-popover-right > .arrow::after, .bs-popover-auto[x-placement^="right"] > .arrow::after': {
        left: "1px",
        borderWidth: "0.5rem 0.5rem 0.5rem 0",
        borderRightColor: "#282828"
    },
    '.bs-popover-bottom, .bs-popover-auto[x-placement^="bottom"]': {
        marginTop: "0.5rem"
    },
    '.bs-popover-bottom > .arrow, .bs-popover-auto[x-placement^="bottom"] > .arrow': {
        top: "calc(-0.5rem - 1px)"
    },
    '.bs-popover-bottom > .arrow::before, .bs-popover-auto[x-placement^="bottom"] > .arrow::before': {
        top: "0",
        borderWidth: "0 0.5rem 0.5rem 0.5rem",
        borderBottomColor: "rgba(0, 0, 0, 0.25)"
    },
    '.bs-popover-bottom > .arrow::after, .bs-popover-auto[x-placement^="bottom"] > .arrow::after': {
        top: "1px",
        borderWidth: "0 0.5rem 0.5rem 0.5rem",
        borderBottomColor: "#282828"
    },
    '.bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before': {
        position: "absolute",
        top: "0",
        left: "50%",
        display: "block",
        width: "1rem",
        marginLeft: "-0.5rem",
        content: '""',
        borderBottom: "1px solid #202020"
    },
    '.bs-popover-left, .bs-popover-auto[x-placement^="left"]': {
        marginRight: "0.5rem"
    },
    '.bs-popover-left > .arrow, .bs-popover-auto[x-placement^="left"] > .arrow': {
        right: "calc(-0.5rem - 1px)",
        width: "0.5rem",
        height: "1rem",
        margin: "0.3rem 0"
    },
    '.bs-popover-left > .arrow::before, .bs-popover-auto[x-placement^="left"] > .arrow::before': {
        right: "0",
        borderWidth: "0.5rem 0 0.5rem 0.5rem",
        borderLeftColor: "rgba(0, 0, 0, 0.25)"
    },
    '.bs-popover-left > .arrow::after, .bs-popover-auto[x-placement^="left"] > .arrow::after': {
        right: "1px",
        borderWidth: "0.5rem 0 0.5rem 0.5rem",
        borderLeftColor: "#282828"
    },
    ".popover-header": {
        padding: "0.5rem 0.75rem",
        marginBottom: "0",
        fontSize: "0.875rem",
        color: "#fff",
        backgroundColor: "#202020",
        borderBottom: "1px solid #141414",
        borderTopLeftRadius: "calc(0.3rem - 1px)",
        borderTopRightRadius: "calc(0.3rem - 1px)"
    },
    ".popover-header:empty": { display: "none" },
    ".popover-body": { padding: "0.5rem 0.75rem", color: "#adafae" },
    ".carousel": { position: "relative" },
    ".carousel.pointer-event": { msTouchAction: "pan-y", touchAction: "pan-y" },
    ".carousel-inner": {
        position: "relative",
        width: "100%",
        overflow: "hidden"
    },
    ".carousel-inner::after": { display: "block", clear: "both", content: '""' },
    ".carousel-item": {
        position: "relative",
        display: "none",
        cssFloat: "left",
        width: "100%",
        marginRight: "-100%",
        WebkitBackfaceVisibility: "hidden",
        backfaceVisibility: "hidden",
        transition: [
            "-webkit-transform 0.6s ease-in-out",
            "transform 0.6s ease-in-out",
            "transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out"
        ]
    },
    ".carousel-item.active,\n.carousel-item-next,\n.carousel-item-prev": {
        display: "block"
    },
    ".carousel-item-next:not(.carousel-item-left),\n.active.carousel-item-right": {
        WebkitTransform: "translateX(100%)",
        transform: "translateX(100%)"
    },
    ".carousel-item-prev:not(.carousel-item-right),\n.active.carousel-item-left": {
        WebkitTransform: "translateX(-100%)",
        transform: "translateX(-100%)"
    },
    ".carousel-fade .carousel-item": {
        opacity: 0,
        transitionProperty: "opacity",
        WebkitTransform: "none",
        transform: "none"
    },
    ".carousel-fade .carousel-item.active,\n.carousel-fade .carousel-item-next.carousel-item-left,\n.carousel-fade .carousel-item-prev.carousel-item-right": {
        zIndex: 1,
        opacity: 1
    },
    ".carousel-fade .active.carousel-item-left,\n.carousel-fade .active.carousel-item-right": {
        zIndex: 0,
        opacity: 0,
        transition: "opacity 0s 0.6s"
    },
    ".carousel-control-prev,\n.carousel-control-next": {
        position: "absolute",
        top: "0",
        bottom: "0",
        zIndex: 1,
        display: ["-ms-flexbox", "flex"],
        msFlexAlign: "center",
        alignItems: "center",
        msFlexPack: "center",
        justifyContent: "center",
        width: "15%",
        color: "#fff",
        textAlign: "center",
        opacity: 0.5,
        transition: "opacity 0.15s ease"
    },
    ".carousel-control-prev:hover, .carousel-control-prev:focus,\n.carousel-control-next:hover,\n.carousel-control-next:focus": {
        color: "#fff",
        textDecoration: "none",
        outline: "0",
        opacity: 0.9
    },
    ".carousel-control-prev": { left: "0" },
    ".carousel-control-next": { right: "0" },
    ".carousel-control-prev-icon,\n.carousel-control-next-icon": {
        display: "inline-block",
        width: "20px",
        height: "20px",
        background: "no-repeat 50% / 100% 100%"
    },
    ".carousel-control-prev-icon": {
        backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e\")"
    },
    ".carousel-control-next-icon": {
        backgroundImage:
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z'/%3e%3c/svg%3e\")"
    },
    ".carousel-indicators": {
        position: "absolute",
        right: "0",
        bottom: "0",
        left: "0",
        zIndex: 15,
        display: ["-ms-flexbox", "flex"],
        msFlexPack: "center",
        justifyContent: "center",
        paddingLeft: "0",
        marginRight: "15%",
        marginLeft: "15%",
        listStyle: "none"
    },
    ".carousel-indicators li": {
        boxSizing: "content-box",
        msFlex: "0 1 auto",
        flex: "0 1 auto",
        width: "30px",
        height: "3px",
        marginRight: "3px",
        marginLeft: "3px",
        textIndent: "-999px",
        cursor: "pointer",
        backgroundColor: "#fff",
        backgroundClip: "padding-box",
        borderTop: "10px solid transparent",
        borderBottom: "10px solid transparent",
        opacity: 0.5,
        transition: "opacity 0.6s ease"
    },
    ".carousel-indicators .active": { opacity: 1 },
    ".carousel-caption": {
        position: "absolute",
        right: "15%",
        bottom: "20px",
        left: "15%",
        zIndex: 10,
        paddingTop: "20px",
        paddingBottom: "20px",
        color: "#fff",
        textAlign: "center"
    },
    "@-webkit-keyframes spinner-border": {
        to: { WebkitTransform: "rotate(360deg)", transform: "rotate(360deg)" }
    },
    "@keyframes spinner-border": {
        to: { WebkitTransform: "rotate(360deg)", transform: "rotate(360deg)" }
    },
    ".spinner-border": {
        display: "inline-block",
        width: "2rem",
        height: "2rem",
        verticalAlign: "text-bottom",
        border: "0.25em solid currentColor",
        borderRightColor: "transparent",
        borderRadius: "50%",
        WebkitAnimation: "spinner-border .75s linear infinite",
        animation: "spinner-border .75s linear infinite"
    },
    ".spinner-border-sm": { width: "1rem", height: "1rem", borderWidth: "0.2em" },
    "@-webkit-keyframes spinner-grow": {
        "0%": { WebkitTransform: "scale(0)", transform: "scale(0)" },
        "50%": { opacity: 1, WebkitTransform: "none", transform: "none" }
    },
    "@keyframes spinner-grow": {
        "0%": { WebkitTransform: "scale(0)", transform: "scale(0)" },
        "50%": { opacity: 1, WebkitTransform: "none", transform: "none" }
    },
    ".spinner-grow": {
        display: "inline-block",
        width: "2rem",
        height: "2rem",
        verticalAlign: "text-bottom",
        backgroundColor: "currentColor",
        borderRadius: "50%",
        opacity: 0,
        WebkitAnimation: "spinner-grow .75s linear infinite",
        animation: "spinner-grow .75s linear infinite"
    },
    ".spinner-grow-sm": { width: "1rem", height: "1rem" },
    ".align-baseline": { verticalAlign: "baseline !important" },
    ".align-top": { verticalAlign: "top !important" },
    ".align-middle": { verticalAlign: "middle !important" },
    ".align-bottom": { verticalAlign: "bottom !important" },
    ".align-text-bottom": { verticalAlign: "text-bottom !important" },
    ".align-text-top": { verticalAlign: "text-top !important" },
    ".bg-primary": { backgroundColor: "#2a9fd6 !important" },
    "a.bg-primary:hover, a.bg-primary:focus,\nbutton.bg-primary:hover,\nbutton.bg-primary:focus": {
        backgroundColor: "#2180ac !important"
    },
    ".bg-secondary": { backgroundColor: "#555 !important" },
    "a.bg-secondary:hover, a.bg-secondary:focus,\nbutton.bg-secondary:hover,\nbutton.bg-secondary:focus": {
        backgroundColor: "#3c3c3c !important"
    },
    ".bg-success": { backgroundColor: "#77b300 !important" },
    "a.bg-success:hover, a.bg-success:focus,\nbutton.bg-success:hover,\nbutton.bg-success:focus": {
        backgroundColor: "#558000 !important"
    },
    ".bg-info": { backgroundColor: "#93c !important" },
    "a.bg-info:hover, a.bg-info:focus,\nbutton.bg-info:hover,\nbutton.bg-info:focus": {
        backgroundColor: "#7a29a3 !important"
    },
    ".bg-warning": { backgroundColor: "#f80 !important" },
    "a.bg-warning:hover, a.bg-warning:focus,\nbutton.bg-warning:hover,\nbutton.bg-warning:focus": {
        backgroundColor: "#cc6d00 !important"
    },
    ".bg-danger": { backgroundColor: "#c00 !important" },
    "a.bg-danger:hover, a.bg-danger:focus,\nbutton.bg-danger:hover,\nbutton.bg-danger:focus": {
        backgroundColor: "#990000 !important"
    },
    ".bg-light": { backgroundColor: "#222 !important" },
    "a.bg-light:hover, a.bg-light:focus,\nbutton.bg-light:hover,\nbutton.bg-light:focus": {
        backgroundColor: "#090909 !important"
    },
    ".bg-dark": { backgroundColor: "#adafae !important" },
    "a.bg-dark:hover, a.bg-dark:focus,\nbutton.bg-dark:hover,\nbutton.bg-dark:focus": {
        backgroundColor: "#939695 !important"
    },
    ".bg-white": { backgroundColor: "#fff !important" },
    ".bg-transparent": { backgroundColor: "transparent !important" },
    ".border": { border: "1px solid #dee2e6 !important" },
    ".border-top": { borderTop: "1px solid #dee2e6 !important" },
    ".border-right": { borderRight: "1px solid #dee2e6 !important" },
    ".border-bottom": { borderBottom: "1px solid #dee2e6 !important" },
    ".border-left": { borderLeft: "1px solid #dee2e6 !important" },
    ".border-0": { border: "0 !important" },
    ".border-top-0": { borderTop: "0 !important" },
    ".border-right-0": { borderRight: "0 !important" },
    ".border-bottom-0": { borderBottom: "0 !important" },
    ".border-left-0": { borderLeft: "0 !important" },
    ".border-primary": { borderColor: "#2a9fd6 !important" },
    ".border-secondary": { borderColor: "#555 !important" },
    ".border-success": { borderColor: "#77b300 !important" },
    ".border-info": { borderColor: "#93c !important" },
    ".border-warning": { borderColor: "#f80 !important" },
    ".border-danger": { borderColor: "#c00 !important" },
    ".border-light": { borderColor: "#222 !important" },
    ".border-dark": { borderColor: "#adafae !important" },
    ".border-white": { borderColor: "#fff !important" },
    ".rounded-sm": { borderRadius: "0.2rem !important" },
    ".rounded": { borderRadius: "0.25rem !important" },
    ".rounded-top": {
        borderTopLeftRadius: "0.25rem !important",
        borderTopRightRadius: "0.25rem !important"
    },
    ".rounded-right": {
        borderTopRightRadius: "0.25rem !important",
        borderBottomRightRadius: "0.25rem !important"
    },
    ".rounded-bottom": {
        borderBottomRightRadius: "0.25rem !important",
        borderBottomLeftRadius: "0.25rem !important"
    },
    ".rounded-left": {
        borderTopLeftRadius: "0.25rem !important",
        borderBottomLeftRadius: "0.25rem !important"
    },
    ".rounded-lg": { borderRadius: "0.3rem !important" },
    ".rounded-circle": { borderRadius: "50% !important" },
    ".rounded-pill": { borderRadius: "50rem !important" },
    ".rounded-0": { borderRadius: "0 !important" },
    ".clearfix::after": { display: "block", clear: "both", content: '""' },
    ".d-none": { display: "none !important" },
    ".d-inline": { display: "inline !important" },
    ".d-inline-block": { display: "inline-block !important" },
    ".d-block": { display: "block !important" },
    ".d-table": { display: "table !important" },
    ".d-table-row": { display: "table-row !important" },
    ".d-table-cell": { display: "table-cell !important" },
    ".d-flex": { display: ["-ms-flexbox !important", "flex !important"] },
    ".d-inline-flex": {
        display: ["-ms-inline-flexbox !important", "inline-flex !important"]
    },
    "@media print": [
        {
            ".d-print-none": { display: "none !important" },
            ".d-print-inline": { display: "inline !important" },
            ".d-print-inline-block": { display: "inline-block !important" },
            ".d-print-block": { display: "block !important" },
            ".d-print-table": { display: "table !important" },
            ".d-print-table-row": { display: "table-row !important" },
            ".d-print-table-cell": { display: "table-cell !important" },
            ".d-print-flex": {
                display: ["-ms-flexbox !important", "flex !important"]
            },
            ".d-print-inline-flex": {
                display: ["-ms-inline-flexbox !important", "inline-flex !important"]
            }
        },
        {
            "*,\n  *::before,\n  *::after": {
                textShadow: "none !important",
                boxShadow: "none !important"
            },
            "a:not(.btn)": { textDecoration: "underline" },
            "abbr[title]::after": { content: '" (" attr(title) ")"' },
            pre: { whiteSpace: "pre-wrap !important" },
            "pre,\n  blockquote": {
                border: "1px solid #888",
                pageBreakInside: "avoid"
            },
            thead: { display: "table-header-group" },
            "tr,\n  img": { pageBreakInside: "avoid" },
            "p,\n  h2,\n  h3": { orphans: 3, widows: 3 },
            "h2,\n  h3": { pageBreakAfter: "avoid" },
            "@page": { size: "a3" },
            body: { minWidth: "992px !important" },
            ".container": { minWidth: "992px !important" },
            ".navbar": { display: "none" },
            ".badge": { border: "1px solid #000" },
            ".table": { borderCollapse: "collapse !important" },
            ".table td,\n  .table th": { backgroundColor: "#fff !important" },
            ".table-bordered th,\n  .table-bordered td": {
                border: "1px solid #dee2e6 !important"
            },
            ".table-dark": { color: "inherit" },
            ".table-dark th,\n  .table-dark td,\n  .table-dark thead th,\n  .table-dark tbody + tbody": {
                borderColor: "#282828"
            },
            ".table .thead-dark th": { color: "inherit", borderColor: "#282828" }
        }
    ],
    ".embed-responsive": {
        position: "relative",
        display: "block",
        width: "100%",
        padding: "0",
        overflow: "hidden"
    },
    ".embed-responsive::before": { display: "block", content: '""' },
    ".embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video": {
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "100%",
        border: "0"
    },
    ".embed-responsive-21by9::before": { paddingTop: "42.857143%" },
    ".embed-responsive-16by9::before": { paddingTop: "56.25%" },
    ".embed-responsive-4by3::before": { paddingTop: "75%" },
    ".embed-responsive-1by1::before": { paddingTop: "100%" },
    ".flex-row": {
        msFlexDirection: "row !important",
        flexDirection: "row !important"
    },
    ".flex-column": {
        msFlexDirection: "column !important",
        flexDirection: "column !important"
    },
    ".flex-row-reverse": {
        msFlexDirection: "row-reverse !important",
        flexDirection: "row-reverse !important"
    },
    ".flex-column-reverse": {
        msFlexDirection: "column-reverse !important",
        flexDirection: "column-reverse !important"
    },
    ".flex-wrap": { msFlexWrap: "wrap !important", flexWrap: "wrap !important" },
    ".flex-nowrap": {
        msFlexWrap: "nowrap !important",
        flexWrap: "nowrap !important"
    },
    ".flex-wrap-reverse": {
        msFlexWrap: "wrap-reverse !important",
        flexWrap: "wrap-reverse !important"
    },
    ".flex-fill": { msFlex: "1 1 auto !important", flex: "1 1 auto !important" },
    ".flex-grow-0": { msFlexPositive: "0 !important", flexGrow: "0 !important" },
    ".flex-grow-1": { msFlexPositive: "1 !important", flexGrow: "1 !important" },
    ".flex-shrink-0": {
        msFlexNegative: "0 !important",
        flexShrink: "0 !important"
    },
    ".flex-shrink-1": {
        msFlexNegative: "1 !important",
        flexShrink: "1 !important"
    },
    ".justify-content-start": {
        msFlexPack: "start !important",
        justifyContent: "flex-start !important"
    },
    ".justify-content-end": {
        msFlexPack: "end !important",
        justifyContent: "flex-end !important"
    },
    ".justify-content-center": {
        msFlexPack: "center !important",
        justifyContent: "center !important"
    },
    ".justify-content-between": {
        msFlexPack: "justify !important",
        justifyContent: "space-between !important"
    },
    ".justify-content-around": {
        msFlexPack: "distribute !important",
        justifyContent: "space-around !important"
    },
    ".align-items-start": {
        msFlexAlign: "start !important",
        alignItems: "flex-start !important"
    },
    ".align-items-end": {
        msFlexAlign: "end !important",
        alignItems: "flex-end !important"
    },
    ".align-items-center": {
        msFlexAlign: "center !important",
        alignItems: "center !important"
    },
    ".align-items-baseline": {
        msFlexAlign: "baseline !important",
        alignItems: "baseline !important"
    },
    ".align-items-stretch": {
        msFlexAlign: "stretch !important",
        alignItems: "stretch !important"
    },
    ".align-content-start": {
        msFlexLinePack: "start !important",
        alignContent: "flex-start !important"
    },
    ".align-content-end": {
        msFlexLinePack: "end !important",
        alignContent: "flex-end !important"
    },
    ".align-content-center": {
        msFlexLinePack: "center !important",
        alignContent: "center !important"
    },
    ".align-content-between": {
        msFlexLinePack: "justify !important",
        alignContent: "space-between !important"
    },
    ".align-content-around": {
        msFlexLinePack: "distribute !important",
        alignContent: "space-around !important"
    },
    ".align-content-stretch": {
        msFlexLinePack: "stretch !important",
        alignContent: "stretch !important"
    },
    ".align-self-auto": {
        msFlexItemAlign: "auto !important",
        alignSelf: "auto !important"
    },
    ".align-self-start": {
        msFlexItemAlign: "start !important",
        alignSelf: "flex-start !important"
    },
    ".align-self-end": {
        msFlexItemAlign: "end !important",
        alignSelf: "flex-end !important"
    },
    ".align-self-center": {
        msFlexItemAlign: "center !important",
        alignSelf: "center !important"
    },
    ".align-self-baseline": {
        msFlexItemAlign: "baseline !important",
        alignSelf: "baseline !important"
    },
    ".align-self-stretch": {
        msFlexItemAlign: "stretch !important",
        alignSelf: "stretch !important"
    },
    ".float-left": { cssFloat: "left !important" },
    ".float-right": { cssFloat: "right !important" },
    ".float-none": { cssFloat: "none !important" },
    ".user-select-all": {
        WebkitUserSelect: "all !important",
        MozUserSelect: "all !important",
        msUserSelect: "all !important",
        userSelect: "all !important"
    },
    ".user-select-auto": {
        WebkitUserSelect: "auto !important",
        MozUserSelect: "auto !important",
        msUserSelect: "auto !important",
        userSelect: "auto !important"
    },
    ".user-select-none": {
        WebkitUserSelect: "none !important",
        MozUserSelect: "none !important",
        msUserSelect: "none !important",
        userSelect: "none !important"
    },
    ".overflow-auto": { overflow: "auto !important" },
    ".overflow-hidden": { overflow: "hidden !important" },
    ".position-static": { position: "static !important" },
    ".position-relative": { position: "relative !important" },
    ".position-absolute": { position: "absolute !important" },
    ".position-fixed": { position: "fixed !important" },
    ".position-sticky": {
        position: ["-webkit-sticky !important", "sticky !important"]
    },
    ".fixed-top": {
        position: "fixed",
        top: "0",
        right: "0",
        left: "0",
        zIndex: 1030
    },
    ".fixed-bottom": {
        position: "fixed",
        right: "0",
        bottom: "0",
        left: "0",
        zIndex: 1030
    },
    "@supports ((position: -webkit-sticky) or (position: sticky))": {
        ".sticky-top": {
            position: ["-webkit-sticky", "sticky"],
            top: "0",
            zIndex: 1020
        }
    },
    ".sr-only": {
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: "0",
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        border: "0"
    },
    ".sr-only-focusable:active, .sr-only-focusable:focus": {
        position: "static",
        width: "auto",
        height: "auto",
        overflow: "visible",
        clip: "auto",
        whiteSpace: "normal"
    },
    ".shadow-sm": {
        boxShadow: "0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important"
    },
    ".shadow": { boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important" },
    ".shadow-lg": { boxShadow: "0 1rem 3rem rgba(0, 0, 0, 0.175) !important" },
    ".shadow-none": { boxShadow: "none !important" },
    ".w-25": { width: "25% !important" },
    ".w-50": { width: "50% !important" },
    ".w-75": { width: "75% !important" },
    ".w-100": { width: "100% !important" },
    ".w-auto": { width: "auto !important" },
    ".h-25": { height: "25% !important" },
    ".h-50": { height: "50% !important" },
    ".h-75": { height: "75% !important" },
    ".h-100": { height: "100% !important" },
    ".h-auto": { height: "auto !important" },
    ".mw-100": { maxWidth: "100% !important" },
    ".mh-100": { maxHeight: "100% !important" },
    ".min-vw-100": { minWidth: "100vw !important" },
    ".min-vh-100": { minHeight: "100vh !important" },
    ".vw-100": { width: "100vw !important" },
    ".vh-100": { height: "100vh !important" },
    ".m-0": { margin: "0 !important" },
    ".mt-0,\n.my-0": { marginTop: "0 !important" },
    ".mr-0,\n.mx-0": { marginRight: "0 !important" },
    ".mb-0,\n.my-0": { marginBottom: "0 !important" },
    ".ml-0,\n.mx-0": { marginLeft: "0 !important" },
    ".m-1": { margin: "0.25rem !important" },
    ".mt-1,\n.my-1": { marginTop: "0.25rem !important" },
    ".mr-1,\n.mx-1": { marginRight: "0.25rem !important" },
    ".mb-1,\n.my-1": { marginBottom: "0.25rem !important" },
    ".ml-1,\n.mx-1": { marginLeft: "0.25rem !important" },
    ".m-2": { margin: "0.5rem !important" },
    ".mt-2,\n.my-2": { marginTop: "0.5rem !important" },
    ".mr-2,\n.mx-2": { marginRight: "0.5rem !important" },
    ".mb-2,\n.my-2": { marginBottom: "0.5rem !important" },
    ".ml-2,\n.mx-2": { marginLeft: "0.5rem !important" },
    ".m-3": { margin: "1rem !important" },
    ".mt-3,\n.my-3": { marginTop: "1rem !important" },
    ".mr-3,\n.mx-3": { marginRight: "1rem !important" },
    ".mb-3,\n.my-3": { marginBottom: "1rem !important" },
    ".ml-3,\n.mx-3": { marginLeft: "1rem !important" },
    ".m-4": { margin: "1.5rem !important" },
    ".mt-4,\n.my-4": { marginTop: "1.5rem !important" },
    ".mr-4,\n.mx-4": { marginRight: "1.5rem !important" },
    ".mb-4,\n.my-4": { marginBottom: "1.5rem !important" },
    ".ml-4,\n.mx-4": { marginLeft: "1.5rem !important" },
    ".m-5": { margin: "3rem !important" },
    ".mt-5,\n.my-5": { marginTop: "3rem !important" },
    ".mr-5,\n.mx-5": { marginRight: "3rem !important" },
    ".mb-5,\n.my-5": { marginBottom: "3rem !important" },
    ".ml-5,\n.mx-5": { marginLeft: "3rem !important" },
    ".p-0": { padding: "0 !important" },
    ".pt-0,\n.py-0": { paddingTop: "0 !important" },
    ".pr-0,\n.px-0": { paddingRight: "0 !important" },
    ".pb-0,\n.py-0": { paddingBottom: "0 !important" },
    ".pl-0,\n.px-0": { paddingLeft: "0 !important" },
    ".p-1": { padding: "0.25rem !important" },
    ".pt-1,\n.py-1": { paddingTop: "0.25rem !important" },
    ".pr-1,\n.px-1": { paddingRight: "0.25rem !important" },
    ".pb-1,\n.py-1": { paddingBottom: "0.25rem !important" },
    ".pl-1,\n.px-1": { paddingLeft: "0.25rem !important" },
    ".p-2": { padding: "0.5rem !important" },
    ".pt-2,\n.py-2": { paddingTop: "0.5rem !important" },
    ".pr-2,\n.px-2": { paddingRight: "0.5rem !important" },
    ".pb-2,\n.py-2": { paddingBottom: "0.5rem !important" },
    ".pl-2,\n.px-2": { paddingLeft: "0.5rem !important" },
    ".p-3": { padding: "1rem !important" },
    ".pt-3,\n.py-3": { paddingTop: "1rem !important" },
    ".pr-3,\n.px-3": { paddingRight: "1rem !important" },
    ".pb-3,\n.py-3": { paddingBottom: "1rem !important" },
    ".pl-3,\n.px-3": { paddingLeft: "1rem !important" },
    ".p-4": { padding: "1.5rem !important" },
    ".pt-4,\n.py-4": { paddingTop: "1.5rem !important" },
    ".pr-4,\n.px-4": { paddingRight: "1.5rem !important" },
    ".pb-4,\n.py-4": { paddingBottom: "1.5rem !important" },
    ".pl-4,\n.px-4": { paddingLeft: "1.5rem !important" },
    ".p-5": { padding: "3rem !important" },
    ".pt-5,\n.py-5": { paddingTop: "3rem !important" },
    ".pr-5,\n.px-5": { paddingRight: "3rem !important" },
    ".pb-5,\n.py-5": { paddingBottom: "3rem !important" },
    ".pl-5,\n.px-5": { paddingLeft: "3rem !important" },
    ".m-n1": { margin: "-0.25rem !important" },
    ".mt-n1,\n.my-n1": { marginTop: "-0.25rem !important" },
    ".mr-n1,\n.mx-n1": { marginRight: "-0.25rem !important" },
    ".mb-n1,\n.my-n1": { marginBottom: "-0.25rem !important" },
    ".ml-n1,\n.mx-n1": { marginLeft: "-0.25rem !important" },
    ".m-n2": { margin: "-0.5rem !important" },
    ".mt-n2,\n.my-n2": { marginTop: "-0.5rem !important" },
    ".mr-n2,\n.mx-n2": { marginRight: "-0.5rem !important" },
    ".mb-n2,\n.my-n2": { marginBottom: "-0.5rem !important" },
    ".ml-n2,\n.mx-n2": { marginLeft: "-0.5rem !important" },
    ".m-n3": { margin: "-1rem !important" },
    ".mt-n3,\n.my-n3": { marginTop: "-1rem !important" },
    ".mr-n3,\n.mx-n3": { marginRight: "-1rem !important" },
    ".mb-n3,\n.my-n3": { marginBottom: "-1rem !important" },
    ".ml-n3,\n.mx-n3": { marginLeft: "-1rem !important" },
    ".m-n4": { margin: "-1.5rem !important" },
    ".mt-n4,\n.my-n4": { marginTop: "-1.5rem !important" },
    ".mr-n4,\n.mx-n4": { marginRight: "-1.5rem !important" },
    ".mb-n4,\n.my-n4": { marginBottom: "-1.5rem !important" },
    ".ml-n4,\n.mx-n4": { marginLeft: "-1.5rem !important" },
    ".m-n5": { margin: "-3rem !important" },
    ".mt-n5,\n.my-n5": { marginTop: "-3rem !important" },
    ".mr-n5,\n.mx-n5": { marginRight: "-3rem !important" },
    ".mb-n5,\n.my-n5": { marginBottom: "-3rem !important" },
    ".ml-n5,\n.mx-n5": { marginLeft: "-3rem !important" },
    ".m-auto": { margin: "auto !important" },
    ".mt-auto,\n.my-auto": { marginTop: "auto !important" },
    ".mr-auto,\n.mx-auto": { marginRight: "auto !important" },
    ".mb-auto,\n.my-auto": { marginBottom: "auto !important" },
    ".ml-auto,\n.mx-auto": { marginLeft: "auto !important" },
    ".stretched-link::after": {
        position: "absolute",
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
        zIndex: 1,
        pointerEvents: "auto",
        content: '""',
        backgroundColor: "rgba(0, 0, 0, 0)"
    },
    ".text-monospace": {
        fontFamily:
            'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important'
    },
    ".text-justify": { textAlign: "justify !important" },
    ".text-wrap": { whiteSpace: "normal !important" },
    ".text-nowrap": { whiteSpace: "nowrap !important" },
    ".text-truncate": {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    ".text-left": { textAlign: "left !important" },
    ".text-right": { textAlign: "right !important" },
    ".text-center": { textAlign: "center !important" },
    ".text-lowercase": { textTransform: "lowercase !important" },
    ".text-uppercase": { textTransform: "uppercase !important" },
    ".text-capitalize": { textTransform: "capitalize !important" },
    ".font-weight-light": { fontWeight: "300 !important" },
    ".font-weight-lighter": { fontWeight: "lighter !important" },
    ".font-weight-normal": { fontWeight: "400 !important" },
    ".font-weight-bold": { fontWeight: "700 !important" },
    ".font-weight-bolder": { fontWeight: "bolder !important" },
    ".font-italic": { fontStyle: "italic !important" },
    ".text-white": { color: "#fff !important" },
    ".text-primary": { color: "#2a9fd6 !important" },
    "a.text-primary:hover, a.text-primary:focus": { color: "#1d7097 !important" },
    ".text-secondary": { color: "#555 !important" },
    "a.text-secondary:hover, a.text-secondary:focus": {
        color: "#2f2f2f !important"
    },
    ".text-success": { color: "#77b300 !important" },
    "a.text-success:hover, a.text-success:focus": { color: "#446700 !important" },
    ".text-info": { color: "#93c !important" },
    "a.text-info:hover, a.text-info:focus": { color: "#6b248f !important" },
    ".text-warning": { color: "#f80 !important" },
    "a.text-warning:hover, a.text-warning:focus": { color: "#b35f00 !important" },
    ".text-danger": { color: "#c00 !important" },
    "a.text-danger:hover, a.text-danger:focus": { color: "maroon !important" },
    ".text-light": { color: "#222 !important" },
    "a.text-light:hover, a.text-light:focus": { color: "black !important" },
    ".text-dark": { color: "#adafae !important" },
    "a.text-dark:hover, a.text-dark:focus": { color: "#868988 !important" },
    ".text-body": { color: "#adafae !important" },
    ".text-muted": { color: "#555 !important" },
    ".text-black-50": { color: "rgba(0, 0, 0, 0.5) !important" },
    ".text-white-50": { color: "rgba(255, 255, 255, 0.5) !important" },
    ".text-hide": {
        font: "0/0 a",
        color: "transparent",
        textShadow: "none",
        backgroundColor: "transparent",
        border: "0"
    },
    ".text-decoration-none": { textDecoration: "none !important" },
    ".text-break": {
        wordBreak: "break-word !important",
        wordWrap: "break-word !important"
    },
    ".text-reset": { color: "inherit !important" },
    ".visible": { visibility: "visible !important" },
    ".invisible": { visibility: "hidden !important" },
    ".navbar.bg-primary": { border: "1px solid #282828" },
    ".navbar.bg-dark": {
        backgroundColor: "#060606 !important",
        border: "1px solid #282828"
    },
    ".navbar.bg-light": { backgroundColor: "#888 !important" },
    ".navbar.fixed-top": { borderWidth: "0 0 1px" },
    ".navbar.fixed-bottom": { borderWidth: "1px 0 0" },
    ".table-hover .table-primary:hover,\n.table-hover .table-primary:hover > th,\n.table-hover .table-primary:hover > td": {
        backgroundColor: "#258fc1"
    },
    ".table-hover .table-secondary:hover,\n.table-hover .table-secondary:hover > th,\n.table-hover .table-secondary:hover > td": {
        backgroundColor: "#484848"
    },
    ".table-hover .table-light:hover,\n.table-hover .table-light:hover > th,\n.table-hover .table-light:hover > td": {
        backgroundColor: "#151515"
    },
    ".table-hover .table-dark:hover,\n.table-hover .table-dark:hover > th,\n.table-hover .table-dark:hover > td": {
        backgroundColor: "#a0a2a1"
    },
    ".table-hover .table-success:hover,\n.table-hover .table-success:hover > th,\n.table-hover .table-success:hover > td": {
        backgroundColor: "#669a00"
    },
    ".table-hover .table-info:hover,\n.table-hover .table-info:hover > th,\n.table-hover .table-info:hover > td": {
        backgroundColor: "#8a2eb8"
    },
    ".table-hover .table-danger:hover,\n.table-hover .table-danger:hover > th,\n.table-hover .table-danger:hover > td": {
        backgroundColor: "#b30000"
    },
    ".table-hover .table-warning:hover,\n.table-hover .table-warning:hover > th,\n.table-hover .table-warning:hover > td": {
        backgroundColor: "#e67a00"
    },
    ".table-hover .table-active:hover,\n.table-hover .table-active:hover > th,\n.table-hover .table-active:hover > td": {
        backgroundColor: "rgba(255, 255, 255, 0.075)"
    },
    ".nav-tabs .nav-link,\n.nav-pills .nav-link": { color: "#fff" },
    ".nav-tabs .nav-link:hover,\n.nav-pills .nav-link:hover": {
        backgroundColor: "#282828"
    },
    ".nav-tabs .nav-link.disabled, .nav-tabs .nav-link.disabled:hover,\n.nav-pills .nav-link.disabled,\n.nav-pills .nav-link.disabled:hover": {
        backgroundColor: "transparent",
        color: "#555"
    },
    ".nav-tabs .nav-link.active,\n.nav-pills .nav-link.active": {
        backgroundColor: "#2a9fd6"
    },
    ".breadcrumb a": { color: "#fff" },
    ".pagination a:hover": { textDecoration: "none" },
    ".alert a,\n.alert .alert-link": {
        color: "#fff",
        textDecoration: "underline"
    },
    ".list-group-item:hover": { backgroundColor: "#282828", color: "#fff" },
    ".list-group-item-action .list-group-item-heading": { color: "#888" },
    ".list-group-item:hover .list-group-item-heading": { color: "#fff" },
    ".card h1,\n.card h2,\n.card h3,\n.card h4,\n.card h5,\n.card h6,\n.list-group-item h1,\n.list-group-item h2,\n.list-group-item h3,\n.list-group-item h4,\n.list-group-item h5,\n.list-group-item h6": {
        color: "inherit"
    },
    ".popover-title": { borderBottom: "none" }
};
