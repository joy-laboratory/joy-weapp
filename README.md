### 基于wepy框架的一套微信小程序ui组件

部分规范参考市面上的其他同类ui组件并且结合自身项目开发规范总结出来的，其目的减少前端重复性的工作，后期可以通过增加更多的`Block`来增强对移动端的定制化的支持。

### 基础命令

#### 小程序组件开发相关命令
``` bash
# 小程序dev环境命令
npm run dev

# 小程序打包上线命令
npm run build
```

#### 文档平台相关命令
```bash
# 文档平台dev环境命令
npm run dev:doc
```

### 计划分为以下几类

#### View 视图（包含通告栏、标签、徽标等）

- [x] Avatar 头像
- [x] Badge 徽标
- [ ] NoticeBar 通告栏
- [x] Tag 标签
- [x] WaterMark 水印
- [x] Divider 分割线
- [x] Icon 图标

#### Action 操作反馈（包含对话框、进度条、动作面板等）

- [x] Action-Sheet 动作面板
- [x] Modal 模态框
- [x] Progress 进度条
- [x] Toast 轻提示
- [x] Loading 加载
- [x] SwipeAction 滑动操作
- [x] LoadMore 加载更多
- [x] Comment 评论

#### Form 表单（包含输入框、单选框、复选框等）

- [ ] Radio 单选框
- [ ] Checkbox 复选框
- [ ] Textarea 多行文本框
- [ ] Rate 评分

#### Navigation 导航（包含标签栏、自定义tabBar、分段器等）

- [ ] NavBar 导航栏
- [ ] TabBar 标签栏
- [x] Tabs 标签页

#### Other 其他（包含回到顶部、分割线等）

- [ ] Backtop 回到顶部
- [ ] Table 表格
- [x] Countdown 倒计时

#### Block 区块（包含消息列表、分享列表、评论等）

- [ ] MessageList 消息列表
- [ ] Diary 分享列表
- [ ] CommentBlock 评论列表
- [ ] Overview 概览
- [ ] ArticleList 文章列表

### 继续更新中...