class CustomValidationError extends Error {
    constructor(type,name, message) {
      super(message);
      this.name = name;
      this.type=type 

    }
  }
  
export default CustomValidationError;
  