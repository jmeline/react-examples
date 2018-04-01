export default function makeActionCreator(type, ...argNames) {
  if (arguments.length === 0) {
    throw new Error("Need arguments");
  }
  if (arguments.length === 1) {
    return { type };
  }
  if (arguments.length >= 2) {
    return function (...args) {
      return argNames.reduce((action, argName, index) =>
        ({ ...action, [argName]: args[index] }), { type });
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
