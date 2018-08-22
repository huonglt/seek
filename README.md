# SEEK - Job Ads Checkout system
This is a nodejs http server app to handle checkout requests from recruiters who are SEEK clients
Recruiters advertise job ads on SEEK system. They can choose Classic Ad, Standout Ad, or Premium Ad for their job ads
The recruiters can be privileged clients of SEEK naming Unilever, Apple, Nike, Ford. All non privileged customers are Default

Pure Javascript app running on NodeJS. It uses ES6, functional programming, and Jest as a test runner
### Prerequisites
NodeJS - I am using Node v10.2.1
NPM - I am using 5.6.0
or Yarn - I am using 1.7.0

### Installing
Clone the git repo to your machine
```
git clone https://github.com/huonglt/seek.git
```
then installing dependencies
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
## Examples to run the app to see it in action
```
curl "http://localhost:8081/checkout?customer=Apple&item=standoutc&item=standout&item=standout&item=premium"
```
```
curl "http://localhost:8081/checkout?customer=Nike&item=premium&item=premium&item=premium&item=premium"
```
