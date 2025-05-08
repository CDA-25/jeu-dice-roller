# Dice roller

## Objectif timing

- on va pas ce le cacher j'ai besoin d'argent et il faut que je vends cette app aujourd'hui  
  et j'ai toute la partie "mise en prod à faire", donc je te laisse environ 1h sans bonus et 1h30 avec bonus
  si as un moment donné tu penses ne pas y arriver, n'hésite pas à me le dire.  

:game_die: Cette fois-ci on va créer un programme pour lancer des dés, c'est parti ! :game_die:

## Commençons par créer un dé

On va créer un dé en javascript :
- Dans `app.js` il faut faire en sorte de créer une `div`
- On va ajouter une classe `dice` à cette `div`, ça tombe bien il y a tous les styles qui vont bien dans `styles.css` pour dimensionner et appliquer une image d'arrière-plan à cette classe  
_Tiens d'ailleurs_ l'image appliquée en arrière plan est ce qu'on appelle un sprite : c'est une image comportant en fait plusieurs images. On n'affichera qu'une partie de l'image en arrière plan, en jouant sur la position de l'arrière-plan on affichera telle ou telle portion de l'image. C'est très pratique pour ne charger qu'une seule image au lieu de plusieurs.
- On n'a plus qu'à insérer la `div` créée dans le DOM, il faudrait l'ajouter dans la `div` déjà présente qui possède l'id `player`
[de la doc](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
[encore de la doc](https://developer.mozilla.org/en-US/docs/Web/API/Element/append)

## Tirer un nombre aléatoire

Bon c'est bien beau tout ça mais ça me tire que des 1 pour le moment, je risque pas de gagner :confounded:

- On ajoute une fonction pour tirer un nombre aléatoire entre 1 et 6
[de la doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
[encore de la doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)
- On se sert du nombre obtenu pour modifier la position de l'arrière plan du dé  
Pour info chaque face de dé fait exactement 100px de large sur le sprite ;)
- (helper utilise background-position pour modifier la position de l'arrière-plan)
[de la doc](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)
[encore de la doc](https://www.w3schools.com/jsref/prop_html_style.asp)

## Lancer plusieurs dés

Chouette on y est presque ! Maintenant faudrait lancer plusieurs dés

- Il faudrait demander à l'utilisateur de saisir combien de dés il veut lancer,  
pour le moment utilise la fonction `prompt` pour lui demander combien de dés il veut lancer
- On pourrait créer une fonction contenant les instructions à la création d'un dé
- Et enfin executer la fonction autant de fois que de dés demandés par l'utilisateur

## Ajouter un adversaire

On va faire un deuxième lancer aléatoire

- On ajoute une `div` après la `div` possédant l'id `player`, on lui met une classe `board` et un id `dealer`  
  Si tout va bien on doit voir 2 zones oranges prenant chacune la moitié de l'écran
- L'objectif est de générer un tirage dans la zone du joueur et un tirage dans la zone du dealer
- On pourrait pour cela ajouter un paramètre à notre fonction de génération de dé  
pour récuperer l'id de l'élément à cibler : soit la `div` avec l'id `player`, soit celle avec l'id `dealer`
mais bon bref peut etre je t'embrouille plus que je t'aide là ..., c'est toi le dev à toi de voir comment tu veux faire ;-)

# Bon cool hein mais faut reload la page à chaque fois ... la tronche du truc ...

- utiliser des input number et notre amis JS pour recuperer la valeur saisie par l'utilisateur
on va remplacer notre systeme de `prompt` par un input number ça sera plus smouth !! 
  [de la doc](https://developer.mozilla.org/fr/docs/Web/HTML/Reference/Elements/label)
  [encore de la doc](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input)
- ajoute un bouton "jouer" qui va lancer le jeu, le top serait que l'utilisateur saisisse le nombre de dés qu'il veut lancer
et qu'il clique sur le bouton pour lancer les dés, réflechi bien à la logique pour ne pas avoir des comportements inattendus
[de la doc](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)

## On va quand meme arranger ça

- faire un peu de design mais pas trop enfin on se comprends faut pas un design de 1900 tout de même  
tu vois ce que je veux dire ? prends en compte cela pour finir dans les temps.

---

<details>
<summary>
  Bonus <strong>facultatif</strong>
</summary>

## Calculer un score

- Maintenant qu'on a deux joueurs, il faudrait qu'on puisse calculer le score de chaque joueur
- On va faire ça en ajoutant une fonction qui va additionner les valeurs de chaque dé
- [de la doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- on va afficher le score du player et du dealer dans une div
- on va afficher un message " you win " ou " you lose " selon le score du player et du dealer

</details>
