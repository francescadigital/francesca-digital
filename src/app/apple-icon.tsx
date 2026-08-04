import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#09090b",
      }}
    >
      <div
        style={{
          width: 138,
          height: 138,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid rgba(79, 124, 255, 0.55)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,124,255,0.2) 0%, rgba(9,9,11,1) 70%)",
          boxShadow: "0 0 40px rgba(79,124,255,0.22)",
          color: "#fafafa",
          fontSize: 78,
          fontWeight: 600,
          letterSpacing: "-0.08em",
        }}
      >
        F
      </div>
    </div>,
    size,
  );
}
