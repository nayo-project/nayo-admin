export const fullScreen = (isOpen, element) => {
    if (isOpen) {
        let request_method = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
        if (request_method) {
            request_method.call(element);
        } else if (typeof window.ActiveXObject !== "undefined") {
            let wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    } else {
        var exit_method = document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.webkitExitFullscreen;
        if (exit_method) {
            exit_method.call(document);
        } else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
            var wscript = new ActiveXObject("WScript.Shell");
            if (wscript !== null) {
                wscript.SendKeys("{F11}");
            }
        }
    }
}


export const isFullScreen = () => {
    return document.isFullScreen || document.mozIsFullScreen || document.webkitIsFullScreen
}