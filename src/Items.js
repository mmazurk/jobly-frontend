import ItemCard from "./ItemCard";
import { v4 as uuid } from "uuid";
import { useContext } from "react";
import UserContext from "./UserContext";

function Items({ itemList, cardType }) {
  console.log(itemList);
  console.log(cardType);
  const {token} = useContext(UserContext);
  console.log("The token is", token);


  return (
    <div className="container-fluid mt-4">
      <div className="col-md-6 mx-auto">
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              id="search"
              className="form-control"
              placeholder="Enter search term"
            />
          </div>
          <div className="col-4">
            <button className="btn btn-primary">Search</button>
          </div>
        </div>

        {cardType === "companies"
          ? itemList.map((item) => (
              <ItemCard
                key={uuid()}
                type="company"
                data={{ name: item.name, description: item.description }}
              />
            ))
          : cardType === "jobs"
          ? itemList.map((item) => (
              <ItemCard
                key={uuid()}
                type="job"
                data={{
                  title: item.title,
                  companyName: item.companyName,
                  salary: item.salary,
                  equity: item.equity,
                }}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Items;
