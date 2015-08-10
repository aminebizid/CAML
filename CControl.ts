class CControl {
  public Parent :CContentControl;

  public Canvas : HTMLCanvasElement;
  public Context : CanvasRenderingContext2D;

  public NeedRender : boolean;
  public NeedReorganize: boolean;


  public ActualWidth : number;
  public ActualHeight : number;

  public EventHandler : CEventHandler;


  private _width : string;
  get Width(): string {
    return this._width;
  }
  set Width(value:string) {
    this._width = value;

    if (this.EventHandler != null)
      this.EventHandler.Push(this,"resize",null);
  }

  private _height : string;
  get Height(): string {
    return this._height;
  }
  set Height(value:string) {
    this._height = value;
    if (this.EventHandler != null)
      this.EventHandler.Push(this,"resize",null);
  }


  private _needDraw :Boolean = false;
    get NeedDraw():Boolean {
        return this._needDraw;
    }
    set NeedDraw(value:Boolean) {
        this._needDraw = value;
        //if (this.Parent != null) this.Parent.NeedDraw = true;
    }




  constructor() {
    this.EventHandler = this.GetEventHandler();
  }


  public GetEventHandler(): CEventHandler {
    if (this.Parent == null) return this.EventHandler;
    return this.Parent.GetEventHandler();
  }

  public ComputeSize() {

  }

  public Reorganize() : void {

  }

  public Draw() : void {

  }

  public Render(): void {

  }

}
