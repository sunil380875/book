import Heading from "./heading";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
export default function BookDetails() {
  return (
    <>
      <section className="flex text-3xl justify-end px-32 mt-10 gap-3 ">
        <div className="flex border px-2 py-2">
          <div className="cursor-pointer text-green-400">
            <CiCirclePlus />
          </div>
          <div className="cursor-pointer text-blue-200">
            <CiCircleMinus />
          </div>
        </div>
      </section>
      <section className="flex px-36 my-10 justify-center items-center">
        <Heading props="This is a Good Heading" />
      </section>
    </>
  );
}
