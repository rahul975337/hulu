import { MovieSharp } from "@material-ui/icons";
import Axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import requests from "../requests";
function Results() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(requests.fetshActionMovies);
      console.log(request);
    }
    fetchData();
  }, []);
  return (
    <div className="results">
      
    </div>
  );
}

export default Results;
