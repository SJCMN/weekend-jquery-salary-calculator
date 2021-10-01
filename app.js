console.log('HELLO JS');

$(readyNow);

// declarations

const employees = []

function readyNow(){

    console.log('JQ READY');
    // click listeners
    $( '#submitEmployee' ).on( 'click', addEmployee )
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

    // for ( let el of employee) {
    //     console.log(el);
    //     el.val('')
    // }



    $('#firstName').val(''),
    $('#lastName').val(''),
    $('#employeeId').val(''),
    $('#employeeTitle').val(''),
    $('#annualSalary').val('')


}