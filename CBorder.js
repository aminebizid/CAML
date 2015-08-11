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
    }
    Object.defineProperty(CBorder.prototype, "Background", {
        get: function () { return this._background; },
        set: function (value) { this._background = value; this.EventHandler.Push("draw", this, "background", this); },
        enumerable: true,
        configurable: true
    });
    CBorder.prototype.Reorganize = function () {
        _super.prototype.Reorganize.call(this);
        this.ReorganizeChildren();
    };
    CBorder.prototype.Draw = function () {
        _super.prototype.Draw.call(this);
        this.Context.fillStyle = this.Background;
        this.Context.fillRect(30, 30, this.ActualWidth - 60, this.ActualHeight - 60);
        this.PushRenderEvent("draw");
        this.Parent.PushRenderEvent("child_redraw");
    };
    CBorder.prototype.Render = function () {
        _super.prototype.Render.call(this);
    };
    return CBorder;
})(CContentControl);
//# sourceMappingURL=CBorder.js.map