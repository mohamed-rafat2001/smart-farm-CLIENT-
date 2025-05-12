import axios from "axios";

const handleApiError = (error) => {
	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx

		return {
			status: error.response.data.status,
			message: error.response.data.message,
		};
	} else if (error.request) {
		// The request was made but no response was received

		return {
			message: "No response from server",
			status: 500,
		};
	} else {
		// Something happened in setting up the request that triggered an Error

		return {
			message: error.message || "An error occurred",
			status: 500,
		};
	}
};
const api = axios.create({
	baseURL: import.meta.env.APIURL || "http://localhost:3000/api/v1",
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
	},
});
api.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem("token");
		if (token) {
			config.headers.authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(handleApiError(error));
	}
);

// Response interceptor for API calls
api.interceptors.response.use(
	(response) => response,
	(error) => {
		const originalRequest = error.config;

		// Handle 401 Unauthorized errors
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
		}
		return Promise.reject(handleApiError(error));
	}
);
export default api;
