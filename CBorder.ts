class CBorder extends CContentControl {

  private _background : string;
  get Background(): string { return this._background; }
  set Background(value:string) { this._background = value; this.EventHandler.Push("draw",<CControl>this,"background",<CControl>this)}


  constructor(params : any) {
    super();
    this.Name = "Border";
    this.Width = params.width || "*";
    this.Height = params.height || "*";
    this._background = params.background || "lightgrey";
  }

  public Reorganize() : void {
    //Organize itself the organize its children
    super.Reorganize();  
    this.ReorganizeChildren();
   
  }

  public Draw() : void {
          
      super.Draw();
      this.Context.fillStyle=this.Background;
      this.Context.fillRect(30,30,this.ActualWidth - 60,this.ActualHeight - 60);


      this.PushRenderEvent("draw");
      this.Parent.PushRenderEvent("child_redraw");
      
    
  }

  public Render() : void {
    super.Render();    

  }


}
