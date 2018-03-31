export function makeActionCreator(type, ...argNames) {
  return function (...args) {
    return argNames.reduce((action, argName, index) =>
      ({ ...action, [argName]: args[index] }), { type });
  };
};
// export function makeActionCreator(type, ...argNames) {
//   return function (...args) {
//     let action = { type };
//     argNames.forEach((argName, index) => {
//       action[argName] = args[index]
//     });
//     return action;
//   }
// };
