"use strict";

// fetch("http://randomuser.me/api")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("end"));

// Promise.resolve([{ fn: "Test" }, { fs: "Ivo" }]).then((data) =>
//   console.log(data)
// );

// Promise.reject(new Error("Toy error")).catch((error) => console.log(error));

// function executor(resolve, reject) {
//   // resolve([{ fn: "Test" }, { fs: "Ivo" }]);
//   reject(new Error("error from executor"));
// }

// const myPromise = new Promise(executor);

// myPromise
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// function delay(timeout) {
//   return new Promise((resolve, reject) => {
//     if (typeof timeout !== "number") {
//       return reject(new TypeError("timeout must be number"));
//     }
//     if (timeout < 0 || !Number.isInteger(timeout)) {
//       return reject(new RangeError("timeout must be not negative integer"));
//     }
//     setTimeout(resolve, timeout);
//   });
// }

// delay(1000)
//   .then(() => console.log("end"))
//   .catch((error) => console.log(error));

// промісифікація завантаження зображень
// const src = "https://klike.net/uploads/posts/2019-01/1547365376_1.jpg";

// loadImage(src)
//   .then((img) => {
//     document.body.append(img);
//   })
//   .catch((e) => console.log("e :>> ", e));

// function loadImage(src) {
//   return new Promise((res, rej) => {
//     const img = document.createElement("img");
//     img.src = src;
//     img.onload = () => {
//       res(img);
//     };
//     img.onerror = () => {
//       rej(new Error("image was not loaded"));
//     };
//   });
// }
