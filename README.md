# SEEK - Job Ads Checkout system
This is a small, and simple nodejs http server app.<br/>
It handles job ads checkout requests from recruiters who are SEEK clients<br/>
Recruiters advertise job ads on SEEK system.<br/>
They can choose Classic Ad, Standout Ad, or Premium Ad for their job ads<br/>
The recruiters can be privileged clients of SEEK naming Unilever, Apple, Nike, Ford.<br/>
All non privileged customers are Default<br/>
As for now the http request must be GET<br/>
The server response with JSON data<br/>
Pure Javascript app running on NodeJS, only uses ES6, functional programming, and Jest as a test runner<br/>
### Prerequisites
NodeJS - I am using Node v10.2.1<br/>
NPM - I am using 5.6.0<br/>
or Yarn - I am using 1.7.0<br/>
### Installing
Clone the git repo to your folder
```
git clone https://github.com/huonglt/seek.git

```
then cd to folder seek, and install dependencies
```
npm install
```
or
```
yarn install
```
## Running the app

```
yarn start
```
or
```
npm start
```
## Running tests
```
yarn test
```
or
```
npm test
```
## Examples based on requirements doc to see the app in action
The below request is for customer Default ordering classic, standout, premium
```
curl "http://localhost:8081/checkout?customer=Default&item=classic&item=standout&tem=premium"
```
The below request is for customer Unilever ordering classic, classic, classic, premium
```
curl "http://localhost:8081/checkout?customer=Unilever&item=classic&item=classic&tem=classic&item=premium"
```
The below request is for customer Apple ordering standout, standout, standout, premium products
```
curl "http://localhost:8081/checkout?customer=Apple&item=standoutc&item=standout&item=standout&item=premium"
```
The below request is for customer Nike ordering premium, premium, premium, premium products
```
curl "http://localhost:8081/checkout?customer=Nike&item=premium&item=premium&item=premium&item=premium"
```
## Further Improvements
More things could be done to make this app better such as:
- Handle POST instead of GET
- Handle more complicated pricing rules
- Handle more customers
- More test cases
- Add more features
## Author
Helen Le
