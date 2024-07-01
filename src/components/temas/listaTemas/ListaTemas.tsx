import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import CardTemas from "../cardTemas/CardTemas";
import { Oval } from 'react-loader-spinner';
import Tema from "../../../models/Tema";

function ListaTemas() {
    const [temas, setTemas] = useState<Tema[]>([]);

    let navigate = useNavigate();

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    async function buscarTemas() {
    try {
        await buscar('/temas', setTemas, {
        headers: { Authorization: token },
        });
    } catch (error: any) {
        if (error.toString().includes('403')) {
        alert('O token expirou, favor logar novamente')
        handleLogout()
        }
}
    }

    useEffect(() => {
    if (token === '') {
        alert('Você precisa estar logado');
        navigate('/login');
    }
    }, [token]);

    useEffect(() => {
    buscarTemas();
    }, [temas.length]);
    return (
    <>
        {temas.length === 0 && (
        <Oval
            visible={true}
            height="100"
            width="100"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper mx-auto"
            color='#e63946'
        />
        )}
        <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temas.map((tema) => (
                <>
                <CardTemas key={tema.id} tema={tema} />
                </>
            ))}
            </div>
        </div>
        </div>
    </>
    );
}

export default ListaTemas;