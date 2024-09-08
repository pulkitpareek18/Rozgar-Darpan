import React, { useEffect, useState } from 'react'
import HorizontalCard from '../components/JobCard'
const backendUrl = import.meta.env.VITE_BACKEND_URL;
import axios from 'axios';
import Loader from '../components/Loader';
import { useDispatch } from 'react-redux';
import { hideLoader, showLoader } from '../features/loaderSlice';

const Home = () => {
  const dispatch = useDispatch();

  const [jobs, setJobs] = useState([{
    "position": "Frontend Developer",
    "company": "Jio",
    "companyLogo": "https://media.licdn.com/dms/image/v2/C4D0BAQESqmIRc7VGFA/company-logo_100_100/company-logo_100_100/0/1655473519487/jio_logo?e=2147483647&v=beta&t=UB6VI3Z-jFxajyLsUfGCQH4VORUM0e8yec13wu2Yexg",
    "location": "Bengaluru East, Karnataka, India",
    "date": "2024-09-06",
    "agoTime": "2 days ago",
    "salary": "",
    "jobUrl": "https://in.linkedin.com/jobs/view/frontend-developer-at-jio-4017332063?position=1&pageNum=0&refId=Rta1WMTUd3GQr0mo9tN2ug%3D%3D&trackingId=%2BYA6qD8FXcqpgiK10YYSsg%3D%3D&trk=public_jobs_jserp-result_search-card"
  }]);

    useEffect(() => {

    const fetchJobs = async () => {
      try {
        // Use Axios to fetch data
        dispatch(showLoader());
        const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/v1/jobapi`,
          { 
              "keyword": "Software Engineer",
              "location": "India",
              "dateSincePosted": "past week",
              "jobType": "",
              "remoteFilter": "",
              "salary": "",
              "experienceLevel": "",
              "limit": "50"
            } 
          
        );
        setJobs(response.data);
        dispatch(hideLoader())
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // setError(error);
      }
    };
    fetchJobs();

  }, []);



  return (
    <>
    <div className="container">
    {jobs.map((job, index) => (
        <HorizontalCard
          key={index}
          jobTitle={job.position}
          company={job.company}
          companyLogo={job.companyLogo}
          location={job.location}
          datePosted={job.date}
          agoTime={job.agoTime}
          salary={job.salary}
          jobUrl={job.jobUrl}
        />
      ))}
    </div>
     
    </>
  )
}

export default Home