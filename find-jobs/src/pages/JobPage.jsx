import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const JobPage = () => {
  const [loading, setLoading] = useState(true);

  //destructuring
  const {id} = useParams();
  const [job, setJob] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        setInterval(async() => {
          // console.log(id);
        const res = await fetch(`/api/jobs/${id}`);
        // console.log(res);
        const data = await res.json();
        setJob(data);
        }, 2000);
      } catch (err) {
        console.log("Error in job page: ", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>{loading ? <Spinner loading={loading} /> : <div>{job.title}</div>}</>
  );
};

export default JobPage;
