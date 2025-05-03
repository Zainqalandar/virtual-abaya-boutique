'use client'
import React from 'react'
import { useState } from 'react';

const ProductList = () => {
    const products = [
        {
          productId: '9ceafb74-c0d0-43b6-97fb-87e6b64de2b1',
          name: 'Test Abaya',
          description: 'Demo abaya',
          price: 2000.0,
          stockQuantity: 5,
          size: 'M',
          color: 'Blue',
          style: 'Modern',
          createdAt: '2025-05-03T06:22:00.3831166',
        },
        {
          productId: '27ee13e5-30c8-4ef0-8f92-b7a63f5cf217',
          name: 'Black Abaya',
          description: 'Elegant black abaya',
          price: 3000.0,
          stockQuantity: 15,
          size: 'M',
          color: 'Black',
          style: 'Classic',
          createdAt: '2025-05-03T06:48:17.3623842',
        },
        {
          productId: '5a1c746e-4233-490e-98a4-7c06a9909dc1',
          name: 'red Abaya',
          description: 'Elegant red abaya',
          price: 4000.0,
          stockQuantity: 20,
          size: 'M',
          color: 'red',
          style: 'Classic',
          createdAt: '2025-05-03T10:49:55.2953979',
        },
      ];

      const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const filteredProducts = products.filter(
    (p) =>
      (!selectedColor || p.color.toLowerCase() === selectedColor.toLowerCase()) &&
      (!selectedSize || p.size.toLowerCase() === selectedSize.toLowerCase())
  );
  return (
    <>
    <div className="px-4 py-8 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">Abaya Collection</h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <select
          value={selectedColor}
          onChange={(e) => setSelectedColor(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm"
        >
          <option value="">All Colors</option>
          {[...new Set(products.map(p => p.color))].map((color) => (
            <option key={color} value={color}>{color}</option>
          ))}
        </select>

        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="px-4 py-2 border rounded-md shadow-sm"
        >
          <option value="">All Sizes</option>
          {[...new Set(products.map(p => p.size))].map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.productId}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
          >
            <div className="mb-4 h-40 bg-gray-200 rounded"></div>
            <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
            <p className="text-sm text-gray-600 mb-1">{product.description}</p>
            <p className="text-sm">Color: <span className="font-medium">{product.color}</span></p>
            <p className="text-sm">Size: <span className="font-medium">{product.size}</span></p>
            <p className="text-lg font-bold mt-2">Rs. {product.price}</p>
            <button className="mt-4 w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  )
}

export default ProductList