/* global chrome, fetch, Worker, localStorage, importScripts, formatter, linter, TextEncoder, crypto */

// background.js
chrome.runtime.onInstalled.addListener(function () {
  console.log("插件已被安装");
});
