const catchError = controller => {
    return (req, res, next) => {
        controller(req, res, next)
            .catch(next);
        /**  En el catch, va a mandar a llamar el siguiente middleware, 
        que sería el de handleErrors */
    }
}

module.exports = catchError