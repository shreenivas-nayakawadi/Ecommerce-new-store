const NoResults = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 w-full text-center space-y-4 animate-fade-in">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
        <svg
          className="w-12 h-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">No results found</h3>
        <p className="text-gray-500 max-w-sm">
          We couldn't find any products matching your criteria. Try adjusting your filters or search terms.
        </p>
      </div>
    </div>
  );
};

export default NoResults;