import mongoose from "mongoose";
const LoginSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a valid name"],
    },
    contact: {
      type: Number,
      required: [true, "Phone is not provided"],
    },
    email: {
      type: String,
      required: [true, "Email is not provided."],
    },
    targetJob: {
      type: String,
      required: [true, "Please enter your Target job."],
    },
    skills: {
      type: Array,
      required: [true, "Please enter your skills."],
    },
    about: {
      type: String,
      required: [true, "Please enter a short summary about yourself."],
    },
  },
  {
    timestamps: true,
  }
);

export const Login = mongoose.model("LoginUser", LoginSchema);
