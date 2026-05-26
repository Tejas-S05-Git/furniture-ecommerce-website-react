import React from 'react'

const ProductCard = ({ product }) => {
  return (
    <div className="group h-full flex flex-col">
      {/* TOP CARD */}

      <div className="bg-gradient-to-br from-[#ECECEC] to-[#DDDDDD] rounded-[30px] p-4 md:p-5 relative overflow-hidden h-[420px] flex flex-col justify-center">
        {/* DISCOUNT */}

        <div className="absolute top-5 left-5 bg-primary text-white px-4 py-2 rounded-full text-sm z-10">
          {product.discount}% OFF
        </div>

        {/* ICONS */}

        <div className="absolute top-5 right-5 flex flex-col gap-3 z-10 opacity-0 translate-x-8 group-hover:opacity-100 group-hover:translate-x-0 duration-500">
          <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-xl">
            <i className="ri-heart-line"></i>
          </button>

          <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-xl">
            <i className="ri-eye-line"></i>
          </button>

          <button className="w-11 h-11 rounded-full bg-white flex items-center justify-center text-xl">
            <i className="ri-shopping-bag-line"></i>
          </button>
        </div>

        {/* IMAGE */}

        <img
          src={product.images?.[0]}
          alt={product.title}
          loading="lazy"
          className="w-full h-[230px] md:h-[260px] object-contain group-hover:scale-110 duration-500"
        />
      </div>

      {/* BOTTOM */}

      <div className="mt-5">
        <div className="flex items-center justify-between">
          <p className="text-zinc-500">{product.category}</p>

          <div className="flex items-center gap-2">
            <i className="ri-star-fill text-accent"></i>
            <span className="font-semibold">{product.rating}</span>
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold mt-3 min-h-[60px]">
          {product.title}
        </h3>

        <div className="flex items-center gap-3 mt-2">
          <h4 className="text-2xl font-bold">${product.price}</h4>

          <span className="text-zinc-400 line-through">
            ${product.oldPrice}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProductCard