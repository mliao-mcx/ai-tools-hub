import Link from "next/link";
import { getAllTools, getCategories } from "@/lib/tools";

export default function Home() {
  const tools = getAllTools();
  const categories = getCategories();

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-blue-600/5 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-sm font-medium text-violet-400 mb-4">
            mliaomcx · AI 工具导航
          </p>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            发现最好的
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              免费 AI 工具
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            自动收录 GitHub Trending、Product Hunt、HuggingFace 热门 AI 项目。
            专为开发者和创作者筛选，只留免费硬核的。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/tools"
              className="rounded-lg bg-violet-600 px-8 py-3 text-sm font-medium text-white hover:bg-violet-500 transition"
            >
              浏览全部 AI 工具 →
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="问我：有什么免费的 AI 编程助手？"
                className="w-full sm:w-80 rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-sm text-gray-300 placeholder:text-gray-600 focus:border-violet-500 focus:outline-none"
                readOnly
              />
              <span className="absolute right-3 top-3 text-xs text-gray-600">
                AI 问答 ↓
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-800 bg-gray-900/30">
        <div className="mx-auto max-w-5xl px-6 py-8 flex justify-center gap-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-violet-400">{tools.length}</div>
            <div className="text-sm text-gray-500">AI 工具</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{categories.length}</div>
            <div className="text-sm text-gray-500">分类</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-emerald-400">100%</div>
            <div className="text-sm text-gray-500">免费可用</div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">按分类浏览</h2>
        <p className="text-gray-500 mb-8">每个工具都经过实测验证</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const count = tools.filter((t) => t.category === cat).length;
            const icons: Record<string, string> = {
              "大语言模型": "🧠",
              "本地部署": "🖥️",
              "AI 绘图": "🎨",
              "AI 编程": "💻",
              "AI 开发框架": "⚙️",
            };
            return (
              <Link
                key={cat}
                href={`/tools?category=${encodeURIComponent(cat)}`}
                className="group rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-violet-500/50 hover:bg-gray-900 transition"
              >
                <div className="text-2xl mb-3">{icons[cat] || "🔧"}</div>
                <h3 className="font-semibold text-lg group-hover:text-violet-400 transition">
                  {cat}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{count} 个工具</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Latest tools */}
      <section className="mx-auto max-w-5xl px-6 py-16 border-t border-gray-800">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold">最新收录</h2>
            <p className="text-gray-500 mt-1">每日自动更新</p>
          </div>
          <Link
            href="/tools"
            className="text-sm text-violet-400 hover:underline"
          >
            查看全部 →
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.slice(0, 6).map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-violet-500/50 hover:bg-gray-900 transition"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {tool.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs text-violet-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-semibold group-hover:text-violet-400 transition">
                {tool.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                {tool.oneLineSummary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* AI Chat CTA */}
      <section className="border-t border-gray-800 bg-gradient-to-b from-violet-600/5 to-transparent">
        <div className="mx-auto max-w-5xl px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">找不到想要的 AI 工具？</h2>
          <p className="mt-3 text-gray-400">
            试试右下角的 AI 问答，用自然语言描述你的需求
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-600">
        <p>mliaomcx AI工具导航站 · 免费开源 AI 工具收录与推荐</p>
        <p className="mt-1">每日自动更新 · AI 驱动 · 数据来源: GitHub / Product Hunt / HuggingFace</p>
      </footer>
    </main>
  );
}
