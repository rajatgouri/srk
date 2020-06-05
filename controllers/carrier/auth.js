const User = require('../../models/carrier');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')


exports.postSignup = (req,res,next) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const address1 = req.body.address1;
    const business_name = req.body.business_name;
    const phone1 = req.body.phone1;
    const phone2 = req.body.phone2;
    const address2 = req.body.address2;

   User.findOne({email})
    .then((userDoc)=>{
        if(userDoc) {
            return res.status(400).send({
                data: {
                    message: 'user already exist'
                }
            })
        }

        console.log('user not exist!');
        return bcrypt
            .hash(password, 12)
            .then(hashedPassword => {
                const user = new User({
                    'firstname': firstname,
                    'lastname': lastname,
                    'email': email, 
                    'password': hashedPassword,
                    'address1': address1,
                    'business_name': business_name,
                    'phone1': phone1, 
                    'phone2': phone2, 
                    'address2': address2 
                })
                return user.save();
            })
            .then(result => {
                res.status(200).send({
                    data: {
                        message: 'user signup successfully'
                    }
                });
             })
             .catch(err => {
                 res.status(403).send({
                     data: {
                         message: 'user signup error'
                     }
                 })
             })
    })
    .catch((err) => console.error(err))
}




exports.postLogout = (req,res,next) => {
    req.session.user = null;
    req.session.isLoggedIn = false;
    req.session.destroy(err =>{
        if(err) throw err
        console.log('session destroyed successfully')
    })
    res.status(200).send({
        data: {
            message: 'logout succesfully'
        }
    })

}