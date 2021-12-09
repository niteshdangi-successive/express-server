const userValidation = {
    create: {
        id: {
            required: true, 
            string: true, 
            in:['body'], 
            custom: function(value) { 
                console.log('Value', value); 
                throw { error: 'Error Occured', message: 'Message' } 
            }, 
        },

        email: { 
            required: true, 
            regex: '', 
            in: ['body'], 
            errorMessage: 'Email is required', 
        },

        password: { 
            required: true, 
            regex: '', 
            in: ['body'], 
            errorMessage: 'Password is required', 
        },
    },

    delete: {
        id: {
            required: true,  
            in: ['params'],
            errorMessage: 'Id is required'
        },
    },

    get: {
        skip: {
            required: false, 
            default: 0, 
            number: true, 
            in: ['query'], 
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: false, 
            default: 10, 
            number: true, 
            in: ['query'], 
            errorMessage: 'Limit is invalid',
        }
    },

    update: {
        id: {
            required: true, 
            string: true, 
            in:['body']
        },
        dataToUpdate: {
            required: true,
            isObject: true,
            in: ['body'],   
            custom: function(dataToUpdate) {}
        },
    }
}

export default userValidation;