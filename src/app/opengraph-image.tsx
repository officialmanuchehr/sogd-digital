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
          backgroundColor: "#0B1020",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(79,70,229,0.45), transparent 45%), radial-gradient(circle at 85% 15%, rgba(139,92,246,0.35), transparent 50%)",
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
              width: 56,
              height: 56,
              borderRadius: 14,
              display: "flex",
              backgroundImage: "linear-gradient(135deg, #4F46E5, #8B5CF6)",
            }}
          />
          <span style={{ fontSize: 32, color: "#F6F5FB", fontWeight: 600 }}>
            sogd.digital
          </span>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#F6F5FB",
            maxWidth: 900,
            lineHeight: 1.15,
          }}
        >
          Создаём сайты, которые работают на ваш бизнес
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 26,
            color: "#A6ACC4",
          }}
        >
          Веб-студия полного цикла · Худжанд
        </div>
      </div>
    ),
    { ...size },
  );
}
