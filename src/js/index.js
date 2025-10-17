console.log("Hi, Mom!");

import "../css/style.css";

export function capitalize(string) {
  if (typeof string !== "string" || string.length === 0) {
    return "";
  }
  if (!/^[A-Za-z]/.test(string)) {
    return string;
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
