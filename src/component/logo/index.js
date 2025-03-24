import './style.scss';

function Logo({ theme }) {
  return (
    <div className="logo-container">
      <svg xmlns="http://www.w3.org/2000/svg" width="148" height="41" viewBox="0 0 143 41">
        <text
          className={theme === 'logo-light' ? 'cls-5' : 'cls-1'}
          x="50%"
          y="15"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
        >
          GEOMOK
        </text>
        <text
          className={theme === 'logo-light' ? 'cls-5' : 'cls-1'}
          x="50%"
          y="35"
          textAnchor="middle"
          fontSize="16"
          fontWeight="bold"
        >
          TECH
        </text>
      </svg>

      {/* Additional logo graphic */}
      <svg width="40" height="40" viewBox="0 0 259 266" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M113.467 11.6667L110.267 23..."
          fill="#354185"
        />
        <path
          d="M121.2 49.5334C116 54.8667..."
          fill="#E41A1A"
        />
      </svg>
    </div>
  );
}

export default Logo;
