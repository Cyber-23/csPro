// userSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../URL";
export const UploadProject = createAsyncThunk(
  "user/UploadProject",
  async (values, thunkAPI) => {
    try {
      // Your asynchronous logic to authenticate user here
      console.log(values)
      const response = await fetch(`${BASE_URL}/api/v1/Project/upload`, {
        method: 'POST',
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
export const getProjects = createAsyncThunk(
  "csPro/getProjects",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/Project`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const getProjectDetail = createAsyncThunk(
  "csPro/getProjectDetail",
  async (project_id, thunkAPI) => {
    try {
      const response = await fetch(`${BASE_URL}/api/v1/project/single/${project_id}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const deleteProject = createAsyncThunk(
  "csPro/deleteProject",
  async (project_id, thunkAPI) => {
    try {
      // Your asynchronous logic to delete student here
      const response = await fetch(`${BASE_URL}/api/v1/Project/delete/${project_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      const data = await response.json();
      return { projectId: project_id, message: data.message };
    } catch (error) {
      // Handle error
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const updateProject = createAsyncThunk(
  "student/updateProject",
  async ({ project_id, updatedData }, thunkAPI) => {
    try {
      console.log(project_id, updatedData )
      // Your asynchronous logic to update student here
      const response = await fetch(`${BASE_URL}/api/v1/Project/update/${project_id}`, {
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
  projects: null,
  Detail: null,
  loading: false,
  error: null,
  message: null,
};

const ProjectSlice = createSlice({
  name: "projects",
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

      .addCase(UploadProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(UploadProject.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(UploadProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      }) 
      .addCase(getProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.projects = action.payload.projects;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(getProjectDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProjectDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.Detail = action.payload.Detail;
      })
      .addCase(getProjectDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
    //   .addCase(getProjectsbycategory.pending, (state) => {
    //     state.loading = true;
    //     state.error = null;
    //   })
    //   .addCase(getProjectsbycategory.fulfilled, (state, action) => {
    //     state.loading = false;
    //     state.error = null;
    //     state.Projectbycategory = action.payload.Projectbycategory;
    //   })
    //   .addCase(getProjectsbycategory.rejected, (state, action) => {
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
      .addCase(deleteProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
        state.projects = state.projects.filter(
          (c) => c.project_id !== action.payload.projectId
        );
      })
      .addCase(deleteProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
      .addCase(updateProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.message = action.payload.message;
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      })
  },
});

export const { clearErrors, clearMessage } = ProjectSlice.actions;

export default ProjectSlice.reducer;
