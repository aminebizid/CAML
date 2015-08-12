var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CStackPanel = (function (_super) {
    __extends(CStackPanel, _super);
    function CStackPanel(params) {
        _super.call(this);
        this.Name = "StackPanel";
        this.Width = params.width || "auto";
        this.Height = params.height || "auto";
        this._orientation = params.orientation || "Horizontal";
    }
    Object.defineProperty(CStackPanel.prototype, "Orientation", {
        get: function () { return this._orientation; },
        set: function (value) { this._orientation = value; this.NeedDraw = true; },
        enumerable: true,
        configurable: true
    });
    CStackPanel.prototype.Arrange = function () {
        if (this.NeedArrange) {
            Log("Arranging " + this.Name);
            this.CalculateSize();
            this.NeedDraw = true;
            if (this.SizeChanged) {
                this.SizeChanged = false;
                if (this.Parent != null)
                    this.Parent.NeedArrange = true;
            }
            this.NeedArrange = false;
            for (var i = 0; i < this.Children.length; i++) {
                this.Children[i].NeedArrange = true;
            }
        }
        for (var i = 0; i < this.Children.length; i++)
            this.Children[i].Arrange();
    };
    CStackPanel.prototype.Draw = function () {
        if (this.NeedDraw) {
            this.NeedDraw = false;
            Log("Drawing Stack Panel " + this.ActualWidth + " " + this.ActualHeight);
            this.PrepareContext();
            this.Context.save();
            this.Context.strokeStyle = "black";
            this.Context.strokeRect(0, 0, this.ActualWidth, this.ActualHeight);
            this.Context.restore();
            this.NeedRender = true;
            _super.prototype.Draw.call(this);
        }
        this.DrawChildren();
    };
    return CStackPanel;
})(CContentControl);
//# sourceMappingURL=CStackPanel.js.map