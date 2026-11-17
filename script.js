if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("./service-worker.js")
            .then(() => {
                console.log("Service Worker successfully registered!");
            })
            .catch((error) => {
                console.log("Service Worker registration failed:", error);
            });
    });
}

document.addEventListener("gesturestart", (e) => {
    e.preventDefault();
}, { passive: false });

document.addEventListener("gesturechange", (e) => {
    e.preventDefault();
}, { passive: false });
