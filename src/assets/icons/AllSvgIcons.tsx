export const Stethoscope = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="rgba(0,0,0,0.45)" strokeWidth="1.5">
        <path d="M9 14.235V17a5 5 0 0 0 5 5h.882a4.12 4.12 0 0 0 3.964-3" />
        <path
          strokeLinecap="round"
          d="M5.429 3h-.092c-.313 0-.47 0-.601.012a3 3 0 0 0-2.724 2.724C2 5.868 2 6.024 2 6.336v.9a7 7 0 0 0 7 7a6.714 6.714 0 0 0 6.714-6.715V6.337c0-.313 0-.47-.011-.601a3 3 0 0 0-2.724-2.724C12.847 3 12.69 3 12.377 3h-.091"
        />
        <circle cx="19" cy="16" r="3" />
        <path strokeLinecap="round" d="M12 2v2M6 2v2" />
      </g>
    </svg>
  );
};

export const Warning = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <g className="alert-outline">
        <g fill="rgba(0,0,0,0.45)" className="Vector">
          <path
            fillRule="evenodd"
            d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 8a8 8 0 1 0 0-16a8 8 0 0 0 0 16"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M12 14a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1"
            clipRule="evenodd"
          />
          <path d="M11 16a1 1 0 1 1 2 0a1 1 0 0 1-2 0" />
        </g>
      </g>
    </svg>
  );
};
