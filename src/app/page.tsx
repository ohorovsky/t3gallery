// import Link from "next/link";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();
  return <div className="flex flex-wrap gap-4 justify-center">
    {images.map((image) => (
      <div key={image.id} className="w-48 h-48 flex flex-col">
        <Image src={image.url} alt={image.name} width={300} height={300} />
        <div>{image.name}</div>
      </div>
    ))}
  </div>
}
export default async function HomePage() {

  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main >
  );
}
