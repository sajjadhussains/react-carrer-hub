import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import { useEffect, useState } from "react";
import { CiDollar } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const Applied = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setJobs] = useState([]);
  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    const jobsApplied = [];
    if (jobs.length > 0) {
      // const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      for (const id of storedJobIds) {
        const job = jobs.find((job) => job.id === id);
        jobsApplied.push(job);
      }
      console.log(jobsApplied, jobs, storedJobIds);
    }
    setJobs(jobsApplied);
  }, []);
  return (
    <div className="md:flex flex-wrap justify-center my-10 gap-6">
      {appliedJobs.map((job) => (
        <div key={job.id} className=" border rounded-2xl flex flex-col">
          <div className="m-7">
            <figure className="w-28 h-9">
              <img className="w-full" src={job.logo} alt="" />
            </figure>
            <h2 className="text-xl font-semibold mt-6 mb-2">{job.job_title}</h2>
            <button className="px-5 py-2 border rounded border-[#7E90FE] font-extrabold mr-4 text-[#7E90FE]">
              {job.remote_or_onsite}
            </button>
            <button className="px-5 py-2 border rounded border-[#7E90FE] font-extrabold mr-4 text-[#7E90FE]">
              {job.job_type}
            </button>
            <h2 className="flex items-center my-4">
              <CiLocationOn className="mr-2" />
              {job.location}
            </h2>
            <h2 className="flex items-center mb-6">
              <CiLocationOn className="mr-2" />
              {job.salary}
            </h2>
            <button className="bg-[#7E90FE] py-2 px-4 text-white rounded flex-grow">
              Apply Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Applied;
