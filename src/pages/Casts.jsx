import { useState } from "react";
import Page from "../components/Page";
import { Pagination } from "@mui/material";
import { cast } from "../services/cast";
import { Link } from "react-router-dom";
const Casts = () => {
  const [page, setPage] = useState(0);
  return (
    <Page title="casts">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {cast.slice(page * 8, page * 8 + 8).map((item, index) => {
          return (
            <div
              className="relative bg-dark-gray  w-full h-96 flex justify-center items-center"
              key={"cast-movie-item" + index + item.id}
            >
              <Link to={`/cast/${item.id}`} className="flex w-full flex-col">
                <img
                  src={`/assets/casts/${item.id}.webp`}
                  alt=""
                  className="block w-full h-72 object-cover object-top"
                />
                <div className="flex flex-col gap-1 justify-center items-center p-4">
                  <p className="text-base">{item.name}</p>
                  <p className="text-sm text-gray">{item.knownAs}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-10">
        <Pagination
          count={Math.floor(cast.length / 8)}
          page={page + 1}
          shape="rounded"
          color="error"
          onChange={(e, value) => {
            setPage(value - 1);
          }}
          sx={{
            ul: {
              "& .MuiPaginationItem-root": {
                color: "#fff",
              },
            },
          }}
        />
      </div>
    </Page>
  );
};

export default Casts;
