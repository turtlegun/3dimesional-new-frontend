import CustomValidationError from "../../../../custom-error/custom-error";

const patterns = {
    phone: /^[0-9]{10}$/,
  };
  

function phone_validation(phone){
    if (!phone ||!patterns.phone.test(phone) ) {

       throw new CustomValidationError("validation","password","PHONE FIELD IS REQUIRED");
      }
    
      
      return true;
}
export default phone_validation