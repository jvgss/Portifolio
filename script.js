document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Captura os dados do formulário
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    // Cria a URL para o WhatsApp com a mensagem personalizada
    const whatsappNumber = "5511961271383"; // Substitua pelo número do WhatsApp com o código do país (ex: 5511999999999)
    const whatsappMessage = `Olá, meu nome é ${name}. Meu e-mail é ${email}. Aqui está minha mensagem: ${message}`;

    // Converte a mensagem em URL codificada para compatibilidade com o WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // Redireciona o usuário para o WhatsApp
    window.open(whatsappURL, "_blank");
});
