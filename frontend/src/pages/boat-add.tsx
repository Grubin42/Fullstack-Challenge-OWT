import React, { FunctionComponent, useState } from "react";
import BoatForm from "../components/boat-add-form";
import Boat from "../models/boat";

const BoatAdd: FunctionComponent = () => {
    const [id] = useState<number>(new Date().getTime());
    const [boat] = useState<Boat>(new Boat(id));

    return (
        <div className="row">
            <h2 className="header center"> Ajouter un bateau</h2>
            <BoatForm boat={boat}></BoatForm>
        </div>
    );
}

export default BoatAdd;

//video a 4h50*/