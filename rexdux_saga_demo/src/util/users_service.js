import { instance } from "./axios"
export const GET_USER = async () => {
    console.log("Step 4: Gọi API GET");
    try {
        let response = await instance.get("users");
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export const POST_USER = async (newUser) => {
    await instance.post("users", newUser);
};
export const PUT_USER = async (updateUser) => {
    let user = await instance.put("users/" + updateUser.id, updateUser);
    return user;
};
export const DELETE_USER = async (id) => {
    await instance.delete("users/" + id);
};
export const PATCH_USER = async (updateUser) => {
    await instance.patch("users/" + updateUser.id, updateUser);
}