import React from "react";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Categories",
  description:
    "this app is a OMJ graveyard searching app for Okhai memon jamat all graveyard data searching app for name wise, khundi wise and graveyard wise ",
};

// Define a type for the section components
type SectionComponentType = React.ComponentType<any>;

// Dynamic import for the components to be rendered based on the section
const Components: Record<string, SectionComponentType> = {
  Graveyards: dynamic(() => import("../../Components/ui/Graveyards")),
  Khundis: dynamic(() => import("../../Components/ui/Khundis")),
};

// This function defines the static paths to be generated at build time
export async function generateStaticParams() {
  const sections = ["Graveyards", "Khundis"];
  return sections.map((section) => ({ section }));
}

// The page component receives the params object containing the section
export default function SectionPage({
  params,
}: {
  params: { section: string };
}) {
  const { section } = params;
  const SectionComponent = Components[section];

  // If the component doesn't exist, return a 404 page
  if (!SectionComponent) {
    notFound();
  }

  return (
    <div className=" min-h-screen">
      <SectionComponent />
      
    </div>
  );
}
