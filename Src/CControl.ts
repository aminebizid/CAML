class CControl {
  
  public Name: string;

  public Parent :CContentControl;

  public Canvas : HTMLCanvasElement;
  public Context : CanvasRenderingContext2D;

  public ActualWidth : number;
  public ActualHeight : number;

  public EventHandler : CEventHandler;
  


  private _width : string;
  get Width(): string {
    return this._width;
  }
  set Width(value:string) {
    this._width = value;   
    this.PushReorgEvent("resize");
  }

  private _height : string;
  get Height(): string {
    return this._height;
  }
  set Height(value:string) {
    this._height = value;
    this.PushReorgEvent("resize");
  }

  constructor() {
    this.EventHandler = this.GetEventHandler();
  }


  public GetEventHandler(): CEventHandler {
    if (this.Parent == null) return this.EventHandler;
    return this.Parent.GetEventHandler();
  }

  public Reorganize() : void {
     Log("Reorganizing " + this.Name);

     var oldWidth = this.ActualWidth;
     var oldHeight = this.ActualHeight;

     if (this.Width == "*") {
            if (this.Parent != null) this.ActualWidth = this.Parent.ActualWidth;
            else this.ActualWidth = document.body.clientWidth-30;
          }
          else if (this.Width == "auto") {
            // Todo
          }
          else {
              this.ActualWidth = +this.Width;
          }

          if (this.Height == "*") {
            if (this.Parent != null) this.ActualHeight = this.Parent.ActualHeight;
              else this.ActualHeight = document.body.clientHeight-30;
          }
          else if (this.Height == "auto") {
           // Todo 
          }
          else {
              this.ActualHeight = +this.Height;
          }

      this.Draw();         
      if (this.Parent!=null) this.Parent.Draw(); 
  }

  public Draw() : void {
     console.log("drawing " + this.Name);     
     this.Canvas = <HTMLCanvasElement>document.createElement("Canvas");
     this.Canvas.width = this.ActualWidth;
     this.Canvas.height = this.ActualHeight;
     this.Context = this.Canvas.getContext("2d");
  }

  public Render(): void {
    console.log("rendering " + this.Name);
    this.Parent.Context.drawImage(this.Canvas,0,0,this.ActualWidth, this.ActualHeight);
    this.Parent.Render();
  }


  public PushReorgEvent(ev:string) {
     if (this.EventHandler != null)
      this.EventHandler.Push("reorg",this,ev,this);
  }

  public PushDrawEvent(ev:string) {
     if (this.EventHandler != null)
      this.EventHandler.Push("draw",this,ev,this);
  }

  public PushRenderEvent(ev:string) {
     if (this.EventHandler != null)
      this.EventHandler.Push("render",this,ev,this);
  }  

  

}
