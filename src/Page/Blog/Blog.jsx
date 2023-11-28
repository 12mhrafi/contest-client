import React from "react";
import blog from "../../../src/assets/images/blog.jpg";
import blog2 from "../../../src/assets/images/blog2.jpg";
import blog3 from "../../../src/assets/images/blog3.jpg";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
const Blog = () => {
  return (
    <div>
      <div className="container mx-auto px-4 pt-[80px]">
       <div className="mb-10">
       <SectionTitle heading="Blog"></SectionTitle>
       </div>
        <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold ">
              How To Craft a Book Hook (Tips from Editors)
            </h2>
            <p className="mt-3">
              <span className="text-gray-400">Oct 20, 2023</span> -{" "}
              <span>Perfect your Craft</span>
            </p>
            <div className="mt-3">
              <img src={blog} alt="" />
            </div>
            <p className="mt-4">
              We break down what a book hook is, why it matters for authors, and
              how to craft a successful one{" "}
              <a className="underline text-gray-400" href="#">
                Read more
              </a>
            </p>
            <hr className="mt-5" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold ">
              How To Craft a Book Hook (Tips from Editors)
            </h2>
            <p className="mt-3">
              <span className="text-gray-400">Oct 20, 2023</span> -{" "}
              <span>Perfect your Craft</span>
            </p>
            <div className="mt-3">
              <img src={blog2} alt="" />
            </div>
            <p className="mt-4">
              We break down what a book hook is, why it matters for authors, and
              how to craft a successful one{" "}
              <a className="underline text-gray-400" href="#">
                Read more
              </a>
            </p>
            <hr className="mt-5" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold ">
              How To Craft a Book Hook (Tips from Editors)
            </h2>
            <p className="mt-3">
              <span className="text-gray-400">Oct 20, 2023</span> -{" "}
              <span>Perfect your Craft</span>
            </p>
            <div className="mt-3">
              <img src={blog3} alt="" />
            </div>
            <p className="mt-4">
              We break down what a book hook is, why it matters for authors, and
              how to craft a successful one{" "}
              <a className="underline text-gray-400" href="#">
                Read more
              </a>
            </p>
            <hr className="mt-5" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold ">
              How To Craft a Book Hook (Tips from Editors)
            </h2>
            <p className="mt-3">
              <span className="text-gray-400">Oct 20, 2023</span> -{" "}
              <span>Perfect your Craft</span>
            </p>
            <div className="mt-3">
              <img src={blog} alt="" />
            </div>
            <p className="mt-4">
              We break down what a book hook is, why it matters for authors, and
              how to craft a successful one{" "}
              <a className="underline text-gray-400" href="#">
                Read more
              </a>
            </p>
            <hr className="mt-5" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold ">
              How To Craft a Book Hook (Tips from Editors)
            </h2>
            <p className="mt-3">
              <span className="text-gray-400">Oct 20, 2023</span> -{" "}
              <span>Perfect your Craft</span>
            </p>
            <div className="mt-3">
              <img src={blog2} alt="" />
            </div>
            <p className="mt-4">
              We break down what a book hook is, why it matters for authors, and
              how to craft a successful one{" "}
              <a className="underline text-gray-400" href="#">
                Read more
              </a>
            </p>
            <hr className="mt-5" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold ">
              How To Craft a Book Hook (Tips from Editors)
            </h2>
            <p className="mt-3">
              <span className="text-gray-400">Oct 20, 2023</span> -{" "}
              <span>Perfect your Craft</span>
            </p>
            <div className="mt-3">
              <img src={blog3} alt="" />
            </div>
            <p className="mt-4">
              We break down what a book hook is, why it matters for authors, and
              how to craft a successful one{" "}
              <a className="underline text-gray-400" href="#">
                Read more
              </a>
            </p>
            <hr className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
