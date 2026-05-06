import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const productsFilePath = path.join(process.cwd(), "src/data/products.json");

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const fileContents = fs.readFileSync(productsFilePath, "utf8");
    const products = JSON.parse(fileContents);
    const product = products.find((p: any) => p.id === id);

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to read product" },
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
    const updatedProduct = await request.json();
    const fileContents = fs.readFileSync(productsFilePath, "utf8");
    const products = JSON.parse(fileContents);

    const index = products.findIndex((p: any) => p.id === id);

    if (index === -1) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    products[index] = { ...products[index], ...updatedProduct };

    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));

    return NextResponse.json(products[index]);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update product" },
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
    const fileContents = fs.readFileSync(productsFilePath, "utf8");
    const products = JSON.parse(fileContents);

    const filteredProducts = products.filter((p: any) => p.id !== id);

    if (filteredProducts.length === products.length) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    fs.writeFileSync(
      productsFilePath,
      JSON.stringify(filteredProducts, null, 2)
    );

    return NextResponse.json({ message: "Product deleted successfully" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
