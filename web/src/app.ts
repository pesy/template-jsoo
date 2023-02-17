import printMe from "./print.ts";

async function loadJSBundle(path) {
  return new Promise((resolve, reject) => {
    // TODO(prometheansacrifice) Handle error while loading JS
    const script = document.createElement("script");
    script.src = path;
    script.onload = function () {
      resolve();
    };
    script.onerror = function (e) {
      reject(e);
    };
    document.head.appendChild(script);
  });
}

async function main() {
  let app = "JsooYojsonApp";
  let path = "";
  await loadJSBundle(`${path}/${app}.bc.runtime.js`);
  await loadJSBundle(`${path}/${app}.bc.js`);
  console.log("todo", printMe);
}

main();
