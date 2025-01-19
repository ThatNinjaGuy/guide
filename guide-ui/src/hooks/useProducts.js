// File is not needed as of now as I don't want realtime sync for products.
// import { useState, useEffect } from "react";
// import { ref, onValue } from "firebase/database";
// import { db } from "../config/firebase";

// export const useProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const productsRef = ref(db, "products");

//     const unsubscribe = onValue(productsRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const productsArray = Object.values(data);
//         setProducts(productsArray);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   return { products, loading };
// };
