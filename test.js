const { handler }= require('./index');
async function doSmthng() {
  await handler({
            "update_id": 996984099,
            "message": {
              "message_id": 1998,
              "from": {
                "id": 4097780,
                "is_bot": false,
                "first_name": "Artem",
                "last_name": "Nikolaev",
                "username": "ArtemNikolaev",
                "language_code": "ru"
              },
              "chat": {
                "id": 4097780,
                "first_name": "Artem",
                "last_name": "Nikolaev",
                "username": "ArtemNikolaev",
                "type": "private"
              },
              "date": 1622015406,
              "forward_from_chat": {
                "id": -1001117224641,
  "title": "Котонавты",
  "username": "meownauts",
  "type": "channel"
},
"forward_from_message_id": 12695,
  "forward_date": 1622010302,
  "photo": [
  {
    "file_id": "AgACAgIAAxkBAAIHzmCt_a4IDsL3W2Mw9R5CwxBfm6xpAALusTEbaw5xSTkbnEOH8FV8ooKPni4AAwEAAwIAA20AA3awAgABHwQ",
    "file_unique_id": "AQADooKPni4AA3awAgAB",
    "file_size": 17749,
    "width": 320,
    "height": 213
  },
  {
    "file_id": "AgACAgIAAxkBAAIHzmCt_a4IDsL3W2Mw9R5CwxBfm6xpAALusTEbaw5xSTkbnEOH8FV8ooKPni4AAwEAAwIAA3gAA3ewAgABHwQ",
    "file_unique_id": "AQADooKPni4AA3ewAgAB",
    "file_size": 46224,
    "width": 600,
    "height": 400
  }
],
  "caption": "Netflix анонсировал свой первый российский ориджиналс, то есть тот, который они заказывают себе ещё перед стартом съёмок. Это будет сериал «Анна К» – история Анны Карениной на современный лад. В роли госпожи К – Светлана Ходченкова."
}
});

}

doSmthng();
