import './CompanyCard.css'

function CompanyCard({name, description}) {
  return (
    <div className="card-body p-3 rounded-3 custom-card my-4">
      <h5 className="card-title">{name}</h5>
      <p className="card-text">{description}</p>
    </div>
  );
}

export default CompanyCard;