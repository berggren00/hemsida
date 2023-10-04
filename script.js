// document.addEventListener("DOMContentLoaded", (event) => {
//   // let year = "2023";
//   // let date = "27";
//   // let month = "September";
//   // console.log(day + " " + month + " " + year)
//   //   setTimeout(() => {
//   //     let popup = document.getElementById("popup");
//   //     popup.style.display = "block";
//   //   }, 5000);
//   let name = "Anja";
//   let greeting = "Hej";
//   let wish = "hoppas du har det bra";
//   console.log(greeting, name, wish + "!");

//   let nameOutput = document.getElementById("name");

//   let nameInput = document.getElementById("name-input");

//   nameInput.addEventListener("change", (event) => {
//     console.log(event);
//   });

//   let button = document.getElementById("button");
//   button.addEventListener("click", (event) => {
//     console.log("klicka inte på mig fohhelvete");

//     console.log(nameInput);

//     if (nameInput.value == "Blommor") {
//       nameOutput.textContent = "Du sökte på: " + nameInput.value;
//     } else {
//       nameOutput.textContent =
//         "Du sökte på något annat istället för" + nameInput.value;
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function); => {
//     let knapp = document.getElementById("knapp");
//     knapp.textcontent ="Hej";
//     knapp.addEventListener("click", function);
//   });

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
