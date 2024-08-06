import FullImagePage from "~/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <div className="h-full">
    <FullImagePage id={photoId} />
  </div>
}