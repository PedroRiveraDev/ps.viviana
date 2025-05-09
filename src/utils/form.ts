interface FormData {
  name: string;
  email: string;
  message: string;
}

export const handleSubmit = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    const response = await fetch(`https://formspree.io/f/${import.meta.env.FORMSPREE_ID}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Error al enviar el formulario');
    }

    return {
      success: true,
      message: '¡Gracias por tu mensaje! Te responderé lo antes posible.',
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      success: false,
      message: 'Lo siento, hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.',
    };
  }
}; 