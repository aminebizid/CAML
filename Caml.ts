class  Caml extends CContentControl {

  public ParentCanvas: HTMLCanvasElement;
  public ParentContext : CanvasRenderingContext2D;


    constructor(public idCanvas:string) {

        super();
        this.Parent = null;
        this.ParentCanvas = <HTMLCanvasElement>document.getElementById(idCanvas);
        this.ParentContext = this.ParentCanvas.getContext("2d");
        // if no width/height defined in HTML Canvas element, Canvas will be resized to body size
        this.Width = this.Height = "*";
        this.GetHTMLSize();
        this.ParentSizeChanged = true;
        window.addEventListener("resize",() => this.ParentSizeChanged = true);

    }



    private GetHTMLSize() : void {
      if (this.ParentCanvas.attributes.getNamedItem('width') != null)
        this.Width = this.ParentCanvas.attributes.getNamedItem('width').value;

        if (this.ParentCanvas.attributes.getNamedItem('height') != null)
          this.Height = this.ParentCanvas.attributes.getNamedItem('height').value;

          if (this.Width != "*" && this.Width != "auto") {
            this.ActualWidth = +this.Width;
          }
          if (this.Height != "*" && this.Height != "auto") {
            this.ActualHeight = +this.Height;
          }
    }



    public Reorganize() : void {
      if (this.NeedReorganize) {
        console.log("reorganize");
        this.NeedReorganize = false;
        if (this.ParentSizeChanged) {
          if (this.Width == "*") {
            this.ActualWidth = document.body.clientWidth;
            this.NeedDraw = true;
          }

          if (this.Height == "*") {
            this.ActualHeight = document.body.clientHeight
              this.NeedDraw = true;
          }
          this.NotifySizeChange();
        }



      }
        super.Reorganize();
    }


    public Draw(): void {
      if (this.NeedDraw) {
        console.log("drawing");
        this.NeedDraw = false;
        this.Canvas = <HTMLCanvasElement>document.createElement("Canvas");
        this.Canvas.width = this.ActualWidth;
        this.Canvas.height = this.ActualHeight;
        this.Context = this.Canvas.getContext("2d");
        this.Context.fillStyle="red";
        this.Context.fillRect(10,10,this.ActualWidth - 35,this.ActualHeight - 35);

        this.Context.strokeStyle="black";
        this.Context.strokeRect(0,1,this.ActualWidth,this.ActualHeight);

        super.Draw();
        this.NeedRender = true;
      }
    }


    public Render() : void {
      console.log("Rendring");
      this.NeedRender = false;

      if (this.ParentSizeChanged) {
        this.ParentSizeChanged = false;
        this.ParentCanvas.width = this.ActualWidth;
        this.ParentCanvas.height = this.ActualHeight;
      }

      super.Render();

      this.ParentContext.drawImage(this.Canvas,0,0,this.ActualWidth, this.ActualHeight,0,0,this.ActualWidth, this.ActualHeight);
    }

    public RenderLoop() : void {
      if (this.NeedRender) this.Render();
      this.Reorganize();
      this.Draw();
      requestAnimationFrame(() => this.RenderLoop());
    }

    public Run() : void {
      this.Reorganize();
      this.Draw();
      this.RenderLoop();
    }

}
