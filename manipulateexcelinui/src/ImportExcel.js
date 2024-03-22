import React, { useState } from "react";
import { utils, read } from "xlsx";
import "./ImportExcel.css";

export default function ImportExcel() {
  const [excelData, setExcelData] = useState([]);
  const [showExcelData, setShowExcelData] = useState(false);
  const filetype = [
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.ms-excel",
  ];

  const handleChange = (e) => {
    let uploadFile = e.target.files[0];
    if (uploadFile && filetype.includes(uploadFile.type)) {
      console.log(uploadFile.type);
      const reader = new FileReader();

      reader.onload = (e) => {
        const webhook = read(e.target.result);
        const sheet = webhook.SheetNames;
        if (sheet.length) {
          const data = utils.sheet_to_json(webhook.Sheets[sheet[0]]);
          setExcelData(data);
        }
      };

      reader.readAsArrayBuffer(uploadFile);
      setShowExcelData(true);
    } else {
      alert("Please upload only Excel files, eg .xlx");
    }
  };

  return (
    <div>
      <div className="FileUpload">
        <label>
          <span>Choose a file</span>
          <input type="file" onChange={handleChange} />
        </label>
      </div>

      <div className="display-table">
        {showExcelData ? (
          <table>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Student Roll Number</th>
                <th>Kannada</th>
                <th>English</th>
                <th>Hindi</th>
                <th>Maths</th>
                <th>Science</th>
                <th>Social</th>
                <th>Net Percentage</th>
              </tr>
            </thead>
            <tbody>
              {excelData.map((element, key) => (
                <tr key={key}>
                  <td>{element["Students Name"]}</td>
                  <td>{element["Student Roll Num"]}</td>
                  <td>{element["Kannada"]}</td>
                  <td>{element["English "]}</td>
                  <td>{element.Hindi}</td>
                  <td>{element.Maths}</td>
                  <td>{element.Sceince}</td>
                  <td>{element["Social "]}</td>
                  <td>
                    {(
                      (element["Kannada"] +
                        element["English "] +
                        element.Hindi +
                        element.Maths +
                        element.Sceince +
                        element["Social "]) /
                      6
                    ).toFixed(2)}{" "}
                    %
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <>
            <h2>Please upload the file in excel format eg. xlxs</h2>
          </>
        )}
      </div>
    </div>
  );
}
