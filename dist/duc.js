var duc = {
	interval: false,
	change: function(callback) {
		var currentPage = window.location.href;
        clearInterval(this.interval);
        this.interval = this.changeActionCapture(currentPage);
	},
	changeActionCapture: function(callback, currentPage) {
		return setInterval(function() {
            if (currentPage != window.location.href) {
                currentPage = window.location.href.toString();
                callback(currentPage);
            }
        }, 100);
	}
};