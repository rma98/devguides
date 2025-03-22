import { Container, Card, Title, Subtitle, Pre } from "./styles/ComandsGitStyles";

export default function ComandsGuide() {
    return (
        <Container>
            <Card>
                <Title>Bem-vindo ao Meu Site!</Title>

                <Subtitle>🚀 Guia de Comandos</Subtitle>

                <Subtitle>1️⃣ Criar uma nova branch</Subtitle>
                <Pre>git checkout -b nome-da-branch</Pre>

                <p>Por exemplo:</p>
                <Pre>git checkout -b login</Pre>

                <p>Enviar a nova branch para o repositório remoto:</p>
                <Pre>git push origin nome-da-branch</Pre>

                <p>Exemplo:</p>
                <Pre>git push origin login</Pre>

                <Subtitle>2️⃣ Verificar as branches disponíveis</Subtitle>
                <Pre>git branch</Pre>

                <Subtitle>3️⃣ Trocar para outra branch</Subtitle>
                <Pre>git checkout nome-da-branch</Pre>

                <p>Exemplo: Se você quer trocar para a branch register, use:</p>
                <Pre>git checkout register</Pre>

                <Subtitle>4️⃣ Trazer atualizações de uma branch para outra</Subtitle>

                <p>Se você quer trazer as mudanças da branch login para a branch register, siga os passos:</p>
                <p>Certifique-se de estar na branch de destino (register): Primeiro, troque para a branch register:</p>
                <Pre>git checkout register</Pre>
                
                <p>Fazer o merge da branch login para a branch atual: Depois de acessar a branch register, traga as mudanças da branch login com o comando:</p>
                <Pre>git merge login</Pre>

                <p>Manter as branches sempre atualizadas</p>
                <Pre>git pull origin nome-da-branch</Pre>

                <p>Por exemplo:</p>
                <Pre>git checkout login{'\n'}git pull origin login</Pre>

                <Subtitle>5️⃣ Juntar atualizações na branch main</Subtitle>
                <p>Depois de trabalhar nas branches como login e register, você pode trazer essas mudanças para a main com o comando:</p>
                <Pre>git checkout main{'\n'}git merge login{'\n'}git merge register</Pre>
                <p>Para "enviar" essas mudanças ao servidor remoto:</p>
                <Pre>git push origin main</Pre>

                <Subtitle>6️⃣ Apagar branches locais:</Subtitle>
                <Pre>git branch -d nome-da-branch</Pre>

                <p>Por exemplo, para apagar as branches login e register:</p>
                <Pre>git branch -d login{'\n'}git branch -d register</Pre>
                <p>Apagar branches remotas (se estiverem no GitHub ou outro servidor):</p>
                <Pre>git push origin --delete nome-da-branch</Pre>
                <p>Exemplo:</p>
                <Pre>git push origin --delete login{'\n'}git push origin --delete register</Pre>

                <Subtitle>7️⃣ Passos após realizar o fork no GitHub</Subtitle>
                <p>Clonar o fork para o computador local:</p>
                <Pre>git clone{'\n'}https://github.com/fernandasales27/Clinica-Medica-Web.git</Pre>

                <p>Entrar na pasta do projeto clonado:</p>
                <Pre>cd Clinica-Medica-Web</Pre>

                <p>Configurar o repositório original como "upstream"</p>
                <Pre>git remote add upstream{'\n'}https://github.com/fernandasales27/Clinica-Medica-Web.git</Pre>
                <p>upstream: É o nome dado ao repositório original (o seu).</p>
                <p>origin: É o nome padrão para o fork da pessoa.</p>

                <Subtitle>8️⃣ Passos para atualizar um fork</Subtitle>
                <p>Adicionar o repositório original como remoto:</p>
                <Pre>git remote add upstream{'\n'}https://github.com/fernandasales27/Clinica-Medica-Web.git</Pre>

                <p>Baixar as atualizações do repositório original:</p>
                <Pre>git fetch upstream</Pre>

                <p>Fazer o merge das mudanças na branch principal do fork:</p>
                <Pre>git checkout main{'\n'}git merge upstream/main</Pre>

                <p>Enviar as mudanças para o fork no GitHub:</p>
                <Pre>git push origin main</Pre>

                <Subtitle>9️⃣ Desfazer o último commit</Subtitle>
                <p>Se o commit ainda não foi enviado para o GitHub, basta usar:</p>
                <Pre>git reset --hard HEAD~1</Pre>

                <p>HEAD~1 significa voltar um commit atrás (caso queira voltar mais commits, altere o número, ex: HEAD~2).</p>
                <p>--hard remove completamente as mudanças do último commit do histórico e do diretório de trabalho.</p>

                <p>Se você já fez git push (commit foi enviado para o GitHub)</p>
                <Pre>git reset --hard HEAD~1{'\n'}git push --force</Pre>

                <p>Cuidado! git push --force sobrescreve o histórico remoto, então se outras pessoas já baixaram a versão mais recente, isso pode causar conflitos para elas.</p>

                <p>Se quiser manter as mudanças, mas só remover o commit</p>
                <Pre>git reset --soft HEAD~1</Pre>
                
                <p>--soft desfaz o commit mas mantém as mudanças nos arquivos, então você pode revisar, modificar e fazer um novo commit depois.</p>

                <p>Se quiser apagar um commit antigo sem perder os commits mais recentes</p>
                <p>Veja o histórico dos commits para encontrar o hash do commit que quer apagar:</p>
                <Pre>git log --oneline</Pre>

                <p>Isso listará os commits no formato:</p>
                <Pre>a1b2c3d Criar código classe ReservaServiceTest{'\n'}e4f5g6h Criar código classe AuthorizationServiceTest{'\n'}i7j8k9l Ajuste no arquivo ConfigService{'\n'}m1n2o3p Criar código classe UserController</Pre>

                <p>Aqui, suponha que queremos remover o commit i7j8k9l (Ajuste no arquivo ConfigService).</p>
                <p>Agora, inicie o rebase interativo para editar os commits:</p>
                <Pre>git rebase -i HEAD~4</Pre>
                
                <p>O número 4 indica que queremos editar os últimos 4 commits. Ajuste conforme necessário.</p>

                <p>No editor que abrir, você verá uma lista de commits como esta:</p>
                <Pre>pick a1b2c3d Criar código classe ReservaServiceTest{'\n'}pick e4f5g6h Criar código classe AuthorizationServiceTest{'\n'}pick i7j8k9l Ajuste no arquivo ConfigService{'\n'}pick m1n2o3p Criar código classe UserController</Pre>

                <p>Altere pick para drop no commit que deseja apagar.</p>
                <Pre>pick a1b2c3d Criar código classe ReservaServiceTest{'\n'}pick e4f5g6h Criar código classe AuthorizationServiceTest{'\n'}drop i7j8k9l Ajuste no arquivo ConfigService{'\n'}pick m1n2o3p Criar código classe UserController</Pre>

                <p>Salve e feche o editor. O Git irá reescrever o histórico e remover o commit escolhido.</p>
                <p>Agora, force a atualização no GitHub:</p>
                <Pre>git push --force</Pre>

                <p> Atenção: Como estamos alterando o histórico, se outras pessoas já baixaram esse repositório, isso pode causar conflitos para elas.</p>

                <p>Se quiser apagar todos os commits a partir de um ponto específico</p>
                <p>Se você deseja remover todos os commits depois de um commit antigo e voltar ao estado dele, use:</p>
                <Pre>git reset --hard `hash_do_commit_antigo`</Pre>

                <p>Exemplo: Se quiser voltar ao commit e4f5g6h:</p>
                <Pre>git reset --hard e4f5g6h{'\n'}git push --force</Pre>

                <p>Isso apagará todos os commits após e4f5g6h e o repositório voltará a esse estado.</p>

                <Subtitle>📌 Comando para Adicionar um Submódulo</Subtitle>
                <Pre>git submodule add `URL_DO_REPOSITORIO`</Pre>

                <p>Exemplo prático:</p>
                <p>Se você tem um repositório principal chamado Clinica-Medica e deseja adicionar o repositório Clinica-Medica-Web como um submódulo, execute:</p>
                <Pre>git submodule add{'\n'}https://github.com/fernandasales27/Clinica-Medica-Web.git</Pre>

                <p>Isso criará um diretório dentro do repositório principal com o código do Clinica-Medica.</p>

                <Subtitle>📌 Clonando um Repositório com Submódulos</Subtitle>
                <p>Se alguém clonar seu repositório principal, por padrão o submódulo não vem automaticamente. Para clonar corretamente, use:</p>
                <Pre>git clone --recurse-submodules{'\n'}https://github.com/fernandasales27/Clinica-Medica.git</Pre>

                <p>Caso tenha clonado sem os submódulos, inicialize-os manualmente:</p>
                <Pre>git submodule update --init --recursive</Pre>

                <Subtitle>📌 Atualizando um Submódulo</Subtitle>
                <p>Se o submódulo foi atualizado e você quer trazer as novas mudanças para o repositório principal, use:</p>
                <Pre>cd Clinica-Medica-Web  # Entre no diretório do submódulo{'\n'}git pull origin main  # Ou a branch desejada{'\n'}cd ..{'\n'}git add frontend{'\n'}git commit -m "Atualizado submódulo frontend"{'\n'}git push origin main</Pre>

                <Subtitle>📌 Removendo um Submódulo</Subtitle>
                <p>Se quiser remover um submódulo, siga estes passos:</p>
                <p>Remova a entrada do submódulo no .gitmodules</p>
                <Pre>git config -f .gitmodules --remove-section submodule.Clinica-Medica-Web</Pre>

                <p>Remova a referência no Git</p>
                <Pre>git rm --cached backend</Pre>

                <p>Remova a pasta do submódulo</p>
                <Pre>rm -rf backend</Pre>

                <p>Confirme e envie a remoção</p>
                <Pre>git commit -m "Removido submódulo frontend"{'\n'}git push origin main</Pre>
            </Card>
        </Container>
    );
}
