/* DIAMOND HEART

All components are listed in this file. 
You can edit these components and it will be automatically updated on the entire website.
You can also create new components by using copy and pasting an excisting one and updating the variable names.

DIAMOND HEART */





/* ======================================================================================== */
/* ================================================================================= NAVBAR */
const navbarTemplate = document.createElement('template');
navbarTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" class="navbar w-nav">
    <div class="spacing navbar-spacing">
        <a href="mailto:info@diamondheart.love" class="w-inline-block">
            <div class="nav-email-icon"><img src="images/icon-white-mail-outline.svg" loading="lazy" alt="" class="icon-mail-nav"></div>
        </a>
        <a href="index.html" aria-current="page" class="brand w-nav-brand w--current"><img src="images/logo-white-diamond-heart.svg" loading="lazy" alt="Diamond Heart logo in white"></a>
        <nav role="navigation" class="nav-menu w-nav-menu">
            <a href="wat-is-de-diamond-heart.html" class="nav-link w-nav-link">Wat is de Diamond Heart</a>
            <a href="jouw-onrust.html" class="nav-link w-nav-link">Jouw onrust</a>
            <a href="wat-we-doen.html" class="nav-link w-nav-link">Wat we doen</a>
            <a href="over-ons.html" class="nav-link w-nav-link">Over ons</a>
            <a href="schrijf-je-hier-in.html" class="button nav-button w-button">Contact opnemen<span class="button-arrow"> </span></a>
        </nav>
        <div class="hamburger-icon w-nav-button">
            <div class="icon-hamburger w-icon-nav-menu"></div>
        </div>
    </div>
</div>
`

class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(navbarTemplate.content);
    }
}
customElements.define('comp-navbar', Navbar);





/* ======================================================================================== */
/* ============================================================== PHOTO LEFT TEXT RIGHT CTA */
const photolefttextrightCTATemplate = document.createElement('template');
photolefttextrightCTATemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section class="section-wat-is-de-diamond-heart">
    <div class="spacing">
        <div class="w-layout-grid grid-2cols">
            <div id="w-node-_5d0bff0c-059e-aa85-63a5-707cfdea2cd7-f9c2c767" class="holder"><img src="images/image-ontdek_1.webp" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, 94vw" srcset="images/image-ontdek_1image-ontdek.webp 500w, images/image-ontdek_1.webp 524w" alt="Man holding his head high" class="image-full-width"></div>
            <div id="w-node-_4ea0f560-5c21-73c9-0e58-54690087255f-f9c2c767" class="holder">
                <div id="w-node-c6ee4e30-a8b6-8011-f635-e0fdd0e810f2-f9c2c767" class="above-title">Wat is de Diamond Heart</div>
                <h2>Ontdek je waarheid</h2>
                <p>In de diepte van ons wezen bevindt zich een onverwoestbare, eeuwig stralende achtergrond, zonder enige beperking of grens, die altijd aanwezig is. Wij noemen dit het Diamanten Hart. Dit Diamanten Hart transcendeert de fysieke waarneming en is enkel te realiseren door innerlijke bewustwording. Het is wie we werkelijk zijn, en altijd al zijn geweest.</p>
                <a href="wat-is-de-diamond-heart.html" class="button secondary w-button">Lees meer<span class="button-arrow orange-arrow"> </span></a>
            </div>
        </div>
    </div>
</section>
`

class PhotoLeftTextRightCTA extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(photolefttextrightCTATemplate.content);
    }
}
customElements.define('comp-photo-left-text-right-cta', PhotoLeftTextRightCTA);





/* ======================================================================================== */
/* ================================================================== PHOTO RIGHT TEXT LEFT */
const photorighttextleftTemplate = document.createElement('template');
photorighttextleftTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<div class="spacing">
    <div class="w-layout-grid grid-2cols">
        <div id="w-node-fdf954b5-8059-37f4-ace4-99de32724f98-83d8ec3e" class="holder">
            <h2>De Spirituele Schatkist</h2>
            <p>Volgens spirituele tradities zoals het Soefisme en psychologische theorieën zoals die van A.H. Almaas, vertegenwoordigt het Diamond Heart de diepere lagen van bewustzijn die voorbijgaan aan oppervlakkige identificaties en conditioneringen. Het roept op tot het ontwaken van een dieper niveau van zelfbewustzijn en zelfrealisatie, waarbij men in contact komt met de intrinsieke wijsheid en volmaaktheid die inherent zijn aan het menselijk wezen.</p>
        </div>
        <div id="w-node-fdf954b5-8059-37f4-ace4-99de32724f96-83d8ec3e" class="holder"><img src="images/top-view-of-abstract-wavy-background-with-sand-and-2023-11-27-05-12-05-utc-1.jpg" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, 94vw" srcset="images/top-view-of-abstract-wavy-background-with-sand-and-2023-11-27-05-12-05-utc-1.webp 500w, images/top-view-of-abstract-wavy-background-with-sand-and-2023-11-27-05-12-05-utc-1.webp 800w, images/top-view-of-abstract-wavy-background-with-sand-and-2023-11-27-05-12-05-utc-1.webp 1080w, images/top-view-of-abstract-wavy-background-with-sand-and-2023-11-27-05-12-05-utc-1.webp 1600w, images/top-view-of-abstract-wavy-background-with-sand-and-2023-11-27-05-12-05-utc-1.jpg 1920w" alt="Image of sand" class="image-full-width"></div>
    </div>
