import type { Metadata } from "next";
import DetailsForm from "../components/DetailsForm";

export const metadata: Metadata = {
  title: "Choose the Time and Place — Rendezvous",
  description: "Set the date, time, and place for your meeting.",
};

export default function DetailsPage() {
  return <DetailsForm />;
}
