import UserModel from "../model/user.model.js";

export const UserController = async (req, res, next) => {
    try {
        const { name, email, password, roles } = req.body;
        if (!name || !email || !password) return res.status(400).json({ error: "Mandatory fields are missing" });

        const newUser = await UserModel.create({ name, email, password, "roles": [roles] })
        res.status(201).json({ success: true, user: newUser })
    } catch (error) {
        res.status(500).json({ error: "Server error", details: error.message });
    }
}

export const getAllUserController = async (req, res, next) => {
    try {
        const getAllUser = await UserModel.find({});
        res.status(201).json({ success: true, users: getAllUser })
    } catch (error) {
        res.status(500).json({ error: "Server Error", details: error.message })
    }
}

export const getUserById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userById = await UserModel.findById(id);
        res.status(201).json({ success: true, userById });
    } catch (error) {
        res.error(500).json({ error: "Server Error", details: error.message });
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await UserModel.findById(id);
        const deletedUser = await UserModel.deleteOne(user);
        res.status(201).json({ success: true, deletedUser })
    } catch (error) {
        res.error(500).json({ error: "Server Error", details: error.message });
    }
}

export const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        const { name, email, password } = req.body;
        console.log(name, email, password);

        const updatedUser = await UserModel.findByIdAndUpdate(id, { name, email, password }, { new: true })
        res.status(201).json({ success: true, updatedUser })
    } catch (error) {
        res.error(500).json({ error: "Server Error", details: error.message })
    }
}