</div>
`

class PhotoRightTextLeft extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(photorighttextleftTemplate.content);
    }
}
customElements.define('comp-photo-right-text-left', PhotoRightTextLeft);




/* ======================================================================================== */
/* ================================================================== PHOTO LEFT TEXT RIGHT */
const photolefttextrightTemplate = document.createElement('template');
photolefttextrightTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section class="section-kan-het-mij-helpen">
    <div class="spacing">
        <div class="w-layout-grid grid-2cols">
        <div id="w-node-_5d0bff0c-059e-aa85-63a5-707cfdea2cd7-df50e5b9" class="holder"><img src="images/dark-haired-man-in-a-checkered-shirt-having-a-head-2023-11-27-05-00-40-utc-1_1.webp" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, 94vw" srcset="images/dark-haired-man-in-a-checkered-shirt-having-a-head-2023-11-27-05-00-40-utc-1_1dark-haired-man-in-a-checkered-shirt-having-a-head-2023-11-27-05-00-40-utc-1.webp 500w, images/dark-haired-man-in-a-checkered-shirt-having-a-head-2023-11-27-05-00-40-utc-1_1dark-haired-man-in-a-checkered-shirt-having-a-head-2023-11-27-05-00-40-utc-1.webp 800w, images/dark-haired-man-in-a-checkered-shirt-having-a-head-2023-11-27-05-00-40-utc-1_1dark-haired-man-in-a-checkered-shirt-having-a-head-2023-11-27-05-00-40-utc-1.webp 1080w, images/dark-haired-man-in-a-checkered-shirt-having-a-head-2023-11-27-05-00-40-utc-1_1.webp 1920w" alt="Man holding hands to face like having a headache" class="image-full-width flipped"></div>
        <div id="w-node-_4ea0f560-5c21-73c9-0e58-54690087255f-df50e5b9" class="holder">
          <h2>Kan het mij helpen?</h2>
          <p>De filosofie van het Diamond Heart kan voor jou relevant zijn als je op zoek bent naar diepere betekenis, innerlijke groei en spirituele verlichting. Dit kan vooral het geval zijn wanneer je jezelf geconfronteerd ziet met uitdagingen, innerlijke conflicten of een verlangen naar meer vervulling in het leven. Door de principes van het Diamond Heart te omarmen, kun je een pad ontdekken dat leidt tot een dieper begrip van jezelf, innerlijke rust en een gevoel van verbondenheid met het universum.</p>
        </div>
        </div>
    </div>
</section>
`

class PhotoLeftTextRight extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(photolefttextrightTemplate.content);
    }
}
customElements.define('comp-photo-left-text-right', PhotoLeftTextRight);




/* ======================================================================================== */
/* ==================================================== MIDDLE ALIGNED TEXT JOUW ONRUST PAGE*/
const middlealignedtextonrustTemplate = document.createElement('template');
middlealignedtextonrustTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section class="section-jouw-onrust">
    <div class="spacing tight-spacing">
        <div id="w-node-_96ad5776-6e7f-4211-1b08-9b0c0e5b135f-df50e5b9" class="holder">
            <h2 class="black">Een Verkenningstocht</h2>
            <p>In ons dagelijks leven ervaren we allemaal wel eens momenten van innerlijke onrust, een gevoel van ongemak of spanning dat ons overvalt. Of het nu gaat om stress op het werk, problemen in relaties, of gewoon de alledaagse uitdagingen van het leven, onrust is een universele ervaring die we allemaal tegenkomen. Het is belangrijk om te erkennen dat deze gevoelens normaal zijn en deel uitmaken van het menselijk bestaan. In deze ruimte willen we de complexiteit van deze ervaringen omarmen en verkennen hoe we ze kunnen transformeren naar bronnen van kracht en groei. Welkom bij onze pagina, waar we samen de reis naar innerlijke rust en vervulling verkennen.</p>
        </div>
    </div>
