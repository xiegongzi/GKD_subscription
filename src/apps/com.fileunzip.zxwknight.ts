import { defineAppConfig } from '../types';

export default defineAppConfig({
  id: 'com.fileunzip.zxwknight',
  name: '解压专家',
  groups: [
    {
      key: 1,
      name: '全屏广告-弹窗广告',
      rules: [
        {
          key: 1,
          name: '字节广告',
          activityIds:
            'com.bytedance.sdk.openadsdk.stub.activity.Stub_Standard_Portrait_Activity',
          matches: 'Image < @View[visibleToUser=true] +4 [text="反馈"]',
          snapshotUrls: 'https://i.gkd.li/i/13328194',
        },
        {
          key: 2,
          name: '腾讯广告',
          matches:
            '[id="android:id/content"] >(3,4) FrameLayout[childCount>4] > FrameLayout[childCount=1] > ImageView',
          snapshotUrls: 'https://i.gkd.li/i/13391833',
        },
      ],
    },
    {
      key: 2,
      name: '全屏广告-升级专业版弹窗',
      activityIds: [
        'com.fileunzip.zxwknight.activity.MainActivity',
        'com.fileunzip.zxwknight.activity.VideoPlayActivity',
      ],
      rules: '@[vid="ziputil_dialog_imageview"] < * > [text="升级到专业版"]',
      snapshotUrls: [
        'https://i.gkd.li/i/13328212',
        'https://i.gkd.li/i/14885336',
      ],
    },
    {
      key: 3,
      name: '全屏广告-应用推荐广告',
      quickFind: true,
      rules: [
        {
          key: 0,
          matches: '[vid="dialog_recommend_back"]',
          exampleUrls:
            'https://m.gkd.li/101449500/e7cf2c1a-9323-4ef4-8c89-82f63244b24b',
          snapshotUrls: 'https://i.gkd.li/i/14472982',
        },
        {
          key: 1,
          activityIds: 'com.fileunzip.zxwknight.activity.MainActivity',
          matches: '@[text="本次启动不再提示"][checked=false]',
          exampleUrls:
            'https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d',
          snapshotUrls: 'https://i.gkd.li/i/14885425',
        },
        {
          preKeys: [1],
          key: 2,
          activityIds: 'com.fileunzip.zxwknight.activity.MainActivity',
          matches: '[vid="promote_vault_full_screen_close"]',
          exampleUrls:
            'https://m.gkd.li/57941037/57e29faf-2806-4166-a21d-839f1479960d',
          snapshotUrls: 'https://i.gkd.li/i/14885425',
        },
      ],
    },
  ],
});
