const buttons = [
    {
      name: "Instagram",
      link: "https://www.instagram.com/septianidrp/",
      class: "instagram",
    },
    {
      name: "G-mail",
      link: "mailto:septianidrp@gmail.com?Subject=Mau%20tanya",
      class: "g-mail",
    },
    {
      name: "Linkedin",
      link: "https://www.linkedin.com/in/septianidrp/",
      class: "linkedin",
    },
    {
      name: "Github",
      link: "https://github.com/Septigooooo",
      class: "github",
    },
    {
      name: "Netlify",
      link: "https://app.netlify.com/teams/septianidrp/overview",
      class: "netlify",
    },
  ];
  
  // memanggil button container
  const btnContainer = document.getElementById("button-container");
  
  // iterasi/dapatkan masing-masing data button dari array buttons
  buttons.forEach((button) => {
    // membuat element button
    const btn = document.createElement("button");
  
    // mengisi text dari button
    btn.innerText = button.name;
  
    // menambahkan class btn ke dalam button
    btn.classList.add("btn");
  
    // menambahkan class untuk merubah warnanya
    btn.classList.add(button.class);
  
    // tambahkan click menuju link
    btn.addEventListener("click", () => window.open(button.link, "_blank"));
  
    // masukkan button ke dalam button container
    btnContainer.append(btn);
  });
  