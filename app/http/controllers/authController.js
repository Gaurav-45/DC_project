function authController(){
    return{
        login(req,res){
            res.render('auth/login')
        },
        regitser(req,res){
            res.render('auth/register')
        }
    }
}

module.exports=authController