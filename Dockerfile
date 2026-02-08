# Use Eclipse Temurin JDK 21 slim image
FROM eclipse-temurin:21-jdk-slim

# Set working directory
WORKDIR /app

# Copy jar file from target
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Expose Spring Boot port
EXPOSE 8080

# Run the jar
ENTRYPOINT ["java", "-jar", "app.jar"]