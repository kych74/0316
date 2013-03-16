/**
 * @author yj
 */
window.requestFileSystem  = window.requestFileSystem || window.webkitRequestFileSystem;


function successCallback ( ){
  console.log("success");	
  window.requestFileSystem(PERSISTENT, 1024, onInitFs, errorHandler);  
}

function onInitFs(fs) {

  fs.root.getFile('/thinker_log.txt', {}, function(fileEntry) {

    // Get a File object representing the file,
    // then use FileReader to read its contents.
    fileEntry.file(function(file) {
    
       console.log(fileEntry.toURL());
    	
       var reader = new FileReader();

       reader.onloadend = function(e) {
         var txtArea = document.createElement('textarea');
         txtArea.value = this.result;
         document.body.appendChild(txtArea);
       };

       reader.readAsText(file);
    }, errorHandler);

  }, errorHandler);

}


function errorHandler(e) {
  var msg = '';
  console.dir(e);
  switch (e.code) {
    case FileError.QUOTA_EXCEEDED_ERR:
      msg = 'QUOTA_EXCEEDED_ERR';
      break;
    case FileError.NOT_FOUND_ERR:
      msg = 'NOT_FOUND_ERR';
      break;
    case FileError.SECURITY_ERR:
      msg = 'SECURITY_ERR';
      break;
    case FileError.INVALID_MODIFICATION_ERR:
      msg = 'INVALID_MODIFICATION_ERR';
      break;
    case FileError.INVALID_STATE_ERR:
      msg = 'INVALID_STATE_ERR';
      break;
    default:
      msg = 'Unknown Error';
      break;
  };

  console.log('Error: ' + msg);
}


window.webkitStorageInfo.requestQuota(PERSISTENT, 1024*1024, successCallback , errorHandler);