</section>
`

class MiddleAlignedTextOnrust extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(middlealignedtextonrustTemplate.content);
    }
}
customElements.define('comp-middle-aligned-text-onrust', MiddleAlignedTextOnrust);




/* ======================================================================================== */
/* =================================================== MIDDLE ALIGNED TEXT WAT WE DOEN PAGE */
const middlealignedtextwatwedoenTemplate = document.createElement('template');
middlealignedtextwatwedoenTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section class="section-jouw-onrust">
    <div class="spacing tight-spacing">
        <div id="w-node-fb1d7acd-7e6d-e934-9825-7e87b915900f-8e496e91" class="holder">
            <h2 class="black">Jij hebt de kracht, wij helpen je op weg.</h2>
            <p>Bij Diamond Heart zijn we gepassioneerd over het bieden van ondersteuning en begeleiding op jouw reis naar persoonlijke groei, welzijn en vervulling. Ontdek hier hoe we je kunnen helpen met onze diverse programma&#x27;s, consultaties en resources, allemaal ontworpen om je te ondersteunen bij het ontwikkelen van een dieper begrip van jezelf en het bereiken van je doelen. We kijken ernaar uit om met jou samen te werken en je te ondersteunen op jouw pad naar een betere versie van jezelf.</p>
        </div>
    </div>
</section>
`

class MiddleAlignedTextWatwedoen extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(middlealignedtextwatwedoenTemplate.content);
    }
}
customElements.define('comp-middle-aligned-text-watwedoen', MiddleAlignedTextWatwedoen);





/* ======================================================================================== */
/* ===================================================== QUOTE WAT IS DE DIAMOND HEART PAGE */
const quotewatisdediamondheartTemplate = document.createElement('template');
quotewatisdediamondheartTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section class="section-quote">
    <div class="spacing tight-spacing">
        <div id="w-node-_96ad5776-6e7f-4211-1b08-9b0c0e5b135f-83d8ec3e" class="holder quote">
            <h2>Het Diamond Heart is een innerlijke realiteit, een symbool van onze eigen essentie.&quot;</h2>
            <div id="w-node-_96ad5776-6e7f-4211-1b08-9b0c0e5b1360-83d8ec3e" class="above-title">- A.H. Almaas</div>
        </div>
    </div>
</section>
`

class QuoteWatIsDeDiamondHeart extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(quotewatisdediamondheartTemplate.content);
    }
}
customElements.define('comp-quote-watisdediamondheart', QuoteWatIsDeDiamondHeart);




/* ======================================================================================== */
/* ================================================================= QUOTE WAT WE DOEN PAGE */
const quotewatwedoenTemplate = document.createElement('template');
quotewatwedoenTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section class="section-quote">
    <div class="spacing tight-spacing">
        <div id="w-node-_96ad5776-6e7f-4211-1b08-9b0c0e5b135f-83d8ec3e" class="holder quote">
            <h2>&quot;Het Diamond Heart heeft me geleid naar innerlijke vrede en diepere vervulling.&quot;</h2>
            <div id="w-node-_96ad5776-6e7f-4211-1b08-9b0c0e5b1360-8e496e91" class="above-title">- Eckhart Tolle</div>
        </div>
    </div>
</section>
`

class QuoteWatWeDoen extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(quotewatwedoenTemplate.content);
    }
}
customElements.define('comp-quote-watwedoen', QuoteWatWeDoen);





