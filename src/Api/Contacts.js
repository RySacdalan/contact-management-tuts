import axios from "axios";

//this is axios base file.
export default axios.create({
  baseURL: " http://localhost:8000/",
});
