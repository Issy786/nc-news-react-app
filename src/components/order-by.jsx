export const OrderBy = ({ setSearchParams }) => {
  return (
    <div>
      <span>
        <button
          className="order-by-buttons"
          onClick={() => setSearchParams({ order_by: "DESC" })}
        >
          Top
        </button>{" "}
        <button
          className="order-by-buttons"
          onClick={() => setSearchParams({ order_by: "ASC" })}
        >
          Bottom
        </button>
      </span>
    </div>
  );
};
