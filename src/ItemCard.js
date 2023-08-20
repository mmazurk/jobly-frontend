import "./ItemCard.css";

function ItemCard({type, data }) {

  if (type === "company") {
    return (
      <div className="card-body p-3 rounded-3 custom-card my-4">
        <h5 className="card-title">{data.name}</h5>
        <p className="card-text">{data.description}</p>
      </div>
    );
  }

  if (type === "job") {
    return (
      <div className="card-body p-3 rounded-3 custom-card my-4">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.companyName}</p>
        <p className="mb-0">Salary: ${data.salary}</p>
        <p className="card-text">Equity: {data.equity}</p>
      </div>
    );
  }
}

export default ItemCard;
