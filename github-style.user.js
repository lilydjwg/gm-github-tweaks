// ==UserScript==
// @name           GitHub style changes
// @namespace      http://blog.lilydjwg.me/
// @description    顶栏白色
// @include        https://github.com/*
// @include        https://*.github.com/*
// @version	   1.0
// @grant          GM_addStyle
// @run-at         document-start
// ==/UserScript==
 
// jshint esversion:6

let css = `
  .header {
    border-bottom: 1px solid #E5E5E5 !important;
    background-color: #F5F5F5 !important;
  }
  .header .header-logo-invertocat,
  .header .header-logo-wordmark {
    color: #555 !important;
  }
  .header .header-logo-invertocat:hover,
  .header .header-logo-wordmark:hover {
    color: #4078C0 !important;
  }
  .header .header-nav-link {
    color: #555 !important;
  }
  .header .header-nav-link:hover,
  .header .header-nav-link:focus {
    color: #4078c0 !important;
  }
  .header .header-nav-link:hover .dropdown-caret,
  .header .header-nav-link:focus .dropdown-caret {
    border-top-color: #4078c0 !important;
  }
  .header .notification-indicator .mail-status {
    border-color: #f3f3f3 !important;
  }
  .header .header-search {
    font-size: 14px !important;
  }
  .header .form-control.header-search-wrapper {
    line-height: 21px !important;
  }
  .header .header-search-scope {
    font-size: 12px !important;
    line-height: 20px !important;
    color: #767676 !important;
    border-right-color: #EEE !important;
  }
  .header .header-search-scope:empty+.header-search-input {
    /*width: 100%; */ /* 99.999% */
  }
  .header .header-search-wrapper {
    min-height: 0 !important;
    font-size: 14px !important;
    color: #333 !important;
    background-color: #FFF !important;
    border: 1px solid #DDD !important;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.075) !important;
  }
  .header .header-search-wrapper.focus {
    background-color: #FFF !important;
    box-shadow: inset 0 1px 2px rgba(0,0,0,0.075), 0 0 5px rgba(81,167,232,0.5) !important;
    border-color: #51A7E8 !important;
  }
  .header .header-search-wrapper.focus .header-search-scope {
    color: #4078C0 !important;
    background-color: #EDF2F9 !important;
    border-right-color: #C6D7EC !important;
  }
  .header .header-search-input {
    min-height: 26px !important;
    font-size: 14px !important;
    color: #333 !important;
  }
  .header .header-search-input::-webkit-input-placeholder {
    color: #999 !important;/*AAA*/
  }
  .header .header-search-input::-moz-placeholder {
    color: #999 !important;/*AAA*/
  }
  .header .header-search-input:-ms-input-placeholder {
    color: #999 !important;/*AAA*/
  }
  .header .header-search-input::placeholder {
    color: #999 !important;/*AAA*/
  }
`;
GM_addStyle(css);
