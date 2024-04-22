import React, { useState } from "react";
import Data from "./Data";

function Jobs() {
  let datas = Data.filter((a) => a.category == "recent jobs");
  let datad = Data.filter((a) => a.category == "featured jobs");
  let datae = Data.filter((a) => a.category == "freelancer");
  let dataf = Data.filter((a) => a.category == "part time");
  let datag = Data.filter((a) => a.category == "full time");
  const getBadgeColor = (schedule) => {
    switch (schedule) {
      case "Full Time":
        return "bg-success";
      case "Private":
        return "bg-info";
      case "Urgent":
        return "bg-warning";
      case "Part Time":
        return "bg-primary";
      case "Freelancer":
        return "bg-secondary";
      default:
        return "bg-light"; // Default color for unknown schedules
    }
  };
  const [activeTab, setActiveTab] = useState("recent-jobs"); // Set the default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="container-fluid bg-[#f1f0fe] ">
      <div className="container">
        <div className="row flex justify-center">
          <div className="col-lg-6">
            <div className="section-title text-center">
              <h4 className="title text-[#495057] text-[30px] mt-8 font-medium">
                New &amp; Random Jobs
              </h4>
              <p className=" text-muted text-[15px] py-2">
                Post a job to tell us about your project. We'll quickly match
                you with the right freelancers.
              </p>
            </div>
          </div>
        </div>

        <div className="row flex justify-center mt-4">
          <div className="col-lg-8 job">
            <ul
              className="job-list-menu nav nav-pills nav-justified flex-column flex-sm-row mb-4"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button className={`nav-link ${activeTab === "recent-jobs" ? "active" : "" }`} id="recent-jobs-tab" data-bs-toggle={activeTab === "recent-jobs" ? "pill" : "tooltip" } // Example: Use 'pill' for toggling, or 'tooltip' if intended 
                  data-bs-target="#recent-jobs"
                  type="button"
                  role="tab"
                  aria-controls="recent-jobs"
                  aria-selected={activeTab === "recent-jobs"}
                  onClick={() => handleTabClick("recent-jobs")}
                >
                  Recent Jobs
                </button>
              </li>
              
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="featured-jobs-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#featured-jobs"
                  type="button"
                  role="tab"
                  aria-controls="featured-jobs"
                  aria-selected="false"
                >
                  Featured Jobs
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="freelancer-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#freelancer"
                  type="button"
                  role="tab"
                  aria-controls="freelancer"
                  aria-selected="false"
                >
                  Freelancer
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="part-time-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#part-time"
                  type="button"
                  role="tab"
                  aria-controls="part-time"
                  aria-selected="false"
                >
                  Part Time
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="full-time-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#full-time"
                  type="button"
                  role="tab"
                  aria-controls="full-time"
                  aria-selected="false"
                >
                  Full Time
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="tab-content " id="pills-tabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === "recent-jobs" ? "show active" : ""
                }`}
                id="recent-jobs"
                role="tabpanel"
                aria-labelledby="recent-jobs-tab"
              >
                {datas.map((a) => (
                  <div className="job-box card mt-4" key={a.id}>
                    <div className="p-4 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="text-center mb-4 mb-md-0">
                            <a href="">
                              <img
                                src={a.image}
                                className="img-fluid rounded-3"
                              />
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-3">
                          <div className="mb-2 mb-md-0">
                            <h5 className="fs-18 mb-1">
                              <a href="" className="text-dark font-bold no-underline">
                                {a.job}
                              </a>
                            </h5>
                            <p className="text-muted fs-14 mb-0">{a.company}</p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-3">
                          <div className="d-flex mb-2">
                            <div className="flex-shrink-0">
                              <i className="fa-solid fa-location-dot text-[#776df4] text-[15px] me-1" />
                            </div>
                            <p className="text-muted mb-0">{a.location}</p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-2">
                          <div>
                            <p className="text-muted mb-2">
                              <span className="text-[#766df4]">$</span>
                              {a.price}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-2">
                          <div>
                            {Object.keys(a)
                              .filter((key) => key.startsWith("schedule"))
                              .map((key, index) => (
                                <span
                                  key={index}
                                  className={`badge ${getBadgeColor(
                                    a[key]
                                  )} fs-13 mt-1`}
                                >
                                  {a[key]}
                                </span>
                              ))}
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    <div className="p-3 bg-light">
                      <div className="row">
                        <div className="col-md-4">
                          <div>
                            <p className="text-muted mb-0">
                              <span className="text-dark">Experience :</span>{" "}
                              {a.experience}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-5">
                          <div>
                            <p className="text-muted mb-0">
                              <span className="text-dark">Notes :</span>
                              languages only differ in their grammar.{" "}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-3">
                          <div className="text-start text-md-end">
                            <a
                              href=""
                              data-bs-toggle="modal"
                              className="primary-link no-underline"
                            >
                              Apply Now{" "}
                              <i className="fa-solid fa-angles-right" />
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                  </div>
                ))}
                {/*end job-box*/}

                <div className="text-center mt-4 pt-2 mb-4 hover:translate-x-2 hover:translate-y-[-10px] duration-1000">
                  <a
                    href=""
                    className=" text-white bg-[#766df4] hover:bg-[#766df9] p-2 rounded-md"
                  >
                    View More
                    <i className="fa-solid fa-arrow-right text-white text-[12px] px-1"></i>
                  </a>
                </div>
              </div>

              {/*end recent-jobs-tab*/}
              <div
                className="tab-pane fade"
                id="featured-jobs"
                role="tabpanel"
                aria-labelledby="featured-jobs-tab"
              >
                {datad.map((a) => (
                  <div className="job-box card mt-4" key={a.id}>
                    <div className="p-4 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="text-center mb-4 mb-md-0">
                            <a href="">
                              <img
                                src={a.image}
                                className="img-fluid rounded-3"
                              />
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-3">
                          <div className="mb-2 mb-md-0">
                            <h5 className="fs-18 mb-1">
                              <a href="" className="text-dark font-bold no-underline">
                                {a.job}
                              </a>
                            </h5>
                            <p className="text-muted fs-14 mb-0">{a.company}</p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-3">
                          <div className="d-flex mb-2">
                            <div className="flex-shrink-0">
                              <i className="fa-solid fa-location-dot text-[#776df4] text-[15px] me-1" />
                            </div>
                            <p className="text-muted mb-0">{a.location}</p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-2">
                          <div>
                            <p className="text-muted mb-2">
                              <span className="text-[#766df4]">$</span>
                              {a.price}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-2">
                          <div>
                            {Object.keys(a)
                              .filter((key) => key.startsWith("schedule"))
                              .map((key, index) => (
                                <span
                                  key={index}
                                  className={`badge ${getBadgeColor(
                                    a[key]
                                  )} fs-13 mt-1`}
                                >
                                  {a[key]}
                                </span>
                              ))}
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    <div className="p-3 bg-light">
                      <div className="row">
                        <div className="col-md-4">
                          <div>
                            <p className="text-muted mb-0">
                              <span className="text-dark">Experience :</span>
                              {a.experience}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-5">
                          <div>
                            <p className="text-muted mb-0">
                              <span className="text-dark">Notes :</span>
                              languages only differ in their grammar.{" "}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-3">
                          <div className="text-start text-md-end">
                            <a
                              href=""
                              data-bs-toggle="modal"
                              className="primary-link no-underline"
                            >
                              Apply Now{" "}
                              <i className="fa-solid fa-angles-right" />
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                  </div>
                ))}
                {/*end job-box*/}

                <div className="text-center mt-4 pt-2 mb-4 hover:translate-x-2 hover:translate-y-[-10px] duration-1000">
                  <a
                    href=""
                    className="btn btn-primary text-white bg-[#766df4] hover:bg-[#766df9]"
                  >
                    View More
                    <i className="fa-solid fa-arrow-right text-white text-[12px] px-1"></i>
                  </a>
                </div>
              </div>
              {/*end featured-jobs-tab*/}

              <div
                className="tab-pane fade"
                id="freelancer"
                role="tabpanel"
                aria-labelledby="freelancer-tab"
              >
                {datae.map((a) => (
                  <div className="job-box card mt-4" key={a.id}>
                    <div className="p-4 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="text-center mb-4 mb-md-0">
                            <a href="">
                              <img
                                src={a.image}
                                className="img-fluid rounded-3"
                              />
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-3">
                          <div className="mb-2 mb-md-0">
                            <h5 className="fs-18 mb-1">
                              <a href="" className="text-dark font-bold no-underline">
                                {a.job}
                              </a>
                            </h5>
                            <p className="text-muted fs-14 mb-0">{a.company}</p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-3">
                          <div className="d-flex mb-2">
                            <div className="flex-shrink-0">
                              <i className="fa-solid fa-location-dot text-[#776df4] text-[15px] me-1" />
                            </div>
                            <p className="text-muted mb-0">{a.location}</p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-2">
                          <div>
                            <p className="text-muted mb-2">
                              <span className="text-[#766df4]">$</span>
                              {a.price}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-2">
                          <div>
                            {Object.keys(a)
                              .filter((key) => key.startsWith("schedule"))
                              .map((key, index) => (
                                <span
                                  key={index}
                                  className={`badge ${getBadgeColor(
                                    a[key]
                                  )} fs-13 mt-1`}
                                >
                                  {a[key]}
                                </span>
                              ))}
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    <div className="p-3 bg-light">
                      <div className="row">
                        <div className="col-md-4">
                          <div>
                            <p className="text-muted mb-0">
                              <span className="text-dark">Experience :</span>
                              {a.experience}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-5">
                          <div>
                            <p className="text-muted mb-0">
                              <span className="text-dark">Notes :</span>
                              languages only differ in their grammar.{" "}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-3">
                          <div className="text-start text-md-end">
                            <a
                              href=""
                              data-bs-toggle="modal"
                              className="primary-link no-underline"
                            >
                              Apply Now{" "}
                              <i className="fa-solid fa-angles-right" />
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                  </div>
                ))}
                {/*end job-box*/}

                <div className="text-center mt-4 pt-2 mb-4 hover:translate-x-2 hover:translate-y-[-10px] duration-1000">
                  <a
                    href=""
                    className="btn btn-primary text-white bg-[#766df4] hover:bg-[#766df9]"
                  >
                    View More
                    <i className="fa-solid fa-arrow-right text-white text-[12px] px-1"></i>
                  </a>
                </div>
              </div>
              {/*end freelancer-tab*/}

              <div
                className="tab-pane fade"
                id="part-time"
                role="tabpanel"
                aria-labelledby="part-time-tab"
              >
                {dataf.map((a) => (
                  <div className="job-box card mt-4" key={a.id}>
                    <div className="p-4 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="text-center mb-4 mb-md-0">
                            <a href="">
                              <img
                                src={a.image}
                                className="img-fluid rounded-3"
                              />
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-3">
                          <div className="mb-2 mb-md-0">
                            <h5 className="fs-18 mb-1">
                              <a href="" className="text-dark font-bold no-underline">
                                {a.job}
                              </a>
                            </h5>
                            <p className="text-muted fs-14 mb-0">{a.company}</p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-3">
                          <div className="d-flex mb-2">
                            <div className="flex-shrink-0">
                              <i className="fa-solid fa-location-dot text-[#776df4] text-[15px] me-1" />
                            </div>
                            <p className="text-muted mb-0">{a.location}</p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-2">
                          <div>
                            <p className="text-muted mb-2">
                              <span className="text-[#766df4]">$</span>
                              {a.price}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-2">
                          <div>
                            {Object.keys(a)
                              .filter((key) => key.startsWith("schedule"))
                              .map((key, index) => (
                                <span
                                  key={index}
                                  className={`badge ${getBadgeColor(
                                    a[key]
                                  )} fs-13 mt-1`}
                                >
                                  {a[key]}
                                </span>
                              ))}
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    <div className="p-3 bg-light">
                      <div className="row">
                        <div className="col-md-4">
                          <div>
                            <p className="text-muted mb-0">
                              <span className="text-dark">Experience :</span>
                              {a.experience}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-5">
                          <div>
                            <p className="text-muted mb-0">
                              <span className="text-dark">Notes :</span>
                              languages only differ in their grammar.{" "}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-3">
                          <div className="text-start text-md-end">
                            <a
                              href=""
                              data-bs-toggle="modal"
                              className="primary-link no-underline"
                            >
                              Apply Now{" "}
                              <i className="fa-solid fa-angles-right" />
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                  </div>
                ))}
                {/*end job-box*/}

                <div className="text-center mt-4 pt-2 mb-4 hover:translate-x-2 hover:translate-y-[-10px] duration-1000">
                  <a
                    href=""
                    className="btn btn-primary text-white bg-[#766df4] hover:bg-[#766df9]"
                  >
                    View More
                    <i className="fa-solid fa-arrow-right text-white text-[12px] px-1"></i>
                  </a>
                </div>
              </div>
              {/*end part-time-tab*/}
              <div
                className="tab-pane fade"
                id="full-time"
                role="tabpanel"
                aria-labelledby="full-time-tab"
              >
                {datag.map((a) => (
                  <div className="job-box card mt-4" key={a.id}>
                    <div className="p-4 ">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <div className="text-center mb-4 mb-md-0">
                            <a href="">
                              <img
                                src={a.image}
                                className="img-fluid rounded-3"
                              />
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-3">
                          <div className="mb-2 mb-md-0">
                            <h5 className="fs-18 mb-1">
                              <a href="" className="text-dark font-bold no-underline">
                                {a.job}
                              </a>
                            </h5>
                            <p className="text-muted fs-14 mb-0">{a.company}</p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-3">
                          <div className="d-flex mb-2">
                            <div className="flex-shrink-0">
                              <i className="fa-solid fa-location-dot text-[#776df4] text-[15px] me-1" />
                            </div>
                            <p className="text-muted mb-0">{a.location}</p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-2">
                          <div>
                            <p className="text-muted mb-2">
                              <span className="text-[#766df4]">$</span>
                              {a.price}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-md-2">
                          <div>
                            {Object.keys(a)
                              .filter((key) => key.startsWith("schedule"))
                              .map((key, index) => (
                                <span
                                  key={index}
                                  className={`badge ${getBadgeColor(
                                    a[key]
                                  )} fs-13 mt-1`}
                                >
                                  {a[key]}
                                </span>
                              ))}
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                    <div className="p-3 bg-light">
                      <div className="row">
                        <div className="col-md-4">
                          <div>
                            <p className="text-muted mb-0">
                              <span className="text-dark">Experience :</span>
                              {a.experience}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-6 col-md-5">
                          <div>
                            <p className="text-muted mb-0">
                              <span className="text-dark">Notes :</span>
                              languages only differ in their grammar.{" "}
                            </p>
                          </div>
                        </div>
                        {/*end col*/}
                        <div className="col-lg-2 col-md-3">
                          <div className="text-start text-md-end">
                            <a
                              href=""
                              data-bs-toggle="modal"
                              className="primary-link no-underline"
                            >
                              Apply Now{" "}
                              <i className="fa-solid fa-angles-right" />
                            </a>
                          </div>
                        </div>
                        {/*end col*/}
                      </div>
                      {/*end row*/}
                    </div>
                  </div>
                ))}
                {/*end job-box*/}

                <div className="text-center mt-4 pt-2 mb-4 hover:translate-x-2 hover:translate-y-[-10px] duration-1000 viewmore">
                  <a href="#" className="p-2 rounded-md text-white bg-[#766df4] hover:bg-[#766df9] no-underline" >
                    View More
                    <i className="fa-solid fa-arrow-right text-white text-[12px] px-1"></i>
                  </a>
                </div>
              </div>
              {/*end full-time-tab*/}
            </div>
          </div>
          {/*end col*/}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
