document.addEventListener('DOMContentLoaded', function() {
    const userBtn = document.getElementById('userBtn');
    const userDisplay = document.getElementById('userDisplay');

    userBtn.addEventListener('click', function() {
        // Fetching a random user from the API
        fetch('https://randomuser.me/api/?nat=us&gender=male')
            .then(response => response.json()) // Parsing the JSON response
            .then(data => {
                // Displaying user information on the webpage
                const user = data.results[0];
                const fullName = `${user.name.first} ${user.name.last}`;
                const email = user.email;
                userDisplay.textContent =` Name: ${fullName}`;
            })
            .catch(error => {
                // Handling errors
                userDisplay.textContent = 'Oops! Something went wrong. Please try again later.';
                console.error('Error fetching user data:', error);
            });
    });
});