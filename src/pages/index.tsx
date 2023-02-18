import { CommonSEO } from "@/components/SEO";
import Footer from "@/components/molecules/Footer";
import BlankTemplate from "@/components/templates/BlankTemplate";
import Link from "next/link";
import Button from "@/components/atoms/Button";
import ImageHome from "@/components/molecules/ImageHome";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Section2 from "@/components/molecules/Section2";
import ProgramList from "@/components/molecules/ProgramList";
import Footer2 from "@/components/molecules/Footer2";

const index = () => {
  return (
    <BlankTemplate>
      <CommonSEO
        title="Home"
        description="Description of Create Next Page by Faizmul"
      />
      <ImageHome />
      <Button
        action={(e) => {
          alert("Triggered");
        }}
        title="Pelajari Lebih Lanjut"
      />
      <Section2 />
      <ProgramList />
      <Footer2 />
    </BlankTemplate>
  );
};

export default index;
