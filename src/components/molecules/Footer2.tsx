import React from "react";
import Image from "next/image";

const Footer2 = () => {
  return (
    <div className=" flex items-center justify-center mt-10 gap-[7rem]">
      <div className="flex flex-wrap flex-col">
        <Image
          src={"/images/LOGO_SEHJIRA_(1)_1.png"}
          alt={"LOGO SEHJIRA footer.png"}
          width={81}
          height={87}
        ></Image>
        <p className=" container h-30 bg-red-400">
          Konsultan, Advokasi, Pelatihan & Pendidikan Disabilitas Therapist
          Terapi Wicara untuk Disabilitas Pendengaran
        </p>
      </div>
      <div className="flex w-full gap-25 mr-24 ">
        <div className="w-full ">
          <div className="pb-5 ">
            <p>Tautan Cepat</p>
          </div>
          <div>
            <ul>
              <li className="pb-2">Visi Kami</li>
              <li className="pb-2">Kedai</li>
              <li className="pb-2">Karir</li>
              <li className="pb-2">Berita & Informasi</li>
            </ul>
          </div>
        </div>
        <div className="w-full pl-9 ">
          <div className="pb-5 ">
            <p>Toko</p>
          </div>
          <div>
            <ul>
              <li className="pb-2">Produk Kami</li>
              <li className="pb-2">Cara Order</li>
              <li className="pb-2">FAQ&apos;s</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer2;
