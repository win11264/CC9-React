import "./lab2.css";

function LabList() {
  return (
    <div>
      <div className="list">
        <p id="firstLine">Task 1</p>
        <button className="button">Edit</button>
        <button className="button">Del</button>
      </div>

      <div className="list">
        <p id="secLine">Task 2</p>
        <button className="button">Edit</button>
        <button className="button">Del</button>
      </div>
    </div>
  );
}

export default LabList;
