## /demo/test.json
#### 接口类型
	GET
#### 请求URL
	/demo/test.json
#### 返回接口
```js
{
 "word": "xxxxxxx", //随机字符
 "number": "0", //1-10 数字随机生成
 "array": [ //简单的数组
  "a",
  "b"
 ],
 "randomArray": "a", //a,b 随机获取
 "object": { //对象
  "email": "xxxxxxx@mock2easy.com"
 },
 "objectArray": [ //数组重复生成2遍
  {
   "id": 1 //id数据叠加
  }
 ]
}
```