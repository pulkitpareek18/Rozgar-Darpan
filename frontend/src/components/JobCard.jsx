import React from "react";

function JobCard({ jobTitle, company, companyLogo, location, datePosted, agoTime, salary, jobUrl }) {
  return (
    <a 
      href={jobUrl} 
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 m-4"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <img 
        className="object-cover w-full h-24 rounded-t-lg md:h-auto md:w-36 md:rounded-none md:rounded-l-lg" 
        src={companyLogo} 
        alt={`${company} Logo`}
      />
      <div className="flex flex-col justify-between px-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {jobTitle}
        </h5>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {company} - {location}
        </p>
        {/* Salary and Date Posted fields */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
          <span className="font-semibold">Salary:</span> {salary ? salary : "Not Disclosed"}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          <span className="font-semibold">Date Posted:</span> {datePosted}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          Posted {agoTime}
        </p>
      </div>
    </a>
  );
}

export default JobCard;