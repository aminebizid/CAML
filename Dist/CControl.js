var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CControl = (function (_super) {
    __extends(CControl, _super);
    function CControl() {
        _super.call(this);
    }
    CControl.prototype.Arrange = function () {
        if (this.NeedArrange) {
            Log("Arranging " + this.Name);
            this.CalculateSize();
            this.NeedDraw = true;
            if (this.SizeChanged) {
                this.SizeChanged = false;
                if (this.Parent != null)
                    this.Parent.NeedArrange = true;
            }
        }
    };
    CControl.prototype.Draw = function () {
    };
    CControl.prototype.Render = function () {
        if (this.NeedRender) {
            this.NeedRender = false;
            console.log("rendering " + this.Name);
            this.Parent.Context.drawImage(this.Canvas, this.X, this.Y, this.ActualWidth, this.ActualHeight);
            if (this.Parent != null)
                this.Parent.NeedRender = true;
        }
    };
    return CControl;
})(CUIElement);
//# sourceMappingURL=CControl.js.map