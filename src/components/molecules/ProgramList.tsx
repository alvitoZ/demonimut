import React from "react";
import CardContents from "@/components/atoms/CardContents";
import Button from "../atoms/Button";

const ProgramList = () => {
  return (
    <div className=" flex flex-col items-center justify-center mt-10 gap-5">
      <div className=" text-center">
        <h1>Program Unggulan SEHJIRA</h1>
      </div>
      <div className=" flex items-center justify-center gap-5">
        <CardContents />
        <CardContents />
        <CardContents />
        <CardContents />
      </div>
      <Button
        action={(e) => {
          alert("Triggered");
        }}
        title="Lihat semua Program Unggulan"
      />
    </div>
  );
};

export default ProgramList;
