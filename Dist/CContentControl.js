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
        Log("Adding child " + child.Name + " to " + this.Name);
        this.Children.push(child);
        child.Parent = this;
        child.NeedArrange = true;
    };
    CContentControl.prototype.Arrange = function () {
        _super.prototype.Arrange.call(this);
        if (this.NeedArrange) {
            this.NeedArrange = false;
            for (var i = 0; i < this.Children.length; i++) {
                this.Children[i].NeedArrange = true;
            }
        }
        for (var i = 0; i < this.Children.length; i++)
            this.Children[i].Arrange();
    };
    CContentControl.prototype.Render = function () {
        this.RenderChildren();
        _super.prototype.Render.call(this);
    };
    CContentControl.prototype.Draw = function () {
        for (var i = 0; i < this.Children.length; i++)
            this.Children[i].NeedRender = true;
    };
    CContentControl.prototype.DrawChildren = function () {
        for (var i = 0; i < this.Children.length; i++) {
            this.Children[i].Draw();
        }
    };
    CContentControl.prototype.RenderChildren = function () {
        for (var i = 0; i < this.Children.length; i++)
            this.Children[i].Render();
    };
    return CContentControl;
})(CControl);
//# sourceMappingURL=CContentControl.js.map