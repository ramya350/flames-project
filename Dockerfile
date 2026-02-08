# Use OpenJDK 25 as base image
FROM openjdk:25-jdk-slim

# Set working directory inside the container
WORKDIR /app

# Copy only the pom.xml first for dependency caching
COPY pom.xml .

# Install Maven, build dependencies only
RUN apt-get update && \
    apt-get install -y maven && \
    mvn dependency:resolve

# Copy the rest of the project
COPY src ./src

# Build the project
RUN mvn clean package -DskipTests

# Expose Spring Boot default port
EXPOSE 8080

# Run the Spring Boot jar
CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]