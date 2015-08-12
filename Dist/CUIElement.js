var CUIElement = (function () {
    function CUIElement() {
        this.X = 0;
        this.Y = 0;
    }
    Object.defineProperty(CUIElement.prototype, "NeedArrange", {
        get: function () {
            return this._needArrange;
        },
        set: function (value) {
            this._needArrange = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CUIElement.prototype, "NeedDraw", {
        get: function () {
            return this._needDraw;
        },
        set: function (value) {
            this._needDraw = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CUIElement.prototype, "NeedRender", {
        get: function () {
            return this._needRender;
        },
        set: function (value) {
            this._needRender = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CUIElement.prototype, "Width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
            this.NeedArrange = true;
            this.SizeChanged = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CUIElement.prototype, "Height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
            this.SizeChanged = true;
            this.NeedArrange = true;
        },
        enumerable: true,
        configurable: true
    });
    CUIElement.prototype.CalculateWidth = function () {
        if (this.Width == "*") {
            if (this.Parent != null)
                return this.Parent.ActualWidth;
            return document.body.clientWidth - 30;
        }
        else if (this.Width == "auto") {
            Log("auto not implemented");
            return 0;
        }
        else {
            return +this.Width;
        }
    };
    CUIElement.prototype.CalculateHeight = function () {
        if (this.Height == "*") {
            if (this.Parent != null)
                return this.Parent.ActualHeight;
            return document.body.clientHeight - 30;
        }
        else if (this.Height == "auto") {
            Log("auto not implemented");
            return 0;
        }
        else {
            return +this.Height;
        }
    };
    CUIElement.prototype.PrepareContext = function () {
        this.Canvas = document.createElement("Canvas");
        this.Canvas.width = this.ActualWidth;
        this.Canvas.height = this.ActualHeight;
        this.Context = this.Canvas.getContext("2d");
    };
    CUIElement.prototype.CalculateSize = function () {
        this.ActualWidth = this.CalculateWidth();
        this.ActualHeight = this.CalculateHeight();
    };
    return CUIElement;
})();
//# sourceMappingURL=CUIElement.js.map