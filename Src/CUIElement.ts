class CUIElement {
	public ActualWidth : number;
 	public ActualHeight : number;
  public X: number;
  public Y: number;

  public AllowedWidth : number;
  public AllowedHeight : number;

  public Parent :CContentControl;
  public Canvas : HTMLCanvasElement;
  public Context : CanvasRenderingContext2D;

  public SizeChanged : boolean;
  

  private _needArrange  : boolean;
  get NeedArrange(): boolean   {
    return this._needArrange;
  }
  set NeedArrange(value:boolean ) {
    this._needArrange = value;   
  }

  private _needDraw  : boolean;
 get NeedDraw(): boolean   {
    return this._needDraw;
  }
  set NeedDraw(value:boolean ) {
    this._needDraw = value;   
    
  }

  private _needRender  : boolean;
 get NeedRender(): boolean   {
    return this._needRender;
  }
  set NeedRender(value:boolean ) {
    this._needRender = value;   
    //if (value && this.Parent != null) this.Parent.NeedRender  = true;
  }





private _width : string;
  get Width(): string {
    return this._width;
  }
  set Width(value:string) {
    this._width = value;   
    this.NeedArrange = true;    
    this.SizeChanged = true;
  }

  private _height : string;
  get Height(): string {
    return this._height;
  }
  set Height(value:string) {
    this._height = value;
    this.SizeChanged = true;
    this.NeedArrange = true;
  }

  constructor(){
    this.X = 0;
    this.Y = 0;
  }

 public CalculateWidth():number {
         if (this.Width == "*") {
            if (this.Parent != null) return this.Parent.ActualWidth;
            return document.body.clientWidth-30;
          }
          else if (this.Width == "auto") {
            Log("auto not implemented");
            return  0;
          }
          else {
              return +this.Width;
          }
    }

    public CalculateHeight():number {
         if (this.Height   == "*") {
            if (this.Parent != null) return this.Parent.ActualHeight;
            return document.body.clientHeight-30;
          }
          else if (this.Height == "auto") {
            Log("auto not implemented");
            return  0;
          }
          else {
              return +this.Height;
          }

    }

    public PrepareContext() {   
     this.Canvas = <HTMLCanvasElement>document.createElement("Canvas");
     this.Canvas.width = this.ActualWidth;
     this.Canvas.height = this.ActualHeight;
     this.Context = this.Canvas.getContext("2d");

 }


 public CalculateSize() {
 	 this.ActualWidth  = this.CalculateWidth();
          this.ActualHeight  = this.CalculateHeight();  
 }
}