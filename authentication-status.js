
function isAuthenticated(req){
    if(req.isAuthenticated()){
        return true;
    }
    return false;
}

module.exports=isAuthenticated;
