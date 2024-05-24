export default function ApiErrorResponse(success, errorMessage,status) {
    return Response.json({
        success,
        errorMessage,
        status
    })
}