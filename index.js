var Botkit = require('botkit');
var CronJob = require('cron').CronJob;
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: 'xoxb-68870596480-9zIHFszxcFg9e5ilJg8b0iwW', 
}).startRTM(function(err,bot,payload) {
  // 初期処理
  if (err) {
    throw new Error('Could not connect to Slack');
  }
  new CronJob({
    cronTime: '* * * * *',
      onTick: function() {
        bot.say({
          channel: 'times_ueki',
        text: '進捗どうですか',
        username: 'test',
        icon_url: ''
        });
      },
      start: true,
      timeZone: 'Asia/Tokyo'
  });
});
controller.hears(["進捗どうですか？"],["direct_message","direct_mention","mention"],function(bot,message) {
  // キーワードに反応した処理
  bot.reply(message, '進捗ダメです');
});