/* ======================================================================================== */
/* ==================================================================================== USP */
const uspTemplate = document.createElement('template');
uspTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section id="jouw-onrust" class="section-jouw-onrust">
    <div class="spacing">
        <div id="w-node-_96ad5776-6e7f-4211-1b08-9b0c0e5b135f-f9c2c767" class="holder center-text">
            <div id="w-node-_96ad5776-6e7f-4211-1b08-9b0c0e5b1360-f9c2c767" class="above-title">Jouw onrust</div>
            <h2>Vind rust in je dagelijkse strijd tegen</h2>
        </div>
        <div class="w-layout-grid grid-cards">
            <div class="card"><img src="images/icon-purple-isolatiegevoel.svg" loading="lazy" alt="" class="icon-purple-card">
                <h3>Isolatiegevoel</h3>
                <p class="no-margins">Afstand tot anderen en een gebrek aan verbondenheid, vaak gepaard met gevoelens van eenzaamheid.</p>
            </div>
            <div id="w-node-c689aceb-27e7-b6c6-246d-e0d9dba471e5-f9c2c767" class="card"><img src="images/icon-purple-verlang-diepte.svg" loading="lazy" alt="" class="icon-purple-card">
              <h3>Verlangen naar diepte</h3>
              <p class="no-margins">Een innerlijk streven naar meer betekenis, inzicht en diepgang in het dagelijks leven.</p>
            </div>
            <div id="w-node-bf209ff6-fd0c-0ee4-37ae-2bfe74789655-f9c2c767" class="card"><img src="images/icon-purple-overweldiging.svg" loading="lazy" alt="" class="icon-purple-card">
              <h3>Overweldiging</h3>
              <p class="no-margins">Intense druk, waardoor je moeilijk in staat bent om effectief om te gaan met de eisen van het dagelijks leven.</p>
            </div>
            <div id="w-node-_82f3ee05-8bdd-6772-be9b-d46a443da021-f9c2c767" class="card"><img src="images/icon-purple-identiteitscrisis.svg" loading="lazy" alt="" class="icon-purple-card">
              <h3>Identiteitscrisis</h3>
              <p class="no-margins">Een innerlijke worsteling met je eigen identiteit en het zoeken naar een gevoel van zelfbegrip.</p>
            </div>
            <div id="w-node-e440c585-acab-d59d-cfb1-2bd0d55f196f-f9c2c767" class="card"><img src="images/icon-purple-verlang-vrede.svg" loading="lazy" alt="" class="icon-purple-card">
              <h3>Verlangen naar vrede</h3>
              <p class="no-margins">Het innerlijke streven naar rust, harmonie en een gevoel van kalmte en evenwicht in jezelf.</p>
            </div>
            <div id="w-node-_641c9fd3-6b47-f0c9-bb1b-ba4175f1156b-f9c2c767" class="card"><img src="images/icon-purple-dieper-zelfbegrip.svg" loading="lazy" alt="" class="icon-purple-card">
              <h3>Dieper Zelfbegrip</h3>
              <p class="no-margins">Beter begrip van je eigen gedachten en emoties om meer richting in het leven te verkrijgen.</p>
            </div>
        </div>
        <div id="w-node-cff69694-f64c-6f5c-81b9-5e44a0057aea-f9c2c767" class="holder center-text">
            <a href="jouw-onrust.html" class="button secondary w-button">Lees meer<span class="button-arrow orange-arrow"> </span></a>
        </div>
    </div>
