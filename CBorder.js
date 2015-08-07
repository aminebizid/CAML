var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var CBorder = (function (_super) {
    __extends(CBorder, _super);
    function CBorder(params) {
        _super.call(this);
        this.Width = params.width || "*";
        this.Height = params.height || "*";
    }
    CBorder.prototype.Reorganize = function () {
        if (this.NeedReorganize) {
            console.log("Reorganizing border");
            this.NeedReorganize = false;
            if (this.ParentSizeChanged) {
                if (this.Width == "*") {
                    this.ActualWidth = this.Parent.ActualWidth;
                    this.NeedDraw = true;
                }
                if (this.Height == "*") {
                    this.ActualHeight = this.Parent.ActualHeight;
                    this.NeedDraw = true;
                }
            }
        }
    };
    CBorder.prototype.Draw = function () {
        if (this.NeedDraw) {
            console.log("drawing border");
            this.NeedDraw = false;
            this.Canvas = document.createElement("Canvas");
            this.Canvas.width = this.ActualWidth;
            this.Canvas.height = this.ActualHeight;
            this.Context = this.Canvas.getContext("2d");
            this.Context.fillStyle = "blue";
            this.Context.fillRect(20, 20, this.ActualWidth - 45, this.ActualHeight - 45);
            _super.prototype.Draw.call(this);
            this.NeedRender = true;
        }
    };
    CBorder.prototype.Render = function () {
        console.log("rendering border");
        this.Parent.Context.drawImage(this.Canvas, 0, 0, this.ActualWidth, this.ActualHeight, 0, 0, this.ActualWidth, this.ActualHeight);
    };
    return CBorder;
})(CControl);
