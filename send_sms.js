const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
const notifyServiceSid = process.env.TWILIO_NOTIFY_SERVICE_SID;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const twilioMessagingSid = process.env.TWILIO_MESSAGING_SERVICES_SID; // messaging service I'd like to use

require('dotenv').config()
const client = require('twilio')(accountSid, authToken, twilioNumber);
console.log(process.env.TWILIO_PHONE_NUMBER)
client.messages
  .create({
  .create({
    to: +1234567890, // This should loop over an array of phone numbers from my database
    from: process.env.TWILIO_PHONE_NUMBER, // From a valid Twilio number
    body: "Twilio test",
  })
  .then((message) => console.log(message.sid));
