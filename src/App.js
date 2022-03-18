import React, { useState, Fragment, useCallback, useRef } from "react";

import Container from "./containers/Container";
import names from "./data/names.json";

const App = () => {
  // const [nameVal, setNameVal] = useState("");
  const [namesJson, setNamesJson] = useState(names);

  const nameRef = useRef('');
  
  // const handleChange = (event) => {
  //   setNameVal(event.target.value);
  // };

  const handleChange = (event) => {
    nameRef.current = event.target.value;
  }

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setNamesJson([...namesJson, nameVal]);
  //   setNameVal("");
  // };

  const handleSubmit = useCallback((event, nameVal) => {
    event.preventDefault();
    setNamesJson(prev => [...prev, nameVal]);
    // setNameVal("");
  }, [])

  const handleDelete = (indexRow) => {
    setNamesJson(namesJson.filter((_, idx) => idx !== indexRow));
  };

  function getUniCodeValue(name, index) {
    const unicodeScore = [...name].reduce((accScore, curLetter) => {
      // 'ABC'.charCodeAt(0)  // returns 65
      const ltrScore = curLetter.toUpperCase().charCodeAt(0) - 64;

      return (accScore += ltrScore);
    }, 0);
    return (index + 1) * unicodeScore;
  }



  return (
    <>
      <main>
        <Container>
          <div className='sm:flex sm:items-center'>
            <div className='sm:flex-auto'>
              <h1 className='text-xl font-semibold text-gray-900'>Users</h1>
              <p className='mt-2 text-sm text-gray-700'>
                A list of all the users in the database
              </p>
            </div>
            <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
              {/* <form onSubmit={handleSubmit}> */}
              <form onSubmit={(event) => handleSubmit(event, nameRef.current)}>
                <div className='mt-1 flex rounded-md shadow-sm'>
                  <div className='relative flex flex-grow items-stretch focus-within:z-10'>
                    <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'></div>
                    <input
                      type='text'
                      className='block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                      placeholder='Enter Name'
                      // value={nameVal}
                      onChange={handleChange}
                    />
                  </div>
                  <button
                    type='submit'
                    className='relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500'
                  >
                    <span>Add User</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>

        <Container>
          <table className='min-w-full divide-y divide-gray-300'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6'
                >
                  Row Number
                </th>
                <th
                  scope='col'
                  className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6'
                >
                  Name
                </th>
                <th
                  scope='col'
                  className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6'
                >
                  Score
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200 bg-white'>
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
                    <Fragment key={index}>
                      <tr
                        onClick={(event) => handleDelete(index)}
                      >
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {index + 1}
                        </td>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {name}
                        </td>
                        <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                          {getUniCodeValue(name, index)}
                        </td>
                      </tr>
                    </Fragment>
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
