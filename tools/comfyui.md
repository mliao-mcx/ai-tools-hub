---
title: "ComfyUI"
slug: "comfyui"
category: "AI 绘图"
tags: ["Open Source", "Free", "Stable Diffusion", "Image"]
oneLineSummary: "节点式 AI 绘图工作流引擎，比 WebUI 更灵活，支持 SD3/Flux/ControlNet 全家桶"
---

## 什么是 ComfyUI？

ComfyUI 是一个基于节点的 Stable Diffusion 工作流引擎，通过拖拽节点构建复杂的图像生成流程，比传统 WebUI 更灵活、更强大。

## 核心亮点

- **节点式工作流**: 可视化拖拽，所见即所得
- **模型全覆盖**: SD1.5/SDXL/SD3/Flux/DALL-E 等
- **ControlNet**: 深度图、姿势、线稿精确控制
- **批量生成**: 支持队列和批量处理
- **可复现**: 工作流可导出/导入，完美复现结果

## 快速部署

```bash
# 克隆项目
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI

# 安装依赖
pip install -r requirements.txt

# 启动
python main.py
# 访问 http://localhost:8188
```

## 适用场景

- AI 绘图创作
- 批量图片处理流水线
- ControlNet 精确控制生成
- 搭建图片生成 API 服务

## 避坑指南

- 学习曲线较陡，建议先看 B 站教程入门
- 显存要求：SDXL 最低 8GB，Flux 最低 12GB
- 自定义节点来源复杂，注意安全风险
