var caml;
var stack;
var border1;
var border2;

function Test(id: string) {
  	caml = new Caml(id);
  	caml.Run();
	stack = new CStackPanel({});
	caml.AddChild(stack);
	

	border1 = new CBorder({'width':500,'height':30, 'background':'blue'});	
  	stack.AddChild(border1);
  	/*border2 = new CBorder({'width':300,'background':'green'});	
  	border1.AddChild(border2);*/

}
