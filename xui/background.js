/* global chrome, fetch, Worker, localStorage, importScripts, formatter, linter, TextEncoder, crypto */

// background.js
chrome.runtime.onInstalled.addListener(function () {
  console.log("插件已被安装");
});

chrome.contextMenus.create({
	title: "测试右键菜单",
	onclick: function(){
		var a = document.getElementsByClassName("ant-input")[0];
		alert(a.innerHTML)
		// a.value="admin";
		// document.getElementsByClassName("ant-input")[1].value="admin";
		// alert(document.getElementsByClassName("ant-input")[0]);
	}
});