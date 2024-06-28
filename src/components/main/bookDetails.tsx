import { useState } from "react";
import Heading from "./heading";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Paragraph from "./paragraph";

export default function BookDetails() {
  const [zoom, setZoom] = useState(1);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-96 bg-sky-200 z-20 transform transition-transform ease-in-out `}
      ></div>
      {/* <section className="flex text-3xl justify-end items-center px-32 mt-10 gap-3">
        <div className="flex px-36 my-10 justify-center items-center">
          <Heading text="This is a Good Heading" css={zoom} />
        </div>
        <div className="flex">
          <div
            className="cursor-pointer text-green-400"
            onClick={() => setZoom(zoom + 1)}
          >
            <CiCirclePlus />
          </div>
          <div
            className="cursor-pointer text-blue-200"
            onClick={() => setZoom(zoom - 1)}
          >
            <CiCircleMinus />
          </div>
        </div>
      </section> */}
      <div className="flex border flex-col px-32 h-screen">
        <section className="flex px-36 my-10 justify-center items-center">
          <Paragraph text="This is a Good Paragraph" css={zoom} />
        </section>
      </div>
    </>
  );
}
