import { sn_ws } from "@nuvolo/servicenow-types";
import Keywords_as_onject_properties from "../../sys_script_include/Keywords_as_onject_properties/script.sn";

declare const request: sn_ws.RESTAPIRequest;
declare const response: sn_ws.RESTAPIResponse;

(function process(req, res) {
  const keywordsAsObjectProps = new Keywords_as_onject_properties();

  const result = keywordsAsObjectProps.get();

  // res.setBody({ examples: array });
  res.setBody({
    default: result.default,
    new: result.new
  });
})(request, response);
