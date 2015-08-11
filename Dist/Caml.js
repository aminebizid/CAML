// Grid branch
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
        this.EventHandler = new CEventHandler();
        this.EventHandler.Push("reorg", this, "resize", this);
        window.addEventListener("resize", function () { return _this.EventHandler.Push("reorg", _this, "resize", _this); });
    }
    Caml.prototype.GetHTMLSize = function () {
        if (this.ParentCanvas.attributes.getNamedItem('width') != null)
            this.Width = this.ParentCanvas.attributes.getNamedItem('width').value;
        if (this.ParentCanvas.attributes.getNamedItem('height') != null)
            this.Height = this.ParentCanvas.attributes.getNamedItem('height').value;
    };
    Caml.prototype.Reorganize = function () {
        _super.prototype.Reorganize.call(this);
        this.ReorganizeChildren();
    };
    Caml.prototype.Draw = function () {
        _super.prototype.Draw.call(this);
        this.Context.fillStyle = "red";
        this.Context.fillRect(10, 10, this.ActualWidth - 20, this.ActualHeight - 20);
        this.Context.strokeStyle = "black";
        this.Context.strokeRect(0, 0, this.ActualWidth, this.ActualHeight);
        this.PushRenderEvent("draw");
    };
    Caml.prototype.Render = function () {
        console.log("Rendring Caml " + this.ActualWidth + " " + this.ActualHeight);
        this.ParentCanvas.width = document.body.clientWidth - 30;
        this.ParentCanvas.height = document.body.clientHeight - 30;
        this.ParentContext.drawImage(this.Canvas, 0, 0, this.ActualWidth, this.ActualHeight, 0, 0, this.ActualWidth, this.ActualHeight);
    };
    Caml.prototype.ParseReorgEvents = function () {
        var ev = this.EventHandler.Shift("reorg");
        while (ev != null) {
            ev.Target.Reorganize();
            ev = this.EventHandler.Shift("reorg");
        }
    };
    Caml.prototype.ParseDrawEvents = function () {
        var ev = this.EventHandler.Shift("draw");
        while (ev != null) {
            ev.Target.Draw();
            ev = this.EventHandler.Shift("draw");
        }
    };
    Caml.prototype.ParseRenderEvents = function () {
        var ev = this.EventHandler.Shift("render");
        while (ev != null) {
            ev.Target.Render();
            ev = this.EventHandler.Shift("render");
        }
    };
    Caml.prototype.Loop = function () {
        var _this = this;
        this.ParseRenderEvents();
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
        this.ParseReorgEvents();
        this.ParseDrawEvents();
        requestAnimationFrame(function () { return _this.Loop(); });
    };
    Caml.prototype.Run = function () {
        var d = new Date();
        var t = d.getTime();
        this.x = t + 500;
        this.counter = 0;
        this.c = 0;
        this.Loop();
    };
    return Caml;
})(CContentControl);
//# sourceMappingURL=Caml.js.map