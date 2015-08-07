class CControl {
  public Parent :CControl;

  public Canvas : HTMLCanvasElement;
  public Context : CanvasRenderingContext2D;

  public NeedRender : boolean;
  public NeedDraw : boolean;
  public NeedReorganize: boolean;
  public Width : string;
  public Height: string;
  public ActualWidth : number;
  public ActualHeight : number;
  public ParentSizeChanged : boolean;

  constructor() {

  }

  public ParentResize() : void {
    this.ParentSizeChanged=true;
    this.NeedReorganize = true;
  
  }

  public Reorganize() : void {

  }

  public Draw() : void {

  }

  public Render(): void {

  }

}
