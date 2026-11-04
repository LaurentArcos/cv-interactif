import type { Metadata } from "next";
import { HubPage } from "@/components/cv/CaseStudy";

export const metadata: Metadata = {
  title: "Hub logistique - Laurent Arcos",
  description: "Étude de cas : conception et développement du hub logistique de Seagale, du process terrain à la mise en production.",
  alternates: { canonical: "/hub" },
};

export default function Page() {
  return <HubPage />;
}
