import { Suspense } from "react";
import ProductDetails from "@/components/ProductDetails";
import Loading from "@/components/Loading";

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<Loading />}>
      <ProductDetails id={params.id} />
    </Suspense>
  );
}
