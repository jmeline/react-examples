export default function makeActionCreator(type, ...argNames) {
  if (arguments.length === 0) {
    throw new Error("Need arguments");
  }
  const action = { type: type.toUpperCase() };
  if (arguments.length === 1) {
    return action;
  }
  if (arguments.length >= 2) {
    return function (...args) {
      return argNames.reduce((acc, argName, index) =>
        ({ ...acc, [argName]: args[index] }), action);
    };
  }
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
