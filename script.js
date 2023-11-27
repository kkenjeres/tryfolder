var name;
var password;

const regex = /[\w]{6,}[0-9]{1,}/;
const regex2 = /[0-9]{1,}/;

function PwCheck() {
  name = document.getElementById("name").value;
  password = document.getElementById("passwort").value;
  if (regex.test(password) === false || regex2.test(password) === false) {
    alert("Das Passwort muss mindestens eine Länge von 6 Zeichen haben und mindestens eine Ziffer enthalten!");
  } else {
    alert("Hallo " + name + ". Sie haben sich erfolgreich zum Newsletter angemeldet.\n");
  }
}

const newsletter = [
  { id: 1, name: "Heinz", mail: "Heinz@web.com", password: "1234Ketchup" },
  { id: 2, name: "Karla", mail: "Karla@gmail.com", password: "myPasswort" },
  { id: 3, name: "Simon", mail: "Simon@gmail.com", password: "geheim123" },
  { id: 4, name: "Carl", mail: "Carl@web.com", password: "lisbet2013" }
];

function ShowAbonnements() {
  let name = document.getElementById("name").value;
  let password = document.getElementById("passwort").value;

  if (name === "admin" && password === "admin") {
    newsletter.forEach(function (entry) {
      console.log(`${entry.id} | ${entry.name} | ${entry.mail} | ${entry.password}`);
    });

    const newsNames = [];
    newsletter.forEach(function(entry) {
      if (entry.name.toLowerCase().includes('i')) {
        newsNames.push(entry);
      }
    });

    newsNames.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });

    newsNames.forEach(function(entry) {
      console.log(`${entry.name}`);
    });
  } else {
    try {
      PwCheck();
    } catch (err) {
      alert(err);
    }
  }
}
