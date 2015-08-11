var CControl = (function () {
    function CControl() {
        this.EventHandler = this.GetEventHandler();
    }
    Object.defineProperty(CControl.prototype, "Width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
            this.PushReorgEvent("resize");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CControl.prototype, "Height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
            this.PushReorgEvent("resize");
        },
        enumerable: true,
        configurable: true
    });
    CControl.prototype.GetEventHandler = function () {
        if (this.Parent == null)
            return this.EventHandler;
        return this.Parent.GetEventHandler();
    };
    CControl.prototype.Reorganize = function () {
        Log("Reorganizing " + this.Name);
        var oldWidth = this.ActualWidth;
        var oldHeight = this.ActualHeight;
        if (this.Width == "*") {
            if (this.Parent != null)
                this.ActualWidth = this.Parent.ActualWidth;
            else
                this.ActualWidth = document.body.clientWidth - 30;
        }
        else if (this.Width == "auto") {
        }
        else {
            this.ActualWidth = +this.Width;
        }
        if (this.Height == "*") {
            if (this.Parent != null)
                this.ActualHeight = this.Parent.ActualHeight;
            else
                this.ActualHeight = document.body.clientHeight - 30;
        }
        else if (this.Height == "auto") {
        }
        else {
            this.ActualHeight = +this.Height;
        }
        this.Draw();
        if (this.Parent != null)
            this.Parent.Draw();
    };
    CControl.prototype.Draw = function () {
        console.log("drawing " + this.Name);
        this.Canvas = document.createElement("Canvas");
        this.Canvas.width = this.ActualWidth;
        this.Canvas.height = this.ActualHeight;
        this.Context = this.Canvas.getContext("2d");
    };
    CControl.prototype.Render = function () {
        console.log("rendering " + this.Name);
        this.Parent.Context.drawImage(this.Canvas, 0, 0, this.ActualWidth, this.ActualHeight);
        this.Parent.Render();
    };
    CControl.prototype.PushReorgEvent = function (ev) {
        if (this.EventHandler != null)
            this.EventHandler.Push("reorg", this, ev, this);
    };
    CControl.prototype.PushDrawEvent = function (ev) {
        if (this.EventHandler != null)
            this.EventHandler.Push("draw", this, ev, this);
    };
    CControl.prototype.PushRenderEvent = function (ev) {
        if (this.EventHandler != null)
            this.EventHandler.Push("render", this, ev, this);
    };
    return CControl;
})();
//# sourceMappingURL=CControl.js.map