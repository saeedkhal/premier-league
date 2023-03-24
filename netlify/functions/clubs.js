exports.handeler = async () => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({
                saee: 'name'
            }),
            headers: {
                "Content-Type": "application/json"
            },
        }
    } catch {
        return {
            statusCode: 500,
            body: JSON.stringify('internal server error')
        }
    }
}