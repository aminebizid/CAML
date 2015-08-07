var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
    };
    CContentControl.prototype.ParentResize = function () {
        for (var i = 0; i < this.Children.length; i++) {
            this.Children[i].ParentResize();
        }
    };
    CContentControl.prototype.Reorganize = function () {
        for (var i = 0; i < this.Children.length; i++) {
            this.Children[i].Reorganize();
        }
    };
    CContentControl.prototype.Draw = function () {
        for (var i = 0; i < this.Children.length; i++) {
            this.Children[i].Draw();
        }
    };
    CContentControl.prototype.Render = function () {
        for (var i = 0; i < this.Children.length; i++) {
            this.Children[i].Render();
        }
    };
    return CContentControl;
})(CControl);
