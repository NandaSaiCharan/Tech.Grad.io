function contactWhatsApp(planName) {
    const phoneNumber = '+918919925429'; // Replace with your actual WhatsApp number
    const message = `Hello! I am interested in the ${planName}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
