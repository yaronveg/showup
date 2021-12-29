import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedFilters: [],
  filtersList: [
    {
      name: "Instrument",
      isOpen: false,
      options: [
        "Bass",
        "Guitar",
        "Drums",
        "Piano",
        "Keyboard",
        "Saxophone",
        "Trumpet",
        "Violin",
      ],
    },
    {
      name: "Genre",
      isOpen: false,
      options: [
        "Rock",
        "Alternative",
        "Pop",
        "Indy",
        "Middle-Eastern",
        "Metal",
        "Trap",
        "Hip-Hop",
        "R&B",
      ],
    },
  ],
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleOpen: (filtersState, action) => {
      const drawerIndex = filtersState.filtersList.findIndex(
        (filter) => filter.name === action.payload
      );
      filtersState.filtersList[drawerIndex].isOpen =
        !filtersState.filtersList[drawerIndex].isOpen;
    },
    selectFilter: (filtersState, action) => {
      filtersState.selectedFilters.push(action.payload);
    },
    deselectFilter: (filtersState, action) => {
      filtersState.selectedFilters = filtersState.selectedFilters.filter(
        (filter) => filter !== action.payload
      );
    },
  },
});

export const { toggleOpen, selectFilter, deselectFilter } =
  filtersSlice.actions;

export default filtersSlice.reducer;
