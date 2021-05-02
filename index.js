const axios = require('axios');
const dotenv = require('dotenv')
// TODO: learn what this syntax means; ES6
const { WebClient } = require('@slack/web-api');

dotenv.config();

const token = process.env.BOT_TOKEN;
const web = new WebClient(token);

// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
// Can find it in the URL if you access Slack via the browser
//
// Sifu had to be invited in order to send the message to our Slack channel
const conversationId = 'C020P4FN9RR';

// TODO: Learn what this syntax means
(async () => {

  // See: https://api.slack.com/methods/chat.postMessage
  const res = await web.chat.postMessage(
    { channel: conversationId,
      text: 'Hi there! I\'ve been waiting to meet you...\n\n' +
            'Ready to work on your habits?'
    });

  console.log('Message sent: ', res.ts);
})();