</section>
`

class Usp extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(uspTemplate.content);
    }
}
customElements.define('comp-usp', Usp);





/* ======================================================================================== */
/* ================================================================================= SLIDER */
const sliderTemplate = document.createElement('template');

sliderTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section class="section-wat-we-doen">
    <div class="spacing">
        <div id="w-node-_51899271-5376-bab9-28c6-15a90fc8430a-f9c2c767" class="holder">
            <div id="w-node-_51899271-5376-bab9-28c6-15a90fc8430b-f9c2c767" class="above-title white">Wat we doen</div>
            <h2 class="white">Zodat jij rust vind</h2>
        </div>
        <div class="carousel" aria-label="Gallery">
          <ol class="carousel__viewport">

            <li id="carousel__slide1" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
                <div class="slide w-slide">
                    <div class="w-layout-grid grid-2cols">
                        <div id="w-node-_51899271-5376-bab9-28c6-15a90fc84313-f9c2c767" class="holder"><img src="images/starting-the-classes-2023-11-27-04-53-47-utc-1_1.webp" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, 94vw" srcset="images/starting-the-classes-2023-11-27-04-53-47-utc-1_1starting-the-classes-2023-11-27-04-53-47-utc-1.webp 500w, images/starting-the-classes-2023-11-27-04-53-47-utc-1_1starting-the-classes-2023-11-27-04-53-47-utc-1.webp 800w, images/starting-the-classes-2023-11-27-04-53-47-utc-1_1starting-the-classes-2023-11-27-04-53-47-utc-1.webp 1080w, images/starting-the-classes-2023-11-27-04-53-47-utc-1_1.webp 1920w" alt="People in a circle" class="image-full-width"></div>
                        <div id="w-node-_51899271-5376-bab9-28c6-15a90fc84315-f9c2c767" class="holder">
                            <h2 class="orange">Advaita Vedanta</h2>
                            <p class="white">Tijdens een gesprek, vergadering en voor langere tijd tijdenswoon- of retraite Diamond Heart wijst voortdurendnaar je ware aard, die niet je lichaam of geest is, maar jouwtijdloze ware natuur, geheel in de Advaita traditie.</p>
                            <a href="wat-we-doen.html" class="button textual w-button">Lees meer<span class="button-arrow"> </span></a>
                        </div>
                    </div>
                </div>
                <a href="#carousel__slide3"><div class="left-arrow w-slider-arrow-left"><img src="images/arrow-white-right_1.svg" loading="lazy" alt=""></div></a>
                <a href="#carousel__slide2"><div class="right-arrow w-slider-arrow-right"><img src="images/arrow-white-right_1.svg" loading="lazy" alt=""></div></a>
              
            </li>

            <li id="carousel__slide2" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <div class="slide w-slide">
                <div class="w-layout-grid grid-2cols">
                    <div id="w-node-_51899271-5376-bab9-28c6-15a90fc8431e-f9c2c767" class="holder"><img src="images/relaxing-on-workshops-2023-11-27-05-12-22-utc-1_1.webp" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, 94vw" srcset="images/relaxing-on-workshops-2023-11-27-05-12-22-utc-1_1relaxing-on-workshops-2023-11-27-05-12-22-utc-1.webp 500w, images/relaxing-on-workshops-2023-11-27-05-12-22-utc-1_1relaxing-on-workshops-2023-11-27-05-12-22-utc-1.webp 800w, images/relaxing-on-workshops-2023-11-27-05-12-22-utc-1_1relaxing-on-workshops-2023-11-27-05-12-22-utc-1.webp 1080w, images/relaxing-on-workshops-2023-11-27-05-12-22-utc-1_1.webp 1920w" alt="People sleeping in a circle" class="image-full-width"></div>
                    <div id="w-node-_51899271-5376-bab9-28c6-15a90fc84320-f9c2c767" class="holder">
                        <h2 class="orange">Advaita</h2>
                        <p class="white">In weekendbijeenkomsten, residentieel of retraites eigentijds teksten en klassieke Advaita-teksten worden gebruikt als vehikel en hulp die altijd wijst naar wat je werkelijk bent, wat dat niet is je lichaam of geest, maar je tijdloze ware aard.</p>
                        <a href="wat-we-doen.html" class="button textual w-button">Lees meer<span class="button-arrow"> </span></a>
                    </div>
                </div>
              </div>
              <a href="#carousel__slide1"><div class="left-arrow w-slider-arrow-left"><img src="images/arrow-white-right_1.svg" loading="lazy" alt=""></div></a>
              <a href="#carousel__slide3"><div class="right-arrow w-slider-arrow-right"><img src="images/arrow-white-right_1.svg" loading="lazy" alt=""></div></a>
            </li>

            <li id="carousel__slide3" tabindex="0" class="carousel__slide">
              <div class="carousel__snapper"></div>
              <div class="slide w-slide">
                <div class="w-layout-grid grid-2cols">
                    <div id="w-node-_51899271-5376-bab9-28c6-15a90fc84329-f9c2c767" class="holder"><img src="images/meditating-during-session-2023-11-27-05-00-50-utc-1_1.webp" loading="lazy" sizes="(max-width: 479px) 94vw, (max-width: 767px) 92vw, 94vw" srcset="images/meditating-during-session-2023-11-27-05-00-50-utc-1_1meditating-during-session-2023-11-27-05-00-50-utc-1.webp 500w, images/meditating-during-session-2023-11-27-05-00-50-utc-1_1meditating-during-session-2023-11-27-05-00-50-utc-1.webp 800w, images/meditating-during-session-2023-11-27-05-00-50-utc-1_1meditating-during-session-2023-11-27-05-00-50-utc-1.webp 1080w, images/meditating-during-session-2023-11-27-05-00-50-utc-1_1.webp 1920w" alt="People meditating in a circle" class="image-full-width"></div>
                    <div id="w-node-_51899271-5376-bab9-28c6-15a90fc8432b-f9c2c767" class="holder">
                        <h2 class="orange">Nataraj</h2>
                        <p class="white">Een residentie of toevluchtsoord is als een snelkookpan en geweldig vuur waar alle illusoire ideeën worden verbrand, weggesneden en... verdampt. De hindoegod Nataraj symboliseerde dit mechanisme terwijl Shiva danst terwijl de vlammen wegbranden onwetendheid.</p>
                        <a href="wat-we-doen.html" class="button textual w-button">Lees meer<span class="button-arrow"> </span></a>
                    </div>
                  </div>
              </div>
              <a href="#carousel__slide2"><div class="left-arrow w-slider-arrow-left"><img src="images/arrow-white-right_1.svg" loading="lazy" alt=""></div></a>
              <a href="#carousel__slide1"><div class="right-arrow w-slider-arrow-right"><img src="images/arrow-white-right_1.svg" loading="lazy" alt=""></div></a>
            </li>
          </ol>

          <aside class="carousel__navigation">
            <ol class="carousel__navigation-list">

              <li class="carousel__navigation-item">
                <a href="#carousel__slide1" class="carousel__navigation-button">Go to slide 1</a>
              </li>

              <li class="carousel__navigation-item">
                <a href="#carousel__slide2" class="carousel__navigation-button">Go to slide 2</a>
              </li>

              <li class="carousel__navigation-item">
                <a href="#carousel__slide3" class="carousel__navigation-button">Go to slide 3</a>
              </li>

            </ol>
          </aside>
        </div>
    </div>
</section>
`

class Slider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const root = this.attachShadow({ mode: 'open' });
        root.appendChild(sliderTemplate.content);
    }
}
customElements.define('comp-slider', Slider);





