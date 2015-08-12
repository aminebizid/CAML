class CStackPanel extends CContentControl {
	 
  private _orientation : string;
  get Orientation(): string { return this._orientation; }
  set Orientation(value:string) { this._orientation = value; this.NeedDraw = true;}

	 constructor(params : any) {
		super();
 		 this.Name = "StackPanel";
		 this.Width = params.width || "auto";
    	 this.Height = params.height || "auto";
    	 this._orientation = params.orientation || "Horizontal";
	}


	public Arrange() {
		if (this.NeedArrange) {
          Log("Arranging " + this.Name);       
          this.CalculateSize();
           
          this.NeedDraw  = true; 
          if (this.SizeChanged) {
            this.SizeChanged = false;
           if (this.Parent != null) this.Parent.NeedArrange = true;                   
          }
          this.NeedArrange = false;
       	for (var i=0;i<this.Children.length; i++)  {              
              this.Children[i].NeedArrange = true;               
      }
          
        }  

      
      // Ask child to arrange his parent only if he was arranging
       for (var i=0;i<this.Children.length; i++) 
          this.Children[i].Arrange();   
	}

	 public Draw() : void {
   
      if (this.NeedDraw) {
          this.NeedDraw  = false;
          Log("Drawing Stack Panel " + this.ActualWidth + " " +this.ActualHeight);
          this.PrepareContext();
            
            this.Context.save();

                    

            this.Context.strokeStyle="black";            
            this.Context.strokeRect(0,0,this.ActualWidth,this.ActualHeight);

          this.Context.restore();
          this.NeedRender = true;

          super.Draw();

    }
      this.DrawChildren(); 
    
  }

}