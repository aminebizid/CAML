class  Caml extends CContentControl {

  public ParentCanvas: HTMLCanvasElement;
  public ParentContext : CanvasRenderingContext2D;
  public IdCanvas : string;

    constructor(idCanvas:string) {
        this.IdCanvas = idCanvas;
        this.Name = "Caml";
        super();
        this.Parent = null;
        this.ParentCanvas = <HTMLCanvasElement>document.getElementById(idCanvas);
        this.ParentContext = this.ParentCanvas.getContext("2d");
        this.Width = this.Height = "*";
        this.GetHTMLSize();        
        this.Resize();       
        window.addEventListener("resize",() => this.Resize() );

    }


    private GetHTMLSize() : void {
      if (this.ParentCanvas.attributes.getNamedItem('width') != null)
        this.Width = this.ParentCanvas.attributes.getNamedItem('width').value;

        if (this.ParentCanvas.attributes.getNamedItem('height') != null)
          this.Height = this.ParentCanvas.attributes.getNamedItem('height').value;
    }

    private Resize() {
     this.NeedArrange = true;   
        
    }

    public Arrange() {
      super.Arrange();
    }

    public Draw(): void {      
        if (this.NeedDraw) {          
            this.NeedDraw = false;
            Log("Drawing caml");
            this.PrepareContext();                      
       
            this.Context.fillStyle="red";
            this.Context.fillRect(0,0,this.ActualWidth ,this.ActualHeight );

           /* this.Context.strokeStyle="black";
            this.Context.strokeRect(0,0,this.ActualWidth,this.ActualHeight);*/
            this.NeedRender = true;
            super.Draw();
           
      }
      this.DrawChildren(); 
         
          
    }


    public Render() : void {
        
      this.RenderChildren();

        if (this.NeedRender) {
          this.NeedRender = false;

          console.log("Rendring Caml " + this.ActualWidth+ " "+ this.ActualHeight);      
          this.ParentCanvas.width = document.body.clientWidth-30;
          this.ParentCanvas.height = document.body.clientHeight-30;      
          
          this.ParentContext.drawImage(this.Canvas,0,0,this.ActualWidth, this.ActualHeight,0,0,this.ActualWidth, this.ActualHeight);
        }
      
    }


    private x:number;
    private c:number;
    private counter:number;
    public ShowFPS : boolean;

    public Loop() : void {      
      this.Render();
      if (this.ShowFPS)
      {
        this.c++;
        var d = new Date();
        var n = d.getTime();
        if (new Date().getTime()>this.x)
        {
          this.x=n+500;
          this.counter=this.c*2;              
          this.c=0;
        }
     
      this.ParentContext.fillStyle="black";
      this.ParentContext.fillRect(this.ActualWidth-60,this.ActualHeight-20,60,20);
      this.ParentContext.font="15px Arial";
      this.ParentContext.fillStyle="white";
      this.ParentContext.fillText(this.counter.toString()+" fps",this.ActualWidth-50,this.ActualHeight-5);
 }

      this.Arrange();
      this.Draw();

      requestAnimationFrame(() => this.Loop());
    }

   
    
    public Run() : void {   
      var d = new Date();
      var t = d.getTime();  
      this.ShowFPS  = true; 
      this.x = t+500;
      this.counter = 0;
      this.c=0;
      this.Loop();
    }

   
}
