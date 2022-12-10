import { useState, useEffect } from "react";
import Papa from "papaparse"
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
} from "react-icons/tb";

const Table = () => {
  const [tableRows, setTableRows] = useState([]);
  // const [newArr, setNewArr] = useState(tableRows);

  useEffect(() => {
    const getData = async () => {
      const { body } = await fetch('/src/data/MOCK_DATA.csv');
      const reader = body.getReader();
      const res = await reader.read();
      const decoder = new TextDecoder('utf-8');
      const csvTxt = decoder.decode(res.value);
      const resData = Papa.parse(csvTxt, { header: true });
      const dataRows = resData.data;
      // console.log(dataRows);
      setTableRows(dataRows);
      return dataRows;
    }
    getData();
  }, []);

  const handleSortAsc = (prop) => {

    let arr = [...tableRows].sort((a, b) => {
      if(prop === "id" || prop === "ip_address" || prop === "mobile" || prop === "time") {
        return a[prop]?.toLowerCase() - b[prop]?.toLowerCase();
      }
      return a[prop]?.toLowerCase() > b[prop]?.toLowerCase() ? 1 : -1;
    });
    setTableRows(arr);
  };

  const handleSortDesc = (prop) => {

    let arr = [...tableRows].sort((a, b) => {
      if(prop === "id" || prop === "ip_address" || prop === "mobile" || prop === "time") {
        return b[prop]?.toLowerCase() - a[prop]?.toLowerCase();
      }
      return b[prop]?.toLowerCase() < a[prop]?.toLowerCase() ? -1 : 1;
    });
    setTableRows(arr);
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Id</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("id")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("id")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>First Name</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("first_name")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("first_name")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Last Name</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("last_name")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("last_name")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Email</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("email")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("email")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Gender</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("gender")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("gender")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Mobile Number</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("mobile")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("mobile")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Airport Code</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("airport code")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("airport code")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Area</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("area")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("area")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Edit</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("edit")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("edit")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>IP Address</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("ip_address")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("ip_address")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Show</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("show")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("show")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Status</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("status")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("status")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Time</div>
              <div className="d-grid gap-4">
                <TbSortAscendingLetters
                  onClick={() => handleSortAsc("time")}
                  className="icon-up"
                />
                <TbSortDescendingLetters
                  onClick={() => handleSortDesc("time")}
                  className="icon-dn"
                />
              </div>
            </div>
          </th>
        </tr>
        {/* TbSortAscendingLetters */}
        {/* TbSortAscendingNumbers */}
      </thead>
      <tbody>
        {tableRows.map((data) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.first_name}</td>
            <td>{data.last_name}</td>
            <td>{data.email}</td>
            <td>{data.gender}</td>
            <td>{data.mobile}</td>
            <td>{data["airport code"]}</td>
            <td>{data.area}</td>
            <td>{data.edit}</td>
            <td>{data.ip_address}</td>
            <td>{data.show}</td>
            <td>{data.status}</td>
            <td>{data.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
