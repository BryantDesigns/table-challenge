import React, { useState } from "react";
import Container from "./containers/Container";
import names from "./data/names.json";

const App = () => {
  const [nameVal, setNameVal] = useState("");
  const [namesJson, setNamesJson] = useState(names);

  const handleChange = (event) => {
    setNameVal(event.target.value);
  };

  const handleSubmit = () => {
    setNamesJson([...namesJson, nameVal]);
    setNameVal("");
  };

  const handleDelete = (row) => {
    setNamesJson(namesJson.filter((person) => person !== row));
  };

  // const nameSort = (names) => {
  //   names.sort((a, b) => {
  //     const nameA = a.toUpperCase()
  //     const nameB = b.toUpperCase()
  //     if (nameA < nameB) {
  //         return -1
  //     } if (nameA > nameB) {
  //       return 1;
  //     } else {
  //       return 0
  //     }
  //   })
  // }

  const calcScore = () => {};

  return (
    <>
      <main>
        <Container>
          <input type='text' value={nameVal} onChange={handleChange} />
          <button type='submit' onClick={handleSubmit}>
            Add to table
          </button>
        </Container>

        <Container></Container>

        <Container>
          <table>
            <thead>
              <tr>
                <th>Row Number</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {namesJson
                .sort((a, b) => {
                  const nameA = a.toUpperCase();
                  const nameB = b.toUpperCase();
                  if (nameA < nameB) {
                    return -1;
                  }
                  if (nameA > nameB) {
                    return 1;
                  } else {
                    return 0;
                  }
                })
                .map((name, index) => {
                  return (
                    <>
                      <tr
                        className='bg-gray-200'
                        key={index}
                        onClick={(event) => handleDelete(name)}
                      >
                        <td>{index + 1}</td>
                        <td>{name}</td>
                        <td>score</td>
                      </tr>
                    </>
                  );
                })}
            </tbody>
            <tfoot>{/* total score */}</tfoot>
          </table>
        </Container>
      </main>
    </>
  );
};

export default App;
