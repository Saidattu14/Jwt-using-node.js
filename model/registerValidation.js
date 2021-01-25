const joi_val = require('@hapi/joi')
const User = require('./user')


const check = async (data) =>  {
    const find_unique = await User.filter(data.name)
    console.log(find_unique)
    return find_unique
}


const register_validation = (data) => {
    const schema_joi =  joi_val.object({
        name : joi_val.string().min(8).required(),
        password : joi_val.string().min(8).required(),
        email : joi_val.string().email().required()
     })
     const {error} = schema_joi.validate(data);
    const validation = check(data);
     return error;
}

module.exports.register_validation = register_validation;