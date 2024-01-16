# Exercise 2

## 環境

### Node 版本

使用 Node 16.20.2 以上 的版本

再用 Node 16.20.2 以上 去裝 pnpm

```bash
$ npm install -g pnpm
```

---

## 執行

script 命令

### 安裝

```bash
$ pnpm install
```

### Heroku domain name

https://exercise-2-d0ba6fc6cd4a.herokuapp.com/

### POST 參數範例

```
POST https://exercise-2-d0ba6fc6cd4a.herokuapp.com/emails
with JSON body:
{
  to: "myemail@example.com",
  subject: "hi",
  body: "Hello World!"
}
```
