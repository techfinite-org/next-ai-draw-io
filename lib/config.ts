export const config = {
    drawio: {
        baseUrl:
            process.env.NEXT_PUBLIC_DRAWIO_BASE_URL ||
            "https://embed.diagrams.net",
        viewerUrl:
            process.env.NEXT_PUBLIC_DRAWIO_VIEWER_URL ||
            "https://viewer.diagrams.net",
        // Default URL parameters for embed mode
        defaultParams: {
            ui: "min",
            spin: true,
            libraries: false,
            saveAndExit: false,
            noExitBtn: true,
        },
        // Parse custom params from env if present
        get customParams() {
            try {
                if (process.env.NEXT_PUBLIC_DRAWIO_PARAMS) {
                    return JSON.parse(process.env.NEXT_PUBLIC_DRAWIO_PARAMS)
                }
            } catch (e) {
                console.warn("Failed to parse NEXT_PUBLIC_DRAWIO_PARAMS", e)
            }
            return {}
        },
    },
} as const
