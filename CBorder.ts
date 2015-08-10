class CBorder extends CControl {

  private _background : string;
  get Background(): string { return this._background; }
  set Background(value:string) { this._background = value; this.NeedDraw = true;}



  constructor(params : any) {
    super();
    this.Width = params.width || "*";
    this.Height = params.height || "*";

  }

  public Reorganize() : void {
    if (this.NeedReorganize) {
        console.log("Reorganizing border")
      this.NeedReorganize = false;
    }
  }

  public Draw() : void {
    if (this.NeedDraw) {
        console.log("drawing border")

      this.NeedDraw = false;
      this.Canvas = <HTMLCanvasElement>document.createElement("Canvas");
      this.Canvas.width = this.ActualWidth;
      this.Canvas.height = this.ActualHeight;
      this.Context = this.Canvas.getContext("2d");
      this.Context.fillStyle="blue";
      this.Context.fillRect(20,20,this.ActualWidth - 55,this.ActualHeight - 55);
      super.Draw(); // draw children

      this.NeedRender = true;
    }
  }

  public Render() : void {
    console.log("rendering border")
    this.Parent.Context.drawImage(this.Canvas,0,0,this.ActualWidth, this.ActualHeight,0,0,this.ActualWidth, this.ActualHeight);

  }


}
