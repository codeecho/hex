import React, {Component} from 'react';

import {observer} from 'mobx-react';

import { ToastContainer, toast } from 'react-toastify';

const SideBarComponent = observer(class SelectedUnit extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div className="well" style={{height: '100%'}}>
                <h3>Testing</h3>   
                <ToastContainer position={toast.POSITION.BOTTOM_RIGHT} hideProgressBar={true} />
            </div>
        );
    }
});

export default class SideBar{
    
    constructor(scene, state){
        scene.react.add(<SideBarComponent state={state} />);
    }
    
}