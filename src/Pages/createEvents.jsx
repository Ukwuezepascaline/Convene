/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../context/slices/user.slice";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { createBlog, updateBlog } from "../services/backend.services";

const Eventspage = ({ blog, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setUserData } = userActions;
  const { userData } = useSelector((states) => states.userStates);

  useEffect(() => {
    if (!userData) {
      const sUser = JSON.parse(sessionStorage.getItem("user"));
      if (sUser) {
        dispatch(setUserData(sUser));
      }
    }
  }, [dispatch, setUserData, userData]);

  const [blogDetail, setBlogDetails] = useState({
    title: blog && blog.title ? blog.title : "",
    imageUrl: blog && blog.imageUrl ? blog.imageUrl : "",
    overview: blog && blog.overview ? blog.overview : "",
    description: blog && blog.description ? blog.description : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setBlogDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (userData?.userType !== "admin") {
      return toast.warn("Only admin can create a blog post");
    }

    setSubmitting(true);

    const blogInput = {
      title: blogDetail.title,
      imageUrl: blogDetail.imageUrl,
      overview: blogDetail.overview,
      description: blogDetail.description,
    };

    const toastId = toast.loading(type === "create" ? "Creating" : "Updating");

    if (type === "create") {
      try {
        const status = await createBlog(blogInput);
        if (status === 201) {
          navigate("/");
          toast.update(toastId, {
            render: "Blog created successfully 👌",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
        }
      } catch (e) {
        toast.update(toastId, {
          render: `${e.message} 🤯`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    } else {
      try {
        const status = await updateBlog(blog._id, blogInput);
        if (status === 201) {
          navigate("/");
          toast.update(toastId, {
            render: "Blog updated successfully 👌",
            type: "success",
            isLoading: false,
            autoClose: 5000,
          });
        }
      } catch (e) {
        toast.update(toastId, {
          render: `${e.message} 🤯`,
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 w-full flex flex-col gap-4 items-center"
    >
      <div className="flex flex-col gap-1 w-[460px]">
        <label className="text-left font-semibold  text-lg md:text-[20px] mt-6">
          Title
        </label>
        <input
          required
          className="w-full border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
          name={"title"}
          placeholder="Blog Title"
          onChange={handleChange}
          value={blogDetail.title}
          type="text"
        />
      </div>

      <div className="flex flex-col gap-1 w-[460px]">
        <label className="text-left font-semibold  text-lg md:text-[20px] mt-6">
          Image Url
        </label>
        <input
          required
          className="w-full border rounded-xl md:rounded-md border-slate-600 md:text-black h-12 text-xl pl-3"
          name={"imageUrl"}
          placeholder="https://imageurl.com"
          onChange={handleChange}
          value={blogDetail.imageUrl}
          type="url"
        />
      </div>

      <div className="flex flex-col gap-1 w-[460px]">
        <label className="text-left font-semibold  text-lg md:text-[20px] mt-6">
          Blog Overview
        </label>
        <textarea
          name="overview"
          rows={5}
          cols={1}
          className="border rounded-xl md:rounded-md border-slate-600 md:text-black text-xl pl-3"
          placeholder="Enter blog overview"
          value={blogDetail.overview}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col gap-1 w-[460px]">
        <label className="text-left font-semibold  text-lg md:text-[20px] mt-6">
          Blog Description
        </label>
        <textarea
          required
          name="description"
          cols={1}
          rows={5}
          className="border rounded-xl md:rounded-md border-slate-600 md:text-black text-xl pl-3"
          placeholder="Enter blog overview"
          value={blogDetail.description}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="Login bg-primaryOrange items-center justify-center w-[310px] h-14 flex mx-auto rounded-xl text-white font-bold text-xl mt-3"
      >
        {type === "create"
          ? submitting
            ? "Creating"
            : "Create"
          : submitting
          ? "Updating"
          : "Update"}
      </button>
    </form>
  );
};

export default Eventspage;
