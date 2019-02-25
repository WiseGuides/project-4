function createEmployeeCard(employee) {
  let nameElement = document.createElement('div');
  let nameText = document.createTextNode(employee.lastName + ', ' + employee.firstName);
  nameElement.appendChild(nameText);

  let departmentElement = document.createElement('div');
  let departmentText = document.createTextNode(employee.department);
  departmentElement.appendChild(departmentText);

  let payElement = document.createElement('div');
  let payText = document.createTextNode('$' + employee.payAmount + ' ' + employee.pay);
  payElement.appendChild(payText);

  let typeElement = document.createElement('div');
  let typeText = document.createTextNode(employee.type);
  typeElement.appendChild(typeText);

  let wrapper = document.createElement('div');
  wrapper.classList.add('wrapper', 'card');
  wrapper.appendChild(nameElement);
  wrapper.appendChild(departmentElement);
  wrapper.appendChild(payElement);
  wrapper.appendChild(typeElement);

  return wrapper;
}

function addEmployee(employee) {
  document.querySelector('main').appendChild(createEmployeeCard(employee));
}  

employees.forEach(addEmployee);

let currentLayout = 'card';

function layout(layout) {
  if (layout.id === currentLayout) {
    // do nothing
  } else {
    currentLayout = layout.id;
    document.querySelectorAll('main .wrapper').forEach(function(employeeInfo){
      employeeInfo.classList.remove('list', 'card');
      employeeInfo.classList.add(currentLayout);
    })
  }
}