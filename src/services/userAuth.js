import api from "../utils/api";

// get all users by admin
export const getAllUsers = async () => {
	const users = await api.get("/user/allUsers");

	return users.data;
};