/* ======================================================================================== */
/* ================================================================================= EVENTS */
const eventsTemplate = document.createElement('template');
eventsTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section class="section-events-locaties">
    <div class="spacing">
        <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb26-f9c2c767" class="holder">
            <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb27-f9c2c767" class="above-title">Events &amp; locaties</div>
            <h2>Schrijf je hier in</h2>
        </div>
        <div class="w-layout-grid grid-events">
            <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb2c-f9c2c767" class="w-layout-grid grid-locaties">
                <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb2d-f9c2c767" class="locatie horizontal">
                    <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb2e-f9c2c767" class="holder"><img src="images/intro-dag-utrecht.webp" loading="lazy" alt="A castle" class="image-full-width"></div>
                    <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb30-f9c2c767" class="holder">
                        <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb31-f9c2c767" class="above-locatie-title">Utrecht - 2025 - datum nog niet bekend</div>
                        <h3>Introductie dag</h3>
                        <p class="event-location">Slotkapel Kasteel Haarzuilens <br>Kasteellaan 1, 3455 RR</p>
                    </div>
                    <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb39-f9c2c767" class="holder event-button-holder">
                        <a href="/schrijf-je-hier-in?subject=Introductie dag Utrecht 2025 datum nog niet bekend#formulier" class="button icon-only w-button"></a>
                    </div>
                </div>
                <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb3b-f9c2c767" class="locatie horizontal">
                    <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb3c-f9c2c767" class="holder"><img src="images/intro-dag-brussels.webp" loading="lazy" alt="An old building" class="image-full-width"></div>
                    <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb3e-f9c2c767" class="holder">
                        <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb3f-f9c2c767" class="above-locatie-title">Brussel - 2025 - datum nog niet bekend</div>
                        <h3>Introductie dag</h3>
                        <p class="event-location">Chapel of Resurrection,  <br>Van Maerlantstraat 22/24, 1040</p>
                    </div>
                    <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb47-f9c2c767" class="holder event-button-holder">
                        <a href="/schrijf-je-hier-in?subject=Introductie dag Brussel datum nog niet bekend#formulier" class="button icon-only w-button"></a>
                    </div>
                </div>
                <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb49-f9c2c767" class="locatie horizontal last">
                    <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb4a-f9c2c767" class="holder"><img src="images/intro-avond-amsterdam.webp" loading="lazy" alt="Outside with trees" class="image-full-width"></div>
                    <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb4c-f9c2c767" class="holder">
                        <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb4d-f9c2c767" class="above-locatie-title">Amsterdam - datum nog niet bekend</div>
                        <h3>Introductie avond</h3>
                        <p class="event-location">Van Eesteren Museum <br>Noordzijde 31, 1064 GV</p>
                    </div>
                    <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb55-f9c2c767" class="holder event-button-holder">
                        <a href="/schrijf-je-hier-in?subject=Introductie dag Amsterdam datum nog niet bekend#formulier" class="button icon-only w-button"></a>
                    </div>
                </div>
            </div>
            <div id="w-node-_448a6ad7-e9cf-3156-46d2-59c25f84cb57-f9c2c767" class="contact">
                <h3 class="white">Of neem contact op</h3>
                <p class="white">Heb je een vraag of wilt je je inschrijven voor een evenement, neem dan contact op en wij helpen je op de juiste weg.</p>
                <a href="mailto:info@diamondheart.love" class="contact-link mail">info@diamondheart.love</a>
                <div class="contact-link phone">
                    <a href="tel:+31682208000" class="footer-text-link">+31 6 297 694 95</a><br><span class="footer-text-link no-hover">Vrijdag - 10:00 t/m 14:00</span>
                </div>
                <div class="form w-embed">
                    <form method="GET" action="/schrijf-je-hier-in#formulier">
                        <label class="label">Email</label>
                        <input class="input w-input" type="text" name="email" placeholder="voorbeeld@info.nl">
                        <input class="button full-wdith w-button" type="submit" value="Voeg bericht toe">
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
`

class Events extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(eventsTemplate.content);
    }
}
customElements.define('comp-events', Events);




/* ======================================================================================== */
/* =================================================================== EVENTS LOCATION ONLY */
const eventslocationonlyTemplate = document.createElement('template');
eventslocationonlyTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section class="section-events-locaties">
    <div class="spacing schrijf-je-in-spacing">
        <div id="w-node-_338e566e-49c9-ff37-dd99-eba3ddaf87f3-50f40ed8" class="holder">
            <div id="w-node-_338e566e-49c9-ff37-dd99-eba3ddaf87f4-50f40ed8" class="above-title">Events &amp; locaties</div>
            <h2>Schrijf je hier in</h2>
        </div>
        <div class="w-layout-grid grid-events horizontal">
            <div id="w-node-de7307e7-0168-82e5-c517-dde06ddd513c-50f40ed8" class="locatie horizontal-lines no-lines">
                <div id="w-node-_59ed20c0-90c0-a69f-333c-59bce895e305-50f40ed8" class="holder"><img src="images/intro-dag-utrecht-hor.webp" loading="lazy" alt="A castle" class="image-full-width"></div>
                    <div id="w-node-_8125fab8-af41-ff12-cada-95b87295dbd2-50f40ed8" class="holder">
                        <div id="w-node-_24c31b26-eb6d-468e-bd97-5b8e80b75432-50f40ed8" class="above-locatie-title">Utrecht - 2025 - datum nog niet bekend</div>
                        <h3>Introductie dag</h3>
                        <p class="event-location">Slotkapel Kasteel Haarzuilens <br>Kasteellaan 1, 3455 RR</p>
                    </div>
                </div>
            <div id="w-node-e4ecdd96-6cfc-f4e1-3532-4404bc3d3809-50f40ed8" class="locatie horizontal-lines">
                <div id="w-node-e4ecdd96-6cfc-f4e1-3532-4404bc3d380a-50f40ed8" class="holder"><img src="images/intro-dag-brussels-hor.webp" loading="lazy" alt="An old building" class="image-full-width"></div>
                <div id="w-node-e4ecdd96-6cfc-f4e1-3532-4404bc3d380c-50f40ed8" class="holder">
                    <div id="w-node-e4ecdd96-6cfc-f4e1-3532-4404bc3d380d-50f40ed8" class="above-locatie-title">Brussel - 2025 - datum nog niet bekend</div>
                    <h3>Introductie dag</h3>
                    <p class="event-location">Chapel of Resurrection, <br>Van Maerlantstraat 22/24, 1040</p>
                </div>
            </div>
            <div id="w-node-_9b4887fc-8261-e839-a956-b0f061a62473-50f40ed8" class="locatie horizontal-lines no-lines">
                <div id="w-node-_9b4887fc-8261-e839-a956-b0f061a62474-50f40ed8" class="holder"><img src="images/intro-avond-amsterdam-hor.webp" loading="lazy" alt="Outside with trees" class="image-full-width"></div>
                <div id="w-node-_9b4887fc-8261-e839-a956-b0f061a62476-50f40ed8" class="holder">
                    <div id="w-node-_9b4887fc-8261-e839-a956-b0f061a62477-50f40ed8" class="above-locatie-title">Amsterdam - datum nog niet bekend</div>
                    <h3>Introductie avond</h3>
                    <p class="event-location">Van Eesteren Museum <br>Noordzijde 31, 1064 GV</p>
                </div>
            </div>
        </div>
    </div>
</section>
`

