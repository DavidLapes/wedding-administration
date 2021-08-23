export function getExceptionResponseMessage (exception) {
    if(exception.hasOwnProperty('response')) {
        if(exception.hasOwnProperty('data')) {
            if(exception.hasOwnProperty('message')) {
                return exception.response.data.message;
            }
        }
    }
}
