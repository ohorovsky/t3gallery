"use client";
// Note: `useUploadThing` is IMPORTED FROM YOUR CODEBASE using the `generateReactHelpers` function
import { useRouter } from "next/navigation";
import { toast } from "sonner"
import { useUploadThing } from "~/utils/uploadthing";

function UploadSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
    </svg>
  );
}

export function SimpleUploadButton() {
  const router = useRouter();
  const { startUpload } = useUploadThing(
    "imageUploader",
    {
      onClientUploadComplete: () => {
        router.refresh();
        toast.dismiss("uploading");
        toast.success("Uploaded successfully!", { id: "upload-success", duration: 3000 });
        // alert("uploaded successfully!");
      },
      onUploadError: () => {
        // alert("error occurred while uploading");
      },
      onUploadBegin: () => {
        toast("Uploading...", { id: "uploading", duration: 3000 });
      },
    },
  );
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Do something with the file before uploading
    // const compressed = await compress(file);

    // Then start the upload of the compressed file
    await startUpload([file]);
  }

  return (
    <div>
      <label htmlFor="upload-button">
        <UploadSvg />
      </label>
      <input name="file" type="file" id="upload-button" className="sr-only cursor-pointer" onChange={handleUpload} />
    </div>
  );
}