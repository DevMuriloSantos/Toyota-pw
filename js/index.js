const input = document.getElementById("msg");
    const button = document.getElementById("send");
    const chat = document.getElementById("chat");

    button.addEventListener("click", async () => {
      const message = input.value;
      if (!message) return;

      chat.innerHTML += `<p><b>Você:</b> ${message}</p>`;

      // Chama o backend
      const res = await fetch("http://localhost:3000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      chat.innerHTML += `<p><b>GPT:</b> ${data.reply}</p>`;
      input.value = "";
    });