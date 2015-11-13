## /demo/tmsdemo.json
#### 接口类型
	GET
#### 接口请求地址
	/demo/tmsdemo.json
#### 返回接口
```js
{
 "config": { //命中配置
  "toptip": true, //topbar官网推荐位
  "banner": { //首页广告第二帧配置
   "floatContent": "xxxx.jpg", //banner浮动层
   "link": "xxx.html", //banner链接
   "ga": "首页B.banner.上海点", //ga打点
   "target": true, //是否外链打开
   "backgroundImg": "xxx.jpg", //banner背景图
   "backgroundColor": "#fff" //banner背景色
  },
  "detail": { //BI命中配置
   "rds+oss": { //命中名称
    "kind": "0", //命中的模版类型
    "title": "存储产品推荐/存储使用场景", //标题
    "info": "<a href='#'>快速部署业务环境，轻松管理云服务器</a>", //内容
    "0_icon": "icon-ecs", //模版0－产品图标
    "0_icon_text": "ECS", //模版0－产品英文简称
    "0_item": [ //模版0－3个产品推荐方案
     {
      "title": "入门$68/月", //标题
      "content": "CPU:1核", //内容，填写富文本
      "button": { //订购按钮内容
       "text": " 立即购买", //按钮文案
       "link": "xxx.html", //按钮链接
       "ga": "首页B.banner.上海点", //按钮埋点
       "target": "true" //是否外链打开
      }
     }
    ],
    "1_icon": "icon-ecs", //模版1-产品图标
    "1_icon_text": "ECS", //模版1-产品英文简称
    "1_item": [ //模版1-产品3各方面推荐
     {
      "title": "入门$68/月", //标题
      "content": "CPU:1核" //内容
     }
    ],
    "1_button": { //模版1-购买按钮
     "text": " 立即购买", //按钮文案
     "link": "xxx.html", //按钮链接
     "ga": "首页B.banner.上海点", //按钮埋点
     "target": "true" //是否外链打开
    }
   }
  }
 }
}
```