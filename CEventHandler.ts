class CEventHandler {

  public Events : Array<CEvent>;
  constructor() {
    this.Events = [];
  }

  public Push(sender : CControl, event :any,target:CControl) : void {
    this.Events.push(event);
  }

  public Shift() : CEvent {
    return this.Events.shift();
  }

}
