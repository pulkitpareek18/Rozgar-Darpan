import mongoose from "mongoose";
const RecruiterSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is not provided"],
    },
    contact: {
      type: Number,
      required: [true, "Phone is not provided"],
    },
    email: {
      type: String,
      required: [true, "Email is not provided."],
    },
    organization: {
      type: String,
      required: [true, "Organization is not provided"],
    },
    job: {
      type: String,
      required: [true, "Please enter about type of the job."],
    },
    salary: {
      type: Number,
      required: [false],
    },
  },
  {
    timestamps: true,
  }
);

export const Recruiter = mongoose.model("LoginRecruiter", RecruiterSchema);
