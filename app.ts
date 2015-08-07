class  Caml {
    private _rootCanvas : HTMLCanvasElement;
    public Canvas : HTMLCanvasElement;
    public Context : CanvasRenderingContext2D;
    public ParentContext : CanvasRenderingContext2D;
    public NeedRender : boolean;
    public NeedDraw : boolean;
    public NeedReorganize: boolean;
    public Width : string;
    public Height: string;
    public ActualWidth : number;
    public ActualHeight : number;


    constructor(public idCanvas:string) {
        this._rootCanvas = <HTMLCanvasElement>document.getElementById(idCanvas);
        this.ParentContext = this._rootCanvas.getContext("2d");
        this.Width = this.Height = "*";
        this.GetHTMLSize();
        this.Resize();
        window.addEventListener("resize",() => this.Resize());
        this.NeedDraw = true;
    }

    private GetHTMLSize() : void {
      if (this._rootCanvas.attributes.getNamedItem('width') != null)
        this.Width = this._rootCanvas.attributes.getNamedItem('width').value;

        if (this._rootCanvas.attributes.getNamedItem('height') != null)
          this.Height = this._rootCanvas.attributes.getNamedItem('height').value;
    }

    private Resize() : void {
      console.log("resizing");
      if (this.Width == "*")
      {
        this.ActualWidth = document.body.clientWidth;
        this.NeedReorganize = true;
      }
      else this.ActualWidth = +this.Width;

      if (this.Height == "*") {
        this.ActualHeight = document.body.clientHeight
          this.NeedReorganize = true;
      }
      else this.ActualHeight = +this.Height;

    }


    public Reorganize() : void {
      if (this.NeedReorganize) {
        this.NeedReorganize = false;

        this.NeedDraw = true;
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
        this.Context.fillRect(10,10,this.ActualWidth - 20,this.ActualHeight - 20);
        this.NeedRender = true;
      }
    }


    public Render() : void {
      this.NeedRender = false;

      this._rootCanvas.width = this.ActualWidth;
      this._rootCanvas.height = this.ActualHeight;

      this.ParentContext.drawImage(this.Canvas,0,0,this.ActualWidth, this.ActualHeight);
      console.log("rendered");
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
