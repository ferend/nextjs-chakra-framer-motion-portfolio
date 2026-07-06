sudo tee /opt/portfolio/deploy.sh << 'EOF'
#!/usr/bin/env bash
set -e
cd /opt/portfolio
echo ">>> Pulling latest code from GitHub"
git pull origin master
TAG=$(git rev-parse --short HEAD)
IMAGE="portfolio:$TAG"
echo ">>> Building $IMAGE"
sudo docker build -t "$IMAGE" .
echo ">>> Importing into k3s containerd"
sudo docker save "$IMAGE" | sudo k3s ctr images import -
echo ">>> Updating image tag in manifest"
sudo sed -i "s|image: portfolio:.*|image: $IMAGE|" /opt/portfolio/k8s/deploy.yaml
echo ">>> Applying manifest"
sudo kubectl apply -f /opt/portfolio/k8s/deploy.yaml
echo ">>> Waiting for rollout"
sudo kubectl rollout status deployment/portfolio -n portfolio
echo ""
echo " Done. Deployed $IMAGE"
EOF
sudo chmod +x /opt/portfolio/deploy.sh