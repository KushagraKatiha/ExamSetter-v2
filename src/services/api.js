import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth APIs
export const authAPI = {
  login: async (email, password) => {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Login failed' };
    }
  },

  register: async (userData) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Registration failed' };
    }
  },

  logout: async () => {
    console.log("I am here !!!")
    try {
      const response = await api.post('/auth/logout');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Logout failed' };
    }
  }
};

// Admin APIs
export const adminAPI = {
  getTeachers: async () => {
    try {
      const response = await api.get('/admin/teachers');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch teachers' };
    }
  },

  createTeacher: async (teacherData) => {
    try {
      const response = await api.post('/admin/teachers', teacherData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create teacher' };
    }
  },

  deleteTeacher: async (teacherId) => {
    try {
      const response = await api.delete(`/admin/teachers/${teacherId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete teacher' };
    }
  },

  logout: async () => {
    try {
      const response = await api.post('/auth/logout');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Logout failed' };
    }
  }
};

// Subject APIs
export const subjectAPI = {
  getSubjects: async () => {
    try {
      const response = await api.get('/subjects');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch subjects' };
    }
  },

  createSubject: async (subjectData) => {
    try {
      const response = await api.post('/subjects', subjectData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create subject' };
    }
  },

  deleteSubject: async (subjectId) => {
    try {
      const response = await api.delete(`/subjects/${subjectId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete subject' };
    }
  }
};

// Question APIs
export const questionAPI = {
  getQuestions: async () => {
    try {
      const response = await api.get('/questions');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch questions' };
    }
  },

  createQuestion: async (questionData) => {
    try {
      const response = await api.post('/questions', questionData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create question' };
    }
  }
};

// Paper APIs
export const paperAPI = {
  getPapers: async () => {
    try {
      const response = await api.get('/papers');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch papers' };
    }
  },

  createPaper: async (paperData) => {
    try {
      const response = await api.post('/papers', paperData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create paper' };
    }
  }
};

// Teacher APIs
export const teacherAPI = {
  getProfile: async () => {
    try {
      const response = await api.get('/teachers/profile');
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch profile' };
    }
  },

  updateProfile: async (profileData) => {
    try {
      const response = await api.put('/teachers/profile', profileData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to update profile' };
    }
  }
};

// Mapping APIs
export const mappingAPI = {
  getMappings: async () => {
    try {
      const response = await api.get('/mappings');
      console.log(response)
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to fetch mappings' };
    }
  },

  createMapping: async (mappingData) => {
    try {
      const response = await api.post('/mappings', mappingData);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to create mapping' };
    }
  },

  deleteMapping: async (mappingId) => {
    try {
      const response = await api.delete(`/mappings/${mappingId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || { message: 'Failed to delete mapping' };
    }
  }
};

export default api;