/**
 * Created on Nov 8, 2012
 * @author: scott
 */

define(["jquery","/static/ajaxtoolbar/jsxcompressor.js"], function($, JXG) {
    var results = [];
    var consoleWindow = null;

    function log_request(xhr, settings) {
        if (consoleWindow) {
            var logHeader = xhr.getResponseHeader('X-Django-Log');
            if (logHeader == null) {
                return;
            }
            logLines = eval(JXG.decompress(logHeader));
            msg = {url:settings.url, response:xhr.responseText, status:xhr.status, log:logLines};
            consoleWindow.postMessage(JSON.stringify(msg), "*");
        }
    }

    function openConsole() {
        if (consoleWindow == null) {
            consoleWindow = window.open('/ajaxtoolbar/console', 'Ajax', 'height=400,width=800');
        }
        return consoleWindow;
    }

    $(window).unload(function() {
        if (consoleWindow != null) {
            consoleWindow.close();
        }
    });

    $(document).ajaxSend(function(event, xhr, settings) {
        xhr.setRequestHeader('X-Django-Log','enabled');
    });

    $(document).ajaxComplete(function(event, xhr, settings) {
        log_request(xhr, settings);
    });

    return {
        'openConsole' : openConsole
    }
});

define([], function () {

    "use strict";

    return function loadCss(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    };

});