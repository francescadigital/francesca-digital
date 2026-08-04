import { ImageResponse } from "next/og";

export const alt = "Francesca Digital — Strategy, design and engineering";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        background: "#09090b",
        color: "#fafafa",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -120,
          width: 620,
          height: 620,
          display: "flex",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,124,255,0.2) 0%, rgba(79,124,255,0.04) 45%, transparent 72%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 32,
          display: "flex",
          border: "1px solid #27272a",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 32,
          bottom: 32,
          left: "64%",
          width: 1,
          display: "flex",
          background: "#27272a",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          right: 32,
          left: "64%",
          height: 1,
          display: "flex",
          background: "#27272a",
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 92,
          right: 112,
          width: 320,
          height: 320,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid rgba(79,124,255,0.4)",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            width: 208,
            height: 208,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid #27272a",
            transform: "rotate(45deg)",
          }}
        >
          <div
            style={{
              width: 112,
              height: 112,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(79,124,255,0.55)",
              borderRadius: "50%",
              background: "#09090b",
              boxShadow: "0 0 48px rgba(79,124,255,0.24)",
              transform: "rotate(-45deg)",
              fontSize: 58,
              fontWeight: 600,
              letterSpacing: "-0.08em",
            }}
          >
            F
          </div>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          width: "64%",
          padding: "82px 76px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "#4f7cff",
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
          }}
        >
          <span
            style={{
              width: 36,
              height: 1,
              display: "flex",
              background: "#4f7cff",
            }}
          />
          Independent digital studio
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 76,
              lineHeight: 0.96,
              fontWeight: 600,
              letterSpacing: "-0.055em",
            }}
          >
            Digital products
          </div>

          <div
            style={{
              marginTop: 8,
              display: "flex",
              fontSize: 76,
              lineHeight: 0.96,
              fontWeight: 600,
              letterSpacing: "-0.055em",
              color: "#a1a1aa",
            }}
          >
            built with intent.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            color: "#a1a1aa",
            fontSize: 18,
          }}
        >
          <span>Strategy</span>
          <span style={{ color: "#4f7cff" }}>·</span>
          <span>Design</span>
          <span style={{ color: "#4f7cff" }}>·</span>
          <span>Engineering</span>
        </div>
      </div>
    </div>,
    size,
  );
}
