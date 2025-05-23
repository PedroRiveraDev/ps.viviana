// Función para validar el formulario
function validateForm(formData) {
  const requiredFields = ['nombre', 'email', 'telefono', 'mensaje'];
  const errors = [];

  requiredFields.forEach(field => {
    if (!formData.get(field)?.trim()) {
      errors.push(`El campo ${field} es obligatorio`);
    }
  });

  // Validación básica de email
  const email = formData.get('email');
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('El correo electrónico no es válido');
  }

  // Validación básica de teléfono (formato chileno)
  const phone = formData.get('telefono');
  if (phone && !/^\+?56\s?9\s?\d{4}\s?\d{4}$/.test(phone.replace(/\s/g, ''))) {
    errors.push('El teléfono debe tener formato chileno (+56 9 XXXX XXXX)');
  }

  return errors;
}

// Función para construir el mensaje de WhatsApp
function buildWhatsAppMessage(formData) {
  const message = `Hola, soy ${formData.get('nombre')} y me gustaría agendar una consulta.
Correo: ${formData.get('email')}
Teléfono: ${formData.get('telefono')}
Mensaje: ${formData.get('mensaje')}`;

  return encodeURIComponent(message);
}

// Función para mostrar el popup de confirmación
function showConfirmationPopup() {
  const popup = document.createElement('div');
  popup.className = 'fixed top-4 right-4 bg-white rounded-lg shadow-xl p-6 max-w-sm z-50 transform transition-all duration-500 ease-in-out';
  popup.innerHTML = `
    <div class="flex items-start">
      <div class="flex-shrink-0">
        <svg class="h-6 w-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">
          ¡Gracias por tu mensaje! En breve te contactaremos por WhatsApp para coordinar tu cita 🧠💬
        </p>
      </div>
      <button class="ml-4 text-gray-400 hover:text-gray-500 focus:outline-none" onclick="this.parentElement.remove()">
        <span class="sr-only">Cerrar</span>
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  `;

  document.body.appendChild(popup);

  // Auto-cerrar después de 5 segundos
  setTimeout(() => {
    popup.classList.add('opacity-0');
    setTimeout(() => popup.remove(), 500);
  }, 5000);
}

// Función principal para manejar el envío del formulario
function handleSubmit(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  const errors = validateForm(formData);

  // Remover errores anteriores si existen
  const previousErrors = form.querySelector('.error-messages');
  if (previousErrors) {
    previousErrors.remove();
  }

  // Si hay errores, mostrarlos
  if (errors.length > 0) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-messages bg-red-50 text-red-500 p-4 rounded-lg mt-4';
    errorDiv.innerHTML = `
      <ul class="list-disc list-inside">
        ${errors.map(error => `<li>${error}</li>`).join('')}
      </ul>
    `;
    form.appendChild(errorDiv);
    return;
  }

  // Si no hay errores, construir el mensaje y abrir WhatsApp
  const whatsappMessage = buildWhatsAppMessage(formData);
  const whatsappUrl = `https://wa.me/56935914385?text=${whatsappMessage}`;
  
  // Abrir WhatsApp en una nueva pestaña
  window.open(whatsappUrl, '_blank');
  
  // Mostrar popup de confirmación
  showConfirmationPopup();
  
  // Limpiar el formulario
  form.reset();
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', handleSubmit);
  }
}); 