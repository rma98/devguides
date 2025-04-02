import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Container, Card, Title, Subtitle, OptionList, OptionItem, Pre } from "./styles/NextjsGuideStyles";

export default function NextjsGuide() {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { id: 1, title: "✅ TypeScript", desc: "Código mais seguro e menos propenso a erros." },
        { id: 2, title: "✅ ESLint", desc: "Mantém um código limpo e padronizado." },
        { id: 3, title: "✅ Tailwind CSS", desc: "Facilita a estilização com classes utilitárias." },
        { id: 4, title: "✅ Pasta src/", desc: "Melhora a organização do código." },
        { id: 5, title: "✅ App Router", desc: "Usa a versão mais moderna do roteamento no Next.js." },
        { id: 6, title: "✅ Turbopack", desc: "Compila o código mais rápido (ainda experimental, mas promissor)." },
        { id: 7, title: "❌ Personalização do alias", desc: "O padrão @/* já é ótimo, não precisa mudar." }
    ];

    return (
        <Container>
            <Card>
                <Title>Bem-vindo ao Meu Site!</Title>

                <Subtitle>🚀 Guia de Instalação do Next.js</Subtitle>
                <Subtitle>1️⃣ Criando o projeto</Subtitle>

                <Pre>npm init next-app .</Pre>

                <OptionList>
                    {options.map((option) => (
                        <OptionItem key={option.id} selected={selectedOption === option.id} onClick={() => setSelectedOption(option.id)}>
                            <strong>{option.title}</strong>
                            <p>{option.desc}</p>
                        </OptionItem>
                    ))}
                </OptionList>

                <Subtitle>🛑 Arquivos a remover</Subtitle>
                <ul>
                    {["public/favicon.ico", "src/app/globals.css", "next-env.d.ts"].map((file) => (
                        <li key={file} style={{ display: "flex", alignItems: "center", gap: "8px", background: "#4a5568", padding: "12px", borderRadius: "8px" }}>
                            <FaCheckCircle style={{ color: "#48bb78" }} />
                            <span>{file}</span>
                        </li>
                    ))}
                </ul>

                <Subtitle>🚀 Rodando o projeto</Subtitle>
                <p>Agora basta rodar comando e iniciar o servidor:</p>
                <Pre>
                    npm run dev
                </Pre>
            </Card>
        </Container>
    );
}
