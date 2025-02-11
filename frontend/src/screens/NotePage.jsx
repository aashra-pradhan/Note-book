import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import apiRequest from "../api/api_call";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";

const NotePage = () => {
  const [item, setItem] = useState({});
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState(item?.title);
  const [content, setContent] = useState(item?.content);

  const navigate = useLocation();
  let params = useParams();
  async function getOnePost() {
    const apiDetails = {
      urlEndpoint: `/${params.noteid}`,
      requestMethod: "GET",
    };

    let apiResponse = await apiRequest(apiDetails);
    setItem(apiResponse.data);
    console.log(item, "www");
    // toast.success("Success");

    console.log(apiResponse, "check");

    if (apiResponse.status != 200 && apiResponse.status != 201) {
      toast.error("Error");
    }
  }

  useEffect(() => {
    getOnePost();
  }, []);

  function handleUpdateClick() {
    setEdit(true);
  }
  async function handleUpdate() {
    const apiDetails = {
      urlEndpoint: `/${params.noteid}`,
      requestMethod: "PUT",
    };
    const requestPayload = {
      title: title,
      content: content,
    };
    let apiResponse = await apiRequest(apiDetails, requestPayload);
    setItem(apiResponse.data);
    setEdit(false);
    console.log(item, "www");
    toast.success("Successfully edited!");

    navigate(-1);
    console.log(apiResponse, "check");

    if (apiResponse.status != 200 && apiResponse.status != 201) {
      toast.error("Error");
    }
  }

  async function handleDelete() {
    const apiDetails = {
      urlEndpoint: `/${params.noteid}`,
      requestMethod: "DELETE",
    };

    let apiResponse = await apiRequest(apiDetails);

    toast.error("Item Deleted! Go to the home page!");

    if (apiResponse.status != 200 && apiResponse.status != 201) {
      toast.error("Error");
    }
  }
  return (
    <>
      <div className="min-h-screen m-0 p-10 flex items-center justify-center">
        <div className="border-4 border-red-400 w-[80%] p-5 rounded-md">
          {edit ? (
            <>
              <label>Title:</label>

              <input
                type="text"
                className="border-2 border-red-500 ml-9 p-2  w-[500px] h-[50px]"
                required
                defaultValue={item?.title}
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <br />
              <br />
            </>
          ) : (
            <h1 className="text-2xl text-red-500 font-semibold">
              {item?.title}
            </h1>
          )}
          {edit ? (
            <>
              <label> Content:</label>

              <input
                type="text"
                className="border-2 border-red-500 ml-3 px-2  w-[800px] h-[100px] overflow-y-scroll"
                required
                defaultValue={item?.content}
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
            </>
          ) : (
            <h1 className="text-gray-600 text-md font-medium mt-2 ">
              {item?.content}
            </h1>
          )}
          {edit ? (
            ""
          ) : (
            <h1 className="text-xs text-black font-normal mt-4">
              Posted on: {item?.date?.substr(0, 10)}
            </h1>
          )}

          {edit ? (
            <div className="mt-4 p-3 flex items-center justify-center gap-3">
              <button
                type="button"
                className="border-2 h-[35px] max-w-32 bg-red-400 border-orange-200 rounded-md font-sans	text-xl	font-semibold p-5 flex items-center"
                onClick={() => {
                  setEdit(false);
                }}
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleUpdate}
                className="border-2 h-[35px] max-w-32 bg-red-400 border-orange-200 rounded-md font-sans	text-xl	font-semibold p-5 flex items-center"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              {" "}
              <div className="mt-4 p-3 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleUpdateClick}
                  className="border-2 h-[35px] max-w-32 bg-red-400 border-orange-200 rounded-md font-sans	text-xl	font-semibold p-5 flex items-center"
                >
                  Update
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="border-2 h-[35px] max-w-32 bg-red-400 border-orange-200 rounded-md font-sans	text-xl	font-semibold p-5 flex items-center"
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NotePage;
