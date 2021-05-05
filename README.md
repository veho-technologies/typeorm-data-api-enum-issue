# TypeORM AWS Data API (PG) Enum Casting Issue

## Setup

* `npm i`
* Copy `.env.example` to `.env`
* Update connection settings in `.env`
* run `npm run example`

## Expected result

Upon running the `example` npm command, an `Example` record should be inserted and subquently fetched via `findOne()`

## Actual result

`Example` record is inserted but `findOne()` fails with an error because the `Example.status` field is not cast to the correct enum type:

```
BadRequestException: ERROR: operator does not exist: example_status_enum = character varying
  Hint: No operator matches the given name and argument type(s). You might need to add explicit type casts.
  Position: 313
    at Object.extractError (/Users/chris/projects/veho/seshat-debug/node_modules/aws-sdk/lib/protocol/json.js:52:27)
    at Request.extractError (/Users/chris/projects/veho/seshat-debug/node_modules/aws-sdk/lib/protocol/rest_json.js:55:8)
    at Request.callListeners (/Users/chris/projects/veho/seshat-debug/node_modules/aws-sdk/lib/sequential_executor.js:106:20)
    at Request.emit (/Users/chris/projects/veho/seshat-debug/node_modules/aws-sdk/lib/sequential_executor.js:78:10)
    at Request.emit (/Users/chris/projects/veho/seshat-debug/node_modules/aws-sdk/lib/request.js:688:14)
    at Request.transition (/Users/chris/projects/veho/seshat-debug/node_modules/aws-sdk/lib/request.js:22:10)
    at AcceptorStateMachine.runTo (/Users/chris/projects/veho/seshat-debug/node_modules/aws-sdk/lib/state_machine.js:14:12)
    at /Users/chris/projects/veho/seshat-debug/node_modules/aws-sdk/lib/state_machine.js:26:10
    at Request.<anonymous> (/Users/chris/projects/veho/seshat-debug/node_modules/aws-sdk/lib/request.js:38:9)
    at Request.<anonymous> (/Users/chris/projects/veho/seshat-debug/node_modules/aws-sdk/lib/request.js:690:12) {
  code: 'BadRequestException',
  time: 2021-05-05T15:46:47.936Z,
  requestId: 'xxXxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
  statusCode: 400,
  retryable: false,
  retryDelay: 78.57561114326721
}
```
