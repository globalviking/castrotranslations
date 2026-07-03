export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    const nome = formData.get('nome') || '';
    const email = formData.get('email') || '';
    const assunto = formData.get('assunto') || '';
    const mensagem = formData.get('mensagem') || '';

    const body = `Nome: ${nome}\nE-mail: ${email}\nAssunto: ${assunto}\n\nMensagem:\n${mensagem}`;

    const sendRequest = new Request('https://api.mailchannels.net/tx/v1/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: 'patricia@castrotranslations.net', name: 'Patricia de Paiva e Castro' }]
        }],
        from: { email: 'contato@castrotranslations.net', name: nome },
        subject: `[Site] ${assunto || 'Contato via site'}`,
        content: [{ type: 'text/plain', value: body }]
      })
    });

    const resp = await fetch(sendRequest);

    if (resp.ok) {
      return Response.redirect(`${new URL(context.request.url).origin}/contato.html?enviado=ok`, 302);
    } else {
      return new Response(JSON.stringify({ success: false }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
  } catch (err) {
    return new Response(JSON.stringify({ success: false, error: err.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
