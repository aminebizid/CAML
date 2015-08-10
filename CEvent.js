var CEvent = (function () {
    function CEvent(Sender, Event, Target) {
        this.Sender = Sender;
        this.Event = Event;
        this.Target = Target;
    }
    return CEvent;
})();
