import { Modal } from "./modal";
import FullImagePage from "~/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  return <Modal><FullImagePage id={photoId} /></Modal>;
}