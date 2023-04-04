const joi=require('joi');
const ValidateSignup = (userData) => {
    const Scheme = joi.object({
        name: joi.string().min(3).max(20),
        username: joi.string().email(),
        password: joi.string().required().min(5)
       
    })

    return Scheme.validateAsync(userData);
}

const ValidateSignin = (userData) => {
    const Scheme = joi.object({
        username: joi.string().email(),
        password: joi.string().required().min(5),
    })

    return Scheme.validateAsync(userData);
}
module.exports={ValidateSignin,ValidateSignup};