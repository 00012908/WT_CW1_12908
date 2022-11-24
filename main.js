function validate() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username =='1' && password =='1') 
    {
        alert('Loged in successfuly!');
    }
     else {
        alert('Login failed');
    }
}