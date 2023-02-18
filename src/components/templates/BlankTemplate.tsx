import { NextPage } from "next";
import Footer from "../molecules/Footer";
import PrimaryNavigation from "../molecules/PrimaryNavigation";

type props = {
  children: React.ReactNode;
};

const BlankTemplate: NextPage<props> = ({ children }) => {
  return (
    <>
      <PrimaryNavigation />
      <div className="min-h-screen flex flex-col">{children}</div>
      <Footer />
    </>
  );
};

export default BlankTemplate;
