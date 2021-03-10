# Ejercicio de Angular (PRACTICA)

## Comandos Git
git add . (añade los ficheros al escenario)

git status (visualizas antes de commitear las acciones que tenienes pendiente)

git commit -m comentario (commitea al repositorio)

git checkout -- . (te hace checkout de lo ultimo que este en el repositorio local)

## Subir al repositorio github
Esto seria para crear el repositorio local: git init; git add .; git commit -m "first commit"
git remote add origin https://github.com/NOMBRE_USUARIO/NOMBRE_PROYECTO.git
git push -u origin master


## Descargar APP desde github
FORMA 1:
Descargar el zip y descomprimir en la carpetas (No tiene el repositorio local creado)
Requiere crear el repositorio local: git init (la carpeta de donde se haya descomprimido)

FORMA 2:
Clonar: (esta incluye el repositorio local con todos los cambios hechos en el historial)
git clone https://github.com/isolisjccm/cursoangular.git ejercicio


IMPORTANTE: Ambas Formas requiere instalar el software necesario, dentro de la carpeta que hayas descomprimido/clonado: npm install

## refrescar cambios desde un repositorio
git pull
npm install (para recompilar todo los node)


## Librerias con componentes ya hechos
- Angular Material
- Primeng