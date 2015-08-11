class CEventHandler {

  public Events: { [id: string] : Array<CEvent>; }; 

  constructor() {
    this.Events = {};
  }

  public Push(type:string, sender : CControl, event :any,target:CControl) : void {
    if (this.Events[type]==null) this.Events[type] = [];
    this.Events[type].push(new CEvent(sender,event,target));
  }

  public Shift(type:string) : CEvent {
    if (this.Events[type]==null) return null;
    return this.Events[type].shift();
  }

}
