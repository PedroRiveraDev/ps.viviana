import type { APIRoute } from 'astro';
import { handleSubmit } from '../../utils/form';

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.json();
    const result = await handleSubmit(formData);

    return new Response(JSON.stringify(result), {
      status: result.success ? 200 : 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error en el endpoint de contacto:', error);
    return new Response(
      JSON.stringify({
        success: false,
        message: 'Lo siento, hubo un error al procesar tu solicitud.',
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
}; 