let nameInput = document.querySelector(".add-member");
let addBtn = document.querySelector(".add-btn");
let nameList = document.querySelector(".ordered-names");
let totalPeople = document.querySelector(".totalPeople");
// console.log(totalPeople);
let allNames = [];
let allLi = [];

addBtn.addEventListener("click", () => {
  if (nameInput.value !== "") {
    let li = document.createElement("li");
    li.textContent = `${nameInput.value}`;
    allNames.push(li.textContent);
    allLi.push(li);
    nameList.appendChild(li);
    let breakline = document.createElement("hr");
    li.appendChild(breakline);
    nameInput.value = "";
  }
});
// console.log(nameInput.value);
let numberOfPeople = 0;
addBtn.addEventListener("click", () => {
  // if (nameInput.value !== "") {
  numberOfPeople = Number(totalPeople.textContent);
  numberOfPeople++;
  totalPeople.textContent = numberOfPeople;
  // }
});

// console.log(allNames);
let teamsPanel = document.querySelector(".teams-for-members");
let addTeamBtn = document.querySelector(".add");
let minusTeamBtn = document.querySelector(".minus");
let addPressTimes = 0;
let minusPressTimes = 0;
let totalTeams = document.querySelector(".number-of-teams");
addTeamBtn.addEventListener("click", () => {
  let teams = Number(totalTeams.value);
  teams++;
  totalTeams.value = `${teams}`;
});
minusTeamBtn.addEventListener("click", () => {
  if (Number(totalTeams.value > 0)) {
    let teams = Number(totalTeams.value);
    teams--;
    totalTeams.value = `${teams}`;
  }
});

// if()
let allTeams = document.querySelector(".teams-for-members");
let availableTeams = document.querySelector(".number-of-teams").value;
availableTeams = Number(availableTeams);
console.log(availableTeams);
let assignMemberBtn = document.querySelector(".assign-member");
let teamsToAddNames = [];

assignMemberBtn.addEventListener("click", () => {
  for (let i = 0; i < totalTeams.value; i++) {
    if (totalTeams.value > 0) {
      let teamDiv = document.createElement("div");
      teamDiv.classList = "team1";
      let h3 = document.createElement("h3");
      h3.textContent = `Team ${i + 1}`;
      let namesDiv = document.createElement("div");
      namesDiv.classList = "team-members";
      teamsToAddNames.push(namesDiv);
      teamDiv.appendChild(h3);
      teamDiv.appendChild(namesDiv);
      allTeams.appendChild(teamDiv);
    }
  }
});
// console.log(totalTeams.value);
assignMemberBtn.addEventListener("mousedown", () => {
  if (Number(totalTeams.value) === 0) {
    let noMembers = document.querySelector(".team2");
    noMembers.style.display = "block";
  }
});

// let teamsToAddNames = document.querySelectorAll(".team-members");
let waitingList = document.querySelectorAll(".ordered-names li");

//Grouping the memeber into teams
let fillMembersBtn = document.querySelector(".fill");
fillMembersBtn.addEventListener("click", () => {
  for (let i = 0; i < totalTeams.value; i++) {
    let ol = document.createElement("ul");
    let li = document.createElement("li");
    let randomName = [Math.floor(Math.random() * allNames.length)];
    allLi[randomName].remove();
    // allLi[randomName].style.color = "red";
    //if (allNames.length >= randomName) {
    li.textContent = allNames.splice([randomName], 1);
    ol.appendChild(li);
    teamsToAddNames[i].appendChild(ol);
    //}
    //TOTAL PEOPLE LEFT

    if (allNames.length > 0) {
      numberOfPeople = Number(totalPeople.textContent);
      numberOfPeople--;
      totalPeople.textContent = numberOfPeople;
    }
  }
});
console.log(fillMembersBtn);

//RESET THE INPUTS
let reset = document.querySelector(".reset");
let inputContainer = document.querySelector(".list-of-memebrs");
let teamsContainer = document.querySelector(".teams-for-members");
reset.addEventListener("click", () => {
  inputContainer.innerHTML = "";
  teamsContainer.innerHTML = "";
  window.location.reload();
});
