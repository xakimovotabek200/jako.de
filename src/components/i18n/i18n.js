import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbacking: "English",
  lng: "English",
  resources: {
    English: {
      translation: {
        Navbar_links_men: "Men",
        Navbar_links_women: "Women",
        Navbar_links_kids: "Kids",
        Navbar_links_equipment: "Equipment",
        Navbar_links_fan_sale: "Sale",
        
      },
    },
    Uzbek: {
      translation: {
        Navbar_links_men: "Erkaklar",
        Navbar_links_women: "Ayollar",
        Navbar_links_kids: "Bolalar",
        Navbar_links_equipment: "Jihozlar",
        Navbar_links_fan_sale: "savdo",
      },
    },
    Russian: {
      translation: {
        Navbar_links_men: "мужской",
        Navbar_links_women: "женщины",
        Navbar_links_kids: "Дети",
        Navbar_links_equipment: "Оборудование",
        Navbar_links_fan_shop: "Фан-шопы",
        Navbar_links_fan_sale: "торговля",
      },
    },
  },
});

export default i18n;
