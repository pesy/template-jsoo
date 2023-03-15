open Js_of_ocaml;
let hello = () => "hello"
Js.export("reason", [%js {as _; pub hello = () => hello() |> Js.string}]);
