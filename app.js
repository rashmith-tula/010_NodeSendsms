// var clockwork = require("clockwork")({ key: "062c83e6a6874f49b68dfc0e0c30439f545964f7" });


// // Send a message
// clockwork.sendSms({ To: "918688624136", Content: "Hello Rashmith!" }, function(error, resp) {
//     if (error) {
//         console.log("Something went wrong", error);
//     }
//     else {
//         console.log("Message sent", resp.responses[0].id);
//     }
// });

// var twilio = require('twilio');

// // Find your account sid and auth token in your Twilio account Console.
// var client = new twilio('AC0b0abff712a2ebe7d8cffa4308ff4387', 'b488e3cf6e78f094764f6ec82c6809ea');

// // Send the text message.
// client.messages.create({
//     to: '917702129365',
//     from: '918688624136',
//     body: 'Hello from Twilio!'
// });

// var request = require('request');

// request.post('https://textbelt.com/text', {
//     form: {
//         phone: '+918688624136',
//         message: 'Hello world',
//         key: 'e83f41fe5186982ef5a042cb8c574b8e0d90f3cfowPWGAqt4lkVsS8b1rnNvZ49B',
//     },
// }, function(err, httpResponse, body) {
//     if (err) {
//         console.error('Error:', err);
//         return;
//     }
//     console.log(JSON.parse(body));
// })

// var msg91 = require("msg91")("190019AjqeSZErl3Rj5a4389f2", "ravindar", "1");


// // Mobile No can be a single number, list or csv string

// var mobileNo = "918688624136";

// // var mobileNo = [ "XXXXXXXXXX", "XXXXXXXXXX", "XXXXXXXXXX" ];

// // var mobileNo =  "XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX";

// msg91.send(mobileNo, "Hi Rashmith", function(err, response) {
//     console.log(err);
//     console.log(response);
// });

// var text = require('textbelt');

// var opts = {
//   fromAddr: 'some@email.com',  // "from" address in received text 
//   fromName: 'joe smith',       // "from" name in received text 
//   region:   'us',              // region the receiving number is in: 'us', 'canada', 'intl' 
//   subject:  'something'        // subject of the message 
// };

// text.sendText(phone, message, opts, function() {

// });

var request = require("request");
// var url = "https://smsapi.engineeringtgr.com/send/?Mobile=8688624136&Password=rosivrepus&Key=ravin18P5flGEa4cVos2nA&Message=Hi+Rashmith+How+are+you&To=8688624136"
// var number = "8688624136";
// var message = "Great! It works dynamically."
// var url = "http://api.msg91.com/api/sendhttp.php?sender=Rashmi&route=4&mobiles=" + number + "&authkey=190019AjqeSZErl3Rj5a4389f2&country=91&message=" + message;
// request(url, function(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         // var result = JSON.parse(body);
//         console.log("Successfully sent");
//     }
// });

var key = "+8688624136324513"
var name = "Rashmith";
var step = 1;
if (key.slice(0, 1) == "+") {
    var pkey = key.slice(11);
    var phone = key.slice(1, 11);
    var message = "Hi " + name + "," + "Your password " + step + " is:" + pkey;
    var url = "http://api.msg91.com/api/sendhttp.php?sender=" + name.slice(0, 6) +
        "&route=4&mobiles=" + phone + "&authkey=190019AjqeSZErl3Rj5a4389f2&country=91&message=" + message;
    console.log(url);
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var clue = "Your password is sent to mobile# " + phone;
        }
    });
}
