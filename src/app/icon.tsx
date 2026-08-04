import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          width: 50,
          height: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(79, 124, 255, 0.55)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,124,255,0.18) 0%, rgba(9,9,11,1) 70%)",
          color: "#fafafa",
          fontSize: 28,
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
