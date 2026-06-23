const PageHeader = ({
  title,
  buttonText,
  onClick
}) => {

  return (

   <div className="page-header">

      <h1 className="page-title">
        {title}
      </h1>

      {
        buttonText &&
        (
          <button
            onClick={onClick}
            className="page-header-btn"
          >
            {buttonText}
          </button>
        )
      }

    </div>

  );
};

export default PageHeader;