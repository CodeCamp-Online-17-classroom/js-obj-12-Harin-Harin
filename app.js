const employees = {
  john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
  peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
  mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
  sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
};

function checkEmployee(namee) {
  if (employees.hasOwnProperty(namee)) {
    const employee = employees[namee];
    console.log(`Name: ${namee}, salary: ${employee.salary}, address: ${employee.address.district}, ${employee.address.province}`);
  } else {
    console.log('Not Found');
  }
}

let namee = prompt("กรอกชื่อพนักงาน:").toLowerCase();
checkEmployee(namee);
