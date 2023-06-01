"use client";

import { useState } from "react";

import ModalVideo from "react-modal-video";

export default function Video() {
  const [isOpen, setOpen] = useState(false);
  return (
    <section className="container px-5">
      <div>
        <h1 className="text-center font-bold mt-10 mb-3 text-2xl">
          Watch Videvo
        </h1>
        <p className="text-center text-gray-400 text-base">
          ESG의 개념을 쉽게 이해할 수 있는 영상을 제공합니다. 우리는 영상의
          내용만으로도 충분히 ESG에 대해 이해하고 시작할 수 있습니다.
        </p>
      </div>
    </section>
  );
}
