# Aprender Git y GitHub con Visual Studio Code

Proyecto de ejemplo: una web sencilla que sirve de guía paso a paso para aprender a usar `git` y GitHub con Visual Studio Code (VSC).

Contenido del repositorio:

- `index.html` — página de ejemplo con comandos básicos.
- `style.css` — estilos mínimos.
- `script.js` — interacción demo.
- `.gitignore` — archivos a ignorar.

Pre-requisitos
- Tener instalado Git: `git --version`.
- Tener Visual Studio Code instalado.
- (Opcional) Instalar la extensión "GitHub Pull Requests and Issues" en VS Code y/o el CLI `gh`.

Pasos rápidos (línea de comandos)

1. Abrir la carpeta en VS Code: `code .`
2. Inicializar git y hacer el commit inicial:

```
git init -b main
git add .
git commit -m "Initial scaffold: Aprender Git con VSC"
```

3. Crear un repositorio en GitHub (por web) y copiar la URL.
4. Conectar remoto y subir:

```
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

Flujo básico recomendado (good practices)
- Crear una rama para cada cambio: `git checkout -b feature/mi-cambio`
- Hacer commits pequeños y con buenos mensajes: `git commit -m "Descripción corta: qué y por qué"`
- Subir la rama: `git push -u origin feature/mi-cambio`
- Abrir Pull Request en GitHub y luego mergear.

Uso en Visual Studio Code

- En VS Code abre la vista de Control de Código Fuente (icono de rama o `Ctrl+Shift+G`).
- Verás los cambios sin commitear; añade mensaje y presiona el ✓ para commitear.
- Usar la extensión de GitHub para crear PRs desde la interfaz.

Crear repositorio remoto desde terminal (opcional)

Si tienes instalado `gh` y estás autenticado:

```
gh repo create NOMBRE_REPO --public --source=. --remote=origin --push
```

Consejos para principiantes
- Configura tu nombre y email si Git lo pide:

```
git config --global user.name "Tu Nombre"
git config --global user.email "tu@example.com"
```
- Lee los mensajes de error: suelen decir exactamente qué falta.
- Practica creando ramas, haciendo commits y volviendo a versiones anteriores con `git checkout` y `git log`.

