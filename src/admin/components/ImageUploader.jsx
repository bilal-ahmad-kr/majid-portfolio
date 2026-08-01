import { useState, useRef } from "react";
import { Upload, X, Loader2 } from "lucide-react";
import { mediaService } from "../../lib/cms";

/**
 * <ImageUploader value={form.image_url} onChange={(url) => setForm({...form, image_url: url})} />
 */
export function ImageUploader({ value, onChange, folder = "uploads", label = "Image" }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  async function handleFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    setError("");
    setUploading(true);
    try {
      const media = await mediaService.upload(file, folder);
      onChange(media.url);
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div>
      <span className="text-[12.5px] font-semibold text-[#334155]">{label}</span>

      {value ? (
        <div className="relative mt-1.5 h-40 w-full overflow-hidden rounded-lg border border-[#E2E8F0]">
          <img src={value} alt="" className="h-full w-full object-cover" />
          <button
            type="button"
            onClick={() => onChange("")}
            className="absolute right-2 top-2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <label className="mt-1.5 flex h-40 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-[#E2E8F0] text-[#94A3B8] hover:border-[#1E5BFF]/40 hover:text-[#1E5BFF]">
          {uploading ? (
            <Loader2 size={20} className="animate-spin" />
          ) : (
            <Upload size={20} />
          )}
          <span className="text-[12.5px] font-medium">
            {uploading ? "Uploading…" : "Click to upload"}
          </span>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
            className="hidden"
          />
        </label>
      )}

      {error && <p className="mt-1.5 text-[12px] font-medium text-[#D90429]">{error}</p>}

      {/* Fallback: paste a URL directly instead of uploading */}
      <input
        type="text"
        placeholder="...or paste an image URL"
        value={value ?? ""}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-[#E2E8F0] px-3.5 py-2 text-[12.5px] outline-none focus:border-[#1E5BFF]"
      />
    </div>
  );
}