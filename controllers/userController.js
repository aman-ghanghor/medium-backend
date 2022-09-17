import UserModel from "../models/userModel.js";

class UserController {
  static signin = function () {
    console.log("Hello signin");
  };

  static signup = function () {
    console.log("Hello signup");
  };

  static signout = function () {
    console.log("sign out");
  }
  
  static getUser = function () {
    console.log("get user");
  };
  
  static deactivateUser = function () {
    console.log("Deactivate user");
  };
  
  static deleteUser = function () {
    console.log("delete user");
  };

  static editName = function () {
    console.log("edit name");
  };

  static editBio = function () {
    console.log("edit bio");
  };

  static editUsername = function () {
    console.log("edit username");
  };

  static editEmail = function () {
    console.log("edit username");
  };


}

export default UserController;
