console.log('HELLO JS');

$(readyNow);


// declarations

let salaryTotal = 0
const cap = 40000

const employees = [

    {
        firstName: 'Jimmy',
        lastName: 'Smith',
        employeeId: '3937',
        employeeTitle: 'Manager',
        annualSalary: 99000,
    },
    {
        firstName: 'Eric',
        lastName: 'Daniels',
        employeeId: '3938',
        employeeTitle: 'Supervisor',
        annualSalary: 89000,
    },
    {
        firstName: 'Spencer',
        lastName: 'Walker',
        employeeId: '9328',
        employeeTitle: 'Director',
        annualSalary: 129000,
    },
    {
        firstName: 'Matt',
        lastName: 'Johnson',
        employeeId: '3892',
        employeeTitle: 'Account Director',
        annualSalary: 139000,
    }

]




function readyNow(){

    console.log('JQ READY');
    // click listeners
    $( '#submitEmployee' ).on( 'click', addEmployee )

    // remove row
    $( '.table' ).on( 'click', '.delete', deleteSalary )

    // pre load table
    renderEmployee();
    addSalaries()
}



function addEmployee () {
    
    // employee object
    const employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeId: $('#employeeId').val(),
        employeeTitle: $('#employeeTitle').val(),
        annualSalary: parseInt($('#annualSalary').val())
    }

    // push input fields to array

    employees.push(employee)
    
    console.log(employees);
    
    // clear fields

    $('#firstName').val(''),
    $('#lastName').val(''),
    $('#employeeId').val(''),
    $('#employeeTitle').val(''),
    $('#annualSalary').val('')

    // call render function
    renderEmployee();
    addSalaries()

}


// render array of objects to DOM

function renderEmployee () {
    // clear table elements on DOM
    $('.employeeRow').empty();

    for (let employee of employees) {

        const row = $(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.employeeId}</td>
                <td>${employee.employeeTitle}</td>
                <td>${formatCurrency(employee.annualSalary)}</td>
                <td><button class="btn btn-danger btn-sm delete">Delete</button></td>
            </tr>
        `);

        $('.employeeRow').append(row);

    }

}

// render salary budget to dom



function addSalaries(){
    // total salaries for employees  
    for (let employee of employees){
        salaryTotal += employee.annualSalary
    }

    // calc monthly salary budget
    let salaryMonthly = salaryTotal/12

    // check if monthly salary exceeds cap
    if ( salaryMonthly >= cap ) {
        $( '#salaryTotal' ).addClass('red') 
    };

    // append dom with formatted salary number
    $( '#salaryTotal' ).text(formatCurrency(salaryMonthly))

}


function deleteSalary() {

    // selects parent row of clicked button and removes from DOM
    $( this ).closest('tr').remove()
    
    // calculates text() found inside row
    // removes all characters except numbers

    // console.log(this);
    let deletedRow = $( this ).parent().parent().text();
    let deletedSalary = deletedRow.replace(/[^\d.-]/g, '')

    // removes first 4 numbers of remaining number string
    // removes employee id from salary string
    // calculates monthly budget of removed salary
    deletedSalary = deletedSalary.slice(4)/12

    console.log(deletedSalary);
    // call to add result to DOM
    appendRemaining(deletedSalary)
}


function appendRemaining(salary){

    console.log('appendRemaining');
    
}

// returns currency formatted number
function formatCurrency(number) {
    return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
    }).format(number);
  }

// returns currency formatted number
  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

