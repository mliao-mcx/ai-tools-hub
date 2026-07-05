---
title: "DeepSeek V3"
slug: "deepseek-v3"
category: "大语言模型"
tags: ["Free", "Open Source", "API", "LLM"]
oneLineSummary: "国产开源大模型，性能媲美 GPT-4o，API 价格仅为其 1/10，开发者首选"
---

## 什么是 DeepSeek V3？

DeepSeek V3 是深度求索推出的开源大语言模型，采用 MoE（混合专家）架构，671B 参数激活 37B，在多项基准测试中与 GPT-4o 打平甚至超越。

## 核心亮点

- **开源可商用**: MIT 协议，可自由部署和商用
- **极致性价比**: API 输入 ¥1/百万 token，输出 ¥2/百万 token
- **128K 上下文**: 支持超长文本处理
- **多语言**: 中英文能力极强，代码能力优秀

## API 快速接入

```python
from openai import OpenAI

client = OpenAI(
    api_key="your-deepseek-key",
    base_url="https://api.deepseek.com"
)

response = client.chat.completions.create(
    model="deepseek-chat",
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.choices[0].message.content)
```

## 适用场景

- 代码生成与审查
- 中文内容创作
- RAG 知识库问答
- 自动化工作流 LLM 节点

## 避坑指南

- 高峰期 API 偶有延迟，建议加重试机制
- 不支持 Function Calling（V3.1 已支持）
- 图片理解需要用 DeepSeek-VL 系列
