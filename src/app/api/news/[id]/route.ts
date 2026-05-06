import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const newsFilePath = path.join(process.cwd(), "src/data/news.json");

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const fileContents = fs.readFileSync(newsFilePath, "utf8");
    const news = JSON.parse(fileContents);
    const article = news.find((n: any) => n.id === id);

    if (!article) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read article" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updatedArticle = await request.json();
    const fileContents = fs.readFileSync(newsFilePath, "utf8");
    const news = JSON.parse(fileContents);

    const index = news.findIndex((n: any) => n.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
    }

    news[index] = { ...news[index], ...updatedArticle };

    fs.writeFileSync(newsFilePath, JSON.stringify(news, null, 2));

    return NextResponse.json(news[index]);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update article" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const fileContents = fs.readFileSync(newsFilePath, "utf8");
    const news = JSON.parse(fileContents);

    const filteredNews = news.filter((n: any) => n.id !== id);

    if (filteredNews.length === news.length) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
    }

    fs.writeFileSync(newsFilePath, JSON.stringify(filteredNews, null, 2));

    return NextResponse.json({ message: "Article deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete article" },
      { status: 500 }
    );
  }
}
