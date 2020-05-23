import styled from "@emotion/styled";
import React from "react";

export default function Icon() {
  return (
    <Wrapper>
      Prix-fixe
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="12" fill="currentColor" />
        <rect
          x="6"
          y="5"
          width="9.07713"
          height="12.1028"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.3942 8.87642C10.4533 8.75083 10.6243 8.75083 10.6835 8.87642L11.2597 10.0997C11.2832 10.1496 11.3287 10.1842 11.3812 10.1922L12.6698 10.3883C12.8021 10.4085 12.8549 10.5788 12.7592 10.6766L11.8267 11.6288C11.7887 11.6676 11.7714 11.7235 11.7804 11.7783L12.0005 13.1229C12.0231 13.2609 11.8848 13.3662 11.7665 13.301L10.6139 12.6662C10.5669 12.6403 10.5107 12.6403 10.4638 12.6662L9.31117 13.301C9.19284 13.3662 9.05454 13.2609 9.07714 13.1229L9.29726 11.7783C9.30624 11.7235 9.28889 11.6676 9.25088 11.6288L8.31842 10.6766C8.22268 10.5788 8.27551 10.4085 8.40781 10.3883L9.69644 10.1922C9.74897 10.1842 9.79439 10.1496 9.81788 10.0997L10.3942 8.87642Z"
          fill="white"
        />
        <path
          d="M7.805 17.1027L7.51013 18.2031L16.278 20.5525L19.4104 8.86203L15.4526 7.80154"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled("div")`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  grid-gap: 8px;
  color: #4d1fd6;
  font-size: 14px;
  font-weight: 500;
`;
