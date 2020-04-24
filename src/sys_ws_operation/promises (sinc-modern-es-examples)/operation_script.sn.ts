import { sn_ws } from "@nuvolo/servicenow-types";
// import Keywords_as_onject_properties from "src/sys_script_include/Keywords_as_onject_properties/script.sn";

declare const request: sn_ws.RESTAPIRequest;
declare const response: sn_ws.RESTAPIResponse;

(async function process(req, res) {
  const keywordsAsObjectProps = new Promise((resolve, reject) => {
    resolve("Promises are working");
  });

  let obj = {};
  Object.setPrototypeOf({}, obj);

  // edited

  let r = "Default";
  // r = await keywordsAsObjectProps as string;
  //   keywordsAsObjectProps.then(function(r) {
  res.setBody({
    //   result: awRes || "r"
    result: r
  });
  //   });
})(request, response);
