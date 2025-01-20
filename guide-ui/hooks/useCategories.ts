"use client";

import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/lib/config/firebase";
import { Category } from "@/types";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoriesRef = ref(db, "categories");

    const unsubscribe = onValue(categoriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const categoriesArray = Object.values(data) as Category[];
        setCategories(categoriesArray);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { categories, loading };
}
