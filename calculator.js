function performOperation(operation) {
    var num1 = parseFloat(document.getElementById("n1").value);
    var num2 = parseFloat(document.getElementById("n2").value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers in both fields.");
        return;
    }

    switch (operation) {
        case 'Add':
            result = num1 + num2;
            break;
        case 'Sub':
            result = num1 - num2;
            break;
        case 'Mul':
            result = num1 * num2;
            break;
        default:
            alert("Please choose a valid operation.");
            return;
    }

    document.getElementById("result").value = result;
} 