class CControl extends CUIElement {
  
  public Name: string;
 

  constructor() {
    super();
  }

   
 


    public Arrange() {
      if (this.NeedArrange) {
        
          Log("Arranging " + this.Name);       
          this.CalculateSize();
           
          this.NeedDraw  = true; 
          if (this.SizeChanged) 
          {
            this.SizeChanged = false;
           if (this.Parent != null) this.Parent.NeedArrange = true;        
        }
          
        }     
       
    }

 
  public Draw() : void {
    // Must override
  }

  public Render(): void {
    if (this.NeedRender) {
      this.NeedRender  = false;
      console.log("rendering " + this.Name);

      this.Parent.Context.drawImage(this.Canvas,this.X,this.Y,this.ActualWidth, this.ActualHeight);  
      if (this.Parent != null) this.Parent.NeedRender = true;        
    }
    
  }


 
  

}
