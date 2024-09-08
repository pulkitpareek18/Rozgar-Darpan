import { Login } from "../model/login.model.js";
import { Recruiter } from "../model/recruiter.model.js";
// user register
export const postUser = async (req, res) => {
  try {
    const user = await Login.create(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//recruiter register
export const postRecruiter = async (req, res) => {
  try {
    const recruiter = await Recruiter.create(req.body);
    res.status(200).json(recruiter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//updating job
export const putJob = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Recruiter.findByIdAndUpdate(id, req.body);
    if (!job) {
      return res.status(404).json({ message: "not found" });
    }
    const updateJob = await Book.findById(id);
    res.status(200).json(updateJob);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//deleting job

export const deleteJob = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedJob = await Recruiter.findByIdAndDelete(id);
    if (!deletedJob) {
      return res.status(404).json({ message: "Job is not provided" });
    }
    res.status(200).json({ message: "Job deleted successfully by given ID." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
