import { motion } from 'framer-motion';
import { type Product } from '@shared/schema';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Generate random gradient for product card background
  const gradients = [
    "from-red-500 to-red-700",
    "from-blue-500 to-blue-700",
    "from-purple-500 to-purple-700",
    "from-yellow-500 to-yellow-600",
    "from-green-500 to-green-700",
    "from-indigo-500 to-indigo-700",
  ];
  
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];

  return (
    <motion.div 
      className="product-card bg-[hsl(var(--nike-gray))] rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`relative h-80 overflow-hidden bg-gradient-to-br ${randomGradient}`}>
        <motion.img 
          src={product.imageUrl} 
          alt={product.name}
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-auto"
          whileHover={{ rotate: -10, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-xl">${product.price}</span>
          <motion.button 
            className="bg-black text-white py-2 px-6 rounded-full hover:bg-[hsl(var(--nike-red))] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
