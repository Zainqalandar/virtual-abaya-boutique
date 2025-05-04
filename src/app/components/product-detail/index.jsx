'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default function ProductDetail({ product }) {
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [selectedSize, setSelectedSize] = useState(product.size);

  const sizes = ['XS','S','M','L','XL'];
  const colors = [product.color];

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image */}
      <div>
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={600}
          height={600}
          className="rounded-lg object-cover w-full"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-2xl text-gray-800 font-semibold mb-4">Rs. {product.price}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className={i < Math.round(product.rating || 4) ? 'text-yellow-500' : 'text-gray-300'}
            />
          ))}
          <Link href="#reviews">
            <span className="ml-2 text-indigo-600 underline">See all {product.reviewsCount || 0} reviews</span>
          </Link>
        </div>

        {/* Color Options */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Color</h3>
          <div className="flex space-x-2">
            {colors.map((c) => (
              <button
                key={c}
                onClick={() => setSelectedColor(c)}
                className={`w-8 h-8 rounded-full border-2 ${selectedColor===c? 'border-indigo-600':'border-gray-300'}`}
                style={{ backgroundColor: c.toLowerCase() }}
              />
            ))}
          </div>
        </div>

        {/* Size Options */}
        <div className="mb-6">
          <h3 className="font-medium mb-2">Size</h3>
          <div className="grid grid-cols-5 gap-2">
            {sizes.map(sz => (
              <button
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`py-2 border rounded ${selectedSize===sz? 'bg-indigo-600 text-white':'text-gray-700'}`}
                disabled={!sz}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full py-3 bg-indigo-600 text-white font-medium rounded hover:bg-indigo-700 transition mb-6">
          Add to Cart
        </button>

        {/* Description */}
        <div>
          <h3 className="font-medium mb-2">Description</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>
      </div>
    </div>
  );
}