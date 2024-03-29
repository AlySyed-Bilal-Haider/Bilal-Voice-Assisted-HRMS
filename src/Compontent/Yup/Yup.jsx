import * as yup from "yup";
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];
//............signup scheme................
const schema = yup.object().shape({
  email: yup
    .string()
    .email("please enter vailed email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "minimam 8 characters")
    .max(32, "Maximum 32 characters")
    .required(),
  phone: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(11, "Please enter valied numder")
    .required("A phone number is required"),
  fname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .required("first name is required"),
  lname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid last  name")
    .required("Last name is required"),
  username: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid user name")
    .required("user name is required"),
  address: yup.string().required("address is required"),
});

export default schema;
//.......................login form validations......................
const Loginschema = yup.object().shape({
  email: yup
    .string()
    .email("please enter vailed email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "minimam 8 characters")
    .max(32, "Maximum 32 characters")
    .required(),
});

export { Loginschema };

//.................Notice scheme...............
export const Noticeschema = yup.object().shape({
  subject: yup.string().required("Subject is required"),
  notice: yup
    .string()
    .min(25, "Minimum 25 character")
    .max(250, "maximum 250 characters")
    .required("Message is required"),
});
// ......................assests..................
export const Assestschema = yup.object().shape({
  asset_name: yup.string().required("Assest name required"),
  asset_id: yup.string().required("Asset Id required"),
  purchase_date: yup.string().required("Date is required"),
  purchase_from: yup.string().required("Purchase is required"),
  manufacturer: yup.string().required("manufacturer is required"),
  model: yup.string().required("Model is required"),
  status: yup.string().required("status is required"),
  supplier: yup.string().required("supplier is required"),
  condition: yup.string().required("condition is required"),
  Warranty: yup.string().required("Warranty is required"),
  value: yup
    .number()
    .typeError("That doesn't look like a value")
    .positive("A  number can't start with a minus")
    .integer("A  number can't include a decimal point")
    .required("value is required"),
  asset_user: yup.string().required("asset_user is required"),
  description: yup.string().required("description is required"),
});

// ......................Client add..................

export const Clientschema = yup.object().shape({
  firstname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid first name")
    .required("first name is required"),
  lastname: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid last name")
    .required("last name is required"),
  username: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid username name")
    .required("user name is required"),
  email: yup
    .string()
    .email("please enter vailed email")
    .required("Email is required"),
  clientid: yup.string().required("Client Id is required"),
  phone: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(11, "Please enter valied numder")
    .required("A phone number is required"),
  company: yup.string().required("Company name is required"),
  address: yup.string().required("address is required"),
});

// ........department....................
export const departmentschema = yup.object().shape({
  department: yup.string().required("Department is required"),
});

// ............designationschema.......

export const designationschema = yup.object().shape({
  designation: yup.string().required("designation is required"),
  department: yup.string().required("Department is required"),
});

// ..........employee schema...........
export const employeeshema = yup.object().shape({
  email: yup
    .string()
    .email("please enter vailed email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "minimam 8 characters")
    .max(32, "Maximum 32 characters")
    .required(),
  confirm_pass: yup
    .string()
    .required("Confirm password required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  username: yup.string().required("Selected user is required"),
  department: yup.string().required("Department is required"),
  designation: yup.string().required("Designations is required"),
});
// ....................Leave schema...............
export const Leaveschema = yup.object().shape({
  employee: yup.string().required("Leave type is required"),
  starting_at: yup.string().required("started date is required"),
  ends_on: yup.string().required("ending is required"),
  reason: yup
    .string()
    .required("reason is required")
    .min(25, "Minimam 25 character")
    .max(250, " Maximum is 250"),
});

// ...............Holidayschema..........
export const Holidayschema = yup.object().shape({
  holiday: yup.string().required("Holiday title requred"),
  date: yup.string().required("Date is required"),
});
export const categoryschema = yup.object().shape({
  category: yup.string().required("Category is required"),
});

export const jobschema = yup.object().shape({});

// ..............User schema.__inputType...............
export const userschema = yup.object().shape({
  username: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid user name")
    .required("Name is required"),
  email: yup
    .string()
    .email("Please enter vaild email")
    .required("Email required"),
  password: yup
    .string()
    .min(8, "minimam 8 characters")
    .max(32, "Maximum 32 characters")
    .required(),
  confirm_pass: yup
    .string()
    .required("Confirm password required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  phone: yup
    .number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(11, "Please enter valied numder")
    .required("A phone number is required"),
});

// ...........Applications schema............
export const Applicationschema = yup.object().shape({
  instituename: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid University name")
    .required("univeristy name is required"),
  degree: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid degree name")
    .required("degree name is required"),
  cgpa: yup.string().max(4, "Maximum 4").required("CGPA is required"),
  subject: yup.string().required("Subject is required"),
  degreeyear: yup.string().required("Degree is required"),
});

// ............Resignations Employee...............

export const Resignationsschema = yup.object().shape({
  employee: yup.string().required("employee name is required"),
  noticedate: yup.string().required("Notice date name is required"),
  resignation_date: yup.string().required("Resignation date is required"),
  reason: yup.string().required("Reason is required"),
  department: yup.string().required("department is required"),
});

export const projectschema = yup.object().shape({
  pro_name: yup
    .string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid project name ,only characters")
    .required("Project name is required"),
  client: yup.string().required("Client name is required"),
  teammem: yup.string().required("Team memebers required"),
  start_date: yup.string().required("start date is required"),
  end_date: yup.string().required("End date is required"),
  leader: yup.string().required("team leader is required"),
  department: yup.string().required("Department name is required"),
  description: yup
    .string()
    .min(30, "Project description minimum 30 characters")
    .max(250, "Project description maximum 250 characters")
    .required("Project details is required"),
});

export const taskschema = yup.object().shape({
  description: yup.string().required("Project name is required"),
  status: yup.string().required("Status is required complete or working"),
});

export const Promotionschema =yup.object().shape({
  promotion_from:yup.string().required("Promotion from is required"),
  promotion_to:yup.string().required("Promotion to is required"),
  employee:yup.string().required("Employee is required")
})