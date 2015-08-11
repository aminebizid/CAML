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
        this.EventHandler = new CEventHandler();    
        this.EventHandler.Push("reorg",<CControl>this,"resize",<CControl>this)    
        window.addEventListener("resize",() =>  this.EventHandler.Push("reorg",<CControl>this,"resize",<CControl>this));

    }


    private GetHTMLSize() : void {
      if (this.ParentCanvas.attributes.getNamedItem('width') != null)
        this.Width = this.ParentCanvas.attributes.getNamedItem('width').value;

        if (this.ParentCanvas.attributes.getNamedItem('height') != null)
          this.Height = this.ParentCanvas.attributes.getNamedItem('height').value;
    }


    public Reorganize() : void {  
       super.Reorganize();   
       this.ReorganizeChildren();    

    }


    public Draw(): void {      
        super.Draw();
       
        this.Context.fillStyle="red";
        this.Context.fillRect(10,10,this.ActualWidth - 20,this.ActualHeight - 20);

        this.Context.strokeStyle="black";
        this.Context.strokeRect(0,0,this.ActualWidth,this.ActualHeight);
       
        this.PushRenderEvent("draw")        
    }


    public Render() : void {
      console.log("Rendring Caml " + this.ActualWidth+ " "+ this.ActualHeight);      
      this.ParentCanvas.width = document.body.clientWidth-30;
      this.ParentCanvas.height = document.body.clientHeight-30;
      

      this.ParentContext.drawImage(this.Canvas,0,0,this.ActualWidth, this.ActualHeight,0,0,this.ActualWidth, this.ActualHeight);
    }


    private ParseReorgEvents() {
       var ev = this.EventHandler.Shift("reorg");
      while (ev != null)
      {
        ev.Target.Reorganize();        
        ev = this.EventHandler.Shift("reorg");
      }
    }

      private ParseDrawEvents() {
       var ev = this.EventHandler.Shift("draw");
      while (ev != null)
      {
        ev.Target.Draw();        
        ev = this.EventHandler.Shift("draw");
      }
    }

    private ParseRenderEvents() {
       var ev = this.EventHandler.Shift("render");
      while (ev != null)
      {
        ev.Target.Render();        
        ev = this.EventHandler.Shift("render");
      }
    }



    x:number;
    c:number;
    counter:number;
    public ShowFPS : boolean;

    public Loop(t:number) : void {      
       this.ParseRenderEvents();
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

      this.ParseReorgEvents();
      this.ParseDrawEvents();
     



      
      requestAnimationFrame(() => this.Loop(n));
    }

   
    
    public Run() : void {   
      var d = new Date();
      var t = d.getTime();   
      this.x = t+500;
      this.counter = 0;
      this.c=0;
      this.Loop(t);
    }

   
}
