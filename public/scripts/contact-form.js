// Función para formatear el número de teléfono
function formatPhoneNumber(phone) {
  // Eliminar todos los espacios y caracteres no numéricos excepto '+'
  let cleaned = phone.replace(/[^\d+]/g, '');
  
  // Si no empieza con +56, agregarlo
  if (!cleaned.startsWith('+56')) {
    if (cleaned.startsWith('56')) {
      cleaned = '+' + cleaned;
    } else {
      cleaned = '+56' + cleaned;
    }
  }

  // Asegurarse de que tenga el formato correcto
  if (cleaned.length === 12) { // +56 9 XXXX XXXX
    return cleaned.replace(/(\+56)(\d)(\d{4})(\d{4})/, '$1 $2 $3 $4');
  }
  
  return cleaned;
}

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
  // Crear el contenedor del modal
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center transform transition-opacity duration-300 opacity-0';
  
  const modal = document.createElement('div');
  modal.className = 'bg-white rounded-xl shadow-xl p-6 max-w-sm mx-4 transform transition-all duration-300 scale-95 opacity-0';
  modal.innerHTML = `
    <div class="text-center">
      <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
        <svg class="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
      </div>
      <h3 class="text-lg font-medium text-gray-900 mb-2">
        ¡Gracias por escribirnos! 😊
      </h3>
      <p class="text-sm text-gray-500">
        En breve te contactaremos vía WhatsApp para coordinar una cita.
      </p>
      <button class="mt-5 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:text-sm transition-colors duration-200">
        Cerrar
      </button>
    </div>
  `;

  modalOverlay.appendChild(modal);
  document.body.appendChild(modalOverlay);

  // Forzar un reflow
  modalOverlay.getBoundingClientRect();

  // Mostrar el modal con animación
  requestAnimationFrame(() => {
    modalOverlay.classList.remove('opacity-0');
    modal.classList.remove('scale-95', 'opacity-0');
    modal.classList.add('scale-100', 'opacity-100');
  });

  // Manejar el cierre del modal
  const closeModal = () => {
    modalOverlay.classList.add('opacity-0');
    modal.classList.add('scale-95', 'opacity-0');
    modal.classList.remove('scale-100', 'opacity-100');
    setTimeout(() => modalOverlay.remove(), 300);
  };

  // Cerrar con el botón
  modal.querySelector('button').addEventListener('click', closeModal);

  // Cerrar al hacer clic fuera del modal
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  // Auto-cerrar después de 5 segundos
  setTimeout(closeModal, 5000);
}

// Función para mostrar errores
function showErrors(form, errors) {
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-messages bg-red-50 text-red-500 p-4 rounded-lg mt-4 animate-fade-in';
  errorDiv.innerHTML = `
    <ul class="list-disc list-inside">
      ${errors.map(error => `<li>${error}</li>`).join('')}
    </ul>
  `;
  form.appendChild(errorDiv);
}

// Función para formatear el teléfono mientras se escribe
function setupPhoneFormatting() {
  const phoneInput = document.getElementById('telefono');
  if (!phoneInput) return;

  phoneInput.addEventListener('input', (e) => {
    const formatted = formatPhoneNumber(e.target.value);
    e.target.value = formatted;
  });
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
    showErrors(form, errors);
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