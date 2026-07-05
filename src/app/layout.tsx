import type { Metadata } from "next";
import AIChat from "@/components/AIChat";
import "./globals.css";

export const metadata: Metadata = {
  title: "mliaomcx AI工具导航站 - 精选免费开源 AI 工具",
  description:
    "发现最好用的免费 AI 工具。覆盖大语言模型、AI 编程、AI 绘图、本地部署等领域。AI 驱动的智能推荐，帮你找到最合适的工具。",
  keywords: "AI工具,免费AI,开源AI,大模型,LLM,AI编程,AI绘图,本地部署",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="bg-gray-950 text-gray-100 antialiased">
        {children}
        <AIChat />
      </body>
    </html>
  );
}
