function entryPoint() {
  console.log("you have loaded this in web app");
  console.log(document.cookie)
  console.log(window.window.document.location)
}
console.log("SCRIPT LOADED!!!");

window.__entry = entryPoint;
