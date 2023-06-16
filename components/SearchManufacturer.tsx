"use client";

import { SearchManufacturerProps } from "@/types";
import { useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";

export default function SearchManufacturer({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) {
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg" alt="" width={20} height={20} />
          </Combobox.Button>

          <Combobox.Input className="search-manufacturer__input" />
        </div>
      </Combobox>
    </div>
  );
}
