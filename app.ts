var caml;
var border;

function Test(id: string) {
  caml = new Caml(id);
  border = new CBorder({});
caml.AddChild(border);
  caml.Run();

  border.Width = "100";

}
