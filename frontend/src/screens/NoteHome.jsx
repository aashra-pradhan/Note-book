import React, { useState, useEffect } from "react";
import apiRequest from "../api/api_call";
import { toast } from "react-toastify";
import NoteItem from "../components/NoteItem";
import { useLocation } from "react-router-dom";
const NoteHome = () => {
  const [postsResponse, setPostsResponse] = useState([]);
  const [add, setAdd] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useLocation();
  async function getAllPosts() {
    const apiDetails = {
      urlEndpoint: "/",
      requestMethod: "GET",
    };

    let apiResponse = await apiRequest(apiDetails);
    setPostsResponse(apiResponse.data);
    console.log(postsResponse, "www");
    // toast.success("Success");
    console.log(apiResponse, "check");

    if (apiResponse.status != 200 && apiResponse.status != 201) {
      toast.error("Error");
    }
  }

  useEffect(() => {
    getAllPosts();
  }, [add]);

  function handleAdd() {
    setAdd(true);
  }

  async function handlePost() {
    const apiDetails = {
      urlEndpoint: `/`,
      requestMethod: "POST",
    };
    const requestPayload = {
      title: title,
      content: content,
    };
    let apiResponse = await apiRequest(apiDetails, requestPayload);

    setAdd(false);
    console.log(item, "www");
    toast.success("Successfully posted!");

    navigate(-1);
    // navigate(0);
    console.log(apiResponse, "check");

    if (apiResponse.status != 200 && apiResponse.status != 201) {
      toast.error("Error");
    }
  }
  return (
    <>
      <div className="min-h-screen m-0 p-10 ">
        <h1 className="font-bold text-red-500 text-4xl mt-5">
          Note Application
        </h1>
        <button
          className="mt-8 border-2 h-[40px] max-w-42 bg-red-400 border-orange-200 rounded-md font-sans	text-xl	font-semibold p-5 flex items-center"
          type="button"
          onClick={handleAdd}
        >
          Add new note
        </button>
        {add ? (
          <>
            <div className="min-h-screen m-0 p-10 flex items-center justify-center">
              <div className="border-4 border-red-400 w-[80%] p-5 rounded-md">
                <label>Title:</label>

                <input
                  type="text"
                  className="border-2 border-red-500 ml-9 p-2  w-[500px] h-[50px]"
                  required
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <br />
                <br />

                <label> Content:</label>

                <input
                  type="text"
                  className="border-2 border-red-500 ml-3 px-2  w-[800px] h-[100px] overflow-y-scroll"
                  required
                  value={content}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />

                <div className="mt-4 p-3">
                  <button
                    type="button"
                    className="border-2 h-[35px] max-w-32 bg-red-400 border-orange-200 rounded-md font-sans	text-xl	font-semibold p-5 flex items-center"
                    onClick={handlePost}
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <NoteItem postsResponse={postsResponse} />
        )}
      </div>
    </>
  );
};

export default NoteHome;
