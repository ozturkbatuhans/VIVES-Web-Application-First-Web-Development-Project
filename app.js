const port = process.env.PORT || 3000;

const data = require("./data/index")
const express = require("express");
const expressHandlebars = require("express-handlebars");
const app = express();
// configure Handlebars view engine
app.engine("handlebars", expressHandlebars.engine({
    defaultLayout: "main",
}));
app.set("view engine", "handlebars");


app.get("/", (req, res) => {
    res.render("home",
        {
            title: "Welkom bij VIVES",
            subTitle: "Hogeschool voor studenten met ambitie",
            research: {
                title: "VIVES onderzoek brengt kennis en innovatie samen",
                subTitle: "Innovatie die het verschil maakt",
                shortDescription: "Hogeschool VIVES doet aan praktijkgericht onderzoek. VIVES reikt bedrijven en organisaties oplossingen aan voor diverse complexe vraagstukken. Bovendien levert het onderzoek van onze expertisecentra nieuwe kennis en inzichten op voor ons onderwijs.",
                image: "/images/research.jpg"
            }
        });
});


app.get("/opleidingen", (req, res) => {
    const programmes = [
        {
          title: "accountancy-fiscaliteit",
          slug: "accountancy-fiscaliteit",
          description: "Word boekhouder / accountant en help bedrijven bij het nemen van fiscale, boekhoudkundige en financiële beslissingen.",
          tags: "administratie,banken,boekhouden,business,creativiteit,economie,kmo,management,ondernemen,recht,wiskunde,zaken doen"
        },
        {
          title: "Accounting Administration",
          slug: "accounting-administration",
          description: "Leer in twee jaar doorgroeien als boekhouder: inboeken van facturen, btw-aangifte, jaarrekening, belastingaangiftes en communicatie.",
          tags: "administratie,banken,boekhouden,business,economie,kmo,management,communicatie"
        },
        {
          title: "Accounting Administration via flextraject",
          slug: "accounting-administration-flextraject",
          description: "Leer administratieve taken uitvoeren, met flexibiliteit in lesdagen en werktijden.",
          tags: "administratie,flexibiliteit,boekhouden"
        }
      ];

      res.render("programmes", { programmes });
    });
    


app.get("/contact", (req, res) => {
    res.render("contact");
});

app.use(express.static(__dirname + "/public"));

// custom 404 page
app.use((req, res) => {
    res.render("errors/404");
})
// custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.render("errors/500");
});
app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`));
