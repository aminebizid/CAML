var CControl = (function () {
    function CControl() {
        this._needDraw = false;
        this._parentSizeChanged = false;
        this._sizeChanged = false;
    }
    Object.defineProperty(CControl.prototype, "Width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
            this.SizeChanged = true;
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
            this.SizeChanged = true;
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
    Object.defineProperty(CControl.prototype, "ParentSizeChanged", {
        get: function () {
            return this._parentSizeChanged;
        },
        set: function (value) {
            this._parentSizeChanged = value;
            if (value && this.Width == "*")
                this.NeedReorganize = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CControl.prototype, "SizeChanged", {
        get: function () {
            return this._sizeChanged;
        },
        set: function (value) {
            this._sizeChanged = value;
            if (value) {
                this.NeedReorganize = true;
            }
        },
        enumerable: true,
        configurable: true
    });
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
