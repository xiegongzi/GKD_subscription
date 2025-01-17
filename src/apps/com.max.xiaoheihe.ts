import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.max.xiaoheihe',
  name: '小黑盒',
  groups: [
    {
      key: 1,
      name: '弹窗_签到成功',
      actionMaximum: 1,
      resetMatch: 'app',
      quickFind: true,
      rules: [
        {
          matches: [
            '[text="签到成功!"]',
            '[id="com.max.xiaoheihe:id/tv_confirm"]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13421535',
        },
      ],
    },
    {
      key: 2,
      name: '局部广告-卡片广告',
      desc: '点击关闭',
      rules: [
        {
          name: '收藏帖子后底部推荐关注卡片',
          quickFind: true,
          activityIds:
            'com.max.xiaoheihe.module.bbs.post.ui.activitys.WebNewsPostPageActivity',
          matches: '[vid="iv_notify_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/b7c25b6e-cc77-4bcc-a477-23b3de74c61f',
          snapshotUrls: 'https://i.gkd.li/i/14914139',
        },
      ],
    },
  ],
});
