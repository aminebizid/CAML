class CBorder extends CControl {



  constructor(params : any) {
    super();
    this.Width = params.width || "*";
    this.Height = params.height || "*";

  }

  public Reorganize() : void {
    if (this.NeedReorganize) {
        console.log("Reorganizing border")
      this.NeedReorganize = false;
      if (this. ParentSizeChanged) {

        if (this.Width == "*")
        {
          this.ActualWidth = this.Parent.ActualWidth;
          this.NeedDraw = true;
        }

        if (this.Height == "*") {
          this.ActualHeight = this.Parent.ActualHeight
            this.NeedDraw = true;
        }
      }


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
      this.Context.fillRect(20,20,this.ActualWidth - 45,this.ActualHeight - 45);
      super.Draw(); // draw children

      this.NeedRender = true;
    }
  }

  public Render() : void {
    console.log("rendering border")
    this.Parent.Context.drawImage(this.Canvas,0,0,this.ActualWidth, this.ActualHeight,0,0,this.ActualWidth, this.ActualHeight);

  }


}
