import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for products
  app.get("/api/products", async (req, res) => {
    try {
      const products = await storage.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  app.get("/api/products/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const product = await storage.getProductById(id);
      
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      
      res.json(product);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  app.get("/api/products/featured", async (req, res) => {
    try {
      const featuredProducts = await storage.getFeaturedProducts();
      res.json(featuredProducts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured products" });
    }
  });

  app.get("/api/products/new-releases", async (req, res) => {
    try {
      const newReleases = await storage.getNewReleases();
      res.json(newReleases);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch new releases" });
    }
  });

  app.get("/api/products/collection/:collection", async (req, res) => {
    try {
      const collection = req.params.collection;
      const collectionProducts = await storage.getProductsByCollection(collection);
      res.json(collectionProducts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch collection products" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
