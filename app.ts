class  Caml extends CContentControl {

  public ParentCanvas: HTMLCanvasElement;
  public ParentContext : CanvasRenderingContext2D;




    constructor(public idCanvas:string) {
        super();


        this.ParentCanvas = <HTMLCanvasElement>document.getElementById(idCanvas);
        this.ParentContext = this.ParentCanvas.getContext("2d");
        this.Width = this.Height = "*";
        this.GetHTMLSize();
        this.ParentResize();
        window.addEventListener("resize",() => this.ParentResize());
        this.NeedDraw = true;
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

    public ParentResize() : void {
      this.ParentSizeChanged=true;
      this.NeedReorganize = true;
      super.ParentResize();
    }


    public Reorganize() : void {
      if (this.NeedReorganize) {
        this.NeedReorganize = false;
        if (this.ParentSizeChanged) {

          if (this.Width == "*")
          {
            this.ActualWidth = document.body.clientWidth;
            this.NeedDraw = true;
          }

          if (this.Height == "*") {
            this.ActualHeight = document.body.clientHeight
              this.NeedDraw = true;
          }
        }
        super.Reorganize();

      }
    }


    public Draw(): void {
      if (this.NeedDraw) {
        this.NeedDraw = false;
        this.Canvas = <HTMLCanvasElement>document.createElement("Canvas");
        this.Canvas.width = this.ActualWidth;
        this.Canvas.height = this.ActualHeight;
        this.Context = this.Canvas.getContext("2d");
        this.Context.fillStyle="red";
        this.Context.fillRect(10,10,this.ActualWidth - 35,this.ActualHeight - 35);
        super.Draw();
        this.NeedRender = true;
      }
    }


    private ResizeParentCanvas():void {
      this.ParentSizeChanged = false;
      this.ParentCanvas.width = this.ActualWidth;
      this.ParentCanvas.height = this.ActualHeight;
    }

    public Render() : void {
      this.NeedRender = false;
      if (this.ParentSizeChanged) {
        this.ResizeParentCanvas();
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
