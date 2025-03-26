import React from "react";

const Home = () => {
  // Define the image URL as a variable (correct syntax)
  const imageUrl = "https://media.licdn.com/dms/image/v2/D5603AQEF4pUeMvFhng/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731469019825?e=2147483647&v=beta&t=Im3OEVGpaEUcAifB-MsP1sQl5FdISeih-n5yS_dgZos";

  return (
    <div className="home">
      <h1>Welcome</h1>
      {/* Use the image URL properly in an <img> tag */}
      <img src={imageUrl} alt="Tejashwini Profile" className="profile-image" />
      <p>Hello, my name is <span className="highlight">Tejashwini</span>.</p>
      <p>I am passionate about learning, growing, and building amazing projects.</p>
    </div>
  );
};

export default Home;
