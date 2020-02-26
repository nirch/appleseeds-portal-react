import React, { useContext, useState, useEffect } from "react";
import "./courses.css";
import PortalNavbar from "../../components/navbar/PortalNavbar";
import ActiveUserContext from "../../shared/activeUserContext";
import { Redirect } from "react-router-dom";
import PortalSearchPager from "../../components/search/PortalSearchPager";
import PortalTable from "../../components/TableComponent/PortalTable";
import PortalButtonSet from "../../components/navbar/PortalButtonSet";
import server from "../../shared/server";
import PortalMultipleSelect from "../../components/PortalMultipleSelect/PortalMultipleSelect";

const CoursesPage = props => {
  const { handleLogout } = props;
  const activeUser = useContext(ActiveUserContext);
  const [activeKey, setActiveKey] = useState(1);
  const [selectedCourseId, setselectedCourseId] = useState("");
  const [courseSearchString, setCourseSearchString] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [serverData, setServerData] = useState([]);
  const [pages, setPages] = useState(0);
  const [options, setOptions] = useState([
    { value: "1", label: "תגית 1" },
    { value: "2", label: "תגית 2" },
    { value: "3", label: "תגית 3" }
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [hideSelectList, setHideSelectList] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const CoursesData = {
        search: courseSearchString,
        sorting: "courseid",
        desc: false,
        coursestatus: activeKey,
        page: currentPage
      };
      server(activeUser, CoursesData, "SearchCourses").then(
        res => {
          console.log(res);
          setServerData(res.data.courses);
          setPages(res.data.pages);

          if (res.data.error) {
            alert("error recieving courses data");
          } else {
            // handleLogin(res.data);
          }
        },
        err => {
          console.error(err);
        }
      );
    };
    if (activeUser) {
      fetchData();
    }
  }, [activeUser, currentPage, activeKey, courseSearchString]);

  if (!activeUser) {
    return <Redirect to="/" />;
  }

  const selectedCourseUrl = "/courses/" + selectedCourseId;

  if (selectedCourseId) {
    return <Redirect to={selectedCourseUrl} />;
  }

  const handleSearch = searchInput => {
    setCurrentPage(0);
    setCourseSearchString(searchInput);
  };

  const pageChange = newCurrentPage => {
    setCurrentPage(newCurrentPage);
  };

  const headers = [
    { key: "subname", header: "שם קורס מקוצר" },
    { key: "project", header: "פרויקט" },
    { key: "teachers", header: "מדריך" }
  ];

  const buttons = [
    { key: 1, label: "קורסים פעילים" },
    { key: 0, label: "לא פעילים" }
  ];

  const handleActiveBtnClick = btnClicked => {
    setCurrentPage(0);
    setActiveKey(btnClicked.key);
  };

  const handleCourseSelect = courseSelected => {
    setselectedCourseId(courseSelected.courseid);
  };

  const displaySelectList = () => {
    setHideSelectList(!hideSelectList);
  };

  // Callback function that adds a selected option from the options array
  // and deletes it from the options array
  const addOption = selectedOption => {
    setSelectedOptions(selectedOptions.concat(selectedOption));

    for (let i = 0; i < options.length; i++) {
      if (options[i].value === selectedOption.value) {
        options.splice(i, 1);
        setOptions(options);
        break;
      }
    }
    setHideSelectList(!hideSelectList);
  };

  // Callback function that deletes a selected option from the selectedOptions array
  // and add it back to the options array
  const deleteOption = index => {
    const tempOption = selectedOptions[index];
    const cloneList = [...selectedOptions];
    cloneList.splice(index, 1);
    setSelectedOptions(cloneList);
    setOptions(options.concat(tempOption));
  };

  // Callback function that deletes all selected options from the selectedOptions array
  // and adds them back to the options array
  const deleteAllOptions = () => {
    const cloneList = [...selectedOptions];
    setSelectedOptions([]);
    setOptions(options.concat(cloneList));
    setHideSelectList(true);
  };

  return (
    <div className="p-courses">
      <PortalNavbar handleLogout={handleLogout} />
      <PortalSearchPager
        placeholder={"חיפוש קורס"}
        pages={pages}
        currentPage={currentPage}
        handleSearch={handleSearch}
        pageChange={pageChange}
      />
      <PortalMultipleSelect
        label={"תגיות"}
        hideSelectList={hideSelectList}
        displaySelectList={displaySelectList}
        options={options}
        selectedOptions={selectedOptions}
        addOption={addOption}
        deleteOption={deleteOption}
        deleteAllOptions={deleteAllOptions}
      />
      <div className="table">
        <PortalTable
          headers={headers}
          data={serverData}
          handleClick={handleCourseSelect}
        />
      </div>
      <PortalButtonSet
        buttons={buttons}
        handleClick={handleActiveBtnClick}
        activeKey={activeKey}
      />
    </div>
  );
};

export default CoursesPage;
