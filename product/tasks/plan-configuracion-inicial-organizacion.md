# Plan de acción: Redirección y configuración inicial de organización tras login

**Contexto:**  
Cuando un usuario inicia sesión y pertenece a una organización sin datos configurados, debe ser redirigido a una pantalla de configuración inicial. Una vez completada, no volverá a verla. Si es ADMIN, tras configurar, irá al panel general de la organización.

---

## 1. Detección de organización sin datos tras login

- **1.1** Modificar el flujo de login para obtener la información de la organización asociada al usuario.
- **1.2** Definir qué significa "organización sin datos" (por ejemplo, campos clave vacíos: nombre, dirección, etc.).
- **1.3** Implementar una comprobación tras login:  
  - Si la organización está sin datos, guardar un flag en el estado global (ej: `needsInitialSetup: true`).

---

## 2. Redirección automática a la pantalla de configuración

- **2.1** Crear un componente/página de configuración inicial de organización (si no existe).
- **2.2** En el router, añadir lógica para:
  - Si `needsInitialSetup` es true, redirigir automáticamente a la pantalla de configuración.
  - Bloquear acceso a otras rutas de la app hasta completar la configuración.

---

## 3. Guardado de la configuración inicial

- **3.1** Implementar el formulario de configuración inicial (campos requeridos).
- **3.2** Al guardar, actualizar los datos de la organización en backend.
- **3.3** Al éxito, actualizar el flag `needsInitialSetup` a false.

---

## 4. Redirección post-configuración según rol

- **4.1** Tras guardar la configuración:
  - Si el usuario es ADMIN, redirigir al panel general de la organización.
  - Si no es ADMIN, redirigir a la pantalla principal que corresponda a su rol.

---

## 5. Prevención de acceso futuro a la pantalla de configuración

- **5.1** Añadir lógica para que, si la organización ya está configurada, no se pueda acceder manualmente a la pantalla de configuración inicial.

---

## Resumen de tareas

1. Añadir comprobación de organización sin datos tras login.
2. Crear/rediseñar la pantalla de configuración inicial.
3. Añadir lógica de redirección automática y bloqueo de rutas.
4. Implementar guardado de datos y actualización de flags.
5. Redirigir según rol tras configuración.
6. Prevenir acceso futuro a la pantalla de configuración inicial. 