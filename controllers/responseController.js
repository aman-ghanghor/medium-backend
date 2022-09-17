import ResponseModel from "../models/responseModel.js";

class ResponseController {
  static getResponses = function () {
    console.log("get responses");
  };

  static getReplies = function () {
    console.log("get replies")
  }

  static getResponsesByUser = function () {
    console.log('get responses by user');
  }

  static newResponse = function () {
    console.log("New response");
  };

  static editResponse = function () {
    console.log("edit responses");
  };

  static deleteResponse = function () {
    console.log("delete responses");
  };

  static clapResponse = function () {
    console.log("clap the response");
  };
}

export default ResponseController;
