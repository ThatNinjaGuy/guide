import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebase";

export const useExperiences = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const experiencesRef = ref(db, "experiences");

    const unsubscribe = onValue(experiencesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const experiencesArray = Object.values(data);
        setExperiences(experiencesArray);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { experiences, loading };
};
