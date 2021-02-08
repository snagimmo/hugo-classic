var codeBlock = document.body.getElementsByClassName('chroma');

for(i=0; i <= codeBlock.length-1; i++){
  var code = codeBlock[i].firstElementChild;
  if (!/lang/.test(code.className)) {
      break;
  }
  if(code) {
    var lines = code.innerHTML.split(/\n/);
    var codeLine = "";
    lines.forEach(function(line){
      if(line != ""){
        codeLine += '<div class="code-line">' + line + '</div>';
      }
    })
    code.innerHTML = codeLine;
  }
}
