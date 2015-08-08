class CControl {
  public Parent :CContentControl;

  public Canvas : HTMLCanvasElement;
  public Context : CanvasRenderingContext2D;

  public NeedRender : boolean;
  public NeedReorganize: boolean;


  public ActualWidth : number;
  public ActualHeight : number;

  private _width : string;
  get Width(): string {
    return this._width;
  }
  set Width(value:string) {
    this._width = value;
    this.SizeChanged = true;
  }

  private _height : string;
  get Height(): string {
    return this._height;
  }
  set Height(value:string) {
    this._height = value;
    this.SizeChanged = true;
  }


  private _needDraw :Boolean = false;
    get NeedDraw():Boolean {
        return this._needDraw;
    }
    set NeedDraw(value:Boolean) {
        this._needDraw = value;
        //if (this.Parent != null) this.Parent.NeedDraw = true;
    }


  private _parentSizeChanged :Boolean = false;
    get ParentSizeChanged():Boolean {
        return this._parentSizeChanged;
    }
    set ParentSizeChanged(value:Boolean) {
        this._parentSizeChanged = value;
        if (value && this.Width=="*") this.NeedReorganize = true;
    }

    private _sizeChanged :Boolean = false;
      get SizeChanged():Boolean {
          return this._sizeChanged;
      }
      set SizeChanged(value:Boolean) {
          this._sizeChanged = value;
          if (value) {
            this.NeedReorganize = true;
            //this.Parent.ChildSizeChanged = true;

          }
      }



  constructor() {

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
