export const AppIcon = () => {
  return (
    <div className="self-center">
      <h6 className="text-primary-700 flex items-center gap-3   dark:text-primary font-semibold text-xl">
        <img
          className="size-10  p-1 object-fill rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          // src="/images/farasat.png"
          src="/images/projects/940.png"
          alt="Bordered avatar"
          onError={(e) => (e.currentTarget.src = "/images/farasat.png")}
        />
        {/* Farasat Ali */}
      </h6>
    </div>
  );
};
