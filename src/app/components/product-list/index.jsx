'use client';
import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter

const ProductList = () => {
    const router = useRouter(); // Initialize useRouter

    const products = [
      {
        productId: '9ceafb74-c0d0-43b6-97fb-87e6b64de2b1',
        imageUrl: '/gallery/1.jpeg',
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
        imageUrl: '/gallery/2.jpeg',
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
        imageUrl: '/gallery/3.jpeg',
        name: 'Red Abaya',
        description: 'Elegant red abaya',
        price: 4000.0,
        stockQuantity: 20,
        size: 'M',
        color: 'Red',
        style: 'Classic',
        createdAt: '2025-05-03T10:49:55.2953979',
      },
      {
        productId: '6b2d8f74-1234-4abc-9def-123456789abc',
        imageUrl: '/gallery/4.jpeg',
        name: 'Green Abaya',
        description: 'Stylish green abaya',
        price: 2500.0,
        stockQuantity: 10,
        size: 'L',
        color: 'Green',
        style: 'Modern',
        createdAt: '2025-05-03T12:00:00.0000000',
      },
      {
        productId: '7c3e9f85-5678-4def-9abc-234567890bcd',
        imageUrl: '/gallery/5.jpeg',
        name: 'White Abaya',
        description: 'Elegant white abaya',
        price: 3500.0,
        stockQuantity: 8,
        size: 'S',
        color: 'White',
        style: 'Classic',
        createdAt: '2025-05-03T13:00:00.0000000',
      },
      {
        productId: '8d4f0a96-6789-4fgh-9bcd-345678901cde',
        imageUrl: '/gallery/6.jpeg',
        name: 'Pink Abaya',
        description: 'Chic pink abaya',
        price: 2800.0,
        stockQuantity: 12,
        size: 'M',
        color: 'Pink',
        style: 'Modern',
        createdAt: '2025-05-03T14:00:00.0000000',
      },
      {
        productId: '9e5g1b07-7890-5ghi-9cde-456789012def',
        imageUrl: '/gallery/5.jpeg',
        name: 'Yellow Abaya',
        description: 'Bright yellow abaya',
        price: 3000.0,
        stockQuantity: 6,
        size: 'L',
        color: 'Yellow',
        style: 'Modern',
        createdAt: '2025-05-03T15:00:00.0000000',
      },
      {
        productId: 'af6h2c18-8901-6hij-9def-567890123efg',
        imageUrl: '/gallery/4.jpeg',
        name: 'Purple Abaya',
        description: 'Royal purple abaya',
        price: 3200.0,
        stockQuantity: 9,
        size: 'S',
        color: 'Purple',
        style: 'Classic',
        createdAt: '2025-05-03T16:00:00.0000000',
      },
      {
        productId: 'bf7i3d29-9012-7ijk-9efg-678901234fgh',
        imageUrl: '/gallery/2.jpeg',
        name: 'Orange Abaya',
        description: 'Vibrant orange abaya',
        price: 2700.0,
        stockQuantity: 7,
        size: 'M',
        color: 'Orange',
        style: 'Modern',
        createdAt: '2025-05-03T17:00:00.0000000',
      },
    ];

    const [selectedColor, setSelectedColor] = useState('');
    const [selectedSize, setSelectedSize] = useState('');

    const filteredProducts = products.filter(
        (p) =>
            (!selectedColor ||
                p.color.toLowerCase() === selectedColor.toLowerCase()) &&
            (!selectedSize ||
                p.size.toLowerCase() === selectedSize.toLowerCase())
    );

    return (
        <>
            <div className="px-4 py-8 bg-gray-50 min-h-screen">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Abaya Collection
                </h2>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    <select
                        value={selectedColor}
                        onChange={(e) => setSelectedColor(e.target.value)}
                        className="px-4 py-2 border rounded-md shadow-sm"
                    >
                        <option value="">All Colors</option>
                        {[...new Set(products.map((p) => p.color))].map(
                            (color) => (
                                <option key={color} value={color}>
                                    {color}
                                </option>
                            )
                        )}
                    </select>

                    <select
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="px-4 py-2 border rounded-md shadow-sm"
                    >
                        <option value="">All Sizes</option>
                        {[...new Set(products.map((p) => p.size))].map(
                            (size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            )
                        )}
                    </select>
                </div>

                {/* Product Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.productId}
                            className="group relative cursor-pointer"
                            onClick={() => router.push(`/shop/${product.productId}`)} // Navigate to product route
                        >
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
                            />
                            <div className="mt-4 flex justify-between">
                                <h3 className="text-sm text-gray-700 font-semibold">
                                    {product.name}
                                </h3>
                                <p className="text-sm font-medium text-gray-900">
                                    Rs. {product.price}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductList;