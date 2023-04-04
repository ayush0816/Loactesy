import joi from "joi";

export const ValidateSignup = (userData) => {
    const Scheme = joi.object({
        name: joi.string().min(3).max(20),
        userName: joi.string().required().max(20).min(5),
        password: joi.string().required().min(5)
       
    })

    return Scheme.validateAsync(userData);
}

export const ValidateSignin = (userData) => {
    const Scheme = joi.object({
        userName: joi.string().email(),
        password: joi.string().required().min(5),
    })

    return Scheme.validateAsync(userData);
}