import { useState } from "react";
import Heading from "./heading";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Paragraph from "./paragraph";

export default function BookDetails() {
  const [zoom, setZoom] = useState(1);

  return (
    <>
      <section className="flex">
        <div className="fixed top-0 left-0 h-full w-[25%] bg-sky-200">
          
        </div>

        <div className="fixed top-0 right-0 w-[75%] h-full bg-pink-200">

        </div>
      </section>
    </>
  );
}
