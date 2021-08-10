// This is supposed to execute the function and supress excetpion
Function.prototype.TryExecute = function(handle) {
    var fn = this;
    return function() {
        try {
            return fn.apply(this, arguments);
        } catch(e) {
            /*return handle(e);*/
            alert(e.message);
        }
    };
};
