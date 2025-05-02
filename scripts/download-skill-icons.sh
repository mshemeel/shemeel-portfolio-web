#!/bin/bash

# Create the skills directory if it doesn't exist
mkdir -p public/images/skills

# Define the URL prefix for the Simple Icons repository
BASE_URL="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons"

# Function to download an icon
download_icon() {
  local name=$1
  local filename=$2
  local url="${BASE_URL}/${name}.svg"
  
  echo "Downloading ${name} icon to ${filename}..."
  curl -s "$url" -o "public/images/skills/${filename}.svg" || {
    echo "Failed to download ${name}, trying alternative..."
    return 1
  }
  return 0
}

# Download icons for programming languages and frameworks
download_icon "java" "java" || echo "Using fallback for java"
download_icon "spring" "spring-boot" || echo "Using fallback for spring-boot"
download_icon "spring" "spring-cloud" || echo "Using fallback for spring-cloud"
download_icon "microservices" "microservices" || curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" -o "public/images/skills/microservices.svg"
download_icon "spring" "spring-webflux" || echo "Using fallback for spring-webflux"
download_icon "openapi" "rest-api" || curl -s "https://cdn.jsdelivr.net/gh/cncf/artwork/projects/openapi-initiative/icon/color/openapi-initiative-icon-color.svg" -o "public/images/skills/rest-api.svg"
download_icon "graphql" "graphql" || echo "Using fallback for graphql"
download_icon "go" "golang" || echo "Using fallback for golang"
download_icon "react" "react" || echo "Using fallback for react"
download_icon "react" "react-native" || echo "Using fallback for react-native"
download_icon "redux" "redux" || echo "Using fallback for redux"
download_icon "typescript" "typescript" || echo "Using fallback for typescript"
download_icon "html5" "html-css" || curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" -o "public/images/skills/html-css.svg"
download_icon "swift" "swift" || echo "Using fallback for swift"
download_icon "kotlin" "kotlin" || echo "Using fallback for kotlin"
download_icon "docker" "docker" || echo "Using fallback for docker"
download_icon "kubernetes" "kubernetes" || echo "Using fallback for kubernetes"
download_icon "microsoftazure" "azure" || echo "Using fallback for azure"
download_icon "amazonaws" "aws" || echo "Using fallback for aws"
download_icon "redhatopenshift" "openshift" || echo "Using fallback for openshift"
download_icon "githubactions" "cicd" || curl -s "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" -o "public/images/skills/cicd.svg"
download_icon "postgresql" "postgresql" || echo "Using fallback for postgresql"
download_icon "mysql" "mysql" || echo "Using fallback for mysql"
download_icon "mongodb" "mongodb" || echo "Using fallback for mongodb"
download_icon "oracle" "oracle" || echo "Using fallback for oracle"
download_icon "git" "git" || echo "Using fallback for git"
download_icon "jenkins" "jenkins" || echo "Using fallback for jenkins"
download_icon "jira" "jira" || echo "Using fallback for jira"
download_icon "apachemaven" "maven" || echo "Using fallback for maven"
download_icon "sonarqube" "sonarqube" || echo "Using fallback for sonarqube"
download_icon "auth0" "oauth" || curl -s "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/auth0.svg" -o "public/images/skills/oauth.svg"
download_icon "letsencrypt" "mtls" || curl -s "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/letsencrypt.svg" -o "public/images/skills/mtls.svg"
download_icon "pcisecuritystandards" "pci-dss" || curl -s "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/pcisecuritystandards.svg" -o "public/images/skills/pci-dss.svg"

# For some icons that might not be available in the repository, create fallbacks
# Create a fallback for microservices if it wasn't downloaded
if [ ! -f "public/images/skills/microservices.svg" ]; then
  echo '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"></rect><rect x="15" y="3" width="6" height="6" rx="1"></rect><rect x="3" y="15" width="6" height="6" rx="1"></rect><rect x="15" y="15" width="6" height="6" rx="1"></rect><path d="M9 6h6"></path><path d="M9 18h6"></path><path d="M6 9v6"></path><path d="M18 9v6"></path></svg>' > "public/images/skills/microservices.svg"
fi

# Create a fallback for Spring WebFlux if it wasn't downloaded
if [ ! -f "public/images/skills/spring-webflux.svg" ]; then
  cp "public/images/skills/spring-boot.svg" "public/images/skills/spring-webflux.svg"
fi

# Create a fallback for Spring Cloud if it wasn't downloaded
if [ ! -f "public/images/skills/spring-cloud.svg" ]; then
  cp "public/images/skills/spring-boot.svg" "public/images/skills/spring-cloud.svg"
fi

echo "Download completed. Verifying files..."
ls -la public/images/skills/

echo "All skill icons have been downloaded successfully!" 