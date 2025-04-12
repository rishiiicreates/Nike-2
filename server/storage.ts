import { users, type User, type InsertUser, products, type Product, type InsertProduct } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getAllProducts(): Promise<Product[]>;
  getProductById(id: number): Promise<Product | undefined>;
  getFeaturedProducts(): Promise<Product[]>;
  getNewReleases(): Promise<Product[]>;
  getProductsByCollection(collection: string): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private products: Map<number, Product>;
  private userIdCounter: number;
  private productIdCounter: number;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.userIdCounter = 1;
    this.productIdCounter = 1;
    
    // Initialize with some Nike products
    this.initializeProducts();
  }

  private initializeProducts() {
    const sampleProducts: InsertProduct[] = [
      {
        name: "AIR FORCE 1",
        description: "The iconic silhouette that changed sneaker culture forever.",
        price: "110",
        imageUrl: "/air-force-1-sneakers-skate-shoe-nike-nike-927c59bd1411b7be2dafb3b0054db4ab.png",
        category: "Shoes",
        collection: "Icons",
        featured: true,
        newRelease: false
      },
      {
        name: "AIR ZOOM STRUCTURE",
        description: "Responsive cushioning for your everyday runs.",
        price: "120",
        imageUrl: "/sneakers-skate-shoe-nike-one-nike-shoe-9110c7d3e23d590d1e880f9be7818222.png",
        category: "Shoes",
        collection: "Running",
        featured: true,
        newRelease: false
      },
      {
        name: "AIR JORDAN 1",
        description: "The legendary model that started the Jordan legacy.",
        price: "170",
        imageUrl: "/sneakers-air-jordan-shoe-nike-air-max-nike-c6118e5a842f1e367d3959c987b287f0.png",
        category: "Shoes",
        collection: "Jordan",
        featured: true,
        newRelease: false
      },
      {
        name: "STRUCTURE 24",
        description: "Dynamic support for every mile",
        price: "140",
        imageUrl: "/sneakers-basketball-shoe-sportswear-nike-shoe-47670876703a8054a8621064d4daab9b.png",
        category: "Shoes",
        collection: "Running",
        featured: false,
        newRelease: true
      },
      {
        name: "AIR MAX 2023",
        description: "Revolutionary cushioning redefined",
        price: "180",
        imageUrl: "/nike-free-nike-air-max-sneakers-shoe-red-shoes-78c3ee1eb5170ce50ef0c55755e33899.png",
        category: "Shoes",
        collection: "Air Max",
        featured: false,
        newRelease: true
      },
      {
        name: "ZOOM FLY 5",
        description: "Racing-inspired speed for everyday runs",
        price: "160",
        imageUrl: "/shoe-nike-free-air-force-nike-shoes-transparent-png-08cc5dbb2bb1011e595dc3e2917cca38.png",
        category: "Shoes",
        collection: "Running",
        featured: false,
        newRelease: true
      },
      {
        name: "AIR JORDAN RETRO",
        description: "First released in 1982, a basketball icon turned street style staple.",
        price: "200",
        imageUrl: "/nike-free-shoe-air-jordan-sneakers-running-shoes-8bb8c41d77347c2b5f28012d38c6c566.png",
        category: "Shoes",
        collection: "Jordan",
        featured: false,
        newRelease: false
      },
      {
        name: "AIR PEGASUS",
        description: "A running classic that has evolved through generations of runners.",
        price: "130",
        imageUrl: "/pngwing.com 2.png",
        category: "Shoes",
        collection: "Running",
        featured: false,
        newRelease: false
      }
    ];

    sampleProducts.forEach(product => {
      this.createProduct(product);
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductById(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.featured
    );
  }

  async getNewReleases(): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.newRelease
    );
  }

  async getProductsByCollection(collection: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.collection === collection
    );
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.productIdCounter++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }
}

export const storage = new MemStorage();
