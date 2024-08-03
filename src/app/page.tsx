// import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/6b21814d-500c-4c77-ab6d-86f51ad1d587-ckei01.jpg",
  "https://utfs.io/f/017e3eeb-9851-4123-ba86-37acc9917e25-xu7fen.jpg",
  "https://utfs.io/f/1630fbf5-2213-4f35-ba4b-477c5fc3f141-glkvc2.jpg",
  "https://utfs.io/f/a37de14f-575b-424b-919f-70a647bcbc2a-s3a5qt.jpg",
]
const mockImgages = mockUrls.map((url, index) => ({
  id: index + 1,
  url
}
))
export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImgages, ...mockImgages, ...mockImgages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
