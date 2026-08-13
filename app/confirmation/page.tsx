import type { Metadata } from "next";
import ConfirmationScreen from "../components/ConfirmationScreen";

export const metadata: Metadata = {
  title: "Sent — Rendezvous",
  description: "Your invitation has been sent.",
};

export default function ConfirmationPage() {
  return <ConfirmationScreen />;
}
