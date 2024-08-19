const FoodCard = ({item}) => {
    const {name,image,price,recipe}=item;
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={image}
          alt="{name}"
          className="rounded-xl"
        />
      </figure>
      <p className=" bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center ">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          Add to Card
        </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
