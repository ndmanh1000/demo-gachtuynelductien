import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const productsFilePath = path.join(process.cwd(), "src/data/products.json");

export async function GET() {
  try {
    const fileContents = fs.readFileSync(productsFilePath, "utf8");
    const products = JSON.parse(fileContents);
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read products" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const newProduct = await request.json();
    const fileContents = fs.readFileSync(productsFilePath, "utf8");
    const products = JSON.parse(fileContents);

    products.push(newProduct);

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}
