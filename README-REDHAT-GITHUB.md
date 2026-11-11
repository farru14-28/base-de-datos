# Logistic World | GitHub + Red Hat OpenShift

## Qué contiene
- `frontend/`: aplicación Angular original.
- `backend/`: API Quarkus original.
- `database/logistic_world.sql`: esquema y datos SQL originales.
- `Dockerfile`: imagen web Angular sobre UBI/nginx.
- `backend/Dockerfile`: imagen API Quarkus sobre UBI OpenJDK.
- `openshift/`: Deployment, Service, Route y MySQL con PVC.
- `.github/workflows/deploy.yml`: workflow GitHub Actions para construir imágenes, publicarlas en Quay y desplegarlas en OpenShift.

## Importante
Este repositorio queda **preparado**, no desplegado automáticamente todavía. Para que el pipeline funcione, debe existir un clúster OpenShift accesible, un namespace, Quay y los siguientes GitHub Actions secrets:
- `QUAY_USERNAME`
- `QUAY_TOKEN`
- `OPENSHIFT_SERVER` (URL API del clúster, no la URL pública de la app)
- `OPENSHIFT_TOKEN`
- `OPENSHIFT_NAMESPACE`

Cambie `CHANGE_ME` en `openshift/backend.yaml` y `openshift/frontend.yaml` por su usuario/organización de Quay. La pipeline sustituye las imágenes al hacer `oc set image`.

## Base de datos
1. Configure el Secret `logistic-world-db` con contraseñas seguras (no commitee credenciales).
2. Despliegue `openshift/mysql.yaml`.
3. Importe `database/logistic_world.sql` en MySQL. Por ejemplo, desde un entorno autorizado:
   `mysql -h <host> -u <usuario> -p logistic_world < database/logistic_world.sql`
4. Verifique la conectividad desde Quarkus.

## Publicar
- Suba todo el contenido de esta carpeta a la raíz de GitHub.
- Configure los secrets de Actions.
- Haga push a `main`.
- Cuando el Route se cree, obtenga la URL real con:
  `oc get route logistic-world -n logistic-world`

La URL pública depende del dominio/router configurado en SU clúster OpenShift; no se puede inventar antes del despliegue.
