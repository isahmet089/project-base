class Response{
    constructor(){}
    static successResponse(data,code=200){
        return {
            data,
            code
        }
    }
    static errorResponse(error){
        return{
            success: false,
            error: {
                message: error.message || 'Bir hata oluştu',
                code: error.code || 500
            }
        }
    }
}
module.exports =Response;
