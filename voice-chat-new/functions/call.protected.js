exports.handler = function(context, event, callback) {
    let twiml = new Twilio.twiml.VoiceResponse();
  
     const room = event.room;
  
    const dial = twiml.dial();
    dial.conference('room1');
    console.log(twiml.toString());
    return callback(null, twiml);
  }

// exports.handler = function(context, event, callback) {
//     let twiml = new Twilio.twiml.VoiceResponse();
  
//     const recipient = event.recipient;
  
//     var dial = twiml.dial();
//     dial.client({},recipient);
      
//     return callback(null, twiml);
//   }