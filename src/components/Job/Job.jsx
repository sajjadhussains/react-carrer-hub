import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure className="w-[9.25rem] p-4">
        <img className="w-full" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div>
          <button className="px-5 py-4 border rounded border-[#7E90FE] font-extrabold mr-4 text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-4 border rounded border-[#7E90FE] font-extrabold mr-4 text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <h2 className="flex">
            <MdLocationOn className="mr-2 text-2xl"></MdLocationOn> {location}
          </h2>
          <h2 className="flex items-center">
            <MdLocationOn className="mr-2 text-2xl "></MdLocationOn> {location}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
