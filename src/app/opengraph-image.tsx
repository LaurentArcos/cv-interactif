import { ImageResponse } from "next/og";

export const alt = "Laurent Arcos, développeur full stack et e-commerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  const stat = (a: string, b: string) => (
    <div style={{ display: "flex", flexDirection: "column", padding: "22px 26px", borderTop: "4px solid #15181c" }}>
      <div style={{ fontSize: 46, fontWeight: 700 }}>{a}</div>
      <div style={{ fontSize: 24 }}>{b}</div>
    </div>
  );
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#11161d", color: "#e8edf3", padding: 70 }}>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
        <div style={{ width: 84, height: 84, background: "#f2b544", color: "#17120a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, fontWeight: 700, marginBottom: 44 }}>LA</div>
        <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05 }}>Laurent Arcos</div>
        <div style={{ fontSize: 31, color: "#f2b544", marginTop: 22, whiteSpace: "nowrap" }}>Développeur full stack & e-commerce</div>
        <div style={{ fontSize: 28, color: "#9dabba", marginTop: 14 }}>Toulon, France</div>
      </div>
      <div style={{ width: 370, display: "flex", flexDirection: "column", background: "#f6f4ee", color: "#15181c", border: "4px solid #15181c" }}>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "20px 26px", fontSize: 26, fontWeight: 700 }}>
          <span>CV</span>
          <span>SEAGALE</span>
        </div>
        {stat("≈ 50", "workflows n8n actifs")}
        {stat("5", "applications internes")}
        {stat("≈ 14 ans", "de commerce et logistique")}
      </div>
    </div>,
    size,
  );
}
