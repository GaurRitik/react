import {useState} from "react";
import {FaMapMarker} from "react-icons/fa";
import Proptypes from "prop-types";

const JobListing = ({job}) => {
  const [showFullDescription,setShowFullDescription] = useState(false);
  let description = job.description;
  if(!showFullDescription){
    description= description.substring(0,90)+"....";
  }
  return (
    <>
      <div className="bg-white rounded-xl shadow-md relative">
        <div className="p-4">
          <div className="mb-6">
            <div className="text-gray-600 my-2">Remote</div>
            <h3 className="text-xl font-bold">{job.title}</h3>
          </div>

          <div className="mb-5">{description}
          <button className="block px-2 py-1 mt-1 rounded-md text-white bg-indigo-500 border border-indigo-500" onClick={()=>setShowFullDescription((prevState)=>!prevState)} >{showFullDescription?"Less":"More"}</button>
          </div>

          <h3 className="text-indigo-500 mb-2">{job.salary}/ Year</h3>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1"/>
              {job.location}
            </div>
            <a
              href="job.html"
              className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

JobListing.propTypes={
    job:Proptypes.object
}

export default JobListing;
