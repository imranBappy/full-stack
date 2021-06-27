function checkForm (value, name){
    
        var usernameRegex = /^[a-zA-Z0-9]+$/;
        if (usernameRegex.test(value)) {
            if (value.length > 4 && value.length < 20) {
            return {
                message:'',
                error: false
            }
            }else{
                return{
                    message:'Invalid ' + name,
                    error: true
                }
            }
            }else{
                return{
                    message:'Invalid ' + name,
                    error: true
                }
            }
}

export default checkForm