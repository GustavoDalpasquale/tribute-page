export default function DataTeams(div, indexLi) {
  const divInfo = document.querySelector(div);

  fetch("../data.json")
    .then((response) => response.json())
    .then((data) => {
      const divSpan = document.createElement("div");
      const spanName = document.createElement("span");
      const spanTime = document.createElement("span");
      const spanLineup = document.createElement("span");

      spanName.innerText = "Name: " + data[indexLi].name;
      spanTime.innerText = "Played: " + data[indexLi].time;
      spanLineup.innerText = "Lineup: " + data[indexLi].lineup;
      const arraySpan = [spanName, spanTime, spanLineup];
      arraySpan.forEach((span) => {
        divSpan.appendChild(span);
      });

      if (divInfo.firstElementChild) {
        divInfo.innerHTML = "";
      }

      divInfo.appendChild(divSpan);
    });
}
