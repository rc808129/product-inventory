const AuthLayout = ({
  title,
  children
}) => {

  return (
    <div
      className="
      min-h-screen
      flex
      justify-center
      items-center
      bg-gray-100"
    >
      <div
        className="
        bg-white
        p-8
        rounded-lg
        shadow-lg
        w-full
        max-w-md"
      >
        <h2
          className="
  text-2xl
  font-bold
  mb-6
  text-center
  text-blue-600"
        >
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
};

export default AuthLayout;