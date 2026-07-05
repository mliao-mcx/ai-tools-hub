import Link from "next/link";
import { getAllTools, getCategories } from "@/lib/tools";

export const metadata = {
  title: "全部 AI 工具 - mliaomcx AI工具导航站",
  description: "浏览所有精选免费开源 AI 工具，覆盖大模型、AI编程、AI绘图等领域",
};

export default function ToolsPage() {
  const tools = getAllTools();
  const categories = getCategories();

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="border-b border-gray-800 bg-gray-900/30">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <nav className="flex gap-2 text-sm text-gray-500 mb-4">
            <Link href="/" className="hover:text-gray-300 transition">
              首页
            </Link>
            <span>/</span>
            <span className="text-gray-300">全部 AI 工具</span>
          </nav>
          <h1 className="text-3xl font-bold">全部 AI 工具</h1>
          <p className="mt-2 text-gray-400">
            共 {tools.length} 个精选工具，覆盖 {categories.length} 个分类
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-8">
        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <span className="rounded-full bg-violet-600 px-4 py-1.5 text-sm text-white">
            全部
          </span>
          {categories.map((cat) => (
            <span
              key={cat}
              className="rounded-full border border-gray-700 px-4 py-1.5 text-sm text-gray-400 hover:border-violet-500 hover:text-violet-400 cursor-pointer transition"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Tools grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group rounded-xl border border-gray-800 bg-gray-900/50 p-6 hover:border-violet-500/50 hover:bg-gray-900 transition"
            >
              <div className="flex flex-wrap gap-2 mb-3">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-violet-500/10 px-2.5 py-0.5 text-xs text-violet-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="font-semibold text-lg group-hover:text-violet-400 transition">
                {tool.title}
              </h2>
              <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                {tool.oneLineSummary}
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs text-gray-600">{tool.category}</span>
                <span className="text-xs text-violet-400 opacity-0 group-hover:opacity-100 transition">
                  查看详情 →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
