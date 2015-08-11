var CEventHandler = (function () {
    function CEventHandler() {
        this.Events = {};
    }
    CEventHandler.prototype.Push = function (type, sender, event, target) {
        if (this.Events[type] == null)
            this.Events[type] = [];
        this.Events[type].push(new CEvent(sender, event, target));
    };
    CEventHandler.prototype.Shift = function (type) {
        if (this.Events[type] == null)
            return null;
        return this.Events[type].shift();
    };
    return CEventHandler;
})();
//# sourceMappingURL=CEventHandler.js.map