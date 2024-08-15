import { useLoaderData, useParams } from "react-router-dom";
import { CiDollar } from "react-icons/ci";
import { PiSubtitlesLight } from "react-icons/pi";
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = job;
  const { phone, email, address } = contact_information;
  return (
    <div>
      <h1 className="text-3xl my-28 text-center font-extrabold">job details</h1>
      <div className="md:flex gap-6">
        <div className="w-4/6">
          <h1 className="mb-6">
            <span className="font-bold"> Job description:</span>
            {job_description}
          </h1>
          <h1 className="mb-6">
            <span className="font-bold">Job Responsibilities:</span>
            {job_responsibility}
          </h1>
          <h1 className="mb-6">
            <p className="font-bold">Educational requirements:</p>
            {educational_requirements}
          </h1>
          <h1 className="mb-6">
            <p className="font-bold">Experiences:</p>
            {experiences}
          </h1>
        </div>
        <div className="w-4/12 mb-6">
          <div className="bg-[#F4F1FF] mb-6 rounded-lg">
            <div className="p-7">
              <div className="pb-6 mb-6 border-b">
                <h1 className="text-xl font-extrabold">Job Details</h1>
              </div>
              <div className="border-b">
                <h1 className="flex items-center gap-2">
                  <CiDollar className="text-[#7E90FE]" />
                  <span className="font-semibold">Salary:</span>
                  <span>{salary}</span>
                  (per month)
                </h1>
                <h1 className="flex items-center gap-2 mb-8">
                  <PiSubtitlesLight className="text-[#7E90FE]" />
                  <span className="font-semibold">Job Title:</span>
                  <span>{job_title}</span>
                </h1>
                <h1 className="text-xl font-extrabold mb-6">
                  Contact Information
                </h1>
              </div>
              <div>
                <h1 className="flex items-center gap-2 mb-4">
                  <CiPhone className="text-[#7E90FE]" />
                  <span className="font-semibold">phone:</span>
                  <span>{phone}</span>
                </h1>
                <h1 className="flex items-center gap-2 mb-4">
                  <MdOutlineEmail className="text-[#7E90FE]" />
                  <span className="font-semibold">email:</span>
                  <span>{email}</span>
                </h1>
                <h1 className="mb-4">
                  <CiLocationOn className="text-[#7E90FE] inline mr-2" />
                  <span className="font-semibold">address:</span>
                  <span>{address}</span>
                </h1>
              </div>
            </div>
          </div>
          <button className="w-full text-center bg-[#5590FE] py-4 rounded text-white">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
