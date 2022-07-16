function main() {
  const openWindowEl = document.querySelector(".menu");
  const closeWindowEl = document.querySelector(".menu-close");
  const WindowEl = document.querySelector(".window");
  openWindowEl.addEventListener("click", () => {
    WindowEl.style.display = "inherit";
  });

  closeWindowEl.addEventListener("click", () => {
    WindowEl.style.display = "";
  });
}
main();
