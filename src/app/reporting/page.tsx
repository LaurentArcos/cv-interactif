import type { Metadata } from "next";
import { ReportingPage } from "@/components/cv/CaseStudy";

export const metadata: Metadata = {
  title: "Reporting e-commerce - Laurent Arcos",
  description: "Étude de cas : une application de reporting pour unifier les ventes web et boutiques et nourrir les analyses business.",
  alternates: { canonical: "/reporting" },
};

export default function Page() {
  return <ReportingPage />;
}
