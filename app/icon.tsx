import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #7c2942, #b3435c 55%, #c9a15a)",
          borderRadius: 8,
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff8f6">
          <path d="M12 21s-6.7-4.35-9.3-8.1C.9 10.06 1.4 6.4 4.6 4.9c2.1-1 4.4-.25 5.9 1.55.4.48.8.98 1.5 1.9.7-.92 1.1-1.42 1.5-1.9C15 4.65 17.3 3.9 19.4 4.9c3.2 1.5 3.7 5.16 1.9 8-2.6 3.75-9.3 8.1-9.3 8.1z" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
