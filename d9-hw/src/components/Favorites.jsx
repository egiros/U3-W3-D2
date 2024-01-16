// src/components/Favorites.jsx
import React from "react";
import { connect } from "react-redux";
import Job from "./Job";

const Favorites = ({ favoriteJobs }) => {
  return (
    <div>
      <h1>Favorites</h1>
      {favoriteJobs.map((jobData) => (
        <Job key={jobData._id} data={jobData} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoriteJobs: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
