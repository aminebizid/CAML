var CEventHandler = (function () {
    function CEventHandler() {
        this.Events = [];
    }
    CEventHandler.prototype.Push = function (sender, event, target) {
        this.Events.push(event);
    };
    CEventHandler.prototype.Shift = function () {
        return this.Events.shift();
    };
    return CEventHandler;
})();
