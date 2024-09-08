import linkedIn from 'linkedin-jobs-api';

export const jobApi = (req, res) => {

    const queryOptions = req.body;

    linkedIn.query(queryOptions).then(response => {
        res.json(response);
    });
}


// Parameter	  LinkedIn Default value	      Description
// keyword		            ""                    string - The text to search: (i.e. Software Developer)
// location		            ""                    string - The name of the city: (i.e. Los Angeles)
// dateSincePosted		    ""                    string - Max range of jobs: past month, past week, 24hr
// jobType		            ""                    string - Type of position: full time, part time, contract, temporary, volunteer, internship
// remoteFilter		        ""                    string - Filter telecommuting: on site, remote, hybrid
// salary		            ""                    string - Minimum Salary: 40000, 60000, 80000, 100000, 120000
// experienceLevel		    ""                    string - internship, entry level, associate, senior, director, executive
// limit		            ""                    string - Number of jobs returned: (i.e. '1', '10', '100', etc)
// sortBy		            ""                    string - recent, relevant