import React, { useContext, useState } from "react";
import "./courses.css";
import PortalNavbar from "../../components/navbar/PortalNavbar";
import ActiveUserContext from "../../shared/activeUserContext";
import { Redirect } from "react-router-dom";
import PortalSearchPager from "../../components/search/PortalSearchPager";
import PortalTable from "../../components/TableComponent/PortalTable";
import PortalButtonSet from "../../components/navbar/PortalButtonSet";

const CoursesPage = props => {
  const { handleLogout } = props;
  const activeUser = useContext(ActiveUserContext);
  const [activeKey, setActiveKey] = useState(0);

  if (!activeUser) {
    return <Redirect to="/" />;
  }

  const handleSearch = searchInput => {
    console.log(searchInput);
  };

  const pageChange = currPage => {
    console.log(currPage);
  };

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

  const buttons = [
    { key: 0, label: "קורסים פעילים" },
    { key: 1, label: "לא פעילים" }
  ];

  const handleClick = btnClicked => {
    console.log(btnClicked);
    setActiveKey(btnClicked.key);
  };

  return (
    <div className="p-courses">
      <PortalNavbar handleLogout={handleLogout} />

      <PortalSearchPager
        placeholder={"חיפוש קורס"}
        pages={3}
        currentPage={1}
        handleSearch={handleSearch}
        pageChange={pageChange}
      />
      <PortalTable headers={headers} data={data} />
      <PortalButtonSet
        buttons={buttons}
        handleClick={handleClick}
        activeKey={activeKey}
      />
    </div>
  );
};

export default CoursesPage;
