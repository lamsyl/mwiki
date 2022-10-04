const url = new URL(document.URL);
const original = url.href;
let result = original;

if (!result.includes("m.")) {
  result = result.replace("wiki", "m.wiki");
}
result = result.replace(/zh-[a-z]+/, "zh-hk");

if (result !== original) {
  document.location = result;
}
