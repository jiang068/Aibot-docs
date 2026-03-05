# 快速更新Q&A❓

这个文件用来记录一些常见的新手问题。

## 完整安装教程

[Aibot简易配置教程](https://www.bilibili.com/video/BV1zsQ5YCEE6)

## Api相关问题

- 为什么显示:"缺失必要的API KEY" ❓

<img src="/images/API_KEY.png" width=650>

>你需要在 [Silicon Flow Api](https://cloud.siliconflow.cn/account/ak) 网站上注册一个账号，然后点击这个链接打开API KEY获取页面。
>
>点击 "新建API密钥" 按钮新建一个给Aibot使用的API KEY。不要忘了点击复制。
>
>之后打开Aibot在你电脑上的文件根目录，使用记事本或者其他文本编辑器打开 `.env.prod` 这个文件。把你刚才复制的API KEY填入到 `SILICONFLOW_KEY=` 这个等号的右边。
>
>在默认情况下，Aibot使用的默认Api都是硅基流动的。

---

- 我想使用硅基流动之外的Api网站，我应该怎么做 ❓

>你需要使用记事本或者其他文本编辑器打开config目录下的 `bot_config.toml` 
>
>然后修改其中的 `provider = ` 字段。同时不要忘记模仿 `.env.prod` 文件的写法添加 Api Key 和 Base URL。
>
>举个例子，如果你写了 `provider = "ABC"`，那你需要相应的在 `.env.prod` 文件里添加形如 `ABC_BASE_URL = https://api.abc.com/v1` 和 `ABC_KEY = sk-1145141919810` 的字段。
>
>**如果你对AI模型没有较深的了解，修改识图模型和嵌入模型的provider字段可能会产生bug，因为你从网站调用了一个并不存在的模型**
>
>这个时候，你需要把字段的值改回 `provider = "SILICONFLOW"` 以此解决此问题。

## 本地数据与清理

数据以本地文件方式存储在仓库的 `data/` 目录下：

- 表情与图片：`data/emoji`、`data/image`（直接删除目录下文件以清空）
- 数据库文件（如存在）：`data/aibot.db`（可使用 sqlite 工具查看或清理）

示例：在 Windows 上删除所有表情文件（PowerShell）：

```powershell
Remove-Item -Recurse -Force .\data\emoji\*
```

在 Linux/macOS 上删除表情文件：

```bash
rm -rf data/emoji/*
rm -rf data/image/*
```

如果你需要对本地数据库文件做更复杂的操作，建议使用 sqlite 浏览器或 `sqlite3` 命令行工具来打开并编辑 `data/aibot.db`。