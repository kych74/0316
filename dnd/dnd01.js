/**
 * @author yj
 */

$('ul li').attr("draggable", true);


$('ul li').bind('dragstart', function(e){
	
	console.log("dragstart", e.target.textContent );

  var event = e.originalEvent;
  
  event.dataTransfer.setData("text/plain", e.target.textContent);
  event.dataTransfer.setData("text/html", e.target.outerHTML);
  event.dataTransfer.setData("text/uri-list", document.location.href);
});


$('#dropzone').bind('dragover',function(e){
  
  var event = e.originalEvent;
  var len = event.dataTransfer.types.length;
  
  for(var i= 0; i < len; i++){
    if(event.dataTransfer.types[i] === 'text/plain'){
      event.preventDefault();
      break;  
    }   
  }
  
});

$('#dropzone').bind('drop',function(e){
  
  console.log('drop...');
  var event = e.originalEvent;
  
  event.preventDefault();
  
  var text = event.dataTransfer.getData('text/plain');
  
  alert(text);
});

console.log($('#dropzone'));
