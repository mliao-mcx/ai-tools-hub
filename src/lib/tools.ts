import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const toolsDirectory = path.join(process.cwd(), "tools");

export interface ToolMeta {
  title: string;
  slug: string;
  category: string;
  tags: string[];
  oneLineSummary: string;
}

export interface Tool extends ToolMeta {
  contentHtml: string;
  rawContent: string;
}

export function getAllToolSlugs(): string[] {
  if (!fs.existsSync(toolsDirectory)) return [];
  const fileNames = fs.readdirSync(toolsDirectory);
  return fileNames
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getAllTools(): ToolMeta[] {
  const slugs = getAllToolSlugs();
  const tools = slugs.map((slug) => {
    const fullPath = path.join(toolsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      title: data.title || slug,
      slug: data.slug || slug,
      category: data.category || "未分类",
      tags: data.tags || [],
      oneLineSummary: data.oneLineSummary || "",
    };
  });
  return tools;
}

export async function getToolBySlug(slug: string): Promise<Tool | null> {
  const fullPath = path.join(toolsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    title: data.title || slug,
    slug: data.slug || slug,
    category: data.category || "未分类",
    tags: data.tags || [],
    oneLineSummary: data.oneLineSummary || "",
    contentHtml,
    rawContent: content,
  };
}

export function getCategories(): string[] {
  const tools = getAllTools();
  const categories = [...new Set(tools.map((t) => t.category))];
  return categories.sort();
}
