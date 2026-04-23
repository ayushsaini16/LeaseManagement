const Pagination = (props) => {
  const { currentPage, setNext, setPrevious } = props;
  console.log(props);
  const NextPage = () => {
    setNext();
  };
  const PreviousPage = () => {
    setPrevious();
  };

  return (
    <div className="flex gap-2 ml-96 mt-5">
      <button
        className="bg-gray-50 border rounded-xs w-24 p-1 text-black text-sm cursor-pointer"
        onClick={PreviousPage}
      >
        Previous
      </button>
      <button className="bg-gray-50 border rounded-xs w-12 p-1 text-black text-sm cursor-pointer">
        {currentPage}
      </button>
      <button
        className="bg-gray-50 border rounded-xs w-24 p-1 text-black text-sm cursor-pointer"
        onClick={NextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