class Eventslocations extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(eventslocationonlyTemplate.content);
    }
}
customElements.define('comp-events-locations-only', Eventslocations);




/* ======================================================================================== */
/* ================================================================================ CONTACT */
const contactTemplate = document.createElement('template');
contactTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section id="formulier" class="section-neem-contact-op">
    <div class="spacing tight-spacing">
        <div id="w-node-ad344201-3897-d044-271d-d8e0ebb41412-50f40ed8" class="holder">
            <h2 class="white contact-header">Neem contact op</h2>
        </div>
        <p class="white">wil je je inschrijven voor een evenement of heb je een vraag, neem dan contact op en wij helpen je op de juiste weg.</p>
        <div class="form w-embed w-script">
            <form id="contact-form" name="MyForm" method="POST" action="https://api.staticforms.xyz/submit">
                <input type="hidden" name="accessKey" value="c7283bea-1a2d-4c28-b9f1-4504b44cb77d">
                <label class="label">Email *</label>
                <input class="input w-input" type="text" name="email" placeholder="voorbeeld@info.nl">
                <label class="label">Naam</label>
                <input class="input w-input" maxlength="256" name="name" data-name="name" placeholder="Naam" type="text" id="name">
                <label class="label">Onderwerp</label>
                <select type="" id="subject" name="subject" data-name="subject" class="input w-select">
                    <option value="Algemeen">Algemeen</option>
                    <option value="Introductie dag Utrecht 2025 datum nog niet bekend">Introductie dag Utrecht 2025 datum nog niet bekend</option>
                    <option value="Introductie dag Brussel datum nog niet bekend">Introductie dag Brussel datum nog niet bekend</option>
                    <option value="Introductie dag Amsterdam datum nog niet bekend">Introductie dag Amsterdam datum nog niet bekend</option>
                </select>
                <label class="label">Bericht</label>
                <textarea id="message" name="message" maxlength="5000" data-name="Message" placeholder="Type hier uw bericht" class="input text-field w-input"></textarea>
                <p class="white">Door op verzenden te klikken gaat u akkoord met de <a class="white" href="algemene-voorwaarden.html">algemene voorwaarden</a> van Diamond Heart</p>
                <input type="hidden" name="redirectTo" value="https://diamondheart.love/schrijf-je-hier-in.html">
                <input type="text" name="honeypot" style="display: none;">
                <input class="button w-button" type="submit" value="Bericht verzenden">
            </form>
        </div>
    </div>
