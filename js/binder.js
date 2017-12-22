;var binder=function(){
    /**
     * Simple bind function
     * @param {* the object to binding} obj 
     * @param {* a property of the object} key 
     * @param {* callback funtion} callback 
     */
    function simpleBind(obj,key,callback){
        // private key for storing value
        obj[`__${key}`]=obj[key];
        //define get and set funciton
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