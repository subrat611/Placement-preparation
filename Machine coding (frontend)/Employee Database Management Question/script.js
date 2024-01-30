(async function () {
  const data = await fetch("./data.json");
  const jsonData = await data.json();

  let employees = jsonData;
  let selectedEmployeeId = employees[0].id;
  let selectedEmployeeInfo = employees[0];

  const employeeList = document.querySelector(".employees__names--list");
  const employeeInfo = document.querySelector(".employees__single--info");

  // add employee later

  // select employee
  employeeList.addEventListener("click", (e) => {
    if (e.target.tagName === "P" && selectedEmployeeId !== e.target.id) {
      selectedEmployeeId = e.target.id;
      renderEmployees();
      renderSingleEmployee();
    }
  });

  const renderSingleEmployee = () => {
    employeeInfo.innerHTML = `
    <img src="${selectedEmployeeInfo.imageUrl}" class="employee__single--img" />
    <p class="employee__single--text">${selectedEmployeeInfo.firstName}${selectedEmployeeInfo.lastName}</p>
    <p class="employee__single--text">${selectedEmployeeInfo.email}</p>
    <p class="employee__single--text">${selectedEmployeeInfo.address}</p>
    `;
  };

  // render all employees
  const renderEmployees = () => {
    employeeList.innerHTML = "";

    employees.forEach((emp) => {
      const employee = document.createElement("p");
      employee.classList.add("employees__names--item");

      if (parseInt(selectedEmployeeId) === emp.id) {
        employee.classList.add("selected");
        selectedEmployeeInfo = emp;
      }

      employee.setAttribute("id", emp.id);
      employee.innerHTML = `${emp.firstName} <svg width="12px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>`;

      employeeList.append(employee);
    });
  };

  if (selectedEmployeeInfo) renderSingleEmployee();

  renderEmployees();
})();
