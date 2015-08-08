class CContentControl extends CControl {
    public Children: Array<CControl>;


    private _childSizeChanged :Boolean = false;
      get ChildSizeChanged():Boolean {
          return this._childSizeChanged;
      }
      set ChildSizeChanged(value:Boolean) {
          this._childSizeChanged = value;
          if (value && this.Width=="auto") this.NeedReorganize = true;
      }




  constructor() {
    super();
    this.Children = [];
  }




  public AddChild(child: CControl) : void {
    child.Parent = this;
    this.Children.push(child);
    child.ParentSizeChanged = true;
  }

 public NotifySizeChange() : void {
   for (var i=0;i<this.Children.length; i++) {
     this.Children[i].ParentSizeChanged = true;
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
