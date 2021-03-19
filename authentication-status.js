
function isAuthenticated(req,res){
    if(req.isAuthenticated()){
        return true;
    }
    return false;
}

module.exports=isAuthenticated;
