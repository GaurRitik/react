import { useState, useEffect } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const JobListings = ({ isHome = false }) => {
  // for fetching jobs from server
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  //to fetch data according to pages
  const apiURL = isHome
    ? "http://localhost:5000/jobs?_limit=3"
    : "http://localhost:5000/jobs";

  useEffect(() => {
    //get jobs from server
    const fetchJobs = () => {
      setInterval(async () => {
        try {
          const res = await fetch(apiURL);
          const data = await res.json();
          setJobs(data);
        } catch (err) {
          console.log("Error fetching data: ", err);
        } finally {
          setLoading(false);
        }
      }, 1500);
    };

    fetchJobs();
  }, []);

  // const jobListings = isHome ? jobs.slice(0,3): jobs;
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobListing job={job} key={job.id} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

JobListings.propTypes = {
  isHome: PropTypes.bool,
};

export default JobListings;
