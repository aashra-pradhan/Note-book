import React from "react";
import { Link } from "react-router-dom";
const NoteItem = ({ postsResponse }) => {
  return (
    <>
      {postsResponse?.map((item) => {
        const link = `/note/${item?._id}`;
        return (
          <>
            <Link to={link}>
              <div className="p-5 w-full border-4 border-red-400 mt-10 rounded-md hover:cursor-pointer hover:bg-red-100">
                <h1 className="text-2xl text-red-500 font-semibold">
                  {item.title}
                </h1>
                {/* <h1 className="text-gray-600 text-md font-medium mt-2">
                  {item.content}
                </h1> */}
                <h1 className="text-xs text-black font-normal mt-4">
                  Posted on: {item.date.substr(0, 10)}
                </h1>
              </div>
            </Link>
          </>
        );
      })}
    </>
  );
};

export default NoteItem;
