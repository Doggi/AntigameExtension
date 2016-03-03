// ==UserScript==
// @author      Doggi
// @name        AntigameExtension
// @description AntigameExtension
// @namespace   doggi.ogame.antigame.extension
// @include     http*de.ogame.gameforge.com*
// @include     http*google*
// @version     1
// @grant       GM_deleteValue
// @grant       GM_getValue
// @grant       GM_listValues
// @grant       GM_setValue
// @grant       GM_getResourceText
// @grant       GM_getResourceURL
// @grant       GM_addStyle
// @grant       GM_openInTab
// @grant       GM_registerMenuCommand
// @grant       GM_setClipboard
// @grant       GM_xmlhttpRequest
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js
// @require     https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js
// @resource    jquery_ui_css https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/jquery-ui.css
// @resource    ui-bg_loop_25_000000_21x21.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-bg_loop_25_000000_21x21.png
// @resource    ui-bg_highlight-soft_44_444444_1x100.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-bg_highlight-soft_44_444444_1x100.png
// @resource    ui-bg_highlight-soft_35_222222_1x100.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-bg_highlight-soft_35_222222_1x100.png
// @resource    ui-bg_highlight-soft_33_003147_1x100.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-bg_highlight-soft_33_003147_1x100.png
// @resource    ui-bg_highlight-hard_20_0972a5_1x100.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-bg_highlight-hard_20_0972a5_1x100.png
// @resource    ui-bg_highlight-soft_80_eeeeee_1x100.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-bg_highlight-soft_80_eeeeee_1x100.png
// @resource    ui-bg_glass_40_ffc73d_1x400.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-bg_glass_40_ffc73d_1x400.png
// @resource    ui-icons_cccccc_256x240.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-icons_cccccc_256x240.png
// @resource    ui-icons_ffffff_256x240.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-icons_ffffff_256x240.png
// @resource    ui-icons_222222_256x240.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-icons_222222_256x240.png
// @resource    ui-icons_4b8e0b_256x240.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-icons_4b8e0b_256x240.png
// @resource    ui-icons_a83300_256x240.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-icons_a83300_256x240.png
// @resource    ui-bg_flat_50_5c5c5c_40x100.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-bg_flat_50_5c5c5c_40x100.png
// @resource    ui-bg_flat_30_cccccc_40x100.png https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/dark-hive/images/ui-bg_flat_30_cccccc_40x100.png
// ==/UserScript==
console.log("AntigameExtension starting");

(function(){
    var resource = ['ui-bg_loop_25_000000_21x21.png','ui-bg_highlight-soft_44_444444_1x100.png','ui-bg_highlight-soft_35_222222_1x100.png','ui-bg_highlight-soft_33_003147_1x100.png','ui-bg_highlight-hard_20_0972a5_1x100.png','ui-bg_highlight-soft_80_eeeeee_1x100.png','ui-bg_glass_40_ffc73d_1x400.png','ui-icons_cccccc_256x240.png','ui-icons_ffffff_256x240.png','ui-icons_222222_256x240.png','ui-icons_4b8e0b_256x240.png','ui-icons_a83300_256x240.png','ui-bg_flat_50_5c5c5c_40x100.png','ui-bg_flat_30_cccccc_40x100.png'];
    var jquery_ui_css = GM_getResourceText("jquery_ui_css");
    resource.forEach(function(element){
        jquery_ui_css = jquery_ui_css.replace("images/" + element, GM_getResourceURL(element));
    });
    GM_addStyle(jquery_ui_css);
})();