
document.addEventListener('DOMContentLoaded', function() {
    // Toggle mobile menu
    const btn = document.getElementById('mobile-menu-button');
    const menu = document.getElementById('mobile-menu');
    btn.addEventListener('click', function() {
        menu.classList.toggle('hidden');
    });

    // Prompt for username once DOM is ready
    let user = window.prompt("Please enter your username:", "User");
    if (!user) user = "User";
    document.getElementById("user").textContent = `${user}`;

    // Add event listener to all Log out buttons
    document.querySelectorAll('button').forEach(btn => {
        if (btn.textContent.trim() === "Log out") {
            btn.addEventListener('click', function() {
                alert(`User ${user} has logged out.`);
                // Prompt for new username
                let newUser = window.prompt("Please enter your username:", "User");
                if (!newUser) newUser = "User";
                user = newUser;
                document.getElementById("user").textContent = `${user}`;
            });
        }
    });

    // Form logic
    const nameInput = document.getElementById('nameFill');
    const dateInput = document.getElementById('dateFill');
    const messageInput = document.getElementById('messageFill');
    const outputName = document.getElementById('outputName');
    const outputDate = document.getElementById('outputDate');
    const outputMessage = document.getElementById('outputMessage');
    const outputTimestamp = document.getElementById('outputTimestamp');
    const output = document.getElementById('output');
    const form = nameInput.closest('form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Variable input
        const name = nameInput.value;
        const date = dateInput.value;
        const message = messageInput.value;

        // Get current date and time
        const now = new Date();
        const timestamp = now.toString().split(" (")[0];

        // ambil radio button yang dipilih
        const genderInput = document.querySelector('input[name="genderFill"]:checked');
        const gender = genderInput ? genderInput.value : '-';

        // Format dd/mm/yyyy
        const dateValue = new Date(date);
        const day = String(dateValue.getDate()).padStart(2, '0');
        const month = String(dateValue.getMonth() + 1).padStart(2, '0');
        const year = dateValue.getFullYear();
        const formatDate = `${day}/${month}/${year}`;

        //return value
        outputName.textContent = name || '-';
        outputDate.textContent = formatDate || '-';
        outputGender.textContent = gender;
        outputMessage.textContent = message || '-';
        outputTimestamp.textContent = timestamp;

        // Clear input fields
        output.classList.remove('hidden');
        nameInput.value = '';
        dateInput.value = '';
        messageInput.value = '';
        // Uncheck radio buttons
        const genderRadios = document.querySelectorAll('input[name="genderFill"]');
        genderRadios.forEach(radio => radio.checked = false);
    });
});