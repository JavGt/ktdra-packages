# Notas para usar lerna

> ## Notas
>
> - Se usa `npx` o no antes de la palabra `lerna`, eso depende si tienes lerna instalado de manera `global`
>
> ```cmd
>  npm install -g lerna
> ```
>
> - Se hace referencia a los paquetes por el nombre que tiene en el package.json, no por el nombre la carpeta
>
> ```json
> }
>   "name": "@ktdra-digital/icons",
>   ...
> }
> ```

## Creación de paquetes

Para crear un nuevo paquete en el proyecto, se debe utilizar el siguiente comando:

```cmd
npx lerna create <nombre-del-paquete>
```

## Ver todos los paquetes

Para poder ver todos tus paquetes creados, utiliza el siguiente comando:

```cmd
npx lerna list
```

## Descarga de librerías

Para agregar una dependencia a todos los paquetes del proyecto, se puede utilizar el siguiente comando:

```cmd
npx lerna add <nombre-de-la-librería>
```

## Descarga de librerías para un solo paquete

Para instalar una librería solo en un paquete específico en un proyecto manejado por Lerna, se puede utilizar el siguiente comando:

```cmd
npx lerna add <nombre-de-la-librería> --scope=<nombre-del-paquete>
```

> Ejemplo
>
> ```cmd
> npx lerna add @svgr/cli --scope=@ktdra-digital/icons
> ```

## Ver todas las librerías de los paquetes

```cmd
npm ls
```

## Borrar una dependencia de un paquete

```cmd
lerna exec --scope=<nombre-del-paquete> npm uninstall <nombre-de-la-dependencia>
```

Ejemplo:

```cmd
lerna exec --scope=@ktdra-digital/icons npm uninstall @svgr/cli
```

## Como instalar una dependencia, pero que aparezca en los paquetes, sea única en el proyecto

```cmd
 yarn add <nombre-de-la-dependencia> --dev --ignore-workspace-root-check
```

> Ejemplo
>
> ```cmd
> yarn add fs-extra @types/fs-extra --dev --ignore-workspace-root-check
> ```
