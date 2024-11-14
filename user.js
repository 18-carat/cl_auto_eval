// ==UserScript==
// @name        CL Auto-Eval
// @namespace   18C
// @description Submit course evaluations in one click
// @match       https://*.campuslabs.com/eval/*
// @version     0.1.0
// @author      18-carat
// @grant       none
// @license     GPL-3.0-or-later
// ==/UserScript==
"use strict";
(() => {
  Array.from(document.querySelectorAll("div[role='radiogroup']")).forEach((g) => g.children[g.children.length - 1].children[1].click());
  document.querySelector(".form-controls").children[1].children[0].click();
})();
