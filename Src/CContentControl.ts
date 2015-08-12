class CContentControl extends CControl {
    public Children: Array<CControl>;

    

  constructor() {
    super();
    this.Children = [];
  }

  public AddChild(child: CControl) : void {
    Log("Adding child "+ child.Name + " to " + this.Name);
    this.Children.push(child);      
    child.Parent = this;
    child.NeedArrange = true;  
    
    
  }


  public Arrange () {
      
    super.Arrange();

    if (this.NeedArrange) 
    {
       this.NeedArrange = false;
       for (var i=0;i<this.Children.length; i++)  {              
              this.Children[i].NeedArrange = true;               
      }
     }
      // Ask child to arrange his parent only if he was arranging
       for (var i=0;i<this.Children.length; i++) 
          this.Children[i].Arrange();
      
      
  }

  public Render() {
    this.RenderChildren();
    super.Render();
     
  }

  public Draw() {
     for (var i=0;i<this.Children.length; i++)
            this.Children[i].NeedRender = true;
  }

 
  public DrawChildren() {
    for (var i=0;i<this.Children.length; i++) {
      this.Children[i].Draw();
    }
  }
 

  public RenderChildren() {
     for (var i=0;i<this.Children.length; i++)
      this.Children[i].Render();
    
  }



}
