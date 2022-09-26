import PropTypes from 'prop-types';

function Logo({ scheme, ...props }) {
  return (
    <>
      {scheme === 'light' ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 42 42"
          {...props}>
          <path
            fill="#fff"
            d="M0 21C0 0 0 0 21 0s21 0 21 21 0 21-21 21S0 42 0 21z"
          />
          <path
            fill="url(#paint0_linear)"
            fillOpacity="0.1"
            d="M3 21C3 3 3 3 21 3s18 0 18 18 0 18-18 18S3 39 3 21z"
          />
          <rect
            width="14.778"
            height="3"
            x="17"
            y="15"
            fill="#2753F0"
            rx="1.5"
          />
          <rect
            width="17.889"
            height="3"
            x="11.556"
            y="20.444"
            fill="#2753F0"
            rx="1.5"
          />
          <rect
            width="3.889"
            height="3"
            x="10"
            y="26.667"
            fill="#2753F0"
            rx="1.5"
          />
          <rect
            width="9.333"
            height="3"
            x="14.667"
            y="26.667"
            fill="#2753F0"
            rx="1.5"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="3"
              x2="32.5"
              y1="5.5"
              y2="36"
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#5278FF" />
              <stop offset="1" stopColor="#2753F0" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          {...props}>
          <path
            d="M0 21C0 0 0 0 21 0s21 0 21 21 0 21-21 21S0 42 0 21z"
            fill="#2753F0"
          />
          <path
            d="M3 21C3 3 3 3 21 3s18 0 18 18 0 18-18 18S3 39 3 21z"
            fill="url(#prefix__paint0_linear)"
          />
          <rect x={17} y={15} width={14.778} height={3} rx={1.5} fill="#fff" />
          <rect
            x={11.556}
            y={20.444}
            width={17.889}
            height={3}
            rx={1.5}
            fill="#fff"
          />
          <rect
            x={10}
            y={26.667}
            width={3.889}
            height={3}
            rx={1.5}
            fill="#fff"
          />
          <rect
            x={14.667}
            y={26.667}
            width={9.333}
            height={3}
            rx={1.5}
            fill="#fff"
          />
          <defs>
            <linearGradient
              id="prefix__paint0_linear"
              x1={3}
              y1={5.5}
              x2={32.5}
              y2={36}
              gradientUnits="userSpaceOnUse">
              <stop stopColor="#5278FF" />
              <stop offset={1} stopColor="#2753F0" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  );
}

Logo.defaultProps = {
  scheme: 'dark',
};

Logo.propTypes = {
  scheme: PropTypes.oneOf(['light', 'dark']),
};

export default Logo;
