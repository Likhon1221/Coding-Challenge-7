// Task 1. Create a Department Structure

let company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Eve',
                    salary: 85000,
                    subordinates: [
                        {
                            name: 'Frank',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Grace',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
 
 
 }; // You need to click each array to see the output
 console.log(company);

 // Task 2. Create a Recursive Function to Calculate Total Salary for a Department

 function calculateDepartmentSalary(department) {
let totalSalary = 0;

for (let i = 0; i < department.employees.length; i++) {
    totalSalary += department.employees[i].salary;
    if (department.employees[i].subordinates.length > 0) {
      totalSalary += calculateDepartmentSalary({
        employees: department.employees[i].subordinates
      });
    }
  }

  return totalSalary;
};
console.log(calculateDepartmentSalary(company.departments[1]));

        