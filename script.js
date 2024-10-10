document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const address = document.getElementById('address').value;
    const contact = document.getElementById('contact').value;

    alert(`Order placed successfully!\nName: ${name}\nService: ${service}\nAddress: ${address}\nContact: ${contact}`);
});
