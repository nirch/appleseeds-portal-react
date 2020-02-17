import React, { useContext } from "react";
import "./courses.css";
import PortalNavbar from "../../components/navbar/PortalNavbar";
import ActiveUserContext from "../../shared/activeUserContext";
import { Redirect } from "react-router-dom";
import PortalSearchPager from "../../components/search/PortalSearchPager";
import PortalTable from "../../components/TableComponent/PortalTable";

const CoursesPage = props => {
  const { handleLogout } = props;
  const activeUser = useContext(ActiveUserContext);

  if (!activeUser) {
    return <Redirect to="/" />;
  }

  const headers = [
    { key: "cName", header: "שם קורס מקוצר" },
    { key: "project", header: "פרויקט" },
    { key: "instructor", header: "מדריך" }
  ];
  const data = [
    {
      id: "12212",
      cName: "Frontend Developing",
      project: "בלה בלה בלה",
      instructor: "ניר חנס"
    },
    {
      id: "12213",
      cName: "Frontend Developing",
      project: "בלה בלה בלה",
      instructor: "ניר חנס"
    },
    {
      id: "12214",
      cName: "Frontend Developing",
      project: "בלה בלה בלה",
      instructor: "ניר חנס"
    }
  ];

  return (
    <div className="p-courses">
      <PortalNavbar handleLogout={handleLogout} />

      <PortalSearchPager placeholder={"חיפוש קורס"} />
      {/* <div className="c-table"> */}
      <PortalTable headers={headers} data={data} />
    </div>
    // </div>
  );
};

export default CoursesPage;
