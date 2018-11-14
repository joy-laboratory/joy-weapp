export default {
  login() {
    let prefix = "#/";
    let navList = [{
        name: "快速了解",
        icon: "",
        subNav: [{
            name: '基本介绍',
            href: prefix + 'introduction',
          },
          {
            name: '更新日志',
            href: prefix + 'update',
            style: 'color:#f30;font-weight:bold;'
          }
        ]
      },
      {
        name: "View 视图",
        icon: "",
        subNav: [{
          name: "Avatar 头像",
          // href: prefix + "avatar",
        },{
          name: "Badge 徽标"
        },{
          name: "Tag 标签"
        },{
          name: "WaterMark 水印"
        },{
          name: "Divider 分割线"
        },{
          name: 'icon 图标'
          // href: prefix + 'icon',
        }]
      }, {
        name: "Action 操作反馈",
        icon: "",
        subNav: [{
          name: 'Action-Sheet 动作面板',
        },{
          name: 'Modal 模态框',
        },{
          name: 'Progress 进度条',
        },{
          name: 'Toast 轻提示',
        },{
          name: 'Loading 加载',
        },{
          name: 'SwipeAction 滑动操作',
        },{
          name: 'LoadMore 加载更多',
        },{
          name: 'Comment 评论'
        }]
      }, {
        name: "Form 表单",
        icon: "",
        subNav: [{
          name: 'Radio 单选框',
        }, {
          name: 'Checkbox 复选框',
        }, {
          name: 'Textarea 多行文本框',
        }, {
          name: 'Rate 评分',
        }]
      },
      {
        name: "Navigation 导航",
        icon: "",
        subNav: [{
          name: 'NavBar 导航栏',
        }, {
          name: 'TabBar 标签栏',
        }, {
          name: 'Tabs 标签页',
        }]
      },
      {
        name: "Other 其他",
        icon: "",
        subNav: [{
          name: 'Backtop 回到顶部',
        }, {
          name: 'Table 表格',
        }, {
          name: 'Countdown 倒计时',
        }]
      },
      {
        name: "Block 区块",
        icon: "",
        subNav: [{
          name: 'MessageList 消息列表',
        }, {
          name: "Diary 分享列表",
        }, {
          name: 'CommentBlock 评论列表',
        }, {
          name: 'Overview 概览',
        }, {
          name: 'ArticleList 文章列表',
        }]
      }
    ];
    return new Promise((resolve, reject) => {
      resolve({
        navList
      });
    });
  }
};
