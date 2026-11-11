FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /workspace
COPY pom.xml .
COPY src ./src
RUN mvn package -DskipTests

FROM registry.access.redhat.com/ubi9/openjdk-21-runtime
WORKDIR /deployments
COPY --from=build /workspace/target/quarkus-app/ /deployments/
EXPOSE 8080
USER 1001
CMD ["java","-jar","quarkus-run.jar"]
