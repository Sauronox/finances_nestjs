# Local .env
echo "============================"
echo "Check env variable ..."
echo "============================"
if [ -f .env ]; then
    # Load Environment Variables
    ls -a ./
    export $(cat .env | grep -v '#' | awk '/=/ {print $1}')

    if [[ -z "$PASSPHRASE_SSL_CA" ]]; then
          echo "\$PASSPHRASE_SSL_CA not defined"
          exit 1
    fi
else
  echo ".env not found"
  exit 1
fi

cd ./secrets/

echo "============================"
echo "Generate CA certificate ..."
echo "============================"
if [ ! -f root-ca.key ]; then
  openssl genrsa -des3 -out root-ca.key -passout pass:$PASSPHRASE_SSL_CA 4096
else
  echo "root-ca.key already exists"
fi

if [ ! -f root-ca.pem ]; then
  openssl req -x509 -new -nodes -key root-ca.key -sha256 -days 365 -out root-ca.pem -passin pass:$PASSPHRASE_SSL_CA -subj "/C=FR/ST=ile de frace/L=pontoise/O=itescia/OU=lead dev/CN=root-ca/emailAddress=alan.drieux@edu.itescia.fr"
else
  echo "root-ca.pem already exists"
fi

cd ../certs/

echo "=========================================="
echo "Generate ext file ..."
echo "=========================================="
echo """authorityKeyIdentifier=keyid,issuer
basicConstraints=CA:FALSE
keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
subjectAltName = @alt_names
[alt_names]
DNS.1 = myfinance.com
DNS.2 = api.myfinance.com
DNS.3 = auth.myfinance.com""" > myfinance.ext

echo "=========================================="
echo "Generate Certificate for myfinance.com ..."
echo "=========================================="
openssl genrsa -out myfinance.com.key 4096
openssl req -new -key myfinance.com.key -out myfinance.com.csr -subj "/C=FR/ST=ile de frace/L=pontoise/O=itescia/OU=lead dev/CN=myfinance.com/emailAddress=alan.drieux@edu.itescia.fr"
openssl x509 -req -in myfinance.com.csr -CA ../secrets/root-ca.pem -CAkey ../secrets/root-ca.key -CAcreateserial -out myfinance.com.crt -days 90 -sha256 -extfile myfinance.ext -passin pass:$PASSPHRASE_SSL_CA

echo "============================================"
echo "Generate Certificate for *.myfinance.com ..."
echo "============================================"
openssl genrsa -out sub.myfinance.com.key 4096
openssl req -new -key sub.myfinance.com.key -out sub.myfinance.com.csr -subj "/C=FR/ST=ile de frace/L=pontoise/O=itescia/OU=lead dev/CN=*.myfinance.com/emailAddress=alan.drieux@edu.itescia.fr"
openssl x509 -req -in sub.myfinance.com.csr -CA ../secrets/root-ca.pem -CAkey ../secrets/root-ca.key -CAcreateserial -out sub.myfinance.com.crt -days 90 -sha256 -extfile myfinance.ext -passin pass:$PASSPHRASE_SSL_CA