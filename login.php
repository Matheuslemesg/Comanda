<?php
// Verifica se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Obtém os dados do formulário
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Conexão com o SQL Server
    $serverName = "32.95.153.81";
    $connectionOptions = array(
        "Database" => "comandas",
        "Uid" => "sqlserver",
        "PWD" => "medsys"
    );
    $conn = sqlsrv_connect($serverName, $connectionOptions);

    // Verifica se a conexão foi estabelecida com sucesso
    if ($conn === false) {
        die(print_r(sqlsrv_errors(), true));
    }

    // Consulta para verificar as credenciais do usuário
    $query = "SELECT * FROM usuario WHERE nomeUsuario = ?";
    $params = array($username);
    $stmt = sqlsrv_query($conn, $query, $params);

    // Verifica se o usuário existe e a senha está correta
    if ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
        if (password_verify($password, $row['password'])) {
            // Autenticação bem-sucedida, redireciona para a página de sucesso ou realiza as ações desejadas
            header('Location: logado.html');
            exit;
        }
    }

    // Se chegou até aqui, a autenticação falhou, exibe uma mensagem de erro
    echo "Usuário ou senha inválidos!";
}
?>
