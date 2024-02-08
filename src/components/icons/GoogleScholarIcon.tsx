export const GoogleScholarIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Outer box */}
      <rect width="24" height="24" rx="3" fill="currentColor"/>
      {/* Letter 'g' */}
      <text x="50%" y="50%" dy=".35em" fill="white" fontSize="14" fontFamily="Arial, sans-serif" textAnchor="middle">g</text>
    </svg>
  );
};
