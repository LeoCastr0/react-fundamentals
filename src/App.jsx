import React from 'react';
import "./App.css"

import { First } from "./components/basics/First";
import { WithProps } from "./components/basics/WithProps";
import { Fragment } from "./components/basics/Fragment";
import {Random} from "./components/basics/Random";
import {Card } from "./components/layout/Card";
import {Family} from "./components/basics/Family";
import {FamilyMember} from "./components/basics/FamilyMember";
import {StudentsList} from "./components/looping/StudentsList";
import {ProductsTable} from "./components/looping/ProductsTable";
import {EvenOrOdd} from "./components/conditional/EvenOrOdd";
import {UserInfo} from "./components/conditional/UserInfo";
import {DirectFather} from "./components/communication/DirectFather";
import {IndirectFather} from "./components/communication/IndirectFather";
import {Input} from "./components/forms/Input"
import Counter from "./components/counter/Counter"
import {Mega} from "./components/mega/Mega.jsx"

export const App = (props) => {
    return (
        <div className="App">
            <h1>React Fundamentals</h1>

            <div className="Cards">
                <Card title="#13 Mega Sena" color="#B9006E">
                    <Mega quantity={1}/>
                </Card>
                <Card title="#12 Counter" color="#424242">
                    <Counter initialNumber={10} initialStep={5} />
                </Card>
                <Card title="#11 Controlled component" color="#E45F56">
                    <Input />
                </Card>
                <Card title="#10 Indirectirect communication" color="#8BAD39">
                    <IndirectFather/>
                </Card>
                <Card title="#09 Direct communication" color="#59323C">
                    <DirectFather/>
                </Card>
                <Card title="#08 conditional Rendering" color="#982395">
                    <EvenOrOdd number={20}/>
                    <UserInfo user={{name: 'Leonardo'}}/>
                    <UserInfo user={{email: 'leonardo.castro@test.com'}}/>
                </Card>
                <Card title="#07 Looping challenge" color="#3A9AD9">
                    <ProductsTable />

                </Card>
                <Card title="#06 Looping" color="#FF4C65">
                    <StudentsList>

                    </StudentsList>
                </Card>
                <Card title="#05 Component with children" color="#00C8F8">
                    <Family lastName="Ferreira">
                        <FamilyMember name="Pedro"/>
                        <FamilyMember name="Ana"/>
                        <FamilyMember name="Gustavo"/>
                    </Family>
                </Card>
                <Card title="#04 Random challenge" color="#FA6900">
                    <Random max={100} min={25} />
                </Card>
                <Card title="#03 Fragment" color="#E94C6F">
                    <Fragment />
                </Card>
                <Card title="#02 With Props" color="#E8B71A">
                    <WithProps title="Student situation" student="Francini Zequim" score={5.5}/>
                </Card>
                <Card title="#01 First component" color="#588C73">
                    <First />
                </Card>
            </div>

        </div>
    )
}