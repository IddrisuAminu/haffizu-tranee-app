import { useContext, useEffect } from "react";
import { Table } from "react-bootstrap";
import { TraineesContext } from "../contexts/TraineesContext";
import { FiEdit, FiDelete, FiEye } from "react-icons/fi";
import { CubeSpinner } from "react-spinners-kit";

function Trainees() {
  const { loading, trainees, getTrainees } = useContext(TraineesContext);

  useEffect(() => {
    getTrainees();
    // eslint-disable-next-line
  }, []);

  return (
    <section>
      {loading && <CubeSpinner size={40} color="#686769" />}
      {trainees.length > 0 ? (
        <Table className="table-hover table-striped">
          <thead>
            <tr>
              <th>NAME</th>
              <th>DESTINATION</th>
              <th>EMAIL</th>
              <th>DOB</th>
              <th>EDIT</th>
            </tr>
          </thead>
          <tbody>
            {trainees.map((trainee) => (
              <tr key={trainee._id}>
                <td>{trainee.name}</td>
                <td>{trainee.destination}</td>
                <td>{trainee.email}</td>
                <td>{trainee.dob}</td>
                <td>
                  <FiDelete />
                  <FiEdit />
                  <FiEye />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        !loading && <h1>NO RECORDS</h1>
      )}
    </section>
  );
}

export default Trainees;
