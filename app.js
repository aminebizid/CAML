var Caml = (function () {
    function Caml(idCanvas) {
        var _this = this;
        this.idCanvas = idCanvas;
        this._rootCanvas = document.getElementById(idCanvas);
        this.ParentContext = this._rootCanvas.getContext("2d");
        this.Width = this.Height = "*";
        this.GetHTMLSize();
        this.Resize();
        window.addEventListener("resize", function () { return _this.Resize(); });
        this.NeedDraw = true;
    }
    Caml.prototype.GetHTMLSize = function () {
        if (this._rootCanvas.attributes.getNamedItem('width') != null)
            this.Width = this._rootCanvas.attributes.getNamedItem('width').value;
        if (this._rootCanvas.attributes.getNamedItem('height') != null)
            this.Height = this._rootCanvas.attributes.getNamedItem('height').value;
    };
    Caml.prototype.Resize = function () {
        console.log("resizing");
        if (this.Width == "*") {
            this.ActualWidth = document.body.clientWidth;
            this.NeedReorganize = true;
        }
        else
            this.ActualWidth = +this.Width;
        if (this.Height == "*") {
            this.ActualHeight = document.body.clientHeight;
            this.NeedReorganize = true;
        }
        else
            this.ActualHeight = +this.Height;
    };
    Caml.prototype.Reorganize = function () {
        if (this.NeedReorganize) {
            this.NeedReorganize = false;
            this.NeedDraw = true;
        }
    };
    Caml.prototype.Draw = function () {
        if (this.NeedDraw) {
            this.NeedDraw = false;
            this.Canvas = document.createElement("Canvas");
            this.Canvas.width = this.ActualWidth;
            this.Canvas.height = this.ActualHeight;
            this.Context = this.Canvas.getContext("2d");
            this.Context.fillStyle = "red";
            this.Context.fillRect(10, 10, this.ActualWidth - 20, this.ActualHeight - 20);
            this.NeedRender = true;
        }
    };
    Caml.prototype.Render = function () {
        this.NeedRender = false;
        this._rootCanvas.width = this.ActualWidth;
        this._rootCanvas.height = this.ActualHeight;
        this.ParentContext.drawImage(this.Canvas, 0, 0, this.ActualWidth, this.ActualHeight);
        console.log("rendered");
    };
    Caml.prototype.RenderLoop = function () {
        var _this = this;
        if (this.NeedRender)
            this.Render();
        this.Reorganize();
        this.Draw();
        requestAnimationFrame(function () { return _this.RenderLoop(); });
    };
    Caml.prototype.Run = function () {
        this.Reorganize();
        this.Draw();
        this.RenderLoop();
    };
    return Caml;
})();
