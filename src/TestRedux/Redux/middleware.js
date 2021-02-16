// import { CREATE_POST } from "./types";

// const spam = ["not", "hot"];

// export function spamWords({ dispatch }) {
//   return function (next) {
//     return function (action) {
//       if (action.type === CREATE_POST) {
//         const found = spam.filter((item) => {
//           action.payload.includes(item);
//           console.log(found);
//           //   if (found) {
//           //     // return dispatch(alert);
//           //     alert("alert");
//           //   }
//         });
//       }
//       return next(action);
//     };
//   };
// }
