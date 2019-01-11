# Jeremy Primat & Gabriel Curinga

> Mini site de gestion de restaurants en VueJS, dans le cadre du module de Web du M1 MIAGE.

Nous avons utilisé un serveur custom car l'API ne fonctionnait pas au niveau de l'édition d'un restaurant. En effet, elle REMPLAÇAIT un objet dans la BD au lieu de le mettre à jour (ça pouvait engendrer des erreurs).

# Notes - Explications d'eventuelles erreur inscrites dans la console
On utilise un proxy pour utiliser une API d'images random. Il se peut que le proxy soit down de temps en temps... c'est un outil gratuit et nous nous en excusons. D'ailleurs, l'API renvoie parfois une URL d'image qui n'existe pas. Par manque de temps nous avons pas fait les vérifications.

# Fonctionnalités

* Ajouter, modifier, supprimer et rechercher un restaurant
* Liste des restaurants
* Vue détaillée d'un restaurant
* Random menus d'un restaurant
* Panier de commande
* Bref récapitulatif d'une commande
* Implementation Map (OpenStreetMap + Leaflet)


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
