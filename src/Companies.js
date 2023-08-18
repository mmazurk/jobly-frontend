import CompanyCard from "./CompanyCard";
import { v4 as uuid } from "uuid";

function Companies({ companyList }) {
  console.log(companyList);

  return (
    <div className="container-fluid mt-4">
      <div className="col-md-6 mx-auto">
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              id="search"
              class="form-control"
              placeholder="Enter search term"
            />
          </div>
          <div className="col-4">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        {companyList.map((item) => (
          <CompanyCard
            key={uuid()}
            name={item.name}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Companies;
