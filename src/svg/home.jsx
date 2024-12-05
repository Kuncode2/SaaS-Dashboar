import React from "react";

const Home = ({ dark }) => {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.34416 4.05681C9.23548 3.08798 10.7645 3.08798 11.6558 4.05681L15.5097 8.24583C16.1466 8.93801 16.5 9.84423 16.5 10.7848V14.1147C16.5 15.6335 15.2688 16.8647 13.75 16.8647H12C11.1716 16.8647 10.5 16.1931 10.5 15.3647V13.3647H9.5V15.3647C9.5 16.1931 8.82843 16.8647 8 16.8647H6.25C4.73122 16.8647 3.5 15.6335 3.5 14.1147V10.7848C3.5 9.84423 3.85345 8.93801 4.49026 8.24583L8.34416 4.05681ZM10.5519 5.07239C10.2548 4.74945 9.74516 4.74945 9.44805 5.07239L5.59416 9.26141C5.21207 9.67672 5 10.2205 5 10.7848V14.1147C5 14.8051 5.55964 15.3647 6.25 15.3647H8V13.3647C8 12.5363 8.67157 11.8647 9.5 11.8647H10.5C11.3284 11.8647 12 12.5363 12 13.3647V15.3647H13.75C14.4404 15.3647 15 14.8051 15 14.1147V10.7848C15 10.2205 14.7879 9.67672 14.4058 9.26141L10.5519 5.07239Z"
        fill={`${dark ? "#1E1E1E" : "#ffffff"}`}
      />
    </svg>
  );
};

export default Home;