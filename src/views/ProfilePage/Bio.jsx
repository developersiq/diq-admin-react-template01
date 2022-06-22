import React from "react";
import"../../Component/assets/css/Profile.css";

const Bio = (props) => {
  return (
    <React.Fragment>
          <div className="row">
            <div class="profile-sec p-4 mb-4">
                    <div class="bio">
                      <h4>Bio</h4>
                      <p>It is a long established fact that a reader will be distracted by the 
                        readable content of a page when looking at its layout. The point of 
                        using Lorem Ipsum is that it has a more-or-less normal distribution 
                        of letters, as opposed to using 'Content here, content here', making 
                        it look like readable English. Many desktop publishing packages and 
                        web page editors now use Lorem Ipsum as their default model text. </p>
                    </div>  
                  </div>
          </div>
    </React.Fragment>
  );
};

export default Bio;
