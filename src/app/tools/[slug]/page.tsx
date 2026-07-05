import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllToolSlugs, getToolBySlug } from "@/lib/tools";

export function generateStaticParams() {
  const slugs = getAllToolSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);
  if (!tool) return { title: "工具未找到" };
  return {
    title: `${tool.title} - mliaomcx AI工具导航站`,
    description: tool.oneLineSummary,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = await getToolBySlug(slug);

  if (!tool) notFound();

  return (
    <main className="min-h-screen">
      {/* Breadcrumb */}
      <div className="border-b border-gray-800 bg-gray-900/30">
        <div className="mx-auto max-w-3xl px-6 py-4">
          <nav className="flex gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-300 transition">
              首页
            </Link>
            <span>/</span>
            <Link href="/tools" className="hover:text-gray-300 transition">
              AI 工具
            </Link>
            <span>/</span>
            <span className="text-gray-300">{tool.title}</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <article className="mx-auto max-w-3xl px-6 py-12">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tool.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-400"
            >
              {tag}
            </span>
          ))}
          <span className="rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-400">
            {tool.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold">{tool.title}</h1>
        <p className="mt-3 text-lg text-gray-400">{tool.oneLineSummary}</p>

        {/* Markdown content */}
        <div
          className="prose prose-invert prose-violet mt-10 max-w-none
            prose-headings:border-b prose-headings:border-gray-800 prose-headings:pb-2
            prose-a:text-violet-400 prose-a:no-underline hover:prose-a:underline
            prose-code:bg-gray-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-800
            prose-blockquote:border-violet-500/30 prose-blockquote:text-gray-400"
          dangerouslySetInnerHTML={{ __html: tool.contentHtml }}
        />

        {/* Back */}
        <div className="mt-16 border-t border-gray-800 pt-8">
          <Link
            href="/tools"
            className="text-violet-400 hover:underline text-sm"
          >
            ← 返回 AI 工具列表
          </Link>
        </div>
      </article>
    </main>
  );
}
