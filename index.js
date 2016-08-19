var Botkit = require('botkit');
var CronJob = require('cron').CronJob;
var controller = Botkit.slackbot();
var text = '目標：目指せグランプリ！\n技術：Gitを使いこなす！\nチーム：一日一回進捗報告！\n';
var bot = controller.spawn({
  token: process.env.token, 
}).startRTM(function(err,bot,payload) {
  // 初期処理
  if (err) {
    throw new Error('Could not connect to Slack');
  }
  new CronJob({
    cronTime: '00 15 15 * * *',
      onTick: function() {
        bot.say({
          channel: 'times_ueki',
        text: text,
        username: 'test',
        icon_url: ''
        });
      },
      start: true,
      timeZone: 'Asia/Tokyo'
  });
  new CronJob({
    cronTime: '00 18 15 * * *',
      onTick: function() {
        bot.say({
          channel: 'times_ueki',
        text: text + '寝るまでに *進捗報告* をしましょう',
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
