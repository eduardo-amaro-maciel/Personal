import { useEffect, useState } from "react";
import { Container } from "./style"

function SelectCity(props) {

    const [ufs, setUfs] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedUf, setSelectedUf] = useState(0);
    const [selectedCity, setSelectedCity] = useState(0);

    useEffect(() => {
        if (selectedUf === "0") {
            return;
        }

        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
            .then(response => response.json())
            .then((response) => {
                setCities(response);
            });
    });

    useEffect(() => {

        setSelectedCity(0)
        props.handleCity(0)

        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
            .then(response => response.json())
            .then((response) => {
                setUfs(response);
            });
    }, [selectedUf]);

    function handleSelectUf(event) {
        setSelectedCity(0)
        const uf = event.target.value;
        setSelectedUf(uf);
        props.handleState(uf)
    }

    function handleSelectCity(event) {
        const city = event.target.value;
        setSelectedCity(city);
        props.handleCity(city)
    }

    return (
        <Container>
            <div className="uf">
                <label>Estado</label>
                <select 
                    name="uf" 
                    id="uf" 
                    //defaultValue={selectedUf}
                    value={selectedUf}
                    onChange={handleSelectUf}
                > 
                    <option disabled value="0">UF</option>
                    {ufs.map((uf) => (
                        <option key={uf.id} value={uf.sigla}>{uf.sigla}</option>
                    ))}
                </select>
            </div>

            <div className="city">
                <label>Cidade</label>
                <select
                    name="City"
                    id="City"
                    value={selectedCity}
                    onChange={handleSelectCity}
                >
                    <option disabled value="0">Selecione uma cidade</option>
                    {cities.map((city) => (
                        <option key={city.id} value={city.nome}>{city.nome}</option>
                    ))}
                </select>
            </div>
        </Container>
    );
}

export default SelectCity;