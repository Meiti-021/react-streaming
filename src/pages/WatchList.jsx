import { useSelector } from "react-redux";
import Wrapper from "../components/Wrapper";
import { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MovieCard2 from "../components/MovieCard2";
import { useMediaQuery } from "@mui/material";
function TabPanel(props) {
  const { children, value, index, className, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={className}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs() {
  const [value, setValue] = useState(0);
  const { watchList } = useSelector((store) => store.movieData);
  const md = useMediaQuery("(min-width:768px)");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#1A1A1A",
        display: md ? "flex" : "block",
        height: "auto",
        minHeight: 500,
        width: "100%",
        padding: "10px",
      }}
    >
      <Tabs
        orientation={md ? "vertical" : undefined}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: md ? 1 : 0,
          borderBottom: md ? 0 : 1,
          borderColor: "white",
          width: !md
            ? "100%"
            : watchList[value].collection.length === 0
            ? 300
            : 400,
        }}
      >
        {watchList.map((item, index) => {
          return (
            <Tab
              label={item.name}
              {...a11yProps(index)}
              sx={{ color: "white" }}
              key={item.name + index}
            />
          );
        })}
      </Tabs>
      {watchList[value].collection.length === 0 ? (
        <TabPanel
          value={value}
          index={value}
          key={watchList[value].name + value + "panel" + "empty"}
          className="h-[30rem]   w-full flex justify-center items-center"
        >
          <div className="flex justify-center items-center w-full h-full ">
            <p className="text-3xl text-center">PLAYLIST IS EMPTY</p>
          </div>
        </TabPanel>
      ) : (
        watchList.map((item, index) => {
          return (
            <TabPanel
              value={value}
              index={index}
              key={item.name + index + "panel"}
              className="h-auto w-full"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 h-full overflow-y-auto ">
                {item.collection.map((elem, num) => {
                  return (
                    <MovieCard2
                      {...elem}
                      list={index}
                      key={elem.id + "whatitem" + num + item.name}
                    />
                  );
                })}
              </div>
            </TabPanel>
          );
        })
      )}
    </Box>
  );
}
const WatchList = () => {
  return (
    <Wrapper>
      <div className="mt-20 ">
        <h1 className="text-3xl text-center mb-10">PLAYLISTS</h1>
        <VerticalTabs />
      </div>
    </Wrapper>
  );
};

export default WatchList;
