# Comandos Importantes de Git:

- Crear un repositorio local:

`git init`

- Enviar los archivos a Staging:

`git add .`

- Crear un checkpoint en el código:

`git commit -m "mensaje del commmit"`

- Crear un nuevo branch:

`git checkout -b nombre_del_branch`

- Cambiar de branch:

`git checkout nombre_del_branch`

- Combinar cambios de dos branches:

`git checkout branch_principal`

`git merge branch_secundario`

- Habilitar sincronización con el repositorio remoto:

`git remote add nombre_del_remoto(generalmente origin) https://url_del_remoto.com`

- Enviar códigos al repositorio remoto:

`git push nombre_del_remoto nombre_del_branch`

- Traer códigos del repositorio remoto:

`git pull nombre_del_remoto nombre_del_branch`
