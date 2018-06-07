/**
 * Package to detect if url has change
 *
 * version: 1.2.0
 */
var duc = {
    time: 100,
    interval: false,
    change: function(callback, looptime) {
        var currentPage = window.location.href;
        clearInterval(this.interval);
        this.interval = this.changeActionCapture(callback, currentPage, looptime);
    },
    changeActionCapture: function(callback, currentPage, looptime) {
        return setInterval(function() {
            if (currentPage != window.location.href) {
                var lastPage = currentPage;
                currentPage = window.location.href.toString();
                callback(currentPage, lastPage);
            }
        }, looptime || duc.time);
    }
};