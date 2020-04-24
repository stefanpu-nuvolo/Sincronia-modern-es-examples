export default class Keywords_as_onject_properties {
  get() {
    const someObj = {
      default: "default",
      new: "new"
    };

    return {
      default: someObj.default,
      new: someObj.new,
      random: "randomx",
      function: "function"
    };
  }
}
