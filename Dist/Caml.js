var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Caml = (function (_super) {
    __extends(Caml, _super);
    function Caml(idCanvas) {
        var _this = this;
        this.IdCanvas = idCanvas;
        this.Name = "Caml";
        _super.call(this);
        this.Parent = null;
        this.ParentCanvas = document.getElementById(idCanvas);
        this.ParentContext = this.ParentCanvas.getContext("2d");
        this.Width = this.Height = "*";
        this.GetHTMLSize();
        this.Resize();
        window.addEventListener("resize", function () { return _this.Resize(); });
    }
    Caml.prototype.GetHTMLSize = function () {
        if (this.ParentCanvas.attributes.getNamedItem('width') != null)
            this.Width = this.ParentCanvas.attributes.getNamedItem('width').value;
        if (this.ParentCanvas.attributes.getNamedItem('height') != null)
            this.Height = this.ParentCanvas.attributes.getNamedItem('height').value;
    };
    Caml.prototype.Resize = function () {
        this.NeedArrange = true;
    };
    Caml.prototype.Arrange = function () {
        _super.prototype.Arrange.call(this);
    };
    Caml.prototype.Draw = function () {
        if (this.NeedDraw) {
            this.NeedDraw = false;
            Log("Drawing caml");
            this.PrepareContext();
            this.Context.fillStyle = "red";
            this.Context.fillRect(0, 0, this.ActualWidth, this.ActualHeight);
            this.NeedRender = true;
            _super.prototype.Draw.call(this);
        }
        this.DrawChildren();
    };
    Caml.prototype.Render = function () {
        this.RenderChildren();
        if (this.NeedRender) {
            this.NeedRender = false;
            console.log("Rendring Caml " + this.ActualWidth + " " + this.ActualHeight);
            this.ParentCanvas.width = document.body.clientWidth - 30;
            this.ParentCanvas.height = document.body.clientHeight - 30;
            this.ParentContext.drawImage(this.Canvas, 0, 0, this.ActualWidth, this.ActualHeight, 0, 0, this.ActualWidth, this.ActualHeight);
        }
    };
    Caml.prototype.Loop = function () {
        var _this = this;
        this.Render();
        if (this.ShowFPS) {
            this.c++;
            var d = new Date();
            var n = d.getTime();
            if (new Date().getTime() > this.x) {
                this.x = n + 500;
                this.counter = this.c * 2;
                this.c = 0;
            }
            this.ParentContext.fillStyle = "black";
            this.ParentContext.fillRect(this.ActualWidth - 60, this.ActualHeight - 20, 60, 20);
            this.ParentContext.font = "15px Arial";
            this.ParentContext.fillStyle = "white";
            this.ParentContext.fillText(this.counter.toString() + " fps", this.ActualWidth - 50, this.ActualHeight - 5);
        }
        this.Arrange();
        this.Draw();
        requestAnimationFrame(function () { return _this.Loop(); });
    };
    Caml.prototype.Run = function () {
        var d = new Date();
        var t = d.getTime();
        this.ShowFPS = true;
        this.x = t + 500;
        this.counter = 0;
        this.c = 0;
        this.Loop();
    };
    return Caml;
})(CContentControl);
//# sourceMappingURL=Caml.js.map