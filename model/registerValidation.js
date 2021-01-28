const joi_val = require('@hapi/joi')
const User = require('./user')
const register_validation = (data) => {
    const schema_joi =  joi_val.object({
        name : joi_val.string().min(8).required(),
        password : joi_val.string().min(8).required(),
        email : joi_val.string().email().required()
     })
     const {error} = schema_joi.validate(data);
     return error;
}

module.exports.register_validation = register_validation;
