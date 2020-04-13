// var Keywords_as_onject_properties = Class.create();
// Keywords_as_onject_properties.prototype = {
//     initialize: function() {
//     },

//     type: 'Keywords_as_onject_properties'
// };

export default class Keywords_as_onject_properties {
  get() {
    const someObj = {
      default: "default",
      new: "new"
    };

    return {
      default: someObj.default,
      new: someObj.new
    };
  }
}
