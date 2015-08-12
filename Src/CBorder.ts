class CBorder extends CContentControl {

  private _background : string;
  get Background(): string { return this._background; }
  set Background(value:string) { this._background = value; this.NeedDraw = true;}

private _thickness : number;
  get Thickness(): number { return this._thickness; }
  set Thickness(value:number) { this._thickness = value; this.NeedDraw = true;}

  constructor(params : any) {
    super();
    this.Name = "Border";
    this.Width = params.width || "*";
    this.Height = params.height || "*";
    this._background = params.background || "lightgrey";
    this._thickness = params.thickness || 1;
  }


  public Draw() : void {
   
      if (this.NeedDraw) {
          this.NeedDraw  = false;
          Log("Drawing Border "+this.Background);
          this.PrepareContext();
            this.Context.save();

          

          this.Context.fillStyle=this.Background;
          this.Context.fillRect(0,0,this.ActualWidth ,this.ActualHeight);

            this.Context.strokeStyle="black";
            this.Context.lineWidth = this.Thickness;            
            this.Context.strokeRect(0,0,this.ActualWidth,this.ActualHeight);

          this.Context.restore();
          this.NeedRender = true;

          super.Draw();

    }
      this.DrawChildren(); 
    
  }




}
