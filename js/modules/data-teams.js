export default function DataTeams(div, indexLi) {
  const divInfo = document.querySelector(div);

  // github.io don't accepted file.json
  const data = [
    {
      name: "Imperial Esports",
      time: "Current - Feb. 2022",
      lineup: "FalleN, JOTA, boltz, VINI, chelo",
    },
    {
      name: "Team Liquid",
      time: "Dec. 2021 - Jan. 2021",
      lineup: "FalleN, EliGE, Stewie2K, NAF, Grim",
    },
    {
      name: "mibr",
      time: "Sept. 2020 - Jun. 2018",
      lineup: "FalleN, fer, coldzera, boltz, Stewie2K",
    },
    {
      name: "SK Gaming",
      time: "Jun. 2018 - Jul. 2016",
      lineup: "FalleN, Fer, FNX, coldzera, TACO",
    },
    {
      name: "Luminosity Gaming",
      time: "Jul. 2016 - Jul. 2015",
      lineup: "FalleN, Fer, FNX, coldzera, TACO",
    },
  ];

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
}
