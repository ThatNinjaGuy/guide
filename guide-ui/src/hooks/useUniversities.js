import { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../config/firebase";

export const useUniversities = () => {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const universitiesRef = ref(db, "universities");

    const unsubscribe = onValue(universitiesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const universitiesArray = Object.values(data);
        setUniversities(universitiesArray);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { universities, loading };
};