</section>
`

class Contact extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(contactTemplate.content);
    }
}
customElements.define('comp-contact', Contact);




/* ======================================================================================== */
/* ===================================================================== CONTACT WITH ICONS */
const contactwithiconsTemplate = document.createElement('template');
contactwithiconsTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section class="section-contact-links">
    <div class="spacing">
        <div class="w-layout-grid grid-3cols">
            <div id="w-node-_5d0bff0c-059e-aa85-63a5-707cfdea2cd7-0f7c6221" class="holder">
                <a href="#" target="_blank" class="contact-link location-purple black">Lorem ipsum dolor sit</a>
            </div>
            <div id="w-node-_4ea0f560-5c21-73c9-0e58-54690087255f-0f7c6221" class="holder">
                <div class="contact-link phone-purple black">
                    <a href="tel:+31682208000" class="footer-text-link black">+31 6 297 694 95</a><br><span class="footer-text-link no-hover black">Vrijdag - 10:00 t/m 14:00</span>
                </div>
            </div>
            <div id="w-node-_9403c18e-71e5-5d6a-f2b1-852d31aa9e80-0f7c6221" class="holder">
                <a href="mailto:info@diamondheart.love" class="contact-link mail-purple black">info@diamondheart.love</a>
            </div>
        </div>
    </div>
</section>
`

class ContactWithIcons extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(contactwithiconsTemplate.content);
    }
}
customElements.define('comp-contact-with-icons', ContactWithIcons);




/* ======================================================================================== */
/* ================================================================================= FOOTER */
const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

<link href="css/normalize.css" rel="stylesheet" type="text/css">
<link href="css/webflow.css" rel="stylesheet" type="text/css">
<link href="css/diamond-heart.webflow.css" rel="stylesheet" type="text/css">

<section class="footer">
    <div class="spacing">
        <div class="w-layout-grid grid-footer">
            <div id="w-node-db2d02c3-d3ac-d643-96c4-f6359904fa78-9904fa75" class="holder"><img src="images/logo-white-diamond-heart.svg" loading="lazy" alt="Diamond Heart logo in white" class="logo footer-logo">
                <p class="p-large white">Ontdek je waarheid: omarm het Diamanten Hart in jezelf</p>
                <div class="socials"><img src="images/icon-white-facebook.svg" loading="lazy" alt="" class="social-icon"><img src="images/icon-white-linkedin.svg" loading="lazy" alt="" class="social-icon"><img src="images/icon-white-instagram.svg" loading="lazy" alt="" class="social-icon"></div>
            </div>
            <div id="w-node-db2d02c3-d3ac-d643-96c4-f6359904fa80-9904fa75" class="holder">
                <h2 class="white">Pagina&#x27;s</h2>
                <ul role="list" class="white w-list-unstyled">
                    <li>
                        <a href="wat-is-de-diamond-heart.html" class="footer-text-link">Wat is de diamond heart</a>
                    </li>
                    <li>
                        <a href="jouw-onrust.html" class="footer-text-link">Jouw onrust</a>
                    </li>
                    <li>
                        <a href="wat-we-doen.html" class="footer-text-link">Wat we doen</a>
                    </li>
                    <li>
                        <a href="over-ons.html" class="footer-text-link">Over ons</a>
                    </li>
                    <li>
                        <a href="schrijf-je-hier-in.html" class="footer-text-link">Contact opnemen</a>
                    </li>
                </ul>
            </div>
            <div id="w-node-db2d02c3-d3ac-d643-96c4-f6359904fa8e-9904fa75" class="holder">
                <h2 class="white">Contact</h2>
                <ul role="list" class="white w-list-unstyled">
                    <li>Amsterdam<br>Street adres<br>City, County</li>
                </ul>
                <a href="mailto:info@diamondheart.love" class="contact-link mail">info@diamondheart.love</a>
                <div class="contact-link phone">
                    <a href="tel:+31682208000" class="footer-text-link">+31 6 297 694 95</a><br><span class="footer-text-link no-hover">Vrijdag - 10:00 t/m 14:00</span>
                </div>
            </div>
        </div>
    </div>
    <div class="under-footer">
        <div class="spacing under-footer-spacing">
            <a href="#" class="footer-text-link">© Diamond Heart</a>
            <a href="algemene-voorwaarden.html" class="footer-text-link">Algemene voorwaarden</a>
        </div>
    </div>
</section>
`

class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}
customElements.define('comp-footer', Footer);