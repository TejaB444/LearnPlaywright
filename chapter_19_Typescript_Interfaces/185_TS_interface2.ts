// Interface with optional and readonly for API response
interface APIResponse {
    readonly statusCode: number;
    body: string;
    headers?: object; //Optipnal
    responseTime?: number;
}

// Readonly - can't modify the readonly
// ? - optional

let response: APIResponse = {
    statusCode: 200,
    body: '{"user": "admin"}',

}

console.log("Status:", response.statusCode);
console.log("Body:", response.body);
console.log("Headers:", response.headers);
response.body = '{"user": "coach"}'
console.log("Body:", response.body);
// response.statusCode=500;

console.log('----------------------')

// interface Point {
//     readonly x: number;
//     readonly y: number;
// }
// const point: Point = { x: 10, y: 20 };
// point.x = 5;  // can't modify

// ReadonlyArray
interface Data {
    readonly items: readonly number[];
}