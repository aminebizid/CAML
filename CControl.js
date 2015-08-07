var CControl = (function () {
    function CControl() {
    }
    CControl.prototype.ParentResize = function () {
        this.ParentSizeChanged = true;
        this.NeedReorganize = true;
    };
    CControl.prototype.Reorganize = function () {
    };
    CControl.prototype.Draw = function () {
    };
    CControl.prototype.Render = function () {
    };
    return CControl;
})();
