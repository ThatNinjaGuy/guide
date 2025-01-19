"use client";

import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/lib/config/firebase";
import { University } from "@/types";

export function useUniversities() {
  const [universities, setUniversities] = useState<University[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const universitiesRef = ref(db, "universities");

    const unsubscribe = onValue(universitiesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const universitiesArray = Object.values(data) as University[];
        setUniversities(universitiesArray);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { universities, loading };
}
