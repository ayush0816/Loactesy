const joi=require('joi');

const ValidateProperty = (userData) => {
    const Scheme = joi.object({
        name: joi.string().min(3).max(30),
        username: joi.string().email(),
        password: joi.string().required().min(5)
       
    })

    return Scheme.validateAsync(userData);
}

module.exports={ValidateProperty};