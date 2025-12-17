import { constants } from "../constants.js";

const { VALIDATION_ERROR, UNAUTHORIZED, FORBIDDEN, NOT_FOUND, SERVER_ERROR } =
  constants;

const errorHandler = (err, req, res, next) => {
  //   console.log(process.env.NODE_ENV);

  function errorResponse(title) {
    if (process.env.NODE_ENV == "development") {
      return {
        title: title,
        message: err.message,
        stackTrack: err.stack,
      };
    } else {
      return {
        title: title,
        message: err.message,
      };
    }
  }

  const statusCode = res.statusCode ? res.statusCode : SERVER_ERROR;
  switch (statusCode) {
    case VALIDATION_ERROR:
      res.json(errorResponse("Validation Error"));
      break;
    case UNAUTHORIZED:
      res.json(errorResponse("Unauthorized Access"));
      break;
    case FORBIDDEN:
      res.json(errorResponse("Forbidden"));
      break;
    case NOT_FOUND:
      res.json(errorResponse("Not Found"));
      break;

    default:
      res.status(500).json(errorResponse("Server Error"));
      console.log("Something went wrong! But I don't know why?");
      break;
  }
};

export default errorHandler;
