document.addEventListener("DOMContentLoaded", function () {
    const textos = {
        es: {
            titulo: "D&Eacademy",
            nav: { inicio: "Inicio", servicios: "Servicios", contacto: "Contacto" },
            bienvenidaTitulo: "Bienvenidos a nuestra empresa",
            bienvenidaTexto: "En nuestra empresa nos especializamos en brindar soluciones tecnológicas innovadoras y personalizadas, diseñadas para satisfacer las necesidades específicas de empresas de todos los tamaños y también de clientes particulares. Nuestro compromiso es impulsar la transformación digital, optimizar procesos y ofrecer herramientas tecnológicas que generen valor, mejoren la productividad y garanticen la seguridad de la información. Ya sea que necesites desarrollo de software a medida, consultoría IT, seguridad informática o soporte técnico, estamos aquí para ayudarte a alcanzar tus objetivos tecnológicos con eficiencia y profesionalismo.",
            serviciosTitulo: "La Excelencia de Nuestro Equipo",
            equipo1: "En nuestra empresa, creemos firmemente que el verdadero valor de una organización reside en su gente. Por eso, contamos con un equipo multidisciplinario altamente cualificado, distribuido estratégicamente en departamentos clave que garantizan el funcionamiento eficaz y la innovación constante.",
            equipo2: "Bajo la dirección general de Eric & Dani, se articula una estructura sólida que permite una gestión fluida, colaborativa y orientada a resultados. El Departamento de Recursos Humanos, liderado por Jh de la Cruz, vela por el bienestar del equipo y por atraer el mejor talento. Por su parte, Carla Fernández encabeza el Departamento Comercial, generando relaciones de valor con nuestros clientes y socios estratégicos.",
            equipo3: "El desarrollo tecnológico está en manos de profesionales como Óscar Vidal Cortés y su equipo, quienes impulsan soluciones innovadoras con un enfoque en eficiencia y calidad. En marketing, contamos con expertos creativos como Luis Alberto y José Ignacio Domingo Gutiérrez, que se encargan de comunicar con precisión y atractivo lo que somos.",
            equipo4: "El soporte técnico, dirigido por Míriam López García, asegura que nuestros servicios funcionen de manera óptima y sin interrupciones. Y, finalmente, el equipo de anuncios, encabezado por Ainoa Cárdenas, potencia la visibilidad de la marca con campañas impactantes y de alto alcance.",
            equipo5: "Cada miembro de este equipo aporta una combinación de experiencia, compromiso y pasión, haciendo que nuestros clientes confíen en nosotros no solo por lo que hacemos, sino por quiénes somos.",
            listaServicios: ["Desarrollo de Software", "Consultoría IT", "Seguridad Informática", "Soporte Técnico"],
            contactoTitulo: "Contacto",
            contactoEmail: "Email: D&Eacademy@gmail.com",
            contactoTelefono: "Teléfono: +34 600 123 456",
            footer: "2025 Soluciones Informáticas. Todos los derechos reservados."
        },
        ca: {
            titulo: "D&Eacademy",
            nav: { inicio: "Inici", servicios: "Serveis", contacto: "Contacte" },
            bienvenidaTitulo: "Benvinguts a la nostra empresa",
            bienvenidaTexto: "A la nostra empresa ens especialitzem en oferir solucions tecnològiques innovadores i personalitzades, dissenyades per satisfer les necessitats específiques d'empreses de totes les mides i també de clients particulars. El nostre compromís és impulsar la transformació digital, optimitzar processos i oferir eines tecnològiques que generin valor, millorin la productivitat i garanteixin la seguretat de la informació. Ja sigui que necessitis desenvolupament de programari a mida, consultoria IT, seguretat informàtica o suport tècnic, estem aquí per ajudar-te a aconseguir els teus objectius tecnològics amb eficiència i professionalisme.",
            serviciosTitulo: "L'Excel·lència del Nostre Equip",
            equipo1: "A la nostra empresa, creiem fermament que el veritable valor d'una organització resideix en la seva gent. Per això, comptem amb un equip multidisciplinari altament qualificat, distribuït estratègicament en departaments clau que garanteixen el funcionament eficaç i la innovació constant.",
            equipo2: "Sota la direcció general d'Eric & Dani, s'articula una estructura sòlida que permet una gestió fluïda, col·laborativa i orientada a resultats. El Departament de Recursos Humans, liderat per Jh de la Cruz, vetlla pel benestar de l'equip i per atraure el millor talent. D'altra banda, Carla Fernández encapçala el Departament Comercial, generant relacions de valor amb els nostres clients i socis estratègics.",
            equipo3: "El desenvolupament tecnològic està en mans de professionals com Òscar Vidal Cortés i el seu equip, que impulsen solucions innovadores amb un enfocament en eficiència i qualitat. En màrqueting, comptem amb experts creatius com Luis Alberto i José Ignacio Domingo Gutiérrez, que s'encarreguen de comunicar amb precisió i atractiu el que som.",
            equipo4: "El suport tècnic, dirigit per Míriam López García, assegura que els nostres serveis funcionin de manera òptima i sense interrupcions. I, finalment, l'equip d'anuncis, encapçalat per Ainoa Cárdenas, potencia la visibilitat de la marca amb campanyes impactants i d'alt abast.",
            equipo5: "Cada membre d'aquest equip aporta una combinació d'experiència, compromís i passió, fent que els nostres clients confiïn en nosaltres no només pel que fem, sinó pel qui som.",
            listaServicios: ["Desenvolupament de Programari", "Consultoria IT", "Seguretat Informàtica", "Suport Tècnic"],
            contactoTitulo: "Contacte",
            contactoEmail: "Correu: D&Eacademy@gmail.com",
            contactoTelefono: "Telèfon: +34 600 123 456",
            footer: "2025 Solucions Informàtiques. Tots els drets reservats."
        },
        en: {
            titulo: "D&Eacademy",
            nav: { inicio: "Home", servicios: "Services", contacto: "Contact" },
            bienvenidaTitulo: "Welcome to our company",
            bienvenidaTexto: "At our company, we specialize in providing innovative and customized technological solutions designed to meet the specific needs of businesses of all sizes as well as individual clients. Our commitment is to drive digital transformation, optimize processes, and offer technological tools that generate value, improve productivity, and ensure information security. Whether you need custom software development, IT consulting, cybersecurity, or technical support, we are here to help you achieve your technological goals with efficiency and professionalism.",
            serviciosTitulo: "The Excellence of Our Team",
            equipo1: "At our company, we strongly believe that the true value of an organization lies in its people. That's why we have a highly qualified multidisciplinary team, strategically distributed across key departments that ensure effective operation and constant innovation.",
            equipo2: "Under the general direction of Eric & Dani, a solid structure is established that allows smooth, collaborative, and results-oriented management. The Human Resources Department, led by Jh de la Cruz, ensures the team's well-being and attracts the best talent. Meanwhile, Carla Fernández heads the Commercial Department, building valuable relationships with our clients and strategic partners.",
            equipo3: "Technological development is led by professionals such as Óscar Vidal Cortés and his team, who drive innovative solutions with a focus on efficiency and quality. In marketing, we have creative experts like Luis Alberto and José Ignacio Domingo Gutiérrez, who are responsible for communicating what we are with precision and appeal.",
            equipo4: "Technical support, led by Míriam López García, ensures our services run smoothly and without interruptions. Finally, the advertising team, headed by Ainoa Cárdenas, boosts the brand's visibility with impactful and high-reach campaigns.",
            equipo5: "Each member of this team brings a combination of experience, commitment, and passion, earning the trust of our clients not only for what we do, but for who we are.",
            listaServicios: ["Software Development", "IT Consulting", "Cybersecurity", "Technical Support"],
            contactoTitulo: "Contact",
            contactoEmail: "Email: D&Eacademy@gmail.com",
            contactoTelefono: "Phone: +34 600 123 456",
            footer: "2025 IT Solutions. All rights reserved."
        }
    };

    document.getElementById("lang-select").addEventListener("change", function () {
        const lang = this.value;
        const t = textos[lang];
        if (!t) return;

        document.getElementById("titulo").textContent = t.titulo;
        document.getElementById("nav-inicio").textContent = t.nav.inicio;
        document.getElementById("nav-servicios").textContent = t.nav.servicios;
        document.getElementById("nav-contacto").textContent = t.nav.contacto;
        document.getElementById("bienvenida-titulo").textContent = t.bienvenidaTitulo;
        document.getElementById("bienvenida").textContent = t.bienvenidaTexto;
        document.getElementById("servicios-titulo").textContent = t.serviciosTitulo;

        document.getElementById("equipo-1").textContent = t.equipo1;
        document.getElementById("equipo-2").textContent = t.equipo2;
        document.getElementById("equipo-3").textContent = t.equipo3;
        document.getElementById("equipo-4").textContent = t.equipo4;
        document.getElementById("equipo-5").textContent = t.equipo5;

        const lista = document.getElementById("lista-servicios");
        lista.innerHTML = "";
        t.listaServicios.forEach(servicio => {
            const li = document.createElement("li");
            li.textContent = servicio;
            lista.appendChild(li);
        });

        document.getElementById("contacto-titulo").textContent = t.contactoTitulo;
        document.getElementById("contacto-email").textContent = t.contactoEmail;
        document.getElementById("contacto-telefono").textContent = t.contactoTelefono;
        document.getElementById("footer-texto").textContent = t.footer;
    });
});
