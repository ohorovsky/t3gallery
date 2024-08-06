"use client";
// Note: `useUploadThing` is IMPORTED FROM YOUR CODEBASE using the `generateReactHelpers` function
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner"
import { useUploadThing } from "~/utils/uploadthing";

function UploadSvg() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
    </svg>
  );
}

function UploadSpinner() {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" className="spinner_aj0A" /></svg>
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
        toast(<div className="flex gap-2 items-center text-white text-lg"><UploadSpinner /> Uploading</div>, { id: "uploading", duration: 3000 })
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