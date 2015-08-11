var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var CContentControl = (function (_super) {
    __extends(CContentControl, _super);
    function CContentControl() {
        _super.call(this);
        this.Children = [];
    }
    CContentControl.prototype.AddChild = function (child) {
        child.Parent = this;
        this.Children.push(child);
        child.EventHandler = this.GetEventHandler();
        child.PushReorgEvent("AddChild");
    };
    CContentControl.prototype.Reorganize = function () {
        _super.prototype.Reorganize.call(this);
    };
    CContentControl.prototype.ReorganizeChildren = function () {
        for (var i = 0; i < this.Children.length; i++) {
            this.Children[i].Reorganize();
        }
    };
    CContentControl.prototype.Draw = function () {
        _super.prototype.Draw.call(this);
        for (var i = 0; i < this.Children.length; i++) {
            this.Children[i].Draw();
        }
    };
    CContentControl.prototype.Render = function () {
        _super.prototype.Render.call(this);
    };
    return CContentControl;
})(CControl);
//# sourceMappingURL=CContentControl.js.map