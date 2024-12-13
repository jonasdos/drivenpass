# drivenpass
Aplicação Back-End desenvolvida em typescript para gerenciamento de senhas. 

### End Points: 
- post(/sign-up) Cadastrar novo usuário 
- post(/sign-in) Logar no sistema
- post(/credencials) Criar nova credencial
- get(/credentials) Buscar todas as credenciais do usuário
- get(/credentials/:id) Buscar uma credencial específica com base em sua ID
- put(/credentials/:id) Editar uma credencial
- delete(/credentiall/:id) Deletar uma credencial com base em sua ID
- delete(/erase) Deletar todos os dados da conta

### Autenticação de usuário e criptografia das senhas
Ao logar no sistema, o usuário recebe um token que deve ser utilizado para autenticar todas as requisições subsequentes. As senhas salvas são criptografadas. 

## link da aplicação: 
https://drivenpass-mwf4.onrender.com 