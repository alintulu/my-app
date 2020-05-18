import React, { useMemo, useState, useEffect }  from 'react'
import ScreenHeader from '../ScreenHeader';
import './ThirdPage.css'
import Gallery from '../Gallery';
import Table2 from '../Table2'
import '../Table2/Table2.css';
import CodeBox from '../CodeBox';

import fake from '../../data/fake.json';

//<Gallery images={images} />

const Genres = ({ values }) => {
    console.log("values ar", values)
    return (
      <>
        <span key={values} className="badge">
            {values}
        </span>
      </>
    );
  };

const ThirdPage = ({demo}) => {
    const images = {demo}.demo.elements.images;
    console.log("Reducer third page is ", {images})
    console.log("Hey Clemens")

    const backgroundColor = "blue";

    const columns = useMemo(
        () => [
          {
            Header: "Name",
            accessor: "name"
          },
          {
            Header: "Tag",
            accessor: "tag"
          },
         {
            Header: "Pull URL",
            accessor: "url",
            Cell: ({ cell: { value } }) => <CodeBox text={["docker pull", value]}/>
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: ({ cell: { value } }) => <span className="badge">{value}</span>
          },
          {
            Header: "Created At",
            accessor: "createdAt"
          }
        ],
      );

    console.log(fake);

    return (
        <div className="Home">
            <div className="Background"></div>
            <div className="Home-text">
            <h1 className="Screen-title">Status Board</h1>
            <Table2 columns={columns} data={fake}/>
            </div>
        </div>
    )
}

export default ThirdPage