import React, { useMemo, useState, useEffect }  from 'react'
import ScreenHeader from '../ScreenHeader';
import './ThirdPage.css'
import Gallery from '../Gallery';
import Table2 from '../Table2'
import '../Table2/Table2.css';
import CodeBox from '../CodeBox';
import RadioButtons from '../RadioButtons';

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

const ThirdPage = ({demo, table, show}) => {
    const images = {demo}.demo.elements.images;
    console.log("Reducer third page is ", {images})
    console.log("Hey Clemens")

    const bkg_colours = {
      "done": "#9ae6b4",
      "building": "#9abbe6"
    }

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
            Header: "Docker Pull",
            accessor: "url",
            Cell: ({ cell: { value } }) => <CodeBox text={["docker pull ", value]}/>
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: ({ cell: { value } }) => <span className="badge" style = {{ backgroundColor: bkg_colours[value] }}>{value}</span>
          },
          {
            Header: "Created At",
            accessor: "createdAt"
          }
        ],
      );

    console.log(show);

    const data = show.show;

    return (
        <div className="Home">
            <div className="Background"></div>
            <div className="Home-text">
            <div className="Radio"><RadioButtons/></div>
            <Table2 columns={columns} data={data}/>
            </div>
        </div>
    )
}

export default ThirdPage