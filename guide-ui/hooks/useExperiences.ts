"use client";

import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "@/lib/config/firebase";
import { Experience } from "@/types";

export function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const experiencesRef = ref(db, "experiences");

    const unsubscribe = onValue(experiencesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const experiencesArray = Object.values(data) as Experience[];
        setExperiences(experiencesArray);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { experiences, loading };
}
