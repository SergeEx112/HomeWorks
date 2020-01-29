const renderPizza = pizza => {
    const card = document.createElement("div"); ////////создаем карту
    card.className = "pizzas-card";
    card.id = `pizza-${pizza.id}`;
  
    const img = document.createElement("div"); ///////////создаем картинку
    img.className = "pizzaImg";
    img.innerHTML = `<img src="img/${pizza.img}" alt="icon">`;
    card.appendChild(img);
  
    const pizzaName = document.createElement("div"); ///////////создаю заголовок для названия
    pizzaName.className = "pizza_Name";
    pizzaName.innerHTML = `<h6>` + pizza.name + `</h6>`;
    card.appendChild(pizzaName);
  
    const composition = document.createElement("div"); /////////////создаю ингридиенты
    composition.innerHTML =
      "<ul>" +
      "Ингридиенты: " +
      pizza.composition.map(c => `<li>${c},</li>`).join(" ") +
      "</ul>";
    composition.className = "pizzas-card__composition";
    card.appendChild(composition);
  
    const caloricity = document.createElement("p"); ///////////////обозначаю калорийность
    caloricity.className = "pizzs-card__caloricity";
    caloricity.innerText = `Калорийность: ${pizza.caloricity}`;
    card.appendChild(caloricity);
  
    const price = document.createElement("p"); ///////////////создаю прайс
    price.className = "pizzas-card__price";
    price.innerText = `Цена: ${pizza.price} грн.`;
    card.appendChild(price);
  
    const button = document.createElement("button"); ///////////кнопка купить
    button.className = "pizzas-card__button";
    button.innerText = "Хочу !";
    card.appendChild(button);
  
    button.onclick = function(e) {
      /////////вешаю клик на кнопку
      console.log(this);
    };
  
    return card;
  };
  
  const renderDiv = arr => {
    //////////////////рендерю див
    const a = document.querySelector(".card-holder");
    a.innerHTML = "";
    for (let pizza of arr) {
      const card = renderPizza(pizza);
      a.appendChild(card);
    }
  };
  renderDiv(pizzaList);
  
  ///////////////////селект изменяющий цену по возростанию или убыванию
  
  const select = document.getElementById("sort");
  
  sort.onchange = function() {
    const tempArr = [...pizzaList];
    tempArr.sort((a, b) => {
      if (a.price < b.price) return this.value === "1" ? -1 : 1;
      if (a.price > b.price) return this.value === "1" ? 1 : -1;
      if (a.price === b.price) return 0;
    });
    renderDiv(tempArr);
  };
  
  //////////////////поиск по вводу
  const input = document.getElementById("inp");
  
  input.onchange = function(e) {
    renderDiv(
      pizzaList.filter(pizza =>
        pizza.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
    console.dir(e.target.value); /////////////// выводит строку