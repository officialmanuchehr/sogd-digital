import { ImageResponse } from "next/og";

export const alt = "sogd.digital — разработка сайтов в Худжанде";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#0A0A0A",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              display: "flex",
              backgroundColor: "#FAFAF8",
            }}
          />
          <span
            style={{
              fontSize: 24,
              color: "#FAFAF8",
              fontWeight: 500,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            sogd.digital
          </span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 600,
            color: "#FAFAF8",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Создаём сайты, которые работают на ваш бизнес
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "rgba(250,250,248,0.5)",
          }}
        >
          Веб-студия полного цикла · Худжанд
        </div>
      </div>
    ),
    { ...size },
  );
}
