function showOptions() {
    document.getElementById('initial-form').style.display = 'none';
    document.getElementById('options').style.display = 'block';
}

function showDashboard() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

function showInsurance() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('insurance-information').style.display = 'block';
}

function showLoanApplication() {
    document.getElementById('options').style.display = 'none';
    document.getElementById('loan-application').style.display = 'block';
}

function goBack() {
    document.getElementById('options').style.display = 'block';
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('insurance-information').style.display = 'none';
    document.getElementById('loan-application').style.display = 'none';
}

function submitInsuranceApplication() {
    // Add logic to submit insurance application
    // This is where you would send data to your backend for processing
    // For now, let's just go back to the options
    goBack();
}

function submitLoanApplication() {
    // Add logic to submit loan application
    // This is where you would send data to your backend for processing
    // For now, let's just go back to the options
    goBack();
}