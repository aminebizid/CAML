var CControl = (function () {
    function CControl() {
        this._needDraw = false;
        this.EventHandler = this.GetEventHandler();
    }
    Object.defineProperty(CControl.prototype, "Width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
            if (this.EventHandler != null)
                this.EventHandler.Push(this, "resize", null);
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
            if (this.EventHandler != null)
                this.EventHandler.Push(this, "resize", null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CControl.prototype, "NeedDraw", {
        get: function () {
            return this._needDraw;
        },
        set: function (value) {
            this._needDraw = value;
        },
        enumerable: true,
        configurable: true
    });
    CControl.prototype.GetEventHandler = function () {
        if (this.Parent == null)
            return this.EventHandler;
        return this.Parent.GetEventHandler();
    };
    CControl.prototype.ComputeSize = function () {
    };
    CControl.prototype.Reorganize = function () {
    };
    CControl.prototype.Draw = function () {
    };
    CControl.prototype.Render = function () {
    };
    return CControl;
})();
