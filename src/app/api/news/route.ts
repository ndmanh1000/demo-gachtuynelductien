import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const newsFilePath = path.join(process.cwd(), "src/data/news.json");

export async function GET() {
  try {
    const fileContents = fs.readFileSync(newsFilePath, "utf8");
    const news = JSON.parse(fileContents);
    return NextResponse.json(news);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read news" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const newArticle = await request.json();
    const fileContents = fs.readFileSync(newsFilePath, "utf8");
    const news = JSON.parse(fileContents);

    news.push(newArticle);

    fs.writeFileSync(newsFilePath, JSON.stringify(news, null, 2));

    return NextResponse.json(newArticle, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 }
    );
  }
}
