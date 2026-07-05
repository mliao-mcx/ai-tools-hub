---
title: "Ollama"
slug: "ollama"
category: "本地部署"
tags: ["Open Source", "Free", "Local", "LLM"]
oneLineSummary: "一行命令本地跑大模型，支持 Llama3/Qwen2/DeepSeek，无需 GPU 也能玩"
---

## 什么是 Ollama？

Ollama 让你在本地电脑上一键运行大语言模型，支持 macOS/Linux/Windows，无需配置 CUDA、Python 环境，开箱即用。

## 核心亮点

- **一键安装**: 下载即用，无需技术背景
- **模型丰富**: Llama3、Qwen2、DeepSeek、Phi-3、Gemma2 等 100+ 模型
- **API 兼容**: 提供 OpenAI 兼容 API，可直接替换
- **轻量运行**: 7B 模型 8GB 内存即可跑

## 快速开始

```bash
# 安装 (macOS/Linux)
curl -fsSL https://ollama.com/install.sh | sh

# 运行模型
ollama run llama3.1:8b
ollama run qwen2.5:7b
ollama run deepseek-coder-v2:16b

# API 调用
curl http://localhost:11434/api/chat -d '{
  "model": "llama3.1:8b",
  "messages": [{"role": "user", "content": "Hello!"}]
}'
```

## 适用场景

- 本地开发测试 LLM 应用
- 隐私敏感场景（数据不出本机）
- 离线 AI 助手
- 配合 Open WebUI 搭建私有 ChatGPT

## 避坑指南

- 无 GPU 时只能跑 7B 以下模型，速度较慢
- 模型首次下载较大（4-8GB），注意磁盘空间
- Windows 版本偶有兼容性问题，建议 WSL2
