import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Dropdown } from "react-bootstrap";
import {
  TbSortAscendingLetters,
  TbSortDescendingLetters,
} from "react-icons/tb";

const Table = () => {
  const [tableRows, setTableRows] = useState([]);
  const [selectedId, setSelectedId] = useState(tableRows.id);

  useEffect(() => {
    const getData = async () => {
      const { body } = await fetch("/src/data/MOCK_DATA.csv");
      const reader = body.getReader();
      const res = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvTxt = decoder.decode(res.value);
      const resData = Papa.parse(csvTxt, { header: true });
      const dataRows = resData.data;
      // console.log(dataRows);
      setTableRows(dataRows);
      return dataRows;
    };
    getData();
  }, []);

  const handleSortAsc = (prop) => {
    let arr = [...tableRows].sort((a, b) => {
      if (
        prop === "id" ||
        prop === "ip_address" ||
        prop === "mobile" ||
        prop === "time"
      ) {
        return a[prop]?.toLowerCase() - b[prop]?.toLowerCase();
      }
      return a[prop]?.toLowerCase() > b[prop]?.toLowerCase() ? 1 : -1;
    });
    setTableRows(arr);
  };

  const handleSortDesc = (prop) => {
    let arr = [...tableRows].sort((a, b) => {
      if (
        prop === "id" ||
        prop === "ip_address" ||
        prop === "mobile" ||
        prop === "time"
      ) {
        return b[prop]?.toLowerCase() - a[prop]?.toLowerCase();
      }
      return b[prop]?.toLowerCase() < a[prop]?.toLowerCase() ? -1 : 1;
    });
    setTableRows(arr);
  };

  const handleColorChange = (id) => {
    setSelectedId(id);
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Id</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("id")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("id")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>First Name</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("first_name")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("first_name")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Last Name</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("last_name")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("last_name")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Email</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("email")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("email")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Gender</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("gender")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("gender")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Mobile Number</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("mobile")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("mobile")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Airport Code</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("airport code")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("airport code")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Area</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("area")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("area")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Edit</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("edit")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("edit")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>IP Address</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("ip_address")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("ip_address")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Show</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("show")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("show")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Status</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("status")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("status")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
          <th>
            <div className="d-flex justify-content-between align-items-center">
              <div>Time</div>
              <Dropdown className="d-inline mx-2 bg-transparent">
                <Dropdown.Toggle id="dropdown-autoclose-true"></Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#">
                    <TbSortAscendingLetters
                      onClick={() => handleSortAsc("time")}
                      className="icon-up"
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#">
                    <TbSortDescendingLetters
                      onClick={() => handleSortDesc("time")}
                      className="icon-dn"
                    />
                  </Dropdown.Item>
                  
                </Dropdown.Menu>
              </Dropdown>
              <div className="d-grid gap-4"></div>
            </div>
          </th>
        </tr>
        {/* TbSortAscendingLetters */}
        {/* TbSortAscendingNumbers */}
      </thead>
      <tbody>
        {tableRows.map((data) => (
          <tr
            key={data.id}
            onClick={() => handleColorChange(data.id)}
            className={data.id === selectedId ? "bg-info" : ""}
          >
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
            <td
              className={
                data.status === "true" ? "text-success" : "text-danger"
              }
            >
              {data.status}
            </td>
            <td>{data.time}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
