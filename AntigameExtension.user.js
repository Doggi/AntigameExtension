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

(function () {
    var resource = ['ui-bg_loop_25_000000_21x21.png', 'ui-bg_highlight-soft_44_444444_1x100.png', 'ui-bg_highlight-soft_35_222222_1x100.png', 'ui-bg_highlight-soft_33_003147_1x100.png', 'ui-bg_highlight-hard_20_0972a5_1x100.png', 'ui-bg_highlight-soft_80_eeeeee_1x100.png', 'ui-bg_glass_40_ffc73d_1x400.png', 'ui-icons_cccccc_256x240.png', 'ui-icons_ffffff_256x240.png', 'ui-icons_222222_256x240.png', 'ui-icons_4b8e0b_256x240.png', 'ui-icons_a83300_256x240.png', 'ui-bg_flat_50_5c5c5c_40x100.png', 'ui-bg_flat_30_cccccc_40x100.png'];
    var jquery_ui_css = GM_getResourceText("jquery_ui_css");
    resource.forEach(function (element) {
        jquery_ui_css = jquery_ui_css.replace("images/" + element, GM_getResourceURL(element));
    });
    GM_addStyle(jquery_ui_css);
})();

// PLUGINS //
Number.decPoint = ',';
Number.thousand_sep = '.';

Number.prototype.format = function (k, fixLength) {
    if (!k) k = 0;
    var neu = '';
    var sign = this < 0 ? '-' : '';

    // Runden
    var f = Math.pow(10, k);
    var zahl = Math.abs(this);
    zahl = '' + parseInt(zahl * f + .5) / f;

    // Komma ermittlen
    var idx = zahl.indexOf('.');
    // fehlende Nullen einfügen
    if (fixLength && k) {
        zahl += (idx == -1 ? '.' : '' )
            + f.toString().substring(1);
    }

    // Nachkommastellen ermittlen
    idx = zahl.indexOf('.');
    if (idx == -1) idx = zahl.length;
    else neu = Number.decPoint + zahl.substr(idx + 1, k);

    // Tausendertrennzeichen
    while (idx > 0) {
        if (idx - 3 > 0)
            neu = Number.thousand_sep + zahl.substring(idx - 3, idx) + neu;
        else
            neu = zahl.substring(0, idx) + neu;
        idx -= 3;
    }
    return sign + neu;
};


function AntiGameExtension() {

    this.meta = {
        language: "Language",
        session: "ogame-session",
        version: "ogame-version",
        timestamp: "ogame-timestamp",
        universe: "ogame-universe",
        universe_name: "ogame-universe-name",
        universe_speed: "ogame-universe-speed",
        universe_number: "universe_number",
        universe_speed_fleet: "ogame-universe-speed-fleet",
        player_name: "ogame-player-name",
        player_id: "ogame-player-id"
    }
    ;

    /**
     *
     * @param name
     * @returns {string}
     */
    this.getMeta = function (name) {
        if (name == this.meta.language) {
            return $("meta[http-equiv=" + name + "]").attr("content");
        }
        if (name == this.meta.universe_number) {
            return this.getMeta(this.meta.universe).match(/\d{3}/g)[0];
        }
        return $("meta[name=" + name + "]").attr("content");
    };

}

var age = new AntiGameExtension();