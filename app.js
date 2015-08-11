var caml;
var border1;
var border2;
function Test(id) {
    caml = new Caml(id);
    caml.Run();
    border1 = new CBorder({ 'width': 600, 'background': 'blue' });
    caml.AddChild(border1);
    border2 = new CBorder({ 'width': 300, 'background': 'green' });
    border1.AddChild(border2);
}
//# sourceMappingURL=app.js.map