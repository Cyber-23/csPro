// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../URL";
export const AddTicket = createAsyncThunk(
  "user/AddTicket",
  async (values, thunkAPI) => {
    try {
      // Your asynchronous logic to authenticate user here
      const response = await fetch(`${BASE_URL}/api/v1/ticket/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Handle error
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const getTickets = createAsyncThunk(
  "csPro/getTickets",
  async (registration, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/ticket/registration/${registration}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
// export const getTicketsbycategory = createAsyncThunk(
//   "csPro/getTicketsbycategory",
//   async ({category,gender,subcategory}, thunkAPI) => {
//     try {
//       const response = await fetch(`${BASE_URL}api/v1/Project/${category}/${gender}/${subcategory}`);

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message);
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       // Handle error
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   }
// );
// export const getSingleCompanyProject = createAsyncThunk(
//     "csPro/getSingleCompanyProject",
//     async (_, thunkAPI) => {
//       try {
//         const response = await fetch("${BASE_URL}api/v1/Project/singlecompanyProject");
  
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message);
//         }
  
//         const data = await response.json();
//         return data;
//       } catch (error) {
//         // Handle error
//         return thunkAPI.rejectWithValue({ error: error.message });
//       }
//     }
//   );
//   export const getSingleSellerProject = createAsyncThunk(
//     "csPro/getSingleSellerProject",
//     async (_, thunkAPI) => {
//       try {
//         const response = await fetch("${BASE_URL}api/v1/Project/getSingleSellerProject");
  
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.message);
//         }
  
//         const data = await response.json();
//         return data;
//       } catch (error) {
//         // Handle error
//         return thunkAPI.rejectWithValue({ error: error.message });
//       }
//     }
//   );
// export const getSingleProject= createAsyncThunk(
//   "csPro/getSingleProject",
//   async (Project_id, thunkAPI) => {
//     try {
//       const response = await fetch(`${BASE_URL}api/v1/Project/singlecompany/${Project_id}`);

//       if (!response.ok) {
//         const errorData = await response.json();
//         throw new Error(errorData.message);
//       }

//       const data = await response.json();
//       return data;
//     } catch (error) {
//       // Handle error
//       return thunkAPI.rejectWithValue({ error: error.message });
//     }
//   }
// );
export const deleteTicket = createAsyncThunk(
  "csPro/deleteTicket",
  async (ticket_id, thunkAPI) => {
    try {
      // Your asynchronous logic to delete student here
      const response = await fetch(`${BASE_URL}/api/v1/ticket/delete/${ticket_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      return { ticketId: ticket_id, message: data.message };
    } catch (error) {
      // Handle error
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const updateTicket = createAsyncThunk(
  "student/updateTicket",
  async ({ ticket_id, updatedData }, thunkAPI) => {
    try {
      // Your asynchronous logic to update student here
      const response = await fetch(`${BASE_URL}/api/v1/ticket/update/${ticket_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      // Handle error
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);


const initialState = {
    tickets: [],
//   singleProject: null,
//   Projectbycategory:null,
//   singlecompanyProject: null,
//   singlesellerProject: null,
  loading: false,
  error: null,
  message: null,
};

const TicketSlice = createSlice({
  name: "Ticket",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    clearMessage: (state) => {
      state.message = null;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(AddTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(AddTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(AddTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      }) 
      .addCase(getTickets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTickets.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.tickets = action.payload;
      })
      .addCase(getTickets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })

    //   .addCase(getTicketsbycategory.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(getTicketsbycategory.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.Projectbycategory = action.payload.Projectbycategory;
    //   })
    //   .addCase(getTicketsbycategory.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.error;
    //   })


    //   .addCase(getSingleProject.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(getSingleProject.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.singleProject = action.payload.singleProject;
    //   })
    //   .addCase(getSingleProject.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.error;
    //   })
    //   .addCase(getSingleCompanyProject.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(getSingleCompanyProject.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.singlecompanyProject = action.payload.singlecompanyProject;
    //   })
    //   .addCase(getSingleCompanyProject.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.error;
    //   })
    //   .addCase(getSingleSellerProject.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(getSingleSellerProject.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.singlesellerProject = action.payload.singlesellerProject;
    //   })
    //   .addCase(getSingleSellerProject.rejected, (state, action) => {
    //     state.loading = false;
    //     state.error = action.payload.error;
    //   })
      .addCase(deleteTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
        state.tickets = state.tickets.filter(
          (c) => c.ticketId !== action.payload.ticketId
        );
      })
      .addCase(deleteTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(updateTicket.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTicket.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(updateTicket.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
  },
});

export const { clearErrors, clearMessage } = TicketSlice.actions;

export default TicketSlice.reducer;
