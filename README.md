# Librairie de composants React

-------

## Collaboration

Ce projet a été créé CoCav et Blcav.

## Description

Pour répondre à la demande de notre client, une bibliothèque de composants web réutilisable a été créée.

Elle comporte 11 composants déclinés chacun en 3 stories. 

Liste des composants : 

* Accordion
* Avatar
* Breadcrumbs
* Button : ButtonSize & ButtonVariant
* Card
* Divider
* Popover
* Textfield : TextField & TextFieldVariant

Bonus :
* Collection

## Détail des composants

**Accordion**
<br/><br/>Propriétés à changer :
* bordered (type boolean) : permet de changer l'aspect visuel de l'accordéon en y ajoutant des bordures ou non. 
* show (type boolean) : permet de garder ouvert ou non le tiroir d'un accordéon.
* item (type string) : permet d'inscrire le numéro du tiroir que l'on souhaite voir ouvert dans l'accordéon.

Exemple d'utilisation : 
```sh
<Accordion
  bordered
  item="1"
  show
/>
```

-----
**Avatar**
<br/><br/>Propriétés à changer :
* width (type number) : permet de définir la largeur d'une image.
* height (type number) : permet de définir la hauteur d'une image.
* alt (type string) : permet d'ajouter un texte alternatif lié à l'image.
* url (type string) : permet d'ajouter le chemin du fichier qui contient l'image. 

Exemple d'utilisation : 
```sh
<MyAvatar
  alt="avatar's image"
  height={56}
  imagesurl="assets/img/img_profil.jpg"
  width={56}
/>
```
-----
**Breadcrumbs**
<br/><br/>Propriétés à changer :
* separator (type string) : permet de changer l'aspect visuel des séparateurs entre les liens ("/", "-" ou "|").
* url (type string) : permet d'ajouter l'url des liens.
* item (type number) : permet de définir le nombre maximal de liens à afficher à l'écran.

Exemple d'utilisation : 
```sh
<MyBasicBreadcrumbs
  item={3}
  separator="/"
  url="/"
/>
```
-----
**ButtonSize**
<br/><br/>Propriétés à changer :
* size (type string) : permet de définir la taille du bouton (small, medium ou large).
* label (type string) : permet de définir le texte du libellé du bouton.

Exemple d'utilisation : 
```sh
<ButtonSize
  label="Medium"
  size="medium"
/>
```
-----
**ButtonVariant**
<br/><br/>Propriétés à changer :
* variant (type string) : permet de définir l'aspect visuel du bouton (contained, outlined ou text).
* label (type string) : permet de définir le texte du libellé du bouton.

Exemple d'utilisation : 
```sh
<ButtonVariant
  label="Text"
  variant="text"
/>
```
-----
**Card**
<br/><br/>Propriété à changer :
* title (type string) : permet de définir le titre de la carte.
* size (type string) : permet de définir la taille de la carte (small ou default).

Exemple d'utilisation : 
```sh
<MyCard
  size="small"
  title="Small Card"
/>
```
-----
**Divider**
<br/><br/>Propriétés à changer :
* orientation (type string) : permet de définir l'orientation de la barre de séparation (left, right ou center).
* text (type string) : permet de définir un texte qui accompagne la barre de séparation.

Exemple d'utilisation : 
```sh
<MyDivider text="Center" />
```
-----
**Popover**
<br/><br/>Propriétés à changer :
* trigger (type string) : permet de définir le type d'événement qui fera apparaître le menu (hover, focus ou click).
* label (type string) : permet de définir le texte du libellé du bouton.

Exemple d'utilisation : 
```sh
<MyPopover
  label="Click me"
  trigger="click"
/>
```
-----
**TextField**
<br/><br/>Propriétés à changer :
* id (type string) : permet de définir l'id du champ.
* label (type string) : permet de définir le libellé du champ.
* placeholder (type string) : permet de définir le texte du placeholder du champ.
* LabelTextHelper (type string) : permet de définir le texte du texthelper du champ.

Exemple d'utilisation : 
```sh
<MyTextField
  helperText="Some important text"
  id="labelTextHelper"
  label="label"
  placeholder="Default Value"
/>
```
-----
**TextFieldVariant**
<br/><br/>Propriétés à changer :
* id (type string) : permet de définir l'id du champ.
* label (type string) : permet de définir le texte du libellé du champ.
* placeholder (type string) : permet de définir le texte du placeholder du champ.
* variant (type string) : permet de définir l'aspect visuel du bouton (filled, outlined ou standard).

Exemple d'utilisation : 
```sh
<TextFieldVariant
  id="standard-basic"
  label="Standard"
  placeholder="Default Value"
  variant="standard"
/>
```
-----
**Collection**
<br/><br/>Propriétés à changer : imageurl : type array, width : type number
* imageurl (type array) : permet d'ajouter des images dans un tableau.
* width (type number) : permet de définir la largeur des images contenues dans le tableau.

Exemple d'utilisation : 
```sh
<Collection
  imagesurl={[
    'assets/img/macareux.jpg',
    'assets/img/sterne_artique1.jpg',
    'assets/img/sterne_artique2.jpg'
  ]}
  width={200}
/>
```

## Langue

Ce projet a été réalisé en anglais.

## Technologies
Langage utilisé :
* React (https://fr.reactjs.org/): version 17.0.2

Librairies open source externes utilisées :
* Storybook (https://storybook.js.org/): version 6.5
* MUI (https://mui.com/): version 5.10.9
* Ant Design (https://ant.design/): version 4.23.5

### Pour démarrer le projet :

```sh
yarn install
```

```sh
yarn storybook
```
