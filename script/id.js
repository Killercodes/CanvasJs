//nuuid
var nuuid = () => {
    var w = () => { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }
    var id = `${w()}${w()}${w()}${w()}${w()}${w()}${w()}${w()}`;
    var bs64 = window.btoa(id);
    return bs64;
}

//guid
var guid = () => {
  var w = () => { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }
  return  `${w()}${w()}-${w()}-${w()}-${w()}-${w()}${w()}${w()}`;
}
