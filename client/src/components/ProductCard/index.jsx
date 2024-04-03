
const ProductCard = ({ product }) => {
  return (
    <div className="flex border-2 rounded-md shadow-lg w-60 mx-10 justify-center">
      <img
        src={product.imageUrl} // Assuming you have an 'image' field in your product object
        alt={product.productName}
        className="object-cover w-full h-40 rounded-t-md"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
        <p className="text-sm text-gray-600 mb-2">By {product.artistName}</p>
        <p className="text-lg font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;