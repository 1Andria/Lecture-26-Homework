// უნდა შექმნათ ღილაკი html-ში, რომლის კლიკზეც ყოველჯერზე უნდა გამოიტანოს ახალი პროდუქტის
// სახელი და ფასი html-ში , ამისთვის api-ს ბოლოში კონკატენაციით უნდა ჩააწოდოთ
// ყოველ კლიკზე ახალი ციფრი
// API: `https://fakestoreapi.com/products/${number}`

let btn = document.getElementById("btn");
let index = 1;
btn.addEventListener("click", async () => {
  try {
    let data = await fetch(`https://fakestoreapi.com/products/${index}`);
    let products = await data.json();
    let name = document.createElement("h3");
    document.body.appendChild(name);
    name.textContent = "მოდელი = " + products.title;
    let price = document.createElement("p");
    document.body.appendChild(price);
    price.textContent =
      "პროდუქტის ღირებულება შეადგენს " + products.price + " ლარს";

    index++;
    if (index > products.length) {
      alert("პროდუქტები ამოიწურა");
    }
  } catch (error) {
    alert("პროდუქტების რაოდენობა ამოიწურა");
  }
});
