"use client";

import React, { useEffect, useState } from "react";
import { createClient } from "@sanity/client";
import Image from "next/image";

const sanity = createClient({
  projectId: "3zxs8kt9",
  dataset: "production",
  apiVersion: "2021-08-31",
  useCdn: false,
});

interface Product {
  _id: string;
  name: string;
  pricePerDay?: string;
  originalPrice?: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
}

const ProductCards = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "car"] {
          _id,
          name,
          pricePerDay,
          originalPrice,
          description,
          "imageUrl": image.asset->url,
          tags
        }`;
        const data = await sanity.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-center text-gray-800 text-2xl font-bold mb-6">Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover rounded-md"
              />
            ) : (
              <div className="w-full h-48 bg-gray-300 flex items-center justify-center rounded-md">No Image</div>
            )}
            <h2 className="text-lg font-semibold text-gray-900 mt-4">{product.name}</h2>
            <p className="text-gray-700 mt-2 text-sm">{product.description || "No description available"}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-800 font-bold">${product.pricePerDay || "N/A"}</p>
              {product.originalPrice && (
                <p className="line-through text-red-500">${product.originalPrice}</p>
              )}
            </div>
            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold text-gray-900">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4 mt-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-md shadow-sm">
                <div>
                  <p className="font-medium text-gray-900">{item.name}</p>
                  <p className="text-sm text-blue-600">${item.pricePerDay || "N/A"}</p>
                </div>
                {item.imageUrl ? (
                  <Image src={item.imageUrl} alt={item.name} width={50} height={50} className="rounded-md" />
                ) : (
                  <div className="w-12 h-12 bg-gray-300 flex items-center justify-center text-gray-600 rounded-md">No Image</div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 text-center mt-4">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;


