const {
  EventBridge
} = require("@aws-sdk/client-eventbridge");
const eventBridge = new EventBridge();

exports.handler = async (event) => {

  const payload = {
    data: {
      chat_id: event.message.chat.id,
      from_chat_id: event.message.from.id,
      message_id: event.message.message_id,
    },
    token: process.env.token,
  };

  const data = {
    Entries: [
      {
        Detail: JSON.stringify({
          payload,
          "action": "copyMessage",
        }),
        DetailType: "test",
        EventBusName: "arn:aws:events:eu-central-1:202657017942:event-bus/telegram-bot-api",
        Resources: [],
        Source: 'test',
        Time: new Date(),
      }
    ]

  };
  console.info(data);
  try {
    const result = await eventBridge.putEvents(data);

    console.info(result);
  } catch (err) {
    throw err;
  }

  return {
    status: 200,
    statusText: "Thx",
  }
};
