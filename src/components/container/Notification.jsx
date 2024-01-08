import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const notifications = [
  {
    message: "Notification 1",
    timestamp: "2022-01-05T12:34:56",
  },
  {
    message: "Notification 2",
    timestamp: "2022-01-05T13:45:00",
  },
  // Add more notifications as needed
];

const NotificationCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
};

export const Notification = () => {
  return (
    <>
      <div className="main-div main-div-bgcolor">
        <div className="notification-container">
          <div className="notification-title">Notification</div>
          <div className="notification-body">
            <p>Truck No. A313 is out from mines</p>
          </div>
        </div>
      </div>
    </>
  );
};
