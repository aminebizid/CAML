var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CBorder = (function (_super) {
    __extends(CBorder, _super);
    function CBorder(params) {
        _super.call(this);
        this.Name = "Border";
        this.Width = params.width || "*";
        this.Height = params.height || "*";
        this._background = params.background || "lightgrey";
        this._thickness = params.thickness || 1;
    }
    Object.defineProperty(CBorder.prototype, "Background", {
        get: function () { return this._background; },
        set: function (value) { this._background = value; this.NeedDraw = true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CBorder.prototype, "Thickness", {
        get: function () { return this._thickness; },
        set: function (value) { this._thickness = value; this.NeedDraw = true; },
        enumerable: true,
        configurable: true
    });
    CBorder.prototype.Draw = function () {
        if (this.NeedDraw) {
            this.NeedDraw = false;
            Log("Drawing Border " + this.Background);
            this.PrepareContext();
            this.Context.save();
            this.Context.fillStyle = this.Background;
            this.Context.fillRect(0, 0, this.ActualWidth, this.ActualHeight);
            this.Context.strokeStyle = "black";
            this.Context.lineWidth = this.Thickness;
            this.Context.strokeRect(0, 0, this.ActualWidth, this.ActualHeight);
            this.Context.restore();
            this.NeedRender = true;
            _super.prototype.Draw.call(this);
        }
        this.DrawChildren();
    };
    return CBorder;
})(CContentControl);
//# sourceMappingURL=CBorder.js.map