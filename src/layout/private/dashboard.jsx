import { useNavigate } from "react-router";
import { LoginContext } from "../../appMain";
import { useContext } from "react";

import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Dashboard = () => {
  const loginContext = useContext(LoginContext);

  const navigate = useNavigate();

  const logout = () => {
    console.log("Logging out");
    loginContext?.setLoggedIn(false);
    localStorage.removeItem("login-token");
    navigate("/login");
  };

  return (
    <div style={{ }}>
      <h1>Dashboard</h1>

      <Slider {...settings}>
        <div>
          <ImageSlide title={"Image 1"} src="https://www.andbeyond.com/wp-content/uploads/sites/5/nepal-village.jpg" />
        </div>
        <div>
          <ImageSlide title={"Image 2"} src="https://www.progreen.info/sites/default/files/2021-10/img_Nepal_0_0.jpg" />
        </div>
        <div>
          <ImageSlide title={"Image 3"} src="https://www.telegraph.co.uk/content/dam/Travel/leadAssets/35/50/nepal-village_3550720a.jpg?imwidth=680" />
        </div>
        <div>
          <ImageSlide title={"Image 4"} src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/95553f94d93aea6a42ea8ee16315830ac41fcd7a/big-742b52a5e89568dd813531fc63897836.jpg" />
        </div>
      </Slider>

      <button style={{ 

        marginTop: 50
       }} onClick={logout} >Logout</button>
    </div>
  );
};

export default Dashboard;

const ImageSlide = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.src} width={600} height={600} />
    </div>
  );
};
