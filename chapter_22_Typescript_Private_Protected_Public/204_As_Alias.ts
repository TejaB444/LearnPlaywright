let rawResponse: unknown = {
    status: 200,
    body: { user: "admin", role: "tester" }
};

interface UserResponse {
    status: number;
    body: { user: string; role: string };
}

let response = rawResponse as UserResponse;

console.log(response)
console.log(response.body)
console.log(response.status)
console.log(response.body['user'])
console.log(response.body.role)