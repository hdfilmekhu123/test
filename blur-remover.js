window.addEventListener("load", () => {
const isStandalone =
matchMedia("(display-mode: standalone)").matches ||
navigator.standalone === true;
if (!isStandalone || !/iPhone|iPad|iPod/.test(navigator.userAgent)) return;
// Inject CSS
const style = document.createElement("style");
style.textContent = `
#ojapp-blur-cover {
display: none; position: fixed; inset: 0; z-index: 2147483646;
background: rgba(255,255,255,0.01); pointer-events: none;
animation: ojapp-cover-fade 0.3s;
}
#ojapp-blur-panel {
position: fixed; top: 0; right: 0; bottom: 0; width: 90%; height: 100%;
z-index: 2147483647; background: rgba(255,255,255,0.01);
pointer-events: none; transform: translateX(110%); transition: transform 0.3s;
}
@keyframes ojapp-cover-fade { from { opacity: 0; } to { opacity: 1; } }
`;
document.head.appendChild(style);
// Create DOM & force reflow
const cover = document.createElement("div");
cover.id = "ojapp-blur-cover";
const panel = document.createElement("div");
panel.id = "ojapp-blur-panel";
document.body.append(cover, panel);
void panel.offsetWidth; // Force reflow
requestAnimationFrame(() => {
cover.style.display = "block";
panel.style.transform = "translateX(0%)";
setTimeout(() => {
cover.style.display = "none";
panel.style.transform = "translateX(110%)";
}, 500);
});
});
