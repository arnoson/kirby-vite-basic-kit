<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kirby Vite Basic</title>
  <?= vite()->js('index.js', ['defer' => true]) ?>
  <!-- We imported `index.css` inside `index.js`, so `index.js` is the Vite
  entry containing our CSS. -->
  <?= vite()->css('index.js') ?>
</head>
<body>