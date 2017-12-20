;var binder=function(){
    function simpleBind(obj,key,callback){
        obj[`__${key}`]=obj[key];
        Object.defineProperty(obj,key,{
            set: function(newVal){
                obj[`__${key}`]=newVal;
                callback(newVal); 
            },
            get: function(){
                return obj[`__${key}`];
            }
        });
    } 

    return {
        simpleBind
    }
}();