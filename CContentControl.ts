class CContentControl extends CControl {
    public Children: Array<CControl>;

  constructor() {
    super();
    this.Children = [];
  }

  public AddChild(child: CControl) : void {
    child.Parent = this;
    this.Children.push(child);
  }

  public ParentResize() : void {
    for (var i=0;i<this.Children.length; i++) {
      this.Children[i].ParentResize();
    }
  
  }


  public Reorganize(): void {
    for (var i=0;i<this.Children.length; i++) {
      this.Children[i].Reorganize();
    }
  }

  public Draw():void {
    for (var i=0;i<this.Children.length; i++) {
      this.Children[i].Draw();
    }
  }

  public Render() : void {
    for (var i=0;i<this.Children.length; i++) {
      this.Children[i].Render();
    }
  }

}
