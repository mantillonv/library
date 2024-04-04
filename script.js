document.addEventListener('DOMContentLoaded', function () {
    const newBookButton = document.querySelector('.start');
    const bookForm = document.getElementById('book-form');
    const bookTableBody = document.querySelector('.book-table tbody');

    newBookButton.addEventListener('click', function () {
        bookForm.style.display = 'block';
    });

    bookForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form input values
        const author = document.getElementById('author').value;
        const title = document.getElementById('title').value;
        const pages = document.getElementById('pages').value;

        // Add new row to table with input values
        const newRow = document.createElement('tr');
        newRow.innerHTML = `<td>${author}</td><td>${title}</td><td>${pages}</td>`;

        // Insert new row at the beginning of the table body
        bookTableBody.insertBefore(newRow, bookTableBody.firstChild);

        // Reset form fields
        bookForm.reset();

        // Hide the form after adding a book
        bookForm.style.display = 'none';
    });
});

