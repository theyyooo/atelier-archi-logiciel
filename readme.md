# Questions

## Qu'est-ce que le pattern MVC ?
Le pattern MVC est une pratique de code orientée autour :
- du Model, contenant les données à afficher, son rôle est d'aller récupérer les informations et de les organiser pour qu'elles puissent être traitées.
- de la View, cette-dernière représente la partie graphique et se concentre sur l'affichage. 
- du Controller, jouant le rôle d'intermédiaire entre le Model et la View en récupérant les données du Model, les traitant, puis en les envoyant à la View pour qu'elles puissent être affichées.

## Quels avantages présente-t-il ?
Le pattern MVC permet tout d'abord de séparer les tâches entre elles en fonction de leur utilisation (logique métier, interface utilisateur), un gain de temps en maintenance et éventuelle évolution du code ou encore une meilleure souplesse quant à l'organisation du code entre différents développeurs.

## Qu'est-ce que le Web Dynamique ?
Le Web dynamique est généré à la demande, son contenu peut varier en fonction de différentes informations (comportement de l'utilisateur, nom de celui-ci, heure), le tout, à partir du même code source. Elle "n'existe" donc pas en tant que telle (contrairement à une page statique qui va tout le temps afficher la même chose), elle est "créée" lors de sa demande par l'ordinateur qui veut l'afficher à travers son navigateur web.

## Pourquoi est-il intéressant ?
Le Web dynamique est intéressant car il permet de nouvelles possibilités, impossibles à réaliser en statique : utilisation de base de données, personnalisation de l'affichage (interaction avec les utilisateurs/visiteurs). Il offre également une meilleure souplesse, pouvant être modifié en direct.

## Comment sont récupérés les fichiers par le Web Browser en Web statique ?
En Web statique, les fichiers sont récupérés via des requêtes : des URL correspondant à de simples fichiers sont renvoyés par le serveur web.

## Quels sont les avantages d'utiliser du Web Statique avec des services REST
Les avantages sont les suivants :
- Ils prennent moins de temps à développer et coûtent moins chers
- Ils sont plus sécurisés
- 

## Qu'est-ce que les architectures N-Tiers ?
Une architecture N-tiers correspond au principe de découper les services sur plusieurs instances différentes. Par exemple : La présentation, la persistance des données et les différents services métiers sont toutes sur des instances différentes. L'intérêt est que cette disposition permet un passage à l'échelle simplifié ainsi qu'une meilleure gestion des coûts. Les limites de ce système sont la sécurité et la gestion des communications qui restent particulièrement complexes à mettre en place.

## Comment fonctionne l'AJAX

## Qu’est-ce que JEE ?

"Java enterprise edition" est une plateforme permettant le développement d'applications dites "distribuées" ainsi que leurs exécutions.

## Comment fonctionne un serveur JEE ?

Les serveurs JEE hébergent les composants d'une architecture à plusieurs niveaux (Le modèle, la vue et le controller sont sur différentes instances). JEE fournit des services sous la forme de conteneur à ces niveaux.

## Qu’est-ce qu’un Web Container en JEE ?

  

## Qu’est ce que Springboot ? 

## Quelles différences avec JEE ?

## Qu’apport Thymeleaf à Springboot ?

## Que signifie l’annotation @Controller, pourquoi est-elle importante lors de la génération de pas coté serveur ?

## Que représente le répertoire ‘src/main/resources’ dans un projet SpringBoot ? 

## Quelles sont les informations stockées à cet endroit ?
