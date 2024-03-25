import Image from "next/image";
import { Header } from "../../components/Header/Header";
import { Dashboard } from "./dashboard/Dashboard";
import { SideMenu } from "../../components/SideMenu/SideMenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <SideMenu />
      <Dashboard />
    </main>
  );
}
