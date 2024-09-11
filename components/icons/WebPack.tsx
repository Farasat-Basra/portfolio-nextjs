export function IconWebpack(props: React.SVGProps<SVGSVGElement>) {
    return (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="4em"
        width="4em"
        {...props}
      >
        <polygon points="12 2 22 8 22 16 12 22 2 16 2 8 12 2" />
        <path d="M2 8l10 6 10-6" />
        <path d="M12 2v20" />
      </svg>
    );
  }