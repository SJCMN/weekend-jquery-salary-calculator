console.log('HELLO JS');

$(readyNow);


// declarations

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
    let salaryTotal = 0
    for (let employee of employees){
        salaryTotal += employee.annualSalary
    }


    let salaryMonthly = salaryTotal/12

    if ( salaryMonthly >= 40000 ) {
        $( '#salaryTotal' ).addClass('red') 
    };

    $( '#salaryTotal' ).text(formatCurrency(salaryMonthly))

}


function deleteSalary() {
    $( this ).closest('tr').remove()
    
    console.log(this);
    
    removeDeleted(this)
}


function removeDeleted(){
    console.log(this);
    
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

