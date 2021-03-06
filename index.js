var Botkit = require('botkit');
var CronJob = require('cron').CronJob;
var controller = Botkit.slackbot();
var text = '@channel \n\n目標：目指せグランプリ！\n技術：Gitを使いこなす！\nチーム：一日一回進捗報告！\n\n開発〆切： *10月19日(水)* \n\n';
var bot = controller.spawn({
  token: process.env.token, 
}).startRTM(function(err,bot,payload) {
  // 初期処理
  if (err) {
    throw new Error('Could not connect to Slack');
  }
  new CronJob({
    cronTime: '00 30 8 * * *',
      onTick: function() {
        bot.say({
          channel: 'ezk_pen',
        text: text + '今日も一日頑張りましょう！' ,
        username: 'periodically',
        icon_url: ''
        });
      },
      start: true,
      timeZone: 'Asia/Tokyo'
  });
  new CronJob({
    cronTime: '00 00 18 * * *',
      onTick: function() {
        bot.say({
          channel: 'ezk_pen',
        text: text + '今日も1日お疲れ様でした！\n\n *今日頑張ったこと* を報告しましょう！',
        username: 'periodically',
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
