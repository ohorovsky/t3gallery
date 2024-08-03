// import { Modal } from './modal';

import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idasNumber = Number(photoId);
  const image = await getImage(idasNumber);
  return <div><img src={image.url} alt={image.name} width={300} height={300} /> </div>;
}