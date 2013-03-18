/**
 * @author thinker
 */

$('#dropzone').bind('dragover',function(e){
  
  var event = e.originalEvent;

  event.preventDefault();
  
});

$('#dropzone').bind('drop',function(e){
  
  var event = e.originalEvent;
  event.preventDefault();  

  console.log('drop...');
  
  if(event.dataTransfer.files.length){
    alert('file dropped');
    console.log(event.dataTransfer.files[0]);
    console.log(event.dataTransfer);
    
    var file = event.dataTransfer.files[0];
    
    var fileReader = new FileReader();
    console.log(fileReader);
    
    fileReader.onload = function(event){
      var data = fileReader.result;
      
      
      $('#dropImage').attr('src',data);
    };
    
    fileReader.readAsDataURL(file);
      
  }

});

















