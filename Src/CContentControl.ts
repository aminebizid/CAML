class CContentControl extends CControl {
    public Children: Array<CControl>;

    

  constructor() {
    super();
    this.Children = [];
  }

  public AddChild(child: CControl) : void {
    child.Parent = this;
    this.Children.push(child);
    child.EventHandler = this.GetEventHandler();
    child.PushReorgEvent("AddChild");
  }



  public Reorganize(): void {
    super.Reorganize();
  
  }

  public ReorganizeChildren() {
      for (var i=0;i<this.Children.length; i++) {      
        this.Children[i].Reorganize();
    }    
  }

  public Draw():void {
    super.Draw();
    for (var i=0;i<this.Children.length; i++) {
      this.Children[i].Draw();
    }
  }

  public Render() : void {
   /* for (var i=0;i<this.Children.length; i++) {
      this.Children[i].Render();
    }*/
    super.Render();
  }

}
