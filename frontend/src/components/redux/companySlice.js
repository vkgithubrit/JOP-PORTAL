// import { createSlice } from "@reduxjs/toolkit";


// const companySlice = createSlice({
//     name:"company",
//     initialState:{
//         singleCompany:null,
//         // companies:[],
//         // searchCompanyByText:"",
//     },
//     reducers:{
//         // actions
//         setSingleCompany:(state,action) => {
//             state.singleCompany = action.payload;
//         },
//         // setCompanies:(state,action) => {
//         //     state.companies = action.payload;
//         // },
//         // setSearchCompanyByText:(state,action) => {
//         //     state.searchCompanyByText = action.payload;
//         // }
//     }
// });
// export const {setSingleCompany
//     // , setCompanies,setSearchCompanyByText
//     } = companySlice.actions;
// export default companySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const companySlice = createSlice({
    name: "company",
    initialState: {
        singleCompany: null,
        companies: [], // list of companies
        searchCompanyByText: "", // for filtering companies by search text
    },
    reducers: {
        // action to set a single company
        setSingleCompany: (state, action) => {
            state.singleCompany = action.payload;
        },
        // action to set the list of companies
        setCompanies: (state, action) => {
            state.companies = action.payload;
        },
        // action to set the search text for filtering companies
        setSearchCompanyByText: (state, action) => {
            state.searchCompanyByText = action.payload;
        }
    }
});

// Exporting the actions
export const { setSingleCompany, setCompanies, setSearchCompanyByText } = companySlice.actions;

// Exporting the reducer
export default companySlice.reducer;
