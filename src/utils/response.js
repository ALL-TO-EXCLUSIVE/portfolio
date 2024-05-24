export default function ApiResponse(success, successMessage,status,data) {
    return Response.json({
        data,
        success,
        successMessage,
        status
    })
}