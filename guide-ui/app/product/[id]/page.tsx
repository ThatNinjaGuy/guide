import { Suspense } from "react";
import ProductDetails from "@/components/ProductDetails";
import Loading from "@/components/Loading";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  return (
    <Suspense fallback={<Loading />}>
      <ProductDetails id={id} />
    </Suspense>
  );
}
