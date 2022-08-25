/** @format */
import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <div>
        <h1>seems you are lost!!</h1>
        <div>
          <Link href={"/"}>please let me lead you home</Link>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
