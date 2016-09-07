// ==UserScript==
// @author      Doggi
// @name        AntigameExtension
// @description AntigameExtension
// @namespace   doggi.ogame.antigame.extension
// @include     http*de.ogame.gameforge.com*
// @version     1.0.1
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
// ==/UserScript==
console.log("AntigameExtension starting");

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
    };

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

    this.addMenu = function(name){ console.log($('#ago_panel_wrapper'));
        $('#ago_panel_wrapper').append(
            '<div id="ago_ext_panel_' + name + '"' +
                '<div class="ago_panel_tab">'+ name + 
                    '<span class="ago_panel_tab_info">info</span>' +
                '</div>'+
                '<div class="ago_panel_tab_header">head</div>' +
                '<div class="ago_panel_tab_content">content</div>' +
                '<div class="ago_panel_tab_footer">foot</div>' +
        '<div>');
    };
            

}

var age = new AntiGameExtension();

age.addMenu("test");