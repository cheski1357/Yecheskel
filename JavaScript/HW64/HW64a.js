
window.app=(function(){



    function stringCaseInsensitiveEquals(x,y){
        if(x.toLowerCase===y.toLowerCase()){
            return true;
        }
    return false;}


    return{
        stringCaseInsensitiveEquals:stringCaseInsensitiveEquals
    };


}());
