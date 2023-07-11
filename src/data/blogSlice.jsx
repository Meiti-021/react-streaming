import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  blogsData: [
    {
      id: "blog-1",
      comments: [
        {
          id: "user-1",
          name: "Gralt of rivia",
          message: "test comment",
          date: "FEBRUARY 2, 2019",
          replays: [
            {
              id: "user-1-1",
              name: "Homelander",
              message: "no i don't think so.",
              date: "FEBRUARY 5, 2020",
              to: "Gralt of revia",
            },
            {
              id: "user-1-2",
              name: "Soldier boy",
              message: "yes thats it.",
              date: "FEBRUARY 11, 2022",
              to: "homlander",
            },
            {
              id: "user-1-3",
              name: "Joker",
              message:
                "hehehehehehehehehehehehhhhhhhhhhhhhhehehehehehehehehe!!!!!",
              date: "JULY 5, 2022",
              to: "Gralt",
            },
          ],
        },
        {
          id: "user-2",
          name: "Harley Queen",
          message:
            "test comment 2 ajklsnbcbajlkcbn;aljcba asnclkanckanc jlkcsan;cknsalcknac;k",
          date: "FEBRUARY 2, 2019",
          replays: [],
        },
        {
          id: "user-1",
          name: "Gralt of rivia",
          message: `text-comment 3  Potenti fusce himenaeos hac aenean quis donec vivamus aliquet,
          wprdpress integer inceptos curae sollicitudin in class sociosqu netus,
          euismod tempus fermentum odio gravida eleifend viverra pulvinar
          inceptos ligula consectetur. Potenti ante porttitor tristique curae
          scelerisque tristique, dictum eu donec conubia sit rutrum duis viverra
          in commodo. `,
          date: "FEBRUARY 2, 2019",
          replays: [],
        },
      ],
    },
    {
      id: "blog-2",
      comments: [],
    },
    {
      id: "blog-3",
      comments: [],
    },
    {
      id: "blog-4",
      comments: [],
    },
    {
      id: "blog-5",
      comments: [],
    },
    {
      id: "blog-6",
      comments: [],
    },
    {
      id: "blog-7",
      comments: [],
    },
    {
      id: "blog-8",
      comments: [],
    },
    {
      id: "blog-9",
      comments: [],
    },
    {
      id: "blog-10",
      comments: [],
    },
    {
      id: "blog-11",
      comments: [],
    },
    {
      id: "blog-12",
      comments: [],
    },
    {
      id: "blog-13",
      comments: [],
    },
    {
      id: "blog-14",
      comments: [],
    },
    {
      id: "blog-15",
      comments: [],
    },
    {
      id: "blog-16",
      comments: [],
    },
    {
      id: "blog-17",
      comments: [],
    },
    {
      id: "blog-18",
      comments: [],
    },
    {
      id: "blog-19",
      comments: [],
    },
    {
      id: "blog-20",
      comments: [],
    },
    {
      id: "blog-21",
      comments: [],
    },
    {
      id: "blog-22",
      comments: [],
    },
    {
      id: "blog-23",
      comments: [],
    },
    {
      id: "blog-24",
      comments: [],
    },
  ],
};

const blogSlice = createSlice({
  name: "blogData",
  initialState,
  reducers: {
    addReplay: (state, { payload }) => {
      const index = state.blogsData.findIndex(
        (item) => item.id === payload.pageID
      );
      const subIndex = state.blogsData[index].comments.findIndex(
        (item) => item.id === payload.id
      );

      state.blogsData[index].comments[subIndex].replays.push(
        payload.replayForm
      );
    },
    addComment: (state, { payload }) => {
      const index = state.blogsData.findIndex((item) => item.id === payload.id);

      state.blogsData[index].comments.push(payload.form);
    },
  },
});

export const { addReplay, addComment } = blogSlice.actions;

export default blogSlice.reducer;
