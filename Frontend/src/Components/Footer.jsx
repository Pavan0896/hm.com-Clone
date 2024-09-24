import React from "react";
import { useThemeContext } from "./ThemeContext/themeContext";

const Footer = () => {
  const { theme } = useThemeContext();
  const colour = theme === "light" ? "black" : "white";
  return (
    <div style={{ backgroundColor: theme === "light" ? "#f0f0f0" : "black" }}>
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a
                href="https://www2.hm.com/en_in/index.html"
                className="nav-link px-2 "
                style={{ color: colour }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www2.hm.com/en_in/customer-service.html"
                className="nav-link px-2 "
                style={{ color: colour }}
              >
                Customer Service
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www2.hm.com/en_in/customer-service/contact.html"
                className="nav-link px-2 "
                style={{ color: colour }}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www2.hm.com/en_in/customer-service/legal-and-privacy/privacy-link.html"
                className="nav-link px-2 "
                style={{ color: colour }}
              >
                Legal & Privacy
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://hmgroup.com/about-us/"
                className="nav-link px-2 "
                style={{ color: colour }}
              >
                About
              </a>
            </li>
          </ul>
          <p
            className="text-center text-body-secondary"
            style={{ marginLeft: "48%" }}
          >
            <svg
              viewBox="0 0 200 132"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="hmdefault-logo"
              style={{ height: "20px" }}
              className="logo"
            >
              <title id="hmdefault-logo">H&amp;M</title>
              <path
                d="M94.378.062c-1.39-.335-4.266.748-7.295 1.888-2.33.877-4.749 1.788-6.65 2.113-1.389.238-2.72 1.72-3.178 2.767a1250.033 1250.033 0 0 0-18.713 45.388 476.105 476.105 0 0 0-24.188 4.794c6.503-16.72 13.092-33.208 19.519-49.08 3.162-7.81-5.162-8.547-8.392-.63l-.206.503c-4.237 10.392-11.984 29.386-20.54 51.47A516.167 516.167 0 0 0 4.483 64.68c-5.146 1.486-5.368 2.857-3.14 5.944.689.955 1.776 1.326 2.805 1.677.823.281 1.61.55 2.125 1.094.646.682 1.236 1.392 1.819 2.093 2.132 2.563 4.16 5.001 8.383 5.452-4.803 12.82-9.594 26.039-13.933 38.768-2.724 7.99 5.039 9.625 8.021 1.171 4.808-13.629 9.883-27.425 15.086-41.179 3.688-.857 11.837-2.621 20.163-4.424l.005-.001 4.377-.948c-7.706 21.094-12.772 37.117-14.68 44.914-.323 1.324.114 2.128.436 2.719.043.079.083.154.12.226 1.246 1.816 2.463 2.795 3.763 3.841 1.406 1.131 2.907 2.339 4.647 4.768.91 1.275 3.94 1.962 4.978-1.175 7.127-21.543 14.46-41.755 21.305-59.876 2.841-.622 7.956-1.856 11.09-6.527 3.483-5.194 5.414-6.474 6.699-7.325.766-.508 1.302-.863 1.8-1.805 1.673-3.163.566-6.134-5.377-5.4 0 0-2.244.16-6.384.632 2.77-7.133 5.395-13.81 7.815-19.968v-.003c3.331-8.476 6.275-15.967 8.68-22.305 1.407-3.71 1.595-6.426-.708-6.98ZM140.484 4.007c7.256-3.577 10.858-3.1 10.936.512.101 4.608-.566 10.686-1.06 15.187l-.03.274c-.899 8.195-2 15.89-3.081 23.444-2.157 15.077-4.233 29.59-4.461 46.388 11.859-30.703 21.808-52.042 34.61-78.329 3.133-6.437 5.391-6.997 7.787-7.592.717-.178 1.446-.359 2.215-.701 13.017-5.792 13.505-2.234 11.804 4.838-6.317 26.244-22.455 108.852-24.927 121.571-.717 3.68-4.71 2.121-5.753.681-2.057-2.843-4.229-4.444-5.957-5.718-2.165-1.596-3.634-2.679-3.309-5.049 2.904-21.207 13.357-74.414 16.082-86.953-13.902 28.484-28.308 64.09-35.704 84.278-1.572 4.287-4.426 3.973-6.206.836-.978-1.722-2.315-3.115-3.629-4.483-2.049-2.133-4.041-4.207-4.529-7.378-1.647-10.726.058-27.747 1.67-43.833.876-8.743 1.724-17.21 1.991-24.24-7.564 21.805-20.265 64.144-25.828 83.273-2.301 7.915-9.936 6.623-7.907-1.091 8.456-32.102 26.663-88.878 34.549-109.296 1.316-3.407 4.146-4.31 7.119-5.26 1.213-.388 2.45-.783 3.618-1.359Z"
                fill="#E50010"
              ></path>
              <path
                d="M85.55 97.56a42.278 42.278 0 0 1 1.561-1.44c3.569-3.093 6.977-.025 3.449 5.204a59.27 59.27 0 0 1-2.557 3.526c.446 1.271.844 2.365 1.16 3.176 1.825 4.678-2.966 5.851-4.51 1.976a88.444 88.444 0 0 1-.42-1.078c-2.913 2.58-6.28 4.204-9.88 3.085-5.92-1.842-7.427-10.178-1.899-16.6 2.218-2.577 3.887-4.365 5.282-5.793-.42-1.375-.76-2.528-.983-3.335-.718-2.6-1.366-5.63 1.236-8.719 4.88-5.79 16.2-.65 10.474 8.264-1.38 2.147-2.992 4.175-4.674 6.231a530.665 530.665 0 0 0 1.761 5.503Zm-7.04 1.149c-2.912 3.998-1.188 5.421.975 4.097a17.54 17.54 0 0 0 2.036-1.486 406.179 406.179 0 0 1-1.524-4.577 75.337 75.337 0 0 0-1.488 1.966Zm3.303-13.187a53.206 53.206 0 0 0 1.546-1.67c3.605-4.07-3.522-5.773-1.881.452.092.351.207.764.335 1.218Z"
                fill="#E50010"
              ></path>
            </svg>
          </p>
        </footer>
      </div>
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
            <span className="mb-3 mb-md-0 " style={{ color: colour }}>
              © 2024 Company, Inc
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#twitter"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default React.memo(Footer);
